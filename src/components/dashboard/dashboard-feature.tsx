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
    "utiFUUKhRPhcysohAEueCpeHyjETn1JcLGYrZkjxx35ixSxgSUEbvKdJTiwheg5xYDwJ42QtL2s1W8vQ6Caz7eL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TaST3hutqE4Aj8DLFLWVkbqZ7i5ksKN5buRSUoNDENuzZhPB8fvWbEDSPbgMfggY8tYKv7wiPvK2zSpPghHWDwc",
  "key1": "66xCZD3w2kCsoDLsSUZrrZ9EMV2X3immmEJMVBg4gyruXUD6tmpaFpDxmTZd92TEEBi9VZS8vSqPwPcy5nR8zUTP",
  "key2": "2oTEyZS3DvXXBA35HzFSn4qAFfBsBTyexHCgqtxkc44Dcd9y1NNHSbjQ8ihLniJJn3PJJhyjK5W1AzorYpTqVH5J",
  "key3": "Dk5FZm85umczS445PzwpN8UPi5ss3ME4Lwz4nJuhRBMBFiwGMubLJ1D8eawM6tXMfQ42YnuGzxPPgThi9bQSJyh",
  "key4": "31hU8CoJKAYTUUpG1XjqGfyAUuVMdkGFXspRt57yxzWFFi96FYQV2FXqxyxGqtmGkD9d8KAmKe9jGSKmeCDKUTb",
  "key5": "5uDB4FNNXzDo1czJGy189kEtt1JPGNYg4hKCYBWZNxZCR15imgCbhEERWHhwT2DscmNB3QPJuUv1cZNYDWKYPk9n",
  "key6": "2UuKikBnk6CRHrR5LqRNxx64Br4ngqgbRgdj8cWXSzzshLSgkGgkJ8kCW4B4jxhB6CDrWKQhqFvZW9SPeZScks7D",
  "key7": "4HudZ8Gtq4NxBbQKavrvYa2pun4AMFeYcHm52nA5mxJAfCYgpUKEVuJhGiJa78ncaP7nzxrLLfQpd4dsdfzRPp7Q",
  "key8": "4AMsRwEKrTHWeUkuRvS5L8dsR8stSMdMxTzCxq4hZNGjj5jEXzu2DH6oarecdwvNJ7cooj5nRuiWsnuC2RHJuSAt",
  "key9": "27CYt9ExiRhTWL6YdLKbkNaonKCs2ePJjqGcsHot9V6BBPkeKup3iJr4c6B74BP8qBjsqKFNsv2mrkLfCQzXihKD",
  "key10": "4NNJaFLy1jokeDeR7vqm8DB4RosGgXj1mtrkAxm5b8TGAS1LXpbgqoLbrpEVFcpWs3rUCjE7PTNBW7hPHuM1thgR",
  "key11": "3RPf6L62FJZyJns9y12R2QkLMumPx6aP3qQqV33dWXiaRFytCc1E1MFN9tQ2qfRfacrcNjdpmUMFq8tkJoATezrw",
  "key12": "5rRULAcumEVFY9Pm32K7RfGFBnvpCsUqkDogApArb3y43KJwPxGKsLbCXsGgzW9fhucoA7J3sKuXvVwAy2sWTnK3",
  "key13": "5CRwQHbn2gRfRRiabqn2CBCEEY7oNQX6FFWPX9h8YeYdgkKPPM1iFBWWV9QJ2WeApeig85D4NZbHPyfQ9ZJLdsH7",
  "key14": "4uVC8TAN9v79CGkDHRiDSoANj5ufzfa3o9TTpj3EAcyt8Ciw2Hmi1Y4E1Mu3mffXuSWwfsurn5GtbPWqPLLLFRTY",
  "key15": "2YYwDVLTN83gMxVNVtAz4NCHLTuPsy4gFmSMwYDexzP9r4zFf5sVJiTTzTQ4VcGfEfoYMKMjiKTLYA3AnYHLUufw",
  "key16": "4D4QAPGm2PoqPHtYRJfFTtB6194jMQqEfHxbxmmScZXKVtAGhAreoCaAF5ThzqA1iMRStgam24Jf1iSVSPhQYmpM",
  "key17": "5rXx8iQZkPsEvv3CQJMztaqHXqXjfjcjNJoHRwpMUMzJDg7vt2DKhAFTBpf2FF92CDC95CwHJMHQXskvY9W7c4Gy",
  "key18": "46N6DtQpS4XjHugudP7jrGtQtrFCJYCwd5uvbKwHVJ8YfBGZXoBgbn8GeHwrwANAY1c36BiDMrDNERhaWkmJcGdU",
  "key19": "66Y5XpJRQjyMyW5J2nhTLkUPyU3NiEaJKYqstwm5LpSQMXj5EqqtVtEAr7nFEHxRQF7CpMExmMAUvcNfrVweihRY",
  "key20": "WNVUngXNtf4h4ARgdQxLjHLh4kgidRAgZzccCaUFLZxwYW4vx4cG9mHM3R7VLHQ4VCCU5F7yrkKj8STYphEMFiK",
  "key21": "HaTqGXyox4RZiNHYudo4FV5JTbmWgcLVKTZtsiPVraoCaFbTyeZyP1ssLWBp3K8pRcVwGqtoPktz8F7erv7ZXeX",
  "key22": "3Y9EG4QZ81HfQQNvJTE9iksciYUHJVU7DHcJEBwvMhdw2otw7W6mAM8GU5YTssUqWbsVttYb8fpLPhynoJ8NeJii",
  "key23": "3w21P5GXWCPpWB4wFYbhWUR4pWSERMirZ8CuCL4dAvxa7PaK8WoxaDFE5tnedKpEPf5i8D9jk8Hqs3o6sczPcH9P",
  "key24": "5TehVEtYTd4MD3MrKQCqSz86xDfSV67jfAbV9P188crm1LaqH9wXAr36nMLXMaGG8x1KGXq8Kzc5n9EgLSqKPr9E",
  "key25": "5V4SRqC4juBFSDfPMY9BmPXRCYcE35Dfo13HgeSdM6cjZmgfM7oz2xagqf6HUTE287gJiBJTrx5CRfREeybY8HYw",
  "key26": "4jR3o4yZChGGqpxoWLhw1hr137AgU9jTJsxCo8sCsu41EMqoqpizL6tBkLwsk26uWBLbxok4Y3q2vVHrJw1FuiP5",
  "key27": "5nyLFntxv78iCfSbLwfjSPvxsu3k2FQFiF7hsZk6Y1XJoSb7i7ddRoA9wqetgLWdy9BGue73r3C4yT7JsJ873ghs",
  "key28": "4D9Bh5yjZwVALqrvGRqLz5taZ3zdnogcT3BdUEQZL8LZeS6Cn8Bqkpo3XMsLagLqpXbARPEkKJK6HLNFCRNr7exu",
  "key29": "5jipLRHQb2xCCKpyKXUUQ1qhanhv7xaJnz2uSzVerW1PrFunbpB6vWts6scWtt3yuMh6Q2JjGxvZngrXJv9ZwgCw",
  "key30": "58Gqq5C2qkHtRr9wpRzeKnUDmbBiLWHqhyNkiGTLfccw4V7LgqD9dcs6q9JtF2EqwfnKLuwgeL6RC8gf32yeBroT",
  "key31": "4TYqby4omFJSExCKnE2uXDxLMPF8p4HSUa9Dtb9TAo5tGBYwz4fkVSbo2qfmL7nXJjfnQY33thiwFTBusKUNpEsF",
  "key32": "2gWnJgDDNmcCcxKG1ZfZfbAs6srG9ieTpe5NsJWxGCTUWbB4GaJk4yWfSWFDdfQc9Xw47NvnpTCA7m37TYKTPXYo",
  "key33": "4nq2cteW7BXTV8hexkGUroNu67MGyRtYHL1vQ1YKftfdR22g4JZtX79VmMYmGcAohxd3HKQy1AWC7iyyjembSwEm",
  "key34": "ZQ3y3McwqTDy2ug5jGPjgJJfBUAs3YbUid5dsx2o4wern5YQD1cy11oQVcgpFzKLSJ8aVN8f6SQbvKuS99ttcpP",
  "key35": "hJAJzvPye6kEdpUU2ibyCpoF9NThHYvdzd4Qhy9kqSPw2ADkEGsQsGdshcBPxUaoFHLJ6QYQ3GwZVSNbVCuxeau",
  "key36": "2V62DQF7gqGMjETJ4HVMUwgN1ZCJS27yMXMbcVvSjzRSVzjCdLSkJ55qJPbXA4H8N4KGsASVX449kCnRafwmqEwK",
  "key37": "3NUzhS1eMiBuac4UroPYTCzDqTuZP4fHzWEFoLuDgjeGNX73Uw4BhfdAmDEJ1apHnxoRN9Pnyh9hViVh7dB7g3fD",
  "key38": "5bwV2W2mrknQjf8Krpva4nYNATZh6BcqGfHuBfeXNQY3p9GvMun6RzxG1Qo78YwDiAeEhSA14MHV9yB6YeJbpW5M",
  "key39": "3Fxa88C3xuU8hTDqJqLG7HxkMh8SgQn2XrDWQ4FNkfdMjecH8RxX1GdukeMFmxXp3HbMvJpFqEKtt9sx7i1r5L7x",
  "key40": "2c3z6MZMAArMTmGR9MRbxjzeYut2dXE4Qdq7HovMWA6MbFb6Rn7RB3DE15GVDuPSAkaG6FavCmef4CDGKNr9cLd5",
  "key41": "3ozHq9PC1FvQ74B5Ufmc8WPFr9Urit5maihT7v3g2eAuGvVDakThhvpybsCmphz53wsi9rbwvvpccQoBLszzxFP5"
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
