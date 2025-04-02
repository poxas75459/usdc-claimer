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
    "3XxAJ9sJotbFkMZxu4zzoDYumg9kwRGfuG7KBKHMcbWkh4hGVAaPAyE7KAXsdkjwP4P7ieZPo5zQho6asXKsx1vG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xoEcynHuWeu42cs4AEw7TXLVgkhUKdFApGEvg8VHTEW6RB3yXRju6YNL9R46xxpFeE6VAXHrdSucvAeNVZwHFBt",
  "key1": "2oGLKud6VueQSsCdjwLemh9YXuieygnugjbeehoXz7pYwJu5JHpnMjux4TbC2AQSn3gXhAJFc6E7fXgyv7RWCqu5",
  "key2": "65SJ35y9MMtu8HGxaS2E4WqBSo3aHts6JaiDdFhcXa89WC2qEZakV4anqjX21qm7SFQqpoKNboErJEUwC9B9vtLC",
  "key3": "4myc3irxk9KyJ5GusS4SZTQ3KmEt2BWCpEYLT2vbWAAzGBPWKEJ3WPAsofTnUgdd3NAeYpBtbrucHuJhSHi4JNG2",
  "key4": "4CyqvYPeGuJKvpohwikX7x8A5Acs5qrFYWW13MGLq9D32cBpR2oDU7tJiR8vg7oAML9HQR3kepRJ543wPAN91arV",
  "key5": "3wdHPzsUUwzZyfxcGKqNQhFHB7qfEovQcFr8ULgm86rbx7Nq1y2aZQcJQV3bSU6D5fU4PXTU9qwAYZGEhcvDD1Qp",
  "key6": "46PjX94Yz9GhAAWCkiiRtWrBtyJmqkqq1JFnaf7hVwpmrzzkNT5hAbggECBp8wvSp5Ws8D6oYiJDNLYF5iLdcgth",
  "key7": "4mhumm3SNXmfLZyLmXiDtADfkjiK4RrJczNrszTy3okNvZEmggsZRj2cCNVzqGRGtufmuCojEXR1P6VyMe1iSMsf",
  "key8": "5qfhnQALUPizXfw1mjgabqSzsmSKjM5wzN1GtF8fcP1ycLjNsyATBya7vwFkS4ZgpPWMQsCG7pkTBmsnf4EmmJwj",
  "key9": "EnZzKJNDdd9fgEQ2BW6h7835igESih4o3XJXURVAXcBteRujHPpxzRNsfryupQbjxBFG9QKDArztbuocJH1DHBX",
  "key10": "5RteENZ5LEJXk9yErUTc1n9pR6YBMSwyfAveZTkjxCFo2J6iTYXvWAP3agT4qQ676dyS7ajZmseL3SEexpXYhBMm",
  "key11": "5HgYLHRZoR4cxrSdYx14R58nLJnAqSDeUtznATEPKzckxVND7vNx82NRZKkUp8U9FAXhHydcTSs4APbpALQXv6nF",
  "key12": "73mVyvBQREtbcEme5rUgccFL4qsQHu8MnTYfbZh79XK5XPiFvfEor3HiJqGQsRnzDwjCUUiDwgrxCUZPEGHGgQG",
  "key13": "9jc2n5huR7xUpVjmPQq1zWqXn59snMSbqy3F5Ydri56WtLWByQRQyNhnTydReNJQQ46hCzdM9mVDu3gjegiLrkB",
  "key14": "3uKXXe73otqawLcwmZFT5dto2jx7AtsKDJRLSvGq5i6Kf5eXAWjF8yujGZePWdHZpFdFMVxSw9xAabr37skiVs4y",
  "key15": "3MzrTJzffK6yfHwUehxdZ2PRd1bbHBQ5ZtQPkWtrK5NPapXmgsAjUTG9gjRYZKbTMHA7j4aiQE56bv2SdkhmC3Mk",
  "key16": "FYzZWWZcUXAeEnyVHaTosNooFjCxEQ3BRFHfow8LNixT1LYYpx1mhdcA5LH4B8fUDHJRQVcjGTT4LCjUMuupUxA",
  "key17": "2LjQTp7vrh7CUv3ofMJhGfczFqg4z51KZrbXnmVuJfjGTVEBE2iCZMMw1Fzic2Zc1RGkyNkAAdRryweZu13CTsFT",
  "key18": "4xwve2Gp6RyVYs9nyRVNPdj2oXd9TRFUaZTC7sHC6bXzwf5KHtACo1oXUFPwu1aWSWffT2cAZbkZ5tm7pSyjRh9g",
  "key19": "26ttBui9gFQMrSMaYMf78v6kGeipQh3T7evjyJFxh4hmb1yuJXdoEm15Z17sf9cm2t9Jaqq2mgVJDZkmG92FkR4T",
  "key20": "CiheqoWx3runN1YjhD6kYuBZmZ6nbfsPemGwFhAnpTBRobYN2y8h6PgykArfe8mKgJF9RSs47nYSrL3GdnM23eD",
  "key21": "2kBFtvSEYMaLRPQW37Zu8xQfNqgJfqsvkjvY6Fx98J6ipQ3SGPt1za9DkymX9H1vThMwLi4kgmEt6rLC615UBiLU",
  "key22": "53Goj1XWYMvKetU285e7sqePLoFtoExjHuBuzjF7GwWKeJtZWZJ88aviydVexffV5KfQqfZT3a4Ct4tKTu2B8VoD",
  "key23": "42n1Z78VyjqGAos6z3fW3bV5kvYHvG9Y3X1HYrL4ihT5Y1qwwp7TFvCuhA58MKZapTLPoPuyeLNJu2wcESo6hjqs",
  "key24": "3YCekpPMCwwDidBg8k17F88QdminCPcXYt1tviaNmcqCQNe25RgtDq4nLH45BqzHmPkRkqdknvu3zPHhX3BjkWXm",
  "key25": "3ub3huSjuh6fnmEweKETfgxMe18Z9U7Ee77CPT8ivSkKdV4QsdeJXA83QP6gak3NfDHZ9AQzzvQHZsEt3AXzz4gE",
  "key26": "NZ3wvLYoRqVWHTMmwjumraQjjMXwmaQ9hNG6SEAroodrCCp6v5m6hRssQoK1FoDXgvWKtoaz38eH5foTMYnC3Cx",
  "key27": "3ovVV7KbVBxpzSk1MdiYs1QxbRjPWwSvsvPuFja1EtHihmTxTUvHCFDpQrgsgcoot3Xz58d4zwyg2hMmHdA1Pdre",
  "key28": "3ZbHW6GxnXaRjzL6PFCAf5SBJwmmRnFx6mYgzsrFe2KixwZLGcBMFn69ei7DwfPz6m4TJ8parAw4NyyxBWxabBi9",
  "key29": "2HUmxFF3nmN2XemTfnJWGNmcgnjEFhmoZRrWrshGSk3tE6gELy2kZ1qCySMdmYSUKv8PMVS6gQDynb7TpKcJLD6m",
  "key30": "4rjtrAgfYsnouVv7sVZnCt4R7tRAgZkoE7MaeUhuYSd7EkhjbEk2rGizyvNXLNuQo8qxgqp8wjEwsXBw5PtyUBJi",
  "key31": "3E1NaQec4QAQzhXSyfGvZDs6qD5hTyYT5pVaqTBp56FkKaqvQTK6TFgeqbg82pzcnprJxm3sogQtdCFTNT4p6QFK",
  "key32": "4YyaAnjQqMv5kZpDQyVEgiTYMyQEJ4qWH4d3qwGZXGKCd3PftoAdTCv3W5dShBsuPDKvq2nSnfmdByez5k5EJAfP",
  "key33": "5ygFV3y5g1nVP8GCHvfkrBeZ7eJmodc377zYTGuWXFsS3wRFf8FjQKyBjUSNvPXURJm5WPVtvF4bGv39MgWnLF26",
  "key34": "5aAZXgLF4t9RMyLRZEP6ayRZkVQkd6bbgjGWX6F3H7R3W7aHbS7fnscQzSzfC4KZZwsPHndsSPp8fuafv6W2NQby",
  "key35": "31EeUMiCHirbWscXZ9ypPgJmkKQiPLChjVXCzeDHtUZSB3iVVLLQmFDY4VzyKcET72AsSdatTJYi7BNve9xeEir9",
  "key36": "JErEn3kZ3AMXsaD6ovuRZY7xaXUezpAysz1uxFqNA6moWyLNBYN2MjZfGNR3xMme5iZLopFigg3UcorHgYed33Z",
  "key37": "3k4MJwsXyM1BU1hAm5WVWgc5iBEDvrcyGq5XbeCiCpo5pdN9kK2bV9yEZeDLtzrqNLMGJM4LjFCkEHZ7HzUNhYnj",
  "key38": "43Xxqk2hpmkGpxvjyH81ximmqgPqLav6py3ne3fZ3eFjarcx7iuXGwiK5ZdP49sXt7A1Tuf3S2fqZcty5kifdwtr",
  "key39": "3VwTkuE88PZGDM4HYPh4QVTkMnqvuDLJEriVBdzkdw7b3bUyeX6JKDa952Q4qL6qNthHTqiHgvJRi2QNAfC5aQrz"
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
