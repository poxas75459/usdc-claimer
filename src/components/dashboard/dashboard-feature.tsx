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
    "5itLsUgZqdUaQBX823M9jsxhvfM6Kf84mqzddev1env296wZP35QCe2qr2Djd17dE7fjf8wnVPU1BWqcBWjaysCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59tBBU1riabQX4qeWrssgSSgTzE7F4nLPVo5VR8yoM9KdVMehPATxXPRWKDU7X5p2e6NWVUMi96gdQaD3zZjyKsH",
  "key1": "dQAogRqGHTFjCYgogcE8sY6hM64aQmCfAugjQFqxhVhJPEk7nE6PaZ7HDyKVNKeNNda3C4HGtoYYdEkhAX65Lhy",
  "key2": "2oERharixMUf5fkFhkz1WBz3hwRLaz6Vst5SnLL1MXT7i8AuVWZTjSdvEabZhpR9D6VzqmJaGpFC2KGkLuekxZZN",
  "key3": "27RWnaUJGbdiRZpWM5JuYFpx6wBxmz3XBepg1HCHs4pXooTsMJNXA4mk2ymvGs5Ti4cfbiYRKJKt7RQ5LHH5Yrib",
  "key4": "4dcMygBhQHXVU2CubfV2MyWjk4PcDA4n6HyBiU54cKYx5NAq65uvjHYAN8ELfRStFVFAKgbZnrLxuPbiMgZg3P7c",
  "key5": "5SCWMgLWJnMdyGU4cHLZDh9hjsDR6RFik5MmLxMftrvTbS5X5kRCX8f7FKrTi46uF53bhhPfCtjQUwQnKKqjkLx2",
  "key6": "4t6ADVota7Jm5YeDfmLPCapd5jcoh4VkLgW5rH86HTYnTBnPkdDCJuqVvmxDiVTfe1aqYJfSyxPUfVwyarZGgJQd",
  "key7": "2EwSzCHyjTetdH9BKZbUUncmtpGuxsDD15avSPpPTen9dyC3t9FRpeDmpkisyNTWcMfLX8A1piNRSWvHxQbwvpKR",
  "key8": "2qmPc6EY1JaRAgLDMLvYTZJb6vqNJcgu63js2d2St7FMXbB2UQsuWAvWwBCZMhZWg2aRgUDDz6vnDTzYoRKYQR9u",
  "key9": "5LeGCmZwqqdFGcV7YSaYiPZ5rtZcPbv51zLVeCrmRhPrAiJssoQ2qqL9WtCpwAY1Z4ngfYSfy7hJJxBntwQpajPe",
  "key10": "3wn5CDc1rgBXzFHwoSJRZrTS8DDK12YKsaeGg6h29rYcjoRYKg9eyxjKJRmC5muy12jQEEDxScsw8PHKTmGC1yX5",
  "key11": "5jQoUWZXuCBRqMAAip8ff9GaWcQL9afWypCkdTA43oL2Trk7DHyn14NbM19BHL2DPa8ugX27b82diEmREqu5WMWL",
  "key12": "2rtcC3ZUuKitGpZAbcUQskKPgwNmHCQ87rYDkJrXqD29wTY7Be8P7LM3JAxxCCpnGMLgWsd7TcTHANCaCmwd81wj",
  "key13": "4xBTuG5GA8s1fFoLbq1BdiBJZNqmu7XFqrvKC3XFtxZo8o5avfYou2f93SSa5u5bEmYWPG2mGH6amhiRYDJwApns",
  "key14": "4PPt8Aoc8BSwsT6R1bBk8N2rHRYnauvaraACsgyhmetSqiHMrJYqV53udAv4R8KGsmyYUsi8JYQpA83A6YmpgD9k",
  "key15": "48CXKbbpJCTT6k7oUefyqCGuyXbJYvRr6TxtxvSwv6huYpcicN7NfwfW5tPdewQZy7j5j4713ikyc3P9a7v5TJUL",
  "key16": "hJxd5MNVCzB1kvwwmhnhD4XwmFbGkNJZL7cQ3kwpxcSaonzbvxjMuYKnBxeqTkNf7V1kB4ZmSHi76Wx17GVP4Dk",
  "key17": "5VYqU1R5Sc925m9x497MaurhmgnoDEwzysqarySNENjpnXCRUQpyjE2VGW8vp1MdHQxwcRH43FNY7dNwWDQowH6",
  "key18": "5M85oWtUK8Hm1gXV3hfaVMMKL6w4te5zZi1JHAWVsvMUny7xX4zFCUP5DTaNdWbeVr4XgTHqie3pYREcxkh6P5gP",
  "key19": "5E78EnQAdw2TPKMmLCaC3R17tc5ed2SsVeVJC9RCs6W43YM2WWbbYFDSM39coEBpdASZoycZ5cJ49bRMq96kwvR6",
  "key20": "5NPbKcVjYJqxaqRPApRWNurwohpxhd5JPAoSz9iQLZVXqigawtkYvHuCBmYFuefEzd9gStMVPrjMpSAUL9ksdoih",
  "key21": "KGDFST5y4r2dWfffAMitvksYndWAY5eCGNs9mWBG5ctpaDozkKTCtVBk46T4gCbDKKZCMDy2xguo6cdEC4kAyeN",
  "key22": "28DErVsWkXARUNR7m8NerMCvs9qYRUWwW3tBPN7D7ceVHwr9ET2UKS9fZNjbEfb616Gf2oUt8PCtf4yDj9S6Ss8q",
  "key23": "5TuU4ELpDvHFhK7phcyV9hTqrebgVXX5fbEEqLmLKy836yUrNaHS2qJqtcJ3r6HFNE1FeoddPFGYhibP3HGMVpU8",
  "key24": "21e12vjLx8L9j85kv8teh8Pr2Ki1xqR9J2WibU5X26FrRXcQrq4Pvb9X2uPJEdgr3i2HXUg725E7aTvSoeJmxXjQ",
  "key25": "4q3JxTAFjwcPxyTk2RXs525Y59hW7Wqoj3iijbHKxP2uT7yWu8uo9h5Fsbz4wVknqHWXRHExztJRDmHih4ADTeE1",
  "key26": "3bSorvwwxhhRzhPkYKrtiBgSw9oz4PVoQQ4qQsUjTTJ1QWcJP9T8koCCYvZ44H8zV9g5pxKqfyFDrDrNzNrgyKZL",
  "key27": "4iH9ZLnAbGcveien6msRxrhhXJjVgxVfTNzsuxho3cAZa4XA1TqwFmDGZ8Xv44KxCsgVTUP22e3EyLayr8wsUebb",
  "key28": "5eFvcua5SekmzUMA9PbMfyF5isHaUHiZwPBPBGDGW7vRLF9FA5UWiRfrTacy3HVVPEJzEvuvxw8cHSRu6BvccZF5",
  "key29": "3fTca5JnYFsDjQ2Xuf21yyUgr63NFuGdW9pcAuU5yLmC7i1fcyM9yW7z7KxWypZY1SxwbGGnRd9zQzpHxhxTv2oD",
  "key30": "37HfSBnfo3HRem9iLGKp6HWx9Szpsq6MMnLhzEs7isW9eerYAJJqrd7ecFrD1F8cC9tRnK2VT9L9iLTHLRLHNUiH",
  "key31": "5Mx3yMBLWbASbxBxqziQnK4TeEoFz4rMYS9dDkww33vbzkmSdzPYd9ZgAfbnSMX5P6WhZsgN3zd63tE1ewdAKZQC",
  "key32": "5t7Cv9u5tEJfmxBFoviargbS4VKFB2aTyruekrPKPinpU47fZZd7hPq64qJKWDv7SGhgJHirvjLDgbQqu4zhvjLB",
  "key33": "VCdvAfgXrPoKNztwYEB8W2xjqsvKktBC3UGZdaxHcLS8kWoLGyXkw6A1qcda6E7Pos2DSjuaAM3sbkRsod1ueon",
  "key34": "5vFqUaN1VrieiX4ugyNtDFiWtWDAnQjvFvRhLhYRJVk1zpEH3qFzQJsCJvHucVWAjpKg9UVkowGPeLttnarmKeEJ",
  "key35": "4q9V1VwaeXZ5cgaJSGZUzuHuG6FLfxme1Xqvdz5eLgGYmMsSyhNnqFf5kLSWY1DBfWMLX9nTWP8buQCgQsNLMzmD",
  "key36": "2zxL6GDgrZWknLHxmy6naihzoma843mg8WfWnTKLfy3MDm1UPYmEpW794iAZ8LvV4EcgD7Z2oLfMJ9pGLDMwkT7",
  "key37": "2r61GrBgMGjCiJhvFv6vQEQD5z9zG55tZi78SnSASmbB9Qehg4WH9miV3JdrcygHZmWTCxJrQoKkt2wqoH8A8ZYW",
  "key38": "2XmQG9MEQfwBuZpGXQNctwPHLUSBcXvPHAE2T7m2WDdBA5y9Evy27jeFrBjmsm5pcQr66gmtVsesXPZnmVF7jZyB",
  "key39": "3u2tbhnkchBTn29U1oKEy1JGFDvQhTJEtxWdnSiM9w7EhbMK58cYKHjbCFfLNBooqbXEzLo3F53DMeFNaExe6P7R",
  "key40": "2RNrH2866MhnGPQzLa5W1J67xpmmQZNGi5xNDi4nEwgdicwuJtzCFGxwTPYUf8oKbX4Rmic3aQ7XF7uVK6bQDBG3",
  "key41": "41AZLj7p99Atzn7nZvePYFrQPrXjqsDhGsiXEbPbabioP6Dm1V27AD8TPqdsSYq9egstfJs8xyfA7dbELuQG4cpJ"
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
