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
    "3Zmn8Rv5Htpr6zRqgJbHVnSs3maB3ZoyYUFUwL44yHtTdPGYjrNGZnvpGMGL7Smpf8zmw76x1PGY1v4iTiV4mWJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BUuH5k47dts44PDxbiJkktws4Zj8YJmkTnMFD2ZXbi9VL6B3wmxAHzu55Zi7FuzK5jd1YTb1BqEekkQuSTXwHnP",
  "key1": "5igTGPBFcHMu9A6xWZcdEUEq6yGdAKAVYVEGZHv3qKcMoC4nuWwWUMvH5CSWCwoS8xYRtQJRPf8ErsDX2vvHkKz5",
  "key2": "5CPHdboujRuK1Qp8BFGsZjr7UPe5gw73zmGvKiihNjAdwjs5LbjBSoCJUrPdF7EStowUrmvd4zWjXze7aJmAiea5",
  "key3": "3YChhWBreXhXoZfTg3Mcyv9HS4wHmgBfkgrBZRVbo6iWL1m9sEQ7yt3aHwb6aJ3UhzMWso5w9RDi4y1NanmqXcr5",
  "key4": "56QWaXFtcYibqFEKzbWFQZmatGt1onuhmcG4CNaQU7ZKHHRqvDDmyR5hNdEryZVg9ijV63bHqivxHts1UXGdEYLX",
  "key5": "5aGpbwSu5sj3ZCH5XdPfVNZnE2ERio1z94QGH5Qjm4Tip28Ecvx8bwntF2z2cXpS1DacNCinNUjJu4xQrv4b15bJ",
  "key6": "uP5wEUNTgZxUKAS1JKVjwBDMjaWHoLE1gG3WP4FTMRgHoceienB8JMBvbMt6p7T6J3JjTFXpYmoohwzbZWzWdbu",
  "key7": "5qQksi6qG6jiWBgJSASGiuRccxZt1AzsyKgb1ewNUDZ1rHNkaijF9Ax4N2YZat2YdktcfMDHMRUrxtFuZoQnYuxd",
  "key8": "5GbVhG6UAf3cPGJUcA5V4jV7R8gVbjKckcrWotgAV3GvAroknKfXhGjVwrSZrzCWxSs1rQMyhmZLX8XvLBBJ8Xxu",
  "key9": "35TBQJcvdQTt4PwyEGKQefLajU2vQdFm4ZTr7Qj7ZAPQdUSDu2CctaU5aMMmSTehj38LMrKVC7YWg3ytQS1wyuK9",
  "key10": "eZXeXLjV4AQyHVuqC19Lwu2xufp5BJLTZsTrx4wbyWwqBiEfojatDYCEu2gdZAP3URwvWFHtb7xCZd9YD1t2Vx5",
  "key11": "5Wwhi6ys9AsKRe2DY56AhAy4PEHwKVA4JSsPSybjAfzobm14isRTL86uTm7nepD3Up1UAQEykpogZMqyNFxYgwVP",
  "key12": "4xSYvhJfaAQ4vdhZRRt2vaPYq9JjCs8BXFXTmKj2FrZQXNFQYrL7Xb3wpqF1PPYruoh7QHGBVY862wRcuEVQj763",
  "key13": "2WEZTeXt1CCie7vtKw4ZThSSL2khHRiGxY66C6YJXAKXJLmxUVQVTvaMoKGP7QSZ8pX8WsxER4k2JeyfgwpvrywY",
  "key14": "2pWbaSFXM92cXNh1F9FaYYcgLp5DDQAY24mpy5eJvV8zfWyby1EcxYks5Soz21trXSSaLkxSmCEi436ZAYMW5a63",
  "key15": "3kybhp66jZxQTQpbyhTML1jaL2DYFbydunrhiiPzRkG7B9cAxCSuusvdxYUC7FxRQWTmRT6TdSNdSADXGXUeYbHL",
  "key16": "UGmU44REEkuYEabLZGia1o7AXBNYgJjeR4u2BBf2dZFWgdRXctPLNBvamqH9xvn4yJgU1RjVyh9mSriCbVEviEc",
  "key17": "sXu8SoTi9YYQemPwJBt8zmeKe6N9mpE12HPPvhXcPpny6MVgeJoi9YcEoSUUZ2DWMTMNNWLFbcsFNRygMVHbrp8",
  "key18": "5vFkaETndRn9nwD3SGH6r2kS62sQEyEERxVfZHC4uCiXH5GYxew3Fg2UM2FRgyEqmt1tEDHdaSPF8BBbdoZjvuaD",
  "key19": "2SJ2faHUVRCHdPcRrrLkRpCfQGVEfTNtSfzKcYHer9YBggkX7ecRCRirVWF3C3GeQKJ5YFNw6QhmVFhNebakAuVd",
  "key20": "37LZikwRPn5rZ1mgxSQdfewhuw6GVx8WsVtzCmjvuzigGZd6grywgCx6aRBU7s45M99R8GsN1X395eDNv3TRsUpa",
  "key21": "3Yc2mes2BMmqXNCLtcH9gkqFVHekH4nsB438wWFgfgcW85RwoZNZV4T6da976W5PpdmdBiftdWXopkYJPrSkRuMh",
  "key22": "2Ux8Xy1288SF2ox1YuJXrJuA236oU6spyBaeB8GHA2VTFAXkcZk6KS2A7WyzNfiyvbX3JkgukNWgvQHhUnuMPvsW",
  "key23": "41J3FuNorhuUrPDw6ojG5jvVUNiUnDNEoXUucy7Kj9ue49g4J2ZF87RJ7oeX9r3QhUnGarsCBw4Hg57RFaRDfHsz",
  "key24": "nyqJLadsiohqFu8yvnfpU1ExKx44VM7eZiTBy2M5Viq3qi1AqeQUg1CdD2EzpaNhGa4rsMqvfBGUAaN5iCPM6RV",
  "key25": "5CUiuo8GmKzwBRAtZ5uku3uaAS1UFExJAD72bHjsTDp2yAeeyhyxymyAVPHK28whtLUtEdr77bWXjoTcDaU2WFxw",
  "key26": "236KGJ9ArawUiUnGPJDZ9fgFr3R37X25QojTbw4dLCwSg9YAdQKFS1qEzXZwfkRpNoARbB2R9DFJTeMcyG2e2hAz",
  "key27": "1L9riHs7sx7XCg9xyky3UbVQjzewzwfyG8yPNkkEX9odeciLMWvY4B1MbcDkUHb5f3pEvpU2qJ7P4mCSkpRDMM3",
  "key28": "5JAk84Wftu7fLUmuHoArZEjdsXzRLNBQNckDTEKUQh2CrkSG762sJRNpXJKRhYXTiA7YaAVX9pi3NF578W34nei4",
  "key29": "3LEW2Atu8N1S2tLXKqLxSmkLprUKyZAK6MGDD8u5UkR642QEz5wTeeuGAKKZQ2yrPhy1LG5ZK4RA49QdwBuCd2ZP",
  "key30": "4fKvgPuaVmgyNMJF4dx9f5yZmfWF1q6FaTEsnzuNkbBstF2zoRWUjqXCkkGkWqiHcRSeY3rUay169eAACUHaWCt5",
  "key31": "36miFjDPRp6TiGMsSuCePVo4ub67RYDhuVnMvdsjFUcmFPzHGcwtm3dRNCUL3zDs4Mrg7HpydAo6cmeMVGsdPZke",
  "key32": "5skb86mJLexyrNomCMmkvpYWc3a2ynPeV2tVMwCW29jNJ1TpGSKocyvf8Tcpe25hGgFvxjvK6KFKzrLSfw1p1EaB",
  "key33": "36eHZ738Mv1J51gXrd7WtPK3g6bmddd7jpE7e5yiXSytcChrpd3QLnSrxoVHGAmHS4Vj25ML5PnrHCSs4eujmu7t"
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
