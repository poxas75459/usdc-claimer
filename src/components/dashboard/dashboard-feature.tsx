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
    "2iELcCHFYT4JHVRh8EKNGCFuHmaeD8jzAAAW2nBNsNKVnNujQw11S2WQQm37QDs6Sj14NEgBV72HAtuCvcPUe6Hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fHCwUkHovjFjjDghJsFDbrXb9JwqwoC4mgiTyQztGP5rKdUxr6Tm5LfvPj7Nxredg1Poc9B6UyivYUfFSzrX1HJ",
  "key1": "2XNCA8WDhBWD2FTa7H8KeZ9KX24KHbSmX6RbjgyKCGGpeaFj5ycHK4coZcPHFp2q7LzC8oRTvBpRgzMP72DWHqAd",
  "key2": "V7wyjZwzks4kE7UVo2nPnenicUTqGsjE1d5HH1sZRrXh2Ygaga5vPCvW3xxjwaH6m1AbHhB4QcY8hTCC7CethQv",
  "key3": "3cHyj1DWp7dBczZDoXMTN93MrNjTmRuWNS7D4oYdPjDbFUm96LFCx2r9FaLcLTqj6A2qxEicMqHCUHaoBBfwDKLs",
  "key4": "5ATDNmiTDt2qz1fVyf8iWjjfe9PTpkdT4hUphbthiDPwxnEWWXHBJfsZmWFaGGAf66xyufrdwKtRFyWFGf91ditH",
  "key5": "3Va1Py1xRQAfyNZBp9gdECkyY1d8A8U89iQozGD9HJVnwmbFNq2xXXUmdA1i58LuzMqnWN2cV4LWp2piwGfWQHAq",
  "key6": "2DevSzh77PkJCCHZREnJPAuYixBrNGm7366G51S8YrSo25Gku5RNsLyVtJM9DCYwuj6ogpbpfS5pQyRmav6DeV9P",
  "key7": "2z1Gd1w13uZ2MiVn6XKLVg3pciTxynvMP87rXeHhevSQWbxPLEMP8hEqEUCiNfCgoYxbhz9JcjLzQyFWZ7bjPPZP",
  "key8": "543GoLzcHQwgFkv99WmoVaGAMFzoJ4BVLfnt5rt2Ksd33peGt7id6YSuhPAbA6ruz8UYmzgTQicc5ajUu8xXYy3t",
  "key9": "4PvWAUu6UWJ8LXWRqLKDCaoLeXmFCdD6YjTokaqDP7Rzd3C9bnsA8BZ4PM3vTA3u8fST3VNiYov5pwBvCrTUUt5p",
  "key10": "5EBAYXyaMKV6Az12zA6vtbWieWvGi8ifz4GpRmXFYWY6tUrzWGiFwD7EDNHaNtNjCscMQTigPizQsD4HXeMzyqJQ",
  "key11": "5WEkmhMdjPDokSTj7zWGP9b7phMkzYKdYkbXDEntMDUNgnzY6m7FHMz3N7oVnVFgg5Hh6SQ38xKkfWSSF1iCMYHR",
  "key12": "2ePXWGGwmN39BhryFAPyWT4nwrJW4p7ixPBd6EzLocezgeArznz1eVavJkr1ngZmRQeJrRmS6McMC3f9CfNY3q2D",
  "key13": "2SyzXEajPzv9sqN3j1LchVdmwx5dZo9VA7RdegLua1FMU3qHXzREagHQtwuMttwy2FZFrmE1HLPqQzkhz7gN3HJd",
  "key14": "2dW31CuGEAJSFoDx3Gdik1Gs2oo9yFqneqZTA96ZxFwdJQnV27utVMiyNHp3sJYUd4VHZwrVC1sQm7Y5SEd2vbt",
  "key15": "4JYTragGUsnxD4bu8FeG7dLma2Wr9sePdFLn6nLeqq3WZMdhLuymScSoT2EcqyG8SPyTL1Vo3YEqLVVMNfFCrH4q",
  "key16": "JUtyuHrUjgrki5E1rhsaf7SVDXx41yMqYQep2X7jQZkTJWMUwRoUxr4HkbDa88eaH4rvpHjDsrJS57eYi7MrkUh",
  "key17": "2MUbNLDsiFLNUa7ysPmrxhUPHjVMk1yC6vo6wv7CSVMubpeFEaqDdd3UX2Dt2swt1Ek2ByDd4eCeH5YEJ2uTSGQc",
  "key18": "49YyTmtPctgzPQUUwfkr4kHRvXhZDaEFrxKVkv6n8H94FgxEW3J3At68poKmSwW2MyDt7FnyKqLF5jSFaeKJZE74",
  "key19": "5ksWELJWeK1i1C5qyACnW65FUWWEAerUCgumGN9jbeoLxeTXKCyYFNSobSqGuvJYbNaqggSV4deugezUfuf2pNiy",
  "key20": "2XXQ33UEQZgohtVBugwuwhKtqH57iCyUZeDCe9kgA2kMCkT5GpQgKqCeczDVa5YsojN6pF9nSLberLyrH414VnQC",
  "key21": "5rnUBhSdkWq3vxwWWyeiNLxELaAkwQKNrvWKeRD3dic5uEPBFS8znFJDEnntyZxtHS8fe7bGVJvxnJFmR5ZV2wSk",
  "key22": "3L1Hs8HDmmZxsMomjJWdmYWP3oYhTz4yfgzWokCMmUqCDV3UgRaK2mwMHgXsbfyp6mffNHegmHZoz34WCV17qRKm",
  "key23": "56JrE178gB9xqD96W4AksFmqEp8yddtBdk2WEUg88AU86QHWrRDbmzbMd66zs9bH6zz5skUsotSBJSbThga387YH",
  "key24": "4KRXhTjbTHgzf8dBwkYAwHtc6ruCs851J9yHhxyaAKct1QHRNjKGxVvvuF9M1rqAWmEKYedRjvNc8CsWpbTxm4QA",
  "key25": "5gBfVtnfAmTvpwLv32Gp9EDGCw8cTJuRn4cPMjd6GaH99uuKqq23KRjDHVGokacHCDdP2KX5DMfz112T91phCQvp",
  "key26": "2i3rfqfLXvKXrkQ6AHAicTaZareM38qs2FiMaG3TCBS7EKWuCCGjNtz6Hc6aLTZTiecb1GbDucmhuWuy8ceELDHP",
  "key27": "mggfFmp8iCp4Vfvg6NAJwrcbrJAhb5iz7S6Ska1gEnNzcERx9JXtb8iuTb2tpVbbAAXkcp5cmtLPavYW7MLxmj6"
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
