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
    "4Fu6e6YYT5dAHtwnkw8MspCavUB3fWGimuwzu4RMMS1SDpXUwLcKyTZDobyowCvZghUjvUwBmfbu5NPNXyp5Vfui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58y8Z96z8vYuK3FdVHmsSKQJtKSHRfAvmWSn1NAP796zVrQwsqUCzwntYmsVQWEGLREQJ4A4owszD8Vqowosu2kB",
  "key1": "apZVJgDWSokWvPupRvCn5qG3ggaLBvr8iUgXrdmetpN2WxWZhB2vWKNqKUrhpr6JtXHGasrCbdzXvkTixsfyD22",
  "key2": "2GpqAb72doBVrYZcK7HXPNtB3nNFPb2eTHKNwQti7F5jDYa7LKQRrbrTvzKQHMyVqVRAJLVZG2jHCFBBsTHk2WnR",
  "key3": "46grmNnCaXLJXJm9LniqBe5YNEWZFXto2Aj5Ei3sQ1GZq2HUnNrPLhhks3UhWuwDBYQgaG4qdciyyyd81pV5GRcC",
  "key4": "5JF96MD71uFmcodboHrgn4rmduJdcryJRJFhzKCn8c8AQRRy5wnpGx73HVh8peEK9VzHebzMwa1NyzWL7HsM8s3r",
  "key5": "3CRkv2qc9w4NLENP8646PxL2kAnZPwxCP3s67CwBvT3eiCfiRevH6XQe4wjagPqDTH1Yn7Umoz5PsZteS2YFnvNL",
  "key6": "46xqjv9vkNfispeCZy5abyQMf18jKmidzBrqL9uD21nmRdRDu4UWcoex1gDUDi1a6kKpTxBNGPG3XwToAQdoUgBQ",
  "key7": "2Riss5Mf6t48n3viMkXaaBiRHHDTtpv666tVcsfybBVzGjZvqw4XAbuLdCeDtDVthQMUB4sbHnPCFbxYKQJspsCz",
  "key8": "5bEtjPLoiFiRbZKjf1UaR4PF7r4muezTfJyqtUGdDkuWHpTgk1hSkwYWDpUZ3KdQL9HcjVhpnWQMkLXYy4K13JJV",
  "key9": "4wb3sVtau3Z8EjVaFwefHZVZekRkgiiwbTcPYigHcPVETqvL1BbaVmREsiGr9BTGw1MbjxaCCtotWC8ZLc7mgLYG",
  "key10": "22DTmF8Kf9Fq4iiGsnjgmeUYzVPHXbeFNGHPBzH5HQ7nJHYHhc2afePAHhRR8NWpBtWg1kSPvGtTYB1RzZ2BEL1H",
  "key11": "4frQBJ9hE38ZajnBxxMo8exzcsm6FKaBhBZFfwStUa4RmeYzP5EatTPnx5th3Lwoe2JdFzjnSjNnwgGostfgkRom",
  "key12": "3e1EDxEm8RVSizXNBdE9exKaUt8dqQhmg9r77g6GS5Ld3K3LdFP82N7uDVix6RfBq1tEijEXEsytZo7ijf3henBa",
  "key13": "28hLaL8x3WyFZkMykUdJzFqWub1J7BELM91CyzG8HVwgGBUx8W24VzD1YFBKvZqFEyBZAyEybMzd884g8hvZjHXo",
  "key14": "5BjEKLRDn5XwZmQimVgDUTxCmREht2wk4pUkVudcW7Gt1RQdWp3cTzYK4NY6LcTc6jt7bMA2zpT9U42NS8rYaXGZ",
  "key15": "5Hm2EoMe1yKqoMdMQMk6gqqkE1CiUX3SWCqbMud7Eb7VYVqrbwWCyYcMqjNSTbKnpdyhzMBT2SJXPrGnZcFGVwYS",
  "key16": "4fS4KWCfvrecuzxUey6URrw7BAN9AKxfbEwUjsPvPYzCwwnakqt5JVUf95UaKiedH7vra9UneybLJ43B6kb1uGuk",
  "key17": "3k3Q26L5aWrxBq2ayH7VfyrccT3DuFxdwWGNYAwCE53fEznDWxmAoMnARCLUiWepwbtVjgAcbDGykgna4VGa7ZEs",
  "key18": "4ystDLkdrCqnjYMZSGMLkNnbxG3mBcU8Xrg5xHkFZiSWBMm2jfYT9zUNAr5M7jFZN7DxnuVbS7zxJu6GnsfVATHB",
  "key19": "5t3AhteLDsaU5pWFGyTWG7o8NLyqnVY12bZFSHq6CYc83aFfqNux57e83yyXZmbmf2qMoLqQgCsfV8zcJg6Y9DXA",
  "key20": "zqNGdzG2wvZQ4sEsakT1Zsga9dsNYZY6KDWrgtNohAxCB9THd6veRCoeSpawY8XXTQiPtyWZoxNUceDpfQmYR61",
  "key21": "4Ws2whugwDxM2Pqnt7yKwCkp22q3cSjzhF7BcN7fSc3oABMSgi5GndCADP5visUihBosnHcUcFqsUsr27TkCdRNY",
  "key22": "3k4BoFLzRFQun7Q7DNdmG6FERAGRqA85xEkncjtQeNuPR5McB7c4TyLsBRDQiUJyh4Cru2BwYsKJu4X7xfc57pVf",
  "key23": "5dXUyqGpBsaYRmKKe3bMVw9gq4kfsRZuXQwu9qZ3vtpFknWv4t9jW7YR3moQKPfSX5NJWK5XZxuxjEwhEBSmeyCp",
  "key24": "4c18d5FT1TKZqsyFKufJDf8xW3P2FFbdw2AAq84jVsoTRVScLSLZGfGu81Dp3vdoAMbqC6VNQX7CWCfF1wMzZt8J",
  "key25": "3K4Ch1YpnPSNNWDZWeuryqmHBfYy98KhiZ7sBeHomghCZQ3p2gfmg2pP3eathpiLowLMjRjje9DHY8azTwy7qGKS",
  "key26": "5d5vpr4eWmaZLZsgnSo3ycMF7tgiwu6eLK9C4LYzEHgnRDBBq44P4JjCSZsUkA84hDv977Jm4XW2T68HBHcTeW2h",
  "key27": "4NPoNGQsSrB71po4wg7DcZfZqvNePWJmZe21511CYurwpwttfFb1oMYkwqHRHNdoQKjbGmQmeLVKmEhGKioUGgBf"
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
