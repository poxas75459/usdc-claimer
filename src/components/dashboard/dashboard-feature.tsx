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
    "41bkmXSNH8wpWbeH2oezGfCeKF3VkmPmVHUQ3da3KHCWpouh3WGd3EMrjPoXE3qY7pbC1GADTZ4yxYA1iwrqofiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58YEg5TDdY54m4AN8MmqyTTYN6Z8f1hEzSwzwWBb2G6JLte2dSjvvtFZBduBmWt1Ycmr5ersKnAJoJLVm3Hg6qMz",
  "key1": "34aN8FZPcBsJek9SsmJJjeEnHaLn7sHcm9MbGLL9qEXnz6Wq1guex8G4A3KyzgqhpK9vTJSBrrwid79AJYUBQvJK",
  "key2": "2da7N2ZQsxKoSXZByTDpVe1pvQr84KJ75qvsCgraCNeGqJipHzcHXTeob1geG3PmeREonWcNm5yzs5GadAcKeWGF",
  "key3": "42UciKgzBarWjiXyzHKVkg9LjnUqiYbiUvbon1ATpcKPNufWE9XHn3CgpfGonB1HnYjLs4dgvNae9Nhk6dBLzECm",
  "key4": "3p2DJEK4PNvjGQRKDZB7RXEKNZ68RuiBLiECbkW2YD4maA5CaUqnBw9uCeeTLVqf4rcBcnbxWT2LNvRktEGMsqrb",
  "key5": "4w9Uf2T8Ja4CEDYL7BxVkqw23gnKVGTvZkVw4KJcBhYh7XPEoyXPM2ZBb7N3byf3YMP5Gdt9M1x2CUhzUFbGkzmD",
  "key6": "5v7f3ZGMPjREnMTSiQfcmvZq2cvAgvDgNs1b9w1QbTCHHtm6ihC8BX62p7Qk3RswY4GDfT7U1DJs9g5kpqHLVi6q",
  "key7": "53XMcM1D164mJvsi4apEZ6jdZ8JaqhNUXTrJxNV5r4TFxccNFpvPEZRG46evhGBxsQHQJVET4uzaBKFPtCXraCZw",
  "key8": "2CqC1HFUifjfwFoCQ75fk6NYB1k2CWdC4cE77BEjZgo5kApw5HzFVsDjvweWsk7iMqCvhUGKc3PCLrdYEbTvscsF",
  "key9": "2So7sFGZg7kTeAhUGRuSWSGDwc3jDLE6XmnXcNdUXE3D42kcviRqSSaErTuzE9eSRR4zJmEQ1tuB87K19phrvwxp",
  "key10": "2FkAvYBH1Z6osuTpCxPsWcQtZPMYKp2NwgxraUD5pQuM5YF2LgLayTWuns1k3r4trUgtycNqBNZsY4fqy8pxKQSF",
  "key11": "yjjizqftZGPHhvdKbFZi5X7Noq6u8mjHKexcHRBLWdQ1kGVdz2t3bQxoiz8RpUdEHDS7XASYXQzmT8XcKZJ4Mwp",
  "key12": "64zRVvfwHuKPUToZ71LnDJq88ho2kSkynLMYUgQqTRkdHB7iXM96mhYVujpKVJDGHRpYJwc4SkJ6dsb2oL7zb7Ea",
  "key13": "5K1AoV6bxk5tLd5Eu3EQYW8YNSTFydQELZSvrHuu3E4CWzVEke5cy1xaRMZb6p6doSKZHSdyjXyPfdydzp1jwkDK",
  "key14": "5ujUX6FXDRVrQjoWVjqq44UjBbWJqYU3QT7WnBDjERGDL9FMHdurHzXsFNmCcQmKAh6dsFkYbaTMBxkoJN2KmWXB",
  "key15": "2LqQNNthutd4w1zEsCRSa5aLH5ATCc27xpLehHEk1LSHCNYuvJYkkY2DkNEbSNbZJZowN6EMTbwNoxaEvbsaZhEP",
  "key16": "fx8eYXj6nq6i8h8agEpXEuEN7bnb3pViTZwWaAPmvz7Puht5C41Z4rZwisP6PvE5V3g9rxzrW9qTnrshuJ9WqbJ",
  "key17": "5hwKcUvp8MMjdrZzPJKAPwSuHqXaEzUb2ktV8VuzX5FK9hFK4NuHM4b74SECw2o4yLHhPp7UYEBoRhmvbg8v9QrD",
  "key18": "pXXcbK7n1vByG5FuSnDdjn3wF1C4hh2HDYruBqCJgNsgut8BaWdvLghKDNftK4RNs3e7xuk1PkwfFYNyEGBxNno",
  "key19": "5yzcgJVoY7Vmr7CAQS8uX35EZz59attP9DzAYrQmW68W9t5UX1x99f6AQmca4BLLLdYp9iqVKPQZnhTeonycT2m2",
  "key20": "5htcF1VRqXhUxwgbX6UwuLY9FHWvL1aBSZwzndeDocfzmVz6hzVnrj8jsFL89naZ7tKaJTPPuj7M7Sgrnqx1iR69",
  "key21": "2jcywnNqhQh48cFcvqY8ftcDfkYwLjD9x2fFy4k4HSjDd89nuwxXSoeWk4N8TYLDa8By8God8PysqCALJ5phmQ6y",
  "key22": "2u3ztsygkjxhA8yrCpzQoDNqKBiutYd9sP1SdAbWuLvWyMg4v9VR2rsxQASTAZ9qihx2X9riji1m5sMAEq3vufpa",
  "key23": "5SSrk8C3Ngiooc8MEKAPKMCzdLBJivhQsEB9C8txz5ietDqZZ8dfxQNiC96jD6UFCQM2NgjuQY1cCmsiWkhLmbpz",
  "key24": "4HunXZoMbt45gMGZnpkE1F2JvAR9XqtmRjL4cpCQWM18kfGfLFaqPJoAR6Utzg16NJVqKXfC5atc4nzvX8csX64G",
  "key25": "XKR9ydkuvcp3pVT3akjQjE2LqXE9yAvGRaPQxxARXf2zFgPBpSvHygwHVKvAoTZ2uemRBg7QdWo4aEepx4n6mGb",
  "key26": "2uhEZr6z2oGYESMJEQtDsYwVwesiSSPz95tvqQ9zexe6WxExkFA4KC5xYVY3KhnpcTiX6sXX2tQYATKGwBksq5pW",
  "key27": "4MJ4LFAjcSDT8R8RJdhXobT44A3iZrJmzVg6m5s5wYPcr8pdYsg9BSJ36VuCTNiEtGbZV8GPK5PR4vPuRqncMMnL",
  "key28": "2ENGn6LjM2H5T4Jb1PYFN4ffwCnjyK6YwCtbGJUeSPwws6UYgLB9Y43DetaN3i7d8w9KMwHeQ8E86FGYFbWnQYBQ",
  "key29": "4GmQqhP7vtQBvrHr8WVU8dojLDTvsD3yVMFTima39gNU9UC3haHcQ26Ww5WG6Ebs2SvDxNizCBs7roNh6f6dtMre",
  "key30": "4Wt4Ho9wWbdYtmK1eR2CpQxVS5VPtrP3fUo6JXubThQx6Wmh4Vmuzt6n6oC8HKYnA2q2jCJZ1eJ4SL2L6aGY1iFN",
  "key31": "5njcRuSdBhFxDpMg21HPZQ2JqNuzkdpYWNc1GpWHvMDw1GMJivTQXmjQWsh2EVTNC98Nv4XVk49TunDoTCMVU6nd",
  "key32": "64DLJssNM224eYmNhdeuzTBk7s29EN9FPS7temNN4hUgr2piktcmHKHCvXjyxiypTUW3iaY68XxpyYTKpPSEDQ4W",
  "key33": "4JuetMknM4hf6HVmoTGJJcrXSRRnWHnjFBCSU9Sk2gWjtWopi3it2L7XscHUBEsFvBaCA3vDCa5NKQx9muWAb3nn",
  "key34": "5V6Lo5Ru2MBjXoBa9RrzyJAXj3FAei6soKm1pQt7CkgsraYFwMPkfWpMismbUL9aZbNvhcEMDLpgorV6Seprq4FF",
  "key35": "288bEyDoJXnkspM1t7pzrRTGUQBJEZTV7YUkWRxfH9x2pimbMJpJTMNCjkvi9gdv4xn7BpN1vBYUFFPNzds9vAJG",
  "key36": "5UDzNiN9uz17fFYiCJNrkoCH4YWrgJPybNdU4828YB6ZhGuyKgxsNypJvF8bMyeqHq4a5V4odSEzmJYQvzKUihza",
  "key37": "5qbEbqoyu7g5TP5zvAbDPacLdwsjirYz9KKDyybkCQdkYHm2CWSCVxUGCxmyju1AY71ifhLUR4G9AGehLnFUrPVJ",
  "key38": "5FsgN8jFCatShdK5eNB65KFHUYxCkmmGoxxqPLc2hBiK2QQfuv6NU3t4v8x3mCyngzhA4Uj3zBzZ1JJUPnDP5ppK",
  "key39": "5DwzdNpi1AzMcqYF9XPaMwhwrZHCjiEPqSKMcLDhbLDjjfApRdS5uZ4qip3UpgCRRmuTVMcgQg8YNAeLoAh14w4K",
  "key40": "4qHUYnSPvWH6A1zKXCR1XVFyPgVwUqCYTCuaYv3JaTTFzhrwGHeR6KyQb5iHckP7eQBoHfVPaz7CMGVYYtbPVC9Q",
  "key41": "42CmA993v5zUoMKLT8qN3yH87dTj2YSDs5Y837K7NMNYZxrDirW9bHoKH1oxt1G27VVcZZaXC6TEVMDqm4xXxXyp",
  "key42": "2J8eDN9GhyYy799LKSuaS4csGLBQvnwLThF6ktVLoW5ktig6gRj9nEZCkrwygsJ4weinGEqracYBEA35QQg6vAv3",
  "key43": "5YEpinkjQPqJiACXunqjiMdpsHADcMrMNuMfEh2RvPn3Dqda69MFWf8JW9ED1kXxoaP3jErPX9hqkMvas4vzM4kr",
  "key44": "DYygew3d7Em9kqchh7M3RpYKPzvAu3CfC6YQ87NicnKVa3duSViUGtyW2GdBK2EigknKioeEHRMHRfYaYZBhAPf",
  "key45": "2iac6v9jaEGHNyeYc2a5iku1UiPR39RAHUbSXGVf8XoFtE6X8RK99oMiHbpzdEHtkg1t1mF8pCnKamcjuXba1aMs",
  "key46": "3BX3keDstcoi2LwPo46s7CXhGEu5e9TsRxqa8pCxxpRDqXJnAVUeZb3tWDKEbqi1Msc93yG7AxT53X9SFprDJuFR",
  "key47": "5KJGWBAYshGoSznWWHjTStrfge5VAhZdw8LiAQ6TApmks4YLCPYfgeQrSUGTZAPL527hfpu67hriR4nB76gK9gfW",
  "key48": "3499BcizmJPYN7JgS4wfKMNBTWSWLqq9DegPwjtQG9m6mAwWPFYnkFBvTKUMvs7K3akTSvYngjJ4BEZcPRi2wtoB",
  "key49": "5tfHVyByfBcZyxT4czbM2b71EMzzL7G6UXwQ6jCCaxoWMVXbmvp6xSE1KZuzAn9hEFYdoFARrKJz6dpFecXBP9Hj"
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
