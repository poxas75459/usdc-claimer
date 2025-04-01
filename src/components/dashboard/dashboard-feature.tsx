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
    "3RyQGjJ5Wdf7e51AaNPi1ZNMd9EmNkgwag5GJC735qWPaDJ9g6o5wqghbMS5g8h7scGq3UGejtEkWDBS9uBEzLRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wnK2gpkeL98UhUac8xYbcsf83owAcjWZnhvbauNaK7p9GFrkv1tNy9bDs25E7n8LgJiKEbXy939hSEMWcteTEyf",
  "key1": "GCxfk9x4XGFLSGgaCgWK7xg9uc4gyirQPUpe2UXeN4K2FD1Zw1wBUXQu5jBrBVZzm56zrFuW64reaMeg1zSdrDU",
  "key2": "3afCWZc3uVsyKHgUcmvDLEVrJECGfQ5wvGKhQJUNFPayHAvSXAUhrvKdQrmdbcinyUbRsK8FnX13mSpHm8i3DSRF",
  "key3": "eYWDL9BYZt2HK1DLamv5QS7GEeHi6dJXbmBbcqdL3aUyT4ChUn2h4u2fia4TKTREfPh3Pu9dgZirCjMyjEXVAeb",
  "key4": "GM5KRj1qzi6MTK7Nm2akT3YWZhaZrMsUknGnBa8tvGHaY3jjnw1KBx4op9EBNBExeih7Zb2aeNt69dGwAerYQHi",
  "key5": "x94AzRBiJhmQH8hA7RqPz7DibbGYLsStzhLaukHVfHGPQiNtSfmRgopCoqBDuBPYmN8kR4KWZcpzLD5Ru6TA8Yz",
  "key6": "24KiRGsyCvNx6w4fw1TMCcxfCjK9pSeRAHtS3mR577cgryoHtc466g1hh7FuC5L1v9rNt9TPFEWUXCHbdkeeYXr1",
  "key7": "2kBNyAHbHJwq9wNwSGVj38voCKMZ9sjW5Eo5DMwkT34eACrky4i8gUcEKSxdqSY1QVso8aRhRJEeNLXFvbd6kHTC",
  "key8": "5M8Q4crysK3VNjxMNfyuUnBozsTf29NLKQkWaxwq9pcgabsGPHQPToLaAcx5UY6eEAD6jdcBXDSkqvpULC5DwY9G",
  "key9": "2yDSaE2Wq8z4L3v26Y7hXZ7bBYNAwjo4VfLwKgzjVER9ggynBKLsNcx4Ci3B2hRqboYe3BDNtRE9bmz6T7UagBmu",
  "key10": "3zkzhvp9USmyNEJJ6Siti4mLBGCZ2VFQjannUu89KCCiA45DnCPrDW8fgbweHsZv5tn3kADknP7xMABiFRu6mXyw",
  "key11": "3gdQDQmN5dGf5vMnqVwbYTXgimZAiWuE2A4tx7GQFPsu8ffnhxGH1N3Tm94548RhdvVaQ7stEkWD9ccBUFQXWQab",
  "key12": "2kBsG5mKcnMCHc11ris5XyfhzQduMqpShcm5kgHYNS6ioSr69YjsJmLUtLkxwUCv82Q5jAEab4BQuhLqwWGCZHbF",
  "key13": "5H6YbJ83k4fmPUyUXBH7v5HjH6EVoaCZTts3qzSXeDXtNX6tfCpDZ6bZxhFTiz7t5DhqEq6xxhMYUkmhrkVRUkhT",
  "key14": "gt87Azm2j6NUkL6thCduDpVs78ZeRwd6cSoCCuwqzbQqm9BppY4h543gco2RyG4y9ywWMvsBf4NDxXSnzat39VR",
  "key15": "2odrHfrkYwE945MHMQytca9Eyy1dLELScTXgK65ZWMDzkrmsG1zwWmLTarGg5EoXG6aob8DVNZaEofidxmBSEFUd",
  "key16": "2p1bgj7KqDY6X3Xto73HFeUhdrz96AqdCEUmnWefh2QwHiRxsnxgTrD42UahtNir4SHwpkFzQ4Mz1KHtXNUGbs9R",
  "key17": "5nMC4gdNRphZEnkR5dceQ2cbCR6Ux2sWromz8isebxuunFumqJH1DjRpoE1y4bjxNm8wmvVG6c4doUeF7xNv5Kff",
  "key18": "3eMnnbQ8Z9QkVZBUZS5mMsFSPypijR48pbS7V9cN6ueXX7kMCwbNhwKHn5ez4c8hozYEPpunWuEbMg7jFjBXqGx9",
  "key19": "5X1Fpp58xy6f9XiEziyeV5oUbSgVesANjXt1dMVkAo2TaKKoZN3gdKvH9p3VZGDTNvzuWf1hw3AMzioTcaAoTkL3",
  "key20": "3JeNguSbZp26S7fU4QxHuJxZM2qSoGZfbtRkYCdL35LtdxsZnuWn7WtocVpkqSUsq9BUmnk3xsemC1M5YEAAiNV9",
  "key21": "4wDmRW1CZLjcxmf6bhurtVtjSDxjPqxRxvTNAG4gSChGjMANDWUbF4cgGntdRqTMzNxhnuPkV3has5kcX1Pv1qUh",
  "key22": "DrWEL3zaX2PqSaYGeFx7RGwHNaFbs4Srr5dEibwzNn9J8itoFsvWdCfV3sbGikvZowxNC7eSHuKWCbhfpDguvA3",
  "key23": "jwydzgiLDSTqHRujQ24mb4ykw4iX8E8U7JTtAbpFKDZ1kGTTvx5ZPwRDvQbq8zQJMYsroUEJajCHxBSEhrPDjnQ",
  "key24": "2Zx8gekHhsaLwkWNPDqLkRaaBe6P95WBe1Tbw1Kb8XSfU6RPQcGa4fjZPM1AfvHKTMskFYMe5XyunLD4gcTrtmQu",
  "key25": "5xa4SA9hgsuvfgsyGRZBwE9sM2zGffjcYWm7z2pJSezxGon62SQxAT62U219HNjqJK3MLUbdYDAWcHKBkGnRnpmJ",
  "key26": "D2ysQirSNXTPdQEFWt8wsXvooY3nZ7iPUqwftg6BLfjo8xH9mhgDZ5qsaDYiFrkeKictLudL9G6ZgXpi2jhKE7x",
  "key27": "3HmCXhyt8uYVr73zH9kfUH7vo1L8XuAzuKjpMD5yAVqHPCcAKAQjLN9CtvzhgZpLZZqDjVfMHEFyNjeAVTKjVZUG",
  "key28": "4nkCYWHAvhAkbiSnEeM1FvZCCuPTsZxziNXuCKihmnCEjmk8dE3v3DNiSWMV6fbuDZ8WB3yEp5DmbDxkLASMRhtc",
  "key29": "5DPwAHQQredFmRDaaMfTR16BRMofwwsTiGeq99QgLccBvxLHferLj8Jgtu3WfRDyb9XjqhrwipdCGJbqRY93WEVy",
  "key30": "5FVcLbCw8Bg52JjNdNHPEYfqNw9odea364Hwotyh26SeL6G9jS9yehgNe621domf8kmBNeiXciY5u2EM4UtM9mmH",
  "key31": "MT6LgFVud8kdJeezcuqsq8JpD1iDsXzN6AZ7bnVUyWvLEnLw8udsDE8LQP3iu4fgZeNtz8nHBG1MAdswCiBEAF2",
  "key32": "5mYTrPS17Y2od1XsuEsd9aoHSP3gYLAfgUyaEL59PZiHckxp69J7ra7VYaCfKJvJ6pp2nqpZcSf4aDvxTr1FW33T",
  "key33": "PPHHABCZdcCWR9HafDGmxgMDAyYPDGZ8V6oei24EW4AGqDM2sr9WBoYJ6PaAc18ZKuvs4Xqc2vGWZkRLAF57oWK",
  "key34": "2AdEYXyokzkJn16tgrqXhT4F3JdD2rNpLXEhzHbMFzm4K3WdXXWGqHGjQFcdXMCSDDbhGvd6TwyATaGqV7TQhW4M",
  "key35": "LDcR8TgDRZBRTDrh17ckb7w3tDtjdXYrRUqpNutm1ueCtxp6SyVULWLbXogk7Uo77ubTyZ7eoZMAwhMscJYo9kX",
  "key36": "4LYCj3zLjozDQbxDCHyGQZ2TtEc5XSJSUsqSsiCPXLfdHh7EnoxTstUPbFEw3S7otj6KxT8vP8mfdV6gvzr4qF1m",
  "key37": "yvFmmNhJJqhzwRVccN6joXi9uceW6czkkfcPxoemjqsciyF6Wq4H88cjYmdmaMdk4NDge7jdKKiDLWH5YSX5xVi",
  "key38": "39Xb2PeEzLWP4ixCA1aieY574q5kQFdYP8KdKs4jcach2UrMP1UpU71z7w8HJsqcLoDGLfR9aKkaj5LtVXk2vXaW",
  "key39": "5rGKG4a5eLwigfGVhENqDDdm1GhypfipCV7S8TysGH2UpAzmFsCuemRGTsLy17vLrqbCGd9VrPt2vxBR9Vgw1Kyx",
  "key40": "5QUHXq4CcTpTPRgdjbJkb9mv2HnRk8xChjGbX11BiP7qp1sy8ruZ4G4ZCGtk6HPCZEsbg8Y4zEjFA3nMTSb3uD8C",
  "key41": "62HJ7nBbkkku17iC36qWkrDv9VKBjTc5FZJwBKmrXd2C6Gerijo9oDHAwZYC2JGqcH1EN47fsfTQQqx749hSd9fe",
  "key42": "5ny2x5PkjWBv48DNYLPdyoXhG9157npfwGSSifnWGKaxjXt31kQohhNK75v4w8tErfQcCrUkbfGTsWh75dR8evuA",
  "key43": "7YLhFRNJ7Cyhaxi8TqtMhB86TjCRHyEX4oJUef5PRaGPD5nFNJ3gfyde7F62NL62NRbPTMxkZaFULuVn1N4q657",
  "key44": "4sW1gCmZZY4zwiHMnnJsYx4PZ9G98FbwKUCWZgVuzZnADWhmU7dXwH8LdWgoQDLCa9BAw4ZvUCdjYWc3G48JHx5j",
  "key45": "9xapnoMgVuC4zanmyQPfhNEvi8gquLkB4CfPK8NVWfXRRDhQdCS5d6TTF9LiMEwMeC4wyon5bf2eP8vBU1Lfz6D",
  "key46": "4ZbwSi1gpemBjYzouqNbd4mRm9DjMHyydNYy4dSsY5CZTkMThCuubK6F3Fn1HvP52bGiABUbsn7wto9crzPit1fm",
  "key47": "rDentuVtmnNQoy4iEbN1g8dCno736tdCJdYsnqJpVmPu3jCoJL8LkHHjfDGKqpDUSLpsZKZ8znkmvjitXXzNzqE"
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
