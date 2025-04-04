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
    "2ww6zMkPh4R2fkMVRvnkXcWHhUZkhR5M14QwaVdFzcje8uvkL7jmjrSKrEi7f8PY8TayUBneC2yn4jg9qBGzzwPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q9WveL6hNtawwio4aYHpgCF9Vo42hkzuhumLR9SjR1RAt6JxAgDAsS2mhBNkWcjSBzJ8aWw6GkFXsxjzvNVAdJS",
  "key1": "4bJyznd3j9viZ9NyKmco5T26WvML1d6DiG9uwZq8XF3tQSiSNVuzjduxfzRgYahtUwS2G3ogjd6vZi8UaFQnEmZz",
  "key2": "3JfA1QjhaPuBp7MJATx5gPMgFdPJVheem6cJRUFT7jVKhJVZVek17rtR3DDDPBRtfscUjU9aP8NhfyjXzJrThGax",
  "key3": "KDmJpW8uZaz5Ax4ac8NLjvD6r6qbd7EgVi7G2WbFLwfAGEhuiosKDDzFNvdSCXMB56gN2CQg8TFzo6gv8vfi2Hn",
  "key4": "46jwx7GuuNQfipPxz1jHgyHwrFAg4GEiosWKiCjR1jcjL5DmfwqdsWSZrxADqxC4zy5EypvF4XyQqg5CjWRyX18q",
  "key5": "3hH9xCad2ZTdkXGPLmuV9RMnnEPf2e9cA6DyvNXvpRamSStDfo4XgYLBRCncwD35F3PatdbvFG9rTfMuZ8GKUCSA",
  "key6": "5ePn9zXZ28Zw1jTttmoX2SZzck5BNosKzsbKYs47qE6yJEE4pG6yB5LahSavCZ1utEutoqZpgwLH4hP8YWGVgrLJ",
  "key7": "MFRprFUXiQvmgPv9sofLAftHXsFjSqFMNzCmCYWswbS45BRDiCMTDFK8btECtqdkPSFgjFWqyoHjK2AM7xFbc8k",
  "key8": "5uVZ42gseqcfLAPHbkNHGPkRCVTTrNMTgkTshsZseMffMNazPS8dg5AaL44Vyac88excZsw1BybkFJTKdemcbD7y",
  "key9": "5asj4wRRb2g21j8jcPn8zzsmz15D1Kyyx6DQjD89fuCMUgjH3X7htDyTaJ2WX9xLvBrPQsS8pBYLQKCyqSBGjqe8",
  "key10": "3UUpGddAduYsTemjoSibC2wPWzkAEe64XmaRk2MxgXMwtcgcbx5CJnzpY9CKt4grHunvpebTG7HfVZDk3GFgWHGo",
  "key11": "5V8xxHtiEPet3otKHb1rNwN63WfrCjmuDbfGxG5LBsv5wRjLR1DipD4nRUsE191RBXGeHd8d5VKkXYVN5HPQVyNi",
  "key12": "jqk1pnhYYZc8PmmJQBiWwYu3Nd13BWjoLhPaSav83npNqyQDzf2QC5ym6wxdoLRrHvVjepnfahs3avsukoYwt9F",
  "key13": "3KZvbMQtUbC4VbRXGBF4ngmpWiBrd43rjTYtSpLtFpFsQanCUfpfLNqQji6dtnW9dJbxzRtyXtR9CNn7VhgwC3QV",
  "key14": "3r7WAvqQcC1nqjwTBLRNTEF5Uc8XM8igpLtPhhqZsT7mumwt7WqFjwU5vrv4n41DCxTEJjU3jwtAFTHdYL36tEHs",
  "key15": "4LwNvqhhRyGJe5DmkwTSn3o8Unc1HNT2e6vn6K9sgheHej8K1TsfgmHoF3Ffx2BFAGxwBdZZiu13Tgcxaz9bsQLh",
  "key16": "5MvdSWS8PP8cWEXnFJEJLpw33r3MvgmcHaKx9ETwZiqqPm8Dog4Wok8uEUoDqeBh5Vs3kChDyXDqsHa7BB4La5t5",
  "key17": "2NhQYRNKHa54Mjg2tC8HSfn2bpSgkJ6mBDsv86CmMpb7JGBw9XrgUUkin3C1jfPxuUXRRpPnXs7i9hGWCg2ZUMSH",
  "key18": "5h5T9YsbtwWj4kqjTkX7Tcm5UnfBPPz1tSG2QHARjp538UuWFPDEzwZ7JEtk9rCLZpinHU5ZgxL2q5s5F84S1ZBR",
  "key19": "5AGobmGCPjSZnmgDXeeMiw2rrKcngpTvB3enF1xpNJ3ZFEk1KSBDL9HMuHb4d3RsAE9sGG81srAQ6MdbP1yxbvhc",
  "key20": "5fZC9p1fG64VZnPfMyQyWaTbVJNfFjjU71rf3n3AEnUMMoofmZfoecS8ZhjTxZmxvsJ8TwQuRGhpupkHTyQknbXW",
  "key21": "2GJ99vo7t5p8mAfhd3kfo5p8tirbfQ16AMXqGqwmaAvTqaxg6vPTVhY2zXE8d3EKBWEDiq6gkzo7NwFG55jSqGHV",
  "key22": "2PX9RZgpuaKeySDHRAxghnDpTvwHWcCg7YeHnnckXTDx85EucCDLsPsqZpxAWNXnhXsjSUVu5hg2Yb7X9srnXe5r",
  "key23": "22APmeAMAcfnQSJZaFoxbmVBiMdnNyV3KQVxEWSiXVDjzxw2cqwPMffVCYUaRswhn6J3C8JfWv6Jcybbx3Xrqyns",
  "key24": "4QhDkjYxwh8P4JWE9QdkLZo5fdkHa8vwxwc73Md4JaKtx3Lywdi1sDZhjEcdrmds6jf6UdvJkkkG4B2Yj8auLpNj",
  "key25": "oosGAG8qBroGhbDwBhgfWcpb34RJDqmi2HRH1LtuQcdGkRpntZimWTEoPeYLnf5gvosn8Z9HFhquaGTzefiiqF2",
  "key26": "3R2DpqHHJ9r1UccmqkxRkzH8Bd2n64PxnVG6WFBN1PrmwAJdiYs6hFQi2swLPLuPbGoj9ftiY67V2hUWt9N6d8wE",
  "key27": "5y1wMMwoBKgYXCfMc4CUHF8HBbSoKbQtojzMk4jCHsyQ5Ak4HNzfjx7Hcb5hXaxK36qod7F6xWBTRRBxz4QeWKkf",
  "key28": "4HHNfpjnpLVRxFDT2UsisVDuZJD8c3B9AP4GXHeRfkEYMdwTVXY5paS8fJn4biWRGxxwMWUJPSEPncp4HCkQ9cda",
  "key29": "4KNnAr944rMxg15RhokWqdew9E3nGZtTWnR1UxVPGLXjBeUjGSH5tL6ZNAVT3cjZpJGwygx7pZg8DthBLunsEewm"
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
