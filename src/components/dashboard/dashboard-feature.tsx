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
    "34A4u2McGUyeb713VWgfGvmpfCRTDY8sjVfNtpHhFfcgG86YSyxLmhqe23HiLJx1dBsijMyeAynFamVqbgRGmdfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rTH1S53eNgLVD4tDV88VtcC9cqQhCtYMB2RBVaLVF34xK8zdj3iUvkGBgAsrMJLCcxq5V1qXkLudTaJucZXb7aU",
  "key1": "vBKRdivdjzFnTuJzbRELnax1B5Hq1v3f1th9a169QtqCFjdfvtxKBSYbXsKsQn6atz8kRz745FuMkw4ZWtwm7Sc",
  "key2": "5NdmEoAEkuLQP92VNy72LaFzT4fLcBiei8meoBNTM6J87wbaKSMB65yjtWd6fyhRFU4BPTjY8GkyHGfiDejfQE6Q",
  "key3": "3LgyrXnbQbsTXfQAWniesj3z3GGhE9CRqijB8bdWbMVWd46zAg8RPNp9V2ZhpzLTG6mgnRikiCfb7U8YsxUvit5t",
  "key4": "2zjMiK1gfwWq9XxKU4cRvRVXijj51hKs3dm2Pj5qjHjnjZ4uUVFLrrW29zH4z3WDUqSfWKZZ7xaYhXX4QvC9CGzD",
  "key5": "28bpUam9bJvCo69aoDuYrtiu1ncYk8bT3N7jyPRWYdGwDvt39Q8p38KD5d62KX3vsEFphzKvGKhnhBWYyFCZVLGb",
  "key6": "4AXZh2eCig7QP6zHkiForAnVRn1hxLtnZ19dLzWsD5YPj2fmDtiDvYmeAeEHhYydaPNiNaMB4gRDsPK7s5pGmhYB",
  "key7": "5t3QwSK3rZ3FWbRG2TXq6MjUfcFuoJ4T1afcEWfmYfPemV158iYhjYtQj5k7SAyAjWTt7Y5UGRtx9gbNvm5ktceB",
  "key8": "Scu8PrLgExXfPxnj9ms7dUva9tpFYEpFnXchqPxD6K1pHKT7cqBvw8pRM3S2QiZjLGKye4jBsWDEtwWW3tvH4NA",
  "key9": "5ti49XEcz7Tx2J2MH1p3hDdrvdebzeg3EwmA47VpNHZECYKCJdVKR6GAmAgCjvdcjbeoJpTwvQAwqP62KVgzjeqD",
  "key10": "ibUbEi6Db8usa43JYB13C4pead14uyEJwoFZhEENPvH9cu4CDiBpVFDyAegqo7Xnu9rSX9NagypTxXsFS4aW8aE",
  "key11": "57nTWaEg27nqJsoPPEFxdYnAcUGuL2REP9ByfsXbv48Z1k3v9YLEn4wg41VMKEqSCvygt58bENdTB6FHjgW57RPG",
  "key12": "3jnhQrjZE1dmwLk9GQU5y9sUruLoXXyJNS8RN93aMdpNNAgrjboXirQ6GQb7VW3R6j9SvL7cg2nA3tj14SxLVVjn",
  "key13": "3Hmhzr26J1FeCGYjFU4fVhr1wQyM62kXJoBMRDq5egiEPEZqVBdsbMHU78nAKNaHPoqKNGWwJas1We3c3SLTJaij",
  "key14": "5SoJtneNisCaWpoAySSGUZ25TQVYUqtWP5zgnvki6hSL6nMFgqEfTX4pxfm6X1RuS5Y5vmpM8RpmKRZYmERWwFDW",
  "key15": "4HcgBKNRMBBJgyYpmsAaWiotYY6qmthvDxRwFL1UMgFoxFx3GsryYFbnikbi2zXdJtaFg5jUiV8DyrbZBdh2dz5F",
  "key16": "5zz2rmrZWkhTjgcAtD2Gn1L5FHa6odR76PopjCeTJSpNEwrEeacM2DW85ChNroq2XkLL9Xdsih1L2TbT76hm61uM",
  "key17": "3Ds5FDEVVVk1Cmw2cRJ3EjbmcgcypAt3tzQz38i9jmoVT3iKmwefbUE1pZt2JEPnLfzUq5kBNKNQtfEgUkbny8wU",
  "key18": "4XExVXZNkj9aYVyHjfYWTfXyPsZdppU36tj4X7prsccyDBMY6pTbSRkDyyiKs1Kt2s5A48WwoHWMSzqRybZiQzok",
  "key19": "5tBjqRoZmC6H7pqsux1sfT1acajebrWzhpMFknyrws8poRyam75mKD6i8xE6ZNoikWbWtC5gUaPDTZbuKgvnZc9c",
  "key20": "38oqo5h9E7dK3oPmon2S4mDSpZZoqYKxyTU7aZN7ffwRmdL5vNuhwD2guKAnMZEN3MLAiMQvq6XhZ42w3HfQuEbo",
  "key21": "4ckAhVruat4o5MnWkc14aQvsqcQK5zecLyCqqfYPkZUnCowTtKzAVRF2pGxCJP7DYopNkkRJfzmp4nnK1USSetaL",
  "key22": "3GiyWaZb4gRTUUqx2LNaYHPfTDQxGJYyXzQLAeFZK3VzxsXME8m8oikG1p6VBK59H75E8cVjyiSspNtmXBsBmAde",
  "key23": "5ANuoAbi8yH3yYw78DEdXbDM2ea8rNfu3dWWrEe46NRCMzQMXTLGdYTN41RCdxfJ1bLFixBzJoSNyBeTEd4fbu5Q",
  "key24": "61YsLTcTbh1rxKJkcRPseQPQJirJnUhdBFATiGyMjiAGXgDom7d9CVFXCNcbDexjMpziA3E417MSjp394bwoHt9u",
  "key25": "5DBC4be2XEEQjF1xU9eaHmfscwNrFSyGPQN6Fd9FuSB4qtDhRsxEdKdDTJ3j18qn9KiG73CwqgGpEsrndbXoReKj"
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
