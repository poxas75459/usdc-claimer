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
    "Mja6y23qMyUHg7b6JNfNo6j2GdWg4qk9AbpuYfQNB2ecFCQYRZQk82ALcKBx7bA8XN4Ma86N6XfyHUDodCYbtiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5py3dSCmXGK2n7t9xcBCdFiRmXPro33W8toa6LD2qBbsCCyimuRJ173ynEesJZCL7Ng8pP8eiQ1vLg2a9UKoxJp5",
  "key1": "3GqH5rmtmAcN2gVrYDGrADb2Tr7VzQ2kY3LyoA7N13hrYoxLJFNf4ycE2LrvE1YTP4E6iCWFn25aNXRhyR3WxL4g",
  "key2": "5UXt1U1BhJKr8LkcxoU5rqgKgnbqu4SZ1dJyUGZXq2fEfs47bNMkXzqmzZnttWVykHK9vE2u8jKmrnwagbFaF1NB",
  "key3": "4YCCYR3YXTukKVunU2Yv3xtkcG24mEhW8J54Eq1arJULQghcoRcJF3kcb3Evxt5kpFfPjvMc4NXeRRzfpsHiwmPt",
  "key4": "3XNauyKCtchkdFGe7DtTbci7C3twGfQiEbjEyvP78H8ueGGVMQzN6YehDnzsNRFdLqxRpHuyXUihDuuzDCPrSt3n",
  "key5": "5kmPYKxAMw71k15GLpXT215D8SpCt2Tej5DN4g7ZhrPu2EVARm8GqN8j8Ay37goLdZtWo65rMAppGXNrGWYwkpfs",
  "key6": "43u8QF92SWXGr5Zgoi9FxxbY7Fhkb9AwXABxtXMabKgZb8ecqmiqX4Hmu2521uyfTnEACReFbym1Bvcv5j9PCsTR",
  "key7": "9HFHiq8CsFwPiqTCShxUXcKdsPbbAriFVxeatfDpuacPTPS3FizNq1MkXQfcDkuuWpxhacMYTZP9cwkahmU73aj",
  "key8": "4QfV2tF1dgNfteHieyZVWWea9xnLgrkbgb31fJ1wkJu9mhFK6oNQqM5ebykPCzjvDyHNoHAh6HDfHMHrouhHLkFw",
  "key9": "5BkppZHCFU97uzAPNAMdP5aFBFpo5v5Bw7vnYjSbx3wCcotH7dqXJWuoMRsedpSf1udNB9JqJzWWP5uhX2VMR4nY",
  "key10": "43u4X6Eka8KLDbyRJnaDAxNGbaVT2ZAPtrSuDXqHLXL5YdpgKhYWXUjoBSRBffpuRkMBkkQSQw2WXMsMJjtwtxqq",
  "key11": "52tsHUUpYkfYpuWCzWWpgMMyJb9Uz6crJNxSYEJ8ZNHzxqoVyYnBwr7U85bs1j2s4vsMwotCiP5UpQa954PjATN5",
  "key12": "4Mb7enpMTHSbDGXgt9Y35QwDugM2gZbTXoHuDkpUEMWe8qeURRSWPDeGAgRLb62dqoVg2zuigsFYMobrFpLNoQHa",
  "key13": "55Lfwy37GBFEncLanTjQpQWYtCdSskWnBshKRVinr8SrSKXHrHKHFm7JC5tfBdqtYHKUajjuLXqSY5tgZU9RGypX",
  "key14": "2R3WDwFA8ycEwqqmbmL8etBsmrTbm3uknKAe9RWx6QRqDLwyzmg4359Zp9TqsNyktS5GAzzCPTjpPSLLaJgKFrQa",
  "key15": "3crSSN4u3Gy3KUaWXJqDhcsjAbT5BcLpbWDZwq9Yf39owcVmUmjUFzADodXhVCrC3C5YSJGXq1vBTo1mVekpyn8J",
  "key16": "2HPfXjVxxxQnQYMiRLnwuMxGHPYKuwEdwWfTrKDYSrXCTFpFnctHA5DZ1FbnqyTw1DrAXACCaeSAmH8xLZnxU1Lz",
  "key17": "oiUaVD7AdorozhW4npD1mKdkBV3Rn5cqwGbUqqW7bbDceGWQzjvsBMfV7KeZLT7XEbULBcZ5gHps1HxxYDvfWws",
  "key18": "4Yw4qGMWdepFnZCLD6STieAbC8UUsfBYNWXddBw1RbyBuAHaLRgHzwUqQ2M7yP2gfZcPKZtTWiLJJpxo2CJFZ1fc",
  "key19": "4Kq2wQiqGuXvEHCrNoJRQHz1yk4SNqNq84TjxsqMKsyJ4r6tfVVYWkVai7fs4CM9G2j6J5fBjgVwJjnxoJVXdEgD",
  "key20": "5AjQBrLY6CWDwP2bJa1yNWxBWffnZUzoYENYhWvZz5atZ4hsHXBQokRwRHVmU1NFrcWQJWVmfCyNGhfNWN5En6vK",
  "key21": "3xbTrfHJHvMUmbwwDbE6CCJLkPWC7uWRVR71uxBcQEw2VGhYBqetUiV9LKpZD8kWhTEMso2P3SsdsuqMttzTa9eG",
  "key22": "3Tv5VcsuVgdtsRB5fzYgDHVaHiF5ep8Tsn7dr7i76SrTVpt7dqSLxb87bhnS64B76ffBVkAWKLVdb9N3Tu4GdkgG",
  "key23": "458CtYhBRDKFkxoPqteyfAcqxnf3p3bju7KxWZchJLnNwhb4ptvhqkQTLFWnDsaDqimBPyttNeuXLJcgAcxzRLgU",
  "key24": "5d8g2KYhuztcu9JJP9BWWEaMjEYeZYgLLL9xPJn2LKGNntHvAmvxFSEMk7mcezEUQMw5Ki9ftmSsRJZ2F7mgFDqe",
  "key25": "23HN1H7E3hpzxWHXF3Y94MD2KG57DkYCEtcoygx1efDcD1Uk57EnvpVcYF3CPzGNk811uioXe3U3qMdDU7SPaJ6R",
  "key26": "2dbn8PPj8einCqeCowiqcxTUAkPEh8B9BSWEGcwetWGMnPVpxuyzniJDCbBqAjzBh3PpyjmZKsxqdf4PYHxRJnRb",
  "key27": "2j5pxhoPEpwWkfptXCekrQEsqDMoRArampmvuq91iqYsBT9weWyyNBr6Bej35cMGxBYdkwnmSycAHzanFAk73LSt",
  "key28": "2Pfw1LbuXy7Y9DmDFdFSoibcEUCe3bcb8Zgt2Us26Xn7p2vXM7ivQYtCwx58wndKmscJuWorC1UJK37RBGxA6N7R",
  "key29": "5bpDiQL5BxwyusuFLJhPK5W3DKS9jifYJz5RPZ1KJnks9EfYUUrzuoyQafAQ3yQrhmzf8GegW4MCgUrcGoq8SjDs",
  "key30": "5yxe5Uqu3SGRyaZ1FQyiVQEnwUH4YMYCg2erFi868wwNsSQ2U6t1anDvKdG2j78c8v9uJNpZKJMEqodHKRNo87he"
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
