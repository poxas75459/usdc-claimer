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
    "3XngaP2pGyQ8F7VdoZxh8UBsrPN7ExCux34by3DuJ782NoJ4zr945poguHKX1sDW7tEGsPuhH13RCBtNrUBCbPzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UKKfxobXBWdEv7mNCFGMhdxyriJA77Y79K3maf62ib8L7wCHMB3mCBdeaHmSgYVHuC9hBQeonCvqzQTA3mMZXDx",
  "key1": "5MffXNYiT4GkmkGodDtLcqUL21psYn8ad8SjgXuKCnCy6QRJBaoVRN1LQnqGZSZSfBixJYRPKfxmaR4mBbuyHoLe",
  "key2": "2P6w8degrJUUoimxQDbYLP1QZx3v6ErzUnXdKMBoDgVti2RvJSFtPfeqUemPWv8kypzNzpfSV97eGiRqhATqNFMZ",
  "key3": "4fLzPsa5VBhSqZiowRfx9iB56Uxhw7AbnDT1j3rLLr24BWZHgnXQqwFugaUVYqjoZvPcWsjCG9vSKgVDGh3JyHbu",
  "key4": "9S4GfWy1tjoDAN1TnAbMDEXRZ62sqg31cg41J2Lu9kuA8cY1dsqjapejD1WxLMjkbVdrV8kSE3mdReB5aKAfLEo",
  "key5": "2QrpNCgKmb2RFCpvquqNLYKv9jBzo4qaYzkfnRcqzvG1TvwzisBNifK8ruzSnsyUbvf4P52fKS4gTK52wqpqsGYQ",
  "key6": "MoBjuF1RojbKVpWuHqqWF2y2HNjnkWvwo8V8EMcBM75f8pHJauPQ1QmPD4YTvHD2kZ7PN6dVxBMxEBwL71dfSoo",
  "key7": "5zACYNpbHEuqpz9A8kixseidBQoMHXMbdbZzRE9sASwohdsAGKkwDwyXwV3dy5QwoBVU346VZUPFpqhLmLrUBCe9",
  "key8": "52F8QyhksgLCmuYE7jGUJkCkCaYHL48Q9EeHCrR6iUvrzw3AiGbW9rMy55K3yxwufykLnnmQ4m7iWXCYoU2Eqmdi",
  "key9": "dMTZydZ8jSnRDh3hZxnduBTKAr4nJxQaukNR2AsnMsnbQE24JDhuyTWGrZGfA9ijB3YAo15LEuhAwQsJaAR2N1s",
  "key10": "5Mkt1pAzzuiuLWVB3EMLocGz7B2mpDzYDpdkyXyRcqb4fYoJey8FZ3oTZakn5Ln25S4Gf94jFqKZeVVczDWeZtuq",
  "key11": "22E2HgxKjN7kbrrjPU5YzwaMgDR4CTpEW1tVBHuSgcdyrGeZamETLPQL7KBZWc1eKJLncciv4xB3rUKnEcv4JyDV",
  "key12": "4Wy1LdMCUZg3a5qUgjsDG7wAvVhXikuk6bbfNab46H5oDXtA66eHubSEKPt15iMeDj1RfjGfo3KPF1HY7KursKJ3",
  "key13": "4cknLvDBKCAvfDnZQXuAt45vrTfogWcdBdNEe9mo99zFy4KGZGswTRtJFrQRWiTELcaDMys7qhB6U9MADZaKnjKz",
  "key14": "2wNZAYPUjEwEWvZGj7KGLZG25McU7jF8UD1Cw2xsxRnmsBZH8Vhdwz5uPJJsA4hAz9T4Wa9LVV2VEFC5nhdGS3nw",
  "key15": "2XfCm4FXDHCoKSmrZgRUxeHunb32NgejFMoBDx2fQqZzkf5WYaWMhiZXor6Fxn1MLXLyAC8QD7oeKjTC99hadGsc",
  "key16": "65mcwtCLoRVa3VN4LHC4TW8YvYv4s7hVe46QJ7ZwpWmXvEsMehy1cybdqkLmDctgYKzkLi5JyRno8N8eqNGTmHN1",
  "key17": "62T8MMJupWeP9nAowaAnna1eBAHKBpGUfsgnMgs1wu4j9o7ukWwaDbans5hpDf3ssRnbjVVwVM3yqw2UuQDE3gTi",
  "key18": "3ESojCFsgu1FVEMoHVZMxsaTu7fpq49rKeSXVKC3dy8KsntAotdUWQrfokPyNDv2j61Cvs3mtddy81fuCr7C9t6X",
  "key19": "4ow4XBYUvxnNhzuoVxZB6aChs8QHUq2Qm9Cmq7s3xJRbqDgqv3G7kNhN5qCnFWPVTpeKEp2PK2mqhHitSyuQuadL",
  "key20": "5NJB5z698tknzz45XRuH8FhZXtgWVr69Qb1Nq3QvWffkmrUg2gQSw4vND4dLaShFWYTJsS4QguRQBwrfGqZNmSv",
  "key21": "46xMrT2FKsCb9AchzmDxjeuVeYFkYjF4KaePASRKv7XJ3EoB7wrdA7i89u3gRUxiXBgB8ScEBnS6dqGNUk2dvGB",
  "key22": "4m5VrAoT3FqosyMyozH8iHnZgagqx7e8y4ZbfDaTzdvmjeYeBykiiL9YyjUGnS12rr4kSREjiXduJmq3PVNM4Vdy",
  "key23": "cfoXXRnxTZ3WXzc2aqAGneh2BZJzBg6tRfp1USMYx9AeySRJb7773uhKGLvpE6W6cADxRBFihF4NCV584JXLRYs",
  "key24": "3CRRzKeCJLEa6XhJeEAhK18WGhbQDwx62AEc9m6GodTzMP9Wvmw76AiAzsUG8rqih9tuoEgfsAUL8iQj6TekN8LT",
  "key25": "2Y7TGDn8mNLaNaQxarftCYbbnUn8sPrvBSQGNk63s6kzXnoaKEUhYsC7iD2MqkD3RXVfN68vkbqwq1LJbEsbrXXT",
  "key26": "wUfsfQCAd3Jfb8MjrxZuPUN1pG6QGgLtUMNrtd6eywW3a56sKyHJQvyRT2sMPo5ZD4P9Zsbi9iAGu8XJNE8gqgY",
  "key27": "5RkFa9bcQivf5KeAb4FeCejKqdcqyPd3NpinjVmFmNTsp69KAzzcReZM4BxdSpP2Sz2mu9SSrkBERCDA9HcLvC7u",
  "key28": "MSSaJ95svuLhsoibbPK7h2j7fW2xrsnnka63yvMo6YXdRFRdTPrB6gi17qJUjpzB1df257LgxEM3Hb19FaLG7QY",
  "key29": "5Z3EM1b43xBFdJK8A7NptW2rktJQQAkH6EnzdKri45hBj9RP8UGgNHkuDkcze3WQEtE8Y1j8DxZB4mZ5Y3widLTs"
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
