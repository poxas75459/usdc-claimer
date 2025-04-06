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
    "28XH3tW8cQDGskzGoaMfzxgNHeUB8ovRQnsUZj9a57fy5fNgfFFkzxA68pi1EuU16M8zLBTMTK2t7YMoJkyu7uZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rWCx3XkyUhBMR9cwXZivoTdm75e1mUAnhGcBgwqgD7LYbACoeogZ19xEBTewqfBTnEVm5t9FReqmDbsqYvbsN68",
  "key1": "32P59TxgMrFdUkqydknnzHsRWt1drEFiMoco4kY73nhJntCb3nbXR51Ur8aYWMERpUhZcMCdVt3nWWJQJAafiXg3",
  "key2": "45uhHrUFGvfxbfNC3jvLJTuo8mgkK4cQWbp7sWFPk5PEnLim1fqvGmQSmYVtsu6ZEbUVaLGEFGKAGxVnEhpcsSjR",
  "key3": "KVoE9bGbCzdDkzo8FmGiJ9uFpJwXNuLKF52ss3mfvSVL4tJJXPunKkgRoTkFRkcVwZAyjWah4GNy7SQq4uMfbYX",
  "key4": "4Qj7uSDKzsnffcSV8aA581HGUcjhMhuocBt8iS9WEn7ejdiogzXaL1vhLJ6bN5BxAdcvRf3a4HmJkregVJZBw8yL",
  "key5": "3CzC36F9Vqy4eAdEUm1XYxqbKDVPNoN8XwiLVvqGTokhfFy8rr8uoaV9xDHNfxBy75kckNZKtHFkwANkynaU8abq",
  "key6": "4ETg3tZFaGomnSpyUDuR92pAHZWEE1Fr11HTPad43dPri8pYgjmkz4VAt9NuZ1USWA1XpyKcAxK7HqeUWLyEUKtd",
  "key7": "fT4J1SHCDhKqnnddJKPTsxcT5pNXYbDtwcSstH7tccPdDqdRWzvZ93jN8UXCXWMNWBEwaPs5FhYw91cbKU2VPpH",
  "key8": "4fNRRAJEwaYvZYX5VcLx46z45iiXXGU55f8BYfxNmSTPX1G2r25QJNUutBMKsjCXZJim9SwwHJ3Jr5FSihFZid3w",
  "key9": "3mzyC3WFqG7YXxKk7gUGpAdfbTxXoAP15jYMprBaCPe7ByuvALntrhs77UosV9E7pu74zZ7RQhNNQfvNqbNnKd8v",
  "key10": "yZy4SErpHLMufoPVwfeRsV9LEsAJJch6WQBzH8zVcZZfaTm9GmyW1QnsdJmpvJqfke8Vuh7i39VK8M672gcUY6G",
  "key11": "4XqDMR9wTkashWGg81pzPxLkHDjsC7osUqB2YjGiQVim3Ejr1khfc12jg1TQRprY4aRY6pkvSyc37BJg3KiXmHLp",
  "key12": "65zFbLLfL8uYkMDCpvHnWSAPP7ikmskdtWEWzK5yQYcC6kpEE63iCQpXmACuYJ4fVN75uVCAJBYmAH388XDnuApS",
  "key13": "5U5bgVRbey2GEUoJ5NiQG1WA4Mo7PMXJY5dCPLnhTSom9o85RxTkVErgtdaAfTku1Hgfhk8WAo6H9MiLWzn3Mada",
  "key14": "xysmUKgUMiuShzdhzi5mtP6FWj5S23gK2xZkepZgzS8zEBQ1QkEB7hPiAQgzVkHLdxQCeDkhGhdG7FUDPsruNua",
  "key15": "5UrQruuDE9GZL3miz6M9NTfY3GFF6dZCZa4E2ARp1dojAyxeiCdqrZai8LJcYuH9qB9A6oxeL5mW4a1PgCKqvZ1T",
  "key16": "3sPqME3rah2SwYJKWvPHHYu9LiajrzPs1FggsJ2YbyByxp2LayjzbwBzVY7FinpbvmYuoeAMLUNanqzV6vGWicRm",
  "key17": "2RJUaqtw9TD3k8oTE2UM2TwZerTadvbRE3bauZ5oMKJqNpDFybw2YoZmpds9YT1oybbPjcKaE2qFDhYrKrJgEo5t",
  "key18": "2CQMYMvXh222GC228uyTFNUKExNfLYr9tHhczquPnA4SoHZW1TXpQH4GJKNX8tuvQpkd6bEp7PsaEwA22g5VZPL6",
  "key19": "jmhVFB9zY7djPoCPLSHRiMJHeR2vFjUaU6NMFiKAxxb32MLZxMCgnTykEGJNvDq2hVCmAZJeaFkHKyumNZCxVc2",
  "key20": "38uLFjCTfwH9uU6wzckVDABR3NddqDesNwL8Q8JfBWHavc7NBVgwpsZXBqsq6AA7th6sq1L8mbrFcoNqYiomk1K1",
  "key21": "2242PK8uRT3QrjAdzv52caq2mwPBHWGiXp2eLhye37SKNjR4JkV4BeUZHLV5PFhyU3RNX5NSBv9pGHXwBDgih1sj",
  "key22": "4ZSDgpvbaWKe1v2wxQNLTqSJQDhUdXAL2EWuagfdVxFRRFagPitR8ukUuN7fJ85zEh6QqJYicrQ7L2DB7Cf7QPEd",
  "key23": "3RMKongUbHj3m6dfdUBBMKAHtZAcMcXfzhQKdZngN1SjBBBsHVEod98f1H5nJp3W1C7h5L5hnBCmqDzW2ELXZCo",
  "key24": "47WyQJHKehr9DYwnnSTUYeozU5Mz4snXf5XmFQgc3DbR3PCnz8tQMT4WCSjr9UWyGhS1RBJyS4iacQvr3sQJsabV",
  "key25": "X8DizDaDWd9PKrEchnUNqaBhJjpNnXRwWouBNGaSS5SgmSePCghWg8xJy1KSrGv3in6airQnUQU1vBRidvzaqWq",
  "key26": "611jHa59fnoPfhgnHxBMWb9DAtVudryu2ibatFu1RLBkYaQSHAiqh9mygtAyLfanPNE6wvRCZyp1qv3gRwoWP5Qd",
  "key27": "4pARCEhRX8ntEn36kNv7V9tn5Sjcr9ME9QDT3NMdCxFgEZtpUyubqPAW3TM4eFEiUziQYMfkwL1sodWtWPjKjRiX",
  "key28": "3HC7itBgw7Nz9QRGcwrtHLsXSU8BozXpqmNp5ewGSby328MVcnNVMFwkBC61R7SXLmoDai55msGoWLyh67fEwUie",
  "key29": "fcDqkRxDFrK4oa8k7oyY6taL6pQEhYHZyrbvTjxN8Umbm1h4h7sdF3QkMefvoq3GhYvspiYvzJXWcRvNVbkgDPj"
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
