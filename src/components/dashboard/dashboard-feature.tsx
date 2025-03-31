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
    "NHXWFo5vn8uEX8dxDDepDUjn4LGJ9FXPguuRSHVjrJRZ6zWRnFXS7nQQMd9A1EpnViAL8ib3KwxNeuSzKJWHWH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FFCGcVTNwAsZ6Fgh17UjmMbZB9hvZgzp3akfpvWuFp5tGZeyKgVQU8Tmyw7XU2yacFkiE9pRdEFDCCjbv3ZxNsn",
  "key1": "42KJAGzGeTPRGDfuvjqv4NbQ2FcZj5vHM1JAbVdPsr3KTfR9BYgkHzFUAgsr8o46fohDtSDumN2KM9cWmLpEXfez",
  "key2": "5rYFTar8NgvdRnR96enb1VBakKPu3fmy1Zc92jy54rYnU4EDzFiTBEMfHWN5J4F4aVy3xtbPgEvJqvgNKhRbLbWU",
  "key3": "4nq9s5U9CNDgupsjibPLGAdjmao7ZCch7XCozqV8P8i15q4574KUtBbtah7y1ouzgo2vPAo1e7yHUFwxKGHV6BrR",
  "key4": "5RiKXHm2qNVCTEyGyXTxdm6Ad9Y1ace1iNGWA9PjLBK7e5iWAZpj4ieunMyHDcsJSRqkR77hLiwjvo5RPTLTfGxp",
  "key5": "2EbxPdCRka6yrEXrXqNf9VRjM5tLz7ZqKrgL2v94oSbAzU6P4HJQ2rL8gnYUzVcLFuF1iCjjSpujTDD13B4wVuL7",
  "key6": "5QRfSmpuuheJLGmSWjnhqsw27ZnoZgwJaCgG9J377c1LSvEyh1YFE41BnJrxPzbeYvAz4dLocW7TSPtRDhY1YMAR",
  "key7": "2XAvWUNMvqUKpBWfgB7wARnGkiLMiKu1vdFXWqSrutfVZkot555UZyp9fcgmjZzXCfx2JadxtAXV3KByp3xTtEdk",
  "key8": "2xsUTJpuoZW9wNU26NFRFNBBEwAkWezUogmur8wqKnznePtfnj6uY8CVg38SMAX3esubn13JWWzeig6k7wGf3AE9",
  "key9": "2qbHS5iU5cDwRmpegnPD7o8k4PFrodadNDqoHKgxnj4xz4z75XTuNwN9nvMG6mz4vfYwnSWwPBLoXKjGbFYSvYQh",
  "key10": "2t3nfYAz4bGEzwEBqM4tqzi8hMmsAmxhWMFWukyjdJFmq6MS3Nnup3S4y7MvHtmNfMqoJb9FrSc5izDP7PyDqFCU",
  "key11": "2NhPb8KTVLpXDcKVQJNKs4jiJEoSw9MSKUzAu8Q3ZT4p6AUEf5khQ8YU4cEFoANgMcqjAFFxvGWFezDbvCS1xPZ",
  "key12": "2EyKZYn3t81VZ2edjJ7o2E3S2ghRuyurRzK14g7MAWVtw3b6feNXPLM9WL2V5w2TEuaqw5gEGQV7VdN6Go6Yg68x",
  "key13": "3XZyiEdvVZepcdWPSbo5b6MRgMcx1SkAMBpooWw7zecx9cwJxA5n6UWSKUesWD1kuUBDJJxLg7EyvStCZdmKXbgY",
  "key14": "r5op2kfLc8yTU9dtRmgFJAfg3nH5muGCuApz4cbnCnQTDgr9DEvGXWo8hJSYYENc1e1FFaQTsNNfxxj1wLzeLNi",
  "key15": "5uCMa5LpNAeDaT5K97Hq1yrkzoks5habRsKXoiy6rw2UXtw4cRUYg3LroVQDMiaN2rfB5Z5tzx2QJaENhRur8vHM",
  "key16": "1ud7YXB9Y9WXysZTSCA4WN4T5zT7SGLT4uTpEkFuzpEGZYRziqPLyZ4usuv9GGSM6Gahe1noksVkQrN1BjMXCFD",
  "key17": "4fXAgzidaW5taz5ZTbbpdxzioeRmrvPv1EEXdGU364D1SjW6nnBeAMg4tDuBaY8EK8d9QWK8b8RmhRbvVY756m4Q",
  "key18": "4jDPJ1i3ySjVpTrCJZPUKowatJ62wRQ83yFwn3vofgtihyLqc3SLUYpmxkDbgRLpuPBpMeMK439P6sTwX8PPW6ie",
  "key19": "2KVaiSyFW3n5pV8aTvZkFuvVaf1np5LN1GChcg8MzeUXi6hbjtCpqxXq4Ecme63osY14pkKnmz4KhJmPZr1Goas9",
  "key20": "3jxdUU6cfgBUSStZ73nx7sCVLgLDcxy28nbTgS4KTcUU8EQiFq2PReDDtgWaENf2eLJPXn52zxgnfdx8AmrvjXAU",
  "key21": "5Ds331BVUAEonB8vkjBVYBbCQuGDCKod9D2BoCjMzXxNMrM8vS37oJ1JZL5ZryczB3ePA17QDQu9zb78dhho97H1",
  "key22": "YjxPpTArpnXKv5qokbyVMpbBQ4EnSNjBybgps9Ryf4sDvTuVteLSivMszooxeADw7qm3WYjDQbDGARUtz11rLr2",
  "key23": "3hHTB7e4MkifVFYGcpBNQA43xjQdUciarwR9YSHFyYQoeYQ9qpWXx441aQaaSsQXZQ8zaWkDcSLQMrknutgsKJoQ",
  "key24": "2qYZiqBCuyGVN3kK4df85mQjpxpJ6F4qbBZvFxbiDpUcPDgaNpMWpbvNeyC1JXU6TzS8J5D88RxdV9ZfGsYoeRqy",
  "key25": "5hLwSCrHbFuVYJhTjWAfAPt1g7sxojzob8eZQo11ebFZNjLPBT3QyNGvrKku8mm2MZkpQyjUGqYjwrJ5HsqFewcb",
  "key26": "2WNH5XRWZKXsrueX4tVNrTTmX6tta4ExBJnCHugXNagqFJVAwJcjheeAksGgZaZF14y1c9UGjydYEg6bPYhgRG9X",
  "key27": "5sxTBA5nHg2sf4up8nHyVhjZhm3f6mN644HZDL5inpdiq7mBkFojETNmC1t142AZUAhu8CX6fm1CZG6b83YoqWpx",
  "key28": "2b8L6XP59E9eXHsaj6JdsWzDCNUrpctW2GBTkC7qc8A9riqvC2EzG5QpFmRudHyjYrXnyVG9po55K7ZzaQHZo1S5",
  "key29": "2j9R6AQKGS3KCvNAWkbe6BB33PW1W3Mc2cSjuc1CnMirZ7816iNsMwn3fS9sa6xmSLrgbuKWBSLcmCcbovb6Ma96"
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
