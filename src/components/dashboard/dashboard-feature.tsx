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
    "KVWCJHdXwS4jx6UFgMgCNkchLq7NeHR64H2mNHDRvukcev4ATVW8fV9t2FJFuxAvqF6U6tvUTrceabx5zjWfBkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PoEb6mQeEZ1kWCirQQN9s2gvmaBuuT8yaPwwj3Wd1WC3Sb5WitGaDNpwfCDZgLsyacedTTh6U11BH56ArCChJkx",
  "key1": "2fixN2R3AAZM9Yt6K8BCrTfsH94iXimC9oMkFgBZb1Nhu7GMaHKGsEKABvfdHbYV9Q5giH1vMF3RAAiRYcMRsxBp",
  "key2": "8R2uY8iTWnYfnpyNct4CKADBJ9uSTBz9otswnwDC91E7Wsc1ySaqqLrMDNRhodzRayDb5wS1preu9Nd2WHqrh12",
  "key3": "4zUBznE6fL5WER2wXAZtnW4hEaKRJUWtzNYiKr7x2qD81eFH9VgaQ7yB7QPVZZsFUeqrj3BkqTN1FgCopoPj41vM",
  "key4": "51jCSmqz4LZqCZu7xmLqELKxTj6JpensZUc3Zd1mPPP8PJXzWwdm2mf2LfC2JoB2o4gvGcHSoHdyFXoMgfYjQnP8",
  "key5": "2wqfBrKbaxyehs7rHoCztjx2DnsLCQVukCsELs1amLz55dcb6ymY7nnaTHsat2fMZnYGetLKsLbMM6sVntRM56V5",
  "key6": "67c8cSw5xQW3PpkHoE9FTBvKEH3wDFVaSBsMVgALBR8qT4Nji2FxVehUjouwVQqoLvPSJVK3UEc7WLwxUjoA2fgG",
  "key7": "YcmBeR3RSNTTAauuq6PPEoeorFQ3GpRdmqZuv7gvf6UFMweLAu8KbREPqGjY8fSvm3aWuBz2oj2kmw8A2tuB6x3",
  "key8": "2Jvj73qFHzrtmh31R887twcPLN6qQSz7gqDtLBb6n5ZsHFZvJLD3rWJZccsoRp5AaZHm5U7gebLghQD9QF8JydzX",
  "key9": "2FWSzezLyBuw29tPBn9KawC15UY98wMaHbTeo37J8NUL5yKZJ1nMJVtpyzNzP7pdY5GW2hdfFgvPdLKX1RMKo7id",
  "key10": "5Rtxti7gChDUx1cmFyhT8JdXRZ4dPdcES6XiFmAo8qjgU6vA9jB3Jn16MvroV8JEJcknuKn1THSmwgjeAQFgSSah",
  "key11": "AXVkF2RcV51J5rNmjbqspEUjYmjXHFoqz8RUah69LMBxm6RWYfQQAkEWNfE621R2ygWmSwHKAXh1d57mPgjBhFf",
  "key12": "2rCKgXyLLtaNbJ8ri38kYopwoVF8Ub2QsXEmVchc291A89fW2Juf8nDyfUQS9Aqjo7BJJ3e7TBf3wDVfKu3BHsC2",
  "key13": "5tEES1Bu56cW6YCzid8qFzWz5GCd5F1er2rV8TaSxZ3aNLNBwygxVtN9Z15Cv6XjLTfbkKWVBN4a4ETXVbFUeGvp",
  "key14": "5kkqa2hHhZ8g884CGpbgCntURrGQSaE38D5GNv8ciLgcbfY7wc6tUVYTGkFBYZjJEwaBbVEJrKmk8hwcX1mTqcqg",
  "key15": "x7gmzvJb57uKDQuuZyTReciaMFaQzky77qyxBb9Fa6R8VSPz25bk5A2k3BkLWGnjk8ordK1W8Mj8Y2h5Y6iEKfX",
  "key16": "4qGYqGVL9YNastbQE9eohFhi2MWAAGX4ctePGscVvELcd68eZx3iqo5n4CNs9PBYPL7CQ32f1GWfhFM4Z2hy2bej",
  "key17": "61A5ALTK3b8Zgq7RXzdZJZWFvDsxGg6sWpDKvMXegg4xTj1mvWECKUatq5Hzv7paasG3iC8kYmKFZohLe3WGsYY5",
  "key18": "3uw6BmnW3XKK9Y1WaBxoUseEJ1Ask8QRYMNhjttn5Ksxtm4qp7E6xZsD1KpncNsvkSMNswJDzBdpUxdcCcGtPo8H",
  "key19": "2mLR7CQ2NAdaFVnYUdBfhneuEm7miUvdfv2x3f6GXUhmGEuvMLiZYqNQjTDQVffVZxEws9xA2bC1wD35z2b1AxMx",
  "key20": "26pB8eVuZVj6ZvwiQMMoDG5VTDvQgisRMVgFQc5p9q4rs34nPXWk2arPXD3ZKCgE2MGPrH8ucn4S13ku2RveAKSy",
  "key21": "53cNyrYHF5gxnSyqfQmt7MGn5A1XHANLDuGMJnHaWY4xgtLphyyAp1TA2pd9G57wSJRLcrJ3Qp23QJ53LsB7zyNu",
  "key22": "5vL1U5DCy6FfPFCgJy6AV1LTFiRH9k4KnRD46RipQta6w2nVEU6rPdGLSTw8pK1ZkoSZcZubiVomiUtHHWLMVyr4",
  "key23": "3mHQs4Dt1rspoyxkpes4VUv8gQ5Pck8cZuA1RE3XK5UKV6h7VrLcqJR3sWHZtYENEVi8Cm8GA4pBv2PyZWhunjZv",
  "key24": "4ma26M6Fqg1q3C9gE1UidET7CjF8SujaA82Wc97aAScQyGS71HNF7XfT4DNZ1qKqSvxG62TdDefYS8viVtAtPUZo",
  "key25": "4VJF9Js9uNyoDSyUKcH1tCiz2SyuLdnAfnhM7CBMn4QyoepmRHr2aBEGmaPZmfxbgyQhCWB6129CpnxrvUdtHVz1"
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
