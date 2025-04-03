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
    "3HsxncSufmSUyyyh1VJWFv11eVM2a3PLfrL1Gtv5qeSFJj2oteb5SF7PGY7Pk4UD4xjQZt3CfULuF6KBr7SDuMus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EMPS33jam5Rkr8xjrwHdhFPH6ppaShxvK7Cr1mz89gStLTdCYTP6ca78KQwHKQNfoFCiZcxJMaYs6iW1tHPRFuH",
  "key1": "THogzoZ3YPp6wuiZ7MijFuTtbou6xUNaEJMkwZK3xFgZSzaEpR21M45w46zSySNrNrho1bJ4osvGsk7N7s8b41K",
  "key2": "3dS62HKp8xkejSnD9Y7VHHxSVbLzQU8Vav2x9yaMW56FXseUAeCbdnHtAE9cMCQo3wY4w6PhEzS6a74hgZvKcmLR",
  "key3": "4ozZyGBDeTsDPXJ2cNuK1QwmccDoo25V4zbcR61cwW5kUuzkJfUBtwT3VuyCNZGNNMPpz9r4Xc5rMMZ8ecFAbwVh",
  "key4": "4BL6pYjoKJDAJiMFQNNiKucuZPeEuZmJGojnAdHtUVyabmLvYfkMbEUF9muDqRsWHoEzjCbXFaM8XrNW2JoFLfCj",
  "key5": "4EPEdFH42syzpiGeM9AaKpV7nod9HV6CFefDnsoMsqjbqiCBMtnnBEi3oLkgPgGPJXkJbffgC1HJL69jbxRcaKyu",
  "key6": "2DoXQwLA54JUt4ffsDKcuUP36zom5aLqRY5pG2BoeH6gtte31DQyvo4qwcR8jNh7imSNWZTMfDcV9wTYbboiFSme",
  "key7": "4aWCtPqvxyJSvt4wLbuAYaFHm6g5jtniJRbbRmipdHvpGt3UrMszcS6JE6x98VgSi34uC6r2AFhPnyqYW4TQjhuK",
  "key8": "UL2G3o8AyHmosdWs6fzpiinzPWWKknZaexUjodD2yskmb9wjV4RwMGHC7KcHRE39iEV7nqGkUkzu2BP4KiQmyWd",
  "key9": "43KMcutefxCYWNSXgfQnUfrBWBNNQU4183UgWJAU2fWKUYADPAAKevKTUnqR2phJ1wFZrS4ziwieZSWhin6uMGt2",
  "key10": "2f1HTPsGAwmXktvHbKuReahRKV7teHFrERdH97o6G9HmZpyEzWPkeE7bG2Q9ZJ1u2hJ2bckaaUCYNg2xSzbKcVwv",
  "key11": "2QpLBM9jWDJH3z3GkQxB7hRHRVTJrTsVPJ4fGUpcURWHfEUz8VkTCaDSpoGKDHgebiwPhm9GaHBfgkf8hxT39uD2",
  "key12": "2zvzZsPYiMDvYCcr1vNERJe362nzd4X5kfYf85icr7Xnoujoor8G5rT2wNyva4Z4w987cBX2J8jeYFDxReMgEgws",
  "key13": "3Yp6WvSFdxyo9zpRBSCcfyHY2vsTWwTyPXz9txoaDaWQ7rBd8iLYyoerx1DaHBAkL8VAcRxD3t4gUbB8tu48S6aY",
  "key14": "2vmegS5xfkYDCeYMG9VNntKCpAh9pbqTmzT6WST6VvnafGhN7JBaoBAGAiwXVQNhKnA9BXVXPC5F9jtbd2jtJMjL",
  "key15": "2cN23txafykcwnCi8TH7ePVyNeGgY6Yatpqk8qo2V54TrLrZpgQnPnQ1Qd2bX6xWvgJZ9UozJgmSaQjyPigNiGQf",
  "key16": "2yLZh1WQZj63Gv1kgWTYPuL7wWRGTkyZNCBhrfFx2JvV4YFW68oHxMudBcw2DSZTE1FYsckrsn3NFKsGqntrY6ie",
  "key17": "5nyWwhKXn1hqWsDeDt7wETSA2mnoCdyB5gXyGYdfx2xwvkV7TcBdj3HcfQ5At3sCetTj5yUBhUSEAvmddzE9jqhH",
  "key18": "xJeuVwh3AqQYprVPzuMBTESjTs5DhuJFuAHdoJDPBNmXSETN8TiNgkFv38VXsfWEz5jyyzXQABEyZfQGujECMT8",
  "key19": "3FmzLq2riH5u2XDtJEr7KpkgBv1fg6kr12Amr5dYCMGNBnArXsSepcWvczVQ2hEpcJQ2M5TDhSUZKEZ9w1QpFzNy",
  "key20": "29RqQi91T26dJhjq7HKZTncANw3MY3rtmDnbphvGSw1FisHXBVx7tMGjJNPujrRP55xTGciTnHnvVBJnkgv7FGrv",
  "key21": "nKkUXa6YAHTrKGzWKD7DTHJ6NeBx3BhQdYEFgWmA458cEaRhCwPXp4D9fXFVH4xVr5etU92kVyVFjLaXA8Q8jWn",
  "key22": "Mhyj7cz42Mpyoig2zpMzfsBuYPR3N6Jj7AXYi4ZhnNzeAxVfY1gNWPgxsgWwVtaaHPmaWPNYNJZsB3qCadZ31jY",
  "key23": "3W3Us1xr4R5HUHyzpkqmK492GXLJYPxwegSrtX1tGmLtdAz1E3rJHUXnunhWREsdJ6o5PVmEJ8cDSnNsQbiDvnQD",
  "key24": "3kCkRbXrVk3NXLPLuyoPZbqJNvSwrMs6g2DJ3hRAo4ca7DnrQ7u1qpnCtRHRxyYgWNZrKjsrmwtjBqzNVgor3x4j",
  "key25": "juoX9cVu1hVpyRA9YMLtB8kzK9jF5w2M5M4nPDc177XVbYEouT9cjLdZuig2YJFxVCT5QwAArtsYLqNnw14CMLk",
  "key26": "63gXjKdxNdBmti1ysscWECmFRtGZXsfsxdNbmy96cpd7wMzUBmsh8Pd9fJBU2nccuhys8xE5vwsurQP6JcENYZJK",
  "key27": "4r4dLNSFP9qWJQBnKFEAry8s5S7PuMUk7yqRXB4bM5KLnz6FyimGHn9L2diZ9Vwou7oQoG8wrwvzdcBHrwwe9aq2",
  "key28": "3F1yJPUMQ9ohY65JJETtrnzAkWqzvp6ye2ozDwoxtHEzDnftufVJfJnWUGQkVighy8oUYTCNdcZsrGsHfBitFjMU",
  "key29": "66QjBodtQS56yQEBALGM1HgAQgBDUH6Pfcmuei7tEpv9jnMFxfQkeQfUijgxVoMXXN5rfPEwszFtUG99Vb8p6pWw",
  "key30": "4R8y3YSy2nypfuhBDmsbUvyYZjbwP427pSB8fwFq2k2FrRdJTXt96EmQuWS8rRbuLfXJXBgXKyjAat9YdqSPUs4M",
  "key31": "4ZtTAt7ahh9uNsxNhXrm9CKFkcgbz5oeXVwome364gKAuCnLaTuP3RvZYy7dnuoXzgcE2iAEKNEuFZncV6t2JXSb",
  "key32": "3tTew3WdrpY6fym2ChmLSwvqeXiD8csgozsqaSW6uyGMdyG6AwjpXMxyweZtSeuPmnJXtifrGPCJXEC16Wi25rV1",
  "key33": "uWtdYEdP5AFEUfeUuF76NPeLx3iZnKVQNPeyxYyFUhYLrn1Gobf1b9znaocWzsTcMULHTJdA13kDc89i9XJUB8C",
  "key34": "4afQoJZHPCUuY8gayyFBisVdLvfqYpqNhZeB2JFCVPTou92CtCrsUotjxJsk4yCCqvQakjm1XzvkjzpT3RYg88og",
  "key35": "CTBssqxFS1QK2ihTLqufSXijBoBNtbMk7HTCiY4Ek6cWfnCuXtWwurm42Cuu7GA7qDFWpfMUPo1u86yvFubYsp1",
  "key36": "2XaDAgS1U7USaxTnkXxwQ1JZot7dr19EKHmFbKuq5mjD9QY9TyQG7QrqGdKAMBna3eXYHhR2AydJt423MoBx3uMc",
  "key37": "25Gz27UpMG7DCTj98njHH2QUMRjmaoEpvsAVSiTM9byDCaojZwQdt6qrW7PKghExqDauVztUAHyKBMAWpQtcNhXK",
  "key38": "2d4ARwBjUpbkjyFHhczpda3nkMz3xsBVkcmXkBodcPnWW7G1ibmo6D3SEmV7M1WYmidEyQftkxem8pS9oHmz65vC",
  "key39": "QCpVPaa4KM76h9DbZbaVqt72XwvXotedAS3WuquSMZwyuBHKePVtWddZ1D1C1vLerBa6KcAGVj4xvC7AZr7c4QT",
  "key40": "29GaxwPABndaZi5tLytrb1JKCGu7TPFkx9Fv8kAeDhDmE6YPsUB6vCKC4oy6My9P3qquVNwx1K87s1rAwfMrj5Tf",
  "key41": "5UBKixRQKrRoqDqcVzHkmz3pcybXiWCtXGRszFiBbf5Cy5JpXvuJKNFDPcH7SSLPCr3ZEUGZTMJwxZF9WsyksB76",
  "key42": "2cJjk6V3dkJHm4LHS4SKqrhygBqiPxcoJSNFNYKkYqVWuh7YFd3qKKojiyw38ytBfYb4twkCXTstC37UFc7BypCU",
  "key43": "2HG82KCsguKR7wvrScEn8Ldh95tpSeg1fBoeQFPgTb7akwaFhwdixMrhH2vGefGxiDMk7cwPGkTHoVqjuhsyph4c",
  "key44": "3ukTtrkbRRcFkArwZeESzCN2NbjX6VPVqrU7LHUqawBpsFFDds4t7BGZQPXJ8xRJch5ZBzH25kXqkC2pQA9A47Th",
  "key45": "2xjj3GitsPqJHG9LrNuWe8sSfdgUAyMJQgSdcy8jVovK46JTfo3uxiTu6pPigzJizL38CuXzCUK6FkvEH9aw7hcY"
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
