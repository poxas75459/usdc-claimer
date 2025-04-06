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
    "4CGDcrPwkEKG9VNPk1f7oRJSxmxbNCwNRfqSchwJS3gHBKqnV88N3i2XpaDjL4KjmoPA9jjQ8BZx7JDRnhTGno1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "598ETKt52MWUdWsEiq2nduKYmDtYzitaEJjzpaUh9uc1HRQf19ig57LRWXGvqWwMSzvZcDuDvZntH1Rrw7gLV4DK",
  "key1": "3tabdVAMd5cKdxcZDM4SriWBjdCbuaRmtnrtB8JLsh317FZiQ9sAUKbWiTRJQiFBdNsbHC559xjjLmfj72hFA9wZ",
  "key2": "5AEkEJ9cgWo6vVv7578B58iEdPd744t9qzU31NQ1nmBqQbNd4R6mffnjW1RHydAy1myyVTJ3yHHmYxyAehySiXzp",
  "key3": "c7zktze8E5Hsk5pShEhguJKfEX91GRM1UHs6CP2yF9HmdDRvQ49kKgUeDa8YiSXCBAReyTrjGiuVi8EHYLE9md8",
  "key4": "43SbEeGLTUdDfQc9buzWEdLaHxALVcdD6LLryHjvJaeB2fQ95Vqmk7wDwULQt345GnsLZHyV1NVtXXorgZpxxAWg",
  "key5": "2xoXowdn2CJ2iLnLLZkuUXgXWF1CVCVC39bRoRYj9d5Vo5PXfGcof3u95FrBPVqJKyn2QvBY3acuJVo9WcJYKEad",
  "key6": "4i8VNEDjiDHfTXtdXpKLehHac7gF9JP217gSauDmQpzSG25uh1MDqVLQjjuqiCXAEfBGV1WsbN7yovRB8S7h1UN1",
  "key7": "5dDRr98guBKcBr3Kq3o9jWi97GxqhEYtH5NEdJe5zBCNvNTA3HSwmxCRheMHiSogDBf9U3C4BRL9GUM9zkh7NeUQ",
  "key8": "5Q2ZJ1LXRXBv6LgGFqaYJ1hRbzRhTjMcoaBYgXBePCtZvZ4aDPekXr3kbrSGCtfVQcyxEdpcDRPiF1RBhZPPxiuj",
  "key9": "8xjLM3CzuDnXkBNvF8EZhwXzVQWQwWkPforbtaKtWCNneWxf1Cq3eFYgYZNtJtqeMiRpNoRQYDmZWqF7AhTBu4M",
  "key10": "4W14VzamM3fRP9j8cXtdUKjdKqfHhtU8VhHFKvbY8doxomuJv6wD1KiEybBjG8x5n6UERc7YaKoLQqTr7SSJRwF1",
  "key11": "5KnjR7QTyw1Y13rgjDmMHTAkbypEN2x7gyDjMPiuzoxYrjbCuzHNiN4jghubYYtDZ6aZ1XuttNA2r7viKWDSrxpw",
  "key12": "2RhGUXrpvGhSHYuqGQ4XKX2whw4BsLiFvRnU3zBjdXoALjNUFhU7eCLRh4qCAX72uQzs1TYFE66fqjgKXAZo8mVC",
  "key13": "3yPCRjy8q7AUhmTGHovECFEKy2XxdEMLBL5Qf1WFSJqB92JiStVMKJJM23427AMNo5L8oJXfeummZuM5bJ5kjz4v",
  "key14": "jFZTg4PEBTpWCpmgJkk1LZpBuy759SJJhyratjbWARQ5HG2eS9aBfeoc9AaC4LsPtNEk7CzyA6imzwMe6xwL3ii",
  "key15": "2zZc2JUUKtqYmCpfFBdXekAT7YFN5BWrRvme7291Sforogapuuik3EgtmHxKC7CHruag7VF9JC9xNigcGhqQYrGM",
  "key16": "4ZMBjdacPXN2pYX8PYSDMA6M5gfBmibJoU9aUm7nK5fkUNxZjTkDZafchfnKjePeAs42gPTzgBmGDxPePayiSWDA",
  "key17": "3QhQprLbhMVJdPDZS9H9wpstwwcUJtNvaRtAv5F2eR7UnpkYKSo9hdrBBMVfLoxcQLJLQ8UfA1d3XamyCnn9HsK6",
  "key18": "5MSLPevWB6Ab6Nt9fdn4RVRzXaThUSXNiZtiUNTXntiAQA8mUeBYkYJX35aNvAZKpsWn2LMhTw49hyP9kpkBW5Ys",
  "key19": "47pobomARBMkDmdcNVZFVQjAL4PTicAMoTLCqsN8U41vodwCXnsNNKgi3XKtemVhDhBXgA1XZwTSivzb6WWRU4WL",
  "key20": "25MtKd3VZFaWHne9sdzxZu54DJEjzoNc893RQ1dKrBpMgoKBtnYwJCsx8qYkt9AVF6yRv5CBzpfxuEMsT6AFjnZS",
  "key21": "RyFjfUiD4v6emaVfdPfLvbU8iZ3pfaJmJE2CzF7hwHM1WmwqhfmBYTE18uyM74DJcWTnrGw4ojisXqS9itV5h7H",
  "key22": "4HxtYMW5tuSCJgT2iPzBytUGbeFf2vaA4uQKqBUvKNQux73KaPh9TddoMMceVrmVzp2U12y9wDZpJQnEPKhn4vPr",
  "key23": "sZ7dwg9LFZrK9WcGxErWeKGp98SKEYHr5evh9U3ZN8Bu9BXLMbm1nJbKRHyUREuAb2vuTZ8uB2Cyr8fJF57gQTx",
  "key24": "2Zx6jMx7WEunFqmUj1PN4yAiJ9WFhuVPuPWvAnJARybb2dp6RWEYdcPppC7pvF994mEy66pg4n8NgRsnjtp1eQTm",
  "key25": "1cjingJx5oaDtckNpYe7khC4Y3yxgMsavUVGqWJ8CmvnMngpDQdsKFnAX83h9VjJXWoNS7QbT4XSeS7mdn5aCDS",
  "key26": "pBQzGJLAPvDfRgM4AEpvvixzaMQ5FiBmTsTkewwRpRLyuWT7PBNPt8wFhVdi7ERhNBy556MpDTRToTC82oGU6SF",
  "key27": "64oVeabaj8hsMLWqVKFQb9atDmE8tHnNhbigyWfxGHqnD21YP1RqkFpMwC2y5GHBC4qSVPtVEviF4Kke6jd7yidm",
  "key28": "2yn7eTm7Civ7thmXYxNNL7ER7qrPfizqkAgrw9RyTq92CfavfyXjK376KcgUutwKyYroGX1fJHS92XrBhHCFGSUc",
  "key29": "39PN94a6Km2SNdDRVgrYkVJe8shAMYqDKyCtWR3uhusFKECfYxnmk5Z579GbJCma4nTiMgcVEwir75c49sskX7LV",
  "key30": "3phQqBKyVE18F9vgyKtgHhyxAm8G2PSW5aCHYhAfrNXzcBapaNzgMubVQS8XaAyeo2pUQzDg9iGCB8n2NhWEBitK",
  "key31": "4mFhdnwMG14qUUAo7F6KTBRXHYjE6XJsnRKELVrN7njb8TyzprnEyFTmDf2jVsCH2R1Tb6xQsaRoAH7eWoHJzJR3",
  "key32": "3Dn5M97Cam2AbjDugbtGcm7DzSVUMu4Twqy2UPxki4qvUbighy6qeaArkXZ7Whtne6Q5xiu6jMbHffvKFfByUGT7",
  "key33": "3dg9fbdTmXaBTbT5LccqEJavsykYM9ZFRYRuVbpBKyd69cheRBsTTMd6shqnEnWMnr6VqE7bhKN3iX1SM3d7u4Ck",
  "key34": "sa9HDiuUpyRCeWWvC43SvFLeNukGX6A72MAP75moMb2j2txBMZyA341xXaAGdYSTPWWDD6WTiSWh6QGdfgZrGd8",
  "key35": "339TzhH5J5tMDw1x7mWzejYW4nK729iSp6qvBT2Tt93g1xkejFr69bDHw7pRcH2GvEKVXRspSiB2VXDVxEP4aPpH",
  "key36": "5aVFdzkWA5Hm1XBFVPCazvYFc6W6BfAV7pSP1PhwS4yeY2FRiuCBwub4Wj9VxKB72aXtYXMtdPvo4fxiMfS2dnbZ",
  "key37": "2QNHg597pQTpRANxatd5w3runnLjrbCPVz9ZWCctUS9i8CyuNVTG1D59t5G69VitHcmV9X2g3C8qg2ftUeY5TAAr"
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
