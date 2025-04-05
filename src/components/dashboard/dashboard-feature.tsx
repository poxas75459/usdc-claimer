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
    "428y7EEJoKvhXvN66qzxqRNvQaDVcUMQnkscKDyQMP3wYdBWRaHCvTFv1k1TAXZ4ubu3UGvcz4A4iY9jRuyCZbyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aqe9i1B6w6DymDVrp7TDgJTXs7ZBn7qen6d4ANpiNF1wmqa1XttMVxKJ3eoUQ3r8TYariiZ5ob2KvZc4vcaBeRy",
  "key1": "64Z5pcd36FfTTd45ComLsDq1VvocLUQwWYjXEgD68zUSAs8koFR1e4cfdCVNfbGRzoSGM8iyS8hA2vHajvFUHs4C",
  "key2": "3wCd8bCmCHBDB8o2fKceYrpxkWPf9NW2PienzVyVkVdQYAeR1S2qcdPrLHMCpMavRobEjiwZr6c3ixMiNpSjpEy7",
  "key3": "4PRaT3JYYTne5LbAuUFDCz4ZUKUTQSTx5hL4v7DYZTkyAfnFkTvZUgJ4dJd5yMcpriTXxZY1A9oPTCyGHGwUz7BK",
  "key4": "2nRTp7YR97rbEyQ5hsTcQeSfXCw7bH6gnydWxfy1U5SvoR5ZMN7Hn1nJzSCgm9kdHMfeewp2Xa6Q6wBJBTq6ujVr",
  "key5": "5Masunzh87gG814udDD1fnvYTQSA8kcwGkV2cZ3vpRX9TGoyJ5myvGqXyba2YKkZSrp2iP59KvAmpCVYs2rUcqwY",
  "key6": "2zppdPX62LPBN9r7XTBaF8Z3ApJxhKQL7WEEChgWgNvM1fKvX1j8rAwhoUPtEQXGdfvukWU1ZUQNjFswg9E3BSHa",
  "key7": "2WjXoAC8Qk1u2rdvuM1wHCctxcjxVBgR8fJMDyYrKhLyk5bStQ4pfrVx2dMU5diDyRSVCBMr77TbKPYZaP9fkb3j",
  "key8": "2wK916ZTx59Yv1ocRjzmkrnmSQtXzekMChpQn2aUcLSmb6w8W7ixw96mYwAhW6LWLiJn9229WsSGgGnThCgyqGxh",
  "key9": "1BHBs6HzmLFfWNVdfaWXSyfdGK1FyQ4GDBJGtxubXQUXA18tQrEV4Uqgzagf1CNDL9S5MQRjVP3gA1oAfC7a7yv",
  "key10": "25QZzRPJpyY8dndBSCx6RodYMkCKWhLwm88pQ2Q18Zf8rgmNs2xjwm4UVfTrzZzYFKHTWxwcNSddVEPSWEMhmnyy",
  "key11": "PpnnvMA52pcb3Y2vyMzMfyKiZ3jEaWc1cuB22XAgWFaURUhA7B2eefXzXcyXZDZmE63uVFiRVvh99dLv8tsGE2D",
  "key12": "3tnacxfFwyZ6YYdZ3PLoTFwkk45NQ2GQWvEXzfN3P1budPg8bX4CaUXAZp2JvzpU68fy48nSyU8HcDT8TRJVVkFQ",
  "key13": "354QDVzhj85uXaN7Vwx4UtFpVrqdGzycj3fbdSWiXpUowS5CxC6MXKoeBpBKaojJ2NjPxZuWXTsEN6MwayQB3aR9",
  "key14": "dSgS1wSTkHjfVJ9ujj1CnBKSGRJSJSj7fWTBuT29TgyqHcxNLfhDQ92wuDLDRLBcshTpft4Zjbyjmu6PYajQ1T4",
  "key15": "4zY8AD9zBgo1748NFdWFHXWJRG9oqmVCcRjCY1J3xE5JAGxPVKVJDiXZpK4Y6uNbH1RzUUCLfgMra3UJFzYBCjTH",
  "key16": "2e7QHoXyneqwCyHYrVptZbG79eiBoxFQXB85dKd5wWjRavcLF7raGDNTq2tiP4dWD6t8Ym49HLSaE6M4w9NVuM9w",
  "key17": "55kQBV3yXemn4a84o9fF21RQ3gMqzKJR3Z98ZNTzDm7AGTkoBDeAerXHDvAAcRMCFLUSnWrRTSS4jZEUBJ8tHpPr",
  "key18": "2uUhwZ2k37wgxJgxA6rfNECGjvQ5cLLQLhGtybZyFCeQ2LAWdz7go7GBqPJ7SHFPmWLhxMTh1H9TGUTDM16PaN5Z",
  "key19": "TW6Cw6oStB5whns6tyd8317jfQwFAsrcRcDBXi1bDSgtLtTHHgFVaPmgsyQbRYjJwWsg1KfVnm8RUu94V5Fgvpe",
  "key20": "2ohW5Z7Bo7Y6WbMdZeJJuqJvWg8VUxY4jzxR3g1m6jgcArTZk899CzXfC3WT8Q1nhHpnfu5oeNyLjJ57hpxbJSNa",
  "key21": "3yTxuuDwFnEMuMwTPCCTVPHmhJ1nCGRcCVrbHGgEWcjBhhX8Ckak5FtbmiJY8XLu3oSxNkRrYDPvVqeLiitXcGs3",
  "key22": "5T23TKVELnz6FhWQKsh7ccBE711bjmLQRyN7GMBM8bcjSP4cHCWfPBRW6EhFXferWyKiPY294UpUp8YQ24bxniEu",
  "key23": "1m6mExfszpt3mtfLMQne7tK5PP1aLMwEhKUHwe4CYjgbYW26TpPvx2xD5KrbVrFxANJb5Wb7rtHNdfEJkMLACEr",
  "key24": "2j2Kig29KZrGVotQijB8SfhNrH1BT7Yp4eVnHwfcxCgXh91wbFszabxVoFWPiD8tmYpCT6ZSD2Hpamok5oZ3rxDS",
  "key25": "5CvEpZWDDDqjVXMUnZEcbpgMRPZCD5GHQMTE7cKbq5wQCUvDXLMBG55RsCE3YMyD1VvCXFJ5PnrdkUCq5yS9p1SZ",
  "key26": "2LEpZ23RMxqjkfHPzBxeCBzGK2d3iJynkmRvdVM3rtzC5Li5p8s5vXM748aC51wsPkEbip8X6XbUanZnT95RBDnX",
  "key27": "2dhE9jxj6WpHNpwpymepyp74fagxm7oHiQzLqvRC5SQD6eqAv23ArFjijaVvsJJFesfne2nvMmSfuKBi7BrKdPBk",
  "key28": "3Lm12kqjGVUXoBCx2ycxYae163ofAHQPPCD8UzHZBrFNM5sqPnktkYzuJwMbbG9sgVNkzY4fQCcMAPJiqpABv8ch",
  "key29": "5Q6acxi54eAGkz5i2CntN43Lk7YivQRZj39sZLXFbNSZxHR8TMQTyQfbAbLEpBFvcvp3WGmPhJ8fNdaKsXqsTKFC",
  "key30": "7Ebk3yBJLdCxdCvQ16yYR3dHLYANyoqEC3PAeNw6sJ7iMTwATTxafuXzs4Ac8oyBKGJXWsperjaeiAcRK8WZeKf",
  "key31": "3NnmGWDuV6TipEG6vfdVjgsKcpSh3VCPj9DtY4FZChsnDTUiSqDSbWrior4UHPvuovpngwqPdPHn1qWE7Nc9TX1a",
  "key32": "55awZJhjynKH3QFD6iB9TuMgSo1A8n6cXK36WdCX21dMpM8JMYt2FdLePo76xWAvKfRZD492njNji7BEuXzRLayz",
  "key33": "4vCZuwbRXC4NU2GU2SB4LnwE2gvMfXfgGHRu5HL8reswcYTnAcax5X2PxZzzoiuEHAHXPLrV9d964ebjzkAq5Rgg",
  "key34": "5se2PJjf7E1YXp6dUCjLcVg8ZyvSeuf4poU4GZdtWDfYwR6qhECezgdJGHbSM5J8FFuoGCQoW2kM7mBnew9HaWQZ",
  "key35": "27NaJ2umEURLMcxBPiwu3hJm9Ay8b7eWjy6YBSc1FtEPjsVTfZ3ZBrANhutnSWiXgYzEBRjDzVyv8YPvPwiaSrej",
  "key36": "daCz2d6hPXw7joA5EEcp1mPpxQgpxme7CGMEXx8MNY68eEPQqxagaxuaCxLJ5xspAv9S3wL4UzgXDdW9oTWZBZh",
  "key37": "4ZtxY7Pjrx517sQvLUJud152GtBShUCD43xZqjPZ2ycVJq7zBzWsgQLbD6n5X6h9x9XoscphDh97Nyp9MGQbrLoh",
  "key38": "4TN6bsxV3tcumZLaJojM9PHk58ctN9uu3uKr6Mho7eBCZ6DfnLTUMwrW7ZzR122hico2ruQpbWwLebEDs8Q8i2UR",
  "key39": "2jTysJfhssqfmhqWUuVaxZJQj21EHmfvX1Uymk895gRH1XEMs6A2cQm15A6jXxSv1FKQun4pp2WxYwCgDm1JsuJ6",
  "key40": "wimRDoHQZBN7MDScKisFtiaiCkJLVpgtjgXAfmwY2rfcM4XtWediuv9WTmLc95Sc7rn4LqtUFkpzQ1LyjrSCKE6",
  "key41": "3po13ockRL5mdrD7v3Fpsp2sTCoitEiPAQYDW9D4CSxg3gdy73nenj5HiTM8eaJd2wj4frN64xCm1NmAbkjqraFg",
  "key42": "3aAwwueD428d5hX27Uok8XJHWArvmnQQYV2i55AU9F1haRgpXAHNw4ZSRbhVYnuMT51RMfamG1xDeSqG3KvoBqYf",
  "key43": "2xw9dtPBHqUdmiXcZYaneD5bsAukqCB7gfPjsKVjpHs54VFfryVWAeK42DjdTFG4zpifNnfbSAaoT4bpGZtkUpQ4",
  "key44": "3suhqC6LUgst4vz1voDkHBXnhEvn8e3Dh5SM2w7vBDp5BY2nUG1g7AzxHw9JqGPk7hoyAhmpZ5CySBBndjsKxyJp"
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
