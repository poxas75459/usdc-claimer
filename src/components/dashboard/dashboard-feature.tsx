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
    "4tBvhT7LoEjoXn6oKwGyok2piu1wyj4nnaZaNvgJJXdC8uqrXujCJ2CDYuciWJtCsR5C5GWdkiu5QswMmMYbBaP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dHiMTi5GQbHQ9qG1j48AiD99P9DMZFPm25EN8tNKL2cjefYfwDwv9ZAWj7zXhK7UL8oUrkxxBCnbf1DEfcAV7HK",
  "key1": "3SfScAzqVSRCGQrRjnW6jCjjTZ1wTsa2TMEfM8wKi7g1sEmHK7m9tEkSfww3qUuXSHBh4uYBhimY2Kfbk831wLH5",
  "key2": "3rHMehRxDXudWvvCY2kD6F8e9xKumvJrXKNhKhdcbUdaqoyj4TppuurUDM376UVrBGngfEbE7xXTHcQu4vVwr18q",
  "key3": "4QhWPzKrPYK6WvSHEJ3qo8vksoUboVgpAG8KR1MpeLR192RLKMBbLPCKobpNbZbyYuFkX76mcBDufk9aepycq5Cv",
  "key4": "3ssb4z19wX2t2ifNyE6kb32g87ZXMSMNaC5Au2KLXVBUMv5hnYTTmfJG3oKtyuTHdT58F5CZnL6aNrBRyDg6HFT1",
  "key5": "3Bu64vD6Jae3QVceRejdC4UapywmMmiRyEiHUjozbCTnxWBZnDb1oHov7R29F77ZvHb4JDTti4yZVSPMzz9kWW3e",
  "key6": "3idJer8tUjUGdFogsCAzBkwK5uoBRuWrmbyh55FjoisYopmfR3GX3M4xc6A2tmb1RMmCRLmHXEWCArPxoXpadab8",
  "key7": "2NP5fVx4AQn29EiSGkqoYGjLSH97MrSc5JKJbVQjgfZemkTVXjJmiXyV34VqBjQfZKPpkmcrpCWjgoYB4NdHhwNV",
  "key8": "jj3J9GEu8pXscPEEbfrzznFR7hmK1eCJ7tNUWgZua9rJC6jPJFJ1M9M1ng28B8eK9RC78AuGwFNUSTn645DpSUK",
  "key9": "26jUQj9YwgJZiktf48yWQCFzp7yeZqVbr57QzyCFuSL1gz27em8t7yFapoa3ZrYD7V8fsjXcRLMkn1eybYHu2Ush",
  "key10": "Xx3c1NUTn43PSnj6yTK9UdLN8x9fnqFAaK7XWrhgJSAE6TENUFmGcijBR24eCSBZSa8ZX4WZv3cgYXS4V6VLNxU",
  "key11": "52jExmpJMhHgXhjNzg7LV2iv9EehvJZPukP7vn44puv2FkEWBYD75hxxSR2AuXxq67gNiYCyVZjrFYycGoVHKoTF",
  "key12": "4k9MYRRetzmMPqoBKLeQbnZ2hRNdJ3FyxGipBn61aFRshavxA4XcPBo9wsXChgSZqfwNUkF7mHNPDj2nitBPSM6E",
  "key13": "3GxvFDgFqxcenyG11WszubeFMp2fEDvLmeZjHWGmPoju9WS8yBN2Jb7vMCmLRJdzucrDFouJJspPjWvg6JDFrS2a",
  "key14": "49o3Dv9naoT6PFgq5J9Dn9iNge6judKSVDEEnhTSwV9BUgVTTEvSpRGNqjqRPeTPcyJg4XzNZzT3xZGdwu2DqqDw",
  "key15": "22CvdzBdgSdpS1UGMgsMqXxAMisRK4Y7nu7W7RFVPaM4preVUFi4CLqayASzj452j38zNGLxPwTCB4Gztojbr6c9",
  "key16": "3chFEvEiUBQYGygDyj22vr5LB6rjuXkw3jFNqzgWd1yAfsZyeMeqMapzjrDs5dRr69S53zoJFsLh3EKMyfaU3WE1",
  "key17": "2y7MgvC7STTGMppwLQkVYfEFb1jyd4wYoTyXyYcgp3VNuWkW5pziqn2zwxU4UtycVFCcPcMWpdWzxEX3M1xrq6jz",
  "key18": "qhkm8m3T1s2agqR44hrTScG9dVv3TzhapDUFxhAu59BtL37B7cxzejbScSuwHquFhiQTjkzisc3sJxHv23qsX3q",
  "key19": "N58N2u6KZ88K3rq4mfLsdp2zgSjwDdP3vxti8MSE1KnsMHGUguNQB3fgWq74TEmxKdG7cybHbKosUDjessmivMJ",
  "key20": "Me8p1YGwqnZjxKpxfvFV5KzF3BameNRH8oLFmPLAS8efxtQwzxJduuugAEgUkj7e1G3d8JoJRq1ogHsBEa2Mise",
  "key21": "46cqbA6PhXcm4NdgmjvZoqAusfQcte1zqgc3aZ1LarNyre5CXshKZgYGFHKxWHUH7bu31mCjcLorBsyxFda2fyeE",
  "key22": "3fRu1PY24B5FX2Ex7KhFioSDRN8K1Tmdddps3hvTwydg9LMpGpNMoAwZ36gy3o7AmPgYBM1GaFTf3z2xeLXJ62ZS",
  "key23": "2JKToGi1fNGuuEzdwjVYp28ja8wQ5EFZgpX1XqTns4Huxh2ZtjmTb1kCqnYWyhzvj1HcwPbEL78KPpbSn6cW9ZmL",
  "key24": "24TkvKkndgxH2tw9UFSvue5atmXyBUk63Nz94L2zgsKk8p3kyChBb8d3WbCnh19xiSXchV9JExsDd7VccEzq9KK7",
  "key25": "4E7GdUnfvcLKCg73hPiojR1G4snrbkwMttMztP4ckZjSWpVv8RtDAe6jfTLz6ZGev2ys6fQnxCUJu2yyaSWV64TF",
  "key26": "2osp38tVUaXFzVSPPk5YCqEych68EeH1BCMADSvVieVbBvrh1wXQ4YojrwZoMKViB6b9HTNv1J4NHztH3AYD5HEN",
  "key27": "oJ7wWwPafqQaQ7wvCwbw57qGq2XeQXZvEfJLHySSjzrv3fPoZebt8SCgjY2NoB52zhVV4MgW1PAo8SNbYP3xNr6",
  "key28": "2SWsnxqMqt9FyZyrtw9QNkjTQ9fAa2yirMBuvHw6xMKWyhU9UcdbCXpoLeNo7mURxnC2GtQw7jwMn5CGbsp3B6rM",
  "key29": "4BYhVkr46ZvAoCmUY8QysgGGub6hyMQ8JsrrcP6wowtpB3sTMUpi6Tr3omqnjt6K94gUykbDHGgrYsQgo6QWW4jX",
  "key30": "3pNKnMPZ3yhx4zMGYCJn7fiH2ehiUg8wcTGNCjkUHNCMr2hRb5KkFa2cjBCrVKsenWnTAnQ64mZe2U6Bc1Q2p9CL",
  "key31": "2QWAxCfGfQCehuvHZr2HW94icrrfiw3a3BEUHhhHqZkYCrQpX6HcSX1BdBDcs41AgM49KD1rtbHbcoSihAoGnNsV",
  "key32": "3eYkm4f5Krd9M54Jco3dYo83XTN9i4JLMcBqGW5ziGP19rj3RmmAN3m2gnmkL9E1WLTa88qoyyuATXj5gu4CMZ89",
  "key33": "5URzNNM2Ey4DHdTSAsYEsG1PGVktftwUSybwusgdstt2ozez53t5yD8N2y4wyjijVHzfGkhJQgxjTqZqz6x4wVf4",
  "key34": "2pfW69n1ZwnkAtu2Ea4KsqMNYzVEh4zGPxmEd6vSjmv2C45tViSDiE8ypwWua4XQEjDruLbLwFT7arTJTYM3JYgc",
  "key35": "3Ct1Zy2vf4c5Q7fK7po9nR5s8AyRowPFLqZtiqs2YrDQuf9Lr28UneFv8no4Cc8mSe8i4qnUxxYPB2wkEPwEK4dR",
  "key36": "3t1s1aXdQpBqPSSt1gdW579gu1qk7cqrhpLiikUmYni1553j6z2DEx4wCGfJcp68hemimZPu6CFxHum4FDmov9FA"
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
