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
    "7m9ZUcz7z9D5YRBwQcns5pAwUSe4w8WX1QvKcrec2AP99GfLCiajAAiLaCQj78VHTsNhq6XfAhScoUgw3jUSrTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bJLPdeqo7MryEmvL5qb5J9r96Sayv5coMRgE2xmi7HkfSKkWcu6CZxkXDBYkt6KMtVsEqj5aGpEXBhmbFbWwV9m",
  "key1": "38JxXCEnA9vjBUpTbMwCSd62bgs87TTSAHxzkacYdazuBUUGduj9weFvkkr6d6riUKo7mGAmj6nqcf5HpDUxNvHW",
  "key2": "3MDDjtrxDgCpestbDzEfN9LCcdoy8G3uBzouGPFiVJUDA31sNafzmBVbXbtMbHRr5HwaQM5MApR71C1UELXZ7EdS",
  "key3": "42XQAfDVVC6rE8G1DBYGjQZCDXyNC7YQ9ooC9NLYZeXtVFX32PUCazDC1Zs4cXNxT3DTg1gmbKQiQJm5tKhJ2BEC",
  "key4": "3sZXLkzsPBPJxTq61pV775Qv3B6AHEEuNAoummxhTEotLcmFEeLrCbRQdNVF6LYAXCtcbAcJ8VnxrkUH6aUGNVLu",
  "key5": "2JNSQxPvbqf6tGcQ8AdiHUN1bhxdsirDuExAfYt2htTDJik6i8Uy3uKcuhX2FvLHwA4gfpptZbNQevaM8SmK3eNF",
  "key6": "3vPSd2KdTYeCfwk2wKNChUoxjq7V2tRPnp9uArWufj4S7sSNCsYkSjK7C1D4zTZSN1nWTwiKisZZnr3omUvpcjNC",
  "key7": "43PaaofhqyN19TpjLAwKJCB3QTt8yWMDSnRcAmLdoA3HFfsAkw5LVBmt484LuWj6zo5Gg9E8dq91Gk576s8BEkg3",
  "key8": "toREPY2nNrzwjqw1fLPFbT1B6z9PXj4QvVTG1rJgDu61mKPpCMYshgDsbHyLCrzuqWhaM5gAcai3FzssmFA9RXR",
  "key9": "3sx6ruvGv6vRWbNHaqjcDaaUACBnJCfeKXNmvZe8dbsk9K3j7mdPKCwxiELiaMhLm7U9RLZjtcigszXG2VtdwqNc",
  "key10": "457cyPtzgZu9XXiU3q6RnobbdBxNgDyikNCNdbNEBUdQcu6NAhU8n9LytJ5rqCip5usJZajk68mv1wVZprn3D5F9",
  "key11": "4f8P7BcrUpiL9MLxrAr89332UR8LumfBcS9J7dP4PXUGFX7KRxvZGaCV47eC3PqUWhyfHRnvvpA3P6XwYsfeaq7",
  "key12": "4CueJRg6SBF8C5uscumqmkgoDgZTTMMSuyBSVjxn3AhbPurEhZ4MGfTZ8tsYVWAnUNo76JUjW9ohvdbqtxzNkfur",
  "key13": "46NQak5rcKqnM18UQJaiaBpoKzjFQVPuiQBqbJnvtg3F4RWagbTfJRM3jA5Vy9NpUVJZ7n8h2BnEnFGEiJAQCR1S",
  "key14": "52vnyzMNbwyTPB88qLopQpD22pRu1BgvKnJGmUuyS7KfrU5gaSu4di6sD89VcoZLJimvTJAWS6sqqoQw6EyWi5SY",
  "key15": "2rQuAb2n2xxcGhBq2tNW3RPaaxLVz6pQSDYDLBck86Rj41MWUtGyTnQC4TYL9sc4qiX4r1Ww22EcioFVxmwtQXJ5",
  "key16": "2NBKkM6P55oojxy386jYuu2d3WRNQLA9Y56eBqKu1zJVcPDVb6nB3CGoNLriiwSFPKiWMKGGr8mKoiqEBBqqAciY",
  "key17": "2VduQz5VAkmBHQi64vAK1EjsBmjeWKMjTAfoGD9ADNkt633k6DSejJJb2TU1Rz2Cg2pVtr14ApMkCnsfaFz5wqTn",
  "key18": "2zXP19FwRtmrLgU5sm9BBMp4b2LYdU7oAosa4RRynaCpiVoJNtpGfyR6c2kimRdgkpthsvsoeG1ZAPqNLPTrjz68",
  "key19": "hTV5tbCHvVp9qauXNQZcuMb45bjngGyACgMWc9npcwS6fKKYvP5wU99MdQWwHKismHB5yhr868Wjc1znMb2Tr3F",
  "key20": "36TTQ5RDC3y7ptaMEu8s7Avo1MqJRJxebim2ZRefXPLbHNFUKCUSDjcWGR49M44ALDN5K9m3ShEYTUZcNBLzjCGm",
  "key21": "57aGuRHuVuXn2qJdhKNE7M3MzUTr22UNzza6srahrCx81saVb8R8L3Up117mic9kyYwiMZ2BnvThUcFNTq3QYghB",
  "key22": "48rcc482ewdKBZKwZc8tCPdasoBDPDR56VTH5RYw3o5WuZ2mJfdmWZe71QNLAMQjxYZSVa2oRmDx1UHMAsDLDwVG",
  "key23": "Zpb4g3eYxs8qBjWeSGmdGuhW5iybHnYa74jxxevzVUZKYatVGB1vyaD5udwGGG9kECz7M5quhn2eAUMoWMdYebZ",
  "key24": "59qsE7Ymxatkwqh7mpZ6UhU2EdvDW9UEEXd98DX464PhVJxg29KJzWhg53LkjD4ZKMYTgyCrpWTCs9bsKRnu7bKG",
  "key25": "2HfunTYzdRby5jvo3VPGkvkdrRqvakwphq5Vm7PJ3SZ2yAJGumcexATjELVBLUMJimBW4soyooe5W18a4mVEmMgZ",
  "key26": "33UCBJo3bhJJGUmBf3yWwxRK5cPhPBoHXVF12FGSWWwf4DcXcAR5FDs6m3bLVDQzenpgtxgCa68nVnwvfEvQ6iTS",
  "key27": "55EAV9UmaoJBjGw9Mj6ctCTBuhfj8eEKFkFZbFshMkzDjthXfHurewDvk1GUcPygMLBwcufqqeeR9hu5C8iB1Gn8",
  "key28": "2RUTErbotvKHtHzLDrW9eVuiRREeKCYcHsrHe5hKcuV3JvDzuRXi5J6jx56yD7suG88mF7Jv3QEM4EyaRyYKKMqN",
  "key29": "3UdMjU1nV9ZSoQ13VDQ6uap3rvnvdYNrq3L1SKiLLt4CZjYoUM8raSkP5UT2aVe6in4gGkMxW4xcKq8CfnF8awHs",
  "key30": "2hPyKpcoXR6c4efhi5wexyvp2211XCmxKqZHg89C31Mie8PjBSpPESMHhGJnJrhC8gEQJn7T4PZxmeRHqnD4pe3Q",
  "key31": "3exsd79dqDEm5Pf7KAQmYrv5793gj3AL3vbFTXC9aMS1kjA9e1q2AJkdecVsAD1iiKA8tnnjdvHZSHxFcebbkywP",
  "key32": "3Rx9oec76Wupy23wqzFiocTaD7S9P8VQrycdYdvsKFcpzQ95hYnBCZYt2hMh2HTujjs8RtB5u1we7F9EBnTCiUyD",
  "key33": "fXb2pb6b8QKELhMJ4S7QUF3XMUXFyYovRbV2sF3J9zaWgQm3gT1ZDmrxCkcuz8CGq3Lz4aK2DQRXHxKRXVkPept",
  "key34": "3RCUqPEeTzUN4RZ8f8Dubz5HafaXgtJd4ZMMbikPZckY7jsa5hj8kwvgyRXVohzm98gfPXTXUNamxMT82tAASfdv",
  "key35": "4Dv8B382UJBWyJS6q3V179divUquJd8UWtgZYotFSsXTA43csNKdRAuFGVgnYZTigGYGogr6yDJaMd1jMjZTBwyk",
  "key36": "2GvSe3gks4npjoVH9cXUyMiy5P8Riu5DotoBxsXpfd4oi2YHnRXkPj87iGYS5pjjtUWSyHFkoswfTnqGcLBUi1B",
  "key37": "5K7vyvXp19JEa944hxHHwihJPHSywBVPRSwPUcwd2ZMPfBSVZw1Tn37NkzASuKSNwyUem2neRv8exeBADEtd9DUf",
  "key38": "2gbDyVSZ9tpGiFwkA9k5iDQu2UJXTvNy8ZKPYu3rH6LLi8irgPbHwh41Pm4QpCXoLrmycZtCeU173WgR32ogAJ6f",
  "key39": "38hF76hqPbgvx1iuqJCMNX6AbELd6NiLSZ6XAedadxZsGgoxR1ZsHycf6NasdrUuhHKgqdshfa9qjJN9UNzBrf5E",
  "key40": "5gJvHo2o1KvXJGHftuyAMvHpWAuZBUcncDiFcELWaxRXZ6Cg5DVcm48NNBu6HWKQqBiAgQVuHAQQ3hLsGB85VwiH",
  "key41": "4oNcc2XPkXrQov84XXeBgEmYWgcyw4WTwzdAyyb3NCiwSnKHEzC8GTBmaiN4p8eS6N6FseJiF5YjX9HskQMzQYGc",
  "key42": "3wtJsiu1mSGk5nrSzSdZ7GEuqB8tF5yxh3qW8eeMa3Pr5djFSmCnS4XHxFk3hE5p7VZsV2HHMjErEhjsMtu3yXoC",
  "key43": "2Aui2JJCpuZCMyxvMn876hTnvJLT5V2Yc1drkL3o6NW8A4v9P7nXGuZ5QA1W4kDpDXnhAiyjHUgHhBYaFZQhyX8w",
  "key44": "55eJrw6o6YmUHvrVmGXWBwm74t793e9VS8SCk1nNyUaE3rPqdqjdYz8LoyEL735xRk9EBjLxs5t9V2KK3jyEvGem",
  "key45": "4yRWNXX9WHftA4akkLTSMgG8FM2xhGkEoZd6PL2TBUfqK5BGn5ehwBatkbxkt1MN5xGKPnJVHLMy2r8s3wPZgi5M"
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
