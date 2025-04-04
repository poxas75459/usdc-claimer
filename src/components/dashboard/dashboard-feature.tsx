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
    "51U1SQZDBXHQ58DEVPKaBYFpi8SXiV7uFVVMboXkfs3FFbeGproGT9pGh7pKn2UAk8LRN84x3spUqdBofiXJ1jid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xQrTnzdikzmc1JYAsuEvLagsGfXGsAfk1PrhvJngU2f5vLkVQ1th7wZowHFFLLziacBfCVKcYNhkCzmMSHzRbmB",
  "key1": "42MoHeGjkwD784Ev828W9VAhrqsR6nEEuzU533bTegzhCt3MXxg93FvqJ7HzoL9xuSN976qubiPhpcbt8NJtYbb3",
  "key2": "4JMv6R1m79rSJtd3Z6eth2ePjzVGeAqywoHUsEaEaDZXTMw5yVKF7GTEwypNXVR4nrGJtSnrp7nWfL1BPTZTohiL",
  "key3": "5m9JJgYKBe2dcmijG8zc9SPm6mbvJc4d2BSFLtCPRwmAWsVeggMEXQHFsPFExdcCGqZ3eqQCbrSswBAEh5i7EnAX",
  "key4": "4Dbiq2LjRAs2Jqwoqz2XnJYuFgpArLpeT78Nut2qQUeD6KPEEHxx7JtLJzgvooTrv7A4C5SjhgHFAic2LTFrr3aX",
  "key5": "GR3wc3EwBwmY1yEgd6eCPPUtNaowMj8imbfrzEJmFkteVgHYWhqtDvb8zP7KaPP6sMDvcbp6bhUAtxPbmRWgKsL",
  "key6": "2gWrDvBui1mGwoK5KNsYtcHrNebc5c8vPUEsAPu5QWPFGhQypv1TzT5d7TAWFXZCxCqX6pvoksxaqjy9HXRKjXuB",
  "key7": "3skT7V3DMHqtwJztedRbRwegDz8Vz1prGdkKYY5j4csVNzAUSAURTetNjvBNvEFMxNd6dxDoNzcScaHrGQbsCUPV",
  "key8": "dBjFaE3EWdmWVpt3zTMt4CWzfwkkMtmq1yCg16dvx3jAQAK3aEW6AywiouFTeV5q5J6V1aC6kCEwywkPFbg5dyS",
  "key9": "3cHqWC9kcLPfPFaJS6V99ATbL7UYBUiwsTMhup9DY2XpkbFANWmji1faHhGx7XQRuDZ8qWJkvMZMSdYBbJgrX4Tb",
  "key10": "2nxCdg4VcBcVzUH5zKACkh9boVuMiabipMVjKRDEiSHsT7dJscQpUYJ9gvDaQCk1KN9LkRtZj8R7hnpUa9dUnx51",
  "key11": "4grVTVPt9FfQJD83B6Q5UZsEfEFagQxWeKPrN9jZn6FBUSU6UQGwfiiNMARNsFBear3h3DpS6YYv2PxqeVxiodwW",
  "key12": "4JXSu5uFvX6m72punsBKWn2Ame8jvASSxN3ZPhbNrv472K2i48BnrTQbG7X4D5Njqfjgt2DhrbfNG3rCWLEDhg9p",
  "key13": "5fVjPnLW7MKng45HS5Gi4bCrxLHJJFNVDhEZsB1i5ra4hy8jQxpdFEgtPgPKsEBkg2JJxkeUyNWrNkcELdWPX3d8",
  "key14": "KHo9x8dCso1RQzST6wjbydG2VmXm8ZaZpW5DiQj27t9zENQ52B68fMDrDWprb7382GdfpKCNCMPfBd5BB2YPhL3",
  "key15": "4eQBC7WeLtPwY4dhPRbLyHs26LsE12yDkt8FLZ13bYZZhjjyp4j6WFsfy8s4NDgNeK1K8ywhZaa5DUwhMF2QAfPq",
  "key16": "4V36DinEGrTYWZwq4ogeL1WRY2Wex9piKNDRkpBQG9fkMr2hz2pXkCzRaWdg7eDBgc5cAtpfEBcEY1CVUdK497CB",
  "key17": "SMX7sYPSdaZ8T5bYP3pibTwrByL7XM4HnUSXSYrEfboM78yJtfMSu8qgzFhGksc7dQH3aAtwUGihdYCA4AMf14U",
  "key18": "4eKPBrnEXkUe2nhBv25bWpiXAukrwc5fPEeZ3PbQqJSunWeqQZXHrdKLUPg2DmP28hY1FZYxye4rQCcevPz133A9",
  "key19": "2oSCBe7rM1zk7g6oxHLFbvcQEghm6xg3NTCjDAUDqv7q8V4SXh4XMFmhyztCxUrUriR2JfhJXyAwR1sjAzULh7X",
  "key20": "378b4GjLmcrvh8mBSfchQMPdsvGFUi3RSqyvi8qiCviU8FDWxRzGqsJf9iCKWBT42rEFbuVKAc5xEtzHoR6cvCAP",
  "key21": "2BECovk6EqzQmUbosy4CNU47jBPPuTtA4FBAQx59fn6sDgCdfTz4LrNG1AGg3SNHqXhueru2pW4E8jba7jV4RPTU",
  "key22": "5K7knZoF2pMDcSLZQnDBZgkbXqin7WW51nQVniaUDMekdFoCAg2ibhudQ7NVtUWu6gKtGV9Q5eHxajjpaGg29tSR",
  "key23": "xqRhttp7fCbaDrEUo4cs8ydKYzmQ29zxN64N8ShQNkmE6PwSuvkn5ovXkuHHcLXbRxLv1Mzr8gAqzN8aiU3CJB7",
  "key24": "4SszuGrNbopgQFGzxhnPDkVJkGUrkB3KCjx92tj9LtyTknWDjWWqJ17nd24vrmncpPZi26mu224wiCrnz4w8gprL",
  "key25": "2WUhVV5Jnah2cCyMaJHc1L5G3P9EgykNHh4UfkKPHkU3VWWcYeWRnmUBk2onDRXR2cuDf8nW6wJ6zRDJLfZEQQKX",
  "key26": "2ugsr2X7NizXPCMft2SW7fh9ZDNzpLjbhqjaDrE24NUryeXYn9xnfDqxQfk86j2qJKRWeMkPXekmrNVyjVcYkrtj",
  "key27": "3yAXvmdaPHREbUuRgjmSHEEc3zUhkm8GEMGUZa1zEhtRPp792D5DqLz1ELSDKFz8i8fCAtjnHY3by883yqp47tsB"
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
