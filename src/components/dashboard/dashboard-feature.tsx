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
    "2R6ZrncNrSfrd1duAHzkMwpcat5jpGuwuvoNkg8hy3WeoKzfmu4CFaEuDFQYhoABh513tVYxc9ih8vR7t6RFnF4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PuuZ1XFXFgXgaxCdEiXwsE6ciafhUbXLxkmEJsybcCED9NHGaAdUQjjuMKgn8sTp9R7U4C4926bnXFB4NT7FBdw",
  "key1": "42cD7eP7eFHyBL2XvhwYjBHf12mA2sKANd99wRa75wRaBpXaKoQpypH3d6eoGSrSWma8qiXqXh4QhkNXSSv9nbYT",
  "key2": "663kBFazCPGDdeHSoTwqWLxEVnRrmqLGsGZ6tWNWgg2BEcqdXLG8wtbZMb4UEDwHGCegD3w8iZJ8n4ciXvoPRBGU",
  "key3": "2rdjHMfYTVvnv5nd5X16HubLEUW6q2kqKdA85Wieum69adL9w1dZ17kfgVwSXiJqMsL8MwnhBE2UgCCvxRurnvca",
  "key4": "fJKUUw3V97D9RELjiWWYAoC6n29xxwUMQma6fzx3JKXeCaU6KNpKNh5zjwKYBt9JKqepsyorbvEn3ftJ2o15ACk",
  "key5": "4A84w1ovRoBd4rhJgsVySK5VyuxuBt1VnhSEj9ymAzqNY89hkU8XrDGzMFvWWuVtLGRiAQtgGHwdQCh3UxbSsBw7",
  "key6": "AGqK638fmxqdPgLm6Zxp6KyrAfvNH1FdTNvdTi6YiMsFNkyA61KPX2EdC4u6JrHdSq8X5fkNghEDoLxpvnJpFtN",
  "key7": "5Sr3A4wYm9WGXBTWk82NzKnnfsSbH5Pauyhv82iikwZBxXLLFiALnAo6MnXnWhgaXMFfBvEjgDpN1NWhea823tCi",
  "key8": "4WK37AKmgRP9Lc5tpcdBRBbSsGjVC9HSj53ufNyx4Sdy7GQ3R8xygxvMWrVJjmLNWopYuGMo9f92KquAaAvWAjGN",
  "key9": "5T5PBKa1wGTreaoFTxdeE1WYTHE5UQewrMy3yghLANEg6dyUhU98K5nDnghosdRKhwSP8PyfG2kSKZ47R3jo9EF4",
  "key10": "296BqeENfwNEBNHPgoo7eYYA6fRxytPq1F219xLU8LSCTz9xYEvK9sbpoz7xYLEmH9XaXBTChqdGXTr5NMbcJQxv",
  "key11": "3k8nrAajJrVgyi3dsR2BTu6umDo1Jd5db7q3onJAWjpat3ugUPb6Ybk6YQNhNXEe9p7EwEEf1jmsVzQytkmToMi5",
  "key12": "4dUqt6wYJNxq9xXPoXVyB4s9Bu8s6Vm7PGYscHW6S5gVR9bRZRxLq2LPoFVukfizvDEG7iv7YfzoeYFMKSjfQrjn",
  "key13": "2NCgVwcobuDG2KPoBPXGhYtfqwjx1PnUZJTT9STcbGyGBK63MWrzcEUFKor2CPrKsCkptEqKdJh1cCgnCppjKtKr",
  "key14": "6Ytgx6Na3bK9yKavTS4P4d3RMBWbH8txxNkSQrTKbCqSpt8YUbPgVHCNWp8emPeSmgApAkvP6nuAH71ANB6Wue7",
  "key15": "484aGMtPBeyJMKbg1Hy7u7BDkGM7RdN4ZsHtv2kdHGxmTXsxH6QiS8ag9kbQ3wRMrf8dQzxwkb4eCziMterdcshN",
  "key16": "5QhKw5FnPBv6AWSWxVcFv7CNFecg7GACRsy72Rdc37pCooD5TkGNM4mLEyzncnGBAexGBmVuVv9ctJdxBWopKyNU",
  "key17": "3wy3cK8paBZyb1knkwUMjQRf2LMM1bjCVFxAKccT4JSU5BMRnKX1wqNJWjUDJv9TFkYPPhE2tzDHcHQdQtGohWB8",
  "key18": "22sR5MgwBbLz2g1XGSkNn2FRdKmVr2TC8rM6qWaEFTTrN1Moa65vPt5VphPopL4WiySeDNGPwfqHWDAYKKM7G6Gu",
  "key19": "4tLN9jauQ9RPHLjnRNRS7EvYbb9SxyqjECexkicf2yxaHKKKuepjNUhvkdfE7JicxcmBEazGADHGmnt4AZxEhFZK",
  "key20": "5Lz8kejEd3KjTsZjPAmCxX1Wb4AHRQFme3iRYD1FdgGZhgj5bEqQtc4TdLTJvwubCaompKocL4vkGBrNgsoSAjy1",
  "key21": "Ux6aJhwMhFpWwSX5DqZ9nNt4n5W4Pni5s1dfFdprjgQqcY9TfrgenncrqSNBUktuwNuFK5VQnXbJmqnaxSbgr7L",
  "key22": "51jzQBz4WeSyiRK77cNvj3VLFEK45RVzcPTjaaZCsmimsH5bVKN1aJTLRRRFpCFuammvcnoLpZxownUGYFBPE2i3",
  "key23": "3WsYNfFZzr4Yex9AB1ahyoPPetWqAotAY3XxqPjDWydEBGRcuHB19TWRVKUjrEwYGirKQUe3ioFEhLAvB5bBXfYQ",
  "key24": "5ZzxTTy9qKjquYQT6LPsdxoPPownSbcG74M5UAyBpZgKCyjyxMxYyZqJgrsnzxXYctp8HpaRSKfyjrD1WReZ8djw",
  "key25": "4FEasngoFHSb4bUVAq7h4wamGt4y1SavrdWp91tip8kv9b54w81foGBNJJBAcPVaMhqzQxJSPzWRbZXA3YdVdkuF",
  "key26": "LLWKSwivTt7i7jmvUkwkR9Uwg62xBgQW88WMJTdp6wgLguqv8MFwvv8noJbgwz3kjetq4GKceqwnK1x7g85yjhw",
  "key27": "LG4ThAiBLDmUzKcYbE7MSoE2dAL8hpZtR3eV7aLgTtgFwoKPE5qMYxkvXPy1j6rr6th9o5UofPpKqHWPkXL8VU6",
  "key28": "3V9rhWrNKZDkGZQ5b95zcuYtxDWU2SYtTBTdYfmjwYkYjMXNe6jcwWb4cGLKbjArRXAPwR5njsKg1Xi32XSdzznR",
  "key29": "5x9w9BjnXoN1kKUhThAGJcu8bjnn9oWyXRRH64wVjKRG3n83PU3dtopm7dgcrEaWDHRKkPUxoTVSGyRQn8RucvBB"
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
