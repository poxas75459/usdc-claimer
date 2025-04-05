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
    "52TKtGcwFzRczuBMwyJ5EH1xmaGTB9eHf9QoAzM8nDFjcAXCkRWtimBnfZu9e9N6hpatoSKMoGJat491qf7Qkk2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E8Zxj7H6N6Gnz58oWgCjGkUm172nJcEopKkgp8sPWYJ7E9oqK59AM8y6a13aKrb4pBaV5qnZdxR1DcikGH95jRT",
  "key1": "44djAPR8KHdi9KdGUvXmuWsTsuZJVjtAtC2hrwzeHJBUn4SnMinpz5NpYkNt4QUA6kgmX544cyje84nJnH9eMTEf",
  "key2": "3n1kHGH75giLdDz4c3rR6AGSQ6tdJhsNMgbux1BwdxrcMxkU9pNFtB2kV3zHq2cJMSFgpBfHbv62RESuAUzJUspt",
  "key3": "5RiHbhuGzzLwGJrkWDTGxA4HNMj54ey76xthyjndEb9UYhHMv3MiTRsuLAaSuMqUFkEfjcYFZcJGYEzobXAurtdh",
  "key4": "5R29rN2P6XH1qrFoZbC7fkuKUrS9BcjMBX3kxMcGfByfkxKYfr77iCJGXoR9HbHfjuQ8ve1BsiHoyCLwaRic1asx",
  "key5": "4Y13xf7X4NcDeZCDzhhkb1EN5GWLBQkoVfD5HAz2xbk3jXZR4cQVYXhvWAHowQTNFk55A8uhzBb2zrX6WXz3Sorj",
  "key6": "xEZiN5zVYLp9YGCbx8js4wywnDJpi32SLckuL9wYxGkRKKpejC57KoSNsqgv9pnuaj5gt1479z21zZ9LbAC5W45",
  "key7": "5jpaw2E8j9VvzW8WV8gPQVcjnVxsm8PK78nA2mty78gnz3NbBUFASHQgd5dvnnuo8abLNqeaoeqaqbgfTM9736kp",
  "key8": "2ZCpFDFFo8J4DN6DmQETRewnod7Ao2UAS8u8PXnw7gwGhNZimJjE26QrSFPhvmreBywevhNYLHrAFpCUCAyba1a5",
  "key9": "52vzwfaoQXSfx2o8F4P2PMMx1G2pxmUwFNmU6YVKaTQpb9rd2pgUK9mgfijpbvPciAaN3zscW85s4bUaQwVGBEzz",
  "key10": "48RLqfHjcQt25ziTuoVm3UtuKxmjcUVRQgaW3da4nswkLiQd4k2UvfEw8dYySDtJqZNr4MB8oGKiJBRGq4kw9Jrh",
  "key11": "4oGTWbExBWBwwuDgXdRvPSTMt5nmh9uAygSfA14TpSzt1jLF8Us5RiCXubjXkHp7HrZ8YfrxrQoTNDaM4eY8pdtF",
  "key12": "4cdGtEkCLZ2pJ4kqgG4zuNnECy9biLFNPAsvuYYMEn1zFXPKAotQNBH2uPMQGiq6KgLmQze6aCkQCM4QUD4Arcws",
  "key13": "3NR14mTF8Qvbpb6ev9HjCHVyPXPkyQvvhFJacrN6V97UZMFBBvcSHTZyZgrhEWLTocfdUErUZEEeRuFQSZkK3XEo",
  "key14": "618dFduM93kHKZgjVCC5NGpUFFtqWtvptaTnNPxjUuRGBuCvSfRFEMGpigpPDLqxMDZfzJo5EXfBtA7qTgph4Nkw",
  "key15": "67JCg3j4dmttK6oLNhmcre33vC3Z6rtUzN9JLnwKM8oEHqHKgLLJ8FTECSauRBd6jgXfkHRJt9dJapSzrtG6fiUy",
  "key16": "4oj7c56M8wQoLYWDc9u5ozCCUgMyYV8CThzKxpVF5VrCt3rY3CVDuPA36RGsns1y9RTSCV2ciETofg9xkASipqLn",
  "key17": "2NjRrR1c4nCJ1igcNPPwAT5LEXXnyzdfK8Ns4uyKssfWtie3j4fxMLfe1cGRSpoB8k2GRcoPdDqNDUEwmAYDxmLZ",
  "key18": "37CzhZCxc5wrFR7muJBa3jkXxKx65a1AXeqf72uWCaatFdFeDKkhXgcb9CdsanZ59vSL5ua6MuahNEoUaZy3b8Tf",
  "key19": "5PacqqLr7nfysvNfJWmWj5YAmBdyu42A65CKibAgQ8ZHZb2vGDtNK2kAAdBX8xoABnL3jxN7tgG4YNAyvLARzwX7",
  "key20": "39UXq1VhUeCvj9hgTkMSUNQPRv7rjMB6RFCGBM7kvFSm1rn3M1etoaBYEsHLtoznxt2gURSiT4qJQa91nUhgcyYq",
  "key21": "5Ljq2rNxBy9Ub4SypCcimSKoh1Aaeuavt6D8uTBBbjAwKsT9P8m9QnuWGNTHokE6xZgLW7JBoXmq8Hsx5dcMhTBa",
  "key22": "4ZAqvJU4ywzvLVLaPKkNQPFQfy1sE8fDN9L92qRDW7JPMSTeZEqVzZ1g3oqvQsGY2cx5MuAu1F1VLHcxmDjmi8i6",
  "key23": "2jhvto9wiXMRMkQSkxyB3zVFfEDm11bdbczQoHGWyU4MuL3vEZ9Ym6c7KgcdkvWTTHMHMd9rSyEqPJzn7UnCXzwE",
  "key24": "4YoKkMzPEpPM9Dizdkkah1ym9xki5rw5c9HMwVEUd7WFTt4V79czUSJGxR56bkanhDzZuAZFNFeaFryTN4Hm2PHQ",
  "key25": "2NUdRFZcc92YnhBRRaJJEM1Z2YqGzGNMnChqLc1Uk7Fya5KdyYRixxPLDEX9sr9CCF9uBoh2bKtN3KuER4nGoimq",
  "key26": "4s4G1mHxpZnN6TVL1Lqz6YhuayprgztYHTbbCptxccuz4vgL48CJdLvPFTUZQSeEwssCZq7ARVQQs2t5Ht8UJtSW",
  "key27": "3zBFyQHLK8A43EJpdTipop9DENWH7JidZn2UsuriGpSR8L7SdTmBxQ7cRr7CVmMx9PVKCrnK615dCYmHLJUpDDX8",
  "key28": "5Zj7oSb7ezBJTncS15d2JgzoiHCikAopTgU3EgQ1SwQkbLkiSJLpKKYcp1kTrAoMmZ4qbe9pnGZ5SgD9i2GyoLqG",
  "key29": "2ZnvXebFKFNH8qVv5GionKa8cAnFFGig7NSF53P2NWSGw6E8GhRvU4DQLuq4WM9HT24Sbhmu9hTD1Luzg7NQGPmb",
  "key30": "2YXCb2FkFYznb55gGQPnEQ9hRL7e7atxWdk6BXKJzyVHp3m9CW5TR6qLowZA2nD8LxVmkJc15KX4cytRuVoqURtH",
  "key31": "3mCJqUZpggG8HyoaYQCrrihZiN5t7bGCkX3avLSJYAHNZTaHswdkYdAvkiQ4Cwkp1ev4fCQvA6Sjgr3udbDZq1kS",
  "key32": "3vGJ8HikVm5fF94K799mtdgqyaxEM3ZDUJ2UzKTF4YZUsoPQ5FaQM4VWhMJjRMGzyMzWdLKgmM6ECSfjN7bYA8oM",
  "key33": "sqoYRwKAqYDviistYcBsqzgTKaq164HjdemXG8riEkoJdg9P5aVg7YRCJsBPXKMEGEKbvRJ2brHrx8XUz5hdg4L",
  "key34": "4DNPVRoMji7U1WV4EdjBLL8x6MmuLSa5AVWDXtheExRzQfKRb5uf6kQfr4j1PvVJerEwRffvMLVhuz4txB5mpQ2f",
  "key35": "4qDeEbDaGc3uyBooghTA8cEND89MuGArRXihjYrMPrp1AsBbQgoSXHN5jztiKrK2y18xgyhEDNPgBdmztqExLgDN",
  "key36": "35Dhj2HheJUHpWDbMYqtmZ6Z7VLFmjcUT7SdeoXsrLembST7HHteNeB6QtQgjBDeb2Wde7yV61uB1wqFpzqn7UmM",
  "key37": "h3Zsx2b7UG8mUF3rV7U2DF7jsFhDjRvynZFzxnr15nyWax48L63r8p7AXxqXiK1kKV2z8VEk76s1BxBgrJaBUNd",
  "key38": "PGo3NGAHoHePMFAGeJBaC451R9KbMYFvH5fLEdj8frCcxt2bRKe5cJVogCgWS7e5ikC8121vZhyEjzcbv7k2s4s",
  "key39": "2MrdzEG5o5m8wvZ3MxUSteRAu9XQveoQVYbmk9wXWEPZYnFQebpSYNcakF7cPxshtDv9GD5qEm7rd71o5r3QK2y",
  "key40": "5doNAXtEUVAzQWAVp3VYDKZviaScT1TKeTJxq2YbHn4CsTMyMHHr7hRFLK2eB31bsBKbJVCthsuMWv26JWPEsWUF",
  "key41": "3xJv74jaWjfkGvPUxrj82FkZ5484PdVXVT5t6KMKZamFsGPVoeHfY9BhuSVB8LfChdESCo2FQKNN2sMaTY3zx5Gp"
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
