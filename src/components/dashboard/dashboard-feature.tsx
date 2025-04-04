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
    "4yujD5x2Fkopm4do67uTzLTCNsZ9NcFnLgojmBLEALov8Br4z1sKXmkUGEHxvoPpZL8hJ8AJ1HFsEr9CvYgefENR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rf7DM2dn7CgABmPZRyqp4Q8KhxaycAsWyueZsVQM8BXsLa1GhcbTB5X2P1Z3eQ7b8BJqrqjWLSepwGyYMs657rd",
  "key1": "3X99Dut4431cpAV8Fk52NcdU42PfYKEe4FDLaMpJ8XPFTFVTymGYpGx9ydSz9Wegry9Vgpji45B6rGdpzCt7zQVG",
  "key2": "5Hh89mThyY81A3ob9k6dK3cqaArU2bMbaRw7D2zRbaWfZcmpHH3xw6EihFYTaMFZK8M2jXYBvzas6azKY9hPVtz",
  "key3": "4SUMgkjNR2gXd8xC9zavC2V5fLX7bXzJiDUvcCDkbE9vTdgghTpWZhYiFgbFkLXex6bhQWLNF923noJKMTd96TzE",
  "key4": "3KHERkB1eGfuLPMXuhqKmDEmefK9kw72yPFhYSjfv759qPi6YyqA4GEbTYv3i3b531vDTCZshcaeoUfVMZmXyB9f",
  "key5": "47SUQWr5ni3Pr1fhi6qhokEpbxpdKuatuEbWqeB8fJcwv3B8JriWjshNs2VRhdERLciC15BqGcUyshw8qw6j6Q2u",
  "key6": "3GhaeWtM7cU5Wo8eio6dS9kLzid9gJkYKfkD6Y5M6kLoeayVKrRBW2FoB5z2L3VEp4N3WwhuNS9vAUZHVSVWb63z",
  "key7": "3BW4RN7wURCjkPvPj94Rmvfoay3im5asaxyQZHWk2whfZGx47AzZs1Df414EYtQNxcqwnBmTfJxcqGV4TnJ1w6Yq",
  "key8": "3feCk1gAft2Cyg4cLaKnpo5YTVNLTZ8MoZhDD1K2f5rNYEFRmCatCZSXvYELUUFtQcy7Ta8nEpoSrVMJsZKG1W5o",
  "key9": "2qo9N9eBMjjJXq6U3H1td1q87bhyA15bEy5pUDf2qSzbVud1mk2hpVnii3eGonuGUHQXpFX9Tjzvme9zr7hXteXc",
  "key10": "3nT7eJ5GUb6MCgTCo1wDm6BNWNyTMu6xCVFK1Pdi1otnytnVZzs6oDFmrN8EtEowrFjxXubLTrbSjwM2Ja9t2qe",
  "key11": "5sWbHFXX7hcVLyj8X32QtMu8AcgWroBbgiFMERtd9C3rFVb8VQ2E3BLR7QQbrivraeAPv9whMSV3ngoWRzbx3vEQ",
  "key12": "2j1ZmR4gN7EpaverQmG8sWFXt8jdu5gKvtKrY2ehAmMuuQvpPsfbN34JhxACSXYJX9x5j8Pc5dtNkvgayvaunpzn",
  "key13": "3AkUeRh9DzGdGp5T3ep1aWjNJSzpRXeHn364Tzw3RYu52VkvnB6xP8GpAY3R1VAuZaDsTnV2epYfEfhMvJTNUor7",
  "key14": "2kW4TN3dQUwkVzQcm4oSTyyo5eiNNqVRpjf9Kf54Rw5hTCtS6aoLfVUKBttzsAu2rNFNKz4UDS72YvM7PMtU3T38",
  "key15": "28yqfBsja3MjPxoDCgHEkkCUaLDAJFcAF8Yxz52zBAvUvZPffSsEuaSDWeWnWHkhoHYKBzTFWzCszQbYMsdtNjKm",
  "key16": "FdP8b7hXoY15qLh7g3NTMby21Ldvo7qvgR8U95JYS7btZFjSsRpUQ5LPqkDt85FWcj1aUqJGzyWNLj9qutTuiVY",
  "key17": "2N8j9kAcAbo5LqnYXuEYZfEwv5WDMV2Uqag74dJXkkgQVyks4y1ijWCQZUQCYDv8zyhorTYRAgQtmG5F5dcG53sr",
  "key18": "5MqrNwvDesmTWs4G6FWV4zEPvSxsciym37ENkgyF8JJv2ThKZLPbmymm4JZ57M42BkkiKMAK12f4HXrcGwpVXKAx",
  "key19": "4Dd4bAvaqdjLCTASdhEp2mQha4Tnq9Suiiz9F9UHng4iGGDtX4w35LdTcKLWyBzM9PJFL3XnJ36Bjw6poxALDNtz",
  "key20": "4mUvoopZPcn3utuCNjuHQGpjm1B6nbc7FhdjMs6ASRJ88s8oauvGrHz59yxbDyuSGTG29sVE7K3pvQSMaM5hXHH5",
  "key21": "dCVgfE6ufSgtQr97L3gRbA6wAP8PVuwCFgqR3RFkKQGCd4zthDa3NaGer9hCabSfBUNKwDugM2hmEPtYZdnm63V",
  "key22": "2zs2CF2GvxHJeerq7mb9z2VNYcvnUPhQmgSbhKqte8Gk8cNscTEaKGnEGXY6mynhJBgXFzriPQbuQ79zPcjudzbX",
  "key23": "rT9tBKqc3LV3csy8ShV122KMWCQyirfuU47Yk3xW7gutbBYeYbJFJKhHLnuCWq64rFTgThXntV7njzXsx9Qr85o",
  "key24": "3XWHYi5PFrsV73XtmGqQyyipdWFE4JGtQuWSyfoWiMyCvAdzePpmVcVivGKRBFrTPx5ZuGQTWojVvvZCUB7TUFm8",
  "key25": "SSJdEDdX3SLLPvfG75prNZMyWXujeNEvW2Wf8ioUF2nBxzYquByx8Z5mwWCmPogw5FopN9aLnhyVz4bs9CSYBZ9",
  "key26": "2er4z2rum99MRwWMpe8BTb8rWTeUCXyGrsT5udB9PWshx85yXy6Uep3w5LSj3FywgMQT9YGApfNv6p8arrikr5ry",
  "key27": "4PA2Nd44tf5KWrUJpThsQREkiPwX25yA4aCasTpZ2yHicWEni7KQgXaHu6FF7EyqL2R5CEAtEmDZgyhmkJfki3P1",
  "key28": "3doDsjNnRqSmG99mYZxHLoG9uHhcV8X1BSdxYPSFfg9r8kKMrKftChrvh4hoDeXpmhtwYdi2s6E7vv39z1uM4N4v",
  "key29": "4KVrcokCxNqT7BC4S9rdyYYxXKBJFuJ8mzYh6gSpEgnHZ2fw7pDEhuMW2EHtTSCMwxpjgEEdfRcM9nceN8y68T9j",
  "key30": "42PsPZBFoXu77eRA1DSnLAvokWjyRCRNoVK2moNVFgYHoL4C8pDSxbUecXjyKKecBxEUCGRJBK2exRZUzFtqWuH1",
  "key31": "4WgdTPfoeo76DhrgBSNvzdm1xi9euRuhyaSiixSYozDLUrXRuGrULkQLBroC9h1i7GakdvCKa5vW9jeEAk1YV9BU",
  "key32": "5RUZgaxYaN8sFMrdDWzGaLnXP7VjHvUYDUv6TgGyPgecVKxCK6JikAXH8ickdQtKAd3u6ifuTthRCcFmpEqgf6ir",
  "key33": "5spqcMTKeBvntZMxPE1DDnF5NechVyaSVNs1CyP9rb49JGV9hwvJ23KnEs6p2nhRnJ3FbQtHJJmMwn5ZGRaW8Qjn",
  "key34": "4ZXUBPxyW9XuqwuzcHkYLPkfvzLubgNfaZ9b4qCfLeH2AGmt36zdqULb6h5qH1F2Yzvgvmi7U1jEs93Woj1BbiWX",
  "key35": "53s4DzrFMmiFB4hNCJB9QJDxcYdUzVWQ4kHzdgwy6MWKdUTcGDdSPHEx9VhcaAHMyiPDw4PGhJpKZ8x5Ta8ccrwS",
  "key36": "2DkSQtTZJSMX6a6bgbYP4wGYg2A4HNk5t8FYXZnw8d3tF7BHEAThE5AEXmTvQhp5vLA84janJfqM6JxjpcBHFZjT",
  "key37": "sc1USbRvVspSGZpY3bVv7reWSs9VNLx8XyTqrv9j7jEfTPaj9X8NZYBKzbrrWraPPwTPd2GhcqguP4MobUeECij",
  "key38": "2gZ5Ugziq1qXmm52D2mVCgH2YYvsyHsv3eQBrBEx7azyLmvcyUw7YDZZWKmgquTEpuUqsEjAS4zhZMTBivNJBnDr",
  "key39": "4WCHhbtgJkUviDdWcxozc1osip4DRNoUcxd1u5b2o7A5xdYgnj8R7rb6uuWbjkwaTytHZ8RxmbrihUBA24yMCsnb",
  "key40": "k38FfZThc717o27iydsxgf2hKa8iWYQYP44vCsE5ukdhq7wTXZdSSDjzKasqdDGHNhEgvANaNnFE9GqMg4iw7Fd",
  "key41": "6b6UNN3hSv4d72NiPbAc5jSbG22iezMz3xtE7pM3xsnx35WmWw6jrwKrVVpwWUM6vD2uY3LZNq9pxjwBU4DtvhK",
  "key42": "9fFra7fhk4FAoEUbT39YCWFmr8HyZKuRjumpBfshaN7j9RrMh3L48ukLcwsgtCuWAs4xMLP1HmevL1UV2X9Uzhp",
  "key43": "26SPevV3Dw62x1B2fyWuEQDr37S5L7jbGiQ764a3gy3QWfjpdRsKcBrMT45k1HDaDjLtgxWJn5S36nAaEnsyjncV",
  "key44": "T2rB18CGJq3xVnZ4TGgi6LkTHByv7cQRk7L9nXyxd6dcnfwgPdA9amVfovsRk6eQEW59Cvya9kDfWEMTCnrMc1V"
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
