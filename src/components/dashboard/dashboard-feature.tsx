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
    "46ykiMvvd2zcr1TivGdWoXpxdxWjkuPDCfTS4QEwLiLAn5vabZBTQ9iVtCMLxEv6xL6YvEjKxNr7XpTHQ2jo1agF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32xd1nMoixU65AXz5xQBgK12YrCKtN2s2YNnavTeTqA2UFipPnLcpMHTRro8RzX5S56QvDKEcgSjSpoe9cXEjNRg",
  "key1": "127xyg9MVpZpN7qborooyA74T9HKuqXqZzLTQPyZdAHnoqc2jwABmUXKDeFTas5TXfXRBT3n6q8kKHGjWqv7WnhN",
  "key2": "2YqaE3Xp1VzDNg8HCTq3ux2EyoqNCaXXkwUQqjjVTQ13UqxWo6R67HXGfQdWVkSPHepNhj7Uv3M7eb3sSEfHxmXA",
  "key3": "4FB6Yn19k2srCaoRZxm5GqpWHoGjnCSESDEGkCjhE41fwwMKWR4chXyYJDH1nhT8PXM1xLEeDsF2YhmHgC4GMKVs",
  "key4": "3TstWYPRnvfAdrjrfzihHnoRgVJWiYHBgBL6Mc8VveTPKuJ6L9CSFNZ6YMiBwC5AycNQksYSehC5XcBYR3FbbUem",
  "key5": "2mchcWY9AqqRcmcRfqZxFsaE9esFi3g5SQbhMWqsPxgtk7nr5468GDQUmUGkBiP1XfztGr3zSkijCgpLvYaTcXKf",
  "key6": "4aCPTABXErtUFJUuXk34Lj68b1TK1TE5tkT3482678iGJUxbGq7SdB6cknEM6bRbtNLUdKH7Qdrrw8qUPVLLxnrP",
  "key7": "47pCLH1sQNTTjwtC7EBQtvd9XUESVHRiEiLq7Lz4fPbeC21hFjyLq7foTa3Xgfx1QoTnruqPtrYgK3ksknjWRp3y",
  "key8": "V3FzfFYuNfbdPL8MfjNtUrCGxfvXCn5qvvz3XWuThJb3GpHjW48gmtd4Jb6TiwasBNjBF6oCJbBBSjpxZp3cbdk",
  "key9": "Z794yTfnXSPQgMDKui6JjRYZn44wN5z6yr9Cmp9YZU1joQ1ahUCyNYF1YzpmrbFxQHNQY5bjVn8kzH38qXqgKV1",
  "key10": "4AcSx8iKujcbsNYJ3QinN1a8cKwjpU8UE3bvyVu3mZwfs2Dn3HdDFNRv911mcovb2VTqVBLRZNZ3xmemPyjSXHXL",
  "key11": "51nUun2H95XuvByCAboccE65FDDo51BsojcYpRJVGMKrKqqW3PBCCam5BbPquUsfyjoP6xgbWXn336JzS22VUiWH",
  "key12": "2SDCqZYbDYLULmpdRdSQjxnyrqVFUKtH52PEN9w9782XSBGA4ff33F7sbG4E4BT7jkuH1Lg2iuWYbUBhGJqh7EXW",
  "key13": "CT8sDpksZezrXDbMieTXEVJK3FNUjcBzG1QnbFYygZjbtHgrCLsUseunEcsXi96HQ9NNZbcd9qr3hBZxfBPpMkh",
  "key14": "4fgyMpb2ZSC8peVAAQP13EUPe4RmVWGnHDpufAeht5L8kUqaLd5s4ijgHh23K6WRRzYzAQYZ933jxJJ72KfL5K49",
  "key15": "61WZpe8vbX8mRBEvR13hbZCXJSq2Md2GEMtyxYN2fdf6mVWuXcyBxLcXG93yasZmtBmJEstkoZBTQF5B7pmjd29G",
  "key16": "5Mbs7e1J7B2RkPcQXt56YGPrThrJENZMEYs6desTfk8Pv1gJmNWS6Pyu77rggWgN1mWdsJcXmSE6wfE5wtD7YyR5",
  "key17": "4Ca7DiHyBCk8mJfHMxAHaNcWQP9gkf2snY7Tspw2nM8k7dcYMzav8k5tTZcxb7tcAEi7viPyRTNdeSTMTcixDadc",
  "key18": "2t4ALpyz399a1MGtf9saSLR96R7A2QbEqnNCzYp83ac1r63Lo3TeMBUCN4hRvutMEA73PgQnA9eATtkTLDZMHRD6",
  "key19": "49ckr5MJyXgZaLYnbXmoGxDph5bwiAmg6Ku4r7k3nATMkbiycist97gHdWfBRDzXQtHPefw9xRNoGPNuymKYKXqx",
  "key20": "3HB3bmU7af1FBjCnk3dWT4mXfwQwGpfUwWkRHTSTyqRZhSdQjxPFsz5YKaLt2EbUdVzvYPdkfWm4ZdHEy3Ng1otp",
  "key21": "4ZZ2uJDdgYP9y62dQKrPVrRkuc4te2uVoQoNt7M6BQNfAvZJbjub1pSogQvFY991xLersPSF3HT1Y2HxYkEH4YVR",
  "key22": "2TEpLGD66LbnDoqr9dFpvNyPJQvDBo1VBRJSbzPw73SP63n9qUh1hgRLk2SYa9jBuBUb8e9EZofG8DgvtQ53iRig",
  "key23": "4KjSMpFzA2zFQ1azcAwrz7XK13NVz8imozwcXvCzS34qiYZZ8A38Qf2hKn9zyHiwDP4ax3bQVZec5hEHwgDLapsq",
  "key24": "3qccNUPdaZVcxVfwJkq3a98LXruZdnneJ9xyFSWwVP7y9kwCpFnymCp1b8TL1mBcAJ18SahAbAnjHjUhKhW3Yn4b",
  "key25": "ZjugQf1uZ1ZZXp3chZsHmMnC9hVf8Zh1af2CWXkE8w7DXMPzUMM2cBTtiZyitVcJofMB6uW6FS2DfdQcSv4uQjv",
  "key26": "4J2FSNzrNDH5pCi4THDF5JaL8kjjoWWFUfPKF6WVYwyuMzw9BvXS5KPJ8oTjQMwP5rxdFFzqHZhqzQktC1pVUEX5",
  "key27": "44ZPoBA2ioBPzPq6gZcbfS5wjD4s412UYa7vf6u5UJYyZRVfZ5osg1ogHawScNoj5CVx1BAQ3h8jcV3yTknysoU7",
  "key28": "2vLeYk2KYbyqvpcRPSV7Cm8PhZgHjUdZ2mCvriDvpdrBoPaXJjZ6Sjdwni8xPHjwZtDtoi41KzWXQk6ntSxeygXi",
  "key29": "2xYMAMNXXU8BCCHBsSkT5M4QY38qyeDvmdjXqdtbPFTMCFU76svLSCqtf2XoCKPHmx6HJ7W8ECq1AxstgHJBZZWV"
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
