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
    "XfNvdmSSbQzFdwp2RstCmBpNqwNVoGJNs9yEyBCoBGgRZhDAtdaiiex2wGh9jSQuK46HLpGJggsLQaxHUJvhDAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WatqFe7JmtJhxmVxkkYwJC995GvdN2F6D9z2Gst5Y1oZFrSbyM1g3HrU3r4cDTfHy8W5xi2tL9Fso4qPpgPBqFX",
  "key1": "2Tm42eNcW8U4qDt91LoxprNDNtSB3M3NFST2JxZizVcTYhJ5kNA94DQTKvgmAsh8FaZ4i4UjCQjmn4N28z6BjHfQ",
  "key2": "5i4SF592WzoZyDvUDeh6qcjdkFh34jKYjP6ZpVzMRgsGT9BZ8jcJrQcCA7VDuK86fMxMzUc5djJQ6D5piJjVK2NV",
  "key3": "2soraWLSzKieUwofZdzPcF8kkBHGEVCWCBLey5wHLtCoz1gyxW4AC1Ef1GKniuE71EsZasEsryWuGbyLSkXkkHh1",
  "key4": "3Ajr3fjWKB1VuDUYvb8fwk9bpugVCU9VEMUaM9KG8prJL3fjTwbYSBi28xJUfn9xKH75VATe9WS7PwVyS5h829RL",
  "key5": "3nrtoaWRkuHU4UAK8J7MkqRGz3ctsLGfvBG2zuNSX87yHndJDHYEi8Eu6ToyJJwHFcLpQJ7JyZHQLH5jtqAqquW2",
  "key6": "2ZNVCZkiMSmBAJVbkD1ktkc1BToi2V5TAxFGhyjiz2dvpeZbHoUuekSyW15iMp5oxA7Lw9UTgTmy8RZy3QD2r6Hn",
  "key7": "4FpQASTMtedoeMRGFkDVdQW5FsvBspcwZW7rjjfBRC6Zuo6UYPsAdR8Q5Z83fFSfhc37kSHvWEGK7uRUi67Nmzn",
  "key8": "3M2Tzn2TcdnYhavxuAVvodgRBS2pfnNNQHcT9svAk1ZcmeW31PV4tCVgasDAsXgA6VNRv1Mu7dNBqpNye2ueBEYK",
  "key9": "2AjCiu8Mbt6ZsRejojnpvXSKSqWg9bBYTnkudK8rky38mKiuhE7BZBA1cT5UBYggKHUELQ2qHUnCkH22992i8Jjf",
  "key10": "zfBdyfNNsrcTTZKcgt1JGDWzar31ovvBNEB2UvGqJDnb6dYZ43MdeqXvKNvKHAY7aUBycZBxYRrgfvZU2xbHdpF",
  "key11": "33Q5VSAUiem1mPmphGxG2Z2R4qRNJgMAjR9pvRReMpNHqsi6XDRTjorwRBeD5a9SrNzhTYN3kpdmdNvMraf6gQy8",
  "key12": "5akYVgGXq938uxvrGwcteRmDcCvKuTd9yWydoVSWCjGPwWAHFbshnjqM5Ps8VfmN55jPsXrNeaufoPszEX1HvkU1",
  "key13": "2S4fhNut6Yf2qZMb5RdjxtuX25eQ6keMCAKdKCF7dh2AVhFSDLv3BfPEvB179BDe8B2T1YXLeWtPR5Vg2ab2ZGH4",
  "key14": "2rvjuY2mqbRqAR5bDq9bTEgeXW7DYwxvLo9yAvzUDVs8FazT5KfRam7dVKD421kVYdj7sYyuXTVSjL7zYtSv5JMi",
  "key15": "4uxP2to967Ju8GjeBSZT47BkhkLaRKYU2akJRPszJysU9CEjCTTGJCpdhHTDu4tcbus7q3nvVzcz1gL4Pz47Yzut",
  "key16": "GwcBkrAuWZEocMYvrZfuPtUh9jud16m1J7gpG8wTzAVmp7SGZgk36wGuxCk4zP7QgEBj6kib4Eyfq87f7BFfDVf",
  "key17": "5NWjUB8NHYoWYMKgrcSccv1j2SzpzaRVzJwSMhcj7kCnx25vH7sPzRf9zUL6qc26nrW33XAnkjYWskNkh2AP4kug",
  "key18": "2Z29jo8KxP96EVrt35VZBsgKAq2gfGbuCtWHaKRgp16bmviYtJSpTCUJd8N7XUzUQomqrjvigXGw9pQcCQ6Loiwd",
  "key19": "3yj2DbRmFn2scu5y1R7PnBuK5LpSGp1jyKUzqXmJpAq9TPEgYdbnXtsGWXeToH3stXEcHtG9MjNtJJJkSpPDw79u",
  "key20": "25JmsCexsjwCCGeJFVytKFmTPt4d8L32VK8reSiQwxaGQK1aRUfEmh9i19yvw2mdiE5c9jwUpsC2vRVxt3ctisXq",
  "key21": "4GbfcwTCEagudVFH56mKjKnc353XPNKXN3MCwwuHKdLRk5ih73YV1E9VcEtjeiRysogBFLXhVN6BbHBQadQosjRh",
  "key22": "Xr43cqsDdWFEAUd1cbgjEnX6PvXRWJMvSbRdureb7VSGLYF6usmqWjjE4HyCp3rn51dbi4Bnxxn8dgkBmAZUThC",
  "key23": "5sB6yXxgKaGcDJRdtqy7xKLDBxkVBghvatzg6tbPAczD3eWfL7sg98AUvfKvoZnNQZcesZqJHXhQyFYXHZ8Kf8W6",
  "key24": "3ojqkrJ3axwt1kpB7bpeEQTaXqwps2JuwtjDtWXcyPEKUnM7jiUHpTydQeJmF69qCeUc962tPvoPGZt9FWKhUZm4",
  "key25": "t8bcnC17oK775FcF749YoZcBsZpauqLwZv7W1LVJDk8otvcvZVJM6e9CfkbEHKhDvtzwJcMnLx8GWH27Q2B4Qn4"
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
