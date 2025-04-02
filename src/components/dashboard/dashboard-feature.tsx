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
    "5zU7ULiXYFoFUgkvHrM7bGEBpiTbAvKu8jdY571uqq6EXE1rP2ZDZ7yxELaEvkg2dxMqebZFnKxWWRaQofrt5by8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cYnDFeio57FqdVfzSpFkzBMT4DkdHNa8CAdnL4uX8FatqdMbvho4Mdg7mWaTTBghWgdBYLsCMjaihsyeeCMQDYm",
  "key1": "bgZthAT7ZxZwejqPxzR6m6DXhvZSg9UihEFPp1xiPLf8oFoPjnGVFxkY1dWEospTPHZQMkNxvw2VpfQAv2pV34B",
  "key2": "2gD3qgXDf9BEHJmFZ6oMtjFGYubAGamwtP34eYueQsajQqm6q7YWhYthPVwsTV5LC5oyKdu6KwLE2t5JbactbCtA",
  "key3": "2etHXfVwW5i499aS2MSvHgcS7iSFo4cvgAXscVY48tjMqBYxT4prPDtix1eY6Kkx7mHdgCQS2p7cfHAKcMrXg2tM",
  "key4": "2yZHU4DhgsNfAkCBdnKUcqobtFG3AqCXcQ91yXaMaUio5kqpZqsr4ob28V8b6pKor8E2KMVodEjVgRUeheQrxZHe",
  "key5": "tvSnsuNZjPXBMoiCwRssQnrfuEUJJDVFEwbULgQ6qg9XwAEBANKdoZD3Dz3g6jjrQ5pjfseT4SES69NrEQNguce",
  "key6": "54j4NbxRm7KCimhRWFxSbyWVQtmy1rmR2Ww3hcuLU9fqwdPBFHXbfvG1CM1Xh75LDmEBry9kzosAnwi1spsjPHVS",
  "key7": "2eCVSpkxWUJsee4BfDN3foLB3XdNCffgQiArsb7HNCToJiotbzTa2mpjJFyKqYGC71rNK7BofY1EBaXsCTSDJktQ",
  "key8": "2K9gPiDXLPhYxTSYT1fWbGqvXa9U7xWNqaq8GvkqmfYC6k2UrrAAgV7jUFGr7NZ2M4PhtzhrU4n9jfwWHGPYBmV3",
  "key9": "QojVR8wmZFdBXTNPHsPPP2xzornGBrgq9aReAV9NBzu3EDJZk9RKs6evu659o7FQKnxfdsQ782WsNigaAAy9hLJ",
  "key10": "5c1JzPQ5S5CHcgcCTeQLj4EKduG5UccZR1UU9J3aK2s8MuLpRh8HRpLG4cGjpgcZ2jNUsHdBcBXJCjzps2b7GwZo",
  "key11": "3xeQKGET5jrqU3fsFuccs8hteSzMxLqcQmTuPXDz3moC1ZdvoRQQXYLfFTr5cjehEZqRSNYjS2tXAMqoHEYWme3o",
  "key12": "26rMhMksEN8RprbwsCewi9HiiiKFEAPKtdCbEhGRp2putR1vAFtgjScRgcEXZZmkN8VyEMwXoZbbMjup3BU4Ur7e",
  "key13": "dP8JnmoNYVKxxAohzKfmgViCiaifZydTnPKMBkqbuJY9S3JtT8CjTiyUD3wgKSoX4YePjor9htTvyQpcmgXba6x",
  "key14": "tuPzx6HLZrQwpJFiLhVfLj325wWfQawswWvg1ubkbKPhD91EHax872jTTmUAGbJpgEMn6opUK8cbQCASwdBgcZh",
  "key15": "5vfHf6MSJroGHZ1trg9jB3kRM2R9HThoooNttVUGPLtFn7TPUkqxDxvte3T4s1s897v712L6XgKyqMbLTK9iYzE4",
  "key16": "m48nGRgTyLGq1c8dxiKQfs3enUBmhiEJjpvt3BJoRuzvwU65tGmUAhcKaTLwpL95EuDMtUNXYRJw5HoMmTh7EnC",
  "key17": "sS2csL4x9HsJuuAkv6c4C1jSw5rN6Dtz1nsC6jPNv9d9snBHnWJ3TU68BqbDLfzGFumBh76km3WiAe16DXPW296",
  "key18": "ijXH1wyS8bNbht73bmXuEQWC17mvKV3KJemrVapxJx9YmT3x4juuTCbKTxTirWuxzDkygy74xTYxrBd5eeUDnkz",
  "key19": "3LDkqaa6DqTPQXF6HjPeR27LRCMnhBCLrNH8THZTJw5E1oSbhS48rsbqLx4JPw6juCiSG7eXNrBFGnU3cGY7xBW5",
  "key20": "253essKU9t3BiKh2D3sHncpc6rzjU29GK49z2WDp8KVrrYM415vNCvYZh5BGTwJBSxwFB3VCfCJL8AVmzScaJLRR",
  "key21": "4wghFrKUcyShtg8Vv2wXn9R4rFrmm7fTryV5rJSdc64UuQxABRjXYGTiwCrTmQUGbrSJE1vPQDGyCn846qhNhQg6",
  "key22": "51AcwXFGcwboda6xUs8aQinKK2hkBfeU5TRmcnPRP292jyTCuhzMNA6itve7UDxT5kTfB1X9MkXeS5jnKyaGCYEM",
  "key23": "nrSfcA3sr6dHgxEDX5Q6REkiSTkvXrfLz9CGHaz1hsPuVbPqx2aULTkNDEmB7kGNBx3EBDSwwBjd9jmNV6keHZR",
  "key24": "3hqiBk67o92gtS8JBYWvZYCYM8EUUcxrLqywC8TT8EmZAXz9YrqDwgX13omGtUokx3QygFTN1bW2Bv9WCB8xDYRE",
  "key25": "2nVEdK7ZKF4TC6t8YQCGtNLr3xZhnXupuCbhzs1WVNoNjX6iYL7gVLp6shUyhPmwnjtEjsKULtgYV56L1NewNnP7",
  "key26": "22NkfR6XjPDuHBRkqWqyCMq5rjdRCyH8robMmvrkmofM4a2C7865L6fEZaDwvi6hrreRTx8qdA4HgmL5EP4VUQnU",
  "key27": "42gd1Mdx8dtvV98oPKFBXP3iTSJ97veP8LmQinwEzLQMiGcYqESmcKuEMYic1YRyWhuwY5DNqSSmhvnKiupAaH6S",
  "key28": "55ey5FT4WVwnZbmemPDvdc6qnBjWtAUYQqeVSvgrujaBHkLvCKTE7jGozd6ruxmmJjEDwUzweRN4RkBV8NeUB24x",
  "key29": "2GiM7M8wtRk87GzKneTttFEk86ycbkEzr3U17e7mW9akrVY6Y6w3ZwtrXLf2tw574bZz3p8rACm2vsCjaHv56zVX"
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
