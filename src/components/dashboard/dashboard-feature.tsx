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
    "5PHNTpC9mpsreCKPBLkUK8S8akMrhYPVeTtDr3aZfvHyynY3z2RdzZNfRKiComxpSfsFc6j3TifQpbSUjzHi6RLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YPqz9xBjj4N2enCN8xYpTrc9wCKJTUgt3TFpe1Z8CMxvLPjon3VRvAEbCxXbKNtVeSpcPvLR8Z8x7L5Z8N4KQn4",
  "key1": "5Cc85zevZeuravQAri2a76yqUaQuqVuPtAUivgQuTPAWZDJDqRrCbHSALA8cBXjcyK8DSwzCbgUpwHhq6Q95ZeFT",
  "key2": "goZBByZXXMEREUzVeiGLwRkDJrFMnJUe4kZg1ZxJpRbNQvmXYnAy42Abe8tPm4Parjwje41gARMBM523fiMP2Yj",
  "key3": "4S8jTF4Pi7Pa56QHF6ciYbrZANLj2Vv2zcLWyk69Brj42SixePHSN9EJBrQUV3YaD8Vnknm2nqxfNrQvtXxsTUKS",
  "key4": "24uAo36JLXP8LiwveXa4CMqcyizuYoHJq8z1pedYsbVCXSKLuziWSKZzSCV1mZ4ZEb77U8oi6LrBRo8nWZmxHUuS",
  "key5": "5q7nfuRjU6ZQWLEmpFNEotm7nrhmGTZTjM6dSveZnF7TJpEEq1EDHd1X117L6A6kRXqBkUwk3ct7uwByRPpJBeGJ",
  "key6": "23RLu2Tx2YRyXsW2iW641upwWq71ut8MxFZSARscSp6S4dR94NGTsrdv9vM2e5vrVLGmaYsQpvb97kTisJukRkZa",
  "key7": "ccpjSe3m5MggZma1wRd4vccisrBsmh8ZYfFgz2sjnzasjcLrxZ2nDyD2wjjGz2am4wM3vLQ9obj2wnpZxkpw5KM",
  "key8": "463EQAigoXfhTGjUEgbFPrAnaGwjozSVbYcEDKMQEUGuvVaqnNaEm1eroQLtojmgtTpfQAoV4KN38YnPDBWEZbfw",
  "key9": "2anXnqEx17y5mZKcNFWeT4VAiwKrncNxycYQomWhGtKRuzTXv8Jdm5EC7wKw4zEaAVXqdfhophR2swdGzsVbhNsD",
  "key10": "41wnHHwcXJ4NqBk6ZiGCSxYc2HvPkt5bVXsSm24EL3ep6oN7jVHELCx6VqXTsGiLgp2ve5jNMTxcUhFNS3R7JrLH",
  "key11": "2RwpB8xxQE7H9GMpEnC3emnKtAQ86DHd7yFizuQuDS7EaDyJeYCXkQUCGQRYJjeNcjrUxxTJKmenmcoMF7kyWPrr",
  "key12": "3gZus2ey2NH6EhiD738S3c9BoWmdG1YMqod92A3KU8nYs4wUCPjSP5jSrDXJRFaohB3f3oTsH4ajyMrzoWBpYSqQ",
  "key13": "5q3nqMJDHftLYCEdzeWxriGimtLc3s5yB55eFY5uT7Fap6FQHtXyz4pcdfr2RNQPyMCQzPHv5PN7BFGMPj6wgNW8",
  "key14": "3QCh741ShEaeJJ6VS63zcio3EWz38vgnSEgxvFbz5dxd2quAkmQ96TQy8zhHLFa7pQ9VBHDrhSuGaYoPQpsmxKRh",
  "key15": "PvYqKU6hvrkaXiFxtE6tPmVydyc81THZAhtYfLJAMb3R77dK9YhZHSYepU3HdGeivNA9LWmtYWADVpBk19swwYv",
  "key16": "5wCvBDjw7tan9rMqYNDLz4LKfqYBWHNzwUkiRagXvXv7nynFkRKFwryQeaS7UjJgaGTcSxcfBeSB6pTU1X1BrBgn",
  "key17": "2aTiG3RnDfoz9JanTDvFQLUot7zyUtg7jve6eVAxV7JQvGApJDnPaJabMSc5FWUEiRkebseyyPsQofnYa2psKqNu",
  "key18": "67XPJjhkXqnvYqMHpN2is4KQPWU5y7ze3MGKqRM8RWvo5krWwNzRMgE4CqCXZQMJe4SymDCZbp3HQ8XVY4xbg6hy",
  "key19": "5GAHnaxSYW8UK9Y31Ay29KeKnizGM6mRVfuefxxGRfNJ2VeisfKJrkxuqMkGFMXoxfRPZYdUwqtrNH9zrJtecEVo",
  "key20": "JtJmL2UqDeow3cVQyvs37QwoZG8ak7fiuVfQ8v8h87p2Hy9ujzufHH669rNLtmGkK4w1aB7QkBa8WuePfsp7reU",
  "key21": "4Zk7SkGTqw4Jk9cy1iA69LKYHDzMeprWWA4SGk3RYc9PSZ7zJmTetwaJGdY8SaRJ6pymrWMd3qQ9FiZvdmEzina2",
  "key22": "5CrcvZ3U6ubzwTMh7WiTHA7DcgSVHgiyod7ZULrgH5iP5ygQ2a5SnYoAsKPzk3T5wbHT3j49sg3XZYAuCKPn9Q1C",
  "key23": "2wBpha9uHPbB8Xx4xTnidCfs7EVPKfvxZ2ypHK2GM1BrjqiSdv5fCHsdFwmPtfzutRGnYJcxoViEyy7z3KneJnTD",
  "key24": "i9EmP63EDsz8U6zV3NxEVxHpyVC3s5ySTUCNupzUdvFKuCXSYVmhUq167idyuqEF9qhxrNu7H8yCmyDSaAG2HwT",
  "key25": "2PG6BTYXB8krTmyxNuLBwQEZAbNZuQSdU5RZJqCXy82UTr8m2Zv2Vt8N48NzsYWo9mWHkb7mnoW4hzGnPQbVrTFh",
  "key26": "5pFa7LHVfSHiQ753goJBjGZ2UpgEDzrARwx8JCHsXd6WznEDNYyiS5AJRQqtBziEj1L7C3ofjCkiG1xK3n3hYn5o",
  "key27": "4ETEoheeFwgdfYFcPX29MDaenE8C3CEHA8hYpjoD6R2JcmjhKyhAXivVVwx1qUFKc1qH7tW1oMnT2UAYBnFLVMth",
  "key28": "32mRnkDErRKA3mREoLEAdxSnGEJdz4CYWdQTrVmgA9AZvY5hhFLrdA5tV9VWYkZEFo9L5dcrG1C4hXpv5TRKackj",
  "key29": "3LvbajpvDRHqKCwKxdppVs9uKYkpMabS5Fz22zYPJFWcMs97MRJy4rqNn1ibkx5hXCkVBXE9k8zjnMx7itY9EZzj",
  "key30": "3ycJ2sPPUBcwNwzGMv2Mjqg7gu9F876hJmE545yEHqBtfdnLR2VgADUfpNCdtX5bAKVr5D7zEadkno8udp8VFZEj",
  "key31": "5yqLHSyD8goKAoPG1EFzfkbZqJJgKbME5WwHabXHfthMNBthm1F2xewdNuzfBLih7eoyPxB6fREj4qyDHppQpYfE",
  "key32": "x5QtfMhk2SeoP76b9ucMQKuacM9eM83ccBcH7MKrGAEZ7D6XznKS9bZZALJHP6Xs75Vqud8bjh6dffNTKsSbhBc",
  "key33": "2dxNfrphyyvWncDbWpGnUxJKfF6GdBzTvtd2WwhxQeHZpes4CJLtE8FjF7xpa3cuDNA6qReQ2fhpTReGSbhEc4TA",
  "key34": "ukcV1xpaKicDVaWzAYWyfbZGXGKSxaRmCsrqDsKgRqUgBtbFiEkRZQVwUkG5H773RpdDvEfBrwsud4GNVHVuAfY",
  "key35": "4vtcAa8KnGNxjXAbP2RDHReymX5oKrZcPVne68DZwEKJgHbw8QaU4QVXHtr5mBbEWRupZGj3DmSAuzXcFjbNuQEU",
  "key36": "5wN6pQLYC1nxWxKCA5NxEhxiKRnjw66w7avyLQ56kFr24E44MNMYDZsSAbHSYibRvuKLQavifcZDrX6UJLFwcfZt",
  "key37": "3vgAWusfCBpwkqHezpJDDqRCqpUWoYHinvoNM6zpYqmNQH7A4n2FJTz65VZ61LLrciR4dLt2wijLCCQyWYdSqhv6",
  "key38": "2zQQNM2uk595J4y3VangTkFnTR1UCabF4wWYJWDMP5dGiyqW8vXw2EHS337WtUQ6Sj7kBLEwn9b4wgaveTWx47Lp",
  "key39": "4rEY79XnxWtDyUZnDBhQzD4aVb4bjGJTpXs2ECkrgTCfJQQ3fVtVNWSaCEWsELeci1KoxmUQgg57CwtuSw38JWFQ",
  "key40": "4HDAjKpofWVEx6pGXcR3pNev98iah2sK22MbKABDsymYUrs68tMVfp18tWx7aUfd18jGS4P6jJAn8MgFGYZQoWEE",
  "key41": "233SPXiZ9KNo4Ewp28DXWjkmrAE4jLUgfhAh5M5EoHN4WBT855xNV3LMRDschewR8iRmjKsb9bHbVB2vzi2rPtud",
  "key42": "5GtoJ4GD3W4NHw4Nn9cp5n5kvvdf4m71eCbKd6uEMZuvEXQCxqRma6BtFvuPaGjg3VPjqQ3WNGkxLkMCVR3uiW2U",
  "key43": "39vyiNyizKCcevCUnfLmWqK54o2evJhgafsvJf3N6W3XTKWxetpGzRURnPoKR6injLj3kMy7Kwtia3ZSakV32eNf",
  "key44": "2XHyitCurebQGaYRctN4sZ95N1kpXg9Sboo6ryEypeqtkd6N2jo6pyDFeBqdNEgdZEdrNUBu9Ap8ZYH6sXPZUgLX"
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
