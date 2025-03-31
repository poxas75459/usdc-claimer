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
    "pRrwxCqUTUsGauJr6RqEhxamV4N9w7KFTQqf3jDMLWnZjHoCqWZDiQjGmp4rexr9yR9Jmk8fe8dViWLvm5zPB9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ztCZ17cVz7gNEjspqMYqfgdEAY4en9hWq2sU4MafnVpzdNc9bfrp9Aj8nYTaEmdNuDkRcoDsUwKKpEGeD88hpV7",
  "key1": "4PFB5d1jAt1bYaygp3LVUUUAGiKicgSBkbgwDNDcnrLcu1HvHgKxKAkcbtaVVwfY8Vbix8e4dTPowDz3UiXSwcya",
  "key2": "4gK3ccgwwJMo5D6j4VUmqHtjARYHpkcGQNYPTVYep6Lb8mRAikcr6PWuubeak9DqA1oAPzJchYRVBLKLEvaYCTmu",
  "key3": "yMAVeNWVKhFoz1nU2oZtebUMjgZTBa7kBn2dKBn5q6Q3oxkvfa7mjrTr2X6FAysTT3nW8UkQccEBhcrTje9nvjb",
  "key4": "4cN9rnx6K5sALJwUD7733FqoaDH7643U2d5VvFNr58w3wG333QLvMMSe92pKCCuyxUeATVBWS3a7znGYKebb7osp",
  "key5": "2NeGfZhG516xbLY5BXByAXNM5Nebnonoj62goVB4ddNVNZjDnt9nKzGmUtSVpq5iiSa54vrJWvjeWBgzJPhbiPC4",
  "key6": "xoJPVTTwaF3feWmNVMVfv1h5o2WGjcYe4UgsXx4zpjWgYHWvTNp41gKRAoRLBNLBs6HkB7ihSorWdfY6ChaAHaD",
  "key7": "etq6diSnuDmkzuBMKs4H6HG185R2EHHFf74WnRb6wrwLkxDteSMPgPRwPRFJ9KT2yQ3Vhj3mwV9AwQ4hRT94jLV",
  "key8": "42AAwuUGJonK7BRMhvMK673g9BaJT6fzD9PHaNMbbqW7S8kmznV3vDe7n6ShMRhfJTNVjnk2v3uXqiUdoZmTmNnH",
  "key9": "4VBCRyWvLEKveb7rB9i2pW2gA57XoN4vJxQenadHzQfMy5zqWo29wgy2MhXagBuC5S5vtxRrYZJ97z24ufbwRwEc",
  "key10": "3sgaZubKbCBrqiTjkd59FABJekc3kaqpEvj1ewX7F8GCsa3vFSnqY1WE3zbnUmtaW3bryzZnXhrTxUBr95YKkM5u",
  "key11": "5hcdJZQphumkcFieBtmXtu4Mx7AXbTmEaSPE9Uh5JBnPH87MAwhosWzMAixKaaJEMVLNhQ5Nm6nAz3mbKvePbZ53",
  "key12": "4H9dpBjA76G9rpUyHnDT842LrSmjVUPvMyAphXM9BoSj3HqpoxuPDpJTbFnYgr5VL91a3MYZMGQg66oaTVgLKBvf",
  "key13": "3UqRhd45EiNQzi2vi2xHKAVtiKzv8FTw3rbqBQJZ98kEBAM3qXe5kYBKJAbjKXzUmVsHskWPUnxkzhRSzyjiU5pt",
  "key14": "2eEZbymm7pEFz8zfVjpfUfvpnZqAjkU6ddNRNWeKR3TPSJzPLS43AAQVDrsBgB1b5QL2H3aK3N51YwmHNYZywiF7",
  "key15": "3hpmEWcMFZAmh45gcRQwmuJeRCVWc2c2p7jpy6SEwyTARy9DP5Js3Ye1sDLuHstzvUpXB92uRAdHBcGRxPUq31AD",
  "key16": "BC7qSJwntxP87VURiZWGd2SzsydSEqrRrA7RtghqQnTwYWcbfnKTwpvKHyKgyi4mxGvetjjRJypKSU2x4MyUecK",
  "key17": "4fvAwUW6Kve5BKrTnsEj3gYE2F1ppiYu9ErFo3BzcxBR2J1KQ2xfbFuDGkML8bthzo25bj8DYe5S8xLzRyZt2dr4",
  "key18": "5iVivTgzvZq1okskocnC4ePxxCUteVF4MdPrpU28yXCu3Mn5FhPBmv5sdZsWcHVzU61jWj6AF9gFgaT5MZnuBKCb",
  "key19": "3josFSozQVk3YgeciFmDpwtrEW6if6LtYXLE9vzy8tcxPL8LpwJddfJqWHwMwZmb2KWbVGYmskNk2kCuA6rG464K",
  "key20": "2dN9Dcayb1jBYnAz7E4MfA6ifYBBvKncrVvyzZ5ZbpyEVCdo57mkeftyAQj9kuRjZNMLdvHiqNtrV5hPLXNjgQZ4",
  "key21": "5w5EwxkNdrngEBHPJ7aPSTMHKM4fPj5qH382Df9E8fAJzKwJSLFknZMnCgTDUzNy3Sm4ok7816TmRXYDgU3HjaSw",
  "key22": "3wDdnnVGfEeHyQxQjNhzzRtbryj1QXLonoeMJBhj759U4zNQpRaWC3Va22gppuCKNXQQJaf58UvEzctexXkr4x3V",
  "key23": "48Yriziwi947WN6zV959x2juqb3JgJ4uY6U6Qog5Q3S2NkvCqmCBMYMACvQBjqEiDTe5qRdnW5Za8Rt7CDTCNaAx",
  "key24": "2BjKvfHBUybLXJBQ1cFxoGeqUP7grmVEwSd4p7Dg22PM4G5ga9UieuV7kDsouRUzrr2sHzSamEBUCeksW98Tgxuf",
  "key25": "4kik9JvbEBnfZpDGQrQBdQsfV6CUxZHev6BmKz5njGejsDC58xJMhb2NZAA5mV2jPWJfmJFnxeEkieeAMCWeUdv4",
  "key26": "2dqvriDerzJZgedc4HjVTtd5dydFCQPJaE5DqHqVFYTk2zoicPJ5XSPLBSGUxgXUP2sL3KSjkqMwXxkdhrXgrTAu"
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
