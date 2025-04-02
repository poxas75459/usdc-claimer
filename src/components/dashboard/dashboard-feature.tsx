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
    "3TF2LD3jcDptzrhGJnCvnHLGEe8C9TEXo946K4yjvVAUMnSYexq2B5DDR67n2eDki2jS9dRjCRAjqXP6nhehcAgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Beu5XbK5RqgRSPuokVBMCuE3UdXjTc78EMJZXkrxYv6hfiCy9PSQ3JJNwXAQcxyK6KEtRQnav1NAuN2gcXin4P9",
  "key1": "2QycX9yAyVAPw3NaN4mRJkm7vBK8ZufRSLYqRrumn4cQo7jTsX9FemFb65hLhWw235kVFHxWrb22iQphsUwYrish",
  "key2": "4v6d8z1ZrNNqCHDWnCmBBPuLH6VqzKYvRpNhz3cthP4z5EGKgapAW7uYVePMwev8ap6Ryv1krE32qu5diHd8UdQ1",
  "key3": "5V68XEYVaNaRxm1EeBJg6jR6jZYW9owDMviEzPocT6V3WmQVL7k8wJN53sWer6dE6H5k94KPYN3CLJ1h8ZxR3KBk",
  "key4": "2GtYNb3L3wbDCBs6ELCTajaaVoCBkFPDDj3wWxk5sg8o9PcM8tveLk6QDKtmrA2Rwk2WFkVias2jSRQzdpe86f9t",
  "key5": "2DTyyqB2nxV58GkA9uoL6xQe1RahkiFXcFt56S9maEmNsgwpYTc2TVYGMwFzdzdsSKtWaRvBccx8XCWaYJivWa2V",
  "key6": "4zFSyzq1KH5aeFL5AbYvKFRavSyqnutqsuVQ6n1QqYHPUySULDm9iEz4iJHrBQU7TiBmvJZp2VYeztAVgGzgUP8L",
  "key7": "5Vzk1EmsECQmvpaK4XWpQRLwNYpcyPpM95xCpKDYFNiwB8rAJVNRSrJgmBfStBBW44DNTB1KtAtHEVSswb5sRRQH",
  "key8": "ADznjndXmvFShaZ8kMXUinCCYTVv4T1GFNeAAVUPQqPwt6bw2AJRSmNgL6622SApVBUsvJowLG6p5HXkg3s68hB",
  "key9": "2dYc7ciG7HEuDx1dhnQY8GVTUoHAYLgXZmtqtzPnCU5sC66GFZAJoe1jpTQkEZUrUk1qR3P9VbYpe7M6hCBEZ2NL",
  "key10": "3qPF7TgVnzQrFPgjKFinYBcGEkuBbwqBHRb2Juff8z8JhLHSifTdYXmbQDnEWH4nvjRhgznWs6KGz7ShxgxDmLvK",
  "key11": "3FJTAqzHXTBEhTBKJtHT8bvhjQx3EbYwnNx8uo9w1hQEi6zxgiy3yBmVc8Xiw9pSwGntTyVSL4UNokKYVPM6FZmH",
  "key12": "3Qax7MptUfuZfmAMZetvPTfkdj1oLfUTjRFAR8vpHH46rmvhKM57eeP1JTzswJJShg4aC7eV2uypfDJrnkWabXNT",
  "key13": "31Rixk3An9HrFeFqHDqsW34tpxmQ6pettYU2M4erNVpcnumeE15NvuXmxTGFe4WMkXmaMhPbTbxxFCHDxUzqvnT3",
  "key14": "Y2SQ99g8FCkLj2jyiALCr6jBzFkc44Y7SceYcy3k5EfrPUSJQ6Dpv513C9xFktJirERVykPEbVenczdwptismty",
  "key15": "U7qfMF6HgZydjmeT95SfzLwhNrwA7teJkEVUNg7YqtdjSXKKydtYZW2u1c5Xp7Av1VBfrTM11AQFA1ry45PSdFM",
  "key16": "3K2VUR6sNHn5Zbuj8NQMhrykeyUH1ym4e7nqGZC71trfMg6xUEoSYqupM4x89omeLqTEJ6UDbLKwL3M2uTRLBnei",
  "key17": "4PpRaKjw74g6izyt4WX2iswjGSgTLmbVHrrubEJZ39PDtV47ohtraCLjz5V9NAKT4dryejPmRszsZKrFcA7W8JAf",
  "key18": "5hLv74gMFHcd26YwjoQjYyRHsKBFLPNmACsc2JagogPafi2LUkHXv8NeZohWEUYY2hdEz7aMkjcUwrPCFEh1pjgn",
  "key19": "4QWxMU3shkhYHj2ZoW3sexzozx8sRYEmZEMJTq66qs5avno1ZHgN4x2ybfa6osW5gsd4jam8Z1Es9jD15YzvFoCv",
  "key20": "4G8eE9qy6SqS6NAKf68vi1hH5NaSo1W37nfiwtLXsUWH95P4NN8gnZTFKVsyY8uE4WY6d5D6sSrwrS1sgTZAt8dv",
  "key21": "4bNxsKvrkZmqwEphGNWioVbCvwJL15Cme2VEZQgmzXQ1USBwZvmi5uiDzfgg1L2bpM56qxE2ZoT6cgAFm5wbU7fj",
  "key22": "3tBXmCDH1iQDLVyhKewMXaKmJcopgrgX7L1hd8Kzgh7S2pL7EDTmc8ddACUWM1hzKBL4qxDLqd9veqzU5jp7t7PC",
  "key23": "5Y7JsGJSP8ZUtbfHV4SESJUwfcet17EFC3aWahtM642j34XoLsEP7SjGFcBTGagN8ofEtdqYPjruCVxqN16i2gmx",
  "key24": "64HRFm12THLPwL1jhCoZDKQKU29tK4ZezkJ9FDdBiD7Sim5MDjLwhUzDYPLTWeQ7Khtrn4jGfWbtspJBWdbXDztD",
  "key25": "4sBE3KDaWoNjN9mE653TGEomHmUP2QBaBTyCMwaPMhuntktMy98ZGRkQQVjH3htFMwXZfGsHQXvFa5WvNuLMK7RR",
  "key26": "4mp19st2pSjo7bQ8e1J5YYVFswiXgf4tgXGEoRRqS9yFBesn9JVnVk89Nxp6s8D1NktYcG48XMPCXdfYmw2YhoZd",
  "key27": "FL9oicHGCDVTtWPx7wQ3zFud99dZWtgkVcRDNWx5hDEujDuc2VaEsjmWLuCcwJyacJKwLCtPebZy2smEpAPzxfN",
  "key28": "2BKd7RQ7T5VXHUd31bc35omQbX1cNh2vB7zUmocw5Fm8c7zSsu5Ybm8goBiV7RfTLekfXu8z7RR8XNzHzjkh9suD",
  "key29": "3ZwGg4jLMu8RnbWdHUqkbMwCS5GL4nbJwmxhZXkLE9rM6roWHASokGoSaNt12ioFuWQnNBJr5syFBiYwvs4kJkKP",
  "key30": "z4DBgmbxEb9gejXnnUkFUw42n4NiFxXvAPxSFdMnmFGg6FSSgr4rDSCyZjivAKZ21aUGafeubcfa4DwPynGe7qU",
  "key31": "2T4uNmuuQd2PUK4e9gV4r7GkP4u8HaWt8zNv9T6D9tSRBmEbbPSE1WNQGivcpugv3veuwdJztmGedsmk1yu4KWQP",
  "key32": "478JushtNMdM9oafM5AdNXsqibq7NJP3jucPsSx7oZcdit2FQMFZ46P6qigiqgJWVUYJp9MXREgGE29ECg6uXuCX",
  "key33": "3RwovDfC9G4S9tjS7Msqsffdsp8wwcpVt8sPWjm3gscDiutd5h6KSa3RbxHNDb8tgYYifVb8UPAAs57n4kKXj64v",
  "key34": "3z76MtwU7vQVjZnS9a8bFc661AJWizsJzKGYzWTkXxL4gAErrjTitccp7YbieN2De6L4qudCk6QLVxvXUBcYfF3X",
  "key35": "5VQF5gb4AAVnW71YSW4u8KYW7Znx9jP3TLgK7ULTFM5yBWFTyAE4GFdNBCeWAfMvGxRCgSa8hiK4Ar6wLvGsxNKD",
  "key36": "3GaCfhANeZnphWz85HNaM35r58cJVKT4tZEmNczRCzoAgGHsfgTWmwB3o9AYmzyaRugzKmiFCwxZ37oRvU7qX8Bh",
  "key37": "4VraLroroV1Mrzy93yK2CWYBkoj5zvD4TY4LZhd9iMXThfJKzsT7fXKjwyQnbYN6fDtFLTrqqz5MZPfjz3NwRDaF",
  "key38": "AnLfWLVxRSDpe7BQP1V4mvvfe9GejAD8sSdGkFMg7H2wPPxq9hYhc5DbTS4ZRbARWbrPruocJtJR9gZwhupKiP8",
  "key39": "Zods8MfD9ZVKzbhBv9P2zj8zC83z2fp4CZkz7eDN3Qnmjd5sgbdZUE75X3KbR8iMB1FJadtXct6hekS5F2AASj3",
  "key40": "211crCtg7GE3TvNst4aq7BrGgism37x8C2psQ8xGPWdVBvSXMdhKL1xkfbFzDgYWucMfDh7pTBtAqpvu5z45aA14",
  "key41": "3ZA4HAhucrrX4vPnAVpUvNurREN3Z9hziKboj8N45N3QBX5HF4nbE1sbZ8xN3ABNo664K8wVN19t825YBwyffwo1",
  "key42": "2o7Ya8YejRvfw2m99B8m3cfetg73Dzqb2i8C1K2CGxdZeRopQ1p1iu1XpLGvb5P9DQmbn9z7cSZ9X2Tcw9oD6i8b",
  "key43": "2nGQzyrBPbqoP8P7Ksmqg29DvCsSeQ1vGVHkhmL4r5JsWsCSHAW8xuWv5fczEWbLqPHsn5LDPvXcgi1w1h1GVW6f"
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
