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
    "W3LSBGFmSdWLtNRKWUPkrkyZwHWHFpYoceohDpRbnyKEwhLCJEsQtQbpAchqmXgrGXZTGqTZ9seGpPCmcwjQNsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GU7b6JF8nQrcbpM7dNLCvBZS7EdFzPewpyveWEuNXeYYN6fXXKWU8a6J3gvdPUbheg8ZT7CFUYqz1npx9ws1qqB",
  "key1": "5FNv5bHXsQJyhDhZb7FFfGasFxtrxEvVemat8WGWETvEd1VLhy5hnyB4oXkd5zMuuuL4Rn2uy2y1cwdDMABkDjy",
  "key2": "4TXB7cDy5wjUCjHxFq2SUG62a4dPn2ptetJAQLM7DkKfXhSjG1eq3S74n4ruKR9oZrHrnHNAcZe2dP2GCYgvvaSU",
  "key3": "3BwYXZu6bSCTGnLHACqSkXj8tXSWFXNDsZdMau63WiMxwwKEUZqNMuoWJvr65FNwMAxufUX4dwJoHWh2F5tLTsnH",
  "key4": "4A4jaw9gTkcQoH4koLtijomAiUhGpdEkZcEpsC95FC33GYAavbJJbawGAwyb2wrb2seEgf8woGoAsgbUySQ4M3tx",
  "key5": "L893TBGe7cwMS6HLK8jzvPhJhiWf41V5MNeRKfLBUbichcospTEQMj9vejsQxFeXDYdjDHLXYW697XvawLTXzri",
  "key6": "27wPyUnjn3rP3iw3NtWKMVA9n1meWHT3W8bX6JehP7egXDLGU8muPCB2KcVXBGnNFQxbQY9wZuNTVgpHSJtobu4Y",
  "key7": "458EPmCYDX9Tk5K92ZCFmvuES1FGCNDYMGnPGL3SznrDNCUMF5JmaS1awWu8woKrezmjLxXNavofsfwe34BhhTDs",
  "key8": "2J7USi7E6GDw2fv9ZJ1U7jFkeVerpwyxLpd4PhAnKQhg9X6NvbpPZ9gkw7YdtfH3boVGLDvbJ2uYjgTB3EmCd6nU",
  "key9": "5SMeVGaWMPSyVFSQhEW3WE7ysNDDCNExfqvtG3Lxkcfvs3BzuuW5HPQhVvzUsXZapLg8GNwKT1ypb8YqCbkSTynt",
  "key10": "2HftePGvKwnU5PhhXbjAZCqe9xQwtyshG44ocuH3qcrGuPPJqXR7kT6qXkvDWwmfS8PAko6e3PgFgX578FNwR79t",
  "key11": "55C2N8HxBttE3djS5B6as8DXECar7v72gWAE1FqbEiyb9VDmpigpm1GyjxNd1NhGjTY3dvmMLbvkQyMfvRjY8rTR",
  "key12": "5kScMECX3uHgb2g7KrFGBojXBp2Sno1Aaf7TrZyirTxW2qp8W7FAwdaVSTFYgatZqj8AmgQn3Pjx7ixjCYFKPLYB",
  "key13": "3qaYcZ5KoeKo3gV9ojMXgQKB9utQCKxAeJaqmZMKLvEgR8qekc15JzApMjCcmwoRsDGg4Tf7zrutv6zvMqyesW4T",
  "key14": "51XiMbzFnUkbpqxwM6CgvEk4suw2NPs32MHZp5W32t2csaQJJzvHJQAXhaSSKECVCUYuH5Hk2Zd3L5Hr4o7TYHtz",
  "key15": "3PVz4GmpNzpqVuUPvtsb56rDEXntWjnM5659rkDcVbLNzmurW466qN5GwD2PkPMkArjZFBJ3NaYeL5uQchWSTMJc",
  "key16": "26DRVmMU5FjKYN3Q7a7Jg639vsA4sLteL4zgyhPer9BDRCARUXLc7pqS4baLzoQuQkBR3n5ccHSFvTpgGU4XmntM",
  "key17": "5DWWy5MC9PJ5jVHQ96Lxjxvxh7CTZMiAkawLUB7X3Xq5E2UBvRWFY4GdJnYxx4D5WyaWFBYe8HiQZ9pGPQFDEix6",
  "key18": "27KGLMJ8F8h1Ms9LqCgjnGy6tP1HBatVdUknSGcU7wB4YFMZvJFv66WBnMn1ETMnPy2fkt5AuX722e8vs1prA59b",
  "key19": "2yW8RB3ShDfBL1kNnohEAxercoBnvCLmoJcskJ15sshiNFi6u515njFzc1zzTeTMFu4HHBVqv4uECF2H4aK2mnxu",
  "key20": "A1v28CFfNVkmpQarks65XwyJuBaPVQVvzuBUt5SUwjhVpbFYBs1BVF7tLr6EtSF3ioCZy17aD5kZSAK5CEuBWm1",
  "key21": "3ExCJnVQwJX48hTZZqscp2bn4rvmgEBkQ56fxqSRoQN1fcHaWtSxXuP87TdzdP1FhfqZkePoyba9rJPJAjjgp58n",
  "key22": "2oS8xBwy7naGKHJgz4j19pB3dCqKZtNQVs5kqz9afm71DD9vGbYsw2MxJLHQ3Exv4SLLxwFw2o8i9Jyr5GQSoTgG",
  "key23": "2FDHBkpKPgUCgWG3ko2tqgn7kXss7K3xftZoAnRuRJ6E2By3EAoBej5WfoKrFZLKWvW3Zyn265HbgxtqAJ4Nwn6H",
  "key24": "4c9PbNjvRaQX8EpfoZhZFb6JpZURUuwspZdWqq3RK8vxAB94uE8yBHzyNRifHxdZHAa3DxcadiQ6r9doQGubFgtD",
  "key25": "4TNdQZPw7WiZhbokYofPqth1PEKy4zCjqau1asEqSezSQnqop9y7s5j7etyoUsewUvJKPkDeeSdqN3ZbgCCRdaAx",
  "key26": "5ZLeKfTHybGrVV1FcCPJSwW5gs9bDhXaqeLUPigbNeUz4cZcokTcXeujccdvcCxVaMVXyWNbrsqPLKahJLGTCTD",
  "key27": "5YrsK3gKnx5weFumZEnLUn2CA8MrDY7tFPdmR46btcXwUeVZfUJmeii5giQ8STJf9iuSGu8ZseKvRi5UVwdnY5wG",
  "key28": "3cGto3DpjiKHrYcugmmuXA8zmsPHSEcAB65imfQ2xKXKdGSwxj5cT3v2JnL3dPc61xV525t5LBoNucLYh6PBxoQR",
  "key29": "1KkPcx66tR3XSFPK8mBFmLarBzvo3ogoBFKK1Tu8w9M4p19LMqVwJR8ME1uef5eVYALC2gnRU77xFUwuJ1NAbfX",
  "key30": "5eyE4oX3BnewB33xuQmH7WNmT6d8uGPHNWENphibttVST8EbGVQQpRy5WeXeUtXho8n7ZtUfqj4AcYTvFtopowh4",
  "key31": "siHedPr5mzu1gRofVB6RbvkCFmoVuFGUo7kZK3bqwo39NT5Fdv2g1sUDjsiYpnEuAHtuRjLvm8Uo9ccevYxJYVs",
  "key32": "4keWfrGwK182zrwQXF9Dchmn5aEZ8nRKZvoq8gKvFZCz7c9XSDQpPYmktftv9fzunBewixLJgdA85bf7a6M9bsze",
  "key33": "kf2XMCYKC4VcLo4x9yUeZ3zsMn3EEjoHEP6JypUP7GErJThr4258mw3poinY8Sk4JFrMapuJ43LjS3yHnTzK3zW",
  "key34": "5EUxrTEgeNVNNxg9ze8gPYVYJradWbKnFGhf6MpsRYyhGrbPED6GMXvxyEgezDyccuFugRGQ7ZSDp76q68VYLv6k",
  "key35": "3kQ1kAYaZGxBCjnTgsLmmxkzCjvzPtxysMge95xqMGKMsTGWZ5HAWqj4Yh2mDevgMR2rDavNMecepesV3DscwuX1",
  "key36": "5956aT6DBR4Q5jFaW97JYcRtPkjer7zwzxoQvXugkzRuCZr1s2YcpZ8rPvXgwywvwCUtwAbqexYB9Qz4Mg6n9xyU",
  "key37": "45CRhYT66xdYDUjg8qRM8CPmQ5PRJYWs64sNbaQWW1o3aTyQegW6GB66q3Cw8mv8zgVWXG49pxNFHjeJN1Lggm2Q"
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
