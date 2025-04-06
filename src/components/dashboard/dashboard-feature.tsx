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
    "5Ro3hQCvau2irprdT2KpjXqAFTciTAQkvP7zEyzZP3vEyvjLwsvSdotMxBRJdo4ULwq3XzJHfGrNn6JpgL9PnTLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MSm6uJtxJMkAQ2Gkaepo3SqvyoDk4f8sMRzEzGqC41yzLvff3W26HBK5424gQE3pUPZRoG2oYtjNj7p8bwv5UMP",
  "key1": "4axopWEdRaGpoB3QfAKgiPw5rZdBmFRJKsNrvxSp34aZcm5FRdUNSZF36A2d4AeiwL3Lu6xFo2SkDwA5J74dFVdh",
  "key2": "z1n4hLTEtsg26rcDyN5dzDiSMjiar65FPs89BZPgs7WGK6Q8wcaH2wqo4TKsgNDnFkB7pKLwXWoh24RTgEUokQU",
  "key3": "5Mmf56t7JgJE3CN6yqfQ1BVNDV4CJaShRj298HERUh9Q3V1JVoK5mQbK64pNgkx3g8hs586q5qcQizWbhSEhxdhw",
  "key4": "iNVoFJCo7AAQphgX3bGdS8jmD1RuZdx6sif1eEyZJFcn7SQ4rSasGk2PAmG3WiGGSan1bdSpSgeTxLAHfQzAH5T",
  "key5": "2Vy8ooGKHaXduM4h7d4Wpx7bSg2LvpaG1a8eTP4xs9onumqrEKQDzgrDBw31zwjznouNXc5kQx5KYsYKwq12qCGZ",
  "key6": "2cShLtuaJCBU7u2ppCpWLn3J8vUJMZ36GTGasUqAo6Fndjz2xY7Ko13ZjkWd8qDayr1AxcpTyqKpgfW9AAL8NCvC",
  "key7": "PrYTpyJhsUuqDuWoSfX2mYcywSSH5r1gDejUn4NZpkTJ4ZX6ZTPQo79HCipF9SAEyDarjvPDuVQKzQHxUcXXLMV",
  "key8": "4gGgUgv3udfdAut1vjBY9q4fpc1n6xMaKK4ZoGPEUuoAn1diwadjYzaJtgr9vjkxxs7YCk5g758HgXbcSfDwkooY",
  "key9": "5fon64uWP3cJ8RXN3xnzCU6LUCJJyXa4p9C68J93mFkKMZ9mFtgtesArbHysT56TGjeLYPEMrj4KRh5dPxK5RtoN",
  "key10": "pmE6zxpqVUErJtZcvejMqiBQvDB2nseMuWU2UCc3b582oK8exFDQD5LU4jxu757hC4e3Nd24wQkTBPtcZ6pYESm",
  "key11": "2qAhKLa6kxLfEmhBPXQw82SVj1jv8JeUKGNDkgGPbEdDeVTJR9XXEkqfmGouegM4yNKvjxLmGWn7ygSNPhwkb7Lk",
  "key12": "iWy339rCEE33pFTFWfuJvC2HMBAQxxm2j2dX9sNaaL49F6DZfoCt6oJ1P92cPmSNhntJnHxveriC2VVPK3zMPLT",
  "key13": "5VSrYfdfA2un4XzHWQLWd2YAQc6qbkRssK3WDoJy3187wiPT8D1psUQFY5RSMvicvJ4iApBGSsuG4vfWwfJZi7rD",
  "key14": "WNg9y6PrEaLBeFg2eqG66c1K197KHERTZKro7Nq7y63URe1mkBdmbz3ygtHc5n6ViQjW2L925MZZ59gN39An8xE",
  "key15": "3niocjUojpM55SzghEZREKM5mPY3eqhae7PYfvy8kGRyrVCndWz92daboMrKwPVb77UaiZcToRVxNrLDP4FMDE69",
  "key16": "3zfg9VG7E4eZs7cRaLyTGhJWRzhrrZpABrVs1ryAtdeTPbKwxfubZNDZn1Jj2MMJqR6Kv62BCzQGLBCyHQpYt4ER",
  "key17": "2AA5WQ5jUHkENJ5WJ4QtQ7kWi7yw9CmMzUL4ofqFAGNFqE8K8VCKaoCiuLasQuzi1dvG1w4hZrJQco7eziBnoDfY",
  "key18": "5QYWeacpYo126C3g93fgaLMEyqcskM6yvtJQxmd1n7nvm5yuN9eXUUk3Vae6hFKowHwpgptXC9XRWDcwUiRYk1P4",
  "key19": "4SutNTvP1ABSSyURkG362XgdRnhjbgg7ffdxrdx3JR53PNRjE64GE7uyDHtYMr4RpHt4a9yWsongZTMMeLWmfJYU",
  "key20": "4CWYY3WtsQyzTWVPkUPAdKUwUE3puMyVFDHEcgYPm9V5ACQMtFQND4nDNFVjDxrsFk2MrAQ5jtuyhMiGrNsCWx5p",
  "key21": "5gfvPzKdaHn32qSy4bpby1ccNwdJ63ysLABaMV7rcj7Lb7xAfp2QgnoJBCymD8c76LSEhPp5P5frVurNqNNtZY5U",
  "key22": "2C3E3by117AgtDtBWHKpyojpWBYrY7fyfvAUG1HneNiPDWuEFkETCzfjJL9EMjqSi7DnMMwCDzWxepxAXfWZ8nZw",
  "key23": "2cazKYnec6TaYgbzHvj1rXb6tawL4dD9viZhoUfiDvnQ9e8ES3576BMPXX8aF41ADCPSxbycbFQUxhLmUCrsSDMe",
  "key24": "47tNojJVePKALdCY38do9rrhSRLvf4rirg7wCNN4jvb2J413gGM2CMYyksYFeV7RWXGniaV7VEYzuoTFzi2m6qJE",
  "key25": "Yqn7GgVPvX37FpK4JbBPMgjfEeWLnoVkDDHtKQecs6zbdm5dSQqXHihaVPgrYAHBZoweLETNpvLrChAr75JCbaa",
  "key26": "3d225e3Wf8xiWtiSDf4cVADmNabF8FVgVgyAhUjpADyAwZ5famXaLrXHWFZophn1zGSwBqoyg2KAynWegTR5wVnM",
  "key27": "3N37y1XLqXq87TPZTwK45JTVvYkyuc7xbvmqesni7g8nD1xhxpcfhmJUGr2HTRhtHLQ9kTFWsFBjWqmLscDVvcpS",
  "key28": "3VXhJJSKs58Gpgnjex828ENQbwXG4sZeLjips7ASp9QS6JrXQJtHy7UGjwQuVC896buiU5tQ7oeye88heqfKwVAs",
  "key29": "4dxgRPZS1vUEyz1C5caNniRBQW6EaeF8K3un9VS47fuFkVHPYaf6cdQKu5M5t3yp5knU2rJFPyiohPbaLA7BwisR",
  "key30": "4FgVcKvR1CwXxe5Qokyjo4Gs1wBC7wfH4dEtUjgLrGc3KE1cwzRfiFAisgEosXhpNVrKFBsFdDytvE4zN8cnJcBF",
  "key31": "4XJmHM7igNb7nAMGhFYrBamqkjXZkuqJWCqUpHRYRnj1jCsPXYcuQgp2ebKwkx1GHn9nmuErcQRRtprJg8yBtqMa",
  "key32": "aPniBDs1Uttij9tNt3aLoyVdFzX7wLz3i3WKza4PAfyLoE4pxNRHqrnZjHmrAG2t9G4hMF7mGiPKMJP83GXRRzn",
  "key33": "2eU5mKxa8Xr9zKTrwy8YznfG9D4SQbBKpkuntHVhfKjXZy1x42abBnYHwVjuyEcWGsHo7VVUzLHziQ8KTCohgyUf",
  "key34": "2SWfAa7hm4t3URcrq7rshST7rRKD7NT586Cd7g8WTnBCn8cMZtzkpjE9k2X3R77yoMgNvSsdjSiVapfASaotvE77",
  "key35": "5JqpjMn8kj4iwoFFUgwVjG9BeBzZxFW6GRTQgsLcKmrsYZqZXCtHBe5rqo1RLyLKsNfVrYxoxf12BJciGbn3pyc",
  "key36": "3ikbuVU6C3KuCekTA37c933TPdg2nov1K448pwfDfrcMWYERHbQ5WNSBwkCAZMFUMFDABLYJuhfyKNWRcrpZHChc",
  "key37": "pHZZAETpjbXNcMF4UcmFNYkGdUyjVfT9J2YiG1YsHoZJo98j9RpstYY5T7yJj3sfwyZCmTGorkivhXq5L6usNyt",
  "key38": "3cTMcXm2LEfB9jeQVcqXEDV73sCNopT2M2aTTfGckxaybzu6cSm8rxzP7HTPUDgL8VMoQyVWHswj7KmkPHTB2vj",
  "key39": "3F9s9cTTQba9fAuqPKu3epnmVBvTp8dV8MhBzKXWc4Lbawjj7wZjPHrWrhhjDJM9aZi6wGGb8m4uedebA5zt8Ykx",
  "key40": "m5XmsvpGanCzjQGxh6qqGrxFaeAsFUhoxwNqpzQsjS35XCeZfcqN9iH5YCuESb8BUoMi1xTuXoCWgp8jc2BfxJf"
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
