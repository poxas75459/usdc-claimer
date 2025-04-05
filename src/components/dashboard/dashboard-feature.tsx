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
    "5benyXGuCP6kbsRyHvYbFa6vCF9WTZbtP2a5ew5MqkF6RkXgrp2Ak4BZiCqsRS44aCTYf645ZybmGQSQmLfMVUnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CuLpM8Jvk4eh9i8XGN4oeyZjYjEf3wJQqgrguE1XuNrh4UGtNdcgczZVnKnQpqoTkjgSFXjkLk7yA4VEAMQeSJ4",
  "key1": "2bvQ5cYFMEwg133n3zoJbqF1izG7sJYFLB9fLTU4Twq99ArVj5mNzdtHwg47HMsz68xnekWrZntCacS2Up11Dx2f",
  "key2": "4Sv6iS6cCHCvQZTEDF8X9bmtcWRAPeXVyf12M4vo6epUhgbd9ab2Eha7vJb8Y6QL2bGacRW1RYqdbu9ywszd2c9E",
  "key3": "CwbtoyTgStQG5qLLS9zy3zPnEC2myak7n5PDJrhKFrwGtchCezsbf7DiJaqd5Zj1HtzVs2bQsvbkiqnvF1yMKvM",
  "key4": "2jSUGpYz57ajLNHP6Aw7yTp7qiXRnbvRCsGVRD5P8Tyk65KcUffSR6AGheu1CM7eRvWERjxBGJQR5eYkUME7ZsPV",
  "key5": "24y7BDtF5pBKtjSQVYSnocLW4Kbocm64VZ3oPtjxEjKk94svH2DRJa32Vq2w6Dge6m1oJ8aQixx6aXQ9dqaUgFdn",
  "key6": "2uzuBtkCEjdHwnYMQx6g8PuUDVthtaPFnfs4FrhtbmQMHJnbYQv3qijBpUsKsHJhcUZVdMCSfj4At5KvqVU2RiAD",
  "key7": "2jCnH7NbAYSP9xh1AZfB1KBEDfjZ7VZHXWDA4zR6wC7LRDV6SvtDanpUcAghuLNUD7SsKgqKokGGUE1pzKzvRPmF",
  "key8": "SidGfYYTqJn4JEe1qWumUQoYU2QwiCiSRKc2bRXSV6CfFcpSHqMZU7nnsrbn7W231XpnmTkQmRCa3qAyXzF3pEF",
  "key9": "ph98oYPwcGjbNGiyLQGaoU2QHEiz72TMTxESdPXLxYBDjuASYNPH3V2AdoAwwWpV7axBY2XhDMpfwgB4i5aRYMk",
  "key10": "3w3tpJXUuDTx7DmMwUvNFP9NBCwNCj6keT3EhaRAQEQEj8Lmsca33jtJUA292EBJ8FSs8F8pcX9SWyiSRFq5cwQn",
  "key11": "5weQsZBhNWzArUQwM3LoYgwPxTT62T9hdpQBSsyKo9KQDZCnTcCmdomVqfTFRW54V3ZnxWRQLYMrZ9Feq4iCs9f8",
  "key12": "q14WRiviUpeBb8yy6rrggY2q4bh9GT3ks48tdGQBZHDe8x4KqP13dKJ23yfh1xF6qwWYo8cDxnUmJRi9DT2XBn8",
  "key13": "23ZBTh8bgf7y1WswB7VbEPG66xMApm9obKktmtEZTTFKeqBfokTsTEmj99Jspp8gqennAZ9aM4eX8LvVMqqEd7c7",
  "key14": "4y7m2onm3VXgCMu94YVKDyMf8GbVSuHVH4brpUvkKgXFqKwqMEhhvwVTMU7hjfAk6voq85GcmbrKh37WwZ3jMXZz",
  "key15": "64nrCQ5qxjxCoUZTgrDa7ZQV4J2n7enNa2Jqv7gXq2nGJRJCRYHzWh2vEFm2yvnYFkvtbXU4wH3TaXkAcXGdQZjQ",
  "key16": "2wihibgVHCqxbgkNExdDWgAwNYF2k8WsCMQYDEDN4sb8cm4ZX91CQ7rfhZs42sWgcb6S7bpccpqTMHojJWWt533",
  "key17": "4vnnmC4gJs5ZntNcPEdhjtr72W3je6piB5BWdoBBiLGw8axWvMNYyB6L5uAespWPaX43U8zdDJJQCj2jqdnSSvAx",
  "key18": "bZVS5ywpWEsQxRzVDjV3J3GMmbnnYrKpHkosCnk79RBRMCdww9WAtxKhdgv3mghpwuhmX1QZCcBNixAziLbQg1C",
  "key19": "4MkY4ZeogCNdeU3jb4vXpTC86qvyvTGadCTqAFTt6LA1uWUr2JSB2ZUM5QYVSkkUGNUJ9d6fZYZZ14RzxJyFP4m7",
  "key20": "2SE5Cd77cwa5meZ4fybNvkPyPVGPdUjhrpnvaUq1Qr9tFJyKcpdSXVQMG9j49CzaMgvAuRsz7c7Y3eiycxAgj9uX",
  "key21": "4tYq9wzJcWo5GAPQkwXPMzEY3auHxa9J6nu36rgzp8ehXW3MGbPUicVwRpPyfUgyi5ze764TEnLLP1bQAVJkY5Dd",
  "key22": "3WRYT3GBwpJ1G6kw91upHDgd9DZAR4P2tHfX6bcFZRDyYvHc3NXMbE2sgpVaqEDeU6MA4dh2PcL6Fxur63xpfgMM",
  "key23": "4icmnfaXSDoDZmy7x6tbiivnHDy14aUkvuohrhnjKtbT9JL89gWEeiH63kdF1gNEFeSKjUiV225TUVW7Zqua795p",
  "key24": "b8RfLZe8Gnp18YSAWzoGLkow6DEBA9He5RxWsbJeqnxCNZ3kBzPe1SH1ATgQJg3u4Ts9CLzxQT62caxWnQ2fGCh",
  "key25": "5vWZv3CVVJzVZp493HAsG4kRr4e3CZdydWUHjwX9azBvq4dw67Zt9DnYaYbf37k58wSuCXYfSFas1HvMhvNvwpxF",
  "key26": "2jHmSUomriPB58PpyLy857x5zNSEPP72XeuteHaZGRiMpKHjgdCBHRPLgdiixTe8ZqkzxeYyGktS7F4a5AeGfLBo",
  "key27": "2pLT7QtcsRSh97eCggqxqmBFYVatzimo7pvwAuipuZQhMh8JzieaAxBn7cJ1w3sBJZdfFPDe5fhkTHN9ZXrBMd6a",
  "key28": "2qBiKxyWpQpzYxd2pY3zthSfuzN52a38F6AYfg8R6fiKWE3hzuCbEihQrC71cSmP3UrTCFLD2ZF9LZJMjaZ5AxQA",
  "key29": "53zsaCJwzY5QTp839F6QysaQPESpg3zo9kK6mNcFCwFohbY1bHQ31K77f6wH4vgQ1UkunqWfwCUL86Ajp35Dt77M",
  "key30": "5h93STEP9Ft6RzgvntNXkYwLmovLgUirKfWmSySHNK4J4HNMiVqzwC6qXHpa7dY2AhQwx4mENC2bCAeKJX8ZxHNu",
  "key31": "4w9F6jxGtttrSJmWKbi9ey9nMouwBUajvEahW1zEU7uWrfLmqSkSYkxJRyz17hFcre6G2Ymo2vasr6YLZhMRsm6y",
  "key32": "2Pg1ketQK8367LVs3GJreCgMbtJcCQkcka9zpio2mhg5RJ4iBhkY223e7XrKhPtVYDo4UBYitc7emAupqaY6U5Qb",
  "key33": "5zcbBTeQDHXoKczjLxi7QseiQGfM3g4zbGyeKPsqJucvqTcuGPaHbY1A1bGqYr6EBazmrwaccx7xH3yPNBAfDRsn",
  "key34": "3Ciste1dAzVVeoWMMx4gh5b1n6Brn8SU46y4u9bAYS6gaaArTKKiCE2hhxMp4Axyz36vCikHGfbmqBFwLWzRWegs",
  "key35": "hD9FE8yqkcfVFu175ZkXV3TRiugSkoBMX2J3R4VXUjM8aHqsdMZEwcJRnqdy8Zpu7hmbpnkvyFAiedjsDcCbggS",
  "key36": "2X3Ur1Fm53xD5WrwswbDKzcQTtCvcMijYUPXMkV2CXkjX6ghWMg3zYcfwox78UUD18y7qBKHXnWU9NUBF8AMN1NG",
  "key37": "4Y4eBK27q4asqbxGCw6FGyP1DNA2kJZh13wjKarfBV4Skivw35trLumU6by7bkNxBQUMvu5Z1kDBKQ4u72q9bL4g",
  "key38": "63oNZmnM1xWtr2LbrDjUdTW6Yj1Som5h1SFdyDU8WQyTTr7bZAwqecckzCb73bwdYzrJw8RY3h55V3dutzgTei6",
  "key39": "5GQ7Xua3juyuTo3vVffvgDREQtiE5EUFUZehvf3NVchFdYmekGEvTjaXK3bd9f6aih3TDB7u4cCdWYk3aUeJYCBB",
  "key40": "2xyGnpBVVX8EdHWXuX51LmJuhdDWGPsYVram5YxKiZLbhdn4ZyZLeVRBpqYTsJgnNHWoHaRQ2npgKoLh5gWx4NPV",
  "key41": "5f3TcLP5GvhJLm9dHkMWPs1CByERVaLtEnxTLh386t8SgzokQ5oFAdJuQGCcaZmWLyrLTdrXMMUqCe5TEnkfp524",
  "key42": "55951TmZyrKaLrGxrJKw4jcMQxis4AsRpwvgVYu5d1ZuExHkVi7QpDd7uw9bSK7Kh1ug9QS2uaFba5bCRXQi4Q3A",
  "key43": "4jTduH67cg1U4LNARKrfK4Nn6MXtHNEmPeogKJcNCvW8orBegkFgZhAprrghTYELyPuroes1of8XFe5jb5Z4iibz",
  "key44": "3SE4PUMo3XoNcvenLHqUCbGLbnHgivs8q7XWn42quuFcxobf6oW4VBV5Z1yVrAxH5BjmJAxoYfcLYT3TcJ3PavCx",
  "key45": "3t9RTwSA2ZNvhoNiLChoqnuyHHAJwC3J7hcgHMmpFDbzFmgxr1VwQNECEi4jYGA4TzHSbb7D2d76v1jaU5M8JLgn",
  "key46": "5Kc9L1yhjz2841MXpTtznzXrtX6y5n8QFS2N61ikLt5HxzigpQhYVUdi3wStMCkigPwKELcRjiHmjggQGYrmzozy",
  "key47": "2qmPUfKV11RZGRhFNnqmWThv15Nuzd74vwrVJGF7fo5as4QaW3rboZFHoKczcthWQKXYmSbrxiELfquN7DksYx47",
  "key48": "heFE7GGdnJiK4jHE9paFmTpY5RNhpFdbKs5G8C7p1P3RsoBHXXTgFsBVnsZMiB6vJVg6F6noXPAy1GN79BxAgrk"
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
