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
    "4n4SWKKfzSN4gtxi7WaPjhxgEvtRwimfTjFkk83sZWxXdBAZqR9APa814gg1LDMNTbvgj1nzVNre3jaHEiD7Fdis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sPAWX1U7oFaSBbiCrUcXZHAkFLnnj4xypwP1rZHgofgHB3Ctw2kDTgAmAQoaBQfTGBhUz4Hg1Xw2EXkHB4dqGaM",
  "key1": "3b8H4izJmfwrsquJ12dj3vcJC7evH7CViSWHZbUoDAiWo2EudbAeSuaKmNMZBgsnXSuEA5suUxjYxwGYfLBJevtj",
  "key2": "5udT9c3FKPED4w5w4C9aBMDFqPPUrupLpj5hm3MWRTEzEc8MmDbh1rT1F5Hk9La2aXKgDyb7jaasq5f4oEnQNcpy",
  "key3": "gMamzEiYi9hRnnjJ8L3N3s3o1Bow9KiYyJ96DeiQXMvNjeiofXAnFPQpbaTibFzo4DC3t4wj8QHnQLoNj8FZFrA",
  "key4": "42QEbNGvDGWvN9DVqP7uHz5wm2Wf3RDSZrXabRt4T9JEzJoShgVooGEHPNQNBR54jSbH6DmojHAZDxC9Mc44Gfmr",
  "key5": "66JqdL9wgsTDoQkZg9YY8knJsqGXj5ueX9XsnohptYjM98YiWGnEpBqTh3oRQ1vdANb43TxGPN44MifzmxGn6n9Q",
  "key6": "4soKkDDEB8YRNmARJ2Zkxx1y2jcndQXDEd8H2WaPhbJ4M4LwVBZnqByp2BSMmcaYUnUZx78kJRddsTSSktQJYJTd",
  "key7": "5Bg5Lru4Zw6idZ8sTgEawtqtnNieHkPku4XxPn39j8YWwCBLGf88Za8MmDfMjg2bmRyAER6AMEvq6C4saoWu644h",
  "key8": "3yFCEpaYDD8gNpEt4z3aNoAofg9E7p24U6yfnNGcDJZuUD4ofgacqui2MWF781CzFcJ3wnXGxLZN5f1TNLhnQKPv",
  "key9": "5MGPaPPq7EubGyB5tYN52MAFp4j8Jt8M5uVLhM9w8tg9zuozzAgJGUFiGB3kU7kJEwaXZTg2kjR6D3V798cph2bP",
  "key10": "uKrBMQJW9LC19jSjDXegRrGvPmc1EL2b5WyteZzj47b5u5GnQkhtXj3ZSm5E9MBNb8tw6LSUsdtqELETJdTGoNo",
  "key11": "5snMQxtjBNkUqHHoKoEmQA1JGtMS5Sio4UoyodFXC4re24SxgfXcP4pyBZvgzc8QRRSdLz8QPEeBgtpSjeMctoJ9",
  "key12": "2zoff7Rg7MkN1qncpnYLQe6cVhhWxgc1mdyUdjwrq76rH1nje6Tg7FFfWDiJ7ZZiRXoATfbRzg366uC3hySWsYdj",
  "key13": "413UfPVxKegsqeoJwYJYxX3qc7JEmAsbqSXkHQRkVEkJvKz35eYrCFdrFSKTDU9wbpYKSPLHRg1Wvtr2jH69SNqD",
  "key14": "4XV48z4BVE1caD1mGSfv1AZKtjZUKpxUGud7M9WchsU5vNwKbdJEKHvZ79pDoJjr7k7a4hGUmdguf5x25UeCxs1T",
  "key15": "2yFuD4he6poaADjah6gxBzhqAtkeNgJGKLtcm18n4Moj5y8hyPJc3KmfGoBLJciSjpSEFErpJ8NnMXRTe4DFWgq",
  "key16": "dzLNiqN3ehe2hYet4hVWcEbjFDx4hbj7jXCXhrpJEKpV7j8sgDxBbyivHw3exwRUN3mnh4CWfJ6MzrttNbeFUDV",
  "key17": "4MumxPi2Pck2yxBcxjHGwTzjZPnkdZiYZ9aJDNctyqk9gUr8kjpcYPHDG4pY943jcFhDT2JFj5PTMEkGqmjNbj4r",
  "key18": "2VBuckT7EHmVqwPmeDhYXUCkgTQU8WMEKYAiEK493VjzfR26axLVSferGBFuLhQrWKfXxjgDpLoapfE9vdQo8xKx",
  "key19": "2G3cb7GBWPBmfFp7FKjTLq463Kq7eigiLo9M525ZXP4b9M3cApYuZ9Fwdj3BZhPCrSQEJMc6Ka1VLihFZccBNUma",
  "key20": "QqLdG9kfR4XZxKa9DsdQYyJa6e1GyKtLqqXrf9WkDXZFtmLNFjbyjqHNHVswa2XALnEUugWxRZheL32sLmoEErw",
  "key21": "3pKv9611asjpbrnCntmjS3t4AcF8xBBb2TEoVzshPEVBXLzusJzCExj8dJvKp1YyKJZeru6zkt8uKi7a74kVo12n",
  "key22": "4w1wmWTZMgmhDn5zbhcdxoDmJkehGQkESJZYgECrjvmSGL7Y3dLCmtcEChA3h118412usmqAmZuk9TfnwqqqdciD",
  "key23": "2QSg6MDPusQmRkzce3KHdJFzZhx9ehtCYX4nG7AJK5EZ8aETuGa8krg1FUyCgdfAA5NStm6fDD313cXZ4AagWZPh",
  "key24": "HBN8JgqqPWmifyTgL9yQqwGuMAyxJJyAY6ZLyUMrvCkVWq7dT4sLpHdP2CnQh4sm6duuRkYiK9EzBb59T75szSF",
  "key25": "5bZsUsd1qXq36Ha7j14ayGL92mXPrG9tRSmuDTmJjqicoJE9ZqWSypGrXbSZSMbWGnt6yuvqQb2Lb9N2ikoiQFmy",
  "key26": "BSk5yPBJhox5KFaSJ4XpgfHyJDmsro5PwaPxPaFATzbGP3qjh8Qj6DeNm7bdYPvS2p7MqyvKLw3ncYwH4HGMYAt",
  "key27": "rCbEiWghG5JMQAQxw9wYR27AGstANgXTWbPATMKcz28yrADcE6xMc2eDEGd9ndzAuB8rwMQzaq5mjNKhrt9X8xc",
  "key28": "2jPcZCLMZQzcq3NSc3LxtYqwD1vTS3jSECg8fA8uP6Zsg1rYNSeR4fjAHBJY2R67wp99up6CHi3KA7ZVmMF32osK",
  "key29": "5u6TmURk445tNH6g8NNuzNp1scSuNYsRZcAN3vG9ybTawoQjYspg3xUQFxjJRQexGVMEFDJyLP73ZLBcRRxkVY5p"
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
