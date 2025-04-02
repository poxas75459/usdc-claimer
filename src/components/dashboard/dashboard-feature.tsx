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
    "2z9agLmy8cjWhU71BUHEcXTcWtUKcMWyGHY4PTDDGQSAPTMnWJ8fhAshJ9gJMM5x9H69y8rjAe1mf9A9gy1Eteo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R5F2N8K3sbzo1uHqCn3G1ZToTzRQhBRAwwSRDP24wEyMrWF1i3G3m82yY5XHqhopi9KKVuGMvNfr2V3PajPe9sC",
  "key1": "xcyZJMLBMiKpVEQHfdmrPAqGuHuUzU4bRf38CrQ4RXi5DmxJxAs2yRZe3bjvGc3omAdS2vs2Z1CKbUyPjwBpHKn",
  "key2": "2L5NpCA5YuD18E5hbQpbmfRFBrH322mLqVmhwNwqoqvMWNKJ6P6GGSq6eGJQQC15WvtyxzbnAG9AD2gUm47GdVM2",
  "key3": "3T592qdWJ9dBX5AWGG17C4dZJReUABNNR4y5v4M7aVNnxahBAiyErkCHx5VLuP5MiD8NU65bMDfoW53dx5GSLoqB",
  "key4": "4PTzMnQE9Dv5ifndoFEzKBYNUV94mKCEtzYm1vhNgNUcn8UBQd2iKUuacbwgYBnn5f4Wt8jZ1rcwMjtiXNaJyG3K",
  "key5": "5XG9TXedig1CXhbj3kaYJTS1ZSx3KpC3rAoyWCfra1eCautGM8MocH585YXs8LfLA487mjuSfrtQ3N1Fj24gXsMa",
  "key6": "3kcdkagaMMA6vyXSFLZFCvP6aqP3dgf2o7297Hu8fm1YNKw1mZXdRA4PwZpfBYmTUxH71pit9wyzRmavdpAc8n6a",
  "key7": "3H5KusidhUJPoWTnZU7oey76wUj2mkq7twkc3sEEk6UZvNnWykwX5T3W5tHxL972JdFYNNjMCzqcGkdAcECJtnLk",
  "key8": "4V6xXLPuyutyo3uHs7GFyVPStgL2GRHxsRpCat8RyGtMmyL6RHaZhPd3hhVuot5dAX2xbzCNyB9yDkPvsjDocAnw",
  "key9": "4oWAcjc6i1Hhgm2ExDuJsGRbTyyuLA3BX3sewX2ki9j5JJvx21GdMb5XPXgYdbJ4rSjqAeEzpwdHS4n4VGQwCUR7",
  "key10": "e6QV4X6Q8EiRnhFVEUySudqxQVL6Mo67NHezFCCM9vuLf9d4cDEfbh1EoVNByeE1JdA2Kzbc3H3sjzKXyb7gpXS",
  "key11": "3gYGYnBFQ9h2DkiS77zwRTm4omfY5ZnRmRw2H7WWwU2Vc15tBELxuo2gwK4Km6CbFKKMbTpZeMFLPWyau39MdGgN",
  "key12": "3aWoPJvfUssrS79BCQMo7N7sp1qgbxwDXgZ6QcLHeikQSmwNza1vzo6wzc5h3wSW6oeDvxEfXwHKkTcYrD4wdB8u",
  "key13": "3LDC1uxehFP94HssgiwvL2YT3tZMo8PEPzxhq8UnLhCeAggLHGfQTkbUwTXU6MBzhnZZTNbZ1hcE6e9rGedRCEyF",
  "key14": "5KZN7aLJX2jsWorSfGJKSmiK8h23GcbyhUph9pfmXWDnXb8JcFtgPZWZ6dVr1XsvX3JbjtJuZAy1P3vMonofu49h",
  "key15": "gQbcKjYDk3meXcyDwrhQcGLgHmvLxySv9MvHbcniCMmhQWTZBGgFkfwdxYKrNWj8RuATSZsSsMEd2mQfpFVDtkZ",
  "key16": "3qfbnRsk3r5dxujKMUpuo6v3qqaQ2kSNNPppobhYsyWTB4BVioVGatmV6AQENKotxMQLQ8b3CRADaEQEf1aSoHm7",
  "key17": "3JWNao95xyN6ECcf2hUxL5ShasvJcXJrSGafFSFsPTMPNfoq11oB7LY9Cpj1L8WrHucGct4cpcSavVS47DNLBfa",
  "key18": "5S72uEZAX1AJV4BcaroXXmogcvS3J2wTrU6jkAFYozNwv65buhRF7KXGTYRLaj5PCX2a9hXZRG7FHXqSHnBj49PY",
  "key19": "uSiBj5iZQJZPDvFD3iKAf3g4dhsc5jCvSkqHhNWNXGCm838JWVM1f9mMSoGgN2p9rDuzjnEXsJiuFNFvUGwpMpk",
  "key20": "4wHMjPpg5igVzwdtVUheCQ3RbyddjvBXi9EGwQtp6jpkq6ijD5huATnakwLG8b2DTd1asUbkxcEYpuzic5b9g4fc",
  "key21": "2a8JHpVue1RQFTmP4N2ZadPDS8xoXpbLgGEHsbMtePfULKbNRBo5aCDqLQztBCVkqF7PztZyUWbGMVBKoCazYGJP",
  "key22": "3SJ8KrPkjd4UPJ3wJ9uK1C4s3BgsEpptPTvdH6KRhjuvxmHohU2h1qbcxDF5nFPYL37cUY8jhsFGYzasWxCkfmyV",
  "key23": "Q2WmG2ppKSNvGgb1g9NQxWMQrWi2EcwSKRa9Wr21qwFegdtwjPJisJC7jdsw7q91THEjqgZXVNpcXjhzXnP9543",
  "key24": "5p21WFR3YSo2qweQjZ4LFEis1umZ3Y9EJH5mKFoWWXuxfU6sRpqGEoxEM1CgZcCmKvFSBumtYG71zrGWSQqByNj9",
  "key25": "45aZWapb6cVSQmnev2rUst9XLtYAaaf8BYPJUCBYKxZ5VCfCQ6nrz1MXgpNnohMkFC4N8UHmZncZPC6LFFoMJ6jA",
  "key26": "3zdN2Ckdr2aL69trinnJemJS19soxwnMvxewohrwjQD6s6LKVPVeLYrrLbvg14nrgjfV6AJLVkJ7rh34enrWKS51",
  "key27": "4bcQQ4ZnQecaGtnq6v98nVLZBBpiMGRVV8q9GcZdBZVtzJKgkvCrFEfiiYhb73u9pK8bp2kf9jPonBvGaHPyLavz",
  "key28": "PYLz74uea3K6y29X9rzewgTD3gzvr5wx4Ek2t2N4HxJoYmfuUTF1n4VAiDoZzuJM2PDZDTsPousUe3bdrWxYpYZ",
  "key29": "56tdmxvMn1EeLFeT8mbAW6si5dhPJirfDCb3JbNznbhYpR5ydwAw6m3HfcGw1P2kJeDcFJMFzgTAasqXnLgYegVf",
  "key30": "B2TctQSZWq5u2aBECniKfwLVkdXmxjQvEFWMtPvgLfbmHT3HXw62ckGaRTXG7H1xkYhAyFVxMHihBW4GfgMBsP8",
  "key31": "2ud66P4WqTjxsytccBfAAJ3aQwGJVx1NeiuMvTQKjH1W5Qr8PbGrEMb3rCbtajLKG4sY5JzLCpMurCVuMTWUg1He",
  "key32": "3sSi1x7W1riLSm6xmWMpc4a4dYzauQsSygxExhM4mSM7UA3TyvEWRmbZkCF5baig2E5Z6MoVGsqwqCxri2y7Pibf",
  "key33": "5aeUgsoBhw4jQMUd5MGs6z4Hsz1yEsJXoHM4WmzoKVgR7Bzd4L2RFiPFoWwpzx9Qn8tRmX72P31BHYBHSDYGPHah",
  "key34": "2VaiaT8cnAB5uShcXfseSf34wQ35p6uJr5RWxRXYSNWHqWi7qqWiKCeZHu5bPRa1ZyRzxz31TmxTq6cuacFeuHjh",
  "key35": "2BLz2oipbZShXmUJqKCo7ohYQMApfGpDAA6XejT4zvE6uzqCJPomw9Y54Zoi5wY2fVG9QS2sSWM5JGSMJzb3g82e",
  "key36": "37io96zhmJvgqqtfZr7WHM37H4uLVvJPaPBmrgDtLbkty3Ny9rxxssps63KjqNn8SSACg7rZCHKzztA4x6LmA8wa",
  "key37": "521Yf6JntkxkiBg4LQ4NCuMYA9urR1jeS6mgHLrUTiLGfEFaMu9odzGvVFJ5TvKbR4ucb4hsVtx8hDt2qzWsVgX5",
  "key38": "5rsHf4vvGjSqAQr7dYyhSAUuff58GGcFRFAbnKKMjRzW9UK7A91VSHZhspDa9VwpedPnSzyhbmZFLN6GqtHB4qbA",
  "key39": "5Ya3dzVhMTyToCxT228oR13Lg4u8T3fDdTv4PzcuxD3uPaKp9YohnTT4Ajk6g8qjnPhTSF6ATmT1pCTeMVadSP4p",
  "key40": "44TsTNjw6zhgWVwrYB9hzqaZyZvN9Xy711zqByRdQj3pqsw9G1ihuhuDE9iuzZmHJNddvhDLamKurJvRAoje9P7M",
  "key41": "3dRZW42tu8tBtcwHBLhHt6SxswEwTj2aQS16WFPnerWd3YfvJRqDYEPXx5gWTbwqLpJB1KZbbJ4nsWBKj6Gz8eXp",
  "key42": "32TMgH2bLdeBw6HdxTNSJeLMpgCgdmKn66BBrLadnfXDipEdt2eDyDuuLmcVxDztBQ3uxHyTbJ6MGjiUXPra63Jb",
  "key43": "3FbBVuWzFK6KT6P6VFrY97yA2p3F3CfKFmcD6czNSvMBcZe6mZmtrDM162P1ZKsiWvP8XKsncrmi65ptfsBU1kyT"
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
