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
    "5ocndi378PQkWwCmHKvkfLGGM7NX25MBJhPq71s7TmxGM2br81yinQvJuFtjRfvwNkxs7ab9VmgLiT5bHoPz2tUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RGkmt3H9LDVNjNnDq8jr37mPDwzpvYpm6JrgWKqvXqEPk7Xw85AxRucdMwV3pwc3kyjDy1g5T55FCwohSNsNH1Z",
  "key1": "z71kaYbBhvr1GQ45XqaXSAp4SWatKMaaaiBVBCzqsGLyjSuohtRMQ7Emd9bMP4fHBUU2rRommMW8qbqdco1T6Sw",
  "key2": "2SLXADz14e2aM13ziR49t73EXgRo669K8br8PH7mrkHLHCJhBRL6iFXJGpvY2noqBtgNXZLTs7VxQFaTGKU24QCu",
  "key3": "4Ls8P843WRW5ET13XCuMZkSsamQPGezZJY3tieA7dLs1PcpQTZSfUFsGe9782sWN2zgGqptMDaQ5QQAyhwzDgivH",
  "key4": "5NV26f8Mvbkbvyje7Ke1qxzBVkpdRwJaFN4738Sgrfo2ZXx7EDJWsy7LWveh37hhEutPvsVATeLJXDFYoCcKgR2p",
  "key5": "3kuhnZkmbXzKr6xNWgbdWAtzpkV9igjpd66oxx8113uRDDDNcqA8rrwczJgGuwfi7neALH8N3D478iXiNfXSdYJ3",
  "key6": "287B1P1xXesmxF2uvKbmB2AsNgxWPj8Ty7h5wVTMF7LyBdjiroGHWamzPUXFZsbGcYq1h7BZourjzCTP48kPq9j1",
  "key7": "2nbnppeVeNmoLpeu1bv823z4Xp7x3tgJ2vRF1uVgWLtDRMMDaz9yaeMJ3Cm53M4tD9erxcSh8CSS9r6NDYVMNKQa",
  "key8": "fwJc3TRdWu3cTvtj31nRLQ1UfPuQgJTJsKA9pVTw1b81YnzPBtohQAWtfJN3KKGqJ5tSuzCirUBUTGvsvAQqmUz",
  "key9": "2HGCj8RBwu1qbk2id3zYGrwsvkpQhZN8uETKS8Y8m8WjU5MPP6t5DomzsdAAGyEJTF2rJ9zRfiiK7znBQfvLc7y6",
  "key10": "EFyp2vH8gXrvtMX5BroM4bX42fuWGWrdeVrWRFSbcDWstR8LCEksmcZcZyznkAVhLHkCCoa2KfS1axDE4pGPg9y",
  "key11": "3G3fvzBZUKa3MA6Y8eUgyjr13tEzuZGuJU7ooWASg2UqYb1ttYjEq6L7hy64ZTo4HEW3Wad5eSfzfgTg2FNvmin2",
  "key12": "21uDVK2UqRuogCwQbwJZQjTC4rW8dkLGE1mren57SkfiRzWAbrkVQ7E7kj7ew4TEpGLYdE8rt1e9L999rfRcmo9w",
  "key13": "5iuNFQYTAj6ywduLaksWBCj73eBU3hNZ4Hjh2CKabgLgjePijtq336RgWpUbkh3aL4s6dWpy6dzVWn2QLoCm5cWt",
  "key14": "6hjYdbnKsdWRSypA1SrXN43HCdQTkKMJQs3nfndNaMYQSziQBULTAbFRPNfydwCXPvJqG9Gsk57ZjXn8cR7LgUM",
  "key15": "4sRJyU7e5zWMTC3PV5BREbQkVakqGyaUntUcryvsAEMEi2frXKLus7KD83nxJfGJfnhYUif4tE6ZmbTCyTTV3ggA",
  "key16": "2XMGdTK2FCU6WLkWxNDgQZuKfwVCnMh2CU6gHvLTzWkVok4mvp6Cr5MuVMZmLKvFsPtF5a9b6j9HAyBs8eTtzoQr",
  "key17": "5WiuEQt69rk2YtFt4qND1jYQ9zqdoLkPpmsWTM5BVpUoHNtMD2rkgzHrLd8C1N4tsGL7XK95p8hvxf2wdpSmfBc4",
  "key18": "4tQeajC7JHmwnDVGTY7qUi4vD5x41eWnKJKMd79Lc9X5o6bK9uiLPNrDVk69W21wbzmbLRz6Jyq7UFkTuTqRnhRv",
  "key19": "5G2mkMXHrc7jyJ8ix7dfjSzCviyBX21iNeASBYCbDrbJxHPiv7ww9MEp99ZXtQKCRNCuxMgJ6KcWC8WZ3XnqyViu",
  "key20": "5Htq49EbuhpCWRqfyKZBJs4Vh9WuQK8Xmp8L35eL8ySvHfkcUYe3L1JXCdYeu7PWFoGX3f18aM55WvuEBDRBoJeP",
  "key21": "5uQx7rTGtcfmL59dfYuATtjZTrrhb9J6hH9jZdAYDnMbbksYeLgEYcJCceYoT1frnHpE3jS5yERmR2d2oqoP4c8H",
  "key22": "5noz9RRG89DULxqmNiSCXUfYNYukPSf7ufoCK2FvefdMu3bC6c1jhBMhk4onst535grUSEi8oTkrKp46KZMNh88X",
  "key23": "fpj7k5FLMaeoBMuyLACEeox1cVArUTb4kVfhkMonwFAG7fRf4Tsi8mafCa88bKEy5YtCoMvjUVU2HgjsC22RVA5",
  "key24": "5zLGQuMqE3PR8ER2JoJ3gt5eoQ1bw31iAvTXASqRwNjFrTH8XaGEiSrKkAfCoLeV6KethiwcihrWozYkLWMSBcox",
  "key25": "K3G8oEd9ghLPWoKmaUkwRgKrrZuGt7YG2ELiswNQoWynWySEMKpUiuG6szzVqqZZ23sEtmaohJ1Nag7BtDsafZD",
  "key26": "4RXrDTXcUvfyF2HKzAvx4ozJzasmNtjUEkyasUCgTFKURi4eSeJgcH8UjN7wawWiQFGs5jaqbfSw44LmDWaEhT5t",
  "key27": "CZbUkQPPbxQpUM8HjNGvvwNJd1bCL7oDjDvXzcJvW27PVvSg5315birXecVbqSURbDhAmdSANFqf1tJJJPqesm4",
  "key28": "2GSrmpJrvPw5AxjMsvSDgbetxzZWPugx8UzYpFxwEqGSbqr18qVNR9PS2DfBYNjFuDXxAtFRdJn9DLQ95uKnvp8W",
  "key29": "2gT2k9en9aowo1bwLpvy9gYmNcXVfY1TA8KMHA3HPqLHXJjdNPL6d7BmXsQ19KD4rrYGKQ1jxgKp6SZms599ZcGv",
  "key30": "4DEoGNrV1UsuPF8k23YmpKHGx74HwYSczaTPv1eWYxJWYo1cG7ystXZ8m6fRaQVwfn1pnmDCkQQEq7PgyJzrwMoY",
  "key31": "T4cRtznt8FFT2GEFfsmwPLm62JwPTogQcqeqceosFeVJFQykTt6ErWafdab7AQY3yPqnDxqAfrWEJg7uU2AZvhk",
  "key32": "4cpPFXdaurvvb6rL1WsFYNeiVPBJDPtGmQ9Hq7U9huEue1CreNmSBQKQqz1RxQ4CKmHQn9m7ZnP1AZFDGbWgmNZ",
  "key33": "5Ctz5DHSmkvToGWWYp5r3K7YXv6N2DFWpncQSZE9akMCixXsanCAGYKZY1rc9MmXfc72ZiTmCnUbXwRwZvj3vWAt",
  "key34": "4v7y1xozh7M1VwbknZcNWjUHxnR12EJi7Q8ELdHAXYQFi3xPQeFLUyDUYz6k9cPmXhPGQmSS3UMJNemLQ8Dg23Rj",
  "key35": "QMPqJuKiy4g4KdpsNpnCZJVFvcHLnRPjMxbtg4uhPcVzLDuM2jpUSBrY3uJ7sKqEwXVpR6KzybiDGbTXHwvmo6t",
  "key36": "2XqjPp4piknWKUNnFQWhqtZaMH26NaRvpVv9bc5tJZVvUUzdgPB9tv5jHM6vKSzZZXHKUEozz8bUPhotF7p6YZRk",
  "key37": "5sZEMVA2s6YCYWC18ocx9zShQpdC8f1xP4WEKBw32SU3TTACahhXDZew9APAJSwdETv2DaG8XL6gqPnFjR6ZHqVi",
  "key38": "R4yapDy8cZE23hbte7mafEyvTFu4nkAENjEx3JJizmyH5prqMwLdytV83bzrSdkCkqJdaxP2tbZNhvCafQDUKGq",
  "key39": "2gC5WiBuAysSwNBmpXs218wP1pmKK4444Sv8d4UCop3D8csqqq2m8wz6j9Fo9KZ2QKshdx4qynZDbk56zD3bE8f9"
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
