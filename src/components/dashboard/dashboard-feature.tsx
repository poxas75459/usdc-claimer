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
    "3kD3XXDnvoycLjwxrZ4TZ33McXMjYtu84i6Q8zvCEW6co9cDnxEdSxtqaXvSUJiW6dWGGNTNpNrKBaQF4wPxuBvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4urf92kXYxVxUrfsqCHwK3kj6Yw2B2yikshyyCVn35hKHzZA2xJ74RTnSHXHnA69VwxHTkyfomje5CWqzWpoBQQT",
  "key1": "4qn8NCBdeqRerQQjMQv8LtwMvFANTexPAmAKpmgCcRwXJ2wxptgg3t81MmhF4TvWbu7zDVKitCPocNA1YWRnavpm",
  "key2": "2aPZqMTWwrNhG8Vim52NPSgnzNL8KX5bYoJggDxDDKefR8GruBQXZSUEyd2VLxMykvJKt2bc4ZMh6oxGGfyZZqTh",
  "key3": "gF7EPt3sg4iRGfdPayy2H8aMeyrdceyrEexoF3yuLdbMB3LnC44JSCA1ZcbkAiBB2cQhWnYVnBMtuKauX84pxUG",
  "key4": "sgV6CYzx1PsvkGXKn2F4Gw6YTb2J25gSe77yksGajDDY3UPD86ygKFBfN48SubU9Q312EZBw9mssgGK36ggMMnX",
  "key5": "2AmYqdVNdxEWZ3ygNp4aPg3AxKAE9r72uG6sLzM3epuskz6LjyFg3eawBxie84kLjmnbVWKQUW4GhSTkSDDncGSk",
  "key6": "5T1B8e1nW3dJgkZaZSAc4YZjKncy6jydMYWVNEZT6Q7ZPJ8fCaraFuW7E8Uv54ucp3BZ7LCGoNbhbbyih66HzKwR",
  "key7": "2e5bbrFhXL52qyiMFm9ATdLiueixEDduPKi4SjouHfa34zyrTWei21gJoRhUhoaQeMXmeU8HLxp3u9BknGr9zgsY",
  "key8": "5bugE6FV8v6gM7Hpp1c7JSS89nUno8k3aLpVPq17oWwoiL1b49dxU8EWmUKEjr21vdEyvhe3YxUBJ8SyX2HmX6Na",
  "key9": "3z7FvPKyC3h1xzsZC9AcZ6ndHNBvYF2gpu67SVjfB6H3qjVSMfkphNPKARbG2msWjZTxN4vBob2iF7dg3aJfheVf",
  "key10": "4TKWCVkEDRB3jeguUoHhLK6MCMA3CGgNZH3r9Yc3CDCp96vP8LqwUrjjcNR62Ueqd6a4CHQD4Cf99VfwzBTjHUsh",
  "key11": "TL3wxBD6ER7ZEe8Nhp9TpkSi2U9xBihrwSX1uuCJzeHpMoYdyvzWGKPKgGbyRjoU7ZJMNfgFr7wWXAfsoa3VeC9",
  "key12": "5P5dZaLqTc2ywBHoLgQxSziKAcefRYDBfNbgBg7Ezp52Gwoj5pqjbj3UL1NqBeCgNPDWknRSqJ9vZSicowK2pcXQ",
  "key13": "3xYrfYTdvmwRS9e1xD1uo5BtKPzgR4ErorAEAVTdbgWJqzchozSCfXgsrXqxRbrVoPcPBQQPunapTRn7kXsji9nA",
  "key14": "2RhkacPSAJkPCdsSHbZ7N6ybPd2gkyw94ygZTbyWG6AFehb32M7bKigiz7bQ5cmpXsGRXZmpUSW3hiAizCne25bp",
  "key15": "54vxTUp25DkJbBZ7YKCqi95Sy5s4XLrTjorRJvjbW5xRed2DXwrNAGuWpQe4f9tkFdg684eSzbHfz4yWNUsiuk9E",
  "key16": "2RKyeYkK4gHRNpQMJm2pbwGKUsweneNjFi3eVAaGatN1tkfd2s51xRM3ANR9YYc1v55HAYYtXyYXYuAstJS26Eeq",
  "key17": "4od1FF85CfKSNB9M5cNwtXcKRN5T1jRNTd8UnYvUo9tCnMkHycaPUbMf8ED6pAZGtnUuiXdEz4ok5WfsUBckSGNH",
  "key18": "UJuUbVWmRwquTaAbUXvsiBcm3AUdeJfpp7U4uMZttdEmJ1kvZYXYH7HfKV5w1n6zyyFGtasxVNqvovz9mBjDRDC",
  "key19": "5LKEvgU5DeJ91Rii5oVGcoL7V2gjQNQ9nL8WTFR5GwLEVo1AQARxk97f6mQs3iWcCXWwiixm4PmcST71Ww8bi3bT",
  "key20": "5MvNDJupVv1QQt3sdwt6VNLMqZVaFXbuhvummvAMLKY3pGRccmrmVDz1utrLGepjPU6UUyqBuwRnHnsaGiN1e5vB",
  "key21": "B9AocrdM2YJyAcHzfCB6J7TKz8ST7R6Ud88n4kbNCpw1nHGo6LzDir5iV1ANT6JghoXRC4xLFqjz1oc55m33TV8",
  "key22": "4Qp6Cgm5zDfo2E1DyWfA7hgBMWCYueNvst56mD7SgP3GepCQ8aV1T7oLVtZ39vjV159Z5kCTgG4FyRQD4yfeJ9Sn",
  "key23": "2UCEbVvYrmLsWb3HEXkVTDBaM7ANe3vjsyspudN6rZAAr7rRMwJfLkxUPeCCzSfDxrcDFhbZeVzJChx6cCShETyX",
  "key24": "3ofuwgsBMBLFVQuGb4aFjKvvmMmdXQKB7HH5nyuq43hB5mZ1HSzDmxWthAPCkSgwA5qBosF8Gy5qYSKvvWZAposy",
  "key25": "4N3zDiBD8Xag2Wct86rRkD38ZwtFgQ4XYYqL1U6vtN1GQQGqRyT6UJ5unXxxbNjSZuBFoBshuwPEpeWUEMAJwZjh",
  "key26": "2tomn4TkPcX8nhZgPDLUey4BgePW98F3RhcUjmgBkJ77uWkYBYSXoaKcBsnj5U99RZLh2wZWG2gyHehfFyHyggsz",
  "key27": "5eqRNxPWASGS6nfKwmNGTp1eF6UybE4kMfKugnGtnNKuqaxaZfkTC6hMoeTw2xBsUfytri6cSGAReRhXyKVHDJhg",
  "key28": "3Bb1TapcngcUDezWVbWYCyDnNRogA97iUKCUsrS7xS3DiND8AyXztxLRakdpDeqGBQRjQaKTGky5nJALVzBgEEzy",
  "key29": "4PQiE7jXisyP8YijJo5HiKsEW1meTyvGQowjcVbuj1JafhzjxeSFEafKGdrPw74Af9ARJMKw8YK5FY1DDw934TDV",
  "key30": "tsFbPDR7GNrvdyPAjzPNvS8JT145dJy6TbN2AYQqf74hWo3QUrd9tMeHdgz4WW1ww7vjAoxVmyA276zqhsCk1R6",
  "key31": "2Fo2akWFYVG8CY26LBcGQSbDW3xyGpmbmsXh2fUs7tmSuWqV4fnxyc4jFuzzu6HRZcTWbwhufp23ToUGKkf3nSYv",
  "key32": "5uSMuazVk5ywL6b2DNDiQpYdoVkyWQ1rdGBnR5iNhnRQcSfee3x811PvyMvV4QHL5LRJhz4B1t35SvyEAWTYVhd",
  "key33": "385c85SwG2FyzCyZTxA9MuDSHcksv2yYhfdb2VyvgrMtttvCGQCPJ5uyxys9rgdCcEBg3UKynkaFuj1miKwRZNsL",
  "key34": "4qRJr4W91pJK9Zasp2vt9FcWGDUJYGF9SmjoyDMiby4vhzEwbAAF16WytmfkijwJ8WtVDT8qK7BNZt278mnmXgD2",
  "key35": "2bTWdPLNtkg2sCABteRMSejxcTkpydu3ANVfYE4HRWg7Dv28bTWF8gCqMnYmZZ2wHFSaCpFiYKbZXxi5Mmw1hoQr",
  "key36": "4k1Rc3Hos1qyTsB9ZoBeGwQSdLtUsjkZBGMtHLBZEo1jdW7YMaE1TcUgfA9iEcaknBZ3EzaCTvAji7LV9zgZYPpn",
  "key37": "2coMDcjLzcNYa662R1b6RkiabdqkWJPcaMx5HKnfFDxLPU3uYor8BN5Dg1qknseupHjiovs4BzvqxxpnmPWf43Yx",
  "key38": "5fLU2s4AyPXYEocGAJWhUSrZqm7RTrne3FS3hCEXb2tLhaDFT8beGevqQ2yBUqVuX1X4KRibfDFVueWziN1iu9mx",
  "key39": "Wc51B6YT2qY85ep1w7EiJnbQaNrD7xVJM9WNDpttnn9PFwAnhEuHif2PynYTwbiXE1PY87MNWYNE2MgW15VX9mG",
  "key40": "uNpZQcxYEVo36MKzksGfLqkdWddAjhgS2xW9yBWVDfxZq4nhVm3u4E9jcztTKbPjkUxKqUQhgHcdsxgPWh6YhBb",
  "key41": "2ne8c2Ff2nXxzSvAgh8ZhqB71eDR9pCdTBe2Fh6nDnDZ5H8BkkfNpYmzg67ecW31rzfnLXkQBXVoEZuW5QWoz3qQ",
  "key42": "56Pyi681LLhTXiU7Y6RyDGSvaCCVs6MMtFik7THaM3vLmqz5HNGuGNEsA6MuHTai4HXDJYUeb2Yp7F3gnA2Lp3EK",
  "key43": "26yGsZUmj8ehjv7QHVE3EidPw5jcZ67T82MpsGCrzGvFkxb88PYTbKQJZnqSbhDSJ7jWMJ4c9bxGHNo4xXEYschh",
  "key44": "4JpfnC3sKcTrZnMfnDaSatr6uzKXswY2SwsTiyqYsppMroy2EDCRG8KNEc9ZzbiY7tUkrVKm3TDjUjW81teqsUZj",
  "key45": "5EqdwCsP12D11jNrTsshnie7pM2DKZLjQ6phz4dXoNWNppMm8FUytS7JwoEpCW1DiPZtrCXp2tDdzs8vFWw4vXi5",
  "key46": "k7VFcYKnxyKh72VeyNjgnkcHQdnkqr8ETriN5SbRY6nm8Uo6Bzzv88pdVfCuE17T6nmX19hc8YFZxnjXUaTcK5V",
  "key47": "kZEP4rPuyhqLw6mUNJhgZJ79RuFYkoKNeSRx1MHhaPj1k8prJAJYzDRX3tC2XkXwNHikVcxVzZp4A3kw1FnuS5P"
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
