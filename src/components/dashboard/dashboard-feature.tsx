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
    "2UuTuL9G6XRbX28PyCsm4iLpbvp96akjji9CjZBEMgr7cVN6LhJfPALJVRymWw7pKd6KR1zoiNeW6UotbPjnRcyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G1CbCvPitQEFBTDoFdV9j12PYQe9YHFU9RF1UnhoWkpYqnGzNrKxeF5tLNMSAqo19aSFj6PLbXRvwFTjKdiM25A",
  "key1": "ZaQT1UKgDLPyeZ47U6wErQgYiECoa7kFfCAR6nBp4r7NPPz51sApJqg6dnxgNaKndWvvxEMxeyaBvN1MfNfR3gX",
  "key2": "zevLqshaUbN2TwjZf8ehBXBFhKDG4vecfDnbXR3cA2RYmcss8o39x97PseL8ramCyHGfq8g1qUatCnDYRzy4Kq9",
  "key3": "2Ve3sj1Ft7M7QGAot2Zo8U8gPu4XFWZTqo9rtKJdRbb2pUSpiyX7QkffYrR5JGcpeaKvejfWRxU3wp7hAJd1RdMV",
  "key4": "2KunsPR8eToUSx9gAaxZPJhfKLWur9s9PMELFmYY4gMwj3K6R95iucjR4LKr761eXdXFEUxoNd1rhUN7PbJkbMaq",
  "key5": "4Vo3TpcHu33FAgcZvEkBehdKRyLoMBFQ4EcG2XJC3imjspMeLoCJB8yH8vshWBqa7nsy9oiojAaXqTRVrVKcAbmt",
  "key6": "4J6VJ7Z8FvFVyvdU32BCPSZ7aAgY6UTiMKhyC5289w8bDUJ7eaDUtUMfonzqSCQwjoLsWmpjuAMhcXaLF32xt1BW",
  "key7": "3mHfePaDzu2VGBkfmnkqSteMBsfDF8taNk4P5NszToqGw5yx6ByLcE6prYLw8nJN1g5ZgywbLE72ZLDucogCVKb6",
  "key8": "5KcVYaVueL6vQ9YHj7AFLxAog2yytJtvubrpjhj2mKCFTtaTyE9iBUGvbeFJuTH5kRuwB5WN1wdX1RFE9LETLJm5",
  "key9": "2dCc2FyMKfmRJYvg3cAYkjpbABS83DLQMVtQmNnBf6JmTDaN4xL5LBBhsJftTzBPQffEypibLdyRCSyBXaJKSiU5",
  "key10": "tAaQywax8JZXXqBuAWGTSQkMuDrEnDJHQSYDvPF7T4HgjZApN8ao9vzfnEagANrvjDYt8gC4JUwudMs7fYdaJ3M",
  "key11": "61oKWcBHZZV72jwjeocg4oQbgVPy9bWDdX7AT4hmxqwmWyfDKLwhZVit7E7a2ZU7wBKeNxyESSYiATkTfTK9dUeY",
  "key12": "59taRPjnMUFbKgMN675Aqxny4oTEMcNmhU9JBEDS4i9fzaiKULJLvpSdpdnSd3jqUgkbVTn13V636LPhXFmYjXBA",
  "key13": "BH9fEfVjhnn2skYe25QCdyKddk8WhP7jDwQ91nG3aqc2XCjERBgJsdojJQzhHnip4yidxmW4BeunGUW93C2Lsdh",
  "key14": "2AYR4u8Ho1RvjmHJf49qQTw972jUim6ngJD8oqzsL1J8T1HmeDdDCY1NxUrF5tLoa6B3WJryojbxwtfSRp41J4ev",
  "key15": "2w2j1ibzqBJ3yumynNBXKhacvLwqzTKX3FHraV71gEKcFia9yaVenB5ieqp3ehkpa2Xh1vZy7YFUfBHUeemMmY5b",
  "key16": "4jhNViv1XvBBirC9SiS3fp5tYz1Mca5CNDGTL3oPWAH3xD7PG9vH6ntNz32dYxZyBgtXcibRw584y2X12Ffni1Zz",
  "key17": "3XPnKvYpNecbVRAQv3wvGRNMQhEtCRTMXT2hKF5bC2GWD1wmx1G54qxrUPwJ1QUN5Pr4rffjYW9bd5Ygowdf6JFs",
  "key18": "4fDT3oLFYKdrZDNwUbUyrbF9ob1NDMbMo2fZBid9iZbY6qiSwWAhUngCXGXA3VQxF18eGDKupRJ5ktNEAyh7MW5s",
  "key19": "2yTwEzNb5185eK5Wj2DQbTbFDHgUZhSgzHPwkgDdSYD1tV2q4BNfvCVNmgrJ9WNRJUq2cgvPJ4phmWrfvQ3uiKue",
  "key20": "4LBqJuTYRRwqUhAoKH7r8e7jegtk22zpspTZiT4PQSGqauxKcPHHBGtYiejGYosKGmxEcJr4vyYJDJoTD5hQr6Ev",
  "key21": "5ETVsDQAcw2BETis5ZQeWpMwzjR8eTmykfz9xXX1D1NecH4KgyDqrmbyJxkaFS1V7sN7T9H1CnivSyy8JNbfKtLi",
  "key22": "5orfvmvEgZC1uUnsLVSPzoVWgcN5SXMCJ59dcZExT3VZt2uK3bJpjYsxBQJvRTVhjsjUsunGYwYWUmiKq3QHoGVo",
  "key23": "5LEffHDP4BqqNDNWcPjCj3KsKrDk1XuSGnT79KkYyXYfxkJkxAoizm5tEZad59UvcHnMyUvMYSxZ77CMEMiC4FSg",
  "key24": "5TvpRJuoD9XQrkVSFXcLagpVUtnk6nEkErWtwaCze15EhFgw2hNFfUhyqd79DY4AiMVhxgzxoZ7HRixeuRxUMRca"
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
