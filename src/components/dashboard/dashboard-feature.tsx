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
    "5rSGLeY7PAwb6mNKFbnHLiP2qL5vGD5Xvq9uoGsEJ7jXe5RjSooaLnpeGxaTJ9TeAjri8yBk582VF9ZBCYzMk7Nd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ZUfZBzWFmmu4T3hqN6CRNYanTgZqZ6fpV8YSHwXZijBmRZyUDAuRf6MoEekQLx7HhD57CQKj1FFwTopsWAjxWu",
  "key1": "3BHtNahP4onzvAughsY3gsCJgDGLpcHiUETbf6pJiKNT5fbc8xBZm6QPshTDLEimmtu1xTqXFtuDS186zDh7Q6A3",
  "key2": "4Jk7iBynnc28qLMzMrWbyCEEzmZbJpmTFEkzrHXV2g3TPbrYbxL7fWaoYxsDrgRd267H1JobH9QagZ5MNy8xMit9",
  "key3": "2n6YtBMKgfZbsgUskYXYeuH1oy5DpZyZgaUNzpmV8qkoPRZjUmGcga7RpU6yxqtUmjRtt3hd1rPL9PjssJaTzfqe",
  "key4": "25oaHfTt49LsNxdCpdBu8uCm4X1oiP5jCXj48ZDfnH9FzWAkB9QKBeP63VkuaYDJHkxgRxuzGBYjV4JxVorzsYWc",
  "key5": "XTyNcUs2uXXv9tRwYkNuxnd37eBJ7M3yysg7YhSrMucyYccmRmstAn61PSsgd2ntn624aQq5Jz6CrsHWhANhUKY",
  "key6": "29TFvvZk87H3bHP5rRgKccArjg2ucYz3SYxoV2B4k3jWKnybgEm43wzCh79FZEQQCDQ9cAvLjQKNMAceEEsw4x8u",
  "key7": "txfntzXFsJGcuHyc7wLnNA9PLDUUYKqQZ1TVpcQmZaKDsf1WgGzaVnouw4A2i36MUqkSMAvEthBNpKxrDQcJNCV",
  "key8": "4AKWHrtRriyxP3Gx8BGLGeAHqPzqeRhaUP1sifGcBXGWMRbAL6Dc9zAvC6TQ2ENytJUXnuGt6kCLPjV4Y6xpuJbF",
  "key9": "26ttYR9zAFEr4JJUdWxRSdX5YVJVnkUnUFUpcatz69eNpFU1JKDxtatT3cnjyd9PKSmHSXnxJYpZ3nQARLhPkk2q",
  "key10": "5mNNry2qVn5KKWX98EUZp5NNUkK9AP25HGYxshrVyozmfxtSXH3Ka6HmEomZjQmaJhQpMdQhSk91jrZt497NHXL9",
  "key11": "63ZLtAfGcsWAzVpaBhR9xSd5q6J9iK5RGRqGJQca7L1ihC1pHLuWdJvctk17jaJbYtLx2WAJf9VY56iU7a4igCrv",
  "key12": "67Yykyx8KKeESZCjkrp2WvsgCiN3o9gV1QPdVWpdCygkxbsx1fXmiyZkSepauvCZdMAbagrddGWzoJMrFs4YiR5T",
  "key13": "1iqw2GGAqfa2f7bd9pWH5w63jcBVzjNXiPtPYFQaWcp2rdWjWdqE4mawg5Gj4KWVKew3m4Xro3DsG5KLFyB53MA",
  "key14": "4gsW7J5HdomNx7CqGULLnoyAXWmUsXu8TZvfLgCEmQ1HNnB59P7QgrdgQHNwELuTog1TpnikFoGaYNgzxQ68ARfx",
  "key15": "3jVcbKXmPJRkUjuHu4yuyFDPFA1bHPqGzNzsdsbniezP8cZvqPLg9svL7Nb72QjR3tR8ve1ZPwhmCSxrkyxQFu5q",
  "key16": "5FEinmENShD1r3K7JRpypt38n1h15RhmoDWRq4LLdPziqiw6sHg99gBmJdjLFPxx1Q5FDKaZntpTt7pxyDQHmpUj",
  "key17": "5v67GkZozGuqXsav4jYinZWcpxSb2e1zr5Coxi3NYoam6A8wXfdZbbH7jyJPzfhGTGkxVZTXUUjpEcep6GTCJnQ2",
  "key18": "oyFbPgnanyovsQKq6GJSy68dM1XrsiSQ2twMRyQdMTKtT9cKQL8nFZXjnzHcvGzaTJkiFp8m2fSG5EtVTxqdaQ3",
  "key19": "5ysSbeYYeznuawGjw2n8ZDL7ZRLkRKHMP4js7ojeoHQ4xdGrPtp1pf1DGMeLAD96RSKpvqWDgfNmAQ4WkNJ8TaY2",
  "key20": "2VZaEyMd5yFMbvv1AMUw99BTndKHpUL6k4wJY494uKYdZQ2aNfFjzDAMHq4sdbNnhMC5AK6cMwtcUHoKDHK9szwi",
  "key21": "2RFCikgYPNhrSGXouxKGRZfjNYqNvWznqzPgocMJFPvDMNgzz6H4U18xuCHYavpWSaTsJY75Y9h595HY7DGQzugz",
  "key22": "3tkAhbuNs6xs1uYxjGCaw5fSKqLB47nz7LLwvByD3WSEoggtukUsdi7wHsDxQoVNsj63Di3trWKzfEQC9Kptnn7A",
  "key23": "dtmton58ALTBw17dEHacf48ibXM6cKdS82886nfRoHMe8eV3JqhzQgjMAj6SGEhgfqAFPaSjMPhLG7SNvpPtvjk",
  "key24": "f2pZvrpRPgCv9XmM5dzKZEBtRsXz4ZeVZ2dNv2r8T2gp8UvaTj4WtnZckQf9cN5L4gsmpA8mXRHcu1PCDSs6z4t",
  "key25": "96jqZGDrcVqVxotC5t8cSqAsKjDQcYwoUeYZHgPS5jGWt8zjx6mDZxMu4N3FzdR2PjDMbvKrYiZMHe8ezd1yoW5",
  "key26": "5k5rNavArYFxTZ6Q9jJ6XdCYYNeR6xkGcBVjGe89j9GkRVHJTucxgXYE3yhUEav7PFdX6kd5GPZw78obhifqG3Bw",
  "key27": "4S3aZMvorEQZJCkLmu5UvMwz5NxwM9W27U6CRj8PmGLBZqmoqbDGLXENLgYDjGgsRvwYm1XaCSPzkP6HKwvXgdro",
  "key28": "5o5GmfQFebiJENpk6gbuyLTQVx8QX2yKkdGaSK2H7kGNr211gc35K84subJPs4tkcN8yCqo6aLaC6hAVaBHrUPBA",
  "key29": "579rUyTNQdPf6tHuMEbz6naKjyQ5X4BUErw82AxQmFzhcjqW75BCkiJFDVgMJnpXsqBN4B8EmijZbyDfzdaPpnot",
  "key30": "fx8iN8CH6K8uARH93RL64LZ3RxjSGG3QQYxiQ9YmZPeoy5opgZkVBrdopBXCtiUkftnmMax3ThKS8UjvFuKa3Ni",
  "key31": "2YC61QvrYsrdGGa5d8EibTdKokGzUPPpW5LLYqMGKeDibt4w8paPH5BxPmASfNuobFYa2XJ3XCT8khiC8RWnkr5k",
  "key32": "cM2NziT5evPpJt1Tny3bdaannYGig7CE5jXXacz3k2JRcaMPJaMuF1CrFw53Y8H7NGwMjvir49YSo2kesGyFRsp",
  "key33": "4v6REmnXrN64dNUEbQN7dsvzurTohXR9u92SrY4pZQGTrb4CRxwn3317T2Pq7SAHDH8LyLExq2meCtt5wNZdzUky",
  "key34": "uhG9s46ZZocJs1Pdtryft1yygLizXXsHxcymcQBLHKZRrdbAM8D39SfN6H2fLSgLZpx8Zc7XWg9ai3iwkCvqUDJ",
  "key35": "3bRg7NKkd1LcRJpaJMFosA4m34aW9kjAQ5m2xZE1kR72ozDp2bgKK2zi1JdGZ5PRMZyyyapuvT8Ab1YuZjuqx5qA",
  "key36": "5bTMMgqpbYrmkD73Bg6siqtoG93Dc9sngcc6ZMUSMZSZzGpxPVEB6Y7PX7M3wKKo6kUXNH9C6CnrnFQnCPHqyGPV",
  "key37": "5uD62t6D6nNNHepHi3bAQSfpJo3NqVvHsASd8WZa3HdqJBDKPrHrXuN3jDCYHceJVDBqFwDTFeRbcqsXfcyBtPhR",
  "key38": "4Sjbte81tPmYRrU6qZWoJDXAxBVqRjPmsajK7t86wp2cT4Tf8u9BeKXh8YyYW1fguxdyKDs3NnJv5q2oGDHFFtki",
  "key39": "2FSjeP7SadpXBRyA7Wyxd14uJJLKXQfAncRkPJZguqRYmFDzpzkd4QfSbjYYZJfpJkyLsLbXrustXxMcbLXEcQJu",
  "key40": "5knLGPz1mHPp9V66FdncEGPhWjxDfbjMQYS2VPbSyDuM5Y4gbSbnovwCzkgCN7H8W8H9eRDwzBeZjQpEFDZgzqy5",
  "key41": "4U8xRnHWbFdVnfc7NzAi7TifDiJArerd2Sr8TfuHbC2AQFHd7u3JBdeZ1yPESPEJAKbhGnLC4duX1Qsj5j7R8fGw",
  "key42": "3u8aHpMgU34z4SfkV479Eudez2sR94fxk6BnNxtDf8RzH6AJJV2TVkfAQmpnZDgxVtCfofsfCB8NTGp6EzqKCNRh",
  "key43": "2wtrrDifuMgah16v1Mx9oy2nJGXpSNGCwMHKi3e5em1teTXqQUwKPEFhuY7Co941YfyjCDA6bg59aspAJQ6AF37Q",
  "key44": "4FtoTPVXK7Xe4NK9LgcewLqpQMAYbvng6p5PEJiDcnYJG2dScXi99GYWSmKEMc2dhQESUhqPBTDx8nnmQCMDAajs",
  "key45": "4RPSenB844jFywdLRAmpbec6vi9QmEdTwy6VqNbeqwVNr3oSH7o64ktuXkiHQX614YAZNDDJMb4hFJGSEC2u6ozA",
  "key46": "WuGTRMQVyTFQX8WJmDLrcWaKDcetGDnRPKrdAhNiJYVq3Qg1hDzRL7Cod3cBJ6qeWPFHnAfVg2uYpA61LQYqQBg",
  "key47": "4L6Bhv7XYv67yUBMmkpFHH78bYLdWrXaR93S7YuXKFAmz3YA71R5sV5reooXxzNHWmsMUEuocvJNCr9UwXVTsYK7",
  "key48": "66p8hFUjcVKug6dnpFuioFVWxFYBVQZwW7TZDsuB3TZq8CSnzY9bA4nznRZt1dZZRjnD4mRP8vEL36X4K17D1K2U"
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
