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
    "8kFkUPKUgpmUGUx8CAagKwXca4vSRbWAb3UwZr9Y11WGLZS1nJ2KVPBquGjA7Ffmx565pfqNS2cDxYyFgJJFqUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cB5c4FncnkamZnBYmNz3n1g47pDs6jwQddKxyKoLbDVGq57ggcwP2xAAEnrrshv44UsSfuzbMEqgjmVCXf53Yuv",
  "key1": "4vJCbbeMg47KTrr2pa8iPPrvqSn5Kpds6Ui6fB6F75anvVqjxrBdqPEE7uJKAVLAoHHVqdR6SVhGiBSfVd5eZus3",
  "key2": "4oKfQAh1CCMTjUEvmiVfu3gbfNpfGTthx54mho5zggzbbz2gLNpPLLH5fgntPRJpQGHVzNnRcnQQf7GWMNq8Lkrg",
  "key3": "62aCm1igzedZDcNWse2QGM69VmbVv5a9DS6GRdjXFKCoTye4hmVLVxcYC4LPdqo2sVGKUg8eeBY29FbcSktvjWiX",
  "key4": "5qDFxCugYdnTBYZS4u32qPeW6h7svw2dghf7jvdZ5H9iTtWcec7e1XZPy2k5GhwzgtjVJ6hucLRFNdngS8V4CgZn",
  "key5": "3YnorfykMHiybdPwxSA6gFYx8SgJ4RdxgZ8UagdZDdwsUvPuvc75HScDZKyqcUJtaMXxWoSRuNB5zTgMxnC1xL5V",
  "key6": "5B2Gn5mAJMLyNo1zosuYsujveaDbi6SmcXRA1choQNkrENvx366Jza6h8JvB6BNghdubGxNxxAWpnXRymtv4wRQP",
  "key7": "3simdMiDPFNLjXcPQFDQmR5cWjdQaNm8eNabNXpNUsWeijmUUQ5spNAGCdocHXQkq6W2tsc4cryixcFX5ce2Z71s",
  "key8": "3GS4zSUyzYn5EJG44reH5eNm8k9gGSZXCnyteZLe9XnmDPRFyfgsc3J4UjsFUcx2VsiT421URKhDmzwwhUSFmySf",
  "key9": "5JsMtECgWHKAG8ds5yr6y7kdCasjec143EefLr8y651jLsW9kZhngpzAvZGocFickXvc8p4XhbkF8t6vUrgk8Eg",
  "key10": "zLswnGqNpdngMH1LvUpJhFmvka2hMaC66ZvPPBMGQzC86GL97PaAAZfMy1LmBSwNGvinSgkdZDgmynveT41bNdC",
  "key11": "5N1A7iqTuGXobeDf6FXNgSWc52uY9h36s5piXryjqE4HmJHEFwMnqiT74WgrhgzmUnN9xeKMrreb3kRJ5qkU54jB",
  "key12": "3maN3jjAKUeT9aVeS74cAJC1ciKwFnSUgjyVP8SHwDTZRbSG1cffGPDjtHqsU5tpXz8thmWe9DBEsnWu9ttMvFsP",
  "key13": "52U47dRiuAMrVqPkuqHtoSJLbQVPQ4dFq1rYp9TNwbc2UvWpYNqKconEsQEqRrH7rNBGmoTv6Z9JtuvS9QvgVepr",
  "key14": "49xpDjkGTWcW3JEgT4i8tvSG6B6gCqNUdnBw6H2jQnsHM4irMYXnkcURuA9N5zQxzVJbkSmMYeHsW8TFWpU3sre7",
  "key15": "2gqd1CZRwZQ5Y8RebMbGdbJCNnXPY4JteVFF2v4eKHqwJDpeLSDcyKNUz6c6SbcPYcfZQNzQEx2hAr3qatARusCn",
  "key16": "4zkuC4u49D6v7kPHwiLwJYcaxJKAKzVUJPpXThoaYUFFVcy2Z2L7Q4mnoZvyJxqgv29GB1sMEfes3TnuEHYTUYZi",
  "key17": "5Y6HzQJpesvh4mMic9nL2KRS1itwtow5xuHL5jEswQmFY5eUzGuVJ3yktGHQQFmoAWrrks1VH7awP3fK5SeSSiDy",
  "key18": "2Rt39CE6kjZGEDoKpLDnh5CH2weXhaxRDctufLvmFJEztxknGcZReq53NFxiKKa2ecHVrnGBDsuK76v9Xqah1Hyw",
  "key19": "4uPi47LM4aFyEwH7PAEtaEZYumWSKuBjx4ucQnbiDyV5G6HFMvCHQJVUFxffUWXL5J2kwp35x6FUVoeeW9QesUAx",
  "key20": "4M7kTtH4rNCUxUYBfUYA2hNDDqpohAKyG1tkZykKQLMtQCHfW2hM6UENVmgJnEZkeM55fMdVHu5gjxPMDAwymseG",
  "key21": "5BFzKvvUEtaXtjHqu7hgsMKJjYcc8J2CzwBrdLmHFRHdECnAbbHFaTqBdzcchkZkAkCZv62QQaYRANtvsBJ2k4Qv",
  "key22": "K6SicpWDHSmswmNCkMU5rSBqA6SnGS1Lt6xBDtm9JJ2K46ga5TiL8BDghuG2dNscZvs2Qj1TQcx95KrVo8327Wo",
  "key23": "4FpPXFcTvnVmwywNM6xF9XKNEXbcKuu46G3xoxQq7orrxtAxiqzct9jbaJFv2m1iHWSRvJt5gvi9Jh4zWZcpXtRU",
  "key24": "6NhoianEMNnoiC9ES3BLyX3vmKiJfeuSvEvzeSVKWEK8RAueBt6ZNivcJaXSGRRtsnpKMzsVPoqQ23HgeWHjbF7",
  "key25": "C29EQL9iwyzGTPJ6JoSPFgDBSRSvcChjjxngLtkYNF5En2H8uP6KVa5BcA4zUwMiECPJQNB9tRXgYdm3ANMgKyV",
  "key26": "5sjAtMwvAfVn9rNd7qy54L5hGhpovmyiPK6AdT1gMYLUJxcT16CUSMwNRdcCvAkfcXgyRudDi9YLbJHrrLJpt3Pu",
  "key27": "KkjiBXuANVAJ7v66z3Bzcyyn1wWCvMXHMb1oPuX9oMdhQjvr8Gp8KfKKaR3uRcWYjbrCeAZ848ydDrYFr6EoRFw",
  "key28": "3rmCj3ek8xUE8rtLtHj8RtfEeUdWSCdCqHhuziEqDxRFzD6ANUAV5UcyszNRJGamnMREB8gjkeGkLnqAcsDpVPy7",
  "key29": "XnFKQf5qEP4wxs7UZSMoZxYyf95w8xv7oP7ntndZMgYqs3gYg9zcUyG2n93seGjtH1kouLAXLK6UW5vNdfA8me3",
  "key30": "Pk2vt8WSjVLUdoy18nU1zfxKSpjkNgChMrVrxgfp3wUzi4aFjpCk8GPXGQy5w6JVz8KHUG78XTHaMPBT9zCWnCf",
  "key31": "45MPNe2AEtxN44seTRNUhpjNSpmG3pSK3g59jsucZSWQg7SDHZDas2eR7DwxFDvDJscQUUr5wW4GdCF6oapZ88YC",
  "key32": "ZssavjMxF3exR2f3v8ZehGexhT7q3YuCqpQzPNDQG9Sy4HDHyVnENZ9GouGh4ia99kaLP6BmwhaHPkvbkDtGymQ",
  "key33": "5cxgJd4qoUjakZV6ExV2TKovt29GJRW9ZNqdnVsSESrbKfvC4dZBpqYY6L6Q3DDsh6vw1nbaPL3MHCcG7Xuxxj1J",
  "key34": "nwhjpCqwXgdEbXadXVdhejMVB8788yH4jxpKHDCr1QDsyfFix3zeRtuPTXFTFA9gSJfZfknSs5R46rVRHPbUZdd",
  "key35": "3Gek2NMS4WFemQwtHT4TcPJfQAP5yktNsdy8Yjzb8oDPZqa1Fzo5USuFJxuh5BerdSkfxxmEyJYBJR5RVZZcJx7a",
  "key36": "Ss5Ftk1ryzrDMaeyawktn4VV86eAkCzpoXvdmJC1fSqiiVi7obiXC5HGCoTBgWEMJ2Yom9ozoP5NTa5g77FVZTi",
  "key37": "3nBH4PQ1zcJYmFh8LtoVfB4LKjSaH2fVjttNgTpbyy5ofRvJxmnr4vVx5xeVopnhtjBxCgJG4bDYTPxM72kJB3RC",
  "key38": "33qHd9sCtPWzqbZtwLT2UmniigEQhSRvnnHRwY3f8sBC1Ybr2cqh1gttnaGCpoFEpVt3FsW2DbLsP5a8k8FMEEzb",
  "key39": "3gD5pUbxB7mhH6iswqpjaRDDZ7i48nzzoWAAj663VhJJ6EwFEfyZm6oVxqPTXsDi4Y3yrTD9ujsC6ot7SzYbr4v2",
  "key40": "4TgsiW9zmFHeEvCVKJhA8C64Gjrrjnu86ML4BqgHYqFG8Cd6oCHoy4iVBrQu7qkgf4TWhMmcU5SvSp4go14pzwrK",
  "key41": "637ZvDYFBfqh6Gj5DLy6FxgU7J7Bd7Y1dyZuM4Se8P9j6KYbP3Mr4ePgQzaxh6D3XbFTLQUPkSbMbuA8rpXPF5xW",
  "key42": "2C2ePj3qkkFtq8cJBCdsXTcdJddKVAjQzDhiZfDbSsyWczGncEWW1wQfMnQR6ucRFs2uxqMgScufXiuudaRXT6w",
  "key43": "3j7YwAgi4hB9dsKVJcznmUmeb1NW2xg6tVnmkySa5hJZo2VR9aDBb6H963DDKgnSeJwfVY33pYuKKWy9WxiUy47E",
  "key44": "2zzEwxALrfAnTUDUjioRf7fJ6csQYX4PNx4SbfQz11wtiUviiQf2TsDqxyMeA1vN6pQyjez8eNTfv4QKsxzzfoBq",
  "key45": "47sQTEkUdi9Khv2do2LggaQsG1MdY5PvuvM9sCt9ZGKgpfyYuqqJ8ZEfaex1JbKrb9snS44Mo5bxQFjQC6aTjSMT",
  "key46": "4tB1FNmnp2i1oJcXKxW28yXymKTEkpp9xLiYngWF96Rn7naBNzApupw4nkPPK5ZxS1rimgJJPAaDWNVN6fViEFgf",
  "key47": "3LZ6jmCsPwV6BEcrjUUU3DEVSC3E8A2ZMHzA5bQoejsKbeDMy8woaTgT5zLVktiRoUs21N3hG66iiNUrxaRKae3u"
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
