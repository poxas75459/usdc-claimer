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
    "2qd7njXih4MMPBC4mv92QqCWVSKVYPhbmcwy7WRt57WRKEJSDJmc9YA5vDKbdKH9jzSuy5SHJBeBa4HDDZxD8Bew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pswkHw8mAcsiK4tnU6u32xVV4yaiBNbG9MEajyKxhnjvGUJP63eCUjwXLVgZWPhg8Z7jzUVx4z81MqNFopJeeQj",
  "key1": "3eo6Jt7AwRaQQ7UPEM3EZbS8Kr23bfLhm1Q4wFeco1Qy9K9Kvmnj6VRnYFx5jDPiugQ3ZWuzHRT2z4SLHx13KzBW",
  "key2": "3dUtxWjfU7B4V9CYpPAufCTXxnXeiwqELuGvA9JmqEWs93sPnUh9QwRSdHvy47ut5sRFEsmumGV6N2fbuHyLecRv",
  "key3": "3iuLYtFiGeqHu2aCG16YYsPB1uukLdw4kCs9f6BWD2bnNU8m16zyRt41Sae9L6vSMtrttRg67Fr8MwBMTNhcQVHE",
  "key4": "AJAXhJzmbpy5H9uV6Fh2DNndoDjByHTXbCQXykWnCLHhRnoTtC8m4CFTx1AGyrWgUbVgKetrnWGF3sGrenGzkGA",
  "key5": "1JGQssPmZcJogeSQkHJZ8wvSrPiv8LChUrZqr3pzBhW2t7HP6enLWxMfJJozEz7uMach1ga5uYZCRsFWDzMuu4F",
  "key6": "3wVm3AiqbzGNBk25K9Rixcu3FEdVtHF9ZHiUe5xXLekRq4ZLggkLAWM3pB4XMaWirqNwXPxKRNwyoyA2TLpK5Gsx",
  "key7": "4zoEndkAaf7NzoB6rMnGge4uhMDikCndkvpixiHRr7Wq8vX1KdiPHZE1Pn9iRC2kCdygRnZuzcYwyWYBYNkbua6t",
  "key8": "4ZXJ521rZRcrDA1piTthGx3z2BZgpG56nkpjfBXsKf8tPqmfwT37u5ep5KRQRckQ2y1DxTHxuUAVgpBfnNH6PMDo",
  "key9": "5oVMXn7E295TrG6UHzsxCXvz4LjdhKja7PrdrZDhDkpwY2FJ6uU2fan9BzwdSX7nwaSmHpzTVTpAerte4gZwaKS1",
  "key10": "2d7hrtvqGEHoJUyCmuYz87eS3CroXLRcbXghduxgqg5sw8jSqZiUjR3okWu1EbP1XJPSudqBBYMuvz29nHzYBKFr",
  "key11": "KM9GStGavDMqRinFNv67paktpN2iayB4XGYLVjsH4AHEL8gE38HPZWva7VPQrdF1q6xc7KmZhEuP3NNyqBrKptK",
  "key12": "4Nsd3C8vyxdsGe8qsYh1z5CTKDNK2CLFBJDdPm2n34KKERWfR14fBujfdgwrUuU5t8cLnKZep9SWGrsJy1u36Q46",
  "key13": "sttLXyTaskgwh3kFKt3nSyembK32vigY5vA4jMVeMT9ftXbSgUkNVPLRdvHFBge89pnVF3Z2S2hxviuMMstjCnk",
  "key14": "2PTY7Ug7qK2sK1soBqEBfmbG4Ytj9kEK1imFnCg77jEDWw7E2S7ncwUdybkBXxjSJdG9cAfBxDsYcL62mFDtYRRi",
  "key15": "uH3wJAq1W2F5uox1KMFBdNWYgC9v3UvUfmX1sjj7esHUEfDE5kVEPLDt9Z2KXBBCYgEDEaMcdrWABjePJnsXJj5",
  "key16": "eafz1b131LCZMK1kKRPFcFjJqgQDWQSBdgEodiMzc1ZfS5MHrggUJ47GYo2298h6hWz41c4BiMAJWEaz8Cpnudy",
  "key17": "41tMcGFckRnqUSVbdViWThPf37eQaJKb1fVxBqFdmHT8QGgh7f6FTHiHpQx4tauW9dmWHuWffWrS8Y2twNKEHGth",
  "key18": "2a89CeSAq3jPRbG1pc1qYYURH8uktPyfhMXstjEcBwo2rw6Gh63scbFZzsswJbW7bnx1kKBM5TmcY3khw14W9J6F",
  "key19": "52bKr5pipFgJRtSdMyCJJr5X6URZmHh8ZxDEa8FvD8NnRchhXGBUMLdRqR3naeSFabPwDvbLzgLvjbuZVxX9m9B",
  "key20": "54Zstw9LiQr1TSKetYvtaWwanGi876753W7JxbL2FnbVxdwSjWqVXBEszGz5bBNvTVZTR1A7Qz1m4DUmYjnLnaj1",
  "key21": "5xcRPG6GxHAWBbyjDQQvqZGxSEhisDwUbK3CrrQjMVXXn1TUC8qsCYf8cGm5T3UK3qcYyum1KipBskXo8PJiE5zY",
  "key22": "512vnLDN7Gfqcr6gqLQJcxsRRwUPGjAsToJDbTUgqjee2sRgpFNzA8Da4gv1esui4yYFSEvfX3Ji1fbo79Y1UoFw",
  "key23": "2gkUzXfddTyCcCQDRZ6HBLQSWT21tR8YY8dSoyxUv3MXZVwcb2b1D3NHtsgkgpcJFpsWQ587zUeuhGcWCadWCYZ6",
  "key24": "4VkHv3t9qVqNjhyVyQP9MSPPbu8vfdjYy1mdhFEAUCtiwJHsZbvV3bPUdX6STbmkgMshUBo7MXAU7PLuXk1BsV4R",
  "key25": "5BVDQhEQGde7yPAvqogQATucYQYvP8S5M6Uvtbhsukqi42B3hKLdHYGgoHGbw4QyAM86JZw8dRX7uNaq7GzdNB87",
  "key26": "38TScuPp1pCcQrMqzECuqTmkjnCwY7GMgT2B5RYDntSFbkStaKeRZE83MgfXyBTfWcXQj68LTfBBsuBGMTdtCfK4",
  "key27": "4XKSMgpAiRz2S4bpxmfwiUEfNYimjfEjLgzQqbRwF5Fc2UYQhL5iLicfMNwGduMFN3ujbZv4yH8vduEsyCozcNXo",
  "key28": "2sCm86vwaf7136BEVch3gTUMSqr5XoUNvCyu1T9YbEDYXnEndrFtSf5votYktp5A5FAgFzZpnuTH4vpGLa4xxt6a",
  "key29": "2EaQ8kymM9VxpRbkfML2i8dD1i1TYTpgzZr1gv7yntJJ8gMSCbPnSiq1ZNxU3s7zK3AxCR8ckicNEWdiky5Jkb4P",
  "key30": "2y9AYNpGVjcfCEiStrtRE4aqyToHcnabZL5sfqTx1jr7y3gR2b7K5xYsEaSKvqBgz5Wi8AnuHuEpwpsUdmGhMoDM",
  "key31": "5ticr5wks3WqANhAU6zCTgCBzg556tknJznHhfh35vHSuwFJFSNfSSzoUwpwZ8wttmX3M3YSSt3YzbwEkvd4yE3x",
  "key32": "2HHNGV7s4G5bEzYHTKErLVeC76mmCNAv37AFmbgwn9TNv7Kayoqw7geKMAJBbcLTCQxNzH9oGQ97VdGEi87ZYAYU",
  "key33": "4jSsydVwd73hFS4tk88CJDGTbG36kv65mtHBgLamZGJYWyZ35SBnaE5poJRtYPQfnXSj6GDRuj6ETz2tKRtw5sjb",
  "key34": "4tSZWhKJS9t7iCbZ87KDoSuAJXcM3nU8WM95cArmpPZEhqM4GPd2sCUFL6CNBWisb9ixHgtU44QZFQ7KdnzXWgaE",
  "key35": "42GbxheyYCRxGRxF4kkcRxSbfZAXX3HBTE15r1Ro6cXbnuBcFbnZPkGqPDmvMjyyFYrTuWgxct14vvf1bJtChp8N",
  "key36": "5LggenaEsdXtE8Kq2pASxxmTtcAv88hayoHAxGB5tbJzJ11An1iiby1mwoFd7dGDjyNV8EzyEBY4Ef6PSGhWzSgj",
  "key37": "2pmDq3mzYPAXkrnPR6qGHuwooF1HPABqEyDpNfGUukB8GpKPZwSWQUckGuVuDKUsb57fmh6sHwMSaZx9azSekh5f",
  "key38": "foFc7Lx9Y7NqWJCJVKRzPhc5fgSzKWU4z1pPxBw4GuTNiH2bK5UzTueZhf6fgnyR3XyvEqKNN3UxuLESSwGHWso",
  "key39": "vUwFTmxNrkRp75NcLupBAw1F8KyLqpCszUMR7nUR2xv9agQTg5VVm8WYaeA5vMNykxXvU5rYoft3hX5ir9oQyNG",
  "key40": "2u6XWjaX6bEs7iDcnJFZj9yJ17WYAVe3kHBp6ia9xTq8tg1s3ZcuJYBJVid4WpE2Y4KpgAxm2jAesMMeyBVAwDM6",
  "key41": "41f5ciGYm9keVaNqiqivGt8JikRwKtp8Swmr9R9yfVeQNCBWsjnweeRWCV4vnLESjhDTrj5yKbqyrzUUCaBp4czn",
  "key42": "2DGG5yETyyBRiXwT9og58HrEoaEhnVJwfCKNmee72TSHZPSUQH3puWEXxqhhFpPeHHsTCbGrUgsHr7Dyvqz22JhN",
  "key43": "2FrWcmD9mBsqUsuqJ2NY5MfaNU7c5wxTWjozAdMTkbXNPWh5H454yqioEHoFBysdtH9DLd6WFcdkupTvd6GU8Z1F",
  "key44": "3Y3yYcJYf2bxKWuaud6xhN662EVF3Q4aY5xLQXqLaiodzVmkumJCUjdQF16pGacP9mkaKyxvDW67QUkwQgZcwEo9",
  "key45": "3mfA6DjCrLMdUCa3DWmKfvvvG9xadTzmhYYnza86uf2RCWCM3JvakRQjAVuvHb1yhAzV8riCSG67LDZ8S5Aa9gXp"
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
