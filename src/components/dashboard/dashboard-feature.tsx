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
    "5XiwG14SmbWTH6rVZ1zQErni2RcDAyAXY1f5doy7QcMD8uP7p2sBvqDYHKMZtTiTGazp8g2TdVBC8n2sxhrynfST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZwgFkp7W4FppYEdmy4L4Ai2qHbQh78zkgffmpHhFVmtFmcoqSWQVo8QChzqNqLWceiEUB8HiTurvbwgk4LkJvwK",
  "key1": "2w6LS11FJYfH1ogdyzztfuAmpJN3Jv1hYxZX5La2daP4nigVzzmj2ENSFKwX5PKEs5FnLe2g7rSjXC4miMbpxtF7",
  "key2": "2QsZie2HHp2BqfEC2LpWxQhPEb67Ccj1e1YHq6JdrWK71WjoFxNwWbGTC3TGCoyeaqLkJ1YjoaRuHYFdtYGGMTxy",
  "key3": "xG4a9RGnvd9516BHuUuSUWVb3a1XiPWw48ERXjMsq7iHnkef8DckDMW6sLSNhbmU185LFiPuszuQ7KtvS7ejZGR",
  "key4": "3unU9WhsdSuh4iZ7kuxXSeJmAWuSiY3YGNduhfLxzW3pW5btC6NQQLuPeU9ty9fszDecgsLvzg2bsNFYPN5FP9u3",
  "key5": "2rJ2qUqASpMVbXMJw4RbDUnvNSb8BLY72SAkdUaRA8Edx7QkckLcJg8BzYYosLsqAvvgjmnCgSb1VSwZik8qtkmq",
  "key6": "oHkwz4gQdt2RnSbrw7wxYN71i4ty9LiotmPjjHPMmFALZuuoS2KHjcRBDxpwk2Fe2CYQtbVtyTSrFbJZBPG6jrx",
  "key7": "224MdvZwLw17VXz14rs3oRtF9GTVPUpiBpLFJXsPvQESv42X8qyBf6AcpMXMoht2VD1qx6HxBdntVXwJoX1bijJM",
  "key8": "5HebVpdst2ioNYGtJgfHuXJUk7xaME2zFs9kqC2iGmd79TmUpkPDiwh2bMKQd4tfNZm1zHu7Thwkf8te5jbDCBUt",
  "key9": "EipGXok24d9rLC7ydKuV8UwpiY1Gco6WH7A4GWPedxNRQVeDZfwanbuRC7GSEJddGugPzydzQdFWnDXVZjBrzEf",
  "key10": "2TeBsXsSHQ8RSBxhpQjfLsnYXM9Je2G1AbEStSDW3hQy66jvXuoop89nosADhPeHLa4UFBQnrjKpXhqA2VSKgqmN",
  "key11": "3vpbWiqCmu3Hd6WpuEi3T8BuDskqxebSjjokn5oQCycnDGXyaiAHcBtPqMHZBbVTDMzTRzw6UR3hzC1z6FgM5CvH",
  "key12": "2j4hUwooHWGWBktS4stcA1eyUEeezpnWpSV2c5hmtq8ESh5pGtcteeT7yW1EVb4CAHw1YPdT422SDaFcFgaX4J8g",
  "key13": "48gWcnmrgNJDvhCRusWEG9TM7zyovPYLs9N7mo5PFgWTAGcCpPZNCZuV2j2e8qpQ1ZYgtK3r88WUy9C5chHhsutZ",
  "key14": "4XqvFmvKbZLVtjtzwWidqcANAwzrEYfTbREJm5QYBR4GPuBYjvDdg2YDQoE5SScBdBv5qMzSNXdLzM7TFa9XNAPX",
  "key15": "3dcqnX5b51DYHtwjTTps7G1mLAZvY4S1zhEWVRXTC4BDay6RCKstk8Ze1jc5cxZz2S8ySc9fiYD9HpUb6oAGJiet",
  "key16": "5oa7Pe28EK892Xk3wD9aGtpJA2ThqQysged1B2EHTysfGzgaoPe7LYMRxL3KhdPPeJv55TxzYMCWWp93sFdpLDek",
  "key17": "vx8zyRGnQ7AVCpf9kUR19d1Bv6hUeTu5EXkyRjqSvodj5pa7zpMGCiEAZWNJtLhjKe5qGQHzb18kSBdAvS7UWv3",
  "key18": "5sFWx54vvnRukgxzLPEP2Xho1k7TqsstXVcmq3DMBueM1uEo4Gppe3FcGNDoBetcw1Yuj9JXPEepL1WZ1noujsai",
  "key19": "34pHpStAs7XQN1bvFiToyWkHuENdnhj9dEatNESNxUxoS2qXufGWhi7g6CQQoo2eDCE4EiyuodESJHmuehXDZke9",
  "key20": "4L3hEKWgSLZ3BY9uY4WRQZoqpB54ujBtCxKRWEGRaNoZ8aWb4ti4o5fmPJzeWgLJCU5kim5iEq56WWDasCqdLExw",
  "key21": "6R3SBgrM2H9qtZqbLygHCkN56HEvR6sWgPWJwucH5uAGMpiRKe8pdQhzr2cV4obhPhYsbYueXbzqNYGY5gb1wRQ",
  "key22": "4KrXyJ5VQJqxpPvWghvoNFgXjLRD2QGWpvCLrG64J1YZ7tvzcwmsi51CgkinEAUEhGt7mpyx3rNJeLK7VvaL65pb",
  "key23": "5TWmd5AcvtRKJLf3rkNxZvGeiFiXz1cSvh3knJQztSbTHTXmTPbo66FPacg1PUzfLBWqYp92wXtttPqJX5tEbPZx",
  "key24": "5MqbUqupcbKNXwiMtMfaJnSWvYeXxj3mSKeDcqbbaEAZqTyfdTsJeLcywYjtofUjoDJyfu61axCgZK1qtCTEicmf",
  "key25": "3CiMXNHxiZC747y5kcrX3L1weTqqhEtWARjmx9pDBuJa1ZpCvaYMx3Y3Mov34kTQaYCZUtLcxxadRXonCSMFYwg5",
  "key26": "4bG59hYL32yWCsNGZVTBhgJeRFmwv7iYtmkiyUGVyqgN6e7U6ERpJXbXHnhS3yb2sEnuKQoS93pAwDuNJX9Vnvfc"
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
