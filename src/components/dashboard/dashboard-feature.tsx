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
    "3L7EpnHRo7vn2u7cAHwt41PnjkmSPYnybP5MCJgwkP626Wca8NjVTX5FZLSsPe13MwvmaxkC9tmF7a5r8Mx494vr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iQvY9hXAuLxFouAAdkVS2JsAWDUGHP9kgta6r6HffKn2HPHQoRYPLVNqzdBRq6fXFyZWXHMDCp8tdJHtaoKoVJ9",
  "key1": "3cRsEJ4zXuGydPiVkRJ5ii19hSkLZ25py5cADoSZoEw3byFS6ugowHjC2Zw7u811PxTdtwypssugZzVsQTvt9M67",
  "key2": "3HZattfLnPELLAxxk6T3Pb7KdyHbvGM7Fm8busjAS5qsrb6cs9n8U3JR7VUphDdcRAPhwWoKBBtAukkAsciYNPCQ",
  "key3": "5wWQHJ6bZLMBB71g17MCxdeTuyniZDkxDXogEHpdtVuccFLrJ71eaG3r8mQz37CJYBjSxQy18RQcyn3y38c214Jd",
  "key4": "2rwmeMVqRZW1q5Abji3sJPD1DzVM5zNoRMrhQPxZ4o8kiTDaspKFDhWH15FBojWE1shPYyyYCADVfLhWqyKXQ6ZU",
  "key5": "5K3DjxsiL6ucGAz3k6FL6iSTV94sug9Psxa8YifEXdRiTFwGRPN2TdTKirngzxVm9T3bAvnmRWYAXnEjafKwj4hr",
  "key6": "44N6VNj7Bgx1guMhMs56AzeJj3krqdxZpAdWaqvQYj8XBvVgZySToGJyGqxkc1kKiEcQftmkYmC6jZJbXPr576df",
  "key7": "3hAkY2tkELBY5Dh5Qwy5GZYvcS31R9AMJ2T67tf5zFkQafFc3DcD3o8i4XKL4xJ5HtWWuX6Cz4s8u63TKJyifVT1",
  "key8": "5BQVbgYuvrM6N3rqG1hsLR4UCZdwEbx8QW6ckmqu2EeTQNQqTfoT9ZzY7aUUjZuXdeZECAFe9ATxNBdoowmJCiKg",
  "key9": "48rHgP2YisAyrxA3x55TBP9bSvHDdGDKazE9Kj5zJ5MTn7fhj8ENpSdXtT16CNLtMbFTMsK2UCRSAN1Wq9NaxAFF",
  "key10": "5vrRZDHY1m6TEs5HZGTuyhrgWxMaY5fAH5ByXqDQGKekJ2R4AHTdiejvnjKoN4V1QVUFXMNMG6EtB8jJ9xRFt3Zc",
  "key11": "3dPkHWmKeqJGaGVyz69P6R6TpHqMB2bjPANCRq6ZXGS2LuLf4Ve1VX5beVhxGk1F2s751nfjfVKNmy3m9bAVCV2R",
  "key12": "2aA3BTVscR9ssrrrFLxkvGWsUEHcNBfRrbj9983NNTPRma33mLuETgzfBuMN87S6VWEc89kYLQsDgLwY8WD9GJTF",
  "key13": "2MyFvBE7tUkCXvFrTRLqvih1FKugYqZDWsTYrbSFUQCxtc8NDfoguZCyDynjRxhFGAo5XdEtA25qVqZhi2wH6pRU",
  "key14": "56afikTiaXywKPJhpwwDHkuRnpvunvM3mZCXbxfES5fFJUAWyFVRVCat8bdzfsYCqevse4i1ofTzo2ZAiQ6dM97w",
  "key15": "2JgvSAXT7PLnEb2GeRYFnXFSeLtB5R6LsmZiYenHX1D2KdCnCaqoroPdL6MdXmSuPUFLTzWRi5SsX5xUhbtHWoo6",
  "key16": "514qK8Xy2aFhnNNtcpEmbMS2UQqtmmqoD7tZjtUnJjg29MTr6A3P3VKMdtwusU8CUxoU3VpyTYpB5i2oXTKx8f6a",
  "key17": "5AqeYVrqKYdAwUrWVjdZ32fWTW38dRYDDnAQ9kw5Dm3Xygmw8M7kxyktQgTVcBmAFDVsvEFJP8VrBfpm25QuYAXj",
  "key18": "37pCSvn9qV8yjbZhvUhdesLi8FFCUSdnunjmbxZrCouen9SZreF45JeXXc6hTHEzzRtqEPYn61tqn5Rt4HC9QaGy",
  "key19": "PYX6K2L2hT8qFWZmgb7VaQnwCREJBDiXPyh7kqBTVEgYipkne8pM38aKb8FyCkFBPyRLsKh3zDZ8NnMenkDN4mv",
  "key20": "54uhJyQw9buQzoQruLsYgm7vzPfL2s6xXg92TmgRW26gQZvAZ6Z6pft9dmpn8oy2nQBiahVrdtX3dhUJqeCNSX5W",
  "key21": "4opg4QZKHwZmaZHra4D4cCN9AM4s8Pmj9Te6ZJJWf99Ke96B6v5XRMhJtFCApwfXBGX5kxYuKPGC7KxPvFFCQcdp",
  "key22": "4RZoeoAoyNheQDPNGXofyVQibNktNYqVjnAx5tWnExVdpGWM63PMf6Yj7VnoVTwQBG6ULNKPabzPiesboeUTpVTu",
  "key23": "65UxF7Gt8GYVQjMk6x8bY2Lw9VDtRKNz8y7mGwCK2QwMfXJBUv2gQry4oVFhmPJaKFdEgQWp8BB6AWvAXG19cfWR",
  "key24": "5BY6MPdb5zbwisJMsfwYYEQc1GUjvPWdiphDxNNZyHuTkRHHg9ndbY2CFSs6duGhsay5je86PzCDycsbULDLQDRS",
  "key25": "5oAVqDaDtboVYHkJ3rMnAWE8owFVVzXx7s1YD3cfBQuAzmaGKQdY2ZHCibNFsPofMdCTtL9q2cPhcUXmn3v9V3p",
  "key26": "2eQxKB8YncckivTpiGaecFSPJLks787Vwa46wFKQTCvRupNQvf671JdA38CCtG6oGojgU34fG1ZAMivRZe3tp87",
  "key27": "4oPD7SZbZWRYj95nt4JHxV3ZZPRwNg1k5qw63E6Zau6Ks2dRWWxZqPQjmbHxNaZ293HHoXhu5UeEPeTBvArDrJfL",
  "key28": "2KUUYtG8keqGjFTUv1NjwvfdSexnAwPAmJ5yVpTzvY3fYiQzNvmPQDXdhSCqzYnZLdnuWFB3RB9W57jdmi4fMz69",
  "key29": "4rgwiC9ERajsWLaNN6WArUVrJau5rNaQUHeTctcL1ykXp5dpE4RuPj9HKxwDdoiGqLJfJpXZaX4QSy4Ks2upohVA",
  "key30": "5qhH4QZRJq2A2skiFMscscqdvE593aeaqoTfFBXYyt4ecr55mQfvaZGQL7TnXTVstW1dNwCDtKwa8DxgkZs6A9Mk",
  "key31": "3AkY13f7EGWHkoud22Y49sxkckvYSmg85Leb5HtRxo1u9bJiExJGMBUEhqrA76xua7tSZPdnw6ddJfxS6ByyfgzK",
  "key32": "5zNiBjWupRGRWyr1vQkusJ7E8TctWoAHnL3LBngk5q5M8kABUiP6dHBR9tdvQrdciMgxCSWJu2xGTFNMk2ioftKV",
  "key33": "3SzTH3UZUTeUfxuV4RWn55W4VqFWt98rmpW17kL7BwLJM71uTDqKvw3M3HoNNP8GuTfSTRbSSDdwqm8dMqCiaTwS",
  "key34": "3ahnksdnhJ6csMENGdvDgDHFaDoNPhQK7Ei8sZCmsqNN64d3emwxFb1dF3me7PCWPabNkgwTSj8Vt6HRdKB527J",
  "key35": "3qr8itCymmzK5npfzjCoNF2dx7jaAtf3y2735dmbiKooFvjZg6tyToVd5vtt8LKmkHuvr57xGYaWLqEJ3ujuKb3X",
  "key36": "5vhjaQqVT2ZDVnMEttxrkXHx3h12WmYMYguAmoSdMYHT7gFgpEhcvZALe9uQTTaAtSsb9uiYf326YQttok875Bbh",
  "key37": "32FoXpMDyNsCgkBsgKKePa9znijX6K2fYZUbbDstsfCXndep83Rvyfh6vUH2EA9gpkpuLcHuhV2hvdAcqH8QAaMa",
  "key38": "4aaQgrNFrmREnS19J7HiUiGRAuKgrsZPzdEQy5CoqT8aW31QM4ZiJzH45E58Qkwu6L3jgczgGgp5wo9vKhCEK1z3",
  "key39": "5y6qjSejJ9QX3m51BXFLRrqENKtP7cSXk5RTs3BjVrGLFQKmAyBVnuhB4XAF6u5DAwYKMeroWreUx5wxTmAcUoHw",
  "key40": "5LR7vDZS6uBD8cjT3d6QWAMfkoBENJk1QiKhxag4BTkLQ6is9rkzNayV4FTjfLG5FLpEFHKHM5312aXCSbdaa57Q",
  "key41": "129zrFB4opPpL6Y6YpS4HbGMuDc5YBsY2DdwVHNtQMKY6Y71y6ra7PndfYJMnBZuimdwwqaBmcCpiCeAa9vSVEb6",
  "key42": "KHKovzYJZqTeHUCYUQW1PsHqDKNKnRdskNWLKznHSsoJWa77i5EX9mqComFtprR1H2VKp9pWT1YLECEPkvAmMkX",
  "key43": "5jFpP4ZQqbzj8y2QFYonuovE5qhBJXKFVyba7QD6oWNYEx3qAC6LX2rYEVjPN9hz1hdgKcK1pMdNkyZQywtaCnqQ"
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
