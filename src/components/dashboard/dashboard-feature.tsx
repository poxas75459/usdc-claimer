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
    "3K9sdcsGQ6cw1Br8TwexMioe3XZ1fjdzeypXfGifVViESs2euRPEHWK7xjL3FcG9Fnb42z6Pb8YvVZWgzDT61fzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T1pHnYjgw6seXP9izRKmjLsQYwLbfJd9C2MQ9dDfrFy6WJZJnMBKSNFXe4WGWN3Z2fGFw5HvYAj9G7KjKvX75bb",
  "key1": "3aWRbUUwUz6XGt2cNNBoN5iHyczHJnW87rpW3XkKm7cP63LrHejSFpJbMC7ipprc845b8befYKcJ9hi2m97j1Gvf",
  "key2": "5jHGu8oGuSYXHtF4rz7KXcXQ9mVinjqKPvvi6ZvameuzJtnnDkuiEeVN2MxAP5SxxsR6Rnk5bR2qhds4RtCvGiD3",
  "key3": "2CrtTzeZqrnL2ScpBFHLyip9MkKZZaaoGj71KJfYJ7S8fFLPfeNnWC6x5EbmXkCGoJoze4cuYMGaDS6g4Qa3QHxT",
  "key4": "4sMMgdoRKjg6MQ1SKi4eqJBeCesSorsFx1GUWKn2ShGjiikLXmsY4FD853v81hpuAHrDsjW9xKmB3sKtzbCNurus",
  "key5": "37HMA3EKLU2yJJGtm9MkhZ7ZD8yEDRiyuUgmtuJo5gu5U5DjSronUoFpCC6GxtTWG1NYC92mY4yuxEhC3Y2JHqqH",
  "key6": "4Mn9JB2xC1KTjME9AahNHia7jbnk9Tp9rnE6wMjwQ3RZrZHdYfXfzMvQkzPF1GXjQCaWq3u5vbZEDruGQf45zyQV",
  "key7": "2yDkba3JXXaGNsxgF7kuMNVqm8SDxdyB6BaqC5wFqxEWRNr1P5mNsBWf1Mrsd3gBEk2KdYMgdQNAjyAfcV6xbrsn",
  "key8": "24vb7U2QFrnLzx41ix4DwYGFRhGzLHwJ3wFfbmPYwvZHfBCfp99yQuboKBYy9KSAWzUcGo2jDwh8thhQ6bh6es8y",
  "key9": "3KBFp75HDW78RUwJNyuj62WgrdRWS2Djf2KUrwL7TKaK2YgtNLUfQNFZ1HUz3KqorcUWUaibWpvXS9gghZaMTGRW",
  "key10": "3A8TNm7cKYB5QiH1csmJcyuPV2Pm5Nzn3iHinFpxssr9ChBdzJeDnebtQhZXYYZUmj9Ji8qZXyg8GSg6DuEu2aYB",
  "key11": "4DJ7XQuPPTopymGVo33FxxWQgegpFg5z2jvw8FC2taxcPaXigLkDc8UGoFSscKta5hwzuAq7XyvvLbd3nu7LYvLg",
  "key12": "2giNtT991ssTFLKPq2K2geonmY86ifCW7QvXmfpbpyhQTJE57i9Vmv4LQ6YEE7dG5tVeFydGREoUYoBSr6z3RVdY",
  "key13": "2FzabBun713BQFqXRkvwjV8VRyxYSk6vvbN4S2ED5KkjWXzdsavsvs18tn3Wy56RD9WiWbveji2ccMUpxwjVYfBp",
  "key14": "3TjUNso7kpkgbZ7GFsngTRtLjXZVCEF8oU9y3QX22FPk7csQ9QX6BTbk91TxqJsFV2JgNHZb4YYjiHXqfCFneHft",
  "key15": "2VD85zBoNBPd3TvpiVyyvuPJWzTeQXqxEigdSeMcsm861XGvE6NrZH9u2n1QytD6sefWcFqVWcr5z29GCwpp8oxQ",
  "key16": "2XxR3L7dfPPiNSxU2PSn58DJ83cmhixNsAiupeXSEyxRv7yx4kjgNhjf4m9wzezfgaAgdX5NbHwyQRiqJMGVG6HL",
  "key17": "4Mc2PfFx7pphDGGZ6sX479agCjb5fipZWyh9svCqyfAnVLrhc7dwnKW152fPV6akEJXpcsJ8E7rLE7YNw1au3Kxa",
  "key18": "2XFP9V9qzy8KBzQf3CFDDomLJZ9zQBD155Y94cfx29p546h1XNDDRkfUxLDmMdSUqx33hTshV9RZNjHHh2nTCMXR",
  "key19": "3mrvoyy1XTi39W8mqCo3NmcAq9zvTh9EXiXMBxUCwG3fAfYnZQkTkumzz5XoY3UM9vZYrxEJ1PfKHoh1WHicAnMa",
  "key20": "MSaELfqvpaoZww4siVo6L65tCjjsPQyyhE18Tg8f2KQsAWMSJX5Hb2vNhe8iUTRy3iD2TUP3RioTzCNvjAADha9",
  "key21": "5EMQM1EWtro3uqZ7bNihr4dPv9EjgGzpgW2F5A7VTbg5ZLmibjxzWpWdHGo4KwrCPXTo5g9m7NyqVUwCsnPFoTdD",
  "key22": "5YiNGFvXgJjG259mjsLB3LJvT7mBN9L9RipMmcSnKXDu17xgCwMs2rx1SFg1McZtPa8Dn3hNLNpwwvkjLLQzTRXg",
  "key23": "322cL3SBZUfWycoCJwdz4Yx5XbLCxqAeqFBtecNEXrqx2vqqWwyi7kAUyRdKNsJWExRwQ89Uog2HiykuVeDvWWho",
  "key24": "18tszCqTpmGV65NwRwfuukkDkcFpRS4QxE5D8w9g6zjjVtPnpNQJcAVJfKucxWrwu9ALsjJXrJ2qHZzFL6XteM8",
  "key25": "5Ku2h2B2jByUXXVuRmXnVTrkS5ncYPudkFo9s2EGQXwD2AjWSWXS2k619dFKPVQR2rHCKLqWP68rC5K7ZJ22TzNF",
  "key26": "3RGbK2MbeWDHqkEkx5KzTV4azGGbdJ298bgM9RPLcsUyYmAAT7WbZkEV3hSanzHPZutG88SpGzUdnUMVDgQ2KPxC",
  "key27": "FX8LA1A79mwgsS5TQxKHnPUuLVe81NCkRYQZkePMvkx3ehAZ7ujgSoXAMxBJMGLqP28JkNFxGJzfQMZ2dmNnbBu",
  "key28": "5mSz56cobEUJAMwnYMmqnpJ1xUfpfah7q9gCyk4RjbvXEfYrhTUUBoGUZYoCeRydMUwpGWJJu9wLSmRnWBwsPPco",
  "key29": "JWRGEm5z9WZZ7DFpTEbHyQM2Sf5rWHyunQeKDQKSpRJVkavk5wKVNG25ANC5UAgL3RLDPjq9qNj2uTh28kSkv5N",
  "key30": "3A8AVgfa3yVbVUB7yt27f2w8rZZtieAR5mvQafdSThvXzD3PKYGACNd3tuBrD6w6RnSSMxCnhEafM2mZTznCyjEd",
  "key31": "58BbBu5wLmTbCTM1GgKpCFsWYBfNPeFcZFA41LxxubPsdvwF3MV9b22dfuqcLn7YrVTbUwAUw33ehV3KExAAh184",
  "key32": "5wCz1FW3youaPxN3h86X6uQPTGckDNVrtS5XQhMRuv4y4Hk8AcCSAVxZBCnxPCg25V5DfbUpB8mW3vuMWvM2kNRy",
  "key33": "3hzUJDZSdR1Novb2NxgYe3TsQR8ZFCbMhRzT51s4w7aptzyCFvw6RoP18eh3YPrVdZkXX71LhThfCYUGeNgXhspX",
  "key34": "5sm5UVYAtQvNrX5do5KhU9PzyEn5YzTLBToJbUB2ceLYw3yPD13QXwX5x8AtPNq9MYbap1ydbRrjbPi36WiRQn8c",
  "key35": "5E2pAJ5WXbCzz6JZF88mdDzCWinFHcaUv5MtjJtP4zb5QGh58iyrXAD9vutNgkhSx4UtBUcy5YLwGoHXHY5gSrna",
  "key36": "5q739yazi5LdZUuyvaapQbHxX3v46ydPdS6rwq8e2iofThqUexSnBCHW5zmYWMWRofQnoYqnXeyJm6hnddYZqYTg",
  "key37": "2hu2nnMB2EBvev6aPTj7R3xY5ahGsPZWoSrW2uVnHNtgxgtaAzmFvtGZPrTrZhGMMhV7gbMpckuMFKde7JTUX9JF"
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
