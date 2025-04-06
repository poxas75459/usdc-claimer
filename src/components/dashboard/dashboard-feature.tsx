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
    "4jdrWPsFqZaM4fMWG2UstFmYUN37BzyJKPyWSokUVimNKPMQ1d4x9S9AxZUpEsbysq1rTTCZJG2MPBdEndz8AgHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4icDaeBVZLpKbtzfooy15ouURCnt5rcMUozzFgLRwCe1VMejBj7XqFujBoYe9WCesxn3dnSiLAjAdJ5pT6XFgdDd",
  "key1": "3SmWsLqGFhsatqSfbpxxZ43g7REewgaakeG8kD9vGJa31Z5VAHV5rfVv1JQxukQLiqCqWzF3hSueTTSv6brRifLE",
  "key2": "4pJs4yFkSkdMWrhNN552w4ZUM1gLwahBKw2jnSKSCnGCDszPnYCZ8huLLGpasuiukAt6vNJTLtKnYArCzK7qapWx",
  "key3": "3ZouPLzJ33hv3nNkbiDdaGGrJYESRGjbK2o4njS79VrdtUQkzYPiMMdPGBw3FXpVc9qyTGm24LEs2N7inVuuGrh9",
  "key4": "3WzpL9gWKmiXJ4HANGR35L6RmMps6kJsv4EjBaqMRPm4bNRWt8F3fEvmFaxs95moDi7hf1CkE1YjQ74YwXXgJZgn",
  "key5": "4mTLZFPqSnoZScvzpW6euEP2g1LHnQsDRus24mQ1oTXFaSZ4LKmUgePKqMo5yqLvxC7anjXUq5kDCGQ5taCUsPz4",
  "key6": "4iJVFdxxU5Yu1t2fcvEdsZXXVgqo8vAVj1X7s31Eu2AuHneefgm1HcUSJpPvDxTxhKoWpCCta1RX6bvt3GbJrLhZ",
  "key7": "4E1h1bjxukPWNav4G5p9MEnRfyhe9xNcmsGeABp9taw4qfCmXWLurckagRMdpG5pQqzhP4yfVDLx9SuFcBSM541P",
  "key8": "4px95eof8qeZKwVQBxR9Cw7d6769ZqfuRmmEGmfghvYLWYZbxaAQRHC3K6tDJCmQ1LuM2tGBd8cQYFiAcwYihmRE",
  "key9": "2PFEn3WzUKVSeWtQFHHdbdLFurRczKbycvoc3nqAw9DAwetugQK9jesYAY2bpos7BjoSY2jtDYMKyz9J8qoof7Ze",
  "key10": "557t3SVnqrJSuhiXKgJyyXQbjsv3e5yaaoBfVdjM3omRqbdPzNDSK33gtddjJSQNUqkXakvdNz65XKAerLu8gy5c",
  "key11": "2C8MDZNWQbw2YhGgcjRTE6PH6bwP3f4KgeUBN9Eq29v7g6xAKKfWsAxkiNMnfjemSwAytLvTLeHemjYECwmkxgjH",
  "key12": "25z2yy7DU2fU4h64kAbbP3oJy8cCAC7TKU5ZfbasPM3MewWJfJR9Bi3c5WVbeo9Nd4cYo7SNARLiXMGHw7x1gzjQ",
  "key13": "5aKHaub81sruWhAPL7VNdd8dqwAANGTgYETexoSyjrP1pYLhYXhJK6c66bx9H8KdVcLR3mHvok5mncaGipPXFAbD",
  "key14": "kL71pKD4fYXRoC1mQVUpBK4BKVowPbjSWkUsQ7Dmt3x87sDeKbQCseSGj1Jct6A7CV5GdfJHDYaDzYXLstsoGEC",
  "key15": "5ppDE88umfCLHTmPJMyWZ79y2VBomoLdSuMzqZDzd3A9oyofCBsXFm3puP7wm5euFmBM2bmRhyaCpDDLMD8A5cGh",
  "key16": "3rJA5jfE33pSuLZVoyCUkiNk3vvK23aSpex1ccaoxhr6WbwZob3jZgqkqa4Ea7JUp4AzsQ4evEjyFNXJ4uYg22Jk",
  "key17": "rwcp9modP139YAYGPYJJXvBqG3QWA4o2uAFpYTpzrK1dWZJRf9AqBprsjcfm1Gh5vY7t2djJTpBLHLkamG3vfjZ",
  "key18": "5vyiYpQLTD8QejksJPjTMR8TntUXTcht5sJscpLEsa5q8Aubi7xdP8U9VfhmZPYYHu1z7xoHXYrHRcB5xKdTszHC",
  "key19": "2REzsZeQYStCykroh92tCbkMnUvpUh842QT6TQAycPVMb6e9uCVhTnCM67QWbEzF1W9Y5HoDPfFJbc3fBbzUaxUC",
  "key20": "MwAL1DSg6c9aEAAFbRpMVZRzGgsFufRe3D2CtYHyBaesSvGoKsuk92huV3NJc3TEnSb5wprCkrMwfrVEBNsQYZF",
  "key21": "2AG8JJQzY7ZTGUERZDi4Aoad6Jydysb9EGnWkiGJuFWDaLc4deN7GxXxRCMNS4d6p7SzDwMXvw2Q9HjuBFzSXDSQ",
  "key22": "Ln1Bw65iswo2dmynySLaTBipBJAaPSzBziyvdTbYzMyK9yV5YLSAGUKqdfpCZ77wcdbFHR6Zs8SXpXc5VqXnYZa",
  "key23": "5PAXgNanwi1hVstCZn56mCJZteGcfHefMjpuQPcMTkfeiqjnPHh7tvb2TiPavhyzZxFXUv1B7igoNnDjVEWmzns2",
  "key24": "67CzS2pDFJaFeSTNYEt3uxiAai2Z8UzDdh9dYdzVkCZcZBus2FHCweHTex6ZB4jeaSDCgVNyVEzVVhWAgMWABRms"
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
