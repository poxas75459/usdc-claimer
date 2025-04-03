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
    "CD3yzBpq5EiLr8S1JbKNjCTt6gykVkdVJbXwkxZmymvnuCd86isQUkihvjLmrPSN5agMMN87oWygDvJd2C7gKDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XxPBi1yLXue86PbHeXFPhQwB9e1whcDRfYpNBXw6srcuyqjZrZif4VYoJ4WkiLawzY64kRzSd1wwW2zRPBNCgUY",
  "key1": "33xdC5RbXBX42bCfkm37xUj455o4fEkUw3186nUxLSdPGJpb1QezjvJCoKbma85sgdJ6FY2dcGR5c3ucpY2ADJq8",
  "key2": "39cSX1MoHLy4NG3qTCDLnUK4w75U8266QN4TYRFJr3RmsAkNmJr19uXakAR5XRMKsiEkqxfuKhVYNVJP5pGLunKL",
  "key3": "363WjMJNeJh1TiqHyKNVsQwcK4p6Gjt7sAyDXHWwDLGZ62fxtqnux2JmtdM3vVYTTiePb2FEfMebFhWZXHDniNRg",
  "key4": "2Vwv5sYMJaaFbxKWs5Mn6zKALRPcqfopEeWJM8mqhiLujTyTHgMZUQsorkhBWsEHQBQCwVceEjqU4jKuxL8b6L4W",
  "key5": "2smKrkhNXn6WjXcQZ3ensPcrP6YFfwXYVrKoXKX6Epe9HQ1hiRfDF3SnERt8XnMghZzqoXGGqM4Hoq3YFZjhH8zf",
  "key6": "3UQitNZhw3WKHSWuaUCF2idB12xVicUczCdoUSNActAqK3YdBjwFs3GTyTrfJm1bqYzReAajWKQXxnXwBL96g4je",
  "key7": "327mYHSKCRKUVg6a2eNEwK4MWD6Gw2uQWuePViokfppDre7kpUeBzme1qsbxwB9SmFrAPe4xZxDiRKG2ZCjYdqLT",
  "key8": "3T49WBKozJ6iQN7nuiiyhPzEH11NR7W1pwzXT8c5uUh29gVASq2dkg9d9LRGGrBy8wLjz1WJVwwsjp8Gv7BqnMyn",
  "key9": "34QELaPt7E8iHWrHomSmVn7Wz5AtM1sEeFYoTxRzGDkijnExhScuBqYNNh2B5UVBvSFG2YhQVcqpegrUr6DtEKNp",
  "key10": "5aDHhoKp6AJkBnovzQSAeAY6uCSaLf2JwEGyWFVdBREPA1iRixCAEaQybMqDUXbNrPw7zUoQKPXLm3e7qi3CQ4DC",
  "key11": "3vWzJdueSUNQkaknFA5Uybz4LBaYXmiktv5795nMrZhcVvNiZx4gQzG6WU3LdTxi1JygPs3GmTsaiC3usawUR17B",
  "key12": "2LjRETht6pVaSesoFutrJNu2xMh6EtEq5Le3mayqhs3pyJGph8zK3HhjN6SYRjKzNeKVB6HhNHgxaLdPyCKCzBRa",
  "key13": "4wvhtQFxYqDUgbVJfkid9o6oA9XCsHwpwuW3e8PpWCVUN1v5w3TsdWV6iMdz4eTH3sF7sf1CnCHCwERuSVhJKrY4",
  "key14": "3zyvw5AJLND7ZFwMBvjtASN5PjisvLh4GtsUmDqi5t3VZyadhpbqLCSVWiXXkxGatSnc3wm2znv584CHteafnmTK",
  "key15": "2hcooyYzqJqLvo7bRgoETMBmPhkwCCtKY71vbCnuB6FofJQoxzong5jBv5AjxyGx51heGLMBnAqZkmSGNMLPGhwG",
  "key16": "qqKwaMH7m6CuDgXuTgmgdim2LWqU1Uq9An2Tc4kjaf3cry4vbVSZ4pAwrg9NJNfZ7hveL5u646qxa9hDn6zoSL3",
  "key17": "3B99nmpw8wb9izG24xH4hWXmpWFpMsmXJ3ETXAJ3EeXppcDDk74WEUhB1RnEaxTWnJDzwF4Rnn6XinLuECdXqNbX",
  "key18": "5fpGLNe8QV6WHtaJ9xHx5VBYswYgzzNjH6xhDCMBvFZhktqsCmVjDaBFzm3rP8EPYoCmezVaBDULgR1n69izK1qu",
  "key19": "4ToysVkCbGnznf6VgA5PZhWiTjfoawqwPYXCMi9DHxg3ye6PAd6yKGE2zE4vR9Wk1SX6VwASAy3eAvJ1z8rvfoue",
  "key20": "54f2qivCcJFR6ZFSA7zqMs74rvX7WQHeZoivUr4aNMtjZjuxuqr6rpEYCx1Cfb4EC1trNUnjM3QMn4iYsmRyzs1T",
  "key21": "bh1D6ZwmdqANcYBZUiFXXD7imZse8n5tJ3mz485YXBreqGArLrw2Xpqq9JQAeMfc4Urq7kp7Vz38Qyw2G1obMS9",
  "key22": "FANfhKxzWK2ZJi2AqWvBnSKmYubaoxw4GZvQ613nzhADSPtPHfyB5zwd4pNfYj7WPbPQfHymHphMMJ5gknuV3KP",
  "key23": "3GY5JXQ1ZX94wpnQHSHZh3GZQcaZSofLnutkw7HYy6CLEti2SM4aRR8A5ASG6nq7adbggQJzLSz3RSkWNdABGpch",
  "key24": "4nEmDuTHKW9HKymW6sEnJxfRmq8mmTsejPr2FTprw4ovCPq9kiqigvJLaiH2JS2sdLaic6R3S7aBJhJARUzWpgu",
  "key25": "2csonbjCsCydxg1araKCd1P9WepZhh1H8mxputYiiy8DrMXDFtzu3sFzAHUG5yrhYKBoWWGNMr429iJLQDUTz5h2",
  "key26": "4BNgQ4QTpb41uK3ZkmgrcWsGRMeXAffYhMLQcoSSR3gxD482JgtRvGqBoRibqgYgcj5L5oyuW13FgBRNF8H7Jjuj",
  "key27": "2EmH7zcxAawtwJoN8raypkTqoBPBbhFoyXz1M7pB8vnFWgPAPwLrgGKUQV9q2JcCWBF4m1uFUrHXLWynf7KE7KJW",
  "key28": "tvdPrFseLeHJHzwdPvNq8fhjEVtiEThxbcZ5EhoRdJkCyPwMNors3b1rSxx6ocoBMCaUMBAHgeETaXkHZHf8L4S",
  "key29": "5RGK5A55J5EaUt9Td9M7gqPJEth4XDnzdrqvsMhSLQc1SyrMiPu4WVmM6c1zbMp4Zg5zHop2ujd5RmfKg6zHb6Q6",
  "key30": "4R83NFzh9Ja1qAHX2F3bHk2TfhgwQLsVLAXBX8ufcfLBZqQS7e2TeaFurXZz4ni4FxkJyLuhw1UrsXptGeNUvnLx",
  "key31": "3KbgTvz791s11YqEnm1NKuHnm7FMxdDNwhqXoYvDjsCToaiUSgxuZ6gurQJ9qvu8LXr6BFaWPksQSVCKfXfeThRi",
  "key32": "64mgxKuxj537wPTbbTRxNC1MdiWoS6BrcmSCr4N7fGBgbtjmiyUa4FoKCi2HXkWnjmW6MaFVNMnFA6qvqRqqNVXg",
  "key33": "DdwFznQXb9NyC7TugZNM13MuoF6e29iHxTMqaWLHydHi1jT489JR65K6vCddPoFLjGJ5mut2SUprGhUv2jG2bXr",
  "key34": "3HEKjtnKcPyoNRGvbhWe5QYR79FZFHtyDnYSDaAueT94GRuK5jZZw5mShBmbLjcVvjNZNVZn5yuc5tABrNqAgDmJ",
  "key35": "4SCBmf6YQUQjjmdrYs5Vq6vJ5JJ1fQafcsZbVAHsCpFzhCTfnT2rkwf23GkTFz3q3dQFzycXnzUmaYqGzahqN7Se",
  "key36": "2seyoJTpdH1cVWYsVqPes963v944wYBQUo7tk9rG6tS5vYNLB8qkoFRsQJ7MbetHVv6jnfDCo3HnPGyGmarYHYXt",
  "key37": "bJ312ZRXPzXG5Bidywf4hqfCyTRpVHFQTvhUoytpuN6rcxkbXuwiyMALb86pQ4w7UZx3u2fUXuur2n3xLogSzcm",
  "key38": "4M2c3gYTW7g5YH2LSVQkigrvav68p8xQWP23Q1EYbGtua9uRsJFftpJ5aM6WftpeMBxA2KHjSjCu1y9jXaXviuTf",
  "key39": "4e5D3rBmGXsfyYFS8WctBL5iGwogT3LnhGfugQEcMG7FSycQHAysksBky3CAyxr4w5uPPriTFqAJZNFMVkYS8mMm",
  "key40": "5oXvHR2bMfZQoB2aZLJ3JTSzc6B4VCC5gUgpdUSu6RHko12TWvcXYysS2wCEBn1TJYZCvn2WSioBH9eKdds1Ki1q",
  "key41": "4MaYuHwxJjXBja5jpQAH25HDzmtBKwFvdYeKhRoM5gYv4UqZb2RniYk5biAUuxeqBeasjJ9ZSpbe9VfRdRcGEYsk"
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
