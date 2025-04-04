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
    "DiawercA9Lmh1z3fPGciToFy5xuxDEAQqFrnXecESvt35Y6Mz8xX4S4ePkQbLMmp4CzLKqSYNWuuAWjSBFrpYTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7jv7FYUE4Diyx6C92tUuA8anK2BECWNKHaZgooEUP7ckuUb343G3dy62HdkEiQMSZWuSQNJw249vhzarei9vKEa",
  "key1": "58jTPMNYGVW3PoiMANbP5A3MKh5Hi2PfjHddevV9h4nBe6YhUpbywK2tjxz4Fc66yHhnn4npx3mE22goGHnxsiZh",
  "key2": "4FwZLLjCMEsFPJEVo8pmJ36XUnfHFG2n6j1117e8aZRtmpXjYV5QaxViYTda535QzjfiZJAvLdHT6u9YK5YNxRyb",
  "key3": "3i8a5KVwfAVCdzHcz93hNyTRsGomei49xMkyQHKX3qzm7EoApweYXTwvpFvsJQhwWozuDK9QA9tT4YRJYWNtGgsX",
  "key4": "2tADAiFn6Z1khq4t9KipVnUqGoNvZZnER6vgn9Qz1sphBEeqEp7hGe11jHepR3RwHZr5W6Kik73LMjoPCfpSzv8F",
  "key5": "HkRsJpL2pZVvn1sKGqewAaHrpG6MFyMamkiV76df44YSxjiNt89hqzXZNfA3LdAAVuVeomY76izjGwyUaCtK4SU",
  "key6": "4yacnRR9qixTvRLXieQSmXarJ38zgyM2ss7AcjZPKtJVjP1X5PaYyJNsnZC2h3j8xvPUV9KC3Zzw3MeHhDGPJGNc",
  "key7": "3hjoeZh5Lp2cFzMfaziSUq5LrBDn3SkaxDuSKDG7j8NMQ5aaE6wKYT3WwMKbNXJATfqEcYDqCRcDnLCKn6DdQ9ck",
  "key8": "3HgTPwoxuEHBUCztj9uLkzNwW1iDyiWQcB1KR8CGBRxmJ71iNhf8BBeaWca6FqvBn2CjgWLWSYT8T2rkk9RZWSHM",
  "key9": "DeFPkLD7ZjM7YT1TZQVPkbr2uryJErnNQM1ynZxnUnw9Mz1SsrENduTmgaTDp2NTW9QfH4RiLUvVwhw59hsZhKp",
  "key10": "4ZztLYPS9g3cgfmfwwnVhBK4x8KWbt3RpZNoyYxiJR8wn3qdHHqThc9yWkjBmK8zXjoToEMAFjJ91gR3gJJbwyGa",
  "key11": "ok2ALLtYsppXBPPB4zTV7GysZ33QQ6CfTwSnKAhe4WFfzrML5gKihbviUMTPL84oqFE9nLtAewXtw3dWNWd7n4a",
  "key12": "2FTCj9TyFbChcp6c4QUp2kAL1k41LfEeu8CuaCi5J38mvR2w48oMML6NM9i9776tzzDoLC8teL2ns8EaR7VfthZG",
  "key13": "5wv4CRCQnw8f87gN94BVpRxPLA6sSYH3TxeFyk3xJYiLizPDG23ahfFV8QFWY33HDxZFbrp6HxVLUXR8EhwWduKd",
  "key14": "5x4EnC6GBf5c5DhPBKi4kbX2EsbCBaMS7wLiXVbRJt3fBTWNTFk3wtQsY8dMf4Fg4wf9wVNSt3rTSsZFpCXrgBpb",
  "key15": "2C5afQ1Hnen9WP8TDW42wqqcW3P9wmo9P6hdZpJaf5UeoiCsc8ezDW6xhNCoHj4iPnFsqfQr4KEprZj3PdsbqkLR",
  "key16": "3BFX7fFEB5nL36KeBb1U393vwB2ghUXzQCcz1s5oekG1WMuzdEzvyjNe4WPzuLmfjbu2GACbCJevncCc5TmbNMpc",
  "key17": "224wcRWnronz3TSu7xFAxSfJ578GmYtMHH7cCHUougvBVh51z1K5RTPzbhozLW4zXGme2dZSz1NasZJAKhVaEH2U",
  "key18": "4ejFGibFypRrX9AZ5KVz5FeedGLhBGY8M2xZo1UqpqyUS28Y2nxbhEFZg4yfurWTt3Wi8vgsofDpBRChVrsLHK8m",
  "key19": "3TAiNHbJkHweLBpibHHFjquF4sTmdz17fX2bYKHb1kDnQ3e9RwQFHgMmADNCRscWgNKoQdaFKULtEAhZU2nRUS8N",
  "key20": "wzwFufXFJvYJYaYLj6Y63hRVwM9hioqgPGMENCkdgTi7KQ4AnZgSXx1udNmFgDmbUUPFdPRCUbsrAopTchUhPjU",
  "key21": "G2eDzuhnfEjEif153AsQM8UQmdD6hoKUzEYAL7AXC3ffQh2kac2SnwW3UoStvZGGaAwaf4pSXvhEGhDt3MYX9NJ",
  "key22": "4Na177dGav2dHMSTuwA5WHhmUQiRStSGVE8qFMvAe18qXpBqmctz6fJJgLhU9iJTFK86YL3b7Q5jZYM5ZNEKCbT4",
  "key23": "5BpmAnWMwY4Mop3FNmYzc6NaTskBteVYXvEsvD8hBVDeEhKEC2xmo4KZqsENJwJ6a6NYwPCUdoqQrbrJE5iQoaBt",
  "key24": "5eGAh6ct7ckzsoiaJDc8FKe776sSK3k92N8xxCKfUjRhGQfXMxVGuYEsfSQbaRoZfBsmdYvzpwHuKpSSMK5Wziof",
  "key25": "5siFuCH8RYER4udVVxvwFPnZEqcd4Jux4sEFmz8ptsC6E41VUPG8cmaQLu6eCwT6e7zvSx7eCSh3JTA7mcExtXM8",
  "key26": "kJhtJBMvzU7ew6DWhjbPWTTnUeDZnjRHtenYcbbocV9vswTXG19qB39hMN4Gu6qrPYEb7RjamnyHkbZiSZGyv6m",
  "key27": "672NCnvZPBG7pbGy3dtjjCLa9eywsHZXxmpvyzwWtH5hyMtEXctgN3bkwoZ6y61WAhCSdYeJ8xuGsmfPZw9i6Tub",
  "key28": "3zKwdiy5rKK7wwm4jvrNaEKu9pzHo4teyQ62rxwcqBC9Wdo7vE8UrUGjWadtcFqu5c9h8dkGk1QLvVaafg74ra4G",
  "key29": "4WbeXQ39s5dWnVp1gMSZPTrr2MdGNxtinb3p7V5VyPHjX87itbrAb6QrCNNRD1ApSeKNEH22rV6pdXnHVuR8xX63",
  "key30": "rr31t4jdFrG3ZnQFqGDUDvznuERrgRbTFjKvqC3fK2nPichDxaK8r92qzp3zb16UugFAoYRUgheCLTuHFUkGKjZ"
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
