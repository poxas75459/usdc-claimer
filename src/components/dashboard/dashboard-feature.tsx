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
    "3sfuuL6JDWZFgAjyC8WT9gV9BxKgoo3bGFQPnPNadMDB1DVaWyuPDaQzmTeVX6efZGkQwbCsi8AESmBYy4To4Q1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GSQkK7gn7YK3Zqctwi6sJPxJPw3s7Q3MpweE8jzKpWwTPCi9xnqbZxsDNPn5tLAcouV1T6zf96d1RyuoUUwmQhc",
  "key1": "6vRCefcHDsEvHUc5Xw7tXLEZ7SKLkDyXYmpKFv5fsqYfe3fsjFvTaZCzABaBdmLikUAVqhCiS6JyVsKnM4ssyiQ",
  "key2": "5AWpJwt4gsENaWLsWLTFedZ8msK3mgFfTjW9cYbDmWuCBKsPBaUTHWucYQrVi8RkWG3DCXcCKwJDkzuhd2e2cpmA",
  "key3": "ui8zWFLc7Mxp85uWjK18Ti96APm6GzRF1NERP2q6TddPAJYFTMmC6XLqawMgGi1axmqL74uoiVSD2Brro93EGNZ",
  "key4": "3vDmWfzEsGe5ExXhwpeCuGgV7d3DNAj6Xdr3EmtSvxcxJRUQ4DjJKptufGa1jnLZc5dK3pnwHgReYHw9G6iJS4YK",
  "key5": "2db2zQSSLdJh1RszpaqSJkpqiVyfmHgg3BH8HvTKsiGSuDdk7n1EFogBjnxWrKCfGN4DSnMkxyPbVmE7PN1DohD5",
  "key6": "28vk7XKWNPsBJ22D2NBHH8JeGbUfbtadmken1k17tNkrSCVnSc97mCt71GhW7c4g76R5jRcD6iuWewBVTRCUykuA",
  "key7": "QvGu9K9Mj1z6HsWyKRnDs1G9QCxuf9V2NAQG9o2UiZbD9hoT4SzPtfrrBVEYsPcNvomUjU6vyQjX1TGQ2Ro8ffE",
  "key8": "4VCD63S4mouyN4ypp6HcZmGpVEJXW8935ZRoHR3MMjJoiGeNPzXMiiwpF3UgSvaYzA6ysgj9Yw5NSmPDJKGrFm7N",
  "key9": "2RkM3Agpu3zc8iwHdPSE5aLFjDxd7zojrjFtm2J3BNa96rzJ71bkKQy2geoUtgA6nXU24EkFkZCNEkUyb1VU63a9",
  "key10": "Qb1sfWTVxZZW2ozUchxDF2TtRZuC621RbUvmTTSn5b1FM9tDYWboU4dYBLKV9T4sFAE93c2FCGW8fyrj6zqkXqV",
  "key11": "3PkKdAKKB8pY6PpatGVzo956CyUrwMkB8rcvBRWndiRRG6VTruV9Fo3rbQAxLQno1pSN8yYT4EDpmbjwUVpsQH88",
  "key12": "2PGbcm8Zg9kJWoDzTDAS2g1pgfrbTL7YaAcMA1yohDNQyQVEXSjegYxRHGLVy2NMku4KgTMw8E9fNsPp1AdzXYJQ",
  "key13": "3qfRq2oKdoJN7iVXAL7z2ZcaiRppCFfDpXKoWVhgKT98AZtMRgUh3RnKBcazc59gmeGzurfcPixhhJUcqMfbnUCN",
  "key14": "2N3ZBBwa2PS5wahX6SKL2ejE6HBH2vjdKo7rSbHoHXZ3csWbHQ7ZMsXzJRS6XonPKytfvJ8CuPZ2TuTM3yiE8WNZ",
  "key15": "BAgkRsNLXivQQXZrioZcAV8nqsLvXAi4XHcAadRCDwBDHc9d5oCrA3XxX7RWk8jpt8Eqwo5AtEa8ZKT6VEYGnxe",
  "key16": "gX9qa3Fh5rH97Zowyfo4SBhfzgqR7W6dVZMDYnQ1SX6oEngHgv9MPeVZ91M8P5qj31VGnkC39vkX7S38StaasHp",
  "key17": "547JRgsREVswUpPWrFfnpxcaERmaUDhRiTDok99GsrSVA435WCyrAKHAqkMqDeDSJyuEqQkf8nU4zWzbiGqDQRPM",
  "key18": "3hEcdoFfQwKGhCvSmnEwmv35VFfNdd4maKVzGgomNYcJ288n7a6ajeUi1f1ZmAMqEdm8icmRYNUELJFr71jWMCz3",
  "key19": "JBspLXg82kSxKdcM9BRxmFBg6rJb8TAnz7kQx6PCZBTEGX8NxCKwz4HAgUg8tapFY3w7tjCQxY6GpzogoB81NNP",
  "key20": "5pgnPkUd529X9skTB1XdwdDkn2peKtPgTu2ktBEwcRUDF9NnoZ3C75RUKU8VCFpT2eCnRCisGHYaSs7u3t9Uitid",
  "key21": "2n4CkRyv3LLMMXGdLdtNpqXWRAKzxbYoNoRZugGXv3JadzKrkSsCvLdgv6wDYcuV8rKZXqtXxWfamJeHwuBaZeJJ",
  "key22": "2fQyUWKki7R4AFSgBXUVDqgiiLvCipNyFwiApVtwBUpHjqxS8VfiiF2GabToPkWtPdbbS8hMNRGsEFRwKvVa2FsP",
  "key23": "5BsJVQvSvYMg6GaZVWg1WjSbAVN2MqzQwUYqBepVjHyoVgQRrrWGZP9y27FHzTLDwE5xwTA9Drdtdbm7ofdJNizy",
  "key24": "5vm9YWG55jPfsdj1YnkrKqTSLbkfcMY4LnPQz2ACdQSN4pji6rsJfrkYMx1kTjnymu7xEXLzzWcRzisVemFMJejE",
  "key25": "29bf1B2EJfWUZHj3nzjYULG3WJ4g1wZZzE2ZzxgfqeYkp73uxuXryByVXmaGfCLzYyHpifNKbenUowBSvFLry2iq",
  "key26": "5PJcGkjwxQ5x6SNGfwDzM7RYRr1qb25QMEr4QXzvTWDSJo6qzNnfeXNoy8i68QVb4qss9q7pdXaSYPcfi9YfXqj7",
  "key27": "342pHFnqit8qP3VKo75AqrA3zaV4nWQSHYYxKJJfRVW9EE48XM39AdtuqNJJtFuBukz7Ki9wL77bxCujGB9KNSA4",
  "key28": "4gVmxfqDdCS7VS4JEKqFGGXZwURo75xfF8QshgVwLqaADQ9uZsN8bLMfuiAnYd18NSZWEamYw6ugwmuXcL3Nq3NB",
  "key29": "3j75Qt88oGByjHL8ZeCN4AXr76gh4jHxfxMVBCVKvuwq2C4tPuQHcacQykbFhTDCfpB42RogFgYpYLaHhN7XFmn3",
  "key30": "3yjRYMC1nAL5EbWZ7vbdn4wfhcAijaxvssTyfqUuKTtFPcyNFCuEtejfwtirqBoShfcSxodBB7Nwj8c1igSJhuwg",
  "key31": "2PGUzXsARznpkLoDy9Fa5nAok5MCP9J6C1EoAYmHgQuUKdyJ7XnUbZyXbNrJJrsU2YHuv3reSRe359fJ27sjSMT4",
  "key32": "5mkNF2hhuTRtgTuW81xiPKKJQ3iqHi1ypkdDvEmjFM5nK9ig3yjHYHEsvtteXeDw4SquzaDioS11PqvxsVjpHc6e",
  "key33": "36bk3oUMQKHRHkDBxAUFXmxe2koxHPG1SRmGfMCC6QzAP1Lr5HvCcmrehgSR7oSL2G88sED3wWrqHyY1oFwyyYvM",
  "key34": "1G6fsjFXg2KY1n9dKsurshBgGaQ5MseuERYna3Q6tQ3WABRkP9HiPH9KiR8pMCWsvVsH5rQhvhuLWiaQyx2yttS",
  "key35": "5HWMdHgY1sZxDApdvjweQQWLKiYE4WTtQGtuuH7AN6cZvNxfW8LLP6765c74LTk5VGdH61kBp3QrqrG7MdR4nGyZ",
  "key36": "2P29413FMZy3r9rRKaMZASBE5w26eqL1MvWpHz8MugcY7FAA2nJTmZS2geeLD9c5YYszghFqLUVR9YreJxQVajF6",
  "key37": "5gXmshrgRueibB3PKq2BuaQmVV3jVWWYnf62vjFA8WvsTqje2w7dUoork1GqnhHhfFB4xBqK5DEwQzwfQGq6htoo",
  "key38": "fpHc3EjxiC2d7j3uRFHxPANjgkLhkQxe2i5e7kHKCrFS2Ebp9mWA8iKQj1oZSzJAUCFPUyzJruCwR2PbDy5tVpa",
  "key39": "4jtU3DinT1JtfuPMHoUU9bLpMhBz2Lse2UBXyhGoqCeHYLni6chWRF9ejc715q3znzQ2GW5wz1q854DuKzPB452o",
  "key40": "3CuFF9mirP3EGYEXWk5MsNk9qnuFntJ244mfQFE5LVNHFaBncSZ3hvAVWC5Q5An3rQz7AndLLVmGPBGWCSGP4skZ",
  "key41": "eYSXkh6YbtnZzqQ1sEq76KM7Yu5iYsuuV6doRFtRBPrBQ92QzgHCVHK2ScaDE9yZ7xEqbEPkYWr1X5WHZbxCzt1",
  "key42": "viUsduBYTJigpwkXg3djLUAmpUfKkoQCpaTKQiCiXun5ez6YzzbG6g2SabJRrRjHJwEkBaSQVoqRzDWkN6K266M",
  "key43": "5E5Xj6P2zDPBUddN9kAUcS1evSCuyVmkLQMusPCa1ULYXVgkKonsXsmVuCA8j6iMqiACCdEoBskhA5eCDm2WFvR2",
  "key44": "3wtugFjKJ7GhtDkKK7CgGW7GkK1WNCD41RHbDv9ZprvEX7muDoEfdKoiu2qnoftPsbNwcQbSfN32hhKMEjbUVHud"
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
