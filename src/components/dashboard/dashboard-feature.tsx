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
    "3Nc3tvTXW7B7W3XaWokxqoEXeHkN4koN5RxFeaWpTzLZHpBZxYKfeMJVXe8wxofTGiPsx977WfJTFqrectvVY1yp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PHSCVcWU3FUvpQarEebZgHaxy7ryxRqrDHCY4RMe9Zjn49JexN2JQFdZqZiJcpfnc8KTiJUmFXxW1NrDjYem2kL",
  "key1": "4XqKJWGdkKapkUJjLW9zAkvBNZcAxf684ytMTKKh75rGWzw3iHY6ie71ytoSmPEywMqokTgziYuDLouppJtRBuKz",
  "key2": "65h4Wb4HZ4HimG3kG56SMtYYKgWfHLMGPYtvyFtQgCeosEJ5iFMxb7DN1yWFVLgG2hCKr2DgXaZtRFSWsXfUMP44",
  "key3": "2qHxdhNYfCwNMbUxmnRJAxqMFXZwyVwpJCrsZNoNyU65x8ukPSp2JLiPQ7sHvEkw21CvHcifTrKrhguPXH6QCdLy",
  "key4": "giY4oMedeS6D2mBFmieNuWykQbXUduKT1ydRcbZ2yCyKhaN63qzP4drcwYsRGcoKfHvzTagBatSyL1D6RKkmTUX",
  "key5": "2Yq3meQTJ5KcZ6s1bBxsgAtDMuNaTyuAjhdCSD3qQQjNFdjaJ3qpoorxoV6Ev6LBptFnZVRzxzmU7i1tmhBNNQFv",
  "key6": "P3zmQu98qkFEr5Euqo1PCo56KhnfpJPbB6D4RnoN8hWAXqg6pmtT4FhdtL3BAbGXpNFr77UR8oP1HBtSXYhSNT9",
  "key7": "5UR35KxjntXMvHdhrgLpxtDEcLqMgAwvqrj6VwbVCFD6oXLaTNqXU69uQDjF41rS9Yx4NHFWYGMFUYsUhZ6ZTG29",
  "key8": "LcxykygCn8cGgYmepKRV8i93qghEjr8ENd4WuFJr6hFmgeqrveBDjocRu9vJZ3pUnp7nG2dyBoyTF1UPjXkG8ri",
  "key9": "49NVJ3SP4Vvpk9AvPx6o7iooj2R7sY9cHrDSSBQsxBah29XwKT7z8yZcMn1XTMaFmo4Frp8Z1L15ztkgoxwm2E1B",
  "key10": "4bfmSkjxFzZD611GxjgF8h75ENKcbSmxLg2hEgRhnaKmSmoprZBVkZTG5ts6ZsRwPUVUKauUGHaCz993n7fhyDoQ",
  "key11": "3fgk6TwUtQZGMkabBLaDv3RFvDzRSMeoQMjxrvg5WyPkfYLT4EhnLKaqgpKPrBigwQMhAHZe7yCFmCeYhcnhi1GW",
  "key12": "62EeCikbqX2jXUfeR5PWX4qgSi6pag94k9SHp1zMzwhu3oke2uGAsw5fZyYZAK9AJndK1SSGX3sU2L31SDHyxAw3",
  "key13": "581R3jpnSCmTH2kTCVDMWp9br1nftePdjp4tmQbT7hKX4P2MVM1VmBnuxLArFjHovAZ9Pr4rkkaKQpvftpTipRqq",
  "key14": "2qG2CAyaRYvwp7975twahS7Dp9WbZ64wDp9Ri7KAYvgAaKcJeuM5kGuAae4oPErtWN53ndkRMeGWnZmoJjbUiAWg",
  "key15": "2eimRCDXoFjDkmMbAsDSDeVEsMBVxA8FutNwSCHhfmS7ih9bnCu58CoqCtNC9D9JUbCXMVVN8qXQLg5KjBkRLUKE",
  "key16": "8hCd3YZNrJuehvwp8CtjmSU5Ek8hCyFzJ2ukzsfSoiLdatCVyeSRd13HMXNBrkW9iaLdszYZSM1LznMwA1NhCaa",
  "key17": "4WqzGf567WCyzXzV24SzkXDjUJsPBFWzrqkJzLvzuZtRh3ESujcM9gzVnfzGJe92PZeQsn5khccEfXQ88eFAaSe6",
  "key18": "3gFmPKRQjLsBxRhBHaTg5qEJNq4Cr9RtCKkJ6bKLf2FRDw5L2EGWjatyeW26aanusVgFL5qHRHr8NshvcveYHKXT",
  "key19": "2xKKTxceKVvSPjUoLEqhPKC6Q1yMJQn7YdeYJNSCPVTHxadeJ3xa8Wd2mM17Xm5zWiCNi33Mjsaqspe2WJHGwZwH",
  "key20": "o1351EAY4upTE2Rhj1LvCzggyXqZxeCmVJ9Vjz8GtJcFTKvjRAZnkcQwYmckLZSK84Zud6aCmtcyJFxecPoAsHo",
  "key21": "4DXoMEHqGqZVDNheuVYMsauQj9rDG3xKSKZRAUWqstwcUqMmBm9XC2wu2Xgpqcq6KE6NxkfFBzK1C8cMt1rDiNLv",
  "key22": "2F3XawuZXwLmyxxrAwtRpx8T65M6tTjXdNkcEXoqBaw7jB7eHRkuQeAt5W2fK3DDWYpQp6v7JKTvUw6WSbiRt8x4",
  "key23": "2tE2xhL7X3QamBThnh3o1s6659Vx11aWU18GdAig1jww9CEW5xKbjDn2wSFvfzqhPAMpAkbbUA2fKfXZS52z1ggM",
  "key24": "2qMvknoKq1VBMYCrFqWkjW5YogwmR8yGbnbvc3fjQQSdQ6ZweEN8LmaD1jQqigGz8eSEDTgN4SQhQ4vATXenCCyU",
  "key25": "5ck2LToisFEWXgUkeL1VWGT5QbUPwdsqN9pDWvNTRzQ49N3hFUKimPpEtQ74nwXQDNdnHAUJ7LpuZu94NXASiZe4",
  "key26": "3SLVthmKxhvrCCfdiNFrmEQVNzdFPskQWrHemmM6eHWgP5JqzqHRx1LZUvEN1paBmmAEdg8Tx4YngE7wuUPMBxZs",
  "key27": "2ifKDqtn1di36YTd2P5HaPEfEp1iXmVLnbnaSz1WcKX1FDbki2PtpLJDHkw6xymtzkzAmJdkUr8K5BGP328VZURC",
  "key28": "4P31NdiGrLzkR3f9AZFmDkAuMdvydwC7VHdyBHs7G4ipMGdNr8QR6yn2HtX92DJpVz6BnATtJ9JJVnrxXKKqtnse",
  "key29": "5LE8YkmkcqhhoHg8zjXLs8Y7SjKN2wMFHJZuEHhSzDFufxrz81zsjJbvQYAzmhGNw8RnVq6mxbEm24KgqdmAEHkj",
  "key30": "24ukYKvL5S8GNv6zTsiGr7ZTkfNHGk83GDZiqqtkKcSyLNR82cigejtMicpFT2cF6DqQUsMV2wzyVJpUbwQRkiiJ",
  "key31": "5XM3BBiJUwqw95HdtjGSdnApi7uW3X491oQ2PiH3CnLt82hEhiQvbsHNiXXvAAish7T1t97LwnkFjBCwPe9A32Pq",
  "key32": "5y1SMEVe9y8bykkVTsxvyWJMFd5tZKxgihVZEir8GQuy7km249Rsc2Uy5Fz7MpgChMF4QnHcUMsuwCdZ5kX6FpAt",
  "key33": "2EtTf2RVi4Rm3m2BFBSWKrAAuoo3VxVSpDaAMhcBoK7U894cfV7z8ebSH6CUZ45qZvRYMq5DxUQoYxawxZ6R3QAx",
  "key34": "37a2w4fiCM3ewaam1TJSRrWbhux8RiENx9MHxKhvSHuUS5TgzUuFMZ43CorJ3AJ1oavQQsDBj8mprFmp32kJwxe7",
  "key35": "L1i3nCLpupgZjXFscYZ3iDNNBFY4bRzA4QDLaBCB9u9YQWRGGQu1G54kGDQRHUe7L9qtfMrN4huLRQpZqctehGK"
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
