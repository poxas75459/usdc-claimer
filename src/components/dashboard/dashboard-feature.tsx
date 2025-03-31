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
    "3U4ZJPAyBycW6hPqBGKgwDr2ab9N3YC1x6J8krpW82iR6ztnBZxAGDqrRdKjnbvbVfGonRT33LpfmFejFkBAUHZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BYtb9btM6PqdQxy4YXqaijB2m6ZPZWy1Q57x988Fwmr22g5vvRnG4h4Vcvd1twQ6Eqf5TeLMf6EzoEx45QPCoke",
  "key1": "4bcPvunFN6K9LwASBeNrrgbVtSTnZuBL9Y15jFPfFZBKzwrYaoR532bLmYashani7vXbBN1AHAoTtuKDswTpbHk",
  "key2": "Jsuu33n1eBmYCha1y5D8x7zeZFfkAMbpp9N5Zunxh2DUF4yfDhpFguAz3nse4WfgstSDM5bBzfddaLKpZMFu8Uy",
  "key3": "3RCYAXFV8rR3xsHXM7GSoWYEBcwVGw9P61iCzm33aNrFViJ59R9EorZDRjd8PvS76qfsZKqJogM8F3gLvc5VAnAM",
  "key4": "4PguSwRrENeeFRgHSb4bedyjvAqkAC2FAq9kLYh9rUzNr6diQsybyYBk12kgi91eBQGZPviERG94TwSJ9boVXEKU",
  "key5": "3HC6iPSAVBijdfQk5wfggLYLBEFTj49myPvkeBP8zkF7k8Uyosqx5vbeDY4ho1MDaAEohvU5ubbhCvK5KaHU4mRW",
  "key6": "3bmFh7RjsDZgL2WjykVNPmqni2FRmT6CR987AueFFDq1a67T6uVEkAJYkDMek8LibPEVrbQmz4majrx8W4VcPziH",
  "key7": "5dZVPNGkwforXVCF7m9jDrEhpLs948hCDHBsVPQ1v3i2BatNpQnAdGc6dt3K5P1VV4cqka3Kju7LNAF7PszcLsbF",
  "key8": "5DGXLWdUrjH5SSd52RigVWcAX8mcQYJJe4NM4bp2qtys7NRuabtegxGHkNYKBVQNZ41F4cdKZ6euQSAokWLPbLvf",
  "key9": "dMQTfY5wZzcygDQAFzqnrzoW9kZowHAtjNBTtefzJjcETm5rHoSmBsiQZpfjnwVAXZ6QjUTrLz3Xnx5SDGjCxYi",
  "key10": "3mfMayoba6ai9MniLdaVjrbGPckn4vj64FvhYwDw86vSd9a2ENC1jUUsLGRWXGbMiYMxZ7Qenv8C3LZBRXCs2MQy",
  "key11": "VL6hEuwtBcg5PA8YVUDwgidcXgV191yifyQhTUJ74kfEq5rpkKBiZReRtA8ATZS2YZjQtexj1zeUx1oHs36c1zm",
  "key12": "tSKXBqxJbAmGS3kQkBLRqKodBR7SpDoqFa4PEAknSZA5UAPW2FJ7bJADsAywDqCAYLg1Vik6FhzWnws12PVs2eY",
  "key13": "3PZkz9TdGskvCg73yipZYxwtgysTWe35n4Cg7bnzw3pXBw9HTQSiHHvtrsUbJmqAcVk7qUQZHpodD74ii3YXpWo2",
  "key14": "5wJY9apfCH1TzTA6cfaaXtAMSkVn9F48PAgNFHnpvW79fBtvVX85tJvgMMhUuoUYDUTUAVhL471xtjtEQNokbDu",
  "key15": "5pW1cVAcaCH1bKmhSrqqhShJR4PyCUVDNDCLrFkLbD5kBu6qUkK1WrSRuddiHUkNaQR2VQ6AqV5HTvBDxDFMFWMi",
  "key16": "3qshcvwy5dcZ9ftVjEtti85EXga9LeZae8LQZZhEM9y8RTETihgn5eVJnD3Am5NXPNbHtsKx7bL78hLf8dvJTTwj",
  "key17": "aeLcWGP1RCeGombS7tne7wDHxBjfx1v4C6Cd9ZEwHbZfk5RqTNp9UzzWuUgMfob9LE2f4PMbcAX5GhBGRvrsuL3",
  "key18": "47oVSvPnCTY3K1h7BSXbnABqASvXEphU6tuZusjkoTg1pNTLobpzBM1yAUvzksPWhNkvVEuHh3a6Aax3hqwG35z6",
  "key19": "2YafhRcpy7L1Dk7RmFKtSivXyBxannQxnh2ajoS5BnrHyK1Pctbw9XVrD7tc7GvbM53zXVEYj2ukGX12dgwzSBGw",
  "key20": "4vUkMnvbn19WVHMS6WTP4GRW269eo1wezHaUwnNzLgZy4NXfAwoVdTpKkmL8zQJa9xNTzn7JfJLtVtcrDgbeeYJJ",
  "key21": "3AytHSacLQ2FawdxZqP6Gn19dv9VTp3fHpzeHhBG84zeN5RB5q44GnZTFwTzZz8fbcYYR9YvZxvLqmEmMD9dkg3g",
  "key22": "3K2PFA8aya81yTWUAxAR6jviJEZLYwVzTmuFPcGrAQNsGPp9ZfQWGWauXZxLYYaAfv3kAnqiJzPosKJYGwaW1ScJ",
  "key23": "5ycCoGRsSp2WoJaGm9iHcMcoz2PhuHtnyuBhhJNaH5EUxqTqmPHFCsim76Av2F1UFHvkmn7GzRiEMRyMbivaKwgc",
  "key24": "Xn2jdwhNHt8T4XwMxSSDeRtZ7r7yCYFGrUj5PvZt6nBV8dc3tTBJtgHME2MnbNybS8337wjKKcXqi3bedfNX7KL",
  "key25": "g38ybSKXzndjExgJBxFz9GqzSRmUEKF428me47j7tTY1vEsfJe4QiCRB8z5osNjuSR6UxzbJNUJ8Q7YAQaAKrkn",
  "key26": "4nnqeSXx1m7seXAuEbFKqKLW1BP9VW5ryacgTJz8VoEy65hahxXsjxwMqHasFrH9G7Z1w1eDZHYsx8PpqGECEGjX",
  "key27": "JdbqNii37TFYESLuzVMybchZG7XPKZVHdnAsV1dM74c76RHqDXmNVLmWYVninsxFCaz3Mu29c7PZvLtJVufeGHN",
  "key28": "3YbDfbLdGrFoFV6ZiZXJo56YBpuhdVA8t2vpbSoKj5CcJ9Lm9bT2D5A5XoYbr3ECv2vYyqTSbM6euCn6TiBNDSeG",
  "key29": "ExdVt4g86uqMdHUd6535EWETApoG5bkSL2iMETFVoVGc1PBDTkAAiD2Rs7RrKppahwmNr3Lg7X2tnxKLBbEY7eW",
  "key30": "4Z7mRwgHAKSQfeoH91m31NiTHiTEKqq44VxFBX4UeDrzBy3Y5nnRDosiwyvTu6Fi3DhL7VPXxtZK6zqrCZVnmGnr",
  "key31": "iQUXQa9hQehENsc9X7bkC6LgtJqXSEQfCY5HELbpReK1vzrLKJvWnkwdVzvSZqmyQLP9QVZEwqJ4hMuauzZ63RU",
  "key32": "2KGMVcj6UTGKTaamSuEc6RkCZXTf8WFrJ2NztFstM3ebN6wNz4F6PJoqyAWBYeX12YbHo3q3ecwDH9GUJHpCmw5E",
  "key33": "4QkiACp9n8di7etxwSHCxMnSd3td6GMTT2riHqQL3UvfFyXNiNWqyk5cA3FaPPLiCQ3FdfjPqwRPWjsNR65S69GG",
  "key34": "4aujoDUszRvMcntH4jbfbsdMehED2wwdZY2cJF71oPdu7xe9Sooao4EnnLWiQDboSpSLNpGwNzaUys6Kd8bizbyy",
  "key35": "mNDTj3oemxarmiPesoV8FP7BreWmJuVHXCfkcfPg2YegTpfSXgF4NuGeGmjV1uz64eH4KmoXWwbdehKpAf4JZjj",
  "key36": "5BpLBupCourhc6QvL7P5vLa3xLZc1Hgg59UMUEVqcjx6ks2oAdKH76GdBxtCpjG8wLEwSEEsY3uvtoarNAAtDqm2",
  "key37": "3Z2WcoCwEvzUHH8aZ7dmE4yie1Kw6oBEHZ8tbWTZVSWHBC9qAuqugBnyQYbDAekaLLNDP1Zqu6r3AT2ydo1ZstWj",
  "key38": "R2RbXK6DY1BKDkz9n9KQTaoPWBfDDo7dqKigLswUCPQvFbqFSLKEtzziP3xoSZiJLJ2Dbpt6HSordSN5JcDF9QQ",
  "key39": "4teUPAp4vwQZPo7poTPw7ZcQtawuB2gqsUiP2J688kyhX1kQrCxqD7sBNzaE999VYxZgJk3Bb8dCNM3ehvCReQFZ"
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
