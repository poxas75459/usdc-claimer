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
    "484zrS8UYuuXEUHvq6zE4RaNHUxsPod3qF9V4iDTtGX67muLfqPoYYsKrWgyrANNT7Lw9uZPN5M1wqdjXQ8A8xrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zy9vSw97PDHybtXm42tvTRsJFf3zKHg6X1XBWMJ57kd6sQxGEjx5Uk29rjs5rXLUWNTwv22QYY5QGzJwzM5JsrU",
  "key1": "5sygiTYedARCXkvMSsZhdmU94KTsPe1VCK2FoJK9vvZAzhpipPvu1HZDHURpNy144FSkn5zxurNGCZ983MiVGMiS",
  "key2": "4hjTJcePnzJE1UsQ5Xur7dBJrNjs7v7Se3M31gVEbEsJGk7wgU6JDkBrjfN5BNiKYNmX7z3ABukMxzaaWaZnXR2v",
  "key3": "4i5PNRW3AyQA6WsKPFthk2RhMMMxLJne9zcpivKFUHwEcL2TjLGkDMQd1m3wXD1M2vYDmYn4NcLMh1famr6sVyrd",
  "key4": "5mnjVYDxUJXJquhyn3HZBcYVJFZXhNX6UvamRbGaPAiyoP6GbzrFht5bSq7qv1uYDmepskgzg61FbvfjbLoSuH26",
  "key5": "2zUEeQVyWKvfHTiTh671rE3xQNPWrZzjz7kWgiJFBjXXCbx2zio1e39nhUzPTnHUNvwdm43GbFJMwWEnnK6eXpNj",
  "key6": "4U7zjwverDmp93VwSBU748SukMYR73JuHMMFEdj6GCrwmt1hc4NiHhepowPubKwMUFg1iXMZsDGKyY6HGQ6oxLXe",
  "key7": "5WEpNZJd4hSBvEKU52TMRbmxEnB5WgULBHrFEhtqVK8gzCAsdwMgmYF6q9RvyXTckqxbrvuoZJaPgbdSBFJ31xye",
  "key8": "63ZhLsv6FMjwoKRVkBD4ZjRFbAYhopTY3zPsr5RiaRATNQzAv2VrW7zzpquUfXzvDyMjhURaUxhEnovyfACbnXt6",
  "key9": "3aFWw6V3zWWnYeon9QxB7MGHnEQeQbeYwDeokmKaUc61WyR3DRYfzMXymV82SyH2kC81dbvjM4TnJ2tDBHrb43kH",
  "key10": "5rnARF78gRKP4SoStzWVRP9W46Sa6cTudoqeMeZQE3RJegfR1VZPzLEZpwG9U688UQgbZMpZw4pVMYQ8Jk2UA9zH",
  "key11": "4yJjQP2chuB6gk1nDusMvYefX8jzQwVzz9ThtYvF4F2RBsoeNu9xbyWaQ4Lzwbk6UWkpDN6Yp11b7BD3kXosJfqm",
  "key12": "4eDhCHWKQU2DSB519C5EMSGPCtjb88kM3kBayyAcPgsBAzoeacvBAxvitgPeVRGtFHp85gMBjMtY8hJNjDyeyPiA",
  "key13": "4MUin5gVRKvqJRvmzMoXa8BLfw8kCgxb5Rb3dWtsApWG5QHeyZwCLuyfC6z7Qkd6QHRTDLxcx5qwbbtR6KUdJgAr",
  "key14": "3h9gPXenxssx4Tq2Wz461HwJHBJANy659rFgpagdJYyXDHGHLjwwgaK2ZaQVnMtUzH1Vepd7DZsxHCkwvHqMBZiy",
  "key15": "TzCusSX95Ljw4yvZtokN599CPwAYNhf2xvvK1W3WUUdTawiZu4KiVS7Um6rQtrHKmBZ56PZNFmBbNhQkF4eASvc",
  "key16": "3rchKtPkvUhgMsJusfRXEo9h2tCGU2SV41iZSuEhsMuFt3XQtELdEeKcdQsE6Trx4u54SKrxfxqueuDLV7APsAYD",
  "key17": "5btYPp9GF8GCTwoxBpiLvdH2cYphi939HgGJg5LKXgcSgwNxhcybMB2CuGDrkmwrNZZVT4cCLVegM4LLjRBzYVJ",
  "key18": "39bnq6bjoKowxroxS8F8p3j9ve51snRw4FvZreQ9eqxeMyxKABGPojATMAaEoyygZ4MGmkQMuVMsWyUmLyxRoAZa",
  "key19": "2jddTZjbwjbkMtm2zPhmZUc7cP5KvcjLDchH6pmUmekpZfKaCh6q6j2xk8hjy5H9ZTvDWCDyhgQURZgHmRqkmTSU",
  "key20": "3BexgwHszf3XUf7AB5U5fE2h1CdPs1fx9AVYBwN7drvwTdvsr6fAQgQrbjNmiDjHfXYGLkeLFu1fYc16259HE2A6",
  "key21": "3ABdPXNquwALDTGLb84SWHTJB22ZLT1fasNB2rKGeQYk95XuxAn2cC155DzRJ69MLDHP18PExSx8hRQaMT5UTuf3",
  "key22": "3VKKYvwyhoj1Gqk5mUYWBt1D2N91LmeD25w5iJrC5qcjijRXZLMRKh6MKdX3M5QJXfHbysqwZ5gTtaQskFRvJwm8",
  "key23": "4jSuifbxKL5CtUJe1XTm3uU2xD3rvQmsJZgzinmB3FjkqzdzgVMLUkc69fnDXFxQXZUymVSzcMucZ77VBQr3YoVp",
  "key24": "45tsatMpZijy3q3br1KpPk2kNnEqSWc9yiUDCTPbHw49QM1vv6Kqv8g4DxFwbtay4NmafxHbBomd5qw3ybY1Wewz",
  "key25": "19LxHvPVWgnfFwMrGPkPVhseHradxCqh8ivRv9wKhZet8in3HtQUG4mBDDBQ2nzTJds4ALrrpKdKA1MHWbmBxBk",
  "key26": "5vzQSZ4tfcmMBMW6ScDreaWNMvpRBamDvwnNZXXbQ1fbKYZNvPAFog6yTXVxHYzUm5rSX6LBZMfu8jhP2VngBsXe"
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
