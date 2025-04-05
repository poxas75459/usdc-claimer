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
    "5a5XsZrFERCtv5oZJFPpLeNMpJPJugwWmH24LzZ85Es6Jt8A8rP91e8f8LzNMpt8eAWCrAs7cPw8mPvuHErDS3ET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C5i7sD94tQ5GRnPfWZa6Y4vkBRtjFVJg6vaLT9dvb7rVqN8N7Tim7uBg3S4nPcBYcT7E3d9UCNDLkkMAZfcvcPJ",
  "key1": "47NdYPfcKhEzmKeAqRPAuuWqREm5GeXtq5xZtCVh8mw688t3DGHj92a95EeLfuk6Epv1ATpMCWk7Zv1mv2p7HCa9",
  "key2": "4tsf2QkjFAW1ShG7MjZBcTTnCK52sxLW4kZb4m6a8HmJJgh8rf7Js73mqANxjAkbEHmU82So8ERXLTR7CAp1gjGH",
  "key3": "5UgVRD5mM4L9XuN1mohxA6yXSLxZUrvffzqfbobff5DWP2THmWZ7j2wsYDnqZvRgnm9NqRtJNwwALbSEPgsE6ph1",
  "key4": "hWRaMJ4Dz1dqRSsA7uXkx26B1H5wzjvDZqieBUjseB9gBZBamNi4GbK8d2Ce98U2MKJjs9gkWndNSk7k3KZsYMS",
  "key5": "5Pcjh9WeuV8f8a5Ur16XryqnaNHdZeFqWRBAjNnJNAagwCxLZrTzBwCNDQTCLiEgcdzZoKdKxUDH17bVggtbHTkY",
  "key6": "FwJB6BzGx94Ry9VdjGmrsJVUvB3Pc7t1ECWcibPuHd3SqGNchFWLMx8zKnYZHXHBocE1s627wSJbcGto4GXY8bg",
  "key7": "3pouaD1S8ErzspDJdQ4H9ayTT8CgJqPQjtTwZP65czeyn4gbQcdKrUAw675CFk4msxjGvNVwCSivWxZK5wT7bki",
  "key8": "5HKumGv8RH3yK2vwWG6VCRFLx8xmPErCVBFbqq77WKEt72gVvFFoC79tVMhxcZ1WiXphm6HkYNYjgcdU6xhvEchr",
  "key9": "4WkfxaR5RekG8GYtS2swMHQPKaYAdEiXbE4TZiPzb3wKFVCqG4BqywNRmSoeoZEzkyyzFXRAhsmeQ2nvs6dg3pcF",
  "key10": "wYXKCcCDe3gKsyLSEVCwyikMeBQnK1j1FS5cpjzbHSVgDRK5gF8HVREQQwX1DTPgG3VtbR9sGUPRXK99WUFy5nR",
  "key11": "4NqGvBFs8Mt2CGauCE3PPo4spWCB2nYcSW5LDawHRpYSoJu5VVtZWMFxhhkeutPS9hB661yjDhicQiZ95ADYuxJo",
  "key12": "3UKDAaXj3EJevYTXZg1tUJ9RL8oMfcpUAep27wGERTE5Exw7JTDy6qobruXiiPsHS1LGDLuQYmg6y6YM7d8ZYjfh",
  "key13": "2HTApVSErKXHePYbz3VcpUuvDuqP1GCt8CXquw6oyTSdoGduXrXaLGqvBBHgjDuKUtomKv7wLeWxZswVp81ngRrQ",
  "key14": "3GvwdLNDy2keLCoibAjjW55NrwM3qPYp7N6GPgwsAjoYzensSP12kCfYsTtwC55dPXomPo9iC4EwcXcfqsuBmAbn",
  "key15": "5FFRtzy93Nx3FDFe3poK3HwnNmUWJo9BgxTWeuXowsvRVAMT4N4pw7LzAwTBKztfkcUGyXs2sK5qbezpkqhUFCfw",
  "key16": "3EtuK4mfC5Ee1PhkPVHJmBpYxEoVnohmSfmArHJwUG3LkySohvdPChRc9cUXhXo662FEnPuW31E4BeH4Yzkii3Vc",
  "key17": "27Hdhh19HUj3JQfKgE4nMRjkpfdVfuZJvK3evZzrTxUthp3Do2LxSsVmc2Nyk9YzCEg3NprHvAoLrE4kQxEZ3TP5",
  "key18": "4KZUYUqjJ6M4pYbyamb7aqYDguzU5mK6tGcaLXs6bervLDCiKpiNKCd1m1ek9ArMBoy3ZyVM2v8gVqpz3dsXFCxB",
  "key19": "2FVCcs7nyD6N5qmFLU3BpHgCatCWoTYReec7yHK4xCrhLg8dv74id85PcQgk71wf2ZcApHSt7m1BJzTbcTKvm5wZ",
  "key20": "5HRYkU6CUF12WtXWoA6WZt3BBCaSxBrdU2hrvcuKH1P7bS7VSsL5AfoaZNdpWKtbcMzwTynyoW7weozdqXbaLZ6C",
  "key21": "2vSgP4FxY3pUtBbdy9r4SGfCzKsbSfe1YDVxCwzCC3WbSNy44Xw6CUcV7P6rtgSt1JbSFRRfAd7dWnuWg6v6FLH",
  "key22": "4hz2exgwbcqb5VJ42xWj99qc9KBwBZDcvDhPEwULyHUWcadhjUABQWtjALemAgvk1KwVu4BdcYWE9cT1YBEmokdC",
  "key23": "631Nrgxeht13PxYpFuZSwhsvNn1mKQCPQ68dWc3Bd6oPQY89kd2qNbLyGL4GaXxbSvA3x4C79DWrazdrTGG268bE",
  "key24": "2RyjTQFvBqJvkmouSqTdr4uuP8xaBGEDmALxwwuwMu8gG774NXi1LQhtoq9cv6fqyQq48HNQmFsQcmTLDzRF6aDJ",
  "key25": "3B59wno6YmvfELytd2CMByHn15Rr3EQGYWCyZx1w67owXPg9nEkKkmsR4ouiviFium5aZyCoaP9vgZhFTHq29hPu",
  "key26": "5V85RrSZZtuN5UbGPySbRe7ruhBfQKpjso4MRfRWCdgntQbz3wbuymtooC9MkQsjr7wnRwEFjtCmJPJBRYrhjQi9",
  "key27": "4Wv6TGSqZq4tYhsu11eeHBSFaUEvxvAkzj15qkGGmkzRs43us5NRMPRg6NTwsQ8PS6sK7CXJ6urpRz7VowqEYGKD"
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
