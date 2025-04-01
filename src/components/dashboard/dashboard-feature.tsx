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
    "3oRQtVSr3QK1ZqDVfrwHnrZvJJtsszQPMBMGhEP2sLF2QyRHiLYxtUHfyHciCEMQgLMcy3npjrwc3r9983znL7mJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QpPADfZdEMCJ2JXqhNBw26RBBDqhCNw9j2MLzsGnnYNqqaDkESpx62nrWvCZUwRoGniw8Wy7gxECZnFdVakrLH4",
  "key1": "3XRmhjHoyD2E72twt5mU7oUN2KQFzaKnDsYTE8Tw2Xv7sQHpgUg1UpYzSLm5tSc7UqZHiHomUxu8oNitK1Hivvtd",
  "key2": "4g91gnb7aKobbsZxDnYv61K2ipjz7iPM4ercb2jAi9nRSUXpJA6LTz7ywwNXZkAHoKThL9r8SqBhEM7XfWbKMky1",
  "key3": "4DfDWkuw8Gy3MtPCbTAHnhfm4iHBGaXtx2HEjzaCbstJKAci6yE6AAt9snddVXatDpMDw2MZEtUkG71jps1sNy6b",
  "key4": "4kRggsPexmPYYbTXVMrqEuhSMr5MAQVnSW3GUg3EzAaao3UEiNW9kPiGPJxdRJdqTBp1MstWKqeunpyGhr9Bhygz",
  "key5": "3cVt2GUZ3doQpPKhMrS8rE5RL26hTqif86k2PPkyU9htR9gLhkwx94oaJdVRBtLZd19Na1GTPhZDuBzSBNjMPkQx",
  "key6": "KeEbiJuK9xpRBAi6XynuaUt4ceVfc4rnhFdRfxRh5uRGUsmcvmnfhDYYRiz2wtPUDvQa386HhdriRHDzWtXXypf",
  "key7": "65VsTzizy6bzyX7WgPnQd7JxDkSa3EiMJ82PGWnXXkMjdzjfA2HGJMysnDMskJ7fnQ2Eax6HA1PcKWpxfMdYjc44",
  "key8": "2onjjkFFEhtJzo2KBoNMBBaGTApxZVm9TkDC6c9aD2uZAjC76G5D6BKduwAr2eRewvf5jFhLhWKTz2zidkgnf1iP",
  "key9": "2oDNhkaHwKJGmfiyLdWPmY4or8aiWK9jkiyjkFzmPg5TiAFrtgpRYVCZKd69iQNHms8ywzcKvcAaBp1dW8n87zJ1",
  "key10": "3akSeEoRxPdSSjC3jWccRuNZMCyfdz9j67o4CQpj4K43mNPxw8X1gNm9n2cxDPWVkpdeo83moFJz2ytoaMGsEYVR",
  "key11": "4NCaqpACwb8dbCbSBQFUqAMSM5hGvnYj2eRznK9ppiWtF5PTJ8Rhg5ZyV8MEpcq85D83uxw5bLrvZAuAHRVJqgyX",
  "key12": "2Uas6RCMTSXNFsaZr9TRHxy1WsgtrV2pJfEFBH9FbtqJgbhnCyxvcxuCAnKCbfqx4F1NApAgCM2QG43hxBryrC5m",
  "key13": "p2LMaiefFw3RerpouVHi4xofbWFUfNg8pHsQ6GdN76unXA163BZdpKMqtvSHfQC4yJN6V1Kc6dsVjYChuLWPf8L",
  "key14": "3F7NBXEadoGXrCmEBHXm2M6wc6idrs7xMuoPTUKoWwqDmcYWyCG9Djx9oAE2esNa9DaNvvNa6URBsN6JJdy3mCGK",
  "key15": "YtnRk8mizkRaSgzsuwDxunxi2c6w8viMfVkibG8Jsbibfh9z2RRHcDC6n7N3vHWz1impnjBryMbrL39ByFnfmJm",
  "key16": "3aUCx7W8Ksmr2dn23sZo8kKFnskeRwLAtfFwyjvnW6KaeXyDR5XL2PTsFh39jRPma9o3EuXq99zUKLAUipje2RcQ",
  "key17": "3eTDvrGHRgZ8iGWDapfyARoNPDz7T9W3dmiAXrHxR3RgRM2mhve93RQomdazDq6GVfns8gPPtJRwLH2aBmcdtkTL",
  "key18": "2scdSpDztsQVFNJPks7UrfzQB277veKE8Bo7X2d9CBS8Y26DQLMibUtHwAuesn5RxVrUH6hJZtAtpnWy62cRKqhX",
  "key19": "3hGDncXDj9HVEgnVvLPK5tytb5f2E3sU8czeQHK3ru5EixxZuP7W39CCFUrzfdh68upPUojT9VsA4MyuuGvhNbZk",
  "key20": "3k63DdTft8SMU6v6TGZskbUBK2S1XNZJ6kWJFEADmrRUdKfntCQyUgWQRpZuHyu9szffozWKhw4pQs1ZmWN65LKz",
  "key21": "2aizCJJGcXsRwP1VsK4PgHsH1wJcqgABkNNwRSVkjKKEG9vaCwsDQ9mUN97aRP7Bozq5hM4HynUX2nuJ31S5tkYW",
  "key22": "2wE88sAxxf22pnkM1yYNNR1TaYDzaSyu8gTCMp3YZju3VbA1M1UPxTyvQMDL5XVSskA7AMEvymaYzrpK6XGTKjRG",
  "key23": "4LBdFdYqSAxYqbfrv4YcUkkVKKPCLGMbw7tHXpWUX1MbjHDUvf6XcygZ3hpGAT8gE3jgLJ9Nq6q9WojuoAQCRHaj",
  "key24": "45yLSAb1fb965Pcd4QCsTSKQVWFwszfj63cDsQm3MptoqvGVbuMHduSTcCnbC4hMPBK5pp9frcNQuFKP35Pzgqvm",
  "key25": "2nvQ3wcXTCh9wyJyg5GdvqkAGvRJHdaoAKL1vsG6aADVKBTaRZUubqdtWFcFCDudVPtByPNE527ZdzSpVNfmupDE",
  "key26": "51UfhrPzQh1jn6FSbgo52vkHqC2EJkmpbc2cJxoURfgMSCVRMHi9P6WWENaa2cuQecm1ZYZrv3cyUy7C6LGJgE7J",
  "key27": "5YRSYfWAg2A1r55vGGzuJk3URdQ3N1u8nnJJCBfPTg9YXqZa6Z8z7PsRheQozkLSc3fFn7UBNFD87tHLAByQ8aa2",
  "key28": "F96dkGD5YiqwsuCnzfM7jWRTkn2SFcnhRRkGWNBtu2jczqMWVRVmXhZE8Z8S7Erf2jWnCF6qWf6Z1ce2Pc15Zrh",
  "key29": "4XZZ5fiv3trNY6n5dTMfMGYjD8kCEgQqYbqw7fpgaS8VUb7tbAM7qkD7B3X87Dqg1jk5KNgzKB7kMLRZMMkcHrJL",
  "key30": "5NG7x28LnyPbUKjW5dudTcayHeDhhmNqH9rfF1zhRqsVG1t2EX6zUpdnkx8iskmFqLHR6feFF3djrgr7LDxdBKaF",
  "key31": "3L6oncthQkNCLnco8rTMjTiVb1doWzQKxDnepFp8hDpPEeKsPgbRWsK2h1uffHzxTuuhx1zsvVBw8m5yb6ZcUc9g",
  "key32": "4ZCykbNaL7Kg216ZyCASE28zkdLkLCsGrsAZ12Dr6MDx6EDbpdZ8xrXwSJLup8DovPq5Cb2Z9eAuVJpKSCtji6oa",
  "key33": "3o4LcS7oyR2Za1EYbq2svUomcVXov4BkVhXbJx9RavyELoUM8iptW4rN6XUdxHDXAMZ4RnTChAuYBR6VAarkRtNC",
  "key34": "2dvtNuWZnyXjW8gekbxpLpx7Mnvshtprga14d99ro1gutFFoFfBgv7zX23Smh5qEt9eWjom1JD3tcTo34prpJmQf",
  "key35": "3RiTvcrh5FA9e5LCUE6PQ961K1Lx57SKnkyfCGrZD9B69Kd6sNnzWADBLCbns9oJuzWEXgcqeqcmbUwLwtp2ncWg",
  "key36": "2nzUWPvwakQtZwD26aJK2YJbgo6P43odsrRBDbsoqwYyFng94aiZTgkG3FH8d46gtQ52RmzmFtfQmNChPQExCpT2",
  "key37": "6X6ubYzNrrBE9GgScsqi79PksB4sSpxsmeU9Fy3WTzWzF6Zi1Zsjcf48f3LiNwxQVoWrHU9ifFwGiFRBborK5q5",
  "key38": "2di5xbgQLCA9nrokJuPr6aYNaz4GMw2Gv7h6m9xJnY48V7BYCLpb7CyC29LuPGEaYVNjeNSpveYSvcMkWhYgSd9o",
  "key39": "5uDJ9K5J1uAP43kczjSDmunwPCF8sH9DiX5SEZAqrac2ZjspdYHTdCZTWgaWDbmMHKQkL49Y71bXu45T1DHr38Rs",
  "key40": "3wg53osVELCGQATtxnDnhfE9hPFYqCuNpP7X1an58uqRJkq22bZ2Q8FeFHqgAqzzKW9njRf4ehDKJE3bqMioFJV9",
  "key41": "37K5Eyr8DxoDW3c7xyY6mp9ehvh2fPTSWkhJt642LnCGpqs6dsM9uFyftgEAWFKSBLx7Ghs8WP8BLqXcMXaxR8fg"
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
