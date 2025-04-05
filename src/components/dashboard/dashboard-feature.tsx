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
    "233PEEvs2Y5H9eLLKydoEw9YmMDGT4LanGozH5UWMCfnBED5aJdTZFLA5jJAs9e66UWrw6V4sC671Wqrz5UGQE75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s9dWK6Yw9Qy8UvP3kew9kvUNgLfST1DmHjEWqxqvxJfLiqoUkcnAMdZiDLtixQb8kBRoo4dkfm15Srt8VnjaZ1J",
  "key1": "31GjRejp5xTsatJeaHffB4CcUZ4K1hGC2A1jFby4gdGBciZVdNksmzouP1AFVRFuV1tZZcZV2qUK9jtCaSQj4cQH",
  "key2": "5muy2d9rJTb7DsyaSzUpQWCKieQcU7285TuhQRMmuCHxUiWbDuwaJuB84wudiDNcdXg4PgWokjmKw1wpJdRRD1ja",
  "key3": "zNuVhz11gsF2jjb5gVXnx3a8Bbg5sFpGk3g1wSM8BwJWd6b1oxrRvvhbMtZxk6CrNNoS3cEByAgc5xNzzz9imGB",
  "key4": "4rsjoTqqSDK5pjiyvumhriJ6p1xZ2oeW16RQyEBBuLPrFXHdEutwgFFe35y7Wa5yCbtLARvWQHEPgNEWu7KffSbu",
  "key5": "3X8hEtobWDhymjngeutUHzrW3YYdWa6XTgNEdnKJaBQmSJGoe2etjKeFbqrcshBL9UPJF58uRnRCNPRFGkvtcEeD",
  "key6": "2up43bnMPRL2vjJGbjxV71rLW9NKpvTKoK7CC4o3KiJbNLnrMpnCYuKHBVbEFqJGuzN5AF3aiQ6637Ke3kveyWr9",
  "key7": "53RpUAGX7FvnCq2AyZYFJTziPUgk4UVv9ydquZPyXumqvnhbLpiunTtw3GmMJ4mB6GqC6UJg7EgxGpHEJ9tyKHfX",
  "key8": "4kfd1rBQzy84wf2YS5pSP8Yyzwv1YEgz78iycibxd1c69rBeBVsgvXgNemegBPG83q425K2v1UhN4ZKSXy5iPhPK",
  "key9": "5ySRe1ZRNMh3JMPRKpiphsabkXWXH9GeNRubDVSWp1uQAtsM4APQLTXYRb2S8ec8caKYSRQhc2ZqUR7Gb7g48PL8",
  "key10": "4C5tfCMkZLBvFpw7LzRWaC67kdJjFn5VKNBT1u6MNwS8UQtRArfQzQNF6j4NETiJ3j4yc6jgKbV1XD6KEjzNRoij",
  "key11": "V12k2TVVu5y8f8WbuuZbe5BEyHnJjaLk5rWvnc9tEyonhAZ4mnkA9ne5zfNs2udJURxbpZ6ZqGV6fhRyXsACZXN",
  "key12": "2yBQKYNuxU3fPCEdkvU6hGmHF9nmUDQVksXHAgUfcyN38uBa7VZUWwAMs4s2L721Z1KCG2SybgCnVFKw93EFbjrX",
  "key13": "4K5E8DWvmQgXMYD9kHzfALL6QiELmd1sGDTyYjqi3XsAdPPKXRjsf7bcZrwSnNPCn8Vz9hCgLnTj2xVLB9hXkPDK",
  "key14": "5GYQJkAT39LnT1gWcuqyHagogVWwarU7EMKZpCgqrs49ApP1Si74hB5UnjQTpVBHptXSvMW2UX1pRV1G4NMKMf42",
  "key15": "2LYx8JLtuMYuGFwTiLoZuJkDrNuqb3EAADDQu5TFstNedzJAUWRX7uoC3BJ9nZpchSw5iJkDqW4TeCzTzBnHibGU",
  "key16": "4RRg49KjqfonQpQBRAyEVJ2BsyzMdYh7BPhmovgNMeZfHjjAtfN8mS2C8sFJ8KYRX9ePaa46QzTqgdUvkqUowgFc",
  "key17": "Kmwd5LWJCXvHXmokrW2DVSPjGNWn7MSJWEPULGdNExGjAr1yw8Vg6N2uGyTtWdSYEXLHQXGMAZGWcREYoHVB9E3",
  "key18": "3ZWCYUKGbeZeXiiyr9XW9ZonHJp9rnAd84Yn7uBeyPYvMD2qfNtSH24z2vX7jpbB4seHaTJAen1msSZSqpE88b6K",
  "key19": "4Nq8WyvADwePiPHCdYDnV13MuzK3ju1WT7So2xNEYh6DokCunLJdioqAwL4C76qeT2r3zzHCDNioDttqrAmzTU75",
  "key20": "4Z1W69PdpNb2sQSaAddetUAdJjr1RRsrnM2nixfAq1Vup4MLCgkZ7TFguRS5xLWzBb1uVDM2fg5foTGrMeyLmFKt",
  "key21": "5UGpkgL4SxCnUvK5WfK2pBFZ7WNLuV2UbBoBfNFv4yq1KT1LPdE5iSEDtKaKiRQbZjDt43TwysSyNvgxCUqSJpiV",
  "key22": "3HNHTiMfX5fcr7zonay4CSDPSSZkvhG6oaVoqU7GRe794wCaxngaZhzyTpV9B5NK79JBYE62AfWy3xKWS6pUB3CH",
  "key23": "MboqsZasBswpfmT6ZsmW5uovNXXVGS1HFNJLTGP9sZPQw6fo3faTVApvgYR2uAVSvXmYEMziGkYSvAFHEhcS9X4",
  "key24": "dXfSV4jeNo1PReRXv5BEbNsmP1RvezhqGnNV7oFgWpRiEXheh3X3Wi1F7jvpLWBUPHd5ieVM69o1vJoPETVocbS",
  "key25": "4MVsMumEApxXz3gHFFtwM2TX24VxWo29BKeZKBmdnp3wHxqmGsYiYrowCUtoEgxVhgJMWK1y8cUc3zcBfZZZnwWA",
  "key26": "36Tn6Qgfxi2PVHJRmTXvbhMTMWc5QGK3GKaXTYRapKeWFFBm3rkt8xAgrBAh46XbNx8tw8a1p45b8XycGKcf7ewU",
  "key27": "3hjhV4A9RtJp5vhjZi2dKJE5RQN1aZEBRLLURpoDwUHKqUYmFr5sBfWXyGqyjynawfiGmCNrj326YNkKeCeC9Bk7",
  "key28": "517qSgbGQSUMYKs8N4gJ6b2ygP8tTNEKpL5euFE3MBgkBZ931rQBa1vD6MYMQdeEtg92ayDBxF11P4ZxCHEJFEkD",
  "key29": "4AUTcqoyNY1xNBJR97dcYiRfwnALPY3egc1ZsLEGeENjRkWGcn5BaireeSwz5mdVCduqr3gspiMzyQCCwm6D53in",
  "key30": "1Qvqq7SCkqirxjEdtJr5w711kvXi1ss8DoVi39BRSEhp9Rm4f2pJYgDtZVXmXnyhgfstLkbxX6k651vr9QgmSAK"
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
