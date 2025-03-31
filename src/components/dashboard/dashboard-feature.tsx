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
    "2EhzkUfjf9uwGCHFYiPxF5Z1JCMo6LWUcSkqLUmLiHQCE7kPn31RBprfj3pWNKTgtNUBuKGsCJnjY6GUiXuZsECL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RvKYuU7FocUiEW61juiuRrC3iMab1CrgNanMVVTjCaQ69x9R89hg1mHYGVNq134tCF9bUCTvvjdDvWtCWZ6t7N6",
  "key1": "3ojg9KATQ1cKRuEd5Esh6dNeAh3o1oA6CimxNv9MuKjqZeANjxRuFco6cvzVSxWj6aeSrGF1SRHF4NusrzvUzsU6",
  "key2": "4bLGoiDGDXALrg1CFjjbVna6TbgC88Tf2KcTJgEZ5S3qVPmAS2xm2xbpGY6TeLu8XNFFKJm2Yk4JNq3b1JNExE39",
  "key3": "36VRi3pVbFwHEUvpCuLntCmqnqHmHxBvJ23xp8jWaLYtVTetRn14NidWbaD9kTPi4qTDvihDkVimoac9zkbijb8L",
  "key4": "p68rUts9sNmsZZLHaJrNJ5ydZAkzknfkzp9XgQfpvBxcEsaH8vLT3KMUALjSZLKvXMyr34i32yk292oCZyGNDpA",
  "key5": "4v51hF4XJbn8N4pVKkqzf89TxZdCqofbJpYXMZgNRPDnFR6H1BBsZQ2bmLqbfDR3Px3iK458AfbjpXvA8Yur9xSF",
  "key6": "5a8iboLDEfaE7kcS9aotFoYCzoA45rKpSUuKJxRNG8x971KN1waQn1i4xQE17dR12tqg3LHLrs6JKjWZxpRmGGt8",
  "key7": "5UW1VffqHmDdUDWXqpDMSAfs1zDgwZjZmRckS8Xy6jU6NcRHSusvbUTQCArmHRhgppZPegmpa63MH1cysaWwFL8N",
  "key8": "67S5NsSgCJVYrYwybuvYGouCUeAhkbd18mBqjHmkD1HUWdmj6f8jS5cGD6kLnQGjDDkb5uLcpkt5Fua3AESQNDQN",
  "key9": "66fxcceeTLXVe1sstDag61ThVCth37TBLmbqMCuwNDaVrDADgVSmyb1ZyHywXw9yXocWGwFcv6anfYdqGkSCGntA",
  "key10": "2UUHLa4UxftBn5Cb81ALrP4BZQU9C72xgd2aLspLRGsgD8qy47jiigVyj2H2qGpFtnp8Fd6JvThGJF41KtComawc",
  "key11": "9F5ww3CvGt1TG6sqJkseYhXvrz1oHaq9ahahB4tjJuyJMZJNFh4rujtK9q2Nvoyp2yoJLXuCQdrXZmc5fZGmFPn",
  "key12": "2us5yHJFdY685KkX7FQHeF298gNrqp1Wo8zHhj4dXEmFRY5K1P5owdEbdejwALD9PEnDhCv7spo3pJV6ibL2R9V4",
  "key13": "2U4YrRXU8vp1DgxEzqGHU3q96qxVKcJsLCfBZAtqe6nFKQob2157SwZgPibzpuzUQuUj6Q9oZRmj8gn1EYMnr2dn",
  "key14": "3piE9fjJQLqW8YmRq4xw3yobiFDrN9Vr2XfpLmGFD2mMitp8CFVNBByeJScBBYuVGRggQAmi1gmCZ7yfEjSXSerV",
  "key15": "4VDFWMWSZFXWqDNfV8n3PR2jheFZEZgRr6TAUJQ2Y4KEDo59HK4Yt7BWjD5jSeaVNgKC4NtVqGaBj3mGwEsCZzLh",
  "key16": "5Yfh2snfxFuccSbj7dHb2tZFsVZ9xKcBbHxZEJzKFKd97sH81wot4QQ4PwkENscVUP1hCSLqxrFR7CbdWMMF2uau",
  "key17": "5PM5t9M3QsxcHgtQjP2Tz9EHDw4DTTdkkZF5JU6ddpfVJcdN3SksdVEyYbtAajWLpuZqMjgxn1uqatG5JUtrbTZW",
  "key18": "5wJffEqZWoGhmdcdNrciGuKNQ87777wpUYVU8bKPGV9goJiTkYCFWa8BeuReZjEDYNQJPxUaAqZ6VzBx7rzATPkU",
  "key19": "PfGtB74mXdsWuC5YuNtFCa8ARuPvmLXJH4KaE8MQdoe5EWN43SLpHURvuSCqicnLyA77Dy8KrK9wH8uweH1rSb4",
  "key20": "34TRnVNEdpZnj2539MkieDP2DH2RPbkRKdJE9ktmnmhyDu2p142W6vFcL3aHpesTnJfandmSLwwEnv5We7qgLPBj",
  "key21": "m4A5DitRYXZgfFiB8yKu3WdDTpkXmmxEiUnDZVJzN8Sb6ybxJxCSh7vU1oKcciuXUuXiAttBZNFdCQbUyeoQRwu",
  "key22": "4pzZYTQ7ECLchJweGQvJTFD4C9EJmtbCvh2TGvWKz23kScHjvpZgz1JFGj8UtJLqmF5kbXLR7P1ctc2Fh84vNvoq",
  "key23": "3HpoCjEhDE95dcmdbmVWS53jXX33oYA5mzKQBarCwCzLWq5mZtQKqkAAXQJZtVi99X83zFycVi8jYCVpMrKEmv1s",
  "key24": "C2tLtwx1FRRoJecQnHmqY1qyWKm7sQ2p4jndQr9pkK1w8MajCPqZ58vJ4R2pMhbzZcWee9GtK5SYG6dbE6wGbff",
  "key25": "4F5ATwY9aa9vGNj62ZHAJgN6Rid4k9cjKtbpBwi7h5UJMAn473gmHY1kxHQtxqVAZXCLK9YxfNgYyfzXRTQaYCJ4",
  "key26": "5xHK9G9WujJK3jx7y72wmkGHPoMBRwRYerb3fCe2kkpAyiGTzs7CNLhbNcTTRRE21gMMW4MdGFYPS1QSoNhSs7j6",
  "key27": "Lb279XtoQ55CopFyEEhjA4rS7U6KRUKohsQU5DJGVCV3JY11fo61MKjR1BDb4rkn2EWMfGbDKX4jnAty4HajL1h",
  "key28": "5g8H5nwcVa5qkugobipaP1Wscc7LbedTAdUh8NPNEkRCEH5x32zxmk684g813Fnq3ZzG3iykSf8YbNohhETL8i56",
  "key29": "4cPfc9oNbcicMNLmoYJESffU2pXyfzAdEJWuQrj47CiQrAozBXwVDuJBF5qrNcDtBgG8quHiGNe9rN2Si87uuD5R",
  "key30": "4QSC2E9ob5oQDHuQ1Cx1txrP2RmmKRNL9bEzm9VNGqEN1CRugujoSwD59C5RsRrLSDeE3tRqePLkM1TxwE3veqic",
  "key31": "326spRPj7pfBobPc24k8DXjpzSF9gnTWwtETsomoUP2BAnff5KML6AnhZ83VbkFAgyymDLKtSt8AWyTZQaCfQZ6a",
  "key32": "614cPXssN9vZjBt8DLrxnEGvDjmpzmSjPNvhFp3ZQRViyuzLw3HieRPfrnGJohGCpTNtA3c4Ti9qjxzAa6vT5xEx",
  "key33": "4ExcHFQnrw7Kmy5EFSCyHCouRVzHkYhPp2TvypizEhj3Nsqc6T6C6vPD2T5DGyyGCH262cyk22Gwu8oJd2kspEmC",
  "key34": "5XhEpjEFgZ3ctWhPa35qxJ7o2b3qijo4n1Y398rKgHv3QcXhrVnoPBWDszmVCqLePVer7Sjkt5Wg1wZr5mRTn2cL",
  "key35": "4Rhfbno1Do7c2cw7fEGHkrBWq5UFVyQt2zz8fmNTFQLMTedtw4yBShvfjdy7q3EAT3VYVBF49MQXAKgHTNuoQAno",
  "key36": "4Uw3FTHCfmyFVXVgKE33qhcfKRTfrG2P8PoAsEK7VJFEUeC5hk2CrzksLfeZuQAKzh2qhDgds2ZkcvMK4s7BLNB9",
  "key37": "5ddfi8B914Y7EqtmVQ1Emopk6iVXfgXtPqmm3Ck4p1gN2mJrt7X9W5KXR5oPffD7Ziw9QAWg1waG5NQrGbYQdTsp",
  "key38": "34592mFYVp9difWdfNJNsbrQGJH5eBgigY9dGgfPRh6nevVtq1p6mKowTUHnD2waB9F3ZZc5TGtt6YJ7x5dNCinF",
  "key39": "96z3PpEk3g6nTPm7PomeBdEvHKqcJymMJYiZTcCR3N7CmDjPd6QGsPepByDaLkUXFsux2J4BycxiRnAUZcUAmwt",
  "key40": "22mnfGuNtS8s4MTq6MyfCGtjicASTYjzejA5EPSmhx7o3u1dV2DkGxMVSQ84qeexUk8pedEzxEDD5x42vH1X3jhT",
  "key41": "b9BHvuugAgiSCiFSgWXRiHvJFYu3Fg75UBQXEa3yhe3qMZkUAfaPz2Lwmgk7LfLc1ehPKN7XXdEfaPVNaqL2Eek",
  "key42": "N3AFvYV37xLYdZ3WjxTwNtiEbRht4jJDgcwyixHW4ZVrRY25WxC58dGQ4jNV1T37fwfwjREjRrz67t3tRaAUNPT",
  "key43": "5wBb3RCk8HimSPJvdcRNuuYoUBNvenBF6CEK9Ge51p7eYXKEQ4biKrn2McRZuSB4T3NfzNUhnAQum8FdVkRwCgTH",
  "key44": "28BJeScrX8gMuiuSJzdq77fbWbgEwUHeViNBu96HHNbbxRQ3iqM72ipoZih3NJkuETtLwvvgPgjpSFGL3D7sYXHU",
  "key45": "5UPwuDXbYUPQRvHimYh2LbKoPyYCsPPVodobtVXrMFqomgqaarR9SBfFnbjAtzCMaRb17nngPVDKy2KiJWiQTfnX",
  "key46": "475CR3GwYKywUNLceYX5kgGSQN9k9XzS2CwPdz7wthYNeLvMny8Km8HjkYSGPTthsCJty7qJggRK84Gf28KvG3mn",
  "key47": "Q442LDxHCNpdns4raZ7JLcJgWggq6YhfJWA5cuDmKL8uWwrpUwqwXy7pSpBxXiNPFyJNb6SCFwJjCRxc48rFUwS",
  "key48": "noqPwTDDfvZQSAMvzJL5iR5Ke8Swd7ZRqisoiCN5VG4893oHoMV8Gs1ZtcHnBpopVSwY7VXVbmzTXoyykvWwjVd",
  "key49": "77H6cexSiexRajp3638DLyva94zfTF9Yc2RLTKNZcc456sZU7jtdgTkXWymrhdyBWJSVPx2eis3iemps5fuxaUJ"
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
