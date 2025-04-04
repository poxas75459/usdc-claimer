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
    "5Xtdf7sd14Rxn8HRVQK3xpvVqPitZuw6vN3393HNKZruLMN9X7gyqTSnzWeourF8bsCfhfNWuzE86b2xATN556fP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vHiQEEdwNABGPL7MPpFuoGdaHGVDiPdgZKSD3r6xUipJZq5t7pDgtVMvbMVsVT4MuSXxQApijvuK6CskygYYC4s",
  "key1": "JZMcdusWX6SsicAnryBPZQvFgocKJ42ZvzwLBWznjgMSck6631tSxd2Tknhbe96Fy7gdkv4HSJDzUaJYDGSn3Pj",
  "key2": "Lsch5iD8t6AXCeoaUcdjuf19q1mM2suJwHBhgiyoG7pTwyDZvv6XK21WYmwkQyZk9pjh5JwVrVobD6bQJ3z7Ueg",
  "key3": "3pqQbyfXGgs627E5LbBUzyLLCqZkYyhv7TEk878jfwHBYEZVbiHZv5gVekwwYnhjzq3L5w6vyP1nU9hwc39Mc29d",
  "key4": "tMVz9PZUYdqFdoE14c3tAxvHNn6p8VPy38KrCT8jgf8XW72auuc3h3MvMAKbL8JqaMPKsQqzmgHTwCjnQqZcvTt",
  "key5": "4N32k9zusv8tYiea6QBV1eZQTnXFGQSmxqg6EMmvYdBDZLHRcjjTUBXJTMYtKezH6T9zc5zMpFjkoc3VaHN5F4D6",
  "key6": "4S3yvV9YSYToqDpRkSfNeWBAnMFUAB9Ro4y7gN4dAoVU21JD9ij6qqKnHngWtu1wupsRhzt5nzKuQmkekceXdu55",
  "key7": "2JUTeJyNY3sBk7syGZn6hyXvhRezx76EaHAfHPA8nXNbtPdLyoqp8MRQvyeWvmGDWrTUYqKrkM3P8RZ9BAEcW33J",
  "key8": "63yUsS1yK5ZygMUQDLueh9gtNQ3faB6YG5FSuBdxLDVBjfr7HxtUtndFYVcMoAoxUZCXk1jE1MrJVyirJMFaNnR6",
  "key9": "yvMZpNXG6GFvnMZJHSviSXn4oWjvJF3132gCvLuJrMLBCvGZo2rPhF8dATu5RB3F75tqKZGLUwzCMQvcZCyTBmU",
  "key10": "4KN2Dp4BminVjg9KSyNMZERZk9QKtfUgwdqA9uYq2kcpEjZ4EmKpDvjnhK1zu1FaRwY8bTgxQpPWuZNBbVZeQX5V",
  "key11": "51goDGJ5hFdGa4Q8kej6Ap4dLT8EFKpkVmvNrpJgTgYdKAumqLpaifk7iXj5LM1PhH9Y61wGNkhqWiVEdzMQgCEu",
  "key12": "2eRPZSMGiM7GKc2vR5mYczyvTURzfuC1RbL5QnmikHeaE3GJ19GGwKkz4c9ncv7VYqjspeUXVLifcMTuriaDHR9A",
  "key13": "3r3hoDt4yrC5c8ikjDPwieFkohhJsjCwHCjLDNVCpbCaaiNESgwzDWxbawa7HZjsgz2QEmkE2Y5KrYQwudULN1Xa",
  "key14": "2yAAg8HrJc963WKFn5YjTko4ZToNDjqmj9xspHtfvjQcYpjj8z8iLJi8VJDRM3LfZA1A8eytAyXNS3z2PZaGUDgu",
  "key15": "UTyKAEX5LtkDWuUL6sfkQH5iRpouo17kQ2paZvFzGVLozdT2FDwP8zauRsVhzXiAt2qPjWcYTB4UhpfYEgDeTAk",
  "key16": "42Pp4on1Fa97Cq2pFjVpwPiDSQ9vnavQ9m2thfvh76rGKBc36cZvxxy9NwGDuTFSBp3QskUpdiqNin8SBPGFNn43",
  "key17": "55iRJA8jRymLesUXzQrhSnWVRHWEyYHTtCdYRcAYPzihzFvPeAP8wniDowa1D8RSpMXc93H1TTRUrQs9FKyFSLZ2",
  "key18": "LDaDee7mQK83XjnzDz9j1hq2ioZMjYPA2zV33dzkoViB5WYySiCQJvBpj8PddhHq46TjAdoFdMQjYG75XPY2pbT",
  "key19": "VWoyuc2SNX4uM98nSRatA9pY3BxjGs9PcWetT4BQxNrLmjWBC526jmLHByBY4EEEMzyiYdPCyFdJyDXuL77iWZF",
  "key20": "4c97d8wsWm7TXsZKzaRCyAQkUwY6rsBngKpiCM3aYb3bFTawK1xtHXxQkVpuuoeXVX2VuCQWA5bWtLJoTMtcxUaK",
  "key21": "3wWtnwxkBhe16NTgMG1FWC3cnjYbCshqrhXfPESB9ppnmNG4D6rzQopsnkENu5c5mMdDL6NsdnEPUdjk2QRDTcLE",
  "key22": "Xx1hucNziPMEKVGaP2EDMYfsvhYcSYTaV5KAySnQmNzkZQx8Uy2aTMKF3NkPjjL2K7PRy7onn5ChjhDyh3E9mVt",
  "key23": "4Q7L5mZEJAYNKhW15Y3upVePUrxeEFgztXGH5xR8mBdW2SAqSBJH8xqQXmXcCciPknB972ZGajtjE9BysMLB7Q7R",
  "key24": "4aZTuNbPWhRxwK2t1HHYfbG7PvYTw4bs4nH2ogpEvT1YH46PierQYNnGCggDiDVueLpKk1PbWxwcZT42hDEwDtTY",
  "key25": "4aNYMZcGSHKi6kVLiRco1raCbvP3xArmpkdvBhAABJv9FgyLhFn3HYvo1oHKbzcZ9tifLvZ6vHtV4V4Vo7hJt2Wi",
  "key26": "4MZ7ogwQVcZkPfF9oXg3X6Wdt2NqzF6mkWLwFYR3R99zKeE62buBkxoPHS1sqa5ZkazUuzXdknJwuStm9FwvnagY",
  "key27": "4RubspPUoBuSwtCbg4rDmbX1DyZ3wNdD38kg49zkKAu7MxprTPzj77z8m3rLzsPBdHGPG67nQLANtogzAau99hse",
  "key28": "4Htb7kLzDDKF2qUsEEwnJs7aTBqueQjJBUvbVXBEkNFZ6u5L1jLwArAmoC54FapQBA19cD6nXx9NZ7MhGHe6UYCw",
  "key29": "21ioYLAakuzWPRURakogBeN8U8AS963raZr8XzyjXLoUNxemqwvKNWan3Tk2oUsYGGhUmH6gx3DLYmWKWb1XgCwi",
  "key30": "3JfBq7xmLkgf6oSxZpwv1VjsXA8q4T3ETBykDpkH3kc4YcFzjqVwnGWXWsWRJxB1T2ccdcv4TCjrux9gLycS13zk",
  "key31": "X9X2KLhQJxHPcv6zWK8NChX3Lf7mgkJsJ687JMbaZ3drmgwf8QQcYksGieYR4PBQJJoBGdY3urRypYD8vApQiHh"
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
