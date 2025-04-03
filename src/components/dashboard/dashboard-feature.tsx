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
    "3HuxK8yS4iwg8yqfzBv357KS6SSkqS3s3VQhGsP5FDQDDPDjL8RePz9MSdk2szBABgqbBg3c3xUdxv2iXheukEGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "435WxJwLUrwwgoX92jD4MAUYKn3w3qEDjVku9yoPT791DEd61hE9gf3xaCDbZvccwrXGeGLBLpN12ivjzfhnSqa6",
  "key1": "KgdFfcZUCVTK1WYkdAjyATZNefiZ725DF3GtTU2kNMPG2ks1n3objLFpWL5QdnCRs1t7Q5eiQxo5bwwXxd8bC3R",
  "key2": "55dL7cJjoZ3nCesruYpKybreUt7G1CzoWySY7jCYUrpoT7f5nsVtBNCcTwCeuRxKG7bQ7HgkHvYHqMUkv51PMavi",
  "key3": "kBXq4P1BEEaVkwiwGLP6PCdkXtJCduB9xRqhuXvg65DAc2ma1eVBvohba2QkYLLdE5yLH4QStm4AfCCGWE9474Y",
  "key4": "37dEgePrwWB96Qagm4sS4A7CaZMrMr3nmvezarGj2WLgapkBQAUqdAknocmVMMV6UhfAn6guR22jyMLaSDbc3Pkt",
  "key5": "2AHD9gFNf67im5E45w8wtsrrcNfYTfwMS8ddkXR81ZBZWkWzt6955ryTRmWBvExdcLojoks8ySxBjs98xYBC5pLQ",
  "key6": "3Br2LgpccSZur7so2pA8BbFg4yqcH5h2grDg8BwEzwEktryBdR8rJvjREEaAFYQ17kAfbRVcorjPHKKzTAuRQ2nG",
  "key7": "3sCwypLnzzFN1b6ZFdhVPMa92SAQKnWSxU1RCY5n1Vk5uEnP6Kg8q5vgciQWzjCf8nDZesE1uQWgq324SBBaC14A",
  "key8": "pzvXvDyE83KgXTTfZP1oiK2UsgvAgnjMd8j4XAiLwwH5WtfjFmRdb2KQLjqXQEuRistZAkgirGv4efHowxiyvom",
  "key9": "4SfZLgMearMbR48uvG948NBLtiW28sAhpfhd4XdYSQ7hDcdyoaxdqfUQPCMQhAf6uezSSTHw1yuS14u5vKPyTj5a",
  "key10": "4fZP7FHZNEUhoSfLgFnvnWZYZATyrXatt36hDWcM1jNK75i6J1TkuA36mG3riv2pX5LCC2iqM9Knk9MFyyH6538b",
  "key11": "4y87wjEs7dS1pD7CYULFjcB3mYLvpQcq44y4v3Gc8i1ZPs9Np8KjgXn1YRD1scezpscrJCecYbGhQvZJKp8g4rEh",
  "key12": "5x6oHpty9cmbWXr4m98C2Q7YZbsNJE3yomNMNRMRUiLagrYhmRWyWmBEKCTdhpXS3XKczuU42qitxDNatNhF5tzB",
  "key13": "nw6zYLNYQam9AomV74MBCGc5gWdAjzJ3Q2UYWLLQ4U9hsQrZ6C8kxh8rUMk5UjejN6bxZ62ttz5BSGmXeZXWLVE",
  "key14": "3T7tcsfnWo8tUruJVMRcYAdo4zs7SCF318woZ9xzx1KjBFLbsAF8TdPeZ4GxmW5KzNC2gN5fjM4yHwKESW9TNbkx",
  "key15": "5bcnvFYz8feoV43GwwGvw5RRvEDDj6r152FCDXNwHLiv98LDj1mMFJuu4BSpRuN9DtwhiM8vXTdLrdCEAK7MMdUK",
  "key16": "2LefwwQgkM5uf2wPP5jrs8fTWpoH8MEAhmXEqkdqbobBtwpBsSSELQ9FdmnDysmHx3UUSVnz12mB8HzsatVvobAj",
  "key17": "QiVkb6qifN562JVKxrTeCsrPvnC185X3aXkcZvn4B4Ja6QpQ9L6Etv3qVymKtwDDXTXKmFswQkPF6P6Ax94U81Y",
  "key18": "JfR3XkSVFJWnvVJCXssdg7J7QjMnPWdvVNN6Jw8yRY6XoUU15APy3cq9rR2cu7N6YLdCr6xGdGpsg5Vs99R3rwJ",
  "key19": "2sHTj8b6fUK3VWnQ87Wwmd8SUKQMCkMCJ5rkVX4ydXtN13zbPWKTK9F3ZJro3qSYqaqnzwMZXq8Z4JkwGrd7f893",
  "key20": "52e6HkyuPhQ3pchwvSzYqPm3xvPjgSsmucAyHUhfa1zRWQRseEVbat7yFbxZWDFdduyeS5BkAkMX55FUttTVeC1V",
  "key21": "4xwizDaawZvqBUSwTBTkBmycYEF7ReseSczeSaDaQVJaRxaGEpdwPLieSTPdEd4s9mR2MqeHDJ2omVXTAxV95upq",
  "key22": "3VeMfRQrZqmmmEjij3W5wY7FG3JGLx9QUXbmYKQpJHJzQg74T3dNAysZrwXDtbJfCCuqT7zhC1aEqxwoDJ8rH6iY",
  "key23": "4hB7s5U5FFQjz67BE64VDnHc6dGpxabtR6oUtpi5GLHfcQsFuoV8KBcTcwAwjyGS3JdzZwVYhAvHA5VbiLbxcFq2",
  "key24": "P5Z8sVNA8YFYnbcjLWPRm68chTuQA3juA8kjx4nwXrVVSGHeSgQTazTQgoDGcMZaY536qZFwNJ6ixkT6HkNmivB",
  "key25": "cFXs1dWHMAcGgqR9YkPJeUonmtpzmG31r7kf9qdBf5QoD1PwjKkb1BjabxsqabLHMsSF3dF1GXeuaWgBcZ5MRK1",
  "key26": "3iWJhd2t53DM2NyZSgvt3q8Np9qnzCdfST64jdFp8Euv2ziWrtA5QEABoEbrmUFNQypFq2MJ9tw8CUFRKV69m1hR",
  "key27": "3R9hXQ7b366L72Troxb9UMYbxR6AZV1gB4iHNmiBMqyNyanYy3kMNejLMhZKXjLCj2BTiPmy13msisCpVrKX1JXM",
  "key28": "54QceDi5e9JNf81fZwq8fN5VVTHsjXo7bh1ZSDP5iNCdZ1kCHScYek1s1CcnoK9mmNFusfPptvTQZUghbCPRrsrf",
  "key29": "3kFp6nCDhpAxEKnAYkLBz1rg54NmMCRzKLYmP9xaAqHwreqDLcFDktke7kSny6Wi8VqwyHSJ8c8iz4kXm642bfTv",
  "key30": "2sTokuqy1ZCLJGhjERWfE1s9ga1rGXd5DkbJ2USFtxVRgqKhCA9Tu8PxH7N11cjVsqwkddmqu1i4RWBdvwhEf3P1",
  "key31": "38rjsvkoP2BCsAfVuiDcvrbr8jiW1EtazQT3d4VMJwJUzbmrpEzGwYbF1ucSiJSuYqnae5kQfdLpYjjt9LVnowx7"
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
