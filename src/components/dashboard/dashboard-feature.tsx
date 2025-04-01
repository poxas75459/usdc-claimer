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
    "4ZcXgdBPA9wj1CvLfyB4w5F9dzHKWUVm3ScCrMLsX691B9zCebnXzXdpv4wcEHS9xMSmMAkdxZMmUR55PoWuuHFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "616tM2sifuXDVpSUgK12iK4AvAMHwT2HJxjM9wDuJg7CZGibsC9hocfKviuuXPPVKhixfDRNpshMkzVZqgDJFjdF",
  "key1": "3KaBQcNENBUsC45jo97MqcghcttmrXsHNnWXHZCeXnwHFc64LtGR44ZEQf37YuvevvHvhYgVN9Pyh2KXEmNy9nve",
  "key2": "zFX5pW1rGEkiS1ANGtqRB7RLhytNCMzC4GELLUwd4UXeQjf9JJESAa8AR7233bsUsFh2JTWdxqu8S6uetjXRKv1",
  "key3": "5PnTVccHkpiHKT2sbjzcjat1xY6G8HivgADZKo5YnHogaN2BZ28dCXHmn5e7xANBAYWM4YSmi4i3usGaLAjc3CtE",
  "key4": "4PaSsnU9RwKksdQ69LACAacYwsYFWVJENyNZqVQVtoCnC9zzLDmv7rVUq9GczH98ZCvyQSaaFGoHfHS6L2xqGorB",
  "key5": "2vz4uHPZR4JMfM1Hh7LYZ4QPiYzdVmjLBJS11m8doWhUGHoLTdann9eSXPjiy8nPK63kqt1kyMb7RvBbVMxyDjmR",
  "key6": "4xzeXnnhFVjUweSTZNob2JVFcBMBRkBQDBEfPNgm7pF4wqxmDubh4HZSTXdvfLMn6DAczgN8kJ477g2WCAUpNCzz",
  "key7": "5qk5KifAmbiQrX7SzcpM6kEzposQU27Y7T8fvfjfD34WK9GvgEgPBA1TEHN3fF19bwKX1MPqbKHBDJ498h4iHrgm",
  "key8": "4E4iYYqsWvSRk6i4g7gAEShiwy1uTG81dA5afDNaWthRuubn2iNfEP2SX9As7UgJfsDwrMNR3UwDiU7D2GqB6dkE",
  "key9": "63X7Ea1DECDvXhoPS5Axdx45heqjLR2ZgjRAgQdaXJXUHpDASoDMgF73FbFB2MR8g4Xd5hG7MLpoVLDYRsMABwCR",
  "key10": "2YeJ5Xh8J9eerW1qvVJjCsSPTgiPPzq6iRxneiAbmjKnausrJVynhzs37JVyDTfzKm28wAAkdiLkRYhm4kFAnQW",
  "key11": "2jAQJw41QdZcKwrSE2Hjh7siLz2TgDoReKHZns277XXubhtW2Yv348EKGcGgaMczC5cx6Yz7XjpLkMhyGMMVvMPH",
  "key12": "4eCtG4cHMEMnUB5hkaoUvMRRUYrPbSFNTZDCSNZciifRoXewGX6Ax7EWrKpPnJXbwUi2ASZN1ZFChv8sLhT7wkYK",
  "key13": "3qismD2HHb5wo4AVVZCzxro1uqUtQAbAGiKiSYzeSV9QPxVbdm8sqU7ypogK8FaH6mTfXKb2bZbe2ayhQKZotABv",
  "key14": "4gbdtGe6S7wmMSBHmnKoA7j4aR3G791vVDoenipDdcck3n3LX8LWzKYR2Qya9FL5f987vwRbGF42gnM5mXkFGTzn",
  "key15": "2vyd6nSXw1LdPcofGowakK5D7svRVhJmyJBpEd5Bkx9MFKWZreHoKb9hbaBDJF2f2mmvwAtCcfZ3QJLmMEy5PLDS",
  "key16": "JwCWUZkwUsWTQy3NnwyJ4DJgPJ6ma6SFVHvfLQXeAMkSEYRuqigc19rmTFaM1NbNT4kxrDABzBgFSCRE82oasYK",
  "key17": "4sW8DkTqsrP54Yu1Nn3ABQe1y9etcdX6panFFmpUZgQNJFPjgQdyLNY5yGkqcDazFZvQjgdz6pKF29NY3hnWdxTN",
  "key18": "4T7Xoh95P9fUf8hTLttTveWUUHseqjxiengTfTYLd8V9nU2Z88QBXag3qfy8jr8W87UUn1LawotKCRvrx5tXn3UW",
  "key19": "4XJxYvYYSWjLEzMKDjGwEqqhTvGjAizbRsLB8bkkfNJ8EJFGkc2XfJnaq3DCZ5eNDuRzbeAVBVYnHDPv3xKGSntU",
  "key20": "2UP2UqQYNEh99yYjmofqjWJeLVgmVyQxVTwj9GF3B5ZkSxxnJvwrNnoNvUWsnzjQxdMDQPCNtYkMaNChQKF8stmm",
  "key21": "wCKBiwjUe8kmvoU92VEUJSfeks7J1EexD5owmwKxbmQoAAchRz3p819zheY2Knxe6DQFUSanm8eqSTyrBZEqbYK",
  "key22": "4ryMoo6nBBqwWKfq6sG4nn6YATpbJWrjPYuXQbykXeqGLiBqBPLhJxH7JXd5cU8YmGu1HxQ3mkkeHAG8K6ZnVNMu",
  "key23": "3hsVdkZaVonoEZQ25ack5FJVmtg8oYUR7CyMHaa1B4kuBUAjuboCMsmMWCenNH9vTuWhDR3k6AnH9RvzF42uwBcR",
  "key24": "C47FhHDzejgZAzkCiqbSFXGVf4qeHGbhqPPNiKhofE4DEyADUVZpdwZVzPNfpkuLkbz86ov5AtnduncT7szddGr"
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
