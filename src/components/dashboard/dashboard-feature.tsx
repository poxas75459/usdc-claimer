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
    "5L9iRmDkUrcygZEj8SWti2aCD2NpoC5NfbNpxaHQwCPuZ3NZJLDYW1DZ3nofLpQePpKdLw11v878o81UJXBdXm9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wMDUP6JBSJBccgsQFwMUQtQJ9PyfFgvnkYm4Vybt3YigBjRdX51P4Z3rJWL9tCzq4A9Bw9Kq2wqzSsgwN76kAUu",
  "key1": "3q1Gz8yWwGgQMHxpaj4124FoWC1QroiekNsuqAXd2gQXN8T4ETULA2MaaKGwX165Zk7rbe5A3VHHK7Def4PqZeva",
  "key2": "3b1Q5z4HBXZochSHeAYZp9WYxD64r8HD4AVaf16fagcGGtVedEHe6NHcC2SbJfrjYhfihGPR9KoB2HLEiWB8pEMs",
  "key3": "3JfPJTHoCx6x3ALpUEQcMoLPC2FC9oRwXEZqkBVo9m2AAGsT6tLbg6VEeCm6NW29Sic5bsNgfNJrJTyXkGQmWNCk",
  "key4": "D4D6E2VZztHgNG45EaWGHb3t2h2PipTPAAXZs9ebgzmpGZn2wNxA3i5ABkdy6eNHsJSz8JrVetVVKH867EDsE7V",
  "key5": "2xdtVkSRUrA47Uc3JRC6XpGTM37LsA2cGBzYBLYG1oHFqf43T9tfnG9PmUVRupW4QDqsxBSZAeJcmvPQLDws1Aih",
  "key6": "23gr8raG3WZcG5BPKrbyb4rh8ViZBYgqRT6rqLFEGxBtoUHk9jM9z66BztsAfkPFpTjCKheR7ddp9VEtzZRcaNds",
  "key7": "3ijwtSeDaK3RpzLTEeEhWunskozEDkTJvzf2a342QvBYHuzr4tvdi6sUQPsQ6gQ1BCnEqsTLL3ZhWBUTUU3zmegi",
  "key8": "NuHcdp8s4cJEEA74iv1jC723KCXVpwX8ZkwpH5Wr9V9XT49v7NbmgdK7Z2b2JKh4uPaVvcRDWkQZnciribV5XJu",
  "key9": "47bLrfFXRhCtrrroyLznp9p86f6F2DLj6mncaT7RpWjveASqXkocXXCXZ9WNpSRwFBBhCfobwekCPDCiw7FYd23R",
  "key10": "4LRgzWf9yHeQWqGhw5kSdqBvDos3pUA1ta9CaiU2dWs94R5NQAEJuXFFJftRRBUWTFQV72FmuURAHscvoYRcZySS",
  "key11": "37xUzhPHB1R9dA4qteXDUkXwjHXeUvydBzhdMjVGKQPQcqPL5CHQ4qJrWvEgiSEkymubvH2qT47wUK4VVc7tvVAJ",
  "key12": "3dUxc7hq4GX12FPBXhfDpECsN9Sz5Bir8Atw4nAMha5eYQaZy5tVP7DiYiFSxXESYdUxuex6MdyNc92qucGQqKKZ",
  "key13": "5kUZg925kLXfLXiDjU8ArW3mCpJsPxnHuk6sAN4o5VeDWKNvK1E2qgLjPEpow9hWrkWARoWEC47f6X9engcureBj",
  "key14": "3Mnc539jMSvvMWixRYgckyBsV5PnyPogwEhsdY7EpFTXyJinhWKzNAGePV7yorNkaPYihT9pPuYu3GBaJweRHgun",
  "key15": "2WsJSKapKjQ69G3Buy4VQs3uZAnKt8tpLmC4eodwueBTS7j8fw7TqMiAxcu89aT7hTvDawLRA1j6xr3RWa5u8vcB",
  "key16": "4hFSgb4x8g5GJL6PxYF9mPd3WbC4jZhZaiVsqXogBPDS5UGJnyp5LaEt7cfQygAnA6EkBHVcpJ6JZ5eiP1Druzcq",
  "key17": "5oLFPMEnsD4AWKSoJpMVybDxG3MZ4kG2MpuMJDFi3upnH119JyTiahHBHeDLsJdfAkPtYVKpjsMiWiHGjbamWSfo",
  "key18": "VNjqUqsruYeRpUJ4VCWi7KPebBK93jXeESo5msSD6rxZiiqvuCHkXy4Pbj4eNRQW6etUcrdm56ipVnvrMdWN9VD",
  "key19": "23tHpc5wvfYEx7iFJGe6VNkQoU2kjoQPEgqYuuB7aiJbx437D12GotEXuhiQC78ebxXhPiiEFR7DN4qNN83JBcMq",
  "key20": "awJJudYZ7JqbDHuswvrG1bt9GqKakYwpkAiLZoJzEuYVWq6eQq1TXkwbYnbVM7ZVzs2n57tiBAzacFsVNDUNyUz",
  "key21": "2P3nGexSHhHvWYiQrWGvMJbpSKFyPjmc52s6aJXrKQTDEC84ptSCQXDZ9TQZXXoQTdzom7NJ8ofJ3XJrBRJYaETu",
  "key22": "3EUQ7ofkUQefbCwMbhtQBJHahWTapUNg2SQio2RfuGzJmEbw7oaF5zcArrpWAEcNnKJx21CsE4N3Vs8f5TSJHWTa",
  "key23": "2K6tZnPLhHVcQWxVHWQUEUA4PLDTV86QtyJzhH3yP5UNsWLG3dennyetbYZLzLEFstJPFKifnmefxFdo7tojzaJM",
  "key24": "GjYFAmAF5FcJEWakxgMyCpcFf8tgzYN3kUmjtFqSua4oFkQJWEVrDEuZsGT84uDqcPgA8QdfwJWuk37oCbGuHU2",
  "key25": "3tVPBjXiV9DvCmVMekRSQajMAJXbWYMgQeoNPLSGHXGVGTJ9M2R2kPsHJmQQHbnnrcAL4hnWbgAZAfXm53yQjmY9",
  "key26": "2rzrgdwangpgV73eZ4W4g6fpK6UWKMkmHZ4NsCkEsFBuDYJA6mX2muNf7E7P7djxFpz6Q1knvsi7X7n1SmFAi9Nh",
  "key27": "2823sJ8eTQZSaY7sifRxhUAVc6JKzrAUnXtvquHvySnjonCPQg6ZiWRnF9EFuHYGaD6p3bm3x1F2R2MyarJJCFdw",
  "key28": "4uFK5njs7pW5ez19KubxmXsM7rK2G11QD92m5a5AdeiKLgxQz1SyadkdUZFWfbbKyQ9Cp69LFyEKjWfmovatYpoS",
  "key29": "2d9A2uZq6vGfe4X8cykEGfzqjZcG5vHm1NPuifUpc9Yk4vTJZiJEjQD5yPhatXdi7GxHqq1SkDN46mxHZqhB7CKA",
  "key30": "5hVqHYwzypwr3qbKp7Eimnh7w5SyR4hL7SPsanSoZ65fLNaCvqGRbuJ1ELxNDRSqisFCvMgRcKAiAVggfyJVkR6v",
  "key31": "jk9UWjcyWCduJHsMVA11g8u3DegndyUhGDG7mZP32iVjrma4STkbTuVPM73MBWAAvUyavTVg4AQqPdQUASGgmBG",
  "key32": "3W4LYavZnkmpNjbLJKcr7ERZZunpYGaLkEHJzQCna8atryaj48oXrfPGPWkGdJiwsS5tToiuJZZYiBe8etiRiyn",
  "key33": "4apkW2zqrHyMYHHLGML5FgBUAfHzf5YA4GcbT17Rc9UeTgQHcZMyk2ny7kPLknq8hkLxjAznvSaDBBkP6KPq9KQm",
  "key34": "5qDVm8bPsDLJByf2LBLDUzPHw2nkLrt9eAQttU2KYvzCowwPpWEao8dnKskAhq5gdV9sMVfJn7GZXuCnLewsDWdA",
  "key35": "46vccmAxp25Px25mFv9pT1oCeew1CorcB6dNtqvyZvQuBfN2iB6mT38xEZMVtRXig7UpjW3PL4V3awE8hWiJ3DXD",
  "key36": "Xy18K4TM57TeoEuvzSc5uXVJcJzVATGPEwZiwepRiYsGXQAZNrWCNJFV53aZ3hBWRxDKX1Uhfcr5hg1sFs8Xi6r",
  "key37": "3DHBmPETFJmvmD4aKodQq1PF2L2xfEqxj3bCQ7qmP8x7AiRFHTHaK1RjxorZ3ZVyfGsRSL1pgwSz1QxYsUeZMVRe",
  "key38": "36j6tqSJN1tK4kbZPkAjMXMEnFuS7F3r3MuHkC7FvaeQVeigXDNj4VhMw5SaWbfsdstkAEmz9jxy7eWMUCZRM8bg",
  "key39": "DcSwpcBZYn6PKYzv4bYxHfPbfLQppBtuHLCw9fHLqEnHuusE7XCM6LqY9L9szb79wV46YgHaZbdNGDdcejytRyV",
  "key40": "5XbKYTaDN9qkvdeTeJL3RkF7wu9ZaCuxiN7wfE4jwqDwwGqoYCD2j9QWTqqKuz5z8NhPyngzefyo8s2opeJQfNXm",
  "key41": "5Dgz6cnWv8p1DPNCY4HBb27NN4ZPB4tfceNJFGY3139zZqXKYuToasDvi5jHhntf8kGXpxb4LSqExAEJKzZ8zC2C",
  "key42": "4kUMEvUCxFiHKM1WkM7o213B9NFbBMQKcv5r2a6LTPcq2zyq3vsMU7C8qqPmV1xyMmadyUTiTu6iA1hmynEY2WGW",
  "key43": "5jaHHKisEtcmyqJPgfCYQi6JaQNYAoHuFrtDBs8DfajUbUgbzsxtURgPKCGoB8ZJmPV6ZFb5CMkcqMMem6qSveHv",
  "key44": "9PQvCiBd4khGVR7WFbZBmfASynDFxtk36KpHU7qkG28Ur6meUeUhMWZih8BzRgRY69Gm194UMLgMqKX16tYmqnu"
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
