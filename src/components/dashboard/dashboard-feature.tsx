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
    "4WKBa5m1UqiejAAC193b5gTRBdsgNJ2fCvbfcZzMs9cXmZAwWqYkBZ65oA67dSh9eNW4WUSBdV1ArMGKPSX3Ey8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ejA1UtzFmThNUUWKTrNhm6MtCV2if3AqSA8kN4uVv6NPnaaqgvcBKvkh2cUhLbPcgHF3SkmqnoieyRf9AMFfxju",
  "key1": "2BzTwkfUBUAcX5Qjt8nrFk5yHL8wFBYuP4ynHxG9QGAyJ3SGoy3SL71HB8SUZjiPdkYmZVsfX4NrnPWudEjdTzff",
  "key2": "661MqqyFJ5pH534A9pHXwBmjMxxZzzehS7gn6mt3oJfxk7yncAL7hHdaL3GRzvNAwFVSwa97Any8LXcawo69u346",
  "key3": "4viXXcMkedXJuPro18bb42buczuJRjK7svowHNghz5Eq16YEYXXWYxNsVDT5N1tgEC5iQeA5SpgBrDe1Rc8BgQcV",
  "key4": "33ZkZinQRLUpepwcW97FAKjdzuUr4aSBjeMuHSYFtdDDkWyYwdT635U7BubE9zPYkppxy8artmDyoYfEKkKmtHw5",
  "key5": "3qi2uYRswVmw9FqamP9PwGYtvPBDXceHaEWBERXF3KZrWWEDxk8HUZzcBxSkuv7PSRxTTuY3QQjuGVTjn5XZ7Tyt",
  "key6": "EPas4TxKdsKYG3RvGKx7NXj2kMVUm7Fw7vUKzt6UXaJka4jgtqqzsxnXtWZowpW5ywVLk1hARm8nbtq9n9ZK9HC",
  "key7": "24eDj3rQpPLbXuFmgF9zpiL863zMVKFcAsEiRLTa4VNWkwtzF7H8PUM7BcniDL8RiWUe7mxJaRBGTwYpPDYu4s8A",
  "key8": "31LHkbrDzqGNp8b4zvaECNSCYSR3uLnnoPiRfMJ2KLyJ2KK6s3VCWt5DyWXUUqcTnSbpSP1aEm1P8eoqSavznwRT",
  "key9": "5Yujr1v7BS159ZtashtEiNeQJBxZeN5fvWyS3G7F22Qyut5amu3dWA1bbDnBkZLVKioRKWTViQtiejGkk6rrM6qz",
  "key10": "RDNBuhgu14gpebKNSuuwq2fvKbYqpALEFeVHm4LanBYFyuSPUQ2dDJpj6XAyFtdLnD5FCnqb1EL5Q4Zsx2RqJ2Z",
  "key11": "48sYB8GU9nJzKTHF1jwaf2aPbHkmHG8kGFaw12c3VPo4mU84a8HcASaFFUo9Nn6mjyTXa4q1N1nv9NeUxjUs4eE3",
  "key12": "rb8x54ZvMMjaS86myxq9YLy3SosgAsT5CZTrxEnDzkFB9Qktyjzg9zEq6eST48fxfq9u4aPw3ptYH3nJwguAZwv",
  "key13": "2hA8H4yG1gZG9MRjvjLXsYHURHgCckrBGWdhFtEUPYSwC8pZdw7RmuwSUZq3dN3E2xcqzD5YoU6fAyC2vzALoS3P",
  "key14": "2AAGqqbmAy2Tmntb8HmEi2GXxp89FMA45pgtizkREE4pTq8ERGpiii96Gf3pJ7NBoms8m6W1DfWEdZBtChTCZ1mQ",
  "key15": "dmpAvdW6PTQTqEFfmuFJY7NTCiQDnE4XKVK3wiND3cTNBPQayqL8bYYB6iE9nBXASe6XCSohRPamxdMa4iqHzhj",
  "key16": "4PcSEHCVmYmAXrKeh8Wp6C4eKHgDBBMtZohSEwzuhUyNsD5yRDXDNcA3wjaEES13swfF2c2eyePnFdxMNZWvyxZi",
  "key17": "3zvMCGnHuKoVrjxZNpEdJKsixVt9xH8zTFFBWBLfgqyzsVZpN5oJ4T2nrYNFLN7wzF3qFivKpogT8wvBR2Zj4TTa",
  "key18": "5Z6tLk6Xs3VW1v1zp5GMVPpJFU4iSRYFAyb5hKDQmMoBuo8XinQhk737pBA684gtk4Si9aTTR22Q8dc2KJ6a6oon",
  "key19": "2eYLucaaUFNukERWux7SXvZdhjFeNTkNwMikCdmQD15yRR6jAc17Dw7XU46Wu43Toaebgd4UXzrQBbR2s2c4Akzo",
  "key20": "3zWxkzxbfnvGeExbU1H1c6Xv73W6LLZxBeaassuYKtQz2qgHb1csu83J6Uhx6DSPaUgo97EL4i4NHdxje6m6SVRT",
  "key21": "5dycbiZ2v2fSu8Z6AGWX2G3dZsRtScgiJ962VRJ3NqFG9SKYoENAN5tX7Mor1P6GDvNtVHxU22kPwCBw9gc4Kus",
  "key22": "4NiqaJT4ndjZN4WUP3Tt6k1hnszW6kUMwXECYxkaqvA1e6Mws1JcXrYf8rqKNjNi8VNfrQe38ktwdaDR2wjYGcVw",
  "key23": "5auuG4i4kgEFEVhq8UoaVw11YXD8865yKy5QJMwTdafxYtux4nqfdEvzupeWvZRyuZX8BbqbyyDHR7tgHYu8AyGp",
  "key24": "5ex5gg8tAyxmUiygGoSCLFMBAb3unMTY62kRaBzYJ8fZ8SyJmrxgVneXvGCqcZtWcY2qWrrjT9TmbUWeKcS2xjqn",
  "key25": "3yK9AoRXgiFwuMTx4JjvqGAURshVRuxUTPTnaraLhdwJ3QW9vTXe4tDuJ1n4i4EJkDLW8CUkAL9nE2wcxvvoZ2i3",
  "key26": "oXxGfnxSG5dtDXdCvEkr3zGMwEwZBiWUNk3wyQk12Hd2x5RhYafYz2a5Podv6jBEDQuuskmn92BZcN3woXZpFez",
  "key27": "5dsoD4XeP5RebqHaCcPCTLhRWUSgJcGihv7427tq6AKAvmG2nh6SihacA4cqa7yEfLvFoiZ1VPs8Tdu52peUkSrb",
  "key28": "47r7E1Kqe2VS8oSyZmy9kG4jWewv9x69W5gKJxM9nj3fjEdCFErUDmfCikibZnmxqRKQGWso9FTbcZkKJKaKHdFg",
  "key29": "2zaKuujaGN179KVedgKqjxCn4QW6qFtdyxMfPf46Cpfqq2sE57oPhTeMnBVMDiEQUHCYJAnnFc7m5qLtbkPH24db",
  "key30": "5VrJqvJtFhUwYJZ9hV5X8bXNxobZvWnjBybQFgqGCcpafZV3QMzEK21Ep6ChA3ZcX4gUHGM1mCubq9qEzg26kJQw",
  "key31": "5qUHhyY826dmaTUN5QsuDCkZ6j51okBTiqDpgpjNJBgMkq5K3fUUBdrxVKXpJQkmVS3hqxYQey7Vz6NsDwZTHEeS",
  "key32": "YJgGswmfigLeWZTodYKYTyBpzoj6wCYag9Mducp7JCb8rZ4CgvQd8Rp8Zw2WvxA6p1nhHXF5y2ZnkfosESmzPiR",
  "key33": "4SCaC5bTyq6CntLoD3C3UJFFwNdU6haunv62ZEsVX1pSvejvrx2GwfVg5CYBcfEwqspDxaBZHuAAjTobi4zNC85C",
  "key34": "3sGKs9XGNvALP1cbXiWrNgpzgqXZjZ4x2ZqStvT4YPDCjGcwGHSA6uE1uz4AuchpJ54BZ3s1DkCEcJt5srzQ4NPx",
  "key35": "4xwpBNcp12dCJDi2tkmAZoEZ2uJm1dAPoLW5vL5p8MhYidNFiMPWHJNg2Dz1uEwMAX32RnRjwpgxWrDZERqtGkGR",
  "key36": "5fzfXBmrd61KkadDamygLBr3gNfpfLpf8BoiJNKd9cfmWcapLqudL7H8ibZBLRiyYmqngiDV1Npo5pcSpjE9kVV1",
  "key37": "4mymnacjNv6VX1BskhhtdpeRVsTkug1xg95zFAjBtR74mvRCoSs9DHQJzBfakHhsCgykCyLxUrLmvHZRk2458Y4d",
  "key38": "4aMctQqhjK7kioVugoBKy1fNgtwSSuKVKLMsHuN2cp8HxchHubYPJoGvFF3T3oBdVnc77g5U3Aa3p6Xt73XaAtyu",
  "key39": "cH42BoPzqvzZP6rJBDDD139doUXdUqo2PZVubMmJPb9kAxaHsEAHx6g3n7ecJt3uH7RcikTrznCHKsHdEZDrRHu",
  "key40": "3ndNitShJCgYMs6aCyZRsrqWuRBvNCyvG5Ma3nQVLgLwveprjj59i7k8qximnYmhBnV5T9ud5PejU6N3B8HCZi4L",
  "key41": "55L9AM2zX68LJCsK5kJbGscmG2qnaLQDpZdk9X8k3Jj65i38cShpnYZeZeqKheF2V3yDD7i7KJaV7G78jhiXAAP2"
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
