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
    "owNknTuwpHeWvQcgeNnDdJLen2dDKNbGvkBus4FoSYaexEeJPoqwQcwapXYWwD9tchdjSMFvpb63tcCzxDFFpNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mrfihyniv3zgbN1tMbwrBxbhJh27XZfXL38hVRv5wZX4aLeWBG3JHNUZzBc6FN1rwhyH43Ut7CM4tDDMJwFEKks",
  "key1": "3DszwYjuprWYHTqHpKdmQt7qPKAEhdvP1NjLtiJTCTKDKCzGjhW2qyfrmBstyEAcJ13Z15DqbxAV5CLG4nMX36Kc",
  "key2": "571KbSCANmTXiEg71YJNHPfbpDRy2aoHFMPbyVNcUNbupNfNhY14KpPJf78Nnhsxhve5Tw55zEBmhzvTwTf9nbve",
  "key3": "iBL8R3VSfczrBxS7hKLBMzD3JzdeUP1WRLaMKqz3t4Ns1ENzhF8frtqafzRs8L3osCLH2wjB4C4o9WdXDsr814V",
  "key4": "63NFZCJfunfASwZ76Fa6nLZqQvCUdNdRMt2CDAHJBWGHmVxyodE7jXctguXDdjQ16k1VWyho866Cf4ekJkHzUiTz",
  "key5": "3zhx8o2Qox2fbVTsX61YjxGMuSxu3wRE2yEweVRJp8eL8Q8ZfpfvjMKq5h4uFW3jq2Rup2Qr5fi9ntjUcRVK9FMN",
  "key6": "53r8SXM6YT1y22hHNiy8PgcBbP86nGffoATm8PXfopsfJGEa4rjeCKc1XsbLRAuamykqRNcwuuGdqMgoRnP4Pdjy",
  "key7": "3SuQkcikKXSJ3txKkbmT2EqJfw1w5AVEEX1pYWQ5RMv9eE6R56gG46FRreQ93we8DJbyiTvz9prCrDqwKWRAyNoz",
  "key8": "66FGEYH12BU5A7BpY1TcTETiwHhYATw4JhTiuPVMHpcKR1qhuLecF7vxi7deyuQ5wuJcToQdQJuwkA6eY4gmUPGA",
  "key9": "3tcWtCmzNBEZmso8uEy1aPoygeD9zj9eakXrkuPzuxkN3dWyDMs4EevVGYrrgnbVE9gwozynYRfT8Bjt4D6hm57e",
  "key10": "3QbJUSg3YvszZNXuDFs715sFrKysVVbumGvQaUjN5n3qN9qovQ3QanVm6nHAWAoPgGGGL4tL6Pc8MxZZiYReNZSv",
  "key11": "4PoMCLgBp9kQM7noTfoSBJu7wZhk4ahTN77Koyuvc9jaAZG2xrWReHmdVM2xUXLit5yjrtMPDubnwtpLf1NuftSn",
  "key12": "4BkFyRAJibsRnRSdVov9S7vF496edadqC2f33Sd4ofbrQHJSzKgLFpMvwU4hRVt1evSgKtQxGYXp53LNMsuRF6kg",
  "key13": "3ErhBaAfZwz23uwKxuf5z5RB2R1JaFRxEZdCC1Q58TVbj8RFbpZfrzW6HMDvdtA1Ftk7t5J6fgStKcj774XKP7hL",
  "key14": "5bQGAWSdzzKvfj4JTJgwtvmdtarMous63W6TowEuXLj4AZrKMzrxLK4RszowxvbabbiAzhBpGauPtDiYHsY4HrrN",
  "key15": "2KF51p9pnGZ9CgAek5MTkZTxL9qXynNYgTxRWFPX4rgF2mZkYVG7NAUkoELz677zfgCokEax3hssc4L53FDPwFKb",
  "key16": "3px2uc8LLiYJLNNVgJyvvZE2W7bq2HKvcBy7WScv2XS2UWztBrYsgBA29a16XAS8GXb4BP2DxE94d15Vv5AHKUH9",
  "key17": "4ZxL5KccMaSLM5Jk6bUZ22tniaZMNQGgyEidBbMQD8uJjhzLcMcJ6ftcsAzZDg1caLWmEgvU3w9jfthhFSRhSrJ4",
  "key18": "2NHM2yPGYtg5D6vd4tz9143CwMJ4kShkrPcux11RWzErr4QcvJ2EM9gut2RJ4AnAZh8k5ev6dAoCtYcDF71dCnpe",
  "key19": "5aj3b3ZKL5JuHd16cbYA8wR5ThBW1sqVRWBvspugFYBe8cCYbYuRboAmPmaDo2w46j5cPMyUgW7t5UBWprpkniGu",
  "key20": "559YWCknf6cVVDqeh9KouyYtnuzHGni5dasaMYe3ywb8nkDphTv4tNfGztu1JxX2tA75h5T9P6D9FfYRqvMYDtdp",
  "key21": "35bPnnvjkfDPeHtU9JXqjdCSSzmYXeR4wrJ1h9KBf4NpWxjgkwajH3xfm5Mfm4pnHjvwr47iU5DEHLm4x3d1dVMJ",
  "key22": "2KJF2NpPbfggrzMupUCmeqx6mZbp2sa8FJhgsueGnutLa4gN648fUS4ukp2GVCr6zrfJXsaihemtzoHn8E6QYutM",
  "key23": "5de1e8neECh8KUrE2pmmET4eWStSZutwLZ6Va2XKiVN7uF7EGfWE15KFuf9yqXTrEUestXN18QQHb7bm3E5Ttfxo",
  "key24": "37vV6HiTKe3JtoRAsaDiC2pBEjS9d4qrZGzyanwCtzWAi6fV1XpAsAx82axQPXGCYbwn1dtFbCquWwH5CnHYoZ61",
  "key25": "3yyipDshm42Ws7W91KKgAuU21B98PW9QDyHNnrFBg4LMtyiLQzExteqi7zQpUGFxgVnxXPyLfDFQRE8CJaZh3h1M",
  "key26": "5GJ9cvKLMPM7ZT3ahCUbhM9xm2YfqTCqd4MxHAWzbDcAJ5WpGARNxZ13vUs53xboit1e5xn8a8Ck7mQK24jTxZ59",
  "key27": "21mY7RFA17VqztCXMmsdxqtBe2RDAyzFCEoaD7zuGJStbffvn4jy6V5n6LtqpjRMgvNSDdGBrWeBPVax9E2pCLFS",
  "key28": "2RTzBZkz8AzCJvYt1xSJ57tHFDdgxPFFBinKsVvyQaP9wdFDjb824sn4b9oG3YMFyQjpLAVtqN9TLJ7Dh9GFg6g4",
  "key29": "5wa2LLDybdZYuNXdbRFZHGUNAyYng4iYcnPvAoD86ZcaS2jAo3ZuQ6z9H2Aot8Eb4niUqb22JDapzv7KiXQuoevZ",
  "key30": "4t2DWQgAekxgaoRVNb27xgQaXAmDay9ixrru4RkCJnCoNEZuggLDZV3ZJSRBEHoYBtTvFXoUKtFPar2nLQh7p5zf",
  "key31": "5V3DjSQw8qmqWNkDEFdn6t1pGRVqek92Ddvi1Fgt6xKrWekxvEhutuBh7sMWL2YX2shPQ8UwXLngBLunNqtUCYLW",
  "key32": "fe7u1ZKoXmo5SgUHFqzLizq2taffAuZWHja5CQNySgkgLyCTBbJdq2ThBmoCHGHq4TsNiRQejdNMNpmojeQUBxU",
  "key33": "2sczotSrvhJVjJPQVjKYDuse6Ty9mAfyXQwHwjstTTc3hQjC8RvBgGrVTxiYAhqzmBXQgRsForxBPzvFjggLBo8h",
  "key34": "4aYtiLHBKuf8adWUAXRuLd8h9Bv99QUHhhgH7D5q4ShVbkA7KRq6TYVHfVga4dunSC8gBiznDHtRnZZNPBnW3MNe",
  "key35": "3aWr27Tj2ehYGKw55q7N9XYZkXP4TzWg3KUCHeBH2KqNM7vtJ5UufP1PsNT2kBJq5dZa4YA1u9FqzCDhf9wLk7Q9",
  "key36": "YzYEAjY3gCoWmBSYMEPPwcT8B3h7nfGLeWsZSHZGGE9bFwAtydFztEYQ5Kf4TFQ4swywKkgHFARCNxUdMyA8YLU",
  "key37": "4dhREzgzMV59HcETYnLBhumPzJHHxB5iXL9g3vc6mnfCoEUpgfjYGstUR99fozoXLJztXJzxaVcKEmF3ToiTxU4Q",
  "key38": "61dwJun2VuwFUDswb6KNufiaGwPgUcSZnD2NjUMrYuHbUNB9dZEJPcceicuWnNGyjF4fJKFCYSkaV4E6UYnoT6YW",
  "key39": "Ki6enHtPJXPnRqhJY7F9Roi4XbrQS8HDVDnnpUmuo7MWHSjTuF4kXKYP43YLrYiDu7Wxq9UAKEyw5orko8gtGUw",
  "key40": "5e2apv3M8sLd42oYZmoRxJXkM1qHKgqNEar1GcrFrwQKDMLeNh9drGmKXfU6y6R5V41qFTjdcDJ51Tv7SM9xyCbo"
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
