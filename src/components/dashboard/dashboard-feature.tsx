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
    "3kTQMRajk6oRnRdRVGGBvpqZ5XRVphzeR4AgbaS7ynKMemX7uN1RCpPitWZNJjv8XijpQrt5cThsVpneEFxdUZot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iiM8bnuZ9TKuTEGg7AY1hmMQEFDpxedgajt5VphCXQxz9eokxCruXeiGNWK61DQX23aBE8yoGjFEFYCNY9N67XS",
  "key1": "5pBm5YUkvBzXZbVLFuP3gHaTALr37drKgDpLMEbsHCs38JtfmSqcauUyy64ZazKZRV759cNp4J8GFcQnm3pDqKmf",
  "key2": "4m8CGHGUSKQMCPot9sFnKq2GCC6iA5k97yyztGPWd4wgDSwpN5pxW32sEwrqfXFZBCuxUxc9ArE15yp4VnZJRVXa",
  "key3": "fajDYSX46oHPxwcstYnShsGAJXE5cSxHk28B3wSWAbebtWQWSX6ZKii99KgTB2kDDpUNyBhRhzDmJPdgUGevBZN",
  "key4": "GSnpt3aLHL9YZZ76qns3QhstuHyWWrwcBCHU9Y9Re47zxsC2u1gVqqQyVMT2agZ6qydpAWMTceAwuz7h7ecctZj",
  "key5": "2x53PDQTtTUN98fFNYigZ7xouYWp4jdwkYAa7dNdhuTpwxivZWDxdpYsXJjqwaFPhBLkSEmGojXkFAhZyJrQgVWC",
  "key6": "4bG95SokmdbjnbCQgYdsQRf4sXceraojuJkNKxcWSqEiGDc99p58g8AGHNfYJeuYyGnhpZy9KG9BYf1xvP2ggQPX",
  "key7": "2x9xW9c6371sm5dzMBHb5VoBHd2JTz4dqm6qu4kygDzNgnQnmdnSxXYrqzCZaidVu4xQX8wRmAsZzSu5VzNL1cps",
  "key8": "2whGYSux6AXVv9xKxNpqJn725g1hgFeDG3RA2KwBoNphmxEZF6zkVRonPCoqUpZVJoFynZzSrbYSNkQEvFFU1xPj",
  "key9": "2Vu19mFrLevSidMJuEjg3Vbs98G1Vf7LK7NnANstg1cbdGXwkzzunFm8q9MjRYx9AEuNdroxuZWahsg5vbDHxKCS",
  "key10": "5hdNYpgRJ7XWyF9aUTCxnLfLo8DGaeBE3Cqx9YQsaQArDV4wegMd2CCr3crBddw8UDPife6uFce6J444pQhGn142",
  "key11": "2VH6XaQXN8dsGnW7YfSvpMpJEs15XDozc3zqAT91WuH859z5gNdksWVDV8BMRMLgRyG6S766JzBFqejUnAqWq2Yc",
  "key12": "5rUf7aphYayaHLY3ZFoSRahtPCXkHehcbqDsSFrH2jKRaRmeCM2au5funykjgDAu3erkMq8hToBh3WF5Jo2CUtjm",
  "key13": "V82VB3fxW7oHEatDqeaqcZB8MxdRFo7bQtzz7xxyxynoh78pUmbLGi6Aw7UPzVPNBvU9pWJLhxsezJ9BXUSrVfm",
  "key14": "Kba2GTduxBiHWGYEZUXhwZYvzQJ4N3mUkf6BRExY1NzhSXc4ReViNnPB8JZhG6xpZoNXq9VNcZxRunKEsoBJrgU",
  "key15": "CUgUiTyUifEZg6jH4HRena9s5r52xKEmdz2tw2jUoyERAkc8QfeHK39MaEd1Crkhp1MRCQ9MK5tQrDT2FTjUK55",
  "key16": "51zmQ5UgVZ4pyUCE1A2hq7egjDriAz2o7DPkJ75mdioqMB5rGMtdD11LNKqa1oxcH9soekJMpVm92FEdkmMo6Pp8",
  "key17": "WAwHuPWK5XDic7L42pxtLKUgyX2NwXREKr5ZNrXy9G7H6aAnkTNJ6UiaYAPNBd7wfwic6NDcW6fpB2KU5HxbdVd",
  "key18": "55DpYs9dsqr1ZtXPmAGQndqEW9txrj7746spruHRFV85WvJUwgCuUaLG7AeQ2VJnueoCywhiePukttrzBqw7Aihs",
  "key19": "3adRswpPTPD1MYb4Pm83P6EXVnaCnxmGNJRBGiQzriPnmQVJaZQpDZD4z33jpqWhWVcSqmJtPnXEsjvYUy6pZDoq",
  "key20": "4N1qkNuVmBhvRDqMTg5nFe6foE2d84oiE9t91rGY5dVp23m2EwqAhQq9RY8W6doWWqqxwizwLCQpirJi7hRKQHA4",
  "key21": "5fdjDsiV25rMGLdWan4JN246Pmujbp3V9SqZsn9dBFzdqqb8Sss1bbJYGi6qubuRZrcP24odFLaHXTG5QhpGPg6g",
  "key22": "4aAT6MCe3CDxZnU6U1HxrzUTnUhsK23qMYhWZwmbmZzXZLsvqcJbPwED9bzN547nsv4uHH3xUEaGhtsGaRJhFpQB",
  "key23": "3jtFtoh7HJz7g1YuCidtWHDAFgshmDjRCr4DHNZKMkjD2JR9ppaS7mr7uFGNTadyLK2nKvvqvsE9QiqXhqLeht4j",
  "key24": "5bHWujmispPbdd8jkWfqmF9QjsAnYNp4AaTB9TcVTwU9t5H8PHvEwQeWNzCegSLBRk2VZVm5WKTY7mZYkWmdXxn3",
  "key25": "4Z4xCXmLGi2LBdjL6aDfky7bY74uxhTQkrE8nPFC4gkwkmrqzCFW7KkGug6Tb3MRDibeT6EmZ3XMwHFJL3QyFTB1",
  "key26": "3crksJ6DQa65DvBCuTVDbdQTYamfL46KxqgPdm29Ja7kYoMBmoUFKgKTnQ447aRWwzjnMgS5AhHAkSN6VACiqJd6",
  "key27": "4n11NkZJSzTVJ1UArcqxZzqTUfWEKQyLv9raXwnX3qmyuk29WYv4PnmipBLEs1WPGzVjeHRJ5VZfZD4d99pZMWco",
  "key28": "5EGiruZPcM3VRQBK4DqY9K6h8jKuQzTsqL3JYLNqDe6k3um5UAapYvsmWutR65RKfYfzLeHHzHSvxcewtcQYE3U6"
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
