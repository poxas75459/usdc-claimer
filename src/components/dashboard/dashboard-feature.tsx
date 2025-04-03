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
    "ukxduUptTBFLC245Y7YHCcwXmRS67GoFwbcRjySTck4C9pBvLir3JVck7b4z3Ra5Xf3Fs3ipboY48W6L7PNgETK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n3f1KHcn9sDQcr8tMnVa3YdEK176YX6x7783LtG7w7nyc1PhPnz4bRsnsFf2SsQseP3E6H6ku1HKLzXruCn7YNS",
  "key1": "2y3EDTTPWCvxCdybuHSwo8cLmJEZXLxEnKgUpgXqvRfnHvKp4j4h1YXBMRtEjDkBNofhCvuPK4w5VtjgpGCkwdDq",
  "key2": "2tH4LT4iuBHCNxJwhsG4VXiM1AnqLBVNj2ngMrAjK7yCghBpBcrxggin4gwH2UkFcXVfbbiAwGutKESKRZCs6TGV",
  "key3": "5yikUMLraVYBBFWC2hdvfbSQz92E4NqBGoEouVvoMP1TT8UJaTP5dtXcFEBZN5vbXwLzJoMD4XYSQYSgk6bKaERg",
  "key4": "3UXg7BgyESWBkmjeQ5LnCgTq2QC8Fx4uwo5Fo3SQHydDYAs9DrHyPgTZc2chK5NF9PDDXe2SiX9edVqEorn3jFAC",
  "key5": "5o5QFmmKLqrB47F3xPcMLdxN3BUzWr5sVhAuupeZXunpKjg68LaUKiMNxMszNcC7QbNKNWu1cDB8u3xgtpbB9CCz",
  "key6": "3tFCJAadw1ZTxDjbKZTMzbTofQUyj6TgRTQdgRt3aGPDnDBaSZJMK4GzDJc8xr8VdvWr1PvJDE46PbeHkxYqGrZb",
  "key7": "5wmSGaDBDxME1muB69wuYbtHDEd15j6uXBBWDeMHmAz8x9gJS7EiezDCmbxwuEVRgXoZrnpaVqjdpBpne4MJmBcJ",
  "key8": "5Uvun3TA8LszumV9ocxAHk6i5AGeu8iQSC1ZHzqFPHbYVxB3Gfuc9e5dpBbsTM7EKpZVYW9YXBSeQg8KEVE1h7xv",
  "key9": "4w2UPGNbzn5Xi4QmZw1PkAa1kMesmAyvGkjcjUL6KAKZ84sQNMr1GUoJu7HhvvrKqyqXm7VWQAmcuKyW7u3jwtF",
  "key10": "2tws2maPUKHxHwmFggw1E9E4dciXCCbjwbiM6Wa3HVPVVPkrFFWxQXE2EndUYgFxv3gZPZZwpDDiQ9bsugF6ZY5A",
  "key11": "3UvPbAMByFWamzf9TiYUvxz5yRNmpop3CjQTJSV2EnjoY282WKaZo89gU5CQ94gcihKvCfo64gcK4CPCDzFAcqsk",
  "key12": "bRtMNCFH8iSURT2764WCJTYaxFdQJP2T5v5e6waE6vxKWjGDVU5tjYvYPa7rsEPXotSfiP7fFQRmUFKko6cepYm",
  "key13": "5TNChxCVazYB6RhDZX1xrhjc5NUv22JEqLyYmcg8bQ9VBhmqM8YsDNHhagmDHPR95TauTgu4KXKu2u8XxUig9Yhz",
  "key14": "5fPdBuFrmcJfzervUJA1g3kZaeSJbkci96yyV3KBoa9hbE88Mn1z15Q93zKp85Kr4n1uqSo2K2dRMRAjWfjYfQdF",
  "key15": "4jtKGSsSgFQC2VW9wHk7THx5JZD2SRgC5KDSrGo34GUnteDKKxhoTQUupL9J9Nk17a5BmJoD6TnavGdgsUBxmaFQ",
  "key16": "2p1qtbZ9NR62e8EZkStCwpiN6sjm4kyQvahwtm7BxFLKCTL1sb756m7rtmxNtVFwjJS6rEfjsq3JhUgjDf3xjzHK",
  "key17": "5SDDKb2jUELax86scw765go5jrxxVQFUdjwbM9HoX7EnipvwsjfRm5acEi1NLwiKXw41TQhUwfnguKnexuN1TYSr",
  "key18": "5YXytih22BWmkrKpTyeWmseCq2eVVAGFcEyqZ5aA9jTHYxqVPsg8PzbXCHFdwAvWhwESPW4jfshUApYLpjKdEPCv",
  "key19": "23b5ZF1mg1yCsomCQLoGNykDmu2DCnjEJ9YnSLY5ZXTVS6XbGb8jj1cg5ggCcirfxpod6uQ5cUZCfW7FVa8oxCuM",
  "key20": "xS7JJXAmd81Vhfq9xHLhack2KoKM49ipXEzuZqnFy5zEsnTwPybgHzR6ALDcZFZvRvpc9DBKGMgNFBfQqCQaQ4h",
  "key21": "5VzMyc63jEetP5taoWwAsmqa3kXqHgx4QGjYeABinxhkofP1iU7iWLQNCkTvaiZ6NH74yPrsDjYGnteYv3Gigsb8",
  "key22": "3bPSQ5J6WVm45LVUDRqk5zfoaGrgCMo6MejQ8yp3dLaTQ6wxbVGKb9X9g2xmH7wubcwwGbdEPcHwaLYRHptR6Kb1",
  "key23": "4UHgs4YD2MZ6qvjLHAKWKuyCaxvk9U3ki6JdfYm3yAWfooZQTNE4EMNQNjhrcAhnRNA1Cnj41U4LBgLG9k2auAnk",
  "key24": "536EruAqkcU48FP1NwHnMGNKN7PkSq4dZpLtMd3fEcozjKkYJuHkEHqHdtZSCETGCuLvY2Wg2qbwN31oEZkN8b9c",
  "key25": "3wVZTpzPHffEBeuGSaUNEJVGmHxThJVA5VpHBDhzpR7XwnZSsBcGPqcgdt8FfdhwkMzMSa2tVw8dzoxMsJb9D21P",
  "key26": "5QQfYwe7JeFmkQ9heRobsY3ifBFC8hRafpqKneySp3rVMoGG1wAeqBAajKMuTyABu8m38r2BZCRNCcFAAZ6kYXEF",
  "key27": "4hRuAjBDyQDjiCKGakB2XdQcdWDyFScWAUPVk6yfsQ7moyFghFcn7rizNL5TSy7yufyukscrSxcZvqatGrvYTFD",
  "key28": "288egsmA3GYMrioS5bqGpB4V7AKS81FbqU7k5bcKX8vuZs81iTYX5TMd9GoVfJ3uFgdrxmgtTfkjiZPfd3zw2CiD",
  "key29": "4TxKcPZit6dyVXP93bdA5ZvRk781bjcXo7Es5PJnZa3njxThdmL1jSnZDQJce7mPYuV4gtSxqHpTSXHHjw6XRECD",
  "key30": "5YegfGus7K1VSxCDruboNTAJWWr7ciHnpCR2pWUmLfjyG47Qn5RS8LGv4XmNyVvu8CtM8Vg2G3CGaiV7kHWbKYyF",
  "key31": "5xdimY6amyp4PAC36yr7hREFC71ALeaz1x9QGEHqKBJtf6d4MZzw9skmhSRJcNSCX54EBCVoRu7iUqYbnbd83ECc",
  "key32": "2Ny5biVqR8gRTehys9NM6XYfpUGKiHqcGMa1fCkD4J1vdxVF5h9izetWzsoAPrhCKsL9NQ9ZPFxxrLprsb6R5G7o",
  "key33": "4pqRh1gVKc77WVufjmat1junTKBWQUMZJXTCyCPejMq99AJ8BDr6GGQcLnKUrSv7p1DTeJMx7uZMRcaPb3gF7GdP",
  "key34": "NCugyKay98wGPCcDN8VkfSWmuKUqJLbsrWBJJeGEf3JMwTZtUUie4whmYc8mFSJ12C6N8XCbq85Yx3Zq6CP2dtB",
  "key35": "4ZeM64j7uKSYn3byPZpouoNSC78KFm99C8kJWBivTR679KaVvzNKhM8QxwTHUSwrSoFACNdxU3gkizwiXYTC17jL"
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
