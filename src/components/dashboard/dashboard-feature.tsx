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
    "4P34qUm4JunyVGM8sr5WzzsZmhRpuiPiVDKHWFJ1LsT6S7k8w9DDUvAUUaFuqX3UmTKnvkV2ZAgomWviYQ5kvyVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5phXoGhnbKMPbor6SuSXuki6NbNf9oe4H8e6nZKorqSLtQ1JxSFickCF7CZb9NukP9LDaPtwuhiboqqUVVDmjav8",
  "key1": "2dkEu5Mt2LHBEZiwsui8jRtDvLaBVoMjdbDm2pwsqNgfVB5VoyHSmS5y1CJm5kPuNRCovVtbMX1cirfZxrZc8zqe",
  "key2": "2fsQZ38Yk7jv3MLcPyzk145QKQgH8jCKJtmpApRNZuZDLUiEbWddieVFTf3TwYaVkTEfQ5NvPF7HvxpcMSrrNuSj",
  "key3": "3FgMfHJgr31iBFKK4yBS2Kdid9skmSKLGqAp4furqjR85nPgp3meE7Rt7RP8gVhgerjzmL7BpyuHxa2v3RuyMWx5",
  "key4": "5vmwjxscQKXudNCMwpYfiUNavDVkQWeSqU6UgwqK3t326GS6Um4JpeDgFFMFFpt82q8hZFuhspcevcKnoAsjytbL",
  "key5": "3HxucTZnqkTKjjDCMNLEScczLR4jCnmyGTUt5D9WgaHRtptjhSVZub7cbZQbnCNDMgTU8ar3PaKQVTfMe2p1PN1T",
  "key6": "ugPrvS4NoxnQ1WXVpt1kxoQ1VK7whkYcGbTw1igP8WF7igGXs193X9kiwGWvvg6pMonDwjeWxgZeHwXVtXC9zTy",
  "key7": "2HB1JNNNKu7dEsp4JTZLNsAqQ5mxBM9KVnMp2XPoqofixTX4XXySdTmSqk4jA45Ybz7BHiUrVXMXmCez8g3amxH8",
  "key8": "4vjLrXWPL5JAoAdSfoMabNXnsqXn5LHDNrqa5EfLjZ2wUYmyMRT5HkJvyT1hwMQbXTa9JntL2xKdGZNFcNG7Jre6",
  "key9": "2uXVR3DxK5MXhczRyjNfuJSuDaop8bVKRhEAqtwJ6H2h2WVFAnykqmP2hdspvX6w9Bd4LzSjwK5Tn5gKFDCDLz4M",
  "key10": "5YZZqZ3GawUQR9KmskxyHyGoGzCH6w1hAnKJJJE1ivnpbaTsxNgg66JFPxNNmu85L4PnfPZwo61HzbiECGMvT6r9",
  "key11": "5hEAoNYMNQUn8QhVzSVxgCPS2VujT7mtPTnBDAjGia4PLnW56fArnWt3E941J4AZfmSGks9dzoKiVEbcZ3hxY163",
  "key12": "gZMsBFUhkDtgEF8A1RKcqsJxjCidh3oaru2UeTUceYJ2rnCagW2JCbPuaheNp5zpx4RedJMjXjyNnvkYbLNUjRF",
  "key13": "3WchGANj1xNoLYFfhpCF7ftzHGUKfeT7zfUSdLtpdVEyVc2pYKWqVRRLqrfU4oHWn4SrFKHNEVJFzmCphTsGsaB3",
  "key14": "2h1kkwkQBiZjgAXdeuvtSPhybkciuHwFwWeZ9CXRbJ7wKD1SdK24pWGoQZyNNVdH6HWPUjRLWSUkoexb5imbqzv",
  "key15": "624yBXkmXAdrhookSxHZtDmbba3XRAmP4DvhTSDaTNaLnwJLyYnjMfqLgAgGPRirjnoMq3M6cZQqyHmgH7xpGdQm",
  "key16": "3F4VB1WoqARDjQiChhit1RcYBp4Z3VdMA4hcfJke2y6X9DaNvKBYbTMWrCeBW62eY2MHeehFgD9DxdtN7aZMCYgW",
  "key17": "3annYCphb42RqHG2C85ZKKCt2JnM8sNaKFTg7XyezmJpSgT1EdzmX9xyavH9xqc8TsquUbi35HcMw59TBtAouXo2",
  "key18": "4j355dsrTeLLezVRr4fhgDGjv61UGvbtLy4LQdsUyxWC7QzYZkrVY6Vatefw5JDb1ivqKXnGwP5HuQPK6UdCQYAq",
  "key19": "HcADUuntfQ5EdeFnMhBrGyNBYbd2i6WJxNxFkokSugpUGgKNHoDTUEjzGmBTh7c1nxuoatj82nVsgoa7BxpyynS",
  "key20": "4pw5d5Xte9WkKxgNNUGCFGfTgr7C4EXSmx36dXRGg3WHtnn4mxy3wryquQxs9jPUtABX7hnSV533VQFyDXKD4cMy",
  "key21": "5AJhjRAoJMfFEn1fcqobRTR7BHV7xLy6yGooiyH4qEF2Zaj8ax7j7SbPqnzxqjfyfeXtA3MNzKMDfLauy63WojS4",
  "key22": "4QLg7D1xDZqemP8nyWGBT5x4BugDYnG2ic1KCTZpak1kTTujKVGvTuQvUGMri2K8QP1sRLbdrJGv7nAxuUEq24xj",
  "key23": "3eDuwoZdD9a2xj1Fqu93CboqE6zrqRtaK9tAdYqQdZmuGe2tdL5z1mMm9pheWGCUUXWVGdHRzuxWKkC6AFeUwcms",
  "key24": "3iT7VjUR53QFwp1bnWaaLN1dtsN6DodTENL2TkhYaFbsVS8PrA19MW9om6wKjhAJKTBbnr3vKj6AbaGjJZryM8on",
  "key25": "rioXgG5rCYAecfsNp6KAGpFuSjrzvcEbP8YrMtBuf4J32Z6VyHkZKgVAGDwJhA76kLvXyQpnmhFV9Fm8m27sR69",
  "key26": "5npeDAYcjFxEo53Nft1BsKGU27B84N6imJoQYtb2odth5Hs9GtDNAyz3er59CPYcgM35uinA1TS4D9eacwDKCS4K",
  "key27": "2uax9FAndJTdtiSRFjDtz1Y2Yzqj7TVZYsjcTpnwRracpYxdCUWf3FQzXb3saagnRN47DX5HyWTBLjTzCibbkFXy",
  "key28": "3CwHFVMrUdPEYVrhZsCCVUGZhm8FXLJ6M1oJMwVBKyV5yoRg9mQtGpj1fhSxCTBTPV1iRdWtudPzLKejQ12Rsx18",
  "key29": "3tjnC636JY6Bp1uYvY8hrpCRWWe1RQym49LToQogi1mxvKahnSmyWJz2Jf6NB1BzTq9JYux9B9RnqUxAcygdrBom",
  "key30": "5LsTGEL9h27mRJ4NbogxPSKUkFeKCe9BQ5z1uTX2P3ciUY95mt3e7fj3oJ3hsZabiacnsvH8idh3vMAviNvmtDnQ",
  "key31": "5U6113tHqi2UYcqiaBPdE6YtLzsFHopjpSTdqCtXCjzYuXo4cXJF7rhSej6Dm99R2iKQCrK7fjg75gg9TtrMVwtc",
  "key32": "QF75XL2veevBqAbrr3P252y9hFJZp3uCgL3WHxe1EmFzJ2T5ydt8SxXKSXC1NCgckiffGpumzkyA7csBQeVhFsF",
  "key33": "3ZQJKbxMxBVmWYYzc99n4miNW6u6xvjUyiS5rQcTJZdXi58jviDwdq33Gn7cHXpo8xAP5EQ4LF4vasUeDWpDHnBp",
  "key34": "481BG5FGAxWRm9MB6qGEn42EXX4SgrrD8LoK1sxPSXfgBDUupCLddHvcLgbQsdGtHUjgD4kiMdtoiKuk6B4rXT6g",
  "key35": "2oRC3DyQ5KionyMVErSJ9bj38j8JuDA4Vdx9aWshJyo5VuvSHwDXuLrWiYnPDvnmMot73ysfuFb6gwfQBj2YA2Bg",
  "key36": "3DCiZjFwgi74FUz31Vz8yFcsN8mfXfRdoDBgY8XLJ7p9vcqD6yU17bJp2m2xtuEWguE9Euf1XSTZqMuBQrdiLrdX",
  "key37": "65ZSfYQAXf5oo7gS3wKXxPpzwuEWE8kfZzMfXDdw6AHE5ZRGT1omxfiyCuQKc2M68PpFhRVE6xiLfQfc37LanjT6",
  "key38": "566pAsV7pCLHTkwaLtqfwroGXW9CLSXoChFpmNDQ4Rrh91PrACxpVNSuU19TZGjGrWigDMf9WefnLCwQKtcT5hoP",
  "key39": "mE95bHTXnVm67jCUUteZYEsVFvwDdFxnRHdDmzcsFkF9mWVCvHPSX93usYyBx8VaVWgS8HQfhma6VhToWjLjp3T",
  "key40": "5EiVy1x5kNZ68d2uY2ZNe4wVtSD4HckKsJQBGcn1VHJjTiLdGdVMWcj1WJ55TA4LqAj3qvYxaWQwXUpXj1R55bnj",
  "key41": "3qCJ2S31C3WJo4N7QRDUPabqJHuMvRxHByePZjS8nfm8WqVgXPmE5XtZ2vKQAu5foYMbyqhApeEudPifYZ59HvmS",
  "key42": "4Dwih3qU63kS3uLCCGfoBE9q2qPqbQALaGqB45YfpqpZn5DdF2HQNZEoCLqUvRC8CXjXVw2vrbGwDhAN7wCXR7bf"
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
