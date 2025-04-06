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
    "3B6ADSbnSr3RhRsA9bNUhkDHbEET1pHAL5PDkta7vpsrAXzbj8JKP7Q1t8Gxmw9qCicTY4zvJsmQh9UMPkUt8cLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n6TttE7X9EQse4tog4b5GdvYQqmH1Uaa62qZL6oXpPR8RDp2sMTLfxih1yWVcL1A4zzJi8xBTfJfyk9hySC8eWC",
  "key1": "5R1TA5d2QjiiRowFHebs4fW96JSGuyBH7J5s28su9SL2b7R5doghiXoUeqJbriTXRyZEFGegBeMsSMnGFZ35fw59",
  "key2": "Q8xac2Bv7iYi8tkV2XG2dZrARa2ZQV13YZaWV3gTd49UcajnqCwqbpBR3TyjT554Eb4eYAXgzMFPkWQbJxPujA6",
  "key3": "3ZXEcLkVKSGHaAnCHQy26W6qjhhPaqDHM4k6MbY9geWt2fLb5VvhsyJNaD34LZdQM6uSf5EAJ9g9nBZp7vC734PZ",
  "key4": "4wuorgLTFVGnVA14YeEmSaqSjQjWkvNikN6XYhCsfwZGp5XB4iTN6dKytDt4NHDfMemtNQtbb6CCTkP67ou7XKZz",
  "key5": "ZND2GYwA2utBoUzghVtLjjX9EaKcWBADe5hZs3rb67hMduUqVQUiayfbQh926W1UcCefdtmDCy3gHbTPW5vpc2g",
  "key6": "4dF7H7SyysUREbHVafr8Z3ugb9ewkjrwhTPv1DTLjJgn2xC6QfmnGupiuoBoveMqm6LhbDKPqCMT12iCspVwcVx3",
  "key7": "2wNohZeUNP7gmk9vxiRDhkJVitRgcJd8Lrtvnvnr9mEn9xczZMV6XK9d2ckZWivSkEB8TvSdqGSAjhmzMDDV4Rwk",
  "key8": "jQ23ZzwzFL4v8qGJP29ag8YKxbbiK9RXtu1KWaQL2i6jMkHU12s5kS723pNfNhr3vygFW9SeRnJHtda5ky1W7ru",
  "key9": "5NNXWw6FAp77N1APHXW2XScz8koMjZRPeC6ZWB1mDCSZSRr4EDQBgtmd8wP6GBPCDcpPYY1Vn1652FRHS5g55oPh",
  "key10": "3A2tZqEBphY8zWDe2aDTuCdxb6r16inHjCXKi4GbpgSQptCHonvhi6VdgK5gmouaJhkyAs82G4wzMyWVR69oaWn8",
  "key11": "4vEwGXWwayaDpXumSAQWB2gaeCeoT2peBsKoypoP7YauuL2hXWmWeCyUvJQb66romYkMWwN5zptgDbNMc1LNkXT",
  "key12": "YZ66x4JAB88EohoBqGwLAbqCrRT2vodVsrEC6kqGEQMPfM5LZ8NocjAAwfG8b36C4AwYNSaPYqNJaYoDarQbDLj",
  "key13": "jx8PH4Po1yNZvLU6JVrUyMqrCn1j6U6bx7DwgjTR7CCMWH9NbX7C8L9MdwG8zDcnYEe2kb3t7AvMVZJs8gukePA",
  "key14": "2pms3sCPbMaZCz6gDAHBHA7HuVRR8Q8gjiNx3AHE53bzKYaCC9MuEfzAB6qgQc8zhkSKpCjm8vbGVUoUpoNYaCm2",
  "key15": "62FDbScF2EoUzj7HeT3c3G9g2d6GLGhP5Gh4qsCdMqnpiYayxyBMB3ebabfkLTrsfMX4PggKj8NLM8JgJqNjAJQU",
  "key16": "32fHn24e6uzHqkyie3ujBpspHWna6jEsCvz5QVjHSTw4x18Wz6Sf32b3ofbrhEHhgkEUa6BPx3D8SsEP3SRrAEhU",
  "key17": "2GaofVuZvdfoiHumkmPmYonXusbg7cVtHFrGSPtKYrrVQkvxcYB1NYz689mzKXJnj2hwopgELKeJ5Qk2wzkyFTQe",
  "key18": "51vwnNYEuA5ZdimsM8Sh9DSK8QqpmWWQpWVUsjRVo1f9S9uri9xtRFrorH3H63NnWB2vJStBFbtw5rCVnnkf8ZcP",
  "key19": "5cPNPqA5fYFgE3dw2K8r2YraSpM2XndYB3wz2seo3n9PqcfA1PMF1cB3FLkE2EuNKKQYvm47KRKSftoSPHS32vue",
  "key20": "319tNgQCMj14RS4Qox5W8EN5JYxUN2EXoshk36nZtejQpFKko9o4BVrDcJujVArsCkcgMpQVGmh3rnNRGBE32y1R",
  "key21": "rGaz2S6m82D5bFbZhKTxdFzSt3QZPDn3MNCnsAU7nbRftY5d6PHuQc2Aqr2C2eU5DKx5eReWyUjYjGXBiFMNGWx",
  "key22": "296fN5b8bwWRbTznvXFTTGjYKoyRZ6A7jrVar3yEnitLSdxrcKmrWGKjStYkXhpWf4Wz9NjfoqQuqgwqNVemu5mp",
  "key23": "4dc2EiK7wfhpM4vYXBDK8sm4LG73Wrk6JsxxLpMWWvv2gAJ6477Ndgik2uG7YzccdyD42ndEDug8hicuTiPJq54k",
  "key24": "5t3yM94eHHJjLBmcgxMAuYPeFvY5uJVdMWzEJUGTVucM8gvNbFUX3DUukRyqsN9TW5PHwURK82GfEiknf1CdX6cR",
  "key25": "3GR5czaWwhBzR6gbsEbN8tUkai2S2BG4BCs9qBaQPv6mhG7KSdDeyjcyfChgJ6ssNKPZM71TYtZRHAQhyRwEdCtJ",
  "key26": "567KxBz96TmB599Le7jo43osZxrpPhGLRDMnmVH1zQZBi3sWC26LNW5pgUdvfGHSu3kuEHBifRKzQvXe8wt3JG7S",
  "key27": "2Crn1hwew1Mb8hwTJ97SPbfhn5pXpBek1Cbmn585w9mD2jYKMhaAdGVkddzMf9okDe4864VT3vSpWF1xAfd79jk6",
  "key28": "5veiH46cSkae6A97T59rWks5bKpXJueoxBCfJ2vXJDdimNxntsJ8EZSnBAi6h14hN7WXzCTMDAK4PZfbPbecQ336",
  "key29": "4Y2zjVyUL68btDqS5KaHyeuMvct23AB8dDomKohU3tUucPEeE98v4dB1vGnUSTBU75yUDJ2oeCN8VkJ7jmVv7QkX",
  "key30": "6GGyFQ6b7DsNiKd29LbBd4PGnipGv9qCBTTuVY6K4mzfZC1AnyDQbr77kearKDnMr1ydpF8VSiFBCBoRuHEanRr",
  "key31": "45rJJYtaxuLkvxFrK45w8byjKeraQ6BbuquPAB2q98wBD68PeANZQNqP9dx8vDijnzSNdsBioJtkxvhZesdU1oNw",
  "key32": "4RVTCs8LA8WVNvuQG6bM6mPTHLKHKwjrvkkuw1ddP5JWVTnkR93B7Dj7gNR2K62djg7Wio9ywpGoqWxkJ9eUWQHZ",
  "key33": "3tVFN43N2yxmY4MYkMfDGBECza1j1oMYmMWUpuuKwxCNCekwXfTwxRGbxay23DuZaZYRqiq79epjbbZccojXbg4W",
  "key34": "3hxaQJmSntMGZiraet9Eg7tC2mCmA98fs2WRZgoqksLyR5ctgvxYCsARYdjp94nidTaQHTTAmWMtoAy4wZzn1NSR",
  "key35": "SbVeguTYutHL8SGLakoZkjeJP4xdhBP5K3otQc3BheL7mDo8i1ChYCbX5xbp23ScP5JnxaF4auKUVhhDR18SpY8",
  "key36": "5WGAP48uMw6WLjaJWNwQXANzQQztMa46ikyi6yzXqiambBZquQbNmVxw7FDJmsCyx5W41FDbsiKuidKn2kqqRMRG",
  "key37": "2Zefe4QiMckXp2niGFg3SokQ8dFe9RvHjT8pe9nVUCmRxhxiCXoSmVjJeXJyXowr5zK1a95jcfsBTWQAaX6vWYmk",
  "key38": "34oD6NFBvLdd58Y7A7WjYet2Gf1fabXSfPef4peF92pLuCGX6TJUABCtiJYYGexjsDvK7FhfuZqLj4vAB5J4r4za",
  "key39": "4LC9qP3Z6SqNuSii73TyUiCoQTKz7ofyvNyZUdFJCKJnphoSAPRqcjfWcHwfQvv3ZVsK7NmbpmezBbVhgsmDiXJf",
  "key40": "3KFkrQs9eRv27HTENqoYHS17dRSuZL1VDVR5Kb8NWzvLK7LMQKMwbMXzUNTDnCNPCt9PdgS3JqrnmtWXYaiAD3Sx",
  "key41": "3DKmmgNvyf9D6FVVH26oPrvSJoKPKTAy8Jw1pLHRQuqDF9RXZNiskGUAASo3oT5uPJMSpD3yczgdCQNfdy2jgenW",
  "key42": "2cgWQpW52wRbpZLg2Qt7bdNgcAwdNZFyTLirZKnucVCDzHHHawUkTJLdyhsuDSCNL3v7w1CzVvPUP8aLWkkysef6",
  "key43": "5dF2i6h4roPgkhrYWq4LE1bg8FzGD7x8hcmixS5jE5B1bte5q7vFQ1ZDhTKcwFuiHfVR46Lza47rca7iNid6gwFk",
  "key44": "56QLPUmZL3yfqdkeF3hky3yjTTGZW3VskhfJL8tZrHMPV13txCV1iijwdH6PePBrUXaK24smuwa36jVaTDkrh1bC"
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
