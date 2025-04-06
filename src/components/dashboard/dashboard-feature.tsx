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
    "5W3Jm92wUSfeMCuAjqnw9nCrNDkd4gA7u8hQiA2NuMomjj2BBxRFrNDXQ4y2NJx8DxSzoG6GUqWLNYpKrf8Fmb1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24e434R5yJ3njWXrDfVj8wnsGSHCUePptaFdVLC5Y8HF4wiGVU8o9nF3FiCFat6ZT1kCErrV4q8aXiAFJPd1Jv5n",
  "key1": "2D9AU7uveaJMJFM2Wjwp1SNaa4UeHxFm6bFwDuBraVXUrhrZpvNMu2PhH5WMcgbMEvnB6KfWDNH8boGmNgNMMJpU",
  "key2": "3JUiLrzda4U36WW3ZF9UpUPHnLBgmvnDknaAV4ymsaY5smzKZPUaFGijHuycpkZypS5TmXDc117s8GigjzCZM2f3",
  "key3": "4zXGwq8dAXRRAHcKC39oEubJqYAGTpjVLicnopRqCekp8aqrjSeXQyoEfGJAJG88hE51BXYHZXLoH2m4aTnCcjsT",
  "key4": "43cvgbkqQLWv1kotv6U73iZ6ij7ST6ZvEhHT5qtnTTgEt9ZSwbW3BfQkE3TBHCBKBYSN4m1Jr8aFvvB7oo5QvMNP",
  "key5": "21dz3SRhn3jv9JBU4WkSZxtF32v9VyY3dtRny4WSmSWBnaaAjvyzGf3TD9s7QXvG4UAsCQbfeum9eJEHWvZUrTr9",
  "key6": "4n4j9V6vkD5Vtsf55Bmm4e7qAym5oJVEyWyQaRE33TQcsE1Sb8D9mmxJXrEUiMXn9S1GS9dAXDBbRjmTBf6oDLn5",
  "key7": "2XvezZU2iTE5vJUB9dh1d8qDCE3ggQ3C4CzRup4GHMro7kikDX1iT61bccTSzbV7gzohhY7dURQsgvnh23cgwkAM",
  "key8": "4zQDwMVWmFqGkHEX4PFFrrJzYAPSsTCDAJVmvWhUN97CjjuLgoRxctLHzPpgParsxYZXFPQazpaii9rvQW7NujZx",
  "key9": "wyujTAcdxKbHv6FxgFWaDoewThfbcyBX3Sod25NtDNUnwzqCHnmQmtYAjfY9w5auT6qS7w7cKMRkAHTr4qHgPeR",
  "key10": "56q2EvvkNFnZE5CkSUgWxGhoseaaq1QmpmjPKhvxdtGqLFsVP5QVhnMibN3HBpVJaa8DbH9vy16RrJCgYf4C2FXP",
  "key11": "58VKYBuZP75h4Cr2zm9R2sLsvV5JghFrLKsGAgJFEzYiEgCgraSyF879JQZn6FUbfySR6bmpuMpuHzMoKhcY7aAx",
  "key12": "52AfJbaBTqXzWnWXhaZrf6Y5mVY64dbGCqubtZUFRZFZJniWiztN3oid1avDqN4xvJeY9eov6fWt6iXMz1hmfzNf",
  "key13": "2ywZ8G7mDK8TRa2BNR9otd6Kt61SET12UBzX63i4wRduUZobv37bkNjrgjhrKPvtPZXrtBUxGXubi7ss1A7Y1ydD",
  "key14": "2sB3jc6X4zLCrv1Wdi9joHh7aMSBytysNP7eti8rNbyWbaVeSs2s4C5PnTpY1A8L5M3WTLrpgrSyBGbisuVDJy42",
  "key15": "3VHtFBuio2EbShexJMwb1PrW1sDofMcePRHpzjLEFip2CLLxwa45ryLWbZzZ4ADpQ2vhGRo89P4UrpwN7P3VrfS7",
  "key16": "3KHTb6BqZzQudscHbfu7yVaKc65VBzR5vBcvoWfowLuiL1BCJSk72x4q7dQy3pC7RG23TtYyUGCB3rabE3UeY1Kc",
  "key17": "5n63zJ5LZQEA6cYWsXZspjbr2F3euyTkaeQEq4yapFDdXrcNqVfJ8MxRL8P2sdnWomWGY9qb7uCL3qR8n5PrAU4B",
  "key18": "4t2RiQLTuHSNWomPD5ZNKMesYsDQxy4Ug6dZFo5jdETaiJxv6fChVfdQspJYWNJAhQnqoUVAueMchcHWApacGFGv",
  "key19": "2FyYygQ5LFaw2xTSRW4uTFvKkhCA1wV6ffZj2A4jXEu8VAa1PpmxU1jqVmcfrXMY2Gc1P9UtbKTVWampaAokdre6",
  "key20": "2N9SB3MtDDTQKG2ChHdH7tiwzjq2wCusv7t9AdTYAtCDYN2LKZFTd9D8MwqG5YRYcuGAgzx9ncGcEFoTDg6vHr1t",
  "key21": "3toFgYYJCgWQL57qsLGDzgogzSnz5wLYvQqGRhGKFDQGDQ1uWXiLHHXCzvArp6qaM7ozXxokhtYeyRNqwZJ5tTM9",
  "key22": "4bgqJAWHkimFZ4wfT6V5aHAneAq2dU5vMW9eLaK5ixUPdh2EJ5fHC7aUtohrh8CNnpueaR9CZTgnEmDppMojEnTk",
  "key23": "3pWR3ZVhrHx9y4g2d3DkcQbMJhKLk5SUF26JSb8kgSHj969QbCVgiaSEahHYNVhcsfjE2itwTHE6ktirGdUz1p9W",
  "key24": "4bqdpFRNMEa7mreL1MkXcRAMr782F4DKc6VhnadDjjeDrrSWKSTrVNdVRx3SA5Je7gRLGhBTRwT4KhgYbpXwCvhv",
  "key25": "gZWi2xRVyVZghbRYBa9ofG4URh3C7WZUyMBkdWLtNYBX8zBjJiuMfeGE5uZgXhtmuXccao4pxE6AJdz6Xac3VP6",
  "key26": "5XN4akZLYf2dqGZzBhw3ovnbiR6hvAycuq6LTDdmiexvmzS4CopSwo7RntjfYcBCbJ4vjjAjDd7aJR5UedqPBq8z",
  "key27": "5RY2U9R34ECLdfByxQGgSDaWoi9ozJAeeha32918fz1ExqDtr3doTMbcZ5o6ASd5ub9sXridrSgaeu9JGYoF42Mk",
  "key28": "3bFD8jiazoCEpScxNeNuGC7K3uXNpQQecJNpHYpwt7SDsA2o99UhJFigRicDeBFo2r1jV34uRfd2WSdphiikrqLQ"
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
