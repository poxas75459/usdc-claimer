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
    "5tgt4x74E2cTBbumoMQ57ausom2B3jsyeKARp8Gq4pXv3gpL9xzk9UuU5QRJGiJUiDuBZNp5SSu3nuE7kNeuFPVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qerg26d3p6KiP4EYg9FJTtmg3u8PB2GLCTcRisEn81VxEPTSuhkL3mYCZ62gRSAbqztnyEGT6zD8o7cYT4kac7e",
  "key1": "4znJbNMeHqEYEKBxzm3Y4SMt2umjoocy8q7ykdKMuY6RiMYWwLgCbu6qT5yhPJD1Bt6RD4QTdBP7yX6Ya8aPf39A",
  "key2": "69tBAsvfTP3erzmRQry7SCvuu947eEr5trJu5Sgk1hQggHAogFR5CHZBnLSqf9rxX4eFZjfC6Rb7rXTpyyQ3QKq",
  "key3": "2qj85MeMfjHj43idM8UV1BabrVGbdwSNFmVXQFREWTPfDBrjYVrqtxT2e9fUZvUJPo5qV7X8H16BnRZfFGeweZJw",
  "key4": "3R5Gcx1sFVcVzjRTpMEHwtVGNmLQ2Avtkq1MzhE1xE4u2HyAGr8TSLaeWgPEYLxst77jrBJpejejpt4p9AAEqo3g",
  "key5": "2461NTQEL44EutS2VvceqxuDgSt6F1ziQz5Y9ShmWbhGQe55p4fLZ4ebAwLLA473LyBoSW3KteBsYE3tMkBq9uTh",
  "key6": "4V4zqq2Uu9Pyiu5i4ciXgQ7c93xiMRf4zWJ6HDN6DG2x2YsAZsMY1Wmrhj6Y3oWYZgVcHcxqBUH2zJRqiPXekSyx",
  "key7": "4uJz5Uj3bAyn8LPAE64NEhY3UQnUZQ6pZ3yMftfda7VyMVoSUDwoxZrKrkMuLLJtuw8zCaSGQyuEtWD9KAumikz5",
  "key8": "3om1iWhHi7EXApTFC53FUHNUmWuSHFgn4oELy975gpMuyr64Mx5FLU4biKyzC7fLQV1FpSRBeFCywPEn31EAz3o",
  "key9": "5VDLP5UDQuzbzLU6NrsEmVc9ZPvGcN9mjsCuxDqvpEpbustqGCRKT9ywDqTjKdGcnSptyA2p6pQqJDL8P5T4S2ys",
  "key10": "3mGEKQD2xvpddvoK2PaaBz631qPPGeNRcRuqLatcd2DBNuiZun6FsstqCr4Y4o5h8arG3NpesaLLEFK1CXYX2urJ",
  "key11": "59ob68TSxUV4bx8udccSmQ81vgJXtQXicemxfvw4h4t1biqi8m9esf1jQHyaCTUrSv5aeVecgGWSwKEfJ6XGnXQX",
  "key12": "2QxaxEiRMtUMgPAnrTfJYziJKydpJTKo8S9XSU8KasSYGe589iveJUWkM1Us5BMLnuqk1uhzPvx4gKPXfAK22dAL",
  "key13": "3N6nLYuowqPKpNor8DPhKEhPJSVT9oC8Gh3kgdRKJaAxA8dTatLtSFVC2Hwh6HgfavvSKWfPREEe4nmC7UapTJ8E",
  "key14": "B3t5bycHE9fYe1PsMTLockgENXayhGGAJkNbk26KK2Anbyab9CL6SnrC7178rkuiTFxSQJb6i2e7cdQeaDiGMF3",
  "key15": "5vLN2EQHumVuw87fnxZWzHfirZto5ggWmhsqyM5qL2M9EHvxgQw9FKop5pLNBYyR2YJzx9RzqCDxjFM7zbM2htrZ",
  "key16": "4KTUqam3CXnEgumQyMVHCacxxpunPvcnXN2bjV5rtckR6KQogsgTXfwq7KWqeZuHSd2KSpsZDNy7hmFYGLzPvZuB",
  "key17": "5Bytu1Hbd4aBjjFyQeSi3hq6Rm4MsGpAWLETgX2sy6o6UuEkAAZTtFVK4qiz9xhpipHVup26HvVTxgGqN2K7HohU",
  "key18": "2U9NiGh3Cy4fUvQhv91idDQAnFSfsqpJZn3QqvLD1WVS4Az3W3kJncriuVz4RFL5NA2reBReWyWmhSiTFUymrf5d",
  "key19": "3SZGGna9EdgKnMdhWqKMg9MukzPrD2acr5yQSk7ioa71RqdnXFFh4oZBicHP9Cw37jd7xQCkFXfQ7ihX8LSNc9Xe",
  "key20": "3xpAHxtAmzmcUunKufoaQXEPs3sPrW8hdDr6VAW1XTkQmj8yJqv5rtDPsLx2E8JJPL5ScWD3nvf483PV2ganpZj7",
  "key21": "3XvLcu166fYYp4XCGQoTGp9qVe3yfJN7ZwSRbGXEEphWzNQVPLsguP1dtRcTwokGNDvZVDwQuam2KMmxgXU2eg8B",
  "key22": "2WE3bnkkE5ppPGcUTo99x7xs3M7pskYGd395iLDGmh5afbiJCrh1cHtnbgfMjVhLfny7V2qosimwbwjMeXBtW4fd",
  "key23": "ZfgCabvHeZWFukUoG7WehxWCx4YrAYf7szQGqxSDTsQXbL8iY3vGBwKgsFbpszhSNZXAR1C3nXimJc2AkCSmgkJ",
  "key24": "jTvNinCqfZP6SrzYTnpdBPNs4cNkhHXwUSa2TrxRdBdUG9Trd6oRxTFqyWwQ9EBNAGvypnssJpvDAcrxKhfp8ge",
  "key25": "31QWQA1Q9ToFF6kFjq3vtLbf4zXxWwLwna3V1Q3Spbt4ow28t6HyT4Bqvcs1A61woFqhKYi7sUdnD7EUZuLe57jn",
  "key26": "3JBsm7c5cj4tqD39oNGSgrh5mThYNWqxhGWjhEDECYbQ2kmndFU9PonfTbqmKKat619dQptMdshcote5KfjwyTpR",
  "key27": "2kcT5vvvYTbxRgP4UYgiJKuYM1ARyHknn5M4vm6M14T8CCEyoxVMGeFX9W6PwyoC6Cjep77e2gTt4mAnXyU3j6uA",
  "key28": "39U1p8R2mpJSXp3AQzGiBZ7Df9tT7PJagYuJqBSUWMDoG2Tc7PwqiveR8Kcsq4BacHR6L4PZ51SQr7SSMJnNT3FX"
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
