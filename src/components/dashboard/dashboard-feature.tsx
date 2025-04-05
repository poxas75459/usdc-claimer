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
    "5kKVCrHehVnpTkEquFg1vjwgdiprhzN5Hjabg5Xknx6eh2eKPFN7HNGsKEQ3Mvt9jchmQ3G5pQcWd6inXeEReNu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TgKnwARGW2F56omZ6wtnpP1BvB2gS9aroRiFbs9tbbVCxHQyNq324PP7aZTuCae4qVGT7meSkti9aKchF2kzaND",
  "key1": "4HhhwTY5gs7mxLgb4dcXYb5E6qPzZKBi4gRNcr29A8VNGGTFBRAociXSwmViecNkPDQ1vrAAhFb1MLmsfQNmyD7M",
  "key2": "AGJpb54raRxfWcHaDoS6qZwJ1nxyUS4Rg4VcZv1BUdrs7eH4gCFDMWbSSpFrfbx4gDBGWZAUYBneoUEigANUYgc",
  "key3": "Dyb77iL9LvFnmKXEbeXh3A4adG6tHztU7QFx9DhtjPsmsgp8U6jri1wWRqX41aFCHRgb1Nyvodry4yV37bvNCWW",
  "key4": "tfXwJBhzrz45DPPtJnPMaRg1pkvpWgGG3L8JXLb5a7kDXUyKpMx8wArAxM9Zp7o9mpZmvdV7JCwn3RShG6V7vqH",
  "key5": "2sqeVYDxJdNmns7TVPYJApvRKNEBee1Dmu3adCrFXLMCZJhtVyKjQsRiYVJS1bH1pfHQxgBM7uXcCuZVBHCsDXvH",
  "key6": "5RUQ5S8pTvoRNWG4NBGzeU2qrBgWB5JgodztnLR2WHfiRmuHCV7oczJgw63SU5xE9SEijP5aS5CXVN8pfn4mTG2b",
  "key7": "2ont7ZaW3oyE1G4BntXqnFhErwBLvoBBFCYHb29ihW8gAYnyRPhgKNzEberXLhw7U2nbVb4QEwKRTcawTaRj2T1j",
  "key8": "f2Mtt7BaZ8AvCobjboNSVd5VniCgdaNvtaoX7kmY2YccyagihhmBPGfofxNMynZ8kb8vmEeewqZhgbBvmLdomxw",
  "key9": "48U5UaNqe4uL8772fzUMnqKYwYthfk9Urwts3DbMtCmnDzTVvqk2L2uJ7CT5z322BrTXCXgySLtZvSBt2qTAvJWN",
  "key10": "5E72QnzSavtoarBgLTjX9eTBUPsqfxtKZogULEFMwSrWEZa7qB451ifzNtekGVUuiDh81tHo83nXCk3XoKwgmRWy",
  "key11": "26FGAZjX18Atghev793ktra2yGkdsbMBwnjMJkephZrSQpNfGatRyGcJoShQvQzvcGpjbNuzotvRcbsQsiHU7PMu",
  "key12": "fqAZkJx6WHMeCytFMLnyTMcAbfY5KxmNYRdPBYzUeGVefv3f9z69LPkvaMWAaZms6GmpZ8Mk212TzbMB98KB4VC",
  "key13": "5fw8obwzZiYyMNyH6CTBpM6esV2iPi3VM17bioukWAajA1fRhotTJTzsB8UJ1ag4nCA7Qf1hBvmMQ8kzoW5b7Ria",
  "key14": "4FSy4VSQDMk9HAEWB35KshdCgEfdTVddPNAbvfZxD3fJkUK3EgjdpGEQbvqNrxdxh69NgYpGsrZkwpoqz64zYPdm",
  "key15": "4vHazHSXQugr5GaqqftPYSJw1rUTaAA8qe5ba2WXWATg2NZhhtKQquPXVFByC47QSbfzMqUTDediT7MB68yBzUpq",
  "key16": "24xA9kKxpqCf88yYEAZJueytuRqk8qtDhTQQWLt98MuBDknRu8qaKDLSZbDVkcNU4888xhguk1HF7uwSXbGvSUQs",
  "key17": "5RNDRwRQHLgtyD1pxXtDrsw5imKHh52znAi6L4RZwiuD19sB4veKeuVJ1gZhXwjyoy6t1JkbQEQWYtLagJriZuhX",
  "key18": "4MuMqjyEfmLTT4b8gAooLkEsfsSmdectgsojPwPdBxor6U3Ztw46wV6mWqArtkKJkN44ETU3H1VKX9uXZCge91SB",
  "key19": "MfLVtRVEf9PVtEMD82UCKVzqTobbnbDnVFVUPRWQ39PCvnfnnyFaNtNy57cspLqx2y1QXhSWD38FKZ9ktXQDXvr",
  "key20": "4WRsZhK496THEoS5YAWab4Bc5G2baWkjgaj8ivpuWuDiGTfEn6RtLJBi9ndiMn74uwPTKHf6KpzV4wnbeuECBJuH",
  "key21": "LrhbDxqxtTt3Hkox1ryhZ9jNcwHH6UAHWrdLDg7stYPCqujipmhAwFFJL56X5zyrT5BvbfWJ9b1iBGkp77AMDNJ",
  "key22": "hoXVbw9W2UcTUn553D4GA5ahycrr3kocwE4YVT5t8AMNfYrdgnTfcj5p7x9xVNRAU1fDbKhdAjDbU6mqDyi8hQi",
  "key23": "3cyfNk1SQ8Xc34pmVLd9G4QmDVBQiQNTW29yfF8mYezXepgt4dNmpk49yvq6Tco5PHFNhRrCbjfgYoEaMfjfzkEk",
  "key24": "3d4inwMvMQc4MZ8tCNcPD2mUyBwrqCme4U2HYVqXQrRbWExNTsAALnt7tKtGERVRpw2SWJdQVVoSjFdkg9FA1TTw",
  "key25": "3XXT73dR1CBZprDP99sgAG35svbCHxwndZXUfVgTLWBbJzbz45Rqm7fSu1szVYz9eir4PMtUBe9nTabhHnJ1XUa1",
  "key26": "4YY3HfN1NpPL5L9scw3MNBaeHk1mnEeSWdTqEAog37u7eafwGeYgBxv4RhmfwHr6Cuv7PEyD9KsBRN2vVMMopuaP",
  "key27": "61u74pTu8KFM6r2ZrxpwXH29i1VFHTr2SNQPZgQWUf5dbEWxv6pSVxvJCkXzBz5UQTTKLCM1Nf94Xj7Z8wkdXgb2",
  "key28": "2LRHzgWd7SXo9mKHcToQutn2nVSSPE72Nfh598xTY818vDgA8BwqNEJyfx41atjay1YAGeoKBwXktvu7X4KifA77",
  "key29": "5bF3Trp5xEqJQpSjZsvUfAgUgtWQDqPhrDwkJdTJGzskZpBWecYhQZMDgsLkK5H18TSBNrCnaYsUNZSvsXtNL6VK",
  "key30": "3RnHTWfWawxvN2e9MM8n6QERVzZDxU8suDckkDQfYcNbHykQJuaPDFRt8CZ52Q92n7jTHiFW8pjefmm2Au3v6kkx",
  "key31": "4BJhN1ndnoPdiSzHP4KCcJaYam6zCdQ8ozY3fDMj1cguQbqFvSht7GPPbCTEKB51w2QiTwqcLdmQPzGuhLyBiZ4p",
  "key32": "5BT3Xw99d8K83LNixW3E4KNFLu6hr4uqVYfyjNaSbAqKeq7AT6hqZtUC18HjizaBQQ2ThgA8N9vieKE3cjoMZyEd"
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
