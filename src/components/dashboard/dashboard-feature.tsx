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
    "2KK2xxt4URecM24xMLLJ6221iRAtcUiNEZRSykMK6ZKDjrj5NoTRePyFrZui4vaeduwtH9Bad4fX8r6KgAupEgYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kA1coiFzgQr1CH1NYEqQjCpHnxQa5Foox75ScAxVfX99AWnN6jU9C8UDB6LXsPVnzuHjbZu9DtLwc8AZSA5a6Qt",
  "key1": "HxLpSv8A3rRVmBE8KTi4S1v66R1fQQS4xnrhRufnzwxuKDNZw4DFqi7NThhAfLZnmAFBegAaqKAZC7KmLY64XVa",
  "key2": "xpF6h52DyfkZEUpqJAW1P11jGaZUpq2SSrjrHeQj5PdHDA4e9wut4LtSmcQrXJzrcFAmCFBJVH9q4dQeF28vqTH",
  "key3": "4HJaZ6rNaGwZEfeHGk2nc53PQPu7cxjzx85u563WcfEjJBufbHHhwEokENUk9b4XrFGMY9PoEs8vbf65kM8bmmom",
  "key4": "5ddn6pujbz652qSUFAEMJzGo3oTxuD8UEa9jT721pUk6TW3dKbZ9NFGDjuznJRtnyQRiiEQgFWsKAmj7VxvndRLB",
  "key5": "3xieDNTf5mBi8kcnyKWo8NUvkPtSKVQdFA1gcQYxJfrSZuXJ59vrNQNesoNMgmeVzmgcAgzaJtcsCDpiVK5MBC9R",
  "key6": "3mPbc6WGVrgkcGvoaoRbVZGjFXRQZipwgsCp8ft2QyAbzpuvG4MYvoAxnNwLENxWFNRTqsA24TnEDAQHh6WuDWUo",
  "key7": "HvFFTUBaCa7BekpSFdPcW8et3DBaY3tbPxYL3NGfDntW41KZNYE3iKvomMmVTdhh1Q342gvpaHjZqE4fYkZ7Gvj",
  "key8": "63HG9i1WaYaFpoLe6wwgzZagTn7nMS7xD8jSUkf79NrrJNhcvJZJchuNHZvthb6QVeaHFqJTZLZyPvPZXedx6vUD",
  "key9": "4QdoXqvEo7mkNYWiKL3ucnMufaSmNKcbAookNzFSrgWPfPQwHFdmhbcs2Ykhg5qU7B44veERu369nzhSqSxiezhb",
  "key10": "3UFNrmiKJnMraSEbpmgoXYLLmThouUFEPwHhAN6zBYrvQSMjDbzM4hcEYpX9XVZjfqfo179y5AXrGSbvVWLS4Wx4",
  "key11": "549ic7eCDkiuivk9pD7XtN5dEfhrb4Tus6LGZNfVph9hJsrV5pyQxVQz1cFghjRYeqUiemGWdhGfdPKZsEHBm5Ko",
  "key12": "4twir8GpcT9Ys2urZJJerNrn6eQjgSLvEpMRSq6QK88jiU5rtdShDsJvgZyV2CWHFEtQt3ULcZ9hKiPCLdC4HdK4",
  "key13": "51YZb6vSaX2CyuXGpPktWimBVUVqsTbXybnMTYMhFJ2CExWBAer4ZQb9UStBmnHMqC7Xeszw52GQ5GBmasLagqe9",
  "key14": "5RMc1QMDBYyBApSEZqPuMX7mnLFG3efNu9hrotKM3ruuxwRhKDdJmqn2TERp48ppt7ABza774XZdXp31XVkbW8d1",
  "key15": "2sfsFi2MqrorkoskLXdHWy1wAjhM5SGC3bQB16TZWpgGZakuXs95UEhVRHNDYrPqpkHhogW242bfZQ2EcEKjw82",
  "key16": "4UVR9dfzAto7G98JgnCeei8m9jsz1TK3NetuadFTQGAHoseuJkSuxXh5jwunMBJMSk5SzDLfSCZ7aFhaPW6esSvT",
  "key17": "wpVWurqNxmNDphqXCJBpUXQ5twGdiYJ8PsWYuD3KzCCaWmEUMns3Zx1mrR9V25us5Gc7QJtNMBmeVFqTJ7CwTYU",
  "key18": "34B68EPBKPNBhZBtDQXwuEc6SY3vMgzmHUEeUZGj49BMPxShc2HakrDwsaFKXNvuxqLJzWZT2fVjvXw9QEbur7mx",
  "key19": "3EQFG6TYxtbcUwHfQqsyaaTZCLWaSZhxkFD1yQU143GXEEhSJgih2wVvYLgePBnRbPPDJMLjYiUgyjMryHKQ1PJ8",
  "key20": "4aqRewDxg2msuUzsvpywSiPDoQxxULpxg7VvasXV6hz9oDsPji5xmHvwPeVNY9fxgF3bQy7CC5EK9dsyr9bLdNZe",
  "key21": "375yWQdC9LEKTZWVP1a7ruxUpQUcSaQ9T7vZYBTwP32sfoZaNDexGfKBHZe6RUSgoL4DEt22sEJDhjgMExVwPT2B",
  "key22": "2xgbtaSD4LyxfPb72GmK1wZac13KGRNvcYbiupEr298hwJRE5SqKBDxLsoBbwQF2PDMJoFN1VEpgFuv8sT2p8Y5X",
  "key23": "4bBgpKodKq1bU26HMgpL5FqvByDMXmMQ8yjiWaro1vdE2KshaW5HsUVEXgeoXTQz4y5tbZSSpJU9T8Vdc1HSQb3j",
  "key24": "42RDJe6GB7rcZyWS2wY9bRGmDfwFDfrg66wMHp4jm6XHb5BTxKujYSSJhJ7NmiMn7jP1HrXvdz22WXMgmbGiMdEL",
  "key25": "4HWeg1Ye6TH6GE8d7prnc4woL2pytJV15Fdf2B9UGFVunKECb764NbQ3osDaLm3LjoVKFwoK356xqkJvG3fQfkvz",
  "key26": "5mjUtFEwSrBYCdiaSReBwVqCF5Q26afC4XvEApRscGvqq4TmgD4eyCWojfBtyuH75kYwW41ijnNERSpRQGacPfX1",
  "key27": "2CL8zmzxpXqqGuWhRNZFSyyA2jh7R1vaQCxEt736bnuvPGxepwVjnqnBhKKc9mjifQCqEhXNmbbToXs8W2mCmoZJ"
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
