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
    "4adAeErwwVzHuoo8rXQ8rW34zvwqjVA1d6KPn7HytAnt3JQZV1BceMLvqVpwP1SjD83QrjXBpVRa3RrBiXuDsbTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z38d2BMPRHC5g1R98Mo1XMvYGA4XRRwYURAiRbXPgE952e36fyVX4JunWweryaB8jLZidaw3WRdHVnzcgJKF97B",
  "key1": "3JLUXjeRLyVgCzx5md6qgVEBfWZ1jYHptJZbdbbuCa3iEQD5Bs8KvCWfh6X1zcEim1wR9VFwFQUyLFh1AgR5bTHi",
  "key2": "HAPRpEscs8Vy42wcSTjLwPMYDwHZoZiJfuoGHMhzjqyfUcHCgXWsjiwqmr3VU34DTeyo2iC8gmFXkZN6PrCppsB",
  "key3": "5Tkk1ZL3qYuBPVXZxRcp7MMkHvkJVZ88r5DaprbX9c4Xazbwq7Z9z5agH6pUHAawzx1YCKHf9jgBoLzUEu9erdQP",
  "key4": "2CBVkrPYgYk69hDdyiVxFirbpAB5AnoR3d5cFkW8G27rmsQW2zDQpkZUDCuZaKQaRuy85FGi4sDL6onYFVfeWg6N",
  "key5": "4ADzY7YPQf8u9qbNQY6EkQWynAy2fPVx1TNTkytNBLiUdBRxGUsrK6V1UkLUna3zXjjVLTmRT56ZnsvzYajSdDx4",
  "key6": "5XsygehFdfruKNV8iJW6VCKiiUdpjrEV87ScfCTZ7rCzmY5nvLZuurqn6fCVyD6peJCuKvai8zfoLhFpQxbpMVLZ",
  "key7": "2DQMFe96BncajdYZf7F89BETgtyxFn1RWozEd64oHuzmKbkbSF4WNb6ZNd5YEdfX6X8PvXrDrt92hZpNoHik3P2M",
  "key8": "3mZGVfM6YcHrYiM4giA9mCWhGpxwUpkDLcWGBBzVnxBzatyeKXms7rj9THrrUsdEmV6FS5728sGVhVD9wFj8g6bz",
  "key9": "5sjjfFSrHSnKcxAsSmyHvwhZuQqCP2DRg5yE6xREE692h5eX1LZDqCH2bieV8UYy3AA6ZcABi2H8A7muBwrN4vbR",
  "key10": "3qYuaea7DrzPswpDLb47drTD2mnWqJAW6hCPXJ3Mu9WPbCM9XuzVjiWvjzjhMhZDemeRo1ic2W1rV5WB9TKvNuYH",
  "key11": "5Q1qFAV6AXFWzoBcLeefFQB4XohZNtFMC3Q2Ytp4jdSVGkhMXXvaAXKPoKrBqD5NbfjpH24rvN37ayuDBftUu77k",
  "key12": "5yFtu4WRdNHECfzP7Nmg4YtktTh1e3Dvv2VXSdqW6bNpDbz15FACd1eMAFaJSJwWp4wcWq14QRbhyNZKXNHUoZnt",
  "key13": "65qK27pTjpt1toskKVtQQT6fNpWq5JpPi5FHsuSHe53YMTBtnowDhAVnT7SDdivj8qcVUc736nFNVaCkpEZgMc8z",
  "key14": "4SeyZQnZAAY1HNc9TJtMMMgySX4588ZzDQ2E9xcwrVUDXEAPDRHv35AzheqVVTHUg3WLL3Etikh8FiH6zTRmhwnA",
  "key15": "QrRnRUT3JfarCFVnk5B9kABCxfk5XuiLW7v6H3jzrDrSsiKt9buRH6ypDZEVkcR4GnFNUjQjDqrB91cZzDxeWh6",
  "key16": "5Zq3nqD8Ew2XiTFixHjNW9D5sjbG3qnEruHmhqKqs5hnyuSS8EAoAutQYFrUXzxj8TULEDbELR9Z9E7hDXVeadwX",
  "key17": "2dhNMQBMooUB2wQ19fNqQScuNh7pQwKesEX5jRZAgjRpXVBjiYLZGVfXdJ7KMij3WkdbnStzv4zg7f9oDoRVJ9R3",
  "key18": "2fvB5BWZCgrChBvfgjvSjxQaD2PiAvgZKtowDRN4HMNyBETVJ2cxm2w6czvJGpBrGK3viokUZeWcQiGj8PcsYEbW",
  "key19": "3KciZ2vJ9598rPtHWX9UKuhgaVgHirHwJnGFwMe5qKX8qP29b39crqxop1RnzBhREfsjeTJ18hEEwmeqCqCbkHGF",
  "key20": "3JX5Qzeyh5ABTppX226oeBQzQ7NLRYiUrVK9APeVoW1MTddrdg4Bf3kXS1a6qTuZPKEx1ZYVqaRG2DnAsdEGtuLt",
  "key21": "4fSFdMpDVERGTNB6hxekadwHGZ8qWdRR8v1uTVgQSWB1W4Sw3Br3WmjXNW23cgL9QKV5ir3iy4CG3ZEXwDAr2CzY",
  "key22": "5aAXNNzW9aGr88mwrEBdbW7p1Pa9QYgR5RKaB1CTqLenmkJMDzRpf4kiphvSJRRHb6qYy2zNSRTudQoURRs1Bbne",
  "key23": "4PTWxgydXaM5QrUB1PBAfVVdDWACityBxp8zKmnv7Ljxx8ZNgn7Zk4GQu2a14Z1Hb8Kit9YqQCEwEtTqFT3C6DLp",
  "key24": "4EihRk7D1y2pgPM6tM65wZ3E2ix8FmUF5aNvJGsMeZiALV8648prTvuuuiddwKJ9kRBxH2UBNfpmZZjpsbFTpFie",
  "key25": "XSB4BYiGcX6G4QFABxPy62yNCDWDobCfZyuWLCLkwnCZ5adruQWjaPBEaQzjiX72QfDi3BvtbSudCmraHK3za7U",
  "key26": "4qgxVHwU9aj3tJCQLBG8cnhLH9Vrk1uT2c3HyQ9CCMckfsBBoyJJPPz5rPPbpSx3QiKnNCa672mhHsfbYp4Qo7rk",
  "key27": "5ZJRjLjB9E1fpL7AZw1vTtYqScyf9tvFFDo22ifhkkcHVg4KEP6iXEC9ep9qJXiegepwAbR16wpbQpA4icCPHDft",
  "key28": "2VdUd9HCnNAHZBYajKb8K5MtqMxsaY5JmjR9fLug4G3kAgV1Jx6yb4p8z56fN1hFgiEV9LdnpXdhi9g8n5uofyW6",
  "key29": "35qxmhtw3MasNTYxSkiw5ZY2a9q2fVD2nEWoNk3zaNHUjJX5T5d96TPLXysyr43yoT7kR95cLvxxLsJ51wNSDPH1",
  "key30": "sEnKVxT7S4LKcok5avJCCkXtwy7LxkGbXAACNk6aVwTwg4HZhv2C34u42zZVDFjSwkv9JqbuiGadXewvUFBhDTT",
  "key31": "2maygLURJGyjpDv4vtMVAKRCqWRsu4Wys2m2AK2FF1YVGvnQ2hfAWTRNPaBGrCTHok4414RzsHN9rNJvBb7sNt1m",
  "key32": "18jaqnd1xsB1uo9ARtFbxwPoywUrHnZ9d5bvTMpRqP3ysJxqebbtdQLWuKi5JniBKEZoBy992JmwRG1VMnoz2eq",
  "key33": "65bbRkchPtLn45zhWEyEbbrjYnpGQTqURFNvStyX4CuQKyBJ2vXfqMkua7HEr1AbHM8yRXQQ11sRCupUJN6cAx54",
  "key34": "38zfmeNkcZ2if8WZLpVxRmtFFCBdBkRSiuHonx1vdovVasUQNUv86DE4VRhkVXRT1AkENhFZDckPT6zMhmV4C38t",
  "key35": "4db1qadnby97AJF2brcVwkfAkDhdFsJyENKFimG6F3kpPtxU18RL5LZucqKppLV2tTVTkn4ryAKTRLsARNSJCrpJ",
  "key36": "5hn9jt2YJE3cbWH72hTLajKSi4KArkGSoMDZqmecvxy7UvRrssPZzr9rMC2szigSbjdoK5h64jdhBstvs6sgoBtL",
  "key37": "5EdWUSgPeNycLdp1qN2SBeGwJftEWagGqoRTCuZeXri777CfuMciTrqCNbUjdPt7BD8XkhaLFnNAqz2JLnd4U92n",
  "key38": "3vD23GRnxiQq1qJ6Pi2Y6N5APZSsqetLmxxTpDgTQaEpk2ox6EaibWD5f2JcJmKC3HpUJDBiGsBDDqtqXVR5w2hw",
  "key39": "24BFVwiSA1jdEwx3FZ17csPe7Yr9T6z1zhbsuguKm4BKdfSfTkLT2GcKEAhW4PPk6McpqgJRZqjwe84nQfj7izfd"
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
