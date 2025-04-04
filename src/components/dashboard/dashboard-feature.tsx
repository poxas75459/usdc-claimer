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
    "3DKCDtxzqvTjKFLAeQZPwSHRaDj846vfzTRpZnhUhwJELgBQsYKceyGF8np65Tmj2rFP499bvsnZSbgKvRcZHEdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rAqFkDdVoazSnaLLsbS1srXSz4We9B6h3s1oJHW2KTkLwH7MgLxbo4d12uppMp56ujZx7syoFZKpZnJmwY9E4X9",
  "key1": "5VTCWLqTYHhciXRgECebmZUqTmvx1UE7CvoF3fTjYG56oHmYzSNEkEQjjQ7naYs2DFu2HR3Af5w7CPZhbbfkbqaj",
  "key2": "55iq9zKrWRmtrbMb3votou27vRYFMPjiVcToQvMi64jBYks7qVn9eJW95gFGnsRiid3nNXmksevwg4n1acxzZQW6",
  "key3": "4DXGxrAvx3ZvLdGoi483cA699T6kyRrRMbPDeaNh9pCe68PSz2tscZe656LKnM2qLRzqPQ6c9qH1vGCYnNnv3SkY",
  "key4": "2HYLepYw9oGMpPoA42752sjaXqy9ZKJq7vGnAXPNDG6FcmPk1mRj38Qyj3QA1h3LSX78RbS2wnKQPA79imWRtrr1",
  "key5": "65Q3y5TFSzxTMPvPiDcHU8GpcgAkjkkKVFYDnVVphVwieBzvF7ppYTyu7y3LczfQikQPZ7SFfPBrwBxNaZ4UqPnJ",
  "key6": "2DcxB4BbVxUdjabz5gPtUNo2fQaPvK2n6kE7oFe27wUFSc9WFbreJXrDgmy36CavAY2Y3ySG87jg6RYxWb2b52af",
  "key7": "5kvQunmkrvpcKeryEsbxuw4DcKBqTcydsUCF7ZNJT8FEAuX9TrPs538CChobJAy1UWucsPej7xLG93JKMuNabvXW",
  "key8": "u3B4dzAQj3FdZuN3PPQjQKUF7RW5vpCzxhDdDXNFQkidTT8Zek4LKaSfVfk83UTZpNkQA7ULKB8PYjnA4hX4WTk",
  "key9": "3pR8THwVdwqrS91tv2z44zwCWzbcFMg3x37idPujWPkdRynzT4iVhRzV3ztwbzpyXxSq5andpKgCAPcHWVYeRQZB",
  "key10": "24Td9SWtxwVmwbBmswVETwTBY4u7Fv2RQvchC5PUknrRME2kgiPJZDwr2ESCpxnkZiLvr7vB5wGwubSbS6bFZgr4",
  "key11": "Lj8XqS2sdcvDt4RA5uJcZRDw7WTkvi8TQ79cEaoQy5jATUt9NFZa6N177V3c6BfE18fkPw24Qvg3YADXoe5YMxt",
  "key12": "4Cd1FkHkjxAMDBiufKf6J49iSPwiGspfTySx7tFT5JiWQavSVLFAJXhSpHnkNDaU4X4kpMWLEDJmxa8mxVQ77bfB",
  "key13": "5ndu4okewPT5nvz7ocYPJgkk8opkVGEo7gSUPcBfzDMSqa6Eou1pbsFBLdtE88AsPixBqYk3vbmuuaSCXffKMdm4",
  "key14": "3t6gmDETrGj2c65an8dRjfbxjMP5bCgQ3n4PuXbtcXb42Cou1Ms9ogesutxWA9bWjKA6T1HkAwXxHaNFx1CLMb6S",
  "key15": "4KFHpZg6GGYDoJVY3M3nGFxptTaeBRs7fn8DcGeawG3RTZMQDUG8JTbPDyhN2gQDfCpaHw4XEhBnNzvsV289nYhY",
  "key16": "4VdCHdsoeLxAq4SGfRoVeyDpGzrNCa3oGYekifBg4NN9HjN7L5op8Ho62jfJRG6y23QVzdtxKx4Edt3XFrvZVJcK",
  "key17": "4iicH9kUzLhhzpqusgcMHg7PHbEbb6sCEYE1QD74YU9xJTbMo9GgV6y4cqjZk4yJuH6NdtgrKf15gpYBRhZTZPTT",
  "key18": "4dRFSrKidx3hjFkMh69PTdBPAvE8SA3a12W7hxf93tHUCBTnW8E5CkAgMXScyzZsuAEJQaTqYNbrBEYn2tUdR66V",
  "key19": "3CKbmqFJKHqzPMZFj6PoFsBun96Zf7me9Qd2LyHCnM292qvM8yitKyHpgZfVGCi6U3uP5AtFkGcHmJSnyST4ERL5",
  "key20": "56Dz3a4WMghoyV8tZJ4N4hcASV8axeWfRXvTgdPuR3HhAqPMexHmnpCD3SHm2gMNub5bdVQJKZipTHTcg5nUyA41",
  "key21": "5QWTdXBF9Zgtjb8mo7hTWmN213dZ65UVUGgdBNMrqh7frovv2PSGy9RJLBLtDTKFaT7jUfnEXbASsPmSvrXCfXh4",
  "key22": "3UgR5Sm1D3DWXJPENJ7nmrc2Ycg7Ask7axsLHxrb96pEkUXhYV9yAWXFwgjHCfMnQN99R1aF1FKxtQKsgk7Vumjy",
  "key23": "Cc6BLMqJdtgf6shkMCV4KXeTZ7YNj4jb9K6yTWk7v12HKtML1kLbF4xc4HTmgRHNMLoW6mf8fkZJg7UPiaXQkeA",
  "key24": "2FZ54wzWW9MUTmX5TdHAGEZ56jduDJr5dzDTpPF1X9XhcJYXA19iRffmiCj2v9JWdQUia2Jsw2oBN6mmvSBiWjeR",
  "key25": "4a8s8NXkWmB4EjsXvXYTqWWpFNsGND4UgBhLzta688NmmjkfxDv3RzEBFTzXzXAsZTrWX1R2GwuYtoV7bJ4UUdVp",
  "key26": "B1yttMub39oMyn5QZsdjmTigvCZucV62eRVs1C4Q2NdnfdHBeRBSpNtAqe5XFuytJjmfDZcumUmKpoz16e68RCo",
  "key27": "Rr2Qa6xUZnUr9wUriMcujqVysFQPgQRjWnHEvXp6Wexcnc6BMvYSyN96tDis4Wpa6E4h1oqy5xT4z6NTYiFHduf",
  "key28": "2vbAb2okCzDjHwEm72K5CUgpHv2cwf9TWyrQMX2HhMkDzzgcjQKr1MjcdwyNLMfnEeW6ouiKH22dyJPGG7rJAPpx",
  "key29": "5pbjPKSQGbBnTCr3rGnQG6Z1tfYTESmrEXhYiqL4bKQHNqBYhp7QWRTnHon3fpNNqYsgCdtQD852PNUCJXKB95ji",
  "key30": "rbjWu4q6y7AyGo8AisbQ6Pq85eHK7WKcPRVZbLhbamoPGHxLMKhhSugy4XKQh63AxyG4atAKSHVLaPpBF8Aw94C",
  "key31": "ZuHy4zsEqoCqPn4BZMFfXkeTrcxtTYfz9Xf5PaNddW6q1PwsqKmuQvJU5yUAYv7A6G829jBKSKdpByT7kQCjaph",
  "key32": "5ViCPDEUZuVkFUhq8MCWTgzgnpqQjn2LMmC57f3179D5t3uNaNSSwRiPWs2w7Dp6csa6LDbPpdAFvDM5KgpEK7HF",
  "key33": "5Bfs9hGLVT8E6vp6WDVKS4Czg1WQDcSbyocHQbnmEPVRMMDV8yDSDg4VerxLW1n2adLaCtgjeNJ1TBUkCGznrGm8",
  "key34": "4uNreQ8jtTVvtT3e5jc9Vv7XQQrP56Tg74FgqjkaLnaaugZGGS3cda7FkEFVPTKQEc6HbcTonvjz5Si6UxEmSKUX",
  "key35": "2knksPDNRM9tcNxqTYzrXTGvNswvjQxrvjaRnwEW2NCtjhHFJoEUiVBRAEVse7QdLnUb5nKNWKJJRLNEUAWvUoby",
  "key36": "5ZTby8nxWtb9W8cJsdswogLU5xcNDVT9qitvq8NNFJFmECuXcZJTXq2U2dEfbG4YWdB5saVWoWuV5Zz3QCvjrXnN",
  "key37": "3Ti4MBCoxXHGihGQTSkhrKpjCgMFefRXjFk5rUaRBv4sVpJHXGxXfQVEAjHK2bhL9ZrLzjaT5Triv8GNj7ta5uWo",
  "key38": "372u3DqkzUMmckWfJRWnaSUYrCmRomVXDPCZqyZbiTzdMNa5w73QbqeGiG75SaGBhCuGq5Xgi16fgkLVHAaZ8vbt",
  "key39": "36CnxUB9Cf18t5tAdnd5JegCZqTzf1XcdqBTcnyi1oGsGw29ZXPHSqW892aWhcpGCFa7wqrvZ5PEbyLKiGERbyD4",
  "key40": "64FCBJzmqz939URCDtWJRicMQGTXZF5RJx5PABtyxGUPNFtjJ5zJP7gR8pqwrsDMuT1D2W4r4GGsx8oCUoLBiQmK"
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
