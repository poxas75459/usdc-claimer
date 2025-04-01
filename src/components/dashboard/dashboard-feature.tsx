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
    "3ND5LiayqBDFeehka1JBoDSzePG34sfDj3ujpJ8sed47wGA4piYUYcuPGm5XDJUdBDipytUYWj46baepTQk232TT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gFTgDB3iysbyr9i6dLi5ywdrRRnRGR4QEprmZeqnMRgcqv5knKrjBDRhz4Y49kCgGz7j43NTfFHrTvjZveLqYTJ",
  "key1": "3QGcQD25FxmmauhPLjWE75UQRKrWBH2UR1rj1giQ5qT38e6PtSQAvK13a4MbbS5PaG2MF48z4EKLt3HTVXfyuWcR",
  "key2": "hZoo34GhP1LKUNvHHsF9iyE99oqX4htD2H7GxvDSxSTA7BiBXRVj5TZEtby2K3dpLTZcfahACi6ytjg4J5U6juJ",
  "key3": "3KHFzkATP8NAA6aUrmW2kT2qHK9kxxY4T6p21DXCbAxTc8HxFuioVfUxstbFw8u4ga5pc7KMeGGKLsMZDjgRr9r5",
  "key4": "5PbLHhLPGxRHBfr3UcgswZEUsLoQkhoYZQtqUSbRHd5nSmybphPnCi7TLB8cXsy1y62McnkTwc23RB7noSzpMAyT",
  "key5": "4JTraLJ3GQaMLnZmk35tJDJAfay2kcqKCq3BTcVShu4jLh5GH1nbBM6eggecTzSULvTdozkDV31MyCUF3XwVAFdQ",
  "key6": "KK5mueKzkHDgGAK2AShJv86sXtC6n7RyvfDANiwdFmk7w51ebvVLmHD5RHdviQXzu8yMw7kMsjKCk7EfbbEU952",
  "key7": "5kVAqx5pXXUAQANWVouzoVT56bW2fCPQVsXXfy7wBwCrkjhKJAhW4uYYwsFavhZnf9jPcQUDTwursz4CJT95Ae2u",
  "key8": "36tVP6B2eeh4muM2Z8CCjLPEn5cCLKy5gPoTkxMsDxrNNTufkywPxTZaUuP7jULkYtwKUv3rHJQquegM6WUyfaRj",
  "key9": "24zhU2T4KLLP31R9vuy9KqhUufF8L6JfdmJZ15ZoZcAJsGjR3NCXVPhhusFuokDeBg7VQ86kgUkDccqNTE7w4DmN",
  "key10": "6zdJTFq5EnB1Wjjc62LD953cMjKqfagAJcSCU2PvPw6jxGTYJDD5hePqf8fiY4GgpUXSjveRHiZyRWNXqm6dwkH",
  "key11": "4cT1p8tu8gxKdbuTLPRGM7qjnGXFeS5gkJN2RBdWLbyRp267DueCXEQUP378mVMjZKoEPG3EbFKkSEonWjMnSiHm",
  "key12": "24rzyczdhFq4DWwWwJujYiZ9v1wKVoBjmVkqKH3eCsMeoJhLNe1KsMRmcicdpW8Tmbu7piayrQedingb9NgCjgh8",
  "key13": "Es1kRRcfZBgTaww4d1ipuKnpe3tUjyysCKkc7WUDf2tzAzgT8WkqGHiQaXAe2fCvLR9aZUQoQVPAJBEws9XHAV1",
  "key14": "2coxjApBRHvRKnLUNhZbmhtA2k9eY8mb3Dpro3MwNdsyvpBt56kpALJvYUCLwLwm1z1eYrqUY7YRGqVtmzz81RyW",
  "key15": "ouTYa95eJNgdUC9iQcTHQB2HwZXfFjeMKU6fYj9YnM4dR795kPJKR9XotGkYmf3cbvqp9V1sUVbLhXMQeckz3ZA",
  "key16": "2J4opYuJ4jjyunfoiozc42fFU1nDQw2BCL3DVcFAN143L4p81rvdphgjWmCGM18y8JxunoG345L4HadAnm1QRXMU",
  "key17": "5yr33Ym4FcYjYqdGFLnoo5Xpp3jvJUQMem5aPZPkM873zY6sNR4gVK929ZFbikGo51EvMCCp7Xq3dEX6HjbHdUR9",
  "key18": "wBZLSXLUAwWvNC7csvDmTnCvnwQXEPVBTN3DmGRhkiFhTTeEv8QygGe5RzFpjiHVEtgLwBfbzrAJXrcDKv2Gw4m",
  "key19": "AkGdo2oe2YfFdPTzwxoV2FqdDmGtxDgX6XCTsTRGS8oiUzp772pGa96NRzydmjzKH3xCBQsZVE2tXzAT6FrACes",
  "key20": "3Y2rYVmcVJebHG42vP829JL5w1iGvZgb4G6m6Gs9Gpxj5Uk2E286sBgJ7KQBDtKgAEZs2EdQbBZBuRwQerTvakVF",
  "key21": "2PJnQRedqh8NGEGWM7ZtYHEjfNpUZZEHYvm8FDaLtco9Vvc45sBGW52oL4N3eHbtePX1ppZzYJWrJ6KneT2Ck9xB",
  "key22": "38wj83ozkpjKEMgYoNZwz9jNWc6Wd3BxGdpx1XJTfX9Xxh37CZ5PbJ5EsgvutTvVhgwwKZFyGvQr8v6RMbUFgqrt",
  "key23": "46UTNwtot1JCHF5Zvg6bXc7zaS5pBSCiungTmq1VF167WDxkYjzUGRSSczYvQ8yWJ5ZNd8EyzYiKz24XEHeuixn3",
  "key24": "58nGBk8Ry8ssrsPqTmN2VvN3PosGBFbx2dma1Bdp1iMWdigkJWs8FjwoauU55p6wopXmGespq3qfTLgRrw3KVcSH",
  "key25": "47yKEc3pg78ycK6tyg2MPTMMXTiBfCUR2R84xmv4HKjy731oQvqvbF9E1Xnv6qg3mbXcyuxeezcjn2dri3jfS3ZW",
  "key26": "5AEt5tzMW3rjPaJfsBpCCv7wLpFSEsJCWGSEytDZA1xfP4q5MwwSzHtHg6SmrbqPc43J3pBsB9bAsJdxvx1dGDQN",
  "key27": "P9kcgmgogTCTZ95NRrtVHuHqegB6mRtjsEcVeJFioPfV2UFY64nHt9jti1KWTgXgCudgp18frS3u2bunUrxsSvA",
  "key28": "3NYYNAmQqP38BdH6CjPf1QkVEP3psxrmEFpSs5bqk8Nz8e5qnL1q13pZiSVeZTWLhzY3C4C4iMC1RoEPHSngyfZi",
  "key29": "2EZkpwexLe8igBsSUF1sXqKGdGUuMd4AG2oofhHpP6pxSkxascjc8TyrAjMSer4GTLVDvECF9eXQhmvTmerjSHrK",
  "key30": "5J7nBXsAg7WDq36z6BscM8tt3zTWUgmW492VXR6hTmfgWkR1U2HVWFhhqpmsvvj5zbh2c178nNebnWS5XpKjXQwy",
  "key31": "uEAoVxFzcgowQ1yW4dbSfguejttAYYgnn64zzNT9BDfHB99juRNd1zkkJKYM7bgvv2ivLtdwCN2LBirSf27vggU",
  "key32": "B8mYwy2kJg3NnBktX5NPqUzqqdh1VmN8HJedgKN4H6iU2M5rw5YwfrNrCRihM5s8VhGEUdkVD31eV51qVvnHtNj",
  "key33": "41EHSeZ27CbQy4NJW1dbnivjiLNwcwf4RTQBk3hVNSsuGmQfbZY1RTTB3YegciBUKYtc5cLfHUZ8czszLbBSyMpB"
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
