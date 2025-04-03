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
    "5bBu2wGySs6GSd94ha7fR6W1WTQ69k4bJezhkqxrScSBfZzZrSXd5L1SHPtanNCDDa5YHQmgCxkysRNAG3fsGekR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3opfZK9FSxsTHTkg7e6MLoXEtQW5Nf9uWcP1yhtmb6i7NJtZiPGczWcS5mbixYG9pHPHAaqammmRDtyd5hL5Smdp",
  "key1": "4oRNgJZjytAcdvMQvDmuwSS94uSKTzV742pPD8zaRfFLyVo16vz3CspjDg4iw5WCL1DVxPbc5tTGE5CPGanji3hZ",
  "key2": "5FcMpY2DvGQC876DGzrduBEWJAxnnrHWBzJHq9KXWTyGoHc5TbZqzjMCQEiYG5HchrpcbVgWT11SG964qTni9gU5",
  "key3": "4UYHL52zfJCdS6L2D18KNXdxk8UN2AyAkikdFho5tbAHw4puTr8f6xX4mNtD8sbmPcR9SAK2KC4MtoxFaNdowzQv",
  "key4": "2LZPncMvfbBqNdV4Gg3QH3sN8DY9kWzpS1FwoyR4bRtZkvmGKGbKQqDvxbw8cygHUeb526fBDFaZvGtyPMSriWyX",
  "key5": "qxKhQ8WUpju5MP2DmwPbBjt8tX1zsx2Tko1aupUCv5SYGPJzaBE6hnC2KK9cHvRS8ztgZZD18SVMQtdocLQX2Bh",
  "key6": "3bUq6BUmm5MPitPy5DVBuMjjTynH9GCC5YgV2Fw8nUskdda2x2Ux36uQDfGxQexF1Umw1k42y2NqkQYo8DAtVVAG",
  "key7": "4N5nd2N2RT5y4LzFpkSZ8axpQ5shpTbZSXyYGjuFJFq8U4YNr16SjYTrUDCYTMJGym3524V5HPjNCeU9kLQP6EDs",
  "key8": "2j1FzCYBaMsu8eNNFmrzLcUXiEH4ktewY61FdWCA4ogV4gQxitAqzCtZTteXpm6owk4Z5uJRwR1Df55ypeQRpoUP",
  "key9": "5Cyv9XfQq7ygP85YVe2iDrdQGstzrcwid19VDtZehscMciUhGGUZjyNkxSoa699Fy8SUc4egh6NTbJchmVcXEjqj",
  "key10": "5c5fojbhoWXDB17szPoP88Z5AE1XqTzCFvYGixZ5XGtwnLuM7J7LDaqdYJzVxygooJFSVvN6UJGV4aSjcgd8PENg",
  "key11": "iXV9yNYifQbHMHhx7W8M569UetFWMyiDY1tmmmt2YiMss214SPZwPWm12HM7uGMLBHv3tqePkPqK76fXAhfNAwG",
  "key12": "3FjZXfXCBE89hpXZSV12yY33DE3xzesz8wN1ZgbTiZjShjRpgJNb3bU4tHZowbo7eCpv9pr7dxz7Uk1HU6KAZmUE",
  "key13": "4LHjv4Z3SqbfyhWy45z6TQ5qSWfceqh5MMUzzhCRq42mpvYNDxinyJ1uDYZH89E9Sz2Rb7toB3UGbdRrZ7CCvujf",
  "key14": "4vTJ9MKVUzuggh9NVuchcWBhKpfKjEGAk5STmJa3QCUtMPmVyo8sU9Tf2cjV8DKcii5syvzKwNhaWGCCdpuspTyj",
  "key15": "5uASmAihuijjGHc7GsC5LhzUQVUafefPJdTv6AuU8kjmqjfigQpe4NxYroYi5JiGLD52W8fpn1r2a3ixd1b72UbL",
  "key16": "3Y1Zb9jyQrinbY8XkmiHHRgNsKCwRAfUMEzD1BcQfCFDub8XuBJSKMRNQqaXf3144Fyt3PvEQTewy5tj5yR2AKCf",
  "key17": "jkQosQ8GNe49QvLqbTDStzzvRB9qDvCTdfwkK7tZ2P57qG2GSEjCDW7f2uCaziYMGW4VXKqdBLEzmXi4QhMYMMY",
  "key18": "5tPdth6T2PgpdPotUbJBub4hmXnBMMW6muGzcJg61JwEVnqp8UZQ75FgNEdAvnpJBwc6VycYLX48D7ynQdw16tna",
  "key19": "23TfV5zprW8awtufqXvQAHUT4c5pPixXnvAKVsCEAMnGyZpdHzXeYDF6U1FYsSxjXmzLVbne6sEgbeVhVXotmta6",
  "key20": "HZckAY9AZS7mP6izwcGz8PoKgzABogjdLKFKbJa7JJhrcgWRJYg75fFWkrzhDUSDmJL8xWSi2J4fVyGKpVcwsoo",
  "key21": "4TnhzjJhecDkBHPMBEspcJUykU3fdbnF6jAwYNSYuAcbeMkq4dLATPeiCjC9jDEuGaf9MhedWWDex7yAzywqJJis",
  "key22": "2arMmHVRbF2igBcNvEFudxWDm1Fy6J1bvjxztwrG9RXCa7gTBtKDaj1oB2TBwwUZNTTnU2GBu1xx5GMKho3tbQQF",
  "key23": "4aw3QpTkXNyQPixmdLjRczdoTAji46XUAhAAMfrA7VMxm4dvxgg5DVjDFpVZHwc2FmLzX7cKZgsTm9he1urLdHH8",
  "key24": "4y12m2opbw2mo7cm42Z6LgoxBh7eibHqYCz8uS4Z2ECtDfppcTfxrR2KTBuTXoga2Z1pUR8JiibVVo97Pa7oUFsL",
  "key25": "3YLN9yZW11UM1gGPanpzfW9ytLe1hShNThrCru9RUxnpskXB4nt6BmDL3F8EDvoJfb8XTtQLDeG7aPE6ANCGjc9b",
  "key26": "37n2ZGuk1szYWPtBejrauvQpuhtQd8aRLpTdbb6hEu6T8B9JW9HZEuf8cacAoitpdvNpHHa6HEtir82JmJbkZakE",
  "key27": "3rdZzjNZxtsxyYfgXUxTDtjyfSmwTBP9dZmVZZPwKrJCQe4NY94xec9pNNGBxKeSqHevLxNvuoxbW6S74oErQGJT",
  "key28": "34HumziBQ9pTURhgqzBZ6HSfCyjQtb4gLgkPYTgCrdD2aNMpAjXr7LSXP3xUQ6MXBda3zoEGmEKTXcT1t94MKCmQ",
  "key29": "54UgjLCwNF1bppHCGbe9L4RUUWguBpGHJM2USZ66ZC7euaMgYK872mf2CvcWB5eqEiCg8XCSfWFX7SKeATPJUCt5",
  "key30": "2HhMUVwYWrfjn1CqD2X2FnPoneoaGHQ2Aj3biSqCaKsF3WtREYXdR9timdch9dgm9NnxH1UJEWXB1ABDxFKnfC9q",
  "key31": "2a1rbDfmAzBbAtSm2TSFvZr74gk63CFXrjNHsJRNxVtCjk6EYvzXmjDBHvgXv5o6ZGViRV4nkBnEKVV2S2kH2gYg",
  "key32": "2LeELi2TAuNkUUJgP6fwpr5ZZT2FE9YWfCPFmN8GsiWNBhqD164tEGmVAp8Htu7kx14oS9pWpkoRdtYaY9fuF6yM",
  "key33": "4MRYzoKPN18qvTnqhPDRUoA12KoQWfuyeeDWBbHzQqmksLYgHxewW7ztVFW6RXPWxtAYYFviiMLcGqcRTXyK4i5c",
  "key34": "ALVPhkW8KZ9YF1WPHYvecfpGBFvfyWSwXi5xyFNEA8MdSge9Ba1qn2Rm494F1qQwiUtAcs1bSTfQE915Xr5oLiE",
  "key35": "4fLLb2LiDxsL4jKW3hdoEKxa4GAb3kFAweyw2ppMwHCF9JQPwfvhGdW7zgpDpP9jUPDvsCkKjX7XhkrLRdrW8Y78",
  "key36": "2xPWAPT2hP8TafPJQLM9HHvJZdXECbrcxN1tK56Qfe8ykBWZZwBbvXaWfNh5rdn69B2fWnUTbNcVp3bYHin8WsGk",
  "key37": "67q41SUnqtPa5VnVDCxYgeebnyGBU7WgZZ45bq1HJF5JK8xQ1fXskutr9TkEsUzupb59Vp3E12urjShynvpsuFn4",
  "key38": "5P8yVYymh9Mj3DmGPwnnme17GXVaYD3oJAVeos2akr9v2ApENMN9oCZ937rigVZLVAmvaJuSKzHD8Rc4pw8Vb4Xm",
  "key39": "4FTeanNDiEHd2RFRns9xUEZYhWsvZFkvCkmEYYyVDT2aL4dUGVaJNohWRmyGPmZH99P8ASS2e6Ye2j6F1zeP84AY",
  "key40": "3DMQdNVPDPLQQaTdzRyMKsVjZtyimJmkZ2LXdep9yuQjKusgboqG3EdLYMkxZDFkAQ6vNHnkBZywrzkNvF3tLD2b",
  "key41": "3zyPVpCQ192SrYNB1xuG4MdGmz7H8z2sn4ds4dmcV49KtsFbHdxod1LyHHkTZxtyQqkdMwRTx7j48ay8DaQqmN2t",
  "key42": "5nKyEv7NEvUT4He7JqkwCGvf2Z3ZfHVvfnwtmngMtBCLgrs49pA5BnFNK8fCACnDLC3sCY4tSZum91822nMZCAU8"
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
