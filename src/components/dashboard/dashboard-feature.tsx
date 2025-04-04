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
    "4tDhfJuXPAnCmFVMrLMpW7zbFm6qc9ERqDNYUobvGmSS7ZHaTgcd17nzqeAdZaRqrKoPdgrSs6rmNVLo23hVuyxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fzT5dTHj5ccDZH4tx51Fc4WWSMT4SK4JdQKms8CJP4QvBGNTQapxWw4fQo7ER1q6i24XtYEGKwBL3ZzpcuK3ohL",
  "key1": "2c2CbwCahQQqcENPEwNaTHU3QEDjecCCNzYUreWAcot3fXY9ds2cego3fAp1cg6Aa8D8QcZw3sB7aRADSYBcEzb4",
  "key2": "tMgvNCmXpkegdFsBZY4nPpMFCvrBvTUPQsd5TddjZHYNt2Kt6sFPpPEYuEa2SHfota36YKVzNfC7ot7gDwhpnPM",
  "key3": "2xYiMDt8LHTJUgUCL3Jhv1oLBjatvyxcXdQYd3HjuLe4YqeyKyWM5vcHVLmDm6VZWXUpD6vXeVoa4bARieg7YzRw",
  "key4": "5aAc1HyRaMFQnLrfwDPxvYfyvQET5vzsjQk8mJPFRD9QDV8soGaWHP9ETMJsxTXBZNWHLQaYrVwQPDhFydMscnVj",
  "key5": "3LfkbajpS5K1PegwMFqKpCwtkZRo4hqWt1gKny1mCs3d2iBXjL2uXPMrP6ik4caKjEkjgFEktvxK4NWjYZ5VZV6q",
  "key6": "5fTuMRo6pp4FCLtNYZZ6DT6PEAPBUfUDCLxJxL5xYqMK2hxvB8xxpE2FxLsWPUnmQDiybLRHugz3o8LWKofZtSsK",
  "key7": "2tYdyXYswVBDc8VgD5j9qJf36ZkAvqtiYCe4UUrnWXYnevWfsF8XvVEwyF2Kvc1JK7UbmY8YTytvxfcnRVFNquvt",
  "key8": "w3p8sYXuovrN9zEL2MDfQsVzwBxog92ETVfFL5ibVaCjwMGXkRXgFmT7aAzgKN158NyPN6yhqtib7zDgLF3q8vi",
  "key9": "4HgvtCYjPJNodH7fqeb7eqGxLAch1yDw2sV1cMWEebecC66zC8PXbd6W7ehcdfHe9hZeFR3G1xsXim2nmpMPLdMx",
  "key10": "43MsCSfsSTdmmU2HKecLzTwbDaZrAApeuuX5DXnbUTGj8oACMS3TrvqCL7HUeFhvg6DUXzNfEgUPVMNF5hogJyQ6",
  "key11": "4NMrKB5v5N6fdpw1gggTHuWyZ1YEVgPsdyHARkUCrJVBygPicpJ1LprHVcJGx5RPGStkXUsSkdigFgfq9bZeMTHq",
  "key12": "4z6hziNL3tyN1KZMibVeCTufbSS6MgfKp9Th9Q94oyrqWKymk1Btse3V6gcU9gaUf1e7SB4wPt1HpA9hs2V3Gy6r",
  "key13": "RwyFEywuouQwuVzJrC9pNQnZnKzyZmc1fhEgXhQyepoLuwW4NVJZU1eBj715DZdBun4wtWG1WVWxByvETRdoPaT",
  "key14": "2sZmwxTPrWJKp36w14dmWgJSWEXgrJnXHpoFpzA9SMyUk5M8f8wm82St6CJsT4YUHCRK9buyNZgsUHCqCcrgPGds",
  "key15": "5bAD5mNBwKt1gXyZXC5QN8E36BpGVU5VuY3ZKEiEsEnMyR24dahA9iSud3Yii7VLw65o5pkJQTs9X3Ww6iWhMaMY",
  "key16": "52cadG1EtH4u5EbJ4mpgjYGrpVYzdrj4KPVobiPPo4nCEmfuG3qe2PvSgYDR43J73h8UTZXWytDCSk3iMbcYw3xZ",
  "key17": "2817AUKzrWkMHpbeFnnmvs3XhLzXbwrMgXwhA5BsHuU8AKQasbVg28mW7ZNkmuZeFAvK8ikLxWHQ7wscsAHsfVCa",
  "key18": "2mvEsQumnPSqDiqPx8ubGWRzDSjS6MhAofGZ9gPq4ThqWCtfxGjxTvgbV5RormNq4H2rCsGc6WEKu1VLGEU3sghZ",
  "key19": "4tXsDQugg29wk8sUyBRQKueGbUi3mEqiCmBfexGBJEyRu6vewceeGB6hm1eZMqAbzE53LxZNYr57QK13RZbX2Ps1",
  "key20": "54meZULvGRbHJie5NKqgs6DZcUjbvGcBQiMfpkUqd6eNbySYL2JL4p3FEQtKHj4ZwLuG2FTnfoJB2BrXv6hZt5dq",
  "key21": "2hXNjmMALvMALmzcQwK1sb1X6EC6YeSXp1pRiZD3vqfZKihni5E3GHqqwL8eZY8dBAg7UBtAx4mdKBLxZ4ihX6dE",
  "key22": "4YjGbLDSuMN2SctcTXTMoGwDuTyoo5cZhBTHEwWYgQ4QsuAFoA2VBVqnE46MAMnmST8fufcarEk88Tkre1oV5QYa",
  "key23": "22d55y3xkvnwpvkxz9AL9DjhpWy255bpkarRU3rqLJbXxt4e1WUDf34wdegYzMKDxmiiXPEkz6KcasfBt6G21p8q",
  "key24": "5iprZ29Kxjr3MkQVpoioY2RSXiLC3w4X1AGU78JBWuMsHG298vpDJXzWLkhpkak9hNib9yUZLL5efgbiXSKr8MJu",
  "key25": "4gbAsJZP8doHSzdx3e6v7q7ZBc3VTSKLs5wUKoEDeupeoc8m1QkNQBXCzbTazYh9eJJoXS32hKh9Ly8Tmeh7CCtZ",
  "key26": "vEFE1FyynuFp5Ni3L772oyhPekb49kghRfyRCngMKCtRkCpDPLo5Es43dvszcqbmnBcnZGFYq9kUd1agZ4UvjRA",
  "key27": "5URz5gdaEmZEfTkh9wchBLCyAJ4EojpKbZPxgU9gvVeaLQpv7AVia6d7LtChXXL76ZKwpa6xtuyrzHVvji562ngH",
  "key28": "4HV6ysV7zW2Frt4Y8wenhqoCiYUnh8b68cdU5zTDu5WLjREr6egb8G4istG5hB3w5Ts6vv5Hz3W8XT2FBSzBcV5m",
  "key29": "TYZjXvD5YNbTV9LG7dprvCpZmHeAPKuSWHoGuqQLF4pU79qZNkMBhtHiSvTQTcM2zLfZzxqrWYBvQ9VfRdSs4iq",
  "key30": "2KVxMgkmXvs51pZGCc4Y7SjoiDLVCErVVv5Xgv9mj9xciBssMMpD4f4mcte3XjA7DHt6C2QarEJj3aWu7PYc39bS",
  "key31": "22Mg9uhAn98rMokPXYx8MG8EVxRJrQdqtTwHdSeqTMdhdsBmkN6pC1o4dCfEapqUiBb6fUaYh81LxRpCF2PwpL2G",
  "key32": "2SuJfjtQZsVFziwkL6DhDJnSu6d69Ltr23Rj7WtGoSAtpwVbQ6ne89ESHbUxAuskcsouv2HMMF5UQSc6Tb6uitBv",
  "key33": "4RnFS2yVvocFbL1yGFyR1m3kcoaUzrC25iuEJrasmckmCmSMiHBrTtCDC1DQnmUneEHHnzTbGUVJJraExcY35miT",
  "key34": "3TyEPcBc2iuxontu9BD2VdfczFsvQaDs9h6pdah533Z5ej6dKQQYLEHedSQSQdcuq5PeNtMFYceqCiuRkf3tdLoa",
  "key35": "3bzQRzansKeVXc3MsAVadZttku9YxpRab1qx35jbZ5DcNZv1weXqQN7yte9PQkVXXLhCTQzYyfXDKpzfCGZEXWKv",
  "key36": "3y4YSekFDeeLkQ88F2WwJjT9Krww3cPeomiqK29g9St2ZhfB7tDz8Lkh2FPhrhJ1HEAU3ABJNkqUo32p2CtxfPZA",
  "key37": "3CD2CuCQE2Hhx7bGSNtyDzf6F7hBdkSv24w5DjYfPL1RqNwEAbyyS2tHGDwLAc2h3t9ZPosaguULoEoc4T3hqjQ8",
  "key38": "2RjQEcKJWMZq1q2k9fF7dN1ECR8uYkjjyE34oT9n5EbnGnrgaEtkk33rRWgpP7MCCmgxmHF3AfqFTxNx9WdmGvDL",
  "key39": "64diTAq9DRbyjrcPuxNfqANfBxuBjPQFRrghKZSnWYEADuV5pfgtNChALrkn8QTYDY5fDsunYHgRCdUK5eTtrc4A"
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
