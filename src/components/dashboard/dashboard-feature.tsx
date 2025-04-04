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
    "4LbkP1h3ozqU6SzketBZED4eJmbguTXnd5yxA9Pt1wnnnqoLX9neACHVinp4PHuxcSfR164KP6ZCfdV9VcnMDe5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QARyamoQA4YqgYoumES4vBNRs1e8f7xCbeogtj7TotVw5rZWxbfCzFatfpbuxjeDNuaTGz7dR79qeP5uo9oD88A",
  "key1": "3CpBeVvCiiR6toZpxQnb6RLnoeYcwHLo4ZuUUnBfnF6f5sZxi6G1vaucRqneEUdbmKACEezTGfDtC7osFm6iQqFs",
  "key2": "wM6qB2g6ibcDYZCDJfGAwejQnL4KrcDBH7RJ2SUUnHPQTcYWReFo2uhCsK9ufnEibakHaxJcPFHcVXAFWDLYGdN",
  "key3": "X2pad4XALZBt3ZFyzMowoA5kVL8t4ikJNE9TXb5GtFVuLrZY4SGWXCZZMAcDn8Pg12GTiA518F7JVG5YWLo4rZ4",
  "key4": "55mGb7Fki6vDdHcazswKxZvbqL94P54Zad2MtEnAqQPqnHkymWqwLEBxhwajBhbSDoH6Wh6m1wywbvUiGjQUx3Hk",
  "key5": "314hGAVbNzvzyAYx9Qm3Y7yJG7XjuNaFBJt7sajmTUqSoVZX7oHg2N6JMt134aBcp8J3N3kztAigNfZPcNKDB2gd",
  "key6": "2Mpz1EVk12z3WLjWP8bD9QyEFjKvxySvjH7NBFYAvMGVo4uz9WZ6WrKtQYXAj3euc4ENbshsw4F1rSt249wuMM2J",
  "key7": "5RHk3SFwSvyWDJbndLqfknpaYjz9hstNcJxquXV9E1vMxNUBY8cF96bYWkV8AxhgdPYj5auzTSmuHoo1AsFg2qTy",
  "key8": "2rJ95b2dNycFRAGeWzBzsRDpcY3x8LpnWWsb2MDqV9K1AWNPvwGCmCZR4MdiQRCDCJkqM6MgbWFn2DejW3c4uJDJ",
  "key9": "mqZdDudhvQivpwDfUR4QtLpSbZvDp9yBg5rkCgMyrwe5UGXcarXKJ3Pp263YeWCWukF467DnZDobCbv4EockGSo",
  "key10": "4Ezs6U913ZcyKPdjJLQevvygMcLep91StVroNZYe9h27KhUqxqAmMzBYmf2jNRPGXmj91ZBN2mBP8YDMtnq5sTC9",
  "key11": "4PvBGBEm3XT2iELsQk2oETaRcMh7R555KhpaQ89PSG4dMkXcHiJttbudLw4tBKrTrnC5Kmy6hZLnAvLz8feUUvTi",
  "key12": "5EDuCLh6x9Px9rKJsroLn2QKNDUgLWaKVabSC1fhsarbXziVxSnNCDb1jgxYPCJVt3uWqnfTWxGenFNRke2JYV4Z",
  "key13": "J2U88saVYZXrL2QLmgFM5iqqR3Kbz3u6GGQQqJhgd6YFb5jsfgfCJkhYqKhEEpiDwNWpPxPRR6nfMQZ6yo2rZUQ",
  "key14": "oUoKrethEuVGHELUFYz5wZJibzDW6EG7BmqLUtAG6pZUfFmLkm3zxLAPsUoDHstG5Ez4JXCeuWYG7ogwQJqtSJU",
  "key15": "3n7kDamdpyN9LDHNtxVbfELRfi7MBE3Kq1hDp28UTrireBfkrjykcxfYve8vmJFgDi5fsGLq5QLfjbTNzfygMi3M",
  "key16": "3dkCWhMfgx82ia1Pp4pEVnDoXqNRD8TSQw8XiduNfkiDxiwLtdhTTR29q2hLw7XR6vKHyKG5pqvqdfeFKTXzo9FS",
  "key17": "37gtAHBwbVaSnuC7spQqAU6v9qxUm7qr3xxTA6HwCK4SCiSGq7vSu8228hajMneRx4ofXbmxKzMrT1dY12oJeuip",
  "key18": "ESfMVwMBCD6wn1RgfozxMESTA2k4b5eeBCgQhkxQFVDK8J3spaSegb9xBTuBUVvUwBUPKdCHY832no47vXAzWDm",
  "key19": "2J3KGkKvMkhVE5zYXi1QKEibrJKyyBfsXFSZDDxvfrDcqV2JeXDjmz4mPw1FqMGVW3Has87txWsQyRYcKY3Xkeef",
  "key20": "3YSs9xs4seYoYaWZB5vXEJPNQRnjJomqGjikKKht1m8DtGTsn2q5rVThFu4eaUAqWGSpHH4fGXBBB6MDQEDmB8v5",
  "key21": "2sS4u4LoG2fVhHebLs2nb9xaDFBdPWhU8Tj9z94kdWmeuYPoQED17VBhm1Niznm4Jyu9YzPWemQovMYt11WusuG5",
  "key22": "3Lvgbq8hwYB6xZRCFPnencSvKJN35Ynq7adwmYQmrCT16y2VAsiFRxrYLnMJ8HEhoHKPWF9xPcHtjhDnZR2MLLeq",
  "key23": "62erYW23DRtMVmVk6EP4qAWbhd4jFVm9LoiFf6P7NDjoWDX1yCFH5FuNx6DdVMZnnaue5EkZsVTzowEfRRZ4PL2w",
  "key24": "34Wu43wdcBMdhDHy5XNGzNJYk2d35ndKbLbrqULui4qBQSKfp8z7MiTy87nD7JcN5uWJxeDkTUMeLgAdee4Qmbi6",
  "key25": "4ww1pFPpg1Nivk7prZHuib88Q7zM54LYP8Ux4q7vwpHYV1ntgvkSHLv24469Kzfwh8Pz9QY5K5x81CQUvBSDaNrN",
  "key26": "564LXDhhNsttMADJpomG6NfpfA9wgJh43MuBXgR7Pv24pFWtTXHb6r9zM2oJd3dMnSiiHtSfY6fQb91Dwd5qtKsc",
  "key27": "56mzbwvKMXWKup5LZJWjAvdxjCEzW4YP16FMT6gaVNxV86nA5FtABGSjE3SL4hAPY7fm7vzipFvPmgMKUMuVkeMf",
  "key28": "5Tk17i3KbGWut5SyPqMFzCahPDHXwSrF74A6k1XnJ2LaU32MAivxWzCxZBrKUc9poDXREYE8k6XvcwSPcdMRVUWo"
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
