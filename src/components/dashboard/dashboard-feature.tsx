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
    "55bXuc73187YdcNuxwJQ89gapqWr93f15kuJsdqajSjXBjwDLeZhgY9kTd56q6efuQuhHMjVCFHuMZ6W7bPuG7Ah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jQbhpzbFLinaxJuC3F976ezXu5RucEeGj1LhRXKsqmxS5Uff9TdbiiTBCDPVRfHxKxeV3wg5tcN3WXoYUTXsouz",
  "key1": "T5Nb2ZakMbWb5ipuDT3XWypt9Wkcb9ABQn2ZzncxBytE57MgWnYQkh4PdkkpayJ1kzu5e3AB89XeftQubmmRqjc",
  "key2": "5STeCdU8LdjLuRci8CMgo3NEfEm6SB2x44eYNixzRtvr35ztKSGMj31f14jVuyxhzvApast1LDJhX2Q83HSzAAi5",
  "key3": "5NkkYXWa3k1fehDRtT7oyHeFqeCiuTWhG3aifnC51XzhxJeTZgytQU4dZsMY7XiRMAGtfyHHsjCNNBey6Yi9XxfP",
  "key4": "VwG3imbQ35KMrmTado8jG8gb71Ax5g5oX8DCiBg19Fj9i7Lhmt5Qxqzv7ErFGhZQW33aTznw6myfojNmSTvLnHg",
  "key5": "3NNPSw36MG36GNQy5xnBpAP8iTji9GVAVxM3CqNea8VohpU6XXTNfxV1qfWeRRouBTU6re7BHdS568piaKoXAr7G",
  "key6": "2rF6QCsStzgbLjbzUzkfyFC6NUzTjBvuxrwCNSV2m2JsqPouC8KvTK9ADDY9tVn84e8M2SDbCppXDLvJrgoQjxgZ",
  "key7": "2ryV1FbgtUJgkD6QWfx2wJccNGys26vBpFN9PofNEXeYP9ksFSjrZQ4FrPiJGjSQKcdxTJpnJcbGpGxgD9u6N9uc",
  "key8": "234PEo8nniwFUWLxRg2yHCminoevVBXA2XAbSfZvwTqLoxc9JCWfyUj79GLwY9uJnanRcgfES75wvycM5Aew8ECy",
  "key9": "2JGmQMX9nYKyBwTpgg5MTBe9Q18XRJmh3jjRpxsEo4zPNoD6VpDBvoaaJ2LJsGyLkbBKuT7ffxcMK6kop4rPqD4G",
  "key10": "5NYwhCWyDVXZwnevYzCZksRC8U6QoYQeRs5G2K825fkYpsNRAJR3g1nHLc276SL3f8b9wE2bwmP6fwSNTikJft39",
  "key11": "337SBN3rPomnE3taoQ5k4bc2gRzvPq5rmFFPUyNKoyLn3jCRFsNuBixXzhafQjzAUd7j8qixHkDnpgHyj7w6S8X3",
  "key12": "52W5SN4hh6vb4Bt1ZAcJzMxPJZXiJSaCAmoeiRcF2PuXovx88iwCXNmbxEMN7fWPmAkSE5p7tvDFRyRmNsHqBy72",
  "key13": "4fCy5CdnYVogAoe3WYAkauFYd98WWzJpfgYnfLXGBw4UHK1iU5iwXP1hBWDtEuCK2fq53XX3FUZZ4iH1eeku4CuJ",
  "key14": "5d8frdt9EX3n1kR1Zp6FtPZmKp7TuSCp8KtUzkisWfSuzzkAkHt8EK3xMc5dcbYrMDnrZFMeDjWiHuJvSMN2fSRr",
  "key15": "128m2fAexdRJbG11kgAA3ak4nnehCX38tiPuhYV2A7YHXEsHNfRZpojqSPZdU5SHZz4J3GWgbKSZ749ggCknci7R",
  "key16": "2Exo4dYurKzcJLCdU28numwipnQTMAhPER9t8CL1q5bYHpERr16tcgDZKa2Yq4iAs475EzAgi6ZGCetb6QW8VrV3",
  "key17": "4RANDgSjMb6ZJruD2Zwwk3ya8keixx7kedY6w2N4yevnDSzMhawTsoRzUsVakDMtHwGVANgQEk6UWiUzucbgs2f1",
  "key18": "4R1dXpLbH74Jfh5Kt4CLE1QyxTLzn6wRPecwDRo7eyd7Y4kFrL4dfe8AqjSuibHo8cykgdurLCw6PyFcwtijeqTc",
  "key19": "5EioDrf2o4cBobZgxEmKYrbqQaKkTHwBCMUipw6gafd7VbHdDvNLtWAnkvykNBBuHGdgp19LoAxxEMVboLAJB1EC",
  "key20": "42qJqg88GYap9PQBpERbdBh8P42AgLCoq1ySS5qTkZGr8oGfe6HcptkcKcj1En6VSMrWqjDFYTTcYLBTsDsMwHXX",
  "key21": "9ikdegtKLM6uA8HUvbAStmEy4b3e4n9ftueixPJuzJRAdakVUsSKvvfEuU2Nk1yKMYXUvUts9NpURFXD4LNN9Uq",
  "key22": "2VLYnL1xEyzcDS6zQaUnVMGJkUiFYCfFjqJfX5ZjZTxQTSG9LwqP8NVau8aT3WH2QkM8qoxuJrzopZsgh7offa4y",
  "key23": "3sPN5LovZ4ECyHRGEZmRguZ1Z7kmkYWmERMnyePpgXeUmcuDdVhNUYxwoN1cafMQgPU9aeupa2q32RpbbFp44Rvb",
  "key24": "b9gjqnXxtuNUPzAG27XG7BrXj5LQHYWE23TwXTYnKhYsANYwMxLJbFcohpLgQs1XUbEsp2LvDnr2mYL9CAf8VaC"
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
