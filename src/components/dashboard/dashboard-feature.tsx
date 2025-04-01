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
    "4f4szcWYoH5YcCjH3vEABMYF3apV54kianLUooTRobanj1J1B2LgPx4ogfNbrsMwvnVdSbsKhFyujWQD1ejPoMcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Ce545FVv8EVGwy1v62o2MrvtqA2g1tYq7NQHLexxrhLE2u8xn9v7XGia4YsRdMXaBpGhUU8eEWgWr8ixpNVh1T",
  "key1": "4figBivWV1LQ2nNqzYv6ncRhYQjvmxWeL42K8T8QvcWzjQrH8aJ5g61jxssJYSm1gLq8X6jXUKbaF3BtjXKrt7Zt",
  "key2": "618YdkqWqThruVujeMdEXDHokca4wyLahoZBF5LjYfvdgZa9oLFMYvE3LbxkpZ1g4AiPyWf6DDQCz1E6zvVZNs3j",
  "key3": "DLKik5dHSU36spDQKqz3zU3rTQ754rK67voQVKaYFW2vqSmKEM2TaXX8FLmhKrMHMbvnTMkYDzWmYk8yYfYzeWX",
  "key4": "2iD4phty83AQGw9qwWhJEtCAhq5eoneMkSYYNNtmH3zmQ89pjuS1h7dkN4zgk1aTcUNz61tpb7ShfnrvXqwBuU25",
  "key5": "3577pRDp6VScBw3zQaBJjhzSkbnipqMQaoxyNCpRai1mWS7f2Ng7QUZLdLRHNgLDmKJrhyyTuokUHZsaxMViLL5Y",
  "key6": "aswuQ1V2m62oHkxnc5D4Fdbs47sKihsJzuuYvNCs3327SG48LuSiNp1edRNcSWYuAGs5gcv3nYy1RDiNuqBCk2b",
  "key7": "267T1Qrk6hNbYDzWfLQfcDymU6Axc4VkWLz4dDkDFz8izN9yVjkmRWqxZTSRdqWjTTkVmHuBe1MSiAp8nEALsvcd",
  "key8": "5EpwyPZ8M7upU3ViJeNjsBjcbUL52fKRGkgnbF7SaFLtSi8EPxVzjurBb3wmQ2AqiLwhncuAZ6eP138555723RLR",
  "key9": "6r73zmRA8ZazMViUF6G2EP5htYBvjDZggo875p5mSnkdghbq9qCv6ftzGZDrCeccFF3NgyAephASz6RKnhquKT5",
  "key10": "5xz6XtgDWDQZ1eTXWzM5XDAwrPMvrzPb9VwhAmdGj3kGsytycLAmUsM2vhS6u7CPkTanfvejeQDG9aNGhM883DHF",
  "key11": "3t8DVkLYJbSk6f7jpXzD1cs4heMsSdJaMeTJ9p8CNkcuoTmrAphuBJj3UfvYQZBtKcrkaHhZfxqD1dCSRm8Zdfd8",
  "key12": "2jqjQut9xVUar2mp6TMnpmwwmJ7ouiPob2cN8pqPsJURNsgcp7ERuCgK2sFkRvbf9bfAEr2ihWSDvP2JjodsDGkK",
  "key13": "4wsFTAo2KJb5e8o7QWJg9GE78ZuL7zRwxzc66SuLzttqm4cm7fK6RTHkmQv2AywQK2T2tqmtoS4eBeDqPBhFvTmx",
  "key14": "3r7CjFymxRfYB6om2rbPyZKpryAgCv1HVZMgoqKknjTSfLunM6bG5HwYxa4gvg3PG913epmaMnDDNJim1uK7XTcH",
  "key15": "WZB3kPJgqwMAmgCHnszJ8fsGxbq2f5qpoDmUg7Pn5ySQD6hrfsWauLgiQ3noSUUoDtor91qTby6GbhQdZZaugNT",
  "key16": "3F8L2Q9Di1wqYfXXRBJXkEJK53kmogqnNgUm6r7dp7gn8mFmU6kQhVQ8apSBEpfbsUiNt7S8iM8bJZQWV9QGgWZ6",
  "key17": "gSFeVCjSafqP8NaDTcZ4rxeccrBSh1rm8WCGZk9dmxdjmqoGygTZogG7Nt5BgUbZa1F3spX1ueKnMNMWQCPByu2",
  "key18": "4Sdj3a2i4dyHuXPQSX2XDwzmtiw6kvBXiwvGM9VZN7gMx9qgAB47sLshmjhFqXiZgYByDnNGZYnBiMCh3ex96KZT",
  "key19": "4qiCmooqhHF1FsX62q9kwsvxmSnq9KZkUMtpDPBewtixCBa2zRoNpHQ6kX8PdzD3gcr64ayGcMzrn7xB9YuxREiA",
  "key20": "RVBf8qExXBApqTmNKKkTH9F7w354ciE9q4et2vYVKu7RPt23Eh3TCJiYW8ZLJGsfX3ykmGZ6w6UPSmPzZ9BHQKe",
  "key21": "26fGBxPjvRoRxvyzZYUniMj1EdyNz2NFqYDcbK4MT6hjpo3etVM7MUuF7P8zWshxahWXTq9PNP9U8ny5p1qbCcoC",
  "key22": "3fEBXohv56xoUc4St2SKuMak3vF64uuSYBgVVfLDa3FnJM5qUfrPaucAMLFykVAkMKPBMfsH2dA9XhAmyvsV7ivj",
  "key23": "3M3WQPfwVUb1CgoD1Gb87hLFoD15KvQBdsJhJXfBed6uZTaJuik23yAHSgyp2pHfsC918DEp5bzfV7JddwFA7DjG",
  "key24": "2kYC3DQP6mR1AQ4PWwQEDxPEkw8J5ceS3Gcda58TnDM5iSD47cNetwJ3gMcyUoPpWSQV9BBnh9diuE7gvWcrYwA1",
  "key25": "4VTv2K1HHnPPdZNXQk6YYHcFuVqbrqNXLZPeRFEXqrmhWA4LAkyu18bvmA4kcFSXbAijWYyQLsUzFGqpVr1NVLhC",
  "key26": "32zcVeN5wUXibJznBfESpYz18kAFJUFqg9yuApCsjvGyr7dTeq1pBhbaw11MKVmCmepCDFGSiYZqv3H5ojHXkoj7",
  "key27": "5e7fbCGb7Sh6DB6ZXhiDWdEBKNeDfxateUrjPPac6Rnv1PaesAupJgRxoUP62E8ZNkTmmHjPNhzVPQuwLwWPmc92",
  "key28": "4Cpb8pEDJS59Q1akVxJgjhzJvGWidZMTAaJjJ6LwsDJ7fGVZC8xVAHa6B5PMawpDpCmV9UXuwyiL3jyJxaFvztrw",
  "key29": "3Hrb8kxt4TgqWXVt7Dn7eFTEd6x7RZUNPu4JHG61mtvbmUPXTF2LPsGFXGa355WxNYGsxSnruRRrcGam6tzMxWjq",
  "key30": "5HrM5htZ1FWRmhxnhgc3sBujW7AXk1ehW5T5CqQJ3uWSRPLnjBJ8Rt2JwT4wTcFvWJGg78uWme6xA672mb8ZEGXN",
  "key31": "2oWyFF5qU6P56wMhNXstRVyJUesYNc7rC4c3dMjNh9gnZMEqEkKdLndmCzDm3N1W9GEb7xcC6QKUg4qszQjZaCjp",
  "key32": "4xNk5mQ3e6YGWXZ7Ex6921GACybSGuJnKXFa2BWSkBHFdKaa9B6Z4W2dhN1qURNkbLPn7gsNFxHy4Pf7BcFRtjyo",
  "key33": "4gGTU928wCX8Vp7AjxZksERMZq8E1xWLoYYd3eaqX4qNdkHLAZoqVyBePA1dwLvwkP5U4VUmLQK4J4HAqx4vFJ5o",
  "key34": "3XJqTGEsVA8PDNmyHEbb69YpsNJUWgsM8J7hjmcfgVE6Y3E5cz6kxVRi168P1upZMdeTnf1EiDrtKtLT5tRHsp6D",
  "key35": "4TG5ymTwCT4eD5fTUjQ3EwWqzQBdGE8XNzd4oWGxbXCAntKwsNTv23DPRj4q9miq9W8niyv8VRctq6mBmJ7ByVXC",
  "key36": "qGVFEUJVCnpgKdBssy1tkEW5mADdpHEu8wEeNozW1a1MJXkt65Z2m5RDhoYkz6FTpAuAEmFwuFrwrLze3uKwsGa",
  "key37": "ngNwdEFcBvdyECQ8xkRBFHAwP7mc4FiPnY99bvw87iuDhh9oD5cqetT4radDBHQt13txn4ceTXTyfxkjdFbrGMX",
  "key38": "2f1CyEpnDsqL9YzmxJyEnSh2iTnDfGaBDyePayATg7nPduAwsr5zHGb2h2eyZfrStSePG8YvVeCYCx6YVYpvzYSS",
  "key39": "LQ6shKXVwmNDptWy2YtUwxgRWgKQYxfr1UruCXADxuUkoAHKwUSB4Rstee6d4UuE3WwyewDwzdEiPo9WnDUtyN9",
  "key40": "5ZsZYR5hFs9cEQcttfPADsfYxcxdhBiRF9hidvHfJ1jbNpFEA4X2aT5H8h8Pqriv1AArG3wvQB5wdCuWMzUdvC75",
  "key41": "2rGqbrPnNVu497iV6j1Lmko6UuCzUuismPUzNAkquAgDfTeq62qCLGA2mryiayFtzeXXBBNx1XEA848FSQsyjUau",
  "key42": "598e3nUittAECmBNVY1c91Mi1ZKGdyhocsN2jH8Fe1XhhPsoXpEgJZZQ85twZn5ZAhBPFEjZ1C3bBk5hm3eCds7K",
  "key43": "5Xun9k6WF4fE54cEWiujXTAUNKPFk3X6pyNn1sSEpc8KPF2aXV1LGUvSU4kRxDiN7hjjicy6pwDAsX3DMejhZ5nj",
  "key44": "3tVzXJmTMSGMxpBXHNFDWtfUi2uAn7sfJc3E1bV35ZqwYcyk9166LzfW2Z97sVP1dAErD1dptZ39Rfm42ruw4ts1",
  "key45": "2qK2hThBbTT6EYf1nyCNkXLRZUq4gdy59w4tZDmnobVRA27CkV7cFwuGWGXghEyeMzpBD9Wwy3mg7pU5CiBKMmyh",
  "key46": "3GD5HMn9FtTXKDxsYLWvc6xvXYe64DQHHJJs2DqxFzGETeAYeV9wM1pAHgDvg3HWXsbhd4NM9VspvRHkA6i4Lebx"
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
