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
    "3S4NBZZB7x1MPcjQ8Yk41razXJiHr7MmrN2gwxq6RhRh8PgrbH1DAecb33U8WxPe4vcNxBZaGJsnx2Cx5fDZumzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27gCdQUiQNR8HuLoEjQtk5AYybwRBaWsGCS73JQfSx6LmF5fmpkuhvBkYtpMhKuJU4oRuupZgYqLnA5Ba3J44FCL",
  "key1": "2KG8yATjWaiTzNo1xQF5md18CaC3TEGBGRAYMEu3uhafHg8LvRDwzBV4HWq9pDXVDgiuqwnywCpMg8Q5vateFKXL",
  "key2": "3b6zfWiNfyHbMVc42wPRdW3dcGLirtuyaP4Hzhfu8U26rFw75i6UHMjPoENXMhRPBn8n7mX4Cn4Xnkus2hUnu41B",
  "key3": "4wQgEprdvDmcaPg1dMEQ85StXqKV5W4w8DT5MDPDs44AGrgrnSiVpg4sB1UKj8D5dtXNTjb7ABf31WRDbQPyKCWU",
  "key4": "5H7mH64VoaVa7AGjUpxq6qujJnXHfDosrqMEhrx51njkBZM2sx1ciQ8ZAQvfzZcRDRGMjZ8Q7crSgXWcUZA8SL5A",
  "key5": "319tLYdSscvcNYSsjd53VRKYfoDwSp1oeav1JbNGqkjC69fk45GhGfJvHsUGHqpWZsQMqsXewee6LrYh47Cdhoxz",
  "key6": "5xZ1WrCnMy8jZx4UsqgaXN5Gv6UcQavMN6TnyVnR2wCvKM5nz31Enag3o15pZH3JHK7tbJz6yQPVurs17fAyqrDB",
  "key7": "WehXPk5ot4yjFtdS68tToDJS9YMXyigbBkjz5UZBVy4UQ7A7gWSLMnBAAnKexTV6xJNqCq1CcmMEgLmaWGNk7kK",
  "key8": "3cArtUMCyrmZ1cRA9aT8zNwQi6sfvZoZbZ7dqAKdrZYX4QyqG5ahnhuonzM8MsviNuC8ZH8YW7QJSEgYuN45hk89",
  "key9": "3EDNfV2gwQAHb9QvSrdpgFNr3gWGfzFTK1S6NGk7Mj1GeqRuGqjoH7DEFWeAe9jdbgcECBzBCR2iazReGwuNEcBv",
  "key10": "3pW363m1p26mvx9SHZraMdka5AJG8reRKszHh4AJkhDB8cdZweSEtTMPXWwj1Ptatim1arnX7fbH5qM83KAqSt4h",
  "key11": "36yVtTDJzuw6LFFNtvZGXbhMsHsqdCk1Nc5ceLf9bnbpfuY4mYYAo52QrhgeEDAC8Fk5i4LqPJ7BpvmZ5P19aeEF",
  "key12": "tGkH3aeWEYcn2mSbjhjvC47oJRsbNdU6hg94EB39CWQKih3Xj2zqxckCGmeYSB8Vvw68VjsMpobvtZCq8kJbGSS",
  "key13": "YTzaXN7cnpPceJtPzThmpwsSU5Y1KbV3Sa6KvBpCBbans2Cs32V4mwHWyB7uq5ehuFiiCzjfcsmmkyMPW3rRBEB",
  "key14": "2hUU2e57HQczN26w433Q7rFgHUMJCWomDJKktiX6KbhrNqM9btxQuGVaExQKP3LqGa1GjTqxpHgG4dM1LgVTgAk6",
  "key15": "7AjjYjXYE3Xmz4uRCbveSrxn7LjAZ1XwTn2wCNok73o8RxSoEJgoqWrGvBbirEy3CJDLzHYuudoUHqS4L613cz9",
  "key16": "xZwbJgCApXwoBNuJTykLTYdwebdHcJnMWtivSkH19QbnCSAxgpxXk6MNNg9gqL8URtnvKpsdh6TayRWRsUdLCKA",
  "key17": "2KjamaT5RCNq7YTapdTBqEa9baXoQtXVtB4argeFd2BGocP2K4gmEwHRToE99mBrVtHA8BMa7E7KxvggR3uvUUXG",
  "key18": "2sczaw7naCfNh3dtxvfSXD1YwbKYqtr4PNRTMibchc19sNiizjYePGk3WYdwQeWPDjnWTpmAr39SZbKoeY3XGoMF",
  "key19": "2ksH3LmQxp6h1Mp1qJWwxJxyRpjnfXpXe6gerNAZ594YiY39ndvctXumeg1RhmdiuFKgC9c5z8esRxcGRUBRrE1Z",
  "key20": "5qGAFTxCCNkhpZkzhnwexUUf64GfukmvJ1CEB5cTzqqHLZz9HY9Wj69bADV8J7Bsx61HiK3JwwMVUhf26CPdN1ai",
  "key21": "2EwdU4V8BgMiBPCfRrLGdpgF8VpHXY4SFMhGtERFXyMwTcnbJubvCruGFwXTs25HTz8RWHTpEkr5atCJ4V1aGY7w",
  "key22": "4QGVXUq3kEo1mtqRSEEALmVkgQoMwMtxTeusGACWt4U5RTgVFZ4F7eD8cx9jrdmReTSy4NgY2jFJxo3wWTFz4Gjc",
  "key23": "4UBK7oKYeuD9hb91HthC7tHadUi7BiyQo93yRbAHeL2pwTRyuFyPCfLjfY3KqsmvepSEh5fEhuDJz3KcGrXErTt2",
  "key24": "d9ZNwtoRJ88rkSNc2mscHDwgkj8dVE2YW7gccS9ghRqnVYvpXWtU83KKUBiKaLiAiFPqmnKRFYbBpmHnC2Heg3e",
  "key25": "5khcRcbJMcB1qKz84X4SdQaCMiELPhWEUTTeoTaLsCCjoJXxKjRBtXnSYCMaqvEdKEhaRBi9fmUvsiCGsX9Jz8oA",
  "key26": "fyUesKn2mtFzGaRAUixhyv4XSFTvdaQx87YTUKiLJ2FVE5iAVQjk6rr6SAsqtrf2zTrTZYWNCA9jVhdkdhMACpy",
  "key27": "4RAmJh2nLx57cid7iNXuMEqYn6sM8EgFkpo1BiatidzSBWk8ReDx7k3vqY7w1XK7jNyfXKHxPWvPqL92rapf4QJM",
  "key28": "31GNeutoHpa87vhQVy4ZDpGV4HZk3Vh7jnBNGrnFiVszZqXtAqohmahWf8iX1rCEGKvPdYEvg1aE736mFjJi1LQy"
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
