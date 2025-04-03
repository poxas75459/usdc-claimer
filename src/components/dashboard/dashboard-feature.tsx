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
    "2bPEsaN8RT5vzND7r9taagoPzEiiMm3cU2X5QEmKep8oBWW3sTcFdYsqMPCMw4eSRXGBqMTPJDkyEMFs2Ju9KwBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J9wFetuZrTpuPMpLEAWEQh5QqKwHiNUSqgymibQgd55fLye2SYgakm18w8WnmQBh184LcsqNpyAE7QGm3ymsJR8",
  "key1": "3G1CJhcYtfHqWgJsTJ57pnZ1SkpU2U6U9WdG8LUb344cZrhaJ3G5HHajj4SXJxKvEgN3BzfN6ztFCTsvYZmu2Zbm",
  "key2": "2cJwsfePQrAd4SEru3NXekjGLhtwp9C1JPxakun4JrbHwQjSGnPvoDoSgGCwBSJUkWDL3Z85rVi6AhTywMyLHCZ7",
  "key3": "Nd8GuRk5PyxYks25t6nq97WMV4Qz7UHHhEjZW9HUdLomo51fEEjMwQqEAD5wFWxEUW5bPTEgSXDABokT7cQGqiN",
  "key4": "3dnPPxxWui28gQmUAtP4iZ1SrPqJVDA1169Bp3vYkLHPYukRrjcjwmiz7MgMwzK4EuwQJTbQLqNZ6mgCd4xZm2Tx",
  "key5": "2QBLbxY4Zta3xJU4aFzNntu3hbEE7n7sAcNmGwFNFrvq6fAEoLAVgeKH1rPm7Hik5HVJn3VJUy7GdoE3qWVvi8oq",
  "key6": "UTvH1LPyv8gouFPhDpYwrB3znMkV7Ei4GE57BjhchhpCHq3gMJmvNwxm5QYstaJ152c1ri7274GjT4V5Fj2ZZ82",
  "key7": "5D9zBq9Prv1dFAEqbjG6iF4QwrBscm6EcDAftHG64DmiFMLCkDSuneqM1QzrpszqTHEgRbPrtZZprhEUc4Rz4VcG",
  "key8": "4VoF328W3tgz3RHfQr5ZX1JypjMFppMYBwBTRi8z53uUog4f8d3rX2qGeArJeNkhbkqFxtxdyxG1NUVAsTVetzLP",
  "key9": "2DQdCLq53fcMtD34DmBFdLV37ghELT3NvsLEeKeRKSYpZvFW74sEcMxcRS7mFpgC8ryen3qu6eKweZEF3qdnd48P",
  "key10": "2k1v2RDaukKCGDcXYhtHKb2mKZ9sgQtaiDGspBaZKoH23Ch2DivtESawggfZtivVHKBEDTpEfNFMB82xDiJmyPMV",
  "key11": "4T3SxY6W8ku5FyXxqz1Pd5zqHgfuKNJ7et6uLaw6TE4d7Dp5BJbs2oXhPc1p8Gtocz2J7hJUy2uNXVyamSkkk3Yo",
  "key12": "5K11eDsACtTawSbrZHxuy8DfEEp1NrApDW51kUJwmm9TvoEu7rBxww1emFFe8myz74Siujc9bd5CmHHLXaxf4q5k",
  "key13": "2zNGxpwUVBDrRPxPJ7dsPqssgLmEvksDdaXWad9MMn5nvDYuXirNTpTSAw8x9nzQSu37FC3nwbU38nzm7fz92v3K",
  "key14": "24oBCuc4hHa3xjdZffmn92kdqbqgdKT8tKP2f54AWs9uXMMqLcmLMce3uP1dbnju7VVaP5x1HvzcuxHc8gft4WMT",
  "key15": "5wWA3ux5Vs23sj5ga2mQbYgeHJ19EgHLL9rs8i3R3FdneVxyNmpDRaZaCjhAAKCFRMqfmjmzmXMJnJtjs8wiuDxv",
  "key16": "54t8YGxYyW3nAfPukRx3QakGxg8SZQxrHGaEz866KGfzkkSvzKnSiuZGv3WmDoHuJYgAk6QDTuCoW7W85eYzwTFh",
  "key17": "2v32ETgGC7TB7A2fEd1L6AqGsscjc2g8ty4B3mkLnag9n9TBzxq9X9iciiJ7WHgqo1vUvScEcdngJFFpGk6KNjnd",
  "key18": "2cMd6zAB8MDjinf6xD5w8aRroYPh3xu4dfYVZacaz3AwNihuYzZ3mq2QY1KGdKfbnRXbUyptfg68XksyRd4GWFUt",
  "key19": "4ihA7hMztxCMnjtMiezSsSTQYARrwPPSTEimV5KRReN1huKGYpFtFQyiM1xduXyrSD4PRLfWnYZivPG8MVQe9now",
  "key20": "5kdn2J7kJwnqvFHyWBgerCTriNxD6CWYgNa7Pa3mCiooZYswPqLzgKCAsjZ9i7joXEGJwMHmFePKeuWyWFzJEKyJ",
  "key21": "5XXVXU76xfBw4ngr9QQJGD9GDSqUQENrjizTtPBC1JHKquUTz3bqeKci6B2F3dt6BHAyLnNgKZDn5h1GdWuQmLQp",
  "key22": "52jWZtbhoZGwP5TkDfoRpUk5cHizQXxXBw96wpeZoFk824Vgxh95yJ8614Vcgf39nFhoUhmeC38JYo5bNyG9e33C",
  "key23": "2Mk1ByHua6gmVQkXh6dbW6dD3onNa89sxPBxwczxjp6BoqVqP8W5K2vu7XXgK7vp5QkECBQjuPPJ3kHnhS4rBF5Y",
  "key24": "3bpXYhqSZpkNyx7H4n7KebWamnJ8gLdsKnSfX4Km1nhLzWLECYcEF3yYab4h8PMDr7C3pn5WeZaK3r1FuRCew6c7",
  "key25": "2esMZ6WCWgU1kXmK64Luc93Nnj4HUBN7KUD5BVhxo3sUWUFFnEnyEa2Mojqcmj5RnyxsgQ2VT3J3EMYCkcJeC79k",
  "key26": "RE7o1QBYf8reR2e2obcpLrGY1yPrZn2EzH9Jdm4VGhQBz7RuyhPcCXN9vjdSzmXn6tDirTTAjpFsKhNvHg6XcW2",
  "key27": "28cRMfCsjAdMraWVsnG5C5DGSjCoJMwXFZJXMnythfEKoFqtigRp7TPSFC1bGHeucPDZDCiAtDxfAuf2BTCbqyce",
  "key28": "pCcHDCeucGD3MHAJCAYTSZcqSaJ2CiB2GwPbiuAZ7b9Gg2qvvimPFXZ5PYH4Q2zMx61dawkbjLECACs48NfgtGV",
  "key29": "awDeskF4EVwieBBCwdkBUnuNQ54dvkUFALWbz6MCYyUy7ZmYmBLvk3JRZZoCh6mBaaH3GD9xwhUnXukXEwmNbdx",
  "key30": "3FcjYsiEmkKYdSLhJHw7qhrV2EaFSMxKm6wAPNDEss938ejWZoBwYFGncSyQgP6nxmQtezKYMnXmgVG3LjWhLG8j",
  "key31": "2FfUpmkaqnSRwXc7ZUnUhDmFxwvXcrfvvQGCZ6o163DZth1NUDxr1Zvppob7RoVyuHtQPa2YDPg6uQc4rDWy8y6P",
  "key32": "61UPRNNEagCojMRpvKU5yPqRnmTqYLJbDMm1BdTVNLYWk74t3txxGmf2cJREtQZrHqcUaVGmBwpzsBxeq1pohA1x"
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
