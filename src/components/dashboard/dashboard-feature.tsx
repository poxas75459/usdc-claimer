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
    "5AuhCsmwVZD4yvM1qrABKHCSAjCJtCW84r9ghgbnedQhDbc6YgdnCFtYCE77ZwGBuay9wMMMiG2y1fAbDL6FrZQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rmU6psKQ7EBeDap6NmCqYmHWdDsNo52RYskK2A8ragNnq5GRtxoWAB9CjQmBUhqLf8f8FmKHN6CwoBjT4z2nvB6",
  "key1": "5jBmmoMbpegziKpEk6UB35oAPttETZbMAGXCySL8KVzeTZtQNmrSSp2YxJ7FngTozNMjRHJprxAuRpwBEYs13JV",
  "key2": "5TdFimRitZszikqBvk4WyrWS6hbjwPWEpcXTJR2qGJRE3qujpHErxi2JUpBm98NARXeh5tMGC9RMeWvE97fP6T61",
  "key3": "wA9xF3ZUhiSZerMGeMVy9c2pyZfTphPDXzg9pqSfXd3sTreN7hzfM7kNUMwSeifTgQuo1JoB6Kz6MdGoYYwEiCU",
  "key4": "3Xre9Ep4S6s2AkA77rcQRAtNTuNpxp6BVxkR6Gm2oFpJu2woCK625Fk1X6KPiUYm9Ynyi8o3RRf6V9V7aJ713uL5",
  "key5": "5oEKyyZa9pfCAxDhJbfLH4XVWLbE7TvGBdLGdVHyvWgA3kXbSzQzU39ZUosyBmvJgHUXNbVxzv3bQPxW8XhdNGsW",
  "key6": "33fBGJDsWE68yzEPd9rFNksWednaTRRGhAnrM9nUaamb78EVgGiptZ2XjLvG2euWzh2gqnk22vutmQTFQJ2q9iNv",
  "key7": "2JUiZyhtQwhYRmo1L22YpivkxrYc629iLyyrxYBbBc4SoggDXUgQeSauoWwEeKALyQYv7XHUeBTmtLFfABqVz35d",
  "key8": "3bj6T6513nG22mguntbGt4UecVW3wWEJ4TSjvfHrWut2NvkKJ4zThRJfv1DbXs6uc5oAX3b7m4WZFw9MQiq1ofQM",
  "key9": "5jaZYCN1vxR4TKv4MzHJg2rn7aTW5etbK3Z49LToqAyzLFovnWJrZobzJmox7yybqJvbwsB35QzEYd7P1xhDNFQL",
  "key10": "2SESM7ydCuNxq7qCoSHL8ESFtEwWQRf1fdSw1efr5BNjSNnibU7oDyAckGurkPVkCqS21CYvgdCdwNC9SbdGZnyf",
  "key11": "45L8yLcVisDpj9PtzXG6fC9nqrw2kvDhZoJsqepz4MqaZ9fminSCnPoTXA2wZG7mmfYkFeVoTZr4A53AhuVoF5Nr",
  "key12": "oqr5SKjfTRkYCsi3zU7YvCwWuJ7iHqgQf8duSr2hznUBL69DhvRzNcn9Zr7FLdmeLDfDGytVcF3jMLXqqabeDDX",
  "key13": "oqaV6D7TQitwLRUYrovrZV7FxS7HgcFnLyp5ZJctAdr52rz4Uo6BQNm4D19ojaqBt8AHvVF929gV5V7VkDnsjT1",
  "key14": "3u3cSKmu93nSEENFYX8mFbF86zFj5jfRWTGk8fSAikLGUhbCc8r6oVkrwMQsMxRjFQgDniscZk6VbxSH4zoMFnox",
  "key15": "3Jqa64yNsicV3sPhfZrrqSvikVN3E7CMaPHBKjfpTD4VKn995aJWNih6LX7aQLeSxsjQT5xH7ynDw9qPTDDexwYe",
  "key16": "5M5qv9yDiTTUauutnuRwMYQxLMnFKHYYKrQLQxfgGF1kxh1xdPNbGzjHX413uCr4M4q8new4uK9sRhgSVEzHsu1Z",
  "key17": "58rFPYkjRe9EZUBrwm6udEpxAvW31sHtsZGPVRKvBV18PK1iQkeNmCnRk72MPpPsQs7NonH9vpauAhc7RrsXwYRh",
  "key18": "3JVsmQ3tbN5MMjtWtuomfG1Q7gPA7n6CRo5njKFqCQGr7AMARq1uFeiaEsgczCgr3QFrHLsuFjkSqTkVKuFXx4XA",
  "key19": "6TrQ8GdPS8QfEhMMwmRa6rjs6vTaEbDAjBZmANKHwdM9WhVQu3ZHThdKB4vVkFmzgyDf8i8jooSSf9bxRAaJp6s",
  "key20": "52azs66HwMvPfP8A6NKc2dLtbLahfEf3d5fRCY9mw1UtH69TD4C2yNJmBSkb4GhGHRTF2NKoHqVEQTftoom4VLE3",
  "key21": "45ZbgxqShKoeqMAuLZvZGNghJnXacF59ssGkfHetswWWhWWUxqqbB6wTCDMyqPjSWkj1QgoQuXe6diqjCM3BrJPj",
  "key22": "ExSggytmWvtJG9mv3RgKX5CciHJgWHzCBM1jM8t47HFJ1LmK7e6xJdSFDKfJF5QBM2Xz7op3Hrw3t6mHC1PpozT",
  "key23": "4oYg8CjHJ3oEBMCthcYy4BmXEubR7dQoDPykLGXqWczZYX8efZXz53qDsww5ZxzC4cwTzgk79t5R1QmPGYVJB137",
  "key24": "3FMWun5VGa8v2KrzotdHebigNWqKYTV7HPfXNmXDK9HhHTsnNa286ZPTp1KJscyUeCkHDUgbfkdxubCRe4GrFvUs",
  "key25": "4u6BYskaqbuESzrcHsLpi9bvTtH9yk1LYmJ4UGnvPAXkrTqU2WScZPDGfgb73QGeDXpfU8yKTfoMcQdWgFuFCtCL",
  "key26": "35G6RVjXAPN2JhuMSAgfAnxsMuZV3wKDhxzVeyBPHLKRxcgzEFKS4WmZHD8H2FULFxAoe25t126Q9T3LXyCyfzub",
  "key27": "3aof1RrrE8TY2N3kGYCf3D6SD6DNbSfYrXubEB59oyCWiPfaGARpm76CsfBv9bQ3XZQ6PwKX8oeFmSRC7DAxa8eJ",
  "key28": "ugtmqLQa9NWsPg4bDsR6QuWZjcnJqE7KaXtNUE1ZNHSbtcPSJnkS4A3dQH1kywqHwGSS1AeabGTFQrH6v5wKcRU",
  "key29": "2eSTX5uV6KTMJ1A8TkDPjy4QPpUfG7J725enkkURt2HZmTf9MSa39Je3PHc31E2aHVDFYoRouXJ8Bw3n8jj4kN1C",
  "key30": "deav76ybBuqNUTT7pEnmNmEVNfcyZ3FQkJy7y99fhigoq1Pt81RX2Na2UtowGY7B9YLQsJt5ZKWZ9PJRWmqbxFN",
  "key31": "4PMBm82SqcCoGguDF4MFzrNPgM8iCrPRzUNNjkoPLkpdHgjmzAkpuaJKNPFRXWft1VtZYdU3NT6Md5zqjrRk1wTq",
  "key32": "2GiwnVeCDusGV8XT6iAYygFsfaWLeLr3bpK2f7PeLxRMwmKhnHFi9qBCN8qB9yA6347ndtoMonXuDyaiaLyBjJFh",
  "key33": "3p5QRiSUEjSYCpxbiZvLXJDJzUeGeVaYs1o2vofLycbTCraNRnGrEhkLUvydWPDyLksBRy1Rh7CqHSyYm3RbdkV3",
  "key34": "4B45JfxvzprTTL7jk7o58djKuKwvYHET7sm99q9MTMr63Hbdub9xfJMtdtmFCLhGuu4fXH8z3oWvbqjDWFiw6d6c",
  "key35": "bxrax1NFHhRp3wec3yRKQHXoVCrwg8fCqCXgKnjNn16kJM3A1YjYVzVuZs1szwFtJpgUZsrBouxKqBYTEegtoHC",
  "key36": "5enf1JG95LL1BE5U5b9jJ8cvazvjV1XdnBZmtTJF9hcLBAp4aNAfoxZmViwwMMxcBXcQNrf8abtD1JUzSuhAfXbq",
  "key37": "5Bbz8ybH6r1UoCT4q2EGzDvh9vbK9KxoqqrCEeENWMTEE5Qy6yxAQtQYA8L9Hfd6gV3MPzYpzMqCMzThTc5Gif4H",
  "key38": "15QHwuLdHFosnweCpoSqLgfV4UUEwGxxZkcFZYu7SYJSXQ52KQbPu1zC4HPK9tv9GLijh5HcsykprqP3G2DXfPs",
  "key39": "2JArmkPTQPLsS7gPQHo58MK61fy8qmfa6ZWrvBDkwGDHiyRtc4NX1Fm3itqrtYFBAFwfFrmDxHrXWL3wjNmndfSH",
  "key40": "5Sfs2rr1Po9eFoKEpsMWmpBjoVz3EkaLhoQYcXLTnHYhxM356xrkRpoh3mUsPBHhwzVieWXdinyQgv5nFH2rD2is",
  "key41": "5rGRiiyutdK41rZwxUCnupPoAW97xR4i7msA6ux7KavHUmxh9akpUDCZ16uHW2vh1W6NwQMMzCnkji8eb4TkgW54"
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
