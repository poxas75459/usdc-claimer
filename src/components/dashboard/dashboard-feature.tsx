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
    "xBdWbwCLttvwK8wyB9LPSwRmFe1MkdfU2ddzHnY7diMpXe8eUhLCJ5hHY86emLHbTdBgY5uB1tawpF9a9quXSrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KBNT3idfBdvrNeijdfLSKtpCjKBB3y6qfC1A3TtjFiGD3GTDhoJ53p4chdCQzy9bxoZvTcAsgAR9UCCq82P6kgX",
  "key1": "4LEeUm2nWNn4N2xKPCCvsQdj9czdR523D89yo3G3yFkkAyWL2C2Fgca1xLsHmTvT1p8E7r8CkT4xLzxbbo5dWfaN",
  "key2": "5NEQ2mxX4x9PKJ4S6U3vbmE3wCzVCKTL4XQzyS49nwGa9A4JEffjd7CFsMEmSDbPLdxso4NR5RZ3FBAT8kVaV8VH",
  "key3": "idkU4QqU75ewHLAxq772mqLyVkHCGvzcpJngLcnMRTokriRvgfYmsLMGwRCLK2qVe1fyvXZ7iNz4HCFSgK6G1sq",
  "key4": "5TH446WoCXfWKcUtG5z2mtPURir2cHxPjYjks1ybe2fVMub676ygFo1uxhSqQ3gCFVCJJmMEdtcJ36225WSL6EFs",
  "key5": "2gvKz5iKgBzozWCnCPUMDQEFgHe1vQd4GR6H76uEX43o3iipQNDsffA5gR6tew6oqNRgT1N7NFo14KK4t6nZonRW",
  "key6": "4rfFQyVHerbw1hBvF3nEyU8aTLfFDo8zJMhhseC69qipvxvBmL29AZjv9htwf6V5ViWPFZyvam3MsFGiLxdUR14Z",
  "key7": "4e6BK5Xw7g4MEfzuP3Rt87uPkg4wVnybN7SgoRsgGYfiSN9dwwjdjGCM53aHHVwXwZrpSVjgxjmPxcwPotwVZLEG",
  "key8": "33sLnjVRewXwdvQxtMsbrqxmHiHJrhsMq3Niv3U8XZopaQvw1iJEvFytRWPnTiZyKRp6MYeNeNwc4o4D8LPuih3a",
  "key9": "3hVDBUMUaCdFpycebMdRLYVCMCrrqZ7U28mLSNk9nazFFQNVh9M1BS26KDPJHfFUZz35bRyNSGgMMg3PUZmPySTE",
  "key10": "4bv2SBbXg35PRWmSjyV2jDM9Z3SiSzam2sYW3ks6BLiGcJkoasvJKaM4VMKWVh1cbX8scs7wbs7DeWoDrJyxfUrU",
  "key11": "5C3PQqYB35yKNFWFkjd3ktoSpWU6HxWN3ADz29ndDPHj2A4ALBQpBxTkb8M32k1xQeeqgP1cpniho3boLgDTeDai",
  "key12": "4aXLDTbB8B5ThRjipBYvFDUQA3nPzz8HyRe3tjN98dQZ79wTurJNs3r353aWfyGC1rbuLJR5DxYPe8qkfbaQoBhT",
  "key13": "2Pox3GPXBWzBv6FcRqbRVtVi4QCq93H4MkpviAWDcabTBkEt8EJ8bPEbqBHNbjWntcTCKUdzDN6DZtiVHazfx24f",
  "key14": "4nN4nsGzgYQ2FyWEm89wvLStZuPGsb7PjYetymfVRLHMqEbvXYie6dEfdC4HeypQ2jUXaLZGY1YNzxTHzkmZixyi",
  "key15": "5cXWm6jxC88EWigYqjSb35LebcAeA3yHi8BYM8iaGK3dauPasKCt3iBLdkvmJfVSvfZpSBCKbb994KmhBfPChKui",
  "key16": "QiBajf5KY94beaTaQe4zgErbtjWmZwfc75xEAbW2iP3gcdkckZfXDoG85rJNTz5ARP23dKSNGKAJGeZb1SUYVs2",
  "key17": "3tzB4Y9SyVTCbj82pFApVsgMAZLwfNCkR7oaqDHHUnFyimqBYyrN9whNtLYVz8ah5Wo4cyVdnb7JntHyvcJxBFFd",
  "key18": "4VmMSoBJPSEgqaYSRPH2HeMG4XyoCnqLtR2C32TtHBS4osizLgKpsm5XaoaqqaoBrQ2hS41Ur3y8dwRFzD7bDhTb",
  "key19": "2QoyJbBXS44shb6a7EARgb4sUJ8Q5mZzzu7YetfzjXRggzFnNBof9sRdqrhno5U6VbApKTib88oAyxK473v9w6T4",
  "key20": "bS9qWbVuBVc7VhCMbok64nMK2zM4wB1vejRNds3SpmrX24J3JCVunw48aRpiTdePc28a8UZe6mZWSAXXjvCQcHd",
  "key21": "aX8GrkQ1xaz5vRD3JTzsMWHVwftcpeVMfbT4VSBPEdUBLJqE1dbLEvsDYpfn2hXz74Dos3uE7cffzMUMc5aHeUm",
  "key22": "5sPsbrCs1L83kcZg9iSEdPmiY9R4AaMZiicYny2xhpK8gCgpcmkeHHUCJw1nbHHCSYLph8Bz4CtmeCDg5ruoGuZe",
  "key23": "4i12D77H5oqYKoS7CurLaQUdPtdeucqNDvgGbGJr7pkisr6q2Yr9MM2GcPxuSkV3EYipC4cPSZYdyyR1CAhLSj19",
  "key24": "3NL8CKJGaAFL4QpEGDTzPwznKhY8AzQYwrk3SDvHzEXW4LUE5b9bxKWY8S5ZWT4r8VnjnQHUZRfPTLxwNK5ehDRg",
  "key25": "soAp9SKYRyaZ9pDWQ8G11UZzzJWbcGLSQjiAJ322zyQh4q4qmKAAnVrwp1RKSx5yMzuYQiB6c48N1ZjPzqrddNe",
  "key26": "2kBqFjp19CpZkX8dvuN3sZJurHNXzgagYt6c8BESNK4wbLCKFb3q2cAS17PpofetTVE6qgpoZUhUuCYyaSoaYHDe",
  "key27": "54BBiMbbtuCWPz7uMwitwVQAUVQCixRXw576jytfJsmiUVyDbB5fL1srx6g8Qq72rNVk2yz8HC6E6EWy9xRKTpYr",
  "key28": "61ueZjY9sR5CHN1waZHeyJeQRV1poZimCAJnjbsL9ZgP4QbKCyVpkFN7XXBH9dLtX4JQNS9qwmFgQDk9LAFBo1bq",
  "key29": "3Y1W9f6tUwKi48gdwS3JKcWHVisC2RkiYJHF87GFF2HnzedAX3VGCh7cfqxBRUWeBGUqvKUN61o9mcCocLYjKkkg",
  "key30": "6SNiyZJNAdwhdEhDrjVkWCV3SKDi6WeTvA6LP1YG5kGPMPi1tLGnWnrnPV9KQXkX9GnVPQxos76v7YqE7o4Loe1",
  "key31": "4VKJNKMrCTiCT8ub1XaWtRXXwUiijtCNte9vvQeSSVAc3YKzq9ocZxPh8ygGouPkQgSkmgZZCkZoJaqCoHvhZ37V",
  "key32": "3Rm17LGwG1u59zcdcZWXz98QRppWc6A2P1RgWUFcr3LtnFD6Qn7PucuBoDU84jGmMLuagRpRshD1rfr7hCVq1ShQ",
  "key33": "4XqDPKSk2riWKszRxxVdRdUQqTDS43pnprzy9weoYQNJXfL8ZqzYaJmAgGQnitYTD1Dc9WXvWHityRak4RvVqD2f",
  "key34": "1xXezBeG9aSumLkfYZ3ydzuVJLzmtVB89vbKXYUCKop2SYiqzYKN1obszzwqr9CaiCyQDo6GcuGM8yKYW8hCfwF",
  "key35": "3gRq9ZceunkQxQiL7gEtcHF482KaCqUSpc2ciB3pT9hXpzZtRmTDteEqMa3LSdrLhRVDVS1N78fuwULBd96xESer",
  "key36": "4AYioXPfGgFRhGKx6fe6p4oyniYdUQd73zvAfW9Q2DpF57o5mnya8nuHZeii4WMrxfEULB26UDd5dWMj9x2CrPCA"
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
