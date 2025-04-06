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
    "4HJRpH9KdZgEMAzzfVFsgPv6KSdYDvKoL53mfUKEGD2dpzSX7wsXU5b9oDy1WPvpjmNNTMEmpUsB1hU4e2XpoJH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FYEeVALFHK7BaTp3nLqPTo14RYSfrpWA8c4tpuFeYxRmeDePUcsDnsmvV7WVeyQ1YsyoyjtaJwGGE6vptedB9xz",
  "key1": "5KE3x3ZCYAP9X6rVB1Hmez8pLjfdx6ixZwWgFKJW8ERSW8A4czMBt6H4JmG5WWa6Fr8CHLqBaKPM6VYdEcsgp8bj",
  "key2": "26fTyPt49tapAThmVV5VCP7qX7yWScCarmF7Yd7tiFvjmQgSH6yS31YqvUfAZV3J7n2Hg7mPJ55Ko4D15UaG6po9",
  "key3": "3odDm5BBu2XybDNVRndCqGk4utRSpZuYwk6dVXoFASvERAmVWFpfujASF4Hhz6pTu6xBnLJ32rkBkntCmqUpUVLs",
  "key4": "569mqNqqtXniZFArpZnDL8rffBy2r4Swucsyu1KeG7HZ2Fijovm3WxDaPZ6NDpqaaGaacdyJLQZvwLo167FgVBcA",
  "key5": "2q5bwsPsyRSbhgNuM1CkNABPQctGSVYrhSioC8eh8NgJmwnPqSqSGvsgVKW5t5hJxBqU4bYt53C9TyV9WHWZid4q",
  "key6": "rsHp6nhsb89YMW4kKEmVPs48nNJFxGoVqTGVjdhyPiD8B7trJvRvb61mr8j2kjLL8mMbD9cT84adtep3hHEG7dK",
  "key7": "2VZBfMbZyCuNbz31qEVpgAnGfMYtwiMFER9WH6vt3atjTRjiTyqAtET9aunpKGhYMKxp6cW9cW1oorKhPmNqakL4",
  "key8": "5NiW5Tt5a6WdLRZkwKguAZAGxaSCTL2rGe8Zq17H5PVXPYTJS3ygTz7Tg3w2Xu5PY5XVN2VihQEMsJTRntEDsDMP",
  "key9": "4MjdSunSCeGCaVkWJoZ9rPzUhaJ8FoEXELwzCM5WWXDdoiX653AGR96PnL6LRyabA5nfKPJUuQDQuLHDKhqRTxj2",
  "key10": "3so2ZUgLwYxghhpQAJNDTo2b69r1azy2FrmjGxqnWETF6pgaGGaeuQG876VqSWqQcvuo87aTvgVkaYBXTnYRt8NF",
  "key11": "2nuvuiTcSNTZHdzpc1JUsG9tGkHrxu55ZqESJYPUXU3UmwpzuFZ4M2RGEpLvzw2VHfr81aiqRmLrrA99rFQZfei1",
  "key12": "3ZzhmXc92Qhh5MdhENnhYFnJxwSFJSJQxFpDe8mzEDdANeSuV2VXNxs1Kt9ZYeTHqwxRsmFZizrseVjDVn5QeRtQ",
  "key13": "5zwJVHoADQKGGFTJTKXkJDQdpwiT5V9SEb7tJzr59ebaA276S33GnC4tLTenXAe6LCCWaGuGEtBiJPAyTmDjaNZk",
  "key14": "3pDszUN6eyiPhZ8TCGYBn5GKfynqqS5DxtNmbFidiL7jnk1iwaNk5UTH8g7ZNAggszgGymLFwvHPxMMfCSaXLRTP",
  "key15": "2dpVdeq5qn3wbU4gkqoDPwteM4YSFRVVmnPjz4cpikeLHkVpgDVqHcU2mFovXLDxAAEdZs9gchFrWh5JxAUcB2tP",
  "key16": "3hvRdkQh4YTWJeiiist4SzeaDd6xQKccqZSX1HKz6FuYmDQwZtegrLAHzMsRKLaAeHTPXpJn3ZbrCgoSvycXaxQF",
  "key17": "5UzaNBiGei4BN1zzTAXe9repxiswrmo1bixpGpLYNCp9tQeTpjnsmTgiQWtrGB2i8iiD3dXkNTLMfZSrcjxWbK5w",
  "key18": "5jXjUdPuQvPMe5J3UWpBJXZK49D8GQpreH6FoD35hVfKcZ2gvTS9cojE9Tsi9sxbKWbr8nrn2AvaLwb1M5p162x5",
  "key19": "4Uc2Y7iCD1bHY2YUt5bkqCG3Dtn4DHFuEKvacGwSVYHVULTx21yvwq1ck46FB7EBGTYExYWBFKmZLeVwwmVaYHXu",
  "key20": "cscKQvpGdRHQrx4CYMFoNqT2dEUTMtfw5vL1kmX9iz77KxsgGj9AWXUtVvEWBAodpYEDys3kVWgXqLjCGFPZcN6",
  "key21": "4jb5bwG1hvdDxLjQLVoDTWWJ4W2SiPSusQXJTers14vbugBYGHCJpdHUqPcwu6fhkaAZQPypecdg6geLiGi7c68m",
  "key22": "2QRXkDLs9oiVywTwSsKLTXQSvSRapEJBcdrHSaXqSR3CWgqLihh8CD8e5ohF52YorEVmQY9smP9EgeddrCnhSoBp",
  "key23": "3ho917fU5QCfJSWvHjLSALZng6oUUakeqWkwQ2cDcGsSo6VAJTr84fKUhD3gwkfucYH2JJoY8WmQVNzHUhGu2rVh",
  "key24": "47VsNd7VymR56fcA8RQLHAYdaYBfc1xjMFoMK54oPK3oyCXgkdJFSHKfcFU5GiWfrF2ff95rk6txGyWGbtXcBAPy",
  "key25": "2BjVbkyG5qjaWioTxbJJeeyFfYBHfrWiAANiEG5r9BG3po8xnzQKWnekiNdBJYKeLAwAJ9qVyKQ5KFvCWpqUhS3U",
  "key26": "2awxuLTy5XSZumKk1rXT7khzpMumgcRnZgbEd6TNtkdHnCRzN5uxdzrYiE57qiEG1EoDdC9Q4foFSD51JoGLwSdT"
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
