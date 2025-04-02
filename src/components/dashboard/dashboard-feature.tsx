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
    "5FSGXDA3XF9nq5AUiAGakvVR7MBVrEXw4kdUmWQJ4AjRDwciwj7jVP3VcNuJShBhPJgKc7gjsmZb9CKFq66mrPmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WDqkBGdMJ5FE1rCr7UUCXWsL5ZzcZCMh8eXDR4Du5DjXsf8BM2YTvm4XEJTiCLMdBAUXxb8Z1v4769xYdd7huk8",
  "key1": "YvPMqPZsXhcsPkbF8cnBKqvmSvDDgMbFfhKdTSmpPD1cP3N3TkmzGkUdk7n498YJN2r79nQkazaNkLWRk8nGVPo",
  "key2": "3KbhuMDK9Utnxs3qXXiW9owLwaV4RmJbLrExD4ch4P6Qz6fqfCERtCY6yu3bPrpaRLwTM7mav7hYpJr5wn8yRsPK",
  "key3": "5QVrx7pSRkMx7K94iWVCQkL9T5ChNXNPFyGneMgoasMcPU5qR1DoFbSV5uRsA3FhvmkDV9fUKf4cDssKbbJXEx54",
  "key4": "3y9mGA9qct5NHN4Ci3dPB8ewg9w9eDMXdnzn8KhSpN8e2ei9Xx2CDqsXP2GmybXe1fitbk7GDjoEv4DFQaV6LCcy",
  "key5": "2gcKonMJ48efR5x6eHwYStPqgKeZHz3xM7ncwHKxEyZyki6zAzrYV3sr8AajNawresHNQHgUbJbfjsjP16FL6dZ8",
  "key6": "2AqVRCN7cKQBtgxqZmAaxQ6jTKKur8DcVhJCmxifmpAgnfv8USb18N8FZbNgWcMHkbRWWPME8basYkz57VDRmbix",
  "key7": "kW8BJK1tFY24sxg12ZP8x3PyuuWg5o9ZZy7yFymbbedAuDNcVd9eLVtL3czzhGjxHRBiS4E7SiQMVWdKm34bymk",
  "key8": "7bVkpsETdTg67ZPPBTkHVBq9biN2UE78gkQ6ovmgAJU3PVtcnDeVaL2N1hT9XRiYAHVodH957eLkhrRGxBtKAp9",
  "key9": "SrD44eFEpZGVEWr41XMZhnJQfgpbAphGoTbWZARBG1xqvunmBh4LZsL9JFaynog2Hd2xJvhFk69U76dASKDm4ah",
  "key10": "2nHerDjSaZPPTydPfWVWcw5kXmiHFT7aLvtjuuYJoLA1BQnWAJsKPNQHbZgNgc3WbtAgJCvk45xnq1kfyQCKzgc5",
  "key11": "3qoph6dhHH7yDYEgkDFjnnznrwgEkNYAqLsVxB6Bx4BL2GatwaUD1RcnRNiorBxXwmMGZZMJbHPipkJSANnGbtNj",
  "key12": "WYp13wWLkvesxoMVryoK7W5iWUXuD7cZc9Ut1Hz2p78Mdvb8fr4bzp3gUvcEPJiJe3zEEUSrUgp8yMGHFFYEVnV",
  "key13": "53HtocjhfDjBt9HEY3sMZfHwuZxJensPsPEKoZFguxF8WYqap6dMXFpui4BjQVbscwPu68x2dYzz9CWSjFLCHLRn",
  "key14": "4iH825RphkiLSZhWUXtdUJgNB33fTnQzqwMa6szTgXwGQzy5SHC86w7mkyk5uhd9Hjg7uCtjsS1ypxj7XopdFeCR",
  "key15": "3nEHmWq5yrXbCbPv257psDugbyjkbyE8A3HGMeoMTdCVYrLomyDHBCtwsgH8UCeGwfxHtXPfELyHZ1g2ys4pw5We",
  "key16": "34D6kPp1bbSXhnpbWwkXSyDQF58sgorT1rqoEAjpxQfqEyx7zgMm5Qk5XvNxGH5R2jgaNcYqGk4QknKQp71pEXnM",
  "key17": "JUAY3MoJDHfM1EqHXq2UwWkcSrdeu4nyLoE5dbjxmr4mvwB9BiLjWScXrbocQ5zUmBD4UpQHop1hhto1fkR4bp7",
  "key18": "4dyPiVK8oH3Xu34Xh6XQZ3vpC2YNGdLbFtKdte6sRtRyFCs6SfBKe157AasmNUXuYi77G21Z447xEQu5PLA2zzdn",
  "key19": "GxcCuc4ntduPLU5qzxmBsY3vFL2MZaWYwAM1MWXL7QRyKVbGvqPimDJbbJDVBYLcTTV1rnycy6TEyMrnAWqZKS5",
  "key20": "5HtaeSbfLgQB1aXhAB9YWb4AnPmyw7Gn4Nws9TeUZvQoKKobR7RuGjnMpAoG9YQq888joobqSs338r6EVbrYTSQC",
  "key21": "3a7BWRvH8zVdUvVzHT6V7wgWRNkXLP9A8AifRzofM1eRYRnxyX7kKwdDMkFiFWzwFBfjnGkZvqCWS9tB4YS2eAVX",
  "key22": "4v7WwwW2UcnrkcwCpqWt3kpzHRk6jmPcBCTdyj38YiZs12AVJ2Cbx3XbmoKFWUxkCj5JVoxs1ieLviJfqRS38wmK",
  "key23": "4zJ6kQNKtbzKMtMZKo7MvpMLaU4Tiob1SpK3zspojr2K13WCofjTpU62SxmLYHdJrfi5HzGo9ab7A9giSM2363dD",
  "key24": "37bFDxh2YYK9v8NMuVjEpgyMqbUCNFUAUEzosnAA4kGxWXpzdmatgE1UKzRvRPbzo6Lm7nJ7Z9d8Sqkeo4uSkM9a",
  "key25": "4QKbogXWoQvhRH5AwfvCTHCv9vvER6J8kogDPQwfWXpi4MyB5jfhVvZ6NPy2a2rUbADfdRZC4hgkCombvVeCVox9",
  "key26": "4nWEsaghZJYqWGFa93aMVyMdiSwL4HVsJ5oRdHWvwH12vmiMwwHfA6hAx1R4fzWGb9WG91A7ts3bpt9pvq3Byu91",
  "key27": "4ACWqRBF1WdEPtv5pnJzR126G8deTNJxYkwNNZP54fo5HbMyVpHmP3DupDoJgfSgeR2MU4Ks3SrF6SPgk2GTbKdo",
  "key28": "2xxcGfvZZzTKzoXL8tsw6vgVNyve28rMH3T7pYnik49XTnzNqRP2PkUGK1DR9RSGzjoRV6614gB5T8RzyiuXNPAW",
  "key29": "3Ys23LTF3uCwXNzoTCxBsaLLsp5SSo1WzZLr1YVPpPSxCSMh5Dtrwzt9fW6p8QyduQr7jZGCvcSuQUrdosbjmm6E",
  "key30": "NivhacHVs1cNvyGphH93KVVj2JGENM281kUYh93tPRokT36hGjqHYCjrQcoMTB16A2byogLG8HbNEzDAUmsreWD",
  "key31": "24zKKzsgvYApqrscT4VNT7R4EU4mtWKdKwPM5MLA9cBCLVxByQXgNn5r84WDAR6sUGSkimV7UVuwMSBXV9U6MgV2",
  "key32": "4oquVeo3TkS4WWWzuFN9fA2KooXEdcwEK6Prz1SRGjnfHBKi12HU7x6WSHJ4Qqg8CnpfYRy7QT5JmqwXoFpdp4MV",
  "key33": "JomsZdn3fnckK14uXjcxfN3wytJTBViTtAc9QiaeQD3KRkJ2fnfgtXsocCiYxFaSZ7iKvTf44azQrzKAp1hTHvG",
  "key34": "5kW2qvRjfPMNF198v5yfWpfMNp9nmVu9VC4ipWfaQhHXbbCUPKiV4c8zDSm6CHhRhJz3ou69KkxKCtq5a9XSQbwg",
  "key35": "3usKXjRsatX19FaMRg8yVxQZFqvasQw5ELiUEneyMxB8rBM8Jh2E8A6e6kwZKsA7QjD8hgy2KY8PMYKWyVo136dG",
  "key36": "bAL94hWeME3fvavRnUERX3mHbLvQHVyFLiKMUXBvWStZm9WAC8sb2vEvwHnLhWrE6RnfgZXZv6fBkdLDVoLqHcp",
  "key37": "5Hx8uhWzCxgRzy8KpmikG3zUX3UwrCDz4abqcA5jxXVK2gsoA12N7CNPpm8n6LrazqVhZZuzntzp381qvZcQMies",
  "key38": "4W9V2s5tGiZLfbw6AKdooDhdSs8nyykLthdEKQC6VDpRgY9mYato21S83hEpQyz5CuEKdW2MfRtLsGCk8ktNXGci",
  "key39": "4eDSB6kUW3dKtngcR662PtFavDqacMJcANKtfF7tHnqnFBfBNTGC3wjXC18WFwZmJnKX3h4dEFcu1KGuCv9ZYYtL",
  "key40": "2HzMhEqArF5uZFUrcMfcD8tGCQGeK6bj6YvFe953ruhZ9YCLV4Bd7izjtYjJ5EWk5UxFJPA26RcPjLARH8MjXNrq",
  "key41": "5p3UJ1P7jiDTjHfoT8KAwsQVZDgFVLLGKBmA9f3R4rvQfvUyCn82ohyqviWRSM9SrA7fhA2GfZPZHqbGNaj2DKr2",
  "key42": "2bKc8vigKrKWwwKrWU7D18mXA2paTWc7knmVBbShcsv9DE4G2nsTH4CphWoGLvE2qzHqz76kgxBHvQsMf8RPfnTe",
  "key43": "3ujhe1i3vNzRGhnza9MhxBvptU7pJ78vHrh6awnRURzMjKEVfK91VUcweizpWJQZ85jz26MNadpX5a8GvmbXAdeN",
  "key44": "59Q2fYWqetJvreJT9gxfLFiznbp3X4nejrLTkRALNLjLiPUQz24fVAygHjmDQC246xKaBwkrQWy3yv7y5Vtgs8sq",
  "key45": "2keuhwXzoLKTDJXC623WndmwMd5XcJtoDTsyLnPiw6rkagr9ZxRdZxoyGqXNAPKB24ziNFvGkpUYbAwdA4ApH1Pa",
  "key46": "2WRRfhTbCv234SyMHE4CkXDiYYnggvwyfVqoAMS11BkveamTrST1N6R8tNB7QiHYMsBt56iBP62w9L73fm1TtFjw",
  "key47": "3A7u6bhGzoc8Qb7MSEyQ38oey4CJ1EkVHSaAKqeKfV1YaDYqVrjxmXsjWSC7ZcvFy9GNvLEMXksRvJbFQWxZ572C",
  "key48": "5nKFzHWdkygcAR1kENCx8yMzPZ6s7XzW79Qu8QJ26i2Aruaoj9KJMg3P6EgDhKdRxLeQjqiVxDVZoKBGG95rkvL9",
  "key49": "2u43mjRGKYew3Dcro9sWbANTKKbMN8yjMZrBe2pQy4H2eRGeM3szVkw33VDmDRDYkYBsGZTbKpKVGiJhpfH1PSaU"
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
