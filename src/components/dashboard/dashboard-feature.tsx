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
    "4xrx1xTHcEueybneMAxncsGK2Zp5swEBXwKbPMMNnCCg8ctKcE62v6MDLQqp82WMGqgQhMYoZuuHLYRGjobVgZAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bn6gwGVQxHpkrPH8UeNhi5U2PYo97BgoY5bZivK5CbYnAq2D53R8eSPwsVmAapEicxfQTBFZkNYp6pPjWhgRnMR",
  "key1": "LCyKBGCZqMoVuDS7s3otYgnkY17fypSKQkWhqijKfb4h8ecvxudLcPChRKdtyKnCbYYwYS8qyiidNuKZu6TsbEx",
  "key2": "5JXGY5hfuDUt1eEtpg2JMUrDJ9TVkXRdk1xQsnKxDZQnLBU5x1Cyzgztnaw4wfchZgSzGnYpTruJ4jgd6C9byHoo",
  "key3": "3aiq2ocMYV2qFmQvcsKiv9oE5dGiDGGjtmX2BmvFFcQAQufMm3DDRknLx12FFgZCig6vQfGWo8BBEwp99qrNtQHm",
  "key4": "5o43HA8gECTDjtBEfjtfi12sc4NiuvBwKTbELTWZAvQzVeYULXDaBt9aoFgNmsMhTrBzDGWknMyzHjXtXG36EJCP",
  "key5": "5t7NbHpJeWZ7JfCW2VqAXfkkZSfK7cKuE2RZ8rdcBkAHTrnAWpC65CW5FzfSPsDA7pi7YnPLxmMXQTj7Qrdipwhi",
  "key6": "4iVDoFsV7gHGAaz8Fh69Kook53PTyvFgGJNk8Mr6J2SnfjGQDmGZADk3D37MZbvFwzphwUtmyeHkiM7mU4iUJdzw",
  "key7": "8ygu35SNRnXaFq8CasibNP9PEGM2BkMVe6YsvJ25kmMuqG6xevhi5b1tPwaQLTfy1L11PdbofPkPQHHvaGMLxF2",
  "key8": "3G2BLexUd2mpmT9s72X3fFKMhCDz1Ff3fpb7E4J1MMrqVJZK1ETfVZPsWMRYqVD3vWmTFsoSGzqdkh6DXmB7unj7",
  "key9": "3izHXXG8RkK5vA5c2tSHtTV8pyJH3LBt3oNJ6uZMqE3qTUVCh7nmarjRscZDRou6G4UKhfjrpADF76JroKEQyU67",
  "key10": "CofJ5mzoJGHvpumCppRjYbwGmY3xcNwfskSLqpHZMx5U3o5YxShbSBZ3Q6rNJeZEmAgEPFDWj3g7oWbQEZvP52r",
  "key11": "4WkVYDwzWLnMJ6fLFToSB2G1ndg8KtazKrdMhLqoiWVR4ZinBWvrsFuYj2NiKkdBCHxgwUicLSwNPkjQKohKSKBf",
  "key12": "3X3SrVovwhBfcfFhbLvjAEvRA6im3uAXk1chUPVYXGVDZZGSFhj1vciU64n5w7HBuF2jAxoRMTgGgUjHWdMCTcXk",
  "key13": "4WnSu6quqGJiic2cJuQWvH975WgJCNnGneiqPsYPiGWGbvRJomRDyu2EXj8XK419E1UyD1wzqttqXFmBpBw4TqXP",
  "key14": "CwNyEUWamP79UuBaqb53FDZf8xmwqdbxekTKiZcuUqAyNDeY4t2Arvi1neJGxq3TECdmF64tUHwQE1BMSZDqPxx",
  "key15": "3f9E8xys7MMfiRjKe7hx5mG9mb4P6WxoyFE8ZBGwvztfrpTMGPn1xKcGNCDPPqx6pZfpTwaFf48TNwZL1SjWyGCu",
  "key16": "39tdFpzELd25TYZBxpD3TSLB963evy2n3o3bkBbqcoLTZXBQpRu2HZm3DDK4utwncTDKQ9mSZuF3vHNrncMSTs9R",
  "key17": "2UGkN1SjCw5Bwe68NdhEQ5C5umptNLWkv6iXbe3XZVDMS4wVQyKvAQ6Y2JiLYq6ALu6oigd2r62YcnZZkk77YLPC",
  "key18": "2raBBeumEw8Bykd6f6nb16EUGufDqvuwoMLxAqNFxinChiFMaLsxUBW5X7FnEUJ4QB14ZYnumgzYT16SLyeZ2Mbv",
  "key19": "2vqyaiEeWn8JL8M3stNCZ5fYQeUzLoxaUtxRAzLhTbSiVAct9hYRdiSDfMeyT92SNWz3M6fXaPHBoxrMTk3Hy1LA",
  "key20": "43r9NuCcwFMHXH32UgGe4itK5nzoZunejttghWxpQbYEtT9R6K8TRq7cnXS597zSUMUcWdjUFgftghWX2vLdUv5A",
  "key21": "47tT97off3KFNUsP3GHuM3kg4dKmguTFY5GAsCn5k9hSEF2Wc9vxBgvNeQBQeA2QmAPUfzxP4ypVv6MLRhTuohZE",
  "key22": "2uaGkAAYQVBKGnuhq2PLXn98A24gznSCtHTvrCkZmnGjf7gbutk94bkWUjLdAzCJ5bqFjv7VDXLHGQr1z4f3hYQg",
  "key23": "5oHDTw7uQG6JJr8AVLWEbLxiYgnokt7DMTEcLZPhrWa1EGKtBads2vHhZgrNVtdp42Cp88yGAf1wJ342YasBhx2w",
  "key24": "pCirFEDa2ZU32arbnFjfkgWp2VwBd7C5npeKZt1Aivp6UmHffTwmzPSmhQvhPGbMztAuuDwnFcQbVcg6MMUNHFB",
  "key25": "4CxuthrTa5KnbpwB6kXHUchkosq7skzHuWqCyuDoRqAhXQbBBotfL43EsxT4VcFaUVETpSoQp4SZCFU8f64Yk92b",
  "key26": "4MqNYPhJ2hfRfoAFc9xtdPm1xC9TsKCJrjXZh8eY4EevqjrmJbKERUJceNgMem1YeLtjQ4LHD1a7Z1WAPC12Gezt",
  "key27": "3KGsh841786Wxx84HPuJVQD3S72zFcEu7yHg7YT1Mojt3cC35jjKTX1JjLnS6nnMjB8oCDrLKnwGUDQ3gHfxhKu8",
  "key28": "RmGjCYtwExNY4p2ChJEw8ZKsm4UUTPEysJngEsfiXCR8yKhLqKtXqFtJ1ssaoicSBstnvnqcP5WG9Y4eZh7H1ry",
  "key29": "36FrE7ESuCkdbhKWjfqEUDCCergxweXk7TzgqpTGofQX11oaxXYBdRmZ5oWcdueE5u6fFiEnVTbv9M2TsMVgMRUS",
  "key30": "2CJ91rcmDSnh59zjrbKXuCAQ3gecKrVizGtWe8Kfsv2hpXVZgA3yAQoCs2cZgYRm3mpdJBWydmZ38qFWuRGKSoou",
  "key31": "e5DvpTUsXFYgoUMNyNz1bFccxD6eCzYSmPMr2dwPs9i6duXvpwXtcDxVQ7igU8bVAnNJuBLXwFndd1pnuxHeV1w",
  "key32": "2xyb6wZQz7RcdUqeYkcpdLnqfUCQjAEtrwihpRkrTfRoje1UbrhLTFGLxcfaLrdGoP67gaPQT1Eum8i9GaEhpn3y",
  "key33": "3Hc5wEw2jotQievZsqrVoM5Sg5p7dcg5ugG53DKpczyKpWohZyHWTZTPVUUwL3MddbupVMnczaxuj1vYEEDoStaq",
  "key34": "2EdYLuZqNcVQPev3TDsLtzhuVf66UjGFdizKS2HnNpP9Bnm3D39vUaGLTuV7VCdM2WQFxarbnda93AoboiTfXC4a",
  "key35": "zPLdCmQJoKJkggN7aVGnKCyrfKtTLXLHqZp3jYtakSKS1ETbubW9zpLNsCvDRwfeaMqfNsten3Nxy7aG9NWAZGG",
  "key36": "conRWrCxeHrwoK9ftoncas8AQGcQ1dj1L9uihpBSofsQ8uVG8WUy7waTj2xqyc8QeqCWUnXQH3jRnHVYwjnGrC9",
  "key37": "4v3wYZMfcWvttQWoKHSxid9BDhdWM3vNsXoLz5iuMjwphzcrTrDrooYp8y548GP2QZnCXQQawL8JMcNTpENYf59u",
  "key38": "fQLymVK59btCXtMWqC4tNyi8SjkFvxULCSq8XGCgihRY6otxY6aBJSUNUF2mjz96n3EDpNxGoxTL1qGXuAHzJzB",
  "key39": "2KCuGuuZrJM26Nvwm9CQHEhHtixqGgxSNr28ZiuH4NybMNUSbKr3kRVXTMCAoKsvFYnCreCWjnafDHeVK7rYDLdY",
  "key40": "49WEZyttvNEhLqys1wY2np2p7n8UzMcYDLp313gQTNKfyVrmEsJrZ61QPPAifUPcv1UeNTQYBJxPAUJjHA1s952y",
  "key41": "jofqAiWnyLh9nc33gQFuo3kwg3G4hgA4WKPcaTnvtNHmwTuoR1TpNNn6icFpaGR4eQV8TGAPMxtYbFFcYUsCQjQ",
  "key42": "5f6hELicBXCsjxo7iPVXcNEs6xXaLoVg2qhMBhMuVibZRGUaDSXVSEuVDPt9rsNY393GH9u84dj9Lcu3eRLw2Azc",
  "key43": "V1ucSW7DegXDVSC78ae8xWmFSLH1zDWKuQT9ZyfceteATtXJRXpkycLX1miKugpD9QvsHywv88fqtekctpEzJ8n"
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
