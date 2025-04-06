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
    "3DwVu45nYo34VhFgskqwst7VfdkqnFFwMSTd4hda8xVWkDC6Z8WyDCkhhhXkGs7sNBzAk7kiocFLqzVc53EPnDJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Geojr1hrRntP22n11i6QWubj9JjSzMq7wFKCGV6BA2hKSpjBhRKGQmNGbUUuDgGr91pxSxkSVMw6JDTUC41QE2d",
  "key1": "uvjgsHL6vTQxfe6y3S8rc9GyGykVbh7YfqqagAGLqg8yFjmKv12fuGrwo5nuSoxvrWiDefinJNgMUd5cM5v2toF",
  "key2": "3jUzZdQcGkouKJXYBufJSnCFgGkEGKKhj5x3MYoWkdWwouZbr1VZDQGdWxs2jo5sP8fKWczuCyAicMW82gmHfizc",
  "key3": "3MgdkeYr8YWHntxYeke7NGkDNb9aC2pRPv9VZhWYYkeCQdZw4515WhfJRaeBeLSao8d4p1J24B2QHWT9qvxPejV6",
  "key4": "3o4c4Ava6i9bFTBvPDkJDXiY1mwV86hQ6uGp1FKAYjhzCfQViFAdAy29AuHqJKP4aPNtZdtmKYf8pCvwancMxnDH",
  "key5": "4VMzm2pRSXhq8zcV9pL5zQc6GSdmfxyfxMceAXfVp6h72uyxmLe6jZweEMtke8QGGXigUpbepCHx3ah4L9hXs55k",
  "key6": "23q4Xobr3KpbMtBThMhtihfLNLazqtKjz6QZHKxmWKSJfKnxC4nojQhogweJjZ23MB7foGwHFusd7YtHQkLzaYCi",
  "key7": "4LWE5agAUZg93ErmJzQdqfpjWH1hbYj9NdNFr2j9MnooXQRCd2rJiNR59cZTvz8YG8gjbXtjWupccsTdt2CqEVt9",
  "key8": "5NE3zwUEuBx525QYHSWUhfEMXFDgnC2fC8sJBcTDeKABewMYZa7CJLrng3NH884fE6FFrFNUGNSQfwB4rQNsHNXw",
  "key9": "4g7QqE8PDUuwMHjvuwftFoKdTJjPVK1fBC64jwiKHoNbu7M4kWQFx933rpypdbccXWpSeBZ5vu5cjoL1qcrZJHNR",
  "key10": "3eeEq1BgZTLhaARavmSKW4NpzdmD8tGRFRKQU8Zqy3Ky3VVU3Bwoi6kmskVtmDfiKyEWxyYBcoffb8LBLtXeWt5S",
  "key11": "1YMo1hHdcP9FihDUMVhpu1MnNBTaVCAvjeQ1oz6za68io9uUvXPHP1TS2Y4oMqGVXArCyagzbJCnR6fE1f1HVyG",
  "key12": "2Jb8NexamAm5ZRMgaDub1bBVJLmMbcsaFHF9kfsEWqYp8o7ib4kocaLYb8iUvMQXw3a8vQ5f2UHuJBCj7D5hWaeT",
  "key13": "2Ki2qWDEfeDWVApFKGxJYkR7rhvr4EviXu7ocXcXSnhxmf6USyFFFTzgHaCjTev1MJoqReFr6wzuooQrujAveo7k",
  "key14": "2GQGzHUTzkzbZUoFq6o6R7MY9oXhzk5iSYnt8xHLZbfyRFkvK6qY7tmj1qbB1eeNppQeqY2wnTJEq1KGmWnVWAN1",
  "key15": "mw6zgZg7gnbtSgVdq8iV39uAcWVRzJsn54dy1BggyLSWDsqiut9824Ewzi8HnNnjeXN1h3sSQcssxAjGz7TNyBh",
  "key16": "7PoLsukHLA6CBuREfgHfa9QqaUBcw5y8SQcR2MApUvKNHaKJbuQozc4XDnZUG2Fm9ZGGQvPUYbHCfdQda5ZXk5U",
  "key17": "26LE53Ttc9N3gkbdM6WLWTzWejWzrCXEVpWj1EimK7VTYAXMhomvLunjohg8xFAEjYqJX7PjHrwNooHkwEnEFVr4",
  "key18": "4SGbdwMmr5uehoMeybbB78E7YPeMimEt7ErBniBkeXBM8e62RjJuYhawMD2BZn7FwbEvR3BGm2pe434CDTZsd3AD",
  "key19": "bqP4vJMpSPmYEg4gS5kLmJD51S6XupQEWinD9bz51aXFsyaKUQSWvokSKtqfZiZrceRLEBSVh8HFSurTs5Ci9zw",
  "key20": "3tVRdcTGwAiEV7BweUmTcNgo1qzBrXKK6QeAXnEV71BZuehSZno4aVfRRpZQ1pD4GXg6Qt24zG6f966NP8BByXJY",
  "key21": "5V2FPyUM7LU9ZQbJkYneiwy3ceWeQQKtqzSN6EB3HZMRcqFes567a3A4GsSBR9aDdeDzAqeAhp2TTQm3HU64vmBZ",
  "key22": "xkSeviFmGpEB6QswxNR5Sv7jWaA38q8RdSVd77LgkQfUiLvXkT8FKU165CcorfDkogZKyp4QsqagxFeRnVkLbuU",
  "key23": "4ggaHub7oYFhvzmWeiWedJ9RiuTCad1DkTaZ4UQuCGwm34NjbDSD8rms8TxHs3uosDcAsTt4Qon4DGvz8xVUhthB",
  "key24": "2ZiDuVPCW6fsFnoSx6A4x93SBXdzyPgwGj6MgqtyJJBEESzXPUTUacAQhrqd3A6auYkqjbvVVSFBSfxDidMm6JGZ",
  "key25": "y4uR4ondaJybFppVcjDeQxa6qexWQMSB7HpWKXNGCMsukw2bJEYdhMSFmB4p51razZDuickUuUJqeEaHEg2KDYX",
  "key26": "41ArdPMWNPpk1q7RbahhEQxzX88FffBdQtshRo4RKFfeewMgpkti6LHaF8AC6jDVMRJtasjdCvitsZxfxabUnkdw",
  "key27": "58cgZ5w2iDgsaavHVf7svbBou7e9BxQDLBknYv3rhhGH1JVVtBijoF3Zdep5pi4As9aupVdqyj5cTTLnPFfEeMt7",
  "key28": "4VA2uMKLAq5Gq8DtLzzaDZ4tjvSb79uZ9Ro3QmycDcWTGtZHCmydt5zWHEDZY3v5VWF4wBjwKGGcHKS8RmKW6TfX",
  "key29": "5aytgZuPxj9vD7cVetCxkvLVwJZbTUr5vvh36kdGF3aGD3tkccd3jwjgCmBAARo3Vky96efRddYdnghZXPU2mqK4",
  "key30": "4yf2akJa3mb4BpGVJfa7P1NqiciM3Ufph5tpbNjqYChg6TJbycX8fRJzCYRLQzissqyBethAKjxy68CTkPuCjJVB"
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
