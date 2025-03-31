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
    "KeRD8TiNuLkSZEjBocYF8f1yPjQWYU5qcz6oT1xPeUpjt74jRnH8CoUFXNi2QxzcW8MNWBxaYbk8GfaHhbJ53Mw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jvcfp3LnmFEcarfMeAa8GGH1HJ5cr74oUZcaJr2rqFLsZu5MBz9PaxR8yhW78q7QhXiMtXPzY64H5ZPL76aJRR",
  "key1": "4PrLJTSuRT8aNeXYwNwxkwVwxG6KKe6UibLJyi1VQFfF27mQiodUzLj9uiH5sNm3hNWB3fwv9TNJddXJu6ZHtnrJ",
  "key2": "cnU1kHwuPAkBj3PPtb2uwm4ZdNQHU8mnhTh5skB7ac5oAs1JKGTUMvXDsbmoStGL4nGW5bt51kWXBXfagiZHQva",
  "key3": "ZzzocrNYeB3cyEz1QE6KJ9xjDezv8CeofQY93qY8kMuR6DP64gLZ9d2fRfa8GMSMAVnAiYf8gkwqAxRRtzexJED",
  "key4": "2ptMihj7PPAvDa1cmQTykpRSkmSEWn7dLyJiSL8SYbiuMS2EeV9nnGcCJZcDnYvEJGssSDDpSencJWnycqzUMwBh",
  "key5": "5dt76x5uzo5vMCKNG63atw87HB6k3eq6ZhbUQMbVx6deuTEaks4uRNbcxDNmD3JTA6pqYbRKk4VKAkWMPX2iwwT2",
  "key6": "2cgqobknSYKb1iJ4REFECZnqqmJSmm8nv4dHZTqXHBQmwGA7L5oBYGyXJtrViPpc9q5GghiYkWGyaQorg2oZ8L92",
  "key7": "2ZYmHsFYhJ4HFuV5tvaozAnEHte2bFtAvyw5pR1xGTPyM1J2r4XeKBkg3sx8GibzSwwnJWe3iSzvo54Lwhk3KZ5P",
  "key8": "4mxce9RJgBXfmbdti8Gx7xmimfav3Kq44XsktmzZiXG1Sz17v652TGMAvXLBYE81MU6FKB3p7Q9av7XyYA9yRnNz",
  "key9": "2egFoHmmvtHs48jysrokLp8tpmT6mh1Ln7qVZ9wwNTczscnHRpdUpsgpPtskHNdcMbJmd9S8g1cwetrbbgKEECky",
  "key10": "cQUHH6jGGfr3wkY1AfPzsfzYzeauSNxYLyi8yyVvRmcxzQpnroysWdfkt3jywjqNZg6fLo6unGeouMzx9KET8JY",
  "key11": "SF48p8SpFCjcZgPhSPtCPDZfoothrxssUTyAjhzSNpmMtxS7w8ZLXgWG7USfQRXVzSw1u7XdnCCC42pQHpMnGwe",
  "key12": "Twty2pK8oJyh2pRoy3zfrvzJUo66vYHWCpJVjef34LKCz2Vcpwm24Q14fPQ446Aex5VfeMxUM3rgkMy9c7xmYw4",
  "key13": "YEFAsNvDjcCqgb32cHDz58mosJChvRfqo6Dp76ihEntaNs1BS3u5yusZff4R9EYA9DmxeqJ1juQUjeLcfpdy9WC",
  "key14": "27TKLjh9zJdxnbCHx7aSgiWTntLxQKDJmnrMEuDMPJbZ7vcTsGB75RhoKTLtmhahnHcK5auHZia66DaYi9QEfMmN",
  "key15": "4tLRTcyfSZXfpHJBfrNLu1BNUPtkprXcBBp4TGm9KDpoBspidAioE9VjUnxDFkSmi5p4zfE1AqduPUdWt87AsTwv",
  "key16": "3Uu6DuiwEZ2BrdAdFgsWZi6tLT64EPLyj8bvxAVmdG6Hget3VpzWfrQMv6b8vYYiD5ETnbmyzAzHHrj99sp1cCYq",
  "key17": "MgwZiW4MUgXVDmNwS2v93ckGRf6d69SNmPCj3Yq2ZPei5XQ6TKgaBmyiJeg7UQMu99Hb7eQBKtX8PxoNnuTnvP4",
  "key18": "3VdZuBN1urwjEynG17GUWeF9H8HoVd11dFVKrVkPr8xyfYEbeUZWWdT4RJn8RN9orkgBhL7xtayPeESi2bQmQho5",
  "key19": "tHoBX84DiDmRPMuchnGMJdGzwPvuJ28e4Hdqr4wsD14ZhvQZM9f9Bv9nWyoVfcZCte7aSroUNwmymcsKYokAmYF",
  "key20": "644CsNMutduV9zqwFTRVqZb7RF8685yeyy4kb1cprk3mZyBwWNyUaJwRDroctmQTrGUBSq5Gi2uficKxkyRMNqBE",
  "key21": "5BSgyFPcmZ3YNqweASd1Ee8VNwkGKxqG55ZMgX26MznsPs65bedpfbryKekPHQYhGsecZcLeytGsmWZf3Ga8w9R8",
  "key22": "3xgoZAmZb3bMr31hNv4cgebP53bUFZVpcB5NxWwcDCmY4NW4G3XJZs1s2uLvjEGrqoHTxWLJEscr8WydFxHqZCYN",
  "key23": "3gJpuvrputFnA54usVddwXDdDhGxAdeG4jdKSXHqU9b1Tqfu4xHdJKo7rRMgmCjBjC6yk9aPzm2AYXLawyA6Gs6E",
  "key24": "4oaRwGXGAqZhfRMFoKM79x3bGiK9MTV2J7zu1XKxuJvR8VtiRcxN3QXEafwEeo9oWBL4ESs4tRrUqXjfjS7MuXsv",
  "key25": "5d6gdyXkngYzDAtTe9XcLZjW6U6pmHo4euaZYdFaAXUKmAdiidSLuzVCFeqqrJgAwW4tEqKXrqUJ2TrqhX81a5mb",
  "key26": "4hvChEvAggsBDwQFeLHQ87hiXna3TXLi6gb79MzqXV7QZqbkvuUCYFenLxuNj9mf8MLbVP8cqdMLirbkUaGaZhKQ",
  "key27": "4pCKKnCNPwtucXhyu7zKd9V2S84wMmeBAsczazbDp5zYXVjY9rBigxywrbmCzBdgi3cWzRL8UgSvtBu9KMgG1zvr"
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
