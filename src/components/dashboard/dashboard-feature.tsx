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
    "2wpZue1ZBSa2gPEGSzkJxHWh1ByNbVYhGhQDmxPsVpinVVrXuDdUdY7ZZMgiqo7NCtTAtCdeqkhxkcxvgymDiTVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ZwMw9HLPuPQGFAPRmdkAXAMhwxG3wHBKq1r8gwydrcRAMgsv8puXcH7kEPo3ensfXXZM7htb2q46mTffKrSoCX",
  "key1": "3aQ1tVSWgNCaZTwq11SxCG39NBtfb56fXqvUTuWbC4hEXkvxDcaDRv3ZPk3St2jT3XHVJvJbnYuxxX8iCCZXHqmH",
  "key2": "2it4QexQQ91yVrdMtCZKLAZEjTgggwpMHRi4n1v8ntyGFmo5oadSM37HUroW9RuAmhBd8C6k2XtHHY6XgJtdyKip",
  "key3": "5DvQRPEGhRbCzEUciWS8j6br29DBpyFGsfRoWKxdTG9AQu6G3DefynvkHMbMKMdGPb43PMD2F3fgU1MBGuyasXMU",
  "key4": "3towqBx8FHdoqPK11aUtnNQH8sv3M4TSqcuYK1JXjKSwWz2qYfsHhU1cN1hVvmjTSVXR6meGYQpVUEDdDpwYN4ii",
  "key5": "2b59ngwpJP54Qm4WPGiLeW4vVXQYfPcYJuCwxhdCXfaQYcJmaqGEgvYBfk71yW8V1iex96EXtZ2W9dYy4ck6A95A",
  "key6": "5P2gybaLpEAYQ37b8QRXvA7QBUYFrX5JV4yrHWQ9EzYfPuoBk9ha1svG2nwvA2MeCCpqyqHjBEpeLs8ZFcWAKMmb",
  "key7": "3DPmHwQsGNH2vS47MjDPi1mfW2SsgymMc4fbFXxewnBC71BaaqguZFgevSGRpWQLSEsrsXJewapWxZ6WjzViKYqj",
  "key8": "47YQSzu4cGUtiyVCBy8n4gFCaoVc8bpFCEAop8ubFVK58zB5dvbQBuxRDiqm3me3EtdfjLsUYq8hBPByMGyRB794",
  "key9": "5XcsnqvpGPg1MydCmm9EvfVNxsfqi8KQhNwbjai2kT7K4QqoHxYH7J54PCHZoPoiY23D7pZTMk6Lq8LGWiMVh7Jm",
  "key10": "4zHJdKQ3eGkSctiz2ft7xeQxzxpruffoPuwzWsueXYsYVWZqNjLJgDrB7Wh79RfPf35jBQR4Sqih3RUCnxzTbyTz",
  "key11": "4Po8DRYAME7e3SjQZpM2UPyk6qn1QkamvfP6YjVv5kGbAZzFVLmABXn4RbLVrv8oRtrXPb1GptkWFxdiPBbvHufE",
  "key12": "2KcuTe6YKyvzYookfHAYyhkLoZL84PMz6pV1SoGQCSYbe3hEts1UdATThYEUhB69BWhyCpvYZuCanTcd5zt8JeuX",
  "key13": "3Z6aK2416GCMKkA2v5JsrH3m1SKqBFnJFzKADknBU48v1TZi4PcoPqcrruQrCRZ9makWUyRt3NevpWt7QqGZmeEt",
  "key14": "YQBvk6MSZhY9Y5fbM7Dm6dvSEJYu2528iaZFb4eqvre1HTrH94yceFwVeMn5DATRSSMf8TVRwTkqKbkDhGuAv8Q",
  "key15": "325c6NeaWaTAmK9JCuGW3QfqzQdFLAHckge7KS3gWK2n8QVX7mbXapLhRnCaKNrMFCbMyoRxHE1tQ92sb6KrJtM3",
  "key16": "5sc3TjJ5tFEXtTfQuCLvV1f42U1GEH57363qL57jsxMHhGw7eZL625VzAdhdepyo8Cju5SeYy4Q682Qd7MdDW751",
  "key17": "5A5ktgVGfPiUXjY5jBzD2Q5FMk6mzbG7yspzjiBYe3GMS3JWRN49Q2pNfiarT2TnWtDLpz1QvSxhXRn25qKVb7Az",
  "key18": "26gH78fhVcywoWbywXAxfFomCCFRJPwRXzDizyx4i1Ki7T1bhNmWSz9Yzu1yPxoRTj52RY54hw4qgjbQcwZ6hoDz",
  "key19": "3FBRFMTa98d6afgCYXGQ85qd5aYLGUsxRucD9ZG9p4C3cdBUFadaHyQkTCTUPdhxe1RPBKuheZGHG2cZcextTWDe",
  "key20": "2iKRMZQDSP64fn7BERmdxVc9LJ9x6QzvzAA2xLaKtKzwjqFjo7cX17JbTTY99D78kScWFGhKJRBDLHosuMHzNovT",
  "key21": "3WYJ6Mviw6vv5Qisq6n2rXhxDsEWygwEmQPEeAm495EpbgnxC39dbYsrVx8b1mSPtujwHrZANDpefZWzVFx5n3rH",
  "key22": "5wvBa2F7yH7SmHrPokVJif5K9Zh7qdcVoaeeasXriHCzCA3Bdnr1Hw7LNccuxYQynHMPG9vC6T5rBV2uwanicaT2",
  "key23": "2VbJ9MmERr3ZBRTToJ9ey6SXjd3tnM7zCVU35y3vBPKP7AovJbapCRsGHR4LZaMCbENsk4KATs6wjVrMGwapCLfx",
  "key24": "4DFNJW3ftNg2gThPxK3jPqmHdG8TfgMuc6REYSDGHD7brG9aHnNAYLCWqjhxuay7LiyARNzMPXL5H7NzLWCBbxxi",
  "key25": "43drmGeEZxXWgX2tJsjzAU574qubo6VLkgTGMajYWGpTnV4NgUDN9BPwevcnpU2LrLwfV2b1L5pmF2W9ZMBkRwS4",
  "key26": "3L639w2ddEc228YiFM7m47ojB4tZFgDFcHauU68dAMceNMCeGMBoeR2AvfAYYSzze7TLy1zjm4d4ek3U8ET4qmZh",
  "key27": "5w4gzrGiZJaMdQA7MabB6HBtHejTJ7LQ1je7nJGvQpMKUQ4K5GcxQYXTVLozZTFSyhGBGp71LW5WqcxEpzBhAzyj",
  "key28": "2jGBy4BYAkHTwxrQ6s2VVK3KV8ctuGSaNotvsBKcN2K2ijjMddWTLYBkZyw9jBz2m8oBqCBU9JGWi3C9u5TZ3kqB",
  "key29": "41GdLQxDQtpEpYdsYqYYXw9xmPLUz6rhJvZmp3FwPcTMnfBoXGb2hDCoHzw2tQA9amWhzszwg3VP5V1UGPpmpSpn",
  "key30": "4uJoCP7nmcDDFWPT5achFRzEwST14wAHoY2jzoGSjXw8sZUJFwHQKmjfcPzXemxbZwu9qUfWh1qBYabEfDfkTwP5",
  "key31": "vvkDRpr8JCykKrFBkRGmVHNDY5WAnrPPrdudnLUCT4UMfgNkHzC4YzfcQgsuxcN2fbpJVF8s1DVqSQQiSr1rxus",
  "key32": "5vNhj6gSNdofDqa1EFcj9ghW8etk8trRCD6uBdz6Sf2Kyk41ujV7TX4WanhmUiCzNWsSZ2ZfAV7XJM65GQK2L4pk",
  "key33": "2sfDHHbuYAgPxhsNxJy3U8ZR9c5hN1Bbe65U4AP3oPbLLc2CEmS83d5yKNKFPsVqx1xf3jcHsjPtugu6YwzctEsJ",
  "key34": "4nCVRvLzjrf7Z1UnQYVg45jxjZYVMoYqg5p6Ye89FABEHBEhva8v94RzRp4n7SYBLrcsN3xxWXsNmzUdWT8hh8zN",
  "key35": "5M6cTim11Dip4iyPUbQZd8ySCH4DvgiKneneNQpPmJv1AqWsqBDbkDXVx5imk1Cf6QbDdZF9twMyzPMhbNFzTLqV",
  "key36": "5mbtFAdpJLsUFQeayde7xVv2eR5DhZFpRG9Zy3DLRcJx9sTV7aKYTwhxQhUw7c7Lj4wZtJtiGGt3NF7bniM5sm9x",
  "key37": "W73uvTrFsffwfZ7cv4wnGpfyNRLJc5rutKQ1afQXL1EeriD3Q4q7bMEy7rCWEjjm2ggdDTQZ65XF3PTiEypGs3P",
  "key38": "3aJqwP3AZ1nXCQLFHnQhrDnnBFcwe3dsYNJE1rVq3Qyu6xgzg9PqnzuCSzZNKfEiFBqWhvPwKWLw5bS4e3Nhusvq",
  "key39": "4Sh1RNsw1MoQDkSYoWHJjgkh5aj2ivZC7drWmawpd4prdeVgkrH5v6AZoWEmLwAXEi4m1SfuMUvEHMwdC71Dn5Fh",
  "key40": "369PF1ZVG5yzPKGc9zqf197r1pkE8DzpHXwP8ftwTfREDvrRTVP6rdvAg3q874MmiGiKdu9TpP9NLbhrc5zbRk8",
  "key41": "4amyijhg3jAZwWxC7Di2d2YboMiEbgaudBkd1x83UDtAPbfUfWH51UcDtUFNLnGw6kqwJJUbaCgFK8pTuE2CNFck",
  "key42": "5BPCJR5KPbGVAhgcKVewtYT9L9gM6vKg1Sxx3aCTLk22Me3teHMX5aG7D57cZPLKNsg9B1GUqBtsr8iMhuEZv7sa",
  "key43": "SYZww4MfkbP6pZTthBYRVfvq88bp6pXr8VLCRvSYD5tEi4XMZsHfTDoZGrF51bf7khXgeZKybaxsKkEjAL3sREJ",
  "key44": "5spoVuucPkV4vKXNSvMTihUnNuLg6ikMJdCWcvCnSKUqSfwdWyjKgyJYhdgvbYGC1t3uYpfenfyGC8xaJ8XzbSaj",
  "key45": "3iWJUHB78T7MkFwcrQLpD8niDafZLK26kuzS8twtinj3hMQKUsqPexxiodyAvAbitqU7hCs8rJCKGr5aLUtAZYXP",
  "key46": "2vsBmLueFD8hUGa8uaKUzZQ5PqN4L6M9ecjb7Ao8oFqx2zxJ2TUdrR5yoCf5AdhKxUpGYpmTB7wjh2MsJ4FJjaFr",
  "key47": "4GWArW7s9cAsUww3Y7HwC6ixeDFrPUZRzzbPQiJ9FwcudeYjaN1mj4iuuCWrJhZyp6nQmwAUALYcwb4co2RkRFSE",
  "key48": "dvEMuhgDDzaoasL9D1cmmNZMJ4Ybo6PN7YT7rGhBbmUa4X4yTN3UPYKf48md7RMnSQkGiaqqPnc6MZXhUAPt58p",
  "key49": "TgHaW8ZgpPu5oMFkR48eT6nADx67cgsfzyHQ9jvjnDdtrY1PbmvesaRc7bxJiBysKYfdJAXAVQYVpydRH8qc3js"
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
