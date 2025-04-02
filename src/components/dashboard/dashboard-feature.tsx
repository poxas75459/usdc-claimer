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
    "TxyF3TUNR7toa1ob2FHUcCUAkutQZQpjEV99B1wzvALkKXfMwvGM37P3hvQp6evyhLr6G9Cupi46ck4RwZDwihT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L7k8kzaRFWQQL32kNZSQMWNPkp76x8HnWpGNtAnPifzhHjF7eiiJhCzRs3YpBFpbVLfH9u8XpiAL4JdyZ8tM5Yt",
  "key1": "5gfS7BuMqL5qvTQ2VRs3AtjxduUEukjgswSmXwSEC1DMFHUJtgVvchCRKvYJFqdGmXWFtNrCMo6895YNGRtQ2uue",
  "key2": "2u3HJDczEmh1XmFBLjWwwv1Bffy9xBkFj4NZ3HjtcwL1GEUrKZVv1ijLHAWm8sCoaJUZUJLiuo4Xp8tKhP5zjpri",
  "key3": "3YCfY867KP5dTMeXsHcY1yKmTnsk9sWzQqC5LiEpkrhGjmKfrEyJvMC52f622f8AFiumxFwVS6E3mEpQkZmF6DPQ",
  "key4": "4qiybGcm6yL9janCs11FdaCzozxgMEh4g3vg28EUWyzHdwU9EzQhnczZSwMjXBxsPxZ2PJqLftjFZizMBkjbLpUG",
  "key5": "4BxKTpxF5MieK6PESpRym43E7emoxj1uoP9qP39Nc5BzrBbzMmWvkBKY1j5rRxh426Uy7fxwhWp6ETFWSiRBzEns",
  "key6": "2MJSUEQpPic4wVPpGLPaTSuCW8Urpt3kerT6RaXTWnvLeDUmPWf1TN5v4ViERiTv6939mMze1B9Je7XFzxgCKEtP",
  "key7": "bQ2x8DXtN5KJkBVB7UhafGTFpzwXMc1ojXfYEK1nqkT6Rqo645P89kq2CNxqq6kfYzs2KzKJaMS3gSeUcoTQJLs",
  "key8": "5YRJodHCB1usAAkTYYQkxwfXBf4FUExuE2atww7bj3c1zJPrqQcu2GJjjAoDzbWMSxpoAxVLT5YzqHqofUsUVm5W",
  "key9": "EE7Z6sSie3MtmYq1j3xkdpij7dgBWYpUGmribSbquaCMFEmeHtA3RbtaLSEaT8A53YJez3SPakPub16FbkGrMe6",
  "key10": "2dknkrtqyZvzCcDXpxCrUKcoe54hAgXJyCG28imNjAJzbzzmbZVR3kVGUsMdTS6C2G5WdzzBVRfMBR5UWFDWcAUV",
  "key11": "5oHxri6naLz3kLTUeg1LwLK5zxW5ux1g6P1jnThc53nUg8LpqrybqVHKcDtaNxYRte5A6eZRDN9hfnTsp22sdDWd",
  "key12": "54uw43DUL1gWfVK3XL2AyUWbt3HEriWoUmWFixzLyaohkZsNME11Vjnpsx6tgE4AyKP5eeWv9SB5Fd12sWDn5ttU",
  "key13": "3KCqEs63p27NB6nJTnZ3uQKRTwmyQkumn2LejvNuFQZnXdVN1qcVaZhwhV1xxBqFQQNieZ8wKdUsrKyfSgV8bseb",
  "key14": "4j2tappMNdfLa74ary7YqN2g8bap96g2eUA5UY9LEZwvb9KWkJ8dczgCDELEbv8ZH9zeLdotev12U4gseR6cFuFp",
  "key15": "4QvCVzyzpNQJkFAf9Kt82K9VP1j5Y4VQB3jPXVfBcoQ9SXrgan8dpYgn2xdJcKe7yjuo26YXv5LSsoPxRJSHkD3s",
  "key16": "4wNhHMqqWqhgpssu98MHawB6YyXcgmAEHeBek7XpnaV7vKy3iKbh3jFgayLcCf52BC2pzTHRXaz1n7fYUeN2imF",
  "key17": "2nihyRFmUV1r1ZzEDyJ8nN5S4tQyXow7AQoCV1k8ZActuxLjPtAJLUmHxQbSU6eZTx6K6WUDWDKysx6kR5L5yB7T",
  "key18": "4yT7t5NKbVNfhN7h19DNPUKCTLjWpK9gLgaJR6nvHY1VBNf5BzcC2VCaAmsZnVePkL8Hzykc8FYDN6fNvgwZGjgy",
  "key19": "2tygzAQSkkG4eAi3prDYD25zAFK8zcC7hjdnmb42Kma1M7AHF2SPs7E8usXHZ3AoBfS7HKg7y6tNa5TWg6P4MdSw",
  "key20": "5b8YAUo1QywMLcVyoiWeLsyuQLJSY932bekgcnFRP681M6p7aKYFUx4VXi9nvybq8rMUSX9aV8oQceeFKnNjoVgE",
  "key21": "5YGQ8B6Hk3fUNXyYzangAZ82t26Rqdt3zt9XkMgHLEyCZg2wvPJHwdhoA45y1aKbRceK1d3gdpg6BdCs2ggBoZYu",
  "key22": "2Vng9asGBCJMmcHhQyppKJmWU6MA7YWKDPsdsDiYqRe3NAvqEMg7Q61WPnAKD2nUo7ru1K6D4xS22uhNFzrSU4z8",
  "key23": "65jQAK4Awpj2yXBsgq6Grf4mthvQCPrzYj4HG6G13oAtnER5o6nvSLWZsEJW6gNXfmd5K6kP368Am7YQmCaTjKS7",
  "key24": "5BRVZvjgtNPUbzZiAg8hRDYeae5oSSvbzubJe9bXsmNCVL6PBxmzZUDJoZrbnemPGpG46aqHc3Hv41UuTCBPqo6F",
  "key25": "4RoTjTYSLW2hhcgcCrafabZ78f4HdspWEKsMEKKKq5cHeYb7rn6TYr1RFmMMGinzVjF31BAqX9xFeFBnjqvYkA13",
  "key26": "2pgNEREQULh6YeotermLP9uxv8AB17A3y58TkgMmU3CGDUihoGdBuBBPvKuiJhVLRKMRAGLJbVCQ1yLx1L6L2LxD",
  "key27": "4DDfe2iugX5kDAvtz8QE41VxM4rDHfqepf4pk4WUCs5LNpFgDd4zWTFm83gSSHP1AHJ16Jcpx2Fqrg9HV9cTWwat",
  "key28": "4zdyeRTcuVWg6ed7kDxusGX2fkgcJBw2w4SHhnU9TTvkNxtvRRUCoUc6JUXhMqk2XWzoKinemzuXP7tMXt99XysE",
  "key29": "4HT1Z9C8LrVo32nSLRbvf1ZXZYnDPRXAtMkRYEgr42cft1YPgxx6A8hAknBj4WGyvBrATonoTRCxbA5Rm9WWqY15",
  "key30": "2JeSt3kRguG1aVQhH7smC79JPLGWeDoTBmUisRmk2TPqVcRgdjfVnF6SEzyZk5BkhG6g1LzRpb4HzLgSjvWavecf",
  "key31": "5Axk5gVuQZzcj7Ti3g35uv9CNZmGYCzYKbaJ91kmDxShqUgTjmuKMzkq6WFqLeCq9y1LVCTXPwDTpeTiYhzfuY4n",
  "key32": "3mmsC5gAct8bCH1iBANqFrrcz1hLcbHvGTTwxkDiVFZDoZC8U5eABJ3iM8hJhgjjzvvWVcXJLrUeT6Nfcoemyku8",
  "key33": "nZ4i7PnxahVDhzkbGE7iqTocuEPyumfpepxJgL113mkPLjmDW9iCoGFWzzyiBmePqvZgNpMYMs2fwypWqkZ7eod",
  "key34": "34Vmd6b6HiyTWzvks5WJg6J2A17ixJ5rYhqJernU5cszqVTA6sFb8gw9JfqLG67YdstRP7NsfNBqtBjsXDEujjg9"
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
