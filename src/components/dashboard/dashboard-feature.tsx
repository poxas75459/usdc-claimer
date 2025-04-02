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
    "58pVcYQefEoJeRT2b24Niyt3RBJUYb5wNzenGjQjKgnDazkyWvhj3iYaCRV7AEtm3HoTy7tUgiq1WQX99yggzL4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VQjKW6NSQkFZ8T9HGwCfsWu6KB2G975ZQqpuzCqxSnHfR4uw1QuDK5zwdBJP29iB4y3mriGSXLu5ZGLcKveYxcs",
  "key1": "55GPfmaigyjibfVJRUmqRgLzSs3vxgvp1UtJmaK2W6cswa2J8NFt7X6LieAwdmjfm5cxL3iWDwRj5DXoixiUhsYt",
  "key2": "4yUBsd2Y67nAUmZGrbsB1a7yUJvULV1SCWHAfwK5ywHeEmC5AU8KZ8GEZZGoAZgRzf5BMMcDXRtKKacPzCiCJ6TQ",
  "key3": "5SAvMNxWqspqruxcYL7MxBfboHsvTaf6Mmb6aYb9UKcVix2CNrzGVH4yKSXv3rPXcqNu4MUiQ1eNPDZsPg2yE3Tq",
  "key4": "5y6p6aWRqhpqeDdtyhdDxznpG6jJ6n1bxVp82uibLHPCdCUkHviSppFuowrZ4AkRoDv9nDNwSjSQtcEDHfR6sG8s",
  "key5": "6AU3D12rkPKp9bdwrvo1SPDivSpzpLUBSYYXGq2CXghQHxZr6uHSyZiwke3cbs9G2j3smSQpwBSAj9zXxwyVx8X",
  "key6": "3KUzqwfxHvvFL5oCVYs6HnXGcbxaxAc746h9d8Mcj92tJvE13ieeqmwzKc6gaL186E3WvigKtiyMjKL68JU54Ncg",
  "key7": "2uyXGZX1XTFWJiobmCcG9XheENSSEvLi8UBv5A25pFfWbdUYUVqKbPq4VQDQuFdFvMvhgXZuX2EbfD7Bd6nnpGji",
  "key8": "2ASCFCU2pCr7977hLjp9tvYYmxRCBNa3vhZw7RLKhEyxLN3XxMndErvvxYDjik3wVb41VATKpj5dA9n7vLpDWihY",
  "key9": "3w9UibT5CuytNwyVdAAv7SQVixy7cezxw6QdVeP6pU9BhJYFH3Fh5scwo34a44K12N3WMs8geeJBd3W59DuhzNSW",
  "key10": "2E4Q4B5FcZrrDVhAP2gXLXgLCJT77KGH7ieduWKpTJfVpMmCMXp9iXDJJCbuvJALL9RuZ2zWPX1NA7phJgZSpDV",
  "key11": "5sqNVD1TRq5NinWrSSL7m4X7QwXZM7tprBb8yZ1MJ78QvcpArKQZMDVdyL2yDikX2qDzfMHgAbcJDGSbkSfvQtdk",
  "key12": "3515qEAZaq4HJLCGuiPzG54WXiiyNtXexKWjMEAY5eSG4tD6JExBnwSR58uxayuJn8f72fh6XfT4frrdXrsbF1mN",
  "key13": "2nATxtg3jsTsXQgBeCYCWyxcr3KRFqa9EVE439gCmiUsLFnmQonxec3T5ekazSfnC6ckECPnAnRTLc6d3J4KfToj",
  "key14": "656MBp71Abz21yJBTBXnbVCBA4VJYYkbpeTviHqfqeV7m1unT4qjdKs9qkWzarErBxyfVf2Fz9FfVoenwobUM3qq",
  "key15": "4Ep39kTms8QiL3bR2QuXYKoLZrkw9SvXGWbPvhMCmQfnqLpHe2V1hS9oTusBHewqu8jMUFM4zrATbxQ9hT9WhkSo",
  "key16": "4uXcEDQYy2qEcs3HQ4cBHu6FZSwYRZMV896uMCh8Em5tawyh1xMVf2eTea9ZBvCnWpobDiUKeD5BdupV4uk8dLhz",
  "key17": "kbYJLVSwQgvjvrjZRo5TWuFvHXCbaTjfvno69TAQc3KGzW6Nm7nw2jTCn5gZBENZQ1688t4qopXFeCae2hjbRdQ",
  "key18": "DRJaLnHNufVP3bJgxzTKFBqyC8E8eQv6mPhxnsyLLXg1mFfbxU7Yiy2FjiNsNz7GZgGEzrv22ss95JNtViMRLjx",
  "key19": "2auMJ8P8SgxquYYGCBzpxEkec2GZYitpgr2vPSkjobApJinHuWUCjSJ3JfdyCAnEcnrCfPbuzcdsTxNCT4qusHe",
  "key20": "FgzbfMo7mwte6KMJs534cB9wGFX3QaRzUmjJ5k48XdPMmy4L1KMKYAwwZJCffeCiysE5XsnTuUyyuPf8FERSQJR",
  "key21": "3HhX9in5CeTAc9dHwEvo9Ttqts1tv6eQGhphvvMYvU1HBHVu2zzqBM9f3a7xiiYuTGituWYpHdwNgU71Vgg5ceU7",
  "key22": "2w7aS5qcLxenwN1KoiXcdcGD6BDVvJJh5wGuegu4QaH5Yqn9wNL1MtPoEWPjLRMwW187fg8JBStsVFC9PGr33o5T",
  "key23": "5DVnrFfqFy1yWwSKftzf4QRCAR5xwJHY2GJFrXeqZqbJzCqPCVbtT6Xgkt1meRDY4LNBZFCGC6W2LWVtH4HBdpS1",
  "key24": "2gNKp7fyuZmgAUso6iinoAxhRA5j8qfPYe2yzppRz61e8kfXU29YHae8Tes7BjDMr6FsBHiqzN71j1GBYQKN7xV6",
  "key25": "4yWkrPfbXEK96KRDLUHAzhHgcY4ppVVQHLaNRat3yL1SEpnUHowwrCEQExnXBNxd8kR1oN7ud28Nhe7z5HXjuHPo",
  "key26": "47yhjU7NR817gyvgtSNdpmZXVhpm89uPxFmKeUjHSaAzPFfoKWnBkQAhxnQfWTj9LW5sbDszsEA31wurHFQebKV3",
  "key27": "5ufUzTry1jJf7YtA7g9Cxe2kwtjAPB9Uq2WPGATDkxtW9kKowfQLbi7bwZQ2YZu7U7KfSC9HtkGBE6TdMoMasHAL",
  "key28": "56vHv1c8u9PRjy7qGbQByC8DA5N1GagFVTpHaKfjKj2pSMpfuSQaYq715q6QZ2EzqygH8qGvJUKMb1KDZCkjgSsr",
  "key29": "3FVbBDNFEwWEfvHWd8B8Qeduv3epTySDxmgoNL7322RfCo9BVVH1DKFcRbohJ5r8foQpV8nvgfb2zCzbqr6ryd4t",
  "key30": "2bcDJaNtTjFAb5VxNrHZ6KfBMNbpPj663i8pYktEn6XRurq1QzLzFVGGWMBfcyiZD5oxBA4PK8KtA8U9zh8GKKXR",
  "key31": "52SCVcWtLx5XV4WfsteVuo7fNn8eJdKJ4e9H6fpymWcmJroPsxFsPUmtmzC4RhFoxSkg9nLNkgxTKf72D7m7MwF4",
  "key32": "4DARwnmSPaFdd4UuiHK9KJFkD7gEfuEeXtJ5Rq5BkGP3BdLYsG6PftF2dDPUnSobwUr7UAqAirQrnsNxrBZBVact",
  "key33": "3BM8iuVvmZtRn2YddJTLr22s1Fw8HmE9kGJezpTiuWXTnzqYtQLf4T5MMgyJESwEeqCoejk3pSNiJz1MBapmyWrM",
  "key34": "4AeVWx91rq1F4cX8QjJuduS3dHHRgpY8cQn5WpU6o3MWCS2V5Qdtv3vn8WZTcqSmJCzbyEZLTbQDnCo4LDatJL1k",
  "key35": "2R75CxD8SQ9Gr6KoqTD6QhvGaEaLddGyLvddyWAV4bvTRiGi3oCcSQvjyy4h7GmUxYMCes6Jq2K2tp3PySA7QRBB",
  "key36": "5gAtxvbWXr4qCy7tggVAaRjKWTSvzBpFH1RpjS5EpByQaxUbS5RbfEdx3mw9xFJfy5iKCkgtc41JaCa16xAo49mc",
  "key37": "5wfpN3fa12Nz3dhMSp1KEAJCrY5MJ9hgpGneeBewtuw4XHrsaaXaDZSyRays4mSkNJ2vkmV3rW1SyNMhDgz8zgam"
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
