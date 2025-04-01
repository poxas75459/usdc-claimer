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
    "21skR8pNp3C4F7htivLoXmjwZ8H9wz92StZkFBqmBLiYB5kMTz7m6itoWxf8hrfDgddpAjAvJUwVQbAnxRrGwh1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xW1V9HyxDePjWafYknwNiqwEgWUq7cAznqspyYkJ2gy12s1Z1qSYBnp4yKCy87UcseUGZCCZpRgVma5taLeFUzJ",
  "key1": "5mHAPEgXkjqFA2HifrcTmieTo57Qjj1uDtaF5Wt9QRozDku5Sq1uNamGEY4GqP2JFmryZbvTkfVqj6SHzZ1MDr3c",
  "key2": "a3zdFEisbyJLgQv3Ap9YNCr9W31VmVSycZmnUXskXkdhwMx423ABjTPDrU7XHw3AcLjT1pjJyaV2DNmsD4oMPjM",
  "key3": "1vRJV1kMdmdfUZTxPA3sNTBwMk5kY8Sv8L21vUUmhHc9qBhsfJLHTD7NGJesqqucyozJ68iEM4JnjAg3CsZmfLk",
  "key4": "2nz7vBwhEj6B4rW2iX9dZCc7CCqqWs9mhAaDFxC5xqJzmAYVmFmDLWMnd16CEBdfZqNRnYrMKGZjbpE7hijUCDcQ",
  "key5": "3dzuYhdUTtnHk2fNjRidVgZ4WD7zb2koD9nCHu9M46DnQQR2ZU5scUSVPh7C6ELpVH5MPD5hNfReQgDbSTAeZGkA",
  "key6": "5X7RTdtG3tukuFCa8P8csmT8PqjhVWavzyVPj6MbaPavs5ZgeZZghYbFVHhk5n4kMfChFeVSHuFrGS2xznYpKigs",
  "key7": "4V5jjAqADLkxzY6ZHBNL9rjF9EnKW5D5FDmqeMPt2XyF8eLd2EVGbTc23diwCNChrucuJBRFKxhRJiLjJPGGghu9",
  "key8": "5mNksfNDo3699sB1eyATxiesqmidCV4371rNmw847ii3tadtJKqgrz8LkgvtVKPN3aasGijWFfErWjmTK971VL9N",
  "key9": "1XRnC7iY14Cx8hsLFTm1Ez4JVgm8s9EKHoDPG8HFJHwzsa8ixVU5SCFCiJUEV8kpAaq5rJLyuJCHdigYUqkq1KS",
  "key10": "49gpYM7odFRdzzDWx5D5cQv3ApfQAxTAZqLrJnPUDepV7XD58daExYzJj6K117QnMDyRC7DATYCJS71R5Ye4bdmX",
  "key11": "4N1auwsWUiGDZtryaLRmdxyoo36YoLNUx88oAHbBBmW6PHHq2366Mhukb4yV39A1SGHWjaZ2uXtwCpDQLaEk89kZ",
  "key12": "46KWbm8kNqPztwqFxCwNdJ9NBv2naPckyP7JryYTufqCHvg7CFTtkcCtyPRuRgfgLogy1Fd3cjdNoLheuMo1sbW",
  "key13": "3g9YPu8HsFQXxnKUCX4iJqHzhB1hNjmKWmC7595Jhyx1ZHztD4yYce9RSPXSgKSXbmUQ95D8dotDGkbwzFePQKB3",
  "key14": "43LYCzB9nvdUGisg3sjm8u4i1yacrEkehMEpXXFvFviRJqkPSHeyvPwtfjtDbUcnFj78UWoBRvUcvyQyE5M8uqRb",
  "key15": "24yMzbVJVn8dm269oWcE2ECKGCQozJHPH3TF31VHJD5LHHJGNZr88Nxz8fkXJ4SGAbifcXNZBALXM1w851rF6uJN",
  "key16": "4sXSFBMj2n1E8N6ca8Cj53BAWmmd9Ph9Bs9WU6ZXWEkbj9mHzQ5yU6t6wYqdRsmBXkv6EnrRiWDvL8pbBw6u1pva",
  "key17": "421cKTBQUya3A59nEeQW9yknB5icMwsWN5LmUBn3gv6twwLStazWDGTPrCexBcRaaSm5wnKtteLhXPEESiR7XtWW",
  "key18": "Qo1uWbJhZbYYNxt3FxceSFGWyBtkPx1X1KoCGHGSJNVZpoE8JXEj7WF8kPsuch8AMxHmwdaKs49nXjPvp6S9X66",
  "key19": "CFpVNoYuFHde6wikqkh8fQQMACSv3Y1jBVQgbzqyCKL1gmZE5oLFe6bdzvnRuVGxhXmYs5EYdLpDveUecowudom",
  "key20": "22GvrurP3yLAw2upX9V2eYAbjWAhhWFGTek6nMa9XcpNbp1J4wHqx8HY1xSkEV8VRyqjhRCWrReEqpdSaARx5P5L",
  "key21": "2uok3ZhLpRcjRLaBNT7sgX6mutcCpgj7zovBAMtoWe7dThZ2dDNDCm21f8GeA5kWJvFb94wH8yuF1kfzC3ZCe9zp",
  "key22": "5Ly4GfLKqsoiqyPaDfK3dqeYGUgg5CLQ2sHVUgC1S36XZdtHqzqCDtJPsBuVetMWMamSri8R1KP9HCqVrwyxcZHH",
  "key23": "3oHCo5ZkVmegKmYiUctnM9Jw6vudqy6s9B5gYCL3c36K1cniq6FdRfAaNDvNLrYg24gkv6WMoCAmZd6x1D9qYa4y",
  "key24": "Ktov9huaP4vzAXpNYvJDB1KeGxbsD1FwLX21LsfnFY29r3YyMXJCfN7cYVWjTAW9BeBV73REeWiY5oVii2eCnzn",
  "key25": "3kUcsoe9mWCDNEc9gBn4HekNeZbLB5K1hApknM6Sih3uVBgJefTUz8eYkEZEBXp2wFQsgnvNEDX1ttbRMuKqqC5K",
  "key26": "5gZhsiKpWLcihKeEwUrzd1nHGy1K1nKoqTc2PV2Uw8UqqKeiLAJaZVFx4HYCoBGunLod1w9NJZakiW4V7tmDLsqr",
  "key27": "2iyus88DrMpW4VPGU97YokJWsbJi1zgfBPCfbxXbGE2PxZx3Sfggixu6LDthPvJYhH8vb5QPX9ruNAgWvCjtoAU",
  "key28": "2vQbLR8ZStzhEbJWRnj4tsxYHV3SGyyAF9ktv9UKXCrEjb2pQjzYaPDa2RyiwvGZA3Xd21CC5rDM6U1735egKc8b",
  "key29": "4kAp6ga9epnNaSCjce367BUJVMpgDs87vVt39SpphLx8PYKit1eCziCymFfBtdorDEMB2xTJyVQbyTfDEptFWgCN",
  "key30": "spSX73KSBKZ3LRg4YDPKFWyBsjg7UMwk1a7B1EyWijpC6sjXTqYMx9mdfG1BKCjJA3iheaPNk6xfwNSefAL9FM8",
  "key31": "4DNYanG1L8Sv6RWXdVqkzyeYYuKno4uQ12zDoaaKaeoXLGhM1rsk9JaxnsJh8XeHMnmzkRHzDaLZ2vnNtHjCTZ47",
  "key32": "2BhyGzhLibP42ifCp1W1rNWDryqmdB2eRdF64LANzcSawRiMNcmBVj3rVbP4T8e2gwbRbBoGRMCQTBStKQa4bpdt",
  "key33": "4aaynyZirRAPz4QVRFGHLHuLawz1ZNkfhBYUPU1oQChpQRG7xXVnDju6GWEzqCKZPQ6V5BqWB2NdKKDrbYQsBT3n",
  "key34": "5G8S4qS7YfyFNFzGY93BY4SzwtrkrpyaCH6iNpFEY8CQFdfb1CWGtgpQSLD1ByxdgZQXtKS6c4vfH2nMsfKMncY6",
  "key35": "4tWCAkE1fvaQxZm8y5cgvuzxWFPwkXFHFQpzrqeE1Fc7UAekBeoRWRkRNsjDGEZbYPvKWCVbazJUKwmBcjeXxLii",
  "key36": "4mNKjnuQRCW5rBnQzSWSZNQwwho6JYuvoQoA43mj7uWQWg6HHQ7tR3ACfkwJcZ2o9meQRSyR8RXucvX522ovHrN9",
  "key37": "5aYLmFfNvH9Uo6eZ3YMe4ijfDV6jTisAuLjorzfQ7qaKsFbcVQ62UoN4mM4qPf4HyUSiU2JunJEnDfQjiwp65z6U",
  "key38": "3z8Q5Fn73hvcwPgFsbgi5uGnzrSy5yABotRVUSH2Wk6Pa6LaBzPN14LZ8kZGnaPJDoVQxNMR2w5oqqpsaWcCizrE",
  "key39": "5YmaNZbivyVymRo1uaRfozQkQqRAFUcyFp4JVSURNm4ub3xHKdbMmpPMk6DLxdygERbcPVoVo1vXLg44jUa3Ri6j",
  "key40": "5ayGB3kPPyzRT2czG76hrcDtEvxDJq88uRgo9ivPj1ExuaqmED88xsfSi89WDXXSHEJaNn59w9vAjWUNzwoG84jz",
  "key41": "4Ui15xnQ45H7Q7bK3GV6Hww6Sd27cozUZoou99pHakLgZmiC3sVJbMFJMubrNeEAWbsdRRY7h6SX3E8x5A9tXvLW",
  "key42": "WpwcLbGkoFrXN79Xmowv2vQCu112VgrkgjE93xi5jMHEcW6QvzTuTWmoJQjvtCC1N9giNbA3WhVVdTapUvzGNKs",
  "key43": "2RRmfViLbMFwtf73jHBwcfsuFsgSqRQp3LX9FG5y6VoWtKy37XPWUrzBuhvqAsWSeFmfoB5VswHGupA1CSuCqWX4",
  "key44": "4HveAHAqwiPhrAcEqULEaf4RrBj3pPTRRc4oBvvfJyXQga3j4xNmkoYYMGhysdX1tj3mnERQhpuNn94Um7tQxmav",
  "key45": "5dAc86RyfDEhYZ8BgbjJz3VTskHDaw3xZfBdiUVPYTjto8N11YQGLKTJQYR4oNL6ENN26vVcuvc8qq78QsEUPV8Y",
  "key46": "4voPqJZPgLC1xNCpFKBVjauFRa8ZUfv4952EESU3uNepiutVfvsbeVuVCHgqN43JET3zXgYtTyHcLG64YPJ8pG9t",
  "key47": "2KrNEn1a2yQUGpBFngeyGRQiKNoWxbtmwd2fRc6FbLeqP2haKxKXAtE5uEY7BCUsJ9X86QpJ5MBfcjae6DdCDZxd"
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
