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
    "5EkLLB2Un7gA5yCsMUMMpAypDtjGmuL9Nw2beaDkuStivfgDNW9ckDcP8W9Zrh38ttWwjuhBKNbeWnxDdudNpSk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SSWEunSGGJkQZo4h2apTqSewMi2tNrZTohbCjgsqAoQQy9b5R5DhsocRLoZuueRT7bRn74mHZ3S22XLDR2L3BxY",
  "key1": "3fLXX4M4fPbE8z4yPkbqZDDd9yum8daUDMXhhqEHoRV2qTpWaCy81b19pgfrVoXQ8haqTZVotNKDzAxxicxy2Kab",
  "key2": "37AKPLqGXmCxcuwr6y7rMmabUyqWfFq2BYAy4h5yt9KXq2VdizCXcXyUNAUsUxT3kwRv5voEZJKxWoeZqwD4DUkb",
  "key3": "5JvuK4WLptXEezDqoMyMfYz3JgfVK1csyZQ6vPVbH7HsF1DxkhrnSekGmayAaFrv1gaqaivCApoh2babpVUc74CU",
  "key4": "43faWWkzBpvZBdRUSd728aqm6V34gX4Go32pjbKbytKdRgcVBHEUGCocaefokEVe9cWbm6SN45BagACGUnvPK7fB",
  "key5": "92MNvzD23D4GC1i4y9PE193EWpyrZCzQRRSMpSuyUiBT4EJpXMXaRKi8SokFaiokztxK9yXeFqDJAY3VAu7DL7H",
  "key6": "5RyH8U76J1XcScmyKNQV6zBwG5VovrqQLxEcT8ZwX57TUdZkoNYJne8swKrSbkpkAk3R7qsvHX296erYURC13Kv6",
  "key7": "4M9aAP7YJPbiBNFFN97GRRvzpfCeq5RDMNZDQWCng16DHHZGp1J4MxpdFqGtTs9TQK1GgtZ8AzhFhzNEaC46Nwge",
  "key8": "5CZHm1Eeo1Fu7W1Hgmf8vvhwUfh2uEj43j9diXVwCKcu8n9yYxurnooiFPHUPcT3AkSzvDTgsnJjWU6UaHypHBu7",
  "key9": "2TE7Yic2z2m5Wf6YvyDxtRPZpjVSAmd1kb6n3B2XsusaFiogwusJds1uq4SamvVeg7aUUF7A5bz2WMWt7g7EisdA",
  "key10": "3v6Z57NZwW2JG4T8KW7kWXorYNKSb87w2B2htYk76HZ7onercFpqYAK7hni4YuBUv88raDKMjmSrUxyARiaqyBp5",
  "key11": "2UsqtGLUSyzbBJpBmoUQDahtRnqKU8C5KmLXVxDJYD9QjMM5VVG6cqkd1G2uWzACEYJrBCgRihHR3DKHXzwMPtgh",
  "key12": "3hFP44ymeZ7MY4hWgbnp2CBzZ8rRLnBDL97qBbu4FUoARxt9yR6P32joXnE2Nr8p4UHhcC3bD5tScD8qWU5dMJor",
  "key13": "5UoX7MxrxyvgLEM7YFgZsJKBMjU3PVdgDjhV4DrnUy9SypkM54aic1nNHtmkdST9ixcV8HrN2by165qWLzK24g9a",
  "key14": "3fwBaeGEabYqV77JuFmMRowGUuSvGU25BjRCEEJ61n9CSSxphcWXhvj8o34sMQury4ZSAeo12svB17DqGBuKM6z1",
  "key15": "5t3V3WTweU2ZXj3zUJuAWEGQmcx2jqCb4VeuhbZMSVKWRBy8ZzPcowi6ppaNRZQ3jG1gnVHKeqwQKXfq6MnXL73M",
  "key16": "5AczsWpjWrySw2nsSBpJdrMnxMaCGd13x4kiLasZemoRGCAGHKjpcB571Zf8pDbq1Nn7djNccGEYfMQo76iRDBqq",
  "key17": "3oREGdJ6aEYQLc3RbaFZZjidU2oVfq78XqfdeTpxhV3J5iqoSXqisGtgQzCkcKMSmpxEUQEKyRNH4zX5mSWdotQP",
  "key18": "7ZX1NNnaTY5H2m59zwHvKoRS6wqiHz8x83U8Hg4BbKViHVam3TCU6i1xeeeEcQkbzJSnoWT9yRJeMa9iCY3bFgc",
  "key19": "DDyjzBKX6vCWnPeQtbgFio38P6F9Qniya8Dm6udnfhn57NvGa99gb1ZJRt7Vgc59iSBGPQ6AQmnU5tJmGqUdq1f",
  "key20": "2XtkNNCrEzdWUXzd2UUxYDFqkUfC9USWpa4jRxY6ZBV7aA58igpwc5mA5XokyNpANpb7f2m8QXnm2VL11uPxfqVs",
  "key21": "39bfaV4wfAUm6EPbSMqSZj5hBaH6xQAr4chquCusmdzYiu28wCaSfMhs8zPYSt4LGW6Wd5HZ1XWa7ZYPkVtzuDYk",
  "key22": "5uVidCjGpz9cPYunqvUiGg1k8JhpLEa2pK2MmdLphz9m5ECy2NY7qnU3qhydFSVWG83ZKPNRm1Z7RTm9awMsqZwN",
  "key23": "3rgZ4ReiAq2wKmj6zFW79ThL4xdfKv361H7XFRGnwCfzh84hjAG7txKZYmBc3iJURMrmYizYJHG9tFkurKzSnUr9",
  "key24": "5UwdwJqR7z7KYgh7W3URp9U2g2kS799VymT86mzLGGaLo7THW1qHU8svZmKYMaGYnJSiZZ95gWSKFtDN98ZtgyxB"
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
