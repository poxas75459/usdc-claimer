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
    "5oJTKwMGS5huPPtKh5t6Q4gvtncw8iDeY5RpJx3JGeFr5dYGMdc8b5FHeJ9c3UimQRYVoxiEto8SP4STA7cQiVjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58vJdFGPpCYLbmaDnJbDVNNgZXrD7kJ166Bf3azduyTLeptPsm6t3RT2bka6wmH1SUdJozapuJGFJxsXkbait2FE",
  "key1": "2jXNpUZipHRh71ESddQzE6bhH6FCb1kkK9VZB3nduaH3MuwfbbAfaqMzjk1bfSxsq4CFhAL4Lu4KLqaRuxsBoP1R",
  "key2": "2ieypcwgqWbLM5GMqMf32UeGzQFG8ZLatLdGHCryc7ZDMVic1pVbPG5ovNuRCZPDiEhPFDBvFp6hbW11vRFdG39T",
  "key3": "62paKGf8eDoRPxHS5srXkgmWZd4uz46TRZdWrgVbG8EaoDZSfToLs7pYLrzKBFR9Rnz4fwP9CB8CLkEdr2zYeY6K",
  "key4": "555iF37tkXT1s2FPk38mpacmJHHsnWECfpg933aGrn5Fbm73NJ3dzJiBXgzghGxm3AshVjE3HWNmVX7Kn7i8s7qy",
  "key5": "5dukiHrQrXmajjAPGkeRiHfkjeYrek83mjVBmvmn2JHNkfBEBVxLdQgnZcALhpGHwzJHVK99AEN4wJAFYcM4CPxb",
  "key6": "4Jg3eJ8oWauFr1kHfAHRz4BPYbobUfVqYM7WVSUvgk5QFbtZuGEAf4o32ozpgcittiCUdRuAYBFUcK7BKuebozpo",
  "key7": "4SaKMX5V2mtWrtdvicmVPFLzSsBH3HhFPwXefivZ6UkKr2yhyzzTSW8DYJSttDBXY5FYTbPSzWPsdbG5CWrJqKJt",
  "key8": "2Rn4pmJz6PJ3gKtGecpEiBLCTsKCYGp5rCWr6XpFCKN38BeNjfE5jiedcWo3L2rnMjwFFoX5iG1AxvodnCcKLyEA",
  "key9": "4ztCHoNSDBueJoWyFnNRXFFdLQ3eqiL8x5uuePuDjnMTKA9tUbDevK5QHbAnw2vRUyWWB8EnkkRVJYXZ6qMLrNpb",
  "key10": "2v1KBBzdrjp6UZ1RGoPC1nrPjAXGcJciSkc36HajkkP14UX7moofCcQZ1NcGvc1x78LKxFKmBHvMU7imNFbdeZ9v",
  "key11": "5wJQxaNM3EbNJ727xREnwRSaXrR3JQzxEY18pJ8w2w58Tc2QfWaTRMjKA58W6kWPy5QX9BByJtrj8w1EuGgp5CAg",
  "key12": "58VXVRpmT1QMBdeGJKEHdSHh8KWAFSYZYB9igfC8FMujMzmLdC1VRYxUxkUeQnXd6BVSV7HfkUTVkCmhKQXEodYk",
  "key13": "475C7LJbbswbJ8X6kk65NhaqMLq1CSdwsLazkGtiu3U28uErCJrdYbYyYkoqbLNWtpmMVBczd7PHhHKbjH9eeaCH",
  "key14": "4dH82A5NaP1nrzawyLytSGcBfKbDGThwNdxJBfXeSf5GRzSorkZiBJNHwKVUg5nAyqizFDHbdopHEtr3LCZwK7RC",
  "key15": "5AJszHySYe9sBeeimuUj1tbWf7Va8Q2YE1i68RGCPFwh85JWTPLqd6ziAEH72NWQgGQwpmk64UavScmBEf3ZPe2z",
  "key16": "67ZJ2PxhRzC79YVWoq6MkFEmfBDpgSsE9KTLzmvdzdTBdSMG7KpPxTAkqjBk5EfEzUeDRXWBnJ5SqUJke2nRuVsV",
  "key17": "5tAuNqiuAVYKXKUTXDwCvF7J7iqsduz2xhi4sHW4tPnNXPHji7X259LLUSGkdMMq1ANzPwKJ2S3HLfMTp6dYrY3R",
  "key18": "2dTiBv1zS5htDRBuUxEWXMqfkxAAKt2WZokASC5BZ98GQitMCBKVW4Vh19KnPB4ABRsiDFe8UfLQpD7td12MFyPw",
  "key19": "2w8KZkkKPAfs2JyiA4J7wkPQahng3opthxBYVGXm5DZfgvHckunoBFtCYxRopoL6E8ouGqXUU6MxKZuRxXMG9CQk",
  "key20": "5SohM31m5Gq9Vb7Vo15s3yP6oHLRLQQ7wNxsoZ9UYipHs19VR9w4pwZnkHhcPoUkbBPyVRRaYKyPmNviABdqRW6W",
  "key21": "54nTpba8De2DYSNgiZspZ6cWpR1S8zf6Tujrn2uTtx3H4waZ8zVkn1ULJzz9DBdJknEuHEu54DAiHJYH25r8THNe",
  "key22": "49iVSxG5fhNeG6XBo9LdXMHb74AEdbDJKHC8dhSNBt6Wv8pWKhWDC3ihPemA5DDPqVwKSANzn4QpjWBi61uPt1ni",
  "key23": "odjaS26fx2uWrZ6z8FWZhpDrLYT3rshXozijZVPQseCMuaYThnuLVP2zRGs7X7BhvXUoHRpz9zfv5WPSKhNrLNt",
  "key24": "2tN2mtWquw8xR6GkU4D5YUzVDuDaEvK8KdMPEU78rwQPdLWeqBixXzbyQ1zdpDifAitWxhd6tTwyryKk95G1nEQZ",
  "key25": "5ZyhQSoPR5FrJPSvUhn9cQc8BZXQbUQpMoGcbEQreJD4QKDDrZ3SBYGXTyZMRfeEPnBuvHkGuXYdpHVBMYCfNrab",
  "key26": "4EjpKxm6dTCm4Z85kvfKPz6Q9cadrzrPaa1ci2ZbRacSCZQW7cqX2y8qDR5bjXf1rHgoFUEuA5UB2V6BQSQ8Zq6w",
  "key27": "2HNErzZdyd3bDzBBNpkUH3PsX9Sei4CRK8KgNwZgwcokbePnA77JvfakHLuFrYKdiYqP5MAyP6GQbLkT3KEWbXqr",
  "key28": "3MF1qpLAr1BwQfg1vNmtAmMYCk2vYrP9NSCVRk8RaKCm3hx1XqrH1pAVHnHpnbbaoK8EbzvZcAEHNMBdXDdmfagv",
  "key29": "4VnU5HLdvjUr1H2Fdym8BQEptpq3vF1tnfYT2Se1CkB7LFi1Gu3WqYBRMqvgwLHHqAcSHusWzsccqnV6UjgPJwjM",
  "key30": "2E4xUSGRsJeeVhL6AKYxJdL28Xw8CAhreHHFmd3TCEtDZffEuagZ3qybns4mQETDksZDC2hgNYa8tFv2j7ghy87w",
  "key31": "4fwkUgcGcKYYo6kKUQo3kjF3MVp5L2FNYMLYXec9CoGedKjw35HKEZHvEyZNNMhbGWQTsKmPtme1xC5Uqx1xBHys",
  "key32": "65zYUxcjwYn4kqjvuZVaFem8KyBeFMvK18GkVnXYBroMrb7DZJtsxkZwaP7gxF359fyp1cKb2GxY3qB5qntyvNrk",
  "key33": "47CW62srFmExcPU8i6XyvVtXciLmPJrTuzzqEGtcMYQ47Bt8kk7oSdjadCEqAMPzWZYuUzgxL7XgewoJHuZB9M3i",
  "key34": "5yr4ZKKdgjrsGU5zYFqvtNSLMMQexTcG91ey3S3bqbVXfGW3T3k4N2x4ezcuokLVbsBAWMm6MgcskEZPPJA4nHuq",
  "key35": "4DspKRNk75FJykVTpkmhwjF4QpXbso1wykeYoo8N8vM97KEbQxYdwt4fkyY5eqviJApC8sTpLrgMhucu7FSPCRbS",
  "key36": "jRN9uRoD3GHk4X9LiSfWa4YVjZPmUjreLBe1MhCizRXehLjCv4NbWc1JSm9akzHuFS3JCsb6pjGpRvqUKd35zXp",
  "key37": "3vQV8WkhfisGkH4bnvk4KRrm1KFDi7Br4rx9vDf1qeBQTbgfXs5Ux7D2oFuwNe5tytUSEfK1btyoo8hxcotAQ857",
  "key38": "34xCamxztm7G9Fvxyb7dke6pqGYhapuJULignhBQRNu34ZPPDb6vPmNMZ2oCodB2jZSANT4cHpfDKgbjDj9b4ttv",
  "key39": "cmYLGZQ6bzM84rvq49rujSZqXfwQDMaYgLs6J9Xwo9Z2spCYsswHJbwy13th1TMfij6p1rNL8TLajaqi6RgrW54",
  "key40": "5RQWkd1eBw6esBRzhg8qARU9hoRMa75GQT8TQB3iah5Vs6CpQK6K94rTDi9hoHHvF68KLduMdbZWKaUsbHESiHWy"
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
