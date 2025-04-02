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
    "4c4GBCCwpPpTQMkSCdoxzLERwyJ1av3Gso1ZqXghT7sjJQEibp2KpqtuDm8rnmPBN5wL9wF584TJuh5gsjWVbTry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66FZs8YQKRSsC35Xq55DJPTvyY3isJpgghnqKX4EyJ97jzSYmM7pTAbTqreKqFJYR1tnHW7m5k2mJd6ndQeknnD2",
  "key1": "5XRxfZb6dBMUBgBSzJ2zMwAngj5VRd7t3uwGFpaUcQUdMhPSAnqDX7CMVba2TKwhdzmU2vtNbxa7YQrTEVkGa1n4",
  "key2": "4A9AYRTGi2GkCZLQQKUVMpJLH4i4yU16DByMSxMUyjJgP1kgGkC6UrusbNwjXpL5FgNWb1EA65VPmFmsJJVQRDtG",
  "key3": "5JiiiLCP4a9GXTFt2hEVNThA42chCtBPyJvGM7jk2Rr434PUiZrCBBwZy8QZeAJSnUrnLs73ptBTGF4ka5hR7Mky",
  "key4": "66tur1DCoGBYiNbDg8Ga7wgnJc4wiNNyhF6ia4M2BHN5hQd6hwSoTuFSWUjjB1VHb3QpexRJVpC5YP4FYFaujKAg",
  "key5": "3w4bxZBD46aJFzaCy6DhJvb3adLEZy18i3dk5GZetJjDJLSFRWmGYwfZVCgDF3PZ6jdPxtx9Wi8AWtwT8YWh8DTJ",
  "key6": "4drahAHk5TtSPMMp8eV7cyd9jrXWTat8ds2ZurisCrTnduq4XH7WD86se76a6eg5QRvBG3QQWXtsKRdB4sgQ8WPz",
  "key7": "5DWznioHBoxzsF5YCd111UBexWvpfvhcgdLpamUvT7qigcpojg286nF1kiKXXkDG9nyDqHumieMPWsukJbeidBuv",
  "key8": "4k8SctrsDHq8dzwH4AgAP5oup5rXbTvyk5jAf8rZjYHCV4SoCUezvdtknzqvTXTKFaAVedp29hS9umhpXRLPe3sW",
  "key9": "3895mYg33XKuXc6vTaP1rpctLtFqaGqEJk4Kh4DSBeJfHMXkJHS3cVh9RBazBkqJzK7toFqDGeTz2UBXnPPzvN5E",
  "key10": "HpRTxVnpRDWA9N7uoTLSRp81EcUtZZBZQu8SsPo4yMwbbwxc6zSgqphuMCLzWKvTTPicUCbKfiuvgWxaQu6FEuD",
  "key11": "3TH4Q7tF7yqHoGRiVhu3awN61SBP1ppCiYQUbZgXD12uSn1U6teKbaAmUcXibCBHC1ykboWqz2KkXosRiUK2kNXT",
  "key12": "bnfn5AKo27tMV8zVXhkVCC93Woj6CCLbPSL2kDdE5us57ETgFjM98HepqizJnV46UEStHGobzpBBJPVb1aBSZcZ",
  "key13": "4kAwJCk6wNuoE1e2Eam3qv5PbRupt1KAAUXrMdneuuCDx3GkfXmkPCUauosJSYrMMEo7LJSmQ17q5B1Wv1DDZfQg",
  "key14": "4txTyurygpnG7Kg2Tuos1KsXF3PxEVj7MXgmpx7EBhC9Co28Lp15Ao5xKG7rMCeDFyWiKbmWhS91xoSkrUgkW3Q3",
  "key15": "4Nzmc54h6QdiHch52f7YjmsaYeBGSJmmoYQ7czJogQ4h9r7bB1dz52eCMdJ1ftMtkCwVkD6ish8E7gj3Atsu7Tqv",
  "key16": "2EdX1StXAcAbdjmf7NJcAwmFcL5Jd3CLgmKWPop6QVwhhEGr1K2HWRAsvevJz2t9GPM3fDTeSfznFtK23ZgT9h7j",
  "key17": "4jEPkbFA8TZvxDo39CYd8i5VfSbx5ZyfyawtJ49oXtgGmUxLWhYq12kBBUJiQb8mpBucRcBHVNNM9XqH1bA5rMyb",
  "key18": "444MEYXGBCLVZiN9mURtBQ9TqWsVvaSrofjfBofuFbiQ3KANrvQ5xpfFFD9uZSgAZrqbzhXzjnPTyEXJ7VoLDzTJ",
  "key19": "iBZYxWkKb2yTUsf4ojo19yzyjfjGvh3aHotEvzFEv3iX7SC6sPXDCGojxWnknvAvzjNE1HKM3xeAMLojoqhvSdJ",
  "key20": "31EqYuVQiE1NJcuRKSxx9zDmGzcMfXxsDc1H3PzUskQ1oCcmLuJKw9ZATnmMrJYhbdtjD4XVhFrLD65ruitUG4Ld",
  "key21": "5CkfKZ6rJWRqmEJXS9XoxcP69ZfVAu1Zf2QaRXh7VeAUbg5oCe8dLsgP8D91dmAyUWhSYw27B4zMa5Z8jn1E5tC2",
  "key22": "4cEnnhrh4kmg4HMGcgQS8Nnzwc9rSHW4hojyjZSrpjmFS5Tb8D9Lfnv1GKcQp18c2fFRj2ZgyXrHTm6EGTcdRcQa",
  "key23": "4ViTSGGBJgtfYaqVQxB8xrDL144Cvzs2xEB9d3JwGGGbwumZ2qxix6SJaJm7jGQY8eTrBXYr1nAiZ6n7nHnXCxwa",
  "key24": "3iaKiNg2sy4Tb6f4A2RYBaESMagxa3itRmJHFEExhnYzSGbTT4WeSrd2cmjBgAWxQJwCLUBT11Ss9zniXE5yYhGw",
  "key25": "3uPA7PRXm45zGEAw7HRkV3AyqPfvVkncCSRCU5qa56JFcjt4do9B8JBv2cq1EEtbks2JhDse5zF6pPmfBruGgDd8",
  "key26": "42LZgfF66taJb4St3REDEaQECYsJpYCwhhGPoWwaqyCbPGQ51RuLR2ahc877yYkzQ9NQVRzfKtiitffimYhGCqiS",
  "key27": "3EVbnGFfBZvX5f6HDe5Q4Rkm4Mk54y9y9EHXv96baeuYQtfeLkkRGYKFGY59ppbc5RCGMKDj42FZKbnJY8EcHPuV",
  "key28": "wiNhgzp2SZvYDZEFK91M7is55JWvYHdTDviXUpBFEa3M7MBU89dTReAzCCJr498PxyPLWZ85sN3NQFLkoNUeJa1",
  "key29": "41JX9MCYH3warqWmUSMJKpA6hpa3gU3SzoK1woHg5DnnpZXCTagPsxrGQVKbZLeMJowKQXQTvgsuXK1HU3khZLxP",
  "key30": "st66CXY1pwBfVam4VHGphTS12QFgCjahd78NZpw4RWX7fRDnMpfV4fdD2F5qRvVQsC3BGbBTrtkARowK5t2koim",
  "key31": "381Gk7J3gfBXu2S7T64FKBnsU1ecDBNTxTHoDdSfQX3Hs5o9u88Zy4EGcVAG5WmqGSEdZCor2TrCH5mnAgqibEEc",
  "key32": "5ufLWUAqH9B1fyxUTAPVCdJmBgsG8LHs768pmpLDx8UpyA2nDYxVuerrtWsY5pJVP7xfV6ptjyaUS1rPc4y7GcqJ",
  "key33": "2bBtSgJHPFPVnVJS3rCTFWswWQTVVvJGwxwMcdgcDJqiHqwvXEN3bpFyJZ2fWnodh3oR9yqNBaJDJBAgzE4jzXQX",
  "key34": "3L84d2MJjPm5fyLVgoXWQB7E5JFfw7BURRVtscQsLp5RMJUTcpzFTbqjUVDaQAJ2RAzTRNCSZMAjSbA1pQtcJ9b1",
  "key35": "5sbqnYv8ZawoictVMFyStvAtUzgJ2XskRwrsJNK6mrkyyCh79kRRWmKunv39hd7aBQuoedor5s9GnssFYBPbwosX",
  "key36": "46em2D6KhFuHFEa383VC7juzw1sLtM6R8cdrG1pjBj5RPY9MpC4F3dVZVrX9tgMP49h3GNZmHL7hvpSuwCg5PkAh"
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
