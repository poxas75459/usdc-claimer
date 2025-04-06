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
    "5MUYx8emotAQrMsDdmjhmQrVNbF6aUNpEVLCKW7woQcs9rFXTnFEBzNjBQZ86vq3Vtg8NuFVEkM78i1qbwvMQTce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "452j3VjDaZDAsqkNxpyBD4a2HMgnyoM3cWH2coGN9htJGxKPGyDzUFx8wtG3Z1ZZL3Q7TUxfS43KrDJKp3L2skJZ",
  "key1": "5Bc64S6XFs27XuLXQRmSSb9kHFcGwbHHhwwWkkaKcCirf7LiTsDEUKYLpGMbSVW2VyDCf5PA4eYrBCUzyoKRkKky",
  "key2": "5QGhSP7eMPE22JFqKSqp7zTzzqgy2epwhXf4pe7wsWH5x3rrNnAPSH6sAk1wQzyKfsgrzNkBWJdws6dhf6dq4ez2",
  "key3": "4kRQMyr37nGgqjoNpmhiw9kNrkPXLx8uEnnD4TG4AC6BiwoHx5caLsBz6g5YMmECDkWgnjc9KjAiZptHfxAwP487",
  "key4": "5XBJh5gixdHSUKYHACcmMLtxWLkkdYhA1kx1hFoCh41WCWc4AZooPoJkuRZQsL6DhnaJvz3EKJ9v9FLvV6hdVjAv",
  "key5": "4YiDcTSsLXwAE4D1J84TNbz3guQEEeH6yB6JYjsyKWVNT4nwuh2cEqUMpofAX7J2EYm7huuQ4qF7FJVNtiRz8Bws",
  "key6": "2uLUsibC4BEdEtdxpLhQ8UY9xujYPeFWd1sHPjC2mKBR8ficXGbpn35UywaAE6BmL6Aa8AwGv9By5VzX79WJVKRm",
  "key7": "3hA8bSzuSgXGraXULsdYe8JNeqXXcHBe3NzyQ4CSZWWRFPRCy4ihcwxFwk9BQxURaBRnkZec5mJtAaZ2y1NujvqM",
  "key8": "2ymkSjPUxBM23YtU8ihcozdocUGvtDp4KbrCwJ2YdHuJFPpb3RimP2LTasdaQpdES7LnLHFxyXAYQky1GXeNFRhE",
  "key9": "WQ9xz7ofsc8aMtAuMb8gFRGoEiiBjB2KSLeVcZV8kKbX2MbxE179gNUh2teMqWe13XyEMjm3scfNtmPMVzj1dwr",
  "key10": "38yW2y5xVxT4LzNbwLxhYP85wXr9GSJmYSrara39kGxoBh76FE3dhMasVSprrhjQDtiukUaVuC3NiGuheKp8kx8R",
  "key11": "5x8vGjbyWm5MeJkmHRqX4JTQfj8quWNJPScxSVkUiCa7zNrLk3s5gQdk5uaGKj8JEQS4SGz5TK86vYN1f6TVB7TU",
  "key12": "56MYiBEX2GLg8mmeZqPjGrTcFunvQ3g1bhb3rDtAV4hZC5dUdCrSnofzNxwFRdy7FpVNBzd552An5StburWFpPjz",
  "key13": "4QagbWXqWKJ7EAz1ccsRYGNNVneL3xsztySh16FKASMSVBiHPmYQst7petzi1GLLEKZCF1E2icsa7XftWC3E9i6J",
  "key14": "3cMv7tykfnePES7kL5fxSy683KQazdL6atU1vZBasrnMNtmjqhSyDaZCgFsUqoqsR4qSauuPW3wKux4Qyi35uEQG",
  "key15": "274gczDz4BBFsdJjQ43Ucc2MRyVpy5exX81txmdGR6pRnY9uo2KzE1SBScawo2AYtuWXBH2z8W9U29NVSCUc1R93",
  "key16": "4uBqdK9pQWyT3Y7xmdBchnAx6iq7MgTqs8ndNDeMG5Xevw9ddnNu8huFgDeVxggkN9H9EgaPYDdEPVZdYYV3iiMD",
  "key17": "4q7TdRmJLmawq2ZmB1XYs7cM6mB9skQgQPtFjULCikgGUtvuVsbSWLkbe6Zj94ftpgFmmuNaLr86uAL1QbPaAyC7",
  "key18": "xU8bKGdPPmP2zXPBV1YoiFW9Xtrc4fBWn3Pzrf7NYDG2PpdPeUdkEZrJPfjJksFzmUX62UYQTPcLNW8sZjFT2Yk",
  "key19": "4fbZcBSv2ZdKzRVEyE6ZWBB47ARVA7tAwT82GUvjwhg3jmzHAfTDADKWaWC8dguxTcJikaDkd9YfjBNtHv5BGpw9",
  "key20": "4fDkAtFnT1exyPsEqXpPHVyNLqTB8FJNGzsWubjaPYMLsiGPRS88XW7d2zkYmPj3RGhzJdmZ6U9RX3iwUjNyYrfB",
  "key21": "ar43U98ewvTrMkJzeBwhwJHJrF8eS96ynhGaRNAXaVozNA1GiaeMs1j4WJ76BHePWYDRanbfMTVrXAkuDT3QSgv",
  "key22": "56Mka2oRPzeybeZAJbSitdxmFSA5TEMpvkJbNGBWCTa9DmQeGxx7sBfwayjz7iNfwLVNqNJ9R4x3mu7DgJA8W85A",
  "key23": "5va6uq9SiuRqX6DJ9NB18NZ589vJUxyC8HYJASVZHVtTntFUT8WFkmfDHhV8BbNT72EKj5SKeV1GxcjYqujP6f1w",
  "key24": "5mFeXpuNossaHi8AV6yf1bsipmKEwYrerSB2bUUMEVXXK5TrH8vzP5RwUayz3XFAeJPghBjPJuNeXJfFrJYRYXnN",
  "key25": "qdGVkpaUPfV7WuQsaDq6XSJGUdpWKUDEzupWg7c29dWLUVKQACcvg4Tpf6f9bs2LZRJ1bj8QCWLHcq9jgiAGL6o",
  "key26": "3LiySzqHcjxGkp3hKU4X4DJRjzHe5grtz9duFfuR8g2kMQ25eoAiiWoThjoXMZZLMPzZNfDci5YhcXWfvxZoew3j",
  "key27": "g56kFYT6S5hR3qUZyTfNgH2RGVVavU2tP3DuiJNkgUgvCBf7fxGKUfy3fiLzYDbZ99h8u5zMGMdFD1cH39Sw1HP",
  "key28": "FNhRqJ8kr9mCwjvy5WWv8PFHJbxzDBpW2jUY1xLQXvoT2VbubKthxXLBDaw95XL4YD5DzKY6sWcFtKWiGby9GLL",
  "key29": "cS2bTs7dYbGvdXJzHgs8L4qdb3b1PqJ4Au7hQ2uZLKZPTmGJshyj13BJ8v8qCowNoLhdwuCxZ9XzP8GfDeRXTX7",
  "key30": "3J67UAonsa7K1Ea5656NhhxbRGyvdQp3Ynhrmnwc2Yh1eNU6jtpduciVXPnBiiX8mogiKJrrNmDc3trnXwGJg46Z",
  "key31": "JsU88DHisbHK1iuo87saRqEfDrgqjkjon9C5XmRUWvxi6MNKwNLhb7rKCy7z5TJwdwDwjFZc1gM7nMkTUy7q7J6",
  "key32": "2mWQe1h9i6rgxfaDaxV2VbPgSvX28QKBzUgC1agoWGrjCixi57HmhshcSaJnUwhCmQf6EvwJwMNEMQ6kDD13TssY",
  "key33": "2y3Sgy27UWnXJR3qi4CB9D4R9VioCRVGruJ3YoKF5z3x2vTJ2o6AQvWhhyekdyQ17BHyjQBnxgWE4riDgvew2i6k",
  "key34": "3U1zbiM7ABFwR1jK2cAomd1ayofADVPaSsnnHMfXPWuD1b6BEJW8TwSWbPTfCmYnY1fmaJGBSqm2zHGN4spHS6oL",
  "key35": "5FHR9ND32GpofDd1VL8XTNkkTPsWN5Kpe5g95w86RMMvyZgGTGL9pKZjzY4v1TCpi5YLmQ6h9w3DzqCLxg3r1ySq",
  "key36": "5CQSuBkT2pjm1hur64txSCzAbL6MxZcsJ4zDdVvspqXtS6jZLFyqbB57KkZVa2oHWrtw5V1TkzU9GQYghn8k5pxp",
  "key37": "5mN1rGCRtAW6zAwb9w7bsUiQT5Br2HnK4gaPYRudiM8LYK4apR78XhWLuBEXat2SYtWHtHB5D2iznURQh7qdCYNh",
  "key38": "3XCuubZM9XB4rSt4WPYshJfGFx188suMtdBdEqUGSSHU4Fy8jYhXPAnoVRPyNfgYWpPmtMwn2sCk9xUTkFLNqvnN",
  "key39": "jL6fB68mcJwtBq3Sk3QB9ZSF4YJL4DRvsMhzdK5S3aQ6fTeSQLa8ZeJP63Cio5FMEFUTyA8Gitk5DerDdretU9T",
  "key40": "bD4G8nHT765SEMjUUDCSQzSbour1LVnNQTUoQn7tV6ZdiWeVv5XyTLpYMR8cLXS5qSvNBxJANfNm5886PNG6Mns",
  "key41": "4SMeyKEz3AcEuCvYWLxJccc4DN9TjuhGYb6JdcheApvuhfe5D4iDjJ7Yta6XwadubwwZVD6fpgsjNw1G9RNei2Lu",
  "key42": "378VfQ6GKiyWNkbuTFv8AsWRKGCBaHi6HaxSDxeUkEBiSYMVkmxxhRbm7FW8dGRTtrUEnhu5mAgV52oeVuKHjNEV",
  "key43": "RAd6Svq7Fb3mYmRCqNMRib5hJMfRQqij535nayrP5Q1fGKJzmm9BFV2oNsUFHQvY5k7mLR9zGHx5Z15vbnjf3kT",
  "key44": "4tUuG6FeyCKhDfpRd1ipbFS6GrMV6rD4qqyiAn8sg1bMgkfbxsZ2KF41vY3Ra551Nu4ugzq4wxbEDfwFdMpwBokN",
  "key45": "2LYwBk5wNsYaNokFgg8PoZTxDJh32YvgJ9YL1Q8z8ipXizbFEN4sRkVae4cj1VJD7jR5xsFgK9sL5NAazBVpXTqr",
  "key46": "4DJ4MnN7JRP6hJjZUF9UYwfQXhXHpPZ8ooBz2ATswMq4myPF4aVJhT3CTfo6hXfUM3CS52mLz7oUtFBYJodVHNej",
  "key47": "4kdTSmZyPYFvheiEMfeKKvTVEZTQzzNQAAzgYk9HS9GhntRzWBA5nBcygr3bwBwhJHGU2rucTK6cvHwXehzWRPAm",
  "key48": "5cmTtGFjaD8qMPxBodjyJXygKxFE2aSAT2jWm15fKgefWhbydsFpa35fUhf4FmKM46CD7PYgDni21Hx7WUvw5ME2",
  "key49": "C9Pbag4RqrMBStCTQVBUY4NkK5w9F9C81fPQxBW5UHLpLmCf26KdZzArCmgaoJ7QeH38tSLEqeDfNpgg96jf5JY"
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
