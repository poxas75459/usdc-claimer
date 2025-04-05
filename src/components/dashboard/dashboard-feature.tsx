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
    "4GAUTAENUFfmrjxej1s4A7YnwwMmEGANh4AoXkVFo6maH45sgAUvnyEG3V6ZWdpJqaKtSQGiY9SbsYvUCCznCeiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YPoYUyfYKRXdPtXNFzYAFWnXhv6iiTRTi25wGRLP4oeyk15uw9yjEUKgjPszqp6r1h3t9BGaTY9jJJFws18Rgj7",
  "key1": "X9o7pEsF4S4MoWc8Pg8Nswchjc8UX2DB114hwB2KN82rrSc8dPMSjLixa3tCidJq74PpLtijgQnqDPvrNNX9TBQ",
  "key2": "5E2sWrMHaBHJL1kMhNnuVPnsSySbWzRuzksac1BZjmwp5AUizr32oV9ogBFphpXsAiwx6tCe34wZdeYUJhVcXYa",
  "key3": "5DUsyfxU1XuTjLjWyHQqQ5uYa36WjrFYLo9Mqxw3hgyTXKxu1gnwP3gedqzX3fC8Z9SwuDreaWPqQdowRhDZjHGZ",
  "key4": "21gHxEPGUTRPVuqw67dGzaBLDgUvScbkwC5RVsj1nUsAdv8MTKtN8B2ZXjZwUnxaiGwGN3ngspQVjqoapuGu9A2B",
  "key5": "2ncvPFBTfL3VTTnCdsdFBDyf2VXa9SZYUFjHJMvEQPhbmfrn4jLSsmnEpHRM6GMu54mSTqY3V7MNYqcpF6UXMR8d",
  "key6": "58HwhFmtAYpJkbaYE5D6G3ZdqcNbVQDLQE25w7YcV64ToZ13eoQRFYTaHvAoNdSARFpVYaebF2Z72dQXydRMkyAj",
  "key7": "4UMUCJ4iF8sZcgYZXyEqPKsbgbStAMGiXquX5XaM6DqUhqLiFeWEP5YCxFzhjoGgchMz6dcUXqVJXqmY2eZvDwpP",
  "key8": "7duYdDtrja8TgY83XwRHqLHC7nhPC7mXKL362JSncn1uFxq4ocB6N2PyetGnGPYKCwn3N7PyBUwtkJL2e66oc8u",
  "key9": "2zbteZWDzjF2AWX7wYqfD2swtwVpGbr7kJ6aQGnZDSocVRanhdaTcWuGqaBWPKHz1SFnH8wg3oea6XsujJynMsxU",
  "key10": "45vYgSPJCWdWCtga11PKT2YnCgzxDStdJ8f3iRSUTBQ6qHXuBsbubWduQ7eZEnieiojEM4xK2rfWVoGVfUsM5dnv",
  "key11": "iF3cFuDTLEhKg8z63pnYE5EAy7APksMXuWJ3ubBo6KqpKASEwTdvSrB6oMpzwJR9FAQ261iTaCTb3SKKVWxgDrS",
  "key12": "5psmQj3HDg5Dv6m7t3AhvDVaNWCGNmXt9dZdFDwjVEWgu8QY2Y1SSj2ieiCFqjw5SS5hUmxdFkDEzdUyyrbjMKCv",
  "key13": "3Biq8HBqV7fdCfSKTQwpBrbTBBVVSTzG7nzYPXzPVPewpVNofufJTi7gotvJ8YmkkZF19w25DtE2MKk755YFeRyq",
  "key14": "5mHnrWneTcP2YRtcfN5GoW7jb57HeYbvQjTUZZk9zTQM51z9npTx6Pfu6XWoaA2f88DvoAruwneC8PB3sqiGvYnB",
  "key15": "5HwDxF5USDsQjFmCe54bcwndZhDWuzTyHdcXKLoHbYYHpiJ9hSYGJdGhHDx3nqXzH9SgLwoU8cfdrgAzmoHTjEHH",
  "key16": "5eH2NJDtnFis9kpL1zDLo9VnS1rY7rdaueskjBbcZoETCBMW6J9j9jJ53HTNHcH9LjrNooUswQixRyDfpj5Q9ePi",
  "key17": "5RJ1pj5kUj6UkPnmooFMtH71CKPBS2E9E3p9MXHZZCerpgpSkuNHt3jfoGvVmEm4wpHc3qnG3F61eDshKAZpAtxe",
  "key18": "5MsP3DMegaacTkmb6Kw2EDMjRgHJfS6gfZNY8cVYMBvd5RMXnqw1ofg92YvzXcAEPb5UQkQk3gKNbbFz6FVJa1pY",
  "key19": "3xfe4T762JsveNt8pB6Kcz7Dpvxcwk7MjXsSTFjpDYrmHocXMoLj3PUDXx5PzF39fhQYPd7teFxmCf9WPhVkdPyf",
  "key20": "5e3KDFggQde3oPqFpNsRSiHKXvDqbTgceKNvUc5bTkuj1CuX7dLP28rqkEks6PoSfLwyPy2UPHibCEmUxswpbLpV",
  "key21": "67MWuMT5EZso5CikPWnmmzw6g79WncTUrsCSAM75LP4LxYcfmzQuizTDkMJDjvKaPboeF3eQMaXCkQXA3vEWd1D7",
  "key22": "2zPjcPVPyhQ53gokLgBHzjFv84WX1UB9GzXVLKKF6omi8u9bAC1vr59jVEpEkB88cnyVtVRyo3jBt2sgrVDqfRZf",
  "key23": "2rduyXWXaUuGMcAu6duX2kjNwK1f36nMMSvB8nnBR4QvRRDQFYjtwwTZRcvFGP5Ebb7FheR5Sd4XokygLXQ4HLds",
  "key24": "63r1bqae53BycssMrrSn9mBD23euQcZKDZqtQ37YHwLQdkez7wBJetZPpgowagEQJupqvw9gT5FfucVXbQitg6QK",
  "key25": "2iydxVEVJckaL7cs3tXB8zTt67u6GpJhqUdSg7xnHwrikdESzfUXFE6c77Nn16Xm45QeYFvmbc9uBeBtoLWHkdai",
  "key26": "2LyBPuA2hiLVTFyCHNZkT5UP4ZCSPJ569dStLsH8but6JqJviEXp8Qt1FybxWtsAMjQ9VuE4ijR7e8Rw46YMro6s",
  "key27": "513ZWn5owupUKf22MWhe5QGo81SUnfF69HmuRvkgekYhuR9MYGQHoHSJdy66LCRdn7CxDTZU3Eq3oRGSaPtT6s9v",
  "key28": "3UpAL8ziuukX7kk1cBY169T4frMMjYK6NVsfQ2t8UnoqxYb5N1HgruJhBy6gYSpoPwQ5vgpz34RrvtrhKzbikKb2",
  "key29": "WKkESNSzUA8ZhZtgT7iBgoJNsh3wsi7iEcvGBYFhq3jo2D3zcpWZNKaA4c2ym6De6eTxvHqkN9NPy1jycMFRcg3",
  "key30": "3PohZXFWePZaS5crQQrRLrjPnaHpPmq73mDiWk3YJDutuRXZ7xNo861GgXmKbXnUG1ciVndbDt7dRDtEyJYpvVnR",
  "key31": "fkamJQMUvh4JwgZu2RUKLcPxj6SRSov2TE2S2uf9H9xLwSMENErA1BmJPwD7c4sAsBSB1x9gCJ3ZRr8fY69XuvE",
  "key32": "e38oJL2Wtk6E2FuYP5JNV1D5dyUynvBnsVTJvH7mSRnQPYAzXPAtw875ph5BduJxXfQEqZUWDGVrkgdUZRxdNTr",
  "key33": "2CEevf3wQHEuQ1vU7DxgB32m7AYBYd2MNYATRQk8sWqEDdYMnALQoBex52QF5Z4Zi4VKmiYnQDSGGvtxvCzyZbBm",
  "key34": "32qkCrzE1tLZJJ7vgWuGeeXsUtQe3KvN7tpRuReohMVxaJLgeJmCLFhMkBJhSe2febcDCpNcfAZZzmp92EBA4Wuu",
  "key35": "4cBsuiBFcurVdFL7qTBZSpe939FHTSBevo21ERz5ASe1A32DfHafdZWpb8P83pPCUWXz6Xrt918TyXoebg22xKBk",
  "key36": "2u3czC7yki3TFU3X3cUHsjAniTi4VvsuAjcVFsUtJc4b5RAKXtAGi1kgDSVWJqgmUPesCHMq3ZzuV7vQ35E93jbK",
  "key37": "5GmZFMhoWemeh223ee41kNDirSeiXYES9Xn3qKfMbBwmahLBbdfF2XJF4docFyETiq5JeChEJNfS4V6ehxjDzNcS",
  "key38": "3N4KcuM3MpMxrWQsC5qAP1jsmPaErquupVqBvWescZDzPycKYFM3QxuX3NELzZ5t4oSmcsqpzoGYzgPSZAS2jdjG",
  "key39": "4qY36Cmuo3KxmhZ3L3BTtM9YWnXyLVcTw94C5pmmbiEjULw8kxMMpE2dd7YptpvMnkgjj6ZZV8oemLvZ795miCNW",
  "key40": "NbwS1xvMn7DjGf2AdWkYjg9RV9BdsDwJanmV1MTAK844TZHeKRYe23TESNaNoKbAHtpaXoiFkFJ59NtWDL3u32U",
  "key41": "2KUxXqWDgmzSAbDzHD7nkfNmGYwb3SEZ5xaeseQUXndFN8wnyaYvGZ2BxZ5BW3evf9rL4qENgJa4os8f7JaWRWh5",
  "key42": "2wvaTMNHuPfHfAUUjHVMr4XuZg3LhmagtxtADq2FaDKH55Y6VRiqmkcQmS9jXfgHZ8FAdmskNSWdPMCJuwyGsX5w",
  "key43": "4xuW3teEMsVAuQPwA99Q1ZSmHAk8AWxhtbugPZZy3W7hvPhki8ZQML1fWavq5U1bDZeCxuyXfZuonk6bfrBqcGu6",
  "key44": "4mUbZA9WCzG35wxiVq4kZQAALAebDhQXahXCtKTNDGeBUzWcdAyMYUjuu5zhVFym9by3KcUzTpxTibuAJYn2MiQK",
  "key45": "4ELL9EbQdJEwvGCuncwFyXeUkFoQ3roeC2ZWEKRryp24CmE2Y7WF5xZ7eTmNfGdVoHoqLdMHRXjXAUQYnV32QaNt"
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
