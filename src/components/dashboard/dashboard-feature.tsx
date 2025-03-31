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
    "41skjcVxsCqaua7gbrLX5fAZ8MKkMom8PTYKHfoTLTW8fJ1kTV5XD5WMfxxF3D34D3mKPHiBuZ13WvistFMZcubV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4euAJaXnE2vBjzbVYvppNzhC86L5FGt2aj6KSMuvc16aYpeEiV2cUhzFM6VYNsLfFgM5sLHU5eagarkzWoyVoHuS",
  "key1": "2nwyJ3nxzDKz82Wa8fe4WjuGMzveTjMc73d2iii5XF64Pqu9eNMQADxrgt8nLAuPJTkmBf5py2yrR6QyhPBt7yDu",
  "key2": "5s6qyBH662AuAizGbcSm7YTtCNUEzQaqN9jg4iDemEDdLCgUGKKPSfsES4JcmmMC1hVGpDXQPMw76RGYpn1errYx",
  "key3": "3KfoyxnUueudxhbtcxuSVtjmnngJZsVsZ1KHq8uTTArGYRM79giYUczjhFK1EjuRmvSyzjrykXT5xrfkjkuqKDkw",
  "key4": "SjMsiL4Uc9iib73HaW6b81zZPndtBaDqixYbDu2HLdL52MGf2gtkoPcpv7YNofupSdRtrFjJR8pbEz1GEgd3baF",
  "key5": "4dFMSn9uxeuQSVdynx3iZA6ksccENtGfiqj5N1csnL7Sz3qsHRZmbg1JDNtQQgzCgdQZdhPrU1NiwL3zcBTwovXB",
  "key6": "3iGRmjK7mbuPZo6fFVH7DMn6XquBWb54KDVqSNtg4vmzypzUhFBRA96BgFPkjm7xv5sHdPjiFzrM7bnuUMtRpL7o",
  "key7": "2Dc3wTwaCeXcsSGdLjEHFHFG3TVFGVaYh5fzffUw5r1xDqUgjqyF82gx5HrRMBF8XgD6xptrXySGRVzMZ1NyHzbv",
  "key8": "MNBqFbyuKVmSeyGp1pUTfPYZnqLumXhpMEBohkTmtCPB1EscgXj2CZUTF4paNCvMpaTDvtLmVsRjTzpJuW2azq6",
  "key9": "352Efs4GPueEkFrtyFFjpD2jweuYno2zoPs9XwV3JzvqHzjmp3c7xJN3ReQrkEXPFpwn7C1YYP82qRuS9niCRFmj",
  "key10": "2ihtQNLaqcGQhG6xmsbQEsD9pfsVKMpuLE8J8jrxMHtjEbJ44wDRSiWLQ1Ny7LznrkSmwoAkXnznJsJ3xViEFrkg",
  "key11": "4UW4mqmS5GR9W1D1TJn845Kpm7SWdE7iwhirfPCQtFzKFzkhjyt7ReJCKNpzh458x63VfNqRD1bCoujA7Y78o2pG",
  "key12": "65inqqswnzoSUXN5Vs4xWBNand6S8MXV23tCVsokpr2GhyH6bAM3KYteBJqqvw59hpK4MKshRqAoAqDY3A8HtV9z",
  "key13": "3PHUdgshNGQca4sQ85V5y7ZqSDX3PNByZBbBf5zTeSu2g4fwYkcY3ivY5dHnwznPVSYU3NYnW4QSP8u6V7ajZgCu",
  "key14": "47VN7J9KnUVz1vpHskdx3aAejU9cebe9f2PgWWq6jNMJe2Hk6i2QLu5xW5RtJf4EyTJqTB6baDqra5vHupCicP52",
  "key15": "2QLKvGMBamTYv1V9UZzBdm6jto6T9d8QoiVME4SZD3GTtLdrEdGKiyQvvpqyKnmQWkwqbKGVwAdbKqbt5opHMMEK",
  "key16": "5dKChBqgaixL7CCoesKFQnGnBvPHn5HTLKkCpxmPG7wKYc7PMYoL4DAh622Lcghjya4XLLb1pYPuc5nZ2PHZ5uzL",
  "key17": "2J6K9XSxgvGGN83LqQsUYaULkGR4apT6ynBK5ahYJDo2g6FDC6NJCcSdfZhhNabHvEuFyPs7q2jkvFE2Vohbe3q",
  "key18": "2r453qBceG6TJRMUpN6W7JwFC6Fx2KYnpdAse6HpyfRx2pyyp1Y3kRsdTE2c6e4f8CQ9xvq8yv6zex5kDj7CsfbE",
  "key19": "53WYviFxb7TGoGoSWN3h1W3jnXs2zL4LzeE2ea2JVnHnhxMb4F1Z2UNLM86Y5LLAxCyNc9A7yxG29qr6GXUom8ML",
  "key20": "2NYonfDjv2Z3R4QJW22ZcBjLLeT8k9NSRbNNkQ1aGeTqXPdszQAxKoXJGskSstAfrqgigDZ1t2TVd9LxvEq2492Z",
  "key21": "3x1wSeJ7SZHM1pWvm8Tw4BBX8Pq4pgiwaEYBREiKr3yk2Xrqxho3PNLvvsujFtEBpTZaywogHW4SciRxUxb9mh2M",
  "key22": "2JNy9xVA31gkyrAKZQ6LvfJ5NB2bFrkv8ttoZar8scKFe1SRMVpKKSr6M5BWFW2Yp3aEyUBKvGW5LM71cyB7k5mC",
  "key23": "3qF78VpBtTyAmCUKZZkDNEvA9qomz2HT5qSKjSf46sjXPXtq9dphyWSBQAnJnudJq1JMowetrnBdD9RecnunWYas",
  "key24": "48TB7thFQ81wPax86hQnWHttMip8ELCW9RFtbG9KFHv5HstaSrfZ6kVgcXxpPpJ5SNzr3LQ7UvstA9ejiB5KfZ1q",
  "key25": "nVvxtXVRNDymwFsBkwnS5w92uzymUSv4zViKHvygKNM6wH9hvdgrQbu5oQySVsuCnHxH3MG8QL4SFAuEkWP5GSQ",
  "key26": "FarEPdeKkxSMtEhL9Qwn9AjNgFnJ17dFUMii2aeKFtnXrW2uFFgHUqfYGC8CraTcN3yZ19vsniPTQheqKWKCrrw",
  "key27": "3NkmFVZfhTRoCPmaoWVGfCqF5ZEWgwZn7topTRRzTAmdXMMx1H68i4W3XZcUKwuzFdSCmhXttNGPUo5aDtLBpZKb",
  "key28": "5GZRFfHFTxQ8UCHTQEUrtC8XNvcWukdykCdoTznULQQdPCcNREW6yocqXbA2QaQgA5Kc4KvQf5GqjbSXz9E9Ugvs",
  "key29": "3Ajsj6DqZifhCecpVdYbqWFJ1Hm4uXg5jmUFhEvtd45cHWoLDAkHbwgfZoUitySEZAcnwSGZkhddFWvRtv2RKu3a",
  "key30": "TCxRar2KsFKaCWcRJFCBdVQMwQKYoNhDW43vxcH6M4qDGjSKzgr8u1dNx12D3U3uodroH3iviLsBpAkQ6k31C1D",
  "key31": "3HHKUyUciZ1kEtn4su4Pnh76ocWCS7hK1jKcsztYDpmkF8DXwgvnGLVSA4EyJncRTtueHewc4Umj7LWqxxiQkWgE",
  "key32": "5k8fpQtSEu8Yu6NqsE7b9Eu1Hy5CXYxj76mqRxjZc7yjw99q3mMXh3CuaUqxCjLzo4TX8Dpxb48RQ2t7UDj8xrsY",
  "key33": "55S2ErwGxv28YEyQ1P39g3xsrFumCKiJfCiEyjcmvWn7yeMxUNsLLn3dZAj1D1GaDEDeEcTjBwLcYHfcj2qzwjxA",
  "key34": "3sMe95JwDsLHaqRkj7hoHu5Q8Q5SychuagaocVmbsme25zCcmY6aoWJudzMCeFBoZyyMjaVbR3S5W918MipyZP88",
  "key35": "4E3GeqcRaBMAyqmZCXGqW6o3bvjwNBeanvWFhFg2zBfksJ2F72wCsokrRtUt7SvB5zZRpR59evJtsBu65V8Fyi8p"
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
