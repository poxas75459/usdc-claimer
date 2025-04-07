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
    "UxxQo9MHyVnZKPBu2qLjXyK95AGtUBqnttdNbwgTwiRYcamiMXLqKZTwTTF2CxQMettTUsE9yacKSZXbJxzskE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TGw3XmEAF8o1k5z8EZeMztkA1CdVtVAJb1ZSR2ffqaZroNqGqpqNxgL1v2Bom1DjdMgGj8bYBTW6naxvV3N516t",
  "key1": "3cgBPNKmzATQMEaaG7ryvjCXTMrThzpZk6qjG2oJAWnA3faz3tzhtMTj2GByoAJ1F3kssRoRd9Bz32cYx4JR6Reo",
  "key2": "2Rzq9XmVACvRuT9KJKa1pM7GxZqn2HcWzsd64fPyqnEaPN21yMWNgcYyzqiZPZxhGvVYhQCsNV326dHFRTFSRPMw",
  "key3": "5vvhSxRKRUHLs9mcG5jBrJyXuzsJgfyEbwNx31nfMFFgawA8NwiEDh54TVgCh23ABDzdhTpuq232up1gNMsShCtM",
  "key4": "Rqv77NdU72S4D7mrN5riMSLT9BbYuQTL6R6PYdvYJT68aVtZAT9ZSsnwN6rT7ZJVoXd74wVRj9LGRRSEDiHSqwF",
  "key5": "5h5UgmfUDDoXbYdTrfnwLY5xT3mu9tmD87rTahBvdJJfXKaWqgT9Ubeqagd2MEBxVREczZ7PhPvY2wwgBhr93Zcf",
  "key6": "GzexcbgJgqnB5PHaj5H6d2YRcLP25QVwHWFKnLjWDBGfWbvPSD72WUqCBNi9Nv21TrBTaPhH9a1rgjMMj7JNTC5",
  "key7": "6GwiMUtcLu72wBMKtUM5ddav8an3SQFrrkc7BstaqikWbobH3kvLaP9KG2WthF29kBAUwj5NfYWtcnYksxBeTx9",
  "key8": "2KYwxG4Tp4qGWeFFEahCCsAWgFNf1V6aTfJG2DdwGTydCBayp9qDA5wSb1tsWBqxzLRtVkdDqVNCaFvR9GVW2t4o",
  "key9": "2GCxw29gHVR6nugymMH7T8Mt9ryMDMs6yZuvGbsMQfE5Q4ZvkH4mmACLhKyyPF25JUmoeveyZrcpF6VKATfXdtR",
  "key10": "4zqdo8UcjviyLuC3ebXSUW6jRA9B2tpLfDrdYHrtXQ9iCBDUQxC4PUg1YZVaNQGmTXVRe14NZcmxp7FL1J98fEog",
  "key11": "2hTk57WJKMcmHpEtpvZHXLWHKP9qeVEhEAGgaU5zN6bVyT93q6JkfHZPBELNcTtGYRFz895JQ2LuMY8nRH4PS3Gy",
  "key12": "3Bru2oWZHQ95gxBJGAZZd3okfnWEQ7Jntv21CD6PMvwZika3dJHXjdbHNevVffDe7kTdg1BWyMk2oaprJyovFykp",
  "key13": "2ujVHJ1qrYB7NLpCfGadwnc22NZCmvMdSKxsAsA2rsuhaxjVLY4EZUgFZXdp6xi77U3iaZXX2UwieqRyRZWRSEL7",
  "key14": "4KaEjD6MjJf5kpPQS4qzcL7AkxPxdLr3LsmePcVn76qJYwLNJQJbVWoK6Tmxq7dtoBUt4fvpBZVKGCUjbwGUYgbJ",
  "key15": "4UHPjtAptdDASiLSPGkas1ARhoYkM52QKA9ZCrsJFto1ntD6T51UtB53mgPU11AuCmmGUaAZjdFq3rL8hEa8uiwb",
  "key16": "3tp6ocYgoKQ16gUVtzNrs6pADTX8VufUfXnEP5jNvbvMepYR4gfN4qhUNgKogZxXxm5bVNaecKcsciUYLwbKG8EU",
  "key17": "4RfvJwov6ovgyns1kzizKAc1GchmsMNkiBNsKE47brHhZcxRcq9h8AeCMB5fTZEKvNmV2Q7rpQw4qbVCm56XyFey",
  "key18": "5pwUfJQL2TKuACtRiDaLQBZKQX1jVimAL7JkueLssthUEdovDBd9xmuBftAXoztiG5bxkpTUb5KsbK9UaSEjfy5J",
  "key19": "653XUUJHg2J3UtX76WjXAv1wKGRgiJepZaE14kxES2w5joiUuCzLNnkW9V2jiDjdWeB1XhmzQ3x7mu8SuL7udNzc",
  "key20": "46fnVhapPtKr32e1cFsS78v6fRs2QVU47ysdmeThxz7NGgmfaak4pACJaAcLFiFBpyWZknG95M1RaGmebiz6Ueua",
  "key21": "4nuRoTfMwFSHzaEvQ1qcp8jUcoHhB3stFp4qacEm5EJnPbT3HqK68PachrNwEsbLaLpyYxeC5WMtPGjJLu6UZZzx",
  "key22": "55gcopTUig2YULbW7sv6At2e4XM3mcZmgsiH2kWwJBXoGN83GPVzMGTry19tUZnP9vRNpAE3KQESoAJ8QYHKfEMh",
  "key23": "5ErZdWarDbDKVdqxStgHKDZjHDstcnVum5iFqRnQ7K2hUkwmEyhfh9Lmu2k6FfDVEpwncHxdpGtT3nks1tXVgony",
  "key24": "2dYCJFQCUZtAhpTMhr7mBENHVteQ2JZBAzP39NsrXqfoZbSYzaDkW1drewjRDZFjraHreHqDvN1VGGwovrgHLALK",
  "key25": "5vCDhxvRJWTWSUgrEhsVtrH6bKXSJ1Bad2qrqGgzp9JYb7WcLpZjo8wmCP4eahW9gQqfUA6UhafFDXP8wvQaUGV7",
  "key26": "eNoTx2HKYnt9Fvz4AnRwRjbCR1czXT7HHS8DGxAvYDYjDnz6wvf3UvYuk2ezHuZqJsXiDXDBkTMAuhSpT5uxApL",
  "key27": "5QcFYgNFK4VyKLXHKuD84mj2k8FHvVVH8DSxXeawX1wQ7sNnd5dNHLN9gi96sWG4CtuifaJz33C98vusmN7SWWic",
  "key28": "gj5oP412PtBQKYRu9MtLjPdQYuTWZEzCSCtkqrR9h4pFaUTSkHARbns3bLpegkNWKspoCRVk1sLQoS9YdngHs2o",
  "key29": "g54pjNuiizF38Lg2NPMtUdPsu2bnaWNCr4Q1uMSeiWJteJH3cKgk7aXfyLzsaqZrpvSXtgXAG7jkRqNCwGJYoca",
  "key30": "YgveEVbc2vkSyrcYaM6TK9bvDcmqiodyxj67kWkzgAqVcQKQUNkhnQJ4M6Qe71hsqAcqeUb5jgUCTxV5djpM41r",
  "key31": "43pZPQeNEqD5EsVnTgGEjnmvBP4pA5cVZcRGepHxM44FeUU8nPuK5Da7PidoqpnuA9WzRwQrkC5af7j9qZqoAyAa",
  "key32": "2h798GDRvcuxXSecQKvM1nHvATjrH6HxVBdxBT3RrjBPWdVM8MZiMb6rCNevQXzpdz6XJsutpR2cK72v127Ev1wK",
  "key33": "35MXWP8h5tLwQpH3rPT1AeiPZgVHjUbMknZF972XyVQ6W9tQvNsRMo4V5TgFRU47W61kFPVjoYrYAyK1oUNv7Z9Y",
  "key34": "4UqsgRccrwfgUEhLc6chXFcQ1PttbF2kSREMMhgeWsxCQ4GdnqBZgwXtZYjU2cEnF4sfByRXQTCWsVCrmGf2JUQB",
  "key35": "3X8p2zBtHomyCMagDouWTjrY2mjmPUKdZZTwYf4CDU3GZyWfSJd3uC6hxw6H5nYh22heUEJxpTdkAYPx4EgMLY54",
  "key36": "4pLAAuvy7gZrYFva3WGtMatPEmZGBCg1PpzNWTYT3N8xXHBxr2TuWatfo6g7uP5nPvA3dwcksi2VRVFCr1yMa9hE",
  "key37": "5mWyt8p8VTVg1T825JLe88iaimrjQm6fGkPv9vTLNC1GY6zmd9AzVdYZFzeow27VsYC7PBEdiWFByAxVxDSYC8A6",
  "key38": "4s2SvTp5KXtR5ymVqCazAmzsaryD89SLfZcxv8yq2J6cKoZ3D3UDo3CBWNGDHnpChCGuQk2WQLsdatvTeUfRUTeX",
  "key39": "319WFucG3omgqxWneqpYpinCYGtTNefv1kQMYda6aY3CsDZGQ4BMFkXqkLfZvRx6b7a9LbiSs8hKwKhm1BbGztbL",
  "key40": "3zHy4rSrwJxjYc9soXy7LV9jBdBqFuDswULpwQJa39uJkkSSKcBAE3hs4wws8zq9yZvZSDHWqnaYP9DqZvwnKJW4",
  "key41": "3TDMnJWEfmXmBHcZD3t8jFmpUDExqae7npf5RjCaENoHLoJSBT6a6HMYAfdHsbu4ypLFnc47LkrahJhsn1V4LPrd",
  "key42": "2DydSEdnPnyiERWCuK5TsRUsx9VgvtfFftATmu1Zs6jGYtJnGzTuPf7YRwxcag4cb9WP1kXWEcrJorsY2MqsXMG",
  "key43": "37jkJZjP8ZRbUsYXC1YBvTHHQdDsmGSzfrnGgkJdpCuf6gaTgYQ2j44V6Ku6dw3xNqcBKLwjUcRyRmsna41CqEWd",
  "key44": "4rCt74W5RSFoqLMQLEb3f73XqEtGNn1KY7Ky7vN2XGKGsSMnqUSsPy1CCMdbfa2bi2o3DQ76p6efxsavXGmQcR4b"
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
