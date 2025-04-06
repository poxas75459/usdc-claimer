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
    "2fsu9KDPivXuBpi2g2epKu8jDnSvq4y52yWhasec7Yrepm5cYDqaD83RcgESYiax2DJJcgxKCpCRyn2RTV9YBcVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44RZ29TegTtZSLS8RoRWfFUoi4nzKTMEayugYxBejz8HVNNUvf5bY2uq4X2DzzLW2V3qDycU2fHXRuLUmhLQ4XNE",
  "key1": "64YvfmUdRFyseM6taHNYsQBhkEKnJU8Hz6bbftAkkEtiZMqdKLSgb9vMM6eh6YDxr4H4v5PYFQs1bJXRrXLdJZjv",
  "key2": "5FRHSX6x23XwvYwTj7CCQNzpJ1UdXxtQFGU1EHrt615Qzeo3ujZ1WHAqxaoLrUMLdzpxu4WzmzQXMidk3tXDNi1H",
  "key3": "YwN9ZwFNixD5EDc3ARoai1JsL5KSZ8EXqWiQWYXw3mVzTb6R4mG7dVPTLpGtfbodyWezWF73Gk3EZBvLZUqUNN7",
  "key4": "4CvEonuic8Fzp1xDL2Bxn9SGKRfqsrdfxwkz3voFzYThg5iMk6vCkMq1hBnmh3qkXMPWx9vu4hv3Ceh2pCvLhvsc",
  "key5": "24cSQE4yNRwAYBmxGvmMDW96xCNKP1J5vVh5hhnHbzYa1DmdizaAWqFz57NvyhC7Nao9UsHjyJqSKVHA5XhMyeH9",
  "key6": "MPKFjMLmb9fbMSWh6r2FPDAQxGPnkjB3SYamotgPWYujGWfoWyFzNP6hjGHW4ZsXQhUSU68KKFpeqnW99C2j7cF",
  "key7": "5tCx1pCrLr1dLCyJ1Dv91an7tJZytP6Ve2SShR9ztbngX5ew2F86Wnof3QBPARMqyptuQK6L4EFj2QKS4DeRBEek",
  "key8": "2F8JfEkhHookVAxR1ovCsKip5AjWRto8A5KwCNv3sqLzjgLzvnpv7aMDhEwkxCrLJYeTmf8zP2bYVSAv3K9Ggw9C",
  "key9": "5pbFE2km5dgYLtwPV2tFScTWyZcDew1ygRBZN8oTgr9LYAHnZwu7QCJz8kRBuCpyAUDmxZGLSw2naAh9PeEyrVP8",
  "key10": "4hoxn7HXawipNLddiMfJXES4qUBbjASCRZer29M6tE1ESv9mPzfeYavo8eMTqakRZuPzXZRGNKSyXcWXF7GHGTey",
  "key11": "4YjCva8JBJqYQMx95orinTbKMZq22dKtbf95b2YFysSRV7NmooEtJKCKRdAxANV54MB7Upwxr99PQRTuPiKRAaXk",
  "key12": "67eNrzDLPyaGDMXjKYL7yi1vNbYYSU5Ss7Bij29qWfFJ23PcdbJ2HAmyJjn3uniurDLtkpBynbAehu7ntrTuXFo5",
  "key13": "34RqMNb3YEyq4dNMMA83Ltw2mCgzB6FnPKjSbUUetFw5WoAibj4vmMyRDMpMk4seWRPGKKWh3856F2UkaCxckyCM",
  "key14": "5A4y9WyqkownHRW5byx8Yvp18QC8BTQ9Nm3cEQAJK9csK7zoUMFUxdeeNphSUHzewAYJAE3i1EXgLBFZZcdE7P2y",
  "key15": "5Nz2x5pu69upSTzeVG3Giya5G1kmQbhVGjDxEp4Aia9jjGg1BiAZ1GWqsMubKt1YYUM97aUBRkMK41qTpikdFWaT",
  "key16": "NGECVW6cZdAw9JQfpzo2YPtm1CFfZsUuqmS3sxSs6QMiLH477xusgFzsdJGqk1pXWABpZymrcRgmis1VtBGcaxU",
  "key17": "35UmHcvcDVyMSt35h5sCmpUrGpDKE97RYAeYZM9jdH5dqsSQUaVUcVHCK9iNihpjgwpMvTZf9P7pe36ngBJwYxhN",
  "key18": "3nck6PVrU2vQbFDULr96rypZum1CncBHLFjNVusKbiZG2iU5vD4YorjQ3RzvHzt6nDPRR1sakTBfRhb86k7cJeZm",
  "key19": "uitDaA2RK95ZQVTSUcAxJUg9awxKDTJM3ooxt4pzLZHzuB9uSdc1oJicoAXJhkmtUonVGQDKjGJcRt8NV7D13Rg",
  "key20": "CTJmcPu4PQG8SX7o2oTnvKagVauNWrvZVSXJYBM5BsxPsEfRP261c67rNAXCFU6cpRTv5pkGB9dxgC84HFQxuJf",
  "key21": "3fwNB4thVPEBZKZWw1cXui3SpTmqpx7sgBZMHTz1r1x3KFsURLXjCxNcRzFvidTxUtyJ2Udo3UpDGubNqG24FjuW",
  "key22": "hGfAD7XfZdfnd2E22SWvfKWLf1teNG8fgZnQUBKruohjiMHNsY9vtD7MDUbNVMSUsj6QjVmgCGHPC5KL5V1N24t",
  "key23": "6212M9utu8XxmxPXsJi67Qk2o4DFH9VqPMN6Qp2WEwKy4v577xiasRvyPve7jUwGSUFo1BGmUJv73UaJ6oVhTimB",
  "key24": "38CCeumMh8n54uf3cwPmHMWTaerE3bwTmY7xUgEchuFpAxeot8moFo9g4S9iXBhZhd6MUv21uVKpshZrBxmiyDzj",
  "key25": "5qFijMKkzBGEUTwcuMQoBaUFZSGb9ErN97PFtJrnXUWyCsTWCd37P6Us2L2DSDdJtvTPbBz4YdMy399ywS9SVC7w",
  "key26": "4FS7DoABjgeNERmYx5udK1sXagzvFfoy8tazFMn8PxaYtUkEV3WQAA5CZNyKof79F2tTCyfZSqheHP5y6CSR2sh1",
  "key27": "28mgGTdQW2LKbnHDT5ckswFJqjihCVWWPLSR85ZrX6RV3cjBwiVpc1TLiQ8qBBYfrrsfRPQndz9C2nWczoVnxUTf",
  "key28": "39CjDwGz1ntU7od6ZoTTzjGv6G8jiXFFvYG2mykRQN4pNi9tfWK8ye8CU2vstXovaWkCDvSFe2wztDE1NRQNAkCG",
  "key29": "2XQJSekm2JbkLR5PGsoPv1qxKKHBt1BRDULWxocmWatnpvjaXu3X1fCcdnZ9uKJ8jVsS8V1fM8VknBeuZYK1ogHF",
  "key30": "2vcjozK4U3Q4QhehoU8NRarh5jZkrPJUfpMLA5zayLZ61gLQHeukoyeQCpGGBie86c1RozasdgTZVaUFegSWfAjS",
  "key31": "3bSTCWvUUQS8wyzSi6nitygppVkXdAWatPCfc2Yd45DLctYb3WWynXHRpQrjm3CFpn5UqdKja7Cd6j1yrpoy9a97",
  "key32": "3bJwU7kZQ2LodrsjnMiHPf67Wqr85YmBMezmWYeWx15r58aYAKuG92wGDa6ZLZ69H5dUyUi5qKZx1nyF3MvAzYg8",
  "key33": "4UE6auPRRokJgU8mtVBfNAKCd4w6LFtbupcLtMCyDuftJxYxRWSsPGDYNco74ukgUWJfLiPhZawYYCmCZX2zeyS7",
  "key34": "3oad8GZowCMovjcBgqa6JviAeBsw3YsNJVpnebBQgRrsupYpNJmh74vENVWToaDDGsm4C9jJAY4Wd5gZgh2GZS18",
  "key35": "3bbQwsyDd288A6CU9QqckNhCKUmnEp1VobkLd9j68AhtQkUu5HmzBaYFHd9j94USjWBdBxNqWBYu1naew82JbTh",
  "key36": "4L2A3cVDBjhFteuBSyhtYaeBX4gnTJwtdEz5pirjspZk8UbLgFATZegSKZCoGLqr1m5HQ8PXwLzPpFnYx2mo1Tx7"
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
