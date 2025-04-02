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
    "2KPA5BA55YCsdUNc9gC8jvTqBtsDN1ApEEkFZdzZukf9gQ3tZCp5tzuMuUSRXKhpRK2TfrGQ8XHxWBp5qnXYgCwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62R7ZJkyi4UugJzA3x3pEDFMiw4nYugJkdpX6ccGnWByWptTZT6E6uuBAz13KPgFKqqpAXWNBMAB9WBBLRaLpt4R",
  "key1": "2PhqsZQvhaeHMW6P1VJRAwFTPogjthhe3LW17AWpkyzfrj3Pzwh2m3K3AhRZ7FxVDWUcMGDBNoAHWbar9nmtyDs8",
  "key2": "3Ytd8jdajrePRr28Mx9VWqRGwzDX5EAGsBkWo22kRUnqFHDq3Ca43csHrYsEK5R9VpAonr7EVHRTCwk1MDsqn5Fp",
  "key3": "35nbHP6yYJ7syykwQPFSpYs3iPdwDuVANYnUMm9p3npeP3Fbzqy3AySyAYXSitNHsZXnncwqydaQ5rUSAxTDfCGV",
  "key4": "3JQp3ffUNwkgVe4W4CirDdXVUWfkMBiUFjH9NjdHZaT61NurZMKsNRyoQb3r8jDGQp42MZbNVqTc7xF3Bw4acAih",
  "key5": "672BZBynvkVnQzV2v1nFpozDWFbCsUwQJsekosZDfVoiKjWN4pnYSFLy1AYNtePiR3WYJDGHU6gU1q2ymiDnrGr3",
  "key6": "5iBk6t4qSiSoA4FGTcvgpY5THCaaq7se4B2ypCRJD8FLTRdatLrDwyCqkitiwwCBh6dPWeN3XWYQrm1L2pheqq9R",
  "key7": "52Sw1LecqkdRHbYqPcgdXAxdMFYZNuanLwMzxfFKG2U4xiFEcPrbnWk49AVidFuU1JvWESF9Y4aDd4c982btkope",
  "key8": "4AgJzTQbyaPBQT42kLdPUq9KxpX2ZQ6jZQWLXyhfqmNYrTyymjLyRSPTxAh4V1bZn8T52p18WyKQrcgDZmnVFkn",
  "key9": "4fbZ8YW9WKXr15EHrb4R5DfaGL8s92ydcA2cDmnqGjdrG3Aze2KEubPzKMxuWVRYphzmkHDpfnH3fDvWFpRHPo3w",
  "key10": "5koAKJ51GhU7hM1nWgD8FwkCdvRQxTNGVVH8ytz5X3fJ2G9df9iDTiUo95gATuzrGad6bfsLJmjTjQ44bZ8pPpw",
  "key11": "4uxH44dxj4h513Z9MWjfNfEU8xPKHUhZyLMmiGcmcCYbCgbBpgXpuKdGTxSyvM4Dcc7CrXZ1JMg7zEXVNh4mYxmk",
  "key12": "rz5KjUWdGG9FweUh2C6A9k8mRWjyFQUfrMNsKyzQqQrZEpn6V8xZEZkirHoV4Vp3eYGcxPoZ8cbLd4VpuitVN6d",
  "key13": "39TWo1wxU1GjQ66EsE5okVZEvtWVFLDWStYDXGAtLareuPsGqYBy4LtRJZJAbMEKkb5enB9vJ8S8yPDFC7qFm8Up",
  "key14": "3WYzN9U3yu3TBDwYhpj2yjxvr7dsYCA7kARpiHuLKXHJLg1z5R2fR8e8T6N5Rbcz55JjgqqDGbsE11RNVTW4bCWZ",
  "key15": "2zQrXTagTDxaGgXF4SBxduUcfi9Cz1P9GevLAx97uEcuNcwEXThX6WJjpE4BkfUWKfQcf5cLtvxmLecCGGqkDU3j",
  "key16": "4Ys8h73CNFGtNkRPgEMTJL2TD5i8RqVR22rwpYsA1t8ozEKfAqFB2kWXbPJdeCNsDNNAwH1D87V4CBdaVHgyge2P",
  "key17": "2rud5q6XtVZmT7Ln1LbjWpoqSyXqisW9BrLFF9ryhErEhk79Fdo3i1MHGQrHJMv3Q2sUZwH1iy4gWuwibL1UttJD",
  "key18": "4DzxZ9aHLvNVR3W1LBwt2WQQRn73G5epAiGkP4sYcF9B1GZyk9e7YeNvswdcwPGcNGcw4JYvTTDo1D8spy47WeUC",
  "key19": "5XPr9dSu9ZsUbhDyWGaAfMAXXUcGf1uHoGAJYqoJkdomm7Z4KgBxef1vJ7VfL3frdWYBzgnUs3tkGf5WgqsnXd9q",
  "key20": "5F3JfSS9NsWcqumLyPNagswP7VCgzebmdSq21KwcxENDmvSUwNfAEt5QPmWgeQVew3ARvJ27neP6X9N9oWB6MQNj",
  "key21": "3KFEbTEXXoi14xeQNvHpQAiUBf4UGeaUUrhVsqSobppv5Q5b5AWeqUS2twgwb4Vc5tgq5ajoKbH3h5oLF9eEkGGe",
  "key22": "3gU8x7JP5DrU3v7hVJzozfqKKrxt2QUHHgqTykpcjqwtBQHcgNsL5RYUzD1Zvp1KQBp4febJgiX1Pxp6zY21Ywc3",
  "key23": "4uGo6iBu53SZZ7rxAqyR2pvEwWfSJn323SqqWYE6Hbg5sg5XKNS9H59MgGuFdwHerbYVLUpx3wMXHuvWA7m1eyH5",
  "key24": "3zB2KFZX1w1dhJqcqypL9PCtK5MtbtQauWoVWgqd68XZ4xFDVgmqsZVZkRodGN2og17f6wGCAbpQqQ6pmhE7tm3d",
  "key25": "USVNt2Q9YLME5TK2CSvYW1aYxF44osTms5gkNFn7QwiwwCcbfZo36YvVwTo2mj6EwrLrTU42qW11sNfC4wDGHm6",
  "key26": "4e33VCuUVV72hmuAA33FWnCz4MDQ82XgfuiiNXg19jLSfbEMnk8NFCmnDt3pu2fxL4RjBCdFh4zw6p1ZJKhAzURz",
  "key27": "5ampLqzJovKQKUcpC3w3p9bfqK1JSG8d7kRTttNBH6axRQNH33Mfyx3Hz2gX4jPUhEaFWnm1nfao2MnTkVr5Kwcf",
  "key28": "3hA7DmT8o8GuJwHkCVfJCNfB6y91bmYRENFTjEcAeXGq2mtWE8Dcqwk2yf5D9yvukhDmMSCwiNUh33w4SJJgvPSR"
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
