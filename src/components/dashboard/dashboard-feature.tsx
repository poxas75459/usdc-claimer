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
    "eE55yiC8YH6KThvV1DmLqWzypMg8SV4taig8fwK5qve2jqqy3mpMgetsdfZrXCbeuD4xVBqkBtLu9YuhoFEMnqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o2DgCnuMk18KYtgFVk1Fg6SvLpfLwnEZg6bff5HqwXZCZJnAh6TLcrGUXvsahrqo1YraUe9m5hvQh5Tq84wDbq3",
  "key1": "4fogNcqmwUqsWRQaczAt9wigsKitrUWswmcywEtYwcakGp6PiJeuAw5aR1k7W3MPJa6cVAh45ftjTYfBu71xShGf",
  "key2": "3AwvNSeENZHQYQcoMtEGUYxHY2wfdWfCMT4GyhAL45rbkSEkRgBu5Gt6cjFYiUHYxp34MfyvgMrWeEoEn995gBQy",
  "key3": "2rSRJoZLSipDWmjCst8XXU9RgJpPVEReCohcCdmAX8Cr1rMJsc2vEpP6YCXjXFrZ4NXyfafYSGy63deQvS5LsuDM",
  "key4": "4PdbysmHfDLoqzWYC8NceVkiNPQtM93duuMjcXRnKW3BJMmZTqRWf9MN2Cyia3NQ2ASi19CLbarmou9GfwRDaRuv",
  "key5": "5FFFVFnu5PbVVYR7C48mjwF9Y6ugMCcBWrrd1irGohvx22pcQvebDNLLkmguyfq4vRYpYybydXYR6Aa8EgzTPX33",
  "key6": "3hJhPerW4CwrGz8WAFBG5KouvPgVMQrDhD49BtnxEXrCcmgVdJdJ4jvxXe9nTz5HAPu6nM2mJRziMGwrXVXXytgp",
  "key7": "5qrF5KYV988vA6ZpzE5tyyd32oPMJNKtAZL5r8aE1nJs1GZzZ6hxLooTAyuCpxpGZixFdQurqup1xoAPfNSgj8JV",
  "key8": "sBxPmUgrAV8eUTfx63YZ4zrrPpQk1hH1iZo4VFbMd2kYq8TvB63eE8NtpdJD3MoKp13bXqWmJgqJdytJ1x6iDoh",
  "key9": "o4GzCbhwC8WAHHvmjMrFuWyWukKFrqaGhXg3AAMTb9GmhPQwNJ3CSseV59ifzgfLE7DacVMZtvKiuq38Xs7sjnR",
  "key10": "h47sFE8tZgGN82jFnEzj4hHyS6qHkHeLL9barr7KQxYQdVxeZmb8i17j4BtyUiuaaLi9CmaXBURR7iSEUPjrwRD",
  "key11": "ppbnAcNRaqQf9ft9sdsBwcWESFUP8Zhx95QAWDmfJDFKNpGtuRjhtU6wb47aJQoXv556KkZp8grZyd55RhjfGYS",
  "key12": "4t7mXnoVt6LWfRH9aa2ReCDbkaubci6LGzY3UWG6Rv6cqXgrTU3a3NPh4uY1mT2v8PeEUvZtjdoXPM8Jb7wwYL9N",
  "key13": "2ZyW6FaP9CdSVeGRMiukmUencyr3oWd1DZDAEn6SEuuhNzh2Y4W8j8LvEJ4CF6wh4n5RVfzbLLvyocMXRm7xoBo9",
  "key14": "58ZeLJcdzMncEwfwYpMWFpijUHMexnbfXJMA4eqGkFgxW6L8YMiqeeKun1wpinET6SAgBfTdWWLoqdAEcWBVr8FV",
  "key15": "5zjtHzbUNGmEKfrT6SBpjLBDVpdCR1zN4BhZbAboPKLDAsUucqzhpirp11qr7Eg89zi9GLpLjy9oumB6VkQzpHYq",
  "key16": "3reySL71k12DypN5Yw8Ns1uck53aWyowdwwjsLMGyqrGp37fBt7UrXmPs26FagttNUzXyqbQ88zNUD7u1dcrKQtN",
  "key17": "3ezgQXT9L68JjMgdbkrvqoTzgiqz6m5QSF5QbvNg5dZLgtunH3A2pCCFNyax65LDQCJ3kEy2rcqNYNExhdtCP3co",
  "key18": "jMfyRpUC3JWyHkfyAN6hQqKYZBYei9YAwVTU1oUZHKjzFYNCduZi7sP3PLn5EFz1SRgWpuQXa7prWVgPP5f6J3A",
  "key19": "MZnWEHVYiVPyXt7bnvs6MquUvzPknQyssK8dA9fCzpCTLKkaoGwEJRKPyLYumhpGCdPB2anDt57tmh1Yp4NhWQW",
  "key20": "4E2D9NzUkwhUHWhCVmk787mtsWANvt4mNC6NULTa9AWBtAdCEehAqALPkRtyZ53Jw4Jvdke7miVJmxmhUX33uPZW",
  "key21": "asmtGaPUuufMBRSENVq3i9eskj7ktKeLRvXGXo61dSqfbo1RUBRrJfP4xbKDUr2JKRNgiwm2r5Q2akPH5DqhdFJ",
  "key22": "5jcDAmfgt3NCYF56s4g9daFnedKbt3KnBhtdxsVEijGWye68hjGvWNURf7xsYvozEj4RokarQbB1eS6ZzbmwSKjG",
  "key23": "fJT95gkUH6FkXmE5buAirg56CtWNqZdbscpKZvfPvWonPXQpDd7vFE88d8mhWGTUhDrdDi5q7kd6rsJK59KWLwE",
  "key24": "4BEwV9ncvFQ83aqm9unKqDbgsoAqn5iFb5XcoYzs7U62BA9VohirzXRyMxycaZYLTRaKWhVTs41z56VEsJBntQfq",
  "key25": "3NoMaLkFRZBorwW15ZkMmTADY6p7WpRb2ZHp1vUBEEjgsLWtjc5hkDfawovosqHwDLLpRrEVpp8Gg6orR1XvGMDJ",
  "key26": "3zkmCBkFVokPFCEogYT29izk2GCS7EbD5vbqt93xxY5FhZT1y436v7buFpofnDf7JF18qxZw8Ku8U7pcWLwWRCdu",
  "key27": "2kBituWhaLa1mDwShYdqKjiuckU5g27kKT1TJeHdd9H9U4JG8BTkYYDzt2GTPLJeDR9DEsw8GcHeiBjem8JAG94y",
  "key28": "5LDyygDSqNjszBi4REQKsGmpMNorVGNfDtjSja5DH8TgGR4unyizp2YBAh12rb5vxybrCTHu4RpjLi5JhrAux4n3",
  "key29": "VQ9zCh67oBV93eHu1YFrU3cgHGwMVaj1nZ6Uwy2rs2bFkTALTC5fA4JxfB6oK9q2DePHDB9QUdYzB9ncsAivRoX",
  "key30": "nWi1kaGwjeq5yLNeT48mUJnRS6bTwQrwe8f6ABqcWfjFDiedo5ATFpfdwjdkaLrAQYoNXhs6xgPCGS33GafZecM"
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
