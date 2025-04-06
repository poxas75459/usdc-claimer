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
    "2rQPibdpCzJ8qQsN2PqVZMhqxYjtYmzHXkMamxiNMezNqGXYTMFdXvU2Uq6CUEJ7iCkAYsKVqEhvLtXWhRKiTWvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CLYfuJiK1D7yrwXdEbArAC3dgb2VjJQYkdAtjJcTpMAEHKojhFKHUV4LLBeWsyCfuECUJQ9SRWXYjid6ip5W3QV",
  "key1": "2fynkV4G527vf9W2C4VgxWphLk3Qvj9HsZuSt7kBdkEjGX5o916hdaFDi6TStTwwdzxkhnr3UAgMCmhoAr883q5K",
  "key2": "5XLYkPyURx36tLtuyeHpbG9RzyotvpXgtgeL3VaWWdz5iZABCpBogmJFugvctUBQePRAPfnhkG8DNM8MdWW7A8Y8",
  "key3": "3nmodtn2gDLcQ1DfAi9tMAqYtWHBo533tuFeC2pvbQph7cy3QVE1jreYB5RfXg554Sg2Kmy15QfBwjuX7y6NjMqv",
  "key4": "Ur1eDNgXbRCqJDJzW6jnJYj8dJjknewNC8A9L9vDnaV9RRDzeJTumKovPEzXvvKphJyJpH1P7bWww5a3y5qc8xG",
  "key5": "2eUuXGRZ1Pwe7JRQ3YVhm6voeBmiTet7wUk4xQGtUzXtYxZdQbp7z6SUofqQ9WrQjYc4zsQc6xLhW2yDSSWwydBG",
  "key6": "61bHEQjwKpy6Nv4mqgUdYba1V6ugAKMsf2MwExHQi1CZGYPooM4B4eEsHfx6Eyo22Wv2aCLDtde63WrxYXRDFEsY",
  "key7": "4h6UG83dq613ALPGH4nUdfommr8TjiBqSj4qgUh5qNUf1JnYyqqFYbxkQ7Hj5Qk6SagxjqA3yCKpqr1D3bEkWLhs",
  "key8": "23UdMZk1CaU7dWmgXH7wjzUaTnR7MRJTMcHEaAi4J9aBTQZruLGGmHm19ppygdzSZEXmotfeN4PLZd1DXdJ8Afew",
  "key9": "3AkP2dRFt3r5erRnPiPZgDaYg4aizcqm9dVgpDgpxCcKXRtxSkk7Z4S9vXMVmJH8bsckBamBg9hsiN7ZSCVgmR3r",
  "key10": "3d8wHpDRdSwUcZjFgpMgk2aT5G6rXK3nEC1hjrkyRNj8GiTpEdxW6zuhdCMSwNXjaBcTEVmc8o8Y77DGsfANJcgs",
  "key11": "5oC7jgQ884eDfvfBwSshSR8VhESnWnBZ72tqaeN1JHCZEo7csrTDDjqfDh6vfGcUdeqoBazpdmKJMcdn2y8GPSY",
  "key12": "4uYtr3JpzS2MbSMbYmX8i3qSBaUZ2MsxdKnSeZNtJMgeQUsCU3Mb3WyKF7iSRYynsuqKbotL2N5ekWorEa71xetz",
  "key13": "4fazjAq7GBoDRVvE2Td2F8rBcZdheXZ4qMNTk9A2NtBxKzBatbz6dHuwcHs4Cya8r49BKpdSe3wAHKLdg3Bt2iEu",
  "key14": "5bQzkn2HU5GYRU2hP9ADJWixJYWVVhuBLNmmj1yXXiuhPjpg5yaCh2kgJSWDw5qQffB82Q8KwrVKWjDkq5duyFMq",
  "key15": "67ksbHpk1cByzjesPL6FvLsxzgwRvrBjNAf6CeWskfhF2kxZRS4Kg7qpiUAmniijKeuTH7eeMyLTazaJ61XzdEXv",
  "key16": "37Cc9FTWrg4nfML7YBxSfZi9diCbTf4GeZ8rowqdr54nTDitGNUf8KaoRSP98sB4P9X626NAjQDfTUKu5kYLYoFV",
  "key17": "5dvDt1gxRReKhstuDvyJBF1sTQUxQXZ3PsLqxCjB4kQVppwtkZbxooyUZocAPwjKM4eTM7dXZprN6ictek7BAooV",
  "key18": "3xpAKDrTJ96JxsBTrpQTS9F6Kyjb8FwjMTHZKhciCZRfzMkDp7eNs2uRQjDeKAikMvGrwa9AYjSspnzvNCH2ArRu",
  "key19": "2i68mn2yeg3GpYtavGU3Cx4vPz6EUF59DLAerJ6QyonETTJK1P4DivRSZJA31Eh5s4jwnfBbGYwMSd8AiKjDHUUW",
  "key20": "5eJTLtfm35mVmkrdq26xqQYv6ZkWqbtVyCqxFGot5x7d4396Fw38JAjJ3gMVW38kyoPjx7XHAJKv7PYTUt4JT3o7",
  "key21": "222cYscKeoDKCve7UxgYCv4aLgNKuvxJL9AZmPK9k752pVsscss5MKa696LNw3y4shKQm6AuvKcKMmZ9yfxpNgta",
  "key22": "2X5iVDCP37paKxLXow2ACdKdkm1c3tkdhVKLaybD98dnPwLSkWmS7A52iSEgrk5aQnvZ6Vziev37xDEpfp7duU9s",
  "key23": "kBan5PBhjzm5HoxKvk853Svo4qp568jw5bmwPHzDo1YbECRCJ15CiAayumxdD6gHYKjhoKNm8pznmySCpz9wMik",
  "key24": "3xMe5XgCQZn6x74c4zk4JJKUJH5f7eb7awy9kEXLnseavfgZRec4uBFhPUedYfMrJKe8pAgudHKkndPehTfuYGMH",
  "key25": "2tqaL65o91UauiXSq11nq3i5nyX4Cvp4A9YS1oxY9jwUpeLNFJvn93cpiu3kGMqnUk9719vYzeDU1x1FWadekFet",
  "key26": "EeP6Q7yukJxuUxgiz13piV8eakmkqmiYToYgMam1cj4eLGQ86F7hhRaSbrsifSwZKEwapGC81arbQ3jnkC6LgCA",
  "key27": "28qRvNxdEAuNYLb5kEh9G143371NSKZEoorFPtepZupCVDEPXcQiFWPoBzyT7LxtnoCsbtcDnWm2fruvroiBZBK8",
  "key28": "2XpqLcNsYragj4mihQGGD1XrvBQoB3RSWjUUdmxvSM99VQUvW43xXizXZ8fpLAsWw3vgzTnEXZycFrMTsec5Ajb7",
  "key29": "5XCqmV3pGZ9wWMZCh8tn12QsQVGrvPdZqqkd7X1EBgTWxygZxPsU1hTcZRQU1g6ncEUHUMP4H2o3iF4rmE6uV4T3",
  "key30": "EL3Xu6R7CRQkQK5A2yNTsLKVa2T8mwsCqaHsAqchnUHTLuxWUzcDJp2bMH7gxLw4RdsJTEfVzQjtu8xWp2t7X3w",
  "key31": "5E6BEmWHGJeF6HiCLkJdzkTpmmiJBFpZDDREJjY339mZRLR2ZG19tvfx8qFJ2YmxtnfWNW2LP6uiWxuC8V2Nbs1H",
  "key32": "3k3qAFi33N1ESZRcQnFzeFu6b4WecGZP3p1kFfbViJDB36BUYXKsEgV7VVHN42rijQsR8QQaGJz5TtDsnZ1EVwUh",
  "key33": "5az1vEssinar2Yc7TtXpPvP8N2KtHMrn3tKa5rAi1ApCRPG5AJPTMNoLJ9tWPdW7HuPYe1BD47iyKPHbwdM3rcho",
  "key34": "2ibDLqm8Zq9L4C5bh9y2XyTU9YdCjNQxByaaMoKqEGqfGmozinNyKtFyoKXLEpLvk62iW3BhmawNU4ALpuWjgvLK",
  "key35": "5rcQJAEXa4XVDMgpZZKw6DKkAYq3bvgcApFNUQtCEsJQ3RnQxK77y4UdzZ7xGhCwkuQhkyKG87CBbc7XMzBDayvD",
  "key36": "2DbV21xJtkRCNAGEQZ5dEcKYjqboH9PnFQ2s7wDBtwiNfzBx9E12xTR7DooVCRzaegah5196fVBzUH41mKxj77TA"
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
