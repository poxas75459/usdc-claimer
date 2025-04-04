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
    "5RVDGDT6KbRdx2edKrtsCTkhyxU45jSXaZt3r4R8bkDWiTPdaeeEARaGFdqeCZPKP2CjaMawsGdbdjmguqmXjen7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s8q4w7EXyRuut4c9rX3BMFqHecF8nSEY1VjkicQnCucbeQ1i1vc7HVw4tXrqjxE59CnyU74R7jHck2xe5dj3ta",
  "key1": "3nzgkiq9222QwgbUNpkVed2ajfUCNg46GCEbGHHpkTyhPxxdkuhvSz5jrf3WjWh65Ej2iuaPkkGdpfJmpeeVaXsE",
  "key2": "4SxDBwVbBWR6aQSUbpu9iLS6hAjqxtencSiZvo2Pyi9JWEcKLoEFpediSSYj19Ji2pmWZzzaQtzCnjPa4DQkvjSZ",
  "key3": "5ipVRSqAaWhjKgDECHUptEerNboRCzeiggXXhQS1poS9b54D94GTEjYRopck6PVShV9bktPZkLLEUiDxGZsntgeR",
  "key4": "bF8uVhLdj3akwBHv9HuwMdFrDxfsY7nPLkD7LyStmZvNpj9eAjfShSu63djhWGYYRuq7BDGhcyS11LpDR972chH",
  "key5": "4DEG2DxK9oC9BziYM1k3wUsMLYqEqdcnytrKeJEu9ADexGhkn7TTFVP7PxPfGwk5aHvDeC41pSLB5p62J3wSNA2P",
  "key6": "2LZ2kCCoU8yvfW24U3UEYzVg5jitk5sJd7EbxLjqBnnm9JWWibELmXUjN11c7FNYRcD84tv2QwbpbVrgdGrq7bfa",
  "key7": "2t86mHSLPina44js1bdzhAFychexD7aiNeNB2cStryPFENrBiSYgtEmRgpaPDAG3RC3ztroZa6g3DzUZRJAYVouY",
  "key8": "5d7tRPwfMMsspHUE1z2UC18MKA26tMV5JfmqZ8bBUdxNhG6nsj4CpNQwNz6AcTwniKw436GkxRd8SC28dVJMrUR3",
  "key9": "59AxfWMXF8tpKPpr5iFQiwU1zsBWo5x3cvo1XNwNdK5L2b3tQ3gG8wjsfpV87RBXCu5w54CNXsDBWkSsF9zramam",
  "key10": "4wQ1cdsCc4x2R78dLzHmRA5BnNCgVt7BN986rND92YzJzLi195UpLHJ9wELe87ydjcShymZHiDbAe5QnGnQ3dfVF",
  "key11": "5PTUfYukNKa7VNg96EyzM8BfBEy4xfghaBko8cfLqMmkrEfeZqfzrZjbRMnDy13cYLTHXDREMALQLNYfJLrh75Wr",
  "key12": "3spxayYCaPLSb1ukoBgThvdWbvruvigiMZmxXwYVgq8y59Vpfs4KQC9mdgL1FNCnAiXQE7FHmwDwaKCFoq5GPUu1",
  "key13": "6uDoL92xn4z5iWq6cNzRQK8yRokwSTtxNGJRTz7wKKnhiq7Y86ncYEgoXfwdvEYDkANi2DmaboRuVnFCxAnEhq9",
  "key14": "2XbpA6Fhhk8U6Aa2tvi3Xai7oC3xBD7kXkXRrsDxugQZ5aUTZt9WnzcmNRcJaAKpfEvV9w3sY3k7Zfb5oXmqq6Wi",
  "key15": "5MDGML5HiPo8Vr5tGVHELHRT4mmtvp5gm1PZZhvTnhSt4bg1MnsQq48auHHneHzzaJwQa4Yb4iWUCCBpN2iaVqWf",
  "key16": "2tsctig5hgGWpEwYoVqvjNBvBexutz9joVFLwpvxvvsxTNSKT2GzPjLB3aa91ZZpRdGhythLEYCGbYj6MpB7vQP",
  "key17": "adoG32uDzf6oiR1LTwmCEBwsK6frhT3ZRb3fvBgAcDFfiNayhZcq7kqwzQTcWPsjLRkJBAmkDeToZfVs4qVwSR6",
  "key18": "53tvbcXFnRDNUSyCCFe13nKT2whHwgbsMxb5achPai5QtxCkpQHXQfZ6MEKPWSq8JDtpNFU4o6d8pRDUGGWGqq4D",
  "key19": "32gM4t7MdjXK5GgeR1EK1cgwEqnBdx7xvNLJn59mawiFwP1dRKJrFx4eQ753aa7AaaSgmwnur3J37DMUJUpVaYVB",
  "key20": "5gniXLDrn1NHmtX5ik3bN784RYUUUAbtBNR2tMZWuY9ZmUBEwH1qfgjmY6A5QbmaMCnaVA4La79MeDLZdpPTdJns",
  "key21": "62zZiz9au2gPHe4qeSGBAYpzuKuwJ5hcgGJ3nsAR1j4iX7VCCqa1sK9qL3MtP3SeUWit41rYAxAmT7QSdER6usiQ",
  "key22": "2EG8jrfqY83eBr26jjHcHd7KNFF7zzG7o826GZVaAJW2KyrP4CipoiiGRrXzu4JshuFCuxfr5bG6JEttUDMugzqb",
  "key23": "AHRpKRiCt5PSz6BLSKx31fZig7B7p6rq91ozMuviwJcMSsAkGNrrVQdzmEHn45vcidXG8Fg2dGM2rosj4UZtD3F",
  "key24": "JREPCeQ9U2GGrKVkd8C3RzbKFSEFxXgyvSWNFsJvQFX8ioYgQGCqLyqm5DUyW2XCvLQNnvpokbUt9AqBK4FaaFt",
  "key25": "29oz7TCf1MF6mvRbGoPBsbJ614Y1sbWwh33ZhaDS7WfPBxirLQKLFwxpxr8STVHhe65VVpwLv4B9GDFsXdm3pfp4",
  "key26": "2fU77D5D7WuyW4CXA5PDMy73ojryqzn5yKEyEJSphDoTUhcZYJw1Et85PPxpnJd3wDG37AeGooRt9vAwXPwnWhX4",
  "key27": "61vnqLafJvXZUtARs8QJzuwvgFKeVWaN7BTdQEGnJ1cpPJZS9BxcfMt23eVCe6dirLjGbWmSUTrHmYAHRyc5CmWF"
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
