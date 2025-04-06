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
    "2a4QmxHQALB1qc3saUhEYhghXoAsgg5UALxUsQTyPAHnqW4bkZrGVcXev6JPcQnALChwZUrH7Qof8F5cXaiN4SRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZMRc7dpsQqGVtgwTFaR9FAjMPMEcc8sL7WmXRsDa2iBCsrQmvdtCXW7XJKPbZGg4aaqqcFMG2vnMR4CyT14YGa6",
  "key1": "3zdhF5Z657QatBJ3MBhFKhT7RSfn1fMpASnUbKaSNDTP6Nh614Bvc6Hn993SaB5PtSHAnDuY8ru9qc3ZfTmNsfAp",
  "key2": "3jAh8gD6TPMaowVmhJJ1XkJEWEJAHKC2KJY338jRcmqUuwM5aeTjpwLmi3nJLqMDmtSFJEwZ7asqjbcwkjux3utA",
  "key3": "CzzTkkHGsU7aopkubomkSaZQPx97QWSjw6wMf6DynN1UBzBLkwPrCWi7npTtGedesqRcvwd2824rHayW6rVoVQ2",
  "key4": "3gmSm5N7Ji2psRB6pxPXWgSwy31UB68kHCym325EDraLE25sEBcrmWVV4bv271oq4k4juprvvF7vQKjETJpaqUn1",
  "key5": "4pAt4UosbefuAZguwGBo95x9guqLJWxGjMXXzL4dANCJKGqA1C8sGsFu5KYQ8hDQwPSGA8PKFzzKXkShdcbzs7qz",
  "key6": "3y6kxAwqSi3fetQ2q2puSXZwqXWSWsxj5CQuANGMKGrZPQQU3KJgzUe9zuGhfipQTAv1thsEi5hFDMz6MRGpigxF",
  "key7": "5Kk8RVCAYGtL1FGPtpoiR1waRLLw7P69yhgdrphp9ophpficUM9ZDZcHEsAZ2SxgA3gjjaJFypY13rMNR9zP2hFj",
  "key8": "4W7BVgWbfpr7qj3DYiMb99RXCXyByvLAaSoJRLX6fdVtR81btrRKHeib6MRyb8R9LfJvkK9ojd9c5PLs16TkLwty",
  "key9": "2ER7ew8CbZ6DrzrH99YvRdBNd7voNSSiyoUgZqDKLabtFkfYAnnNNw5SgRUcaiPRcrGoEAkDSept27egnnt9dPgK",
  "key10": "4qWtPV25Cc3wzY2FKUTqKvfhDT2ZPs8spS8X2wL9KwsSsLdxTReVQTCKq9Ko6YpALALzyDPLqnJQm4M6VsLj8GVe",
  "key11": "2iWAtRSD5txqyWQ8gZE828ABoaVFHdQfYBtDroAGk9Umm869xfpfhF4iM7pJxJ4n8drAxPqjU8rpoTGUL9XhcpEt",
  "key12": "3vVjhXLdXh2vFbHQrZ8Wotpf8Bw9u8TaAcb12DsopyJ6oAgKqBQopLNn1n9AiVpW4swHapm5iju4JzFLtDeVWbFQ",
  "key13": "4XGisjdWD7ynDFm1Rz7Ep65QJcRqeuuchvHjVJNHR9MttdCVgsZvm323oji5EoqC5NNtgvceLCHAR6vRds2HLPh8",
  "key14": "2CC3aAYLHbvKkkfu8hJ1eiFuuTiF7dYnU1k1wsKh98BrUuVERM5CLqCJWxopBL8EiBdqnxqLXyzUsxnY14oHfWmC",
  "key15": "3XeSvwY3NqFThD7Hi496mx4pqKKUxz858whqCxZJshUCwEcRFKfAmmu5dXEHNXjrf3uKKyca5eULnDwYRxCmDAuV",
  "key16": "NND43JjEtsXC9cyjPJdd4Zv1nwcASGnUz2CgmWbfGJvGSeBNhVbj28VHLHpy5X5UFKA7rmBRNfCudWAtiifZui7",
  "key17": "3vFNiFsECyU8rq7uZDJaHTTLumbY9gpeT172qK3z9kADGKwKMJ4rfCXSShuhoSpvNepMKuMkb3si689wKSrZgrVN",
  "key18": "67mR9qmz5uqF93usupEMdbSp9iABCDM5CzdNEA7o1KdNPBUKeea2rQrmnEqMWWiEU9P8ekpfzY64ywhBb86ijdMi",
  "key19": "4iHwgRt7rZtSEYCkDNNygZKa5VhRe9TyC539D4pZuVdvBUrwvYxDKCptn5QWiy5iuUYtx1Gh6eUe1cQBLdmgrVaq",
  "key20": "4aA13V88mSAKZKyFJ8T8TyQUtrjpeBpb9bL5CEfhcsKDTtKBY94tHHS8KXcdHvExLn8VJiu37kB7Qj678dZzVwwb",
  "key21": "PkjdWZ47UQNAmEFx7Pn4SPoUdwRDMNgF1b91P7V9MjMK4Ztbbci2e4ABnqUmN2pYmvYv2cx8mPGjNn4i5YeZWF3",
  "key22": "pZiRqWhDFaMmAw7R3GSd7qMFufCbV5TMZyxAMMCndCMgvZGTWvXYuP2kqX9cBwNPU7L5pZ8GwCDiLxkYn99Jbr9",
  "key23": "622ykgof27M5Md2iFMbpZw4MG4SXTSxfkYtVdrAC2NSWmobUdqeUBcEwSsV93HYfX9mSVDaBwNwhHa4WbfGJTqrE",
  "key24": "5AfLcq3Jdfd4hhbgzLeJ63HUaQ5JU3NVxs9h8x35tNL3qkA7rdiTYCDbkvw3NxSah5SmUrv1wJCKxe1HfRTAdi4v",
  "key25": "39u9fWKoCJg8DnDV2AuScct3cNoWQXbC5erPJdXSNG7mdbM5vrN7cryJepYzr3LJFG8ZG6KyU5be6pVu9Hw2avzG",
  "key26": "5oLK5X4ENMy3oh2qsEsJaN8HdDz2eaN2UuvzGXhFRV8ebt1MMFZrAWw4PAL9okNF9UaRbBRBtvxhkJc75RYdB3vT",
  "key27": "4DTJK1dSgFu9m2Ahyk1U43AKZx15MZn7gxMUVJtdWth8L3opbbkMz53wBLBYP51fMPjNxFfkkEXR6Eu2yq7uTxhd"
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
