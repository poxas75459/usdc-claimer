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
    "2osGtDGjwyu46e6GD7D3Vqj1rvNjcR1KSQuARLVdYdZLu1DaDosph84eaqnuxHSw7JmbBdyUHFrJQy1CQ3kS3kPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rb1Yg4AXLybQ2f8LAwdXwmBiXyiR5aZKXLTVEabH1YwCagtzLgPuVhbnZ4nn6FduYzDWTq8FzDzJHof71K2H3oR",
  "key1": "34vRmiQX9ofJu2a6zDzAbKrDp9DAdoq31G4QNukWGTPSQWAgzU4xXKPaNUT1LrNKzRLdn7fcR92szwyoFeGpqUyf",
  "key2": "2emchFKiCkvJjxRyBvdL8Q2zoKpATcPYLhPXvXf54BYKmiSVht8dAEJPnuogR1CUt1n8uwXA6rcVDWjwcgwcWxMu",
  "key3": "5w6UTmXpydNWQLBUoFMSnqALJrPZNm9Kmc1qv57Dw5BepSGgxAh8Ff9uEhUDrEfoopQPP54Qtp7ATKn5CUme6xCu",
  "key4": "3GtKWcpm4CL1fK2Qf6nXxzxZRB5E9hqs9qh9vea2jxaEDyPEi8MYwcLd2xYYdUPXBSpbmthTBLqUETzTz64L7hBM",
  "key5": "4tCWGgb9pwM21mAgWE7cnBJo8M3rJTqD7JCy27Ha3rCucDJ2LiKmoZyzH4WifAgY3fu1BYGq3cCnYyyKcWQYFVaU",
  "key6": "4N6LCDiXYsr1AwKG2gwKVbMu7XRjxpb1d8VRDYfLhU6gBtsyWjJpU7UqMMJpUbN9p3RxBUZ7FxDHcRk8tbSghNG6",
  "key7": "Nv5h93cTj4DxoBZgXNW3bq2T2fiHc4VFjQymk8qn8Z37P84etv9SdXgViYMTqssSVgYSPMujV8Bq3QCrxo25scA",
  "key8": "d6rQzbqqfvu1EAZEYEQ5mFk5Bcgw8d2VavJL4TqRVxGPNVyuYnpUjJhJJtoFDpvUsE7VfgVpM6ZwGqevaXqAB1N",
  "key9": "2kxLBsEFHjjo9yqQGekM5FAkLBBuxRzre3UFk28oMcPdwosk27s6dBA7z6c4CRiDQ4KsfqqoxkLDVuE51f75Vcj6",
  "key10": "25WYdX8tb2FbdNAuNwXDQBPV4qBaAYMUTgMAb5YHAudqibs6kWKqUptZXCGBL8moPTfT23NeYEk4CXuLkrBmZwnS",
  "key11": "5hkkfdwYgSL2k1qk4Wpw1YzsUPL7qNirrWhM7eYddF97yMMtjDsrboJzEJCT2jfZezAUgufH36Zj1y2s5ZiyZdbH",
  "key12": "4Z2BE2TT6L4KYxesu1tbFqnDbuJq6CdsD8BfwVrNZUvmJapext5qJvvZ47ECG6tmQnqSvbxFsL98hRBdAZjpmmiN",
  "key13": "3pipvUFYy8zaoBqF2xBUFCTmGtUNVcrFMtfCtRGCJkbEZ9DM2zp25L2tnVy7iFbUSB8RyZAwzg2PqpgBBSwLmbgW",
  "key14": "3b2PDzaoRaaH2NMwpTE7tfKszkNdaJCY5JdCHJe8FLFuNwBY5yayWdLNSuzCgtK4VP6sXaj2SR8DeLE7E1bhMV5H",
  "key15": "4morWXyFBdNPSdaY8v4TvHbVApj1GNiM4RdnLbyLEbPm53fKZ5XREQG2BFtibpGmgoLSHSQbEA9SXq69msK1AwNz",
  "key16": "4YkY7jEYYJnMNQZr3Rjt16TxogFimNvciU9WsYBahjNWmbyZDT72Z7qxmKz6TgQn2jidj3oYPYY1MLSPWXMc9Hcg",
  "key17": "5C55DxDFdUVvVaiTtD6qWPGYinQBk4QE79Q229Q2ZzyDdDQzvn3x62nChKCevpbQfdVLJH8rTfcNbGFfySZaMz87",
  "key18": "2bkjkMtZX6AhJM15hYytNfHKUHw42c12RqpGjYE1BoLAwicmgLHJZyxhecxF328mH44kaNEidrpYU5bBPxR7qupe",
  "key19": "4QDHJVrchsLXnkmPuzLnz8z6p9h9cg9wrLygoquwwjpaN9M9YqyZEm9Xn38tURGBTR7HK81X2Ssm8pYvXKq4a6vy",
  "key20": "38mbSvVk4YQy4Dj8FjXeUyhjfRUs57Pvszn17FP475s6WmC1jjLqN5H48sfwakGd87sig1Rn4U4xefZtQXz9PLsR",
  "key21": "28FFCDAc7wN3WvtSMcpd6t61Eo7gADX35XgqQx4Uhnc5uwnf5ds9HsCKmsENJachhuGpagi9b4YBM5MWQnrBQqBF",
  "key22": "5iWwiA63oHBY6DzKgfETTzhmB7wF7mjAuDeYgvrLH9EUsGM27ncVd6FJpXBcUsKEyfcVEpqxVLAyXKgTd3LExAdJ",
  "key23": "3BMQRmCF48KFWd4LT3FKuCVJVG3yGgukywXEWbYrk8vhcs1XogCvjMgLhyS5LYYYzDBJ2yAKEpECM5kCC2KBrf4s",
  "key24": "GWRbJ1Cx44Kpx6bUiN22PMSQusg8mTJQhvs9SF7YzcdJKCMWcgeesnNqHqMSLKogUCnSaJL6VudZUFJjCVMNYdi",
  "key25": "4x1fTF2HvKXx2Ny34M1HVTkDxmtFTf5RSmRUmMDeDZgnfJu5bKSBpYGFvJY3XATLwts1JUYiBGeP1TNRyCrsNYkU",
  "key26": "64spLCSyncT5avAuhMTRBeCS7qV9Tb8GS9xxCX6JQ26zxu2SRZCXXuu3atqPeErdAqn3sWaTem2cvN1XsodrpTvp",
  "key27": "3uuSc1zTvFTpfhkC9hJm5En1U7SwcBK4j64NeukoWYcanZsysHuy9kbWaXJpMZu8NemWhcbrBFDittu3ZsAqbzrY",
  "key28": "2QGZTNQVSUNr2ENsfM82iaP2XLEWLqybkyBbXnirvePGieinU5n6w26wjqXDeCXeYibPSju7fmTB9hiZiE9S4NbC",
  "key29": "3quSh5ArJEQNviF4F3s4C2VJjE9HXCQPAwwsEQQYLrrwYiX6zrLqxtaTMFnqiLYMSLfi8k7qdLZq96G6YauzxUxm",
  "key30": "3LHb3SPdWppJju3SMKMhYvtWch5iwJ6QTxY3fTcoTESmrGwBshthxPAHnci5abu7rTbA6PxUMpLKGpcrJMhVz6Q2",
  "key31": "31fcQVPwfa7CtAoM8wZQQiX12fqc723YEksfxYNvd12TvUjQL4nWSvVZRT5aWBtTwwGkWohDDnXBavg1wr14cdHA",
  "key32": "5CB31SxMT7W2e5xh2uXSAQrffM86b3ra1NomQsK9pb7uJtpEjPw7LguHJgZ96ePSuV3JHvDmLdcm5MiwHqbiLDZb",
  "key33": "4CWx4faeBgfW1J2Ch8SbcCFexMihmgbWnumQzTRAJ1q9Kx5ESXCRPt6FZrFToUQaXKD9nQ8WL6Eu5sTPozVin8Vv",
  "key34": "5V59v49apsoTwmWyqsHenfEAN9q8RtMZoY9EGHaQzUjZMk12aKkuMrWinxfyiQ5U3uU1MN7nGgsiGRR7XjrqMt57",
  "key35": "24QjcP2297rgCLNE7VJGLpJUncE45vuM5Wg7AiFU7Xm3EaQrvARgaNQf8HidmnHWvGs2nKhiWcv5rxdXvGyhb2Ay",
  "key36": "zLgt4er9enDiKr18aabXiFhxKKufrULy8XZJ7w9rBCnt8Y57wQAgjXg7JRRKDAqRoHHiQuytNMS55LBbC3oQm2n",
  "key37": "5QCqYq9DwzATmaWWqUeo9X63oHDHo5VgE9RME53kFctqBhTMA2MHoydiNyvMrhsUaRJgHmMRTEuT1nMikhVKWsdJ",
  "key38": "34H7DipvLXTvo4asfo5Gfu1VfJ3NGGJY7pto9khswniFgZCdWhMd6ybt2pttuT2yqjYW2RjSXhLCJpRh4FLTyLKJ",
  "key39": "A3mx2HXwo9LwS4Geu2JFzRURhZKMWr161JdZhxPoe2grHhfVBum3Zje4Lgqwai3FEDLDyDY2j6C9Z1UJ82THvUR",
  "key40": "62RxNvJtBbBo8DFSFj8PVLbFsN9kjX13TYhGe3EJuF8SVMLCLKiFEhW2WYaRkRvv3D1g3iezuddndW3161kFiyYG",
  "key41": "5N6xAZpBFbNaex54aDrACw1tYH9fCuBv4tZvvk4UNfC7ttyLyibctKp3HEMRkB81ZTmagecaTx3B2zsj5SRnDKry",
  "key42": "76CmkBZpqCUquaAFhLFCrFAnUJLB9eMnaLXJJyYgNGa1vpMSH23PkBX6Cj6Vutowy3dQhWSqbGTCjFEaDfnmzbX",
  "key43": "9Ltd5QhEc98noKNjoZUHytr59QuHEhbdQ1LkNw94uDeAqp4rwarGFkRq4gUVYsJ2mjR6kJGBtc9LpNUT8h4P1FZ",
  "key44": "2Mh4eK1EwPatCp8ZU3LnDFyADHLLoHkKnokhn9jWwqDprZsQqFNWbVaHKTvCNKM3aiZHUgVBznQ78W8vjMeTc23H",
  "key45": "5GcbTkyq1Q9d4DJ1C3fjiwGF4Lvei5ZK81QCiPw5qLZfhyVbhyg6azstinFcWdv7s9VsCQFFY2TynkxwdsrJnZcK",
  "key46": "4uBjeqfQfN9FPAbM8yrwU9LJgbAQd3Z7QdDiTzWR9EWLLpSPSgWmeWZYzQUEEL1pga76iqZb7EjrUEmicpBoEjF5",
  "key47": "HaP59G1k75bzTJAgU8Ga6aH4cPzfHZkxx3UK32L28YQeNakb6HpcTWbKzBGwkzzL1rqVB7Z1Q2KiA9nSFpmJwEL",
  "key48": "2ZyHny4PmJB1zz1fCvhdEr8rqqat6a95ZA4PLS7ju4ze2CEV2RuxLMusTxqijG9GhSWskJJp19iyDkm8nimGN1Fu"
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
