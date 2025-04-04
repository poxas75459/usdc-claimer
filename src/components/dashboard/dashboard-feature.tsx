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
    "55ripLJVo5iNP237Xw6Rpfj6T6H6xR86QYYtoc7K5bWaC9tfzR5yzDPgGKaXrVp69YunH266ZhdUhkedGmkS5N27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MjrRdBePW3ANAcmRn9WL8p1fYzkMjvhsrQNuwoovpKHqB4CYkNXbSPWuBRBqNS2k6cQFUmD283mysRgkWL23X7b",
  "key1": "aCDjehWZgqKu3KrVU91qwrEbeBvaK6mTovwP4kxBD2qMaz5AU2csCQLPvHMk1q6dHLUc7kxA9wh5hiT6GXrsnZ2",
  "key2": "2BDQXvzwxdMYAU47qGfJbQWpCzb7i1yohrsYaoPRG8rSyLeu241nThQ2MRy7ojcQmvLd8WBf7nLLwEDrNDSvegkk",
  "key3": "4sjk1vyi8vQiiKrcFNbaYdrHJV5aVuEqSQAYx1PvERwy2e13JYKrCdGrouKeNcLYMRMm5D7S94UuzzGNsR8ShTUz",
  "key4": "5VJPiS6wE1j9LbxysWFWGqVBYE8X8ZpSRv87LjJLJUBe5QAorGY13xXe3MdWVeburzoRnjSNwBdjPUJYJUksvYU1",
  "key5": "5hBMatYbCXACkTqYEANdjsEdLsmEPTD9R9EbbGZz4HoucMHvATx8k2v3wAHhcDKzvfSTuozFPp2t2yDxfKRd88nd",
  "key6": "22i2qiPCLsX2wBQrTmX7sFpHkTpnjNqVCvkm8oo57S5E6TbMFktA2ZR9r1fU49n7Wt2L6z9eB9Ebq29xUH1pNj6U",
  "key7": "2cP14rQRSxMGBGVA6yU9FfFE5QWrfqJ6s2PiWxESn5wFRY6p2EtTTws7FRUWQ6cSpDXv37tK9fPJNhzc3RAH279b",
  "key8": "2MJJzGdVfafVSCN8kBHGKWnAExLcfDcBz9bv3fCVyk1H15ddBETcx5rQJtjgU7vbxJZGYmaHUnwAo8YWfFZzRPnz",
  "key9": "5XiyusSXcd7TcMwEuQsWLikGFzZFseKNHpViVLT6uNRRwSmTXgiVv9zUHWVD7RzS5NcsjDywTBPMaZjPfHkdXrTo",
  "key10": "fwSjyHCBUgvhZnwrFuUWBBzJqKjYX96dMmJvUit7z8Ek8TDK5vXGPKukzBBhTqv1TrwhBEp3Bpu9zFWxSMhq55p",
  "key11": "9RH99RCfJ2G8mUaE1GMBAZjCJyfYgDngCNEpK3JS5phE6ocmRuvUudLGipq4rpbQo1Jif8GGy5aMseQsEHZxU2D",
  "key12": "u6ogkXZmUf8iSKLWD4Hf5KWemZ1uXjYSFu91hVEgR4pmRCJeUgom8ZhR2tnT58RjAtC9FxriiUhbir4t6QEBUyP",
  "key13": "4dMJQSRW9CZqVmK98CGJHmeLMDJL86HBeSBrPifzNqYVgy3FRiggpBpsbYZAXCs18a7zECBhwH2GFtNR7Lzs1a7j",
  "key14": "GtQ3JLbVDTvvaf1AGk5TgqsDADtw15iab5EkN3mCNas2HrRYeXPrdbGyitop57SeYqTchvYHtKWRgtoemQcg89y",
  "key15": "2LG9rTJbL7XZ4fVHaHt6yGKBEhwkrXv661h54v2rWHeQ2jqRLZ2BTm51HhQufjgPCbegHdDTNLsjNbHaqJqKHzud",
  "key16": "3CCmP7tKLCcT3F3PuykpVdHFoeuoAm4EtBd4iGopEXEnr51th89kVtPbz96ogLA1EXMeSbnR4Nm2N55UkdVtPSGe",
  "key17": "3b7HGgiosgL2kNQ2vT39qE3hteribozNsCeY1TzSThZtnUKKxBSttFkC49ZCuHEL6ueiKPsLXg2bTLgDRamiWNyQ",
  "key18": "U9GCD8wjYyUs4xExpwkUTgNcyeaZn3c7xFEpgsK8wjfLNpPhyrBQs43Krr5tDCnbNuooaDEzi8LGYAzLx1d4Phf",
  "key19": "qSs3ejo1jo4j6tzT2Q1HdYS3BURHctPP8PSCSYxAfPj2E1HdPmXj4D7y89mH3TWFQXjzwctVDCLHXAez41qMWkR",
  "key20": "4ETWjWX47hPVKoQz6Uc4FgHmvVWQnQuGAmyEDTXcujG29zqiebLtiYXv8hmZjJi9rHv6b7SSAc562w5L4XjM5NHH",
  "key21": "5mCM6fxD5r98TgbnGKCowec4DPiWeEn7nrsYbN5xoBK1RdtMk77vYaU8nWpjwvtRdhwZrLe2ELjh66b7NuabGema",
  "key22": "28AChAhe3pQPNBqd4DYT4T2PbvULj3qcS4yW18RG9cwXY7WGSRGCCVaMbFUrgBk6qBHfyYJbcuqJwf4N1LVLRKae",
  "key23": "3CXZBtB2NZfCNjBqbfW1GdECJu217qPVERpvEucSkeV5m5Qa1kqc4YHuezHALbEGv7hXfQYrp1jbibgQsbKm4UWj",
  "key24": "3PoF4hhofj6mG6sY2GVf4Bst1KYQPD5NsHet6cs8THqP5X1H9nkfv62L2X3ZhJ6B5AGs1oe2UemQAtSr8cCf8sBP",
  "key25": "Prchm1cAhRGka8uDAqatPB1o7Jd29hm3QrnGjVFQsdWZPZVTWsjfcqYNSFN98dYwwRGBVStviUsrysnYhAHdBs4"
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
