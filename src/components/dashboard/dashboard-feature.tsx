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
    "42pfgA4uGARywRL1gtNZH9Jk8dBZBWppU3hDduzJ6Fxfvav8PjZqw7UXDkSCnwUxwKVGS9sv5gsZbsv2vqfjXhei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QjAJREiX7Ca665cMnszDn6svf7U6bdAdUHa2rrRwasaeMeAaLEdAGJpGaeDJFPFi6eXaZ6XNjXQCYzs5iPSkniZ",
  "key1": "4G7AaoX1EkBx2BPV8rz4Q1nV2yr6JyHUUZXLvB25whRSepoBFiwyv6R5oJKEZLCcYrc89uVazoCEgT3akYUJ4T3Q",
  "key2": "3LnattoMb1AHJbC7LRNSBCNaoMNhyzoewFaxEhHEVwemUbpMQowKkREAKTewZTwT92R9nu215nvx63wiv7wNtNyW",
  "key3": "2EQBwgRSzpWqfDQpuCPy2LtnHJybA1s1EFcZTW8RW9T9iUeJd9HutYZpwVatb87Xj3WQgJGu4oUYcsu6QGVt5vb6",
  "key4": "4hfySSzScmFkHkDqG54shLGS76pf8miAqsvY5NQJZtbaFaNseuwW9hXMTkpPoiGaYxUqH8m1G7XDGDVENgpQRrgA",
  "key5": "xsUYddCWTMWJ4TW2kDALQakQqr4a9hQqhmqLgqFz3hxcD2huVcfyvUvRGwSJiYPCfYVyMZEj6qAxWcrntyRumXs",
  "key6": "2TG8Kf1ssr23QHF3Z1eB8RLnBvbFZxcqoy9Usnr5G3Jh8mJAaCXNnEj2WCy3uN3tqDV3j83pHgNnVa3WHg2ex4tj",
  "key7": "58BDmCBeELwRYQzECV2uWAe1CjqrUVFnVMwRCsG6EtfZXHe36roAxsVzzBfAE1F6KHfkk7HfhU24rSujqe3rkZLf",
  "key8": "5Ui4qutefjM5sTGyqUn7KoWepJ6G4rtdih6TFEzA5DvGG4TrQcg9SHFCM7F2GTcYBuEV6UaM1HKRfTWGa94qDK7s",
  "key9": "3F5NeG1WrAVzPAgL493aEvmcrEKL7PncgyYcKPcp8Xne1uiDNvaY7dFvKiziiz3ok8QLPFuVhTSZNgktYd9N8546",
  "key10": "5CTwdkirHbcA8GdjdiZTd5E7zG9ao5STfwWvGnj4xuFvEu2Dva3CwbVvN7s3NTEvAwepfr6zu5mbzuhRsU2g9W5y",
  "key11": "2qLYucibFQALoF3JQfNB45swUaSbGGyQkchtLTr67AoLpekr1d1Bf49jHkH41eYtmoMHsCkTxdFA6zw1Ckh9vNBm",
  "key12": "64SuVzwyqwAWcdsEh6XVa6C9aKjBcaNeRTvaZKthAFSH6XcjqPjGxfhGFWaA2gsy9BH91BDMqUwJt1JNt6SckDs5",
  "key13": "5mbRVSzpnYsCkaWLD9CQnjHvQZXyzPBveiyYKnCcNQdEQyDRPxp5k3K6SSTZfFGRZT19LTVcc9H8c4sqHcNtFz6i",
  "key14": "7UwUsSRi9CmYpRkV7M8GpDTueTSfSA2FJjCQjuAJeEj3VzH8XpHnY21P8Q5AsebL5pJUd9ygDys8GLFfHQ4H97f",
  "key15": "5fFwRRinthvgYCm7EZKpoXhZFNEaH6mfhM7kbUpfbdpmxSHmE314J8Br5RPUVw7VUKqfEmPbjoRnndHmU3KCvpy7",
  "key16": "4DwuMKdRuqfCPLmiSW18g8jngjwvEi6dpfMWxbhKBFcZChRYhT7XMB7C8R3SA92fsM4WHo8P9QktFsobbGoTgUDx",
  "key17": "5qgGZ9XUamxALxExsA4MpxY573CUZdoRMGzUQus5c7ZPfK3EEAW5gJMtLkH4VpmUypBXyQQ99k315at8n8oUekZo",
  "key18": "5Ecdoma362LsDfctrbNxTA8hqtxvFx43u2FBJeyPz6eEF5U7pDoe4QpzZZMsZWBNGXschTZtTeJQzZQ372uTt4sL",
  "key19": "4oJPGfHgBguCKRojVLPoMkV7Dg7mCkXyeogsmAsehE6MznBsvCaYT8V5nhU7dABRj7FSgMsmG8DHpnpdYwJvPwai",
  "key20": "3He1NveFXs2jtKHU97KL3YgsgecKtJz63jU7B9DC8UiKRz4sf5gey99dpgFUMjoSaCEc1w4LJfjZWQQ7tFDGoLaM",
  "key21": "3EyP2UtK33MxAE7BbCpXpZh1RENGo1yXSvRhzq2sCxbHnJZoG6E7X6EKjkEWHBen5GHf8M3d9dan8uXiFvVx4A6L",
  "key22": "5jBTmDKxDB78GJn2LX9N8mf4mMQrYABpFdTH9uVutQMA7kCsuRr6rfgExF7rxDR7iaJTchbvuCHCykGi5dj2Dkp1",
  "key23": "4w4EMByNRYSMumgf432QJS2wDV43ydcaHYn1edkcC3Joqq472qtcfjx5f2vh9xE9GaLmphyMnTynUqZTNiKTtjZo",
  "key24": "ophwbak9ZZroekRkuWn2tAEguAfcnjED6KgSL7fHVLeXxFibA5r7MoY45ZdKtBtfFUJd64FjwW3pSp658dWY3M3",
  "key25": "miK2yRRHfARCLZBjtsbfLWZ3ButYpVifmVoN44gbP7rR2puiLCQCL8p8qvYEXMUBuFys2xNvJuWMqKaDGzaKfSz",
  "key26": "3sjw4ahWDiDmWwiHk5ccKfwzHrMStCyCjr5SWzkb29j5BNMichVUFGR8ujxKV2eX8FtYe7L7HcSv3Uq84ZCUj5ye",
  "key27": "5YMKYEnvbPnRVy56G9noDTgtxNcG11264bJpKNb3WkPGnaH9tVus3ZcGPWS4c7M1VyfzCiybFLi8cCT2Xh6rfTvt",
  "key28": "3S4rLMeDEe7PSJk2ahqgPs49E1m4a7QSEuiGiUdE8zq5YrTBYDasDGRAJgMB5ZfxKyLe5PgQUfobM6Zet6KYgjJJ",
  "key29": "4PotsEnfogiUkrgtmzfbd9vfvdoTkkdAhtuSXBCtWj82yCVYK78sSWorFgXXcButTkt5Au8hdtdgSbCUqwfmJdHu",
  "key30": "47Q88XTKkBmcWBCr9ZMKHWs1r9Z9FMvv4nPqxdjAZjh9N6MckbwkwEbTQ1FZCZqZd47puGS9rYQrDNSUJjNYRmh7",
  "key31": "4wQm26RCVggXcZ9JKbEj38jMt73eqqQfN5McN5WCTH97fD8VWk4fgsHLFn8rFtoD6Unqgc6JLB7WsjoRfv5Enj67",
  "key32": "4hFZMhuigcpzZntjyeJmPqRuTH8h4Cak3mtx4ibjfhrhsnfhawc1RijwtZAfPU9MXJhmuoqbHjRoYaidSktWEKfd",
  "key33": "2LutSnYEJv9CqAA31VaE3ayaGieK9e3eSkUygieqNRXGJr9yCEJNgtV7phxwHxgC2ZNG5aXGme9j37tU8CxNzhs2",
  "key34": "3iU5jjsEDqJwrbDztvvqnrXzzgp5Azg7eTBa2VANQpamj5nRgHHCqV2WSWwnfQsqKc41giT7Roje94yhU4rprF5c",
  "key35": "5yadS32qvh1n9zZfBAiTW1rqffffWh3F1NVLvtounEs42AfKGtNA7SvZF4eW2DM5t4FS3sfAw1qBPGBdTUuKNN9u",
  "key36": "3r4kGNDDDpFMv5UX5Lyki6z7VQXvSMAjXQJUx4Jk4fFG8t3H7Cxap1vAxXUiFLP1PpAmqshZjHwQrxKeFEYWgDiy",
  "key37": "2E8zpiUMb6KAHFTVLNGEqwMZXqZLbbzwcaugjBy7VX8RChDEQ1AWoSiQKfKFZhQQ7eQKT7pBwxAs5mseYsA73j3C",
  "key38": "3VPwX5tGvbu5v8Q4hb76xok2TBDs2NgLXyaqh1eKKuoEvSLfXjGrC9CiSnK4jCvuBoKzhv96zwTbSDEnK9mnuYVY",
  "key39": "28a5dKrAJA6J1xVYA1NgF7MzzetcbuER5TLcG3cJ5ryXHFxDAuhqTdWD7WE8qU46VFkXUGFbaiYkjzRoHU1DXee5",
  "key40": "4ZmTCPPrXn9xRujdwpkHegupFmoJyzouwynd1UwVY89s7PfVWW5AKWB6eZcPQcLdvrZwGvn9cyPVX1aVcuXGxxNC",
  "key41": "5VNtc9xnZmAY8SJMGSoRKn7VUKtFfujrwt3wBGAoDmfvsG41s33hgaHwKeCHA1B9ubynropE3SkAArowZtSob9N",
  "key42": "56LBDZmuNN6Wm2Z5ziRq9XxJcNoxBUrL6gc7YwaCPjzDV2cnZYzvJSpmQ5NiZCek9rAzc8EA2hecrxT7PQykQjzW",
  "key43": "29bTYZPZDNCnNCD8rngyv5CiJ3SBGTtHp8k1QS2xBLFNTp2BpuCFKiZjkGyvNoMr2maU6FV2m8ZgHAVpKtrGMzcn",
  "key44": "3hFHXqzFtGSXzvy9dVLZxqmpASHrF2rxdS5re673F2mgNnBT9hBwgtg15KJnzDoQT5PpYdjwV1ttg93XZR9471YG",
  "key45": "5zrKeFjrGvYuZtEXFgp182TZsNsyLnkBKC1Vf6CcujBs9FyMmGuYNCzTAznnpmNmk9fkxhzEfHdmgeHb8ZbMgNTz",
  "key46": "3VFmx5pwKD3WhyY6Nx4sVXZJRsDGeNrD4kBfHQaiqHCzsqdieeXZDJVPDk3iHMMbRNDyfdunH6gVszuXBoSwieVL",
  "key47": "2Ao2LVbBywicNzqZPQZMonHM4wtc9jymX2VSP91n7URzp4HVfvY3gi52doA3Th7q5ouatYtdvAXsm87tw8qc2CZP",
  "key48": "2TDXdSYkLsXiardvitjz4m7XMRXwREHkJaayGrpqC1wRWN5DRSPkensXpbCnrxtDTsqmq5TPYNKqz7tet8fobYUt",
  "key49": "2hriw933PBBiA2U35tARtWTmdUSfg311tj9XAwf17rt8oJNw6sPVpQ2tyYYutVqbYZudvSHCdcahtDVgwJoazywz"
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
