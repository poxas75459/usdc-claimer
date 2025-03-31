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
    "2SB6CaHs3fSbj7YHV2HFNQ5HLoKHdSneaQkU57awWYgVed5ESAg9pMytJwbLWPz74XFwzFVSxbFG8yzhLnDUZ21s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DhHTjdqNtGbchrjgEqGgSThY6xvKJczSgNaeoQ3e5u1sXbGg2AFbKxPFMjhsRo3irsZ4o1TiSJLGET8AzpuTvi6",
  "key1": "Uv8KLmg4cZhcRx9MeTw6Cgm3ck5mgSSi5m9GWdMoZiBgsmSKuJufpvkTYw7mJU33rLpjhazMyiNZwxEqfG9Q6Fq",
  "key2": "2eG4Bfu6xbThDSTfsPDc53iiWF7MibLXw5UUZfsxA7nq5Bcajvsh14KqAe9aywHZL291geGJskyfTMxUvHRuUs7r",
  "key3": "5qNCt1Tv6dNKjWphmf1Ev6bJPUf1Sq4iUKRj7apVqdP3EvkyMtVSYfUZxbqc3bJhTAYY5oE9JvXA8miZLT5qWeKi",
  "key4": "31yGHYHdJNcqsttCR3nePzEVdtXGxswQ8kQuZcpGeykWcmRf6QTSDcmchRCzYiErZ3wf4XnG51fSRoJ79tRujLcV",
  "key5": "34hKZM3niE9izBhnVprsCgJ5kCcPMhEu5kWJs4PspsjDCBwSybSuZYTM58VLtp6sc1az1MBJkAEjtcaSd4GmLA2u",
  "key6": "5zLgvQESEVe6EiQVTtDyGzQEHwDBYzuFs2tAUcHMV7X3X9xNPVETC9oXGZ5KEh1AuxRjvvvHHHdemhn3mKa1MvCV",
  "key7": "2hh56S5XXTjBBZa3b9GBNSZA9oDZndvMUU1zMWskgMoA9Pqm5Nj4Erkyv2tC3Tq4WZXhp88sz1hTbovvoicwc1yX",
  "key8": "5n8ZUjg99FkAzKHVYRmTx9aGhhnhqNM8enangXqEY8chgqLSWrgZwbieQQdCnCbwhYuKigraHcQPUksFrJPqW69n",
  "key9": "3wG7iEspdo2EutNmQhew6ZmNHZxAgAB4kRBCGpBR34Uz4H8cx4ky46Hzx58esR7oHQGMH5GqCpBJnHbmeJT57qXZ",
  "key10": "4288XeLY5fvPndBKY4wCKoMvXRYXFYVabmSF1wo37uL1MMd9iet3HyGLJpNWy7cPqYf4fuC5A4zznaHKCEp4Ahpu",
  "key11": "57zF5SfitUa2QPfQEq7Zj8XkdQ4dRth2N8tAyKaxECYU3xz1c6XxGxtZs5X6q35ztbKXaVwS3EMoYnfmxmPyrDhH",
  "key12": "2XTw7R4ZRheoCUyGao6LZEX2iVzLbYY59S9KuiGUZjYM7fVj4VmSC4g6spe6Eb7EiQqehi4oJEgWvCN7jDWF3W4s",
  "key13": "3UEU9GhmAo5SJA5qwApPWNwsWJgLDq2BFSQWBozdy3p8eRB75tqkZKAK6HtWdPZKfPF4dA962BeqrNj3g5x4HJHb",
  "key14": "o1HtoqLMa4a3SSvvYJp3NoeHro9yQMyKfRF2XiD1pEUpJCBtvpisTEzY6qugonEFe7HeKWCLvhgkgKytLAFZWd1",
  "key15": "3Z9hpjs4WE7MBrz4hSsXwzZWe4ssmNBHxLTdoQ6EbLRyPq6tB1YiStZwSNMDvjcqbrt16uohk7QYXNikXDpJCWFE",
  "key16": "4P4hFaWiDrW2yfxVnzRGUxQ6djmByehbtrorymTE6kYdSsddVJtn2QMs5yM6TYkL9q7VRt6sqtJsx6Z4bHJLK9e",
  "key17": "4fBFfGxnE9FK5HeBtvMtUhpoXS9yJ2VGkXF8pkAm1XaJDJbGkTPyUPHvLRtaVi4JHFJGp6z4PtauXvCu6ZjrewHr",
  "key18": "4xnPd1fEw5sAFymYqvfozVrLYkAu2SDKAG236XZiD6ywqdBQ3N4ATjn5FpH5SeSD75ysW61iELQMJhiSoNqG4cg8",
  "key19": "5dURcdZm9HvWLP1UQVEgh5iw5K1G9upwzX9HFexAyVDLuiybN8eT9SjrmnfHVd4qzZ8HvcypVLqVmvM4p8LWzUJH",
  "key20": "5exVBN9wjUnvsWNjqXAms7n5ybAuiuQdj7WuTwE79n5tGZ6jYYFUzDsG6uRBZeXuEg6eAwcHUCh5yDPm33zTFFE5",
  "key21": "35pqm9a1C5aNz1fcTVndPasGXW52JAcGXS1Byi96oaKNZccFf9rPQy2qNR9oYL11Q39zxUoTZGWyM32c8uvbFUag",
  "key22": "2ED6RL2kcGBQCoGJPk1SUarcQaTDQw1tK3PjafojrNmWQFmSDYT8cE8GdvNRieJukd99hnrKWK6x6t8nAi5RQqhp",
  "key23": "5bGKyckX3wqVySG3jSKSFPMaUq6g3NAut52eknujChnqtF3WNotumQZNoyGULhVDmVjRMhhntKPrky7ZUzey4dA7",
  "key24": "65nErJ6TQ1BHDp8cBkorbwgEVm8qw9wsrmusbbVkejMgCf7SipF3XdZNVFpAPe7541hz2oZUfESJ4Kwf9oeXxsGf",
  "key25": "2KPadBewU4fMsirGrHNiDJpzEToYY1AbBXHJg7J2R2orVUGVEGUidMLSDZpmR2oD73Lxd5KdmtQz3tdQASNbqy9g",
  "key26": "3DLm1GiJ9MZpSAkvidsTHaiNHvXB9p6RgYvgxN5m6tnoAu82cJL3VUyLYYzaQsR6YVw2dzYCaEqiEiA8z25NmVse",
  "key27": "2vnjhsTQm4cf9FecC5vkixFf2X5MUWJqyEhrRN8ynukY7px2zt9ovZzFBvoGWeyjSGLy1n2Bx19VSYMpqtemt2a8",
  "key28": "4N9e5FdDVcH6fkF1VG8JLch84mtQenEm4GiSnhWpQPYN3vMLm7QvER2gP8sxrmhGv2MUUK8sRhaukzFXrrWKbQug",
  "key29": "3kbAzpHMfV9GJ7JUSuEoGeQ4FxVsgKBzbCyAK9PxivubFMED5sG1abq8prTNgMqTfVuokPSJ6Mn6YFWBNapijn2u",
  "key30": "4h1iqgMPAJ7Teg6qthR862kqNhRCjEVPnsuFxh6TDmUdAwq24L3PcjREXiZUN9L3xnfCyg9iFUwp1tfTDn2vuX8U",
  "key31": "3otgTRAKEhwzCXn8Dt3jX4Z63bXHxYXSsfTC9rmgjXrhMuweovo1p5yMFMFzrfVBBdCsHrzdheCETjSKxuWytBWi",
  "key32": "3NHkS8tH6xAg7tcjk76c7xRDFXiVwGuAtVBFVv1PeYR9T49CsUCbdmB4GXrcoiQCxBp5bFUBtVZCt2VLewCaiyz7",
  "key33": "5y6JNfEBtD4qe6cSsBS7XUbUHFaKaaGPGxHnS5f1GChAbru8k5ttHj4twW7VuxPNkZPH6TcrkdVHVyRaFcLAvM6S",
  "key34": "5Y7Ykbt2wXqes93Z5GJGMnA1ELf9ipxpfFrGJS7SKYJ2WDS67hGYN3sdUv7B8TEFj1ffsKgXH3R9FgijA347eHcu",
  "key35": "2F1HFFiE81Fi62PXp14YkZABVVbEWrNyVnvE8AiPWDBmfV2Jq1zYj85T7rdt2Kfn1FpNHzv7GKwTF6D4K9p1q5zx",
  "key36": "2MuBHnYqfvNV1j5yYPDzxy8QWK9bqFxAfda3ZyzszpBwBy9ZA9Th7W2ynkJhQg5FF64Ek4BRiKENHSZCwsE5Ctve",
  "key37": "JbuFpb57xdreM2Qg7r7ibMduhLg9iGq2YQaZxzWfYSvn9RPPQJU4wuHhu9ZJKqTGvggXX7nYdytnyqN5GVbGBew",
  "key38": "Et9aAb2mpvJhVGsNGs2WCAJ7QcUBcx2E6Tm47Y379Gja4vptpTZD7FEAdU5urTThfDBgkC3rFHfxhDcPtT1L67R",
  "key39": "KiA5JQysyc5M9rKmuVAuMFbSXTS5MZ2VdacFx2eiz5Afb5MXyox2znaedNaPSpaLC4Nx4rgSn3Myh113NJHQgV4",
  "key40": "4fMpEDnr89FAcPAm3BbtYuECdFVQACBzgBJFChTpGMnAfqH43nUvTJXXdR6RSVU28e4emhSnF8imhW86r44zTBeH",
  "key41": "3FXUNuSzM7N1MkzdFjTrDs2XxKNbtFMcboFuHbD91K2y5mKgc4kiLksc6mxvDBtcqNhK9kzXFEYAwcTX5Q7RrSp7",
  "key42": "3vHVMN8tjuuMDf8kj3HApE7u4KtJXNUv6MxFzizm3hG2sZBwKUnt2hyQjTEhsv4YbB1GScgdcF7mKFJJT2cPSbxs",
  "key43": "NH95MKcgUDWnPuWet9y45dj38P2yS3DRFhvJTQC94ykC4wfZp9tgEcovR2BHRcpdAoN4WFAVQSgPn7c39b3NgsM",
  "key44": "51wi6MHo8vkjThmhshxWg3naqBNMTJrNb1nE5Leb256c1Z24nVMxKqCcRayhRvhvcVJ3UbbGNKGXbncjiamSFqze",
  "key45": "4u3X1Yp43cNaHVKFZXMuRa9YPVjRBRJ5L6dKLG22j6FexS1B9M9SyinJAdveXFiQHEoysYh5F69t1xVY9Tq57uWf",
  "key46": "5vvagGknA1Ne4V7oHyDpRQ7ypEbzfrYfFZXQztRMSXZ4ihTuZuADh45ZpFK48tppVHM8jwC1PcwvSdvg23qspkQL"
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
