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
    "sFSGVsz7K5xeJw39EmGRcFpT5ugsDpgKs4sHQbviWd6UEHGF2mPQziJot7uZ684v1cPeGVEQZZDFKvpcsqKL4Ws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34J7EUZAvaeWnbpAYyRTGQjGdKkmeipftn2oRqVTzx22RDBpfwFfEHj3zXVmYdYCxRiRdC4KAzNJVNcajvxEnQV9",
  "key1": "MWm3BbtsZ3DRoNsD8CVmWbmQ6pAKP2tx26p9ZYmSTDwzZUzkFvfGDirsgcxgsypk9ad2E5doDPSaFYveNsFHGmm",
  "key2": "2TVwAjDG4N1HuhnU2FF5tcTubR3QXz2UgkhP735NzDVSV3K1a9m9i6QKSKSDYfaBDeRjgNDR2XnN1dtbfkDcgPDi",
  "key3": "2G1KjUU3NiySaFgLUFCiq6f5MkkGVrH6svnPh5EUCXqDqk5DVQAm4v4X6KFPSBpVr3bt69ps6PFvdeDVusnndDjM",
  "key4": "5h7J164CjSbtZ1F4xoSzj5Pz56HWNCZ9tWR36gbgccN4pvcjUPzQTvp9eRuCuppGFySEgkjSyeFx5m14yBLStXm1",
  "key5": "4qJs9mfWd1aiaYC11YibkPqHSRLFqd2uGS6CR2sZsS79g5nPmyYNgHnrq8WutnziWK9eQffQREaNh81Zhr5oX33G",
  "key6": "pHECDGgewqNfd64Vq2jG26HKYCTdVAkndSXGEMHjqUijkQUEDhEJ9jWW5KegeHqxXpMUHowoWPUM1itP2hgz3Lk",
  "key7": "4NTPDJoRZEu5K6W5E1sB88NG6wWTm3Jn3Qn3HWKiCFTJizRmLXSpdYgx3KoPYah1byce4vmp8sqopuuaCuwSij7H",
  "key8": "3aKBgSqxnmKcKAVMn2dFfxZanUk7U51HxGYXMqbBdABL73Ledj28fGmLR3TjFeZrNaYkicgRV4JB6sgk5RPq4fFZ",
  "key9": "23Hwqd9i6uZCmaQpxGj1JLSfAgcd3gpQbs3NR9wM2bVcfrC5v6twoQyAx3hprxbcC9GtirqN65g23sEHjWpY6tov",
  "key10": "21ZiWaFRbTkCD4Ydwb4yjTbfCjcndC7HP4aXFfK7MFnaSDqukcWow9sbZ12dLBGfmvNzp4UuZ95FxJMWfwsUZzYa",
  "key11": "2kuZCZy56jRPY9BKxAuVcAuqyn9m51FkHY1gwYViFafuMikKyh6KZUd3MvL9YCWp9jsgW4KaAKANcGAbjSoV4ChF",
  "key12": "3Fr8YZLPoNy6Hekoh8ps5pLN36UN8WxtY7zpiKYjUNtwitRA6RQAxaWjWQxLxAZL7SMtZYcRcuH6oHZT8XN81wDn",
  "key13": "rMqoQtC96u21nGYoe1RuTZmFYoiv23VpVBrPihsHVb4HVYs39dqT8YNgEB9MZMCttrwWuwVtrQPPnK7cMCVwRwk",
  "key14": "4Xx8ZA6oDNQ2LR23LoiymeJyCAPkzNb3haX7iJVUwxJddNEDNAaDkVaBW7CqyTYXLSJNsz1kPRXDKTEE2FTzKZzk",
  "key15": "5D5CRTNZqXhzMM6kRoP8DqGtU24y1ebb84LGBe3fDbVsdJXchHQjYT2Nq6W5xNN7TWdTgbMBqKvRA4PTXS2DjUyh",
  "key16": "4f8EXscwjwiXc55qBfvdVBVTX8UPALahRrY5cVKiadUp2n6XEJ5aLSyotHZP4twtEJVpesCedEKnhp4xK9upyyur",
  "key17": "3QTDQcDMi2RqrDUTShGpGzqRi3ecTy8fPkjDg7jPzekhjs1kbGWP5NuKwUSwXxRnUjSCGY5A5XUXQyozqBBgDHcC",
  "key18": "2mpo8UjbP4oBedXXf6GsjFUAoB6Nx5tcMmJ2fwsHxzhyYdZE2LyVAUtDaQczEroZZx83WJM7AcwWFm4Zs4h3WYZU",
  "key19": "4p27hsdXE7uy85iudwD7DiveWcKjkYt1PzacFStgA9Gzd4ZnkgC5NJExZgfuZhdAc8yoqMvvuwZ3oTSKbwBWcEx6",
  "key20": "4WcX27uS1AZMZnxnaE5kHvJ3Sm98N9Ewd5RLmWgNRxFemmp9WjYAVcKWx39fJdx731GPmmbqcqk5F5tVDZtJr6XK",
  "key21": "5jaFx6esSq5f4HVcUMHyQtMgxte8xdxGQMYDg5XMs9qSH3wHHHV2XYf9beVoWFVcccPQjP3AquN3YtJbfUAifFS3",
  "key22": "2m2uqqsSeBHGDmjZq8TZ1d2twy2X1iJhq7wwSJ9Mav1qWy3ed9nQp3o8ErRBAtvVXvgLrEL1ccrmQR9jXgfASR2p",
  "key23": "3iFmnM8YDjkAgge7iuNj7SwMMzsTpX6897p7KNGm95nbGsbm1B7BGwkNi1UCco1ec5MmCs6zLm4Fp3BXaRWH8KhV",
  "key24": "2Qo6cNnBStvVR8ZjFpdZjemWPMR97uWuf3BSCb4a93PANZgd6NiPKzRmPo1FHwZe7SQmZ9StjaTVUqpQJtrX3kao",
  "key25": "aDEHo8hVoytJsp2dFRPTVmDQZnHDZmJPEaKQmDh8HmpDZQEazRh4mPWBEscrmyThEvKdpncXjgN7BLbwd6afciJ",
  "key26": "3bc8dMvqG7KsFsiVHRYWWPm4k9KKonHkNkXrL6rcuJ7j85m1p5H2dphLDiQxxQdY9NRemGeKMvGbKseLh7YbCjmq",
  "key27": "4e6dYMFDiJPGbK8qJiwS8rnicxpBrfAJavA47bxBXLiJeGPr4VdYBSXT9QVf6feyXiYJaRXsrVhD3ZiG32Mbiwkj",
  "key28": "5jtwGXaFrk7wVtPirPcefcteVkhpUF7R6d2LHUc2P55LQ7Jmu34igXWLxzBv5Ztj8vKfcwS8JAEqbVPbbhqRQviu",
  "key29": "4qEhqfdDBk3AQ1k2ZBRE1ikutTEhMK7aMHXRr3ccHFaoFXVWajZshje7VfT7ABKi3Dpmizex6RNm89vpQxS48gGC",
  "key30": "3xgePKDLzWy33gfQgMbxCfgYcY1aA4YHzgQKfJa2uLNBbRbEs84bCqfxKvKVSsvFupno8aQVWYBkMLXKGZvGty8D",
  "key31": "2SrrZcQnbwNKpQW35HxbiWgqnwB2TB9SaUF6kcVVK8L7sfAPK12Q6KRXXpHiwx2oJQzDP6YLQUSuqWApezRm2FPc"
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
