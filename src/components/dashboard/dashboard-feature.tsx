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
    "iCWBxJf3zKwfYeA53GzVfXnamCM7L4poA7BgF29waP1WZfMVf6ef9proyWqjrEGjLK5ktb5iRvUC33dGEMqhEBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fNuVLWRrQVwY1foq2hZFGU2xf1ycQA8eukZsWqM7WzbTMZoHXRRXSReSYkJxJjsPExqtpTgnFs76YFSy2FVRNUM",
  "key1": "ejWLUQ6nK3tAnXJT7H8qrgv5zUKj5ZgX7o93sNu6FBnTqih9SCbJfw31bpM4vrEZqyw2s5E8NtnJRN1LNSUzyTh",
  "key2": "3C42hyGbgkfm6Dz4kThpZ5UffhDxp4cLdQcEagJrRrtbLt2cgMRYgrcMQZh1t6VPGrhaFzR7bkhaMcLvVzKrgMqQ",
  "key3": "RnBSoLMX42vueLAw2Nd2jy9ASkMWLRyfNrBL2gwH8W7Em7qyhiv3EAz4pBAkLAKXnTh3VqzwtooE11XdgHkQ3XU",
  "key4": "35xNsB42gAs32wmDWAfQbQeu1UugYHyeicWbLbkMiCsdmtg2pDjpduZ3FwULBinraUdsEz5DGvxc2F257Lq5s5NJ",
  "key5": "4zWw43ADWp2gLwWX6TDjmpSSmXcNuhj2crPe18HnZrcjc1hkdjRDH5ogsEupxhWXCHD7nu1t5Vzqzmxp6S77Bjc4",
  "key6": "4gPPzVgS3d6h6YA2jXSEi2ih6E7JCuFugdQdYQEGpiXwfznSYXTy3aSZ6yBnoygfmv5uPq4XsAuTMStPhfQpPK8m",
  "key7": "sjEZ6yFgu2vfeVqDorKMCRgsjhniBAMbCmrAL8frjAQEVaaAhwurWND38SBGfAVArToDkgy52p573BHGdHvdkms",
  "key8": "4CSgP3n6wZLs3yrMiRSXDx8abvn94MQFfe2z78HSiH1iqjcEMyUt9NBDm124eoX7aRB2h3J5KDwS7axrrsxXsSeS",
  "key9": "3LRCx1cE8Dv722FDSi8eM1h8ebMUZPyjFfjbMixEyhH8zyTsXV8xP27fPL9oGNNcDzJepZHtLxteLtJyDoMj2eVj",
  "key10": "PduNew9ZQK9D7qPLUuzbwsAJzML3bZcDzjuqfZqaCRc5FazA2W4EigmimDWzrVVhXpj1EUPKEjgqo8vMKqQvdNs",
  "key11": "FtAJyFfL4if5vZmjDnD5bP6kF5smavch5dosLZGgPqtWnyLgMpiPstHjaH7yweG3QJ5YGCnajpmCDDXkkWKpf8v",
  "key12": "uKnUaUe8wCp8nAhYMJ1R9RAaTx2gMAEWqaL2o1LEoKvohKEiFZB3AzLKFZtrxViZMTBNyD133aLzRNk1FEMjGi6",
  "key13": "4SbnhJopT8Tcyyjb6icviydLiGVpZCbu2ybjaY45eg1feuQP4DFTt3cMVA88z4APXDcfn8H1nmqRUZALqm1UXnz3",
  "key14": "jUT91DGtaFTFxEW3D5w2iMVYJepYE2BpJn3aiqqZhgjcGpxVpoPV2xsiugY4LGp2WaHzjcsm3D3vZCy8HpWkber",
  "key15": "4pQ1A2Eic3nPaZrBNzLmasgx6gBc3rErJoiH9MZTt52wLZMuSqdawG3WnzW7gnyr6hQj9FmDcBSeV6CkaykdRrVw",
  "key16": "3EecdaZVjV1m5jc36BWFiB8MNeCzaxaYaPrbTRs9E4aN6NMh1N5yz7LNHquMWywSKWG1VG1V9mJSQE5xWnmmBiE9",
  "key17": "51xFVMJk874SFwFAD91d6cU8L7bjQYT9wyP1gACUqcqZRcvteSRF1FspVLRW7Yq8Hg69CJHGgmZVw91FE7LM4LjM",
  "key18": "3G748iWVgCgdEDo7oNSNxVdNeHju7hZSK58pKZGuz3XgZTzwaMkUnnYTNfn6T7CnZG3mUExiG4uneo2BnUiGTn8v",
  "key19": "aw9Hyu77QaSJRm6UnYDRs2qx4FLjwZ1mGbfZPcVf9aRaTphRQX8c5jADxCh2HD3PGU6toq8Z7JHAnCLinfZiY7D",
  "key20": "2LFSPycYimrU8Fg7vzRbmVpxvnfSNAsEXj2YzAmGgPFkCoVVqtuj72H9mUm9SU4wyRb56P83qAGEHz25yk2Ez7rv",
  "key21": "5dtrAqxQXRPxK6ALYyNec2k8SGHif5qaPTPCU8BWufVSFWQ5aPnjfZdw7SFkuHDxHSCwiLTNQqp1vK1dZGEattzo",
  "key22": "5zRMeyxXTbtBtkp59ZowMbRELAndfqa4KAfecHTQTHxMKxCzjAhpfEDJN8xjYkqZgYZgJ1zzzdm6KTvDCEm46MQ5",
  "key23": "3oxxAuYXpdYqhHyicJ3a3WEdRw4CMne2tTxAmByBRBB9sWzAP152de71WWHFRqWqYHdVzFVTeKypyBUYimuP6sjz",
  "key24": "4iM4RWLqgWAkF8eBK8NYTiYyNwsGDPdxuEmS2DipG6LjMonMSYFMv9jcZZnCBzcdd6vozsjQJuKxnQwKevLn2ae2",
  "key25": "5JowzBa4FkTTJ5ujC8JE3ictcd6t7SSnPUbxmvqUtCp6p4ogWPhxzxfSRp4T2Zf9DNUPL9uMJZBttHNjVntZeks2",
  "key26": "5RSoTbVGYyE4BNLJAXubMdBwgYKBFg68kbKTnc2jiQhHiyRWdoGacu968nLRDp4GXtuFfi6L3R9cs7zZwvq35hkT",
  "key27": "5q211YWvAsZCXJAY6gkXmkDuEDK8nbD82nTkMVCxZ1UqbCJpAN1eLCd3ccAXXxWVixxfoojPKpK9xc58MhSCQVdR",
  "key28": "2nZzZnRM5s38nV6BhuvaRwgCvUuQHB8denFFtxZjCr1g3MCM7n2JmM5CVEt13z75QrWjGnHUyra7g1zZKq8WnwsJ",
  "key29": "5VDscDHMBScXCA62pPUcdpV6u924UPUQ79qPGNjV5XvByQVyG26VN1Hr5jj8q4xGGbWqSDyfEi8r9SuycUBgVwdo",
  "key30": "5yRm6PxiSXwP8tF28Z7MFk6PVstx9boPWHjo8m4S6qZbViSmXQMfnXFe7GKSRadFX9UxKXoxg6cXxRBWVC5YVqmQ",
  "key31": "gr967mZ9uoTni8KxuvBTtz8cgynfNac5KQ54b8yRA1xsjoAyBdu6yt6j7MEVsszDRdX7TPx2phGKH4eh5Cez5ud",
  "key32": "3WWFLwijmeF8fpfnGB5orGSz9vA2cTePYUzBo9YaoWZdmZqJYcRV7o6V1ptDS82LtLDt8wEMR23gRhF6WG6WVzyf",
  "key33": "5VryizbJe4BPovesXmrTctuEQvXJ1C1eta56LxWieevpSk6atA43cH3MMsjuMtcmB8mRRPUNN4kCarbM7jbfKccU",
  "key34": "39syVap8BvzXqJ8q836y7341oC7Njk8CRotfUPArU4ePnibqf6AXDN8tV6WuA614qKT96aiEMe9S34cvXenQ8ps6",
  "key35": "4MXHjDwYHooa34pNqcoHuCGjFP8SS4g2YJgebMUwSiNwjGFZknM3tSSBT6nqPQkX86dULaEJ5cPVBdqKAUhzeDmw",
  "key36": "5vNHukvuuVu98frEdQEBBHsgX2PksZeUsFX9W2FWEZjHvVqyNJu9HDNowbUqma256GnH7johSnE7rHGQg5xcEjhx",
  "key37": "433RvyhkdsPPR4YTv2tP7xw2ejuz9DwF9SsjyXVz343T9YaFfTNqtDdvrvwCQwidw1ANTngqDb9BZCVJFAqSJVnm",
  "key38": "4tYcKo2ecuCoARq3BaTMnJLSBYdna7X26ksAyXsPNp6fwpzsba3gQKDMuTeVvdXwmVw2Vj5dzFQPau3yiK2yzpxy",
  "key39": "44PhNmf83V4gbzKrNDBjbNLnBN91oVtF3sCV38t8Aec7oG6imEJs4VaZT54RsJggEmzT7kSFmT2yLGAu8UJVQBpW",
  "key40": "GWrRNyMPYebN62HLy7tLUYUCCC72YSpWGnNa1mAaahqNAer58tKUFZG7oHZUGa6KpZZNDtWw5q5v4aEGoqAX7vi",
  "key41": "2kg88Wi8utKrYdNEBYUYWY9SbT3mHZJZLhr7FqRMeqFRQ3sr9DPd6v7NdRyjAojEEoKkxm9Ls5XN2fSCF4obsiNS",
  "key42": "3rarQrYy1uHuXnph7N1ocSVvEMGAksr3MhNTGPqy11cZ2mknVMpBsyRFxzpmCy3kq5jAxroQBsebaReiV2gZ8hNr",
  "key43": "3HtMd2PFbQ8ZEaUPFJrF6RhGqh8bqVoCaL9s9fNP3uHqRdffMfDM4dMg4CxYTvV5QDhDcWdz8AFFMVFRWpLtPABE",
  "key44": "66RhnZN61km9kzpnUBanAMkrj4FLzbKXBRBG5o9CvVeFYCSuRwQ1T5Y53iJ2HjBymhJrBViY2ZnYJYM8uJ8YpdhY"
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
