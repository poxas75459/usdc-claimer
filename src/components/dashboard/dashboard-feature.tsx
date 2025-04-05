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
    "5TTG7FChgxzGx3VgjoFBok49UfaGfhqyPsDiXtUf3N6cDn97MetpUmhGS6mKfV12GvVmqdPGwbuE6xPmJDL5roJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wTFzqbghDL2vLDcxES7uVeh944ThEWN39paKcF8QKZgjbXCGPFfHDpevfwj6svZckcykdTCE5ZZe3krS4vKa9zm",
  "key1": "3njHAMQvrFc4mD4WbZx1hMqHK1Q8QtUgNGg3pcrruaGsnGHUFYS4FEDsFFgids6j9C5BUdnBgEfmf1BGgxKswcLt",
  "key2": "4xtvy1zmYDvgGcawhWseLXtG5JSnQuz6bQniFpdDx6raMRsX2HtKXeAQiPU5wDwmskhA97u6BzkGQp9Yqn938bzx",
  "key3": "2723AXLW2AupeVeQjZCZWV636sdhcJcUAiiFVvKZuaMa9B28zfCxyJHg4LMiG9sEoKTdNrH37SxHXwPFNzbP16ed",
  "key4": "4qcYEFvLWyGxKbd8bk3znQSA6DtrVqXmeSG5eMt3E6dQNt7qQadMWsALVkwjKxnhaPXF2ciikRUB5Znx8DMXYDX1",
  "key5": "3DY1GqhaaiMSh29HYq9x2uEzH5LMfoCwLv3gHXpMRcWwJo7719rWoxTa1xaQnRyCvmHEDprn19d2fKVXRhni2snB",
  "key6": "4AySvBJjPn8gU1GN5AMgzoLEFcCtymJ1KG8fPypXnyLFQ8fGhq8bqG7qSM21kvRrrJrtDNFYFkZLt87TrBjRtekL",
  "key7": "4NQ3SHoDkiahrh6FXhecU4wZ3c1h1S62iSMTLj6Q1EPJrYsWyyarcQCaDFAUgjmhXuy1oRUvnGnj5YXqrcoAtCV6",
  "key8": "m4NiPz7PiQkDW2wM2mP1zipAfHqMF5oR47sxaSRmzF4kCwdBwp4n2rn7hZFveUamyTU6MDP5hFRGWfgytgzcjiU",
  "key9": "5tMFWpEQ5dBgdLuVDdWSa8anTQuwTBA8V8kFMNEpGkWUiL4vNWr8VbuoEQ4o5kAMuxPxp4rgLqN4yQwR3ujK4QDC",
  "key10": "3gdYAuSm9x5DzuWNCEzKoaRDqfoPMMorzNwDnv1fgMhCJKPiDYZNzRUMJRdrSnL87JvjTjFXpasiPS8JGL8mpe7x",
  "key11": "ZR1B96m5ssbKm5UvheQprxsyBgTTq7ivRwVPBu16cHsBPwH8aTWK4Mo2toLGarjtFNZ1ooMBVatyS338udTQrY3",
  "key12": "4gQEu6i8wy12zyPhn3efZvMP8cf4iBbrXA8HD8YELusLtWYTtA5Qqj18chwLJzZHUMcZf41cLJ6ig2tbHNG6x4PK",
  "key13": "3T8BztYrRvJN4HFhDhybUbB5d7So66Q5hr7NDSuSdkztkUdreRkmQbpd2KBkYSdotrHww2HNoHpg9JvatFtiu8UU",
  "key14": "4DkLKLBwEFtUu6PUGYQRxhSJ5cUsmq4zLXxstNJb8Tc8HTh1pkxbhHP23dvrJXqKm1fJEC8wL2amnGUvyQfFL2rT",
  "key15": "3ChVPEJgvVT5rioH7JqnCZLNApw1kGVjbdoaZiYShwSEetmtBZd12fK3q583qz8qRtBN18QDjbe9kZctEpqWPQu7",
  "key16": "2JUWZKo5VPahvPyoNwj9YfHixH1EVCqERmJ7cZzqFLUYvTrwPQ9S21JkwMYgxuxdDSqBXb6f1Cd6CCpFbtHbk9v",
  "key17": "66PpoXoPohwiEhep9wvkgQGcKYC4reddFg8D9hPRc5gKpwDK5vjQQbMKaLJ7iPL9Loui9TKFt7kPgn1QouaxnmAh",
  "key18": "3ES1j637aYr5ty9ZXNcUdmbz3hAy1NFB1HGCxgofEYRXs3WSv4bzbmosMWsSUrtH5VCUG36Nr9V5S4Li6SNxhynF",
  "key19": "4xNnHE3YGgGMMTvnuLG5sw2BicobJsoieFe1Nw3kxviZJJUu7HT5CXmFoHjK5TDCcjKYLCPsfE8qWjdvdzSm57eD",
  "key20": "5EqXwXdYHbFQuFPzv7pz2hQtwBnmKK8ZGju3xmvKED3sfBBfSGngWa2FgeVQs9ejvkkLmm3A63tmtcwZxaKzwBYB",
  "key21": "5M8mUcE7QDDPmqurvMrESQn4RY7e94jsYbVKnXAYHXRUyGFK5SPko3inBo2Cr6MRqrwsQuop9vCbze6jhrU4T2fB",
  "key22": "3QEZ21QJ7WiyCTwMWPx8gSQfoKB8bZMcfAtwnfY3jF7CL5ZHyFuZySYMwdCz1P5ZkSPJBnrhqG28GaSzW63fTEM2",
  "key23": "YPzULVe2RuBQqbDCPVMGT3unqFYoccoB3VkV9Bz4tSxr3SZDuscWNomAryCoKjPEcR1sG7RDvorAqV8iVHLsZpd",
  "key24": "3HFRVLNrNPem1R5pBvjTLmWpxJXq4jsbs5TXKGiDkiXWd6omLoMPq8nCn78oScA56pGd9sF97gCEJHUZLRXe2wS1"
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
