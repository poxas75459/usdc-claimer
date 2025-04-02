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
    "3qD9RN7mYSLLRgSsoLN77YWXGXuBbh7nVAE3CXoLSEvipxwwyPtvmS2QC4dzmhaZic75AY3UBRzmdFSN7nNF6RDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uKywS3KMyZRgYtbvsrCqfsypmshefd4eh5o86SFxj1yZPL6LSNkkcVrumBfAgHMB2uiWGYXz1ENRRyhQ93tUnHt",
  "key1": "3WqxHuFWJAy9QMrdbBYfZa2THuwN3oXp6b57yQWiWBLA4bVDffB3FPKouJ9uxCCyQ1ZNBQeAnVVm4JV5iuZzSZGh",
  "key2": "3ehD2gUzjEK1MaMYRCN3tMF3WJC9SHe3oU2sYqogvtT9VybjjdziiiBmDU5jsc5VuL9vQ5jrr1CLAj1ABWKM2gJc",
  "key3": "2gumtu4z7fryx2LvQ9gVjP4f5YqX9p6atkyufg48eKLQobiNR4BX8kg8qhLSpvmBLsApp31ioL3aBb87NjNM7QE",
  "key4": "YP5Mv5j76VPTAfZeDRd8KGaLqvZcQGkFiiHbpYWP2q6swivTfhYsNrpiJg7MXj4vu54LLpWAEMDhfMJD5Euypd3",
  "key5": "5eZKTfDa9fuY39mbBnXxFZ9e7A38jEJoHRs9T98FP3GKAGtJKhKhMFmYL75VhYerkHe2PuXb1nu22ixA3YLfN7L1",
  "key6": "26b8uFPw1yNAPdzxNnp9axWyYn7KhyWiv5C7o6yoznqLYDzU9y7TtpHasbo8TU97Mx6Ad8cRibNdwqhnQjydKZMJ",
  "key7": "KKw6oYCbUm2oC4WRXB3DVDP85AXhGM4V43ucwTWa8VoZJXq2nRr8bq5pezyaSPd1p8ui4nmgqRfM3fAPLqXG8ba",
  "key8": "4tE9eWCypH6AYszgcMWEFxJkvcQLX4qLdnEhjuXWEcta6taFzsazBH1MosyNKxavo6HH5qcmfaoM5ezgX8X876dA",
  "key9": "2DP336KGtpnBUAkKf4qz71qom7koXD3awMkhgRCbgM6NKEdAA5cYKZDmQQJzD9U8avDprEH1bmWcsjgwtDiFTD22",
  "key10": "3KhxUcc4NLKF49eZTfSg5uEBCS1m9VZY8YV9zVqbGwCDf7VATVXzpVNNNuECWUmkhZ3M1a7zHft8bgdGppJBdX6A",
  "key11": "2tPRTrYBdGZdzepcRuLpLDE63AotzDdfj8BgppSvsnrgpjSUdgnwsV39fTRboFuHqjYmZnQqW4y9WXXkGgzCgG54",
  "key12": "4Pgi674d3k1qinFrNAPNFN5BzbaPg8Uutdgqqv6aJQWJdav64aeUNCyc87J2fFC1GHSzSfNvA9hDpbpw3yBXawAk",
  "key13": "4zDCHfFPsRmsmxkegyPRf3doumFpi2or9Sp7Zck6UATwqYw9bqpMZdmBT6SKAKFYGwcxXoaEcB337rfmpAjA1s9b",
  "key14": "2sga1n4p2eAtXBxVVMVdUJh4PQyD6SXYya9DtvZCZC4VeFaLvqpE6mSqujxGbLoaBVCzrbEuYzTYtFAz3NJ1awEf",
  "key15": "4KGS5K5e8ZDhrStwhHVvMo3VE92HAR3ThEz92tGx1rnA9SHBGUQXUZfn226nXm12nUWp4oXLeKs6sMFrq3GXLAff",
  "key16": "4t2iENSShVaSBxbGNV34dPccxT8Lcy6fYCsVAs1BG2G7nmHhfNbdxbUPDEaohnTcrUdZh7e9jbQJ79Rdit2nWyJc",
  "key17": "bb1ETXUNYLowp3j7CDJ7AhK1Ci6CC3ofc5dRGc8f9YTKfxFKiqqSxrgGecbZ3C244Kbz6yqwCmxzSHP6Yn3X96Z",
  "key18": "kE5rQvV1sDx7EFMK5kJG7Y6ar6Dizv1xA1QpFcVcZS28GSFoTd8wi4Za4jnL3xuMYjByTkX4hQ18w7hEfv5vAPu",
  "key19": "4gcvxf2r3BZNNDZozVzZMFySktPbHhJTfzLak2V8zuWcp6k7WmqK587euNjKMv7baxEya5vwRX9okKWb3waySDxX",
  "key20": "2MAZQ8Pa8YuQrq9nPZ8HkQwRKShDRBJcQNZ8D8mHBasQZNNazvsQCYT7KPmRgGpnPMWFgBSZDGjeLYQuDCQxSzcP",
  "key21": "4gK3zbthF43B2jARNPAeiVeamcUkpNhdsdFM448a41yehFqQPqsnvW3dqsQsyFdQVMFM3cd5oTa7vwfzezHKdSX",
  "key22": "yzUsdZ6itHjAYnPsYc6KhDneCmfjANWwVCJNUrk3m7rK6gULo9rdjhJZCZA8wubLbapPssWSD3kMxYJManNQdMD",
  "key23": "4fbGgoY1UaekvQdX9z31AxWUjZB7BZzjF2MSru6232oTKWnFSWQ6VBNLnA41cqC5dm8rcMHKKnjrPfnPQHk3yxZ7",
  "key24": "2sVakfjDNK8WY3YHHamyMiPpECjiKfMPrLi3QyC64dpygNxp8AaozMDXbZQeP7QhkanjBEuFg73NviaMDU5ELwE6",
  "key25": "2tycQKjdrn5YrkicYTDBvaN5D9u7TtFv9wjUiTfsAWwCTTd7fEobhUcybX2cTprejTtMwZUs96PtoVp93pxjqAjS",
  "key26": "5zFBwXL5gAHwg2KRUen9KjRXFQYT9Nf8Az8ypEApt9aj6X2tZXN13kpye9s7SnmvcakX68iveXw4yYYJofS75xhK",
  "key27": "4qhiLn2zqf4YFPaXZPGx5hcktwx5bvVJfbaY9LxMjzvYpe6HcEnUf252UqzdJLo3WzYdpywTAWbo5WGzDREuoUzU",
  "key28": "2uBXfHgMSQQ4g89dyL4vxqBypLg3BWBrhUrexaKjfvb9eJMYnNnP5eKegntzhbFWpyFr1dLL9JPEGHRkg6AXzf8q",
  "key29": "5WxmjXKLSRuGMtzkPwH3NQTmeWYGerH9SNSNr38q4e5jk8MF2QSLKRZUig27hsw5Pzo8Ycp9Gk3JHZEEGujvXyuC",
  "key30": "fqT1R6iixFNxAgnjdKvL4WaFTriyzmXqm5C8fkGvrcNLX4YLWBZnqyKb5e751iWrB5DvdDv65fPrWkMimCvK8dE",
  "key31": "5vgcpoN9dJZgNdeCAYN7RzNvAq5RRAaSnxVq2g8pqqRHNPJTBr5ii5r7xobMGbALq4C5Nno4bR2fRXUKiPNh78qf",
  "key32": "2cxeG2G3g3qbytZSVBj325njgF8oMjaomDgi5TVa3rffRjNbGVes138H3LRFrk9Rqn28YnVwufd2ztubdan3Pk5C",
  "key33": "5aWsYkE73KyDDjhhTQ5WN9sXJT3wsToDE4aWaqJ53GgUNiamxnWaKVcpUxuCF4U5rSHstc7KuG8tNsiey3hx5zNE",
  "key34": "2BnUEHKyu41DwQ8AcAPGXb9KUGUJLN1KuGsphBStzQnaC9RVFWbCRodVHWhRp8NSfzbpnsMDnCqnjQPfTJDpjiGc",
  "key35": "SsFpkoyF21FscYTmMemUpLxKBKGBxMM151LYD4rFavR9QTcJo5cjwP7yksGityqjNVvEfoVZ6W4wCtMf3gQwNTC",
  "key36": "4WwLLs7NooBRmtw2ouSXsfGnyg1vzfPg747zwFUHpk14kB7cJdLj8A7DZWcKikrvuGcoqsK1PcGEo6PiocpsvPi4",
  "key37": "2wQfLZi77BihL2PwLapzAMQSLvN74kzx7k9e5LXA1b2NpCzxrZVVMsWu5Vfsk2M7Jr4c2gs5FB58jg5pcbXCBsTJ",
  "key38": "27n2x2Kbwc6geQJTEQenfGQExTQ26PbF6yzFi6EqLdiXJ5EWxRMiFwpMfzrGyVRwcry8RHDnD5PyzWsjKTBuyBRB",
  "key39": "53NN7UFSCa7TS46ySojH4XhyFgjdL3WNNCNSXkQNuG55L3swS4yFZdfCvGC4Xe2up1sbU9BkSZuEWtc49Ua9nWya",
  "key40": "5RK4kzxmFXuJk2ex4ZnfpSdneRB8MiMiuNSuH28bcx26mws7gNjiUwhqyyQ1tQrzbadGfNKGVWXtZeWU3aqJK74p",
  "key41": "MAERh1uW26rds76jrvBjjSHNP3Ghdcw9HrDqub9zkZxUVKPYCy1GEVcRf6H3FyJfzsZcWQqnSik3h77RTUJQN2e",
  "key42": "3Jts4tCiPVMYFuhS7bDUEUDNPxRLSJH6JaQakEFN1xSH1yEt73Ncj32L64a6TWNqH8gwFS781wqGzYpvVSDRMDQg"
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
