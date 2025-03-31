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
    "2uU4LZ9UZ4GT3J4HUmngzvYhRhcskWkJbWkVj1Wg9Q3zi4AJ7c59pQ2paFzgoxWVo5ZvnR2QX5BnfWzg553oCmVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qtCX6m3qLRGZi8uqDKhBtf3y2kAC6a1ipa58CgZyRftzR9pNZUnH11eJfsG7hxNXvthLiDE1iCQZFLnPBmtqXg4",
  "key1": "4cCCSTo9BZyb7qKtwwxtYdSLmueXjDXqV7Kw7zn1Sfjty7W8RsMGB8HYtA2SCtkDJhZf3E9Rx5RkP2oJDTkiPNvw",
  "key2": "3ta6SSHJE65RPxmFavb5ABWUQTuFqDqfuU7sJ2gdETPbFVvxRHJfdutPyQ2j4RTMgJgTNXgeH1CXd84w2qtcPfoM",
  "key3": "4tcb3UNTZZ8nkJxhAxZphiLS2rHPB4BLQVbdz2CkjbDaGPd6eySjJcDduCtKx2cfj5wpkRMCRYSwftbWejgwCj5Z",
  "key4": "3LPEKaTKwgzVZ5v1YPKm56zpZ85Y1tmSVUsbynpaEY6JT6wHs1ZhaFFpeJ5hGNJB4ouuqfrbUFTyJKi8r4tBSewi",
  "key5": "iJf35jX2HDDiNySS9m7ocVZuDdKCRQ6Ci1XaUjSGs2sr5bf2G72V8unABqKiz1ytQJ5vrZQ7tnLTxfmrGAKcxjH",
  "key6": "53AoiPP9KLYDyx7MewomBDm2z9gkHP4SyfnJ3SxTYGeokxTqqcAHrcon6H2efoQpqkJvE4BziU7oPsF3EFZ3G3r2",
  "key7": "4z9kri1xr1KhAfN9eLCstyGpddcjPNGzLvgX2MAsdugojKBYusNDP5L6op9A1AJpZgDTpvdN4XPp27b5QYhcNT6h",
  "key8": "3YqkB8SSHoc6oSZfWCAgZLYs1bmrFLH5qTVG5hLH8MHzvaNDo4zqMaWpgu7hifKCEByCNCw6Mxn7PNwdsBk6V4C1",
  "key9": "3awvBFUN2cDmeNd2dKvGh6shCbZskJ4b9WLwEdsnad8JUnfGhxHek5WfrfdyBVZnrgV5Nn756i5Ur6BQMgy1WKXx",
  "key10": "5D4ffffv5CcK9vSvW2C6Uytjh7v5rapDfwDofHwJrMr1cTkpj2gjFQYMn54qjG7gUGic3NPW2j56RZJzESN7Y2i",
  "key11": "4vxJLdYsJ4UVEtQiptYpRuBLY7cVVf4HVFfe3LG6y5Q6YZD7PeL57ddYUjKs6hQydxD914wAwuNHqXBrCecMCn88",
  "key12": "3ZofrTHcDt6w8BNh8PFPerBq7uuYEKgUqWafgTSvs9G2kRtp7gd6Kaq1fznm7uQAA4grmWZ6vPKhMgDhzNu59rEm",
  "key13": "4swNWFLCKov9ujv9pTRSh53nkp63fnyekQDvh6pDFx6wbLTYzit3WXMUSRTurrmM2738ChUamr5WzcgNB1gxdMnZ",
  "key14": "4RJJvMhF3vCe9ENJXUd2kqQ5F4vDChFMrmE3XbecrwC8LFKP4QdhE32eYiYydiYf59K5toujr9GhxBWwrVv4GEnP",
  "key15": "2AV4ikd68k1otLJgEcLqTuhSAQUXif1WAywbmXn51WKvSN69zj5k4oX3Ytq2L27Mg8g8rZsrwQwW6cPSvMbasL2M",
  "key16": "5eNRB3KKTkuq11WunYz5TTqdWYDVmoAnJMHp5vRpouytkuu5K3pvrJPjUvi6D8H6ubgT4mwr1Py9izD9YGp7fyc2",
  "key17": "39UgpJJEafc7dMZ9t2f6myfeGPyQZhGMCKrjg6ZwpCfWkGTxvaPmWoHjKBmhSvYvmpAnf4fJn2aqYhosBcV44GhU",
  "key18": "ibFxZvxXgQYAJEzEVozYRFyxJohXZVwdAW5E2XUaCbPvGJMaYk5676bCK3Y6vhGhjUT33mY3dPnEBnBqjTr27cx",
  "key19": "2r8PBfSC2AsLV9FYafik78SRT3HLEBA8EAdcRgtMyP8BTC71oqhAVJnrp5p1bsNWwXH9MxzQRzEpyh8uKhKrcM9B",
  "key20": "37hTS73AB5PdoKXi9ZNFwgqJTBc5zvQxrZ9yz9GnMe84Uwqyduesu4VVWscuzzWgdQHxHeLZR9dyAXWC83XS7ck2",
  "key21": "5zxZZ6NmDzDXYF34NkLNpVRHtaAncaNijFTpiSdog7cHdHTe5U7z4ASVNGgE7sugK3tQtbE8KsbGyqmmeHBJik2F",
  "key22": "5koJSsMpBjgdUNi3XWo4jXPwJThyVBCa6Sw6tJLCfnj3BQdAYutmmVDDmJkZmFrYqHuBGo9vTVwWFm8u6u22sSG3",
  "key23": "3CQfVQBwBGtTzxGCKjBQvMpB3qiR2YP82AtsBBkUTsFpE4Web8TQDTigHHH1ypXmCZgEpJUFXncNAhMZ6ENTs3hP",
  "key24": "2vBbpypNCwpszUmvBnXxHjZAMzQ2CLutUNnGY9dYQyLBDW7aXmDDgiFC5uXnF64oXHJFPTZmbGd1724XggiuZV12",
  "key25": "3Rq92YVCtx1PAF91XN88G2MrvfHLYRdT2cPs4ZWRKLD6yUhW1ERKgKayLtGY6kaTp5U9bHhDXF4QDTHCZXZp4Pxj",
  "key26": "64SsWmka8RnkA5wSN34UTnba6q3kvUqrfnJ894veKocDsg1G3KD9XKWXS8d26bbGbHB9iitATKBrCE9fGDNViqVy",
  "key27": "3k6FxEqsb1zuVr5RTpQqPsnFFnDY8Bsc4YawPpEA4KRRsDVCMQpvZDSNwZSfDZZABfZ1SEyWFhDCLgB8zHJA1yUb",
  "key28": "2tXWigGWxUbMM4tnySP756NqXs3dJjdrgQCux71revJMtSdHoeBcDusAUKVsXgtf6vjNwAeCfthsSB61JTMQZK2z",
  "key29": "5EtXQiy6nHApUVFsRAyPXyLPuSGNHtzpEbLxkytJcCHKRDLdvmza991GZAocdBh5X8zoCMwwtJv8gGsrpBdW8XRW",
  "key30": "uNHNhz8kyzrprrRJH7a79NALZ8qQnFcGbaPHME7fEqUYmBTVERvNYYcW5PpPeT277vGs4mEMcdP4fR3EjEPEQbv",
  "key31": "4ZdrTeaswDf8P7WeuwNqCdnKSYAQBcfrFhhCWMkkZED5xRJbknfZFomne3FLTkL1FJMuUpWrSywG5GBP1QXGpuNw",
  "key32": "3P8LsDgxVStCFeKnSD3r8frrWaMjJFoGxekfMurWym1rpaZpBkBjKRtQEJ6QJtf7wKMnf4KjwvZhGJ5n32s8W4Ah",
  "key33": "2QsRcsQFPQ17Bke8kJA9cWAjALQRYtBadK38u51UHrEHhKePio4jgpKsTCouR9nyqGkWgu5qido4FZeBs8b5H8iU",
  "key34": "2HK8xF7F7nUiEiFbXjurEw8xyUmXLFcsaCBgAhjAYaxG55MTDWEXyHyExt2itYdJGHge5tWiS8FLm7DJtub9aYiV",
  "key35": "eGceAxitoU9p54tpmwZ7hGtUa3vhYe5x273ixbNRsFDWogbJrh4FsCQN9nsZ1omCMvwwpy5uWnCRtsdJ9GoehKm",
  "key36": "74oZ1cRon9DxBCieUtwXUfAYexB78rzUeN9isDnVy25PBrhBkkaF4Qn9ig3jSeCAiRTZuVvoi2HTG5ibJq4z5KV"
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
