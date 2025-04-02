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
    "4qdSTWNwdTan5F5PW7wkBD4G5WJCbYnkyqWEJcnDTH9ASHZpd4ur7xgRk8RT2epAKMRPGHVkVzT2pViSmqckN4fN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sLGe9tsagf4kFr6EPojk847YRup8Xxd8EX6g8g4FyqikdFAsj7mgJrAUUAzoY1AuAg5fwZeq7Bu7B3yWfMLKSVh",
  "key1": "21KXjnwkY5U54MeaWRWt8YUM12aX8frqGhngSvW1nBXkqwHHBove8g3E4EqQtC3VMq4d8o9MfSeNYrGQiy8HCe72",
  "key2": "5kpeJxDDGyyg7XvAbZ7BEw46oNAgnqTKDSW5che3SB8aJHtrkxMapz46JJTA8ZvBJtKkWs6WZgqGja4KZYLJ5Vvm",
  "key3": "3i4xtYkNMv2ZgG9w4gqLcTteNXkvTMQkBznRrzA32PqHKC1o5F4Mu1ofehBXzRrjNZeRSYx35CHYpoCig7wg4fFV",
  "key4": "fnuHnRfXZmzwwHTw5Htz5gYNKsg4Mfnm9DHvSp5FhnzpZm44WqFmu1ww3JTkDsjHrXnoGvMZYqJfsVZ48DVxGfW",
  "key5": "5oKxb588RrYisrs8xawg7EaUfJED3pWcxcFWGkRdFaavtoB9ynqSKdRaHmhVNxQfBrbG8wFrqg1JPM4m2UWgzAoX",
  "key6": "4pLM6V4eHYHDinYZZAGLfxdHHVJpoXqQ1uPNV2KZ3aNahbysNrt99jsLHSczuMJ24XWGVmbyBxep8TqHWi2kKokF",
  "key7": "39bE26SezyGiu7RTwszKdjoGVobf9Wh3ZmCPZcshc4MG8aioQycFNnkC1UyicXhCgmz7xXk1FDi4GhBB6oM4cLif",
  "key8": "5LkiGFV36t9uykSZHrn8yfXYNtbMhLk8gtjDE3kAgRSZMHpwRBwaHDCL5FnvAsQq4GomFyuMpjRqGYKf7tewmvk4",
  "key9": "3d3Zz1XzmxtQiGH3qYja78RNonqQKVaW7tKsDE5aJgPrzLFkoV6fZFqhXLyDKe76s6RVxeiabR2aBjj3cGmVyHMr",
  "key10": "nXtkumqbVWDm3VdgXY2BCEjtXdoECduGBM2WcGBfERqRB5n1XGMuKc8nmvYw72zPfbLmCNQcsYTFv7pWMKKGmF8",
  "key11": "4Hiuzrt5B834sLMhypSRWrUDDNHR41VEBJuuZ2CccboDnF2vH3jHDfCRkBt97yctrE5JyENMhiRLmuZYPT7Rk71v",
  "key12": "GAa2tHqG2jZgir5CsitgmGEiwSaXEoVpE73oj5vGRBPCyQoWuHPYfZ77tsZHYbzyoBh4ANC4trUYFVXehdNbQqW",
  "key13": "36xM8aaJrDfmh5X9EUYk4LLYD8hcN177aGmPsUVV41mvR3WKzaG3K3T3oW6NE9pXujeMNhk96zMNoG5H69kntHPr",
  "key14": "8JYnyAcA5Gzmsqw2p1e8kf1xtGkYYmTZ2XPfWTtgs5aVvWH5J4cxgnXHKsRK86exjxHdJN8WR8nrRBY5jkL6ftT",
  "key15": "5Boga3QuDFQuKbh7Nc1qQ18Yoncxt8NNt2n7thGZNyoeMWaCBR3ockcWH4VaUg6WGGFJ4VJwL4GrnG8cfZwMnyca",
  "key16": "4xu8v9WS1TP5sLfNiagWN1CU14sPadjTnP4TWYHzVtS8UZoFWdShW7yQ6b6onrUDGeiNeM5vtct4VDup5XvnZ3RH",
  "key17": "2UFwpZrCRKtKTHw2CfRbYEm9CQzngEufwZ7zCNMSi5tRzzSKFwU2Ejmkvh28P3skYFu8EgzYZWs3vV71QaK9j4Am",
  "key18": "bLHKHJoCUwCCxttyHs918uZNGycmaaFGzisnCQ8kM5WvnStZSKL9yXcriL2An2UtaBU5cR2erCBSToAZnfd77DN",
  "key19": "5oRMCSTWxkWoiJuS8w1oLJZcASQV7Vf4ZGtk91vjFsy2P2XfeuU82qBiGATAyWn3hLK7pkqioHrFfebbJCPc9yb5",
  "key20": "2pLfeGKwtY9c2vJWpSCC8PBTsorX6xpoKCzx7P8wWkbDQzsuhKDBFmpBUTYphXQanSMTAQhHZTgrd9Hzadp1T7hR",
  "key21": "5KyFn8mJfKg17aZuykpBkp4AXtTwsmdPNoedQrSrfwvBPFrDkP32VeP5fr2H9m5T6ASHVCmnnAVoVFpomHfdH2cg",
  "key22": "2W6x2YPcSMt95JPnyiPNG2rmyf4C4Xk9v8tR7N28fTdp5Jb26cRTZoCaRsHnvSaufAm3rAzrvSVMAttPD7NQbjMc",
  "key23": "33dqzJabZ4wkjJHeocWMiVYmxCdJHqZuNGzQV7hL3EUkMBMVjZRzzbkb8MjHdLhgGxWdxd65oNLfJRLdj5VbuHLC",
  "key24": "4pLaeenEWLLZrbbA9xYT7ewiuoxSobHoMYrybTvuoav3gPruwDs1cVtj4vWbqeQNYdBShyQVcTxaFAZv2ohrdMDg",
  "key25": "5G7B6FdXeEkxoD8eH8i25vDrgByrjC811MjdQTV2FoSvL4KWSu8A31ygtoUCuTeR8jfe2i1yPkyBmWUAAMX3NeKV",
  "key26": "24WH9KyRDXRVnLpMJmcMH7CmC8ETF6uYYtvt971b5KNYYq5JVehMhAVGpUiLMt4iHaZ5eMPPRyPk2Nuu2ki2RHnG",
  "key27": "5pjFRVUmXybuPrkaDsoXQMNraNHYrwZKGiZWCgNN5RWE7ACEWh5sssyQfYbrQY9sJyY4FmHsZPaZkqNaM9CvRpJb",
  "key28": "2TWvfphDtvqwSzkNN834nM6uE77bxxT3cASC8EUHkUkWJaTTsbHD6kn7441JXK5uVn4D568RgDQN9er5crbiHLwU",
  "key29": "2TCv9qt11V9aFfZwJ2z75wQwYdBrE46USvrVsS9Jj34KWxZTFDXcbTQjbqkY9ee9fhxYPXt6PBFSifSZAax6BQmi",
  "key30": "33WuY4KP1Sh6wadK9QnAotJpba945QUzkvkFcVfEwDG3tkT5a1hVhwiutAYVVP5f4SkvjnWehPoN9TwFcygTqcN9",
  "key31": "25Vycwr4by3YSefb5ygmPozm1aS91CV2qr4ZCNYeqyfAVv1t6gzwX88gyJ8QHbBu43qdK8994ZPUVNPSuoFiiUTK",
  "key32": "nFraScyKXgJ6SuZYStgNiD3mn6CVi14FokX25DA7c11fo9YL9y6a2k2ySAs6jGePgjiN8mHMsyJUgzJyFx96D2u",
  "key33": "2yCz7qCdPxTuUfEM69pQdHzHLRHGG5FEuowqgX68RWDCEmXjNbUz4nzmnVuGyksKrn4z8CjURp1udU1jNJa11AFm",
  "key34": "2fx8PNZgAFyJy7dBZ1FV37spoKZ8ZwsL85PHeYAXyn76nPBSVGAXrf2DHqf9EUR4Y1kbwxYjGaKayLsMW835pbnW",
  "key35": "4r6QrgnL6nfjDoFYwWyPxC1NtgoRa9MgXewUYw4o7kSykHyMxgDaBH5xd82zRc9JditSRH21pE1MQrmEQSDoVspe",
  "key36": "3jbWJYCfUNWou68MSWBxsbTT9D3SgJ6w7etap5uMzKWCZSAxoFokBCK1Ks9uTgnrYezeFyDbxfRKXAzB7GcmSn8C",
  "key37": "43rAUx2DeFKmJrTAUocTKmsChFcdAkRb7Vrt94PtsZos4d7id8pBjcwhxaYbdwiWkn4qZajYw9NNjndA9JK6jkSx",
  "key38": "GXpNuBnbvWA2MZoUMFqTavxiLcbpvp9R17fkaUrMPuuQA61spdtJ3aeM3zkhafudCfQKf2qYBsPhzum5qH2YC1e",
  "key39": "2hwGNH7wPWPjmsQ3PXF4jdgsacmPuiVXJHxkKC3Ruj22zZCWE5Y3nG2KTdds1PCUAtCABtjhmTXEW1mee1r222YB",
  "key40": "5jFz7ebnVbvUs9tsvQNygEi7kmPJaX635aQhPWtm4xjsdtSsQYE7cqvWXyvmMEx2BdAssZ8HrxVSnmmK7HTVYH7R",
  "key41": "5cntnfzJ8J7X1TET7NRUL5LzYdhAf681M4PBdmU5jGjRZWQzWHyshLy55YJtZUKP9hAf4dUsWJfHVfdsq3oMA68o",
  "key42": "3xtSsBbALbKa8HV2QWFDU2mSmsQr7BndJcneXKGbeP6B2dy7uHZgULSABjV5cW9DHbWqYXZcTEsuhsWpGLduMCCG",
  "key43": "5G9oJN2QPsESVdMUABoZQHtjTgEdZmSHh2QFZzHHws9zxCN6WC1V8KFKUC2yi5bhojJQeNLY53JkbSLFDdtAkG2L",
  "key44": "5dAk1ubzHQmydvHvwiMpybgu8pczQhVxG9yWjmXD9xhjxFpojrGPRN5unmJ654jVaWJvdFjqNDWSkY5HWpgYMXjQ",
  "key45": "4jUEFXVpLc7dns2ZzjkvW57KwdjAv1MN61boXbxnKfAASS4LbvizGkapG1yWTao8AgjkEBta8YbWfunARxKunAxJ"
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
