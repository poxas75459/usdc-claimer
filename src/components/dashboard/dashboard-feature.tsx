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
    "4QQndHT3PskgYuCDJ5473RmbSnYtmVvaKjhrRY9JJdsmfGUACpAMWaLZLwdEhVFzwrtoXLaBNi1jYJLwWvfL1VDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aoPQrN83pKr8Dgfb4RuukFzShEsWo37XgBE4uZonxfomAhSBMbnSXFC2r7HJ7csYoQd1p3BzBFNYjJ2iX5gs1xJ",
  "key1": "556HXKtbdGnsqbU9RhWnNCX29GYsCWVwjsX1s9e9cExRaazYoYvCH7a1oa1CrQriZ25Hifi5aRoRa8mpEDh57NhB",
  "key2": "4RwGsgPdCJy8f2iW2QHbwy1ckKLAKTWUn6HeLLUxroKKQuKah8mtUs7qpJwyKN2QyHWvuSLNTF8G8QLkToxeytTC",
  "key3": "2RMZTGjJX3dpuRr2WUarr6FmJyF26UYvoRihf5uT6fiEJNxvuocoyyyW6DvyQbtHQduzrQvcQhWWL6PtarrBDDJF",
  "key4": "4fSZAJa3pzRJ8mbRZs2kzb9m61iANAutGPyFnjANHQ1orbzetJBgxwECnpc193n8HoVxjG4f7M3sZt17uGsuXe37",
  "key5": "5mahVsuV5czLwBXuHAno9PPf32yM5P5UG9AQAhfRScHvhWPhwHBUVtwXpCB6roNBErPyFuKKRvwJA9qZVVbX2k2C",
  "key6": "2X5fHXjk6yzi4hhUTfLkLsGbcPEZQWcupQ62Mf7mKRfzEYAMkrfRebG4WGgDXp2Uwr189uPsscgTLbpVCk9BBe3y",
  "key7": "4od6g1y3P7bjZ2CsERrxyB3owmZbreGxW5iVqzQw9ymVeHY8ES3orqA53AjHvWZF6yCJcvb7XkRqx1UqzHeBHBS5",
  "key8": "xqpQuNs56JXmaMc1tdjwqrbGZovCmkJaLjQJwZFDQky9bWpjnKfAaovD9SqLig5BfuDYBbZTzSxPXDRnz6dCXad",
  "key9": "5sL4TjoxW7ycLjsmuqaSJ6pxG2N4M7QPcWdvEoRbU8S4FvZbPvoQ888eECEUtkQ8c5K9kE8B9iedgUkiBdfzpSPC",
  "key10": "5WBkpKLR6QhWvN7Nhy22BWrfZFPAb7Mxd4twesJn6vMvWbAjWEmmLKdfQvMgusPSN451kV5qB6ZspSer7XdoQp7G",
  "key11": "5QLXMw5VLZpgRPULpj3y2RL9vBea1ce1gpuR31PJLXTyssXP45Tt7E4idijoDmV4i3PLta2vAdbNjSGYbyKWdcE5",
  "key12": "4Zx9i9Bf9RrSpPiynGR4b5biSFax9CdJ19gFTzkeZBtGs6DpYHRkdqSAY7RNxGtRMtHJAemiHPpbASvk6S5BTePF",
  "key13": "5ynxTYdGS3X9o12hQMJdZkpH5wumcAVjiAuKuxH7AgPxoA1iJg7Z9hZtbw3dLoiZyr1Uq1o2auwZixQmKn97FyVF",
  "key14": "2i27BPATL42qPqBexUbLv1bNX6awnqgqKBc993sJj6uCsSCE4BDAt5HE8L93oUFbUKxsR6VyJrFM9KRvSsVYcchW",
  "key15": "312uYWK9xXzVZTiLeHU36A1eN5kqk994m2KbwffPHATCtrTkwzVsUbgKVxm3kyG4xojPf6HvCh9g4kRL8S6egQoA",
  "key16": "4UMyadKroHNsUajF6hDXjRfTbkVrQ4CQoSsvaB1zGLGJT6F1uNSXbEzTa6dw4LgTosAARX2Zifpy1yCfEfGdDc4C",
  "key17": "qJFFdo7SY2NERe7ikkUYTBfyy52zf6mziLnRU8s1FY8vathgcL6wpBsZo25aED63fBCwd9Sx68259yiszdVUead",
  "key18": "2JqPRhqV6TAxGQHcbVqrb6gET9uZmxneNPcncdneLVuTDQ1oKBESCftf145ztC6FynkXzXoqDWNNWMvxdaWsQeib",
  "key19": "5H49LpuLM6j9h2g1he4FGK9EPaxxA1KdQ6oYip6wzERhdnLPtuPUQ3KdwebSYZKw6EkcZhELkQgGjFtsPmJxJKDH",
  "key20": "4gx2bVV2myCvf7tQdVyfqiHYY3mUbX8u33bexqrgc9LVUCwS1otdibVmL1eZFKBVYgyLt5hbd91vqWPPmcGm8ypS",
  "key21": "3eNTrj1apbdkH7KskYcBgcGyZ6Sz82wX5uB5odnSFHyX24fn3YbiwrmbUvHa2kR5SyXqRTW5Ns8TiMkVhGDD23ah",
  "key22": "9wkMzHyebEA94JhScW6cn6okzS47GJX47xpnf5MTtN2NQfYoxoCnLXNFEU95w7tZYCtU5M66Gu4Pp6rr6jdcyDR",
  "key23": "3mvmfQ4LRxvjGFUxf8joNUzbhDtMue24omktcnpFpwth3X2ctgMF1hi6ByJXU4doW2A3q2CHbafsfMqeP3P9QG3T",
  "key24": "5bM5oLsAmFFGzo6yFwgR83xoRB6bJRAbSq898eg2HmeZqHhPbCRkA7YntLMgx3LtoojyhrTrEghr4BcgzXLrDQP2",
  "key25": "1DxCG1YZLDpxDpQB4nAW9RusfEW4TzvooWyC9v52JznQnC8eu9UPuDaSNMSsEagkW3jX3fKbo8eQpdRKat1rjNX",
  "key26": "3RN4KoWr4eVibykycsmmYWnhbwz3b15SaAwjkmAcZxzaG9x9rWoPn6dUZEWLKSDPNkQbCYzn1fdqcGX9g992Qzh6",
  "key27": "5xGjYBBDuNYWyXsJip6sbbp4KJF7eVeVGMpW9MK8kbrSauHPKPz6XMmeifouPTGfMdbRk7vBsugi1SZ2R3fa2hPY",
  "key28": "FDrsVUUUeQsXLNZXp1rMeBzHAPFSPZjnyNJxXGdaeb337MwBSTr33rKcPhS65CHvuScmLXhfzbWGtynqFaeoLtn",
  "key29": "3MF4tL3DX9Y8vp652n4g7N1tdYpmXuAE5h3t8ZthDEpg9DJL77pgFmMVcWKveQhi1oqqNkK5fjuAY55d8YMSKo5z",
  "key30": "3USCcAdPyxy47uEdtDKbepRMN6HSpDaLT8HtSe88XisdfxDS4WSkAWu6eFnGAMVZjZ83T34yQ2zTmL5VpkwJYgTq",
  "key31": "4CQfhk3sydGGR9WrtH6tKrWZsMJ2dS2ow1Ryub6FgnQpb1Yp1ogCpgs8DB6d8Wgs98NrepmQCKmGWv4SA8Zv6NAM",
  "key32": "2ajZ4T5FaMH5C1gMQmD3uYkTaV6TzQ4VHLRHidxQS6RoJvxnSU9RD4mzhoLe42VAAFcfb72LPLTT21W2TwWH6yNh",
  "key33": "3h7ofJNX4BJUQWxS3z7LAgWct6P2DZyaJ67iKJF8ymPETaR1vAH92nhBr5XVriFoxGVPDczbrJ5sdLqoJBjiQ4Z9",
  "key34": "3iaYxd3o7uNBSPuDyNTUS5eNXLpnrzadLgiiQ8mqYdF9iKErC6Dh9NugfZG2hH5oVEs5xRuYcTJXWWXS8YYMrDQe",
  "key35": "2vetQZjJgENTmrZLR7dDfkE1rZeS99qqEDncdWNXHRn2KWp9gi53qrNh8PpN9VyDWZmGonoTXJ6DApUNdYQoRPES",
  "key36": "2JcqdDkWu4vxXUqH4LHp8TQFKUQELPg1UX251uiogtcRP5bjiu7rDtEmcAdZqXJMwLPHpzP8DNzfMtfPfFqnkR8y",
  "key37": "GH4dwJyugG9j11sLpJEDXS5wvGEKvas6U33o1krxeLfHsZfrHmwGU2DjnEwers8BLC4sBwsu8Fh6A4hJ5jfAJhK",
  "key38": "4sVDS1SZCdCKt4ooS7YPyNbzfYFA16ZA3rxrxqps4Fe9SRF8xXcP6Uwy7Se1z7FBvHUeJY84A7N6JHCYvGfaCbYJ",
  "key39": "morS3dwWQiHpw81Q9Ux5mCUChN8pVo6Teex3SFuWiCwfWF1iv98ikJ1K5y9G581UXkGt8nQxXPoLAb9PkHCSoWa",
  "key40": "3ffs2Ua9UAKfB2sWtNbPNnwwve7w1LnzbCZLbsqfpsQJDpqgL4doQoX1ReT5iHioSqS6ufvCFAvyQ1VMZTB92Cqs"
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
