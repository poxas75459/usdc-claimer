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
    "4AjKU6eefWaeZdLV47i5EvmM6vj7P3Yr5gXnMZQB2p4wuHWX9RgeoNrnYQ2WfaDZCCeG7fwjsuiRe8aaVBViWgLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m456vbWk9EDC8Km9iHoZjUBvRvaRpVj1eyLkEeA2VNoF1bfqZwqQryx7Uhqe29hUjX5RWQtD45VdCpcS1kYAjgi",
  "key1": "5jTFwvBQ6KjyHaBLHKCt2zAsAnprRPrcCcW9qZip5xLSY1R2EYgNXyC7QFVXRsD7N9wCegk3RahwA7B4PnVktsYG",
  "key2": "44tu87sBpaiWjQNG2LZRFLigokwHokEJaVNNi6FUKksJabeNySpruA9v6ESoGZvWM2fgKxVryigkBfMzyPvQ5YJC",
  "key3": "4qoWkfucSiK1pxveqyMBkriYDaQWURyqLGJAPM2VKcqp3NUDcdMBgyqbtu8gmvqdkjefLVPnjLJquVq15tjwEvVh",
  "key4": "45EuKjfHuBmqfrNqv3pyoFa8G28D5ATGQQrYe8BThdqtLJx33uZ7fenxH9kU8zQmshXGTbBkygvZWzVebNpF1Pyr",
  "key5": "45gB83YkY7jjpTA4wz7kNZQFog2SZ7TVSkZjNhXkybxLF2DA3su7VdqiJuytarsFyXcuFdeZ26AgZkKuRjjPSuEf",
  "key6": "bu6tmVM38dCJunKPCpm22ZagAf3GrK1BbNDgxFb2gcdYBZa68Q5G35qi9QNvJ5wGUvG1w6URy48LwXz5wrscCkg",
  "key7": "5KGQLMLoimnc6DYycxSZdoZsdED8PT4LEmNqxNeEcvrfCH2dekFxiBMDRtRL5TxagQhWk6SUViWapm2k7PxkwjzG",
  "key8": "2kp2SADidDjNgBeuxidWSFixmqWsC44NAG68Hk7xwwSLprDjTdGJK2uvkmg3AyTPZmBGrz5mp6j3why6e6aYHiVe",
  "key9": "2CSM4RvtLDG4wUFXAG7U15bPgfY8DQvnz5tSTktnaaf9G7bKjLZsoeFPVXdRZ9EYsxQPdeBUP8MeNWo4TkFYHWfG",
  "key10": "4ydFckKn6Xm6b1ECNtHNDbwRXcg9PdQX1xT3hwG3pphKqkuZAKQoGeiTH5eAZHKnHCJisEZwuy8bvtXoyzKAR3ak",
  "key11": "5oLxGFEqQE2w2KAtSt4HUb5V17G5nn6oWPwkVHvgYyWc2pzxKcgmzkyW1yK5R57WacEf3Y6YuBtzUU3cjYqyU4aP",
  "key12": "2zn3YAgSsT4pE8mKzdfinyqPEhfRPajuFgwfmQhYQmx9FqzJUB55fXC4onCkBNQGRSe856iktZErCNGEwpanDtPH",
  "key13": "55YMNWQx2VTbps9qUi8Bn5xwxPBHupS87deeQEPfWUqEmX75S4RuDZFuAodh5j56ScNvGMiRjT8gGg28YgVCLaDP",
  "key14": "3EAfnaC7q7ujHgq9DqzKhdNLSEHAAEnZ6FX4FeZ2FLTT1eL5h1ampTJHtgeybCUrtZ9YNygAC8ACDNqe27bHLz61",
  "key15": "5GcrEU8WbyGTWNAwJ5snG3S7GKSKRdLCcGFg9TKmtFknjAanyrpMrHKQrhFXcrDHeq1ceiMy2rAkHeGMcuKhvRYk",
  "key16": "5jmLuVLns4vHjcQ4pSinYhxyFHFMSoYjb5AUh61w4jBs65MrjQquRoeJRLqnhne7wb2i9HqhvebpKZYPK9R6Vzqv",
  "key17": "5z9RWg1yUadBgiYWAqLx2mXt2z7PojQdShqTcizWzLZ9oXCmtykJzYbkNCaLysn1jNx9LGVzYreFCMDkHiE6FhMz",
  "key18": "SRriVR1zEDPdzctT3t4RX6sPDMpKM6Wij6DtKEqFUw3dfcKeiHyJxHSvX5QMzRevc7WtwbwEc1rJDwemVtM1VkA",
  "key19": "GMWmVkebzUrASUHyGDTbtNoQQJM1c2Jtz7i1dbomYtaZ8WSWso8VTPzf4wHLZHAjBeUGfkeXSKEAeQQGMrtWQ9b",
  "key20": "3HFD9daLNY9zhDJbsYYZM7wJD9n4sWoQJziq93LxobcVr5nebWgQmqFohnD3X3mnFuRgwnHd8JaAFMvpseQU68oy",
  "key21": "3i3izy7hviKj9AivvMGRXmfZKsnyLigPGMQxXyNyrps234Wae6cQNkbrx2bTBydXH8GEfcam3NddokszA7miv4gk",
  "key22": "5fk1BrVQ6JkN5LSJGKtSF8W7yU3P7uY4ry2EDAmCaxQQcABsW13AucaybpgBMXhbjbubz6asdXSFdq4ZtbjFSazE",
  "key23": "U6fkhk2bpGNvyK7hj7ieu21QcMAzTshhdJoWpWZtKRiRx4uJ1ThzrufdpE9M2sbtMy2p9LfUExwfcYWRFPrYFE2",
  "key24": "wFhC2bNhPz6bDbn3Mknyu6YthKJaQLA3eH4DZ8i4gcUQZkYnHVDiF4BFTYLLe7eqAxcrDV186ica5YNc1fuJDmj",
  "key25": "57yaj2rMBGG6yqhJGZbk9JMmKkKUFRqcGsquuWU4qyj9eZpLSuSRNmHTyV9U94Ti5kj1iXFLVaNvgRXJQfGkYeoj",
  "key26": "5Mg8GDrCxTTcx1knhj9PJ5ceybWE9vSaMUTd4svmYwXdxTgEjH5NVRBr9AzjPXFioqPhHsDZXaMJ7uxkv2Yy1rbm",
  "key27": "3vporxvRqmxEU42cNam9Hkymb61vJfLYwR61Bxh6a1eNq9vKwMaoP8Z7jLojpxPLjTRooTtkJp6bdodELjTYoM4o",
  "key28": "3Lx57JogdGmYXRSk1odNDKfx1X8bZ2jvZhi9PmxSWv5RHhZ1LVigkeJMRdBEfDgMbZnSDcgKBvWhokercxY3Veu",
  "key29": "2bGjsK9vLGXCZLCkwapm535hR3TgDkX5fdwwKAusNwKCTQmqMtZcWeYbeMYjrSLdkCnRXzzYnL54SrSHbqrHDKRh",
  "key30": "yHjG3A5m8uBfyrfBpgWPefgrGGx2D8LXAvpcD2Bi95HzNXav9gb82YAKc1DhoxmAqgoaApuMV9DVuyhPsevqbDp",
  "key31": "4T9m5g5NKU7qPA32c8Na8ZGZ9hLfu2bXm3rk8A7xhDiyCAjS6sGjWzHdYiYq8EnLBketT5zVSCUz3rXshdxStf9k",
  "key32": "4RomZM1Ym9nkB8FhcnGui2MMX2mX2PbqYfyRVnKYVL7DrCLYqXdMyxtfwXZC7A9vueFM1ebTpuBg6uo5S1oKtqh8",
  "key33": "2Qgp3Kgn58JbweSYAEdR86zv785YX65yy9M6Ngnw574spFB6wXUtxtJShiiRx9gre1uZr1FijECBomaYWsMnLg1f",
  "key34": "UGXiAPWkdwP8HhuE5gjz7YtydQhXPUsi61zpiMKraRoqJK2L3MzaZVwrSusdbDn9M8Bj5sh3vdgLeixaZptisM6",
  "key35": "2bJDYWEYhGQ97CiJPQdwHKYdDLvkmVx3H1tcy6dqjyd6VeutWqHX13oZtdXVDw12vCqkQDN6irMCtLAGEepvU957",
  "key36": "3Yoz5kLvYfimZvRZk8SH7UhtjnrCHJmZ8XUNQPQLdcsTmuX3en2iSse9aRdPkLtbWucBHPmjvw4VkvLi7XXMEnQP",
  "key37": "uEoRDaY9MPTQaaxKJRHdaTq85gkD2QyCqg4iJ4sQckfWjCnnzTfWU6bccQ1KXsdzPiQiY9o2SPVwTy4mb8Et46i",
  "key38": "3mMJMAHfMryBbDXX2uLSNKFQKSe2WtWXVfbR94G7QDWMYgeAQLQzDnBfdsHDrDX1AYonpjqGsLNQSH88iB1Bofqa",
  "key39": "4de36he3X31LkByCpiRb29kZS7hjdAfBcvZTCxa2KyqNKLAbJdaWZYZtXoU18Mv6h6Y9suU67B37zirL4TP58XaP",
  "key40": "5CuXxrXRsJBtBnFB7VFacQj5DYQyLYf27sSQYJrpF331trTaEsxCUmWh6fKGxpbgYm4QJ9j3DzS9YWszNqmHXgnj",
  "key41": "iTk8MdU2pWDE7UsBAy3Li6CD7MLqfiqzGYqkV34T8tj2J1xBCfywVRb5T9E6safE5LoQJRsshqzsK2VhXq8XqVL",
  "key42": "65Rb59JvRuoiy4Ks21i5rxHxdHzVNdXNyGctZnLPkkqjQA5bdxf1Pkr5xvhYoXyb6yYhDwZiVV4c8nVfYoLR16ih",
  "key43": "5n26FxUys1wsNbWPtAr8WPeTP5VYoxSkdbWUewHUQsBwTdhbSoegskyLc1hGxmAkvA27KwEWy7kDm4mvLLUD4HHS",
  "key44": "3C1y1CSn1hBCzWxzLkt1agoknpmkxRxEZaxtFQAdBMnyzKjheQRmLwCMDjUG3WJ95NexgvVKuucapvo94ecg4RYA",
  "key45": "51MKdmVHzyBQ3ekNffLcSs1B7a7XXHTvhemWL9B2FHEnke4CJii56JTjDMbaAgTXvW9ERrNn22urcS2i3McrDBc8",
  "key46": "3tuxKNxcYLiVC1htcpxZAX8ssq9sovLtPfM8zQmfDSVJy5fKkemfYLYLzc3i2qoXuiwzHDCBTEYQr8jZavA8VvWL",
  "key47": "3AUqrJFDUSfnhEgPvY8iEtNRu6oi3o31i7TRo77mkXfzR26Xp2b4qegSHvMtjqNWmjXYTMK7icQLQ2P5Twtmo5Su",
  "key48": "3ZYSe4MqwKrf3PLHu7BWAJPanzYKxrFpZYgpz2yJb7DcB2KiDMoxLQui6tFnMztvxxgHeGNBg3QDJKfZNY742i2F"
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
