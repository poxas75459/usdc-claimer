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
    "2t6xzpS85D5eDCdqyLJScmNh3RgpuSB5yJHNyC1yPMNozkgjsvJssfUF5udAPmb7WyBYeoMbNbmsm5ynFLNdRtoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GwUc1wSNSCyUWFMPgBz4YwmE3EB1d6gAHBPQLhH2vNpY3zzB6JJDS2GB3MZ8rR2wAHjdJS7SykUxeRLDqtzN1DF",
  "key1": "4XMkQ3Uphm6sWn7fSDJiPmrLc62yZug2Ee3JodhZ7tBve7Kvr64J6zvcQTNdeFQWto9okHht1iFLVRRt5vLZxkiP",
  "key2": "3t7T9mNe4ozqtHEM5VMTbG5uF7zLaLX6Jhb8VtonSd5fENw9kLWR1BTjyfWxij6VMjkHZRrfu1oS7S6UWeT6kMEc",
  "key3": "2q279dzqTAHA9Rh3vprqQhfUPQYbyNb3WPzwPeQWzzjcmQnU7fV4EvdQpwHCZQAv8xWGxXLVJ1xY7RQAoefPgqWL",
  "key4": "3oxc9NBuwvnFXQcvHA8QAhFj46BmzMDMTHC4pFJnwatgAsMDrqUodEdmsbRvSjwWEVyDFzX2k7VqLLmCmEQjPUAH",
  "key5": "3aLBdy1wqCpvpbF3XbhXoP5UgXBXHLRaY6YxMyWvnB1agi1YLCVcUtXQeRKa7z43H5uE8MCk1vipHyr3T5CnQJNL",
  "key6": "V2jkqtXZWLBqWPJJh5TtEWHTqjQPqZeLQ7SNoF21AkkQyLeHiAumC8VUyWFsLYXP7sU3HChLoMCMD2gmesnRBEV",
  "key7": "2svT7MCWN1yC7jKjSyDXaiMfHazj4LZ9qE6pUn8d5wXzEwNPSV7PgAHktY35grXXBJRvP8XWEkmkydvau5vSDqwU",
  "key8": "4Zyuynzv91mWXFHP8gvdtXMq6w5RVose4XRebzmgZSF54bXku8QJgR3gknXS8rtvKgdTDfthZweEDRVJbkerPxiR",
  "key9": "5iSyfNzN1M4UPSxe78Atkficvz8aVYqQACnU6UgRUTCqy1gdeWGUKE38rhrAUYdHvhQniJhYyQBZHxcYX6uN48xe",
  "key10": "H9fLucHhe9aUVNjAPXGM26ruFgsfLtwcs674Qa1en6bcjaSKFiDJdz6LMhvA3smjBrPZpEcVTT3c9iK2m7QDYAE",
  "key11": "5ut33zzMDQXuiF5FimZsPMANR3maTWvaiYJPLX7jw239gN3ZfTq1VJ6z8Fb9AHf6aobFsDai6AEkRDixU1S7CEqP",
  "key12": "jEoYjQ1K2RuMSQJXTXjiXtkXVRwaRetTjoY5E2zVGDdBzBu1A76bLiHJUdKi56e77d3HaYdmXSG5KmZuoTq5B8U",
  "key13": "3KtjxJPNiUqgoBnnbe4aQDQfokvBi1U1H4hn48vnwrtbvui9pGthdr9o6oRXYsQqEJ749DncdL95VrtDsUfwWns9",
  "key14": "5mazBeXT2Po1jaSPEt7Gucg7whz431KVQ6oRNmArg2fkcNrj5974Dzf4zb5AiMtiGu7J94YRXspEeix85oSRmfLD",
  "key15": "5ggtxD3P28onJdTKkGJ725TxVy9CLwA3UUtkKtMGAbPF6EBSe6RGZ8JRyy1cFFHLDrqAv9z9of2tTGw7zBFksis5",
  "key16": "3i6s3gp4foXp8zxCW6pd43xrMvtLEawKubxE3d7sWPXfh9SpJsHisEWnG3NqvJv2MZR8W64PydcCxUCCFiekvuTQ",
  "key17": "59qUDdVFYGK7yKkPEzXwwrqBx5rPWDEsbAipqUMrYeirEGejutz9MDrpznxD59fzjUwuSQCQVKhDBF33vsA9UxnW",
  "key18": "2Rka7zZrF69Nbb46bwUJigbXqBzQ34kNf9rBD7up6gcDyLBRuaDn8cTQS4h29WJY3izq8bjFXJ4hCjTHHr5Rngex",
  "key19": "NZivyWkvvWXWr1qsnHbrHCDGc353sjgqEG4bufEC2GrnZbSKrFFJrNHo9tRMHRg7WA6biP6FRVptTNnzHRw7kEv",
  "key20": "2F8TZBq3zND67KvaN5eRg41zAm4Y3Kqt5xvS4ZEsMbDASDSSEGDxkJSVmCPqfU6PsGVTpEBoGuGuSEcGBHjfEx9o",
  "key21": "pxiJURXK8MqE4Fq53AgwqyPXLM73atteaZ7ZFx4BHC7NAv8EauvqjtSyXqhksPX8E1nyUsqNgV9Wy32Z7zYyd3m",
  "key22": "2iBqomhAuvS5swJvxEriTUXumeiNZ4dPhVeaM8BufmrTjXuku48KUCyuSoA4U4atY41Gigrq3wppkz6Tsu2Tg4Xm",
  "key23": "4Ds4DXojPVgVhJt3UM7omas4cDd6fQo3cseuEuGzbEeYNT3mZM45Vty3VmVU9r2nGCbaWKv7dt6FecX5F53JtcCW",
  "key24": "2ujm9c41uqQRAH6MvSEt4Ph6K5d4gWDWEVQ1r6MUXkEBQUoAfhgA4y6PevJTXCpasbzkxDmS2rwRWesGijyiLAEf",
  "key25": "5EruV7gMXrMiP2kpyzPZxB35sV1jjL4DBXhZQcQL5VsJ3aZWGEuPmBf9BHcWEBaspeSKFBHKtT33N3EPRx4TKzhB",
  "key26": "3gstDHzhRSodzdg9Uhoh8H6kE8B2KqVE79y8NaCKu5LU9NgkCTn8Q4RXTignAQVuYo3snEW44noSyb6LTPTQPNUh",
  "key27": "4AAQAwmF1VpHiEAhqH7vqu5PEceFWzHveHqmyK3RkZSZdLrBEZSDR7swqDXUiJWwcq1vx4agtHeVbSB1hUegfgcN",
  "key28": "XS7eqk7ww7GUGn8iSAZS4eT5M9ftte9FHKxu4puNCDMLcnknUfU37Fxhi4pQ4uhawQojUfnWdQNxjP6JxfwxVYz",
  "key29": "4WtD4GeUzvRQfCuV2q9Eif6NeAguWLXrx8pxp4GTEdG9Wf7euG1wX5EcDoQPsbqsTZPNWCs2rhMxpUCLhCKnjCJU",
  "key30": "4wBt6tmgBqQCGLpUmq2WegxyX5KseJuUr6xXeJxFmeskQUGSi5vbfnPY2ktGNhFX8FtpB3ZpC45dkbUDLxuGXsBo",
  "key31": "2if27VRYsGcriPkmDkoaVE4KnKx5oN9sFUEmXwVeFtbKaRbRd5cauoQ6NVUgsKKbaXZLbGUJceLU2GcnYDfjMwmZ",
  "key32": "3nbMoLaRqtiCoXEngc1rdmyjvnG2Jc2Vw8ALJop7woUz8qrQkaGmjtoieu8iziPWAzmeggXGYjFno1jCwZadzdeS",
  "key33": "4o51CDZZPEjNbcN2xJEaQ4qnairSSn9yqntzX4D2myqcKZ5zWw9LmYMfCHaMAjvoUyZHCu66F2a1ts2hZVNUDvBV",
  "key34": "2n1msrP8GbGWtsLDTu9AJVgss8Er8KCTtWRWV9ZqT66uVtPJrwFCz1PFjkg7cJJnLwKF7yXvSypC7GwuU1CckCiy",
  "key35": "31vbbxhEp8Yob72SP1B2UCKohdWxg5xcmAd5xxBAApXhztDrn5sTXN7QxADNRzYwSQhwFRXaYVEKjBTgE713Qopd",
  "key36": "3dhemYKowaNvxeF7WbzbB3qnQHQoCnsWNdZZ1BA79wcBmTPzEAXLRT24AJBrXVrk1h64rxwwacKuoJ4s319XRdj",
  "key37": "22RSaNtzbmQHUpjaBefwE657PBtP7LVvFq3dyXvh8XC8ns8ypepAfVjkxoRfJZuv1kSY7fjo8ja4a2KGYjGWDoeX",
  "key38": "2DLCF1zWWyK1x2Xpxd5YtZmrmY4GJB4dZS8FkuCXuXck47eg2uepoLLntJe2Pctyy1qkuax33nm4rr3yAeXPRSEK",
  "key39": "5dosdyrSw4GdUWbcMXqMGCDYcuenoUSHJ6A4wk1XSRXZocTYF2Z9JxccpLWGCgwfznfxZZhc8HNMNGs4CxTfgr4n",
  "key40": "5MhEETmLEhFFN5gLCAS7uXCy1NNLsHfLPrYWPbpEfDrBEzhbPdwtfeYR3uVzRZDjaww3C2vM5J9Gtnh4qmXwyJhm",
  "key41": "55zcK24iKSKokjsUsDykfjm8pfTXqupTcEbzCoTqoarg1sV6kMUXayEkKxetJRhaonxEktPVz1EQXjvUdt7Cd6DW",
  "key42": "45CZZ8Uaq5FdUGYGdTzShEhe3KP8FjYFzr3GzTZyVyx99GPBRakNdJAyj2oRxjKLwUSJupo8517eNDnwNJJXYHVo",
  "key43": "3zSdMvvrCTBQmcxUTMezMpnEoz2BtorbCgj9TeDwXsYMzTkhhuPepEsTbKKH5LjV7zBWGHj5tbmrhwAyJfRKeQY2"
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
