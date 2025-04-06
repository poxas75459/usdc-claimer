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
    "3L4jZxPvtm3eyvKwacPFWP1ksFEiKvQQagxzp36pQ7tH6wvNHUn6Xc15SdjyjZoLiSS1UQwhk1QPKdsouJLqtZnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wwM4vGKdeXAA8put7BmXUNaNcTjxCXWxBkQ4oeSh9a9Fh6aywSFoF71wj6k2fxpPWbjmtmvDtZiELiENim6CJFw",
  "key1": "2a6143tFCH35PfcLYhKq17dyJ5Wy8SYeJdC2rZjxthFZd4SkXWj4FFSuzPhPd4nmvY9iMfZSLaJS2kMjEJEQ94eG",
  "key2": "5C2TTiwZcWzA9yJ8txh2BXPVdZoEXz5JeXdxz7kT4zVsUBzw3kHwUVXpqpb2tsp37ryVEtDvHFW4HuDkPFLsV74U",
  "key3": "281SUJZZ3vcKDVcWGGh8yGxBiY2W7siY6rFbvQrLBcdCpJun5Q8mHtNAHCUrtFVeKsfkvoN5F6QuQTTAiPs9xK3i",
  "key4": "dtqfiDa4H7KPLLir1KK9wuuE2gcbfsFEdYEWuxkKjQjsEikSU3RFgApVobXyXB31XEfELsYYKwtwWU4mzVDc1bi",
  "key5": "3s4qkkKuC29mK13K17p7vxVi85rLHx2TYEZCKodhoZoPQX2nuTWJMGSgbUogPKskkAbe7Kk7TsW7RYv7p7QgMaRx",
  "key6": "3rWgxcvFz2mHU1Z4UAYrjFry4ucULCBxrfBR9hhWe8ZUorsxsmC5mJVoCXmKdWxE51mfhPxAYDYbtsSEEmCeMpAs",
  "key7": "2BN7gP3qhXA9PRSJ7pgMbWT66nqcEioSWJRWknhC5ayG3PrQpBnosRBQHfLQw22j6bzeU7mTb65nmWW5jctTt87X",
  "key8": "ahhU2BkKHRvkcGqoRGdgSLn5yrUamXhNpdsNvXAD77Vgb5B2HQghNUKUxs1uvKwhz9GQ1cuDJZ5XPJmtpbMJnh5",
  "key9": "4oB5W754JQ5nZSj7ajjEwr6qXj4TpEcgVKYzbibMm9T59dyiNAe5gibnTUm3MDPrxzLNBuQ8yKxGLg33QaX34ja3",
  "key10": "31ortYpfLvZ2Ey8Gn7ZHsPAWKXc8ywGwX2RtRAcvtPRT5Y9q3VnNQpNj8gipyZiZwH4rk7kgnwAfUwpMpt9qGbFJ",
  "key11": "3oxZdD3TE9bNhU15jvsBFKLcqb5iVmiULsNAAFvwnG59wGsDBM1KoBQaf581erRZiQ29yGrEHzTEZ2kKb9UeTnnr",
  "key12": "34MZuSwuMKb5cEnWR8vvUdAmyKUgm1aNVCH5dKSKgkkffZ52AiBaJqMzhVbrdcbZBkniGPLa2vRKz6TpKznqqQCo",
  "key13": "SGPoy8Ej3QRnMxUMHHk8ffEVvBnYyCUCTiN7CtQ4gk2fgdKCaU4rcAuVnsU7vZ5BeE68fkPsBsRKEYgJvKNaGQT",
  "key14": "3Yh7o1rxJciFfjTt38ma2Z7Yzm6NZTmi2UY9zw8XBYg2fPWib4ywYjgoK5d1wCCLSLsMPh7QPnjYpXxtCu5iqk9e",
  "key15": "65WjiUVssTqNrzDf3sPtAiUqB3Bf8TXWAHjjGyZqa2HEjuY1ooHakVrkuk2J81Rw1BWzBTEE4BerN45t4QRJjCEk",
  "key16": "3H9CbXVzhKsq141bRpJQvD4Y3zSHM6w3WavGXbqMnuGNoKnwHv31Wuvacnfs5URStRTsEf3JqVm3BY7DeLTWWt5G",
  "key17": "21UArcctKFp684ZHymEkjoPJKsYdthzeiBecYNj6ebdLzUApok7JamZbiYNJysUQKiBdFnYknhnCZhVHczjCz2wZ",
  "key18": "4KYddDQAso8ESWof85cj3hb9faEcTZQT7NBszoRCcUoVVhJcUcNdPU6ErH2yp42aRxFQdrgoka4FMbcz4HiDGocg",
  "key19": "3c5TdPDRQyogrHeMJTpCBdcj4isaTsBn3q5y9RQ83gnkQNiiJApGC7CXZeWTJxLwMqgK3UEqAbFfTMmzdLn3KX9x",
  "key20": "2gqAHm19BKWuPk1S45pRKV4cVxe9PtQjECMfeM7W8zpkwX8A1cvFSj713CCNTApbdgfRLwJ8rBeEut6fWkL3abyW",
  "key21": "2BLoFLXHpL24ctwb2rH9uA5xtDS9FHtJardDXejemRoq2eTMfypCwNW5CtmPd4s7gkZRgU91uKZcQqthUoFbwnye",
  "key22": "2Su4US1sV3Ae5K98E47ZEdS8Qn5r2nkWfzGWEaHUErs5hFds813sUMSoSzQi1AqYuAX9K75LGUqjQbVAQb3E1Fgj",
  "key23": "5zitWkUdkz3sG1PuceCzV4fxXByiqfAqFEv8sDAvg1hRRqRQ4uanv2ZdkGQMCybYSmZDrpboPFz1KsWCXjJcmgrw",
  "key24": "61cKXquWekJN8HgHiKzfSHzHKVhWmL1HwAcPdwnz1wbuFGMxucCY71VLGzJK6fdN1oWGZuiXCzmD7hXUFKj7xZs3",
  "key25": "2S2P8f3Dc1NLYWdpm4FNm9r3RZQgi2fRSpNde225EZnAD5ZetKaCLVgNAeZH8Bbi2v8XBXXUgQ73mqdZLcLyq6RK",
  "key26": "31YHhYdYLJvfDcLUSQCRboN4Y4eGpVkKwCMTuQvPiXHvdXmnVnYYwHGUMp4eBX12jN78DrskE7QQ2ZgHM2kaQvwX",
  "key27": "sycKGunSmkfjwPp5SoSuVuSLuqCaPvqBRSNRyf2oCmar3E3weqGbFKUJTi26njsEugVWXRT8eAGAaY4VLaUe99X",
  "key28": "B4NqDSQt8TKg6VZKmniZy1CYieiCDkjZ2nHVUiNDrMd6yUUemkdMr943KdynTNG4hgC3Rz5Gajf8mh6Lh8uq64Z",
  "key29": "2M5A1DNxCRixQBtoj3mrKCN9vMVrBfa286MeSoYzuZ9K8T5Nv1dWezoVqQHJ5ZFCDn7yER1zP9JXFwQ1dPye6QHN",
  "key30": "5sJdmrsEtPvGJci6xUzxFBwWdXRUtXGTgfRpaU8jraf47Mt7HB8sNV9yss4BPGS6R9m6an5JVr2nKw1a9WMd32jQ",
  "key31": "3kC1663Wf4razFDy74MEqWoXmdPzqQxJn18HJGcPdzN1QgDmLh4cNxB7nzcuyeUVMtGX4ZkhPYGvMVFEn4vAuBBQ"
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
