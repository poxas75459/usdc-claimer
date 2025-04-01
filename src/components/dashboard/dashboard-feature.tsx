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
    "2B7Nr9r6iwJWmWWqWZwzr9sAeMdwsdZBk3hCFoWekjHobP49wYfMMzvHEdSZzU6QKYoCLFaiDPs4zGBjjB1tvKB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "headDaomcyiC49Wx64pcVozRFNDjrLuHR9VYTrZq9Y8wZYPautXBDSEbQdwHy1C9LL2aArNbCv9tFTFEPsuzHk9",
  "key1": "5yRr3LDzjkgczCAwUNcATk86jMWScwiCrc27PqmRojQHWR8Vykk15tQZhYEpqt7KsLPQcs3mchPii2r4mqpNvLg4",
  "key2": "mEUpvFs1e8UQfnPVV7P1M6gJZEmK1BWUS3iEW4Fs6kuaFgf9NJC4KNfwWttoUcq8cC6WPiyp7QjrqiAGHALyX4c",
  "key3": "3E2JDW1gnZKPKHRbTXPR5YW4MMuuMCVh6scxXnB8txz3aG6N2Ugi18YpeoSr8fpmVxrHw2A8dmrGrwjRG2ySZzV1",
  "key4": "H4xesDrhoT3tuJaGtNyaY1nxY8qrwkhruGvDRi7Xn3v2XCjaP6yqa76sHkSsTrm5ga353pswT7HwuShNSDqqii4",
  "key5": "2YVvV5nNU2ZMWuF5EdrzSxYXE9tQfAss3Grio1f6Z9ZEsQK3XjxgT7LTVvAfES3NMXnj2esshL79amkLzUMkuhVz",
  "key6": "3Lj4a3Nnfhhuzbq769xeivTMrfqsRdMSpYYQMDh1eftxFSaCenZG92mkV9x63eEgrPBUrf23GhdQRmBkqTfLwtoh",
  "key7": "5EGvqw9JjDhgjHScZAEDsGAij9XTrBqzEefwttweFFTs9sCvJvobHXQ27ArzY4CW6p4QB4rFJxW9koncF68NEpBb",
  "key8": "5b1rVbnH9AzraLFdckK2ACh96LqaQFVACZHTeFQjZSHK5uJvfQEYaFXPy5zAWGPLiAPYfUJ2Lm5Ea52Ga847QM8j",
  "key9": "4ff2i99CQk55iiGX5coN3cVMfUM8L87rqUYsr84hkjPEbusptznZCLksynmcLTiiZEfMR1sLt6tc9ZZCPmFFm8AE",
  "key10": "2SKBNh3BCyuKhrrs5ouytCNvRtEvNx3tQTZWBTvqu6jmzbeb1BPJMgnWdAjn2vSn19WcgxQKzwVHMgfoLV1S2Hr2",
  "key11": "4BWvmGqQo1C1RJyU3uDAPn5CqgpqiSL1NqboWpSpXjyDjWoLoh9reVq35frCvhwyKsNvYWM1EDvYAuGtUqEC5wsE",
  "key12": "5R8R4JKGrMBsfqqKs3ikMJXAWYjHP1r3yxYpL2wdNvzuRjZL63SqqPvrfXHsdENiJUfnrYA6fCjKfBMS1Ew76LMV",
  "key13": "2m3UJv4NEZF3Nw6sV6RV9CnAB8vPVmp5wxUJv1LUqyf87gowHnCVGzBmp7eZDnJ7dNB6moQjUZVdydFZk6Dippvu",
  "key14": "5Z33KyC9XLBKHUDkztHmKatncM2P9XcRA2QAiHSAf3wmPzjqmpndRyhBrkjPVZdtSSPthzqivPa9QwvS8iibhWok",
  "key15": "5taReHe2FA32RC7rY42DRxg8XirW6d7Wdb97aeKj8PWxtCkZWwsLeijS1F9xbiBuSizHGKBSNnMmmd9fLzHHbyM8",
  "key16": "5RdFwDGuh5YdnMgwGw6BuTLBcepsZdvFaD9285h7FP4NKMvCBjhySZV3MyZMrMEeXjMpGNbMEv8URaBo1VVaSjjM",
  "key17": "7R7DCzpSKNYnGqX8idKdMRM7BfAXC5q3mvQrpyaWTPbUFjruC6aFMMMr9qAFssxv6BhusanyqVYgv9rZCYPThJN",
  "key18": "33AiD5MS69zpX1u3eUhY41qaBzVLjhEzXw2geoejPm684FFhrAtyws4dhWp4uATojQG2DpXc5CfQ7LRSfcZvNo5G",
  "key19": "47Fut1Ds4GfywpqbVKJp8ykUF7ameLGmmxbf4XbHa16jVNKPcKkQUXKJN36YwBuyJj6VseThMDJPtiqDZdctz98j",
  "key20": "65nJHpTaWqBXfgnVkvJbY8ohRtQsTRRAUsyupJpzRDqEDm38DPp4dE6mZsYjPzZTGmsgkR7dNDJ1PvzfwVZxjL8H",
  "key21": "3Po6J1uWtjHKYVenxDdgzEZK9uRqEtdYGefq8wEPokjt5bVY4FqJeEX5UjiEGx3gp3cPC4bqPJ25YSVA1aKqXHdV",
  "key22": "2MtohWhtVw7qENb5yof21Dqomx9tavcFGNi7CHTqajQnHAzVF2ofuiRoq9m775nZdheJuXBM5awfa1KANYpUTsJi",
  "key23": "4ESxQVayA9qucREtujWiioYSbriUopGo1SvajbocTHTafQ47CJ5bLBHv2t2geeEf35r5mzLfAYgCjy1iZgnqnuQU",
  "key24": "3TKwaMX1RBjFokQcMnzJTciDJPh4na9P9oVWXdG53aF3ins4xfs1Hj5fhnPitqysNdxC1S7omAAXmBf5v3GdeExC",
  "key25": "3wAxkUyBMn2bMspiNpkrbdvYfCcincfKzWARBNsY4vf5kKsXpcKFfcLaDfqSCKTSLNehn6TEjBFM7vYEAyAYo2px",
  "key26": "4KTZVijXCXS4HFRNTvviJMMydrtYGWjMvnE2mFx2QfLgkyBvpj18BCNtXGDYLiU2iwdvHV9Ld3MKLP3QbuPZJsEM",
  "key27": "4vbHT3yAPyX8qjfQGR8sKn7EGwqhuMnb1U5eV3H7jSyFMTDmqM3SKLuegNPhhTH82BFcCaqweJGdKUMxGZTBuM9U",
  "key28": "4VVrSFgJ68XRhGCBCpKPfDa2vjRFoSDpQThrzdA6NTNE1DEKjs6ibQ5ptwtQaxMizKSomcpPgq8mpKukpSfPsZ9i",
  "key29": "36QD5NS8Tv13Pn4ka51cXwWYYmZH2RMf1eiVaH8xVDDakKYjqoaAt4q971sLptmnVedMFpmBZqubipU5sXKinBzs",
  "key30": "2s5v8GsyH9QgxnTWnovbXzKrDXfPUGQFpxPK5wev7W3CY8pS1T5LMJFeVB1gWmP71AReo2Jv4BfP5YJEb6iFVP6D",
  "key31": "58PAbDNvRhK333P8GEeaqx5q5BQ6cGZ6GoMCyRmcKeCicvGcx2h5StfASUb6QwrrUg6GSZABVE3GzniuBvmD71HB",
  "key32": "22mjjX1Yi6JaRigpqEu1RLpkuhU2YkpAipb1bQ1hd2Wrh6hKw2SzowoeikVqeiwp374EcMhicHurSfqrfhvi5k3c"
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
