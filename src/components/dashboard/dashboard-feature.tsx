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
    "4XWC9s4s7rqbznshhaDPbQBy28PrzU2S3GWirr5R7KtJn9hS6xEN7WcWtzJkLLFEQxJ7WxmrCrEPAgtNVNyofKyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sSQhc89SKZAvAqfP4Du3J4yGZTbsMhpVAvc6xqM8AYWmsDXnXbn8tgUmhg5aNciZtepSvv9JuRQb9JRTah3Lgxh",
  "key1": "nE8TLKFGDrYs882Su4r6X7zBEfpbSsizdgt8XrAZ2tuKFSw77HHnqw685r11YgVpv5pTLtRkAAStvjDKxdeeMuq",
  "key2": "4TAUAyJ4NNzjdsopmt5993MUJCSXkFQQP96AYKyoD8xWyhXNDET6u77DRe3k2JoaXzrY51vFAxiHNT9y7gMEQFNs",
  "key3": "2vZXciMJAvUk2qnDGsbYGD36EDKDfLw1Vj5FJCJkH7xdo9FgWcBRXeSkm9U5fANh9igpSqmbdXC4uwJzoa2YBpAP",
  "key4": "5SLR8Nc7GUXj1tY5KDWwoRt3aL83JiykSpF7GjmygLEJtDDX46W56Fy2wpKCiyRQS3kpmXyUCzD25UjRP9udHoFi",
  "key5": "2nKj8dq4nVMSXPfbKxP3Zh2uYFgZQjYNZauaRya5P6CbGH7EiDob1sFmhtVwpXZ4HFENouUPYYA5Vb6Sp549UUjr",
  "key6": "64DXHnFARf2ycJMyvBEnBvN54MF71QJr7cUm36oeoH8cwTkVQkcS8GkDZcKRZZPRqpXyAMJ1ypuyMv6xGT12KaRA",
  "key7": "3Db3k2nwGj4ffDVZ5Z7c4Wh7zNkXag4UkGfirxT3FmF8NhTJE4vvmawJhjZgEdVMm9Za6y6jk1rwy9v5KHQAdL9z",
  "key8": "sGs4XJTfTJi3pBRvkhUU9cWjYbATcvMzrXjmHQiGkKktEwAbkhHuF7xE4waBKPe6rS8UuTTGYSQP5SY4vs2pyWs",
  "key9": "4t1exvBCPKqdydFaHVBg6ssMBAYdqoi3C3ha7wPqrVprAGbjHn4tFTV8ojzpT8hrjX5KEjZjfUJmnMHwn4nqaRvt",
  "key10": "5CDoP7W7pK3N8AknfZaBkoT4rzyqw2kDY7dg6g7EQ1YwghzNqjepFPE7KrN6sJa7chs1KR7dBAW1TEUnvP6TSyW9",
  "key11": "4fAEUitCS1KLSg6qxz14LEXPCrdhTHqGq5THe9sQVC4ETjUCNauqTDAf6CRYVB1SVypL5CTtKgAThBBY82tT3CqH",
  "key12": "41CfeFvQJgN7beeQLESY1WkKh1XKsCr7aQDKHEzYQmt9N2x33EQYq1QHwsLZVehyCwb89EnXmogVZ7XfXS5iiiG7",
  "key13": "5rmBzYyLSJCj1xnFSC3SL8AK3zujoB9G1STcTgVwYmQKcfta1mjGE1wJTYGdNRgLWAxPtmF6dfxjUQDxg3jNqEPh",
  "key14": "4ckcyBDEdsAET4hGPhVn8ksAraodH9cyzyxUA1ZC7WkpYFu3xjYBAqxD1pJHp7TbNusF93kb9s8LbeCYEpSv2uhL",
  "key15": "33mo6YkShaHYPisgUJ9AVSoGpPkqExLETnpRPxokby5fKJLUdPbbAau4yicNUM5JWficfAMhBHHD98SFrRpCgCZn",
  "key16": "sJE7DMuNfBQj8LaqWYY9EbSa2q3Us9zbHUa4Q9mUDtQfXSwQyVfGtLP4RMNRvgsQ4NUWRNnfFUC1hNZouZQkd5t",
  "key17": "fhbsAcn6WUYFX7PEtVR7bXgwosdgQesJovcdDeeoao3FHw6fvGpq2f4vpqp4DhwMsvh76UTjPWZdmADuUBLj2eu",
  "key18": "5Gyhdq7JAQ9VDskTjHz93bey6WuaMpDqVKkdzXBQHnqjKUsqXJHyi2Wnjwpvju21bkKsqcZLxRhnJ6YV1xqVJTip",
  "key19": "54rJjyhWS39izrFpuLT4KWkRn4jNEdwfxLqL3bDLehGegCtxz1oKhQTH2NX7hjDo6Fw5PGCbduGt99zFtXcddsAn",
  "key20": "4WqUxfX3u5UhvQLFQ1DRP5pGXwpEWvnfap1RyESZq8zr9D9oH7UDvTFRrW3pTPPfEmEYQNcZNoU8Ut9MrTHs81zA",
  "key21": "3CsdRTzHexxGBrU4FhwwMMpiwg3LExiXFqt8VRCiYoctKExatwBHj4ReK8f5NAMwwsjKtRj1ccqU3y89GMkJfxH",
  "key22": "3wxJgsQre1Z6J4nkx6Pe5VEtbfiGomhpy6QDjQUZTHfLKDaWoVFjrPKJhhqJb8WxKK9BjP4Hu4v3jQxX1iGwqas1",
  "key23": "2C2d32GDJ46fgFNZKGGjA8HXiKUH5jZSuRaTxNXgkJs4qvbbcsimBEAziyZm1tjkBErVwXe7QzQQyDgArSTiVy9j",
  "key24": "4a8zMmcEjY4E5yN3mEGEkQip827aNKiq7HwoVpKi8hCPx6SdpUt5zBWMzYxAaBZ9v3WmFNsExaqHDEgeScKvMtmj",
  "key25": "FW33hgaZYzjiEUuSkSUa8nuDqLb5hwq7fsYW4QnpppNyxCTeYvjTu9cr1TPcVrH6AAXzQdrv8L6maqmW2WqadEh",
  "key26": "KsptMZmVW7oXqmNcT4hC38CKbBsiDkSgCgZLA2goimBeJbQbnBsijXVdPhJr1mMWN24JjTSBUk8FXcxLFMuZ2tw",
  "key27": "5YKapHJvY63UywStHwWfBJ7hVrD9ks52LsC75EKLFnsDJNXgZrwYc8ZE5fvEo4paYCidhTr4JDt4xXigiLAZgzxE",
  "key28": "GGF1Lkder1FCFcstzr3iwRuHrhmA1XPPWoZZqQq317tzFYvPCbQ18Tin23uzrra5mtGc4EXnF91eeSkb695vPHf",
  "key29": "GEES31Sito9cQSoDcXLT2sda9HhetL2j4EoxYbYv2eAbMz4NAmDRAon2Th9YW7bXxqXeD6FgtLX5L2EJsb1mBt7",
  "key30": "dskhDGbTH3XqtP1VSd37ckpk2PQDLgvG1t2fMztuSDfxEoLMmEicakMX1WBUG17EG6kSN9vpMYCxdkZ2JG24ZgY",
  "key31": "4e5KJcUtJUahaFVJmvWb5kkzgUeeei7qqdTY3jjcFDRyMWCg1T85fZUmEzdc6MB3YaDMPJKKhWd2sXcpzALueWrP"
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
