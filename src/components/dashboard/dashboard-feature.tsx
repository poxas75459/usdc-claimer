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
    "KNXUKi62nHfYfwTQWpzr37t2mPYcp8fwF2LYwuqzLa2GAJefnS6RAoWXw1nazesCvGTisKPoVnxeEVUFruqqnbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LuvLdaJH9wnZh9oc2DeqquXa3z9mpLUiVoVPJFFGTEUdZUe9pW4DVZ5BJuip91uScma6rirtBQS3qsK1Dx1Q6Qu",
  "key1": "3rExLqGpCfkeWbRXzwds37taUC2FQmtb1g1Qb7NLcVJgzZNQ1YyF55BRP8PmUqsGjtKJkiyoHMMsdnj4tBZFuGCx",
  "key2": "3cSFKubjjjUoKCXY6wjpyqeyvRMcpa9ZtsQnqkHZuqxgCu7dJG4cna6iE7pnJmamZBZDiXGxyhN2tCT5PAZPg7cX",
  "key3": "5Hs82c3kb38pnvLPykxsYszHE5SU5ZRheToXCH1FmKHFg74CnQwKThpaekPne4gNsfj3PHZmos2FFqUBTCR5d5CG",
  "key4": "237seLsHw8kNBnWyykPt3epefnd9UzozQaPjc6oeeDjtt24mD2kwqZaPLQgmpR2Wb39fRW9769ejFaBdZJQUi3np",
  "key5": "44QJtZV5SFLy52wGH6wgHqKibdQhrBMHQuTzqWT92ypg1iBbk3x3vj5qUdqQjhY4SPaw8Y72Sa7sNMi1vvRRmiM4",
  "key6": "2vpwYPiKhV7yYevX4ToAwPHRUW3YZmJRtA7dwK48bgf9zVCpxU8fY651tYwmPDYCoi61ZNtSrYqBgao99gq95f22",
  "key7": "4FCmvvBsK5odrmUsH1ficrBGkQY4CvJRVFJFEaURAK1HbGkMN2aZmKcXNqwobxcxuRZKuVU9Cidf2Ft6Hy6UAe8s",
  "key8": "3NA6JuJ1N7F5zgjBharKq5meDUCLxY3UqztQoNANn8WZAt4n3nAaoeLWx9TcB4F6fJcwJ8Ao8RHMTzYrBmaKFg5R",
  "key9": "39xQ2BUrwskcVrjDvSE7cnYPjN3VZzaUYDFoFWpTW6Czo9cu2itw8htgib4qzACnthBBBdpJfyVSVVpWETLdNN6p",
  "key10": "2iU7va7ttevbVo8396T9yjoHe1S8dydbcRR86j7NAvPpLiGzG2AC1ztahJ2ARqwHoM8Eb5WiUXbKocneAYDGaU5Y",
  "key11": "4WfYwkU8BkpjQpz5vUfEoT8JeKRHmgaD6zBbdg53WgEL3yRCeRxLdSeGikwAENbykeytCHXeQc1qSdMHxUSUff2m",
  "key12": "2vbWRgbKSdzkYDB9ceNLKw9frGcQ6KCZrKKyY8KcxqYwS1k7hZoYQguwetdFUH1nVuzU8MAiNjkkD3EswUm5MBxS",
  "key13": "3YCjTzJDhwbXz2y5xftzPDE2cebM3RA3tdG4nb9cjtCKj9QsMpbkW4LzKWZrMsETCc6CSW9FCR4hKh34t5F6R17w",
  "key14": "3JuLsYRgDTCnC5nir6fXmBHqroYgK5zXw2RqPSmW83ErPNqxzvv7A3XjAfAg9etBRkwofeC2NbLgGPf2ADChDuNj",
  "key15": "4CnXveDE5UU2pxg4kWKBWvmaxmPX9YiUzFyMsXkK4SXKcYBBTi8gPiDbD6cvjqxNdp17en34xvtUiKdbvLgtnZey",
  "key16": "4DiZ4kWqkorDegMcV73cPoggcnJ226D41EaxhRuYBSEsEDMmsN4w85HbeJBjkzhFyF52877Nj6nvBcufjSUjwBPf",
  "key17": "2gs2ijH57jHSEffiGUSV1BoyW7DWdGZqfzqdNr3Uy7dfFEBzshb4zez45itstCucrgaCqfnL8uXtwWErmxRpQmKn",
  "key18": "3E2DpvNxCC9im4hcU5WZeZcQ83jprXzgmfxxFic1jPK4KBBCrmysZg1YxK2vHbNEjyr8QHiuahCDXTFRYhba6Mpf",
  "key19": "55fgiNCB69Fnas3pDgEsEx4EYEG2toRxgvg1TqaAGc8GWoQtLmtBBWAk3C6poWHWMWSkJU2vKf8UmUQwmsFuqFAN",
  "key20": "5taGEd8HxrhwMVGBdksyooDhkki6cW3eJyrbe6DTYWzjtK1t5TZ2WcAowybX9d35XEMs33RmHNXVfZ59WLY9Gfjf",
  "key21": "5Ci4igT7Bu4fnYKNDc2b4D6U9PtMrht4rtX6hwdTUX5oq6SMduthwUw4G7971wHr5vuufF9yiVQUqcKnAczqZPog",
  "key22": "3w5ZA7z95Ec1TvHW2YXBVswDdomFdEWVweo41JQReTtt1VAYgC6jjmS57bMEhtftPcidoZUZ38P2wcbUVN7nXWqT",
  "key23": "34AYmtVo1VVfEoDf7Q7v4KvjoJmXFNmybdDEgqB3hFqQQVeEuaS1i9Pg4qWuk6u7rVwjdw6q18kq8k5Y1X34H2L",
  "key24": "2tFm66Z2ntgqFmWrYTYquvAfaP5Si2GQ1WwAW7RXqXVuDNzncFK8ig9GCGPGYhwcberEJ6EC3YELWStryQRWoH49",
  "key25": "3QMn7b3WEzhrtK5X56qfRQaeWCxsBfEFt3WDPtAoGrBUw39dUZAaFDz8SogjGF6P7nGDCJWWbpZteifovhaNLjuj",
  "key26": "37zXT6VJGND9k2bSCt9UTT8ufr8Y5mNUP5evy1Z8kT5juuV1RMSX8XRWBLmvwas2TLH7XMcn5FFbgpKs3GRspBjC",
  "key27": "eyarg8AEGi9RXfT1tYjYgqEjmnt3VVwBTFosYcd1CpQKi4peuUYHtt8HbFuET5yRUU2KkCQjngftXwDWqrTrxRZ",
  "key28": "34sWdXxXKmXZvuqWbnAyFnauax5cV2Wsyd6Jkiunnz8FbY447ydYWhWJVaLqgMyCRZmXmmg7C6gDkYpnBrtjyERn",
  "key29": "59R9s4rXij6y97svVDmUynh8a5mnMGiQ3URfFR33bUbGct3miy6QTdKim8M3Cfjzuars1ES4vt3Psqeihp9j6BL6",
  "key30": "3DgHwzUg7BnQnNQBkGu1Gg2ciw3yWnuoawDB26KzMmfnCWTWyknne72Bdcqpexr9THLqxRBiRLtjNyUZb9eX3rx6",
  "key31": "59az25um3Jr8DhRpxnQX7Rhsoc3EDFxAhFYeEEAHhyLrE4L37jSWWv1FythYbmsidfrsWEDRnzjGKmncuWdh2Fop",
  "key32": "5EPZRwJbhpiCh24AusGfDVfRs5qkTNxgrkVa79RcEiPbNC3m3HqFEY1pLrujZ7dN9bMCBLNb34HL5y8r5UdNv7P9",
  "key33": "PVELUyGLEsfS9Re5W4kt5n34AiFinQfVBb466hJ9AhGEnkpq4Jcuh2JvRCBzq8xaggRsb644WLBbSpd3m7G9HYo"
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
