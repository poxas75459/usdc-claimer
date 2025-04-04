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
    "5cJzS6wRJgrK8YLhBHHWv1vY433KJRSxBmZaf7nviuNSmWyjc81VG1uWAgjAvMp5A8MGekv4JWFPykxGhsYN4FRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Kz7QJkcbz1JfKmZXsGu3pA7Mg28YxPo7V7QZ4G2vCVnW2gp3aP7BhiJ2vDvxCd52yY919tyPRGJxBLYjZ4VUWv",
  "key1": "4RMT7F1HWtPvBGQthJtvrRnLrRRdjYBLTe4dTFvfhzgRNsVET38r5tnToadGJtPyQMt2iPfDQgfj6Pep1T7GSR1b",
  "key2": "664KCu3fTFo6GoBabNLLVVRV3cTZnyw9TMFY1FM6xPkFaGc1G4Ve4JsFLX5zgs1unx7hM2FPcdereFLDmoGrjhDn",
  "key3": "2zVG2PSrpRhMv3SgdRe5mf5nj9nwn4FXDQQYi3R26Uzr9zZw3cuwEz44QkdQyvs7G9Sdiw27hQvn2xgDGugppbFi",
  "key4": "PGnTkdcpLHSMmBhLJVjvaN1mN6REm2NtRFsD1sAB6WyzmNuoBPBnobop7GsZeGTiyK69RLDLBdJWvnRGga23xnW",
  "key5": "5kMMGttC7pqnQGfiNLck9ZCvcrDrcdaXMYAdxZuDkAqU4ttE55YQEgRe3BQHXRmppiv1vwy2cFKHq2PBb8S2WuQv",
  "key6": "4qc6aXrT4qX3kDdsF8j3rePgjtJuWADcqLBpyKTVTkQ1s1Wc2HGq3ZwDzfAzaqSowNK1YKH1SJWCQ9BqpZW4t6WA",
  "key7": "Vo8vh2PXL6bNxKu2uwBQGRJWWDPg5xqxUFGKZ5VvgKXZdfDCPxqmJWBAYxXRzJBNx7VHi6WKRqkrJs1oywAUT4Q",
  "key8": "5fGhuYcvMGWive619mLwXgrKybp3XcgFSYivctG6tnhL9CgUMQhxvPKNBjwhp4Y1pRTyR4VmQxQd9LZRqQkGFL45",
  "key9": "4NQh7namFR8bCxf1HZSa9AUH1qvrwqKQ49jUtgWioVKx6hJL9e8WwAqqe2r5N21YSoeUEAp8JHddeRrJ3ZuRWbkL",
  "key10": "4an8B3N51cUxifXAHqQa5hTymb2qpyi9CSY4ZT8tkQyAQtozxBwedmESwVY1KVqTkZiVTE4BBLJrCo3z6zGY1YAP",
  "key11": "4n7ZTAMgFb39y7Fk5dVPo7RDaQ4sVeM1M1HifFYAHL3v85xm56GCAkScSjFBLmRc9yreE4czAqDyE1mp7bMD1VRY",
  "key12": "etx6ExioM1cQ6TzjGLVf6pQ22NmVxpjxagfdRSmawydTpWZap2ryinxxiGdvNRZW5Aiy1vzvRGnAzryd9paUHD1",
  "key13": "5nZqemGwftKeqMwTNCQiJpxXffvE5aUQxCaH5SpYgs1pdWXE485PY8vxSYUjd5b9xAGhcXCwLQGRYw2PHLVuv4gt",
  "key14": "4qfN4XHAftvk1qEpCPAjnhDtJdNJJCknCznNSfemKfUMmGotFPVdLGbPH9PdK3aWGLd1Xb5UGb2WbQqt738MpKS4",
  "key15": "cLrdpo42eJgXzTKttywf6army3RhQmLyPWASuJabNry6FzsWWsAC14t8j33QB4YEAvZaz1gtgwZiReoYo8Z1Zin",
  "key16": "3HzpqxFiTCBqmqX6CZLFAeahjszQQR9yQSutPDprTiLKq2XyYvCejn2z9MsD71kKupxUzPzuxMgdjD6t1D3ha9dB",
  "key17": "2xRgnG7SPvAj8XWQ1oiS67R8qdSGGYSEhUqbkk2UP1z6xeVYS4S2vqD1dpiyMMybnnbCwfvrMug2pAgc1sSD5mpS",
  "key18": "36zJL7A4J8RkZFc5hXR7Px6rjef4iCBT66XdbYn3bREzTQB2KKHWnBHsSyg4ZtimZaP3C4kh1C1Gr69oitaiUuTc",
  "key19": "5PywHb7FYTGawqej6MbqwfY3BKCroiePFPdrXn3WDJL47j3Tu7JbthA6RdcoQ2qu7WLrc91kqmDYt6GR2NkX4b1g",
  "key20": "25i8zeZR2ELYQu9P7PcoTSs7kd74Xw5HgbWfXR8x2nC7XohKQHzsGjuPCXKNCyvESCzciDhrTYxQrjAb6eeWqoR9",
  "key21": "5BXDEHY2EcHszbZJjvheU6RGLsQTqU2LHS3RLqsgP9SovG5hB4EVhb2sN2MZkfip8GJ4iQNwvJ2xgMF9FSQ1oV9n",
  "key22": "4tfvv7hQR9bfF8iZ6JZz68JFnWddgd3zMZK35ueMhB7ncWGrmi3eSJBgzPMxuXVU2V31qyi2T5zyFcJgaL5Weq3Z",
  "key23": "bP64S298mYw2KJ4f91Zvb3SbfrGF1SV1CWXYoLtTS4npammzURdHvyHYdKTzGW68hyqKEdRuMqq5d9SDvdfUv5d",
  "key24": "2jdS3Mer3PoQ6jm9Nfux1eh8nb18d2rfbK4vcnKRgPq8pK4ieZcFxSi2eoSpeB8KR1JpHCdqGt6Ax62KjTci1NFt",
  "key25": "21w1rovdeNe1iXF337cWCvL1dn1Zp6ywPYvVv4RCFvY7RifWkDYgvtob9a1je8PRKh7TKqo9etMA1vPRZ3c2yZXv",
  "key26": "4XgvuMHBz1bCCxdwqdWk4irWuDz8p9FpTdZr5bE1bKSbgWnnUzmzqnkqY85DUSFAyTkuTgkqUiFxpKx7kALz4Ktq",
  "key27": "3tUAvkMuBt9BokdeyV9YHnoS5pDKTC8gsUwDWVVsueuY8hHfA4ijXLCqE2KzkKuqTDhCC3ALWvDNfs4m93M4iWFF",
  "key28": "5bV7ZpqUZL3kv7RqavKCr9TfD4dHYRzzTjDnaC1BxgMn8SpMV4mfCj7H9rrXyKfZYCj3EuSFGmyNQriWNchWjs7Z",
  "key29": "3d8D4kDJbUEkQpahz6yn3dG7cP36o6cBK5JpaonDdkscaztCVeYjDzLibC4M3wvY5ptFXdpuoFT2kSmrozVXsgep",
  "key30": "5KsdDQ2P6L1MVhMTXz5aYTHAhutfm7yGnrKwHkZQWdACgs5nRgPur87AASdK4SMS4iGKw2cyJqbmztZK32QLHqN3",
  "key31": "4wR1sRVWzm1vBw87XcHBCf5ijCPQhbvV9UsegtbDkdc7u52QWQFKWc9QtNhzdubDZvRFstsQPzDcFDWNtgU2CaY7",
  "key32": "65XXnZjDB451HBN1kcPQDUtQtSEpSpGW4c9x117RBDRZZ6KwS4amcVKoffxq94moQAdTHqBKMqjN4x5MNQFZMW1Q",
  "key33": "4jYmVAtj1voTm2Vt2qtEroUJtC3xutWdPEzGFTkUG3Utny5HjqMkLWzekiQekTddDWwi8RScUEd7YiEcdsmuuE2L",
  "key34": "3oDNVmRPcCBRXmLCBb1trowEmFvLygMxw68zWTohW6YWPuF7zTQkAvyM2MVV3UzkyYcbH7S4L9teu5HXAN3ouPHg",
  "key35": "3z6KqV2ZgvvXs2HobDsD2T2be1KE4stmvh2gWP3j7w8nuKky6bA26ZcD4pLrMCWKgadkDKC8GkQwNUDbehpfkAoc",
  "key36": "22MJb44APRp1dXPp9irkW2pF2iNc4ixCdhM5vwQ1TZpRLzeMMb3U7y9dNs255BG15WQFWYUS55SbYaGc5f3KWr6z",
  "key37": "4UWUwWvqnrguW5PzP3w8zSyMa1895hRzsTN5uxY6huUC9TTWfPBjbdn4M9CyoEeegFKjvGG34CG6fQvRPh6Bukg4",
  "key38": "PWCaQ9dx6vPiHAHKWSPNPNuoVgPqWw3YypzzdscM9hwEMCymCayfvwW5awegQDDteMFers8TTWxAELjB95Knmj3",
  "key39": "TnhH3sS4Cm5rhRyxAWiKLKqmBtMohhC9Z638VNRqTkqa112mYQWViUBhwUvSKp6ZixxT1FgVBEux6pCg6w3ZZRP",
  "key40": "62AcupbHCF8uM1JG7koybMNzXJXYPrqCunKV45d9dQxwjEaWCZqgPcuiFFAph3Zrs2mWYY2mVppfBvyMkdMHu8Ve"
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
