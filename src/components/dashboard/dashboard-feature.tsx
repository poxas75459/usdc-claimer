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
    "15PadMXw86szdgG9zVxuqo9rd4NpSXswZGgraSfzfdHYQTqPHmEzmQgRyZxrBo7quwVexpugx1ERwVMR6o6bA3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yWyFCP7y9i9XchruJFbbuMp5R3pQZDHCPnHNrHy6DNwprhBN5bA2vUWPW67U5z48XSMcAP9gVD6DXJHTq8hmAmz",
  "key1": "4jpL5HZ1BWRqxnkMGU2B3EPQEtTX4tn2ahhDmbiR1bwtRHX7VpZ7jQusiG7bTt37Auv6hLw4w5ukdkve1w1cGgYX",
  "key2": "3oDgJTYUbi6NywK3GyQndiXxgUt5QUc9ygm5LqmNfGvee3AkekXgbawe36phKjNeiMPJHZdaATU4mq9GXTFqG3pH",
  "key3": "2uX1wwErWYGHggDBHXnCYaTpUtfiwKbFSxwKZs4gs2AvwiN3bPBymckF98H4RP6RnGzGE3CHK8jiuRW6Xvy5FFqp",
  "key4": "3377cDGGZs3Ptam31RTpgiByvaJciq49bm7eBYfu23npxTK2AENnGgWgFuLvdekMkBYHbddpnvRTZixa48t1DdZ",
  "key5": "3GH8TnpQu3nByj6aAGhUmBzS7uTnc5JfscTBXfsG4oKr9BFqxbg8VWxxRPndar9qgPdC8adfnbJoq9dq8oeE2MQA",
  "key6": "4ZPHAre8QvRqBN1pHrFMJfx4DMGWcwTkuhHdhxvQ2EZKkjx9B9jtDyrHwg7beSg4WLDMgcAr5yUERcCotMWdnRdV",
  "key7": "GX5aQWrfH8J72fCv2cjw37KSDW9d3rKdpYFukkEfKuuj2EecSSe3boWpRxKCtx4EmUU3zWnxh5kGSxtptttMZNh",
  "key8": "3sQgGGT1RHZGWDTsgLHMMRqpCjuxdYmkUqaVMoP1Cy2hBoYTuBLAsPsnZZugPwnQLCPE6GpnsnWydzHXDBPBrbqA",
  "key9": "3CGfEeUE7gBrBXT8yaWMsen5B66Wy2Q7CUYNokriejT3evWJsjJHTfYMqvhWzGXykoTzGDTkcBBFF833PNDStRGK",
  "key10": "61PqZoVW1ZVWussQKi1P3zsqHuULtbuMR46ZBP5YkdbPTUUhsH73AqJiJbkbqwpJCWFUCxA1n14tPg2Zao4yAUsB",
  "key11": "3s4pyRYZWoyJT4eBW3bUfoVHxjoYm8QWaqEK9dnrb7DtKrAci7EwcCRWFFHzaGons7jqe1hvf5zxGXsT3qwM4RX9",
  "key12": "3nPnwMwGa89VytwDhnCNth3hECqMKfRE9cwoezVic4yns5bLJ53KLTwQfjoZrWuxXyWtDZWuPq3nq1gGTB6qqRw7",
  "key13": "592zE7jRWi13JGFmwGVFxjfZ43geBfNb6bXciE7MXvd48ZGweMBecj4EKwUGbzFfyA23MG18SesdysWhj4sRktyq",
  "key14": "569j5RHnpxn5rj7MGtCezyxwov1qoWWyqQQ974Nz1btdcm5TDP1UXumPEhxbTj3G3zPJBCmqpBG5aKLtdg4DmVZ1",
  "key15": "4yZQnSTKxk4SpoAwbeD4fD8yPaK2dgNCbZyxMrKh3HTxkeheGjFG5LS1ZUv3ATo15cXntCmc2SmpXgJYL6fPquyC",
  "key16": "3JxwP5oar4JX9v9jbZGKdZ8r4EozGjSJ2NK3hgKFYQKbfDsMNBiqZkXYZiwYqtPUZxp9t6xiLy7XsJgRNCtRMAe5",
  "key17": "25Px7G9RUrQZNbK1zXuVrXNYzKbDEU4bY9Ld4DzXJgjrt3YepVybNeMsaAarWCJbZ3KRoPx7zP5JJbdcpiuV97ja",
  "key18": "BtccMmxeiMaxc26SCV2Cn52p6h8GNBibvX6UNw96fm2ZsQXVqfEKActjjeenipP9TQJo8Crd9fxCvDsr4wxyFWA",
  "key19": "5GHUJikYWJMS6RrribWBRn53hPA3mj5dn7u5QG54aWQuHe1LJAY6M3hMgU31qAGXVbYq5LeKY1UkqyNFrNUbTEcE",
  "key20": "3AaJeH3HheTWVJzenekivzfwXVUyXbhGYxxnm5Ty9wEAZb5ytQQ4mdtqk8nPXeEdaEKKXFaprKCYC6Q4USyJNp1Z",
  "key21": "Ra321hFcriUdnWSkfomnuBgZgT6Rrx4CbKRH254bgh8h8Xnxq3YQpynCMwTV4QQJsMwi7dv3iFYPMwU1FNbg3rK",
  "key22": "4CXuBycwjjaeGpk7CJsC8ouzHKnpEn4yxf7u1N5Pab38wf12iHG3CpiXCcX6nkEgJuD2xaJXTAgNBw51Fjsx7iYn",
  "key23": "376F6PVaLtzsgKtUDB8Uic1UsmrKBjtUTK1VefnsgZbaXTMSTa5Fh71g5Sjq6psVsruHEw79FKYJhdHSZPPPYq9s",
  "key24": "ta15PHPp7WRjcqmXH84NuCHeqXaiktnj5e9KHKqrv156H5nwPg39CRwQEpZSt7avJbdV3f4FQegCak1n2qurEpU",
  "key25": "4tcKctZKmFFMN5TrpdDXV9cxFj4z2uo5AsyrR9ShjyNeWfcaQcY35NLm2Z9GjoJzUmmHc25ciwv48ayEqDqUJLFH",
  "key26": "662uKDn6L54xxsao3tC9FXM2gdD9KP6z1n3VzAX5BwTvJAyujctDAzbJp9nxErtC4tPuyZkvKYLn5pNmBb1ok67g",
  "key27": "2fqdS1usrPNMFii6uFeRfYyveV9Ck99v5vxwxTPUh8aQvTdbDCiqDLkMgQUfAeyRVanYVhaEGT8mmxob4ueXRRwf",
  "key28": "5ozpc2xrkdFASvyM5UeScG1pSMPRdy37UHeJ1yVq817LVZHnLuW8keHUsWUsDp46vEkNBHQomjWbBd4EztZU3Ku2",
  "key29": "g5MRXJLXB5mjx3YK3k7QxFew4o9wKdNpNsmunCTnnYkqDJeqpKeaBvoFMJnYeDFx3SknVbDQTAg9313F4ukVaia",
  "key30": "22G9nqhvkMRHN9Gu9stGo7jDcgBerH8yp9SmgBNEmdyvFP622d7t86DtY5NWVCXXYuVKBrstqnqFkSYeeq2wFPe4",
  "key31": "8RwP4VrdCqV8k1VYuMpcKmtoLXGcpxYXB5djekj1NSf8WEEEhjrb1yjEayHSarhoz9k1LBp9QHWPx1zDCxPQqnZ",
  "key32": "5Si5sQfSFefUEk1wrDBhHFT5Menr9jvQngfm2EYDkVUJXU28Wdzmy4WmkxKVi5yFPG2zu2yfqX9i9ASaoeASqcUm",
  "key33": "4unbUKA89NjdhHHoXSZiqgN6cHGLAD86qmH5XArU6pAifFqTidGdRg5N5GZmkZaFqyMtUrGi2GLUtBJSV5KxsVxt",
  "key34": "4mRXMmtx8NeNiLJYVkHfZ25zcniWY7wsxA7C98yXszYcFF7HHkKxkNJuNAhTA8hDZ6Xjf1su6rSpdyiqHHehcbxY",
  "key35": "3wty7wQaCrtgvAfWgZ8pJRHXHuXvGyGgYpjMcXZHWtPiPXR31GaxnRxfZHWkhFpXUiHYGhvk5oP24TDS9VaNEZb3",
  "key36": "SLX8L6eYFWFAHWjtJPH8pNBrVm3aaVWCcrMmAts96CWU9SzXdpQJUcs4eFBvkYQ4v1XQgfmRJmWskcQ1ztYYUMV",
  "key37": "32wQueHqDCYhnmSKKfRL5UqrPXoFEjpzdzhdtNaQA8599ZgALwUeZszrUFpnqSxnH8LG4QGJVDUevzG78kn8E81N",
  "key38": "5EjGvEduXbaiwMNDLBfQ4Q8tiGpCDSAx1p2T7gkwXA57c9LF9DACUHsMrPDTBCX7Yh4AaSW73rqpZFpge4ZVAHpL",
  "key39": "dUqn6shhu17PnBpn2YVsc6vRJvtPsouBdgXjmJ4hJsfyfm4rYKmdJMUjzbYpbSwJkwXy3QAsdkFmsvsMmnS2edo",
  "key40": "5nC7S5eEmifgCNaNhikXC8gUFGfGbmThtfYdKQ1v3GDeWnwK7mH5BCQNLTfoprMGDFPwAvmsWxd2Ra3poxc2jvLW"
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
