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
    "5qb3XQv6gkffGqeWPj7JUCroDPafWZcCoKtEF7p1gMPJe43V7PLtCeSRrXqt5srJ9eohGv71STWAD47RXYaRNsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PqAcG8msr8sZSzKU27fST4CVPVSNNprdMxCsMRZy4GfexfWrvhmHvFJ7pgqyGX9XXoZgUBoXMeaE7YPgLESqL6U",
  "key1": "62EJU5nNqbGBxyy3MEnJZJNLDGw4Kc6JmTVfnFdqJVzTAxWca5dQSkYt7FS8jKspenmf63RNJ1nKZUhgjcBjbWEQ",
  "key2": "k5hC1mp4wtZ6Yuj8txo8DfqpvjdAoaLrPCaA2W4M87tRW35e4FFHqZPFCp4LY6KJgLSDyc2qiHDZTyH1vvfb2Kt",
  "key3": "54BwpMzKhY7QuMJBipDRuKKBkdrC86ccpJKJQFiFjgtsrDgu6MMgFMjE2hqPfQCuGEARCdRqoTDp9AbV2obg8i2h",
  "key4": "4n9cNBTR8rjTwws48L1yWPti5UGTJHUjkMdMJMiz1pzZeYXYXYeddAtipJr55wmYBxf3b3K6vgFxrRvmMBD5Se6G",
  "key5": "2jcqtxv8opL6VAkjecHCtXVv2QA7DjtAsUF4iKxKdp7VBQPCRtbje7iGXrKnCCVmwzRQ3GUNGHub7wKiVb8sLh12",
  "key6": "3qQajwmE5KaAjzmYqUatDdPpEvUr2bemmtBpm4B3HxRHAVMQDax8GqVDFZhttjmuG7QesuzQ54Skykiu16sJBw3B",
  "key7": "31BEBRXDHxn3k4FTcrnEWwJXsj3WR6AQAomURFCcp9scXNyGwnigL994g37zU1krGkDBgJXSvu3g7qkCmSfF8e97",
  "key8": "3BTtUjYNbz9VZEerc9Ku5vkiY4sxYuxMCUuv4R7UqSa9XoX14kuwyQRCb6h7d9PntkCRu3BUr3JexXLxgXtQaPu7",
  "key9": "4WBS1qHoetVgnL2SG5Fo3i6ZWJDGRpET8ya8HNoDgT4SXd95BwiAyQapy38oLMn9ZWkc58shDcAUhRdUmq31dfTA",
  "key10": "56sWeqocJioqL9ukJe9i3rs9s9yFTF46y8WkLZ5ULG4kKzkP4cX8spH11HVkZEn3ZJBrqPD8JcjCN1xvEQyYjCEP",
  "key11": "4SmzY2UqFxbMfjy8LCRaNPgFVikHGpoeiHiEw2zEbd8zferdHf6NDdBxkJGehuXS59r4duAnEL9ovKh9gEgpoyEo",
  "key12": "k81t7uTUjVTRZdNM4vPoMxcZxgRnTkjZXFwDK8xqsbyoPLcvruhvUFSxF7TofcwsM2xp5xgGkuyYixBc2VShiwE",
  "key13": "22hzJsiay1dS6a5QDRztEU1mXehuUFxKSc3YWxkZ7xoAFZhaez1VABHck3wBetcRQxFqhAxxxrbTxSYdXpHHy4Df",
  "key14": "4W9nsYNpECSPxr6hBgcVGUryfrD12SAgi14C6fPzJAsxfbDwbGq77A2kBFFNpFuQSUhv5PjQzPknRAPhcSZmJLVA",
  "key15": "5DD8iX1Y24oV1KWtWXcVqRCnR957DiJY8vzM59X4f2PYJ5YX8rPxxMBSa96qmmpevihSHQJtro3ahwbTLv1yxmWQ",
  "key16": "kVEMx95dXd1DA1pS1KyCdVqCqvfrKMxNorRYJB3mStGAsVnYPPGjQateUNY1vBY4QQMWhP8RvNe2VhuFWwtuS92",
  "key17": "3R2zmteEy4gScsQBtMREKVsbkWKzgsda46StyVXt3D8tzJeiw9oPNddgAuCJQUAowTSiFicvgGiCMAfvfqooQv18",
  "key18": "rnRrJjLVSrBrdJjcUvRTZAzaUQAJr8QnMJqzH2rh6Lq1He1TSq8X8HXZ2RW8yweikCBonvaN95jaWvvwo7Qzh37",
  "key19": "ZZAS6UeW3cj9TaH5GYWvMDV85aeZYu6fA3UYaSNZ3RewmoeXdmxXUnU1FzL8Br67KnRGwQW8r6Xbs9EXXWGrKgA",
  "key20": "54AQqqkrVo5JQmoBqoDsyEyPxbmqwQ7KpeS6HkvfBJvphYdrbB5z7pUrKnDrQg5SNQiT9czKEJ5pdQHPAVEyXqie",
  "key21": "31HuBsxdq3N5kuXUK9ZUPTjE7hoi5dgqcGT8GX6U2k19CmjtKDzXiW75PapfQVWNgC6UgxrTLDRg73b7reUhDfUc",
  "key22": "3BpwjH4VMm2Mm6XfwAJUFiDstH5FrPTMYa32umqtTiqDvuUjY1yn8HS1oddhqVvtPAqR9FkCcYPgTVcqWEBChCcT",
  "key23": "318kwbsh7nm9iQwJo8bNkRY3QB8GoqWqqWm9Uk3kGgMM1X1WRvaK5hGBfpHFpkvTTXyn6SSPUerKYwurLtzybhWG",
  "key24": "4UUJAMHnMGhwyKQTje4teQY4E9CcGJbHWVrCjLgdMTwCRbD8vB5AJRYxM73bc7L9jdJdN7PL8a9NhwJqSB2wNufo",
  "key25": "4JF59wF2Ua3L8WySby8XYM15VvLLyEzqNymvFZd9cz2DPUBUT5S6nMndg7pbwq2GSQzmN8KbsYRGF88CykY5LdyZ",
  "key26": "3g491aUqwCfL7fvTpkRYxZ34r2v9cC7c7kMktH5o4fYUAJuJ9mdZyxFT6rFe36zNytXxaCEraiHCoZKGMWAMFKeo",
  "key27": "2cY1ZMaFEmuwjEMeG4cx1QX9wegsaeWWoxaoQZHKHcETAt9yJSVvsueeiUy4E1gLKY9Bz1GAsZP3F3DscTBH5v4X",
  "key28": "2tJkrLMR8BQPAtGATP6PrvnjqxKmBpbKATsVLd4JHRNf6xuroZVCnwCqCwSrxZChH7YKmCNzezr1koFammm2YRe4",
  "key29": "4sCb8STKf9HR2bpc7cx4UgDHLGFJpYsZ5jF27Qv79S8Rhh4W8KBv3anntQVnA6G7kujrVy1KzJvwNaj4WQE6i9wE",
  "key30": "4hBvCmLMG8YK7sXTeVNnZZVddXsbumkm1AfL6AmxvgmUdBGSaCoKPhbpehMQtgrQm95QVEkjc6aVULz2QVWoR98e",
  "key31": "4CLKX4CQ6JPj1c9hBtGDtYgRUX3Cbjn9FWBtxhGyDGVhmwkWy4Xbr5dqqAmDfFjuWFfqXdGGRmYmndNxGfuwvf9m",
  "key32": "3AnQXJXJK7vFuaGDnmW79PXbHFbnYi9bGqSKtJ6jAQNLWB5gndAwsbaSfKNsLvCWKy1BQT72bkGNPt4CPqg72NqF",
  "key33": "3KNeWwDsgqeMkB7dtzj1m6x8wg9nvhG4g5r3JSfUDtH3z36QzYw8hfFPTf7Lfm6eEzKh2a5grq82LfezpRx9wvKf",
  "key34": "382swK7RbE2PLt58gKdjKbom3byrmKSH1KofBYpic989hYExx46wJJPH7J3A4DLo1tokD5yGV1C6gFXDU7xf4nno",
  "key35": "5VR2WU219WN3BAtFmWJ51D3wvbrByU6xpjKqqnav3FaNVYiuj1isEu4cV6SJkTYMHnxrfPxme5PeGCPtSoVrnuAz",
  "key36": "3KxixS4XTwuyT3rnKz5k8SV93GEvVdXT3Km1tU4vh8jSL8Cr3CNUvKZVhhY4z9EB43uzsacmpTXKSs1MaYcUyh9z",
  "key37": "3kNDhn5B95ku9Ndo2M2HGb1hV1Q4bUyCe691EJjHdYXWFVGq9JjtLobYcazcwQ21t1KLYpCgcctCpUdefw2xpRSa",
  "key38": "3AgYEqcA7qx4s9JBQSjffLAuA4fS16r97avQjQVCB1JPYZrGQMCoWYGFYnxoKtH6gWY4K1KUXpgfbzqkKNCEZVvx",
  "key39": "3JE8Px5CK3V4qBaKGo57dvwDuG7iemzsD192otJoX1AJgkYDsyyy6gWQWu2rg9wvNCLZwdrmhQjDCd9wQ7Gp25Z1",
  "key40": "3E8XpYY3EXnnYB1uVTFhifrePwB4ZUk8RHzpJHX8xBS2qB4zSgfqwqEJWYnifiN6FVKd2jeJUEq5ZCRNyCUY2d2S",
  "key41": "ntybMkf227Kvu4EUAX97goM7FpmRc7r5XwtNXnKh17NPCXy1KTkfcVg2iRrDdpRvsmFHhPDK1AUyyVQs6xjxQ9q",
  "key42": "TEwcAGJCiiTkz8RUkrC2cHX942W3Kwa4Ndcc1dEeqWPnbtutU1FpXU1EFfACxHjpX8KGXNtRcYZ95M9Vy3fRy2H",
  "key43": "2iw3WXQetwTKPDSyfzHyuZjbyWJLpdCFbgst8rvZR9ZviUoQeWEUWWpUip13FwL1SuEQtv6776qkMHET1w4zjJPY",
  "key44": "vwmfSdEjdmUiaN5BYPR3hVFDEksDKXoCffBd79V9XQiXkDNKrjbRDrHbHeKwF8LE3qgNd4CZkwFKidoJ69FapJQ",
  "key45": "5JogoY6fi84H75YeyRERtownBaKPJ2E7w7rSqQTZfqmbCdXxFPhrtzorUME9ZsEVbwnQBozZ88GFwzkv5JdYSSdf",
  "key46": "pZcz8dQNxrZq1x9gAG7JLNtryVYJ8GTe1LL9d6Vz1cqiA4S7vhvK2Aa5uLdsFxKmqxmzHFtD7ewf8qDRybU5Qse"
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
