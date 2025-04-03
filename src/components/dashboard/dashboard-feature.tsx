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
    "2sEoPi4nj738QjbasS9mCyUPBf6kRZLssEwJwwexe9dfi4C47RaMMoowyWrDXExEDTBB5AppNaKv13nXozja6aYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TwpLubrVMocBNYB1SfJdK7Egqms2ryDJLifkS8hj3hJLshn9KrLGx5BjS7sAtqRYARNftJJuTU4VEEkQkxk9rWC",
  "key1": "4JyDW6DuxdwhrxWQ2npcYdKWA63iWkW8E5MU7ZbVnxBJJ9rqEggCTZ4FCADHyAGhzPTqxcJ4bWeP3EA9UBSeVkG7",
  "key2": "4fRTqakAu5z2JBvz3nkjprYnz6crrKV8byNLcEkL8Yz2teGjJvBRSCNkckCLU6o7Wa8ks23msj2vmDGRUEarkgTL",
  "key3": "3rDA8BUvpyqbV8mVsnYj1tohV8gxuAUN3GQxzkYiDMEKaK7vJKmxSTGy9ACdEwtVfgYCqDS9XJvzGvJ4RbF2vxAc",
  "key4": "4qp2JkrSqADBv9hbsyKb3Nk1CLhmvnGo8euY8X56JQN8PXYgm5a4Ra8uPgcycennoUZHjLFkQLFitrqBzsDPbj6i",
  "key5": "3TV6N9uWSFtHMm18op6sq1nKuQ6rcwypHAMnjW3ybGMNsTGQ7nUL5ubLGAMhaamtpE2v7MvZfGeeJUqGsZxcQUio",
  "key6": "4CybRwzU9JoBNsF8tGZ2iBD7pCvp25Sg18pA5YwQZKhAygNkmLuUpq9kcmZi86A2pBfQHGvng6tbUGApzv5wMTmr",
  "key7": "345Bw8cq4xBkZp8TKEroFX21sF4KG93Rcs2s4FtfJrVa4xaYuMAEeL3QaELqvJCpfztd9mr5Q4zAwAKnMmLPvTef",
  "key8": "3TGBpUnKUC1tyFoMphPABAijipyyd5984dkuQQiWbgXASA4yFRip1jmGkgXAhpqDJvP5uUG96iWPsXaufFXcTBNm",
  "key9": "WmwhgpWi9G8mdnh33hWExckW8kCub8muFvcZ5SkKbDpbEuTE3TKkp5Mynqi9oUzD5WuP3fa2t3oEryVpgFFWAXQ",
  "key10": "nPoUDwS4EvFdWXAkvqN7zrqNK6sbMvGVcGmcVbA2WPWNB1c1Uv4vP4zq7fLfmo4Bbj37uUShxnMndBRL18LQegU",
  "key11": "2ge7utGkyW1WzujkQVj8gU3NpqYxqetqSLpR338DFL8WV7kEEgqZfnLqDc7ZoXtrGwfAE83Ed9MuQRSUAg2G73PC",
  "key12": "5oyfHmLNVbVGtYcBv8jQW6Kat86Zb48T28AgLNXg3FdGDsRzWaYWzYxRA7545YxtGX4GihpwHjWAmTbPAhcysKRK",
  "key13": "2gRAQBvtzaBZrc59pf4JdHuMvke3BWLr6vaystH7R6xp1JTtfGD5UH4taR9ZKhz7D1jgfQW5E6hLAkvzdgjUVJAG",
  "key14": "64Ag9hgfghJWMd7vHzi1pCYGnkzvkiUdXrNDFQ3z7tVKJif1GKRZreDnNC1StnQFf9Yt8H69rrT5sZdCNDhhTPP",
  "key15": "PfpeLu9oV5JLGjGYk7Q7WVTGWGHjbLh3iTpKrRwai4jNWiTTydjrCfuCvxug4Md8rb51vSQPJHTJkCWA5HeUXQe",
  "key16": "zs6yiyZJbSsjBsE5qyS5jYqZX96PBPvnv7usTzFEx6S6mxocJndim3EeM5rJLoddGqhdVwogusvg8jp4B7NDaXx",
  "key17": "21VmJqRSUQTitHPVsdcwLLSrSoPDBCWUu7oZAp3Wgmj7VyTMc2Y2pqrUkBxbTXqYBpu3CYWy75NPd1ZXvQDDE5Ai",
  "key18": "4JBDUPegE2jmWr5CD2R3aP35jkh1Vpj1sy9sMYPCarwWCHns4wWw8tZfVhBkqWqCx74upRKt78e8VP9rq7o1BRV3",
  "key19": "2XoZf866kLTQDbQUPXFQbTZjA2gqFGLGNPLwVR6vz2KhPmjk43kbdfxFDhpNAjFXNGQeQLfMAe9MR8PTW87CzKs8",
  "key20": "zoAM88TtMP4gNpHnEP86Tp3qS9GEbGA9ihLBDLNzfaUpnwqQftEoHFKugxVsW1c1Z1aH9A3G2N7sp36UQLSK9F3",
  "key21": "3MxJyJGBxEQU23L9TLT4CHRYEecsidVsGd2cS98DrX9Tn6kyYsa994Bj36rqshXeYokLzGDB7xJPbeYRyTNy74s1",
  "key22": "4AR3ifbZ2FFQmtfZ4YgiRG76e5VjAxVXAANNujsJAD4ik91R9JgB8DnN8MTic44McyCTPpUhxZ5gKYvNPjuiJBbD",
  "key23": "2zT5gE2jFHhhKUwU2LAqouqwozbMhkmjfnsAKVm8HASejAWWeNxczEupbZ88aYDPKRQQZ2EEXfYm5KQ9YbiuxRKw",
  "key24": "5d6qq7u8LaUQ5cYNpe2pSastQaTkSrEAAzWkNNMF1Nnb4VQDgGpSY7uhSaj9DHpUZUToMx4bq8JB3WvyhJsxYmSs",
  "key25": "311fpExCZK6VA97TzCJXxZDTWo7kr1D8QC75munukG6gPXDkY3iSxAbteDL8LwQPKogMMC4Wrcxu4iGE1UbiS5NF",
  "key26": "5sPGzrxMXf1nSJLEMLxeKNHuGKyUp11EoMSFgK7eBEwzUzbmk8GRZzVgJ56iqTyG5Epp3FjpFqHLiMRe895guHug",
  "key27": "5GHAGZFiYN6wrX57yhYxapRQk9QToGwXLyx6EAbkz82pDeFNdNotsmpRJCu8CRuFcwE8iMp2MQTnXXQBoznFiMD2",
  "key28": "5x7fvFZqyY5VvuAgQzX3rh1nthwh2R5MVaCSSM1GmAYHMdkTU4u9iBw9gw2JneaehMHJcY8PdGmAd6BY8eAdUGTv",
  "key29": "5XUp8e1e5JbQdaW3nhbP5eJsfjHRci6iAkjiRZrfDCWKVxW8rxCYjmNKbGLDpzK7za6owgmNhT5kaoqdjRVev6yB",
  "key30": "5TXvSaRaG3amNVJQkzA4nyK7HYBPSJ9d8fwsQqiZ8ezx7mTKLoXLL9ruhKi33x2qaq4yXjcvT2Vhhyzr2DGAJsBC",
  "key31": "2RTxc87drg1J2i8pKh8ybczC5rhUcKy34oam96Xfoypapx3i939tBTmzBvEDkaGEzrdu8wc4KBvNTo4qHhfCT7aG",
  "key32": "3aEv9NMKy7WrhtfxFPJtHLNf3xNXaxx9J5Y15PUoDc3rbjtG53S9k39BFqt6s3YJ9itHDhMXJmZHWey72nz9zMXR",
  "key33": "2na4v2aQPTgDFPtXyar8icTLFPfB8NgFryongypNqz6ByLvwfyqCbEDBvYZFuqcbSNG4LFCiL1dePMYHUh9WbCX7",
  "key34": "Q1oxCVBx75sGhZgS61hEFM1ZprMTkXASweEB1iHP185LKeA4ujUTPBXAzSqHgzP7BJ7f5CvtTR4La8Hw4u1qumC",
  "key35": "5aHp8j4R3YMSz6HaJPKNw6kJJFUyvUENfFdywfHLzxz27ZZsFHxt1U5msVBWY2QFPUC7hWx8mGkU7HP4cpFtqydR",
  "key36": "3Y2HMhNitiZz2Qkb2pZgWb8ajCa7E16EqmRooidSdZmBWAmJGrcEnPEwqbHSAUwwZdicAdCdMKWF84BpDSs9Y88A",
  "key37": "4Z6tLK1XWR1NhDDskfACPzm4pJhobCBN7FrfHXmNrdEe9nNGKTwTdy6wuhKzn8rcPm4Dg5s13iKSz515TiQNnk2U",
  "key38": "RNuQB91UAn5p8mwZbRuv1iTr1FrWFHXntrQZxj7Akcahw53yYwfY1U4QWvNpkmegr7p9B9m9vCrF4Xt1EZob743"
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
