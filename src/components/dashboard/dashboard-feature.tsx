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
    "4VwWKJA57N3a8i3Ttc1UWESVqBcauY2s5FGqA56fkJ26TVCoeQRiDtgKaAFdTkpWKqie3vvkM3hyjzAngYmqpsoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jV5LaRRnRc3edkj1KCoPG9s7vDxSSepM1HUzuMtPe71WLP2Gbt2NZFUyMv2Qn9YBTfK2jVNqCoY8ucfZSJxDH3u",
  "key1": "48255x3JSdacb1y3usUe6CFGmnwmVasDJMc1ke98b4k2xtLBuGUVXtCwRrRXK6iseJM3VCPHYrF3phwVpp3SAxL9",
  "key2": "PppkqYKuN5ZFuVrLikWkWhFmtXh1Q7U1Jq9r1pcPXn5kuBuzLNNnZkHyNRiNKBC4Ab15bo455tj4kKKLGeVL3bL",
  "key3": "5at4x3uxNeAqXsnyd23CQTAL2u8namsP6wiBYr9NGrb6YcKbA8PUjgj48GkAMaJfimbzLbsZzvqRNP6uJvboFWjv",
  "key4": "5jNquz6GrwEj9MTJNya22B6RBpRaSkdSDF8TvDYLCgwgBT9pAedt6k56CwjNwYsCUehYE5dgXsh9P1X6LsgTi4Yk",
  "key5": "39NDJwNKC3wBJ7oYUsoneS6tP5DWmvHWDDKxtou8JBvMNX68CUFL5CNQ6qsHcA6aW5eT8oG1meZZvWmDQtCfgdht",
  "key6": "3nCunTk6agVtH2qMN9URQt47R23wKDF9DdHDEo6263DbkrHqxYQSoruEu7PFihsKWkzA8VPurHxNX4nWXE5m3ZD2",
  "key7": "22je7w9ddiAyty9XgXoECDEQR71JLJfcQZDsPridtDHqgMkSFdG9mtjHExDocGdd1uYwakyxxVyMMkjrGpJGintW",
  "key8": "YLfKd9iFcL7gKMVetx5GQndTFiz3fZPYfhXBBmdYMLxoaTPwnna4vTTyJAk4KZgmg6Ns2KTe1Y9gUqfAf4q4qRv",
  "key9": "smcNq76q9o9JenF5URVcpHxAXq3BfTFyHx2esRsjrUdndbokXMBHJVt4fthuQva9vv23npeuHZ11TRM9osoZ5tM",
  "key10": "NCsaG21cubZ3pVqtab4iswK7VpVo7HKny6vREcqTArrJ1yFF51SewixfX786k2QWPoPA6y9DuEE5epHnHzMzovB",
  "key11": "4QaXkRjdcPoLRxBN1ycupSaD7Z5kCXCPYFz3NbmRrwPyLrCPHBCub9Yk5aVTVyhg5pqQyzbCkXbJnBitAT92Qi4P",
  "key12": "3jB4WQDJJ6RC65qqXynBVUgxfxCoiXDqEb3YFJNUxTsAgMSmAyDVuBNRXE6nTwxvoexsLAL7H5LFHtxZkuwBwBAA",
  "key13": "2T61AEGVZPDujBRwsvPC2b4R8bCrDVsSTKGqnms6Uj66cresgbjeMLLRpR6tCU27daCLV6dtTLSMmNbJHUN9xQc8",
  "key14": "2645SfFjYhrSgsQvYdoj6wkCsDbSz7WgVcLF8yk5gHTeGry6a1GwqkfzK2gbe86hKy8oHxybcaJriBXHsdkAT2Pd",
  "key15": "4rJ9JPYLYs8UgYKuGE7KCQh158M3RZ8xMutAmhS1vgP7ztB8yjmmAWfbJQqpLugwD1rPFpjMNquuQMGWiKcqqDE7",
  "key16": "48oPoBULamGwR49iYBXR5piep5BfrMPiehi5hkvGCh7ExxbEPPDz6fuS9JLkZKYsbmEv2FZNPTxp7gK1xJZKpUui",
  "key17": "65Sh2KFyvwzBU1GKrZpn3YBs2XiYk3f9y2jCSnYnYEZiC8dwLTWBnrj9JFdBGzNaZGp6p3dgE1cWfgF6NhTf1VCX",
  "key18": "4Grep3Y7yW539CAnqemcTRk3F6yBXAvhzAji3DCLLGR3piZnThrerqS6A7XDJe8pN56nb9XyadQYQcs4DVGcU6PU",
  "key19": "61HccQNgM6MA4N9UfdkujwGfkVYNAnCVACp8F1NsbS79us9jfL269EHQPH8u8BFnTcpBmFDJ2MtGhdEmn9j8REyq",
  "key20": "5ESx13rdkoJjaJEdSTTUdEGHj3taaHxhExjWhbMmuL5tTquMn6LoYeyG2uiyg69AqjVX96wEDwV46ZQqXgwXVomb",
  "key21": "4iwU2yHkLbBDn5ZHGCFMx7aTTYgKMwtiuMnCJmuXuuSjjbziZAdK3adiUn5hwkEUsF66WMgfRZmg81t4i3tyXZ9j",
  "key22": "441GaVpW6TfKbZhwF3qBN6aG1qeqVoMxhu7oQokf1Lozz6q6z7DJvW8rr4TMKSajfEw48U3mqvkx7zjaZHBSo37u",
  "key23": "5qSFfLZtZPmQwK1PVHh8N62BszgKrp8Q3XDW6fKjzMyg3YuJ5uEWRwTn2huHewSjMNpumiMfiKj2YBphUDnGzYur",
  "key24": "64MzX9gtAn1n9AV7jmKKMQV9iMXT21q756Y5EKsd7sf6nbB8QC57q9aZNS2Tj73VD3y8UsY5eZAenYUk9QG455v6",
  "key25": "pAUatJjf7EkKZnBUo68tzCJnEcYpca9Mbs5HG7EEdgi7c83WpK4tEMtC97A3RXEVkUS3coX6worbMkw6sCRxmAq",
  "key26": "23LVEzheJ35FWH2RrVmuWr1xRwVSsufh7DPZ5f4D6efDCsUBEiFjjGBRrGMJpeXcTWTUWWVoXKBp3bey8c4PfXbV",
  "key27": "5qofVc8k8EKdrP1wGq5NKbwdwybTYhPL3XCBV1bDc94EvUUGqTNMV2ue67kRoRpaXGkmDyxmkonnfaeU1Y7RjKRx",
  "key28": "5vVQDisfgNNQLpnwt9UJ2m2A1PZs1Xg1YUaB38W3g6BWzKfSxnckaUj7drXjMqx8XVHrcDSCqh8Fru4b5Mopr7BW",
  "key29": "218tUKmD1KiSGuUTUYCzudSTy9qnFwTRbiMhFmCGKUtkgk8ntyvbeLCGwKhJfsiY4Mxp2PLS485c5iCjndYa4GXj",
  "key30": "5xH8pEA2bG8HoU7qYekoAZZNeKy1t5hvRuDvHTP7F6cWhojpWaRb8U8yC3NM2Jthb3VqmVqVbTt46Muq1bVcnCAk",
  "key31": "3jBrVA3LdACT7pyYR1DfyhAiFes9cDwPKzuHRrRM3mU8UPzKqZ6s8bmKswoPoDeGD4hmcct6Zaswy4vgq1JDP8bP",
  "key32": "4L9dQ9HUTAJaVMfdG6npKeovLDapYxivfh7SG31xpPA15utc492sq42Ytg2HZyiRykCXRkCgu875k8MhjZC9QNba",
  "key33": "3FKtGiWP2zz7VYiuQuGQRce6YjTGFJ4kDUtBskkJyFfkY6uew4vcMikxNzD86KUY3Mvsa8pgVJsTWjVbKbcGRM2R",
  "key34": "tyaUYatSEuSqK5vF7TeShCmgraBcqP5pqunCtSA1stpqxAcsfsSu8LdRmujSdMfP21mThKH7UCRqYxFZ41ve8gi",
  "key35": "2hwRXhBKLvGQVe2iB6uWvjVFNDzgwdMqG6PcADNUtZzG4PpyZ2xGtzjrs2gqPVwhhaZphtuvDKdV3N82P9ERrpnj",
  "key36": "5nXfxx6xRrXTJdvg1MTwx7GaDK7Ni444eUx8daZCXaZTBR2XVJ8fqFZsArCzbgKyzkmfWmp5iX8AAKJWQCZdbvGr",
  "key37": "5pud37hECJGLswL18YvnPVMR7UgB3UkDjtg6vzgdzEb6fE3kmji3t3NDtMcqaXm3dWRn6RjRU2HSrFWLCxidDMWz"
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
