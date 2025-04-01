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
    "631UaqUtR6a8pChJ344wFC53sEHsvmj2XdXJze5fJRfaDxDZqVy34SdJKvP2Rmfg8WLpBGyNpKZUfT7BsictQDzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HrJVMowW8bV6LtmeWTJjxmKHm9Y3fpiLyVnPivRwghS2ATgak33fD7k6xJXb8XVLRHrGpLm7728BguV16oqvcqb",
  "key1": "4VbkqU2xmvszbH97UA1aA94D7EM1ACdM4nVxqmnDBixRWfax4AoSoFYCBHqmgTocpJf2GL8qH5yPusUC7ngzWMgc",
  "key2": "51vM1Qvn6erdNNtV6jWYydMkLQq9gQUkQdP98AEHpPYrGh5s1y3UbeqysBhwUxV4KAUJPMckBVyowDq7FpUQWrJc",
  "key3": "34Wbj9s8QXa3B6pmnj7W4EvwvpczHmU9Y794h8dHP6poL4wLSgX75zDBHx5XYtgMPvnk3ZZQcdvudvr3fHVzwH2L",
  "key4": "3AJ71hadErj9SfEpcf38vs9doKB4JC6q7mbn72YsKgUUqcvjj1AxNyjWP4Z2AbTtQfifT4RL9gsekoHdTfiagvpH",
  "key5": "3Rx9781zCkovBiAdNt3yoCt99YnueFYXDTruaBXUAmERLddkhi6sPB3XHHr91kT4wC1rk6XrThfCWMMbZeAjiqvc",
  "key6": "9T6Dacy6dngegbwZqy3d5vQJUgqkDbXW9tqFKVQ5xiLVyAQFvMkMoQ4uu84chDgEVVnEJrAXitSKFdZV7dSp5Vo",
  "key7": "3qPkKQokZ8uLXP4a9gL7NUjBdEfm4CbKGff4bLhFv2WsoLijEapzQHWEBr4RJ6jPhwtCa8KzPZ9f65T2dUP6sUjj",
  "key8": "4zPULtg5SvBPj1Urq67kaFE74SusHTXM7E6jwp76hDFaUW16sG6bTHBUtwP3quDmUcGgVPwDDfhVkZYWgQ1Jp4MF",
  "key9": "CmYh9e7UTGgEaFryrRup4NW8o8v7VtbUTNWDP2yPBTAHxBHmhwB7wMUcfvyDQkGznN1fk6o2ehHJcKQyKLGScEX",
  "key10": "5xHKBYpHv2RffvJ3igBhPr68g6Qtd7CCbUFDcB9XMmvnm3CJs2SSG1zoY6HiCekwKkKaMBW5MC1yuAtrmLY2s6Xm",
  "key11": "5r5NjM8mY4EGR7mfH2fttxZnreDRGryHwSs1f8CGoBDE9v7u8XTuxFXnwkepKXqwAKbpPt3FKzv2nBZsyrSvuHNJ",
  "key12": "5arRKG39na93i4dHwcSA23gjwnVYw69EyMZGsBnQwbV5Sf5HEbCVyyoDHMTCxrSoqUJmCZ4SwbNgf7KrkfDiwjwf",
  "key13": "dXAhdMhCCWpFzGw5pm7AK4mt7sHBcRDuZLBVJBmizFRomAUaUm4LwuXRdML5ZgEfLhoDUbQwZBJ8uWTTMw6s9oi",
  "key14": "3rKhwFGnQtzKuCxASHKSbKRjzmbQHCmbMx3ThaaCnbaCP9sjK8TiQQDjcQvisDjEFXaToH39tRxHBBUp7Nw8LmFC",
  "key15": "35EeBTHyZLjiPexB7v3zNXo8A21inbLi1dtEu6t8zVxEPvDQbh8ZKdLemKXACAaEoUKTWPBxpCaxUvDRZWy3D3Ny",
  "key16": "5rA6vyf58cU1YHHqAtjCuQDtSX2vkoNpHbymcHPcAtV8bicv4eM34CpmQ8QRnA4GXLMn61Tni68i6NGBKeavc2uE",
  "key17": "JKVsJ3h8Gpr74iGb5CG7PDBp15dKt5ieykhwCdf9Tw1EXPSPaKnF6yqucjc4ZhwYHat8AXZSoeKSMj43b6hhjsB",
  "key18": "5oY3xuHQrrBJwpjqjvD8BZ4gacvHrUAgnCbhEuY7Ezz8bktZs7BcMXZHNLftqQuAn6yNuiPCAYnUimdt4cCZNBXx",
  "key19": "CVmH373N3M2FVyYwW8n6owpiiHdEDPyKnPDFANWCHuxWfSDn867fHCs9cudCxT54Q4wkd4nbit83CVqM33bjNrr",
  "key20": "28xQ1mDB2psMPowkohG271q57ZhzvVd9EFpaNHYXxt2jjkFDnvyyrhnFoVL2h9BWCmEd7AwPd3oJ9qJALsY2pNGv",
  "key21": "4JRSd9jbCeCPjyAj9wDk4d2XZqXA9rBUprqH61UQHU7jSXora28i4Yn7SNKZFLPSNvKusUBpLbiHaKgLhusrN2pS",
  "key22": "UWqp6bWV3Nh7AUkyP5CjvQ695stPNi3ZGq2AoPtjci5F5L8dMkrhk3YtgmwCcE2tzhnxnJrB2N3X1xedL64TVhf",
  "key23": "5wgYUtqiaieuTK52BxCyoH6VePsfefoj4fGcLTtEyHF9Lo5CnFeXWJwJsGVa66rBTLdwExRR3WGwpQBjisdbUNqK",
  "key24": "3C2Yz6j5XiEGJBvdaVf95jsErY1dcz7mVgj5X86uuXfwLrC8Ux7hwZ3GUbnp24WtGgeQLGZuB8Kb11uSWVbGJUqj",
  "key25": "C5FrYU56ujALQ3L8X5HocswiA2tQDfBWAqYnoMnwJiaHrCs3Qi5ejKq5kLRg76fadrXt3Uodgge88uAy6A9YPfJ",
  "key26": "24AaNz4gfGQKVQmjEVCjDjvy1WH9dauvNLShUDuUMMkU7SEEK8nRYE2bPsbZr9LmFF7CRhDRH9ReEQLyYZWKHfnL",
  "key27": "4zNLLWvk6mqiKxWNtkdjTiL4v2objXEBgXCBt23AjtGR9777dZVf1msaavHsptaYvRUkvGT3Q9kyCXa7DPsL13X8",
  "key28": "5ntCUT7A7sccDbauu69sii5M68d83gqvr3prY6QfbCxK6ph7fHauT17uWaSjmHJDoonpG5GkLL9aWxkpSDDNxPMx",
  "key29": "3RDJkWtWGJPb2koehDH6K5Qgr2NKR2fLXTZpgpABN1jpn26H9onuXTCifcM2T7gG9fdnhaX8mcRvGS15qKF5Vuo3",
  "key30": "5rPhB1dD5iWs2BytGt23JcEJynmPahgCW5rcPhizE8AVpCj6ysfsNb5J4SZY9FLPV9zhvp5Fb9nyhhwVrUtcnJAa"
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
