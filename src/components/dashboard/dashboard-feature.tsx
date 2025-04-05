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
    "DsqgxSx8m6HGg8a5MK3UyC3NWoVFkaFK2dtQPzqy2oMqyYMgdbiyXXciBD4eDuUdBa1z5wjNBRk7dG2pPR5CjKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xiyZ9wq4Ydf3CJjf8jRjqKw4qpVAtGXrybD31fHdZzGZzBn4uu8emj1GAJ8Uu7GX3k69eYBTMju3vF4US75K3d2",
  "key1": "hmgqSC25LQdwP66ueX8nDLWD2xag8Gh893ES6R1GaV9KGM5S8bupJMawPfiNihoQhxJ2ea4VxgBgiupoCVfe4FU",
  "key2": "2bqfD5nnx6FsPyuANPgA2JdSoeFCDwQeDGRWi5o9j8AtydJzsnEcVBevfkQuUH62BiWQPiPN7J4SUDHvAVQCemTM",
  "key3": "2h5nDYHdVTgnhtryRZ6CdzpMAep1oHHJqN4oKn8crXsq1Yc5qoSrLJYmewos7JL8ASUTZdiXN4RbNGu966mWrX1R",
  "key4": "4V3AN6sQ1sBt8331mUALpnwgfz8rehNbQQyUbY4NcjxCaLenrjhUdN38CgJhuiXpqXqdo83f5eoJpDwf3NjZJeEN",
  "key5": "3pSVzbLwmPEWs6Q4m5GhNT7JFymNweaHHrQ4KzABQrvHaNNLoKWxXpMzon7E6APByVsRC5BbTDUFJpVyHAvMf2Hg",
  "key6": "5ZK6V65hVbSgFaHmiHUmzMNYCqo7Yc8uBBeuAguLrRfvGuCPJQjWUqyVvtaRoGvsh7scKwq6PswDPPg19gCGCZB4",
  "key7": "24AQgzwfHUn1TZsADHshDqhYQKPFowq6eqbC9URseMfv2rQPjabWoV8VV7jn8GqBvGUKVpvkZHQjfQ8pKqBg8N4Q",
  "key8": "hpBvG47T7ueEXcX6MR8rczoNkYUjeb6AepBbwTUhUnTLiT2MoBj4pLdxrJibwnwXNDKGgsEZQCH1vjaA7n8rWND",
  "key9": "5KrFci1xFYnpv9z6AL92mQkJGkYnLoJXtWU9zgQigxmyBhhBE3fGs9PhYyHLuqbQAmVs14A4LAKfmvYUZWkGFsuY",
  "key10": "4sduWU8yCFt7awv8qzqoz8q6DZuifBrmJgJERMjNJVqmTtYYaKLWBKkja2b11qvGSL7dnpRcrBjpoH1JkMHhHCZV",
  "key11": "f9iPkYZh4e3xV7dkwuwFsnXn4CWgndLGRABeqRZgRtfbVtLSaQfLfExVM3J4dx2ucDRByM7Q69VhVEjms4WPZbs",
  "key12": "3pJWeBJNLroHgj16Kcnejr4vWhw6i5T2tmXiVHB7PB2ZcfwUde1qW7j1bXKAJHmZW2aRKWrpr6GnX3c6ddaHLbVG",
  "key13": "ZLRVkSSUAKgKE63gsWqP7SiMw1ouQATaMMnqxyhAx4SMzRsRrFbH2eUjrChLVmcVVmdbkttxvTs2affdUZmPZWi",
  "key14": "4Qh5v3zrVcgiu65xbHWerwFnMeP517C96CmagEA2CJaitBSd4fbQsDE2TUtKkyrBhPh3CkrSkQD5WZLu282TYfux",
  "key15": "3xLbodg1qAx1ezBdRX1DzWjzS5RxsVRjaRXT8cr1yGtbVz1GdPGSry3JkcmxHgV1bNHZU9kJegBnarZs47zb5eau",
  "key16": "66D4SGreEFCYtPouP5UTNAQYP1jFaYDwor1X5VKvDKQhKCxxiZFc4btDXGLnss9Nt854FPWqRZrAwRRrbhC86JXZ",
  "key17": "3EQBVEcMBzaJNE9CfVie8jB4E5kqVfsTBrGV2NbV7utL6h1vMZvxFXnLcr6QvwsjqzcjXyK48ZtSHMykB5XQsXTZ",
  "key18": "65oryt4fGmrWFrHPMztMWQmwQihFZc7gShLm6tzFecKiuAFk2FmdNN6tFiK4q3R8u6uYn2qtiZPnmbM2iEymenn7",
  "key19": "5xw7HAHPHqiGwDne7MmFpAvf9AdeRZNT9aKiJcqMLFrdzhSutMauZE4v3DyABdV5mEeHXkRepeHnM349R7HXJeH6",
  "key20": "9cb8rwgY3Qw25nLQRrhLAtBmzZi7Fas8rRBatAe2nZUSZfDKbUcQio9UrJDnMWUkZxZW3ymfJCxuNRCHawibCET",
  "key21": "2CWwtLH7Q3knKg99LvdfrYUKDJTnT8jNj62Aw5BN8USiZw9zkCVgD7x4vuuUqRnCeeDtzDzgBXMUPk1TiDBqUBtR",
  "key22": "2AYkmwhjbEo1ptsY6RXa4eKwopeQhPFakQ8RQrDXnXvJRaxgYKmqYP33bvfAQHkJ1NeuZwPyKHKGWNYcNW2StdxR",
  "key23": "4TU4BnYLX96iiVb3hfbB1nhsTofCkwrbBe8ibLJGwt6j38p84BdU6anpfZN4UZKVSWMBa3Y1GCCDJDHWLJXBU4DG",
  "key24": "66kxLC47N46vZdG7NAnhAG8kwPpY3G6Lr1KrcSt59a7E5YJSyHpsk76Q2vZYY47MbHMQWUpsui2xbF7J5e5hmj6e",
  "key25": "3qZoKTGRVbwjdGJsBNPXtdKJ6n4aabj8vXBGzrZxNHq5SnYrsWw7bwyQteWiHA5p2N9LnsEqqdWk4meUn9U7B49w",
  "key26": "T6YvKrkDZa7Sqi9B54oue9C3b4vw5b4z8ErzU87GaADhUmkdi1hwgPz9SyBbWjG9tFEw9XPBrBvPvxS5jUUYnbi",
  "key27": "257XABniUdKBmw6pKoL8nCmg5b5qgxhLoN8HJvBtdq7KxrYzta7P7Z7UYKBm1E5vX3JGoohSfxCZ3jSFdp8fAwxD",
  "key28": "2Pb6CJHipLVUjctLdrSEZ7omnWAFxHT5wZ5BXb5ZCuxpRj4S4kRWCGdCChrFT8RYcHBgTT1x5fCVxBtwdtWuzaLe",
  "key29": "66fSAr9HrWEdLYrDmsTz1JKKQzxDsfqihmzsr4WAji8pVxif9ffhM9H2L9PNDgnjxGz3G9NVdk5RFq12nVEKtphu",
  "key30": "4hFmaFJ2vkMvqU5KhAa4PqUajWhCxHPefh7w7DeYBJXmVjsgagdzwsWzmuyPgLMAn78XmCgi67iHFqjuWtniZfCN",
  "key31": "5cm5ksxYbYaqNJM374AhvFwkSUwxHB95ck463d2zXUEoxyx7zec4cUvEiwTU3Qfg8UjzbGChKRMB2zcSqhPRpvHi",
  "key32": "2823jtKCHqgDB6pCBZwgwnpi9gqvHwwKfwswiJcYH2iCH245NeYRkrKWmVSJr9Xgv4Y8qRYLUUPNcKtgtKrNrVRf",
  "key33": "4pjqNkLCmNvFrxytR3fXbUbDXy6FXg4nV4sPxYZ8aRpwodckUh2eZT2A6dLhpsRNAquWawp1VXNoRXe9K9shs8vw",
  "key34": "5m6SEjvMHDNpxahJYUT6rYXaiwQHFe52iXs1C1LY6qacgo8sRU2ZM1ryFXuvmiz4eAiYe73g6v13VcCsHJwgAjou",
  "key35": "67YFdivLEsX3X2Xvf5fwsNMwkK4gEqZ9h6P3mzGHVd5HjwjzEZatVywGEQBL5yz6sfmD6YbG9bCEjUUef4rph9dY",
  "key36": "3c411eu4u929xP1iVXDyQmL1yCxGEG4xuBPuVsq6BAMs86haPraswNDSpP3fkmQQTk9d6xURRsCDwyafQNRzjjWU",
  "key37": "4CAU4xiJ59dDnBi3Kw89Y4SBjdQWwHRgjRoyUXiryi7ZGj4qsCcEiKZshgdCBnGfhaCFRdMHaMZf5s4hNBYdiBEF",
  "key38": "491g3NEXshkDD2xELsux6NF5ezk2vbGG4chc8A2CBeAnTMsmgkU6V4gcTTerj23mdh4FmYNva4etQAQFYB8NMwXJ"
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
