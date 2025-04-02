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
    "o5x26FPTuTVGeaEJDGLZfysfEcEB9sCMmfNns1r8iAi4fdiyR68yAnNFJAHpgMQs5j7rP9LYehsdSdgtjC5aJYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PQDt27uuK6uV2SmMmr7S9BKPfotj59mdxWYEd2QUSGUgXRk6epmCEGZFPqFGNVniFLj7uPiQiik4B86Px7FkC1V",
  "key1": "2DKY99FBeGMmZMtuHrZwxGZgnjuXytBAEhrrSdg8BhQAGR6MfgLna44aE77Hv13F59Vk7FQoR8xV6PnCia8dzvPB",
  "key2": "4Hj5nfHpBv83WfwCfK1SiZmapSaeuZKdapRKDvYaMLxv2bJb8w93rBZ6gfPwp89tsLh29zbq5QHm3XtQsFmiXzna",
  "key3": "YV7uwLWtSkVtE4jXpswA1w2nxHjQpPLCk6L4a48iGpQwY9KkhXUNRbkejRWr63anrXJEmNesjes5WEACcXtJKwS",
  "key4": "3HvcW1ERpLxPvZCf3kmVHeip7LhMVPqq4je18hkqdmVNQQRNMti3zK2qLSfQ6CQCrtYh6JSMtC77i2iZrB415EEN",
  "key5": "H1EutqAfRxc58WKXF2QKAdM1LagHUB9ek4KxmnbvasWezu5dPW33bmzN85m2qEj3oDmAz5BMeV18vnRSR1qeqGE",
  "key6": "5xzz2F5eV2FQpXNRZzLVAD9ozQp7iynAFYqEB6YVwbg1gQJTc8Y5zYHE1ag9Q7Nf2wTQNgPn4SCzUKHDCopd7K79",
  "key7": "3SD2TK3UDYhJ7krkR3nNHDnsjFib4xauFGxNiEAVaf8xAsGnx5NuzfamHFxeVy1h1gJgJphTFyVaGGTm5eaR2gW7",
  "key8": "24GwR7rGNmxKNxTRdD7XQGdRcnxgPKUJXSnh2yTqrQu5Q39w3MmqsLaWdKpd4vh4irS5CqUMBCiL49WHYH6etD4k",
  "key9": "3WdYrEqMeF7Wa45WgSNDr6cQFWq187J7WxWQHPjYK7QB3KL2Jtk4prhwED6pQm9Tc5ZwXzmWGHDgKVhS54r1fA1J",
  "key10": "4y7cCme6Ny2aA3Any9kAmna5WoFE629G3EKfjFiY8KRjWFkb1uC8ShYLyJ6V4jvHgBnLZZVS8MApyGBambBuWufV",
  "key11": "5BXUdvv4xfJ1cEa9ne9dm2HurjsPXRq1dGfd6wyWPwDepJwpKtBfSRerf9yqykDHzPzjEYKT3DLAW5vR1awr3hK4",
  "key12": "2DFHpUp9edq3XwyefViV2p66WUfyUiSrDj44XyxMLjKQzU33U1WLTFLDyNhXtyAGDQTFRAb18TPhHiXEzZ6QakWg",
  "key13": "3cVkNspPyqsBBjR9CV2ofmm2MNQY2FHx6MJjhUAUM47hjmoNDmsh1qMKtKPSnDejfyTdPDu2Yy47guk4YCzGteDQ",
  "key14": "3k8vMFLc6v2wEKm6y13P9ygHk84Mnoj2mfm5m55dFnygEdfpgZx9uTpSpWi2SfZgyz1gTuHz1m5X4d6nkWkmNzUf",
  "key15": "64EatQ4awESHaosM3sNggtR7DQkSjBkqiGGT7zMUvBhnrAcFpXS8DNQB6xkoEVCEo1uyDBddGhXjnczV9YP9DBjS",
  "key16": "32PfeSUPzNxn29MrcUzzhVzgvVqpzzu32KA9rfGgd6dw5QzKUKqZC3WP446gLprUQMnR1dTVmnqGthTuAN7fKsPy",
  "key17": "2VZW38BG6aYLuQmnBVdCNytH3QSQJ8W98Vai33dNQwd1BdUKskZ2HSmPahZF3fNC9ReLovuhKajmadVvbxk2BZDC",
  "key18": "3uhYyccR6dpZDiyrtWf1DpQ7fYjvtTgQFxRnTRXCJEgo6syE1RFga6HQyXr3eD153e4qfJXUB3r1QV7vbuQHsxm8",
  "key19": "4myS9GAe2pQ5Z776nBcJ6UZQhgVTTtAkrWRkSUUNyrGyPSNyFzBm3AxcLmcPCoq4pLjkiS4YFhFa1b9qkCXqvXk1",
  "key20": "4snUKwARe4SvygE77wrZWrrkHE47xVJwJ5KbU5Tzv7K8X6EVs6frV8LiaHPLUdYJhWGeags9pecM7efZ1A7W9RNH",
  "key21": "2ZfjAKyweba7AENB2RRt6A1CMYV8PLU9xEDqwKjWWvh85b9FKYQ3qHVU3JpofHLUbrmVNZVq6VZqzdaTF9Qq6FuU",
  "key22": "VJXuXMAckQRZs5U2W9bWQ25cEgbAFfjfMaZAxNrizkTiNHEnJ1D1E9MrVwd8toz7NUfwyU3KvTnj6swkVc9abwL",
  "key23": "4Jj2B8FjBojuTyQZ7ZF6RXjHfAu628H7p1qb86YGja9ypVPGyPSECkjiYpocU7kqcfnNaWbsiJw7CMAa8BtZjUF",
  "key24": "2SVrYaWn7shMNPas6psnr5dAhqyppVncBWNm1WJr7NFvzn9bvZrQRHeoCGrCjVRJs17ysu1b7f8z9anpTNpuwy49"
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
