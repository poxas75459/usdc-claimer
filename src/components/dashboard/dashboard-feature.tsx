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
    "3N8fZr1KNHkHMcMRKh42tARpLsopFkbTxUiVCoxxA2krFHoT1oh9D6F8rRKEQ3Qw7Y91VXPdJZ3GkGSy2VHMG5Lf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28BcMXuFzKz6rcYZvtiU4MJq7xLyXH3MZJ9hQhTdN9w6vvEutXtmgEdb6mYnZL7Hn3DPkdSp5cXzchp688puJZoX",
  "key1": "5pPo13gn6YP7VUnTR5pbNxkXHgMHSg7uicJ5DdVJnveUVyucqZhJPNUEzfGwamrpk5gHsadpL7mKL6GcSTS5tLCi",
  "key2": "2794KafKM1rA1XPHHjw5qum6rwjamdXFLopf4obQjAMFdb5bNMxjEG5Cy6AiMCkSBi7fTAH3HUmHu78Te1KB8p78",
  "key3": "4KVRSVg9stKZJ9bb7mMNN5mYn7ercfrgWyNxV1Mkiz2NLe3kQxrGu326d7MAkyajmp3KAa1d7eexLePUkH72QS1t",
  "key4": "3EgYrCZyrnTgDhRWErwPLQztQbAoz3qm54WtXQ8fZ9KQRWYNCtxxmiJUKvWEnduPJhMeurqPEMxkcdDAteW4PSP1",
  "key5": "5pCUm3w9CatTZmpScTZXSEAKt8DKoGvuuxABNqM9bPd6ueGbufn6biZuFgAFVsjdVT3MBQhGZrESNerT3Mw8ptNM",
  "key6": "3dRDLmjYUU42EkeGUtT61LRAj3xQgkv6QraKcgEJg2xRjVL2SePqwZZkCtofLuqSbYJys8CqBDV2Qaw4bx3FbrKo",
  "key7": "ZpprdKbwq8wjPPFJAfRJ2kpvGkyr5qvdP9m8YToxSzaHLxG5FCJQNgT1jwMcUrVBG9DjJMraxgtjwMj98uTCUyy",
  "key8": "1DPdG4CjLsFkLZU6kfJ22YpFCVEudCDaM1qtTni8154zDASkqsR1ZAHnfd9QiYwhDBe17ZV4i4TnXZxCuSD1CNt",
  "key9": "3W1MdRsFRmtXTZPVNNcQf5mHHvh3UtBxCvDxbrAN444Vs9rNE1vRYVSTHtHfdgeiWJMFTmxw8JSfXPWWPsVdjShd",
  "key10": "4ddqdPeB7cbudxWxVBFo9zpx4uKaJnfESd17cqL6EFe7UY3PapUL95mNN8vPH1WxaW51ZoZkSkgZAn9nhCXSJAGA",
  "key11": "zJYqSV5XjXB5qBPRsenUeiF8AGVY5A1BJs4pJz5CBuakCb77W9JXpUkdjhnDxhE87ZE6wqKrFsj4JwLLELJUxxX",
  "key12": "3rrviG1HFsAYizw42TcugVyrFoUYYbKhhQ8DuWu6nHVexNFfWEwbsZ8tRpNccMagh12GYCLuMcPSDGPsL6pA3wcF",
  "key13": "Dn1VMS7t49CvzibGHXWDUd2ysJNSH6fzQ5Lk71f1rfDsQQQbJ3vPT33MYVfNbQSWaz3gVFRcsEc8esGo2zUAQHr",
  "key14": "3wjJEsu6HFbSsKmJJUmLrzrNJLd4QrEGZsRSfzRXH21vDy2CTwn2nsfEGDu7v27sSyoDASkD8wdsmMek2GCi3Chm",
  "key15": "5C1DGfidvkrpDmkZ5v8Zfvo8nEjiw8zSKgEimV4CeuegBQhKhA9iSH6eiVk1YCYToamrA7bBUo4aWQ6hezEGR2Bb",
  "key16": "3HHA7vPZeBhVJMbwbhSSzTWRnftYnJbitTGS4xCgyWyyx2rzrYD7UpqtfBoiKv1TR2WUyNfaTN9hdvpHEk9Chuev",
  "key17": "4xyPCuZJNdefsLCUB2HFWHnn22jUafF8gVXqKm1tFZWDNpzaq8RLmBd7jNjchN2NucwvKfamxt2tcqHk7F16fT4t",
  "key18": "2ckAntCgzN8Kc7cmf5jVqZKmGeGEQvBmjVMog6cK1tTLGW82oHaCFwtLeTFjSEJSwHiQdiucmzK5Nfp2U8ZnznvV",
  "key19": "3LR1znHbVv3uHYLd3EQokN4j6dSVYyzTSGY9BsKLgyiFpUbLJJ3AyQKULYpXDcD9nb8KTGRd1UNvhHvbExkbGPwG",
  "key20": "4vDaW77CS2CywNovLsh9CpfrcUrVgdum8kEU2PQcFmLgsqprUp9GT63o679wsJQNasMg5iEUdSGprFWBPtVrvPTg",
  "key21": "54Ru3GMaLFTY384jAK8GJzLTV2Vchepkhc5VCSTYp6TwbHaHhya2RfVRuEJirXyoGaYTq1xQKzRiyCUTmWsqWRTp",
  "key22": "5DsEmDoyGUrUC4Dso9jnbEXHENSuEVstWDzvAJyvT3xhzJKxypannhwcP2mNcJxzpvCiubzE4gseKLLAucwEqkRP",
  "key23": "4BfpxhyTPfcquq1GRWgTnzexenLMmALQ6Vj2SMwX6xG6ayTvKvTkTjJqbLacqhJmgZgYq2QmaoehKDpviFoCHHd2",
  "key24": "xJ667X7DiKedEmspJb2yvMZGJGTDQKGDor8A6iDYnhCMuP2zWCAiVxbRdamrnUYKjvMhQHBtrqveJBmzbor2zss",
  "key25": "3DUsPDWjmvw771kA6ckWDHhjDwFh21RP39TGGp66DFfKsuzZvfheD2hQ2heaKWHFLeKVZqvX56S8m5HfXyGaiXYx",
  "key26": "99ih67CBkWZVH2DmCfzdfw1LBMYtf8Fu9WWyypvJN1cWX5zmTecrewehJW9YX8Heg4faL6wvoBFfQeVtGpPCYuT",
  "key27": "4EcM8DLw6R6gWJeyPyYx8YgrJD3ho6Ezrjwu2oFBxJ7TCLqgnBGXHCpmBfMunkkBqEBoqDKNoZBWVt2fos7cExYB",
  "key28": "63kcRc8nq3Mg1pzu3AGVSiKnbMhV92DDG1uKqCXQRL9Mng5nxsGZrCPz59rWCDnqDojEZMP293htTvehUccMw7k2",
  "key29": "3YzpPoW95dQcMouGaFVZBpe2zqaAU3L1WjyXK2RSzuzxmJWWsf96L7pLk4sfA9Tot9aqXfqsRQaymbAupkybsZdT",
  "key30": "5k1np9MzDTVoMesBzt8K7NddGjHPRmsvZPTbTQLfTBZMB91HjTdTaXDPwTmeyo9KCxK4PVwEDPmUfvSQiG9oAz4r",
  "key31": "2SpJStfHGLCmc1dN2coNd49vuHe2Qy7da8wmCYpq1Pck9Cy2MpZE8ekrV9F5tNWkFrh67PMLHMxPQ1sLNXjt9EG",
  "key32": "3GFjgh12DPBCFKaMpQHtCZ14uTQeUXEYoHb5sDiMKCQVAnZmsLACJnafC9FWbfjgDFE6bSrAQaiREfwok3Aje9XX",
  "key33": "5JHxX31viRxYYibBSJTMkry6YuzXBiw6vctscizs5FZwdT7r1XfKXXjbFwXzAgQTiKVQhk9PmsUrWZT1NiiNPToi",
  "key34": "5otpfqS5xRjRc9JayVBfdrGoNtbjvcNeGaR91HT5Ar7RMjYoYgm1w52MyFVde8ndj9nwpbBePJMN6G8s5aiZyx1u",
  "key35": "2kfuDh5vKkAshEpbMfpJho4WwBkkMCDP7eUCwsb3ZTFWw2qxWozSXkcsUFfEP4GgFFnyaqV5gPEukM5KvkxbzQ2Q",
  "key36": "5Rn2RWHdeR6Qsv2AEP8ufhDoK8k25crGDktcsZrwtSJeoWbPFviuMBHxwG9qdKhf6wE7kkW1QUGiV3uPftD9CTsq"
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
