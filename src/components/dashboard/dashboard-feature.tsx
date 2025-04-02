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
    "5ju4zFDrLsYsFAUXzw4XpH9tpk1Rfj9uriZo8tRQS67o4EUhUV8ZcTYopMJffAeaQhWgLZeqgsMBDwGU9HSxif54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qertQA54MXG4w7zXeQ9mEx1tzoHwrgrNp87qV998zaGarjsKBCmpa2fUPKd47oms9Gd42T8EmcATVXE6U7WJwrL",
  "key1": "2mVDNqTCSrQjUHwFyxBhGV9btxW3E8ssos3yRkh4HFJanDWMjJrj6jajsngFX6bjTtsVnYmqD7RcWf9nceHbJcoN",
  "key2": "t8jTCohjNTrGYusmpUGddST7A9NCG5YbimHUKHprrKKMS5A5hHYf3nD8yoyA3v9AuHF5QmuAH3Jg3pEtxcnLkhj",
  "key3": "4Gkw4bJ1gV3QDk9kwmeXM7JnaaYTCXkH95DVvS5TyhnrvEdFG65oMkVrv2LnpxUbrMbip2vVBD7gKQuSiKhSQzr8",
  "key4": "36xyE3U43scGsQ8dCHRBzRp7x6B9Re9QC1MDTF4PmDnubTtsogVbpFCZwVtsvnG4Ti1uFYi32Ut5hWycc1JuyHQw",
  "key5": "nHnfngjhNJBwMLdTtD9Rnv3xip6wBg7hV6rgVvkPgrz5zTydL22fQLShArvGapgjjBSCiTNcoJXZKKLR159Tjty",
  "key6": "2hqvKuU4idUZpqoAW5oHE5z8S6DVHp7rwovgrNdb9i5NYmYuGiAHdJQEHaBiQJHx8Mof31hryQUEBNZGkySWZymF",
  "key7": "TNHdBndJdPPi82Rm4TKSZjgEgM5FbsffFgRKwScpNyd3xL6BaV8wYQaDBkAS5k914Hx5ynedJwpP1jR8mCFsmYZ",
  "key8": "smojaDXRFmCg6qGcHbgKVivzMKiXQmVtSww2k5MMeqXKssgVCrZYJDaudYqVuv2jkLq27n2vgj5gQRGKTH8PQkc",
  "key9": "4SaQz4F5CWqZTERmr7WPwYJUritKZX52zQFhFq7m8DbZdSmNtUWAvSCzSFqVFsHyxD8RAcguUVu5eFDo8RR7vxtS",
  "key10": "35GJct7zeUC4fqitAhHFo2gKUUJKSWnTc3LX97Z5bPSfnECip6UZHQd2SujKUSsTABtVMKJh5AQbrGFQLA3VgxaG",
  "key11": "vF9jjdzj2bZFYJfrjaX1kfPLpaBdxZ3yPz677tQarQ2DhVdz9JfrE58XvUQDCRogJrPZpoQFRH6isAVDCVsboKb",
  "key12": "4DwrjDGuG48D8243BXp3zpvCytBcmQEVfn2rxotzLAncYqSb7iFxiAg8U1SCn3L7rYq7FVUb8Lhgi7ErjfbuQGFk",
  "key13": "3cysCBhkkbBdxY4UtpnW9v8zSKEmbmNpMDoPKiW2hcA9XqyXHygDun3pHroqKopQmpYPkV4YCKQyncuVjqGzF8fP",
  "key14": "2t7VPfKe1iB8ogPGjVkpJGKLiMiWE4BWdo6fVt9E1Pq47RJwipawVox98Rp9oNNvZq736HzkeGwjQm2gDdBQdwkg",
  "key15": "3YUU9aAoBcRjHScBUkwsiEZjTq475ajPFWPZUbCYmcqtv16U4Wh5sWB34WC34NtDqECYidfZkfPzdF7795jFwiXq",
  "key16": "2Epe6MYCz4LjPYzKatP82fodiuDLCKyP2VmxgnVdsiNfi3woWp7XHDLhjsaaVQvKdeVTWuNJdmTEy3oGwFgMqFf7",
  "key17": "qAXdT62EKxDJQYSD4HoDW3z2TBf63YmE9mZ3FhsgxvMNuRHJSH4VGkYuffh485kohXkRv81EjxvCTXbPK1wDGjp",
  "key18": "3ZG3Mq5B9uAvBYAUjdVi1vAaW2WMbMJ6u3Qz9fmPyNP35BnZB1QEGVLdRFj6kx2hhmVu15vcGcheNxXoUv7yRcbJ",
  "key19": "4wHXUct5J1mP15tSEEco84xfUtVuJp17U5Y84r9pKy3HkHaMG6a7vYfrL1eQNH6h4CtX3EWsEh97Dbx4LRVEtrik",
  "key20": "3HP5tsjoHBvbBfs7sAEYbqpVP9aimi1ASy3cbwyyCKvkMxnX2tq1oKKCG3e9z1gsYScaUX5K674s4sbhUCdWqViz",
  "key21": "4yVe3oqDhvrwUg9m1EsMin6wpkMknRUk1N54XAuGCqe84WCfE1TrUK5hMnTzFTL5zNm9JXog9ymN2Cq28ydpUDgY",
  "key22": "4bxyhfLjPgu2MBw5hiYnTxzynfbV7HeFHVaEX7aGUpyu2E6MZo2CPMFNA9SzGLsKnbHMDzUmkCS8M4ae5wXiFUZZ",
  "key23": "3ZD57WhWAstgBgCfe4Sh6XPvxKDBP7XmUQSTbPfse1q5txqjfJaPUcxsZv7QgZx3DkWXnfPdq3KTJW6RNHc4FpTx",
  "key24": "3UnXQseTySwNwi7QJSkAcKajcXYKCjua397DNzBmWjHg6D95jaMp6GcGihmdcvUjZ65WVPjh5zeCZkURLDAX4DZT",
  "key25": "2kEVU3NuL5tAYPErZjviioTJzf21R6ZCZFiahzsE1iXj7F9Vw6jocJwkryKm6LskjhM1nhfcfBPNf2APxRn4fijR",
  "key26": "5imfxcMdECCpQsXrQbFrb1Ec5fxTFzNzk3napzhusJfQF46N2S3pMZ2JaTHFyvBFSC9MK2rRRR2r5wiVfjsE6vs8",
  "key27": "621ph1CV4sZg4oRGKHLjBW3AXxrfg26KeTyNPQ3aHcyBZAsFgThHydJgjdg3WbP2LWsiXBHbdrUseh7zvssSDx6X",
  "key28": "2295fTxe5ySqHwgGmtCeyUz1cedgLwZbij8iaMCppwrjzoRVHnuJKyDLnNoCN9kZLPgpbqUTDVin1hEVzTSCrVDV",
  "key29": "3RVsfyimEjsDzdDaUfZa5Smmc6yKN1brZujB9tBbmy3q3aR6USf3WcjDwfbBPMn7c9zsSpGK5garkpYz8gxVLbZU",
  "key30": "4Y62YmDRrLt9RcZAWSvYq5vPpXG4CrtQmU1CMfoJziqWBdpiwjKBT13Z3KS84QxisQvqEvUY7XVAjZ8kunSxqu6m",
  "key31": "NNi2ehPR1PyQLxC9oWYpTrdb2AK7pt6CdhCg7UfRiBmhaLsPzahynn9WNcRkvJ1VdE2NzXrKKeCtGunBNe6Zbzi",
  "key32": "2DyBKJjng9QvFMXqnJ4T91AxcFoRFGrFQenQPBz8vZ2kLdtjjTx9qfwRL22RV4ZHwewPKsWKwkBtXn6aX2j5ih31",
  "key33": "3VCRek9yWJthT1i8RGK1MCcFjpmZbPnSW5K2G4FCWa3hX2Puu4ZG8HXyU1Z4mzschwitWLowe4nrUikmbLeBiXS3",
  "key34": "3ZdehYxXbke3JqBHZxfH2B5PdiTkHDfeAKuZRYdkJScRU5EMbkqsk9fr9fsWqPcSs2fgDdXoW7K3u7CVMZoYLt5g"
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
