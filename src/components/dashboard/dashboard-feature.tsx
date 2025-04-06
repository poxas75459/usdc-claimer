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
    "16JhdkBmLVu6mdEP4d6dxjvyGvk3KFADeqci32WHxCErn8CmpsPYbVkujSonL1JssHza9JgMXE7SLSv1rfVHePf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LhSLh3Te1fQGHQGDY13q7wV6rLWBb1BoUEjLov7Ak6HWR1hmHC14KyNaChvQjuSmMHJzdoDkEkCPMRjb8ogknRR",
  "key1": "5sRvpamXH1CVeUQZzxddhTzmAfbpmh6kpSgdXReHopbCvUJkdib7mrcmHNGbCuXH29u3wD8NcV6QirBe6NWVCHXP",
  "key2": "2DTdWQbBt2mQp58F22HTMvEupFvBko6Ng5yez9wJeU9rbbRKwnACTASx8omB8STJ7wdKCiddoZueiZz6vzvUJPHi",
  "key3": "3WPVSGxCnoRCajQyVtxkBMqigLpoMEnXzeCYnZ1RunQjjmH1nsdTgczn7as4nBiGKXmidBRZQgkaNzN9sURuJ7Uk",
  "key4": "zcj2BY3A3GHQqeWrhsNHaJQu1eTST6BRYWM1nrqgq85z6LCasGWpUvuF3dwB5FYnrXowNgYC9iGnLKG9MwjVkiL",
  "key5": "2Ed2p64vX1wFnNjmjMYMkMuRboCroiWPkUaSKJ5oSkZPYyJhSQ33QZAU5udTcsyD2f4pjdTr9KmA85qJXEWXDW5G",
  "key6": "5p7JSucLUC3TnxjSw5Rxd3reWcj9qYTKE7bWEPzLjf3UZKcaLcRETsW3r4QVBbyZdyHH63H2okdUihSVqvNfoHSN",
  "key7": "28zNZCchm5wSfajEazsqD99L6pfUwKjnenAiMQjk6JmtryHxq87bk6UdANHpSotjGZhbTg6JdFqRmhM2LrBzaGYY",
  "key8": "5QGUsztRmGiVhivTqFLFASEEdDXoTdkDWnJRD9FZwM6XpqaZT7A8g1qSHBSViQCdfCj52UYf9mzUKX5bgP7kNbqv",
  "key9": "2dfxWuiKgG6ng2WBMev3Pf99UvGspj1LcPnAaDaCmXj8PkNQ3srroNhAPdYiQ3aqSoKzAZWwaX7PCR4ESNfxe1mf",
  "key10": "23H7EawrGummaiUDWNUtGYp7A5FuXiBEKyGzUkqaDjm39hK91ug2JsWi1G47C52dVndWmMQ8SeUyT5pzFDEz31cQ",
  "key11": "4uu6u4ijpSFiDXdAtNYTaqy4wtaEVR5WLEdCcA2UiKXvvbUti2X6jKTU4vHn4HrKaSW3BSPtVc5RwSsZMZSXtDbh",
  "key12": "4aRLKbXbvWQofAkq8fuvspaVKppL4HpCznWUbgqpmNZ9T3wvZZRhAAGssJys6r9QnsBrg2ABtohmUs9T6wRkNkPn",
  "key13": "3TM5WKEScn2sUSZDQxwn7TBKu77jfM5NaaHYa6dnnRScG9V1jE4AWzWTpChtVv6autSnAajrPPEuCDCkJjxTQeP1",
  "key14": "3V9zAmzwko8iAym9xZDpZjFam5pr3Jkb2BR9DmNZ8gCTDsZojqK9JMcRt6jJv9a4z2Y4YWFcxYweinEVUNP4BiiG",
  "key15": "5EQysTHmhBb94dVAd3Gncep9AsCC2pcfSArZvYEs7PDkNUTnRsk34n9EVTPzVF7cA4jUqS1Uuv69nuAjum12xtG3",
  "key16": "3Wmsvscj4zpTLxbhLPWhNbanqLErKjipM49M7ivp7w5Md8HKc5F3SJd8zYgnB9jM1nPW6LbQpH6Rgiqdt9n4vWbD",
  "key17": "3FT58Kno93jnetUsCsk9JyjUY2jJF2BmfNwSRV15ezmn72y5ou7uccCcYjKmFu6c8Vtc9Ab7wAuUiVrHbBwYSKFK",
  "key18": "mfpYf45TWnW2oNeFKJ8gp2UAw83JYAZchbidTLTmeNwwsfh3tvnHEHNt9xUxXLRxPZUJq5nBBTcmi8HccougPZQ",
  "key19": "2YwxW1zsZw5hnU6Hg1Fs86BgaQTepEfRYZWM12o9poNejeKzZ4DwurmzdQBtqM6xxZi5PPKYMCMotnXRXXyLEJ6A",
  "key20": "5bHmxmPFupCCS69wJzQF9wEy1SjzdkGPdafgH1mu638TaQ2FSmHUPdiSpbn8rwQvpyHE3Ef5XnEHyLTCMiUX9Gys",
  "key21": "4eTbBC2XqmFmhufwLNk4n7GWDfcRuhUxZxSEZjudh2o4hEYsWS85qX3Ti4aVxoP4hJ626yRuWY4Ni8jJidpaoQhX",
  "key22": "5cYQ3uPieB8Quza3cG5KsNYRcNfHj3qd4jPGbBa2fc3fjw1DR6NQmg1McMyCVR3xKKbCzXMGE2mV9TccWvQtoqZC",
  "key23": "2jN1tCEwmnbtUYrnG2Nkni8yXRywisujKSXZEWiS1Hznrwe9Bi1HNKKGEui1vvEmzT97xsdqY2qJn8RgZiWthfaK",
  "key24": "4rmDWfQCpvN37nNhVj28ERpjdvn7vKv3iknzvXLg8PwtDbGE8STwUrttz8DnRdQkzGf6KWSU7MaAUYZBtjViRWLb"
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
