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
    "2iuQgL1CST9TVCo6PL1TVFsvh45Vcjg4ZHLH9RSPeyeBWw77YZdfciGSTspUUwSgykmUR23QCXXXRPupgH6e6xNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L98y8aTd7AqBHsCPeohiukfbeJDbgV6y6DLkudFSZNyp47REdsVm68Fb4kNVDCzVY3mb9Khcr2wEr2tnJunFWFS",
  "key1": "3NuJ6XjVwBMEGKXbfb7cVurzpdBJ2ZvVRT7QLXWfseKV6BoDei31fvDwYJdEsCFAg9rTQnhMY4LjVdajeEmdjsyZ",
  "key2": "2j3MEKBP32HTEC4LTpuoNebbKVtBksnyERGV4rZgKJke75eXYKMt8A8o3yrAratgaWX5UoxA9A1pUiHsPaiRSAMZ",
  "key3": "3zAU2WegdtwxDh9h4dJkx5tpkpejk4Kr3NwNuBymEQa1gDqYUuqq7rzyraLK1z9K4Ax6HDCmYskZ3rBheTCBAd9a",
  "key4": "7tncnVcNKTbm6d5o1utLXje52ynkg3HrMQRBarXbQuodwwYPhj2E5qQoqduB2NrFFRAcd7A57Q7asmRdHwk9685",
  "key5": "5QQEUdWb3H3yU3i3AZdRhRZRbXMQppD6tEm4GjYJZhskMNXQR1FKkWsQqQH6kZaKWYr733WL5Z7GYqzS3GBeHKt4",
  "key6": "4KuxJBAuuSGK8vPqkcyhNkmdyKepH1xr3LPXu5qNDoFCHiHJoPkWVtjAe2QwfKfS7DprvMkxZWsSbY5XPXruAWRZ",
  "key7": "2wxeM87UuF1dQPQT3NWshMqtj8oiWmRv9sPex7nfSiH1Nye2id98aS4QSbQdFyvkReKFxGWGY7MLVHgQw7Zpc8QX",
  "key8": "ZsSJjXnPG5CuzFQNgWk7zs2Q9CdJUrFsGfouRWNmXxKdqxut5Bv9eHKFgaAQ2gad3J9NwBG7LHiwvgteKoVAkKN",
  "key9": "3dxYhFtHEsAbhe2xcCVa6QL5bLBtFdUVxpB6B8d8QAptXr5b9TR3zahJWRrjQApPKawK4gSdeAqnHgGsHVrxpVVf",
  "key10": "63rbZ85wR8X1djVchyhtGFy3twFQcVoAt5zwWConffx6vGFJH7mXY8Tvk4etKsoav2UP4ZacrcepXarhptVF9dQV",
  "key11": "pp4QU3qFpaFCq8LpW2wR4v2zX3C7njyifj8Ph9wf86XSiZSSEbytBicHCXkUL4eFLMmQVxvd6kbapxcqJb7UaYQ",
  "key12": "67g7AEQXAXd8UWcEMYCsddadMsyLaLH87ZagQ2mvTM98C3LzWvStDMB16PaityRu4D9QpQfqdhqfEGgRhDda9ssL",
  "key13": "4uopDtm6AmLQwJDTviPVkzHcmrsZ1tKvSdqiAu15tGCVnLXvByVxRkxf2yhcv1X5zd2M1KF3WSSWMstPBDK1x9Ut",
  "key14": "4vtyPAbGWF3JGxRWXs4AW8pPeXwnVxgVQHUNkpHbWRqJjpWVU2RwizKt7xmjhtnhLJcZTaQifX3xqoT2PGtCeuBV",
  "key15": "4xuvWePoYFQj9mj67YFNue6DVVXaPCHitUZAAtwbL5VDCvyLxpfdLtx8vSqk5ZrUmYi7HZ8cKBmCg6NqT52Mr5Hz",
  "key16": "5DefukUx1cTFsD265uoMzFkdobLngiq3r3HgXbiQyz9PEYKYNXDGYZmN7UvTAAafbF8pxtNsB14z8k5LaXnSwmkn",
  "key17": "5KGKBktSZ99mnSR4uFUM9oEfeDR1rJpedWNTqtKMLRndRoyzzxU6n4aXm8cqr5EASSnjXQQWK6RsahisBHV1Q52z",
  "key18": "4wKP7MQLdPyxb8b8tMeiVPPMeKSTDZqBRnpMYTdK27pPrzNZzhWVXhCmLarBfq1CeMQUhUWEHa67vDgweYcFiEyc",
  "key19": "37EnDN8xVpn541p8oDtD4hTrAX2tds5uPZgm8s2uGwRLof6T1KrZGunnLHpVwaMdPWSaScTACZEziPBu9qR2Kt5x",
  "key20": "4hGXdH44cJDMaLfks9Mdev8HKsSv8kCgy6xorKxCUfVK8T2vZ4RFWWDisCvm9P7R2roYDhuhjopYe97oiFBxLEkr",
  "key21": "5eU5Sv2RL5S8YMESkqe5wn5aqbUGSeWNGUfQVeQa9mWK3F4ZZ1wPrBnY2bBAAsVW7LY8AsPretqKqbgC4LAmnsSd",
  "key22": "3zzuNY8oR8kNrUpTWnJNu8Yq2nKoSv87LaqhdunfV1DWHU4L5Nd6zcPKmZq5qeMP1oqjfQAGELDY1fiiLUVFTZCa",
  "key23": "3XPnDRBuShgumX37tqjVfn7ynxhrNWNzmvpx1iRtE2X2v8VZMbsGPahicej53GfyT2zk9V28VpraBCSBmQC18EPG",
  "key24": "4GBcjAWDoAHwkPTjQXAYsPTQw4GnVuypLkxYeNEQ1fSK8mNnfsZfUhmKnVps4p4hg85GTdnwvHqt6FzinwZJYY2w",
  "key25": "2s87NjHm4u2kp4Vonizu59r5N3zv8Pnpex4bXa8CUnAiMpu7dGxbT657GxfzW5PTrpP7UQ34qY8FEdfGsZk9RRPJ",
  "key26": "3RNAoHXj5HU5HuGELXjfvAZ6gjFbiyebR3eAitxJyZgZrQ5AUj5tLY6SSS13U61rKkMVn5cMr4C4QAo4M4QeYz3y",
  "key27": "3W5UHSbz75TEq3fYRLB9Kxdgkt3HX1QG4gsRCLgyKBttHMNeyTJDsaha1ygwyemox1xW19vFk1MYPRGknVkjACcg",
  "key28": "3riHn34vjR8feaS92j9aDCJPuaTS3miMWveddbGqzJ4isnfnwb2qYE8PjL3GU4qry76W9KvJ3R8TcCADH96rHX16",
  "key29": "5PkLn74kRGjaBVT6ZZ83riMLDZNn9yBUbiftZuxaJvvC9EFCuvfLc8uirGogU91QSLGLHEKniGp6RfcJse6wkMeh",
  "key30": "2jHkuQndmUjqWWE961pRbXPyniU1MF2cppkPULfgrLVGiUch7S3tRcAwjVm8iv5P6xmiC5JTMKrPYr9qysZxmaUJ",
  "key31": "3XpAP8hGhG1DhpBiqD6PeeVzB3pXpYsD8j4WKPF73zz76xMyWHutggYAUfUiqFqPr1jKRWXxPDt8t5gnUX8yKpQW",
  "key32": "2K6skTtN8gGhdA1T94L3jhB4ft1NgCaK84mdb3UMhHkDTSCy9LFKc1HheS9epyvG8JAMibcmW4QPX7jq7wEBzKM6",
  "key33": "4zz7TbZ6E2UrjpVoBqwdrLrYu1QyVRY3gekPa8ACKgV11eg8F7tAEPghpRJ63rJc6GLqbVHmGFv95rTSEVkReSuc",
  "key34": "33ZcV8VDLi6EGBApasGXoD6qtmLAkUwpGxDaG7uCHDVam5xeMtPgJU15saMfumqvPecykdtQTHLM1FWzyqjXm61u",
  "key35": "5HYoCHr648xksBDSxX7e8RNmbXuDCBjune15GF2jFvgEqiz9cyj9BAjyXkyQPw8WoWm4sNAajnsX6eJL537LZZfR",
  "key36": "28AtGfFiPz6Tb2HpPdnW7oG1cgXBg6JxHRsDaM76mYoFWq6cCQ97kD65Maxmm3yzmFqFTWnxsC9BeaP5QkpbGkpw",
  "key37": "2SWPXZEeExTpPG1urF7knNPxJGE5kmo9SPaDbvYCNTwEQooj1LszqKvEsc5f2BazrzeFJPuwXR1j3Zzv5j6mRdj",
  "key38": "2UkBUaYpr5jCRQcB6ujHo656HYBHfs6S9UrsZhXBJSjPEMuqciBXxtgs6AcqRKdqsCN3F6zvLGACskGFUwiR4iri",
  "key39": "4okSk49SNAbXyFWbuHeeFsqA8W3Ss5j4X5anvjL772DEUsxT4JVuzR7vtGqDttXBSbj6TD6tkLURaiW2eYQG54oJ",
  "key40": "V8FHAUCYHM7q2pRS2dX3a2YYgbKsegAZHboAK4crjn2S2juWEkgHmfVznrcAyiqGJ3aE3GP16Cwkptzx4fTXgfP",
  "key41": "4Udz5Vg5BGVzK83LG33kFDeAFArDJNE39zWGXD7uZ4LRTpLG2KE8GcaBkfaNMp63ZwBiAC9RQ2Ksz7gQ8SSBmZtk",
  "key42": "2pMhteCLPR4xD7Ho4KnpS1sNsd6v6HH5om72TMAtDSvyHucAjttdngxdSzZ7bsQUQaAtguT8zYU1G7riWn6Gzbq3",
  "key43": "56kRHkoqUtzbUo8AqzN1jgtNXdJwA2mF5jZqrki2AMSK3iWmhXau5RbK193tQ9qPZvc78TS4rXGbKpSgEypSKcB4",
  "key44": "5nL4cfn8TiDuWjUcLVuSVNWrMhsHNx3fEhdhmBZ7HnNFA97St98FsD4y9iePLxfCkHsCAEF7nHQgQrpoWrxMnifB",
  "key45": "stHExaVyGsfvw4ooAfnFpyxqfZRKcK7DWdMEhdD5y4PLrdqhPcFqh1epGsaGtEjgHwaTZBEozULxxqdgb1CA9iG",
  "key46": "XwuS8aSUcCPbA8RRQSQQqTuY1NyG8FcE7F74jieYwMusD8HeaAF1cbbkk858UC4Mkm9Z7YAVBT7vNmzyhayrj9o",
  "key47": "i81ipafnmn5Xxrwaga7WF1giaS99VunHzEm4jytsDaXDJ2ySbSxnK4ni5oQaMGRHDakrCEjoecTSZ4jb8fE89Cn",
  "key48": "SmKxdcJN1VRkpLQHKYH8xiWX21hsxanpVgewWrR4Ct4ZuQBJwUXGDQkxTEtr3DKrUvYdk5BsL9iGGcFtCdn4K5Z",
  "key49": "3if56vQVXwXcR4zNawwh5KgpyYboJGJpAUnFfAEkcbh5UHYypCsHgKn5Tv9r1CHScm2Htrgnky5j9u9NHrtxQhm7"
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
