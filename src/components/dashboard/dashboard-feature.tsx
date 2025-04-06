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
    "55A8C2kamp3ixxqH74yfrQz9C5JD7SvuPi87KpzgSrv4CB9vGq3Y6xAhHQSCPbNanvLJ1rdA5hECz8GtHjeyHJ5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K57z5MpWoEo3LqRfdq7vipPP4UvweysmJzgitV9TmisUTfkh23oog7pGBNNcHhmJgPe7vqk5g4WhRruHSS9YiCf",
  "key1": "dpkiPLf2eoHJ29xCFMHHuLtRk96gfFY1J5Zwi5hcYTJgmP8rejcaecn12UZnke46TVvxPX8977YAocRYX4rN7uK",
  "key2": "3YFwTU6GYqYQZpvuSz6n7jFj8cSHSrKXakfQbQVoLFvzNvTF8KeEXXXRQdDUTf9uAnCsmgPZbAjKoVBNPE4MHV75",
  "key3": "4eJaKhEu4RmFftZRSKPkqbMUygNAPUac7pUGeuBiu5SkUFxBeyX2h9g7JE4RDvofsLaCyZk7oyoPXBnkT7XyJ7ft",
  "key4": "2GRUnALJNr2pARtY8E1yXreg5Rjg2Xktu15wquVXgZMYfBHThPcv6hCmmoatYKUAXevoXPYqaUBKPmJg4UGLTbTr",
  "key5": "3LnNbnmPJSQ5itEswyUH8TCVWRJn1Qp4QKJLuLdxPqoVVsozsKHCG4ASztMKs9P3yfzjpZbKsS1XYWLTQhcyxKNh",
  "key6": "5BU97AbUM4TiiHQWSdgYRP4MFDFKQGcHKC6iRuy8jwKq31vRWByjbrvERWu4zBPxniRzsM2LFh1ZqFABpfu4ZPGz",
  "key7": "5YQ5jAtwGRFp3uKXaytyVS5TVNnnj6BLdzyTsjzmQ6QMGdU79PjJuaQkv9C8P1n9u7TVEaon5deUu2AibHNaivZK",
  "key8": "mjsqEYZoKdE6mhyeNye9qaRiLTb5YFmbb5jtpkL3dMQiPyCTzkyoUV7YXwr3Y1DCbTBCkdK6pr5j2gCKnhRepZU",
  "key9": "3Q1vKEUNqfk8w1KR3pkYVn8nA2YdtKsx31JZMMbCSVZ8JbmTLWj4BwYbeFte2UMY5sfrDDYQ1xAhirAuTcaFq7gS",
  "key10": "54bT6QfnjDUkRe33iz6JDbYG9rmBwiaMR3LqumCuhS2fh3eANK1TigAGuaMpnRgebUyxyJXUHuZZo6FMF7e9mERj",
  "key11": "5v3mNVRATXZ4G5VRoEfjtrBV1tghkk7t9kxXD8ZEdbYaLqaxb9uXNsY1kw5W7VjbGXE9oynoV3BbQQVSmyEhasUa",
  "key12": "4SeesTXzcGoJysULLszHntd3Qmw68brhgPuqRTqLeFE5fCwsxHYiW2QXxN8VXJzbUDK93FJxrP6pAQhHB5yf8Bft",
  "key13": "3NT5uKhNaFZUvw35P6FHdXx5B7PMD83Rxd7cDsZPtZhsvRgWuPp1mv9iVyZSvNUdGczf5B3bFB3gKCwdpnz6We1z",
  "key14": "2BKiPckmgWxrH3DmuG3Q6XvDM8jhtWDiybC4pQTne7GKDNNc8u1sx7vtGLC1JoFX2oercuh9Vw2ZhPyhZg1Tuwme",
  "key15": "2s7sy4qDtygpAKVmW2XRQqjNn6JCKybpgnJTPsbs313r52s6moS1Qvi633gBFHH3wq894WzrBioaCPSog9BFVGxk",
  "key16": "aebPTVgYby5EFsecqWVBB2wd2Q9pm18Vsjooh3Vb2i5JR4ARh6LPwGTiYvQk85gLqXVxBgh5W8Y8XrHeZti9BnV",
  "key17": "bc5ZFeWQrvWWTAAsJCvdWSEFMqTJ5NWuvKJTPZh7YQCwjgn6dGDAyuxrJ7rcAkFvMV74bACJ1qLb5kPSz3ysz7g",
  "key18": "52ozNAaUdGJTb8JeD4s6MwoAxgGnzUxVHto3EkwDLBvDKynmZgcRuRHL8j9tYoGckhpXwDVcVfF2YMTQAYpwQkHM",
  "key19": "5FKJeaD1Xuzb3v2xD82hcqFvjp9KhuKSgy6vEdRtEVHfjm7ZS2LWiHma8WJmgshEsq5gbfs8vX6LawFePWDv3vHy",
  "key20": "5MgriayKUV6DQy9yZLn9sxaQEjSxmP9e8MtyuKdRJZ7oP6jJjHfWSNRSK7JcTdrDXGVkjmspsyP5TP5JpcKeqUBu",
  "key21": "hMkhFCEJmHfhqjJD6cu7jzEogyAHkN34aRvR9fGfodRjSQKbKAHsdLEWTEEgKvpghwhWNyisM2As1p7SEY4XtFH",
  "key22": "3Z5c5Qiad1RqGSiD1qhXq5vx7jNwKJ84Np6A7oYrYQwER8oTsr5kESVqwAZKpuffxT9RbtSgigYy4w8AvRyEf114",
  "key23": "2ovofN6PGskWcLvHAUUh2r9KsVawjYBFUcHkZX6iZsbdDPvXMCM23jWoc7imWc2FG5ifsoT3UdLVtnEsFkcQkj4p",
  "key24": "4yfenNLsLhFaNczbwuE9okaWRi96iEXdWRpqbkFQ4UGTEoXJ5YvrneQ88u8r8X1w9ESbYf7GuTLQAQwU5Zdss14P",
  "key25": "5UEgSWPm5utpXy9yvVEykNRRiHSE1FzkcmHaS2qawuj5JYiVYVe5dCjuN7dNw6NK1zv7wCAWbHbU9RDsgGpEx4Rh",
  "key26": "38iRFDrCUh8Yu8UZyGt3eZsQVgjrtQD948HLskHA5VK5xxZCtD9LMGuTsH8WFSmzMKz7Wc2Uja3uMgjRnZM557pL"
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
