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
    "27cZLCHxrpC2WUsAjZN67zafBKKHQTALb3G61edMCDxBPVX7EXv6E47eHqGcXiKzu6EpFLB1ToZRhZicZijo65fg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MWkQ6jJjDED7Gsv7dmWjwPKEd8yUmsRF1jjqbFXMGbwEZVYk8SnGFJ3y6y2ronPkMCv3SBdcabgHB5JchzjD8BN",
  "key1": "2C9X2uPcWcNkSFGQy44P8nWq56E5jphfGMxzsZHq4PwiEf88kpgmej6bnPi1N7ecGjgLTPbwrqmhbGRdr43gDPbF",
  "key2": "5cRexG1x2x7hturpNdqDUy3Exs29qYSYdvDntFPwQ2ucFGZy8zm1XTgSfGfUESS7JkSxqV4haabqZjmEaHYQm4Nb",
  "key3": "47DtQSQ1JAqYFfoHzWeQYRoWrJpREaf6Dzbji6SHa6T2tNKSncbu7Fv6Xxog9B4a7Ku23qc2bnXzRoq9FgLGiJCK",
  "key4": "5s7AqB1nLn64tu665hJVqhDHVe3gWwtnVtFQZLoUBfPUdXQxv5MEgZz4iJ2httVYMvn9jXueHZ28VH6EPmnHDsSC",
  "key5": "2N5ZELbeogFXyDqRP6LCzAqqvNPqoCGSaCoUMp3CaxKfMWQatAErCFwU7gGAwgm5TEzSfCWj1UX7zRHkFzmc1qVU",
  "key6": "4nT3VVPmchCQCDcmLGvR3jxDxRA9b7ggSH7QiRo2oCwZ17v4Yrm62PV7c3P6fpGvkntadD7GMnySWybMfKafvY4X",
  "key7": "2yF4MSzN5S31u24qkSvG8CyCosaSL7aGSEjthDDGoVSasFtM8CtvEjubsY1CKTrmHuXkeAUPt8AHeKARECmL5gt6",
  "key8": "2q3H9VnRGTLc8LJkxhpfNFgrLWSw9GYP5igsN5EsTJAiZiQrQ1fMAeCXjYafrKUL8tweLJGewRQz8JScG6r8dZcJ",
  "key9": "dn9Rh2YuJ398jqzJgW5z9aeXxyTs8Cb3AfscxASaFvABoBcnYLgARJowNzgTDhEkAF5rkjqZHyYVNPt1ppEf5RZ",
  "key10": "21UVvJsCEmezJSxJ318mjvpoetdGnCCPcPRc73j5GQyC16fv9PjtdJvB17o1DFHWRUkuHkqGJToxaKaXBFgvZU2h",
  "key11": "3J2NyEtYcSG5r8gt8EPB9wgdBGZ2wrAwKdzQipc5hohRRLP3td4yKWAoGLbe4fSMgRbmAunQimxw2dH4cEEGAKU3",
  "key12": "4zgovvmQZtAut3PSwo7ia8N7rKWepz3a51kMn1SVjqKBEuVCT4SZZdBWoosyToHmDMFbQAYMsScX2sLewUc3BSXe",
  "key13": "4deZe1sSJpGRQgTAuAEpotSCV2JaoJqKxDbNMY7QRapMwU1bd51o2Mt9DhhMkdWEwJ28oRwxz7DXRxJh2kEkpdC1",
  "key14": "4FcKMbkDWf7mQe7cPneoLY3E9BdXxjzDEQQKUn5oQntHftEedJ8q51m3JTCiAomqFi3d6M6b2qLrw8jH8hKzCsRu",
  "key15": "4SMG4mLKChHQcESwrmeAvfrsPyHctghoTrkkUQNgog6WrH3Y9WobSQryhz9ModPD34it2D7LNqJz7hzGFctVzz6i",
  "key16": "fiBxy5Ey1oyuTSgBGLnQ8vnoeF6n7tvjGmQaMBBjtx2xnRyUiY8k8bV2YGLbGmmC7tMQp5qu8MCVNPAbYv6N5Xp",
  "key17": "3oTx94zC3V11AGL1XtQk9MefR528uzLbC9Ppqe2uYCgz5s5dHyFHUAAdafMVNVssk5Rmr7PYT4zpB1aukQaE1vDk",
  "key18": "569u5egsZw9qEFYERczGpaGxz73c8rrcmvZefokzSHXAJpkiGaihRX88rWvthgCB3sqeJzPegVe6kHn2jDXeUPLB",
  "key19": "5zUb6um63c7mKgon1rCCTEajr9Frm42ZMi9qwY8SXS7z5VJ6ZN9cLca1kZdQeFmr8bgPk94ZoH6rHuiS9p96dSuQ",
  "key20": "rZJVKjrViH63xEvRTacnYZr4g4dFeTbrBWQSjkPetdZ2msUcTQFWNhEJ5yZy5deym5WMC3j17pSnGn5FmjYEgyk",
  "key21": "8yC8HWcjq8HfD8HrNXbYN2nwpLomTtG4uATyvUZhDexPnqqYb7jFduwwNE5guhnNNxqGtxihBSUs32vwhpqwcCa",
  "key22": "4FKVQMkXDEDnpYfzf4yUqxikfeXnuHndiyTcf3zuDEay5jrzkGchPtNt14uhGTUPqGirerdjg4Y3EkCJEpyD2QCv",
  "key23": "3R6SXKsnKC7dub4uEkJZL2wkCgpWL4vHwi3JMwhmc9jBXDJTf7LQYyHaSnCLLYJoDWDsfuZiLogbXFK4to2YW5bk",
  "key24": "29Vb3WqYuAts7prs4R69YSo5sAoC9gvbn7MWgXRCL5CJyLKJDdjztJLc6XTyr8fWEhqSxJsYXHkdcjinRQArBVSc",
  "key25": "4S9bG67troHR8zPh8qDzcd2TE9XkaRyQTNo5BF5G8QYrdZBT6Gyf8eeGK135uuTtKaptvWiEVS2ngdUZEoYaeJpa",
  "key26": "4n5EaK2KbJWYJPnXc3ivpGj1Ws8jBEU4pzpbKYKZR9ByNxevKBUdDRKmNgDbNPDeEWGWqaDsd4MBBw2BzsrRYMFQ",
  "key27": "5EmZx5PZW9kB6zoXAQkFEPWkYALFPrTM3YKphGn9MdBs4GhvzRv89yLp5GHRTggNZVGXeT1KgvkjCyNQgzHqi2Kg",
  "key28": "5ch74xRL82tjf9Nyic6bp1SCC3x81Tfu47wUcRZmTD3dM32KLxLHdqcttfhN2DECbFUqF3fidCAvDpEAXkH2Uqee",
  "key29": "3aXGgWrSDHPuQBPhXDJcfEjmu9RLKDwiLohiGz5Brc1xMraf6TgAHCWydh4mqZ3ATghEPpBSA1uDqucJkY8Lkjhk",
  "key30": "4EuQ6KjpMk2ZkqszsnLF15GgZ5f2NkXWN1UV9TA8TsxH1FSyGU2aEZyRF54JbkCXBtNvoHj7HeadoxjDdxSxq59Z",
  "key31": "5z7GHZyAaZE7TktwH6ir5tpmppQjsd88wDqSXGkgchxsGytd9UJZ6ebUufC4HpL12oEHX9zHwfLdx166TouUe4fn",
  "key32": "F2msMeCZdG8nvTim5iVp3UzuLQ8Tc6u1t7AUaCc7VqXVmSH6xphJ3gjGufiF721uz6PbPVCFPG3sYj8AxQ16Svf",
  "key33": "5cdwieHKf9tkUCYY1c4b48T8D9YkuS4CkXjdEZzBFGTRwjBHLPzMuRv3JJsWJuLcvHRZBsmLemq6VYXHXzX26Nxt",
  "key34": "4qdtyKkFpzu9H8N9kLk8Qa2UQQrhq3RoCx1yRTV4ToJKho6MMkaxfPfK34K4gCz3cenHUpJhZz6XaMBtC2HMi6Ex",
  "key35": "3oNgByhwSHJbR5ZD2beU7NxAfNa3M6uNmbwcdfouXcqKuA8ByFJ1gRXhpMv6cShRFSX47JnGyvS74bL65KcSP3SE",
  "key36": "pDPZ4cJkAtVKFHAi3CqtXmehHMhLrKqUL6pY8F5iREqsFxvFRdoAQ3ckYC1Q5QFaJuUyqTxYdZ16dMXYXczxaAa",
  "key37": "KKDm1h4QzpMw6iaFMj9idaCjZwrATeFLzuQ79GJKJiKy83HrLS1vEjdvKb6j53S4jhgD4gzsDSGYaUie1UWEQeG",
  "key38": "4N8ECJpnKqnM945L72j5ZWTwoUz39FhbBZnSzqcyDeU2fVNa2ixNzzYS1erTq9giprZoeP7EXLtxrXjwwYwEyASX",
  "key39": "hZWv68LoxfkD9QPCCyqQ23gzsk1zysXaS3YMMaSJif6UzZBFFE2d63FhCXGSGUm1LB3GS42GEU5DMZ1Cwox1xQc",
  "key40": "AXYSWmiyd2Yv9H6Q5kRESJc3isLvMBk77k13mmXB4nNX5hnrC7YcatLBBoP6Ubgguen2GSfmwo1AWYDjsAhScL2",
  "key41": "3cjQHL6RnN2EbEWGPmqHZzpgv1Vg7zPE455XkkzpXoobsTDEZTYuv86K2RA31hxseKQTkcwyzk1suQUyYkWCEYDP",
  "key42": "3tyhfNBeCaR3zFa2dnXAJoRfPnhdjcrfLAMmHFKk6fwTgn22M2tkNoJLgtHmTq8hmz3i9gX5Cf2BExV5Est5v74R",
  "key43": "2RY97yZx2CZXKN6wFEdK8YLh3gv1N9c3JvtTmqpocToPP6cz61dk8XwtHMan7Bdr8GBXB8Z2LGFyRpc6VUf6mQfq",
  "key44": "5iWCngvypbRwW9kAUwbhhiZGshrZ9gt56dvPEaf81sSFPHHzmYHSXaEapRETZH89wMigcfevujGAS2kK2LWF1FDS",
  "key45": "46Zbqk61mMhg21EPRY4XokK7W8qjtS5ueuJevZbQQv1rcvumWNJEpKkRtNqdmBvFzXHBba3mFt1Y1AUtgVZV8mkX"
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
