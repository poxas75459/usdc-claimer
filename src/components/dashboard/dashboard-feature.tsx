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
    "3ve8UFdYZfoSS2GXXEpQaFDoUx34cyKzYKt8W7323UDgevDypv4LybmhgdNEPKpotefJCRxLk4aWxS9ibcMUaBo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35H1oAWD669wLCjgoexWURKjzQRvhYq5eaoQmaXuYPMDoSH6EFCy9uoWz16AhXHDdgiLR4qsEBc9WpSDd9jU8Wtr",
  "key1": "K5KqrQrLMs2qYTr55Xjvkj5vJyNS2o228hbH2kBWPtxR115U7ybTrfmpDDfUNLWSByUQ2F6gKeyjLdsUyBD3BAv",
  "key2": "5yuJpQBRMGPaPRw6SmNX52BnGZqsxt1dfuqz3gTeHeN5rxhrVAAugWoeeLsLqAvCFxBRyzzrkAjbzKK6UKaodFyx",
  "key3": "34yheDhLbvSjzDqL3xUD94hgnEU8Ws2p6Na8qMdYGGrfCFWSUfWbskVEJ1QUZ3mrye8ihywBDhT8HAt2YS79LtaD",
  "key4": "4kH9u2HSzwuHKMWsW3m1UdAk5CyW89QhohGCKnyJF8BaG2LXoma8uBBKCpmF37ZNnJtJ8NBY1quZg9pkg6qUzvRW",
  "key5": "arp5sAjpkA2es8L1p4n8GWZtyvu1paDWYX6bBjMJtjQaNewP5a5TgF7VCgeL9TM5CJ5xEf7X613Faw4MNF4XEM2",
  "key6": "2DsFpdcqBAwN7PktsgutVDNtUyvfTuk4FkqTKjeeb5sDi8ChinkRzPeNwq934nquKQKiaD2ExtrDSjiKVwVnLzbg",
  "key7": "2ZzBTzMKL5qxqojBwbuSNN37iyhEpA7zGS1L8YsnR4Hw6iDYjUP2cUw16i69YWhfX6KHvJMBphoBDxXEKyGDNkoY",
  "key8": "emEXBbR9BzmJWDP4gkjWtusnuWBzkwQjjdryLYhxMoT84vewRiTbKQEePvbpWz43e8fXPLtMHU819jTTnT9vC9G",
  "key9": "5NKU2nXZ71DC7EaqJAk52cNupBjtYmLGo63YYnSBqKeATP9UgXm4rQceMshJ9NG84BufAuD4JhEhMPHT69CATjym",
  "key10": "2MtcqjEVpj5MnCEay5WVmrcJJjc4oqcbkL3MtmVNuiWeDmNwq32fThEhpwGuZR48zaJwh7je5s1iZMpRdBr2bgRN",
  "key11": "4fFqn1QYmowmgvrA7hFSmVA8rSV4aac8HaqL8SuM5nbTVLsvRsSsCKUHcFSEMGU6rP4Q1vGFCzJC6SE7FwdDK6A5",
  "key12": "UKR8rYLG6iyZJUcY7MA91TgANWV8Z9XXCiyoKRWp2WjDECi7xSF1NDawRc5tcvkuKEFzcgqgaxD8WkHsojMUNtf",
  "key13": "31rwW9JLeAALxv3oFMB37UTPKeFtM8zAoXZ4m9wzPemx5zBtB7P7vELyPG7u4qPTvddcbgRUJFsq2bCzwVvbxuNM",
  "key14": "5mDfNxtzMBgWiZp6FQknq51BwhdQC4x4qqupacvBKfFgo9NdcMnR7gwGKd459eHAAQ3UqVpXwbhX2gRkvk5PQXQv",
  "key15": "4qKaStGd4BB2E4H8dNhXYpULj2zbNbb6D6gnnH36XhfTNaAbRtkrjAAoZeaQdVYzTh85G9Yw4EzrpjrrexFxv6rX",
  "key16": "4rgPTeyhbhxhFJWQCDeSjZDpNW61zTDKhnQHzFAkkeEiCV628cinqX6cc7jAcxpFsMyxbmzwzgneBEXhxMGDtnRH",
  "key17": "3FUp2TUNWCDN4tMdS96VBmf2HnpoXZDXBw4Cgk6q7FDMNKpbkxf2YKobHopeCCa8FpX9MbtCV79btiDmT7hqksTm",
  "key18": "3fmcno1Y73hvXwX9gxagqadHwNRn62U9SPD2pNgAqikBATWeT2UzdaLCT6ua48AR5CvLJM1RpJqqJPMb5KdBcmNk",
  "key19": "55v9yH46ZUwFtxia55yX5uqytbjWxu5V4pvVgvwn2ncb2VufoRt4yEF5Rd9opeAP54RNhy7SMuvNXDj1LDG2i8Cm",
  "key20": "4RYwdq2dfLBPF4q8gso6BcRfJ6Ksjzi9J3qLXzdYdhxcwpsxq21vKa1bVQ4gJo24JaSAdbpv5q38vSLkU6VmLzky",
  "key21": "3HYJxEgDmtm7wLLm7tvYH2uAHapH4mm8p4A9KSJa6kDauuejAuZ8GXWg1dSDkgevVCm6G6FTNDvrK9UwgNKyYBBx",
  "key22": "59MAfukoFbgkAdaEAbuizLqt6D1QBhnRwYJptCEZqznU4giCZSDx48LHm66bPvxX9e6qZ3SkJU99gAKUfPwzGYdv",
  "key23": "2DW1foQTQ3BSjZPMU7u24Ar6pp9T5xDNUdzJ5a9mBAFyCLdr78FKptsjPkj84uifrZa1avEuMuKkKA1Sx5eRp2pG",
  "key24": "3383y8AThshwtYUjw8XsoWee5yhCzQBLFyuvYCUoYcAZjVQnEW9NR1FVzZZ4PwqMTo7oNgU2arDsmWXJfpaqWzJ2",
  "key25": "4iVaZoqbD9UGtfPT9TGEXBazsYiD8HHct4CWwdhDKuvmTZvaGKbB59QHZzNdNQqch3cnX4WVq9UuuhYBdB12RnVd",
  "key26": "2YhUAuoCeYBKUqQFhFPYiFuHZvrZHgMdkDTiKpHwaL52KUSv4F72DPeLh5k1LdW8gAqv23WrNJCQhV2fUZY6rTU9",
  "key27": "GyKnnBEQfa9yqR84j9ecQAZNNhyFkRk11ZpBavW8mqX5YGyUg2XEef3rXjm3tJ4DPXisTCftt531Lnf4RFQs5SV",
  "key28": "2uamDPk2XSnb7ALiMV4PQ5hQhziWA2H8GiRd8X6UcAh9ASurHCBTAJL2bSXcjMZEG8zgcpPmou2ebTcLfFjp1Coj",
  "key29": "24sXfkGyJB8EF3UyE3b9crhiL6uaivYgTxYkETgh18TD8asodv7SnTvaRuBgiqp8iMLivahyH9uP4U7znC4icHth",
  "key30": "3weeJuvq6XcuA7zQFF8KgavoW6geQ7Q7Rs3CpJp5R2Q3gYy28gyPhoVAg8GDhQZkj9GKe8aBY66KEojR79EGtVVJ",
  "key31": "4DHrgLWZsq9XWWPUnUpjFVqYoQZPjd19LdFXFRCA6pp6gKMwCZimen1S8HUnfidiwEV7JENWRrNcxJaQNFzpWozY",
  "key32": "4ecDkx4SnQ1RZ2BdRYmXV9NLBvZm9CkiLYoW9m4qsqGaAAnhmrvbBFzZq2kwVPTRFcijGf3FWdrR3SATcupARqSr",
  "key33": "5skvehinGTh4Wp3ipHZ686FFGYbkov2GssCyEMNLNdXUv7Me4AfuirNo2AJJoVDURFWe31B2ikd7HLUfujSgStGR",
  "key34": "imzZ6cxvWGFi8EUxyfkguibgsVsedgxuDo3RMfsgMfV34vZ3R9jSLFt5NGRsaFwekqXrGhS4Yw1fHa7CrMNBWxt",
  "key35": "59gbz8yAYmWFkvm7fB3cKxATF95vhSVvLWTHueEm6hdDoJXLuHD4VtmyojbRAKrTgNbwGTHErewE6PXdFembYPS4"
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
