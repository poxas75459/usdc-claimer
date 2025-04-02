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
    "3QLru2TZnyefhADvDS22Frv9hEDg8iZsPx3qSRKek5TmQRWNLRZBfJm8v1BqSr8Yyy9RbkPZ5Rx3KZzhVAqMTbYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45hRz5ECdwTfzD2B3fPbPoSv5TBYfqEPyzB4HXAJgPABXdxfBwLji14QQWpSEpGkrsZjpSRBQk9sCFZ1mjcTUj9H",
  "key1": "64E8Ykm2kufyqCy95GARRuf93fXDGZNJyBxrWYJrYaJSLLSSC56FKKSncdP2WkudnQpZwnKNPVrEGJnu7xcpcNKk",
  "key2": "3W5H18gHZhrgjgEDSeUjifN2P5Q8xMgEzoY2mo4Qq8pVyqnuPsNMvG3tBUcEW9mQLgCsnqDvdMxNiee3wGQTdtBo",
  "key3": "2sKjvVbujY1doka9DJ8PyXRSUYJgVJfnvzj9bcUnUA3tk4ug1tSWxsFkeWMTtH5Vt4eXK3o11xKfk7y8D1b8RVk6",
  "key4": "5Th2SFTbxvDVbjETLQQnattMm7n61ACWgAeFhtTjeV34FjPgC9uQCRWxTUEjdae7kctYQtkU3VsrvyvF3BwZEzPW",
  "key5": "4ktWfcZcYPo8FBEzySEi6BiYbEWbLghRqConzKmVPQNquktLMJMoETQZRqqiNWxxN8UzBPKYcrJFBaDve6dycxGQ",
  "key6": "4QZzDTQ8FrRWKEHNmkDYUCjZzAR9DBsavtaHHU6AToaFF8SzWFM8w2AzGr1PGWngJb8QwCsdvo1LDoE9QmFwqwbT",
  "key7": "3B1SXEcvTiNVRCw5YfoKf51dQbHHm5gHUeraZi3kYZ3Gjn8mC7ixWCcSw8TJW7bHqBtt19fTEjgh5ZA3UH3otqVZ",
  "key8": "2axwGVDa2KHS1vFsfedJPbM1y8EyEfbACjXfPgR1aG3kDpjPAbtDoqz69H27QuxzUXk8qpjSvRDumK7hoSuGZaHW",
  "key9": "3o8EiwWFCVz75fFZiNxTjQQKu3akkLGmMYdV1J33yzNRPL8ZPpE1k3uJfRmpTbDNd1V6gGh4SS7SHpUPjEdDzvUB",
  "key10": "4Bo9u12CdumWQbdQtSUUxDmzYukrSm7QgBbGoS96AaWpBdLz7NKPALQ9QHwBTuLwb7UhwmYLiJpxzndJyVMZsRLW",
  "key11": "2twKSC1vn5HMPEXq3zd8xAcG6dAKcXawN2ALjbNhnj6RLkgxfzmtE9wUWsKQ44cRhds5bAqABGFvDtZ1gm5pKdsV",
  "key12": "3oWZLbq8rWm5zBdXHSMYHodyMvw37FjBox3cJFgQkKxuxyRWptJsburXVFZKTd5PxqFCcdv1rMdxXBB6xUdNEp8c",
  "key13": "61GNETRGS4HiQQpsy85sb9cupANG7B6h78bXytQfWbwHckXe8CkositTTwMdgRTa1BdhBeaHRhNiQyuvU4XwDPdi",
  "key14": "28yKSzQKwxGoFHWw4HFeW1H4Gw25UP7AGdCspfiVPNQMaAhNM45CKKRdtaKSkcWjFo3oeLkq7GBPba3rZyXdu1pq",
  "key15": "3KmrWNfZN7cL7wiw8r6a7gaSDhWDMCaNLB1c7wMA78kwyq6kQV5SzcTJB1UnMvW6p1Skv7ShtRVpHJ6dKhMLawDC",
  "key16": "3dCEQw9t89NdQtgJSKGsZNh5Zjggh12PaBVucTn2FpacsJmxZdKss2GcYabpZGhyuNBgQYZUoipNZTgtY7o9PSM",
  "key17": "5ejUBfQqibtz7AcJbR7i1xRuc9gTMdPY1kXvsshJw3LV5QzGvyWvRgY24d5BwFLaAnkYZmpw8x4nhspdHom42UST",
  "key18": "67XKsN72rL1A1oPeAn19qwuBo85jVwcTKcxRmXB2J97vSo6jH4Hvzab86GJLt39z5z9bFxe2gg47zNofroVX3m1A",
  "key19": "62JbUdzm76TAu9FMCyPfhL1syrKU1YKDtAx5FP8UNcmVCqaW4NM1wcq2jjAgPM4uB26arN3SnkFyroo9XJDXMCb7",
  "key20": "3tSfNLWpu2CUXQjeTTuL3Wj2ZLx2yn3bF2TYmhsQRBcxhYPk6Ckoe3JwuhHodGTFAHGtEN2NtaJAeMfcLCjfLSrW",
  "key21": "3ZDjwTPX7Bbmg8UKs371hDh74LyRaYkjKSXbM2nbL75LcRx1L8Z7vCdzXmijiRE11nJ6ATk8eAzv3NYsNW5mtYrk",
  "key22": "EbQvfB3oYrt1cUEpLo5ytZTk2UGTrXrfhEvEmZFrfqkLbgbJpQWwTiZ5KePhiuZS288YpNcdKJ9D7YLqMaPAAP3",
  "key23": "3ZZdyZh2NUTZSB32hKZsDYgePiJarY76ssKeUyCSwBCnZLmRyxKdZPaRLgUkuD5762pu4xkpsvyBVJrkqToisFi6",
  "key24": "2VZFvL2e7N4D6WpzgJQZZ37BPavxK3frpxrf4mk8t6kcMa5YBcc8tCCQrJmksc6ui4hV2ZBp1ViPwiutuU23qGLi",
  "key25": "f3FYMmxqZb8VQx8qMSsoZ1NSJbbjDPGpkX23yZDNG1mxhn7iTC1UR95ou6wPFoRAoTAL9MfdL9NnAxxAu9weQLP",
  "key26": "4WsQb7gnqVNgPGTNgoAv4TMreYReKtYnhhb7tmkmktZydjXmbABB1GDXetkfZyM4NQHdfK8h11C3ep1mvezvahgN",
  "key27": "4Rw4ZoA3nYMUYpQRA95vx1qopvW5WoBFumjLAcFm9G51FHaQDThcTeqn5tar4rmJd3SVfrAw1tJYfNSPJBYFoPtd",
  "key28": "4nFXUb78QDWD9SLKS33YidZyGvZkqHej3hbZMcAtrQB9GihJEAbcjYNdjRnLXzVsAbW3x2H4FSjuEPg2yigo5Gvh",
  "key29": "2U72iCQqyci1T7TYTSXvY4R9maDcRhEwrF59Aw8SA51tuJc1cJAkSUn3E34fAa8UAU35SMtBpZ9S79Dr2gARLtfB",
  "key30": "eRJXaHSNauUYe39878um9p6TKT8GYjKvNYvSRqCKHV9fZcuoY5TB49y9mhyopJiyW4885gCYR17Qj7Y7TXQpfJF",
  "key31": "5fx2pELMPAw2oqobYzJVdjE5zbSjMjEdXmhMChXroqrKvAfq3QTv4pThnsVWiNiTkQEaNdgKyoy1iwyk4ijkkdPB",
  "key32": "kFKiuYrn37xv4CzEZzypNpxMmEtbj3RGTij39tG1qu42q5GFGfnbMEfmNXBJR8S1WroBotqtWDBHC2VdpVgXG4s",
  "key33": "3bBv9CgC3rCNhmaHyh7mpchwuM9dXhUvbwGUNW6g7SCE8PA3QNqJEBUiDaaaWRGDFMcTarGRjzA7sg8bKXowJkiM",
  "key34": "qTaGHNKBmZkxFeYKuH6sVBZAHg2fkRaR4s11LQp5FaDEL7ie777NkWgtoijfXXocLrznD8o2R1H5xGUzKa3f6kH",
  "key35": "i9GWvS6TQVuGYtaRzvWpsfLx62rR4VQk4XmJgWiMYYoX7L9qYhvEJR7QCjsSMNxyNiwoQdiXTtYhcM1Uwo3fSPq",
  "key36": "5Pz3oARU74NbU6rLev1p3rXHwdvHk4zEvuo7gfznX9AK7vm3WRX24bQBH82FeAA9MDfZ9bDtCgLRQKijxHkN47mB",
  "key37": "J7PPykooiH9D5VYyCoZi2tZhZRTr19ApcdQR7LG3V8xT8SwMrxVepbrgn4Vva7kzeRFZBLxQZcnFBCsRhp9o37K"
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
