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
    "4uHz1D6U3yAyiY9NBTkkrCShZHv7XPpj8oUtjrwxJ3ia17F3dpRyDphrUZcsSxnvgqqhGGzUY1zKRMbmo9BYQE3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SHa3coo45CowShLEfpuonypBbgTaZH2uRmPgCmNv2VCaQoGGTpdVcvaTyPyrkmV5WsVz3t5Mwto12SLPfZHfzk6",
  "key1": "3HVBiz5tL4wjnaQZ4UMt3J1uLiHJxBFMrq57fdFJiZPe2Jc5sxi4hXyPsCCkUUoYrkXCES1RsCrC94YUhWaiZnK4",
  "key2": "2ToeH9rN7kD8SwtSe9Yy6uEXBNTsTiGqnbwd8u2krYaYr9eaURrPYY1nzqyXxpg5EcPV3yCqWkwuWmfBudbakDjc",
  "key3": "2WoPwnaneT2cDvtSQRt2gU7ft1PSTiTh6reSkf6wFCsbUNv1YNr8TsY5vG1Mqu7EoCvNdEtkTCaEYVT4BeibyLKs",
  "key4": "3AR5k8qdCqYxxM7DVDGSeFwnL7ydeh3xiWa1Z2iCEukT4ezEXpWA71cZ3Ug9S7aeguBVr8dzNZG1VAxL5CuLazAW",
  "key5": "5VoKPkHfK68Muk3E6jsrJtxCcjwzUfdpQkL42xFBGvnsQRVL1s2Em6vUVm4vnXNKoji4YnCuRsp6mAfvh8bLi1dA",
  "key6": "5nzAVoR7os1zm2RaBf8AyNHC1eAbJU1BeJCvrLsC7FPawfG56ijdwePZuC6UsnbdEVzEGNGSxeoTv6x2XCH26CrU",
  "key7": "5x7DEHa84AseEUtb8av8cGMUvXJnderxCguLZMwzE5jZkRck8bBmBHAMpjsGa2qJKW4XYVSd6wjdi4EtuXeCVLJt",
  "key8": "4yrcstjaK7bEj4X6jRnzPgguLNHdbhoCW4aS5T3SWa4R2bTzVHThrc2q1ZgXTuZd4KzWJj4jqYKnd3Acvygvk13Z",
  "key9": "42yXkXLve2PZKmTq7dinaCcyyHZyBe8DqTYQBhbqxJVw5L8ZmYABVSUiCBcMHEGSp8Vp77rhej1TgyfWaoWoEYM8",
  "key10": "4mXcFwAdpnsT34mRTm24HczB84th2YmCvvTDtb664YsKsZzDbVY54qFrbq4FGhhKCobhntywdDYjwnsKo56vVRXh",
  "key11": "2PhDa3EgSi7exrzLLejPbgVC3GZWBsnpUQHUCMnB35ouHjyhBbENCtg5q6ka7GxjpREZp3T896Uf4UjToXg8twBT",
  "key12": "4jLMuH4t8JQu8tGrJzrkmZWPinFVEhNMq3R3qdbb8HSXQTPConYNDzvypsqCwuVNSCExxB8zfpzKRxeGXRMntR2N",
  "key13": "3wEPrWb7nvNJbN4d1fA9X2sxxkUsUE1WFKYmVVdjFrtZsDwj4bEVAjhqwMKvYnabhiA35zKusETNU6Bn3mmiC7s3",
  "key14": "3KbQbPoGH8yC4kL5MUkCvAaXBjFkxz64AsH7Mxmd4sKa3ULYwkAGFL1pKD77hrsKUkDoHtLCmcBLyrhNrciW4b6N",
  "key15": "4DCaNabz2vr8qvnQJXcytU4yUkWGP76BK5drKJmu7GG7ZfpQS3Nbsi4DsJd8eUo7ZCrdLBggVjHrGzZRBDnrfx8v",
  "key16": "JpUotTssavpLvB9bU3L63YNgENiwdypMfY4bsgQX4goPa1ZbMtfcDuQus9UUCPuoELgXjL5PU5RaZKHsUCtrdhG",
  "key17": "3b2SGghm7oECuub4eTrbQr9haC1X6mhwhmbqQWYqPzAXZLfifs4whwxKoejAvNmJKQQRa8bBGC3JcJpxnAwFgfVy",
  "key18": "2ozCYiX6vg8cnHRVNeA6mTUPPdBcxST1amAYs9XbCGxY2kdEHEa14piMf9w4AL2mn1Eu8T3udwqXg5uw2HLutMLB",
  "key19": "63pd3KpcGmKJPeFebxdHKtn2BPdf4qDee1UgfXRq5rjJuYLySqNGJgFdxJeHRfr8EVuLph2Pk22EwiMFW22uoSCU",
  "key20": "2CC27Mpe9YvaenUCGo2PqZFDTi6NsbnErvCvnA7b2sX4ZtFUcTcJKUV5sNkyUmsagaRczE1PFBfUkdtHhpyjqh4S",
  "key21": "2pA3nT5RtzB3qoqdtCiEhueqyNFoo24CyhLYVnX5kBBaETYQTPC2nm6KZtQFrXmeBSaqA6upwTJQ3oYdSLjwV13g",
  "key22": "56a1Q3vR3t2ZWdhKGgP1JFZzC26nEknY3FacnEGu5MNEvv8n4QZtGB1vsChkDx2oFENmasK9ek8WaZ94ssdRkTCa",
  "key23": "2rxGufpsinMkEh3j8FUoMyT3Erb8CtC3U24AfGc2N4ZWYAXgxm96vwP2opn6f9a2hz4XczRmnUFSJBEA5qCe9UYi",
  "key24": "2KmLLpbDcTN3xyxPbmzkvDbhqTqT86pvWnMgTQm7ffPXRsLsVzxCTJH4WLErRbtWeDV8Ch52dN7cCDgt2kVExB6F",
  "key25": "2dEQKjXKbR3vpzHiQZRyaqEWeGxCXg3foaA7XUr3iv5V93pJqJGTACdoFTMgpa8dfGyhLfPXqi3Cic9rrPhHsmc1",
  "key26": "239cpTQWhzveW2qgcSURW1TmVkRcpMsPip1raEErxwXyhjjomAqAd1SocrV57CMXcP3KdsbPrhMqCjfPJhqESbis",
  "key27": "5h79ZBYPet5nLHsFkRbfLiwebnS5udEa9vemnu3iMoTZbWue4uHchoFCA9VEoquptx41CR4Kg79hfVtjRYCqscoA",
  "key28": "2wJwjJ2m1ekQNZL6cfPepxYCmZrGEAcJ7irEmTxE6iZWW3GtypVFcsz5MfnSiEALGGTPU8RRszUhuKZxdzgFBWPw",
  "key29": "3vFrp2gr3tpEeg1AcaYfjhDA7i3xMuJZnXCEUQqVenFzthJA8bg53kCfJUWnNh7fRYf7Jydgb9KXRAJQ2M7bQsRs",
  "key30": "2JjNZNTJNGPz1o27b9xcqoxZiQCM4vXTG2A3BeMWS7maq9xoWxajR6TYRggPyCkajqumb3e11HsLukVmHKkhjEgy",
  "key31": "32JD2TXCrys6KDphrLVARoHydx6bMaZRtVJEVxCmtQJw8k4Sp8dnjXg39ZAZcANBHQcyGXfvEGC61YpHsmGvSa17",
  "key32": "21fKcjBBn8oHDry2pShYGNA2KYPX3QcxfXEqQqFv4yxEu9xHk36VgFeS5KyfwUqsf8ckmb5YqsdB8TurzD39zXFK",
  "key33": "2V8vZNb13dpF5iDvS76bTUCXr1WqGxMYYDCd2pPoaBdapDV8wsYQjSpP6dVrCjHvNhrL29k3FeujYcg6siwEGPUH",
  "key34": "e8tY33ykNinussbxpXSkYqtArPWsZh3BGfPN6BCvtH57BZkjn1Sww7XZs7nUSHUANjbHSq8qwTnTQw3fPSZWUXF",
  "key35": "58pb7xBEmtiNoA3gCMXRndJkf6EPYCKtoeCJMUfepAooouT3Di8tTv5EmwKeZAfTeFwLtnQ8uQ6JJFjU4yGGbyPv",
  "key36": "3GDNdjQjtfX5v6ETHfUkWK3er3s2beYMni4b3qLLHNx2spmmJK3tv69pz6EF4yw5bKEH58oKbAB9itnNUYxJbQvQ",
  "key37": "43aA9tE5yjd4KK9p8Y65pGryEUxHEMFXzC7rBG7x665gA6Zb1YrYJQwmborHvPc5TGVv7p5KJqYvcxp9eEvpJgco",
  "key38": "2pHcrYg8NUc5DzF4oArA1LHtHcLbCawTmot4DEgnhpp5RT6RYUzKsmA8A2VrkxU8sRKR7x6b2MvECzVuJaeKEKYK",
  "key39": "35BdmgoGqUXarEm8yy8zQojD71TPRc9msPLMExJCNRN3hJauHr5Zd8EoZNPbcsbFD3G23GsaMrDd9wds9Tqz5uPp",
  "key40": "5RY5Y89U8nYQ7KQMJipkcceLJ3S3jq3YB5YfvTPHqeQe1BbZaJJuJs3JdA1zzqd3hbdRMRQyzSHXYE1QqyQ3LUa9",
  "key41": "36xkvGUNXaKxcahMgGffLHn3k6LMJqDxPvdL8j5nnxrDNNarnAnKEeyymafnGMaaEu5J1PnwCbrSZcaGuifa6xz6"
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
