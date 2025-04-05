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
    "57GrhfJXaz1NrGvWGNHPpxyDbvgegwXwKhZCBbWAjq2RRuaPGSYQVagFkedYtBNV2V6fhYehvKoEN4YwEhhFW7uY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ALauAHAL4psgKFH4sDaiUWA3F35Qxo6DZWw3VNqvyJhM9EARZHXJGchSmPjT9Ug1th7irySrLj6FPKqWAvYcYd",
  "key1": "57erSKSYuoyRUFYK8nkWjLw4k9aZuETQptyNfEas21cttgKvaUPwTUwZzTQf7rwj9StC5EmVzE1MkoeZiEs9WFn7",
  "key2": "2xAA6x1tVN6XXa9xj5D5rHzmtBg8uSmkbgYb8UiE9XaWfDPcLuRRmt3VjYPeYqxbur6UbznQE9UJXwBopwzPTHse",
  "key3": "3GEE2RPNTay2FVLwVk9snWfRXAmYWbXJ6jLr9xLhvKeJTk29RNXYgN76RuzDhMkEWf7HxjVXTjjdhoB5RsWso2xy",
  "key4": "3q2rXaYMXHkALXJbJVABLTm5i9FXLk13SG7qQw2Yx31Y23oYjWHJV2TAAh3sEtv2oZqMdf3WX84gfynNBR2vg4ux",
  "key5": "5HTVXQBTw1P7HREWTa6WY8Re26P1aqoQ4aZM8YYbfXyV11KSh5syvT7Gw8xuyJVwi2U3cXqTzkhJJDC7Euau2tfX",
  "key6": "5hTyrNzNUszzJRfraGHsRBXTgujh1xrZDUhfkKAX23UbKjPwzcDMSKZgGHSoNNpAVxKTYbMR9WG6iLrMxhuCvAk6",
  "key7": "56JTTKSsoPuWJwjHJb8GSHELAcgfYki1m1zpWKo8AnsVX93GgcWQKn9BMJVFFe8xvYC1pS7CHG5ZtpK6JDQjJ2xz",
  "key8": "5w39hrb8LaYFi5Gk6BG5JesmXC5ZcMd2nt6hAqUCoQ3V61zCnz9DbvMRiqHVseKcCQJqjuYSq4H3td7Ne7Cjr1iq",
  "key9": "4Kn5b8BSqcX7L2qho1Cq47GBg91uUxP4Yt8Z1pik8ekNmP8Xa7e5j8ZtWDb1z9YxYkhfX3vBsXTWFFeLY9Mj3JR4",
  "key10": "7cHo2UjkmBm1zhLAha5G92RttAPicohpqeLKtMx1U9fGjzEP5AKVj9iENKcUMZZmLi1JiJu1UtLHgu4SQEGcna9",
  "key11": "cv2dZpr6X1rjg2GvHkeVcCNJ4927bsDZEqELw2kwxWgJsyZHPuQsGAwF3mft5zTA7BzsjvUT1YoFhiMaKqHHRm4",
  "key12": "MH7P6JbrFcm4fmVC9Y7GSDHXBiW6zU349RAwh88Su95vvFGiDyuDtC29xDXHf2uMwbqgZWe45mR5xXq6Mnei2mM",
  "key13": "4MhVB9GKzkPsPSySPLbXZYutfKEEWMZrTTNLGgERN85GT7fTbqRzJ3XYwiVPo5VwenvUJzu1PTmxQEcsYkaYZjyw",
  "key14": "4Z33gWJSP9PMBLTWb2RfBXn2Z55vkfDxn8EVbDGNGh3Sv68XWUNYFoRo1SXhq8M9Efszbr77G8tUkjtUoqeBJNuQ",
  "key15": "4gw6QRM6UMuBzooTzLrfRmJRakWhCshJ7NhyHQBWcG79KLmtpAe8ditXRHUZtAs1Ab8vGZLGNPmsLNjwVCree7Wu",
  "key16": "5SVNNk1rVcJuLFNbKKUfrvkSfdsaLr6CsNXY7uHLWvdzofEjH2p7LKSRTtrHo9eV58tj8cmREPbj3HbLfpdGQLfZ",
  "key17": "2M8DVT4GVEJcjDL44giQTndyyrpzTxzJB9Ej6ZzJPNfp42kYjcKyADn89pDQHrk3VhjujgGSNAZELo5QNKQV9hmS",
  "key18": "3A75Ju7G29zMn4GH4QV5tM1JdZqgBs5Gb7y1dPRCGWCRmXtdWMBE5o2H8JCEkhPTbzRkSXKVJ6qUEpXp58aBsmKS",
  "key19": "5bXQb2QnoaEFiCj7VKiHnFhUJRQvuL3pTsdUSDk2SBi4tgy4SQg8HbKrLzZF2hcc9cBriLkN1YUqimmHgMtmkRLz",
  "key20": "26a96dnULmNNEMTYfUN8BKUKmGRLhnwUAwQGTXuJhRfoPG2mUHW1ygsxKpt8WfRBWE2Jy1K75jnvNUShXbekfxBm",
  "key21": "iZn5BZK2Xg3Cs4pquvGQSDoh3y1aFwj2MLrqKr4FFqW9CiXLBBuniJ4RzaW5js1JUSxCo9coSdGkgX91xi89XJB",
  "key22": "3kSZUm2PsiirHhxU8HmY6ogfb9cY45F8nr5q1tMC7QUUdEsdkUWvnkDHkkDBi1yASaWUNPWFd76Fmqn6E7ua1nAL",
  "key23": "5JF1z6gxEobp2hR8apXd8J8HfxGnSc9fsx8VxjFAFZj21Tw3kKQxBsvyEpQCeUY1Nh4oKywMU4gGgzePAPJyzF8A",
  "key24": "4Eb1kE8SZWsnfMgZCYmyfxvnKsjZERoHPbtbo7pxFoAgNZz6Ux1Bvw3MsTwVix9xhZShZ13kG9yBekSMcymrMWhT",
  "key25": "215qvFHRQXksRorKrAMWLg9JRMXxShaN6F6QtpZCrcejn8Km4UE8phUKKZgx9NT418MeYB4cGJeDoPTC4sYjuswE",
  "key26": "oUrusjvysiNnsnKEUCovrm24NKaggEi9JyF4xqkh66Pp9bPELm4GziAA1FvkDqAg2Cc97W2eyLNyN6n9eq41b57",
  "key27": "4TPfMbP4htedJpEtFkDidYGhyK1UCLi3TUzxgciWwwseHdea4ybrd1xCA9PrcHx94K4U1wMfGrkWhty4ekBA7pKP",
  "key28": "5YTKWA7LeYQvScVu1JQUt5dZW43TmvYkk7bX1EEc3vA6A4f7GRu5mnxSUvXbSgoC64694W6JdwtZASQrYkDXDYnH",
  "key29": "5VJ3wVnUTbbRdDCok7GBvgN7PzSMUTVwxPoXBfYn6n6F3oJfrvp3PrV8N2n9mZVDvncQC841iPjh341yfXQTL59d",
  "key30": "K51CQtTpygZ7HhVKQvNjLfjHERhDDWNJgyjEtMU5eU5cYELm5PsV7fqdVxQqmtKipBGHYii5mJ3UqSFAcSShCPN",
  "key31": "4RoxQy5e7KYC2qK2Y4oEZVx5m5trUcHUq1PfqmaDPoNLsAZe9y3RxbuUA98EGy57JemwvRZFdHauGtkMiA41w69",
  "key32": "3nHhZjt4q4NYry1jEgRySoqH7wRDnfJrt4XiZkWcwGwJY9e28HQ7qPGSStXe3B8zgZucrxGrrhuUMste4cfZN6tT",
  "key33": "47BGtxiR4jTvB3R5xQw5qdWnukEX4RvRzSTVn6toYCkbrFVGDC7EpLSkVhfr3GYiR6xjsJrznb28fkfALca3CkAv",
  "key34": "5vESym3kUXD4uax728SiPFN2bP5i9kpggFAsnnCs91nKoRUi4m34mP6fjneAZYUqjUSg87ZDXLyUEWzof2pHyeHC",
  "key35": "kMwSqPXrcC4AGCnFgWVDiuBRXkJzetZ5zEJU9cua6PUrgJC2YaXeLG3WDDsMqzqiF79RZ1raKBFv9F3QigAvoyk",
  "key36": "4NYfb9vcWy2Fwmt4HVp7TriKNXDE7sqbxrxu1wPAGSUeZNPqmMNT5zhEgCg6BsCG5hWz8M346k7z6cX9DQkzg26"
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
