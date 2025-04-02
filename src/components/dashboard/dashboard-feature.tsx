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
    "5NwaPUHpK1abi9LoJnyPyDCtekZMnDSf2N9YJWYh5Zfto3RmnbbC3qmjHjoDaXhw1AX7jxwQKUekgU3ifU9YdTT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RW5VeSNofuNFp19tP58BAZ6QgoyWio9T1Tn3RPWPq9W2vhn2viC7xvyTDXE7WqvxK9obDF9PxURSH3nEGJRH46c",
  "key1": "5tNBmkszQMJN8aSW7LdVCct6Se9REDg7LKvabhWoygQFY12evXZ97v6AiPr5QG23vYSSY267M9wnQxoVpPweHEK8",
  "key2": "7pWCB8NVQpRnEZ5qhdXL1JuvmDY1PNLcy2RBfwKkof4ciX3gWu88w6kWMTiuV5ZbusMUHqJSm4WkYXroBYMwi6L",
  "key3": "4ocqXLtwhp4CW6TmEH8sfLHvB3gaDVoRBm419huiTiTA8yGjSsaMwK9twyNWkgYm6iyPTdXDBCQ274VcYLrZwL2F",
  "key4": "2Xtsw37itDcSHiKUWVwE6aS88KnpAdAfaB1BSBQ8Fak5CsEdXc3qu4ZdFph4rBnd9UEwtwpy1Ag9xhaefkPFRwhe",
  "key5": "2hmvRWQr2NhJPtFuYsXU5JVFuvjAb8omKuCqRpqpz2SdGJwFPFiFhpP11m3b5Tc928o1t6bcmcrmXqt4dnFYniJR",
  "key6": "zyZuKSnxQYq8e1MWtXnZnq78czVdDeDXAtQ8xQEQXGDNHTb3vnCK6kMifNg96AfjEC6d8KxRy9GFsDNctddFVWe",
  "key7": "3Yz7s27twZQG6HtDAk4mu5E79ajDoKxbxtu2hJjhSBKpzaFBAGANZmeAPbaQNuFBxfG8RCJh8T334WfdjHyMcofk",
  "key8": "2UjaeyD1AuWYNFbxVEXQxq8D2gcnaicc9p5tTaVN2n7owwvvPtKUCTKeqACSy7nj8n2DKtNf7b5rfjKBmHJDvVn5",
  "key9": "5kxVuzwCKaNiCZrpECcz46nHAAtX8KwrhrYrUedKRmGoZqWMWhUaXv1iwCBx5W7CpJe75v74YnwEqWPAQBeoz797",
  "key10": "44bkgyoQBYqGVAL1sTJFGw6Ub1qfdaDqfV9XeTPAgFgvnYQMAcUfJtFKLDux7jrqrzD5ThoPwXCf2jQMaSd1ynBx",
  "key11": "29MGLQKADiJZ9jHDDDg8Gem8BDpcTkZ7T3DvML8ZVNLPGbxEUZLvAc4BJaXQLAV5Hww1nf4HAoNLCJSatdNzs4CK",
  "key12": "5hQAexYFHZPf8sRpuwSsBmZmX3UekkYDr6YmULkPB978phrugtKMZQBBsha3UioSEKqGLDFNfbj8xncyKi33yeLf",
  "key13": "46mQLx3nyTPKcgV2QRLqnp7VnNXmAhED9NSq2vhQ5pZFUrUvcn8CAaBY8wiF2A84u9fWsU3Aswqrc5CJ7VGvCr8Y",
  "key14": "5tod9qZHhihxbB65Bq5VfytHehxJ6KQcficnT6ebR9r3inLZVKi5bNDd6RkXQqTL45kDTzBRRFRHYL5JCqDiM32X",
  "key15": "aPVg2E8D4XqxJmizWPs6YxoxDQExTmmrM331nhE4atCEfrZ19fmpdeNpEYDwXgdfStX4pCw2iLcBu45WFWWGUrP",
  "key16": "FrHW5JkC8ajexjBsNJzWBrbfteJqiemv3ddSACcQD1oAHS1jKtcDy9StmD492pSCdVeBe1Kh9yw6Lu3fgdDLWED",
  "key17": "2Tr4ADG3dKNLpqDztp8n7xUz5GdPpqaEkQuHt1DZRPCU5KpQdhsiomyVG3kXZ7VWPdL2tWGm7zaNfUJ2fV1mySFv",
  "key18": "3WvmUvDqHteLjLGnW4sKWyKZHh8R5rcfXK6yuHNVgV9rqsMseJKASfdFi9Qzs79AoPkeFR4qiu7K3Cc7AiFjebV9",
  "key19": "3gRdZ9M2LtkozD9yge8sYV62jGjLFjRFuqNoaCZhdP1BTTzEY76qP6CBQGRheBor2aKuhhzzHJ6726GTJQjn7WwA",
  "key20": "AuUCq8Zh2SxC3DU6Smv9tKBmsq9bWiYn6vkGsJpUtcrcrJxKvf7cf5ai4Ldww8XfocxZ2kKgwrFyzLEMGMv7tXZ",
  "key21": "5ciuGaFNAV6F9JGkDqNwRN7fFToCAuV3viA6h8YomqbmU753HLkxX5EooEenB8FAaPDA4AnEtqbwmoPxW3GoBotH",
  "key22": "3iyz4Lc9qacF8j6hxRThq6j6PMLrALNURMjm4vZi6SzE7ycFL3xdHiCCyajPm8uEn4zSA1aeCRP94KwNfBAVPhyS",
  "key23": "5Wvhmw8iiU6QEQHFHjHrfKJtnQ7Be5PTZLKhtAkJe1zauLASUpiqUTiJT2quEYg1zoyCN6gNPN7bnDxAdU1yGUru",
  "key24": "41CqAoQFNo84CrH9rwFdgNXNy5yVyEF6NqBcD3bejDaeoxUdEwvwzuzpUXJ4mpy8dzyHLhnMHqU8gdeAZFoCw3ht",
  "key25": "4gayPEdc1vBaZriMc6ahgPYJUeVZ3SS4T8ecd35QwuCBz8UWbLzqqZyRQApzhUtqypsukusfZV1H3KWyfKJTy9kh",
  "key26": "3bxAjyGMo14qKHnJw2PfdEQrvmTaLCN6RsuAzV92ySCUbujs2xoN19JfEuurN2Ym7vQMGQAtgiVu2ebNapuTu1oZ",
  "key27": "5BrPjg1EhfWnv26FJhcGs78ronRdDiSKqE7TcYWq4PGMHc8pYcgu5knGsiS7J5CmJ5YtKxBkZJdxX9t2SguJxdJm",
  "key28": "3Dk56KipBUuSRng6U5QoUQkR92B32bZhccdz5EgNab9NVXUh4AMyKCSMXeRwiJbjABqPxERVxFSyWF3UCkSQGwk4",
  "key29": "4ktFMdSQAAYgoSZUt7WfWPGeBGuYkJp5QV5GW3sf7zPQr3ZoeXG8qjZEeNr8aR31b7ZLwGbF1dCjovwJcCKiC9hB",
  "key30": "4HsY3XWdsYFsXTNyS8csS7n5QWHYSAQPRfEJX3AQ2Y9wpMHn5p2fJyrqE57qVXhD2tFQcZGbZqNVSCN5FCsbSDLi",
  "key31": "5aT1zyVFuBwaY3JGhn3MXF7jjNhjGSbBCfW2oDpJN7myRXaHWHWzSmeQyVDS6meWJqfdefJy9FhsREiATjnPBuXf"
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
