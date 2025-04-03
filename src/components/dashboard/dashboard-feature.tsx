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
    "8hrhRtt9KLFr1yQSUjyCLrwk13JznFgMgqTaSHHtJcZuCyWaqHfCPzy7dprJigagwuuPdGBrTDg3t4u3onnyrqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49FNMv2f3mipZ7K9KGgUav4Govwq2Bqbr8YAHtRxDeCi5WphGEjn4Vo584gm7epDTPtXPwaksHNvfRB9wYjt4TBv",
  "key1": "WJiTrcabRegwHSh3rLoxvDJYDNYcx87dAU3NgrWvBjPHf2ZsatG9pw9QX1vQwbzFYkruETiCUWrtJeECT6vvL6Q",
  "key2": "4F8uELbArAouJMtbDvcgp9r5dxVheXN69UiPiRovenqJA4BzKWafJh247cAxGfiifnsrmtdxZwMnwmQ3y7q3vMxV",
  "key3": "5jFvxYYn1xPhQ2SEZhBP9T3waw7KUbxUw6xwT7DWMXtzdoGqojRwLqwmSRvVxkoSr9CveHTFUhrUZuzkoJWJWNba",
  "key4": "21UxEtsj4jcAJKngC6iu4KFdU6Hqu6cCR8KtSpzZQB3cs29JAkyUpGNR5i1kU3WwPpoFikYyzyw8VeAxozwgMFKC",
  "key5": "4kiGYtup6jSFiiD7VLcxNV94AY39svi8vPGPvoBFsi2qXBvGUzfvJnzVzMWaTv79uykYxj11n5v43L5uPAgFrc77",
  "key6": "2sS5x9UXrAuZRZw4ZXQv2mwsYUmCG2QtFgfPFVHpSZ3FDBpFxf95AA4JjtmxtnftHtjY2EYTbVyQazzC99e7JiGG",
  "key7": "4mZHRYSL4hZ1LN93xNnDDtML4hZeL7HV6GsfwWqEEvxr1wAwU1f9eQnijLasg9hqZTK8XLLiRLod6VAykFPQu2Jw",
  "key8": "2eTid4edGu2aXS9DdUGHXydu8nP6ocYjxoqaFiyDqyeMUdJk65daWVYu8f3FxNLhgXZnuFMBfFHT9eKDD5sstbp1",
  "key9": "AW2otjzpvGvQ7CoTnEKFUDy42Zh8PpmNAU7YLZ5Gk1yUjbejxfAZDxo4DG6vtpi9Pe9DLPMYcmVZWjreDbrQygy",
  "key10": "kgDjTHSyUod2fbWdpEttw9XC3ruYva5N3fWzNoZUzNV4mPZyTBLfvYEsnSpQJGopesv7uM4tfgrinxVppMqSzSA",
  "key11": "4pi6ur54dbRaZ7qFu2sCHxG1pFDyUgUtZZzSzetugNrL5rjEU3Qz5KehhuiH6hhrt94yxBJoFzq3qkyHgKf4t7md",
  "key12": "3DATXNL4Uxr6XvhAJqmhp1EsZqMherU51kTmET4c3RcxTyh7a2PhcKoksCzPsNvZzGZaeTor6SYxBWZudwdJwHYW",
  "key13": "4pdr88ZA4kVmiC18DmSCRxy9deEQqraNxv8hiPgc4UbZ7w1Numn1rXC6pfFayauU15pPyACJXDRJ2nMVNqopPXY7",
  "key14": "hiep8rak3H86pi3Bvc8i8g34UC3pF2Met3rx3iqfaarBXo26PJX9CWFMnjXQt2fzcHcQ7cpnYVbCtELgwMQ3w9v",
  "key15": "3aKs1xAehsbBSzrfftLCPB3zaoG6hpcpVaP9zYgG2RGup2tnWTJd7Rb1HSckMvbvnYzKfrCbRU4AAZxqjts11HFo",
  "key16": "3LF7y8wRZGnEZSEHAnAiph1oi6PWZAsHz7n3oPH8DMeCtuLB2Y1CwGHW5DLZwiVCvvKNAzye8P114eJ84hLnxrVp",
  "key17": "2LnbCssXs2jDyARMFXZRQ8Uz2FRdPMZuTzMMY6iaeFpvdVY9fFfGp338ZftZgnd27CPLE3Vj1v6Ec6H7bWP3bzGs",
  "key18": "z3AGVnDuJAcJ8Cfy8vH1c7vKAfTZrQvJmUuxuLYHZjt7rjNknNRCkcKDut6pzJS1fsJfRcsHQdbCHhXgg86V6jr",
  "key19": "m6BcHV36GwZp3ybY1Ehq5VAPguq7V7vZAPbU8iskGW1cevo8KLbkR4jQF7rCF3kVXcbfffbcjyhNXkZTN9HAKsW",
  "key20": "5tHhyzJy3KmeQ5bAtkWxuKwg8sbGe5MMH5bDf6vXYnsTju3zd2kj2SD3cyHLkucrU5ZHqEQ8WGBpS5fGfMqcqRTs",
  "key21": "5ovgPwfr5duXNQyVBx2FrcN9Bwt8rqT51HersJtV7m2GdJtdE8zscN1p1LBPPVY1iqkahDkrgegE5KBrKvv9hqXc",
  "key22": "2hskNM6Y3in5WQKLyCJSjfoB3vHKG53DWPUsSf8SGjPt41y9ixErLJp9bhLX6y2tG7hXTjfVZQhsrzMGkvG87ruF",
  "key23": "2CFS3q8sPbeBGFygc5K9Pc1qCPtKkwD4B5LpRgHocyFeDFuDEqXCxcUUVNHxrhY78YJuEDs4q8qTEZFpCPTD7KFJ",
  "key24": "Qs4vHbokewpHYjJcvTKTvbYqzN7NcFg14XXntK827za5246b96872potRDjnnKKrFEUNtc1AycaVz1DTG96rUoU",
  "key25": "RMEeMBPXRn8GLjr4hNTMCHF53GdDZmJBqWax1g11jgUCTA4HbRAr17fEEA2YVaE9gJywRmHq7gAc11HjU7MfTtY",
  "key26": "VmZgxMeZagZUHURNyg1bF41JskBfr8zU47br9Jw3NigLFW4Cc2vUMj9voedrUdsxP3jEgNwUncjEkR6QFnA2AuQ",
  "key27": "6744eRN4n69HYG4THXMPLi3fugFKazizFyrrDNHXyi2qMtwyADgw2YuNNBFJQd7j894E5gbs9tYUYoyJTeHGDNEU"
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
