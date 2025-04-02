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
    "unKGggkXzVw4DdgcrXubmg7JFYwEZyx2bpNCEtitAoDHc72QTFYsckFcMoXZ5UR7xKzTEGjjDhN4UhiyutUKBEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MqPzvUZu9BwsAUarPGiCzYpbzNwLwwGYVc8hWCY6fHAbKN9Xbi5auNhQdi7g1FLDbjcYuQq97nYgRx2PGw557ox",
  "key1": "4rhm1DcpQAb5AaUEKiPt4uyqpwZbgEY9G64XzY5ch6nwC7un6Nu71ZZ1hrvWXTRqCgJvq1vrB8tPwoCwT87voY1L",
  "key2": "2dFbeiXadZWNcYoNY6F7Ar896438LMWLtUjvVphmsbBUJqBgy212N3L33R1Yry216rRCjDfSRuJLkEnMjtn4bVNu",
  "key3": "Yyb6oeY4ZLHyzNbhrjg5JWPp6j6D3WCNdvZroJ6eG1mvihVkrLVoXfMCqx31vd423r5ACrEa7btoSPXGwuof8WN",
  "key4": "4hAHLYanX9YTAKT2RuBZniAGf4GYXag6QmrZ6rAAvHAPxqyorfHrkSqnKtgoNWVj2qUB7csviDFYUed5o4LV5xhz",
  "key5": "3opduAAN2FnJptuJBGdEYDrxrCHReAsVXY7RRnKVyKKrpfFTuZ2kSExRffNPeqv7r3rzTrgWLjeUwbpz5XmHcBRM",
  "key6": "3NJqgzKa5reS7wToNB1QA6rDY9JhFQnWaj4PWK7Fd6Ma4HnCUyiZGZeTqk1hyyu5wqzD8rtooRBuHoy33Cd4GPD6",
  "key7": "VapH8m79nERdoQvwdipFaWcFDESHzuobYuKpud4xdGkp7jrTLkLqTvBkpxzkmVrNifbuv27jzUpcVtda4Wxwvui",
  "key8": "3st3FV3Etnnmho8NWpRErfLrwCsDkEwjCnFEABmdbBRp2yPEdtGWPgw5vUZq3g9MsbJY6uQ1RGoiE6uwbRHip6t5",
  "key9": "2tqm3L3kV64BNijbh3irbopPiJCv2L8sKXmRyUD2PrCnVJ5LUVho1zV6zxoMDztPhKkShjWSaEk7ye4WVmfnDpMY",
  "key10": "5NhoFJGTAugXXvtscfC66vrbDY1spFM5Jw2DqGcqH1cWQ36LthLD8UfHPbdhyLCuU3QRZbmu5F3HzdRU1UM9Be19",
  "key11": "3UJAWNNmTHwWaGWFXupNEKRGK8i3dQyP7vtzawLS7WdqBZ9aYpkdUx5U68boE99AWQkuJmUC1JAa88iqBZbYbrTa",
  "key12": "5qRjtGQkNgDcVQ84NYL2KUe8CsxhEwJux7YBc4f88J2C4oVeLz4DJMagucDb23gue6si3zT3xWWi5YNPw7NK2EgA",
  "key13": "45xRu8H3vXFtcDpWUygfrMDKF3H432DGrarnNZ1rPQM4KrhBamtxZ4U32hMgjAbKDzXGQTghCK9LH2AWfagGM1CT",
  "key14": "4U2MYATiBGKaB31rZ8NcGKToHm4eRYVTgmWUho9UeurBjGJQuiF2R7CanwY94KFPHjSuWBWDfLNboPb3iMHBjY6L",
  "key15": "f4PwQEMLa8c8XK51bY7GyH28Gg5tZWBcbPz7xnupPZP1c1SHmJ2pGqf7wxiJ9zPwQJBEotzg5kYB3B8mp5QCTWv",
  "key16": "5yYHa6MRTsEPe3yT4ZnmiriMYsqogP7ydDfb7YzTjbTpCv6o69fyg691i7FDbxVeypoa5Kznw3XDBksLCsyxioUq",
  "key17": "4LsRk17qAKtsKM37jpppZr1fhHaQBpXeA5VLUFBqQcSSePuRrfwEyYZ2kaa1Fb8oMwq6KLTPhTgWUTBEWC1f27sq",
  "key18": "D2yC5MtfN7NvD15S8mfrchQM1pUjmSp8UaRFC9Lj4hKof5Kp58KJDhuYBMY7AQ2J3t8pPnJcniRbTnQCswMko8Q",
  "key19": "3YnQAMqCjHuSuiEx6EyAwix27AJcbFy4nVHmWUwTUQtL6MMu6KkLyJznzRvmG4z9SXV3i6tMu6QrdeAUM8rDsY1H",
  "key20": "3LUKuKJhAWJBAitKT12W8Q2NXs21THGYQASHdyKBcWfZq75z5ibKRShVqAmw7FKxWHntTCBxoT14qf2kSHERGtwQ",
  "key21": "42J9XrSeySTrmUSXGPpjPt7T4L4a8aeNKqSSET65YiC7npkhw5sFo3YYDcr9mhrRxY1YuMmCY1c9pKDS48Wyfkev",
  "key22": "5W1UBGsYxnNrBxzK6VPXxMRovtfLwCkrKpcTraHihod3JKE1cws4Hc9mzAkD2zMLRM9Khmzb2LGGoUZ58LfEJU8y",
  "key23": "2D8D6tPhW94gCVfGBSmipM2f2LnS1RhHdr65uFzdNWKZ5teT5zQdKNJwKkWUznkAAcDybutNwqqtyFRwwi3R1ZAJ",
  "key24": "66Reho3cGJ9SFk6FoTah8LfvFZXsX2vsUchFWP1DeoT9hq9rYEaq3MX635g8Sit2Di1GzUrkxfDZ5bvF9Jymp8bX",
  "key25": "1gejBN7hsxQyKP8aQDnHgHx9CUoMZcA2WUXpNXBi8Gn8TG7eN7cYdpcWj6tLj7cit5LuPia62jPhMDvVMccBmQk",
  "key26": "2UiLmr1KqXQpVuErReUHjt8nsj2XSUDcFYJwrbGCoSnADdr7nWMXvuiuJwCVafwzRnY98obyWnk8tV5E2Z1K1wwL",
  "key27": "66GXtbvtSNn57o3dcB6eWy3kjBbskcGxAQ4HNSorCZ76cnTCPsFCvuEtVSFH9knFMvLzAfQKNjv1PWcAT3HXdRjt",
  "key28": "5gGDdrj1q1qSAEXsM6hrshetjwhb8NTNFx96rg44wsYgiW9yMDMBJEwmXncQqCGfX9rk2fvqF5kpXZSS8Q8gmRid",
  "key29": "63jWWjGBcDeAtFwykp2iQgU3mj3X24cVBXH6q4hZaa7vtkxMEdnzACGtLdetwp847RLGHc4KG43DG5kUAXiAHsnc"
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
