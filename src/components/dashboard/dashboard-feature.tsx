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
    "3PNzqd18iopnuTTFxLumNTxnQVLm5uEpnRnhHoQo7n5N849wqyatdDH5roKGMgARf4X3MQKyTw2sbAXoNVA8PETB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jTXBNi5C4MN2neLus9LxLiohYjyP8V3cNT5NGeJEQ9tHP4VzoZKVFNz7y8KCQTuFjhEeoov6DfHKEurSw5tbwWh",
  "key1": "3Tq7dMR13Adm65va3zYEVvXXS185L5yk5J2HsEAWsgmv8HaA6oQn99RC1Kqpku9t64yhhUVonQofpMPqW21Dz75z",
  "key2": "4uvAZ153gHTDMXr9P9Zxrv1UGJPSXxJtYiBXQGRF79qLtCfKrAb4LXbQAxuX4Z942rdqBAUATFKyKfvWiE1qZTGr",
  "key3": "4UPRXHvYPiUTHeXHpzczkek6emVmzHcqJNG5EAtituHt2CAL6X5cAD731tYbm1Q4ddX4QBv5UwkZmG7fkAwwgHLK",
  "key4": "5gJ8t2quYF1nZPZMEeSwwH8UKXxgegj5QXPjdZZfHqPCcEkJaJD8HUVw28tVBDbceXH8eVt1JJBUN7mqxya6MLEL",
  "key5": "4YKA1x6yYKcEfJZ7cEvyiKcpZiT7twB9xXsGNYjsEKqua1Re8rj9xETVdYRq5yLpo6fdwYaVMsWN2qQiBKrncav8",
  "key6": "35YbgSn6hSSNZyyH2ogusQ38Mt39Tz8xY8TCMDxWayYcfx11WzW3NxwYmLY6sUS6okJErJo46Hi6cKhY2onLZxaN",
  "key7": "5pVdFuRHg5DeawZcjyJ5h4pcpywApEEUjLGxH2ra2xts57mGGz4MzgLQhD2kaduPNF2QyQf9WL3jC6sG7X7shuRx",
  "key8": "4kSqAvRrh2oiDfsgda6678aM5AMGdXgoCGcyEz4RTGp9M86G9JmX9wNqSbfbSuwgpoA6rFHpeo1mFJvrdW28UzHp",
  "key9": "51Qr6qwQrHTEvmuJHS6SinKwBEWviL7pFbT48NJvF8BBvB5Lphv7FkoZvZhu5n4whfmeBEWfqoQAUrCNSaAsP5eW",
  "key10": "2AaZXPrFEsAsHiWLcsnVyoZJL1fRmAQ7Nf63pDYwqiwo8FwZJ4vVL4C2FJCvt1MgzXKgC8rzbsBjmjvKwCcDjHyp",
  "key11": "gTxxNusqM4rvufhvfkekGCtiNRdDutnQtHUtJiX31wXXnRXVWxJaPcRuvsRPwSqwYHaHbXkk7YwSRuPJemiNJda",
  "key12": "3JoCvwMPhrUgJyJifXwoeC7iqFZmzxPvn7AAnuMp8vbubQuQsJgW6iEeg9a8WnASqn4vZoHxeVTfg1FEoWF3Eh9r",
  "key13": "26oAFSP1vhvWg73yMG6xY64hKFKAn4xQXKDvpr7p3YFv7Xw6Nguvqk1gKzqmCq2Tfs5oWCbVGA3mTKyxCYu2Anvk",
  "key14": "3baCytj3WxmWNdDsLh9iJ9k2vD1LyM3a6CniqbZASSDsaBJve3Fj9TFPso2HG8uMBcwVw1NPWsEV721taN6pkYtw",
  "key15": "46irK3oZeDRijg9x4xvaCcyM4fLiyWsHzNwGpVMpfU8SSK8opVTBKztnp2NnMRCoZ15jRA6pmYYr8dkyAhNzMbHL",
  "key16": "BBmzL8ZqUV7SGuieRjcVoXnfKmhHjGLSB1j4ehBn7ioVqr4aMwN5rPquyz3TtBtUcHy74ZfFfh3dZxj3FYZLeh4",
  "key17": "576gnoSmXq2LjE1EHrf9YbX89q3VdNNtVMTVcSgVZezTdDdbJ4udSfSCpdzAAVaLCiNhTW5Ykjf8LnCSXNVEz87F",
  "key18": "3jmK4MABHxSpnJSyXabTGmqLbFmtQuwrPH2GsC3aNnpykWzWcuNj9XZNy5BHSdUR7NgmAtoPPkRqwcKfPTs8MXRi",
  "key19": "3YEMkh7eA4VPF9AdfXCnMma3JqqD1FkKsXwDZoBJk1HEkpsYhxJky2Es4onLFEherC2HzffBaBkKDb4BBEHQk16t",
  "key20": "poLp7JjpwC1BMaFpqwt3HzoPFPQQBeT2UBDoYn3eWESLsCuTGF5LiMjF7V6JUdxT2rUoCMfGD2GsHgjNjR641vd",
  "key21": "3ehC2xds35CbQfabgd54xBTnHfx8PJyj68RC8fLvGW6pfTY6qum21DRFGXXBgMaBBvYHCmWkycJy3YmHeLSH6zKS",
  "key22": "4dPncDHXExsGUTbMVRSoxb86b4isq1KY7npCDPmwFuwrkaFFq1qUcGQecVRq4ir1mHwh6H22eqTmkd92T2wxPFHB",
  "key23": "4kjdGKmUrvGp5DGnrSEE7AyoPQNr2itiyQ8Ms5EjqqJCDFC9eCP73Eq6WE3CVUdzWc1HW1hBgkijKaRnXza8E796",
  "key24": "2gxUp8nPCXErDueyCasCV6poTZ2HzjsD8tU9uo8UXvy879amfrWav2U6WBXsEuVnKQNe6nvR68mAiR4K47xKibUU",
  "key25": "5nWfHK7LPiC3Ac1U2RZPugEgf1QHaNnqULLbLkcwHzhTHks7imRiLmGgXWe8ynf9asCQCHL8MYcMT1i2VMdTeUA3"
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
