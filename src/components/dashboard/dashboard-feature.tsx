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
    "4YvD1sgE7SU62fxfCxRgAeggz7JHF3xbHdVduU3dCM1vhzyZ4gRzbNnj9U3GCo44ssVW2B6NPgx2eFDXoCQPWXTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ADw4R1HGTPs8CBkZDysBDm8kJHs41mQmEyfrUpy2UqSk1tApBG918E7nWAWwkBQBswQbRHEUzkr4bdiVA2tzQgg",
  "key1": "3aq6HXegfHjUXbj1G92DprzhAswWCy1K1F6H2yoqZ1rHZTpinjf4PSfK1gWGfrdcJ6ns5WdQUXkCCaSdD9PCP5zJ",
  "key2": "4Dz7tShopBkn3g2ymXCdLhszLYd9DEE9pdtXcZMShEHjM3ALbckuZmu8NdygQs3MzNaY6PAbYmpphnT5UQzqTaSk",
  "key3": "vAKD3w4KZBV4E7ycJrxRF7hqFpgv7mk3bs4ZXj3V7JAskyn8b2wyZDYpiygcBdoq4wuCSFUCMhYQFjA7nXYeBqW",
  "key4": "xbuwuKzDSRVXdpPHhLeHg7QZyTXW5AXbnAr7biDDu7iVZwQt5opjrZHhdUghnzw9BUMiBhxVSnUpmfnhmRuEUmF",
  "key5": "3tXM6QsLfoWPE8XnH3dJE1ufJdRpNGZStTnadxnjRy5dpivM2E98FhTfApHMEYtc5fmvGAosXShMjpzX5zW71nkH",
  "key6": "MCr2aCZw8cgqmWRVSYeVQamEKWdnWvokuPHeDAxqJtpFtah59QuAF7PmsUV9StZ2qzBHMqF2WBXWbP1JoBs63aH",
  "key7": "3AGnRjnHP1SxvPRrnqHrKn56RJHcNp5qQ3Pp1w1rapTepRJ9VmzssgDEc2j7w9rVSPKYmdpHg6GJR3Mw6fy15XB4",
  "key8": "KYAJ1F2joRW4wSGsFXEpFMd5rHWbYEsoXHTKATmzD3UZXRWaqCn9YDxVKz4QVCKcCd7pzuxkU3ogJL8m31ZkQYc",
  "key9": "2D5bMgtiDAbcqpeT7tBKQprEbYHQT1heD7NMJ6M6VKoQ4r7XtqaPd88VnnJK3ubJUXnVkkNSqnagSFWdajNtw299",
  "key10": "3rgFahTAPZVghPmQP28UXzf44jmXdgfFtfKKQrnVqTS1dxK3xB7f4UnJkUaj4CSJMY87gmAMNUnKnP53yyFzi63v",
  "key11": "26yJL51EvDwqyrhzLMhcqvNyjVkSN6xeWCNAgj19nQpQqFHawzjLvj7f6UPsAmGx6huENFR7KRG3KBkmMvbktPXV",
  "key12": "4QGaZKE3J5dqb4JQxqCqnLv5a6THgwEW5zEt22nwaqAwR4S3QAnZzHGtVAxeYTomy1fHhDM3HWPrYkKW65AaSQys",
  "key13": "3YczaLQSGGNXQRgQ2KYAXYii5RKMQkfdbTz7sT1hyHTsRGmiUm78SpFMcNZEMQF1aC5ht1yihU5TiME1Zs1SbCY9",
  "key14": "2Li4iYPEjSmvFwY1FeEYLCjmCfoApAes8m8oH67vtNscCw6Qdc1ZueqrjpYRLy175b2ei6YAC28cVEkfETbvC1oM",
  "key15": "3oArDttgTxD3MHCAkqhHgZPQrBMQx6sz8WZ6m2GEZ5pVNsavdcFMZshn5ApofKC7cVkxzFtSk1Ka9U5FcBjpHz87",
  "key16": "Ly4Ra1jjyvHjjYxj2PUa3MXKX8EP7n3ETj2KcRhtYfLWiWvVyUDZFLFFZP7TXottspC1GBbaBf1xeKmGrsy7gGG",
  "key17": "5cAoxHfmbvju7TrHpeGguc5hFfRGWWBkMsASVi3jb7ToJQsq6sMarFzyQC7MzrmwRNb5rFZgg7Zfm7pWsv45Kgxb",
  "key18": "3sHjKWWQiQRaDU5GHJBw1tNWKWBuUB9M2HwQ9shh3SjPzzscqBYF3fccKCfJc7Q6d62yGWk66Kim764fsxnT2cs1",
  "key19": "3GxR6PVv1cBiZDq2MDfyQT6fJwXR5p1vibH2uXHSS48EMFVgaKnB5TY2gPJsx6cgmN75hX2NNYGwyj162taeP5YZ",
  "key20": "3859V72kUsDw2q7GCxNG9K1U8Fh2eQnKgWgrCML3eafcePiBzBRmNqUMvYQMwGr2ZnD2ofRaiKdjQFSdrhxP7Krs",
  "key21": "61MQp14e48nRaKgcHZ68NBoFEB5z5xSQZYc2And5teTrscfB9LV9ZVdxKbsHDH5xHka5iLMysGGbj7BFd9QbmM1B",
  "key22": "4ri1rMdDHNmq4MooFVpJ5QwHm5eP4y3AL9nZzXnJrXVGEy9mYxKMD98VQDUb5hnwDHR6MNFCnVvFnfbrjBSrwerC",
  "key23": "3cc5qw9R2u71EuWnpe7sS6zR2H9mH9DmHrA7Ds9jmYbYJAzHi975KnkNTTaga6UGg41iEzQyNpC3uTYDeLdn9LDR",
  "key24": "UWvMMdcwJBntwtmSse564ybXPAMirHNyUsmfA5GyE2aM2BzugANcNsGv97r2MASGxW5rirmjPwEpQyrc2AAXT7h",
  "key25": "5N5oMzuzduCfwDFXAyDxqPND3vXyhMF5qzMrTyTGwEFEdJAw2ZaaP9wmA13VxxzHLrv9QhRzvPfz1814MpETuFpY",
  "key26": "54n1DcEBbnZFPfmcoECBrzVEgjeTECQU7NCwZSNpLEbnW3dP1qvpEp4LeRZj55Hsa2SDM6dmChz24TsL3zadY2Nb",
  "key27": "2tD9HVSNdyMLVNKwxsEV2sAz2qPtqgNkwVwvZB9vF59A6iFZ6UoZVeieeQTspFsuZxrda371DSski7uwpM8MMEpB",
  "key28": "Lya2iUFgJ8WobsYqpi1MQy6EEfJWp2tTj5AqfNvyjxgEtpAUhcRPxX1B8Hjpgv8jMrUGXYibiaaMFppuFduwaLA",
  "key29": "5tXLmx1NQRduy1Mjr9B2NcidbfKRLMsZ4kYMK8ZmEeULB1NWJm7vMd9dzyMyabTMMc3yTZuB45KgvYZXNNNqpmS4",
  "key30": "5YqkXcfA9WEcd7bF2voRToDxAmeXhS2XWXBsc6asuySy4mkdef2xduPPbfzHyBwoE1Yo6EspGSdDc8e5syiH8Eue",
  "key31": "5WEDh2t8FhSiGoVKAHjMxHGNLWgpSxpzkWHTPzAgbLekHxUeNWd3WJXT7z3HEzx3w6re8RFczbrqixaLWfbjkakm",
  "key32": "4DjrfsfKCmm8YkVYN1LWc8PEEyX258fnrRyTw7WGJ2yLQvNSEfkG2J5s1BbdAXT73CjKRgAM8cE2b8hfWNGRenEt",
  "key33": "2xBWvb8ptMN62YJwuvafcPsTvEfJU6bqyBzNCAZM2qzfctRRDyebAwEjtQqz97yswaRLFQGSr124GLC19oGBDfXu",
  "key34": "41cMaadmThmgekjuDvqR9iqr4xyxvETHteh7iCgKVnhjipKpdMJqvVSNxaqyPELR6xYoJ8ot32kYM3ZR3VCZDp94",
  "key35": "2MFNtkZU2T1UNUKTTnswUPjs3rJTT34dchrZfBJaWBDfpn9149HkokBcWrKaeAGbQKGciSDs5NcPqWTeNpsUBhei"
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
