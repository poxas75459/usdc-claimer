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
    "2mENmeLC9n6HDd4wMqwPEDXypwW2aNV6Kfvm5Z5sJtGRZ5rsV1JzNyarhdpXVktJ91zPVMmvTFE4gR5V7TbfRqmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U5V5bLZRLq5NJ3HuKDyQy6yJtJyUBFpzWWJcdMRYPdBQTkwsgZt5sXpAyG4k1rWYMXKctXfHMA45iPSigZUKePJ",
  "key1": "2QzKD4VLmZmoSaMPr9NftGtgtTZfUYGMggJZeCxE34gmRADem85qzw1bqDjHZ4VBRnLbGPyGynfkJVtYqW7AvDfK",
  "key2": "4dGytAL9B53S54FS6UF8xmoCqC7YfdqrbX1B1udeNoNMoRB3ZPzp8qNhGzWD5wuCmvZZ8JCc5baxA8CkLD4D1sVj",
  "key3": "KM49Zuef9pU7nKdAm2642XeGZArnPTrcwridMmm8rC9MDmvfXx5FCKsY6zzW8kKNS4KbnK3Wd6pwLbZmeL1Evz1",
  "key4": "3pyk6F7xaRaDkYZZL2YCRYrq9QPMxoBCn1fJquFeCLAxmf6uPxNaUfYv4mnpvnTg1xLPVYLRAD9cipX4X9BRcMHb",
  "key5": "4kx8aX7K6Kvuk2P3tivKcmY8AJWbg5o4ciP2JbDdFWjiZXZa9HNGHpizrJMP861Mp1NpQZGNPa51bXpxiEYrUNsW",
  "key6": "3hqGF29x7SMpJ9V88kUBx2JfDhiVpKBP9bJ1RpTrCN9moAwQJLrixdTiXJLZmfEXWnQp5ioMywM7tP1VZAxp9rSq",
  "key7": "4r5ND18vFdqThD6P6CgQpTBRkLyquksNWQX1fmUUf4FhvyrSuTZHvEmaoWuRKHdYpuYtfDmimfYSwAPW6CNYFhAx",
  "key8": "4rjhDZBNTYnYG6yVYVG8DmaXGY6ozuAkGoboZuirVtgbSNMGLB62AYgaNLXzzkPhXGZLKiLcdH1RDRyeCoP53A18",
  "key9": "2F6KKxfrhBdTNe4HsD9ARAURjaB8QF5dFJKtiXwm96XsdZjmRF59toNUAPWMgHYjDcMefDWJDY6HKfHepc4Fcgur",
  "key10": "2M26iJFytECzHSUFHXdMskevnJY9KRV3ApzNA4TYSW7budD8Lb1GwwWDF4KZukZRfYgDoKW2BtJSoouZQC6Qz8fo",
  "key11": "4wPTgvykwokUmP3jm6Yuvpgqgkiwkh4nw1ZZMdPpAkatTbfRBzBRpDcdheG1VW99aG5cFUSELGmruRctsnpJtm4R",
  "key12": "JtNn2Y2PXf7344m7TxtNXXYJRRnc74zKm6fVNL4yCTRt9WoRLuw8gJycSiQ2tQm8E6sARPvViDx3PbQKqNdrCWX",
  "key13": "3Ur9ggFx2aaK6k1wbHLqJdgMaoEqh4E5S2ho4mQYY1c3nxuY6b9hgsEiraFunuDWKuSPhKkgxPfmbm3s1qs6bHeT",
  "key14": "2QMGAhMT3vHe7dPhR7qxAGTxDTC2Nh4uxASAxoR2tXM2GfgyRrcXbJ1Ej7ok5DgCdS2A3eb4cj3J1Bos6FKD9MfB",
  "key15": "4Qma3A1auGxef31YNwERcPV1AWBuN3ZDwwYDhVBVLMeRnd9pax2ctPCXG5rCwNwL5Lo1A2o2r27xxVwBrD7EAEhp",
  "key16": "2PQrgQ1SxcWVPanNTuUvEvySyMVpPYwML16HMJXqi8SdnYFFoMUoQyq8BaLJyvDp237LiffYNbFvLZXqLTeuaez6",
  "key17": "5Fbpg6qzjnVNc3LycURcedSnGXpbm9tSywmXQacsaHPWWG14vtFEyjezX9uCytbU4VGpQ3DkL2wLSJa88x3nArqT",
  "key18": "oHuRXTNG5Sg3MGEyrbMDbDGyD7rDu26J7dqqxJ3wy8JfjBJPpuCjUecovWDS4AFe3BqVzZG1yHCoq3h8JeUDroy",
  "key19": "55D5rVWY4u3Di4FytxvAv4YrrkcbAu5gU7CDGEbSXsLCwC1gEAsT16yYNobkwUaUWNFXDEwdeVdvTp9gPHj6WBqf",
  "key20": "4FXeaEFrQzvL12o84qmseaExqnCALoMno51UqJUqkzdGqcBxA668cQSKNdq2bxbztWFectWZNritnvNjysdN1v7n",
  "key21": "2vz6Bny6A7yFxAgystmo6Q2a88EdPhiuKn5UMMVLETw2peiNqi5RG9MnrB4NmV1umKruiGv6sX34FuqbE1cKQxaw",
  "key22": "2tDz2Ut4s7iT4CxP53W4hrYKMDgrEpjf2iMvBpKRbmTcRqNie2KeT5dQny5YGdz2zHHast8vXLHiX5wAyEAd5kFn",
  "key23": "4R8uFG1HDCCC5LLCQ8RXZb9zjE7QhjcX2jPLp5D26A7neqWzoSHfDRM8DDzZtjTYrLiLfJuBXp5LSmadJUReyPoW",
  "key24": "2x6RNPWKsHRNQwnakyXLWFFTZmp6X2ZLWzLf3eHRze4K5586Vawg5SPw2cXgbE6EtwJDLeLxt6FWVhzuJcK6zFwD",
  "key25": "4Knpykrtkp8mxCruiyCvvvmCG1k7hCesSP4WzqZePX3LBHvSPxmAJjtoV75nth3K5KxGc1eZVujBA4fJixkRZrnn",
  "key26": "ZEkZv29JPyNox2VhRP1k8cyFk1aNeqT2gJN27zFruH3vNPmmfTb3cFCeaP8tEaYVxT1m3o3eCqXEg4ZMTbEc7bX",
  "key27": "58uynmhz6YVaKAcVFw5dJAxXCzAsevcfNPZAVGNS5cVeoRXp5LfPYAQKkq2DmXsPPS68viFgDpLeYLn2QamB7SEN",
  "key28": "5xYuFiK1zXVKBSU1onJiqDdyx2SnKZWqqJT4BSAzUpRWHKhocnUHo4LyxPDVcRFGQd1vLMZB95tBvi2yUVovAjCa",
  "key29": "2zhw3HFHZuxe3FWo75p1LZo7sXPvkjvaUdS4ZKsmtupiufwktd9QS4uZ2TMvbZcTUX9BVjNNsHGybwosaSTi1UaC",
  "key30": "4p2rZZsDA6HSH2fZgrpjYjsZch9dyw1vEnFcE7XEcJ6Ma3yjsWDxFRsfNtWcWiDdzo3TDs4iaPHQXPg5ZTNV9NB6",
  "key31": "42mn68q7fqh5PtdHEYuYhKFxd7KXydZuAJYjU1iKqC9zfgCQvYb1yDV5m4qoQpF7iMEAkgLcuJtgcHoWcKA2PmFM",
  "key32": "59XtghAsNx1j4zju8MwQLVhvJgVjbC9GafqoVV5cMn6KnSNBLxEWWVZ3Pt5Zos3hwfcKPBCJL3W4neCxcxaSH3qL",
  "key33": "2ouKh9EHKJQ1NsC6a43pBchVpCsmxPv89jqgGT9G3ogqNfp8Rde8cFbmDpd7qfnuyyKzwMTpULc2TvB5UTKwcAfr",
  "key34": "2YuLR2j1MP9ujAxQMWHLGFwx2HR557w8Zg294oZTktCgNzUuLvnYXDVvm31hqo2yqtxmmX9zwvpsjh6Zowf56Wmt",
  "key35": "49rNvxhWwJDr629q3fnfBgyfGEjKUo8o16czcAuLXMx5Tvq2d7tXEWQLBYaDDLeZQbeVHqUnwJ5VzJdHHq8wkMLB"
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
