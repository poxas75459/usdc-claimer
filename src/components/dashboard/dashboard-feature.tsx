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
    "VHgr3cX7w7izWXjrrVckuMvG5Tib1faerWBdxmUD4DedbYR47dp1ZyHZdMLbuuhqtaQuBrnWPajWP2q8ZzjfCgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wanY24mFHbYBzqms1eWpxecZDqzitdisbCmo2BekLMbBSV97wqmSPn5DAktbSy59FCS5yzCwKVQ29B5WXzUXrNb",
  "key1": "4kipRk9ddTKJsMZeQNiS6sEE6wXFWdqQFQjn38f51bbvzv22jmzAKjv46dLys1nkSNN4rfvey7xH6Hd8UFQ5yL8x",
  "key2": "5GokwwBLQUREgbAG3FA92c31TtEFZMvgKEDEbP6xfU7B9LQCr9zTdqc4TT21fL1Yn49iMgLaQKjVz35UqXsE7mtA",
  "key3": "vnKs4UfZPFgtwMC8uqCxjMT6r22PmyitJsuYibdUJarsUv2DPxzQRyiwCYLcGPoYEVpCjGaa6mG91sYPwu4aTC2",
  "key4": "4u75UYExo5caZpbupeoJAENbxrXLM3ZjVTNaKa3Q4v5GPZbV1vuBbdkCBMU8zKQyvphFvBcxnQ5hzzgsc3nPXhkk",
  "key5": "62NZhyFeQnih5vcZPf1jfeLkGQuvLbFBcQTi3ofE5gwaWDo549VpDrKqLHxd8dJGvVfc1KzXC6cfy9u9wp5Z5cQb",
  "key6": "SNrkKtatn55AcgWS5aPeNtqsrmd5reGEAjv5SeBenY1jNxM89jHtcGm5dwQt1ecpwtc4LHLcKshjLLxwQyjqQVW",
  "key7": "473DXcGJeBmrD5ru8MdLaNinBGJtNCd1V3s6HTc55F672j8Bo8gEf9oqWLMe7wcWFa9WtEbT2K8BGT6ZmBX38RNC",
  "key8": "3NrLJUzaicwfe3ZTX4M9TAXadhPRgw4kKTPUtzNZn4sFPQYSx91r6eGJviac2yg3z337RyFp22TFqZCAyL8wvkfu",
  "key9": "3AhUkTRTpjhKDJju7vFtodQKB3qGe5VUdEoZLWQUtUDwHKq8Fos9fDQb2SZjUxuJWinWy1Ha2HWg5dvwTU8SDc1c",
  "key10": "6igWQmWx8xLWkRE9LNERwnsJsrmiWRhnBZXpSPTFScr6gfF36tW2BrZ3ELjhvc3enD3PPBH3xpmiA5GC2nEh9gq",
  "key11": "2wDhUBA4Xu8xbSEEXc2wpG6bCGtBFVMo3YrZ7JojC7AFgKNNfeVM16BvM8UxpZPaw3KBtsV5hTwA2gDzjR6qMJ8X",
  "key12": "uRTX8A5vzYr6HKiCtFrQUHNHkdStcGkv2yRGvQ8Nb51PHiWRddkDCqG69UcUvy9CabBW71S1oxWsjSXD3eaGHvQ",
  "key13": "GpouVZFiSxMzrwCQLxRNwJZA3SAEnCAV2Tyv4koQsFSZaHn9iqyfBQ16Wp9j4ZDB79HLTvjqvVsTqtcXEnCvJer",
  "key14": "4Vje4amJ9LUVP5dFLfmD6EWpkkotn9woC7mg8nwv4TqRkigeedpGmGiTJA5V3tkcm7wxrxtHbwg3vja3mnh2uaAY",
  "key15": "5QoCEn8BU8rRS6GTJRREnV65jD1TqnYSptF1sPR26fsD5jy1J6Xy9n164a2uAzSy4QuaQwErLwJkXHRUmgnjo7Eo",
  "key16": "5YSnBLgCWAWVdjbPFTJoCjdFe2GvzcZe6ihtqE7xTNwEggmMTspdQcm4iMTtL4HXYb84a9pkPMy2V5s2cCc5yc6y",
  "key17": "5FmXRXSkvfvHx48EVU2P5Nc4G6gKv4KomeRmMa3ghGRqT23StFTJbjAtmsRgZmbQ4NwMCbV7EuUJjZyss2Qat3Yb",
  "key18": "3YidWj3NrDUWJNG62wJBoSLT9R6jfwbvyMfBPrZgPhPiGUv1DqA928ZnU3XUmjuoSmMQreAyQ4pU3wD7GJudFZGg",
  "key19": "5CTswcrmvoizPGbGpRGE9Wund63Ydsy19m2Ltv1vXgtppHs3yBSSjEAoqkAv2HXXahV4tZbKv7Ku35jXcW1QWHFD",
  "key20": "5sbtJYYdjgu3ThMsbFe7z2cSGGGiJcMJDtTVNh5jtfbr942jFa2xTrJfa2VXLUb7EfCMZwyAvTwqx1zTaYqkSsCv",
  "key21": "G5Xq4omHiJkuZxEktchSJF79A62X4toiu7sPkCJz12bJFP9vqs3N6zHLxNnTSerSQSGP8gUEiqsGdpvLJPejGAr",
  "key22": "4KP4rZm6EgM2jsAUmoVorVXv3ypxXe8CebEXPH4Hz63SoLZtFjvdyQTHJRZa53J8sCZZdqSisnWjeRTMMt2ng5av",
  "key23": "3PfNTux2bwNx9xiJPAh17XoNcBcMMJkmYQ57APoX3o1quZyAUzgPyBzAE67mkv36NNwh5LuW5KTWNxDJrmPRLYgE",
  "key24": "3NimmwCtQmHvujkkdR9JJStwFnyEFwVoGTyjjuNW1HYqgsmXdFs2wnQfhd4AXJGb8ZxcTtaeoq3VoSESYMRdwpcs",
  "key25": "3gh3ikgREvc1BykdbB77myojEWQyx7FtBEdebPZztFrHLGuzxnv3SC5XWhEPJafauEt1fXMrQSxpCd12TNnVvjjG",
  "key26": "2UkA8jgjaoxvh4ez1avk53CA8G1c5jDyNERCxQU7uLqMDpPAKv8U2Wtsgs5Lb5MTqJCi7i3XVN2NL29P3ngBzGRY",
  "key27": "2dGZUYy9qknQG2hfjvnb93UoqRW7Abn2yWN8y5d2WysnVk2poKDpUZnXdW1EtM7e8AUSaadHv9w9NtKyfkVfyYES",
  "key28": "5ZBbt672dzRjY7tj86emvkoc3PSCtXxKTNQZQzgeB1hFpUWfnRquwBTmox7Kk2Wax8howfpp1Ts7pQmvhRP2qgby"
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
