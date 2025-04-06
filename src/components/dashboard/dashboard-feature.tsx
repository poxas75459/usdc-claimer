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
    "4wi4jmZw5Dssof4hHheoTE2Jkpibh8SFUfigNUehnZW21gqhdpwfkLMdkZtPUQRG2obCB81MHAJUqo5cEdFPi5Ky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xe1TxhZhGvFsr7XDWpuBCtCaKrLgit1JrULr3TPKhsMzJp5ubqbtMsE3kJZyHcTxFhDxVTbXhWPyzdK7fFBR55B",
  "key1": "2DtX7fXsu56XVNDkBkDmWTS2xDSMbqSZ2vGCvcRuKGRASNq7MtsRWhQmjjBEyoRkD823hnWGfsWSGjT8MU1ZZb1K",
  "key2": "3R4yhu22urExV8NKWwB5MnoU13dgpnhqpEjwkzDG4FRywbdkXi8SvearXyU8NxajbHLwYXy6Bf19obEKfNxeed2P",
  "key3": "ZnQHgbuEQjtaJZiGdvdEtSQspFFwjoQ2GdhGZFkVSLQKVDBPudvr2KJcD1iFYUB9acEsQCmdnevuvcejRwUsMCj",
  "key4": "3BiuGUgtqF3qQCNEbr2h3pmhU9sEDtB3HkkUZ2V5jVVZeeEG19vNYhfNuBTVRhWFoixL9DCq1cUjh1ejNTH28hPs",
  "key5": "5Z2Lkq3WSCwSRDrP2TcGxM5beAkdovSTb9jjdnzjXupUqXwZSeMzXavCUwxkRmgaD8FwwEgoX8VqnYQtRQDTC46j",
  "key6": "2dbujsDJ6A8MvD7J1NP7Yu9Vwuo9h1WXWZwPQiZovX72TjLqV7Mt5xWMAMQtQkfvDg5LVRr21XH2UjiFG21ZquxJ",
  "key7": "4qdL1ZwmiVkxEUGVvz1tiUx6VALJrd2vMCgS1etErrPx1PCnPPYHDLyhpyC6nn4Uw7AzKzRhdXQ3BBipHMnpZVbE",
  "key8": "2W3jsem75GXM1WdLXbAABDMJZGydMFW8gwv2jazgA3ppd2hCRNDrKisXCC26wvSEheVNmPUUdHyT2ZNvvod78hC2",
  "key9": "kUKZjmZXce9L1QhjHaWixLyv6dC3V8jSFzrnUfZ2LMR2bqAWN5ubDj9LvLLLXfLqrpVuZnJJeZhvD3SpoVc4BNV",
  "key10": "3Q3KDdKrEWx2w6mwJRccrHoWvpewoJDibxX3aWkUsbHXZ4nhPCrujzVeGxaqxYfKMqqARGJbNNzhv9gA2wJJRobM",
  "key11": "3g6PKU9hhphgzeRDD1g8dx5M5ryDnsuJM5bax6RLafWxjtNFxj1CKbfqwTXwyFvHGCwNnMoJ47yhi8U8Ay6ZMRbJ",
  "key12": "4tFdXznn5K5m1UkFNJnKst2FUbJpbmmYRF5geoFDynoNRp87ayQQWBLR11qBmZcENhjcMB5dyYhfdZtazehxABTz",
  "key13": "1sG9EPDAqRntkxNQvy5MXvNhoiifdfD3H3c5trR6k3eT93E1imTnRLbCLFnmX517xTQ8SWLwUMjirqVZMv3TqHN",
  "key14": "4So635pWZbmMBHGmbnGbr1BBCqgLTwpqPynwsFi4zY7SBknYsE5EvZmxg9gNAmPAoxYoXv138d6RFjzhGJS51m5d",
  "key15": "pbrNFy7zSB6qLC4m2cKUriiHkv3j1jxNRLhgezWcKZGPbsSReuZZMyR9utzLsjePfLk742rziYPegGqvwVHbvPV",
  "key16": "2zihG8XqCj8UpLSqx46ykbHCiUBRjuwwqTYHGXiK1wbiARfr1HdSkkwry7JzpSYq9eNaBRPTnEV7YDKdkBpKPBLv",
  "key17": "48ijrHNgSekTBt5ngJQbEdpky2ux23VAQjSjmMcbFDBnhDNhrMQDif4UZLA2hbuD4Rjtb8CAJqnCuWMuoeaYbqQN",
  "key18": "4vcUMdRYBhhfcPzDoWH8XnVnEVXiBoHD86f4CHd1mgvaMq8qycnwAMUbbRHAXC3ufHP3sQvygxnudY7yHrBQVyvX",
  "key19": "2GSm1H53BcGj4yE1wgj9EWsn6NWBi6iGSjJDHz9KskoEdYNPvPUGYLt9yvsdbFo8744Gn54mfnazTTdvcgPz7ezX",
  "key20": "3AusrMajuH9Gfh2YWujCRGFRRnyLuY6oPgynVZ1StJNoGdD8eo6KKrsQtq7rg4jZ561NZB9ZH8DRTWDnjjtTc7n",
  "key21": "UCCcuCMoDN8tZpGjKkboZkoHAUEMBv9FpHL6aXfAM4A5LL43BWCa2aP2w6LQvJSkXHwBSvu72Jpku9Japyo14vC",
  "key22": "3qCyFB3pq77v1wbniBDXjrJBQW3dD9Nk3f83ppND2aYN44EcH5jBXJXPg6uk5vKyt2r3fcEfNekLNPc6PcKnPsS4",
  "key23": "LEmyven7G4t6Hxm7oU4J7PYHMvXWyFxFT3z1cHrqGBpGhN79F5526dNJdCR2c5uh9JU79gpxFPh9EicGfej8rib",
  "key24": "5wYV1PRqWu5yzMBVi4YjYSLexxrPyjUwU3dahbvhtYhkMQaqC58RL65xmbpAU81QRrX8kHWidGd97UVEvc8tX3cZ",
  "key25": "3886RRKQPghUfajqhQUNpHphe4EPsXL2nRnyb1vDAMw1brGToibmn75EDkatQcxDgGSPsKpBiGGMoAmiFhgGD7QB",
  "key26": "5bqF7dDUqipmd5ZsKddBvrrkSv49en4j9UPbDr7ocCXyzLZgiM55XikFJ6z5PE9Kv8qh9PLdT7d969jbS2KtJgDY"
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
