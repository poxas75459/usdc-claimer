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
    "meU5HVuCsQ3hbBQzqfgXZq9LnMnZV8m2gdjDsVLUzQLMseqaifUUJtMDi4vBUTssTuWXd4NV45d7mfkUZimKeAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "293xv3PggWnzuPywVaszroPcRwaNr1uKtwpUwXutGUQDPQagU9EJreBfcQPNj2fqPAxBDgdzdo1ck2p589Wqa7Xq",
  "key1": "LPWRqqZp9TURQwnRoUP2KDurbCuUci8sYwNto2tsNCYV4E3FcbxmnJMQ6ZzzigTMML4oCwF3h14zdeyVBDKWfDb",
  "key2": "3Ds2D2L9ijxSu5CtiF8t7Rp8G4K5vzf7pQbPxHhoZ6n6AfzjKM5zwcZGjufHzXnvR17ZC7EQ1SATdF3TcCYL4bF9",
  "key3": "5wADWtesqKvKLHMjDwxjnYrLEbffNcKUJ9PBnxeEmHsN2oYufxToBcxUxg3SXGQyBRTydGrs8by5ZofAX8uVruNM",
  "key4": "3bsRNLbgqjtUQkwZaUhmqHzc5V5xrVVnm3mYbqEeW769MTPYmrbuDCLuBAZyi4axvo8KZ8EuUtitERcntvt3X3At",
  "key5": "3B8nviAn9tnz7onDd9jEaJPWZCMvRNH5wr1i7p2HzGwxEN1fckKa2kmemRXmrLHyUxhoqxuxzK1vPKvwQoA4PJsd",
  "key6": "4P2txU5ufStsa9Nqg1BytaAQkYAwZVLDjY7DuXr6YV3zziHXf8nSFgTF6HatHWyu1trD843Raswu8TCMA3USEoE8",
  "key7": "27zR6YvAqzQA5KKiz8SsVYHMXPEf8skL14SseTywuLvV1n7KFB761t8tL3k2oqrJtK6nFvUTXKfKh9FwPgxwU2H4",
  "key8": "5jPjcx2L8SMYsoc4xX3deRS9mas17o8MrodiRVqucZe9A65gMeVR66BKSosmeysPqf7SaVZqsBzoaygxtqBMwXrE",
  "key9": "5gN6HgWFQbcdjDYhcZwJHhY56Kwbd6Qa8oquXhPK7QwPTar17RuixBxrTmskZ175CyJ5Vjdvzxfa1PTdkhWy7JWt",
  "key10": "3ZiRBGsHhA3nFJdtEkaiD1nGEaoKMAYDzPJvVmUbC1EjY9tsMXytxoVfNbz6ZgneLAxP2w56syeDjPmWRvXi1YxX",
  "key11": "2h7G2wfzXrnv67L4AYZXrWV5pXz7FibRXSsPSLXwwMfqwLC4vL9aQKrQVDTFKzmtY9xES7bTgY8d3uRcKCQhVzmd",
  "key12": "2efbTBAMbMSucYpwyAYadv6amshkWX4RkVXUzM5rrx9FV1MgEnyDmHeKJgZDKbdCjj2YNQDFbjeH51YwLQYa1qB1",
  "key13": "37kbAhC7g9KhLJbjmTh9ab4KurskDdsT8HSDc6SZBz4qEdkvRFxyAJGw6WTV8eJUCd6kLM4VzRL4JFKSabS8QD1Y",
  "key14": "5hJjSwJ2ChMrtpXcHWnBpExrd3aCKr46psSLr1q8vX8nZc9iYuSPZWsP1RFdDnYMFJLAnZyKqmxTpejozRCPMbKA",
  "key15": "4MkXwtatBKcJb5Qq3sdXf5CebtNdeRCneHnFyFEq1MnfqfjRuFuVJZB9Gd2APrVPR3m9gLAPzmh3yaw966KeLadK",
  "key16": "1M42kpe7BCECz3TeAmMVvodDtZbmRsdQ8Xft65A7T1ScuuLB9nkRCp21Zq6GCaPiiz9ohnsoCr2FTwJQrcofESe",
  "key17": "3G5PB2sDdoaarJigFqFCKZkHtdjHjCGCLnvtzQeFmDqax76fF29M8Qri3s49zH4gDc2LLPNq4wqn2G4ByUKU8Y9Q",
  "key18": "DbYQfJYjVuLodRCG1wDkNx8gnziLMt8t8m4vZyJFhzTRyW8Ee5ChbAFzPznVvpuK9R17fdcx4ycvL3xjJV8NMMG",
  "key19": "5xLTS6qmkM7GcZgiPyhNXMoJAcGdiXCr15SQuFzLHedZEgzsgzbaMz4PZNcAMNrthNFtxsTEyyciRFZq4a7bvBD5",
  "key20": "4YCEfDAFsVy1mMPFUBrwrCgeFKRNrCriFPf7ZNy2cn4oDHPuHL5EMzzrtyVjHppDnQmhB57P8eKLdSvGE9We5QZC",
  "key21": "3wKotQXwLQ4xydivKNNUtHA3RSp3hZ7EDxFkRSBQehZ8QXzBm6eXjbgxHs4LwLSGRCchpY5xEmXbW612rq9kHNa4",
  "key22": "2GDJELoSUQXAynGkUE2TKa4Ak1NCkPQYYSEDbTp54GYQtewJqpQuhdhK6aH25AsrRBiF8JYPfNRAjVkR3N4LdGrw",
  "key23": "4iwpgMg95iuEp81txLgCn5TxjKV3WNTi6jzRinVbnxM68NgxM3bbcgXAo8hoYcFDiDtfsymbmtiKMpXW2g2aRiSo",
  "key24": "2wq4GDmURHV3M5gmqELtVLoDMFfEUUBHx4wjVV9UKKAMhP8b1z7h39CQB6cGpvYt8J2higohDgkhRufANKvjAahU",
  "key25": "4hM9q7b6WEPqpVA8AGCdK9MQjkeEc5M2ECAB8PVANJm3JrLPRLGPky2nMDagPtRoKQ9UgwGkogmq2LgAjJHQBsgA",
  "key26": "3VcsN418fwCZNw3Ti3qkzL3FP5JQ1tXmda5e6jdfuM2rALDpcnDzXsQHQ6ZJH1BhqCHJEvNtMmfoYefZWEDkfAyV",
  "key27": "5ZWxBZhZ4vo4UjGY1QDgGyTuzjMi8wZN1Hginzte3eMYgc47g1HNcYw2RoTXWnmFfc7cg5DmWNWXw6EwYGsSFHGc",
  "key28": "5JDzDyTH7KYfUpgeTen7ViATh5puXmeJT8GAYVQ1SigR3yf2eJLixJmAuh4fdemgNcw6QgdeyG45LpeRr4iMdxEA"
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
