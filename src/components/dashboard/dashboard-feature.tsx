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
    "29pNjbWfP4vLztkEk36Y8U9Pu1pTvtj8HpegBGPj6G6SugcpaxPAAdpy9fsnvhyBj6W4PTzmkEpiHgoQxbT1dYzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GCsrvCqEEY2KkeZdCFABiQYBuPN1FCVp1bECx9AmaDq3YMK322rvWtg9QNJapDkkVrqte7ZJrt2SPQ1GCD19dSt",
  "key1": "XJcbrovyQ6GpvRkuZARapEjBNFNJ5B3ZQo5ALrN486e98Xy9pTLLhpzHvcKdqe3GMXXepm5Y5VLgTrbwkFJdPWh",
  "key2": "7fhgRgvAmnjTmEL5seQyb2xU8ecEbQ2WyspSuKGEHqyWAs86QRNnF3rsHyHWS8X7onfrvYNjZx2nGa8iUfBGP1H",
  "key3": "42KejGQ9dwkp1U7jqJZPnvsH1Q4k1PkkcXiwzEiezz9jKS5pXpmGoaYo4fZAaFEQBGTX5WFwh7usXztKVfdkqjSy",
  "key4": "31ZewdeozST6xVixBj9nrDk2GxjTYmJgXxRiPWW7ht8NdeYFXUiHWga6JDg7zoXZVXp4yKnuEV3x3G5LvubSUMM6",
  "key5": "3AojEVSDGjsFhtsst4ffkVMpuVGXf5hr2AkxthFhdHr5yJziRHmRRVyEQHRCQN25wYSkWoLXTrtAqZmWiyJy6LL9",
  "key6": "qD14wx3DGDi6xG2FkqAgJsucYaP3TQKE1hCmEeFekvjZqwQL9QtxPSniE1QbZ8bQF669mfSPL1VgAQLEJN1aCNs",
  "key7": "51CxGnU4tC45GuCSE39ahXNYr9nQiiX3sFa6Dwvp4kHvRGNCRmiqWTHhngTSwvRiWNCLTYvvyYYTWsN4PGGv6qtQ",
  "key8": "3SnBc72P31FYFx4BPp7nNc9pEH4YvQPdDt7sdktPZBxJ1YhMWyVd5wxhTvFmptPSmp8jWgBEL4RntKSmeTGU9Eo4",
  "key9": "2AipKgpe8YJSL6E6GTnYGAzMP1hxzoLtb4kfX8TKtdUyFaWsc3PpWtvAr3xD7Rs4UM1eNAAPsbVSVc1Z9DFE7E2A",
  "key10": "4g7dangjUU4CGbe6MSfZhboTgJirTynDA7sa2ia7FMdt6X23vTmNEwMDXotdJuyky9sH3yKjDY1YUuvUqntV3MtX",
  "key11": "5699MduxGxKF8Jb1bABjYJDfu4BX4p5Esz7KxdP3x24u8cUs6r65qqwsFT7gChntiSYyFrXSVxMYDQLJmd5f1rwF",
  "key12": "5aZ7f8r4JYGMcFupgo3Yr9nDZkVN786YXPunZat9x53EwwwSn2EWdBktJeykRBEAdZ3Bz5Pbv6YMLsVCGKKenFoL",
  "key13": "51Fb1M15jtpLcNdS7rnL5XUHxrFMrAmSRta5NU1PctpTT5dLUCWMUTNxbvZqHBrAciP1HFNVkkRmb9JZmgNLTRta",
  "key14": "28JaDNPdS5gmLTcRExjYbSbTzxymZxKgVAYtghRNDqUiUntU9thnDNnKcWPDjWDAV6P8SXqUNJvUtJeo1dguywGz",
  "key15": "36jbAcPxGHKupdY3yLEC6XvkAxi6dRd8dMc64QBVML72yXz7qLhEwXE4ur6MAuf2qc6oSrWBj8rAtbB9ZiUrQkZS",
  "key16": "PNc9kePGTzzrfj1Kju5ZHGPsKE23rPN8ig7Hv6Z1Bv1Q14SnjiW54avi63dJF2yhQbz9V4nAuSJs9aJb9PZKwmb",
  "key17": "C4LMiS7zJMGvC8gqWHWkvA8dVdeTG8G6avj91b2ckQPBdm4kGkcQj59vJz9fpHkP2G9cUbKCD5UGHa56MzUJZUd",
  "key18": "2ep3rJApJ6dEkae9k3jyNKnRUdzKt8s5rMtVD2rCpTTaBR5gaKDK24tAhqH3YU3WbAQuwJKav4n7XgEDFpVduj3R",
  "key19": "5V3jhRoTj2fMK3zxjjfpEi2EMa7m8PqKgtZnpq6ikS24WFv11MDH4qqUw3emearsT2qScdPLBKpG5iFWP7FJHTva",
  "key20": "2d2nR6XfWz76sKAZdbJzcsNc9hd2uEAn6N33hrFpcW9ZUBy18gQY2RPaT7qBrujPeRKrW5UstLkhUPevHf7v3T6o",
  "key21": "3TS25PJ8QrBBKZAbJsVw9QiJeUpoPBQG9BqKSS33Eb1rqg8BHLkBhvDgrbsckUCp1CCV2nEbftuj1sKP8XpWbMUs",
  "key22": "65a31VwZa4tdLQ2q4zarE9HewDbXA4zF64hY84R52yJVpG9GMmpeL9J9NejQxNrm4Bw7goHgTVw4U5phFhpCYRv9",
  "key23": "NzbT44yd8SbGQntjy7Xngu7gkbmV3HSnDcuCgcicn9sJGVMsyLYDyKpcFGo3zmwXfMXZDQ5bdqCo5BQVxWKc2fc",
  "key24": "5ALxDR1VbboQanFZWFjNCUmBbj7BXi3ZtPS8zL7aZixrwGmFn2a1NzWbJZ2BR7Ztn1KZPnmxJLGPWVFC3eEGEJtb",
  "key25": "2HVhK5dUqfW59BX1GB9mpV1Futw5xPqfoiUzLb6zbwNmsKw7HoraS7RcFL7xf8Pp4wtHGiCyJefvtWNMpoyevhi5",
  "key26": "3v5WC5virjmtoe3bm3PDLmbL6quSdtA9PoHn173sqtXK8V59k8kamQ8aYZujLgoMMVXNsJ2FdU21nC3PetcWzW9j",
  "key27": "61dRhnUSVQeRmnwi8Y95ciU8ZP26Nxbxg5ARnfWVYBPvJtDFtiidymys1Sh3NRqfpvqejEQ6CDaP1VV3DD5himMZ",
  "key28": "5wJ5nKhPHZEAzJHxQFLH8xJoh1oCvgbjF6DvkERRhuWKDBA2TChz9q4HoiaaBv6y2d5AfsvvrwsT8XURv9tGV3qX",
  "key29": "Kd8dDMoaHidynq9Vqo3oSjsDKhcaFNL54am4MoygpM2g17Vke2Y7vbaN7cS3YwfDH6LphpEBmCGVfEvN9a8ixHr",
  "key30": "LThaYkDxfXfvtDkntmts1EnMPEWkRtbyiw2EKVPAPrvgupyAEWFfywmq8t6eF3wcp55n5Z28DLVg5EsmsHfWBuR",
  "key31": "2PosnoJS8mfpd5vcBPNPpSEhcrMzBH4PYL7iQJh828wxAxgjQCzsh1RdqHTPRtKBLZa9qfA9TcwsZeR7e6uB5unH",
  "key32": "43oV4pppPHUsJiVGZwXFx5XP7p6UyexkLgXUYCxePBLvAyNKrxxGoNWMpuvnMcPrUsh4gNLCf68bG6wyFqwSwZJQ",
  "key33": "4gxkLdpwgTa5KER5fcUsT8gXtpDh5sPJVmjn1WcLb1yEZ6yXRV1242PEcihM4gp28Qxn1CZjKSKH6Z36xKKuwdMQ",
  "key34": "58FXH97h9S8om5ECXtArXGu8xJjjEpY4xmYkTXfAN6yGuCDvQF1fkepk1ipYtLN11G12MGxRaZzKX3AUGgnsaWPz",
  "key35": "27YvoDkaZeZMHpzkSAWXRV8ck23RVa8f6HZqKVVCsB4RtTdfKs8y2mKwEniceAU9E6tTg6W8EPNiWDVCwUCzeHB4",
  "key36": "4VynriEd8NHcjPZvbmnhppd4b6jsmGX52DotPjdBvjGjTBXqUH9d2FUDtNfNxSmw4qqVQHuHdnY6HuYiymMX93PN",
  "key37": "3qoXqoExLB9qYrHV3WcNFytu35WVro6z1AJhArPAsr68JFt7WKmYrVxcHdLWkCErL83XxPXN5Q27N6Lgf55Naw4m",
  "key38": "26AMxrKJhk5KoHLVjiMQe5wu8CRz2fU67f3FYBdkZiNfBHZCB67Tt3u7o9DFJ3uhaLySEDXZ19rENpAfy3D3es8r",
  "key39": "tynaTMa5MK41VHdJhULxiWdtgKuiVoNC7wL3diRVPtt5C8CQRSj1wL9EtiEk4tNrPjRVawwy3neiCy7i6NuoVyk",
  "key40": "4youZex9QE1wr2WtBrxvbmTKyPaKbdP9E3QSSNR4R9kb3w5KHei6Y6GnR6wvuZPJgWFxqETbWnP4eRdGujdX8Y9c",
  "key41": "KhyZPBehenwZ3qXy3ZWHJb2C8gCrBU2XQM4iPvAWYY5wHrUBhxJQCPJLBXLFqh2hBFE7R8tebMLyJL3VmY7BFiB",
  "key42": "5xUWyhViMpBPGJQZp1RL9XKMstUG54XtFhFuAGQT1GZNjes5eoAc6rgnRiVCUcRbxWTUQKnK9xY5LeQyc71nhfpD",
  "key43": "3FPe6qfT5X6EZGfRmRMz9hUrWJMdVo1aCHDgr8rTjHVTC824wwZDCaPHR6JB9swSpD5GbYNu1bMLayPtAtdpX9nt",
  "key44": "4BvwS8yAQ3m299RU3DrMp9cA8XJGKzh18U29wMo5nQRiXqi1dmuQaJVcrUvUPavoqDK5NNMy73ZVX7DKVar6YPwU",
  "key45": "4ZAzRzSFDqceK5YdhtQ7jRtefwfshad1JRDe1JKTR78X5QXz6sAUTehzry71fLSyM1o5MLeVUyJfEiVjsUfPvVrK"
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
