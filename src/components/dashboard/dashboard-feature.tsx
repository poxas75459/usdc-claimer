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
    "3Xp4C6PckZqjkxHBgbq9cpdaeao3uUNVQcqcPFMbJHibZ17kTvWMsuLELaVQmDTUxUJgq9ZLDzRUSwJwkCLZCHES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i95wnyCzqgWNDCkKXCzcQf2WvWGug86R1N314L5sWrA58ggftexCdhSZzgKzk9kmK6uJc46vYELd3UWXzxpuyHG",
  "key1": "2tt7S48i7x8p1hZqA8E7qrRvQrqhUkhSfPJJyPvX9vmm1w4XKwjiMSnXQFfAYbTK1pURgCuf3eyygo7h2W1fLWaF",
  "key2": "2w4cPY831ouKGhj3qnJDmBm18tG3GbazKKqunN6RrhnXFykRKKq7jAfy9WgL27NNoNnv3iXApW5RAmyU782bmdhj",
  "key3": "5zWwq1BAgcVAJJ2S3nT3L5rwYyWsLDWWKDdUNBoASksHX2dXSeTvEGsVBNPpMQE6mdTL2TBkVV4E2M7U1ZRfzypu",
  "key4": "3qQnYumYumMJZDXNbYZ4p7adiEe2tsxrLuSFtwhMaJ78EcDFyUyBTMjjrprbqLStuhTtuWsLvWLPYtD2cqKsfFhB",
  "key5": "45DzdbYNhqe5EdsCwkHmpJWAQ3Bor3tq5H2ykiHSYUn728e8DMvTytizosQcdWn1uN5FdQMcz3jafY72eaXgDc7E",
  "key6": "66seqKSRPQcJL63oaaazjucqRvN4Dtr43NbardGk9CVmo5XPf5B6oQxrAwQpHw2gQ3FJDZtmweMyCjUTPqjJMzni",
  "key7": "2zbqFoi2TPaoStxNNgLRPkHtUVSkrhpNBKpMW37a2avdsqG3AxWTGqXj1icU7CNuaCYfcPJ87tqSbY71WBikf91Q",
  "key8": "3Nfw2ZJdV7Z98cvCdWm8kaBmQuKdF5TwMdQV2VSMNy2BgoJBnbuCvd3oKfuLeCesJcmBQXqbWgYBzwzTNxxCQRLT",
  "key9": "2YQmPGSNT63im1bhBiSbSKibwGjARiUmxESmHRGm8NuzQtQMZQNSHZ5xPqxQseU6a9jLZeK5rCmcgjKZqbQ3CrAT",
  "key10": "MMnq2mBPEhZG6oC585NZNLncyZEMVLoA6AU3J32ih9zzA5DjzhVtMVg6SoCRwa7Qu6RR4xNAMs2jyj3v1PjSLSn",
  "key11": "65oSrF1tgiYcehe77piMNcteBr56uLuJ7SubK7ZDq6JC5eZs4zHEovTZQfDnAygFcn4AtjAetQHmEQEks19XH5A9",
  "key12": "738xoVTMdzp8HJY3NYvTGjidzjwhbWd77iaTmM6wUzzzPthHjJDghytSu2JuyLmL4KYAFYeeFswcNbexYeG4GmF",
  "key13": "2jMQzCgKLCaaN494V67ye1NtN2ssHXGpUvUL76Bq5htSs4qEyDwuNDxfLKqo8LRHVSkEoXD6wS6dy4c38DypPqhG",
  "key14": "2uDxs61px2WNGZJD9wzxSFHyGvWpLXYMC4rKYMWSSMW6zKeVY4u6EhTdLBknH8P6KaSpDVMZvabgdUmw55qz3gJF",
  "key15": "63F1rPkd85NzEDu69P6sfgyGE5V6PhBRi4nwgY1y9zatWByUHXqmfch6PuJMrCTNoGxRi4BvLqaVPRmjvgFTxASQ",
  "key16": "5mZxczuAwGuECXUiK3XEXwC5nfFF8xyDfzWuTApYKEVDopnrHupcs6w1WpEU8eLuWNGQWnMKgyWttraDstZDFsFG",
  "key17": "83rNoKWCVZgNctrrp9rfSDRY4o9tEHrRhndR7xCoxcN9KebNEcy3YJBz8ZvErUST2efG4MUDmp6spPokdRfzPRt",
  "key18": "4YPbfsQUL4AR5aMAJiqLwKqe1kPWDeVo58XUnE1JPMfUbzsmhAP86xJ63trT6FMn9ATr5S2MAAq4LPzRJDQpWtcY",
  "key19": "3JZUzAJvUQF9WA8a7vy95QKGZB6csNfUYWRQSe3vCjFpBeoa4gPNCFhYw67gexrDVAiFK2Qi7AQyPpZDri8SMpjY",
  "key20": "3EpzUMYfv4vMPZmje5PZk4ZzBXBayghdPoVZD91QXUdytViw2V4zgRZu3f8EEHqbUKuFT39CFSXTHM5r1Eken5TM",
  "key21": "27cNLCpdkmKK6BLjpDcV4yCUtNwzmYds7jdYAgvsqmg9PeifeFy4gEEXut4GUE3JvxvxJ3yBJb4BsAyjacrVRn8R",
  "key22": "5vqkMPo9HaKzThDRivCxiopMj1vNjXdstG7MBZyqHM4vVPasydYoZVqfEWFDoUapafczsUhLVuGkd1R1eEdPmaJc",
  "key23": "3sUq1vArfyutdiKupzMstkmCufs6oGfwDoVz16TnyEiUhyzz5qskEA6sKQjPMHQ5FNUnfc87itWUdqUuycTtm2oM",
  "key24": "42YfsF1pF2SaP6bJehLsQ8TpLAzGSx8mtN2UJNGxa9CgHJsqj1BEC3iJqmjeVHcsYNhWEkhPUX3bnpA7KtjVn1P",
  "key25": "2cxSUduBEhDqr3NgzZBKG8Y1c9MrfhJ7LmMVP67NqhP3ywRRekWueXbVvHMwpLk63qF8tEvbixFjSLLkpFeJimwS",
  "key26": "2BBbKqMryCenrnmARp332MP6tcZcq2LTK1xscqKuTA32bxAvpUhxsGfwYaBj96XjLLMPMQhkMHxLL51m1Q45jsVy",
  "key27": "4zBp7hiQQmsdYQwfe428UWbAwXpNV5eY15drQFz7omestq9gMwgiFs4GFjkY7UyRe9HGrKmsdK8fRRLv5YF767cT",
  "key28": "5vNiQ3uck3PUyQ9Zdrf53vW84J9WQ7ny22Y4vDkUKosUgRE3EpiRyNcWDfuWaQrcwuS5Xth3SFpQ8JFoYTcieaCj",
  "key29": "4Kz73mF5zduX999pdJpLaBhT74u3a5nmmP8dsDgrBRQbuEdfvQuEVV5p4LrQhogG6wFcPphWEqAZ2uDpRpZmPfxs",
  "key30": "1NYQmViSPbNXzGoGF2UKXWApbcNmUxrgPu7EQoQ4Rfr6zMDtPtq6StX3XLvK4RSfHCap8oUh4Gi2pV3E8UP58nU",
  "key31": "upsHXB25Rjpf5HAgEGcJZMAVczRvxK92ddrnb4qkdfCNTgv3W97hbFCbbaMn8SSdimh4UVJRgLL7H2LcTWs5B5C",
  "key32": "2BnXKGj8a5anmX3zWGQgWNKcMRXbuqobPGvNBNaJLpTMuaVK87xoj2eLdN3sJg1WXcXCcgxmFzd7XE3LDkRkLPFL",
  "key33": "2X4dGiNo3R4hSTkWGnmcUbTERhcbYy2bPboBiBWdJ3LbAH3iGK2Sia8poG3LAeqLeHCR75yu6iCabExXEE9fkdJW",
  "key34": "2jtxHmUKu6UinQa2LNMTBLvNvJUBBf1FKrPuWYXbPEcWeXESnnzLRDMTaHj6smH69ijvvo1iuusz2cnAadbFhFar",
  "key35": "27hd2be3T8wdcWD224a7RaDQHUmmRvZAKz6yTTM5QYHrB55ypC3payFKPY5wFKNjSaJCinoP7uVrNQqHLdsr1b8L",
  "key36": "4f6keqojdUbSYoRNNv9jgGE4nyQSysNiDtmSjjZ8eUzbmEktCniGBg5jUJDuV4Y9xHkQN7GXTL2VpvycfabMaWDo"
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
