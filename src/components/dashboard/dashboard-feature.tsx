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
    "3zTyP8Ui3qLHYECf19hDAgdxoVjFbZmDGeDTPXZUyPPePjMH2ofL4EzhtY629uwUh79iZFYHLPCu6CpX84XbWmDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GWLHC8DvUcG3FcGXpXfZoHxgV1HymH9v2xvGevTLG5HivpFbKcWaGN2NcyCLDFm8ttynMshE1nPyhHwtV2UyLRi",
  "key1": "2uSszN8WQYF3RvEm2TC1q4bZeXEY3vgbUpE27LqrUZtFR7EghXEeLAuAYoT3JBiRX4cgHg7RU564riHu8ikBDvRJ",
  "key2": "4ubNRViX5qLTs4XQdBDw38iQJ1BAj8i3EwDTfc2qcBrR6rW5vHqd8WZxdthGdCLLKN3DnuSxJKdJGyGaHFhHjTCs",
  "key3": "2YhoNNpgtmqFuSqETiyKGuMn1yGcbBwcBJi8dgHVCTwd8eZ3hJLmxuc9g6wmrAP1YuvjsU1XqUDNpHeW6ZEJBGSu",
  "key4": "61oVqqu5NkECYWkYt6oMCb3Bn3eSQNzWEJ4t2QjunM6vA4KLTsAeD8qxJXiUkns1NbH9qWWxWfT6nuUExB1Q5VEX",
  "key5": "3Tj4GCNWQDJ98dAMoFFhwm1DU9ShQtLp7VUjDM5fDHXByjDYe6zVxN5Q4b5Wxg4ApRbiaCTrYfJCemqGKsmgqFam",
  "key6": "baTYSBcPcTqKpoA1g8tdjtdZEabfFhv5FkXqcqTSkhop4oYZ28iASHV6LtiFsoz6iBTHVSbxkqkqksQpDhCtzsc",
  "key7": "4B6d63iUQyBVnxySiB9HhEBeLH2wzTHh2m55qGzGrDfeGVTBKPD3c2qJ5Weumo3FEnrcwH7zqjLffCvEiMHRbHta",
  "key8": "3Bg3XuXjEZvefDhsW4BGQ7c9SmzxVyVNUZ98hFLkM3Ak7hhhNMCefB4YQsXH5cAjgi334HkFJ7mfuKvCDN15DUUk",
  "key9": "625nZnrYcSChjdjZYgGXiH9yhLL1gPaXjucb3SLhG4yc6FMoqnbK7BGcqdRBovfmau24KxNNfGwAEEQgPmF6Q6HK",
  "key10": "2pd3yN9UxgcAusdwZUUtDKzQok4YrtcifsKREbqptfBQEW8UCgYkFT53xAR1krFnuogTuz9ThYoLsTkR5RK2qnZr",
  "key11": "5t4NmFHEHz5L1mZdrddSSzfWmKfk92x67UVneri3jsxbxtbNLL3iqApfBYoNbUnK21zrapCBf84V8WsqfF1Ssb6",
  "key12": "4rxab6HBLYaDvQj7DnUc3k2iMam9gFXtx2LC3VgNC4HXbcfENLu3tGHWKk4i6TCCuApa5DiUnF8TTbQ1TdFbBHWJ",
  "key13": "4gX4qQtWHqu1JAZB5Qwfwo37axmDH87rsVrHLZgLSYajZ5eXSdWdm1mVK4h76oSqBnbcNrUpJpyk1Vf5GAEESFyb",
  "key14": "2dsD3bPW6dxQ3C25UuktRe1YT5ExTbtS9kWjXpkM4pWvyAf1S3jz7mhJUAeissjYjQSxfYFCK3DgHPiWHoG1dQBA",
  "key15": "2akHonPv18u4sv3QqWZnDruikCWs6eCpos8xVynwYhypypF9qJsNkPag3xZVkAADzgw9ymbN8izdCrycbrwJpXt3",
  "key16": "4rCaCFugtiC1NoQDBZkf9rr5uMZPrpUjmRuYucVs6KWbY8otwPvabCuFsrrgnchX6d8Rxes7v5AC5tegdLvcthJF",
  "key17": "4TqnXPNvY4ngaw45URDLcHxtpcFWTGgs286La3wLBPodYDrq5x5oK5FkhAvBZdQYPsdyPdCPKijFqFMx1hDyH1ar",
  "key18": "5G9jZbuGp945U4AA2b5jPKkeaev1Rq6MKYv31e6n6Fpr27crjxmAmmqNwmkc3gQwQLFTz68bWM88XbVUHkXDEkmk",
  "key19": "2rJhumpRKyDDTAMT8RhyovGRgXAYRxpHt89G4HJEw9h1SwqCJ4i9FkaT6HhxTW2n8d6WL7KBgXdTpYAUuabCy3f7",
  "key20": "5GNFnNvkcn9iTQix8TgYnxvcwxZH3V4sygJhrXSkpCj3Bd4ZhTdnR9CSpXg895x1657uFmm4T6CXriSswUwjhUpt",
  "key21": "NzwU9dinavN1tL3Tdwk3UjEqbTPsGk9qkd1tqtmjJioFreu8ag8fVHVNUbHj6hF9hRq2chiiy94ssfk4LnPoM2B",
  "key22": "5bfQkhBmn8HUzzBE4HoKMsrX1bzj65KvxBQmXcmv6HR1KzT7oKChb8Xdm7ioyZVz9iT92cGjd58wPi6UXdYbLU96",
  "key23": "4cKPfLvQL824NDCgbcTNwqQBJd3etWRe2Cb97vM12seHxV82AvPMcy6J8frw34Zj5FMRuD9yeKm7j4AJcn6ToJ8p",
  "key24": "Z4ccanwT1HTfJ9WMdpFYa98SoTVvHJBmgVaUXPEQtNbW7CqzjRTw53YrJ5hyqsszcT8ibd9hMxfHRPRwRdxYiRx",
  "key25": "8L6zWn9ddhGVxrSByvxEzzg4sgexMcp1HaCu6VcTbyHjaVdrJqRgAQaWXLKzG2csihq2bUQZPn3G9wt6Y5ksKZU",
  "key26": "FEzTdn9rosgPK2WWv7V7M2rJU5TsQPCfJfkiMHJvVjWSWUuKsDAkxQZ8mdmg84fQtR9TDswCTY1MUvCyFWCeGFz",
  "key27": "2YXHTPSnxzEHenxH2gUvYcNQKJw7AqXzrnh779EtmyYr69ptaK6GuyaEWuPJyQuHFC87QU5dmZH8y52LnVo9VjTZ",
  "key28": "4JnL2sZGriuhNyLcEkEAmU3hwK4R5Sn67nTGzmcCyc7mQwL2wUDmcLGXcqeKBMAaUwzvzLNA7YyUwzvAAJqVBMjE",
  "key29": "3mmc5A9wctBMRvpPBPHdPTRZZrhPDWP9CNdNiXYu6TdZedpCEfzB1V5w9KFVjyX1a5kN8wHxLkrbfSy9qoUxRoF6",
  "key30": "5pEwQFZvCVLugTga5SnhzduvtAhVAeo9PMwZYKsyCqPzBX1A8FBp9kWKFe6RPzQ1RqdVVQB6eVVFfQB3BbNPqjmE",
  "key31": "5h5kpDnwei8gunbcxAzDDaDHpUAvJpmBKZpJLgDUm8nH89G7gAFTjEp2mQmaeoQ5JjvV5CRZJFQZMAEPjJmWMqES",
  "key32": "5rMzhE2MxppKzBjjtrZijeLGhyiXqYUCf6CpYGuB2f3Z4kon5sziuvdER1aX4JY3NQmM6EsCLVabHZatDVv4H9Yg",
  "key33": "3aZJtvZt18o1QTmYov28sgQwiubn9LUBv9b7KydGeiFLQ2ic3Ea3cDQKC34TmV7TwUH8cwjhB5o9n6LPxj5pEko1",
  "key34": "3iaZQ6sJ1eP1NP8GX6axQnWP3k1rNHkCtWXr9FbP13Aqdjas9ujdbWuMDqKo94T2sw5qZkwHSVmK6M1D2zyJoZEp",
  "key35": "2CnzhaarakuJrTkjfenmyHng5cAb7Y43CuWLJJRfRrrQjmYxxVpyio8GMBEwLhmkCQxusEhyrPVfu8YTzV1GxeHj",
  "key36": "42t1esP1xc9PTDFziFyqFmx82nkLDBcnGiQPXDoNPvmQfw4BAK9k8mKQefXotWtgctWsPi4v1VLBuCHiTMoMNjkU",
  "key37": "Z6MmDL3dQXR69LcYvfEqkmufcdefbQAVTkrvscrPSTEEsTpq7Kj4GEh4Qag2BcfkxoA3H45X2aCKnvMeKj67ERk",
  "key38": "4BuGPu4zx8Axa8dosSNK2jZsdTy6RoDp5n8omFf6jqPyBbpLhu5woSSrbFp7wS7d9ft3JoAu1iWyakzhDnvPW3GZ",
  "key39": "3zvzejQrH2eWezfLGGdazBSZvcxC77GviG315XXYsPXVbPMruj66UjUKDSWetVmTcczCcf3LAhkByoMUpTnywe2x"
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
