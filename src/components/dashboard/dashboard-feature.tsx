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
    "3P3uZxUBMqyzRnSZRANmDSfHA2RdhhfavF8dRPjSzN382sWCCB6ZJ7JbV6t9Lmz4EhUho6dPwCpcHdWwxPzAdHQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UPD2PQv3vSRPXV8Yn56nVuAcT7XP8FSo8jM75ikjYnZBGz11DmHhEBULfjWtY2Md9WC6pzAhrMgWuj1fY7GYkVC",
  "key1": "ei66yodEvzzK5qw66PsWNX9XsS64AagQhFLgZP9ufoMYgYXDYMhfkwQ3UtkFyo9PJnFDTdSsVHM8VSrUy2WMaFb",
  "key2": "3Z6poK9XiQfmu85d5ph4PG6k96ejVCpUj1cmNv3y6As3ejWTb1B5TKJ8MVWkU7z6dezWxM8kzAQfYPQ5jM4hf5it",
  "key3": "4fDtRaSttzyM8fUWwkcHK5Hae2KtucBbSxkLewssUrGH3e4KLpvNJ5sg1TDueE7ASTX5qjEjD8afPraEVUaNNSwt",
  "key4": "fYkpUNvndt5gWwQ9Mp3L6o9PRUw8UE94okTRt6GH3KYDAKHgSHgTdeXDfgmHV8yQ4DNzUe4f9qdkS2May7pJv4t",
  "key5": "2wAVwUq6sXiSSKiTyQ3noUh5apv7AGSFUQJF1LN8Pqvt7qhQt1zu2jM6GZZH464vSWoqqkiVSkgc4wcPhwXUBCQN",
  "key6": "5dPqnNftfWSzrmBxhYaXiiBn7FNpX2Rn92kPb2HtJAkdBGFGNbx2wMtC82CiMWyZaHmDQY2JCyWE7REBvrAXDLko",
  "key7": "5w1pig4gBRugACSgHTKVqqVGbY7p1rnAXuGLJWnZn6qmFiPbHS7rqajvYweBLLjLuG2b354kBB25PefX3oT2aDjy",
  "key8": "5TghB9HvGnGcV9LQbqbR5LvdVqqAzANw2aoV6DqDUuXpHi2yVPMn13NpKEzhwrYRgALQ6pf1exRgZS5YfwmcvcFK",
  "key9": "vD7W1jysxpkjMbgTPjMk4pWrHy3GRMEbvmxJuABkSSArsyvHK9NnhYVQBuWxF1FVrgVjicNMBPXsqqT7xe9Zbrr",
  "key10": "2zSCXnZApp76BN4kV4UcvaX1gnpqyoV3BF2Z9g8kUT84JyVxJuJNAGj8YiiS9ggZnxWse1b9R3j1UcXsvDXZhgWn",
  "key11": "2XzaTKVdcfsgq6hAvVqde7V9BhwEyqcP38SUGX91utprRQauMJDA1GdXRk2Yy6N9EcpJbYKAHb3G1Sow418Fz9eT",
  "key12": "38PEYr9LbDM3hmfmwym45646gNzqtY5TQ9NQkxpeuLgwyYApaUfZhoKR6dyNkypYQCeB3Yy5Laff9KgCNTm9DkyR",
  "key13": "5KNkQvAoeUXSjWJUhhSQWFCKrCn7kV6fnVVAqFJwPwzSLGCymJLTY3kqKcxB8QDWWjz8HaznpiP3eziAKZwFiEsi",
  "key14": "4XBeb7oxK2rpQYNB8fGsJ1X3JHUqKZuPB1WYocxUpxkePZhJCeRY3QambFCNYyE4TYptdELH6XGMvvX6mYyKc3kf",
  "key15": "5MKep3pp2mDkt4A2FMb9294VMSvbh4cXVFe7A9xS2VWhpahnnRx6ZL85os28VG6qZ18SdhN2U4h7ZhaHStLhe9tG",
  "key16": "4JNfi2WdWHzKMHU9iouoC9QuNZPDxSFbMJJN1woTg5cxzBvYnDwe2wyyRfECQvfeXUmVufiGajdnMSB7qLzr5hx4",
  "key17": "4WPZemzdtxNaWamWrPpnwR3RWbJNVxf8UC2N3hRmmaFPa5otF7D651GF4uUECNMvaR9yghkXoSKfZbvDVdkFV986",
  "key18": "4BpUvXVapxLMwNNZwMdUX3mfBA4h2pjANAJnfPFpWA6gRMpyXcrAjTGyLWorKoUW8gdAL39ohgwnUNdttEyuqPpd",
  "key19": "5y2rVsj6MZMRJPm3ZiPJ7vV8yFxoGL6yggCYD2xaWonooswUP9daSJ6GwkdzkSSGvP22QMAdn7EHEaupEQdrmSp7",
  "key20": "4XNomwFosNREgTEXzYwzHcyBZwq2QTiEA7Dg4bRYAKgZKgZfg8ka3xZvzndoFR1HauNNYzqqtZWzVASBAj9VNrar",
  "key21": "4ALja5yBUz4W5SiBjpvJmaUX2sCXrHYFMeoGjtfVE9Wmd9dWvSB7eg47hatmk5R2nnUc4hcBcEqdEbxjo71Diaqu",
  "key22": "5ou7DxnbSg13kWmc3AVT8uQ5GVtQ3xc2fg4pPX8P8Anb2DC83jipUuH8eZJqhLDPzvPQoZ5ZiBNUMmbV83mxk8aF",
  "key23": "5uWQwcN4K88ypFLhh1Dxap4AC6GawvR41kRiFgYyVcJHQTaj9EdcTASX9etJyK9TwPZJYPD6EZSJqfQDCSMYGeFa",
  "key24": "QfLfY5zX18s7T6UKjYECRTA4M3RZMXfighRaGvz19axByQYf1cXGir1RUDCn7dggtMvZzwg9C8oapsR8N9Kvw86",
  "key25": "3eTEFXdrtDyC6xjXswiK8XmVUsndAfo35kz7uW7FDrppoJNAGYrF5YiYLdFnhESLJx6z9qx17pttsqWGyF2sTBP6",
  "key26": "5HgghDLYZ7WCFJyAV3MNhBc3p2RvYtD7m9VqdFGUK7zbC2qJU3GnqSsWUiyF7mFz15NAPLpb3HpgWqKTa8efJMWJ",
  "key27": "3nWsdfapynZpJgtof6Jqs8t6HqjGKUkUva1KCsKMcDPsidwywBBjgfLfbGBFV5RbhC4L5R3je3DGkwq1obeBFYAr",
  "key28": "4JAi52F2zFhiUP6F6BWLtN5kCn9Q3VHW2qt9wyUusryZncsFpCJ57VYCiNjbKJE1zDbFACAi4nPFD21tZuX17nGM"
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
