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
    "4VAwDvGbMmwYAZuMpJQrJkWtqMWbT2uwRvNC5hffaCTgQswde8EfKi13BZBCk5AZBimQRf8LNkNrM8WhpMTcE9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bqk8Lk9sxks5Zris6xtC1G4ExjdpCcbLYq3CncWdkPLZ6eEvMqQhtQm9TnwAVdDMre11gw49Nymqu2M1QWQp3Xa",
  "key1": "8mbKykbjeMbN9WNarhXcm3rpdx7VkRRx91A7PhUNQXQacXEnZoghexcQNksdqPQqqKNhyogdASbSyWE47Sg2q7n",
  "key2": "2wXBUTzBooSHHAVAZHvJy64khMXU2a2DzeLijbWCgc7Ei8nqpjiA7Ljfz9vnt93ax1TPho9GjZRMmjbYYHNefg33",
  "key3": "sQqNLf6XquSsPtosBVPRhc18eCXCmPGKT6UxojBHqiTxxrqN4dZmQtv4DFV3Mx9DUATouDxzNDd1vQoge2eSWWi",
  "key4": "44WPDt2uzJtLkQqiV1wC83q6nsiD2CcGAUF9jdSj2CzwMScsc4dwq6Z41j44EWjD12uvA6BVmLdrgFYdKf34fygB",
  "key5": "3KbNckUdYMCPWtrZHCk3QzQ813jmv3V254L1Z8p2i5vzuHUMpJHVRcHLBWGvmR88vbh9iwepPixDKc39Qhyh1Upy",
  "key6": "5tFvEe4AM6rMgtjW5CEsazGqATR1nfRD36Ja2AX3GZws85o3PyE6AeSCqcuPbNRoWjik97ypZv7PfqcNHjNstFfb",
  "key7": "4Fvo4PkLjrmyJEqV5jyw4eorJCiGx8HuWkB2KPmaHg2HyRSSkP4n2agSkMZEJrUS17BkyUVy1aMV1ja5wiePPXBz",
  "key8": "4NYsLGQJjefnFmFAUqeepjQSRcACKHoHo5Goda6Qceyqi1apf3654LCX6EgUYv16JsjGW4YQJxQZXRw9HECyHUBm",
  "key9": "5ZdrfXfsYxicys9J5o4zZzCJuGLPVxotA3LFSAnEdgiifAoK2iCx5vq52SJuvtGNNC3QvLsnQTWRoCJzZuUNikis",
  "key10": "3jTaAgwoCAoGTNybXZAhSsDM4iDfu428CGBamiM1VcFrVSXKPxDGdoK7wzH3Po9Dm8GmbrVsDuH3EgAHQeNBGvS3",
  "key11": "y47WZrYGjTaoNAvYM5cwH5QoNdZfSpFBD1yUyqCB8o8qXoSTW1E5Nauir8Cqc1xFujQ7KB4VWZ6zkq1NzjstF3q",
  "key12": "25f4UUozFeb93EPuqo8tvHrHajuLz4bzX3t1ufXeK32GGj3BJg8evs1b3LQLBW5uEoj5L15bv7JFGDC16WKRtNLH",
  "key13": "3T6j8aLvwPMZL1JKhFhBDdt9WKNdjeyHWrU8STDqzopZzoxcmNZ4bGsBz27o7RhuWtpEZNDH9Zph8NSoTRAe33EJ",
  "key14": "bk63KVJmNr2f6vkacd5Az177uszxAi87YPrHdNbdNxGrKrQeKc6zNiSgMadcsktt7VdseWUUzX9CKM6yUqJVjdb",
  "key15": "5qMq4ggCJF78Z6KDHycD3E5fS7KYbZZbZy5jvvW7tJHc1JKgWbA7jsjA8L8uESexyhBWvWLg8BGr6nk1SNoDT7vj",
  "key16": "2WNjgEUCYqBH9zsfZAhXL4i93Z4ZZzk6Ezk6YvWnq4649NfKrBxuvyrgh6PuGXBMcUbWqYX9SEhLFzvS9biTkeeG",
  "key17": "4vjikJrxbQrsFnYVan7c8A8F19bdP4dqbW3Faau6Kw6Wg6JCVXscbHAMnXYH3AtDfjt6cNUVgpegM1LS72i5i92E",
  "key18": "8h8NzBYiUrCTMZMraKPTF6SJ1bD6MBcc5DGb7Nf1t8ASNZ6f1RFuAFbzCpBNMR5QPkttgQZ9VxWw6drfk7PbBZT",
  "key19": "5pzbtCKrCiSoeSmeS6HBidmMNRk7ikDpLupPm2cDBZ1T2dpU48qmQgw2MiXpriEjD2Y6meBzRKnn3nNNTBxGb52J",
  "key20": "6HJhsEYjV76UUXE4HMiAPtTapfESo2DzijtnswArwdF3SUaoKsfpRAp9tVjKAzSA3AM6fgeA6araWYAWRmEMBht",
  "key21": "4Z5yaWzc9Usg7h4BwMvtp28PHZPsYi8uqzozEnVqH2oyzzS2GCUPrCLv2Wwmh6HprV4xd2pZUYmCphhHWq2mdtv6",
  "key22": "2pz1U9j7TnvqRvunL1YFoHxnH32apm8F9wqgHWbdJYSpKd75CsnDe8FwDq2urLQBq7Y1XMwcMRUL9shrUG7bsNyL",
  "key23": "2qu4V7U67ZBp3r841r8p9C2ygrEF5rQ8Fnfc296sMuky85niA9YegYifUEdDNbDtf415uhMcYLgEKajVSgKg5Vvk",
  "key24": "38x2xCHtD4ANRappEVkmNUS91UWacRu3dccpqDyGEMKV6jEa3NktLXtm4RLfN7Z3W4Wq5cjVrrs4zQFY1pdBfQZd",
  "key25": "aRZ1rth4vW9QDqyYNZXWtp3fMHDKbA6jF7mYsBh9xghxmmxGACQLn7aZ3QcdnApDLLFvnvH9wC4t2xQyHDvdAeH",
  "key26": "pv8vUWC3MBH1874Efk1kZ4o9XbY8169dp81DoeT1sjpqtaqpDJxMC4864jYMQXVpVSNwrkTnehJFGEJ54pthXiu",
  "key27": "39XoqfLgd7gfzhT5ypQ28aQ9TmStuLDTosnmx29VQVsqWkkJNd3phNjWEVufba4MGehaq5CcGJYZNR4vjxrgDzKz",
  "key28": "4tsuMB8KRLDAbnfRxbAki62wqyYFe3SHWLddJBFDf5gZMcqT8c1f2r2XdAUX53AXFDk1MMRNWDFFGk68DATiUFRU",
  "key29": "4z7ufNTC5eAqJQ7nFGQuykQ1UULTA21p17h3izpZy45KVHnpWgauRDQALZrFSEdxKP176v4DvvciqXAotc9PgouF",
  "key30": "2nzkZQUExXWjTDkfHrcQp65p7RCjHKgGUak9KVVaEjpRL1PU5p3PuYtjgqL2TLDcH9Eqv1EZTL2EQpVRA3MAZXCZ",
  "key31": "315dyViKSMwMpGMXbNbUxRCqQtta9LU1515jkvFfrkx4jN857jTcfrySQDNzA69weru4QZptX761PxUUyKSZzYHz",
  "key32": "2Kg3n5rv8B4nECHtcMFZNwnN8vsFaj8QzTzWXfGpFwBmrJFWK1VzJA9mygZAFDf4KaTwrK5cS8hQzTAJ1RFHnwQA",
  "key33": "3VcXF47xUTBxeE4uoZ5jALSK6HrWXoipcJMbjwhb8HctuYxz4BBpmzDD1drfojRbchcEf5vx4nCChzYFvEow64g2",
  "key34": "5HXvQMwEJRoN4NrezH418FE3WzReW12dX5V6WkHwKmrYxcqRGSeLpz7A9bxGsJhJcgtdnohdnd9D5WV73GUFkDLt",
  "key35": "5pxanatnPP1aKT9ga7cSHR4prBbpRdZMnCdqPEJWEzvB9USAT9ZjbbTCw9zJQiGzXVNh1QFzATxKNotARV9YgLc",
  "key36": "yGwUGP7kvp53qeNGgRfykdwM7mMT5d2o3rJ7cezyfJrAPjXicvNZVCvLh9ZPEFf4zmGu1jctYXfpBQtTxLvCNsx"
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
