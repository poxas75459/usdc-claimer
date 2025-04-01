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
    "4fbR7CAFw83HGUzBjHfizzRb1TiNzbPymJo3snnB9C8XhPWjNBe4capRAFyPHmyWVTp63vwUwgs2kFRBvxjJF3tD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UjHPFSobEVKb3iiA2k82ipDgLE7NbNEbGQy9updWLNbL1JuPtpjboSHwjubdMMgmhze1Lqo4AGvL6umzh1FrZsy",
  "key1": "5a29FgGk8KxXHq93kWLjEKQmkWBGuAkk59j2kCATngMZhdvKKdFjYTav6znfUs9NZ5t8FeXBJPpoTLLdd64HjCKr",
  "key2": "53p4CckR16S7vgTRvjvGNhaDVDkPmp4xPGn9HbJwDVDtiC2rmjV9Z3ofwACQWfVfDgnvySefDwSPDY1y7WX8z8To",
  "key3": "3oScL9ASs9UE8PQq4mie3FbPjL21jPzz1JY5pUabaARa5WthMYJcwJD6CYbaFujsvk98XWzQe2SPkpma1WzDKwzg",
  "key4": "65dapV647LcbDHxABN23B8HFZ45tz9NugJaTPidZAbpqcjeegLE5dFWLc89cP1nkpJSSjgMHXgKUCQhnBKYFL8Ny",
  "key5": "34fkQLjPHmJEbLA9Tjt8xJbzzuPmuRKeSnqFYJhxzPWhwHcz1bTcyx72nbyNRqP5urRAmis5dByqY3m8YamCeVBu",
  "key6": "4o38a9DGNP6xtaNbD4y7EhvxByPe3tf2bUqVDJKZ6SfwgM3SrsQ9hw5LcKAdwzsvkRnAQe56Yax1sJRdTHt1jFWS",
  "key7": "H79daUBW5CC5bfJcENUUXKk7JA5quVi49iv5fn6Wj4vSoqoZKU7e6yQUMgaCFBXj1No7h8hCFoUD3JpqUtuLDpu",
  "key8": "SU6qaoW6HbM3yhQrtwJiojLUkbsyjF9n4P4qTnbDE83GhHVf82Trkh4TtkzXSmFEv9JvDoT2vBJ3hPxykmSbxGn",
  "key9": "5WJbupadc9ro6YRVqcuBHJUovcEeFhdseBFAxAmZVBRZCi1rnQAidnugZgvu79r7btkXzKfLBU6ricCDSk6tkoDj",
  "key10": "3j1vGeY6rdxCDpzAY8iMFiwCFuWwtR1SPN2YY2bwv3FALR43DRpjrAx2w7VkxjpF6X4SqupKnwxUxamQ35GraYgE",
  "key11": "5qEe24eaouUSX48WXwahtuxP3bG93QrjTg2LyxvumHj1TD4ZtnM7jsfY9hMGSG5FovqGyN7PQtGwoJZgMTo5Zymm",
  "key12": "3YMBUZJM8nW9UAY2uqSpJ1mm5Zcpm4qwtZTkxJrokZsdmwugBkHZ8meBR9ouSfEz3vNh5hJHmDgJevcXK2TDKpm9",
  "key13": "2Bm9HBFo9q2e2mML3cwUgvygEAdR8wxhRSj1uNJrGkcYGtpDQPdSeiSGbHrfqmQNMjNuxtdrcTw1myUZhGDwErk2",
  "key14": "Nx3kcggPCXyHBk7NkGNsquHySFtjZk5VHkgGHB3tptp6TaCAYmszRriTGdAtucFmm1EkB6wrWMwYbx7wj8FvUXV",
  "key15": "31GYvkaraxqmBBBXccDfCHdkoTAsL34nD1pbawPkZC7H9thvLqhTezFiHZfDa4usKd99kqX2yNTXiXQZuZDJrpTp",
  "key16": "oWCWGuqBLJTJWNE9PZBhGMtyRTYy3VvYxrXxTLcSZSHUVXJWznocnvkTjy6YyCYAXoNpwg2ZQfNjuRRpNudAJoi",
  "key17": "2D52vbhxxJ4yAfjRnx33CHDtgBNsjQSdNNdKmmchv9wDjRi7UatbKmPDDhSecoTVVc1NTwoEDPsDUA4GeP6xQuXJ",
  "key18": "idak6nh8z3FeFh7unmzaLBnvargBQtemKBUcgQNEtHTQztYWE1rmbUkAvxeF6pnhjmKrXNWxYV249rYHpMmJmE8",
  "key19": "3dMzczVxwBnuuJWs8e9eErB2KLRPQq5k3FBoBdJoUbszA7fecEkoYA1kotiR1oW52xcrQFZUwg8rzM8bD3H6UsBg",
  "key20": "41wk2kZpLD4FpWtQftvCFWEV2GM7xMKGMgq2bDjJnxkNscngyG6sre3VW8ntghiwFZ1VnyitKzWhJVSRc7EpowxL",
  "key21": "5ThPEwe1m2vvsbSnB8EDQHLJXCA59obRM2m3cwGfmVB4TBwbvJVZrnMK37Dki3FgH1xehcmepvzm8gEKULRwTAdh",
  "key22": "2u9jNFe3ti5RVvvPr4wUfFpWcnaL626MYopMmbhrXZc4ZfCn99JpKWkHxjZCN3p7BxEqzuqvATNBd3g76eLV7cdd",
  "key23": "5RNj2SB1xqto8nfNsVxwsR1iYKdYhCsxsXqJqHgnBsrSXZCdSPvHgufjtWbB7vpJUyinJWXa3Nc5tS4p92zNvEBX",
  "key24": "4Mq5pMuaK58myV5mvNVd1XuiMNttjHbvCbvDidbnrV17QxD7Wcc13G3uRBLQEaLQ1Gyw7mKJKopuHZ1i7bJyTLbg",
  "key25": "4zBWsT1asXqpoTVet8D3NHcptEgqHhXuzPFsLCqwUNkNbdooizktr7qMVPDnhyN5bVH9f2R3UoBc11kwu6qActzf",
  "key26": "2T3Pqouf51BiJazkUtZYbzi5LNrcnKbFXsBJxpwM6K3U4cccdif1vu3hcApi9XEXSm29uQtzCjHGVsif8SRPP3yD",
  "key27": "3M1E7JoqfCCXNya8HkojyGxZ9epSZvW5YyugdaDB3sLfpJwQdvMveAjVfSH5CdA57QBqHwzmk2HEeTier4Zbsawz",
  "key28": "2DBhrv5w46zpLVWxaa4nFG4Pi2xuQjRQgP5dkz4H5kzSNoBgwJJRUCJop64f7BgjAbNTz1A2Q3u8d3MXMocAXWzV",
  "key29": "3NBJ81zv91DgSbyQwPxPsju7XDD1EwmmnySJzViwqKcAtZi1EhAeLNEYG8JeJLixqvpKiTiy5QC72X2q3HZFyiXV",
  "key30": "3MLTJe2uEzxbrtjhmvDKatmwc87cro5JQpFTA6FpeTejgar1Thvk2CNbaFYvt3oFwVuXnuPiVdhQ6JjpVSV9bPow",
  "key31": "3EotsuxA8PE5LrCRyHDym4qaQhgCHogfcv72Kd7QdBdSHXDCfSZiLes7TtJTCiyGnckEytac58B4qcNzbvW7ZNWV",
  "key32": "4NLx5mFtGaxuS1m2F4G7u2w25g5GoQfw5LmDVvHbXFHRVJ8s9MdgwfE2pM7ScyZPpkU3WTorWfaViHPWNrxgEPb1",
  "key33": "46oMJD7MvYGUf4xeDy3YV8LCp9LYhpfrTANQieai45Tkb2TzbdqihqMmjkXVTChBWBFvNznVtawJmCWx7rwK3344"
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
