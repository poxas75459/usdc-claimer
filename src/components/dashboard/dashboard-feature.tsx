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
    "2rbLz5rvifJcCCiYg4JM1oM2UqYUT7oj5XG1tBGzddLH5spPjZJrHToti2HXxoQw2NgdWjfuS7kT6vasGPJX1mpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wuqzJHWqXRjTHSYDnFLBszwechJ5X8s9G9mwrPxkNf1rwWSUNkpeVzwp1J1XB3p2vQT7XPgzqsL4V3HGcjrdzq",
  "key1": "6NC3fFERhR8GK9xbGkxRKLBcSeVq8eKL9hhDy2ZhXAjV714fgSvv8CVC9HLsHjbfTE6hMjs9Ka2c1Chpk37sKgP",
  "key2": "swfuxANdmcjvkYEK1gjGcpzkNvfmdbHhETLdeeigeiuZRtKHUnJYfWAAvzDnzFTawr3npKy5Zigf7px55JZY7o1",
  "key3": "2YGAVkq8NJTrk52ysdAc2GfvYasQzPUAXPQFJFnqFj4ykyEX9cyEdLM8GGQVLCbsPDdDSBFwjffsfoxQUaXMVRhP",
  "key4": "55nrgzHfz3BWxtsgKYNUfH2XmRk5Ukwub9coi482bw7YVtJde76vEacRh96WJuEKxm4qq1k9tMTpqAT9Ni3yYxkB",
  "key5": "317T92Qpbty4RWh9Dh1nB4VZAdKRVDNczDpMaFCvBDcXQ1ijtYW6RTF83bSJ6eLBrbnarPXZbG2sik35BTKMNFzY",
  "key6": "5vndcGrvB9ZeEmPyCjZrWgQ1hUu4rFheULpw99bejQLaqmfkh4gkCtknG64rzSJ6GJJVDQACS9oSpY4tYEC7CbAB",
  "key7": "4qchBeqMDXvcV63hY8b7Rgfwh8J13WP1t6XVBqNsNqXQXMNRbe7rwdpp3SxrfP3hbgvmJmJUSzaNo3cqyQLQXBeU",
  "key8": "5v1fzMfKDHa7njopeEBbZ8TnM7Vb2FCeDvxadFtTB7LFQz9uAAuhDwSBmBhMrzSBnFsEYaUmt4qQh8gTi9r5AVWf",
  "key9": "5M4zQuuX8Hyk2FxcqHtAgMUHw5mMLSfUCfrD5kKzh1rq254sban17h7UnHCs9ASJJVjMpkZ8CwzVqxRTP19zuqiX",
  "key10": "5ERYjWTJP2bAYy8KC57LabSXo2yNx14e9U4dRMo1427cQhr6G6dMc6zwFrrJPmGTPTGcfttW1VwiQrLvGbUMNJZd",
  "key11": "28EDB5fkkqZyQZ3RBVoyGKkYWQM3nrwxynuwzVso4qdBvtQBcSoLc5cPEDJyW4xHyMidHeUiX92oD8UsciyZCDTi",
  "key12": "41BqQ58XX8A3hSaNi2E7mwxki6jRC58eroynMa5FUGM9G52pRWapCXAgAMXWjw8YqT6zDi7sAz3kAtwWyZoBauRm",
  "key13": "29S1JfvYXvNHxcSbeaYekbtE8YMYr8xDNug5VoqmUWjX2bRbbvJ3SnPBAtvviZwx7T6ThmEhtyTmjgGrFsXUMi39",
  "key14": "4BpjmTS9uBNxVX8Fr15nf7XbqTCmGsNXn35NRNrNf7hAQ2gjSRNPPBoSepfGrp9abFtFWtwWCgHhodX9RSVvPX1N",
  "key15": "5gvSgji1s3ZaZdhvP2judmVLM9rjqL5ptb5MafjjZJfaskw8zvDJ45XKu16esfZXPkrN3QiFUZutjMHHYuNygv5m",
  "key16": "5x41BMatwnnN3DV9qiTtQ4J9S6uCH5JrGAz5MyDKgHyEQXVwFSUhMtFh88VqLCrLoNKg5rSCT1tSAMZJbZmHMRY7",
  "key17": "5ZUGfmAxGgpX5wn69wChjkZeFRsbXiyG3FncinFjcV5mn5ZtGWtbZ4Ym1tFBUxdjSPvhdwZ34WojeXxE4CFhUowL",
  "key18": "2WBsFj3LWUWuXYjuJzx6Uqs8ugJD6iaJSc5LQ5ob9joMCHJRH8wzfsag9agkk1F8bfRYkVABoHMrZy1cm7wTjrAw",
  "key19": "47BmpSS7KecYScdJrNWgjzsCYBdztqE2vitaufzAtQSvvEePq4LUTPrWt467B67RsnjfgMb81CeQUcaAi9RzCZmi",
  "key20": "3Wi5rNiumQkqBhHeE22iWfHcqKavPmTYu5qFpW8eWpNi8aCV2Q1a1KGDDKgSD2S4ohpqySQYEgJ9BgSBPZx59CUX",
  "key21": "3aoRRPFgk55o4pxvb5x31M3tCeyX8i8HdE4aj6tE5XECSvLHcAyMWB1k3SM6jxjfkzduyabe4oxhAnHFLnhE4eyR",
  "key22": "3Aam2ur3t4GWNvXEfK3T74t6dMQAe7FWMFhgKzEneL7fxCaf9bB7whiqhvYUAqsVLqAsDeaRA2hvd3tFZWk1NT7c",
  "key23": "3SUgBnSB1jmvi8HPXCa1fcLCW84qYNeSjinJHHCcyoPXT3kssiNg2Edz9o77VK7xCFegPSF4biDi9mvnGChZtRru",
  "key24": "f13fVA79XDTrvmq3Gaz2toGZJSHAofC9UuifjAzXP6AEiD5zxnhSmqaqj4sx5eGGSYFbRxzQVbCBmMNTB1NWA84",
  "key25": "39JAxcBtxvUZ5bfM7cwD5rCZALAWVW799HKLcvSawusCexWHo2GMXpV2WJekRQYy62Z178BcRbdmGHT1yyxMGs4M",
  "key26": "5ga4fGvGSRBDZACHafXFwKAbP2tLDAaMPji9SGBb9dUfrucpbYiiAEMTmzhrvzpi59qP5B1n8SHN5CnwVWgEsGxA",
  "key27": "vr7t6b96MLywjbTc2dPRbMyoLN8dkSxS5nAVPdGdz9ocJ9iuyaCoLnSW7EAPxAZqgkLc5AdQdWyiJLHBYW859HV",
  "key28": "31LnQt14iAKBKgLzvHpPcTqCeifzWH2N7cfNXawzANFuAcFeKCAsZtAy9b6LsfczNUgKUHbjyfCXDxpQEmx6x2ne",
  "key29": "53xXyJK6Gg5SzwDqVrRZhXQ55qghMTWPGfrZC5TW9pzEDVYpWty1Cs3xgXwmJZyXxCHdPWSRR9s2kL2iCsJ8p16D",
  "key30": "2CkLzJPxY2wqqXHNwwyNGdiN3UMX4GY7CqXegH3Z6o5pQy8X1HLFoWcT83ZVftB3YLJVz7vcFmNAUgwkg9jje9V3",
  "key31": "5io11rFaTVZrHP9Ju1yp84rMz6GHiQjfz5ZGU9MJWV21uXoPuWH98BuyGtH8bL9LVX1cEku3chiqNF5DAiTePdsW",
  "key32": "56CULkz2QuTTRWJDSp1R193FqotJmaUzKZeXpjjhmSNU4oAVvk1xAc8yU3FzccAddHRvwvNDL4KGfNFYA5axTJU5",
  "key33": "3c1pEFWsW3JYKRcAnthqUgZqauiaBs4yN9gyCKek5P1gmWprW1ybUz4G51zUG9DvBuXGbTGp5u9tbwtctp5fY2fs",
  "key34": "4BSuzCkCb5t7Ted26FkN5iqqG2ry1HsNtTeCXD85NDYAwvBEYQgHQXtqiEcccfEkk5Ht5zn5vVkZde2nueUA5rVf"
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
