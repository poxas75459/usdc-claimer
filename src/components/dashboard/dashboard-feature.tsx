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
    "5LmnVmoQQnyEG1qiiETJ2vvv82N84WcLSQzVtNqnNpPAm3DjBdoiLPsnMSB1aPYcuQypEWRwpA93CaiFSh7c61WE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nN6jJekA7idqE4DVVjocRWbC5fmTa14NKs5xYNR8Bg4veDxMx6XhiSt8PNRwCLshkW9tF3DNhuGtixG9jcMex6B",
  "key1": "UBteEDa3o2VTtC1h5QKTiKH1KXdTwsVS2TxLReMUyZCnB2biZz5HBrYBtuDSxyWpJUWL1TTniQpkffdN7HCq4XG",
  "key2": "4UwkPb2Du4LLKFmXPmy36suhZcwEdHGcNUPG9xHr8bbr18cSYbJBtrMibXjkQyAquFWFkEGXFiQoyuSihF633UMJ",
  "key3": "4aZvt2B2C19WQCEUVNdzBJcSixJaGpHNyH66cJG1U64pwZ6REg6nsKAqQSvwZk7cLsNHMGSnuTK1Mpf5BdZVGdVM",
  "key4": "mCdWKmgpQS3cytRBCjsMyXP81g2hFgKRtCPJrh5KZ6evkkenoquad5ih8GDPEBqBQwWwDo45xexP3a7vsg8uZKs",
  "key5": "5kTL46QMqbLU3PJAnDTHPrZvyzJAr8up6jDkAQfi5aeTez4yKByCpcZeXb5oPngZCLZb77PHFxPfgQwPJzBfzJPM",
  "key6": "LUmrWrLgvUmPgiTRMzGtqYWrkUGtHxqsrXqJWNAav5rkTmg2r13rqpWwrA2ssVVmeFmbZvUNBrDE42zDbMk9o6T",
  "key7": "56vYAGKzFBUwvjrH6vpLevJsB7qtBRpZrL7AzfMHsBPgVUFtEXAVTQu52bK836BNinW7fS9HdUeLgcNC6i7dw8DZ",
  "key8": "57FdJuXGN9WMknk9BmJ36zgqPkM6agAnLj75sEfGgUJUoLtLHyjXxLgZpwDUZpdHr8VQYHkthRxsJkZYzZTbUDcz",
  "key9": "5WBs7SNcf7uDs6XaqrYoxxVkdBt32C9ek5uzbk95Em5qH5jq1kHfBh4nBKVA361xSJtomDQpvpexQ1cSh3Peo8PL",
  "key10": "2R7y76yFxj7mDAYRfCpCKXQi5TAEmT3gA5BeMqRweHKQ9cwhh8zUtSJnbX1xiFTToDHZFXaQ4qteNK5dqaw8NB4W",
  "key11": "2K2r3DbXhNideBJozDg8MWMopXU8y7g7tTDHGYv13zU8SdqMQnMhun1Z2dmeLFcQWAnMXLVynubcUGb5bWqfzp3",
  "key12": "ncSEK5EgPryNMZjr6RetVByRrVHP9CE6AW9FYofo21jS9fqGaPoLzjwpJAPeRHXudvco4JMHKdPNnVZuGn2PeX6",
  "key13": "3giMWRWsw3imSWDuNENmE2fknGuhbZqcyhYigPdwzUBWxx7v4QHn3gyoFgULnLvbqUreWrP3yFChPiNaM9cvTHft",
  "key14": "2m7bDd3GYT9ERvQARisQQvByBGUEwinndLVQ7dfnASBQWJSoPdrL4oXQhDxXmUxbE5N3K2JeUpKfcgYSg7rRLBmi",
  "key15": "obwP8SuvzVD9KkbM2duoM5yaQUP6e3nPq5MRhZVsmhLvfrLNBn2dxxtJbm8RywY4ZQjao6gmtnkc11XHiTH85FV",
  "key16": "3ch2ey7qV6TcKQRqbYmZfmpx1xNUprw5i7KwdbGXGWQuKW4F8wz1BP5cwv8BYoLjyASFJjcEkmqKAuLVtsSKqiYq",
  "key17": "3XeTXhqvs4nnNZcAPYYn1ctUhaz6MuGMUXrbKPRdajDAe8W7QXk8UX9BiSr2BxWzPBskXeic2eXqSJPKMM71segn",
  "key18": "4tHanNtTh9eqkU8qJB62mdVkNBBkaYoHWT8od5kVp82wVG3g62CVaLKQz8hrn4TmX3EWDNWdpDwNtXoCoPpg4Mhu",
  "key19": "3dg268QQzo7KEg1Jo1796sPCkqA3H8bvY8pMEfhCLMohfr8dGchvgxfR7hQLksMiZyBxefYeq5R6mgARV5C8grAf",
  "key20": "4pLtnCxKEMJww8FvajPbApyW1y8pXcSj1LqU3gT1WKWWq7WgxqizuG9aJsEF2N9joBvxPzwa4gDGL4LjbWCLN4aZ",
  "key21": "7nuqSEjFuA7SUpEPveaQaoD1TzjcHZ7w4Ne3jTL5mEmdCVPvyNEP5UzuHMn3VvTx1eSjJ9hnAXrwptviy7JCfJq",
  "key22": "3BW9LvAZvb2qYCDq1sKAHF53f4eokLbZQcDuLcsJjU2qnykSLvpY1sPBpydihDer7XiKMfcm68Qvr2rkG72SwsnW",
  "key23": "3DSX6oLhRZKHFzwU8U174sttK6tLSgr5FH5hmkFN42sh2XpqJysQQ6iMEjjSHAAovkTzYMSLznHP3fF8X8ZG2zLy",
  "key24": "2cwPhz3x2VBceohXQguWcMi7DtgzAHvieAeF9zQoxFoufarRhPKP3bKn5BCJkyWUFt6vZLJdQaUb3xgref6UKoUh",
  "key25": "2QcJkkuHxxq97USz1QqjQ7xD4Vouh8FL7i83fEUEbQCjG8eJcBPE1rhoAXZDzCc9b4YDbhKuSQofPg2vKbh4BYuq",
  "key26": "67Eq8xekUFzdam9rNLTe9nyHJxV4S4KCyC3nb89gFZ2gPH3MT5jRrM3XCx6A62p8QeVDDVwiVh2peVyj6Ewmu3KX",
  "key27": "5q7h44JstFPi6pKS9WshuW7vxBZgjEyGaMKVmS6v6NtmHzt9m4YbDehgNptk2LqT9wC8T4Dn3SsVjKqUo46EB9nH",
  "key28": "5oygC8Yat84BcwnkqNeu6ihddnELFBP7zyATobrvvnV1Jqm9cwgbLmRb8zVtNc3RnRJ8hnGKCH1opzjEsYphsDnC",
  "key29": "4bBaV8BVg1kbUK919nh9Dn9fqdmxVdNxohQbujZKaGushSy3xcNPU7MBkNCUQkL3o6Mexp7ztS1AVws5AtqdgFRt"
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
