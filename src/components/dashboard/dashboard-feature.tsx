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
    "gmeJqhmsgVnNbMPS3A2n9DQC7jHGDQmSJtUhnnfkiwWvPrpqUMAE1SbXiMmqVnrc8C58hoV79ABj4ZXmNw2mUZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sgxRnRDWngLF6rnUS75pUhHJVrSNpWZQj7zGajq4JoYoYUAsR4XTFg5poSZbMQCPR1LgivmPUc8wYTsaTWCCaoy",
  "key1": "2pvrMwfraKKdkKJ3XMEgLPq6DP7g39hRJpo9H7KQzoZytoeevAFh6om4DFh8yvfaRFzubJuzkbxTRbYr8uuxGWqe",
  "key2": "vYXu6LSbMWee5ce71vR6Hp394Nabi46f5oscm2DBZDSLxZf4VLqisy5b72Xq8qWmijpHekRFKvn7j7RCiQurQXG",
  "key3": "RpHerAT8Z34ssuhbXkbBRVyR4Z4qgPKcM2X8X6Dd2H6NcBXEMMGnJeyS9MbXgpSXg47UcWMGZtv4UJL9hRpJTDE",
  "key4": "4AvLGhvkpN4Dy8yJ7HUnkMgdND2ibYxA7yv7nCEi5AckVcgMsxoTqD6YJSCfAkXMDodQdm1wNcFS2gVuRKueXgTw",
  "key5": "A5FesMoN3LWrnX2s1cUkE2ciRumuKkmjJPvjfzG4yw2E5EhJrwASJqy7JoLH4u1FM3bun71PN8fjPxAUK1sZotn",
  "key6": "26NiktXAXNGRHL2sH5X43ie3ofqRe2WAjUBCSEprTFSGFxnBRwgNMmWutE8dHQEttBDctmiFmcC8Ecjo4aoBa97D",
  "key7": "kWABeqh2Dv3139qzvtytTbTMJfQC3McrZxvtskp7Pks9Qv4ymvfkm4zEjrma85FP8GnpbxCi1WbzeN1GYnZeHgx",
  "key8": "5HvrfHNqGuLhocWmJjufcQdyEY8vBrJbQVC9cxAoe5HowRSME2WGxJUaQHxJebp2pHD6HY5QAR4owqMRunhKDHEZ",
  "key9": "3oaGoYUS8qynaabtPcYHnpERdjQikBo9dz6aNC558hwoVEV98PsBSrYFpGW2HTvn3zkvTr57f49DyAP7b35khTBB",
  "key10": "2YEjF33DrHyP5ENMqBjVWMYEupVZmuEPKm4ydRKYYdoYbwGpsq4ESF9HMPmexaza6hy1RjR7e2wHJKvv5uQLqWkh",
  "key11": "3iXwcP4exnxhmJYXvcG9TUek5qBiKwo7dKbnij8KH4uKUKi37WwAbULGgZWbT5v1mBGHMFa6arBGWQe7FGKuGzSs",
  "key12": "2dv14X7Q81vGSzTSq1GbjC5z1jf9USCHRTzZLTh5Xzh39vrNScRDNbqn5cV7H39bMuDnkyJRGkojW9MWyis6tR4L",
  "key13": "4hZhpxvZCXM196HMKHia3FGAE7P1XqHBLjgtmARCntkgpjDe6QNEmN4nivZammLTGbysprrpp9abZSStVU1JbWr1",
  "key14": "zX7FnWCFdqYwgi3SyKVCXDi8LcU9Tj1gLQAGKKBXdZmxw3NmEwq3E3Pn4eiKtTeTbH461npUx6pD9iGhvdHGveT",
  "key15": "22pv6Scf2oMJ8WVPuPMopVSZ2cpfa6vsJVpb2v4SobqGqXV2PAyhTF4uQLYiQkw5jJqdogZh4hjszFUBtGishXwD",
  "key16": "Ax6TUTC8cFriHKAAYmszzQKaRqKoC52Wa9K9uCGAEvQ8ZmZz5UVTRtX7XzFokHMQtcyMimg2DPktUyEgd423qmh",
  "key17": "3eyZsAXbZCPJMCFv8uWaDcceaE51QvKPaQaUHsmSjubD6ArywA4wBVjPvDpy2BxubdYNdw6TiQhHBNBxETdsLhzZ",
  "key18": "63EzJkqQZaw8w1DEB4JnAZUF4UmavnehZhsytx7GbATW7nKSDQGKSF4mAZobKYEskWX874PxZrqZHHkLiWLUaXKC",
  "key19": "5dzDKmWdjSnWZ2xycAm3LcFTJL3Twx9y1BCYstDp1igpzTjebZipmSxrETuWBFyZ8YFWaJcn9rgkDAZRTaSzkaBZ",
  "key20": "2h1utWJCty3epCLjm6kXDxWeb4x6T6a2KzrDM8ijTHjNXNeqAmiezVXShTrEtG4revCnQoxokk4EiNAXVwf6ZBVd",
  "key21": "3zeFX2N1iLQthpFNQDfkAvQtru4bgGhYun7hZecjgbGgFZ8B4pJr3voyffGQfiw5gYsAkeJqCn6HdpDEfZY4C2Ds",
  "key22": "9W8zKYfphejgPzRj7aeZ4N8gwfgqLifzpsfEsmWSYhC5oZiiZFYKt1C1btRmxufixRwPL3Q2umqLEDbeCQ5W568",
  "key23": "X3DPDAzhRzjykjRCZkmU7XEjuwwPZYNYKAD2r5GSAN9T7pqBrHxzGE1XQU5rTnez5P9MXVqhcLiVmxLv7u5CWNV",
  "key24": "3FP49QHwjekqxCb2E33WWxhrHW1wAC5AF8RJit2SKMa45JR6PLanuVQCmhvXkNXvaBri2pRhjpvKsBnXNudZkMLk",
  "key25": "5VVnjpJ7mNpfaGeGgHVjQ7trhUFxMcrguga5xz5wRZ99rYgHf2CBxUjasdBMyh8h7zJgVCHFheDTSEcmnEvCxFAE",
  "key26": "5GWPonA5TGKshsqqyyTkjuPhGw1jDYD3Wou163Awr4whASUw7VGJg1FcqvEVvnsz9Hpdc4EEmQkUCPQc5oms8ewg",
  "key27": "2ACLSeSnC6zLWKoh9z1oLnJNSqqngEa7BoicP191X9zLwRfWAg8qgBas7kTNRtNDR3oX2zBD2kYCvZvr29g3nzz8",
  "key28": "3SLffRErGJPPUmpxyxriKE1F3qxvmTCwDrDiPZ7A23B3xN9m4V4M9G5giMMEjbRTUXS9JL4U7Mv1j96PfDG1gnQ3",
  "key29": "dHva34QK9JAqSgCV5YwLLDxXLSg2qcmgmYwpFsec7XEF5b6aomJYjam3qLhYeuejGFauvHjFkcrfLv1EpPvvdCz",
  "key30": "4mEXuARFoKKmiPPEuAg829mYVVhEa3r5ygAPkFVSDitV1wpoLnXasCLcArMRSQ9R1Qk4Z4xvfeBoyZsX9VeTapPA"
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
