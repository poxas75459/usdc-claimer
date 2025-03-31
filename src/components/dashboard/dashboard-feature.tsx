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
    "26bpg4XkQuSDPqddSKDsktxzobSt7rciW8DzD6gxa9B9HQcjMXBkEE4futG1V8bzYFPYypwn4LuBYNCvcQ6pyDhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JnNR2QLxwSfBKvjgNWuAD4SoxBU11yoWYhjNTWZFwdQQkPzhsqrdX3auTiQCaZPjtkEwpqg1nEM2RPQekMLtgC2",
  "key1": "5w2bfp2RFgvqhAWrXTZqB4BKYjzLjRTYAXQ6PTbqxhYVxr12SvbGj2M23219tt8RiktzX784ywHzZiZgvkWCcGmn",
  "key2": "zTxHnTBHug2NKXsHd9vgn5ncisLM4xVJ6gGvnReZ2Zvw27ECBVD8GFAHJ7mEMcrxLPz9qZzz7y8ouzWSxXzGW4b",
  "key3": "5o799hDrZxEtbmyuRE7qF3hBJFqSUPRafhLkhqYTCSrzUkNE9esmosS8xb8Wmy6ZnpEyqofB2556V1QHC6vvpkh2",
  "key4": "3ohS97MrHZwWEje6mMMaRuCeaKZ6gN2UZUytWh8dJPmuoAnqS4UvLSpfX6b1ZwapPrcXxJzbDFYkb9KsbeFAkE5X",
  "key5": "LLsjz6gnhqu3J98BP3wnGtoYwYKvfJD1bGLhVxgg86MgbwqA9y2w2nkHjdNTRxguF15qw2zJ1pcoPR35Gu8zd7W",
  "key6": "5JfkbghDpKEyAXoAnji9Pr6bdeGbFvRjUonmaSxrQsbfDZVzzvw64bZjpjx4zYrmmz2dj95nLHsr34DhgKW1bQXP",
  "key7": "3CqUMtxoGjnYkmf2n948jrrz4ieVCPkbbVM4BBc7ttNVx6ow4CqYVUDpusPezCrVM4FGZ3wcQjdAzi3qLfka3VV7",
  "key8": "4HLeo8gZT6Fy1gpzU1Ua4LqcufwMC78uc5xxxRi5i4w85ux2P1rQ7RhfpYB1E2N5v2gGJDyAWbMAw2UfFqw8i3Q4",
  "key9": "2rW8U7a78jXkr6ZGAViaiFupmkRPihUKo3Uu6Yigqu9TcbwcATEtexxvSx9fyLJmucVSbYrTMh7Z7HphBaCYKsjT",
  "key10": "2Awue2iiwFrbXKDuCiPrwsuoJdovwgrbkBhDJ5zDnQSZata6wfdmdZBwnzT91AykbREeRxEJuxMJ18bAmhSejnWi",
  "key11": "8Asa3Mk17oGVcZ78uHabwzKvdqk37kVW2WFHf5ZTVBgQE5VpGjAuEBkHpbSysNSXrCwPrm6Mo7ySbaHbu7PWsvz",
  "key12": "4WCjpbZvgkTDYio1Nj2DVndwpqBaG9A6wJUrQ2eTDbfb79QYsqWu8Jo3722FYHNXHoyVzdnhKFMu5zA9Sz7UaxLw",
  "key13": "4Wgzy4TzZzWjVc4wdZxtYxXM85JzC31y3HQpbamUzHcUvXUiBRk8Ssx3E2L7NPxVXDomD2JYzRmK3QNf4N35G8aZ",
  "key14": "2J5BM7ctyELaYDZQ4tbpSFFDdJ1QyF38X5AVUtH66aVaZfjRpERoM3PEFbb4KXBkM6zxdMrg16wyXaHRTraFfJqH",
  "key15": "3qmsX3Ufzf8Y2AroomLzim4nBApFfkWQCy7BPNtCZe2DhRq5a8KCLqpTqby6yFjsDAig7mdE4Yy3aYAd5v6KgcRR",
  "key16": "3EYTuB2BUSzbNvMVXamy1LbujghtWCUYfgFh1sTqfZv2NKtY97cPZvGuiAXraqA3jHJ1hQDoX3jLWg6DPZqPRxgC",
  "key17": "iGau8KUmfKS2GSrNqGnhCEkChmgwj9bN15opxjXczFYfbHqS9Si7526QY4tfNkRHetWd4we4B1vTTnQTkDST9nZ",
  "key18": "Q5hvDGg2Dj7TfhGRC7p89SWqbCAT5vZM4wc4U6qwx2uNvx9kpvXBMPjAw7hYkvmucYMzcA3roVyBSV2Y9Br18zw",
  "key19": "39kmLyApLuhVL7etjrLMM2RZ2a3gwscMtJfkN6oCeniFj771oDNE8UK79d3L5Lunv3RnqFNJ9GTp25sLc5KWMT2M",
  "key20": "59j6LJgdLo8z1Zuz1b4s735G2FaBBrGXft9Lg4jpXPhDwj7389TodnisBJJWSascmebymdaPY2VBDGBcVJoSCU2i",
  "key21": "4vmFX7efSDrCgnX9FXgeHGsm83P42B7gnNMpaeSKc7WV5gU7jpJuPaKfFbgo4vqTDSz8yMtTD7XEwa1WxZDy62gf",
  "key22": "5pqxuSfvK1SBnyt7c8bqi4GWduvit3JNWUcngKfmnNYTV9FMdSWDv8sB31VeEDhdu24bPcJLfWLSaK6EfdQTm91F",
  "key23": "5gyJKpWrdyi6A8gaphs6oMuX8jHviDaCazFTJga1G1HMJuiGajmMs6r7Bu8FeTGaBsDif2SC9XYGYq62VZGyrxNn",
  "key24": "48divXEE5sNNAoHodzWw6EuveaUS1gzjgynVrwDLL5mrNzHccpkTz55gsXHddEMqdXzM5EDsPzykcwWZXSUdRa4a",
  "key25": "cWXwojrxHMpFqebro2z2wSusd9wQ2qbXYYF8CFyyUzViArv2SwBgSSepEQyeCjAwPo2aigtfE8MVwxp1PjiSBLz",
  "key26": "4y8d6ZkZAm6ty6n5vS8EVw3GJ89Xod6NHQbvPbtV5nQGoCab7frmYksW8dLLyxUGMaRVchYZn4E3zxY8ijfLhMYk",
  "key27": "5toAKDEYFwfnS3wHM5unCSFAd7tSV9gZgPneCw91NzmsvQECFDw1FX52Lbxjrx46oPF8gNtSsxw2cqxkGYdtJx7W",
  "key28": "32m5ADeSns28Eq8RXyK6FnWpjDqgUDgtcWTQT1mwpFowU5WwHhjfkhbvW2CvTtvZ2RkNidSpWvnnKogtvurnft8E",
  "key29": "2f7kirQp1fK2qUkWsQWHYMNYtL4bxvqQZbpQaoxMn4dGDRZDqCK8kFVTqfGfY1PYPqUXXmuYzPtApbJVjfduJGbB",
  "key30": "3qbQea39Dt4u7hhmY16jbNYfukcfNSE2vAkBunNnuR4GF9fq9vj3spNSfLUD4axJHX5BbXCT5ZkjJrWtWqEtQWio"
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
