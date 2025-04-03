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
    "nhKxowi1f29VGsufv13N18A52XJJiaNSzkWoU3N9GJK1ZV7j7XeCBSEK6QS16957d9Rez24y3KqZJjDmr6NTsfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47isuC8mxUiUJWL8Fz2nojD6YJiMgVBaAU6JaCyeqiYotZZY9Dmixz8doB16vjo1uqZYnZYp3yYiJ1nHyMx4QgDQ",
  "key1": "3Ptt2d36vK446H5P6RbBRLmhjALgN2NAu2KVszBSto5B5zx9aqLgZf4AzB7uSR5UtAFKcZNdBrqHUqynSEDr7PPx",
  "key2": "61n2yzys9TFw8KH2na3T7GhEHA6Qfx8N5sePfXLLuiZj1V4o3ZBAUsvRg2YJTKgwRApmdBWhgjX6SprNUPuQ1WHA",
  "key3": "2vNAoVaFKMvpL83Q3jbs6DuiRQ8Tg4SHiv3v6AMnAToyQWVNcApznGWu3Nc8y2bBnYSib2iYwyxDiy4X1FKchfj6",
  "key4": "3mVjTSh8v7Nm1LqbQj5HrgVrKbccRbactBF4u87QYN9E3naTu7MSdhUYk5onDiRWftvPcRJeceKd8uuKq31Uy44g",
  "key5": "5VTRjE3UDhFmsk8BymwpBnAXsyZQGMTJVdfoMBaatuCts7f5ujM3L2bnsXVjxTRFCCepEp5mSzZLgua9j5Xai6aK",
  "key6": "4ZQJutMK5GDH955piXqffTuFPuexCzkVmPxw2cfY8LuNbp66wKnDjysvCRLNmeUv9mFq38DVT4NyAyyKASF4ZqMg",
  "key7": "4JpzraJXKt4o9rt2q5C35hcutH8DjtwuL8sRJvHmEFDweU9uZScjL12HLoDDzjgfLdHetxbkxgFuyF6iyu8Asrs1",
  "key8": "3SsHp7HkKCueqeTCq8HKWYTygn2d8kCj1xHkFs5WzbSt9vpu3ceGB67j6vpMS49TMTvpURUrVvzJKUje6KCyHLAi",
  "key9": "4QAVfzbkCa8ckeymrcq6ATBm2mGuiqWig889vx3ruWGmP6bCdVmYGVpy9NooXDZWQEdAxCpdCD4m78x5twB82T3o",
  "key10": "41ZhL27Q9NiUtB6asG4BLHD31u3jMfJKEtiPrd7qeo2nGcQDbyCPojrfmfakMGqa9PwNcrbztkVx6kXVS23i5Vkf",
  "key11": "5SV9MnZn3yVcWtZwx9Y6qoy1ioWJ9vdNzX7jP37VUTEERXBeGLLJizujibVDq7h6Fo5YzpJUWxL51zHXBrhkEJRE",
  "key12": "5FWPACjbMhrDCvx1tVzaMV9R4r5RgkSjsQ7Y4XdUPJFg3j6zjRem9DEFRtVpRxi16eeFrKzrKhp1WEaCRV1yQ5nL",
  "key13": "3EX8tqGmVvFvHswr985Beni9Wh8rHtxAPoNUdAoGPJQf2xVkMu4ejM9m52Hg9HeWE7gyEBK6xmFm5FQkMYUWb8gJ",
  "key14": "2AqX5EWf5JoHCLoDTivoiQ7vUKbRFn2p1zLrDPr3mGcgCC4aTJnu1po7v8CvyxcdHf1YNoMeBfchEWP5hZBoZQca",
  "key15": "5wuDFMcRbCpsT5dxE8KQZEumvDQcd22j1qGP1xzK7HxA8nrEnu5KgBxmpEz5D2bXWM5Sj8CgspPBZZCEp9VXMq7Y",
  "key16": "3h3ZnbdQTtYi9tGCp6JjawANG5zKEAWyp74y5DBn3v1QTi4iKS2uJ3c5ThwXA3GAWb84ZpEABgHVvqGr5hyrKa3e",
  "key17": "5K59U64CPftCj5kdRsV5cF8LZu2ixdzpUFshCnS8Ge72UNoTBgScVLijgrkChgNUA2NVvenTnrzUAB9pJGjViGEa",
  "key18": "5HLmcP58PSCMpd67DMjDTYKnKpPjGEVwUqoP5jZuHSBQ7P2wUwE9Uu4rWDcv9xM24rr1VMW2hMPjBk67Lrk3AMfe",
  "key19": "5V76qtBmpdZPVX4YK61CeyS5mx3My4hxQxv3i2JginiMyDYCokERGGQMtotbM1MUCsFTG7JtmuLuhZuN5UVEBhvk",
  "key20": "2dnoGmZhnBE8NRa3eBVVySn5iMJxLBFbzGdufTT9sPkLj5khom9Z78fNf5FucSuxZTavNG1eoix28v2i91kFmuqr",
  "key21": "2cFMFGFsYST6HFAPbQP8AkamVYo7ipiUTdnqD79hxjSQArgpvmoQaqGUWG4KVSBZHaGQtzsELV9ch1avar1mioVN",
  "key22": "Po8nhXSyu2eDWKuN7tETLepiyDuEmqpxEWthd41m8hTXNAQT22KEkKvnvppBpBS7P4ZfMLP3UNAFXqHxSAVYHVw",
  "key23": "4sX5erF5LTPu52kHxhsZrTDCZaveX2ufg65Bfu7jY6FdrzV3BrpeVYDyVQFQL8Hv7rez67NogqhwaeJbyJzT13nh",
  "key24": "qC3tDuHRTXStzJj3bf1Au6xGJzBSAUX9grzWTbSC2ti8maQVyT6JncjhPiNJ9cd6yfLcLUnYHUbhbh4MpRaG6Fr"
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
