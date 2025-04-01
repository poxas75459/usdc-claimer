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
    "5kvmbruKTwx9FVeXAT7yjcpMnMZufgqDKtFyfxb6p85fBFAyVt4odQSxTt72bqJioKVs6AtrWijv8T3R7BzJRUhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SLZbgYmKk1A7Y73o1e8vASKDiD8TFvNttznZDSUfrkwZb5ai1C7iPhbDZkN7kdPfkTKNy1arahQgXBu1NxkfsAv",
  "key1": "2LJjFRn7Lci4Cs17G9rytCxieSe2MrMyTjXWqRiyeKSVDR6eqzMzJZ8YZdCGTUGgMCawZChgrHwgPBaydzfHGHbv",
  "key2": "LQ8i5jC4iwG6rK4r3X7pSDUDFKAJPrC3TFGoEAx5opUV4LNf4LJMiwHsrMK2huqXQXFs2cTzcJpSNPiP1zswLbV",
  "key3": "3mbcGtmPFVwRLtifQjCPMsjVM9JXtKGxGwsH9vU67vLyNeQz3UoLKyHYGffrSDdkLxAD8udBgzEGJPqsmjJFSXxw",
  "key4": "4bNPodP34GGHAoB3k99kEDxkDbhyyjLtNhDBHeXHBM16YfVk5wZbkuqvadbGWEso9fm6xFRgYxCTQrNeUdbPGyJn",
  "key5": "27BttoCxvXLVRf4niJQ1BoJgJ7kycpMqukkC2c49LUcPtS9YoSLjxKu32RvS6pqdoC3RcBHVHqhJbRomPAZXr4mY",
  "key6": "48bpH96EWyy6pcJb4JgmwsqrzDt9VNyLjvjERbrBLecrK9q2BZuRvTbk2k6gsihNPsn5E7WAJwF6NxArsy7BdGBJ",
  "key7": "5faNm7zzFfPjKLF3Y63GwwJYnqUqEyHMjYFb1zmktQ7MtDn2p5mfvsVxWXCQf7Qg1TWYVFXsPWoqiBd6xNEDG4hq",
  "key8": "4tNtrDPJLVD16idtXWd5AC3vgstWmGZRmbmrbCdAoWUJca7gbxicrWKYFqR8L6G9MpLoMJee1sFG3PHfAzbTficU",
  "key9": "KCJwgB4EVKvi2VTJsSiWEGfkohfhWCxKswAyTTgYMTnWtJx8nMi9yiaqhFvnwExgGphevWM8xXPNrZgazzz7L8Z",
  "key10": "xBeCLCQQgiA6SSJxAdDiE5CvLS36mMWGakbrs5EvDTvfFNJuP8BVfGkwX2XkSYgrmasajVX5JLpHTFvDFtTyniy",
  "key11": "EhyPN14bLykdUG9w2UwxSTFDZfcULUUfxaKAskAUvXrHVeVi6hk4pA1HqxRQEfkEo1VLWCc77irXd7ZSqDSnkJV",
  "key12": "4SWL32eRayjAHCEvmvSm2LSEuzxeuxjNDsDvr1NPsJRFe6GpxYA3KsjGuCL7edRrmuGSotHdUGwPgD95hyrF8hKT",
  "key13": "4r7YDvrscwPXztp8CAcPBVek23mQs5iz4PaiQSoQgp79ojH5W9UJdUGfakJUMp4xst7m4Cbk3qj538e48eUgA1ac",
  "key14": "5G6JbrFjm76uZPFB2p1g4A6BxyYupz54CqwWZ1sMyvHGFugQW11VRbAF8hhqzqDFpBYSb1PrAopcaCZEMvPBMbXk",
  "key15": "5md3AqYc2ZHcrznzLYPkXAtWB1HzC7fuicSNp5ymq5Cjn4jSk7LUGMLsQ4iN1n6jfkTkAsbjQ3cZ9fSh57mDPt49",
  "key16": "3nQ7M6dytiV2oU9i6jtYKMTFe1aKVcqdqs5KnU5d5ECmmAkfhN3Nqvd12PVjiWQqZAnaNFaF6e2vHSSSaHpCi9qe",
  "key17": "2QsDyBJzvR4NioBx2EV2cjruR7dZh5gDneJHxxsfWTA1Gm2mDStmUBmsNjcZa4ynGnushW2A6n2yrAVyLfn9RMbE",
  "key18": "29g91m1kChcQrZtj5tJUzJXF2C3N15oJY4XWx9Hkc2ff5BGSvu1ZSPxG3iD51iweCZ3Y6k1iHYjaB26KkRjJkxQA",
  "key19": "2XYsTarC3SktZAMSAumLarZQ4xZB7F18dWXdBxMCxvPNL8tzDM9K8CCvF7NKCoYeE66YfuPkqk1ZMaeefAbc7SS5",
  "key20": "5AiW4fsSSGV9SLQ7UVa1waLB8RQDZQTLMFxKYwj3cvF2k22YtWdJCMtzVXedSFuzuhgsaSEqoLx2XbjpeHfYsVq5",
  "key21": "5SFguFi5qCY2qN1SH8BU7Q1HynyWpnzZQ4YSbfQb24GftRwtvKT3AmkZ6QiPTdNzNhz2oM6BSBk3PiuKSjvorxAF",
  "key22": "41LSxKfNk8hMnrxLuzFvwHknAU6G7Uw4JWmgGipqyamQZFcrXUAj3usEte5KFh7PDh49jyoP18vtd7sNqYrubZEm",
  "key23": "3XLYfGXdJ5gJGBWHhiZTTosppLTK82t6x2BhwiS2JmPWXZqBw8b4GCRzbwAXxsMAsi5JD6tKAsCak9TwDoLdrsLC",
  "key24": "4vR2butEDcZ2WnnMzTZBD5fh18DGAdSic1bv8Y1uxAdjbH6YUitLhhCxE4WwQNykNmn6Vt2vrKwWrmc62TzQAR3z",
  "key25": "pfAviZwbN6c9h6PfMLWuXZ3apeCgYY74PFfepsBN7gquBGE18N7uKC75VhN7Lm1w5TwE3D5TNyPUe24QqziPiGe",
  "key26": "4Va7SkcMkuo9NmaKDwqktfbE8feCZfJjcbKoKeuDtzesMJ3iQEmdKqj6cWziS6zaQ2vRrpfWL7Ktod5aNpQPHRpc",
  "key27": "37fsLycPepJJbyR5q6Qw4mNj6JY2XkRfiJ8MMZhdNXFXwkxfqXTmmEuF4SgTBexPZ2wvwWGaxfyrN8LpZngdeivU"
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
