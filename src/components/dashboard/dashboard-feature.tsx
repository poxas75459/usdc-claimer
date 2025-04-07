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
    "2TWQqQsefeFm8qVwj7xYs9xdZrGQQ7yccfSt56TteHEp7CqEKefjG3dr4ktzpAYZBqj35EGzQ5Cq8zDMet4Vket4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YoVAvmLfbHnbsMBhZtTUPvUZasR2TZkjJW78NuMsH6U4TK7WTJRgGE1rQfiMowP2svSW2gaT4obwAtCViZ3PGiA",
  "key1": "4rj17hFL94EP1sDGLvzkBtQ7HDaDgcd68W47Rpavdyn3BG18Axi8fhvb28Yu6b4PgNsT8ynCKpUNL7M18hkkdwCS",
  "key2": "fLbEtXrJyWT9FKzY9S8v4ufWqn47RxPxDcXKCTcXxxhZvdKLu1v14BpMbXUxbTLUfeturRABDkKDJMPvDwJXgN8",
  "key3": "8PPdT9DRhffLTZsLesdJ8bCnVehMYZvWV36VnWPCFogdTuEEjYs8TTMvVhES81fcPNYEC1wRBkcifKJFfncrSgV",
  "key4": "2oYpnmGkm6JVnYrQoUbh8bsVHNiJojhzpywT1WQyxArWaoZPcAkneixtTJhDZLQ3U8F4kTTCruC9SS4BsmxSxbh2",
  "key5": "qLKHRrnX7yoSZxhWJSgrr8WjfVYt5EG5uQu4EUN9a4rih73da2La5mnywg8b9XoPSRyAAvGN9aD9ZqrAwd2hCn9",
  "key6": "2P5rmmMEZ1LroPXxsd3NMA5LAp6TP2n8d49XmGXYAzNVUK5CCJB9b7a1mN9AWtpN8gGFGJap51mV58D8SkCvWG75",
  "key7": "59uQvNWd2B9UU5pvY7tFtdaRULWkvi9MGLk1VC9o1m6R7ZVMSVTNfV8qpMz9iBNgU7UTzbxzJwsMRZKnEFsXpzk6",
  "key8": "5jMfy85jFsxqkUkzq9tGkbPmvRBeboB5V4NCrhYLERCeVWYB8WvMBRquBKix8E7WR3usTSUcizDkh3qx9RBi2RSG",
  "key9": "2b6ufGrQs4SbXh5umGKLdYAY8s5iweEFRxWbNWL5KrqFmUdPmTn64BFWWpBF22Rw6pswwJhdYHuz8bXVhp9bvMYq",
  "key10": "3QbpAePgSyPsq9t1ynDJrth2DJapWWQ1U4RzK6Z9vrH7jFXz8dxpDyAtoDRLDFk6SUtYQo35XYdkuBSDL8tXHLzm",
  "key11": "3vV2tP2qLfX87XZ872bhXVYU5ivu3Qv8hVJ43vGX3Q8cPYEDpMeBiXTJiPuFx6WfcSUpJqrv9CGB6qUY5z9eivsM",
  "key12": "3NZCRWQGH9JAGtZUmpzuJ61Bc3bomdpveECK1ByPJ9oyDcEju6SXPv3JXjKQiBoVs7wQRa9DKJSqi5iPHxgXsHE8",
  "key13": "2tAfCnSY3Ts6krbZ76wbgD9F28gB9ev76oAxYw7VHGBCQoGELTEVrbxG5KudaApwQHsY5rTR44di4vxxkgqV5WYd",
  "key14": "3FDuqctT6yShhWZXDpYrYQ9FmZ1RZ8nbfoq6xzg7jfKCnBFDG191bDR7HbddCCYGzFrfWmcPzKGQt1rjYKoQ42RN",
  "key15": "36WjzBWoBTwQ77T5x4A4nWSoC1ZCurDniWoTLE3VNumnGVUCDtyuue8xt378UAyJ3SfQ6KwfYUbhbhUPmFMcms2D",
  "key16": "2RUWUK4vXAkQH8xA5sz9mgGYBE7fumQgaQRoet6h8HPpCzAPe135PMmQQQJhW3Trx4SKNr4YUBeiBmXKJuHAgSB6",
  "key17": "29bFAUx6JoYwLaKac9JoNo2uBwt4AXD34fR8EK3fYRCDpNhepraUE9TbcFYJ16hQg9Q45AAJJW2xe7cAP1dzSBqG",
  "key18": "4KSXDyPiKVAxh3FphPAq6bUXXWxaKm9hXh4u27PgVbPcde4ex42etySwGjYWvaywQvk222UFAQyEyuixt71L5brH",
  "key19": "nb9aicBdJG6DEouVivasA448AGpTEENKs52DMuSiGRgKF6VZzj152L17zKtMK218pMvXfteKM7kZ5tWiba61EsM",
  "key20": "27aoasmGT6V53D1rVZ6v6eAFu7BXxEDioh1CECftfS9gK6u5u2PYFq22GM3YTB4hxeuRq4LhJpMq3L47ZymqwNmN",
  "key21": "5UmVjF5JiTjbX91FPv57Wx8qNQm8RQ2GF1i4XuHv55dvKggqgyWLLKsoaoWcuLo7xYRYbw4SFTXnfZf1hmevAAdZ",
  "key22": "3JrFykDRG2HxcWMLcvMUW5xxx6BS6vsfbBrMzB3CDTUMC2u7fCtJDtebeLA8Y8ZDBfJzhoqqNyjd3Et53hxVZv68",
  "key23": "3DtSjxe7gWYT8tr14p3VYXMA3veFxbcA98u4mQ6tDuF2vqZqyQr3PaQnWGzcxBsPiUv1LkLRh4smJ9QwV4gxh9VY",
  "key24": "5vTKBgmYvcHdpEGWk3AM4QhTHfD2YNfMKUYdeaEQsBdLhkCEPkFCKwQPtuWFTnGH8doKfgBBq8EsTzWci7aqbsKn",
  "key25": "4UJR9q7J7rPx5AbBibqqP22zuSo4RhCdu8DPzAeJiAFuTyAbUif6oXiLn5LVsWhPy7jEtYNJN5PM1ESFCxj1fJeU",
  "key26": "dK7z5iqDcXc8ndtwAD8woddjExFG9SzvHZQkEnToyT1UKQeb5wpZ3zyaQ9Tym9fishxpoTqxztwMGK2HV1jDY4y",
  "key27": "bQBWGhjZGkx5SiFbrWsHEfTnr5HbFeA3zSntpxkLianVS3NcZgDv1ah9cryZsAT2jAyHuzqYokDk9xyaxTwCuSd",
  "key28": "3TEWzrBRKm2ksWLpFtwwbKw6mRTZ3i4SFvSV5tMEpbDMwBTUnFjKKKuyNGUMAaYywgLB92ExRJQsUbMjFAE3gbit",
  "key29": "5AtQa5R7RBzJTbUYJjNoTMG67m9thtbXZP7ChUkQnaYBu4H6Lybsn6FUjekrJA8GJDVT5eyd9pyVDKPk7EgCjr9v",
  "key30": "5GSh17KkGMn6LBJMEapkAWgG536w3xHd1cSy1PyvkZmS2oVRtRdcoP6veva1CxikmGrTis73WQLMv7Mqxao4jn3Y",
  "key31": "by4svucHctzeXrtqYMDdEFA1WcDM6GWCfT8JUJVAgR79taFo5y35AeZBeMmD6nbjQki2FBnKnepuKbhJ2CWqJMJ",
  "key32": "41E6FhCH9PUra75fBzbJULYiUK1KHAEZnUjihNdZENUmgYNm1QRB1uQXhwyb6AHuCiMsuABrydbbJSstEYNfxUZa",
  "key33": "faA53LxNmX9NJCc7RFJPmzZPrZJBjyuR5GMetm4VgrPd4PY1DiBrv4pdb31wAcpwZy4MKLqFSGzmipb9QFb4GGy"
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
