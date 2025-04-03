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
    "2q8tujUvPTFUMGeexYc7VKBm7XeazbFDRohMUntAGgURuCRuuR2GPGnJyKntBGgvcAhgD6RBQUxsVWK5ESA9XWis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XnxdxbWeHQmrxR5k4Y3EJKyLEV6zq9XPuHAX3RxNB7zZ3t1jRyqz27nbZCze6jkDD45iMbH6j9WQYgQsxSRRpZd",
  "key1": "2E864S5HYmy651ENpeXerStGVnbXHvPzB3Y3gNUJfubnVHuTyGGRaAVYvMvUS8Dr3a7BTbqhPUGdM1di1RofXxRX",
  "key2": "5j3XnbHCTDqVciX6a3QFQQqdqA11KMPHLRqV3kMgEed45CQmWz712DjbYmVcqqL9T7vkFrLbDeTZtQ6oNP1xYH6i",
  "key3": "2UvtiEJEwGMtVRhe2FnvpDn8ELBVQ1mwnPjVbRfJrDwePs8w879wkh5yu2mCzroBr2GwYtUy7YtYFhyWjEhStTQJ",
  "key4": "5YkXfxf7NEUEjpc2Um2BA3aSmFEwQfsyZV9jbnCnvnCQxFoavtknFqkYsGnmwBH9fcGfPEwosRjsZATVameqjxTQ",
  "key5": "5G5Gb41BQa1JWvEdqNJUzRdA9oNUBzYfckbHHsfoUt9U5zcBxD3aJp6kQyC77c6gc54RRiVBfo741RDEsZgM1UK4",
  "key6": "5Ew3UfNoryDj4WKvYXfAg7x1YzipnaF5WtYA2Un2q9ryZeAHfMxNErfo6uBGHLftVNQdm5Fcwp1zC4Z7gV1xGhzr",
  "key7": "9eztp6Nx7x9RJkUJpHAptQmff8ngFJ4CtZ4kNVEm9ZMLnsUigS5tfDcAhJfnmAa9LXZuiHfoAZ2rDSKyHKK6aPZ",
  "key8": "oWBMoNbqrjeZtr5zPJi8zojGBWugXViwV4iNkBsQ2c2NcXfMHK8CPqBfTA5rdKzmsfJeFjkTpKV639z1HUr8pSG",
  "key9": "5iZ43m71aLZaJXqNCogmPtdRbRJd3CqYTxwmM5pXr7XkPnit4sx9cT3kTPKuCaxGYRskaryHbfVfW4mdkuvA9c2u",
  "key10": "2Xxaktr2cxSJngRwyrt3ZzFTtQGRs9SW8C1BuWPF1gxz8296siFML8bp4P4LSBTsckrgXBMUxbE35quvToeJoMN2",
  "key11": "4Q5XXs6pPjVMeQw4QDSw6q91B7qAQJFgXbxMRrYNjMtYGmv9dLsEFP5GfSpfRkNPekNyd7G8NUP8YTm8YGzXpF7q",
  "key12": "2Yo5WoFx3RdofCskpPzd46MLmPdQgZcNeuPo1H4Ryvn5JGXmhkKVjjisgCEurATPukyKWNtKV7jy8iUQyp6uMYa9",
  "key13": "38hbaL7gGogK113uRnb4EgwaqyqkK331zepSeznmAMZcgabDTfiNmrSfJsoEQCpyb7J3aNdgr1JnQgbjWzrdxRHe",
  "key14": "5aescFnXibtov4q58wo7rL1Lfb9hwi1osu9PV9992n9FBCpkdWuwg6trPhRYGVd3pGpQKPQZt5rA8226jcFvJBkq",
  "key15": "2h4qS3jsnq7U9NDhbQyFwvkUdZ8wRLHtKqubNGiBf4vCyg8NwQc9UhV1fXXqYfFWMep7naesa46GTnERCAJBwpHS",
  "key16": "5KpDNPhXsqC5M8k9warUhLLeJJBH8GvXZjMdxGCGQ1R4cn3ckqYTpSVKoXow1ayv6uHAfCKGiXsGwc7Gcmd4yAuL",
  "key17": "5jhyyq3gTzVvQWsFmn9vX2B5ZqfavKPaJNwiSjqDPphBGX57RS8pD9kyBpRJyjrcABzehib38ASc9bvPS7zY5gQJ",
  "key18": "4yeQWAwbykmb2g5krd3885NoBmS51WaoGAQtS3JQC5FbRK3MfMbE7oBzxk23fHPqhZibdsusTG115rmQ13DsMyqg",
  "key19": "4hvZH8FtNUo1fX5ddWMMJxt2B4ksySBjYrv673rxkqSyhv2hFYkUyUnn3XgQ7epy9kvQUPdkJygifFqmnudqGQrV",
  "key20": "4gpMpgF53FPMYFHEDaZDAPrcvfbCQjfphrznczSnqUMFgp1tSgUnPD4o9PfUmjJCAqqgJxTq9ued15y3gYxKxSMM",
  "key21": "61fqGuUohF8wBdh4ABkhAJPRaomNgrdY7Edpceeuwrs5dKZCeqkxif5xMK5cjstosqUWkaJKZEUwNP7kXQX68Wcg",
  "key22": "4PG7L5hvUvm6sbWd1ZjTN5gYuBVgPCABCQommCb6JdrtSsA1PCi4NEjuCss97TXi3picUhTA6AxJWwmFsXSmqWLA",
  "key23": "5Ujx599D4AuF8EcB1gvJFm8WGWNnC4frMcAfSzqXcQ8K6iwLMbiU5s63rRuD4Xrs72CBHUxTySQr7FmgEnFLkgtP",
  "key24": "2ZzsqX1kg2sMcJVpYaxL2b1Z4EQEBwwoLLwyuWDE7sL15vcMVzKBBF3ZXLkeEqk71LcCGmcEuhkHihKVF31XTsFJ"
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
