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
    "66yYM2RVuM3ApJXU9KeyZ8XZMmgzMRsk9pF5uKB8sqpSAhnsDe9mUsixHsxQwnnFTppZL4X6sgWGa3KSdQ5CNNgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tZQtbKeZjU2fv3kXJJj27TWDEJpjKq5X4wiCAgweJnrfSPhhMMc4bbTSuRcjDnPrzxhrxeb9tLGt8NjcS7FqhqW",
  "key1": "36EfHFk2YAokmLpRHDwj7NSPXb6BdAE4mWsvFEgFvsKzYcnvWxdHMmCDkQPq5GTfBRAtjY9TAYucuNpXxiADT76K",
  "key2": "abku9KLg8MGXqQfpj5y7eaB4eUVvDG2b5CH8kRweUVtJ4EJgf6QQees323ZbQjWPQjw4n6gu52HbAGanS7skvHD",
  "key3": "S2Ezb2SMmT5cSYzVVuF4hqANosaUqbWhve1vMFQBmU2ZZcHooytKEDcf4udQP341Mv2t51Yhu69t3gnwAYGP9ej",
  "key4": "KE3PDnXaxPTMcPi5nyzUU2cT4HATvhjqLNHSGPtD6bNc9BRkHSTFrqMagAJBZcJbkzB4yUVZnP5Y2u2Vdfi54bx",
  "key5": "3U5FUQDvfBejDPB3zfiPaESM1qoBZviZ29StNUVmNArdk9LbFSMctLDYbL5vkSdXMSW1EP245Gw5TBedQpG2Hxcp",
  "key6": "MCD7MVQUs5Hmzb3MSmjna2mXKHyN8g2nb28yyvfAkmMp6tpvEMW66ywsPENbaoRmc1Jatfip9YPJvoDZrjZD4x7",
  "key7": "4pgfVDJDgiuop9hNAYZ2ZMFeVYn8pS9rY6jXCkSh3ddVScGQBRDtNtQnK9Uvb4eiXN2Nffh8G5uPeDHQLVxpMU8c",
  "key8": "2eKjUZQHAPGd2bu5cKqdNvyBNPrW9tUR8D3hjstKxWSJT6XhyNKdadxh4v74t9FwRFc5Y1JfebPLtdyuM2HwxGqG",
  "key9": "cP5AJRzV4jqpTz8yWnH6scSetZR6975U4YDvjYe1TiQdGynKQUi4vqGM8x8zSQW6RtzrrwgG9ttgrNEZTrqQXY9",
  "key10": "5k653HLfNaw8oHu5GqFVUUoGfB3Uw2USYbNmw2qzcbpN7BpsPdihhKFZTcpeBmE5Go2fLBuJG7xKLJpzEEZBtAdJ",
  "key11": "2Xya1uY2ahR9FxQ4htT6unSWp18WVJUkxEEJ98jdhW9NbMTa1KV1a5cMnUTXDmaEawTjJRDYvNXucSHNkp63AgYT",
  "key12": "52d9iM4eb5EmvW2rL6YPM5Yj5pDEYLDkAGL6nApdf27tt4TKQQQb9whtumsDe3TtQXJ4VKRt68h8sKRHV4bjp4Ng",
  "key13": "2ur5xo26eExZcVDwZ69xdyUcdrqnPNWnfhRcUce3YYvFboa6KVBm69sgrWho82bc1RYz8XfcJAeJnZakJdePNs2J",
  "key14": "28TPQVXMGidmFLP6zDvZHBnSMK3Wue6jSwCdXCdP3Pw7k2zfzCqX5UVwZXaJXNWk1bQjNgod7X9gof6n8UWyWWQr",
  "key15": "26beF8THHUZpVu9mdGECX3J1jrMRDiwwVsBhHsi1AMgmRSJrxskcugeuCcXjmmoRhrn1DoY18bV4zH6jGXqD56KR",
  "key16": "3hHwrmXNBfeDWJDBo4x1renutGzCmqNXqTuF5Jfjogwkdz7qT9k3YGtStD9zpsqDaq9i51a4xVszj6iQXwzGctQD",
  "key17": "4k3Ef7Mom1bLkZ31gNByPefzSDcjDgEBU4PypGUQLUCfeQ62D1j6h12dXR6eEDePdZFTZamvnpNpx8qDZa8V1Khy",
  "key18": "57Zx3pWwV719Eew1kkVjEeTVYbcGmaWGeeyzysnyGDRYFUnVEgVKpXNW6URuBkLRG6dZ1Yu8rEEgGRSPu9cueaVw",
  "key19": "2HAvmoH9XbyB1fvKGr3zaGAS8uPHsT3dqbDZNa5AbzM1rJNXq7Bw7mdhfaKfMhyBoGr5SRzeZjecZUp8PrTz1ASr",
  "key20": "xwcESaLNwh4NrV3hkK9EyXgp8wyh7U17N6ZpCqZQjAPAhZgaqVQBbUwmAcvDT5tYJFSYyNMwewuhDgF7fN7jqoy",
  "key21": "56WrhxrMGnYNphRiK1whkSfvdXC7TUVgN3tnuXBv3MXe7t4Ub8mVA7DA9W7ejaBiozWmYVD2jEzwbUXSqgscvDMv",
  "key22": "32wzUgwqkJDs1phM63NiMWtbWrMKA61ZYsWG2pb3BfkU4AfS3xDDBQZ8WWSgTPBvUN7tEzVJ5EHkP28jziTADjZn",
  "key23": "4T11TyY5CutQg7rZSYXDgBqwJbrni6PTvJpQLPDo7JZq4yuqK2LttwG7LEtVtUtF3YhGxcEoWnPVFVCMczY4voXU",
  "key24": "3u8EDDD24bKa25HuXGqaDXrfALczSQfmFarj7rLdpK76aLPAGynavd33s189zMxC952kawKiPehwd2KWBktTc1Gg",
  "key25": "HTHtJHQdLe2UbeHS1NnSd3z1xwYeJ82n6dj2YxRH4Gks6vnX3ayuUzhEAbyws9Aziramh3HhCLfMptu7jT41Upz",
  "key26": "Z5jxkEXmYZRsN7bc4oy88vKabj28AnYLvb6YALcYxeSPCVoNpNs81xAKVwubfpdoqzEmNe9DfXuLsUkDW9Vt7Lm"
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
