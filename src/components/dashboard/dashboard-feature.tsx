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
    "2h99MRhGVw4eDsFnCtkPTCab8BPtvgLVKBpSo8GozXEC2B3RZD5XEyk4YKydTsYNN7nqgWo9qnfBnhuit6VcQUDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M5jMdRVSUJM5KL3VzVkkwkNS93qwxNnFbd24f1pGfYBF8gjg9juea7vj3k7huC8Lt8HBQNSSfJuWPoSmoHPKUGU",
  "key1": "4Kqzdgo2xcUYn8h1G73EbLjr7e9ZP1FmC7EyoRAE4zWAoe41bQT5Ydcn4ZXQKBWKESeAjFRPzkkCgkukaG9tLzqu",
  "key2": "3yUEuMEtYTuzTK1wdD3bGn9vFUXGHdUWQpwo6G1sjPT7EiGrApRVt5fXCx6NaKuUMz6ZwHVcrhVAYWaQDHodfgsR",
  "key3": "2WKSjv9jmoR8SAdFa66seQtPgXripfTq5gXUv1VmGKs8YHzBtgD9dKuVuwZHpVQcg6TEti3ksQiG8Pm4w2LM1vKr",
  "key4": "amxxboz2QyBzMsTcwKSKeuaAjJPqv28Z7oRMP7L5imhFC7yhEqs2cmbSrYcheDMEi1wNfZrwosPye4XuWZj6Mxd",
  "key5": "51if86obPxipLsdETKPBXwq7UemPQvhH8VjoxQD87qy3fw8QKazP7i52issnCaDjtvMeF9aC67rfoBGgPu6gNZrU",
  "key6": "4ykVJS7emtp6vLUnF4dcdAqoTb25VtbY5S7btVoTU5DYHBJWtHvEsSBxQgJ1HCmMkPzByqUbkHtuTGAE4wioxTbU",
  "key7": "3wPB1xKE64CHGKxtaVrPCStnMQQjHPLyUaSBfH8fJ1it31pRSqxjmNNyfsiA3SCGCBfCAzFfzVmybbvhUz2aym5V",
  "key8": "2MEWE8opZFQAXK2VrEdxxZAuBgcQM6V3aBrx4G8uE66AAssqzLQU4imCReXJctTTfkWBkxvCv4mJjEAcQPKzBgeZ",
  "key9": "5skdbxwrcVgQhRDHnh1KCvrxDUvaXvXG4VTLL4sF6DWPXj6X3hJCmWidtSihKjFrtyxxPnnSqnUYhvSB9TvYYiDi",
  "key10": "4YaS5Md9Gi3nphiebHenXGvAAQzanN7nkrgvPH315wKppwnP3DvA18jQ5tZvy69LFTDSPEMopQSickDnNi2aE1tn",
  "key11": "5cTG9TmBei73vrBHTAUSQeRzCLvZ7qZTJr4xBJP3mwF8Jgz63pdpVGxVaD4ohSJRKrFLHcqYiHagcCfNrAxFCuho",
  "key12": "3ssn8GpzfSjVkGSmDyoRWp7nbnKrRk7xAe1bTy6YKejEXhGTzmR2RvypP29781f2e8gtMFMS9KWN7nnFYiTjURZ2",
  "key13": "2ULk7aZhP2MK4onQWWQaCyjJnshAKHeKPMMTPTotsvtJiLoJ7CvsRFRLxW1CSpjtky2hSbZhPLGsAbMdfaRKDPod",
  "key14": "pLH83g576sFQL1P1BS5z1J8sp6bDpaF7Stu5Tcpy8RXz3zG3YHiqM8Efh7oXrsASDvpjmPWybikZF7RoegftmnR",
  "key15": "2F2Xh2VsVxe8rgx1G1dAiDumAmzMkWTi8fRmVrWanSg4Fwpexsd1KhugVnySWzwpfvTzSpDebQJpJ2GShspuuDyz",
  "key16": "7o1k36xeUpGdHd2UQbxHA7RrXvQAiejvzaUP5fevGfJ4TWdRszM3JwPv64K7u4YyMrwFoAZDcRWuD7cup7HD5Hz",
  "key17": "4tsT6N4EhZ2qv9gkA5ZkzRyuQ5Ch9KYHLwsN7jGM5YYdxGKxhPuVPDMx4cCU3jtG5YNxkJaYKKXNX18yVAkjYfPv",
  "key18": "5kUWcv2Nv8MWmZGoD9vS1tw4yp1qsvCN678pckLneEfAQgXb9g16Q4Bvc18oyMh4RLLgNbZKhg4TAfEEw6z1oTXQ",
  "key19": "2jRaPLT6YwQhxyAxZevXf3ziAKA1zMLFsSLTMy5RjKEJ9s2ZU6qFkUx66ZricvfNxwVYPnw8yqxmywNLtmBh8rtW",
  "key20": "3RFvQUHpckGBhZi26d4L6HYLwgJT4AZQvhHdNqxdstiRvMHNs9J7EXWLr7xaTBTM36q6UejVp7Te9dTv2d18Xrzg",
  "key21": "2A8PDmPfnaoZQKcsXsKXKBKdEakAqCtzJdqUzZcPegSZjG5dLR9aePhUsZU12uuf6DYeW6q8cf1PW7PyyUpbrrLz",
  "key22": "5rSBtaYKy6e1XdLczvKwRkpCqmKVmD8ZyoXHBZrRjToGSrvQyZppC5LpueWq81dFbvahTtqTivnhTJDZfFonvCYk",
  "key23": "QDKt9EnEmgAeRnkzXA4CQoYXWoV8ijQBVWhzFA6w1aG2rTNfRt4oMmsKVSAGxB7ubRYwKAGzWMxz1mhncWGzp5w",
  "key24": "aK57LawAc6Z6zBmuCaLGMVzVvn2HZMaPB8Qecjndz8EXEHXBpQC4EWLVRsNVhrxbBeTc11aotQ2mEFbC3REC2Ph",
  "key25": "35nBHE2ryhXHkEtbe5sXpLmv5FLjne2TfJMYu85nUyxgbewyGYWgLWTT2ZfSnzuQ9d9KsWwFzyBU4hiSJjKhqCWC",
  "key26": "4Y2DA6kez34GRFTJjAJwKS2h8K31rkPwiRqGJ2kNKjS11kT1RzrhjnqchG4hUhZm8Pefd6obSPr6JYVp53Xak4En",
  "key27": "3aAUKfEWQ14CYkhK5Lf2T2ZA8XMJHYwX2U5aGFBhxePNcnMCaGnLt8EuvWybrpRfo7rtyVTGJggdy6jTr2aQPDee",
  "key28": "5mRi8hziwsA66v4duX3zxAYed5MXy8NmUmnREssCSBPA8NzSMTVtoBdtww6u6qrvkPr9PPhqpgXp1QNjybwXiDna",
  "key29": "5N4B3rpT7tKSBySR87VaTGbhosVfvBg68jmvZiUv4iZsa5xoMTriBbohRmZZL9GWJ65DR1PAidCLVQYv2Psqes63",
  "key30": "Rrwqg5TQZSeZjCQ47G5mSNhzm9kiHP6keuMy95JTiMcBFfUDDMbj1E4bZhk9qgy9ocJMsa4DXnJ3eymbZmDPe9Z",
  "key31": "3r9waUbPC25wwrKTyR2hW87nwi7QWsBGe3Rm2qX7dgNUQFiwtVtznCV1Pt2b9bcerAmyk5pFtvU1Zv29zsWBx8ud",
  "key32": "tZJpTZ7QUfKFgkLQwV38ofJ5pMeDuGBXmvYDv5y2xgJJehgEJpYYeiMewra8tKt1weSKLQjnkbHhJ9bzZWWoeX7",
  "key33": "6Kj5RoMUzZ8sPorsdYR8hfUMRZg1xKBzipSXktFBbZdrJoJyX8aADxkvWgnubLvcEDPaG8B3UhT1rcyyjMZ2XWF",
  "key34": "2HmPGMLvVVxvgE7T6soDxD4PywGA91FAWKozUGzHsM2hAVR8s7hdEsd7ieF9Qv1qC6N2jHffbUukkCNR3X2Fvaz2",
  "key35": "2kSWituwQRjL9hYtq3hKkT2xqgpozSxxAEmotWEoF8bHjQVFMDJuR9QwsNkajH888Rnvvy4iSAsJbrcUFxweNmT7",
  "key36": "5v7AEvsNqz5E4DdqAgkFFsYFaa4CDA45YHj3tNX9vDMX8prGHZWrETSbq8HQ4tkSU1F47q7vUhDCvxkiJdW9c8c1"
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
