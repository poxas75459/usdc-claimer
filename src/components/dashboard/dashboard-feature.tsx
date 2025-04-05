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
    "4PtaEAs98YBqQzDWgcP1SjQAgrPoiJXo2Hf6kT82NFRTaFjRFYh9g9m2RmptsVzVvDJHopVSmWediswEZc6JufGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U4Zo82J2tEgecYidCtd6UPKM3pTj16Mwk6QYZf3UYgyypUQJcLPUBwDDDygmzQKtMgrp84DXEoCNpq6J7oUXj4Z",
  "key1": "537p8YQSpzE54MchVSBrGfiYPubHPLfvyZ8LvBKwA63y4eqzMqQR2oPeiL6Qebjro5Sz9ypuYUTMv8RNDDUDSKpu",
  "key2": "r6X3YbuL4PhTg4uSJjjunanzcjhiVFyY9VdNq9arUAD8dASXMCHuR7Pwx9kXUHb3zqg3QBrN2CsiutkAGTppDEX",
  "key3": "cybx39fRhMAbRAqWTg8dqyPrGU2AZ22HXiVJfyqLzYjFaWygLhq3Zby9dDbveN4hqkmU6N6cpCWFmvR3RdgH77F",
  "key4": "2do7D9ET9mCp9zeu7K6jRLi4p6g8XUMuJzgdodYz23Ujr9bWjSHzdgUCJ269pvtb76mvDfGptPa4mM7JTKonJxE8",
  "key5": "2xSKxUvcBHDexsY2tw7aMzPQdRoh68rxHTdtH7i4q2wMRkqoTrRuNVSgHaxjc7iiGyuw9uDhFFcWcozZUxrfNSNA",
  "key6": "2hL9Dvvt3Hk2KAptGpkw9yAXWnRndE5GgLRD62nvcAFfhwvNmt5dLeJJhZ5VLu7XVdTeFEuVgC1baXxwPYW2xcqq",
  "key7": "WzFfPioKmdkvzDmNumGYSBsDGxAMF42CLvhjJJ1yh5CoyYDZm5dbpDDwBcyH9ZJ5M9867jz7h3e5nXnsLsapQGn",
  "key8": "3c1PPdJ2wLf6JVSFx2tnPr7VdVuJMCuzpAhBxCwRaRxrxBZgnxgguEd4wqaDu4AFAnKr27ZaYKP7MpvBeDRQ9XSg",
  "key9": "4DGnUeNDzBFFqNiXpy932ptEPLuER2sfigdvajdYCPRBj4BzccxgcgYC2885BrRcTVJh9daYtQjhXgCoB2dee3zU",
  "key10": "3gosG3dshi3z1bXHAuC69bZHRocEuUtMQWiM6cw8eoTDD557gPsk6g1CG3vr7cT27TswTN5zHA5xLH2URUN6aLwp",
  "key11": "51LQkYDtJi3WRVdh1yTYsriTC1SaqLTu9XGXBgtkPapSmxSdAkcBorRXkSeSL3SSuf11GYm41bheRaaDPKv2As5M",
  "key12": "MuJcTDmCdwQDvAdgJPg9SwUiptKEcJgTdvmSa3wHmyfA7axfSJ3uMosJrBBxRZYJF7rsdpYtPCLYRiDQKmX9zAn",
  "key13": "2qbX5x9L8XxJawR6G1YHgFEwfeThoXoTxH4VDjKKvvrwciuBkWDtsn34kpasBxav3KjCNs3aSzQkxUCxJfvdQekb",
  "key14": "ait3HGm5j68qrPcvUx64jMpd63xxMvUGdcMgLBEfEW4KGASrFVfHekcsMPkGBe97uoRrf3XJ1UXHhKWevibe1qP",
  "key15": "opyJ4KhBknGbpwZsSrCkREAJT9ucGRQsPKuDUfvvmgvnZZgVRgNryqA8vjcyg1p5m67HGp3mkwWxQSRQXjJzxgJ",
  "key16": "2CmKKnsvueSsrVgumoktfVBVPYyQvrHAheFA8KCwXurPyjLpyyoT1PX8PWj5DExhCnvHX8oHRPRYx2nUFrpVo19v",
  "key17": "q15SNpgEdwzhQxkjfmeGtieNcwZcDttD3sKRn6vFJFT6B3MEM8NR6KoDUWvPSm4mwZ9rSmgERxgUW15198kNuVt",
  "key18": "2qaj2U8jBgRRqNNcUQKGvm5VLBnCtLTTSHXDWFKaYiyxJQLafburNvfJNeQBvUxiaitmT8LP4HpVXzTaiUAvDRkD",
  "key19": "2a6PSz6cUMERwqXvcWhobvRFiqJ2Mxd8o444jqMTmMNScWPHDJYBGPV1jy5CxQZaYnxYckXDgcnnzFcbGNLZvB82",
  "key20": "2s49JdVBfT6HXMb49ZtjjNmosxgTtwdeBsUArwq1i2oN7nsK1aeWA3ZZrQfN2sUaBpVkVQLMGu9jt9w1iZRWNdkx",
  "key21": "ieLvCksN3LKRhm9j9VATHgPEUwapdskdBLzRXeDQemXwBz52BtQcG2VoJN8dH3ZbMP74zd9b6drxMQDbXdvTbaM",
  "key22": "4QZDq1nFjwUt9yzHqhoWXVXRX1FyLkRvb8QE5Mc4LoH7uZNgXZS8AKcN5KX9gZWWFvaSGFuo6H7e3K7AeHa7mj3Q",
  "key23": "owdbAWzj6cAtAvS9xsNG86Z3dKwz4EvFnjSmLji7ExSgdezxx1ijJ4i3kRuU4zY5vneV59WNquXiWFEysZbW6w6",
  "key24": "5NA6HiiUitVMYBfK8WW2dzEcDFmm32ku7xpnR96GiJcdBv1aqj71mGeLeKphsxHirtD6Cw3GsF2QwtEX2mimK8rv",
  "key25": "CQbsWP5ztdAMoXziWw7v7GQFYMquFBREw1ccCeq5zeYASSzAqqKWsgkubVGyfCiV8hFpKhqasB1UTGCidV6n5Ao",
  "key26": "37kbD6pnqdBNo8aiq4y9shi6oYwtPAUZXVSgrk7MtA7N89SiGiyVCBzUJMqtbqchbxduYWk8EBxkGJH1N7N4Sq93",
  "key27": "4oVJEjWQaVKk7hUKd4C1QZ2jTKxdaqnZrKo3i1j6jm8w5ADDMyoxdrC8ekRGWmjQQQZLYbLsKDQsWJaCq2vdC7it",
  "key28": "5kmwA2hpqphKtdGJ6H2ohdBSMToiWqDmFkAh1CA7LN4t8549NpmyovkNPD5ZEw1yXcx4yQbfLJ7udsBbURXDZtei",
  "key29": "3zqBDL7dBu6u1o21E1BdvPtDfkLRmGAc4HQi7mt5rs7VywB6Th2qgA3zxkAB6hxH1bZacppb2JV2cAY1xxfWkghb",
  "key30": "5xrh9bYDPZv8ZQaWjv39SAMs4RPgrGmiQm9LLSUendbpFkfAvq8fincgbvvxvfYxB4VJKgPHApirrwC5xUFiG4sy",
  "key31": "5vVZR1VGqjDipdR9V26caLHgaDe53LsiemJKKH3A2gUijoDYNwi4vWgiJQAF5taZ29AWpCaCLozxixBbAZBHWasf",
  "key32": "4g7d22QMc2nvRB82GAd9BWGrdkeuy7SFgJiSGKxCwH4Yi6skdynwRNKemAiNVMiqP1DfzKCFBV4qg8hv9rQAB7Ai",
  "key33": "3K9EBc9taXAN9kHivBiUHGMi5G8D7qeZvYvtv1W1VgjLGtHButnqaJZQsFiRt52Bh9b5sCnVDCLaTPsfMiroV5D2"
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
