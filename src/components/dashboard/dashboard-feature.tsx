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
    "2EnyTWJjhcXytRz3GBMPeHi9iCkNTSKPL1eMahTX8bMBoVUtvA6o9Km1xhenty77ZJoetW6Tr8QDTVmGxxK573xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SKAfuXv8EGDqTNyYKwVFxiLzGHEJuKfhhJteGmnPRMbo2tTCjetf3JUsF9QvF576XBLKVQCqoyCJ7Q2ph5Us95N",
  "key1": "5BdzZify93MagrCLLeLTpF44sKKvZKiq84WQg51ADYkwfb1h6qTCwomtpvuSANWgigDM2HEjuh12gTibeUahBCid",
  "key2": "5zHTCAEwMHcV46gLtff8tqSiQCx729yB1vfJvrgdXVKuHut4Z7aQWn8d6vrDM6Xq1mmLQM6JMhLVRU4kmHSvfPqf",
  "key3": "47NVAPGjYSeQdf3sEKV7kvAmiDDiLdAzf6Q53vjVSHNPxaYuidQWGQDpN3yikX6Rf1uwrrTfMAzYQpCiYECgnikk",
  "key4": "MoPot6Ndx8SshqHTi4c2zMWeWHiWfqzqXpCCBrkEhY4R1gDHQon36xJASzVqPRm9C5aJ87FZ8HG8E7BUACKLwUd",
  "key5": "3N3bWft2xqgmarwyqWeGhNQ9L7FPmiE9FPL9AuEA4xbf2FKesSfXEe8jeQHVoGza26K5Q5hV9Nk7YnFy4S5GBSuv",
  "key6": "gQ4u6LNW1PauciqGgKxvgjdRGmH9JHMvjDRAYBJFVPs6xuLYwnFuujAhJcsE9ebAySPiW5HsfumkBq4ZmE6vsSz",
  "key7": "4inWZKWe7xEGN6j3NA6VSF3jgmx9AfgAYhnJjEYCtjaBskgGMGMmQGsZQ8JimBRx2kteFtqY3ekuAkBsSj28t6CB",
  "key8": "2kGhmeMALduUYnopk1CGLQzQB5iE3vM1dhD9V4Pt5mF2xTgyeCrgtxjzyWcxiGTsGjXGjuUemE3HShsx2YFaQ267",
  "key9": "4VFYuFhsnzrrPpDJRxba97RuebjU4SE6XsYPvjW4jxPZoiwpiwQzcuazNsV6Kqy99Q2i8JkLFJVoFf4tvFxSax9S",
  "key10": "2DCwE22x8Ld4oXpehstyN5SXHXxrKUXdMaCssSzmiB1PZGdgmt95Ec9VewpJT8zz4cSWrR1BAEeBaVJiMJDTp7nu",
  "key11": "4skqmhA7ojFMw5v9DiSRzubogMBuLucHZrzkyf2LgMamDPrudsGCMkgkPkRe4CgjrTZozNARY4vnfVdq2tqnhTtw",
  "key12": "4SCamYd2QiB2MHRt7BQM3rW7AM1WcQgjaDioxH4mSYow33G97Re6PvhdSteGdEx2WxAn3Yq9eWZ6fyo6fYUpi9MG",
  "key13": "5Kjr2g1dhgr74iaFgCwUdZCCeKYP8odqW4W1pnEbzbjSVsjtuG6vEWYifwBRKaH3S6G31jKzZW8skdju3J3j4uxy",
  "key14": "1pNkJWzGFJY3zsmXMtjb4Mv6qyRdRCcgAR48WGgCbYdTj9aWDDLejmmhnVgnWKVPcF4VkJc6C5Wrznw4VufRSyZ",
  "key15": "22CveuWeSwekcLUnUxeXR2zStHCU7Q5LEwhYmSyC6w4CzeaLJmHh9CTwjXoQTRdkcGkMEY79if4ErHUJ7cSzozQv",
  "key16": "5AHXsMp2Em3udXUfGjNT5sBTPGrd1qF69XFndhvR4XZHg6FD8TorvU5LbWGK3fUuGVMp8Hf2HXRxGn4U4RRtx5AF",
  "key17": "3wEVcmehmFyHzs4tXuSCzFUbecPsEMhCNoCHPxKyh7JZgpMAH8fqAqHFecRj28ag4keiVkyLBBn5fMAwReZTkExw",
  "key18": "4h7tbzmX7RPBxQXyqpqtSfBesTYP7bMWiqucpm3pwXgp2kmPTEbEidWS1QT9Jfea47esXKyxKE4SAEP1YrNURTss",
  "key19": "4oS1R3Sn8yf45wAXX9i1Z3XHpxCrwJKZf5yzRLoq5vdWz9CWkjfVcH7qzxNz9sHVhfrw1famZ9Hk6C93ZBbfWAGW",
  "key20": "4PgAkJkH3ZZLnXuteRTq8DTCyuohCQvgp4499T8agMB4tJjXTALRSqc8eMgpEAFdgE3dPSLzCWQJ6K8RUVv6gDbi",
  "key21": "2zewZ7Au4PoD5T5MwLr1MLJz9k8WH66iUnpMwRWZ4C8ZnszoTest76pxEy8B2EacuLvkwKKnQfp5H5pStRn6DmpE",
  "key22": "3YbXVexitrwfq8HbnGJe43sAByFi2kFcCrEaQWxnqdtm165YfK6nxVxfPMdjY5WJdThYuJbVSxDoKiNPvSHcvVSX",
  "key23": "4mNz3xqePdNyZMsYkUfU3AYCWiJHbkwuxyQL58udEzzUiUsm16HjTf7JDuAaJkPou8o7pZwU52Cyjr3Bg4q8TtPR",
  "key24": "Wrq7pAcZdX4UN8XwFQxVDstgr3JTmwxafSxUiNmCAsRcULaJH7oFDXWaFnB3Nrv3ow2fQrZ92JyA79hwtTydi4k",
  "key25": "49tetQxUyTQcJKgdXnixQxf5g8hmHdNRBT6acxcuLfNtFJN2hrFRWD27YYeDSfLW9TF7dYVYKLLFYYEEB5SoMzGL"
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
