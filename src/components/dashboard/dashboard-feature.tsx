/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "31e5J5Rb4e4JUvtVJJcXbVTVrZ7X7KGKuFMQvVQrc9UAVN4xY3FVrdWNuGiSDEqoDAg5nALVuNmcBXh1L5xraLq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SnoE7WCpzrBVTuExbLCN4cMESeGfabVKNgDhLbCxn5LEvEMkt5R5zLKBwfyQhWoCsPerG4Bor7Tuneb6E9wVWfD",
  "key1": "5teCj2dWqbha369PuaH6E7fcPyJfdT7n7L6fpPQvKjjCE7fRynykoWa4Ftk4D4D1fgnmvXEtqXtedYVUufSUxibS",
  "key2": "kGYm4hLCuJ8qJ2C3im1MD2zb2fA7JKbFKg8VKekHVUbXfgzvsXKhR3LEtGJAeCSxmj8AVBuqepqCA9UBSA7hD95",
  "key3": "38WwicGyJZGn6uaaqKAS2iSHHRhUieD6Cx12FY219Mho6CQiK4XAhtd3MMaHAQiHduYkDnmh5n1ifnvr6MP4LPpx",
  "key4": "3AiNjRoZE8WqNUpAjWMHcfLHtkv5NkDrtGRBvCMiYkK8jbUPg4bZia4XDmYVJUExSaLUz4Nzg1JigR1p3nb3Z5xV",
  "key5": "58fChwC9bpgoso48xwRkQc6a2LktX9o6VB2aCfg6Yb5rddbUAjj9JgUmUcDqna6hwfiLGXgTL5PZLHxoSj6HryTL",
  "key6": "2js79CrhwBdYzy3gxqMUoSsBgHLirabBtQoXMUrmkeg4akZCoJw1uPKQGVFJ9uxn2Dy87hZJYSjwKGhntRjL3bPt",
  "key7": "4yf5jXmnF123KoqeDYRJrbx7NTZPQsKNSnPGve1zuyUBmezrjydZc5azVnnsq2ZuyNmoN1VXEihmucCVayKw1ob3",
  "key8": "5zLFHSfuX2BjCwdEUtGF52HnKKyUZaRQ6tjB3PxJbfkzbFKsxsR4Cuv86GKQisgVwip1WcTS3285EYhV7nRaSRpk",
  "key9": "4fR5THM1cHJ4AR9vh8BXSe1hfHmiBA8RGgeQz5vKNAHtdY3btG3rLRsB2aimak47M7GR48oAqtcAhUcR53imvogZ",
  "key10": "3NKwNtpKdarcvd11GAHvBjYkuzQT2Ud4YpvwaRPM4eHcRZe2fBEmiFLmUMHW6Wp4HwTMvM5PTVkiaZLUvcQBiH2z",
  "key11": "5av71SbKJAvQ8ewk9AegogP6YvoKA3aAmGjf2Eraz6vkss7g51FXzWwRC921wJ86tbhDv5MiyhhqM5T1fS6wWpq2",
  "key12": "24iBadJvKdUpKSiSfDQFjWtCvXtDFKBFfsEH86rnc6pBB1mn8joBSSKvUMsnpw5hbKgAzvP3ZkKAKRKrJ4Xdz2KB",
  "key13": "JgscE4qzL6kmH9CvoddMqAjCpoku8NJKTexUGwKueRsrFtr1xSzE597ZRW7iwNTWNJJgAWuWgN5uDvFmHjxASVW",
  "key14": "4PctoXnTVZ2FVWK3wsyTBNm1ksKbq43h3wXYLUKcc9CqYdTKN8G8JBvZHGUh4LeoVbpqB5Z7iTwekf1dWpTuishC",
  "key15": "24xs2hf4xeVdnVxZ8sMXmB4aHd1WgkRpM8hH3q6RKnnoNmP8E9HyvapXpWd797a3nAJYqrUtEAXNAfbvLqgKqVAc",
  "key16": "YNXQmPurL8ZLmkXPUp55aUMaxCsUHxzc55RjoQzEuMSKm1R75Ypnu9vcFrs59g6aRDGiQ3g6pfuLK2N8dBAGWeQ",
  "key17": "2Sh7S4RnGNyD3LJWr9b7knfwqhAW3WNpXhfYNauomfnNDYHCWx1D6jGhRacsVdMYC6a3ofeBVEpNKYUfj5ggg8YN",
  "key18": "5S39erUVbBYyfR9WjB17grLdUZr6XwVGKbzWmx3S561sT1Bb1Wn4SQ56cmzkhc72xid8cwdx2PU68H3CHtXf6CGH",
  "key19": "3fz9cjy6YjtR7cjQFGVvXNxzc5ayWBYQvPPnrA3M7FmCviXQVxZKkCRn4zGNMemGQ5R2YV2ivsW3NQbqPLfhPBby",
  "key20": "3c1YQW4YbMSsp69TDX5KrfCLyXiqSzjFXxRtgpzgkuAGgswdCr9qS7sjjGkA5kjofBd7DToTsf3YsnQY3HM54WAU",
  "key21": "3CrMbkikTRDZrmAWHqHNxUh2nX4wGynYY21g1DWEGA4hX1jVugnxcrUFz5YUGb76oSNny7Ux6VhMYTNPgEQzPbPm",
  "key22": "wut73puLSQAuoUfuBoA5GTtjqUHpfnguFMYTceCAgDm9kDScPex2TBigKNndyo3rfPwPoesuTbBr3eVH3bCHKaG",
  "key23": "36J2Ek9Lq4wEioA7ZGeNmC8iDuZnWs7v4SEcMxcDfdAyB5rXoHyGc1nNKE8wdoX4Fdys6NwFuen9FZD5579fdcsu",
  "key24": "2ue8tT8YwqYKkwrWYtsnJdkHzgbmL1csDDT51Juukci1SEN7yi1TPWbVQh4awQrGHehrwFADDUgBRK1xRLcNWcDS",
  "key25": "aUwsQ6aBTwdbo7bf1Uot1gP9fqSHZheKrx47P76MxvUWZXqFpZdzGcPVg46JnC2fpSY6mk1JBrUfpeAmbR8kT5P",
  "key26": "67AWDmHn2D9L8gHCztvM1hfh7XxHas15vKrZkEU3VT9fA88Z79YVQ5x22ZhnrXe6kjgPoxiCRiuocmqH3YqjEg6Z",
  "key27": "BjLqdET51ecLuEP3kvRUHrQxKFS3J5HQtrkHSEujoUw8erU3yy7xisBWDhrKCBzB668HW8iydiKCbphUcsmoGGq",
  "key28": "yFNk4pyAKd1ZZuKdBAmMtuoEd53Y1EufzoFmBJ6r2xuQR6LBi28w61Nr5wH91eQ3nYJRNG99dSJyjj4QkPEy2Kq",
  "key29": "GWotKWYvabBSzDeeCVQG4H9owQRx7rnxut1x7tzZ5MyP3FSv1DFLZCb2tNEfUmQDAgXNySBoxRj4CtK7ahWjgMJ",
  "key30": "5dPZ7wET7XuM5at8FTxgg9wTLo2wZgkr4WJcEy57BuGfFtvW5AvXBhgwf4ecT3z2GceQaj1dfPZQYB6LdzbLJZbX",
  "key31": "43ysAuMPXa2EzBHHqevdQ31fpqRJfKAK7rZ1KUg5UEsRYakWWsfYjo3tLeHEy8dimwiFsdEAQKpNFp5N5Zh3UmFD",
  "key32": "66X2AdFAVVmQ1zPW2VziJcwB98Ecj37Bt6NN2dPSbcdFp8qrW6nJhTEjQfVqXWVrfJ6jaBrJ7mP7cGJPe68FrnvC",
  "key33": "2rkcDCnJ4tysX4Y3Zae4jE2HFWc4ihA2wEeUJX6jb8G18H6YqZTpEMkK9cxVWJiLWBvz2DNEDb8PtbexPzVBZzvy",
  "key34": "5vD6ZyDvjt4bVP5T2eAbq3Buzz6V9tAvGwenhWMDzfHY33H5vNAurGExijNrwRAb5TVMmhMMmQePgmKF8uTMCya4",
  "key35": "32B3gHuAy3rKFs1w5AtRkgSo1UdNygLDFhk2ZAkeLsJxaxY1oj7nkfg4UhaLBprGLduvmFzqUd6D1DSyj1DnEBzJ",
  "key36": "393wjpPTzfzSh6eTADpxYx8ftratyaNjxmNsF3cwWGX4ACa7w3qx4NCiZFwTvuszSG4zdBkdtN3KL29TwWrXBSFE",
  "key37": "4qb2TgSZ3dr43zmbZZdityGa4yuoAN9zNsaiHhupLDixUbB8PTyhJUuY5QBBuA7JopmbRWSUSPtVCcbrY3XQWiXh",
  "key38": "64p7E81kGGUtoGrdGyPEaYTy8BT6MfmXZCcnP3jzcz4PAemeSUZM9p86bHYuW8GEiqeRuH94fJrALDmaEnzPJjmf"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
