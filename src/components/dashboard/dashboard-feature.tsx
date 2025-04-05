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
    "5JYQe5tWhmi7yLBiZG55EptNAsV4J6iJUNCVhBJ371XrLYqAJFuD2Gsuuus5bBZeLS1DZ7LJ5U48d5nSFNLoZLPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "frBBPy4AJ4o6H9qfLN2PQc2UowXC5opQ9ZyMDcgwJ3jur3qdfyUnahPYg1w3M3Wi7hBnm23N7anRspAwWV1h1L2",
  "key1": "4kFeAuW1NsX4yctpL6bZmds7snt2fFLWkB43FGNnq2ysLuTpHpiwMNk4WGx12tWjDpCB6jJYmi45jbTc6wtSATAZ",
  "key2": "48KrKwyEEKf6mVnu2hjdL5UUuEBeNH8XGMWGgUrnjQdanEuUeduBhjtg3DKuUqAGmpVzfqdRfiS8yfBLvXw5pUgX",
  "key3": "34fT99rVGUCS53e1ogVZRZKads8ctV2ZJ84Zg4GjrPQEFMnC4yun3BGaHfqaxHF7vU6svP5oUj2LWdnHUhGAUbzY",
  "key4": "YFTWGmm18mJ751F3D1Q3KwmRb1tw5YDeuwWcRfkjYcEWD5TH8byadj4U615mEMeZaLhEisVbxKitnqRkrrhGbXi",
  "key5": "5bWpKhfp6A3YDuWkq7LnygrfTD4AmN5RpiAMhcoqQHytEQx3BVSKKJ7Pz6cjqfm2yUmeyjVvQTuFQ14f2YCFZPc3",
  "key6": "3hHKxtEtpgHgQuxcHXxr5T14zu7Y8UjTkhFfSYx8GnegzHpLqx2uydtNUHu68vr4ehy8qCe1iL3iyo325GZ7H8xX",
  "key7": "4KYpx5HhnDrbHjNjEwGtDaNC1iD1uGYa4ThB4L9htbZwEHKgsz6aYQJVX8rjMJunygsCjeV3m7LKjaa9QR5gkYQc",
  "key8": "48VxiGf2KRwiYwv21tt1bBDX9Bnap78VkWtP6nLDXdPdVVNcAneTH6darQ6LwUJFHn5oCYMQPiAz6Uibnpns38br",
  "key9": "pfrQXpRxtpWkb6EMTMpEnPrh2N12X5nfXL4VVZwZXvEK5tTJafiPU2rPhNKTxC3oMtsjHqJHJjfQUjuB1ypWaHK",
  "key10": "65mHff8bYcmyMAxgaQ25oNgR7juweERHyqb8Dfv7gQyvT8J4cAzpFwd2jcqXZ58TkGE8enUXdYkm4avpatmRRpUe",
  "key11": "2QoRuyCKK3yvCT1qV1YTagnYLKUPch7oZoHCBUwKXBgvAo52CYohps1CqyomfkDZtEZdeuEW61CP6zfNrmwxXqmC",
  "key12": "zGKyzAfQ1AhL8WVnsKSmeWz1WwCYXYz6egAdTk3A6rAwMSyqKN1FwW4dSgm3rGVSZDR5f7qV2By5iDnQGnCj1zu",
  "key13": "3a3feUpeXNFqYBYiXQXGyUB7GxFj6metxQkCFN9FrTuF8sFz5dqAgLbj7SdyheshX9PAhTVx8rUVbhkUcKxGBud5",
  "key14": "4FDgocXuw2QhdTmEzxzgHPFMWQNweKxipZ7UjMNYjFKzzidWDwPesxgf7hSjtFENPYnUATirWGfki4ivPoM1a11j",
  "key15": "3xzENjhHMcW7NHnLsnYbiZB5AGZZzfjfhqeibn5Fs2YpbVFhbmLUNCYtWRBzmNj8Wt6vuWXt4j6NoZCVAwrcTTN6",
  "key16": "3GoT5cMuY2q6qRYCGF6pfju7rcG2CoxNFHHW2X9Zq1ZFKyfhDdd9ajQQFZHMKUG5jxBApeWgxyE5imD65xPtGhH7",
  "key17": "5zCVL8J4KvJ8ft7VykiEqSiHQxu77LBDHqUiaCRFsDJUJdpKzTsEbMyuNRhCqbwtSgTYAedwVBcJE5GsZ9TNVUrF",
  "key18": "MUPgn6jtTUxrud1ZsUh9CcuuTQXcbyVQHBvj3odDZWfFjpmSxmhdgeUe4CTLabUuDQRVThDNnsGZCCaRGDxngGk",
  "key19": "5JPWdkq61gJPj7dTd8b4GoRMt2RDRm9DKX5rQNTwRNJsnKFR145YRpXLNmhNKurdPCGGvCVatuQWizLoXeCcCwPu",
  "key20": "4XapFFwu4n5F7A1RiSkFNa7vL7TXqnb3wrEgrVoxV6SLsESNyonjs8QaGeRbto8DaqoQs3XKRXQGC3P5bpb6iuF8",
  "key21": "23PSaBmWJa1A2W9Hr4ndhZqxW3pEAtWinb76Vbbn8HvhWYcnawsxS1Hm1mjn9Z5adHdVkDcL6sricoCLjVFgBCn8",
  "key22": "2Uppqa8xUeFi52U82txpHEkzbU63qQF3VbBwJB3y9zTXCd57vjEePvA2Eu9tmnCwnc3RznBeq3oqXFUotQm6vy8t",
  "key23": "H6yEFUTW8diujSM1jXfXwpNj2VgvdwemE83Ty5EyK5NLRv6FgkZuL8w1bEPNNx3FEhyj4hd7fMV31NvYP6zgnJZ",
  "key24": "5LPiJmb3z5S2ihvBR7ae7KsuwKzbPYAaPKbSTDPpJwbSRNTgv3VJbeU1yXrrV4qcNnwC25HYFcM4Egk73YrSGdxk",
  "key25": "2aXe8WKGaj2dZjGfugDTSi41oaWHpJafKdjF6vy1dssMcvYtxQKfXZ8SeC9wQ62KfHjPG5LEXeYqhpJufsq6FzzJ",
  "key26": "4U723Ka2YRhMzwigqB8mWLjpLksJvYorwqEaKRN7Vg9PCy8N5mczKjhwfiFPCCZ9YXzmqBq1QAE9Ec9xCKufAjzY"
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
