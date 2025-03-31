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
    "8YVmzN5V5rxGeWj3p1vjh55iFt9PeFPgavecbYhx6WD1Joe6jUxe4NeH18J9URpaiiqncvsJbyWrovCrzSrKRYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mm8ADW2wyNEQ4ed919MSKVZMsxY79yrPLxqBHfFZmUaGmzGmwAEkEAQgwVGec2QQVUyMkfvKCM7kyNbCj4K1Go2",
  "key1": "4TyWrjbHwnsypEqCJpy6FpFY5Ft5yrsrDnL6y7zGdYTHkAbghxGYRxCUHv154ge84atRGDPrX5VTcuzm5gmAQMwu",
  "key2": "4HSPm1B8GPRa4coZ9Ecwb7mvT7Sv6y5N5h7fdNjEFowdgWFA8L4k991VnDpHwFiqjVN1MTLe8dx8MqkwhDjhKc6h",
  "key3": "Tt1yV9G1H6aHYwxDeENXZzmVcsRovv8UFZ92v9ZR1xau5KF6z2iQkPRqM9CoGCLiBy1kB3nBLcLqwZmhGATAvbf",
  "key4": "3oJgDvFtW2HFmtM8mpzGtrVT4zrvYejQM9rU1KwWj2LXxP6empTiKXgY6PBmPN6phboqfprccTyRYdVfwkGtDT8L",
  "key5": "3wEtQEFUhY7iAqJiXFoQbeG72PWEwf7nZrkX8qHqiBfHp4EX37QoWr4nPUk8CyEYh9aK4UqAFQRMf5DryMgDxx2A",
  "key6": "5KQC2fJavGJJzDP7KTkDeXEfk2VnMq539fNzHeot1ucJQof8jNoewQB56WKsVAUNyWkDR8T8KgsTxXwCWzBxWBuS",
  "key7": "3fphwHUJ7ALUFbQe6Yvd562NF5PWpNBTdjkLfjuA4JXj2Jf3MJKRK2ho4grj3kZsbMvrBs4561cmmGLXdxQudpyy",
  "key8": "4LW87L9wSnKRhFarMk9BiqNk8hooxkvN5z4Ht8uKFFyUmzEGE2AQX2YVKraGRoXRnxPYpHqPUZjvNr2TpbvWenPn",
  "key9": "NcCHDyMhv4sFNwDLL2qXhwMVrEiyfLhVEUAr8n4rFF3Ekk7VY2TMfP1WXAtRfX1XhmL1732znGPBsQdyKSGojBv",
  "key10": "445BDbjejMnNdGBvMmKMHJeV8YQH5SMXn1v1WduxdTGy5hCtKS33Fx4YQLQEPm495FBpjVrocerAEWYKiwWFuQMy",
  "key11": "4ezExsYEo5PEDUDe8BxL7E6t1tbAMUchrqMgXvTT3EayySghvkQEAfoTidp6zXGUQTPbHWzZmRgQadiT63viZhim",
  "key12": "4decvAxmFpdxBp7d6zWVMXbHQ5KSs7Jd9uSARq2VqYRJxnPbc7xeaavanjqQ2qop6cNG6Wjjvwz24q5Mgx73z9BK",
  "key13": "3YBx6NqEbmCXGME9DUuPFrejNQr37AWyYXbQm97qVGZzAwvt8GtXTbRJ8k7h3VWa17dQMoPA354EmYLtAi1owipK",
  "key14": "5SfvdytBmb4yhzNi2AupHuGi7oT8SHhTEYmRjsnQy6cwu173pk21fXjSAnKPbcytrJwPx13pgh65Wc3zi4f6Nsph",
  "key15": "2LXwxabRdodDxFNWvrc2m8aj2W2NVGnTEPxqoHKBKRY4w4ucGUhUHUUZn4gEYchieBbzTU28xbjkEJMksxzv5Jfi",
  "key16": "4RMyk9U9vwrPdXsevEeh2LBeuVmV7pZYSUbQB51L4Szspq89gCD2LkhZXVqMQqA7aYcuuiHXsxs1Z27z1nDjCwvn",
  "key17": "2xWTeizK9N6X1kaDhRaqXwnVePptRowUg86C1g6oiecnEoyLJ5MXE8T7xJk3BdEC7rQEtuHM3skSJPJapS4p9wUQ",
  "key18": "3ggGcsdfxhDYZC4ScBWXTBe4WPqGZVae8SHFmaC3s2h4aL9GxmH16EhwBwgpsqavAFrmNrv7Dfa4PpgUtZhgKXwa",
  "key19": "3EbDuJwywdK3V5cFfPBX28WZ9Ssv33dA18V2t738HwdsZ8CtLwLQeENY7j8VZKfj7kkiVJWqfjYeCznsQd4KqD3k",
  "key20": "3jHVJeLv1J3MH3MYuSng5g6WXc9jWQ9VmfGJh6YvWqgXXk6cbov9HVDTQd9mZ94Rd6Fk9TC4DDjWj1oVafxznBP1",
  "key21": "3jDHtx4m6K6ME7DFQAxgitVarRKahHyZQUKotNeYNWGoqXFJXieCaJniP9qgXLWMLsYMm9fNP8QeK8KNSEvpNChV",
  "key22": "4WYZ1GCKVtJU4p3xPtzbm3cBRT8w4oFEZc9ThwB2LQsXmJUujiusgXp5un6KQWPuzmJ6Pg2Vo8PrJdMrzaU8aur7",
  "key23": "51ZuGPMmWUw3dLHgo9SPbFu54hpuADchxasWEDBY5ajEbSPGZBvJjaBr8LnAcpSPUhZAWMWyiECmRGC8TgBbphHT",
  "key24": "58FQ1Kyo4Qf5bPzd2eLNb54oHVZHzdqGV8VaKxjTBq31gH2GeMsmyKVarWdvwZ49WyWdUfm5g1M4sgjAutBdqgZu"
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
