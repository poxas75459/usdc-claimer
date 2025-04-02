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
    "21LbwoLjhUZ1MQfmfTcA4a7gnncWG8cp9ws3gb4VVxghkdAZL7mbQQHQBbPWFCHiEgk4orLmKTLJhGSx3MBfdeJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HFMSDQJHuyqpYKhwjVDwBz9FiBUKikwQBKFtgx1LcfNeY4Ci879MJzXdL559U2GHeQMySPAUAZnsAXUuMc3Pcmq",
  "key1": "34Y1ir3MukoQ95rB9Hoz4Vz2zawYgvtfXCDVfbenQdG3aRcrkjuaT5moaBEvZg1aWZKBfzerKDws4vCcp1SzRad6",
  "key2": "3yL1SNLTMThZYZ8Py4U4ssvjJ5RHWoJzMyzYMDuFVgn9Rh7fJn2YvnDtJ6ouPg6S25BnFCot3Fk3GGHQ9uWebEkS",
  "key3": "3mYkjyvD9xq3FVpuccCMRWFZNk4fDG6RAm4Y1J1vFyxqRY7hife9npP56s7sG6wsnDBrwnr9bLxtGYsDcrTjqJgC",
  "key4": "2Kdn3vJaxWj6qCqmVKED9T1Fh2VGpSAYB3t97DpvMYFUuipGKmuQctmcpgRzjygrwx4QdhVqH5na9AaKnFpvCwiJ",
  "key5": "5CKbxEyKjpJxvZS4w6akALMj56b32HcvPbHaDx4CLaJ8YFVvg75aGF64cTzp7uyverk8oS8cnebvSH3yV4Ko2m7j",
  "key6": "3DR9infTaVKYQRyGew5AL2Ga2Mby9QAoK2Re3nMh7ioBR3eeRmEjrDNtpMWnMkMJ1GUMSyraj2epomL3CmJ2JhYK",
  "key7": "2mnMJQo3BrVYvCpBwCCLz7w3xkUrhzirbsv5KSaS86eJn4FTq6hTXdzy6DfABNfXwdjChRbXYTs2VsU7DyM2RiSo",
  "key8": "4uFZ2mCKNErsgvdE353LJyy5ZC7pAsNac5C1eX8Mx9V4cDvSWJDnPfgp4LcdZGSfcmGfENsMpXjhx5Bj8JJwHW92",
  "key9": "4ievkGAXu9sExfp1Gn33dvEe9Y7cSVShSbxBPHv5pHRB1rLHxmtqgxWh7NQi51kNMG1X1ei4yNEU4VwQp3ssGsKF",
  "key10": "5WngSmCPnnKba66Dgy2vm8eqSPmDqMNd2xyc7hx8hV9KtJSezRvfKkJUNTuFyDYBPJzN37wJAi8nPKZUnf2ahcU9",
  "key11": "51mf1nHD7WwWj7jAZomWRkjxj2t1ABwFusUUyxabhEquipu4A4yPViqgGwEWFyih6kDh9k1rqQhJtR6MkEKBteXv",
  "key12": "5TmzzKhx76hfFGVg6u6XD1PVTyzmid1tqyv6tu5QNcEWc9Am651EHN5DFedU7VcC2zk3YBt1xaSPH6ZtcfVnrNpS",
  "key13": "ezWtgKtSMomkVi5iERLiBn334ZGVpBQw1tu47rmsrUm5rfoYAL7u1UC59ovfnBPX8s5msvuWb86z6Yjrx6YW8h1",
  "key14": "WR4PzJBHUw7f9yC9SYPKeFAdy9yHcZdKpEbrBcvoHcgDeSSQdSpoiSYfrgqyEBgFowddT3YUtSLkiGSF2R6ti2H",
  "key15": "meWEZAph1WsacDxGSCVC6BPyep3fjVY5fDozNLMGsuGiNKLMTCVMZUHkseE8uCQSCHn3rvntzJQYsoHjse9y8dC",
  "key16": "5HotZcE7CycAPr5uYN8sGoo9fVU51CtvB8spMqkX1r5Lkei7P7WjQKLgxzLJiELQyLZipgvfitWst87QS9eAjCdW",
  "key17": "Ta2uhbnbdQBBPWs59AfhpcKJk7UJxaqw2pprtGYnUCAKiWWSc8PpRSUxsVRaP1ZcxZKREXF4zskHJvMRbt85B2i",
  "key18": "3ptiMFXbYvEGkBjRxLbeh4qXV37BhnXhucwM4eo9CD2M6WqpHyEXmEaQ2kfcaUPvTVNdect2nJrWnaP5oNxFWYM7",
  "key19": "sMWT73oSu16ACy2mSxmYmMUfZw6dCiQcF9onSW3CayfowtBMEb2JcTYR51yUd9qqF5rxnoAdNpVruNwPJrQWvkw",
  "key20": "3twmWdKsbJQhRUonhan2Li1tR5pC5kXq6mzyn2Yugkiy8NYGJH4XwAku2YkrdgX3autyF6pRwUFKKiEJXMC3tnyx",
  "key21": "3t8zvX3yDJn9A9qLZAshE5YNTVUFm4XVdkfcmnRCR33eoTQCf3CWLE9htPHhbQg2kNgFqDcGSwaUNpSXzogABkpb",
  "key22": "31BicDRBDb7kSYsb7wDGjQjXgK3xNW7427DQrd19ejJ7uTqUhfhBn3uQKHdFzi4zDUQwY98YAaToXhbAbspRsf5S",
  "key23": "5j3y1PRN9zeo9GBwaL6SaWiCe7Y8sWsbnvQLJHKkJWuAKJf1BEi9t8jo4cavVcxvCdjTzwFjP78AVsdFkQ9bNUqv",
  "key24": "5ExiZXaYum6UgUfJePgNuFcVb8XmxViV9YeTxFutFWXLvYNS9myH1gKKWeHHY4ahQM8XZGEH3fHHR1kMh2Vmmt94",
  "key25": "2QUjbdvp4125hAdDaKgAdectzARVzUKDeTyiVCLTGkAL5bRiyEqHubk6Gcj857SgJKTkidxEbTBm7aFFVMGH9dD5",
  "key26": "5SgAb2n9uAwLFcz5U6fcRaDceEPWSE9m5ftWoM7ksh2dKgbcWeNbBwhc741uPfyPxnJTsyBtq8BH8bEYqSdiD23F",
  "key27": "5c99rgNxuoiKE1FikDEtDjf64Z8bym1g2Taqare6em1bv6HtbSZCohxDhszvXjPckHWrXE1FLe42T51X9fSZvNZY",
  "key28": "4ZFjk6idZpYmDEmi5U5AYZ9nCMCW3RWHTKRQ5YjKuPLXx99Ai788FXjhM4rDwMQugUA9SSE358JXDNbVDzpjwUew",
  "key29": "3WG31J8L6LHSsdKjjPv6f9hm4wRkTm66mp5vULpEqHT1wP9hefj3X94baHUxg4S9UdooRozoN3Mo1bwDxrMmBuCC",
  "key30": "4Nu4UciLYAgmpNZkGSEhh3pjSKPYRggf24ij5t8zQj9vD5tGrKvQGignWxg5VAFwF3QmnaQBqgiXVLwLKTrJYBLN",
  "key31": "noYQRUNsvrXQ2fFCbCS3XDECTwYMUqKxDYRLFGjfqEdvFAWFPZ5dKANAjW3M8FgaUyZAoaTWAYR36Wz5JTuQ27T",
  "key32": "59wUZ4eSTGUojMtSULE4yWqTr24vbr3MXFNbeu8yDTNFFzuuQ1fzdaPnttx2a49TEhnUzNnp7NSJNQfmDna2rcRb",
  "key33": "5gSEKkJGMCKAnwevuCd2N8sej5NqxiNV9Rqu9SCneve7xFCW1L8qWRyntet5nndjMDbaf517YzA67Y6hKN88cBt8",
  "key34": "3eV88aTbhJRwQus8ABiNHiu5i5tDNmCYJ7oPnhQcWzYRvMEg511WAjhcUcAxSoiYkQ1yx1NZBjzmCK1g8THCX2G2",
  "key35": "5tbh93H1JVMNRxpU5BBrEsEZ6RGpMPXyAkDo4bGEvqUE15B3tLFGsmeCE7RxerShuo65uXed2qWGgAZCdXDyX5LX",
  "key36": "eYhTKfAVSmZCK6H1PBak43uY8Np2RQEaHQowWavEdygQiWa3259kNe9xWFjN6ka2MJRk7NjMeEUKi4saWzVyK7L",
  "key37": "3Brwfrueg2wZLmz83otTbqdSWqeMDZ4QrSfPbnNZ4WtE469rzJ5y2nLbHtDfVdwdi1V7EMbpRwz2eYuSgs17K3hq",
  "key38": "5Jw9EFEYCMGi149khoJXJrdUnYuSr4mDSBnyDAEVRqnbfNknPDaEQ4f7HqZrf8r3X1UzYUfsWHn6adWVFyCmC5QF",
  "key39": "3dncw1pbTdVnkVo5p78mQ66pLUzGCmxgknHvf9zauA5jSM5q4PmLM3cHrQ1NwpghvJfQZRRvJCFb4PcprzKTDNZ3",
  "key40": "2tJq9n7naGCJLAR3o2FaMwyuZtGnauWHYcRrw8qx6uiWrSkMN8RjCQT9stZirtFLFRBAHy2NyC1aqaDzS5VMSksw"
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
