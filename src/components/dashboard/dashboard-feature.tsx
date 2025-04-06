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
    "2FQyVyhvY9ni553skRjUS2q2WGGB8324dd1wBYwnuL86Cfm1Wh4anrpANyibbEVUjFFTCfzotGLF6bagYRpuhApD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iQEYYxnSL7371kgTS5AQdEtN8Qv5yy4sWoDfivxu7PYM3pTDarJHcMHQKyxs4j2Vt1LeNxhYDDzDVk1itmjqNbc",
  "key1": "VCesCYsVyiwY5CbpsHa6xe7tcpz8sXSyFGmXtRFkUH5i22orDeFDzB3dxKzPSVwPMHwigbicZJ7RmocUwCyD7a7",
  "key2": "3KDJSujLBBGoPu7YeRD7HtwH3A49e7pzMp3yPWesSkgSeTNqzVyvhcH5JRCLxqSCvjWk3rWKmTAjuoqQzKhdfLSe",
  "key3": "5Xk92sqJLVPHZhZXEqBTATLnpzntwXhQ3Lh2wrLCF4DWg7f5va4Tu9UpQZuhgeiLbvpXV4a3aCeKtXfsxfvaPf2t",
  "key4": "3rF4rQs7dwq1CtsBGi3hqmUUCrqd8T4g4bjXhGjPheAUP3n2Pnv7TXudm3tXYMkKWjPCthoa3aWCaSCh2AZ2rswN",
  "key5": "ad4RfwZAZDFzzQTcLJoWMqMtuH4GbL8pHti1Z4LFVLAP9xEhkwUnUX4rwBmwWrMAwxeBWdWNTqo1SLq1RYidmup",
  "key6": "GonotmmJkyVMAM9t1W2Gm5B4oKAvog1h4s3jxtfRxJcYW6PZDFbBKf8P4gwvGJ3Yh6tXpDM5SJVz6AonVMBqe79",
  "key7": "56MZg2E2vdB5fe7pPmzkaJ6r8goeobzpRVMZzPWhXdB3qxrV4vzznMQgWEwW1NrigiosFo3HYHpRJwmMoUcLq9PH",
  "key8": "yLiyPuUERkYxp8Xz4oCrkqszd3oUnCAcCypEcLphVKjp5VzBGEhFh98Y1JyMxyjK6tpK7UBpfFFQ76WQsaZcEGt",
  "key9": "3LDXPvCuZpVRi1rTSdYrpTCkYPbyvJ4w2JwwLzKCoAFPyTDKcWrSG9aSvTsybC9t6tVmgTmeuKBnToDPCgp8tGXA",
  "key10": "3UzTV4cfqQLndLNrZGTKW5J21DYaY7tyQojhjyx5iUk8NZoebvrY7SRbdsS9CrT8kDCrW4pH7FSjPUvKQZBTe3px",
  "key11": "5s33umTxNX9kL3yqx1JQfCq5tcC8SP6txPSSvEmwxbLqo7vVdCmQyibqW2rVyrGdrDa2pr8ZS8CfnUVhHVWm2aAA",
  "key12": "5hMh9KqzsGftkraeiRwHeF1M2YcjEHSQgjhuN8ctia1kdVqrtUWukNFZhzGWL7kJrQgbJ9Xt81grR11vmZKFbwZx",
  "key13": "5o152LNiWbvMBLDhpSFhgj8QrrnYEP87EJ24V2J8ob5K9284HPBppQUuJui1aZzaxzAwNE4cg11YnbNAmBYygCXd",
  "key14": "3jyxFb13hLr3ZFHoCxVu9rrAAeKT4evU7p4d3LK8odz4c3K98JAN6qxPjGXhVgHexa9Lo3YJ3v5wsKaUSh6Mg2vM",
  "key15": "2t46S9MXg2xyf4vadAFUXWP1WZF3yzUamnYc5QVGhsbqiGtbGqCzyWXS86y9Jgap2XwXchDZLFNTZvCM4PqWG4n8",
  "key16": "3RTxFNUUGdYVFYGqrdr5vgB1nF2tAuhB992QCBziPjSD2CZ2SsXmQqNSUv8HXb4qryhWBjwUU3UUL5mYRR9E7jee",
  "key17": "5tmz8jEK1f4eKnnvQqbS22nddujuV3thrZD8uRiWKwMzShc7au339TnPNPnbdiU1FzRpdvoBpxMqigE6jQhi2cr8",
  "key18": "YmGi9BR7CbdFdNvqgsLQAysCCdoaeD2NeNxxTX8X8mnS6PjqrucozYA4Mp7SgPxiQPdRkgrymuoMVWw4LqSeruu",
  "key19": "NWA5RarJkvL4ojszXcUDYEEgTiSF7KhoabSkFMSQYr5Rpr7SXabCMgi8QHfNdtpG8cWWMuy69z7E5pQkCcckbSY",
  "key20": "stJr83qVoXy8anrrUBzk1TCQR6Jg9YyvrHYeAH3bSbGNMho4nTuLqyiFL8uY2pGyp8VbnnKnXPibFjGS5WGf8V9",
  "key21": "43tyLtTtKLb7jKVp4evnQq9mRgcLwvAprNPz1vNgVYgT7T6t6HUcJ1wTwNE5kHKjDKwUtFBtVdGwQtcZQe6e5UaM",
  "key22": "4MSTBNacGZvXyc54kjG9bXDNTmy1HZ7bUgeeDRNzpwd4wrbpFsvNxrn46e82b8SLXfSYVJdrqczBJuChntcxoidM",
  "key23": "52eviEnVwinXiUe5NLx9fanSsD3rocF5cPTVJ81tVDRJr5ZMDbBFyDd7AYkvPDV7YmJatGH8X5xBc822dDJJYXkW",
  "key24": "2siet5ESSNCrmLq74uRwqFh2XdoxcriUxSCrktyv9ELtqixJeENvAtpbXAgA5NdwuvqDjTcLotrwzGh27vi9fR4Y",
  "key25": "TCfzDWp27MSpLjU9ebfLPfbGvC6W7rBXpN8UrLNt3ZxhEysiG7cDJV3xgJgXapFdjaT6bioQ7w1Rgi264RHQeZh"
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
