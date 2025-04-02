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
    "3GstyoEJrjAHif9tZNbwAZQcqw6A1PXviExQYb8sL7DVHk5obS1NBdz7RKgFoVD9L8r6FT3izPvqUu4nGe1VYdaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s7A1gSA5tjNYvqiKLTEHWZb7SJxxgVmc2HeEv3F9xwDqG1QWdqf1BEUuuWiLPVVnndo2qF36N6QNAGb7CPD1UKc",
  "key1": "3fPabLCLEsuaUKWVnDKUQJWNP5qEMa9QqdnPzyQpqKSo4DYkqivSkvmxK1sKJyfy4RW5dzi6wNnXe77mcdDbDdPt",
  "key2": "5nKnVQS2SHge7nRLk8tZZUensazUpx353AAamCDWeCqj8pmxsdMrXbqgH5TyKDfPET1zywduzFRTeADtHcgLTTE3",
  "key3": "59c3vsQMoo36FdNjPpWzkjQL775VpcroKQsjhkVryDYCnE6GFS9M4ZYqutmkbZ5bQNzXAZk1CwhYQMUC6zFDx72u",
  "key4": "2uaxq78YdALgHBUcF44G3isPFLD1hL1aRx8vtzxU7sPfXU3c8jDXi6yFjA98og57VPrWu46AV5EwdMDCrTDEbeJF",
  "key5": "4T9Ls92TatphTHYdYo29i226r1oUmPKzG7bT69Vn4hpASb2CVrtND6gosLguZwp8bfbCSGNJzsoCRL1QFH4caW9b",
  "key6": "64aBNsBYNR6B8Ebn7mmsPovbGe8BBPDufjCC5YuVFcMLJngnmLtZrpWzi1mjaYm3osPTcA9ZZuFhnWJQRCDQRkzS",
  "key7": "5mFjBcFxXVbVnxa9K3LPkQKcXs5ZPzGY2empcRfDBDPH3B3nGpQz1FuD2Rw9Rycogoq4ThCpdFtHZ7ck7wiT7RJy",
  "key8": "RPVsWRkpoDjXUtRUFx6yBejzyyQ7ZiyyUvXB5QwMgu7xeMyDnthdpqWiJF4JbfxBPrZQZSukwPqN2NgrNUFFXs5",
  "key9": "3G7QkiJDNmzDgUiGfbcVQd53xpMVNviLmVEzsKBT3o2cVLsp5bTgJtVZzn1gM1rSRpbtCUwpxnVzhKGMAv77S533",
  "key10": "5aL68uRv3KoRjHqwnvbVmpbnuDBpp3cDefj7WqYZbRM1pSrKDyDro9r2ASu9mMZcEzuNTbRoarZWu3zm763mJS5g",
  "key11": "2Hr3YuPK97fsXFksyzwAE4WEi3Nf4oqhW5ZY4Jma891gPyZ5w7uK36mBXMbxrhhPJGXriBXfjKtXkdV8sfVDdTFn",
  "key12": "uroDp9TaJaphCmJp5bnSyhKeJNDPbvWJRdmLf3X9nzhicYZcHtjaWBvP5DHncdCEFA3vFYHgLk7KWrPyYu2z2HS",
  "key13": "3z76hoVcTzu7W34rhUjx9sbi5rwurCjvTVn5PfqcmX4ckMWhXabXxAnzKoPtHWPAjXZAoL5TGvvznfiSbNb9BXFL",
  "key14": "4pmx1DaFNF6nAfcD5t17FTDvLg3L8LazPFyv5MSeXzHqosqTFiFbMTgH4BuL4eesbDUbVNQeDRKyhTBdXXLEHith",
  "key15": "VUh7F9zVo4Uh2vHc5snC1oTaqg8Vjau4ByKuzgV686roQbkLFpGhgSD5s8VpAEXEJ3DenP1gE8wRf6bKZkzn88J",
  "key16": "576cpj6srdRjHBJePKKCqEGm6faMZSevWkN7Z249RJemRYjukrASqsHHQoPPGhmtvAbQGogZVuypTZwFr7v1MREf",
  "key17": "2BhWcWQkTvwjdsthise8gqhR3b8VSZQqFJiySYA7EcCKu6Zim2x7KBCGdUJZPGMA3RFdijLSLoG4MPZvAXRowdCD",
  "key18": "4TxyuzxerS8tWyk4TH5Hg4WXcgeQ1k2Dh1ibJXM6ajnGBhPuK2qB9MxSt9JuvEsSjTdU2X29LUv5N6qxrMqHpbSJ",
  "key19": "s9Wv5o5xBBxh5e9LXt5wWb1vie7HBsAx9jQpSqPH4vhEMWhtpEcbJpj2s7SvkCZDTijNQfAAA2m6XCm1NZrxR8X",
  "key20": "CUkFhjQg92YXGp31m4pVcszoKN6kGA1UEagX7WjnZGrgKvXYpahY6DS9Ywc1AvhgsBeuPFYV8SCS4bJQJ5ctjET",
  "key21": "2e3DavYEugbG2d4w7KXYvkvgt8eXdpa6TEoyjLorY5pwQmrmCFh68HMiqT74B9kYbnDp965TdSLF7Kv1psZHcNej",
  "key22": "38xyMfPyAkpRbPV2cd1vpMCdqcvZ2V7w8gyPeLLNL26gMJ9ZgH5hpvMGfXMGDNP7i2rDJVakysz6J2s89WZzUTnN",
  "key23": "2xGSCiUKPngZDt4naoz9dhfuUaY6bQJ6qFW2ZAdSRxNMzvWH42ffyMXvSj8dHwqKxNDwaM4YKdQFPBHZfCbki3ub",
  "key24": "3Wm4To1bCxNwnw2hfrGsgKyx9HtVdCZwfEDpeXCYBWMEH6sDZiJUhBsHyaZFeSwn6HZvSXDsmbGSx1m3j886u39c",
  "key25": "3U3D64BX4Z2abC8R544G1VTavdg7S24wpGVNYQjkJ6msgW9mg3TjaeioV2nQWcMPZ6ESMaqnaLhPxFuftiZ2F793",
  "key26": "3sVJixzZg5TuqiEoQawkLRnPmtJ1RMEjRM3tDWNigk3BcUvsAg91DpGc5zy84P6sLeij7dn3m7BrZPtGUb2sqHMk",
  "key27": "5YuggRmBKaE8nHjbzk2Yv891VtUoPGxqNBKyunLxJwMLNQNKxudtXWBmQ5FRZnU2qB8JLzqvYRjScLiiHzGHH8Cy",
  "key28": "5NdbzM8EcCx47bYd7yc1hZsnYirrWvzCoPjEQ1X4vALfQv6dZoNZyYJ88dHNFb1RAZeMhqPj4ndLXPshTJB2CoWV",
  "key29": "5dDeCkqLzxmCYr8dV2cpuxB1JfroDQkSzWECedZemA6GmQq4rpchFgS6oBiCDCn46MsLDi55udamajWCVN73ZxAD",
  "key30": "5CBMTK6T5tLdvvszgcTVUqsfYUD7ApNFRhKGYbguc4NKUBZgEEned2XXnsJNzFbTEumiwNCbU87rhXXx1wVY4Wx5",
  "key31": "3Pu6sdqL7NhiwsJ4eEoRnkeBLQG4S2eMkCVfxUieQbuzFBZH9pnf2tgduDm7goVhaxFY5k5bJSELq7zghKtcTkX2",
  "key32": "puNH3dVtkWn4tTXX8eSKETfcmu6iK7zzUiPeDiiFXx2b6wmDdvbw7oYGKzwZFLaZbHcJjWNqCXsgAK3vNjygnom"
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
