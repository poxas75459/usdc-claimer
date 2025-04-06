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
    "4ZdXmhARCpcQkubG7MAm3RKLRroAmjsoKxFSuEzHPrujuNzfZJHQmz2ngEEfKdii7GzhsVAZEKDwTVSEY6PDoNXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y1yBgsRY1nGrSFEExsF9fMkpwWYGZwjGp5XbKPUpQT3b7Doc8vg4FCPh1DyR757TeAL5FjzRLYcYgv4DDaU2aR1",
  "key1": "3fBnEofuFwqo3KNotyMY8mWhFWooRr66uZNewFs9NF2qPictHKV2HqMZ845pPyaPjp5uJuwZrAsorJ7EGch9ZsGi",
  "key2": "2mdrhETwNFjhdN5V8LKgPp59jcFq3bRWaFY9ni9H3rC2dUP6CHTWGTQi4VewvDc2MaCwttQdhHiBhbd7yXWRAuoL",
  "key3": "3ygT9XdnpsLWnsHWB68x8M2utYK2XyM58WCqk9goDxAd4sKitoh6JVjBy1pEPJSmVULXaVM6yNVGhcoYsC6HysHi",
  "key4": "4sYuiVYyBoDTpwypLrFcq6mrhvLijA3Jz8VwZXxRwGVSsZJKhopLPxYHPvDwgm2wryysHrHbx7scXWuVeAf6iZ5L",
  "key5": "5n5xWhFpkVPNZdmDTXTYXZSr7AhM51o8u8TTjW4jdYSoPhMmELRZurgy7uwziFyx5xaVNeB5LjTs6fJ8FLj3v5Hh",
  "key6": "5BV4x11EADpbpnKmmG6S4A1YbUJr1grg8mmzkvgbn1MvuYeXNcPWFzHubod3pnbAxma88q5pW3CR7UeTu9iyyMkv",
  "key7": "hnMRQk611faUbc9W7s6QN3AEUPaCTJuxhGFQKfXSBFGkxyjpWNHA4CVESrx8TW3NULKqzwLbXE3kYQnL5okVumz",
  "key8": "nTfPQaJnmjvYVZb4dL6Ksg78L4vJoynXrqtbofyrSjvjNv2UgP4Yh6Q5wTxL3HLhmWLp6Tr6L5h6WRZ8fVnpSeE",
  "key9": "4hYm4RkASD1nhswSGEFJ1kHzSq4WMfegwvMLCrkzVxoZh18YuS9trp3671HXCyHWnq8dW7fYuuqmCcL6YGLPDiUQ",
  "key10": "2TNTiTFNkVb2oarJGQMsE5sPxraDm3qVh6a9xJL99mjsxCsSkrVUagsRQa7WyDoNJMNNHr71EZ7rB2zY2u8xwVvd",
  "key11": "33Kvouhtb9S1VBwTGzhNvkt5wGWcvKNa1tb4BdM1Pkpmg5cJK9qXQKsk97vBMXoSE2STf76ur1JJrVFxgr2thqYB",
  "key12": "4vRfhXnbomybbhJZhTMKTn9mxWkDvyniwV4kmTUHBUVY8xvgMTtCJcuUeT7gViUGTkdjeHvJ68w8rzCRjQCXmdEu",
  "key13": "3LiqoeeU5kTraiHy7bSigqzykC3HMjb8XAUbpcEK4tB52f9XsmtunCq9BgZFU7p3Nx32ZZvx3MJKE3CxBLY9d1bT",
  "key14": "5yeab6fxgPz8JoGX5tScmrp5qv8KHDB8UnkAmWpxo7DDDMX9QFNDNHBKm6xCpMzgZAQsLHzV6su5goobq7okUDcj",
  "key15": "2uUN7vjqW1bUeNi6y5kKKuShUxuSneLXQKb2kondD3hJ3EQdSE3YUbsynGd3WVCUqFWu2diKwMcz518wQfdZFsTX",
  "key16": "2JEG6hRE13kU9etLukAabxof7WawHN7s1igQNZgQhmhPKjnGuYY75b7mRCgUkPGYW84H13ZViGQkws4jqtFxtCRQ",
  "key17": "5vNQQPEgYEpRo4zafyfowKzytnTD8RrR4WDARDSgt527Gf7P6XeVsEViGEQoU7YNjZ9Czdj5mDWJySfHC74fDEfN",
  "key18": "4YkbFSSWDgtmKXKvrUFanhhuM7k7z4HmQVas1K6pyzHjfATF9DxtkpTGcg61MXX4s4JbwL1TSxvS3VpcDjMaD6yx",
  "key19": "2jS4RXZQwxcq3BhxQLWhpas5Z1GnLWj1E9qetdoNuPMMWvqmB8jYe2sm2qq2726CgfAyDiueb7g1j91x5MHt4UDj",
  "key20": "gniy8uZHb9ZnFQdLjwjRV1xhHBL75YL4usA2A1JTvU3rd8uZSeMABtfKkcPaN9HV6Rr3Zw2XyALHjf2pqYksL59",
  "key21": "3R9i9UZv6tR8xSkWreDrHeuH1s5cqCcUBCW7L1dBxcKWF2Ck1CT41CF15cUSj9YjmyfC7SnMJ5xxq7EH5sxeyyro",
  "key22": "3rEDnE7BDw3M3cdib8EQNKsDU2tyGWZLLTVafqYML8VZ1svQZVbkG1GqZwShu9gjZwMyJS1NEn5D88bFkUYjSryM",
  "key23": "4QRrjtzi5svp4xMSJexZd8kzduR3bz9atnnndgktFcbhDng3UajZ1XgT3Fyz8vRhiRyAYqsTn69wpNcm54TCNhX8",
  "key24": "sNdjwv8hnrriFq2czzP2poXXramA9nEXKan8UGw44qac7sjf7AnKCjMDgzXzEWijxmiRL2qzoQPsyQWQ3a1T19a",
  "key25": "397hbddsYwvjNHuU7p9WSLzn8ZaMG5HrjRVQYQ721hBtmPvKFnptfb39U23p3kbRB7ZwpxUKXcEqZttbBArHrkzV"
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
