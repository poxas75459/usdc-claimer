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
    "dLLB3XkPW2AySdZP7Wce5kTwo1wSm1A9yNtSyX7wxVPvwnDfqGYSst52oj8VdoERcSfJnQZBCukHkktcvQ1TDfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zNHTfSGiWDjeu9YExcbd2fvjqz71eGRUWpFHLZDXTnPZYPgfAQMkbVtBCyfYEJxVbqtTcVudvCLWNkcmnqx2q33",
  "key1": "4FSPjMBEiy71ho4xdMfNhUSQ7PCMQsPtn3x7x7G4WSnACLHrcJkbnLJSMYaCfYbY6AkH2k6CtLyG7JHqDN9fExv1",
  "key2": "2zZJCeBqt2rwF5HkLxmXrVq5tLpUBJaF99Djz9pyjCQsNiZG9oiu7zFJmj5J45v3enCsu7opsmph69wP6QxpVgJv",
  "key3": "Mwsnm2vyS7o1dYgZx1SFbheDJQFQ6fALGds9qFvkZqJgbKnWzzQ6dyenAeA6BWfdMvyL3NDTHd1G6Ys7d7HUaSv",
  "key4": "3kkpbmPYnGreb4pvusADdc25JYSPet2FGCs8swVeVffAGwjMN9UrU3fhcXrYR9oLTdzLb2D7J9LTBpnCsFRvpChD",
  "key5": "2rjuKV8YbbRDZXmmJT84v6actDaQhtK4hzww5Q3ev1yhoVhfkGAonmshDe9rRMUZPKEeHPzZ1tfaB2FytFTD2hk8",
  "key6": "66hhfqqqbyxFcpk6xTx5jrAej3Ayvr1Sif7y67B2rfBJ8P1oGa6rxN7oDYDxuT1FUUCdDKT6USyoAW5bDG3JLikF",
  "key7": "2HwFE31f9HhYjXZAejFJp1QNMsQFTXgYWNejVGJQ9qjPVTGz9AbrD296WUfysAwrdYj1n69166wmpbhekwYzxzf6",
  "key8": "2BiDpeXoUdGkVXHZCRKTDwSkZh697WYhQzy6hMFXY7iR9f8i7Dqe2i8YSeZwZi4LQ8eeEWmqcvyYoieDAWCghqLy",
  "key9": "2cqVLcVdPaNUEfnAxPmATMFs2RSLQ1eZXmXixoq3aFoG4XZsNmbZth4M3rsqjSG2367vfuJzjdMPNpSx2HMDU9Fo",
  "key10": "23Va4quJZqPQQcqkTMKiQc6fx1PVN8PQp3sPrPLCyGXjm6rucqGjmBX34Q1VT5HPVqx35Rjj3FcnfRTXhaQRqC9p",
  "key11": "63DxUB7DrDLy6eQmvEaWaXfKuD2M5MxUayWfj6BNk3E12cs7bqJeFMNBcbtvLGZGTJXJwe1FggMadYZaQmUjyq8x",
  "key12": "4BhYFdHh6pktQLDyyGrFo8F6NWz5xGcHGz2xDgoCY7sDDuatHpoz7XMpFQkqNhcgMdSjrmg23C5YTmmy8RuHLgy5",
  "key13": "3A3gTkVQhVgtMNFmw8Cz1StYncPcYwoLDyQLw469SmyFx8MQfZyLn9fN76497yJMau8D71MDBfwueqpT4fi7sATt",
  "key14": "3dYwCEFuE9T8GTQucqM8bP3TLtN3RNi2jCy3pCQ9MnNPRVGmdkRHr3HZrV3xGsU7rUSHVsQY8LmwjmLVWG3KPbcF",
  "key15": "4KUzJvF2WqpGeN3cKHbDXDDbNbSfBQUL5YgzP7ohmAR99THaiVrs45GLvBYWW5npjxcBkdD8KXdDkwtNUXtPDTGS",
  "key16": "4NBnFm5f6b98zpp82SL12KZNLuLSZrZNimGNoS16wTaiZzmpL9JrLTn1noswR73Fd5jCDQSZ2wupEzXAVzhZYJJa",
  "key17": "4mVGBh118BgjzYyWxDxWXjkV1PzRezdjWhD1X4BLnZ4jXLcec6jRXPydwdrc6gk6pz45RYMRtW9gsgyuTKf1cktN",
  "key18": "4bP3SLqi7jMiWmYnxAmR9zg2Nv8TrpbhV16YbQyQjubAi4vg9QaJJdqfHB54whXZH6JLLmus2QKJb5H5k3bN9M5h",
  "key19": "61syyER2FhyhAz9iwM2JBt6VLnUH4Kf1XV9jDZxk1a543q6nWCQJSH9KBtFntUDQsBxkYRyUdy8e6L8ZTbTKdpra",
  "key20": "5GgTsHGpaWxxZDnAqxaa7K2VQuA5LgiWdLj1PtFCt5nSrM71q73o6y8cQWQFWDeWzWvsbxtJ9yFkR4swTkdfpksy",
  "key21": "3c7DiR8WWmcTfyCAHbfCDSChiRJNwK1xveQsZK6pAe6wMNPwC5fDrAmQKQrg3i4m4jLs6pX2WCmBtASxvkrfzg8Z",
  "key22": "62t8SVJW4TwbSS8cozoe3LCRn9zMo9cjANzV2NDQj6gyJbwrR9b6JvDovRyvBJAgUgkGfXrqewFzbGF5vCZGrQiK",
  "key23": "4asXtPLnq5s6QdqrJ3BsWi8rB3inX1Xe7GBweYnPPZyiFruUsMoadxySEjKvrkkGhweQqUMcMX2PMf6uoQC1GEWn",
  "key24": "4RRneAEokoMGmPaGXXtaTYXYDNDwPbEVvTAXNjo7MmEmJTXfJ4oxdNyjU5did76j3bWxyHHnoBZp2D43rhcprArx",
  "key25": "7c9pc1myxaMRQC8zAvGVhFgGVZokyQzamxXF3C17Cs1eENJUPAvHjjH5QXzQ7vbw4d11AWkDhLXfDYjjz5biRNL",
  "key26": "xUgjwMvfvZ1K6kosr3udne9VxDM7rzuVZtFTYB3VS4Jh1RmB4G76nD5P7kHWMFEhkeEzaczRYq4cDXVaFaSnn5n",
  "key27": "mVLaj5T5hW3sjSEiCtuLSGKzNKUKTTDKagjiTkTWTnZKSNcmhNpyZrj4oUJBHHRaYukaMqgY5rbUgf2y5j8Wy4s",
  "key28": "2sYM3PXWPaCLeui8iShmXv3X7ToHCsLF2nUaqQXihzUhAMaCJBB9kjG8acfbUwa5FBU8111zaZf71ZAFH6cJek5t",
  "key29": "Ca8wi1FotC3SmLMq8M58pimbYE5JTNUM9K1LmYxykAh7PV35ZhAfgDdtXpBVMuP7apc73ap7g1rsyD5cueFpm5m"
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
