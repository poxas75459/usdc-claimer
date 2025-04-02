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
    "3oDMQvBF2iDHSiiua2REhg6YGSFiXp9NWWAePcabaUv2YqsiqHC5SbnyZKmUVr6Vp6tD9sJM5agpxdkZP6tQnjxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FPkmEiaoiVeed2XvaxBw46oex1vXzRRnwVufygrQHNQE17cTJKddPaLNVXYADqJRG3EJp5y7XZMpsM1g3VBCNHY",
  "key1": "2yhLu7iiXJLh8KzFj6t2j1BX7LoTtCSMxDyjFveztwMTkAkGcxSSQSZah73ybA94z8SJ98aXEQEaTJEc7H5PeAUd",
  "key2": "56nxQAScrpVcYiuBigrp2p4TSa2SjmFFYtVgSKrvqxKFvMf3bdZUUnRsbhoxG35J6WmFh1v8MUxAe26PW15TPDdN",
  "key3": "55oG2JPD5eeeVV5NFU2bydMZVD9CUR13mUd3XR9VmdxdT37uEv8r1oH49GtiAYAA1pD5mZtYDJ5JPVgtGrjoSm4W",
  "key4": "4VL911rF7uE65n6R19eqeW8h3a3DN1NKTJzep4wi77kJMWvsi6szmownccotrGBsK27m1Bc2cAsYPf2DqK246rPR",
  "key5": "2DeGRqDWqiMsfGS4JfhViMpcckd2Xi3GVfhQq1aiHJNJGZDZixdJmb5uY8TVPXee3Se9e1F6o9Z8h85WUyH8FWPd",
  "key6": "33gCD5zeiKbVNyKYpUpNXr7Zan5LakqFW7HednVPEXfzDQPJWsBBJcu4DSRWNpVBdDByfSej5Nw3hG4UwC2pqx7B",
  "key7": "evnWf4Yfg3PWSmqBzYKS8aqQxYJaqodKk24VcVy4D1ECbNVuEF2hU13bZ3DucbzumH5e6opEQgBLiBYtWsCe5Un",
  "key8": "2nSrFvUWs7XzMPEQDfsFfv9LJecUZoMrnvKRKq2EBiqFhiwsiwz9NDgAj1sx5i5wMHaYSvSvxPX5G8HpHMFkeeQU",
  "key9": "4UShwc1vP8fct2inffgWiar6bSLvgS1TyunmCbJcnMqT3VqmVjT795LZJxZNnGqUpk6kf4AwsaH1R9u9pQd7GQvx",
  "key10": "4qotHdBasKoUnyGRjS6LQmpahNhVnDcLXb5px8cRRCGxmjaNqku5y6hfHHCnJWucQcTvNCM1krWLte6rDbkuN2tm",
  "key11": "JbyQEd8zKVTqqrpuRRK9ryb4K4Y6GoBoAazQ39YaaQQh9S7bV6VZD6BbB3W3BiohzmjkwUP3z1ofdEyWcn6bzeG",
  "key12": "5vV4Jhn7sMJBCKk4t2oXsFqyGyLqHErJQa1rNLKEt8VfUDnQ5gWSQPyQGGWFBBs8yo7oa2NwcWGEMV85hkM4cbz6",
  "key13": "5fCy3LSagwWFCjLnSEro4fzikpT6HK3JDgpWrQQtR6UdJ2u8xHFsyRqcKpBBawSm8QyghNZpJqvFMPiTeamjWwxA",
  "key14": "2ocThAS7jP1e1JSRW9bJvbLfunfwK2CR5NJLf3yhfhoWGpTaKAiuoMVcUNrz4vUFrG3rJZduUKYj7pMzDZznD6UM",
  "key15": "3nCGvfprAcETkiW4cFiukRtAeh3nL28K6Pc3T52oXL8MSEo1wpx8no4fKc9RKXEYSF1Vnp52jEFyN9wVGHTEJqoV",
  "key16": "5ZoL59b4g6oDtGiRnPNuSKgTKayumpUTVzjbUcMN1MWydpgQozYjaCyHXJ1VW9wXk1CSVCHpn4t7L8ZL9xwjRVDe",
  "key17": "s5V6kAM6EwALBjYqisBHUQW4zHkyUyYvcSy669mrZHSCffKeTALoT6h9k8BS6fTbg4xGswc1ndicbw4pW6vabeJ",
  "key18": "2AgYQdLNPC5JXA17dasgAv4nVS9bCkPDWeBYhiW39n8eZ6nQAwtmXi5VD8qrmYo5beuVZyQnV3f8h3TXhbuv29t5",
  "key19": "22ibwqPwJp4RbpDY5d5QnTRrLmi5qcupAifZ6ZotQ3P1ndEvVMHKNpthGhbusuBxa16TkgucYFDV6ieseQ8vkHx5",
  "key20": "3DG8tTaQFprfUUhJZMfVwDN1B1fMMPZFuApNcGi4Z5WuembFEh3Fv7n3BQHcf98tFZRsdzexkBpytqDr1KJcN3an",
  "key21": "3gTNwRPxFVW6Tw4wECntRNFNKSsoAW3eEdDVhFQYAQdqr96RP8YxZXB84aw8MQTPiUoTD4k4uRMi6arUF6uFoHpQ",
  "key22": "4rKXcso6R8PXcgbUGus7cMFnCnwN92BHFtaLDz3DfUEdkz8y5wjFsp72Qfb3hzU8zwpxQCPZaH2opq2vKe4QxKeq",
  "key23": "4kTDmg5qEMfybDvHDahvAMSgsk7cwsJ9uUMSNQ5CQoi3amzykgTBCjZXspqCeLZEDtGdygpsuHWoXbg1FGxusKDz",
  "key24": "XWu4HHjrxeWjwRRVEjw8ZKXqFQVtPfgkLfmopr8PtCMpuqLdz1j5ZD9Ziryxn7Zddowe2aHq8oSrY4YDq35yvwT",
  "key25": "2LDYHrgvVajjiH61TxqC5uJ4wgm4Y6UseVAwkTnu6CY9Kxg4Pqgyfu216DDbvUmHcb9xZP7ttQ6prgQ1om1mt7aJ",
  "key26": "5cgptTkSx7SiakUNSHQm1QrsByHmyz7JwqK5oXR63tr3H6VfWvFnif2GGznwqbsnwPSU1D9fu7XRuGznfq5Tet2y",
  "key27": "x44Pdfwn4uDpHRQXuQSgdijkkGVbh2xBoVLWdUcdHLp1aAK1hpgvkPm4S8sKNUD88iCEqc9hbX3wMjexu2ujqp1",
  "key28": "3ijZNYsha8KSAx8QUkaZJvtDkhZBgb484RQYS6vZ4cWCHXNMQioMc6kEEnSQD3U3rkUGU7FibgBqASPH2heaJhKS",
  "key29": "4SM8rJPvywRNxUcUWSFetDKqvvmmg5SXHdB31gNr8bnmKkp42ifsRxp7cQYZJ78ZkpLqsXtHaRZYAnv1HpTE25dk",
  "key30": "4n2daJJaFGEMX7n1s8qjWSZYXkRF6kUN2Cmffnu6S1WptVEVb4QXBeq3CS9oYWuN4VLhst6PQAgi149y18eS7nZ3"
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
