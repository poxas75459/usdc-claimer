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
    "2ckbz8gobBvGcusNQztZYWxAHs55t5JLxGqZf6xxUSYbBJKntQfkmPi5HXFfh3zKSR7dQ5nH27eEs6fQFZFVn3Ky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EgrnhneGv5DoSAwCnopXtukqjCnCi5ruUatiMrFHrEa2QGDUM9CqEhEdRN6tJmidXuqEVRNyrRhkFSg3vG7BZj8",
  "key1": "j9mkcDswQnsmss39KNMdtfpdo7zt1i5z87vcwGvYmrmQNMZV1S3aqeqp8iCxTTu9y3jVb8ttpD9dRFuQh5m19wo",
  "key2": "SLBycULqPh97qDYyUHqDwHJJagRhVBgMiYPqfyxDT1MzkJvgz92h544jThh5bXgxYaFS4MLvXVubLop6x2LVRwR",
  "key3": "VasDE783t8aFpifcCJgs2KMX9yggFYi85wVAyd5zC6aQ5AxzkzreTySP2REQttyHVaRBUDcJ1tnKmS5VAJwofod",
  "key4": "2wsX9FcZpeDYExTAPBHvkzPuBPXV6WNya9eWVH3CJ9GUMrB8GiGxFezQpabF7LiEpvUumFUVRQzKsqNsPsujug1h",
  "key5": "5mccPRQcAuFrzmZCCFraKb1R5iUVnfZc5ZrKrkJ6meGcsPkaDcioTEu7kFXq7KS2ruaSRRgsc2rD39xVHo7SWRgb",
  "key6": "5T22WBk2Zs2MimedYUKJGqnpKX3cXNmf8kTDHPDVXacwGS83k9gZ65sxbcDN25r9Df1V9zoiSRBHpjADeUvxJgzh",
  "key7": "5G2RMNyZwNUjcMToqDmB8tuVwnfSios7Y4rMtmgBDsn3MLEr2Gqc4oTDMGpZGVruss5kDrvc3r8QLapQpQFa9HUf",
  "key8": "f2EgiZJXuaJT2vm3dwimH6o2mmgjhsufjnYFXs8JgrgVY6qfLH4dwcZtwRXoAeRg9EuADJq3YvhdKSsYhTqEYqr",
  "key9": "2Skf6pGiuBd2qoRWn7aqo2NFtL7hXDWbs9wRBgwigaZgoNH9xRiFEG1QDCF2Jt7WrE8wJHxDXrtq9cada6Zz9GNC",
  "key10": "4shNMrps23uuGNzY3HV6Aa32jLCXgrPwqEgBnKGXVPEofWRsBA8FTcub9CgxB5gSs21GiUaypLA9UiyPVKMfxsmV",
  "key11": "54BWchAizZyHbaQEqeHVXFWPficrxh3icXBeu6D3dyffbpnEe8A8YvWGdHESn6xCwV74YBRrKDM2cB4wsk7tUbik",
  "key12": "4Fh4F1J4UA646CteL9AiNiegZ8RWCeNWzPaWw9fqya3cLMXBVV53nu5yydaRN2xGwki2f1RmG71a77APo5FWoZKN",
  "key13": "5xsfjV4bA45bX6FsJCcx7q53Bne8p9zQEnQrtU3ohTp5ZLk1joe8KsATXmmbXr8CY4txKTYLe5HGhd8UFiJzwthE",
  "key14": "5VRkfcYFeM6d7AL9jwHW5XoNd9u2sjGdjWR85V27WHiuGneCBssZ1bzre9Y6HCQC1Hnhdy4Yk1MbEHqxBVp4a67w",
  "key15": "2ud4mhBsYAc45Se5do8a84kRpKYp9dU2bn2688cxSeTTZqT3BqkVcFDv5aMLSzFePFWYZYv6Ds2qrfaBiZv9HDAP",
  "key16": "3gT3CahvY5qE3MVfZ1QTcyssAmprR3PHNB1WJYcJxezJ93U5wS5Jh82qRaD8tBRzueEkAJrTgyfqVNon9Hua9aTR",
  "key17": "3JsgHV3MgotTBbsn6czCfcfmgfGdH62qtoXudVpSdyFQok5nbCAUQFRL9W6kGQDkkw5tqt3Lf7Pz3YAmi3WxeXkT",
  "key18": "3ZipWoytHERsaFV8F1jrZs9o41vKTGbd9ZgGf12sWkpSTTf55XirjYLUSYv6tobwjem3R4DeKGz5ARZ4ZxrBdCyP",
  "key19": "67YuwdRBrnk6PAScKDCdd3KVtbwnwQq7eeJGJfWW6XnwdbREKXmR6pXcS84T2NMXzDFTfkeBjCyFm7h96SSpGcAF",
  "key20": "3KWHRWZkp7NBu48tkakqpUUcLKQCHqT9k57xVz3yo4kgZ73jo69fHgs2NAZK3cQSGNgtdtLSJUHNefjDF4HNbcw",
  "key21": "4bUtRbrSCVbVrsawNNQ35vw32xr8TjeoMwQ2FgVf3zQzVV3FT2ZyoAY8F1rJwEeAipkENR36BcsBirDRfmq3kQ9F",
  "key22": "2NpqZkiYVJugNTJGS81Libj91PqP9k2CeZBLKwtDykZHBZCEF318EWa2CNuTh4zjCghJbvutxhn9dhZhcsXNcApr",
  "key23": "5wNnnn5unqtbgZX29rEFPFrgNejgGc5sAMwjkeeRALYLyVKQ2R1Ny6PBVqRSqRPgx92Y4q2mXXVeveCLAPbRaiLA",
  "key24": "5HpHK7Lm3mPMK946WHJApjmvTbRw3MTE9KqruTA15sSqFu6V336tLGG829nFEgtYbiP4FXFS7nGLX7GKka8Rzgq2",
  "key25": "5Shs4rVsM4yE8g5AmnTz7mUivvtQhrdZAjvXHB9qLuhv1GyUVFm9kaGSK6UNsPcsteCKdyjNXBd7ixEWmFVGe3Tv",
  "key26": "2cnwu8q1h3oj8vjtq5EyzyFstDqiBBNfQbYQfV8Uv65QpsibmoGGcSBRy4mcT5XmVpHjiNSp8bcX8uDYpzZ3erqy",
  "key27": "46DkiNUFmbquQa9SCceXZDq61PUbymcSAywPNWMcq3paVPxZzfFv2fdBUNd1PeQdV73tvCCEjdFsf9k7gDcL2TKH",
  "key28": "52QXGC3a7NHFvS5AuLMHbQDgHpiRnz3QwCtFzopt3atXE6o4u2CrpbwFzNYEBveByDSi2KaaK2XvLPjwgKJeGZMt",
  "key29": "4hiZQnX5hqJjt3vhesGUP2MwDzJA393g7GWMTqzyDwcMPamQbrj5BqR2tDhVgd44Q4fVfnV5tMDAukX3oHHsbFbf",
  "key30": "5mCTR8L6N6MrEUkzMUxqghpYgmMpVEGsFFjd4iKA8dy3Cd8ucuKu4sB7wRUmtWyoUoAGqt1fht3rP6ZXrSeK4fJ2",
  "key31": "R739b78eKzXLJ9RLMeYUCScPdJARxR9wvDqm9uWnvf5vFbeqFP9PgsN6JMQ45EAQ1NqtLBr18SNtybt5XT9FoYM",
  "key32": "3FSjFXEHg3at3UkYsWtbGCxeAjKi3vJGmNMw7rNw7iFzsucxXYo1C7rH6wbEWppVqM3g5S718w1BMFabpj4VeLRH",
  "key33": "X87frvfKBwiUGqHVcWLbCojkoKEDmJNCfSKyYaDtNtrZBo5ZbdhPeK12c72HeufuLvDhR8KdqGSwPrhSRYjBqw6",
  "key34": "2XyK5geRFpwVhubZpymHUC7bCn6n1vpunAx8uoQ5rWGpCx3ccvn3AADzCvXoVHVre817G1TDymvmfQcd9YNG3B3Y",
  "key35": "3MKbVbSThoz918chRHNp435TajBc2zvKsNN7xExFXTeUiNyyp8uA4LAuB2LaKDZ5df2EKY6wt6mdRFmsheHm7ZBZ",
  "key36": "EEAC6PSevhYpSS3KpAMU3Sv714bPup769yRDYG7Dgp7XedfRCJdgnXwLpeXrYuNeE9eKUuMmv9TT38rQVoAD9Fm",
  "key37": "4TBHzYyGANFyrCPa1jydnrrLLHa1MmL6QMin28bfsLpDUpAjqP4K2oMyGYU2xzbNDXnGaJ4Rea1mGA5CbBVi9dCf"
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
