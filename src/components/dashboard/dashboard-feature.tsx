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
    "5bopnjtPG41mqpnaT8z5FBfXR9ZUXdXLLMHqeMH3iXtPHAWW6duehLCxLFuvGkJa2k6X6Vg19hpZnbyMgmeryMxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G3neLvMi4UwcCcvQYQFJ3tzTAx1NrCNj3yoP9ChxH11fL5FdbvPTNzVKm7jmhGUdSmHsLPYezVf7i6fSdq3Fesj",
  "key1": "41eCEDwtGC9AZW16LsHuucEf9NvZeAdhBoeqXTnEhuUAFHeJAwvS29pwafcekKSUNwD5dh7q2AUXbmmQubbqbYM7",
  "key2": "4kCJjsEL634aqJGX3kqPP6E4Fc9Uqk5KNTpoG9AZnJF8uuY99FtsnN7joCzv5pV4pkqvs4F1Evx4TsKG5pcMPKG",
  "key3": "29gqNbReysF2aX7WCzBDH122vMuK6MEF6WfghiD4QsqYMLhAPgSYRfW1SFAzwVbWuFN6mYmhxJ2krq8ujgxR7WKN",
  "key4": "58fgLRqQ8dqnWsom3XPAyvQuJgyZM66c2vtzLFDfLLN4cfB62fGD987oUDqMCENovmXP6n1eszFssxgeYyzNBr5Y",
  "key5": "4qEzdnKoCgVScVTCvr173p1oqmuvRwJ5LpWoNUsYNntA1uLswVeSk4suisnH4kT7vxXBMEqL6wUVdyR4sBmRsuyK",
  "key6": "si22zyFm3CoAm5GJDY6jmPepeBaQGYV6z1BAg6iRYM9sNDjYWwpRLLqRJs9SKKFSCCCH7rdSJk7UGpdDES7N3sj",
  "key7": "2rxEfHmKEuRKDfwi658PhykN46eynqxzJWEHDiWJyofWvNa2U8jv3TpgGFRkVGo63Dwwqh1hZAhojLMQqsWb4gcG",
  "key8": "taESTpngCVpvW3xGoYUdgBXpjNMqrn8yt7in6D9EGURUXrSyjPT6EyvgjdTH8qMu5mGnwnopKx8BjJBx23Ns9aE",
  "key9": "3C5czbSDuqow5PMa5fFmiiw8crW9cKwFDnt2H9NieDt6N4a8J5ULVf81JcbLtVx3HVaZFG3fcuxqU4gQMigMDsfi",
  "key10": "4tUeLkRF1fNqek4wdednRnTcgHYwT9QuMt1zEFCV99ukYnoRzxBZa7mEYsVZfoAsixVLEWAcLCc85eQeUhwBh6Ed",
  "key11": "22cAuywr2iiDTX3xWaN7rrwXxQmfemdj5piKXAnp1qDh12VYm6mnXafus6ofwvAQ25527MA1nvKUpvwau1UZY5Nc",
  "key12": "B8gYbFxB3MBwFhzzi2XT7ArJtvhoxt3f47E8HHRuKfxMi2eQHukS7QXJrXDHxhQ1tteD6KQLiPuYRoUfxx2WDtU",
  "key13": "5sqvfhJpjtJeSZkcTDwp3jWbNF4YwvXkj4KbY7rTkFYMEYeA2iwiQiKrLcTYBvH18FQqTZbmYkLyd5pb6qYMRzaG",
  "key14": "pL5UDGUYtEtJ1XedeT8TfFp7uMXBVmKrrdiRaGFVJyxUyU1GFA9zupLkfh2udFakM8XGVwndkUcvBySLNyensKR",
  "key15": "46xYjkxcWaSWzrRv3CUNDceqAe5gjBA6jXadjTAsK7D3dqRk9QMoh3Dj4HQSUuGkGF1Y4ZhsFNwTM1judPJAwYT",
  "key16": "k3dfB5oMrxXVgfqwXWXfbVwqsekLEXAZ1CnSGtcpYsytr1ZXWjmNqyDRxcRtfi4xZj4NPbTbDgdpMgrd5LsSUyz",
  "key17": "51dRyc7jCvbDaMbAFTGTeCCaKsgJutDYJ1fJd9hFMVFLTrbW1pX8ZPVyp6RYTr8CJVq7goaU95ibgCENkfo3s24P",
  "key18": "5uNbeiSYWXdWTCdrF4cNr4aWCGmtNMwFh81aR5TWEwEEyXvgqvPnxk2b3mYvcY7K4P8VEQ9MrQgFdhe8DcykTLsE",
  "key19": "3HCs26rGrwkPQ1MbwUtebfLK1xK3QRbA3PfjYb3ixaJ7oDyApyxLeW7p4EfB2v41Z4chJjJ33HoH2ceXHXnvpLMK",
  "key20": "2hWMSHvWsePSQeVnsBB1gmtD3Kbd6rnK1Q2HBoBX1ST7x8x1Tca47ieXGjQZg3H8KAcyvyTySRiwsWTS3eHEBiQ6",
  "key21": "5rBwwEicgv4DvJfSb65hSBt37w4aEwtTHiWXwKppyaXwpNSkCL2Ag9Miqto6Uzsz6j11WfLmCoaCnHZkPEMwqneT",
  "key22": "5Q8asaCwVgmk2uEcQFNeNW2uwdjDTdcrtEgiHrNv2M3NByAi8oWsqVuPvEXo7iT7xfp7hgfiRFEspD9eWxjHVZwE",
  "key23": "5qz2HbmBiEk5g5LenPkp83RUs4vBce3Nd9xhAzDv4phDn6z8xqe3BVxgUotfRtqbpRRZ1ZMmZBECQCaLhxFoGcJt",
  "key24": "62obhSa3mUPyZS3ffaQgMS6LaJP47uKkYyV3pefR6t6B9xc3jrGcHfotAM2d5Nd3uuQGoFpxY5yQdZHJju8ciaN6",
  "key25": "22ck9YNw3QXjhuwykA8wt9ACSgNFddcR3HyiLdsV9ZcTKFqmBLafW23wrvwPPDwj23yRK4K6UXbd2moLMSPvs3hj",
  "key26": "vFdaNnatBqa5DHHgTnkY1EpBpYogLPkf6o2nrjFfZf449ce9oXHzSemVwsFjJhAk3eQf2Ybn1rzU3hZc33tnbb1",
  "key27": "4DdAqonHWfdSZ4WAQ9AANghAEPpMh5X1Rv5AVTHzB7pXpBiNZqkb6pDLJ4SVhyQyra6Th8f6pUgPs9izbySkUHHw",
  "key28": "qZDJXJgq2h5YpchiqbYafqxLcoPY32wMSrafhb3ie7GXvv91D3oCgPQELsmeTaFv3QNwamrAgonqyvaCPP4WNph",
  "key29": "XywhqmsBBSAHiNwwHeo2nBVCGuymioGkNuFEjwDtc8hKAPtabm2wAb9Wcfyn2A4x7WxxmWjjroZrsVVczRtAf97",
  "key30": "3J9YDogCZHwrD2BRXTAXUeFqHqr3M31PbGuvTTYqzt2rE4kZJLAZR84AuWPXFrSPq6uusiKv7vwBfwrQJCA8tQmC"
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
