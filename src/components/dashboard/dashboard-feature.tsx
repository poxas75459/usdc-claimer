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
    "2FXXjeNSgwra8DWE5qCeTygSuecToEgEto4JVC7AAjucUz5GxCTphahPiqMQ5hqvAWm6LCoaejQA6G3bXq37aVxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sCTNH1SKCgrTA7YPLQUjAtyvggNnJzJko5Mn8XTqZWuAUbXFhodvuGhcyaGzBBEdbsCNrGz5DZztmdkoxh7D51X",
  "key1": "5CJixSygeC39MmUGxDnVsT1SYzcFmHMQaFhPsftbCWoavjG7fKSxkjBLrseM9FMAuaCLEqrUYGyfNx7jrePYCo1g",
  "key2": "4bMcS7XrqL6VenkVHRQnzFAsdLUHPf4wAVywu5GrUPjzgYcMU7e2mrXuJ7zBeaU4fJG6ki8zo7mUxCX6WRhTU8fs",
  "key3": "2jLZFtXrSfws7hRrjnP2iAHvh87YCvpZUWLoGMzv3W2AV7JN1W49nmseWuE82Wk8F71dKQjPoTPPttP3L4197XJj",
  "key4": "5ZYXpgpLYJJCRbVuAVMZM4KtxSSEn2FZZ4oUuPTam2HvkuS4igNEtfJJ9Gb9GDb7JEzLndWmGDUWc1FvWjVMNDok",
  "key5": "4rm8BAEq8xKFyqQuTHJJMETU1hzcrRHX9VGWqJpHkvZXvy89PvoPN5zkD8LEQUAFhL8URZFJobhfxsaNXLvLt5EE",
  "key6": "4xiVA2EPHSXMtFpfJ1Sg9vEYdStyuPcidaSPboh63K9WtKUATYisNZdehnyegVL7jXBZkv6a95M9qy4D6oZNcBWa",
  "key7": "29Lw7NTgznVdWokVYfm5Si6nmVDSaPW7e8S9h8BPrVjzTLLWeGNWYK5CqWfvKKBSX9PjEJ8txe9ZWNWsjJU1UCAw",
  "key8": "2p4uBArTVoA2VrF7whUkF1xVq99AzgaD34sPE21SF2b8GHY7vFQUW4GgwdDEfF5L5R5oWHmGppR2eHcfnSpnpyWi",
  "key9": "2dPWonPNXr5x28keiEM4qeR39ihuhhW8gxrhZdz3ESppWew25MzPg1GaT7XQBFNetZLqPaEx52yHBjn6MkBz6G5N",
  "key10": "4FvvzytNJXnrTVaoBb4umJQ6n7RP3p7fvq7QFhCSijfobK7QFP42QMN5dG9neWb5td5BP4BrBeG7okjCS1Sibvw7",
  "key11": "2DWJKv8EuJXzLEoR166jaqzAhpUYQmG2yrXhZivbbzVKvKDXjcJzE3jSy9KrzQWEgT5grbv1qMPQEQQ5yp24x8dS",
  "key12": "4RAM9NJAqNvJ9tzKCfGKdDUdLyvnBgH7BrimhJdqJkiJ3Grsz8V8dW5GxcnzW4Qxdh5cFg2vWKEiSrvxMstQfh2i",
  "key13": "LWFb6vsKxgmw5cGxeC9XEWfkHTgMLBrRUaZWqus8JEmnZjBpjSSS34sLEJpdYvmrde1NcD5X6LCz7Lgqp4segKi",
  "key14": "37nEqSPCRpnomqMK1kDoPagGeMAUfP5iwqAWr2uJZxKh5NLvKDkZ5j4LqDXrChhL9nosGKf7CVyxsnjfMepmHNPu",
  "key15": "2ZqKyGt18jx8NhTxXtDMtaNDcAWtoDFGvMDYVoaEZiw93edGLAoMewyS7L717V2oqWqk5Gz23fr7UTDEbLVC5BE5",
  "key16": "2wqsatPMuJ42gk1k5GXQ1SLGN8xL9K1y1ov98dbw3ZwGSiErQjd9xwfP5Q2D47WRqh7VeYYnUSds9uGgbR2mg9a",
  "key17": "2D9pLFhQMLNi2RPR1BZ3CZmtEx793jHZrS8iJgeTaedWoP2gUicZzdBPZm7bBpPHnSvebE2YiM14UuQ8joRX21kC",
  "key18": "2MVvfdjRxaW1mH8kRmysrmVYm1itUJwspjkeYCYqtGfhhw5T1FUDL2DfV6AJoJnijbQSQFPLBTu6rssVH8YYLNK4",
  "key19": "3hSRG3sXqoqd7x5F8PnGSZb9o9XnX8wUpF2DVBTEiMBsfc14EaeUEENprbr6ycMMch9m2bREhZ1zeBjiGzAH1b8v",
  "key20": "5tUdJK6bpd5hLYw6g622yTSJSdw7oQvJm8ZRpxv9fMMvYPRJ6yVAUeeVT2kRoiBhdUhRsv3rDxV8sPNrmLNF9bLn",
  "key21": "52CDRs3MKhPhKiVWZqqZqz4Xcn8nbTeA2K34fmLpGRyUhmmLy6cfEzwahqDhaC3JkWStQchW9Gng3DMdBmQFwoPK",
  "key22": "4ZqrCxvCu1TDqNjuCbM2do6yc3iFzwFRKx4FTzefu9Gto2zafxCACmUPYYnwo1zdnezCqAzzTQZtwPUch4Nqn28L",
  "key23": "31ZRcGZXrFVNyLwS3oS9srmfSqBH4qwtmNMckYzaAVfsvhq9FA9uJgvyyAm5Puv3zjPkg4E2F6jhwufcwkypqrWs",
  "key24": "2kQLr9w2DVapABSpSxPKtZeyp63cb6gsCDBqAzC3f1PfndHw2CKVtAe3HHPaAwZFN2ovCnGAqsKcsnDEh3ArTBAx",
  "key25": "4vBPLqc2pWFxBEiUHxi6yg6m7qrR6EE8zvVjaP8FE1PgNN3G7TeJQGDzBJqYTU9R1vmWAiQCv8FXnyvqCmsXdNbX",
  "key26": "5Exeg3ddWZyNX2LB1ngy2voB6Vn27Py1pJJgQM11omU2CoMg2CbwgRn1QbQYEe1ahwuWDxBcwhnHVEkcpj4wvLfZ",
  "key27": "3XgGbHR4SzK2UUMEEPmFq5MnXPveFUX5mSz5RYneWUBRrLxaeNptCySGxEinCcBAUfB9Lkr7kZzHXnjA7fSb4Scn",
  "key28": "55UmvaeBy5zRaHDrkr9ccT1UtRHFirUCnLj87h7stNBhfTJUMwzpJD5xzB9MQpcnh4K9qSCLUm8X8S8VPABk9Gef",
  "key29": "9iJ3i9emsWtzdGhXZcffi53vVqfjMFEsjmiJeNf2QgSJCZozHhm7GdECiWAtb7wmjLVKpYMY4XHHbwbtyVaV7Mk",
  "key30": "5PimPXfbENxofE8VKYBQuzmdaNNicCMsbowaz1BqwcPZ9o1TRPT3HQjtiSocg15T86ZrKuJTfwqSNU8H4W4kaUbi",
  "key31": "3szfqr8MbSfMcoZRoRXEEXHmcxjY5eCwqf4eapkQFpr4Dkhmr8LQjoL9W7oCBL1sTErQYhREz8WvmhQuB8Kqmf5L",
  "key32": "ECAvZTcDGCwtTru8mYv1cvTudrHsjxh7SjTqsboTfuQdP1ivnoxMaL3i2YysLScuGFxDvaqsbXU6y1pwfMNk5xa",
  "key33": "e15UKsmdhbcmA876LdUPe6vdnFtL2TAc2NgBpeUfkNDb89hSV1saM2KsUmv8XSaryRTuYGwAe2iiyF6sCQBvZGS",
  "key34": "2bxotHkfDM1zAK7fkErihV13gmNW61SS5sd7Eqye1v7bfLX5iNQpZwW67oDRxvj6VUgF7mmEg9uzbWfDAUWjsGCb",
  "key35": "5MrEEyAcJtBgRYvPKmRn6tF2sHtSpbawoDkVE2EcbCQLbUhZZ46T3tAX8rWV8TcixRBd6d54QMGFX4w6WBbCHcSo",
  "key36": "4d1Q8NbYsD4SwZLYktyb8aMQ9ZXegzbt1Sa6E6pNjxAKD5QkK5Vjw2QXCy4urMM71pEJZY8UZjmGzFyPxLZEw3bP",
  "key37": "5kgXYDPkgpqkD3vXVpXsaN73TgVeAufwe9WZLK7LKfzoq1wmBXgeNptyYDWCUWexTk8b2FbBagm8xjDLvD9h6e2z",
  "key38": "2FYkXFZdtcQLfw7k76vmmv3PURvvhYqMGh6kaM6byshQTWbRcrd48cS3tuFDypuRtPwiHsbZ76RpAAvzappDgDXk",
  "key39": "QUkLb4TpyXo8vEcDLBS7P3dXRDbiq6qmHrc92sBoV6FCYG4n3YaoZRh7ezQQF9kcN1RWaW82hfHrz7it2GgHmQp",
  "key40": "33aJAJ2FijHx7LqbetVE3VRsi4Ejwocpkin6SVLAt3FpWhHYev7HxMLuuvQcvX2GqFgvcC12mxMSmJVU87CV2Mdf",
  "key41": "4nnfXTnP2oS6h9mLjKUQJAKyAKsZknr7hJ8t6MmwFk3iEX6cfzjcHTG6hVvEEJstuNoXa6KsBkPUHUJ9YM92UHAe",
  "key42": "4CY4Fd1AEvA3FVEnE7njhxLxq5qeFQCdwTjJjZCWWbLTbY8LHhPxpJuMCmiXhj2bR6sxC8FR4LxExS8s8DAofTAs",
  "key43": "3fbbSBxSZufFqMMPfBn29U5Zy9bdLYsnU8qQv3BiQ6Cr9xdAHPto9tq4wzwXm82RpmWohUd3WBdisyt6a4sVgz9u",
  "key44": "3Z1F1tJ9kjEPV1H1SkFHPDvi6kLqkMoH5YvQYiNJwniwK6fjJqnDHzLodoDcxewvvjNLFLi3h6GjWmHVWwFaSPXF"
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
