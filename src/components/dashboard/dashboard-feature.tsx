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
    "3dCEo4T7EuHYRsjJyzD8n4LWo9z5KTnuE6754Mk7D5abWWhGdwSgTjf7Zergb4YrpSCexAiCugMybLJzaxnMiHoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EEqK73xuPDpd8eefWftTb9cWkhD1jUoTHmojANnnEVjtJwbr33D4LUqd8uAmBvVWcfgxtCgASi3gQetLUiC4Fxa",
  "key1": "496PGSRArUxG7u9iEtRDHYPYGdra4V7yAbeJ3jXDFCcJgW1RoDDaxQ6XMvGAfZksFSGsygXiRngZ5FSdGgzCsyum",
  "key2": "5tBW7xYuT7qUJsVzQN9YcEGVc4jxkH3YJokQsqPKNWq3TG6QyTk3Hmpno6VgzxC1sT6TnMgR6rBcoqE7T8v8ZyqY",
  "key3": "39tiGVQtdcouTRn4PrVbPxVYW6nyJg1CR8k37V81xExmgACou8fcvAgLcs9TkSXHCRtWvhrPDZmfahk6s12qp9bH",
  "key4": "5Emgsn2xR3VQycxLhufz414BdUhLRxd6MRgby6W4gMZMvdwGEPu9CXMoK7JQLoDoNqF6Z32HQAcZ8djxa3XDSZte",
  "key5": "4DM1dNpQWcP5geqbo1wiHcTCWVj84Kbi9FUA3cZaCdzBv294s5CZYmZu8wJMzqF18b6U2i2YbYxb9Rp7Jh3Km9Me",
  "key6": "5zu87UhktaLTjUvBSXai9Bd2RDQQMsF5U7YXiC76nWUP5RX3U21tkyb3AmsbGHKfquKWr7AzccNKeSw3bEHABRF5",
  "key7": "4Z9Fy33yCYp7BBUkkcHNKMG27GUjKcq4wAx3qgARRdTnk4YTGszThSBdZ6ubpiP88YUwsQDr7eKD8a254D2joP27",
  "key8": "4kLYjXLLZfFhb1Qmr69rf3dddWgTe5Tv6ipZAXrbzyLsi7Xnxn4d457xBzcCwfgZRsQrQguf1fDWq2hwq2HNtKzR",
  "key9": "3f92j8sD551RnGLKFwGPaTUoJ7mD5cfPzbyDdWSaHNbJ72yiNTuTfey2G1H8HceXiuS3AJgdz3Bz76FtdsJQaqqg",
  "key10": "4Cv4bGLrZ2Zsk5AoQocLBrFvFTgsZ4aZ6MKCu364NZqkf1sNBkxXoCubmAzwh3oCB3cmj4xwEZhftiBnpkCBKcPj",
  "key11": "5e7qtCidUQTjeykJHPgSPn1ZoNwYXtCGwUg7YnMLHQfqPeTD73xKwkgraUaeYWsqsdCPKvaBApfVPrkbczTzKcNP",
  "key12": "55irP92Rh8d1QyZa3pti9fpbzkeEppD6xkJBXxmUxv5jbWrWj5Dn1otGSWAW2LRfTCdAGe1HsL2HH3pYZgQbWDHe",
  "key13": "G8Kto2jb6eLRnG1N5THpedqVaGSgC32QYYGmcNCXg22c6Z5jGmho5wFCZySUyVHff1ijmoqzj6fDZzyWd1KUhWS",
  "key14": "63tndP7PpynQ9X24U2n7ja8yKXBJ82Vt3wAWkaofVHA3uJtUd1Xg9xkqM7eoKyuZcW7nMw2zYNmxdWxpSqbQs8u3",
  "key15": "5eJK7YySJV4yCQU9GaCEzjNKEXkVG6EDBCxY3YWCwaVM42nyn66LMWDjSF3RDUTonrZYhfhdVjPsJxeZ8xRLb9dL",
  "key16": "5P6m1DyYCupXDggsv4Xouu39LRpyJK8D1kk5dau7ayEfmXfP9bAwkK9CLfyBHrhdK2nMkTDXxAKz9HyqUKPEHNxn",
  "key17": "2pfVgv2q5Yg35cGo1YPEi5dZ8VxKLJ9NJVAbfK3SWZfDp4YWwuPNZdf5JENd3QnLq5dy14uf1mhAku3Npg5aZeA",
  "key18": "YYVMHmAu3kFpTQYEuf1ijCB4qJyGHVEKZ4L4iXLs7Tsn25orxE1Cg3JpRKoUswwZbBVuK6QURfGf6NuvhLaRt9t",
  "key19": "37NrHcc56TAVcwJ82SQXVKyPntGPUKqCRTsdJNE33kUfGo2j2AqiJRKfBYC72nKTGgSk5QsnBWJ267mL98pBAqvC",
  "key20": "3eBfPhqgxrrYQXdcsNbPg5eFrzPmWPScD74tUozxBsTGt6EsBhJAiB58X1Fvy2kFVN6L3YPzhnUJ5cwRqL5k8xT",
  "key21": "24f5RwKR6erVyrJLMKrgxidULD1JPWqCjWerrmBkdmexSKdmqkKN1481dT7NwUx8xQLTbfoayGWcd7UTyyWkzkVo",
  "key22": "62Byd7NDXGVCBEvXGPEdJmKAdbWB9cBYprGknruCd4x3qCL7PrjrtUbdVBXQddbCtrBwynewfaxd4VWFXVDaWova",
  "key23": "p6xPDKZxowiaKesrFQ3WVgDFExR8deMRNd1xRu5UZTiratSV2fSUJWiHmKN2yJNX8EeVuw3KPoDwzVbcFvJa4Zk",
  "key24": "44sFoWPcsHqwnLsqYKLjpcnaVGgsLPnFwvYxzxRa5eM3ZYoXyTUR5uweFW5SP7zNf2vx7pg1AYXyu5fYief7cANB",
  "key25": "28fEJir6KjZa9usGtFDCMCU7twr72w31R2iqfkuNXzTZzraoutHRtLuhSgWe3Ze2YEQ9uJuHdj7EUGyRoVcaRMAu",
  "key26": "3uPW1XDvP3YimrCQTFwX39KjJc2zyuQgjmsoB9by1gVLkprQ9L6vKh7QddZFgJs6X2NP8WYkQb5cHXoVDhAz7JXi",
  "key27": "4wwZTFpAtS3Q748dSAD9dG1EmwzefwYrefxL4E6Hsps66QwFzjc9dGLgLZBuqtiyE3jtcMFS3Gj3ZKTw1HFgMwJ5",
  "key28": "qPYcUNh5xMMYycHzNT4cnZR3X2fR6oDNDqrDcwLw3JkR1sBturoam7zuPWrrwFNrYXDEfd4AEowzQ5V6brtrmfC",
  "key29": "254HoyaVwbW4759hX8NZXDWfrVQ2nByvfDr6U5GnJ2PHdmJ4oHN23yu91S4wrZuej56SpwcDeT82VDjZkAAp1PS2",
  "key30": "KtzUCzTbANUGqXNayoEvhFAuhqu61FMQBjhKCtNwA2f6gyHApxcu9apEMuxgnnaD6ynZiQRHPh9AtLdzK7MHCKR",
  "key31": "qKxmpqa9bfAPpeH1xtDSDdzqq6VK52DqcmdQwzjAPjKjjAHQJHg39nAkTG4RcuZ1hYu5Zpd4B9bPxwGn4Bu7qWY",
  "key32": "5pp6sivEzUir4tbju7LpmifhqtcHFNboHVZDKxASrvgrjVqffHwPkukkpzMUb1HamDcnyxLmsw3Dk4ykmcWn25h5"
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
