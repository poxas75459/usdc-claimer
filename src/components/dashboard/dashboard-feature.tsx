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
    "2xAai5RGtKNXWr2arkUCAkNdbRv8o7mABoms287ukdBQNCgu57xmcdrzvWwhosr3Myx7tUY9W5XtG8nJsDVLcYpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QPPSX98uZj95C9Cng4DvnBYdNCXMmsEdtyPq2HqYTrCK3T7nQMQDVpssct1vHeFS5dNJBuDDst5opQ18EUrJGeQ",
  "key1": "32312fCpBsjw9y7RpKJDnUqDQAJ4PHC3yjPhuhSB6BbAKPC7McnuXuDvjs6jEi3EX2s7YbYLqW3zBxXhKydnz43v",
  "key2": "5RB9Emnuctjwd12s4xzJG6XUnEZTdY8cSnvsieMB7uMhFnBrvfaYSm59D2tMTbENXD9AzQMWKRuqtX5b7gTxsHSh",
  "key3": "4gNDj6GqrrPUGMUJrYu7SbbngA4B6Uhq6wqb7YwLnGXkrEyDtc2fbiUv8fiotYcEJKHxKzaCW1LsZKGFdgZeLbUR",
  "key4": "2JhB5uEjBH4zvr6dgtMHnTSx88ZpoTiRS4CKmWeDkdaWY5sKWFxfojy3p3MtwgeUVV3CyD6pnknhGWps79J4pQHL",
  "key5": "2psk1kGmaH3DcZXAXhZq3WcKy8JMuKVLn6zThzWu1iYXaufAXsQXUwyTqzH6PX9e3xThYAT2jiZ8tFbnCE86ZUqa",
  "key6": "4B7kuMczPhBHQ2YGsYE8YpqnBvoS5tY5uMWwmREfFVc1rk34wgpC8NuiRgEz4zTCVvt8HyJh6fVRZo75PvXgwqCZ",
  "key7": "3ik2HHTqNtnPKoNN439P4LckHFf4zzqHABZLTJcXuxqTMpfGNotcjxJJKSdvLpQtx3U4SPT5wcWjpYyiLSJTcjyx",
  "key8": "2s5wwbu6GcQcw1s1zcYfG46rDj6Lmz5EyQCs7qU8uctxYUPzGwAUxnXxLMxxCL3JEYnGnWsXkvioGBVyaeV3xQ96",
  "key9": "2cE5TqGALKk1S2WPBprGnz3QDMUmqYUE16mN3Hd9tvan1pk6s9X3CLLRtRCL1EMzs2LEqvdTFcfUyRJaS3VM6WmM",
  "key10": "2633ABpACRAHuRB7BoQZU2mrkgTddArngDE6Lyii13kgegXnVRqyDtWJHBFrh9RodTcPFkMuUicpwYwPCnMpM8L8",
  "key11": "2H5Jav5xdqV6W6PbJfuwfkBicqZw6ZaGM8daNoCy3unjjCgdF1VEEvm5p516vhT4SCf2g9KaRXHySPZxGfkm8AiL",
  "key12": "3mkHQU9yEeu4UTFhgGRzJzEvcK6kP3FRqVYBweDRpNSpD6Vae56TBTtoSNydqy7Zx3NPhQ8fh9YvD6sjshtumeP2",
  "key13": "YQa3NRiJfewpMuhmvWNiKhJDfAK7SL87n43uSVydQD2jmLTg2Ex2xr6GV2rmCm4d5BHkFgGGr9pt51bTKrC5cw7",
  "key14": "91wgNup5cM9Ts4TSAYzyZz8PBQpWy8TKyDyaJknj5wBbhqypYJbF6Ch1D22StVZyoAkRbhWjYtN83zSqoFJkHgk",
  "key15": "KuSQTLzGuaMQX891kmLyFg4DJpFPzgimbRbGp3WCb8eLEP8SLDxDLCXt6rHdPj7eDUmcZqxhunC7psQqcsHpCZp",
  "key16": "2DgQvR6jTyQ5EpL8QMupLg83szhLtjnWXRXgxwCfknWsfLYUYza72KbsJpTpgAjqkcgwvaAcsiJfU5EpzYz4CG6r",
  "key17": "YuJ3oGDMXxme1dhdiyNchHEuSQAfuyCkESYKQUpHEUmrvQm5pKnS1Z1GRa7RXYrTu2TraQNVYWYW2oEurJCvjnv",
  "key18": "3vJMvnhvdeWqHBVQtPmSt7pAbQcPJk5iBE16MwniKsR5ng5JEo43BVercDPgwxjDL8obs1sFZtv7P2EvjvCsufRj",
  "key19": "2MnaPjgVGhKo3PKL2NcWpfvYKhvfSexedHHc2u9JFv6yV1KMjRWpkHkEGAVd4pMrTBLdDDNA29mfQHR2xPvZJHih",
  "key20": "GRpseu7U9QaTdm8W5Gx2V1ngAzRCqU2QRJVvotg7JLj3Z1u9nPQL8maWYUw9eWfSBDrqSLXF8t2qFKdCPYzu4f8",
  "key21": "48EH3Yb1HupQTSgwhNnybKZk39rcv85FX89wB4ot9YXFjDkR6FuTuSYo9wH3Fc9qUXZ82zQohLNPeWxVjktvLYaC",
  "key22": "4qQiK26VTjqcJJb6QrFpHMQTzxqTujKFv6h7PkMRDkYEsfAwnkGV3RbvAU8rfYihU7WrDwDT873JJHkxTuoA4oFu",
  "key23": "3VCPwqpkpUfSqMsedFNb3uPpAcgnuWNoagfGqg8dgyLXCw1WZyDBVJYMqjY3wPLovtKnRAuR3GbH5CcMGMJGeQBz",
  "key24": "577ssd9tmQwVN9Gj2L9QXLH2PTh9nVXLWiVuv22kpA25BarZfsGuhPaC3n6SYzn7kmAXctpKrUSNHHL7CMBxw23J",
  "key25": "4J4BChJm4wRUMFs177zSpmyrWkWFHAjKEBGqmaPEwhBPWyacedFDepEt8A1EivzMg3E8zX68q9tEaPFmRo4RutSn",
  "key26": "3XhC8Vh2GHPSS1StASVmFyhXPqzN85pPtBCpRYqP3R8yEuTFXeV6yiCWZsemTAQ9oMWukkeM7WwwKMoXQjLeMZYq",
  "key27": "8FSKD785Q2UBNVdR6Ch2BeCqm475woKJa19xSxGycPjx5Fo2UqbHty87hb6HWE52T34xN6FZsdq7tGaYpdj4h8u",
  "key28": "4rh2GKgVoTizC7FBx1gF9BNcEtH2sUndiLgdtPSs929bB5HSewoHG8qGgK3W7RUfZ2e2KLyC51CTdbUdVpXKX6Uf",
  "key29": "4qaUkDZkvQzAekQtL9YEutX6wR9SSndwGxiRkcsFX1g5ir9RMihweweqTez84gXJSL6bAphfmzispHB4Hq53WAq7",
  "key30": "2doBtckiDdjjfjdvXo43S4i3TAmJPUpGFn65TAs2Ug1QzYoUwQSjS21hdW1zBYorNaDKnV5MeNFf4nzcbHHJu5Nf",
  "key31": "3HmFkdgRt5EXZX4QBfnhYz4Zrhb5N43yfZm7aGEqhGirMEGJSuKSa9wG53PYdCTzVVeW764CBRbhJoToQ3GLRikB",
  "key32": "53rYHTd4NBu9Vxs3tsaSAMX8M8Zqfg2529CDPef297U3qH1au2xaE76ocn7fJsc1cVmyupDnphmSu1MtKVxthsq7",
  "key33": "4ecrh3pK95y5HbCQVd5oJXKB5JjTnvtmoXSb4TKffxqWZFkXEHXJd6qhoixsZ9q7vx67kSXVadymq1CdLeHjGH51",
  "key34": "43QCHp75e91UHQx9QbkJH6vsw6W9Boenw1fEsjX2TYpLErxNDvF8GoKwNSKej61X992MUCd8FPDTjHPdvxMRMkWx"
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
