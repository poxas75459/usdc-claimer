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
    "vsZmacXXqEQ3f1XbUM4S3yYER7vujZSYD4ZhaWf4WySM8ynrDZQb5yx9MfVhNJZ4xw6Em7S7LqMnqgKqjAmTzDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y7CmPDAQPLJr7pdBePRj4FJfsrGBRRC2EGXvmKYD29AFHio47c9gxsw8qbb1KKDZHhCM6q2Uv4Q2iFcnqULHDui",
  "key1": "5fejfMq7XYEnZTrRtme8T8hephV7RjVrGVM4qJKyttsi4qxQyHVj2xuWC9bF2No24wQs7siKWWSDo3wfHMftTLvA",
  "key2": "g3DVXbCbWxcNtXBqW5KVDYPHitnDDXmaEnVXQrGeJRNZw5RRD13KxwcG1ZeWJrq9Cn4ow9aBvcTx6hiXAf2FdHf",
  "key3": "4i5TEeEkcW3YCxbtVMKVMXytGj38A8BZFMVX7TzJM9vuyRgXBDjyJLzts2DeryeN7CbeizW6Mu5NuW4od5JUhDMF",
  "key4": "4GVyuzUczQeQwrkdKbHaWAWUtGKH47gNpK5s7QgPv6NbQ18nj8NkizZV4FKLpbSAJr2Ba3jxMT1Qei5R6DUbw5x4",
  "key5": "2PQf57w2gQ3GEpUcX5YuVQWWFWspwgJPdjskB6UQm7FEd1GyCfmXcTm8FsCT5FFqzBzK6mzpPZofDqtSBTzujqfN",
  "key6": "2jVN47o9s9fPyC1vD8Ym9nuyfRMuBdPPeXU9LLPyqyHLKRtEhUCMrkyfzBjK9UzjyURtXLagTfhXp9ZCiJbcVAXR",
  "key7": "dzoQhcMa48kb7Ed8k9mS5Lv7VcieQ2EjudUP3eowcg4rTAMZfnWcbi66Y87icTSVcaLTY3y2S5q756ZC32UDw7v",
  "key8": "3WxeMFJpjWCcn6DbV4iM2g5mdr4dbFQo9c74cmWzXddc16eHYxW8cy4VyvBmWGVFhSUvt7bJbcYBGPNkfriEvPwB",
  "key9": "2mHy3GfaKpKnUmsbK7jkSbZQyh6ztEAYMVQS1opquTZQJfGATyvzvBGN2YneQgBmQ1KVMEFoyHBfKzTqMJYRgqxv",
  "key10": "5FkdirnqXPSJNRGFLXDXunmiJ9DuKRz7UHbwWGhub5X2aAkZwa2Yy7xKrBQkjGSj2XHcZP8yY4jLX1RP8Pvtbruj",
  "key11": "4r3WeWHvfb4qKagnDxU5GsUrG5GmW3QsBstz2TnHbiixN2JbHgzNZNJLxhbUN7dvUvFNi2SsQRPaVkSLfwTVCM9b",
  "key12": "3avsY3PvZZP66fTs98WfA4p2p1Pz9Rp6aSXLMYfVV6kNEMcHdjbmPoZpm13pR8b2oGmkeueXL7SD3WqHqDttJuFe",
  "key13": "5ybevB2kkQPbTr2rW8yfErszQ5Q7Cw3cuQ2UuMQA3DYduHFHXCxDKQgK4KrZoFhvjcAdqfVcMfj9aXTrDJrQpYHE",
  "key14": "ALsVa8GzeScJBs1xned8ABhnGk7j9kmLDUsycQ3ajeapVGZgAoBCbu4bhddzWH5dRtKgZYgs88Qf2UmYNWdmGJ5",
  "key15": "5Xmi8yPVPMUHYjzW51yLybFkTB76FutHCXATVvDJh6doaVfirveu177mpBZreujTRNrVSQQgVxVCjwBjFa3jt5ZH",
  "key16": "3dmUrMZCc69adEWWRpBbhBik48GJrqiqcPyZG4bhZ8aymCToJ9u8ek9G3zKVtCa4SVBMq3PCqWgJoN99R3L6s6YX",
  "key17": "4BvkB2wq6cq1e7mTiWWUxMyCWdraGEWC57g3FgX6yhTKDXLRr2bqUWbvMMBpxPQpxkUvunrKee14tWwvLuAy7Wec",
  "key18": "4BDe4qYBuTcJpt8LqPTYJyg3UkXSf7QuELa2LqW6JGRBneMvxK8VDBBUJQ6gEmPBksQk7cREz4ee1N9nvF1stvJX",
  "key19": "QszMg42LittGgukMb8WEXsfS42APKmknyczPVXt23tv53ShMHwpPSGD4p6YJTeE7bEkqUqQVkJGCMiazhiqrF69",
  "key20": "3ojV8y4A8H6n9rFgSkhih9px3Y13yAPsMkEU5Jn5RRgUgLHjmZe9d1gYvbv5S3noLShRSPJEqgWAV411YkwcPNmp",
  "key21": "3tqRJSAmPAtKeaYsJyR6nzytxrFTgTbNFFxMAbrPvRz9tZDUNdEPchGRpyYQzqPuSymJbPYP3YP5yip6S2AK2Y5",
  "key22": "4wnz7uvazQoHj3HeCzUFRSENztFQejZtoWcTWptkPDsydrWmVeTuRMKdxZTsj3tpRxi172Trtmzv8Ux4beNf4wqa",
  "key23": "2ttBLeVkFumGmzx2y7S4TjYim39Lm4uHDg6yMZXWR5AB4ZpGuBZ56Lg18cKqaAA2ferSGqY8KMnFpym9JXXC5r5",
  "key24": "8tMDUbXHioLG9W8XzNTG9E2MpFGNCJ2q7wiUPiYpiPgoo7SuizKaXMLJatq7VgXDnnpqQSwYX8EC8JLsELe3pid",
  "key25": "2y2PwQFMPGru5SLsd4bcDvEJsdahbGZxoBdo2iAxdz97oijyjB69mdE7hg1BynwTpGFuAW9r4FWJVMJHdYzHg7c8",
  "key26": "quTE56fbKjLLWjg5XixrEm49hMvTWDT8swQriVhKgQ3u3Lbowoz3ENz6BZKAxXvGPs29fVRKiGXgijcZZvRj5AY",
  "key27": "52zYAZQg49EDD3cZb3g2QwHxM8UPakFFxK91AgeBMjztoFEngK1bhjnrXBZxLDKaYrwVuyL9yjeFHyvs7S7zzsQf"
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
