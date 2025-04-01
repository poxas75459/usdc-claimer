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
    "2CBzBaE8PsB45zphSmHF9QLLSWJm5uxo9Fjg6FwjuqxnFWz1btUG6A4YazoeXxnx9yvLTaeeXHbJu7tUpNoMbSpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45533u1NdGpWDjyu7ajoYu4ZTx5rhMP3RKZKu3sZDY9oLDTD6UYKZ8EndX6sYUb4xznGHN2B9sKNrJibccUTXSRU",
  "key1": "46BGQ2UCt35VRcYXMJSNzZUUc2x5vgRqXvUmZcni52AgRQAjwbskzssU4frqxEkQ7aSjM9biYrUi8HJqvXCEbDcf",
  "key2": "65HCcLtq2w4ZjE3k6Ms7CqPuxxosdc5ivsk6e4LKgY4EZt6YcVhXzB7AJXZauodRD4SJRf8X3EuD1Sfh1kb9qf7V",
  "key3": "3yNiQofXSPNKAQQyEPFXojbtHiX9o8tHEDGHwqNw8Xq299gQsJohQdqanMyLtrTdhDwRUDnsefToMpoy754VufRD",
  "key4": "3YjeaDBSzqJ5GXSpJFJsy2h4Y8xsMLm4EV2B9jFohAUaudnznxtDUPoNseNWyC2HscZZSeib69rKDpuEqgVdPRNt",
  "key5": "4bBehtYpbaBY2b1Fi1nTYuLcrusLxaq6CFavFPSNYtxw3He8dW9oUdWhg7dSCa6c8QxMX1M9gHs8cEaNgFFL2uWp",
  "key6": "424sp5EMXX3Ad1x95iWyX6feWkmTYnpKwVDtD7uMv773TWnCp5pB5p49jBCxrKqN8zLaayyhYF6dZ2A8QpDkJEyB",
  "key7": "2zwjQapFy6Tbb9hyEM5obmfNiFCuJEopaaysf324CiPM7pe8RQjLJ7oicEQkEMHrkid3Gc1XhJrrJ5goMPXXTBiW",
  "key8": "4kdEk1pqFJLtfFDY4VfR253zk4iPPRs14KYFG4a4wLBAG4imgQF68RW7mt9UN9rjv9cgWoh13i3Xs5wNnjZytc4S",
  "key9": "CMi3sTtxGCRfETM28qqKTTp17DZBx4fcX7xumzb1yftqJSHrVEqjnX4kpBkb8WBaTyenutzHQsPWuFz1Gywsmja",
  "key10": "3DFrFtPU8Hn4n6N76nhTQF369WjrUYKYFB5de1wSYxPAfz2sHRqtq3HPiTPwUrZ4EhT2fbgdMcHQ8yxovwUQNEvT",
  "key11": "42UFogXyfZziWobhCQwArYndrVN1HZSQkYomfKVKMaUkEmmrTFDBeevNYrehkV654Th3mNNRRPdjgN6gUgsSXMmQ",
  "key12": "58anPJa18HanGsUtVCZKRyCoXxzakegyRf7Vc3Ly5RT5j45nDcB5qVeEnptyAEcsVvZZc5skpFGQcwMSnXFx3S2P",
  "key13": "3MFAarXgsu5yeeoXe1A5BnrgYujzW9fiLxrc5zt838fZ5EMsoUwi65rs7PckEb8tZAWbebVQPskEsQ4tLHhgnG17",
  "key14": "3vxdTkJNstDzVcm8vq4adtG2hj6cuftjcWbAnycT5zxz7bXFkDDfENWc6oUAoxPdVV3VKM6HtWjBeyJH9wMthnRQ",
  "key15": "FYEmg26BxrUASJbw7t585GoKTWzMhm9dnctrYzeLD5Rayf8u876NrJ4NomyZEEbdS1TyNo95B5z4s5bXdMCswff",
  "key16": "5jwRDzEK8XqyP7N8oQkZtpJAr5mDDv3YL55J2N7Aak9tdYdxdBmRPT65ikM5aBHeRnnPxnqU4YjvFENWLwBejZH",
  "key17": "UuPMskFY65xiYUF4vfX2RNtvyoqsPZDrAMHAiFuXvL3asnPtHx1EH5SWPSbgqHnWTPGusWUqLjN1rKb9wr42K2H",
  "key18": "2cYiawKfjtYQHkDZHbX3Zp5mwkXafoer1pKDuL7iaNvsqV8TB9wEe9cjExEZS5BY1zgrXwKPqyXP2SRwJxakhmjx",
  "key19": "33PgH1MgpBpTqopbTKsbRGCsJRrLJ9qZhbgudrL1PNH1uCUf2wcxAX58Mo6RHHCfoyJzMW2LdsPTU227AVPnnkqW",
  "key20": "5Vs6Fq8eKH5GVuL64WXFdVr4CG5nQQryxNNf6XRco8jcSULKy3LrxLKWCdHb53yrDnX38af37PJGbpiTiKK77KuL",
  "key21": "37sNUkGCZpuK9AaFQ4ZHKLRLjS4rNuxJJ7fiYxewSYTN6yoH6wZDi3F8frXifN3dJJeBi36gGUUggon2gANEksLy",
  "key22": "5jkmuWyXMHWw2JJ1PTG6yt495efQDwAZiPNXbVhASusLvopvmdRNuM7EKV17B1ui2RejEACuDRHCJaoDj2vTLTsP",
  "key23": "2BFsUKFUEWtxM9h2Tc9rEvnKycE3xQBoVkDwz2F16mhG46kS42opjgazyAMc7X4Gtt6efvrXP3PwAXDeioRaeg1W",
  "key24": "32nmmGAFSMrJNsXQrBbknL6r52mrehzrAtCTCcGVrzp9dzTQnnLdpbL2N7ZjVdfXNN8FKhhDtdGZtAMijo6wb561",
  "key25": "5X7bMLpk6cwjnyBGc6ChnkuGh8htoc3pDCiVxQsADKMoNhksj8avPTPGfCML5xryxLE2up5LbocjuuB4uLud7CZQ",
  "key26": "5ayNK5vJ4sCuW4U3teDiRw91x6NqMgad2KvXhECBopyDzD52xzkHwRf6USBMdkFZWjAtTrF29PAiTYt4DJonUVN4",
  "key27": "42E5EtgMGf6crZc9999TQK1WtjQbUHC1CYcNxDLsPp3iSK4mAVTjfyc641PBKJU2xLjv2d94SE4Pw8LXSDvkXbXQ",
  "key28": "3U1jT4mX7D7oSjLL3C6go7wZF6qtURURekQmffqkTYHwHeEPKxBt5zXYFjaaGYcxrkfbhy7URrHuH9qngxMBBQg7",
  "key29": "5dZirHXSiUx41HQuv1qg8MZnVViCoNjEGwu3SSWCy3tLLwqrZJj8te8iwR5KhXa15xiX2XQf9Ny6CjW5cn7MLcEc",
  "key30": "5fHsxSw4FXzKBtAAVC6AupdaNGFEkysuD97nZgoEtRmG3mhD9peRWKfjeYmcRqDYXDhZh53bBjRNTWKXqTasmdjz",
  "key31": "CisRTLGPSwCc2yoaEdRmHJUKYWCvuipSGNCMZ5ALFmgTPVqNKQsEhLb1MHQ1Nh8mMEFk9Bf2Ci42BU2rTMXcrgh",
  "key32": "5LgwkRrEGcyYEnk3eH7X3VjBM9W95BMimkFSQuUuop7j8Zra2YUoyyM2J8Czs9nCgGu5hxhs4rZkFMyk3mA6aEMS"
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
