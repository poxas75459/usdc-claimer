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
    "4St2eEjb5S3mkqSFzugcdhMyCmxi1cB2sWWxwztFm447h7arRN8RefUuD9AEc9dx1ymSEG84zzcxw8jpJJfoehCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zkPVEd9n8tGgUEc3GCgmjCSAV62VqtisgXbEnAuZQjQXvWuooLbYEhFRhe7EzkQi8JwMmzMbLLaNT2A9K9HNRxa",
  "key1": "2rnQkfnSF5vRjDgi5Fnt4zuzLqKihhhd9v7p2yxuhN7vGo9nm2BhztqRjY88hSjjbZEA79Kg891PPmsNAdS5Uh7w",
  "key2": "5E1ajHVdYgQyYPxS4T87HEPw2Qv5mvhvn1CUYbHJUPt3ewjhXNtk1HDeynVB4kHgkse7e9CHxQYnQx3s9cZAnTo1",
  "key3": "XxGDunm9KfF2BYSPURAUg662vCLauNw1BmF6qbyoaksn9qmmf5xS65Jretmda1RJbndgbVb3Pe27W2LUFsXrYrm",
  "key4": "3KpXxjRYX3NP6f9iRecVA2xu8XGQ3r4dfDgFioAu9cEFU54hr5sJtNoFxXfGsgM54MjZNa8a4GW5yvuC44LW4UpG",
  "key5": "3SLEmogaUx5ubWsVyNcYJz2DGscw4j3nMyEGopWiYfaou8YFatgpFZEq25aw7mbsDVVMvQAGswwEDESQApEGBcpZ",
  "key6": "4F2ZzwwiBZVduWcnCuocax8cYoxm5hLcSn7kNXAt2Jd3A1ohh2UWB7MQepwBrrmWJwJ8cmYsU8TQ2BDWYvGcVL6A",
  "key7": "4Gv3gA7m1dCxE4YjftHWTUGoDa4yMkSHKYhtUCT3AKbVMDkmC5VNdERj7WfyEnAYmBu8oADQe8NzW3tpkA4Eg3B4",
  "key8": "2V2yotU31E2LEhD6HEWRyNEarSWaj2yMdwumG8LmkCm6K1DYEyg9v8Unn1PwANeSSoxWmF3qW1sXRpyCmC5XtQAS",
  "key9": "3USYDdRWvtggUAepdvJfHPjKjyi2TUrHPgQyRy5isHCqB5n85KuNKdawLm5J9ws8ny8P7Nd1q9Z5i5vcPN6AUbt5",
  "key10": "CJepoj4u4vrKfUUB3PJ6xk4VTCa5oiYfweA5xW4nh5UPA8MKknXBTAdxfzosvMqPHWCm4CRGoU7jDLCqVnGbxyE",
  "key11": "4gaD1A8w8623MyAmSz1cqsVAxhYYBMHmfGTBeUrR3AXusH8pkmztD8sKXrHDb2p87KipMXS75HAALhbo66bRuso5",
  "key12": "3J4PaAYVwJgwS2Ym2dweUuEACAwd5cbHaqXoyDSqN1tAZUqaRPznw9Qg5f2kZqRUvYkDhgenpgUpBfVtcV8284fW",
  "key13": "2gXss9svuB7KvUVHYgaVPwa9etEkS181mFtNC97aPoyVRUEDd2N9KrsWziaYKheFbm5AkpVKnh7zvevUVgCgt6Bm",
  "key14": "NRA6pFcqPZCsf7NqxtxYLVDRqvRTda7yYu5mwRF4iuN8aa5wGiR7gZfgC5t2fwjAZ5RKMRnEdYwLBdj1GRT6Ng9",
  "key15": "391GdPo8nt6JSXGKa22yrEyxU5U94kJ71YUEMnWk9QyjgaznDrBDuSnsVzuXwE7wszWR82dkSZyWCbieqNCyRgEy",
  "key16": "UQA3ZBh6bBiLUohXPNHexfitfCDtf9HJtpcEJBfen2m6gY1nHRbvNEmjrc6YaXGBLjTWPePwFhJeoCxbf8HmkMM",
  "key17": "33eMSTzYJJRjYwUzSVLSwCwmmZAUrzQmuirHpEt3D2nDLCmfsHT4MWx5eqBgDwuW7QXxYv1prE3tLGNboAu45EQE",
  "key18": "umz4bN2zidbMB1okUqmQAqFkG1iCaDPF8wtswgoP6dbfoPvWeoCmiraqVbpNcq3bx26w8cZU8ZAkjdCLQqUYbS1",
  "key19": "4JSsDDcdLWdzMNsxM6qTr58RkqA5X2pvddhzudzhcsibkS4CybvBoGCZkfT6nLWhuY5jF6y6UMzEZhjS2ufvPT8K",
  "key20": "5QcfSq3EhSgU3Lbo3LHLWNfgeY6WJV58NZPuJysgAmLYxNZ9CKgRYaDP41HLw1qocsrgd3Brz6SzpnDYQ5zRnTqE",
  "key21": "75NtA8Vz1ZQreDowQ85uhfV67YHV4niifbdeefZaip2HsASC1jdJpZGgZP7d8mEoDdfSREKYgD9NBbjDJa3VFSJ",
  "key22": "DWCb88gTjZdFjTJUG5m6todzm9Hk6C7bDovUDyoPBtouXThbsoHPzSoarsKzZCxrkTcBmAzJZ4yzxnLUm2uYfFr",
  "key23": "5g5scndABuTjtVJTtrKd61Nuz3LX8f9XnMax67BnbutXbPg7KzfpsrbV6kTiQhdtGEMm2uoAgwit3ayBJssN6vd",
  "key24": "5uWCKKFWhiopQeBssJyHMjEtVYxVEmu8GvTAPRPoKXU1wnkNVyN46dGndWmoQfu4YCY929PLGtXrVMRbEw5UMHxs",
  "key25": "2ybD7dnBwY7rCUQeu4RKXNv8D2Vtg1RB7zTwUZjbZjintSKGZxHCEQL34F6SVnyE9M3y67hhuBHRu4iQPULgVCGW",
  "key26": "5vtsDAqpv5cpJVZdpL2mEEyeijCiwXSztXkie9HNrxxqTcggLYyZbDbi1jK5ri8iMY5VcwVYYH9GK1EGtYMCBbT2",
  "key27": "WjC4qMz8tvErHwwLeziPoXQMRwcUmUfEWBM32TRD7M378fo1uYiLJBameRGJqtoo7K9DJrCd2sT3J8PkzH7wad8",
  "key28": "NY3tLTdsj9wvenY21z59ukKttLXs9UmfR6TqFCemCvrw18HJHft7MtNcDyHWzAxQChy9Tsm7GABdvgtar6ReahM",
  "key29": "4k7s4CKP5uGaJ76w8vhcms7KJjcvAY1bjFeguewc5vKjyx6w1JMcRc22q9tDWYZTWCC3Nmif5LmFTY76NuBLMaRs",
  "key30": "2zCojs9Hj5z55huFwyVJC3okA7EzuvYDKMVv7GbdGbjXxxC65q6gTnVgBbuhPiFEV7FrDM7wM54nK8oshrzazj97",
  "key31": "zRTQE1aSUcQjVkV9BEqXiP8o5Jg42LxwAtd2Kygx6yEERtDrLqqRmoQY1U5ZN1Ng9fKRwNHkNf1cauQnc7v1YK4",
  "key32": "cPyrwpE72VsqC3yv45QdEepk9isycgyPCU64V829vAkxkTCNzL7JfkFtjVHjX5zFcVxDGFa5yzyPjU6oyYZocUR",
  "key33": "3RHtnpSAiAAvTz2eTh4WZaK7Ha3arGtVyUkXDPQnjsWsTgoKB7avJWitVzsm6zMzyMWCVerGfbufB9i7A5zVqkc9",
  "key34": "PavHsq8VJ5gWRPcdyJcQT8hMweXgb7nWviGanGU63TdwtAk4T7yjmwuAgjuXSkTDgGL4YxNqfcsZ8RG36EApRRg",
  "key35": "3t2kYzGNicgXHLLqcbNexsupHHsz7f3Mtri3AonxyEqdWYwp16uXv5rgPnda58c2xAwev6eGEQUK16noTaQiYjVC",
  "key36": "55WJtWrH5uhVjZZ9x4pm45RhJsSA7rn2oxq2qMwwkTegWKoPEmmCGrXLSoAxLejJCoLfS2co2t646VfmwGps4bjG",
  "key37": "24EZMvx82s2kpmdH9wyCvKXrgZfc5v9YLG2V76QeZ7P5oQ362SjEmpXB9H6d6mU2u1vGy6WzWLC1eHF4DB2RBo8a",
  "key38": "5bXWtXXyZX8b8uyRP4WxDToNySP1b8ZCzzaR6QX4U7BoBcHXpRLHTcrXKpEz58VNMixnxBVMknQfe6wJDSvBYUXS",
  "key39": "2nyY1HjAcquZvJrRm2gCnWZEbo8q4gJjwCDc91i2xvaWrQ6fNBw8xQpRhtPecMG3xZTs6Qg75rNFogmTxNxZ7mgR",
  "key40": "3FubuSWuyBw4f3nxXptaSooQrCseYj7rY1C9j3BsjqtwzU6PDYC6CnwStmKNRFjB91atbEhNCeboD7HBzx3MPSvF",
  "key41": "2GSseRJaX27qKMFkP5bkQVDZhuigpSWGdshTQTQqQcHG1BaXyWsmKQ3P4U4vkUmLPmmcXEAaRxJqnWaCfgmtPfvi",
  "key42": "47t6n3EKDM7A32UxR3SXbvCBCg7AtNYjeDFwK5NgtbBnt49Frx3aWgZkYuS9C5NrHUkBAxXa6ZF7S9qGmjjK5QTw",
  "key43": "2Cbh2t8AJyJ15DsTJUuRwzF4LiMeHMyZay9p2zmvG8caakaaZNVYs6HZP6UAsJPimxj4DFW2UCAWQU2eyEP1Pfec",
  "key44": "3fKsZawDz6uvfsmuAVnSf2V26cjQASvhQDqt6ggZe97T1ypBjMm7HjrzkM3EK9fCCpVw7msiWDNMsd6PUDPDty1d"
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
