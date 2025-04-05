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
    "4QazH2KCudrY4JypwLyJfjg9pzipbfK7AE5Z5Jm6QrDejrdAyogupodVAJCWq9gzfgaq78DUudaiRMceSTbcv7hr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bKBrW2cJ8Rxttbk92BQq7msXxnSMo6dzkGBWCQobrKw9JqbZSXkJwqYYLExE8gwCaBRRBSQNk977KETBWgV29TP",
  "key1": "5t36aZ4dHueyRGm4vY2UerNoERc4wQotk7591R49a9GhePsXeQSSiH432BbDcUSDqPmXT3jifEgGFBxGK7R2ac4m",
  "key2": "3Gf3t2q7m5rKnqfaza7xv3E5piKk1NNHa29itajburdHMaEQ8HRQ2YmwYqAzXnhptMTX5Q3PCHgEoywFPHVcg9gK",
  "key3": "55UNwMnQFTqkgbv4ktxSnTrRpL31dSjVzwsCe68ZjrXdqFV6oVRFDVXfmEdKJkpNdecWKe2iBtH2u44mQ7vySVam",
  "key4": "7h4VJmNgoKtCJuPPi27Fv62vC5x61p9f6iKpuvshW1oK7VzMiKfhWHLKxW3ok2aPBW3ofbwaAKNvv8YAmmacnx3",
  "key5": "2S7ujdnEBMGHBwfq38YY5aq6Pc1jVXMz1YJgvQ65mDQ7PP5CX7Lr5vtAoFSHDcc9m7f976PEaGNeiTCK5e7G5zDc",
  "key6": "3hjh6ounmbfQR3yQbiMdofmHQ1uSPfoVWf4gSYLNdHsfxKSYPN3R8HqYukBUHnyeeabKRJYPMbYdhDcgd5zYmJXa",
  "key7": "Yt8jhV49wRYM1QRruczzHwYiC2btXnKtXWhchDRqF4Jk7PSNaxto6FncpbTd1WHnYJL6JRh9GQoR9VKYKYpfjzi",
  "key8": "5aFiiZKJ9CcLGeT2KeX2GZ2wtKUhBNSSspTsojbE3Z7c7kCbsjwPMbbBMU4NidMbkKBoRTYvgjTbawQ3Y6dcMx1h",
  "key9": "4X3jGbfvWTgKDSd3svvFwqUFEaw6xi4gCbRheus8iZ47PyuCf6nUeebJJAe1PonBvtBECJ5WQ4gU6JFjaJEUXG9N",
  "key10": "4sTKk6Jf1vuJwtfhsRweXE9Ug1xDUCpw5PVRe2sXAMh9sQXZEKXYG8dhtzASAZKydvphVujZLkPFHdnHy1BaCy6F",
  "key11": "4zysGnwM1pNnNBkQwcgq223UcMoN1mnSP5XGrfLCcbPfUtCXLt1CVYkA6n4ve6ENfghDmbhH3pUXY4PTmzvsDNKt",
  "key12": "4g1UBUsVKzupEJUFovbtTan9DEL77joxxgjuRaLo1XNCb6MojfevzyjPoEJUA4ZZQpWQgTthLHyx8zymCibCEkSV",
  "key13": "588hTVcNbkRXDJTieqk4uddEieBnFCno3C2cutEFcZMbKANLncpFFYjgEQmEEtXZ1foag4jh8GmQSmQxYRaJ8goD",
  "key14": "41mVzojnpBRhCQvgtGGMf76UqyjGLzGMaUXqyrMkP8cQMVQ9AvBN26fkn39eogfHS8Xx1tDY9bzchtsPMZEQKS7M",
  "key15": "2Ha16mPn2TbCdN9hfHBjGjfpnf9524CDveb9CvzjqNXSkJt1sKpHZ8d6R85F4M9Zd7DXG8KPej92Mnsk2x19eWKW",
  "key16": "LU3nHBmXwquF9SMHWvD32PwD3KAZr9R8fFmpFUrGLsBxEgY5nHYDMxcAbWnXH7YpczMjT2QpLXzNXxWpS7y1NpH",
  "key17": "3JcyC7X1wS7qxGYdiYSQV9a72JjEExnUbuGT3ZmXw11Ab6qo9reJvHxouGVChGdzpe9K83y9nTDEq72FPYLdGgfL",
  "key18": "5K3A8t2gLwdDxKjjrxEuWKoUcfmRs7FJR4weJ98QesQJXPVK33Nk8csFy7c5SSrrDDmhDHsJCwT2JnxyhTdQG6cj",
  "key19": "RBfkwAAPHeC7QJL9JK9hdiNPjnoembESeuLBwMozHV9ohy68vaYJtd6Bb6XA522ByenYwxUhUnJsKzTB7qNeC6t",
  "key20": "4AtdK92sYwNJxy8Pee4T61cMZEpEVPwncmgGNZrsTnWb25zJPs2bbXSTT9emM9fA4MYEh7RdkrpodPQddKco3wGS",
  "key21": "5fTiCz73KsPVYLJqi7R2gFmtmQnrPXhB6SuaF1EibkKRWAmQur3wkuh325kouazjRsFWV4KtWCbSXeesRee8hyfG",
  "key22": "2MGWfN3G4FnTXV2XHg7pqMXLsQYGQNHnowkgPVrFoARzCSS5w7sMAzAyxEXWcXL18oeA8qXUL6fvVuGm98gcsgAP",
  "key23": "5gq8wTTK2GixLTrmd5YkDFjqYDjvGhUFAwT2DUN7RKm2X3cNfssPmFdKfARJ3evphD4ZG2kS2LXogQ4sgqyiYXqR",
  "key24": "4iYWVc5wKh1GQgABN51arqbSzyfSqAEzcF1r68qLL2bAqFn7uV9CAzNxM8A8tLdsKn81fidVZAVRVAtJ9vkPkBDP",
  "key25": "38ffm2GfTz2eHm4nqD1UvdoeN5baoRwm8yRsd8Fn7umh4a6Yf24CFtCUPS4DeUmdoF5JakGSMrCcugsghNiX2vsU",
  "key26": "gzQqDzw11Mg6MVNGDNzcwHXwLcRwB7rhTjjum7XQ6P6gd7encruTXi7TXaHkzG6vTc6VLS7BuMMQ8SDCgm6SyYN",
  "key27": "3rn8ewGiSQquLyDGwxjrEJ1BFu4X6yrCkdrbcsE7DEM55poui3QCg1UqYpdHJ1xFgekPv2Xp5VT2wCvsF9MntkLU",
  "key28": "4RcWxnrCZDQy5VDmTJXakzWTbxHGchNyvwaD9WogMhiGQfTJuBzM8fb9q7TytMf4SAyWQdkbNaTmKHfyVAngT7qH",
  "key29": "vZkaQ5BKLP4kSrbuKhFV46Y5SXE3AVqMMJLqpfXKAx4Nkhq6j6Vt8nC3i17YnV9BHusU75UEDL3QubXfvb2LbAp"
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
