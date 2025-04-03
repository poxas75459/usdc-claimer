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
    "3Rhh6idLmA5qGRz9kknRbxYBMuXeEeFtXH2UxvhDmE6oLPreHJNBsfmzv3tcBh5jrMJHmRdALL6XABuiFNzScURE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27hnA5RpWN6i7D6zLkXmmuHg9G519sdTwibZe1qMqopYCE6qXhVzpK2P1mXSuh1nEZ2Pp4BrbXz7nJm4qBrxKEC2",
  "key1": "5PfecyEK8uBKayALahXC2yKMYZm7H3fKpuFPL9xPSaBnww5jNUpNyNYL8jRwvCtfAU4eFUb79yXSSS3ErhLffoJp",
  "key2": "NR6MCZURxvReKGKTRYB6h2cVLNL2mZbuTU3gNnK2GMpb24kNxK7vcWCHRrTnibvAxYtvu4VWdfhgHEpZJKUCvjj",
  "key3": "2yagSXFaHBrt1NUT7txmwPQT6voeVvmKxVoZYQsKzd9LNbPnePPsPmsteYBijiHtHqq2canrJSFD1C3GiHoGK167",
  "key4": "5q5sQuucxZgv1QwBkhtUKN5VaMh25U6Sdgmn38DZQiiVH6mhdUA4NhWgTmo79ke4W7UuWepGR19XAHpWVBiA4beY",
  "key5": "4GAW6Gg93EW9JzLZ9jCsmZVevVJXpMgTE56J4oSaTPAaUnRmKSgxXs3Q1vx5tUjTGYST15aiK7hcrH3D3iP6Tmn4",
  "key6": "664a1fVZ9FmUWmQWxbZLn7xi9nUiBfhCLTdEYNuMyqvPvcWD3BNQApCR3kezXxpU5NUbDhRXdox9SKpRnsnb96s4",
  "key7": "48z1ctwncR8vwcrTTHMkTmNZ6er1J42Stf7vFmW58W3T9nPKrPUNZd2yvoJ7gWeNtmg5STmiRuJ9nPaq5JVAym1k",
  "key8": "5tbEC5okA6wmKge8EoN53N9uxLGxCB9tihPwTRXimdpgmTMTpeukz5NeRhvKCkK2GJCEk2yiEhHbaJFTe1QsPir4",
  "key9": "4dEnainCCW2bXZSqdDTKXxqjdFayM4AWGcQwEP9GQZ8CdxJFuJot2PMNwq6CCqu6HPem6EzTcskycbJVMKYdkznL",
  "key10": "5idP48myspuagkevyF9hBPVUbDQTCUFYrzE6gmqCgJp4oHTDSNeKMkHDNLwp8SmrPoEXXbYyoYiFN5TfAf7QRLdm",
  "key11": "3CCdUk433K3KJtcQz1Ve2aCmiKQPMdSy9pQcskp1LfKngFqbB6z2BjBVpX1F6RUCEfjoqRMQtSCkF3Syq8XR69CT",
  "key12": "5ajNCiwYfAMbxoC9gH14Biega7CYBPX9JT325UMa7irNLv3RWSh6T7L1AvrmaT192hoJETmhkNkDX5rcPDdDtgbE",
  "key13": "4U34ogYxwbHBvBc5DTbg4oJxrZPoGNGniYhSc3MshiEfGfrdbZCBLo1Q6FSk5oE4JNhk6JPBVfKVmr1WWW63YoUT",
  "key14": "4SNtzF9TnUFTgVukttxE8EoHVixnhVRQRaiuRufyJTdZHw9C6eczPmTZ8fVRNh7YQ5yobPBovY2jdjxDqRWbUhaE",
  "key15": "mnmxwnYxfKnaeNQ15zCD8Uq1QUztWSGbJG5uKPNsKkkAnQUhGyKEa4BWVek1uBYrWBRZTNJ5a37dBB1fthjzp7U",
  "key16": "5sMhmRdNvx9PaeXf3YvJWzMMBwytWyRc5xh1Vd5xVDVrupnn1pJuh4L6DTjsriEGLMcpFkSeNC6fA2YCBxujCCLx",
  "key17": "PVLB9fer36v9QAtC3yjcG8zEQkXKDQ4NysQfk7fWN6GnpgGSCJ8g8242kHU7DV4HRqpRPprsGJZLU6Jh2dvKv43",
  "key18": "Q15kVDe7K8Q9wpFWjXNuXwFw9CHat5twR1dx3Miy8kd68jEGQXuvhaveoArLM2tmdmdT5stn3pg3bxmweCe2s1U",
  "key19": "2T18759veJ7WSQqemcx5TgD8SZ7xijykPSLJEmA8HEXPYR7qWxvbksawakGW14Mjb4bgCADwjW7kA3U76eFGWt5s",
  "key20": "5PjuK2t38euzfS8wkhNBWLyx9DnvPnnDmGMRQ2ASn9SAnNAPpxjZVi7p6uRWTiVphaGr3tnvKD4gukxm8JoBQffR",
  "key21": "29oH1vfFjfnF6moJPZfR5Adnj8SNe9r2hurHnCeRXvVL9DX91ATVNzRLDYe9AV1Rq5cKT9n4994yfm9LPiqsYAfo",
  "key22": "X1qr2wa7xC5Ti93AGDksh2sdvwD8THmf2k1K92BTrp83yWgCTtxYdZ96vhabpvsbe4UiY4Yc6XXN6oNkb1diGRw",
  "key23": "2TZJbeXpefGX7geqDgu7j4Y3zFW6BM6MWEud6aEP5quCNp8B2DdDqQxYa68uVVwkY1KhE1T4EjNhL4wrUT68ff77",
  "key24": "bLrcTYh1eQ9JWnuGeFnQfTc7vmU9oM6JrPohZhXbXEbhGoVDQXWkWXiwYhahmC96wE8Jzr5CkUh6ZrbBmDmEsvw",
  "key25": "2SXoRGuBbmGiSpuJ8mhS94yT1tB8ZgEicG6Jx2a5rhy2h6HdZfyQTSTRZS9N2YmC3uTsGE36ZFYJXUx3bvBK8uT2",
  "key26": "53ugLfvpQMmmmjx6GvwQho8DXvvNmBNhCRLyditVjoKK1wytj5oddf4CzNuPZZqR5fcSAF9pJvAd2Ln6K2DDXCzs",
  "key27": "572XMs2xcuxWY4NyS7VhVv2JWpjab2otfXtr5oHsUexb3V24d1NiVVHxryfH6JXoyc563Dua2JKSEcmvezD93jK9",
  "key28": "2MQpX2cWRyVb3shGyKBiNK8ejtyDtViKU53R5JUvrYYhgWHyKUNV8Regq9CBotzDngPc7sXP5h6jmNy7e7PNBYPx",
  "key29": "4GmHCHvjZfN6yydLqNqvtdpP56DXTq3SBE2HBpZyB61xkzhtg5Guezmv9Yz7fyjJfLoVrjqKAAPmW2T9sBqpfKeD",
  "key30": "3mBrTZ6qDKtMXcNhJ77osw3eJPocxFvpynNmjq9X6mTyXcuJ1TFtbvMssrKxR6KakoWjB6tBkJHMFghNrNo4PZ8a",
  "key31": "VAFYBTThNga4fPbpKMLDYUG8zfgg1Q1gNZEKZCMUt9aGdb5JVNUXwGgRUnuHvWpMk48PHBnX7Z6H9QHomPHP5Sk",
  "key32": "3cxhdzqmfd2k2MpZfSE5t7bonrZ5rnXpZ4ZFaaVDDcHFx6oJjqWdBG7FFuQp5M8GGYTJXx75dko2DftPRajCUNjF",
  "key33": "3wBUnH2hYxp9ZXT7f5RmJhCzd2M1W1WaZJQMNAepoR3wpNQCWy2ZBSyEx6qBZSCjZjFC76cpohpboUvY9TfjW7z9",
  "key34": "Ju9pFVorVH9NmjLD1XYdNwMWfhtqnk3QrF1Rsf6ezCxNRRF38q4Vbfr2W2tLWUGFVMc44GPxsLagHdqiLi2keTM",
  "key35": "2oi68dYBUY2pKjxQhsRxGUZc5tib6WxisYnxcULUJKUmQD5Xow2XJ33p719xQaYywdYQKJBF1W3sPnCXuAo9g1WQ",
  "key36": "5fyDX7ug6DRzBqHf681hUufaj9FWF7WEPayEcxF22RCnovZpF1424PS1ecVnG9JSYwdbzSgyVZ2Rm8a7c68RLVe3",
  "key37": "62ZFMJUKP2ioFSrWcBLMxqkh3bBw4xGkCbdjWtuqcSGWLxA8wuvHc99P2UwaagFQEo35d7CXQM3UMBu3FA8ZEapB"
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
