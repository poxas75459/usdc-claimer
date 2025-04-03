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
    "52KmHPTPDibbz9RWU5zpuYgp1u8DtXapHdhAQJM2mEWtWgbBx1ZALz45CQzMzZXjTh7nWLev5woEwytRUfm6nCeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mPr7bbc5xkGHoLBEiPbtza64iA6gHdCZEjkoz1E5JCEpBvr2JWm8x2vr18JqNhg2ArVNPxdMV1XMMZEeqxGFu3D",
  "key1": "4cer191aFZatbgx6kyt9JvhwrPHPtyLShBRk1V2XZ4Ahjwki762pcZd966myoyaiCFWt4WBYfiHwb8a9RjNHWVr1",
  "key2": "KQr9xMgoDAa6XQaRKKmfVoAQQSk5KVWMXf2e64FLV1JEJnzMS7Wnu836f1UVEiLDxmjuRXvuH34SnQDBrNGyuvN",
  "key3": "4T4NXY9u51Zavj56UYsGDx74XAbSgZLYeCLBYhBnisG7L1L12Wh1jYCzra4YMqpdYL6P5Eq8rwyJXq84SiLhTWdR",
  "key4": "3GJKazZfCbV4LjZvKbCFsRt2ftBDZqoVpyQr2BTKVcqBXu4gbqYYGDKHeC9aP9upak9TQpYzg9DTfHXuBZd32Z2v",
  "key5": "wSeJBUQDMEVgzXwvMfgdj195KWZpzy1BFZUrWhzkTbCHynh1eWvKv8oSfAajPGAp9HXiKwwvKPjsFPUoo2UULXY",
  "key6": "4v5eorUC2dzJ3QeWBgtnwTgQUgFGVWjMRsKoH3onhq3FQhWNwUYb3Cc7F8SybEwqvRLP2LvrjZa3ZMQkevfFUF7p",
  "key7": "2323RdFGxLas1d9kaXSWH8uvfB9kEGVUxLpfxrzidbfVJ13UUxqZFW1C8oWLWPnYosGtz6ZtH2r2rGJv9r8ZiKbK",
  "key8": "2G42sy72fBcoWZ6UTLHipF4tkVyjJon1uG5vxVsfXPqeXVMCzHE8eQGAbiS4dejpyK2M1oqdmx8jsmKfePJKj1FG",
  "key9": "4UQqBXM1u4WLJG9VAispbz3RZinWBViwwrZru19VegXthsisyonEhyVSUru8mghi6pMZQiDVREvyYtH6xJHXSbpH",
  "key10": "5inU3ASZTihiSbsRg5Lum9wA9uaSFYwCWHs3oLJTf99SSpqs3HFKU4kLTqurbt9KShgFsL7GsSPtsMVYk7qVy9mZ",
  "key11": "27AvXVvpf7kRrodtWREhg9uQ2u7cK8cJUCJAA5tUmUnyz9fJ6fL5JSL6KM6kUTyJGdQe8sJHHLBnBgB3mp4wHTRJ",
  "key12": "4HQ3HWLtfKvATAgYpXLpLV6pAT36zB8F4ydatzJjRAfAofD7hFcF7CEw6pi1BBDAKYEctCieFAz6bQNTEsdQQZa5",
  "key13": "4atCu8B9vZYvJcQXcvN2z7gEyikbfVxWWJuL168nitW7wXVEbuWUSxw8vDjQELTmAR96eo3UuLs5cUVFaZJQY2u6",
  "key14": "4zfBha8hywUbgFooEbVKvpFfC2GNonhpJHvaD9TSxGMYT2csoPYBMGsGaMSqofc1drCUrdj7AE3WhvC9uMYE5eZ3",
  "key15": "464ad9BC8F2NCoX1HBBx7Qz9rZoN2KnM2DwrAdFCqo53boiNEQYz4ZDWyMPWVKhSKyphKsvBYuBAjq2BUGZj3Pkm",
  "key16": "3BKR5jrutpBnvPkBRUA9WN2UVyu7JUPsfxCxfmuYfhkSeSRGTCz9jT2nvgKTBvGL7ar8BqAQxSeD8zVrM9RagdgX",
  "key17": "4Zx1BJCta2Pt4yGtpDMZyJHeiuGUC2bhDpWADJa5VGZ36zQf5diDtLRyf7oZ1uuihZxdDusbSJD8QsiVU5T7XzZm",
  "key18": "3Q9DfVjHwJaaQjJTf8VJzSDboXMEVMDvkN6rqcHnCZePwrRSXutZJBodRCr17UAW74EYqbT14dYZ91VWVZcpVYDK",
  "key19": "2NUc87Mr1nXTXqaE3mXwNxDqtDNCgCZxPC2t7WEH9dbSK4zzuYkcoFpi3hEzy1C32VG3TgWJsgK63GnMa2qRv35h",
  "key20": "5VDicfwuc78WBVQJMh7vT7NTBtF8XGCYLqJQhbAgkRveEgmJ2fQwdZkrA63ZVyY97Zqg3qVJwAH7SebZ18H7y1cU",
  "key21": "4122xugfZyHrpomKcp1ty3ZU5GPbKnrcMzZ6oCHoQLciz3JgSk7YxPefuc56XH8STEsGhXf8hB1svTcNPMrGULF9",
  "key22": "2VFsHJNxgbj5RfoaGutK5uMHpsxbtWZ3kLJHvzDPc3YBWUic7dhZkbppWbZgZKapjzKcwfNfQhNnkf4SCGyNXBhT",
  "key23": "48tAoGAmfw8FARP61LZaEAJh4WBicgtkWcpoBjt6EvMhGV1Y9Am3yUNQycXwAsJ3SawiD3D3e7rRQQ97f6L6KuMh",
  "key24": "2T2E25bqTkHUeFNPUcKLUtUdCy49727k4D6jcfXWM6gj4dez7cgLF6vuQpnHoFYoBL7uenVainc6ZrEzDvzwtUNo",
  "key25": "cbxTuFvRoNqb7QWQGwBomHbtBWpzt2pENDLyyM8B8eEDbpZexsHG6DaJ6hZ7C5Ngg19j7FwwAHo4S7vZJeBAooF",
  "key26": "ot6GcA6Utjy7bwMKovJbpbYW3upkHNwpWZ9N4kR2f5XrvprkYbnvrUXsgxP6iC9qHSS4CnApL3CQ76XemcaUr2n",
  "key27": "5yHst2j3LhR6AJHjZAZkjMzh2rLFA7Aqv6GjPf4KUhQL4dCnFwf8SEMHakYHyKo1FDw8E5Bi545sVgR8uhNEPy61",
  "key28": "4x6KPpEAyVPv135nG9ZJ2BktToF1dqh7fCB1e8vRm9M69evpbH11Q2vstYseuHj6PwPSk7iX32mHWkbumGDYgYAn",
  "key29": "3vmHJssYdhQ62gtEYS8PvV2rjkeqBSDNWEyAf9NnH8JapgRCqnV3HaZht4ihNtpVYTkuspQKLaMWygcx6Vcmzbfd",
  "key30": "4c23Q669HhYosdH7gp8UWch6j1KBV6hTDMHHUQTtvNHzpyGcr12kzxUi1U5gu7C71HbNC3BcUbvRguY3XzSombqT",
  "key31": "EmVCcrgXeLeuQb7bhhJ7H1uWF6ztjN4VPwnpHk7kRg7eBeVChnhaLvktRDjSep5Jg8nLKQQEVGCwAJSok5DmWra",
  "key32": "5BNEkhbSrxeE8ak59TxEmAxaU4gumEvtSoLBiVdghVscsJobWD4XaKJTiCSGmrykHEVViT3WM4szy2ZdT2UG9YEf",
  "key33": "5WjHuJPyhez6vamVMosXFLVryeuDu9VnQ6S917rNSY5fUAWNBjY6gthdvD5VtXyPZaiwWqsV5kXud923ayWSScYt",
  "key34": "Qjc6F2egtfm5277wG2Eun6Jvkgsu5LFhAPhPvLCsqXW28RACoD7dzWJCR8Fx2fcXHAzSDiAsFrE5TD7ErRjvcEA",
  "key35": "4v4tpGVyrffKU5fAgrtUoP2J7tp2HjHHkFvBHPC2rFo8vq6w6kEBq2eYT7nuzvzX5aCebNy9azUx2nUfdfZDL8ox",
  "key36": "2JCUnby3hLTvf7h93y3wJdjSViLYT3gqf4itBwQPR9pmLQYKGU6FNC7i9v6WYpPoSGfWronJ8HByXZ9J8n65imPQ",
  "key37": "3hw59znRMpW2X9aR9knVoqLm185nEwebVivYWoLs74xLNfz5NPBpQ9wMXXQadfDTkDSc3SE6FXzBnApMbwxNgz7",
  "key38": "2EcxqwD9zZhSU43nauicX7AhBZ2v1WeAZw1mP3NaAdcS47GMj66hdAXeD35ReetNBquvitHYr3N3m9ybmAt3dyCU",
  "key39": "272vGHMpT1kbysoduu57rP18y27437nStF6c6fEnNHoSoirAsNdYDqs9oR5eo7w33uszniZjG7A3z6CQXCuTxged",
  "key40": "2cAbnjSaHS4Nzx7YveUWbQeuVfZCCDU6eGdK7Qgnqn1rEdiLCMixmhJLFi36pG9o8nbRUKWGQfdHk3hBQu6o7C6R",
  "key41": "2XfbiKm92DFFELTvM1rNFKWBjqMb8xnyHx7qhKj1t1UfF6xoXFBBdapKtcLbEyP4UWmxeJ9GXRb5MbP4fPKY8oEa",
  "key42": "4xJdqmQCYRnT9yt6CexvvnjjS49Eo1bbEV7gDNRwGmTG4ZHcixdahR4qcoAcqdDhzKK3p1wNrGhGcjkqoa23ycXQ",
  "key43": "5fgHKWWWVuwuaEWGczRaXt5Mcjpg32j7GEW4xtuQmEpVzRKz1x48eEMXRcc2uWRq9A4Jn2h9cts1UeDWeenBGyRS",
  "key44": "38JzdymZkFpgkBWFSZpah11qJM5HAbDgRqwoeNyjWsvs9iBcM775ZbXgucUjuPpoMdR6RVKTqWq56TX8sSTMcc5H",
  "key45": "2SQq1ZV4BzrpnBVJHd5BVb3bbDeboEB7CFJ4r3ZUzDzPareQDBVz8iRpaHt8wCSNQDmLRAKeS3kfbauvQbchWxqr",
  "key46": "4EjBbXiU68brqgzymhDLFpjd9KHfhmYMDvuTYzZgXMXuW7ZpxU7zUqLDajHLvTxoL6Tp9NnjdBJM2tdochv8p34M",
  "key47": "3gp1RWt8pnnpTSihCrdkE66mZDeGV1i7mBUJZisakj2xqgM7kLh72WXc3BmPbcyZC8NYoPUj1egYbuaX7b9cWFJg"
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
