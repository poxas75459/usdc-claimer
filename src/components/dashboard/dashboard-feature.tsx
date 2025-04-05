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
    "2d8eRHQDbLBHjMzDDnDi1rkPtcLBRi35a5JPeyJ8u5sQ7YKcy2BGdZi7YpKmD7Wj8PA63G8ExjHon51j2SSuudXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EC4ZeJb34fhe7whehPd2wfBwpLtiZM26xp7oyLQZ2fzZmm5NGkFVb3c6jGaXsiva7uRXfHmJzsWvDgmryaTy6Eo",
  "key1": "49jr3KtHPcPTu1P77F7LaG8d4tZXvTtt3qUSbDaSAwH2ddf1r9YmVmyU4a8LEqaEwx2FJrBXoiZa53WAniaqXk2s",
  "key2": "2VKJRTamWwPEUWVfG5p8S7XcyQc7oDYHrDjLjumXoFRhR9oedn6AAV6UUxYNgKSDpVkurUKrXSXgq6erbAdGRTZK",
  "key3": "qe6Ku1iYEHMLoYz5NPP7EF6E19q2qs75EyWZaJqGKJt3B9ReztMVUSn4TKfamUopkcYETYhGhw88RbXZv4pkmJD",
  "key4": "4t5nxc1XasWx4zUiXGYv6hqrxFrwbjChTwySro5vbvrsLBW4r93tkk4NHUTiTnqRQWdDJHtYPmAWmrmyPvnZ7NcT",
  "key5": "5STeQ731DxcmcAby4UcnbyZeSD1oxyTj8vL4Msb8L6k7maa7AA5ZVVezYCUPkSAFR5b9NuiRTNfBeswS7eLQN1c5",
  "key6": "5z9YaHBBTJYmbbCZ9ZnxFQvxrouerKMhvuuBsvkoPMHeiwfRagv8bEnTHzjLFwiCB87gNWknThznK76mq7m4UcmX",
  "key7": "N4HvAr2yXbupFBA5qnnWaBaXtq3mUxRnWyMAyK2jWUFZBVQkT9Rp5YcU1uAFzzW46WqaajYBKmyH9Lrx5wh8RJ3",
  "key8": "4WHQJ1717Rwux3fcubvsRjVBiRRSg7RVgCf7uMmRWtxJ2RSRYwnjCMnhySRgBHiP4UcnAJF1QNpVeAiB9qNSaMwU",
  "key9": "4aGUB8zSxzXsEQLcZaePMWkHNcwdkd5dv6WRjYEEUz5LFeAySPtYyQyb5qdSf9hvZF1ihx6gmebPmPYiYfEn4JE5",
  "key10": "3puxAeM5PGo2w3Z8iZfazgBn5dhBWYG7pytVFDFeo8aAxvrZNhe8WbEPYU2rqCf9cAfAKerazLzy1fbGJW1cZA4E",
  "key11": "3ENmdUMxfu1kZMx6aaDFKRp43T4dT6BC5DwvssYFiNWGBYBP2tT3wzU7Ed3FUmQBAyrJSRTqgjixeiQyBahwZ8NV",
  "key12": "V7nxcy635QcqPfhhVbZaM9yFwHFeDBKNCHXDNS8hJiyr6JRhK9MF3KJ9j19y4jZkv1p7mHuCxVqMAcMEpbjAWuR",
  "key13": "5GZPWuN5bY5WdzP2z3matXqKXKke5tGyGz6LT9n1nwmcGFjcnFSTpdR6jCFT3XRN7PTvNYCYhF9X37cWcCZEhciK",
  "key14": "2Hq6cZopUPv8WEUC893igTRaoAQ9yvn1DgXdEFSY1TmVbNAADmPg31ifru44LNt6nng3rFLJ4hU6bcqYXoYeG8gQ",
  "key15": "4HMZYAAeF4hRrtDDJLknoambKyAEgjUtjDjSkYkvnQE7vceNbJedvJ6Tp47vvtm5C1fSAKtSpx7jLfFQk2G9uSGh",
  "key16": "5aepRZmYnZA9vk68D76AsRt1Nmd7QMP3i6ho3rAnZ4fJjw3wMQuogQw5LFbRCete3ym3xuFBeWfCPoyTLS394kCQ",
  "key17": "3Tm9TmuzFLL3B6Q98DDtP3Qo7eTobuMFnHwJyAWGUWKJ3fHQHeM2pYbXixfpRo5EUPThfyo6iBJz8dWc4UQUUvx2",
  "key18": "23PcqTc1ajxgCR41HfAc2EcLfjkkJKHfMDGSwKotyRy5moi4aKsPEycRWc7aa9yWp8Twva8cBNHk31b6LMvXkX1t",
  "key19": "3xqmC7kryeJ21PAZNXB6kMAwJi9GGX1ozs9771YiKJQ92gUx6ZBtnF8aC6aS4sr5QtqhiWdCm9su2hE6LtYjxMov",
  "key20": "412xQ1Yg45P8TK7hHmNipVbaEKpG1TkehSomMMGHtnQgY2WHbK72426haCLd7n9MyJ6oCmyxz9o2hznhkZuVaBD3",
  "key21": "5kC5wu8QnrKB6ePN5bdoJJXxAuysPWBrueFtRik565NmvFkp6SEjbLBi1xTjmmbWtmAyr5iJDFVz3xHRTRmwLiT8",
  "key22": "erJdYhHw8jG5Su1cYEqC718G2BNGhXj7ZvUhyJaM924ar91hhm2AG8t2B4ddrtXjhvvchULugkwwdBxsfQJJMVr",
  "key23": "54tWLun1zrFsQSpU8rpjHj7RzD7wYcwVCqdhRheUZShoQDh1VyMCmFxPjRjkRneVJDdYei8FksnCifwxyZvt4uoD",
  "key24": "2QXUBsC7unzSGiivJRa4W6ogsaCZPjbuiArtZBBEFz1sSTgDRsvXojqp23muT3HUvihJr8r2bqAoMZi7tcDQzSfz",
  "key25": "2mZPNMPVmAtMdTFAhcU3B8hY6PNRN54ScsvJyjabNkbFTGbcov7fqs1iniW6k67CwAUvMgT5JLXoBnpVqz3r5etD",
  "key26": "4EdZgFshEySiGuwqN1o32MKS5aoT15d7YNqfSab8HiabPbQWMQJy5j18BZLAS3PUmzoA1ZHxqzJLKvcPTc2Ss43i",
  "key27": "TzVRrFucfsFU5f3gTBupAu6opRMjPYZk3pHpKZKWD4kLisC9EbdyT5HpKvFTsfLrfzQbrmJzBcUdR7qToeuvLMp",
  "key28": "5i4z1huvkwZKeBMzQfeTNu6SeG2R6Z4ym3A4QbaZskqVZRzBZ14voTsv9AFWgsrF8ugw9zsijmcqhqBdEy2CHGhp"
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
