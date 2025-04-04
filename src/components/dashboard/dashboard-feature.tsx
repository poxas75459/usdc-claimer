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
    "5R7uHpbBSQ8HW9AFMCsDRmk3xHC9Z2NgTrQmKBGyQaRCMLh3GryKoUTqummR4rZr7EyiabMKCbdh7fca9F3PQRUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QyfxqPVsSt4UCjZdoygQB61XVqEYVA9pGTLxThUU76J5vgcqaRG7tdr5UoNz9Qnh7teJcgEGUAUKpRBAQkNFjND",
  "key1": "4eN7XcY4Ubc5iPeqadScSiVSd4Xom4UkPL5FQ3vEiSfkUMZS2yEaBoPuyPyQT6djo8Tz1RQYifN9rT8X5p8jXKoa",
  "key2": "z9tMqfbfxuoyQBLsdT5zrDKLNVD3WHGpbqgM1QDWRNZEJTsufamUBehhJpombfVF4P9HciRJPPR4GSASJw3VSfp",
  "key3": "3Gy4ChCRWSXZNvUgsut9Yhda4Ag7Ki78ap9DyvdUjVprrMSJgMC7Rwk4HUZY6DJRY4W8xzU3Zxr2vRPt8vacXo1v",
  "key4": "2kTnmTXThUDYEE5bQbd6WTwpLaB7wSYbdekeJWLY9jiCvHMEgsifXEP8QJSHRMzmfnp4o22tRG4inD2oxQCNVNLn",
  "key5": "5b7cbapWkGoPBS9MpEDM9jEnsnPtxY3jxUdShebYvnFY2sYxYFopuUo3FMXWzrZwFQvNqbFC4bqbAgRvJ4QTcihP",
  "key6": "3wh7vWJ6t1vH5gjMvCp4a4sx4R1ru5jhhTz5up3d9kh8j2gqZ5i5P61Xk6EXBqDKDaUyK2WUSF3fgywUF77vPCtB",
  "key7": "2aDNVQCPEUGsJDtUo66xKs7CCKt4H2UyyDG8TsWFqYJmoqBbQ6WVcoy1WQPjSrKvhs4VWTyNsWMxDsfLJXizNGpZ",
  "key8": "3qiMDmWnAvp9yLGqbK94fEb1k9osWYFFqYc2eEkCtwaUNVpdWL6kFjaa2dTmwuw29AD9Fe9W1PXaxf2wgKsrcCVE",
  "key9": "4zkTRpgWfAjfGybNonc7TzupySd3Nc7VCdBWDkLGYeVYuhSr2nVv9L7ptUP89tQyte4wVkhNiJrm7S488murhHPE",
  "key10": "4rn7U74RhdXHs6WBKgbgbfk3Cjdsnyeoy6U4huocp9xG92sbaAFuCPi2GqyB7T2AYo3UyEzLEVn88S6BN4cT92FP",
  "key11": "Ub4CJxGECTyXuJp59FWLDbBd6BHFUCBtoA6ZcaDmCZaBuFe6raJr1TmasCG6GTp6wdqEcoAwXKBgsUfemKEX5BR",
  "key12": "38nsX6tWHJjcwvgcwfbCo7symabzNiFXbELKYPrSE5awyY9WQmdw7DwNTzaJnPvpg1kQpdRCfe1TLZ6oS4iKTRq4",
  "key13": "4fRyHPj4oaKkq3YewJHs15Q79yMcUgkWYLAwh8PcBFfmVFoZ1m1YtvoNzATThmLbh3qxMoTKCJQFkv1surYH6R6H",
  "key14": "4Y29eposPGrBW9PsS5evM3DrgVRXwVngydyea4iQPkmPDMb3yjEwNMuQGHtJKfWk7GkQbtkWFV4A1Eq52NPGefnE",
  "key15": "5xkeGwrpSs8Ky9CWsU8WKnMGfzarqYsYvxdRzPHsc6XQwgh1BFdtbiTrwxz7LwR3YvHKe4PPuPHYsmg94CL2XkQe",
  "key16": "3o5LrnB58YaLU56AKkNSro5s5nXzRQ8BCcrVQ31Sm6N7MkH2w8epFa3evXiSx5SufgcKRHYuuHYBEuXtoW4m1Ryc",
  "key17": "3JDSddmJShGVFXtWnfjxVTrYAdeasqUvNLoR3QKawyZMGH2FHBmhxt2WGRvTPJrKMdmYz4RAGF7BLTfaa4mxrw51",
  "key18": "3prqjeBvSoq3oTN3GqC4nN7AFKGW5L4qgzWsznaSmSMKo61mmN4LPZv9ynYV3JXqsrXsDL9agWvZ81sWFFbsEmtw",
  "key19": "CvCYMrVxJr8ceX7ntb9s94QpuaHb5LLamUwKgXFQDGKDnuqWTJN2cLCkvQreFQkrug1Fasf1CyX4nW8Gv2wiKRQ",
  "key20": "LJMkTK1vM2aDp69rAoevhiNcrbQWP49KSyCb1LmKdiCiy126hxpyDcGtZu2gKMhMpnzK5u8DvSFMk8CyAu6fLp1",
  "key21": "4kmzFekuw7dD6TaqJZsuQt5abkFH6RdVTip8oACPGwNa1Jr71UC7J4wQVy7Re4xMVp7x7E4pTohXZ29gBGtoUyXC",
  "key22": "5NPnvVNLQVbpv9hUskts6wdNQ4PE7zRzY67Ek7iecMc1n6wedapqoRhT37jU7hu21wuRTB9Bdqqq665wcf6XGCLb",
  "key23": "oLTj437mLciwQZ9vwVdZwvirmqrZ1kcHUNbeoqsD1pD1T5gKg5XkFSHt8KL8n1bXGdXQxPERtzN5Twh8uXf3dnj",
  "key24": "4qbs6MjoKCYVSyiXTWjcZPRGByWTowqhgZo3JgzNXBivnuc7tVoFE2dyVbPYUpbQ7AQujoFHuTxeDJYxaELW2zck",
  "key25": "3HUUSgmfZPvLG8gmqpVeJn3kpp15svV7vDdxLwzZt58QKASRCMjxNyNA4pjGXrWZBrsPL4Cci5PeKhvqdwpiHKmC"
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
