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
    "2EJFoQMMaQfdATDn4z7jaiegUAqVmMZY9ijJG4tLyrJUVPWZokHMNZTjDKkgz7sZHTQ6dqNpxUu1aV2NbQia45Ub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "356pEGhenupN2xmYBAPXuNk6m2BnhSzgq74JpjUPd3xtB7LFdcy1mvAxTyDxjpXvMToWEs8sgcYfXv6qJBZsgscu",
  "key1": "3au9W8UgfQDuegUFW17pJXEjcuLrRSwgq1ZimQRVfs4bT9Fin4NMXk5VErodXZ3bLWKez6o8cv4mra5FqmFVbaK",
  "key2": "4WicLoT4Tzn4M4eu7Vnt6735GTXQEmxxemnz4XWtmZJM2x3TzDiAVpXYZ3QGfGBKYsZGbrd9fCEqH7NoZcXXwY3b",
  "key3": "4ejL99JiL7NfZYM4saq4NFeS6eG6jjn6beMGQ7q7qwdW838kmkPikSfdDNmsGXymfS3bCzcBeH1dVUBaHkPxaPzt",
  "key4": "5obgWKUrjFJmdBqKnNRp5gQWfCDhghVfjQNwxgaLCtggdDZy4C177YMsfNjh2rUnEqF77WaBv8DmvTdWZHectbQi",
  "key5": "4VtYkMc2Yd1yUU5GXFW7Bv22tq8JuBsvrrahfDavLxxi7GF6Pw5sWLDaXhDoA1LxeUDYqcErpBd9DZq6d8863yWp",
  "key6": "4D7L9cQHzRAcYjp5hZBdJJzxHQERxfCDYrc8yzXqv4suU5F4DupSrRnKoShzw9Jf92czgzrpRk9FRLLh6Ghu5Jg1",
  "key7": "5HLw3CsXJRvxE35vcJeDqVQd5kvKWk7UHDzR9rKK2LyVZSSSyrBEvx8i62tuvpt8mL6oxJmY7cCECExzCVr5wb8V",
  "key8": "5LUSthCVPjoK1UKwXZ6nTHdnB6id2oUh3Yu6q6dc3M6DQ5G9kxS2E61xPPLaoyuEHrKWmeAhVzxZpbX5fryfc3z6",
  "key9": "4yogCnQB81iE98gVCb4s7acXUQTgkVP6bu77eN74YZr85v1bnE5SRcMREd6eZZfVLMKbEzSh9H7wfqp6D8FkKgwh",
  "key10": "45XgX2C145G8HessnbnwRAPBEPLvPRkXgYiVXSrR6aDzCbSyheWd65JbpSMLSviAzZ9wkBCJ1EcD4szNpBSKk3mR",
  "key11": "3GtX9CdNBFgovhQ48SShbXfcGxnR6WJmUryhkiMFBwwLKda7r4ttPjczxJTD5HUVwDEsfkZ8tTzyrKzz9k4R7GJm",
  "key12": "i5R7oBg5LuH5DE3UU4dcuraSrRcpvGNpEykMiQTwfWkReeDaUJqM8AVm1C4YVKzDATgtvzCZvgXFH2MiFhgdosU",
  "key13": "3xwFuYufDibqRCeUUXotahcEpzwatqfAYYT173e7TN9Riqui3ggFAznhnLmBHkvdXpJcDGLynHkeWGF6V9UUWcye",
  "key14": "5BrZ7cuhxzv7MSrR8BD5BmzhV6SfdamBooPo3KJkaRwYQBrE71e8jZGoseFPLpgF7yi5Y1Z77sT4FnDrLdThjXgY",
  "key15": "25FCJXyyQwL9sZdUVDJG6uVDrBZrtJZwS2tNeBEqLMxdwCwVuCpCmGRJkCVjRnnK76tRN8wrJUfrYiqdCb5FUJi4",
  "key16": "2svDdHGu7pB4dX5YJ26v2RXTUz3CizxhiYANaG8q5nmiz2Jv9XuTBjTwa8YMnavtsNzGZic2TV69wJZ3bKapvo6H",
  "key17": "5SJjH7pTBbbJ2JTEyENZ9iKhzUvLaP9mMFWS3RNtmydoNCS8gNMNMPTm5W74xpXyZbeWRzQ9p8dAGWdRQ5aHtksd",
  "key18": "5wNoSv7g5jKZaSXDoxtsmobz9CtFwZQAMByuVQzW7Jwefdh2kSkujDcT2kz5yvxwtCYYTj4ymdgqVJCTjTDdWZa",
  "key19": "5beEZAhztqhPUAJ1krwfj3z3L5PsyTLSx6T2MeVUkFMFSNvZDk1vZpZJcpgk6zSiscJRDG8YDMPYTzu8avCHT6g",
  "key20": "3ak934iemKmq2oFYcWEicPoFeMXy7Z7EkmAoG4Z6AD7Pc4XMzv4f1GBo5EBdKihTX6TvhSfDTJFsXW9bDPFcVELZ",
  "key21": "4mRe6dps2wpbp3j5jmNVvxxXSVFCwFqZ297g2JrNsEYqzF3ikBcGtVa3e9jon8McY8cdiKtSaJj3wG5fZK2KR5rx",
  "key22": "3qniXdEBrbwXvyPrALfJ1GyhwJKrsozSjvasp3Fq8CCYt1WYVZsdbz8n1YrSfTXRNYMPmdTDYeiqGtvBqj7iVhzV",
  "key23": "2LpU1VN3MNpBDLAyUQrPrqcpJe1yNJQ4tdPuGCEcBRGC1c7sMd1Adyyf3GT471QXEBfxnNYG8NyGU2QtvuWL2NYe",
  "key24": "3tW7ddUSVXVk1oViQqJa6365Xbs1jwQrh1KJtXBp9PSW9f8TRLkPA4iqMs5CkuRQUdZhg3ETjJxLgUMMnB7sTP4C",
  "key25": "44T74kRVeTEBwXcXZwFxvK4qogrpwxgYdiE6WYTkJzk7XxkxSwLakJaukHaMSgr86g6GS1ou4pDWyfZ9r1Ze69gE",
  "key26": "wGcWk5tCVEqNFqSMG4tYKFFFWkPBMhLcHqpy15NUR3Zpq7AztPiimwrZtUp7EwnevKUrAcsuCrhjH8B1foeLkb1",
  "key27": "33ekyE9KTCmszuPHyH4ruEbWJr7y9MsyC97uUVkuqgb1eS3dwa6FUrNEJaf6XnS4WroqYfharkoRozAJ9oZrffz7",
  "key28": "4ADEFpqsNHXZwkBdQ7EXL1WmR9KtinXhhzajGsWh6SLZyiKWeSJgKNEqwdFDwvxr67cDSfu8tc2CmuZMoSP2M1uC",
  "key29": "2tkkZX49MWjXqowLyAF1G41QA3hGN96Mbw8gJTKv78U9yqpg7sUqnW2DGeCE2LVaZBYBBXY9kiz5vDyUkzYbDs2w",
  "key30": "k6FiCtay8Nsq9ogTQj8xRayRhED9iQ5zERhbaiLnkDPrxApS5AB42gCaGTNnHQ92nRZQLH7ashoK2NfhmbJGtNZ",
  "key31": "bNAdMa3jU3St5Wws2UuAUoerVRofzuAck8LtCzNSSLXZbphW8T6FAbQnRGHS6n7kDdtUAJ6EhPtfVf8MWzeo7PS",
  "key32": "ZDm9fhTNFJQ9ULMGxsVSFugAWknzKwMbz1JqKRXZNtw9tUGr8Ebfgc9LEJSZsctN4Gv5oKG4ZdW7aRU4f4tkFv2",
  "key33": "bmkkjeswUyqBup8dsYMvWcus1K3CPu39hrUrDyV1mSTCVhpHbGRQ4ZgMuStuMPdAyo7HksdX47Zf3RLpbhhdATv",
  "key34": "UDM2oKTx3MgxS2vZSZ1ruHvAtgAN3ARxfHE3Q4n6okMHEkGk3M68dpVtAEFYAfpf2UXgo13xviPoYELU3mZKkZt",
  "key35": "ikKcC3dABvYQb42CgpgjRSba5YrrB1WsyZaFVf8gwgi41wYmdY36KNE5cGYBwuzXvVDTXgYNksBZYcHgo1VyP24",
  "key36": "4QC7RLgePntGNUctBd7c7Zt1wdAuxQpvkxNneFj8RSGpnq5Y1Zb3TxEaGkJydyvALt6TDgtQancw7nmohhKNZaX7"
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
