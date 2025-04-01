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
    "xwRaMYLYkfix7gqo7qm5N6nVSLt6CLAZEJ1QBkYktCARQsUg6aXqaepNVmSwBofGh1fvu53aMguyN3AChEF8oZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JqyBe6foL9QC6xSdep3bxrrCbquyTSnoEbhHSx9dSKtXawfDKxcbpCjP3HEMwVu3VwyHv14Vu4cu2VofJd9L2i8",
  "key1": "2cSUA8aVJFinA81e8iDnLJpW155jPxGB55Ft9rvM7QgPG6maB8G1mygGaDCVRhsHdqBju9DQ7d1Q1KSnYi41xB1p",
  "key2": "4F1Q8a4u6hcysn5kdMtCKYdNRE4BMiBQ4pUzC9GjtxnUpS9jCEeoEB2Twi8DviNbEF5wVFErDSXJYS1fXRGFg6Dx",
  "key3": "4qMWSZPedBsZvMhZNLqDcyC6rpXuK8kNna52DweWMrCbjVSDuHPdSufvUq9NnfvD6d51Me3EPiL1R5JC3Vad35fP",
  "key4": "sMp1AGysB2Fg5w7rHSuSkyCBze7tiQVGavziW98igvmmGtruAEoPPHQCuWA8qebnE9knxsMB8vDafX3735xae6X",
  "key5": "7BWb8PMYhrYkkAC9x4dQ7SrKZpaxh2L5YhtHn6xJDLHqugfbTThNMCvwHuoY2bWUwcN8KPUCZmKw9qQxYoXWooa",
  "key6": "mw8i3zqFUXJr9SEJL4SXzaeADJ1gfkEqrVKkxDLdBf7yUxG3yAWwbapoGTSgk8k9DoKxtjfejWLub8grk5Bv94M",
  "key7": "2CWzmXEQfr9Jv2t74NmvFQysJ3eRvBmKwStV7VxVZtsSury1G2DkYpydiouzcEXpKNBZ5sgdNFYbK223RHcoHdSU",
  "key8": "YfPSXGMJYdLitBBgjFHnm7czQwgcz43PE3JF7pUoYH6bzwrQtawYX8X8J82Csi6xJWpjGwRyXdPH8WBBAuASaGX",
  "key9": "2SvnYzrspMoNCfeohsYJ6siykqTm1kLeirRSi51CziSuRa85JzNkywrL94BQ8neP83RCto4DFxfQ6hZhi1iAzNgE",
  "key10": "4yLSDsLK1hEz1corQswtsZQsKJRYhg7CAm9YCUw5dgErVAsM8QWS1FQTsKpa961hw8TQ5HpwHeViGzFUXphgWNVt",
  "key11": "2VXLi3AM3SBASsTbQUhfRYPjiyw8buMAA27u3KYwvfsEMxM8FHkensBHchrZt5f79BH7bCQ6wUkHDPw1qxgQGaXj",
  "key12": "5S5kag8UUAXGuDo6MbxFPcr5Lgnq95WeEEVr8zHYTtwxSn8dpSTdY2DGkQMFbQitFpVZgTFyTRE1UipJ2AoUMTGt",
  "key13": "2APgiuTUyCqnKRS8Qw1rxhchpfpHH7BQC1ej49U6YyM56mcggtNs9B1Azqt8f1fWC94EMPXnz3BeyhZhqD6y6btk",
  "key14": "vtZF6E5jWaA39GLsqn2S69wB92CbRBJZSmFhm9iB3uiGBkeVLrpkP1oAXY6EJD6vvbnaxFHQuF6XwsKZrXwaLzj",
  "key15": "4eh4XoHspY9652mtMWr9czsJS6qFA9p7hGBigiW263uqwhPYMXUu8RYXvc4pxiNnjJWj91JU2RH42R2w3WACN8ui",
  "key16": "5EfY9qNc8UtLvGz4cmH6tLm9ynExN1mLLRnVuHLRUy4hdCmY6a5A1uPEPoEkLSBoxRJvrs4q6wHdb7wfrxN2gZ3G",
  "key17": "5288VUPUBtiHaYbtAcVTVFVurDPW2Bb64MeMz5RKQZAfGhKsiUdptY65qeE7gqQxNYpw4HNsUxvupgGpMLCo1pt9",
  "key18": "4q5XKtmWCxGNXgTcCb1qGGQPeZvdMGgA5pvsJW99qCjLa8HPCu6bnaVNXUWR2rchuzP24pknRhxFWQK13FfjpQQW",
  "key19": "5UkLRmdNjgpjn8Xdt6jhBZQjk9VhfRGY4AFfkhGtXuvMC5Szzx7814VE57n2nBZ9LdWBdUCPXiUgar9jKGday5X1",
  "key20": "2PJaxsdRFiuDFBbREUqi1mBG7e4shk8TG6KSqf5Zof7Wvj8sVqbBXB6vTAR8QzmovN8WbUgPjeuJPc7WSGvqdH1q",
  "key21": "JsjnniRyJpj6QheF9TLjnJpYa19cfWNFaiuYUCLMXJ3bfWWqBaBjNABJYXyYu2StaJERKgab5vGjTQN3y95219d",
  "key22": "593Rws3RcWM47ab8PiQgwAryoUYeF8emBxyBz2Y5u7QC2yz13Wqezxc4srS429UiWZksd3GHvMzMZmNsUT7Wm712",
  "key23": "5JQQdG2TBf46K7ZyThbvgPCkW8HwUMDxJzdV6FmP2hNsLaqENZo1QTGHfAAk1MhSuWTT9crKMjTTmHfcJ17CLnzd",
  "key24": "2VPSJ2V2KixwgUJcT6kW36xJr2XFUGWnWXTxb5GLuL5QEeAJDnsYhAeYrAKkJXTrWMhggNpCgtMs2ViATTvBPjSZ",
  "key25": "2qMLaqf5DugZ2HNr9wshLXGersS6dutq8tKXV3jqpxZ9KC7BWyHjaxL6Ph3By4631PwsDD4LGBrbj5sXUYzMfVNB",
  "key26": "3Tc9qHoBsXWFRbV7FcNi9yCrX79CgXCUpj4oBCHRzffMnHoH2k2FyXfByXevUfaNNNZRTin5kCrMdk2Qq4Z4Kj2X"
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
