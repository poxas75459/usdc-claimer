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
    "gUNKknw33DXyDrpD19ncV2JNerX5xfLkfMvgGY4U9ogBa97UcRTmh9irxsJYeWLnytYbc2eMrtUbyxDDBc1Mxat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sVb5kABJH5XHD6SJ3K1q6apAE75i66wna8RxW1UDyriNr2Jp2dYy1LAn91unZxGUUPVpB71QNM1PDUvhcWksgK6",
  "key1": "2dJiph3VPVD2hFU1XjQVVvH6KjWitQ1dnGCqugduP97T9YH9wMUpjmMo1zBu8TrSsgjrRvyVdB8tVCh1ew9q2gtY",
  "key2": "2n6Wy7Rqr1urf2B8HZx1Mqkj8FE4VHx9H4noWXKYGmzcpJi8yDakbwGWDxidZuzuhPKTbiZys3u5KouJzJotKnJ7",
  "key3": "4uSkmk1jJKrHLHS48KTWQ2K2YseLnVbT6MGNKNQFL729N2Yx1ZLTbpBxfoByLvJPgnbEvTWhbAKfHZuRRon5yWiL",
  "key4": "2puy3dMVnAUVmdQWfGL5BbcGW47aTVfqvpvGyVb8vQ42rRnNg4dz974sbv3NEnD1pzdsKBfAeuZ5GrqDVW3p6mTj",
  "key5": "o6DiErAhRXzeiPYaN8YG542D6G9hhVnxqWjgtqtrcXVPkeHixq4wfkLNxxdeiEPQ7zEU1eEGj7uwihzbV4iZ3DD",
  "key6": "5TvsMDdqfLJZyrgxnTL9HRM45Pk7wjjd5hjayaknf4efPHVErk9Y7VvepXUvkMCkiv9Umu83iVvFVXqdARLLSS9",
  "key7": "3RVWNjyEE97CsrGK4G2BNV99LMmsEX1MJv525yqYdEutUpX4usMvKS3FPwtnrtPY6Xb37No8k9sfLEzA28Gkvcy",
  "key8": "3f7SuntPaoo6wyWfFqjLpJR3JVvK3DtmqUs9i1NdMD2ALgBKBJUh3d6EsqsTzrFeJEVVA8KKLAjgLGFrrok7mNZX",
  "key9": "3itdUPKDGpPhhhBy4ANzTEuNaGVyBoum6ULFnphXy121PNxsnv9QmS1z5iBUvcjLEgwvpHw9gHdStTvvL73HDFtc",
  "key10": "f1mgTuk9xkasNg13kUmkyoDt6VA6DXNgK75JWdN7D4i888iEW2GmeFK7ZSZRKn6MFb1Q8LRCKWNDHF2xN2Foooq",
  "key11": "4PWsRQCa2nrAwUnCwEbXYg1mjo4ac5GcUTbVf1Dsrh8P86UpDChxi9CogYx8yMaTzKjisT1ENqXz3ZVjMzQAKb5U",
  "key12": "4R1rHzPWtCMA5yCeXxV5cjoL5J4WmexegnvogbmxtKhNwehNWXJedcCGFnffjs94b8yQ8cNqTMfcd8qjZfKhVrfc",
  "key13": "4fmShuhkfvLdekaDGqkhEELLhBpckXdiguYG8Fk4yqWLrizXtFnasQgQigv89Mv7PMCrKmxi5eaXGdgXppcez5J1",
  "key14": "2C7zEkZLRHH2o4n4p3mW9CWqTRUi53Zvdwsa19ruBqfpUWrgL8CvTCuw16mv6JSJqDba8qmYNeuZqTAcTho6o1kb",
  "key15": "5UeCTbc4DUnJBCNGfUvwKBrngfMx6U2edhk6ZkjxVVbDT8VdWjBWBkRZsYx1MAWtgU1ytp7era1uYAgyHcvfgn5G",
  "key16": "AC1d2v1KTC7ie2tDdyAaYz1xQzckdhmwvoGBa6DDnPvwgamyGJdLCqUqrsx8eLTaNmgB2B7NesTpHDhHD7dNzLk",
  "key17": "7p8CAvFw62fQc5Ts3SDmGjAaS5qDUX5cjv7kquA4cqFhSnpYXL2Zm2Etjr2yd2AaQ6KfXVpxiVFyPXHBv5brfwf",
  "key18": "5huoEd9GMLCcHHbzVryZv9roXRqJJMGJXg6bodeD7R4ycSxage9Fb2Q66qp2essDcppsD2SaiG7peD7zw2LqBs6z",
  "key19": "4CkewVJUUQBuskWnQx35rXM5p54Bii1RADK2MeEpd9sgvgaHywGgFbrZSygMrLzzkoPB3xzGzQhtgVtiwyrCfxTh",
  "key20": "2WFapoBS9mwcGKjNsLgvKegV8AVwevDLbynTBiwkr1Mca2raixE4kiNcKa4gbWKtETabEDVgXukZdrdirQSsJMG1",
  "key21": "29YPqQuYPFaj7F4EZoJBBKQbtsCmiUUh8MPr8ukNMQKUmChH3EjkzPEZdQr1MYnoM7LDLAZfGbZFDcTCLQYsNiyR",
  "key22": "5qfv1nF4jpPwYP3BT4v1ooghdzvgkRDrCDku2CxTLUxm5kfK19dizt3jhLWDhbW8sZuJgy9cHqQWupE2ZNVBqeW7",
  "key23": "65wP1areeRC7kEy4QyaUt1YkTftMVBbeebAUciD9o4Xp4iM6kMC6WYaspM9NHma36JbnuFruSW1KZW6xNbqPv51u",
  "key24": "2K2NbDCKtUVs8VdzcTXgEDeAoPx5mJaPFNfD9anZqb3bSWWJSkHnFqVqYFjSsQX4EfJ7ygUMJPJzJXFZWJXHRp14",
  "key25": "2iNdGaDJvprsRoc7JhxxroEWgEAMuUuRh97AwQ25nrU9oqAqaybNffJyjNSwjdjnsYPLb4b5k27YBbC4cu7h9GbT",
  "key26": "43A8Hep5XtsRWkcrY9TXG9RW6ynE5TED1uBDxy6E5y6ZUE3BioW3qfKdeiqv9nHnGxiXoADWmqPjXqu8J3t8r9yh",
  "key27": "5UTqBLWSTdZi7jreC1RxJ9nbNGn3dhXTP2KTdKmSDi7iRJYNBViyRndsaohsUHUsSHX5NdwVaP7Z9UTAM7p2uMB",
  "key28": "3aiPmrcxBHhMwj4GatWpNmAjYecprvxuvYh3jPPi6gSDnT9UwV4DrMKASVQehMvz1Dkd395jvKqzTWDDTLyLp2V",
  "key29": "2YmQnRJBymf6ucmGNGXQya7pbHWXXTY8SgpwpzcEJzvHe818eCERbY6t3Lc45ZkgHRfbgRpxAJ3mW6KW9ZWYUQg",
  "key30": "2wSoRktiAHf7F3fG7cpXFG9siT2R88uRtKnwLhZNjLShMXrmjFUXBxZPmGhaa4X1tjaDwXYgbEcwv8AyKrYAqGHR",
  "key31": "39ab6AiXSArjzvMBRXMQTDagMrG5kD8JH3UeGJWpXcBABS2nKnGpgAi4HvZdEhKmemKMJp5ByrQ2KzgwSUZVZjJZ",
  "key32": "2mPWWt9FZpmvedzLhAPUye5Tx2sUkUbZX6TeiTUvJy2MAL7q5JScJnupLBE42G8iSwxnAe9SFTRxaK8Zzdc9KtTk",
  "key33": "4cKFqXZUR6EnNMatLrwSUFWGxTebHQUf8Tfwvf54vNcimoNa682sHskjqGEkuGGBxd5i7LPdWWgD7SRZu8uiNJ5b",
  "key34": "25E7SqwEP7yTk1kx6PSiHdc6qLaZnpbnt6m8cmRcY8r8Kq5mYrQnA9umXGENSGHQwZs9PHsVzkjrKoY1Cd6KDzZT",
  "key35": "31Hy1rMNuPw5ig7bseDYsTwgEVSi99LTzK3wpRzZg9MJ7JYp92QVoaXTKfQHhQAaC69KVmdGHxhSYs9yc9w3KVSW",
  "key36": "2WBYis4p7AQxitn3nW9RAbQ7TQhVbhjLNN5pu2dCUVwb4o2sAt71Yv2gNUNWBmchqiu7C86ebiDPfWcv8xs2Ko77"
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
