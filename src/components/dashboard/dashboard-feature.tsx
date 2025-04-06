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
    "NWnXaQvntRvWJWwcUC96rj5aHo7riAB5GwWu2xxiMkuzGTueZTHcyLDfGLPXsg2EJtVCSZp41EY7KDsNpCCxUo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DMmfEennMuxMa71dNmUgh5xp9gVNzW9TJAzmVnecQ9hgHtw4o2f9XqLkE8PV62vwNagKoayH6s5jz6LUnc4UGmc",
  "key1": "2U3DjShS5n2MfRqcJkNpCuudKecCGyerYqJAM5na9n8ig85u7ovJ6NheDo3NkjaZDQd3jzNFrjgCMwY3VaKnXd1m",
  "key2": "35nMr2z2W2r28F4RZQbKDnSo5i4vgqBDBAk6LTQwiPqwj6TsmqbSvoE2guCNNTpB1btrnFKHWpkeXq1N531DH8ks",
  "key3": "5WzHXDdQFXGc22vVGqizQzPPUpeZd8CyXa2bRnzmEasoQj3MEk3LK7N6LUdLF1JLodbejFrgK1N3HHunW4dRufUh",
  "key4": "49zPtWKxAkWRvgk2Mjjs4a45kVft5zUie81GLLWXABaMES8YshWRkBpVd83wQrgTTp9FEredN5R6aNAd4iDrWGgL",
  "key5": "5pVoMPT4fHawCdwxeqY91dkDnhtsLRyZoDn3ev9PhewiH8wbFABRo4BwjT4ujfBamgbxnTrcYjsjxU49xERj7waH",
  "key6": "gU1VHDjiCpRqob3W842jXK2eY7FgAJ6rHmC7kn23VsyRvhsNwnySNxNTCC4F6qTRSPUHT6HwY6WpXdPhFTKUrfA",
  "key7": "qyxWUueAV9E3gT5jCzZZVtPd4nDevZBfgf7EwyrCR2gEwa5H92w4j9QgxBkFPdED6dtyTFT92My8zGTjBBpRH1D",
  "key8": "99zMhfP2E1V5NkYaYzpqofydP1NRne4uaaLdoMfyJecTznvwoedNJEFub4RCBxLhdp5CYgzSwb2wHENvT8NjxUc",
  "key9": "22qegpMkkBsHDugjXkmaXcGLWnDB6z815aPKNmqvPJpMhaEoSoPwMxEWqE3JK5kCQ3oW6z54U1VYoxcK5cjjYtyG",
  "key10": "2G9mQrA7jKahvsFHS4GVFK69ZqCAUffZrbafkjLad3VFQkRyCzoiYpYZermZyytU5u573hmKBMUKR2SE5CfwMsy",
  "key11": "5vFtdBVLrdwvJBoP5WXPMkYC3tKJgTmiBWiq2W7YBrDa5eL4LBzPSSRvBwsQUcQUFRKSErfcc9Nmz4rCeXDUS2gU",
  "key12": "tHWQWPNHstRxvUJWqyUCbH6UVaP429Q8FgBeRU1m8VLrkxttenjdvrCzcNdkt3MDjRMfVctGC58yMtKXV6xLVQd",
  "key13": "4AzFkjUP3zh2MuFzD18QsgfzsWuKe1FgJeN4AToh1uHjCtKWu1z3TMKwXSqNwVnAa5dCNPniikgyXp4UniKRsYsq",
  "key14": "3gaFXouhYXVALkz89UiGDaK6CkeaaDDXxGaaEZt6ftr33LKFFtuoJG7gZq4LpwJRpMoaJCgSKEaD8DzXhB5Xu4bM",
  "key15": "5qANHZZYMADMFBAxbCE3xSLKc7J4Vue5fZ63pJutLYUYB1u1jtcPFpBFmEB3Kq8VxFvLu3NNdh13Bbo69UNaLQW4",
  "key16": "UTKud7Tv7bf7KzS4qGWA1b9jGR873ocwpejHFs82YvoYsioUUBtqrpFMCfxXT72NUR9WgMZrTPBN3YL1H6QutZE",
  "key17": "2YbesyT6bfAJJHtNEsSpeMSmAGtA9BbS6qQQADAdTvzVF4D4o1hQp7fdxna3g4vXvfu3zwQF7mBDKNnx475fp157",
  "key18": "2w8CMuAzpB7DrPB6kySfPjsJkn989Q5Uu4aKKj1QMaP5EhhWWbt3YKXFVY4knAsMngzcNGKvvbssftwSqs6adrBn",
  "key19": "2VfeVpFKwCtHrV9R2RWar5cyR8XpoeFBZxtosgZMuQpgvsPqvwSDQSpfYfLe7So8jgEtjLcWCiGWEA6wecVmGJeG",
  "key20": "3EwuXADcGCsKmiPskksW24KH3HW8pWrQvJPetCVVEmji19j89Y2XvABa6axMZDQuCbRxjypK6d2FbdAKipSrGPTM",
  "key21": "37QaMtHr2VkZQLAa43kMzheC9vebrnh5NJ9M3CCjNTSc2BySH6DGi6vyUyxmpP9ZrGXaUapEmaXYp7qacWn8BDpr",
  "key22": "4ScSE2NGugQGeTwdX51vz6Kkr4x3mJjZ5PR7G6gkbNxfXZWyDD77QeWdMoEFePr9EoHMoP11pqRrghLYpNf3z7KW",
  "key23": "YqPHc6pXQuSRk37PWzojetxhXtcoEsEZzX9TxubXR7RtqMLawisHMmMCaukPLgcmygyM55G5fhqEPufBTu3vEmx",
  "key24": "VAJBqaKsLbWcKFtsNgVWuGwaH2bJabPbRJTYJzmpey5nUsGWVyLfZyvkbjGNqeT2MAPPvZvUK7rUK54cQ61Qejb",
  "key25": "ZPW6zmLMff4yhMPnfm5HqRs7DZ41SxoB5p1KinWX8fqGR81SNf1iSre5ZQRhP4ZjAR9B2D96Ws45A5kwh9A4Tuw",
  "key26": "4PpGoWdGaMSqQ2KCDyddePnYCzbgJrd76c9EyeU2LuJytYEzPTv78WqadhfY8YyFukPuzU7RjjeGqC6Zb4mTJDnq",
  "key27": "56dt5CoKkEfvB5WB1dDCSvdDmpukNopxBmSwBSdhsnJ31GyGp1CN1qPCRe9eBRH5dXZeLKB9hEjE4qvDoxhVHrBs",
  "key28": "2CGdo4SxpxSTnnqDnum3YA6ywAQRMNeeEiuZSXQagHYadEUKKaCP87zmL4HNKGmoKGLTffKvwsqgsAfUvLButweo",
  "key29": "2Gdrv8suea3dGxJcy2qVYWgS2uEDYih3FV9GYK8G83377FMYWZMnNuFAZ2ku5UqrxvhpCmMXWP8eA54NmXTYfo8a",
  "key30": "3qEibYso6XJuEZF4tNZPhjswHKmkS1gYxX9iKackNbgnA39exFgd2656TmhaapwiWSCnvSyhKJDsok1Pwf9KdLGC",
  "key31": "8MkmS1KHg13dGQawFwoMG51rYv7mqHnioHzDTRW1mGwbKRXVk3VSm9f1HcAhavFCmcG1FHLWkH9FZyMYy6iCf9T",
  "key32": "4CYtmrYK3YCFsAaZQDRQ7fNZHLUnaByPWF5mT6eS6hPhpFjsJ4apL8g6cWj2P9F2aHHdvjNfVXDKNE4HrLsgcGAz",
  "key33": "2t7QRjMP3HsJeEntqPb2CmWhLXoMTUkXTKFTRdr4FCUU3LTEKmgCpt7WQxpU9EMUip7dQ9CuZa46PrzYHFX8Xmgh",
  "key34": "pBZoko8YUkEVWJoKonNEHpbjxbC7ESoFToSv1NJ6J2ZyfwRdZrTNn5ghMoemRcbaqPUjSRec8ps4W8pVnJHS2Pb",
  "key35": "2fYB7SjvZwNv8p8treBdHbsjZ8PpcBNsZYMHrSfsPdU1VkNJPFs8ixnSPd5YDjRRRacqV228rckNNCJSvi7nTsrJ",
  "key36": "36tKtZ4df3VDuyGd6DZ5z2NwtMXSbTgvJuyxGjdkg2G5PqHszXkccJLUuxmFv7xsgzyEZ3To9JyF1iZb7gCccKmH",
  "key37": "K8UiG32QucL1fvfn2eseiYR3F1RAYLqRJV8Lzi8DkorqDnNiCyGAdcBZEhRbbNw3qvXrYYeb7ti9kLBAoQ8y7D8",
  "key38": "FPGScoHjUiVgQJ3AyrYWFo845ZHMPuFbULH21s6c13wpvyKji572azoEBNtYgmZzmqS7HFn1Nn8wk5uU6VRWxTQ",
  "key39": "BqnFb3MXJFQYvYTZeBB3kNhnBmDjiNxXQMxMf2sVH8qXR5ucZavFHJ66uUkvgNhRBuyQ8oyQzSXcqNgdjA2wvqp",
  "key40": "2G7P3T2xbqDw66bFbVKvEG2TD3R67CBDLpYjqvYxeWDr28qWiEqRtPG7eeqmMFHrC2863FQoXcycfS8V1WJGBGX8",
  "key41": "3zqWE3yXibbmVpTPtpbJZqg55Pnshrk4TvksBkCxzbBWok7E58E1b9jNL8W4R6wugK5cF2A8PBNai8vn1Rf8gq2j",
  "key42": "2c2uzYwSvT4VEvzAHKFLBJrucsw9TBBUBCDAsgc7mMEj2pujkQLFNHFVeRS7TFBBktdCH2ggThSWL2GJzg8hRkte",
  "key43": "135Ni7uRr3EKruYuhu11Xx75FPsVG4sbBeN32zx1tZb9oQn15KrhiXQPEDm7kjLwELJhNYzYdnLRpQEDHozE36N",
  "key44": "2AKkaYC3K2mqfy6PoeCp3gLaqiuJWu7LSXMvzqvm3Btf6p2WMpBu3dAjhQj3UfHjBobGskBtdW3fFAYQmcjZLnLD",
  "key45": "34nNcK7sySzLEUfJAndZVFc5MvnuqpgQMTDBafdMB8TQwsmWV2jh11t8PqHtrC9NqAN92Cb5MpUsnA1xV5wW1o6D",
  "key46": "pVyWmDsPCcLHEK3Xs2qnHMPXizURG39VmBLXbdQdBuXKQMFAdFCVfxgpkqJsDFNv3ZzHJZPvfACYTo3aHHNEmX5"
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
