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
    "oeYcWh3LrL9URKwGxYiceVYuDgvz8pwYCppvBzMAHzMiTyboAj3hFXJ16msuoDRXyT12BSVicsezMYZqzjuXgBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MZxytAUoWcx9rHDgah5sY2nR5DfqT7AhihAJrkGhgdrwXyt8qzoYJWNveZUqhmxc1E6mBKa86Ra7RMXeJnevR87",
  "key1": "2LXRpRw1JgSbEnPbZwiJChjqAk8TncrbpMz239mrk4ALmiaS4vr8Frn26MS5E9vg3dYsV7v4x56PPZqWrgvDn17Y",
  "key2": "5KxwnKyRqoGj1HhbYMPznTDP6kkjEVBkymKhs1r7kHARAcm5kMSyTYcqCbZFf4dpUzjSAD4ZBoZmj8FtzDNSyX2q",
  "key3": "24H7TmKNpd29aVYE2Dd8P1HCMNaUcMCmkXNQrPUCUKdzH9U8xfpqK6rDWs4wnJPcGuSELv3e7MTg6Ydky52XqScg",
  "key4": "2BtTwo4P517fVNrfUwYHKEuEqUCFU1XjLKr2W1Xj65VYe59LVFGWFKJk16v62tFvo3DR4ryL5hP6bQHk6JNPz4Ys",
  "key5": "2i7o8iPZqG57Js4jxTSSMqchuFzQQj5i9CBhaTGi3jeQngJCjNWn4dAQqLyEvWzyQYZS5h1Umz9L7Ghsew3iM9xo",
  "key6": "3XyoShB88ctoszDjAaCPFNvWnNM7UzynTA1RnUH8xaZeXPGnQcawH4gYJ53493Zob9bGF4WzDR3cYMnj6McN5F44",
  "key7": "47rqUpLx69so3ocs6DzzotWCLACMrqZk9cLHPkCFiVct4Yotvpko3beEGsyrce8moiZCzgYb1AQaMtnrUNaUHpjv",
  "key8": "5sYYM2P9RtiZm3L2jPekG2LWGLdVvYy3Pf4NbGWXLKeJQkD5s6mRcy9Bgib9xheQQ2q8LVh7XW6NKaSyH6Se9UsN",
  "key9": "Dxd2N2XfB7vdw6p9j1jtbyUFHyfuaFfckycuejeY3JoYHrEQPtUs5JiLKN2NUr4esmeyWrUnUUYZvf7SAqs3krm",
  "key10": "4K9M7uHokzUnsvVnfvmP6qbyqgUe4wrRG4QKaBevVzNn9qAJBi1hUtv9aivantR5Nh1fv844vHCjWR3mhHsjemWF",
  "key11": "Vz5LXrqM1BbJrnYT9AkgMuoABkxduHeEr5h2LuEUxvMmU3Pe2DqkCQC4vSAwVKb2KNctLxns4tkNPwqFDaCW18Z",
  "key12": "2ZkNbZEYNEZHrGchE3JzMBkVMAJXCubDGo8adgwxr2VNbzEp9mg5U5zHwJJK7bFqaEk2ktqfqaK24MaSbJ34x5W2",
  "key13": "21kzphuFr6Vqt9htqNwRUk2B1PjYumm3ZBgPS8id8DZjya7UWwo3rfPwFsRyLKP6CnEJ1e9UmB8LrEjQLMD7rFB2",
  "key14": "31FFKcju5MSGV9g8xFxrp4aPHJjmfCTPwnwj2GRw9APmiD8XDS4ZFa6eqytj1xK7Ri1A13kZM2WyaMuaFiUH2qwW",
  "key15": "p72D3n5R9bDdbtJqQ3KqtFqePLdy2frJkbmdzk3q2513n6DNfWbbbYyHcbyAx6ZtSvfEZZwAaM5wvJPn6SuNteQ",
  "key16": "21a1axAPejoLzbP983vuKw4Bhd8QNpSfB2MPKC274ZVeLhErm9RHDXfibQb69CVE3f1b2ibaumzuayfAxQLBqhLN",
  "key17": "3XYhQBDjcDyRWc9xNkeCv1xfN114nAVsq6CWaW9YFjN2WbdC7sBwyVogJbmpbv7tMy9jtu1onXBxEZeBpmvysYda",
  "key18": "3ybZRaeMjMqCeRLyW2uCuYaLPi5id3TLB9nAjSAmZUKvVHXi591TwZDKSvdNrnuVZKpJLdpAeN4k87eDPX1aEmLA",
  "key19": "5sM1QtRr9Q2MKfJvCxKoKp1TaVVR7RLT15SvoZBZ9rvvUrTMfM8vD1hF4CRZ9DJfUVgbrTc6sQqB2rwJ46EHWiHc",
  "key20": "5wquJadgEpbrKL3cDfkmS7QCWdBmbCet8Ru62Qb3vTKwC4JWvXhJyCLxepyhszACenmkeR6TgFGxh1f5sgL3LN83",
  "key21": "3NGBQrsTqrDQHNLRXhz7w17Z23pZS4nyAP8HTXLwBU2YmhAHz2CsJPxXALerfAyqSwu414y5mgkEepLh6gkiF6H1",
  "key22": "4PwsM3uvSWp3njtKU3ZEM3At3k6FA4RaiZofEYnLEny997Ss5j9cfGRjysFVqmCV65apPHVrSzr1o8qMYZeiEZfe",
  "key23": "pso1qWerEiifewwYzQp9miJdbfgbME5VZw2ib53KWbXA2ufo6ZWndEEBXaCuYM7cFCdkfX6HT4XBLQdLyQk7jHe",
  "key24": "2fghakCHJpRUPSdH5pWWV5Nhvk9fgQQfYp85JTS5Hc9Cx5hiQvRUESTpgBhCpazdomurFD7A6FPR4b8s9cmMq7Fw",
  "key25": "2j69u9WxbSBbLoMiPLqc48gRzbtrcRNGfJ1jFifsDSFsou3ZQJiyncTe9Ye9js3UovCrbC5N3CReAyVQksxTKF4Z",
  "key26": "2vU3hBPBcUB2GcjXmTFizL77L5SSd87ZcDUuBoX4y6LeagrLVGZCXnjzgvM1avggQ5YTJVLA7z9Q57prTEXvwRQZ",
  "key27": "4MLRmc2mLWGK8civjLE4CchdrTTzJnQcmQGoJ7jTeQijTg9ZMzX8Ne9BqSYVLTUV66fGgwNbAfmSUy6sp5EBkQgX",
  "key28": "3Wjb1H4mWkMMhkkekEYxLBqoaTNa3Jy9LZy4FuPciAXGyfcgpg3ZaA6Pb5zXChCAUzFmxxbAXpWQye129VG5vpGq",
  "key29": "2SGZXN8FECAFjvy5GUjG95TapKwC3LHw3DNymbNTZHSLqf4gphDkBWepZLpdgvgaiZ444w4kzq75yVXEsyw2qrNY",
  "key30": "2Hqua5EELMNuqw1WjdDyfmkVn4JJZFw7cpiktvEeicBv44AiM5SUBiDBHQLHKF4QUSF23xzJsweAGSrLcBLFR7LK",
  "key31": "EvJdpaYGyuWrkBWF48UqexjvoN6p61Tva2zpkMjgEA3Autx2KBycfEmmPX1xL9A7yCwExFnJEPAcFoTsjq1sxVE",
  "key32": "5UqzuDZhYht6DE6RmAweZay47KKPjqLm4GV4BRfT5HJCJfeFGSYY3gBSw8s9HH49zqLs5XAP7RQsYSJN1MAUAKg1",
  "key33": "5mzXxBkoySj4E3tcF6kYgzPNanwpnKg2GGTpM7SCNS8vKLbih4N84q7uquRqRs63sdm5f1bwD1cwmiiLc8cWq7Xm",
  "key34": "2EMv9rptYbQyVe8FLsZWzpu82MPqEeqFZuoPYhvaCTRnfKHUTvW6zSwjavQRFDeqESGVaBPdjyBCsSNwsgvHMbja",
  "key35": "5RqhaAtMz48xL8yuUmTCHcaEgKBiaiLg7DvPfNLZ5WoCYrskt3Jf9XZvTJFW4FD9ZUVGbYqUzHh2KQ2zC7xqRbLw",
  "key36": "3U7HFbePCmLZ6Wd4Nj6a55EuDWtUY9YjXwvEGGH22LwomZqp5jVeUr9zozTPZpVniJHuQTb3QT3b1PzfaZfu5mCe",
  "key37": "5FDFQt4F8SA1nhHet4qvXPst6J73HAan54g2JcBEZw4xWcM244uBSQiSmS5ot7VQE8Pch2hHoSVjtxWKjK9BN4yV",
  "key38": "3p62U4N15ckPSxPUYSDsggvQTbNBL2gHDUTXJyMkacnTp6Q2h9RwbVfTEwTSPXmX5ZTf2M8DqxEiWjrhEocpQykm",
  "key39": "3D5Ar84pX5Sgf86VFFz6X2mvYsyWuRRZieJcE2b8oz7v3TSaDu9jrrNQaEBqzdxnR2Vc3MmhVfSvW7JeywtP4q8",
  "key40": "28NA9PWWCL6SwBvcHXZJaawc8BSqf3t2bHr1TArGnjpdGe6HfJR1YTzPfno28a13RtfzFErCkMwnG4qeiVToqDuf",
  "key41": "oqCYPRta3Tyt8T5iMzHW9T5yoKWZA4tJ2jgVe6DK21KEZyYAo9AbJucwkUq1VdCesQa5Tft1hJWUkL3EGBLp2ed",
  "key42": "32ASezD6T1dSz9uSM77bVKcqSasq64LKFiMLEHCs8ViXJ9PsnQjG5is5Khe52XkXH3scq2YTD8jfYiVexniC1r5i",
  "key43": "5oBF7Uu5oQ6dYhQhj9xH3orvZBAMBSjKZTHg3KmCwWtrgv6ex6eTzTsMjCttHxAhc2mZMiNEc1HbZ7DTrY5iSJAH"
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
