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
    "2PaT8WQgSgngnHRGqkUd8JjLC4knCUCs1Z8H65sEs4uFd6XVAHcHqpbtUMEfczgATqiXKDYJT9Hwh3nFYAn53brz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wp7Y5XhgSqGf1yjLdQEwgzkBWeRiSTHQMagb9Akx8FthrxNwqTsuuJ3jYXHNk4ApBTuLJaXihZ3oeXkjeffGoj4",
  "key1": "49E2H3S2vWDw22oPMK8sTcvEaiH7KVBh7CstjrERdawHqjzLhZfoy4ETkeaJmcXoR6svE1z9127LZJHRf9KG2Rf4",
  "key2": "5LrSFGNAc5K8ruM7KAhgyJNBcejTrVdCZJ5AUKtEAARPBoxtzNXWfzM3aB8E4xT6zdANady9fUZXFw8T8hxrHPqE",
  "key3": "mMCcf7xyDBisWWebwyn4xoUbkg8DxW1dx3bBeKfLi1XiaLavNdr4Qh6r2QSij4gwEwAdp5ofDUZ5cMsB7ungoMa",
  "key4": "53FLbGgbGeg9Kuoeo5MsCQG982ywnpKXAANNti11BfR5HBvqXacDGt3Nk3guDUeRPBgBVRgujg6TJK66LLoCMAa5",
  "key5": "3KKqhH6FtPvNxUckPyiwryZVjB6EjNNGSq8M3775GcS3F8Qx5AsuJmTJWHeuBeumhye6cA1JVAPP4zSweBiNsVqz",
  "key6": "3sqdoMyZxL8Lr2oDYjxHWUKxLQ2WnMxZcFxU5v4fB8KxyhpWT8m2Q8sAJGGM67GvbPSDudpq2vnWSVvJbgNfLmAu",
  "key7": "2K9Xf5p7AXixECP6v7da5xpddxJ7PJy5rikGKJkLhZLgh2UKF6RiGG49vkVHmYkjVpUZMNU66THZ1rAKeim6crho",
  "key8": "38NDVLKoqMFNes3g8JBMSCwoY2BrT64k8pBWBWTQeKYcEG6xMSdUgDvCroTKG4LsYraZCUSjuPqrx8Amk5bqJegw",
  "key9": "uHysd3NRXP8Gop8pskkFYuNLoA6Csh7gHEtaMEUiBqk7uvowNTreoCFkdQFmcuXthNUwBRxkEz346LE6C1XC9wL",
  "key10": "hgebuyqKjhtCYYeKN96xpsarhrkFGp3jQgVdRZGNb9C31mnqnKRR2QP1V7vwZeHscRa3bPWCRJVRpnSHqVp8iCd",
  "key11": "2nfKcAQ54qAbEaBWoP433LzhAPtaDDQiQNycZ6mdCacT3J45CticrQiteRkbTo6SfGxc9Kp3RzR1xiZemK8BroHJ",
  "key12": "YYGMHPFSY3BoigHFUrkYzVLEnms29E7f4pvGeJtWVdaGW81VNkK1TWs9DFt3Td7yUhxAuTBSPums3SaGWFJJjAe",
  "key13": "HpGtvpbYAYRNu3xWGajyGUF3zo4dBtAvixRRarRor4Cs5iM3EBbZzia4iqSkWugKmGmDBARwJNjnkEEzCHu189Q",
  "key14": "4UTyjdzdbWsU5izsaNyVr826SnhM57qtcASTGzLdQ1Bzq9C29ACS9sq6WTd5fvpMUH3CfvJmtXeJQWH4DMJdJJMW",
  "key15": "4QtnLr1zNHvjwnVG99BxKPUSYgGd1qCRwWbg95VHSyPGaLbnbKiXStmpXXSoyTnYVBbStaGRrxHcABerqhKj1Fa8",
  "key16": "3AHqy2rLVMR93uZv9oZ65vCBJK9QnTh6CBQKLreiz5Y5xvnD1rB4HSNxhMLYsEcaLPHGgRTW9AHhvr6ZFutm44ym",
  "key17": "2pt5VHHLvLvpQua2EvrgaQ9VT2a8f75AWXq4tKcCjxYWzbDin6boKXnjiMg7UpvZaxQuV5LuzLmZHf3wvT5NJZMc",
  "key18": "4y3GA2iQTTK7PD6bFrm3f4uDhcS3oPgWMxWzzeCoVmLdQXj4op8r5pt31bbVJrRpzzvpDHqm5KKCWWweApVvF1aK",
  "key19": "3DvQHYVnzghapd91xfyLRqNczztDSZspNjAxSuPKasWZRpevXaNJ8LvyDfMJYbzhuKMJKTWq7RFJMZAuhWUNZ4ze",
  "key20": "46amDzfjymh9fs2JXDAfbRjPojSsvLmM2JGFDRNVaN8LCmhbtqAcLh4u6Fx4wLGrLGNgUNcGQ6PfC9BpbVWh4pAT",
  "key21": "4NLH4EYWWNTzrsgAPz6FW4MDaBrtCs99sySbNmse5WajZBtbTSMZmSu1BHyi7tU6ytTJHKtjLnZf6RASG6xSisA1",
  "key22": "5EAmss5dE26QqQjXqnLPvEw4PnJ9BbP3iVgZRR6aU4wJfPqriFRCG2ZV4Mpu2rnmY5JhL61EYSzdYVnWn7tmkgrL",
  "key23": "2PFqPgL6nsrkW8yT1CMgjwfpyQdKJb4Nyi79p92Tyff7fz9UHHMD1zBCzarmp7N7qsjvaTPugGReotpp8fvaAeex",
  "key24": "4ejVxXP5WcT4LSaaNRqcp3XDcK7wyBg6roExCSLRfbZFdSAxApfWumwqGQdVCJcsfvekarQrMGtwgSnnddX2Y1dC",
  "key25": "54RSgLxNADFfBXJD1XxTppznaMidM3xkXzP8brx7wL4qZMxw9csyxzcXm5gHUaYisET2nheKBzK27CRdzm8C2Po",
  "key26": "3iUDwyiSESMg56iR7z5qN3BtzF2M6UDNDtVNd92hCA7DUDQjAhBBE6P7GFU2TpyLq49XyzRxbEnWGaAoBe7iPjAJ",
  "key27": "2jsNsGC5W9K2CPX5YCfhK9qSMNkzCVm4W17dZG1UCQRkbTTuAozna3LT3s7CwEZvCQZCR8L8mi7YpX56Jjo3Lzsu",
  "key28": "5yQHVjLcdxBwwRJXaYNdSkSdzxf9dsg3z8j9fYKL1Qzdjy6gW6s6UzzUXwgAvVgC2gkoUEKDwTyNNKW47BvNYTxP",
  "key29": "5JYfpTxbQGFR2VZxkqqizt5Er3hFubSaYt6VRknsKCbPCKv8V4zMeMSpenTaTiz88GwEZJcKVdZ8kswhkZ6HFg1T",
  "key30": "3FuF7Ajc3bodFq54smzrcWvLF4iEC4fqtmv4cNRFvur9qSdEPVoSvkcmCTfX6MRd6yUNC2Df5m7E27wFuSsDpAQK",
  "key31": "3L4AdrcvXxjCQ1tBSrFBmmreZBaCLA3G7rrvkSk8uLtMpENk76BDJvZeebQXVVqLCVG4JhUaW7DdgDsT29Z4z5QG",
  "key32": "4Zf1L31ZXePUt3odNj6EZkUEu4AgEwX9AFBTzaS2VV9hM4GrP2zbkPV9XDRqb5TwD2DJ3pr7qFMApp1mfPWh5L98",
  "key33": "2PAbgbqGCnbAA7rF4gxVmRFkBsdRHDDiPsYr9Abe5b3hS25k4dNvym89SppdYpR83jF7u525CXCzbDPQCitfd9a1",
  "key34": "3kuyHtba8cihFGpRPcM82WGD3QwXVprKjPwyDPRj3XfAbBrsLsoJUMZD33Wwc4Rbja8efqo1hGtE3XGiLnvamV74",
  "key35": "3pyLj8kkTUFpdFfK2vWndB1Dqc3aRShiaiggfPHmcQiTsw76uUHJnhwbovr55Rsa8rqQmfQQKVXtevSwHrhGsUJr",
  "key36": "5bixSMzCmB6aMAxwRS9fjgXcCwYKkA2aAnwGe3xPBrBUwtYCTpfPvYSJndWBuRiwbtwckq7mrr4FawHoffXPuzaX",
  "key37": "Ee71ZEjCCJzTGurS7mU4T7ZS8n6ZwtiwzVRcLYtHiG41KdCCw7yscS8Hok5SUVxjyhvDHZy6DpnJ2cmakf3Tvdg",
  "key38": "5B9Aa2Fa4mXLc8gBmWCjwpAnub2Aw6y4DRV2XT4rq7wWb1rAsdb4cXebAk911soazGXyEVKSVmAXVgfbd3YgkoH9",
  "key39": "2azGi7S79pFPERVT21favVwbR9yb5mqwMvuJgfWLUX1NdsEo1tb55J8PNtwxmFqqB4dgqc3JtzoVUef6yjznCuTA",
  "key40": "Fb4aCUdXiBcxKGKTGiHvQRonfCqDnNhGWnWDVKUEMFQXepXY41LadVho8HNjSyv8sYq9Xr3w9JkprgJmgqxs8Dv",
  "key41": "2JpYxstYeUUbvzQfgybJvgVHqvy9ibxyMadQfjb7s28N4JvxG4LBV6Ztjbr6kvvKJfcTXM1G8BnYeCWc5aB5TwiJ",
  "key42": "3thNJDXiEwJsBcknzV5iUCzfd6YQ4USWDuXKkmniFWUfhfwxcRQVqPvdeWrMm13ggjVjTQCtjQTNMf81mBHF3vGs",
  "key43": "342tuss75ZBmhUL9FncmpmntmTiQvQm2ptCZrnnon2yoXFbFYAMnS84jMtD8SRodxzMBHwYd91eUGwb6YUTnYBMM",
  "key44": "2YLWcn7uDn3DuZvbvzJSaT6EitUijYAfNL4SJzFqar9p9N7SHgAbpbyLS26CfFP24tkD7hADKa5YZ3iwDJskQVdd",
  "key45": "4gn4mJ23NAmb1hNMJh7PGrLGUkGo18AgUGFQukMaJ1Az94yA5xfWeJTjRM8YDeRGqyeV1TdwbQmYDaXhkm5AN9GA",
  "key46": "4shCPHiJHhYAh8ibhXd8YuytsC4R8LVWsqd6Lb1jESijNMW6Y6EzZ2ZDkTNa2WJjvHEuMFYuMfc7ieVw1hUzASe2"
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
