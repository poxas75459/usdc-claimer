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
    "3jEGduk3VoHguWFeWnvmVT6RxVDD9KQeuQDwQrjoTior8S1mxQgiN89vZr4sbJ8UHpEmM1XnqoYR7SBM2E2jnhxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wLU8eKYz7KY83XoS2EuoVnkXtYVbix4bgqhTpXVL6FGPjan9Nba3gGrdms5NkQvwfQEDVKTsPn38cSqRhSVcDCT",
  "key1": "5fzG8GbiANHTwYYnehyxbN7SVEpsqk6iMYXP5Adx8ATrkCJMjqdBAKcB5bXXUpVyjK93yF8dKGdyxB1GzGXgHrLa",
  "key2": "m2TckoXAshUsD7KS2iqAwzUc1Z6DqepudFDR8Lbe4EBWstZVsevoW8ybzrgVFhaZkNr1pJYZ1y1VaXBrWPnDhLB",
  "key3": "4pxeE8kgsFyWvJiSQyNPGopWLPxt4iVgZ2tRjGBPfWijDkGXPGGDwPJ6K2B2BzAZLGBazPnRH1UkCZK7PjgTjBiQ",
  "key4": "3APvr1SpwQkNG8V1GgY1Mnacuwy4QD3hqinPbJANujX2a2PET4fydpRJPUek8GYzUuNZUuHvL4h49S4QhAqgbhew",
  "key5": "3Zh3GpY4ewGaWhDHT5hihMun4zCTLPYrSEvDeww8prR3c2AxnJ7du5PF5aGYdbHD7v3F46ieux1QUfPigCayd6Ni",
  "key6": "29aV1KwR9ku6DDnMi1MqaGJRfBSRtQzzcy74e7D556CxnsoB7V7pt4e9aUegayPEEymmanhCma7LRQt1SmDW9WB2",
  "key7": "G5VE5R93JGogbr6gTznSrkD6xx3AepMJnBbgY9hxNgq5nY78b9PE3dLs8n5gg1SemjbiFttSC61rPeizuAiSrBn",
  "key8": "ExAE1XE7HFcy6gdKcUacEjrGeD92hUGxFe22f5tU4NkhqDcvoHPn4NyEZ3kQJbPoiPDbdJfZyTnT3wj1A7x3x6m",
  "key9": "5k5tHwchJASpdqo8gMqVPRR3pFXSzM2tiHPUkr3777TFJiaH1NEVtQ8djZcDDPDyiCRqBfHz2RkenKkYxMAcGig9",
  "key10": "64K7wTkuqpdrhbrSptmUbdXsog8vnRN4R6gpD7kWK8kEUUv7yNfCEnaa9DeMDgkDWgwvcqJHRbspWhuvDi5dL6W5",
  "key11": "5XbEY9xKicg9cQN5gqFwKz9Qk52ynGG6nczSHmX4gfJwR3k5uZpSL9ckeYmadohY9kzNiyXndyi75sb2c1YBCFDt",
  "key12": "zL5YfUCJgg5J9sJfJgdVgLanrKPPiiCX6ACksNJrsiH9np1hQYEj4gfwWXcpypGmxsVbsjieAJqDwBQU1wZgMKS",
  "key13": "gz6pc9Zjm65DmcpkhUdVf95msspPjmAxoGY91Unq5TFmrVm3LymfF2EVAjbUyP5R4gQeSiYGextXDAVwRAjJTtN",
  "key14": "3ARC4aMjxS29PEimKh3SwXTqgo6M8Cg5oRbXqhukQ5XB5TfZWDaWduHzoYr4vg9LLAGHnWficWi7ELPdg1oKGSK7",
  "key15": "2poJqPV83xYtuyu95gVLnm1oJP8U1yHyw2AsXPZPFM7x5XnnzcpqNaAQXD8DaWttwdHrKucUG6CmkuuB376RwJe5",
  "key16": "4EuzZuFXAj5SGgFpWcKmppf62RyVjToScgkFmHmRoUiCTajoG3KuVjyLdBpEBgWFZCKQRaxeTBGQmHBczW8tdnMt",
  "key17": "3XwWipFV5ZQKXACnDSb74MrYgz8eyXSq2foZ4KAu4naXwSSE8TFgMFzF3y9tKzBAh5im8Zv3tFYoKKGVJPJSVyfj",
  "key18": "FrcWJQjAmy2PHR6ynv6zcnXHbdQAFhoNRDGWqScXspWBiHY4iPutBjANZknnKUodqfo6ujtEgUAWfYdx6GKWCey",
  "key19": "3PqKMTXCfvYwVzDvVeRg4YJRhxSEfbCiHw1ZCwQVKDgz5tiWB1DX4DUmFjcxA1V5KujpoReZYU5gFe2X2Phwizy4",
  "key20": "2x6XDSXkE8mhciNjre5NMRjZbtGAAFqYpmUGJk4Gpqk9ih1auRUmijKjV5nxutBQWqLDxseZpN76jB7miRjGFRRP",
  "key21": "3qjnpTBHgPvxLHitD3kUQvLrfu3hv8zs4mKUma3YmC8d8iMyfF9PaZwHvB2e8fH2aL1WFVnEqC7T16f5n5jY3mKW",
  "key22": "3bX1H2F5Uprdsvw18fBHnr4NR4irknXXQUXrBVP8iBoif39hERcCis5zpbsWZ9ywutqRUnUuNNoWzenBZbkDrj38",
  "key23": "T9JhjH65XZY8Zac5tzy4JzyAMwzDLsC2g6KNPLUJRay1r3zSNLKaFVEHdQyHB817kqXdED1i4BgDAWKEZ5qy5ie",
  "key24": "3Cyt2WyHTo79aevCZwPmA7u4kKykjJGTcEejx4fgCi4DYrsk1sidTrc7R38wuZkRiUmxLK8do5meWCrVfiYHJg6P",
  "key25": "4nQCQ7gQoAmj1YCMyEx66keCW2JxFMsZSyJi8ZcYnhB1JEnjZWGbpnwNDrsSZ7RtqEXPPfZ6THfSXYVH1FrS441i",
  "key26": "3Sbps79hqHKHtMaj7dvjcZjEEC6MzfP8aiBxFa2HTB8BPxfq95nbDpcJMqktEhMq56JC4qKvBxu7SKTx1SMwmUZN"
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
