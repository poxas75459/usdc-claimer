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
    "3BkWRivz4PoGcdXVZ9g3wXd2Wy41Tw5r4SFcWpyLk3JhUhkze2i2LctgT1hk1ZWgUfGchVQ6nKwXcaEVR6j3Q8S7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wngschRtjNmFGe4MYP8qXKEzoNAa2GzuM4w1AkYAp1vpEijZNqJEwK8jtJyKveeUdymdfk5owhUvG1byBW8gkgG",
  "key1": "44E94c3sWpSPA1rJLVpkRPw7FPxp2TbmEMtN1YbrFCi5fwpu2ppRQX2qvBd45tTetgE8okbcaPBQesb1mYHsqX4n",
  "key2": "61q3QD1ZNx2tddezk9z9BHCUiVGhVmYcvTsezwtLzEU1pgExg6JERxVdNQiv4VYafJppVNzrmNkfEcpetjnnsck2",
  "key3": "26VFijApVHfmWAJGDh3gg4oPhcHavJZwtDEtcuevgGtrsa8Wp9CRQCd9oxLTLjVJ9Gi6SAAs2M2hSVMxbE3Z2hHd",
  "key4": "2VEYD3dKqszMsk84wV38v81dQ9XWTZzJxZvK6RWZKhzQTbCdxWbhvVDKojSvxLfSEEEv99qtQwD5XHBLe2WKYMqR",
  "key5": "2rjtaYAYp4KDuCCAYAL7Em2QbVbeGHNuU1o3sGQYBHR7XUiYNaQbrSS86CNZrSekuNuYMcZXBctVq6ieLpyvykJe",
  "key6": "4y2oJozzYtrDm1Twf4mhyraGcmuyvvAuMweqeRLwtTu5b9gkbDeY7NjWnYi3brao8aUdKJU8TXT6nUSEhaQjxqU8",
  "key7": "3nFRfYvYE1aMr7DA1LXy5sC1zEFKE2pcfjnMF6UNGVwCjeDmKPbDa9aDPepRKFhkN74J2RY5kwLZPmX7zqwTJjsU",
  "key8": "4o7PUF1vc66F6Z4nDjMWGt97GGLBNNmZY5sSCNfTdTn6WPt3wMaaz8gbdfuBYQvfyednxX1osZqJbet3Rfw6vMXQ",
  "key9": "5UmepHaHrw7BGvP7hfnC6tkErNQpwwLfi1W8dmNrN8E2f1gxmvCH7NdmtCAW124KQcybC2zVKEdnA8baeRTXjXoH",
  "key10": "kJEiAVaKNxJ9K7TkLTSGEYYQsmv5h9kxq5RdrusBjD6ohrCwDD4z6m8VkNiaA72EcX2gQrkcCWXSgyvk7Cv4Gok",
  "key11": "5VjuRSiDcXi9Q5tgKjLc6gTJWLkGotUk1jaQzwWtg3duybgtays8CgKRudYntZMEXpDgNG6smdAHcWjoUruC2BzE",
  "key12": "4NSibrPRchoGFBoHqRqMG42cL96RxziigDUCpufx4FR93DtDBdg8ZpbyAxTYxjcLcGRp6VtrDrrtaLBR9ThNPZoq",
  "key13": "5MNYHuPSF8JFrWT6B5KnZvYCtuQ1BgZMoCKp6QTfttE9vUjq5J8QfSttZQGJmqnpufGJphFyCsGy6sP1yK2qsXY",
  "key14": "5wJm8si5m1pjfdyX1DedWyQp3q7Vcr26LguVJPeWhyrRk2GKDJceatxkERCXv8voKwkPwY5yewvmNd1FnpkM19Ev",
  "key15": "5NKk2Z9KhoiBzPABJtyGUAErHmhU4gZfdKLuuPmNndMefeURbBWiBkRc3ewuNabKdwcK5vbpna3wfeUaYmSAUihS",
  "key16": "URXz5hzJpZUgwVC9vZc8PrPHBLdDestEg2gUPmZV2t2TGLUZ9BTWHdaZLMB7LE4Qt8YvNpgSjoMASKZmLWccpUE",
  "key17": "3ZBAG1TysTLDyNfQUxsjsVaifp8miYYD5dtLkKXCeyNnx1SpQEqF9nopHn2goV9DS1ARTKL3gZFDLAoJ8qh3Wekh",
  "key18": "3X2pEHtEA1s5sVye6onmUpRaSW8BjGuq5JQ4Tqe4u3oCGqNW11yfh5hrkqWyuinXFQ7xmgn7tGSvYvp52ZscwuEL",
  "key19": "2iRoTEPoTPR9odzj7P7D1NR2GHBkPFHRgECG82MT78vAYJJq6gkNmcANiuyMxUeYT9GkXWhP8KEppbFV7hhLWcnA",
  "key20": "5WuVxyC3ASCcaX8rsUT9nTjG1zvZ5fWCix2QUifXT82W4d9up5NyNWyqoM4sGg9QbrwaZHfcvmkPdYEp6AcSzBLt",
  "key21": "53svjfUrVEBRTSQbs3DTEgRDqtiWbLprY4HPLUJfnLF1pBwBo5B9N5wmNnubqXPQZPXsRmJ5XkNNYAb7ghad2ccZ",
  "key22": "47roqeT7RTqdFmj9BaectPvX8gRB4MYaWdCRrvBsy4HzRuF4npnirM6cdR69CbWYcc2h7hKSvAQD97bsy2mWj4fM",
  "key23": "3iPqrEDewA8KhjNXUE3G5XZf75JmH2NMovwP49oJyMduaqJbDSPspnKGY3yrChKveTxbbAHFBggTLgpy5AuG6LPf",
  "key24": "4TZBttb1YqUVHAehzym2jHrmAfN1teSNjakN1oaQUxMCMSKcMhTqmu1b3AXU4bkot9m3FLEQWFuvMUu9q8nTxuHC",
  "key25": "3nRSaTpwuxz91Q2JFrR2i8iZRjomVAudLdncHNrof6GJjjtYVu21LvoDKs4XrcWAQNna21Ei8DHfSfmhtKdGDAi4",
  "key26": "bT8cBNytAja8RJfx2JpgVewnV7TguyMUM3c8WnCA115hV7fpJXTNRUzYhaqmGsVXxChHGS1bHD4CZ4us1KkShBa",
  "key27": "4C8b9yP4Wkmsvc3XWXT5FuNcEmTka5D9dKR95NQuQigo3DRsBkUgAzAtTDuHUWQbVN9j9oFWspD1PL6R7m1TvjDo",
  "key28": "5oafir7nSCTr1jkyuqv2T2ytwbvKF6sC7tWEhPaee8k1QAgLuK2Tg3tMGqVNiKb9fGcodroSjf1jENkqFyxqiYD9",
  "key29": "2z93UgGMgBSFnqgmCGx7JTRQkGeUkBEbvDq9qtEMydPqFpw1a3egUfb9ujj3ADqLcM4LTpgBEFwZ64kCivePH7LL",
  "key30": "2JQWur1hKQKVJZSBAgRMQgSLR9xJ7oCnkeyHQQMWw3uLcij7A6gL3iL4PTPXZrgNf4odnkRdB9piYYzarPzkCAB"
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
