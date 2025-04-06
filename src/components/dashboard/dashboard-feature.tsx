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
    "3dn76WfsTbWBJpWt8UDY6MNzMz8of1E8znyET2MfzLuMdkypSR8yHmFQ4w8brJVMB93sxoorrVQ6H9RMwF8kNf8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N8MoXK4FKzdCXUCmf3zXVpkcy5DDZt6n4FyVWkLwvNtqcNqBMNkdnq8LhuwkTfHF4RWxjtGSWfwfNwqXri8pMwt",
  "key1": "22NAbqhNJzJn1BWWnRGvnhDFkN2JZcdGs3N7T9usRXsTWEACsgRYWgVdmkXZceANc7Sv6aQaPqN4WYX3UWj8ENxs",
  "key2": "5nho8KUaJhYmfjBZvNWvK97yhr2JdKffHM9N5LYCUemLwxtvXh17ghQahwzYMipqULBFbxNo7mMVVjV5pqQM8tJh",
  "key3": "5DitvWdrLamn1FpqemCxJwRxKjHKuyaVi6K5VhEAFFGh3rqiD83Z1J8anj7xn83oHm8gL5fT23d5qFXZnzksCPMh",
  "key4": "375JyLPexJfGdMtnXHEKurQMrWfGmav9meUKXe7pneBcRPAMMbr9PgEF2vRQTCRgoGgQodgWhPumGREGQRqKvku3",
  "key5": "4V8LP93aSHuWgbkt7yzLfKo3ED2YdsAufksedvxrThFZmigaV1D1zRXAbrKZ75QaRu72naja8kr44c9wNupSc9pX",
  "key6": "33529fdvYqjQJovPZQKeQEBABmfpAAMA96SE3diDYcsRst33pNRGUJP6sq2EVYrAFsRnWbFhZ554gM6bc4veKFvG",
  "key7": "33dVH4Nfjwzp2Mk2gUWXcUj7mmQ5VJ562wUx3BqncJCPiP1moRNeBFHfTifX3RUQiw9DFA1FHDMTShgHBiG2pdVS",
  "key8": "2963PpCNy7fw6QbgFQt4BxNktbtNnGfh67rnmQ7S4KYBnaE9ND7pwP9ZPHgFCqWDxLUdhUzRB5LPnSNKBJUvY5nY",
  "key9": "37XtfburjAt5iHS36K9555GQWdHi4bzfATakjHFDR9FzNYihu7b3iz8V8t4WnzHqkaoydaLg1ZCV7jcu4UjyDLPe",
  "key10": "k7BEiX17NPgdeeyBe7Moy5171hiJAfRwYQkTKWYZmZivTspATvP1ShzAnegVnNQ7dKng3v5PiNqyaQzN6phHuYD",
  "key11": "hYrkE9SbTYSsRKtzRofoycSPSwedvtJS6CTdRUDrrJKDcDcHzkXhpd2SdVZ2jF5oAJoXuJNqpH1sBKHW9YCCLkZ",
  "key12": "2cjvTJxJSvyvJfmpxCLSUQsFFfpctVuoQhQWEXBpwriKsQPxs27uNhLqPFXjSy3rSA6NcvhNmFbaxYUiisF8WHvk",
  "key13": "u2guyna4RwJdjJTpzYtGFdPscPPbYbD4nWRttLrhBSZaujhhA2xdpWQwb8kDgyNaE8mVPBB4uZBSzmXZfgLmXiX",
  "key14": "5VocJM3g6uXB9foGhfJmVnx3caYammEJJ7fNLHUVKbVxrSc1obZgex1qhxzvDoqR3dwirdP2DbyogQBLhm53tvNE",
  "key15": "5zmaksPNkBiz9S4qd9MuNE5E7Vdo9nqfd5JVENcykF5LMBmhaKsatzm86hwg7YD6Dhh4WvP1yi1iqF6ygzFXUaCv",
  "key16": "5jfZBCwMRR4DPkUXadDV4tWDAn113ibqU1wKMPe3WbTzGJD5PuyioZuEJxrenC8usfgjovMCZtaSFa5McH9kvZCe",
  "key17": "4GWsxzgtXZHyR8V8w8HUKUnu2SE77Kv6knLFPXND5YgXcLB7Uj579mk2aXFDKqLCzR392vsM91J2t7ZoP1t7eQn1",
  "key18": "SjrNrJWq4jkvje52VuJZty3UsU4xQYDypqjtnqz8KKSpRbLCPaH8ezThHAL4wKeeGzxaQkNWY75hoYj8vhSe7wG",
  "key19": "3Ed37TrQ64qoafpcg7iYBTbksZnVBsfiEek9rq8ybgsHFos8xnyjS2h8NbviHsGedwKDxtCbr89vxGHcRKowqAvQ",
  "key20": "42cit83XkmB6TppoNSNYRwRyusFUrNaXFTH31EyKeau9NsXqLZergP2EfiFiXaD21d5PKqyrzk73csj61CDacG7S",
  "key21": "2vE6hcXaLtCzaTs4i3sTY6vnWFfDRTn3ZEkFb1VzbnTWeWtnzZPTa7P2db7UwnEWDTQDTpNEdnG9uj965kXrroKN",
  "key22": "24GBKA2NiDdfKP9iGSHiNXtmFxTGx3peW66TAqdeKpLauFjGKv7vRqkPLBjK2D5dkDb7n2gCAU7iVVaKg4qXMACX",
  "key23": "489bHmJWbBNUpFqZxVyHsw7zZ666KoPgXfymeBqCJ5BTHbPuygWoUhcpYAgmtquRSr3S3kNgxEzxgvyoCH26L8Yj",
  "key24": "5oNAGM599WKTXNo7Qx7vFX9D4TP3qNJeVMu6Zy58aqJzDgPBazmxsym79MgqyiFXSWL8xgrqm5TxfUAY19BSLFHh",
  "key25": "2iADZoYqVynEcge5LDbVjFYdouCFm9HSTEmHLULMPE5b4SMdwA7g3Tqwg8MkoYWMVkYs1ESR4ehEYUMJQ1DnqSqY",
  "key26": "27nr9kxyzQrzKRgJ1bFHkMkpvAVdNgCQgBg3jPJPY99KGDX65Df7LaqVusDociMbb7ZYgNsJ3UvpqeCtb4Vna7YC",
  "key27": "24zcZbrVdLXiaAxsEyWg3bU1zKXVQseMaJZF9BHEPq5tK5SxVR4HA6CiNqnvUVXR7VrWn6uVC3qF4tzTGgJzY3Bw",
  "key28": "RiasNhJSQ8mexWDgfGXGVepeu4F42nTS7xdf9Xs4rWiEmNDtWhqZQ82etA6ANEQEQ1bWCeTKRED5ShzaiR5MEqA",
  "key29": "ohqteDvY96WuyfpWFa4LiKZ831376JGEsAK1SvWD8YBdEuAAQ5u5T4Dc2DNHfy1cXC8vre66vSLnrbK55qM6x5o",
  "key30": "2nhLHDUSmp1pGux5xdU2roW3iBy8prGMmGwxuxwHqqcRu4rpj6kwbdN1yung9tY72ZnnYAh1Tb6wji1FBWzWQq7B",
  "key31": "6rCmCMrkTbpNyzKqmNNNW4utVDhKHKHHwYsKd8qcnhJk82RvRHgCN6xCQiPes9eibwoVaC2Z3DZ8gsbiFDrYLUy",
  "key32": "5zYDdUUMEJzMdB5ghPBBjXdzzbQgULEDCqfTcDk7AT43LXUwZCMYhGmHyxCoYqFL88R7djN6poXKYAZczr4Jfd1K",
  "key33": "5HEToXFDZfjpvEAWe9jWueEKp7q7uHtgcFV6ScCQ2uDPsC73aaK8EDjPsqgHME2bdxULknuCyfQnq4h1psKWfxyK",
  "key34": "5AuMw3NhqFNcCzfmmfu79Mdau9yJfdddmkqxVdnnZ1CWcQbqDLAYTU3eobUS4C3GXCtgTL4CgZbxVmUmxgeYLm5R"
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
