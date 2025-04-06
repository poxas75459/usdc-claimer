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
    "5GuVFbeZSZW44nbEq3yvVkrQujYvRvgWiPE8NH2KeP6yGYnZXV6srfdGKyuv1jV1Bso9neCp1yv7iGVVMbt2Noiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QhSNAGMTCETrvd66L7Ff34dbgXQG5ZSApduK153Yrt4jpT2HQUDP2bpM8uGsTka96BvhEZvjmPu6Gv2YbhN1uSZ",
  "key1": "2o7ztsRLNRYatkA4kGDME4NZRom3ZTeULGAcNwpvArVtM8zyBhQxxoQ9vaUzzKPTbtuEomzmRDG84mz5vdwBBmKL",
  "key2": "2grzxJgfhVQpkLMYy5e2Gqr6bUzwGM6x13jjD8dBDst8NDya7fgbuxqxpSYm89Yq6uFAuWjky69CB1Fj4571NgQE",
  "key3": "5PYvvn2HStfAfDHwHFW4RshSArt73xqC2DL5ViPMkV34ARqpbe2MDBQLhdLfGyG2yypfiGeKmdLmuNgQiK1xWXnC",
  "key4": "3YUZHBgcPPQg7yWmnTTzGDFGHC1ttJsKwPzqp1R3PxeJsyJERwrr2ckSrmYisVvzStVccYM66HQd5HZbNVethLSM",
  "key5": "4y8N73eV9BBmM4Q41T77HqcRdZdCnQxxQgeEHA9m6tBMa5qvNfBstomhDeUWvbtBwhzNEj7Z2ALEZyqcAhKYSAfG",
  "key6": "4JAYygVCrjtCggaVMLTTdM7HcGBteYnwKE6WgCeHbofQAqWm6fmkrx3PBViSAiac7qNG7btmPanpqqBwxrXKQw4z",
  "key7": "46YTejfZbtyPKAyftLaYyC7yJTm9cWCr82nUvLcDFMe8gWydPktxQneLQ5sdDkyhnN5m7yJEoNbi6ny9WAzvHACq",
  "key8": "aGCEHKaX8D8Jf7sRb72ApWa1rGoFtnm8B9KjABvK5q5f3F6AWwmxj4b86MJKmgo42AxFHS3oaftTtVmpVhDr5uE",
  "key9": "2wF4FejmXEACijNRWoTDKKq91wNJFjnYDnf9JWhhFymEukkMcFFQqQHvku53WfKwDDrEdC9XLYkNGqSJAanNn6PA",
  "key10": "jgF4fKffHjgpPsQAfhbpCgNXuwoLRPHQSjkzPDFWnL8QCeKsxyQFK1FECAgPWvgRfFyaj2FxMYUf71TnEqPTcdp",
  "key11": "5zQK1vvDRNeh1mPUeSAfF8K8vmyQRE2zZzdbPQAMpBFGCp2yfkeWvgCr5BzmLmMb5o3tQxxm6zHvMEevqwwwByvK",
  "key12": "uamCuuKfP2yUgBov2KCFzGNj7BwxauQqHE2pma6J8CxLS6qKFxp1nDqEuFSbuckpKffiCGEkoZqgiShN5R8cS73",
  "key13": "ZR9vakqCACTzKyMgvnj6Zg24mwYhcWTJcqJUL1vffkVQxywfw2B8ZdiX2UWcRLSLZegSuVsK2rCxnB9yqWtdKb8",
  "key14": "3rXNvC4fiH9WkphyQa6QxNFwxvrFURKbievyM6QNkXnARMTC96pwbdSYWeyjNyhNrX6QuNRGLDGMUGZR9yvLqEzd",
  "key15": "2sjwNhuUKb63XiQWRXgA2vuHfRBWenkBav5SwmsPFEKcFdCXg5K5HiCQnsfaWzUfv27K7muWFc1HLSHY4sxMpe8M",
  "key16": "2EsW769BbBu1i9CH8SkgYHoE5n9XWd59ywvSJaDNNfLGmGKMKoqyEMun1zA97VzuDvSTBvJLRBHhJqY32z1p3CzE",
  "key17": "VnPnhCwuzosnwZD5ZkK3Wc5EhB3Q8KpBw4kPMSUR7rdRcCsvE3qQ82S15Ra3LbVhmvdWbYz7t4cezZyabX6e4Vq",
  "key18": "J9DSAZ5M3pPUeWn95wdUt2V3pHm8EbMRygZU83ieoDiugucGZcPS1mmmGboog6ke2EFNwtvRfqNCZX9omS4SdUx",
  "key19": "YdhLd6bEaY3KmULArwuKsiimqcjyRGW6Wdn4R28MvWz3HyhoB5EAYemFPVP6V7YHr5brrMphJiY7ZbMB73h7rGx",
  "key20": "wynUKrjena5Hxtwn4ReER7VQbqUM88aDTCuBiiGwcJuAERkkyFXBm44FC2ZvBmNTdBVJ9HSMo7vFu8U5hf5ptN6",
  "key21": "3PiJr37sfZ4kFffV6Dz8WQFpuC6d1GiZYTiAfHqgBV6FhmmdeTPPFPjQzc1pFP2Fjb9xqnktwqbUm28VzNuVS5yU",
  "key22": "vzcCA7tdbGd1pWCZiREYupHfvf6pJXrYod5ye6RkPQkj6q2Ry4LbSf4JjiTXU4WXsCByhMgytC7U99x9B2SXXXw",
  "key23": "67CgptmeZn8xmsBsxMVJ5wYxgbzxt7G4WnGb885Y4GDkpQCwkPsqvpWm3Da536ALrhSLh9kLTiuig4v2mXyr7mgD",
  "key24": "65164rQ7qzVRGez9oq4uAtcLASSfWEqK4hPzpJH3LZ3MwS8fFf1otTSCPBHu7yK95NVfBFoSXYL8grwbAiEvPcN1",
  "key25": "64ggNvVgLU4xddBAbgzwAsW3vSY5nVYjr52Zmh8JhyMH7bX6HgSWwz2CEJKNgf5oeYhk7NXAPjLmY9SBWY8V7UFk",
  "key26": "46GF5mTD4do51aR7A1rJ4DZrywtNVBQebnZM5EhJNKHgT5t2nC2jnD55EdErh5wduiCP2PsU2nWYJCSGQjAgXV2M"
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
