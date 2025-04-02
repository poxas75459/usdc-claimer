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
    "41szY3TBuDtHPZSjEvkRw622rPqbiuzwWi4MDsSdGWWRt41sxTuuaQB7vUtv9Jx4ZAijYoJVDJLAEH3MBLdJScox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TqeCQ3rZGyZFwbsDcnEU34E25iufQUpNWZ3JpFBfLbmmppuPqbs1ANbXSw329yu1d8E8V66g4WZ7kjYDFgQw2ri",
  "key1": "5Vi6jMUF6cYsVKHs6mmUEmaA3qyPmYyLuoRrW5rwjb7x3wxxAut8ru14FA8Ye5N6m1D8q1y1169vmwT12z3gBTBK",
  "key2": "f6VAttymyDe22KsiLkiDEgvzA8mPPo4UfB1M3mtYHCTDK7HrDFMTfgHGvSTdFu4XsyFYSJcf4ae15Q8hvjpNBVF",
  "key3": "5rKLwqkm8b2bTFFmxv37Qo1ppTJKG9aCYzStjJSqwSjB7qGtz7zRF4tdhZ455dwaKv2BahDnVmsFSLtFicMJhcRk",
  "key4": "4T3QFyXAg9bgP74eYzTPVA5bptexPsx35FhdDBFtwsurK1KcoMBhg89gzsYCcdPe7MrQBeXBnca76iRVcUSMiwCj",
  "key5": "4TxL3eqtFxZ8kN84aRkzTQeah1Pts6dXaTcarMrABtVBftfewNNaVAAeb3TUP9G1KpvoixsRXK4d3gs8FCrjvGxC",
  "key6": "3Ar4MWEJSBu7xVVTCtArjPXsMbgiEgAZj9XxsZcifZh8kEXGGvc2yC49rFvATDC8MB2QkRgPmgE8HPn8wo8dWC87",
  "key7": "eQf1QMmkpYVX2n5BeQZgG66BWeT3quhSUMrphYaWf2FzP1KSpscDec1NEqGLmZaxrkWrsLQLFtQEm4unmuR89yn",
  "key8": "2jb1GatgdX9LmiUULrmd2sCujrjstaA1GSLxPziQpGnnFwTdApaBZbGzscf35Wxu8sLGs4vXQqnNFsGxXSAgLJ3U",
  "key9": "5D4YYtpiPnKx5C4aMHNziPuJBkbe4ByKpGKvHRNrrXjS1BBZhioGDmdKAhqh7UfNqSNguEqGoYgwnYdWC868ixd3",
  "key10": "3GqstRvLddnJwrWDbHVUwXZy29seeYgCEcFaoAmiwCuCYQYKu5SWfv2LPaN7ymMeqih8F4rv4paozhRq7ra6Eua5",
  "key11": "4zEhjE9AoQFGeBMQY3j3EKGTaMz4YnjTuWMQW2UXd51M6qWw6Ma7igYhxGJSEQoBrxvC6rhhgsTCnhAcZUeKrRzb",
  "key12": "4X3hU3WeNBrMqteKYp7RGrb3PhHpTb9cHgz1QVSijQ3zj21oAmeWDJpLvfG3sHd13ims6RFufMV5vPpeDXgpSWQw",
  "key13": "4KNAsTW1gRBJybnoYwAfj18bZSCKC7T2TQFHpYkT8rFVd1jpDxjpAXuNbPmaNC3tuRRG1r9vfSQSiD1coRFPZH8Q",
  "key14": "5NbiVKQ7DgU1mzMobTEiCTGsNcV3SjtQf6tsUiKwRT53FGuvr8Lyuecatx4WpBeqwmsrE8Fo9aEZxkxyoZsiGBvn",
  "key15": "2XuuFdHAu95zB6rTTXxdubcV56SMfEACUDgm48DhHjezepzyNH3K9mUBcrVwcK4wc7gkETC6Y4JvoDK1yBTMkLxp",
  "key16": "2uiTTNyXDXxRhDrSHE9d1jygVc59KvXfgmP8oh4BNmuToU8yRtVoJgQ1ehhjdBweV57HkDAC9x1hPHEGJGaBuMEZ",
  "key17": "5XHRtYvVTNVLog3Q118GP4jk5CEcHprT82AUuFpCagUKMj2F82gaAJxPP77Pr1HbxfRcZpd31jjDHvneZneqJLcL",
  "key18": "5G8884iF8Xbm4Xsud4tsvM5LHtdMyxsoJgNBw45PMgaKpt6s6iA78ExhpvgkCJPbpi5F6d4GNugvDHNukjmetNnT",
  "key19": "6VmZqk9FXQ4jdbPaYL9i9vzgU8SCkSbNZYf7wBJ9aAGtJqjVEKw7z31P8hzTmUu1xKpXQZoMQ6Z2AsKYoQmhP8X",
  "key20": "sWcdUBffSWRY2mygYCuWMXJUfWvDf6MS5C9bAqvAwXy8LK8SEorBHg6EJs6F8pVaCqJX5L535atQwyAkkuGJH8w",
  "key21": "g8XnsVGkEVDnZDSokgGUb3GFo7FC3s9phErotRsHvL5sFntyYkBoV4GKsvMMDUauMyMbkpFe3aKmRRpB7dXrZ81",
  "key22": "2GJw5TuZTfjdpStM85sKrf8dyGLXjzuJnWErgtN7aaoGvc98MzRjsnqrrRpKiiWCr5TkBhk78FrrGAHVXEBAe6iK",
  "key23": "9bGdBfitrSJz5LqUWYJLPHXJ3nM8sLQ8Df38xp4ASfhvbj9bNQH8CupJ7Umyk5mJfHxrbnxpAc2w81MRTFXVjgv",
  "key24": "5Uki8hQ4cCXuP2vDvAJmjQb2mGcAXuDPFqcTTvfRLtTUGkaaof9SgquafzNkpuVxUreNNX6tz2RMiPY8o4ASvrVi",
  "key25": "5SCidEh6qtY2c98c7rUTdCYUEEwk3nD2pkCMVPU9xbC74EejpFSD98ukZTEQWAESLAyDpHbY378V87rikmaSRUuR",
  "key26": "4aCSnVUqvFE7B5f8NcKW6SE83Cb9vxr9FwQEjd8muiW4oZZQ7EcF2SMfGRoTGwvpqam25jnyK3JAw1WKG6eoJGuT",
  "key27": "4WLe2Y9bNg79U7BYPFFtm7RcfHyLCmjbWVmaNj6tpaVP1p6LXeuDqBh9k3Z4c8fQajwjQHKgmP4SpNKJnv78Pch5",
  "key28": "64p5hugpYhBRqJhwfqtyF5YQHrxqyJAVefB1ipmCGiFSweV3ygDnLmLiVPWJi1sB7YVYkL3NqrHAfPEoci3GULQ",
  "key29": "5Dc2zNTKEfSxgEc6ZzuJH3VYKwAqzYmeaS6oFSdEay197ze9oPHkXRnCcYAzr7LNJjad41wi8ALZRN26Gq1iEgkJ",
  "key30": "268ZdPsxqeVTcdNRrhJNvAh9jvG9PBUZBVjtzktSQofNYAs6sQnLd6SZ4fK1DHRhbEd6QknWR5xYLfo1mtDuFqLA",
  "key31": "5gYrrzvHJrwHR7wdbsnBZyeryMBBwHafPd6ZbpZMA7NfxjAfz4FNNgrQqQ4cPLmf6mGvn3isxUP2sZ84dnGFZHA7",
  "key32": "2ZdLPPikvVrtM14br5dY5E82qZ7pRwUpuFrdiBxXjZA6pomkKfMEr87ZME8fvRV6j5aBjRJv7dk9UKZkkbj6kKK3",
  "key33": "R6H161KApr2stznJsqWLRRj4eoZF1RuZhZMw2mzDWaXfPm92uznsJoVNiuWhcNzWgrBNiQZ6W5Ah8Jia264W3zW",
  "key34": "624Z6S79B8AxhYWnaeHhdp1Hy28TkcMyZRoDz8hrPMo3n9Rgi2LaRSGydhqsiSb2pU7oKzj3qcmaA1cbFwyyb8Bx",
  "key35": "3xrzVPHvhPxAWH5xgBFqqAGoUya2E2P28ACFhpHsyQWcnaWDzwh61jYZMihHC7fdCFamoQENkoGViiVVTWk1GF2W",
  "key36": "2YthG5NX8nSNJdLDYrZFxJCDKT4tarCmQHyPqTsnwi7BLARHUX5YYN5t1rp8UsLwkb1gfSqtsUbaf4YDpxNkoCWC",
  "key37": "2gxbFsVEu4wDiDvJnMk3ZzZ93pqBYx2ZbV95h21pKjQok4MUR8noCoStLXbSxwnmZzJPvpsUgsPFaqATry9WV7pg",
  "key38": "3sYvsMKoqzL1AuhziL9S4LEcuba3Bq3rkjtL2NtSowaaa26BQZUMTZdfUWc2WBYAkjmv4WHtkGUDBK46HpMCDnAP",
  "key39": "wzrW6NZRugkWGXE9MevBuj11JXtwVwCvnXKjGxLJJfYZDZPUSNP68pufw9Ru4jHxN4TEofauwEXLaM9jn3MYUQ6",
  "key40": "3JuoyBqa1nQhkp2JBk46UH1EontZn13BWJ62W6Tsak4H46Bc4oyk5TeCrDDczuBh6vdmTzbrSnkEF5bZctZba469",
  "key41": "5KAck19PvYSqJ4gxq7zMuJVQB9CWhBQPm1TyyX2Z24grzfTpLgK4TZP2s9ZBNb1yWECennEv8k1YtMp5gSXtLTuu",
  "key42": "4G9aHVZUgoKYod3hDrehG3NrEHbbRi24ay1ygqFGdz97iRKjnyn5P99V7QGSozqvcZRa4vSBApHSiY3YfLHaFJjJ",
  "key43": "3WPWBRkW7hSbyhiK2c3C92C25NpEMjh8sjenzF3NSzPCbFsBAGyNER8zcx2tTtFHUgNniy2JEN1sHPt1B13jAYGk",
  "key44": "617dcEpfbcp6vYuu31Q8adieicULxV2FiHNJS2bVCi8DYzAzRVF3cw2q4PzEd2ZpHhgL4F6Nho4S5fLPa94rsuv7"
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
