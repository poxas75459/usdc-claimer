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
    "5CHPffzwaW76xCF4FxFDWKr6nRrxiUvZu8xw8hiYsJWQbrrQNqWzVLir7mJHBocgNJBA2bdTxMNL16RtXCbE8oeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qnyVyG2stb3zUxwaenv7S2Yeo2tVW8Q2ZShfpAWFWmyVRtgJVQzcveGbFV4tvRPB69vUdjvvn3Pk5axmg9iqrfh",
  "key1": "23HXXkaFw2YDakS78GXqH7BpD89GDKsd3ZBpWWX2otj6kf8QnmVZZFdKzZ27tTgMcNQS92CNUH5XbuKRYoksBh5h",
  "key2": "45G1fkg2cMuJyX9m27wUmm6iN6f4n66biuoKH9HBzWTDVF42b1oV2MhWZsdrrpwKf78CjCDz9Mq5svLSGNBvYKic",
  "key3": "4bBreJwAFkBihUeodsNu72nk3xpVxohcCskP5MB21BCToxkiGCkNb72JQxmk1zqSqANDcdfq3dTy3PiXTf8R7qE2",
  "key4": "37ZdPkyjY8MkR8jAw5afNFCXjUYnnUXRS31G6Yk3TxtBseEWmmtWVHVgwy8et4dyhjbRkT65xFEok9QgUmvPtEvY",
  "key5": "35sJZrMkpVcXnB3jysuGzdpq3hwU8J44qmB3qwhpphWesa2zdxKacFYtYSmAH2m43FDGf4Gu5kFaQhoff4QNKmPo",
  "key6": "2nCZWhygGLXAqCK98RLbpgBXmhZPVDQb5Gc9w1Hz98Ni1Lm7igWKGYSmK3tfJzhSKQfoZbiQTKus7SmQPkh9FBaK",
  "key7": "2e2VZzp2M91Lp762rLUrAFpptgcJXMiEy5gncgF2bmiC5sDL1H2obSMT7jvrdaafjnaL9kELhnJRLhPN2DyQMykS",
  "key8": "xrsK9d2d6Vhz87pwgaJFBDEn32rMJjzuHAbey35jwtYhYtKyCEKT8yDMc8GBbts1cgXY1yKY6DcUK6tBPQRmvU9",
  "key9": "3xp7om9qyBK4ZHXDH9VoXyPbK946msPtgkjV2tUy2riT9ML7wJMDJp6nhHawiZSRricnbrLMV9Sx86YUjSfUruge",
  "key10": "2v132aQJRMQs4gCQPaST9jbvsvhNuFKHXzLkb3D5c9RbuePtkEMu1Nrft1vJMAkXrphnn8BZviA1oC5TxxkTENQF",
  "key11": "54c7qr7LL2TYNoSJ9bLV5F8HfDCqPvmrmQHZwfoMFWzysNK5TKnuMFcDaqUqveQ3BDKiu9dnoq7UXzAokYRWHNfb",
  "key12": "2Bug1wQVkbKvmw56DLC1CApikjDSS1PGTQF6NMfq4EuSfcZup2o4YJVWjQxxHA97BKrbiQwa6rSA4NGKoYB8NsDS",
  "key13": "GMc3NmnvsVBvAtEyeFGhbooHHkuPnsftCrDFQFUJq4U6CgZQucinYcLMvCa4rXLMyMHzken495BqYbVFgqe2YcM",
  "key14": "5xGFGfU9ougfdQJ81JNSS1PUcuZ3ZDqHbVRhmbdkvnJbYvq1ZqkkXj8w8V2svHh6BJQZDRiWvpbtbYD67CYB5P3H",
  "key15": "595B5rdkdD4MSXNgyXDn1Bf7AsDbqvjieHrDHnKpQTMBtJz88jJ9QHszVNmnJutZsYn9BFqjFHsyCkjUob1uYWxS",
  "key16": "MGfeuGbkLWjBC1w2C4hzFDuCHfzS8G17sXcMWfFtsZagEKiopwrMjQ4PgUuC8iXYFx2nUNy84EAM9jH8xE1VpDP",
  "key17": "2u4Qc7egdFYfdnZukGfqpKBrucy8tCVC6kp3vK3eF8uaZSL7asskBMGD2ZvCPjB1dKAJtJmfeSn8CRcQLACB6B7h",
  "key18": "5E8AnD8Tj6SnjUYK4JpkkgMJvxJNzt3MgntAjBfh7nYhibgWRvatpsLK3oVvB4rwBiNCckpV9bbdwM8HLiETqHNw",
  "key19": "3piSPvQ836q1sR6LirwW4eHeojoJpckB3kkGkBhuxQPoWXFv9bdz3uTpAz8wkkJ5GeWv8gmGH8C8pYn4LM4N2hQH",
  "key20": "FSzWuzknn5Ugn24nPHZUZ7USmuqqHDwyNW4bevmCTaW9fSKnjZqDH7LDp1nbcDPAgdc2gsmCYbwvbw6YP9xKprq",
  "key21": "8oBdRanMqn4zATr2urjExoAiPfMxDr7pAt8zSKY79QY5CYcGHVaPAfGkUSURRmFLtq4HojwqSmjZUnuTvrko5o4",
  "key22": "4ucrxn2mRiXRAdgA6Z9JmX28fBdRAbDmhtDRTofGkhmWoJgWYsP3GKqVXU73QFNddFrW3DyiyiUSijLaEqoknwD4",
  "key23": "2erLgUAhMGhgYf9zSp1PvJfS8pmG34CeXkNw9ocEwmGQky3x7QHbTAYe6daeeExCcfjcoAPQhBEscJmnE1tzueiP",
  "key24": "zwiyFKrZgSGPHynd8rjcsL5xXndVuPPhEM2qymFECr4pTBySSxmcEkotyiqhpQ8rUJQE6dFHDRWwM8itawfo5Vj",
  "key25": "3tmNY94T2wk6CRzi95QtqPbzBF74RMmyvf5QLJuspmLa6ia1JibbNy22yvqhXTcpsugBcNfUYxgvnXdWiA3a1pfQ",
  "key26": "3iEqJqS9LpqgnUpbk72jsvpZgV8QJb7QZZJ5obzi1rRgdws7sKGAf5QDrXFnWfhJFv6dHGABHwvpgiUGJgxqqgK8",
  "key27": "2TKpDh1hpFiN5Noup1aKieCNXbVxM4npHAujPpf96u1duGCEZ9sqRsJBdKK9Z9GFrgufA53dYQcfzmCSbew6YXbn",
  "key28": "4RWhAAceboCLN6BtjeQUYS1umq3wHAELHjraKZGXpJXSq4UsmAvqjgrrUBkgGnk2YzhoMdXSJn4qdERoyfePE31H",
  "key29": "5fQvTd42gHbYyvY2pgQ6KncCAU189zQh2PQYyrQ5VRLKqEZUBdXgJeSCGvBMjQawpeDZG7ERB1SRkfGfhF2xYEBg",
  "key30": "35AqXkUd3ghm89X7ujQhJTS3j1tMWckGp9FbM7vaLd5xUG5NLGSJLarteZfyCRYS6Dq54jdyRSWrXq5eChQpHaY8",
  "key31": "2DqvN11XFEwUQxw1Qdsu8sZfG4kMXvUnbAm7aAqzFXeUTXpU5mLgXcmeAGHh1Z36KFkVFWXTPjCWC6BCcw9QD2c4",
  "key32": "4m5f5zYWWaDJnWZEUJrw6qNTBXhtWshj9mrFxZXja9Qy5veDCNSYZ8XPjDa6CNMHqqjWfiJvNozLcER196auH5Ni",
  "key33": "3ZeTkAEvJS8RP3kTU91hCD8iGpFysrwvDaZoHCV7jAVwCasm3Cs4JFjhZyTLpDJgoxzBsTtygSBFKpZfG953Fcb3",
  "key34": "4Y5j6Se2y49hpwKeRrpecNhimYLoByyF8KBGagBWQSzzCJcVM8LA892NA5ij8Nf5u5nqCKVUUN8b6us134mhjxFW",
  "key35": "2LnHU3gbL5Sros7Kb2zuPMQgXeMX55A9S2n4c4A2oVb121ynF1Hekrdmkmo2QM1DhsufSGB1UCie5byAXQiGkyj9",
  "key36": "52voyZrSpNsqVFDTcXqZdURSBVif7j2PsraZDrQfMdxZfucn4RtpYimwJCNj3EbgB18rcnXn2DRgf5XGHt2h3GBx",
  "key37": "4MUqdkXJZjE6EziaxbtbuAHQ2EFmLUDCypTFzMRhmKbGH3QTGs1NU691eHTpocppLMxSPb94Tw1JjvNN7Q3cscuD",
  "key38": "LKuaUNtt9JasLzZw6ntr2jHWwdB5Ls5dJrfjri8zum78tDSgM6ALKq7m5LScVYfG61E43H93J6UbLiVCcQunG5n"
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
