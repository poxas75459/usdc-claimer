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
    "5FGQYU5j3zNp2SLuwTDdeoBgbfmJY7aMGraHY8qtBK5sySJTT5JnqsHfjY3cRivWmDPL2xPsEviKSyj7Tgu5UvUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57r9r1ipqrMH5KGSe4wE6JW6NuMcsavs23roVxXvpxUdTj1ZziEaogmhKg8ufXbmUBLgop1jYi8dDoQpGz2yx3rg",
  "key1": "22zPtbS8eNsk1G6qHvkbcYRuV8ugStZpT5C1PBe3VpBngFgoitdCyER1shhEGjo9DLNcMzvfFvTxj1C9YkDCXUXq",
  "key2": "5ivKQzRXWfzCE3XJPS3Fc1vFDxQbnjxuyCDzk9Jj174rPZKnUfZbovwVdZMAtLo3BxPHkuYxpXxo3hdYhYdTDDEz",
  "key3": "3xx25zwgJPjbAV7rSDJifrBVeT5LWN7BHMNnV2k6z1yfCNgjWq3VaddZiYyKTDWJecFosyECgXqM5QZKBsfnD5X7",
  "key4": "d2GFkPPKJZJbNTN1J2AxxtAFGD97eD1ZofupC7dEkbSNpZhkEh9JaCTz9FTBwyVZjBgYVbWvae45k9yz89JNshx",
  "key5": "3L9GMdRAYxhWexnCecPdsUWWTRqcXa4XkCddP31KJRuZheoYpuuZwr7fez2XmNrPrUSTpjK1cy18RsdZnUFxAcGE",
  "key6": "3mGDNCdkYaQKjeP7LaxQo7KE6d9PFA1yMnvtm8QRRt69F2DXK2dCmhVsxZUG1qXV3C8Pq957hJ7SBkNmu6FzGgGD",
  "key7": "51tyfsB2WRFfMUs75uKG3MJvM7JFmv1vrYQv9EBMhJhXGQKGqhgBZDm1LvYgD8EcBfDD5Vqa6YEmbEkw2j7JesiW",
  "key8": "3PWuTYm7nDok3Rd4Hjrm2dojAXueGZQ2BxtMTZeeNV5oAr1ragzAATKyoi7Gni84EjVfptuokXutiEMh7xV91zYw",
  "key9": "5tYCqmjNwTMo3Jme5chYgUQ8AhGGmybYEKcdJsMPropXMLm19kT74NUZSAZgkVeWYacUv8paLr6nitN2eeLvjz2T",
  "key10": "2Qe3q28HTJTe9GXyq7awaKCYmgsNTbeJKUQRyEmANDPE3k7KKZNWJQYYEz5ZnkxR3Z5mgAL3TnbVmX2RnJ8VAYGe",
  "key11": "58mF5ZCtfxijzFWNDtCxyrVHppPd3PVBHtCtiN44wzgPmxSa2riV77XhNnZN2GyFubCRqUWb9XYuQVY8oWQRqYE5",
  "key12": "4AinU43sQghUJaTbpwjAGyBipGvKNFNPanUBYaWv5F78WqpR3ZMRCAfXeXSAwEWxnLTR5bEXgh3yrpdM6mmPphHK",
  "key13": "3fpjLBCjsgnBvfBKWNvT9YqqYEpXpS5incTXHNH4SNSyPqYWqdYAFWWMEiLVz9uRbLXn4WkFvWpbcRM3TzeZew4i",
  "key14": "MA5NdZWK9jodpqNuHRJArmuaw3Yf9Xhp14TJg8rLQk1G3PZBnHhztvL1X4cwFxxu9pnCHAu4ZWDbA29MFstfrqN",
  "key15": "4xZQwwpf9zaB9mUPaJYKiAXBE3WfBZdYiAegyzf4pciAaPUwrVTWYexYFbHHHCknPAvZyZTpWpkZZWFiVbDLGMCZ",
  "key16": "4TydDjirx7wSSwGdyrgbmwRg3xm9oK9BnGfbKgoCvtimryWt2bgrf2LkL6xwENpDLU7ux3hHevsEXMNsA7oKgPXS",
  "key17": "VEQ8zQng97whBVz56uFjYqGP2Yrp2UaE5woA4nAUFxHmksaQGuWJ1A4g8VbJ7aiYzFWD1zWGTSKHhvWDUJ7oqfe",
  "key18": "4fyUe3Ycse1sn1yuF2n8hdibq36EKcGLgjMMUXe7pRdp2uAiHsopBTjBpCPLMiiRGKixYbZJ8YNHwhYEasks9AqF",
  "key19": "2oCpJGRHmnwUtmoZucxZsiRWRGSNg3SWvvg9H7ZCEcxLq3JhuUBQiMhtkzzru114Vx2Eoo4fJse6B8mXt8vBZ8Dn",
  "key20": "GstXHixFcTLKTGkmuw84eATbjKmYLRtWCZBCFVcZc44SP7mS43GwYVKa15Nd2cL3isu9dTe3BsGfc5CHuvwEJUD",
  "key21": "aKVEeniEmRbwtDE4o9qvntL9EMX716FZ1BzXV3f1vKQjAwxDxi6EoinGhxFph9hTbSh2Nev3K3PL7RrwmBqaGKf",
  "key22": "cicvHRGBEFL98Ymyai3zE3WUSvnZj8HU1srtwMuBDH5wLELztUvvZg3fbrXiRxDKoZDwCSbj6G1nZKfUSfxS93f",
  "key23": "4VTCuADASJ1XhASgsHAfwgwkttsffqvDpgM9hNLjbp8CCEHRHsMYzNfZKfU6eXz39w4rGaHDaJjjHUvKrW4FN89T",
  "key24": "CipbQQUYDRF2cVnBxGSXMEz52VdHtmvy81rjJKzGvgxRJheiC1jpb9cXz93odv8A9B9L8EvLxq5FDoskv4CGgQc",
  "key25": "3BKqXUhXDBdXNX3u22pNqVx769kM4VUQtFn7WrxP3SEDE4qJwQSpSsFkYrjHYSJ2BnZpBQchfrqyiDY53gzixAGZ",
  "key26": "3jCJ9MiQyeumJR77ygPedhCRFp1LaNtnc6Mf38rR2QvtHjiLkrRUnjp6G9jqTmoaHToqy8QMvkDVAesCATKquhqT",
  "key27": "36wTUV9axAbRn4R3rYarPK9DiE4cKtuBBivuMgxtaJiPzwZq9KuTy5rqHrRni6x2kd9NFoQiWzFUCMmEPUqS2hJr"
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
