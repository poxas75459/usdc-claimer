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
    "2NnAVUzRxVMWcxpHCkJEFHXfY5smp6UeKcWnEYdqiB6zg3Zscg8ZyYU4vs5u1inNf4VZm9wKkhZCaf6DybPuFPNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23of4117kiS2aoeYArNhQFwguJGccnT6wbUWTcrwfW4YEtpXQd3DA1wfpMgjbSCKnhYVoQjQjq8SBToEAfz3sdMa",
  "key1": "pgkTPq5mzYDKpfoAj7igfVb8xM89X5mgc4CdXtpRnWSsVG2iv8zgWSa7w6corxw2e3eUXfRSXhK518HVKmSvfMM",
  "key2": "44WBFQHDjStizRv8UjYq6wsz2rEFw9HR5QirqFsq9ARh6PqJLnn5D617sKxVmPbeanSrqkFJDinPJgzBidvmomZx",
  "key3": "3ZrWjZzh2kZXCUnzct7j56HZDDeTP1ZA5dZkQcjwNE1tBey41XjaXAAWN8yVRguWhrvgd9oFL7kQsyFHsAeFRHQk",
  "key4": "5q8i4vSEgDKhSF8zxiQaTXF2cmZxrPKMsNd8YiiwJPmEV56kraCitDwEQTTQkdWTLdyZ2fzDyHRMiHaZRtE1rovF",
  "key5": "5eUxEHs8DsAq69QcvcT1MYUjc98D3xQfmfdZRTfAdqPsSRHXNbJ4aEwQSAAfLooLmmVUd5pr6qrhAJ8xssf5xVAh",
  "key6": "3Gh7AqbjWoQftAgkyjgeuPwjGUEPTDz4keFkf2eC6o6zJPcZo9zX74ZZYUMiUmi6czQqGQzdfU63JhDBLyjf82eR",
  "key7": "5Dn7acGkSuss8UWVabow8BdY8wf4DFHnKyyYh3fLdhYg4fBhyf1cKfhizyS7TTu8CsYCf9oUhVgucfGDi2JAAVnV",
  "key8": "KF5iccnUpjnRH6Vyz19Hc9qqimDNQDxfRws21fWXRQ7AN8Zg8GTev2sZBM7f1pCdTdP2NYmZBdJxrrKfJr48mhN",
  "key9": "3tFpKddJU7gduos2zhHAUvH2w9cX47P3FNkdBVYp8KrNvsUDUVsU13bkqK2tJsM6ou1J74XHUisNMtW58WPDZWtH",
  "key10": "DzwcyxTiV6ME5kaN2tiqqMRsyLcQukyrVNFrPEvpGwUVpwkBtKnuo7UJv4DTPKqC1Svqs4s4Lm7yA5c8vTjrahi",
  "key11": "5V95RKnVw3EJafxqJ5Aw7L7aQYgxufQXyCvk36AtHZ1SfH1StV6Q7K7Xi11GhxWCqYhN5sCD4GrWZpkGuVDu794T",
  "key12": "JYUrbpENct6sPTHQNES2fDXDctTbQGdSS9DQ2rosrK6fKwH1tPr6SgUPg4XbvRbWf3CcBp5SmRCn9QTwSa74cN5",
  "key13": "3pdUqCGEiUVHZ6z2WfdHiJbncVDuvfz1FqHmDtdwG4LetVYUER7nm2fMRX5iE83nUsfkKtEiCB6ZBLejCe7n2C3d",
  "key14": "5hhuXJYVbsWCgyZoYxvgXD21bjKQfnQgnpd1en67gYtcEPw8pFUvQx71TJK8nJEnhzh6qP5o2wsgDidHVbBroRu2",
  "key15": "3saNmKg7YJPWuLWv7GJaAEBQ3rMsvGjm2sTLkzA7NFFC6oDNNFupQqoQeyCLZJFKCmMQWKbK1aECdJWEXe5Rx9qD",
  "key16": "47CPWsY9YnpDW8DdzZb85H3VCGEHZQK5MosXCSAQ73izoRTZ7sbfFjHTxMYiw7FxvfYa3MPb5NwudJfdw7GisdBy",
  "key17": "3zEetYpqyAQVJLXv38RNduM7bRDv3QqiZNwuzCBE43C7qWWCWzZsTHKgzN8QSA8ehH62upn5y3bo8gogG3LJpEJD",
  "key18": "4m3SM7ZMNL73rW3fRnLLMRHFp48GH99TKcEzSkePdtTRrZR2UerJdNDBzF3PJrfgwKtGzkx1q4rFVQZvNRpu1RHh",
  "key19": "5jwiRoStgYQZC21ZDVjXNt5o5ztSUDQPVbwZ9WmFobAHfUtc1WBToLSdCPPNmXmTRbXFuYsUHe45fcjdXzGVmgDu",
  "key20": "N1dLLLaWczY3RtG3WCk5gHt52pgC6YdQx65fDkRhF6wxZwh55n2iPZEjhm9dxsCftHC41xMK5kkoXEHGPYbjhTt",
  "key21": "FGU9zCBHeCtCUpbDkLUziso8kvZZK7UVcUmfaj2NJMzPH11ds6ifjGtDv33eD9NF5Z17tY1eutHd1GmnBhg1ejo",
  "key22": "4FUrLe7y1JAr7mV9wDRTVALRuZTzKNfADtFdrsXz9hYRWatu7oVL769x1PfUk8DbZAmjgDChEZjxt2hKTy6HYdjU",
  "key23": "2ubzjEKudM3nQSFNN5aFDxmX84weiQMZ8YxDiCcEdg5SLsWXuHaSfYotunxp4dqnKDB1KgJZj97r1Co4EhMRpBAa",
  "key24": "3uUVjossvwL34tqhkdLAsiravkVTDLEktD3o4YTjYH1KrpZR1thgFGRBwWpFohDpaGtEAWJca7vWNeGsb4NVjPyU",
  "key25": "3tQGfiocqYdAzQuxtgp6DRW5hMcsETG3SJM1EBEKacVmX4rFHAvTWeog3aDx1pvGAzYpoWkXZKsbfTKcSYELrZg8",
  "key26": "5SH4K9n1KEta8DvkZQDzFBEApVuXDoab36wZYUruLAgCBQRp1dLj5DYsqbzvhnyzvqJ6udk1NxcE6S33xrux6usu"
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
