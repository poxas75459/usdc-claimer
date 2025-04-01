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
    "43h9fceSaSUDcTjyhvHGQc5EF3gYvQRLqWevjUE7oeat2wdBf34XJdJSqJTBX5CTejXTihEY2s7HQCPXYFT9tH1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XmLD2WFgh13yc4ihkarhCESxVMYHTv8crnnxkEYi1sz2ukKTMSjbqTUBzQtzfkJvp1Bi6raaY5bGjYp4KLoCQVc",
  "key1": "3afnUVubLQtXBHPA3cnn5C7SoYCvgCq8m1XDofbtjXhBA9oez16UdZENymWDu7pUo2HCAUwmtPcPHWPL6q3n3Xxo",
  "key2": "56jRPmi8eYiVL58qdmk6DR8je5CaAkVEs5n3Y8VnrSEaJHfj68QL7JZ37kUkwSUUpQyWVGjmA3jSsamydWs3tsE7",
  "key3": "Dkk5EFAdkspaPKvuwpPw8UzXRm8UynGBuPtfVWGThZerdRtuT7cb1tbrSCC3V68dGDPRm4LAGPHy842SNDBsqc4",
  "key4": "29xCQQejefRyvzyra5wtKz58ag67QaL85kXZXkgFwZr8j7tUBX41RTgiEkHnX97fCiHzXkC2QbUibWdqhsUvejKS",
  "key5": "3g8k4VxA6gMyoArtPs7LmP1aFAmuazQABY7N2EWyD9DQsMsycfQsMABg6McwqPQiN3nRwwYrWVSB2rKBw6eWTqQ4",
  "key6": "azdtncn5uyZ7Yem3zzxoKAqHm4N98iU5VL6XtANvM3Dw8uHVzKwjqzNjDKXf9ng3of7u9jd5ZFvK7qc2RzhQHkf",
  "key7": "2ps5aKjfQ8pLEQuadSRW5ZeJXEDmMipTZhutqQVmeDRegbmCUsKhYKdJCVvfP2yi8k596J7kiRFfRnrmot4QW1Lr",
  "key8": "2w7q2g7MftdKfRnMJ1s4wec6NX16HUKsWuX1ver4KgaGMUJQGjQ6pDmGoiszbqNeJp9krLdjRVBoYR52Pb9ULtuG",
  "key9": "ZRbm2WHdCsdnXG2wMJ22mgTjYSQgFwSB2QPAtGuegwK9jX1ykix2wskEDSvHJkLJoej3JqfMkUB4NfP4VMHezQT",
  "key10": "3sw3o8eTSbtREqNnhtMgvy5NhGLipdGrbPkmzGUmkcZkQjTrm5B6D9k35uYMtxLo5vjg7c3AvF1JDyHhkem7ScVs",
  "key11": "7XRcQNZQoS8yYazbjTRPf91PAiv4fYsTsi5z1G7FEQHh3x2uYeUUH9YCFzFnFinancUHze33XE4XdttcjNUCnQr",
  "key12": "mNgXeiR8GmCSDqTZ44TqXzT768C7B2aPivPwvHnH6ZHUhCERMctDCvHs8EwqQhaUXT45qej6vREt8gU2pfR6zTm",
  "key13": "5Npqz1gokubL3cEaPYzkTuxhV77UWt4no3v2DGMzv5fmdHLYCSxjwtW26zTUp8E4j8NmY7Xi3TRfgVKLC1VaxumB",
  "key14": "4WLzSS9YGYXCvdS2mtuYR7aTerq9h1yEqbANfssXjpd7GA6U3e3uyvggnuQJU7gJqh3pmndtjQzHjjZy9C8quDDM",
  "key15": "255vNMtz4VCEyHyn4qQtXszrxPJJpabbpeiaQhm8xKNqh9PnRdHTtMM43FMLQAVDBGYKwYAo8Vuty8jZhESvoRE2",
  "key16": "45dcLsWRCiCJDv96ZqJ4mT1ERSW9ceJuFxw8mpEt2KHv69fYguUby88i9JdhMW3p2buo5SRNhuvkKy1emLd7HFd2",
  "key17": "2UxqPc2puQBfW4msn9kN4KRDm5tAZdRM593gXRPvhp2rdQ3TAQwg2u7UiMQBjyQ7p8zwC8qmFJmhXK5GjLLiTbLF",
  "key18": "4wWc7RkY6xkqkVzLqsB2MDASe77PmENXkWv4rUZftzhBehmzGAdMp1dhTdSEv31fLujAPs3PLqhFSvokjPF6Fj6f",
  "key19": "23zndNZP9Q5WNnzXYfQwZwFqy7QdgaoQ9FKJnhQ79txYDc4HycdKV7VwS8n1PWKJEwn7XJZqByFete2fdwcvcf14",
  "key20": "3QpzFmGfbCsgzh2JjeDLsM9ztcXSjbzceFJM3DDDnM1L5KC5VdWFmB7sfvtsZYZCGa1AWE2sXpWxgk2WCLhaf5oj",
  "key21": "3YznqWvUQQaG77kn6KAWxG8LBuorvWREiLP4Musp4uCma1fBRdDFbFaXn4Pk5t9kMrebTbEHMPbZN1PTDPaGA2XC",
  "key22": "3doEM2VffJt8ngGV3wv3gKYR121icUHDGBQfgKddL2Hw9PTLa9vfwR5fqLBM87tN56am6BXhTsN13XtvmcvNvpCX",
  "key23": "nRVi8Kd6u5RCYRi8LgDDV2nXqbZe2rjt5xQTp5p6B7oL1K4bCbrJ6x38ShpzRGe5ZGwoP9MFodQzYkhfNN46dLC",
  "key24": "2G1t4DUbBFmq914uc12T1Ww9p3jb9dovNSTdEJDhkMf857H2WedMk8o28zTEuWSBJAVAZQCgRuWsRhYVMwGMqvoJ",
  "key25": "2NunziotpFpxacDVTDDLpgGSsdaF6pTVR37subHoBFdFjw923q8xwU1tHN2Ltb8M4fca2DJNTFteUJz4ww46BQG4",
  "key26": "E8Crw9HWZP3Y6XEYgRQXWBLbvtGfoT5afYbKDThP52RJ3K5rgxUg2ZjJVukApuJZ3FhUSBsLT658k8M7F8pbm8n",
  "key27": "2GZjBYqw3NL5c2mQhrkkP9YzF83fuS83a1hi9AeibbYuyTFBPrTS6VWWzGFiPypzfmagMLUVcVGTKMVLVegZ5nEx",
  "key28": "4tt21J3XHBYwmHzti5MvpBUNek1q8NfQc4cLQBL2M62qzgUDLARcZiTLTrJNPuTNnSwCVtshLZ7tibprsMYhRDgB",
  "key29": "gmZhVdhRMdywTHc9DVYudZuS5amjWqkytJDvkeaHvUMmjiB4ggRtU1vthk1aCpeDWqkuxAXRZcwzQpuMQhKZ1h4",
  "key30": "4Y9q8Rvh3nSSSz9AgkFk1YGyod1FAWFyY8eFfuqpZKJ5aCJ11wyfV7azV8ATiXEuwSA2m8eugDxmzmKo2V1cYnQ8",
  "key31": "n1CiLQoZ64DniHyviXsnGWYJ6yCb6NS2QWJB1ThaccEPTmGiivSsQR5y2dojTKdybcQJ9Y2dTScymPEubzrXpse",
  "key32": "5xCyfZ52K9T1dgLT9eyDdCmuANjGYjDquMq1RABQ1rw9Qg8TQnCEwMKTeLAj16eGDJqxKo56eW7vvLrSzwtGKv5K",
  "key33": "3ToRPMBDEYg3CfTaJDs5n4LtYNFe9b8XqT2WL41FD7CxdLmxamgvdQVm2zXbWBfhxA8edxcwHcHsJVRa8zh4MrdL",
  "key34": "3W5hNSdGxNv2qGonNMMrongW75Zad71vZVszRW42JYZ6PsD6wv1gVNsz9q6GPxrHSDH58KapyezW3gGq7Hs79tiz",
  "key35": "5WBqn2BBxtT79daL1pKugLZ6cse5L25DML4PWLwjop1NjcSZFGEcdhP2VavBAbwMQmaRPHv9mausrzX64ByjPXYG",
  "key36": "3rQ9vhz7DgwwQwZxYSr1YpS5332WQsv8a7QrMhR2aCR4ZrdNG9Wb8EaqLN4khyYGWNfCve3Xz5Pn1f9t2DMYnJj5",
  "key37": "2fHxN2AcaK6Jp45U5kKCu9jkqGEubpvzk2ZqnHZzJDUdaaWyEWgJhAqiUiJRL2sisXJ6vTQ1mNrHKVtkTXmib66R",
  "key38": "2BfUfC5DUxopm7ugCF58ZDwWYSJnREMeBLCYkFjmGngT4MSqotWxD9eFgPv4snMuhngx2JGq8wGL7NsrpsQNwgbL",
  "key39": "4PRjVHPUVMX8b477iFPWagDkxSYkY8UDsB3KUwXDZKtNeF8PEJdCLBaRVUMbzCSfATcTmd7NdTvDoAJyJsCbwpkS",
  "key40": "5Li3xsRQZsVUU9m3pzYjxXsRRDCgxdh68N9nNAFR5StihT9soCCNLFuPxSQ4sMHDeWHc62K7HVc7iRoWEic69uXE",
  "key41": "ok3EcmFWoU7peAnCJgDEMzEqMhoYJPewboYhgLtfirGAdNNydXPxGmkB8ZDvHDMuZtJYt4e6j4fTU6YuDSdnwQL",
  "key42": "2TcewDKUQZm8nwcrdv74AhKC5SnHoav3df6UfGYYoaEVLadjYmUg1cDaykka9EvJ5orBqqb3XL7afsvAj5Djt2wB"
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
