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
    "5bpZBpFdtntwt8mMaonVjMaF2c8PET7fyxvvuqYmwdWuAuwUeqDP1kvwV1nYCY4QFdeeEUPHcU4JdsCRRJeWTpRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f51vNjCMjvRynYWVraLJqv4QaVi1yaD1hne5kZiqEfLq2mqjWYJSW6KQ44qBfUf3dUK32TUuyJC19BK9M5rCnxG",
  "key1": "5ny3KHmK5T61CsomzrnCj18tqtnhk4aKwP4GB7VpR2iA6v26yoQRaf2SWE6mdDeFu3RMAN2RFZ5BgpUbAqDrRWLu",
  "key2": "46wQZtrTPEiinb8sB431qXss6Q7p5xEm95CpZf4bXvahdXSiZqs9zAtFDp35VqLhfvoBD3mbTLUVkREkkj9Qw7wg",
  "key3": "5wP95sF8KwboDA3EzahAGyGkoycJMDvXZn7aaufJWeDHHonhthFRxHXBxqAhYYdmtQN2ufSCep8hPD4G8WykJv73",
  "key4": "3zUnP2Z6fkMRC19T68RLm3jdPQBBEmWFf2zsbpiPB8ASop8CCZGMkTXG8txXxyyrMXVCFgSY7ZFXqMjRrucdfyth",
  "key5": "5P68HqUf2uNfRTGuXXKV4wNaR5KgCZFZB4fixp5xnjVVpHCQ24s6ZsrvDC9De3ooSaTqKeVxgmZ7NWp9YP2kz6EC",
  "key6": "HcBhh5u2xHoyZwUB8kj8KQbiGvEUj4ojYzgPe41p2tvFjUfhGkfoNufWdJxxBCySwG4s3ZBYf5YRTN743DMkcNs",
  "key7": "3P4YjnR5xDhe7E1RKEXuCGPfHerzHZs2tR6pD8QZwBmT6VsrEESoatpARbbjcCdUqioNgDHDqnPBoDatkcCXFpSW",
  "key8": "2yhMb63QvhBtV5xxTRJsbr1cmg5ByN1ghBph1is4EhZoWBANtCJomqwQ6npFqNWVfBBWcT8TakjVFk6dgTGo287H",
  "key9": "4aVLu5CrQhxrHqQwen9EARApabJCYG8qQGr7pXtKznFmwJjJWhwN7n2Ptm3RdQXek9P8jVptdvNseXinJTDxj4K3",
  "key10": "3WWQmdKHCNxXZBJE6mu9KH6WiE8nfwZACkRMPJRU6C19LuLr7bY6TxXXHMiqUoKYNCLjP8QnM9Vo71VxHiAH2KWD",
  "key11": "ZsMmuwNjFYMzzrf1MAeUfCsJgeEjgT3t2xC93d7Wv3KfDCkyA5mtvq9zrXjhWBwCiihdaRJXDRvKHvdHPXE4LYz",
  "key12": "3SM4SArMF7Z61pUApaaVEXdzav7QGvaM3XLPf2kY5Uk4u3xDv4b2iUc6Y1uZm7Tk77kedNc8tdQAvghWQbjQkzuP",
  "key13": "3EPC7vGrx1ZTuL4fwiDTfAuSoUDZLpe4P8WfSroJndM3XfPDx9HRQnBfaM6jjSsDLTxiensJytEi9iifSKs4EfRh",
  "key14": "2BbUfMGp86F615a9EWBRkYLv6juUPqUVvWedXHtb4bbiRvP4ZpAWxWqDE44qbxuDkNuKztuQtMbHZUE19sBDobMr",
  "key15": "du3m44cnZ8v2aXbRy6EritPjYVKXZBwnE93HqMSQ7aST4dsd9sURkpwvhoX3MjwHHEEjXrJ8s1R3kg2MirDkgqH",
  "key16": "2GKfNo2KEnoJzWJHic29Vy7o7oEhoM4P4gvD43goHRMnTZPHbJAsAA2EHUp1dS5Kyy1YrKoYZxqLu8CLU1qSWQcX",
  "key17": "3R4GykgVbn446io4bFdf9zDMNkfQfkczxfe7oyqnERCNqAzWhX9hFWqNBYXn5VWH4bnTv8ioVmrRTVkuiuEXwgvJ",
  "key18": "4M8k8rNE7oHpLQsLhUq8B3xLUANtWYCbQSe8L2joirF3xWrcqXmrGUMYm2VAgg1mJPodaZBn8oJPW6By7ru4Lbwb",
  "key19": "5gUSWwf9qfsVT1oYkkBMRsn8zePcTp4FCrYnXtGuoTDjdkPps9Wqm7zm8w5qhHXjrMXrkAkuZ6pBggyY5HhAirBd",
  "key20": "4sxD3yjzmGS8LmFv33K7TN7LtAGLP9pC62GCMJKTB7XbbBSaFneCtzFTiJxRQ1tiw3VDHUq9kV1vgnks73ubRayP",
  "key21": "27eEGNw6dszeKEeXYPuVC7NhCdi678jYeRhwkVwfCaKGSYUTZWFJcn2RtqJDCQgNi4J1KpEM7AMRR3m18zmWSiYZ",
  "key22": "5KbhiXTKs9487NTeoTVKgTzo6Hw9WSBrZvTPwGFU3vHRz2teTEYG9NNjgmu7DNngfqKsgKdGRpS9xLYe5o7xrpLW",
  "key23": "adNL7RcjNRqPzScmZtKe7M68MPzwhJw35oACC246qUtqb4SXKigGspMXUosZwRPqTuLmcmsi6s6XJx5Vp5CCwJw",
  "key24": "5DmQqh5DjPNzGqnQsyoC36amUeFizkXFEhmTXMkrKYmS8AAaa3rMyfCGbvX5facFAsu1WcPecyfvRN3KH1Ww8tUR",
  "key25": "2BrfC992Nun4VzKXBTdXN3vFGfKvbwwLuhQuqoekgonubsWY8uDzGxaQBazgga9yGaS5cbq2C662AydJiUTA1yVR",
  "key26": "5pnR5dpGRdJwaHiFXcLhshF48gfZRxpTjvyBMdZEa2crKuxNoYGta2p6SspYdCQGpCkxHdNtPuUmfjsdSeSVu5it",
  "key27": "gfzLdvcNzTMiRfLU3RkF7hAxBvzGFQWvzJ8C8qePBXFFGe3JDVNvf1b5vFFXVM3EcPZUfv9Nfeeu9zPBxCXSbcT",
  "key28": "2BVZNgHBJHkDa7E3YEzApZ2KeS5ZTmDtG3gFgVazr6LrJYY1jDAzZMvnkKJ7QuJyehvZ4tnZXKeXSdom6ZqNUNZ",
  "key29": "58b5daLDP2aXmkKimfcmPkUWR1mPG5fM7GBpQh5M9QuWZ1ox6GqCU9zyvmZPJqRAo1aWfCGvoRjoqB9vKwd7PqX9",
  "key30": "qokKJa636HfYa9aDD384GnJdkQYMo4JR2n8HdzyTSmjvsU28igij8MLYk89w1kXjLbBc8YxLSthEsALx8akBVxD",
  "key31": "37swj7wDxdYoT1XwNWfM2aBLkH7xd68BRE7DRs1pjiRBdNhEydEe7mr9uV4LQvc6KapGetaddUV1cExHVWJ66ank",
  "key32": "63q5TLdM1DHhfZvY2q6wtP4JYVigtRaQ3xeqScnYGRSgMR12xdaccn57BoivBXQSQTegHN7oRAp8RzXuzHwnPo38",
  "key33": "5HoqWeAhPh35zqHDUPEbUMHvrku87pL52uLvvLaHzXvTDngYZxbXmjgVhxiJRbQUEs1okecsXJzAeNnEwcpkDrQN",
  "key34": "iDHkHF3fNunuHEPrhux9oqmztx35hBX7AAiFLnju7MVB23a6gQEMWsUzcCpiX4hWbtwneAiSzd8NWa81kRbpqoD",
  "key35": "5vpGaT3HxDUVdr1xaWKx8fPhNGCef4RAsBm3Rb7p6NTq99FXaEpBEXmbc17G66wuyD9EoZpn6kMkLhUFcFxcDbN8",
  "key36": "24FhUVXXfVVMuZgggjbyYasA6guhaxX2uk3U9DCiZfyG7WBnM2QrVP2xn3Qv6VPDh5wA5kPBGmsu3YXPRQkx56E8",
  "key37": "52CzMZ49rTVS8XxX7KQ6GBa6AQradNf9iySwHShSjizrhGGwEK1KEzjTWVRNuncDReu3geDqHJUCgjRHHB5nw35D"
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
