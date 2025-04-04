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
    "2j3njx2GXZrdcPpuPwifg6fFVasvFkw6X5cEK51zgc96YwxBLaB5oRLfLfkdmXEguK9PYrLveNYEA5bK52bfCok2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yLf9tHk6FyRE91baAiBNWMsgwwKgVTAQMRW5XYMB3YhQzPTADNsMY3rNPkoE4Ldx8tzmk2j67nipnCuZiXNHi2m",
  "key1": "5r4hWw4gU5H25JaNKon5Z7WXF81Yj4GA45huKFaUXGd9BTNuFtQKt9gs7aD7ecwBJxS3AMUXS4Q2Kpo6rgPizedW",
  "key2": "3w7Cs34XFULd3yuDzNPxpAPXp6AasETPR1VH3hCcjPr44QokzgJYd6MnWEgUd4VkywFqkHEWDd6BBqNrQjJtty6t",
  "key3": "534ytFnVN9rbKpcdBMJRsSQWSXtX85DSbgfavygzbp1YxUBovVQ2nkwsfHRnjpoLBTtXsEib5R3iCLtXFhXGu3gK",
  "key4": "5778FxdJCfFikMmQy3xoVFVf7pnwTqb2EJEEaZ9VMPpYvZ1sHzS3PnHSziZvV57WmNpcSWnBdnWR4BPWNP3TTzyP",
  "key5": "44rkuqMDD2p3oGd6z13QCZHVYzMTv4j61LZKcL9mf3qyjperVfaXR4oT635ZuZTPaKGYCoahgjg3rksVE3jwVv3V",
  "key6": "57Ni7hb1WdGuJRe3C3r8vqja9QwcmFVckfu5NnzMEYMmGiB1x9NJ9gcJW8yL3DDwmvdmeG9439pPXDsPGbh6vunp",
  "key7": "7JLHRHLkni7PjmRLHKuFJU8ziSF82ghh9Dp7ygA989kPpwX82HTSjUM3ESTssrpjWtLEWG1XMSCMoRSaLRDuBMr",
  "key8": "bCua6j9LuJ4jWPxHoyZYMU1tfsLM1deLnv4BdEyF7rgApi7iR2LLpAyaYEX6GVsP7cXNKHD8jrfBXXAkWN7vef4",
  "key9": "4NMFtL1iwM1QDYJkE2mm5QF4GszKaExRZVHLwtEyacr5NfPAdT3ZGFnmjugfd9KuEvo5jnfwwcnbyP2hzYSM4sXG",
  "key10": "8HQL4Jhm6JJbyWq4F8Sie7KHfy4DY5G7Jvfy1VA8ZYkKZVaafHP8FZPqiQgcEXwccovUjFk73fy42Vc4PK7CrZi",
  "key11": "6hJVYNe6e3dXjCzub92LsMmw7HgLjeQjKeKLn5pFYCYpC67HF9LBnNdZ8qxA9dtKCr2WNbWTQ3d2LjPKRoMgtHF",
  "key12": "4T79LsTwwnA1DBYM3Vhpv8EryuyHUTi7qcegXrGRZDJpPd7LmFcDCnBd8HuwT8mxiRUmpMZikbmGSV3Yq69fTKE8",
  "key13": "2yj9eT4HdSteUkLeTtyDouPPnMFR7X9sXHa3BC6LW6Bmy78tEJs9DvK1znzZztiqFY2CsjXkJAr7gKHu7aLRnMCK",
  "key14": "3LgyWCJra1DMrF69wSnQcXXc6GghXtQNwW6xo7Sbv9tHJ5CENGK6FEpctCXM9F8LzShWNMyRAMdM6CviuXh99R2H",
  "key15": "Wi3zfNurg2a1rxLNBkaM1nPjv6i6XRVGtKzzEkec3Ng3TG5MqWvoQWxai4Y8Sq6vB96P7fnBDMrhAqgoYNQStWm",
  "key16": "2d6yDdJ7vniWvWXL2otefP8RCNxFKajFNcsbbvv1SYuCrsNYMPePQUkjPddqrMf6AuyTpJBa92j25Rw9Ym9RgeUE",
  "key17": "62YoGdfnCkWXTqsBBWAwEQqaBABtARM2Ct8FUSTgvB7fK7VvuWArCvx1PcyJJeGoSZeVvufdPDZez2EPHvifKG55",
  "key18": "G7cPz2qXxFRvUjiB75bn4ZZReEH8Wezt9yhJAynSWyXmLkexFezCTT4fVvwu8Bjkr7P5KRn1ZkU9Y5QxgjqXcYB",
  "key19": "3QJXUJXdB7zncTdAP9wR71FGsZt7GQknW1xcwxNvGtPC23WoSCMP7UGbaQjH6iUiPaMPunAHHMdu1wqxLi5cPBv3",
  "key20": "3u3ChH4MMME1jcFPQpYmg1GMrfuvpmMDtkmK7eZ47K3AUo41bL9ZZDtnwA3UBUBAsq4Fvc7dtPPFfZG4WhJXAryn",
  "key21": "4i5mLK6tbAVAUUhKUXvjXRg1XwVTqHHGEoo8CAtPh7hMq7oYMu2wzyx6184PfjFiY1bQ9tcnRKoJvvHwGeZPKGzC",
  "key22": "3QixSZ26bHVA5dncBaskdTbRnwQ8JBTw89vjzDZLghow9A7ezXjkxPMHasM8em1Qet7fCiRky3PYyWaXATYdJ2Fx",
  "key23": "3mHxmXna26RSnSGoKftvJ1u9LS8L7PRvmVKARbLMpC8vfakTywSmQn4bftiJCv4CQQQz49VUDEjV812E3RU5Nw4K",
  "key24": "5YApjPpdiiMasLja2KYXoWZm14EVNzxskFqjAoNcfVUbruGV2uu9mjBLRJcU6Kjp1mGQaNdVef1grCsbYyGU4Q4n",
  "key25": "3dwezmMEFYaMWZLcz7wq23zy3CBTF2xpT4WT7iTKxofb1wKAg9n3DvuDT9q6J4u5XAek39ENW1nukgXLmJnTEvVD",
  "key26": "5Guia62xUDSR7f3TNHBd64QrhjwBYZWpDKffKLX4wFMN9CymyP7sPQ1hoh4i7uYixeh6m6GP9vUVd19af4jrMw4i",
  "key27": "3Js5DECJk9N1jiJN24t8QhtmeF7NRguaq68uJnUgQtnSAawbvVnH5QzHD6tekCEgYwtBPjBB82nC1wCymoNshwsy",
  "key28": "3n8CYTbhF9JpA1Kq3Xc8CKCrPhh6cg4eaZJ6UtCcqEXnr49EpoX7ohvcEXZuBZYHGewaECAU7GHEiyCwMC1f3Th6",
  "key29": "3QmMocPEa8abvv4sjikhLU5KL1jJgHw9EfadHW7JLXKHwsTRasJ8ZMtBjecv7Ghd55QMowaa3XHc3HRBvxFYYtFy",
  "key30": "5SYbkqUcabvUJBum6Vn6KzyhyG2NzPE93XMqcE3oXRWmvmhqFgULEEdyyDwu77pfdxJqtV8wX1TWrxxLjSdaXe1j",
  "key31": "3Vj772Sn4uhpYVh1ha9nZL4qDdTQe334ioSCmwTFPnemEUdpA7DsNA4t4sxKYAcWKszyn4Z7T2SCHsrgKdiPDn1q",
  "key32": "5m8Wco6Z3wwxXoB2pzHDmaFaxMfAtZjPXsCbc11JgihdE8fhn6a43B662hfY9Ee7NS6Gi7J7Yx4ewj5Mwix8jHDH",
  "key33": "33dx3J2DW13cjg2TpjMiBknryeG8PkuUABdW8oeWu8E3C4TgQyiC8NhRxqWF9c169kkq2ZP5Fhdk15Vo9HzAsiyc",
  "key34": "2y9PvTJzcnsWzWzCfoNSisLU9osDWdvW2QtdbfU3S33Jr6gtc6hvacTELNry3LbBWp8TJn8NMXSH4Fw4Ww4kuM9E",
  "key35": "5ssKtss8J1khcg2khgK28RC7ZvkXMsAMSS89RTfoK2BR698UnvTGcRCEDF3GvDMzZP5nrSnnundvQR1xzxiE4wfr",
  "key36": "5ZrBPz3H4mHJGrYVy7CRQCvNfkahJRS889Ku8gux5sjEPoWEqeunHVdv3YppwV5KBg9TtiF44QutJmDN4n8iqdWa",
  "key37": "1ENDyeqPwMQH23YjqNsnF4VUGL8QjfGzoyjiUJhtkZzxLNeyHqWQc372hba4vQqQhEMy19v1dGsQ9AuFHYTL3Ye",
  "key38": "5iZpjikPrkKCtzHMUyv1wcHxfT7k7DEwYUQbkWivbV8oTuH1BQBtiWNhMCnkP4KqeYEUuEVqXrcP5efqTndftnpL",
  "key39": "4kLN9vYhW5ye44JwrSDuDSuo1vyzoeaAk2TEfXDunBwUHgpuXpjEjA73ZqkGEn51P9KVzLkd6T5zzqdMm7VPh3tT"
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
