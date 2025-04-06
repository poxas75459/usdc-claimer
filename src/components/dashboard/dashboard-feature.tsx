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
    "5sPEUpiLq6CfB6Pw5QWzLVQwXptoEau1qmtVS8r8DpF8NnFRUk4xovHxUHghV1v6Dv2a6SK6UrgLSLBBT28gNweC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jn4ikhaEuvMeRCTe5NEGj2GrRYjJJMy7uJLSiPvodmMrzmDzi6NGVqhNTF7dY2SCGGvbtxxfPPGDFhyhS3Yc7i9",
  "key1": "2s8VjmaHJAHwZBMNswA1QF5e7ntv9P3bP6hWoTXTPPybaVZo62teGqU5TC9YGoVmMuNpfBUQMeUa1TH9ZRcWkTYm",
  "key2": "3WuTh7Ac16YcMJnFp7qXMmggar7wB6tijymPPZgG8QJ7kpEyeJ3MDesdFhjPmm5HBj871h47pHBLnsjUoZfVBXF1",
  "key3": "3HHVZidmDgzB6i3tu2hS8ApatJydR3zpQ4q5ZJtp4cbMM5qefgy7xTc1d2e6dQ5H8nc4Lz6dy8eTRgQ3TrHy44gH",
  "key4": "3U7Go46wxp3Go6zA8FZYWStVeRmhSBJpXDai4Fi2FnzHXCN1FVwZfUDhi5BDyM5dCt3yhMesVdYNVpFjP16oxXP4",
  "key5": "3zVYWc2NLRD9a1tJa3odyFrAa1wmGeqv2Vve6yUSH8UxNhMvxreiFUYX9RnkfxeTacpqFJncdfm9tje2SvySzEYe",
  "key6": "4YqBJjj4LFP5akYwYRrf7ZPTiF7arDfXwCUUWrQrGRNFta7HxShiHJGEtZzuDAn5iPrgrmNpN7oWbwMebMuCfZQN",
  "key7": "CQfdVaMRTv8CqMwBH3xronYty1oFuEBHghURKbi9jSxDXeLe7GEo1DTN8hN5JjonDNQquLJc3fDJ2VvRCCx41so",
  "key8": "2kogPCbGGwAjS4s5QRoBSnZ511XEDrVPskQnqhLw57PoJDt6Nhm2mQxg51Bgw3RJSrhbf7H3vpSVyfiyhyeb9Wx2",
  "key9": "2ms4Ua998rCAWbTgyAmdZLGRZXwPkFTCpL1uHmiMfLaJF8nGEJxqKaRkokKYbimEw6NFAALKEnmaH3DKjbD4vKQK",
  "key10": "r6awE3mYAXnAJ3p4tF3ezuvC9kprvSZ4qZgTqkU5EB5HbbnkcSbRjr4nJ7vGKirb4L8K7LZqDa3diENsGtRYsMk",
  "key11": "4Dkz5vsgZgW35mzVmoCkScz1UDo1A4GNU9zm2CY6fCPGHScSMm4SGc414S3PpAbE1qdXdUChp4VseTEyr8yz3Em6",
  "key12": "3UUYBtH7ZQzasrjMp1mpNNZMTky6b9iPTbjjksX93auh3PMecuY4CBJb33UxXeBABa8GAYvMUnEGigMVhqhzurnw",
  "key13": "4gav1iPPz5SAeuK8xGBVbsUC4vYgdLQDkD8GM96NhsMSm8WdFGAuGQjFDjipVfEqnMFuSFvkH5odiGEfCHfnUrqP",
  "key14": "5ALoSbzxghoqjMWZ31XfbcjV7yDigMY92wrKyfjLW8yN8qNUynEiC2S4g8ZaWg9HZ62MXaWiypRS35uHDpxEsfsS",
  "key15": "2xVLfVCYnz3PuZx6r9n9mW7WFkqw6ME8xJG3JLewR3nu1ZLantWAYKVnqA178u8Fo7A4c4nvGxigYqU2tWQunqTA",
  "key16": "4Ud6cuvV9KmymBjrw9J8uA21PuDNHnrvL9EEJCeiXjstDVwDV7B6SKdDGNuJnyPchSv1DnxcaRLgs1tTbQYLd9iU",
  "key17": "5VGFrsgTCR1SuE8iSfdiJTK4HhA92LXNEqTVPyD1wDQQevWbBV5ELKgZwUizH89BtLyL3dxnQxWz77hq8y6yqypo",
  "key18": "1zN7UrRDA7xzyW26aA6qa625Mr6iJJnS7SyfFC5R8NEx8prydRvS19YvkTd2Zx75HvdnhyfKYh8duCeK5Cte4jM",
  "key19": "2rSj5RR9G4yZspPUfb6iqmQEAsMW9KJ8qQxKYqmB2gGMwRnPMYRyvkLqpwmCa6VhTvqUkkCNZLAp8PnPWM12gmgh",
  "key20": "eUZYiYSi25CZBa6LRkDzhmyMMWnevD3ybLuy1rdUVZ6L5WWfCVNDw3NwuxMVD3ubWEBgULEdydSJ48KnwXWSwA1",
  "key21": "Nt1gEP6x5tsaac3AhNyeCCzgVb6kMa9biepcUS8T4yDQ4pMRSQQWN9QzGwssnYyPppDHtxJDexCDTK3pbFz76Dr",
  "key22": "4VfEfrDukSdKNyyCMWeQ7hy4sCPZjx1oGVARFZwfJRz218MxMbePNvtVLZGGsTPtQqfbtgWreEisad8dE6qgM3fG",
  "key23": "2QGpJfPR765jchRDe6omzdP9QFDYQ643JsvVAQhktjtSMvKAgnMvFn1QSJbp1he1BnnYLr6PqUkXo3728xoeDbRE",
  "key24": "4GkUFSC41edMa6rafJbE21ptfPxDDN84a5LUTsALzr9ZbaUMnj75tvG3jKeZ8Zw4BmShM2Z6FsxhiZzMA3qzNv66",
  "key25": "2oZqmBeRWAw588xWEgBt1zPFYTEWknUAbuqFfekuNro7U9FuZ2a7X5uc6WC8qA5tCq4DpbFZwXByjBEv37mMkHW6",
  "key26": "3fqPHyGfGn2Dt4cjN5Q8cFtrhYqNmytTkgYvuTiv2vsdn2mCgp67e2YNTBQHgoDbS3KAGfBG8sGt1dLHrLXFkKEg",
  "key27": "3FUsAQv7UwDFVVweWn81eoQ3jnH164U2js8DSNWX6UhbnynmJcg5m4YMyeczZwsAA72RPpaHAKwEY1TMvcLCatnb",
  "key28": "2bqvYkoMFE7AXivRXgC7LpUqTR8qZkJBeHHmyCsHcqh4draUaTe5DwX12bc59BkmcnguW8aLacZDVZ7dfDoUmLTj",
  "key29": "3zGL1rQMxs1LwbGWdKjUYSEpzCrUszAU3eWY9j8rKKVgKZwGno5oseP9ibMwkxQ1155cLBy4ekveQm8tCqyaNJof",
  "key30": "4B8uqeMMpmhA4XwyL41UPhFLRhHrSKaJay8dC3P4xrxELvwXb1qAUwXbFoTLaTwAF7LyJHnEP2M6KUYS3qR23ZSy",
  "key31": "4Gpj6AG6ww88feNhC8Y48eJkWGuChw3mVFWGpsFgJfQhkxKtMG3bbJ8PBQQMFnoPzhdB4V9BjiwTvnG2qzzLsc7J",
  "key32": "3dxcUuWyuzyj545BZzWga4ZDJJYYnd3hzXXha8nUr5RzQeN5LKtW3WcyfySSNELueYPSoV29r9WzXiaX93f3PBco",
  "key33": "3vsFHYdP6g87hvXtY7bCKKyb8XcfJ5GzX79bEN73Ui76WTqhjbxq56hEfyk7FvjFXrnT7tdKqvojg9BFvUtmu6jc",
  "key34": "3XXHn9QNmB1JHUwj5AQF9eptAL1qjz1NRK9hpANig7vwzta7Zn7GzGCJgU2eT79tuzfrUhBzCmaXJDXxZ7rd9Tkh",
  "key35": "5r9vcxTG2UEwAE2Runhb9JiyefJGjp4QpeXctQtNX58ADGo2ziDQxmCbuP91FUNi3ibLZyLmprdup8fUYySqaomh"
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
