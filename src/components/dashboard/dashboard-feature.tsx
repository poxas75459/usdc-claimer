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
    "9TzchheciqauyUcCjR8zGwitTLz6FPXnLvyeYgAWxaFokStUQGqcBFnWHbhgxKzSUE8B1kfregwJoHsHocyH51Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qSdCadB7UAy3kq2eUhgUj7ahSao4kV2AADXKqHqh81JH9MUCEy9LhN8f97n1sKSBySUgtAqNkUpD5WCSsLDS7u2",
  "key1": "2ijkpgC6iZvKm76xkgFNxFp5yggtJzWvfkEckAaTPdQNKHQLP9CCPLfvdsddVkexLWPCbztSAyYLwT4RnkxPoZKs",
  "key2": "5Dht3EgVdCZKPQaq4TfSEWuQHKpwCAzG2U2CBN4wmFENroJSFy1cb8gfgRe93Ejq8XgELMzw4CtGfZbhLyLFgspu",
  "key3": "5Hv7Y1Qkhv6yz7omwK1S6QYGpgEDoTJhZvc1YfUKmuSyZGTzKFbf7WxDbw6i7nVqiiAFiBETsarpynnfZ6AEBPRh",
  "key4": "rsxXPBoqTTUebHFbtVfVo8kSguckP4VvSKmx9fLSZHJuWuLktfTMMMvL7wBmhCGrd6weirtwRf2F9PbCiao5g3r",
  "key5": "3mGKU7aHBb2QXuPCnEA6Kupisfk73Th28DCH5k5Avt294ZKzERBQk9jaB5EFKm9pBNoN6nx8rSHawPXQwmcqqkN7",
  "key6": "4deMyaSwaEiM2mQGfKUi6yX1qrzNkuN2gdrCNJYUbRda5e8xtfn7CF5hyTb8pha5Fa6f1zqJdw62pzRc2sWDnyKn",
  "key7": "zwvEkqBY62R5VPbF4bfrHFprv638rFAtCvAXDEJD8Gg34J86mPyepBzfzVAseZZA64Jp67mzxaa5GYQrHxz9EbL",
  "key8": "C2SvkRt1D8pyy1ntbPj2r1x8tpBAzJPTrjuhuX8LNV1Jh7npKVBZGhiZ5DhTqir8TQRiGZWKFTvK1GCYPx4GM65",
  "key9": "4zw5X4xphMWbzkD6GwnTJsqsrYnZ1u5o7WWTNZUnrm52PqPfg9QefjhQ2CegPV3uvKvHfnpTe8SSy7x8FjeLzASZ",
  "key10": "3uYzb1JRxPweSGvNcCbpJo3Qs37FCYvEMd3VmspncH2JWucTrGaL8c3JLak9Yd1DLpEe6qjuN8N2iT4nh7JXXTHK",
  "key11": "fPZeHSrFARz4ngyUnc9hoUZGgPo71VRg6M3kCXeN7jXMwLWRFQA1U8USAbF3ZWgBm4MhhbVr4R7uZWfFaeKRbr9",
  "key12": "4bxjdQ6CwvD1rBFVQxBBRwpABW5pRToSWbx5FSrr7BnJyR7JyCDitTt5etFNjwfSHVxmvtP8sin4rm9Dsigo2S57",
  "key13": "5FC7VqeFiBivX9Mou5m7zCtGYjAA2p6UEBrDeZqgrfqUhPqNE6YJYQBfo5wK9gNuH2zUahCsAkNoBBpFGb26vnKo",
  "key14": "3Yk8Hmsm4ZfN9SjRCPsbTuYsRhW9NHemwnyiwejjg2RnhSXuv5z4PJcVrqVpkuCXsSjt8AmhJ3s32hDHgY6M4r5t",
  "key15": "3qqx8rh95ETES8SXngZFoUdzdD9LMu66s9nq6A3WrUdZthtAfpq6Y22fYLY9Ba4G3wH8NCEERxWu9CC88CB2GmhY",
  "key16": "52aFgu9nijbEnwBTtzWYRWu9Tus8ErypiG9BtFvBAoFDHiowgeStgAKnnzj15NtL7w8tVHbXnLukUnLn7XFPaECU",
  "key17": "QYEFwc8E3HUmiwsfn4MSZSSFNJdG6W8cZstHFChSSzxKL6YgqvvaWB8iuENqQnmtt7MdEPRvy9jDeWf413575gh",
  "key18": "2NDE3GZ6nzt8pKZ74cR3g3EF8HegGsnux2nZLkSrvJFokeWVRsAtqXwBLAzo9fGVKwB7YfzZcU9wkgLes66kvXKR",
  "key19": "25MRCU3V8AKvr1CmEhtaYX3cbaNXAxE8AZcDQRB2V1Fvjnev1f1PZsLSRaviZ7t6F3udPtEDmapk9nDh4DsVfNBU",
  "key20": "4qhfr6FgFZ1SLPYSG9YWXQTywcQFqPbwZ1k54iFUUdokzB5rVByGiAgciC9zfMw2V4TBcLUpJXJop6MQe7NPyWa",
  "key21": "PdxcTGCcQzugfSDx3r8H8AUSFQ87c1xSqdUSytEtvbB5J48QmEr3qQ8KdNpXL6ttaEDchNat8KMc4ZeB1ybq9kS",
  "key22": "iVD7B8tQVk2unVBTSA5TAHs5gXK6VA1zBP9bYYjC9u5KVdEH5R5FVLQvN3yKCfxxdHWk4HAmtUAopnsRPoc4xCW",
  "key23": "pm3XoR3xsuYBGswwBjP2WjFuhMUpK833WtygSFAHuKr3usXbUgDrPS5cG7NtonfArScY48eCfxZUGtyGe1NFzV7",
  "key24": "2kdoiNeNwSWm7rBnw9jBZUirD1Py8CbF2YStnRiBG8h2ikV4BETMVwVBmyeAdq7SnB8m61Wyf1BsGBHWtEHXo5T9",
  "key25": "4ihMhM1UTcEMkztX3icz5Qi8qm5cbj3HqaZVuCodUZZ4UgGH8r2SrrBico2jEnFcfEnTGLjJ72HYKvDm8wXVHo9X",
  "key26": "57CzDY175SyjzQecifwGiKKsKjHUACXpjVVFP8Htvh1KFbcoGbcu3xrMabdjkzuvK7tfqfqg94pozQD93wMToX41",
  "key27": "4Y9mMZ2eniBRDoJbbyg7L3sgqNUri525k1s7necThjfdaEf1ozRRZ9a2xX32K2t6gzWghvAVeeorLtDs9n4JS3qT"
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
