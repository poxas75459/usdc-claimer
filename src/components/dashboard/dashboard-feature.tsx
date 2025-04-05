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
    "3X9D6QKoWMhV8xw2kWz6z5YBmdNEW1qH2q4Cew73E56rR2DDXyw9BitpfRT9qoWcVWitve5J6CCf5CgfW8G7L8vY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mLDdPkHoMjL3dosStxBh5LJVsvuAhFJTS8Wn5UduWXZGzkjDQcwy1DXCzZ9KPEXgoCFqHYCG1UeNXvKAU4uP3zW",
  "key1": "3FxV5LRbj9VhP12LXXeQ3133h4UzSuHjAmgRie3gR2Wx9RikkEjrb6nZWmFipBzXT7JNwsMPPuCjgz3Pa1hzeVCE",
  "key2": "Ea4kX7AFdMMYVaAWdUyhkhLS6Popb68tgjvfnPc7c8UhC53hFznTHPCwAe3mzPBrGBCEV2cv94yXe4UNwYCwwVu",
  "key3": "2rRi1pgvwcNz81zmEQXysS6c1X8DafwM2RQALTXjMGyKojyEvuBgtKn7wbMekSMvxdhsw3KRgjbqUi7vHxD3K3EY",
  "key4": "5hq4aZyKb9wjHQXNKh37ANriTy99HECA2U8xwMxW2Usq7gwwqEXNuj6R3tnQCAoS5tUTzgcckssTKarAx6Szr94g",
  "key5": "4N3q4Juo2KfoAHVNvg9pVMySSNPWDYm2yAFnS6JBgSinN3qAJVp82e5RVhZ4KAfbYVjdnq79sE1eW4qg36E3x81s",
  "key6": "3LShZjaw7LjFEDRNZXSm9QKTn5FzKYJpKgWMgAiw5twZxdsfgF4Z2YAYNqySrx5pkrsHYAdKNNoG4vNmJDuJs1FY",
  "key7": "5HU88G6nVKBAEEMr8GA9oMYekpZKKv14dbHZxkLceKur8KN18r2WNiNerfMsUn8xepa7xvMMVDxmnwHcHTVUeh8f",
  "key8": "5X1JfXCAfJobTtTQvwAo4nazz6E9dYv4cPZod4TF1MyM1T1uwdqCt2ut4sNJdX5G9YdPpnyFBFEciWD7PGCnq9rb",
  "key9": "4VPbm7iCyh4Kb6KxihTeALxdaiA1pU3KizzbESjcorjMjMnuDa7fPkt5zHvPeLFTAFDueDxbe6DSqMVdKSupa93k",
  "key10": "2wteRJp168mjk4opRpUTfVig7z1zZhvs66srTgRtC9cL2WYwzHkQre3SpD7VXLAGwxpxePdqsiwCxKUN3c69CWRt",
  "key11": "5ABJymaaWwoV45a3YkaQqoaSfZmYGeS96LkpTriWY7humyCL1wQZJKJ6hiYTqNfyueSP6P6FCYbCmAaNjuLkhgxo",
  "key12": "5RxDG5YCSoxfL3PNURoArouvwLNKgZqv5QDdzqJe24WPJSqpvT8he98s8Cevv4PzrvtMLQ8fMGXu43RVUynePXkM",
  "key13": "3ZBXWsi1fmJYkKifSwrfvB2dQamb6xnqunFQ1bQp6XVsrWxsFhkLgwXA7eNqqxim7h4aYbGhpiFPoo2ory5s1Vbx",
  "key14": "3Erv8Ka1yhnz7ugLwgh6rznXN1PzFvDTRYeidAsKnHJ3CmDS889Yor67ZMku2QPHGfreL3to9kpHcazWszZ85hTQ",
  "key15": "5H3Sw6B2i5N85RcTj2QLgibhhWsxmdDemyNk4P9msTE56o3882iSmkgjHD5ANbKyGAWDnfhbAaZUjuVYcPuSqkmh",
  "key16": "3B86xhcPJhpzGPYZ92QxPYdy2iCBq16YCcghApQKBUWFgb3X41Jnj7mCpNz6Ka29mqch4BfzEekhkHbgArVAPG5r",
  "key17": "FKC9hyqsXsk6wWz1G59oXHhEJN1UsbDeap7nZUehZJJX2wCV6M2es1eCrmDhVYJHVFGsLACFNkWxXqm2CYedgsJ",
  "key18": "2GnN3pG8fDM6C31Z8uYJwtPLoDJzAzdnu8BZqbagqLtzbwTT6jmzt5PZPoNhkCYrUEiKz8sLvZFSoXsL1tS7DWKN",
  "key19": "5fqn5N3Mwhkv8ni7Lr7VMn2EUBF35Kor9FwmaQ9xHvDV46xVicvUh6wnExRHRNSDPbMpdByXdyudMM3D8R3fKF14",
  "key20": "5Rowe8hWr3DZGmUyH82dYhan59aESFuKVw5QP8hpxExAWEXz4zvvCDD2zgFdcnSruq39hT9Pm39udmTaHiN6wz6Y",
  "key21": "3N8ULWTNoziePrfbEFH2bPjxLaPANQ5GynxKp1WJSyM6jKWTpKHY9EYKagCZaZ1u6ys5yotmW5wP8HYjb3FQKK6K",
  "key22": "34A3GpB518z19earmzfozLA5dVc1DhHkt64R5AEHscAKuGVmJyqK9Lo9S5vD51W2fm8ikUn1Tuh2rQXSwmmV8oWK",
  "key23": "ZZETAumYAwpBS7eC5SsgwR1kYxUcjgPvTQthQJHxj1UKPi2bwGMp34pEiWKBRe3XEavcFqNp5kiXN3w9M19YGDr",
  "key24": "652SW6aAoEpkfdXT2ZE3m3Zi2K9RpWdguBfDyXtw3gcKaNH5g1rePdQjEWdZEEULvkodMhCBD1zdHfT4TrVEKPWj",
  "key25": "2GccoAG2JqyiFa3w8CDugQegkLF7oiM2enLVd3MjkabBcVxvw6YuYWauYwnwLPRMfn9LFqKAoL2ntxDqxKUELDUu",
  "key26": "26McbZL56KNoAkjse6n1CAbNwGizWJmsm7ThhAyCw6zdJfFgmG5h33YnaYqx31EVFvuexUFE3Hzbp3WoUBhaFqoc",
  "key27": "Hn4TEwYoseenweVMfxRDYP5ksw2bKeu6NyAzEZNSY2DDrcyRDr8mE1HJ3NwzjJHMA8exq4UM9DGidm3mhQa5cbt"
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
