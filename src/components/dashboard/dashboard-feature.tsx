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
    "3H6LP1feJ7xAQdkaCDqkNyWXxC6is1wFhCy29xmAML2dCGTnQuntdpwtajWqiKz3DcQ8PXYYuoeambKx3Z7VWxmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ipHBtc1sBjChVqCE9NBJFEjGJxURRdEvNubSgqjzy9HjvfiZaJVSQmN6tsjf1k3VbZKLSfsyihTPDjV9oYTWK1d",
  "key1": "KH3Fi32XhxGSYBMxJXvekS4BMSzP9DYJZow6JRYhzCFrR8SivAhD47oKXSfQM56HTZxui8PCtW1B9cbQ6P4386a",
  "key2": "5aYZmizzj9YCPn9YKTn1tdEVDFRQuVnxyq9Vnm3w7iBG9rgPSWPNFkw5EWFGgs6N6E1aVhMzoH5JutkVvrp3qjq9",
  "key3": "3mK6JcmAEiczMAqdiSEVT9zyLM2TiwH69U1o6zEdrXfUFQ2fcYoMqAQ9JzKpoAcCCEdn16x1GcyXwzhsYq8qhHtg",
  "key4": "5Ks1b4i4oEXagT81K193iThbsT1RxPghyRfP6pVQjBmLTZEDUPJQLAZu7gge6sYtzpsTmJz942rjmYkM7H4TupLx",
  "key5": "4jFjZMrhJ5NkuUKCmSSstCQhewhcnubEYTZyJsjEh5jur3vab2FHJcit9zGJAF9aQ3VppHpxurvgFFKfaVmqeFGH",
  "key6": "31ncdmcinnpXjTi6ucTvM3AmevdYVLLTVfmo5LyPzp5NQdVRCkcHcc1UvLEsyPSCfoR9SKvUtmFfhZPYmdWeocuL",
  "key7": "4SA1k4paKWDB96pmDFFf7aEMuPRrKkRxShxbYW4F3iAtpVi6rv8b7oPH8JLgrZkhJDWdkRyxjE8dUcygTxtZXfyR",
  "key8": "2KfmaLk5fyts6AncGwF44wd9EPWvCyiPMBbV32kgzU5NR6SCfyhadAdTorUqAa3mHgTfoU3LQfAXk4Bqc6u5JXy9",
  "key9": "2owcf1piAman3tvPrz4eZKj4DMpBucvJcYzogMS4qpSidMVmXA46B2gPRBLYNgYUSRZ4ZrReVCdjiTQs546NRKnP",
  "key10": "3RdzjSg2jLdJ9BcJWhvuBjW9axpMugyBBTthw4puWCuSEvxXNW9RWLHGyHrVds5Mnb8QC344guT162qSLh5yGbEh",
  "key11": "iVjLUstczzKvKmAoGeeYFmxmw9uamZShCFGDxZjFo9TiwkUyi5SrpFqjEzBzFzZNmsJWswMkmaPD5YDW4Y43YeG",
  "key12": "4poNEacJEPqHuiScTze1r8rXDRpVoxXRFHmVvNXojdVXDakX6vzcWFG3Lscbxg4TfJXFtfxiPKgFatKWRGuUcqJx",
  "key13": "4WDgEaNoCgwF8r7MwucrBsyvwG9Fw7kP35UGB8YhJRRykAiNQcq6AGcMiuSg4McfMjBdsUpZaW2wJezCWQCkC6R2",
  "key14": "xoBddvG1oRfSyJEWxnBUbY2wekq5MX6fTaYTG7AZsSGSxH9sHYFobuCJjU5mSBLuLRP5dg1dcygR6B8drHpmXNx",
  "key15": "63wNv63mrpbVdAV7MynbVRYVBLxALPkHLQn8WhEYG3An46K9VeuWChDZGJ7FrzMvzVBYHf6wWQ696uSQRMmZhUao",
  "key16": "5HS6wUSPfgLeNtQqkMBH4R8gcdSWjoUZWWhVwuVF6Tq4s2JbUB9Z2afPsxmdz7Ws7V9k7AT9HUoNhfsQQGTGUePk",
  "key17": "Fvsiqgnm4ot4qmtzznNKcuskBiwZN882N5U2NjSBfmatZdPwR7qPzYjvq2CwMT1wfn2bPiieMWWLMFr2dUAPLXQ",
  "key18": "4tkMY9LvsrSAAiywYvMjbwJ3WM1GvDWLhmmYbMRgEomixq6ySBUQwUN5uuZpoE93Lp4q7FFQiQK8n8WTuW5bw24w",
  "key19": "cz1B3k9KYaLAnKLKjMFPwZW3dYy7arkkhvw1LeufLjV42Mmw265J73C8xHvKwGnFAS7AsMMoeVe1V6SnLhFUBkc",
  "key20": "4KETdMkMbys9eZuba6CXLD7X2q45ZSXUzo3RW8onxH66tM2X7PAmVdAQq7MLw3NTb7dajSQt5gDoeuqbESinRS6s",
  "key21": "4MS4WX43XtEmRQ8cP3hofMd2i3fu63jSYseK2iDMTqEHRF4HMw7TmNG6jZ99s2qa5roq34V4RCb6t3yN9YRsPpLr",
  "key22": "GB2P9yGWVyGnMdtVSMpTowxAgSyQYfTKX7E8sqRtdhp1FsUDK3Ym9uvnbjdeq1awBw3V959PqDBKFJAStzhNpwn",
  "key23": "3srK6vg2yRsPAyZtzCt7rqHdkq2k7cms6oLG9h113UKxApDEm8oH2mfCtnHc3YiFECmEGNtDowuDmBgswRUfg7Zz",
  "key24": "fZZi5fU3sNDf9CB7MrqNXwLkfgHKDPPbBFPryuEApFc8CCo5pQq85eTi4qbtpdX81HGAqVwLJG5Y1LAG726FCNr",
  "key25": "3gAmPe2nW4ENApXXpnkbDF2ZfCwZNfaQ1RzYVfZNw9A2c1wXDJEkVtb2HmAVXspuHKUXBqtr4yd5bSUwtKDtxRDP",
  "key26": "5yLA7SH3tmTBqrPMFjeoTcXEgAr9SJucw3dKdc6ksDcAHmwFSjbK8RG6uT6jY2DYnmqvQ5QouqpmznPrCXzr9uri",
  "key27": "fgtjPYAnU4XkGpADjh6p9H3EmiZMcqSzzcdFS3GLY3qH1RsFaSp3Gxh8ynWqyGrJYXHjeB5xoLM3KWMRBs7Jw94",
  "key28": "4ugM3qxCuoRhWerhpERkRjfbMBRHWyuP9aJfdEW7ZJb1Ry5dNqwe6xhcej5aPFP5b1tgX7JBNosKRzE6sc4Pp7b",
  "key29": "4kNBirPQsgM5mtLsPgoXpu4HUx4bAQNi5Gavc8iLgPXZzAXtg2AmWBK4pGw3MAz1MvsbtPoyWqHzQRQKFFTorKqY",
  "key30": "qsPY7Z9153pczQvMp8eSBBmSxa196iT7SpoPQUE2o5pts3HGZegZrjV7YGt6wFhJYAiDykigkx1fFbxw9ygMRqn",
  "key31": "ZpPLTKCaF9BpAW1hsSUD2S7rREEgZTtp75WpsVuc7LUVVouN4QDcTDyVjRPVXj47bp9mqAQYRNdYFVU6xWK8aSh",
  "key32": "56FYMG31kxzKGoPv4idrAL8K5rYeNZcP2WVNU25MwJCetFmZXXDL9uiP5xnJt5kcrS2Dbb8y3KaDQ8EVKhVm5XEq",
  "key33": "ZC4NkwiMXcvZFtk4DwNohubQjKDqxqocRnkJ7bATA9xWexeowD6BRLV8GHrGd7ZnsSvaBZonnR21jpJouykbKPK",
  "key34": "2PgDCZWJnEJwRjYxrrH4Ca5DHojwgjCNg25iuwcLSSWhgzDTrnN47BLrQRfY2M1SU5pRUj9dXo8QhF8Rth1dmEhy",
  "key35": "k3vBEKATpUBJhZSex3PqWpqMuZCyX7CuJ4wzbZx5vpSDB2okBefw7Apsm3275iMoJHjpYf2pRcPt3z6wW2Hv9LR",
  "key36": "3jyvHPQt1bbcjj1eD3phCzpmxTa7TwbG2aSRbtCZ3y1CY1abNS476sVTznJP7RCSPT8ynPFqrgk11HjKoHozqHUN"
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
