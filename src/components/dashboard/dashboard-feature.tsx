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
    "3EvYWh1sotTuvgV3uwmqsBpSnpB8FJLgWkqAgtRdcco7XBFx4qEgcKhhNCVagbJZGBmWCn45LLuxfnBP2Ww1ymv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JW11ygBiuXZBCykMcBZqxD7bZqfV5piZGJm9Sgkhmc83ZmHjuJs4p7CbhjLVPAWpWSAe7az435NAqc1BthpjEXG",
  "key1": "35eQGyYP1uDcfad2FjdGjGeSFjrwfaA8268LViaoviqFAuqT7nzLjgNoBWHPUS91XefCZomUEM3GX587ok1uRPB9",
  "key2": "3j7Zntc5YDpLqjnuBjqhoc6BgjumLddTovEe3M6pb6biayzjpZPrPBXRAdk1N9yCVDa3LvmWx5Tjm3DX98sWbG5T",
  "key3": "3SmPxVaoz1rdHd1HcbsrcXwbs8u7dKvK1qunNDPkkzTWx7ieqFRzjJNvgwFQC51CLyttsZ8XB1DfDoiC5n2vA2yp",
  "key4": "5Zm985D1rb2WVR2QcT3LgtD85yH1zra6SbWeNJdbj3NjKbbkHD3hk1U1FKtta351Tg49v9u4DGsx7UMbWkJp9wQv",
  "key5": "2ZTyDs6nwksK6wxM5G8AjPbtyAVhH5wXsK6Gp2uTvD4FscgnZ2p7ZZGk9as6vhPdtEDrWdzsEqpEkqYWndsiygNL",
  "key6": "4SPnmTATD4w7uxB1RFhtacy7F1pch36gNJuRJhUazi4iAATxKsVWMbqkyfwRbqhkZH6LJxfxvedsksLCShoALpEA",
  "key7": "3PzQmbyWsV13k9ZM45Y8axdgC3PxNaX6zp6Q1YfC7VdEegMcJw6JTHqtPf5AVatQxfDwSt4uEyMUZV6n24fQvfZk",
  "key8": "4jTZqXuEArsyCSuy7gNHS1HSodHgTrijjZvyBVfByG7DW2cZ9deKVJ6t8vyPm9yt2Jn6kRCHjNiMWrLiSrfMg1SN",
  "key9": "AGwjLAmq6NuV1WHEvCPyfP1jc6bL47uD8EGUs9Z9auJJppaYJQurFJMmoVgbeMpEJT1SYy3828w8y3V559waVQV",
  "key10": "vfMhSWcdWhdeE61zma2bU5z716riVTtaCZYdqakFrXAZ2A1Qg18TyEcC8gsdZw27cvLtuHqp1DJ6GA7rJwqGDDF",
  "key11": "2peoWxpx1hMcBcTyrwiFxa98Xj5WuqfWEaYdjXHwvoXQCRMAXzNJoenQJDsp2Q1pups11vGozrDN9x7U1wphaaRX",
  "key12": "52MwPuWQjNBSjGGUK7iT2kBvPuCSFwWsrnMuF7ReqwA8rsUTtSPQoXfbSnBGejGadvUh33Zs2MXQRgy2xvNTy5mr",
  "key13": "4QXx7gHwJyCJqjGpTikdq1E7ZEWMwmYRyyCq9ou1zA8ZyjRJjEjfUWzqvkf29YwjghMvh9qfjmCfgJ4YAzpyNkfE",
  "key14": "3EMbKK6QKS3xBKVCxvFga2nZP5861S4LAWSQebeNNJNHUgy62FtTZhrz6XHK9SfrmmdGKatDmkFF3TQq9TK6kkm2",
  "key15": "31QMppFo7pbS5CFV3iXx5b6PNJpn4Ew6RbmUnNkMeYhYs6aSL1cFSDgeZQyzJmT8PFpCxsiVuQxUTh7ajmm6i8UV",
  "key16": "2bd44ctMcMhnEE1wDydaqdX5q31GrtDDQqaEYQzopMSaHTEHZ8AbmooRtA8U672SgdddQ7LaufCz1San9Nao5Zu9",
  "key17": "47YaNRgswCwkikXuDbUdkAoCBXhkV27QUtrWfuwGb2R5ig3svtenfoDDavyeNNira1L2ZZXzZ62QLNKfBCaahPiK",
  "key18": "4SQEG5zp5HkdwXRP3XYuKe2SckSBfDpRf3genJhhwhSPoaPnNosytnRpghpgqAgTSp18R8wNpiKPNPuPmgVtg2Zd",
  "key19": "4rtVv6ovtghH3pjPARKUPsaSkw9uS88sjcCDSCstjm7pA484bbqM2BNJVDo7jDKayh7uQzxrty2AoEcdS2mpY57K",
  "key20": "4CF6peLtPQbyKoj3Y3X6G9bLup5wXsFFuZddXJJoQGLGddxf8RT8ymRJADzkcuCykLs5sPqvaH1bKgZ3XZkSu5ks",
  "key21": "3faMSCBef5pow49dq8E4D4rJxsJhic32pHcwmut9k4VdnY9UDKmDrfmqc2A8d5YpZyeRGTmFkCNA8ygfsV3bmvKs",
  "key22": "WBYALvk9fG9Z196h472Fu7iAASoDLfV5Ro3L5v2eMjNHTHvFkbtyP5bWu9YVEfqbz9wYebSiMT2mEbTofthfVdf",
  "key23": "urRkyTwVxdfCbmqynSw1kNDtzaH9HAGanVv2AwCBfkjnquGuJm5C2dfsnT7aLRUZao1tUm6j7hHpt96AeZNNy1z",
  "key24": "kTDe5vCgnGKPsx415Bot166EZhttDwpanBAXhBNJz4gLixrpz42gp7ppSY8wK7iL9CqNRaqSucSojEXDq4QWGZK",
  "key25": "crC3AYHDAoBxnYD959TtVVfj44QA6rvmGyhZwy97bixwKsEW2mRr3qorrcxktDUwgBkVb2LDLA96Xdc8fFyhwgL",
  "key26": "4hQNyMQrpsuSkxpPDckXLmjrRWHNj7qvjwT5MV4ZjsWwgsTLyfsxgaqFBdNaVgdEsEvn4N62kL5u8mHJH3dfj94m",
  "key27": "sA2k6Lpwg2mCHusFmih4WgXzz8dzPjsR4pTcBaVhEcw8MbNPLxrWS3PiiiSkCn5QxwB96pcYeJhM6hcquZDy9qG",
  "key28": "64BRkZLGn6ZghxVe4ecFnu7wQK4JobZbJTvs64aKaWKyPdNEVvTTjePaHQ2AAgEsivzNcdmtDdAtmFW8Leszgmze",
  "key29": "2dyhu2WZAy3YeaQZUi857y2NNo7dU9LmmaNiygiYvqwKd2Vzpk15sFUsi9uK8iTE4kykvCBZnMQ6N3oPdfT7W45i",
  "key30": "sckNTUNP6tLDredHvhsDbtDViesbPVgDpzfj55HP9RDP82iGHCwvXJxPa6pByMBkwPdw6p6tqJqUVusKDAsNRAF",
  "key31": "4yF3qT4v8FBi1ujQL1ohWXFjhJiXQ3n3X6s1YivUE5YnGwYoyZCjUaHmsP6xPJ4yi61PoqjMKR7jNAHdDPHanE5L"
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
