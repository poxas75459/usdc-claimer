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
    "4y7zyUghdF9B6uYhqo8XsnnbEjGC44sPQDQ6FXqPtLbfrZyocMS6WoMJLt18G6wD8J6wKUgt8Mxvp9B9nM18Rutc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qAX3dk5uXHKfaibQ59SNmbSCmCBa3AuwCdhgJ3N6AjidfPVP2PBxGdaCUZgwr3aGCvXejkd3ibun27KvX8SMZ1J",
  "key1": "2UM9BBRGNz8TbmZEcvJnmfwxDRGW31XqjHB5phC8YiFhcmBkzEfHVC4C2R41igmwRkGCkeT5KwceYTC1W8psenMG",
  "key2": "5izWALgjnn1NkikFYUL4VvmmtwDJWiXX23sgVkS2owbd8DBRVypRLX9o4TvttwgEwLSwrWowrzjnaoS5Qk24BMDB",
  "key3": "5JzLWJP5usTSrVmL8hARZ1F6dmRiuewN53MpYpmDYe44DvRuw4uMmxSZx4bKuFEDjUqKeqpnswoByyADtfp5Ux9Z",
  "key4": "Lc3aMzDKCUqnbhCkSyrStgwTfwrSuYs74uCfQqCeDCvcZ7BNhBiFVVGC74gZDqBsXfbsu4zqPMCbZVUaQZfrCt7",
  "key5": "66wLhCvvqGGgrEUhkQk3HZk6yGPMD7AW57FQKnYLDErstQU7SD2uerNrEy4YeW3Fyy3ry2KNHXTXU1SpdNrFRdqA",
  "key6": "F6rponveEKax84HcUw5EgLWJ3hSsg7RR7fL28bvBqcikdf2U9ERkB4VgfHKYiecUHESFMCBKQvk8wgAxLtbkRVj",
  "key7": "brbq7N5its3wDekUMZ5AuShS73QeuQN1JWz6aDMzYDG1j1W1g127F9rgJptFhiiCDZfQerkQy3ccxuXqfwhXps3",
  "key8": "5UC6VcNEctq2cUwe8W6PV8TbdwGBw95H2pBbxY57k1QLXoJ9chuEsfyK3uNtiEh5982sHagsXs1Kzf2CoMadF6MN",
  "key9": "4iw6EFiB73YA9pJaJEKQ2dxsTpKA2PMqhGFmpRkCsdbP3QuK1ASg5wLjcusD7LKCdbJfcUbRww9s6usW6B9yd9ts",
  "key10": "3yrZE4aEcDTSVxzaC3wRkJS1VzG4i9iEU8QWshBy8TyhbbSgFZLFMHTnxhfZbTPcMQVchk41C2jL7ozybqHjYDy6",
  "key11": "3mVRxZS8RkkzJwQX4gRBvJihCGEQQSFMttxjeugZaPvyd541g4Jc4VuP6GksTZqfQovLgaiVCZT3p894PoDFKdws",
  "key12": "5qkhfRT9GACAGu7bNktFd2Dy2yEUo3NvBDr6peAEsAm17x6QX6vHCootwyNAFZsWDjgu7A6jjZwhdQRHHH7G4sk",
  "key13": "EigWL8Ksvvb6Sb2HLofjsi835LXxJRVBUnTAvag6Yd99nhTjmd42wk7LqGee4mS2Zbwc4LGH96FH47kGvB1jLsY",
  "key14": "46CEofocvQG3jUaE4QkfW62xeRxcrB6wFydhJ6L7HEMWxTMDwqMm5owZe5KskibR1XhbBQdzJZ8dVVyZy8nrFWBT",
  "key15": "2j8pqac5f1SPLMkudhzEZPhcMricsHr6UWsrcRB89EUNRxXX82w57QN6y67gUkNhgpgdV3EvE8gsHDRbsSh9ioid",
  "key16": "4BM47exszt9i7FRuuhBB9pdLCYk59Q9TUsjeq5h7RUSzo1dpi8PQj6SDmqnZnGCXRCZTPXiWR5HDEiE5c4DrtXM5",
  "key17": "7hqKbZMBxSRQZTrJgXKJ3KNa4HShV3uF9gS99pX7dAB4GvnTDTHGzwdDDwWiAiERb6AuH68kUfiJd5Y7L8Y9pRh",
  "key18": "54RsLZpeWfj1P8k8h3cT2Ank4EmxLDGvNLUGL5DPLapcX6ancWJmPYmMWcKBTkLbjWsVohPLCNeuFQYibED61A4Y",
  "key19": "GptEe4mhkMSixMXkqcbmBqBR1tThxPwLWDodMdK348Z1KPuvsYMr3FvVE1QLhH9j3a6PrMXCUVMDT9C3t8GiXno",
  "key20": "5ow5KPjyj2ktGWE4mJc1hWLMbMzzKww8raqU6Ldrg2SikFpFSrXFqWUnLYcDtt2FJ5MiAcedbxkBHXof9PXCWyUh",
  "key21": "4kBeVKK8ZUEKr1EsR8sAkV6diZG7KuRC6E3a1yA8fCkhvRSWkt7wZZ9CxJu62kpK8SuNie9x6Y4ZBVy4bWL7rLLP",
  "key22": "4KUj7AmHQdgoy5SB3EDc2bWE1nsbeLi9ajXMJgJt8BZ4FgEAUo2TKqrSVzEq2hSEyuR7NijUDdj62Dwmm8dwZepT",
  "key23": "3XLRsEAptV1sagWBQJwZkuBUJmADJ5XrfgLjKT2jAdi6wX4KDrkTSLAo3MuHc8KFF6eviCJo6BQc8rHoVndUMGdB",
  "key24": "4Djrcam5BQHWMR8Dv6yzU7QmvzfCwKhD11KxaQdsUzfMECJfd4a5tPwaAQXY8tqsUZPki9fhWdFUKjUHF6NJMzR2",
  "key25": "5eYqpNmWMu7pU6YZ6yY19sKwwhHDrzVxpWao9dFZaBRwCD6xPW3RxxirJt38eU8b8THqfZUqtH96bF5SxtfLsqEF",
  "key26": "5yTXtHeA4HkZVb6nBLai7PquYuh6SHxEuKVtW9PScCbnxXUg1NDZxgZ2voAC4LACQWdvTw3BQmb7JpwE9VFqYRVC",
  "key27": "3sgBe5ZDUhHMyGcotBndLbES7nB3eMRCv4LYZq8kYdB5t5ENiQjjfEReDQjs3Y8cbYYdgVPQwNjQV7wYTB9jgDCq",
  "key28": "3FLt1Wm8137FZJ2wgfPJUM3RP2ceg3xd7JFnURuXfXDUuPfepkWnKorWokaHTiEbcHBmPEBXoGJECToMRjNynZbt",
  "key29": "JXzmWM1cRsQFHZcjzPEsXi94ScqF5ycmPwJU2H6fr4RfqzDVKPuaq2hhzyYiggMjCznGj8f9jfXfHdJhkCVyTNV",
  "key30": "3eZzXYNmByPS7SPzy6aREagwGaUnuCeP4W61DXEPNX9vAX1o72pbBWnUaZyWb19vTDge7AbQt51b2dCGQejnbFMM",
  "key31": "5Dor7ptrhwDZ2DLkEizEa8CmJnpUdA2nwodpq3RY5W1BAs2QK5Gf1xFCox3V6oo4GDF996cX1EYBrdnfq6hXffsY",
  "key32": "5RA45PC6N7jAVwwUh7zz87KwhxbvpCRet9i7fZU4PrsACN9AQb5fbnFykk9gpfkiCA3REmn4Je6Jh5csKQ3tsjY5",
  "key33": "37o92LizCV3m2beqSnG7T4BUevYTSfbdoYHncpNKNLxsVjNgQEbDns42f5CC8fMiG91BN3e9pYqk23yoPTVCT4qK",
  "key34": "3zTXLMHcrVQMbzh9HjFXpXpXQbUVomdMP9jCU3jZXQLLZ5xDUsrfERsL3QhrcQQC436PQb2y9ouoMKgRFfHwGMTs",
  "key35": "41zeRiUFufEug6oCzeAsVv1MpsDdQTCyHRfHxCmE713EJCR9tU3WCcTaievmy5CYQhQMNnpoS8FgnSZSsRxcVUky"
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
