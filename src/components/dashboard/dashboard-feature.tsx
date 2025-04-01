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
    "3aniZEqs3CHTALhCGXwbWuDpY99Uaargc45p8mpi5uvmGsFjSVUhfaJffF4iWMxrMwtptwoD7EPyq5r5kVaazgdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "244rPYu6gXC7FLdmuTY3FYgeiDu7uzpPRcSyN2ZBX3GwVBLZvhQxcunyEJ8r8xkY1dQhNRPzzbjKMzaJdQqLqUQ4",
  "key1": "5bzamrnNrxUNXNCLYMHByF7wGtHuBs5qaGGqj8XXjg3jFZ5mA2ALF2DXSbX5F8yXf14pEaFFgiFPK176yZbTEiZ",
  "key2": "5ax86KLDet8uuLHY6F9PGHLyTF22xHiqVZuoG1sso5tL6Q4YBM4vukGvZbcPuL8QhCqfkJ6rERziVDREhFn3TRwN",
  "key3": "iVn7t7qkhaG1D7h1Jshkmh4s57tizH1oioiLnEDVtP8PpU6WyE1cnne2HCZWCUc2bsE1pyZtyvdcib7St295QSP",
  "key4": "5fu3VEpYt36nZfG75kX8uwDz5Fx1BhdnGJkvYS4vbjMgaxnRKssQFvLkuyWdwZQSpbc9ySEKgc2ryFx4M4TNNUP4",
  "key5": "4qPRcNwpcPWNKsNVYroy6d6cLrKDPsRseu74JRAjmvvjE7E37TYPj1K52uu7fGMd7iZhwQxeppZnyus1zpBeAZMk",
  "key6": "4QV6KkkhPXriKo2bmrknjFsdGqjxhNAPGbRrSCKkwXQKjTXF7BgepXCLJ7oQRPyZN72fTMb9xucmAczFmPi1J9uz",
  "key7": "49XYTyh69MLCEDctsTyyLKA1iojBCn7tjVjqyFuWeMxXwayovm6KuZz1Q96NLRe6QnHntzSNrNQAZEe1HCsGDaop",
  "key8": "4R1iz5iqtboRgenVSwc5nJsEPYBKChw4UUdSkrfCYaa71bvwVMKtw4WGB93yDvUcsSTbnNHYmiTMfDkGJhL1VNL5",
  "key9": "3svopm2bBaEnK1Hp4RFVqoJykkYvDXTkmJbdAN8iiYDk4pNyh18oafWW9QGQFGaXLEfAFKvoi9Vo5LjNwLJtgosh",
  "key10": "4Y31dn1ndUnZf37JLTWbZAQY8W3rBjs3Gc44eA7Qq82VMic6PdRfv8FSwNUmg6Px7FBVHKm85owotFwvLQrdY663",
  "key11": "2try6UcEbTX3UczgyAV6nX1wBA9qZ4uFkiHuXxkCqbnhMLZUsJ5xpPcJ27HRqVKLN1dntvhK49nC9qoKQrCiz582",
  "key12": "4G3UFFFToJVpEUA16DEfQayB55niyG2HyU7z2vYo52K6XXC5tsaw3ojDchEqaZEmNQzzMY54e522BxCRMkpn2GsY",
  "key13": "AJpQ4igWxQV3kGTvHJz6Xt7kT63SSWBcqA9d8N3xhmXknXdwn6LFUfTAMdqdM9KME9H6d9ZhrN4MhoT21bfu1uL",
  "key14": "2bXt6qZ7ih86MXXzH6j8QLgv8uSVV3n8PQv2nyLiKyFkE9FcwPZS28p7Cow9zygsaCEv6tL3xFQdGko8uoETFb6R",
  "key15": "4AXJtvw4JmUCtRNL6WuHUGGG27Ksg5spH2kcCWgcpu4isKTAnG78jWp4pdkxYnXWNfRWFsrjwkFUPcbvLRZqUjha",
  "key16": "57JeJsEvEnFaEmSz8WVTQahsDQk47TJ5yr2zqipFMLaNedm9ztzHWBWLRi4oHLUyLXX2mupnhqZfCgcn6nBCRwEy",
  "key17": "5YL4DN54z71cMqH8GFjpwXLcfuYT1qmjEbczRxGcB266LK9RnsrXYJHXxPB2ycsiX7tWVsNyganEo4q9gywg7hJ7",
  "key18": "3uc8zpRq7P16iTobf1UafjR7h9eQ7S4jzC3EUPBsLVR3i4VGX7TCjYJUuq1rgGBfoA78wYnq1DmTuzuVQKKfK5Jn",
  "key19": "4mtoJrQXGEmdcjquzcmNGPhjGwofPMoXreeDpaTXmXestra6nDfkL8ko811kkGKzxPsfjE3kC7PSPTdtCkeUMoCe",
  "key20": "P7NbHCFvcHGTKaWCB8ZJu7U1VHVwbHiaRJzJq1rnYHQzkFFQAErvgh7kMxvnm2Sj8gnJCrUp9hgeMBeJ6haGxof",
  "key21": "3qYLrZidH5yuGHtQKCiGmS75AuEQAeFY9SJuS1gDogTeBwEtfQmWHMNmGsmFaqzmcWEXT33dtEDS2hPbkSCFLV98",
  "key22": "2NmMs9gUFNiSxk88M45jamHxNEkFrzBC6imPuuy9evNTWyBU2NrSNtf4SerenyfvqpFwEwqkem7dpNGdATTUGB5Y",
  "key23": "5sG8SGkXHsPqSRYKgAApCcvmdW6C5M4iiNBQLykBMR2sxz6jB8C33a6WsBgZ6ZYqdAk69Sbdyssn8ZzMj8UeTEhD",
  "key24": "5kPU3KNkJc2XmbmT3ENNdKig4o8HKsQh47A1XAcmSjtcPBtf4fJWaU87CdTdp8oB97QaK1RjRbSxSY9kSdM73a3X",
  "key25": "4V5fVnY1bFyCVa7675wJsYCj4uNYMcft4Ec3egBjePGcrpQEAJKFc8xCiMbH44avbNZieaLk6uHNMjs4m2zg5uLx",
  "key26": "2Ln31GUEPbms3JGfm16U5TrFdXF9gLtRaZRKjnWdrxyysQvPQHS88Lk2MuYyNH9aQr7rvgVqBc1CLoP68GvPCzXR",
  "key27": "2rj9KUeQdHjHBNa96o2q9ZdJbcmRswu6atTDkLfVbi3vnJsvkiqKeKT1GVssFc3xmZ5VMegSU7e3uuoMBsD8EH4p",
  "key28": "5WTN8WXy3UXm4No9WUPxNQNJSiTHBwSeb6p52gx1MquQERi3hLqMjS6zMYnrw9ReUNKDZqReMp4m1Vz9Kp81C6U",
  "key29": "2uereuNiDXQ8uxnmKDkmHtfHXiJqhpqucbYEaR59QkVW27iG58b8rz9F1eGo7EJDLHWzn1zwEYJ8RARdx2ETvgzy",
  "key30": "5N6iGN6B3Dmb9J2uDbA6EQwE9JgWFxp2ttGsRcXP6E552MnwNSXiQNZjazXpE2RVhsDG8ctLZKD7Qy5p9GY6MgS1",
  "key31": "22zAK9gRrTsC8sg5BCCMdgFaG5VNjBks4Gzkb2dSCmdWC2aiLN1jVszXHfpqSTf3xGN4LZdoYnnhuSzBHDGYzdtu",
  "key32": "bCBu9r2URS9pUbjsrQu6Aq2fEJ2neue1a2W5mS2Yed9JTUEYizTGccfqQD9mTUrUebe7qzFnZrkktS2aZSSyzGq",
  "key33": "2iqkrmxeQCZi88C8E3hHvGoBLmvRYdibg54eYgLb6C2nToNVH4g9HrShPifUg1aQxkHymjqhrsxJGkfmuyfFkiSw",
  "key34": "3zJz3Sy36ygyJen4hbT1X98YbPiGqxpm1fi32F1Gc37JuRaKSMMpi7eyKYN6g11RvPxbHyRyMuvjy8zFUAqu2bS5",
  "key35": "3canm2AfVQ7trhd81uoXox2cHJkZEFxHgTAT5YQLvtZBExHH3f73CQhcpfHYVTQmSyK17mQndG64KHK7JeZYwwMm",
  "key36": "4UhoegujosiieznU3cnTzqgZZNk83bZeCHNtFefp2CCxn1sP4GdhL964eheYups5LnPFUMfWr2xpiPfzdHpGfpUF",
  "key37": "teGz57H9TJPs4EwcDcroVLmJyqCZsDGkuEdeX663LxhKYFBkXcdLWC7tcSBXxa1YyPeaTNsbuizXV8sPp1wxerd",
  "key38": "4Nc8apaLq6oQKdBavHpPGgnWUai9UpyMh7AKz1iyyx6JMGAzDY85PAA5YzRC7t65AhAmk3kFYAP5UJCgMqf3Jz9X",
  "key39": "3yjDR6AFdREVzjEhtFPKopjPVcaEfAexmhcsBdrLKFb9vd43cxSPEJonkT64yU2zKaEDGsYPfChSaxqNvVYZrzzi",
  "key40": "4A3mTAe1RL2qD1GCCN1cFzKMvpxhqdPxQSUjJJnaULvMoiKqGtLqkv5c9U1ub4m6Fmzw7RHizHvExyrww4MBWVnv",
  "key41": "5RHSwqQCxpAyDhQtNvGf9bGMAn74GbUhaEXbELUhdN2YrN3Z3y6k2BT3mCDG1fcMds322qSgDNeP4kGYDEw14Kkm",
  "key42": "3tndAYi99juqXgYjXMpRjyP8mL4CHHFACNdsnMsMNuZCvBhmdZCayoQYXhQCsS7SDPu6fA9TVT5Q8wecxoxdZEPV",
  "key43": "4tEjTByVukJCZxBxTGyFEQFmJMTGhordXqhR9mK4CNdJgRsFkGoJjhLe61fRCytocWgi28ycaTX76jE1to7SDfbs",
  "key44": "3aJGf8H8bsms7S2w9Nwrdn6MZUuSsnRQBG5N1T6npWp8YihbMBaAXybHMn78Hua4yaVhmYxjRC5vgSc6sRwhvuUm",
  "key45": "2bR2DJcnnj5cjZjiVKrYZuznprSqDqY21DQSA7BAmFxGuB8WkiDd51t2YtdEY5BMLhCH8UopGK2anEzwj4GqxjvQ"
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
