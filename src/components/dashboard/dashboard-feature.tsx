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
    "4giXmucem3BKyg5NJyMgKVur5misdh8UqJJCchWBR9UrQorEnASditF3s9pw7YxSiJFixXjhGBZbu185cxZ8XzRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XFSjo7zC1uE9Snf8QMnNWtj8agVNatzeJw34eTyCBAL7ENP3StELCNrJZ5ieuv3CEvnZPej1kG6V1oDhSLKuZxf",
  "key1": "2A178yR7jH75mq1s3jtLTKDCmGhZKMZ4yo4YDExWuynnhMWwRir5tUUWf1K6q4hqwaxMYMs37tUpZoB1WzB9JRAm",
  "key2": "5eNwMWfZ77chP39zXgMfUGD6tmnEBFGMzYS5Cnj6XwwJ4H72aNuXwpYcgguUvsnwFwVtnBDkGPX3TtAMUWikdUjc",
  "key3": "5mv4xiBFhMvAHDXBZz1T8XewHqw5u8JjBYwRB6aRNh9FQgki8EG14Stj6Euqsbxn1Egc2YUSAUok4WAFtUJkccu4",
  "key4": "27ADR4ewoLjxQxcW3V4WZ9iSjTCokqvt4Ln6Fpsdm7P2GKged4NzkG68BkCA6tQ2z1YkbwbDNWgbRoe2MZYDCSNE",
  "key5": "41eSGUZsa5fgu964du1HQr9H7J7CCwoQawR8W8YydF1iguEVsAd9xwfxPxVQBFzWiAkAwi9gs31tjvdfbRe7BeHC",
  "key6": "2zqbBMjMLC1etMLBLDvARgpwvM4ybAT8oaf5ARhAUyC8pzcNTJ6ZThM7Ma9nzoN4MeNEmXL2iKnJuMDKwHgc8Mcy",
  "key7": "2PBXjpJUxdxydiPECnKhPy5JnNXL6gUsK1pQmqZPvGxSxjtSvE2tDDAZP2YqhWK6PKUqEkEdTsuQLe17roLYFdJu",
  "key8": "2zRhFEJ3YTdZuFdchSn5zFXFCAPfv1exM9qCNh7zGm1wRTUcJLwopaogvnUxoB5dQeACQfkcnwcCoHMNAuzPJ8Wc",
  "key9": "5qRQLppGySKLbVbKv3ra3Khaiqn97wTgHQUSsgZyJDH8GGToW4deX6jHeqW5cdcuxtw6Kc53tKmec288s41ZKwqM",
  "key10": "xrimijwTH9Ld8rY1CAtJzc6EcqcanncA8EoYMUEfTYatasnyWPCioZJdrZ8us9chEQtVHHKkNiYpeogKKA13rJU",
  "key11": "3Qr4FVKkfw2cHb2y8nfKHiwwnrfqLuPKWrcLyyLGmUcC24F7kYAmP67VD42293HgtiofZn1V8uW3yX8bCVjcWmdo",
  "key12": "4MVXzQ3Sgpdy5mkYXXXGDSEfsiwkymKEf1BdywYy9yyyEq5goc3y1jRPrCWWra95o7x849CJsNtXB9mNSkpnSYxC",
  "key13": "i7DYh9SJDhDdfANX9HmPfpZbdjbVDq4SD8ELhnCrjxymY2xcFrSWdpGUCSzcHD3gDVBWmtgg2tkxkrqt4idqH6t",
  "key14": "SBttkapQKYxvwNgALTaedCc6pCNASvsXeFuL6QwerD7H1JCjZ5G5jtgj1jBf9Gf2aWmziLr9mQRZJHg7Hi4fxYm",
  "key15": "DYaLky61CBQiQZeAGkQUwktWgMKqoup7WWJgBoCcpPRKAf4qA3REGrbSMGga5pzQ6ZjJ6pdVoFty27xXYuVYfTc",
  "key16": "ioDjEgTTdmhBjsbA9er2VmT9DWbFxUPCRYt8vWdF4Az7ZP8rk5wf7nrQwtTBfNQotLsh19noTi4VTsy4JnX7J3V",
  "key17": "3WHpZvRjhcGfw4T5bgcRBge7eAVuVWnk7mEFhZozC8XQEz43H89LF6LimJ8sFgeaDTfqsUr3edATfhh4Ly97jGbZ",
  "key18": "4LuoNoY9wYUAUnyEJeoNJf66sKG3jUcBMtw8iHczJKwkC9HbUWo4xmebY3tQAMEgLaaHHT74CB5DqzHaQ8W6id38",
  "key19": "pekpBVuyrb8v1CUMqvTjUuvpv7NNGJ3p4GHAJa7ZvZEYjyvHXchdtp1GVpSzi5JSjP4GKjNvNrebLNfJUr8szXQ",
  "key20": "4H4dt6hBEsAVpYSByz3N4WGzRAHaGoMbNX94zNF9knPj2mvFYjhv3V7ne1TtUmr74r6owz6STeMHCa9yEZK9HT6W",
  "key21": "2z5RuvTv9cgX5XEZxHi4iJJq97SgZCYFPjECtt9GmBFeuF17H8ZSDJUwz6EfXAfqRL2o3dirvnUfdCw8HXD3uUqY",
  "key22": "3vtwpJdBwNG5JHYoLTqA7T7xNW2QzUD6FixJhJaLFZp7njxAnzNsogx76abt2jFF2rw7vKf57zSjgACtpEoZDfsv",
  "key23": "2Zw5rM37nJZGaJox999PZymgZmEBna5Vzeuyo4uKSYKcRQJ1dF7DgybdCYS66rGvBxGAes3Duy9KG86SeTBK6ZTD",
  "key24": "2sLaNyXgtvBvd4tbma3xXTkcR9N71yAQj5tGg24UDyDtHFmukfbbw2WNwSy3fDkpYjQgHwgKBojmbPzyFP4rdTdE",
  "key25": "3ps66D5iuYahJWh2muLFtvGb2VjMiieAFfZxXa39hfSqXPtrMp5o8LtfZ2guV9ZMtgSYKdfoHE3BpqFEXmSXkLir",
  "key26": "2DpL3qPjj76GCVNQQo3UEfZZjs7TLkNu5UkNSrNkJW35zscbwboXoJT5u7CC1rERpFCC6tgGBMd9G6bmoNFnHxhL",
  "key27": "5P8MR9b4Zt5fYNxg31YTKaTgspjoJwPXjY3jofw4tzbKmiMPN2JSZwpQRaguziFpA2GxiTgGKh9VVTWd5rS2fjp6",
  "key28": "4pG7tarv523aS1oSbmCGfWq5JYZSwV54qn4ZqiYPokE6wbj5dv9vEpXdudBaRkUGMEdG9NVoP3gP8bn57PM1e9gZ",
  "key29": "51GjQjZ1XaLGWbZCv5ZeoEQM4WpqmYy6swMYy5giw1ysTMsUyJbeVgjf9AwbzWnd5V8f1EADUGfEPaBgG2SmjVjs",
  "key30": "2minqn4Zhvej6dh5VfUc1o3seEjsHYiH91Wyjw7BjDRe2ajxNMXukYGmRcqZS4nyfp62VC9LRi1HyWLd5jkxuTZL",
  "key31": "5kF5ao7gJoYvm7VWorDo8qFY5Wmp4wdQ4yis83p5e2xR3tuq9MYaz5q6Pmu4KQ6BW7yPnq9RLzF65C9Rk8Bc7itg",
  "key32": "29MBZc7yh7TquDtcRgnDJGaDff48gLM5ysnGfaEnMjwFxHwUJwb32GWhZHiGNkTdo6vdjSKhwEY1w64HUSYdZ8tS",
  "key33": "5xc4A9PP94vvtbVG66C28wCVEDYKYchUVnhDsYQhJNWFx9xBRZ3UJs6PXv2TiNiqBi8P1jcACM9RsZDyuPAqhRuq",
  "key34": "4FLKoSjh3S2Ytg2UDvePqwzPivCigBHVvPuYbjLc79Zq8B9YVvryUf3qUp16GdA2rNiTEXtJhp8Y2nLg4oUwhAA6",
  "key35": "2RHjw9xw6auWJjY4LbTNjEnExGD5vHivxc21wujjLQTzMswY8yHhiQo7nbqNqnFSMoNtqmYPj12DZAhYfAtq9Hu8",
  "key36": "3FcBtyBakdwHmaYLKJDJ8fwXP3Bp3CGP95ZfWEYCk82iHykMo1FELUkah1QvYogBdM22sYFHpKGpXqLfkwFreevv",
  "key37": "4i65PLNWsQxGacHwbV4FhAyDxsd2LijAd1H2BYQfVy5EYBRNVD7ZxEWR3PmHrfyAPGAbnuDHfb4UdbHSzuEaDubU"
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
