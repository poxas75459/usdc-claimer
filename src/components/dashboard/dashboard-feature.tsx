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
    "2hQSRYw2WC4V2G45bPCoy9UR3sM4ttJZLsqhs9bUaBZeyXdgag6q2fLf4UPHvPpD7ggxFU4KwXR9EdatxXGZ1V3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wgeq1CXgjhJXqH34qfbF49V9tiYsF3K4WQDFw4wYVWQTRT598q6WGYkuHiKduqgK2kVQEXgAx8gNPreD6copGRn",
  "key1": "3k8ANz8QEaKChWj3BLcjnWykYWeFg4Fv7fegmujuQjb9K2AxpJb3rQs67FGTF31NbsxBKMxdogxFEctmVsdRsHdR",
  "key2": "3g932NsBe8EWkyXc5yxFf6d6UoNWfeG4X8hzQzGyu9CeKjJnTUXeRnczohNd22uHKKDKpC7wcE89gy33E8uiSecd",
  "key3": "yN4nLA8CcuRmDvP9UobAC2uMpx5BSNToZJqLnYKoYku1cg6oGnLZcYgCuFQC5jgEw9MhvUmmMcVyPwKShxAUfPt",
  "key4": "2RCY73Jo3HVEUKybunxBgCA24NXYwem8zkzDZyC7ko6eh6dMoicnENM38RT93pVirsreWNe3U5WbmNk3ue7Dz8yS",
  "key5": "2NPvbCkDroJf9etfEYVm12o1eJf5ds9ZDfd8jiBXxBsBCVZibVX9hAMm3cBNRHbhCcUndtxTugT6bnroUm1HiM7s",
  "key6": "4wSmmP6a2cPgwTeKtf4VViMzhJkBYonQRs6gZ3peDpVyEB2ND9dHjbqJ2H4rC5ARK14Nhk9eyCHNfCj7TxoqdXtM",
  "key7": "28YXmyqr2cdfxQSWnGQegyoNt3Mi84PXbsV8BvDqzo6MM61s8rD7HSYpacVqLvTEzMqjxkQyB7cv423sppksLgoJ",
  "key8": "2zULLYwvbMes1srws8mZJthU6ZjrrDwajXFCpNUYDYKa9gxwnEPkiPDUGh7cWshgHSdW6hAAKwGRdmF3gdgRrog8",
  "key9": "3gjxejdnmUAYc2d8mAAUvwxJ4DEigzxsPHKjvtSdKAZs2zp51FnRgubZEYrePW3Y6gUiGsD8wkTky25XHhbZTVjg",
  "key10": "41Bbgn92NcETG1T22jWBRYwU2MEwMmfhiFUhwudCMPaPNF6Z1BBSEyfzvpE9kkqigeHkf3XA1M5QYvpozcvkzkFn",
  "key11": "9noUtjfwZkU6uXeCMu4xqHSXWrCxJ6RfRwjt6UP8WCWHpAPDSsf75BAeavRmaEbxJpd8hUE3LqRHjMrjXMvJekT",
  "key12": "4YYYQEiE9PfMq7GzAKh7FXRY2W21NxaDiSQAU8mAy49HT7tgpV7ymfpBbxam54cM7L17emDdBK4snwGaEhLq5QMi",
  "key13": "vjUYWV8WkNKZC4eR3vvQMq2yNGf3jFxcu4bKp7xB2KXqbfmg5prgeCg6oTi4Ft6xKAY97eTnDqpjsJXskqpBrcq",
  "key14": "4j4kk3KwttfKgFZiXfKSojz7a7TQmkVysFaqnxMfLHdZ97WwfqE1odoY37xwQi8wby4VBvVVJYZo1uzXRPwLM9Wp",
  "key15": "4NjJfNagRbnUEC2K4nncvmY6UQxR5nepc2ZNSdoNWduV3Tj8orRSK8dKPBY1TqzQN2o1UZe7xr8SAViTUPpxzjQV",
  "key16": "4gfe6TS3EPiwaS3JA2CGy9W5SQnJSn2pB5MmFnouBCcAu6CNWxotysWCLbkBuZ6pHLkKM6FEHQyu1XfCY2jAy1SV",
  "key17": "22zBq8HLLrxPYsy6mzRtGLeath2u9MFZw2EiQ2bpT82waCPkompA2WPBecT3V4jgziXbpsiMESx1rWfF7Hcd8hZ3",
  "key18": "h2EmViTHWvtcqyfedWTKYkJswpfWMLUBcYxgnjoanYvwnCDt7tycL8HrcQmBBJjdm1SLVWw6ri7NoqGoGmHTcjw",
  "key19": "5puAMNZEPW7fvp5MuJLn9DXnJCKYHPNTv1aNgTANs111CKvYJxW3MXp6BLdadfGc11B9cL8ejQYE3uyCjuhjX7Uj",
  "key20": "4gHmZZhaMYYQ7ULPrgZSJDPzfpmsQSA3ZzfAtLv5WaqkWnNYcmofowsH5ZXnTVW1rE56wei3QdCWqT2sY5bX1Pwn",
  "key21": "2LjTKTzHuw3wERxVwRFc8CCDJQa8RRuJDmbfkR4kwojMHqVDHnpVnAsWqFmbHXyFi7NmQVctJS5FDFhfe7dnFeac",
  "key22": "2GmSySKmmT46LqXXsWXgfBkY7jbLbfFTzK2ciH5uxAhD2vnBbzro3ksZFKQoNWcLAtFn2fQ4bMFtqZ8xhqEj5yYY",
  "key23": "3P6ieXq3ZBLjcg2FYJu1kj3zidkRL6W1abvDqscjYLSegcpfP9ScStnyX4uhkxiEebAf7EKCMyBRezVmAcvu2qKe",
  "key24": "4FfM8KbHGX2mCrhy6pZ6ZYwnvGPt4kBPE6VC6bL66oiau8yhL3tAmkTHCA5vEhSBr2jo1b97chUR2CSy25rGoVJG",
  "key25": "59b5nJWTkjUGpJh9Skr2fS52DGRU35sdtHrJtiXgKTV6j3DDUvuB36UGajtDZ6feoXfTWTuWp2P58gTzrMhR6Y9a",
  "key26": "5qSyvFMs7ybcUCgz1Zhxg6VQq3au27vJgHPhrbG5fmLRABL7xVNrE1AteXE8d8QgoW8miinqV7eZ71LSn9eFFrWk",
  "key27": "2Afh9nvbC4vJxE4V3JHbbaaSm2AViEcqBXsPBk3x1p7qCYnmipAe6Vx5NvMzFPLE18NZkWkdrqmN8Yv6isMcGjJK",
  "key28": "5qz7WaRpEmRmBQmvc6thqwc9psGHnmx1RTxSM2U8XPFP4QRCmH7iBabbRTidhKAQkcVpio2Gr4St9DxoevDBTKgP",
  "key29": "2qimXmhmMTuHtbrhTZNdEdas2rGyhYVULAsKmvLBw4bZq3iVt8JhnXS95PNWunKMNQGmnY61ajmMkyXemT2tGqLA",
  "key30": "ZaHcc6PjfDgomaixVqeDbUoGjCnVPhF2Td8VVjYU5Cs7AJzWmKkeL4mtQ1HCTRWrzhjazcsTYSduYe1NZ4nZsQN",
  "key31": "PY3RfKwtX3tiS2kswHE33cCbeNjH47KuQLAUbMG8dSF23J9wuBC9VvzQRktsQVV5wPCp7fBi6VkcPM6cda3F5Yj",
  "key32": "aN1UBLcXV6LsTp5puNiKwBYnRgA4QW8hp2rc7LuR4ZxHGfozHzMahP9HhdMuwkr4rVdcZeF2uHNTsQRBxJDP5ai",
  "key33": "2fstRrxP7JmkMvq51iY9fcVU9Hmy2iuU6w3FKnvtW9WPiY58yQfQApgU5BLJdVnjjdtwzEWjs6kzUqVE2W1XoMHS",
  "key34": "kWiZ5GFjtzBimkcupHKdwoNPVnRZsiD3HdGtkfiR69nsfNJ28ZZeJF1kKyvHA9QmPDyLSmpzP3SthZYJ19Pajmn",
  "key35": "345DtdFuKQxxfxQkC27L4BCmGj1J5LDsMmW8QuK4FJsTQX7wpn9Wrgngu9Q6RpJyK7FsSG9QvW5hkN42awQVJ2nj"
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
