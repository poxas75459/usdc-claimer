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
    "5uXjrNyWci1DNyoifpRdN5VAcxJJYRcqTetivcrVW3EQTraq8MuREvG8947qdhRS6JxTtxFNSLe553j4Px9DQLqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mr3UjLVRYV6pMJ1ArwmyF3TEhg7TZrKgHvkGQNWhBQiKDgZaAciKeYofXyibqxRd9U9areLyD9CXSbD8u6QUyaL",
  "key1": "34bmWCDRWB44zpazcegGCpU2tsbuMNyQgYQUu95YczPgGzsz3q5qwr61tVD7E6FwPHSfv4fkhtULUPwX39zBmRBv",
  "key2": "461wtHoVSd7UDYPks2SNLxULRBM8DpEh7wyAGHe4NL8L9gQNSHsuXtoRn7XX1k3iGis9fv2bKCjYozxJDG3jfY5K",
  "key3": "2yh2osLwNJdFAPTyUc1hbMWxUJ46nXdXgSUjWnwPhgg9BGzc9JHPWeFYVR3opyvDebRWBvELswaXitDbMrtRTUWM",
  "key4": "ESCp6hZjZUZCQVSahDVzULiDH1eh67onVab9dn1H3ceHQNRMEadTkJ3KYY9ddYCqUGjvYkuayQyYAWiaECLswbQ",
  "key5": "3Vg3xT6rHAhuALroY3deUw94p9mARASm9VfSB274UrnCvv9Q7xMUAckxTdPrKZyHGsnYJ2vjWdxQGFuHjVmtQ5W6",
  "key6": "C6CDDLCWn4MrWkeeeUkq894Xg7raLiioBhbgVAo8HWVHQ7MV8sqaPxnMV4uEoBWfYHH6FK9X6fDhVAZMCEXKjQf",
  "key7": "2L5SKZTCM8PgUz8sUKv34uHbs7bC24grhx21VYZZn33LevSwuRkpYpN8pWNB41GgxnbB1qPampBjvMzGYfHYUyh4",
  "key8": "24Pm8MZTdGee2YvpFQtMZeCUWH4pf8cFeyKswoBSo66hhzMQGZw62WJg2JfigP8v5PQqYHgvXp3cPbofKKg5gN4X",
  "key9": "5M8ywhLUo1v8NuseSiBDnWFWN91ciWdtNcqe5zpMHJbZ3q7mhYfeYFBpzbNiHefExtbq7Me5Ew6q3N3SynBMQbHH",
  "key10": "412YMNiRFTnRkQtwk8rJDqkStSqpTGinYGf8KZjGyCoHVKhDjWbZua192FqQxjWneynLYQEvDJX4bPBmGz5k7cHj",
  "key11": "5U1WDyhttkN8Q2awdaczgJm8cQz6E4pDCSCHbxVQewb3KhzjS5HpevDBscnEgYgBphQAvY4bUzYzhVKt3TYmbPHL",
  "key12": "56jnFsSnfGQizqW8HQXsaSD2uV4d7sRSmPqpaqtSBw6d4N3br7eKKMLk1v1vqKuxVeLdoNTv6kFohQwwMBaDdk2F",
  "key13": "5ktc1yw6sNPK5ggVv29bwdGhxGvo7v7XB9Kmbz5JvM4ZSj1QSMzDxxcAGEpPC6QQHEPfZCgoQ9naVdCGEygMqo1d",
  "key14": "5q7i9anLXoVnSsx7GkpokEKx6xz74TpUT22EZXBan5Ros1YRCZ76d43YD1UCDNnwcTweVQR7k258Yk833THKavcY",
  "key15": "2NTgXBpb3nvJphcZyD2dkaWgnu9B4Ur3oUZtVSTu9VJJjKqmRdXBisu1kj4MDokKMJenSQcJqPNTqbVQgyAcBXsg",
  "key16": "5dSgFUBTw47JvJYSBqum23wukd49Z4iPkgu9VU1BjA35mQcBLjzYCaCX5onkrX9DgNPvseqjDL9UTqCw3ZQpVASe",
  "key17": "4Tieiaua3SRKrAJDV3mmSjjQUabWtAZRpAd4E44djSmSpcsnPLvNzvZeCCtZMcjTS3QWNHWz1cfvCudsrTj1nRmr",
  "key18": "5saQF18LVLLvetgtKaUJ862eogaeYqz19s37CcWLfZnRHwtzxraofZzSn8YDK599GwbJQmZqsdtgv1xVThYaNXmK",
  "key19": "2S6v7gGLJD5ino55pgi7eeF11c17ZYVJmtD8kVpKg3aTuC2E6SCBGsR9z9gWvxNvEvJs9o3Byhy53pBakZEjWeu8",
  "key20": "5Mzq7WVEZHbVvqcBFpiiW44CmFr6kH7ArF3w2gXoTPaUms7X2CptjbfvohoF1G1LZQrgpPrU72fomdGhVXZnL4e7",
  "key21": "52SDchUmz8RRNKaFDe8i63us2EsY9TMJQ1Kfjh44sccW11USo4UQmCXDKVSjU2dDeuNB5JBmwcN9j51tZW48sV22",
  "key22": "44J1HpzidV7bBXGoL9Nm8U9dxpKo92q2uk1qXd3Tgezc6eyQKYRL53JzKCBDcqD1tRTRtt8jP1bhe1Z1kj4Sbpa7",
  "key23": "3U8sKkMET5MSTDY9dG6mAuTjra3caR8QHheMiDapw6RxTQQs1tQqKTYbSvQHbMKcm2mfN6HvCJ2fSjeJxtSUw7iz",
  "key24": "4wcXJRqFSGZLC4CBrNeuxMMRYe85YzYqHreeLH2JB16dVDYPbNwyCJgPdVvcEAddHz3PaeSNQZpjosb25YumdJ9i"
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
