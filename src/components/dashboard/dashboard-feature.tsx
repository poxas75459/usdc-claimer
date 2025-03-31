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
    "4uxBiLuScLZ3z3ycMLqfAmnehSFx3ndYEGXr7DBiKMb4uNVZbvc37cfk6Cxygo7auCBSpRnVRQ2AonSpW8roy5Kr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SHqQYVUBhqTDu9jW8oV1CBxKcx3LjsJ7r6Ys99a5vv48ALeeDjJwtZLwjTcXLkEc5e7k3WCCpUSqJBYau7vni3D",
  "key1": "4rAeaVWN4EGXQU1Rfebevd7DDFkGWCAu1JFmfuSghMPamkKdaf94mXtpJgg2Jw4wNJfyLAyCPKmu5pidG2vdpKij",
  "key2": "4coabq8i9Y5QEvGUY7TmsKCDcn94HCx2ptgye2G3CRRHwqHzYTqVTUNTs3KqvXJNBxEeR9Lt6dgDzSCDR8LmYnX",
  "key3": "5Kgt1pfCM1HZ3wSuU5wbCYvJwUXVANv5rwHkESspQyzbGgVR2GLDYDgSKdhK8MEgN6cLaF4e4YePhMux3xLiKw5t",
  "key4": "46Lk1YHb4Fz4psV1TqFdR1ZDUhY3neW9wzCb7wEwAghaLdYTx4o92qsf6QbFwvnxz2bf1wLXgGw5aBTpBWGq1uu1",
  "key5": "4j5X56H8HTQ96QH6YpxPddkVEWUZBPoZuUXZCTSr6bgAhEH6ckaNVRGqtqNP9MDZZZaHWPweMff31fpDhFXf6EUp",
  "key6": "5PJsyQL7DhLv8RsPi1ECviuP2S3MAa12juoT3DDwRGAP8yDVAzF8NaVNgwFochDSbG9pJDKXmH7AGSuFN3mwJZbH",
  "key7": "2N1GDTy579z9KT8AgUYkCFFziAdcXFigDVV7CJyvDpDvBBDyPXBocgcpGUfxc3GmxKsf3UzJfAYNTog9Sj8ggT8b",
  "key8": "45QZkdRYa4gZwgnq83P8FfvDBNgXxWB6PJbvFwLgtahnoymPY7XnY29xgzcRYK68XY1ck2RVXuqdMymPsz74KxHN",
  "key9": "61fH8JhGczRhv1YKtiVvt8sE73TzXuugLWWKhF1yDej67tL3ZHhmDK16Aapi6M9S98joQGKjmBPkqB81aTdkonHL",
  "key10": "2SrZkKRD8QpiehkomYfg4MquwZ8M9hGco7Mjz6QwKjRfSVsmUf2G8JeyTgLVGLTSzd5s7Zuo5mCUK42ueDKi1VGv",
  "key11": "5DUPAuYUoaJmKXY9rMHutpPnxrVRgXjxqfmS5W9bv4joj7mcEqq6CMFYNa7UfRjbJCxQakCqQoB3HcSyVgMtyvrD",
  "key12": "4bEeTedFzGWCrYfLnL9vw9B7uRuJ6KsqqhFyoQvCH37Jm3NrQJJaaZg5qUz2Kj8ubPFUBe83Ekxvizo9Z9YJAuoT",
  "key13": "2oevLkWF7zM2oNMLiALv811p6YnYHDtjTNpXTCHnTu4c4cUQZPybpNnKHrz8TE3TQ7EtbDquajQeW7h5YbJM67dm",
  "key14": "6DCkG8rADegmj2f1woEj3fu9tyn5jFYeqGHWpf6ZRP24B62CDP5c45iVrrw5jvksNwU3fZC77kym7mgqLcqx5Je",
  "key15": "2MtFyYfLMs9KWf54ex9q5niDmyPKLMzbmZ95zKHqrbu51SJgChSoZefiTByBLo2mLHR7ww4nm4ARkPyo3GBrYMGe",
  "key16": "5FHfxcHrdyXvTpQk4DXuJeHQdMdoRS9JwaZoqutbodGGas1TPxxaQPKXkFJZce9y5SEiMSVyz54gxDYfUnWrTVy1",
  "key17": "4fVbP25TbB3TPkTWBxr61B6gGUrTY4KCEu9Hr3ovA7zYBTxKkGuxKATMEa4haV7K58wtvjvbZq6tsrYwQxXSEtnV",
  "key18": "4DvLb6q4sE8RvgCbs281gfk8KdAQh9jPSzdurWg3NtgPYCkpJm6ESKvMGFZfVfNQj86nHHCABV8HUqQWvCeQqMdY",
  "key19": "22vnfWWgQQaxCPpzLxBFXiQEKC1rLRzMAYcdyQwx8xdmapJ3TsHma6861s2BR1vJJKSsn9jqPUcmouERWzWvCdYY",
  "key20": "NcYwJ5gw226fsyU8cXQ8pi56Nkxjoq1F2jcRp7bEqA1TEqGeYH3gQVuEbuNsubVE84tbFgAHmtzPcuyjPbNwsGf",
  "key21": "DQCiPwosqheVWueHcdYJ49wBf4X9V81CkqXFAZkNrLyegL7LrSDN15hAPgZFMseNKeoPaFDQ81rRm1t11gEGzN9",
  "key22": "3cs6nxjTQMomHtkQTLQGXxqy2CwxBnRwZ8CnyKdoEjJfnAPVFdprSxtCHjfqKFzG3C7FgBiFHJ6r7ypCQtZ4tn6L",
  "key23": "3KTGoAD98qoEdH8GD33L4M5wMjrYoiGXcXcTEcpt5yvSDQLUfiEFJDz7h824hKN3kr9p1Kw7iU2ipkZWwkdsevWC",
  "key24": "3SU3dwNBvphjemUxBrhDmQKQp3rfWwd5m28kWcqgb2zFrcjDhkJmcYoaZV91SUUEozsHqv3ChtWRrtW6AZwif9nW"
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
