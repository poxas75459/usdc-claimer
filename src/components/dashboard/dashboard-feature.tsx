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
    "2m1AMhegfHck6ofokJqFK2RXAeY1NxMQjtQLjFxE2nXMw94PvmgQjGKTNtTKhvLnDKmYbyJiWTAc8bZSGQEgFDAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hoLjHjxCEw7MxwvSUL7VE4X9RSFdawLkjEkR42d9Dh4Xr5vNR4xS8aNwkpU2FmVenTYACtHGBJ5XkUXpT4V9NQX",
  "key1": "ECKRAt55Pdpsa1aEmuN2X3w2ivnVrQ1sAGcfAG7CVbRJ4nxZFxLSnivY1sNPYXScnYndj8qnu4xiVkbpUft3d3Q",
  "key2": "i3VLk9fDUzXJ3cpT2cEZWL4dUTss1yqyEV86m72gMKc6CJNjs3RbCitdfqFsi6t9bqZkHNXJ79TB1hqRmE9zh3g",
  "key3": "4x6b3YV1cnETLyWQisZun9Dpu5yuADoB3ionDAaCj655EaPtXx4jGSRUu9WgpPQkBt4sN3H48hNSyst9FzA1Eifo",
  "key4": "57WRAptU3HPBWM5J9rtHiMNStCdsDtuTtW2J9uPLaJ2MTzutBtDxnUPpWj17YJgyNwtKbyeR42K5f7CfoojgUtzz",
  "key5": "4MHubaRJ75xWWhVXdugJNW7HgTUiHyjzbJRTHcA8Fn99SSq7SRJeVsFsBHiekJwZkGCrynA6VwQNDeiEH61HSBrF",
  "key6": "5zXLPYLyaAnkxXaMj9ngEn9FqdGyVeocghPePwgLFXWbJutepwbB8P1323Y1wteuF9GspKJuhCksfoXJ7RRty7QF",
  "key7": "cWk3J8BTouCHFCUbH4dUACgcK5LZ7rBAC5SSXEQ1maWVDziAPQ2qU1JQeTTrH6R1fDto8KzVC8gPFLW9QJQ614g",
  "key8": "3998QEbcGq5HFmCzHRMPvVPC1v1pCQKUkebecfbKowTRMT5Nq3AE3oaNYY1cfdrzsFpuRAL8Ug2vKc1wShWezSAA",
  "key9": "4CUtmTXimJ5gbWYsdUwZHSN8frejtNAC4QifTXqP6ixVEpmZDQuarYKDcpXCvKaMsKaMphZtB6FZTGs8vvCEsPBL",
  "key10": "4rZgP2S7bUQ1mmNJQKBwwAY29vyNcuio3uERmeeAATTzacYnGHjzoqV4aV36v2TQqKjLg3iNnZANXL3qDrNdBXWj",
  "key11": "2v1Qxts8KtEcu9RxLTXtgNYPY7k1G2Rx4s3LSkjR2ip6RPn6DD99oAnp1UwLpVQsTPHHe8EgpCbDvWJxVr7fMFtn",
  "key12": "4pjBdsG2Dtng4TmNB8ZJ2txLgGZbm6CFXiPnU2GmN4RbFaLa4jEgYfARok4L94UHAT6ee922DYS4iPfZFEb9MVdm",
  "key13": "38RNwTUdkto6WStVPwDar4vPe6QvTh2eqaWTgcDdeQmG3vtgFuc4jGuN4nnKsohcZt4ydPBdg1m26guX5xmu8fMH",
  "key14": "2onjR8QznE5gxVCJ1RKAjFxmwMYa4rCxNH6bJKdnzdDfmBkASXHm2H6STkQnoYLF9zZgWwvMGSC49NyfwMmRa7iL",
  "key15": "YmChuqrkfTNSGctT8PZStkBebNBWtK1x87B73XcBjmz6yZXUtoWyjqMsnfVVjJPSsZGEbNkUZJR6pXSTHKZxvLT",
  "key16": "5sKLVZVtnbA2Hr1phD6EUdg8CNEhhvhA646M3W99CjKgEKWjjREQ9PzMjL1PRjJVhUKuQ7DWyUotpjkhSFoe48GG",
  "key17": "61wZuMo6fxAdfdwSdd2odkhAFd7ffDQw1NsncsSKQzgmqoL614m5GDwMWcMV24aT2s13rqP4RmV7PmWv7sJz1fUy",
  "key18": "3b2PxXE7kUVoTNq2f26mGCpF5MB2ef6Wp5p922d2tL3Z2RCi4hehLipF8CwiQ7UgbPBPbfn91G8kUhbsMVD6cAEm",
  "key19": "2aeKFgSMfGX7iR1MqZM2Dvze7Vbj3xYy36Ahh4ZK59jq4CDcNwvVkQ8tHdGKwc4wPyQkPgKeBdpNLGMaFPACbR41",
  "key20": "3U5EYNHkyWbgsqkfsUPQXjC6Pag9952TsM352XTfukmEAGRPCMJc4YS3EHKgCpDMsKiNmrHWq1wLBrtkDYPSQwBC",
  "key21": "32938HFA8bsxihCEZmZXaCRiS3SEd8BewEgV3gJbSdFYXpVqfTBBQLJU3GCuh8NXCLANzJ9gZQ92Dse2NvYJaPLE",
  "key22": "GghPndzRUPZMbuUZFuTTvrYfei1GApbWEHcybbYrcMN2Hcj4hJdqQSiiCvPbeDN1QiCiDJi4fotHuknEmEGv5LZ",
  "key23": "2jCaF2oAg9oVvkKJMTYk42ekgwj9eWeNrP9dCDyWvZz9S6EcU8mKBH31mc3LgRfVunsbRNUB8viSiBKPP47j57tL",
  "key24": "2cFhXrdG4kEuXL7WJRkWcP5CgkXj8c554ig9oA3uMo5SJJUNqaRodBhP8WQaWzACoXqmdEpiiWi2pxTqaZUR8QCN",
  "key25": "2UmrRY7aZjdsWAgRHSRQLfvDNmNPAywo7f9rLRQ5tXBFr8m1c5qXmU3YWH8ZT8zdD3W7mXNLXo7xWqRnFgyicT2Q",
  "key26": "34nzsHo1Axk6qRBEFTFNzdNfzQagkH25oxViT54EuBTZ4RCZp1VZ1Ed8SWvz9CUJjiUn1dS4145yfxdqkyQ8YrQK",
  "key27": "5C2KxNhda4QMncyCumHKwWNve7BdwcYr3HXRNsw77Kkzk6nk3jQdp45wwd7yMb2L5hovUG6A2uUBSnjkCTDukTbL",
  "key28": "2Bc6cURmuD2Mw4Epnt3HXyKvbZsrSDK4fM8YX6mUfDiMRYMkkv8M215BYV8jQA8amGrAaQMEkj7QuX8N5dx6HrDb",
  "key29": "TzZcSMz8ovTzfGPpq1ic4CPxZcbBcpS2hTpb352TiF8CPPv8YeJGppTUb3gURPn1C31TBn9u9gc5e81BtF29Jhy",
  "key30": "2J22qP8NbgCK9bp8563K5yJF1choKGUR3qNy2akNLiuVTS64QVGax7vMmsZfcm1Shh7E8qMetPSKZ17pxuk1QTWC",
  "key31": "5xTEiN6DURmci52XzPr4xM7nfNzzSrZkASb7jXu1QFSAE5Xson2g8yudjUmXmZB88imLeMzSuheQbYBbxwvg6hPA",
  "key32": "3vA8Th9vUeAQJd8sgWcEDgogZiUZKWe1t8g5pqjkP2QrPLpcjbJfKHC5hhTzQjByZ86V3ECHUckc6q2EuZMmHoGN",
  "key33": "3vXYRM9Ffb2AAk6N8D9v5DtFxrYfr3YT4oJqSAa6f4Vjs93vr6BGiRn7mXtAX3qdgYzKFxbz4Q5s8GY8sTvBRGSB"
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
