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
    "4NVDdsJwmE7WcHDR1FWAf4kfc4NC3V1auPgY4e64bMTH8R9Vd5PPSW5qXWngANB7T3w1aJKF5EQ6U4ngjQRqx11K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SHwL5GfPmk8ZczmfaHGuFV452tG6RN1KkWFb2b1acbki1zfKZmrmUnKCxUfhwL22H5vDXru1zvPvtJ5d4fZzUQX",
  "key1": "SdbnfredUt2JRSDSvGhYeQDJkKLH7j8qb7WazazyEy5qeBgrMozf638h9otYyhKGrYQN4BXgud2Q8qLSJUyK6yL",
  "key2": "2X5th6upgYp4UzFXXUKasEDivXPAWcmrdVR1fdb3jmxxq35Mw9Hrgi7iB97dvNam5GKmTvGYt9L4g1b1acoGNsfm",
  "key3": "4ugRgzHzsHD1XS2GSjt75x1EaHmdVZuYhoAip8SPGqLNZoTDDZSRcuZ5jJUAa7AUdWW4J1mB8w71yGLmWU4YsgW1",
  "key4": "36dmbXePTR5nQCStAqhfxFGHzjhU7BeWZ8JEgiQW2TQgfd97Te9jyAFY7diAZVsbRgYhuN9vB7CyUhkftp2P1VC",
  "key5": "KpFK3GJ6a7RwDn8Xc8jG6oHc9931bNe9JCRoUUkyrbqBxvasZXvTD6y76vTpouytVPvEcJwyjMqbwJPUQ23VCXV",
  "key6": "DrJHaRQqz7XDz6L2rv54zo8K9sM4m6gMJNuWWQbb6Aum6BwwffmvQ4qsfnGauiDS6LZAw8y7eoX5Nn8QpiS8XP6",
  "key7": "4fQjheowyyFMT3EkPMxhJcYckSmswhsCf9RXwh94AR2ZLk2KoqnG1DU9mbkrGQWkbK6P9AczBejDewbEh9KmotJt",
  "key8": "3AL7aWTXxXo8fUH3nViaJkGVKqBBdn312PufJYgshbsPokuRz5bsJMdMNQLJmydgg15nH6hKgS4svucmwRVSyAeM",
  "key9": "2SvEBESr7SEbubidXiCJi6Da4HzHUK2v6WQszvw5xwC6aLr2WLmiDfy4DziYTFpcrLGUrULsBnNmJgjWLdijvHuW",
  "key10": "5rPYip2yHrJN33mhr4B2SMvYyhaRKpq44a1mV4zGAC8wzeUkwskG3jNGqqsdU3nmpypsXbdKXmQLFjVqjp5eKUZe",
  "key11": "3r67SkYQr5aDk7fXAmFbSLaqSxuvoG3wqHdBuJGjFKGp3UDmePeA7CBNXYrjkr3Dj9FH8KcPR25kcyY8beasEhR7",
  "key12": "475tWVbZ7GU68HEgNxP9ad6PRKGemTKq7fCLmjiMmd2dbcZ2s88mD1urcJ4cbAFAKa7uwujDSLH8QznVedZgAXgt",
  "key13": "kXJfxTiC6oV59UP8yM5gjFcG7TnXBJfacwodEj7HhxGP3FQmXWE9NyVMmjo7hx3MwkvsQoU6qjT9XbYdqz6ybek",
  "key14": "2bpXj41wccfebeQV4tf5SXAVb868Jkmtiy4p2LwSnqZDTqpsr3cN1oDkm7NTcvNTnuHqN7o1R1qEtEsXmjcCUEMi",
  "key15": "b3oVzjL6USjcjGVcJ9Wt6oW47dWCRpgk356s87YaPRYJwVFBqinFUKc52e6ShU27aKFFxBjJF3q7z1WQiXDqrxE",
  "key16": "rrqvayyx9NkPCwXLps6uTMCGpWJPtyqqMBPB8QikWWhRTWJkAUbjsszaBAC48iY75BQStYaYymwZXYctHJQnH4E",
  "key17": "64CfMSdsGgdHcRNMGdooHjXj2GaSpeJ32NS1UXuab4JJjVZqgVSmZZCW9imaHnBm8TzPtHncWmzvkizxruNAxfMo",
  "key18": "SEcRE8wd74oEkactDLPVDh2WWH2378niLyyAc4FmX7MZQ3zqG5iychJEU515MCNFAhvWg2sjiQZZdv2ZTb4p8q1",
  "key19": "5ZQMNxMTfB81kGWgnTS6fVDRBM7WSpawHotcbpygm6cCGEPVdpErypiX5LaPp3N7LRJ83pLTPhHaQ3S62NhkDyJw",
  "key20": "NCXytQLodvGJsAnvqqaYEMjpBQMg7CfUiYfDpFuHNmd8mDcRNTq61odjTifG1goeopJCFM1WiarfaTc7MwXKFez",
  "key21": "4sdHDhFdvt3XJm4EwtjsZ9aqByjuczniRh6Lx2ttfJr5thD4gjZVHnjTbg6fy192tpAwQ8TS9bbaxoNNPuFLkNEg",
  "key22": "4JFVrn8SxuaATE9rBFYmTDwrCWTBRH6xHi5K5sS8MZUx67aoPmErGFtMAjcQ6PLYofMSAjbYjdDCpQMS3i2QHa1V",
  "key23": "2tug82XQADU26Z5YS7zRYdTQn2oVPVB1wX2GxXcY3U7NDbShfhAoaM1ZKGzKDWGqPPfuE4aiwYpZrEvAw3vmeR83",
  "key24": "pM1MQ52TyVFJgiDo1BUqoVdHfw3rhgrcpuyuskkHYwNiRSxstjnSJ7Gt61u8RPszyF3679ab4Nn9z4Q6DAT3Q5F"
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
