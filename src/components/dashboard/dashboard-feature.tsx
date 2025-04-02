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
    "4w5mHeQuQTwPQ9uZiHZjJqYpdRnZBMTKVULBjDquTLqqEc6oC1rNx1Szw7bABZPMyf6x6jfrPuRHt5xtV6LwFqSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LzwnvopL9z8WVUkdW7hxzAPLUAtUb9hDwmK4Hw3c98TKo2gZMoNPGVB9GX6nnD7FFJBW7Bv3qvStdDED2Pc73v4",
  "key1": "4TBfvFWhAzxZeKMNktvMrRQcy7Ka7npCuMUMht6XFfxK9eENLDTu9uQTQrXpN2SAZDyh5ETv6JRWSsuiaZfHz4qn",
  "key2": "4Dc14zNcSNmyGRG9mUTAwXkqCB3VoGb5qnNfWFtPgMY6JNFZsjGHaML8iXoJt5pxMgC4kBe1aAUjGeY5Y2fikyHi",
  "key3": "5ueeJ7BuSkWRZr7Y5JvXxmzKXwTFMHxfh2DECHSYXV1N8Fnnhe8fGiQWLuNUCcXR7r5tMUC1Wt6DKo51VuGFGpy",
  "key4": "5zxGZbfCRAeGbtvxVGrC6pQ56DUCH2PKR9hvbhRW5heiWhCfrCTXgiuCieDQUbjGNE7YcqivDdi2sSz68uuKz1i4",
  "key5": "5gnHhG9osWpRg8wLwdSnRiUhFAJkfpgUnM2d8V7XLdefuFmQD6z62H6RZ3vBSHmcpU3oZWfhL71yoyzK1R4FqJDk",
  "key6": "4wVSW8Bc32UQbUjTaoM4xRbaY8r8jD9ow6UrF4LroKEiUN3b4WdFaDetp9hf9U8KiSLXgRnpjbzrk7hNMUGEP5io",
  "key7": "3BM2aGbtS1PqSpfpYecckUANjgGG3vsb9h6icLVHEhGKmXD3oHyo9iKEVUQ9wXnyH8o2EwuKAKhCTdEiePfrzudd",
  "key8": "5YuFoBdSohzCe5JAFMocRifCWjUiC4mtUhnPqbRtwyvmp52nHxgbPnkwfV38zZNd5jREF58tEZBrDiYh398riCc9",
  "key9": "2MG3vex1nhG3SK4vsZrTKnL1UwyeMfgN6DCa7hXWVYdvE9MHoPtH8TRZMMxJpW62uB9m3VgE1Xojvn4pdJxY8DZD",
  "key10": "52Wz63CntFQP5hVVhaMGTFrsp1TjCmvgBYhuQbuBxghGKCbgpDXne35py1oLav2c6vciEt2xjHoHRfCPmpDbxHru",
  "key11": "61yD3LG74mE3Kox6Qg3JAu18PUXPVpANaU2B41P8RQ5vSB1qTSVvyenWFUJYeXzAtox7sR7RUZ1FBvXszA3cqeLs",
  "key12": "FQeVjYfu3eMGwASycooHb8zm1EqMATFehZ6xTnPNcXZmk9i41m86M9Bng9fTT3KF6HRcVPbksLUCqAVsDu15JGK",
  "key13": "3VztYLvKPXaECTEDcsaD2atUakvJ5ZcT1Zu5qwB6uG8vKysfeH6LiiUK8ADiMCcFo1GfRz5VrPSyV91EhN2tTywS",
  "key14": "4Nv9zZUEembD9ZrhKuKWas4e17a6VWR1J34xCeirtUDF3ixiGWfJX9GFRPN61E26LmVJ5QJqnpsuz4DdVmpup8Wp",
  "key15": "3wcNp8xvL2spYSbNek1FZiopUzrEu35SKKLNyg28rirYxQRwtShykaE1pYw3cPv7d68PdpFRqvz8x82BVCC5UPJm",
  "key16": "2djo6wiHuEgpZC8mUe5gxNEXH2ZVHwyCi5uyifNXbLTVUbPkxyjfgUFomnMCaoCRk5vXWEpLPTPKryiCQjzsdSii",
  "key17": "5cURtqLMRHexYVwZzUgf7igTSkbdybQyyEbd9ME1wR5NX2HPtzM4rg7kk1WWmELRK1r7Kc7gcL9C9zzkNNcQrZo6",
  "key18": "43WpbF6jzX1FgFFLafxhvvGu4mP2kHdrR4cikSwHz1omhfvLExyQXxPGHWDALmizm71BHfoHXiGaYDrRxU6r6XpG",
  "key19": "52AkFrUwgyxRm9U1zVno1xF9Lgx5HGm72u2YFZ3FSYhrFmLud4zMh8WEeQqmzE4ngnDrkyN8U2sT33EXwwCJwR2W",
  "key20": "LQzx4VGDnvkWNWiRt6x7LHxvQHVUrfE9UBSZid9cQAdyGynSX5VNKsq2U8rKiABR6r2ohXNzKw18feukEDPyX3G",
  "key21": "4xqxaaWhJevxPsJhFxquXAYx6oXb7zH3V5GA6cYSkTB4q554RZE5tE3R8T7KiHEBfr5ASxTuKCwkg4nVn4mDd4e5",
  "key22": "2rdXjXowdQYXZcbd79rsHcxyJiYBykYNrpMH3nwc3NMWeEPPz9sHm5qH3YSKJXDSrZvNGQ9GVKELDTjvsZSieTxC",
  "key23": "2Fygf2WDyoK7dEkR9hjhJjb6UDZ7gstkNYVmxX4gBtA6fYQ3J77PvzefcDNNEAEpq2ehByWg465xD3kKBHnpVK6h",
  "key24": "5iMYMSEkS9TDfnpwoGuaFwnneegHaPz4mdnWXvu1SbhpzDSpo4N6Xc9vCnupfpRrpQenbcCyDtvQxfJQ7MD7h5Cv",
  "key25": "2jSqT96foYy42CZ9WecPFD2b33in6RVVkJe6LXZ9Y9fDp3T26kKTao7GVPg68jpCb1g2rtw7fiCsvve6YV3ceLkS",
  "key26": "FGFYtZsRu8gfcmPySUAqe21z5CDVm6V93FHuEzFsZGSuvXsuWCapJFUZZqyTuVX7C6aPqDPjBQwyJgi8nvcPhJT",
  "key27": "62xuRsrFoeVKMPxMmCjZ2YpD4hdpG7HzsuizBmBiw47bUsGDqzKTyRUvacby72rjA5JGeBSZLXanjn3tWGF6r3u1",
  "key28": "2j9EBBwnoCtMRrHwx1WLzUn8TonG9rRZLr8gzLbzBpGL5zsUhRc18HWKzLhjpQghXTXBzbyjbCfw4HwR3fwCzc2J",
  "key29": "2ZkMw6rbroDxp5sHhrYVoPLPSn4AVrdzjfQTZdTPikztK7A7xXPTBYuN4QHTmeAu2gqjDbeM8pV5Yye1kVj8Ewf8",
  "key30": "3PCS8X9DjXn8YaHShcYNb16Yrht4NzN4L5n3CKgZvBRhPY1b4uJZ6MSFk2GvHPDRZnkne4mvMLPZELm9QViHGtN4",
  "key31": "hTgYHcE2deADBFEAMN3BFqk7rZbvpC7bbrtT5SYuYRXJCZwhregJ5UN1Cya72iWruoADRex4GLi8rWejYvLwJva",
  "key32": "RKFgwMz3zGgXJxS3uqSjTv7e3hE1SDEUsokq6XLmhmA2HZSeAyW6xAfyDua6Kwg89eZT7ZPyMxUaHHma9RwpiGm",
  "key33": "4nudqTh7SiYY4NNvpSKjTWD6UogHD9Tg2uhdshKfnrFNdNdKgZDxFUBMP9mN5Zb8VEFndXgoNSCeMqjC3t1AaPjF",
  "key34": "3rZPt4s1wp2XcSGJnUnzz1X5ajYrutSqtHPcEJuiLLBQqtapF863jziZBw388bZWUyui6qSM2wXez6PskCXYTRcu",
  "key35": "36eAvzR2bzZBgRSVH7DwFuVDEQ7rDn4pwXxtsxDbBbEQnrdBc29XwDwcf3HdibCr5Habz4xJpZa7k4sGVAuXoRad",
  "key36": "4neQZjtmiW2xgHu46RcosMdjfH6SgBGtptTohR5VBfDKCnvEV98bTXQwp1m9rjFXNtHwkkoCzjjiiD2Yy6BugaQM",
  "key37": "37gtE3uYsuaWQJevChFNRshKHXtNHDF2K1UgWb7K434VcdkQd2L1wER4rXJoUdV3RhZyiuxcktDj8UKvsDyHcTC3",
  "key38": "3rcgtXLHhZymM84kgt9q69JzxvjJ8nNiUZ8M4DvNjDu7wBrSNMYqDV14MVXtgM1M7DUmZuwNKuG4tzvnyggzdgBu",
  "key39": "2JFdYyf6Z1jK4cmTFv9AUTdaUjj76FWiveFFjTrPVDGXM2cSy5rsWF59cBYD34eLnx6CFdZ32ZRMJM7Q1SNKVN26",
  "key40": "3aACVRYeUDSCnrUeqjkG5tA5zh17U2By85mKd1HcgKunKXt96JnjmmLRbVY8eB4EMZwkf91SDYKSWTdffB5EsK9S",
  "key41": "55znLuSHsNDA6C4E1JYZbyjL5C7THjogeBpqXkvbkpGgv2HK6SYmBCZRFuNW44xnGyqhqozvErEmYuLz75EiuChj",
  "key42": "wU5bESJfUPtmQ6JtmGGn9zQ5uHKLeW6eP7eqpqYfFuSP8Ee61jXpGTg5wUb1HxXPVZXqkjx7xaqCc6gkUBncGPB",
  "key43": "3iCaK5sLfLM39YExpZ1nbog3xhCwR8bqRjQbRaRCdQ3gTdtSgeVzFcdxLcii5CGAuFQPjptJKU1cBRLoxwWeGXk6"
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
