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
    "2mVh47B8yzgbJgrmkAVazpg1pJLAzQ6hX6Q2CCKeVdXD4bqKVsoNmBrmzeag5ME1xhe6RjFnBn8RdVSPmJ39TWoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vJMFcPPnFcRp6ZXBPR2S1rhXAHkxQ9Z9g8bwREieL34x7MGq85NUZoEVPTt78CcjbPUcaRHV1eMLWxkAzABgc7F",
  "key1": "67GrATwLkgEQa874kBBZptEcd9UaKuStJSkE8L93FJKXd7vkqGh5vhKbN61rRNYqUtxuusyyFqSH2j7P7iNgWF2A",
  "key2": "3mBdWAckm7YM2YqqZGPEmvrS3Qssv2zpwfHtNLwRe5g6XwBqyJHXbGt15ivQUf5uQB5ZPuEnJNRaM48N6Za73fot",
  "key3": "3R7pDdCVaeCkmU4kyHTeyKMb8Hi2o9mQLPEhJZPyK5wDBWiR7cdMdTxG76XvdxeSDdQUoAJHCrHvMX7EJVFtPtpq",
  "key4": "3xUF9zWZ1ye8czRgbS4gQD2uatE5WPYVgRgi6wZCcm26XjVPkdGWspsD23gorSjBHQQsWf4FboPF6yexrN4Vi5kj",
  "key5": "k1PEYbpF5medHsLSbocq5VdnSE8KBprYnT2ZQZaJ26BikuemNeq1NUMcRdc6sW34XHQAX6EJX6SR2wwstgadXkc",
  "key6": "4UfW5ktmdD1ENRtj5xmBiE4Foxu8yAytHXoi6mSqp4HzQj5ySzs4G3rfYbZMwVbQXHipVQJ6og7oQc2qEMYD7SpG",
  "key7": "2U7pK6GT7L8XAbrPtiHoBKqTRi6sVaCrs4cdQytKQhJYTwmbuv8sN6eV36RhuTdDDsCfircKTdhigMSSPUAWNanh",
  "key8": "4aLvo64mNPgf8v1BDqxsiXLXFLo28rJbf3eauaUZquLyuNfApQoTZCLChNLPDkYCG1rJTDLCD8QbzJ9aCUTYNtNh",
  "key9": "5NwSLZwNM4m1CJAioZcR8WiF9QZRJy5jsbhMvcYb8Lta8r8zpRUDCSezbB3wqFiwZo7wTxwYVXNXWWLiDiji1XY6",
  "key10": "4EH9h49BDQUKWRrbHwxMwmALuuHKoNSUdLHtTtvfb9Z637LEg4Vuu654eQQ7VvFwkpsCvi6eDPJxg4uAzteP7dcu",
  "key11": "4evbD5kWwVGTiXayBKkNo6LrL1tzv5pVBUuUmzhpE8t7674hrYi1aPmsnpxMxsbHQX8MAsoXALoK8FR27nTmCTYC",
  "key12": "3Eq2BBJFyo5AKVxHrfi8ox6zjUoVRTcJrF33QYxUXWKWoTZ31LCodBLryjqbF3VMCSXQ1iEHehagZuTRngi9vmkG",
  "key13": "5HcxTr14hJtbeUjQQAqMCx4qjdA2mcrooXjH2FjqXnZZLx5G78WLzE65TKJAgVXwQnq6YjcAyo1zi6Mu3SwPqjZ5",
  "key14": "4J3NY6v693AQmZnUE6bxPJ92X5DEkHg7o1tpyPgCchMLq8PAg8mTEBgwJMVgnp5UwKXAirQULkfy8UasVXZowd3E",
  "key15": "6VxA16Dv6RJAiUhLS4oJDaTpDaNHSzqxvSfZhpiHhD3ranNWshkaMgYr5odHHeFPauvNKrktA8F1epahkggyi2o",
  "key16": "3uyLovsiCAiDLXq7Mis6yTh5nBVGWy6mAHXzexJmqDMxbgDyVQVFZxJoBmjGvRjc54VqgETntWYaJT6ohgx59jC2",
  "key17": "4RKChiMoMTdi3TYRGXEbpT1K5Z4aAfWugtCEdRfK5HZEy4obKpo8mhVfsRvyV3R4zMvYmsXMRGhEC85fijLAxjCo",
  "key18": "4dnjcwF2qRYuLq7QU4ymhcYpBKod4rANi1BdUb9YVADSQ64s4Ckwa1XYNVFGGG3LJ6C7RLgymC39kV7H2CDusQjt",
  "key19": "BSMTrAswnjoCVMHyyqnARE72KqTpmhydypssjiXy9g8TXQB3azShBWr7akidLKhmLd9gibPy8GPFBM2ybcn3yDU",
  "key20": "2FHoePFxvY2o8vNCGJKggqkDUB1e2ZJvJjfpsUavPF8CeHLHPJjxrdFbGtKJnbKvnKCSq1mpQKaTY7yRsCt6wBZS",
  "key21": "2Zpqbj9364DBi3JVbdR8DXZmMmKr44JxxhgZpV5JofXpGfPJQBGppnkhB4YFCQZYHqjRrCJeETHftBn1kWDqp8WY",
  "key22": "41JQpH5S5qETxfj9REaQREzXmdb1MSxMy3yLZhZkcqDQqnFmSrCHVxtUPjbc1AhD3LJ8D6JRDBKP1Kd9tmfoDND4",
  "key23": "5Dd4Qo3JUkDeFP5BdsQQZrnrnhW15Rj89EFhiHxwVHGJqpGXrxAszXHHsDLtnPemZyPHCbWE9hrHwbbVmzbEkwZq",
  "key24": "5ihXp9qzHLsWZ9ZFA4sDZQF5fBqk4ce2xU4MVniETrCcq85qMoPB1AmSvVQtEcdMYjqrtbpxFmt7JfaRSDVw4MxC",
  "key25": "MTBtmUwgGyGG3pnNEbTq49VpXWFHGUj24L8fG2BXYBh1Le5wWR9BWx2CYUKH6pDnp1zEBYe46LF5ZQic9Nvim7u",
  "key26": "66kXLZkCxmid2NahzJ3C7acJA1HxM9xqUzDqDAQTTHsDJU2ZQLXXwbZpcmSSmnvhZXLr1VZXP6wEqSTG9rHTjAUB",
  "key27": "5mPp8nZRgfFBNZybtAcnVGLkeqjCAZsaPCxPscVt8dsy9fkXeexYAf3MfYYyhz58DQwtua4YZneLbzPEitmvHJin",
  "key28": "2LRL5dy4pHPtZevAz7jDcgPSoeYkQJAcdmcGH3NVP2LFcxQ4KFzYiSExsv5gA3CyuJTmSFQ2Mb18kaTn4dTLnUXa",
  "key29": "5BSZsEHsTc2h6ZTURodN3aE97SWPZsEkbLQk98yZch7WcMsrLzHUshWBAwBPbzB6LZF3jXKrs3os1BtSJXhNW2Li",
  "key30": "2GcJ53MmLbp33LTEjmmdRCceCsiXrpSLFFcwpBbseZWaKFds4fQoCfaXyjEfH66wiz2A8EomKDwHNjT5kgSgPz4S",
  "key31": "3spnNsxnzikfdxJNUk1wgRopDBo5MQgC7sG21QHqs1s5zTzqFANZF7us5rhAHU7ZGx11ypAUDEZTQSvUqbAoANF9"
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
