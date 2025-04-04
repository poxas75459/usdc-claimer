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
    "65GuJayEqm5tVzt6LsyCCpw92HZJcFckj15dB7edppzK6bWPpx6jEPBpbscYZF8mQ6EMF5StH1zK5im1vWrGr7Qm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PLJvxkVoHk4y9fTjgL2vw9wCdK9ZHjuXTP3LPtWUX1dvwiYZ7aVHsNCYXNSFo8oYdehcCW82fNL17EZ4Utnv2iq",
  "key1": "5Bezt7diVPdnBeZFmKgMqo6ReDpcpNeNmXcEgAe7zK4pMbHGpyxZkjBTGxmtXydk47awai7RLMi2LFMtjZtS9MmB",
  "key2": "4WFuN5NA9UkijwaYxobhsG6ZCxF53J2Ha4dCJDP9rjLvVXe6j7r3soVtXJY61bus994SHFjPx6JMTQpeuLhJxcAS",
  "key3": "2xKWkH8d2t7RxRCJt8hpDLrw4Fi2yvjaZsad45szZ9xTNy5xA7CAmjFGH7hhSMdwYRasgxRK4dRJUdvxLC1LPWt1",
  "key4": "4hNWdKBCWbvNvMn4pchSQzpNwKvcqddiSwQYjzVShRd3jyzRWB6d9VfAm1wJyNoMkWZJe4LrtfgX5EQA5hsP6wKQ",
  "key5": "4TYZeMeSm29tfksRiMVCqN5b1MmfkvFuXexivop56vberHmitaAbTy5KprPk6TTEb3HYHwRfojUWgdobBMDsjWnu",
  "key6": "3VERNGxdvLLkdfXKotANK3WTAeaN47722gJb59FBCm2aXjRyg3jrGqdsvQFNTCf33Jm1gTUHpQKTCMZzi4K2w5r5",
  "key7": "gfRTTFNvBrf4Ly2wn1hSTdW18yGuaj7KjX6phnLA2c1EdfL6gUxX4Jsg8GfBGAudwGxMEJmNoTgAjnMbY8zJd7g",
  "key8": "5NsngiR9SUEKsUhxZK3kZu9vgFhusnR9X2Js19wSWkxb1bofSpYUjT3pjW2c1LpmJgQN2nm397KNhwjPWs4x5gGp",
  "key9": "t4nqiHJkgZgifKeE5UM8e9WXP8Q78QizFF1KyeCv7fzYLVPTqGJueosDG7uuMHJQ4mNAn2JMCJsoZrhuhQd1pQQ",
  "key10": "2N3p8hKeZE3LqvZm2iRb44nMkY4CPiWimitx7LryFpHkUwjFenWf35ogtfhVeAawktjLnp2sY5iWXc7GS7EtyMZD",
  "key11": "5YkR1RvXhyRbjCLAvSQDwnSueXVFN5PsuVLwVjwfyA6G7iPPcDcdyyx7CpMDBaXt2cx2oa8Ywgoyu4q9nGHUEMsx",
  "key12": "4hzQwaVZJpt6aRRiRtd2h69M5apVF5XH7UV4oAoq4r2GciKugpeHLVwTRdj1mGFetMMr8Cpj3embkwCpjzsmoU9J",
  "key13": "JpXMDFG32WNgyDYtScmtf46jqEeX3azaHWM1FhU5urovZRmUBGjXvEPG6PhWL9CU6Dh1C9ePCT5z7w6zvcWjVwx",
  "key14": "3WEpo6uiTJuBahmTwLy8episedwBEQaZedLguVN6v64fPkt5TD3YAh9FKYErEwF4uWxvQ76fn2f1XDicy7m5Y9QG",
  "key15": "3hopoor77SqaB8nvEsDMwTTgpaC3Tte7utQBhmWyHYz938f5jVgwpCv4Sf9YzUBEyEKcQQ51WJVABkQfaANpVesZ",
  "key16": "3kpzj1hW279S8X9V8k7UziEvYMaGWL2RyEgf9NghEnKUX9VgnG9SbNiDgtriCZ47hiRwNbK1vzZ5Vy9EPTtkKshv",
  "key17": "36m5zVeaNZuSggUduDnUJgja479JuRAVJ4p8aS4Eu4aGWQn5FemGDWi3y8YeZnao9b3eK2E8DnLsUPMNyLqKvqHq",
  "key18": "2qk7oxAzZdbCGAXy6Y9Rzg6YoUkovEmbrzucB5fDfGCFpUGbvW12EtNgcboN1gh8Px2yi25bgbDyjkxVQUMuDiWv",
  "key19": "5ERcW8L2QbWdc8uzHxuKEZTYGU5rocohCwNtpJrZMRvbxVVK1PzKqN3Ca5XuVtA1Bfige2qkbxn9Z8jL1KKNxJGR",
  "key20": "2yzgZsLTTccSQtU1PK7d1BjTWjNTdDfJNXZz4GbUojKj19Z8ruoG4jLchJP91fnaNNWyeAcRVEnpJvreoAUiWysm",
  "key21": "5V2VgQPpyaPKEG3T4NiLYTkGBwZaSQVSRKnD9Hv6EAoXwvv2HiP7HKNsQzJkkaHXA8aA97nnTXks4PpnvCWtQHJm",
  "key22": "2ga5x88gYWwidFpiLrcjyQW9YgasH6qARwVSHMbWLZnMKMMFhpK5KVfHAuD4UGhACkZDMJULa73ppHjGbWewXoAa",
  "key23": "M21R6Hp5jrFwMrARtkG3Asev6Hbtbg3XPTKi6wx86C8ghuKgHNwWbTUM9RSXqotgHZFenQDJ3F34Mf2AuRLMYwV",
  "key24": "2drNATBwGyK8QMJYjFeJQmuJR5G5XKCu6XdHP82SUmQLYzozJPcMRXoxitEGDsEvffP3HPbjV927qhuEamrLPXXV",
  "key25": "5NoGiinHUZhRJaPPnEMPJoqrjPrDctMFRFYzP3TLGjDYs78BA2CFXMpzAmBS8prysGNgg5jWHgb3XbV7o1Lbuzzc"
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
