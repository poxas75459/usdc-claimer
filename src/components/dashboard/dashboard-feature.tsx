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
    "foam9GidN1FbW3uYpqeBuVkpnbjfQmdwPfa6nEnvgeQwVck6fnV2D1M5Jpf7BBUgeHtLYNJLH5c1b91JVzMQP8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "khKTtorWq12WGsUrxazyjckhFc1NZJ2USMX5YK5Wu3fpBFNyNanmLLQUaBjn83pSD9Q2Mp3ENfdWQ5Ge3gNoZVW",
  "key1": "2yBPt9w7FvGq5ybe5ELqhSzLRySNApAQuUU1THKrPGpHEuPNRoGDHZdudCkWvDRZTsP8nzfxMKHShHm6XnAiSmjW",
  "key2": "31nWQRYwqPqqZ4wDem4dVDDWEqPRdxQG81Prp5Gdo6xWfPe6nFqXh7kmVTmWBzZWsCXV1SJHKppUj8NMTyHPD6xC",
  "key3": "4QvuiKPVCMBakVibLQW9PHRcN4SM6JMpMCvq5hV7Hu3UWfe4LbD5suAR22pUhgqR7WCoHxALm785Sus56M7z9xA7",
  "key4": "2SiyrjeehCqx5nWM3mE4Kzyd23CtkCcT9ynmWUU2tHFiDANHQrUGsPuoF75mEQb3uNQ4wyxQZyjXqFdMx8xMidCD",
  "key5": "22TDCEdNo5iDviYqemkaTRkaoFB1TpySGrk96GXY4CGkmvWgxueH3oBxRcUV7iSmGNCMhS5BNrwkRdwKUppYJyEz",
  "key6": "2CBcXdYjtdjQ9DNghkAhvTxFDWPq4ginHvWuFUMJaHq6hMrjWDvQAcQCRwMrADWME8KirX6ZVCg3mBA1jkKsNoG4",
  "key7": "2QdfXXecj9sMiQMNWYG64p14jEcjeQn1HkTLy6BNfnzGu46xcgv3eTHJHid5CVSu5Cv3XWMA4WQoDnVqaWAoVLYq",
  "key8": "4Z1PMXRgdK2axUKbkXvvAMgU5WkPbChEmHjBJp7AmCHGB6YVHgB6YjJR1Cr1ALR6dMc5QZdjoCAwjr6wMhNnkQUT",
  "key9": "2a6NdUC5ZyDj2dd8Gk1RuXuijXPg5VcPzdL8VVk8ePu5tSrw3PENtE38Fb4gA6dGUo5cSR88wBh3H6gH7DoCNVdM",
  "key10": "4eY97zj7RXC7fKTQia7HZsygAGi2DB3vMKkkcAxPR8Abh6DzhowL8ZMuToYg7MFwCZhGjq4WhDaVKMMyHWHyzRX1",
  "key11": "3JQdxb5qW6fAu6rjsqa4QdfAtiHK7BcTxJboL3Z9SFFWdBYHNh1V87bwP89iAKmzvpwCNM3WzvJJeaDDvRGEyL99",
  "key12": "2n2fJo7hyJe2qbUARwP5h7vbi14pkfpZAsbr2P9gLXUUs9fYXLJWepAt4tL9rDaBeaz4H1AjbgjWNgbpckYM2enV",
  "key13": "2RUW1xwiMzE2inynFrQABniWuHFDhitaKUx7czkG1bpF94QmVjRDrPzjJvcvcp14yhus6N7NgnotSew2EVGmmxdY",
  "key14": "843KyLfoEbLgtWDLHW18Yk2VF6tSctnzvePXMoh8z5tHcHEywjttDWjQqgY1bLdDj2mrygoZpGXgirHjqH3dxaY",
  "key15": "4J8zRmAeDaJd7ZowHUnNyLeryG8RSqN3XQz2kBnTdgNoWf8mtNXuD8NPFkG132i53TCtFbXh6VFgrMR7NMs22Ga3",
  "key16": "3wDE2CrsLSjAhZ4cyTKU4RsuLGm95QxskGH8GKUC3NiDmyjgyjVrEoMdLV7jK9Gnu6ZwS6cHMKKm8C4jVTsaU38i",
  "key17": "64GZTeqmXLptw377SUhXEipcgGSaE3v9Q4z61nX5ZaS6n1XueY9hMRi6danywFbwQnDDE8iVex12bs3d3sNE44Hz",
  "key18": "655EMLUZLpXdGBePpTyXE4byurTXmmfG1C7L1DC8PdkWSUTqkDA1R8kcEVYqipFdLMNzBowvRXFU7HfXemq7SwyP",
  "key19": "5vRVS3hxtQHAVRAsL1mxzUa8dUtmTMQ3QTbkLCQmmnjZCuHGYB3kU2RvbTxvrCnqTCuc73DeQoErHSCR15r2Gpfm",
  "key20": "pCqxw9zW7PcYgaaFpy9WygXhPb7mk1CzhGurJ7QKBBcfLmjGrbTVVWDgrVsQ5DKbyALQ9oNHMrg5P1FVzjehq7o",
  "key21": "XAeStyDFfFzpUxYoBYa6Fjqioar1h69aZwipyEuScaP3pTsSwBF59XecHgWZXoEL2tHETPy64nBU64oMQmWNpX5",
  "key22": "2LZUczd2wy8minjWmy4ejhWvmCLCqYcDa95vsj9rEGc7mvYLZVyT1GAdyfdRjPLKPhvF5jpgfX71aqcS9ePGJDKo",
  "key23": "3CEiuK245fbng6vJJMFyWuyAMUgv2Yr2uJp8ToRwcQri8Rze8FEb7k5xacXx2bJEXPp61s5xyUv1LxXWTNvosLaH",
  "key24": "4aPWTiKemZ7ymPVUc7NBPS6noA9PziaKftpLheLMUGEan3e1YmckyFSYU8T853tDmBRAXzE14JndpiqiwK33ooH9",
  "key25": "2FU9trD4JqHnAMuPJG2RQNiTvgim3dBj4MLAS7DigAXfTQTuSjzDVbmY5pQsDBvsH7DY5FTXPe514GGnyGKvute4",
  "key26": "2dfK7LkmhHS461CJ82GjJiejhQhfMgP7J5FniKs4THSS9oNb6myAxH9LYsE655JewewM2FSkjwYhp8V8dSe61g6W",
  "key27": "65MQwqnFQA3mUU8FzTUpe85nDFFshVJ4sGpztCEthZe46VY6ZsafsVs7p1CcsCWwms1sbnWasp1uBDG7jYnKydxH",
  "key28": "61191hzhTt8cJrpxz23TmSYWUTPhvN83uM6Z3KsSUUwKvMXU3Vk8gtZxbtFGcuQfTvMWgx6L8UzrqvVJ6uWxypX6",
  "key29": "5Zm9Wre8mKm8g2LURPpbJYX2NUj31JTxfEZJr9ydyL5WLdH1RWsjA62CQtf75FMiuE1Fjt1ApVUrX1Q436QEDWNj",
  "key30": "3CjJhHnk5BNVaLcmW6qHxr3FELuXpLAYHBLzaNibiDD4zAyVKS8T5MofBVijEvHaysR3cMWcEC4ZKcQMrGKPgrXJ",
  "key31": "5ptsmF3ow1Tqu1er912vhegGBHe9imSHqDpoBtiBWFYg191E5bpCBpYDqvAy6KV8iPDpNJEmv9wh9zY5y9reQaqa",
  "key32": "2488F6piCUvbhcKbgaNH9vrWP3F5wKgyp2HuYf9c8xveDsodq6cqBFNMCLzTYw8YJ7c7mZYLpop2curbfeTwPdDm",
  "key33": "41bHXWJ6yCR7nvBj82vG9iop7whecE3MZV3jTuF57PLA79awzhVFBWJnFCTAcaTtbiL67LDNMxrVUKqdKdu7rz2p"
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
