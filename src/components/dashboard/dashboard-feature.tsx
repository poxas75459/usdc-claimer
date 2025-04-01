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
    "6rNo5L2KG1L2G31FaugBer4RvqHTy3Uhu5jKptabB3vXnv8GiqrKGhcRfeCUtub2AvNzsmTbynr2DvXSGRPCukD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ESEHfu7ribxNo5ZspdhdaUBRcrkmyZpUFq3swHm48GqbsDS3MiWQdBUqvzWd4DmycbFDwr4c399kUTCPTu2ZwuU",
  "key1": "4Fd5FiAgAiu6ym2FYq4SFstxLNFK9KKaRhfMPo2QU5uZySpXzKJVvy8NRJQMzFZ5K8gXBBdgn5TJijiSQYfHE6aQ",
  "key2": "d9ux2BeL3Kriq8apR6XTiBKmuidZcoRnyhDgmnkRSHFC5zGJzhjzk6xQcHaHDJRsx3dEctWNV8qhLtZw1k5LF1z",
  "key3": "2VE4VeU7mknAWayVjewXkKYTfBpEWYSfgf7a7gCfey16Yc9ZQTXcBvPJsZTzqNhZukFs6zZDTHrx4E5DtFyopvBc",
  "key4": "4YdFeLvwJX6tLtRwAgKAVy76t89y6bfeLe3eZ12MeQPJNrYPTMLKoEPs3RGJyZAzC76YfD6j673WYB533AEEgx53",
  "key5": "eWaFuAN1GUN4NrR4LHVoiAzoGSo3tQMWiRVJ12hPJpuiTrdxT8PEh4Aay3MFRsyKwBmpUoYTonhpwNg51ZxsVcy",
  "key6": "3H7cJhs9ey8aSNFWc9hYCYeLPmgtVEjXLCb8EdVdDvxmJqJ3ownc1VM3YxcaoCuovmxn9S9xYNgSdisakFtge4mN",
  "key7": "4M2eQaMnoHVPTAuZYvpB5vZhjQM4hhLWZHHiBrtwe66TUHbNaynuSkApYVerEesk8JyA7wBUpoRSSAq1oPtjGo8X",
  "key8": "2gxvroA6idF8KpNRMtytYzoyK1vxqdbodaVdVUq5GC2p2Ay2tZQVVsKvLW2QkPs1auUPWZpEgJRVy27rxwkAFhFY",
  "key9": "4XchbiDegWsFdivDCbPTCke24iZDrqUDDqFWRUunSFejTyznJ49jqEyeryewVjPRLVBtRTofZNZ8KHaAQsAEF3pS",
  "key10": "3M84GDwPCSy719cridzznMdfHsCowW2r9Pp9h2vxx5tueFvNapQ4frEusNr3fTPG52dTp3mGcnkUnPshGaHifsrA",
  "key11": "29TPiBzkkFgBJqHNKaLS48Fac37FE8wxQ1Kznc7RALZaSR3Cjexps9KFHP1EyEWQ2Kp6ccs5uMEkXfQNvUQk45Zn",
  "key12": "i5P4VVacdvNkcApLvD62b7oZuqiyjkZK23vWUjkgGAPFwontjDNg1BJeGo1zAsxuJcv2xG4paY4VGhhBSxTNUKo",
  "key13": "3K54ch19HnouGw7tkvMxQadphJS2v33RaXVTnSS7ZG7pgdg66umSpTZhFudHn33ZsMYhdSyi7SkEVsf7Dbwfpc3P",
  "key14": "4AbzUMJ5JQzWCE9j3HfURL6pvYjQxY7znyScSCg4Fd41J3UdEUawsaxNpBarQtuVJCwVij3qGqQKFaXZFBJEXcVQ",
  "key15": "gUvYSeoZjQKR4pEfrg9tGa9ppEMRUExAagVgDKZbzvcrHVmqCm7pfZrRb3AaNzv69cq1oCd4pnvyy4E5LHxH3PC",
  "key16": "2f5jP8GHfk14P7uKrw8MSJc1voQi5NYtdvDUX6WnEXTTs5ozPhR2QiVCZhbBk3GoHDGTTGJaDEaZBc4Xn2FbLC28",
  "key17": "4qusrbSuGKrHYiN43jvGydDBhMT6qXHEJ92b6CJr13DYyDqveDQwSrzSBRR3tUtvRWD9RUmiU9ZaALEFcuvADBKi",
  "key18": "4zis2qebnWN7owmhvbmcyfaGnQZmS6nHR96MnvxHWjpigdGyrmJ54e2ifskKDPX9C787bqRyx6F9hMfR4iHJq8rp",
  "key19": "3tx7HD4ncAHChWF7hGD5HjAyFCpheRGghFG3weoxmc13w13j94PVTLXxPN7YgFEDDhCSsZSWpcSDf5a52uL8yLmi",
  "key20": "57Tu5JvMJJEQWkrazoKv4JcoaxM9D49DCbdA36fmr6xqs5YprZ2ecUbvnFTQ1QvjHY4wP5FSEVm4NDR2vuLkfiDN",
  "key21": "39HuRvSNCKaKBHR39vsxpB8QV8tGfdZaBjoDua3iPU5RHqREd5wHeHWgBNSLb6udo2rTd54XotUs8PVGmMQXhLk1",
  "key22": "5X95F44zgLqi9VmRCe6hS77hSdisFK5dUrBycxTm5DyUh4ir9Q1hXjk9mc5H2KVJk2bqQCFbFtGsAB2BHd7DHeKw",
  "key23": "3WKRqPADUTQEXpfmhZ8St2qXFqJ8uZYrLzReB4MfM9gA1WgUjguukZM1jFJVctz25fhBAVFS6Gbxomdayr9BV7Ch",
  "key24": "3XzgFoYEYyzCZXwmn3HhNRP8LThrVjVQJ3odSLXLG8tGPZaKmcyuF1TjUttfktaPsLzQiW94V5NduXXVEUf2qvCE",
  "key25": "gZx6sPYdEJyPvTaKETxV5AMHfxyfiDhXV8qii459f5in9UnpBCTtPrB9KPrmKc49SBp9BaWc5FueZQav8FSrmVW",
  "key26": "57BEpdCVuTPLZzBRnTszjjaFcareabnqKA2gcp2kTHjQLToYGdaqUEGbM3reLdFMu1NswNvkSQ6ZU2HYSYez2zWy",
  "key27": "571Pmd9aYZcBo9Lo74ZT9qqjPpWgNK4JCF4HpUj3p9kwH81agUcpJKU1ipxcZMisncMi89i5SMuMLFex189y9rR9",
  "key28": "3N3oDP2DcJRNnWjFtSfCeybR8usy2speF4iDQmaGgk4osfovefostYWK7MLFbJz1jERjgQdkBg6Tv4uoFZoMuuBP",
  "key29": "2YKf7kVzxhgoEDCRWMg3j9HwPL4vAWERMs4uSGasHJgrxxJeu9ewXG9D8vFoCRrUb5gAofxYfgCt1MVYjqv69nkv",
  "key30": "LCWfsHwEXdFgPPS2gg2Bj6Z9thjh16krfCPmVpL7Q24PquMYKSmrJC4RDQN1EmwK3gca4nVSNxmXZk2BdKqVqiM",
  "key31": "3soYCyhmBmz3G62fdGN9F5Gx9ntR5YbYG1k2bfAQZL8vYNtfHW7QecC9yst43B1LYRitMttHNecmDA26bTsQBN1m",
  "key32": "vKnsZaRbF8V79G9HDQToWSbSq71jX79de6wUNrTCKvvXhLD7HpoFdkBKxx9kWTUppJuhoV1w9iWeSPY1KV7u7mR",
  "key33": "5qDFpZm4cunBhjEhnzdbzPPBCkzwjsghprKRe8iwRcWt8GVg1vh6waT6bdiEUtA4BfMMVUJe1eYb3dPKUit48utR",
  "key34": "3X3ADw5QUXk3JifB9p9yyoF7nh18ELWkLqJBiXqTiDu9rRFTNgeXeXr47NVWF8EGQpDHNuyuQJtkhrTgsckiH3X"
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
