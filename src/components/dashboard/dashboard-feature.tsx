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
    "ps4mro1yng7cGquTNgGFTZVuGQaHM8TmXZfb7wWyGzTVrSNFhJhJR8HgfW5wZQzH7w1UcuwtBMGGFE7H1e9eL1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CXPbiQCkc9hL6AUoi5Mo8iFxK9Q9VdD4YKiw8Fu1EXE4QsHz5cWv44C3Z6TD2AxVQ7yMrrxcfrHqCN2jqSiYvQ3",
  "key1": "c4LvCfw14n89FHKAY7GsHqre4pLykAxZcomKxJjeyEexwhTMvDTCJXWJekv7uqFFw1eRhskVm4gbMscgJi63g5j",
  "key2": "VwqCik1fzSNmHitZfka1ZcdsLSuqn3md8kzVauKKxnKZtXanNWvPwVyt7dkSHRXB4HjUYXrJ57o4AD6v5wXbuyK",
  "key3": "3V2ZjUx5SoLB2SgNuRK1hGFUwrnG2N9psGYNMBe4aKerVS8uTvyg6ktitGxQgDtHXKG36Xo5YGiY7BwSH64zXPHx",
  "key4": "2Y9zYMNvwbBRDMwANN4c12qgr95taQUj5xSfEozg3QgdGzAjgHbLteXsTQTYHDirC8CL2aukoLJwidJw7QM4aKEd",
  "key5": "mNnnx5S5x2n6o5PrX7ifNvJiyh3MDaH9bd7tx3AmywYqLKwJwhpTEQPiXqMpsHEbbWdXZLAdWeUiWuo9FESvPq6",
  "key6": "3G2sLZTyFeEGh1ar7WLEHDxkZm9URpWdeRMA5MAMkaRN1wme7NzTdCyGe18Zfsr115mhDJKXrMN91SjmcRRTDN7j",
  "key7": "4GL4bagTHozScgc9DNcSXSSXxArpZkK3XP3Cj7YPM3hncd7exfaf3enCvvJVJzCRbZW4KRnNPTK5RZBGocjBPy52",
  "key8": "4PMZC17pE5hzA1ZuaBDbMq8oREApho4ZwsgJMXqH9sSPQdBUfXMwwbVabSi59u6gyH8zdDL7rQQVTygczCMtdK4r",
  "key9": "4zeAEcH4KycT3VMAHHjRbXHWXeXBxCF7CZM1iGYubkftQ1nxqN189aQoNoXKA4yZ7VEXSMVrh4wq4yj8vLTfR1WW",
  "key10": "WZoMGB2k4M3QiPXx3e3J1rYWonpi46PqFapNSps9oxt2T3aXU8kDKdHDa3xUanGSSTrsngYTbgGTDVEvNGCLDv6",
  "key11": "5jPwhY7QEmsKhujYVWMEmer6Xeg5cPk8xmCejYdKgSkkJNQxVQVWYc3RuN2aEe4TNPpmshMognAbY3RduJRpbK39",
  "key12": "2V6G7Ecao6KKpkA6N4jyqc486oqh1Gc527MmatF4pfVBXxVubDYNtav9Yzj9W3saos9wUAfXZJigcDS1Ckat4gFJ",
  "key13": "4acx4uygR2ghh9nhYZQ4zybg4jDCwSCuMfx8HXPSkjaXG7GW3tdWUoaxpHQY7MozBvRtgRsYdazQumaMRWEMSUVS",
  "key14": "3NTq7kDsHB163KDudWNaJBVqKzbpXxNgWwqayBXgwkqUm2L56oxV8pyaoYqDCusLn8oqdMXHbtXsVfui3a7sx5Xu",
  "key15": "5jbbpyJHQuKRNdh3mk2oPpqe9mENVQ4fKk4x4GCiPeyEpci3y4ZjzJHKKXafmBSCyDRPCPKgjm8Zse87SxGfjdAh",
  "key16": "58RU5CWeYaeLBo6AgsXio2aMNpGsV7RgadbPQe48RisHzz6yf3AszQfC8H32bC4FaMXz3ddzSG5mD8RkLrDZahfv",
  "key17": "2t9HHzSixeU8RBV82anWBB8BTrfPFDvf4b8xRkFMkb9YEG6o27GahdFthRLqwSxMuyY7w4Yczea5gLQJD7HBepUW",
  "key18": "2ekCAUwpmLJEkGmwTD9UcbL7tLV6NXeGyVujeT3KX2Fw4xBXrXQzWLKkskNgdDd84HbAnL8rRew4DK2Rzosvbhk8",
  "key19": "5KMhvURYjf6KoDDyKxFJRzPtrPtsz5dan4WCoaQFd6zLPvpUm3v5rxHhfnFVyc7mezrSn8jYf2HmsR7XGZQp1uTn",
  "key20": "5WcmzyK8ro5CJCtVFGaxHR6ET2P72vYHKUbKTRvNsq8LpTY3GTTMteAkgxofR7CJqcvPoXYm9KqCdaA1Er6TtcbL",
  "key21": "4REDLs43P1H1umd9nuUwtbTDvQVrMbFYATLLzaELmhKfdcqR5hQCLXKfj6Y5NFaG6D8zgoS7e6E4oDFQw65jgYMk",
  "key22": "3mTe48yabW3zBvYrFp7Ga9voqMUZiXpQm9FAPZLrQxmaJSVa5iWbLR4oZcVSF7v4g3AzNB4dfzqeWN5ipdJTav2B",
  "key23": "659M3v52u4ixN6umifawxWbvfo9UcAiJ6W9mB7n7X1dk9UVhXkTEPj1ty99pWL627X3abkD8BdiTTwpBaxwRQyPS",
  "key24": "5dmEyvV5j3VsQyHx5BG8ND5RTLknMArVzXTQQkkCvuW6sjUezFAjbdoK7pG5bCzcGAEGz25TQ43Dgsye1F1tPvNT",
  "key25": "3GXGEjQ19JZJpmajXpnefQFFvWvCNjvprqB2cgQHHS7ceZoq8qQurts9FswNs9FStEuTjWttn7TU5giTEeG6XJQq",
  "key26": "3evqXe6R1HqSCbwo4WBsGHFnqD1EvaBwjRafUoHMowAR3Sfcu2wZasvwVPfnvQr4LHZLNHChndnYM2oBJgUdAvEq",
  "key27": "5muFUTZnVYDBWSDfitdzCdbb6Fx6msWKCFwUEAUQHFgNf6Jt1FwCaNh9QRHx9fpeHSB3dWaYB7EeBMgRmRK3izTj",
  "key28": "61xSMCLvJq6nbW3vxR8dEuF6ki1KWKeaFeRP2dhqiRYuJpD7VM3Sbsmd11B96Lv7QhAbW1EXxjYfmyE77pG1NCLt",
  "key29": "9xBwymQzCi6Fe6MYpDn4VwSgnvT9QpYBVfaVSmz2FC7Z5UWjnbUUrfjje5DQ8eUf2q6YQXVRRTWN2ge7PfWpZYs",
  "key30": "3GWSTWYBju4APnBKf5iUB5xVtS6WP4MhVvJS3gSfCGsR763N5nRq82J1yx91SYAAwDo3EE9XD9d6RMdEWiym1qRN",
  "key31": "4yJqcMU4f5Xxb5dV5SLPERDf2QqZVqjZ94b9gpaRpX1xEFHuYob9tuuqW9xvQAx3d3AfVtGCUNSR4DQHhv2o7dQW",
  "key32": "Cw6GZApi9tFH6dciqfTBEvXRVVr5ftBAKVwEuCJcXZNQXTA6fVzvcCyNAJQd1dd1cbLWktiqkXGtH4wAV9jrbFK",
  "key33": "49cuboYPHmYSVFAzVRDmMQPvLzxnS5jPPCFwnfSyZaPkuQDGcWnnLVLqBvYAp7oayRzp12j6b42e5MSXfynbEq83",
  "key34": "2Avt4kUrpJ58srGnvdyi6hcUhaMyvFHjX6zGho9ZJcmjy9iNaNusYrHFK7wnN5LsDu59iS6LuZHRGriKCypgJoxh",
  "key35": "5EzHJgFpFScM86Lup4DScu3yACqDNByCa9Cwq9tiAb2vuqqzmrJG7MWWBphc7hq5udi3dcGBrymYocnJEjmhHjUx"
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
