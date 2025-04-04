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
    "3NsE5dnyXU7sqtJwGn9jFeBYwPwghM6VD97HgPazjeP3T18NbXV5WCLtx5jRQkK9WMDofmNnTsV2MALpGD67drMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66pmsTaqTjr8RhWvKZAqHRVHvGj6DngWVHhD7QJV1hsQ6EfotrBmkaBDkGVU9b3EvQfKJrAL8cPQoprcLKjazAgo",
  "key1": "2gPQtz5ejNwLZZqGwoKkJy8YSJ45zt5iK9BfYh797KVS5uvGNEnKDoECtb3XLgYHMtcc1T8dXRUkgNCSekqewd8L",
  "key2": "YtVqF9mybup8Nj1uuzbTSpTBGvUKMwNzceGYhS11Ta63hLrdXdEnHXtJ9LBNTgnUTaVQwGdgS14yzwfeB6xQF7q",
  "key3": "3MD39WEXFbQ3DpiMzJxM3Xkd53AcoVrrvoqUv6huw89ms1LMYLmHHp8K4zDSpeuKKpvqkPX9ftTHDrqGuvXTtAad",
  "key4": "568o2Wma7ottM5TioyqrhyjARtre3ZLmXy82vaPbLJfs2XoQZpWefsKHTQjiRHtM9bP6bW2KB1sqSPDC5xM6t6F",
  "key5": "5VNB6Gd5aGmRQcSK4ixck8keekun6xzZCRWyaudjDhHmkHangxTpZPSDb2A81QFd3D9pr67ForKYshw9vZnZuBM7",
  "key6": "2LyyMtPhWwV3KEXP6BpJav7Vqyii8p7aydVP9zfekvKXQSzEYV1zTNQG7dhpd91BhnxBXQRwjsFQ9HhyQ7cES4bV",
  "key7": "2SzEE5A2Be3dmFusbRD3BNzvuNgbwh5xd1GhtnFhGNnnh8TybuBYJUFu8c5DNd86EzXJf94sujkMeX93iAvaAJVT",
  "key8": "4uUskndmPBMHzajXg4Ksn5wi9BhRmepRHs8P3tBCkCh2YrmsYKDUiBSk7nJnALjNQepXWx5guU1TzSyC9oRa4mev",
  "key9": "44m7LqjW3nC1BsmCPF48kRqh1W6uzxXpyEbLuT5hbvUJMi5GVBthzRgrz9RdZ2H9KgEArJJfgbQoJseNoGynN74o",
  "key10": "3aLUFPEXwxk4TZEXUeJQQ2mVgnSVhmtjs8VJpMfpUHjdcmBarUWsV12pPnwb5WaVPvBLrDKa3hn7xuCeqDVQKjxW",
  "key11": "4obG5TXAF7ySRx8KCj3H12dnH6nXv7Lyjr7ZB3RkWCsDCzMamyQLxqQ73ptRmiD8rzntUBUQVtSTL9JN6ZRiWDZj",
  "key12": "4qXbre9MS8KvRZbjEtGbgVfzmP4FT7e1rKmSUaCMejvqWNJWNncAitZFAa5yhqBtiXqEgrJ1Ps6JfpzZMfHKCu9b",
  "key13": "3bwkCxpCSGsu9UqcAkeFqYY5gapgB7sbhe5w9GryndZfCbxtntESPDJZyF9b4fHKugRX1obnrmtaGywTo1k9uRUt",
  "key14": "waM2creJNCyxmXK93D6JKG4owccir5FZBmDCSmVPQTViXBNjnLJ2x416bp33Rrgp7JVo5YMyHA8EuzyR5Updu6x",
  "key15": "61gacKmhnK2ufeGX2BpKqzdQ2P4ZzC6nzT1t2LjHSRNM4xFa56VbF7h3bMFQF2zD5kGi1FrxHeiDGydVWfYvB3cU",
  "key16": "5wUdFLcW7ydWmxzuvddUD4jzdibo6cGSpZf4rzWdqB2McXcuepQXfN82Xr1qQkQ37iRMEMtuKxgjbry27TZdsnMJ",
  "key17": "RQMacwMdaan3RwKzHutKmnD5CaKzvWuJDTCiK5daVjvara6tL9GsuAbh9N6fHACQSPxuD4njLydprkUx8avRvRB",
  "key18": "24mYdcvDVNE7DSizE17gsGaTMwJZPJyyTXk4zaYQraUuKenYTMbQncLdvxwqMno5XeuAEzQi6ttyNwYYATVQZasE",
  "key19": "34LG1ciHfZ2vAHWHDSBNeGaCSwmkJac7X6DNeDSios9t11LpbGGKc3xbCtTgNe1wmhan9Pp91qPB5MhEFQE2rFbx",
  "key20": "56LBqVfg3tdgzZ96cxr3mnhxChuFuucSnvVHNUhX9kRZmZJVzWJMZMwV4754owipLDWNZrPV9DSME1YFkgCB1Qiw",
  "key21": "mFFrd4DHcKL2oFKjMSmUyZNyST4uuPN9uNevmsqk7mnkzzXKkjcCFpBW4CCPPY9sbQVtzZ9kehDpd9TJWd27YD8",
  "key22": "41zYTzVoK3Y6qhgGeUrPhHJYRWMHcqyYSEFhcJJD12oVeVbs5SpuXdvKk91gTAAma3DtyKmt84zw2L9jV6JdQLF8",
  "key23": "R1fAZCrfSnn4txM33KJ8HY6HNM5iie9jtk7yrJVjnx4QiCFnQbEhuGuKToJcHACsqPZDGJJQMJkVtvtbpwNkKr9",
  "key24": "5Y6DgsBZDRjERKCgJ3HXJMB6iiFkXkgbiJLSKxk5eoNho6b8z2u4BiLRBeNKLdtf7QgGktBh4dsYaDbQUyAEdD7d",
  "key25": "Z2w1ZpQZKJwbSfDnCPa6dHSgpYagYwfhsrcpnXKYbb1JcQ3mammAnuh3YrWREqx2CR2dT6P43yrE9U2BGiYT6WH",
  "key26": "3Ahcvo71qQcTVJgM5xkSbHH896CS9YRkCTF1gFyjYsABHNwm1oWK8wRF9gPeLRSvHBNDuoKn46QVQBWzJxspVUdn",
  "key27": "56qLqwXPaiW5qANYQR3xxg5Qd5t9dqGUcqV1hxz3HYdXt4tqBaDd8qWvio2b9YQ2paF3EyJ5be7SWYQ3ZJoz4upb",
  "key28": "5NmugYHULVnkYeCrU4BkNcntbC9FfAzprU9NNqFr4KCRcuhgkCH53cNvx48TPNxE4qJ2uWRxbFAmUdph8YP2DCUH",
  "key29": "5hz2v1icx2dxt6H4i3hSNFYnN1X6e8RYuxFEHhwQEtjMDh7cRfgLzvUsoMMfLFC5yKhqk1QCk1ccPD2DVNBgbd4f",
  "key30": "26NYk3DMggnUMHUSK6q93Teg7e6LTSZACFzvuiiuyTcg4KMJj9VHTuvLdmELbHaDwMP2zwLXR7N2FkWdgCuxbMji",
  "key31": "62DU1mPsZKYdWrLvGBzSwgu3R1phorHfSpivANcNhBBmnApv1YYUbbcDWcCBXJco12f6qEpnFzcp9kXRcLwPFbiP",
  "key32": "3RWXgTryRgrdfsqen1GnBoLPm2wsmZx8kJx3hyDdeMyvYc2GuUrSwjnfak7hc4tsQY3gjxV8e55SyFYkxHYSEhzT"
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
