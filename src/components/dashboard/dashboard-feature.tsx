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
    "4qgmX7qziiVB1rV5rWmppPN8YuYh8iXcFAmm9UqAmJSfQwDCopWubexWb6dxG28U8i3PJ1QD9GoVbRcZd5CzEbPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fois3aKnZaU6sG2i14tZuauv5kbBcHcC3wpnk5ysrcoXQrtmyNX6cMdHeJzswuaTxX8wMt7z1j6nWJUyEhxw2KL",
  "key1": "4SPX23q3mwuF9GWUsSrDYV3VVcsHoi62Z9K7GTuPkSdSVyn3EgMwEXVyL8AkKMrLBu7sf4RdmfRDRpd1UdrJii8M",
  "key2": "2J5eKAiFThcJ759dHuenF2xsDSJy6xXWWT3xqwnJpvbpcwQ86kscZJc7ZtfYL6rxx7N9Wnj3RXfZTTXkEL6xf2ZH",
  "key3": "5qLwNPBHfSWVctvH7xLbu73tiNHh1bJsBRLjuxGLzwdZg7LTQj7FTs89D2ehvEVtXnV41YBVaBtpvi73D2MmiYkm",
  "key4": "YTyrzEo3k95SzodFdw8itLZv174TNe2B5qgGLdGH6uxZ3jwBHtchwhxmUvVhWvtC2NhYj2pQYnnNQb8BbprhJyF",
  "key5": "2cuEUCWZyazaJaaFUL8csr8kAsTzT3vUmyGu3ox9jhNYroUqpLCm1WHpaWqetypo8piYXo4ruWV1jkVUoMYXQHai",
  "key6": "2u7C2juduJjAkqMEz1fxa61JFTsDFd9ovxLaT6wTopfZbGVpv6rJ86QKTdnwUQ8CSHR8vCGvqe4GnbSMD6XCLw2g",
  "key7": "3zJRdSDqU7tvCHUuAGKRaZhp7CZicxCtozMRdegWfrGTAvWLefdG85eDnTSzXDBUiXx5vxnaiqnrCJ23sszjMpnm",
  "key8": "3JgwadDYpe8iC66mBgR5H1Fu9KYXRCniq2CfbLkzyv1wsyLjCmca66euL9UKjUhya8U8QW6mgh7nRqFURuwjx4yf",
  "key9": "2KJ1r2jqKsb5a2WQjudKvMuuF6RinNVKx7ZgtHMrFaL3CWht1MBL8nuQ2fGLQJBUTrDaJhiJmtJoGkBpqSZqSZTU",
  "key10": "35MxC2ct1R4Lygs2Joec3ZRkyD7ACSiETi5k26JHU53hSvvyM2nrWxjCtwsNw7RXZFwmCo7vvzQCuCF1SrVzSs6s",
  "key11": "27hyJn3n41wzHs2ySsT9Bsyx9ov2MayJDxg3v6T5Rmi8XFyZMd1DtTc4pAKJPhKtqBWvRSBRqK2i7FyYXDDTQgrc",
  "key12": "4sNitz5qz8x4fZcEQqTbYk5LxCoYCgrHqGUkU7f8wBqMbinsmCxgUZ5FLm26EY2JdS1iZJBWa6qAeVzFZG32hzak",
  "key13": "5wbdoAsjQeBW3w9kwnh5QHYkBYtMked8ySLk5UHuSq5ArCsfX2v6VvApL8bfD6GJ7opbWxx84RjzLX4Tnfm8k8H8",
  "key14": "NCQ8RJdR7BVMiN4AwS5TSDnmYqm3nD6ZqGt4KmvH4ffZSeTAxn5dzhiFR7tk9LU2h8qXC6LN64Nw9AENYK6cANk",
  "key15": "4f2eHEypcR8SNbvngn2AcCrWyhR4aUa3EPbg7e3VzSj74j1R3bBWhX31Z83itvifouZe5EcBLxyrikDJqzNPJtqU",
  "key16": "2RM7Vp96eJcwnfQ6hKD96qNBmiMSjLuTJA4X3UwXAMfQyySvspcWLKE3oMSjYGkz6ysrvCgcdLwuMTGvAs4ArUBK",
  "key17": "32RErFUFG7D2VgsJf3VXg92KStvuyrvuPmwnsNusoLpUnjuXEPYNMRa7YaASeJa6gcvwJk7U1McrbsBA2PEqLnpo",
  "key18": "4GVvXkBMGztYQ6eKAx79XcUGKseEDYu7ABaYWYsfMVmAGNxDv3ppDYeS5rzACKwx481GekkqbnJk5ioVbQjEUtJL",
  "key19": "44SXYEvVYg9DeApv5DAxvAndFjEcHtywdPL9d5FgmxKJrNdhNxUNTbBVeRWzGn3hTas5s7PmBvrM9bcCyXXT6oum",
  "key20": "3NJ8iaxhTfXRJwXJ1SbHjcEpCb3Y9xVDd5S6Bbtk5uYXSTr6Gb6zXiT8YQAJimkhWFL3pLkmWEA7X2WcVcC2RSkL",
  "key21": "3gTvfJ2Q7DRv2tq4DBPn14bmw356BFFX71YfT7agApGMXXJwHRXiVtiHRaFinc1Y5ZFaiWZhTsHbP8Rn1CjwzMYP",
  "key22": "5uGPoALx8XChdCCwWTaBMHafRUArRFRw526mowyLgKVBV95HEU3bz5ut4zoabNvhw6nZQGEFQWAEB78AGqeGeckZ",
  "key23": "5UBt6KCFuHjcWrQm8tMeZxAtYKGSxG7fguPZgmS47SqT1U4vRiHwPvfa6xWcvVkhYe4H9htwK4P7to8pWNFzzpGt",
  "key24": "33G1TReNPg2BZxYNayUqsuAJt8NwAAVdgMwVG6A2DTvahsPQtPNsevXTs79jvTNNfhAUtQ8B3msYYhBQgJBfNcNo",
  "key25": "5mqiM6GdsWTpHYT3zS7dhkc39jGbK68qYhgHYC38UeAAMvrM9Anqs2V211DQehuEHujmDLLY59xs2iZfEKW19v9V",
  "key26": "D8c1MRGYGiRSEHtJaUQ33wbiRT6hWoiwLdQjC8yBgukUdjs4fSXZwWqWsCp1w5r8nZoLJUqcF5Lep93mxhPYWcT",
  "key27": "Eaq7tR21c9KgQXD6RkXjJ9HfFuSG16dtkm5RbHUZHDHQqKbv2jPkfBgvzPddTJUa4Ut62f8VrYLXBACKnt3z49f",
  "key28": "da7g39H1BpyKG5J7zYpHLZVirNMMgfnjLtW7MBcisXs426rHGwYzXyGdFGeZXMBdCJDT77YKdGt9Fj6jUkyUmmV",
  "key29": "2nDoui2T2VwSCsMPFogejUrHfbJjjTqJXQnSXSYMHo4nMi5FUvBBudLQDaUSYPz5qgYfVDimYNmVPBLYq5f94Cv6",
  "key30": "3tQSXvzy4qEuC57RMZ6GwrguHVYeBqcDNgdGNJjHD95HrEEvzyUQyEUvTUYZKfhdiSTNgk63fg1saCjbhsitSGxq",
  "key31": "3CQaBAm42gQQorvsGQARDvmDeu5CucA3rnNRzSXoR2ZHNi59BchRJ41igot4Xrqg8WzzeTZJGTdsCrGUugpzNegK",
  "key32": "5p5oPGSfgpZgyKotaRLvwJMFPxQuGcg5jXrG2G7AurVFRwz3h8W9pCY3Fu9EtRD61Lfss87jg6EJAk7SWmTVp2jy",
  "key33": "2Dj9T7q5zE7oZZQuSDDS1n6AwRLNYZkC4fdArACcnti1awuYDQD6a9ELUkhMS9FJJaWK3N1iCccmxD8PGQUeB7zm",
  "key34": "2hEak7k1y1nQsiJWRYc1ze414UsHpAqsLNCMKjgGQporFLK81PeZaErwvvABMzCUYpsejTU19JWZtVnfBYXJJecH"
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
