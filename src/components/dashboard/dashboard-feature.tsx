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
    "2T9MDLfEU3mquZhFcRf4yhZ4w4jrKcax79PRipCFcXjp951ZmLPZepNY5rGZCG1XGjSqxo7qcDxktiYSjtaFUWkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GGNPKDUjEU7KYypLinrhr7ASGvWz5No28qqN7D8PTYVBKNgLZFRaZe2zwnvkJRd9gBVoR7BNqUuGsLvzLdzRu3u",
  "key1": "VJhWx1Th8cdDXKb53WP2QyoRp7oubjDJqWL7zjCsRcAu6yprY5AoyzAGzy5sqU5CrKnYnrvmbzjDbE2npjMk8Eq",
  "key2": "5cnUieojnx9h4s9MtRxmUHUPzMr5Axy3CpzJLRECP5Ensa8U3BhSnerc6qEA3YuwWuafHKESikc3muWhF1gGuxw3",
  "key3": "2HBrfBESeD6Q7in83rz8D1SY8uCRXnko6uNZJxYxsByY6X7qytAoDjDYDrfoR8kh1CyQ29xecTFn7JjzKQsWM3ne",
  "key4": "4QhNMRay5NabSznwNbZYaz4HxE6Y3ZWz9JZL1qNWV9dKo6XqKSfDdVY6XZLKTEQAhSXXnKUxwGgCJiwTWmvJmCMA",
  "key5": "4zx2NMhjFhKac7w5KcLPfa1C8fgpFZMkoaPe1wWcTdVi3b6fjPoKJDpTqM45PPnqM53pnZwnX37bbHUq5gxLW17C",
  "key6": "edCQLNB5K2pYYB5ZeBMsmNCYtkcKQC33QsHc6rrN8FCcNzPhHgs6p6ZExd37arvKqnVsrzMqtDestMaUmQYXM8f",
  "key7": "3iJxoG5euxnj8z2go9B2JA6TXue85SL17KMFiDNBFaVXc1563ZKqTgqFpWhCJX8aYobBM8tstmZMBXqRG1B73KX8",
  "key8": "4yJrq2iXt1gyF6yscbcZV7fuBdJZxfUedLtTPgb1i1m9R5QSraKpsrhwAnuVs6FiqLE4ojTAz7Ag4hgVNpw6bE64",
  "key9": "57UVCgajKTuH88MVRAxAcZd9csqBoyHcBxrs5iWRhuB6xKePbpz1NqTLeHG7yz5qtGCjxT4jftMDTnJNfqkt99Vi",
  "key10": "3WVH6wkMaJRCunH6vXHekRVQhse7MGexfSWTitCXTyc8VUSRCnDMgL3jXLKFJwSr6GVVT8bcvanNBzRDwuJZFy5q",
  "key11": "25iKvTqqF3WwyGPP7Von3fKvhfgRRtS3BiNQa3gBYjUnUChWkSsFjmZRjFxXz25YWNLaJFfMuGd37RKNFjU3YAFv",
  "key12": "2CVY3EiUiMM4685qxYxe5ApydLA5vHteq7nNKFnNa7UuDsxEDph2temx89iCZf3htFWXhejypsmjth7Br95o98ep",
  "key13": "3cfJJiczi27pP6HUX8FvJoCCoEFS8TMG2uEi3PotRGBqSrcS6xxuMovaFqbfWudxi7GLQkgD79abQiN16gfXEnjR",
  "key14": "3HfY6g3gWGQPzze9N2fkdBQjEpR16q7UaXuuKzJ37AWBRYFfVpR7mHHmPk9WjqzEPmgtyssjS4dGbk3g3LVTMYbu",
  "key15": "3PnyGjVaBwfvzxXFBc7tZxLxYUU3dv1yqPi6x72Z3FVMxSbStTuf4shPofUcNjBnMRPu7XDsdv8pPeTBZuMEqXjC",
  "key16": "3KErqB2gxMmKxT961zLVWodFP3KpBw3ckYwPgbqaP1gDdvFcoVczqhveMH8i8YDsqPG9hXk91VH73p1nESrCLcFh",
  "key17": "pjUEvPQAj1TE96xesvp7j9wr3R38LBjQEk4SkNyLs7snCeiRewnQm2Wo8RJQoMQc9RU24zKdYLcRGenaUyebgLt",
  "key18": "5ba6xYF8icxfPdxNx9EeKLxiLgiCzumnP7SCX1u4LG755FXKKb9fzB5mVHvaQt713LdpLww6Nj48s6q8eZie5DR",
  "key19": "MS9DXZizxzKwFghvspNupDSf9QrWnnuPzWCwQRhPWw26qSGgJPmGUDFdVJDHX6DBCFAkQkAJ73fQXPMhTnfAnyh",
  "key20": "65XsQCamttgaWd2wajfowc4z49BY3wd7GJfk2EUuybPB3rLFrrAs2on92n8qGpahEeMnzgjroHvkBmpZuFUoqQjY",
  "key21": "5QbgBr9mjEDeTAevYLgJGpm8Q4fgHSaq98iqT1WuuExNkE3ZjDgYR53rieAFGUoMHVd5mqRQWYBao1TLk5JVN5Fc",
  "key22": "31JfnrTtueWvauRUDFwP8ov7jpwfwsQpKpoYP94UBr9qYxcb379ccxdKFumGUjdN6mxo6UsP7K899PQrbEvX9pW",
  "key23": "4vpbS8bvpqzhJsc7XHstpNqh7dXYpbJAxQh8r2e3SLVSNEvNmahekAhKRKTok1Exp8ueL3wgncigKWpQvuZvL4mT",
  "key24": "33q89whu9XMxPXhUtjWKfNi9eHrc82wLnD7MaJYXgLpNZ14AdbtnKYWCCQYWNb2BFGQpDPU5zrXv2H94WwygqVZV",
  "key25": "2rEfRRoTw7ri4CRUt1QnPRKpf5uPbHXWG2GRnU6Vb9nFJbkMVXcLSBdhTw7EfTdw55SPpzAwYxhw7qBqHBYytLLy",
  "key26": "5rQnbB8WL7Sf2NF6sdfdHXpJVYyu2kBjE4gFBiYyacXoJsKeDH5qWkrhA2GNvz6Y6bkoX549BMuhqUyUfpvwMLjX",
  "key27": "34RAY9jSsu6uPANagadm1bQMDtMMY3RHWrjcLALkGxMsWTQCQSSaazkrqNPxeDL5E3QxxTrEXzpFgYA3LpoGWWTQ",
  "key28": "5deRRY1B7MyL9z5ajJPfKknK6qk9VUAZLQfasrt1R4fAsqzN9HksSip3K6PcMFw1mjr22vkTRHFvMjq8mN7crdsp",
  "key29": "LTmsSmUx1S636YfW9MAVrPrMSZJ6TAsFTtetDEWtHhvwGQtSnE54w1aaH7qy7kzMYCW3HMfUT1XEWJrG1zGgobN",
  "key30": "3sBrwcbgDg37yNaXchKoSywss8zraejBTdA5n98vLMRxWhXbZY6xzedF4zrPzYRSV6FjU7i3RszBBbEY2HkoSD7q"
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
