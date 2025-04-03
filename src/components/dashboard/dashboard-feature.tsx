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
    "66x2NKPRumEAntJHYxQvH79619xPN3fjg4zTe72Cx41eGxKUUQMG1LCNXzyFFUdBXs3knJvDzeN5t31DNdP28D46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24GN2qW3V7wHBSRUA1Hf5vvqFhYLV4vatH2TY7HDvtQqNpXMPLoJiFp4mXpY7d3SHyfJCbbTKiDz67NzEU5wv9LB",
  "key1": "3141WuXWDeUo8yD3T48yXqCFgsMErL3cd4P1mpD68ytgQ1U1sCuRnwZXxtk6j3W5GWd5pSYyzbLGjwKoQsB4pfd6",
  "key2": "4yENHygW6sSUB7phv7sQc7KuwBVo2NSfQPomH8EYBgMAcREwU6bkdg7Qr7QpxkbvKgTqqtzwN5d2HvH7LFEona4r",
  "key3": "1VovqXCuvqV4yBu4qkEKWYQ6La6xSkeEDr7321dJbiiGKkypcxdpLCH8wg5WKwiDuBX4WWTQbbx5gp3kr6zmfyn",
  "key4": "LESpoahnidsWvzqfkxaWBMJjqkvLDtZbznXWkSQPGLq8iXJa3qL11RwtgR9zr1vBeVj4uPKAUoTQfyH4E6pEJSa",
  "key5": "5QM6rMHYy8qojR5sVXsFtAQroCQ8qk2mcG8ne4K1gVNvshjHp587ia2ggGppQrBbBraF2TKhnD5xwMKPsQ1VDr5q",
  "key6": "3VrsKXFboaKQG5DgtvLJtVxL5YzpoR6oyMaMcAkhXbhgShxy82WzxRDc69WsBxGEovX6yyuWSFvFhUpHFnZzNxpq",
  "key7": "3zrWvHzHzzai8qVX2mMJZnL5NHMSi7Jmbid4fzfzMqw9qN39Xxd81xXK4oJNGxnFf561mp42KqrbqE8eDM3UAsQa",
  "key8": "21wg3Jr5ENyx7aUQeMbX4ra1wATt3kfd8RSNXJxQzUxAYVcTnRko8UFC9vCZ3p5GTLHqcHESkuywTr61uf5aC5Jx",
  "key9": "3Xmz6HSkSMucDWk9MzMnZQ5PyFQVfUAGohuReYQuF1U7fTemjcRtELD2Z4vghGxpLwNvezYUpx6g7CQvo4FHEBM1",
  "key10": "2ar45VnctmsFR8BAUatp9SADx9RH6zvtkBUJzDp8kopiexyz7APC96wNYK1cThmnQjSXW2vpNgtn3DCa8YrpAfE4",
  "key11": "GTgh1GH4qCuRCAV75YbrvhMrbpSrU1GS2iEFChjFAxAzS1WbXSGWbP4r9UHtKCHu2dBAB9V575MoFBj9Sq7yyHE",
  "key12": "3C8713H9wAGWKUyjo4P7cFXP8rhkQb8R39DGrcGPMPttYBEuPqANscueTeHCSCfFPUtKL9SEsri56pggbC1woHJv",
  "key13": "3uisYg6kHk5X7Z5VycjqFBc9UCYywQjqXrqtxwNa1gtkBYtWzzUKomcY2GVCZari36YWn6wpyj67pvSeH1cThiwH",
  "key14": "2LbwaoT2fwd7y9BVkkHjppyunPoJw63XHnyQnuzQkArZykyNaAh4vkV97WDR2SPY4kZutY8QB9Aq45fSX9rQ4ix8",
  "key15": "2t5D87Nf7qRuTExSxMA3M3FUWragMUf63zBknh65QC8Wbcm3mhxBsQBrMKFcwhwZa2kFj93wCye82Z4WRUjEz92W",
  "key16": "gvFqHmSY5v7Yfzk5PuAvdoPY8WVfbnhMykm3Ra36zaPMjQ4CBp1NW1Hh2J9o3VmrRWWz1SSNMrRqJ7Uqc2brDZW",
  "key17": "3ogETRjw8C7oQeudXJNdJAjsdw3SUKfNnbf1Z7fHtyGap1RCw9pSZJfgvuyKYzQaLihDDEcgKLsoJwwELY4rKseQ",
  "key18": "5mpZNvkzpg627iLrnpbno1eBeZYW4aUvbLoxiKnghbNfhMyGFi171UtZ1z5mgk1q7WBjLxk8iQJs74roeFHJ964w",
  "key19": "3fPYnJrdYgF85QtfDAwrYPDaNZf9LGHuBfvqE2anHLyTxbpRmEUUus6PA8YmJu38D5gGye9oPJ8GEzdPyD2swcKQ",
  "key20": "5LUoLt53PBrMLPCQBpXK1CRwoXkMKwAKPvZKQwMA6q87WTJn3deBgi7SBAgMbHvd5wbZkvbsbMFj64SXK5VT8X5u",
  "key21": "65uN1dyuWX27qspQauB13h86sYtXXco6zdfrKNdMjR5yem5j18i2pQhsvZVQaW8kwV9AMjTnmnW7QiBKJWv2wi4V",
  "key22": "52WL1CHhPmr9njYnnKtiooxz5ymv8nMbieCkcgcH5kCwzvwuDYM8k7mQ5zD5E73bJoGaRXkufAxDoSHLeFRPab7k",
  "key23": "UZoKahqKrPVRYpNBSrbKRV4pZTHos1HEu3EjurmUMGDfVWVb7Zt1nkEZTG7mHJeZfzfRwE6tv8MobK1wmM4dZU5",
  "key24": "2Ba6mEi1zBUkDhrgXFVsVBDaLhXSra4NejVSzUotiwokGYsxdyy5hczb4A9QQibXSyx2XzJBJ6GUPc6GJ3o1A2B1",
  "key25": "5E7ZZuUyiasUEw5hHjweaPVpYuKLAukWsQq3JKiWNtjGrapK2zm6fwDzDocA5SxDgtrxvLH4dP1eCUDcpg2ic665",
  "key26": "2VheqZaopbJgKqFvQ79DVfyjRb6rLDXqo2K6HveKce94JiSAgCPa6ZFfMSEZRAH1eGPAuaJW3WHunbeLu9FvDSnW",
  "key27": "64oesfwnFShuVozjvpz6hFtCgQtPhPH97hbXRyNKt3Yn8cXMk2dsooQq6mb9BvnP3usUukRishfHK1NXKEKQ3E5S",
  "key28": "4dvzJaWZ1CAnTG3vnxkcjdVeW85dSwVGSKPpsXcVWzZjenSQQBnHLuhEoWw3DDd2sDy3gDk7CtSsgNn7hVrwvPS",
  "key29": "51rPtz87YDpoAitqeWcuMox5hV7yNBN8TdXL9P5yEiXiukJBi3pRRwgDJKyDajmDs7QxWm3UB3ub8kzPtrq6CHCw"
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
