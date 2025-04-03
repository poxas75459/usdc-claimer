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
    "3DDsrmJQQsWAaGPe95MCKWCDw7Vk8gKmE42HxnwGGJm46DFEJ3e3oyCu1KxNi6eDNefVBHtkHKLmqkumgem2MJza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vkPba5mxismz8zQo5mGGNACZSP7ftDyR6pfdZxUxGhT52mwF3yQCDxBdAaMCsKkno8LgF1zFJjLDocYmAuusqHd",
  "key1": "5MSyEQxuMrQKbZVqFjxRxUKSdDyYLv1XfiwCz6in86SzR15nYFPmrXAgQW1uqQodWsH7kt4aNGdTnwsP4RVdeNDN",
  "key2": "yaAov7VQX6HmCi3G8hp1jdxWBWZw8m9fX5s1nv6DEB5aZbpnCMBDx8yCPEfsZbmRixqpicHxvA4W4zMrQbdSEPa",
  "key3": "67P56PLe7Ynh7RRvvP4gd4SS6fk4M7mYod84FQPnPqZBgxgbrrBApoqoLBYKvHoYQ9XU14RQCKoTEEXMxJ3eZ9Fy",
  "key4": "4sFosd88i4g6mSsTx3McRJwHFjnYpztPXugZVBSbt9JUo5BXHnCvpH2HPQrAvqSzup8CQb2AtQt2dg8Xoey5ZgVt",
  "key5": "qqp7YVwm7HBxpc2PywPrFrczSsUzXn7ikejXRm2skJqVxG4t2hX9JX69hDJDQaT1FtM1m996d6sQ7v4QogzGno9",
  "key6": "25oChBN2VZZpZ3uqfKEYy7tMJWUHpSAdURBJw7su3UJwYeeS2SEpy8pfFCFhReZWwFyCb6h2VdkggXQXm7zLAquv",
  "key7": "AYr5Tc4D6VCGpsJjmtDLchFcVjKPGsXNbbCCzCJZUjKq17yum6Ztg5iydSkWLZRyYbvghhD6LMumkwmY5HMN4aQ",
  "key8": "5k3upUoxZGfjsM7eZXi8FvXn5Vrnk9nPtfVdnZYawqPMUdbzRJvzYSKxyGBAf6QtTt4fqqCNp5TMeAATkXuDJpq9",
  "key9": "dUa7fmQu4cK34tbdp65E7QjJhxHPmWKck2HWLF3K3iJysX3Qx5SdUT9FSfqTubHNDnQJbFqncekyH11dMgMfPF8",
  "key10": "5GBQA2TtQU6GqABAoTAr3Q52cqqgXqe3onPWB9m7TbhBiNyaSTVAmRyvMuB4uskZrtzDNCuaP8a5GiUedc5AnebU",
  "key11": "6LVCkVuPtH45SswPh7VcT5dEyRZyuarrTKZTn5QLp3sUJgnCiESeUsVuW1qcCURyVNPLU26C3J6PYHiwdkf2AWE",
  "key12": "2exJDcCkKF5fjp66zFUAWYRcF488uRkXgStGYFvBPTDpMNWrDpf9fm9Qi1yf6jWgtMTPgRvY2HYEijEiKk7WN27d",
  "key13": "445VQdwA9uy62ML1LZDBtkAp1g5EzVKha9CqKxL8Q9dTkPpMUMja4ZaQ6osbvhDAyaz1x7nS66CtzDaWg2VnHMch",
  "key14": "2fh6LrR1VyR8B5Xj8iBttmtcAKabXB2rZFbAhCxd7rBJQez7kHmaXYVmUGzFc474bMjAS6AtbKtQs1rUQ29zkgL2",
  "key15": "3pPBg8sQHb66LrZVmrKQ9ASKDHUobHy4ZigfMYbApd5EVWJCxg1n7aVQkrcaqtYkaju6Z22H1zXEDxtbM7YRM88d",
  "key16": "5EpsNFPXt5pPkw7u42bEbha4EZREUViz8HNzEn4kdzu1dXZizHnP7r43U8EPabjzZEaFsi7aYkjJwNNuQPXai3Zc",
  "key17": "547qbrHmwEgGq2LL3pSfcJi13UeM1e8Scgqe6XjcqXGsQwcFXiq2STHvbKxF5P8UNVYJwyAkfcMVoJguo6BMHhiH",
  "key18": "3EZ9erCZU5VHhja3oNFha9uQTz2PR3CqtLVjENBB7KWpHjnNNvdyTWWDRp8Wz29x3osyFsWxe4KohAeGjW6MxfCG",
  "key19": "CytjyGgbn8Px59P5psb36arryWBir78JGto3yxpmE2Hd8JSbLbHF4NsM88678z9k524qnssTaApP2vj3rHHp5rf",
  "key20": "cqdjBGyMVSmRAqfWa2M8Tbv1gAuvJi5mnemVk7s1tuZqssGTQjr3s6pxDpSV1UT3ACL1BmAoNbbC9B1DBGUFTtS",
  "key21": "3E4abq2S4EtMf5N8yGGDYyjS2GQ7rGShkmEE4CQAcTyXJ4JxTa6VSqQC3MatED6kqjAjDNQkZFKDnUuet4pennwj",
  "key22": "4b2ELtMCTxRz837CR9fND9L85etxGqi6tWUHm6oBFn7qrRsi19SaPUzHZyoc1uGXrE1ndkDQ5YnBgmbPH9KVDQ98",
  "key23": "3hNpc1an7CRng6RFimtTY1jqgfwNacff8hSmEkLK7VNVmTxrYaJA5CvsRUjdZLL1fzBWdiRJPCyCmYaMRtGpdtkD",
  "key24": "57MWujbjALjPnkhRgVxCRaZJixRVariCpMLucJxHJU6Fax6Q8eJLRPTia4Md1hCFeDQb4nfg4gp6ycsLhzBRo1cF"
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
