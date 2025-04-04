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
    "y8vL2PT71uHcm8yCjy3x4aZZWM3oQBK2qQ8YNJLrK5k1jKRzPAwhVi5PyKtN8EaLjhNkTzqyGKVo3JWWX8CNHKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kugTfgUfQZr6dUhBjeCaxDjpibDaqH8zWf9zdxJW2GPvkWP7gHZZDhLaf8Zm7SjAcqgCCL9dz7DNBXQiQRmcXft",
  "key1": "iK2FN1rkQuqDWRVt9BJ2ha9hKdkHQKao3YSfBty8k4j1xBrf5uRiKkTPq3QPdkpTbn6HGWwyK3UT2SAEJkEQvbE",
  "key2": "4PQc1Q379YJfyHzSbpMU7jNfxcDK2o9bQKjqqn4oFJp4kBf5bMERG45hNkDiXVFifUnsTDu1jZ72h8LohgzPkhfL",
  "key3": "21C3cy7HVQQTozRupG3dEUURdxzXkJ13W5NNZ7wUczHpma4YhAPcA6vCFoLbUMaUn8xnc1R8mATq47D2rK1s1hut",
  "key4": "4SsGxtGDVuSw2mbgyy3z73w7qYeEXvovaoLax7iHrxv8dEMFUeZ9KXC2kB7pp8iRYGP8xvrTLzfNtSh2nN4m6uGY",
  "key5": "31w7qSDDrJGcGFe7qUD4EX3ckodbMei5Wfo3efWu3jcJWArvDhptfGuyyGPmp3wTdtKQEEnA5FBDQYkg9FD5Rv3V",
  "key6": "8cgcYdEushGfzj8fhfRNF313tx82LtRajUaqMZkweAUgtueCMj2NRZCHBrHjef8snsnPiANTJgbYduBiMF8YU9L",
  "key7": "2iaNmi4F1z6HBnhk4a26PvhLhVvEeg9P8MLKncx8vc1MDo4FLSohF1Jb3aZiJBbwCN1Wwhr5UdtEiYCgxBEXkX6K",
  "key8": "zH65zjXBEJKRaNe6ZD66KqBV7UWaKWs2F8XUUYe463PDS3jnewe7df98Su1KZ7ScPkZQzHMNxAfKmPc6rH4M1hu",
  "key9": "2cHACondSU3Ao7nuSK4QijaS2nPaXnN2bfEV8nJM3YSAoLunvzyx5gBPEyC23i4ij1fYt5tQzGuq3ATAGoHAqbkd",
  "key10": "5PDqVkDUYmymnGnyAkP2iLoP1zf9a1mUXYkHvAueMqDGxaQFnaLxMha7P2wNpS491dctbL4jSw4jgXuYEQ7VfFg4",
  "key11": "37kTktf9dn4MfKUfwEJF6na1TUcgGE3AE7odZTPBV1oNY86qVNAJWeDpYBVyonH1RJUPrMHenCS6of3gN5DW1pSN",
  "key12": "61VviBmQCauqXb4rsZxk5GcdQjbbxqkm36mHJmd4ZgF1G5btJE1w7Z4ZjaX1bGszQdFE6HJ6XNXgSy82iZonWBY2",
  "key13": "3VieWV9YfQV74yzNp3WbgNJA5JvXjP9LWEeHZNSSFpSmCQXU7qnHL7U9MgPfsbXyjCbxxD3gxmEkjEbsGcF9hGmo",
  "key14": "3bRo1i6hsVQqYaBUhrwPWnxcnkiKUoUvCaJX7ApSKsKgdhYgTocA2jv5z49NeRm6UT9yugYErwuNftdjbaUgG7i2",
  "key15": "Ngm9HZhmrt555iYT7kiSa7GY4ZsH7eztaFH9aUjoJoDQHA7f2K4X3quFuyWhjJRdt2VwHcTsF6dQ4y2dMxFKVZB",
  "key16": "4tsS3n5dTvUgrSXXdrjt6JaC9MMkFS9ezwD7JbmR5dYLsg35faK1G9bV9BQsYWrCN3pK9kMbyB5EVEmU1WUyDqDV",
  "key17": "26LJfPVCwhzbYodtZPcYkvDRsRqH9zbg9xwnBqXBCfe7Ty5Scjxw8HnqyXkGhQefJNskQCEe638rz38LhWZxK6PQ",
  "key18": "e1DJ63UrxsQaqypKTmxsNX724GTjyJvhMfVaB4h1H3BY84vpQKb6VX56SZRKWXYih11YQ2F31a1ehdGPQgwgT7H",
  "key19": "64pVHWEom44irQXJbshrYd53Y5hVRMbwq68HwdQjvXHJ9smeFZfxPQMaVJB2YxHcYaU6PhYdGaGu5yL88FpdKWj5",
  "key20": "5rvvMDatDWs1t8cxTQu5gNoEHFkCT1Vt3PACrebn5DP7DfRdbvpwYrsMJodm3MAEE156QhDz6PzExVSgMtFjWsFT",
  "key21": "52zEo4T63uva4oiiNrWw9bgesGE3jq8EuZpUBe9HkiyZbZqWGA5tPCZN1o5nYBWeJQ6vio5e8youwhQtuosZKKnp",
  "key22": "2KnqnRkXaEZCx7rbHTTVCogM4XqUcN3WpSwLXjSSVVdDgqi9RKRhZbBSreH75U7TfqedfP3oHDvUKkAPssXLB2Ti",
  "key23": "5Rg23JyZHnuk2b2hg47eBNWHupTopsNLh2ddsWU6NEmW3fCFL2U7QCmwa852RP2aGqBFvHH1rZZf6RPdu6L8DzmL",
  "key24": "5cmoSyHtD2Hq31Ds4xe1Fqha3LjrFNXiaUtd6LnMioSUoDdHM9HtyLDsMKhtau84CfeP2dVNZUWwPCXK2eXJ3jJ2",
  "key25": "2MKojuC6156cT7R4JZ4iPCyJxR5HBGLxY4E9F53K3o8oeiRk9fmtvJH1Cy5Mc6e6GRjwispy5g4RDTV2QZsTz2jL",
  "key26": "gghJP74QhdVntsiEsaffZx94xTHJQatmj1zGGsa3wwvNagvZuvCDXNgSLE8fXHwTupzLEnX82h75hLfPsfTVQJH",
  "key27": "3nWiD17qj3qCb9dKtzPqeV2MZzobBX5z9V8nYdSExeprgxvpNcFNDKeGt68Bsg4XpDLRe89bpwQEQE1YxkcUhd5q",
  "key28": "5xWbRuaSHkRQP79ZdfnzsWAThUZsnfqvAiR9hBhL9YxjX3JrVYGD6GRPGQ3YA1mYf2X3Zkku4RU1ToCuED8XsSUC"
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
