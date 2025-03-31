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
    "5VSHqK4Dc84M3bG3GuALD6Yt4s1MbY1WRTuQphJTWwEdqoLfp69ND9RwfaFjuBEBufNssRbeexJ5XxJiT4ipaYxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wnC3FR5k7YJhggkxSdgMUv2Nbj8cM5H4RkPTmMUe5aJaLmAXPFNNh2TggFMZTWdChtRkYw99PWQaHByawwryumS",
  "key1": "2eJDD6henod66PcgvyYHPrV8sSuBipmNGRnkB4nbLgMivhS9kG9RKjGvDvzZL49bEyhawtv2zTwavJmcsiLW747G",
  "key2": "4z7zntmYhM83WuTL6zqNmhpm8ujCAnMSLu7EnXAZ3scEjb39NFimTydSe2yGouY1FN3CWkWM8DNTUKDXnYk8vFoB",
  "key3": "hH8jpiHk8wmmBrZiDACVSHEAa7sGogQdeHguFoSDpQ5rWBfb5q4vpsykKe8DFLx7dMxxkxhgiXhmcdoqwi3sQrf",
  "key4": "GGCurMszQkQWbf2nTXPsEDA8iYZKtKCyfqR5uF9CerBTCjQjZfoqe2YknbrhJbJwUcbZ6yGw3BTV3ZmDFTY2xn7",
  "key5": "3if2M3Gd1RtHXK8pWuwo7bexnA74bsRhejyotvdPuL9VTKVYyCGDdt6FMEa8TysYReTqtMUcnTjqSFn7sdahsX3Y",
  "key6": "3HPwFd5kpNsV28NjmXrTat6gxBntNkbFbQaxEu614k2WuqEzkWzbzctDRPcgvxyYvic7rMtdTpY3kKJZW3Khn9wP",
  "key7": "48t6bQe27wevT7W6bkxm3wjDU1QFA5W3Dqq39edBUD9UWBsGMqyXshMxAPvGsDtWhKSzYE1yxst2hDZVKovYXc47",
  "key8": "j3mRuqwXSDxQ74T245gJzuJEYBuMCveue719iNFPhhUT15CsJjkBZW5LLvTLxbsmBxvSqDiBPyM4x51B8Z85ZnD",
  "key9": "WZvYHBtKYSF5ETxSC4AHufK1RbHc9bewYVcMPAKCKprQyPoeRxBtnu5Rnva38RGpNc5EdTNdJikc4RMcGSyrZJX",
  "key10": "49CPLmik5gbh1ZBhQ1woVfUKK6skLeQ2uiD53NNS3p4srGrbGynnTzSQkm2e6mdjMyxXhC9NLYZGRA8Bm935YsYF",
  "key11": "Y5Vp8R4jKsuW7wQCr21v5BLGVfLG7kz2ra1aA3Qp5no8oynJXgj7RxeFFuADS4rE7xDuXHmYuBBbFXaabgca3ri",
  "key12": "EoPzpq5nJJzvRK9HBVo1rBNrcV9nnUwy3BEwcuXFLYCtXttMRidBefS3a85qCAUSNpsnKArTftsFT6PDHVxk86E",
  "key13": "MQXujcgBxa1E7gQDPxXkgmAVe8zQShzbj7nvH9MWM9HJ3SBvG4vynNUGaTLR2JoupJcsBUBpJkf12ESMFAztuJ1",
  "key14": "5hF8XqV4k5LVMXEQug95WqxfXzqYnQL9k17Bs7wTUkT1odFBvCB9u8UyuKQXUphS73NcVkGT2VP3Cw5LwYgMWfp1",
  "key15": "5GiVP23HNSntNqcNwCCAhPp4HFgFXXQTqPF8bEvFgvajyhEuk8zZqCyP4AgEaVE8vFSVhxkpsmpcZw7Z35zsiF7Q",
  "key16": "2KNyXWe4uXxt8ur5UV6xNNCMNiHV6KLXc3pUW6937RqC6SvLN4SpK9SVVaaCK9gXqu8DUdWKXv5anHu6hicgpduH",
  "key17": "2HpxnJamgy8aNDdhSeiMcxrXk1AkwDQ3RKjEBhwwgkfyuQVXrugTA8RPkvmGRV6n9ZeZpd3LhC3pYxYS8zRdEGrq",
  "key18": "4j73pAoGYeYE97iKwRcbWstizKT5dk3ku2CoBfwpxncBq57PTSzLbHyPX5VZceoaKeTtMDVvhLECi9wTX3yk2Nus",
  "key19": "5HKosdj1uKJ39tSSKMhQKD1CLqJtbvLLxeciSw7rHnA4QW2FuZcVWaXyct7BBHS78FkiSbmLfvA4nNBK6ZZNLf7A",
  "key20": "5VZFrS9bWQe27YRAU4vVxv5U7zENhu1NoT4TWuYjToqu7b97Fb7Q13oeL7vJmr5puG8jZv7qN1pMRUffPwXcvzGy",
  "key21": "6acYqCf4UoEpk4Z84B9nnLvbuhPcxau6MNDPanJHuVpMBNJgGQkqjiK7PFUD9rrTUAxw2mbWLBjSCAUqAwCkbR1",
  "key22": "4SvSA5jvLCjYtrmGt61WPRAZcLUDMa7nkU5Qfxt6XRs6KfvKTPcAwXdTVWUKNhneiBKpAmUYm9d2xHGiX6cW5jPU",
  "key23": "3d1vtXgYxpjmhgweseyJDRiFJVQCD4Ac58cabvPFdTJRrzKagyNuppzpmnH4yBWTN9B2oZjz74ASQBqkJdDwqP4a",
  "key24": "32jaPNwoMerc8E5qFarA3Ey42EjKo82gt5LESeB15DCpsJ5QYvbnbw7rm3LXYhHunpQb4ksVyNJLAzGf7QcLqeYv"
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
