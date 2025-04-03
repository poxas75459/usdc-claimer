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
    "5KiYuEUS5qH6uMQgFTEPgWkmuyCSrazgLALfQLZkmRuMr6dbDy896hL1Kn1B5wp9Lhgr5W5CdH9J5z1md1huubhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gWoLJZrfPDnfK5rj7bc7Qok5x3cQCzyzHd6TtFSaqGDhNmBdis43dCLsWTtjpSaYTTFZfbYCe14KQqMRA3CAX7e",
  "key1": "238tWQJaaGcekApgkJCVpZ6xmpKsy7FYKkbwCnYucXArnJVjDSNoNFLeV3rZCDqsFz8CD7aVRsyCViqkSNEdEDpP",
  "key2": "2ob5tzDotp5mhT36P6Pyko9ryiBn4ftvAZcCVBqVfLzCA7xrBCP4JiiZp2CMS7mE2irH4UeXc4n5XYxPusJysc8Q",
  "key3": "5PDk6FLSypmMh7iWmMM62vRJdX4xqeq3wqQkY1tgDigeLK8dLXNLxnCvNrENkFCkWCsG96TgRYwQc2C5ZytALxw4",
  "key4": "H2g6ea49GNxjW2beHwRQjb7dLDwTEX76hac1wdLfd2AkvwXpBmQfCbSF3BhtXpFWKft59W98NveH2Lsfexifj4A",
  "key5": "5cAzV6pFbCsgiUuPWMJKqFMzjnrgEtGhWWmwhDeMNUFaKumdctuNHX3osyhhFTq7GGnRXUxYHspHxhRL3L5ve67d",
  "key6": "2VYGcBsbz5dyLAXp9k4HvPcw8az266nPtMBV7uoLYwdX5kiSXy6ry4cUvU8Gi4SpTcswBH3HpsQMU7Pbtr2NbGTG",
  "key7": "3JJJVdRDDrshASvpmp2uQ5Gb3zmPPAGYwV6SoYUaLHZj6AuFxpLNeZJLxfn9f9mkKVp1rEz2LyMwZ2TNwtFb2Sed",
  "key8": "sFfxkwK2t4osEQ4yh3omGETfHnq2GsDBbVWujXr3E11sztRraPbhB5Rg1UFfMpYBXsG1QpbPVSZTdGYu3DDmUP8",
  "key9": "4p1JRLBZgQfuPg9uUghVGygqy6pUtQMZcHKS4ZEiAM1aY1C1vHvyD7Nw31MzzGgg4vpqrtcoMsj22xiVH7G5yaVR",
  "key10": "rTEW2iWsVEyoj5PN7gEz3ngigAqXxJkp9c6hK3zsY7uoX59jSe9swE7eGB8gBgxswPdtVE4DeF8K8ztVd8nyLKH",
  "key11": "FT7pUoJtuPYpBE9rBmGYjk1GhAEqyDEvJtzSieQ9nZuAF3gQBoSSJuwvGKp451fxZNQEtgD6jCuEid4avJoJx8H",
  "key12": "4LEe8BJJRDGvqq8ssq8P9eDCeX8iuDbdvQ5F9yHjvsoiHpAMrrGnzJLPL8RYuQdRHF9GRj8TntTHkxXyA6UtpW8K",
  "key13": "4MFiZk8TBa1gMcXpkyDmhpEjr55nXGXK5sH8P48v6j3JQxDH6jvvj9gN4XvpDumLyxpdmjDVsC3meyWZyMybVHvb",
  "key14": "5rjnu3yURTqusKPTN3rvMhSzYS732ZAJ2GGQ9Z49JefNS8jciEdpN1CVKaAyHWDYCtD5YeavVLyWBrWimZozTrzz",
  "key15": "2JMrvWRry5uPtAtpFrof3FGj7tDtVNqwGXvF7frGwSqS3PMMXx8V4cwWHFDxrkwPhV9y76AQytsrYYXi5akZXDid",
  "key16": "NJP4rbYDufyFEk217gHMuTmEtyPg7gbW3vodxN6kpMqKTzLApgNd2ahRkaxiSuf5Zaee3n6NH2yGy1GzBb3b9NN",
  "key17": "3NhwX6tKBpJg8J93y84MFcN7sXSj6Y2uT4dPXepupjrEHMwK5Pf9jJXCLKUjzTPBYfWpP5C3k22Y8YRaxckwZQBN",
  "key18": "28SZb28LBpKQooG44YuGyY1kCCEAC26fVT36AyJXde43FSY5EnFZoXd29WYjp3zSq4DYFGgA2D7p8efGsMVctetR",
  "key19": "5LaxSVJo9Gc6Bfjw5XaNR1U91e3eTgeLGXRywph7jjQ4Vo9JFHZALzKrsPN81Wb8pMDhXy1eDBv2HxPP5jaYDoV6",
  "key20": "2SJrTLTMr4ShyhxfcFMB4W3GteZiJJAYAjPu2R1gajmf5CRZhyAoo8xxSkkomwJZHrnM4HXirPuLbfugSAMdnCjT",
  "key21": "43pjx9s7o4iMuQbrzYSA2vxoebqNm3oFMUgJ2wdf6B6Pr6iVzYh1mhkfqvjuR1Nka23HCfWuRQKARyWHu4GjZ124",
  "key22": "JPrfLDfqhJAHS9WX29UR88MH9cT2vjuTRtotaYZQyvidCNCiaHEcSFRnQotVKQtSz5p6e2kvu4y121tDbUuxvmp",
  "key23": "5ppTjrNscgf5nFTeSvgLhjBwUZeFfcBch6yjgH2AGx7CBE79f4X5XYjWHN3TssdyJorq24H5GUuPg3wupvy57V6z",
  "key24": "csVkFyzGphjdjzWQuumBQkLPWyCp5zLwSwMEgKbX3A4TtzqznfW8AkGq9tq5MJebqRtBUSRstv5r6EPEyVoGUMV",
  "key25": "cab23ZXHCUAbZxZDZhbZYmixD2m2Jk2L46JfEPm93nS7wPZExyCko4Tu7yHHnXnQTDH7oqCVMv3A5du1FqVyjZG",
  "key26": "BpHwusmEoEzwkqFtdANf4zXmPZUW4W6DDfGfifAVnu3hKwyYDxQdUrZzvr3Ec5fQH5tXF5onCzvoQ6cArcKEGFE",
  "key27": "4ovFKLzwL1uAAzL2qfrHiFyx7fRDzoQvLH7ztV1ngnVSjizbyy8PPhuD3gDX5dVBEy9sjeWf5A1jiRBmiV6agXzC",
  "key28": "36rmQtYrjHdXpa3iiKJMduKF715rpkMe9FnDk1spuRUhNH8E3kmQESgw1LjRg32KSPGcfYFaARg1RHbKf5UotkKJ",
  "key29": "oBy94bGKWG3wpMfXruXfauLoQkkCp2AmbrrLXjCqQtdRa88deEamYefbHZQ6XH8aJWd5FW6LYThoj75W6ZKbVu2",
  "key30": "zd6UvvtxACkGBZgegvyGKTzyQ1746dhRDb4mQG26Vs8CbeiqiJoWiYWyrLopoZtCufXfHCPMnjGcfA1jPfKFXvc",
  "key31": "52d6LkAEJRDCs1TbSqT7mAE6Wd5dP2LTpNsxxz4Gi1D6SVcPZbi2ysQh2fBDMJ7LLP9hStTWsCcebuAx6JFi6cBW",
  "key32": "QGsKrMyvjNuwaTvNrZfoMXvxvtN4gwgAfzGdUWmE3ZsdjDf9VExWCD3vhdwxV3TA8bgt8djciZMNf5HfTmV9QKF",
  "key33": "5Lf5aJc43LJk9G6x3Yof2w25jRgFTDL8agUmuGM8ZPdkFkaKSFeuJvaVebvS464ku4i6kT6yJoWQ8XDRcLaWoAGG",
  "key34": "4P6Gfdi96WmBTukpEV8pgTBrmdrZjtDAHSAhcxnnGtQFo3m8nKaBR1n3L5fCWC7f7JNnMhKe36JJnDMMab2k6Xrz",
  "key35": "5V1te7L6CAsymj1FtnD7G85pSMzpgGCMpsBMRxvvGAC2TnQs2wgbFWgR8V8onf8EVD1T5y3RB42q16BgMyDpbPj5",
  "key36": "4h6rHxCSgLQdnYF8Q4ndAjqpS7Tuo8XG3LnqC5fd6VPpGq5L4BG7w6jdCTmFyVy4KPPMgFywJssStqZWdWPoKeUV",
  "key37": "3fUSTq2GZnsEGHzGgvJsFqz87qouBEFX9KfXsnMdwUj1FdN6iRh6AzzKag9W2qEw2iUFaTqZb6bEhmAQPyVb1G6k",
  "key38": "2NVuYteziqDdW5jToKHLFJnXW6NFTUqschfyeuFHqzPEhR6Bz9AhD9ndBmP5SEsYtQLY7PrYGQmwdPVhmp35Pbyj",
  "key39": "Z4Pnedswrg42ayQA4P2kELhD43utdynRN4itc2XWmgPvUWVLQAYABcEUx8CQNrwzGM16YB4miykMhfiFM8cY1cf",
  "key40": "PxjqH6cgWEaEaW87sgVELwtS8M2cEt7PtPZa13MKvcY6NCGn6Yg5fWRcw2mrN2F1x9AGBxqmTQibJtAvahErSU9",
  "key41": "2x3yv59TSkn25M9ry3GpfuTyZ24zkA9okCTEb6ADWnTSfQ9QknoFCzoBQdPQeYMkUEmmsHG9Zp3418zK4MqNHWnr",
  "key42": "2jV8z81J6sx6wmjX3S9A6xGE3PdqWMsfKS2ypkGg8E2VLeKRVPmpSQbeXiEvvchNsPamSwu5wHU5M5TQgCzUh7Wv"
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
