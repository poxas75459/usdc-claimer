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
    "4XU4NP18knecALveXjJzUqEztoVDwHuJnn2cAhZsLUwffQXeYx9antjeDHsTGeDkT2CxPYv83PAhDALNUhtYAmiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mCTK4io7gX8VY8HJUMQ6HZw3vqzEgyJSPn6HHzxWVajeP9ThBeNuTbhHhCfyWEvQX16rKPRm9sCd5dBZg97KXUM",
  "key1": "67MbroV5ckQcKB2YoB86uSh1dj4Y1udL8C1LzTdtmH5VuFbakGMibRpCR4ncqmnPfD6chV4q3799fkfHo6bpXCVn",
  "key2": "34JypKQiLByEz55LQSfaXyUWjN1y8ChUgD5aRnzULEyWx4pXoM31v2tP5NqmYuB9M75RgaQq39jpDEbZwJTVFod7",
  "key3": "4Rr3i37sjJTssa7S21FBWueDEsG9S4YJQdnPEbb1FoWL3yKxmncvwAEjskYDDm8XzaPwyXrQnTrENhHM37KW9bF5",
  "key4": "2PbbqiQZvnrCHFuveCYQcvLnFw2SHWyF5j5WvAUs5CTkzchRTniLpZV48MFKKhUjXZpZxCNRhfZSudFYW92aNtjR",
  "key5": "j23xuRgPH7Csz9o7nVpRohxG5Y9gGFNDAng2VaWdfNzVauosPYyuGMEcYTdHe2JucX1ocDuM4B7cFVzbgFJ7KLx",
  "key6": "3DUapP1iUj2VSucq3q1cg7nyJh8CRMLEgGLcm4NNCmjdD19syfV5pv9HRFNkUcfgbAFrSQ2Dmgs7gfzxutnFDbNy",
  "key7": "2MEgma9faavk36G7sVb1hurD3s4BXgUa2MQnQZKXFjcSV1sx9k45xZxxdKNo7KYLbWJjSJQeYEPctFZZvew9NWfm",
  "key8": "3AP3ZYcK5bMAfjCzPpB2auSj7tQgLFk33xPMETkVnxhtBLr2ngzrm6V9sfHGXBZVN8qmDrfPjjVQy5UNUzJHxzhZ",
  "key9": "PrDmLdEauB4jzHqi78netAwegtLbyB4byUJzbi567CYgrdVRrcdYoRhgN3JdhVrMni1nQkcVfbYDLzLJiCtrxxu",
  "key10": "Q1dzu9CFxybdCyM442qhHqAXZRxetZYsAGUpR6uYvEvgBp9fUdbTrBXMwRUvyt87DL4bmMSAZgAJhjqzw2sVMrf",
  "key11": "xf7FbrBubHK9qKLWigZHooShVtZfQSRtQA9apjZoae1Etgy2uiubMBKX4qt677tPMW8JmQWt8ERSEibi9ZJTw2q",
  "key12": "2b21qnSmtVppTywZ2EoGcXaLvhv9L7rHo15ZEskAypXxiuv7pgP54fVtXVqGcWSbBNHzG3yhTWw3wSwLFMbX276J",
  "key13": "5ExWuYZdmNBvuFT4aih65ZGk8zRYzEDeBmfeSSXFCzqp7QhnweFfT3DMQ27JRfkk9a5QWAujakp2aJR4zrKE7Qk4",
  "key14": "ZzPpMshKnrhkZ6jr3bdS1DqMncLAYrRmZrkD4Fg69MJShfAcL2SEa9M3ntDwBziF7XVLuqin7BP2YRUbkfzreNJ",
  "key15": "5GVBDUYG3PnvC4wY5Bdj9AAQYtHcvbonkDg42fXgxsSY7hJxBf2XrJCrTnx3i356FUMeeyjguiCFkTcMAKR65v5Q",
  "key16": "3HAn9PgWHv5fhMKmLYbQKFYvdaUyNP9r8C292BcYuvtKKuSEyFjn2VcGCUQAK6EzQAQTcQc4GeSAAVnzyvk4HM4o",
  "key17": "4QyUm9Ei2QvWEA2J762F9gTh3p4W2uy7x6GzPgQsPiLLLRpVpHohYjb6xod7wQ5yDv56EF9pV3KBwNZFiMjEmYY1",
  "key18": "K3jvAX15JQQGetybuqN8WwgmH2kPNXN3biGi7Aw8pWhSz3TZ9cCrHpLHXFZewyYw1smG9TGDzS5toiJY1ErPuBH",
  "key19": "3kk3ArDNZSsB5V8TXqD1vLL2a8wrywcd6we6kXTZETbdBPXq1SK6Lo8GuShitLvBKfx8GQRsQESMVcjNQz9cjqf9",
  "key20": "4v26MLgRdKWUPHRxoBYjvhCjkNTzgy6vAb69tYNfUNKRBgKHKQQfZPXcxonG2FYnfa37tnDUZ4qcVDY6YZCzX9JQ",
  "key21": "488k5EWhT6mJXp23Ju71Dsiw74Dp1qY3FYNSJs7cRnFjmWyQn6UdUCUME3Bq2RdoxtHYKJtjKKFjfknG74pShPYN",
  "key22": "3XJeapPFX8NKsfaok9ZPNFPmx7K5hVxg4MhUMRS6YzUkespVimPRTb1iVxi42NH6cKqRESFWA2A35aqPV8Atpeq5",
  "key23": "5MJPn7VoT8nz9HLj2t4ryBEV8PpVMx9ZqRQMMtv2kLzzVKZP5Wo1448Xm3tcmLymKwJgZaRnc5nLPnDyZzwoA2KW",
  "key24": "4N6zRpaD9ZzspHaRN7kjsmSeBSDWyFqnkQzVxj7WvZKchFMMHrXTGLrnnQFJZQvkToLsEbyXw7SLy8hMkDqYf8yx",
  "key25": "5X8yoytQzQxT3yViQvnt9oaNaE6TWyFwuB7CwTUVsKPjdBeADuLBrJ2Ym5zsGbv3fyybjG4SxGjFCs4UfvgaT4EK",
  "key26": "2P4BFk6j1drVGF1BGLM4SA9VNWmjRXAwVrMJAh1MV6kjcapgFUbvPp987D7bpZLTmFv7YhDnjqodMrJSXZM5AgLt",
  "key27": "gcRXfqbkqKzCjSpDY6ZTgEgChrujaZvPAKRii3eppgPqnyN2bMAE5zS1DZF7TUyyYzoCvhFsxJrSbKfpbPy98Gu",
  "key28": "3BUcQJWs5aP2DiQhFFWe4otuG7LAoBptNurMEZDKTURLNvrTq5gbE1wgHQBq245pDBJKt5kns2VvPuKyuPZvdi4y"
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
