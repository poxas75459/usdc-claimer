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
    "25LzEjCfzX8wwx3krqq4ShCsQ2yKYFzfiuNc1fEZDTNwRR5QcPpfQQDPE4tCkj43gwqDSbqP78wRdiCVxhuD3snS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nd7fXBVnSwTUc8TAXoyjckKBHkRwo5VP6ZQgx1tfYi2aqwsH9b2XGxh8w2EAPvz4s11ByS5P9RJEvCGytjK2LME",
  "key1": "24kcosKypsVGd8rHBTRWRcQJfCmGtTPEkHq9pDmMKCgj9g7a5NMn7LEYDg4zKeX7RvvPyGmcPPYAszCgfZYqHUNq",
  "key2": "2kqsfw94he9wz7P4nK29qinCGjXWN2bovtUFaQ15hQ1zhdjRdF7yMwET488zHiVvBTps9dtREsoSECnS8uX1sLvh",
  "key3": "3oetqe52gdFPLXztGFjzKhtqUELFTZGHg8X7JS9n4V2ZJXUuDvof56wHAmuG22nmk9A9qcXsDpzB1evSfGgbQiNP",
  "key4": "3ADgidDy281tf69Kjhjx4zTjq9xsUdtmJZeAvYzgtG6pTGuob8VBY85s7XqmWwUuJXFPyTsWynv9ZaSjCAN6hy3p",
  "key5": "4NirruXUJFvfg8QczgaH2kQc4MzNHXFn43EzHrhX3q6343M6umJRX4K31YPGr9z8QMpAkUasDeStuk3RzVCkpz5u",
  "key6": "4hzeFwcssgiCcCB94dxnDfj139xjAxABmZkSPPTgbVz4kpn9bbhagSPQZ7cUeAzXRUgniMkpdreFXWseD54UnFqf",
  "key7": "Y7wbvg7mRutDDomPDCsNY3y9XAWKk42r5DgMjmSN8CThLXAaGwEpqhgmdVy8aNaA6isBdMH5VtGk7WbcPExS7vg",
  "key8": "4WAVj25wp8dFtaaJ4BpHmPWPJYFQ81amb4BkYnobXKtQ4P7ucHXxCLySKUJyhc21PPcGEh1eZhHvZW47n1MHAHC4",
  "key9": "C994pVJPKcjsKPx3KFtrfT8Nh9YrtNGiDq4iPH6cdB35ku9jnszRmrDFHURf3zp7QBpyYLxVuFvNyzQHzzrQHwk",
  "key10": "4HWq8dWwus8XJgLm1LS9k4ZoHfiYTN89qKhL2a4d1LbngoVjcuWx5NfiT5vVJhqSUpXaWFSwFEVZH2z1nohafEbC",
  "key11": "rhAtH61VgXM4Ebr7XYVBDLDVN61RruUccrBBYcL8M3A7Lvg8n4FPhq6F7M6rTnpUoyXa85889rVPAh2mN3ggXxU",
  "key12": "2RkGDrhtzMctUjG56NZL3eNdopcj5Nt9BC9KYhBYVPAZgPL6BMknTjEPYdQEkPvkJECrDYWMeX8wk4DYwh1wJutf",
  "key13": "4mV3kV5ST9BaQ9Pi6pP5Fh3PyvRsM8uzia2MXpvCVUUBDjtw6vMfMxtixtMdFv7jEz13e8gc1wMeskcVynB5g2Ta",
  "key14": "3ixm8d1XSwWjwz5uiBSMuXwRLQ8qapGRbHzUWhV8D8RH4USmBomhQkXiLU9L55YUSadgpTV2fwZq9tStekD5TMHu",
  "key15": "4nrtetp4pUGPRCmrX8Sm1b1v8juPogFrsgdfqS6ZbTUsh73ig6uyE4v2gJuG9oAW8BSWxutsvWBie7GEjzRjm3Z5",
  "key16": "GwYnyR2oVkjWAwo6DH1USZLfMhDNTTufy7amxabgCJBV8P8Gc3tPHLCKxrei9EVhJnsPQ7NGqk33jWG3UivKdGo",
  "key17": "65XGMfLZrDHAHLaBSUVZzdrwJJoQARDujzEgmPSgVDU5XbLwReZB9PPgvvzyGU6NU7JLsobpfo15mFGURhPpEm15",
  "key18": "2cytCLSgwTUpeTQwKHv3t2Jc6GmyWosPpjRSNVNTcq2iBjXkfgBWHc9TxukRM6xqN6E3AMAURQFr2KrsKUNDSryq",
  "key19": "2q4a5X65StgVCHCTPmedzeySkvbYHjtK5hPXBnFJPnGmHo5ddaU7p6ZtZxcRngWsDaH8cNMA1q48hZHxfWPAPevY",
  "key20": "5m3zFRmXGp4yZMtkFcZisX3JkPFAF6YdNMm9nXRNizXiwXPgtzR2DLiZZm5Wby8paJQRw2ZhYJBhTtXLuAoXkkmg",
  "key21": "3CgHWznPwHQ1svZPt78bWRkKYGomCbvnmR3oENHjtH2oPv38HzgK5TanyKbJXy6z9Zn5MRD2ivTuGUBt9AzCQFxD",
  "key22": "63E2fNoKpU1FGeQLLCWC78DqStmU2NN5NtKC59tPwnXRdCfPsNPtuTGLh1YWtZGsF9ZkwyWFX6wCb3GycxvDfHes",
  "key23": "5ETrscqUoGYSXp2xEvvDPRRevHGCM2P2fLFWt7DDyJN7TjpQmoi8Twbz9UzK4TXCsWQCKGxyVspZEhJrGxMwZeC2",
  "key24": "3XJUCd5gscSmsEANp1JsaKJeRkPiDoLfLvGmxjczWr5QdwvU8atexDZQ8WaGBqbipybyoCrABVoKusxBXP4tN5Ja",
  "key25": "5CrSqZEf7ULuJ4ZhkqG7FPmvjHMhLYhvJfwH1fnFskx59ZVuVR1VxNRMshE2xXxinEmXc2DtZMAGByEDKmUGH7gn",
  "key26": "5R8owoWDUCMbDBsaa9Pu9jp2WSo8FHUv2nhVwE7af6S5JK9d4RHy3td2pCg2Az8VbN4rHbbUG4rva4KD8qjN1XwV",
  "key27": "4wUqLY2ScMqmaMJqAgxjGYLxBpgP9FwTHezqvKWSpcTRmqKGYZSbnmZooFAFSL1quEQiRE1K6e1tGErpsdcjkZyi",
  "key28": "b24gEKxCgG5zaGPvQQujUtXbmGKckpeUud8618TnqnpWny6Fs45oBA579py3cLkjXJSwi7EqbLUwqp1NvGFiKv9",
  "key29": "4sG7JdC3Z9kCwthLpawbXyYYJvdjPgwbtyaXSwrdSkdueMGQvzk2zkHgWmY9tbZmTQXmnGT8WZxJ14jjTyB6FNGL",
  "key30": "3SH99hvtMqBDvH6znT7Y2GX5LNYarqZQoNB93wGkU16RiXQXcB47LgQK61edh16fAW2ASo6ed1gZbGJVhAn8aNqy",
  "key31": "2tMs71fwAXjr33pmeQydJFHn6va5Qiij6QsqhCCdnYgs9XcNPb2ufNRepS1ii8mKxojydtXTvU8FK7h83rvDECuT",
  "key32": "4SYoVTZzn3eBe68vMCMJCDDBvMVfeWszrs9ciddYK51U2b7yAXaFnjNVa6gryar796vF4BtdqUnWjb3KBk2MAEV4"
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
