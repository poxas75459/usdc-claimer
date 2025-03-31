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
    "am2Dp4mzJ6JTMY2Sf74M5jsUmdg185Y6qiKfosBLL6ZPLYV231ace6yKZohufrwf9L1UMsK9UWiPqwuhEbY6tYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iWPq7s8xaFrHgxmiWnadpxZhZC6aynZiLbD8jyJDpu46K8uowNezZ3HES7vgpiR8tLsGEJV3pg6MHWVrx8TRguf",
  "key1": "5v6jRkZPvprLX9xdZsk5adBYmEU8JEMW41HRH1mPu2Tm1C2b5qoMJWzTXU1f2gSZkFbSnRvNsFnFgB44WWaxR4PB",
  "key2": "3KAsYSJMfkrtoucU772WQkJaS6s9hyviW1asPpznAiqGX9T3M3UmqrnLgAM38HRV3J7efoicF685qzmjBCnt7tBz",
  "key3": "BdAGBsX2Ht5YJEpzooM1ry6mU54od5K36VcRRoaw3yskDV3tQwDvabEPFhFJ4ARaHMe1cCXpSgBTnG6Rb5dQLQt",
  "key4": "5te2u1bJ1kQxrSy5q5jjamQfoLpc7PwtnLgMK77zk1QLZYDJgoMg5gYujyjXtfK6BSfTQ4JoA7swCbQFifQzCubk",
  "key5": "27ToWamBpMXS8Lc5owHdymdBpMbNLDPHPTZvrZQ2FKoUNGhxsbxZDE52mVSfe2LWwnQcArgj15rig7A8trkoLmmr",
  "key6": "5N4kvH9ciGWSskDp3L82GTRM5fHH8jqRnuHEAaHXQNhjcicy2WmconMN8Kdx1mCUcS1pqYjFTVTT5YUT5FS2ZnAc",
  "key7": "5dZ3n5Pme46gNYCXRBi5AkAEgGoavDbk4mrvACuxTohmShghYi2iQbpE8VBNDnretToxd6HMLFLXsgVQHLHYbGQH",
  "key8": "4g1txSZDd5cwc7DKLPmksGXGbWnCnPkUnin28F7UCnqmmq5WoAJ9qdBvbcUr7RR9ZwKQmQErq1K9qG5Dsih3Gp8U",
  "key9": "5jMYhELuc9P5jCL3uXEufvjZyuFCq1pUmbfER3JUq481GBPwXd7nnptt2vgWMnXekG3i2TSGTC5m5s6R8MEHJAmc",
  "key10": "45gFq1rwmXqeodPEXEDnwTqAwA7rbGAFPW4yinpfTFpdVTQXNsqahG1QBzt7kHSxYGeQEmqphfUckT6uHxB5Uz57",
  "key11": "52bbEwBHvSQghmq4UsqvFJSPbvLE6mYnvvWHL7Dptrju7L1PNWuQYMUUKA6yRJ6ChSMERr4emcpRYkb3JErNWUgx",
  "key12": "mmaaKT87BiMaMUWfmkKjrXx96ktxtEnQM1V3kypWaUKqp6n5M316XuBH7H1tSgZKGaeVwvsVeMfFhT7fxKNTZUM",
  "key13": "4DMpC9KHFAcrxzGCqbWkt51hQ4my1PXwmPfLHCUWjJvx5BUwyLN52cuJAEhmbNB2grZ2AZNbUcgSsv8mSN4ZadEb",
  "key14": "5JWCxXKygtCRevwCAX7vondVGYQk3b9m5oq24JgM3RdsDdKybXKTjhqvWiVNCAQqqMaXX99j5oArAsdqvBn5SXGA",
  "key15": "5Nm1yBe7dumttuwThgKs5yB4UYfnUCngwe1yStNwBdXNQbaPVfe2YYFq71KVyPGFTSes6SMj2gBPC7XDisCM9xba",
  "key16": "4tsb5mPdKq9ZcWMBsF5QQWH4S1jArgxDxE3xttDjKoJJCfoj6VVm8HhBZeyj7YHBhTTBz6jkeFybL8uFhdD94Xs4",
  "key17": "4tNvgAaaTk55HyAZtu42cWrwB6LSZ2NditkoPmBwJh1SHce3ittEar2pvm5h9poji3JEPpG5y3tChQt9eRhuDuDj",
  "key18": "Huo45tBh1xchFHnWzVKVNnidRgsku6WFnaXdE55exsybWL1tNbD9rFCV5uN5QtfjDopPf19K6nNtvP3YszKaxSN",
  "key19": "5xsdgS4JUiE1UE1BgvQUohgi4gKjbRCkkYzqNUFHsU48cscYwvnorZp9xkMSYr94B8FKCAbnrph48nKVQPxq7J6h",
  "key20": "1ckSQ5d12dbzmsCHyFwxzsw6d5zeyw7KXdBauVgks6GX1obaYvKPwvzcrJQgp6kV5nWUPRtxehVStdkDxy7uUJZ",
  "key21": "23nWvSx4Z7NhoEqyp5CL4PQjCKAxRFMJqeit7nurifT6ggRXHKbnsZqQ7AJmdcBQkaPLokFdKfEJEH8QWkU2c2PK",
  "key22": "3jEq4qzd3oSGaLDkvgGLa8cUW17JvxYVS3jhN49oL3vmfCnSUA85XxtkzwrRmvWMeJfiaKpuQnRtSP5hi9FBDKnM",
  "key23": "3Up36eBcDkLUMF5E96Wn6uzFRZk6no8CRHdt8hkENrV1VCwRgefdkeHnqc2LEBq3P1fsR3sG65ezyijiauiJgSRR",
  "key24": "4Q7ynh1FfCASpBXRRwW4jUZ7eLAxuywV8nUWcatTNur2SZbTyKX6f3HF1GMCT8AXM9zpqigKuCTFT3j1L7g9kvjZ",
  "key25": "4ZbPTjwdzpkB8eX7MV21uJTUZU423G3BqgP8dDCGs8mkUr1SQRaSJmEw4zUXp1t5fcijM1JP6eJLYi6mKqtyupPs",
  "key26": "3EKQtkFPMjaLudouiyrc3Laubiuvkz9Qe4VTTuDdhS8CowHfXreMyzkLzGjZnxeKYUnsEJrnX3B7n1n9jevaNsr6",
  "key27": "4RjNNsCXt6taJphpiihpGijZGfDLEZ6jRMERATry65VMXSjiCpFRcm5o4yEvVEuDzjwbJMEYviE7aMTxutvUP9zv",
  "key28": "5VmPBbnkxRrVzoTsUnSkA8TyLesMXLxMCVEuSHaupQgGe9Aoj9gTEdRBFhYhmQyyoh4T5FCUttt4u7MgJc12DVV6",
  "key29": "wugxFQP5T6XZT8PbvzFBemQUyjTHichv2tZoDuQKUHuBCY6jnGHFoJHvfFS2KwDyoszPC8H9NPtLyVHweqDaktu",
  "key30": "4UzffS5nC6FSKLZp7xGDrUQek9ihkTBqi5UNWvorzJcpH2MqU6mzRu13ki7RUiCbTGTKzhGyfrBskw7QxTaCeopB",
  "key31": "2o9Y39sAtDjDQFLQru4NBXzrrHr85g6h7tnhpz7777sH9JiUcPvMS7MtDabsYpayRLC93swmpJLspJEMhJXcL4Ff"
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
