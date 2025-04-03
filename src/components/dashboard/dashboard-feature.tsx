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
    "e9DHY4JkxvRoNjfyxKBAfaoW9Rd1r6p1t7nuAvnC9q69k6FmCUMRn1Uqt95qqexfKKuWsBNHJr3ZLJfw5u6VEsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ik2AbN1BFSsv6obgfM5JSnCzAVe5XkdmKV8QWWtNqFkyPzV9sWpY117qGxpUF73LshdNVMMAVFx7HA3LsYQ7J7",
  "key1": "4mbYRsS6BoTY9QxmMmwnios3sAapD4YbLzYjgE7PDfJWhHmoDpP9wkmKhMSaNuPTvjMxLizZATthRgmXDW3DadPk",
  "key2": "3qne354u8kweMiBZVDNGraiuNT4Rxi6kDuzXqhjQ6AuZRbJQuaKePGBZSFMQcsmkYQARK3xQu2DT5GDqjT6VqE9S",
  "key3": "4L4pBCe1VXXRyQtCiJviBRaHBRfqBv1tVSZt5Z1KkqufbGcXLMPyMC1rLsPqkA6Y8h4Tzb3UtWLPYFPQBDwPYqAp",
  "key4": "3qd7fVxfkqrUZcfAa8nS74bRXAqdF3dniFyjztniDBdYFT4Xc1xSYvq72DoT8m6uwRgbBDUPm88pBsZWJzSdfR42",
  "key5": "CHoEsrJzjsjvrQrJSCMREVYufgU2CEeLexBTmuhuFKpq7wN3DMNUMnQEuf9AipYS4RrS2CXSp1QM81a31xbq2ci",
  "key6": "4WJ3AqKqbZyJiAsgg85we12DE3Cgzt6v5hmpfSNTjfz3pAD2YkevTzVikjArp8hYP1p4CzfmKFSVpuUsLvp8zM8q",
  "key7": "4jX549RjWPR8qsXmhW3d1FJp1sAEnAfKtW4jGNMu9Bxiwx8eBLfEzvsfyxsozEshqSDyGq8JtLUABrDKi8RNocb9",
  "key8": "3N5EaUjUMKGrXiJ9xr87hzxppMBUMCJJNh6n2TyK9cvFs8Ci21ZXfogwDjPXJSZQy2aFiweCfY23q5WxTXqwZYw4",
  "key9": "5KTM9asvpUUfR68xPgFT3yZPCuqzbQh5EGKVmXCXUhFer7UEsoi3czxU1XMY9fnRddajffMsVEKxwkyfK9cpYf14",
  "key10": "58TRJNiKbhZvowv4AhTTvpA8HJLJ6f4mNHcjDQ1diDAgrYZHgy9K3bhpRx5keSGV3yv5VNa65MHCobwEMBfwSTkh",
  "key11": "45to3ddGsAZH5q9fDeV8TtYdBVoxSKeYwnFrKYiTX4EvcvhDWyJLVSYkNhNHtJ4yhK28Mz5UCFENRiujXzJsNRmx",
  "key12": "3fAB1jWUicqVQVGKrxAkNt1RnhwFMmjsDg6maqeVpqrswxZMhNjrA6hccu3NFfFS8zcVFoeCbhz1sueYByeosZjK",
  "key13": "45KmQLKqqn3AdLYyNrWH4r3kVhvwmz6MwmHv4cHx57wKVbtkoqS7y5PEs3srmn9raZxjEonEaJkSHwSjZKFdaPV6",
  "key14": "37pADqcvy2HHi13ZHaPpGqZbDztBaVyApQq9W9xBppv3VeZHscgVYCxyc4aYjQmD7E8VFE3mwcQqziL1ZTAKW7GS",
  "key15": "5bkybu5QcP599YBRu8UE7aecSVHqTjB2egxDgZ92CGZiGn2bm1Uuay4NM1MjRuKvt8kjvh1rTmR2fg6BDk226yKA",
  "key16": "4q8c1DuFeezNe1vu1Ru8Jva4ThTNwUZUYP4PDGBDeZoUVx2DpWnLuX2kdGuNYnxs2LARYCC8mYapZ6GT4LJrM3eE",
  "key17": "3KTcbV2A4VSLBBYxVczRqQNgtN2HAVYBvUsQPjAoundVwKoXKtfkGQgAUE5QUVmdwERha5MbhNmT2Vu4GrPA6k1o",
  "key18": "i55rX6t8b2XsjXrjBppx8vcfLSbukuvJv1j3EUEsg3yXX9Reyjfukq2vzU8ZCC4MzuJC7s34GVqdqPucjM6xs4Z",
  "key19": "3MfdMWK2fbnzSP73utXXkTQddKXHJdrNjJENNa6q7QnsGLfRWQFW2BmnTTPwVWg5vU2GMU3NUYzHG4j8mDVKVdpN",
  "key20": "5GYx8LnasbiBrQZSTrz9YMDLJPrCbV9drqvxg6mN2m39c2SXpRdknF7F54P4FgSDwAizavBpg8BeRn7PtaevgYKt",
  "key21": "2aWuHZYa4xdJXWKEpCDRQybfTXoNfw8yFpwCyq39ViL6LqyLD5KRVUwQBs9H5pNbvVgRjC4HgJy1cesV2CGVBnva",
  "key22": "2aUpnMpBRnKd5ZZM3PASWNuKWUwQHVKEZVDXgvUrBbnyGJy9vaQSD4xEzk4CYQq8dZAVXs3JPvNintsBdBJHThgV",
  "key23": "5mvfAmLzZ4isKZvTisrxEi9eRR4YSb2m4nw4McnLBTrb3YdoWjPBCk6E2KgWAKwpUSV9mKTPj3dZkjZVYiQVvqVd",
  "key24": "3rSE59kckvNnQsHFGgYEQB43W9VAuRYjjpjmYmoDk8zcM5KVL2WnWJnnxJrBDaCbYk3ZyvSdAepwkem1iK83qGw",
  "key25": "3bZEo7R5VGAUEjoj7zYEtKJk5mY6kW2smRSiAc31xwJX7QaGa5h3GAbcjcHaG9UEuPcc3kxPytUZXyukkbzBiKiH",
  "key26": "5ySHiTnMSo1KLm2J6nVevMfcfrbNR83cX8owDhkWdD2oKDDCMer95rySH7gVTHE5Dss9PYpqkKUJD4LMhKSw7YAD",
  "key27": "3vdUrf2PcSK9weUUVfkjQ6Q6Hd4JDaDbPqPnCDiXTJRrZSpU7FTQsZHvihi2rFsYK81jaghxhQfp3xF56Cyh9sCf",
  "key28": "5vtKdZmvFEXKN9vBkSgCwtN1Y15uCYCwS8mjMWyPMonyCU3vSPurzX8KJcDkoZpzh23sGb6pDo84UJ88pUFQKnJG"
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
