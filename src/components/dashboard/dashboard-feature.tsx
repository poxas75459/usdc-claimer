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
    "2TT5R2ndg2iPqBfbhEb67XHcfvr4boDNGnsZ9V2EL5thfusFn9qhd278RcdkTSQn6QGyLAXRdQGHyoX5LXyskHdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ZVmq4HYFc6gaSng13FGigkiK2iSXTrbuJiyk6RaddZoQuTQ9EKcS43SZUxU7ito6CdhrXewCY3yMAnRzvHKTgx",
  "key1": "Gi2cYQr5FufPyQzcvdu9e6DpRzx12GthPKepw7iEo4qXj51NNFaLhNfdPmpRUZKNNJKjmC1FEBLH22WaW5SV1w3",
  "key2": "gR4YJXvBoeyAvHgf8tW994LeQQL9PQEfJVm2otFKyAUJfoabFetUFi9obve94z2j6eLKzj3pxR8ykmyFx2D3DcP",
  "key3": "4U37hsdhh5tbF7jrXZaFa2KKqZ6QdjoL2dVYSMESveN6Ju3CH4rELZKakbs9jkf1TqEAG7tZaqpA4zVsSoE4SY5L",
  "key4": "2H6pGhHAYd4oqyUFejz67TGbnqPdzSKNJG7A9QCBGKuGyBsZ9CT6j2bYKcKKXzv6QfeJaXjpQRuiy62Dk84hQHYN",
  "key5": "5oLgMrR74ZABe4kqokZ6VzkRpxW527gWDqNHZBAmXAWBUgJ7UeUAP5Ry3jAxNXdG5Y2wC2QBFeCnjsqwKTWxvyHx",
  "key6": "4E8sHybQSoMwzjbcBfuxGQWbFPWaXmZ1bE7gdGTXHTzSHW9gVnLJ7juAA5bkrcCPtCLMQodBZdZAdNCKRN4T6UUQ",
  "key7": "5re6eXh5afHbdH8Y2T8xDGSxvzqKQMN4PuwUAgwcTMDXQjWQWr5FAvT1H8oQci5r7ueLJjpT72HfjmbKDP8ynzz5",
  "key8": "5QLtqWftvSn1cALmgfFBDrh7nC4c46Tvokd4eULPkRWCVTgBKMUmrcY5aL52QZPSMfSZ2U1YjenfAxK82MBn1iZ3",
  "key9": "5erH6LuGrQ991pMWRapipGpnXbANzf19Uk2GxiwcQ859RKiv46J15uXFCKtPtXytDVwd95eLm2XYjyS4DjyBQkTN",
  "key10": "4kR2pNps7Mmty8tXBk2cxtoA3w2ELFH6r74d8C8672ogoGcja2SQcy1r9AbFhZ1deBEu4yhjkERMAAZ51mVa2U1g",
  "key11": "2N1uUqWdGnKERxzruM2ZezgPd8zNu1ByHcWbGH8VmQp6LSFenvk1xpr3bqZWSALWMXJPcqJRzAVkVrjPnrWJjZbn",
  "key12": "5NeEKY5gx3xSRu4yPU1qdojQRJBD9KudK56p5FwzgFLNrLGzvK1B9LkdoYqbaTm2fDqnQuGink8C1f9Hy1VT5NTd",
  "key13": "3xwXHoRwBwi5r8PRjopSYWzLt7fSYVqFeF6zCBNt7d1jovKxz23MszK7yF1AHcB97fL4bpFn7dg64SvcCHZDyT7S",
  "key14": "2MrTAmcR9TBKFWAeDW8CzMWDLRmE4yq5X3JX8R6scE9wMKsekhq18nYocGfH54UT5XWwTYKJdqzc4ZqZezTjjAcB",
  "key15": "2AU65E4ZtVuqhmmJhyyTJo9bCNmGEyLr2kQmmBGBLxTNxMA8ctqAoYs9WpWoHDChN4rUq3WC2uHD7r649VpuCdPj",
  "key16": "zeLYVvNyVU2ZNSYyzQc4EaokMf3yHLARnXQF8xTFznseE4783dnjXsa3zsG2rpwDpmRGcyPxmWLDPRHiNizA5Nh",
  "key17": "5P3LpotFs7rkKsT952H1eGH3mEFhXCu2z4Q9Ah57s9oitGrnq5QNfTQEBWg4x2cuN7NdMiTxHWBppx6XXvsB33uQ",
  "key18": "cTEAeDCKhM99Y31xC7JX9fk7GHRMp7hUtgYboAsArHqpHo1XpmFDgNaGx2rUTYQy2XDqB8c3eVXh1NoEc6eNbju",
  "key19": "239uNBnCvLW457VLiVzywDuJDyuUYxxkiUoKzsUYBjMggz26ZSDvfxQZPxqoyafC56Jnv4T52wkoHVNtesybRKhH",
  "key20": "5yibmgYWwB3eD1XaetejvCi4Ahr4M9ZS1tbxZMCWQUpaMXGNB14uiPaLeV1ebzQi9g4hnUYnw4zUjbDvG8P8zsoS",
  "key21": "34P9WMxnRGxQ7VuZCUM1V2WPNP1nWSb5uBt6QyBcnmX9wH6p7rbDeXyA5aRLksFV8jyH4yPV3GEKW8KHZ6pPFoFW",
  "key22": "j8xk441qtVbQmJ8bVhVVyBzcP6DcBv2c8qSFMyPLec2XMHutXY1EcuvvNSQ8xfgZXJXwJfr1ppMnWLeXY7VQe14",
  "key23": "3Afce1ECTA9t6d6qoVBvR6veqXwGcFsVB2BgeBQJqUp199hGq78ZcnPrkj7zYCuEug9JkJyqGdvUmM99JRVUgkf4",
  "key24": "czo1qxsYnFdomTXnkDxhY67Xv45YaFNaLrSfE3AiUFLSJCa8Gcb4xg1ZsHXvrdq79e4BPWCAMVdLNm7mL7vB2vh",
  "key25": "3hxNhM4NQLBAZ8sYdVwtApRFxBGDMhH8wESUD4mgWYVUyLMnJYouM42esPc8EabryCHizfzKFKwCdKp7EQwHBmFB",
  "key26": "4qDPALqCvryppztdUj3XjQAqtazkbmXtcxz1amPhAj13LKvBvEBtbpoQfzhKcgcBcTEmmX7DDYodsRgWvKks6SQ1",
  "key27": "3WgnecnyLMyxBrfKGwB6B32g59tFLRCcaqncLWajoVfkYsFZBrVCAscCYg8mwNNECWpbCv9Q2sKR41G3xfF1TMHt",
  "key28": "5ErHFtotWs6GdrAjEhUEvb6qx5usiZXmqNi6baVGYGNKdw8ynW7Nu1mtRhYDpsNZCrM1VNaWJR9yhhdpPPXPUjff",
  "key29": "NoiFwSkQx5VazTbdjMbV2M8ETFSkyigG7sJ4zFm6pJcC4WZhmRhjbbLdBFwGA3MArwYjQDbnsnzyBMxspw8Ffkc",
  "key30": "47a6eDMznod3YdFN4SazTg4Rm3uDkFonC1xCk65xrwa4TKnjPhTJwBFMfSYTMBkGtNdmzvcJrK4UEzdqtF1XtP1M",
  "key31": "39CEzMfEFvCyH5GWq74HkWkkNYSxxbeEavT7gp6HLnsyDNc4pVVEhiE6MkBWaJGDjgWxN4X98QVg3PbhfXSAAQT1",
  "key32": "HJkJ61rZusz7sQQSZmJGpkDQKTzL5GAeURbEEusCMmB8UBosEE2PKGvHhgMY4URgmCVKViDvrVrSSKvNW2aLxuv",
  "key33": "4JEtyVoKvhSbDUQrKxCPmCosNG16oNWaniu5whaFkYS5hRf1Vq2bpnsUPd5oSYBudsCdNxbeFEUbyqmoaTgzk8wW",
  "key34": "3wggUb6VgtUe1RC43pGxhiKFaUo6ujk8LqddLwx1nAf6VsRzbg39RAJBzv2rXzATHnTp1Hg58oj4MFCWtWB9JXud",
  "key35": "2NtVgFckMR5mWyMrfwJCiN3Kx2J1Ywof6nhLc6MBomD4LG9kwUyQsug5NPkhtTR2ha4nzQNRoBUtdSscZMs7soVJ",
  "key36": "2DpGDXHTivKE8TyVk4dHvJxiMWbGYKmwCwbSq374Wy74Sis5YqaosN1TtJca6c3zaTuKTKvFkv6uaY4jaoaXA15z",
  "key37": "5U39Axa6RC42pnHsxdJQRWVKFNuTY3sBHbgSguR6JzWabSgwp6j3tMQrm9NgaT984KEzWDSYTKmLEmLhhpptd2E3",
  "key38": "4vm7HQ8R1AhewFR1Ho5XCW2J7WvYGN42KYPCgj9F68oSaUZDEYUWEYjPxe7UaYmnx77BKV1WWpLgaQFKejisTzJY",
  "key39": "61Qk9cyqCnpAK6JTttEo2xyjbPodVMx4vuZhyfqb3oPTpebjwLLVQfkvnKGeHWaaKmAcdgWk6YBmoeRuyGFGMJHz",
  "key40": "mMMrELYE7ZmhrEsdHSdRWLnihFiLettA4eJ4KUViZBzfbctstQ1j1AT4dzASBmbaxmcMKTjtArUkRGnQXXCGZY8",
  "key41": "5u3cdseiUKeFEHj6XUKKBA1ZgGxDtMVe6puyGy4Yk1hF32LCcELJWkpQsiAQh9BCYmMpQ4Cxv5k12gKP2GnGQsfc",
  "key42": "5sc5iCLDpmXqB8szVNFwXGGjaKxKHzRZXxNU1HERYZGGTJ4Q1vNScoyKJJ8KwGT8bmZTUoMs8xXWrViuVEmrAq2R"
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
