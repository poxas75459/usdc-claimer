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
    "oxFqZdpom962ex83bKEzAp7xQKuQtD3KT1mTQQ9vyn3qRKbyLnrTP6gbNh9VJyxMgHpZvB1sH1MvmzWkyy8BB6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8iAZsfPJe9FogCoUpEGuWuK3p5GggNTccnWdhijoynKGvPU2W62mrrQCh9xHwJBwvi1V2wCY5Bwe9MdoGAvyKno",
  "key1": "2aSPSbXZYUK918ULaB9b1Ny5DYFpZyCRgpBcs5ughGe1suv6xGrQfGmJZE83cLK5EpsjEouWrs21JGjqMscoyUVa",
  "key2": "5eEA3PX8cHicbhHCsW7HQg2J58UdM7fjxgMpvN9djK9cqKAtUQfxrepRhkecxTo8oPBRpaMZA6RwjkCtmEJKrAvF",
  "key3": "uvowKj5zAMmETBjVhJiyfk2ZtCUdeCah6h26TFaECowYHxXGxDnvGKan4tBK8cFAH8gFoSaavTubrBNsiWmngSJ",
  "key4": "4HCgm1sRkrGwV9J9RKA1uAAj9E3n6zTPLPbnegy28HQ32DYAWPKpesE9d9VNbWB4moP1w1Vw9yTd1Gg3URyjRwSm",
  "key5": "i5TBok5MYG7p5qShKb2WZpbEGrdJrETcZYC9sMtgtscA4U4Nfyw93kiZxRtwNQZtc9BHkT31Qht47WSajSLvrEd",
  "key6": "4zA1vmAXDZ1GSmcDwd1vWCuA1vtvodYT27BcMVqb4GtyUPrypqYBECcNTxSgwPbK3JZFM4ruRW45C13zAjxhWb5B",
  "key7": "qq7PPgwMkPPz78bzwMELYmUrbfYdTgM4d5UN1KzeyhaUAePnJRaNm2ubBpZAAVqcwkMuTRb4fZr7wPSBvLS6Lpw",
  "key8": "MXh2Yf5xWawNAH1J8A46YFBJPKBMFybEWnbS6bDpq9f1iDSobUVm5gvjzmiUn1XwhPwEnwH5cfxEGRPkzC7iHML",
  "key9": "5dz4TxF8912SHC2fxhybFsgSuaASQYb7gWU7Nj2nqhCKQBwmLcLoViYPrvQynymQbmUncDsiPt72c7w5TN34R3vY",
  "key10": "67htXhcJzK4FLnuLqGUJ1WZG6oPGqdiyMwUwZnCuKFwqCRdxtsCgXm5VeC9EeszFAgNtrBZovXTsaESfftTgVYSu",
  "key11": "TxEG3GZZ65heS5VF1oFrqW5qNXKFohvDqYjjfaDCrPaX3vqJ5GahbvKZ8SXfzoMeww8zDa7UAbYb1c6oM4Nzrpm",
  "key12": "4GkFW2nmcW6qNVUnVeSyWfkKt3qNPxTE4vxuVRWhTaWZPFzTotfJMLqHkKrUwx1wwdRjQproyb41jKihM5PYi9B1",
  "key13": "4FfCfhgiWLcJ2yrmJjLTLairLgNpBwVazFRkqH19FkeweuT9a54g1cxTzCakLK6EBvvZGimkZLCZSdiLthRJnkFz",
  "key14": "5jrXbcS7HWZGWqUrpmVdU62cMMd6s6Xya88PFQpLWT3HmsX6omxfJdZ3DaqhtvXcPxAUSrQyg2oiCxucBZvDyRaY",
  "key15": "3xUZvq6CB8gegtq85VwCyTSFaPHSREUr3DADTQEW1yM7Vmcr9cHdetX92TDbkJgp6Bohs7jtrybotZb1ET3GeRg",
  "key16": "2Z4MkZRCG9siwCiVmD9kodZWiY9CSgZV21JuubXWWpM9Zy7Twd8FtkfLhKzrxi72UMWSjZ25HorpDkuTZQdiT2wb",
  "key17": "4AVhrtq4dHiroQpHsAutXYQt4bxL8pk3rLH51D88cn96HqXErkzNEULtwWBaUEs65iBNh2QmemBQ1Y7AcJqBcJXF",
  "key18": "3zGzyg7xBRzZiMuswYXM9RaYi88TtYPtEcEzEpBkKF5K6CSFyTeQGmMHHQSt62acEJJxv7EAwfEgMCQMzynkGtt3",
  "key19": "59AE2davxo2edSAc9xscJSka8futmticExMLLS4eJgz5NRofVYxguNGpAf6LMZR3jKJKb8H5F3VBgyehhCEfJ5tt",
  "key20": "2UPYc3AaXGSeoh37PkKvf1mitQS8SBKYCC6vrGjSt7PeCAKmCghyKfg67QZ6vQEgAwpoPyhodTFxfyJFu5fjTnb8",
  "key21": "42qkN4PeGEYQukMVU6jeorkFsWpjGZNwTaZs33hisgSMDBRJL1bjRXRZUCRJ8aBN1jK18m1bvEio3phqmXqQJhwZ",
  "key22": "4vKFjZRm5Wfge4qR4M6b25jeTqqUHAZLR5zt2WUC7KSB1YkkThwpokRiYRa4qL6xboGZRCHKg4HPauQK4YApJEf4",
  "key23": "2s5S4qF725oM8nva8TA12MrrLLS83i6vC8cSJB8ZqMNqaw4pcRqzeV3SVhkZRrmkBDLRNH6YZepuhRTP9KiE1whp",
  "key24": "4KkAif9x4dNjVihUu9NY13Sex1stzhE4HeZrkepFwfy976XB96xn7cbrNNPAwXCUgicVHCK8rHNB22fCYWNYfJ8i",
  "key25": "4zp3EE2hC7KVKYdSjJe1CjbLVTouepeG4vuFrNkfXkv4gEPL25m7JzrUeRFiUxqcSA19PU8HaHVLXdehCavBfoMx",
  "key26": "iaJPTKLRPrqMFoNHkbkCTc47M7egTvAdZ63gYTSLGFXSh3d3GXbDYJ6mC3PCq8fDYGXtp2CT7tuSAxPJ1YqMhB9",
  "key27": "3iziMhdP3ZjN4bNEL8FLzx5X3GewWuDDgrtMpwdceWqnhDZYxK9JMGs8KHbV3Bumz4eZ2Vb8sVJmGdsvtmjGx8SS",
  "key28": "4cqhBofjEMG9eVFuNS4ZqfPBXxVzGfG5mkGvbJnWWcJPh1KgzZyTUnWZ96DfuRskXTTiKrceJhhdAzUxwUtyCMTt",
  "key29": "3MS8i3gNxTns8rj7Fw7VMnHbNazU2uGxYBGcezgnVKBbnqiRP35sgp1dMNAUo17WWyrXWB8vdpKFc5NYykQBz9os",
  "key30": "A9RZD9Wj8GD98uityyhrutXrwcmTvTqtGfbveBZAujhYxE11nw31DW5wUx5ZUCrDFVwR8EVn2nz8aThQrvQcWAL",
  "key31": "66rsDmJiNtQjGTJ32UHXxmin4tYKmFC6VzWzS9XbgFF7fFPv7mJUp5M6BJdneBwz4LdNac9LnHS1QvotKGKb7cLz",
  "key32": "5xAuq5ng3Ac28Y4xUKncXPY3gJTCvwzqZz8ELLRkinMkeXPFqPUEkPk6S7o9zXs8VNaFtfYv9gRouEkTRUwzEoYs",
  "key33": "2vb84Ft2xLU6TLPd1mCVXiqodVjPvCNYqM4pfCUUK3wdPhaUbYSoMcrjXcfH8FeHCgpvKQ56ouEzNxub8hfLCYaQ",
  "key34": "3RV1c4xxUHS5auTW3beoTCSdN225gndp7YahAP5ykCEBnUCkiR4ba6NsHUKspWaKgF8n6f51xomyr5ZRExJ74Z6P",
  "key35": "5iDXpAqgXdVyebeS17E1DJGtbxFSWXSKcjyN4Z1nzb6aF4yw2vh1AFVxbPo1CXCKEoWkokUgBn6bVaoR66scmo5",
  "key36": "5yU8xrKz8nrukW2wnwmxP8gpzAZeGKpAiyw7fuTdYBCAa2PBpLafQbfWW6bFkQWjSeg7wXAwhAtUuKazYAdwmpFT",
  "key37": "W8RkNZGXj1n1btVJzNYHBBuNpKiFcciPrkz39FXddkmsCspASRhJobw3LAQEDvhnKrJjnDBB5DxNWfAuX3fmfMm",
  "key38": "3ykKSTHSKvzapXb9eguYXr24mYiP2P28fcoaf3F2kcyFTJYxYMERMXTJctm3H1bgSP2EpAzmrQWQrdxxtUi3BKq7",
  "key39": "3dajvQbr5iGLdp1pUjneoGESha54e1aD5BwDb6eQuSteNgD2zB2UbT5PAB4Yhv4YfVAuebV8Wj2pya7byqc795DR",
  "key40": "3cf8A39HNg5w9AmCefm4TxwgCvgJHFB6GSmMFDyPsMatwGobcQubuR8AAifUngefZWPkQdB8uJDMvHpcoUiGop6e",
  "key41": "57feBFZAPJNN3BvQqu8gaccVZ62ATvS3wr8ZCJtKWzJfQL2oKnvRvPVJYWHzuRdYW5J5uwLfEjRb2Hzidp9rsv4o",
  "key42": "3hsXYAtrgEx32qSZ9EP1t5A6taFChgmCy1mU3hdDEAbTFwK85rpxgyYFfThXNNSGw5FDXpBzz75gUmdSr7FbZgrC",
  "key43": "3pHNry9vxWTqrZ1377iAx2B2n9e21zfQJ3PFfn4QNkg8Wc8uyZ3ccboF2NnjWxf4MckQB55xj49BEEwwscMvwFQN",
  "key44": "4pN29RsScetrH4xwHMDPomyoPbPtrvAcWf4qUUrgdg1HBWVS7MNCmA4vQHGruwsDGig2LRr5wHXQhETzkX6N6Fxd",
  "key45": "4R8o2u5tuW8TKF9u8dJGQ3bHVsDWH1TWbLutn1qkq4YJcv2joZ91XAocooFhtE2rDfZkcypuatPnEnd5LW3N2gxH",
  "key46": "5cVKuUJwHFDSub1D6PDXiBBB9YWKu2iGNR9XMDTPDUSjmnFdArhAozKJJyGcQP9nG95d9QRTBxgHdbkbBqfFz6eF",
  "key47": "RQ7JNfr9BKsSGtVEEWiHXacy64LZ4dD8Wq1S6B8QfN8qXUHfm8tBx9wkcjxj18BdeL9bfQWYGko6n4ukXcBtTXh",
  "key48": "5XboYGsdxajXK51he4XmekXDvys1jxdx91uSahX4LWiBsSuCrkaSTcjD9RePjx9vBFsf662s96ZpCjJ78ydcauJR"
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
