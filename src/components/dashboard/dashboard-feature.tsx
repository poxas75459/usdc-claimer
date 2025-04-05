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
    "4UPT94CrYzeQ9UFeNtzQ1kWUz4Xto5XJhxDJPjTipsGDLVnac7HjQ8DzkTNsxWFqEWYx9rk5MYJtz2t9QFTTxe6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kg4kMvk4QfP924isGPeCmzyPS6K7TeSRHu6JNdZZRzthk9ug89qrg14FRP17mKspqig3ncs6LbvDnn3Su39SvtH",
  "key1": "45tgZ7A3jsvgUgRDdfY3cVjsar5a3XCSu8DvLr4UU7ynCrNzDDyGRbXvtsg6uvbcX4q9tDzrXv1GgydPxy3zWwcN",
  "key2": "65xqY9i9LtbL9amWQif5u8PSkdFL6WKThnGxYqf4eAqr8g1Yv8bDgGKGp6iFMSiJAzbTHykAwGQQcr4k6iSpiQ39",
  "key3": "58vwtedCTdHprHV3S1uiDoJaEG2SP7G594nTELynRAwUSNqj2qbnvqE4h4XYvSqNnNg2NcLioCaSUyi8BeC6pLEk",
  "key4": "bQ4ZX2PGTHvxJibkbp5zPBwo3iMxcev2DnPLE4rpYXmVxTmY7VaUccoF88ukKfgHsn6oxKAbJakkivXbhKRkCbt",
  "key5": "5BxpJvH1uX6UUwuyn6hf1TuHGZN2mdn27eLJ4T4hTNA27Z9zn26CNgxgg7XvpLxSLGHrKMGRtsbuhnBYwQS57eU2",
  "key6": "2drKb8f1UVzLFm7HGwQt1mDHT2G9LScQESy6HN2gr5E55LptH7Yp3uTJ7nYda1TH9AZDrPiu1Y5cEdqsj9SNhAjg",
  "key7": "Riop96vPD9X2zByU9Tkgjfv73MQXgsNPsEGtHQuvYo3gP4vFcUXGzAvdmNcxuRKickZmWyQetRB8WgeuGrAteyF",
  "key8": "4yG872VcegSmMTdNXMZCXkD3gDaMk9yzQPVFec3FVs3Uz8KU41QFHqZ1FV8ejzozHECkVYiYwrR6fhVgdzxgBCiW",
  "key9": "5yvGtH4JnxdaEUf943n8MLkKQ1TzdRSatKBqiADFzmp79Td7kktNmZDnrPdajZiVnrgGEWdB9PyrJM5ks8QxrSPN",
  "key10": "2AcepRC6qJQG7HbfQCSJcQ9Vi7gxMqsQw1iJmeCrnsEH1xzWwyui9z6Yddevj9ffsdbaj2UQccia4z57ZDcbuknT",
  "key11": "4cpc4Jy7HJvzPrYYVDhvfop4SEX6NEA4vXwiqMCSk8PMFsDVewoSYg86BEUoCgsyivoJXUXnhW3mJ9GEVj837Uxw",
  "key12": "akieVsDhWzXTycJKU3NnejqJcaYkLSvtA9uYNdsmbrqveEa2QoJKaNsTZ6RJjcenCSvBUAnsmKhAY3B5TBeDNMx",
  "key13": "3Q6u7ShzvBSxj8EcxXL7TW3hgJQPkkZp18ziHPcSCCMW9Vk8S1Rj959ihLGnpLPDcQUFxneJdCUxxHa8NF6cFX6z",
  "key14": "3yUCr1PpFdYpSKHP6HGwTP8CkUXb87htxRMfKdYDCifewSMEqWP4TUx4wrdnwYyc3N3g3nVTPfzbJrE8APn9ao6n",
  "key15": "3pEbjQCSf49ZPRAF2LcRNJ5agM36MUWGjrbssd7pCHJ8BaFrizMf5VZ3kQ8zMqNWduQKn7QVUiN584abnDX1e4jn",
  "key16": "4jcDqm1bSP9abGkF4RToWf4YGi5pLb6kA8rWpyACxf6BzF4MdjKdPeXxHC285cmsPCAXieYZqhcseLSexRHVB411",
  "key17": "3jMKHkK5xEVbwYBkTSzdwjBfb4a2pwGEJHP7fg9wsUWjNpZFuojDeM7nLHyE8VnhcfNuQdecrBEpGMtonQuje66J",
  "key18": "3CXgMy3RWZU6DioWD78DAv86puJ3QEfqoBWJVyrsjiiooRsYBeb8ABKbcg5m3RC5G9Myf1UeknBvYYsh2RBo9zJ",
  "key19": "51v9PaR3jf3KEAdqtjPNqxdz4KEdreGESoqmmhmuTGL2ntiqXiGJZtRx2SpMn4Y87XLtcQ1rHUvKqbbFUS4ePRVX",
  "key20": "3eJszsS9R1QUrQccrTg9BDxbKCs24FJsF4m8Aktj6WptKTcfKGbNgXxeMnYAHLAAQzuZw9DzQU4GRe6fWh7sbeTp",
  "key21": "51bcbJ73VFUkrbBrEuqHVZW8KG5KqinwT1RUooKmVznjW8BcyyZb58hia25SMT4CdRPANK6ZXKW5ufEfSxcpvxVs",
  "key22": "47d9U8DLj69igxuq8FNshvr2voNAP1uGdM9GP3cK4cQaEgxF69UmQcCDm9yN6hjCU3GWM2zaNR4Vz2L4UUVYEYB7",
  "key23": "4xQUB2t5eiErcxCCyk6VaGHQCnTBZbMyin43JURhxjcFjZEZjj2eccFULepAPNBi19HjnKidhwUpxSZZbzZUmxjy",
  "key24": "3vDAKLRqDmybkShUGN2VjU9M58dbfVg4XJ7wnYyvCLiAjuxEkPRv9C94tbrKGxhFArGxjwagaxARpL6wG4NK2wLH",
  "key25": "4aLorCSAjPtg72VDuTgGj6svjVVKv332EKZTDk3KbAUKxc2uF9eZDChoFAAzSU9VwEgwYoXtEvBAAxxqryPg5YPX",
  "key26": "3BHnY5vX4KU2fAYnxnCjQdRnP8gjUTfWYAMCez1HAthnBuqAPxCFhQfkXsdUtgNHeUCfAomxtfJAX3v1KdYoVte3",
  "key27": "48jzukU1FEyw58Mxm1fe8cNRR4NeXpocAaddrdi5QWv7CVRoim1GpmNCKmGCZauz6FPnjdDmyTsDfygCzAHAE81L",
  "key28": "45pU8nGewaKES5WriiQnsq5iXiMS4bsbhrzTjtS79uoED1nhvHS6Gn592H7duuTcq9Hc7S1Ti8vgCEULgWSt2kwi",
  "key29": "36xU5jrMvon83PtyXMc9T6eLt1c8u8eKu6qyaiSg67jB7hy2ByLiGMi56BvmdUr3ucLgg5diDpj3QT7dfS38udTV",
  "key30": "YRAW12xaGdUjKswwrkqujaNszr5LsAXYVTDbN6obgg67CijN7mGL1F2Kr3F5ttmoU7xZ7XSThc4YhRaawybTh8a",
  "key31": "26BPPsXyHceBzFeNQugLio9cxiMfuead3cDyq1hxZVppE6pYrh5xJUUZTYzcq6QubEVhz7Z6edMSU6D44pWLweTk",
  "key32": "3tqFsFdZB11o3612tGWzmL9Fum67yLukAzdKG1zCcfSkD4eaY9mwsjnLxhBnKXwjVCyf757uRvW7EtxSgSnibob9",
  "key33": "4LDQ482SrSjVxL5ujNDMGEJtxFAmGMZKLDCWBGqzNCtmEiRV6xBnPRuGmdUTmMXoomv4hEZktg5afvNV28kuULM1",
  "key34": "2L4vx14j5dAiMF5ZbzR1cnEgyF5s4EC9wePi5wzKLGYo6a9vE8Ljmjjf9Po6Qagwopbh6DPWJ6oFokC8xiYwNQn3",
  "key35": "4hbHUSBjUXZyhfeijp7XG32QJqCFJJKrJav3FKebpLpXtVcz7mkzjGYLMy5Mq4FqWAdToRkvdjMt7iAKZ7WZu2Kp"
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
