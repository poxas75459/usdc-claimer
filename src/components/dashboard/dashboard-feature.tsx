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
    "2vV8GaX16MirXSDRsTn8uhavsWUYX3bZFCfTqn1WMXpuFE3TPGrueoPtMqcUKvEPCBz74ZpmC3kGYENAnbufvQeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sXACNztHsCff9fujGCfRzTzjJyXYz5CoosKWUvdXZk4DseTTAN1YB1uetZv3hYxrAZDTKzuzdiS4AY7SVSPaa7b",
  "key1": "EdB8uF9TovdsmQ4YSjFCCMuDpBGTRrUuM3xUaJxRv5DKjcBgfXL1KqzGb5jfRDmotCn374yTEhTXKUr2PpD421s",
  "key2": "zSD2zYFYUdHdiJzmijLn5AiD9bgeJmfxyfB6YnFo1wZ72KpE7TKYecK1W9vHAcN5XDwLkwXMuvREdk9jXCUZbL8",
  "key3": "42yuVk4WoUvabA4rwrwXg4XhaMvba5iMYtmrjggfAEcy8zpeihUbeMt5HeRKZ6rpTW2Sk9kbW55Zk98d1WEk8q24",
  "key4": "uLja4yi8CFTvexnDQjqY3vxUMU2PbHb18UZ9Xer4rVLrVVhFUF91wvsFhHq9DWEKEXPRQ6qgQSQcJzginqGkUVw",
  "key5": "3XS8juXncCjReZJCHpUji5odG3D1H4byvDpn5aVxfXr4MWbmK56vHFqVg85pRh3x1i9qBAdKAGQAFdrw2d5N9z1v",
  "key6": "5CWSXQGHMeVYc6agTgxs45Cu3w8vGxCqZ6NwesroUkwwKtAmaQDWbVnuuk3esaj2wd5Gq2ATEtY5WPch2DkudFE6",
  "key7": "3DEheW9AC6Eoqw6N9Br1ZcPsQnwR3V4DBsY124NkUysGc98YBEADM6FLqT5tKT8rsdjRxV5MB3E6J3BNRCzJj8sU",
  "key8": "24rKXpKhcCaivJ8qtdTvK9oA14vhykWHKafdroipjY7Aaqy9QvAsxKNN9eq3uLcN4DvscwZW5H4hBW3KjTcjWsva",
  "key9": "4H6SXQymsSpd3ar2psQtHUK4YyM6HaEKVb4EAjFbZV2HQNYFTFij2BnJiDXqz9oHx299zTDvt5EFzWspNnrweRDk",
  "key10": "4zASYFyS4fCR4i9CVV2MmiqbaH5hETd79DTBt7dNdVtXiWiFrk221BvBUEELQCvBizAzFNvtto2hSSGF46uq1zov",
  "key11": "btoLs2HgChaAhTq1mMyEyRHvbSbLGmZpE1obsY48FxB8sc74QtXBKP5QPCGMVo8hgkKxQncmkjUmqcd2jL6Gfbx",
  "key12": "famxhQCoPnbiKBUn3viY7DQcoygnHNo2KAjEQaGqL5eG59VCSwmaMLEGWgNuityV6Mnykg1rg8HXaRKy4TZ1Znk",
  "key13": "4VL9RjaCpgSAQwgso6364N7ZiysAXaSxuG9nSCsa1WSHTJ9QH8kDy3hYPmjETa3TUAB1QcctxHygfBbDVDJZSFAS",
  "key14": "2d6jcTbHvvzXd4xypEufQSXcoGPtiUcR2VMXp6JGQSxC2Lggp5ryeyXcHKRKNsfKVjwAiXUPWTqAxPue5YmTWhEJ",
  "key15": "4qutskfv6M3tv5nwCGxBaVAzpTZTUkVQKw4tt5LfhLKtJ1Nui1yXNJ52JKea1Jq6HHJaC6Zn52BpqPXi1YJcUxCT",
  "key16": "pAiiVBw1bk9duT3KnFtjTgtj2MHrvXrYjqQz9SPvKfhsA97rneBUaHYVqJeJTypq99VB8Gck8wqBvTsr5y6Xfxd",
  "key17": "48rAvuDTtiLi9hg43MH1oKZ7TU8qzerqMzebCeYo2bA8nkKYYDFmBRy1zaDob82f466GbzL96cJ4ddeEE84qFi8",
  "key18": "27ftA5iVRtPhwaFqdk1vj2divsvEtUBuJMrmML2HZiHmZg7vm6EXnTiYbDNqsi3z1zC13RqUEuZfb1FMnn4vWXMm",
  "key19": "5smMadgiXqQGM5CWiRX6ksZKnhMozX8A4rCyU7i361Ghu8r8BEX59aGbrfQAsoqruGRcm5PkaA8tNAX9Xoq6Ppp8",
  "key20": "2jSoH8Zz5gByuzpMYQRbgTeoJZX71R7ZY8K94T8k8zyY6p2djNZPcnYhC1WV3Eg5qYe3Tpj3Eepkvom7WwwiKTfj",
  "key21": "3MXwiTPHnz3ayjUWkdS9FcDQ7iuWirLtqiqwmAA5DvFXRRmDmLjzsA5o3iipk6UhzYxY1z2o9ouABCftPm5o2LMa",
  "key22": "3uQ7wYnvX2PyxceZg8MBWjdT3GoPA1euzLDeqRytsHYhCnmrj17BxEhvwexe6FS6RUdRmoiLAkzw6vSrrCejQDkk",
  "key23": "4Rbn1KrBE8MCrRbwfUcsMZgPWVC8pZ6K1LWpo93vfWEnSxdftWBQvsoxvAcuLDcgEWcqoJsm3Kg5BtpWAGMzUrfc",
  "key24": "5hU27fDeopCWPd3p1hzfecubdQh1PDX4bshDkKCVQ4woDDWiZ1qYiCRPR791Nj28PFTgEwPifg992UQ98vTfVJK1",
  "key25": "4LWQst1guPnZJpVW2dhR26ieAmBpiUJWzX7EpKzNbLjrAi4EvMJkmLn4kexpPD9Se5CNSSw16YZWbmoWCoTHbumE",
  "key26": "2cTFE8uQ61UwosAxEUU7SoR2AR1exaFN5pX3UaT6gW4eXipkqS1xeh6VnTfuqBZcCTYzeKQnWP9wTqzf5Foor2qL",
  "key27": "3HWgW168YECzwZQfq26qnQAWw3mDMQKk6hKTBW4wAkzVMNhBSiyLq6tUZXWLJwSMETf8mVYtpMABbiLZNU23hPCK",
  "key28": "2wPPfL1zRXDfHRFx1dKpBdXsLDijpApoR9iERpAmxW6SucVsxhBTjC71iiaoko65P3qgQWciMgvsHPd8QCvKovpg",
  "key29": "3xEZYHzP6sY9BVTtogt8U95SztzwFFLNuC3R2PqVCDPE9vBKRzH7xpV9dr9WmAx8HfDEhWiSXPfZiW9AB5ryXtvP",
  "key30": "2TMG37TzixcM6H3czmkrFPwZNjtfLL1Cv3kutH2LBELdXNZdhPp6LX4wrHx4cVGJibJKv5BjuDxHCNv7pQ35nDYM",
  "key31": "5nWBYzTvn3zF7aAW3hkqNVf86zV9xgvmboTkcf6avc4TdaiWUzoDvRmmWAyCRzHRNyknQLs9yZTy29EvYPEF8Bxw",
  "key32": "RYDKDWNkmuoFvVdhVwy8HVwVexGhCXk8aPqXX76WX11kRkfbwWmJzDpSDpBLcrG2X6LJGzPSgwcH9pPwGfCuxxK"
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
