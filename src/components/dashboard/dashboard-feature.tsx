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
    "5mY6aWi7AyTGjGhpYdciKKCVLfpfn9XdNqCwitrRVn2He1LxUWLZeXtYWoC78ztFhas8Jx5CbYCueRwrzEPpKZBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B3cnTCBCRaZebXbDLDyy132RCDPVH3QTJGDgxKzJWwFhydXA6vro16Lnw8kv9dt2nXQTVtTCHaC3vsAG1cPaZ86",
  "key1": "eroHekP2UjSH8ACeGoKESiAji2eDRBCvYzzJe22k8ksUPsHA4at7siFDm1w46mutpMRYGtQZ2msUAFKZnizxNcP",
  "key2": "3wXHiwUcFrvNoKWZhP54CbT48iX59zApsi56ZY9CwLFPPtrjsMRLo6fy3H1QCxSKHZA8Mwb4tXNEKNkFbb2dGnzm",
  "key3": "5GM28j5Don9SmyicpTxVv7wPYY6AiASmhujE9sMvWyh6TxjsY8XMAdhu3ivRzk925WCoqgWav7K9UEdKrkrDkVLo",
  "key4": "2VYgnd8KUnaVeNadEkXRHX6ZSGrRCauZwQUqKCPZT4cBAqJbQvNpkYkhr32A1WNPZYqb5qrgysi4u7MdocrRYQT",
  "key5": "ojihFNxb1E88b5r2Cu4o5uTxQyQN4eow7A742Y9PEos5V3kfzx1rK3FwbjmbhtfYVp6MPTaLGV2W9rYbbjt5NwB",
  "key6": "zjocV29Q46f1v2c1vpaBbD2RvuM2nWMACASoTDCboTUSead4YyFWcPRbSzRdaEgff1KFT7Pwd7BquZ1D9HBu5GC",
  "key7": "4NVuh37kybKojgF2BEERPRJHrn7Q4toPfw6RpfwbAnrrvTuxHucWUmVyQUJqKUx1ueVDE7B7yMNkZSGkCf2G5mdE",
  "key8": "3spQ7a1KNYksN77Pg2FoAsAmqK3Cb6pL6XmfnPxo6dsAFfhy5SeCEqRKbvXZpLPw7NaLfh7CqZzfynfNfLbtxqqi",
  "key9": "3fKFshNnXij96UUEpS4NitD74ZSZaUUj5SrhuQf4EpeY1ceMc7Pupbc7V8rnBp3j8NpPGUJAe66YZzuMt6KugYSM",
  "key10": "3FPoqaj9wQfmnUPUqT8SnJTw9Tb4RFzgNMVs3ekp881ybqvetLaTcUgSSxW5A9utegZLvfLBzoGTqwkibgJEFkv7",
  "key11": "2xygckg3USGfSP4twEusHLzaJVUBh9fW7y8CbFMmEQFx2VajTuiYEBT7w76X7qGcZPy7LHqkDGYKq6wzNAdeTuja",
  "key12": "4AyZupZSEvAwm4r1iY4BZCbTr5irH773YVMBcx23YCAaBLH1oAPsUSsEiai1H4obVavaTAeHVRLMmtEQBCkUdsji",
  "key13": "2MxE1fKEKR9u3RA3VxJ6a1mGvRELc2hfpy5YcBjNYzMqjUoEwndG883J35wBygVciSXQMkMHkM2gnacURTvehK8E",
  "key14": "38abFLv6Qo3Q97gWwsFfueJVzTGRAc3Q3M7ELaXSuWbYeheGuvxZzA7zrRNRtzoAJzbxWVWiox3CR7fDn4LRBeN4",
  "key15": "5mXSbDeZS5NawYcQQcFN1nS5XGYNGQRqkmzA9FcdqMtbX6tVnqkQBxrqoHuLSQVP3ND3fLUruxsZu8n8VSR76Acb",
  "key16": "4ppiY2VsbTm7MYXBsgxcKYZSukWTZG7zUm78EhU8C2uc6EKNm8YxuyMuD2pK9Ev3GwoLoVcVijJwFcFVC9SeR8Lo",
  "key17": "2U7ByQsg3CpY6i156wJEkeLexbM4cJcGeC7wmdNj7R4K43P7tZve9n2ZSh8CuZrDygzRmh3HyUAqKn18vUDnukpP",
  "key18": "CLjiF9XdCaLMPsH4KpEJBipKGtTCkkcoagKZbZvYjzzfvuad1EG7Nk7zNUxHFGpgH3QaACP5Uejy8gBq8bWtrS7",
  "key19": "5xmTbKcijBuDz9BALpf39grt3WRN9fL4ULPCqgiZQ6cEZ9EKYM9rJkzz47f3pLbTS5YBJw8GyzF1HFKrL5rkuJ3e",
  "key20": "LZDcm6f6GMP8Lq8YuavzRNJWnSxiqUyiLHfn3fWx1QdrUgGApBsiNp2sbKWinZiYKF41H8PyMmhpKyn3eWTyVrF",
  "key21": "2QveUToZi6BiLQSBkrgZfGVQWW6RbWgirE3Yse8tkqTFwa2vnG9JfFvRvcFrAabEUytruCRfJUenbX2PTkvgZ1vT",
  "key22": "2DitDKuBTnpdsUVFpCdhkEQGMSQzLPVDb4YhBsGesEQddQLATUN2rTN345c98eD8SCP13n61ptZeBw9XSHsXnytD",
  "key23": "2GJ3uUE2P3mURverUC2asdCJiGnLKZU2rRz9ukVyvFiNZ88j6dyjFSPSw1PdFaEsXaH8Uk5ycbnBHnAwHkGjphJd",
  "key24": "48s6qQCRj3oLgeUaavNKwPNdG8Wo9bBsZooMHCJueH3nKF8ocyUNJxgsTNQGkJGMThGdhc87BCTde1ep72Vrt4RG",
  "key25": "2qCfT21czxDfuFDd6APzdoSxv3tbpoB1SKzGd7YCcSh8TFsQpXdHAQsH1XDpzLmHmkUojudeBbtZnsM5ZE9NFpcq",
  "key26": "3RfL6iK4Y5sCUwqMG4uQVEBJzTV4gqUv26HCTqfh7b3sc5X3V1CXfjGFKwKhn4uC3iZFjp2kQwrjBxZGyziJiGRS",
  "key27": "4VGv79JSazqeMFL1v7GpLSGLDrL2z9p4NvByx1MMphLVd9kHzCM2fN5C9yNqG2pYpCmFx7D44H91GQgbrv7MLbY8"
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
