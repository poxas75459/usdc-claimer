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
    "21kmgN9ZMtEAEgc1TzNHRD5UCjzYW7P6GXhKpSe9KX6vWriWHVspXsRu3NzbbUcv64vi3pWSzJ4s7vmTACHKCwhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CfiB8a8MjWu98HmHm3Ho7HqZi5xmFkY9X4quWEY6Rqfzo4KkEwD2JwgRoeRnG6fM8mjC5VkVxZwfydAeL8Jh7FF",
  "key1": "2pWcytBzJUja78KEfQKSo67atGdcXCNuDLcKJWeqdHW6uaMoLJ7NhbTY6zUQcahBNMhjbkLWoL5AzFTNdC7CvZp1",
  "key2": "2zQcoqZweuC6ySEgGApiGWY6T7sG4vfFm6HDVRG2UfpKmzmx67B8YdG7DLAQ2gppy4sF6Luytd9FtHioheN17ioK",
  "key3": "3DwJ3WgXy2AhyC93eb6jqAZFPdmbydcyGsECyjsL5HamC6gdvpd1g7maNpHwWAgYfgv4QrGSaviLJUNDXhggtPwk",
  "key4": "2pj6t8mxWLqHj269WTuA5JWVqBwybGHwfwQV2Dw5NSFZUCx7C8NvGkgQQ4s8VD9LnfxS8xk14R5VSNgNCKtVFRE",
  "key5": "3xgemj7ay4Xu8yQmzuBuoUGpgqbrvoWutsbrEwFjH3SZ3xdfeHTzqJyXbAaAscN42mRfEGk8BL4CfixjhqZZ2rya",
  "key6": "229Tm7kHm8AF3o4yjrr9yw7iZpi7wNDC8yzHFj2sr64st2swvXRsDVzMAWHPB2Pnnqdd1yuiwj59VPxDzDzJgf9E",
  "key7": "4svTxfUmBEisvA7CT2DDocE8PjQ4D3V1J3RC2AGTPrBZTcqpDKWt3TqAn9cfu4HuWtDZrDyDdwYLrLThodVLrboy",
  "key8": "2M5BfaneLr9eUDgjckBXzfPybC81LkAuAadeDqLe538YfV8FzFKvRpXSkPbRVh3YUSyXzu5ik68TnqSH6JbtrkrG",
  "key9": "5YWD1inrCHsjrppGyeC64E1NxxLvz7MrH52N4rvMYGW9B8UPnB925DfDFcMqfPVN2Hq4yYq9Q5awCtkV9psXnKjs",
  "key10": "2RhvWwAYW15C8deKCuYE1ta8MPtL5NHKaQP5MxncpSCUUE6HCXRCSULgmTrxpe9eZTa3X8FUArMwLHexjrQESWV3",
  "key11": "4ZfRVvRcMKQvDW94WjMhghiXkgJ6KMSg8iePhrqB6s6TzzqsCnHEwyD4SpVFMRQMCtWkAvrWahm2GGLvMrXcdzfK",
  "key12": "2EjVNQjgtVnWVLcob5EWPP1ku8oD1qwH3e1kv2K1rUJnVUWBTNSakAZABniG63GDhVLLCBZkJ22BKAfEa9Ysxw1d",
  "key13": "66ZLwSoTbNapA4iQSsRiKZ6EuSP95CQ1svzaseVzf8NYjc1JtxHJrHPKa9ZKHGkdop8vVHt5zcFUXRyK7eG1rRwa",
  "key14": "2kHeZQrD5LaZExzGhd4cCX9rn1T74nE2ZiTLftx9T2CSNJHzUTWwKKuMNkkXz3ZqArTQnQUoRLX5yvw8eRNgQCBC",
  "key15": "4g4oWs7kvafHmMGMGdExFXvTPvkedDw8Raw8SJw2iDj6HeYGarZctfbXz159ooP5nrMr4pnb6aCT8paHtEFmwWTQ",
  "key16": "4uQjiCBvgWKBpV39cPv3itE8mJ1ucfpaU72qaBjecAVw7zG6rczsNQFknyf3nCcrbMZGFAmMpKPEvTuFRkPHvP8X",
  "key17": "2heXb9oKgi2xaWNaqeHybJgCdXCptCTVbR28GP3roThS35psv7j4yNp27eQaBJ1oJYnMyGBNuASs4g5TLrNxhkdE",
  "key18": "3X5LEMAm4tgFvis75SUMqaFDQs7yu4ET3bkyiF913xNAvDdSs8U2LAq4iLs4khZMdux5SiDZ1pCn6Zx9JvsXPx4P",
  "key19": "4SWLYmRSc5EYfeNK9tYvgkPVXNZLgJTkxVSW5xdt3GeLdYwARqTJaSNo9cP5xLV9bkZEerb1fJ9TeSo8MTKpyyo9",
  "key20": "49JkdXUGh57MCjTwHYwjssnNHvwhHQY5ZFUwrC2wgHWcji6U2599ngDNpqCSU4KR9egj2ZFnAnt9NrrCZZJPpMGa",
  "key21": "baQjP5Bbhy88TGuzHCjPHLfHjDs5QM1yb5RzaUtYVSZdHpui7ckLTsshwHoowSCTyi4H9zUCDAmagrn1Yw6ear5",
  "key22": "5psRVFDuz2VwmXa7EZeyTnG64yAvGYqUAcqzL1LAeyEpwrdZRKwA2B8J6AoaSZWfQYtPr2YAF6myY35wvm1SvUMk",
  "key23": "2ExNVQuJUsCwTdkCCvjf8b9CYyPRxHYTJwxdF8NqNxqjgpfa1enZktSEpd26PCou1VAJEcM9JzkZqdjAtBJSgBMN",
  "key24": "4j7oQJXXDmChiXoN9tPcC36k3kVb6zGVJrTkyo7mbkn6nFyNUtPoiqs7ry1rwJwCNBQnvPNKBx4ZbZsb9NHZ53qA",
  "key25": "tDfLafhmqHcwUmzn4q3Uw77LuoE35vVUG5dEf95giKy4Y7p4HYU6Z1KdTb1VNiB1nZEAjaNiw1RuAuCxhNXd9Qr",
  "key26": "3yZ6PKS95gbN9W2RUhXRn8KjJvVecPsUpKWnEe2ZAKbxa52MN9wvcYMUUBeZTeMm6XvVc9uNy4MV9BBwJ89S2eBw",
  "key27": "5w8bThZ5FzZT4UduWZy1G37g6yBdm7ffWRun1jcEoFZKcDY8dmn4BCf4osa51Lb7MhB414uX5FnuEFUNUeu6jAXo",
  "key28": "5HLMWxZgvQDo33PEaGr8NZuxmhWjjU7njLGqe6yJL3pgTCdJzPMv4TcKYh2LDtEJyuqMd38VooU6CFZNh1PEGQKF",
  "key29": "2HijNqeVyYiNGdgRTaiduXht18HQ38QFzdJFHa8kqLGcbtzMTe93TVeQc3usjoJRqJTA5k5AnB8ae6aTJkrxsryC",
  "key30": "4wBHzNFbVxswv7gyWHmGQZ5RvobxGqNdX2vTPToAwj3rsfJiXwCg7A5H3hnEo8Tmq8Fmeome4UQm24184mvmxbjG",
  "key31": "2CwhgPbeGDFEXoXiR4VH5CsHPkxxtYY9kCPEFxR6Tj7z5Ba97dMQ9Gj7NG7jwN4EzwrdHTvHd9EjBCKqxJEbuVfT",
  "key32": "4yDK2LLKoN9yXLZoQbpoUD1f2W8UGDtJ42xtDUyew56dCBpAvaTRyRm2Vv2CRvE4djKrBCfNdZGLi6mWKM9tnZX9",
  "key33": "5LyeW7dFBMQj4noYZFPCkcgTHAUpqHjKmZdyzpSUHJq4rJAFRNKZ5eheBeDnJPH6SYxiPk5c3NpvRd5CXWk2KwD2",
  "key34": "4nKiPvWVM97cbweAm8HSWdeJ46cuJhGWk6RAiaEn136ZYaByABuEASS2WpP7FD6LC8eAmjEdCqt7BnijQMo1f5Wj",
  "key35": "3Mg1iiokVtbybhxExyjRMQS7W6mqTsa8Kq9Mjfu7SzntA2FGghYYpZJCmd94oXBqYf13SLmd9GWipPmtWqYdPLXb",
  "key36": "KxZecsETSrccjU7c4gjNaG74S7wrfeUcbF5nHpSsVtvZWSMFZeXqtrRUgxTxNNZmwz81rcuNeJDHTeWrmd6nyTF",
  "key37": "5htSrwGkQ3YjvNQAG2UztMSGRZUNgGAZ6KtubEKPrbx7yK28r2CKekKZsT1BuzcRgztvNSfYYgb1s9FfUqFgykGF",
  "key38": "37tZcawzyjz2VCuTBXhx7WfcRqhr7ZSJaV2cKscYAHs8ZrCQfbL4dqk4THCCLbMUXgSoWTMSGMZLmqqsPE7xRAac",
  "key39": "rhA9wdbANioxSWkVKip4finqTr1meJ3Dyn1eMdQoMJGP1DJKHFdovWSQffZAbQpTDeEgo9pw6oqxpb8oYtQerwa"
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
