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
    "3JTGbnsXQEkQRBWour1TddQBLQ8WHmeqbCVFkR2itd6o7YynkWF3WiVubWMpvAeQqoF3GeqMvvtS4vkXFVUyWuRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AJFsAz47nw1jVV7cQYBtQypcbjCeVBHVNM5drbK51vMfZwxAxqKMmsopnWzKCwkQt1YW6x9hLcEMrwBfGr7kfhF",
  "key1": "2RQM8vcQqsvEWSLuFf9mFZn2d2enMKRNDyKxgH3nuX5wquMex2Kp58UbZLDK7RkuKHPqqR25M2RtP5B6L3xzxtby",
  "key2": "4GsbyHe6H7EaR97TnyMkrsr8Srw7bykzSGRanVofG8qTRMAByxhUE711xQFqX9XTzq5weMUcjL8YFuiuELdTeC22",
  "key3": "3mpZ6Ni4A6ukucvR7ggR5qWHprQkewtC3a5g9kvpGCSuWYkojSdeCLwi5A6nJ29fLj8vKz7NMPtHUBenWvTTWDif",
  "key4": "2rPajFeducU2GvkYWHtro6wg6H9wUkhenaq7sA7BNVSNao8Fga3JKF5zdtYPvYBks2r5VbVhaLHAECsMCEhGACiP",
  "key5": "5QLAniLB1KCz7LVfEL82fg6KUTYKwPums9WtELecUQfuYJT6659WHXL7MWP6jmCFiRGziuUXacjqzBvZWrQhFjjF",
  "key6": "4bVsQcsnczdMyFTJe7EooL6obDgQNHBGdyyaQX9QDETmcyXYoN7yWYcc61pZrvg6n3DN8eXs2HC5opCFBq3cZZw2",
  "key7": "4NcfAsfR6cbd9wUuXGRrqcoKoF8mXzye1QC3cfbtw1Qr4BoGsqShXbGK6jMknCq3RFB1XW3DwHx6AV2TJjiZdpBk",
  "key8": "4jMfKoYZFSQcZF7eHHgKyEVNnKTogEuHwCQZ67mGQiER7f87z1mqcynXLU8pwx78YJi6zA8BGXaLRDWZVoi6Dq2U",
  "key9": "5PivcXwyRVKw6WGCU3N3kJthgnjo8syEZ7sr6GX9tCqcGgG1KxEi5prHYSkVwz1rUwUnz3eActYsVvBYCACK7y9L",
  "key10": "4xhTCv4eWG4sQj2p2poRLE3ZrsVJCFtLWm17dYwzNskLU5HSpwCAMiEpT8FdbAU1n2JGo8nHKVzEtoN4YHioKvWg",
  "key11": "22xuLE9vwrk6PtqifXiudQhRGzi8naoSYbUS2DXGwviaxjAEMX9SBPh39PG9upKBqNjyA4PrLXKHLWiWdByJ2PM1",
  "key12": "jE8q1DwBHKAZYN1fVDKtVU6MDNhp6N9VQ5z6KfbzkkgU1rHnK7WyxkNsMFm5CtDxvMDXUfdH5Ke9vPoeu7BqfMm",
  "key13": "59WKbhFxwwTKtPTaEfhCBFtz8NL5xC4LcqgNxTeQsYZig12TxhHw9Zuwhm31wwdpudaFqtyVBDmgwzGjt8pHHQ7f",
  "key14": "Mv72Qh25RhQmpgQzZAHqmmzbb5hh7p6V4EEsUbXwfCEGs3CMordnmwYEiDsEAupLBv7fXpqWxGJaqt2iVAUe8R1",
  "key15": "t7oDACzq1jo7Fk6LVsLHmE7XMzaBjL5CmeFZFHvXEzFesdmXzqYzTgLJrvZbvd383DVA81SCVRABtd9zYgfs5cX",
  "key16": "25MPHSLFnrp56XpNCmwbLWtFRKL5476zimPXWy3r8FEwgsCs8X1YFzeBtBRTN5cmDwEw5szRnYVzX8gdzb2QzUPv",
  "key17": "5S71RMWyxaYk2nk32JKCu3oe66DTxhHnnf7uJXHH9WLuCmA21yhA9YfgTTm1MpTq18JUrcZcJKwkkNhFnJVBgqKK",
  "key18": "4nPJPV9oSyFemdowtzj5xFeQtegiHcm92heEMnP5LcHVwww17Hq6mzguUbKUetZuYUk3cc66haVnhtanq3hqfpEZ",
  "key19": "4bAs79FWsJ5qstq8JBfQNUaXukAGvhk6h4L1EXUhbi4skgtKyxvcYE7iqfCsoGv2X8aYrQVRTnR3KvFDuFdjqsrB",
  "key20": "9u7g1Drivp7NruyzufMyfjk9kujZ8daHvVj9cD5DrSDDxeGeMHuSuaZK3yJoSAvn3vdM5pT6KQfUVQdCnadxNS6",
  "key21": "KyPPxGDkaPPxNLsGqdw3vKP6vRBLV2TPPbnrSbKwNBR15UFqrG7dR3X9XvM2Dd1oGV53f6eDdahJ6moSiYefrbq",
  "key22": "36KQiPpYhwnJRdKNZtiNpd2zxZG7Kij1icWcSU2aAwqtieiQaWy3dVoqoqjUJcn6zucHXsmVi8iWNfJQFXVHSbxk",
  "key23": "jY9crvEBBYzt7hamgxMK4gwXJhnBvpvxyEpT39GWaCPTqk1Dvu3Di5SLodwAj3GWEsy7W2G3FxM5d1AcLEhpvXR",
  "key24": "5WjQkSrfDDN8DnyuEbtny3aifTvQJ1dsDqu6Jxm76FDVuhpthEBHcC7zu9WoqUcjvR13TdAYHDZCvJ8GtCcGDkPc",
  "key25": "4GRHHf7sxLZg6swoqKkxzTAFqiNjE2fDEg4gnfLA66bFtbY1b3XdxzB9X4ZKjyFTRCzN5Ma2wfQAGVb4hAxFyE5V",
  "key26": "5iJKf6YJ91htoqPQe5PHRG6VmS5xzdKgXZJLm3CuxnYYQVXmZvyzxijRzqbFUmXZp4K1jSkkWBpJiDmNzXuKy5Uh",
  "key27": "4Hdkf7nsPeQuxGzE42ifzK1gYbW56XLDE2xDH1mXEDxzYiFhmTQqDFAHSu2o37TvrYaK2ct68UqizXRLdgtHkXbD",
  "key28": "FAHKrm1pB3Gthuu5k2A9MWcFeyWJQ32kEBgCqkuFw97cUnHpdwMEUbAoxw1Q7kNnNxyzp3NKn3GTHN93zRmkR1W",
  "key29": "5cgBFN3BHRsoX9HN4HYBCyLZ5tk9F1idoyYZbADmEg6AnYemE3ozEzRKv1MevibaFQm82TskLPQz7iLvbsmLwaYB",
  "key30": "3xVWT4RMzSKEyNK21GbLaWEjS6i1QPNc1FgmYdPFqbh9BeAybM8g35oSLFBuFnrjkimqeFyTs7obbrsZFcRPxvRm",
  "key31": "53kH28DfxA1vNTVow4ohrt2P5NEZZEUHw2PR6U4JuYmUsra4HkfU87fgmj1hqEQ1krfTwfEtcccgVf712W6T1etm",
  "key32": "2fabHZDTa9wMnnMX8x1J7itPQr3hTtNkBBufv6HzwU37osYcvRWFKbbwBcSes7Rw9oB5HHmAXASVGDBrZxr7sm5n",
  "key33": "22Ty1DqoaDXFNgEeFSHyHiSzdxPQkNBeZb2Kt2784Zm2J4UPAYcxLihM9bAo1b2F3Dw1XtGwzvBWZCkjayx556th",
  "key34": "39ski5oxS39G7HQNmb9r7N8FXW9c2sCQnwwLQeTtj7dVyKQ4m5qoHwQnLqAHYkFF18GYAh6oeFN1YJjAp4CpFCh3",
  "key35": "617tvfzsM43j7Jth74CqYvtT2Vy9U2E8Y81SsX3K1oNLPovs9XqoQmmsesNLBKBJjNGouPUAJrEwYJDK9KpxM5qU",
  "key36": "3WossKHceyHYGsqhVDnXhs4XKBbm7Zq7G11ZDrXNWs9tFYatf6jivAun91kULBe8bqXyuc3ZjgRtHqGuKyc3ELZB",
  "key37": "4c1ycnGc1MGkRoK6nfDhopP9M6HecS3yx7XcmYAWZYbufFUcwtSgzZBrTAqPEFRjNbW7T2yKBKDrN6LW4p84ThYR",
  "key38": "3G4WqJx1YZvihyeDQbNw5mGafXzk39uzZoKcZSjqzg9UcXEpmDSHfu1UbjM1YcG9eWF16NrTyiBbMis6RVgvNmbJ",
  "key39": "4NdpNnrDo2kxYK2aUKnfbgARLtaTsKqqHPDYxioj1YtTa8U6a4uwEQ7vgn8K42F3U5gEHt4wJcsQuHQYkk5yxF2c",
  "key40": "5o5Pna2r4D1rybKXywP134wwYGiXJPckuicY56VjM2wSCXf312YrzMii7bhUJucdwevNGEBt4ta4aMoafKfNpJuj",
  "key41": "4XDiTEXtBewqTqkzjZVyw97g1JV379j3u9fd2Po5nknGh6HYHCJiqLxbp6nSL3V2BxMVj7wewoyoK73kVvffRzMN",
  "key42": "j9CPyqTNPf2sBQ6md47Pqhau7zPVZN798rcyFFHeJZkkBra31Y6pBgEkKJ3pvwyDoiziZ2a3Drkku3yZeG5et6R",
  "key43": "4A6EurfmjfmND1XXsppWi3VYitjkGFaEw7hnR87DwWidytZNuKV7pV24D2qv3Uxg2HbcQCEehgLTzvj2ss9B5wko",
  "key44": "26hhXDiwkkgjsPPqCa9UmjobjyUox9XoMeua8nRchXd2Q55ut7ZeiLHC6dVLWVuXH25PhykHDET72XvMfaftgdm9",
  "key45": "4dPhNXmRDf9MJM9FbxSEsVBM842dY24WdbDbdvA3W6Jd6zbQSd6W548YS6MbduJWzW8AWtKhCv7e69uoRvvcEd9N",
  "key46": "TqneCMjKS15ypVJD9PNDxwwygF17ds7nzCasuoBSn8rGJnN8V9RgE2UKmpFbxrmp5cb3st8eRCE5VWGXF2sguQj",
  "key47": "3cyxJeAkxo2XLvt7wKNgXV93DfEBcA9netemxWTmqgm2fXUrzF4W9KS22EkeZFFZabvU65MfiF4MH7QSXVHUZqWd"
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
