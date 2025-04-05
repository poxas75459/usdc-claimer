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
    "56X4qt1GrhMg7yTCyBojoPPmjKTQ5BQUkA7v2EqRTuosK5AG7GSDV4wKhiX5fqEVRyMXxxx7ue53oVi14UYkqtA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JD2YZwYpdQdL9tcvK6u1KtF6KDuePNTdD3aHkyKMHcjTJ8zEFbMcai7sJ7xhfLMbVGfgPwx1LKjWFQGrE9iDQAA",
  "key1": "2sWwiHJEzVpDpvP6JB86Yybp7689QGWJwdhfuq9XfBNbUzLSPLmrS9HnfkwG94a3b6pJF5K67Yb2wFxY4T52eJTg",
  "key2": "2Q6Bye1kAvF8vSrh3d3rG2K3x7Xwpr23WR1yJHbkVpHpC6F2Xr96EUSv7555WS32sNzc3QagNR8s6VvAvjtb9cZZ",
  "key3": "4nt58cv9YmQccQ4Qmc36vPxUESPfCKbc58rzsCPc2Z3BeP1ZNdDXNDRdJvURo23DwnZCb1HfJzcbva5TJFcHBB69",
  "key4": "52CWofMovDWj6Jq8ugD8FcmAiYktvMNCbKZn5UhmNwQYRDxRBYUVS62JD9eoSeDAcYEjA4DkuUExzVkR6UoEe21u",
  "key5": "4thg16LKhkXdeyCGYghUFuNzEAX9SReuYrfyiX4Jf8L7dX5oTna8VpxQfcy5Gn2pUfjAK6cyPuycgFGrcEz17F5b",
  "key6": "5pvWHLLSKRoRFXK8bhrV9k24wXH1BYAZHkwUXdnvHaxRVLoGEKvr9w3CysVwhXsYSBxzAfrfEGti6qB2pgPQve6X",
  "key7": "nePsHtNgpCs8RyQdKdVJfYmi3PEiM27g4LSAfxAdExKoxoVcXQVCbwWEeRyLfJA9wNrtKk71b4dM2BEohyvDLRY",
  "key8": "3ihDdfDSRL6jSvUEJiHYQ5SPvNtCHGXFKfcvLACcFp1w1Yh7trvGDsgUcGDyTX3UFyyTk1CBrQvqN3o8NhxJ4C8f",
  "key9": "4B6MtZePZ1MLPnQheHoPjgsPERrm8EtzNV5QEwJjSjwiiTZ3VfoTBs1ZJK7hHaw8RXwHYcMKV3HaMuEfaTGUTh3i",
  "key10": "4ojnhqstFSJVRMMXBXrUY9SwiDJEUhJxLsTLsefgj2YoqQT886WK5DPffGQ9mQvp4KWtRYwvYS3VNpNk3adWJkHL",
  "key11": "38cddsHnqsFFxwxXzCangTaTfFaP212xuntBsQAzzpNEB4TpbV2XdkMRPkNFjRuU4C9waxbm531xrZCGeusxdLY9",
  "key12": "2tjQqH7UbZkNNA6UCYxnog2nAxQ5Wsuow7NTGELviDLzBkT9gyo3QWiTKjMiPePGMiVfnKi3EAzb6SuddFvpGiLZ",
  "key13": "2TckTq5UsuVzyxcPtE2jMyxWn3rp8TsTu9MoLQAFB7SXk6XKPMjbdKccnuUwRaiEs72MK4Uk2EQCcYeic4zAZznL",
  "key14": "3U7n1xirh6wdtQD6npMRWTQknB2LaksADpocRuie5sKK1mWBH6sYtPAcC9brvkrnuYstRPPiRCpBt2Vb9fG2dFFx",
  "key15": "5MjKuu4HQgDV8Z6CXm29VPQB6oUuCLYJPzFjTU1VQ1ZBE2JzEb3w3GYZTJbPMFUeDL9SnbVeWUDzNc1E3xioVJLD",
  "key16": "62A9akc5DAsKWLuEc7dStWiEgkp7PFEwMaBo1hbwsgCmfGAhui4QkTEqgsqEj24tBpcc2abGxeXdkmiKVzKQVRpN",
  "key17": "5PysuHTzFdCZusEAN727ea7nFRcoPFQTq9Fb9wCsdge4YCc5bnL99ZKcuwVS32UbNR7JSzjWpXpgwQkWEFF2WoKe",
  "key18": "3bJKwAyYPeMBsxpBTyB1sQppKK3tvHD2U2kP2YsdPWLTAsvVZ12E5DP8fT5S5nLBpCGgb1dZvLTTAUQmeJJpeqYU",
  "key19": "29ae4WdPv4ufi5WmQQDY9PqXweqY7aHicGnWmvCFZNVjUrYWNV9shtYhmg3vymioXPdkmodxVQXxz7scM26CvqAM",
  "key20": "5DMbTg3WKdaTsioaoCjQi5KNzjjMDEdDwi1rcGVUSZM18zGgkbMJigQFHGARxGi9wBtjboVu5Y5hGdi1rGgD8Fk3",
  "key21": "2wnSEAqRStaAEexkVrhncUKJpNGtmKCgjZ79QhThtPjnYEAbkhxT4UHMV1hUfe5wHEEy1Ynk36zFsp3GYFTJ9xA3",
  "key22": "34v4DTTLcuzso4SuXugWVajL5BUgFvcx3xQURaAfMGKvwMFXBui51FNSzyvxS19aVCHBXLEe7M6fkns6EJifEnAf",
  "key23": "4LuvycafS2GxxWCd4fo7w8nfLPemEmC3asmNmPkxFu7kAHozonmwqQ7hCMUTkeXdXSKBMCPzM9R85aMt8TbHkpRW",
  "key24": "2TpxGpo37EpLqUYbSfb2bQskEfYzDQ4MSYHbHNBaGyK9HdjVVMv1Z2tQABF2Q3Ck1eYfLtJwmL6nYtQ8627rFaKS",
  "key25": "FCfndJzAJPkouMK8LcrMgrhZfHq5PqgJLoWTUaSDnAvxL4uVBvYPm7EXMYNjtW82sbgQdmTg31Pi8Dm2cuJerSF",
  "key26": "5Konct3EWJ4exEzapVDRDrhQcRHXXsnoxG3qmvHh1ywaev9rBhNoJQFoctC2fcErNpYaWc7upo45ZfKAjZPmVbwh",
  "key27": "2cG7wjhdvzwcXf4Vgqx5a8BVGAmtvKDDnwq3qjHidKzfC8AY7E5xNk3xnD8ey2GhYMk2AaWf141nJtTBYST9zJXt",
  "key28": "4pWcSKms7Ruw2aybxzFbRDoM4P1KxpQnjAzhNeFUPbTKfuz7naSNPdpehbWwKjgjfAWXjzTxk3ph5zYwyJg8t7Zg",
  "key29": "66S7krTNxFBLMKwMpArnrDwy87c3GkQvyUa4LqcPRuGumXkds6PQ5ciJhndz1LRdJiT5aaLQED12msizwyWuQamy",
  "key30": "reoHetjhUUWwFrsAKwE7SLfE7JkDXDGCKEVhmdeqkV22pDMXdUuJtK2DEo3T7pJPb7jsEhw2Eb5udGXFRBpGPTh",
  "key31": "4Ay1cSXi8qEjogNiaEu6amAJPXKdrsT7V43pgZUs7WP4BqyQeApJGm9mCqMhH8QqiaHbC1oq98FqVM6ieARFvxPS",
  "key32": "3sKiA6cE3YgguX14iBoyZkgNjLfXcjrcKvbDNYww8jRBPXk8o1Riw6LoqgKtKjyD4kBmLMf2vtuPEphu3dGeR96C",
  "key33": "31t54hrpBQSpTEzo3MgyF9eusvbMw162gSsNQBvDUaS5uqWhL43Cqcymf9HWMWcyLXM1ANM81FAyQhaQW2WMMUS8",
  "key34": "xbEai7XqcTn9TsuLPi6r2SnosiZ2xwh7QskXofaZayM78AVgtdJLm9GjD5ZJN8ko8tJxbsVbuzBWZadCUwHbRsX",
  "key35": "2SdZvsad55eLvH7Xi8HWh6TzXm6FzbU1prVygnyceNVYnigbkHr8FiJS3EE2SMK9E93pniM1iWogPP4RXkoGzKZ7",
  "key36": "55W2L5mTsBUiK2BUjJ51Ffk5wDStS3Xac5Kig4AsvhYwrrsAXQZzq3Qbf3ducPpgDxhr7WzNDxUFbBP6Nfh4HRe2",
  "key37": "SSPnxYDh7fwg6dWXemDXmdWQps5sXwTqtY7GfrEuWQTZU5S88SFBJRbkRnHbNVmP74TK6EmAEcpUzjfngfjhzEg",
  "key38": "5dKtMJEs7A7Lk3bf5t7wBD9niq2i3Qw4XDH32wvzg7aQEaHC6sFyRryiUpAQiv6PjAakqjej9rgBnYCycJJQQfqT",
  "key39": "5UJQuFnDhoMiByornQ3AzFEeYVSAyUtL9gwSvgzkm5eMYKG3Zsc6f9bqAqr2boxz7T2foer7xZeY4d1wR7azw8xo",
  "key40": "s77HcunsgFFMs9xwr3x8yS6usKWqsjypaEa56dQpR7W8yyWe7bXh3HeP4vTxExQtavXG7MonwcLfxAYGVkgeZGF",
  "key41": "291gn8j16vYsMFjMwTNCUQYZdyYy1W6nQhmHktaN18Mzjr7DYk7F464VLeJXcQr6SqQ9yMezvkZoTh598RTn4JXh",
  "key42": "5z3G2fKr5WTLU86KpdwJUDWnQdZRNQk2LH3Kbca2SUU6HyD8tTq8jTN6DtRj8hSkyYUrZkeA5NXm1bCmSLR76yVd",
  "key43": "4dbqV6Pam6pEnfJppFdC6z2s4eT7Mk7tVSydt5MyvUjL4qtjW59PSuRxZGAHHDZQrfrSDuWCdTX3FUBwLL286Ysn",
  "key44": "5FpK9tk1pRrXfkPw3CHiGM8xyjEJ3xB6tAFS1hVnQUtYD5Mwmu75kVwULwhd6bPH1CYvhGFjFBrGVgq9ymEDD6vw",
  "key45": "jXyqxynFir5XhEpqGkur1t4QkXD9NBHkdeDmnFhkazS6WVoqLLedqpjUR2aB62Dqg7adJ7rzQrf5ent5kNjGwnY",
  "key46": "2GFweaRgBDMQG1baJ8J2CeHrYMcdgQXg6oNTL4tcDg16b9f12zwfwFUbJ59iHe6M3xsiREq1n3mo95JSuYPHnNXC"
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
