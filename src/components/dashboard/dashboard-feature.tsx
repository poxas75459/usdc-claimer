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
    "5nVQVNXkXeM31K8Yu7Dd6fS3chsArvuZmdzhdcZVueCnSAXKnVLGf4DcWDrbq1MtiiGRgABRB6oSoBJbYhxEKSXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gyYc3zr8XA7QWe9RCMMG2FChtzgK9gpBecPMGUeuzDf5TAPC7PuULu9SQuKrfqUQF9nkJBVk7KWEbRPDbGHNLsx",
  "key1": "5JCCG8rZ6YeoQbHmVoJmHcDsTP5qxrC6WUL8VPFwmg9nThxfK2pJcP7zvZrKaR8A4SgqEsL8Tb5NY755XmownvTr",
  "key2": "2bBpmJynSpNohso15f3vGojFP9suCV7du9KnNByf7ADZ2fs885tv3dmc9Ktutwd1djNNEAVzZAWwkT4AfGikA8ez",
  "key3": "3FDAKKsnx8kucge3bPdw2Gext44nasy6hLkPfZVrUY7npKirbFw6XEV95Hke155ZhUWg96v9jsVXDpg3gymL93Rz",
  "key4": "5MXeCBFa8oMUo8ChMZFw7bHVt8rSsr4tPn3ZKeDkdizzaZ5srXsfbGxvAyzLQnfonNvoG4RFLMPhW3mygJLKoQqA",
  "key5": "3L8xCigeGKZgBrSmGjBgW6iFLxeuhw5ZwVitq2ko256fgYphTgagKqkr5V2Tv1X1sjKwYiJTqsdiNJcpkouXUrmJ",
  "key6": "3gXnBSCszHVQb8F9AygsTJSAnWMx4jzSvpaHKg49awxDK6so9rDY86s9eyzhZeCpHbf5EcY5Ea2bj657bh8hRDm2",
  "key7": "MGVyQeMUrRT2EkjjpBJN4mUDezwbDnANVWD1zNZQK2koiwUBbvy5kZEMPreH7xJ2fDUDpJp3FewffBzyLUzzNY5",
  "key8": "jrdHN1QabMUMsCHt5QsRyjnAvv2v6fRiYvs5WxdWkqRWe1b9pRoyLJdDyHdEmbTk6s6wHC53YxXHaptD9pZPtxQ",
  "key9": "2RxHrQiJ4qZCz3hC7GHMEhatu7wJmsmQMVdiVCiyMVrf3euv6vScQ1UQnhZU7CvNwDp6Wug7Mj9iAuSNaFS15Gau",
  "key10": "3dNJcgVccoSm1yPcPJtuVvypS9si9uMx9TZtowGZHaRrMM9xADLac42EPWJGhXPAbeNAPWf4fNhwXGPuwfeskYHz",
  "key11": "48Bc8DoJrECX8p4ggkoBrQ8o1h2NMZZBJyjBPpHsAwnXrKuYJAKYYLLbX8geLnpgJeFNhW8B9EqguZRCwz6VQhXb",
  "key12": "5nC2vyFyNbZxiY53MLhb1TNaJTAyYEtjW2DxT8BbLNkc78AgKpfZXZ66AzHUcQTnFNftJj2oHnmRmkDBLr37P9zA",
  "key13": "jw5PLHheyCEL7o6XxvsngPsPW9qbr4XgiPumfEfoZTFqRDWQjBUf9VBUUFqcuCLG1Y7LpYVixQQLHYuCRYrLpVq",
  "key14": "dKwGXWQ87XxkUfsEVeSeePuKYwTD9JZypUWTkBeAj1VLJNb9vBKQzzcXhJPRHNnfLypVKrjuarskoRwmNfoC6q9",
  "key15": "4Y11acUAnYuWoEKdSvZ8R9MbmhhqqWJTLTErMwCUGu6YkpbS5hBKMT8ZYpQ5sK7iEVAAB16kN6tGPTxWm8CbYB9R",
  "key16": "2ocqhoUSpcr3LoD5fdXaNiUPbf8WVGyiVxqMvBnHq6mA7wjgTBgRV74zHbXxpaan4r91yzzMMMJ3PqBH6Sd4AF38",
  "key17": "3Ywx5E2G46iJo74xtNpWWEebvyDJ5UV4LSY1n84uJQSkBJt3maWJzsVASDcSWdg4Axt1J7of6vh9z8mLebA89Dvo",
  "key18": "Kg6aPsrs8FJJMVH1ewevFdsKhN6cKHpXoT4Vq5tGGoP75phiWfJtqWhxiM4LA1mxUb9PKhU8AaEkEDX1kDKie7V",
  "key19": "61fRMoMxpe4sxgW3Kj36vMLbwaRLQvGHiERFp7gzEazRfEtqCYKKYowdv4z7vs7tj5dBLt3HxrLKMTTVhgLNgG8n",
  "key20": "2CXaFZMUaYDq2f9utxSVnk9hLyKRcg2QN6sE78cRrUNcx4dmwzccsMFSCjNKFXQqRjDiWKNMgwctBcYcvK95maRi",
  "key21": "2CxYGn8wudAjH4Ba7vTsASNLKvhQBymUSfa2yo22AsXnfLKKeMrMAQASWQ4L3RQUPfkwaoLy5YPH49vtSvuWEthz",
  "key22": "4ifRDfdyY3tc9wpA4RjyqjCnngpiDKAMZFLhXaq9PjRY1Q5bFRPT6tVxKH6RVMt97HUC16LWG6i3aQpUbFsnHWGW",
  "key23": "2QeXg6koujs673SQJ5wbubqv75F37sW1BXcmRNks5NQncqmvjQriAoHTsvCf3Gc4qmfvEAgHfCrJLwM1JYAu7wst",
  "key24": "imFQmou22G9Uyidmcyx3WvAR7URnHUYKAZUk2sLDzdnGq1JoAtKiDuLTiUG9L7a6oA5CBKvm8rqs4rf48gMQ8CD",
  "key25": "3GUAuC4kp1JVXeBmWRMvYXTsTZU6tinzrdguGjDGcCyKzYws2N8W1C1b8DP6bNcRF1Bb5BBnrwQvZTn7JaRXU6o1",
  "key26": "3WG5wMVbWyTwQ9RhdNSiCqU6Q8QswDv66brUFEgoMwMjwmm8PWZZa81Z8L8VQjQWRQyhC9eVUXCHvdTJtuP4LyMX",
  "key27": "7trQD2yZfTeLHNUEn3XQ6hakmka8MU2EYDk7vMvn6Ys9gj62JHzZJaYgJ3mv4HEXFcGSLXJ6xp2S8fPnEYq1JXP",
  "key28": "4Tr8dz3Fe8mHTh8gNncVgAVj73gYwKzq66p3c2FbUGWX1oehGuykNf6B5AbNNFVznXTH6nk4y4LMurS2G2zt8LSr",
  "key29": "2eJQB9UkGr33wDVZXy3Wh6DEqn3Scj4H5fCRyudc7AtA4jx6pebLDKm3U7RvNWg44vR4ENAEH1tfaKDopSpBSBbE",
  "key30": "4D1o4PARt6GZfPPMt3Z19tTNvtcH2Azcz6WeCg6YT3FQDoekNJb9TymarJ8ECxs9ZtSFDDgK8Y74mpyyZotxw4Wq",
  "key31": "3WXgawzBLDBoCsdsX4SX6JmWWA8rubbfsBy6f7xSkWjniAaKLaCh7pNTFA8PNyd7k7WiMDJG5gRTG1NdonZCjouY"
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
