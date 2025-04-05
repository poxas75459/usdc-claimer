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
    "32KU3fjVRjVcA1X9PouvsqEBtkS2iWxAcxrNXH9SeJgzwUUUdLE9nmqwqM4nFjoDp27vMHUUD45HS346RjySKBSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36io8Qf3S7FfdCuY4Sn8hjy59uqVRwe8bCYCzbZ7j6dc6zMciLX75X6SCYqkHEXitoZRFf9Ux1xj72xk1mWyJsxF",
  "key1": "2sRa4ffDyyp6TQUZzahgkbadAgiNxao7yfogrnoKtEopNXFA42RH46bgwoKX7fK6wB9j4W82XVo4YNkeH1pJqpne",
  "key2": "3AtN1gGjqxFwNJksHB8KqvgpVpKY3S1wer4hypHFq1DPiAhRxBQpADuD9QDnZqfkAJ3DXhDJ3xw7YudUiRgU6isa",
  "key3": "4TwzX7FVjT5G7HbQyS98abPfRGZrpaQmoZB4oPqoLF64K1yNTGFRAv4YK5oAF9zS9bmDf3qaELEQJxK9x5XpZY3h",
  "key4": "5s7WqhMygx1fQJG2sFnu2xwryTpz8ztiZ11pnAkwtoFojgoXtLbu453KUCbCpRMYMHRQXjEFmmxr8ZKDtuCnRbNP",
  "key5": "YzoKL95XFQeeT4bW1jJtc8jZZqx67zibZj5wux8jK8XPWKfwWZ9obV1NHTKJruNUzyn9KSuESu3NBFD5UgFP8gu",
  "key6": "4tS8m2ngkBG2yX8eSq3hVYk8oiX9kJ4cDEBMgyYKGZLMMuaj2yqrE5UDBdz7khCnrYBWWzCVgxJXRHxB52oLHjcr",
  "key7": "5KhX5ag1sUMEesnxaDx4keHqqDM3226DZjXwKSi3r4UC5Ks8UQFNzqcjarjKm9HP4tMk28YEAykVzpn7B7oqHDZ7",
  "key8": "5fKGSwoK1zki3UidvtqrwycZSZCo9FDyfg31rHPUMX96QvTzk6Zqtt75LubDVUhowWvSXgDpkLTcR3cMHQ5BwSP4",
  "key9": "32ya7CHLGDf3J4X63U9313AUBrZMSEX8rKhf8uQ5v2Vp3ijfHoFjWzj6wGBXsLqv2a1Up8qbN1uPV64pQzr3gcFe",
  "key10": "Btqoe9s6HGHFv9uny1A8T3t6wgTKo6REe3e22q8T1DrLBqHwmEF752XshxDbG1puCviP4PwjMt5DBk3V25H4FFi",
  "key11": "vnqbDmcZsY1g9s5kMLGMbeBh82tDrJ7XYxDqcuVFiGASigpaXWWoQMQocGNJqTmY3cDM3iimMkssthiakRo88Qi",
  "key12": "5FgynLSbCZq34nrinTtgooL1pMydLkbVgMwERAYhM9TQNsH8UGknNDwHfDswYtE9cwTttKRbUoQtcALd6zq8MQ86",
  "key13": "2Z4NFwYE538rAdSGWw6Tyg8zTPza8qtc2S7fWkc6HAcawCyoN1AggPFXUiUQSNWZamc4iSRcydb8jYF7rmiDKYCp",
  "key14": "J9rVnCtD1Q57AT2tR6vHvNhJ1CqfV31TB91DF9VP5HeRcjmz6kHQ2s7a8JZ1ZDyYMPsGLozSnHPNohV7XWuYbjj",
  "key15": "5MUuxFrr7q3G48UqeG5Dh4s3UbY7n18BZpbrk34D663q5fKKva8tA9re4nZgDyrknLYdKtnTcgqdiUdHQDKfTKXs",
  "key16": "269YrbRzEH93gD95ugg1962Ht4kLjd4ziap1ny6gAqtvVEcydkxRhtgc8k8ZWfKiVJHTasv5MSK2KAASeyhoHeuV",
  "key17": "3eye9vjrV2XLcuACddqkDy2SHrFoMGKrEiEZ33oTrCHpgEviAh1LsZGTtnDK7XrP3GvBrXdCzxpf4V9SiyYqj9K9",
  "key18": "5rRzAzdnJdL67i5nsaPzvAepbToycNZCAwGmhtoY98KSAYp3cw9oghWDvcxN3AQA3TeoVCV7shRdcnZebQSUsAoP",
  "key19": "5xeMA6EKdraDFuHMQ7rpQ21KuM8TQry47UmYV4W7vJ677jtDStseGsmV4J9Jk9FbqJ3hETSUppvNrySFF749G3Ud",
  "key20": "51VdML3pyhgfUZVx1cYJXXJi1nkEwGyZteiUTDZkCzhNcN1NvPy21998zwMRBxiYjoQzoHv6bHkFWWkqgJo2nxa7",
  "key21": "sNfqNBkVucD2VpeM5PCYkx8FDoXJkggahS8VfE8HVT87a9441i1LmrCWWQhA3PnMgWVzfvJiS34yhBZfkKCSkd2",
  "key22": "52qikwGJ3GnczJTsUnrUTAi1a52KkM1k3r3B3U4nhgnd998zamFVD6NoKMtNhf6QTpxZ2hVVF6bundnvsa24asjE",
  "key23": "4kjsBUz9NY9mFJDfDiJAJCDmkvHexLXAPKEc9R8SAsrCwKwDDfQoSNFNZ9YVab5AVWJYyQuYJe7CEsBNque33MQD",
  "key24": "2FBRkL6KDuWEpbtkQuDenAK2wH47HXG5QqaLFT7uFunkDE7bZvkBdNnAJb3zTWuvkuwqVzryY8ZsQ2CuV3exSFvK",
  "key25": "2A3ymjFzSgiSmvRrDeVg3ryARUf6FJFDLBJ3GBLeMQaqpUDWuiGDQHunLyLiYg1xg1yjbTYLko89ZcKtJSWgeRHq",
  "key26": "2xccRpqcCpsHQkhSD6mXoG9dZgwyK1Hvo2bjeCYF5YyvBUGnPvb88scW8HTT6cLPnS4PBDVHEZAAveBJ8FXzFf7k",
  "key27": "2cVdvrGrWRADwiHZNmV5TsSmGNA5N5tfzYmfecezeV8VT1tZaqqTk6EAdyXL27m84kFNsrLjMNzuTfjmgefGFLYQ"
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
