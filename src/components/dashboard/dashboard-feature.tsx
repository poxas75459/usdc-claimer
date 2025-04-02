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
    "2w33uhL8RUeugpdDdtUoS3LE7phb625n5NRiPjUTQE3LRERsUbX785zdx4uEF4wit9epi1VYKRnd796PC4N1H2HJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27B28Vk1Cm2VLXEPDFVKVadJHsVDCzPdE5YxEwJmnUEgw71hRsQ5e9vmvNv6zWKruTz5ihhXQEP28pHKXm7VgTTE",
  "key1": "Xu5CmXVLC5ZTGsoQjQiMTj7w9HuE8mLTJhnkTuMSsrDDQCfWWPQmnBy9uGo4w9786Qb2uMUzBik7KXQXDNe7sEs",
  "key2": "64G1yvrvqhcZzYL2xnuuhk2J2iKNCCVGBQ3srQNFVr7QrqvdraqEGJcNDZanuUrqQ69qfoZgrTXKdTp5W6jESnkW",
  "key3": "3YPJp9dhR35XkR52uayusFxPCQ5Lv185xSf1HooW9qGmZvnzkXaoPjuZVZWVDMUnzgnbvXYws6ot3Kf3id5mpNjF",
  "key4": "2ehLT1TmLV7zNnpySvwknmeNBVrLp3f1XmVoiVK7QwsttUuyHuRjogMs5UP7ZE6vrfN9cK7Vu6KocEzcLPRZzXq7",
  "key5": "ikjyAoZXjK3Th9MykPVnSZ6YN284TZYSVqtytToDF9JaCBbFTatDYHHcDnzdt8ffyUknoD13X6f8DVdjcfL2PDg",
  "key6": "2vD7v47etVVu7MVe2beGvFUY6zLWF7w8FMmKNtP7YwcpDK4vyp9Lc4Vf1mBHbwULTaG8yhY2cSiFnRe8By9XsGRX",
  "key7": "2WtRSgi6MqDCG7uKKKHxHZSMfpGpEBxTrFcEJCC6hpHNFxbkNFbGKAFJMoUM3M2Z6sQZmcsaYV4NGsr4YsRvfo19",
  "key8": "3EveYRfCxpQfSJz1aRJAQgf4AL2MQH9SzhQEY15jWzGWUaVpXp1BRpzCeBsUVG9GvYGLdh9WqSW36dQEjekNyNh2",
  "key9": "EKFJ1zbY6Vp99qnDzK7ZwthwKazBkcDbMPTbjReioG64YPbUYVhYuwZrjV22sGkWpRYHUxtZECD18UwdhN2x8rz",
  "key10": "4tktUeKoB138jcqus9AqEhfSfWhGUkrFN3PEypoUvjEx7mj3DArR95ViLep7T8uwVQXifvKbQs26FcYpdbJ8S5La",
  "key11": "2V5mo7x5XyXcPGQPij8kVmZMP915rhYqyVCizG6UdntB4poJCjP2UWHyrrYwjqnxzdeBAsVx3FteTWKr9Kj9vxU7",
  "key12": "4uTjqT4fibX83QGYxEQFazNMZFFSw6cYpdxrViPuy4PNtYhiVjfiwG3V6unrGgwadmtiZaTYnDs5fc8KUXpxDq6Z",
  "key13": "4WXeCksa15KoNoAVoqrKRTafYqNgCwf74mnUsbkCcLs65TdygCqxeNyniXsxU5kCAnwauZvDTkxmQTWR5oe3wZLS",
  "key14": "3MPcnuT8oPcmJXedUSzGhuwcR6SWE69Qn25cgPdY3D2Cpgp9Df5aFJeB5jYLX174BwFewBrMUaHvYgqTeBneuniH",
  "key15": "4kgywfLnQSU5aihSdqakbAT5cCVe2wrZ6V4fi74cuyH3af2uD5FCgjciuJW2ifo4h1tCipxk6DoigQRc8RodHSB1",
  "key16": "5GHTyBu6CB61fV8b66pyKoDq1ad4Y1sQCj1VnzHy3mmMWNVGTvh7JTW3kh8bspG6fpCtY8KBXKJGjQZqTKbrLvn",
  "key17": "4nnJShgLRRrKRYJLgs8sKzBtfPB9EwXPT2mUfTMj2yJXWm8z3r9bap3sQqZiz8UQU7UqxgJwMM9HA1kCQovubUTe",
  "key18": "3FnY4wtW6UzLxMQkJDtt4WGUF38pZzst22x9Z6X9mgkXFgYRRCbk8wYJLZu6scoCE78sWFuL5F2iBMDVD1XT58EA",
  "key19": "7tQSJDiz6hgRrUHexJGK4ECPYVvVahHRs6QduWTHKHwsPPWr4MNJMzHQt5xQRncWUzUMBBT4Qa1K3YtHEjTVVVW",
  "key20": "45bwssKZaJBsXhiBDqmW7nzjcXzPVU8Cd4bMtkWwrts6nZyPg5MdXRwFb64x8VSdEPfAKQUUpdcuAFHwoFuQfWh5",
  "key21": "4YGyJiJ5Krf4c9an2vbNE95yc1s712rkVerbCscKRMwuQZA3FAQLX3QwmQG83b5UArFDBv3uWmaX7PSYo8y79Kj2",
  "key22": "2mRNANs1wdZdrEpa5SGkeYVbwgJ3PqxUhtyj6Uvzfd38zEoZajg3yjuvG8UDhKDeFhgyfKSkUq98a4sQNpSDXKhz",
  "key23": "517vSMPPnhhc4ca8mBhfUHHrx4ZfimVStG5C3bXdjWzAtmzGBkwiz8SHJbMrzy6abTz9aZGYYi4GzKP8wfD7GeDz",
  "key24": "5kch3kAEybqk5hf5DAV6BL3sS1PtkrctAdnmBLEsm4VW9tDHsuiAdvG9sLGobwSZaRsbU1jrkjbxcPi2QmSy3vNj",
  "key25": "2R5XhXmweoaTunuY6SeT3nVWWLw3XxddQdKNSfUZiQip7dMJcpwpCknHvc6RCBJF5Eam88tKziDw96iEGfkkvSJC",
  "key26": "b66H16ea4NQ6LQ8ji7vrSQ237c5SGcrHCcQTs85Fzfnwga9sGp8GT1SoaamZNXGhNs7kYYsFuVY5TaiBdNcFeVf",
  "key27": "3fTp2vX3PdncrVUacBv8fhoAHnzaA1JbwZ2SrboekyW3RDkNV9fWmwQGcYksmYkH7MVnuZUgE7ArJzH1uXWFdSLn",
  "key28": "5yvGfww9XKhcoEymadh4vYSuidKQeLc8Mpy7j8MzNRcijUEsxvep7UdZHsarVWYWM23QHJpCLiyx9eE3YyrT8Edi",
  "key29": "NsVc9J79EKT96BCUfhFGmHHMb3F1ZesxnncFWk2n7dgwGUhZ8ntGE6rS6DxTR6mqWvoa211Pq1Z8xqypnXVdKhk",
  "key30": "46Y7M7rhEu8RUVkJTLa2nxEVi2GEAhxioA386oyfkjqe1r7d38gkwVs56RWqWcHE81oYsw1xNgp82Ehd9vU5fVMn",
  "key31": "4gZkYxUwen34X8yxFB45aG9NzvJdPJ875kMW5unTfCTKZ4HoiFHSiye3roMSHHEk4EQvoFFtrHD8NciXXujegqJA"
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
