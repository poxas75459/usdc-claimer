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
    "8C4LgBq1vMPngjMydX49aWxdmu3mBEcLU8d8j9Vi11iisw4DXhYUoGEkFRbvJAxDueh8Lw6HCWC68Q7ostLbWo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35FoSxXpzbF5f4TTUy3MxRCyqFBHvtH29Gdgbr8iqtuxXorEaNMUsU9p5RvgDGfY9tAH7pvTKJazfhzNwqQBc5u8",
  "key1": "311aLAwWKprekRVV3Bj4x4wVwwQrjvGGD258VPPzXKUr9QgaWqBrLAdsjPWLvAq9cPH6KRCeQpCY1DWPvswjX5qH",
  "key2": "5W24Z3vRrRWbu6DxThBqbKDCaeCrZfChzQG6vfVLSG9dqEuYNX7c3vzzVdATvcD5TdX7TUi2dZosL5PE6cT6TKwx",
  "key3": "5mp8bornWVcW9CVWvXCGX4bHLgBoBKpKr6r2WKF4FvC2XXyRexBgBmhDSBMsRTkwSeD1iAyXS3eV1iy55VUntfmD",
  "key4": "667zJxvpxkTc81hSmQ81a87gVEB2XNGJ8o3Ro3U2xgS9dBtHLxiDghDhcfU926RaSwHoJSSvcgc9LcZjTespG6Nv",
  "key5": "3rbp2ZShCp2k95Mb67bJkrUJTQTTWoAGmnexrzag8s7dUpt6bL1QYNPNLBk1pUmnHvU2TJmP15q4bjob4LFKehHK",
  "key6": "GBAXKPrYREwhBk8GpEBvB6egEXrsuxjT3dtrTXaWJuFkt4mx8a6CUGysk3Mssce2s64HAogbpZTND6jA4RU4BRH",
  "key7": "47tQbHaWykxJZuZrktWm2P5sQESHnwMFA8GQk5vU86DdhsMHX5KNQHgHVL9Qx2sDvZkt8z1Mx8bcv1Dcf4W1tQWm",
  "key8": "5LZLaY5dZuGTpbmqCDvLAr2DytZjVrmLvfa2PiUEa1pJ2VFonfyKEjauQg5UkQnXou1MbUAJvQJTAo44AmYtHKNA",
  "key9": "2pfsUH4NQGtwRXaDzjYG1GtYMEQ1YQkq8FRHtUfba1b5JPsbZpkZhEb7i6Ptbo2zDJJ4jLtZptEn1Z1yxeLE59RB",
  "key10": "5pfDCGY662MtxDG5fQdSNAXVGHnAjpDyy3jmPue4vGyYFvkoZYKmZEcrCQwdefWCmyFuXLyWdyJvvA7cHnGtQeJY",
  "key11": "3yKDHW4Z6tivFyDjo7oL1fW7e7Pve5hDKMuYCc3SrTq3tFq8ACQ6ydGxKwq823D5pZqTQ29WSg5cLMu6bUPXVtaL",
  "key12": "4w7vP2cW3B1KwkAtDz6cLXJzpwW9F9iP6rvcQWM5KcDRMQjeB5GRdwzSHuufCvLR83SUzN89FeApap1MpJygB2br",
  "key13": "3FB38rCyrCiQhsCZk4CMM1mUdmB9wDC9YR3UFUpy8Qx6ErmpGMAXFhGfHZ96Gumpt6ZUxx7oBTa9tmXRMPEEuWYv",
  "key14": "RExutTbZxRx8xocA5rzXzgnPKHusfZ7aBkxu5KhTsZijfpd4Sid9KNP4W8DVrnjXxmf64wzadwopsUEMqjTRyyc",
  "key15": "2nUZ6E1TebSHd5UNvTGJooX5gHUH1xssE9jtPePxZEkB6hc7n7FXPCRCL9Fa5rYHS2YjNCB6yx7nANmHHNAqa2Rs",
  "key16": "1XpeBL55N6YgQ3S88xbS6Jk1W4diDJu5B9y2gv4zvQBdUzAwwtQuGc5euuB6UeVVBmfPaUuhRaQYaYiBLu2QA93",
  "key17": "2fWujU3Z97z1VKDmk5yzpPSuY8CVzyKWLb3d7JctFSWzSUNcb39tPLMDbCAVCGQwpt9zjRQyLfyTygFuFvvrLt85",
  "key18": "38oxeCHXpoK23WqNEp9K8nt7Hyp69pCEfk2K4fXCd6DrDWyxHfYwT5w9hUsL2b5HmYFWkYVQ91wqyxRqYA9uvbZS",
  "key19": "2JUxm6HwKYpppXPAowZgHNBXK6Pgq5NrmawfhPhEAxX3UESFUHHWgSxDvGzr9CpX8diRJAT5ETBXACYgNP2FNiJf",
  "key20": "3qevGGJ6i3zDTqEASMNzCPLapjLFyyECBMWP5iRGUeo9VS65eQPsUqHtRPSdFri1AbaiAHUT75rdZ6Dqh53tGdP2",
  "key21": "5x6hcvS5egVsEJh5rSP17tgYv2Jz8SoVK7McQkxhymomzAawveUnKwk9VKtJQGu84ZRwQBT7n8HyGLG12DdoyFEr",
  "key22": "4AoMJuYVYW5pSyaGmq9QSUiFBFg9JVHEE9zn36UBwngrAQrTUZ73N8sZMKJjm2veaMbnciuBZLPEDRHTBYiWQ1tf",
  "key23": "2cFQnWmH7PNdYWYU3Xu4LmcbTbNacx1Bz4ksqxyiRUbtfjzbRm3AhbAbgnn13Q4SfBkcEFsFMAfgDvxGVL33syee",
  "key24": "3C3gjJcB7NbAG7MqrcR7veV9REi5Vj57mpAcU8v2GCWr7TtwJ8cqhpnNDjWxqMx9sezknK6Lzj8aUHKHYPb49ipS",
  "key25": "2uQwoSuDKYp1QiZsfUn16R2FuwGUcidNWDBGSfud7w8hfL5CFMTevW71T6YbVEEu1c5uCEeTaptLnbZXrtp5XfzS",
  "key26": "47kWe4Rg1urq45k46XinQ5TtQ5bVDfk7F36ggg76X2AwYAuzMXkwdXpciJiRSGX2x7WasScmy8keiyAxiCH7xGeh",
  "key27": "5kD2Xitw8RzFXHGSnuVKCVMe4jCaMnrZoC83kpmLcDifg7jz7x3Q7RF8U1oE2QQfE3jpxtBnwvhEdSRrSmeJMaZu",
  "key28": "62LotAV9WM8QniRivLYZGyNU2wE5uHdpHSNQbPVnW43WFSHRN8V1qRWwNnFfwB5YJGEj1o8m8EDRpj1yaVCqQrTF",
  "key29": "6GaHUA5HLQTiBym7qAMLnoQ83xLAxRWeyB77EHEEhzi3ymFsUETZwY7FbP3jdqiHPTpE67mgux7Ky6s5a7mXRhn",
  "key30": "3ducah8xB9cE7wVfbTsbDMv1FHbTWwLzjRGeidoNw1MPaK3WttJ3Ez7nUYysPgArgjdFq9Gu6qrrFBrJNQ3DJrwD",
  "key31": "4ToBmv8gKjmCCNX12zZVcRZ8J7DCq5qZsJiQmvumYEAAhjYfmJ56tQcBBAkVMaUMDm4ZqXPRUNnsY2oUkmmHcmor",
  "key32": "4jmBSbu8PJmCoNWoWV9rwhBogeBGi3hrjLA6RP2yNsEoMUrRbaxDtYkwZnByUDZQrq4Te2H72dd7PFdqP8n34Uqj",
  "key33": "5XVg78Q2K7AvQyVYoVskKUWFmVPQQojFcrefvHXwm2Zb2KjEtuQyJGnQ6w8iD9NK2wbhqB3ftY64BYKsZW22LgZH",
  "key34": "BbWR1HDZxVRXYuRpHXMvgete4Q5U1by1na7fNeTcXp8VY9jAn9vB34RTxmEkJjEWwejtEkwMrdeCX88Fvy4eifv",
  "key35": "2fzNhEQRAZBnAcnSKJTWdaD8t5JWZMstkdsEPvnGJd1kJNB8R5o66vEA3jwiPVd5RUCsz44ZgdyehpP7Ro9D1SD9",
  "key36": "vNoczn2Y73v5WWY8CPiT9EWyYSwYVZyydim1rxgRxFE4xwaXJj4MjqkYYfzUzCGbSBnrkficCCyTuK33RgkdRGn",
  "key37": "5EropGEJS3WHfdEnrT3RFJKRGVRTLxtCUNagEznaxqMKtak86L3nnvBPoRZFxf9Z3u4eZimJ4iFEejYvrF3jthgw",
  "key38": "2xGXbe5H4jUDYqkGgCushEYPwfRJmT89MPr4NZAMb3K4zzRCy11P7waiber1zc6j79NCVB65yY6hfJ9HyotNg5du",
  "key39": "2Wij2QUveWvdUBHtqWVvtFo4E75fQMF5CmW2UGzkEyy3hgTpCqo5FYTHA3KR9UvcGrk6r2we4q8aKJnnfWbvkepk",
  "key40": "F7NskA2rFRVG8NneZNFhS5W9JK5n8D4ixupXqgeTS4XyXx6UWxWMCYrsuoWWxKqRhFaM2JeGnPasZb5EnTPJmC1",
  "key41": "sZwKEEV1Ds4QZhgHFzpy5vK7BQBinmSF9qw4ii982tkQgcxd5NjhRLWSMchuXNYbogTVb2nE9G3CWnXuvz8fN7Z",
  "key42": "4JwS6reFcVMuiEtGQfGjSvhvdfZKT9FzN7dcch7hyfo2w1V52NoaBQJGKUhFYz8j96ybJnuUx7CFnAb2A4GDKk7V",
  "key43": "2TS5mAje2hP6aWGwsQ7JgXi5RcSyHYQdyhcfegbymVMKEUuiYCCKtMDW1Wf8cSgp54CNM6XEXESzqmenVJuBv63V"
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
