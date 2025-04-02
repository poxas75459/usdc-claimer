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
    "2w5strkecUpqgeDnwC65zBLwhcFGDJGxErfQAtMZHkfAtucNdAiF2oF2eQchLCCkDHDUGZu4PTE8qQsvgimvhvtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N1fikdkFxNN8tApmrDEzFucZTHgPtCk2PRcdamTbgCkkJpwj4wU27Wss3emPrx2N5ZZDK8c2TGTAbo9ko17Sptq",
  "key1": "3ZLX3i39qAqJwCvb1vYEVddzLQvFRWLxiRJGviweNYbb84LEzexGJ9S3NYp9RJefyBEJvwuwpGdXayRdjYNNM7fF",
  "key2": "38v5ugje8tqngZ6kDtjHNFaBNnghqdLg5X4kGbceRaux48wvTWRug1MF4Yv1esVTGgJnqDd3eM928EXSZxLopQ3s",
  "key3": "2bcyeY6vUuHQnKKv3ALwWcAkQMgPNnWVmWYWMdNo7Zc4x5dVtUXH9QZ6ueL3Z5YxhSAkDxw54Muv5W8VWFCVAue8",
  "key4": "4pwg95jGkXCpmop8nSaqFFbf3FP5XDrNQ1fJ1nGar9Q5GMAKwcF7qWLRWAVBGgmKW7yKAGuqLVSag556E7bbeAug",
  "key5": "REtMEFjdUmZ7uB5FRXA1mc5rMN5pkhZeCB1uGEdxuCyhvLnWwAPM1SHezfxhCQS32V1hjvJATjYAPDakMxVKUzy",
  "key6": "5HHSmc9Xk7GgR8uoYYgiwtqfbRjJQS17WHjGE13USUDfkBYBQ7JmRCoNh9UUEz83iyrCKwrW7TAzqsYftAFUSr15",
  "key7": "bZnEkuWxmqyXAFsB8JEu4cWeyByH2sA66N6w2c5gx3dJPKFk6c7DabRSHiVtpLCsMFvCukis2FLJTaaedMxVsV5",
  "key8": "t1iSzHzUpktVSFMqeZddWqaRwPHJ8fzWVNMq9iy5DjiTnEg7Qkf857pQMZgnD8Nay7mQnHU2JnA6536T1kDXkyy",
  "key9": "5HMYhPtCqFbof7VwLR6AWzBvSnUCvftXgG8g7SdEkx75ZEYvAchgUpeLERaK6h2Q9vghe8Kc6VLiJpwyP6Ji4Cxu",
  "key10": "3MPoxJN6ezCqsUyUsYa5Skw88ZWvbVRySiJh32xDoBRGLZzvQzh1rsZuowtTZZSM4bBETrg8qgqKCiSfTJWzXoK8",
  "key11": "4LsBsDTGxdh7NPsRsQSj17nEwa4KUHV6WRn3LFpQjEDVbhqXc2QU4DG1HDmwxrMTM9KJC9tfQfNeTDsuGrCGibQR",
  "key12": "2xFMUpLDMNU2TX7h5aNziNm9pxeavfskKYATns4GnaHkBbC9cRtNWW7AVPP79Y16nLE55vu8XvCZCdQWqSN9iEVy",
  "key13": "58oZupHUWrWNnijeUsFWfTr1DngawJHkKJPFPiuRC25iunbkJ6oo9KCAeXKADyvxcqLiC82oXWGFe92ipGjv9aMa",
  "key14": "2Fq6aceVruMN3iPc4zNvL2JpMxFQffojNBZCFx94W6EFascFphrTC2cB2eUkM5tDf7V4CHiDoqsHhMHBni9qHHHv",
  "key15": "32nMzd6uZxZ5xWqitfAB7Msxahusk2B3zKrSJTWZx5ZRCVKdThSee9Yzpit1vbT5RFS1rJkfGmtrPYR8jqTguNRZ",
  "key16": "4bcuXxw6RLY1PUA55BCxrv4eTaJ8fXJceCVp87xeLXV4pFm8vBsxAugTZ4CXqqHEHX245so3u6xZcBbsQXtFwrgu",
  "key17": "4CRWy2EKMYPNP1VzH7cqe5FGkTp5koKMRoMcW1L9XXioLpHbqcsVBsDUqWwzWsgkBtKmZHER562ruAKRCxDP9dc5",
  "key18": "dcktKCgNLT75H1oDCWcCjyrbRT8GhfWPjkee6QMZ5YNyrgxapn55ZG7nMak9Zc2Hn5wxyd5ekWEn1S97LVxmfqi",
  "key19": "2j8VaDJXR8UAUUbKvqsq4qHRb4RJVr7Jm4phmMsFVqJwRVBy8EKiYVDUFvKJJnu1WBX3ws5anzzqPvJV8MZ2ox93",
  "key20": "B69jTZhRovx5vStVb5Q6zHJ6S2iCyc3fyUbua4CzTFfhudBnjRC3VdxjRheXaNWLsbaCry4VEY243vuMgscCLyj",
  "key21": "67JXxfayEdFWQThnoN6bXDNcnvjJ64dF2gaG5FvoLi34xc74uwfiZ4bQwAeKjnop9Y2BiNQ5si67knH5FFcTyY6r",
  "key22": "3fbGYJC7KV9H2sb5MRMeC6B9oaPtDE8wE11N8LE72FN37RbaaYoHyPipmHMcEPDk6FzHUp2CcL5eKBRwV6NWd5o8",
  "key23": "4ChFTr1R8BgHr12GtDGZkXRinQ9ExzwRMu9wNSfyB1aGznzCs5UGZZxKAMVEnN6KLHkhoR9HM9ZEjNh3ckcGFKtn",
  "key24": "9E4rFXqd48dXW6D1XkM7itLjUML7Ue5RTYzx3mW2w3AGddbPVQ8RyYCKquywXDhRJScAXG9AbekoW5mKAPpBNPF",
  "key25": "3oRvmfWF81z97aoqCr8RRjKGBGF9ic3cKsQ358tdyqyeSZRqRrwkyqj173TYHwNGR64QvrFN1ibyvFPU9T4j2q9U"
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
