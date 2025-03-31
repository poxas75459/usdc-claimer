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
    "2JaabJETMoargjj7j7rfGnRWqNgYVyT2VWmcMjYynAz1Ea23RhjcaeDmEZsqhMs9cPnHyWj1orxyRPzz6STDJQPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FVJ83ZwaGzXR47TJbZbuzCK7JhCx51SqKRjuCq587HaYuaEA2mvCdxRu8qQPGiubX2kj6j73Qcq7dpYDLRS8VEM",
  "key1": "4WYEgom9Q75y2acBMa5ZHERZ14PtHWnk9NgZRrrvFmE6deySBNqEEQMPy6LosUBHK1uaP5oNZZVYddj3RN13MtUQ",
  "key2": "3ur2NZtLahPvFiELSErpxaeXPLiH4ZkAbQfgQnsu2YsXCmvAGCUiqQGSad2rtNgUSzsiBLSrqGtxTPsaeP73VD3h",
  "key3": "4ayyryX7fG19oArJo24oEUBc1FpTaqhcFYbCtrREPSvyZ1upTcnzGzixWhWnbgPCXp2wAovdoAEzhBHqVGFusztg",
  "key4": "5LbHuY5fi5YauQtPzSYqcTvMZ4uoFb6mBSGh4j91jnP6ub1yDP1tx63Q6RRvN2QAEhpHnnj6pFexCVPiKhCZX8vm",
  "key5": "5L39LWHmtB2RoDb81npbox9zjHnxXZeKktepwiBbWT3yamPN7d1udDwNPkYgestifhpnAF6rSmrWjx5mBfeXTpGE",
  "key6": "4WvBVSuezQE9oF9o4MxhznQCgwgqYwtqL2z5Qh5Lsj63Q4aon4wJ5j6hXxzG7xDfiLTQfyV9vsJb1k8SR3LtTDvn",
  "key7": "3UeKMjni9NS1677gp2tZtWrWyoHLNzECzYNm3RuW8T7pXmmuhApZL33rU4h8PWPkCLR3aU9J4LwknzEPUiYCXbrw",
  "key8": "5Vo3eLST6JJ1iEVCoQLFfD44yRpuT3RB8tEcQAM8PeJxHK698WcKYi9yR5QdZeYLycLEwXp4iXzcoW7xFRs5Lh2M",
  "key9": "4zydAAjHu2nzLFdYJFnZhp8qmVGUjJ523eg2fZ13n9FbHT286du5WZP6h71GCr5DVKQR5yKixvPnJwpv91V1GtJL",
  "key10": "5AaMPuHZXHeYhyufMKHNeuoWUkJCgpUCuKVRGdstYybJGxyvTexEaEaHf9TbJBByaihrSWf7geRNYS7KofJeKox7",
  "key11": "QW2Jo4gQowy4rFEH2vFJRk8voRihTFk3nPGWC2Pbk8g7N6AApZFvgpZ4ZdE2FHBpHceK2q2ydRBRaqwTyzNZrAA",
  "key12": "4JGGyaTLzy91mtgYQZSVLQa28A4EH8GLnzSZmJ6A642pDBdpBSssCUcNXTsnkLiWxg38VSBkc3NbD8iVRi7c5K4Q",
  "key13": "5memQE121vyuK5VnKWbX5iiPhVCE8XJytmwZ2pjYuGAzH1TiunAuuNZwWEd9svZxTNDLbRoKP48v3vYos4jkM8bQ",
  "key14": "57MigD5HXdhCiMHVExrFRhjScoFS8fCWPZNUtEE8DkjdLPDewyhb81mJpCD7QHwwq7vqoZsxSQEBZEWHRJJg9dFu",
  "key15": "3rqmNzKhX65qw7CCf3aVTEFgaLxquXpHMhcUWCrZTxCkfEYfaAkrJzmnQgH9NpfeG2LGEcPo58U1suUMEqipLHGx",
  "key16": "3SD4AFR9JvWnBwZeyNBrTaxABUnMovbq9vi3XUnxxAaXhUzNULJWVnxg9GTcqr9CFu7m2NrqYkfC281t11hLjW8",
  "key17": "3TgQhArvCGAvKsPZcFB5mUjoPuX9cMXMuVzfgDhX9tcjRPA6Uji4aBj8HMVDuhYPSw5GXU9Trqm9gAAYB7ixjw8i",
  "key18": "5RtXW6CuPq9iZ9BeoUCYF8For8y1NajQqk3k53T4HPBxqnvia762817N5yAhS59bAd4JSJr7ioN9pLfLnZpXjVUS",
  "key19": "5RgmDiGntvax4o21gqszEjytzMMfSTPND5cvGQr941wiDvQKvQDEwjFmLL6shF6MJ4fMmdC2epjYouBgzXcxzedH",
  "key20": "3hYrMbyocv9o9bfroGEFWwCLff16ZB9y3r2y9jxV9Gi7CrcMry4ecP7BXdJ7zFuxZYaZTk7KGjENbz5A8Usts6FS",
  "key21": "31EG4KrNxpbXe9eRiNY89n286N9P7FUgZztPmo42jLxBV2n723C4oke8wTkyG7xTqYcwxfuCm641PoyCms4Sy6aH",
  "key22": "4A9xgibXgf2JPXbQuwEzj84CKov6YSpjKgddeWA3wGc81SEPzrHrE5JeZaq4mQa9CaTJrJAeqNM8ET6cuM2sePfj",
  "key23": "2WTjY4q49HiWnPuD51KZkDF9aFBKLQ6d9TNCyuAcFyUYDBZJKCLuWryGDYruPbiLLDg1Le5J97BwPznHcpwma9Cj",
  "key24": "3i7kySesWsqphttMEop7pbUr2BrXyr8CQQZP8qAdjEaHtzyXt5WLvFC8o6DhMG7pKDceZBUAXg3jei96qnDm2zu7",
  "key25": "5TTsK2mnUZCEibeQumNiTwydcb8cqhzrkwXQbRpRGRN2wBUkwygErDKxMVicf4XZTeugWbEMneWzqezuD5eAWr65",
  "key26": "2iNRfXVEvkHWbUHebRhh5UpZ16u92Yd8ULbDkquJwEjcodzoF4hvQg5bACpBMagAD6TktAbfgDA1fAWFwfWhGKY3",
  "key27": "JjVVnDzJVXLw6A5KkL3gn76RaYSaFvj4NfkyNXBCDFF5CeVnDsMRCh4rkFw5j7k66WctJ9cPQz4khX5ZJiQgFs3",
  "key28": "Eo9XtZ3UebmXfAQ35XpBT1EU5FTgX4wyTihqZcevdyF8Kjcu6np2aKUMQ8oLZDW116wFqGkZWk9pB64AuY8gCc3",
  "key29": "QiorTxH74sbCzJcz6UxmcWPqXzuihjoVgCTMAoZyZFREJ9Epi43BKx2hiXPXXReA8jA4gaqpU6aCPdTTiVb2bzo",
  "key30": "5Jqet9mgEDJhyEdpQYhcipi3MXbGknzHLLYQyDr5Xb5ijkedPzNX76fq53GFdkLH6H52ZzsJHgApAaeyDx6yw3RE",
  "key31": "35RQNypjCF7gdNyUQ88g2ABaNrrriYrtVpGu3fkV95DLjpfyH1tdiMENZewiQqc2KoW1jRiEdkvTQ31ssLTeEApx",
  "key32": "5aegNkxrW1cQ78aaKbEYfdUK1bBVFqZjVJuXELgVkFSvMz5XSEhukpLRSKwCMexp7HW8sJyFdcPRDApdXibuE1zJ"
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
