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
    "3zmHqpCrVpiQFFBjwo3qJxSG2PfxB2KP7qR9uuMz3om6NkipRTMCC2C8nRDTWZJ2HP5a3NX366eyyGgpYfMUt2ij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HU7FeNHDZxVVamfrTeBxHKrdM2eDHQFwq4FnEevR1Xz1Qxoo8EEMgrUZ5MqbcDrNseV38feGKBWTsbcXFbxaEyE",
  "key1": "5znRotvL1JPeU9twEeWMMVcHhZMFvCFN5fV24Y2rscMx2hiL5PCSzzujWHQmwmpxnT77sux522ikk1Z3GgjFh1sH",
  "key2": "gTVtqzWW3zxC1VC2ZNc3VcThMaPrxgcS56fhyA3791qwW4s2deFCDdKZ7GHcCDohoVrsB3NXTfj7whxBjRmBNBM",
  "key3": "5Kh2TStY9oQvKkn28n1CpsozisKTVePfu8xnhGWzFNTv3BxegL1TwKvEpw3YkqAB79BJVCHKbTUtyUtZWabRunB5",
  "key4": "3ChCQJ4vq2dMDBS9zVWRufNtWrstw9hYeGbsuwjMuXHr9bR8nHenSbByKLVQRPrHp8mb2MWPsPpbLBkeYQQUYTCP",
  "key5": "2Ua3nSB8RAy3g786AEM5x9TWqvzp32DgaLaAQubkYJgEyRcrfG7rY5Gzs6hFHAkzKqxdRmWZQxVJmAuxpYMihVdK",
  "key6": "5GVi142kP3HGUR45tDeerm8yeT7rAHkSp5U8xVkjNPdimLzz3rEtdASYoFw1ZDGNmpK5DPuS71s5e7pb73p6Q5qZ",
  "key7": "3xYJdRSqXJm9PJas8QSaxbtaH75sa4wqfFAeSFL6vZYfqnFzVuGPwkUDQTchb7NV9jztXjrHRyVExRkQ79eZEBtk",
  "key8": "2XgG6K4MWS8S7wS9fMocV6HMffu19pBMKRA3fcTotzViX7ZrnAmUvjdQNvh58TNyVFR2XFtXgX8Rt3PEMi3LCCar",
  "key9": "2HKyTAq7tVpEvqACuSeQByJc3H89LEeMdS6feBwgAMgRudQvNWCcXazjUptyd13inKjAwC47AYJgebaZfuH3EMqw",
  "key10": "4mtUx2rxmoi9eHd1qQ8eMuRzparGvGMPF5AmeqsEUChKYPB8ZU6btb4GDMSyJJh952fDGvdm2Au2QYKKoTKN8v4D",
  "key11": "3KCHWBhX23YR7jJG6gmyFZK5fNAohkzFCbV7vyLJLt66zXNZq2Tj5rwoqCgbXogetHac1RxRqk28bKRjcx8agdRV",
  "key12": "54AApAJS1bwXoMzAFFH5ATVtfDwMeFg6T7XPupvNizrjLXhDN1mc9fhBY3mwDrepsxkifRvYvjBSAQExjVuwYb4J",
  "key13": "51JPHoPx8hpEoo6X7kcraoSN9BUdtsgC7e9Wm3nLHAxMc1sUD7BPUavXojcNHBrmAvev1LeZHypYcntjdPoaDMxC",
  "key14": "2PK5aRU5uwfg2nNJ3b5idkK5BU4t73zKqnDqP9qVHtTyMq6KG6Gvuvs19dMno5nHcrGoF5J6A95wGFogbEw6AcRz",
  "key15": "254JPvrk34cXwJoP2ACmbBFp1bCmBZ6jumQkZzNt5vftxKoDHc4J5aqu4JKWodbSNGp3dm9fxaJwaJtjR5mMCNtK",
  "key16": "Af4Wy6zeMn8TBndLFotsMumcmgVbZumGkxAscRDUBCQsczHJeeZMK2m4YAAq8Db8zDyUChrGNAqHkP7aFtubk41",
  "key17": "5cqPDiHbVj92VvNDt5nCaQcf83h8RBese25zE15zeu4KTtHdycPPXdoysgRYKiqiRyToh2eZBKDgqstGcKtLAZXh",
  "key18": "7AQELQaErKofj4Qdk8oWkZhy65CkBvonCMEtR8zGrX2bfCJUfZeLSi4apHciq4d5peoFQJbRX13Hbg2hgSUrBR8",
  "key19": "5J7JWbe6a2ugi78q7igu9cW5jVjYmYuju8VhgmfntNtLhBKDXypNRa5Lzqkoy8miR6tJg6gSp27WF2bGqRDRJRbM",
  "key20": "5tXeEHpWxp3W3A8kDuP8SVmhLyC9GPxXBF5qw4xe2mhaxW7YvFq2CX47aNJfhxURnaQMVt4CNMez2vg5j5znqp6r",
  "key21": "5HymyZFTuXbYK744ph1wfNbr4L69XHw2hM3AyEieKFnzZBYEJf3gomSxshAXFLcWJSWiFicWL2qmHHkUzkkicVPo",
  "key22": "3Dy4GU84aDU5p1ezVn8VE8QssTyVdHTez2CKZCMkRQWwEbyXrvwikjCQsTthoukBHMsGWetTJ1ZXYsyN4S39KfMR",
  "key23": "5FiBibRyNsdU96fjmG3b7XKMn6YpiRxkVHW2ioJVTPFoSHNiHpvv7CVQfAAf2LQE2f7aS9HikXdgwL5N2zf9kNFq",
  "key24": "2Wb84zkTgT6SvanadafRxHGXcjqc9v8N4U4x2rKXzTK3B9nYjj7xkpFLAKYrSYw8QEeYdGcV7hXSKoVLkRwkGwfr",
  "key25": "3iKhRM499aS5ejhJyEtKasp5b4HaTCBMZYtZYmCLnFPNWTUuA5zjrgmGzoU7Jcg9rQ2Jw9v2CZdAM2fkmotEeGM5"
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
