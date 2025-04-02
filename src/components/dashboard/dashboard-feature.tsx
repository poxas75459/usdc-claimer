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
    "RKR6FAfZ8DAoSHwQqUMNXuFEeeUxrBJoB31LjPuXzfybHRLwpwxicHWo5cSzMd9iWwfjJaY9cP88q8DSRGz15xM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3idRcB7ukxymoMvUoKHQ1NK2P8NHE3m3RR2SDpvKtbh8f9t9Vvnz9MdcYk4c4TBG2282uLPq9Lrf57XXChAgiFdj",
  "key1": "27vEqG5KKsZ5cPjD5LYkuHNr8LMu2Fn7Rg4s5HJ9H7EUxLAEGJd9UWmHR6PuN2nC67CftrKg1Eux88PwML6ygK5K",
  "key2": "5pyMPkCDxeXcsLEXNu5Gfi5T3Pb6MG5ru9o3MajCfVpbG6DkifXS6yARpWkrR1xZ7Hwi5UeTtVpv1oXcCvWWbMFs",
  "key3": "sWYeXhkCB4ARf9ErtFwxbTmnK61R2LfVWMTJr7zAmzW3d3u3nDDPt2ztwX1V47XFTVz39Kgsg28keMb5gpQ5bAe",
  "key4": "4PL8LvQk1ovzP3Y2V4nPzUZeH5omramnd6K4dqb8xcJyzjtZAG8ARBwz9H42AhUAvYpHRsP1syijSaPyhJAZmfyH",
  "key5": "41NQvybxd8MPMeLKKXVe8yqqamzdhSznNZPvmUd7QaxgqqhAuq8LGuj32AMVwUmuULx5Mq5SSwkfzJstnUqpZebx",
  "key6": "4GsdV8jRQTFDXhU4Nn1SKGKrQMW77Y2ADEqHyPHHsVG9WMNrAeWDqjCoAuNA6t7yoUcfa8ApE4kbs2tqRCRhR1gE",
  "key7": "21wYVhZKVREsehEshkmgRenXLaHW7cAHEbdso62v55RDkGMJavzXNyh3rduvjQ2T3q386w1V69UmdPBViSzDoNHz",
  "key8": "Cu6wRdU2Gvw8qz9hpDado9eiArpwjVCerygQCKo6N44bt9wAzx5KWWz55R4RD628HjA7692q4p1JSeTKCYDmjDG",
  "key9": "2bS2bANWdeokKWySVAroJvt38hvKpTQDrtUNeLqWSvLgokuLEFTsUDdxnfMuWCYdspLJUieLhRHmBDcedrBLPnoy",
  "key10": "C5kxLF8unn72bpqpwtYykTLLkQpoQ2Cvvrn3ne1A9hdae3UQMRpwLtf8xgm6NzEyxapzusdkUZjTodepsmbpzpb",
  "key11": "4utTQRjq6cHbxA9iksJ9qW4skh48KTLcs4HCJYfV9FFQJ9nrYhDpKDyBcLpqVEVeF5yzwQaFXxYdXEjcz6Exp4gm",
  "key12": "2gUtsDpTrmKTXoicSFR1eko2mDP8WepfFBZbnALssYhkPP4GkbcTenmTbCWSZv2giUC7wxxGjKCpNZwTuDAJLJL1",
  "key13": "5zWZGEAbTven71tAsRMYncAXZzYEJcHdLyWhqxHPYrhouAt1c7FYgDX6faT895nX795zjQsXNggvqFbSkaUfZNY1",
  "key14": "4AeeaE8jpNKn5mN3eBsTeVnFHy8PSH4SV9c2JLUDNHb5FekKUtP2WLmjedZDtKPfSDhVJZC3iZEQDAHdPptZ9a1V",
  "key15": "3DUXHMup4GX5hwW6hNeNMfCAn21sxRfCJAZJgnp6U6LqFBg9An3uGAqditCENtFYzMXAcvXekz6NBgMXrB9UqXfL",
  "key16": "5mzfka98H12PGrXAa98A8axTEeo1de2qGssdisjR16X4wDyWLb8RdR8rFM3QNrwjFYPFa3ALre6XaV9HZKYoi2cW",
  "key17": "4ed4oU9mD7dzM6LFFj64Nu2dTQ2nTZdBLkJpTkedFjZkeajar8vJLQuH3KaqRtBLktnWRHdEaYknfyVtA9ja3ss7",
  "key18": "62btGpS1x3RfEJ1Pq6H2rCnaUTtSvUadNBC7sm6UHqQLGoXBxtXGvxWGCy4XcMfCshQQiixh7mrvXR1Lh3MBrtLU",
  "key19": "4SYL1WcoPYU1xDZNaoud7L1gB2AtzVcWuH6dtv33He5wHYkxJ4m5uADFikABLWGPsVuQVBVHn1rHZrzPxdxugnzf",
  "key20": "4G2EYLkAgCKxLpXskpyHCMennX3ySZLFiTAystCaHaSsNsDdYKMT9yG8MpAfYQLpiBxJEm4GC1bg8qMNR6UhjspT",
  "key21": "SLat4FTzYWVBNnrzYcocdLoZ8SG2eQPnkETxs9BkJBgqSa2pxGSa71NNmRo1Mo6anBDFBfub4Whb7zvqVPy6H1k",
  "key22": "3QSmBqAnULpbBvYquropdv1AoGNF49Kwx31W4s5GwTXJvyBAJ5bVpsK8KfiSkB2Kn7sY4xURCMBKbRm2CqWzh99K",
  "key23": "4nBCkwzzZpq2qPYW3feG5z9pdWda6DaR9GwtPNE3FvTrdTWfBTv7Xdb8hoQbJRLyGJ3nyeT7vzA8dy8Mnis3trf6",
  "key24": "23apb5EszXjCiJbsnd9NyPKJLLhqJJ4A4DFWGxrSYMQa5sr48zx9K1RRYUPBoHJd6Cjxa4nyyLQNqmrKiWimois2",
  "key25": "5hHopnmX5S5zgbV1VcCz6yiMBEQD3Rp4tDjMTimtEk5g6bztUysrdM87JGdtGdokZ9N7KABxsycECrQMj2L7ayNJ",
  "key26": "3DEDChxbvAFwr3ABTnhiYcWMkxi2c6JXTGopxCqBtnE2Vau6ihFGKvLGvaVCmpf9bzibsSk79wgjYepJHMXeZUsb",
  "key27": "3XbhChEqaZ7SHgnxNrLmvnzPAL5CJaozrZMVZU6onMasBQCq5yGdxKrba5DxEhjJSt1mvRoMRK1AwdzMhEcrTGUL",
  "key28": "4nPJq7rsBvyYrJkX9fofakNuWU9TvxiP29rjyEFRchvgBiJNcraBpVfUC2Jem5Z29o82JvLEvp6SQn3EcHudwCZ9",
  "key29": "4UT5iZ9eMGpLUHEFW3chJswsrLS6CP1UGJBFHQDG8mSigrutL6gszr4mm1dNkAuUg8SKW3CWC3GBk1kEUetRgTC3",
  "key30": "2bUFmMWeSx1pbbuYwsQsRos4W5t5gRUkjPXp7gxKvj8e7jtFZh5s5LLYdQYNE9iYA4Hij5RmfXNrkezQ4wTDZ1rm",
  "key31": "55xCJS1gyF1PNm1GGeLsyU4o2zKHpY49SWBane2CXMU2gJdGHDGjmDYbiB7mb6YDrqHKrDGYGsrkHUGXRBtKGxVw",
  "key32": "SKdnyz5R1XPx3SNeYtR3tPLw5mc3s87pJ5kPFmrP3rpvH9vo7tyrPmJ9DC4xdMZeeSfeMpyrqDYj83wMwbZ3aAP"
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
