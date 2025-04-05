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
    "5B3Kbd96CKV1d3tHToTBucyprqPEXHssdJnrqym8mmFCiSFWj7yNacT1md8krQ61nPG3vfXxTB55HnYWGh8q1Vzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h1aGWMYocmTb9uyAf7XABbiXWdonw14MQCWaTcHvU2Um1TtHTBU9ZQ1CS7DjkSV3w2qe6nSHTDjDUTWdvcSYRFs",
  "key1": "dRXJz6cjXa39VkqkUVENzvGU7ufpH7u6UrosKtbHHdKvAESsABML7hbBRCmRMSa1JZzXL7QTbhFxg97D1Sp1FYx",
  "key2": "wuh4mW5uWefmWCACHM5xJuKMbihfHvyhcDrdrdHNcUYjDW7QxAsfGDEdXkCXap7yPZjxTXPLs4HdDernXdiv6MW",
  "key3": "4V1JaXXyK4xGkY9duWV7aDvY7ZCNxrsw84nCW1K4vgDPHcSt9bCP8s8sEMktXS7YqShacytJaEUepPK4jAcQTFkp",
  "key4": "NgMkoBjibqh3rUHmvQ9jq8DKNRY7o6xQQoEmmbvYD3pn1e6xWBgmYyBf4dTgwFpqjTrNCFnPfsDWA8ecDoa1fkG",
  "key5": "2uKKLPLfj6QFKcr9W54tRrrFSPvnTVtZSBBGS2staNLjXurSa4evJDdqkbfJPxZzvhcHumM7Wz7bRhvchgWmNSri",
  "key6": "5nn9jTHYaNEzhVMVF4KUbiNR771dn5Rcbwi4X6gq4dwjfdfT6jdfuUhzDvHanz8vg6XhW76jcHHU2KBLPQGYpR6F",
  "key7": "3j9Gc2Ho44BJSnR9SoJR855KQ4se8E6oa4ZpEEo6NSpZgdvyokDvG5ANB6k4MWjz3Ux3TtXLPgm98Jwm3edbkRqB",
  "key8": "5vhLjA2rGppQDU65hjA8XTcsAy634RsseAXh5utGhzkmr9D6Rxq9vqk3Rhw4a9K1tyZPTMK2MuzbAubJkBftuQqz",
  "key9": "2J2oFH8V1Q6AzktvmLEenjhLcPjdhJWDE8WQQmXdiXnQvC2NHdf7kJrE2KbTw1kMi8P7UNYTKDuVPwYZizbY6wSC",
  "key10": "5tPe6RmzpGFRQ2jK6CWWiSLRqZ9p9MZWRSNMa9u7M4c3VJMGoeAgrSPsEaqroBTz7TcTx4udKKajstdAexPBcNJv",
  "key11": "6687qmtadjgb5ANxr7D9buYiD1z843verrvsyV6MuA2Y4YXEhNL5ZRC92v4TE9gacFzNPf6XdmXxRTFXiAi2gFeS",
  "key12": "3pJYaPFhKAP7k5ojfGtAMEJTmtBWVvByKuWyLLW4g12wtpSvN3fyYQX8JLwALDefpCGKrVCdGgsKFW4nGPxetfWB",
  "key13": "43k7iids3HK1XcAyTv5xXkDWqaDdGCmqXLdtcirkk15HH9tEkdkVaAUSgBjYnnniwdpAKUxMXb6iWdfg9MV9FSYL",
  "key14": "2CH12z8HRaMC3QzoAfigGMSZDPidokzR6erqKXSbTsvEgWBXbsRaZFc5sgkJWiT6YBQHAhRwBPrgdPaobexhyTxe",
  "key15": "4ttMkcZj6hcCG1Dty3dRU66NRjUBjid9p2wdz5xLM3bFT3L1CjwhJuHzT5mow36xmGy7zGE46tZJvMbVx9F4P9iH",
  "key16": "3tL1dxEB94UC9HszJYe4r1XXc4VsCtKHZQtMRYKHH7vy8TxgNhmWrsFQC4vUqLKiBSQGhAvNxTQoTdfrYgZjPGWF",
  "key17": "3RoC4bGpM1tsKV6Zf3srvz8DT34oZuxKVWvgV1oxWrAKmY6eMKT1kAvuhvVRTbQrrn4wPnuk8vMEZu5gN2sLb3dz",
  "key18": "3Uku6k7mrAcQYo8bdcWAxJc5sRu7NYnQrJHyQf8aazrWxPVEvLiosZgWoirMuE7Wg2C1aRurzHK8JLVqwS2UoKCg",
  "key19": "33z8QvczSp8NPE256yXiR87gMZBVHdsb9SZ8JKiS9SCv6gDWvyEeoL7sVDoapqL9F17u2CTaLGsy2wNnGeCoY58v",
  "key20": "amXeAMAPer4LCSdumFiuQcz5UYynvAxsjyqP7vT9tTSJZTd5QSmLiWAKwoHc9RH5PwTgfi87ndK7F7JrDf3UKzV",
  "key21": "5HNu9rduPWKeeKAkVFcMf8i9t7HyfUx6AWg6QQPUPE6q6DdnUTB9nYKeZxy6LBGmYuoUEaSAsMtocyxpcPjnc8t5",
  "key22": "3snBJo2x62TvTqrALko9R5aQ3WD32GtqAS8JgWJhsWgnm4yAgb1JdQSMzt4yJSnyizRdReWVVBuRzm2PNFP6g9Z6",
  "key23": "5T7pqMPhFbwjjVQ6vbN4FTwjhVihPKmxqfDMBsPBjVKKErM6NTyMFiqX3AQuB1XcTHJsHQTsY6v9xCKktN4dRkvP",
  "key24": "5YWJJ67wxLvc3u3iivw3LPnhZwnXuFhDgjer4NKcFzRbggmBLUG8NJF2z6Mmor33PqPWwWTDVpBNM8wHPz5sR98T",
  "key25": "3HgD4W63LwLnpgNEovRZXqZKWJX993ZwwVGSX6eyKtCUoqWuHkjaUHEopbC7eKkpVwgaz7vfjDiseA4VYK89pGbh",
  "key26": "so9DRrUdDfvXH14bRqBaQL72hk8cRpuG5XQPAqxZ5JJgfdhNGZSmVdpiFFUNg3sm2TajA5aWNaEwShhxVMN3THx",
  "key27": "4AgSdL4WUDg8N7onxTMh1KW8HfCzMoDrpgazJDEJZxVfyXTRWqWhPEALkw7rzprA8vtFWADHY7ktQTibSgNvvdfk",
  "key28": "4GamVCAAau27F6CukFFU54bf5QqGD8Z25jntgGfS7WtUkcS92nZ1roUw3bzRz6ixZGggwLMvsMTwwXDZsM3nVeRF"
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
