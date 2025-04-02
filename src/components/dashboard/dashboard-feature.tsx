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
    "3qSna2ZxijbRCochuJV2DcW3Z3if7L28ZKzeKVoBhnnhwNJEQVnNzsF2WxdYsqzhfiHfYwWJWqtuUoEN8jovPbyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LGATKiWEW7zFTL5b7rddoW8DCzx5NDFsgwKnGBHUjXC9MuYfECRCcShkKzjsHcBfALMhQNFcUKRbcQ5cbUx1xWP",
  "key1": "4JfX9R8JaZi5h2cMfqAt9rCgLAHvjUogV4WGFmLKoxxF1dhWyaES3aHNQMXft7PYsPBP6yk3GgYDa1P93iKb66kc",
  "key2": "2NNz1gCtfsDEaELPQVSQhaQwWgSstzJqZMKCWxn6fhYP26hP1g8CfhRpxW55aZYyCrSRc5W1i49L8jvQuEgSBTwf",
  "key3": "4qYMphvLcjNLtdLPhRCS534ooMQscWB3nWJJcwzfKWxxynPQfZdjCKdjhgKsfKmCqqdYSLaxmAi5k89sUGmtkkyu",
  "key4": "3drCYVqYhy67WatJJXkTa8MDAQ8DsHK3Cm3XgxYe5FuNquRpgxX6WXk42cgeA7PzsquUX5v8f1jxHxPo8zBgS2vg",
  "key5": "4H3kNTNRMvsutbdn6XK19zYMA62tbmTQxFkG18GcgTPY8FyNUiydKwPuM1fUabt3S1LHCWxf8N2qcTeiW4gUrtXp",
  "key6": "59m3qZFDarpErRZ5QnDyhKQXurWErHEvvrvoGCdytuw2CzdMBTWBQeVFMExi9Tad6uJNETPRvyyLNtoVD6L2D1A1",
  "key7": "NMZqqtFoGyUZonVBa1jvzyXiUeAWA7De632g2Vs8mdKigSzKH1Ch1Liko1SG35nwMM5uVmGoaq2DdMLwc5WSTA7",
  "key8": "2RoxSYWUpw76yRezv8APYpjQdXef8S8FdcYWANTSShcN4zbu5LvbmNTGZk2fjt3LAxHHvbheVrFwkXukSyzt3M2y",
  "key9": "4eQTbaK31eSkTdyeFerYP2oy2Dx2S7vPQGUuapHVtM5XvbbjoSsA2WAn842YZLoJ5WFsPpGV7qUQJ72aWqGzPcTy",
  "key10": "2Yc7XPzSQ9ze53NyYbfbLjnmGfUz2YZyT5Mfu1dMqQVZiWf1C6yiHzQFHxYe4o94yf4xmzy4tFb8uiJLKga9cVyx",
  "key11": "CtpDuuNnPDfT1JprAtDymKcHxrsUQkonHR3Fe17NN2WCWo3P5G4CTQaSCTJRprCAqcbQe9vFoUbpJL4oTvo8Jar",
  "key12": "Ly3V5BjP9NgFvDMuyQYm22qQAdVz3STidGYidALtV6vJyS8YXT1NfxZb6mqksK4CXQR4gijT5wr4iT6rbR2NQhZ",
  "key13": "Q7yauwqY85K2R8AWk4F8jEaxc2B4TvRAvHWtiMKBrBLB6d3xDzARs3GAMKdHWWFvVy6mf5RAiuNG7pUJ84QqcAY",
  "key14": "46Xv6QVi25DcTxP23GUm4bH5NvitaKHRjCxv82FaEt9iAPXoonevCG3iV7CLK6r9c8b4m1UEVTPkj7qsUeyrwHLz",
  "key15": "G12j9vJag1Lg65dupoqaYj7eT7PmgyYAZV4jebvufqdpK9is74LsiLib1eGAPDEVqUiyLsZUnyPWhqyMMRxnLW1",
  "key16": "2nKFViJXgaVwauoW1ERnMGnbwd4ztS73wDkkk3t7QrSGvx6ZbFmuWwboKACZ776z7JQicin9HdWTmbQUPcn5vFZR",
  "key17": "3MDASirtfJUWnhLSyfJfEPC8dLbejRuVZ6MbJSy7EkQQqwPyLCuDAfGghRDaFL6ngVT26TYtFjUJ2RVMYHX9oyz5",
  "key18": "49LJ7axU6gnV4VLaCeRK4zTZX7MKCv1hwzyQHLVvoJjeTbwABkauE8h9BjNK2T2PKRXvHf6XrvCSFaRB92bQqztA",
  "key19": "2dcUccNcqT7b2v7hHvAR3xYGCr8xps7z2rTaH5noqEmtdoF85vEnjjoZAZhEXVgcaze6ChgYEexkvJNgyb5oSJgt",
  "key20": "4yRAP1dYtfVPpxKWwDWRyHb1ZgwJ4z68AUueX95dp5PtfK5SiF2EBN17XWGVXMgmJTvJWgSxhPzsczZGTs61wQYt",
  "key21": "2pDEN3VGzV4f5pP7cGTW4t1Ns49j2e8DXyi1yUbDxbb4MkQbGVH1HpskRGP9mFT6Hj6cc11gVnm7LszFVLdDq8Po",
  "key22": "3FAufahZm94hEMKaAkmp7qDmRC6BnCWjw5mW5pV7HNpeSqcNb81owYTBotKfYXyHAHyJowjCjy9RAJDB9VvHcbaT",
  "key23": "3XuLj3X6NHz3bzxnfbwicBs1ADPMvtod1e87uK6HdQBQ4uTi46xGGeACkYhnhDH3GDRFHygnEWSPFT2hiaqfEEvk",
  "key24": "4UcpZLFjNTMui9XH6XAK1CsLwd58XHgQ6GUE8HpeJQrk75CLbMxTHduuWraf2HehBwSmS2NTqjomiAxDKnAYT6b8",
  "key25": "4iAxHXR6DZnYKpheUkWR9KxoGnYJWgjKuaxbK3TMGjxWdhpGsyCWnKjrGfYHyDczsGnWfvtXxsJ3XYs5DNkuLrjn",
  "key26": "2QdpkEoaHRJV88Ezh84pz41FWue5c9CkLdafoZebTCPPvZJffoiK1c8N2PheC65DxNsmatUGGtwZSRPKzR54qmnd",
  "key27": "5AWvXL6a4G9h9GPgyzJ8oUZSYU95oVWqLtxPdFzWKCshEcVTPdamVhpGsJrVx6ej6gF4tN7ZSPu4wxfJBS2wzzsn",
  "key28": "5KaiE3jZjGYid8ExkST644Zjc18JLG5m2utpATFxRVfw4YWU5M1u3xs77sL5vBS43YjvSRW11tgqVXoWNpyG4SLs",
  "key29": "2mtSmUAQSfqPhpaA34QnHcPe5F4jhx5EpiEW4ngL7vAkVL8jXGpLsrFbjk24aoBNjDHKbrTXx4TommZuCb3b3V2C",
  "key30": "5XhoTigvj73eskLGWLrqKFaazyx7NksPUb87xJgXgHbbMDYNVgYsbfkKcmJjAMSrrEMCgq7fTymkWfNRvGUwqdyC",
  "key31": "4QMkyUudBtbftGBjmPiiRPmE66nzagtjrdwk3JJo16SDFSeBMHx6ojNW7L3CoRq4y6VpZdFRz6nX97pQkrkdvVNc",
  "key32": "fgdFPvJj4VheoVShi73XaWb9qzc7uuzHWqt1xJSpyEL5KA3c5jhYxTwcxeMdJ5LG4SS8EQjTE5uUshyy3gAkQF9",
  "key33": "5wCuK5SqqNnoxGf9fo4KX3CvzwZeg5Ee8sFKmeUQpL7ddo4APtTXD2DDFMKHAuoejEbaegkC5HXwAF36oGZQNch4",
  "key34": "5e8yaSkjcYCUWBs6TMYJCejR27j6s8X7xaWwPouMkZrk3x4m5pYN7PdRqYMLNZ2BztsqWk9w5AK8gCvSHxN5mBVG",
  "key35": "5krZtWCxtn6Xnk1h558GhVHHN8kpShcQj8ASp1Khj8rKgvKeWNm9ULdK9vo2mtqkfmpNAuSuz7KKQu58ogdtkW5e",
  "key36": "4BW236qqSmdWNuR5sMm8hoRZZpRPUGHQbGR8Xa6JFzUrdnmVmzvb2yH5wDNuvuan4hT3KcVJY7mLW3JBSCQibp2X",
  "key37": "5BZZWk11ssqXMYzKWWtuQa9TadRgpMVtKTYYxVaBvWyCJy3DcmoTMeyzKoF5qX2hnuHynoHpGNEmfFi6fF3FeNhe",
  "key38": "jNPJCvVpZaBGaJVE2fSQGjNuNNwPavUCmfgWsoELAWMQmiUqiUFdhvRqQmbLJbdK77yR2fwvwQuTgj7DDXYdk9v",
  "key39": "2rESWMkQhLoGjokKGcH4wYEpyvZP5URAqEwNNLWecQ9mLbszAtsrcsWnJ8vVtqomyZL2dxfJdS1HBh59pgpo3XVT",
  "key40": "5g66TpcDToKHL7SG8cQPMfZ8RURsvZYi6GbdUgTRqYWiEnGyZyCQnxW4SdA2oBEHQCBg5hvFD4FXsnXXDkSskFSt",
  "key41": "61y4BEJXPnSNaEJYH6oU32SUrD1NBAVAMhwKWQJLYszoKUmX3WFAEqe4mDdTfXcJma5C6fGv95CCGBKEmNciAiuF",
  "key42": "49m9ChGjQS58FTCebnAKGf4fCKsKyDkmeZqQ4dZv14jRhjzH7iTh5pPAADrhxFMLoQjLUPGKZw1TjhszAwDHbTRt",
  "key43": "5AXW8dx9UJMGP9RaTUcVBfGm7tCCRgJrHauRLygcrGAifosyMWMCFesGRpZ29s1HHyRN46jYDAmELyEcMkxWopQ2"
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
