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
    "5U9roae91eewAroBFPFJLj3Dzrp3CQawhFPoSoox6ZxhRXvLWvgHSX8MiX9wmDdBjRuvC5GMGwAWjbcuqKbRyEi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tTBiALWU1cssw4P1gwQAQhZCFRDY1LkGNU9t5Jw4rnWHP8Thdxp2gYctTbieTmT3RyuijXUsdYC5gygcVjKd9VA",
  "key1": "64cQLwV5sB5XTr4bP5BfaV98eoQVE4fe1Ew7WX9y7C2tNjfffHx5Rua99ZUy559JoZ8Ga7MCqU6FsNxJ5z2UdQz8",
  "key2": "4TyxYxRvVeRjZv6orWFgiwQ6QjL5FnCUj6cVMwiisSwCxtka1rpuc9A6Fcf1uTCNHhxqaHnauyQxTi31CWgatuhq",
  "key3": "3FPhKg26HJ4h4xj4m6mir7ahN7ienT7dWW1sgsdn7iAT8cZZsF9x6QHiMmkiHiQ9vHsrUp3g7yp3b6U4Zv5683Zf",
  "key4": "3PoBJ9QLop5bHeqBrB8Um5doTBDrwrhyPhjWYxtsZ5yTaXW4Qa8AvwGKtrvTjguLx5hSiJBNLLDgaMKpBQUbMYk4",
  "key5": "47kvktw1bxAfGAq2RyzPAzyn4yBSWXDkSwTroMRx2mjYZGP3ZqerbtgcE9t4vbMT28oP4piTZFUB5SHJVHpr6eqr",
  "key6": "5TVZjd1R5YsuwZCJ4jHfxNsqVcEMTLnNr24xchK4f5WTExjbo4m6Zm4cj4aKeuSX4yiBwDxza8rH5GV9VUyRqRuF",
  "key7": "G23orwVrSaoNCk8EW9e1wPmsSsPKY6QgyUc4zE1DtTNERx18RvUBwx99SYG2HFphszF61guh46qWKB5mP4qkcty",
  "key8": "21TBhwx7mRBbDWjvhayThdLj6nQbZK62t9EAxyTJZCXHquAmf5kSCVv6a7PLxYtJDo6AR1rHMR3X6fRWpcqpd6SP",
  "key9": "5Ez6y6TqtJtJG64BShvWH1CZR2NdF9n31gTPkBVo5BYXU3QAd4AaCEr7DLFHBUNNYtUxHD3mhHapzKZYeSgWt1K9",
  "key10": "JRQUkDpphPBdKahtoQN8B6fqUmFNWtnE1nGjpxaeKPyaGReTW3VHVNHwLN551hWyoKpaTkUjxv3WfyzwapYHfcN",
  "key11": "2Fts5seDany6LAwL22bsf9BL5VHMmKVVRw2biW6B6bv7tZVUpF2kUyVP6oFsyHHWUWTaoN9FGYpz1tsFvKTpMAja",
  "key12": "4Ms4nbhELzGSBLXGC7YDg8tUVRgfYU9YamGhfSq8uqsncci7J8o4kiE4JS5FpLqocECCHmtcBuNG9rYP7frjN3yw",
  "key13": "4YnAVBdQF6LtfhkRKtvbB9at5gxwSomq5XU4MGBaHFyC3BYKgEMTLDe4KhEUfpeBiEZzS2x1D74vAHoepZHtKEtW",
  "key14": "4PyQjYnSFYpEE9cTpFu6QpmRx9FKS7VAJ2YtjiBGNnQiqvNeEXubsoiSwkeEZ6iSB2jjQEQU5FN5EPup3PmhD6Eo",
  "key15": "62jrj42wn12FWn6wiYcUzVDkzoc8P3EPHeXbsR88A4MavcUpVm4dB4oCcDvPzGyEGvFSpjzp6KA5mXEhcDtCk4nR",
  "key16": "5C76TipBiDmSpmpRkapCxPLDyX9xzRGiPgs2HRRUEsQsu4LtJEcKa7aZVLLTyziDbYiir2nCcbE563aAnNnnMUPk",
  "key17": "3QjKcf6CPqmWvQgDs8TXGjaDSi6bt1mVqNwB3y2ojEGAzMEKHnrpc5TE96VtYUb8iLy5c7uPgAG8s2QVwXMLenef",
  "key18": "58cYWfsQSReG5Hxqk6m1fNJszutmpVarZT3biEcH1iKPbadkbNw5kHSV1vqraUgeka6R6cgDDctZmQxT25fo2JzF",
  "key19": "5URhBF96cATx6DMJVjhPuc8YrVtc3js35Eh8TuXsyrXDym3Q9N5wufJh6GjT6FxPX8dn85PUgNHp1EDv6sLPR76p",
  "key20": "5KSYyR9tcRfKp86zsd1TJf9753aqbjkrkHxXiqBJodP7Q5tWNFjX53gZb3Za2bFy55YXYax2YuSaiLGLc48rn3ur",
  "key21": "4EmHTg3AYpRsezdiRBPagKzdqwSqt67LVqKQ9txsgK3RRk8AxnNuditTQpSENQRj9Jf7NukgbLsZarQ4HYHKu3iD",
  "key22": "351ZAKK2QTKSEt3pdUdm2RL8yhMiuywEh42G3Gsws9knxhTFPC9XiubBDQXsYPpFhwjoKpDVs4DtomBJm4tdX3BD",
  "key23": "2qvpJrAcyitLT6pZvMX8tZbmykKke9vcfcSLh4xwsn8RUEBaHtMYRegKsAxZdCcVQNKP21oc1bjWhrJcB881YWFg",
  "key24": "37SBz9NKMUjzDGwmFHvhgDJbaqMx8Wi66ipmsmqZNfoJq9qEXPLquYwBkBkNsF7ekmEHsEAQ8nwQGS4Xw3mRHKxZ",
  "key25": "2XSci4eaDhBJsskPKdiAbrByLeqXHfa7ZGoB3ZXVw2dBgmqxhZLDqe9g5dzzp3SSTa4jTuprQbGNees45RXYcvRe",
  "key26": "3jMxHBdnMJiPwxNBSM8FR2w95iR1xybAp4nBpRYrdLn2EEsk5nM8oz1Qk4mmcesithachqwNfuiZaTj8fwjWfny4",
  "key27": "FmoFFfZPpGRy52bmd9XGaZteULHLc9E1SiGytVefLTTqsZN6PPZ26TxD8dCwPLrnpF3TCqpy4vw5neBjiGJuZ2f",
  "key28": "33PFr9mCzLE99TsSdFahXkQFeYjkbnbwtSeg5FLCEXVbTTB3By1c4xbU4d1YDgVYESTWc79sBrBkqW3BA5RGmsYE",
  "key29": "2J5PHqRdS1u9tRjbma6W477Lj3gEZZ9HTreHa5ht3XgkH6inoxAgrJW4yumwCKkPycy5q3JFrnJcBFF5TBtQqh1m",
  "key30": "5L69WDnp4v2ATEHo1dzQx6enGhLTidkQn1guKSZyzUAgtuQnPQgrSdMoqLbqpr1rcy32MeyLEDY1g8LZaL4wKHNm",
  "key31": "5jazC5Qr9wxP3yRuU64M5guVGo8xD3iekWnNHiTE8yHayLhZevoQ7Txn4uo69jtwYpoQnW4A65VjekQsXDeDpag",
  "key32": "2Ym2GrHJmkh9Ef2ffk1GJcMAU8j9kCB4c5cE4pYynEQvnm7r3zd8uLXGFgdjSBXFZUTLTNuSe7nMHftTqXbNRKEq",
  "key33": "Rejt4ccyoVCkyTi8D7BwsVmf3vNKz41qUsNE8S74oNjaf9Pc4ePJvogQfMB7Jd8W1DZQZgjVowNmir73CzpN8TJ",
  "key34": "2cgTjS8zdeB5dhTBz9vbGgeZV7zYqV2p61uBoVAK17VZQTTB15wRehhVVcM1nV8GdosV6E8HN6eRdSD2GSyABYKm",
  "key35": "h1JHR7WC7M6Qajp4uicr23i6CHqN5ryVWnkxAYcuS2QhMHqkTkyxw4tuzAzgiosSjfR8e55i1pnjgPDvEJyksyA",
  "key36": "RjcRNLZoYcjmUsTJJEmzyhYXFHbwpCTyXrUQRvKVaEhdfqdaHGH1rL2cqYuzFnDknoML2btVUerKuHNbTACs7iJ",
  "key37": "2pi3umwjgY53L3MiYBrZBsV8jbJNH2PSNxMX4UqEWMchcsyMmtTE6JJCAzz46CYuHTVXbPxYbJzm1i8jNKWHp9nf",
  "key38": "48q3ukodjTQjDao3gheu225hhDgJ1SdZnLXVMU2HbDKNuELrbkSc5Au6wjxJisstWXbEN579B5xPdgVEQxLQ3B1f",
  "key39": "4tQ3YekCtGiX7oXq7K6B4A9MBrHSkJdGH2uhrr8w4ENVL3tc44YZVgK5jg5U9ABUpK7zziYz1PGrmmfWRFMQ969N",
  "key40": "4xT5a46pXHsoK67ZRvYg5N4Jt4dU3SyxuugJLc455RJMU15fBzAEbBTY56RABauoLqrj4SmyCWUW4anZAQAWa8mU",
  "key41": "3kJHNKR8A7gm3AcAbWHBuLufK72weiNkSLVFiiNkKpPsuprScoD5MKWaUAu7x18VQafUGCwy4fUthGvLVFEzADBa",
  "key42": "2PSyG94gMfz32f6EzPL2afHiMBwPFcwojMZ6fiNkSN5XBZS5JjHgX4p4r1bSUKVtgswcCQqQbHyMFmLk7v7ChE2v",
  "key43": "5ZALpiGAtxsacLnt2e6cAEN67ccDiebMdTJFvEfLxBiWjQTKz3E1rJoJBtje9wbrCAVYGwz8dYbhJNuPtzW4hRB1",
  "key44": "5M2XMcYsmm5atvPS4Rn6rNpmBaM93bVqWYU7j4nkiyvjcmFk65PEbvmdBh9xwLkFN2rn2WTfbBWA6dwe3Kv7QHNA",
  "key45": "2Bnag7zhwmmPX1V8gpRRocmf2pE2oUYt2pp4Ar1hcwSWc9Hr1eeE82nJwTfczLG65tmtmfiaELfdDDqnMBaKkoY7",
  "key46": "2Uc9rnQhJANxmiK148thWSdktYWEA2gdwqJkJyU22FoRqGBs6vbmUwEj9qYnYQmULrMHtifWaacrPLwk3kaiQm5H",
  "key47": "2cd1Ev3zzzAxeZvZhX3aTs7njNR5Bf5wqq5zxdL8DNLFXaaSdk3huhcpS89vrbi5qKN8YQDNVEJZ6G8P78taT5LK"
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
