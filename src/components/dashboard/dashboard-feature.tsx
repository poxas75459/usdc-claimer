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
    "3gbrBiFLRKyBJQ81PD3Q3X1mbMFr2nnpmsXqHcCopVDHxx5HRtYScafN4ytRCfDnzqrEWVJYMF9DtWgwFAqMcjQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hsq8k65LdeouDfzQUj2NocvLpFk6EuSUT4UaeE2Se5WuDRFWCGT9gZ9z5Zsdn5mF48uG4RRnjS3SFM6hLZRG9VP",
  "key1": "22VC2DSWfrwGDXvK9tP8AKAX7YhivAa4QB751bBDASd4ETeApRhwJbnoVdv3UWMq5XwFVdotKixAFjM4HhEH7uZt",
  "key2": "65rtpanENYZnY4XcJyVJ1Tefc3c1rf8x54BR8NtBDuLT2jwiKf1bKjpkP3EV3Yyx1qMq238BcCpdATD6bhTdq26z",
  "key3": "4vL6btigWcJxanSfpvgoqtdKtXm59LZQtsQr6Divbf3WCLTmsQFWtvemP7gb2oj7cXqgrD7EszJJ4H3BysRKj6Zr",
  "key4": "4d2XvKFhe1cYJvWxNodHbhGdaxE9sDaxJM1YkMjUcoReoqD2C2HETnxHf26bMWCPUURmMDNv6KPwjrKNpQ8Zk8hD",
  "key5": "4PnyTrTYmdp1h4nezVbSsXUsGpwCwMu8VmLn2M1KazTFXjeBmYTDQVRaDW3qULZHC1CevTp6BbF82w4NYBpvypgY",
  "key6": "3PU7KookTkBbjWBkne7dEoLvSiT7sM6d7xedYie7rbXRKctWaKaCpgiLQ58vwduVfFv4avTAGvEPNkAMji4a7383",
  "key7": "47V57n9coTw7aPXEVxi4kqtUVLBQ1Tx6X8frJoxhjfqgGrZ6LF51x75M1Yi9qZJC1SnUsN28LjACkEXM4fUorGGM",
  "key8": "4VRptJieCcQX7rmC3vuR7grJZUgs5Vis21qk4Pi9m8j6DsFY2SdCvncYfXvGFbH1wfatwio3ae2tZBaV8cJBCSn6",
  "key9": "5VEmbT5fVfjZUt7xrtUZpSbWbTwqvJAJLpqYhMSmbMMSJEeds2cwspQuPtzY8tTeqfYjUQjNFb5dyeNHADdx5eBM",
  "key10": "2KvuSFdrMStmYpJFYfA3WLzZLeem4kupfzR8uirgcbjazg1c9hA75bATCYLuGEXM6d538xEaxa2KcVRDn8Gojdhw",
  "key11": "46b3Y33uDXvTtQiT8UU74xosKnemZkcGF9kE2noCRwvPRyEC9miAT4X5J6HJBaSZaCdLX3xUMUjRZSp1YwGKow9H",
  "key12": "HvzmTCicHqcQUpJ8x7knFiGsvMaeHCv6BqqA73hryo16kj42rVqPFfvz9LAF4jhMp62VQ9WL5Zb5MmqoMstsiT8",
  "key13": "5udEhUTxuybgEsYx59po4L2zPH1D5dog5W5AgqC24PxreW92NHjjcueRdC6sEsrBpZ1RN2ZhoXsQrhq2tUAKWVPi",
  "key14": "51q9D1P7zfFEyXqR2L6h7pMc4TARn4WPb5riFaKWXebwGsKHn5At3uNMJnjLePaCS3Nb6mayserVYykBZa1BtTvD",
  "key15": "wuni9TsKfrWDWN4ghp8No7tpXvM3hudNa3s6Qr2wRgvtN7SPNs1FykBUAB76D4TTAn2nZ4EtZuEspJGzJVLHJqd",
  "key16": "8x49fgVXb3BTd47MDkT8R5QUtc8QRk5Y7k2CPtS9tW2Tb4Fa7RkgPZ3HDK5etdjTm48ohWZ9Eiq2Yvt6Ksb54c5",
  "key17": "55C2Kj9299PTYaTFdLAY85Ft5grm5aJXjsTfN8N63yRtiDP8Y4xyKvKEKjSB9QTZTEJ9tWvGwTQMrGEUkdnSnxYc",
  "key18": "uNa991eZJKHnzy3zDAcHNyQXjHr3YC8TwAYk2VRrRFYr6zyx9hJ9Ka37zUWfpJ9SZsbHYgKrLCj4XYAQZCdQCJD",
  "key19": "2ruhYysdogKmPKsSBTRd9skdbg9CsibbgcaS2ugEvh2Az3Eg5KgL1LMeHKmJXeGUwHUj7y4g81e5s8gDAiaiD5rW",
  "key20": "ZsBcwERk24WiZp8syRXHTfBNYkzzGgXThzks9tv1YFNqcK6u482k9hnD1TZYvvDoGw1VR5wgXpF2JAg8ZZ918m4",
  "key21": "qvMz3AGDKLJDLKMciXbXH5L7QmbvvyG4eBGYz3DDw7pp8NZLpTvn8YyiSVKYCkcrx15o16d9LdAmS1oqRE1DnUV",
  "key22": "5idqyt7N5PiEoDM9C89b6xBYHjkK1gaWx61iXoqo9U4qnnz3oMu6QdaF6bnvnmJmcwt3rQ8CnJkFhaFY9bHPgCCn",
  "key23": "54tYajNJJQ7LnWeY1bMk7Dkp64uW9iT9kc8p3Z31oygo7MfUTrYpGiHhWZWPRZV9EgZr1QjiJUgyRBFRDTE85u3B",
  "key24": "4gKZ7r6Q55Suxr13NymQjnyLaPV6z43yV3Pnq4Lkj5je3PjwPxrSdguMZZKPadkR5SQUDi8qCp4nQtSbCYiBgHjk",
  "key25": "4SWFQkDm3xUvE3HaoQuXz7PUh5NwgHB65zid4L3VLDv1gR35EYmrAWyVZVtMeXcSUai3jcimgcHDxZU2KoHwPiC7",
  "key26": "3d7KJ9Jzk7rASZkRkiGjdDTF2hVAGxXdG9W43PbiuC8KJHWPxQxNvTVkDedfWS8YpuHnzqLuz4pp2wRtcezcbqu9",
  "key27": "4aAFGL4E57PVVT9sKeuMc61tKLvoY9FgT5WSwCRXdr7Y4BzkZgqedpEgX4LTo9UtvJRpeqoXCcJBi53om95GjMad",
  "key28": "5CuGYPCSSKZe7HHeWJTnMxJaNzxyx3Q35x2hE54Fn6S5JQHiLBdrKRKFU2UWVUUC2hscfggJkPsvMKJQQCo1gVC1",
  "key29": "GouRmaE8Cf9EZG1CNQRV1otW6GeN1zzqwAEbDFZPkLjHaqHzYQJg3Vf1xh7WSbp9wRfz9vxYaogE8nsmy7rV5wM",
  "key30": "5s1eFp5QXRX8JS2cb1Q7Yk4g28n5pzfde9G9xQBx1BtkT79J1tGFihQ4PBqFyvaSX5UoFPvd5CTqv8Z9KQEqRnrf",
  "key31": "CX6ZGJTuJDqdEMVCFD9Sc23uukrjRGXBCcERBV8gyh5QeEa8A499A9Z4ZsKoPhSNcHeBMN4TgTfkCosiVLQTe19"
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
