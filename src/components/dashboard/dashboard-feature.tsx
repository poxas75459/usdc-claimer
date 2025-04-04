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
    "MCBxEKeMCGYCh7PAVt8WXhoDkBCjrJej8iiHarRzHco4cThAe9dr7ZHSBmuWTnF7bA68Vaddr5kQKxt3Gn6ZeMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tay4DyFUiA21EcRn52JJYAgXDJFgT6uYHBfjEntuMvkAAGdcR1fCtBBkuU9ezjX33BZoWw8agxS7JGiaPErxBDS",
  "key1": "2GS4n7wvLQcqUfuss84JwZ4v26cjoUYfpZiFw5RPxhbRxReWo4dptvvfcPc133PLQskVQzcUWQwGxAkcx69jXeZM",
  "key2": "4iSuyao1aP1ZchSSvLwNKDnT7rsaj3v8naPfwqf22fekdNQstV9RrDLWxVkzEQskEV1tm813Ky8RRvJ8wKzVjTX9",
  "key3": "24bYWTsFpGx1mXLkbWuyycoW4gQ4VU9EbV1nqKLytAKZVTBj4ZMkLgf2RFLNh9kReq7SuZSzXwvoUrRgZwTU13X5",
  "key4": "52Rmwp3UPRQiKSufPZxf1TiBcxNq6Poc9QYMur2fedWCF7J2nn9yyneU2CHE9Uf1LbjPsKGyTGUK2RVtkCp64KPc",
  "key5": "4CpcEpxb2wYQQkQuJovG4BySBQbJdsKNwbKDutA3CPcy8oRFZGzqM5cy6Wy745p62uuQj14EwW9hHzmbqAhSgcFX",
  "key6": "26TTeJSyDcYDiMjS4vzdPcQ7odGD6WrNTXk71nwHv43ybedSYjJTrUv3iCaPpLFfRRguKU1qiq7FhdnCfZw5oqkT",
  "key7": "4E6kusNZ84XiCjA4Z4QNACZRZRGziTeEHnMQATjcsmyZyrKxMFU8ygwTcKsP7LwkUUSWBJd7a9aWawFdH4mgDa9z",
  "key8": "66rKt3GEhJSaXxnKd1eNzQWGtZ8SQSXcmuQgwUa13xuC75ahZxzE1wamw2EUt32CabtYtXQfRpZMCTpXbeySq3Y4",
  "key9": "2fBmA37kwZeBwa2Uet7LeuZaSvf88DEqkyVJCtnp9gU9tVak99ZbUPbEEhdsrDNVvSmN4F6EZZgPL8c2YHPcRNKx",
  "key10": "54GVcoLxxLhTbUR7Gk2MV3GPbfgnQwUUYNjim9q4cySY5QVnbGvFCj7ie9L6kNQ1DpZrUkr3ZmW5SfhEWAAUagsR",
  "key11": "24KSr7ivfwQUP6cXPgpWYhgUXYg1STJk2ZQ6M4L87TagWCPL8pC1owKHXcg9AeAr5BrSSQkMQE5DtP36EKmuEQRc",
  "key12": "3pJj9mDbWhCacsSrygWyxusQ4AuYCxVMfHLx1p55qDDsQLsk6H6LgVzk8eqJXvfhz1mfRvJP2suS9YHYD2qmc4i4",
  "key13": "5dZxSw8KcLnJD6pAaLJAL4Cn5RwsqTBbmoy91FwW8D2wh8mZrstV9Qmtjw8N8ccgctPGLaAMSzfiLDZgLpnp8wbk",
  "key14": "5cfi388HLKCoQB9MbFRyDF7fv6Lg6vrjRYGycEFkhk6X6tp7ku8eNxWqp7wBGjUyLu7PScMQmLzEtWwyCjzXV2Li",
  "key15": "66RBkzAnhFRPRjJPkWwwgfL8vRrbxm4VQQYvTjo2TGUBPGEjVTnwDwW4k2Dv52HHRSjrrSH78kd8gz9hmBwRgVPn",
  "key16": "5RNb5T3gGLWP36cCZTaidLC8mC76JPdm5f7gQJBxR9rrYyVLaTdJYN42pWXqRUNVUfnZ1vkxP9FNiFFeh8uxnCNY",
  "key17": "2zJSJGn7nTS7QJ5EXcc1ZXSK4npqw3B9DkyEzPHKkmuiCzQK4YmaTrqwmRXk8pWkqH7qAMthMXjHN3JTvuwySW83",
  "key18": "5gbXdfuZ5RLU9UGxCVvibXPgXBVZiTd4ZyopHZzLegNq7HTe1q5CbjhWY8tM2sB58wV38bTkHgrkWFZu9e5TXTGx",
  "key19": "66XZBPEjD54gmrNEh4pbbVCry1dgRLZcBxQyxrSD2S9ef9MsHn7hqjjnwc4kqKzd8hNzAbFJohUocZro2Do3vbxv",
  "key20": "5VJU4QtbvSKrAHrTXergYGGYcodrkaoPPQWsJeEDp83ws2Bo59pWHN4FwGLmhREXRmjKoVbnCfJ3FZzdcSCD1hU7",
  "key21": "hFTN8J6pwJHv8PTBEN14Ph26z1E7pBxx7N1RWLLM4nqHTccDZLpnaxvuy5NC6M6ATRTFoQBbbY4yythPVCTC8Vc",
  "key22": "3Xq3Kbqhu5wFikPZtsRo1tkEE5kryVTWLYzVJURVXEyE8XzsmqZZ8gKGHXAQ8GCp2FytfxzEg7kYDwQ9acxYnMfc",
  "key23": "31W7XGCJkxrCNGGpCZ9bpKkRU7KP5m2pZaJiHtT4XoVYDEU6REUYtigXcFHX9vvriPenx3FKfL4r8uR2aG7A2GNY",
  "key24": "5gxTDqkqepkX8gEoTtvd6qfcf5BFP8cWCuZkViLwz9c7ovgWXBbfep6fxQX8AGvGqXqRmU6SrtvBxmEA77WDwwxc",
  "key25": "2ZFs2oYPsUG6MKmgKqCpGTZ6mJznE11vjrCC3366jpiVJxAJa3FuGhw9QGDo9J1nfnGRPsBpzYmkxT78rhBDbbZT",
  "key26": "3FMekrpknkVMXFaM9q136eJ2Gp6ARwzKmGFP1bKQYH5dwjbWdhQ8UJmrQxoDstu92JG8zd8XF8PWccTqSuTBC8Yu",
  "key27": "2hA2AxBdKQA5ns1Tzs6yJLEdVxj23AhuGNUst3r6brkQxv4UwPTDJnToUuWBkZV5dvKt5wFv5FveqARYvJxizpLQ",
  "key28": "32wMDVd4RjeEEG1xxJzANqANEL8RX2N2yq68LxEJ2CuF8moGfJS4FZVCViQmMmo91KLQFDiUjaYrgD3WvNnf48Ur",
  "key29": "2gX6PinqQ5qSAacf4zsB7LtPzvH751biXcQQke8dqWkAREM66CckyKxooDTeqvsMWsd9jwsm5uxgXaSr4nrSek8q",
  "key30": "4BjrbFyAdPyparCeaz5a67WgZegM7s7RfJ2TEVafz2ZWmRvEqBr88ozihmdvpoQkJPAS1qorC1yyVm2ZLrS9PY2",
  "key31": "3GMeBYmpnMBSPFetSFw1iY1Z1h57j59K895Gp91MwPCDhe5LptYhr9cw5maeoohWG9sxL1reS2XQVT648ykZXksf",
  "key32": "2WwP5foBehrAZnSNUAsn52bjvM2ZBa1iezoWF4m2rTo75UU5aUcivDtZvjt9fhYvNFYZ4478zM9ppemHA3R3q6bD",
  "key33": "368DXdbcyyz5u1APHsGw53L42bgrYb32SFtACnnabt1EmFCJRMbXewJspEzcqjCn17HRzYy97fN5YbeCavhhJxx5",
  "key34": "36bhm9ntZtURYsjgo9zpzt6XRW4aECgDU78ViaDp4SJXFjCFr4waENGjBYN3HU3EsvUqPXwD1tWp8nbo132T4abi",
  "key35": "449HvbSbaGAZmdUVFQFrnZ7K96zE4mqvPw4QBrs43QZEGeEMrtTSvs8iobHC8zhf5MdUWwwrHxU41ir9rCnBViAN",
  "key36": "4KsYYFkQTzRwixuGA3mN6WDv15zArL5H6MyXRhcP574tymfSSsQmhCh5pWCoxNFNUBKANRhqSApt5SXe4yQewn9s",
  "key37": "33mMRU1fK5j9uYw3aR61uPjWbtA7ZWDSby6ubaufyWfGxfhrLUgpVjnWUtEbWEWpcZXcrETi9B2B1ekQ29oaVP8L",
  "key38": "FHFfV7Ge9FEc8QVZWEB2TGgaKZptHBLyM1tkZPUP1cbggtTCnCncqCfNHBpKVfTaQWCmRJkMpSbsYvPxCZrXGPF",
  "key39": "TcMbYz7cR1dsSh1GpD5BoLBFgm5FwpSmbRzoCQvw1BVrr4iQwCvntSE9bkEs9Hpq9pFiWWA7EgJSCfcNjUmAEiQ",
  "key40": "4jKbLE8wxpXAB27mYshxW5ij3pnXEp2htAV9kFSDZPxtCokRDcKArQmFdS9goue8vcZ8rLK39479cpuHiniiBt9F",
  "key41": "5n5K5HsbQSwbo6cKwLK9akG5emWBM7o86pxHsKHZtH6WsmPpfdxhDHL3WqD69CnWSprzMmLrqXNZMcw6Qjex5Pxu"
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
