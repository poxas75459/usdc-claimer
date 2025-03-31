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
    "5auvGfkLNs1qsM996WeG8LN1Y5sQC663SqxPVHHmzk6bR3Uc5FzJp9z6vmrx8ZKyVbYyU3UeFBqfsfdKW4Mtve5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GQXEhNUZos4VHt3hBrZpP1T2mMRniY39sCSAhTUTFWhsspNCNFcvxjBAzLex6jvUYbqQUvXjq7UFPwWoL8kkFzB",
  "key1": "3u9AuVtt2bjaXqiME1X8j2SH5YWD9nG4H5LM9ScqhVs9uTq3WNWtwLoM6hB4M2dT87ux9tC4WVirGoZUYPJPL6dX",
  "key2": "BEbLxSRkR52eARCzEqW5p8hkXEf2RQFKWXH3JDa2UA5ReyvnPBg6qsfSiXruiVxuG9QqXzzwgyXjqqQp8LmcQ9j",
  "key3": "51uVzA3j1pQDaBoYMJAME5VDY1uZpYVtHT2HsHCkXtfNRjkQyKjP3JLTYqnQuNAxhkX3qR1RHPN3KqYfLUVNg2SV",
  "key4": "4t6W9vNk5ZHP34Lc9G6oRFKLpzcGnneiog7evPupgE3eoYhtY78r6drLDWTwVcbtmGpupagro2jxHTH9rRtpafuz",
  "key5": "5XFGNVJ5akwrpWu2AP5XVxHrQtu2bdJPzNPXzQEaA2f7zSTa5uVuP5VL7JoEWFHRu5yAbTyZ9xbqDT88K4YYfxGD",
  "key6": "4ZyKNdR4cPe7kQUp2xdeyfmzXvMLY6S9dcYVmNQX6ZnzmWoaUXnnfC7q4MAigqKRxRHV3mvo2XAxu3KQdR42vtz4",
  "key7": "4mP7bFebyfyAFjSTCxPguEufapf3wtxDDK4ecQd4Pw3B1JZNVSKsAPFtYwpxbfgjkKkF1Z6pWuVhhuTw4L2h12qN",
  "key8": "3cb3EJ6uaNu3fwFhrPuHc2L4QMjtWr2gtLREomPExTVemFfagWnAtvzGsWmh4MCyQWf6qCrYtPMupr6FErq4vbKd",
  "key9": "2yKoc7NggAG9T3BmojeSigZQSVmV7h5tSRNrTyorcbtgJzgoT2AYfh1Ycc3jA6d2kmrAPCSAAoLuiq64DjNu9vka",
  "key10": "3STGaZuzFu2nGDo5TWH6Rhj1T6gGyUp9ymrmTnFJEjNULoKqgA4eiCHCFTwc5LGMJNA9h9hN2GHt4knEBDZ2nLjf",
  "key11": "5VtC48zmEbinBHUBgveFZFzjvNBtrsKUMygaWeKw42gsKksw1hUUNa3daX7w7sgQCrvESQRTKQyP95BhaMpwp6rk",
  "key12": "3zB1b7AB2wi7UxRj7UGFvK6ZDAwsLmD7euLvgeqLZ4zzEnANfqJfsjTYs2MXx56QHGAgbNxjKGw7pNVhLnZthxeH",
  "key13": "4n2pGVE91yDJD3T3NaiA4ouPv5RAjYTd1umtragwKeZDm4PLpEraNr37UH2jCqwuSopyufz7PPjVuSRGD1UhnGTY",
  "key14": "TfCFqWieqywN1puyfmYMye1j1iYVButCwCJxyhZnS7fVZnw5jeq3BqEvMZmM13xmj8tFRTZNQKqp7KF9sqMKayr",
  "key15": "61dMCzb99Ursd9iNaAPDTFmFbWAV6E4ziYraiidqTTfa8hM6z2k98xYoDJuebgmRCfwEkKuNwb3Dkch8Ndimtbtj",
  "key16": "5YbeGpa2f2Nts3mMYbAXG8phfgPsNSa2ph3z2A64TVHorC4pUwBhys2fMb3Yfm1mtLE4NtaE4eoe1NxoAHTgXL1j",
  "key17": "yzTeibfkjdzGGDMypY6MzhT88bWbehes12gq1HX3KR7J3nM392weS6fu53rmW33kpah741fayxpjRUJ5xykkGid",
  "key18": "4v3sxXtT29CpeXzCxYZjnQzrVb5zKDNg7pQsEo798PRyKgWsk52voBdHYHRdCC6zsEr7JDT7y27fAaWqKgV8K5Q9",
  "key19": "57od2bSRAPbohjR2P4ZdAfW7Ue4bRv83ooJ66BJmPyJL16g6KszoXPEDH296qAhjKN5pCbz6H1gc3aJfAWEFSqEB",
  "key20": "36NTvNT4qrwM4Mnm4azMqfzL6PDSS9YmtZyjbBSAazKUzXTyhrk6nLvMi9bJmaJB9JnqCyYtcan7iBbCvJqLUoiU",
  "key21": "56E8r4mm9gSsNpDXA2UyWUe6etFCapEuASrgRqTYZibP96zftbcU6SMPokNQgHZBJ8pQ6Uq6NVg2JTiLG5MNfxZz",
  "key22": "2Y9H4u9a6LEy5FvEAFSDpzVWEkHMoE6Sz1aNSnZKazorLxdhgSK2gMWYDsK6g3b1gGvgwak1TCqJzeeAZM1D7Kte",
  "key23": "3iicknwMjzHmnBjsQ3NG3ULV61wprrvR1gFqzU9tdUoWUXK5f5EEZfRyGmGEUuYHGKj1w5aCcBNPbkaGV3jAxAXU",
  "key24": "JHuA284oHAMZrmXUnD7RqdDbcQsQfaSmSTxPdZu3z8cEM2bLcc3BPPQnvdjBJiBm4ksvr6aueLuxwkQbbS2g4Eb",
  "key25": "5NuYoGYK4my4gbwWrZwEcYmr7SE2djn84jLBJuKaxS2jLwZo8YmM4qYP18PqFLjTxofdFd9mviVNV1TtYFsueaZ1",
  "key26": "4ag76hJXF64Suvc8FyD7ngYw7sA2vFzuoAsiNbnJHpciuoTzCL3FPtENbVAqrLMfG9t9ifUndTPXijLMnTAfW9eT",
  "key27": "5c3Na1MibcCyouNfEggMq1oum9mxBQsTZfhPdGcSkHdyyZWv4SgZoH4eHueYt5f7DKot7cLrZqr4tg9QMVqVQfj",
  "key28": "3SqBk3FKfwLgTRsrZ3vsecUQY1rtXCJgVCAVpqT9T3hF7yBTQPvuTnzrz5pcbvekSR6AsjemMQqEAKf8bH3CmGZ3",
  "key29": "4x4MNiZF4kQmTki2fHSJVwbeabDHU8V1ZWRXKzPSi5R5HNW6Q3vDyceNnRkKF7SB9e7aRExZ4f18wQpEgS1FbSBd",
  "key30": "U2rieiST9GTiHh9u5UNTEqoycLodLB8MJahjdJc4SaUKkBHLKBbgyykXaaFK9Yry9m9JB9wYzmdMgCTePCmjCTf",
  "key31": "2aSRDQ5DxKWRW9v6TevgDuoZKTg5GawDS6NUCXKoZZbDFPNzj9EdHJc6S8Z61aSNox3FxZajjutqZU1LQaDJ4vuC",
  "key32": "3R1f79wFasbULk5vzbWmnphFHtCggZEqceqN7mTPmdVpoYTsNfS5Rw8VbV9pBQkfDTm9itPv6xEyb3mAo24AGr6r",
  "key33": "5wmCXsS3qxuw4nn4CvB6FaAuihsiVpgDWRX7PcAWkTGrbySBKvmLBu9GUCrUQ7K1vX1L4a3DEfpTqisz7jrJUzif",
  "key34": "3cLzJJsdBCAJf19wK6NtEMkacF4efycDUhE2tN7wtTetEQVyDJ6SvQumRBjgWxLrrqa6D7Sz8doQKmiJbc1KeDid",
  "key35": "TaDVhphmyLF1ahbbm9CowFzAihLwTXBTT595kGxCfrwgs26sZzfNbpjATArt3p5prpLDE2321HTpZ2JmEZCEa9T",
  "key36": "4KeYjmPsRM9euM6KWMmyUXDquGRe9quhreSrvKXUHZ5VwDX2KEsw3fLeHxnX6FxsCdFM1VEbzcju8ZEka4u9zeWR",
  "key37": "568x1o41nkc6aihxmBD6VU5cs4MRzMCZeAWm5Dd4usiVeHxhy4pBZDE3o1rJWKek71vstrHyyGGoGmCYoNWzvPZ5",
  "key38": "Q1N3YZJsjnhdQaYe62rhGPu8ADRDXBMY4oXseGPwSnDnm94aLG3R37CnAamd1ijrf6rm4ZHkbAPMcMSGvfMXzwx",
  "key39": "38jNa33qL61bAea92b2mQLc4ziEHpRfnjFnhZzK7S6qvczexJnd2ysFtvcNS75DAqVpMxo7nftDvoQ8bbocs2B4R",
  "key40": "3ksTo8xKTvu4swfrCEyeEMuQeEvgYoV6f9J5XTafpGY87WzszyaCESxcJ4fMBtWaB8ff7YRf4T2Hs4XQM565iovb",
  "key41": "39gUtikYdX9pRUQekQpTDsF32zpADCTpxJLciYFrE6gMreDnPqiKNAZiwBnqTmBsHeqLUu79e5iPSEQhAGPDoBKY",
  "key42": "kzsjuuKWLfi97q7CqkpcV3SY5ZohUWnp9pebCSPUbxVAM88tTR1xpVF1AvDt8KiUQ6fe2d9X2Y8chThQWfpQfmG",
  "key43": "ubm9TddofLbva9zLGRx69gDa72TVTZLTy4z7xqTwB2bneo3ADZS3b2eXvcJkfAKutXo88CisSQzG2dzFKbgAXfv",
  "key44": "2ZruJ5XGLGrSseAfvAt5LYfpsQQcR7KftNJuyzZk93xgcK2LLRQGds9YZfS5RCoPb3TRVzMRtJ5tugTnhM94ynv",
  "key45": "2HXFBrWF1NDFx1jRoUzXUBWotzV2wJYyzHVUmoo7Yk45UYqSuPgBCRHnKbGd6diFffsxhZM8Cu22gqaFjNXWopcK",
  "key46": "2t8QyXa9CmP1gzQRi2cwQxr9PxmSyWdkh2nsqCexC2D5tkybDJNgoE3ed7CM2ndb2i9LYQMdQB9Md6PvFVhWxA6V"
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
