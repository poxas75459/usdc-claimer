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
    "2s5YHwL7mS842AjNx79u2Nw6gyDSPSfg1fsCKhxCbD7eBZ8jeTz3u4cu8Rymw3xcK6KFVEX6azvhELzatsMivzw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dKmEdrvHpYbn4xZx1E89ncBpoDLC3hFkenn9gUffMERE7Z5zcEEHfwrMAwCSxe7zdiSdwnUpxj9Jm1VaF1hVZDF",
  "key1": "5dCwGGDEDBtCwczMUehaxGwZRQGrRr7NXm437k5wemmfAgK5RPVjdfo7CN4KFkVPrDLPsqKqWpU1kYZYCYdNyM79",
  "key2": "5C7cBSVBGywLHS37kEQPpVgCRPmu4vMfDM8hF82spTPd1KWRxbDD9eFF9247e39o7xJmD96TuP2YE2LCHttVsc3C",
  "key3": "vTdqLuHSVkXQ7UvXiXdYMUvi93YUMbKm17WFRBoCdw32VV8qFvnJPEHByXy6Dyg9ikZJcvbhK7vHrXRF6u6TBxP",
  "key4": "2iSj2H8RqB9BtLWZRSUsjZJruxZGepAHBfSSXxTEM4RR8u3gX1ww7AckAonG9GE1HmbUgZeSoELEWtNLYxWvvRUf",
  "key5": "4ct418LkZp5qcYXtHda3DveqFi9KADs6MydN81mPPzqBZz5yzDynTUjWGt7nzVgJfJCxH23RKkPhsPKpMQAKTpgW",
  "key6": "47wnscdWQD7C8Wj1TpEZCfhgZU9euAvthWfsMwQ4oQUVGMHm8yGw5gYF1vM2PvAvSMda7AXHkaqLQHPdTQGmMZg3",
  "key7": "5akuHaSv5191PtPpyG6613NuaSGtvGHy41gmowtmjcdXJg9KUCghcMCD1imAaH949zDmLwKvc7bmT33NtAaxTCzn",
  "key8": "3G3DSJuqDAro6XLupG4U2H2QF3mEKLxsfXMeC8N5BTswyP7vCmmYEcbqpkMYduP2dTbm2xvjvy4zGMgvPn7pDj6m",
  "key9": "3zqYAzAbCobTw1A3GuYc52Ujdd5sXvFTvmBgTJKBJ5sMk3v5iiHVq5RJ7wwczZKiWybch2ZSFvf7MWLG9xqhfmVS",
  "key10": "2JXopueZgqNVXrtZdFWn1YWGaTJEdnZhseo1oxeRf8FRbTFVAVQPLTJvoMtbnJgu9JmUu5YucAfGXzjYGdnTkQsk",
  "key11": "4UAxRquFz8F6BHipSitj8fGW2wsJA8UCdduivsH1v3wUxyJuHF8xmETmsNUAVMsEdcH2WcLggxcerhXn2fRLHXQU",
  "key12": "2qK3ZJqJEEttCqwQe7qrEoJyZQ1FAzEtY6giKjPJAR5eqZgZBNLNrswpg5whirW1FxwRS6Z8b1T77MB2LfTnnaFW",
  "key13": "2wkci5B4KYmiF9UWjcSHTLixmV5UVsQFjDEgCk4gkrz3nihpV3mjqFpxzzN5Lq3zLWDo7ZkfECBWoBzh4488fhxM",
  "key14": "3Q1KPYj5sqefEcH2YymvjKpEgu7e1vJGqHCsxfTT3FX2HqTv15aW1uCtQU2dBjJT9SWHwaWLWnczZKg683P8HNcb",
  "key15": "2UALTWh26G3FCfjBuGSF3RJQ6ZRuEuBNNQzERehBd6R6q1rCkimtoi7bfkjEAg35n1nm9bSwmWRAnG6nUvTZ1xwk",
  "key16": "2u1dPV2MZbcnNAiTqUKKgzBTaJwDC1VH6QD5EMiF5C6AMV5NPEz8SyeUEL33tQGxhG6WQkTA3AxeVo26ZjCF4mhR",
  "key17": "56veLySDBAxzwsM2bCw3khxmpCBQAJWsPCQMyoD8p8rSnW4qVUAiFFRSzAgKUGEBnkj2RGdYij7vEBAbPtAycTvd",
  "key18": "ryHr89PNZJt12dafmPhSAwaurFx31VzwBaAFAqAVPkFg246UJiTZhxvTc2n6b8XMiPsVEox93yNC3e7KcbWRWJq",
  "key19": "2CUF6y4TzmB5pLQrDjxL47GsKimZULLSDtxDT9CTECxzAeinV4Lp6BQsniQ1r1YoNPDBgoEkiWF6YfF3EcEBAj9K",
  "key20": "211LCTexrswpZAiVi3SyRYrB5ixkEJUuPUaJDZutgP9mU7784ik5u9m7tJJsKQr9S2gMGk5fa5qRD3gFNpBaRZYT",
  "key21": "4exWQeMJTNEJfFUhDcKXJ4fs8YneUZSDwHCYej2h7S2g4U3VUQWbbz97isKPtrpQ4JRtBqZh7P7agxKGb8pHKG5f",
  "key22": "35uiRayvrGUo2rsZni1AiRuEjef4XLk4EMBHrHRzuaaHV4zf37xizyTFKdPZr84pkiPPTwMXEoBaHzN3yZfEVdd3",
  "key23": "61iqEQuDoycM1rVtPMu8DhvQuvMocCHT6dS6zjHYc12Epqwk29RjHofbi36hBPgAJr8jeimpKu1B58egGNFZnVEg",
  "key24": "3MV2ZxoeYqqtzdhvvCP3Bd5Ahfkp2cUP6Ka62y7oakuenusigBKLi1HJ7gQqmfoVmanrvZT5vK9CMDp6Rf2fvePF",
  "key25": "5jf1yfJo7ni7vYKNvi6PhGGAmGrEHj1ptaJPNXovPnJBjAkJRTVup5znn5xve1Wo4uPPh8HgHWFR4vdvrraZHfWJ",
  "key26": "4fuiPEtgBjDA9YUmKkTY2zkiNTBS1AA9pPCwBfH3vFqqo2pHyU6gKwzCemh5nwLXV1tLaQN4ZWJuxhgwRdE8hFQq",
  "key27": "57Pmv6YbbjE3r8VjKRBMv7xe7J2jjqDbM8fPcD5aNCpxnJGMrkaEWJNPcHxsBrXeREdmGK5mm2sBLR7mJ3dKp35M",
  "key28": "3G4PQx735z3H1AB3xLHJKPEMMttsaatf9dskyD47gWnSyNaQbMB3gid7FimRmdn5P9Wm1QjuW92CiJwRckN6gFRX",
  "key29": "2yABY663QamtKYSXaGqzmBp46eQ3J5LjzaTxMhEg8SBEbVkNCnShxPrhknmDJeMadqQZqRmkWmRwqAERmHUv96JQ"
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
