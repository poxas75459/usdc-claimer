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
    "4CdyXbsuDp1ZLZfJESdRmp1Zsrr16rqGrzwgQrA2jc9VxsPR3KErQtMzS7JQ3TUWQRkwwoxaoEzC12QZRb13ZMJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MBRzx1gsCoZNLAC16qH7SRJHWaAETUPJ1cUEdDtYtNdYwRiVfMWPg44rhX1T9oVVEuacGBG4CnKSfF4KMc52rdK",
  "key1": "3aCbtgP2sDek1j8Py9FB13RB9tAnFYZRXtUurmL9CiRGheyXD4hgjjLEN5guWWe4nonySKCvQxsyFA67WR1pvncM",
  "key2": "3tv7TgnJKGrkDccbCF2NHnZooYgQZXnwqZ4ACNU7jbyCJRdeypw2xZEJ5jpAWy3Lt7NPWKnugn2crgMt2rDapMmV",
  "key3": "8QBV6UMqSNFtX16WJPajiPpi8SuUek3jcrU39hXVUkW3zkQKLFoyTLFizLS6xAof7PHXRuYAucDQ5UKd8kezYF6",
  "key4": "4sVZDYbsJe6tJMorV3An2sACo9c13NWReT5QZLdR2q7DkqRWr8oeh25V7SmdnnPN5jX7cqidbgkdRwgi9ck74MZU",
  "key5": "tzPzQpFpYdfTNuamGE87fMiZ4UEqL9UMXqfpaEoRPTrngRfXSqMhUV2rwjNe8tmAGpt3jMLUPrydPaPSDcmtkMx",
  "key6": "5Lwaef8uQJxYrXcWzgF9aLXrH7kaBLUngnLQFurnnAkFpDdHk37cSvBvDGAHCxpWhiQhhPwhj9c1kj9SpqHXjjQm",
  "key7": "4XPBmWNdypxSoq6JiJAQemkQbBtxnzMXVQFZvYHm9je4hYdMEq4U2trhYVfh5jQmrSPXdRh6KFKPwdCEPuyTbanN",
  "key8": "4eAumKVLetb7vj3APnosRM83rCVB4dLc2aFLsMdJu3VkUWRbjud5eCCVxJ8hmirui1KQLTC1cvUTEW2y8uUvsqC7",
  "key9": "67JfHA8KA7fESu9krxWp6tXJMPSRZiYdFu854wLr5aDae6NUY9ZKyMeaAY1HZekaVFsJJUkVxt9rbrBefhEmtWDY",
  "key10": "5dfM8GDrcND7JaoG6k4bQQwJGUK6HsTtXPRVgdEV5N5LehpdhJUgaW618R1ep9fKA9ezEPeM8qrACWGH67FMkicm",
  "key11": "34XB3YzNrPT37CKeXAbSALA46duqjstCgvWPh8i2QxP4o8Sb1qqoiT91ya6QHRPe77Y7xh3mYkpRf4nm9qApbBkC",
  "key12": "2idR7fi91REJQXzaZY5VDu9bZM5WA9jteDRwgmn83Tf5zBY198w8dK4ZLffQ5bADCgs1Sjd1ojWxaaKEGvTm8hCh",
  "key13": "5cjto3o88Zjhab7eBou9m3VQi3EzniASCgJ95ADSykK3MC1Sz4o691jU67hv1KPTYJ4QkKqWgRZznaXyDC4MWuDE",
  "key14": "5LfG5287q8dFvjgMWooE1gRWy5yntoDiAQE4rL6Gc8S3KhPS8Auf98WDDbqAfyphqssKFDkxGa7nm7s1ManU4bF1",
  "key15": "3QRwgbN7k64g3KDsvUJK2kRZMyBNo9xYuFf73CmwFcsFddYdEVuiGCs1tDsL82hHJoHgnNAU7YbBxGD2rEPuuVmb",
  "key16": "2Svsuh1Kbqm3SWzpCWELYYc6q6zKLPtKmP1WRXTgK3qCAF3b8r9EHiAqNmA6cuB3nKgSUBP435BoVAPfrqDmkLZ9",
  "key17": "qPEZrEimAbdtryJkRoiuS3U7YkBNcNcXfZ5nBwtJFQsofob7jEUwV8hsFGTKDKHAHfWyzjqFy2ShDauNS9Xq1UB",
  "key18": "22nQqcak5QNzHzxpgo11X2rCBGQu9rjEswQ1WgDhrbgtiM3vXZ6cubboKkprsLr4jVoY7BaHq78W5aKL2GKezsQi",
  "key19": "5LqB8r8EKWyeTvbj7E6CKdWTdy7XBpjJF1N9PMsFrdoKRNUPuJxEF4gsdtuBFPUosrbmg2g5K2DmMtHckpuRxT32",
  "key20": "LEmzDdugZZxrg1z9co3aRM9b49G3YyCtGXNhjvR3seCgQWFgHGvR2VyEzsCiMEpKxVCtKxdwxt8iXJUh7miXpxb",
  "key21": "5g9m8bXMabZkgLjhWKTWUPGevfeuF46nszS9aMpJ9CMaNDDQP247dFCCEk4DgxmEuWSJuN2VTmUKGuzVwXhSNJHA",
  "key22": "4wT87DPWhGhsbAF46wyxAcEo2PCkhnk9MK1SwWzKAZSGARHy3K8BusYoJ1Wtnf1bdswCHakWNkUzYTUMDgkYfPNX",
  "key23": "52qri7zDkvcV6ezDJHs8oJ5yDraMgvUzWNKcr2hDLsqeMewQ3iFXVcBSkiTWJmNiXeRiDCyYpiaZzRi5WpmZ3h6Q",
  "key24": "2ioPr69QUbkPnaRXnJetbAMXjnxBbkmfKvExrvjRpy6mZJYUTupuFHqie4u8ZXtsfmpRDZ9AdaBqyRNV7hiPYNT6",
  "key25": "64ZR1idHw2JeNC4wStJfCd1na9aUXPT58M32ACELAtDiH87x7eVQJEd5Z64sg9F4FD7rY8cuUJPS6M6aLUDidPTD",
  "key26": "27dy3GX7sMU5VDirtQbCmUeXSshJMom3cbHovqvUDiCtFeyj9HRXqv4o6S4CzCZCiXeP8oJus7Rr5pYV5YLztBUP",
  "key27": "Xmyk17mLYYo2cVjrBzSYcMQgFWYvNkRaZPD4kDZgkofhGagVC87pCGfQPpLNjKJL3sRnMPxHz7522LdRCLnxgTm",
  "key28": "5ZcQsHsDEFChV3U1vSiT98VzyRuEFJ6WN2WDuyvUNguEBgZ1JJyMC6EoWQxzG4jVzMJSBxHPjNQJnTNKPZNrYjyG",
  "key29": "2Y1ujrPvFmvPpAQfgDN57szSx1LS4HzJ2qPruV6U1ccuo7P4EzV7bZsFQ4skjQ8znvPQoB6N3JgN8xQSpxwbHrYK",
  "key30": "rbD18E7QVBD1mfT8cN84NzXnunGTkdbBUmCtHEE1wtdRNboB7Xns4HRRtfs7N2HLrPuRZsNGMf7di9N52UDrynd",
  "key31": "4mamu3jgLzxqtPMXiSmFT3sk1yQoumNPDKD7tJUgTv4axuyLqcXBnZjPur7fWTJEE53pPKepKpGzPQEGvKi7sGUU",
  "key32": "3ZVnKeC7nYbKhnotWR7ytKrBn3dxnTipfExLYAT4YWiQRcgNay9SxPkuJX6XQPBgEusvLn4fFxqhTC85Ccyzpb4b",
  "key33": "4oAJ4ssi29QDPfh4mMfG2czewYd4BDxqHa5uCun8V3x9L7aNeYcKYUH98KgG5aBLseC1iFs5D9XMZ9XRa5r3N9Xf",
  "key34": "2vDCTu9TD4Vmv1mxmJpg1ipeXcfxPkVtdVinTJvyPeNxUsoQ7XcJKBR4695fZ6E4Rcvow59Ns8y4Rqwqig6ZhZ1V",
  "key35": "bMSnSQqWgGSygMq2jZruKsA5Ugha9vrUHNffDKp1AQQdCSQe4x5QiEnBsEkBeRSwPzSnV5527gfyvApCC6zHJL5",
  "key36": "zi6ELnp78tkPEediR4H5g6HM3LJxrMnCASKWGhCpvWqwfQJNEA2jSPsJ8WnJCV76jGoFqrV6DcnbCrSGWbC2v9t",
  "key37": "SPpVpdhqmifsJ7MuJ3qCRwRyj9hQexVXiWT3RZWL4G5iRMwqh1VEa6RWwuefjtD9FJbfvMiX7b5zMF9yr5xioty",
  "key38": "4hG6Gzw9xkXVE2LDxwESvozCrPoHoVEu6YA2fmX1bB6QgoPQxfXuCduo2dxyobsNBLxy6oCAazaUe4i2kXyK1rgo",
  "key39": "5N5YZYLMkikNbXJnao6yFYL6ScmTMxxLyhMSYvxrgpM31sPGepMM9G2xRTa1S8XanoJyvLLRyjvwZLP5KDQ8kez1",
  "key40": "2FkWwS4JT1R344LD9i5XQE85XjHVWNCpXwkraKrvgPHw4ygxr8dSp83WBNwp7AFWe4nePV95NXrnr6o33v2LLgpa",
  "key41": "4cHERMfZ9Bd1wyDePasNqGQQmqP4arUAQafaDDshmSzbyDV2sY1kqxkyAYmsGDoXqqFi9uqPxXuAyhe5HxPLy6dZ",
  "key42": "4ywea85wnDxYpD7MkiBNm2ebE7f9srLeQochkB3bv64XYGuHvA1DL2pEp6Ex5ouaa7sjTX6DYKQykTYaKr9LXKUv",
  "key43": "37SKr9NoGonP7zBs68TgGVC1KV6sJ6Ao2nZzWPeRbtyRgvercGd3R9WY6K4K8HQVnY3VCej51WTShSXyuAFahz3L"
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
