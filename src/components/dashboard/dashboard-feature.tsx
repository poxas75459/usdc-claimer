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
    "62smWuSvjf9bQ9g6T6z5hq63jYf1szudFFWo9hUZktG4zpEJVZT2bUkYtE5B7CaC35Uk5abD7amW5fsAg6qqWgw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uMtGj4FDRZYFoDiDJLE6G5kTVPwTbYeGrUqR59m5rGwB5brMrq6bVJUGfs9ypwM7zQq7wF72mTeqH6SrawwR1ZM",
  "key1": "2oFj34dRvBqXAHLuU9k7YHUcfkmHxxCi9jHZFLK4Yrq9AnXwEaookpvfiT8FX2vChLM6NsPZkQWZY1WT1q2LJ4fW",
  "key2": "4w9borv3GPmXxovPJdxz3yoBkdz3Qw8Vr4WdzFy1vKsEneibAd4SdnCUjNfd4Hard1cTTd8ECUKPwUVXP14u9gGQ",
  "key3": "6dx9oZ5dzeChXFka2w3wLLBr18V6qk1uMoyB3G4Ue5cYnVMQXEMUPBkLy6WDpbjykKxFbcB57saFhQpQyratLRN",
  "key4": "3HfXyYwhXvqmAUJTkRaQg2hzomcpqwrrGNh1KTMc9GxGqQ44LBCUwdh5xFChjccxKcajjFUFMLAvGNXijFdJj2q3",
  "key5": "2H8zdJMC1KVnBxPzJAHz4k4nbixH5QdEyTVReiWbSTWddYYZxBwfSMCi8CTyfPS9iedV6mrygNLyy8VMMgMbY9Nn",
  "key6": "4WPWFrfHTHM9KXgnKe9EYQbNDJZs1aM4oX6LTmn4rsXLsVpUd76Bq1t5ivmUuNPbX5UeXTFkdJMRY3kfTMjR4RzW",
  "key7": "2mbMjNhixzYCfJNoSWH6wnd5rFe8goyo3xPQ7wgKUs41BFFJEmMnTvUDWKdnC9EXQnXu8Yc7oxLwHbLz1X8AwgVC",
  "key8": "4VAvn1xW1PY1SDyErgSHopNrGMLB34pgTBp16Jp4KujmnQvTfa1Cw4XWRFVZo8GxoPCq6H9GnS4HdupHz64Nw88X",
  "key9": "64spyiGwaPm3c9Mp8Ek8Z4TwkGyw1KgozkqSC2oVJVMVqYvWHZ3MVT2QWnWN6zMKKbUdezK3zabWcoKqAzqL5SVZ",
  "key10": "3YCFqCR9rYGkHWRmfwWvRxJMvehHc1KZUdXRWNMKbBg8npRumqvxRra8SNJt7uNy62EhXJEXfkf7AUFbJ5GekKSy",
  "key11": "2yCejNuWxR9D6rdKJt3bbGFj8M3wp27HJSdMTcdueyCe2FYKjaqfBQfzb6xm6KPcwbVuquEzF2wJhkmu65yi2j4D",
  "key12": "YPd6XPk4HkR42DoVynZew1vKa3YEcvgBXw1BYCGXXsc4yF1uvwZFinQfbqp5UT5wV1AcCeYaPecSGc9oWdoACyw",
  "key13": "4V2WttvVMaf6u1ikMZUQGXxuRreoGjfSrXut6HdM54rwQKjyqyV4RTnqRZwfFt9ECW2ThZf2HBdrdwLvpntTtjXi",
  "key14": "2GfUQgmykAaUDK2uHAxBKdEkgZ2GmDavC6KMVQAo13S4kX81mcjycG2r9LTb1e2Wi3pzK6Ydm3RBGquJ3pGCEdbU",
  "key15": "29WuwsD9utGuFJjf16F3h8JHqhr5Sxcu9qRsXEFLsZjEo49yhMeiojGNGdvbLjYAxtR9PXwv24yJjUjBECWGbzY3",
  "key16": "5dzU1k2NouNcSZKEJXRWyzDY7fCC66Bb4h52EfSoeXTLG3Yk8JfUxjzsNee4aqsFrSo2VPzEfPeFcYy2CpA1B32N",
  "key17": "3ncqFkodV8RCs7rMG54fz7HKc6k1KNLFYRukjNzjGSTibaVKaBwY1SQoeb9LjxJVieUyWDa8KKzKiwNz1rJqDfaj",
  "key18": "61UKgJnFcbzkox2oTwJyE2BrwCoKwPJaUCgMepxvDBKrmLEqTSB4C2fdB6WS939g411XMUfVPjc3iSPHn6KKCGQn",
  "key19": "5GcLGAFcfLXf2Ai8GBRD7bxiv3oSG3QMTKty4EbUMHD8FrVbuevsegEhouZWfpgGGPjTX5HHBoBY5dC5jMX8QCCz",
  "key20": "5i94V2X6xYPw5Uy7dQgn5aGBf2hknry63fGgT8zvxavS1iGnq6DmCpg38UEpH7N75Np4wNABBFuLuUGVs5vuVryL",
  "key21": "6HU2fkBAaHZRA62XuK4RnoCv6uJG2nQXHHvS67z5nHgr6Zwye4upoMtrEavYcNjFu3oBcRk83pLbCpLEw3oGJhR",
  "key22": "BcgySQcPS6Tv3jrcrgeVdgCLvYN2nfoED7Lcpqy7ZWc4Q8RnFnHwnpLXD3DKhAeG16aNWJUayYk6KL9daE99Tvs",
  "key23": "EBxe3QhrvG57r5yPi7u94zG3ctnhhZGeqU9zFfvgUrMPQAFJ8KLaL5hBEvyBeA3PHEXGivrZ12h2sK9aTXrkHCR",
  "key24": "5VPqP4L32wkftbADo6b4JMXgSEoyrZwhfvZCzBhQi5AM7NPP5k6qzok36aaoRfAiiTyp2AbgCyQoRkstitWpHTP4",
  "key25": "4UNxLtUKWk82d5ei1WFbYpayWYNDuefP87ixBSkBTMaNLdBNS4FGmYC6NpB6v9QccdgVQfULhHPFcSbpYpjbpYS8",
  "key26": "5UEjYiJupDifZoQEca4cCrZLoh24K73uZVMArXTR2XUcBTaNDB65qsiSquoT2aQ7RR9hNP5y5uVPBTHinwEGzHn9",
  "key27": "77TURV7QPVQw5R1bBu57H6sacmtrzqAgFnPLUd4AKcEcrZByErgUEDEh9FERTB6MUXxFGBbKcE6RtiGbXb74pnT",
  "key28": "rzgtUSb289yNqV635J8xN5LKttRY2qRoxmYnF3g3mG17njqy5uMUcmWs9xUwT8pffXLYSTHKAaxKFmxEL5xtPds",
  "key29": "2xBW8GAMrWjU2apRQ81UteQUTMJqAtJpxBjwnjsnShKRp3a5oUbaPByXJpvbXpJBG82LDRVbpKPaHdvHz4pkcVdr",
  "key30": "3GdJgxx3vJF299ZfkPXDRbVz6f2R5ZQB4vQ1SkXju2vrRBMAD36V76zYqsKjiiK3jisXv81q25s7X3PbEd4qhXXU",
  "key31": "4Sz4eWi9EcqX3QvHpbXfAyPTupbQ8SAN9Cq6AcVZAbYw7MXCrnoDT8ZYrsijc94riggzPVAB1q62GDJDmkWcqySR",
  "key32": "saA4e2fxhRsdf4RyoSmNx5JM8Sw6DNQxbuxYfjNMUd2d9bZ2Wtucxqn96uE81QKi7U5DBPzN8vU1Ewofba9n2rt",
  "key33": "kLQ5eUWcJZotWppGCTZtWzZK23RvhvUBxdXyhcPonDXAmkXhkYKxgX5BDP7dF6NXfBLg82kPdpikpRPF24Tksek",
  "key34": "3NXDgTkDaM4og41qmCk7rS7ynUB2JT32Dz3TLvHXZuCt1xsg6hWdfZLXkryhFjPUieWAhbtRWounMg7DgK1WiHzY"
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
