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
    "6489yULC7dpsdz1QvsK1FW3HzKc3FZ2A2W6CdhqV2pamAwNRtoYUVQhTcNMwr5SQPDMiyi9vaHaCnNrGDzq91PRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZGX4iVEp88Q12amtEj6gN8UCKQFXa38iPVxgrWSkGKV6Fb186Uo4TDxbyjab3jRRgU3bjAHw8JGufSWu3gr8gHC",
  "key1": "5fpbuUGpvbrENJLwg9kwmxtzfRAUwtJs7srcX3N1dTrzWHjhxPeDeo2FdLCBnwheS6e7TvhPP32jDCMpg4s6dBWd",
  "key2": "Bg3jboSBzZjUacu5qUMyNWDkegHMYJtbo3qjX24QkEiysvS8ENeCuj2pQt3guu7GTVCHD3ohFtwG8pxkvYfLUMN",
  "key3": "34ThKTFYcP98x3oq4VBiYNin7w664AJBxuhNdbrCvHDDeg4S9mqFbdMow2nw9THbZpBH95dQGjdJhCDGbqJWrX3u",
  "key4": "39D9tT8Z1WPaUAQLqL3doyp9XBTovxHP16eFLceoALm14J25f7HSBtqMAUG7DqPmanfc686aKPzPFBHAeSpqRZT",
  "key5": "3ggWjLoSB4eQwcah7uuBNcyi4XK2NjoGgBK62Ent8CLKpVXmtTgx67sEd6nvULxYLGFRtD1fwaSsEehYY6BwX24d",
  "key6": "2up455iwANJfztNg481374LKzB39qpFYKXsLsUhZh1oaTVMSJpWKQ1RvhBPTxPoJPLZpqAk13s38Lcwin9YKLqct",
  "key7": "43xqj6DsWCt6SUz2QtVEh9Tgu2UZvh9i2oV4H945LwDD2nTDR5qMxohhWuqUH4HwFYRksttDjQwfhAHz8x3LLvc6",
  "key8": "5v8X9jnDJcHjGtQ6BjKfCF9oQ97c11ktLN5GWVXWRMq25MfMbNMDsz691WM3dayrBoGD3YWejdDF3B8PM2VzxiFp",
  "key9": "3rEB8QQrBjJxBoTQBB2USRZz87bsHoEtxVXMJGsksunMzFUmAZ8c2oeTxhYAdHrum3S1jM7VRD7ca1Ds5DHGGDMW",
  "key10": "5okWqe5sNQva8x3e77yBUsFBP2rhyxw6bYxsFRdugLXiNnqN7bMzhEVNpeaDUxPs3ZonUp8bmgXXCCMRtYajqHkD",
  "key11": "2TyTDjCNFFg8X5qLwk5Z2rhFWWUGnvCKUpBMVqJ97n1ejDZx5Qa5a5cHnwKW4c3Xs2iLvPymLj1wkqqFPh4og5r3",
  "key12": "4zHx1zqvZBy7k7haLy7dnsEd57uxM3VGLoT6KQEVobVfvgiAT5TRzZUNXZ5LfiSfCcREwTajtxTkzAfLvXyz1yhc",
  "key13": "7iAEifqjmx46jsDrSTd5URdzzkektpPLaYkyqnwL45Lzfh6ktZqPUFjsRmAzj2YHXaNqVFUHXqZDAnQbqsiGyDQ",
  "key14": "3hUE5vu9UmLwQ4C3KhVEE8gptbETKAf4YMtdzACaA953piEG7HH2qPrW9n8jLbvVzSurUf6c9jMtv6b2Tga4v9GV",
  "key15": "39GxnWPSDmfZtH7B213cengtZx7BVXPVRGurJH7jcLbiRDZSCkCkGxJKjRwN2uL6gq9JStN5rmRBUgyqdQH1BePV",
  "key16": "565rwYrejnkHzRUHJT1hvYx9fhfM9qiUa7keSi2aVcAHadbX9y1AvKoB9EMbWfNdcEsCAXcqHUZ3HRxBsWRVbhsi",
  "key17": "p6UozbAz6jmGr8r3bTqJEPhmtheWLubphkuKy8ctDD5j3CtXzfHcYrdKwHCX5kc9dmBrgrSFw6HgRX9TkhJ95Fn",
  "key18": "4dLJtWf2XUJtZjpZYyKud17pTXtQqKhVbxWU2ozQVsFsrTGy2rcaoPmvcbKMsyzfiXnme2eHAAeTP3Z5epCPwdH2",
  "key19": "2hK1Am2yNELgpYAeXsZAoAYHW2PfqXrkViBE8CM7w5Jr2v7NyMrB4gkX7QvmGvpsE7bLf5rXyBRRc7JbNZ2Z7McC",
  "key20": "5jj5BF1RK6HV4wXNb2jkxmX6vmpra7FUaW1EJ2DnYdKZVDgFEKGwbpEsdjsnrGeQieuBqyJve4kPsXMDT1ec6SJD",
  "key21": "4J2Wt21syM51c42PN8Weq1fTuRieUn1NpfAGqbCETpAY1F2y5xXmrrSmWY3KSRatuwVrmPQnGCWoBa7GoVvVbscv",
  "key22": "2jz8cKvE8f7nfAknjY7BLuDiUyZLuLZips4mJsx9GY6SL4Sm1r2x4rQnzPv7RSDwuc9qw6zANufJzfAhZJP3HNAm",
  "key23": "4CGp328SFMXTjyayLuw2GLH4evcwTxyRDarmkbi7qrhAETnqTegh4zvA4w8icBP5oKxFoc88ypSwTDp7ua7pMzxH",
  "key24": "3ARhM5VpXPTAFPZhd3zaqA4o9QRkTHMLQea2VNrV5PfsmEKnpPCQ3mLgzyY5fqhv6NXFH2ux9yj3d2nWiQ4JUj4Q",
  "key25": "2FASEz9xMyNzEQbFiCpsyhyXyAT4yeRmFgb2Cu1Vm9S9wCJNZsgj7oT1h4Yb8SHzjqVu7hS8Qz5ndBrNFCUPumdv",
  "key26": "2i3s6ZS8pcGd5PyYvLfLkfPkHAh6YVyfP6cUk42VhfwTHBy9DMFeCCifEE2Y4eeQqpPFnfpp2ErbSosFoW147F4R",
  "key27": "3y5p5gv8MYNobbHKaMvr6oz3JuDPL31uS8JoCde8JEKid27cnpLfKXmU7HCfLMYz9dvBTU51cknFUFcTdVYHHsQ4",
  "key28": "627MbMi11Mot6gSqHFbwmPnPj7aTtt9sxE5iZz37QQ9Ega2joEjShKUz2v1Q8gkJUHnQ6igfBDaKQ3EYBqT6HAjS"
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
