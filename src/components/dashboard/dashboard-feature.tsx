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
    "3jSywXbyXWi5xxq4idpiMwVL8hBm2tK1Wtrtomke2NubggLNvJw6AtzPQzumGre2tTSdbLYU6a3mSh2G98bgzjwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bu2HUaFU98yG6CtUmDj9snTcx5cpubM9qiLrm2SVH5qPGpkU1V6Dk6yjJ23Chn6WDLmU6vnqq8p2sfcxt4NQZLN",
  "key1": "39QPABxB2WzvNWExWThGoCDqioXZyahEu49tDYbp5hTNS9rr4XXgqussGnbMxDMuXNShpEoPbYTn36dAWiCZdVmU",
  "key2": "4dKPNkUh76JmfcEiP7cCskryeSn85pjz7iaG1NURs7TbsPUgSHFhPGNYX1Vzy9nqjYJjq5boidD8TejF296iTRDf",
  "key3": "4ezM1v9ZNAEoVezxuQ4jEdi4p6TeHGLf1WdgzaF3RShXe6RyfnWBnJYJsuwbuD8VvYpyRmGogfWr6xJpcgRZK7sz",
  "key4": "5GBMskZoB2QabSyy1iNcdkjfG5KFP6Fuf6YaVKtozNMPCQSCi2X2Sykjn8K1ob2kEZqizVc3RTF14o8UuWr8waSf",
  "key5": "2vF4vzDnQ3F2pkyHG6fWypzc6qaM8UF1zN4UWjSUhsgank17QJZVFbnzvBje5G7LLb6vajZg1bUGCsXzvmPjLEBc",
  "key6": "3MxcvpaEBQ2BbgFmE5N2bDwTUPKw5SaqyMBj6BesATZwxMfd13SZnLrofwB4vuiGrPK2SBfSqPSPSU4LH6JkwJD1",
  "key7": "pm1toJWuWEmTGeDztTfxRnFaJ4UFcWg7vgsyBazPAc3CPNAwhbQnuJZMYdiDVjCJbEhQoexdGLe1nBBR2LAGv3K",
  "key8": "4CcLTxbMQ6K5qT7Beag9cmEUJkygGuRbLX6CzQDP2HE4CTuKbBU7TA2Tr9mXGGR7nNnP2Cob238vQaS2XhQhduLp",
  "key9": "38i5AechQ4C94rs8quFE56tYucZLVz33hJy7qkCmPgT3cRduBzTCvzaqh4rziBGafiMRUn6vXWS4RLC382NfNnFu",
  "key10": "2MmzX8Ce34WXKk1zv98cQsfndadT4NjA2XorZenBhokif5ci8gUKnm167nVxkgCC192w5bppr9Lq79VhrXyAZK3d",
  "key11": "2J36JyM2iTQeqAwTiukRdAd4GFA5ioXCQA2TdtgbwH1QZF6V6GamDSugHhQoMHbt3v7YgosrG3xMntJ4yj9Gwk1x",
  "key12": "37BjMD3rVC5DJ6XVtfZrMuxpqfasjqsbTfVd8HRif8ftcfyUvEY6MVj4z4C3yYDoK8dayFJY9quWhmg6vAV6hD3V",
  "key13": "3xLohwKwWNdVtZFBWnrkPWbnMoupjnNKRtNjCzmkSU4Mjf7T1hiszmNWLoN8yVtiQdppaVzThEcxjydBeGtSS2dz",
  "key14": "2EtweF6yyBx2MGvpiG4hF6oxQcTuefkvuN3pWrHC8tnHbhuYGJsMDZKY9LmHgQL1qow2Uc826wnJ6GJEowjBkEqV",
  "key15": "4fRxdSwesvRr9tEZSKFFkNhdWawLVLfmsC9bkfyLPwwHU8jhn41QCNdvGQTe15eLZ2h27iWJPBrtkMDvEs8m4Yte",
  "key16": "5jR6dfaGJMjCr1xK1pvR9FwLfBFATp36aEwkvVgWNC8UuUeZzosJreiPGobB53eqchpUnjYFwJzoTBcBuUE5PRy",
  "key17": "28KyvDcTwjS3TN94U9Nzm5wrvk5zHz1fGoSvqMjLyNFwgpYSJhme48QH4mXThrydYve3WQsQ1ufEGUj5EwRBUcDn",
  "key18": "QR8vk9AB8umQ3D7YHXmgCJMD5jA8UegbvVtVRzGqumuPcBSUqkBprrP9iUfkEr3xyTyKLjdd2L6tGbCjgUwvfQh",
  "key19": "5Xbh6S39NyHFbrZ6uBwJe6eCiyoAD9TZDeLBuMSDZC5vzcXYkrKbsGSFm2G2LFTUwvNQTJ5p1cSEQKyJVsz23G27",
  "key20": "2iRitcSfdWRXAHFmxNZ6RYxWywN6JRpK8RxPFE9JaPAHzFiiEzuqXPLq9fqiUvygLqTizmWkffWYMcpfTTLEtNd8",
  "key21": "3ncuJ5Y5HHckXw5AYTVVgwhJwWoAJ3UQvKtQ7kY29n5k1FtPTKKbRZkw9p7DsPPLxCLtRgebnYUxe11ZBf6k5GGK",
  "key22": "ocyBNHf6ZvH8bGcWzk2g2LQquq2qFgSvYviBicevobGuGEX3sdfndt96UHBMpR9Lv2Zruu12HyJv5QW8yHHe3oR",
  "key23": "43spogXUHDyphG5kV5VxNpHoatMXHzayhZrXtKSt9uqjY2PBrTd5rGPBSbNytoc5kqTNhX38jzmD5kJNK5Ezk5j3",
  "key24": "5UT7qSQsvFMedS61SfKC37g7e6Z812XAHGcgU8NFH8tQeD4YtC8AF2c8Y2WCbFTPqEVMbQrMBp1PLJzKXJANyi96",
  "key25": "2oEcx19wbnMb6MNXvYcjD51HKwZKV3b6vVxBX3csoWKypDZjFoTV9byEXPt555X3iG63qXi5so23p9pmdWgwsuVJ",
  "key26": "yyZ41hbipgKFA5vAKBUfRQ2rGGGCiz7icZVNdy1mUFxPYoBa6LaRQt9ARv8JdVzh32Pf31dCqeNrBDkUZKVBcFP",
  "key27": "FTVWgaZyqz58ZmV6en62ytjuRShyccCNRQtcArZytjEVCbJNhce4JetcrvaSax3A75oKfton7bSKLJvTaMGZ1wC",
  "key28": "3BrHDcQqnRnhBUQUBmXduBqvxs69WmQT3h2BgDQSibnkNjEqLwzeJENnt45oX4BpcXKFvTz8K1HAZXJuMUKkBrd3",
  "key29": "5wJL5H7uzLWWBSh7TiSSpBcxtRqgnSvV7nraGVgT6zNxyJuepuSnx7HnEWty6qA9jdKNyjo6nU3yLXCy5DLUirMC",
  "key30": "2koAdAbZuNe41uVWUFPB5VXkpnxyguCy2ByJS13o8kEEtemjxUKSwBSUh68rt23YcNHUDkcPPGttne4kuKkMwRMj",
  "key31": "3ryb1MAsPq9sFk94xG9wgfDhj1PEs3HqjtRPRD11hMWQpUiN1iiR7r1svUdMDSwCzRTHbjmbyDbueWF5kfupZSkS",
  "key32": "Q9caM9tLw9qWYST89HQiMBw8LMNEEK9im9FMn3rV6VHdcnx4F8esjYbJjTRCxYbucVyz8XuESqXDmmXTfuwEFFu",
  "key33": "4NXHQkyndwzABPer72gcVDYvosQT8orkFBKAja3HCy8Zzp4Pthc33CtgVvekzVJ5Kz1w3eG6sZGSPMsbBHFq2T6Q",
  "key34": "3CGnUBCyiyCFd6AVqyDR9Wo6hjMc7DuFpFmsgNJotn3McHWsDmFHJ3d6hGsh9yRkvhoWH6sseoBoGeeLeCuEL6GY"
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
