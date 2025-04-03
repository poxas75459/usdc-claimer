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
    "2cwDcsMcAy73hTWx8Hc376tcCBjPfFAbcQiHyx91Hd9pXkeFSVEQgv7yfYMem3hu7zw4b23q28mpmA7kyUyeEVos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KYB6gCpTrbvd2Sd8bQUHStZLWAJV8EDHAp6s8QdcXcawzACEAFuZYSQd2fMr5qgTK2619TNnyzsXPdc9njpNpuG",
  "key1": "UfXd5p958kwCVNgTaKi7XZMszJERuUjeak2gtAZpPiALhVxKHvF8UAkjDhpDS5ExRyHn6KPmDW22kxgVxuAunnP",
  "key2": "4yJn2hgcvrCx4ob23V6wfYSZYwBAtcYzqhSmt67dDMgWJXuvacrDbxtmMQxFEc1J5ZX8Bb5v8SP36fdJKxiZ4C96",
  "key3": "3JrAMAzRNv7TPsRnaKVMotQi3hUXwxHCTcugftagXin3mC9LPfGtvsrQssUSfhL63NyvSt2R8TFoTZW9taopGTUr",
  "key4": "5aGLxKDtmV9u6UuVsMa3jFqjpYZXg9FoBowVtRevKaGLayvFkLkZSsxwjwXvLQFyosw6jKtBTxApzyLcvduHPF9z",
  "key5": "4cRpSHve2hgcJQBXWrZuJcwQKWWX3Fh9HcqQAWqJBjfBfMVH5cpuQZhCiPMzHytVtmS8v5zhm7Cn84auY6sydUQx",
  "key6": "39AdAS7PNcgX8aVLaa7GiyZLqoXbaNpxpJbQbbSjHLdiXPbm5Ttzbnu9Udq6MS3hJvHtdFmCS3ycfqds6X5Yx4q1",
  "key7": "4ZR5wnCkjQKugT68WrucNFUFuUkFpMBgFqei37NSbzsSHZWD1c7wopLKua9vePbNR3PqYhnC9vbE5YxSG31DAVsX",
  "key8": "2d4Fi6TdVYvWBHruGZKTAVq4LTSU4eXrYdzgkWbdUDZb17boUGPfWQju6K7ZzLDJ3WfxwDjhiimQ9C9TwBPZq7y",
  "key9": "3VuvJp4vUPJZ6pKMXRJE7Bmc9hMfWH7yCkTwxbspkoD47c1mgc8dzgmVbpJBdyRkjUnam7VDERWRn8muj5kMfo3p",
  "key10": "5Lzemf28DEGaMhRUYwDCSnwNNZNRX7XasmuvJpxFsRuXLSx7rjB1GKNGBW35w4yr42KgCmPv4YiS9vdp592sRX8B",
  "key11": "5HpRttu6YiveUz28bgjX6X5CWNbKDV5tNR5ac3vN69wBYsnhocvFcEKuYwF7Ddw1EZsnUFHP7B86NnymnovUGmp9",
  "key12": "5EcJ5S1GERqijUc5bxsX9kmiz4efo9nRNKg3LLgXwdCfwLKhsmMnifTnzE7wo5Wu6h7RfRK1WKyoPnQYvMAohbyU",
  "key13": "45oJpfLyXriuZ1Wu8WfLdUnVLeAodopFxwivzDPfrW3Znn96FG7V7e1F4k62vVLa6z23Lf156VwtA3gKCnh2vvAx",
  "key14": "4rbm74UFVdJ31crVGjhJQ5FxiouD5qZMBzqjsJS73urWVWVX5n1oMRzXzVwX5Pqp4AhWw58C6ptmNqFmRMy2wTCJ",
  "key15": "2S6budPGxiuNbVT5FdKRr3atCqXwvVit3jhgEtuQVEop8nq43Jso3ExJ28A2oAkYiyYAGyp14zJUxaPZQswf7DgN",
  "key16": "a1xDHFNw4vbLtSGdaoUrxsU6jJQ4zJgdBthsMmH246cMksoKjcaxb8WmEk49hWT4msKnrDTrBdroCnmWdxdPn5m",
  "key17": "3RJmZvfV9SzHYGYGNNnmm4KMQApzSqjq8JqCakZUMtGTrBNx86si6HLdJxvY7qPjHGWnCENrZPF7oUf388iTVUTx",
  "key18": "3EjiirzCf4HLV3tJXT1owEyYsYZj6eViZvxn3dqBpUztFARqF7KyGMqUKT8CKiEvx64ohxHEXCULE7Xe9Y5vD2mY",
  "key19": "4gKXpvYCAdKbeifyF5HRNQnZ4KucnBb47xXvHW7fsZM2iJ26poeTCLxR3hUvCBfvJCkZBawuZJujtRZRjri3MCYV",
  "key20": "mnq6oQZx89pqsk2Xm5ouiNZfYpYewYcfn1cc51wgUp83xrVCcWfQYDTKBxUViXgpPtzYgRCvs9WLETn9Axig5WZ",
  "key21": "m3zBhesMMtKsYbfPAeobLFdF41CTBRzEbiKXUGBPwbM12gQCP7Rc4YrhSaVPVLnPUyfitgh9EQ3cdzEMNuMsaUo",
  "key22": "53ooixWHUwehmMup7UTdrmhRPC4pantPxcW32ASc26rD3qXBk4ZTAgXATRpvAv47Qoj8sZwUfSn2qnBu4ozV9GFq",
  "key23": "2J6AkxCb5rYqRvzGyT6ivwnRzrWgmtTaKtNogbidZRYjNxuWrmaS5n1hghBVSQwAqXoSShfPg33qPwPEMva5vLMo",
  "key24": "5dM4cYGvp8qMHh2U8tQXH33BfDYwknxVCGZR761yWNcMYY5xyvSQzz8YwHwGAyR5tmY7Nc9nHpentgp111eFseGU",
  "key25": "35KyQrYsmpRi51tiVtgTB5Hs3mkUy2oEnn8JLAS1mKjYYHS6Vwa2F9o1yyRpg1RVmVWsCaKhfe3AEAHsTvuuuhAk",
  "key26": "3MP4JzHnSVN88pmvezWcoLBdhYheA3Rd64WMXacFsJvUGWTwn3BAMW5JEyH5iEHMJUGeD347V4eqPW81oZgiYspk"
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
