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
    "3DVNXR6BjZpdFrdDgacHMRinnZkdSEvM11aBaMZwhAMiptTzkaAJLp1gc6JZgdfZhubqu5YnthpGpP7AewzqWRoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qa5CDygRB5SkyGvRAVpdP2rZm2NsqQdyDmG79CUj9gWKTuRM4XoqXDEriZJfxZcFGhCLpRKHMvAucK1aKrKRPq8",
  "key1": "s3E9dT9TUJVqkymyf7gvTVB7EKdpWAqpBmcP2Cic1Y61g6cVc8jgk8Jg7cv8iHZDypMHVbDnveAa3NWSKWLKZMV",
  "key2": "23mXhP5hAUvWy4whvA65SxcZmDsbZ8Ve5jvxZJwFqwRo7r92naUJcBYTmXWNRjXkFncPduFCpy5gazQX77uCnUrJ",
  "key3": "2uVBnMz8q24oyiWtjTmQvCXNoDfLELjxfbhsTNHMYrRcaKSrLPbr7DfmJa8uNJWwHzJjrffJNHDQwyKmmWxUPCaU",
  "key4": "3hSz1bNcgnMoTZ76VadXanBhohdfz8q9pZArBcNhvDoFepcCqztNDKVCXk5HL8FF5W2rDUAyJmMA7kYHs49tENMD",
  "key5": "3m8sn1KydG7vpBe2GuHwSygPXY2KJEaB73Bk8eU5hw3qM6XA2BaKgNmN9vboTKW34fSnfx8JTzE1mqi4C8VrgUy6",
  "key6": "2mXYkmHBTPK1TgiJ8xJVh9TkNwzejWdxNAqLWYbjZuPd7yDXHfgw4RqkGckziWbJ8ht1YCcLjZrEabyHAr6E26vJ",
  "key7": "5napeipEm8quXBpc9RBCaJrstFfY73aoCwcxtL5w2hMVdPKEAi25AFCbqhrJgp2ZPF2mnNpvW9T4gkxXXsZikJRD",
  "key8": "2nZsQC9DSz73yMUndZFFRwtdtvoMXjMTfEoacxTyn76BwfkkretFRYCEfPanWbicA3g38f1AoAcb7SZkRLqXRGaL",
  "key9": "2v8MTcqa9cxUcQCWTke3Qswo3jrspnhMno65MioecYJKJuQkueEbqHuJ5EMrabmEWuFjWp8v7ss1swR29XKo61N1",
  "key10": "2EmxgkMRPMaYQLP8VrXoEzas89ANThvfGA7xRHRWRw8TXpaGs4ZHzYF2q7YtLtn7PFZvqRngPwBpJcFzCMhUUCnH",
  "key11": "3CjipuhVg3vPfCvdZcHyWGxfgBZedXWZMQpAdxHQsX1UH38p8HEm2dsR9xLP51tb422PQMfFCcKGfEaRxKZs45dT",
  "key12": "WG9be2pLvcYUR4qxxnRgpqosC5vHR9LxUk9pNhwzWfVTL3yL9aK8qMMCMsgRi3AShmBqdxRSFb2D3n62cAvSEve",
  "key13": "5TeE6mmWaznJKJ85X3zx9USyBtPzjFQiMCHEcUNPTMG4vMFwh2N6mT3qNamQfBuGHoXwursJZFv3rrUTMBU6VUC3",
  "key14": "2PHLQLZAnN72pGEZtCjaUxmBEHTDgFErMifE6EjE26Qru2jbVeG46U9s3KeCT9Td4jWA1W4S1XK8i88271jFAAsp",
  "key15": "xyNkjBEiXy7xXX8m9ZUerrtzLapoDYcaUqAZFbZGyJgPhgjn4peCpJ1E8d8sP3Xp7kSwVYrqGYdBsDruE97p3Tx",
  "key16": "57QaHZe4se6ti9P6cjD5PnQUubDjZbsLqSFzruvUGEzb4ug1yE9CRzXEJLDfhfymoE57bestBSEgtFog1WC68FDZ",
  "key17": "5sErK1yki9WHywm4UcyhPA3jvoUJwXLK9KuD46iD5oCw5kFM1XT1Syymj1iDRWJSCg6QWhNkjNafmCaoyHR8Zmdq",
  "key18": "4j66WoFRt3dneYYN8iVqF6gG8dQNQCPy7tRWdrSWiADcsTDRUFrsGSej9zVk6LEw2J2KdYna43XrMBaYSrxBhjqB",
  "key19": "3zefsf9gxWR5EiJQc9fEBEDVqir57b63Y3fkd1kwC3hbgH46unfmLwC6afNTnMEsEoNT7GCdWKVJR9qjriwzBgKq",
  "key20": "2sxrEsfwJUW1FTYcNepiQ2BN9QewRMXCrSYDXRd4kvsbvnZqJibG38vUnh5Rg8dBxpoKyWNvF6dCqoJhXtiKpteW",
  "key21": "3ZhX8VKE6vyUrK3RarQs6FkHimPAFoUB4bmMihrubF5pfp3yQnqAqyuu8jSZ6yPEMiJ45awVPvVmwJ2ZmBkTtfGn",
  "key22": "vrw4r1sWJdzcqnuihndqTFpE7V989B6psPAsHrrkbxCWA4oDgabYoty61TkNoqjEYYTbQq5u7m2b6s8w3Y23G11",
  "key23": "28QwzBXcZFsb65aMS3xV6kYRVNzqNbsEZvLdkMP2Bpucic7xqWMWKXokuXhyTLu7cpazU8Wx2mJa1KLJEAr8umos",
  "key24": "3HuztWePGXuELZjAsogkoDwJjWNmzeBDbkLsCs8QDYSZkKwa9qLa75YWwHwHkjJ2UJJe7SKpuwhKQoUNb3qn72aM",
  "key25": "5gqf3QeHY4d7yB8pC6erTmvodrgy1k3n8h8jdy56kKsWkBG4mRtAtvWaLPtN8qVT2ayH5RNprdtKTinNd5GngxhM",
  "key26": "5HKQ6r5745wvuRJEhdtCw7Vd1P4odPvig9LEefNELDB8hYBeHvLXjNXRCdwamYRbNSjwpGHhpRWFeARK49FSSdM9",
  "key27": "4L5cZ7ZzWShkdruG2dMqyXGKd4rJ8iizr7xVKmp4iEnPfzV9mwuicnrUNeFKvMnkjqy3U7ojdAYvp7xVQRCXoxMM",
  "key28": "4c3h5LN57wT7iaxeAcsknciNr6aSmhrxGaWyG4nttvdXiPRs6iUtCKL9YsGEWMRXu5tXW2Bs7Aoa4JYStELh3QYf",
  "key29": "2pXL2V6F5W1CNsF2vJMUsCVcjCxSsgGvYYo3QpafBugHqvhCWrA7gsX48AEooiudw2Rc6qG1tNZNFp1X2Kdg2uPD",
  "key30": "5A1JCr7ZcB4Y96xiPVDkbeYVZ7EDVsZtv2WkvKT7oASDqbXV83xXFWCRpAegqCF4xCtUUGt3peqUsa66K2RhzKxd",
  "key31": "6dJ4dtvwxZDwrQ8tuiu1qoZtmPtdQpfMiyCEBvx3TWkRAdTAFNF54DEktjduVZByA6KkGW9rSwjtxs3Ehzd88dV",
  "key32": "4QFGWLZ6mWCk12bcDzXdtpWpdp3peHj62Zdjz5t4Cp55ikSrUj8gckSSzt23T45zb6JrftZWmXDsJNzjdvJvTbuc",
  "key33": "33m5XsKy69D6seKysFgAA2cGWXT4RPrsi5z9dRQqXaiG9MDEPNLE71T1sU7mF3uDMBQ99DMgFvhkQzrQPvpWEWmn",
  "key34": "4cfyMiarx1Ubd8BdpUZ78MpQsPyxjcwhjQqh7MvMTuEJXXoHeRZwffzaX2a22WWoGXWMWsCBhJC8F8YgcVGB8VH6",
  "key35": "3s5f6T1zG56t8rvvxH9s3B4G4364ZRFKj1i8Mn1oBHPjXshpC8f9B1Yd4e2E8nDYBT1aixs2XNV3ocK8ay3JvbAR",
  "key36": "3e4yyUn2LL8TjVHFy2fe1BZwk8Wnn6aaNsoY429NV39fDXJq5L9yhq9zeAXef6DK9Gj9mMNPhqY9rHJxxuwq1wMh"
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
