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
    "3vAhoTqwJbctpfTdwDTSqx5F4RjrjQ9cPXA8JkaJXH6g3rytgMBnwpgA531vtixRS8bsC5Nau2bL4wVZ2TLk8r16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ek2UUnG1MQ4JfFc9ne8nRgUzYzai7C9Z2cpzAb1np9NnJDXyPyq3Z1cxKai3CaBemFi9nz7yHFmf7Cjc2NTzy2t",
  "key1": "5ygL3bR8sBqGkGhsVHwA8YHHWDXVNKuTpiw7EWNSMpLJ92bFT99daKFTkMi8jPUcB3buQnxdSB4ZC78poWHzF2sA",
  "key2": "3dfNxjoMTdEhBkPR4cXypcFXGjmbpu2Rw3verBRUwVPw7gTXnddE7wGfN5DDUbu3K53gsn97WTK6K1gAHLUZT99v",
  "key3": "2Wp7TQq15XarWJ2ycr5dhK5AoHRie1qxcWGzj83tTh3GfAx99qC2RoKM3oG1p8v8xxTfvc2R6gAQgdYfVkHnhTq8",
  "key4": "3m48HYAB4y6Ps8BUZVgVPSYiuv3pXyVTCbcoPLU2hoSfZ1BBX5YxfCcLqYKN4c7BSP4Dr4K37sRq6kce3s9LYbW4",
  "key5": "EKtQ1VxwkBev6zE8oF4AreLXCrjAec6bqUioCCDju9htV3T3gNGKAeft2WvokaupxgQnpVqwNTYdHQy9EGkUGuQ",
  "key6": "63S34wvzJRUyrDTBxifENZSERK2DHGpVpJiTYqL2MYs2yrvnxjFDisp5tsv9guLcixrQAHSPjWLo173ccaBX7CX8",
  "key7": "yhC3w1MrPG5EA7fXFcmE6m2wEzcij1gUxb2LK875DBXhqyjAHExkYqdEjPEN45CPXMYYyBrrTAbMDbLm5bf4oDg",
  "key8": "6qTA331kHZk8bxjmazAxuNiDvQJKUL2DxJvX2ctCZBhho3budhmTs6cK7tKgFyHU1fQKFh65Yh84Bkty8QfetJB",
  "key9": "cUJf6MZjnCKgjcueZCaFZBWff4dtZsNofABrTZi4eCpPgDSddH7AVHsKDQZv9183w8y2YsRihvMyVXY98xVfzGg",
  "key10": "2qxL6xHZ6tfMDXHJpgBtdrYGwyukpksRgiSD3fCz5T1mNZoUMZUeWhLgSbx5XprugdWfwKgnm9577dcmvTezH6Cx",
  "key11": "Wx24Fty3poYsebNSPvKASPtDppphZnqLqCCQgdYjKQauixxtU5nCWUXcj2uB8zsoNfMxUfxVKAUDwreRD6avywW",
  "key12": "5EFzKnpVRbTRxcC2Eoq7sxEPP1XZPcJGfJK1JRJhGuvi1jGj9jaVr3sq8amLcyE93G9dUUt5PWdsPcmQKeoajTSv",
  "key13": "25QjqEwym1FtP7VHPJQViuZXDCcPEfjaRUPvNf8tRdj5U6GQgeACZUC4ZFJ1VfLTq5XpR63VA5cY17QGcB9hirwy",
  "key14": "4VFdKXNGvsEGSBpmz9wALqzHbQX7HXQ9nLReUM6vg4KcrFs8xDaSB5dXs5VEp5kL3yid2RpArbZwNjQD4iHfCQqs",
  "key15": "22ccFwTKGEjBaCEC3Bxta1tj7wzmLg1C5wBHFGKpbmzBkiK8FptLP93s2jNsJepa1hHTd41ZTQBMA3o5SPm6Dcg1",
  "key16": "3HaLkNhTytVqGzA2fJ4Zg7qTfSbLjMsxZ8Z317DMDmPhrJu7Z5PV3UvS4n8k5FTfW4CFtKKMv69tN4jrrQYpZ28n",
  "key17": "HNXpyWNVRYcNX4yipR4AevH2bEqhVfcDQxiF5qUmBihjr5gBo32h2ria26sqyPDPZpgzL2vkZi15momhHhBDdq5",
  "key18": "67JvtCpMPpLgCx1TNZAQNcCf8uM7a8mkBs43bVCZDFUwW91vV935QyEgy9r6anPdjeGePvsTm2saCQHWvjTzGgTh",
  "key19": "5k4brohNeHTpxqvL3EEo1JEDJqxgqayQsZnoVhfHJXrDisQ4XACXDmT9wts6CQGD8vnMqRMXicW17GgD9tbZMwnu",
  "key20": "Be58QvY8Gs9CnfYTVVG3D9QRXCtAPCGco6yZbW9CEQ5jCpTcAPYo9f4BKkfegwhKHJCDk3QjW4S3AqaH4RtUMxH",
  "key21": "3jDbtS3dTYnmmMz6L4mo7meS3VUVQesy2ntsDLF28tB38TbBCKNz3tK5b9EfomNttfNyzz6SVPYYK2Bu7jimEG4A",
  "key22": "4epJMvpA9i49xPQi4CQubuuZijqjbK9xQggzjQEhu3Fg5SUDp1tktyoqwMwbKPvWcu2dEwGNscPypCAGCyohp1CA",
  "key23": "4FN5NCzq94koYLi8GizeKacEYJq3xKQyXMhcBNFN1SUKCA4SqmuGyi1T64GKyybR2UJUbbupeDnFtVBZLK2xr35y",
  "key24": "5kBdhAEsc6EXVmw8tQ4LmqsMqUv4ijPXurAzJWjH1KcQxhx3FDdTfYoz66kbKkWDKu4kxufcL5yPE4YX1aQnnt8c",
  "key25": "hb98QHw2sU5F6zSVSbf2XC9qwkXtczytotF3AZcF2vgvNzpVLKd4xmkSxJa3D3B4Zwv8enT9ESM2wix7w8Xyh5v",
  "key26": "3gLN3Qa5JAMohaJerXEQEwkUwcg5bqUKgE1u9hZWUjaeZ53GzCMdz5n17GYEMs6Kny6nXmXfXhcNKXpyzTfj6UGo",
  "key27": "3joEaX7wxFYAHMqCAkhMAJAn4KfygtGpDX36XUGqpTWhkZUZxk9ZcApoWo9nZL3pqUGyJzugWrAfYuJfUubkRdW9",
  "key28": "5jZcZSu3nhCph1763DBUrBDMyaAtCnHQDohrECEHP7uN6mrCxyhRnB35Kb2ZadW46J5Gdqfz2BNPS3D1UNt3z8ab",
  "key29": "3hyRoFp5N1LxyLPMzw3smbsNeiM6Y51yoQRYhm3WW2V1G1nb9UyUEXPpjuJuLJWYk7TxnHvVvTovfyyT4GcC4vFD",
  "key30": "53ijcrokLVEbyzEkxVDpaSc4niBkBjA3VB2AuxJGU7FqHQYx5bFYb6GiBci3LizzzRLzWwN6CFAi1ueZmQLPmjsZ",
  "key31": "53eRGuXhDXzbxjmw8opr2qRHSqaXffDMdHT5MMiaZNVUJsnkwPXeGcNT9i7yhiugw19A7kspVFw6UGQ2RhN2NCGb",
  "key32": "3SkUQB77VF1PorTsLV71XL89n7Gns6F82m7xCf226uMCiV8QthG9PPPSg9RSEzxDWNh8AyhfDbXNSDppUh8tJLPd",
  "key33": "AU5ZcH4fBCn4mAYFDPYAXdFAXM7z82CuVWJrwwfbTrBn5LLHRiCkvQ7fbiRYUxhywr5oBBBfKiq6yek4MvY7hJS",
  "key34": "LQV32GSxxAdqVeCWFADtHkCDcr6vtxRdFAYaypcn43wJAyFxnAK8Y5n3JSzR8vVbbQEofoFu6uJZyfh4p8dzZPk",
  "key35": "3qqGPUGCEp6imv124bLTJYR1QAAEq8CxD1ikEWY9yaxLQwHuHtjedRKVhehEZBPXvq3ygmsthHdL7rNGLAKZkwCZ",
  "key36": "2YitcBfTSTdzYDu3ETobgAD4EKTK5p223ypGTw4J9PGcXSFeuC7Y7XvbQ5mJY2YhBGrrdSnyJuWER9QWCyEssKFP",
  "key37": "4eeePnNLD5nnkU7c58AtFadKasfkNJtgwRp3622taMHnUsnaiSUzCg85kFyuGX1uhRGAxCVYU6vXZHuY5v9ZwB3i",
  "key38": "2vMAeJ29uJ6Sb9Xo66sXAJn5RvM3yx9vziEk98xS4zVsALUHhbGXKPAYazcsLvgaM1jaKBoVm9DoQN4GzH5kQwtm",
  "key39": "5C52vpwjhijVnJeQmVh4TCGkKiLDcQ6e6YPsffRPy4wnuU4b8GSMvTbjvNXE8dNDNiLjnKWXXJ637sBnrsogcxbZ"
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
