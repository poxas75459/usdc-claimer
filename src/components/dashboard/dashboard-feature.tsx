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
    "4ayYiAjvtmzLczMGEf47LCyLLUv8H6V8ZWeaXgnyuFg1zsR36YWEaW3cHQuREVNwNDx2TjDpygiYb7DnuFrg6Msq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "296jwjn2NzWgoqektU7FsJnUDCBHdCCytR9LUiPLFc9YZfx2SQDHQfmrLRFTEkx3ZiNRi8UFxd8bfHE1yuBtZxJp",
  "key1": "3tkwktE7BMyEX9WfCQYvc4QpikXjc8LSRJmwLdBHTMwFvtG1265HUnQyRWEF5jWrTmEyyLLfMb2AmVsdKGhFuEde",
  "key2": "5gdoMWpAgSfysjfS5UAXVQ5kPsEHo8X6VTdr2wh4YmHGiTC8GZ4mLePWbBNvwHYNcQyL6zhDTVTZkvNNysQYjbNK",
  "key3": "2tN9c8GjjxqELZFzrDrnbvgv7k2mv6CTikySD6DgmH1HxdzgESLtdDk5Vbuuv8SwesSqTE5KYBMoRukwzSzSyazJ",
  "key4": "5eqxb2s8NKTb8Ekg46p1DZcNMuzgQTMEZFLZa6z7ibkPkCQEE8MsR6AJqmVsPAJRywrtnJxFgZwmsWBT6cJ99B4",
  "key5": "2X2iYatStDyqF9TzcJ1x25FBrb7yFAiiH1og4pGUUKFS9LjcvcFU7AtCwTVDkKgkTEQd2e4yZrBgEFPH2nyjwFLi",
  "key6": "hu1rGdvDka7rtkqJcHa9Y9b9nwtbtnr8ydBzPsJmJkNanzTR4yFS9knL62DaSUNmdrQKt55URxcLYRLAQEwiinm",
  "key7": "2DyDGWe4SbvXBKUT63QdLrncmTfgScivU6seJwedCbxpuEKaHHKYUzrB9h7Qjgq2aALfWr9hD6zoxzV8pYdMhgut",
  "key8": "2kdbjxAHhPqtAVUNKRJ8d6vwDX5Cjj6jTL72sJvk6fD4zeq3hSU5pmUTvhPx7jHu4rgtmHNeW2KugkH7ZHq5gguh",
  "key9": "4NmYhx9R1xiDXWcmxhaTWRkjWK8arTusZnqWhk445qJwub6rELoc9jfu8ZLCeSi5YHUtLCAx9AhXsVTvBPQQWksR",
  "key10": "2BM5D8tgwWBzXG4ARByY8F6d41PahaoHtN8XSMKCk3bK8RjBgymvYaJtAUb5oYnNDS63GQFyz8fRDeYsSpZnF8FM",
  "key11": "acVnZ4XKH7bUPghbmCp2v83kBLW6j11k2Hrps8YhP3GR4mhrnW4nVEwALpbujGehK1Cf1zHMpMvZFfkeKcd11Gm",
  "key12": "AwphB9jniysY49sBKWkyhkwyx8KhjodRxfMfmqzwp3FnEJBRazrDK7WG8aNQBzdaqVAh3DgHtkcFB2zRjH4PNWY",
  "key13": "3NFM5RaPvpexn138bs1aEro8LCcu4SEo5b2kRwh5y2SZNXsJWQ2xzcYwQNmWNQNgjBxH5U7DnSpqS6dqWr6K8PYT",
  "key14": "4QaKcwHu2swsKV63LVSiVAP7rB9sMouBN2sXSQhnbe5T86BnJjciZoHSivNB6Am9U7nfxHtF5uiGzWFLF6jt3Bm2",
  "key15": "2pj16YwuUhRgp3iKn4wwvdnXPn65C8MRsNEkLeVkrh7Bzo9Jcuy3iPYmcbdkvjP545LAZnW9oFGM6392p8zbEBEM",
  "key16": "ADcQMicY1V8EsdhgFn6mR1c8X5vtcrgKAZRXrFd8Tnzo3SBWMgo7NrRXuMqDmVmq4p1ctdN5tuGkSmBfp2STgQv",
  "key17": "5bvpXshXEvggddJEYGkrXjLW1rY84mdaQrwLNAUXXRkKvUhjNXf9hwmKoUB9q5MSyYq2sWNE2Xyr1nCpotRfsdqc",
  "key18": "4snydbj1WtPb9mKADekt1YnAkQRvcqMbU9uSdCGdjhubeozpwDMx7dwsAmC6uggs7UiZNq3FFzBAzJh4bPeGRGaM",
  "key19": "2dBiqHHhtFvAKHi6Wt5LwUeZy6fz8AeA4w6VTbjYnNQp2YrS51eCbzsf4vVbPty49Dtx6goyp1bbzvDF4QPUeiSK",
  "key20": "4ujSifS4KvSVXVf5V6CnqQTj4TT95r8cAPP6MPSTAaB4sDqFdQ4jXWCCBELBJS3ZLx3uE1Dhb4Z3K93nwu7J6oV2",
  "key21": "2nW7ZSGVq3kGaKXBKEvZsuMd15i6PQV3RA2tNj7QaJ9LHRU8wXESvaCBnsWJvEWXumB7dqFRYmizYGU8aGeyUaQM",
  "key22": "2qy1ChBd7ZxKBkTpaEdgBUmNSZDarf45qi4FWPfszMEMYNWaEqZWV4J1chkkike2VQDB8kSYCEjhvGeb7csaGvT5",
  "key23": "37x7uCnupJ6vAvTmbZVRiQu3fQUjE5NGEW9LFyLmdMZSSoTtCTabcFdVvEqcgKXS2VMZ8GAYWy6b1vRDyiAM7wvJ",
  "key24": "3bCwoyztX1mui4KLZZstJdh5Qw8DEPSMM5tQAhUDKQy2XPJSvYuNzeSeiX95dEoiWn8JGVdTGgZm4CwDdZnwjAyP",
  "key25": "2TEQAzpicgcvN1eM4iZvA9iVtf2SLMf4Up4McWgeGp8YW6y626goWpF1jCbxUFU8xFTKjMe33cHwaDjVeveeSFoQ",
  "key26": "5t3Dt3qjippqawfnw5VGwHWfnX7wNwG5eqTPzW2uG7r7i5ZuUPybg9Cgc3PEw9WPg1pvVPjMjE6jUV5Yr9vvJpyJ",
  "key27": "2rwtHhLxzdLbiLD8RVoiUiERF1rfYg5dJcQ6YT2eZxkvNtdeNArPAHDY4q1w43QqWnLnRWXvesUZ2awhM2mRWbb4",
  "key28": "4f3ETjdGbjqM7nxK6digcAz3G6r4ubwGgGeMHrd72m7UtGcQ4D9tPCEvdzdGud9ATHpCZWkXYncqwe1cPmpnP41z",
  "key29": "rF3UxjNQtGcv7HHvmwiDzbR3TjYniETtuaCD8zRoPbE2FWuyFMvzZ7jgCepZvTmFpVHNqFA6g38m7oRah51nADa",
  "key30": "2VJPEtLQWEHAy5rj2WAfByxBNfG33TdmzrMkPxj6yuCdErRmhudFccAgxv8zPQGFG5dr6wttnJpYKepsc9ZPmxgW",
  "key31": "FDAVJHWZP2DeSC2yiMGmRsFnJSrKaGri9M4GFvD9Be8QmCHxDgSMpFhh9bjoowc1DWDoJfuih2ZHvntDE9Z7K5M",
  "key32": "537URHHaoNyvAS61sAr1uaG4zP9Q2wt8s3KprAzETfpqyTovc8oBB1ELK3L9oqU7vK3mYFdupajMSh8sL1qQ7sbu",
  "key33": "3St8KFZ8FBbeCyj6KjPspqQtvBaRJRg4KppgoZfiTKwRAM54sNMP5bVYmvev6mtJEdXbayT4YpbaJX6RusQ8ChyF",
  "key34": "5tNNXZLajAjHVaiujY3bXmu3NbbaRgeNkCiMJygfwhap4i68qyPBVs8WV5FQEkpyECj4qBsyz3EYEVsC1hFvmBhp",
  "key35": "KUBgYi7ev6Bj87gtdC2mZS3dimn3jsdrTcQJaVhQtNNhG6nGoJfK3Ypr9dpDyheKtAwSb25mRVwX8Tt8y1BwapS",
  "key36": "2djQ2bGXbfNECa51ckKaSvBow1EymBDLQfa7Y7airag85oBPskU3bJSkaSKEoRiNin93eifoyfT8Wy7weUvhTS9z",
  "key37": "24ZKduPh3iZuvrovrwCecc5mK8Ptt9fsVPS635HVkxcD4YzJ41g2dGnSD3M4rh77hJgEiT6VH8kaqS44sM4cSih4",
  "key38": "5w2nwamp4DdSttX3xehvLoQiX9JnWNU6enL5iiGYCurTMD5fRmhwMVMc2mc6NnAqxd7kkbsUXDAzrg6oPRpFqEZb",
  "key39": "3GBafsz2L9bAUoUDdMJi5zbKECAFjEJvTu9iemV7dyTZDws4TyQDXZyoyww8xgwhH7Ygy69gUzufXEmh6v3TnJhV"
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
