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
    "JvfA9qnbRBkSaLm4ouqbFsWSqWmwmjvuFvEau3HAu8BfT6SDTAeCdXAdzUw878Eip9x14yg2Ry4bhtbKDiHzF1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AVFtKgV5Evg7d3rPtDhBbutBR4XSGu19eGQzvmUEogTgkEyKhH3GZoSRCxT1yhJTTAEnuUH487ZKVfvWCZ7JRHC",
  "key1": "65oQ9LzcYzrN6pvj9MWfba5YJ6sYasKu5Ug3APUBRpVBW1Q7JtVk4qEtvetFoAxY7C9dTfZgnwbaMLKCacZBvHny",
  "key2": "64pDcPZaC5Av5eLt5yvHZnxaouVgvvoaNkvAakSRPpFauvxJT9iq8VnETHxoSDwxJoURhw6SRwiNFvN9FHpsFAFT",
  "key3": "41QdBwjWSg61etbXfgypy24h6CvaRejPACqbW29QSxGYYbP7BHgCL9v2MSRSZJXkB7gTiVa6kQCD7kdR5y5tFgLV",
  "key4": "5A1eU81RiU74UsJ8Cv9ScoXLSzhXYmMXwFwUTXEQBvvXGG7J2jDtGvjeBoCGDfzkjXVjNJs99GpPXzoSXpWF1TTe",
  "key5": "2nuDoyCa652QM3KGwpavoCETy3j7y9UT59eeCZmuoZw5KrJcpuJq5rDu68KorKgFS5xgmVeXd2eDNWhtycCULV2F",
  "key6": "2p1kg5qe6vcM5cR2CKVmA3ctzpbEFPaxkD7Ypt5dBw7PunAPB52V7LUnx8vqSuB2VToWYSYhqgBFaCBzJKemqNqF",
  "key7": "2fyt1EegCuWQbPCYdWTGWkSf2vKSomszYn27tg3PUHkhn6XLvvyf8Ttm3pRgfBhMcFjTFx8ZV5kbAobjJDjpYfbQ",
  "key8": "63GxzSqHGFnUvUgdWtqgYk2dAboKGLjX7u3MvX5w8vstDJUxevvvbNeb7mLwfcVmsvndQtEacZeWTtxicy8369TU",
  "key9": "2BKeJrG6WSqxJyShyFsXe66cP8gYer8YXKZYJisKXw45g5QXfMEYzcouupFNYib25wYL3H3kr1Fj4rN9x1iAZUt7",
  "key10": "65Wm5y4cx9yk3xAy4tC9vm5wps1EEGJhtokYLwNcriiCKHSob3ziSRxrSFTipE4ZVmFVQLXArYFVXYnH689bDXiy",
  "key11": "YNQEV8BfJE5S86wJ66sefDvkQ3ty2aB4ZUspWpFLFdCuQgvNRBWGPrxjTDEHJMyrmn1wjxTf8t2KyaBeLGVVBrK",
  "key12": "2h5aqHph7cZhFFxCZaAodcsTzKYwTRmddd4G7QgcPam2RLNMfUg6cWmEv1v9aMVKF1hrc1ZXuaaFEDPHHPvwTRbF",
  "key13": "2EcdeA7Gac4Ur4SrCpEeqHD72sEKF1H3dLVKjL2dwrVEJv94gB6TiugJLcLvYkKcTnBUuugwH7kdVhf5DsEiAhPK",
  "key14": "4PsisHRzxQt92sqcXDnPaoLN8nfcSvTPN2EQxj71kjGt7DGt4hcvQytf7jovhHRkSJaArXybFE7YGaaJAAXGLXMk",
  "key15": "3cc2UHhwf2uLrJAkdefprzbhpfxygYYuaJEeCMhHZ8xXqg2S9tsFjAcvBgSmib34iLLCyMuwK3dvqy9nuuaDuj8s",
  "key16": "57VVBBKYZ6ZK4FuGCtS3XM4v784UXf1k4Bz7NYD1MuzfnoDiVqKNk5XvRkuSG3sHFnfdRCnkUsgppVi86tUZpcLS",
  "key17": "4FVu4NqQzffpQm6yqV19jAEE1fQbX9xVGgQyXDgNf3sL3RwSxCGUW43fwJQ6QfnAE3jV66H3bCs9SH3nqFoA4tJn",
  "key18": "5kyRUiaZ5zUesGDbB1TAr9ysS5MuSY49pJvYZ35n5s5BhbKcduY3SBxdHg2kwrjrcMFHJ6NZF7G1NyT2CVqnWaDD",
  "key19": "5L24PwKthwY4htLZiVFTtGGS4LkCNHFeQLxDTiR6kyZJu1PZEj7cQWRR3UebmAn7TFEf6jFhKK9GzDpWjHqAjGv5",
  "key20": "2Xk4KKt3UrzybkNZnLLtFRnGyd7pC44GRvkq1SsSe1qbXGEBLcteWBBT7uMvQRRGqrhoEcfNw7SmmQETCj9UyAPj",
  "key21": "5bhf2gawWwpU7N738Pa7XiZ8KUFMMcESGe9o8GTK28j6fssEvCbXU8dKw97aP6oDkpREScwhVTZr95jwW64PsyRV",
  "key22": "k2NDMf3cTZwQ7nUx81CuJ3DFsf2Vf7BEhEdDFR1hfvfYxxE3m9v4Zd5FyKEqkxdotmNpTPDae3Cwziynh4qZWA4",
  "key23": "5HE8zXLCMhSZqoGNTd246HT5XMYYFtk3S16XjgRnbLLZ5S1xHjMd4Wqkrr6tgcLo3r7JJJLzw7MvghJWTGrW463G",
  "key24": "2zPmsWPLwE1K8hpMDufWz1XGkb3rL4RJ61jdkBY3jPf2HEvE2TXRWHN9mR57BP3GdQ1QGuSqhzh3z79biqk4ouyC"
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
