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
    "2zQtrhNKoqL3UDs5tVAMUQQcSkdSJi73JE6iULLLVa33293NUvqtyLRM2ofa1SKoKQu8WpCrS5nCLGp8dPboVSBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4epaoqWEQzFw91NYQDFxPsk4bbXkjSvLuNtxxKbpnF95soKRwRmA9BGgEShhk8XU1vWs5NJ1T7wNtKJduxiCxCR2",
  "key1": "4rXYn1awdNo93vSYqrSoxobFYso7AsrqVibSSKeoZSr7VYLSNG3Y5mdyjWTPR8W9JMZ168eNRmi3SdYzWr9vximN",
  "key2": "5Qs6mjsA4d9QLj6vSjKBPY7a9rmo9mSiMHtkfZaBaRBnYy5VLxf5pUwvmxaHfFa9KvoMYw23eZoguJCqBGFFrisw",
  "key3": "2JxAPrvMSkQmnKPMrY3od9tt8nerGKZ4TVZ1TeFRYCLZuxTpYbEnZCf9KgQ1hvVPPUqdo4xx1DVsCM6fuosRByy1",
  "key4": "3psoC1tYyegz6qMg3t4ZLyhVMPRh1qiuEnf22YimtpSUy48q1SEwT4xHyDDKWazjmu8xbZZQmSiUcCmenQVRoLH5",
  "key5": "4Z8JN3VjqDjnrr2yh1g5y9Q3mwEECkKdYLbJ3MyZ5Bd2SqJPqLXSGUkTSzcfg3VXz64kGjHi7NEujB32nAjbSaMB",
  "key6": "s6L8xCTFjDDHMxENL1LnxdVvEoG1iEK7SPcu7hmSRqEvei4LBoJ1iGVww2QgbmD7nmA2b1HkL9yUWGjbhBE71kU",
  "key7": "2KgrfhpbcTrZPdosk7p9h4C6uRee85wAG7Uzfaw2rnASZiQjeTB9GYTtkuHio7L8feo4UXUgpxSfJoosVd6AdUja",
  "key8": "4wbmb34b4XUi3yciFVQrcyPRC2wrzqvJUjP4bWwyjUnMoeFpcHLeDHyj7qKHviAeWGK3dDpHVCuZjVPDDJecXNnt",
  "key9": "2S3Xsr3uCChZ9AW4D8kQbnHpakRSaTjCpE4M86ucht6Bu6WEf5b17ukxghGSQPmay2DqUERrD4xdyFELjkWdKC3C",
  "key10": "3ugqEJaAxEd2VXJp3FEHEDuVvyho9DYNVcWbBhin5WyQsj2w7CDNvYsQ2E5sr6Gb7pSfzWtQi3kzoqHA5EkGYKc3",
  "key11": "32EiAGkCH3KG7CVTMhGxcRxU8fWt6r2TRnVEbeto8RFafc71K1VrGfo83g955NdQQZitbX6u5tjhYpFgMV5Z4cfd",
  "key12": "fMiM37gBrKjomSMQYWdEKu76nwxxPKh8ur4K7WmBJZtTgfD3b3Jt6iJYhxArKCczWaHfmW2kGDPuuSfQiL7RpQd",
  "key13": "WLnxoTgRYsu5UP9ZMv5U7i8wMfVBRdD6etYqNudJ2Bgq2sSVsxp1MVTMPJEyVA6Toek2oCrWNdFRgcbAyxbUHPw",
  "key14": "5FRbMCnZRvBSbkP2aPUyDHu9BAmL43CxhBQJZgfn9UvCTFdLKfWn1qsuQaVoegxbGMn4Kv5khTVgEmefkWDJk8tW",
  "key15": "2cU3mNcSiHZyK4GULM8iG7i5a86ha5e96Fi1cdbvK9ufmeeJ1FDziDqBfEHTzzfUtGTd7piHjAeHobeDAMvQbrVG",
  "key16": "zAzWcGN2GqDMrFsho7yACGmqwxrYKduFeKbGmW76oPV6XuSkeFTz6Ne4BQwPws617ZoPB9WkwzieArCZnW3vsZR",
  "key17": "4eSG9LYZo9ycYt1iE1TPS3VXyAS4PWC6G8dDoC3qsSiqqNaGae7F5DZxy9tiLSqKLnvMu8B5qR8E19UT9cBDaGY",
  "key18": "3wsNekd8mgLhNa7EMKfHSsb4GEFGEdZfcmqfSri2hae3WbvEdr1jQHx7XLeaavdaAb532eCgzToBkDT3zNLfLdmN",
  "key19": "5ZiDbwDKnDAtNZeTB2gDxj1nMEdJtmxPCtYsfAguufR4mhMeBZA68nLLJd2SyyqZWZ5X4M4NRAUJXiBU49FWbqWp",
  "key20": "wEh8u9Ydr7BDdAtYnvWHpRxoubnnBEtrKLituAviu1dswVakGyVPxK9HH1T8C2WuUWnLAJWsLTnzTcsQHnuAtsx",
  "key21": "vqQAgY22fk5YBC1piqwMnEjfGb8r6KgmWBmV2D85bz3gt3EeZj9kKZbkNtXbsJPsRjZjCVqS1HMckVLaHWXMno7",
  "key22": "255gjDGNrBCjRcjksGsAjEwFQimDsbvWnQNYrj6eQckgQp3uDAK4rENDwFhSuouwmJnqJU2o71RwpiMNwJWy73zd",
  "key23": "64jy168pwMNFaEaPLWxPYKhVzuFDoR2mZe51N4k6TPB2SqwGBe8QHEwQ6E5uN1BLW78UriinrugQLfrkeEg29uBN",
  "key24": "2zzXSfuW41BW6nCoE7d184cq1yWsmr4c6TrLDVovJJPnQqLZLPkdiQ5yafcqTYzdTEdQcQWyM4wXqVVUBcf9iCUM",
  "key25": "41uPnpc5bUavCnRLRuVaj3FkNygC9GKNENuKK4eecS1XMfvRjYHP1RhJYmyaMMpHMbVr2apxYesFYS29W7UDdz54",
  "key26": "2vw6qBTsh3Dv2EByhUid5d9DVeRbUj8prPyeE4AVzA1gk6y9SLQi1pioUfmRtkSniBHRA969nWhfT4G9SE8awGTX",
  "key27": "3E1D37meqnrhURhUC1vcATSX5zqH2aSWoy9vyZ7d37yccmxkY3v7MwSsopiVETY4X9WCbNbNA86Wks57WpM8nVma"
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
