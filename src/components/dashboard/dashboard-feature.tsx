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
    "3ohpsrvKgq2L17fCRrdVL15HTrSfrSy4rcGtVUYdEVGcQiF6FHEfwfmK5bQ3vQfw9aHpNSCbQNeb5RhpZk7A7RoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vV9KDQCHFXwMWtLqR9mVrVg7s7tjXLoWBa1xTWJziVcjnpPPyVfEzcHZAVhmL2fhjeqS39Lfz8YJEKfp1rbwVYg",
  "key1": "2bsqbjCetqd2QAfibohD8BVpFN59mYMEsyg3FKP51rJRu7e7u6SMqgobZ7RE7TSztrUTcaLeFjkeWgG8uiXPYd4W",
  "key2": "43TzubBgfQdUnKjhjLWni5cWgNn5jtzZpgy3Ff1XatejVAppU55nqZhZjW5Rnh2vKKvtWiopTXtDAPPxGtY3uHaP",
  "key3": "63CesUB2fjpvtVdsN2h8WtioAUQXR47KxWToL9p6PRHPxvbdymFZLvpzSVt9kDZYFWBfU6XFupoyV7DkYcb94DPs",
  "key4": "Qu2UvxrCJHaXPLTWvu777owB4ZzpfbXLvHTYFLh8qBYTaLY62ghtPLjXJeX3vbduBwyi8i8kVoszmNGMDyBYbDi",
  "key5": "3qHeFsrTzoRF69F3JHxUjhASHp4nF7V2yQn7PYWvQcjaazqw856LuczN7ziFe6dDiSuDjkNu4C34h7btjz4FXFgt",
  "key6": "4LAJa3d5UhtEqCtSNK4xWNzYPifd8yjcxKhmvGSuMcMb7CMmCErZcJYBqPZccDD8uPTGWr1FWTbMeN6kcprAqo3V",
  "key7": "4RjkYjgGCkWtfZSagi3J46FCGiJucoRwwSUch6THD4WAABcpDRp3o6Nft2ybzavKVihMr712Q4bCfpuPAqGSgMo6",
  "key8": "5GzedzqvoRmKdVjw7bsqHxo2k2BCRRokLcAmZ7iye6mWNSdqW246eC859tU3BXvhuDSM4qyGLdErquKSvSMPjABV",
  "key9": "4xajEx5mrXqTBpSpchWiUbgjqT3iwTszHRkpGa2HvxtKRU6naVrw87PgwdXfSEgKXH7Rn6c5X4i3PSwpYE3GEXtY",
  "key10": "34xBc3o9HzBWGsf3xQwxS9eYv1DxDTVTrcYdiuAdorNiECNeGzmxmVNEKXpL5vD3cSrSUzjTR9bow6kJuMXodFqV",
  "key11": "4LNTcNXBARAEFgEX6baT86tKF9ZDie8NdFjwNVzB43occvW9gHk6GQRKyKSAwvtz3VZUL7QNZtMhPjQ2asgESCvq",
  "key12": "ermqVnmy4HFHuyeBM9RHozNr85vPgtGHCuySNhAAg1BC1iBFYPAGDzQEFE1ps5z3cgmr8Cx1BDsWKiAeQoq8qzU",
  "key13": "4uAWYyPyX8xS9xfuVCvF71h7HMWi9QCN3i5yUJQvRDMfwgayWdRW77zoTFJBsuUSu2robNQjaCuewC8SY6zoHJC1",
  "key14": "5HuSnaw6z65cV5akj9HT15LAgJtvr9ipe96PJJnGb19t5yHDDGwoYHcvVtSneMUqqXA9nc3c18WXbBST9snSd64p",
  "key15": "5eCWuWiMYWUHGW6m1Q1nyrSdgt4PbJSjWzL5NM2GJ2PNs9gfyscWDyrNXY88qo4AqBafBZBFEWf411X9cFQz7wm7",
  "key16": "2BjDSBB9qzrxQMFe6ikfTcVZ6g1xQjGzvMi44p5Zf54482J8EStnF7XJs5Ymr1NcMERdrmyMTBJWAdRML4inMoQU",
  "key17": "5ukkUnZuiZoEdFSuzHyhysiiro2JoxGADgaAuZPHMJDLvf59ddwtVZWTuiKuDHZC2onwXmMj3KDit524FnJEZQ3C",
  "key18": "2LrAk2Amxb65MKjRsohREzMppjwNsZLzd8siBUJw5vbMEUzdLg54oovKZZsSBY9izdo7Mc2BY3UotQymf3pkTRLs",
  "key19": "2CPP6Gn1Uv2xhAwz9ojUKLvjzHobmKsoudPjLJMGXwgRzDjxL5PCQL9PJjQeLsUpvxx8Z4MeVrkrMsrkVBSW4WR4",
  "key20": "MVFfhH187cHJeq6gmmYtRsBW3CdDbyPJ4bHZDkrDvL1rYCtfeaRYKdRpQxzAqrG1cQsNDhnaYSVE6Ep8vMwrZPx",
  "key21": "2erHNC44tbMLfqT1jaWTHcagg2AsohuE7DMVPsx4xSsJ36GZmWYBXGRDr6M7bix8eWZAWLg4tWYXreLovyDCujqc",
  "key22": "4Xsk7ZJBQAbM98CainMbJFKnhRhUwZcPFfjC42qAWfF7z8D3Wk4cANzNNQCd7a4NRnkXofYq6AXiL9TmDATQSdSH",
  "key23": "63fKKyU6YuJwn7kLKwXhNkQYaCsXvydumpdkY4S1HgnWJbEZ6sW5WsNfVFZhA6Zoyyp1j2LWP2BP2jvCB9GJAk6H",
  "key24": "rS4Nhkpk5Xcf4aPXQmYGd9QDBWyjJuf5ckZe88yWsdhAA4eY2g1vU7Sitv9wFeMaJBT7o6kw3VS1GerxbF7mZxn",
  "key25": "3QSCGhQSHMDEUCGNNFQtQmPd979UGnhzJADK6f2fuyZLiozX32vDvngD2wLvsk4hNegFV1iWPSBeVNv9Hw5CZu9c",
  "key26": "FUYq4QdD8nMpWoC2dihDAnovH33hXhLyLU7tPmsnEUZkdRMuWDPkExnWSoddPmM2ta1MruYW3YTnEyent4cbG14",
  "key27": "2fDgTbFzNNE43b8D96kc1RLejbYtyDZyTKwHfatgaSJmbd8cLd3g4a94bf12QZQKyf7KqK1xXQ7v3RowCBUriT74"
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
