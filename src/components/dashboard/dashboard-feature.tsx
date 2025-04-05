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
    "4GFZZnKaQ3c9TVPeL3rgUUeKD8r31QuoQXTUqRuLk8LVomjWTLVheUVZC1L4FKxVXaYFfHLBUxjp9BxnSPeT2cdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ycdmWY7yUG3txHYA2ckh7YbRMoBbxZft42GC6t32tsH7evsffEYqwzrYekiqN4gAHWLoU5GbE9ePsANYoDzMnUL",
  "key1": "3JS7YvdkoeqLjBjybYfmAg3cResYh4ZvALuKhnhqPSrm8jdmhuNdRJCuDqWymr6awkuZFXTy79SuT6jnSL17Y4nj",
  "key2": "2JRx7D9e6dtAVb7yCtYDysWyUM9LHDghGHuPL4FhLrGCfAEUe7NrG7awxfLonrAAiobwwwfcZHKBvMskDDG2E9kG",
  "key3": "2UfrfocT8GcKSLbfJGBma2uZ9MibNQok38Zri4GX8s8C4rxghDozNyVyVXxbYVX5tAHtBffT9LnLT8QXZJc6zLkt",
  "key4": "2mrfPJxCDAy8e5ETGeMDsi5WbsrtGvuq9q7cDgv3nzBubnrgFMJ1uxWgDMahPbE1ywwkvueDWRAgtjGNi8HkjiQg",
  "key5": "3c1oizdqJGHPqujym9Yzv8v7jmECoVnD3RQybQKDEUVzVajGFitH36Q74Zu2dH3gXoQVzKGVnVy7WhqZpeLQCHXb",
  "key6": "3ADxtamyu6rhZcc6n4Eb9KXNAoz1RicwDBNdjH7FaawYdF5MBDfFQNFt1F9hqH7wQ6aiB7h7eaB9cLq5354CEN1v",
  "key7": "56HM1AQxPdEmwVP3kbN438CfdSCzrvVr6Lso281nTqg84rVRM7rM6duVih76eGTJJ3QLgWp63zLmpBm9dn8YyuCk",
  "key8": "XUdSfv3bBm7DCqDvDQWjWad6ik8r4MsVXJmMgZvJCtCQExKfahwrGvkEfvpWrCxcM4tT4xFPscLXaAtKTMPzxmp",
  "key9": "4eSbgagUjshKtBfhhH59nUrumUu93PfKb4R5ALkbjZGMAEZNVZg9Lo7f3xDDcm4oxWzkmksmc5WShyaF83uhg1m1",
  "key10": "3sZ7V93nPP7x196LF1RxdmTLpwUVvTBXxJ8DVU6xZWjegPjXXqqQw5Aq25nCLWXB5LjwrvDrnWkDkTUoAQbNsumc",
  "key11": "2dQJChCSuTGwVAfxQDPwpL182qwP6XNBkhzdZ9mdGqon7gZmKyeby5nCZeKoDA7YPst6MvpoGfH1U26dX9Z8bGTD",
  "key12": "3rMHPB6Q3J9zGdfAjKpNckGReKeqUsJYJfgxBbVLDcfLJ2cazKwkUWzx1V8FbnWezhnXPtbUtF6j7XWwGWciijmU",
  "key13": "32Qx79P5ijQPeUoq9PQYbGU2iHmKU4PNUSon4Vveu2QaLFpsWuN2fo8HKVri5VwTJ5dv8zLq5ZVSuESeTEoDwAc7",
  "key14": "Eg5VWSg7hBWhk5wfQExtFNVvPA7i7yNootnztDLFZg4LhYziQieoVuQYXhKzfbhpRsfZohTJtzpmiFMm3y8rkaa",
  "key15": "2P4DM1oz2yB1usGtf6JNtikL8xFMTC3CmWaaVBf1ukjQLBB4uyNQTRH5UVWd2DUTyYdDUTdhbTZLyYr1TDGQkq9y",
  "key16": "55u3g5VLosRUUxnMgu6kwmeKkmSnRcpMz7JkBoDTZ2g3cgvWm9Dy4omcDs1vDr2FSwMjqxENZMXJhTGJZztdE7yw",
  "key17": "2xTvTTmSosnh5zDRqshcSLYK4Egs1UKzNKxscT8KXB4adtU1WTt7DcrrReC37TYCgWoUJ5DxUGmjkfZa38ub6KNP",
  "key18": "51kVjeZDiV8yTZJCiUwRDomMmWSYHRYYJyeEJtKPqzGWZgRAu95fC552Y3vw9ebZdis3oEovjZ6Z4zNTFhLijtYi",
  "key19": "4uRFxXAS7pTQsVAHaKTkHrnudr6cTH5yPDJByaGukg9kEMUxhjmEc9BnSoeosQztTq1MVQeaoaYxCHN8ZsyMeGLz",
  "key20": "4ND52E8PRQaPC4UBPR7nWtNq5dziCiaFS96H6wT1rUg1NMHezT56kiXZ5GqJqXRNygXPCFUfas3YH5346UJo5qP",
  "key21": "4UoU7cfsUHEzC4refV5sLAncfKDd6CoxL37gytWeMTTVmhwe2nbs1LEo8aW3ZihaU2TeAy5cmh6KQZSz6okXHcrg",
  "key22": "2rK5GDvx1eb9qXTymH12J2uqkLRFJhDvYUMnYCC5v6WH6BUaXerG2aFQttEoiDSuBKF95xKy5D5kjhRdGETF8v11",
  "key23": "2tN3Kh45gJnUPENCXVM6naTeGURkBFTXnJoJER1wREy5VHxsX4wiHFCHnPcwWVfwd6T3GEXUhfKjubXAFcSJyBef",
  "key24": "375obXtycsV6MM7Q2CTxCMDDt1Cgiu2sahvtWw4KXAPESZe2AMeSAf38QknFA57kaq9fPbBo2kfRcUGzKiKqGpN",
  "key25": "3gJksc7hHuk5YhVT7mSD1nwcRRxr7Kz9GXfEZHbkm69omgrXM3hc1cJwLETFzC2WKiomAUL1q2MLvp1KKCtJDd2i",
  "key26": "4Wxi9LyViwGbXzj14z8Za83dSHAEAS1szMwLRM7UG8Du4cBaGTSBaC1JmVPXv24J1hHN1A7HbywR4zYDQBNm6tF9",
  "key27": "3Q7DaNXLC4EsNoaWmBLvotynvCm1s5e8oecG4vLRZQS3HagvCMEocpzb8ZZLKheuYKhHaMzZWdNJAnHJwthcffHs",
  "key28": "2Fg6NDwoDPA1JvcjMGPqQcALTywRqcGYBuR9F8tdRS1nhW476vqLhMBeHkMHjxnswnWb6V7ReJBvhWT7Qz6T4Cye",
  "key29": "3yWAGcU61vYdRhgeCPaBeQqGjaSRFxu1obt1JnvbmsbgsPJhWptkCEZdBmNhYUPpD1wWzWy3MAbPhrzUTzHCRGgC",
  "key30": "3WEM1iBVqqcrdwxhqS2g9ANpYbjQL6zMS8yf7hGc6EcVTV2qgymPqSAz1YVGceE7Wtzxe1Gsqm9Tfu4WfGBC8fpo",
  "key31": "Kot6XoKfQcJV8r1rtUR4FmFhYw8nq2B4soakGruYtQumPSQpMa6jfewSHZwau1NmQVB5eAK6sYKMrNXmP3TQDpX",
  "key32": "5aUPj5v7P5y3zV2ifXxpTgt1vf9LQLaqTgL4C79eCRmmmuWNVD8p3yFHaeVFuef6GkAuAqeCKMdiY6Kjd6F3G421",
  "key33": "5byJmrMs6D9TA7YvaXRe2mURrdGq33gTsaHabgL4jqXbU82UGFEezRo8eJoV27J6AW1Bo47QfyYvF8ju2uFm1NHc",
  "key34": "1w1YJ1AHgyo5YyrnmpBUrWaGXCepg3GiuaBwVh8jVT4QomHQrgVhSLXaymfpYeuYXQoGW5iQL2CmLXFMJLzzFtJ",
  "key35": "5afZ6pntjtTkSHWVwYHW9bok5MpdixoH9uCiLDRzxAZ5WzSPhbyCQ2uAYBggr7tRDMenjgkx47KfazkYRPx5a9da",
  "key36": "dTrQwchLT4PrrHvoRJRk1MLtGcFs2Jxwc1Cq4GC9jeGP1vgx1DPCFrpobP7PHswHAU3ZfRgms3mtpiEqH2EQNjC",
  "key37": "hDeZD85W3fKDvbgsVkDwfLeCT3ZhD9TBQpgsUCwX2aJ72H28BRawSHLHmnP4AMgXUtT95ojWnACwx7YrKfs91yi",
  "key38": "aM3FvAWi6JPgKyyrHZ633f6xjY1QDg3b7MFcXjMBqwZtogv6AY7Q54vqg2m8BkvzhCh9gwLySV8ZLnEaFa3WxAz",
  "key39": "4xvzHxBmUP91ZpEgg9srp55kuzjEmHTALdqKoXY3LzMjZuMNb2p5cDpwzPKptiB58htjUkD3HHush2h1KTMMFXY",
  "key40": "krxzY2MTdho14dhWGJVVPE1ox5xidSJ1BfkqVAdxELCaJuoeToaV7ZnKbtKgBdc4SmQpcuJ5ZE1GwjP2twe5qXS",
  "key41": "25GdvQ3yxp4WuWs253bhdzkQSYnwoXg78iVBrSmMHixndVJDFMcETnQd4jprVcvYP9dtCnMr5CzADjaseoRRcmxY",
  "key42": "3UzTo6RtwyH4gyVAnfPpAkTEkr6msypWyPc2K9wgLdmy1cDtA1ccSd1hrXfmwseVVAs6GFbkF9HeEA5TcWBB4fq1",
  "key43": "5oJWDxSZFkT6nhLg4uqwjc8EXpYYKPoxUu6AHLcFQ1jD7aMjryR7pQVmGN8SozsMoqAXexwB9JJCVLUr2erNFv21",
  "key44": "3r683go1cKkhve1iJryGQQeBRBi156gveoRNQL13RJ9zQaZvkqc32zmSfQCrWD9Xz1C5WoKkwkTKKDEJQFmaUQ8q",
  "key45": "2Hy9BUgLQdWvGHeN3ARLDxhAg8n3SmBWcXX23EQaHhdYTHYATdftQG7Am59oWbgwZttVFGnMq1dhvVa6ARbrzdcg"
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
