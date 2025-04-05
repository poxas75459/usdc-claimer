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
    "53QMMJL6tVZaGJ8CU3sCJRSjmWMHE2xba2KnpxaDBkSifxnFh4WrsUehuuwMbnysWdRnWrBYgKopgpFj2f5sBuLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vjPsJVTooYqhUfvFuTsHxtP3SofHP6KUVgSSWraK4qWMipec3qSMQhBS85aaJfhr4bTmfJ1M5ZSLMd5idnGMuNW",
  "key1": "63A3EQdKdyuPeJZqhpkvzR716WmqFoiEgdMBBJX3Lg1Lzdvp2FLsQcNVypMwKYssj2xjas8NuXa2n7B9ii2iZhKV",
  "key2": "3sE9LSx4PJ5uqikiwzp6PRfJAhbT9w9Mxzf1wJKNDRT6cFpMzbmP7xxhsCGLjyrxLksPw23qSbYa928ZUqdtPJAd",
  "key3": "2j2d93AHPBGiDCY3TgRvoa5VNsAo3XXSW6KCsKrZAh8QC8Ai8PQL5WvUTDegAhCPesrmVEyu7mUBMkZ6YkFouzQL",
  "key4": "57s4JWtFpVwwxLQHnYPLCrRU6dPFNV6YyUMztLu8XWEeyBkM3ATXJuW2uaUEasm93dcmwGZswrx9uVBLC3FqHGQa",
  "key5": "25RpawV7Dmc7eMfa2SJz97Gq3zLgkLCYLNHy7UuRRZq5bH91bPPZfR4SF71Lte1oMkxPWawK3PbbWxTSYEmEzkug",
  "key6": "5Fzj3dghGsdxjgE1FifkP2aC7KaaaLB9P4BXSWr8rRTxeetmpoKPsQLGDtDqwBrKzfVEUyCFQu3ZRFVj6TLZr4EM",
  "key7": "8UU3jUafo9v87RNkQM2SrY5umzmVh6BAMiT4upS3TohsTEEMnmS2rYhmkUBb5Fv8pRBUfe1zDdH82LfqdEVa2YJ",
  "key8": "rjkqjju7YcfLoZGJqUTT1YcARaMcU7HWxjrMk3TzQDPXy4qdzgHE8m4oCGw8dX7j1Pgo4kQFETRgGy1aqqEPZ3p",
  "key9": "5gd4eTwEereLTyt5pC9zdi9WbS5ga6AUU2x9Lf6HmZYJ73NLb6QejvQyYwdMKuLutM8XCu1isJoi4nDKkbEwCCXt",
  "key10": "4Sa5fikoyTzr7BYeHqjVJ217A6XMZc3g1Shro6BwcpWqRPMWem78D7ndfjVULVzLcSRBrf1FntxMAwGs24NuARGH",
  "key11": "4q3seyKbKXQ9q2Se7Z7zEbpWHJ3wqGuebBtDMwjo111j12L3fSWyugfhxwxjV4HeDgYzCq6tAz4AJAe4E3prVGgE",
  "key12": "4LLNoo7hf5uhNZEfe7LwwYvywaud4x1EujMdi1H9Kg4FNhG4LdvoN3G4pJaJwwa2crM6HxGBxxSvSnwdcYwwaphy",
  "key13": "MMjkdRu8qv2MsGNNWBTq97WSTBLYqQpAoUKbkhbYLd4b5GuhUucfsfp7ZDWMyzHyBo6txQ9NvFTVciQrt2gF7q1",
  "key14": "4D6dP2Fzdk8aE2ku6Ftd9WzkWhCMTFjpoYuaNsySqevEofLWb5kNTZwERitZbrkATUjZT1WCqcPthXS7LzAMg4tW",
  "key15": "3WRPr85gB4ts4DCd71YNP9FH54CfgnHmRh5WEikEe8fxNHmxvs7y8PfedhwiAobqDEmKW1jxRCBB8FDd6hZSohMQ",
  "key16": "4gmdvfjS53hoRuh34jddqLB6E1muopfLz9N93KZBuDHY2NBmeH7XnMrrojKt7bdoHfGCfpDCyjfU8YTcrdUSPVHV",
  "key17": "627eVr3uy6oMq7uytBrtcA9354gBzsvzty2hWcdaHJkECMJDXnMqoGHRj544T43fwEYQHRePTSbTQxfZ14ruoKcc",
  "key18": "2L5BBDjLkVemfFYZuf7ED7oW6StxXnXu39jzFiWN3Et3xABy5qq8pqFVyWfVxdHnC5k31cAMfDCQVFms7nP8maSJ",
  "key19": "NKMB7K66PEao8ZVWtL3PN52BzzpKCWtjNCvL84JaLs5hZRVc1TWGqzeP7FEgjEKPQWVzAgvP9pMuQi38LLgkhFk",
  "key20": "67jzN6iyFcvuiNtdQm3WJFUjJb37jgQsVmw4gbxhftr9VycS1H8whBAMeLbc3NS1KW51Uqp72uz5GKjrgKZcYkfb",
  "key21": "2ZofVQtfq2g5TLgSLrNrQSAf9tbuDGQfAmP7UZpX8FxtEDvHZMup91bAqALNhhpQEesrwYAXmX3ZdueRaTyFvywm",
  "key22": "5rxr6gpq1cg6zk18htB2cStSGCqjQmdMTE82hecA8wUJf2tkJwGdUK8VGCRMEzFSBq8SZEvP3axxpjTSkDycG5FT",
  "key23": "37fDBtWa3Ed8bH8z1H7RFYdffjC9RxuiLJu1yEBQwmisVpHodN55hpnnmJHf9fcaDPHTzdv4kZe4MPyu6nB2ZjrN",
  "key24": "28cgUJnTHAz1iHFN2KAngWP4ZM6VKyvMXMUntkhL33vpFbc5vb4tVdPUtz6jwAhuiYGnaya5hYRAG6ghH6sxetF7",
  "key25": "N17NQ4idGueBatJd6M3U58vA2gv4T9QQWs33yHgTyRRomKnKJoVcctzYyqqS7CdipDhweJ4LbagRhdNaYaLVWXc",
  "key26": "vYSCF2RC3hsZEPmQpmLA1onyrc7oPg3d6cMqDxD3UjzEz1HyLdgPZQp4ZBsKEo4TF5XXAnaUh2hCLceKxkHi1om",
  "key27": "3joG8FPfNGgqP6U1FGwCcPiSkd3gddRu7YYiQTZjCLbDu92W7GXgmo6F7nJxMPYP478jaxwey5CxeKueNkbM6iZy",
  "key28": "5fjQk3b7RnpHj1wgEU7sv1CXmddkEp99VUrDtSYhRUmwXFMq5zPGK64DJTfiPfyMF4sf7xcGj29RyDDymyy8H9FY",
  "key29": "83JbDrRAFySU1iHLdYMdm18hvR8ZxK1jcvnEm9Z6Q8kPES8Hs6e1PBqhVhaiJKsUhAmwmq5X5aAj5EwK1m5QuC4",
  "key30": "47HMyrh6C72DEMJg4iWyaa3aYfZ1RTAPkKByCAZgrv494A2nQG6XcSHVStkmuWZ1G6u2hSy79UcWVy7kzv4BLMYA",
  "key31": "64qS3W2qZL3eCiTCFUjoRBGXBEfBUEdJQnePNPEXQX16TTmJSV13TaWkz9yFrJGZQfUVKgpcdxV3SvexhjRWGaR3",
  "key32": "5eGgq8DNo36jn4LZBBD4RJ7TYsq3YBxeZE8Yd95GmLAFQ4W3dd9pnTPQQv9fjkxCSX1LvGSaDDbw7P9EdMa1yymc",
  "key33": "5LS8CMD8QcN55w7Vym3FsHZNXcyC9jSxpZDNgWTEDcn3UcvVNinxs6TTukEyNZ6GuJKCzuKeYN4ASF43Cvvf3asC",
  "key34": "5yVsAHmJtVUGYPaGes6nP5uDT9q7djTiB7gVw2jvx1ohN6DNCTUUXQMEht4R2qxu4V65satd5fPCrgqwWsUChXDN",
  "key35": "t4xbJg71keVaKB88BfXKERHQUmN6Avje4x3KvAdqtJGBGN3XHLAqw2iRhYqFCJRXLwS3KHoZkiM684bt7kDserN",
  "key36": "59rBDh5PNrn4h3k7Ph9nGzgJt75QDMYcxta4865xGCtJ3QDs69Djo31c49JEBC5wnFXdikceaqvH1FFpY1hEuP6M",
  "key37": "3yUr8UqpxLCufjUtoFFSSXs5ut4j7rDd26TPGyMxeCjMdguFPrQo1XRJRjjdBUwxUMmVzDgR4Hm3KsKi7F3cHM9t",
  "key38": "3PMxWAqHqbDQ3vwLafupH6NC8vXBSJzNeX8XQEt9YYHgm5WVoSCYrZEouKKFuQdvhoyGSRve3Wpwwo2QmXxPLcpd",
  "key39": "3sprxpYs7GpgvjaoyKdfwNmRHRQDJWCvWrSutWRmwVbFjxc1DxN9wGsbWUD8ptby6gygcKhL1t7ntULXaDSNzAaa",
  "key40": "3J8zJi23mXLEc7yFMj5Gcu2VpXQdzcUkGLjyUQN5mtjQy6ccH1j19HS4d4d6dmVHKXFQ17a9HPt3D1c6cqgVmfv7"
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
