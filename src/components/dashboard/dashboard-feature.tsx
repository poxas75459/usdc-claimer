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
    "5x1XLTd5jSH7bb9cMjV16ngS2sSGGVWNpAuKk25b7iD3HS96PwiyneTczPtVrecpRyDx2wdmzSbxDRhw3QxcdudR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CgTWSAXpLUhyV14BR4NYgVya5aGjKLE6K5RCoHtKwhzidbSnK3U2Hj5T1Y1D3JNHvRnyq3v4tdppVjg7DLvAyVL",
  "key1": "P3wwhVN61EtzezyZiUzm5FB1ZxLj2KX1jxSS3YKfxTNjnJtqCT5TuZFdtKBSPNrWb62VU7tYR9DUc7AJfgRzsh8",
  "key2": "5aGxSPcMhsoDYT9JSop3wKAbeAnfj6EfgqKLRVmVcb9RindDQzMe2QfabXVwuVwayKXyU2UbJjJ6tSNnV443mZPS",
  "key3": "3BtxENs8PAmzVm8nQD5fNrF8Z7EozpVPxPbNcPqdpsqewNCZ1rq5mb5rzrB2s7SaNrHxmFkaVh6APMFHhBqs1LzS",
  "key4": "41vajU4Goz9j4NdBVFcVwSLfjV1JLeSyfCEBinUoDQvhc1KC15MJ5hmFvDyJdFSeBtffQ3d7J1Jry5fxg3d1rFuR",
  "key5": "4EmWmaEUVsSzkiAPQMttiAy9TrYSBHs2bj829VHiTfg6Y4yDqtfZE6cvM2dfxy9rhWxCsVZCUhgQrGKi53DyHGC1",
  "key6": "3aTXT9R9dVusg7wnCkXvJQsH19xMJYe9zEwPnabB8oMyLdYUk8kX2sWyKSFDmKyC18q7dTE9ijbQEAP2tb8TexcZ",
  "key7": "5SRTrhrgLeF3QL3ViLmwteyMGgEdoPywWreYQFZf3UyFLAdyV5fqHMi8dqZhgexW9F6zGEomRt3AeWk56t3k6FKA",
  "key8": "39MZ6C1Z6XZCpgMP2HnrXKqrT41d9MZrwb7Vrdua4zZyBvQvQHGe6NkTPM12kUhKMQjTxWFs3xjVScbJhPgH3SpT",
  "key9": "3wRK4vCRhknQQdqT4ZiH6HDPrMAjHDCg1vjKopsMHkkWyAMhkxYyAyHs7BCEiKczqVTXCA4AbvueDSFLicC2C75b",
  "key10": "48skw4k48kcVJgUtBExjfnbcX5AkJnWqA33rwcVqKYUBed1Yig1woayjrTUBcAEUG4T9sdcVcztDKzKAax3jWNoM",
  "key11": "WGPUXmjADSXFdVh1NBox5anhhrzXhawcz65NKW4szjTSqGzEV9dYSiG2zyiMEAsiqpEv2KjEtr9CSJzCkskTqxg",
  "key12": "VmEXETsk4xAZbs3hkQH8ocNjK6tATsVKw3E8KyHoqrN86977GZyxDTKKjvqFw2e6NL1HWddfCMLJQEtEsd3DPDD",
  "key13": "WHTPPQ5SEfYLCTED4mgBZWmP98cGCZmhWSDnBntjD3NWyBiXhdMu7M9B9Jei3oecBxLDsLXTUwGvDVyu6ahC2wK",
  "key14": "2N8p4Y71YzpCF7jcRgxSiCufUggeoBndCf9GGgv2vwHAqyFgyV4JvfbLwCF9gpNC5QCTqQ3UgZ8SbHQP638HMV6h",
  "key15": "2QPxXwRGTLWkxzJqLdGAL6giQz4wR13tkZBRb9WbWx2awedFqp1NbM8oTzLPUQ9sjXmToGRguF6PeT1W5CByVtNd",
  "key16": "3n7K8WzQThWV6XdkTnZjPgnyVqdx9WeamzVdTwDfWRRHBPhcGtnnHB7px8VrSR4S7hdojDY9KencWNipzELXb1yh",
  "key17": "2hNTfgAu6g3dZwd3wtq9SHk9wcyqF9DDw3X8AAxv6jFHbFTdv1ND6xZy7arxyvCJqDuzfsiYYVo9CM3Nn1fFAumF",
  "key18": "FzcY3YrYy5wE2btAQ6SUEwmMiuTG6PewvGdz2sa6HrwxaBL4JsoEAm7756sVraPr9tcwgN58W4Ay7ni6z2gR6xc",
  "key19": "4XA6eqjwhkFj4ycwXG6ueZjwsr3fzYmPRSMB8RKNGqeBUyLpVJY3oVHvVmvt2SV57oSYPaBgmWVoYNr7Urj98Bwd",
  "key20": "4LVJjDupac4fZsFmohR5BHF5ZyYPbwFD39UBigWZcCyYxMT1j1HtaK8eKWw16a9Wx6ssexzTYo7U6jhBKrbmNqeS",
  "key21": "WKZHAqaud1DoJBt472ischqx9WEKJFqngYNTaad2g2e6rhmwTfRNkXqQy6Xbt3fXtVPnJfxQJ5qKWzyhKSyVD7W",
  "key22": "553fMxww11VAGQNwEwWgYETQp4KDhefmvSyC8yenVpgbvyMu8EEAYUUEwtxTqSeHr32jHxqsEfpjUiAyJKRtr4E",
  "key23": "5ttC7ydmH3c2UhECYfrWJoMxJ99NZGSH1ULqetChqSuiyCmfFRWBRoBoxcPjwq4SyBtBSQQQiQczqZbeH5Aeww34",
  "key24": "2WP2ExGzG1tQKAL4xF7tirS5JSyy4WXb6frcqS3fyWvrQ2azmEvJPZhGb6DoCVhf2sikUjcg1jX6VAU9Qj8YpTJV",
  "key25": "5VP9b62Sd8JVChMJfvK1AnoCf9qXA3DTpHmnE5GfvwsVTVwVafZmmYTQ5688CeLwTSDi2kPDLUfdUZD41Mq4u8JS",
  "key26": "3Vs3MEythLv6SHXrx2CPHLeMKqXEpdsvEDjNWErz1jrsfMvfPzUvPA17WH7oydp3jXQzQeoE8jnkwU5KNwgw9Xbr",
  "key27": "4GBdcBL9Lyq27nKARZUoaDzD1sPRV2wCCNNgwvc6vHiCz7eafJEXghC3kiW3ydAGYvFDDb32gSKn2a3BeJvTmdAp",
  "key28": "2iHY9wh92ausyXeepKzZyP2zbfJrkcjdpDsEaUeYH1KyZzoea37bJbva7p7zmF9zhxPafFyNpDrwGvRoTrhhuMpJ",
  "key29": "63PkiZLvPmDh87ikxNJrJXkGFay8azmfZTTcALt1kHTuC2VwwQg2EkkNmwxeBposBfbSj7qEiJx19yj26MhYMUrh",
  "key30": "zNNZdfasCtc3xDtZxhdkAibghEozCqp66Hm1HYuuEReix3bQZffhoVuhckSMeWtcSrL6ndzXf2xdzLhbX4ZdcvN",
  "key31": "47vNbwSUJ7yyg1g4RayqGpoAemC5exjZELgGbqUzQu9jdRvYKvrpkGS35SVnLL3U1jmKAdYHDXhGowohqLMwoktG",
  "key32": "5ZUGhkQW8jQBWcPvnqJ47k1D9dMXnZNvPfJUyaU6Eqwcz12oBAVmjrdHtiCsXqyzvKiJBKuLxK6PWYeUdt5xwpJi",
  "key33": "3xLo35yewoehGcHTVL4YcGJpSQsLHbcHEG7Emd2gdtRcXFLNQUy6dR8M2RMt9MLN5vnndm9CECgRB9idMfUqGx3r",
  "key34": "22B6tyXqYqLG4FJx2msBKQpS74WjyuPnxcVat2SnshJTNPYxzgQGJYv8sryBoWui8fjLPDuu9xkaJuEppoirdiqx",
  "key35": "inmu2RAEXPq5BDnyTwEGvv3BedQ9y4v6f4QjQYcBqbKKhE6ru4fXgVndaNRJX2LCfB7m7xbT7C3YYGWsTayUnPL",
  "key36": "62rpQzLufDsG72HfJgCKaTxtpyq17zZ1ehR1qfNrD7j9TTYDGcotRf1ngEdfUoQH8ozzFZ8Sz25VDZD3pFqHjcbS",
  "key37": "EzLp1zzbqY4AYEEgJ4j2WfaFmBZDSBN1Br9rN1HLu2UuMLLLtW9qTrirZMXC4j2JWhrTJDDHKM617ZW3c2J5ccT",
  "key38": "2V652e4K5dzh8xkZttVWRyZ6eHtSxpJu5VQEAHsvD1mJVYKAPvoT5ha1B8BnhZsKzZAk15rNwLqPHHAaYjBGpSwJ",
  "key39": "guNMPmD1TwNjyCCzYmNgkqziGNzWfDJc9V15ZBpV9PaApsvDrDhVKjkufVjoDiQ9szWi4wwfQN1kieZe325zBJ1"
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
