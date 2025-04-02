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
    "5B26hHCmeBZCnPa1ci9QZCNU8ZqycPdL71qAtvSKsTcZDmudqtxW5r7XL1m7SkHT23PU9RHpwg6qwoDqDqAB59GP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xJ3XdG8nFEhFjRn49SQuFr7s6Wg6Fn1FGGqGQFvAE9VF7mh1gjRENA7BmnRDAwNWePoLLdRMy6Krea5rtkgXxru",
  "key1": "qkrUYRi5AAKjTurNhRgjN31PthukoxJmu1W48iEUnXkdoEw52rERZcwnPv5tFJEjJQtbF2spzbHhhypRfrcm6sA",
  "key2": "4L8KH1Cq91FcusZQ8rFZUbiMxtfDopSQbHFwYU3HEuZQYBk3gcJbkX7BeGiAbktKrvDBcLFvRFN9qzfWXj9NUy7y",
  "key3": "5yUb8EnXJm5HsdR4FWnLjzekmEZa8wWS3pEqxxDofALUzzDrgdTdaM8pMKZaUpYQXyD778UhuZwLAe9NhuZJQXr6",
  "key4": "36Mo5MqDtdM3GMgukPtq58J7rWRxkM9NfHBe7vjZLt6MbuQfS1zFVvD46FNCgfpVfSKcxC2Qsh3pW925mvqK6aHd",
  "key5": "WQjjUeLr1hoyJYRAtXqBaB5hEtMBWVDicUCRKBggsPp7jQRg6KrhBRuSKzR4QFGrg1LzauPC3dFzUKtyh9JDirJ",
  "key6": "5PuPM1TQ6JsF967b9ARS2kNeBgrSbivS57zCpuYEdVfX6UQjVWyPMBFzXtZKVvQc6ACUua34YDXL4L3aEQwJ1PSP",
  "key7": "Vtin6bWKXkdynGQBJqrSHQhZBGypzv3aDRk3Kba2XozTDHvZzc9d5JkbGBoFTGSXBuEjcj9Fgb3JucJS5nxobaJ",
  "key8": "3x9kK1JyyKB9aWzrsAesz8npNXcQ1aYBzyaUEu9k5BC7cgC9Y5RDPdkhA9cMLF66GNRU7c5uC2fRe4mhN49xvdk4",
  "key9": "621LwCT13g8C54zun9HskfwhXRaXEdErvnWwFbKj49W6bgv8gDZPyspArhXdvjkUqbK8xKz92DipxHPdWBfHYn2J",
  "key10": "3e5scG8nDNfoHMeEg7Anm33FnY2xQ8Rsg1vb7zp8nvcaMc7dch9MxLvGQ5JQP3QuLVQCKZUFj17nSQsx8XNt1KZ8",
  "key11": "BZ42cn3KZVezE2Mo8EXd6BDRhCq9eLn375Aw86QM9WpcwPLVmdKHKyk6N97aLzkLobtNr6FiHLihWNzixqQh6Bx",
  "key12": "4w2mSxZk2wS68vfx7ApxwQ2HRBB7xVGLdZS6KK1mX9kC11CmBvCdPch9ryg5XFnfDusnu63tq4ZRejY5QvwmbZNf",
  "key13": "5fs9512u5TeUi8SBBpzDBbqeD7Ghdfk8YEv9FN5vuvdbNcWpFx2QxXjYF4XmjkNS2sA8tgg53eNidWErKLUyTA6W",
  "key14": "36ZcZeXmV5rPq9vdoNSoyJvw8GNZ2YNVmgxe9NrHnddN36k6iAE4cvujdBe9uFKhofyBNyp8tgcHWWg2XqXPBtTn",
  "key15": "cq6c5BAHKYLuxGKv72ZMgFqt1KNVKrqmVLBTTSENrFSWbfeRgPiDDRC81bj8qQjw8D9P8SdnM3GpmbVjiLEZCe9",
  "key16": "2zcQ6AXNbfxmbPouhTEHp83tAxgSqHffGEMPypEtNbGJeg9Qigp4RJ6hRztYRoGwQ85v8n39BEfKcLqYwp5LsnqN",
  "key17": "2aNB6W77b6gkKyyc3m2zb8nSTEBoa3EfLVPptxRJz37NZ5PoQdS5CJaHT5pvkSS889UBi6RBCPDVFxssdr5ExNge",
  "key18": "EbVBNAZdSuRjZTEzFMFRx6BJcjSyk8fLrHuBD7uTmnFoJbzBQWQ2DUJQZ5fDD7RF8TDucmE64MQiScJSQmtiYPV",
  "key19": "5ow2KybyNsTjL64SKMKCmaHxAPotQuMJKkUAjRt1ne1A3rXwiCRRABQCCqkYXdAa2foKGmW8XM9CH9g9mcsMR6Jz",
  "key20": "4pXh8QzNd3EJTx7MjUSeDCUqLqGCT6hqkKV7z9UQ7hUoD4q4AwDa9jG3M2TpRNrRBnktvnz46LBnZCApQkn6YLMN",
  "key21": "4d6zidRBQzdJC5SduMTTDT35rwhK8vzNS1XatDqnVGjhXw8vSDqpmDaegaw18UF7MbUXCN6aNfC94DmP6pu7KP5T",
  "key22": "3U5cuvx6gqu7XMxkzWmEvqY2VhzMTdpnD15ptEuQ1zgBRyXdr9R6ddCuHWWdrip5MGVVJui8w9tpvzG8oyLpfpB1",
  "key23": "5ewV98pdyKxXYnJgHEahAWEHf2bMB3DdLY6jjoFBfovCetE4YPQtSUj3tCWyQxgZU3ouRAJk3jzRQ5dsNssCdPqu",
  "key24": "4TDYipFTxL8JrrqVzL5b5GoMr3Lh7FhYBJDb2MWTr4hqV3D3FvPmbbKhRfpDxHfB12AAMRAj5Ef3cif6o1MMr9vh",
  "key25": "2BBtnY9qRdk4sQcPfngVi78wyJoKMopQJQLtg2ze4J45bJ4grXXgTGatcBh44r6kWmvGFQLU8mA7FQJZzQNxKo8v",
  "key26": "Vj862DdsRqoDqRBPsfBQMLR6yrvkyaBRXhsadMjp3dy7joDGEPcLKMk4paGHLnkxxNcERpkS4A23Hvo5K4nBjEW",
  "key27": "3MT2VJMQmNu7qDcGPWTdSAu7pEgYtpB7e29MbS9tJ1nvozTnE6hharj1WudKCVNAGkprbkXjX8DzCR5TnynPyzV2",
  "key28": "5SyowuGU8DV9mHeQ79tWm54ta31sJukRtPtkRpN8JVv1qhsjHVte9pKbx8UH75E4ey2zBjwxyXYG8fJmXDD4VVEr",
  "key29": "3mgw4HJe1mzsokPrW8md7wXzJS2rDV4wqPmTkcd1rwJ2W4Wko9yoPPRowDYnDuu1vAMu2BoTV3Kta8DKH2pG52jG",
  "key30": "4rD6hWxW19Usxef5DQZNa79S727RQeK9aQ7AxhXb6fnp8zk3nRVJ4hthqwyockWfjqGt8Fa5btbBPtXJ3rXA7aWF",
  "key31": "5T9jPSUJe4CdKr84ir78LQYd2sQeWuc7pRUAkdoYuw3xJaYuRqNnHwEaeA9u8bwHdsjBBU6tot6QWANGiK24E39e",
  "key32": "3fUtqRu15mZtEBkxRXumhwttGjVu9XCSeJURsXQrruQ1nFELKv2cpqGLK8cMES4KTM3FpPrP54dzukhGow1EVPns",
  "key33": "4ZynBCDCPHM8nZKdCh6NPPDoaDdJUiNqqpi7f7ivgtQZKNDXgR4VprQFKtYyM95adbvGZJUE9hVGreKJ7hcVsqQD",
  "key34": "2X5FxeDn95PNHaqrDWbcXWP2fsj3c1HiYA7NjN7H2a8skJFgwgJAC3B4g77v8xewWcqdRm6Pqjrk2Eh5Jg5q24EV",
  "key35": "odS1Gnoddc4xiVKacWmyPMzuFUmGpjkdXbYgMs81WCNCJ8aMgizd3Jg4BwQH54H4u54xJhP2dSgKdMzsvK5utSq",
  "key36": "2T1Mch3XRtJyHXDnJhWDC3HCbW7CrBoqsj9xrA7oQYMPuNyYXxp5pBu57rwaDrGsdxTr6YeGowfhx13H3SkvKFH",
  "key37": "61mHowULwzE7ifC4ib8hHwMPhKxzeRkHeD8huQ5HhjDc9pv4FcawVoWkwrttS7EaUDy9KPa8AnZ2eoHaMUY27m3s",
  "key38": "xzgzbiisvdDqA7ANDoGg6WFbvPgQrMrrEMpNohWKwdVHTwSfpdJsuN1S9U1UpEdrpHyVQnC69wYqZQkmRsaY8z4",
  "key39": "31VdHacsobxwUpJLjzLgw4JTHPsSohJuwVJqRAta9xkpLGbPHs2SEDUnqnhHeHfZiCAtjoDq8nzzAMU6QVyhpRe2",
  "key40": "2XREfwZei6tpmRDKQg7AA26woVWMp8iWz8doR1zU2e1PKwZ2fUC8jJbgoXudqzmwcM1wHD3tNPKyjNGEtCvhvZPH",
  "key41": "27Af4D5AERpkTor9FqXpzxb5rRPCgCz8CTxjR7YxLdAsSHM8m9szX5DTcLdrcu3YhDX3qEA9ZTk9ntihcCUBofoZ",
  "key42": "42CiVAedTbYQgv21sREaVAVXgEP4PAfjx6TXpQtv5TxhwsKxBMwefrLh9kkvMEAhSqPxofs2PhHNAL1qXuvi4oa4",
  "key43": "64ZMKrgtSxhegbQLAJAzqRPzEoGbSKW1W6dcSc59W9HZCcPFQsY9sabsSoE8zv4RGYo1RFCHwckJuq4y4Hw7FSqa",
  "key44": "5bQrj7hBN8wVpZ7p3A1ixE7d4fRTuV6xyyxJ7ntQKK2dW9S3kJDYLXHL8kQQ7gSnh2SJvX36t7xaLmw7Xn5jKyrz",
  "key45": "5VVuRXcaPPdAVd2cxNfBDbdWLoLoz6rmFD4rYvuDx7vfYqPsZCwwUri7AAQWG13Qdmi2nwRMfrJumiCBmXR8f968",
  "key46": "4p2Gosoq2v7qPrhfdqxzkG7F5BVhWU7pFjsCdQzsae9WMr4LX5r6ykWYbLaMAatVwKXmFN3ix51YrNuFm3hrPdj2",
  "key47": "3SjNqZxr5V9Z4T9VhdKb6R5PNnXTciTh6dUC9mmmwJnfEKuQNbmkp6croGyEwSbeVK6csjqocDaELX7fmsxsLdJX"
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
