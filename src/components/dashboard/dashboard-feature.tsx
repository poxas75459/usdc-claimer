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
    "2uQDSb7iVxJM6EEJzq7pyw6TSk4pYZX3HSXvyENFQa1Pr6vCct1cumpcgh8hGnwFeENGnwMcmXbr1Yffg5xdhW3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HSA2Q3LKjias39Be7LEjXCdN3WHYSZBuhhcrXqXPMQRvj2Ts4CNrWiU4Dor5SjRpT8PSt8ptTWGjsn7haxjpTSw",
  "key1": "58hPbBqWKwhDtkRy2sxaFh6unghRFgK92FGJab6QQLxNEw5SgzdCR3z48fvw3vEHCYPeUqy6TihTfnWaQ2Cw9krz",
  "key2": "VPELCT5ChNSBdiN7paLQQMJcKSGoXVdhADQLTxe4HutUaqeXqdCPdgwrLvQiJbPtdV87KvyF5KdTJydLRJBzWn1",
  "key3": "45xSBPuRkgBcCtP8xyV1k1tzTjHBMjWb9VNgtASrBGSzCrKDmhTnbeUeRAwG1T2yqPQ92wYg4E9MRX9RmzxQEEPo",
  "key4": "4UbRP2Ki4bjmYh3x7LyHBr8XnWivguoyC3s1Hr7Z356PaPGUnFSmy81Gsre3KWvdMkpAtsSenZG5EMCFjEKoDNAi",
  "key5": "4iSEzhbW5999n4ncwWKbQxhGz7D7JHRp4rNQhAodBSgBws5edj5vshmJYEZX71gc6u6w79gqLAb2o4vTS4vUr3qr",
  "key6": "6SLHA2xeiGAH3mNzpzsiACegAUTbP4RVD88L5EB2z8TZrdoMKKPBYK9JgkY6cwkKBA9BjjnmaFrcRvgKAHqzAL3",
  "key7": "3f997FFkSbjaeyvyCVYK6w55nHP1xbexjfdoEtY2L3kz7QZ4J1z65RuHpakYbawJKt3Xr5GMzHfJaWjfyZGyyvcC",
  "key8": "DvRdnc3W6DcPULVDKipV3u2pYGPgctrbj8NgshwuUTpWhc5h6RdCcDseM5zSa92Z4razEX8NJYrRN5Ns4Cj1Aef",
  "key9": "2HLv1szuvY1X64EWaLmQZZNAa47DqE3P2NKLG2c5jef3Z7WdojxPsobmVRyWBwtuz6Zyt6RpqyyvaCFBJXhy1EpJ",
  "key10": "2LVh63R25qbGdY777cT2eum1xo6rmWFPJqzEUapa1UbSumudn25Fs7vd6vt7Be9mBFyjwsH1YZ4vv4gGmKkhSrxr",
  "key11": "48X1ugSk43LBzsPWDF85Tf87QwBUuGVS8fEn7DJhe8j8KYDXKusaa3yxQoCtkBdT67D51YaeUsia3JhuSJak35sJ",
  "key12": "5JzyVgpp6t2Zen6ERcDdJA7iPUoyjH4dfVA8b3bQHQ7X1gY1QFbbEncdaHeHB34z35ceB1jje2q7jQxZAf9gq4Wt",
  "key13": "Zv3LTHHEBwztaawfrqFicUckqsYNpJUUeDdCuF751xxFp6QJc9KvtSFV6Zehafqd7aYfGwdh735i3nXgHpLGEs4",
  "key14": "BJS7CYgdTPxb29cAEGQWNzYHPACD3UWVrXSzkYhgi8JuyYfGWq1dcJDCsRLgnUHUVMUt1tKRjBLqbzp91bmp5q6",
  "key15": "56wfSkRNXXox1ViU4kx78T2cFu4fed2bsEwKrxESRMAE7MB9SuvUxrKbJC1yejYhNQEeDWC2snyJTwmLcpifVEpY",
  "key16": "3gKocJhWLUZihLVFFfxV7JBzFUoWGAm5WSVVXytVwGxwnQfvy6Vr5Tqo97X7YRqB3mQnwTKjXvbarZ2p6dwVbJbc",
  "key17": "r5rj6CerAr79Cob5smGCRvYiErt1deaKnzocDceuyqao1GgxfFnqfbVrNLh4vH82UpVdudrayxnKLiiGhueFqTe",
  "key18": "4ss4cnnNXfbiKQTPPhxXsFpqLQhWqiw1aQVZQHHQGtt393UM9uNQXMneXfSowsQqjcnK3tGeWBKRPrYpDTn2jbNn",
  "key19": "2kEwYwX9rd1Ba5LydgLD3c4Wpd3G98ABzd7uk8yaUag5CztG1Csfedd44e2WinBKcajsrwJoTZb4ZYBFEvt1Bb3N",
  "key20": "5HqxmHsEwQ4hMFUkqzeJgqmR2P2Du2MWKG57cwQeqnCgGg9yMupS2k1xFbYx4cEYBcnSMqCfMmebVsVDFUEBFvq4",
  "key21": "3J2mz9XPgm7vNtSBZavKokUp9BFG4wNxNJR4knk5ZgjQTYbJktjrSCjTeo8YfJqwngeoCEwBsp6ff7pEw8Bj4CQA",
  "key22": "3DVR89Z5v5YgQLoNHo8zqLRc2JiVzPYnbQjR8kpp9sJWiALM7y6qSEx4YhJESF2SrcqisQSyt2txAKWANoszo39y",
  "key23": "4QhjPEKQBamGhmTejdbP1pg8VsNd1fMDPUaS6eAesBEe2FzezqDcU3GRHCytEVywa4CA5NCLobmLhDPpM7sfsASd",
  "key24": "3ZynnKitXcbZRMZYtP34kFHnEPkEXukDzvGQKrX7DNDFdcM1j579bY9VbvqpbXEL19dzrYfQvX4CmDnEMH8WQiyS",
  "key25": "3xaakVT4nyHHGzWM5P6e9AtVMzgJEwdcngmucjDzyskJqpNY8XixkmWRZHtHH3FBPCumB2vTyYSDz44ZeTfoC8iH",
  "key26": "Hx1wefHkVUbGdpfAjzDqDGAe6RTUHV86sYkg6z581vPrFphSAa17QHBNAVFoLsCet5MpqMX2r3Z7cv8uUPSgGjk",
  "key27": "3E3jeGft3nkkkWh46hAQFjPJhfVhcDQs7Ctdm6iWAtajTyfQW3G9JGEjGN3PoP2hLQ321C9BGid8CuHZP6gq4Exh",
  "key28": "4fHN2ZwiU5ZeU277msKqQCKEdqvSGhuvrm3qNheJBUD3xefeGqXMa5UWskkiMJzXhiHufrKnNG1iXkrriJZqBmP",
  "key29": "4PkrLkCvFNdHmvTXDnoZq2vA17Mjv18aLFubynmSSmR6FWpnLjSKvVZAAJ2sc9H3maGSE49GrzSrmN6wiNHD5MCV",
  "key30": "5r9xX54uMBAVuWgtwMn4jpFzpQL1t45qsYTsAXyaKNxxpJ422sXCqoxVFWajoWNNb4G9LU3HUzRu52Jzf7X7kYuq"
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
