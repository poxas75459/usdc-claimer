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
    "dX79oL29zw8maYMpPEqdzZ63fpvbRXrnUrgf6GHzYE8AR3k7xsZgTLqCgtvpwL2Hq6dYAXLQT97jdLyB4EykbYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CEGjTiZ9Lv28RFaNzdoVthz2eLHoKyxnFu6PLj6kjrZCbg34Sq8CTEBf4Y2K526a55kv5gwdeevwCT4okYCXnN1",
  "key1": "5cxq5tKsiqNatNDLfMYLLqKi263xeAmieDTr8LZghNkwS8AkGWrXhrVy91Hmq56DKT4SqiPydDU5CwaAUfADQ2KU",
  "key2": "4sYB1WmQPi7oADWSjoQeFWygsAoGxb4f1Csh26hyWJyNFkorYcwAvAZ4YE5bkWptDHJUikzgFuskypDHNPrvFygN",
  "key3": "ZLP2Zac5tYzm1wRLNExyszGZvgWx53cYfMJrGxb1uxgtMFzgxx7VFAAYRxCFW3Ra4HT7yehFckmV5naNkejiKGp",
  "key4": "38jYvzbicZTj1qqs6Ekm61MMFL64D377KaCNPMFStodXShAUobnRAuXUEYY1F4Lne5c4Wk3NTscu3Ltyv3U4BxEq",
  "key5": "3TVeJLzpJwjYcmxhjN5QvDEqZFk642BbzdG5qbCZCAv3teGEzrZLS4PoTmL6f2Ag2gVRFU2fouWpZLeBSycXqSBU",
  "key6": "5nwAwbn5G8rgnZA7vY4JVbq2WkbejLeBbQPPydJvHFZq7oK8C2MLE4J7hXPBdvvYXgAknYDjTTBC8jytHKNbyPtB",
  "key7": "3p99Pfom4rZpCzkxzBJiaykubmNMa5Yd88JkGfT46et4mbvZLLu5Q5u2Hw5SzWeoCizzE4VuESNQdPHrVoAuD9po",
  "key8": "2dtwRuXd8JVugMsTRZz2rPK9CnsXZKudoTbek7FoYQYwcRpH17wMsei7xS9y8DS1jZw4RZSUKPE8ZZibd6gFAMwy",
  "key9": "35BJVxKqY4zfWWFBVX6ox48uDNsK8Y8wveJTh5HK5NzbuUVibCGuYz5mSsrHVkcsjmcBAQU5hD76BDJu2vqJ1Cvk",
  "key10": "2iFCijscdWnv37aUfz1YuCr7NFWNnBGEu2UXLjZEvQMQcUju6AqUfjEnfMQ72seY7cRcHtHwMTErtgf2dppDEhzD",
  "key11": "4PT2krspXPgQYjiWWTzuNHBr83En3wZfK9334aySx7Yb3vDasTREVQ3FuW26vzujZHDFvsDszxxTzTihJh1oLE7H",
  "key12": "4H6X5LFHC98jCjq2odCCf1jCFWxd4nW1ayXW1ZxrpbnLXVGznXPkDteTE7cafJHfJEpzn4Z3o3ar1waopSJ2aitC",
  "key13": "5W2Jjd6x1Cnn3SnNXZbFoJ88MTzLHi3jVfqdzNucUSnrySfterq73LckCpsy7kKMkd8mHkDFb8u6Fuzo5amUnFuc",
  "key14": "3on5vUzePKPGN6kUQgcKQca1xsPX4J1dYScf2yqVQ3jnnjqpw51xre2HooSnxXkoPT5diaHCe17bdm264tdd9q8F",
  "key15": "5cNfgFU18m9Nisj1eDoS61BNd9AeTxzeYWKbR567nkLwNgxFMhpNEEWsK9P1E69Z1R2JN97xfJoG2GKfzbVC912H",
  "key16": "489Pu631uSjRBe2XPS5D5bbuCD8DtLcWyiQR6kBucz5TW7CXYt6jb8J2VsntCPJDZuRmmQYkNbvf7YkPaDX2dwQi",
  "key17": "2ZrCa6RxRFd1i1cUwVWVrMonQFdZfqr39rv7gA7UHz7gSAd2Wwext7Q9LRLFQbdjkjBz2GuuuyUXzJUvvqrabvPY",
  "key18": "mZjLMsxz87PhUPxs3MjvmgBdv1JpcHNpdwZEzoPXkg3BkSrhFu5YVZpDmMD9etqnHMMC6BwEjzadEiQXHKmthCv",
  "key19": "LRkhGfsecDL17SYTSd5F5dWg9ACUmaxZR6uK8CfKCkNk91aX3RCacZ1o9WxYMjXbXLhC4btXULB2z5VLjJ2GKhq",
  "key20": "F2MPHW8WvzBGpDdG236jb2VrhW1JfVuatRQbqt3AWcDSbhZj8wH5GBYwAMsQCTjpfzQosWG6aPtiS5ojaPXh8Sj",
  "key21": "3aYhdbejXabFbPFXkZUvGER2Pq1Ti5nKeYGGTcVbpvZfFbVDtSXZDVogiDd9CWNbTBLfmSGT5jS3bgscuBr64xEv",
  "key22": "3Bokp3xNGtUjc5ywcqVfwfchkZnaDDZxgEYbBaLYw7d66KqxcEazX9b5bYFkVkx3mprAmavKVQtL27x8SYSbkRoH",
  "key23": "67f6M2e4w2KeaTMff1FNTuxUftVaJnRqudTrzeWoGPEagScbwnV5hETYJf3u4XfEukrrB4FH7DcuJmcRHA4qHDYg",
  "key24": "5eyoRtDSHAsGusxFKnuoHrVPsNttsJRDXUQe3xDQgq3DNZzNAbbT2pxqtqkQQWnnmV8esMoXjwJDVARk8mE7fWp7"
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
