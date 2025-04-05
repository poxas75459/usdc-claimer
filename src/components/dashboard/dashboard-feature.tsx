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
    "3izctJUfkkdg4zKwC9BCgVTxiUgQtHnA8iSPNcy3UJGWrvjrv5Q5DRnewVjPRcoEHt6HMwok5axQcSu3B3ECX7mD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rfPrEzi6eWZSBc9dtN9cgSHjCSi8wWCjM3NyRiYiAPd7HrySCcLxq5mx52b1AoLZRSuoWUdhb5QEMD8BqAXC1oD",
  "key1": "5ri4nzSp9iL2aGqE5hY9GvKGR4QammLauS7UqKNW8ftHZsWYKRJ4ftBcmEeMbhtZxeqQJ3djmzrQ6YuVWtbRtTdB",
  "key2": "4MqxMjGksF38utAWnykp5p7GWSwqEkNQY16Nw4Gjb93k7vyB4VaK7tKhMJAmPwA2axgvwBz4ohWG3ZbJcAChUjBC",
  "key3": "2KZU39Qu3wX34PV29hMvjTqb84PJfex8JfbHQij7wkG7EnNQygr7XmkNh9sq8mTxEj98EmX3xWnVmCfhYfYW3Zta",
  "key4": "3DKEPFXytwjNBGkByDxGXBGwrJa71FSVxA7k8aLXbP7DpNQBG6pAoKd9P24t3z7HWU7yawgv6WwydXuTLtGqcksZ",
  "key5": "VVT5TkKNjBVacGgrqtSyhUfTyspekaLZPDpRx2iwfgwnbZZMSxrmbZfojPA1qZV2kVvimKj3QCcbkTjDiPyzXix",
  "key6": "nJzvk62b9bLfKhQnt15WJ4XLqHWRRoT1FJRhXbdmScr6TzdneFYE7Mmg16N3PmbCbWsk2uN8W71seavmye9wR2s",
  "key7": "3q6a12EYrKorhq6vnVJ5hfTwZHN64VPpQTGEKTRppa7pP5iYgNHNar75JXvuqXkCmdtVYKLm9mw35oxPCY9vJrpG",
  "key8": "3JA7XG1Fu4J5hKY9FWNDqdJJRM5H5LTf4JXkc4WToRfoj9gGEj2o4VJwrs1rdYYZK37XC8GVQxzjogJvB6VXdYQ2",
  "key9": "2NtXHMNgcySHmzb5C14ErzwUH7yvVa9sB4PTVfSWWP4SdwxQieh7SifzNX4oWCmdbyFk9ZMZd9MvKZ355HxHHz8C",
  "key10": "5jgjV4D9ZMGxtizjitozBiunShnbVTXshsJWDxYkbF27c61oBzkzwfn6r3SCuMWy48Xgt2sj3Je56heyApF99oFD",
  "key11": "5pfToCddNk2a11k93ujNY16MJFEbqSUKnxuZWH1FqXQCo91hZo9HNEh29yeis5ttfTKCSKPVStSPe484oZiEC7Qz",
  "key12": "39fsZP99wDmd7RgSGhsRZSFLDkfdWuJ7tP4t6EtEqoFmpWS2wRftjHWDvyhQLpT7KpfTZbjB7XgkfgAyKLqH37C2",
  "key13": "CEtN94bw7xZxsANw68tkEFB2ZojkDB8BKSq42JiP1VWQikxZ63tYQU9MJAra82mZMgNtPXfYQ17AQb51CbMDegR",
  "key14": "2UzmWznx4KUw1xA36hNUigG2wEeLzBW4wbU65XFMaCYqHJi4yaaStm4PwrLtqcr5LghPdm4LsebyxGzUFjs5SUbk",
  "key15": "XxrvYiNmjzdq7VWTpBfZ8mWLMSVaakcXSL3ASphvd7R2RuCgKcNyUUaEcL3YfSioLHYmoEc4bLUCKQo8WSKgn8L",
  "key16": "5eqqbRRx1VKpPQRngfktzy52i9QVZMjqzpWPbyZ7AiofskDQT1qWaazu684v8kzvFXHtQWc4RCGTUgJJxxrGdaLL",
  "key17": "4gWbgLeUp8pdcjjMJWBUrTpiUXtSa2nkrpJRxGaReVxkdJfmwpsC5mQpomQQLFkfJkQKa8gH9bVAWsKrGGb7KqTF",
  "key18": "2dGinvWKCoxw1Gx2hvvNDgnAsZ4Hg1SoX19Bti94oHwcQpcvrkxKnFYrFesko9RFt4pHcPBZh5XDibuqoLMAHVTE",
  "key19": "4S43sdaWwDECxAy8tVCuh4TamYjLpWPCcFGveaB92Rr5s6Zz2YxbBAe1GyT7Aw1xZaGsefUHPsoyCTif2FQ4bszh",
  "key20": "6274PR7ToQW3N92asPAzpj4JSTuLArJRTT16EFaDLAhHdaDPmt4cyEkNJLRHBeHfGca6whJXosxULpxvzobL1BnK",
  "key21": "2cc4HQEPN5t2fpHZ1m6nMJpEWwHL4t1u3qHEubmhv1oCcRRFn9gRz2FTqQhGTPbmuidZfWuTTT28ZYvzZs9eaasP",
  "key22": "3aeBk3vWFpKq4KuHUtoTYqSBYVHGcPXgNFbz5FF4oQQtL1AVCABH1sNgVQDJMK4sVddZBmZVRcMbX8FowSchykZW",
  "key23": "TGZvTHv4G5fXrFgN5cApo2jZioSHLxNxh8EPiHGBdYefSLKVJ8rxpnJrUA6Ak8Sa4cK8ioWy1o7fjvWUXhssw9v",
  "key24": "34qbrXYQ5W4o5cRuXPqEhB7rXibqVfKn4YENknVitprz16dFesMAr4Hk3nXoTgnHwxsZeQJ3vQFt6qsNALtGBoPr"
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
