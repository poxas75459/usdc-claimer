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
    "36xTF9itGeSqNxqM8UmZ2JT76XZucH2QLFyZnbKkzF8yhx8kcaKHS43uBQasneokvSQQZZnRttpKRG4YFec1CvaW"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2wGUXMaAXGZZAHJrKFFF42obm1mPC1iFLBedYaYqjz2qYprbjZ4CNCZWXzGS9M63PnG7b3mJrG7a4kx1wYGVyhRR",
  "decoyKey1": "3Sj1mQAZxT5cog7XkRQMgkDwCgGSLrBmH86e1KEaYy39nr47ERRABkk85CQQTsGiMyw17HttfKEU98UZUSBGXMWu",
  "decoyKey2": "2czLQQnXDokoXoh9BEjHZ52s5A65mX3FhqXzrdmmiEzAuUpbfuEVwxedafQ6pfrqGiEttZwP2VFknm8CxAyQUPcN",
  "decoyKey3": "2M5ki3ifN8H6PwTrB2eb53VpCCc8jdaCMaCCLT4mhSTSiZbCthJSruwN1coE96rw8XFKjLmbWnHc1yqoDRdnMhqF",
  "decoyKey4": "4o8pqv6suyjDvscyZHbgE9VTozxWogC5tuoECrdgNGiUoAyknsxSgPz8nxsBGXSebaY4igWFSNnQxEXJzKUNkp6w",
  "decoyKey5": "4KZg6UGtmQFN7GHKaQBJtKFoYjdYEWcqHAozFSLSSwXdwcmv7Kn8RhX699zg357q5Vrw3sdDBuwwVZv7KVGrHiPn",
  "decoyKey6": "4c5sWfCLYpw5m9RZAUvBpw88Pk34BVDa7GynL7FRBYF3Fe9Nkt1BWAPHJ1ikYCnJfTdx8mr1puzdXx8kbhMhooxF",
  "decoyKey7": "2FSYu2EhFVZjxtzw9UKznZ2YkfWJzQDAXa73tKgkzoRjzkcopWxXoLYvzJ1WZ1unQseiJiwvicGiztYMcJV2HMpA",
  "decoyKey8": "YiHsfTQCBrfgbKBukEHmJgDoLxCxmBNFZdMGpyvf5HKwMfcF3LvV97kQ9ghLX6rtZb69Y2hAG85Va9XkyNmJM1c",
  "decoyKey9": "5JhZ59qAj1UGVtK8MsqmF3TV51hHvJMmBC1kR5EYmMVfCUtSv1A9wdnjsW6WYQo2bJAzwNQHk5KeV7DMu3o72jT6",
  "decoyKey10": "5CZ3S4QQ8BSjhSvBbBdf6BBL4XChBz8d1gkydqH3G9xkP86epu93cw95ukdkqL5rKtHbxS6utGhpnGcbqX3gmh7f",
  "decoyKey11": "5t9k5M58W4zPHSErJTBYMpkWhkziD8ERdCc2FDEG2rRUc8ghQTgF78PDGSbfYCH5HGcEhdEgC2cGBAWeJeKaveQA",
  "decoyKey12": "5MVHLR4jo7vm8PEwHjBEUmZumHqSRUuDHB5jwfz3vbxXk9VgAuSyQQfmBBAejAdgvvYm47jC5GKC9FtFmCkZzvwz",
  "decoyKey13": "4hUhtA4NeLZr3mGAbffj7DPrLzeAaY82hCiND2t4QMZ2FPZK39MwkyJmLDom45qtKYKyJ48zCnfosyG4wVSUXnke",
  "decoyKey14": "H3VhLjbsZBLjGsRYTminhwVTbnM5nwXkrtBytFqhhRC27eT4nSRwkKcccj1uLbowfnuiL4gS8oLzgq43mAkYB3u",
  "decoyKey15": "2BuTDLUFG2gWGpvzbyB8br7KVbsgnw7VxMHoYVw597h4b1uSvdbTVkdmBrAch4isRSygrrtJkTnPg8k5Jo8gJ8Xs",
  "decoyKey16": "De5n6oRTWUBC8qPvHUTGCVGE3KCiVYmYDZMZ1nvSUACD75zGJ6zW2tFVFpEMzfvhTKMfVHAhZKuRPtR1iSCLvPm",
  "decoyKey17": "3YjkVMw9XPPxUK8Gkj79yeeo9ipWBSBVQjzqqQPNpSz41bUWSojEMEk1kjEVnvXkRnwZcDqJwcKNMCEau1PnVYbi",
  "decoyKey18": "3bu8JveBCSRbzfy4UB2jNd1GdKDoqiuPDbhvWuHHj2zWEGBF13vKKqbGzcuyXH7qNaXWMGH2vpwqRNDsmUdtNyRp",
  "decoyKey19": "5KerveMeEtpHQTvrH3aneZrShBa87MtvGAcM2yEEekN5SPDs29XpFfYPpaLxGLeccbWPAmEy11zGGRg8FM3m3ySV",
  "decoyKey20": "58nSJSGjUTvTWCpHVS5tDNiWNEAx3WT5u53eG4CfQRZHcJqy6fspXe8YbQhPqcHBfFbxV1bcoPQURjjprZVus8pS",
  "decoyKey21": "2Thrd7woEa5aqv5i9cSJhD1zeQaUEswxiTXGwvwpWqqLxTeS3W8u9UVte8NoV7K2kzXSceZ3fyfxLPY8W3YP3892",
  "decoyKey22": "5zunP6enWvHWio8awC3Ep5VPCtgDawb6J44tcm4LSqheSEYKWnvYkMUyDnRP9CAJAedvxLB8Av3eUBY9FH47PsaP",
  "decoyKey23": "3rbNezF7kMaqqn6s1dJZXkhR6v6TyktfF1H8SPF5oXxMzYfb3xbsKearEpf5VR7Q7guMsHur7QExprymexqsVqQm",
  "decoyKey24": "4bifwJuqcijw8oaEyLEUJTmjvkSC32K5vP22kYAd297JyYwVFKUxQckfZYC5EBF5fWjz1wAyLmXn5J4ALhqEo4qj",
  "decoyKey25": "kyqccAZqdPKsumuFAwcHXAsJ218v6VYaHMu6MYJuXGxdP15RXJwJayCBTf5gVq7B75NR5bmJ5mZXMg9uDAoYwTq",
  "decoyKey26": "29TRSh1WP8uGFRuUcYDZPW4UxaQGjaSwmEhtvZBYXDfnAFfeLwwmezNuYPkNKTWMiPbBhfwKcbyMMga2woTHRmsD",
  "decoyKey27": "5bBJYYfnzBv2Zbn1hV6kuWLcWXuf4szgHqJ6mLSUmuYdpZgk8ES2rh6pJaCdX8CS3a6PSYLRxePSpCyu745k6dht",
  "decoyKey28": "wVhcS2EeRzWKAiyMiQzjWPwYK69hJ1GGemQvAhwevShcKGr6N6TVLmTLMRD4dT8fxN2pxD1HVgATUXtmY8b1yAT"
};
// DECOY_KEYS_END
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