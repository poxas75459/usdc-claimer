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
    "671umKiuZ9d5yWGFRzJ74t2oWXrdHQDLKXGREGZgiHCz19Xx9owWT7ptCbVGLt7pQn4dFjs4pktAaN2Mf8kv2yVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zWocsbqqkgLZTSLtXjYopmcZZnZnCYtVzm2eJQPaGrQkJGEyK7jRNu4TSscmKas42AVfU2SQ9fmiJSSv1QdKm2N",
  "key1": "4wzy6jAqRLNPzdUSnyWYUgdYgaUjpsDuXpnQXP9BhNaEb1kWNtnGEgmcKSiFpFrap6Q4sTvcHwuiJdVRzyKpoDnx",
  "key2": "q5spw238hY6KnJS19DLj7XuCKQ4yo2FqQmRVWY5F7aJXV7r7jXPNF4HurfyRdbjFVM3uYdvptLdHHakJfG5Gn25",
  "key3": "9GZsghGcyyT9JGhifmzqzXBrbiWjRvhJEBYyohuYyx5EC6CUJPPejEXXPuiCCnu8Mk6HyEZL6WLUptRRF1Drj2s",
  "key4": "5eC64M2ZqjwHkUet1dPekp7ZiQ72LQaSboAyV46hCnA1Z85SgpMCNddsWe4JtQhrNKbGK5aMFY9r4d19ZhCJgwaR",
  "key5": "4sXnx6Zx4mzJRJJUjyfuhgG5BrvKxTubLBgTggN5pMddYJTzyLezox29cyHpuCcdnuzjw7rVppW9hJGwLQrQw7Hf",
  "key6": "4JWVYJqKvprm1wHbDnVZSwbWCEkhicjwFEKVSeuFyE12Y18cRHi1QNk4kGYayREBYXJSaDowDCUkJqEsYhvKV1if",
  "key7": "3RPKf9nPjgBJFX3MbXWkziKtQpixLSYrWxERHkdZPUqShMqdwBSMyQ7xfwg2FfCwSfMfndfqD4kWxogBm8eznFva",
  "key8": "3EL3UrUfLe3wJpYoxuKjfREECs3BAGNEtdkNWtXBRKZVNGPsXQtDPPS4xzeNR88KuZYvjKTt4ZkZBHGDNHM7GTmF",
  "key9": "pBWBwph5rG6FqqC5nAWdU8gz67zNevuCxpXXZejfB8Y445ntKFzjJx3fFjurwxuzU68Vpd26PG7yaDNr2fEBWni",
  "key10": "4BDqpXAeAXov9WMG84PQdkGGRDeZwz7JphxY2xdKHgPCZ71usfgHfZjeaYfkDDvnXoYGVMSGvLm6jPWVDjKBxp3k",
  "key11": "3NA8ej2dFrmX8QNaASob4MXrn1cxi7UXLwRe3aQdRN6RYJLGFKQMtNezia1e7DG66fBmByGYzGfL4YmSu3qSZoXv",
  "key12": "3jpTUmgge1FLteo7TfQJ7e8wiSnuZ4MyXxEkMBPnVVjbqJuNFFAiJEt5YBez2fEcDPdx5couznVTBiyk6zcuiqA7",
  "key13": "npFgoUFnxWiZEziLhSRatnu9RqZjCHPS6wjvQp5uP1xjUZ5h7Gh7Tx1Xv2qwEqmnb6VPzh4ykXSMYse9SUKrxwA",
  "key14": "5yf4Zyq8tnzNwR5HGpmucBwTAMDvHM66cwNBu25MKYKbWx9eFDR3DrYB4S6gpQeAibZ6RjejCB6eS52bxEso8CVT",
  "key15": "2HcJP2USaub35zZk4bKRsUUQkPdxXRxDGAJ9KgFTRyVGAbscUnycb94bZizfrqE9B4fx74wvpnmxxnbGyz82XS5D",
  "key16": "4pW7XxaqvpraUimbMjzf3bpucvVhaL5GAN7zVFcdoSPXYqfvXdi9Mp45gW8ixV71QJbQGfghsEt28EXrgGgiJq4T",
  "key17": "Wsm8HXSQ7cNAGFwqwhgRo7wMfiReKaPLGYd4WpVjyE7Mfu7GGx2t5g3ZTu1qPBbK4SnJm9tB9BfG5mYWgDtc4Dc",
  "key18": "sP8cHRTytoTjhyegCnjsGMbEr3B8eVYf9zqxdZoL2hyyxyqVioTzyC2CxkxQUtvrbkYTzUHcvtWtU26Fu8yfBxa",
  "key19": "2PgPC775PLkFPsHtpwPWKfiMDznJxpBDuKk5whyEiSkpRWi4jJdpVgyheLFvVR6VpHhSCUZ3EP9D9eryHPGWYvZU",
  "key20": "3Y8WPZySJYYqG6bWF8auuyaS71FDmEjWUsKXusnAbq4D7WcL8BEnbiKHKrWNGiujKD4QWvZtdB4vF944EQjQVba1",
  "key21": "3g4WubsMgFZg8hnZirqnsVuJavxnMzP7UAhp8SoHnCrLUPvJ9h9CcQ9JSZEtXxBhAfUWd9PVh6iV7QCPjUwqyMS5",
  "key22": "mRhSSFcS5uQ55NXNZRVCVttiYav87M139BfEsDSqeSXvs6r9kFVRpuTUHSh1Y75HsKexZZV4pvHW3wpzJXV4ttP",
  "key23": "4iHzqvPE6s2jaoyirRRCo4cRmLmZv3HSdtLvNK3BzRK6KfPzjZZTBBeA4Cz8zYaqW1pora5BkLd35t4guzTk4WC4",
  "key24": "2a5gBae9sTMi5kAdCTJPWuh3wVKAYzcp7fgcHZohV3tbSpa9SixoW6GKUcY2ykw4pTQYNK4s4bVtMtvgxcYsyRau",
  "key25": "27sQu7z4tqH3rPHyD3oSzi6Lg1NtJv8ytz6XfBHAtEkc6NbHxwxuwibDatH9sXr5QCBbeR6z39CxKPC45betpzjf",
  "key26": "5RQCQmHVJjMe3onPeD8eXyLDyyyGWfqqMKYhYQbULREsqe2ZHez2K46AUPdX5qpeuHQ3sQVTuxomhe6r7vj4HE4T",
  "key27": "4zW6xsvrjVWzDbRRC5LKcTDL923DvVPqk7cpCpDNBdazBpZUHvavGDfnkAFGSDs8ZPmzKmenS94c7NJTZxRG9B2y",
  "key28": "5WdY5WD8EmEqmZ57rcsge6Kj9XGq2qde1hUSBfFwNqg1t7JpvU6G76PZW677wo6boBds6J8ZtLrPzU8xCrvoCK3c"
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
