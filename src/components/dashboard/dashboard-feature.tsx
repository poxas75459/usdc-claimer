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
    "2XpbxtLBinwf7qmyKEaMFdck838RWGzyHsLFycTzoaFFpdyXL23ny8zDDk76YUCYnEWZsxLXh7E7wCTRW8TFCCDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V7EpBuubrjFxKLDKEDEsQQVR5yk7EtJwiz9ju55jU2fnpA3nYFe6z1hWjvrsP29TMm47S49VutYdJrvazD5pter",
  "key1": "4AhiiR4nwn9xnV8414nsbcJohcZzNsU8Bhosu48fpnR5XYYCU9ZDm2PMyUz1Ao98jW7s2TYL98dYbqPqxe9xPE9r",
  "key2": "5gzEhTwVQAYp42cNPCTW4VkcWUNv3wMoL6Ly7zvYtuyt87mM6kKh2hsnKEJSnxYStS7CYGY26MmsK5bAFaAHMmaD",
  "key3": "4dHZUhqSPtFYRujTEJ1KvkMwkReRgbfYgVUCmeMYrF3W2wWPiJQjLVsHcRLKQ26a4j7yb5GEJEcrVy8ByKyaY17X",
  "key4": "5qBEibFMEfEv8ZC1wBq4zhMnwkesz4uVZXeYd32ncL8M8dnsQjVaA2C45XsLe8MfvKERDQnR27Uw35jxuERL164C",
  "key5": "4WyW87iEjbBAsknmHHk6Uxmco95rGuhTom11c5GLSLLdMRqv5o4nh9Pk3Pk7pckejoVRBveqsmRR1KevCqJpgxCF",
  "key6": "3iYpXUnhqBzeeRwaijD6Br7omMWteZzY7KioBZr2QTcTFRA6E9F7ftoimx2u538VrKMzJgnUp5tvoymnPcxUG6es",
  "key7": "2e4EVE5Uf3Tp8hmzJP1r5a6dXctiZDTbvK8CUkaP5Xj5dusJLWhyACtF61VgMDP4CmSriiXbNZfdg7raxw6jn2v8",
  "key8": "skLW3R6QC8TDUo1YLTUuZxBMCsMo4ktEKq8mCW3HNJ7zdcnYuRtsvS5g9faD4igUk12DSio8RkyxNqTe7M7PPrk",
  "key9": "wmXHjWj6Q6DRkskMbe1FbgjzkKJq4qY8Tg7BA1vpeycKZcbHcwRN7DXnqPsi1AGnoiDiUV8BUhB5Geo1L8qxbai",
  "key10": "3ymHNCHY8rzT3dXzLEEhX62Ne6xqjPKTiwrTskedzqhpSLK2GVJmEGbjH3h45X2E1nvZgyK8NZMG6qKvpuzVEdqH",
  "key11": "2kx1BHvU6hEXTjqczFoDQuVHRmyvfPbvz3VXdBZU4A8vfoizWr63ewFPbLPwa3ra1JuD7cdoptah93UWLdkyntg9",
  "key12": "bQFUz6koQMH6SsSMnPv5te6TULMnmGZ7mqhsPmieQNV85Brzot9SKiy4oKzPJa7U2GvqjmSj3Cyzw2NaR2fUVKx",
  "key13": "4fTFYX1zNV6UQedqJRYYTY8jELnDchLiXyXyNAs2uWuYuc9YoVDgSQnWtM7VgVgDDUQmmm1527BpbhZdkxcJhTgr",
  "key14": "3QvhfnH5t86aXymCXcTWbCyUA8BAXUQEa3v6PY39tZ89FpUaZdBmkM6kWcqQH1aGZ6v1ExHgejAsLxqzzzYc9Vee",
  "key15": "5Ty6f8QZfJu3K7PywLBNi3eKD2L4MotggGc3GoemRwAA4m8Ymh2AcG4Rm1JUWh6Npj2pNkTYy7RBB9GUTJW7nr8W",
  "key16": "5AjCXXZcTKvUX1TXuzUpfZVK9ajqXAXpz8REhcTC2FkW8Nvts9MUuGtDbsVVM7SHvzZ9N5nS6LF76ruQ5FDtdxjo",
  "key17": "3rH6uzCWgkJsgMGsm6DWRwiNE9WXcBhGe5Ajx6SnN2wdeNxLdixsxWz4WkWnA3X2XeXZM7RmjCabnvWMe3a4ENjY",
  "key18": "5jAaSMpRpBbkdYpFiPEhwE4AVPsx1wXJjFD6aYGEHFgbuhh92XXntcXCRLhvWgVNLKCDhXWWF8ZqYTBANE5KYwkY",
  "key19": "45n67k4DYiQxqccbUrEkJVCkW6Unu93JLhx3gwwxrU8BBqzx758B9YT18pS7VK8327mv8qndKLyoJmcGsvE3KBdn",
  "key20": "36Z3Gj8c3q9F1pjvewBqaDEpbAreShQo2a51j9Pfz5d33qwHuPvtk6hVEyugnSK9HvXVkqgZ73FK5ZWxrCT1YBL2",
  "key21": "dhjNLctfSKb5bKxsTvVU3XN46otKqS5jvb8fSbJCEYc5JarL2f6bw55QWoouWa8udo5q8bXUgd1FivuGRLfwzB6",
  "key22": "4doq5jf4Bo584w5oFLrxKuACGKaYeAf93Eps4JXesVj7nLkQ4QAJRNAA3ZESkhAx6SutC7AevsrMDJv1XgoZRpRE",
  "key23": "4ehtbN2gbGypAZVKjs3JC3iuLKKQFJECkaKbj9FNNgkZGgdWFNSme2xjisHk5HghbdFppuDF8hdcGftnB4yCoxc4",
  "key24": "RVRfANWpNPjUkXoyFMLGWKqGXC87NjatSBPs2htPB2RV8TTTptsQ7iDo4gc9xSFXFFSFsGWk1SvU9UcfHzHHNhJ",
  "key25": "bzzzoET3h9pFS1YbC2QcamntWxWuGB4FgbbrqK37UtRrY7G4XhX3M2FSRUs6ePR1Dq3Tubka3vjNSoboBmuKmzQ",
  "key26": "392hFANd19Y9EDpJDHyWwiToR2hvHPnVVhhu2zYDkmG2RjV45R4cHVrTfEJiGdcbqkTDq2xtiMSTBBzevceX9zPk",
  "key27": "wsyUfVdmXwfqAfQGrU2o8psU8hrT1QkUyj6siTq4zuYdM8UZ4f9qyYpgqqHG1ZwQHRraBnjwnrDg183oRm7u28Z",
  "key28": "3VmP6mkFsWXdcHpFH3v9DCvSzZkHFu3kNeaC3ykYJj8utSkyBTMWamGs77Xgj4SFhNgAkjeXNp3Lg3555Lxh7YBP",
  "key29": "VSHUyvaPAPCcTiKpMisPv5eQYUyiCBYec1qwmfWske5LqzH9vVqepd8wr7zd5VqkLBbR8v7qkmJWz46sKhy6iHJ",
  "key30": "KZ8Z5KZ8L1GY7XmhwvaPm6GT2HV19U2jBvEnG4qyxLKiXudRPXkhZ7v77GbdmfLtjzFaiNGKdtyLWM3vPSKQVxX",
  "key31": "44G6FpqL6VcyhihgFug75GRGgqPc3Jgu8GfupNYtdrqGJdpSkc3eAunPySELM7bkxi5xh36UYnY7jbgQ4doYLqwf",
  "key32": "5h7AuSheCw97tVnChgb8Zv8FUt93HMqmSw2cK9CMa7DB38R2kHXihh8qhV4DZ4SosP29n1xeEW99tTNRT8LHbQBx"
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
