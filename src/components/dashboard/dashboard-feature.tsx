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
    "61euHMmGkF84Uzsqcp7WpYEoNA2tGMLUDvB2UdqUEdgtxUjPsCb2NhkTbGSfJjj6onmMpseKDziahcNdCevxskmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65XLCWah2PGd7VBZjBgxPY5GDKtPPJvcWjdVGMMk4YJvkCyuWV6Q9sFbTjLiLZv9jSPu99kP15xJ9nBkFHZzyW22",
  "key1": "64uE1v3uThisySdQyhme2vKH3w9y3Br96ZAB2pi3NXAhAPAhXE7upZR6NbPHuEbb3pnzYXQjX2LpBdrNL7mo43hq",
  "key2": "XpyckNP9Pmuev71rXp3U5Njsf5RuZL8fYGBh4icSrVxsg3gSwwS4PL3cTGKBTgdcAcv5WEqWgvTVaz5nuVmYji2",
  "key3": "4z3uUbsY7pW5FZ1ETts3MK9KR3vo96fcWPTp191dCwvcs8GicbNVyhvNWcYsDx2FiQuifSomkzVZsiGVscrnrw9Q",
  "key4": "44N6Wye6ekMx87nzkkUdjYf2PNEjoR9TeEcYSkJ4LXyrCVDnc5RPYHWiVLzyJBrv3Mbjgn4S6rUVYpvWrstZ4yuG",
  "key5": "5tBdL2ejreXefUqLmB43rfxtr6pEsfHyURg4tzJf7DXKV4kCnDhpV3eP9qbjAjGLKRKzuBVZTwTszQwL95JzccMK",
  "key6": "39GCRhNzyk5wwLcyxw79FvupUErCazQi6M5wdMdiocT6QFPz6yD2XCW13XyPaBiaGYP4fFSvureVtx9tW8Y6WWnB",
  "key7": "eufwFCrPSuKK4cwhPPpLjzjvuVBdYvAYL5wAw2eRG1Hv8rXK7JigVXf7fbMz1LTbiwoFGHTZUjh7CUNsYvt4SdC",
  "key8": "4ErKDXxnmRth7hdTRG8mDK7qdP33rdqzq9jbMjjdwmn9UFzM31KgTvEyBqadKUgwaVMDK9uZxqfcwPPoFTfjrVJX",
  "key9": "3yhJJFKtiyJf6jzi6jdEa892xmHb9567hcpCebxgNNDfbzGseX1sAe94wDpP8BSCwcB5HDVKFKVWN15vbZUfTCaZ",
  "key10": "4app63NzcAEywY2Ymajfg8Xs3VXt97bszHiGj64W5YMcKV965ZeQ5Z1X6mcoxKPWmweGyoKD2NVuHcdoxcvRWozB",
  "key11": "CsEQwmVevGc6Ht3X83UEcHrJjDrEPdAsczE52Q23GnxwS5h5Pdd6kVLveGYb2GStvKPPZofMN9gm6S5DxMTsvP3",
  "key12": "EYxryrrku3iBYStkWcjhTvQ7dLQEDXLC6RPnMKbPQNu9JfgjbcWf5gM1Bh1LJpQKBkpzDR7W3HmMn75N5MYK4rn",
  "key13": "4w2eDTSi9stUkGr6SNNfGH8qWj6kuPkWtczK2h44AYYwTdyPnuHnCm2oNbRpcowuwvX9QKUwSJmtP4rqy6Kkq2x",
  "key14": "3nbvSYJ4nvDbCeoZpCQemsZDcmrZUyR5A68mCvibzefVBqy7tHRiX7ch4W9tpfCCqz3WZay1tv56iaqn1eFFqa8L",
  "key15": "4hjCCewocjhJo6JDbHnPigAh9nQEdXDzeLuqwhPnFDdPb12nBmyMgj8qS6DWViH5ffK9EtaBMWN9SYR3kygaUuG",
  "key16": "3hamC6AS1YxYDDdTwktr1RKu88kfgdYUDRnDf3aZUAXg1AxX3cuft3vo8dXCc99FEp5i3KvXjUnKmLVKiVxJLBTw",
  "key17": "4tc11QBXKYTbK9zqFjduJvotRvrfWFhqbG9LVw4GkzBjLexTiHQCyVDbSkysedAFYVYWh2zaf6ie448JFSkrepwr",
  "key18": "odyvZwZGeAf4kt12L3CVqKvTf22uKWFzzNd8CGF2F89E2qKdfuNj9vXCJufHvPuBLjc5mEKtBm1qWX8CEC4TT3f",
  "key19": "ov97y9at3Tz8QxNsPPk7jQ53gD5Dy4zz8ERNgaV161dGEkV94t9utPK36nfotUfaFHeZZQVGwBVJAK58wsV3ajZ",
  "key20": "5tinTg8d1gRhhRKKYLrznB6zxHJVjgwo5tSnAvPj9shtU4heYPavqXJtJdJSKv8up278UR2n5GyT7cRGT2vSSP6x",
  "key21": "4bVdrNHhLxjrPDSPWJRrDNd4r7weogMsSYcKJvbRJ1WEDLGwGDjNbW3GBkAtB72FXMAdGUWKFtxpdv8zkhTzMUmh",
  "key22": "64H4MzHJ1G4dqWjByaDV8qZPASQHHHFgfV9yugZhzimA2DWsSVGR3dLMddJMsddCCvxpqBcbrJVXqoggce7FbSxz",
  "key23": "4SVqQM8M7R9MpDDKRT6mLaN1M2wLqQ3wJAs3ApRrfWYFa8wTEv5Ge8cATy7CVTmrwWQLeaazvaPfVo1gB7XL6JHA",
  "key24": "3WqhZCZMPKUXzHzAW9SVf18yNLWxdnVAG9SBNX2bcBNqVrZtTsqfgPCRgzhWgbzqWC9XNyvHCZTkTPJWgVT119Tb",
  "key25": "48BbeerkkKVBmSK8ZpVSQ46LHZqfYaK4Ys3i3TkxWJrQEW1WBsTs5diBzRbnMaSBwD1UkF162nsXsncqW2uLey7a",
  "key26": "3qPLWqVHCZPBf6M1Ln39PqCq2VYSUhvgX6rpESBgh36xiCJZEVZH7m6rbHpGfoHg4F3VD3eNDYw8jagiif2AYuCk",
  "key27": "2AgnozknT2SLHzSRyJDWJTi11w2ZNB3ekJHw2QEw8bpGDXB8Q2U3PwEmwR3fPCucXtdhJkYo8tYW2AtC6LobSmt",
  "key28": "9uKB26M6NzvbZctgxyerro9KRqrY3Cra9fcjnz1QPakD2r2zpmgg3vCbwdk63P51W3KohVCjoHD74NdWr4vaiJr"
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
