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
    "knLr4g4Fk6W4zW59nvS3o5pJmx6Vp5m8WFnv1g25ViL4kZ35S7CoNx2k1Vz7KDN8jDTzegGiWWkTHLoegENE4HL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DZev5Czps7ib1yUCHc454NqeU4osMTLyd42hNBrgJB8wqiMWV4QwtJfLhtjMRCQbmMm2maxGZcrNZ2NA8sYKaDL",
  "key1": "3kCEg7sycKNHTRbDNCE29S9SiQS3GYtffT4RtPEa4R9oLnwFsnScD4p3a3qUP13jGQzqGgmcGr2JMMQ1emTJrh8L",
  "key2": "2PcLbsHr7KCD1vE7WrvmGyg9BSPLpCyVno18uwEKnw3DKbzTVyVpViQ2HLJJ3cdpW4uL5GSxeWsNE6dERVDbVsUW",
  "key3": "3urhmYpu4oebicHVB2X3qVZErkh9fxDHBptR7kH3tfxWa9teLTLPf9oeMR6PZ86ATSqhPoTTWGXTHSKdeYNUDHDV",
  "key4": "4zBjhHrUNTgefCHgyFsXpG8k97CK41EH8x93uX2HHJP1MNnuodtMyaXzfJUgF2sZgS86uhuXiXQhVsGyM38MwZzo",
  "key5": "41RvTeFFp5rZnqBUHNFfPgi49g4XGx3oWy53sAsbsgvf5JTr9ttTzqNsd2o4ENfa3zU9RNRf5JZZcN74zsw4oHjB",
  "key6": "2E1Cw3rdQnY9saZWJfpxZrKTi9rzvqY9ySNawxMm9icJbFCopLvji7yHgQHkAxxiJSMC17jM2ytFWeySfukeKSvx",
  "key7": "34KQkZKxZbTiK1xLSyuUnRUokbiPaTRkMVEiJLuPTKh2kXFQM6FwDJLXSSDWw5LfGAYxwgn4K5F8RAgPrmuAD8Li",
  "key8": "3wFW8S32oSVJMed6kVzXRhc9wvQEpQYBTn9hwFyRVpmSigGjjXhdPJrq8TBd35Nm9JiCJqBz72EU48Lqs7B54YAU",
  "key9": "3jUS6pkaxiuod9cRyNNZ2hjz5vBoFmUgeFL87mbhg9SGdgNd896xXEw8DQF9gNymYPg9tNv5GLgBojPbeDfDxpqm",
  "key10": "4dR1SNHwarfqgXemLYvwr9xD67FcEHY4cAJKee7z3kL7rYQrx9wUVdzm2vZGQ8MAre1hfP8WNChove49fb4bBG1x",
  "key11": "327qDXTM52bmsE7rfkxTzDPxtDWZrBh5xo7LR4pz4ZpRdGZfqVcgE8XVYSncqGMbREG3zmqCwLS46JJhtQAVzbKV",
  "key12": "2C28QonXEKywb679fUdhDSoGmwhertsU87Z8mwfGUYQRXvESTgciEJs4jFmbjfD5A7tqjB9tjytTrcs4vcKMDDd9",
  "key13": "2Ne23Qra7WPY7UAatSmDX2vL73ck5Uwdr9CpJXxJcS4sNiKT3yhd7MpZ7LkDSb8Qth3A48LrHbisepiz57uHz8yS",
  "key14": "3X9CUbRLfqxPPKS4ZhmcoG99mq2z3i4wR316VNQ4jAjmmvdudKeLtLpTHPKMJNeVJPM4KwcTp6qiAGZrM2xukvCW",
  "key15": "2pqkwG7gBrcpYW2dA8nGuXwQhpHVfr3EaAaAHXdRQYDD1LQKj5ujJgf7m8peWY6w58KZNFrgWPogAidx1MLN8DCb",
  "key16": "4YEy8b9jx8vYLAr8BivahUs3nCn41MRRyhmsYxeEsv4x9Uz95LRBh9dyz8hywSiVusLHwzHvzzXzqQFDT6tPNCXU",
  "key17": "2PbWz9z8yujeGdcAubasMD69d55VCgGZdRpwnAmEquyqneKcGvZQucd3jPr4qVH7m9t5GrfUhhNFHb7B3cMdhCLL",
  "key18": "4WvrbcHp4yNXcyW6Yp7QX82VBNiQ7xKbyuu5rQcj7q2F3LZQqexMZhzpa9e1mH4ai31bGMU97U2ExG5BwjetLV4V",
  "key19": "382NjzFYbRmiGWWXvHWwe6rL2bhXMQ4KWCfrHDd7Aho6GyLR9qTidQHcgeSaqnHNHNmjP6tajtBxRNcYSEboL86k",
  "key20": "2byzaeZGXHUooEV3N2emqmJqb7zxLjCgwD5g85FWNPenYjb48b1UUZHVEE5REr8mL4BPxC1XhEPK9UPWt5JB7NHf",
  "key21": "3zkUp9U9C7kVogCUuSNbR8yxxGNBG49sHyN5Y74nejULtPPdtqWhrhq8cWpy2kQRiSSwGyTQS62g432FNi6cbPxM",
  "key22": "3J41EG1v29UudsBrsK2g6Jk1FZTvNmSMYEZFYLGyg5rG2jXJ6EJqSZaMQ8JJywbU7YcCn53ChpjTBGqVBPZ3JLrc",
  "key23": "5e4wQVAMySdh7NhTVm9YketaDnfHCH4cuaerDnQrXsrEEQ64mVCM2C4f8Fw12wb7QUG8rdQ9p3tiFFzTFw5N9idA",
  "key24": "52ZXt5UwpMj9dbJGUnuXvq46CidFgTojk9nhgezJ8ri32S3DYZmi2STbDXNSQu4L3owsxUW1JgfJH7rNndWemLW3",
  "key25": "4TTApraTj57Z9Ziwr3n8T9SD2XSXpDFLqwbGDhYd12iPNPamKF28sBjFEmsTTiKEYwCFqCq34vxywrcEVDYmA5wt",
  "key26": "2sbCRWbjzjqbJKdMDyXa1XcFhWx4r4CE7bJn87rSBoFzizBCyPJZS6r6yvoagrJss71tKkbKXAeY3SW3un5zddke",
  "key27": "3YozXAfMJn6Rn7o6cPkk9TH13Ss1dfyTKRqtPhwFAGA3yTkJ4WcjCUgioBmotKKDHEhcyztYdLJ9sXsLAb3GcTuy",
  "key28": "5fZa5FiBrArGZYZfvemhod1bg4iPod5S853dqW5fMqq3DHmoMC5KkRkF1PQD3DdN3QmMZd7xrTyHmMD3Fv4vUN8q",
  "key29": "4yYbVNeaBTvSM9QNHPceSm2aaMLoFGvRNRFFu2ts6DnSDBNy1xd1dQctz796dB4hgZENC7nGeVVujsCGUvKUQDYT",
  "key30": "4LAVtgjq1nCcWXoNeZZ5dLyt7aVYZW83pj6gYab4JjX64wmLTSuJ7CHXynK98xqU5SSdEMdU8gJYjuwuQcxbBq2K",
  "key31": "Fyb42R8gCXhcJaRxBznXRMYSkNKxKpQHrim29hDrgxuvHCaMhLcNrgKjSdE6v62fJRBPWynHEHc1xQHzcaDvkjK",
  "key32": "2rbEUHzwxF1vqhUZvsLsVnV8dLDp62mmumykbwz5FiYj9TUuzMt3DFnZy11sNDPtbGd1rRs5bo89i5j1x9UVo7uo",
  "key33": "587FPigQTufB3cYwSMXwfRd8KpPAo5K5qgmVtQ6wHz3nR4DDi2oKbKzTFXm13LvFQbQUQBKcsn6qmo6mxdXn3A1",
  "key34": "3i6nxtnR8Jt6gMtYP6sJpjADFYmEE9rKC9HkEXd1g12Tn25E9sABBeXdUgjm6EZ92Q9ScLyGUA5nvx7sbAxLYefn",
  "key35": "2jzPg9vBE8eVVX1B6nCvV2u7SnoLFy8aWH7E8csuJY4CKWwHzCgsFNc4PvcXcbHM8RZKnhSsEXMHauF7xko4UK5a",
  "key36": "2n98aBWbamJr4knvc9ZnCPFvBSHGaoSLSXn6TG288859MUN7QS4va5vuf5kJzpNm2rkaDaABxNjA9Jq2dRAF724J",
  "key37": "5kiBjZ8PcBmgkNkZJKaNu4vjRaJhYpTJx7GDLYARTnRGA59bgYsQvA8pZAshGhS3VXSLfhQQKuxV5ViAEFfdnJsg",
  "key38": "494szPAekN8SecDJknARTuEd26DH5wxwdqRsNsftMqCMdEoxUu7aS8gMvX1mjMFq82irnzMA6jTNq92cKtWMa6XC",
  "key39": "4F4BEY3p3vs8WmGd2La8yRNu3n66drk6SzS5gL39zSEDdnNqqZ2eTJedUi3Cor8cB83Q82UVvkqJoyHNn2rrSJa8",
  "key40": "2eFZkw7GmpvrFnNmXeub3R3SQsY5XbDmbNgh39GvoJCLMsoqnvTwPgNL8rw6TRRuYu1ovJ1hnSjxfBuNfRdfF9XU",
  "key41": "29yhaPpkp64uan6tkBFy1NdoQ53u6V6ayQorRBPN52m1pfZF9G4LShAYWADqyCTgWbmF85BpS8GpLi5KHXJzQrQb"
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
