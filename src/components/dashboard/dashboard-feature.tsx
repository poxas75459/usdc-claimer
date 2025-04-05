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
    "4TCrZ2cHQT5QFDqy5Gh7La6JLjSS8FyTvWsAx9XG1g1rZpq6HJVDTpqrJKDxy7GQwqxLtU62BqpkiPmkGHZ1y1Qd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "562bjb788o9zRTQVoMEXRw3LUFc2KbE7kir4pGDEY3n2u9NiHNb5EuzsjbvdtLiNNVjRbqceWv3eFN9y6gJsXPAt",
  "key1": "3HfHVjWHNnXMnzmYPRy97NF1Xb8cWJEdmAA4G1dJ3kpkATEVnc37RsUUDQttLobMYhJinFHcnZ6ZV2cQbCSQuCjL",
  "key2": "2r8bLs6nUzseV6PYvkFZ9YxSun31oxbBB6qWQ8vbzs6thbVp74xr6JfcZASM7h8Kn4Cz2yKqTyfjXuZRoUPXPdPE",
  "key3": "55bACJMta4fqYzfWeJ5BEtSnd1S3NBNFo9wwcWVbkt5wdae9g4hCbtLNibRZpZAZqjeNMLJesJVfc8vihFcQsgGK",
  "key4": "4TdkkeDZFvWqtVZ2ecrR7UgVdrP2gDVdRvTyZnGB9SJhcnXM4V4D5dbB78ZxFCuXPGKdBLquTrr93abTAgdJ8ANK",
  "key5": "5vX829dq7Jk7Qsojf42jwqQ7F7VFtDYNqWfRUj9a3KKcvCAzGfZ7ZeKoYC8AnmJHgZmxSEaqWEJES4rNUN89ZhEt",
  "key6": "43R17UeWiMUSMnqx7xSpsFixetSeRxfJ91azBmZuZ13DDG2RZ3ZpZYqHrrvpKhpFu3UT7BEeGvkgRGQfLxEzpSru",
  "key7": "3mzEwiRAi4jc4PF49FrtC3MAwGDwNTnoZYehwRGao5Gi8b2ZbNiGK585pMPdkWoFE55zmLSR74qaCTx9HbD4nuw3",
  "key8": "2P9DyuBTHsmP2xdneFKdpAA6i1WA1uY2teAS7RHDXEPmweGXQaUhJqJUJo7VwUBWS47bnujsLzpjxgfT1hXuRLyi",
  "key9": "TjXumLpeap5mKMSvCg8bDr7evpBZQTdK9juPHbBp34Xjj4Zz3kMksgp1Wr65cUAyHd1MDupEEkFTXuZc39CGVsS",
  "key10": "ZQwaRUPVRK6N8L4kuXYcC5Z8KMUgRFAYNvtfWWebDopVSrbmdk6fVgKVgRErdM6hKqY1veSYr7jWeep6ENY2fWt",
  "key11": "kVvesc22mC5nXk8Tfbq7U8h2f5NdREeozfgTXfQCt7ApAcjzTSL3zTd2tS2q3gNeXRALqJFVLhTfGY9oqZjLrK4",
  "key12": "5Qs5HEFeiuUDWrsoLeU38is7yePwqpUFecSjB4EqrBe4EYnyyi66js5SREG49R8z7KREtVQ78Rf5q1TNr2z5uiMs",
  "key13": "2PfDvX7cqvSudEWvMvF27WZuCq2HdT3FHJnGzG7YGNc8vqHEYwoiVbcZxHtLgfNaeYH9nSSDxFcQ57tAeTyizJuf",
  "key14": "Zyfsqr98ZKdMSv71ZByzVSd5PXEXP8pRa4KwmrNeLXjKaN2S65sy99gMfkhT27FCQFYUFZ368x4KZAhVU7cXH31",
  "key15": "3cRZJEpaHx7poip9BGQeVfRRKXx74tS3itRDZGWRhPMMtVWy2mHv2nmqqzZqNUa7ueYo5oFr44GGpJZr6sWYEM1S",
  "key16": "4iUeHK2NrTqxqzYJhfE1D1HhxtieZtBoJkws9X4gnftyyK2sKHd4ojRXTfmo1PHKZ7kyytDHGX75HiBQNLAZqbKU",
  "key17": "4VSqj7B9HiDkGPqhLLdwfg2DPCXSzv6Acyegmhg8QrTt3dN973A5NixpDQVFBBibFpEgihx7ui5QwpUg2PC41UYk",
  "key18": "5Tvnh3eK2Pr3v6Tz6MzRusynUGnFK2qC3CisBde9Zz3yhv2EHfPPLNZEfe8x4yqj7kRmgu5vKHs7vrJ3hhKF8dVh",
  "key19": "2rbSf2JdzmwcvJpPH5xC2bL1iYtdjR1n4JQtBEnimecWsGXm5qDUmM2XzzHWLZi52xdWYwc2Up3jKhkMxiKt4fCU",
  "key20": "3SMbfbnaNxL66ccczh24YU3D1QEcRjbGnizBcLzqmXpSRG7pK12eyz1kQ2wAMMz6p579WLCzB24cKEqQazD9ojgS",
  "key21": "234bTmTZvW9keS71QQjHVBnPiywRWCjuKsuGRivRGAK3faKf3Cu6mxQTCfWwNmGxHfoAugoWRWajzR1tGtZZsodX",
  "key22": "3PuPePKBDg5QbV31WdgWfp8ESRuSQ1MCTuYBETxrXZyZqm4RrTwX8SpL5cjbyeF2NeDbbLq2W593ky1n2pMkgnpG",
  "key23": "3Ctq4d1Bgz82Pw17thjDKamDWmKoQCychAgZ4kvkqutXSWeZhAQ2CJggWqNGt3m9av71BeTwDbjwa3wZFUjcv11k",
  "key24": "4tCNhJu77poNxSx3otAsQsb1BbqD88LE8moPWAR499RRa9MKhP8kAB1gKgLUkuVXG4LCLo2ryqD4Tf2hGTEogcbN",
  "key25": "5M6RNneexnpPAjRewAebhmjxVgHwFna1CWpKpPVzYx4LWW8QRY1cum4CZD668ny5e4wKnwo391Tc4Z2VEPRvnSbF",
  "key26": "2ZAqVjCSRQMKihJFEygUcRU1iQn7DBhAezPF9xzQkDiScjBqYBaTbxGg67TyhixWorfwLorNK1SVV5qQ271F3eaa",
  "key27": "2XJ29Zv4zWzPv1nZ15GAKVkjnyp83QMvpJS7WvPvA7wFGGofZjpp4EpH29Coyvt9Wu8MDkpnx4mRQ4Fmf6y34FAs",
  "key28": "2qjc4TNq1jKcgSB7DrKjE568hXYJTeXLJqLsZkcQ3mq576CTmQwUU7jqBuw14rbk4LdocFHPNSULntWAX81ejcrB",
  "key29": "4RvE4y7KSAiAaNzMHSFhCNkVHw9iS8BTuqRK8rSpDuvBBtUfzpu64GT4nunAmuDPUFycRzx9w9hCcLJnVG1ZfEhd",
  "key30": "4wYdF5f3ggTcaJCHBSErJzgorjK86GmFvFE6PX9SDLsYqEB9gMeroSRRDW8pTRqaUo1cNuKJVXqe37S9ti3QtBoG",
  "key31": "5G1voyunrx2avBjo27K1Cn6MzgpkB4FVZZCN4Y7hsnHUMkb5vMNuqpRw9xAv3zzMQ3p2aGCkpEsEoo31mwgNsLWD",
  "key32": "57VfPSYXJUe8JafmL8AEST1DThpPS4fiWeJ6e6v7FAeSRCUpnKDv9wVnLt6VaVqzJ5XJN9g1z8JuaTGsLPvnZvuN",
  "key33": "5ccUJrgmKR1mjuv7zUYo1HQaa4DnVaufXaCK3RvamRwAA3B5BiKZCyqRDtUhijsAN1EXYqc91YXUj2Q4zFdVy4Nc",
  "key34": "BA6vtf6iyjk5PDB1sBgx6wjUDSWvpyqn86y3CmK1BByozc8FSYiDQH6W2bxTYgP1Qt7TyfnRHAHFvZnG7Fi4gjL",
  "key35": "3eygfA8Sf4DgsZZpX18vWu3uBAeMkTh3o5So748jRVX53xjMmsF83z5G1bzmykPfaEJfN4WomU34hTPrRf3acAUm",
  "key36": "9ey259G2GTvNNE3VMmJ4yibQJ3YRNgGqfuGUkPGrpx9LBTbMhhkgSr4qqMRkXctcqQeN4v9mdxYDigfqoMqX63H",
  "key37": "4ji8gN64dFe7G6JbyrEvPraVGGfYdVcaJceBSH93y5vrHFr3Nw64S4mwSACh3JUntmy1oPzFV8KM7DEREu3CSGS",
  "key38": "2Aw14KLCu6aQQeRErdPw4m474p319LPnjMM3WoNYFiVp5H9zpch7ortdV9XRXCYg6tzntF4WxEzEB1D6gk64RQDJ",
  "key39": "4tLftB3vF6QjDryEaV5FMgBhdWEC9vLskL9iBXpGSCns6z3C7he6yXXsBkN4JEWz7Voxn63Ra6K3BCzwE1NQD3CR",
  "key40": "59ny9ZETSjfq3yGqZ3ttgL8q81eVmcdBvb5nx7Pe7MeSxuriBaTAoQ2s9x36V51x8F3cSNGRGBqc8Yt9Ka91VPLZ"
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
