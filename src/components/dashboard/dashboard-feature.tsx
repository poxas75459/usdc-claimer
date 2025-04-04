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
    "2yUpZxySuHTPBcWLTWVpG1g4SbexV6kdhUmgzxEvnKoiqVHkzCjMmJYMmESKQFLsZ8p2MMEkPp6pjDYPCLgD5GLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67rjNP4TyFU24rgiP1gBjAVjGfF279uBn5W7gKY83AqT76UermVwA8FGc6k9reoYx7HZb7Q7ZQQR6aCJdPLuzepp",
  "key1": "mg6LcY2DR4LD5SEgPB2wVyxv6etakTJuQ17gUhM7trfgHMqwMhxYRgs8gNnQ9zu78wBXZdtz4iVJXBe7g4uDyQz",
  "key2": "3kRYSFRRZTAHifDWPdeaQifB9DMDJ135SZ3TnKreZVpzSX8sUEzXDrFCMsx3FaKGbQmRmRb9TU3yhBKRXiucHqrF",
  "key3": "4mMzQuzuPrQGQjnuEV7i3unqEDeaHnURWztzsZxfCaFPD5bj3YQ1NSeJTKLEAtoRfS2pRh2kVHNQkabWEyarFgZk",
  "key4": "5MjjympegEwJWr4bsC2RpF8c2CFnmLiA8UXH763CQqFLYB4VHKQ3yDjrrV64oMhc3fNov7au6MyDSMfD9qnnZ4qy",
  "key5": "31ZjDYTyMUgZVfiLAFNP48dk4bJWMEF6v2iBvtbGNsms9xVDgxCyCcoRuDyc2kq8qUEd6LUyYyj9oFProYURd42N",
  "key6": "5cHJcadiPJvZzjGU6avyLGS9fsiJAR899NvdCEcEbgKFYuNKUBxXA3BBaG8h8BvmaqtmVhQqPFaXeywiyFfCYuMf",
  "key7": "1BxC89Eywae2eNNDWvPM2wvaSfP3dEYJ9E3T2ijWVYUdQRecRmgdLaetxrJLbwWyPvJMN9zqdE72RYtfGDcUQYG",
  "key8": "3iz9i3ACFVxLpYy3bgMfGPU5oN9yF4KZQZkFnuKJYgEBaiG7EtUSvN4fkUeWwv2aMrbFJuD1KncaBDDDxQgTGXPk",
  "key9": "3wT52yVG8Ygct9NeUUyZU8hHv6YvMyvnx4zo9jnfYu5j3Laj7xRvVddmv1t6nCBpXF4XBs4PWX4NKJwC14UgHSw8",
  "key10": "3yQaay2i833hC3qMMKMv3SK6KD2pbt5vqcok2KVPHp299BuujpbMEe2XKXBCjfszvX9aNBSnXWFB3EfKZP9CzKK3",
  "key11": "41o9cxmwRKEa7j6symeyWZhLdjFkdDqQPzzz5WmGEVh2Kj6nB576TT21qSvLYNf3yhPJTQgF7UUwMfnH3jzvn18o",
  "key12": "4jSoaPHXVn9jLY4BJckm6CPVAeFgs3ueKxWcQ4PfWpASARVhfqUSqJLBFEqPLvCkLTT4p48utCwWiwT4gDHYiU7F",
  "key13": "2nxTsYvn5SKNLUSD9o3QCD3caiXToJQeiDmdfgheVCb9WJHvTjgViUFYU8ynDnMmR4Q5BABCQKLm15DVdiT8y3EF",
  "key14": "49dKdM7RhFFjLiZrXe3spB1DbnqVxniWQ4BuRwEYCEUVjh3LsBqprBGPHTNiM9MraQA2dpwAWDHVcnr3q5n4Qbqd",
  "key15": "5unWUg2AoAnnQRmAzxR8rrrWrtSvU4Qhuu6mB3PWV2JNZRxFaPn5hAuQy9rgetnZuWwx7CuUZx6va8pxk8BZPrig",
  "key16": "6VF63VH63RYii3bQnsbDfa2CX6UKf2ycNLipwL8Nm4LP1KHM9KnyX7NxuERJ4d7b7Dv8QcysqU8PmnkHKHqBJBx",
  "key17": "qWStdvpcyNrwh9KX7GwhCfZoKMqLT94twwjbhZ1TpqzVv89W8fQDhP72GbHRthYVNtvRUf6XHeEccPX22TBkGEe",
  "key18": "4CdS83t2CYXj7CRwMi4pvBfyHFehdBJ8TrNJNnKLKTBFyHkBxZ5VuXW5TvXr678GCknxCACFRa8V8arwmRnNLXPD",
  "key19": "41xCaci1SxrDjDjtoowrkPFe6PZvWE8iz8n2rTybDP9dNMpYswaTphyoiBVhMyNuV1xpRuyBeLJwqbfK1C67Dd26",
  "key20": "27bQVtm8S6Qo4u5R8JmTHqm75Ubo6MK5RDfMYqXFJwEdBzrumVXdwbmdnHhbHvtCfUev8vzAEnV33WvFTC6PPVTT",
  "key21": "pj5kwgTSi9TfhGeh2rQa8GzgP8ZLigkHdiMwu1r46kHtA71kCVXYLwZ8vX3kAyw5knQjttYVoTzHmX2tpERLtA2",
  "key22": "3PGp1MdRwkPgd2EHMZjFUnEE3csJ53LveCR7JJg323YEPmAFACFF8ATPRGGsnyvwBCnA5hNe7BSJKHRTtTaBaTWW",
  "key23": "hZgcdnBqkuRaSKKQg3D4WeqbqqUvzjHAyPa2KNVfjLHJL5NwhG2gFBnSGh8BRBtUNt4cpJdGjDrB5UdcQy2xL9w",
  "key24": "5fzCpMBXtVToSUqJn3bcKEsJ4gMebMEM5aXHrgbXBUrDcfBDX14wxKNjpUzNvh2c8nYPVtp7piswkyREZ3wyrXWQ",
  "key25": "3bhmJU1gUCBXVdjE9D9sB5623oD6Pv4KysbwLAtV863GhB78Aa56S2gbFAQy8keVC9XyhbhbCPE5akjr3tSZjDY7",
  "key26": "3C1pJ6mQGJeqjwCy4WR46vjFmegvG16mwFBTTvt74v24n1N5batun2Px6mgTuEPMHxsfVct2Cr1ZH7zAnCeXppEf",
  "key27": "2pcBK58a5GwTLmnBQ4TrcjBqCjMMVZq3KP9Kzgd7pqpKaw3tzMwZQzkmAeTn5BvQFjMrEfY3DmF9NHSdoHMrdFGq",
  "key28": "ozCdqAqLgDcRSQJHeCxbAwhH6aRxXTE6phQYPDim3ttiznfarkYiepaKgWoLDs4vyULF6MjXxAmyk4sXN7PMsyo",
  "key29": "66c2reh3qZ9XpHBz69ggUoUdkwU1k8RJx2NphkyAiAKjpQ7zWd2ojh2eXgu5PA6LywZwWHJDuv3PojW9jrwrF8tA",
  "key30": "3xe9G8TGi84shdxkYA5YCtdDoMcDii9Z21fSGgiMYgXsfGGZpWo9m8QNFmW7sx5Yo4GmvSzrHYSUgeg7i91ovJjn",
  "key31": "FJ9WmX2RHBeJikfj3BQepsL72RJ33o3JKTA2pEArnMscgUfs9nn68FvWLc6RCjSZWD4GqboiA3Go1xUnsTJUGCz",
  "key32": "4VeRTmjbbpVJyd9RNtNnPMryGHvg1TJxDvL7xY7t9HEyTFDpYVbfZb8BNCoSLTm3cg87hbGAWD7JXZqxDkXuzj3D",
  "key33": "5d48Cd6FycakX2yaGTkZDm5z4YWEbmpqVpEnnGc514UmKevHXrytjqG9XukUMBo6vkLvfpYtLLSBXxFwfqTvA9UM",
  "key34": "5jewBhTkzaDbpnDC9ZeQH8q8nMpTaQwGRcmc8DFrYa15g3URCgUXXPYNUJZDsZeffVdu6J4jdadUbn1c6LeS9pVX",
  "key35": "4gMTTwip3AyA4ZqSZe5HRdsPjrUmhuARsbJDhMLB9EFpPM1pkxkUbap9YQVo8mpRLCmmoFAvfPy19khmw5ZRdgTN",
  "key36": "YH8QrgubUhUuFoVdXJQuk7pkS2QM224nJx7uufzqmjMqhPeT8QpRqpzVWkYdBuzmT1GVDpYWF9MwoKH5ZVUY6EJ",
  "key37": "3CCYL1CStKGubrVvh4z4k9rRSEJSxRqxMoGfgGPqsSJYrvCoRu9tqWzFuDH22UY282z1DmXSbRSecZUAMRz5ru8S",
  "key38": "4PitN94nhhZcQYs6FTXf6AhCMyHkxZUBjjKYFAdu3DZhu8UMoEHk3t7FiWCmdNCz7Chj1pX5LWURYn1RSyFB4ZxS",
  "key39": "PVeAe7fKYhhkEC16JJiVgAae7Ny4EUrWj2ULMRvGVembt2kn5tX12nkzMd7ahg3vUeJWcKFWtzkX4NbbC8tBAyD"
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
