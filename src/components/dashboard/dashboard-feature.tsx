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
    "41gQ5HJvEbgifgNmfqUdYyH29LCpjCMv3aCbQoc6QuZhfihnC8jCRgiUeRnDgGK4WjwuaUTVGi4rxHnd21TjUM4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FwUX3c3B28Sm4GWu53R8TCLuWiULG7gW5c97c8pD3K3y5eg81PtyvrzskR8hQPtxV3iSSZQZScKZzqpw5D7omoY",
  "key1": "41qzaQyYeasmzjbvYPaXzycjS4yR2djHbpHLC8empq4G666DougSXeF49gHPaFA1AyjswhbChPSQT61MTf6Tn6Bz",
  "key2": "5A3m4LkqVcP5AfC3HJUB8Gy4d9itC7z3osT2qUaHMDyQdz49V4EH1JqcpcPaSPCoZRSsUCqmLp1jvYHDppydNeEh",
  "key3": "4UvoWeoTHDXNDKKZ1bsNqis3dHHXfULCbBoHPvzYy8PXwj5oQv4Xe4uWeNoMtRsoFaDMfEyKpH9uoABbbtEFo99m",
  "key4": "5gNxJ84dxvmsZ2z4SG89E4kaX7PBsyz2KbwEdheUKncAec6a4SD4ycEX9Q3Ce2bHyNrLHGfP9iKeuTChJZvjr3Hw",
  "key5": "NGQ4QvuJBv2bQoheVgHJ4nHQBGHnSp9SN9hDVKroGFhJTUDRK4VNrJy15qbwgh8jfPmFGQ2Pt65vQCfYEvUfeb7",
  "key6": "5jR5iuuxpsPvH4Lkfj2hVG2JaWGeYG19oUaFsZd8g6CE8xqE7gfDvy71Nqnur2yV6CtNzxoVn14V2c4vKEhvcfmJ",
  "key7": "4oJdSdZKyuW7tdRQcjixJKGPfLeYRSBQAv4hC4oz1ifeyY9A4Dj945yLhi1bAiw6dC79Jr5T5sDyxwiksJrwxAPo",
  "key8": "3xm48oHawukpHhegA3hiCe4BPbJwHXsXCZr8BVmd42SraN3HpzLKRBR2B1YYPj7WbyRY9KZTBjN7WRgY21RFRBPM",
  "key9": "fuXoiMfdexa7UbS7N3pNKSkaR1bQHhd9At9P9Z14USE26ccBLUQCumapB1YS3rUzXiQpRgdxJebrQvjr96j63ET",
  "key10": "5xkYDSwvkhBA2gkyJAw6ZDwpsqktvWKLiEzg9e52uTz1nStBgu6ghem8Tk3wGH4NETC2bw2UWtbZ8mdMZ3nfJ9yY",
  "key11": "5FRu4THqf3GAikzDFYxnzU367C8zMJ6DraXA8hFPZWpW7U1YK11tW4AtW74KhxbLqCc6jvM7CxZyfBDcT4UnqRFH",
  "key12": "2Cdf3ZPEKptkjy8KgxrgxGB2YD3ENNY8r77Xx1RoHx7gZoSRpc16Yq2WZzdvjhoeDC6WGhkBgYSSiRqn7HodStm1",
  "key13": "3q2JsuRPxh3Ryr2kgbBtB3PuYnWiR8o1coMTxhyqVxSeRB2JeLdhz5LyRXgNCLNRxdgxhTJEuCWd2LuPzA47pVvK",
  "key14": "PU3Q9gwnNwUdWJz4V3WLqFj7dgHecVqvwLVejSBXJDDD5ErHR963jAkXuUqzZHyB8hUEHEoVRHYSxEbb5M1PndJ",
  "key15": "3VuEwauRtogWfXKBvYrT3utLzbt9ta8mqY4zYdj8AnrhSH9guPR6bHprJtzH1M1gGCwDi4ShdZoLWLJgff3u5ANu",
  "key16": "31ms2Ehmf9UrrPGpw9toT5u37U2uLf8Y9uNf3JM8qD52jAQzHJ1kQdMTuMNF6d61v1DLn6r7Bf8rrL8BSeAQ6Qig",
  "key17": "5SVH7appuvhqMXgHpvi7HStfnqXBvUNm7oYC9ZH1VoBxFzt9Jac9rgdA8vSSPkqXdSMK9z4mMEpibQNp3nn7yNCx",
  "key18": "51noU47QVjPQtYi2yGSv5KomMfPBvHuRGYPVCZGsyQsjHq45zwnHS4TUWq4t35VKKdoF17CELi7sQo2wLReKKVh9",
  "key19": "5CjNEgE6MjKykCdyZKckEgwTvTLGW7E4Z7mrDCGsRA33g7xdBXhbdiqKdHQzwT3KHnn8qfZV1nBzcbh6op87Dg2o",
  "key20": "3eASxLt7K8MSjsoPS3Fv2LY2fm6w2fqz3Q3a2WssSGJrZBboY8Pf6fFJyL7jKxQ4hV4BfKHnws4ZiFKzaVQtTQsu",
  "key21": "GKroRGqgQmCLZwPzZEY7XZJNs64sHVJUFnwcD3MpE9SSz9xZUHptD344bTLsg7d8pt469SjityqnE8AMFQ7SByi",
  "key22": "FjESLroMMb48kUouXJngL4wyFxZNFdXF2mWK5xrawTa7qvyryNW42VaobKJteM8udsqpGKdM4EB999EakthT4KZ",
  "key23": "3hyvT18yJKeaXREtHpo71rSnaTif5nv8U255nRApe8bbzqBdHbhyrhp3oztFTRtGktL8jhbKddg8ZWs3z8RnVBZ3",
  "key24": "bZWrdc4JhTfrVpcUn6WzuJ2ABhqvvnMi5nEUWt9zCuiLcMTCA1bBphPsVGZJskcBs4vTngyau5PqenAMLuGak7N",
  "key25": "3st23vpYNteND4UEtLq3oYSB5WLxUnXkS1F176pHTkadxCzUsZudXnXQ4MFFTXUmrY5RZqZnNNF86k4TemXFPnKW",
  "key26": "tjZs774UVT6Bu8LM3VK1a5JrRr5HxA2nx66cLUTUXDApSPDuYf3c6EEdyQLwk2qiCKUsRSmtEiPLufYEmghDy6f",
  "key27": "LXu2hdf5x3vEGPNLbB1e9T6CtHqKAvuzoqbR2axbokQV2nRL2G1bqDo9Rezo96PfDjhBPqHzu683nCN59kC1vYo",
  "key28": "2RbyqXCyJBbNJJdCuC5GrPrFy7UFCunPXZg4uKu5efDFcxZ2p7LcQq7GbUWKwdB6DjNm7SpcUy1M2vhGdSCZnuBY",
  "key29": "275W3CEdC5PK7gCJ7nK8NoBYVdbeVktst4XDs1WAqurBZhJprJvtxnGU2THB1FzcKoMgxRKhk9bYtNpVUQZzn6oz",
  "key30": "3Roj6W4hBVYXWDmhHPdYEmvX9LLQb88Hd31xhFPPxQsMfuPtYf9yBRA7Q8c48dtw4T8AcMt4knBWyJr2tRiSGhKi",
  "key31": "67MXGyLX452pXqDnRenRbaUyzJ5L9Zn75GRk7aVR2By97N91Mv98V9wcF9s3hdzAKFHTz9TYn2qdSBmaSjGmz2KQ",
  "key32": "4qugppHU5YYAatkFrReY4uyBdtQ9oB6QJABtDpZjkymkHg6QRJRFoGT9ka1xmJaE2vxXRuyPjxYbfvSuRFqLFUm8",
  "key33": "4JazTS45FZ3ujaGcvtYrTnDKE8GAhvQiyD1sqHjjNdfJvHPUBu9R9FUVd7R26bG87Qqus8LGn3AwYiK4nBw7DKyP",
  "key34": "5yGC8rWsoofgjVcdpBNZJ4SNwwmBhpsR36S5s5WT9uayfJVvPnQPjTadzt5UvvGNwSLjRgmSddJ9JL1kKhkCzJxU",
  "key35": "5FqFdQ9QG6KT2ukVaAFE2SdDff7boSHCJ2P9fqfFhoxpFqVzHR6PwdbBgrhEKvFSEgLqYdbSYMDi78tKodBad5Ee",
  "key36": "5vjG1kw6PGvSY58aGs8Ve8Vg5jEzrsqsQGw3BPh8iZ79RNcxWXM5HsHQjufro6kJ3Pa83LVBWEGRqtNXZRtS2v4K",
  "key37": "3jKdds1JDn4YSZJpdRD3E5xZkimktHTyyMHq3aD5jSbw9x49p4iLj74r9BjBErAnoDNHikENtmQwcP2ZJkov4SAm",
  "key38": "3JCD8vGUVRyBhCy362LAgGZVfvHN6YR38vtu577VsFAp4C8psFcDMNG7NpMhfxdAst7z5AvJVGSjsjbdQpTp8PwN",
  "key39": "2b3G3fkEF8gFoBk9txgJvDMuXjzGaWfYAErCvEXh1xuFEkAkZajE4cg43c4otNkq5w6CoApXkSPU3izsqboxntEX",
  "key40": "57dZLyZ66NmCizXe1TikFRNsPdYZKDcfQX5uW21pAJfFjC5ZFsT3A1TZg4m3cfqPFRAgVuwd155qAu19fmuYcx6r",
  "key41": "5ttLTTKi5AtBKoxc3VYqAJ7vT5VkW7kYhrrVFnknNwYsUqNK3Vq86iHhkvQCxaiyruGWDSRGAaqAyMQnknzgubGi",
  "key42": "3sHsics4AZ21poUKYYAaoRouqxtKBGxpWNUoCX16LkSZsoqiA7BSyt2qhw1BrqeNbbWjv7wikQorzebZbfETSVSW",
  "key43": "32TCJFLGDPv44NBFFrQ9TGthFRU75kJqJQPGLySsxr4riYZGQFHAzJ9C8uHGR2q6PZhogQdk9YE11ReWNr8rVWkx",
  "key44": "5gcncRRDCXkimekzpUxUdVVLenQWUZVCDWXcvQp4SS3i82wiiRojCKkjPdheUHC1MJvLixGfAKS3FAHc1kjhgMuz",
  "key45": "5kGvSUpzx3rFAu4E5voyPpQDgRVBt7Bc1RvtoFQ4wZss1NuRdC9b7ycv2dneZoQ8AyCncPR97DXviArSF7KnH7Fn",
  "key46": "41cJYhrPeEcFWrr4Duz4mACT53cdB3uryDj4PRmfGGSeQXvXVgwUjYC2zPYDxyunkR5sctCFScwVgMk4EJYdhJRj",
  "key47": "16ZpzfG6VQYX4hEZvSydJMR3UWgeG2vS87afuHKghs9Xo2oT9oCgieEcrNbZTioeJ7pqHuRVk1jh9zfKWH6CwSf"
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
