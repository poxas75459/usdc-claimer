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
    "5bAQT64jfGS1aXT4wx7Y1AY8UzMsnUi2YL7yBdKCfeUbSb2k2r4u7dBGvBaJj3xuDPMa4ianux6NxuwQzgx7Y27s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UpSYPr565FBka987Jpxq2LWyu5TTEznp96QgxiKABfcmqwLFPF35biLnf91J2Y5z5e79nwmCYc44nok9f78YgXo",
  "key1": "38ZbDF1wZK2E8kjWdDnCDn9LVmZ9qNvXvfsUtEvN4tBHWT3KWDUhFYqoMCRSrKVYr1ozRqZmVesqhMU1bNqnEWaH",
  "key2": "41Y9pWCuG94o5K6ixmSVSZeqJQFo1Yysq32YoA8vQnGAjNen3tVZjVVrCW7LqzMYwQ9wKfSZ7ncFUdcMPhiDdaJY",
  "key3": "2HKcEpqGYjjHnCrJPUpCV53JoGpucxnwXCMGoJBPYyPb7gvqHc6TKeJwJqMKiGF65NXGeLfDAvY6HHWtqPn7L8E9",
  "key4": "2bbyuY1YCZoxFjbwr3KVb64ZQgVLaGfjZhggDR8y4v6GZbxgwQghg4NTUnndtYZWKH4zyMhxdtYCfBk4tWt2QapR",
  "key5": "ATh1UyfAkdaPLJuVQhr9p93m91E5frzE1nRufkjfazJ4jsHuuJAmCJVGn9auHTUvdmUKvAQJhmsSChgJt12v7ch",
  "key6": "4Aersfg58L6HvtrSdcLZ8DjjXY4Juc5Zqn9R5cRDcBx3hB76XXioSUJN9kqqvGNQw5xbtq69jWQoaetyypmyCppH",
  "key7": "NeiX8X9UBJ2VFpj1gscjcRzGF9apYP8G5wEUY9Re5LTQn7VM1J7KAm1QDtj6VTGSBTmfNMEqLdBUatpMSjcKDJp",
  "key8": "2Tycjahc2YTPx7b16WZuVSCriLR3THxgKv2LdZ8CgLdaxXEzFR2yxTj6LT7JfWSpiXbkGTcPYqYsHFweJQjqryMu",
  "key9": "4dp1Luq8MdAJrXjcAvTwdUVGt3x5g3hRcS85Jn6cK8vc2DGioggxVRpfvr6n2KhqFGzbqYqMi8Yapkh8dQPLdZXw",
  "key10": "3FS4kE3KWBDCjSkxxM1b7k4BPAKTGYyhu1SZM1b8cP39VbWRruQScHN2ypHHfKn3hC26eL3QuRHRng6CtL3fD392",
  "key11": "VHxQT3eYEQkrWZSy67m8G3h8Dwgy77oFMb8EeXNzPzYcsfYaUCyKLEDfrL1Pgrt4pYq3aZceWNUPuJHd2H293sL",
  "key12": "36EJjG72LkreKVMSnv8BmNSsiaZsms1eEKyujYLtkWGXA4Wz7DmFh16qQoqaHgzZkKqJMmNX1Er3QKHETGPUpucg",
  "key13": "2rc3uUU72zJnPdaXhJnjt3adgsrJQL31eQ2KrsDwnHF7xZ5MGjc42zvLSyqRWUa66kT21nCWPuHuJkk5mWZkJk2e",
  "key14": "5TAnVVVCmjFn6d2WqrNqCNBRtEtdtajViwhU54VX36q295ufFjqctT8DmUZK65o8JqgdyxzMQz66GQFYGMNuTFsd",
  "key15": "28Tcjg3dBXzUs1pR2fo5uWm54KUw6BivPjPdKPRhUdbDjmjMCG11Sy1Rw6TW3uLoksPqc6sHjiTxzMULtpbgMfLm",
  "key16": "5DwM48PFizWzAecXXJdeyaKbgQvT5kpS6sChBuDb5LTVruwf1D8wCyqEo27FdvT7wN6MFzGA8TL52PTC4pKVbVex",
  "key17": "dVtkhmhJehimUMHt51rS143mGjMY8Lt5k4ZvWg7wmTqaqiHPV38rSApsS9NXGzpicseVUQp3XsUwjcH4cq3SRRN",
  "key18": "5MQJC1SdrXzGHNxUPeuM6KegVTgadKu6cSg1V5a636vFqL9YwP1nJG5nYF95yKTicGTnhG8sCzqVANCjdrmpxyYG",
  "key19": "5Q5NEL6wbcNif84fQXNdtMtm4P4GbbBG6bZG3b2xArqQFQgNAy4MxaGUYRFW92ZzAoh9mprZaRzAaYgAcN34Gwkf",
  "key20": "fUkp5zxDbZyTofdMBV3VVmRPSfuxL5k3QSHaiLN3YbKM4tJSEHwudW3yWNQfj1RyGkJE78PkwudC3K4YDtyPPGE",
  "key21": "4QHN2r61a9ZenfKVe9EB3wrY6JdJzM7C6NXVFPNdEhJRdSF939sh5tUrWm26Ehzz3xNkzoB8hSagefmX84184xSS",
  "key22": "5iEruZwEwicPV7hWWLf354PcX7tAZc32dpF6N51mqRciJ9X1p2JvpBEeGJMpo2pt9ibC9TnZu8L4u4NzcXJgmtq2",
  "key23": "4ndSkL6asyhs3tayGTCLqkTyhn7Y261TdBrWDnoehvigWDtNZh4DWskD9MxvTAQfcso98SRKweLTVjaRpsme7y4C",
  "key24": "4er1QgyNu9mtzNQqBTVv9f9XmzcTeBx3SBbGWV4MVaWVeAruJb2Ej2SuAUDdXpwrtGkhTdHavJy66woQXv2GxUfG",
  "key25": "2t6yxFRUiawVZSWuRuwgTXNnUHBXoGmvJfodokBFAF4VoUAhRWfPxam7VuA3gfeUMtZt1nUYiw33dibzm3uL4zJE",
  "key26": "3zMc5i9YWmt3MATpjwXvdLCixcGYuTdDHfPEeiEvxC3ZZXyRn2CKYjaBdsyosTxRT9GJ2rBTbcxG6szSMz1BKYD8",
  "key27": "5HfJpMb3GTLUMyK5HTqt8Yb8AKJkXirwjjdJ1mExLfD3DydsHTUwmJsUnYNNKWsWmvjtxaZRBtfzShSie6LykjzZ",
  "key28": "2JL4BABPqemB2fADL1hsHdWQDeaAf7gD3ipDWLDfxEumDfMX6FgZC1E9bBwLUDW8Po1a4mNzxsx2fnzafR9fDAhe",
  "key29": "5j2cBt3AH5A6woA37F58BvDmbgi81p7qv48yEyD8EJmUPfoxXkSr6AG7wXjP3Dd35WZSyeJtNPDNDACyz7LK48cX",
  "key30": "5NrtyZfWfBjQTzWyyBr3EqPYqtZZMiVgu2T2yrsLDbHEifmv885cz7nfWZoxWwXNeMDfbTayqf8ZrY4e2edJu5LY",
  "key31": "4tVxoJHHUT9NnFRj49PUMe7KiyG47FKxEooLRNFv292HYyjuzS5qgMNifmybwwhU26PjNjGCry8np2aiiYsqhyaf",
  "key32": "4fcLbnsjtofJHcDryC9x4hJQEyzwBexuvUEoFgzzEBnfKP2hiCraB7u9fFSkgwq9VS8hManacU5behLNkiLrZuzh"
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
