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
    "XuDSWpqDHA7FSYTqxxb96M2uetTB7cw4FfxXJER9st5wqVkTAtNCDW1AUbqe5fmz1oLYnQUz1MxiqYGMwMfoNKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WFQc9owcKcDSpFerAdRq6TsHHQ22FgHsD7BkjMSSBvu2vWbsEs8ZvGnWW2aB5kRR7QaDtsfh4rUyLipkJqqfRph",
  "key1": "4aQeDZCANNVCW19F5xRz362yhCntSkQUoDGVnm3HzDRyQiKPZkQbxMgeYDc8jJ4VGarmA5KaiF38U4CrBUjduyzD",
  "key2": "4xDMCLF1XBEfzDV3ZCZaNBFJ7VLDBtuygws6JvoQJJ5FJLxcVRjQqnaqq4N3o3isNKVLxYehnHiVox7jokwdFHFp",
  "key3": "5b6jnVroc8QGg5t5uNyKAFTi4emguUfVwMhfNvyn9JS4xXkzEUKMS6hJLueBZsXLboNcBuRHKFDBWM4K3W417NL2",
  "key4": "LbHMtPxAzAAWDVxgRRs7mm9PpgXZFHmM6vXMrAm5ZB9PaM1wmpZobrBnRgKA9VJK6vnZfbEgQmY97Y2Ai6yo481",
  "key5": "64gnAJM3jM8X35QxR56GggAHqNKgjzuAtqCoWaEc4HmvtPPXNkoddAieZYty9Pb7okNnezhymavmtxQJh7KXJwg9",
  "key6": "2hkxAXd4jZaz2bdH9AbZW4vE1QpBEHm9cSLUsfaqKwiELSxvRjNjYpqWDRobwWBDqcHRcEeo2WjGpbu31XMixzhW",
  "key7": "51ZKrgFHRmtVhoyNwRNCednCuGygGtV3Cwh4ZaxEuzyFQo5haV1DK6dc5Y9GMXGhf53bKzm7KRmY1t2MGVZoz9zb",
  "key8": "3bK5bK14KZG43JuFVn5UGboF4nXdSfS2FbaS7VTAckYxsQ72LcoUgRy1TSXPGNEWSy8pXneW8WnhvtgjQP94Zfqv",
  "key9": "yabPefeox1rBM97eUD7rVGRyroxS1Bg2uCdZhFnRruoZ7VNnYkeaBxisXEJy7cjNpjqNiyeY1c6hUKdosu64N5e",
  "key10": "3GaK1WXYavpRtDYMQVEnpkqJ4gxKZAkKJeR9bTAoT1d9KkEeefv9mZZhCQF94vukTNR4phnMa9SATJmLA8fsaNm9",
  "key11": "2jHdHdL3NxmDSvhL8F88k9VwiFDiFTgwrkz89P9zHW83keGvpNS5gN7xigqWJTL7uqSp1ko2y8Z3pNxRzCAATyaJ",
  "key12": "4A6PAxNE6J1zRpwFrr8gtne72hbRMWekuHa1CQK1HsVqiDhXfBqrKEDUnCzkn7zz6Gf3broCeWKVyqTiMawpHJMA",
  "key13": "3eqgfKETrRYDw9MDcy57wNVHd1cYfnTudGPhY31ari2p9DozL4hv5LX1RCpeyoFPAeC4XgV4h5QYWx1HGPKNdVs6",
  "key14": "CL5qFqz1EnJzuQ8C7JUDWo7Ze7eWnX6w6eREp2F441DpMBvtVAQqb1pwNhux1MPwQEAdkquBfptKh2dLcvae673",
  "key15": "3SgTAB4NnqKFTap1pMXmf5AFSQpRbxW78j8hPK2URRvVxWcpVDWTqVJHM1uisoHpgJ3p9fchPqWfSedk3aXfEz9o",
  "key16": "2JuejopoquqTHGEx4G2LZ6K3JkReKLybvF7aqhJv4peeL6W5NAbrrqiz5tBChMEYfRnJSprjSZNpUsnUwUDNZ2QK",
  "key17": "3eNNPgsYPZ1dNx529U1NzH1eKZxFWtBPAb1PJ48gJz9Dspkg2TEg3kTVYkJvqK1dMKKSqdgrGRja5p63tMLH5vJf",
  "key18": "44otUopXTuEF6YQkJfJJCZ8NnCvVtiENtmK5yBmZCqNnV8WRSpuKZ38w8AZKx2BFCCUHHt6sQZYcTSbNxZNsK3K3",
  "key19": "3Y4GDZNdC5jcQdDUVMXoqy9qcvCPx9Qj4jLJxMvWFpd18v5bhBuFRXCafeZLx2pWewLpwZmahUX7AcHY5EiRw96w",
  "key20": "3w9BYMPHKxZ3wEr81bY749SZbqNU6zMQcA2Cp6sL6bo62rE4U9WFCioKfxQnvY3wNtATEjz2Lzbbic5L2d5p2Efc",
  "key21": "5PkF8EiEqYDJftyRYFJqhZArkxNgXw52R7ooYL7nYvCRF2qRqWepEJJWX2NgpwzbPLsH3WjVArj9yjRLyDPZUxnu",
  "key22": "xA4cfY6GKB4dYVA1cWozTKETjduYdasHi6kYnGsBEjoLDxFoVzDiV9zgjXuJuNpQfkMrTsu2NNJgMhy89AdQe8g",
  "key23": "2Es6caZgZSkVVSeh72amjGgZXCTpLtBB7Gs3YKjDqTCwNAQfYacAKJPxiufsHp2SWUgRyNUVnXbvrrZSAiUsVqGG",
  "key24": "A6iuFR4KtvZ5wYhwGRzLZoGzp9URwnEakwMFDLoRXjwZy6skc5BTig9v5WPQwCz73pmLxqjGHE6LAvkj9fRij4H",
  "key25": "3WyvutGamTZ81xQ9qoikYXRs2ZysfgTopyVsPCncFnwqTn7DyhDnKqLBd9WFwU7eweHdi5h4NDZDCPDfSnmGx2PQ",
  "key26": "5JjScim31TbY6nDcDwtcLas3rjy3x6kFugs3FuoiR91vxjzV6du663uJiPXRaex4iMvezf37vKZoxbCpcvYWBZPY",
  "key27": "8uKTrYsYYATTKh4Hi3mcYZ3BbGWrnAJ1Tc6DkcaG7WM9jatiYSSvJaGUthrk7bVS89dL934sVZPCi98w8agSxuV",
  "key28": "39yyPuawWTN4q9YbHk3eaKSuee6cdVcTWDC79PWNcvF59vYQ7uq3HZN7amYDW5jyzKYCQNEkHgS2HVKFUjbvmfjQ",
  "key29": "4T1uT3eybLBSdJ7G6Qd2Do12rK4T9fCpu6GugDvAQeReS1adxAP2XvdNeFZjevwi7eKC3WsFReq5Endp8wmFVF5a",
  "key30": "quNDastiCPBGLRFxJV3nfFor5TPqnb2pvMRa1aRC9PcvntAgC56dsUTrUa2ecTqabfNeerXbLGGCkrb4TDx25aS",
  "key31": "5JTwwt9Vv7YGsLWY8nVgdB3xiHVcKqB1TK6eRTHrA7CxtrLvuLmnVPg3ouFmsktQm4GLfJAH1XTwcfPEJ6oc5kPq",
  "key32": "2SL8pLzdJMhmTb6S9bVARD7DR9Zf8o6ciRoYnWeprHriN7r38Yhg2BzgYRzhMKMEqtb3UoNdLgUcgbmbVtqTtx1b",
  "key33": "5TuWxX9LV5NNX1GyAKKpi2Tipia7KYofPXCbb8MGkPmJS4kG58iuXjXr3n63Fymmt3LjwpiMzjizqbw87vHNnJ5u",
  "key34": "bPCWAYEbmTiKmyDYc45FzRCG5LXEpp2zLDUhV5CjvvewReP9HL1wSy7G8fR4GntEqjaBZbsh6np9Msg15b1V3pk",
  "key35": "2PyUQZwtUNVJkzRQcQMQhLWy5Z1L9NbZBX6qwPAnaqYasJdc3D4pinLWKna98ZaBUxB39KFm541Lx2HmTjNC37PB",
  "key36": "5pHHkE8Ro2ghNmk6fXxFqX9t8gcXLsCnoiQ1TVwKong28ENDdTNxKxxgwkWyLSLeQX3y1gd6Roa8w7FVgmyYfnKj",
  "key37": "K8xXxbbvWFXkK9EKfg5yqMmzERhGh78beaMvPeF7YXoDjX4XAFVhRPGWQYCJUkTYSCGesS4AC3Q5nYpEjc18cWF",
  "key38": "3oAXK33rdLWDjfDqreTrAn934fP4jW4wSQHcxzi1ReVVM6pnR64D23rYQt4DZCckkSjbpK4wxE1BLNqgxXaCTZ4d",
  "key39": "8P7RBjyzQZieBcpQpnqmQXw6SvG3Dov3C734dAZaR9wMjeKw4zwmbFSqykWeR6vUWgWSwhwaLPsgtRbi3W5N5Rc",
  "key40": "2n3pd46EfsHTyTdRQNu17GgSt4WRCg3jNwGBRN1zGy8inF7rcTY4kefjQfUZTqtVGd1uNhoegPtER5YZmzLTLjFG",
  "key41": "4S3WuMCYR2SqLV6rrBfPFzo7EckRGJoKL3yu9u3iHVpYEa48PCW7YTAwPZuepUPRchrNhiFEhae9wKsyaxK9bL8m",
  "key42": "3jPFdhJooqVHhAidkkuq4XkwxXinApv5Z4p3sSfhvYFLLdmoLqBH3d96GEb9pjv4KPvFU3ko45bA3XSHm8GRvcgP",
  "key43": "5NAntNQH1HCHx5aMYMERosCqtgtuE3gaSfWQFRiJKq7vgw7oar8kPQzRjvVmfj2DGd5idVKhQYv2FDpMLHs6dPK7"
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
