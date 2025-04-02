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
    "4GWXqjwKKxsSRuKywSL5yf6J83EvTysudWujLnVw42pSfU62JNe5tGYXCcV1Ck5gj9sy9oekq8qLbGW78kwJPXAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vqyzeXTQ2xuyV1bkRmJzZ6V7ZmCybXFYn6qKbYCL9d2La8QSFQPTJMPRpLcyPjXKfoigrWJMMJ3EC3kKLyjGWAU",
  "key1": "5SXGLwPyXJUifMmUJcZe9MQxPpJQK71dzMBrN2khzaayA77vaMMDsv6zfpep3zFJKBxXJ8ZT7THdnVFgqBVmthXu",
  "key2": "kh3rChRm2QEnZcnRoykVGv9ckyj4hc2Q4jSuzmPKqXZedUsfdzvGZNxP9Stot7nJdriTAyErhuQGxV9kDmfWq21",
  "key3": "3vC5qZytgGwxEdQWToqCxZHf6aLHk1uLQn9ZSAH6gtTXCofvvqi24qD5QLnTVj7wG3aWKpMJ5wtY68bxJqsTkn5t",
  "key4": "4c1ioam7hCfUHKMqK4ErF7eQ3dsqAyK7BawAccbejgZtR1MNKxxuD7iGt1axHewad34WXs4UWWGopFKVJFxwWPu8",
  "key5": "uvdFR9NMgjg7PGZMK8R3rW1Eo86XhPyAWpUnx9EBexJnFrSJmqJTq28LXu5P3yTz5ZQrvbv4hYMrMykvFXjfJuD",
  "key6": "5zx2K28G6oNR76foALav2ZVJRVcqhD3kTC6LSo6YpeiRQrbLpbb5MTSVCSVgQZkZDWFGHSivS3btQS2YkJF5LVej",
  "key7": "2NE2FgR1QW2uTV383HUp96248Nzj94pbTa8VwZiXVXhqtQRG3uEVJZH8BzAsL5WG77fSN337t4L6e4VRdZMAoMQN",
  "key8": "2v3gvsnGnGydgJYiZEQUW7VmbBoyEEdx6UpHHwsbm1GX46sKFDQNqqrxCo92pgQe9ecLh92JLbVGwzHJp6GnzjV8",
  "key9": "agRugDZXd52FiMpuTBpdm9nhktbZSMAeQSGtyu1XwE3wka3ApoTcBpVFMEmUckt5JwVyPfeoSD5md1zGdLYHdW7",
  "key10": "62sNashZd2w95aFmi4uxeCNRBcTZcfr1S9BGpiUhoVH1PwsPC7NBcLroHtzLDrzYZQhGMSRzaEA52tk5WHENphSe",
  "key11": "5NFTHpJjxUjnYS6iswSwHrpcFHNUvP3kVNhauWZDwVLbJnNPCrAgox9b9zmhXmb6rx8dx1c7YWyS45wjq9i4zVzY",
  "key12": "2FRTP7tR7fZVEUVEY8qPHdxHHtAeuqbaUrwVq8JwLx7iyEyi1HWXQq4TVe2Yj7FixdikqFj4pHMdFF6XMYiTuBwu",
  "key13": "24FfuWPumAKFB3simJNA6KjkAZDaVp9SuGuoNC5ujXrgf9vrxLf1J1haD5RFYVcY28j4AEsjNAtqcxu5gAmsgDLu",
  "key14": "6Lx8PwfcYCPe5S7bZFjPFgy2VVeHMrpD6DoBM55scypRas64gg8Qxyyuisy2oYr3RzrNezY5NseaztfvRbWfx58",
  "key15": "49957un681FXQz63S1zYuYsBkccZNWgVRewPJ3z5vJ1tcM7szMKQne4TytrEv7cqHeNw44Jupw9TkYaFMjrBo6fK",
  "key16": "2eUChewQFKXrqokbxBjdvs8QxBA8eLFZ8zw6iCmo5oZXVC6r4waZQhHjNZ82eQYBUYo2SoocYYuGj4dW4pRbEbw1",
  "key17": "2Cs4vF7ts15ffybM6Zmbh1zqBijBDRCRdSwAawkCF9YPZMmvy3ZgWXKWEU1QhSCnSZXd1Nbwagw3VHZKWKFS1cxE",
  "key18": "MXy9FAc6JrM1R3BG7Q9sXQ84D7gt2F7EmipLJ9Scqr6iHZs1wL7ThefDuhddhBHRXjmtxLzF6p3gXkLrZBVDay2",
  "key19": "5NtKBVVTehUyFACZuDcqiXrxhFyniUCarsP77TQrK4rKzkH1F6KoJNyWxHfKkQtJRkX9S3pAUSHXG8pNkJPr6crm",
  "key20": "3KDUibj8ARFdQ4SigdyrD6s22hRQVKv2FZo4LqKTCjVKqYLNJi9PLpwaVFmYQveR7qBQt3cYT5Fez6mdjNUn5WbK",
  "key21": "396BYPhNPUiDS7LvVgWUmk1BUJ4fxfEHZErHnPHrjwu3RhHtDq5zEA74fU5yP89uxqnp231CtEB6r2LsKMjnH9BZ",
  "key22": "3QWbHkknVBn8JzwELu4Wu4EnsonuZu5FggtyXiEit1iq2JyZiJvQtxYZSmTu2EfhG48qJQpv3YtYcFKBsWh3JTzx",
  "key23": "2ridQK67FcAybw1wBrxJgvBMZfuNR2umzQNkLRvVA6PWy97Yo7s2JN4YCeNj1D5KgrSsSzzi4RxiDECGWY5VGSTS",
  "key24": "2m19YBmamTJV67gFytt4AYLV9kttURoECi1n7EuK39iZYtXqTNWru9eFCbvU5m1gcPYqof4cdrLXd1g9uFaiT4Jo",
  "key25": "2PuRPReQsV5n1whGSduj2szf29B6YRL3gu3mkm45qEMAeBrkVTZh4Q36pU1v1DJQxh7HWZyGTGj7umRy6JQR4yeC",
  "key26": "5PX9LE9HsjNmHmxDJuPS1SEbbT5S2UEi9jPck89cDJ64Uh5Pnb46zwyjuQzKBpKvabPhexdKw7sidodazyZV5zK7",
  "key27": "4kRkuCXywWBKNUsCDEi1YsaWov5gB9g1PwKj6C3JmEX8ksZwSPbFresGyhYBFWCox8rnkeRviYWShWTQ23FtgBYP",
  "key28": "2a5b9MAxiVeULGBcAiD17qkfLYgQn9vLqNV38MdjpmRuLH4chpnGTUub7L3MLKLzjpogJ5KHs2adBtK2Nvp6ExYS",
  "key29": "3h3XBTbtSmiFzzRxW93ANNJzw1ubjoLbfxYAEQfG1bBLWsuz223659d4iroLNyczHASF8ERq8ghc2h79oRaPbWbq",
  "key30": "5uqwmpbsZd1eSb3J1vxjvTVhjsije5pufVD9oqrmzhwX5Cch4xJRPgzLjtR4CRiAQs5mhGxutFtXqw6gm9ckajXr",
  "key31": "SCtEh884ZycqfViv1D3mM39iMWKqLadTCaTn9ZQg1z4h1Hf6whYLnD3oydVdKqkb8KBsGxpyxQAJUsgWbF16r6j"
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
