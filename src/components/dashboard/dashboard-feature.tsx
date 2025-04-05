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
    "44w1ot54AzS3At2TrrXMgkCGqrPBRPkH1rY7sEk7XDo4JNb5dqnkacx4GiZgvtf1Nv2vwuj6wMwrYQYVQBNFBNG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j4UQFVAM12FE9rckKhHjNFkNkrcoWXPL2S2zh91fUKEoZpHbGXVcs1xXvrV8bwaNVx3CUhruNZi9LpMrEhmpLvF",
  "key1": "s2RP79y24J8TAshf4tnvx2Cv2BJba9bau4RzRC1ZrprRd5frzdD4ha8dSg6brThbqt3WSBpAfmu8RTEngpXJFi1",
  "key2": "4MQMSmfkbGh9FYF4VKNHkcoH4uGTZAPszwi7aG9scuhBWHHXGsjLyisPAZLaJYvzBrzS91icgHs2N7ksTnFpoCAZ",
  "key3": "3EBeZSwydxXKKueCQBkZwuKBHiXH2yiW2yiBPJ2BVAWaF3gTP2PSkBcPf6z3RNURBW4PfpSpSrLsNgFBeJFDci9A",
  "key4": "2BA7NVojJFfoAYjr4TfhZfyAY8KCGV2MrRZN4MDBgJnkehXyCqQidwWXx7VYkLR2a2Sbgmsvr8dDkQXK8WQeLegz",
  "key5": "5QTTeXEecQAXTuvTWss4hsuZcGadm7iJMgmw6arynV5gWiZF2LfzAfzzV95UMsNpfRvSYYRNA1yBs48pgiJuKY4y",
  "key6": "5K9esoocqZNGYPnUNHdCY6kq4vm9k6MaRYcXnqLNDY8LND6WzotwgMC4a23Y72Gt6z9r9EQ1vVPXA4GGJaKPe6qJ",
  "key7": "26hDGPDY2XoceBmzEzTQApeeNaztVCipMMrsFF9g18payaGkrQak1jmaoSnUXerFXSEBZ3Y9dYRBb9ekKsueyyvW",
  "key8": "2ta42UJNRNG3uPfnQd6hJ5nKPty1ENu5wyJWj5wksdHNWDkLx3fGPavWwg3KbWkDRTxVYUT2zMfjfuGQrL92ryLp",
  "key9": "i2VXBFQqtN49hpP93E4GZ3rPXrDwdJhe9tuxRSQAC99rdgF4yM3boZ2smA2Ga2yLNS7bCut5p6XnDvkg8DnwhJo",
  "key10": "G4aGVrTBXNa47s5wamPgeDLQtTRUNmacxCDBY8zbZ1cVJbrfGiC7qsZGRvyrDk3Ka4aDofoCuECLaLSjzvzngzP",
  "key11": "1b3HYWW8orDBvA46NGacrX7b6xtiYDdEo13E2KvqqGiMnCwnzjjYCB2nGoGEfLn3FoYibwzqUbt7YQRRp9oEeUE",
  "key12": "5wLVxsnmrsPQZPn377kSaGpXQiAbg7QVSQNFsQuXVmkwZ7GTndZoVseY3JrmzUQUhnWdaMqZNztGcEGd7EHphuGZ",
  "key13": "3VeGAiwR8jJJxaMdhNXPFzgJLrPkraRLwXVibXcSKimHw7RqFFTs1KpBzDo6Yr3gpCqHpZrLsKNjqyQeUx3FVoJX",
  "key14": "4voo9YhCU5iNWBupEGacj24xnyagRvhWhrY6Qb4qHfnuG6a6LVJDKkxjp5FmARkdwWSNE2VzPgGTMBSzc9n9NtCt",
  "key15": "5mh2SCRLdmurWq4FcRxSdsMKetXZ9sEYLqF5m2hJFbUTsF7aWGhNNNr3qC4Rbn377FFds9KKFQDcA1sUXVjuzjUG",
  "key16": "61EkkTuUSwxiu5cz9XCzgLS4avz2vda7ndLXq6PXzFB5nK5RK1r8q16idNJDNu1N14KSahYPqV1UXqzCxWdXVbRq",
  "key17": "nn83P3JojSUMVv56zGny1orq1PcENiXjqhLTyvLMprkZ93DR8Evrdu4s28zYhijCqWMVtrtbsYNZg5F484BbWaT",
  "key18": "48pDtNVRdAap3cK4WbctxHPME7s224F3si967EsBndMhwwunFvkeRP7HRi434buqVmbofwAEq1orkBiva61h7kdf",
  "key19": "5Ksk9r3FjKqjkMQbhmzinFWrX7gi2HFRffsR72UcLA6ffCJqVm51BqJdLuj4F4WPYVnm57iT7pn156PdbSkguRnh",
  "key20": "3o7kwzsdz9eCBYD9akcGtAMumG4JikuwVSDsby2ZBwRFyhnV1BSyMY8HTePJTatsDyCwXoUfWrmm8F1SzmZKVQSb",
  "key21": "UvQbHifmC4K9mv9EDQCGQtYpLMfmJVYmJvN5ZsuseptdfZvRvTccM9SkjYYs3CGsKPyEhGvBAShtjAwK93TxSYw",
  "key22": "Yrja1ZqSCuJd4t9mTXYGYmVADvPs73Z3YkQLoTFtNYurZNjckhoyfFP5BDvB2MkcMz7sXwyzKebbhi5e1EZsJne",
  "key23": "4RvAPuhF1kYHgFwJaC4E53YKYSP9KMxCgd58F5BuApghLch32azadb8NVUeJZxPB7s7ZfYVfKwoYaKURytiLiis8",
  "key24": "4UsxxUep6qBGyo45PvS9HZSAWejusAZDvoL7fzb6RoSYBcfmAmTC5FPRSLKV3EJQAUDq6eNG7YF1Y9nuu3QccaSK",
  "key25": "2z47nL4KjpRYfySL8TRckCdZ768KRWAoNFxa1BtRcaTXLoayMBsw77SBeLXb7Zj9HMvrzZbkJ4kj2Hh7G4poZTUK",
  "key26": "5JiREAcQ4GbxKUna1AWAPwV6dNHE7anfFwNjVagxQGP7BM55WpmcbjnwHzhYkuLSmKc9W9NQZXBL1c4AJ7wxhm1c",
  "key27": "5vsFGE4mkR9LrRbFgxA678CU15W5hJNrthAz3ZEvLG3qXn7XFVqW1AWps69KNW8NbFRZWdh5oewPhKd59wE4u7XZ",
  "key28": "3ojv5phvmhZijYJhyjTwWYCeG1nHWpPDzWsb6QvMo6duaV1zwWn59ZUzzv2HCnNhZCSw6LBy37skibSPkNJtWsuz",
  "key29": "4En2iVLaYQ6MRrXwpotDNaQqmDNN2ykJxBji6xkfzq5CaABzxjwxa549Unc6xtWRG1Rg5DauNBxDKR5cjZz8A6cp",
  "key30": "4LreWPBNow1Ygnh1aWD3gvbN4DtioNQNBKxQaDYWQN9or4wnMjhPsDEL1hux49sDvMJHiJ5u3sQXbHtNCHDy2JVw",
  "key31": "4ngPhLj3ZCupXQZf5pA5vqdCSwCPGE8BnRs8FTdvxxufMJ4tFdTVM2gydSmFnPWk2mdbjmhzDEuNu2JdCeGH2jx8",
  "key32": "31LWnidsazFD9VMLmYwbzt9scwPYw7s2w6rxtvHAJCvG43joqyZFQW8vVSF5AcDtmZACG7H5tTQgKKwYYpZLcYiy",
  "key33": "58UUUT5Nm11vPzxdo5GW1fm7Ur3xYd6YrQT3E6FB2QoTvSX24At2Q1tpzZRDuSaJjKyEKnXaJEZRGvSZ32bxTca1",
  "key34": "4EquRd7t1acG8kXhQjATvrDsUg4CgMhoWh6tWMryZNvpwRhQ7wGmueeL8YL4gQhFvxHqYuMq8JYnpjY2bRtzqDxN",
  "key35": "TdSGTM2QNeiK3UZuaRfV9A2jvMCvACKPSPXSXW3anr19iRfS8EgUYEoL95p517VFd36YVvBTfDqBqLuwSKFrNwS",
  "key36": "3d4gQidM7Xz946HSUKNiJcxAg11QGWfBW9xtw4V5AAtRzkDsA9mT6wNxXr5WS7N1SxgBTXKfEfaA8JZwx7hx22kQ",
  "key37": "413Cn6stE9y1v15qC8QgJikiYWreFdrJPDFNLLzmeeBxQmP58iC55x2HermL76Xm6kembu8eK2AFSfcGsbD6T1q",
  "key38": "3u3EwJBpVTxh145F2yR28ufx2ge6zAmEZ2vPLuxjQy6tmFmJoezdjjJ91f65KYW63sWemNqHayZP2EuTmLXmPrBM",
  "key39": "5o74sNDQFkXaZrn1marSACVR1rh7hhUjYP4kvS3kbfNBwDLCmXaW9yUBekXfC5CPMQpkxU6Jx2semKJSrNncMWSL",
  "key40": "3A4Pggqs74XG1ehSeogqa366JMHSEzYmmQqyM39EZintwrz6SVajDT25cnd53WcSi4hAFJhVZdCSuKJWsxnkf9V8",
  "key41": "3ZNScQSkb9Laik672CuZg3CAmeKmEnLxTeVFqTcaWND7RSVKUe5oRmpgW9bequUjK9bbsryQxuqAskknr8fnqWaL",
  "key42": "4JtipdPfW7Ti5iNznBv7E6PUZTzEJz6GbPEHGHj7WgzRW4i66kmvSiyeGaf3jqHmaqftyTuxGsSoQVkhZvX3Bxnv",
  "key43": "42796ZbXDkwH369GwgV6JA9v6EUGp6ytx4eiR4vYaBAdsNoxxzSe3SwRqFCi6cdmCTNuLe2HHFcx2JgbHVX1om9i"
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
