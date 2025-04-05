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
    "4rYr9GkxRNi7pByxHdcPs4a3VVbXNfGSFY29QYzM2yDfGZ3x7fb37iGpTcSVHBDkwk1dqEk8FRuDB7nnSFY3TGDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VdUKPpymw7LSu5kErb8RRwM7htqpchPL2jDdCxACPVyVqq34RLMrYPJ5WUMnzJfoXeyGhVnPLdSTjxpppqEigoh",
  "key1": "5Kp32bg8QzTN4gNUZ7H7fnYeiJbG8aWgmERytRprPkxxdsxfYJgnLT31mBxpUVbWXQXuQcQ4sKpyhJKfasHgRD43",
  "key2": "3Kb2PjZhZ1X7ct5rbMk8Vh5CvvdZu2JqHYsiv7pK6c2CwbbcT3z2mQWKYmxeeqgPTD1xyU58iNdJkotTbZMQ8H49",
  "key3": "2N7DnP7zSmAyB1oVEfZnNiLQWMbUACNGRHm2pYCCHqeuXYrjiu2XTTjcFHtbaia3igNpvqS8GEATPr7NkFReQBta",
  "key4": "4DaqRKbeYemVYVxpvAYvxUQ6o8xfrLKi9ixd9mPFadTB9dq4thRG79ZQqbw4FJEkxokMV8p9jag2VxcsTiv5oGrs",
  "key5": "4qRvX2EnSDmwfbnCgpugjAuSW2HTTgeY3YAH2jsezov9AjVoLfBTgtgiccVQwt4U6afmpuFnU9DfEZxfnfX2dhzN",
  "key6": "5fTJ4PBvRZpLHkf8csvrBL6GHYGirwwZjbxYkuCKqCMk9jmJS2czu9bqoFeL8JZEz5CxLkMiWYgmkXxrK7SMQJBG",
  "key7": "5q4RAtdTXiHuL3qJUkwjiR6VtsnkUkULGH459UNfQSP4188yDGFz8TuEXX4webYKi2mnRWYLywrqy2ah3Kv8FT6e",
  "key8": "3jbhAQCVQnscca6e6rfh5WnYtpNDwtVLDu6KJTDva73qaMm5R7dbW8c86aM7rjQKAHgeqak8Dto949yeYVoV6HG9",
  "key9": "fNedLWWFaz9dZdHAAekfjcWDqtmxmrEMta3fP8C9i6JjRQvg3qL4RWQtsEaT7mbvHNhQfCfnnKk6GCy2t2gAtSH",
  "key10": "aR9urWJFB22FDNtXqYqdrXGNvJawbF83uu2f3LHh2NB6mgzfKi2i2R2e8FjZwmc1rQYh5Vz7qc5b9G5C5tTqfu8",
  "key11": "2e3qjmdinPsXDRRfyDegLWsmn6ar8JYXAMpt554S9zpjyLKtvrypWcrSRN5zF9PygfkFshFykKNHPTKe4wANWr3U",
  "key12": "3iscC6viB2WFqJEZbd4GRY9sttTeEWQFzyoddVgk55wn7596SUEJFFu26a9UN4npXHmgRpbLgW9VYJuWYEo8VaDa",
  "key13": "577DW2WZqoBVTrWJLuXuqNEN5b1ojgxYgUjBmhZwURbcBmdS2JtX7DQZRrGyYUZp3cht1SVtbQa64XmphHmc2Mj2",
  "key14": "2koDDn5uuQyXi1B7cR9ViQg8oeauYHPY2kNV97Lb8JURyBQnorLDERjsnAWGBdka9Z4euEZxjeXz594HoRUx8ufr",
  "key15": "2EjHkjkDjgVhDwLzsUXv2pUgV7C4AW5nm9XhAadX36baVCup8tZadED5PKAESUYtjNdHDZ7RnBKLButYytQp18QE",
  "key16": "2HdAAfGRUjyG98EhAiTQAWimMGMAsZAqjaAzDqBVeT2XNQb6Pzg8sXyZVeQyNYVkP7a9y65PQAWudPGNxszxCxjP",
  "key17": "FwmNLRaG4LuDeSAbFGWfG3kPHSisUJ7YMvV3Sd8gyw9qQXT3FNvvP16KpyLBXH4sryZLf16USF3kdyqxpCafwUs",
  "key18": "3AJktSZ9A7iDLoGDzkT7vg4wd8YQQtBrj9D8GnCASLVHFR2RNhcjSyupq5QVUHNNTWMFBCrC9cjsyxyRyCGfiUmK",
  "key19": "5tTmD8cXLqjTHpsADEdZydTxyr8EaQmv36F2PARo8tTF7dnTRmWMoxpRCWbQ3CQxkj4fhmz4gP8v3uMceZvkCmAv",
  "key20": "2kTgJjdsNRrbGgSDRRWMJN5iygmY2VPudPYwtL5DEx2aTT9o69MJahkT2u4VhbevEzXxagwJpeC6JctKdLvWh3zs",
  "key21": "2LWvgRKJHg6FgCxqhqyu5vEXuWffkKH8tC3TW4sD9Y5Lrk6HerNmmKAnwm7eU4PqaxPn2Z68AvnWvQDkYW7Paquv",
  "key22": "62QfwQ8MqR1LSu322LFYGLheDAkK9EnuEraLrquiPgmsvF4NLiBoXf3XetBYb8oggAdLeX5y4g748Eqim6Miq1eP",
  "key23": "5k3owjszEQbjUsmQeR5AZNeZkn1B3Y9x8PC53J8cmvC42P7TmtB3gcyM9w8vPiAvnimZcmWt3EFj1ixxs56Nhpp2",
  "key24": "3hDiSc9JAMf2nWy4BZExDqpDP9MyZDhKemdAbMcaJdrqPyTzTRMimFXuzg3Xj2UNQC9ygBywwFQrTGMpG8TVo1jQ",
  "key25": "35wUaSxnWBQs1eFx6vZ1on2Hpy6QmHbJ3zqvtqQCgiVE3uunVeVGc3egdnphjUnZxoad4pw6VCWMqgGAs6L4ZkqJ"
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
