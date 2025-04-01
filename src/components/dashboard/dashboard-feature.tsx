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
    "5pRfcDrirKbD1jwujsmUPk67fAPL3yxBLhZZDNrJSnCT9Xob7CNk7BPjzohbrVeXaZDYNuRdaZNTMqL1junfYfND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nf5dn8U8gGwX3vbsr2svJmQQBPFfCagE83vkFXN7WeH6k1YVNm3WtFceDpDHYLV6Fqqk5NUyfzy832bbB6BFvZU",
  "key1": "2cpKdBTSapd8UGLvseNrREn8wDTiTteGXNR1nrtaW28nDnYoMZaUSf9upQhvofaiQJpdDZJ3kjXQZXsDijaQijDK",
  "key2": "LxvhZD2tjcX7fBXnKtu1jybgzBsdy2ZTLC8qm57A1Jas9LKxfYPBciUut4t9hNz43jM72uK9HoaPCKYAc6CLb22",
  "key3": "2SZctfoYq88KHhmjB43zhFaMoxqCzFsQvgP7dc1v14yMtjvofDRCEpuvpNz55ytsP6yT7AjVx8yXq8dNJnQG6A7i",
  "key4": "3haw7SeZFgzncL59HTGD4pPVsJnPmdR5tD75ivKHJtQVnveGWAuBiigrHC1Yt1AJjvvUmokHngyguegLCzaFJjh4",
  "key5": "2xJ8GaQnJy1hm8GwvvUkpnmEke8BgYK2VHYs2mCt6VJzeqr2JVcpr5cR8DBC538itnZ86n7yN4svohbxb3hw6MCF",
  "key6": "2tnRqZEtfrGfN5Ctb2DParUmuvSbh1vTTenHenwBEUfsgVsJujimoSnnhp6bk5scWMaWnjpZKdnJrctR87HKoteZ",
  "key7": "4TFgUrAnPbHAW3uNLJgzFQ3voZfU58VxzfyiXaZS5ahPHRuwxAethySNCJRBYgPvcz2cV5Xc7Cqt3H2sKFwt4r5h",
  "key8": "3KHaUfzsze8yxsVWEoXCqrg3R8t6RbhqUGHW3q11svhNPfmTW3hsAiHMyjeuKyutuvcLmvahKVUFVwjKD9eoEsEm",
  "key9": "5pzLbECGvkwFWMXUesnPBbmVvkqMEKFpU758FvNDAL31oMrVDsV4VGekvYVUm5cBcwV9ci5b1pGKxF3Tfxek67SC",
  "key10": "2MGcwDXmTpH1XVy4RWpj231u8BWqiFzKG7WiDfLnvSab7Civ5GtRFmkRKaMUEG2EHCoBxhD84yRaWX1a5oADP58w",
  "key11": "6653Cj8UVmfQ7NGAqEsoNdQgmFZRaUCat3cVJFiLpmYNda6LjoCwrdznhEcibkrQicoghsaCVxRR7qNVPXbFHHp5",
  "key12": "3Er8AHc1dUaoryzGwmMLCKdY1tGmNAEhjD7n2dcWu55nv8VUUd9mG9DDv76hSJY42SRQuypNdiHE2wuj8i4WH7th",
  "key13": "2smwUN8MrufqPcnobqR8hJ3eQ3BjRuMe7C3inqntGbMZweXLjmWRkwCQHVfAXGp9pZZeZArwyEQzWKq9WLvWeXZR",
  "key14": "5LPCdiZMuAnCwwnuRRCNjFhJfz45BV1TYmbpHWrW1RQjYdrtRD2TXwt77KmtpNGYQB79RQA3ZXB5ijTgUqGi1DZL",
  "key15": "3SXzqBJr5S5iPmArjKqUhiwS2R49QwqkdaDBibkqNgGyTskfax8Exf8PQXWxxHygpGL3dqZWt5pzAGSsxBXWPQCT",
  "key16": "4xm8M4RpSSEzBtgD5gYJN2oChuG7huGm5B7bL1NaeHt8q8gY1WhQBqU1e4BHhNVZShbwAWnvVFAwdayqgPgvJbtQ",
  "key17": "3aMPygYPrBs2NFWfRiYf8KP8JMyNGfPafizfBJxu6pUGsQbejoTvLTGGjH4oEYHwvMS3LGaEDfYAWGQ4ArzhLCts",
  "key18": "iUyndDDqNTfCCAJkQqcgvFZVTvcMCEQLdjwaGePtBtxe87SfM3AmvrAxVUnNmXfda9EX8TD9Gbm834N3dEPoVK2",
  "key19": "2BrCp9M2hV4ZGS2iUCkors397Un23JryMCzY1EzW7hGuzEvJuLLGyj8wsQRfw78LR5j9CYmWFvh4MZaWjetcuXep",
  "key20": "yFL2PMnYZr5PB3c1CnFgZ8X1Re55h6t2Sz1NMzjQwx7JDX9PzhjNSvr8SG9yGhoJs8Pncy2FxBksMvvkPRcPEor",
  "key21": "8MJZTzUmAzS7x3o7c8wQzWyLs2iuViTF34Q7394RbGnaVBq6jbMVvsuEtTremVfQWKm1A9uDnHCkVdhy2yi8HRm",
  "key22": "5sd5bDeMoJ4ePWE2MLkydzhKHsJyjigD2StAsG7fELQfQuxoXLJdhZd5mgx2d3ezBs6zTtUV2hnn3R11NaXi1tHj",
  "key23": "38jsWSYCJeHc9osWM1wLFQiLHu6xGsoRYMBpwWsc9TbTawKuRdb6xoQ8LVJqmQoF2kC465xNHKMT8HGxciCZUQXP",
  "key24": "2AfbHmGV6MC96rntvozxtHGwNjKFxVRrjzwozspzjRxYLbZEQC9FPpCANdR2RD8F7gHnT7mrCiU6veGuSivW8SJs",
  "key25": "MxBLzh2e4ihkoWHe2Lg9SCaDakPfX36UWWd1VA3uQ92rAX9duh45N7cHZjnnEuss7crigFgxS9mtKEuv3TFBCU3",
  "key26": "338P4KBhE3WK6Wfv9uGrSnHLUk86nFQ2tVVtMRJpZCRWd7LQpGnU6RRYTXFX4D6x2GTbRwg8meynVudy7sELG89h",
  "key27": "2FiZXp4f1hBkNiH1NxEShJGh4icczRehnouHFuM2mdwaZBYgi6Hw4YezFMitd8SUyswCPJEVYarrTUkB4rE3i5R5",
  "key28": "4AVNU71o7NETUvCjQzSKS5zP7UW5CUDrtqZSMuVnvPyEACiJCcDWEnkhrCQJVhpfisGgiignapDgXGcT4Xc89FQK",
  "key29": "197pWLBM7E9eTYdetcSTZ7xDRqgE5dK69EwmfzeQRYzWnLHYerAmr9jQD37dBPuwfRFMFkEfNdVg6kAj1VsYyuv",
  "key30": "2hRrH85RVXFBZaQv9XPNaQtt1j5XSHnNqS9uJPtiBmEeb8abhw2Vm5x1ww7iji2BoZn9RDcFMPzR79fQh953Tzbq",
  "key31": "PK76Br8CrW1e1AhpQwv3DBbzy82kX84upwJ4EZHgH68BtkVxnr9DBJ99DmyDhTQWrGMD9AjX33ruALdFj2u6jzE",
  "key32": "dnqjy51wL7JhvX2ucsSanA2bEZmnQwmQZf5BmqPJLVLixHyqh4WZyb6NQXeM3LSgopXsS1yCsQXeqQj3iQ1u8xe",
  "key33": "6vMXPCCFCgSkbQSwcFHLj8HXfzznJWShFaDVuGVrg1ZG5Jpz1cRFcPeC9KBFsG2wpS2FHMaHhhngvvgg736oH2m",
  "key34": "2KKpnA9ar6KgDfbnL37kVJ75Uf9Pb6XKqjRy48QRSY498PCaQuxdYtsdcExESFy3RYQf41jk4TfoHBg85Kthnt3U",
  "key35": "24G6aFpkw1yCcHQtNJatLCeipkAvhZuaQv3CHbiqsHZXFgcE16ka4GdFPm6pw3Ci77yvBQwz4BzKxMDRGk8e7JVr",
  "key36": "vDFoHL58JkqDW5r5u3tPAVc1fUQEMxYXT98mc3ky41iwtfPDbor5G7JoJEpHUj3pCasWD4ATJyTgbogYN3stGw5",
  "key37": "3SEJpVXUikXn3ac98khLc558unrydzhibeKpWiQ1azJnQsQGd5Gwxy751hKdcbN5jnnzBM5mCPX6SYK9VuVkMjbK",
  "key38": "4uFexCxLjPznG8wadfYtXJCL7BHbZjr4QbHowxGMoJTzaF6btxktKrKNmfJgSUtvHH8Ya4rhN7EKfwfae4f6CxUr",
  "key39": "5iPzsb71P5pUk8ABM4CVtBRV7SkwywQfXedkGkraPa2HYeYVu3BAFGhGgxAzsmj5dHLM8mBMXzPbhreb2ZJMovNb",
  "key40": "35fTLnVDt4QzpByLmw4GY4kKpezeVrofeooqLUJhQMzjfpdXT7gVddQ4eJnrhAntqxVRNdMEeM58ZAVYfbGfcoyz"
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
