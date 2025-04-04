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
    "5K5jEBJ14jE89SiToqKBaZMcipMS5vL63qkSbNMkRvXRW3wGq9G9nCyRFfECkaxPM2dse2ZB4gY4fTca7UNy8Lkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G1REff4jkfVsVhmjXqfB4W1Nq7ExkQaTiqVgQdWeZ4LsaaMyQ1SPNELEQjgwsoPYEXuEPgCvwFcynqHUe4YuZqW",
  "key1": "2mC114HkFg5EYbfE8PojfZUEr2xbxE1mM8bbaU6M3GJ31WhhHyrVQ2H33PJeVWAzLqz8K2KGEygBkvpZ7bcHySpS",
  "key2": "52dBnNeppZuAmfyF7QaV4mL5y3fbdVUYCfAMRTzXAq5Td5EhcBVbrmE4eEWconv5e7KEjNjQTnqVPgStigrKjUCK",
  "key3": "41SDC69ZLVpGiDunX6EmfUWVST3nWh85M1ZJih7usJXuFnvKGq11GiModJu2yKWomSwmGpcAPkoEyeL8vDxG91d4",
  "key4": "5G7e3UVAsKL6mDWURgZZQZksfg8MBwgzivwY7WLKqThitFwyErqswKW7F2XH63GEzsPLFZPyWuX5M5mLxyqfAmYm",
  "key5": "3cQ3sxwCwwNhCRwm8tC1YqibAvbn2jLtnn9Hwp9Z9Ms1fNowBJfMbM1wQivcQGfDy4c1N6qkKWacHvRrkjCJgwES",
  "key6": "3XsP8yqc7nWs1hGF6DKDNx3Hhw32k5M1hYD1t8t8C9HPGTEq3BC32v5ub5BuurpwyTW94cyAsap1nyFaWCtKWweG",
  "key7": "35g4uoRvZsTUSiMXUsfNqx8pn8z61JFLz3oM3qHr1ZMLupCAaKfvjHWKyVpbZNU4NAwT4rFeCzgf3wfRTi1nN6m1",
  "key8": "o9mLnjzWcjg3W1SGv2NMr6LhkVbDK5KCuN6CC6prsvFND49C1MAv6sSRxiLuWmCwe2Kc92gfU3ycR1RrszdcuHE",
  "key9": "3dqtdEHc33LmLFhxzGyMFvJi9muU7gQJnoBR3TbPvfajSjAA26oGYguuzAabXmhBtTTAkWwjaknAgGCaV4kusDNi",
  "key10": "4rzsyxf28cbdrooqtyWDPWPiJBxvVQuQ5eGcrsCgZPraEGRVmPbx7CbkMbHUzytNbpaSiYYiaHp4NyCjEuquw2aQ",
  "key11": "3Fi3n6x9rTw2yGXS1m561zBi6zzjZQA7LKiVqxxHLPkb5T9MQh68vyJEq4fzTi5HdobDKzNVtvCe2eSdmAvLDWhn",
  "key12": "4qRfw2BEsbw1cMBgqhHNR2LqEYLyGtnqvHEabZ4qWA3Bgyvvg2ouqKrnJ1EwFhXrMJ9V8qGWHPqrTLfp7NnDanHF",
  "key13": "3duuUDnWHVAGvWyAcQSqx6aBaxVsMfjnWXbrv3GtNfqwhngyuNM35GkVEkGQCSH2hZaPWz7K5J6gTM88DNX3hqF9",
  "key14": "39sirhD3k399tgamZBWj5pTQRSN2N4QDctVDK9neXfELn9MMFTGRoCYQ18wCNwKkwh25yVYBkP6QDwL6QJ2a3WAi",
  "key15": "FeuwWpBeunEqUJ6QxPpxuE1PjCfGiVwMdprwESLPKTFxAFeRVEFRT6DUjutXR3DxnjLovpj6F617SFXhfokqrU5",
  "key16": "29RBX8PRvsboMNxjzpuCdkdY3sgf8VYUUKF5eAFgUXK7dNLdwsQdSanVjXn7E1qFQZ6ueXRg92ubHMsJwt2uMF7C",
  "key17": "SW2rNscBokuu9jEWo8DQmKg2iFyLm6f5FpQ77wuaQ9k5qx86ZBncB5YHNtFsqd49ngzPsgxtANoFNeg11Xd898k",
  "key18": "2NNerivrrJzeLW4hyUvpZqov5BbUKLERK1xah7skyuW4GM3Hp2V3kbdZUiQUSH2ChCLDzpgwwkwUZYSLy9paXddz",
  "key19": "4K9VnGhnpVnj2xybx4v3mtSNhPCEKRY9PirVaEYnQ7Ujg4J8ULosP8bi3pLe1kvwJ7JDT5CP8yywVH6bjFFWaZf1",
  "key20": "513Cy71Yo22vfaPL9GYVzCTnceSoK22E9CuyeSRKR4VsqisWDXqsAJahrtpDkUhNNKZWYhZNKbkZPbCikL1HXq5G",
  "key21": "2xszjkoSrZjcDNvB1mq3CgSzoCnWL9gdG5k5si9BRyPATbTg8gUtvhobmokejhWxcjLwMx1gHsQ5mwz79LvamZsv",
  "key22": "3DGATD3qrrvrqahcsLvZwxyyGyGncicUi8mhVG32JWGaRgNEAHGwxAEaP3y88yiVQfog9NNoPvhvVZ9USxgSYsQs",
  "key23": "5ZXx4swJoHd7YVF18i9MviCKzzZPQKUjSdjDfDerPvaDMwaPT88xX3oBBbP7jT6emLR5fjWJvqx3LN3CHY73BQKE",
  "key24": "4Fr1rxvxxQwywfQGfrp6RC7ThtvTwBppXakwqEoBCWRNaXFYM5vwnPQ6c7Hgu9nddyRYntZ5zHPpbqUiRmafcVuD",
  "key25": "61bDgDUFNDMRkWVMoYJ1Ezzhd5eihMBbdroVsT7DU3sPFYXZE4NnhwU7vBRTiHJ1ksfjGWjjz1G4i7ghQrj2Sgku",
  "key26": "MDhgSmdvJ9V1b1GJC6ow4HikNZWRMTw7VryaJ8p2hA67T2313NAVsozFb7GAxTkazkmX59fDiTmbamQiSCYwpKt",
  "key27": "Aco7dDZMjGVKCC8UKNwYeaSmYHqgciMqqihpvUNAY6rD7Qauhnjvt4FvhUs3g4xc4nY36QnaYPdcqqNQvDaZYE8"
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
