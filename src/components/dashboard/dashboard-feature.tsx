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
    "4iGumRzLwfCLgy3VcmPF6JPbHw2WfYpcGyzMWod69oGUWYXGw1ZCgrRbpJidCrSP1kWcMjfVBANTjTgiFBRha4Fg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g8XvvVKkTP8nDuDDnkkWNq2VsrkKHKw3RwbpNJfmhjFjH4gucAS3Nz2hf93EpeYYyDiZ5Ajxwqxn7WKhiwfkRvq",
  "key1": "3CaBSr5pqv88AAWRBFi5DrxgHbUZiuRjeX5SP7PBshmuKofYYg89kEHbd1pWmEZxDXDVHV9fKzh3kkattG15t4WY",
  "key2": "61jE86NMGMSQnp5wGGyc22gnFoEAPqQG4NUqminTsEWfc34gzsFofz3ZHpTvAKDt2qvgsWM4qNwfbQWi2oxGsEc2",
  "key3": "5xwvcy4Zr5QqWcaU2Bgm7WfcyXDmhaDkF9Cs7Avmsu277kctjqhi2RqGwMuEC52d613gQ1r1bPeuexTxbzvBvRb3",
  "key4": "33D7EamhqVUfqGtt31noTyL33nNiJwLoXRNJfpawXakCNhgpshok7iptzCZE3vX85oo2xoL2NMCxLXKFfy5tvbxZ",
  "key5": "2K7BgJddaosqGYwmQBoyNRsTfo3PmWrnv6eoQtBuzN3PZfKN7EvKuNSgCYBJsoJgTTvb68iGLHDF4UxJknFeC9Nz",
  "key6": "442Zrz8h66Z5npcFY5Z9ZEya3y6qcWW4rEiKpysXkEjeUxk79Y2hbZ1yXUu69vDk45i2EWkLggLzHVrxoFf9Kdzz",
  "key7": "jWWcPhexJxnsE9kLy7QkJCiBkipVDpvsCo7Mf57wHYByQKWcXk6nNKMWfGZyASZbwxJtR2bik2mUDunfAhxpnfi",
  "key8": "9TMWNoRYUVZBssKoWTUfgKTQ2MHLjQRpsKmQG9MmNd2CyWR9QxgSmoejMaem2YbCYiEbTJ5Q1WU8JsRnJUX3jaZ",
  "key9": "3YqFMb8L3AwEnFjuFjcNGGERA7nPDFfFT9rK8WzYbeb8f1FcyKzB9HMXJCQtk7aZpR3eZfp9YnpT9YJhHFpZVawP",
  "key10": "uYHcQ9bDspKmR7PeekqR5W9hhmaci6vvzxLLyuJnPhDdcB4KQvHxqSh6ptNJLs2f3acfUMUE5J7NEufD4i3MVti",
  "key11": "5HEymf5fAcX1b4ut1zCjjfqJJvt74eQeJoWE85ojAGh2AXsTLud29UwiZnhDfq172pGdo5DrypKENj9osaHXr5fH",
  "key12": "5Mog2YuTVy4wyhd3F34DzBPvikZgrwpWcr6RCia2mzUs2mcfooDMccUUiwTEiUKU717b2vjeuYeL7zo9gXzGqE29",
  "key13": "3qo11z5ziV9QMWzQiREhHeoKLUBeiwN47VH41xakLcQYR56ryJXkxF9LbnUCXArXnYoxrSVjW7f3Q2aQa5ALjEmN",
  "key14": "5VkVBBZS4DM28eEKZAFQF7H6xzUMZMeQpGq8JnsH9mMSWTGCjkDqpS7BJ8ehR4gD2F31kyMXTMp1Ks6VRz9ETsBG",
  "key15": "2iS8GeDKQnSee9oW7dvt1kHS5mVsNTLNEArriMLdWyE5tTBEmV9ebjiswYmQqLbXsg72S8hBWkEd4hLEWFHmaRWH",
  "key16": "3hHXd6KDVgv3v2gcqF5B2D2kFFe8trsYuqjftfQLDp6aqPVdbGAFR7eHeXnhDNXeVY5SkvZYfaEiuQTfSKNZeqWJ",
  "key17": "5GyNaGxUoS6Rko2JEukcSrFXrjZnM77AHUpBuUmN38FUqwbserJbmm9mKxGuN54gWkM29sE3UpKXtRxksXtngaLh",
  "key18": "3nrZbU9WUozbnTYwSyxzwy5WRvJCXw1cE22oMeWrRujRDJdE488r8Q9rPhieFGpuGHQ8GnCMamt9JCx6F66YPhGS",
  "key19": "2c2m2mx6w91i3pfRycbbfhA9eKULrAqoCns2GqxeycpENPc5VvgjCoQhyf78mfh1rsGSQfLkGQqTY4tdf3UWssts",
  "key20": "5RFfqZjmp2jKddgvHMZcnCtPJWBZeEoDgguKxF6asiHqm2CoSGampfUD8k6EkA7TEEqz3vxNHrt2hRmY5EFtUqbg",
  "key21": "2bxreb5pHC1ZJKxgpvxuC1htTP4Ri5FnzSKLjSGV8ZnPv4wKpqLBfPwamJLWH55sg2g3Pgxi8MspmWxdkbjtNt36",
  "key22": "2mS8ctxNh63MsPXisgGPguuC39Uu9SNm3bfXMZYxamXvvMKwpsD6NTuraHWVCZ1Jrgsqbaoog1BHePyG4kCL1x8X",
  "key23": "2oAwu2SFRzSFcVBQS2qSw7DnKufncBGKs57FGZjksqSbz9S47guVEPdTdqMT1VEkxNhe2HHVDAmTNHE7TM93DECY",
  "key24": "3JSE9CJPeLH3mCM6LySa5SKJxgZkTXWHai8gdrucY7J8GvZAgwxBiRA9Fwrm5zyPNxHVjq2sy1jmDAA2Sd93HfPB",
  "key25": "3iAYguC4YG7NwTQwHWmvf5P31UodzQZWuV5v5Zu2JQrMnWzk1C8LyMFZwmwedgZr45bCCfEmiqvqZTg6RHjSpp7M",
  "key26": "e8A6xw1FoGpu5QZVHzGTABGUAF4F9MwQyJPrKCLzVkFFHat8jnsvhf2niWQSdkfk5TPYuc5yL3bgsh5MgkUxbYG",
  "key27": "GzbLEun3GZkxswzPS9tCLfFdwhbHmuA1kT9gPDrQScKP1EmydBMqtc3Ff6ahVPrPnDcB9xvcTGSwFUb4HEfAKiJ",
  "key28": "3XUiJKJXFC7nk6xyn5NFeiSE4sAzBaxB7i8mfsEhwg8HPkXDTzEvq5aAm5Za7P4KVox1LJaE9gSW1P9omPg512oR",
  "key29": "4TyiJKExKbW5FbVsNdk6qN3xojq3dME34oX4NnYqWXHabX1tTBnUE7DF5uhv4WgYXJW2D8KyC85ow1iuEZXQpFf8",
  "key30": "2TgAtBzb3nwMEaSp9xZcrxyrXJWqSv2No3zLpcRPa2j8P1VxGNqWwFbgQURZoreohf1hhJBBAit441tKLdAB1meu",
  "key31": "2e7WadedWBbWwcDozU3JEC7kWZ8tx9FpjePyW1wy5zqSGx939kj3TVrbGaeaM1DJwEYt6oEfvRE642NzTU2b8Bzi",
  "key32": "48vSJBs7EHycNcMj9TeT33KoR3beCcuRapwWiHTqRf6txRLCWcRgszUPDSJHy66Gk7gSTVsG7mJ1NmFyfapwVAPm",
  "key33": "8GMJr9RkkZF65k1Cio7ZYWVwcyuhUG1G7KWYuLcviiLRVy5Q5utASRWs4SgFnhYJM1PvLKCtZVFvesYyGT1tz93",
  "key34": "4f8YZzUakKtcq5McqPSvSX4h9dkqQrCfDPGRCkkraZFMrJZGyB77Tm7fS8nwvjwJT8MJ9xadY8q2VNBfrAX7YJDk",
  "key35": "2UniNVdPYDQbitdQBGsJzUmVykZbSVVXLEH2vAr3deDZjG6c6bNLZgaPnQGmfUcK5ZNnnjwW8tApBMgEhRzLu2Wi",
  "key36": "4RaoKKdzoKS34wxp7tjZESCmTnN1xZcEgJuJbmB7mvYeB17PdNFLyd3noc8A8LhgYzAVjLdrW9hsXn5VQNF2xQ3a",
  "key37": "wM3HadRjmnWBsNW6WJ7MCBijCX7VjpR7W9K4BpHAJXvfyVBNqG2xS4X6WxpjqT2ktuHnPwfDGR8bdrP4DYtY1jb",
  "key38": "Ki5tMHfNGDwkSFjyYd5t4sPSXeBAgv2ApdF1gjQV6yxAmR6sgKEX9UZoRYRvLsJjbAMbryNkeFpac4KfMMmTM7Q",
  "key39": "4xgPdqsWpU1oW2EsB1L2oEpsMD3vSfuK3JzohZGPXWBYQCmYcWhZ2ZGfWdvYBiMUHeGw2uWSZj4C1rbtpFwRoAJF",
  "key40": "5ijpeLZFLdpjoG8MSWdMBF16KwvViNhRZyVcUEBke5J9rqhJSifSzyN187EAwpLTCR5mXMKSY11jK1UfjNX27K4S",
  "key41": "4Zr5DpQkjc2GKG8S6BMR1nZ5LNYqAeWSUiWgFbRzbK3uPhzX6rf81wHZCUMSpyosxikqPP14aC9UK3x5H4WJXz8N",
  "key42": "5dShxiw9amRP1ABXFgSXu8MKCSWwaErSk1SXdRE88BMyRsH1dwfAQVNVsWPNv7kCsvy4ZEHmc4X2LQfLXP87z94q",
  "key43": "2hBVcmKzxL3SDmnFaATBk8e7ThhvYcJazHJJNuCED5tPMoSqn2bBDZ7Vnq9iuaAgTZWbhiyVTMG23jUEFqsXWSLi",
  "key44": "4W5kuH5RAeLpPHddPXM8ZWGzepJykzTk55J7Vo6fWbMed4TwyfpjG21hVPrioSqra82FKP2SaY4dLvExDEQt3zJJ"
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
