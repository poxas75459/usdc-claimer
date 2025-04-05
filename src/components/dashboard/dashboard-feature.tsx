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
    "57M6H8LRENKng8JAtpQjKpjDuvcd4n7r6mwojKtcHaJXtm3iGFbRrTHDTutp79wKqjuL4gJtJYqnr6aMVGR4qaUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SLBfsAoPjHbk5AdL2CshG4E9ozKguwzVZoyWyE6M9NMYosmbU4FBdSx4SaLpH8bnE5diowqnazzwbVeWbPhAtKA",
  "key1": "4aSR9qHeqVYpE52yYx5qTmvKvgJZ7E48UbNbEDa4pk4uz7L6V82auoQqGVprnsw2rG7oFwUN4TSoichQZp6J2TvB",
  "key2": "5CpbgyGX2epPNtkLBBdEkqNKLGaw868p6SvEKBoqUmuEcLP65AKXwmeYja5urpBoRPA4LNpp4XjZshyQ6sC21aCH",
  "key3": "2piWUnmedxb8aEnjxYqHHjJdnqZM6o6XEk1TnbGiPkDkaTCVTqgEhM4WLEK4fqb7Rq6V4Jn8c81acsDhKuedQrDN",
  "key4": "2AvteUKPEK9KTmEyYRPnZJ3WReZHd6Djx2kMudN7XkaMsijccxirNeQ79Fg74NZUkVL8dhXn3r8FEvnPmmtKSay9",
  "key5": "4WAkspfLvFS9nbjCz9gpcsBVG1WPNbnhJd2xw4w53dV4ZCCVtisTD2s2x2owScVBtRLuSVjA5Fm7EkXxXmZsMphL",
  "key6": "5GguPsN7ZK3HP1zGw9aTJ6ahkPBNJtMQmXfkEJYiqtM7MkRBZNSWgbZt8oQZrG9EaiyFDrMqwxmWYCCVAvzxyaQP",
  "key7": "2qJt7DFkLhLkgNMJsQiGn52on9f6yHaTYzaXceWWPymNKACPqTzb3ha6dAgYyeCMnyJ7fNMhQNpN8H9wwYDYz69V",
  "key8": "M1hREcUNgTnwoT8APueZ64ecHsYotDe9s6aYGfQaQPcmWRd8L8xTSGazudwmwPoRbZmADumGDieEo4j8GwS9PsS",
  "key9": "2p8p5aZM1LxyqcZhsw3hK1HkmDumbegCThpPtCjq1jLdNXhdRGLGmvjTgDRoZvujfjbbLGSFZPHsLsgeqGRdy4pr",
  "key10": "5fPddYKmEB3kbWbd3oakLzky1oAs7EpPDQTzQtY98NUeim5YL8FedHpHWdBtRM1izq6DgzPFWjXw6eeqcn2DHMjA",
  "key11": "3CxmhFLX8TviryNFAFb7ecyH6CdK2qCybGdhnCdDnzQi3FCAfY7QaZnckZFEW7uhpRfxaVfTup24rFRjSqQK81u6",
  "key12": "5SYscnMK81PWuaxocWd9PdL2JSjR3RsFP6CSK6G9yP3TWxYb2F61hZFByLYugWGqBoq42WFLNizz2ChBM1Q8NE91",
  "key13": "3AGAihEGojLeQ8tPR4zvZ2zHtpyLbEC8LEhwYt65YGEM2kWthK9zzk3obsPLEu5ZKeg5UJXnga9pUK1xXKscoGaV",
  "key14": "2RLSQHBj53JCV9Y6YhCsDrQxEZY225gysBd2DUsBapXtXStT6b6LhPvEZKptUtaUaJN4Av5C64LU5LLwPsCT1a3m",
  "key15": "45QG2YXyEma4VsgmTCZ7LfNRpoV7U2ZMX585EDAqP4yZvjcFUiMkr9982SgmabAKJ5KvAQb2MSZ6BfV2L34jMNnD",
  "key16": "qSHxNCmj8gbse3EYxDfQi3jZttRKf6XftYyapCQjDfZKiDgfXt1sM8VpNDRKfiyziKzq8n242SZhYs1QDnUeiBk",
  "key17": "2dj9rFNGhbJJkNNBu7ksGMBa2D6iPpmCD2qaGZiDcWQTZL3Huz25RkFUuBnvAvfziSiXKbBD6ietPkVEoCNhwLAS",
  "key18": "3mXf1GCHqYPyujk6c57Y6QujUbP7V8NpvbEZAFatnLNPYqi5cgCiTU6L5MLV5EyEmr1GNWdND53BduciG6njGsr9",
  "key19": "5ByHXWGYs2UQumrijBdZsbEsZUa9cwEbQ95P1tcz2a4RFck52EmLhstqCCP8rQ61xbSUA8mxsN7VeSuCFwR7vuVT",
  "key20": "2CJjvCv3qB1qE7wMZJLSgcQeUkA1G1LG5q4GDSm381pxSxYRqJCpqUxvXEV8qxqsMQ39Ja7EfJvEMpAp3UvyHaen",
  "key21": "4iZb5VGkVSzjrdtZFJcHTH3825trF6LXyEjjbGCfo1nK46zBFFn1LYk82KuaqyVGxdj2kjsHojVL4BZF7pnsgEMq",
  "key22": "3LeVrCQzTY6A61XWGwBAo83unztwqU9hbHJnkPYeLWu3ey8sAUZqjifEEvFRgSm6Udc1UL2ZiAEjmF5wHGnunTK2",
  "key23": "3zR6sFuzDcyAYT6vx3ta1GG7ZRuNEQMBiyknhS9irNzw2DSuop9B76HCnmbtowdbJhDmaEcxjdmapY4Vt4gfmtX1",
  "key24": "4dvRV78GFPCGj6xzLr9hTrg3o86GN8HYUnwdkvawcyBFoWvDoFHbbYdMxGkeq1KF1miVhnSmz7VKakGeVR7v5WFX",
  "key25": "MHXxcBKuERFGDk3eAoWEqtGxR6TtFZh6kbMUpPraKjKWiPDsJf7oUWCMw5zpvbKM7vKa6PdjHyoPCwaSVjeLbnT",
  "key26": "4Xq4CFTYJ8nJTifaLtXN6MRkKWWeE7xxHcmzLuJRLEa2uoSjsh4cGoSTmX6UnZqTbHo3L7LhpQbmFxR7yiJV8dBB",
  "key27": "fDV3kqzQugQK8QmUQMmXUa8Bmh8qkRKRUVbPhwmAjwn72ocdFniscBoXY4LUoqhYrLgBAdiJGN7qrD7WVMuyv79",
  "key28": "2URNx5z6ivAVNchiMu4yFP3QoQHd2TfnUryE8khtqXRqLmWyh8LiZ8zijsqtimgy3e7dmFZYtuTLbXwsBZAA1biJ",
  "key29": "4nKUcwfoofvwsCaCLf41sgwscr2PNBiwwpCnk23z3Gtp7FmZnfLqWnHnn3G5tGrLZ7pYVM4xrj7Wxkc5gNKu744g",
  "key30": "3U1juzjok47bCipiQGkTbPN6PwZfTk6xp4GCxuuwzTh5pnDDEp9Veu4LDGTcMdkUuX3UzxfrpC46eAhY7NQ7X1Tw",
  "key31": "3tt9RqEUV4QEXSBDp2Byq7B1ktN7otHn1zEhSSuZrTmi17tm8VBMRy2T5FWFjCRSy5ru7CLZ7zXuEPB1t9d457iK",
  "key32": "5S1BtPJYoQtkV5EiHxxLrENnU5P3RkcY4SE2Dy8h1vHkp7crJLGB91jtNDPLsM4FgF1jzuZFqwe89BLAV8MsXdQ1",
  "key33": "4swQazQZtqLdoT32Ag5cBpMVZbVrFN8uAmbznqEbRw1PcZa3fBhE3mhBjkekawfj4DiCKeYWiKhPEcWdYx3WZPGL",
  "key34": "4BxcJ4WTSwPpjWPad7LDX9AZ8RhFqKATD4wU2mo4xXfziN1Hz1BX17AeQXxxiFLh66AdmYaS747wkK3qGgyXv9p4",
  "key35": "3ZFj21VDP22Ybfyv2Mz1ubeACytsUcbhSJ3WnxPaGXHcUJ1swPbpksHUDUyhRYCxek4mBh696reAroG2YKNpwuZQ",
  "key36": "ev3Cj74Hrm3XVNpKGrdiaZUTTuEMs7KL5vZrtn29g2ZKgzrJ3dR7cuKTrv9xH6HTsF3vKKbtfRqoiNjYBECfrmp",
  "key37": "4nfSEK833guj7diUuJtkUoXRovqT2q9rYB96Xp63iooM4PpyeZKEhw5Mh3oeKdYTPH7mG2EvEViymxD8VV9Qsocw",
  "key38": "3EWNrYEnb9YqXVBCmr6sn5S7FMM2miSL5PabXpRmPVyxTatkZoD5CMCtPSF6Tj3fi42Snedy5hSJP5KPJu76GPqF",
  "key39": "4UonQ85vxkgxy7kE1aXYxPD7s9GHdgEr4UnNrsi4JZ8YAH8c6eBhp6iZife8n6EJQefMUkiLvBs59fvas6PTS65v",
  "key40": "3BSMJgwRJ8y9h11myr1HXVQcZ5EJogo7Sn91c8hX5VkLMMFVyYxGJCtfF7TmqDqJ1rPF11jCCCLRkbYjGbsxK4ou",
  "key41": "vivtwrfRrD1xk16UkNThMxQcGzRutbfwHzUNuPa8jjkCyzFojYhYDEP5btWHkfne1SmpBEK4BXD4hLR6J8eNstc",
  "key42": "2k1EgJg6v9dgHjr4eTh2EGwXAWRRcLzdS29UgvEFiqcdgxXorTTuPhYcxSthAZN2xEkSkr1HyJQatPwubs4KpSVY"
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
