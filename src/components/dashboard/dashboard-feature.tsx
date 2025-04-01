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
    "5vnoEc5nc5EQMy9FWovp18rrVBLU8dhsvghk53b8ovtYSPUaRPc7ranKDcSVqRo2SDfxk71zoSnfM6CdCkYPJvvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FsJburxfoy8Xuf7EAkJoq3FXbzQ3yyWApDFHzZn5iVUW3fckVujaGgQTszb1xC4xWDK5FPbPddF6PBstH85xtMP",
  "key1": "3sJuNiiBCkHUamLn2oCQdCUabzUSZfLZh7ASMdtsoJawG5ya9MLpKT4Rp1oNrZBazfnJoDQZNr5LPdann9wbr349",
  "key2": "5Nrfintz5EtHVrPTHibGvubHmvr9ETu5JE1hgL6EMpbqtWpoJ56yJ6zncuiwfZuc9j3vLgsugzYFJENzZEMy9xgf",
  "key3": "QkMcXxuRhvPQf93gfXvdMjdb9TZPsXWFeynAgRF7q53TZWGz8iLokkhF95GfVLBir79xCKeDKnCML2nzwNfxA6T",
  "key4": "2VB9Pcho2y1p6SFAKp5a8hiU8HnLr7sxqeWcta6o5ZAMVJLvFsn8PZsWmdbkWEvDu9WPNsbUvEm5DvuizcAeV8dY",
  "key5": "36kE8bk8saiLoqvwDwBjBo6Ps8wdegJRsX76QcQ9B5zb1XB8abFZPAuxDyG5zA4WEPMNbxq94edaQKCXVE3AriMk",
  "key6": "5KdyxAcZWExCrze8pTzboMDJRWyiVuFe3NMoiHHvnyt4cc3sGbZHXRUxF7HCjaxe6r7eNXYZ8FG73DUSW6G1dj3F",
  "key7": "5o1RhSqdZZcrkaBzaqjMGLwGtzGJ6J7F1SmLVn1wxNdwCQ56d8M4TmfVxDe4ooMGkEcFBqgVU7VuwQr4bX7RP4gD",
  "key8": "3z2wmpN1kxytFQoWGadZnXDQ5Cr5mrHMTPcmsuCQj9ksLec7XUVBKANZBbNv8XHa9nm56VYpBWcYQMPnGzbza1Xr",
  "key9": "5oDiXKEFHWFW9ChV2dnGPLSKNsB5vjyksLW8PHpBJT1beP5v7NwkPNgN6fQRv9yVjGcwdnpR1ym8a6fevnVdvLod",
  "key10": "aHWuNY2cqwPvqezM38b2WJKutyvEvDg8MvEwJ8itCZK8prq1qS3vsP5xUABVoWf3DJ2DaRZqzTfYQ1QeLXmgBx1",
  "key11": "4SYiQY3KyirsvuURZmyoEW8d5xye5Gdkm2Pw2FwUCUpxPzJLAcA67viBhVUrfvRXMFJ9UCTADMAKZKrtCAtWEM3e",
  "key12": "4pfmEXfF3EBRKai4u7cp3GmQ7sG6hhJnkShHbh6cnGGZEcGp9dueCR4kAp5Zmapgmhzaed7WJUPb1DMvHeqtLjFW",
  "key13": "eR3JCw2hXSxQ5MA3x9kWdGYpfQmATTZ2jSdSpERYXkXBrUeAYaNKqeg3WSzp9L4yPjz9zi97ZVTaKfrgwCdfqBJ",
  "key14": "v16zCXEE1gbWKiZW63cTSxxZWTGLYyrXzrgm4mzTooxSYNtVmf4jm9VKgyyeebGdrCARdZSZbqcfWAJc4gGJgSM",
  "key15": "53nEfrcUA5mjpnTKgJhaURjc2rDSRYx7ZybM1bS4D7wY5uWpLUDG9o7f7i9Fy5eVc62dscUbaY5uM6HHwbn84U8R",
  "key16": "4BNVMvS2fbBqfFNdeoRgjBnYKgjRu4npM7QYavQq8rXaGEXPqTGNDCobjzUmrfEmmMQN6ynHzDfZsSNiqMaVU2nm",
  "key17": "JJVby8vWq7gKkAiG5a4xVPW7BEJjJbGWjNGAMxzP7Y2fRrnwGCichDidvnDrshtHeVtH5rWBXK3TgkqN4nUdgGA",
  "key18": "59D5cEY4FcedhHQfTZvefcPSLvd4JYhvG4U4e2bKbXQ5Ma6UmoHSHRyGpe5FBsRpy46E2tuxTJVGmamfdNG7E1Wp",
  "key19": "4A2jSnr4gwHYSZRwwA6M4ZaVkruHAReGXQA7yjCEBn3dZ1c9cp7MYHtjzFe3ubAU2qpEpRnrWvpEq72e8T1ncRSz",
  "key20": "3EBzKbGBQQsJb3ZQd8S8yUQhHUk7Kkk2vSDgLutW172yvkWtasPbWfXWrMw1QdWyFRQRJM6xniCHVKycCQ9sTrpR",
  "key21": "5MmQpfymF1BPnYTK62JhGLuvZAPRLnBHjWJsHiJd1D3SSuVmwHkYGux8eTuXaz75Fwmb9RUfYRjXDQ4uw5Kp81hp",
  "key22": "47F71vrFiPEipmpUX6zyqwkV4G3cyg6cCSN3qfQ1bFPMRgByi3HKxJx3NtL7DPPHrz4d9Bb12GNq3mX5vLRijbMy",
  "key23": "43L2AHwP7ZnDXM5Nm4REr3sUY3oUvUTZTq6PFHLJmhxycBuktKXxgjMreQFhV1f17RD6LWahFHTqTyruYkDBtbCg",
  "key24": "5zeGtPozEooK7Abc9JW6ujSw3WGxejRXp36rTbSTF5pEPpmzNiXCLDBsyZ9Nx5PHYL7hbrF91UWLjDiDKFJPnAHd",
  "key25": "3w3MhpHri1sZEZQMUTWpyZZKqiMzhfsWxamkFZuk3R1mZQ9xd7uPWND7iAu7jwvrhA8B2yUcfiTib39uKV4w97T2",
  "key26": "4odAYk9YLLZxzExqoHcjsN67zkhyq96FJZ6mhz6AcHktnRomggYaY6mE53GncBKnCeaNoTiSih3d9cYJ1WsKXiMR",
  "key27": "5bSLaYoUF99bd8eEJRQTW4pQCiLsJUvrjG64j6c9CBrVe9JecGGVLpc6KB7GgGf4VV2nnEgUV2z4LM7X6oEBFAHr",
  "key28": "4QJXZzM855sLGwJiqffkGTb8RyAHn8pEDaD5zMyZpkkVVWBWX3YsgvXK5A4Sj3966sGznuLt9DtZHAJ8yJ94isLQ",
  "key29": "64FvQXDJNLtNf3AKSSo5XBSZAvjb2JGeQZD5Ucm61P86H7Nz5vs2MeyDWM7irP3u3smEqqeVd7NzQwioBuYM9TK6",
  "key30": "3smhwxBiej5zWXTszdjgX2rMPp2yh4NH19qmJj6tsJft4NsBrpAruZRydBLgB2RwmJVUhHpawRZjMct7wNcQEXdt",
  "key31": "2YAoS549S61V6FGP7RGCyWrxuWEYsfZcKqUMYGMFhiXfeVTDjfmvZc7ozCnZLnALgpUoB2AnoPQE3XyvYtKUbo3s",
  "key32": "d2uUrwCfPuvUzXGTT3XAa8sGZsyesCzEun7A2d55fSKmB5rPgZoKVGnqpY41DLYkQMmYMDMTbzMcPnvf5w8NRs8",
  "key33": "3KirZPidjNrLqukZ12zPV99rz3hK73V1fFmkmDKtuH3kvBdShvDS4rtdupXUC4QR29H4fs8XPXkZGWcYeFvkC6rV",
  "key34": "2GyoPY2Z9SG2gvCG7JfCy5tAya7aVF71fp3VDYpnc3BsJT29HZbhmroCDtgRcMDn3L4AfsqK5uTUmZ1BNmxut39s",
  "key35": "MmQG1VnfqUMc4Rw7e5QKqoNrpn3dzhsaiyggcpDBvbT6L7o8ovLg62fQSswpHCexNqoXC8jgQdZmNAKEHSiFZww",
  "key36": "4jW1irhuS7oDSQeLWNryqL3TNe5CPXyKBMn2CZtxb15SEPcWX8NtMnAT3DKnYczHbD8p59uZ55HKstCCBhpAWrfF",
  "key37": "4t8ijBSDvTgLVcf8keNhJQEaJhYsvoyZQ1bbPkQr1cYVxSdZL7iDyxffrJmgunjSJm1KNM8tytVLbt7jE7ix5b6E",
  "key38": "4pkVhueiWSQMrZWftuzCTvBFFkRaH8nxoKLc3rjUyjFugYwqbdzEZNNaiXvrRsoUqAoyZwdvew7YMj1JfBTWesDG",
  "key39": "nHEy2QvCAEfEQ7tc8Ztj9Hywa44xZAaV75vuXMBF7aDrcfWihqBSDNGCicBdCxfx3TyeueNJGzRtWMTWou1ovhY",
  "key40": "2WgXz24HapswVaUvD773NaNLDDAxX1cTBFRqob8TjD1dNQprHEW4oVA3w6iFz8bgW5otbhahdLFAATyZPYFuCLat",
  "key41": "LhqhwFwgEHtVETxgNTBJdZRSNRc5AgBr5berkS1d1qLvxd18aw91Q8KuKqDvTwErE7s5Jtb9Cjr7XTJ1Kvs8RqR"
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
