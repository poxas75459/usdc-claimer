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
    "433Bs3sGihUVHCHFguDy6dET9WPpZUUUDmm8EB8BWtuyxmvqHY6qymyBBb8U2zdX3Q1EeqE1SKaaRx4FfmVWuDsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zCuzyAkRDGcBCiEHjmQWsFP9RmJZGudLPKeqy6BnynxShg6Yn7HK67at1goHdtoh1kM7UKizp8t8aXQCLpUWH3P",
  "key1": "vSoZYeK1qsBPmtGKTnzF3iL5umaFSasn7RU6vrrXY8TNn3Qn3hjNQE45m3NbYGmt7dwu82FFdJbJXHhLMYn86Hb",
  "key2": "5mm5HDiWV3wWfjXjNnc8r68P2CTJmR3wHvnU8Fxws88LQ3UHJM5DBVac8oDs4gL2KkL1rCnXpE6xQ3uz2CiTrZy4",
  "key3": "4BeiKKmKjjEpn9STwFrncQtBXerFDfXMiRZNGLM7ooMQvDfxpUHKkxGEz9Zb3dDCkm1Y7jSxFMp3QHfNY3zWh9SX",
  "key4": "5895NBzBzNf1N7uWSbexcoCJjwvunTfB4hqiXBdC95svbJRy5mQjUyw5FqdBhVrm2LdnRCa59P51X3weZbYaphsL",
  "key5": "3h72iY2FNiT4s937WWveUBACDt7jvhGGb1nqr3CB9wBaosVpdmVFx3vmeDQYtUY45bWLxAvFyVLtrodAE6x1a7j8",
  "key6": "65wazLrez2Z8jfTGkskfT3cEu49hT7Up1Vww4fNXkuCPn1DP22sMD7etoGumLujigyQLenRjGpGbjuhbHrubtXTy",
  "key7": "42hbYx3ntbkeRZRZhWTNssCuf4uJV5MfWSgNoGiMEsaxJvQdvkF4MBiSXnaEcP4jKy5qmzmgvkyp9qV3aT3CQDaE",
  "key8": "3Pzjhi2GXnLUxHHACShsBEaA5QVUFq5kCXCniYP7ULoL3WM1BcMnKt4HsYWUKJkgvRSdJonDyb2kRjvQuB7d2eJT",
  "key9": "4NMSZEuxS9Dqhk51mCN1rq3VqH5vfej7Az8HvAxgnyWiPECymaTR1DWJufpNLW6Lo1p37SzByLSo9rdJHpDJ4MHU",
  "key10": "21phyC1sVLbeVAF9HeLFnwZwSFcGkfJmwpcoFi9zDHgz9vPo4pYCvPcfMcTx5HH8A9UW2cCmCPWAYVVoKFjPPZyj",
  "key11": "56QWjrbnqPnr5Kq3Z86P9PW1RR8ipnCiScM8r5BBurCVJd8svKkpF4PgacemgQkQKkGea7cLQn4rPGKKSMhqU8jn",
  "key12": "5p1espzWbtzurXyccNMvym7qTazUiLUCka48ZSvGpDxtUkXt58RsVg74ryeNPfwpdGSbNF8JUCrqwj7DwpatfgaX",
  "key13": "3AUwnhs9Qxdd8T3ThjpF1RKHYSQohKsBDdNM88yC43oDKgAm65rZAT4oJ5Gi78hhquPYCcHfs7DmWQNRm2WVtmUf",
  "key14": "4ux3j8qAmtdJXY1iLMEnLe5EF1uomcJdwviyznunYAKf88eypA8y45SDYMFAJaHvEdFwG8w8XmcS9BwutWsJwYUM",
  "key15": "4CqVjFPpm5sAWBfGVnMkxwbFYFdbc5Dr9jsAA5HZHzwqmFQbQbjNuEmJs7sW6oxCR1Dquo2FtwXufCa9qr4Kuftm",
  "key16": "21UifNgGddhoJb3mNQPdJy7mPtyHEc7VmVfk9hJuLb3frFDeSYL6ZEFNApwQitbuuNX7Qf5Gaz7MtWp9Q4uaFvsX",
  "key17": "36ZJn6dLqff35gx95vJAomPntwF4PNLgB43EwszdCJYVGPMnF9gzTWt2NQXjLdN4k7GDFj46DzuVjXbU8MWMceUp",
  "key18": "67GPH3c32E6ttWHPMYcWNUhapvLxSf1sGrrThZBwzDyxVbuCYii6KBXHwoi7o6eHgARr3BGAp5nsmdrwwyknY64W",
  "key19": "2vqKJaVVbm2J6dY5AkRRFsuUqf55aEWWqz5bjxX3F5yr1wfYacSSY53jAe3YKVP8WsxkuUPZh1unstdZboG934sE",
  "key20": "2t8zjbVFMcmt5HdoEtyRujzv4rQcsfneGrN8qDAdWUfpBVboHx2QTgwoGbUVPrrNzg6CdbXGSLqXvkjhMfHuwNY4",
  "key21": "55LfndNZj5EptmhSLvHovQbGg4WRDTc9JQJR7MALxvejd5XkDcBSCJnWtP6Uk3ysXkEaoLvbZLXYgUkGzCzQn7Ww",
  "key22": "5xNvS528hU5uJKDBF1U7fgskUpynuzB32DF2PtR4edZRNrCYAZq1nnNfhRjH9r5rMtAAU7U1CDbLy7doWDu3ZhKC",
  "key23": "3iBgEwA4TU1UJ5nZeZ19CSyh2FDGPiorFYtpYsaV4tZMLaqvTL9iP4L8za7CEvDseB9AL4SKP5dUYMBbLd1C1cEc",
  "key24": "4JixKhokGZfkAgzg3o2voQ3LYCkuAp1iM4nynjwnD2Pe8oYi8ixhY7TAfKREpXSx1rcAiHLqnEzTBR4zRHjbKq6H",
  "key25": "2mQoTHKpWADgi2TUEKDetB4iiF1Rh6MbQmsXstWQUohs6sVTbK8UKY7FMXLUH9TF4VYkGyFLqxR51jMuAJKSKf9U"
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
