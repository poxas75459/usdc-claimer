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
    "4r9chMpRJdbPtQsV1tvxQeJxKHVmB9Bv6jUKVf2Q2TWn6PfjnrG9HiK9cSXMqxomU1PyCWQwGAppDNypBswCtF5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M4zWUGmpjtjNmAbTfKMmhX81VwHRZNRjeynG6P6cxNyRDMiZsvzUrkCn6e17L6LHFJGm1Z4T3LtfNYi3LPnWeYs",
  "key1": "gpKiCP6di5MnhpgZ92UzgkUUmMd3FxYc9sb5z9PPDMFM1qCHa8H5MdcpAb7js6EGVsYgiCh7HYrC9FshSwWpP2J",
  "key2": "3fDyQ1WZFdf8nVq1XxAU8jpKjU3aCTNGzKFFazWYi4sunRFzPmTPLDs8fK4rBHBXnBn9sueZq9M8eUaSvAq7jB58",
  "key3": "XquaTZiX1zzkDCGneXdBHdmoXeC8AUGVoCuEkCU5ZEVCtnSW15aPixGg1Gm58V98E4F7c3BKWnqKaHpSNTodt8f",
  "key4": "5fcoazuELYJJ9enjznV49EKt8DQgynfnSxSRFH671Q1y33QSqiL8rAngKAwrvDGSwYb3SVxgqpUZWeEVbaYK4p6F",
  "key5": "SxAcpnym7nxBwPwDkpLyF1cPBjmWur9mP7bisyMkD1Aq4ojkUcKuBUBKoJdT8hUoJKjauQofRQ1k1oLsj8WcuTN",
  "key6": "2d9ZCvGpwVksQpm54dPgy4mKYrLqFAZUwvXB8yEdWQtkpivMaWUJpGzztPrdMvh7T9FyAzWWeWSLhuSd22SzjsPS",
  "key7": "3BDryLa45DdnkgbXJwfroY1qESqAbUpWJhuUbSubTomUQ3m1EaBJtfs49fuVuqmSa3fiz4XLRMttGskL2sYo3E6",
  "key8": "YZwJEPpqXzVNxnSBNUUYQr2iKQuHQDQm5TDZu4RChTqtpxddAftxEQiGQVPTX4xdpsEqGjX9e7YPHwAXHPvuNW7",
  "key9": "LedUepPdkBCqRqsV2avQG7wyvL6G6JaSYfFp9sMXdnD9BA35eQyZrgLHfBzf6AzmvBoHVkrKeyUS5snAaN5EzvP",
  "key10": "2zun5ccJRK5C9ynKBi7wrUSbC5BAd7zrAkMypq1nQyiAqyJN2kya54QXmm5g72LMsnHmx6q62bGPzrQBeJ3BmSW1",
  "key11": "676AEwmvJBZaLwHPcMPUdhzkejNEVoA2i8gaMdk2Efu916SzkmEZfPj5e7e5eu6csYZKPP2sTEnae8Ys5LXT2qcX",
  "key12": "3yLkhJ8K8HEgm5y3vjdzsb2BbniQXM6aAxN2JAfpxGdMKVbiy3Nk3fzuQEPpV1U7merH8FN1UJimzsF8DG1exzQh",
  "key13": "2itHJF1wZNFbPScyfLHc1dQSB8BHn9VKn6qEpHGrUhGEowsjyE9e9sP6Pzs6dssREKY79LXYsPKj1ubrae1Vf8NS",
  "key14": "qhrVbbtwHeGgniU8CD7tfBZQiq2ZsSXm9MZg14wXrxfeLzAjZJV1FWgEeGthXeMXHbuAeJRbQZrMLwxVsr8KenR",
  "key15": "2yuqu3npgioDNmh8VWfJLiRCAFCY3Mtd8YLfdz7EzrYWmpihfkT6F4biMMTM1NbfBfVnkdK2PcmtKfrPzSbBCV26",
  "key16": "51Q6vfGQAAjnCphFKRxdjhPRaDLWn2md8stpq8crqyDVjpGa3S7d8y5STDzbXuvpTZA1UATUxgx9WsKiiX9skgXQ",
  "key17": "5e3WWx9gHpLdgEhjF1M7xevM1muGm4jWSPRviEKDWx1Kz5Z4UoGrG7vfCUCr2xLbzKtk3Z8jLAyVcraGWKCQYne5",
  "key18": "sEVES48gjbMDX2wAvUb1BsDa68VD7r6gzBKgG5MtiLzBPYUADEYkpissv31gUqgaAA4FUT8kHp58o1CNQoaiCDw",
  "key19": "ayNKnCEP26Je35UAj9LMxg5NiC1UqwdfFtruoHerQy2qRyKufoUekPDpnVsaHQ6tz3QVAgaY5bwiT7Xo5hdsrLj",
  "key20": "33pDBHy8FXqqGyCvmh5gdJAUDsRTFWRUH29Y4zJ3FeaP3MTixZKYudPVmncxqnhTpH7UcezRFqZd3hvACDGtDFue",
  "key21": "3adReL49okE2qxXRjbgJKCxarbiq1qM7wruAGtvYdexuJ17zfggbB1YrMfoEikEZdry6YZSoYk7xeQu2f5jG7q5b",
  "key22": "a2w4QXsN39iD9fPPgQUo6QDAq9GvkP822V8Dh3UE2ewixaKzoPLUAY8Mv3g5gWH1XRPmFtmNrawiNANMSgze2HC",
  "key23": "2tWaGUV9MQVfyZXJsdsLPAdJ1gMTBxDyLfR4V1apuw4kANCQrRSMJ7K1twNyYQa7yREpD5C4r8jJ6L6zBPZBG34r",
  "key24": "tH965TujSkdkqvCZ1ZjBy21Ybq2XczYgq3huNanJcdSLpsNohs6AUaF59vmFhX4tHU34gvza3Em2n1L9nq8y7oL",
  "key25": "4WzDA9yyKkJmDpT3ujcXYF5MXz49adkgcuZJK5ezMqRm1vRmyroabosWfWLScedjX4U8mL4YCFecVL3jos6e6JqK",
  "key26": "22iBFnF4ALWtzLyv1WnEA44xmvCTvPCrMbnvtuAzi7CQaUZTWZwvmDhFmutvg8sVhJDg4anm4UPwJ8Dqb4AWnbxy",
  "key27": "tYoqdcCsZXj6YKex9kNpYc6118r3aRNB1oYF4RasEwmZEJewtp7Y79bbLPh2L4M2wfnQra1H5j3aY1bwMyuXFgt",
  "key28": "4FM62GYAtAaysAi7EX1RJVMa3dVHqgpeSQp8RsKNtnpnjuxfJuum2Fs4gb8kAeEoj3oWUTTrogXSpLcahw1ShXLM",
  "key29": "4UcVGZHBYgJpeqhEQLyxMQSrxmEzjPu7sas4Etz14EerqDQ431ZBnuMwXTaDSuHhVc4afKmyyey1GtueX5Rm9HvH",
  "key30": "2XvMPVM4CJKpH34r4eBnoiR7tk7QrjbjagC5dvBUfAMxmxgM6kTQH4fB6Lho98uKkVJqxj8Q2bs3e8LuckhqMmaM",
  "key31": "31KUUGrn7wNRwwU2zpMpzzRjVj8a3r3EAonF1Mv51SGim4japM2zSKfyzRi9K8PvZ8cSxK4MsTLeNjUJdGHgR5zx",
  "key32": "5DMMH2NaFNW4TzuLvRWMfbfRNUEX9Fhf32RfbFzeD9wMk2PD8mFs8NRkNkxRfwbkn8ZPTn3L9Hi83CRq5EyVRrNF",
  "key33": "3xUK4wMvy7nhH5pyUjXo45f5kmZaipEDKmZ1uTteoyejyUrMpeaZeKuxEQadhqavHVtMjNajSTRvXF8JVXJ8yayy"
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
