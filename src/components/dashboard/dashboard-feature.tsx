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
    "2jenoMFWiLEbhTaZKyfZn6Nvc4Dmv5375aaArPumnqjNvMDwZYFhZD3PTtkcCcXi7kXnpa2CfsCsNhuMzV8b3o5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aqCxpdBq7P8mrkzje44QZPuPdYVKP6zMuU2k7W81WQKuY2PzowzPHco4qFTPez9yaECBP6NRYr4kDQ7d76hrRYk",
  "key1": "2Tg8zHPXUsfWKL3DCjkMGcDRDpcqoY5xnP5rATtwt9MvFzsKx96oBvxvK3kYTRn2tsDaJZVUeCt7iKAbFueDmKA7",
  "key2": "5KyWYphXUBncEbFEYzn5FZtbtmL6DVvxPzn3ThAvoJ3n45227HydenhdoSGGyUTNQ2h54VARCCWkNyVbdsU9iZAx",
  "key3": "3ghP5qNS8ixJkkESe3aSMXddmKaHt6uFcmoaLMdLs3HYGVdPNAWy4UA2dR1M4DposCBhvbnfTfdwA4ZcJ5Z2gXRY",
  "key4": "3m6rG3U3gLbFftDJ2BzBHx3ZUrc1vuqHtnTwNZSsF3kaYVWNYAJvsNWFy2LvMMXpiZdXPvTWR9ZRcP5cSMUQcQg3",
  "key5": "5spytYKypWPSyKp2M2y6ZDnGnhsJxKR7SfEe44LU52XpGxNr3xPUDpeSYZ8Lmns9MecowBgJMntt4iZ7bQfG8X5t",
  "key6": "5D6pvxU2aaM5TD9Hqyoz43XvSjh56gWvqHnnygWwQxSENJuKnGGMzofGUiYb5rqnAV37FRKnqn5knTpCF1aVNom6",
  "key7": "28msZxTkBaM5RRSJPiqxox967pktB33kS4tWZCM3BcPJUU2eUD1AwkKZd17HFFLEAwAB32TC3GbQjdi5VwfhDmV1",
  "key8": "5eiaNSumFfvTcLUJ7TKMGf9NQtVF41mvsAFx12ZvTpnQwUc6zHfMeHdbvE97YH1WfxFriRpP8dDLkFRzTZNzmy3T",
  "key9": "2Q4aDsRr8ZX7g7eaVYVdRcp5XV3WQ5L6gj7bQfs1aLepEwFsZyNPcBqqq1xHeonNSz4EbiT8wTqPxUSVMbPY53zE",
  "key10": "2tAfySQhtLewh1iNEC1LurqueHU7taE9AWPzvPusHAW1ddvAuf9rKT9NU4YUahyESNwXb4dwvFPVvrC83nh7tCa7",
  "key11": "aG8qbgCkJKDwa5NtGG7VmmL51vKBhjKJFbso4XsvLFpkQ6s4P7KtqXDmzwgvYjM5xGPpF1C9cd7wAMYSDvssvDF",
  "key12": "2M4TSJKuia4vtfuEVrScpnyd3GXgYZK7Q1cTX2vT1aqkPcHuzmHxjHqyanZ2ZB3SHroMBNzkVkoCM4ff9vvaunk9",
  "key13": "fadMhJLs7Qtp7m1wq2b2oGeVHQ54ehQCebQ8ogB5uc7AfiRr5YnoYVmz356KLMsGVJgjMWzQybyNHkoHtMKsvBW",
  "key14": "2mbaSm3iXvtrLEbShYpVxnLHpZ1AFjoiMEGzHP1s2opsW6zaEw5ftfQf2cyivW3nCgGTax7cQgMfFc17uKGGfqU9",
  "key15": "2MHpAqRxkLTPvQbLc4RYHh4cnRJwztGL1s1cBMp64jpuSD7aFZCCBB9Ebqoh2uAE4CwVbYQVLFsVxupYsyu6mE31",
  "key16": "3ccBeQxg62xhkZBuiZGpvJLc3uhB9Zs2KRtNNLfMVzyWxnecnvTpvMhWDZEPxcBRuZaFsxjpzNjYVmdNxPQoocM3",
  "key17": "2hyf77iddsL3UeM52Ri8TwBfJ6LS8JZWsCwrcEjCkYxzNu93E18NcbhuA38R697rCeiukAQxyJTP4AXM21TrPyyk",
  "key18": "54mpuUwwByRwVKDgphFAziXKNeRLX4gKvQRNzLL3fQPDQHm3rZmrzLVPoya8Apns3KzeZSZedomhvDbBMR9stmPa",
  "key19": "2ugKkmZZkmp6Zp69BMfqdBFajbvDUrcLkv1mTVCSrcKsUJfLrfPijLrV9hXLm682dhGLiiuPFTHTR7hfo3rj6Bwz",
  "key20": "3v6Kc5JtSwdJJqYUiJGFuEpZcQa94PFrAQdM7uVXJSQGjV27CcX2KvRjxjNJLp5taVNmuD3yLkjozovyLsEaZxwa",
  "key21": "3H8UJTaP68Xu8exCJUyLBmAE6PBdf8JqsseeRskLefEsAjtwNaKQDd5197fsKqWuywzoM2tZ7cNMxK9amiwZt745",
  "key22": "3MhHRq2hUTybuW66xrF7vEF2TtQNejDQ8tPobryna4MVkqJCeB8b1XmLBLf7KH1EQJAizZQEUPUYzrMYYh1PcSgQ",
  "key23": "KLvfadyUKEcMjN9KDSB7A2t4uAvWbjLkaeUZzb2Ypo38pPfw4d1mTZjFvLJ4wJypzTiRaKvCdNWEfRQsx7UngNG",
  "key24": "2JpedUF5rqiAvQmULyJ8HrhNFf6ogJDttHxX7g1fjpdtGMWKwRNZBxssDdxBhmRq7LZQKbdgrDNutKErixtmopNn",
  "key25": "37x3f8EK2GzbBQQgSFwRq5ybmdG79HFmwXM6xRdGkeXGveELQpbTpQiaZizdrGVxHtMULqSrDYFQ1xDbnoCt54UW",
  "key26": "4AHG949jP8ojsyCo8Lri3mCHCTBfM6i2ZhsXMhVhnmo2cwRXtSuSneHaSk84B5wj6h5Lf3mHWNcz8umaZXxmV9ay",
  "key27": "26ZNj1UBgF4twUEVA3M3RKwKpL8MtBr6B12iwxQmBJxfYTgUMh5HeNTkddUt1zo85otCXGju88aT65gh1xysnszA"
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
