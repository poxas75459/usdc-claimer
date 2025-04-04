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
    "2KGA5HLzyB4G1xLbNihBN7GFVae3pREewEGgmzTb8E5fUAUwM4wCLWfrFjeqxJfyLG9i4xcsRvaQiwLtEWn4F4y3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o9yeXz3ztKvzxKdVfvwfpDVMXMuLp4xi3wLFB8uuBiUDD1e7dZBK1fUmVhPrviM4NdGAMbWo5Ugi2gkHJksAf3h",
  "key1": "4K1HepJp5Uq1FqAbNgBCbh1Z2CAce9WyCXkda8DqnV2mZuQUKb88XtsceXv3ha7gukmBTJkUBkgx5dLGG2uoBH5Z",
  "key2": "3f2wAXF9u6ZSoKR8fL7HMhVtaybQYtkMHAMnK8HBhzfoeyGYvtoEiy6Qc3M4SWfmPEet2RFzc8y1ndWaV3A2etwJ",
  "key3": "2NVphNPgHnjFW1e8Cdc8DxG5VZ3VWUv5XVWk3bjxg6KizGoMiXfRxZ3KKibciuoKpZ1wcdgo8oFTrHZ5k6EfB5tQ",
  "key4": "61rEjG9oS7rbu7osb37FCHjsKTfCsbdeU5sM2BhGuLz6ahZkPVURZU5LSoW1iLHFJzE59avmL6jYPf1wmd8xSRAF",
  "key5": "56KPLXccjdjo2iHvjTewF2r9UtjdTYB1M8AZ7WFh5x742yz2zrffbmzMEupWsHapEUas87HHbK1BPoREeuqazB2M",
  "key6": "5TW7oM6zask1SELgLUg1bGXDm1agTj4wN8cquP7RXAyVdRDR1KaAN2j4WERENQUrVdhMKCudJoRZa8GcugVtPa6A",
  "key7": "4JxQGxKeTbbLe3H2JHN4APU7vnFmwZChvZU6GkJ9exPCa7n4pgQFByaK2uFq4T8YZCTEt6JeKMVsBUzHrZU3XFZn",
  "key8": "4cUJshKjkcKGgVfwf2GhVS8dJzV7H5PggKUyfBPxrDrQSBNz9DirFQBkBB7MXpFsYtcVXio1gWmmeHk7dTMH8KdJ",
  "key9": "2dDWz4rCXinZqnWWQTfdfNdciJvwFcxBUQhuqN6TpPgCimfQ152pyEtiEyP8GAmQ4fK63rDiZ5vkYe8acAKELjEQ",
  "key10": "2otWNsAZYubAvQ1Pc6vPBW6JRtqRVXF2ARDruR6oHMi3hoUWGXYRXEr7ibyaiyDFAq7UhF1PhMHjDNhce2gnGvsW",
  "key11": "27suHpskucVF6Bpisj7v5jN1A9sU9ASxKUHBLDUvBQkdHgx3YNvYSB6ieoNsAd147JccDEKD2LDRMwJdEvhTvJJA",
  "key12": "QWpqLuL7kKTGb3FBFnMLUcgW6ERebhvLvExUekM7bvtJhZhfsBQLABrqPR6RkXgLoio6py79GkyEXqs2BqLmmEn",
  "key13": "4VRX9HrZffuNa72qTJ86MXV853ycm9FsWwz5wKdVLFFpcxvyuXSEUPpj6e9m4S2xVg8jhqW6kDRkn3JnkR1fcg1n",
  "key14": "3ehKpg457jhBQgQew89sCzMNWaE6b5qveHStTP5EFQeFB6k9CStpUw97WhqM3zdUdsj7gCuS97rhQrsPJcQkEvug",
  "key15": "4Tt5gUs4JbFdtjeJnDrkoduPL5uu7BDY7pSFEvc5tk2DTUTjT3FkcP24qWk27aEt3ow8xU3fbb6xtsxppSgsNkyq",
  "key16": "3GfwUUiypShU4NHQ1FwT6EjfsfUUhV1kf8KbsB8975o7qQrd8CXv373n5UJPwre2HTRmfn7wMkQRtzc1BdCjhVFx",
  "key17": "hEyrYgJXbBnfcZkVRUCwcvyUSh7EVzeLtn32b9dQAuwo8RE56rjFJ1N9gVukm4sdR1CQRne4i6ZoRBJkAvzFht2",
  "key18": "5tt2zNG7KBnaPSEEtp8uRmjYsTU71TBFMQH3tgxXY52ZLcp4S7KYCjfJBB1YbVieyw3SjuwtjssiFtWypubtK2gb",
  "key19": "4bWyE6jLHYGfsUfKvhbq3JAD57DcarwfPaaRnRz157zsMxL2fwDppn1ZMNYA2YApaP98NK2QdfdB9LYN3TfJ8k7s",
  "key20": "39wf4urkWQ57kqUytNFx3DaigVEn4PZSV51YSczWqvA16BrDpYcRRnkEoeReX2L3VjocWtykNfxf6pVFwC4RcrpY",
  "key21": "4LQTbHkTJpX223L2sHJKqmbQXR3J38R7b69qmrwBGLjx1Uj4h28qmnM1ohncg8z5TLvK7xJNCdDRvfF2U7U2S6sd",
  "key22": "3F9hcGyYVgxP52f8qsrMmg1CNFGYjSK16nAtTUzGozy4cVx8Vwwh657NzjPK5yRvzhtJBYbHvKMHCK6RFH5TBpUE",
  "key23": "2vMc1Cjv8197bSF3qjTDCTiFUWJhgvKFMWE6owSGApcm9qDs3LsgAegn9PjVT16e3Aep5a65xfU2wr5fNoW8zQUY",
  "key24": "2QcZ2jFaLKr7sGidmv1CLhKYgbvQJnnKUPDgsa7jKaYZSEjLVLMNVyRocw1X1GH9ML4Kc4QyE2MbLjq5YwevSCj5",
  "key25": "5v6tkAA3jqBVEhigftPH3MRFh3uNcpiYLeEdZFizV6Qyxacmv5cpjtB7N9x5Rv5rkWoKhKeyaqd3oX6uA5XT37U3",
  "key26": "2tdjDVa7D2wBegbsv7UuWF7G36wT9cQABMQv4Wbyzh3LNzP5iUS7RwidAEzQ6SfmM6V1tLGwLGZ3vFp1uxS6j1vG",
  "key27": "3W8RVqAz188hhabsRNnHzdLXF8VVAWMMqiXSXGrGnoCCfXYRBdf6NoRGJLUxqfKGq4qb62cQa6McLzyYWibqBfFU",
  "key28": "3BpDg2MRgDcNXZeVgXEqSU2nakXTb5gkUN7nc5LsQFdbfB17LB7PfYR3Bj8oQrXw9ch8MvEBhYGV6uBtFCSP6ghA",
  "key29": "4Z9gbs8rSXhAw7c3jEwQPipKNwnaq7HK8usftGrsm47k9JZKLgqmDyDj6BfFJAVA6DcpMMMbPp7vmVxPBjEAnCqF"
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
