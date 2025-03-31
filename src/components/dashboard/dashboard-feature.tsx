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
    "33xg3NyUnWNaygQ1Cgpj62K7SQoo5M7cMdwLwWLhuUgXQyx3ZTtH3TkHgQEwZEZX2F2aFR27tukLgAdC7khmBoMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49vqH8i7heQCCJ6ofywd2Z45kAJyeSMiF48tda2jEVF7QQUpdb1HvBho1CEdA7tuG6UCcH5bD4LetH3kSU7R3J3u",
  "key1": "3DLKbK7QKV28xYSiCHmTiUjQnkPcUj5EfZiFHwZU7UAFuFS11Kr8ansF38MiyMqDDhBr7s2dvTcAZALP8vDJTUgP",
  "key2": "4fxFybdXwcR6NA7va6X44US6r247e34qaDkVC7xAxWEmBE2cu6bog59QqbE2wJCHhhSRYrtVqqUXuDXVf22XQd2x",
  "key3": "pE6BUGBy8WqGzQcNMprzPqiTUx5EULoyPrVRueMCRyWM9VewWyKNpPRwmJEqW887QHNtqvEJPgBNeZkkc6RUCvW",
  "key4": "JXXKU28AdBNh9sgrNuNeBBJu2JhoL7AMN4VHEERHX1bbUAKkd2M3dEtMV58DVch1zqxpafqdwNetFaSQp53xPAc",
  "key5": "54xnNqGg1FbDiRdrHfqg1niMKqya5Qh1KJFZ1rqbBwAQLGcW3TG79mKBbGSnw4RUWqx5TeZqqJ3vrFyBqJfeoEtp",
  "key6": "5vH7nkMv99xPZTDh3vzPEqe2cG4JnCUGbULTwKvWVLZuiMVCw8oiwDDsryLWts7dSQbd2qL5AbyMFidCgEhrVTa9",
  "key7": "4GKhLN74ArQK6Y2EuDVPXzuKim9rfxFtecxXm5TcyttFJYr4WCkisaYnbj4Kf2pdSZ271RP2oecAEJL8aKYxK1CJ",
  "key8": "5tL9MfW4oScgUMZ1qJ8zKyzWs1N8JbNkpfmCuNnHpFYiZxehTjzTqNzMYdabpfJDJVi6CnbGkZwrHcE1JngkgQKy",
  "key9": "3ZstJ295QaGPQTzmEmxvE9KZcBHjZoqSCnpv5GHhhMfnsmEqoBG7pEAKf5sEZ3Wiy16eJGgrYv3zLnqVirhJ4j5z",
  "key10": "64p5GpGnA59Ao9DAyC9CHYgV8SoATLzVZAijcWY1n8nXYznmV4JBX5MzkVhpBWQNNV9Bzjd7cj7yEoVkKotNP9Fz",
  "key11": "312TVaDwpXLGbMfUiwTgCsnLuQa2gTdNmhmxKmG65SbPbwQdrXjdyRQsjh22maDJD4yKuqSUYp3At9Rouu6Sdhmp",
  "key12": "3ikHuzA3SA8fL8zcmL1U1Zbz2qvDkBnx1wZAYCw4jn7udPwoMzP1Sh8AHiNR6Z8DW1owPqseNbo3v9xiKmvuYPrc",
  "key13": "4DQpsDvM8av3iLthSXygsmvWR6E82c78jC962f9cpSNGm9PLZ91B5dbizWrSn93n5onP6CsYFAPhm2gzJBQSXc9g",
  "key14": "EiPUAEJUebNGLyVmbLiFHxb4MHAryKUygzxTH2ayyGpxiapG8RnXQ3WhYW3Xd4bSxib4KwNYvHhb1g46HjaBS12",
  "key15": "5aQpgfr4e8D6929c9vYk8JuS9RsF249AMgBZU5v4nenDdTZHBRDYMG9U8g8zEjwFbsipmuYj7ieqKyqLv2Vdx6CC",
  "key16": "3PU5jSAJC6iGsNijCjGZAFXw2kqqAfHvvvHnAk3ZfEyTGhxQ5sRBPGfwUDfS3HBejLHPM8NJKZDqNZXktCkX3QFh",
  "key17": "5nD6TkEpRYZPFRQqWSTX1iAoDc6ke1Vcfw4Ty7svz5MQfsS3KYb69a9DfuNn2tokytxqPVrz1rviCjAnbuxbFB9b",
  "key18": "4DWpXDjx7U1TP6FmKnUEZYJPTJGAjih3GRiCR21inRp5WMeo7Nk7dD7d1Ffxxks4hW5YjEEEhnXqVyfe4ZLqTZBs",
  "key19": "2uCAZCQ1GoXojjvWfhrAKcpsSrjkU7cXs7ZQWg2gA2ETMhjJZ3bBNQ4qqVJu7yA5KmupCW3uJgPv4jjmLPswnX3E",
  "key20": "45ysp1i2JqMURqmKphRFqnwKi6hNy7bQWs93XhiHwjvaNWHq51PL5eb9aMxd6Phy8yh4FLCf7CTTENchqghZkubK",
  "key21": "4LWdB29iDtwBcqp6JNX5i7UEd5Q29mZEsAeBukLiXVqLNFB9Z2e8S6ZL3EMjRZn3ZFDkUvLwDwDFoGuqFpRXcMP6",
  "key22": "5S725zA4kCcHkG4YBX5ARajsD321o2WLvQnhcgR5fTsC8MmxEGBvEsCvwAEM4uCzdz1NaijALhyY9jRrdu3tdE5N",
  "key23": "37QLHDrxnHvo4xnMQncztgKFNP3J9kr1thPh8wUHAUpNFrZvccTcJ7MdjYJpzSAaqpwhvd6BB7JL2G6ykuRruX4B",
  "key24": "2VhwMeKS4H1bLuPf6vyNvz9n9RPXXzgAEq6bPTUU2dcVcT1ZCrhJg2CdGZEMnac3mC2yUfEVTxNWZ6utzT4ho9yJ",
  "key25": "3Z1xYS2eyMDucd9b6de4C56JTdcBFi1QaYMvMKmbkjwQhrUMwe5ABwxrhRJMRdNPqjgfxgRT8Yiy2u4JeJBLxUzs",
  "key26": "465fQaKKWzaWwWAnmXHbEwj7f9PjrXShh2kBdA1LoD7EVckx1azmzxnRrQ35kXgNh5K61QVZ3iFSkrfuwQd7ERFK",
  "key27": "5rQL8q4hfQ6H8QQa4MDhzFJFq9sgUCFnfcQ1HKQDWJz9D3myB8ziQAU5swycuEAEimWDFrebEr4CtBq2Q7cvnZwt",
  "key28": "2RQpthKtZGUXSKrgPBvn5xTxjkc8Fe3vQ8fNficJy2D4m4tY6cuEh8a1JQHcrC8ydxCoFLncfdueA5xbg3TUfgP",
  "key29": "2DfjWXRpsgnS2aDqYt3dX8Pe4ykdysoUjf9pfhc42ivabZ6EMWQPD1b3tqWnvCKzHnLUBsK8jBhLtFqmSC2sG2b9",
  "key30": "5qoXCpdV2tLAiaGyrKJaAUEDVsCF2PJbMX45RQ2GaTADYMCdhj621WmivL31duRibgChu1a44GeytFasA9XZibYn"
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
