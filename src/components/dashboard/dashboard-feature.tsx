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
    "4YJ5pycbGaAsDky39RBygabzSKa4zvbyQJg2RnsJThudAZuURhNLu3RiddE8qpUJCFvuWLanHDKuvBYahMKu4RNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n76vQcoD1yj5u9w1a2z4aTc9oEiuPbcweVWRpeUVXfwWsDrKPLDE9DZbzB9pMnr7wBW4voCakfhbZL1fuuHH63y",
  "key1": "5CJGvKh2P1PGrWvcAhT687xU2J8YQ5yMLvkz9T9T6417RiGa7xzfkx8CSCMUM2Fm9efPoBc3AqRdAU3DStDD3ywZ",
  "key2": "33uDdsDXncXUoDQsdCrXLm88rtcaLUyoFqMGhUW5hTbWPUPRpYCzeikCmi24ufKsZZNYXymHBccbwCdxkN5x7XGk",
  "key3": "3TmfjX2J55WLQk3gZsfL9T3pKsTZTwETuXqKmJG5p4H2x3GE8CzbhSLxT1ge5R8s78cCdEkXUcc25ftaZq4L3fzr",
  "key4": "28C3iUD9w6p83hZh5cfCE5smz7ScKjoNqd6Uzx7UxLAhS4vv5Be5gCHfgwFjXJoGznZv7fDWNi8S1Y3kiB6465VZ",
  "key5": "122DGvoHKAkqFYLT1RBxLysA5xcHu7h9zREDTNKfxkqakEdBbpdoUwvMyQjXwWVy5c8vuXH2kpmSBktUcyBVd2FP",
  "key6": "3hZw3iC9F52PuD8hDD28UwEEtrQ7oS3BrWcYPVqAdKn7X9aJYcu187gCgDsmc6D9PMhZKApGx97B4fjrJDKMXmgo",
  "key7": "2Zmz6JKrzFeUfhJz4EeEGmNzYa6pr1aaRBkck4k1KR5WLDAn48qza6Ntr8rPNvnT3BSW4sVRRfbWxYsj1D3cxSwe",
  "key8": "2z1RpEGdZ8VuS98MKycnUWa8hLjfTf3HTUL88SMfQvvCVzFdr4mcPVRGHarcQ9NL2V7qbaZvBGx7c86gCixXy26M",
  "key9": "64vyc3xT4Vno58rnazysC2o5DEV3zg19JijYWAK8ZFzUvN3PhB3GaVm4nyesqj6Jh6F3z4zxj1vTfDwHzc7DCEPw",
  "key10": "FopfJpKoFFPiSC3MNriyLJfSVdQGh3dSqHMMqmKCKfWD3Cy9tabkX4DzBt1FcUiJRVd1KWUiJohd3isnxQk5vyy",
  "key11": "2thGkWHpuBSmdYonvwPYVfDF36Jb1uF9wznp8pRiCQmMr2sbpqVWjymGxxEcUkZH67zzqBVw1NTGQJ69osBxhCkp",
  "key12": "3LntwZRQSTNHRxM4Pyv4Beqo8xPqAr46GfUCxzNPj7cLottUTcLQYvJpJZua5No8ihfRt5ji2pSEy91TiBSPTW5S",
  "key13": "33AWLKFggey1FT5r9V93yi3qUiskt5o8WcydVHCCrDVBAx53aV5imaZ3jU31bx2CnJwJfDXA9PjAtvcZwFeU4xF7",
  "key14": "5hVSeG9dYVAmygPZNUG8yZVKLWcu5Ve9pHoNoB9vVYVg3Y3N9ucjrcfBB7c7ev45qCsYFseY9Q7TigWqnmi83B1N",
  "key15": "2LPyHh5iLF8BNHzCfkaEHcYPb89tfwHLRmkgkbAoAf4hFyEyjjM6JfW9YHqd2TBxn2nVXnAhtY8J72iG6YZeSaqX",
  "key16": "5whqKtgPEXft9JKXpVD9kV4uCLq8ZqyL8aZMzW49mxQfSVKU64dNu1W9nroVaGhTGmBpAXyJDDwFLZ1xo9MYuLLr",
  "key17": "27eHc32WwehmftKJ9HwZyc8zdpVQcSYzPsS5Y3hCbC57jPSX8Lsg798iU7PDohRRABrvv5bSfcdpkBLTmELY52as",
  "key18": "4X7oYWWnqewnBCAx5bNVuzwreuRxRPjVFkLopiPWKgUigYBHz5dC92KqTjg9XeXTA5METGeh89br1Ae45yvVsE2N",
  "key19": "2VgTB1cERWRPZEi8EoHZdFsUV7ESpHZHYymXLLR77JiDM5yitxK6z4CFLorSgeGXXGver3WJN4LyLgzEUzyFS57",
  "key20": "2DxJnqurWsjumRpXKBT8dhAXsNFwi8dRs87wbafw8jDoHZkJRr2nzDTbxF2LB6WTKqxrdc1pKkm9VfnWweHC8QiU",
  "key21": "mrfmx9hMoSeWsQmXTBU33LePAJ6PcuZ3MAwE59oNh7YGJLesx3xEEwJwogVuq6iKdSSDCb2oUNY65Q6VyRzS1XX",
  "key22": "2WHygRxs2rmAZbGwjavyntoZ9MRNxvszsm5ousyWPWrBYVbdtGD51Vt6v5wLcdvoBWAXBxz4XoRdU7EoNvP4gdem",
  "key23": "q1W62ALJ5jcPiL8rFaergbfW8gPyEB4Q5bMPQBaCJtA8x5rr8qFzBdvKqMx67WAh6dgTyaR5fpcV12mVJV5XUJt",
  "key24": "3mpSqgBcjiXct9pX7XBo5g8uqYtjKeSZFZP9qVVZ13BxnQbEUcZLYwfJFBgC5QGcQ73ustRi3kA99A8QJ4X1V5uq",
  "key25": "2rgRdK33htTZywHBU4sEidFzo2n2QAqQojiFEHWStvz2U6FLaA3VcJWidT9RJtDd7DSkRsTGPBXet9xRxBeSGQyi",
  "key26": "UFTJYzUwa1K27sTqxSfjuiKsyC2W8DH9My5oKNxBJm9Lnk3iceNpWgjMFgYBaBTzews4yYjuJ58ZSCb2owckMdo",
  "key27": "u1VNTzCY6YoYDsBkDaQwDLvtY9hsgAVWsZ81pf2EBQPe3FfSw5DZym2Jv6sTNdvpDWCuiJ1CWZNyf69trsZcUn7",
  "key28": "22cTXDRm32mkdEuBmWPVyU2hACy7mKvMTwaKpEPuHaMLYSvgkQPVdQrwTPb5v7MPCSUdRoXczdpaR5t9TiWeeEgt",
  "key29": "346hiYex94uX7dADBhBLUBh83QHAcgr4y277PsfEZhiv3C3ViyzLFZ9iQGp37Y99WWht6gaXDv7QyPCTFamKdG8k",
  "key30": "BuetF9he9XyRQWx66TNM3Pryg7xZrBMBYw1G4Nr5XicDw1ScAqGfWsKR1LqLz6GeV2t55uwc3X1PDP5cr15AA4A",
  "key31": "WwnrxQj7KrXepSzgDQtTyKXfwzbBdT5LE7t5qLHYQ8axzjtGUqKQMXefyZ3ZkFKvvXgpwL7VN45n3CMe9aSRKHx",
  "key32": "4xcgwaYbNkDxeKwN81VyDmqv3gyoKj7GpaEupLoV39zzRwLVPSaBQr6bk89pAZgFQ6gBCkTECWNPuXW4xLALQfQA",
  "key33": "3MaCwN6xHNCdoQrDJQPvSJttT1Hh3bT75iBNpGZK9GZDm5KNk4Kh3CHNQV6oiRtaHeAydG3xp68dQvNzabWzFcev",
  "key34": "MybzqtE7qABKW65SgaVgW52X6G4YHmEY7uWMm5y6FsGGu4Hr14cuB7X39Zu4bkQG4bYt57QKusPuuSJTftYXNcy",
  "key35": "2gZxg9P1ZG72GXBXBY1xzsHy8KDmLHTUvrPfUPc9dK1g8VS2dpr9fhxkV9B2nKiWdindifb36TvU8WWRG21j6Gqb",
  "key36": "3vJXZfAvNb5UsXBsXuvmixCPF1eH7Uthe8N3bDnCqHHY7ooCVEqyTDSgPoKiPpNzTeQBk35s4QW73s4QDN58uDY9",
  "key37": "nYzQ2M9Ewte7rvaxBBR1QrEwVkA776SFN5yMTA7ELqsktSC36U2y84t2Bt1sBpZ88tEXhqspBWWQxW8b4YtrzyE",
  "key38": "2bdn5tY5rBwjmJrJYGSoLnXWgU844PG4odSwU8hNebiAgoREhs98My1Q6GJrTQ4tppgi6kw4rACpFbfjfGzWknzm",
  "key39": "3zAiJj6ABwaw5Do88og1CtatQ5m1KV9Y5DMHoEh3YaFBW1QdjuUP3iTAqGjVxErjnsJ7KaAjAzBu7cWFZcbWGR3h",
  "key40": "5HtdSDWvudkhbbwo9Y845NnsTherZ2NEaUswm5HonxDMuoqstHBoxwsj78c8obVqikwvoczhcsLiaiFxQ4TsmL3C",
  "key41": "29iv3qHmZpXiwWnwGXPhcpqTpSbFdxf8E14Sg1Muddzk7RxKJDKxZGw7kMbWgP7m6koGCBF6QS86BxXztotZFZzN",
  "key42": "2bBQSKQq52imyVp7M9v339fYtWy2hqA3aciVWSiufh5rtBKebPvL47734tirU9wmvtH95dzgnJS71z3hqdpB4GoE",
  "key43": "imVKapMcTebWAZoybLUsLP1XPJcuKhnXvvGGeLj4rU7eygNP96r9HvEgonuxxF4SQcAN6AEr6NYKtqzcrkgUxUr",
  "key44": "2mBggrhJBSdyPD8EPJ62MkRSm5SeKKWV3bG9QJGe2JEuw9X72CZpPSFEdHr7haAwo2wxgtJQ8NzPVHqgRdAJrM2m"
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
