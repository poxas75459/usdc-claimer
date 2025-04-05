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
    "NHcVEDD463T5aFUKsncEZGJA9uLDba9F8dWg7sP4HVG7gfEcnh57xALC7a2w748tqfUZrer5sbjZvMDebbwLCy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t7txAzKYcYsikD2vTjtm154pVGpoEUoDkd1y6z6hKPjpZ4swHfE91UEjXauJwjNvCW78EVPET5YcXo2fCxey74i",
  "key1": "5CyLjq96Kzd6MU8DERw6Cenyr1EeFp7bmWAvUFGM4WYo8xWzTt1MVc617jEKTEgDxNScErSGHzxhvyYPYkS2AQKz",
  "key2": "tyPsRsgEeX7iSjna4cwPztL7ZNNrTkkmcavJnp2ScWGMJyWSgpjCRRXMNFjJQdM4KQgtjh7d1SFUs9wWN8ZqUJh",
  "key3": "4Hif5UNA5SWswU4mAk834XSs9oMoLcffjNWcXqz8Zca2WttzEiaroy4rNN3PMdtNEvT5BuamFM8oRRvLvwqmTa2F",
  "key4": "2bpft41ZJunJ8CCKT9pFm3NJ831va1qkruUW2QhJN2BXJtBMgj8AxDdJHdu1Rn1H6S5Z5dhH3Gy26xDZgZCaMaL3",
  "key5": "4aYdtqDhYs374rrenPUTP4SufHUpHCSuFYKFJPV28zcMRNyDMzgMGJ1qQFn8K8GVARuX9ybE7MRrPD27eVnNBgwj",
  "key6": "46ibiowa6thb4XQ4crf8e9PdWzy1or21vjVGu9tKYvfcyupU3i3cgR9ZBYmZ53HTsWoQ9vUwkvvPE8LxqvzWEQGq",
  "key7": "4LPAB8jDAPD3vyExozJMMTjbvfJRafX3ywSxCKf8tcXzDkC8sNKUjCa1RANHnEAGhBt28dtbVHKsQTDopZjpUq53",
  "key8": "4q8trEWg7Zncy6HvRkGBmgtBiKtsAaiTgLnMvaGbMdyXK1DWF1tXLjW9z6qFu45S62vKK59azCFPsMzY6Efs71kx",
  "key9": "4dYBySxKaCZdfYQHFF9c1QBWg3eW2M7GdM38h32if6L5pjMwR6ZwssVv1Fz7YUmi89vQXevzbsLkvR238DviBuJ5",
  "key10": "w1DDMs6XGfg4XptVB7cbXhfqbFkGkQpUDNBnbbarZHNoGPrUc21UJWx9bJScvZNwyUTg7PbZNjdJG32LqZDk999",
  "key11": "3QogWisf2gt57n2QEZGV5JpvLtyFh9Uzc4GSByRMpXnB24ZjFuoomjD5VZB1BiEjgFQ2TFrwF8EY63GcVoKzdw7f",
  "key12": "5Qrqcxh3rWjBSRnkmq3G4Eehb2dhsgk3pPLZnETJUhDMnuyo2pqpUT1kSxMFqMwmzyrFkotFiRo2CGgJakvabSuW",
  "key13": "3JFjcHtHPEjpzXg3KmUBcqSStfazXnPbUSw2HWSp6rWyWquWje9ZBj8yFmTLNQnDuBmbZUmqzkmBqrjFPMgPmdCD",
  "key14": "LmyeoX1gj3L21FnkQUyGGacdnEAzAP7SjyR8cwgiAE5FbrP4QXR6qHixrXX8uAZe1qSctyfGHu1jx5sFyaAD3ZF",
  "key15": "52CxMMPfR1uGxiFP9Vvx9dZCm4HeouS3wh6uQSqzaNwpE7iBfkqQs6KwfwkTxBWvKzWiVpAjo2VmMhaHehxPxWjK",
  "key16": "4z5HPcfQUiYQPMrBciYEnmSRsU8fjHzdTNG3fcq9WdVJkpVpLxfrMkwTxBTBB5NeCzcACGkn9siMbRjrzKuMvv4r",
  "key17": "3w2dQfzwiqgPMv39y5R5c8MbPjorMsibYHzCzjUrG2WZ5C1VvTJLkQwjQoC3Go4N24jcAcKahU2Cdk4rsYyvsb7c",
  "key18": "2seJKS3R18Uggt1zxt36TvkonPGoJsE9F82xwGN6MiUtkqA7bsYHb9jZ1we58PW31A3nx8thgLhFrcPuj8F8ExBX",
  "key19": "4TvrFmBSrzR9sQQjEJU1ZbUM6CBXYgULihJ8kzUGiqV3xqKepM7cuUxX4Dhy4EZg4mDJ7XpNfT8zEnGV44K87fP7",
  "key20": "3DLrK3DVdeuhEhiXFKyJqFsFoc89FFYdyGk4J1jW1VgyJcbrHfpaWxHMxj8kxFtEiSPuowiemRLS9t8CUJkxvLuW",
  "key21": "3RH5xK4ghyU7RULADaaVybomLeznqEaLwpQcdP7b9xPq3yrk759yn3yceFAR96P9KPNTRifDJHUeXyxQRpfsGG4p",
  "key22": "5BxRwuFtVWqR9JPgm2SPcm7K8XDboRoHwxwTNF6wkpZTh6CfK1vheVv1nWQaDBfBALwPPrabxLD5CvZnodD3NV8Q",
  "key23": "HuWTqwchsPioczUvbL58AmiDfdVh2P5YjkfXvXUakjMWKyBJbbs8SE3z3EzyTVgED4P7tveTycpfbqmeJBqNjW4",
  "key24": "3zKxhNJPoQB2kw8TDPCHG2zyGLqwUGMgmsgHLPzQsHb1VQ83SfiK7Zr3fkBydJg31Ew2erw363QwkPW1WWWchtzd",
  "key25": "3azTpqzqEn5rgFYwBu5sNVHV1UXyg21iHzHTihR6DTATfB9mvp3yWPGEC973dZBoaKWTAqhfykK9rkkwbs9fRK1b",
  "key26": "2DbdihS4MQLEFxgzV1aw2Qhtr7iK7n7442jXDJaFdAqFCofQpqsoVqsS9vnxKomE1ayiw4m23ExAdPuNnt24mRQD",
  "key27": "2zWjdX7xCamizRcDAvMFM5tNcYjHyc1jYPsukEBschjiLZpqDD3pGJXmJeFG7ETth4vjhXaLSayzJXcLBPBvcsqD",
  "key28": "3FS2v8KoVXejXFTsnPfgDX7nkonezWerEAg2YJ68trdvWiNhyDfkiLQxxsFVfYTjyCBqHFPmrYJAPMrg8QjX1t28",
  "key29": "4AewPaWKwDkyx5QfuhxpMBCXWi9vTYf3MoNncy1gBS4R4nJ8yQiA4HsjtNXcEVH9FeREN7URwfq83cErrX1UbYHr",
  "key30": "2g59PSJPC4zKX1p2TZitgnSeQ1ZkhouNX2EJUxbWjY4k5SzW8FDvLMdVhae2jQ1gsu538xNeeXwYjUaCVn6nLEUy",
  "key31": "4YDeAsX4eX8gbnzGDje4tLVq6QwTfxvuSBsxyAjTbJwTmW1BDPC2NnL7K6cBbjtdTimzBmRAfLMKmd2WXZSK6yV9",
  "key32": "2Vnf5nbjF4TpokrdtVqN9QzeXLgMWbV8wwBN61dbpFdgoTAJj27oMYmNWVoXmo16JvKcjXmc9jdXq24eQcCVKWDp",
  "key33": "51KBozkvUBaA93BaRbShMSjeRaQAtG98zriiWsYa1vYbwadhQEXUd4ZUTuMUtTtg65P1Jffh1T3Hsqja8ezdcowo",
  "key34": "5QsGiwxWpMTVE2DLqq2AYmBcbNwi8wFiuyY5WTUvuCP3ye8e9fTUjYHsQVaYAEuWNsYfwzPzaMHpTtMW82DmT5qr"
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
