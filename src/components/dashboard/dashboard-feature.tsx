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
    "4JEjJ1HdvYzn9ceo389obw2FowSeKsuM9MAYcYoxTzS48XKHjzxcecXYYZAqWcMzc2bcFLDT11Lqq1s7kZkK82Nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DBzXSu4jhfYG3xT9WPTyDu9zoBoM5dRGiyVVps19dq8tCfqSjQnmYZ1f1QMzap4SS9VUCEkw33yV2h3gBdrm8Kc",
  "key1": "3hndC5m9LsgzpSsrf6jbcZAMqjZBBx5NaUX4mfQYQ1Xxv7q3VwNpeKKmZbu8tGw7kpS3qu6qWn6f4xUmrf6UeNQB",
  "key2": "4vwKjVwFMAsZmzqatcNmzqkmctH6eaCG4gtXKhmems1ZEM1Z7JiXWQKL2b2nWxb24NKq1RG2JtKqWddqCJv1EUzy",
  "key3": "4JDFgk6wYspBn4TuvkQ5FVXRHbxE3WcLowMXBnKspiQ8CcdjJkMJoTibU2Nb4TfioQxpcgmm3QHomXkKxJA1yB7A",
  "key4": "35sTF6nYD12jDkEMUrytWDVQzJg31oD5AvP2CHioQaqbzp4LfQF6GKS6KDrAqptWFcrH7LUf8xQrrd6t5tDoSCrd",
  "key5": "2yeopSv7BibDWjExe2K6gjgXzgyGLv48iDfWLW7jQDPDeeRby56bbAipDjLYGkiJN89C1NPsPxn53jsyDVb4Zpq",
  "key6": "54fJV8SRgr3H672bdNCrwv1AsnuAmxo7xd3M8jSt6BrFLdeqdSRyjEnXxbX9kKZ7jdBDPcdMkgD7j1qnkLxLLyqm",
  "key7": "HEZCKgMa4gdwPMkSPZ2TmKpzbcyud7L8Z9XFCtpJ9dqieLXHcmy9YWsoQiLuprwgZ5gEhoaoG4Uah774yytydZ1",
  "key8": "49PC1WY2QtDXLMFbSNfcRDGVNhb3xjLpX29MjVXF2d91jczgMQbBEBqGVzhG9mAzqc1EShFMGff875Jy7XCkG1fW",
  "key9": "3Wuz331ydrSiAtxr2qJeavpn8pgran4Nmxu22n7a1QJ4CDCyFoSYDA7XBiywKfTprNmWazvFtEWX2FtDMmMRabtj",
  "key10": "5GoNWRk4AQJ5yrKpbUqsXBBzVDCXRRvtmu5s7MNXQPFWJLdXuyLPejWvS4aK2Ysx28UQGewja3mJEZji9743YaEu",
  "key11": "5cEMv1Jn8PEjUxjb26pWre6K6VAqXQi7xF6o7qqt7rLwJK7YSwktzB7MoPU1wQQtcmWW3zXpKGT2AZ98uA8nD1sG",
  "key12": "tNAXQk5uJdfcBwqnCLneA4D4rDsMqBW2mpwZzwXcfuJ38D6UWKtCe7kBytfgX88BcgaNbaqWjGL8Dw3EwtgqB4V",
  "key13": "57BLYdES1wDLovGbWsVAgzpGNGbgaQ42XVLqTLZgGVLNH6gi5QnGJ6FuRJ4MscY36Cnqjzsh5BoaGYCGJqUvgYVc",
  "key14": "2QxABDd1QhrtxDRr5SNmkB9mKMcAKZdc5ETuzeZK5EfYkeCCknZV2syQWa2JDni2rXkpsoiYNjm927gyeFB2RruT",
  "key15": "4ze9GwQjnv8zMgLiLoLRXB9E159GtiaoQutX7AR6opbP9p9ERUTVKDhXS6GoP3pieWYZ4zZYiLsdeQzPgBEAZ9iQ",
  "key16": "2odQ8Fphq8DNERt8A2TqjFuFqnSxZa3u3b44gAx425vzUR3K8aeyRNbtU82AdKk2WStTYBwDf7GJf4DGHZSW3WTE",
  "key17": "4CGGqxpABWAA4vRasDSDihmxvqTrDVmv8tRquC1BGpKJUZXwijHuC8y9oxGK1k2ZSbGgwK38NtY3ViHKQ1kypLfG",
  "key18": "3wQ2eBXLspn9ywFV1TKJUEyz4ioGABjBDganHthwDuTCMVNgtSfzw74nVTmGTx4jQHw6sF5Y83hE6B4R5h6WmGvs",
  "key19": "dhtuLCnBZcwZD3YpuJ6gpVBBN8WqCUscTZ1NaVyTW22VgwAd7cfd1dtcM6kgMFNyN3ttLnd1uPkQE3Uzx658Km2",
  "key20": "832gvGXDo5akKj2BGrBVzBgPE6BKtqL3jMLH451ajjMEeVWF5XZSey61Anypi5dCW4GRerpjY1FHPZxHxkcFEP3",
  "key21": "48X8e61wSVVbs8x4uARq4GctHg8RvSmGkMaNGJHc5wzeNzbouZqMwyxAeP4cYqdXPpu9rdKpnx9xUEw4vAUAhjQQ",
  "key22": "5Niqx1r3qBtHXfpYhJKD1vq9RY3GdyhxQhKyqbBBYZaaRkUJGsGuxE1GUVMCMy85YyjQfNYcfEGzVw5qUCBKMu1W",
  "key23": "2D6uCDwSgrWFKmGyGrM9JBxsBSxKTiWTMGTm24iEfetXVJmCJuPVKuko1BJpSx153PBKG3YC5zQfb4r4TfNUXBR9",
  "key24": "GbZvyEeFnQ9yLMwmsdGYDnHWjt5uQGxYUrbX7p9SvPuWV45fyq8T5EuGUU2EqynudAzdF5k8FyS3kmA4f3DGnwy",
  "key25": "46zocu9b5RCysUfupyojinbNYcg1kLumBbYG7PZSuCmWyS6wowHKpv9g4s8SGKZstUmLUvRpf2HkFwzLCcC5Pwbr",
  "key26": "2XKDTHaB1ZAZ7U8tS45DhE9NmYsFRiktbjeNegHVT8FuGv4VtMiUqgAR9wyw6HZzA4acUsvKUyFQUbEB4LfsmYYQ",
  "key27": "4T1wqNU5xANsJ9fwBTXUkkf8JA8tooWGr9LsK92RJ5YTsweimbSiiUUsXyd2TEsg8HcmpGGJFS7TFXdxHexju8Cb",
  "key28": "5VpXdcFrUoiEVjNyjUunvPKnkzQSs1EZW88rAgw7HREZdrpzEiwCxGueCvNfXbpQ4abzfSZAPjvD5TTu1YqJ8UzS",
  "key29": "32zBf2kvEEh1arthT6xXABiQtw8JodMCyDMrrdWTYFNYauNZRhFDYj2M1dxogomcFZHguLWM1aon3MXK8jNR2Gdw",
  "key30": "5SoJshF2f7NvyoddmBHtgNTLdoBaPDEx1eC9KTAuMqNBEnrgKBueN3FseCSaqcYrY1z9dqBvpxVbbN1HkNyuuMEp",
  "key31": "45N5LYAKNtzo2DuKTmaWaXVWwv413JcNjUv7cCFQdJwdR3pnErVv1RsEEdZr88powZNbpZYnBQuXhPx5uTPTmzNA",
  "key32": "3BZaTh1WbDma5Jke5FA9gkBv5ARGbec23DP4XzYpHYc46rwqrf7PdUwBDMVjWxYnEcMKQFaLBgELN6Ra1is4p5ip",
  "key33": "5sJQcrj22bcoartnvaRSAfjwb2oznv2gKnV3aMWuomifYBWXJ6fwRrSDLXWH8S2ErABcz6uEConxzA3KPs9e5T8h",
  "key34": "3cQMd7K8S4sA5zMeeJLvqLWAqGATX2XLSkD86qV6cQtTrf98ZSZL5WJWkPN7ebDL6qjrnzd1mpAXndZ4PB6Awjrn",
  "key35": "3dBwR6kAvgbnvVno1eqggNyhUXpfpirE13DzRuyaunusGLh77jKd2uDQMkGNvyTASmA75nsxcRaxZnA7ag6DN5r5",
  "key36": "5AZqi6Eg9QDu7WAohe9kYDwCQ9fN9Psn8L3PPP4vAnUf3DFG2kxfjWY1nMSqsGkGx8Wp6m67FkT4CqBfbi8ByDFx",
  "key37": "bPZstbhpDDYen2mrZvR6wXY8uTou5h3dw7ibLiB7NNgyxWAohM8Qjznmi2Fxvpc6hk9PSbdEHsDxgepaeTKp8Mw",
  "key38": "3TwaxkpWjze6gFMpunXjSrvuy3YDsSqnx1GnmPsX4sGoa1gbhC68k4BHq7MzeSg9E6JFN7PUM7EdaZRBK8nvbzUN",
  "key39": "4v2sPvCdJApTpcd8nEzC34DHcytVxd4WSFVrUB1c2GcNeFtXkKg5K8yzSpf65Xa2iEEDrGHoTpi9ipddhViCnbJe",
  "key40": "2CXo6KqkJqXanQ1ipMShojTmjCwzCMrUPZLqNqVmvJZ5VB1C1hCvmDqwst7Tgg2ToYGv7vaXEUESBybeU4ZdAqgv",
  "key41": "8xxmdwBUNitnCCi54zHurAoHe8jdHBYVQEUwToJjRQdTfsfXjToN6yanQM1rmHz8G1jgZRtQchGi1yt7tQR5LEq",
  "key42": "3as36CgNkmmD8cMg4y8hNG6bRopWMcA7wFFkKQdD1Jn7KXp9uu6MA3c4nhLALe2sdqWfiJ5Pi1pkZQt91eeEjTKL"
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
