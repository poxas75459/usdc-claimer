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
    "34MQXtu5BDWkcH7Nb2Wqn75iNDo6mAXaLdi1cQRdvS4c9VvPoisSmCoXkS81Wa2BgZ4wct4EmC1xiGPZLh4dsxrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GcYYy44z45vSw8oa4h34kFCt3BwWXh3Fun5FeELecJL8HSVV71prUMJEWKpFsAp64CGuKK6S33qVXW8V6b6KsyA",
  "key1": "65SLM9cLY4QsDNHoJp3fyKbGNhhxbfSkJnqohAd4e8JviSTJMDrFTBAffFEwDbriDnoJhU6477SEHAZTSPSS69ov",
  "key2": "4ZAbigywUghnLCMuViiu2ud6ehX8nK8XurrtHLmi71jawSjewrStkZevbVzFrDqt2N94x8jFKUvZn7gzKcNzt1X3",
  "key3": "5UF3D61pY6eMnLVW1vS38dW33XE7XpexBCxtHrFdemTpPBDRsPTbFdHMML9zfvJtu381GLYPunpFGRPGQqiGn72D",
  "key4": "4GqqpnCRWvrykCmkLN99GegE49uXHv8WwgkBwKSXwwKzgsWnV6LPpcupWJvKZpFe6ZHMLUrB2Cm14Pn1hWU8Kq5h",
  "key5": "4eTs4mXqcNCbipmioc8aeVSJronheWPhLD6nDZzgQBfNcN6z62fS5G65ouwEsKyY66VcVeC6hRkdkqKWzJSudiSo",
  "key6": "38G9b637KaUMhRUo8QKT1aR9XFJSx9TtXzqEq1fFDeZShzQt5gzDXHYZPcrDgS4rY6J5tPu7Q4wEcC6GhfsVPLbi",
  "key7": "62ANbVNJPnCSESKAWy4yboi8bXTiL3cv5P4oTvdTpTwiergnGh3s8bG2Uhp8vAwGr2zbRxisN97ZaczhmXZ9DxfE",
  "key8": "3GXH39XAiwQ3u82kNzmZ9zNTJocG4LVNkgGksVstFSTWQfPdnj25SeUtud9tAXpypaxjAjH7em1LAqkUFUb1t2Xz",
  "key9": "Gs3NpcieU3z2Pf2kixTRwiQWQpyBVKGfKkr3aVR66uJaZasYiZoGYvEzFBpAfESDegBEYBcYMYaq9SWwpbRbnyX",
  "key10": "2EPnK1BBoZaJAVaAXGrMs7ihd9645eP5NTUuby5kJXjFkDyc4NShbeztn3fMtoKXgQqKTBcvnZeAxeLRp3xQNHB8",
  "key11": "2EGewBSUsdim8NnQgujBZ61qpehMXnLdWQXPK5JLFZaT8f9HcRWF8Bk1jcUvyUQwC39Cs4AXjVUkYdWuttX3EEp6",
  "key12": "9S7omGpoUfSPScZYYaZMGneBGyxqpbPUNehfPjK2zjrDRk5n4CVucKvucZDEdoUBPGrQSc4rZRqHTX8yR1tpYFT",
  "key13": "2cAJ5gVNMpytuxyapzFFxxWNh62FUwePp5WfANX2uzzLRVTsWfsga5Nr5wezuRg7LiQXVtsFLoXbW3bHTPnZdeyh",
  "key14": "5nUmQKsZCiQBLByq2tebmvcoFt8U1hQfZY3wkdBch8Dap2MxJtKJ4haMxZuBo93Q7RR5HR1MRAPXpRDD1CDoZNsk",
  "key15": "3FkAiMnvdbMrCXHqWbhBcihNWAMAeeFvfgnC9HjnnseM8XS4MDge59LvJXgnX8VNfuSf25DZ7KSgo3NH2uAWmN1b",
  "key16": "3YXUgAKNarLcfDEo1kiqw4pjgnjBS4CVrxLpA1GMQsAyduQ4Hrb2NNkKDouFVs95baYMGQUSR5hofo6SR76ehqLR",
  "key17": "5SxkwDTvMTMdXRAWNduuoVAk1nBVcQEWr9JxszsCLZnYLdj6CSCFx3CzCafeTHdgWvWPtnR43pnNcQk4XagByBN6",
  "key18": "4ZQp3rriZ3x5nSQ1moivKEuihBkXeyrDukjS5qZchLWRqYqbkxreB1p1aYn7JMQzDnz3M9GxNf668d6f5uaYLRz",
  "key19": "2GVZ4nEnFACspdJBzTeenjQiBQTRQk9jwvyw6EJQp9EUSU2VLNbVrh4paiDthKEb3imNqSPEPx27db2p5yrZnRFn",
  "key20": "4FxJGRHAvmfksy2mQTu4k2Z6xWJ5CMX1JaJaHdmqX96jHgvwWepZySCL8FB882WF61odWKesEbPaTqhTGokEDRJR",
  "key21": "5W9bysMVAQ3fSsLbgd71Ep6YzycsKDP9ifbebCiLWb4JAQHjDhttspMNw8K1X6JcVCfapbWF4ZhhynwGqhYAavqa",
  "key22": "5rEq16kywRPpZkTEQ6AAYRxoKuNiAmdFExXTP7SfwYVmY6DM3eEQmNhevPy1BCtozZft9v5NtpQqeRGk4CyCw5xu",
  "key23": "2wvERHRotU6BFLBYyAoV8EidvzBQUz6T9zHHCVxPN9VFutkwPFeMdYsWZFh3hDHCKpoJ3feHS7DLgKv6yE7B85AH",
  "key24": "NfkaARDvvRa66ZYgP6TVduu82YE7fgidTozwbnJDTqYYEbs4PKFSbSu7iZ74QpuShRVA1uLznNGXKehac6PYMiV",
  "key25": "3cTijqVLiYEH3dZqbXELYpqxqkTe2F3U54D9i8NwVRjiRkydPmWt3SQ39CFKE6aeMRwrCWM5bXuwU33Pdg5ioKAw",
  "key26": "3qWHCoxdAvzMZQqUyMgkq4iBys8MP3BWsXS6bsdCnJL2F17MydhJkpNTaFgjpmDP8oEGJHmFtzTVFzPwD4EDFixA",
  "key27": "HGQMJuQNaZu4TnUeoiNEPYZbGsAXn7HL2wEr5Vqanp6NGTZNrXxWqxvqG4m2f7QySmGA4GJujsKj868JcALZ4Ea",
  "key28": "4hYs5u6Ciq6HprFbynowDuvV8hdjsTJiybtunkTRmKotgjsdpRSrdoCZK5iiwEnxTsjz15jhUEBhTFKK9TYhDNe7",
  "key29": "5BrbeeesHvTKuLP3m9g9cpWdfRTG15Gadk9eNfZjZ8W2SK7tk5KhbjyUSeGHpktAXeDCPZWBh7w8NdUKPwDzQobM",
  "key30": "3pWfgFF8piQ95CiUjq8u18Zfym3aMkbeWZsJZisSaBfX2GejyNKQbA5WGKGCpWC9aFbDJW1R8K6VAfcs4rHHDvfG",
  "key31": "YfcnFJzAbM656jA3D1toZcEkR2cZofY1FeCvfDtYryADc6JzbhnADxiyH5utzdkEgFMkftccWvu6qoGG6inMhhF",
  "key32": "2vJ5qGuom8HHqUr1BTbBAS9MCg5P63Nx6wF9GMjowt1DS8WEgMutKCtSHdmjumZBAR1wVY7zZCYDACEZG8aEZskD",
  "key33": "yWbPhUF75i9tGG3cu7S3PJiGhhiPU4W1NM9iZsx1a4mUhuNUT6yvcAfw5qfwxCAiGwuGP7Z7xRSzUMrYJQYexbS",
  "key34": "2TRRxmBAhfR3BxJksr2GZTDrva9RLMQkRUMk826dq54yp4EcppvKGCDe2uuRWGmfTF3YBb3PSaCbxNdU1fFi1TPE",
  "key35": "24xAbLqQwpPUR7bM1UNf9iWEQ11Z6evmPXKXdCHiAcXuxorKm9iQrW5GtEjuYWa1B7JqfBzvckRN1TV6KsUoMHhh",
  "key36": "hTyoDWVevKWqEpfV6tCBuatWhVsi9YLGhGahnLTpE7HAJoUNJ25zuMX1Fv7kmh74TcvYkRUhuCUbmxYcUN98C1r",
  "key37": "2KAsgcMFvP5bBPnEvDk4Qn4TbszBinJF6ye3dpxYSrgbpDjx7xeUfFnD3iaYEPRqwjzHHjSoUeyWTPFauD12kg6t",
  "key38": "5k2NLmeYiZV8Kr5jceM4imRhoaKjr6PSH4xC6ZZzw3TbBRUk9XnrBRTV8jfNfeDCHopFZdq6LRpeUL6M8hNUgk9z",
  "key39": "4WRvjgrsU771899sh5xKa6RRcjJ1sQtT1ghPEg65jYUtYkt5JszEgLpEgdhHPaqNUpQdmuF7PuN3hyp32SUhyS6r",
  "key40": "foWRRfSVoXqsYjhqUmYrZJ3whhCZcNPo6Mw44ucH3H1G1Du8Xszj7aCMNqkTMT37soxS7XrDVWsoXw1b37ehbuw",
  "key41": "4EAGyL3GH6sFeXL4qkcthqnqUkVoAuVGLGVhS5GxryUJ9HeZgHcDAbHJmVHmXDMbasapTnNoQz5rJsDZXhKAh3jS",
  "key42": "41JPhBFxeqCubw9fs5QMskmd4UoMeMtMt2uSXyVQro286qr9TnoS9EVTZSWvJFpWni48F6Y32JkN7Uq4VBjKe7c",
  "key43": "ichn8RmwCaX8H2uUn8VqTzih42FUov4LTdWAwAofx1Xv8f5jn9qpCgJ9k6o2us9gzB36XyYWNzmPLED2P4TG1Ho",
  "key44": "hwpBKHhAyZ3WJ7jEmkJgMCykfQQoHZHdcjyVfgod2Bc8cVqHzUpYZV2kMJEGDAignGJ24vSy7Hyi14NbwKnYRtv"
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
