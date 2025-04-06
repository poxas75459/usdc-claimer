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
    "5pPiGfYNMTCYx2wogDgezcQikBzGpSRJYtRt33huaR8FP74rqJYQ81aQJmsmdfmiaukcyRL1d7KZEbXz797UAYaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TVjqkr6oAsdojEGDdBNVnomoxAWw3hEZePiuYtAgaFxDMxqYhfcgBCtYoTgXytLHpY3xd17af78DhLn7UVYXDh2",
  "key1": "3ktFok7CzV1RxcR4EXQSyFb65uFPryJbnm9pLauQ3GVPYKaP6HVC8H7NAhwxJrf5NtnDxTbuLPPy3pvymfwXB6nh",
  "key2": "4XCZjn5Uhevi4F7vRHKA82NyH5T8X4MgvvDqh5DLxXaiADRi3CsvHMkBYywUbStxtAXrmhKeTCGZENky4u57LmK9",
  "key3": "5y2kPoyVRN99G2Lx7VzZHWPPL6w2NFSB5ksUQFfZbCA89ocgiNgJC3JmjLrQFQxbNKV2eGYDGvFSo3bMv4xkiPbC",
  "key4": "5kxRFk1YnnmZmaDf8RGxBGtTNu7ubjUsQGqiTQhhWX4qciRzX8yuTnBTeyN5t7LwtLLew2d2Dwx9ohCard8M8Mo7",
  "key5": "283TJ1wZJyua3iwEnAXyyaTGJPZhZw5rKTLwirXya1Y33ZD2Sa71Xqzybzmh59YQALSAh5QFSPLyxZ1Jx9n5iq5r",
  "key6": "utPRWa3i6rU62zw4CWcVvij4SRE3DEK9dvSRzdVxuFXgrTavUrfxqn3KYdhCmMPjZDZoGhLbMksqyX26RZUireA",
  "key7": "4eqrr3aZuBJQdQB8fYtqAx2ZaGeESYJXCvgBsY9yHKBtYiz2dFxkR56Rj4PbgSfxYKpQfinsHvozZNEP7XdpZkf3",
  "key8": "2bx4JVBsdxiR4R8rUzY4HsUkwq47YdztmL7iHZY68KvPQNEcuWozasCjmy1vLnWjJre7KhdjNaxRYjoJS8y6utB2",
  "key9": "bd2Ux5B3qdduMvsivdBUq248SZeDkodtXMdbC3J8jPCBneQab7RU5r56u4EF8Hh3rhCSXHg9gW2Poh24F5WttDf",
  "key10": "5kgK6HG2rfPuWHpMh53cZSoTx49azptacrcni8bDWgyRdyx7LBM9UveA4xgosyTpu8mXkNY1G9W28FnFX9WZHGHn",
  "key11": "2eGVwT6bW6x3hSpz2MqQXyFfGB773sjud3WFWc4fQGoCbMcpaL3U87barRSRmmE2GEqvyCmzUeawzrGJwaiVovmm",
  "key12": "3kQxJuvhaQMDmqptChk11KrAugAZCZAxmxTvga4KNoHTjco6DpmA3b7F1tF8LZBFAVXBcnpzLf2Lxwwwyxwwsjkd",
  "key13": "2LVLpBKF6MEBW4z7NTnJxCM8MgK8yayVouDQP4ZWt8YdJ8astzumWGSuXreu1JYTb4cpmUpXm4Goeh13AyEAZeTf",
  "key14": "2jeQUa1JBwSCgqjyEd8VAJtLtd5vf3Whiex6UhwMvtorWXMknqhYkXpJTPmcUmgPuRQLFEdvzF8dTaHxfF18RidV",
  "key15": "3BzK364mCnVY851Ps8ZBYCwMZWd34XMKWHLhqm1XWNq6iCDw2QrMqWYV8HW3FodKr1jFpP4cFa1NThpX3da5hU9o",
  "key16": "66FeDahp7Q4c9eqnz1jhRgXrWMGRQ9eWXazTAJiXWgK5YfkxZMZriS3MMa6WSC3k1gHw2Tw8LdKD9CM3KvdkCBhz",
  "key17": "2gFQKNfpBLo21iL997zNyAsBXHAmSCiELAyQwYqKiBnGXWB8bPpc8Y22namrE1XsNmKBiAyTQrjoWdAyxBg2gXo9",
  "key18": "46zPPundHnH5T8ph4U2HxB5MhF9bmMXPtJPPAAoXobyWx51tHxd1xmNFZujBiukDn3fZALjQ6AUZheCfAFsXRWkX",
  "key19": "3CxH9T6Hx2GJvJsPXQ7vKE5LKhDgHhz8aKvQJhQJzRzFMKguUsFEXsqwiEsjxE3y2K9QnGXRuYdvNKMuKegVrkMo",
  "key20": "3XXBrJ1mUUxDatSKRiYZDYxcweRUumES6dfwrBvpR2bgQfFdA7SjskRi7iEde6hbMYFtFpRDhKaLeFmp2oTCUo7c",
  "key21": "27RNSgKojDhKii3Tj2z4ct2kHez26oNujYaZQidPdrFycfEBya7Sn8uFRN175yq7m7zHxiSt5vGHsPPmRfqCDEdJ",
  "key22": "2Vyhz34kbxub8eb9fqVsdtq2tB45VVStQwDjWYReqspE7YJXb4rUWPqoTPf8dVaNFGWKkhbutS7RARZxERSmx7RP",
  "key23": "4boETFZA7vLURH75xf13C6TJ3M7y6tAmtumwemg8x99bWdGBaPnFPLicj676EV9iqEBKUGaGE8sFuFukXeutvyTC",
  "key24": "4j2buLvNUiMgfCRK9zhCYnoEAzYsdk2bPQQErFbRw6aXEQRYLujGiibGLUHMUpWnjgC3WUujCvFbkmpgA3DAyQJG",
  "key25": "2zSei5K8VEhhvxLL6zxh1mivp9fjcoJ99c7QgEPzVEWyZX7sfx1ymC39QZeQzxMvVD2Aw1x3XSSYkq2sNindtru6",
  "key26": "5WM4UqoXNPgpxR21mNCn8JQoVZ5SuoRFKV3tTxcM1uH3S2b2eawkdGZoxJ27Fquk6kdGSoDoVMst5N9fJYwCnKXZ",
  "key27": "3YtSL8gL8V8jJgcqkjLcUK3p5zc2uLKuQFSenEXDKxtV3T29d9syr6VnZge1bD9tsL86keLYwSntjuZQYr1Dn7o2",
  "key28": "3zbV4buaW9LV6g1Sj1tNxXK3eTbED3ZS9Yb6PsLDfzQV1E7aKq8vGia9NU4sb5vixq4bS7JcLiysBdjkJ5tWop3T",
  "key29": "29WuAe4v9CUikRBwfnr8851nmzyqJ3AoNeUn6EDYJFKCxWiKwpea8TFPNYqQZVck2CCUZN3Xc1x22McKsyXv4ku7",
  "key30": "56YDyobuATEKYwrcjrHMRCePqvmNUHhLofFdm1VDpzypg87687KwZAQx5KSiB1y7UU16EiVQLmyvAxyWKpa9G9hi",
  "key31": "vR1iChqL9FZkDWQPU87RV8CbD7jBo4Jjkaow8NJR7ovo5S9SjeHNUPkBpPCYKu6ekCRVHEAmZ87f3CPogR64n4U",
  "key32": "23XHBaZeeohMYp3EmMGhRaqQCzzUaSX1rwT5ZcjXK67oAcRkp3CrzZev2qyTJkyMLxvj8K5i3zWHJEF6Yrqvyei4",
  "key33": "3ZtTKrU1jPvD4G8woQR9sztenuxTQPfxzLaAHo44rDjP28xvBW71PeNxqaAVUsShzov6CTUy7TghxbiFqdGjVkn3",
  "key34": "5vtAqBXkLM6bx84HERBCMc2ixEjCCxdsJ1FL8XFcxmYA1o52NriJ6m7ntucvnwVY7iK5fBHxCgtyWCmRBu5Ft1Kg",
  "key35": "Zgb6v6Rh7QzozG2wgMdX2ZLSPQ6ycmnneRATdaaGfYLtsjW4Tehu1xKHiNX3JrLahkfNAqXtRomkkkAhuVw8nmc"
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
