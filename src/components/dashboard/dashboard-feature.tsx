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
    "3X4qtvQhERz5Bab5J4o6TTp2iUBCRYQA92dtJPacjeHgJYbNuY4D6i9cQr1TaMeVrwShUdCjq5bs22ArAaaRW5Gd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b8zzMBCmvJhHDSCazD6oSuDj889bTqHrpnYQW2ViJYzJuHNDPN4NWeFuVvJshwhiqps3hDoyBdVEwHunK899CjV",
  "key1": "62GXnc3Q5Pi2G97MeDnoiDVuEaVRXA7njBTndZpCwb6vcFXEqVAtcttLxtAp6UE1SQxzb71uRu4bGgFLUq8CRpA3",
  "key2": "2tGywcxby2srKGjTqmkrqYt92aPvTZFHN7f62ksC6vPXA58uttJaQcCo4nqZp77Wsis9aWK5zJ9FSq7gizvShwrA",
  "key3": "5BtHdtEtcrzksvgRxrV6ysdCnuXMDeLyGM5S85dFancSSHAfdasRieMwNDTsiUqRksmaAfA9SX1TCXB3yXE78GnN",
  "key4": "5RDX19g5PYDNmz1w2uF3d9BqBK5TXo3gS8riY5nD8xEXgZjdpcrKdvo4U1aXcSFLrcAYSLXj8mU8KnN6se5XSARW",
  "key5": "2g84miCLL2mdQE2EwytBqhmNzy3HMjLB9J87oijnSN32XeEmbSLuj2FfFw6S9bFJs93w3bKegnNYDb38wwFgWj5y",
  "key6": "5AxwG2GgDEUs1A4n3Qio8uyRRge6jjRcez9DjqVWzqKF6af1oiVDwLNbFjJ7QdC8rYHgqptvGivUEp3FFBpZbF5x",
  "key7": "5y5jcZJ5RJe7srR6ZZ1kY8QRhAVbxhfTvJAe6eWdY3VoTHQwxWQVCyeJWuCbzADdQzzNDNJSTN37BT4wx217VN3R",
  "key8": "376tFNiXNanfbAgh3w8qQsQPtRNhtbbRX2tFfanGifPmN3WNz7mMQGjfysA7PdhThzt4LAAu6BPV2FAL1QdCLceN",
  "key9": "2EyyKrnNBWaqjjuKPis5VHkkWmTibLZfHcSNnhZJPH5auMhAxr4FjmaScbVt34v85Uf9q3af6MGoZdYZi9oyTEnV",
  "key10": "2CGvgMUEt45Tkk3Zi1pQiGhsvR5sfm2wE8huyCJ6buqs7Mo2jTHLFQWfrAKvrJvs37Qd9Hh1DB5oqLJ3urpGvbht",
  "key11": "cAxT1k7i6W7ubsJsdf2FVwFctYhLrkkKEqo73K2XMaQHWt9PsJZLWvM2DiT7uKs9yU1aXEUkrUQ99ypJBBHmi2t",
  "key12": "4rEPFpbeGjPJvnZPCTXWAUBFbryyVWBxwpyAkNCv8t4NQzaQR3kfzNCEPVZwHxn7boMChup54JdwdbfxoQ3Xo3Pu",
  "key13": "2HNa8xv1ATmr911bQvGLyL77zfaTR4fZdxy1NmpTppa87cRo1ArPAubTKXao9DMXGd3RSqEHGK3qLQ1PqY7Bnusx",
  "key14": "5HUMgDkQ8ZoneWnMJ1Cfs6YCxFeQuMVwnQk5WEEtiNVP3GUXNNbEocdS1HzAm7QbR4VKdn5oiNC7En9FnEPW3Wqi",
  "key15": "w3Cuyg6GANk6wN9mfbuPzTh8wWFKwCdv3aouiTbWxFS4nAUQFMCzZaiAEnY5KEzAzDjum8J91bqMyYBPpSUcWis",
  "key16": "29n8LyBQjqYiatC9WowDs1rzXzcXdtxQrfFhw1pKcuhakRzgagvRWrjXXd4B9upLmjR4adF8X3fBLwaFVQYYfEEV",
  "key17": "4ugBCqC8umkKkzqWbVpiH13itUVm5KdE6ep67PKpBVv15HPUZf2szs1bsBcypPwDHd4MhDYfYkqjBSYeYyRcmYMy",
  "key18": "4K9biVuiZocy9bjo5gf7tFD599WpjQv7NCRCQvcmSTW5RDVx2LA5QmEpp2zNwVRZGBEn3RatqbZeoGKTDnhU6J8h",
  "key19": "dLsqz9pGiaYwax1ScmszaGQDKaPNSaoLeQYd5svTvKgfG6gp4yPrrBJwHQHWysQgQKAVPCThP7UdyYZGcB7XAEG",
  "key20": "62bhyMh4o98jr3Wr2hBz99z6HyghyW7QJXp1cxDV6hnAFsTCF5zb8uxXHj77GbfEHT4fTvGMToqWZTYxBXQSTvWc",
  "key21": "5QVbeosKxNt5wRjsqyCPut3iX6c5L3iHWwfcBRQCSv2iGiC4wFAVyzCr8U4wxK3kLULF1sph8dQNRFji3yAQrFCc",
  "key22": "2Lgo2acdWwCBBwutpp8x9nwP6QpJufewKvWpHF4xDKNHfiuMTEfq5Cxw2cRjfSVBSu58km9WwDHEwUCHSjDYnKNQ",
  "key23": "4JvR4nz3LBPBcyKgrMCjfzG5qBzNviegLUTbjMar2abRWy9sk224ipynkH3DoBgpyGqdMtYKDpn4ntv5vGdb854K",
  "key24": "3beVQypf8S5bD4woTf8bQWNN94ZRxGf1wkpkKXzXuBBW1gnBnTjfKpiwdFTNxyoSgJZxsiuGesc1gYEwEjGA2puz",
  "key25": "5tp95VUbnTUiU4fb3YFgrwKgJshMPWvSj5KwzupCEbU5qfJmMmdWdv41xD2J8pvCdBWCFYra87YZDyQ8B8XfEukh",
  "key26": "4tMmszzDh4AYZ8Hb9nkFymXvYp8PMjCkRC5Js6sBZhTXpUhfRuC6tMn7g21fVFeaYiyxcys6KLVEx3Seh7KKYmLR",
  "key27": "Anb2ESpP4LQyCZsPQK3A6FapH2CDuGsCPVjbwR23iE1DENQM1p5P6x7V2TgzeZwR7ANLh2FatdGSLZdeYHu1CNh",
  "key28": "4vnNsHqpGxGcMQMGMRD7ZieeZbP4sGMqYjfwCuXdN6fFvYSgRWsytS7aPEYvSmXSwdZc1cPzhZF3GY4itq4ZaZyV",
  "key29": "54D42cmjQBcn6LdkagFYVruae4Fiyt1uqF7mwLbhdQq7fb8MjcPjgFrCovoRaeVAyJ6UcPWG244uquMVbBYFPUDj",
  "key30": "5GANgUAyXaUkV4H6xUPHR9DEk1bsT563zgHWEnszghhALJWVp9WKb95o6kA7qoEXpGREX9c6FeALaVHErLy1K17Y",
  "key31": "22nrL4D8GwnPpbreKaHB5dkjWoxhqpyf2UJfG5j6j8bRCMURttgq9T8VPnXfD6c6hyJHuDXyXDDdAQcrMjoH5dZ3",
  "key32": "3eRd6sojtn41LEo3iPafBgJCYqsLkgpkPrG9RiXU8LoKmhckYYNbfVv8sbzSYt16ZiJxf8Non4VN9n3LZtdmbgEk",
  "key33": "4Y4eQPDKLgKgoEn36PGt9CmosufBFUjJrPqh2kS5815qs7kvrCG2zRxdCPU6ArWYEdFqS9drDLnRzNCcMpbxtYnr",
  "key34": "5QZs6LnXuztRNgXfxQ2EEZKS5j6M3hEK9sSZjLJDJHpPWu7mWPpS12JzUmyAPpu3eCuvL5fGVL4gh7MFjRA5ehhA",
  "key35": "2bDfRwa1TFHsVXvaZEZccrKkf8dhLeF3dRZrFjrbiM8KviPWpagySkDmVFSUT5BVwXAsdG9CsSt3Tt5VV5PhwuZa",
  "key36": "5Nn2aAj2Ki8q2HHPmNQo6Cnbq1J79fuSYKvmG8H2MPtL252XUM3V9X82gWiWwUCAfjdnEHvMohG6DowjfYU8rJmP",
  "key37": "2iVyLuKDxcnH5eRrbA5S9UDbtDM4p2v1LTPAMf2E2WpjCJhhpR1z9W5mCtWmv649x33MfbddEGahMxYghT3T7s5J",
  "key38": "5HTEQmPuPV31Ef6iPxqHAiQWGJNvtSPMK7SKC2wqqudQKga2Sxa8MUfgHGJyDnoSdFwNiopvFttQyQ8ce9te6RDA",
  "key39": "4fTdXvoFat6J1nEWEoFLPqMv6VszySFuhfnp17oSxbNDLtgZH1De8Gb1qDoyfPYstbdTJ3CtZoYMzwhnudq9pKdN",
  "key40": "Qb2uaba93swRUVeSygYpn6QX6tPG3KCMQMNGtZvTuDy3DbtP5JTW7btdCHmyHojvZcowiJZ3bxHLqBa2pHUPpsp",
  "key41": "5Qehz685ExKYkEDMned1MRQQatUfrojTw2cXLbtzmJtDpcr2VzssrsgVBuM8ZMTrQnAJijmMR5EdkbpHepZSA47B",
  "key42": "2NxJDB2b3DASd4WKLXPRyS5brmBSt1cLJponZeJ4xPK2gHKMa9NDhWDFyMEj49VVrDABRbsUnyCBEpvtDBGEanz1",
  "key43": "3DGPzLthUgRMjYV6H8kDryLMgZ3muThssAnSUgj9Cd98Axu5xFcHFXdMx2XvPC1cmKWcFtcKJtJppYFYxTErZobu"
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
