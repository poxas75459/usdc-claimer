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
    "5foS4sXjF6Nm4FTU5LoSc4Lkt4PRHc6SJUcnpfUD8mywn5uPzLJsW4nFQLUaKLaLd1KGtMecDEzSjJU7M3XsDRpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bzSgeaUppnkuEWL8Jytpvksf2DyPNWdejLhxku9vzZvzyX3FPfLqHzbyN5NFm1vpfgEbmVSEpFerU3jCYRjJ5ca",
  "key1": "36Jvo2JHsMcfBAGqTtJ5D4rVEHyshVbH344JHWp2demggc8t2pRdfsJtE6o31SAaKTkaqYVMCMF4wnwUvw3roNPm",
  "key2": "43riEVt46JciF5wsVzK9aBoNc6epEt1vcvtNxfAG3CgzkgcomNYQkan4USo6n6YfuZfnBxkZn9Zqu1YPX6y2wiAZ",
  "key3": "33Mwd7QXHJisT6qCbMaqgAbCNLGAWWSdELWY57qySk46Qh9XKUKpcZcmcBsJnNcB3UDed8i6DeNMjqdvmmTXweFQ",
  "key4": "5xYUW7Z2H1FVm9nEM3LjvT2etouipuqSBQVWoFB8JD8d3ZfwtHH8k8uGbEmquxCwfWu3WN7eBoDycvZcpDpYth67",
  "key5": "2MvkPuS5MuLyiMK4mwjWjBYPBYPYySKGdiKKxp1EJNgnVTGM89KYgfsLWsB1TszAhkHfGEcwDWXejRo61YJPfZQN",
  "key6": "sbZpxnE5wqyPfCXX2yqDHwAPFN6uksNWFc97Nze3knibVBGxMxEAP2d9UfpVevjrqA2Wx4mwmAdg1BrCaMbGZED",
  "key7": "3z9XPtEMpLCtraxjzSEQa3bzxA5QdZaFokiPrpTWWapov4Qq4u6cRwLszM6qhmghRFwX4hUe7mNkVyNC7ptqzF4M",
  "key8": "35mwTnVA8c12t31TemUMjpVvrYPvSJaL8eHoNT1nfR8agt4ku75ArwSMfF8Vw2uARwqrA17r3YbLpt15r3Cewt9P",
  "key9": "3tY8avmfLuWHNodx24LJhEhyc4T7pTmikhsPFdxqjmiBUQ3MgzGdRCcwQ8QDC17nqim2WXmV2vkCfuC3aAtJsmsz",
  "key10": "3frmozqUZgvh8BMkY65UGxc2JUPKPwMNgwDs5BpNp922P5bR5AFAgZBT2ffSpqkkn5gi6ALm9xCxqX54Dx7NZN5f",
  "key11": "3BBFV9nExMutzCya8nhw7U3pdUWFBEVSmQd4Y8uQyoptmSQAgwESRCVX62kU5pfcd7QEpwULU6LxuDmxy4Jek7XS",
  "key12": "3fLHBFpv3DTBMgN7EmYzKsDsnTiWWs1hJUnNAoxuGPMDMrezrtDD1Y5yaZMiL5Kth1ALR81cmDkueAAWyx2PgizR",
  "key13": "3qCN5Z6X35LSbvripJrS9HRB9feUnUkAp1EFVdvE9LBKrzRqzUngDLJaKmwNvhgGPHwsnuM4U1WWyxQJBv9QiChB",
  "key14": "jbMSE8ZHztdzivzAckBXWBv83hTg1ytjDAwqV4yKipeY2pSTtQrbsRmBm1CcAzYhuDt4UtV89eVJPWCMsrN3drm",
  "key15": "2F4WSdYaTAYFmKZ6ctY8po3f3xJchshr7bmAHSMSAqQThf8Wx6Gn4gFPf2pjJPAQHtWcxDWYtp5QfQXLAe55jdqM",
  "key16": "5myGFwFU393RtGVdbHbAKiDAiHotiGWDLGSbNk8ExRvJYM5EnPzYPtWmStJXzm9pG8ojFVAeDxE8C2C3JtJYQJqf",
  "key17": "Z1HCZHccCy6nT2jqKxo5PYjdb4vPhK77ZqSucFZEawZHSeSJ6ZPtJHicqMoWLzZCug82Hi8TexmGZCGwGf189KR",
  "key18": "3Lc3Eq4eCpBkJi9PMCJuPp9ANh3XN57fEFU1fsSvaN99KhkiFe3XCr9bDP4qoG4Afw4zyMzU6EjDWZyAahoU9jiF",
  "key19": "46pm7iFf6pGNnQ9GyP4zn3m98sZ3iW2c8GLdPg3jsG8GRGfH6vj91WoUj2dbBGtBApbfX3NsY8a3WhftYpQYhQoM",
  "key20": "2QzLdy9mawDJWPPn18kfv8pLxEKkBGMJJatd5BFZXCzt9ub7wyKcSFhVKotcEopVTCJzfx8WnCmSM1m4S5TrYkDc",
  "key21": "3Jvi57ztyEKuRyRDFEiFnQSr7miw1cEDyL7hoBphAm6KrDXwEVW9mCS2zsZ59ENdgFodN9671cBo2MeM6YAXErnp",
  "key22": "5tWpbwrsVf2WAHmZb2xrVt9ErZrf6Q98W3CNDCA2DEdq4Ebk28MSGURV4EBpKgqMN8TJsCdXULkcxa6MuunGcsEU",
  "key23": "2LwWiEJrueCtdyxsaadQtFSjqJqCSrAiEJuKdUeevTmbQj2cC5aAkX2RDfzzixZ5F6MY8fXbK7Nk8yxsYyshA5YU",
  "key24": "3TsJJAyJFvoPjyishaDmqrnWAQGKjuQyxqhhgawKW3NxcWaAa6pk6fUbAG4VaK9KYhT64yfPwnDQ1xSKi9u5LZ4F"
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
