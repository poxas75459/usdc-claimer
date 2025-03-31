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
    "36DwGPC2ZM5ttQTbyD8j7VWN9j41iVzAior5X6ah3tgGn6ebpJZ8Xw29jjCZDqYja96Nz5Jnvq7z4y5d9BweJxUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dB36EiQM8yqawYyH2icq6CewaH39jSMXKqgLEXTWXWkG919LLC8xRSqbz4BAPvnom15tBY8VxyWzZUTdDN73gy6",
  "key1": "29fEJjBhUcw7G3iwUaResggaKugng7qrvPgGJFnQCNJ2QLZkH7tjvbJsvVb8HuPjy4B91QHooCG921E5PiYuquwp",
  "key2": "2zWa3GDFhFQJwkQRWwFw9EJ5xwBbvdMMrYsMwrSntE8CpP6bBMaKWQviv3t3okDgb8eP3uX7qWvC3EC8nxfASgzw",
  "key3": "2bTeDiR3SvjS9qHMoTxwfPPpMDXAvj11ocDqXpjea87XDdh9yiMQDagoCBEfwSxyyG5MmzphtPcywCqeWAfbG8rg",
  "key4": "2q7Hvpcr5dqyST7zbfivaaVbQhNEJPHfFPiRkkMoWTmBzjBdKVhvEWtz4N1Dykro997epU3Z5iSJeBQociv66L9w",
  "key5": "422HZQx9yA5SYhkQ3coqe2Asof1EhdLx3sF9ZCaJfHSvS1vagVE3wzJZhtNCeJDGo3hVgJvqsTGZogdtYx2SQJh7",
  "key6": "5Qwq2EcPQzsGP4ESBt91j3Z677GqN2gk3866beXfJcW18gtqQPWPBsfK4DSNJ9o9FFBQDXY5JAYDTVxQTBQfBX4s",
  "key7": "5YdfMZbF9hvUAGLmoTb1GDadz2gxfCWTRjAqrsyAjFFHs1NT6Ws1CHe5GacjziuSCkWmcBi8f7xGoUih6bFqAYZ8",
  "key8": "36RUwJfPMDFEh9MY1gFFc5uRfRFp5J8FsQ1aSFTCUS8V3phiB8CXp1a1311wm6GtvhvAcBwQDs1Y9F9mLMzSTzRa",
  "key9": "zkgPezUnBQMiNdpP2UJAbmMMgHBUjMKxpu9S7SDjvMkBB4p97gPHDDJE1NhLReRnxkgVS4qTavzSwBHj7JqUtgr",
  "key10": "4zqV9yy6V3WKSUy6rjf826JsoCAddr89UrC2H8LwvRyri6cmyijXbr3HRtAeqj1hLt3fdmaF5nwa2cABKkEig9WD",
  "key11": "5aUCfFW1chKS8RD8rds37kbDEyZzFwQHiF1rkBk69iXjouicvrP2Tu9nJYnJuoCAEXJXXxNbPBvrooStBryG9M5y",
  "key12": "3i6TnL3kKqkbz2nVWxuXccUL3RSQQCsQUgQkF9VSd1Gfpb2Gww1UqnCfovhzY1e982Zu67aVH2zn4ofbDJas2k7c",
  "key13": "4SiZPu6in5tkokfSvAwM9H2is1oELfRu7SmJX3GQuK7B8NmqAnmBhhEHdnAiQKu81M7NpGzfFsHNN4J4QrfG77nu",
  "key14": "2Xb1ckBAXC8hpp24FthpJCQkAe6pTTNtksq81zpdUczeWCmheeHonLyKAD4ApKaAg6hvcUwfpAcQdwgELs1iu5Hq",
  "key15": "5hk1is9dqjvqByfhFKohL4qZ4Xow9HKR8ziwop5Q6gMQ8VBzkQh4CojRo6MF7vZzbD8c4dBjhxwTm3MwgTRqanYj",
  "key16": "3K9C7CjeJPMsNUCar7ekkMX3JhcpVYMjHJNmhZQDbv8HpjoTdZztj6DFEuqfDzC8QxEcgGAqLs8VBxfwhMUFzV3R",
  "key17": "5wkM9i7CtfAeHGgVJRz8HeKnfCGkpuxWwEYZvDaX5zS6nEHnvevpd2QL3VYnRzSSJJaYrmV5s1LSG1XksrqiFG7n",
  "key18": "V6znY1kmuXKqSWBxF2LutpqfPqWoqxDtYDWUXMU4wVoBtPR9BCYW6ixHSAPVg6k4HoJvhL2J3V2W56jRxDeTYVC",
  "key19": "5LBhLpC95rL7WQpPfjPhmG8Zws3srCGD4posS688zD7kf4EvnBU2yjB6X5WWp1pzpEbdB33w7muHkwh5ZN2BEDnd",
  "key20": "51Ng4pSMqvYXZPHhkJcmKXCvVPpFygZbrBKuXRgiAmdeZe4hFj2Dp42Kk5rQwR5RJt2Kx8SDKNSCnTNup5KnvoEi",
  "key21": "2a22ivRqQq7zpWtjcvHCso4jF1Q5zK11P8tfn8Z29d655Q3QzNiQEgVeVPdckfeCyxe4QHNjqywyFmM3VxZE6i17",
  "key22": "TGT2oaLq21aTCLkaeLBeyQEL7ygSz3VRYrjke1X1cz92xjhUwMA8M8jtQE5XVkaksobJAnN8q8SpsNPdAqGi6Tk",
  "key23": "43b9dcAS7xJAoasfm4LggyWFSn4am68V8iuaN4kQ4NagyHFNBKfxh4n8cS83pbyR1T2gLHhCQAdWB2M1K4jKvQzR",
  "key24": "5T37JHxNgE5tgVJ7xADeEvLrHxnT2yBGpRff244e9smb2MjGuvs7iYwyw7CevYqaiWm64ikCS1cVf1N8vpT4iFh6"
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
