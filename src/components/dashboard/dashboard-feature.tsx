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
    "2CYNnEoxkhRNRBhFyzCPzGbvgHgsRotGJUe4u3xgFvnpwNmuSqPPYNQvXfRzWXuAM46rgQRofSeDi4TVN54a5oJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3efm4i64cf45J2Wnr7XGSxEKAfrRUkD8d81PVSRbGbVk4eUqf9VgHmiEKPWvVRPhUiY94PRUVCepB9oWsmvf26NA",
  "key1": "4WHmRVxrswweL2o1E5J5hp7gMM9chbU4e96QHBepXuSTkQvqbMp6zf8viF1G4e7kUQ9shNFa5W2fZjxgntR3mrHb",
  "key2": "TiRvCUw1o8h2eyCwq9eGc1VEcZzSVDfygYyWZ4eFxBUJCfuvkRz1s6VH5ZUiihHEgR6znegerRVA325UhxdEHFN",
  "key3": "45dxbp85TTrvDWKajVgDnPLVoCGanYhbPPnpvzCN2sJwzKvinvjhCKbW788ETie7GCnUTHGTYMFSKd3gzBxf9jTU",
  "key4": "2xfTCc5JWWJwiehkYVjWzHc8uqAQNMo1sUecBrStFcDP2AtXKTFk1o8HA3fCE7Vd2b72vD1gdKAU1Tpwumj5vWy",
  "key5": "5g17wZMFkwuNLrPdb2aqeUQr6sxVRoqAL6wgVg9njWpfmPRaRgda9RZXLBvExGugfA5e9FWyYkpHHUwGkXjptM68",
  "key6": "44McN1wjuUnwSai62k3tQh5B1fQJ2ZecdaScoAtRoybfeEmPfPtQTDeVNPDLqira3TvQidGjfB4uadipjZpZziJZ",
  "key7": "5bzUEtaaAcLGMVuM4tw7A9hj32pizYTG98Zh4sbx4tsXrQowjmPTjHbf5P9wsD28TgJPdESuAgG4nxZ25KPRmw65",
  "key8": "2LZsCZwLZ1XT9NF9AjiMBDXwntMPXKo5RUDKA5CUPG4Hp6A1Qapbkk3fCC1uzHdNbLiLzNpkd8SkDE5Ji37MwgfQ",
  "key9": "3raathPXDwEfWVQeMjRhQYwoygtmEe6FHQrVyY77ZDep6DJs4Hts2FTgh6MLKRrBQxY5aYmL8HLsBkP9bfgQJZcR",
  "key10": "eTw7fM9ov6wbb9rsMoDa6vt9gPMRDcAZwMVTAEdvLJgTEWN7q2N5tpQnXJwcoBk34VJm1ULnK13XgGKsoqbhs3T",
  "key11": "5Qb1QZtEGhgnRibtKSTcQGNihqCae8xB5XjGqrgWEEtWyaRVPDaj9EHr1YH6qmqGiWDgihQ4wM5WUqmWiebaXv4",
  "key12": "1mJiKbqXsfTsejCP6aooPZU9Xn9EaCHaFquuLthsBVwyab45m9F14a3gZX7rQFQTffak7rPfJVYT8Cgi92Z1SM5",
  "key13": "2M9Qgx3BzgVuEa5yNKycJLmBaSdcfpD8SZ7fXjbS1fivBZ4vg2xbP3ypFTRdy2F1kpvUqbnpzwtPNqFeiYif1252",
  "key14": "4nB4gL4GiYFkCPtK67qwNEoRHicRxgG1pf5NYtu664yDvunHsVZyerWGswqbtv7zwf2AknkRNNrZNy2J7LWiscRg",
  "key15": "2DRYJZrz8JCmvaZ7VRCPtfQxD1PnTQCGe1MqaN1i4n88rge8JdJRup6iKc5rG6aViedz3gyHJx74wwqpab8giwuq",
  "key16": "4t1Vtdktaqp8Tv5uKRYKmaSGkm4WwRtrj4r8VeoHDZX7F8Sx9hCqt5R1QjkHXTmfgcVvs2SZz6Mtid3vUZT9EEEj",
  "key17": "5KcEpbKnNgYA5rqvhznpNxfUswJ8goSDFjJYTpSqpVu76bpkci9tPiVj6HheRfC9bXEkomspschzg5wuBEH3xLiC",
  "key18": "5fxnG8WCfVWqWEPQQyxdyzNMh5vvG8t9S4KtXYm2ChtAYcweoqhkwoqE6ajMhNQoRiX3iop5TLouMXxXyC6HGyES",
  "key19": "4W6fuLkgMHgp3oXef4Sbtuo8LqYAP5pPEYpQXaFmAr54Ggqa81NrwaHaj2LKiaBc3hgf9SAnbgmxZsDoUNzT3ByV",
  "key20": "5YEVG7fbEsYw96zRm6mEyhsLkt4piHkeYUpHtdEC4TaQNF4ENCX9DQ2fon8BDsUiMSr7eACtfCWpmJ3X3X35NNpG",
  "key21": "5zRo4srcFkoU3zC13hyXtknB8eF9k3AyujfL5DQiUVknghgKZXFFbLHcZKAwmeRibyUqYkbP6aFpEMSaVdE5JZCS",
  "key22": "MVWmrF2a9NHEd97NY3kLvpBoQHaWZKtW1d3RmvaF9Mas5HxJ8RQUTmZA4i9rdRyJY4LNDzaxWYYQjeaN9GQAnRH",
  "key23": "2aNbvJvBJDjSnMyEeiGa7r6nGR8zf3UPvpbSRZH3SC5HoVcoRcDBM3nLfmMtXN5mmSgJmnbZiVmTd3SddvY9V9u8",
  "key24": "mq73xkNLTxUsCrgCeWjYwjy6AC7fNi3dJqtewaUoWScaRzfWUHdW8Qt4ozw9wH4jU8n9M6VcZdZFwGkAJupMTjR",
  "key25": "4F37ugN1i5u2C86pmQLMqjcSvXRFar1ETusLHZZaeNF6L8Dkgaxyz7Nf6gVBSRQ8jGUkcqsVN4xNLRU1t3okSubL",
  "key26": "5VWyR5zTjQbKPCnp7NrejqAacxXuLg9Pnoar1GBHqQ9CsYjYH4wriWdWtPTxTbWJ9hisB5gVMahxbRDiHvJeCswp",
  "key27": "4MunDhizxByANfB2Goj4sio6KcLh6FgAXyR3hL2c9Rydv3uchGiisNPPMHM17pSzYF6hfazReFrtD9kPHSjQc9JD",
  "key28": "2g5awfCfgxeXGpCr9vCmDT7qEDbkBpGAa8niJxJ3fpa5YgBmNLqX8hSpXmsHHVL52ZZYRKPUYepWEpq3e9mzmxPK",
  "key29": "54n4NFKQiew1ecymr6rDwmCUBTaStigu2rD7FLibLTrcR5784NxMvdcuwategWQpU8K3Lzuv8Herdi6r2z7ADLam",
  "key30": "zsHevc5bGjDrsBbNGUzBLU4sU1TmFaT1TNFTiExmch8PXTAYsPkZutD9AvarW8Jah2ZaJkHuWorvvpPhjnHd8BX",
  "key31": "3G4g46K4BdSKBURCmHn41T1QLW2y2kV6e5rJttjzW3FrYyzKTMnK1VHaFwQyYPcUQUa73Ku39Eh8EDvSEw3iisso",
  "key32": "3sXRZJCLk77KSJTYjFdHauUAiy1N2JYq62K4kp9Rq1conuJKSum2e4smX6UYzqYMXgykmM2q8kZibuV5T5q45LUa",
  "key33": "5Qsud3fPgkDnmPHqCnCj2GakkP7qhuJvYSSLyavGT2AQddcmjsmmbEqxbjvhNKA6JtF3ZHqg4Xnr4YTc5z1niMZo",
  "key34": "3Rs4q6hKYy8qzvSzJLrrN1T4dpT4yC2wyyTGH5jWFJ9JusuoqTSW8YbN5MbkKphcvUea4GFPgkMTgBkr58oTMRNh",
  "key35": "2Q27FtRUqnKzQXJytyJNFa2EZu2kWBYL725EMJkE1Vnxz66YVurKeLpGjoKcwJfz6Daz9PHEQDPqjQL8mqUMgvbF",
  "key36": "2Y3VuFDthFGZpHa87WepmiksULRXGL2nrkmgg7TsfhioE9NrgXij6EB1rwbnr5LaEEvfMd47EJX5nu4cFWtddWzz",
  "key37": "2Ck6NHV41LhuXeHnzks8wNJR5L7WowMLgjceV5MY5uiMTk88KFsG7VLsJaEwnt7z5VwPo9nWibJW2BopikRu4sfj",
  "key38": "54sV7rvHNSM9bcJUtixdh31tbX4ZwehQhW6Ch8VPXf64Ki4mpV5DNHrJsdWQgRteXCAWEzn1X2eh8ANRcGEAB1R7",
  "key39": "2ZDtosjcrUEgK8zxxBNtKCubYnvCFkrXJnYsoDfyXnAtny6CRVuRqnZLvwh9Djy17VscBeG7czzm4wuKaWqzppcV",
  "key40": "3Q4W5CHmwdoVJcxhx4uzeccv11GmJjC5RWtLCugTSP8hBjdEcKfYCC9R4BnVMXykXS8V4DC2QmN4xFeRKuHTLfj6",
  "key41": "4TrgXwJFBu2ZXgAbqioDRWFstu8NjBJr4sD9fR1B6257iZvAH73rZauKANhKwZXFkJdp797owxKnNsKXQRPDWdjn",
  "key42": "z4V2jgE4zUAZrRuqgeivg2bxp5ayMkDDe9eXU8sBZPBRq2BkNBpTbZfMx3E9ze2Cvunedx3zCPxzZ92CX9iWgXR",
  "key43": "5hVU8q6PRqTVMbVPT4snY46sDXdTYZekgJdB5QKFrHghDCX8vjL3DthHD51njhUBL6RpL4quJzq66ffnBztq3BWn",
  "key44": "3bGC4VvZAaRESTvyu4Mv8jziuPJJqPHA3BCAG9c7wrYSx3Gh2rUnQVV7k5Endo8ZHHE8hY6fDm49F2hxtU8ahDRj",
  "key45": "3xGPBiWRoCsUv6AgrtMhG5eV4cSrjFwTo79TWiFYWM2qkjWW3K9fD14h8zPjVczRjiJZ6bNEEXdUL2YR3R2HgL1e",
  "key46": "3SW7DqQyXVCiozjwFtaNuyzCKZrGeQURGp669bdRCiDpL4W2QPza92P2QXiJiLe5mdmu1rfmDbAoPGbZkXsSaFVv",
  "key47": "5uemismtVR3YLMxxgtkmGCofeJY1cy8LLqFK9orGExt1Lk8EwQUh8haT2P8o66dXymgAs5opQJBoyb7gipYvqkex",
  "key48": "EvjPBvbFDT2vXzfaHyA6YMo8y2Z6yPXRB5djVzRyDY73pTs5RSgLoWtbnSDLuzMapNfYx2NxUc8HhGZBi9UxLu1",
  "key49": "5htxMeyvttjTGNyCp8BSCCDh1CJZYeePaAFTADwpDJggZXmt56wXdJo3BTaDptYZihQ954zRcp7B7pKbcLsoKeby"
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
