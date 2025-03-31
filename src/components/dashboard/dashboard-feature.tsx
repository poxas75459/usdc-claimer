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
    "3rZkSLub2EuuGRbdXRfChM7A9fyoLB9axFGTwT8FpARUF8tSRyR5rxxMSDSAVAFQXsbk3AahxWsDYk7dcA4Nf7DH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hApcZkaHwZjgx7DfCYo3wP3haC1L2CnBBzaJVMGfA57uvvPJPwRNnZZh4CjqYyeLnPjJ4vBYUznb9MfUiZUCan6",
  "key1": "5pxQwrC2nggX5SJLEeEzWqdURycBaoQ1FqbWbi3VNHW7oMCcGumtYxueLPUDMj8FeZLCtkwQeQrCu1CMdXbC63YB",
  "key2": "5wtwNATWZC9bVTG2XrKj8ZcaBmSSBknWXeXxqt84FJ6JjzeTuo9q4SFfN5kNYsNEEXt6u2Vy9Gm2bxtZJmQTy81d",
  "key3": "5AgNNoxgRYxmrKDDBhZh4JMS3NVtktLzwN21XHZ4cqNesGcNAfdzCNSf9Sv2cctmqixCyLfYS2WYCmJDoaD3dLJC",
  "key4": "5KVAggDKEaSjR4zobuXw3YRGx2EE5c8sd3rTQKaKX8ypgHXW5FbJpDTQ3bvmwGeyUsiN9KeAGWcasXYMCzw5VzGT",
  "key5": "4hrqPBZEPmijn2DAR9HKsqvkdy6mCJK8MdNJsHhoCGRL8HdzsMG78EoN4FQg29wBbmooARt3v5KM7qNrW1Tog5J7",
  "key6": "4QB7eJ4obxw2sYnF7EgjDJvfNqqdZEobkBRsm3v4JFTyzagweY1yh4PhE68ZdxcuB8dE72JdKk3eZuSxBbcxkLZm",
  "key7": "4FTPfrSg6bAH7w53WjdMF5MxUdG9cUSd3amvwW9VbvjQDmZ66JSxuqSqeTRNEQ5kjyfDNnomSrapPzZxYeupKGEj",
  "key8": "5FgCHAA3mgJPqXGwa9d1AWFJ6XemcJTKwEgSWrCGAQJZrVGzzUaDTXX1QBDD7gCvhFJjswc52VBGW4gLV72BQHXz",
  "key9": "LnsgAZLhg5cmknbc3LikAYpe3bmUgUUReAfQZdZeaCfp2UvbimfKhBjU6ZYrbqDhwNUuEWmeMRujMrS4Pqw4csL",
  "key10": "zBRn79QVnaAeH8KLvLTdLu3ZLiCrMCGwnbAKvugsJNWzgnfhnaxDZgnKitk5a5QS7XBhXxfwKrXe6sDvhC9KWBj",
  "key11": "37akpqZXF4CxqFsbohraTYtqR75RfB47tEXVzaiaGTXKAAMpaUUkhaLtRCe2zjX2ZWBKNuENjEos6Qaiu5JkhdNY",
  "key12": "4LC6FAJp2YEiWhZqDDZC19Bu6s75BB9TwaqT3Tin34rNyM2eS535hetxzf62VLkQxCXLzesdsdyHCAQkDRbXXj2K",
  "key13": "4DKyCMEw9zqfz38zoeZbckVHZgz5zM3MPxiY1UsffhxYrueUjRCTv9Mr5sZ28ybQn5WBfFDefDouTWMa3ugn2nwL",
  "key14": "2BXWeG6WuhhSF2wFj8Eag2dd35r4SJpsGhBsuKNEMuCVg1uSHN3D2cXgnQyB6LzQwPenkbTr2zwkecKgzZ4rEyNg",
  "key15": "7QFJdftisw6HK6BaSvmqHyXnLZeTgWV399RTiCNUkxNRmoUGm8bVw663DnceLg16mrAmhHaVgSrTvjws4s11gu5",
  "key16": "4ykDjnQPHVek14RsGtTT8p5YJJvHgQW5hHTqQcxyJuCwoSLFCEKRrZNAMwbLL2ka4q4hs2zsPkXgu3sRHk5Amx2c",
  "key17": "2Ns8YL3heq3MN4fUN7XouYzgD3N8PrjuuBPRxcBSdk18tyZauQ2AyMPBNwN7fndQThW6eLcBKpDni2CN4uZ6UGgB",
  "key18": "5PdbXyqtZpG6dn8ws87pJ94ZUpDuyLPdtzTHdHvk2Uz2ADHCJ64Tf2e2bUGmzPcJV79N6ZKjuuvnssNDKdTcTEfV",
  "key19": "5XARRW4sxEht6cFD3M9uk1gZTfbnu6CNToqTeJMrB4E6JhQcu5tkqhk1iidk2yRJCaHqc5QWY29rRMKrYA6ga3Ae",
  "key20": "3mPMguiqDF1fFEpzpkS2VT5qTaM7KW1pnzhPEjC4DxHWTehVEQA1AzHwbGpkNJWRv5M6Kk5gm7yPbEJ8Jy1r8efk",
  "key21": "5jdDjt58YoNX2PrKKRByXXtmVrZVnmcRaAbBEvUtZv3G6mXQknzm3ddsNf3VWPicyDKuTdPf25r3WXJmMWsZj5XN",
  "key22": "36cSpdGfnYeFgMjYjWCLzzBqJ6nR16JmnZhqtBofQTJ8EJ3nTVdS8PS3yQ3eeqjcDK27gpinKDTn6BeNuyCpsuMd",
  "key23": "s24GCsh9zT4KWJxabj65zTqJFLheEYkqvp1XL68bSDQVrjW9rmmsV893D3oh9rJugatYzy1VZrgvJAmB44njpWG",
  "key24": "HP94wDKtiY5ij8W4bZa8FgwCvDQxW7tWuFtPQfnWqMXuhaZ9qasVnRWzrC3xhhPXb78aE3y8knupUeipgxB5j7H"
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
