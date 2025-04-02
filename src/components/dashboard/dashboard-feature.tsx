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
    "5PSzmVSL2vo5Koo8Xv1yPU9j3wX11VV3dTvEmUbik71KpT25aaVik7b16hFsPJjyCrDQ76LSNQ39jcX3EFHNUMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vWLxBWnCrASP41npQgGs3LRL9v2yJEfTrNYnsR2j7xiFbVqu9fdk4YtcLm4voiQfMXFfw75xzbeWrmZFWaQEeu6",
  "key1": "5NJHThhWwBm4zFJVYa1K4CyZWHYAW6wVTKwTaZgTKt8jhN2KK6Ke34iDcJKm5Hkk7KU1pLAHttTbdxSkJUJwzQxA",
  "key2": "4ZtWfcbXz9mLYNM9WYEHgnf91FFFhFPPNVGUtbFmCU1qDLbCsDjgWLxTjiiTGtGN2mD5ZK2Q3ccaM9zLBswkJ5t",
  "key3": "5vL1MCTeg7E29aQWMS8sTvmq3awoRdcdJnvB3NL8Cr1Qm927NF9bimVfdUNmivaZRcjf5CU8Hn3PM98A575HkmMK",
  "key4": "57GApk6nmdjkJGwiAKzomVzrFxnQ187HHeRRJkbZsM8Ws8Prg8mCB75gnt5yuFnCqbsqVsUeURbdq3pyRwzBspmp",
  "key5": "Fc87akp7Pd2xNKSkp7MU2uDLZE4hF9oNP72K8jzfvurP8jojfVVcwGuW4ZYQwfo9XTrsYT2f9EtUQwHsvgb34tm",
  "key6": "4hE95YjsMkgykAxAU1wZaJWZZKHA52dDLs4pRFpFwqiHyo7oYCPE8Ztck1oAhBtCBhnnxjVm2zFYqZWUxtVnqedd",
  "key7": "2GVDFgFeLDoEhNxqVPvzLdC9CnwYhWA6nvVbrYk8QTpUW9rkBeurHeGJF4hLAVcFjeALu5dZLGPCkKKoBmGejwaG",
  "key8": "4KXmaEEB8YTrXwLCATYabaZvk7MktUD9qVVzgXmvGH9SiYpeqf9wDP3dkiSeKByvFJLJGDS7Q6qmvkfSvwkpTy3p",
  "key9": "4N9BsCL6NUiXoqBccjtf41K5FpRNELsYpB4ut6hfjhgT7vU3iiGksTj9TbSgaGhJZTsw72J86L3NYpDDRUGxWHmS",
  "key10": "ywRjTQXNcKG7WWagfhczuTymoSD6aSFNm9GjLgjJuzt6nQcp3mNFeNQoSxn1shjnchg7s24HZAY6x1x8ujuvX1S",
  "key11": "3VebSEb8ARfwSXtvm42hVEGqGCvXkZyZuUCtqwBX9wMBfm2myR5P73ahpjkivCZ7giPUtgk51XXJzkjWxdRTYnv1",
  "key12": "2gCSHH6rcW4Xq65ZzAoUkEKQq8edfbs1RxjB8q2J7mUn9oKqLuTFvqXqStsYoYHYPN2mLeGRuop7FDGjHhnygCmZ",
  "key13": "3WNTYK4K8AGVuSU33wiQXth87mHqPK4RxHH2oipWCYVWiMDybzVSKNidi1ZtJe5ruQHMode3PBphURynfznnYA6U",
  "key14": "hW9N97G6dkUt7LmzU3f7ZPFpH5NdwG5v1rcssX9AVuytcYV5x6WLUPyF6HLpEPQAaVzbVcBsQACtuCofojXPxFH",
  "key15": "KxDeu3pcSzNtVZSbawErhGQmpo9SDsqPhZjARkdDMAUYtEMH1MBSeXAVFh8g7ipmP7k2wo1TpnNzMs8K1MpcVr2",
  "key16": "4FDm75QgKb4neBRjB56oDyNDUHLmSNtjVSS6JZWrKNp4i5y99tym3toxTT5EzgUiFbATvjbNoVfekRqVzBPQ5b2D",
  "key17": "3MtemNDPGewrvUNC2JC6HMJrMBPYLCFtGYjXWNT2Raz9mFAN7zk6Th8oSEnxgvxHZQ48CUbwFHx67rSApdLrbQZz",
  "key18": "3v2ZWRBYEV16Xv4g7K2X3Y6CwE3WmA1Vp4VGFeNvC1GgWwW74e7bVG7F3XUDr112uZs54eUHdgCAjuLsqTYD86vm",
  "key19": "4CGrCMXB2qTathCmv7K1Q6VJfuknfVeR9i3p1JVScbesCcCQD33rjswgVsPa7MJchFJ8BsdHxXuP9oaANWNkoB55",
  "key20": "SrxmThKAEeUHJ5WXiLWkedhDqdFoG6vSv1Y2DztHs15JQqf81norpN121HXUixG6H3wj9mP1Lmk2rZJp1immqiL",
  "key21": "37vR7LjFzPrRo57aSpZXyCuxzQ7fXbpYt8T9TyBNGmfjNN55JdoobY4UpJYwuTRyubF3WACjAHWRRbREgGF8cn7q",
  "key22": "4F5cZCWA5oygVHb5eidseo1WTPanfuG6JZpSbrgs8SGT5gYrRfS9qaDnxdQaWvNkzgxUJr6BN3CPk4FCo2piRwjD",
  "key23": "faAh7iLh54RZ3yFHmtjER8ryKQsJSy3jdbRL3SNGnPam47veEz7TBemKRgDTAbF2dPB8edmdHQ8rHRphDcxLY3f",
  "key24": "vksTvioSoG92sF9UEikjcd1iciLqKWMLQSSgh9oCajpRgH1KPYdDFu2MpQF2xnZc68c9P7PgTAFEkF1ZZy5jpAi",
  "key25": "5QfhAzyQrjYkncyEczGQqWvN2dzcM7wfS2Mtzo43BSEEhNqUqpLbddPSFps3eJwJ77qx4P4CAuFgbPyocLw4GU7F",
  "key26": "4cNoZjQC2t34wFahQoxNEfEL8MqVtcqJ1yoFTT7RymGfS18uycgvGkfCb5WtimEtaSoCt1BChQddeVSB3L6qcXhQ",
  "key27": "2A5zR46GpvM6DotnUj2kQYycpsxyKCMHygMRWUaq4ncWjaZ2KCQBLj5RmAXoWHEn9pSnrXTnutXvMnQxtcbG8DVS",
  "key28": "3KLRmzkLd6vRjmEgfcMViPJ9FAi3Ls6nDVUnYMXER79Ehjeh5GFvzU66ZY2odYLMR9r8irX6ee8ip1UtCY1PBezP",
  "key29": "5KPENK8jCeHHMYQ4x3rMTwCwExfaH1AhBcfKj5h5W9JaxDDjp1A1iKHvQZ5ku9YCNDsXVA41vfqPwa12uhHcXMzc",
  "key30": "2iNkuYwT1oLfubeBDogPFXYj59fc8qtfgyEvBc2kQRBadbqFZ8M2A1hksaJitTZZUPkTDyA8XGNpPRJvSkoqemMm",
  "key31": "3MwjSd1ZMALExZzMhd45ufhE6et7ByLUJetKdSss4YypvT6cq1eDfUYUTLJJUi7EU6Jk9GZg3CrAAZQcopARE2kz",
  "key32": "2tXC9fYUrNYWzXwr9GBgdcaYfNBg9TARJQMTvJNbunaM7hSt63KNJcQP789af1D8mfmM7pUiZSYuRHqrQgde4oue"
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
