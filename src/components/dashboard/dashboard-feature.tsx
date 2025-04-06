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
    "8q1ZmgGZYPbaqsGUE7JQZ4bwDz2VemFsAigqXLURLZ4SqR1dG6VQyW6gaNKqzvj6eZPkRt21YZMYuvZZW39z8wA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44p5Krs3Gha1pJKBsRwxnbsKBzvqXZ17VEXDfuvzrKnPTwdgRV2KFfpRCnJMFMFpvrFc4DxhPuZTZCpsq8ZLFhXW",
  "key1": "4TbgjwmBhyJGd1SCZiZu3yeW3dpSVWQxncJdWgvtaQ5PbFB4ZWukvzMAqq6SS4gAucPukawiv7EvZYuQXYvUZTBF",
  "key2": "2srwyfy4rHZJfvVP224WKHpzJeuopWPYCucjbDeZad7U1HVo4KAyVxsR29RRxcMdvD4bFhu3gbPox895ke33ZUo9",
  "key3": "jGp1k8oGKvcwterzVd2BdqbpBfG5toQtLbuaqCidvHrvKSC8Jf56UMbBEFLrvtMqmnihYJbHosTxdkKaohy65W9",
  "key4": "5hChHCGQtmHjWvx8fDghio6zKYnDq4zm7pJVG47dCtFkqwGNCYpokm4QkpTNSx3niGwaRDEtdchAgCeg2WVq29tw",
  "key5": "3mXisWr63JhTNEFujmibR8d2HAvtq1tY4fLrGGqYi9o7cPrxcGCkNw462Z4re1qVdwrxtcR37oK23eeL3hErNtM3",
  "key6": "4Ckzw9572pefUAnUPcyKLv8s2Pq4UrLZ6NQx7Txbw76ByyFApxTGkVhNhweQr9AySnvc1rbUhcvNBsSV3ePaf5t8",
  "key7": "3EQWHePn3f7MTxpShcJHYgaUHTcPJDLhNZfGt8NYohgVnLgK2kJfrJiH7g13m6C51bP8BYCJfdeA25CcUs8Hp1Ef",
  "key8": "4ZCLwjep4Z9VUKwjoR2XmF1WZKNNjSWgdmbkizQBzg8ecisdJ1Eebs5C4wwBoLjc94a3vdqQi8DUavZ15uKKBmJg",
  "key9": "9Qkcptsb43KJyn8THkVHS7VS8pucbpUnH32j5zqGtdD1nxr1n7eC55JEFBdPEoNM4ptWNK5U5FCZv9UuCW7WYbS",
  "key10": "XjQSomoSSP37Qr2Nb8L1rYxrSMngJfVPVCKNra2ihvH5CVwCPvHD5dz5heAj7VLaB7grAjxhbLF6kde21kRwprs",
  "key11": "51mMfPU8wXHKLZxxTwoyVTKUnAfjNqxUhPrSTQFD3VfeJUDaqTjHLwSeN2JjsM4X7eoSCGVqW73BtsBBKDxGRWm",
  "key12": "2BG98rvrWGxw7C5S6wdaxsroLJtqLedDvDrE8NCcJ4eyNAdc5WZmRt4HT1ZDsYJujb2vamvynGmmFvC3Cz8ZZ57e",
  "key13": "4YNiXXwCt4GvnuA7HDWTSUspWo5tisWXD5giPj8A7DuyJVupVfnnqp4MigTb99T3MwxjZyWvi8qvmHYk4M9Wy65c",
  "key14": "4QcQJH5jR9cRkfHAeaSbiWnyD68Efqwchy7do44eT85H2tykTQhZJbkAS6oDFVEdqBET87xYXVBi8ovneUjhYgNA",
  "key15": "4VYhE1gRaK7akr2hrjtUyk5epGqcoDgjxsoUE7mf5m45DRVEdvFEHeD4LMiPFgTsM8MsNKJF9R7zU3k2oWRi7FBm",
  "key16": "3kDifyAaBAa1CTYKjwuSPXwfEfvSrKaMhE7NheXZkHuDA7cdMnaii4biWQEx6HW5ewkZkyXfwAGcUHPBAwNk5xPW",
  "key17": "2ARA1ZLo258UCEherp5wJPHtqrUYQ29Ein1BdLmC4yvStTTYWKBRDyUB9HjmdmNYHRYXqKPQCYeitQ4yrxxy3MGz",
  "key18": "4wAyPjc9AZ2nd3L5izD73mJibtVwDTw91csapVQHFSCWUJZCMEZzWpcF9eWJVWHFVSXcuygLGQHgWiayN95RZCJ",
  "key19": "4G9Me8GXNMdwYkNBxVZQ79Eg6NMhJWY5renaFQMMCb57kBKSvkQ7JCfuyGfG3ZUUnQcibLJ6itiy6qVDoYx5ScFw",
  "key20": "4W6kAZa6tg45cZ8ngGXfGv3v8cEDDn2L7NYqoEcsNCnrMEpL4nfjzCZhfRXDHk9EdbHFn5BWhP8B3ZtAE2umpN8Q",
  "key21": "3H8uzRiSyrxcPREHVfwUUw1YKC7hyjbDAqGq7iKYxdm6Js56vjoK5ZRgcmmvJpwqapof7TPANnTXeikWhF5d1JTD",
  "key22": "5YkVe8ejzmDzSwMov5sW5xoAvZWjMKvSfxUCMA74kAbKUBLwXNyDM2fAZ5fkSGJHWoZiU1Wh9wBN4dYfNH7h3YYL",
  "key23": "4dyQvAUVbQXcnVwESqYLqqXZoNqqfzAVD9Ax3F8JC88mTF8aKQwoDA2UAq58dL2TD42YwHym3Rkpd4QEW2AyY2u6",
  "key24": "mNGYLEokYDW5FbiZ5vFZCQ77hUQeySZmpnoVBFoYmFsUP9hNrcX5m9wjj6k4u2XM2hLfiimMr448PkkWfzQM4rC",
  "key25": "5saEnF3F7WX8HzCvSW4UN2qR5p9pvftcKb4TDw2qnjSbsR9KdCgaEM38yN7ARABwJH34z8xLphD4gunbWDMCVuiG",
  "key26": "4HBgPXm1brrzi7iCCBwwtctdyt2WDnrBLXUNPgUDUnRVrdVx1ZkwNfa1Rt5YPnF7dxKQpRHGFfZEzoqeDguATNWy",
  "key27": "27f1ppKF9CpKYx8jSrNn1EDP4KBWBPjGZWxjQAjxuNozvTMnC3cbyrdPR66g7tspbHVUFZAfR2QG28gKcXQ6fP5v",
  "key28": "5n8wKcxavEoHpyaPK8dy9ATigjhaVFk9N1J5FfUKaBdjTFS26hSqGyhPKZcRQJCDFn4CRHpygT4DfYUWZ9ATT34m",
  "key29": "3PLtasvqPo4gETE9M1TnWU83cYx8DqCwYhfj6jKRtym9KNMaKev9KveTNbeLfAKE1N92YCL1fv5KBn7SoUNaMm9q",
  "key30": "5nec1g9jrcEko9PoYuv6tnEqq6gMU97qdXLES7QYtTg3Gd1z46EgYBBw87CWvQRTnuiZ1zo9NmbUphGN6sMdyEj8",
  "key31": "fccpCLFNeAheEG7KwVSoaYargSkR5tb2XXdCEw6oRDK4yQxB5touKoFwZJ9veGuEhS78431vDLzAnUSrPULJLBd",
  "key32": "pDCmgr5aop2z7hgRwErCg9aFcT4j7zfGDQ3Fvp2moaHW8CeS8LattTMVxA73nz1UB567dsDvPYA9SAGKXSnxfZS",
  "key33": "2LASVmso6Q55URAEP86bt5ov8iSnci4C2Fup89udcEMZx4v3bMUXibaXy36LVnVqR1gcE4orzhPnPHw9jYfGJRNn",
  "key34": "3KNYfvfy9DVK8m9yLLY4RSaZS3xoaff7zwSaGVcXiDcWoSdGj6i3JkuphiA5dDogGk5qzfTE6kJ3FzTvrJAJTRHp",
  "key35": "3VfEGaR5SnU7zBdyxynD5SKRF3kK6Ro8uaoDFrQE3a2d92wGUCt3PvfH6BY4UbC6e1H7M2HVpWfx56SAk35Azsdo",
  "key36": "219wNS61a45cxrjiMSCssWhLV9RaM9p2UUW42qLMTn8U2wnqoKvKUUkofuxjThGQWfQviyCE6veNDnZArSg9TjfV",
  "key37": "1d7zh6gFFmLC224XuBVGkLHJmnhMKa8WUQ6gErpCJZmR3sn54XvehKHrys5qXAAApudCtGhKKhQwwAGvfXXTaJ6"
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
