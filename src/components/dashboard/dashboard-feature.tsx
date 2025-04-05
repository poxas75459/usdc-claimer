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
    "3mC3dVqrLpPagFCBRecW33RU1ub5dLtStrCW5YM4Yb13eVuyAaAq21g3CXRe8puRJKCnbtCk9GHSa34rRta9CPGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PmKJFh4RVwW12YCVNYfGgcKzuacZYSz4r75sdq5oH3joQJJEkYYzGNhY6KNji1KaepZAhA5wgrcWAHBniw4sLTU",
  "key1": "ieGrzsHsyPauscXXPwFg52FR9ScNeibWdH1awgukTyfgddUG3cJBCw5towct2GcSx9cm6MmkigxsDqC9G4KXMj3",
  "key2": "qadcUQMGXATSbLicWLXTYprJgLJxXvXXs8pu5fGkvpY4NfsUqyRQaZSZnTPat3Ai1cHGSjRT51RC2WH7p7cT8f3",
  "key3": "496FPDSyThUTVLAKgD5Abw116CUkNCS3wJkN2vevweZuk7G8XoJArKgaCdVSKX4dnZgQGEAqm3skTsrqhavX3wSh",
  "key4": "59ciAvZryNKzeqoxzVxUprDTTicqhJ4q4UzubKXViEFfyFXBb42NXhimP3cJTdg5UuFRLaoBQkzmEjNexjBaJ47K",
  "key5": "4Fw7PAWDgB9GohghiqfGABPePioAoXMdX4G7yXpERVZYAY5CKnkacvRq9sgvb9azBLLTeMK5zVQPrjqnvoSRBYeD",
  "key6": "4PnqzkBYNxV838Mb8LtppBMeRzk2u1ey7CJDhtc4sAfyHW95GR3EYKqpYhg22dHg9R2jag95cSZ6Kg6kQnBaMjNG",
  "key7": "5jyBwQHPAFWf7acS9yv13nJE6GViYW8wCKtpMRnorHTpmBe1ze7TDR43uU7xEdPSPgLdCwBTZbFGQhHbXQirPAuZ",
  "key8": "4k5s1W542Vj4zcbDXTXGogPXUyyUpmbggoSvmcXURkC4im6NnaoKrcVa47Yw67zo1dU7x7rCckZnpJyWasjHpRZC",
  "key9": "gj89QpHPFqva8ukrGxQed4JuAw9EGcYpFvj9J5DHzsBjyUqjDTVYef4aMFmt2MzQRCRXF74tr15VmH4e3x9oRE7",
  "key10": "N19PEpnugRo3twDfjGEjBGZz3wEfrtJB6rPSU8eQATKsQt417f5YtPpGZdKD6bvUsQRumHbuHuqXRbbaS4AcBL7",
  "key11": "2epe34a9aBuuW13zDDCC8acED4Env1giMb9c73HiP8hVG7Y2673ywvZFGWsUX8aPoksdRWGL8wGjQdAuRRpcXX3q",
  "key12": "3obNgjZDF7Ss6vSr5EMButpHzumqGEd4LhiCrAgxCg2dpbbaDQXNkZ2Pk7b44P2ogHbkpkhz9UBmeeZL8f6spSL8",
  "key13": "3KGDVh9rtHiN92oev22HR2oq2xtBGFAJWDRir2Pzp2RnMBoDUaJzHAm24fVpAFSapFs243cdQXR7DkA7CjcSvMYF",
  "key14": "3PUxHv7XQgqjHBehGtLVuUJrcYUA2EuHhjdJanZBw2Hfo21Yioi7LKLGziXVRwtkqq9RxSLNJoJXUkwZgZXGixnw",
  "key15": "3JuZmXcaZLXLSfvWGugQ6wkeThY8RC8cDcXzXC4LYZogKTcB93Sc9S7cipQHyHW8QhcWmdpq3CyJ8jb8RH1Y4Dvd",
  "key16": "3rL2i28u1F1znxqywbvzy2bgjb81hSobCwR76h5pzAnUFaTJkESrjwKiyPrRaGeTCb8CNQyyMJcFL8fXdVFtyiAw",
  "key17": "2Z4vdXg6EPgAeLejftXTCnnrcignpyfja6PZY6MkfEbqg35xGKgMzUDWp7zWU44YLJKqEAtvCUrivRqAxZtieYy1",
  "key18": "2ixRTJxgbrLHH3tpdoBMWigyDLpDLqYACzR9cSstdBvDXPTAiAxRFkzd9dxPGAwk5p4yGoWoBFHrrTYxMMDsCZsQ",
  "key19": "4ywnwaeEAsAcjepzABbmjvNFaC5CuvjpQXuhZ3bsdMjdhZS5UF5JndcVBB3CmLNK5sWtxiUjKb7xmgG1DaMtK61P",
  "key20": "4zZ4AgJPryqgUEC3wLVCj7XGfmYpxxYNAjyrD4vv2CuXmzrVMHNHse57x7Hgf67egYUyeL8JkGbp2Q2q5zJRLTwk",
  "key21": "3iu6bk9b4vJffBB8eHwo2gTkAH762w1YAMvUnPvTtymLJCDZGn1oZwXP3uukr2u35wbMg33jVLdgmivdgjsDCN1E",
  "key22": "Dj3pfThDcLf9pJMTJhyG1dGsJa8FuM7mxmcVQoPK6XkFVfYoM2BTU32kfSQSevJqxDoAi2yzcaMLEcCgDoJNF66",
  "key23": "3QAfossoGgeEfp2VEaCWJdr4kqgHJvU2pFaNiAQMuZytngvnJmbToausdSzuoqMpSkY2P7QtMadgX3CVPhmarHj6",
  "key24": "4hvbtiDiG8Uqh7MuvZY87UdbhTkNB4JzFEHzcnDmjCnuLmnXC1YVHWsBboLofVpQY5qS69JNxyvJcE5JpERtwh1U",
  "key25": "5HkX2UHb46hrLV1G735GAP8EdQwWysu8qbjUEAKuHNiqZhgczoENP86K9AiuyCFoPAowUjTs8g9xfY3FbHtUFHJr",
  "key26": "3d38PNjhTe68worsM2m2mpw69FZra6uquCqaC4XzgCz9gzrcr79FjKPyNGieWBEMhEt4gLaaBYEWchKXNqtoQavg",
  "key27": "ybPUZNsmSNPG5yKt2cLZChJP4Z3P7QK4Eh2yoEepJenCjX7FmiXUQ1PpGr2N1NqVpxYgy94kSM1ssyyMDqL3Rim",
  "key28": "5sjmor6FLr5UmL5uVscZxWe6RnpCjr446idpWWWohY4TVQUX6rPinAEdZTnUHJcs4g7AxwFczZ15w5q2uVQMy6pn",
  "key29": "BAg6BVDf7ZGvxU8mK56cEV98KdKnqPpXk55osDmfrToWSZL8upHhQQ7MniNA2qbM6MdWY91TcZyCDspawsPmy2v",
  "key30": "8179KaaDojcSSfEaE9BdcFiSCUxRVB2xaHrcvS6WxWiVLCeJnWESvwyHkMvTvTaj2Fkwux1JtiYDqW3xzdyBU7N"
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
