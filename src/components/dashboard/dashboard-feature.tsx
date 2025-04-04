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
    "3uKMtCmMFiwfLXTUhVDbh8DweYwdYhYqtU8gv2U158Tj5bLYommwdJt1LXZTcfg6PRepbTitdXUwimc7R3v9Yrwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GNxAF4zmeUEuoDN9uQWZq5Reug27jGiBKYiGKVXTrCjvi3K8rXt7N3YxHqKfiMsicZ82EJUH86T2Wy97qjit7zY",
  "key1": "5NNJEVbuWYcVUEEAyTKHbs4qmggzDKpn3T1vGaKoYTiWEtVF8cund2Hne7BgVdMcfp13YsBSu1sGv6bp7s83i8MQ",
  "key2": "4T6WnUHDpRWimFgvMrRdLhAeP8YGVwSpa7DUdBjDbidCnLE1KoqKZYKyu4ctFc3qg3HwjS3gxUVsGiYdjnJi75vA",
  "key3": "33HHhfFk8mb6frrDJQAEGSX74RwD9rTaQMAokNFVKPXr2rjXmJxiQFQ59dttanBqu2xfsrjhAfMBNdhHmWKNuGNp",
  "key4": "2mNBH4WQgqwjwUKzbiKmrJVWrGW4HbkcyKHdHNDGmSbQ3ZThzJvwFAk3nxBZXXq2oHs2SivsvtvUsE7R95MGtrPo",
  "key5": "4BqMmTnN6eTpEMZf39PU4Avbx6X7WqrKMaApy45NNRk5ALt26Zhnqix1fvYx72rzgD6Ki4KxWYi9KmfNh6Lzopag",
  "key6": "4eeKnp4EH473gkPQkMKTN7gYgSFh34TrXNPYhsgqektFchJJSHn2Uk3RxsK4wHvBNkntPQo1HpX6y3Ez1Mxix8XG",
  "key7": "27Z8U2pKdugrPDqkdctcMyd5dExyWhbKjyRCBgXaK3XUixvvxrY9MvBzGBqnQrLdHpV4qH2x7RH6enJJ7vrzYCRp",
  "key8": "5hhGxk2DKwZw3wP5RYcRW2W9qbkwBgHnB6bi7BsCdwmrDooRHSJmYft2jtYcNCkdTn6fRuFw9487hRKcZFEPBVmq",
  "key9": "42XZmgqJgtnw2GsWUX6xDtY4jvxNppGthVFHgRT9Vnq9xJEPwaYiywqhZdESKgVBEcF4AW7SmpwZjqcKoaACMK1d",
  "key10": "5WutfzFwAWDzRbJ3TdAvKCThh8RbhJfjH6x8nW3unkqpJWJgYiM2V1Cve4RMEH5hWPgqNBsquGPMxat2wKUgs4MY",
  "key11": "CXzoM5cNj5JGNeNRiMPRkx5QQMN16oxjCzwGeSAtcJLr4KmAAJKxaSScrxafSqBe73rCeF6dA9kj4bUMQ2L62V3",
  "key12": "47d6Nei4kaPKpREVd8P9Bkp77opynLdyoDCcmKcWqs4gLAidEVYuXpLnYK2WADLSQqtXFwZ5683zg1k355deCQAj",
  "key13": "3Tk4kSpSNqvMsypiv8BAkWxaey77hqbfGD6m7oHHw3zmLkvGarkac5TRhrtNHNWh2bTJ2uB3j4pQQr3QYPpWLJXD",
  "key14": "2dM3gwFvjxicXXX7ZALg6sWdRkJA6rxwfCXcQGdHio81M6GMi7dtZ1gN91bpEkx4Bj5yj6jy6TjYP3Qqm4aB9BcJ",
  "key15": "4t82fbmR5q6NyEXXne8yFs3AWMpg5eKG3tTJxUoeuTfNgRPXogy3eS2MuomDVW6H9ziCYK6gnG3P5LECvwabPDBb",
  "key16": "2PW4eDX1KQ54kXWuzTxd6o4MkDvYDt1QtYBg2Wyv4NM16W4jJkbkavk2bDM8iHDfYsu6W2NsCP2WmHxQFWN8XY3t",
  "key17": "5YNpEYrMiJ3nx8VeCxQYp6cHQUPJg1mfNiB5eiPRVkPBuk1YSL2V12ZR5M31Nsq9EwLg9Vimbi5rJKbDo67amzMr",
  "key18": "2sEp6xCAV1JpGDbk54EFTS1oke5Y6BhJ5rSLTP72CBVMAKivyLtGio2onzWDMicVtsgg1n9xsAHMyUD3G3f2p92E",
  "key19": "4AzN1UNwtYg8uH3f2epWkTJShREnzaytXgqoPmLvhCfdwfALR4ZgAsjrb9s45AXVrYhcjiuYpTusc7AXcsoshdg4",
  "key20": "4ZFxytfUfLHxkEpgNoh4XRyyCQ7wmMAKNukm8iF23ngmeaLntU59CJeV6aLxqyPVwXbQ4vYv7FLFYWSt84Etpa2c",
  "key21": "2UffQYgg7Mtydep32rYaL6Y8i2EEkvy84vQJUxKZzvH4NgmnGkaxzQ2hC9Wp2ngp6X6tkLvPwM83Umm3ogYkfKS5",
  "key22": "sJ7DZdYiv7eAsDjUWpoPDMB8BP8oNN46t1sXffqv5gMwGQqnacNRZjHoLNMcepnDuCPpk5FuC6DUPSLbKR7BEh1",
  "key23": "3oKcQqjr8zj5xRh3yidZAp5QRp3udpCUNHzcFcSvTR8hYtP1rZRgUFjadoPhXdm2HGY8BU21mxfiWHTKHimFnwuX",
  "key24": "58UFvKUDzwkPP3jp8NSdfHJxqXqYYs926dJpdfMM4KvU2h2Dp2yY2N4mfVs75J5kRGjyaPik3o1rVCTUuctk44xF",
  "key25": "4nvLP2RN5kZmpNNeKETuuom9WCg1rJ6Dd65wez9uUWe7C9iue3VUvLPNSqo4d1unig5qAbWjYwjkzsJwzvfYXE3s",
  "key26": "56mvdVW5Wdb3sq86ez5HrQ38mFuLBgupmGQrRQUZMVrByBvJp9LB8CQeCziXmpryedHgndoM2U464AATyo4nG5AG",
  "key27": "4EiPvqmVN2Ugup2j8A3kBUcAvKZKbwoZ1tbiXUyyVmxxRrdssZxNWJzsUsRo2omhgQDV2sAbV9K81LomEd9gJRUK",
  "key28": "5nA7nPQjMrpxaSWfN2hkXn7JAm2BjT8fsmzRJtv22ekTQeW76yZzLcAfHkHqtydsr8AZ5xXfw6TceQwM3dVvq2xx",
  "key29": "gcoztVdkTX8TNGAW9Q4qW5siKE54RdMFPpjNXurP3aU5MKbPjCLJeduAZacPtxPH9m84L49dwbm4ua4m7Y3PYC9",
  "key30": "3cqzsfwDgADX7Em758UX9LfVJqNMyX5AngN7VjoytacRYyBpP1gTNLyWzt2vkfQUjAZ5UTpaV3upPUKJSJcSc3Sy"
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
