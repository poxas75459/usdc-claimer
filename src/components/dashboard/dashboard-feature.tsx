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
    "tJMVwRZjb1jJcYNTLBQboA8T6oZpJ2JoRUBiUHioTF3pASMTJyTM4yrSj1CtnZs7NEZzyQpsFfHcQ3yvZ337sFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZxC2ByGK8ERRxfBCh8qM76Qvc4JRGJsJEWGhupACiTKtgvy4eus68w2QThGbCGLMTxSCYG9cEff8s6ZPhnEN7UW",
  "key1": "2f6CnFaTgsmtSZWK24CkPDNA5Qh5YDxzrbm8bshdm3dQG3AjiHx5s1gQKMLQN6mXYdsy43x3KwHsCE68q4EpsfgM",
  "key2": "4twdNJWEfhHYCfc188kBagUE9hvZtN1cxp3Mhjx53UHfEJqLmcxLam2jSxmfRHeoiFPZG8ccAJqF2549U6y6eTA1",
  "key3": "Sy7b4MvWb5p277vDD6igD27mKxasKgh9pp9FT9q8RS6yCYeyS1yhkmVvCyHkCtio4upqnDe33imgnYcQaH79W4V",
  "key4": "FnffqvaYa4CW3q1WW8KkeaZ5kRnean68zEgPUD8FfLV7YsQNjTo6tik2FToDNYBmL5NheTcSpUBn1hAYPHVsXUJ",
  "key5": "dqdvbtKUa3bSQfFSTHfmMeyd52j3pnboxoftnnzDyogBDv25ueUtnZsabU7Vv2kc3vkMaL77KD4Ae9mumypCh91",
  "key6": "59ZaFMp468oKJBgZMUnQVaLNmYUmN9jpjX6pngTXhu9awgwVm3fWZa8Ggayuc5wo3ZAxfEEo5hHwH5LrEScWFL87",
  "key7": "6YgR1fkPXzTDcY4CdmML8zE9u1hJcRfEKQwkeY45nNseHaQ25K3GxSm9qFCBfMywsmjkGggqWKUsdiQZuquwLmB",
  "key8": "25bSC4fvfXk8kwaDffnKygxU9zGtqUN86RaHuT2s1LfyHmuxcnPgmo3vKX2L36FdwEJM2zmHVsKZpzhTErs9ptYV",
  "key9": "42x2AAf6UJobMGD45v11kAEPsKDhCFXNfywPG4ARgVWhSPFMso8eakFfwQVSemnGUwC6xcV8gULoa8QSvNnoPdoh",
  "key10": "5r1MfQoUfn5ri9WYwaWuFcEh66cytqsVfoYbaFkFbawLqEWL94E4fcuYW2tVGpFbVmM4c6RNCmdZ53LWqZvmJhzN",
  "key11": "5R1536syasxmxkSvf2oEfHk7zXbnGLsfMuSJsWo3XdP3XPVR4nwU61RDmVnitrXGcKLA1hvmzs9efWKqSwzriyYj",
  "key12": "2wkUCsk6abpCSzyxpYNhHcfU8Tq2sGTLWTWJ1bGSmiuFQQiuw3QveEm5SrK2UUD9ooTzaFVbx6sAMyn9VZWhwszi",
  "key13": "37vJxvLwdkDdoL4wEtWStB51wYQaYk57YgSi3eWMFAZZ1mJZJdfYkXM2PMUuSGNoyxRcvwaNUqQVfbFVvU2U4kbf",
  "key14": "kqDr1nQzSK5PGQgnpbCxYDt8SExzrpF8H8s4vN5B9BDL1e1pde1CNgm7huK57zpDaPBFbXMNdz5R37eruqcoMC2",
  "key15": "4B6LHQUU5LmT3zs5k7ED1rgJw4snJn7q7w36i9grZnTGwe2h6ttYnUbPDcgroppysj57C5hYp2RbdWcGBSyT7hte",
  "key16": "3D3ajsdefN1mV9fDq6rANijrknY3qWYMJ7N2bPR3F3i5QxLb31jyin5vD47PRKY3kuVjyvKGBEkmm7wjJ1bQuf8Q",
  "key17": "3DLyqtUk63bYrLkJWcJLS6wnBfRDHEuQ36Myi8w1boBibUivEgX8BwD8SWwwfY4zC5RHcFBYfpXhG4tpZ1Umia9S",
  "key18": "mFBHfQsLNvW2ek1nrDvoyCD3SdNh3FxpKJGUNhDxHDoFDpaKoKGBbcbYWJKP9irMXYnyqVo39AtVn2YioW1EHSJ",
  "key19": "jjkk29gScEcC36vMd773SqfyEWUiEPee8byJ6GBoZatMAQN8QMQSU5kmYkWCjDe6QmkN64AVLwib47fHAdVouoF",
  "key20": "35ugTKgMSuiBM8gmuepXT5G5Q6QpXkSgUMQZz6un7kqk4mKENsi6Yd1b4XumbZzLwQcD1PXzz2VhQAvrjJYSaFia",
  "key21": "5hBvStEws8oNJGGYiexATeByagprDojpdLvoCSfRR2YsN4PKX46Qah4ThecyNm6dEbMh5SBrFuwuaNE4PT3xqwjz",
  "key22": "5PvPXxX2gXuVZMhR1MyApR8tmY3zphq1fNrZAtPPLMF6eAQzqYuPJfvQhvN1JLpdFGG2bWkhrXZZR6Mz8fhrvwea",
  "key23": "5MjsA9TqGiiPGMQ8w2iqdLu8yqdSmRC9AeDBnte3ENZpshfCwScWhoSx13CjfvbW9HTvoC4vgcQN8HHgMWZWMSn1",
  "key24": "2s8TVFdWom2HQSBWAqWZKfPC3ZVjXqcvDpmBLbwCedAbx7U78iFxdJpTtRxduYRjVS2czTd9k9PKkpGPGBZ1Fn2W",
  "key25": "39jv3M1gsiMUn6P3N6xzXAvgdFHaEiQyGFDuKqfsm7E9VxvHHvrpc8wSkLmhXNxc9NSRQ6CB2hYzEdEfrgrcn932",
  "key26": "5WkrZ2P5YDyQtapPkEyrbDQ5GEbn2gwMZidGpksyErZUSQNYumkKajZ1uMBJcazG66ePbGEdkf9RvUrF8AoEdo6y",
  "key27": "275bbaffgxsmF7iYtoYjHGhvPzhK3bh9eShCCPtr46Y3QLApc4nsQbE6urfaU8yRDLDqEjcPXxwQBFHs7Q6oRbeS",
  "key28": "2HxqgfTCDp1cYx73P9GXmCbwFKeviDuKQNQm2pzkDpjwHyknK3VCjrY5aPjZ8FUeuneLPsNWPZtzP5bw5z49bbGx",
  "key29": "sypBAsryjkFvJySpn5Aa4rpHL93f2aWejh8Qnvrmwvnv62VPYKsbqhJjVwSBuvLfvswg7mWCdmPq5cKWQS2watF"
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
