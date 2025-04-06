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
    "5nRf8xXtCS36H4yBLPEZ2LfQvyD3U1gShprVpFrMptjwieCcQhofXb74urgsjfH542pQAWynjtaxNxhuepUBCwGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37cJ2t6VJv8TrYkrpjr5ZM6pJmEGVkdxVqNPgGi1G3muD8iU3RhondoqxRTvaSiWcgaEcHprzoDqxwCnttYbd3tV",
  "key1": "4qh4bDmvAqfK34qj7RoguPK64iBiMjXYVyv4pQZqzcCxq34X1wcKF3MauD6dyGCtBbcJsvQuEAgLdCJd1PLc31Ay",
  "key2": "4BAQ9SE6JN3VPLDifMYgEi3fjtyTZEuvbdMsV8SxRSYia9duoG3tfrP5GStTXeHLHJpD3Mn1mCrkEXL5kWRVPdhb",
  "key3": "45kQAg8dYcfFnEU8B79LfL2kYXfvpfNnD5hBxtU5b59Lr7ujgVw3A93B61DDfXHHjwqBvfiH1JLKiiUB2bZ8gEMj",
  "key4": "2gJ476f3ActV5p8a5fMNc4gKuhpJuQMSUzxs3Jnj3RdB3p8gzmz2HzZS7LtWcZFmftMJxkh74qjXuyMi9jJ2fJDy",
  "key5": "23L5mwe7rrjNSW5A7cAA3pubHnST7L8LbC8XNtbVtxg3ykeshzdxYhH3osfDKY9GYHydrHAwJTDDxQxaCdfFWsvn",
  "key6": "4sCEaxj1rNSdVd9VvNMQ8WM6jtkeEfc5899hqhETvck2jSL9evcxk9KgyQzWukYeVNTMmsmb9jidtSWCcqwB5X9q",
  "key7": "du629fCYVyLyQ7yPuWFbGMQi1FknVg7R3UsqQRZijJjEKKdi65HiHVfY3opNZuDjNUCrAC1St5YUCKyDjCa3d9Y",
  "key8": "3Px3PuzU5zDrJB2WRusEUS6xtjUCnq2A7DucFPWwfZcpMgZfufB823pV7Bg9RJ5bpDZUjddoqx1mso63eYc2bUc4",
  "key9": "3HhFkRKWQqPRzzZe7JmVTCriyfcs3sPQAS53JDrv8KQrnimdnprSTk7hbeGTRjC1SWWTbA1GLChoZ6wNHwnXDa8R",
  "key10": "zFKMKX7K66PvUehuADkdHx2qiD3vDfXZudozCnVc7dt3S5piP79wxP3ETGk2zudHyniRBXzx7mziEXqbJ5nhfR4",
  "key11": "jQkVXLeBKpr2WvnozVzeWJHeZmYA7JX2Tj1ofWwdcXbVGfTJphTF56o2v5j744mAwP34HaDnFYz87zm6NVetpsJ",
  "key12": "5rjh4NwdAytbMHgZXFHhzsQaGXyJQcDyQxShF6GgTvpD4o3AmYuRDWU9gijGs6gLDQs1y6gkW8L6LdjUy16f3mwk",
  "key13": "5zKT6rV8FLTN33U73dzwFn1RuvXiAfNAd58dNxYYZaAVd6bVM6H6869GTsrJvZRFQPmnr4FZ7AzjVBsHzwe5wKxh",
  "key14": "2i53WSbfyFCE8vk3mZPHMBxUeXN89QXcrWeh8iM9g9bRZmwfT5YrYtihuomHsxrbjeu4HJWj7PZeLWxAFDjXLE9V",
  "key15": "2TdFr2hVfgHnVksA6fA7P5rkLm7Wq3rJ7ngPoBL92H3dSPbmiMMewf2AzQkPCdCc457CtiUppRu2WEfR9T7ZSEcB",
  "key16": "3osYerFX5ZiGKrWmx2ybWpaJd4rgWXhMEWF4DU794vGpa7UuJgs5KQpL92AgFFozUuSTbzP3spLT9mproS2nNXcV",
  "key17": "dg3QfwnPvWZf7GY6TFpXxU689ZdUSPejFDgJJUyaptbqeLF9YT3wXP6qHDRrqX7ty7dGPwitbpLaC2FVGHbDZoN",
  "key18": "4rByRdkXC2gnNXmeJEFf9YsGqG5ZJbY4NBwYZdkNPFJmjY8cqhCSudqUfN4U91cEdAe4WqFBLKYd15aRdRkigwSX",
  "key19": "5EoSW4KUk4t1rixmLX7PYRuS3qhoswpxEuzidybfZ3ePhxAVRHDf2uGytZBGorNdiWizwdswMd6znCXoqeh6ZV7j",
  "key20": "5wp7KjA1cAdYa8FgEBG24m8wAjsy7QUASZSCs6i2dfXpRJc8vUGxgz8L2aety9iMrsNqokgbJfAcmsa9pyK3diVy",
  "key21": "4tykqwC14SisqGX5aUGzAbsgaZWrTSrk3RbGguSftjo1rXtDV4pW1HDnn6N5be5KpiXZ3TVgjKG2rQumMhJqaitV",
  "key22": "4wepySTzvakvTwpCbiJi1BLEw6BAZBNfyTBp3NCqqdUkhSosJfBKFicM4fJmf3PTFs2JuJ9GJuER6UFzJKs1uBBP",
  "key23": "57uufKf6XYLCbZaNnc9sJNd7Sk29oj43hWdKKo8YHZYBA8h2GjP91RmHP9CyjuhAgHeM76tDcLVYq6FpnykuDNGP",
  "key24": "5675bGJy59jww2Gwnce28nyksZwPiWwdePgJWhXSEBqGJUQmkyUN6fBX6PJTPUi3pYcXRVsv91gPDojGEEqAC1Tp"
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
