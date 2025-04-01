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
    "XQYQQgM2wjaRtrsSNojFy6iqmu8vw4YaVpMBhvVp7Kn2zK3q4VoGgXmUQa2bhwyFtou3uJLdCfEN5rmyZDbEkD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YAoXS6MNHQM7H1oeVCxdd1fh1EWxEYsMsaMJeAujC9WzxVhwdgm1hTFpgYLZhYAGu4Wpg6hQYa6HUMCDiTHPrBw",
  "key1": "2h6u4PbedFeUKuc79xgANRjxucdGw7zCXa28ihbG6QgXBiCi4RKeL5wtARJvsj3zt9LtKQ9yFvRkG2QJBJC5aFMz",
  "key2": "4ZZNnu35A8RxH7JvvgbkX6KTVDpbyECXWFBiLtiYsLrSSYSeSiKvNGKJFNyfT4Z8KXq236Kh8pXMjtaZniS7Bdoy",
  "key3": "4kz9zvnp8K92DQ9f3aZs64tgRxPy5kuQ7nmezNDEjnm1EHh1pQGctgLqvuoasPsHuk1xq6KcoRtexTZreX62MRzq",
  "key4": "4HB7U1vuqczwM8vDwfExU4DMQ7cjaw542PVdDuLb7ybiUV1HBnSgKEjeFW87RbTksqT3DGACG1yxspABBoAncgj3",
  "key5": "5g5sr7Ww1JuAct1BbzMhKABaSw5Dnnotb2X5XRyux85KNJ1fd8CBo6CyX7opyAeTJcSJb3VduSiunKJ1pKhCwfeu",
  "key6": "57rBnuSsSE2xKX4WzV1ozH4oyzpN45JdRLyfo8fP8ToX9izUecV6RzZViZhapA3ESBUeq2hxUnMDvHKQFV4CbvNX",
  "key7": "2Z6GRz692142fErSxg2kjGc8M96hBCQ95SHDjEgEyY3VjD3BVxZXssBQhZb4MCb1USRuAzMztT7NESreVfKQLbRm",
  "key8": "4ycMppeUieXnVjU815EZnVEYABz9MHMTShK75RK3N2c22mWzahk6j7ijHUGEUJxNE4HiQZ3MV1iYEa69EgWehoiX",
  "key9": "3N4FLDP3iuV4et6un3UN6L7Zc5SYCom3hR8DPMpebfkjRnk8vPsBdX9xCKEVEDDB4zfpvvypSvSBKAibXwrtMxsG",
  "key10": "DR752nTska5RhvChpu7sFzJCfXAYPLMWeXHyVr15eoeJdTqG2e8p9AyiVXhejwjPQkukGKVcmfSeXHWNfvnpbxm",
  "key11": "2qkdZgEYzv3HwStC5qGgynU1M38z1pFmDj4rGV6myvZCZ2kDfVsB2HTh4UbgeUXcvgUL4N1AgZ7TamaYf4KeYR48",
  "key12": "5fL2dQg67b693Huf5Ztrs5XsyA4GeceEomD5ow9NtAKHtbQEz9fsZ2xLX2iNNL9FpviRmaPL4j6mtkbGcTMxd6cd",
  "key13": "4AwjXYKmEzZXXMfSsrJprFokWcbD5BAw8onpfy4ftQqA2NczPKLGgJF2AqQTKdErPsaU3KtMLiS7T2Rmizs9NZbw",
  "key14": "3BFdAGUWftWVikSAuM4Uep3chgrw6x7WJkg77or9SaeYkQXMwxvEND3HdyeaTdhdR1YY4VcQGYTJGyJjxsvcgZqE",
  "key15": "56DnSFLsSFPcFU7yPWjU7ARvPZ6GYmdhHcc3nT3CnKicHRJ8a5PEAdDbXJFBuWTk128WcQKP2AG919VyKZLz7GJC",
  "key16": "2Jovzt6C6QRPTjLGsxmxvuCatRWwV4Q4xBxDpc638f9AGe2dg2q8CVAWdRHY1xG6fcz7GrSXwHwYf75UQAvpzPhC",
  "key17": "4N6LgRGZkwpqD8LWh1zxWC8PeE86SWr3eRwu29J59Vi4eaw9Ao8n5mXJXqUWeY5SvDqwbeZxM5TfXgjNPMFq5ZSe",
  "key18": "4mGCsr5XhXsPw99dp7bfxcuuXhZXU8bByLdBj8Htskdb5Czw59ptmeiAMp5UWk2CYL79qcuU7uLaJm55LJi2bLmj",
  "key19": "Uyc2p4gDh793ApaT4iK9hQHNf9mTEGLuHQpCKoyKY9XMyAmELpstrViubK8jRXn95iXdJZSfRThnqL5AVBAGwiN",
  "key20": "5ZMgifmpDz8NpGCaP5ayR9rVvay8FwFJtGV3W7SZhmY1qC8BeDtTnUdUC1v7MBn7mcUaUa9wGDG9hEHwzR2LsE5d",
  "key21": "5XYSJeqPvd84w52Ao2e22QEF98U5yB48GpdVdHTupXUHRBMyaNVMv9T2o9uwKGwXtq1C5iUH8k2cR29xKbvXLKUi",
  "key22": "N4zyD3eKm3oPE72S3mbzkvX7Btbqj4TMB52UogrwNjH547Jb9vTQFSYwGSiF4F1uXi2mqv4FXQb89HtoWhk6XZ2",
  "key23": "64bweA9TTuJVZH5DSVLnWqUrLUynsFthz6SNwZCALoffZoDs1vBmANQ8YVt5sjAxbGFTVjMKj4tPqiHvwEww7Mby",
  "key24": "65Fh9YiX8ub5cVgj1fcuwRhfiDiGn5gqPPPR8vCVqbh2KyrtGtaU9nD2gTGtn6HQQqRvRaE3LaBCbF58KXZA9bT7",
  "key25": "3DBzzZqdVdXBptZwiG6kVSq86oXm3mtfQTRrubzsAwewn9A4W4GJPLXUcKbjZoBDdgakWuWNt5ikycSVvipxG27y",
  "key26": "5Ztp6zJNirgtypsr6v7pRuyNaAh9c58g9Mt5SwtRYqUpmWQrVVto5uFDRvii56RjVV3FzypeqcA8XDJNFA2Qni8f",
  "key27": "3MNiocSUA2nHDuGBPgNai4GymVG4btqNWkBQ3zmR7rJrdxj4vDFtEEBgf7NuEGdtYVHMGbmWmU239Sst7Bcixb2P",
  "key28": "3ErYZTVr5rSbSqeuSrVEEQaVBFvKZU3HUS1R3WtrAZ8S6675vDZN3GJ2UkdgM2vsvLN3xvoSiodo9bz3xmKstYrr",
  "key29": "5dSxqv5sbniJpm5PWvNhtiothABjqF2dAooCgoJhBmVKp9S11b7Kvz6LJ33VrwUcV8g6wgvjcBugd8npiaynrpVg"
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
