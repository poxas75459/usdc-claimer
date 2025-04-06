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
    "47SQv3YJ2apMvpTRbSy2HNY6p2PbX9E4JbsKbmjhLMTmNAyPK91etJJajHbrMCMHZYcze2AKiG9yMtzd2jcj6VT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZGnyCKNhcv1Vuk7m2Q1Gg8Qyrx19QXjpZ7ffEX1tiQWoKMyAYWDcvodpzjENvCckTCpLbmejn9nG8nY126yuYZ5",
  "key1": "3qrHabkaFXLVAZUv4HLE3oYrx5qtjatcaP5CHd7CSFNvtjG6i42XEez6FVSB6f1sAm4Uoee5YP7PytnqPLxCuFzS",
  "key2": "PATs2VMzbvLY81eivogYH5HWUoGGJDdYDvCjLWW13rNyKUs3crayw4T1BhtnEREKRua3oc2DZopKmM7L7qMf6Mg",
  "key3": "61y4XvYnqHv49aJa5tY7ZKk5JoeuMxShT3EJR5ti16fLpLvUjtdUR9DJbo993vQbceoer7zbZCvdQYC9rWko5xF2",
  "key4": "5pccgiETJcfcYZ47Jctiu3uE23orCkhq79QSAnnshFEZBjoKnU7hEh69jkkqe6bUGW9SuWiZFv8dEBeBgNkJyLTC",
  "key5": "3UtZZjvMgnqutfCcD9Bndsfnj66R1UYUMwSCfE4jmk54nnvzqU3sdapYoEcReGtTkhFn3giLVFw6SbmEpbx6DQyS",
  "key6": "31XQKxRQroucWmyKs6eEtzosYzXcHmDiy2b5Hr6R2wSZt5Ay5ZmB2qr3PADzuqyAYVG7WcMgBb4pXRHdopqp12NA",
  "key7": "4mokKaNpfpB6YuoKGR6bvADqLTUYxKCF3hMULHchvdxQSGysptU3kEp3wpy8MncBQ7QiNdGz543NvhSWZAgsStjj",
  "key8": "2Vpscw4uoFVjfXU3PVeSTxL5ZE4A14YERnAk75oiHvBs12iq2u4RgFADmCJAtLeiwbew3GEsEZYARQbDk11sDxgK",
  "key9": "2nZMHHwvYKLrStXoBHbwuABMuXxZ7gFjcffmcwP9gebeKvsCGCYj3ADGMiFjLYgiRZTLdKZkMAdPmzDtZ8bsH4qf",
  "key10": "5CzfVvhv5mEb4Rm2gxLhH2Hgkzp54XpcqN9wGkEvQd828HPKriatGAABpxfCKEryKukKkbGiJXhsPzcTM31EUBBq",
  "key11": "dXsQnjZceaEzkUaCJkddZjrq9RHBnDYhopj3ezk6wrNdQbpWW7HLMMTwyPRPhNZwy53zpF4bF5pRnwkjRbd6rin",
  "key12": "431ovcxXxBnhrLLWEFfRkHD5Fzd2fPcr3j4jBm5HFYP62JAkiPj56bSz6bjafNFaLa2872d2325bNgDcndwtHQmn",
  "key13": "2fgUvyvYbhcsJJzLuUe9m6kAEeSCkUgMQ2PGe3rtoKV8bhwfM4UnkGXsUuvkS9xTetkEZxgU9CeML6h66rC9Kap1",
  "key14": "3QAG6wWvwuj2XJgQNBayzw8Q1XVEotdyKAMr1hZgiTvQwNu2KSVPh2ontTRYbWW7kTVAeTG3EkYUZYrie9mW1gxo",
  "key15": "3KUTECbmYBxmwfyXfcuAeHy5eYGJZMrQYa8bRY3fDxJxDexWbekFTtQjw4DF7cRQ577xxaVW2ZqRaLrV7WTKDkcb",
  "key16": "5LMLZSDQkc6hZEWNppxNAUHvggzsvB45qL4K2ijpZjP1Gvd74KWxuk4LBffvoPKm1Us77GQMP4BPn6Wngrp7Pxqa",
  "key17": "4DEnXnkKf8Px1mcThE4XPrXjcj5SYypuHvKVDcSxz5MaNLWRGvzEGc2qNTvzJKBrQ8SM2kBb5gesDUcyMMbxCrd4",
  "key18": "LNkRRGattYEgTY8yVBHLkHgFNpCvk69mKH7pKVLofr5MYjLPdvk3J7c2zkAoPHrMmuTiR5aK7EHzGGStoDMMbV6",
  "key19": "34BJxnz9Qv9ohKEkyyXzw3gR6QMcq7w7kwAnqTHFZMLzc57vpfaw2PgwxYL5o8c4azB2FVJMrVBcrVCQ2UV8w4F3",
  "key20": "2caCfLotCJ432HJu86uYcgb8NSh7JDAXzYKe8LDMR2ugBn4AH17rLVFBf1BCLbkBExJpFq8zquZZc9WrxYVVzje8",
  "key21": "4YQrgUhDHfNfG9TE5eSEahYRy1X2hWoDREPoXEwBKVDcms2WiVGUYsvwVEPcCM3GYSEC2RAwefxtUj8mMfWPtzB6",
  "key22": "3b9JMG9yE3EkJ7vfDE5jakT3TcjyRSE5uKMxh8eiYxFPmHG5d5upH5q3immZKfeb1Lu4mwNG3yqP7fpBewyv8en8",
  "key23": "2r8fBrpkrgA239xsC88jf6bTn4omi7J464veseck7wtxt3WwrpNVKc7sxboZqQAct2zepCscQJ66y2bfyU311PPF",
  "key24": "2cTHe7casJNCkfWqt7b8FHVWDWVdBkuq3zLek73VSv8Muw1W3ydSBHhFjfSrtyPTkfT2MzaSC62KCi8avhJUCtWn",
  "key25": "26uKr8FERC1n2yJTUjsGcZhMRmnw9DVBowwS8qKZZ7rrYJYa73WRBjHK6ZMd2EGDpQnuUskB53KckwXg9YD8wNgC",
  "key26": "2fmjbpivWj6A2PTdMsUYA2DKfJATd6VJ1Pq7LkDAPVwXsupDwjq412b9xTRWKx3AgTTFkgbx5XdVCv3gFvi1hVeJ",
  "key27": "5oDnRmbb3Fr8PpToy71x38w7VuCDj7bSB8VjPfgByzwth8SeoAL7AsNcZEX6e6coWT369EYm1Jf4ok8npeahDBXp",
  "key28": "4cdhwJp2dw9qYbFrSYDsCLENrVdDgUamQDd5pFCfPdmySBq3YewkLdv2xHfi9gQZvNPwLpnKmoypV3A5wY92QNPB",
  "key29": "4KT4EX9petTe6iKrXBA5B6KHJx2jS2TuDvLTGHdRk8NDFLj6S3FRudMfr8pxhruwJPsA6YvXdh5wCNuSRtFNtjpz",
  "key30": "5rqG68Hso6whkw4LgQUQpv44Rn4tWDHE8yzZTf9UbdJXoh3qtX6snf5zUDyPxkfb1gJQA3aK2nuSGyWM8V1mxV2r",
  "key31": "5i7TJTC9hoyRgjTebdf2AHonmg5KKjhBHbikBbVVNazUBg9Z8RB8phX3aFP5FFQ5BFW6eq73R7v8GfPcwGJ97mzM",
  "key32": "2dFZEHv9qmBhJuinRbwcsmfC82JDmKbAW9nkYN62TqDySvSdSECarij1ehsghRYXskG12BBzeFjfkcwc47CFw2S2",
  "key33": "2vbU8iVgdtPHyevGCefS5wz3F69YyyjSn4zrjBers1ceXbfxYvn2BNfvbfBMhYZN5vxrmGtWhaPRQhCM2SYM77Ab",
  "key34": "3KzkU69BYcS3aAZpogvtuo58413sxkDuENchec2Esp5s572hZVTWqqLzHAi68a4GJF7JMwfoxiFwdtd5U6zMNksc",
  "key35": "3TKQou7D9pEZGGqbbAzhzFi8yG281bJD6UQLqhPgkpR7Hfv95b6mVJfTne1CvG1JzC5AFTTWm3kUEDUfbbb8PyTd",
  "key36": "3jeXKug8t4v9GKpEmpvZPKuw3eFJEzUXEZS89PoVU7ffhT2ixFBbSNFRX9PuCUJyr3twpztLSo9qfgafWg9wZ3Fv",
  "key37": "5GpPfjBq2mJktzDKFJeuE8ykmzJ8S3SxMoLRdmvv8w1qn5quuB9MEWQ7DbQYafFJFhjk9Zjddgj1L2tCwhSDZ6Qw",
  "key38": "qFmbj9n5CcR6vv8sn875uzg6nsT2ShkhEeaPmyQvcj6LcWKBbmLDUs8Nx1kzdkxom8R5CroXcdgYiy2vvJ7vRSH",
  "key39": "4VzvKn8yfor1wy8GDUmGtxFmRgYcEyGsCMAnU2LBxicRFrHotpYAvV6a37pBPjCghoQQ3DitiRHbRwMQgHFHpEh8",
  "key40": "53AEwZYxdajAeXhgLpMBxJppeZfv6ccRScPZrmnw9qbztBz6nWRQo3y3hJfhm7kQ4izxjBPNsb38HWPurWgmppN9",
  "key41": "4Hrr8AaQiwTbPCVRPwASpLdURd3fYzTLwcaLDS3aWUvsmyp2SktXTSLshGSyZebovZsyUGUKx1DNi8VPc4xRVAyB"
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
