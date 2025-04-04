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
    "ELVvV7kU7SpAj3YvfDprbz4vUiuuoTCFxvRr35Ta49j4WTbUWwd9L7PSBkkqcmehRQS5HQoSe86424RY1pRRfgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GwkTec3ASykJmX8zLduy7h9a3s1G3E9ugdD8gZ1rBidPYyuP9WYMHHCJNqDDe6vD3tneokCGsBVKJpm7fc7oGrq",
  "key1": "2xf8mVmRBkzkDC91dXc5t8Adx4EGScdVFVoSjNmXYonPk5MJ6kayvYPFkkggwZX2xeYyFNhM8o5rTzsYWcWXyXEF",
  "key2": "3MGSc8wk3EYkp3dhfGECcHvQJ4Lfu2Gk2QGsrX5hBTyU1EpyHEohYNrq2nEQY3yK3ei4urgEbMhcQrRWzYpW5KSQ",
  "key3": "4c4N383Nzb96tHQXLdLhPF7HYcSDX2CBkMZqCNtb96fQ3tdooohejt1QYu5i3bfZwyZa4qgCRiYzHhinwnECkVnY",
  "key4": "4EZ6bhoVmtiQ4g9f65n3sR2StVqmm6JcqfBGbQLAy1vo76fgavASyqwPgvsNFXJRDzRvkw822BB7TNj8pNWNdCV3",
  "key5": "5dmKfFkadyXhVzfapmL2dQifHjdFqim7kXPuVB3RKEbTRtArq2mF3gvHMaY7w5QKudsjsBJAJdzCyc9Nj2qeKUot",
  "key6": "5Jj2YeCy9RZFC9JQyBz9Zp9PFvq25E3xtxrQX3XMRGiJTNZkJuQd4qxDsMN5CMBGbTzdKLHWSWT5VzP7uegX98p8",
  "key7": "5yCxEk3tTJEEa1aDQrauCV8rHhXZQZrnswRsao2u4dekgCkmRztY5PiYxXtdrTVTyYv5aNsFyMovcUidCWVKtV5H",
  "key8": "4EdGMTv2wzFpQ5w7zJE18e48HS3Wxwou6N45ASV6TepftQL21y2GXbpU8WsD7dkjM3qb5RMz1NZ8DnnqCmj3PmbX",
  "key9": "3QkriJkbdipYtzqWYGEchHay9rmXfAWiGRh6boJnbXH6sokxMcWVZYp6UHfgsN6jXHYvHYPRM2c2anmKam62pFRf",
  "key10": "4E7UVpeBqy77NtHyVHcqGopFMFT9JeJ799Xrge8Hsy5xTuvopjxZCH3dCePUR9fbGzfwB3UHWKkTw2eXLt5SvNRG",
  "key11": "67L5ZrhnxTNoo1gonrqcAhW2WdZDZ8ndNLyz5vU2KextMtUkmjW4FzQhJDbqHDZw53LVWLTVhBoRQnNNB6RjNWmW",
  "key12": "4brQGJ1PhNVp952fYmJnLujPd4wQUyX4i9TPaGy8VEtaBYWtzfpTJY3XJYUsh1xWfRPk2dVc7Uuf4rjHcXuRDpDv",
  "key13": "2Ah4dVaG5mL5GR7USZmNKTEKznyE4GojcfJUSMdxDjoo3jyUfgFdX3m3igpnhYn1otcWiCRyDuGU6JALBWKcP1TS",
  "key14": "4kVvc5s9WbDQtyStxj99PvEo1eXEHoPrjRjW2cwQhbh4uePRtv3aA5yxVwU7rBvTJoZxXVwaG7ibmAE2xxHuwk8P",
  "key15": "62i3hao3UAUrgv6JfcXKDwh1ZTLKtMLcPndxCkDKoo8Ux9WaXJQVytES3VUJLxSbKJikLA9BW2YCPmszyBa5XKHH",
  "key16": "w34nrn9k7Dcj22wNw8oU7jC1tYmdYBdHW3HVksRXsBzeoLUrKECbUBuXyBnMWubE52a5wrESRajTCTLn5fgjMos",
  "key17": "2MmkKWzS5QhrZox4yoMbJn5YPwFyN3J23mAP2UJgpKRyCLNend4HungsBXu9bkJVnt3CZpuftGXmuwV5yzLB8yyf",
  "key18": "61ijVmRkTT2XEjgray5Q29V3LD9F7qW7FeuvfR27myrU2HdCD9nipbauYFCs65gCAZtKFko3gm8GBMxuyaiJU2Z5",
  "key19": "444BbFroTGpTkXB4tfH91M3zNpK3w7RcDGKSb6Y1yDkvrDUaUFwfjiYGL3zKZUk5EcqeNniB5UnwkEj5UbJc2UX4",
  "key20": "3MYrp4ya9sXvPQAz5JdgeQ212xPUujpuqVtRKuP9xxkPdm6UnaJ93wvo3eFGRZ9VEjfx2YGoevkWyXjUnMD63Bm9",
  "key21": "2DtgBa3jiNMQbqNPEKkwG9vQvUXCScQsEzbiNjEihQMmTX15PZ4f9p78iNNbRkCK8UExB8bVdsRPHPyn8qfMj1uB",
  "key22": "61m9RNMnETctTbQ5Uqmk3rACLYWGhwZ6eW1ub6pXzHxdS94daLSXzpVcgUCMhBXUcjiJMtCjC3WMd6KmWH22RqpG",
  "key23": "4huETm6jzUwcowAT3rF2AHxMW8XBMz5mZKoeAUhh2nEmvbHzsqRm6zb9LEeRgxV4r4Y2z2jUdtSUZGsQpsj6Bte4",
  "key24": "5czJibdGHG1PwfqGL8yxpUjVLuyev7L6oKaTMVpDsTQtYyUEZY8PBo4UjnKhe5p1wVqNqfUeUMzS2T2yDotjw9YC",
  "key25": "HwNQWryggyrm4rFH2oVEMxbhskBwgtazmcWrurMfao9CacptiJ95h6fS6LSZsn8qK7ow8zcjbSEkUoQcbr6WeCK",
  "key26": "634JfNz2fZ9LHisxRMNEc3b6R7sdER8KBH3fwnTs3Avi56wd3t7rKYziC2vR4YHriKRtpuGZAFNDQ3jwvHiDkk81",
  "key27": "b5z6gk6nLAusJwNmB1vsEArjAGorjoJ1HQV9gd5UzzmrffQAK2rVcCAiwrMX2Vb7JnB4kbCFB7dj8v7z2gbkjJk",
  "key28": "5ww8e7q5nn9Uz4VgATDpQTbKMeAWXEsnWKhbinamUUXyyMbZQigVPpS3LCJ3xZxdhTL4EW2jr8hPxFGJ2hphrdmg",
  "key29": "58T6ffp6ZihrwC5a7QCCFPtrshjgsopoTEo7kBLAGvmqDLqMThVXZmzzoWEmUGHKm4dthiSkTi2BZ1BtbXj46NK7",
  "key30": "xM1RkW5cFdpEC2YBzmy1Kh5eaEChHuPNtAZ22QGyajQi3Bmjs2dtF8Fs6XBfNRuNBPqPPUWzeGpt3dWWUkWtM3S",
  "key31": "VYJmB6K5brZQKqVd6zxtz3UWeTybkNRqFLoE1mjMKQfrhg4FFuweoFeEfMLYHU7YBNAsJdJMTYZ3dDxjF7oW8vK",
  "key32": "5e5WPJiznt22RMbmfXzvEanxg9jHa26YLLtqm6LFbdGTRaRkoteKsEkF281TfDdgxbAdNAgjrx36MBaEcKNzzpez",
  "key33": "PXzU5HDhz9itqWKWX6WJehSbQ9W12bUTNFLPJuMGRZxSUzDuKbsKHNvB745FrrhMor1RBeKftJwt4m9otvVS7wt",
  "key34": "eXRZ6MdBx9EfFcvSdgyYbnHxW9xstn5Q5f2Ln712TdL7meQRPdFaeyT3VThgtpba9FfFtKUeN4fsNGjC3aZJ5tz",
  "key35": "3RysjyXYqSv6s5iKumy4L8w5fTPu1avgKJCcoE1hmVgHRukvdqFa7wban93F1iwtcaT4Txgf7Tb5BYK9AAz9s3n6",
  "key36": "2EwrdixF2KBvA9TsRq412P3Zzks6dPZmwHXKAs96dBSFQLNvtPwHon21NeVXNNF7Mev3miyMgypo9r8zSCH59QmJ",
  "key37": "4HP5jbXYtVerQoRegQbNSUvjbtWUdDnL95o5d3WF2z7bBQcsWmrtzcGSQR3pS9LgscgjmZsufRF1KDUHw7e3qHcV"
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
