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
    "3ZkW1Jam5MxXLYZEFkvmhA5K7nMPRVvhM8BARxpb6iGK3Bcmvm87UjQHw8GUub4Yj17MGEGXGApS1qeDPULqCSZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26eoF3UdV8aiK1HjpjNxtCqcQhY2Lasprj8orDXkMJ6pubkUxs6gDGrykgGCdiYq8ouaY6o1SBXk7Tkf1WAdreVs",
  "key1": "3p7cSrjUprkaEpgcvrvsPDWtbj9jEyFEfLCB5Hat1sTjqJoWqNk9vRrgNuwomfAqWatoAT8TwF5cT2Ud2L9FyjT6",
  "key2": "NUyntB4a41KBFpfbVwmiVm2MsESR3kroppUjcEE8wjpmUwUWQPVMvY9S7v1iKKvL1LvBgh9xEKASMussgJPDRxg",
  "key3": "F1hB5ySsVnGU3aKwtJerxfmTvysmyovEQHUREivE2C4yf8E5CftQhbTq92NBkn5zRauJG5d3uuTrrvGUhZzBxfW",
  "key4": "2LmrV5DVHJMP4t3Z7enwakd527QA3FRQqHKnMVebyE7oYc2jWCz7ZAPC6HCKvw46iBSZ4ogm2i623H8AZ9pDEn8R",
  "key5": "3AzHCVmyvSAYAvZdkDHrPXnHmfGGWeYJLDqkEcaaXRLqmY4GxRnz2uumSnVkceYAJ6SKHb61bPpP3zQorBcE6oEJ",
  "key6": "434DaVEwRxADTLDmtwHqxKQhAfDCv51WtuK4eV4TaNPQsAwX1YSLNY2zryafcdqBR93bFbvDRBsa4V9Rj1H72oEs",
  "key7": "2nBG2ZnLpMWBeyXQC9Y1P3xmeaiBRUh2xe1KHHtEnwBFeEkZrZyxkmgYU6T8NDxBhFsqAERSHDHCzbwT24seQLYo",
  "key8": "4p1nYKu5bNbYdnoJtEp4wRPqj36QgKbWCXgsvEXbgWYQyrMPmsLfk7ZrL6jeSFoFFgvWsDVxeorQAUPSwAYMnAzP",
  "key9": "2HLm3cFjfhFquJXM5MuV47zUoaCCeR3xr9Nm2L918Dug976axX6P8sbS4JmAz9ptdZ1Va9xGN9pBfJWhBw9NF89S",
  "key10": "34hqmiKeeSNCLDoU8x93AG18Tez65RsP5u7ki7bF7JnxxoRyKk4DT1yWE3GmG8NF1yFGuc2sVLZxDAoPwX4ko3eY",
  "key11": "2Qfveb2Rr1weFf7tMRqTckDbXdMWQf998FdXmbLoxasGDS6ryFYnu5A2TWLnLwyVtYjrjZcRvTQ4oBvFkchnDG7r",
  "key12": "4kSXipkFmEhhg3uwFUfcRnxjaybTqqSCR75TxkkjLDLA3GDj7UjGk6CVywNcYMboAa1psGbxBj9B2ztx8oKvFNk7",
  "key13": "4DEpfttGXwNcniFa65k7DAEmcwPE78oDqmBjwxjyd3dejmJLQCMuv8tnakdpQSWZFqTDGj1VqmjsebF9dXMsDweD",
  "key14": "3JP7rgPSrf5wD5XF1VKF9ZgG7vRWEYPiqfGxHKXBU1Gd1ibFZRE1Tf7WBE7vmisRb57nNWvUchCrXdi4npN7pPJ8",
  "key15": "23XXJYLLMLq5mDJEptQi6dW7ozqFCb5fYtm6haKjgueX8rd34LDZi4KyebXL8TLW6tQ68cytLgoomrgNC42X1a1v",
  "key16": "5iFuHWSM9ThjP7yGectUweitvzfWjMSkqo3o9w9xQdexuWEvtkyPWVSL7EGiLVPz15hkkfS5wmzyQ9uyk3RZhQV7",
  "key17": "94WivjweUWHvpqxdYRY8KZEBwGqxTbCV4BNSrSfgSBtgw4jVm422JBPNRzY9ganijCNGcVbDxLaeoJb7tMrQ1xA",
  "key18": "3pJMfpH18HEAjB1nQveCoCzEP3qLSacL8fHx7WqpUkb7jbZv4NtYvyvVZoHX2kUsYCHh7KiqJ427RuxTxFndfT58",
  "key19": "3by1v2ALZUjF3a6tVYq6DWU7rjHu1NFxEPQSA65SXTr6zsvcuEXTZ9mWZZEpjEmqQMtB98ifnE4oRjamKV36fsu4",
  "key20": "4bA6qKpnhtxkRCb8tfXVNVd1gicNw766dt2R87qDyo8pJUEtgtqbKASa2bHeGxjD5syZy3KsYkz9f7oke9z59jWM",
  "key21": "3VSP6LP1tDvwCFHJuo5UGuynqepcEhKx9jbbUxRG854pHn7SEsiT198N1GVounVqF3d6o6VsfcZGHp38nxZTsmpX",
  "key22": "55bsNVt284GdoXh2ynPV7VE9Uzokqhayx9HKRZGuHGDqbHMPzHJcBbX1THpPYqSbAK1dqYD7TLfvVmj2hiWBtweB",
  "key23": "5UXAhvuG1o7bKqGuWWY4jpFCgusECTRyyrg829FnxXEjPUxJbR8Bh1A31fD1GYjKVhHyN5bteZgXWHFbWTgHsdd8",
  "key24": "2puNFtjEVoUpm7ZvbWSMkeecHv5oUpqZ6cArsDi8ofpFBsNUkUCYNnvDVvH3vgFo8KF4Fo6Dm1tDMWG5fShYX6LB",
  "key25": "4AgD1JHrwwVbDPWRTTcEwNeH8MZpBEAegWdF9MmeNyuPmt42qCfdMLJdNVQRqV9UFAX8A9Chr2ipqrw1ea1xahjz",
  "key26": "4gDWEtDGg6zJasgg47Xm8WNRP2FMB7MPDttoHQPFPJozjWbG3Z1ki2RzUK9aBwBNEmNsCvDZVXci6LEpvVWgntdN",
  "key27": "2LJmVvzyoX4jTTGjdVhM9nMVhmauLGy8pddcP2Ge79rPprncBnNeDqwnttj1WuzdWW8dxG32SFEa5oa5P1pvVBfa",
  "key28": "5eU834McKpaNU7nEZvayjufX3Qhj681kABaHqHKeqhDxdCNpXhXwoDgN6DSpyKjzAZGPn71xpWruqYdhunTKCbca",
  "key29": "4rkpcFQ8JYRrgNRETHSxESHUHi2CmVBq5FJdHWUGEze3XXtRjYD8A89d5oTMuqjHJVbsiSrepAtaAuthvLCQWsDU",
  "key30": "37xEepDhdcD9n4onZy5sQQZrU56fEgTRWYHFwGu71mKvw8iNskhkz2X5feGMXEFqLBZdNZMxEUP1z6yxBLqg5Tev",
  "key31": "3yFTjzoYiN6MSYFSiRyKUJDg7NN26KAsGU51qEae53TBAUmfKaSWjiJTQfULBAHy8tdjtFpvrpNQHjzULvKaFtJ1",
  "key32": "48WkSxbeBhnETbkzKXrUQKu8jDyPVZBY5KCmKgR4nDEWESTvfLxj3iq8XezWHjCA6cithnxNVgybfeE3N9hTsgF7",
  "key33": "4ctwp5Zw8X348nfNrLfmH4avn36gy18tGTV7DcqsRVT19qPQypSTL6dunwVadpef8QHmGWM5DT64bkBHzXn6E7mV",
  "key34": "5VHKrifYAF3VUmwqCBePZTkjWb8o14TrWVrhnqvkh8xTw4xLUZUNozaUMMPWPFX1CYVcUNFbNqBXYN866URuNsJs",
  "key35": "259JcnZNxFmUv32shcZU6dQTe48DPYB665TGBcTm68vXXcSGDuh5PhzWDDsYR9d1oZMAnKWNwq6iA3whd9MrmXwd",
  "key36": "587EKqTGRMyQhf839mVjVw74DFsfVrAJPfygqLpV6b4uqgifFybUQ7Bsy8MrCXSbotCmDQKH5BXgwrRts1yWvwnC",
  "key37": "4wCuyEsx8XABUVuB7RxEeQ8qbSUw7YkFuNczDLLP7tkWTtzJMsbSKgzabSJ1ALFAdmK25kVHuxhV2KtRquAzGq8X",
  "key38": "2XfYGMpF5oQkdqHKsRrbGo1Cvk5fL2Kquj3tpDeEJPxfTBnC78iEG5ojmjQf1e2biuKYJooQahXewQqvH4zM8YsN",
  "key39": "5yXfHLmRkbsdrrxzRADhMqELQ5TkAkhYy93DMkTaX9DnwrMoFuMKTsRuPRX7aXFPZXBobEhv3j2986SYNV3CoP13",
  "key40": "2fvYbP6WSBdhyQm14nz9CYfNG8xGjSnDqegyMb13287hX9WCsNDhop2L2sSDeUXQw37EpY4iiuSBR37khaPtsdDW",
  "key41": "3EsxaFxcFRMMWp9uVPy2HPVUiqQvTH4m7QDYcSyatNZMgTWW14T11tXwnkXg8NtVBhZWDYPLGt5xpL6ryWWC28mD",
  "key42": "4LdkpkSpbbyJSNAHWghQ7seFtaWakdUXa5rF4THwSB814tA9HNw8UZwywCrgFnAy7Hs6w2gb9d7KJcz8x1LXfcQ4",
  "key43": "5taNYsJb7Ux6Jgew1wGXS8bqfSQ4hNkovvhqaJDaP2QjSNxf3nRFf9BShZy1rBRbireYYqbzTTJ72Y3x9oiNtidK",
  "key44": "4pV2ApcCZFM3yn62gypCiaF4FABrC69TCEDpCJLVpGoDWbaCw1RHgbwTBfYf8Bz25uRRBsc5aJYRqBX5Dku7JRAu",
  "key45": "oEZ7ThiPZnxCqeMgMYEdAKPpc3TZQDemB2BXkCgghu6m9E7M84Myy5uiMAgjFbKuekG3tdTrY4dkwY4AHuUdaQT",
  "key46": "5Wk8zMKDU6sZ8r1r5ym4vbBJh9zMm7m5xGsabXPHJvwkqGtR3RV48WJMKPK3X9XTp1mCgoM8YRxKrLwB4BbKQfgF",
  "key47": "4DGkeb2ammP4UfVYzKoNFqMFpNv2fQz4pbp8tgCeNnG6qgHDgDywHMTJNAUD7eWzAe63xJtt3Xz2krJpRQA9rso4",
  "key48": "JKeimwexpex9sRyd4354NB3cfEgpAw51UF9aNT4qy8a5PycgfxNsYk2PWubo643fAjTpeKwi4kkt8NoVMpwhkV1",
  "key49": "5YPNYdawvSNCJaPTYceXHyBjF79gKWhoeL6HC5wVYdKCFjwribSyFYHsZFKLLnk5zDLe2caSaAsFwNkF4ARjSs3E"
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
