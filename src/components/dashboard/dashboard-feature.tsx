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
    "63VG2notNMCbJgAtkjkyih54FAnFSt71kRJ5CcaHYmes4M3C2STAmQKDc1rhFCxjZPA6UsG96ni9gmxsXvwbGPcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wmJUbbLdZPiQnncvvDm8Vd8p6dLb7KqsFC6DMkrHthALZe3iFo1e3mScEvrzQcFoJdSyPqwv9TqA38nUAjtSLCH",
  "key1": "6493krgAtQY2tKeakxubBf8QK9anV7BmqFu73MAGPaYZAfin5Qy7T4ZFjVa62v4XMGpe9Ck8SN492tvS3xCyzJSo",
  "key2": "4oxXa9WUJcjvBuWr6k2T1FMsFjbxpFBKkGia818eGWB93Wm5XGSKr7qqJ9x56mGpkeDAL759SzRiFxfSLzxBKHRo",
  "key3": "33NXBNvkh7VV6mR61GvSdMZExRb2jyogpRYwqrJ1WXVVTX8skwJj7BNEDPDFdzyesatJoUhM343N9BPTQz2ytfyz",
  "key4": "4Kt8KCVkcgQXZxpcncquvLPFtsv1Z72fqbSju1c7ejuTjFAVsT2jyGJRPManzFQSDvXwCg6Ms3DZ7T5JztVdFFv1",
  "key5": "4fibepjEintWczakjkkon5siPHpHWxRXKGJ5yV9B6c23aP64xsrgGPgkB8YNWiP4GhkjfhW787FCdf43Bz2imGQ2",
  "key6": "2fVuD718rqRV2QbYxrsNy3j9C3kNKSgG4kgGNbV5chXK5F81rqF7CjDu9VnwPPV7aRkMbzAxj7KmsbYFtctYXZCW",
  "key7": "2hTKy3MRDTDSS3LqcZg3oeZHST8w5fjcJVDmYnNq3G6KsSogh3iqYX9NJztBqCCuT9rPraw5Xrvp5X7uSCFtamdo",
  "key8": "3XdPqVR82kXvFMJx91jpWcEX1pFBgq5Sv5kLxzdQm1vkGDh227E1GVZw3oPETnVXs2yAkBWtFXTHwu4EngijMhPb",
  "key9": "563Shea15vX1hGu4E28dY8KaTnP2kpgLJRYNiu5eocVFHNWqh6btEVdDNG4qTPfipWL9hfL2dE8cSEEc2f3czmjk",
  "key10": "hFJ3GcNV4JjiETqbumTSjocSEtfqdD31bX5rzs66etPAhAAnSfsrbyPws6u7hvHDrFkQSXGkbssdPUKqfnmbaLb",
  "key11": "3nJ6fyssRpbUN7jVGcRGBcE6jixSrs8v5sry9GCyzBiF9ojCh6YU2hp2zz1X7kAr3tnFpo6px5W4UYVDNKN43ai7",
  "key12": "3imGPvJDo5XJZrwTdkQbmofiBHqEzQjhoEwwevKTXHDoH5ZsVZ5UXE5XRBdMmZRNViTg9y74bX2bHTxneNHZyCEF",
  "key13": "2V9WmwxWEsH1q1EK6AGcixGwZWg4pfLnkg94zG158nHETBstW4qy29EPDHS64QwQ9QEFKwQtkT66QVnmU8ZQENU5",
  "key14": "2QBSJUB6obzGFJ8VzZM3rQrw5ZhXa45tcf9JnW725p5yuYuVWgtgdr1V9uy6cNGQjUPKRMjQ574HTe88EEUWd6HK",
  "key15": "5FYqD9uGefnNqyz52AKsybdnhbSBNDtFBzY1wiTK6sRW9yjWd4uwgJtjhQvnVdRMsg8WnXgS2RbPboW9agDHFUp5",
  "key16": "3EVueWdnYr92yMEAaToHgwvyGppZrYyhJogyLHq3tQg8xw1NawxSGwD1hyLGonQXBCFQM7jtEouARosfzBtWhi7o",
  "key17": "2ooFBRwUoCzcG5Cs4deqpDb5U5UXrPgRUmz9yHxvrCYmBFfmsVwD7bG8cpF8g91PyL2iXUZuEkGzBVyagx7gSP1J",
  "key18": "45gdFEuZMVyDC1VBtj2bf1deNKvqzAen2o8RwZ1SF951StycSLjhKLecHX3sbRAR9eaZ1aoBumhbp5NMnp2FEnsM",
  "key19": "5Tg4Dg3g6oiQFRWGmwCCeQWZnmCE3NAccdYaLeBDxHjpN7fWj3qm6Ea8PQoSBq1V2TEBZmBc2amJEJqhBNxZw2fP",
  "key20": "3k9uSMtcTb2MVdZN7qKhnExc1vmfixWuuU4tiwgczpt8piQgev1BX8mZyjXTi4nADPSXj9wDq8JUkGRZhgcRrSoo",
  "key21": "3fYZve3R2rQBvW86ozMYEmNyZZsEa6fx8eeNuoV8AatNV3pES5HxWaeHf82aVGikhv1aURKNtYFFnSwwgJF5Hde",
  "key22": "3K86GQ5vJy5VSe2ccuDrv21nJpgQQ7YPUAVkPPfUqrLqHqgP9VePCHik3GzCm8t2ebjh2NwYxWX7Eith4LJnhugv",
  "key23": "2UGKW6WKARbwyMozHEbgMUwtkgHfgz1WkMAzibsC2y48zPd26HMv8dgpnk4bcCPjrWf49nBQoPFAa4CAL3Zdp5gX",
  "key24": "56UvQELksUVFfLKgF5tseZU7UW7bmVWg2b7iejcPkJ6VpR39rWGseeWSWJYKFgMy31gGKj761P6joGSW5j3CPRtm",
  "key25": "65dAnizUgqd6s2p9vvnseDaUt1FboGqtVdkWjtQiMYrm4udRdUbSZacaBqboS4LzYdBKpUVVQEJZBaQTgaJLMfBQ",
  "key26": "4291vPvPuQjdF9CugndCG7RW4NXF9RAmRX9kxj2HZsZUVzdv8NpAyDM6pRjDAvNc8x5Zf4FoLJ25K8nAQrWg8eBA",
  "key27": "51gqmVTBg8BFwVhRyVM4oDy1LrBQZuUC9LUTD7QekoYPaR7YhxDnfy5DXyXZ5EaQbbsXfJsxtM7uoAiyZGZn1aEx",
  "key28": "4Zj8fPzFTn7CwJyR4nSNKrdmNj7xTT7Cduay2ANu2w5n7bPB12BZ9mw5nJhfkn5fyY6u4ope6oHVy54z7aABVCDo",
  "key29": "3mdms58Dur8DPsYtPhDL86dsTkJmpSMCf2qng2E6rxvnQ4kFjD2ELP22HeS68ZYRPpZGkMhiPgX8niaRSeogyL7B",
  "key30": "T57zqEbihQdkfxGZdA73HPiJCg1J2Fqez7McUxortoSSocDoEvBzPcm8mbf3xkBQBTUpsi25vohXbNheNCNDL7P"
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
