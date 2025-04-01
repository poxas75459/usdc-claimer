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
    "4K7wY5XJAEpVWGJZ9raAatw3GZbf8Ecpom9Jdwv2cwNP6oeUTtYEJFn1WF1xo85zLqWpoUQrRHXGP4KS2bNnenPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aSPzb4R8CbWbR11jEKfgfdXT8DNN9M2yBdupQeKJkX4KEij9be5ixRmKwqX7HWvPKSpot2n5uckWDVAdCzVoSwm",
  "key1": "3V53fDD9YXheDfahx9PXjsreju35Zy5Be6yahfSnvMe3ioAWQHya7dniJquxY51NXf7uNhc8Z7gfwhpd1byUWdif",
  "key2": "4xcp4nJinFNEoj2fNeRCX1phdEYS5TijEPWZavy22XA2JXJEAnTYN5FdXe5f9qdAXsFco2NYrwHfHo6DFemwXyes",
  "key3": "3GUjKdQh9LHUgNMCTkkGu3ybTL2esrNdZx6JgtMtKVwPCRv8rKiYxUZKpU9kYPWaw2VNLLx2rMwsZnNfWTBwibkR",
  "key4": "3Y4AZendMajduZkBCQEDyCViyVwCo1B2ey3S4Y2WpVvaNK4UuVF9fw6xkNAqVZXqNqvb4Uwuwnz6RGs3MwdLU3Uj",
  "key5": "3TX8YMQ4S3c6roFGosRhTK7GDMWqLqw6BwPFzzxw9xL6FdyfpYgGJgewfZ1tZWz2zLdm2sCiFZt8twiT4nkrgF1h",
  "key6": "qsABANTyGJHrLEe5oD3XTJwSW2U2pNFiXiHwthuobCWRsfjhPwVhsgpV61kH7C6iRNX7QTX3rF9eLuFANzyRWjA",
  "key7": "24ajB5VbpNfmVN4yWun8ZXGL3B2jFGu9i46bheFLEND8JnupvMQd2rVCn2Ri9qMWXRQUzUBqwnRt3JfKmhLh367c",
  "key8": "2GYkHZuXNBJnH3vdRBTAjuMvXpxALXYSyvrfqUgyqJK99E4sUKaczFUyMQT5zybwG4YsfR7J1iTcCTgcghj1Xb3Y",
  "key9": "595iHpTswqHBufqnWgrePnNPjrSPMx4V18Zp8B7Kutu3FBCJH8baef5KWMoWrgKN1m2Vv3mveKm9NZ54vef4knVf",
  "key10": "3ABht2VbijqHtU7iwjUf5iJsoHrnuda3yP4Erco5FmCiLganNAECwy95LXfjBjczK5tWBwysGHScr2My2hfsL898",
  "key11": "34GRPy6s7eWAPnoABxPuxKYaNs5DRHMMULoCEyFE2suMa6tfsFcoWhVbVbNKHj3TV15ctpDKQeaEnv2Sr1A4dqyv",
  "key12": "2QpthtedhS8E5Tz6J81J3fqdsFCYG5gyG2dxNC2oCBE3i9ScGtbJDeB1id7gW6AED8Z27u5L2YhxYmz4dZsL8pw6",
  "key13": "BsnhMiYt4NZHr5efVqwPUtUbXBqno5rs1iftyVBEyX6Np3wZhRQe5Q5ha8Xt6G8hxaBN62YFjLi4EHTNgDtvCzr",
  "key14": "58NR6MVTZWehD4MsxxiodGqjsxUaXcTCZHLCWdJnhG1Y8auYnuR1BLTjjQ4PPuxJVgXz6ynvWV52tCYK4VyFUjYP",
  "key15": "e6MzcXv6r4LAHAK1Z8LLunWqY2jYjjn4jZ7s3iBNahNsf39dJtQKifyR7JGjBz8s3uAhx714qzbD7WWEue4Ckyi",
  "key16": "5uU1ysS4u82kZXbTLRSWSoGMEa6rYxPEzYRZPXGdx365SJJ5xWaBsvhB89QukkR51gNTtaNkL4ok58D3LxYEBoX9",
  "key17": "5sSfgoJJgxt2YjhN5HwMprN68sdW66VFkUZZebiSHE8nZDH8nMrdGbK7MYZ7xZR82yJi4FWAo6HYXR1XTHXSgcn7",
  "key18": "4victjwZf2pEFNZvqXQWZkr2oC8msi3XJzViBsPzJ8xNjnxoHzUKDkmsw21ec64mYKHvgXoANYWtyEysXPhH2WQc",
  "key19": "5Hiux3LChdzzjANeGUieczidY8ns2bqbqQq44Rz2PjRd2MpadHpvQksyaDM7akK5p91coCqgHu2HjQsfLW6a7J6b",
  "key20": "2aQ1ArAfwngEtmi2knUEZSyDR8r3JfyEpbKEtj7emSZsf2dwZWxFcBzXxfpHs1Qb9mEZXWzmWwQHGtFxQ43cYrJ6",
  "key21": "46CyLC1D8feB1nWVVaMKWzBpYuEPKH4muzjncMx81sejWY2KMQG8XnGBV6E25jsxzvVYJN2SsueCH8GSxGNh8ogV",
  "key22": "4qFZj1F17raJWyHB6broX18EKfyND8WFSWj4txs3VY66wXUgStaHQwDFGj5DNCApEQHBMCdMamH5N2ZpzzJgWwRR",
  "key23": "5iuamCj8rweeKwzBb8KnvkhNa28Ba4vnTocaWdE3kb155cSG9gLi4bkGiqf6EpNLx5P8Mew8m2dGjak1dxcShsHh",
  "key24": "2XPMFX7uH9goDBcP6i86yLo9iYvauUPxPKn6uZHwWnsD2MaLUHGo7eMR4urNAomgzDTExcM1576QkuKm5Cfwo9Mx",
  "key25": "Zax2nefppEUnwp17siBp8sDM79oThBkyDaDM8E44rXVKRqGQYQW5nBRVqQ2LUoGT6zzT1W97vGpHoVFzXcE4ke8",
  "key26": "3W2JLVa3wCFJVohFMQCUb29nBtBCVsJ7p9q71FaNHhoGXdJiVFgLrXp1s7YNyZ7ShnhXgTV7M3FyQXoEiyNQdPKs",
  "key27": "44thFS27AYQy5RZqyE3Nyg9xUJAEUuDGr6KA3Rmqt4vCkqPGcHwWoz9EavyS6t7bkgYvoHsHzMkp2AjcTZFAogvs",
  "key28": "6uRY17C4KsHvJRJKS9wcGG6yD5SdrduJ8p3WC1367zSgRmwu2xqFzb32mRXjbCzgYsjfQDpSX3evzPUNNN9FBA1",
  "key29": "2QR3eLRKCbRomHzonrDFkido1VNFv3i6rSgk7k5LWzbobhFgEP7nUE4x3sD2ychM7w6kL5R3tvUsf61yUDAsjpaQ",
  "key30": "4ESSTBm9nDbK29EU2MPt43xqRF77awuXyf4nNCKbzqs2NDEW3XFMXFtcARYrA4rQB8YPAPw9kNwKTRZCMENh8vQ4",
  "key31": "3qmdxURCGJXVrKUUN4dtqYfU92wTP4hXDPFziuBaCauKpGudpKwguXSgb2B41R6nxyn1QvGZgUvBMjT1x44aBA2G",
  "key32": "3paBY13R5i1q6SjKBGBA6rXGJcxbDz5EdiTC9sYarxAAQcJm8tu673KF3oaF7iLd7HkSdze6TBSkWbAwxAE3dLE4",
  "key33": "MZHRc7ZX2ckBtC3Kzrx2ctCQh8UADbKKGnApfiUz89o3UpiCzcFLftEouuWZvFipARCZ2FPs2MA8pZV6bf98zKS",
  "key34": "481zbk614m3c3p9j9oukpohnxp23XKvesuingij5uXfgBYN8P873vTSeUo3yzSoKHtgQ2i6PpGTSXFsAstu7YvFZ",
  "key35": "67MqEw42SoiPFJAcUtkAiVXFwhuGr6j92C2GVw3rHevWE8vh5f4HUYM4yreBVkhj9nsetqccaDsqMSL3y2WYqLoa",
  "key36": "5opQq581s9drSQjEM3y7ibXCeDNHLTo4EXCi2rZhnPXxbtJWtH9hpCrzTeq1VCiscaYReZSX4yX5xXNeNbQ83j9K",
  "key37": "5pxytXRrF1rYrsxSU68U95a4o5oXQ7k13wR2Rf9TTrmtZWp31qK1CRcW1776LMdKwxJnhRVNHBzi5rbsm3vsd8uG",
  "key38": "W879b83pcPr3bScaS4uWXoXVeiTEQEj7cK25qpfypmhuKj2vHQshJzH28PyrsKzCb2hacw6S337y4BwAbBwBXm5",
  "key39": "4KCPHkmRXd3rtafhuZSGtX8vof5yHW46qYVH9Mii5JZqTGJtmZg4Rvyp4d58TVnZZMAf69tApdG2BVpgh7YWyKXf",
  "key40": "639Uw8tuxFEuMFrjhu3PGv7chJmLSngpkTgCgdP9Lqc4UMbJT5Uf8TFhPARziF2yuBuGuCuzhyBR8UfAamjUx2wt",
  "key41": "3qNiM2vqcFQydgv5fgD1GUcETwNRcDtKbTCCUp6FZCa7SUyiiuESwCX5cRYFre6ociDTbnB1JUywRr32ep36fpsL",
  "key42": "i8cCy9BuRoBYL3kNi9ifhZn7cvqWPi51htGkMtwCwQXAzDGpvfGbjLUFrMx6ZojosJ8QTk9sQYd5ZAD1p9KKs4o",
  "key43": "4DXtMYLH27kJwBgogneMCkubeA5FP5LXJQUCURm6qYcdphzRDzZsfGAcyRioRPUJJbFc6ah4H5wMXWoVCC6MwYbq",
  "key44": "3Hrd1mLLFPF86aTx9niaULyziZrUKuzgrheaWwHcbvEs7EWagTyGEyd8x2xN9QBx3iCvabVw2PMPXWtfNEwjpTyB"
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
