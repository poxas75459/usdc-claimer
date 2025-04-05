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
    "yskxFuCmxEEjAPgVdXZtBVucJNN3JkMQ89sV5Wg3RmCmY4uUDzphMe66ZNJBZXTTyPQrxvHLBvEJrtEf7ZmeGpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "523zb1i29g3JDvf6dWYb5pmz8V7QwAs3bCqMKKcPZ9DmWL2e5jbCRskrwmTdxdbcVUcbfhPgpSPtxUVKbJzDBF6B",
  "key1": "5kMaiULZVNudh5zqJms2y17pZdHZqLTfUMRgxUG1VAknmB17iee9dDqvL8h2ybVSBnDkPNakLj2Xtxujx7yRG2jR",
  "key2": "4SQmCqC453ELy2SyM7FGYTqAZ5W3qhSvA7GnRHiwspaU2f92V5oMNJ5W3tBp7CQxPobZsgUWpNFzSKoRmFsP15e8",
  "key3": "4cUh8kDTQ2UcXpNuJbtUT3gNKeoqfEdgooVnb27K1WSH4ZsNKbXGqzpN2midGePr5AxGAap2vzfdA7iVe9MiQTyo",
  "key4": "33wzirz4v6QMZabxTehZP2Q7PmGgxYqJFBLjyPqrCBDkFYjsvE6ApmLagPfLYr82d7DCeeo3yZrGN2jFSLjHAfm",
  "key5": "RSTLwznhR2NTs6RhcL2yUaw2Ssi1thLAgWEHJdkqtHtWyMTv5BG3QfLbPPdyAGE3a1XYF42f8QmMhGJpJFcNMGJ",
  "key6": "3tEshb9G9XJdL1bccdYarBzGgXTfBhSC2osCJmAmWxbYfU8JehJneAFozNZkdGA3myhhdjQmdVJdJtYwK9vARph8",
  "key7": "Yn7QV9RR6kEa5ubEaBaAEwrfXwcaEoKNzaaQrAqwQB9aZuLPy1Xa2K4Ha9mFs67EJhZiUiLX7cQAYsZ5fKK4eHH",
  "key8": "4dCDKEmFeJLayZZMMvVr8ZNdhGmWbVhhB7H3dmEqDH4H6yfuuMkBqcNhqfJW77BVWsvRNHF25kNgRo8bjK2Yxh7L",
  "key9": "48zV6xL77ARD89pPEDkXcrNwF2rBUnXefQV3b6v2TLAbQ5qCtKhNCEscXrPehtSCaPwdQmRkeo2wxKtTt8xKhi8i",
  "key10": "3mWntgQkvJQHhhdyu8Jg88Nz61pYKGE5eduq7k6q373EdUJ5gc2kiiTBuDKEyw7WQvWQMWNAsKpYki1SyMe9JzpU",
  "key11": "4FwQToSX5EFVjVk6EE3PP8PVbRSJGAbWcfnYSzuZKbMsa739bVrWMHBwAKrs9YaPBVEpYMqxfrLU1zB83JuhJ4Tk",
  "key12": "3fQV6vj3xjuwWvYEd2i56275bh5aapGbjGfsscMGZCpUHEeUjMmBNsmtUrTj6sy3M5NAYxBba4fnc2WggsB9keU8",
  "key13": "5TNcgUe8YsXQtSP6835FuYUgZ2sjx7dYbaY5kL1g48KcWmFjo4axAPdSyTcCTaZcamJpBKM3Ch5Kg4b5nu1oePJQ",
  "key14": "1q6R2j5bcx95Yt4AaupRgCLpnW3ixVemmWbijw8odnNXMc5JPBS3GegRwufQMLeBSiiDaiRMW9PGhoHTMp7smLs",
  "key15": "ohE6gPJteQ6aRqGbRuxsXiQpUmH6fkUfni5bBJiv244yPUgVMiwwfAtkxQLoiy4524n4Nxr4xpqmvGR6Gaxq194",
  "key16": "3rngArTJjZbsbE1T5BVoRi5jZv62HdbefvZmW7Xm29nPqEhmi9mAFcDmQB4cHLHRGuhsRbCPbbeAkcHoo321Vjeq",
  "key17": "3erkfChMSrFtHZLNn4mjhTFq372eLDkh8waBEDefQ1fVgU1aL38rKvCjM7njt7xMhB3HPsPaCDRMQqbbn8vVCEDo",
  "key18": "3KgVrdQkBMQJuTcmjwAbV8wVWzSAN6wRbhHfdBKUXjRziYf9Aervw3ybvmXhPMMFsGhvRRG9tEP7ggriexNCMGDR",
  "key19": "5hgSY4EAtPgZNe6iX66XMSjCRNFVTx5vWgRpDaSXjAAv9ArX5MLNT5oKv11yjVb8zH6vdvJN46yYzab8vfRG6GX",
  "key20": "3hg94EtQrfeAVHx3QtUPX44huMgfaUEZko8EfAyH9kWe5v3WzoVXa7Y5H9kbecHLhWVVAM27ZoPTEGujXkRAAEWt",
  "key21": "2p6x7Gxs7ZzPL5vG3M6QYQqmovYvd1dcWSpJbYNtpuseRpLnhvW1q6b4ms3wJAWn5Ksd5YXv9gBW3Ah8GzZ1KHAM",
  "key22": "4sejGcQhkZ8kJGwpWDbHsBf3njHAqqzaNQk7dJZBNnRxxcRtMG1v5ukNyhfsoWcroZSEBKHL4ymjETQH7kRKhceZ",
  "key23": "4JGSmF9fdCtm55ZAtSaUAkR8ouFzBbZtsP1eNtntr5Vy4QD2p5chNXoPH77Qe34pRTd8y2cJEbjvfVsnfDGhLD8n",
  "key24": "4zgeC2hcaTWgPXn8rEiJDoHVLToi9SjisMDXb5TQvcDqAg8UCwUJBxn98HkLEMo5Qc22TxJBjzdVbjSrNowTEjNY",
  "key25": "36DTNzuBCgpiDKW1aHFGJUuQZg59XiYoe6eLNif12uE9ZPfKECEMtB5rDV6q35iq94y81gV4Mh7aY6svUdHP7hxd",
  "key26": "3LHCmFd5B5JCXAdEti1cniH3GnB5JM8Hrqaq7KnZSYjAjVUhCv88Ru3cEqb4816Y6zoXQVbV7FsW6AzjovCNPeuL",
  "key27": "2cSYVBAL1c2eDXT3QzkeYjJRg4od3FyoeeFgyWNZfHJdGBRVmYSPQqMejUNCnUFYAwfvDgfeRy8Y4ouJqVJ2ZWxG"
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
