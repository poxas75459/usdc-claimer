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
    "3gB4r48TDBy1qvg1dbXXKELsbzPhMtJtovZARH6yKA6ycxmrjXzMWfELyhmMeQkJmyb3cpoKSSNxdR4xe8PdTgoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45A8tAUrRn5paPXvcNCUhJ56n4ZjxyCfczoFJhZCa13BFrq6owy8osqsgdkC73gDW8q7HfA2gnmPf6K2rGcaPufg",
  "key1": "4PgFMQeiD6tAPTGxHQiZHJSeSSY1LW9EAiAewimtj2FyM7ZAt9ZJwkF3mdu7JGENBTgjv7tKqCRc9Y1inQDX6qd5",
  "key2": "4SLhux7fGyengUx8vzPH5p1Xc3aRpL4rkf9ejmGgGw2aHB5vhVS9zTEmC5m3i329YXteEeZY9gmGGwFwdiSEaH2o",
  "key3": "4akaGdZNJzSYMyAXU6d6LNcP2REpxTexxn2au69yenhM88tnybPofF4mcnjLM8FsbmaE1yE9tAeQBeWTfCZar5sG",
  "key4": "425JrvDVmwgZg3cvdarnwm6fzrdWAgku2s8T5fkz2y62w5dLFF67N8s2zYE6PjHQh3zPBQexW8NgcR9oKysGHimF",
  "key5": "v7hsd7FjoYmZnJdKNXMhUfU32Nph75fr6aoXe6h8mh97rsXgVUVuGwXDgVr6yACrA2MFgTseaXaUfLM8Fp3GByb",
  "key6": "2X15N5uD8wszEh4dt3EFVCYGRUn4KhyawaGibJSfue5VQJa5K3bvdHihQ8riKU5fNzarFXDSZfKeSkHroKVSDTDD",
  "key7": "5h3JCje8nYrUNUyvGF8aPsqCQbhn6GkeZFFZMC2sjUp7mAvFT6Yip9NjBmqny9LoaZ7hwQs9MFYp4dkK9kuT5eH2",
  "key8": "42MDcmPSdnUKaUEh3WePoaLL4Tdqv813Xrq9gBLTRAPRv83SJ7kE2JneH1VniEeMkdpb97th6gtTxgizyFR4mkyG",
  "key9": "odh2sHQGtsf677isMAzxkZcnLD4AR5n5knFj3HRyxRUnzf4RDoKFakSV6sHVM2Q7sGjA4GK9WxedGy1Rdoqw1Pb",
  "key10": "426tG61AtmZSf5cB1AK37YjBcucLA2mTZXpvBNMHAfbBkXyEZAmZAwRRvMYXcE75UxiGfLhEmLqdBUSgUYHov8LD",
  "key11": "XvEYSrWyZvMyCQef9Uc72W8VSjM1AetG7fZxfQG4nz9ehXCe59ZK6affYEkvnxzL7tLE6HuJzghdXqiYPmQSuwi",
  "key12": "2TPhEuXq6R3dZQJSaTt2qx2ceBBMkpYontk2umC7Dy9mTgPpvc8L21PX1zWGD7RBcuVM8Kochzm5PPRhjLpMpZAG",
  "key13": "4oCg3Wjai9WY5mmMvJgmyX75HzUyjx6U9H9ChHvJ5Ly5RN1AHoe2ri4W9PtHUB2iHVE9ZxstBEfxtxg6NdZqPijM",
  "key14": "XCznMsKX73PoU9ZFUcmMJNPCe1q5pJzP3zQiwqwv8S5QZMXUQXg7TgWHnY4dCCxgHm3zJ7ijsdcKutj6jgUk1EF",
  "key15": "4TLRg8aphLNtg6G9QxSH3XC3dJd4Wz63NJkqRi43jFjVUA6A91CVspQzfUDs3iWbaqQze3WCadQ9vtxpyM5ja7xC",
  "key16": "q1UEba3DcXQmA7TRC1EQEUjJ8QvdWssa2kuBt7eb3USQvZR4mEjWEwoZjLieJrpchmy5C1ZEfYDvSZbx7Roj2AZ",
  "key17": "44xqLkRAh6PBjL7UJgutjVGVbKNwmbTB6YuPfSkxMY3o68zymfpTAb7w1yyfYfqQnScRsSnN9mybCaTTD6mUZxdk",
  "key18": "2RqvqqtrwgsSidMMdf2dj1PaFdx4NaqvY64xzZdRq3vkXybLZAHXYYpSddqtrobLBf6R6hhZYmwJR1J8Z2GzhypZ",
  "key19": "26ne6GCQzUuH1CJPMgP4k2CZvW2e6DpYZUqaELx3qtvRWMktfxAKKNB2CQA8zKvf36pP7PVabVoNDu3JoR3Ukw2R",
  "key20": "mMLxar5az3dsPDWqFdhEJs4h7vbZJkiZLExSVjaw64FFRZHtYpfreqnoAXWkVhdLN5hJnxgbmuaCdvKnZjk9pXe",
  "key21": "3Z1ZHrq23JGzHZ11V1PcBzMBmZ8tj3fQXzvixGxUYb5N1ngbpGLnR4TFyYPJ9dcvLB3s1DZ9Y4wDkamUFFGp1TEL",
  "key22": "5HhLUueN93h6Enp7pER9VKVTFeN39edyF7fBezpHFi3nNbYMmCTFEbXr6f6FzrrpHry7XyYtjHiuexhd6BqTLfDX",
  "key23": "66x8N1wN4UV2Qsmb4ApbUn4wG62ds2AZiwSBue6J7mQUTpLrekKHzhftBMiUVYdNybtVZZXzNwFK4DeSXfw6nL4h",
  "key24": "3PPZFeRSbKbx8v6hp8nUXLyEd6Ldkzhjz8QfFkeUz9rovf3bJfaTqk6Z3PnH2U9xxcAgEkixvXy9sgSBeD24bLX7",
  "key25": "3XjjKP5TVYT13tgbfPf6T1dhpeW5XuT6wjwGePuxKPKJiVAw5woaMfZLkkZy9f4GfZNkyVUUiLuz8tDDKJeDhH2Y",
  "key26": "3e4CcZyrDdtouYuxxJXKbWxfWZW5rvTJMTYjSmRr3SsogBxJp8DHkdqEm3bJq1D1MWiJyfDTEbK3nqDFcVBCtyzj"
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
