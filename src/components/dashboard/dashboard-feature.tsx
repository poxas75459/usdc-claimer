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
    "3VR1jmtBct9dtuZ5ZvRnevdv76YaJwYQGuqU2bQTfbzPfSuSN8xa69rcL5rXVts5QVEb6yL92f5AxpKByBgCURCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i8QawsPqmnpKWTPThndmke7eogQKfyKtXGMabhhhcBGDG9sQaEJj4JnokKaTYUMwSBQ36ZChVWCnxpBQ3DghpHk",
  "key1": "3BDgEW6XNFwvZ8aBs411yoZBqHCJL6BLBZtxKguGGAVQ7eu2i4fjh6Dm87xFf896nWkxpiyM1Jydg8TaLwDy3Nq7",
  "key2": "2mgxUhVn6GEJ9ihRiJMiAuLUaChhmpnuzxu4UD42jQPcwfnXwb9aqLiw93j18RLkrYXDrnGhCNA2KGWaSooyu67k",
  "key3": "E3JXbqBSPn6ZdJtV6xHazYfKsKyeqX631m6XbFjmciEDoyW4tkyaT1bV2J3DCmM8mVvoubV7fEdi1Rip8Ej6F4o",
  "key4": "9gDnLvqiBsdFg1Gyu6FZzykpEgRFmJuFHbeM15k95fpjuyP8ZHu3WkTVjVW115Stpj4bx9xb66CXZgH4UA2YeSp",
  "key5": "5pmgH2vc3NGd9ZPjdRgMQX8LpDwx77fC7W5XnyUZ8PoRPEjD3yJsiDCvcztmeu2nHtN1K8vG1UTCw4c3Sj9PiDX3",
  "key6": "4mfRHpKQsv2o97N6DpXUbeXcGZhDh3t8BzC5nJeYk8SECBtCq4YCN7E87ePvm85ngXpe6DwgJaGMzJVwGbm5v5ZJ",
  "key7": "2bdNY61kn2STycpSXxiUt2nKECGAkbQiLpESAE61ArK4XyzXxERcyaCYCajqVUkwouzkU8BUDfiGsArZwTXoZw59",
  "key8": "4nyXXXhxgyQTRX4R7eUrE9xpTxQttbPuYdAUmv1uYZ2N8iDgK8b9r9zJntEQ8bLKBoZ7XaYEiEcTBhgwCprhZKHv",
  "key9": "58c7G43G67rF8XuvksazUg5c2rtdZQhQ37Rz4ttXt88dnJrru4tLaVL4XMugBLBgTCJ5wQDdAaC2HwbRm5p5seyE",
  "key10": "31bfVNjDZMsQV7XmdyS4fFzQx1x7JuyHqV8K3q1aqesjqXmYbthUHyGBCmWivriYixjV12R5mNhcDMTndmznsfxU",
  "key11": "4858TCPbA7C8eqede1Z1nMG8ETQDNuzhKgJMc2GbEMqkk6yzh52iTHPkvLb4RenQMyKp57cKSKyX2xp2YK3A1M1S",
  "key12": "2UYD7efeX89uir7Kc5RwEY5cUo64xdrozB8Fe1F3zKywQb2iz2A13RmP8GuGjFaGBN1DxMQdDUypdXFHHnmDdZwJ",
  "key13": "4wMXJ1HPtxaRs9DY5Cce9znxW2SHgeXYYutdHdkzp1bS2o8ePdbRhNNJ6U9MHtvp3xx8tSjVRs2zYDt7XiUtszA4",
  "key14": "4qgkpCtmSYi2ga96aqHZo6zfmNg6jfKTgnXubKHg969Fs4k2yTaHg3tJvKBkehn1G6zdw6FwnHLvYYqHFpa6NZaE",
  "key15": "2FE82tEmv53TDZUMY2QjPVShMrQrugRRfGnXaxEtTeH3SaRXJ7MWkzkm47vmbY6iU8RFHVLdH1tZ4adbNYBk1rm2",
  "key16": "47rNtmJgLXVxxHbWGXxzuJdAnzRejD9LZiK1BdBiVfnjTCYkPdRt9V9APDkJ1SZRRRfko3qMYiwohrtW8Xo7Vp3H",
  "key17": "FVZXV8XqZQfmEHw6uiwdb6VcqMurYkwmbX578N9ZvBSLmnMEWCD2vHpJTJL7Ps1vTj6jY1RLmcLHrFy661ADsE5",
  "key18": "3i3bo4LaCXYQZPABNd2RAUujaScbfUxzgw3BrSFvwzHpeGAouxqwVJdjczonEaeTsUp2PbgX8JVMhf87tnufVuXY",
  "key19": "5SyjJF19bcBweJcsLKmLySCevqaW9F9ddgc1xjjjK98BUQPVBUkh8Lr9amTG9KskXrhcUnDaHYiqsLFmzttRgvjJ",
  "key20": "3v9DkT7AAj2okeTPF46cnmw7xkqBY5HknTyAMF4zkzBGX9fUBD17X1JTpihKLjcrzdZ36KTyKwGWGbcgtk1EXodR",
  "key21": "Z6A3LXcu3TN4Q9MsZWRWRhEf8FDczwkbLQxJmXUiDC34nwShtcXceHDyFSsZkHBq2abgpctimk8A47nDcgqKnXS",
  "key22": "4Z258XjySEsYvqKc1eYxC9hmLrTRd8R3ptEBzjWjxxASG2qWRGoD34uxA3FTxc6GuLC2XNqk16DjecCmhk6wJWnE",
  "key23": "2gBQAJKDc1qHu5DaXnZhU44FCPfLLzv6WGmCdS2RJ1sJHo6Hc32WFZzEeMa3tdgybxLkJgtH1mk8fzryrLCkiBCS",
  "key24": "3HHxNuSUGoDPKsn5P9VF31aPCsCH83tAapXcM33u82zGf5avnEqLbmxth3GtQ2HSusxvgGPniks51sXfdFZcfuaG",
  "key25": "3PppfN5PNzYFp48jUsDQ3RGcvtvowf88cBr2Y53mGvMYcJhgKK2ZoA85bfiEBo595pk5R8HfaH3WvhedxtL527ow",
  "key26": "4Aqa1tMPfbuWEwu4ufnPZ8wEXNYP9VTWQFBdSW283hYbnKMY5GU6wMZJyF77xFJyGcVW9cqUSiUbozr39h4e8Pu8",
  "key27": "67WYtaGeRqvcA4RBDFSAcGFcppgnY9KmCmiKs3ij5V7bkhaXSTRvtEb8M46TzL5kNVGBLkkb1YVYL3Xsa7d35A6X",
  "key28": "5P5AehpvqtBTsQsxkxAF78S5vRx7qPvGcqrbuLsCvWC5RjY1d4MEX5ZNzQDTNTw7JFp2W7pHTXUDtGJvFdDSfzz1",
  "key29": "2ncPRVEmdYepkUZR35o9ysRcxC9sXwku18WxFcNEcTskdPkDRjZo8u2bgi2b2whKUbGWW8kaMFqG7koKkPBaziQn",
  "key30": "5WeB5KhQpbomy2XVNkCQxKinqnw4ju5ARiyr8p9mowcySs8LkQogit1NZL2t6nAgD8iugRZjHSBsjnGfubMUd8Kd",
  "key31": "5GGperfEqskE7tUfYeTVWpQvGr2by98qLZDfYsdtvdSnv2zn5p4o1SJg5C92gz9WGMZ2ysJPHrC42phfmB6HwPim",
  "key32": "BFC5yUbmK6LKdRunEMW2Ln43ji4Ar8AMhM3YRovdeY4WwxLzKwxCbDmrPDm56Rs1WY2TM4sVBSXhNMZ7U1EFMnP",
  "key33": "5nGb1b1MwQ1sXsdKuCrqrTQyPnLnuVDQKAxsaewTshSGEYxknrQZvLfbiDkUAutxhZw8sDURNGVTrPNPgtMZyB1c",
  "key34": "4GXbBKYb788eohQVCdDkph3GkWritvmuyu938sWJWZdvMaZgnmgJj5yxvALwmQm9hDb95PRhCfanWaR7a8z6grLS",
  "key35": "3H3K7usYNs3364Q18bmAXYmauxh5vF5MguUSeCjg1fiyLLFr8pAPDBiDhTxvqqMzu3DrK8SVGRGyt5tczDrgdbr3",
  "key36": "5y7ysYXbnm6x7YAWWNmRg31bmKoUnDNbo7QSeQeuR9Qj6P4xtKGC676kNNeVx8iZaJkJiBKy6ibBQ756zjVwdyqA"
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
