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
    "2oaiLdof18vEppzFgWvAjVoWKfmWvR7xXVrDLK1hZSVnogHaDNQvVfmNN15x92SjFZER15cUbtbb9ZBnm2KSKcRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29qk4ps9gcVNw1bSHGzsabw1nFxNRb41yaePe18BErNDGZ6ssSDpEZrHkfXgbw5tYLdyLvPGdbr9dQ2eLyRNH6rG",
  "key1": "3gkCiMxX8FEvUQaF4vRXmhRBPRUdeshw2yvSwyP5Lyw4wU6SK4cvt5BCNNrbagdocfvJjs6qSgwy962wJR9FCQ9b",
  "key2": "34w5FEtTvJp14YWUDjjAgU683iNiXq9koit4t6k2dLvAqrLnSUusL7Bfo6uC1Un7PLAmNETHQFFtvDFsGC841uiA",
  "key3": "3LEASiz5ynJL59mwdU7kFpBXK25HWHaF5BaHJ9nA1kfRAwsYfxWfA2cB3rQroMBsTqoRQgu1HmNpLMnesHPsiZ2F",
  "key4": "3X3sbxMJeCPHprpHNC3x3h1eo5ZHVXecyMYR5QdAGYHQVPGKT5sRxGNvQapBkk8iz1XBQ57PAsxWLM36KFCo9G83",
  "key5": "3esuudyxwAwdVfp7J1Wbdz8UoEp6AjaBLEdM9RsruWycJS6x6x6mxau7RRTCvQGVAHAC2ZdayoB5BDrrMHB8RHgD",
  "key6": "655Zb7dbh5t8QVBjM1kMn7bUvt8nxCfpbRUD5s6kiejctG6rq3SUimXyQK87HbAmTRu47Tc3Uf2QvxRbyCBokbFP",
  "key7": "HYrmF2K8ERhG7Uis14Ma8CtHx3Ymy5diXcdsRveyyARWW1Wmn5kWMxir97PPHqkMLdk73cs4CmA77CPxrjfWHw3",
  "key8": "4C6xtTwLh3KwCswtDBYFfPvY6pv541D5vmGCwKfK6KsfV5XYARvyy2u5ayppkNbihjPzBtY55Ud1PtnVWfmgX2QF",
  "key9": "3PgKeoNfqRLb29oZDuvBLLeAVewphnAGBVzWFCsSbBJbX8hKDvsw3WkM8oWxP8uNgutxz83dvrxDkWbhKgYRVSMp",
  "key10": "3vtXZGtr2mP6C2Y7HAjbZx5F7CKnw6ypAvW8vG84A2JRSHurUJari35rWaXy5RtL16pUxqPgZyaZ29888BKPhX6M",
  "key11": "54hz4z3M4FHB1a1pXKYabRNP8CsLSVzMZWmhHTEr9AtbCD5GtPcMtoBjFrxC5bWNdGb8v5EcDXNUCEJYMH2uLojB",
  "key12": "4AZYKaDeqsPZA4LUoYK2W6RGmL48GvhYnjfrDW4E2VYd85vsvtwwNJt8HTqPPEjqPqs7vjR9AGhh8uVvHPbfgYmY",
  "key13": "4qSMn78EBFVK56hP7Xg66FGqjfokhB822a8gVX6b7wXCMfnjMF5jyy3vsrkKgqFjptCF8hTikYV1GwbLbFM8Uojo",
  "key14": "3AjsQ5TFXT93wprBeyRje4PGkyWHhvDovWXQcLH376iuYC4imaDHKF7S3mQCgpcRgh7xVViigLDnmq5MEyykem4n",
  "key15": "24W32LubwA6QmNX28sy9NDFUoP8cttxkaGss2wrXgeosh6egdhawpoXxpLQUEDXVNYPqsQVmiG2v8NZMEkYEgoCn",
  "key16": "3rhvX6jH8rDbhsb4V2JrpdM5xiuqTfJuf5e5Xqpga44mN4YSV7zJJDcqAwG9YwuvA51ijVeAYFFTfzbaf3nsWvwu",
  "key17": "3WEwvPEv9iyKsCaeeBEChPqfBVsV4W5fFYf7jnexUUtAHHkSXBZGgxHc463ndX7B4sinKgeXwdZEBtbSbg1FLSop",
  "key18": "4zQZtWb8p6xKhgGu2tU127q1ZYegZ6DE6tMoWhUYRKkBJfU9sFPGZorwhS6neMBDJhT4raWb8N4nDwy8oeT6YybU",
  "key19": "4Av1U6MhEJ4CFe2F4RkKQMkwi3hKimVVb98F1zuboajFy8UkQRQyKj1MXdQPch29neqTGbeE3xvZFDEwHatkazKc",
  "key20": "3wrNBNkJGE1S4Xu1ygrmfRHv9nbqbMoudBvGV8BmBx5GqBXLD7uA22xf31Q4wUVRzvzXQjpNNoz6UhJFBgmP5ruE",
  "key21": "4Dyvvmj8YhzXXuWXAVTVzZGM5i4sA5msWcFgjaJTCZc5F4JXZHqbKxY5FFc8WRrnkYw3NMyKdF7UEscyojN6KBHs",
  "key22": "37FJMgzuP5eaTTuAu85uYDGqG3s4GujRsuFLx4Popre71crueL356siAk9BtdsSXaU2RfRDHt4WeTyfnrCNS1Pos",
  "key23": "56rWJTgdEkHoguVS7N118XpcLWfv3JqMnuLeDxr2RThzpYa1dr3TifadA3jtBSUBNGWkkT1BWukNzW8mhXmUWGs",
  "key24": "65axoM9hjouo1z6u1x8ixW6zh3sy2naj1x9sPhok4TJ34W6DBseReGstvRG2jyeBpPmn2SR5ps13Lb6qbnbSDxAJ",
  "key25": "58PXSzzV3wZigY1LGDvFuv4AjRHbzRUx3LUTFRZDkjUFaChj7PQWMMxmrzrvvyZfUguehQFn2fMx1uMtEozXKWBv"
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
