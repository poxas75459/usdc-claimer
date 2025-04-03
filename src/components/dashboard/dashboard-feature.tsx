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
    "5b626oo7vZ6UFKESsaP6vy6gRVwDPSkE5s6QKjZsMhLQVUzuXTk13Cs99zrCkx8VvcqitQgvqtKu9RK1eoRD1HRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65ZVTCRWbXJ9zv9uQKnVrm7wzUFoswmPckfEkhzgPNABtAN7qvLokjnEV7ip8JoKEA2qQJC7DiHDUsWh849oDQs",
  "key1": "3mnqBWE8Raj2gxcxPLAggZ9PRdW9bEQNW99xEocFVhwvBXaWWSLCFagdTj7PEMvULoeLJhtdzWggTLiHzpMbPwB8",
  "key2": "2VnrP78LryxrythskV98HFVvkwWGNEvLsNeMa59TuUJ9tPZaPNUK5bmQA5BGUR2j4KzLKewCmS2AEZ8H2sH6YRGC",
  "key3": "46LRU5rPVp9PTsRognosJVB3iE7kvjgs4YdJUXuF1351BWQs56KaEJKz99D4g5mhKWjPsSJCVVKUb9HWJV2Rh2Ua",
  "key4": "3jQLoLaSyPbQk365jw1amK13y5DgYqnzwzXbsoo364d56UtirdsS4hmLSqueUfYrKANnzM2VAcxeupGvfhDHfQzd",
  "key5": "4XBWRsaNhogYEWzUgxzJmZHLo9V8dsBGbL1B3qEB7wba2zQ6gu2VEKEH91wJYi3umG4hjou3TYYxz9mRhvypQbrP",
  "key6": "5zvn6MfrrQpLzfsd4jG6y92xmHaEdiScAkBrjtURn2RdYP4GT4kgiTJdHSHXpEo4hVP8o5nffQE5toA1BmEBiThu",
  "key7": "5wMNCuaceaZCf6nfwT1nAVPBNQ3pq8nDKXMuecXQqGAASGp66AKwHzEN8AnyaG1UBJ6oCzskchnkAJEHbdzYQWTN",
  "key8": "5ZQF6vuhixWdL7FvfdJkDdcZhoZPBBrAq3ZKwkskZdfgrK9V22Ap6Buvnt78uetufzYDxG6j4maTxLE7aB6UnaAw",
  "key9": "5vkeZv74vfB9hsLYuESXZ3RY2CpjL2PTaeJzGzk7GvQuLcoh5mDXaRBWVJmUubhs1y8SmSo5D9VyHPnD4sgmDU8U",
  "key10": "2sC4vq3VdnBCQsmCVkQmnUyEKMdGpaPPZy1rw8sKaH1M2gPYBuuBBSwBQK4ffFuEV7L4mBzHxD5p91rSveQPSwbK",
  "key11": "3VVXGrp1mwujRbQG7FqNAttdk7LNB9QhP53vLTYgNV6QSVy93KjdUf8PND6yeDSiG8re9NWG4BQib9RGqk8316cB",
  "key12": "2E7JzSveVVKNo8kTQAP72jbZxcawXBbQBj9gayjMcKhWJrZv4PeTRBMFp7ghaTpM9UxDgcW4rquCdCd7Bs8qChxP",
  "key13": "CjM9HGQQzv1skqATZhpnv5XkGR8NdXqoKdLzdtSXw7xq1RDno5RquEdFRNJp2nZSNV7th41wmiz9Xi7HYYxj3gH",
  "key14": "546WqUb4aCzsxWAYapWVc6ZsunbNsbc8jwnvc8umUtuRyiHyA7E6NKD5d8w4yVBG7jfMjEMtkjDbrAQnh35uvvV8",
  "key15": "W6P1rp3ZKkcAf7XHDrc6yEQMH2YKGDqiynHQGz18CVxC8iNtZT9Ptm6Y73LMmx8Bg6tr9YJvTvzjbWZu9PW3KGM",
  "key16": "JFHmFpSUBEgabTgrgFMps4j252QhQq39vp6kCwq8CgU1svH5pQv4qe5Xi8uiCwtEgi3sNvdLZH5Txe94zfYBCBx",
  "key17": "3mNqwiMohkgVD5iZYRZHQXVUahwERu17QfbSXN1jvK8XoXmodFp4Yf6Zb9G8jZ1kQqgfn419UKKjB4kWmRbuPWJ9",
  "key18": "dPoA4BnxTpmWUmPTR239DAnKUCWhU63mh1MpGNYW1Cw82YJBi21PKCq9gfcSkhstL5L82Nq2deXGa99JXfkCkE3",
  "key19": "zNW9m8kyv4m18YuGLp6qrV1hDAKaisY3zciy1shhWSUrozHfGThLhRL31GVgCsRDcx8mbNg7sM4JMdiVnzNTVgy",
  "key20": "5avPqMmqiEC4nCd3CekL5D4f2GY3MrM3s4UgNW7P37HJWdfc4K9QxoWpx55veXP2Lu8oj2gFtHAtDGY8MVPVtvMn",
  "key21": "2C2NDWMhiN9qCnBioqyE7aMxxdj1KzAFS1vLVV1xP42ebi4pPsxoauekTJPdYYs8hoCHe1wSFxGKcNFbovg9vDvU",
  "key22": "DigjSYEgphPXV2Q67DR2u13kqhqtE9TNDX7k5XFrssZP8wgKxowyD5FHUpGPSw56FTfkbEBiRq8B5jQSfU4icSN",
  "key23": "RqucM58wb6mzGxAavMRxRBdB7WmwvhYKyeNqozKUVoJGF8jZd9HUm8yxRGn4877UEsCy7FnV6V77xmBqCtPVcUC",
  "key24": "4N9vCznMoTdMaSM2vJKTXS9JieEDU9qXZ3uSWTTmxWgK6Ux1d9riALDxbsUL99RtpLWrYF5SJaX3qqJZAdaEN7tH",
  "key25": "4FkePRANbbn1C32VzYUNe6K3n65JyLEZarNPYuHmkLR7vSgN1mof8wvFCLRPuPHKaRXC4ypCHmgJcXUSmfj9ZnbJ",
  "key26": "4zMCmmWr2sS8MAh7Kvvr3WJDpyiyVb4qfjhL1cXZ4Qnek5sTnZqpj5jsLikbCJfbwHQNN5HCqZMHum1ujgrZ21hB",
  "key27": "2mhke8B6n5FvzTx7zC17PzDzFLsu7hWPQRdKECXmZAPnHVnPSvwBi1fB4pKxpjPW4SrNhYVx2noRsAVkfThiX6Uu",
  "key28": "34NiPS9xRPw9w9mUjXvceQvx43w1Bfy7xYv9mzsJdJJPSZ1yg5HXE7xM6f9iEmuQeABf4SvUWXwgMwWnbjemse8M",
  "key29": "31D94b3eXG8cpF87Pgn8VBStxLbUpyhMYS37Fw9gymoN97HjmEdEWayzYMLdtARfw3YLB3ty3sqCcWuW7jec8GU1",
  "key30": "61LGFgaXsT9E6wnSWWBChBcJDxa69UTxg5otvBTmqhkyJzzM3PSeJUXrW9TBMGCZLepeEZ6MLQLn2zb4A14nVWTe",
  "key31": "35FMaNMaYuynLP7ugPG4WyMUpxknooCwvQfL8HEDaojuBR1KFYwWcmb5b9CSTHLFasmG4MhZLAPDky6No4dp53Uf",
  "key32": "3SUvy8Eq53Ut74dER4pYJSyFLDqKtmUSGuJmPh9nsHT1mmMbhfvoV2oWXBZaPL35iV4TfbAgbX5RKAZPi1aviy8b",
  "key33": "oS36jFZFbyu4MMkTEkVwWcxStTRQp8grdrdx3E6kRcMQkv2dP8ZjkmyvB7YZe8ogz9BVdBwDDZeFujD3YekTT5d",
  "key34": "3BrCrq1vbQF8Uv9CNjQqMX4MkMzKHrcsDfNPXyZS6gZ6G5AFPZMoyqwoxYmWegKaozXiRyzAQ29hx3mjFTUeieQ1",
  "key35": "bhvg3W1ZYHUtsGDfyFKeiy2zV2X2DNTFmfxJVrjRUuRBBvnHxr1NoAb8w8kfybxpBdREUhEYFHztFghHsmbcJkJ",
  "key36": "h41fLxght7yxwEWAoM3NxpbaKS3wUEgXQVG7pgyw7shruuk1XdtJwfC7iMh1gK7XQfnswGHwTQpuwheouT45LrC",
  "key37": "4BCsE9jHDVZ1RobBKmRWawuZXbSn6r53qYdpteMs59KK81nAZf295WZxKJ5jNQeX1JC4GaEZwrVAGZdoyeVXpHq9",
  "key38": "4AN8dNQk5NPNmLRzziCbHiym8Eu8vzAuHgqKd7raifLDR8gePWTAoboBAsLri2HSktDjaPXhgQdpggNgeu8t8a5D",
  "key39": "2PNGALAA642XMa6VtJyV7vdL2h17FsMvV5S1aa28v7EaGo556K1ZMa5VaG27udmDraRWjjiAS31CezV5y88EJZsb",
  "key40": "5zFVgitNbZ4NtpRFCb6rsUx6NQGpgwV3kbxBDdfa3KL1R3rsrgh9yD5UgyPcwfq39ey7Kd4PQAzFoGCN4Jv9Siva",
  "key41": "55oEimsPCxqLJRMf1E93znG96PaxvfUYXi4MUU4ewjJB9j8PV4vThtMS9FqGRtgmWCoGYqdquc3D3a7pqhPtNVk6",
  "key42": "genCkrNXgi54MsDi6DYgPZf2GLQHY1A7L7Ck3cpjwRcZYwmcGaaSgTbDkNwUoaaqDDTKSA9suC1Kuxvvy7Ci3so",
  "key43": "3Qs4j5q6Bs68uRWwQSVoQGC85hugH6eRKtpU26KhtCbB4EHunpeVqZsvPEP2GrGcEhSdVDqjefgL7rXQXoqgyeE2",
  "key44": "jrUgQJLVEjPheqqvyHXMAYbhHrmpahPePur7LZ6DJ5i4jDcxuyoVz9gUefsT3Egjha83ys3NYSVZrtw9rYUVc2a"
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
