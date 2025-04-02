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
    "3mntzUFdGbBVhthEjCsRkKXmD9WUdEuMYf6aupLc2eKTENcNjDPjL9QY3WQHJWdBAZVjwK41KNwXN7qYntorF5qV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hP3LAykwivG6oAia93finuVSFJCF2rUxwCT5LHdKcyKUqZzMvsAmg1vyrv8JjZSHzEjykeBmwcwSwcWNDiAA5hT",
  "key1": "4w3nzZttYQEFN1wVFDH2qJuK5qLBvWhuCJvF4guttQeoKJcPPpTju3nmpNTSz4qJXYeJhhAVjeQUwdrAEzkouNFA",
  "key2": "5LwP5hsLa4jrtUqU5w5abJ59gUgVnyk37UFL3he3FvPiGSKbFXmM567YkoCkhgDRVy2D8wYy4Tefiit3VsmP7Gd4",
  "key3": "2L2kk52FATz3SSWdZSThvaWJ7RFAqbSWJ6RRc7hQW3B33Fu9Bok9hpEDVWu2seps4Vts9BA7HpWesK3VWjydub8C",
  "key4": "3epxgdtf54KKkbdxzWPk9R7iShc4cNHvDuhLb1f2wa8tQ5eSMxo3Esvyi8WjrrEjKbu2B4d4nZetXuT6PHKtDH8T",
  "key5": "3Et7foaMXzwn2tUsrXPuoN5wdDNYrftvTHak9PYbjb4Qb1yiVjLjwjjUVbidXeM1boCHZNQi4C3x2V3g9q5DhmVT",
  "key6": "2gZMNwfCoamnCdRQYyrtTubRpKFhhEJa37uk8fTbXWHftBYGDeJf2u8AWyeTmZ1ZF9Z3RiKGia2GfJtW8RjDQhcf",
  "key7": "57NnEn8Z4hSbL19EUJXeDQtv4qxLBVYH6rNEUyNMiXBPuaC2rweA98dHc7wpbDQftvxd8ihg4kXFVrkg6QoNvTTz",
  "key8": "5odDtwiSHxkDjcrZk518iR656Vtu4VPjZQKhqMAj6GAtUJoDCgS5hEHR5MBAupNxa4kwbcHyxwwnM1EHfuZAq73T",
  "key9": "42GaVL3d8GGBgSEWC3t4V4Ye3u2kgpZbTLF2RLjmQXkdcLM8bMq8emum4QjygRUdQNuxFVTChJCxvFzT44yiwZz7",
  "key10": "bmBFar7591beX4gFafPNNrSHBT3nMJnvnoQfVLhdZMtcZ9VKqQzRHQDFFy1m6H8gb79AcgFtLU45FZruwV6g7gQ",
  "key11": "3owWcPP6fMsKARmZ21SgCkeVbFV6GLuKL8bJP21aiewXm6yNAD34GkSqzjqYr6vMY1k7jM1JHKUdsaVkJfxanwJj",
  "key12": "Xfn5AVgUw5CWBQ3A89zgNyo4iWiktYksK3oBy7nv21FWSnaXRr8vXf3V4E5W4h1CW2Rpe2ASW3mxfMwPoytnNbC",
  "key13": "2qX7Us7eALDSEC8hzhnxnWV1bAdC4bdmu9yyAFsxsFBgwFmiN1XbZzjmPCVagfdeMR3L4eds47uxE1WdFAjvCRiE",
  "key14": "2Nx7ZUe9gXfLBnQnAj8VFQCELaW8QDH3kZaFM81tXodCKd25czyxHVefeXp4bd64Wb7Zc3xWjpMgz1q4bMehpyhY",
  "key15": "2WWn2i59Nt3ipm7e9HpwWKZd92z9N8Fi584vMZcrTXhVFB6QffyhueaxtudsMM13setYGn5MCnYu2Whhbj9y2ssP",
  "key16": "4EVxfsRsUFkM89mLYCNeUVFCYpMRd4b88HmmBtrRKUrEdti8KTA91hU4jzTdD8eHBH8T4j72vrhK4cfzq6EswWoo",
  "key17": "HGNJWxYCjsL4CfLvZzkASGiLCoVDzbAzkDRruMYqA3MKnWFTyGKykRQpBNZVr29EhTL8WprzUu7Nwsc2NjUXDRe",
  "key18": "65XoZ76CmDTmiaLUotQeR167JtJ9Er1M5Fg4nfPQtoviauEGuXx9LMB1bb5JWMtGrPQZcvNuPcAwpSqTuSs9edeS",
  "key19": "3sQBLM8eTozXpuobRvtg8xEQ3XP3kSjtc78grVu75nwbAqT5breguBSbDpxuXmZBwCfEZF9hNDSQ731Pa1R1bR7S",
  "key20": "VQgkLNsVG8j5Vz9xsd4G8AWaqjBiWUv1YDpn8CZz8i7VnATnbJLTndS9pxJxqnF41CGn89nweUqWxkKTyNnZkE8",
  "key21": "2PhKnaDAUXEF1VJk8CJjuZ32NdyqetFuMeuwA6RSNTGi9aoTmpoQdPEVc7XevujD1UCL98JUsd8qS6z337W5wgL1",
  "key22": "2v1oLNTS4RnhAaSazSDk1DNaSvuWNBJEfnjCv5h4vsvH9pR5HBq9RFKRUrpDbxEoyUoJDLGfusDhdye6ZyLWpWhy",
  "key23": "4Rp6PEA2K52GkK31z5Zzo3yzwP6ynWYoTVWaZSBch7VuBay88dj8ZkJUgvA6Jcq6CTe6tsbKtvXZNhzxJHcjFwVb",
  "key24": "5YNTTXJQPmnVsU3Xf4c4sYVPXshXghiyFFCZEQoh14pjNz346pZekyziawgiLaUAXxjesZHKoCnYEeK9gGhHrcHa",
  "key25": "3wskrBgCzp5EpR6SZVvJd1oWzh8KKnqwG2WpbYDk9bhw8pXR3j1zPBgFABc6khUttdrjS79K3tC2KoL5cjVsPykv",
  "key26": "3DKdTxKMHnmXiJBg4KCdd4ZMk1F6Er9h8rwXK1QCFG22orjxRrNW2VUftZnoBjt7Xhx6XBrr6DhNx79DeC81CC6G"
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
