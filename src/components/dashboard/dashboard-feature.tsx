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
    "2kXdhaeXgnUd4SBQHD75UEKqq2JH9aehPb99NUCq5CJDHJEiTiGekG4dboNsHzdcNTvixhpZBw1sT5Jbv3gjQwFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ji95fwvZk2SNKXztjtYbC4eh4Ac3z9MYyoMZa7qGeRrs3FawZ4hPAKue8e6nSMvu6ZEgyeJaTKCvdaxcPynABvC",
  "key1": "633SfFUMveqA18cZ9h5huxKMqQnRtSNHBwtZmnXzzpK23TqbXukxCkHaXocSvXiiFsVUXRZtTA6vvuiGXb5yoPft",
  "key2": "41UjnRueS6RabWKFzu4PidCTZY5Z9bhtGFjhh4iMV3BBwJuBBnaoi5pefL2DqXhU5E3gmU9ey1z37CamoBBMUsVK",
  "key3": "2t5w7hxC48RRLbfMCfaMPbje14tKYzmC8tANro5FZVrg1qvqfj8rvBk49RxD3dKS3FnHjLjLxUdvDoWgF9U7KyG7",
  "key4": "37ZFpqB24HAQPvhr6ja5yJ889BTEzwnwpFPeKQxLbZFyKPPJWwLh5WJpFTnQYWySRXfVHGFWjpL55JV43WmjU3PL",
  "key5": "bGPHoVAy1VkWTgYN6Ce8CQKuGL5VHMcYuDV1wwxpyAkQEsmkD3aengsvUR2a2QgewcnGsCRyXL29Vz1ger4ixy6",
  "key6": "5gZksEHP8Tvp1BsA7AnFRjmsHPbF4LG36rNUMoZ2puojZvhGWrsEk3eaYWBZNGNzJPV4tRLYMDZAQt197XUC9EuV",
  "key7": "2jWzVkYrnGQJqNhLcHUCw3bAV29D6jsPztfSEppMeS4YYwg3qdc91ueTbEAGAiXEMUkrMsshjA1q9bndsTmY2dSQ",
  "key8": "3cnKj67BigbYCCyCscoBCwNZ8dDeGbgNcp4utPNUGddXUF199SUfxGYycymTYKne5p851TY3a1Usq9craDRCtYdt",
  "key9": "3Mk7gE4qZ9iD2xJVTbSXSbRk6iQeQbdpJ1SFgfFo39p4k8u9NP1Yf58oaVVzmMxBetCJutRtDDvbDKH3tv5991h5",
  "key10": "5KV4snwCJXbWFFzELEN4E5HMTjcPwoG9FTDQhFC3GWuy7gawWhmXMcZGWQw6kEnP6f1RqZed9kXZ4GSuNJXHVM4o",
  "key11": "F4JHaH5tgfDyHNp7sZCmFZtEQGceLiJpuLWaWaKXBKi11W1UsT1Y2wzgqEtwmgWJTUoMzvgz4rpSNw2Qh2GsMtv",
  "key12": "SZovJbmVCvtXuXEDPB5K13n9ySCyVKkVTw8Drqm3st9AC3stwt1S9ucfTjgwHArCS4KV2TNPShb7hr4burRPnyt",
  "key13": "iZA4zCDg31weFePzDWGNiRgne8zqPgxd1Qp2nXhCCeLtZghn6oK8RL3uPHd4LoY9gDJcrJF8gZNww4YvLcSs5Bc",
  "key14": "23cEspGKGC4nAWUVPXZ66FoZKNQRE48HDL2ZEiPwVZx7PbavuSwcTadD1SeunLGdft6iDWDD1oKUFoRKwJBJafBp",
  "key15": "ASVb6HcXXzfVjcJrgmgzhHAv4ZiBQ6LBFvzmykVfzrGDx5a6dTGZtMmfV8HtYCrZ7Cz4EUvtDs6j33SEhkSr1Ue",
  "key16": "64YmJ9tEatZMtoadYpCfZgam6uYVeg95cwwAa8MNro13b33mGZR1Nq7JxSbrwTRtgAwp44ZLiV7CsukahoMei3MP",
  "key17": "pYHEn2AGSgYH7ZmKePTiLRREb6nzPFsLnnuxwVbSxqJbUXW6FgynJ8PPTHybLBQKazwbVPXKbsYvu1JSXXf1sJq",
  "key18": "4RFQbmjBvhGgnNtuR9vrvpyd7JheakuNRvb3JbEsMqpVbpvcBX8bLhqtwYgmD9atcwiKiJbY1yRqXAAYmzAZnnxk",
  "key19": "2QJhLUihBuTaC1Rf2YKkiyBbS5GJcjLG5qyNDZ8yt7uDQiBfiAtPhQdmv6te3otiMTbPo3hcWPpuUiCwiQKy1sSs",
  "key20": "5J8Rd2qXZ15xwdkEQsTt1vLJRZUc6uSoQqRk2no91bTg7KmKvLfhtJksQ1KPTzZgnFGPAEWY8hF7C9WS6qy99bFV",
  "key21": "FjTqwYn1pjiH9dnZgurjSEWMgbTmJkEh5YE6Zpo5AbiZC71AXhgBX1iPwzeibBATwRthEczAfvvamrjnqNMpGZW",
  "key22": "597EeGRV1pvTGBb1fKjTNL2PQm8pwnLYtzXjb3KSDhjbPcaYEJWt9Rwa6Zo5DMutCrh8b1hw2Gs6gVerLay4VvMa",
  "key23": "3UaSavUV628872aEmtYHFVfqvpKsW22a9cUzeQT3tNp4yHYhKBQSLTHFwuFWNe7jFjcUqdhRCCMoM2RJGkFAc1kp",
  "key24": "2gC2D8NELHxmGvoeTiMjMd1jgeY4wM2m5zqwfrYtDTAzsc882Cn9yt3Fh7mhCbsZfgbxdG17Shdbrrw6WLxJ4Y9U",
  "key25": "3v7Kbi6KskvPk31kG5NSHeHia7XQsgJRXPM4s1ps34ty7HxsQUc3wroLnfybi9TeLGCuy8CJeihqVeA5mQR6hzF7",
  "key26": "3VyDjf81kW75MTZthb9rc62AcxpChcUF1dkxezBusv4gwddxrjT7xXfpi1KpwF1B7AWWXpVnQRPztdbH7Hqroryk",
  "key27": "dcJVFajQ9wp8ukCjC6MV8bvChpWAkVDZk1HE4t4oQgwMshk5Pn4rChQYekf8TfdpYQFNQRM2KbbrXuAqK5sdC7Y",
  "key28": "CVV88ehUFrY6cnxpL63bF4cNH6UafhtN3trMvwJVhUYjfG8w8gWtGPjNUDdDNfNUDXLsRRZvC2HfxT6pBMGjcYB",
  "key29": "4xvBdzdJCSTYCUEo5wn4gPjdx76xwYHSvLcdTuQ7XNRFhPfZgGY75ty37Uj1BXG1jLi2vStNh4kAJ8JiaMsA6dth",
  "key30": "4nMZdfQEoX8StX1jhG77sqqk3pNTJuijTPmWaXnY4pHKyv3Xc5AmaCKJsqnxUmW1uytBBXpaTXkdxc9t17nNXWMK",
  "key31": "6191D4JUAbBimJSpjbVTL7zHwwVhXM7v5k71UK32RtJYU2bHeYR8niTuMc7mBgw9n1YePXsckZLmoE9vB5DiCSHb",
  "key32": "4ec97eZqL89xgqrjfDiNTUuz78y166iryGA8dRLnjFDh1KbeSFFoedBBY97bNEux3FcgoQUbsAg3poSoWGWF97sA",
  "key33": "2wH1HwSQjUwPMnVUf1ccXCPuXhSXPFgry6pxfqYw3mfz3RsYGCcZd7e7sgBRJE8nKh1xVTUi1ftWj53FxfL2tKGf"
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
