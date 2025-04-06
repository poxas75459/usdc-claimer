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
    "2mtwSRfkiH6dFACLhpx3iQVLxnFQeZjeMjHQbVdSMP1thcbLdhiouTpDoz2PecXgzmVZS8BeDx9oBHyMQ3TGtdEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65BBcfuthh7Kg5jzVzSfAuzfR1MBZegeYWFNPfewjGk4dX2XDJtknQtbsbdvTyf7P7B2iLXxYADV4QGFq6kmJkcE",
  "key1": "3KXPBfj4VE3qkyAjrr3so1tqVcDNEMMokx1vNZ5DjXuNbhHyAVEuw7kTVhVdnWcJwhzEDBp1YZvKyiDMzPwhRLeE",
  "key2": "5bpKqhGETjUX4rhcSWZsUgNj3CnS1ESZGcvmZhChocTejJXGnYb3BdGqxjRn823tb1SRnbke6Db9YJRCwbBwze8j",
  "key3": "BqdztFWGq5YEQmsS1BaHTaW4o4TJE2Ga7YoyraAwSSzdxF3dDUh2vNitTa9T1y5VY2nCeEbgzp2SKQSRunzjyGo",
  "key4": "45BaKqnrhCrK4ZMxAHaNUrLSH2av3v9yN7RzReHgBnJFqn75hJEwU4umpiMqiPBcjTkXgZPJMzzkNuWLZ1vAM4hz",
  "key5": "3FfoQh1ynFDVzLSm3z81G7Mn2q465itgeywax5TA4beeUvWVbrq5qNpVwQZgL9SMUDysAM71WYi53LhUUBeXCtWL",
  "key6": "2yqjAApMQMMP8ANfrEyyaabUv9YVM4k14X2tawL5GrpUdcJbJxBRtAYrP6TarFStt5CUztNZC8XypaV3udvcpyDc",
  "key7": "5H7iB69xNwaXeP8zfmvg6FAPHinCposMzBZBvyZkcYMgoZBKwKX82EUGTxK7FseJaxFiA7DxCMF873hbP8dA13jV",
  "key8": "59oSWZvVg923moDFjVF3iPjKUKwcGyspiKgwBvganPD8aZKvNP9QzTghJA4qW948vWjMqky8feKsMqk2Ngz2geDg",
  "key9": "5nZFJeFdb4etLYUjgWEibpeUR4QCZJz8CZGmFmmMzmPHaxfZP8JhVYBMymneXDEuw4dLuej6hmVKojJP6ZJocsu5",
  "key10": "1GwCD1RiMhcfwShqnsR9LRrQ5QYeBuiwiRQ78No7hvMbFkbxUGhfGRJA8SuJiKVUX7TVrCBo2zvdVkisgceTugE",
  "key11": "4ukF3oqePkFw6LJsQ9Pr1HAk4WVZMxWYHuUbKbWmSfEyNS4jZR1bBRoLR6tuy8R1W5ZECLkZ1zDYPZPHefGAh5qN",
  "key12": "2VU4mTGPPqcdW1eHvgdQyrXsNfrzcbKGatgk1PkyCasRBdB3Snfx55kAxfT2bxQdt3K963RqG491CsWvMvdYuR9v",
  "key13": "2wRwZmbZrJ3NgXAudVMGXrw8jnfNrVq1B5Zi3TVDvMJG745ygL19g92WH2J5zpXKUc7jPvYTWrxovu7bFjdbq45P",
  "key14": "3RHPuRCWcDKqH3FMXF3nJ3MhiicuymLBrBsAkkeY7ZXM4xLcDFN9aAxQMvPGZDKKZ9qz57viefgLvJARMWMXycrk",
  "key15": "3APhLACLfPr9LkLqxhcGE3chdZX9P28MyeeQmRJD6jLb9zed5V8sr6dCwQBPNafTd88Dpwej1995VJ8X59Zk9Axy",
  "key16": "3gZGXD7SnB2NFimugPeDVF3GaFjaDa2A2Lpo7SBVtPkF9KbJZazpTMWtUWWj7Wc6VGGjxMmcVytZn6bNsCQ4E33A",
  "key17": "4yRDgtpZMMbJZirsRQMLdXMbXHPUnii7fBSDHpPpqt779m6UHRHwzawAdEXWCk5ToUQEarsEtxsBfs5js6v7yjof",
  "key18": "3SHfYW9vyq3Ji5UP4Lnk8pBk8UnFMnuzAZFkH6dhaDwtHvf3YkXtBqmXCUAybfvdNe3gifFXUPNsBb3MxZE37Xys",
  "key19": "wdWzHyw499Ltiju7zzYs9GhgUCWLLzkoptfVdGJeaU7xs2gjLWNWAtLzTy1kJ7mFjqPQS5FQnDrzmjyAfYH3DXG",
  "key20": "5d1pD9HY5uRbw4LnQiRhYjYRiKVrq22gJZM7cXZ1wbcSgvZvrcnzGMHD6e5fpJX9AWfSDjntraq9KVWXBH63fNa9",
  "key21": "61o3DDfWxw64satbx2pd2Dw3QiH9otvXj5iecXmwnerENteD56aK9dEMrAi8ziJZCxtsUjSrBjb6b6nHWFLvFiNb",
  "key22": "4H38YXphpKbmBnbeFCQPbtho5Ft84dz24iDAJv6YDgVnZMw37GsHDkM6yD4aJaTvjiwboH46e1LZSdMfaJg296w2",
  "key23": "55JeDYTnNuZJH8EZTrG5y9ikPQy8iJ7cuvYVQakbjvDh9xmig4AuVhvABaqbuLTtD1gqgva9vqqEvDqpZo24bg5R",
  "key24": "HWDB3UR18nfbTtRp9dTQdeBvM4yM57wFAuTJteBsxYvWgKFLCzoPVVLKaGjrG9Ag9RttHEFfQxBfbCvujXRWAs4",
  "key25": "vd4JSwJvUYN4cSUqetnmJeNYgFmu4z2BjbQn3yxAA76UuZegmK8sy8Tbc1fmEB5BNn59Cutg4WSmukS6dj6bzJe",
  "key26": "5Tt2yXdP1kjrpBsHp8AckUJMxkuQMKuJTqrG6Uzrm4Ca5BNaXNMNe11Rb3a93uNADggAHHNABtWKjdJh1gZvVwtt",
  "key27": "33PxYfJSBTa4FpmqXukVGiWs44b2hbraTVUWNcX9KZqLvPiFpW7hTVVBdLWCrEoc7wUsE9J3CVBekacTG1ZuVeyW",
  "key28": "4apzTEcQ74o363rsxmBJkkpgCzovRXxFaFTQtRg11rp9tg2yjsT7wv2MD5rFJawATbzkhFHb5gzTeGCJ56dHa6Hi",
  "key29": "232wREi36pt8g9Y37Br2ph7reZr32UF7dwPVg96hJL2e1gUd9TtvHxYwtMevdJ6T9h2g1HQXruunW4YGMwmLjkNS",
  "key30": "4SC2STpKykUJ4tS2avia88Br8M8dcUbu3aahY5YYBNfK7dPXAMDuy6qdxhSEeDr3L9kYcXBYj56u5LY5P6jAMXMm",
  "key31": "43989e9p3km7ixZNAFRZHsz2opdWAQPGhrwDtF23YdAvEKTL654mqvG2yvZt2NstFJhxY8NJiahDxpEExP73D7Bz"
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
