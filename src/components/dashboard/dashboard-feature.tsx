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
    "2eNNqRgoTZRN5eJ74vGwQtamqGgqcrY2avb7Nq4f5j5c4bgMfyaNfm63GSaYThrKp5NtytqZ1VUXLoA7CujS2KeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xsqCC6aCRWwsn2xudo1f3FVuuN1BkLhVGCE5zt3miD74gdGWoZgzM7GVMGQwuzmA1yVr7MgQ1nq2eiExA5kFkXP",
  "key1": "4n5xAqy9jcUEz8ZtssJkgPXkmyNkGmAckPGL1pNkKFyHSnh8NQzz7FiWZHLhXMw7VSvKxF9wcKmC2im8HZjFsv4d",
  "key2": "23UzABRr58LX9cszixcmf1vpULqJAZSKddZHhfyGvArngFKjSqYiwYMSsDMMN5t7MK4Wbz9xnVRS44KJGUq892qa",
  "key3": "2JopCdhLQC2RuKkFqKjgPPqCn7N6rcDfmNBubREGkFBLeUn9ogN6YgFARf8byS8cYgxHzG39LawZhGYwZbz6sYnr",
  "key4": "3giZnhcNbuvwaV4nSYG5GUFZKMDohTVyaDDThedXBdEFhNoR7anB25FJqdbw5J5Xw3rnYwYNDJEPY3NQwA23QBVf",
  "key5": "3pW1BkoAoNgTT15gG1RiLVqFaapxMpmJvpraETWiNH5D5qVSVDtkrhd4xFxsvGJMPcfi2RsPusaWFe27uiyfvV7R",
  "key6": "5andzBWrPHCMLHhBGq2mNZBtW3JrnzcWD4kKp75rAGkoG3X7wrGLZCvgSEQKKaVHb8REZNSxXZDJL22Gm1UiCz24",
  "key7": "5sfvaQ4Li98ZeSyPdnwWSmAkxufie9Mqh1dkjM4TCC2StvFwYYPtGbtHa3UxiW4JyBrfqZaSxPYLWMUNFqKCi3MU",
  "key8": "GjSNAUwEL17rycCN7yfJFFsUA8T8Kn1LdU1JM11sFRD3USzYVxNUcy8omTPD4dkjq6M1BT5Ks8aLRpMjbbsiAH8",
  "key9": "5vwaVkV9m8Sj5qF3zf4gTF7xkzzTNkPRhmxGWU8LcHNrLmN1npn2JXDSSoADqXKYikZ3gEQm42eTEeoVzbanSdER",
  "key10": "2uCP6eb67RLei2282aqEP2wMZsAi2fckQj4eq1u8Ua4U62ps6DVRgVshkNieujfW1TzNUZTQc9rMWunDniKLkLbU",
  "key11": "2Rw94Jcagqtn1itx3tg3txPXy62vnxBTYvCrYGMp7rvbkBbd32yrMNwJ6SyiF6ojChp6duNAvYeYQkEgFFmBx1WE",
  "key12": "SnDiSTEhbKBJcDbujnwYkGfuPL6yndcit1Cm4JQQf1Mus2eRfas5Vc9oiGsPn63R5SVi4fta3rLWrECCU1Mm9Ao",
  "key13": "2ADS9yqwWru7Z4MeKGnmLtc7V4SYGAUuuyXnevNewxtey6vfy2tt7DD7oJSsKwct8L1v7MXQfutVoTDxiFgbLi29",
  "key14": "3Z7CnPP1e4Xh89CexmdkxhUgbAZDdNrv2EBN8n7j8WMnVwRcA6nMgm7aMjDgTTyJcJt9tW6abeQchK3qxUa6pipW",
  "key15": "srqxFGSFVhLY89F6Dacfdn3z3iHkuK6TXw4BswsqMGpqwrWjAr3qF8PNzwXrgeZ2n6fnRgtv2pxEh31vkRwKaPN",
  "key16": "5xt6yjeTgYahiBSxd1S6Wm5fpGB54vXNLJuSSUNcixxsv6yeZ2tiWw9vFYaTPMNSb5QYYvFcqTaHSrk7GWvmraxW",
  "key17": "5r8ghpAXe6XVwEkvQ2U3WZAut65tLtwpqUnNP9ufUQzpVfqSzU2aytVmA1rAcnfXBtcSgB2KfhEaEbtVCcPno6gf",
  "key18": "3k7LRWxYFaPNstT6jdPWfwQbdBC56obdnY7373jrCPgT7JkDGF7UodbfM3Ki9vwX68bHTRAP4cC672iMio44Cfkn",
  "key19": "4ZrSdvn79W9PSEmnSit4jyepXPWjTkTK51CLFW4JH419TkLABsQFTqDRgDq1f3z5wuta5fRarJWbP8VvEBmLDe4h",
  "key20": "5m1DyEMg4mktXB1BteH91oB8G9dogGrbLy28dGrc6jGE8nVpRYz6n8XQ39ds3oRuCvHDieDzmhws1wLby1RnN4bK",
  "key21": "4N1FVcGnWZv2qPD4YCZzvXgyjHVR1jAdAoVtU3v6fa6jhkMyjdTM9xoTwoyw7wiKgjAGkXKWVnTih137pcGN1MGn",
  "key22": "5jRjaBJ3q8F9GiX7nztt3q5wJNKiuCUB3Pwse7dXp1qu4v2QX86BJWV4mfccts3dpU5whPEwiwsG6HeZSUo62tVW",
  "key23": "5GjkXn7LMhdH5WPbx9SXZnrhSgHmaJwYzNg8M5iRaFkYjhM7uKcc4fFUioR7xqSmfrPrwoTC5RgVisQVGf91EmJM",
  "key24": "5CvVrVEofsR44LnCNXaV8FRwiX4DcuEsrEj4E2HPEb4yaGVkDB6Aaj1drKwBdVWcjvwzEW1FDYfhRoMoFXYPxoA2",
  "key25": "4zUBJZtnEVn5rZgH5JgXjHEZw3YkgV11JBp8RgqUiwt3GvmXRjwy81qnBRNF7omjTLJNBrcARNsvuMjN6wABcg3H",
  "key26": "2JRafxXQTVBju2LDbrDwW2fiAQR6jFHK6QZe3H9B8om6VE2AsrHV9Jt6w33EYyyQsAFpFWqwabJLuScqrMG3GuzF",
  "key27": "2qm38ynUovrWtNX7eJgepgfWRmJGfxshSvWybr4v4yEcWtq4zGDpnd4pbuEMP9Ve1hWLCoDepBtW6LD3hjFcQume",
  "key28": "3vWK9zcqDHT15aLecS5LtyR28XiandRJcpsQJL8unyBs9JMgf1Henj57fgy35huAjanmxKQ57LvoLyUdWk1CBnew",
  "key29": "3AZuP5NEawS8W4ekTzYg56Byk3YDbshGP6NbBk2RKkYW8dmu72T5sZk7UBfzjLV5MCAZHQuhQcAgvvRZUh36QvEG"
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
