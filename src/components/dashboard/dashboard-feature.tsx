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
    "3TUe2VdrRRW4PZJtxfn9qhYMTpAHSLNFP9Hk26hyZVm29JSNhMHdEQNx6VekGaguEGcJxQiqjknKQXoa3dT4sTqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44HjumBYEwt646i8oUxm1essoJVEddVrKACmuBaKUcjbniLkViihV8Ap3ThESX2BUj78RhmMNkwJKbDnuL3qcyGc",
  "key1": "UKRgSKhkChK6fdccZpLorNZHDUX4GqNfAQQLicGPiXvAYLUgAYwK9SrTgQQTi9tozgfkSdoFJzchWMr1BQNvSHQ",
  "key2": "66oWbCHieQ3F67c3C1LiqPebfDDaFvWbdcxzBXuUqJpTtvCUvjhmU6wfiiQb4fgP8CvjB3uU4qVo8omwsiF3UVKQ",
  "key3": "2ZmBMvjx93Lj9Eb2mtMAEA46PFffg1Y8et7v7Qjz9ZKj3BEAp4cwmGjD4X5Tt45dMa6hfFKPJbaimy478CRbBXZr",
  "key4": "5Y3YSv51VcEPs94ZWu6FXLBWnTy4u2o8dHsYWJXHb3buYZWeNqchGLf9nNGaizEYidhpFphq3UKpnVM9E7FENNkb",
  "key5": "5mrExYrdSPzk4JBMDiJiQpnqoUqhovTiuGUrY3p67ioAaKskmt1qrfkvpBwZ4Cpo3Kgm5pvw8rSnqU7qXEmzZuQF",
  "key6": "4QckaUYLreU6GvByFwcSqpYGR5Hmhp8jQYQHk3d3JWwhLjYWPCW3rofn8MjxhHE7gF1z88khLdFYpfn78DKGnCEg",
  "key7": "5zMUNHG7J8ZACLUTie9wAyDgXxAXoV5MPz9KCYqoLiHyuffuYHxhTjvKTXDNjHHLT6AhvThGS8je8LEbjHHTnHk5",
  "key8": "3UMYJwjEahrqTx1cy2YdSiDwi2f7qMWZFo4VXiAu6gg2SqjWjXXXkCo7Xj36mvo1SVnoAmKoPfdbaX2w4otBMd5p",
  "key9": "52NijPRhYERVxiW17hZDBYxa4X2nURNVddGc2UTbCEHsAvXRrS4JFeBXXiKvpVCbFsf8CMYU6RjNNTsFwcGruUHq",
  "key10": "2aocgKs5pYQY43dxfhisFG8BbSaghXg1QyrkmtwsJEpobzPPf6RtnSZ88aVAMAc91XDeibkdH1s2CJRbce9eds86",
  "key11": "5ygUUJn51BHAAoW8yqQAuZgCE8w2BBwys7tJp1UMFLUhcqJzPxTb7m48BacGxhPFNceAcBLENYX1zT7sinWn7pD7",
  "key12": "RZ6tU8radFP49DcXY8pM5RFYXi7WShzSLoVriURrwzhDcSaVemzq5EG9LPcDmH6hCap6J96wQzBmcDDAQNBqJLV",
  "key13": "2Ubd6j5Je5mfeSizXaqrUmvNL8Fgr1mdbA2sA3UymWvQsCG5XNsoSxTu5TgB6h5DSA1xN5gN35W22RgAq3qpdV27",
  "key14": "55s6ert7nWskmyMdHwbn62p2FAsTgfSLah5yfKfiDNkf2mX1jTRZfqXP4xH1ti9Jy9eWDwgcLit8zcxNNiNu5RYn",
  "key15": "5emPi596VkqX7fcDKn4UtKJnQeZPC6bgzMe9uBnNzBwzMtzuRhn4s8wexy5yxj88xeABUHGjdcacjoPvXMXtnuyT",
  "key16": "5mS56XzUVdH4bLxmiTj1X9fpxu1KGDBxJQKi9Y8caXsd4c3vjrhcGVsZcgr5GrhWLQy7Wai13RU9SakeCeJToY7R",
  "key17": "56m1DCV6GmnRq8t3pHBVyKhffsKCSh9JHtuBtxAamcMBd8CMYZ7rj6jV8zXq3FXQrubZpgt1WohaaooBdGPx7wSg",
  "key18": "5hUTzR9NhcuP159cLQkSzv4SQ2JNVQYHV92YUcJupvNM53BFeAyADNtuBnyAKh6Vqpud2hWUgrucNxemj41CG8Jt",
  "key19": "4VssBt3d2CShxp3cfXJgc5t4Qj8n7vqyzhK5LX8tNpmQmPYAPNSnN7HSr2P4iiazENLcPDr2s7FL53roVEndGWfS",
  "key20": "3LveEpczFMJGTsheDNTxRahtqvscUZPa3t4YEgpaJKXDqELFEgZMHWHcaFPsaNgRfr1NJLNyig1gXs6YSdp97NQi",
  "key21": "JavttqPLCSaR1ttBF34TkWX5hcPJqTeuMMsLekAi2FEHgrzmKTnkgRukeGnUMhs8Ms2bJ186zG9bv3huXVA12pu",
  "key22": "3or9L8AsZYco9Rkvr2mUBoVCupvMUgxwcWxycPrq19CuK7SmZK9AGFRdeiFgrtA1fgMXKaLF2j8TUunfbTtLeMf5",
  "key23": "Xwgoj2fpBrr89mWKCLJERzaeg87aTyN6cWzRV516MgduC1yuEUhhTnWUEJVfGkEedr2T8DuVpW9PPa9eSf1Kekc",
  "key24": "2cFxSgpAKojjzfRQaaWxjqqfYV49ad3DeRkD1dF6Ydw3FkYzL4tpxhAaTpsbXcu1VviiMhFqbaPn2Wm6ae7zLxRB",
  "key25": "2AHhjEV6RNUETxjGXynvAt3XHR8wtLRBFL1gCKTFJWPs4ophDvGgmodGknbd8KUbzAPyxGeDuMjHZkUVD3nVRSoE",
  "key26": "5c7ayaiZitLsCdsQznoBxz1h5kqNTnPtWkoDVfwVWwtJyik1R7k7t6gPXSN7CTCuaomwpru9wgyvgNA6NsfuGpy6",
  "key27": "2bH2FA2yeLMGQWnBMa5MPvDwQdc6Us1d2An9Eygs5WeABwnrpN353ueEhKpvL3Dd91sCwdNc41mJy7JDQqvgacbG",
  "key28": "2ERVSTKLVpBw8rfuCVvF3kgTjxdiDc8GzkEVFgxkDUdCQczX73M7ax1CwpyjaRD5gwDG57frR8ZztYoGTLTWqgnh",
  "key29": "2rMUNQLpzg3uqwXfcfJYaT5BFqNuee9jNwrLsX4UYyUW76wixZEeik4HfhdzSoohLeBH1enTNFneZgZUxSphThdU",
  "key30": "KQL6DLH4NMtqc1szYtJku5d2vSG76d1R3RhsvQRkuBq8KiRT9ZidvB2xNiULSbvX3hQMREwH5qL8ohGhVDwDsBW",
  "key31": "3WMkaofhkit2v5YBZN9oEFuH614U6wQXDhYEz1TY8dwPBoEDXBTDxAAzStoLCDq6gCKfmTpRCPNLR3H1XfoRmgwt",
  "key32": "xvFrEtbowTNaZNUpvUmXseou8JSzYaGoicNoAJESypCMM1Wz1zEEuoSRNUzNy8Ejh6X25PVkW8Y8TXE6Z6pGpLN",
  "key33": "3PbDfdZEqLsETejR3vjZTNxXXrWirZQqrHDqHye3Hp91CNMxVUAPtELarycqYaEm6S3c2QZzdixpXv1YLiVKFaLC",
  "key34": "3xVmzMHkM5P4PtchjK5Dmng2wbY3nyT9pWAgf33ociZjuCNegHkcCugwPDpaKx5V9m8RXHjpyCMk2TZjM9taU2k6",
  "key35": "2NrhjGFmAPoQGp5EtEDeUZwjZg4Pj3AW5jm222PSUdDRa2eJojYUpXbrnyu9cau3K179UC4BTneCKVFsnFNKwBKy",
  "key36": "3RScuUeP2jfNwQBuvzujpnCezZGm3eLTrvTN5wv4urAAoSFLUohCCMLcVDf3DcDS3PvkVBkjeV8NfJoi4sBiB8dR",
  "key37": "5ocMkAeD5VVLauGbFBFNRNKVeY2u6cvw2t5z8qYj74UvPjfzT11ib1c9gXC1oeXZsv123iWip2tNnRTGkG6ACUpx",
  "key38": "2jsuraz12H6KVtTBsxQYKDVBHtYWpLq2V5S59HA8MjsYZpy1akJrKkqSi4ccsM3MWz5sap9Vuyc8GSh8EX7eeuaU",
  "key39": "2gTR32r5sMEdN1btKe6c4pxY95Ch4awACXusP3iKEkM3WFxt4PDEpeUqYXVQMCxTKzyUy1e1s5GQNAJXwkGk6f22",
  "key40": "2KojjqQGVS5WxutvkuKNyR8QDQCUooZTqFahWiXmk3y2ycWe4vFjyxW4B1AbVKYM3yqZzaR4aYhgpRUBkPNcjsy4",
  "key41": "Uwn43HRRbV8CeLR9BnUwA1LWcbx5HpaYjFBzub7fc1bSoi6feEWHHCXBGHUFGoLkUwERhuEbWqkxEGxFYPnKMYY",
  "key42": "4X88Gudo2fzFAj7yzRr44Pmb7TqFAXTwGK4oGQq7X8fFkk8L1GQVJ2vheN8usbs6JUzG9UmPjuKMvqZtaoLsxtsv",
  "key43": "46BESgKB9c9xPT4cCkTmra5wENMB3nfrzNpEjBBEyeP4f99p3C7vEaVMdRMGjoVa4Vdd3c2betdmmJAZpnKPLKbq",
  "key44": "2MrLATUSnSuBWqrHcXeMRWqVQn46tiBQrMG6EWNv8xjeUn3uYbuvWdC2JxC2XUYrXkuav4xZmDsyPeweY2J3c9pi"
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
