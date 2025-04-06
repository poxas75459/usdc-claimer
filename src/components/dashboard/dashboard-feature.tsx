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
    "3vS72XTAqjWs2cxP6HfdNnWyEFHBT9nLtVvFf31SCQwHh1KE2ocs2cQuL6848BCFGB6BSN33W3QhLxBYJ1TTrTRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f2TGCwovrrJrqLUeXtiNFz8BFs9gH4pKtqWuTVp11ntchXrrKRz1oyMGfmnU5ic51tKqU616gt2svBxxCn9jxaj",
  "key1": "CDJ2XSuz1FfyrofqfLd8FWU5FHZt65ehRu34JgJ3E8gzCSZLapvbMn2L5ytCNPMLVhhyZcBjGYfNv8PcUsvtPu6",
  "key2": "51NhXPwC2mXvJ79BdFsNQeSU6GMu45iW6V4tGtCdfEpqRzE2mfF3zKqnxyQw6M4XFWYXR5p3nHBtPqAWT9SQ94PP",
  "key3": "2PcmakWAjqra2G2oho6rMeeihEQAkFnD7ec3kPRzMcNcTVQtbigLChaKWi8b3ngdbmvVWGTzj66hxJNYeuYbCHXT",
  "key4": "T62JjXhr4FhVmg7i58RaLwkozw4JUpvcgZRn1NYkEDKCSZgYEvP8KG8dvWD3WVqAVzcFH9138FeSZngmYiochZf",
  "key5": "2Yt3cGmZxA7MUgnFynd62kwG2mFeFmNA5vWyNpDmV4j9ntzrxvbzi724SYqS29LbE91NZuHyGC67QvuYxogEiVPz",
  "key6": "2m47M1nkK5R9JwKPWwx9qcRrfaE2wLZyg9XaV7WbgjZPpiTxMPmzKGxiicJxEPSMA8Rk2W6xCRSMyGKWS1DL8CEf",
  "key7": "2RVTikQVit2vWG1ctnuY998mUyc5eJD9qqSACUF5bFiao9EZFQ5Et91cj8h2bCQDhEvn2FEEkbMwr4aSy6nycCFU",
  "key8": "5HcBZHNiqNbyGuRdmSwsFNK3pRUFfrSqWsMrxLHPYATWDXobnN9L37GqVLYpLTtNuTsToDQTite6uHrAQqAGsv1r",
  "key9": "4FAswFj3SQGQrfh7vdUV9VbX9w48VNVFCDNGRmgAL1SZFpGGYLNveFnMGvs7t4q5si626cwnPzhKwVzA37ATqW33",
  "key10": "3caLKhNJpvZrTqTXPute2TSPypet6JmRyuz1cLFohEPSsJbwPaSwgLLWtBd1wwWNzf2boDvoBNxBoSspeiTfHw9U",
  "key11": "2reTuFozFJ1F7FB4EjaAH7MiCwrNS9KYi9ZpAMJgcfSusASrLF7oqF3yyad5mxKm2xdqdsXrcuSZkQZu3heBAsDD",
  "key12": "134genJZ2pjdGX3RmtvdZ34o6kEkRuWcbEBGR4eFQvXRPGooyqiujGz1bmVQrHSkB6SNtVQZEN4N5aNuAH7pvyt",
  "key13": "5GLDAS5G3BRZu2gFoHJ9cd4iVhCYefeytAyV3XaNFEK3VgD78WE4Ses9DrfW54ENM117AywEPN1tNZZcTFChunCs",
  "key14": "3Jr5AMVA2ApygCCXmVzYCupRkwWbvQoczs6FpdSt3CMmif5kcDPrH4XTvBiGHLoBn1SC4UZHQLa5uz5PtGStHvXP",
  "key15": "4prpFsi5QkrfVvYmRkatdt5HefkkciX6p5iDEsgUiv3TsAETFZh8j4SH7Z6MwiCRZeuF5nzoUS9V5KbVfngdyX9y",
  "key16": "XbSuJ9JaZW26b6eoXbqrgPiQjhtuFuJE9a2xYdVrgFXfwLac8Lkpw2ghXZyzpeyGp8Hy5aKk1saQF7rYvKUhwmH",
  "key17": "4FQRVMySX9GgxB9Nvr1uAMFiVbe8fjWArGeSGMt3ZwUL3DMRD4PtWaSrS7Ldh2Fm6WDXGXdJN5QyF3y51oXCvXuy",
  "key18": "2MfGqShEgYmUxNWvCmzDZvZkaMjHauVMERmrgWzXNywMKb99gXoUQm1QuwPdonbvuragrj6bmEj1r4pB4BceT1ui",
  "key19": "4PJeXPQ8p4gbxqYrsxh5bz2sArKw9KnPGzxwnwnw7hfbK4HB1jarMsB5JKiLHnTPQ4GvzgHkbFgqcCfVNCYVRVUN",
  "key20": "2nCvnimHuVCt3K7AYkcjrcQP97LKcUDU45pyPJgYh2j5iPSQNbzYFPT1TVxYuLBns12gn1X8Jce8dksB3YhZbYrG",
  "key21": "4LdXVUPrK6TKFi1wW57aCzR1dksJCMP8GzbJVFQkrW4uXiC65sWvHxm1tts37kB5QaCKwF7eaDZSDPQ1ewra1mFs",
  "key22": "5TGLcLbnDaE8ELLuW4tZZbVcgvvHQbrVRQhDSiNRBY192w1G2RkK2TdibTEAMQA9eWqdK2UG46M1rSKgSdx8eqdp",
  "key23": "3ouddUXXUBH4zAMRviF2PaUA1RLxMY9XZjJU9hSrYTk8h81YBER2LujLYaZFw5Dk2jWavBvsro1HEyNTgVCMtijW",
  "key24": "38n5aGMiXwv64RMTCRv3TxeuvbUPJJ8yF8bGtPYX2WU8AUjZ15EfcczEEhg3ZCMKdkkSAqhGKxy1PfWuWgB6YacS",
  "key25": "5ouHvpLG4eGPtZrDzgveVhKW3zHbfwu4BG5XpMopLPbi3potiVuFNjsTTtyRomJVtz2kKYSwTUABgxCFwAX5kMQs",
  "key26": "TQTxU6TE4bfkNJoZ4kqsU8QjapwbtmEAe1irJuUVmTtANP3jXpaALJ3FZEwbgYxaFtLwDafcr1siGfeUSwcqSKG",
  "key27": "iRWLjvLgp65n99J4Z8XRvTphJNjpt8sCmwe7zMr5611SuvfSiMUN2bBE2T4kJRyB6MPKxyhMYcWFRHrUV11SuJU",
  "key28": "2WFZhjReGgqZ3EeeK1YtYWiWqmXkMWWCQV2mxLv2QntY4uBRCCBxb6KncW4NKB5aZ73B7kte145nYMkQ3oNgUuu7",
  "key29": "441CKXrd8KL16NPb2wQxSNGkF2WfdhULmCLfsPeE8WFCR23KfwZLzp8SAPtFj6j4DdZ9PoBLyUtx582UMCcj2Yxy",
  "key30": "pvcQwpPqwWDAQLQ5frp1pHwZ42iPAXEwFUHxgeTXUPKMkoLAM1kRLuF8ZHEMRnKK4YSQbunkYM6pFePJRFfee9w",
  "key31": "3eBYf9sNzKucaDENExyAKKwkVYRktXUtExVPdJJNxXyomK6bkaTfkfRkq2hDdpeBfW8CUyhwf13Ag9nh7yMcqaW2",
  "key32": "2S4V11Qre4nYJAnrqAVuwnfjqTxcvDeKfcUP4js58grHF2njsT4TUUhimRbRLwmWe9ywssvdPJJTq68JVmHZnG4w",
  "key33": "4dMkfGrKegBDuAbCr8NKfRetAa9xVuQ82aGK8yQbLCwPTZhEV75Ad99xMDNUe3UQHWD5imhcf5AkGGLmAuRR9PPo",
  "key34": "Tdy5MCEFSFTUFRwfGRYuP28WfKETz34JRCQm8BqTxQNQfZZdVQV91rJqRzf2pzaQ68iCtdTmEHQCmUnTwhraSHc",
  "key35": "23gV7qLWquv1emDqMso7D4aBsK8Ny6AJPtGyWQ4SPM3aGHzY6ovB6vHwGMMzyCCQMULjDRmm93E27R9pmzc9PrH2",
  "key36": "4s6pcrscsULAQKnYhnSheq1D8Yp2q5dtcow7BFX7ZrkW4k5GW55Pzduixp6WadqJsnx472ixVQYkrCPEYjXG3tow",
  "key37": "4y1yfrkASVR2g2RvFKLWZqVi9jTqifWzagwd3jyk8PXyD4n9mJWh983hwtuSPybMTqBDEypDhPgaoSD7ngarTuyL",
  "key38": "2eGot2SqVNsBXJoJWg6DKXvTHcJx93tRUMnK5SBgYvEEibZswzN1nBw3yywkCE9GnTa3NooxKByvZXoq3PSwQjVm",
  "key39": "22bxRKs4CczPGfuLb6WDjiW1ZpVdfu2oiRKNUkpNaQHFubfd14fWYqfzExKjBeHhTvhpxRokK2G2YVh1JwXby1Jj",
  "key40": "2Q17UfnRmYgopRFMp85V5FceUhJkXQyPLwyKpxxdxHdZuQ8R9Tu2BtTRCTjJuxK6igc2pvVSVPXwXQ7theTpZrof",
  "key41": "44B68eFbRs4g9MfTtU7U2ZM2ZJCYsc696d7PVay1pBZaNkHs3NLj9ktgGvFzszNgVCA2Fhn9imzktGtNQqxPxz1C",
  "key42": "29sXs75Z65DCEWrkQewTDLNrr5S6j4MYLQEjVM1U9SHviWBfqeCKKYid5WERkgt9AQZ3dE37QW1zgFSDApiXC9jK",
  "key43": "2tVWgLuEj5EYb4baeoULWygtvgqVTgPUCQg6YvP6QoDtnVbYDq8EmXCCGoC5WHkhDQfxmTmqSo54H6Ra6DFg8p3W",
  "key44": "3fwWTbxoWy6agH5Bt9qi8ghV8hd7tRAhgRp3wxmKQ9SKsStcUuHTX1yGnVmi7uf3pDeYtLQM9gYqYzBC3AzrkF6y",
  "key45": "3G1M6Jdn76vuQfEp6DjG7Jy3cWa378JudtXPhSG8WBjLraY7UjT2vTqEiTUqi8QSw7EtKJRojYujposwsBbAWPeV",
  "key46": "3RSsx8fz6xAQNCcCrfNt7oXsegWtrZJGrrUDiHQ3JNmRDukQFsq9mAKjJC4hKaJGKK3forgq6jEwnKseCZEGz4cP",
  "key47": "3cwkGhaidFxFHGKS3VtDVHF8Cdwv8M5WmQMkpgtZBP8yfA4mhEP1Q5FasncTtafWXpXQbVJ8D9jhL7LDeoaeRV8K"
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
