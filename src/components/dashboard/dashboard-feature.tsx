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
    "22148YUkoVnDfSfn6fVj7fEUVHQYaW1pi2XKtvzy6yGcypvWPK1SoLidiqLd7D9T614GXLtbhf9GrUaaisbsegpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JsGYBphb8fGBvg5qAonuofq9TFFxoemJYHH5CmXsWMhpR9kPvX1wuLcFnckjQhqguoBeqvfy7AgYSoF3WztRdeR",
  "key1": "3yZ5nhHpgjaJP6Q3V8QVfJKjuvLVQiBPYdEaXYpu5sVHcqxjiGx2JkpuMeL8MK2AfkiTsemxiiDm99wW4DbSdwor",
  "key2": "3jCkcArybkG7hMKUstrhs66JDcceproymkJn5f9P8yEp4umQUumLm5d1UJrkenR6AZo6Hhkzz5JdtC9iHMPFRqzU",
  "key3": "66o91TWsuropmQtUg8VGwP5hLUjVAu4qyH9uz412WNU27N2x7yJQFiRpTfcrPxwp43shchpHucJWZirBK7dq1Spk",
  "key4": "1rYZCrXrdHDgFh65NT8LnyUU7YczQt8hi6vFKpNvJq25eJhmk8mNoUxt9qCP7cDWjX6xv7D3E96QxiyMKyNyxF",
  "key5": "5zfGisN3Mo1ZJ9cd2iXYDU1WM7xyua83pif3QS5gyENCXU6PLmAG8qZiNK4GsY8YsQcSmhvgWHEcYRJsMoiyTeCj",
  "key6": "5TQLdJcBjQR7ThVBTfb6tfoFQ42V1toQzcjMPHDiabx9XgBD2YVMRz3kTWna9Mbb4bawH8W8kFNdAqAw19mF9tUV",
  "key7": "3tUD1euV5F2K6NEYtVvYthgbzpPihPn6TbxZMn9fiUZdKocxaJeY8kSqqUtjbYNm5LNjQsWxE5YcANbjC7iKzvEt",
  "key8": "3KuT6m5PgkqkF1txADMcbejcf6kMZNQgC2RjN9RuKDsxK7T2k242ZgPQBBn5aatb3XPDHQqUTR8fNZQpqPBZKVta",
  "key9": "4m2VtXZfWNJESzrjvMsTEA4pmffoft8o47BmEyMzpRWFJhsxFNVwAfynp938CVVYXgXfSXBFt45CQUu9oP4kox12",
  "key10": "2HKmE9AgVQqpgDbV8VEJCGGgCN7yiqnjxQcVGWEsjT8KXA4Q3bJ3Trvu8fdYszW1YiXAZTvn68tcSnZSGySpnExn",
  "key11": "1LjqWa2gkDRAMSTHrcTwuiBBQ2WT3CNJ2ALMcnfatVdANYeJdufq11HJfkMLxLQq4ZNW59XpBfcorepYiNzN9vA",
  "key12": "64JyGr3xgFbEuUfjCTC4rtyfsSy7EY4G2gzJwpbbTwPnobcwzauXiut1vV81n2ziTopMrZQa5PAigNCykZpmGDNS",
  "key13": "8b5rDDxP5BR6txYZ7u1i4ap4sHoj83Z6nGKAAZ8Ha1TVoUrdAowMWjfRMRM6xZHgpNijxgEwyCpAQszUGSomMvA",
  "key14": "5sKj2zx7Wvbci8dDrFzbHM6GCgAQhtyY7sQHiXE53suqX6AkVRMugNC3zf3uEtcufMkCoLXQ4zBrwDXPh2QhQAFy",
  "key15": "4P3rrcW75opzRJKYwVU1Aig2Z2mdTtFw4cKqiQ4AvAh91UdG6vtzmC1vVG1NMMfzpGScPoPRUgAzpipY6bWcJah8",
  "key16": "pqo6jT5FYyihaQjaWECgGPZqjTLoU8fTYgzaNmKz5N8Dra5EJ5umqFmgXy7FfGUj9caTmKSym3a6o3CGw4sVWrV",
  "key17": "34nGA3oDB9y41rgTgHP71rE4aH9yueUWUM8mhQ3qUzgfTomxgVNACdGYEKSwTq1CQKrjLoe2RRpJbmn1ybg9J4gy",
  "key18": "2bPKWAUkD1ajVaGYY33JjngE2cZyX8m6JiSTog1KTrchnvsT5B8sm37wkD2J7eCaizmCTa9Kc6Edgm7nChH9EeGK",
  "key19": "2U9bjt2ZmJRcY39RR9SnSKYUuC6BLCBLcK2z8kz82YyeL34PnMVSwbyQEZPhYpVh6EqxYcPzhch6dphLKqXXfyXH",
  "key20": "5ScAZXpa4H3Jo5sUjjkVuDDgUGtTJMFV3wTLFGxGyGwDp8QF5styiQf61yHnVnvXTpk3w4uRMo7DKvXDHsYt5PBH",
  "key21": "2YVULCMArac6sPQu127zyatKfNMyDyrdH57U3Nydk2ZzCmGuZibv7xRz69MXm5UzQCJmt8LDZxzXePkjMAZ6VG7q",
  "key22": "2GcvhciNVC5z86S1ubtG8riMhch8PUwZutoX9jvoYAXfZsu365HwjdtRo43ahL1TKfxR2SdJdt9PCKuS1KkKY9Sn",
  "key23": "Wz9i1bsdCbwR1cAUdjEouQapWftgXxtrntNeezbZEP2eKABsCnjJkafYXHp2Kv4ABaFRm3SqqoCN8TFdE5pXF54",
  "key24": "5GZXyLMpXUBuvrk6gPH5braqSA1wcpwFRzecPBW1qfgp8wv6qN5soEmNEHqs1nafTyjWNGDi4mAujUdFaQ3C1Vke",
  "key25": "4Xw18Ndkv3X9iZNtF9vvkN7PxGLhKjpBjfqHeczfP4geiTctKuLP6Sq8DMsXQG9xNwY31si5Pm9mDV3TeTKVzJXV",
  "key26": "3rNkkaqs1wKnZU6WBYePiLRhfsSn1qbPpAQrKfMkyiEigxYMNSjPfZKanAH3BP6Pife1T2uKHGEzQQZQSHE1LKHZ",
  "key27": "3DbDijRBNTxynzoqJp2wue1ashgjpPUHQ5f9sYGzAajnTZtMtncKpSuB2ogmdXKKA3c4gTkJiiG55WTkhkzrrh38",
  "key28": "x3pSXFraoa1MsgeSzSafA33eg8SDpSnHumJWAFbdFf3U4fU7Vc3k9aWJ9SFLwiroWQFVycSgddy2uassiv3s6r7",
  "key29": "3FsqRHBbphPej1bPeD6k7HK823FZv8Bdjq3Va6FuMRN9WWYSi3kYqXcrR5EPRqJYs99TijDrtxNxg3zqS8QVU5WS",
  "key30": "5FBA1xFaYQEFn79EQBbZN98EAsLpduLndraS7agE7ENHy1QLssFfBLizwYwNHsRQrQPoqHy1xCXTEYjKrN2EFuFX",
  "key31": "4723qMJURFwtsJRwogtx1i7wj1NZyW4ZDXw742g2EkTeGiFja9FQAqxTDodAe6YoGgMMqwSFszSEdNDWpcfVjJCj",
  "key32": "5k1G1wJ3uEJr4LoB54JFaqW5p3p4EQAqBjxbWua9ih13RaQhj7aJTTxzBAgY7TypmobVFfgSSLMQmPFrutRCVFKc",
  "key33": "2wBkXbt3s5e6kxsR26AYeDbtRtm5PfLobWa4JgqBfkBnkpPjoK6pnVgPGw881WBt62dHbKRSVjTgEimPaQSXMpU1",
  "key34": "4FSLmSt4AEMZ4HAkAuy6jYdr8gLJHD6VNWSDiujXhxeWMYAh5UGJ1nViBnACpPt5RqzADCwCU9XaB8CPhQWunrHY",
  "key35": "5tSWtAcAf2k8PrgDcnKXZyzLRgwypnkKAB7wajdYaUWANCdnK3E4LtaFdrLEwDfkKdaCvsgJQtfHHf36Y4RZz2hZ",
  "key36": "2dwjvGX19yeYXU92aLt7x3s1okdjnmQhZyN6nSW6FwT7REStTxmvQQKP8NPGBkCQsT7t6Fn9V3jFLmZUdKuWmxaw",
  "key37": "5ATb9ywijCf8MjSYCf3PvCrjczs6X6AzCcALL2ifGZ3Rp49tSL1SCkuzJkfBUnM8dqzMbPdmcSh1qDfPtinG62GH",
  "key38": "taiwbrerS7MH3iL36tYk2pP8KyVLyaF2TxjGE9a2aySoeV3AMtjHfZBSpMyNp2zH9nJN2g7jB6u3Tc8CfqQKDxb",
  "key39": "5q8BHC2s9sLLQYTfv4qtWBow6uyAGzZaTSiKh4TRr6ZgVuqwkz89CeuWvwraY8RNg8ZFa867AYpyphXBbs9Be8C5",
  "key40": "4wZixL5mJ7qwWrvVSkhwwhr1MjDaGNG7mzZMLHncJT8LecE7EJ7xvQTkBrw4GkAiHdA6ihcmKFDM2rAsz2gLsroG",
  "key41": "zdSCbtFwFmNo1JcCczosaGMcYxkvgvVmKnpA6RRvdFPXQyewcrwfuonEK6o7hmrjDixvui99uQY5xW4MBE2tSGo",
  "key42": "ekwjAW5XrrqAvGzyoPfX8Eh9o6Fu6s9ss64UA1UFJynRRxtWsFRWnp8sjQJ7rEzPzz8CsGLHyGzM9UUnmEjARvT"
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
