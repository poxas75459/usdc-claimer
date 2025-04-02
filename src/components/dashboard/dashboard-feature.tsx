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
    "66C1vuYL2kTS6kYbNaWA1SKGCGJUkkX2Gm2HeMmWkytpY9c56fHncBXMWPr3SwY9Ee7JaXKMWvA3Wt4d9QRKadFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XMQEkUJdwtAbUmtZyrajJFDtngwCyweursYGS8o7DX4cQvK7Exm8AfGHHZ3WKhJyW1UUvZ3BWSsMeAQ3BLYfXjZ",
  "key1": "gU2595jV927ozfKSpQCZDNhHSDtKsqyNqD9nEh3emLMntoDdbfmEfks626VwFBnvDx6z8kBYb8HpuE4WfidiJqN",
  "key2": "61ifqdcd2S9bjWHWRLztz9aeQZ1MUYHwYgdr6ewp4sXGVa6FQybUr3fchpByXKPPSufGUxHAs6X2nxsrmbv7PrAe",
  "key3": "3Mmp96AzowSMzmwWZg1rZQgZJc1Xd3h2Jg24Xa6RmwLgfUaBv4EL8SwgJuLZVvaisaxpwMj9Z7j7rrXFmvWV2WWo",
  "key4": "4x8QSsK8AhXX5fCnuapkTL4qVbMCP2qFiUmTW1anmNyu1APVWEs7pbgwYg78Fz3XUFVaJW3yTAk47rcbTabC8Zqj",
  "key5": "3Rx91KxBYDcyZQnDUeeAySdeJ3V8pngGC5zcopKxcuQJXHYuNPVzc3FNqBHB1vGvZ72jcdL7uqqDsUNPDPiK7KzU",
  "key6": "4MZnsZkt1ghS9NALhUjS4NyATWnsXTkJ5f3sTC3YLuBFAZtTtnhoken2Fz8kUJkpKGs7STz7rTF9vgnJiJcXJDCc",
  "key7": "3nhbEgGRhMqpEGZQ17UJ7DDQAsanWs4VbugUZFzvfQbbyuwLr1ciJ1J1bw6ZyJowSdyACTop1qKHTd7VsFKyBJTQ",
  "key8": "3gkxxEpqSJS6CNMgRNAEkmJmoUUpCW5cdHNEx5cvAkqndiqJxkYsKxKJFuGDf9BkJ3ApA1vNCxBvzKt8oikKgaMK",
  "key9": "52BEsQdP4afFXex9opVVRHsnrZTJgP1HZDtrXB5LtfZvi4c9T4Qx1Zem1z8kp7XqfWtrY3F5FJgsA62A5mukQh5V",
  "key10": "2oiy2GEwyvaEPZUoEnL7koSuoMsf5vaLC8N5nhrm4YqiJFdK749CGQWCd1TWVToRrxzkTCD21En4pUjnpGrD1UVQ",
  "key11": "53EhwzuSKjkuTF4xgC9djRV8aP5n5z4tfaYJt81dPzL7LE3E1k3DNtL9LnRGxMBztCXh6KyuMxDFCFUaqqrpAtuW",
  "key12": "3TQroFWew9pfAt5yDw4nkTYarQ8dsCMzuLhfaZCLChDbuKGe4bZd5ZQuEa9YJZdojKxtAYYTDbUKCmDc4phdLWBP",
  "key13": "ZeaKybDW1s3xU7Nb3GyKm94ie8u77FzgToPjXGVi1KJ53gWwAfsPqwsz4k6w7WnmmCJRM4Ht6XkC7qGU3A3sZDN",
  "key14": "3sAN8toVc1VGsBkWY23xaP8JuCZYP4XZ4BNuDwEweXu4jXRzC1q69uYSRrqkFrUQ7W2yAFJEsWXPXPozHLiZ7DH2",
  "key15": "5j7usn8LoFyyqvHSrn3XPfTwmZer6XVc5LyvcUPdE1dNk6m3bPg9Y26KfWZNB2Fy62S2ocma4i23rvFAf9HLUSZj",
  "key16": "499FsMKPRr3aGzFAq6ACF67QRU9T9AUngdjuGi3qwFstbAJ4swCBF5HpDYxvyURDqhUbXfzWEvxSXie68m89K5Po",
  "key17": "3SDnq4p3DTe5S4y4Cm93HSozAtqXm2hpPg2XNL4DNwoYFtkGL5eF263vBf9szM9UWPDxHVGX7d2o7DVgmZkWDUDP",
  "key18": "2Q4DJFjNFDmkLsz1KA1uiVBNEQ4JNUek7yM4QLdUMmgzzzPtpopWHvEdYzrgBbQiuvk3JRy7tNaqTUccA1xLk7KH",
  "key19": "3sBjMCn6DpLVUKmpo5b2k4SMWUZhPK1DmRfB76FEmvHnbWXppe1yMAZnzBQ2ibE1cdugv9pzuBFNoVXvC8svp6sR",
  "key20": "4vcr7tqgxJKQ36tD6nKDjuqiTGtLd55xCeXkPKviDcRUjrcV5Lw1oGGiSThetAVuUTLnn1ZtM37zEyCVbKePFNjd",
  "key21": "wAFzwKHW2QSyo2iVrK4wch95KogoyoG6yjBRCSbbRdPkFbaPC8hVp8u9pCDMPy8vVct8rPjNEJBeaTnCjac43WR",
  "key22": "5GTUpCsZo2mF8x3ZqaogDVKYhq8QDCyfVmXZhrH4rBcKt8jNqSdDZJia7GUmJuYuo4udu5uGKqzJ725WxBdHMQ1u",
  "key23": "36WKbbjhVEPzDK8JHk9jHiJTHrk3PZTk5ersYN4g8PEYZLgjodvkwKVexQpuv9zKkizoiawoJNPVoXd5dLM2V6KA",
  "key24": "2SeLS6Pkzg61LLANCWPNzsJgQXjiJxeCd8nLUa1cNVuoXQPCojhi8Lt43YXog4z9vAdAn9zbm9U6kLNTUEmGERgE",
  "key25": "4inDz7vL8mGUTDL3dpv7LseSn8nm9jPRfJEcjxsLmdwvbBN7w3jk4P5jRDr6HsGDb1VUy5Cv2c9mxxgkQwqHMiX",
  "key26": "2YfP5uqDBm7K7GSTfifKpbTDwfrG8kbEbDzP6nw8QsW3U3ehmeRA2mNGkZqGN3iWbz95AVrbHq1vjVpvoP3hEnVX",
  "key27": "5gMwemkuSFHmj1SMAAFLVZhhjLpDASA1gmQbPqVqNu8mHhHrr3LDAomMbibjhVFXkvWt7WFPJPsJ2hBGNmqCmvoX",
  "key28": "5AGSdhAyH6QJHi9CbB7rmFWpWtTa51aocEPmPPmh3PK7XDFdn27jnWxZESPosKfCh4nrDvHBBBktDxtsCr4DE49i",
  "key29": "3jK8LWtJSDAv5eAcMykzFYLjsEpz9ehN3qs1SE87LTxPa65D3T3TQyksBTBf6h2hybCitcWh9QBryLbRC71mR4Tb",
  "key30": "5Rq1HjfXH1UaUauZtkeJ6ssfxY3PAMMHn2ZBv7TyJpvUmX7FEdtrJ7xynmr1Q68yTxwTgMbUhVUWVcCfFmcKKgNG",
  "key31": "2kLKiHATeW5SegbPV2KW9x83nAGFzzmNuUsSdvawiYd4pREbYHdLi9E1vybdvh8AM4UA1xj9PuNuhyGZkdTFFgwt",
  "key32": "4BsSEYnVdLKkPBmdFoVZ8sATkovMXPM56Hc7pqUJWEHxsWCsAq8o5Zc5LuQK8U4vtChc4nUbp48Pu4ro72TeYJEM"
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
