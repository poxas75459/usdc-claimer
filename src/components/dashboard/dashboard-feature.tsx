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
    "PUGCgGsW2Hiet4jA5YDC8P4qEEhhoARebQqWDWr1AXjBQYNQNjVtLW89SMtNQgwmYd5xQcELFskpKGBg2FJ1v96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xGxn5QPLhdwHWuZYTJYjeNZp8WiPx61HETdcpgLwnqaAXzMs9tAZ8mx4pbyktzQH8RXsMbwVNUm9ch6xdg4F5XK",
  "key1": "4WjQsmAYxPjYzQHDwScxcRJx2XC9wUKtYerQEEG3HScuxQ3fY4pbfvphHkkbdFShhELg21AemEisHxscdPyNy8cP",
  "key2": "4ULL2dUsRLcQwVgBE4oeNMsD5CZ4ue498WxGGUiA8VnYYvxjutxouxUUJbVP6EAfHxs4g7sxL1TuMsnobqCr31Yf",
  "key3": "2JwsxRMzAavA7ZLwFNV5VcoieZVy1EHoGVGpESKdwxR7nYfmXXqeH6duiaXnMwL4GYymc8wj4KHrSCSkLaSJ3Jzp",
  "key4": "4KM9suDdFL6hvbfpuqch1oe6tvHGT4U3LrZUrfYYMydZcszj8B8xX1VCp5pDonBesTGUaLotSEoMY4Xp8LJvpmXh",
  "key5": "2h33onKg8KHJ62wPV2hegK6UDL8osLqv4rkvH9vd9dt7MA2NjDxo5BimvE9UrxFVyEj4xFyBRjA4tV6XPJrVLPRB",
  "key6": "35g6PjdPRrgU6HT1HvSdjVBjA7DhFW1MP5kfwnvMQ2Ym8NgTU5WLuxserypSHtWaWfXwLFQWs5UYB6DaGXavNYVy",
  "key7": "TfaqjNhviyFXrP4yoL57av9qZRHQ2NaautzyTBgZh2s5k9wUYgZXPvuZCN8Fx3yqswLGV8DY4nnPBapWVBQPTDP",
  "key8": "2e8BfHKgZ1tczsRCL3HVpyQvNneJhXweVZ6tZUALTDcCQ8xSEvyRgtDRKmc6f4UprgG8Nc6qFMv6es5G3yjds7AD",
  "key9": "4xiVjP16cKYoMymV4RLPwAfA87Ykn1bcVpEGTAmsFYACkUTs7gVxN4vWRRSRyBzrqzp7EmCXTsYBjNzskgjTMATx",
  "key10": "4kbsVF6UGkrXgo7V7rYqDuUggryJ8E2vjf6eyQRtRDXBnn3fiywzsp2edeUJQfbxiyH32QnVd7DHwB77Zih4kf4y",
  "key11": "32UPCCo4RSExJWHjBBECYsB8scJFKhQwrvBzpLoV6p3vLNCR4deA5XJK6miV6dMsjqgzzap5aQaxCaApXdq12L7F",
  "key12": "2xiRruFS2zwxWToi9iNs7tFyZZFmbmZwi4cXD15uvsuTfeoDTjdtrJ8CDaHxXTMFGnWzxgkJZW9T1PVBBmCokzjC",
  "key13": "bgZTFCDjqXpEqFTyRpjJeoByFS72mBMf5J3azqFEFozeCTnBbdZHM858LyA8hvTMqmdvXyLkx2nU45BjHnZT2e5",
  "key14": "2VBho5Dwvgids8p9dsnYoZrr1zopUD946K292ksrMm9UJAuQzSYTfx6dY6M4VauVtJDFTPsbgRoNexi7yB87YRPZ",
  "key15": "35d3UXnu3XX3JbmAKvX39CpvMMa1KnCZQmeEFf9i4XQphes11jmy3zU8tjYSmH1prozfAojmFUEp1tgwo851LZpj",
  "key16": "3xuPZMUf86G7npDFmRnmeWw5tpvEnNBhBa4VUPtXGhkY7RDrd9qgKFPyVccXm8VB3i23mnk9TSfTidiGJrUTFzFG",
  "key17": "4JidrdFXr7ryvCFD5CtxHMmFdvvp1WNLB1tBH18Bi1dRgQbFg7KhUs48mpi3X6FxDTLdyvX3G1Fo7bN86xE97E8",
  "key18": "4CUNLN7LDrzyjXmKtBRV2Vfhv8TXaAfLSiGwweLo5FiYgTpJFqHfuRYt5CbyLyigBehXBWDhVC3hk48X4rQnuZ3S",
  "key19": "2cVH5d75Dx46vguaKCJGMP957gn39Ek6K7xNv83mXUcNVh3suHdH1weVmR64qZHoZm6sjCA45cKKZRGySepuRoYc",
  "key20": "5tCACBSHAYqfxFqos7CNZuz2eCpDKiKJ6fHhWLYNozYdUtQB9gvKmFtfxQXjz6wHPJU8ZzBfDnC1SaHomvUVixsG",
  "key21": "4U4ZJaYoKbNr4pNTDRHMfkWYJBiGwVMcWbHHihvoNsbJPQDu3JAD3xDhkAsYWvBHZzsmqtFDatmMr6vdpswBwWCN",
  "key22": "4k5aSp85Kyrfb1zDPX4LXqLTdp2VmpaNnxzQaDKuFcztmBVz6g99V5vyyWZRVZDAYFMTsyPPXn8ayAiUtJJHQKq1",
  "key23": "Ssg8vW83L8ozfZ4EXtaTYNinTNH7JET8qiXi54VtYwBnzeTKWwxwSVMaeL7G145MVXbs8WExf86C2oJg3dHcmvH",
  "key24": "5o69n1TJsJ2WSMZCmhFu5TnGtxFaJRvJY5bT46DfPaLAxbQYcnkw38XWpfR9mQZWKGgA3MomNXxWC6wuo383zYRN",
  "key25": "4mypxv5As7k7iRQqByHQLFn1KNAiBerHjdE5CgHsypd9ynTSne47rwfigLyH64PaennaQj9G1eVmqFx8qY91o1FB",
  "key26": "5HU8C65cGocynJQBZKzvrdaGeHCCLrDUC6fGdnbAnHeyvW9sytxbfjg5ewapgPNVWEAB86x98BhvK5TpN64N2ZFZ",
  "key27": "A4v9Sjikb5dfw5KfvB3vinABNUj2jkWqPTU9V192VctEyDYJtFrZNktUJqBeMdBNXFfiCnKittaLzaFsTNoRYd7",
  "key28": "5uBvkzSw5hCrTCEuiYxFFfLCnEEkMzchwASqsGPhpX1Kb2jpyA5K8JU85SvAz5LVeJvdexQHyEwoHA7tmis7QFyK",
  "key29": "4jeYZsEAvbcak7X56Kk9DjAenuL3RuSdHvM7c8PjKCmaPbpMsSYXPVHt7L3163uhCiDysAS184knZTsXs78Hduro",
  "key30": "5d1mYvprCigZRnHxr6UTtHU9Nc4ki7n5XgwZPMrLDKNqkzr6PRshkHBM9NhkHNaQPJtYQEkucSwmhZ1eX7Mab9Fh",
  "key31": "5JmvNbv7daF3bVsNkgBfGqNt17cuYMMAdAULMReEE14PDKeHFaU4uAVxmqhm2MS1mWqdshA8REkoLfDA3YCyTt4P"
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
