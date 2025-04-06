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
    "afAkqnLVNQdCshYJmtnGNxTNNoaz9HDvjRPfu1zqV3pep7bxqftB73FkFW2ppvpeuJcfyyE628oEVcvWZdrBiqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dcgrbc5Yv587HtdX4t5BqpFai7mQqPrcoZsEJEtZG3bdrEM8cVsAckTKVGnhqJH3oKUq7cN9PYZAw6T5YBp9wWV",
  "key1": "2UoLE7JhVUetVhoARamPq6YGMydQtTZQw1vha6zKYVnqY7v7hcuiSZNdUY6AnPGHEUP9ExxaVu6KoWX1rSErVfFa",
  "key2": "47gXrcASCoJxwmomnCJ6e8j2aB3j5sdQNFjAA71DwUFcVQgNgLhhFGNJdx4zexEaVFGQwxe9UWaZwzMx4A84yKQv",
  "key3": "46BAf7Bwn3g1RJ4uZvUNBRsr2ssGpps5tgdDoW4tNwudqzRbJRYkcb6LJ2BJU3LRxGAQfDfqaKGhSpXnkbQvMXJA",
  "key4": "4quNu7kNc9D2JGNFKVEVnrcmaWk81iwAg7SZm6iEKoVxko2UwvpGrsWMus7wyuQ5YbmDqH8TZbYcQwU5rdJPnBjZ",
  "key5": "5y4v4ZgU2Cd8mB8MtBgSHTwaLmDtDE5U9er4oFBu6nDqjB8LE7SjPAF6WjebMsM4nqWEjH3QoykX8qvwsVQDxr6j",
  "key6": "FD4uifWWBT6qgeXAXECPEcd8gSjgC4uaVrq6ZyfERcVCPckuNC7LFDCHvvjivoZ5ZyugrJ6BwgysKiSeFPtfZ3W",
  "key7": "2D7aBvVP6SvTLF7Y1uaKEVJqEZSTAPwe4utjKLj9rNNKRMxLXQPa2Ss3gLXk76NKn5ydHFBqjaHbXovT4RJtCo4N",
  "key8": "dvAM3FJKR7MYHXcUz6cYJbe8aS5LhN8i5Xdn9euaBwFRrJnEnvDYf7kMr3r1J4atb97qZnJTM7KVQmYBMRU3e7M",
  "key9": "2Thbo2RLQ8kKgfk1EUgkx2tjN2T6iMxHhf5w7c4ARBoFXkUGZaFLSevLkbYNneug6MBvKM1eWHRBJs321UM4X9Ak",
  "key10": "QQdizQtp49CDz4ZkkNYernKz1y352RpgqnAXnBNW9G7ny2LciYCzBtmtCeeMsdws6XEcdqm2XhNTRM6BYo8xSQL",
  "key11": "2qqhgomQyFpg5mnQBwGq7QVSb87Czno9AuhMJLNwP16BYuCqDJyD77vTGceejsGY4TS2GUNrk4zJYwabQsG7ArG5",
  "key12": "3XpzrwoHhCBvfpzxpxbVVT2P28kBZ6m3ty384Sxvw7r4751tHXWgXtz4L56SCf2NVMSEUL44LbjsKEFkGmHTLiFT",
  "key13": "5jGwotGXvYw4DgwmtbLfcFRHdqtV3mj3Cwg7Xj8ZJQcBCfHxM7wU5Z7sqqnJgjAbm9vnmVaBAWLEm6NNqJhpQqic",
  "key14": "4uYYjFmZu7kbEnD9vfKmGUVG2nEdKbwbZWazDUpsCReJTnUApCJWhe7Q6kKj9NgjEghmkeMUYiW3qBHuEvhCd3pz",
  "key15": "vJSr6CQJbr1ZpZ93uRudW5rsKFoT6CwKNvfuPoz4r3WAZuop9dskzqMdhpnTj3PMMN8XHJBkZsh3JPuEHZpZ1e7",
  "key16": "3745Zt1v3rAYrek2EbNN77bBhhpyUEBp4U8dzWrgaVYosq33SzPYTNN9JrTxhTnyiEcp5jnYCipL5httC75hJNm2",
  "key17": "rC8Qcqer2YeX4Ef1YMwZuVjUQiXvJU4pzo8B9f9R2cvTKzWRzuSfNZT8bjbKRH7PtbEfqrQpXdXugMJf4d8tNGk",
  "key18": "4LqLc7f2cQadvyq7KfnKf4MuPXSPDNqwcLexpzf8ZwGs6rRiip3MMwETgb9XHFNoxziLUuTSWuVwwGfXpwMxJ9xw",
  "key19": "4FJGCXEhD6miah296aCkZQQnqaR7pRRYdTpRzpt1k5mzjdZuu6quAFy5RHgHcaxYGi5pJsxZ2vbV4L1pJi2x5JtQ",
  "key20": "4qjKmtt43CjrGsD8eRMdiVkyFBaDTWnM3GaiXa4JgMBdNqFgvVuD9auYtr6zS6thDx1rnyiCKBS3Zq6z8HHkwxmN",
  "key21": "2UtHmgRBteAEFxwy98mwMc4nUTNdMaJFMrAxZJKTEebRFDwHipuryW9uxV2piQswvqx889dUKGfEoe95PAK6umoG",
  "key22": "5HHtZHV9VG89GTFs6MVEZXkE7fvfCknEPD7kU1Ay34DhjoQL6iv99qxCBh3utaBbEFo8cwFPft3NSC4vWy4m7zWt",
  "key23": "66xNfJvAcAt5BEXGWrNsS4dYSDHHTDCLQuqT6u3goJRm4toXdqZ754jQAXA2Qa5y7JbvWTg5ht3mGtNEMf2YCjRG",
  "key24": "4ZKSQW9BbKP9LwCMdwFgD5ADqzWmkaaFC35Yf3v1nH45zx5JY1EpSmExyafP9sQHUtvibCuKLoysYC57AxnMD6wV",
  "key25": "3ubGF3VNoMg1JD9QZJQyo6LTNsBAyQkGb8kMpnHYYuoskHRngK7TY2x3U33KGqZRxCskn3gSAJFEzVZdja2SzoWN",
  "key26": "4qTaAATFsPfbmMapzLqpk3tC1yptZC3ox2tm7K1pgTa8eNTjGLk7QcFu3LqKj5F35efRvJG8XYpD23L1dLw7B8U1",
  "key27": "5dNytcCPgmm3BYz965M7PBu3T2G2L62w33vWbMVEBwv7wrSWQABFpgcNVP1xqafUL6XHKVYLzjHkeMe7eQokDnQu",
  "key28": "66z6Ur8FHhjjhddNSWtruf3S6aESuU8hp8SuvFFS75PEjUXuSx1vs1xqJkRQFPSbz1g7qUddnDrT7xaPUnCp8Qer",
  "key29": "5j5396mMS5yND1JjkYYk24NSqjN3GAgeuEEeCbfGhzo7399QxS55pKAtkVuxUvxvYjVHL4kswL3gXJxpRQ9qq8dR",
  "key30": "3dJNEy6TKu3MmRnebvAmQHBb4Pv3Y6mGBUnss544NtgKqH2kgKwDaCdiykM8a36Z8YuyC3VRzGbqypVffJytwD4n",
  "key31": "2okdbKXzu821PQ3hWcHDgXAdp9L8AKnDLUK98nhcwwTGbZisYZ93PC3KqEkVLhEzG3khxmPQpf5uaW94ZZwtQ8BC",
  "key32": "2nQuYGLgZcneAKG54aetDrd6NUh5DYXs27M81QCkX2nBtctWV56PJH8uW2MY9Ho9VfCVTwtzeDAY34Ump4bbEaZX",
  "key33": "25VdQ6B3C12nJEh7aN4ZU9Z5B5fEnjrPYtF8B2jhFZkHrP1dayAh7ibMCdv3iYT7M4xDFa8R5ZVeCFtP3LHZvrrr",
  "key34": "4y4NJBNSuHe9E3EyQZPDY2tZtp5BQYEC2SvMZuu1dqDkChsMWy6K5uztcMDoDP8b5wY72NoD7X7LSxHZ5Xdm4S3A",
  "key35": "4137Q4zF2QbYM7wBVQJqu822aJVRo61NqxMvjbsqwWUEGEtERT66vTQN7SSd8mfEJuuLvXdbDVbtsf9KJmh2Bf28",
  "key36": "3mc96xab7jNa8UcFKuskJFWS9iNU7C96q2SLQu8jdeWyaky8uzmKBA79oTtXQeAzSdkaiNWik5RwKgiDcRLhpU1t",
  "key37": "4pU3hgtExP7ZYp27JbAaEtPsrvhB8sWeAmis3aGPVsSAJmCc7w5RfSPtZa5hF1j6K7EqMkcPcoJTR3NwmmpGhwwT",
  "key38": "4Tc2L6J9WYjNWzesuMwaUnudnuRYPoKdnXnGJj5JMXb1pmCGiSmovrCi7vpJY6qF7u9Bp4NzyzsWxqequAdskkgZ",
  "key39": "231Uey68UurLdv7XYhH5mWNidxYAT8o3FnnkZti313BcuEjwj8XJoZhKH4wmntB3Jq7sacdohNhva4c9oqrYHYVM",
  "key40": "4eUTbQMBav7iBFqXbFchb3vYQg5QbJA7sdVtcscZkZbw6b8cov27QtGmRxdR38dGEMeB2tzhE3PDMFehgqwH41eF",
  "key41": "59NEmnTozEWe2BbLS34qjK3xsq97GRAtzVE99CiHx78tdVMGC2NA7ph2VEeVjnMhr95Tfu9bUH2PEoa2dBJw2LMg",
  "key42": "4PD9Njqm4hXkLMpFjKNVsToYimxQdzmdBiKC4JX9tk82DFTZ2Jm9r3saLCZQzGMokyvXvaRQsUE4i2Fhmi35Tvuw",
  "key43": "y8obd3138f38Yn22Gr96obGJtQ19TBNf93U8MvpEzNGgTimvSpRZHHzUs4UJoezY6XMNBKaiDhdMT1r4HiyuuKJ",
  "key44": "qiTX3ApKRhxigH9ENWSEbuaboW9nyZCpy3VuZJJk5KC9y9uASFwgMqKZGLcqZ3FGq1PUXbhMXUUJXZ3JZHMWdAQ",
  "key45": "64Hy6p4Hru2rBZ6T9qhLGokpSzahezChDwJYQJpfHPeL6F7uqDLoqkPhk6kvNiNc9ioHFpSAzSvEPGvQxMfQj7xv",
  "key46": "3yikQaCUT5DgQVRCw8QvVipVrpKLjCiYtVCmd1SebgHVkguNMTm96PQAgXav1oJAivZkMRVgR4m4hTdig7U1kj2f",
  "key47": "3ftf1kRaTUVcj5qWFihiXNXDJFfVRZgvij6UQ7rRyNUg5cGe2CFrMTf8tvKSWaGCo2UTjbrrjzUKsAnFvb5bGyJN"
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
