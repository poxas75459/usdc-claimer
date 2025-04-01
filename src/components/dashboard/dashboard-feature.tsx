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
    "4NrHTfEAeUik1aPoHg3qLzawKhgWNcJJtaj3EUX9AUpp6Sp6Hs2YNc1dDGiWDspLy5cThdKwE37HYpZGMRieNT5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29vgih1Z91U5pH1Lp6pA7KwCf3sGgBfNNa4GocfoHpa4U8jnpZ4BLsBUyyTZdtgdWMHm8psjKhV8ETpMpVp4gKqc",
  "key1": "2mFbM4vmtC9enjXbwEknWDq1oCVuZ2mdVmHBD3svW94FLELkFM2DjU53YiLE5p1Q6jPrLHpZA8vceoVFTmtgeL5x",
  "key2": "2Lu5JgmQTQBn3yY1pREdexVUTFpKXEnfBEuRPCpEFgs4c3HBW8go8cmAQFAfYK5Zr4FEYDRdMtBNJRhhQDfTrxj5",
  "key3": "3i53fJDBTgdGRUoQokVKmebjyNhgALpU3YDGPA7EEXjhnpuNSnMfFSbJe6TNraGYH99MVVzZck9e1Cr3JoiP9XBK",
  "key4": "Wr8a17JXAjsxjrqYaFfyf3BroMbwyzjJEg1n9ytochiAtgLP3ZYm5FCTkSHtojy5UD8KmpmWsp8hcwZG5hsoVvQ",
  "key5": "5tECvtnrgx9gtrWYsLWUKhqzrP8u5h6gHbDfFn8rMLDgpQv2tfMyccTzPUD9KsRiuGwfPsrtcqG4JEFmonfAEMrw",
  "key6": "2gPu7QqkZVex5ToSvMSrYN3gE2VcFgA21bXeQxVVtPUXmtHR5BdWafKHZzyGEjyankoA7NHNHuUDNhtBrDyrqqA8",
  "key7": "5Q9VFoVD4az3UPSi5xk7J5rbUvCc3fLCQyhb6j6Nbu9FV3aSRqZFDamhSDNQRmK4e2g1apd7VZJiBwNdHP9wvMW8",
  "key8": "22d3iVwqKKQPzrS9p8tZ6KUS7CgqgFpvZ7hhDet6GRSGMEPGM2WANgpUxZCNTa1iMXSb2uyAnNetsb9M2YR71KBB",
  "key9": "2VhPTNUBUsRzJA4Vp8x7kb9k7na1Cib5fWo92MCuR9ZXeBJJavg3UK9eGTDTTzAgdogpdUqrEsS7SmGvrGBbe48t",
  "key10": "613jC22JSnt88iFrFXmgf8LNHXbWsZN8x7qdWLUfDj7VoxyHdGADfvJbY6WJ7k9pZZbejyQVzAn7oPtV2uwXfoyM",
  "key11": "4PVmxsSNcksiuCJdgDyQuNj8mmSXmFywBZSiwZCLh55ixgxFMhUbk8Fy6sMTLoiaKyKvq6BTCJTNtSBtWv2BXHs9",
  "key12": "rDLdSGEjh9FcxyygcekK99GG6sbtLAvUxzEmxPe5xkNDhawNbVZ8k49tArq37YKSX1BS6ZxNEqyqgBf8uqqo38c",
  "key13": "3aTR7okyfeD5kxduhxyVgsyKKFjy7REpdsdsMhtSL94qCkFsTBpGUBi7iqHj3ompM4jedgED4PyC4ZXUiHdL3aVU",
  "key14": "3vrCNCEqcA6mhzQzoDE3QfRTPVdbfTysUNj4KFZv4EATq5yudAnLXMRRwPHtw2puG2a8za1mWHos58xZatDnqbwG",
  "key15": "4HNCbrzJz9kyGeM5oP9f4GDRsr6J4jySgJPrrKHje1qKsYdxVK6BNVyZ3mLNkqRbpPUuFWfDnv4XC4XDB7SQGrg7",
  "key16": "3yRr5mqMnrveASgBFLX4ZQABFkXGkwXU7PVQTwBD1QCS6NZj2VGqq3d1CFWQnRN7gq9QPiLhSs3RiMVTurAvz7RP",
  "key17": "546DugPvGjWzzUu9fxiHTHzNGffo3eaap3YYwpTYQEg4zBPaLpdeM2NzLTucx1TscCLGxGDq4Wt3CrpoBhCbmj12",
  "key18": "56UcES8gQBDtKT2DzQZo4GkrdzWS1ECqVsVaZ2WvTXLv4yG2vQo5KM9nmXNwFcbzzFNs8EGAcafa8ukLY1vjE6gh",
  "key19": "32nkkgFuxAys58qyVhaFC5gD4R5YRSSQWb1GfdNya8McdAntYCyzpZMCLw62VfT7QvwW97nk9xe7U5ijwpu82Wjb",
  "key20": "2YaQYqVDS8arxE4ewP26E6iHjdPDNXud7aQQ6b7dmH6SMno2Hgi8idqVA5gNCxuVDsADKh3F8AMhA9yUo78URBiH",
  "key21": "4L2pqjRuMrCTAuEomAQ7RUvg5rU6BeRtDWjGxM4Cmov6UabS89eKJkMUPtsiP5VTLoQtPiho8KxxiumXps37o5dD",
  "key22": "5NtbgjFwo7zBWNpe7SnAwTUJh5dcdunUk1YidVEpaRs3exN9RKJpcapVmiqTmMAbF3AsuNeyVVrn2FshcSoMNt33",
  "key23": "tS6g4tTTcEtqPLDkaCCKCSU15kaWGWDAq1cbyxGoq8tUbZ4NYeGgcb6dpKyCZH5o8h6PqcBtZRzFq9q7rdeHxfc",
  "key24": "2pnmVnvoFeWX7MDgmu8Nqsk6FGtfsMiNgEcDT5rEebQbbCmPx3xnLe5jBNCRSzoLfHgdcSguA2ieMfW5XLDceVpK",
  "key25": "3jCF4W6F9fKJtnWhAtTphzFcP4ss14KwxvNB3MFHQFpC4u8TgQS8xyhuWUY1J6hdAesgGTTuuhjejWoy41ZDceU3",
  "key26": "7Qmru9fH4yochi72ymgUTgVczrN1bE7PHjYHgyQsdjjvTKgrdjzSsXSTjkoaUVftsep7YciewsYT67Wjf1ZjeQ1",
  "key27": "26deoKBLWQMSrBgiTJahrK1zr7kHYevLdrYu1coJfjCMyWbrEoN5BqU4y7wVFpDbqxw5vyc5A59CiRFk7FB5Kek2",
  "key28": "5zZyCXJFn9akV7RYnAURpPJovnJ1vCgLc7wYVi27R3Qiz1c63wffjErFgg8CURqKNrChoNKPgeEh2fFsXKfq8Kg6",
  "key29": "2UtC7GdSEoKqko8xbq216HGkZfLQc4bXz1hpscSsFQYu5v2UCmLxKYyM929FBr8uU6eEPB7dwqhDDhZiugDmnvyM",
  "key30": "3PKtmqdJRfUHrJHEh6QWyRheAdRXN4PJ3gThT5RKfHdkUip1VpTC9GLYc5ho7nYt8j2fSLVq58hNwdnhvpezAC32",
  "key31": "51jmHzQDmGp1NCW5jcAcgtqCa5eTZxRM6k5S3qtabEEw55FxbDyCxX5u46BZQ6FF7imfgbR8LQc1bqaXppGobcor",
  "key32": "4iGea1NkMkHbPANmtQgb6d7djBb5UDU6UDD2xwWhW77dsbru4LpssWjmZFsLfFcGBNmC62GGTZp3Ssj1p83Gd1KC",
  "key33": "3S5FTbMsx3HGrRuE7fsuxHMZqiPPVmV6DFysyhsGPPkjcfafzFKieTR1JXrTgn1jMBHTNoL1KoZdFzjbgEMAzQFK",
  "key34": "FoqpZv9h1oEvcdURShMqduPkS5YFTcM6EdtnrAugW2w6qVghjVpXtbZK9Jzw9wafrrBXExjVZK7xD74Boosm6n2",
  "key35": "46GyDiirw4xCZP2GXgnEbHxQ2ArWCaTiGZGgHfqP5GFCRs4CgJmP2Dy2djbm74ezxbotyeTBcwCbLnvABHPWkabA",
  "key36": "35oEj9H5ArWse135XHpBto4icUuV7baixcwHjshLTgKizaADTSUapPQxoJEcuTXFJ1eaDLrGDnitD9oTjL4iy9zP",
  "key37": "5jZiPCNxFnYgAzhViHda75haw3vXsQf4GKyHeKKg7xyfXUbFXNbMCsvDFLSd4nvQTW5a24n9yM1nsXnrHGrG9rTJ",
  "key38": "63Bfi88hJN29VY4WQ2Btyc8ztRTrMceY6WyHvni2sZkWVsC8B8BS3AvFKnLrgotJC2Cur9aThuEXeptTebFz5Bh6",
  "key39": "45m2K3uJnqLeCymjyebPUnH8xWChD8hymfa5M4vS7m4QVXwoLgGBYuk7QPUd38S9yDuZBgtzdAxkKu5S6jjqeKem",
  "key40": "2naLLt89Pj6ZfRQvHSERmdweE8LuZD4BUJNs5MeswHKSNN5vKuycE1rqyLszyrKJb2xhFEJ8ejetK2BLu92p2UCm",
  "key41": "8HfQ4oTLripxtJS9ntRwsj79Lvf9aPV4gn4CxVXdUcGwNaQ3pa6gZhPnnoqBxMJ8JWu1QmZmarGhSRKsHypZHdx",
  "key42": "65AaJNsCHGd6ui9XqUZHDegvXhNwz2J1wfXisWczqBatWqD6JMa7uxwBJr1KUAkL5MM3qRyAbnfrNu3KJ3bU5Kyk",
  "key43": "3hTEF8ZWpBrs9m2LYCiJvysjuxi1pRCwwndRyCTcVSsRQXZQafHe1hTyWG7yZQL1C5EWDeMcYAMhi59492bG3btF",
  "key44": "3hrPFm49Cw1WyidingtQZgFTDtoPsMRpyB5G8HyM4JcYNjPuwT16WT6GuHa9cEbxPUG9XSBMyVa78rBZpn8NjkR",
  "key45": "3WrSdtDgQ1XPZBendNAeKhM5TkqW4dxqqMaqGd9rLdCZsFpCjoJPZ8zoPtawAcckspxF55ZfCtfuoHb2XQgQZxSa",
  "key46": "4uottzSz7Rf4DpU27Kvkycs9hHq6mbaXjXDfoyiGKcxFnvAoVb61LvFhWgckJL7jQihrwtfqk9C8gJqE5ahVsDiQ"
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
