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
    "3meX6tbmSHXvt7uppqHX7P2wYyjB2eW6mSier6zYrrBcy94b5Arf9dafc7ScyRFec8GqkXPEPrGCuphhCHUR37qg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zma2iBgVHXnJb4rDQ8o2ttDbj85L95QnFEXcFQyMJ9JGu5fhXr4Pnoj2DjD379hciBZjj8Fh6JQVR4CHBiTJMRR",
  "key1": "3gQqBjATogpTFrLBLrr79Eg1bu4e8LzY2Ed8A5CX8M5Hj7JMcg1M63AAQgqEBZoprwvNWjtzZBxKxbz657NSovfr",
  "key2": "5SfY9nqT3K3mdyBszUDZ6VMFsYTzyZLkd5dLZMYfgRCRWiuAqZjBihATAuV7fF4PRvemSueMtaZ5AiQCDhZr2sBQ",
  "key3": "496hHr45tWLAmD9U21EuZ4L3rXZwQsPPqwBPE7BS39uYixTiL25JPgMFgcGnEGQqSXbdnpr6SJfMckmTjYyhxLET",
  "key4": "wSQCJiza6YYrR1v4xDm3voanzQZaFrKfaM6hrxB7oSS2Eru16U4jWKZ9j2hHo7JtUwgdHrkjqqCuZtQ8MnEdwfC",
  "key5": "21VuwY1yUxAqE495Zbv9XUPXrp5X4A7GZ4aXCUpBeoSNqEVQBDsn3KRRoh6w7uLC9nxcgpi8SRQNAEP4B5MYJ6MW",
  "key6": "63uMsRfGm8mw22A2brjokAoG8CJe1PgJpnET7xNPQgzULBKMPEXYH3zTz5V8REu855FZbTG7UaAnXio4mpftEWvU",
  "key7": "2tRpY7p3gEuGB8yHx2tLJhdh9Ydp2vp2deun167ZgXakaDCKrwYhseKcjSbVmHrX4T9ebZatcEkFmQ689rcmrATt",
  "key8": "4CVkbxNUwdPBMjmHF9QqpGqgjYoW3ggRUq8RmH6VucATTWSUP73poQYhctXsLFoKdVy4vuyGdiFPj8SXGce1NjeN",
  "key9": "9sDLpqjubHBTVN4h7iSJPHeXbGf2YtJXe7QT4ghLU1FcwSyPB3u8Sy2Q369bk1aNwpnzLgy61kjtLExRYQSj157",
  "key10": "21jE7XAnQkR7tAdEndeWCtxBCyFzBas6xWx3EQWaqCm6P7qsyZjfRmipTZxcJrHSv3zyyvV9xZAMzQZDHMo88ixV",
  "key11": "2KHDtRGDd9Bxcgfc9VeUFbn3XpcMPpHehh8v8PgZrfFueEGxwzjT3C1ufPCvmgejURHRbTRPf5P8MrVrRmNnaREd",
  "key12": "4VdCJssCW9FkKmqTsWTY9QQSfHQU5svtpWQCk19uD37hqitQnQLENSmtRRZ63atj8vN2kCSw1HraKJayWy4BC4mZ",
  "key13": "Phrxw4QNsdkLmLzZc6uVSnfJEpGyc6HZFBzsrLKRTE33WTNSu2VHkAWodzhDdthBYwM4CuwPfSmbynRaFwhHy7k",
  "key14": "2w1iiEJSfupL3vZyTzfx5LBMstETqmtbspKuWLZhoBPrWhG7Wyh7eLCSQsZrS9Scj6Ziog1zFngZxBeH7uoUnHJu",
  "key15": "3HDpXJxHWDaCSUgzbvRifLePbUcnJPV2KZLNVnKe7RWEenpoAPKUq9wg5yKHsezjAEhHjEdonL6XZWXXgWhcKtYi",
  "key16": "4ZNu8Pk8DZSUb1fsxSwSqhYygSEvjrhSNHZKGHWD41UrnZdr9HuR2EWfa4sWVyVuBASXiU87UEGYg23fLxY2zbv1",
  "key17": "DVyYmzTJtbMHxqwzvCXavFKEjSPs1qXaeScpmjrvk9PvbpVjiSNyEfeFjzDLoVttnvvZznGE3fxWgsjtdbdyHvN",
  "key18": "4HmfV17UC5tMAFwho2wFxQL4EgzusJJ5V5RtxAQeEquV7xV2U9CXLvAGDfTDcoZqhsNtbhmSmKXLh1QV4G8cWqpi",
  "key19": "3wabqwqYCBbvE2LrBPGCqbjEBzYBXf7UWtZHnqgGF3yzWHCR4QjoYNasTuFeyUfVbfpqiKeNkcgJhNoVtm8KzW63",
  "key20": "3LutggxKnUVCm3wh4ZxoDtjkaco5JwS4P2xChsghsvcY6teFA1xfDLDvhHNUZRMDU5q4P7D2HkkXFgqhPPHYNkxq",
  "key21": "4HZctEGfJ6wrMx54oFszYJwjpw7XbQQV9h3ay1Pafr988YGE5LqhCGF5uUSJWEZvCn273h1hAZ6USnJDWcHNZBGQ",
  "key22": "9GZ18o3h7bQfntJ34Q1S8tweSudGFgRXWwWtN9njT44CMgfnFd7D3ira3DkonChRdCt4Xoc4jsbFLo3hBGVJjy8",
  "key23": "uuLbs11BwkBNoagd7ed4dyF9KnV2BBpEpjnzv4L4Ukej3YRUE1ZzTb7ErrznPDKWCrNCovRE1bea4w5AerrNAph",
  "key24": "ExetRnsFeyTKCW7hq3NXe6RVbzZQd2WxGB5hj9ThCHWCrnQGvPRd7Mt8AEDrPF6dGuc8FmgCBAkaxp9QZwTegrv",
  "key25": "3Fu6pyDKi2FXA6JrqEw82WeUZZ8ZmjS9Ph6T5CLmNBTryYirsG3my2SpVLY8MkRS2tmgQWxkNBW7p1uzujDMuUpj",
  "key26": "mqkupwTY4c9GmJDKox5DpFa6ZBFwg3ss7t8L1QbauAxNWUnJNJBF8SBcdxETWNT678hQ8y2DTPZinvPuaV93X8M",
  "key27": "2pZfaWxzFovhGz8VTdGiQozCGLNfaQWAYdyBwZ4GL8iVsfdYKCFMEJfnDEiod5EVM6iWWtP9sWJP92y8Xc6bWJ1e",
  "key28": "4v9VgAWW8B6fZUhnmGqc5Lc2YbtDqJo9YTT6E7edrhkwGEpG9FJErqHt6ABsVdAhiPsgoSkNt7xMkzm9vdFHP8NV",
  "key29": "4Ctjr7jvXqzP9R8F8azibnKZf4VkgSWw5VTFBA7knjp7hCpuB99NG1hGaSh7jtGth3GZCYAfA766M2XcweuPgAF5",
  "key30": "3TJrBBzYzLnz7nYwAMJm852wDXGg3kePbF7eNdAxGgLccbHPqHej5qPhNKZ5RJfR2uPPPUWcQovA2u6npLCtogJ9",
  "key31": "5Y7um8DVa2njP54sGd6HaKmaVBnzzA8NHZsyuhgq3seKyApVBZCHetRgepp1j5spzFkdSH3gjy6WvRQyL3kQ2VT6",
  "key32": "2jeWSyEV9aoH8iocFqkz49A25ysVYR3Bxek4XGikKiAQidG58MPcDBfLFfixHR6ndNR2wmtQv1eDfkKtsnPb1J4"
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
