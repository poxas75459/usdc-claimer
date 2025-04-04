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
    "4S65MFQ2AC3wJ1Zi5LLMJqt1rkddFM8DXtw1fYuXsE5xtYrVBUd991sqKH8YBELeMGkdM3dpDzUS9rNzBtnxWEFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G2LW2n4kQ6VftBE4csGAH5b6TQrMCj4cgyFWtg9dwcHGWpw4zAFpkWwqEUaozwkZtNikjtBfv2kf8CPfX3zM7Fk",
  "key1": "TeT6DZMKJ2yhdbbunXCmMWZo7Ys9Ud3kv9G9EujA1JH5X3don94d5PLmvqUXJFbKtTHT6CQ2VQrQtbGw1fe6W2x",
  "key2": "383xP5AF7N1CwUgtdHfuLTBwxK7soja435kcCNf8iYgHsAT4Uj9wVaJMMLAP76GaEikhTDS3RUvNAWw6rFt5g6NN",
  "key3": "5Nc5tK8Ra4ZWvLCy8KANywk5tu1odKXU5AS9MAmb6hdW5wpxRpk6Vz7LNXS57NGXtZJetsm1cEf8Dkcuzrm5ZDh8",
  "key4": "3MmpQ6rA9Kv8fK5eAEm5Eey47gTn7Jfkz2xazDG9Qs3s9oAi9w5c1mqDoo7Z67GzcJyApa6cbD61rqfky1PbNr3k",
  "key5": "4kwq5EYa27Bha4RSddUginhubncDyWXFAyGGunm5y5jU5ibefutFMtkWFAGzgDToCqmgEfyM1qYnvQPjceo3cRdP",
  "key6": "5ixgoEJ2Cykkndre4REVpL7vWZLyVJVqhpHHZBRUwv9JcQyS55F98vPhyr2nR9e8HLVLviQ8j2LojvhzdzQtyJp1",
  "key7": "4xDLbzp3ZZJmE7bBHU5GJsvCN6N9KES6htcw1ftdMmMhf59KpM5mgzcdQCPx21AfRVs2GPw3UrN8vfUb1FSZJDnG",
  "key8": "5KQRozYfobgErPoBRWmeVjJ17NHe1YKkifW82GTZkZzqnv4DspiRr7XVsyJcY333X4qrsBAE9t1abMFwkXjgWGBD",
  "key9": "2ymhAS8AA26S7PkRqQrJpanWg4KvKmu4FVahEMCY7ufnYeUsFfaRmkp3WsDeDaqVgsceK8UpfhhG4JWXUfR9nsYn",
  "key10": "4WjV1tpDyhHGheY2ZYfjXwqwaDFfkQCk2kFENq38ik21o1jWZj2SHg1L2ScFiBLAYvqHCosP1pfkxfJEpYmtFy3L",
  "key11": "4kCCg7g65jRgmCyGft8WwGpTMaiN6ZSYPLX98daPh9ALT5AS2fzR3ziysRVPpNG2JPzUkqhs9MgsTxhmE7n9YaPa",
  "key12": "SaEHQumQqX7ed2gGdZiFvX6BtDFmwpumnZ8tSkdmPwYeLjSxkvBXPdxTAoGUUEQbD282SBBeCPtHkosTD5F6mYb",
  "key13": "tM3MXVVNPDiFjBkVKBCUVsGygrzekCCZV9VN25bMo4tfQTYUgBcawM9BQd5kz6MZeLD9Z3G6sNGskTkCAh8zrkg",
  "key14": "63Hkrng2XtezrFUkpGdast5DcL2y7zdG2FMnez6E4AMzbaVYeSFT7rCR1tTjKUGN2wo4BZhnA65vQWeNFFoQCpEw",
  "key15": "8DWnwdbi2PSTwYo5BZxEKwBbDiYq8haKb3PWdApRvPfwuKukfZ2TS8x3wwAR6ND3qApBakXkGANf24DXaUfd87t",
  "key16": "4aUh96asUu6UfWbqUox1A4KDaWv2S6Xkd52894AQna7ojZUNgBaCXE61TbpzjCdvycx2TNKh1FefeSuyUpHNyiLT",
  "key17": "e2yD4ah1rn14TJg2ohVgJ2iZKX1CVpw5azprKUQT7UkRqXnEy3otTtfdQa7Kikp4A5a1TdXQwkE3cE1Qv2h6tdG",
  "key18": "4LyqcWcEn3QiGLGBYsbYdmtjZfs1bLEgtFg39zLbYWNG3u3dfm3HXtLJcTdQGu6RLwZkCo4oLprk4De5QnkJdqDz",
  "key19": "3XCZAEC9uErTwSFHHPkApzCV2FmbFQA6K8VfSHhPniCXCNe5pHD3RfLdTvniBPUwNX5MA9yV1a9rxitVLgMamRm9",
  "key20": "44rmLDq6upsek5cTdrqLwZLQTJmVGG87GyCVEErVPSk7Cpt1n8MtBKTGFHCxE7ckNBTYhR9F6YpHcEyxi646ZWZ9",
  "key21": "5A6MhuP5adddwNpxKYQvACLGR8YSQRPLwfsm19YStQzQpUmkGYvjPe2HT4zbwJTTTWXkSZgF3iDx2ViDb8avdmeS",
  "key22": "12A3B3F4nmZKHdf2FVzPxpoHAcFnHZSrnB4W4Za6yoKksjpaKa3VPcYyzLszLK5MJeDMry6bqS4DKSAuqrdmsjFp",
  "key23": "2JNDXK2PHHDhHLaDbEyVVpnd6kjUhEzk5w4SMpdk7y3rg49dWoBctPdLPG5DJjWRRZDCU15ccXevkbuNJPAN7pKv",
  "key24": "4TWZ3JM9LQF7vKMK1qo3JZgpXfYHx4uhQ9fcaVhEmidi5NEzRzwoPhNTfPLrWVMhnmXbK1wA8Y315hTtFMMjni7H",
  "key25": "2xNPj7LuK3BBcDhAfqVBoAb8LXejMFm2dBn65S2ZyWgE9JqxoUUg8x7RZQ2xyCskzL7STBk6ZtLdB3uJXVZukBix",
  "key26": "3bxufbbemvPmPsbb6o9eUA1yizpVdQCNjfgBXjBzvzWQDEL7WuT7mmKkpxSWuN23ukRMLB9ygzUE8Dbhe2EXHTbQ",
  "key27": "4v9RynFwqUccR44QHm5EsAZA7he7Kudgfg884RsMQLjP5MCUeifHn445JSecPoUnmoXVXR9KPhpm8ppvbhmuzmDU",
  "key28": "3wKnSTanehZqDJXqWLuTmpjkbHJvR78KP6gFnSHVAD8zWiKqLud6fWbwrFFaKsLTvFcYEhwXvzq2YcpAU91jUKaQ",
  "key29": "2EmHZHgFqqFfQvzwGL6ACxULbiJW6nHkv8U6RGX2Q5BhD6bVs6qvGToWRb4XU1roncHiEtCYnc4wZpSKLkgLKFRh",
  "key30": "gHxMKC57uFWZWaFmJ1JJLeUsN8u6uoiCQWtTUc82e8B3ChUeg1jb2DJXZ6VYoEL45pkPjTWPGyyd22F5vvgEqw3",
  "key31": "soXerD7w8t3dPX5hQVwjKykWiyUtSq5KYoHCArBLQSQFEsthBPtr2CSDVgwwiKqRkE9E6gTUH2ZFYYpvXJFSHdb"
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
