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
    "5NYMorn93QPxLNQa7ZHgN7mw8Gtda7iBs2ovSsZWmyYCXiitezMU9TX7jnFuLvGK1FUnvYWKa8q6vw1zURNPb6gc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mAd7GAkMdAWUgwAELFZKepiQFcu75BNAKuVw7bo2E7E65A1ZnMdwFEZ3L6XX7Pr5XSuTK7gxcguzg7DrTCh2yN6",
  "key1": "2SfPKxbd3UFm1oKKw8pmjCAbvgekeYZba15qvtbJ3V32oLTWgWsPTp2JN9KrU4U6H9EzCtfP867ZtoYiCHTKWunP",
  "key2": "3ySSTntU9eq51aTUxGzoDhfFBJEHhobLXTpNLKi3gkiEfdaYwSQ1uHkNBDkWXnDdYHnvmdghNW1i6jcE9nXQduUA",
  "key3": "4MvZL8NyZJaKyMSYwMrYHDXPX7wFqdbbEVNPTU1Mj2KMYxbx5uFswEjmH7EV97GsCmPJ6AvxMFjzTBSC3wEds8TQ",
  "key4": "33Za5PC3cA62zqsegcTLm2V7j7LhhxBToB2EgZRuBj7L4oavNFFFSiVpMH91KTWUnMAi65YqFRxUueKpz9QAzF7m",
  "key5": "3H633bJy9XTFJDNofKtNrxPA45DYSJS9T4AV4pnw9hDdr3ZCcc43LDnaij8QhBsef9oLU4NCMoas1GMWMcaHWQqn",
  "key6": "5DKqUK2nz4jfi35mWNj8gDgY3CKU9KYqViTet12FrCNdAK9oMECM217E4RsQkaCYAcRYroxndf4L82R8VMw2UoZc",
  "key7": "57MXvWGJYr6EpLoXYjbzwSKWLzPkJVWxiZoorfD2XipZzBAZh7hZm5eHphYLY3PPtZbtstpHcFqqsWhFB5QM6NpR",
  "key8": "2avfJh3SEUn1gLv48ED2Emq7m9f3GDW4QjLNfFGiXPPfZHrvXTW5F6PFwAztPiNoSJEsqJbJVxK5Zt8dC76NUr5P",
  "key9": "4b1LG2wh3BxgZk65Qgjo4eiewFNP8TkiV4Cjgoi94294BRhJjEp1QKBJ7N3caYg7u3k3k5sYEgtxDLfBywWVj7sB",
  "key10": "3AN8pv3RJfu9tTmZp8ykhgkjrtThfp9AvkTYdLd1TA1UhQ7Yxh8pp4kCpYbHCEcEWQ4dZgeSSLFgZXBN9JNXdfYw",
  "key11": "2Vu1HM2nrVo1pB2ZefD5Tss7GjYHje1kSCAsgDHQDoycDMdQFPYhoXtBdhP9qrWbFGGyBwEaaVFZDcz2DAyWriWm",
  "key12": "2W5WzWkXmvxnExGKnEddH3LW8GNfPzvUiwcvPH6AwzvybgWyXgQkfL8ih5j1vNg3R9bvvPYD2vPXMLxYQeQU72iV",
  "key13": "5g4bRGweYutwmPAkZ9kTUp5aJMJqhV7n1FYqcdoa8XKP7ix68TXgshDTsUrngS2WbX5GGCAryf9mFQzwnCMupZ7Q",
  "key14": "e82rA3GetuBkLPXM6AFGe3GyhgsTyXHbjca23qKqUQWeJjwUmbUtQXH1WzBPECQWJtYwicJhKfPihayYvvGWQs6",
  "key15": "k1TLznzy7KiueG1UNyhYMmJvrmNzar6Rdbydrf41SPebNCYGLbCMcE1VYc5NVZ654revs4bmxyN6QMVoFQQFaZB",
  "key16": "2rD8dHUZMPdHjFzqSULEW2h7hb15cv1hmaJJ2x6BFAQ7wSBHm63WKDGsjoiur8BAqt7aA2mj23EXsyetupQmeNfo",
  "key17": "4cH2nSCGSw7bTPeVpRbQk2b5MB96ovuCsq7zPBTAtvB1e6Xnsr6Ejy2MibbaYBFGqcyg3tZbmC4ptwm9Up9rdL5",
  "key18": "3XUjArCzg1LcAzXb14ruwipxY3HWs4PSJoYmJ3hb5uoNLqw5LfWKw6eA9YYVbuFXDXZLEPoP5QrtsnpxwvY4Hqhu",
  "key19": "5rFPPmrJtp2fKLabPEJmHYs5DMRLPPveP95etLz7dJ9R752znpo6CFtSZAjPgSP4JP28UGb1SMmzi1urhQyYUiuB",
  "key20": "2c4hNQ8UzE94rHoG1N5upN4aRsr6J3kvWfRYYhPkUCXpfkSag22eeqNwFFaWoNg6Ztu1k11yENZnMngkvXEirmGH",
  "key21": "2tB41QLVGFq1Je61SfLx7Hv6RF9kZeCeTugVAe2yYAyE4QqRUvmvtWTx26MGPXnGuzRQ7x1kSkdLcAdM1DzzWrbq",
  "key22": "3bigbw5iExa1XbBPgU8JjPKWNuTgK2p8PM4s4LMJAo2rgJDGEnYfEqvvmjTAp43WgUsP62vdpvJTkkfvNwd9YhZP",
  "key23": "24RYjQP3jha9pnTZV45Tf3RsDzWYzyg6FqCYfuULXkJEyHaDXN2oGMoNRFeiu7PqYmAkuKjguREAUNuY42SvDUTt",
  "key24": "UkSER2XUEehUwBP5aKFFxfkPU1Cfh2N6efQbAQJYJauaBUxLJ57dbFVy1QJiFJYrVJHWYGQwEbBDCK5gdbXuiLT",
  "key25": "28MEZmD3toXg3VZzCLLaxoVZUvEki2butiJc7uQ9wjQuWMDTU5RVPqFcrw9BVAnxcRrzX5mu9Ai9V4attFNH987K",
  "key26": "Yk6uW2mrTmUkpSFHxEBFsJrUdMFCpD4WhpLgJ3ALyYnooyoiDayTPfqz3yFmsdRKZd9RVeAJAnRXrAjyQFjSUXN",
  "key27": "5U94bZUBqMWGTr3YC9vNc185GgtMGkgtiqEKN2GXzJiuN7yCv7webK5FFp4Jht6CnBbnpmEUMtnQBcqwnYewWHcf",
  "key28": "2xNCR8sBJDyarEtkmymNuhnXZLYqMNi5uBN3os7EXMELuytRYkB1dsmgrV6yebUDzUmZ25Pd4gCdDokr2FHT1pth",
  "key29": "2sRtxP4A7uEaWzyAYvDLGRWoQhUCUwtUiE3apmJtrneYyTxtouG6opZGmTCYvksRmkgwiihJVcV4dSoFbYFTnoT1",
  "key30": "5qjtpgwiSX1eptzXqjPFS7fm7skWBgP6PWhTjnU2SE9dZs3S8TCj2NvmZ6vVjRjponkJXYHsKLg2qLUeFCYQ39HQ",
  "key31": "5AmcozmmbLL9DwbfKoYMgUhvuCd8icPRe1zbN9Wfg3QT12AWzin4Dh91e2FXsmAUeAjxKRukX6cuwmhgeCnJL3eM",
  "key32": "gjjs3JF2yu7KJqhyLE47zJZ6JB97vttGNhnysE8HmP7Var3PuAGfLZk1LBLGhVgRHwnngCpa1KG58t14sj39od1",
  "key33": "3rH6JMCGfaibSmZskaQuVXoxS4mgD37B5Tiux9WRYKZfNnJxN2nqYXEyiXM67FwVxbu3RvZRB6XHgAaXkN1AH9TM"
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
