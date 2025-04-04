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
    "5ooibJjrPxmX2YmSXxcx9Q9Lfujo4Ssu9uw5VxiwT1c7ypLdK83EQdUarRQR6vJgmWF3da7oybfA6nAQQZUvJNMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44xeVEDXzGZUERivsQgPFDXevT1WTwpes7rrnAkLoFUcQqQxhRd1DDb8bUA8zX4kap1pYYTHuXL56V7fUPkGk99D",
  "key1": "2Mqf6TMW9k3dktc3Rw5hSmKm5T4tvBcomMk29bmux9ZDqS44XiCww3sDcT4SD2KiuYnehm7ZQGyX4HrAcJ8Kp56X",
  "key2": "3HMrtYczjLjCpsr1MN4SDUGA916isw4P7CqJ9Tp3CUntsUtytK2PZoDBBYZbsJv99Sckd7PKvhSWhksEfDznFUoM",
  "key3": "2489STRJ6PMDG41rfcUipKBHRaME2tCHRGSVovsdb1KXGi7ZafSm7AcbiUxkLzbpZyKFmGxFHAW6kFrMATQagYf9",
  "key4": "3zPATTrLcjhuwCUZt6LtEvvUCFrRBarn4L7t7LqYkugpSc2vJhcBTMMGupRUiKTcQNM23rRoyycS2oPnUQDNZYqp",
  "key5": "26YMNjZecQsaaB7MUUaGp8QJ6jPw2Gz9qX2bf41czHjGieBvuBPMwB6muakeTWyEYrLUMrXiSBURiu55EUeyyVJF",
  "key6": "2ucJjSdQGTksHqqhhK4uhaLudU84UgNUUVUJP5Ut9tY8qdp4GQEVoFyuJ5ZM8dELLAmzbt1qWs5dFEdFJwKnFScs",
  "key7": "MxghSPRLhoY8N17M1eJUoX5ETzQExQvzZPdn7DQwZ5ZF57iPW1nHwvqw2bdNm1imydLNKM2HgvGjSmhQD33M5o7",
  "key8": "cE9trWftiXiSuCVUX1iPSJKY64UeDY8EsKN7MmXFxUFJ57WAi7Z2rNMbWfyein3hGZtosc4viouNVhkd8bSnyjK",
  "key9": "4ToMWuejUEUYH6CzB79TsTf5Nar9RhhwyDVQJjKVtaJZ6mGDqb3GanZYZaLEoorDBVhtcDtSQURXCNLG1z7JeRMT",
  "key10": "3CHQZnaPaANP2W5hmT3QHcSiBuUf8wwWu2rbG4rWn7Q8Fgcfr7RiyYt186DYjQfcpWBPqB6VythdFVVgXh42huG1",
  "key11": "2tdZ8yExRPAJfWzXoxLNAWD4f7pqm43ocqL9FbgnChXMiSHjNwJjHs1HkJWa2zdW9TTwt3CJC3MAakYugCBvMuTv",
  "key12": "4gukJ7kV7Ws2pgoo2hiqrBK5v6Evr8RhyajVDbJCxG1ksHJrWgawjCgGXd2B94S4jQHEkMcBb42ntu4Ej7BSGyW4",
  "key13": "rS6E4nhUdNMiRhTo16xSmFZyvyXkFhEnaAsvwQKjq1U3Q1Uv7Nrj8dy15AoS4R7DgCe9zqCF7Hq6KHNcq4aiPuu",
  "key14": "22946c8PWWddNTYkBcQuJ6Qv3374u2qgHTPHvNN6HhN5ftKxDUKuCYCUY2NjXNq4SaiRkFzyXhzW4EbwS3rEPpgk",
  "key15": "27XP4eZmuYvvJr7Ky3ySxTmaW8gFutAAmusnFjnXoMkXLinD4Qp1BKppMghGeC7Qdkb37jrdg9DDoWPGag1Z5EyR",
  "key16": "3S2Liq262G6wCtEwe5jskVNReLzcm5zcV2X17u4NZPB9D3MWa8YwbBZGJ6UHQaA1JPGpkYhnLsWqm5fYHCNts7wZ",
  "key17": "3PbNQ3o8wQLKA3i3F8JEziu7eHhF3UkHxeQrXh9H1EbZGLcFeFm15y4mWm9N6v8AANNkU9t7oh9NES2c8dkF15yw",
  "key18": "5aCyAUeekw56ctQ4e24oyqRnTvshueTrhvkmsawornxEN4qrfJCfZXm7a7bcZuEPx63PM7vDCTMY7Xq21Vx27vxb",
  "key19": "3sWsqxxSBTQX73XfJWnSqMgBH6iNFosSpsgvmXKxHqsrtz3GFRtEeGbGTMEz7q3mt7Cf7A1BsXYpaxZygNMUmw6z",
  "key20": "3g4wbDcES7U3v7ypcWgdWeYmvLqp7V3Z9vv5Sy2tHBZTk2DTcGeenJVKD155FNE9H3vmkVBcHkZT7bxAwN56HeXB",
  "key21": "2Y93hHv7qM6aC5s4WX6hCCxms47Ek3oKwZkoye894jUs2HAGypUBbrZCoEKcWiozJP2ERwy2Jg7kgoQemUJzBXnf",
  "key22": "3juzR4bP2gK6Md4tnEPCrdfR7wVbvCCGasUjy7W3aSCGRtePhWjG9PDYRn8FDf3P2ci5vSjHDGBdfwPa8Ke5XKrt",
  "key23": "2B3hnMQtY5CfyEhz66ZTWXpjwtgQnwTu9WQzMY4nwGirr3uuCkMSvBTj1B1w5WauXkFpjAu9r9Um4wJ8cdbrxt3j",
  "key24": "4EZFP1kmnaXb8yQxQGQQ3WqkfGQUtuP2GtGSkkT9cdQfpeLNe294zjsQ5RygFBQXvW3FJueXdi885mHa3dJnam58",
  "key25": "6MKdDLwHkapfuju5HBGQV9zbTA6xmA1McNH6XL9HdVikGt5cNmNBGGs2xxDzCnNj1oBcPDU6m8XsCHhHP9buLHq",
  "key26": "2uvrGj7ef3Lrx3Aj2Kn41PEEPjZWUbjsFwzBAPpYJ2tANdDpmRk5swLWiHsr2ZkWRKBanzJZ3BVvk2wct7nTrhSh",
  "key27": "66vc834A6KxZKaRhCNqWyZjw9qxJ9B1ZyEp17k3pWDUjwm4acbiwqwq9Jxhi5HBgUUQZcYaQ8Mw4S1NY6Ls77xgg",
  "key28": "48JQFZrUrzvSx84JGo2vui3WRm9v92wj34xuPv8mcVBEPfYh2CLmaQjNJBdHg4g1fbgb3wdFXkjkvxUezeXVFKvu"
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
