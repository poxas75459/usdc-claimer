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
    "4KaHabQNqSqNz2VdmCzxGkriPfkmd8GtnHKgncYMCUXCd2wrLoTTUnps26kWfT1c2Xb4q4rbGAqMQs3m4E5d9MAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nnyu1LP6iUuLD9zdu4YBAWFHqeaWPBP1Hmr9LWmzKsD1uCPk8Dy4n7ckZHJ8UBbSYwkjFVyqh57gWoc8BVuDKyp",
  "key1": "57oK7jhtVAQmLChjEY6RyGmY7AW6bysdh3tmfWGi8UBvVHR1n26oZhLUwcuLNJXYnvGmG6WPuQacjdGy52WAz8ch",
  "key2": "2eCHggrTFTKBLrGnt2o4pHnnwjAhce7m6SpBzrvPSiKNWCnpTe6yaaCvT1fjqa1Zx6wH3K5wonhiqfikgre1YUtw",
  "key3": "iytZSpPBtMpoemu7ZZvtg5qCdN38yLWn2eH6GTUsUfyHWH7dQXVRqTDpq32KAUPh2BbZZy86eoMEBD6xqBw22Vd",
  "key4": "66YDoj22eYXTSxU1vUbCfuapWkoXtpeGmAWA9wkoghVTdz7DEkniKmUVp4sK9ZmfNuziTN3Zyswsfs9cyhyDfLnb",
  "key5": "T5VWgWmFEhzLM6BqJUvAHkvrRL4C733SqeR4RnRUMqNxjR8aVqd7aWADKRieBxkxDLCyaSwMnLizwumJHm7riXF",
  "key6": "2hMzERNqrhCBFWkJn28HTVuKZGwphe9fH1VX2GMC5w7QQEs9JDCPhpPJoRW458WazzdZa4vayHuynXoP1sHLNoZu",
  "key7": "3Yx3iVsDoQ3LVDTvHmT8XJugWmxzUoRu6UrnSsmV8eH5GHNHb9CKkFKFLa1XHqPmaysP9PJg81PSUVuf1SmVqY3B",
  "key8": "56vxYj3ChAX8izMu9V6kn8j8zA7JJrQMtqG2T2e6wyVMqAu8xdy7eRkfoDg8r4S3Gc4LLypvJkGjwfhi9DujnZJY",
  "key9": "2BRYWRWprkT9KiF6F1LTwm28xafEStE7MiBNTkez48DFteoxtQnoGEFyHgt3wEgXHdtK5tcZ5gubgZcgG3Ze6vQN",
  "key10": "59Gss6AszbpbmAj3JHNnZ3U1Zs7aQTNX1DbTR3xNihmNaqUhhjP41CFKU8dbQNvNGrGVJVhMdqwCTWXq8HdxNdrk",
  "key11": "4zggaMvDYZpziPExDH9EEEveV3cD4ygRDBZRv153UAjEm8aCWasKJXK3hnqsBeZcJg5caeFVemMvtirRGv3UjDdd",
  "key12": "3JQT6CC7vNjKr8QvdSuJv71JdPTk71qVmcD41dALony4XfhVFojhu6GLPPqgQrHD13SuaBViHinFzQtzdxB8PdaA",
  "key13": "5ADbFnvzdujHh8BGDJrcy46bfceKLWvxNCojAhxmAGkPDkbr3xDHhPVP8vFL2BKLik7gpHYbRbTpSs8uhccbqoWv",
  "key14": "Pu2ucpRsWMvsV1obW8hDi7DHoMFhTYxk8S7CA6QGkxHeEoB4qcDkBt4qSkoNVwTf46TA5r7PSKcCZuusAcsEzA3",
  "key15": "stzg1mpU1Gi7GqG2NRVqws9GCNagiRqKA2UW6LEbGNDFrezvV1aW5AuRbgKiVjzaYBN5SCNGUVNsc7wFWAnyNUu",
  "key16": "3k6rfmsFferPq3m9db2q1BJhr6uSQ8LCraTD3XuwUVUUKTqMHzRmwHpWSDRXjNdGbiyGbvn2cDDeaQHYyp7mDbEj",
  "key17": "2o6boqrKSSBJnznds6scLZ6D8yQs55odkv7UBAxubMcfc3iH9aDPW9P13Ax5E3bnFZ88cxyLnZk4KxhqXxCRfoZf",
  "key18": "54As2soCa8d6TZgWSKqdeWvGuSUH36Vgr7qxipSauK3DUNEdBPeDuK3i1nGtmQucEmpaDuYcaDJc191AP7FRNNHo",
  "key19": "2YUHuNeyjd4gVrhFaZG1wEMSnKp6bz1WNKmKPWJ9gskQyMFuMWuWyZjqvNqgxuoirQRMW717ceZprnrW3zjYXN7U",
  "key20": "3V1n4NWkhsz98cA8HgUYCvGt4nMuUPUp6Y48oomyGruoEqFeuhuk6kK9PCWGJDdGbuAo6SLyqGFnzKWd3JuaaNvE",
  "key21": "2SyeryCZBkBEX2d7L9oAmNmzynHDzPpg6ttnN1qyon2KSbuUh7rL5NirUtZrPkLopDqUazukshpjEnSnr6Hc6ZaL",
  "key22": "39LK2YMRFQGoW9G78igHQmikStu7zvmehnabB8kSu4x4uvwWBzYzU9J9vcKJch58N8v2Rs9BVRjnqoHeiGBswwn7",
  "key23": "4CbvzjrrrZA8YMR7CSrJxe8L9WKvLw9ScTHW6wRyeASSsbrVpq8GGVRit4WWxnMTAHGid83GZZJAXrYQAV1v856w",
  "key24": "WazXqXSeWK3SsQ3BwosXpq2Y55SoSqU1woEkku6FgHEA5Hsa4tXq8rTTUbmqvoytZKWK63B3qQbTHVgEtv8dN2L",
  "key25": "4tUwBTqv1TtKDJZmZUPZZGv19eaSTJtPd9CqquxmDnVyu2aEMw8N7Kys1BqXW2FE8wz461GtFD4vKLWkQ8GWwtV1",
  "key26": "TomLTuwWxajSBhM1h5F5nJFngKA5WEvFyjj9kjXWQVCQ7uuZWaeGWwGXyMFxxSif8rTv9LC8Ct65BqPcss7kxL2",
  "key27": "4zmJV7XNCX1HoVeJhJh7sCyxgfNBy2NLscm97vdNVjx6WP8QrXRg9xVsCNQ5eiZ78YSMuLmdoSjST4PQf2jp7L7p",
  "key28": "GbhA4DGM6Ah9YEyu8eWFN96wtrZxNWTwk1yMFow13BjQU7goD4n3G9puBXdvCH2ioigEGDnedT5NXTJ2wuZvbU3",
  "key29": "5NkjrBe6cPHTPynajfpdM4Wpb8zTvZWe8P78P6xa4s31SqrqvZFjkGwLbuT3umerYyJKho7Jt9vcF9xcoLabr2Ap",
  "key30": "Amzx8J9uqzEppox2YYgDitWTPU89AEJrZey1kqJ2TSMbG19qa9PBDQFyog7o2pyrbA6uLbZ4bC8csmEYX3HpaHj",
  "key31": "23SwzDUJuuSh5YDfWbaBk1UyJTikkMQLu6SmkXVrsucDCnsFFPs6xskYGawofSZb2xqoXaCG19KRzhJ13FJks17G",
  "key32": "2XjDzaW1QJYoijVivCDK1g9oQR9EBCpkpWXCy5gg3kB7vxDPetorSRPRy1SxXMTC1WTrg5yzmaoN9fzrp988qaBU",
  "key33": "39XeeENgfnazxEAA5y6AMr1PQKrQ9n1qiHUVTtxgtP51zuXEQyNDWZLVJkVWqc3b3X6PgCgqwpshhTdyRHaoeidH",
  "key34": "5spE3uDCEQ9uJ6kHCGhiwFTD5g8A6AvL17uUUPdkogyR7PbyXyaUdnqAgsoH5ZV3XWVnd1fAxLoEUcXi5jFfrUdu",
  "key35": "5qx5ugQB9CixnK8GYkjT12JwUeattduzZ9QQwjMbh3timwXGRW1bsor333MJcK3oEtemp4QNda4Q6rrFt7pEa7p1",
  "key36": "QDPi56yqETaTHjYHdeJvxb8ZYpqLQZ3bWjZqK3KUeLn9H3LjTZ9sayN1ZUpTEGtT4Jo2SnDKhSiwpqNKyvXD72K",
  "key37": "2gv8b5eRrh6oFtkMJDQpyJeg93DUVMPwGHg2efxi9s6MB9eWsZvkwziGAfkbD16omgJYPzvzX6pVMiwPTysZYRdo",
  "key38": "qLfSmuf2U3PxyGjXrGiRbsovjAEmQHeQqjVLk92e6Gv7SDZWf5UsHT3SDA8m247iPj3TMt6LdPKMPCSaCdFyc85",
  "key39": "UcsJjUzYL5VTVPs4CE5EjMrQmn6qbgsVpTso15i1diwKQjHH2CeKYhiCVfPj2mbt7M1bYzQse7JovVP1uj4Tmwp",
  "key40": "4KdoRDBftr1fq2v5XA9hDMbHB3V1dxXQVq996f2EqqFyZFqTvgDH32wqsG48YNhRAaoYWh5VYGGkHTREUSXDT3wV",
  "key41": "4FaZdhcoRpKeJiRNtW8LjfMoXusKbmijaNNHTFmceiKXrDT9wpQVZC8hfAwF3DP1yHyddu6fFat6Fz2QXLWoxTCp",
  "key42": "24c5Vq5J8eVcxLWvc7cfLP4RyGkdK7d1YttqbGGWxYZffZiZVWDpK5c1T1xBohh7sZb7Rcn89Bo3EcnW2VurgrRH",
  "key43": "JrNhwKN6ue2RTVLu1yqgHX3Wj2hdupZBMSp1dxvCXZecZikeCJmHRp9oUDTxijyLtmj5jiPijmkG9dWZ54WqCpQ",
  "key44": "2QiBpu7ceW2nfwUi6q5wo6VQ7XMvbqYw3nJZvwobyHidHqncVVy9iHJGV9t7NVgvogBBeoFCLVcw8ZWiyWBHddYa",
  "key45": "4bMjN697twG4XHQDE9akqC7M5Cf4W6unNduN4VVXmtVH6KeveRYoNrB1L3mVnn3UfAgDTENNFx9YLg9hk2egGtBt"
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
