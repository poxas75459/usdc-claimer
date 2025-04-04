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
    "YSdc8LTcVs2bSk7LyB5SR4ofyaWhFLsdN1PXpfyas2BTonBwyxcoHNtPFZ7aiNUu6C4cALYMjmDbkXo1ScnEd2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hNGjDYnrDEqrKg3rHunDxUcEqXLBiJJHzFFfjjTnhyG1HXogyvPpnDy9XcTUUJgt8dCynXrSGwxQCpBouSkER1C",
  "key1": "3QPsjwk44jBnUsZSWmZ8ntwVkXV8kM7n7vRVbozyquAXneW7Pwch3oS7QDHjMaCsvaHtCkox5MmcDXY4A57JKGp5",
  "key2": "2S31zn2bgVQRTBCYsKzGvvoRZdMH8nwi5UJaVKxCx4QmzFpyJydL6LAKRZFZNPAsZ1pPbMuQrY6wc5KvRaJaiNsT",
  "key3": "MxGEWc1ifhCYnuvF1bsX7tZHpYaGD3qyZVivSRD96KkBTiUpC1gRi4eEER7j1TejXz8QXBGdLoiaVwuUUhc5Pnb",
  "key4": "65SYR6zHTq6vaedaNKr5Z1GeDfKdhmaavanrpb7N9KTphFqN8UqkS1HPhtx1zVGpg5gUeriRyVGzC894B6d7pVCk",
  "key5": "gPymPXH765oRKEM4Vpyp3yQq3xu3RTBiD4gdWe1my2MFU1XUTDix2nUqPyeb19mVFmMdVqaZoJiQ3SbxtXwx7tY",
  "key6": "4drMn4p3gXSpKaykaaHYNGRDGcgtfkJ421TEUGaKEXnCHkmjMrcf8eciu5y4cqAqvbYKER3Z96x1mWpsVmzd44yW",
  "key7": "4SxbmuZvMesXYPs8p5E4BJHNybPrxgsQ42znYtdN5P4F37bieqtEscoEDAHSrL8yt9d4BWG5MBH22b7JigXMUyu",
  "key8": "43ntCRDhRMbkbZDabp1ehAzaZAxQ4AaeAD1brm38bK14NW2zhnuWiiDZFzMsfLDkTdrkbiqqvk85wp5fc4aKjseG",
  "key9": "3ESLhuH298m8qp6mX593mmCRtHkuK7uqDhGoEzzX4HdY83vDnw9a2KZfsspPugkM5jD6vARy3Fg1RQMCwMYix6BP",
  "key10": "2un8E7U33v5P1XWNGmnKiv3LG1XN8T5s6oG5ED6ye7xTgLJKfga5389edtd1xshvkargNoA56uV4FrUkLXtpFsAx",
  "key11": "656US7yt1ne1QfwoDdNZBjcx9q1wR6kui7sTzLaeNa6361UEL4ucTq6Bj6acVw8919PdioBkzQG2BmH4gKogveUH",
  "key12": "48NgJgUiq4Fe3kWLNGhzZ5Xr4oyd2oEntfBVATFcJ61tHhruB6CBq6vZ6jWean8Zsapy3c31V7tCYxKvjAgRvYn7",
  "key13": "2FeKSiVYq9fquvC4wprJ3iovZYFwFHDt7Td4AaVWFksq3rEebjaz1AfGGmb6GSbXtqn37FR4jDXNAb5PJYw9okSk",
  "key14": "ULBUB4Co9AWgjnMGvvYCDpCeC8ZS9mQoyVNxrSeNenxh6erMYvpvRLSfLmjUCvfmFFMbMzXufwWQdj7VUAqMDKe",
  "key15": "5G4bRfqhM8qDEVR3Fu8dJ2CqLvMg5dxRJKtXcGunXwKQhF7BMy2nmd15aXrGQg7j28fKVnZ7e4BuGErx4Jn9hewQ",
  "key16": "65K31XZ72Q2WaHL1hxKpGLqJUTg4YfaHtwYyNZcBFbQHk2SMPKsx4CphGaBrsUL5sbFoN7ZJepuKieW1bUowrmCt",
  "key17": "9h5mRYxZZfg8PYgHtG9hzDZ83NJ3daG6Vp4HBKddsiZec82LTmi1tBfitt89TPC2nw26htJDq45Hu6gfBZrFgNB",
  "key18": "5sLiX3Z2S71nEQgKzEmxZDY7htfULDQbbjWYsoZJRPK3mYuth4vq3B8CpPpcJZqpnYonuJCaNgebhh6yCvBBjfFx",
  "key19": "5YangFWbsrgs6physGs7v1MKyGmWuBmsRmNyW8b1QvAY61N2g4RuJCDXoTjT8FVHP48C1XjXu6DrZqp72fd3siF4",
  "key20": "4Ja6C6P4k9gcH51Gq8mwWNbmZu5sipBhCZBRVXd3t2Y1dgRJNdnctgx1X6Y74qdYrvwaQE1p8eSPByxt97Fm6meQ",
  "key21": "2mNgxq5ZuLczWLuTdLvnKXWEMnnpvGH9MBMxsF34Y1SQWweuAKELhBY3dqXXkawwEDP44Bzd4YLxQ75meoJSZJPU",
  "key22": "4ZdP9A9vWn99Vtr4uQET8RF5ujFeTtp14KbgX5WZ7oT1wyBSqnLRtU6Bh3gjLpfp2a1H1rWKm3m1WGWS5xMHD2Fk",
  "key23": "2ioM4dE6vfGeKAU3DSBShkCoCjjYWYtGDEA1Kh7xjZ5um2L845GQSf4jWpcnvzsHruZK5aRFgGzvUJgegfJejue5",
  "key24": "3WQQYftzagaEmRC6L2VZVzSHsEpdQpMoKL37i9Hhc5XJC7ffPzGYj4anR6tC3M67LayvoCNCy1kUSgRi4dXMUiiZ",
  "key25": "4F22RLYcYVJchuP2e3njvN3sciwBTbeEY1YGBtgW4eUAXHDQ2nhLnaxSCPKk517hoh8B3DWJJB5tEbXNy4dRdmeE",
  "key26": "5yex1CHgTYVfgLCH1YXoRR7kW2Vpy1psfDUDKwY5c3px59cz8wUHbYs62MBLzDWedFeExWN2GfQLQZVi4EgUUPsy",
  "key27": "3xnnEiyXHYMo4r8PgEAT2KiLc3ZamdqFSWxzftXi7uEc5zdWEuqjJLNzCpqQrsBsx5Em38q2PRxUyavwXitWyf28",
  "key28": "5HUFuHu5ZsXprKCurfhVYwXXdiMhYnGXZXfepFbSWTCRoYncxZTWteL4KCeG2tue4862rk5SDpfnDgRSgybar5p2",
  "key29": "2n9wBNrXDn38VjEJLFcYJw1bkqX2qafXn5USp1jfF2eMXUABk6vPxVRPRgUYrcSt63iQJCrpYAvr66hDMv57SWLC",
  "key30": "3iwZVXSsmUaoxiw2gsdGi17Zi2APAeMmeScLDrqkyrpmk1BUn35LPKnHLwCrTsSiaiNauVVJouoNmCT7xYUDpVBo",
  "key31": "3Dw4US7sLGUdTV9euXRwcLpCKJoJcezKStEzEiPZ4evtUC2sa1s9xrFyWyAhbMyVhdRHHbMpSVLM4ko22CyA2ohZ",
  "key32": "2KM4XaFTX99fho269gbDC3mTUrV3Z1XbJMP5AQq1Pav1i3PUTx4vqCya3MFmkbPqs9h7maNE63ajERUrTehgKGaz",
  "key33": "424gT6ye1NABDifQCbUiBPfdX5zJdbp5BMNjV3KquEm9sr8Wd6mjfmJQhHKQrPZ2Fee8oereHyXqTT62kYYXWjai",
  "key34": "5XSQ3EP4CRm4oLhaUte8z7cmjvZ5Wfmb7LPvCpH3Aos3i76PpP4S1fqCRrssGDYaQa9RyDEe3aEyciAeCBtB3GEe",
  "key35": "93ZwyViq2ZTPxUKVPHxfrgYKctU3qnnWQkiCJGxwntwQmRPENx7sTzXK6CBooUK8H62VGXw486Zo8eLdiha681E",
  "key36": "mNZWe9SGJNNGeANaH6zjw9CD7t6BVpQNEFnvoXYsbPhuq2xkdMwWA5JfNoH8FWHUHfhDKzFxvBo48gzEFVphMn9",
  "key37": "3L9L3mfGWq71ZLPFxgtULbo4cdu8djxNiNiy81ety2t5p22Gnt3kTSpmt8aXCsGZAoFvTDhgMevbJDsLnwL1HGmr",
  "key38": "5Mu9zifNzLCmBc1zjdRq6XZnr6rBzmowxE99QPK3PN6bXvU4dBYpRug7iqYAxcN8Wf3L6Epf7v8Ga5aFhiPFcjff",
  "key39": "5gWLhfdpVp31fW4NFU9QYwvN6beeEBTj6XRPeLLysrWkEA4jMTjtUCfjj1vQ6G6673PSCnixQHE8uKLumQD5Aryo"
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
