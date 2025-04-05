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
    "3H8nEdUS5rFbLwL2aUaerNywQxL9ekVVvQ1hjDsHANado2KXMA5bjfTqy2y9vX6JgwEN4cvQSPZf5y5bZdaG4wiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VS3ZNUY9HJPDRrej9mSpJ5GXBRqByYfLXxs6RPg7tpAwAPs5CvwWaLDmscpiHKUmg5MnxHnTctMo9CZ84f5W2uE",
  "key1": "3HDSGnr9pKhHvhghc165dTf1Tyk6Yk5bRX2FGystYtYMa394AiztGa2AGyrYoch5qp3gDhk1WYqDhP5kzvvMLpcA",
  "key2": "66BW9owC8rCF1qMw2RajAag6R9ZpYJ7PgxV89q6sWZ2TaVYv954KPXosPex1bQqfyRRCSkbwsaggSHJRpgsojy4z",
  "key3": "4ct9cnBRrsipDpUqV2R1fPeZZ1arsDuaLGJMk1CW59xJ6JaL8d81XxDYJZrGZhzqY3KxFuMDR1FHajoiYjLNR5KT",
  "key4": "SLDLt6JKiXVnfvfEDqJN8TGFKWSQkhUYFwTdj6xwZVRQtucjYi17bh5WFXXRBJQYogBfXkzP6m1X5tDxQTpsgHQ",
  "key5": "2UYQMs5oju89aKPTzsHw3mTFQhkEHAMCCsxpe9PHAYXCxrcnGUXgtHG6ztkr5Zjs5eyRZGYxLUt4Gb6UUtaqTsit",
  "key6": "22p6npsLi2d7L1Jd2yoZSSo1smFENc48g4z3m8VWRAX9iYzhj5rT5MF1P7AYs7kQqQ2DdeJV1zrbrfXtPTasnBYf",
  "key7": "67rPNFS4RETHCpczWP1NH3Q4q2MUfJ1vCNe8zLyNxPebjXuWaXJZyGhED59RehyzqzSE53j89aqe3jJLQ7V51Ff",
  "key8": "C6oCaMCnknGhngTEDKTCMCMWaqxLU3YLwR5jk5bWguZN1ubsdqF1vTnpTpsrvDPfVgQz4XNqAoXeVffjJJZizRr",
  "key9": "59MLTb4rsPXisFBxdsqm5SVLEsZVnD1FHK2s6gd4LGKMPkcWDFJcQE5hNzCZiGeTxc2k8cN3tVp2S9juL578JSB2",
  "key10": "5T87Q1R1dhaDmasg5LFTr44xGD5AaXCuXzAZfJMHUt1npb2Prro5SCM61ZZXqs4twLDMUDmfCuAaCxv1N7dEUKrd",
  "key11": "3dZd7rK8hR5hzAAcSzgedqweUNkcdpSBmoNXP48TvLjFBXU7YrWPF9EmbnEwJ13RMs3psJGBxu6SHbG4YLL9QZCs",
  "key12": "3ZM7EYjwX3CNqsFByMNeGrohnKZnsD6qFhS4CtS4x851YFLzGuMYLNTVkR5MJRjyfgJHMrAQ73Jxxc4ar9EGWhUv",
  "key13": "4QPhhp2mw4wdUZzCRwuL4ZPCzvQZcU6ERisVTm3Huk78CwFNm4wngRbYMarqaAe5LaVmvGFH1seoWfifRegviFB2",
  "key14": "5tnqLAZHqHVvi8E8Fzw99obXbto6WXTATFW1q6r7STUgdBM2mh9Spcfu8KgeYTsZ8SrjSFa62Gy3Xpyf4mgaevgg",
  "key15": "2BasAzsXAqQYVscnFGzusfs2tEtXHUEhK5bFD5eBTWTU3h1WqNTcyrSLJDaQnZK1FhGGD7r9oYMcvNog1FJhZBSS",
  "key16": "51YKbVLvhHHJRJtEDKvpGxEoLNArf7kxJyq9i2CpRH6jphm4dDcWzCUzXaH1xGNk7S4J4bZASdBvTf5452EKTJvp",
  "key17": "5fHf1o5rVSfvxJoYwzsWHZtAvKb6r7Vows9shTBoNo5HfgLCEP7op7BLcsC4ZKgTnrW3HstdT783RL5M6QU7ZhTz",
  "key18": "2ft3JbCRgyUnMfyQy62sfs96d21owuc6KsXuHj3BYcNbSWPQrXyJXjuPzNaK5ZXTKyLpe63tkKurytSgNdtdvoTx",
  "key19": "2JnRuDteoUM6xerUom6ZRnyL2YYdM72mC5ni78Z5jvsG1iWoiTtaUKJfWQUtRxqwftSvXHPLTRWsccMDzXmyx7Tj",
  "key20": "2XiAqPBB8SGoKrypRKLG7SPnsomkx5Qz68JdQzj2ewn9bv8p7gMCujsZJrsfk64REFNZntvwCisvLAvGdoNT26Vo",
  "key21": "44WeE8eNGtvUF2FJXCuTBrXnkSPQ4yDYXsTUqVNE6u1YrjcfikAQp5p2t8wNrfafokP2CPWWiTSvU7d3EyWmNnvx",
  "key22": "46gAMqASRDcG2xWAYyrmNkeKFq7uCPr1Swy16WbFqfqsX45WaNrCyiZvDva5f36cehpZ6cTvpynjWustYsGz2UxM",
  "key23": "3fmaeBTW8HLs2kvWU6JLeF3AG48RW3LgGK74SoNFUbppDQPq4PKAhP6dj4VSe6CTHFJX7DPTP1DLSivPofT98fFa",
  "key24": "2dRRSFoigzJKpL2gNXeVGUWFFLdmmQ5DZmTB13yrQVnq9HcVxAjhCSYVfDvHRbMhLaPfKY9WEsTVUidMKHvRR62k",
  "key25": "2WHgXrmKfHvHQWswyugFKNKLfdTVucaFFy3Wfcem6CotVLLkqnA1fB8fTLvimES4qxzGDMP2WDCCgSRwg23NoSUE",
  "key26": "FGAkK1mqHmmvgTobfSPUPSE2DZpk53zpSPEhLvFJUkJrMCqj1T6Teto96xNCPJJPKpLwj8cEL2ebc6tjd9Bvhrc",
  "key27": "3uqRrawHdbPRVqeZ1NfgHfMoziUFBywbhPzaVbqMZ3gurihpgQ6bYexL3uxxRMc614syMG4vCJwQZ95zZoEvieZn",
  "key28": "2qFxcs8e22TyGiGWRwSg4m4c1zSSQwB7EZYc2YFLaXqcrRoBQgDxKr1L5mRGXEQePG6g62wJM1yBt4YGfaJeCG1H",
  "key29": "4HuXDJcBiMzwdDhjg5LgEVXHxcbgBdZrq1EMxPkvYRDMnxPEu9XgQCKgy7VC6wmtz2PVJjf3AjpWFcqh85vLhxkz",
  "key30": "2oEfg8B7B5VrJPzU7ELri39h4h9iNNBydU11wzQEht3UwjKbMXegiftxrrSGFzopLFxrenb2oHKZq4GT3pCUrCdU",
  "key31": "DRo2zcxhUrQQ4yiSVBpdDFyUGb9HCsWBk5GC37rKZheB6oURE9Qo1gVVAVdwDQGsb3gBZzTJbsr76dijJhNwdwU",
  "key32": "51oFP7Q8HZ9tYW9yXi5KS3RyyM2MKjMRy8cAEa9tp2xL8ci1TswC5wirqaEDeTsAWGRhVqDRM7pf3u3vHwnaHJag",
  "key33": "3qrREjdsp57NXCcW6L551TgptGQySCJgwr8FvqWTA2Z4yVBDUcPqwKbcwE2omQ4o4YPQG2pEiPARkg8tV2y9yJdk",
  "key34": "2TKVZkz14wgd1C2UwspBiS2N7W2HN9kgEXjVQnfyDavYEpP2hwxPE5ByyeakCa6Ce16NHgivKjf7dcqGZ5nep1vx",
  "key35": "575aoBpentJGiCF9zEbRemTjNeFmSRDK67mEbRCfn2EhFa7EZjhuaUCRKUuYYyNADqaURmtSbwbutthQqppGmtuL",
  "key36": "5yPN2YX2Sz8Cmpoaja3NXoiBQ8GZj6g8ek77a2wya9gA1VJtQVTtodhNY3kTRT9b32PNM9UgGDKa1fnRQZcDW85B",
  "key37": "3rvNhXfvSshtfY1tzz6cMwXt6D63sQr7bviytdwN2fPDQvW66zqdyCgRpTDmEZAiTF7qbdFYKsfqh8Gk9ehCyj97",
  "key38": "5o9yUndC1N84DhyFayt8GxcuySA2WDhu1rrqb5j9Vx2GGqoBYqB5GhHSprZ3gBycsw3MCGwiC1AyUFiSybqBpcxM",
  "key39": "5ZYNtEui1hNEMa8BMBWgF1xfCAysh3UGp1EVNqTT4dFhPkqb2ZGkxiYcNKzBz7pnMJYuQuPEtEVnAE4g2ab4HCCa",
  "key40": "4U5XMeS7ernFpq9nPtsQsPvYyrJPdyxdX27zNz31AtCJWoBNVxjDi44Ch49B4NjPwBAdTyL7VBVuFGtDgkAnuG3c",
  "key41": "55RcGabJKbsG2uSxdRahQZLTHiw6R1r7Wfrk16UqhWyeBX6A2ff7yDezmsk857ZS7vrJkHGKFdBWtCyW4Mvo5sxk",
  "key42": "vsyMieoKp4LKXw5mE4Qqnr7XfHUM99N3EQuiTcZ2Do73RomniexhHy5FotAXrCdE6bwLmcNix85UJmydfqjFDpF",
  "key43": "3ZoM9DmdwpWsoLL5g1CEBMa33TQLkkbF1o3vH1iAiezVdcLAZCLRq4PWS5GdCTZ82NEQQ9MyVrEonnCu1LtcrwS",
  "key44": "Lmz1Cm5uCJDEvhSsNqpLsMXsG5GdjixoREo4qeFfyGycwky4wjAiR1PC45FxbP4KTBqkjNZn8xjFZ17Cr4e7vPK",
  "key45": "3amoSnzxMtCWfTB5r4MEaw5eR9w4Dx8Djm7bW7u91qEwsSQkQ1AQE1EhsEwPAWLsKQodguqepmNKS4m2vsywgP6W"
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
