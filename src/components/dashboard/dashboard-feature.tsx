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
    "3FonVwVGspoPAW8B2afDbgewYnkg2dKpicnns2ox6TdNevc9SbXeShSk9cVKY2E23ySpi4Soqzqs56xr4pb8fELv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4APWGRicVJ3YmWqJgRTLgRqPjFnfdhVDLYWEMzKMHi4Kp9MutoyvWWvwgV4dJaTzjbBiWqos7nrNobqSwvxvioPN",
  "key1": "2hw9XCnTnju2PM1HQmsUmtUBsmbv6mRjtNhoCzsFDPH7mMYV6NWW2RydaKLWeU9qft4NhyGks4ba1UAMtgy5puCX",
  "key2": "5pDGUoejrhgWKPQyiqT4YwH1j7PdwxJDgvHAXhSC8XBV4QGCDypPFwn7dwcp8nBkcG7zcr5dPS2VfjR9uq5payRi",
  "key3": "3w67hfHfTY27jun6e7aFTbr8y5WisfxgLHVNzFfZHyLkU3v9F9RdnApAmgXFXTHvZQhrE57pq52D9FFha6MtawFm",
  "key4": "4p9nEYAdUj7WUGNZFWZhEcWpgrWp6WnejAhCc2NDqdawJUrxB2M7GwtZ3MZaGuEu3kuCtxVySFNB2qsLzrJKRwqj",
  "key5": "3ncXtAMEtJn9oysGms6ZbKFZrigCvv8fGhvQPF8Af3fpp3RLbaiB3hVcKgMJqg53oCwH3N4Z6x9WaWSmod8cDLMa",
  "key6": "MMtvk8wQcVDFwNBFG6DpJWRzRzyjg3gjnjJ7dTnSaNcHXrCN713aE5gdEc4671mFkPXcW7pXvcExp7kyw2Q5nuq",
  "key7": "2kdncNMTPgqzYz3sbiGk2b9jHdgFcWNmeobadkkY9vSKEJjgxngW2GuFpudnDozcMdykuHKDwryagmnNwk6txF3M",
  "key8": "67qQhtDt2wKNYUWuDfK3j86LceR8xmCactK9py835rFP6UhY79AHiN5MBiS2yZCt79k9Ydj7hFEUZC99dxKpEyds",
  "key9": "25cApvpVpBHxpX2BvVobbgtjKbKJdp3V4GVZ8n91Zmrzkan6ud6PJFLh2Z5FEuhs1vjSiJcFgtkdjZPrFGThXBZg",
  "key10": "3vPAbZfHT71PgxCncdwbPQQjWLqnYDrh6idUEVy9gZFzuHkgXibnQku24ZZTmpS1kamGLSpL5sT3n2KU2yE2mNdM",
  "key11": "23nHn8bNwJfd5zpv54xbqwqEbMVoCfz1MNiUJgAaCSzLGWMbwN1BrbYNLdFaDEuSWihcKqVF6iBCJiSafiURCg25",
  "key12": "663JL7idSZw1BevfYn9Zv9ij82aCC9P4D9gX8PTQfsnFtGQfcQ5qTUahiUVuq6hcLjFKzTEBpYAnTrRDoFCMCpB8",
  "key13": "3PsuCoMSigx8nrGy3NHFT4wqSbab8D6rF6U91QwLDppeRKt431i7e42CyZijMXAUHM6NhsByzWK7qth5N65Au2hJ",
  "key14": "4oGAfqyAyMJrd2kZ9vgjCau5zPnvJj7gMeESFVbz5yWZrFbLrWxetvK6vx9hwWiHZMb2s4xGYs7Jg5gA5j5xyZdj",
  "key15": "285ZsF4D6sjvzBkNjzRXGQ7pyDUdEFa6x6JGGwHT9YqAao7TnVKYxQTmW84ATrDcehUvVbtT8ngbc6aU74AEtaoF",
  "key16": "yeqYTjrgVVA8GePHwh3y5ANNpdxW5BBNgg6t4AobXBt2YqquDwtXdXCTxgdDHZXkx6DLqjQ4B7at9FJSK8EHHEq",
  "key17": "4bkP4c67i7zpM64TmtCb8tnxPmHnaTNso13wiqXATbQaw9KnAHGqbkrho5rMwsftbSERAcR4GayRkk94Kas51mjR",
  "key18": "3XAadZ4yRmtdTx4ZaHWfy6QHKZ1NKfpBAYJmB98GESdWwjQ2Sm3oSkd6koghRrgmyHfRWADJK8jJXqwv3QGLcoyp",
  "key19": "5kqSTzUj1x85HtbnnPR8UKummyDBwvjxnSeQvcmkjWnd4TAPQ85LfYPvb8iwpiS9Bck2CEhbmQhESgzBJ8BQt4Xz",
  "key20": "3FG27M8WMMwNnRfCUuWjZL7ifR53dBJxfVjFU2s4sVpFhpbJEm7osNV1gbihRVhEiA3v8tGKki6xPsuQoets1ecT",
  "key21": "5kJByBgCNHbfG3RWhDhqcs27CHN4mnndsit1ziBKoubSosnhKrcGpDYcbzCEiu9RZghX1KERwDQBCnVApEGUuDpW",
  "key22": "4E8ufen7RobJ7St7xhyXYg6pf15h34ZtSsryTbQ2bkG5vjjrcrxTzwU88aDurifwPwit1fcbWpAe3XoQDysWrhbr",
  "key23": "2U8n7QmroorTr4JT1n63ShpG2wzgRttxPGJg4R4xPP1dEtzk9Bfdvvnz5c4TedtUMapaaGHShT2kEhRkMvdpJu9k",
  "key24": "5r7i4zXW59R2PGBd4eX2tHG9rVKB8GsY2aDQsaTgniyQ8ajCecCKndZmcM9k7qpyQHwPv4qnokmV6Bt9KAW9bhwa",
  "key25": "3HzNaNGPfU2hio2JXEEfsGnfp19MreYHhasRne2HVKeTsp71CNjPoHpdRonDd7CXPugPvpAUS6Hufxu34S9aqXYJ",
  "key26": "2EBeFrFVmKDc1JDyJH1iWVWP8yB5yGeKNNYZuSpMZ72ftRBFssnzTHLS1EygxaDgMH42NWQtJa1zW37P8HzDFKuv",
  "key27": "4EgLWzVVqQjX1BXhL73f8ZkGbr1FXqzmVK5QkNwB5hsSrVZxA9Mr67tkKmfb4cjG33Td45xZFzXnmcSTLFvYu6g7",
  "key28": "3GKnRmh1GkWxmCNmn4mdzrzFfLGaDRhpudVJtyQeRKGwSQ7Q76sVf3kHdDfrMB8DYt4VcameLFG4gFGMYZwnL5HQ",
  "key29": "5p7C4E7AfKyhrtmqx7gij6GPetMUqcHuMNrtYpFPbUtFiE34iMfDvAHRGkhjCiC1pUbsV9hCo8GxU5n4aXuMtyL5",
  "key30": "2xtj5ZyJRsG7soEymjgs4A4BiuFuavhuaZmAzwfadVUHQLHmPrFFfNT5jhraLFp3pZNrjvvDBYxus7pkYTHCfEyJ",
  "key31": "66edTSWLLuUbGgWcFtsYxn9obwpfxB4BpStKCiUkvePbDeTxucmyW9qZ2XAJouDW62iLqGNWcuAQWpknkVU5y7yS",
  "key32": "2bsNqdN2FAUjE3D4qLXTPzu2fwxEwLmFhgiih2A6TPzWqPz2GpQySRPyi4nrF2Y6KqtFMedHvb6ZnmmVSzcaiF7d"
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
