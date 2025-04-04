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
    "5pcQdS3qArNXmiHJZTfc5y2A4XUCVZpWBUwmR4uTSCH5UsbNPDWi9VbEjeYJf7u8gS4KGvLKFt9jWbvndfbKo65f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pDKedLpNTbgMa3Dc54b3q9upuxeuWc2nv2L4yGWfVYgv2sYvfgt3k4kmG9hA7FfKiyPfs95kB6GcfAWSstpWh5z",
  "key1": "5G8Np7YT5J1R9yXAY35FSW66VpA1WeRwDvpgXwxxk5xCXv3o4YYLfhAbjJY1pNLyXGGTbvKaqEMFRU81PexpLQsS",
  "key2": "3LxqbssowCw1DwAWKqyoKL9Rtgrkn9onBuNTUBz37Jg4LdLUQd6u5Nb4eZwYtJFAB2MQiu2bp9eUWqbg61EugqHo",
  "key3": "25w3Je3WmTpxd5oCxXSpPruqFGH5Cr3B8rbZqPCKSthXqJfJpG3TwpNn6f5XvKMyL626z7RRBetAgx7Dko5KkcUp",
  "key4": "5nAR6rSuTjgXgP7q7AeBNdMyuy3ndx6HFaGoBhxtuB7dFLrZd7JFnYsX1kLc9XDLJVpJe3A6e2TbCAC9tjXYhhGy",
  "key5": "2Jzb3D7yFk7QAf8uUopXqZUFUeVFHXCDprnv4tma8xvKjbdxCXdiCE8Q3xuuB2BkVrZnm2M1kdrcPrN736otsrhC",
  "key6": "2EuULTNMBQBXGgbcp7Jr28B36hFS4e9FCF9movFdhtLjDTHabSKhboiLui7tRRLrBPUVRCZ8cAhantDKSCtQuYZE",
  "key7": "gg44rtS6CtMqtgmfJp7Fi8kdyFDa66zGV5qCBtm1JqNm6XB8xMjfAEHNajS2mz3UDWRhstDMzpMvr5ZZx5XtMfL",
  "key8": "5S8H9BCqXu3pPMfi91fWXUYmRRnKDYSeAXRXaDa568RnDcmJWMcJ7gJJvXjpfUecUH3sXBxWjxGAZLhhqksJw4mb",
  "key9": "4qbkmxTS7MPx99rAgfXBJdygFPZCienBN1GgwveLWgiSF9fN4eXqmRcH5cup3stPiiDY57QGpCWVNgDRei2QUZMj",
  "key10": "3JzeJXUa2pWYwVAYuhkQuKyrNL9py6jNswt4TcSQzTJuQZB2jfhny3x11cTBsPqrter7sQczdWxC4J77pCeXjEjf",
  "key11": "EFoFK2ekTSsEE2BPmW75u6JcLNvX9gGiF2GjkNzkqgo3xFgJnsstqZdVHE693g39zss2TJj79qyEh4LDqCKu8Sj",
  "key12": "5vBiN7qEKqiLNBzHZ23nvw8MwQWJF4P8jfdrMCZFQnVMpRCPQYoRwvZvomey22Jvb7i71jGV5c3bmNU14fL1mwpe",
  "key13": "63VYo1JtmQJ5ksHguTT5qVXwtbuTqMBsvvzsmpkD24bURDo6FRxZNVpM4V3SovPupPQjv5CCUumJ2kmY8gkhNGSA",
  "key14": "22EwLp7GUEE9Hp6i9jgdRgqMa59zcgd3JLmr6kK8z4dHtQVdFwAtiEoshmSTQyNnQrqbkuCXjFSZ5mrxAohyVvgA",
  "key15": "63m97myDm8UdNs79GpLjbmJqkK7XNmZWtejhAubPfxuRNiGCXGTNTpCi9NzUbB8qWxLLE9R8yFcyVoPm38mZmNRv",
  "key16": "PXj6VFB4oHao39p5KFf8ZngMcesfxz1QyWgSSUFdkU8fapqThsFFraJjWRDAgMuhFRLxodgRgvCT8MorxAEEjYw",
  "key17": "2KN6KxMd3HFkFyneHUSmAF4puRVnwoPqKRdyJFy3moYvwdu5Zmw5oUJ6VeDztn8MDiNGapy7JzSQk4mD2gqZVKTT",
  "key18": "2nGmtYgn7dvS733ixUtV92A2X99MC7pVpJgDGeSRxC42TJbeEjCzvHMhrdQFbhbn7rES3wrN5ugoNh6xUXTdpR75",
  "key19": "4q8reVpq4kt9TUHwVD6PbCioRikshHWrd4FRmg967tQoTVMN3hwW1VACjp3EFGPDL3rzfmfkfcEvAPRrvtAg1p4p",
  "key20": "2TJzosUPf2gUTNg2Hz7jYHAhtpqnah4ktAVmVo5pkaF972AFmUW53d7gNVP8D2WSEWj68KMXpGnuMmvbVCXHxvUW",
  "key21": "5U9vAnUbktfnKyPET9QZ5JUsjyN8DbDsR1ujgU9ttEisCYYU7Ha4xfX6UNwYJEUTJk3JtQdnmmQ54xwqhxEcoRcZ",
  "key22": "38oEFHDZLNqtgFYAyMJjcADjyQycsGC8zkgdx6Xu9Hb4bzo57pGdVDhjncUkYwDZMuhScSbigSRj6tHexCjPTfLG",
  "key23": "3RExmBVqmeYaytGRzP8tJGiziG9C6mabrerVkuR8BEkkdZ2nDR43Rg7Aj1nv6GwUrYWXvrTsV3D8JDiaupXDQNp2",
  "key24": "5Bx2dn7gVY2L5e7mN9pGSyp8KufYVyitauiatFSvqsf2dXFvB2EGEpRcW9Djo2LHPMeS6Bmg9C4ZTZuf1R3D7vVW",
  "key25": "3M8CZYLhQm96cZtSp3Zvwyk5gMsE5dH5zt8Y57Zd4fZVFEnWZMtJ5Mrg9FgtJpHqaw7AVDN8F9uZCY5FGLBYYvna",
  "key26": "padddHWAT9NJDkkwn7z5P9FAumQcTkPkHBcriXcAX6PxqknDn9jgUDFfYUhydpuVyExgAoDmKTbdEh5x6jmFDkZ",
  "key27": "5wEKmq1VoLqq4qBz5H9wpoBPpA4myYLxPweVLWoGvfRshHQSSzyJp88JBmG1z4VNcZ3J5fgN43qmXjGnGa39HyhB",
  "key28": "9BTrkX7ph6qepeACfkJmpLEpswg2tAELi5wy98FKFb3JKhRURxQmePiXfdTqFgvMv4GTLPbK2GbiSqPasR8Rn2h",
  "key29": "3aRDqqWDNqpV4fP76hy8QjaSL8dXcAUpYffy2mu3yU95svPLcsnJE84XQLbLQVj1SJQ5ErK6LAfRi5ydgAx5nMKM",
  "key30": "642CCFQD3vsYStvhHYpbs9oxZffgK2EUvnwraUWWjKfkCFHu8ynvW6R2Kf6ScUBD419PNUnQgfQEyu7Q4NUcHWTN",
  "key31": "3bkFFeK6qkHSo3LeZzbsXZearewnanQMGjEfULgPUPzAgPCpFZaTWncHdrgR4DvmyxJVABaajDZC1sZiv1Cw3uQw",
  "key32": "55VjspgtcbqF1gcUjcbTzpw758XgSQrWpMJEcUndAcXpZtPzo27gg1qHh2T4sWSEmBEHgvEzzZhtzftMpf9w7xeK",
  "key33": "2ZL2M3SwLEMiUdcuafL5K8e9NLsFxuLCR4iPFJzB5LdhnNHJ3ioVNocoioRFrc3yJHVnHhcE7fiGomjYNnEBaSV3",
  "key34": "3XDN5ia54oAthE9YWHxubcWKZGPd94M3V9BkaXYyL9itCeAycThk8FtEMPxvdE6KxyMPEjWued58vmiLQEnHYXVC",
  "key35": "cxHMDn8XThnwuparYHUw4zLeZTtVvX8P3PEy6YNtwTLktyvwse39GTVTPTWAtuSzqsFsn4f2GmEJRcwR4q3UYEK",
  "key36": "5CUfctM3RhH8CZ38kSD6PdL4nRnU6aNnUG1y5MiQGswgMAp86sjXMAQ8qYsfohCF2ocCMqRB1FEEAb4rh2Ubyyhu",
  "key37": "7vbCptkUHyi5PdeTLN5uQgLnsrZoxaySWNRHRg59cbahzQPLTq2jAr6xaP6aNEYHd8SWJhHitMQeV63p3Epu7Hc",
  "key38": "2C4QJFq1K8kZKTkVicYcLPAj7UUKVQVvdnfPEJ3PFYFTuQCcH3k1umEEAKmBfpH16CPqsa9iR8NNVPrDixtMve7z",
  "key39": "34tNX5FpdACszWMoxzGF1vTrywXD4toG4KEUAwGJZycac3XFWAMzYYyTQYQiAyin9T4sJhSMUky93DpbNdHTRKL4",
  "key40": "4jr1qNdz4saLf3KWR8hBdbq28cna6cp7uZTz7F4A5STW2GVxA5CHV9ZiqUQk1ydHyMNBeoEdLmmebn92YTEhCANM"
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
