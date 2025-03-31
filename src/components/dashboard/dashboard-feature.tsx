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
    "5KuCMdwvPhTXB3zohw3YbiMLXdcy7T8TbsTwLwtzfuKn5eCXNiC9bj22RJBXj2Y4GuuZHQGHNcMEDBeXGML2Vmvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vyKRWW9ZnjZg8XYxgXhmsYoF367pcbu2yGzZZyksKE54qJFbb1X8x7fXoLzEu6s3A8SynfanTDqWQPjxc63nNrt",
  "key1": "LaX7q6fudaJkhe8uCXEgakDnw3bWPLNyHsczMwNf36dYeXwqqrp9J6qavsT8TntBW3HGCPUyVUjWv12dKpHuNJR",
  "key2": "5KUPoQ6t9KqGMvZE2kWqoACqircxYwLiy9dinbs2yz2A6tVoAE7n1HYYeSki3FxqVTZmfQnTU6JxdJGJWJmJ7N4j",
  "key3": "4G99T5QCYTCDt4rfLTkUZySNAVFksADc63ZpWCwrPeWecBWQmzxsnaKu9xXLsPqa6XZnZrykQ6sGCvYbQbbSBDP8",
  "key4": "4hA6mZ4CkQFwuBrDyvUF2KjgHkTCeUy7uGpH68jhDkog67ANMhZNQPnvJUwXPLcn2Xrf9tCFcWQtNiZ3KCX6sN2A",
  "key5": "4Pp2DE4vfb1PnvP8ToGjRuqzonANGgjXM2ztjREZMjKSQ1T8UqHRpQxQG5jtGNgFtD5whKgBfTchbuBu6DDXcWot",
  "key6": "654aodiaG6Jrf6NG9Q4Z5o55eCF5aK7MaBE3VeZmrYZy4QYLRbTgX3mWmidj6tDCTYkSWT52cu1NsEBLPdLWwqEq",
  "key7": "3L5neJ1Qpk4ovWW8miDrQXMwe98yVM3aKPEEkZqtQdx65iQdohNLc5znuqGscqtXceMWv2sU8e6hiVM95qxKwBAs",
  "key8": "iTr9Khfp7EhyAej2MrdCYvvAwXsnj7TqRz4gVoWkSkF1gZ4ySpLABpS1g4geRp2zMime3bCEHrGDGUMWHE5wq72",
  "key9": "595rRumgNJDFA35Si9jLtdvoeNWhRDeCCfNFBqKSUcJji6NSoKRh1B3Mh8f2fCUWVSkzyfreGhQtwfX6YVFTB8sG",
  "key10": "oPQV1iCEbr2mPsMb5wycH6cfTj66hVYaK674sqQGdZXqZ5WfZ58Unk5CLvDN3GyvhhqfT9qLHEsg7RZkYNZJK4E",
  "key11": "2Nwm8CXg4wevRB5ePJkGRnEjXmUSUjhMSSUUbXs88KcPDL6Vmy6gAHS9qBqLkeeRsSRqUppVaNhEKFrwwADbsLHh",
  "key12": "5PnLznFzqLSTkERf66fmgJfMY5K5Je5zadyRvPAhxCtmhaZmpLnx4YbQfPfmDWX2ajzKnDw6RNpfpoTYA338SwmK",
  "key13": "A2T9iRoKjrbFHCE1DCi6QxxVKM3vPNcCds7bu3c5FpoQKSv8hPqr91Mb32iyrAYTGEDtCuBPSeBtPXm8YQY1hzu",
  "key14": "3MYSG6ArwYZwBtvY6x2nQsCrT3EpcqcHdkgirKaJGrNid7nfT5u5xboN248BZikKcfXn7rV3DHaCofvU2qreFqjm",
  "key15": "2quUJ3TUpxMiNNohZgRdavQfUQ3SaHn89xCaX7TfMDswYu4rsEqMiZszhm8CHSkJe1ciLeSHFmG6sUesFaAhoxiq",
  "key16": "3KTBfwvxTDntSHQN3wdNUXJvt4543RdiDvKKaUB3TUEUpEfKAN8YGeCJa8oDV5bXzDWjc1Lu2kizVFJhgHxvQBnG",
  "key17": "4CvHDtMGM41fs1FKyiYKn6XChj8PcXD7tR1NxRaM9pc5VUMkL43RAPsiKgoy72mx6AB8TUVurqfx7A4spejLv2eh",
  "key18": "65NsYGwrUftVWQuqwSPKvCPfAXGS4nGYNXKXt8tYBFe6QWEbA7XHB6NMweaTENiynheAw4JFLMvhA9oSf6vKPH7Z",
  "key19": "3B3fyswkRQVmEQdajMKmMhJH7oGgwgAPGeAXAiFsvXGV7cYLcti9DCcf5tT1DXhX5JJSgD1NhoLogQsshNz3xCD3",
  "key20": "3JKM5TRP8L7ib6Ff6TYF6q54sQRZdZoHvT3XajPEkp1GyPXn98WYATWyK5K6UdZf1VvwPF8wJ9SaSxBMi2aPRSBX",
  "key21": "btw2tpByggM7UmaY3VV3JBtfs2hBtRUx3Et1zL1UzwQYtiJSuQW8G3HQhsjR7Mu6khBdDMz1uxAZN12v8KyooX8",
  "key22": "47fS8fja9vJ5t8ii6NFGcdaBXnsGWLNytzhsqg4AWm1QKs479WKjHsFqmgwQ96c5NBSZDJTsBrjCpjQYmekv9NpE",
  "key23": "rEBwbUF9Lbv5em3mtvgdWAS1RNRDpGDNJ4TfUmo3xpryPApX8JanCJNxzf9iyLZTE1aNzGvtWVwCuoxv3hNLv44",
  "key24": "2mWRRuiEEMa5oFkK8JzNpEgwiagBQq6MNx8QBfdYAfCB7mimGUh2PAC67keewJW86w7d1dwVfpDEV7h1WKReVjfi",
  "key25": "bUnzPyNRQkibESq2sECReRHxG9bLFve4XTKHPZ9kuuB1SUKWvkRwsqKoZKhsj2UznHV9YVEUqp2adfV1kxB2p9p",
  "key26": "4xgCwLwLuUnw7VsyqnNs8DVGrYTVt1oXV3YeRTLDBmu7jgG7WqcgTXsNsvTKmvfPinjnKgxvvQvjKcoJy5LFnbnw",
  "key27": "3pbpNueP21xDyezu3WTgesypAwC9A5fc6EVzjEQHrABVdVfTNojNvnHa9xXDXnVKzLVPYMV5A8eokXZ9xn1qgY9z",
  "key28": "4FJ29CkdP6KpgoUjBQ3Uv2R8pZxqRFnBbCvLkkTPLwRD37V64skAtNJ7QZ5rdsZZKWoWPYqtjqVZ8qvqdVuKK2dg",
  "key29": "vut7QFCP2MeBdwPpE8VSc5CQAFPNzuYLkgGXdRPBbGqxwJTTfnajPpACNREQRxQmVmGGCZBbudQtVpAoB44Swjq",
  "key30": "HqncXPuVxDvt3vrVdVQNnvPEHW2gsEGs6YzeqRTChCF8Z34wo2WMqdYAvr2poRV9uxJYxZEy6Apu8V8HTS678SN",
  "key31": "3Jrj8UCqTGkSeTwhVDJ2kJE2SUVAKCSFKrqbPDdeZC9nTqyeVVJ4fu5qU1JEVCzHaykmfs84RgTkcRwxQcnPWRWz"
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
