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
    "CS7E3s6SsFkH8VKwrX3uyFvKQZEBYLF4v2Lh3GyjRg5Sxz7p55ScUgs5RT9naqafwyyq75ri5LyHsrm4SjiwYTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aPib3bjWpTi5sdSah3zM3mdUsAVyXJ1jNNYRviKjcewvHompNpHBywaKi9Hy8N7TJJqcsNLQSizJwtYYFyjwF93",
  "key1": "3dQqwqLhr56JYXtLRNC1jEeEPRuVXfU6r6o2PbTJVMPK58K7uQeZCJge5RbrEH3Ah7HV5ZbK6QKPW9CcCrVR9WyT",
  "key2": "hbcCXYQU3LR2UDMc6tELxJht7coEYRH4SVsfDUDWKtKuC8oKYzsH9hmtVtiKzgSAa5vLkvH9kaTakfvVQZGjkBU",
  "key3": "1bvKGgWUKz3VYGG4DZNsDZkSifjvB68uS1pQpQJQG5F9hrUGEMJuGxeZX2oS6szvEtcasgvEW4DRvu1Tta6JhU3",
  "key4": "24uS14oFnZvkGrSaPW6txAvbYVbxFanJotQa1kxfTt3VhzfaaxkXX5gYNiPK1WGZVRCCciP8zMuuDTxPirazaaj9",
  "key5": "eNCTFm724RfrC5g7AxAaQZw1nZtbgRAYUfVVnTrdGPxSwPbSqd679UUNMf5ze6a73ciM6WAvpNcpgmn8dBHquZC",
  "key6": "5S113A3NxKdhYCAww7WUNgFSb62TiFjpX9yhY8WSH1LS2tYWyKbYNb1ZVmCpiGV6KrJZh5JVNHDoBJD1dZdnjUFz",
  "key7": "3Uis5EYHeHtYmkQzRhwifUhD1KWBLNAxPPPYd8wbXQAnuCeawGGZuyfrQBefNc7GNo8D57CbHyruS7JR89DW1Bqu",
  "key8": "3tbACZ57Rc6wUh39y3Rdu5Vgnn8EvvRVidJydKeuFAVmKS4Du4bKaNEqinr3xhkJb8552KZTpLf6oSv55PDaCBSB",
  "key9": "4qbspNtQDzpX69HySV7byZ2BsJRNmg5nKjq5Fodd5kY3w5Xc3YUgCUjrJTWsc5YgJrw1ykdK53zmyncNUKThTLPM",
  "key10": "3ZjjcVEa1q8qv77TkqNr4bZpGw1B8K35JBgGAv5aW3Ty9qqfdqG7C9c5KNBDA9LCzCcry7tmjrEDnvXgReQ3ujEK",
  "key11": "5Q83HkvwZR5swWmG5hKnqDDA7atpRBabhh9aG68ry6kdobsmWM2sxH4eJVUVG9qvv7e7W5iG21Zc4nGyBUBUEVUv",
  "key12": "2v3AvSpJMXCPQCaLTqueT14ckkXcUM67c88PCMgaqxjEzdDvAUg8KZb5kXcrKmKxiZiZtn8ten9nrdRZHcEggcnd",
  "key13": "5cMvL2r1JmhpPDRAN9nCsC7JmPqEgg6mQUfCUi6JcCfbjYFMYzfWQzZDQwo4mgi4cUcWT83LCi8NrpydJGqzZ8xa",
  "key14": "3vezMsBZ7eqkkAUKTxoMbQm6EpgTrmMxovkohrj6UG6zvuotvPpuoPAKNns2Yj7SjfgSGwgxdt9Xw2WXUxz87Vna",
  "key15": "66SssP6hmXHjDFoKXnVPNNRRtwJr8ev7Tp8EnxFk9g8HENKjDQCEMqbskNt7BfUDeBvfberHUNL7Qy7TK2cz4nmW",
  "key16": "3iYDuMbuvfJs4Da2Yjzu6GoR38126mvbNdsyWAVdEtm6BxnXgEcMMJ51bhpZ4bzpmPY9BrasBsgQuvR7igpXVKVZ",
  "key17": "2oNrZgScEsiV5UWNH5mPVcUg4abhc8h9cGNxPhRdcpFGp3P3iU3Nx56qLyuRhrSTVDD5YBYL1WujyzJTccExP9YH",
  "key18": "3Lyt7gEGJx4YB2cG1Xpcyq7bkt7nG4dUWH1314ezEzP7suRvBo3rGHzbLRYKumy8PdLq8a4Msuse3hLNFBnWKyP1",
  "key19": "2QDGqsufyVeYqBXpHtgeDWAjMmE1wZdZ4TRJr2pNhFeANVhA7kA8LfDXGC9kazZVgAq262pBzAdx4sBb2qN3MCa4",
  "key20": "5kU2SjuZK44Pe5TNyxugyt3qZ2yEU5VcyqCFJ56DGRcy3QYjtz1cThPMtSEEc5oqH3qGU5u6eaCBuVxFm6WbMQP9",
  "key21": "5GTRcbxHoL6n7BXExcgcW5KxVvyPhd3Y4MA4nVrFmx2kFv4v15gprd9Hw4w52u9B3tNG2VCW4gL2JY6x6bFmk7z2",
  "key22": "63ZTCPseaQigPQU68jLLsMRLSjMPgK7UGZpYRiaFdu1DUT71LgJSjSZiCqWJbBayVEKQJGhKFYK5VqH6BeUSuorQ",
  "key23": "2iu1WdvRj6LdVaAnRMZjot9K97TM7R59M2mmjYqhn22vWDk9xUudAdbXfHezKD6yNxTB5jA7xxyBSzU1Q18keDu",
  "key24": "Ki88KwCqSr1qiJNu85A3QWYrx5J5thqHqd2WHdAWNQRUCS1TDPkYMMMqEaS2p4UdVMJbPsWXoyAZ7jgioRUWWEy",
  "key25": "5Yp5dw8suXgH1GepXgWEPVp38VLFVsBCAe5KpKxL8QK1kZNWPm9uiBvKmpD49vdGVFN39GpQGRrzbqJ8g8Xuve1t",
  "key26": "4Ava5hE7joLpjgSrbGb4SLBRTujGZJEzZhAUomWSugZocyfC69rGuc5JWVpM37BBv5SDyJrRvffHYsGQZLMbFhfd",
  "key27": "2V6yFn2Ed8pj2L9icpmru6JfPuKHcokncfB7uayrri6i1eJS9WHezenMmED9QmLYeuncFBjeT4yrWdfjZjmmgLiZ",
  "key28": "3gzjTmK51YygpjeWRgd3pzUb6KvicRun1UsoATRH1552SskmcmTpSV2cTotQAPuq5HP9VUDGAtQ7YG2YaFKnwSDo",
  "key29": "4KbLEyF7V15Cy2UoJhK2hYPX6mohX83hC8EB2HuH538BCcCmmKDGByke7UuUixeoYPx4RjQJwLX5DBHPRXnc857j",
  "key30": "j5vX6ehiPdxgPFzbtinQMVgMrgu8WcvqgVzTs2FwbULyATajNzEND6qTK4dgeu9eoiQqEN4yaq8whTaXBX42Bae",
  "key31": "2DfYgCiNijtcqD5H1716ArUGbzkaFMvqw9UDESBDkbVfnQThwA2VeQGeoN93npGMLHvGRzF7mJBCNc3Jx5QePp7G",
  "key32": "3E32KwMmxyub8YNRny4pDCTsSLSswkWZhnWpKn8HPuFuTgY7XYgwtjDye4WUUtSUhsySiUQBJi3Q9PfSGG555LiX",
  "key33": "CiQtU4Ud8zkf2cBwdi8XFzowhB9a8My6Qd9JxY4EEvESMBLYtpypJNKTz3RYacPwcYxi3LgewnU14Ue2C2fKEGy",
  "key34": "2DvHrHBz92UmbTbYZpsqh1wJxFvFAtqTapRH74hgwcVK6qeMQ5H6gQkmJKQu4K9NFwxqCkbEJ5fzu3XhXmYK4bBQ",
  "key35": "2WyEyqyVnGKocn628WH2FCxo3TyiThHKSMLq5yfK7cUB5NNXATkJG6uhCW6y1qmVsdmC6m94g8kdy3qiQGM7zdAz",
  "key36": "2gDA4efd914YJe7KjvC6xe2L4WDVfqTz2TNUUcvf8B2Z6n5h6ghWyXN4VVMDhHwkx46dJ4tgkif5NBzyxZK7r79a",
  "key37": "2DcR8ptDtFmAvLUTkB9WzFdjiqGnM7MvtwvTfiM34QFnEkRMVMVUQwD3ryAmiNPFagFh11cjnycVryerdfJtbKfd",
  "key38": "2PG5pnVDMGxJtT9tk7iovKQprz824hqRFYFjKkiAYWh55eqQjduNFagS6HCcBoR3cjmA1ZstZfvAJCm232ScPtLB",
  "key39": "KGh5mhaBL3ks51FzctFRettwky4QqWkxXKKNYdk8JGU6UwJyHBLpbjZScXFHnQGPwxBvkQWdfpSizRmzgToookF",
  "key40": "3Ysh9Grmkpe5DRMMVD693fTpv9zrDyxSU5ywjutpfB5bg5wowomfRTyo2iYx9gTM8bxS3tFhmCNHqx9QqSiuy3QB",
  "key41": "5sARKvbySncwtScB4QBzMcQ7b2S5JaY5qmu1dVzQPy1wsYZdLKuwWLvoR9DaL6rpwcLXjVZHSMqKdYxmpsUdW3yk",
  "key42": "vx4WBNL7tdnkwEgm7mymf4jBLYMg7TQ7LvNAfC3D8mJFbi6HoJ2j9jiwnJvMzq6N6otniPH39VrMtGT9cyqMsUf",
  "key43": "2qAgeua62cX4NyFZRQrfGdJx3BAVu6nfvw1rvXUpgxfS2FaXsTEJ9g2WqgZduZqgu9nbkBHjtvcqxu3Xp8DYB47T",
  "key44": "4WQmdE3GmrxyC2nLm6pFDDMbiEZrBSH1V2YyCWmwn16DJoKUfU47baTzm1qvwHt12KnvZ59De9qjUmocT1k5J6Ry",
  "key45": "3j1N7aATThBkjBCnZgimdwASrxnFeSBrFwBELFKQUgJngyE3bJoG52ejqrHubHKMTCaFKq8ZJbBeEd6gojonPPgd",
  "key46": "4hAWKnoPF4ZCADrwYfraFowm2cKE9UbyX5guyZaZEkMnAxg4rGxuJewxSy4sahdeCfNB69gL8bTsazttHZQ7Ywm5",
  "key47": "QwdkLxncnv8khu36ZiBfMRZkZXyXpchr3GwmNUDCQ3Ny9exvkTHPXpMsbdWerpJYbq4ELdKCnudhcbCt8MvwYau"
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
