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
    "4QPimhHeq2Xs1YoD7zmiQV9BqKNpe1uLT7TdVQPZYSN1XEtwDahvwDfqEUpSj3nJExoZwTGvRfVquuQwRx4ccpNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yA1cRThdXcrMaTVeJFuf7XJmrgPqwHBZfQJkhZCdMRLMN1HdLJQcH6v1Q2FyXnr5SeQqA3vVWG5SrrYurxU86ri",
  "key1": "5y5YNyb5uPUEyESBYwmUmFpGykaXjhEgggYLrC9U69sS3k76zGTL17gbJKpJo7b4jnKtonfg4mJZbhpQWtDdR91Z",
  "key2": "2LCikgZwd3gHRzdmEpRzcLMC31uVZUevqnZvtSCzfvZTt3hbDynKvZS7SjTpaqBakwmQCk6FSHWhZoMYosqNAoJ1",
  "key3": "2nywGkBvsvVFwkS2Yy7mTK9fRJwuXYeiSNszA9HB4LxZEUvFGwzsfDN3BTa9psutvKptsNDUC9KL9LsZbxsxYxYP",
  "key4": "5LiqkP1a2wkVjfQ385VyEDrZbyKFM8w2zKGc1HtcAY9xSQZb3koApv4kAMgfU6x1G13HTNthFzwqPEPRVuc9xXVC",
  "key5": "xhacCYHXEdqPzd5qAHJXrS5P1QxyBvFkhU4wRS1U1h2LD4N5JiDVBdV8rH4CUgDPC7TSBhnPkzRQUfaeLWFGeEB",
  "key6": "2UDnwAg25dq2coxJnezXHAbD4itaw4q8HskLXQgVuL36ZcDNe7G84WMmZSpKkHG2WFHFRnfnydM4iP7ewbm8MUB6",
  "key7": "4K7qdvrwQBjHNwNSddWoz3bnWoxz6r44myAfyVTsidjn1AVaupG3oGKT9146kE4rRjRicH2N2QdMAKscfgQGkHW2",
  "key8": "4CqoJc6B851o7Ssfz86c9jtrebrWmSvPNEFkCa1jjKEEgXCVmUCmw3ZxvWKT9U43vaMBxyr9RhDJEtjLmTGqnrgs",
  "key9": "4nxJJWcXKPu2P93BwFg9LfXYtxCq5GL9cmh7SCoxeZ1MdSr1QPcs4PQ5VAQi3HmVqqaYBSE7XsLwyYRGkB17e3m9",
  "key10": "3nVRDdnVcpRKNYAnmCeG4nsut26RvQTXPH4o7vn9HEa5wHVn8Z9tnfshMyQW1Cku2ynGmXpdMYEEyFhA5cdhCGar",
  "key11": "ijXvUBFYxgWrZhKtEUmo2SZkxJN5DJFoqwLSWwhRH7xVUbk6sMLSGRpwPtLmrGR2ty4Dto82kHkVVPFdk7s2579",
  "key12": "5BDGP6nqrpLepJ6UmnQ6ZMAkRudkD1cRzXZHX2kpF9obZW3mc6EZnJ4Em51yds2SXfRwfdbb2RfDJQRe8SWs82cy",
  "key13": "3SUTsNYZeNSgMgSq7o5SQsieQwF6CFkW5xRJ498djAR5XcBdUUxRTWY3JS2STvKELzy3R8L1TSqqueg2J3n6iTpk",
  "key14": "Kd6Y578EFyuJeoiRgDEreVGEutaSQhhCkkHNM4MeUX3xuvacUEUoqp5y8RLEoEmtgQj7NGwL4st4NnciSrEWgz9",
  "key15": "P1vNoopn6Fd1iCUiHbrkReB6u6spqtYFhuQScEJYTQxXpxsBfHvthdCXU8HfnSps1G1Yg35nftst5E4UCF12SW1",
  "key16": "4sWff9NhH6WEMDevNUCmxHbPcteDYGdWN95LriNWkCk9kJi3DYGqxu35A9jkQ4xSLtLzT3ZcYWjQwsCnL2dTzn9w",
  "key17": "2ANXHrEaexW8Bu9vDy96DxQ6WBtXkP957exaSDqxUgsGPav9SH5hzQ8szdSXK39g1foUHgHvDaMs4XT7VfxuhbL1",
  "key18": "3Nyh5CoHe32rPrsE1VgBVN1SwfkZWskq5SiFvuTdMR9h8FLKTN2Cu9oxJFYzULs3YUb6uW2WQCjgzRetAAzMSxZT",
  "key19": "65c2P8yvJhMCjrxSry8RqWMKXT8SkoGirwyY3ayjkNVHkTNasg9aZxsdNBPAoHbFbkdPobaCC4bJ8csKCJQdEMew",
  "key20": "27DoLVeKAG9dNEXEoYt8otuN8rxggvxKHphfjDJbhDzjyAwQsrBRNFJLyhdgZXgX7SDaDzW7AFsyuUKUMeddTDUv",
  "key21": "4faQiLsuy5Vq7WXVBhBu456UN9UXoij5QiV8Zfe7BhGVpEpvYA7fhaikqprixdAdE6Mryn3GaZUkXd9dpFR3wipF",
  "key22": "4NWUshKutr9Da1RQfwzwukoLsPstab8S1DLzsBMWgBtfn5KZL4exDfZcmhEm4VyRej9wQfAx64b6ntZyaN8yqnnx",
  "key23": "25eN8UTP2DPVXM4NK5CNeZfxjdZFxN5UDJE148hCEe5NekHapncbfNeDeV4siLRqyxa3pYgPTyCwwW2QuPtkM5TZ",
  "key24": "5u4PXFCW4dPPBpnHHBaX2bSqApNoHiUTGfdUNVczYzvixEAyPevcLEKn7rH1doYNXvbCdGEd3aXEm634yQWfWMfC",
  "key25": "AadEffajUGW8vCHeFwjeDLqrYzfS8c3Sm4TQDxCgJd9JaGsRus5jVkwPpjhq25jJ6XR8FK8rWpi878kSPBxWfXP",
  "key26": "4m1v6XAu8Nx1mMfzd2RBNzr6GKz7qXnoQyHFfYahGiEn2vPqcTS1ivB2yxLfHa4DVdmStU36ZtNagXUsLLznsWfE",
  "key27": "4WfqCmjEZueYNxHhoU8zFFsYsVEuGL3pFQJx3bxvg5PQe3Ej9F6AcjLVHDi2kSMtr7WC46QE9dG137n6kdQjMrn2",
  "key28": "61NUGGP6zJv8WbkQA4EGtTeoXgjLBW6LP6nMRecRpd6SLtqZgasuo8f7bvchuivyL1UazG5UNh8Tag3moM3oSQQP",
  "key29": "4Eb1oADed5ZwHEUDtgcx5D1uDSTynY4S4fkrDACmmGLFARdsqL41jihGv6daACGt93pVtVDpVbkhZGbwSwgMwzWF",
  "key30": "3Mr7mp7rX4eMLKcmcPad6Jutn3QnFo3XaEpnsGkcVUto3fE6vdxyivQDiNfc9asYStymMxGb6h4JfuGUsB6477NK",
  "key31": "2XsKtK1CKiDTmx2BALD4u78RK8wGfxASJPEbM6UfAU8gDbAMgjvVwfXL8WSwuj2j22fYoDYZP4xnZQjEmmkSsEAZ",
  "key32": "65LjuD6ZhyZ1F9X7rDJQUAPy6pqH6abYSijUJmdz6hsEkhpu5n1vgZvCX6zmFLcTKnwR1enXYTpb9CbVavSWMsyb",
  "key33": "5nrrr26PdQ98p6YENgGtvtFaa37q3XkHyKb23xU3efK62naw1D7FJcP8R3QszBjWMts5vwdoeB7DT1YxfRWng8WE",
  "key34": "LXfChC6izCVfsP4Q3KpFPaaw5bbHufiUVT6j3NNuFhBeNc3XHwT7BuBCTthZpWFtNrfhr2hhAB5Rm7V992sXMsG",
  "key35": "5Am2UvewAwfyD4PHLHHQ5XFmEiip84JneLYHjf1deARY7DcUnx4YaprgyQEmXfsrbhEJMzHRQBLLEhgFUZR7XUyo",
  "key36": "4XDsyVWj939zmJ51m2fnTtyu3yMctPWEcoa24AWqnuNaGVo4wjcBdVUAizHCPuRWdas3MrqnV34wFtFmniqnmwRV",
  "key37": "659mEzzYbzFupCZLpTNqnSvjpH4Xffy8QfGhPRULBFa62wfvDWAkYidQQRHX1ZWHGHyrH5H2yfmGsPULKvFn1Em9"
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
