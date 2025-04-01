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
    "5gWikrTybo282Lt6uh3F2eDdfv9ACq2uFicXDiULu3kAdTUTNeXWxVq6J1tEWmH3JgyUQEHfp7xwZhp8B2Fvcxwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RpmMgfDp5isKDzbdoBpqpqvY2VfHD1MQQNTsLc66h4XyzMfzmHJEgjKyCBrQNBZeeTdAaZyreAYhCdQmfBCMS3M",
  "key1": "3CN3853RSnb8GZoEzVhtfyxLcPFDgLAB2AkQHcdU4eWjcvTF7NDqq1mUor1qBMAWZFCUaeXeFZ2H1hoJHTnMEMKN",
  "key2": "4TY9qMZf1ogURjWuCzFZ83FbiX5ofMbmkxcb1Ft8qNXoR1cauq6gPGJNMmhCeEhvpryLBUoC1sdmbe2PHcXuWEuq",
  "key3": "61VTirYFPeBd4Qkq9E2jDWBAp8PZLRvYHEFaXNaE9itqvyKAtvCSrn23XmbJwNXfr3evfXucakvVNQDXCozi5wRp",
  "key4": "5WiCfzkSUFUzySAEEeUdPDJ5qJLrqedLCKfuw3GbxWeASuaYpeUSTSokaSC7TVVtHVsDhgjUm5BSnGfxEbacFSaU",
  "key5": "5er3XmZfSz9jnuG2RrAT4tbvDJ1agUtQWzWbTPA4mmNGsf5r3DwXtTTcddCe6vv5HeiTvmf3YXNpgBwwJzB1mwT6",
  "key6": "2MtYqMWGp8jgGDFHkvBDkD72KuscRfhspqaYLSV45aB2EDVMozLTsQJ85FrqdSF9StrzfQjFDYv681S9BEUmeKKF",
  "key7": "3z7X4Gm2BPT2GW8LQeufL6uQq6YznwoCbYrcvtmwd8u2U31ZrcaLS5Pb9dDWbvKAAKXo9YkccD2HG4nRVSyZfiSz",
  "key8": "4nTQqipNXkLWtFZEJA26cJYDGxMrDkj6vRmmAEQP3tQPfimdtsr5wtcqs1g6GNn7sWFtamP5RJCzK6kBEmvjjdd",
  "key9": "2xG1wrhZ8g39YB4GHjw5aD3Xt1a3hYp6rUaJStR7uty2xhyiW98AGC7hPUxN4eExv1H6GaZkLkgX4WGjyucQpwTL",
  "key10": "3Yv7x1rsdDWSnUxpjAQVBTzjYpmpRNR6zQ9h18QnXne7xavpC1Kf8Uvdzhb6nQi2xmRA6QjpmhfAYhgfSFPzW6Ay",
  "key11": "PVYpoTCeUAZcDSeDL8JwknP8f2VAENQ1EnZA47eVJAQ46MTpYDQiEsm7wfk3J4ZsB2DN9uvhScHDSuhTNmtuEon",
  "key12": "2zxoR6bfq4dVHyuEuMeYK5UvbDVyRgCmyxFXGWgDkHoQyS3JZeYzeMsobt1QiQE5wWeyUVQfxABoxMLnEBuZFhQW",
  "key13": "2H4nLeKomvwehpppxiQ4wwPVVFNoYop1Yi4FRgYBDcPwTBScVPBLmmdbwW2Xtyc7qc1W5PwDyVJjMJ68JQmvKG7F",
  "key14": "56h6BDVdL8FSSM9U7Rw85AZtX1mj7dk7JjVHyj5SLGut52byLZyXmPWertEiUa81jCyRAuCbinfFgTeBUBRvvvtk",
  "key15": "2t885KsrVokaRoBboBDkFdiFQoFxMe2kGkd5XTikJg5r8v7QFNUxr2ZxqUHoF3qgkuBPBU64UdJEqSbuZAc93NsG",
  "key16": "2FYjEadfwtaKac5piA2R2UuZ8x6qSx76LQbFTCRHFRnNfKaPpPGH3qdXd4hN3FKLr9hX3AmUrjyg3HZfhqDZXkCY",
  "key17": "5gGh6xdQeHZgCoKYXCjosHA3zz4Mmn75NPyd5fm864qE5PHMJjBUh2gbuzBccJrr3kguCE96V5DHG5ZpwsQsssbg",
  "key18": "66uaAz9zM1feD213eD67et4bsfC35d9NLvsN4yE1FKGR7Q3dePgFcftnNApcVStgTbAfMNbbEcSxCD2XH1SeDuv",
  "key19": "2daUxYecvSnrh7ahvSPuR2xjHACWjNee7chZxrcScHj7mMQejQVPqRWWLxGyLnGKJMvzsoFXjouV1UvPXAnBNFUY",
  "key20": "4jwmvp63jCokGNA9WMpFMabBrsCyjRyX6T69BkHcPvDWyrmFPcK6886dgZTYiSK9C8k3N41E6BuwDBGVnXRketjs",
  "key21": "5jSZPZj5SojUM88ma95ByzPrWUZCANfW9Vn9PYtPoGzSFhQrbRfjMbc9kzrktrWwAHTv232nHqznHFW7eUeLHXiZ",
  "key22": "62JWjo3Hy6qKzYER5kQxuPpK4dFYHKW1rLw4VwT8R8gDDWq4MAWGTjnaSF5Sg7jJ6CXjvRUREXxhpc9jnbHG912L",
  "key23": "4iC52BCP6m5bGGxHzMoAfAQTo6jzgoe6KMkSs5e3X6MiLNs4PDqH3pfnPAyx7vhh4e5sR4RZy6o3U1jacdfi84RZ",
  "key24": "md6F7f8Y5Rk2ym5hqVhAypvhvJMzJq7gptnDwgHf2X7qZBMoUiagCTQjM8Qy4ZrKgY8zbqhkuWYzF7DH9a6PwWW",
  "key25": "5rvUhBddNFx26B83RVaR8dm5VT7foBbztrWWyZ8oP7RmC34o1S2AWTVGfLBw4LMjVG3cC7nSFcAvrtjUvykcmiM4",
  "key26": "3vUHswWmAGC85PyBHMMuPvLjGhqf69ox2kaTy9QeuRbcFgTkA8VC2ZUVs2ABcWi7HSV6XnJr5SW4haMz8N1aBhdf",
  "key27": "2obKRzsKSawZBsZMHKkGt9dr3goukTSNkUkVzPnXVDX5S9HswxdfmD362RyG6pVcUBKtYjThhMiDFT6RgtgnZ9bP",
  "key28": "4kqmh1KB6ym1ooBZPQd6mREuKpLff7DxrDYEmEyWiwziifpiNxoYtoj6RG8ZMTGQUmswnNEqf74CpMtFBxvCL7v6",
  "key29": "4t3khaSYGxywitqd36VPf2Nw4PTh7vwFy4jJajFihiHjcEaJzoKa8brkskmXf3rQmj2FJPp4BkrczRuZFqUimx6r",
  "key30": "2Xp8Wm723k8R8znzx2uvuDByXyHUajJy5M4E69pMWQ7GbRD5nhUiSdBgaDfWTLaN2fc3u6NTbudu8NtD5tcXdE12",
  "key31": "57fS5PANCDG2CaRxUgfoEQ6RYKEAEyXzxvvafbFniXNwzouU9P9mMoUciW3wSfED9FF2vonv2HnFiWSsCkBKP2xm",
  "key32": "2TddkhqyLFQUhw2GSKD8QJEUaoWSWtUv47spCBE3fzA2BY9tBufGFrXqnQVCoXpdpz6xEYaakkKHSGwQi6augWw4",
  "key33": "BQod41haz6p5SVDmiTA7Hf7tCR4vfqNkiuyYeoj3Hxwik99ozTtEj9WPo4yZBPNx67baEQpo1Xa4LAwXguMGHiJ",
  "key34": "rvhZGfMHo43WW8aDko4oyDe7pq4uSXTs1HyEQMhNPoBMugrVNA5fNUopXXntpEC86hTpL2ChVC5vSDBsV8WZFyF",
  "key35": "5xJQ4f5zwoGY3YkMzw4xakxYVZ5TnHccgmfmKA2BqKaURp6ys5xXVNk6oAeCwgsyy1VpZww6cXCHAtiBWB4gSFET",
  "key36": "3npUtRjNxyoWp8v2FieoQhDpexigdv54mD6DApSfyabLKNZCq1GHBBJXDs9eHyfFV1awXMavAt9bmw7v7AXpPrR5",
  "key37": "btvVJ7Yc8R4mzTXyHAtraEa3L2B61gqm6veNJ8GW8MLrXnRox7uUcxK4iws7YQwffVHiHK77Lc5WBScz9KLw2s1",
  "key38": "5TTT8LSLH8daJLcLWtxKeobRnLamsCfwM3PHB3rMZVHT1c8d4urpvEWaEqaDMepmRTYTfyFPGQADBwcGXeXCSgbj",
  "key39": "5T6yjiCf8Vssszg9aZzofKF82HX23w7Nspf4kU9PdhnnLjGmK1qW4zvWmojeVXxaetaVYUx3M2d2SLQHuX79WT9d",
  "key40": "2HhYY2NBkjaFYv2pfpXyNC7d9ekjr3bgbgJmfKhmWox5zJC59GBk4yp8VqxQvxZnkpsiAAFKUTyXPoze2qNgjTGV",
  "key41": "53PRMd4cxVajGMy7LSoZk7DtwNnuUB3TYfkRbLVvxikidzxxcmvvRrYwpC8utB7VsZ25eWHKUPC5qRWNUekgQWho",
  "key42": "5aDMe8Na26XtUFJD26FUD5YCXC6EVKGiETVmo242zz6CeCTvmRsPaBbBabw9kTcdisQJ8UYz7SU1SAvj5xz2e2t3",
  "key43": "5JHznrkaoAAPtwjac8deUBMFJyGLgCGmCu8Tuo41uJXMqUJvThv7fveZzxPd9iaAHpFSnbExepKqkUL7FezW4HSU",
  "key44": "52H96hRLwC4zxmMFAQrHPdcyUucZFSCSovLXSGazNTan1C1b7pRQ261N6EbLvLkw6AHCkohwGxbs8qpvg1S9b4aa",
  "key45": "5YgNX9qf3V7bhbBeV2jnuckwkP5NtFqhfXGkvRYNuvPd1iM9tRVNN3tGPtGa17ytCE9peNfTKCLuvbEc3HfBpewg"
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
