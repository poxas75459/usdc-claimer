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
    "5nc2TeVoxNW1nwXip3MNiSdvSQa4yKBECLm7Eb3n9hY7AjSpcp5VG86Fo5wBCDMkkGvh6gp1woWCmWb4cWX4T8XL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k4cefgwcwe6h22bfQTiF4V5f6biDt3fVsSA2nkJNVBrwhkbNYYD8azRh7BtruYt9Xk3k223Wgeq8vZpUozhASok",
  "key1": "5ZPqSDVbrbjeWUXkWXEHZwZpZegcGtYuGa3zzXkjadQeMx5rebLAJK77wTUquWXsvpCt6MNWWePmKFFYwitLPyWc",
  "key2": "ZgXaG3aT4PZJe7dz9LKAiVr4WgTW26iWK8Rupaqp458acs2mEPk369w8eUWWQdE7kFWGuKaFq55TZxAm9maeMEA",
  "key3": "3uF16tWxYbtxej6qMrVUCEY7kPCM77PeoUzRJgoJAHthmS1yUUfkAwCUiduoP3Gf3rEFojVnAbCUXXdfxYdzSGJT",
  "key4": "2CF5XEXQpBnF8gAv8Jw3rLrNceHShNKYcMoFxcV41f8vk6dv3zQvQ7QWjwX9kUWvpBRmWbey1b4RWDoGYZMFCGta",
  "key5": "ndjqDif2hY4gDWp4ExbTNx5h4b1CEzcidEBtFaeFxr5XfkMRQfpKS8LQpL7YkYJj4SsXL4Hf2W9yDdFmF28t68r",
  "key6": "3UmLLiogVQu1SnQvd6c64BLD1ym8G7YjuZnjf98iYu8WJCzSbUZnmxP1kx75bDLzKTCq4NzHfawgUr6dNfXQMJpf",
  "key7": "3deftKNpxUikfroY3Qzr1vSFcQAHCi3hHG1syseBvpFmdUDw99jaAWGesg7KFcELfSCZqe4JqMro2qK43XvbEAQa",
  "key8": "5xaG1aQqPbkc8JnkZwtXKu9J9LqXAuD8UWRYLYD58iNRSetmgdxcedNY15434eJmJ7aPZ5k9ss1Kduj6LyX45q6x",
  "key9": "5kiHxqqez27LW5U34ghccNz5kwcRA9N6mhzsZsuE5cZ1jY5UsxkYr2hmCuXNe48Dhm632Pzgo16d848GhnHZa4gK",
  "key10": "5kfj9tPDWADXRHQYr2LZ1zLLNKhL26foRuURZ1AwkihEbTznN4vnoLq2HwjyZSmAghGkZRnnNyRZuSvaD5CnaVwZ",
  "key11": "3B2U1qhqSVhh169i8pYtLK6abNX2xLkUNb3FzYetKtbB1ur4jGzHDULCxBXQAoVcYc8ABcEMTaXjp6jp74SGRtrV",
  "key12": "3eCvGcU6ecvQV1Zu2aZ6LUoDYeZqkEbvTe7MponumZ7GV5RjFW6hJiUZ7NgA1pmyR4MFbJ32kjpD2sineFo4r1XN",
  "key13": "2X1xjTFpu2eLERg7MCc8u4zGakuWwRCFpyyZCgWjEonijwuxtp8LNHNGzdkgEicT74cn4G65u2Gup788SzQPZjdP",
  "key14": "4vyvCZpjgtMzVzHZb69ZGdw8BP9QREqqoLoSUsDr5JPS2tz7rtFnsQWE2jqhurTLaBwjeT3bTE4ENu8Vio2hsgj5",
  "key15": "46jnTt1CkA5HZjghFvwLoe9dmfmAYZL8CV1LZQ6MFVyGYYKNR2cRZ6V16qtC3RE4xiFk6NokebXPUXr8JWM76tWu",
  "key16": "4dnUoqv6wy7Cyu4oPUrM1ZF71dFAeTV3R1mV5yG4uf9CWfPkX5AMz4Zj5PyrnWk5bjh3di9gfsUgDWngDdxg9BHb",
  "key17": "s9WmZ6vVtYTjFPK4nuSbJXkqfcgKifG3esS8VKcp11etsMHTKkxDNkysKD45PABLh5X4vjQFWASKCsdFBCq6Lp8",
  "key18": "3pKrZ1JtHNm5csCh7hSzXZbJuaaMzWYLccEmBuGkwdM8an3kU8kJR2wCjVWyXgZxqcqkEiZ9pyCB91CiQhWYX97H",
  "key19": "2chAj3DUkaT5njPg6ErrbCyDXBiJbgJErZ2g44c1uuNYnAGGyNWJgzhvF4Yw4JXVCFmYnYKgVWdecgtct2hc2k6e",
  "key20": "23iXcYmLchNFRVWJk9YhntzWdJGaAg9rja9D5UJGjqQrP91gCVMvsUoaTnmy2VJQ4MZyZ9SSoCNvtdkuzp2RsgDv",
  "key21": "59PsYhiM8Y4gg7GbUQoYhkGSuGWiNuTuFjc6U1BRji8H9awv4VD3jKSnqUwxVdnw1L6LcCcqPAUBnrYUEGNBNkbT",
  "key22": "C7Q6tdQkAyUANqS5jfXDjuxscissotuA2XaTfUW2q7eZ85rchgwM2Pc12zyJ2zwSyp8gtUFoCu4CdAL8G5RvNZf",
  "key23": "2WrciGcgoUkGKD9tECJhTTsPkhNDw9dAzZNU9n5DvefmYfyVQtU3LXaEjxhzyeFS8w9nCffMNjSZhN8w1k8J5gAF",
  "key24": "4WoZA3KHQ5oZrFr75RsLTKKezxFWWZi6jkfgXV5wTN3LtQfXQXdMoqb5UJGYCSrpfmrbiskGTXXKNEzeWMC6ZbkM",
  "key25": "64NxRQuoeSbJ7MG96WS8Kjcdj9B8jNzifuhH1kPmxr7ug1bDBvrQoK7gZscUhP5tRmfpo2cPw68PiUu58HEErZFA",
  "key26": "4Bo3NRGY6kzJFzoQBJqhjbEoBm6ieoaGu5xrQQHegoj23E826RK9oYRwmMzQK4ftHprSEMyazScKrMhLoAix6TLY",
  "key27": "vUAM6UkJyP6yWyYQQkXWW9UAYKYow4GDVXxXqCSqbTebdX4pSsmh9YPRJc3P44TxtJEguT18Md9MsWS8YCCws5w",
  "key28": "5ihZkfqYK3faEYpW5Kt1p6ZbUhCS3VsdgyUzvqMZVcwkUiEdGmuqsERSU8kv3Af9UbyP1j4LczLT9HHRH2YeNLja",
  "key29": "gAfpvtB4EtHiqoFqn8Hp1mC47BMfnS2YrF4yRnBcqHefa4jvTigoL37PKJ3t8qZR5kCcWFxMgBNjyAt9UPNu95m"
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
