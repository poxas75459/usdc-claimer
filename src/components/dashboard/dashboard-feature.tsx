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
    "2HjKWVZsDvSTX9mnnDykNhacWiXWNQfNJ6v4F7uNuVJCdgALJHPwW1VuAdX8nkFFE6aqtE67MWR5ZkpHkaTn8pUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vu6u4TtrbmkQnYXHuyABcK3kvgq3JEiPdqyXQabcWNs1bEA7ytmDgn2uJxnVjt6jBnZNYFE9zZRbNAdAXMsV772",
  "key1": "3XfVbMpxXpP3gRBGCY9g1taybmKrAvqePzY7Ph85pzxZwDF4Sn7uQntadmmUqGumtiUpRDaJ1LHgYR8r2g51iBoD",
  "key2": "4LfJbq6zx5xnbFPETCEyXnSusgQQ6Xc3tSeSphho6c1SwpPgFkNENxhyt9i8oDP8RnQJBr4RhowR9piAwgQRSpzp",
  "key3": "4sB6YLfP9mBodfFo9to5VA6tWvVXxTRU4rggMrQvCmnFtaZMWsXELqCcNqNLWaRXHD2973cGnDSs8QZx2JMfK1Dw",
  "key4": "5i17fQL2dR6TSC5ZGMAZDxBn5xQtc6YLr7UHUyYecF1ppeF93xMEmfdtETESiAVvBKUNUgQapEoeJnAhMMR7PVq3",
  "key5": "8naCkiGGjmX2vMcC8E7VaitLxKjEqfPNWyo9KW6qspX2dcJ319k8v5zzAuvzTYb1YoaCoZREhmDof8zKfp8uvZn",
  "key6": "3ky2nnBCWpzCJ443JCmJApeKVY7XgaKFaatDHTaFb6R8XiABer3nnyT5Koi8ic961Bv85aw3HDHAYMkpSmfwurgx",
  "key7": "4SEqiEd8hTyLy5zrqbJwFmdGLGDna8NDz8CxxciNYb9xdYWdEYtCJam77gKqotkjiTmJmasG428dkc7XfaYB25sB",
  "key8": "28NtAL7x1MVsoct9iHdxxqnFj7vQK4oWeYXmVf8xkofLSgsxs6CeBc8ttQYf82n1FWTUVxUDfVQ1AepDnp8oscCt",
  "key9": "qU9oZdw3iccyZ8DSRVoSKsBcghDkx5LpbeZRV26tkiL5ezrYPGHs9f37pqnqN5NTBpYVcdwXsmbW942CXc432i1",
  "key10": "4HwveC9gTjnMXfDH58MPyxHngpprh8cTAB3L1xPSSDRzXKbuwDWtBrW2NZ8TkgLmSgVUnjdGWWqyuD7NoSR4rUvZ",
  "key11": "2vgfFAf95DHw5k1kR2KUttvhYL4xZemQPf5jWmgtyAE6QEkkkqFvTs1HvpcbkKU9ypr4yFLYmZnd24A3AR2796Dv",
  "key12": "2RfFUSUs5kpVcPxMXgVEp5pDDvERZekRdUaLd4rrAwRbVJDjTMYQ8H97sFbBbEUQTfLg14yQj5tvYzwcXosFKZCA",
  "key13": "5ka8SYYZNCAmMKRhjNtit79RGQUdXTN3oNjWc8Wmx5yB4Fif2pSmiMN4bph7NcPBC7gcgsZH9oTjkQud4nxntfoT",
  "key14": "5HhGHjBju8AEkMruwZ29NCyiabr2Q69pMf1PE4BjLgSv31qTc5QxWWwedYVfSgVyprUNb7idfWmm4WZK3dDBZhNM",
  "key15": "48chXvY9dH8oUiJEjTtMJ9DS45cyYuYHjT71ByQo5THxBbAarqSTEDjdhUgR4jXmVgDW6qkmYNADkE8fwVrv34U7",
  "key16": "4kkhPvbKRA1CBEnDjKDhrvJzbY8FtGmccot6yGtwUNWzgNeYVXBx5h4mj8oxm1PdXk4npPurgdTXFTzWDDQBW8HN",
  "key17": "aDF6spcJfo3DmQv7uBXkSGCm1GBEdrBmzTDBAsaw9MQpJ1PEAEkxPpL2x1JyxbQwDdpbbqQvA8EYxBPCxEL4Czh",
  "key18": "3eDunVRxnwRitdfFg9xkmHzLHGtmQEEUzmnLtoHUQTRnT1tMdaZ8ZqHth3LRuKgUPrbgFuwai9psRfV2Nc9PMrkf",
  "key19": "qYGzevzEzCfMdeMamj9XNnxHD5N62hEjRFVfK3AoUgZU9eAYRBMECxB6Cpq3rnB6osRRfNghqq69JJEsd67iTNC",
  "key20": "44CXoWRpsG1KLapYYkWnm4sMojbZGsLRhLfYebJo6gw5P8oEbW2yQyqoFekeXnvvLadk5v8jNzxi1GAjXHC7pa4U",
  "key21": "4mpLbEqSziEe1oh8WxVr6a1NRQUkbx5YEgfTHBUyT3wtaK1JfsbEXZR231tp2TGYstojF47m5FxNXNPVxJTnCxJ3",
  "key22": "2JNXHxfHEbH1VsRZYF9P91bCspujSQGpd69rMvvsv4iW8Ds2yvV8FTFEkmRwbujfJhfHwbs5dyHi34nmJv8YUJ1G",
  "key23": "5Pbnf1LhQjSd5exZWyij69LA983ufqRczJBRMkz83guTj2sZYUCBM6CTHqVeSq8hkvKFTnDkNJTe91zxeo9awH4o",
  "key24": "46JSqJ4rP1BBvopjfKtJN62JnYzQqf6JzU3sg1HwUdb7TCg7MCtwEUKZ4eiK4GHEbJg1zgRxvGa6jXhLBQaPP5Ro",
  "key25": "Jt5mCkeCAZ78BLANoKfyBpHosGcENdgUotVq9cr4xuRinNbfjqQDcheGTTukPk7hMyF5pxEsiM68G7cDfCqftp5",
  "key26": "3ja93RwJ68aj3YzK6VeSe1We27KVvt6HG5dFhuoGB1G1iNEdbyK5mAMEMJ18jqa6PAKJF2kCrzSbLKgXWtRs1J7N",
  "key27": "4d54AZVbkjZ4PfJ4qfyrBo2Ma5TSwNtJRbiruQqnqA3m1jptRE582oPwR6UspT9yG4aDvVDN4JBu4hVAFoo4Zey9",
  "key28": "uxCTrsAm6JKbw2XYijgagCaXBw9q8E41p21M27e1UQq27roRwXUtQzvRnWSXkZCFL6YsFL7J6w6Q8djYDCsPKqM",
  "key29": "3aJsK4yUmRixbTU5X3xBL2YTjjZQEjTGde8r9u3CPx76bxCAkzCnAXtAoZFJbv7g5X2nsmffFFi9RA4TGN2sHc1f",
  "key30": "3XEHnWkUuXeTmFbJWe9RHSoSeeZfrYgTs1RDzifmfGkBP5qLpXVboZXS2cabQ7W1Mgc23vAjS3vQcer4Xt5n8Ng9",
  "key31": "k9xqGZMPSWwfFCfFVqczFpvKSRjGVpKUnoJS7rU7SN393fAUi4poyjc6KxKdE7tApEScTEotrwkEXA6HqM6aPvj",
  "key32": "5GSheaAAxPHhkcWDgaHyka3tHi4Cxuugpd339Z8NhESVMu58SbWEuW7pMbygEL4A3fTWXC8uGDz4CjVrqBEFojP1",
  "key33": "54AFCAHcVnq2qs7Uq2pK5xWG6FjEzQc46g6kFy1DHSyCEtdUMu22gvcWQ4Cpc4krHLW9TZZrwzqpzLa9Ebcvjiyr",
  "key34": "3Gcq4PhR4jPUFQJ8hh3nAz4xEtYSWnEMvKmUkts3SQAi6zBuS62gzSkVDsgVwn4Mt3FEZe4CuvrkMeEHk1Bs2Ac9",
  "key35": "2uFRBqqs6Zu81TvxqGozTATK3v1jdFUtrTsaDrenCpMNsZJpj4DpEf8VFJ1Xnndc4BK9ppWqqDdpgDhDQ7kqhGJ2"
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
