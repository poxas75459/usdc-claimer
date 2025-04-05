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
    "4PgkB4ymJznCKnekVmBDe4iTHhbKb8a9L2cM7X7QLQSLYL2T2ZugPzzquSuhMck7PJ3ywJSM4jssL5xAFAb97BmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dnG7o6gAFx9Z5HGyxN1T8bGjuXaf5T8yJPCwHazLzuPGnqTePciUaoVcvAJsWMYr8j8oQcJxdLBvMnqCTunh4aH",
  "key1": "4T5UoCPCH4edp7A9gcq2Uo2TfDJ1Wuku9qMNk9xqMyBb1tCSNafSokC5zYnwoKk2uE9LnWgMJuMPYhn52fURhHk5",
  "key2": "5qQ3wsbAZPnb5qcw9ELotvrVzN7BAT65uzQh6yobJeSkrX2o7jnTLp4pG4gvsW48pvLznrCTuyq1q95WdwA7Y56Z",
  "key3": "2SjrWj4bUXqmvzG7aSkNvrPpYjRQMi5yi294Ehi6gSjA1xVnxnMAByUWXi7fLtGyh1sZHFuttFNMCnbDcuVLVWSh",
  "key4": "5GDFpVyWC5D1NKcoxsbckGwku2H5oYRQ71qTGCPD83EqKK236i6bfNN7JRsWEy5RTganwMmW1yV8r29jdZ1ijBPZ",
  "key5": "2TXC1t3hxEXXv4KaYrJCYfySGW1zfUrWwYyMVcfVDNPtodY6hoXgDF64pXNYSSsbLBD142AbUF9pJpxiekJDuRaB",
  "key6": "4HquTZDda7jJ7T3KvAohW8DWnMJxXQcTUYk6Ca5f7RPoPsYMVSoAkWo6UBNY6pct4s7tti4ffWUHDAaYh1sb5zGj",
  "key7": "4SMPDK428pni6hCRGsSapD3zMaksPC7Pgn9P2BTrdaxaVGWE6tzGtqBAAQfwyM77eoau6SkwJwYRriD8Z1Cwsh73",
  "key8": "5KH47xrM4MMcNc1gZjZHAs2uux2Lri527p4Dvg5Ro6iTcCRFPUU5h6gnnsfrzs8uroLcDHGRtU1ip9Jb1hByduAh",
  "key9": "kPMhcTtUBSHAqqsz1pT8rtEMmHPmFjiQo3C9xRYE2debe4TaQqVzRXKNfmnzeogxrWNRQFRmjDsRHNeLJkXwDP7",
  "key10": "3WTbGSsoNA2CE6fFADwpimAwQpuZtyzreDqzDwws34xUpXfcnygehnGW4V31jtE1yXdQwVrySBjU7sccegyYdCdZ",
  "key11": "34xrp8VgprfSm4DoZduD1T1LDBALVgXRSuXe8gbZEx4CkT9QmPp1YeKRU1XHsfWNHCfooLcH5uiirQyzdhiD67eF",
  "key12": "5gNJk8vUXkVgPW1b9tBAFYSdBbLWo7DzDext1qDiwNPkPQhwEbomP9UMuHcPwPDZ4QZWPp9D5WysdNUrePpTbP2E",
  "key13": "54o6NVLBostmaYw5TdB8gTuQ6RLsZDHXXAXuA9kANu9AP67MeduHT8nzxy1HQ1cirXMgyXnjv7cJjN1xvzXnWjUk",
  "key14": "2eX2sYVT5Cj3rW8sawz72um7FKtqtPb34jSmf6uUob3gJVSZtMbZu9RrRPj4C6JmH4j1b7VWju7vtvEheYzk2P9e",
  "key15": "HAeuKLYve196Sms8sQwxF1K46Emftmrcuhkp5M5J235oYXz2eCgJeGwQEo7SnFHh6dApgVjsFytj4uHVPKbkEfv",
  "key16": "67DntoRq4aN4eZaAxybas8V1MGt7JoCQWXhL8hWyJ1mNuPEaFmzM9y4JA691VPRmdDAV9ynTiaK4LVRq4rbEhdEK",
  "key17": "4S51Njd3c4DKmJVKXTGqWzeqJfQY3G7Z24fi1KmfX7nsdeDK6DbNDEawXrD3of6bmMe6NT2zAaEgpjWjptwNvyLJ",
  "key18": "3R8eATGj5S68rkUNfQLRu6M6YUYtWefKtUEnmSHrY5kXuDvUtCUkkdiyMRFAeZhaH4RYgfJDoJB9om7RNrAzCXsi",
  "key19": "em91UQ2cCwt92sT7nFWskFjW8CUTgAuU4PLZ7HZSS95BRinZvHyCB7LxwqJXp3CQ7mh1WcSUi3wG43WEsNmEx1y",
  "key20": "5dpnfASoc8QvFfGEqRtTsbJBojgPf8KeBEDcVtZur1NzKCPN8g5NQoUUgkF7DeQFNRsDPAZehhcEdnirq5mX57yr",
  "key21": "4ifMYjdgXfeoiseMucTmfC8VdEgkYe2z7B88kanrCvnY8MyvWHSWus6tkNZ4KUfcibzrciaFvqNXc8cupXvZVYZo",
  "key22": "4CjeReuqCbc4eeu5asawcqb4V3mfYq7ZprC26LLGKyHgmyA9VuFHycjjRapYAn9RTMmgzJ1SnC3vgSM4UMmepBsj",
  "key23": "2mN9ayxfiFw5fkqm94uwJTLTtX4YLKJ4CAWp6RKbVEYTLRbKf5iKPyWNHDSCAdz7LJM13sdBYiPWAQz9vdJPdjGC",
  "key24": "4anjFizx2Tn1GsCsVWzxgKgXot8kn4kLiEyV2QUAQgKkhbHyaNpRXfo78JsQA5Xcwn6RrzLcrLHxwGQmJYBLgDQC",
  "key25": "4TkLhFeUXntvVBaL5XpSAUZoGoghQQYnW7e7WRynrzQRkQf268vgjMc5aQqS4kjF9ikzdZ9bsuwPtwMULftKDWxa",
  "key26": "5vVB5A8aZP9QUeP5NdUadbT4myF26xWGtkxE7nFYsMgWRzDVcfVcDsVJxgH1adY9JAbqGQ9JdUFpDnEKGo4FmmAw",
  "key27": "zK8KFEvcWejjUNQ7CnQoVTHvzPKYAsh1EVKtBvth2M6Xo273uHBSayyzdJhfPCfg1WufQVxtzAH1fanX1mojams",
  "key28": "2BqPQGe8TjsDDCKitnQsY5QpNtmABkioKTGb342uppsPfxdYe9kh112BSsRQoRH6dtVzjwwkWTgDqnTmxbLg1ymJ",
  "key29": "5MJQEyQ7Vapt8eaqTVM4e9TYRtPAYAChxT7jeLvV7hG7kUTvNrG1HYApnKrxN6LGG2AjW9Wpn75Vjt9gbZtwePVh",
  "key30": "2oFPaveSfLJSRi4kTKPRkeFFtsVDPcUiFLyqKz1PDpjHbqEtpHFEVNenQ1ATnQGKnj6hnPqUySioVi4TnSGcTGXb",
  "key31": "2LgRLxtJ6QFifpjpLDACQAs2J42NcZYGuhKA7U36Zz1d7GJfEbvBgmNxY7VcPrwGuX7zNNaTeb8SLJ27vUhJK56U",
  "key32": "2TtQdTH97UUanvVgYMevsfwqh4xo34w54vYTMZ5urdksVjio7C6BThGv3H5WKmzxLhAjTjy7fZ4aZ2uek3JuGP9B",
  "key33": "2j9TAfPZT3uGwAQpeP2x6ekTPPjHe1UeuSoasLKBDaRsZa6eSrNrKycDWqpxk3Dbcktkc59xqVgTNfmdDJEaLipK",
  "key34": "26u4eWRUzx6ckNRwTdogkPmemwFRnjraAybR8AAqZc7B9E25UYRqq6jXpQaPgcapaj2iq1XRhrTKDC5z5Z4ctkKJ",
  "key35": "3nEwLf22wwqq5uGk1Ft8V7VnPTddpsdU8uDWV6QtvJMa4QPkAXktJWXo6ZF83eMAKkCUutPock51A6NDsV4xJXJe",
  "key36": "3eUqnZADTs3Asn4jNwmtQMARDrbqsLgxRpDHdwUHnwYXGLgc2SqRzPDksfFSjWxxJexkqnc2rBXGdFB6A6RCbHhW",
  "key37": "5yFoHbApi6wHV7i2ev1328aGiXksBKvMyegzbRWsZJzCHWXadFA3UMmhWr5yerJZtKadoAfRWqSVGy7UE6jxa7ov"
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
