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
    "5TUFNGnghL8Hy4zvLfN7PXiTaSbJ9C75jYoAtdrVZLQDbsaqCiMTCMtBNrCPnnck2BFwLq23T9KZvqXcYBojfC4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25iqVAmPsEYeuU1nGfq3GWNA1dHEf8rV1HfADGmKsuR7o5PsL9hy7Ej2TTof5m6BfLwjswHMYLbK8nZ53uFP1798",
  "key1": "3S3xqxKAaHgHDgnYZdZSd8zmQEMeqyhyu6kEBWE4v1a94HetMHHhswEcsNWEzS2dppsp8Pk863gsrydo9WPX9HGa",
  "key2": "28RRUteMcKDcqmVWCpi1ZSAU3pH3qPrCQe5CU2tG5tUickmL9gpHFrwBggKkVRBXe3y32cjcF6D2VSzUW7XHNM93",
  "key3": "5ywSKTLhfegtb9dV94VsLBdQa9BCN9D6SroJUstzz3fzgBpJR59jeKjgGVBZZhBHXnJXftVWBtiZDhpmfE84t1ki",
  "key4": "5ZkUQFCRRp1BgfTzTmpAJqWHbdcpDe89Jb6yV9J7kkCd3vWLseZwyhFJNsjShBUEwHSzc2K7h84FVA7A9qsiMreH",
  "key5": "64fhdqEKokBjhhjEgV7nmddWw2CWnK8yQTpUYzcCzaMzpzNFDkD9Gy5GjTxqKSxQNGicuswPWKgduBJyePebVbj1",
  "key6": "28fkRiBBbXCvvuaF3hgdRLYY8MMtDuApXKd3rXuoFzonUwgBTLkAmwR5xKmwS2X3aRfLxHAsjHnzwwq5euvAwnV5",
  "key7": "3ejXhkhVnBxxFm4V5wUFw3rn6ZLY3af3YEKAvAZCnDjimZB3R2uDR5Uhzy2smWJEoSQS8CwdH3By315yenbYNsVp",
  "key8": "5CAyfk4CxNDDPnTxqhngsLk3XyRECjAjLxhmvA9fN6fbiiWcZrBLmWj4RBWcwXcNgydvsV1MGxGBtXNB11TNKrjy",
  "key9": "2Rr8dvTbjwAS2mYVJM61Moq8TG5gCt9yMuYePVuqZfDDDywMDXVaspedMDuWV6GSaaXrp89JvpARpJKY3dcZZNQb",
  "key10": "2quvLrArCYKJRFtFBe9fgtb3bnGu1TjUrDxWo3cR238VRJCVouh8oJNUPkY6Zk2eqQhTbdYTn9qMr7hk44MLZg1E",
  "key11": "24PNqiH2XXch4zTwdGJPzwz3HwWkPZuYDJEJGRL2upMn1VzTKu9z3H3q99MVYLAE4jU4k6Z9ghFviEF52jZHSo2r",
  "key12": "kWTkQX4uCVEfCeioEs7MFG6uPaYV9Hw91TwmHvRXcK7SpMAHiYPUadPRW3MEF5mQH2vdUDamkCouzRNSiTDxcTi",
  "key13": "wXQEmMqHag6hMXNsCBk89qDLVe3BL6M2HyiEWByeR8hquaAbBiHHZ3NFM42KxBn7WmUhVtq6V2tgHKpKrtVJpWw",
  "key14": "5wD6LLt29hQRg8cUC9hwsiYzEuqRin9xeVcYBM3u8c6Q9frHR4oVnJ3gHbSr3YAP82vPBxgAtGG1wmqao1Y7vVc6",
  "key15": "62AReV5ebuBCfxwMF3WQzRJBN8UzsXrxKywGhkbQ75eHbofCcqi42grTh2wK6yaVPvVgjVDiBLgrLpWqh2RnRxen",
  "key16": "9enQ4YsWSEJBm2C2k2LZjLcArYb1FzcfYWTaDF5yvRC8qugySPeC2hVuoJSp47GeYen3oL5kbRKdq9rdPTo69g6",
  "key17": "32tUXgJhWbXGgStJqXb82SPDEqg63b9xoPMmvJFLiEDMGNRT8NwYg8A8dNkDFUXzmsfSYUGC2HJpiBGv6GSkYrbB",
  "key18": "41p9uzRPdRHAjsP9bNf8UUQkh5MrYyDvkuZ51SGFSjGDCv3TSCkh2ThWsgLsTrPPVcifDpguEoYZgTWfsA6p9xYL",
  "key19": "5rjja2nTE3oUTytWjeCBn3SJr1MCSyk9kjMuPWR67q2P88RkQVnJcRxSh7BR33WEqvxQXEoegntwQwNpmmx44CNm",
  "key20": "61nouNPGyqUPqhWizurgkLeDU6ZVPVgkK4GopEPT2mdbjxrZmKAcibYCHUrZ3SVHEP7y36oA6whsvqeNUFjwoTaY",
  "key21": "285Uwa2iQ1FnzVYN1TRKZMxGZyF96DgEZZGS9avbA9i17v8fDKhKPtUEXqaBDhf66ThgfNCK7uquj5iQpJk1nsnm",
  "key22": "5pyFZ4ik3ppXwvaU5a7wZ8wVNFC3c3o1GuqDqb92ATSTr5TurmWGcFdvn77FYgcuVJgqTdDRaoJxFWBo6Sn9tsta",
  "key23": "5o5TnC1DV4WVtZj2xu6TN27spuDeqFxPDhSQFo1AXUrsprXCu7CDzR9pctSoK2ZFgBVeVt28cWAj33dfmnTTUjfv",
  "key24": "3qDS2xpCcU2UNoTexVdhp8pA3gJtR7ZeTrGaCM7koekoQdgCNJELkiozQ8HxB5dcWC1hZv8WduRRtn2wcyovqcz7",
  "key25": "5q5rE2m1JYF9CDcWeogU9bzJKPdMp8zPjshtxfyeYXJuL65oXXwMuaAmtCgiNjcjSndkZQz7zp5wjFyjsaPtFKaW",
  "key26": "4a8zyMGaqUXVcnE78AQR8ZcTHanXK4DLVp3kBBBzQRgF5iYWsWNHRFif1TgP86LdZvYANFVTXc9UGN4tvYyDPNiq",
  "key27": "5wuRG3Lsfxze9DCCgHVF9VbQSCrVehA9cpZKkPTuLG3aE4js8rCzxfgrGYPmK62vqVgHxxxKhxQaW4NpdHKATZev",
  "key28": "3MuAgBMaEvBzcz88MwGh2fy8gr19pre5PZPHqTRmgKK6c4ZKiiA4dvFmT9gJpebSFY2psgg6nhLFj1iSLyDhyo5P"
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
