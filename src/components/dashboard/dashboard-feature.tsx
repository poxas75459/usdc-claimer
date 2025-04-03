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
    "3PDsS1HuzLJL2hbv9RKh2E8K6ssrtDYawpZ1YtGBLa5t8UoM57GaYwwYDBER4gXMg3tRzKxpm2id7aAkDkq8YCAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CgX41fv2PMC9vD7vs7JhHVvazamvc4RoLrt94svPZ6pkEXhbrUXqTQBy5ovXwuy6WE7wtftF7KEMpJJyFo6hEJL",
  "key1": "28VMS5dycpXb1GHfMEvSzVZDhymADffFmcqHVm5rHhX3FciF4nJQq4KpjYTrazAX97xZ6PLNkfUvjE1mcNJR52QG",
  "key2": "3rhinZd3LfKAFEt8ZMNhBP1iEiKo5cFMT3oSUvH8im1CXvjEuTW6LQVRT9Mayv4SK3H4BnQbtABLJuG6GFw6xEXj",
  "key3": "3pBQTNtHqvBCjnWE6z3pWnXQnY3emg6k6nMuXpEruYFn2UUQ96uv3oFS8nfJPNCCR9i1xkUtvLqEpMqCzCv3u3Cp",
  "key4": "5PismK73eNWwnfhQTLCvYKGpuaDqkgTCyEQcKgJFCKBxLcnsfHLbr2PyMNZ3RiAd3kUq6KjXewkGVrFoRYHTmWK3",
  "key5": "3JiVFSCKZSP7guCvFuJrNhsHwx5XGBeP6hmpZvtBDGMAEvuLHCW6QFXg8AELSizuNtwZhnGCLYtv6bDcbKfDrjxz",
  "key6": "4sdSBNPSFEaEFW6HbG4WV7utXQZDED17LgaJVxM3q6cXxtMAojkiNfshxeaZFs16e7w2QavPvgGBmoTvS1wYfUqS",
  "key7": "2XW4h8gntcyAo1erG6oSnvaDXo451dFxpWhE4WMtYJkRoeapeKK9DyUhMaLznW6ask4PMARnZBkaQQh5if7Q9NBA",
  "key8": "5rC7oUiVr8UkGih7ViXKEP3xLsdoK7vySDoUprtX9dD1isZu3aznmTXuw7DWiEc72Yr5vzTi8pZ3pNzzNoddtsT",
  "key9": "5CuaafphNY97ZKuQ6af5aqwpKcihBSgpwArX6br3bet9KhsPu6PcrTppL3n6ry7r4Xgwr5mDyqi8urxtgjqayaSh",
  "key10": "VvxnFAiqiAWt8GUeSWc9gsqTc41YW9XWLxNPtCD3GznLmRtRu6L1ankoXSKpCVBWj6bijLh3aH3HGpMtPkthvWG",
  "key11": "QfdGWtcMUjEM2RwvxeU6eNmQodHeQzR7DLc5ZrWfAmwH9VjmoRqo1MV8WzA29D4c6bRwheob5rQ1jLDXp4uisKe",
  "key12": "53WDkoSSsQVP68PLkVkkGiiJLi62GYzZywrGYe6jYKTk8V89czzBsMwEG1D8AJSdj5Ecjao3WPpBPpmo6ahnHqvk",
  "key13": "23WkqjLnit1xZmFJ52wCVqzEscUBBzQfoauYDds9QLGFmCecm5oGe7Gt6esE1Ztq4jbkqN5axTHNuWk5fSqPkcYG",
  "key14": "Lwwr6DHJ9oG9HsezETpVLRC3wRhHN92tV6Y6fE9KAVbmey3En3UbaKgK2JMPQw3Miw5zc4uh5FiSVAW3RDtjXZC",
  "key15": "4t3oS4dLacKkASheWYZEw3y36mwiwyveLtKTKTr8rWVdGhDHdtDpXjh7s8BxC6vqcCB9foNLrgycztEsBQVChg1L",
  "key16": "NvxVvMzfwUwsDVV8Dce5mBGLgSqho6MVk3MAfLtR3bagwjy62arm8XPthmCzCa1FmUEHpvKRigZ5Bi322wnaSVE",
  "key17": "4pds8jxegUTaZt3xwxpC6wd45hrjsrkrxkhKqTHwQEUkNZZh9QhttufaotguZFsRZRfoQVkKPsAf63VtxHUL7E9q",
  "key18": "3F8fj9MkdR7e1MRYQgWCR5P6zesiTwruNwjR3CPfGNYo5xUkPQ8iu8T5hWZUiCqnfqQJBVQv1pHrEr13zerLxqLe",
  "key19": "5y9PqfM9MidrUYLR4kDsYhBFpyt3WdHWfRACL5AgteJCRwCRV47vgwxBc47BgQsNS4LDTUmNXv9ujnWTySSNEJs3",
  "key20": "26izXS4MQANQmkFRyS8VzuRLYtAGb8BHnz7cZshpF9e1idjLCWEuErFjp8MhsVhRAaSMUjLjecRoVcQPv4R5Kfni",
  "key21": "5VCHBB3MaP3mxp9jwzmgokRSCvi9Ad68WdAN7aRnVXFHqCyHTe41JWXhmxRnnAK5vo3Gtu8ZiUtV9fQ9vTHxWz4U",
  "key22": "3Wcf8RdYpNULNFgwSqTe9vryvs4N7BqEhGcgAXj4j3EDppTC3FM4xoQHVFgdVgWZjBNkyrUgpiezqLzsfGZPDbVW",
  "key23": "4MQmgG7hveT8P1cVRYpYjYAkz1EygRK8RapgptHsBC7nwSxanxKtPoaQSoJp4Hz9GZ4a6BTcnki3PTXL2n9eWzzF",
  "key24": "5x2HLPuFVB7iGedLt3vqzgYTT83AXba5CHPCTshDwszr1fWhoMs9U9UQ5ofteWnRhL6uDzr3juGXC7SuzysL33NJ",
  "key25": "3AFchyjxg1YwnTRgCmggdCTWESTVD5GZK8PstP9xcUzEPnhCSKdLX2ztXL17ALsaYL59UZvH2x48TEecpUPvJbhD",
  "key26": "3zVGmZA6vXL7H23pZcEka9PCS9setxGBasxJXEVRzFtFZJRa3fUmD1idT6FJ1sswMgYp5AMjnS464BpBFY6cug4z",
  "key27": "qg3g1k4DNAficPSnM2WR7WmKhUmx8mhWbhtArZ8q8BXTWvugeZF3PsnxyVWzDRvnXUYK3e8QVa1y9vLXyruzCMe",
  "key28": "33wBpPRiE3Qe7N5B8mnLHBLD1GDtSGNzBwknMu41G2SaXXifMXEF43uiH6Z52PQG2KBhKovmDVvPg4mFL4yFUHWn",
  "key29": "dyg1J1WthngwemcdJWnNTqDLHFiSdPHX4Mgej63wqdFerZe7iAvXkcm6ptYF2SrqNvdzX4joBJVDarwyNtkzU3Q",
  "key30": "37Y7uTB4FUX1fGZHS7Hy9teUqTBkXAhnq9C5qG9wjSBGqBHc6zbsTZhRXrLWNp5apLNkineH7b7H5kgUaD5sFGuA",
  "key31": "3LuEjEG4c33ixkqLoPjz9Vn9PR7x4ai9Bsc4bJtYuBUiuN82qhnfPk4RYLrf1CmNndSoWirvbJa5wkvsE8nb4ikf",
  "key32": "48FSTP4AihFhFmcCPczuBDjSKfcdfpW69eG5QgqMFYC2wL5tRtJDrD4W3SuXrKYkMVjW1GRgeYu9ji3Kws6HqrgA",
  "key33": "Dv3bDShVT3yktRB3ofUkL4Smsy3nGAHDhVJmWFKBpNQJw778m8ecWdQ2vFes9Xd4vsYdx92CXSVTVnUqCUc2EkA",
  "key34": "2QHeSjh3ZvxqZRH7V89skJQEfZvskj2iVMnGrhyK5GuwA6GVpgtYwPesorhfU6jDbyCGyqKXmKWegJCHArvxFMY5",
  "key35": "5SX9wjKWoJqiA43HkWc6dwEo2FkBPqVdN5hfDz65D1GhzK2pJDzo2gv65vozpGGhLLkqfty28XiSoPXtYoEHY9XU",
  "key36": "63wNmdWUmgwTTjahPT1dhfU95EaRQxy7xCeMyrdwK9Mqe7PrNqLHHsgGwrHBmosSDjFktKnTBc8fxHfYsxfxzUEw",
  "key37": "57oW9dMa8FVAQXU2wJgAMoH1rrH9D3JsXfegJun9aBGEhuJtsiqrqJt3R1z1Bqumx6tMFinp45G7VtgmCWBFN5HQ",
  "key38": "47TjveGxxk1xvwGKUcR9Aft47DzHd29QzVBcPDGWWRZMy3GpMu6ep99nqFuexBQzgUUd5Lr5qeeMrmXsqnwmjyHL",
  "key39": "5jt1ovS8LByGQqsQgBP617hjrVdtLLTS466ba1FVWFsdAcBTj4mmtYc2dLZxGb1XhGZVKAtzLhjxLwVrXksrpftp",
  "key40": "2WVMyHKCT5dM3JuXvwXJVg7xjtmtoKj7uMCn1uACZmbVLmuScrNdeNCMYkMRFFopxHFCHuzAkrznUyg9fmWV3WD7"
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
