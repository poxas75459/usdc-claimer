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
    "KSyus8oRBfDhyjQTVQ3PKKo5jGLdNK5a5hsyH99t5Yd76Umm9Pn3P7iwt4ZmMwFM1Ni2R1xW2emonEyGpufvrx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2koMCxzTyjiV4xfqfADkoNw6zvWiRFe8GRmp1RGh9qZJG6rWEbaRdP16djp3LG7GVQmekuBKvc5pmLBgdDnyMaKT",
  "key1": "36XY6W5s4EoTBn346JRNCt3H8LaKGLtx737y2rPt6FPVQVbRu7ZTtpoxpVE55x46ipAcASwfY7WjgYhwp6gnV5Dg",
  "key2": "4xSFXrKAgqsTGidaUFniDpLphwx2z9vqZz3cpCHYpayys8pwFxu5zKCks2VaGtL1fG96Wp44ULtQr7zDgLHGrS9i",
  "key3": "5rGDENCRTevAUXne5nhYDZPANseMonVWDfSzRumMBzJbtsmiEcD9GN8Mf5vutMX2C3CyemZXmtHLob8WHypbxvbo",
  "key4": "rXofziqDDTdBufh4Qkz5EjJiHLcScJnm1dWD2JR1MLwLt1GMEEPfYR1d3t43ZHrJ9CXT1zYzYXpdQmLS5GxQp7g",
  "key5": "5jGTTkksNEBW2xn5sNHpG7KAdxM6fwW3phTgNMfZAxaCJoW7mDomdHDu2i33m4o2tQkySGEmBxQnypW78bhb6qD",
  "key6": "6675styQRYty6w2XackNvX6jLVv6t3cGMNPwxBaUkECGcWtkrNd7dBr5VwxvVqdimDYc3DN8NLpEJdCQvhc4qdGm",
  "key7": "4avyBJgrLJiRQFtHWGvWfKm4Ww3ZVRWqjPeyvRmCW9Xa13ZqX9B5rnfXa2Z9Ph2jonYWgPe3iwMbYNuab4zmj7iN",
  "key8": "3MhBzR73Enekz3jo1pkF7G9PCdh8pvyLk31qecaUnJWBUDkjzhn5jrb6yAj8vTfeT68gCgwkTAyYV2buFPZ291yZ",
  "key9": "2YGJmf3MYUkLgGEpy8tgKoNhftKxmgd6nRyPjFrTUKevrkpUEu6bHRDt4V8opbR2s1bK3SrMPAjDHA3negM6u2g",
  "key10": "45afqx4xNw4zrBgyLXH3gtEVBLqHrgshSrY6Qzqeqkj7Si3kWRgYDMwBJP2z4kfgj779CLpq955S3sX5w9vbhpck",
  "key11": "2gEVTfHfyL1xtFwzbKz8ArToQTvfPVZ1R76tVLyFu8QxDzdTf56EE6pBfpyMhamQRR5sdhZnnNczhHWxDEbhWLDJ",
  "key12": "Ez5mQZ3H3wExcrARjfsk6npvP4cVAX22Vqk1FZxfFGRAjknwYR9wwx6D4veFMnV27mgK7ZesDGSfQ4pQGEsntLZ",
  "key13": "4dmCeNvgxo5auQvwCYkUiTpfpqNEjjuLbF3dN5TaUm1sz9CkdFN9a36pBMk86PeazzB9NEoqyeAxnQjJtwJ5wiKF",
  "key14": "4WEdrtcYCU56mjtodwdZQsUsFgnorrefhFVeJ1hNYRmY3yjoYaoRijgVnym9Pn5i4av4sSJ7XbduWzp4hnwmKmoy",
  "key15": "2SNiPFX7XUSsdTFMACLzim9ez8c1MZ4zk7PTckemdpGaHxU2xXFRMW4ttvzRqvxC7KRFNJZr1m9V7ZsPnJVSof8H",
  "key16": "2cYW4hB4Dd3khhcYA7nCcnQVdQnVPvbKytJrnSWNRP7rUnajQwjPWzKJquhdRRP396eSkAHRgfxq4X9L8X9LHeAX",
  "key17": "3k6ER7tqwife6iNvST6fZjaH5154yjeKvJeDKgLV7YXQ9DsezKeyZTWYCrubikFFyeoRZZMS4USTjUWX74odua6B",
  "key18": "4Y31dPnKtk9GWdUMuYUjM5q6MQVPr9EQjBuRLF7P52np3uL6HWm58U4QD5hckvxLXsMi1fptppKGFapfPNBavYiS",
  "key19": "2f2j69NSBY8dj1sub1h9LwqtJWgaXwEg9HvVdMY4unU7EDxfNRhHmjnzD85j1cyviPMbmXBkgB8sgxSv9qBtiStq",
  "key20": "3Cd2b7Fcd9LrM2e4C9pGi3rioTG2PDUTE8cJJaBjDkJEx2x6XVz6XV4eHRAhXSXM6vnBPLtoczfqMsvmKdZsW42r",
  "key21": "3sTvXhZgQMDPufNqdsPaUnh7xzXSVz9kuQNSjxJYnQAkdJyoG44wM99uiHajAkmu7hVeZHCamQvHW2M77TNY3iCv",
  "key22": "4yRwt7pLET7TiMaQ7FzxsT7iiphHgPRUVmjrP32QZUfBynPJy2hkdYwg1kHxfGVahxSFcUe9Q6eGyZ7SwXUSWh65",
  "key23": "5aXrUDwBCtPHStoynmtVWY4J568dbVqBhzyc95xBer83oekSsg5QMWnApE6etgzeTmM34UXo6RCNLThCDJHyC6oH",
  "key24": "zhTJhhLKMkoMDFsnLgQnrAXJKxbeLvMCfYxuHiAjvHvQjwwuZLpGbSCsccHi1tGLbotTE8KgmF8UpMtoprZrRdW",
  "key25": "5BWmy6zH1xuZ9ZM4fvTf635bfjAxGJqofEfppXGuCuzTZUrb2iFm69qxZc8f7WK2uSkscAsWhyqBfCkGJ1kyYuR5",
  "key26": "riViznp3twZeiX2zFUZoBqcsjsTbFKs9GkEbx9JxbJiPPUA3hyjhJBMRRPDiToPHEhcCPe5TsdBv5E58YSspNcq",
  "key27": "2vThLQVkpAqcMnA6gYCcZiuogMJcYHmqXAAt8RfoHcyoP6rcX5r2yPP5c5Q6x7NTX3G12YpoqjRgsweWno5Q1SsZ",
  "key28": "32rXgWMr8HuvvAGW4CvhE7aVEt92JhU2WuA6cDm9zNUdZn4p4ZX28TSwQG6cuZuAjFUA7Fa4WwnUVbuGkrE9kGHU",
  "key29": "32jPLbJzp4wNCNu2cM73DJWhtjXDorXPDHWMMSeUwXGPe9JABs4zU6YX17NiC4C8NntGGdVkpmHwqzbJegiNr4fN",
  "key30": "5pcrtvXV5sYD6sXBCxeMJEUSRAW5Jnz8wXysAkbXoZLEHet7HT7HkQUd3K94VxGPZBPAi43UEXmBGmfvQd1R1aFT",
  "key31": "2PPAMV6W82aEQVbtRHFA9gtegVBA8wKdfRxbf8v3j6ujTJ7gQ9wRNiRXfMjXmNZuXQ5v5fWye7LxnesuNdKezVuA",
  "key32": "iC2r84KfvyauqLcPsbjsr17uMQME5K8ae4wjGs2NyzmBYC1RtaRKcCSNMgwBi5iXZNnYe8dhGnPmMfziVjhLToQ",
  "key33": "2vYDKs254rpPG18zmVExc8CMNKkCLSvNc2VhSpadJhPJ4i46kGpJz1pGqT8WUEgDGe56cMrWbaZ2dtGVT5XgTjUN",
  "key34": "5qGNxvWxQZAMcLzaZWk7VPogttXHby4jxqMu8GijAw2zphWWFScS8GvxBNFparap1oj4CED4kHuHEkyoTRCsPzrn",
  "key35": "v2B78Ts6G7Y8KAsfaWF96AZ2FVixLBxdMFVEoHDsF8txSFmtH9uXiu9TEqzNeAua7LySDWrJe6zwcfHGft6oZFH"
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
