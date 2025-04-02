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
    "26AX5Cfhrd8w4czBDwfT3zHtKPuXvTTNb4ZqRxhdp9tUxVR6P5goD8XxwuvieKHa43yv5qigghcBZVHU1uQuroaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VRD9hCPbzi15SgKB3TmuqKp199rCNa1LQ28Psms2KbkNNGcCjftHwBtrph1CT1i2pmA1bhWBDj5U86c9JxgMuEX",
  "key1": "3WDg8Gj7xRQc11ijq2f1WvczbRoQgNyYeFdqA4hUydT4gH1ooV6WpCJMRP4UrxtJwnJkeYyG3U1e4VmFDiUyVrbZ",
  "key2": "2NxQAhisRsFAjAsexkBz9Nd52dSbAMTh7UKbjAu9ejh9MjuFtHhDKDFcpbxJCYBehDfYiz3EgA2hF5RiVkAtoHHu",
  "key3": "5QZTRm1un44hz7BBFUKpkhUYbDRwwCHqF1gDGC6X395Du7swxWJJZRNDbPu1kM7A5c1yGPHYBGxcpkHAyVWbq3b2",
  "key4": "4GsnhauvCh6bLUpWFTc14beuyvG9jj8uwKRBaGgHQENLts4rX8teQFUEWeo3NWpzx85xiLwqZ6NcmR9Ev1GSiAjR",
  "key5": "3DsWVA3QpgxjFoa81p8ooYCKiMK8kQYQhx6FL2QDK7GSLa8cv36XhFd6AxtSXnjz2m8zkphV27QLG5bsopGAmVac",
  "key6": "5PUH4qKfSuPogjHYyuXwK96FtCMyADDqeJo154b55jEFx3L6juSU9x6KFzCnycvDYmjqhkRP35q6MdrjCVUhfj7D",
  "key7": "5voeSm4djLZ4uQXoC3raQdBuj5dmwnVsHYdMmiwVNv34dtJ51pjNqsrhsMLaTi1qkSH6ZBRx37PQwPXe2CtLebGB",
  "key8": "3oMoevPaE6mRRSysRs6dJgCRtNxeFWuRuZpmZwJqkBmpQP6gaxMpRmmPqEQEV8ENfefTR4LbR3HVhQFHeEFMc8QD",
  "key9": "mp8HLRptcBu8zEurNZKdMP4U6xsLDPhoWRRZGj2Ra4SpYYX6rEqmnZaZwaFzkAbRX5E78G47N8uxEeZpJfGtG7J",
  "key10": "3WfJ2moqqHXL1cwHvBGFepzjAXRaVmnKqVkV3eVSaJHoZrTT9CMmCW52vq1jEPM4eZcBM4eHX6Q2v47GAecsDscL",
  "key11": "ZU4pn1BhB7v93Sty4kV9MMYZczSodCwA93hhEdJQCiJy9cggizcXYN2Wnu4GXU5VEAjdkVwJhWePWCmzhFosFbk",
  "key12": "3tN92UupNCibAnerXPsJkYVfkWZrkr4Z1dfZEe1dYvFirMhjkNigYMRNseMMgssTXBGyMdVDL7FqN28d7LzPeFD7",
  "key13": "78WzidrVULwbdTgoJsrPgEGHF3F2jy1wpniX31aiqPhG6aZJjivcZ23X7atvEbB9LiXrwWxzSfb9dqiVfu9YdRv",
  "key14": "59aN79NYXxQL8j8eVhrTspW6h8LGYkPmmDA3gTA5R3oHhxdVTx6836juiriMJ63CCFRvMqanJtxgzhh8X1w2xEog",
  "key15": "62ux68UN7G58iv7Aba2M9uMkQxtondFrH3PAzSoZX7mfiofjWRXnjHcDwswkuNMpkab4HmCzqkxaXy78qdRmQMyK",
  "key16": "2heEjFbe7pyUUw24wHfbJGmLwghxZhUnZgL3k1ajSDZbwFjWDiQAdzzpBXH3kntVgHUpFLVXouP3kSn8UkDegxAJ",
  "key17": "9AWjJx8MiEUPkAHAJWizgQAC3beAdddrvnhxNmaFXgptx5ypJPpyGxZHSWz8FuXTZhB7r5o2DcefmJhzMBqU248",
  "key18": "5oAdqMcwJSAyy6nTsqYkC8dG21MsKpZDyoSFdS1WpaFf2TQpiKreJadkG14A3ncFFfc7SfAXKZYmKHNoreAArzSF",
  "key19": "3FN42KZ2nLv4sV3cQ6SDfGnX6ijyneMTQW6LgsqXwpJpj2qucavxEpueLuFb12KovyS1FntkVEB6dbSMFS9mbh73",
  "key20": "2m7AZfmdtBizStpe98Gq5fjwKe417xr8nnCgiJ7dingxYJpRLjiumcHcRm7SrD9bcbEXTYovp4AmCgSwQGAnjkWC",
  "key21": "3ARF8AXQidd67DFbYeJQdHQ2wRfgkNZNpv4SReZ5UfqCjBxzmdsa3SB1TDibiMBfCta3S5E3etzVBjMRTTnLhDZY",
  "key22": "2eGWXKRfH1wPyzMQekMWkswkdp7XGSNe8LCQvqM4qK2MoEgJsdA7bR2HS8RqCdm51QBBsE7rM6KTTd4ju35T3Reh",
  "key23": "65QvsDqFzRE1tvyK1ozDL2vfMMqfPoaLgCQNhuDE7TudbkNumCNeePirrogPMqmYh4zDtiKJEHpMQ9YAc2YKMzDT",
  "key24": "S6aPgVWhe1tuxk4LtGvYnJFddM4y6qopwAYig5PYg36tARb1paxazBg3H2guxgjGDVU7awnXa1MjzruVZx2o4gE",
  "key25": "5btrxnee5GzZNhfXrzGntbFG9NKW6YNiShxffGSpoABbSk7RrV61JKso6jjRaBpcj8Vsn6pN5GTFfYdv8bHXSyHC",
  "key26": "3iSru1tRM9fAfpEVZwJu9tG8eoFV6ktkciSZPvnnVRrYYgfCMHajcyfn2bpXTA8V2wuAwxriixCfaWHoyzF8xyaD",
  "key27": "41CFGiqizzY4WTtqZypBKxpktvtoGL49LNGR8hsDPgRsqzm2V26RGKXvFtmzZU3cWW4wT2P7jPsYojXKhMeLUTQk",
  "key28": "4QvdFLoiy9suQCzSyVi6dn9ynazYNLLFiSyvTTcWAzuLtWDmg6KpFNPxhA5RrLTYDSLJJQyFeVbGeNCUjcGZJqRF",
  "key29": "4uU1p6etF8XAxeLjVRETrZ6kkfjmbmUjW9zABWyVzdm5xNBqeMRJP9oHSQWaP9P66gWMfBsTbrun1DEmX3Wjsxpi"
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
