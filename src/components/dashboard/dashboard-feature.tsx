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
    "2V9NA9gwz6Znfq34BnfwW7v9PC3NrdxEWNwcM1336iEvNthHse2fTUUEZCxgHMDkQvbwwwLd6RnybeSDdvR1FUh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yBdCKr6DNm1AZmpSDrwQzVRiL7EfGYkBVVGbW2ZeT3qWJhkD9LPmcUyb5CjrawT57NhapcgkoKTZ2Pws4a2nGWL",
  "key1": "8mmkRvUoKqXhJdxYdB5QXyTReGJJoL1CAoWwPEkLuHq5tDMQ5uWdxZWFtT7hckgsvvUH4zxdYJeZcB4eVGKzZW4",
  "key2": "2NX2BF2v6YhX2aK5NMv4EWzqqj9XQd2onjtkz8RUPGodqRttJhoZAQsK5NDt7yAXo4zokqZ3AJtN1LiTxNLomPj6",
  "key3": "4edJVCPx3LARhwAJMMRm8gWzpSBMAm9FPoFcNWMXguCqk2V1wfAczQ2wqQEUxEqVzMa5kdqT5AXjA1hr5iJytbN",
  "key4": "2fUWUoBSLvnTpB41H5bBbuqwn69MQSNv1xr1VQCBe9iPeLsrVcBruWjRFkQMd49jfeeEC3aMZ4DkrMrx5HzA9xJm",
  "key5": "3gZ8NhQj6zhciyyps5DrAMemwhk17JNyq2S1ZbfoH5vbAxSMpJx7jotczQi1PQZd5cBQzSWxZLL8NHBvwKm86Fim",
  "key6": "2Y16ifPQwhVMsdrXquRQd922ZrCrGqg6x8nTU8RuU5Ls9ki65iByDNzj37BVA63NRW1BpaKEwNyDGe6ExjDmSB6K",
  "key7": "5WZgzNByWSJw21MDVf6toK66pmYxQm2eoG1qVZjcL377EsfHRGVXFEWSYr8mpxFvWPSPipNcYcB7qUeRd63ehuGK",
  "key8": "3AZkCLY3CayZxeg3CasRzqFrKuktvYmfnGqonHdoWcZwpbBqBH2y5MHPErw3x1yGmdgQCEzw7Ymtv12MLH29HsDL",
  "key9": "5NyjyWYpUxrRUpSAP94NuDPx6R9ArjhiMsWCRxyKr5eBhqFE65QHaJEAZbEVdqJorfgEgMYFg7HpvugtrFKSG621",
  "key10": "5kDWqTohaPPV5TeJCAbUbYLLCFsBSxk3afz7LQwDdC8ZTjPmmZkEZc9nfTv2UwmqfY1VSKjCf3MjJcSsJLFWQbvw",
  "key11": "2apMPyXvfsejEE8ocED6jhrztEWBBR8T1jYX27nzYfhDcCWF6xJVDrQ77QMM91imykmNfNNmqbMsqRhnQGHdT21s",
  "key12": "6fzn1nfDEE8jGRvKvyDBsApRhzSVBNEdskDUXKuC3GcQHsyzuwWN8kfwkEshfayDtRPEZ34JLqmi1nThstDD6nq",
  "key13": "3N8txSf3egRZU5qMzJfUeY1Qge18LsCVP583xmgjA2S2iERroejizPMF3EZtaUQX2ia23mA24r8w23rNuZkrVqNr",
  "key14": "3cZUzZrjF4NpMNec1PcaKCViVQyjyHjGHCQZsbAJtsQrHqBSfWm8HVdAZm4AFm9A44LU4euCX34skgrVfEWz6Ji5",
  "key15": "5ogRXDbdZL4RVGJsFLdPQeAQED4G6NvRR7ecDUtVZ6CmoRexdK6zngfYfYCs2XqzHXbjQwggDNeXSL9CqxJtef44",
  "key16": "3hupCqSB7mUcsdVi9R9DFZ4UU6Uc3x4Pz97XnmhG34PGzDCGpZfojkxU8FhBw15csGqYDcLMSFnkie8LEzg7k9Np",
  "key17": "nNA71NaEp9eD3T9w1xT5n1ByzF1KPnANMqQbhM312fkAsQoBG58tZqFkiAh9DwBktM4abNfggoabNP9gxtp4m7T",
  "key18": "5onStLjg99FGRkwEVKrfCgKp21xUuXLA5C7e5vejrdrRJGGqWt4AYc9VYQTrrGr8LZ3Td7Ce6vvFEkyGkBTPmMEr",
  "key19": "4sbHqDLdq3KWujFhY5b2vjL2spqUhbrFBBhDWEqEMYbByWxjqvy3ftqupcUxACTtkWqaT7houDgVFXB27uZcBGXJ",
  "key20": "ESi88XF9amEdHuF5uAm2YUB94ftmDKHfMK9he1NG445vtfC5j7WFDVm3hcqCeaP1KzVhaAyc8nyzynvmBfktY2S",
  "key21": "3ycxfAsxgr8Pkh1gW8PQiBSzpiEvCt5wUoz6pFeuWzEUnv14DyVgabjNUG6y9HkRoyviFVVjrKEbsdKRL5e96LxU",
  "key22": "3riB4yQjW12kCD2jJJfCo5CRVYHm9kzgaqoPWD48VmGSH7uwRcZWxrVjuZgMPWk3fTtR9owVewScbRXqoLWAXCnD",
  "key23": "kP34eskP5qMWtympS9GudPj6Sc3sm5kYEkoDPWvfVFGtvwgsxwZnYDcHK93jkEeLiJRdJ4cKwUiSuBxkgVhSWB5",
  "key24": "5x8NwpEy2meR3DcGa3gsYxvuoXVot1vuPYNEqSQTXWHtYFe4AFA1hecsMaoQxYW3Ne9hpL9UcZSgvWonnJELEbP2",
  "key25": "5gPr5GdDkhsfAjUrxNmyyWUweHeJ34CN85FrBPJvWHxmQ6yG7sWZUfR1uFcvRjpDQeSmEr9Fs5wi61X3Uitw8xzL",
  "key26": "3vZoWEccN1ycR9cqXW96MHbb44AL3MXHnaWkv9ivETdWeag2XjMs97ShTxmGwExZdxuyFKEV1121st8RZTWMBtAJ",
  "key27": "iPXvogSixpSDQknYVZVbuDT9QJWP65yfQBWyLzsEE9aS29qP46CWRMxdHbo4m73hP8cUiMdN6p2YVvFCV4mDLRi",
  "key28": "3rghopaipRyTcpdFraNETANL1AheRQpGqoPjAyoEfbs7Cy26NQoCCLJBGwY6JLBDVsfWshazMMA45uN7UPNni75F",
  "key29": "cEWcGAJ6wyi6hRtTBfjY71JuGf95hqyN5NgScVu72SnScR7APr1XDMYPC2uDx9RBMdmtzSqK4rmzR3CU3VWs8WA",
  "key30": "49hNju1M84C5xGw4dj6JX9a1A82rSPTabYgdXj9pzqk6mhdBHwze8Lh8uDWgGbqKsgK3a4hVKAsGJPuVLXZTcZdh"
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
