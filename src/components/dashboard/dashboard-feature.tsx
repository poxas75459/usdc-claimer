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
    "4V3hcWo4AbEVjUvwzsgiPX4jvpRvfNz9Dwyzawr63N18yTLbQ3S7gtzNRFMnLz9Bge6xwXnTtd9nHQao4AZDLLct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rfU92bF2DvxCXYSmGGLTP1qRoPcxnJGnPtn1vaKZiZAxXHTcQNXNs1two5uo5oi5b6PLznNXP2Ruws7JSKMCh4d",
  "key1": "3uPXJxRbxhkqA7WAfD1hSLZLBJkk8EpqsbuSSdisfbSBeUZgTF5vx3ahA6jvfBbpWjTSdfZ7zfe8sNA3yhCL5LpY",
  "key2": "2krkh2FjUa4o3dn2h7mDbjzNVCkWCP1KiC8wGKGoKQ3tgCQZhrbooENhmxQncnyvDMvwnEsxCy2GzMnQbgUhotHJ",
  "key3": "4AUJCu3Rj5aWNnLcAQTM817eLroU1YvKb3FR3m6RaBSCqFS95F65fprv9sDQ8dEFTDANFKRg3YQDPjECDJQsEumL",
  "key4": "5TcTqF3zJLM5s2qgNDJzAQDNSwFfSkHyGXa3n18AmLd6kSEyqoUCpDAC7qX7tWQ4yMSi2z3QLA6xPQ7jZMfLPgRS",
  "key5": "5RmNf7fyyBWHRZB3WrDBpvKkRqQAbXoLfuvzHJy6RtDabznEMDg4Uy6JN7sx1dFKLyFADb9mGBHbYcYQTGqDECYg",
  "key6": "4jvT6J1bJDMSCayKNzXfAaWgWGQfb6MmiiymZqtN89gjJUjXghxUuzZPGytZEj3jh8FfQzqvb1rTjkTBqYCwzPfb",
  "key7": "23h47XJPJMR1i3fSmnax1iKpKycKb4m5ce6Tkc2tEMaVGY2iNgwt3b8a9RE6N57XufNVqaidHgKAseGmkt7ASSxB",
  "key8": "3vramJNfrDS53RirHsnkearwiwpsZoNp7Qc3baLM2BJ3hZx1t1smg62MZHutjX8vyHNzze3y4XHAPhxCaDQCaVog",
  "key9": "4kUuK1rQSqHdD3Q4nHX5t4sst2bvZWrauRFthxZbHqVPmSGre5bwifxdDinRe4FaiF2VPAMGMXRBx8kweisJR2gr",
  "key10": "4WTU9ptL2fBNwkgDsJ9SbWbj97wHBrqKPwvyAMaVAeHt9M6xEj7CVcBMrRBLPBcBp7CKF8oXwo1uWuL9TcD6ewqB",
  "key11": "33p243265dYNufdbcFSGRzvaBW78JFRBb3rYcRga7Y1JqupGUTDnxJP2nCF6ohLiNaf9Lr28aRSAbw9UsV4T3srF",
  "key12": "5UwktpeTHSHCAcVrGJ8vibGq9NCKe8zRr5onLBeiYdqfeqjLag661MqVYHGqaxSuNcQpWtzxH9dqtPskovJ35SqB",
  "key13": "4kxmzWXog8qcvBGr8LarpH2YN4pcCqK9UKj7Jm1sMN9CpHrhvJqjfwvXg1R3jNpTZb9ijnSxG8ogcur7Ew77nj7T",
  "key14": "5FuLvUnMBMpu7ESVmappfCk7LSE8DPMCZsuRriWZjaFG3JNYBZqEM3nfXcrFyZkpXobrS6Hp9MHaYqyGCYmCgKES",
  "key15": "4bc8vyy5aqpjCe6BPGC2gdKrqvxyq1LNa4GebA1iMms3UHKfRPbcjfNtmb3v98sYp2FWC6yjm3CwanGUXRfKQj75",
  "key16": "4p4r52pJ6eVBJJjM4Ek6RwiTw61RBAbscfFNPGRhD7QsUW2ZAXihkruGq3Gxh6JoCcuHzp8L1gGu9Js84y9KXuxG",
  "key17": "5x2TcT7om4oBhDoB7oanxW8uVNzfoBnNdfSgyLWaD4q2rT4jbMQPDYhsvLNgVpjJVsGNcKqv5A8aKNZ48Tc8PLbw",
  "key18": "2kU8CZwdoBq4v9ULm3eB5cm7eW1A65K8AR6A7Rwj2DdLFPMh5DEkwVWxvMJkNNmmmAzLWM5Hjcpk8kQVkougGrom",
  "key19": "3arNfFGP7vETsDAYkEB2hNqhDLHmZs885KL8TNVBYoPJJaPptPKJwprBMXXCh21QUctiXEL5K4E386U1ECPvdgYx",
  "key20": "uQ2TuYRXFHaFY171qgTuiKEoDMU4vjnbNiuXZWyac1TYoQbYcnNn1dL2fk11s8HACB2kKFdUgjBfsMBQ6vN31eL",
  "key21": "3YKjFZTMC7MTJpQzGhCC6bqJccAimxBo5NtfYvZTHXdrTouuuLuAgk9RaiAej1yQ2rtnfFLK1hx9y6j7nv86ptVX",
  "key22": "dz9CdY6zgtoDp58MUpXyVBPtboGnkaEGN5AHtUnWsYgBwKGEGzGRdk8kCcd7ZTDkbqbTaBViitQYrmdRQxAs2wY",
  "key23": "4MKsevFEUZ3yR8i5rWT8HktdXdz68zbH5mmPfmo2Hm5UgyoswTh9DutHVymqpAiEwciLHF8e71WP48FQ42F9PV9N",
  "key24": "5WABXKMo8Tsd5MWey97Zsrb7nPtkjTZkbzsK8CTzWHWrjYLvue98wkWXhpM9TK4uGUp4KtckhQzPV1yuHJd6NBNd",
  "key25": "2buZstBmittBPNMyuNxSL3y3NsaXDBXJCuS8C5Q6sxLmdei7hKb5DkZKkvhuXXvut8DqccHEJBAaskdgRJ1wzg7H"
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
