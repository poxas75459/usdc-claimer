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
    "x2VqfdREnbrYeneoTKLYpTzPUQR6TH3R4sy7DBDAJ3rTdqtGhnojqN1PTjx6HAXboNipzdt45nxMYM15E8uy86e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fNrAVwhsfbRuwd6W119QRpuqFtTyHGoJUD1miEYDqdGoVTgwFmjkX3P288pYXUthkt9k1UTq95S1Zc56QG3RTZN",
  "key1": "3pi7LCdr4kF2WrkunJUPxJ418nJbwzcwrK77y5sMh6NJrTvpmkyY1jjhF1gs1CGzH3k1ZXmSqLkuf4mxacjSnTZ6",
  "key2": "Y13w6DvAzzQQy8ib78cfjrsZ84K8brsyDKUqGxtmycjf4XVSrTaGZuZyY6BRp6SKK2s9jj1yvvaxbC4kFU5ZmA9",
  "key3": "2idkgdxDVBy9zvd77hA31g3cPsBZW4pYPkRN18vK2hwLJCipsDgEEGw9z2TXVyJGiSC3qGKDyYWrLB83vPXiHn4h",
  "key4": "5UZXofDmA1Sknw3j8GSfrH6S5pNz95HNUL7KR86XC5xgjpSPjbg86dnuCZGQMXzuFSZCQqmjBf1cjGcLQ5NqkAz",
  "key5": "3bigsEZn9CfjZbuKnVMm9st5hHq1mqoHo1RRtJTezVwDhsWgFTVENx111K7oAS4yJ15X1fVLt6F1fHCcSB6QShfp",
  "key6": "3pzkAMGPZSMfzesVkfZp2YBDhonxGyrc99FucXZSPQiGJEkKykJJcWLSmRkomzkmNMgsjCjQT838wT8t1X8yRRtJ",
  "key7": "XYwEzTL8L1nbMrV4Kz3v8vF5REHM5ccd9NcsxGsMGNMkemErkVzoGaHZg744EbVsfvn2PC9wHHN75CupryWSjHU",
  "key8": "3XTuxayeaD4UmaZB7HDiZX4FL4o7c7JVxwGNysJkNoJvQ3eCJcYr1aYUZTXmYcY1Kf1LtPb231ivUgVbPEsucgF1",
  "key9": "4FisnEGZdUsUpzUR7XgJGj7CHdcUBpen8xdBHgvXrgsfwELsjGczZUn3949cdZrLQync5EDD9LixDuW6r3cWcVhJ",
  "key10": "5mTXdGSXGEgDT7SwFhf75epBQEfFQAsg8iMxAup32uU63dYAHNgkvb4t6VtZrqKSmJUyx7k8ipX5pdzyq5b7YDn4",
  "key11": "woVFznUoC2B9snFwZrnSN9pjdmFBSESn5AAqTiy2y9adkmy8Uu5pvwjnH2Hoso9tm4mr7sJmStokVTZLLUwJZjv",
  "key12": "5X19xDr2zzcGyQEc39KMKAfYBert37UqTd6JjKC5GmD9rfEgxgCks73FZwCPWwm8fxJmKRW1tGWc1iRVvPCjbeon",
  "key13": "2nsuXvWEry3pne5QDHaG7zefBqcsgxzw52G38Sx1SLSoxn7Dvi2wvMHXhATWbZxTEPdQESazEEQeeL3gW1tRPc1m",
  "key14": "3HguMQ3DtSWaxDFK2S69wim9PPgaPvxHqVRUUQnrDpQgPyEwKMnedqye3KtxD2gdetxboixF5bY4gTcz9yMjNLM1",
  "key15": "2EPYWUBXXDYnYNrCXAWdtJ4JjamC36Zu8RWyHt2NN9YA6rf7eKgGVCSZtpy7N76kPRbWRYy8A41AhRWrN7jXXP12",
  "key16": "46xGk23GJN7vKQ23ZzGNs93gYyXzvnWkFjMUiajPEr1WQQ6YkUmuGJXetTWx7krbAEfcRWaA593DnQCK6hnQHexi",
  "key17": "4SA8ccj2JWHaXpwCeNKMUMrwbJ7WHcrwL7fJ9bempFExSkeaoddiN6HKKqu6fotwdTbPZA79Xsj6c6hCehFExJR6",
  "key18": "4skqkj4Gm4XJMk2XmKEvnmBGTer1EePSS4xSS2RBdLBsHubmVtyqRgqMVA8zraEJ6um4Qzqpcurh4jAXA6jJH72d",
  "key19": "5GhQgJMe2kFU6SM3s1sGo5kp7mwyHFXoUFKWQDJKE9m4dC8DuZdsdpu9i3jC2hadhGV2mA7bQ6KDui59ackDLrqT",
  "key20": "f5gvnUL7ap3v7wQQBJubNhUywTRvg2PwCvLDREYPhKoyyKWVjAdNYYZiuUALBQtFZzx29h7JP226FUTCoL5rXjU",
  "key21": "41BX3cwzYyaUiM4qj3ehs7GCqcHU3dayPLQrrN4b3Rjc7iDfvM8SJH2bW79qxENyXbzNA7V5dhavVV6557dkXBQ1",
  "key22": "qixRBYcH7Dm489Dn1SPXh838pFVuad8vfppyTZ63Gt5jKeAmhYLmPNEZgxtjKRbuBZcPNcbnjUPPKqiM5iNFH9A",
  "key23": "4FtJ4rkqUtrprbURLzuMwQH7mHsmX1B7AFXkYuvcnivgw5yAfT5NTqY3BUFwxmmUnUYYhdHCzQ195qzZSAxrNkU9",
  "key24": "158dNtK7pvq1qYtcMN7EsFjTXnoqTV8fkCwWS3pMUewHB6YDpigJtaXPj741EqtDEmbEbQo4PWE9kAB9yC24uxo",
  "key25": "4dyPXfHk6r6YmFctNcXXfrQUv6zqXXkZDYHy8TUJMZRvVRr85raJoFjoVGjzLweSqf6LFyZth3CMN8chYz4hNvj2",
  "key26": "uQSpsK9PGTeW2AXrSjABduKSDU6u1u7DKyNzf9CWnLatUopVTwgxTxK4KosbhzwKsb5xZ33rnJsxbgQq8qF1afN",
  "key27": "4Eo1iQyFVYqGc2iExdn9UhHCpuMBwyksKJmZouBbuPwqThptLNYzWQiZF18j9Lhvva2jFAupwJkCLihfuKM2XrHa",
  "key28": "4npe4hKFWxJ1MqJ6HxAmTPDRPy1VqAHEQSYow4EfSZpMsujF4v7aKtArG9QQwkdpC3iaDe5Lo6EfgRCNWt1wPPgy",
  "key29": "3Z185Nn48d6H8dAvZDpgaU8LbZ9cF2YULzDDTvQiGigREPiC5fiqR7QgH1SXrytLwZw7kuHRvStaT7rCxhM35UbJ",
  "key30": "qYPTXAM8ssFeKoHABj4is99KP4duhopFBFu4tNQgV67ehsMegh5oe9RFteMN83QcaHb4DrJzmCn45yP3T8UPAr8",
  "key31": "2UAXVv75QJJ1eXrf25PBCvRb5ESc4kUAY7o9K6hVAVBxyeyCtADfDa2p7GzWfVCWRN8Y34dr2zVi5Vs5qkskM1sW",
  "key32": "5EXfGrr7ifSCutYB6otPwp3GNJgcKyt36tw8a6ppoDn6vsHgNCiNcaijjYDGMegd7csXS2R5jPAw2kCpvohm71qr",
  "key33": "47z7KHDjm4v3QtM2xysz1VANSChHcxYmBgXhXQyJN3bVia62NJYYCiddsEjFfne6ERQz6S92hJgpfrU933CzSQyQ",
  "key34": "YAAc5S1QxGgG3L7ceNoW6GtzXToUyykKHPQwpPREv66zD1iWsf1NAoZezmj3k3hdvjYP3qPyGCaYfU87EGwBU5u",
  "key35": "5CXqRWNnHPAg9KN5z2NomVVgKFZMgXMGnJE1C4wixL7y1trsTJNAxfP9fKchPDtEAMvDVXHjejUKnsuiu6spkBMP"
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
