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
    "5EE8LcLZje6LpVzsWXtBpJxpT6cxzcmbZgaxn3SjYTAdMCLgSNKmbh9QPPxdt9jKJK6Kaf69qPGCZkytT7dTGgpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vfzzg4KVvcNZBcLE2Woe8vGzYsCJ4zQY64yPTUeQAUuQBTcmzw8ZnBweZ7mNmo7B8ZSTchWEYrFuMAiT31ktNXc",
  "key1": "4dMhqHXSViQTfSFx9LkTutUmBpxWxjQnnRjrmtKhJ1fCjMJc1ZvA22Lanj8RMvrDk9i6CobsH6BUfcQntdEEZNav",
  "key2": "5coTiGkju1PbknnSZdHNrpX2FYznZPX2F4UKYncLUBTCe9FU4xcr8dYe1KjwEGw4bdiNixrxAGCfDJKZJx1R3WyS",
  "key3": "rYjAAKZXGRBEBrsBybmmQWZXZi2Efc5frmZdKFZJZdrV7UwJQyDf7ZXiQyBGs5uYYfcsx8RrEBPJDz3yPjde22Z",
  "key4": "5sWHyxhz4ctb4jmQq4XBjvczbse83EmtmUQnj2shM8JRF7ELoHwqndPtnKBygRd9fJhoeftGRSSAxcx4JByCJLtG",
  "key5": "3rJar1Lvhn1PUsrqDfhyauAgT9pYw3Hed2VfsEfiadFcuMinYGEdodiRTgxBcRnB5LFKRmR7FDGEhqbw8knUf3Fh",
  "key6": "3TFAfxA1RzpvN9GoqbH6AcKQWYnhWYsXzt9N7usvQnF4fe3LhVVbFevnJTptMGccy9AuGaiJD8ummRH2FVC3ec1C",
  "key7": "4W916ycVYypDih78f8hs2QMVwhXGiZk5xew9pLc2LuyhR5hManJrvS2Nv8rX1PYibVK8mjAfr4aTi1vheSorvHn",
  "key8": "4vT5teb2b3HhYMmJRjfxPkaBjRwsHMdzx26eQTp3tG2GsuR5A8U7tdFvaH6yvhCrbMfLhTw9YSxX8JjftWq897y4",
  "key9": "4V2oidCpox2BeAzhJ8HYyvmxtJqNe869NVRUgxJEvjmTX4BueXAUGRRrEJxrPY3XQtyVJDX17e5YjnZBFghqLLCS",
  "key10": "2Qh4PY79wJi5LEwmPVpmXhNsfQYnELuGyg9gr9WnLtaRjrEVL1SSZkB8sQXZMF11FqPZDG2JwKJ5SPSAuwLBz9Ke",
  "key11": "2z7JXEYHM7buT41pCshhLnTEHNATTSX7DiTcQQpe4Lw3hZiELReA11a8oc29UVGyXEJSPUQP9JEorhxceKGRk3hv",
  "key12": "5JXLRsy9Zewbv1M1QxcqasKctgCyYbVwXroqT4jBTeJKfNvKsUsABugGAo4akbtjnabV8CPZjZaS7CWZ3sjxv9Gn",
  "key13": "2ZpgUPYUHFHZ4NwbGTbw2FcQJ7EPAdzjZtpdNE8oRReghTJJgjNshtfjJeECdczj87iDfsQqt3bRHNbmEL7UZ4Pv",
  "key14": "4JDi6ByUoahbX2bJSBTHXhAvV9qmRcYAegVftz9D5Ty5QY5NXAR9pUiC3ywtHnFxPSUaK6UuiYiVr1j9csPC6Z9m",
  "key15": "4haUPtkXyF1ozyb9X3XPtFWpbxPmQvr4RYJN6gSc4AindHFe7QzBJZFUxeM1PLqRggAPKmit1Hvj8CFr6Q4vRt6F",
  "key16": "nEjfCYNR6bRqgqAMFt5LqEjZGTS8CgRCcb8y2V3WMBWck3KPxd2mwxyF6TXbCUET1FrAFiew9juWciuhGWsDtgi",
  "key17": "55yRSotatPjrB8V3Yjpsx8zi5CAJdBQkpm9e6ceYNurYRiernQsE4ooaJn6oYCzKGVM3PXpHwgsAG2WyWvXHDk8M",
  "key18": "2TDwjpBNut9D8zU213W78mNPXPqRkpxEQ2KGZB6sEQCDeHmvNt9dA1sUCHAt3WkRBwRQ6foYYB4tH18sXjgqhp6V",
  "key19": "4wDQRUakhEkyqGJL4Q5534Z6g66jhmCRqKB3dMxsankyTgoQaUQrby5Ewj5rYhhdRveRcJHp6tyAZceYiRRBEa6x",
  "key20": "3338cRx64c3qbH95dqJBiFehVRYMYbT3DM9GDLe5ZCZWBzai8sE1JHK6JWrQQfY4b7reQ9aG9GCrpuuTvymJctWQ",
  "key21": "5MU7UJLCKvjB3EjwLxTH6a4aF8Ug6UNAoqeu3X9bfAEMFX2Y2BHEu6YtvRqm49THrKt1NBKFTXtaQDnzMWEcMPww",
  "key22": "2ygndMdESk77DzsGa2BBbGUYuVNcnBGx7C2LwNaqTb5PtqkS3Y1xTRkX3aTY8rdxfvt5wPPEJGkSNQXDzjGxtjfs",
  "key23": "2XDvRGj9Nnvskd5iqq1ysJQZgcxhgLhH71tEL7Sr44cY5BiVdTdqWwNWYEFP94UjRBoUVF8muHy1zyBRgtqHrKYS",
  "key24": "5Q8GZgY3MNEXbssR38zpwjghN68U5DZR39bEN3wyxnEU7qiQfKdPW4CbpZzWEeeTmDvjucyQkoPsw2tujwKDUP4J",
  "key25": "28UCSbSvwR8PnXGWTGrMSYYhCr1EzWccmLjNhvuSvG1GBHMy5onECsAQTbhTGaN6gszhmW1SyUPYM5UEJevixKen",
  "key26": "4wKJ2GYKDnmwYHyZE5GLynNt1GXyRXZrp5w7FBhLEeRo2FbmtYDCNabMCaRRi8LHcyD87pgH6T9dnKvDrVkZtVvL",
  "key27": "3wBidkYFYVadbz9s7MdhaD8dqg5239XzjdMbBDi8s72BFxZtprD6fFihauJsRBuVsCaERMSir5jHFEkQokARavmb",
  "key28": "5knsxWG8xGqfkwB2qn8xRPbLChThdR6eLG52oSVtMACfVztC35z7wqRmgLEECyjN4EjRH56NHFG7bctVohADvnPw",
  "key29": "eu1zRBqMTszDzicJjqzXUiiPAhmHA932X9JuitFHcmUwZNSAtY1XxNrsKNx2JmCyewkgWU3VrJmiD5r8UcuEaXi",
  "key30": "57xXdbYEkDbuTqY9JfdVMTr1Pp1o67h8dy1E5GMsPgJRJgfKDQi56YK9Q7VrFGnwVimU2PM52mNoZoSRhfw2JzCp",
  "key31": "5qGTnZZ82mQsLbZ94uF1uju75AErDP98EW1qo3aZMeLbq2smqy2gqhQrzSqchGVua4ngtXHTrLpXDjiU9gZXpMEA",
  "key32": "5XxVUPBAvekP5UdRYcsgYDvCcfyfarY2Z7FTUfgRopPqFtAn1AkYAoZ3RH93JtaJNtSFhKYH8rqMKCGcYh1ZGYN2",
  "key33": "5MwxHGmG5yXLqpRjR48CsTwYpy41QT1Qtx5YrRJvnPtthBdognomQMTsZsBFZZ4ZXVH1tL3DhyTSfrmD8VRDeY6U",
  "key34": "3v1JDqWcN99zT2XeM4LssTNgPuhU1Lr9oS5oigFQsK4pyhNxSqki51dewRrKxUmiDgQ2SMy9GXoqiFjYWFwu8r6y",
  "key35": "tmZddWMRLooUPu9wjMKJEPEdhgdhZ2tgKCcTfiMqCAAdLbpywZWzrihu9pMgJuuyzAmuzRNpXQxmgS6kgqR1jCB",
  "key36": "2xvvseJB1Wy7hnowASSMu112XeJqDL9HWsdecv2iEUuZpGEVrFNbTjHALjqKs87pissUF26MsssdWobsNDXfLDNh"
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
