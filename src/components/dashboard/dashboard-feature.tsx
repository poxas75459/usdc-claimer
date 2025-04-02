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
    "4QtpyEV2HahyhREigp2gzi9dYRQVi5BN53S6SvHTAiChHfVqaAfhYDeAsonT1Xb9s71PX1r32299SeHRauSurh6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A5eNmeHQj7MaUSKqRND9Yp4tnkqnWGhPqHuyfVG6xyiY2pQFSXs1X1dNFSsNapPHHGwdaRYnxsNA2cJNKbMNDH2",
  "key1": "5S8iqHECS5YbnGPmRN11kQu7xkSJKhwgABBs2r48gVyLrRw2f3w96owTxVLSsEeMjfgNRVeC28f2FhTh2rMRHpks",
  "key2": "2boxLCBSkooRxUDftBnjkCDJqkcjDHyrPgR8rUN9xaGz8WPvk9MAmHwFv4JisuPWL8VXSe8TS7Y3aft5ZAFSHHuP",
  "key3": "5AuyZwHvbzS4Wxjhjt3yjtXQXS8aswZyB9fNvZykHfDfENiLQBit7MF5TwT9t5dRxAjZtK1UkJdftSoBUUhwYiAe",
  "key4": "4LB92My3D1Kh23hVZqP6dcVivKuz7yVAt2wrKMMFMNAKcQA32ky8i2AQattfGtkxYGgSC3D2bQzKhEh3HoLyLeLv",
  "key5": "3QWrDdH26naNW49F6Mb1aSPqxXGE5XXS6ceMnFZFMyRZ8rk3PMrgGK1r69Hz4iGYPDkHUjFEhjjtdtvDApUizm3C",
  "key6": "53JufGVapcZ8uKQrjHaJiGSTHUjWLNWmbnzQkQHapQxRjMPL5sWvzswZBCAdBVRqufotmWviK3nEk4SZpKbLv4DG",
  "key7": "35b53ktB7M9qbdCRE9shfKMFZ2eEFNH7ioizFdRrxiT4KLukiMyuxcexxciJFpdhwUJAh7fqiE8nmQWakFYSc6N7",
  "key8": "3mx2MbJqMZCNCX32TVfb6qvcjqHj2hSaEAZC3fa7NZkSeK6moA8v7mQER2zQaui2bSYj2dm3w8uGuQ6bUjPaYXCm",
  "key9": "2vQLaJ748rEmydhyDigAp54oZWDABieddtmc7FKsQB32nSTp1xcoW5T9RgYe55urcc6rEzwyp2pYXUzhW67ZR4KY",
  "key10": "3ifCmEH8sNBBPxhng3Uriyhr1rdNucRGnS1i2sHtQjZntgkpoeaPspX2aH5VZd6RxCFVm6BgeLWmYpttWw2eBiwW",
  "key11": "2S1isxKHnmKyjs3N9XMnTqKmoQDahLd2WoSSmRgeDBS3mEKmT5pcNPFgJD42Sj2j3XLLAse6REELr653H8hG1JNG",
  "key12": "4gNkZDdws5qseMqFFtesy4m3fJPvL1VuCoC7hCqGSD6tDjbLqNZ7ggwdvjcBNQJd8SGXTjViENEbFrAWJ6BxTYt6",
  "key13": "2Wxxd3V5HByudmS1gyCEBuTHuqgUwinwSWLjkob4E5F2mp2zkTaixGYt5rPgHmUMX2u8LaU24MYLqE9GXht1ynY2",
  "key14": "27H2LVJpnAGXsUvZXhniMw2Kn6AnAAFLWqnkziLeu96u5RvprTP2FF6PMWpL3pwuszda998Cm1QUUnjQQQKUr41R",
  "key15": "4huftSFpD6wL2G5d2y3DiPsuTDCEtDq1uV7wv6Wt1fYpcwGLrcfcHf8pjWL1exat3W97zxPKNyjJUV4gi89MN4tW",
  "key16": "2Yp6zgoyqNFjkUPEkZ3iD75q4Yg3rFyTqjcCiV6bpWVdW79Ek5H7ZxdT2RoMXzF9zFZLXkZwE87dTyZzZMx2862s",
  "key17": "4WNRRyQGdRxGhp8iWcez2PbwTJzNuGHjCEwoGegAqWBaqRk9YtecUed5jEG8ZjpnAvcA5d6FcVg3QTZYHKgvgLtL",
  "key18": "8wwbA2bzkgkTFPdTXYXkDQaHRpfY4tCR3CsPp2NFdV5ziEB3pwdtjLHWAc9vHCL1qZBJyYDzsz8Zds35fnWaopc",
  "key19": "37fzRMaVpk7SvGLMnh7Ap3Ydses99mj7g4yvrXRuMBKf3jFNxiQqdD8jZULUi9dBdVhuuc4hFARTrQUc8S5syBTH",
  "key20": "2KbhEY6jqg7WqKpABqYVyXgbmQ4nVjvcJEjc8sYF81oURKVhWmZDcu9mkcbAnNWMjRVHdmYfRq2xdjivgYyHnEer",
  "key21": "48KW875KddmuGxsbdjdySXhp5SNNBtKo5c1YyFC58WN5GzuUbUxSwnU9ySWinsmqGaTT66G4hQUziFPRcYPpS8SJ",
  "key22": "32W5JAjk6foiG8eKWYkhHq3tvmeXLpq4CfWcS4UPsGTLwZmPi9uSig6o6xnFMVzRYXo8yN7fQE6VPLWsjqnyKSFp",
  "key23": "5MfRaSY3iPqePYYxmshQrr6vxFp68s6bad7LpT9Gk97wyE9J6tDms62TSNSqymySczwqoHmBfzWZVUW3QxPajS29",
  "key24": "szQG5ogrNDpeYRCn1H9SKhby43HzsUjhZhcomwzJ83ysy8UJUCLchjkkPxCr3DMtfiyoo2nCY422LCCEtUJmE8J",
  "key25": "3L2ojTkXwx27VjbJ6NyzrMVbQ5nRcE3sQwRyurtkMdaWCmYayyQqtQHuhkZSv95cB7xrsjqkC8FSUawiVjmd7Rur",
  "key26": "25SHfRLx8t9m8JaD4kdfwPzkJXDwSLV91G7b4ikx1qJvfCCtxRUqG3zXeuhVUF3TukCdnKoaTcMEG7xwtuiyoNwG"
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
