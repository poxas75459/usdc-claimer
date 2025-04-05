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
    "3Qoqh6P1XwijGrDeKGzkoLcsF7RzHtHGXQkTSEbUzJDk1m7aus7BRYS3sKun1oZbQN6adJqRLnQMmKk2caVrrAGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ws1nby1fSGV1rzK5D8JAHAfQ8teRW4yHpRVYDx4WXVSTA1PNhBABcJPzBra9Lqem5VWTmjx7mWEHcM4XLPmR1QQ",
  "key1": "2XGguQZse9J8APc19SDmoHc743SdgvntKDthhkQuGipudLkytyqCJZqyvCy4Fq4vhVSE3vvN4nmv8GaUXw7z1BSo",
  "key2": "51TA4LbEyoRmfwwzoJnxAzB3pJZCy3GcRGTDLFcLvtFUKnMrXNjtpoPHkkMkx4F9cCvU7YDNACH7YsB5VeK8JwGP",
  "key3": "5HADgpozyJnp8Zv4GJpKfF8br48RS5ri2orXbMcLfP12PJHewW9BykkKV7qph8SC7qFNVHPcMLqp14Fuh3fEPjqK",
  "key4": "2Qc8TYRWdpFFqcoDjHoS8gKaZ7Kp73gXAnh6CW1kmDN8UZQvBeay3A4jhaMhwreE6jCQPhT9Sws6JL5Q8zziRozL",
  "key5": "3DMVecYjBE2hMfhtucF7vwchhXN2NVCLTKfELY4YvxA1aJgt3Y87L4XMP4xmMmjhGw91dtzz6s5JmxxQwBPcPvvD",
  "key6": "3gCeg32jC8RkaXL746fsqewBc3zVwEqr6hjHbsxbsg9xJ1XnrpJjKJJ31jQQmVJ2Rc1nSxjrsD4mLTuf7xQW41N3",
  "key7": "2hzGGDEnaqC5pqN8boGtLyXsKkmbz6z43T6mxYfSHBYLYL2tPfMRJzXFrRoKBtZ2bkWsPLy2avEeZqTPVxsmcbvZ",
  "key8": "4NfkGgbSJqBixfmYw8fd2jyx8PMVyuSqiNDRdfeqMAq3e7KQVXj63iGWnTdGcjsxv8ictZEEoE3CvqV9qyUBUZeS",
  "key9": "3H6fqHxbkSkrNCBMAtvYRAjBHySmA66phSck2QFGLfENorKJz2tD748iUyNrRaqRTiKHW8fxfAuTB3zsZsnbRRuo",
  "key10": "5Yz6UteGFe1F2dcGarJVB1Qhp3obPeKgfVJrz4sv2DWyPq1wmj4iQpnmyg8sEcf39ux5Tjfy1Lg43hdxjNGpQuW4",
  "key11": "4cCNTeeCMmxiSqG2pvhaX421HGRwKTwTVjz3ZGeGrEwubBt2bshFjfTHwXS2swmmusriB8xbwCJyartWnEoywMZY",
  "key12": "3qNXjvjSf1GYjjHveTYfRnG1QPcT2gJdfk4Qnf2Xi8BcnSWso7DdnoJbMjbK3tVDqs5b9GC6t71fbzMqxtNMBQ1H",
  "key13": "31CzHgpr4v9je1hATpaJS5MVFiRhnQwBQsV6By9HdWo88bynty8ABvdkNPabjkY1ZveGtAWPgZQvEnc7mxWD1Nb3",
  "key14": "KqRU99nnc56yR355RRQ3SjAtr36wCEsVmZK1NnF71enCHN7EjAuKx2Pa4JXn8D3Gp2vkN9CQvT6XdURDrUuofjd",
  "key15": "aq6ELKros6dXWfbD926thQyK4owvDW89XfGK9SK5rJpGjWrMh1pQ8CZWwfbzsEd9cTZNtrcjrgHcaJRXpWKtbbi",
  "key16": "53eGJ7bpqEMQPLeKD7E1dpL5gFbd6AMLfzEHamrdAJvaQZtkBRvqjm6RCiVr5RJotgmjMbHaqfoihHSvyePiQ68y",
  "key17": "3mjNrVC9Wq6wAg8WsVcpcpvMWQdLtsusD5N9poJEGKWwXNfKxYWy7eqhRfUp3uTyPdtyaCcGBkTL4jyZ2B42k9SE",
  "key18": "3ceauwJwjVvZwGA9fjaB3VmW5QWTD1FcMGPXYReVswR713d8XuMs2qk93bbiT3EUcJFsvCRZAZentQY6xyeJXcaN",
  "key19": "53NMmopnznAFW2Kso946zRUJaYoG2cGAEWFw8bjoZjKxTL4RHs14L38uwt8QB62nVDBXx25bYfjMWy5HjaWFhrwM",
  "key20": "5tShc18iCVE8cfaEEGE2RCvfBzx661AvoP1oQ9hMxV3ice85XGax4mch1wFA4kkTYEgEx2JKaZ1vfddsWpq7fqPt",
  "key21": "3qNDPAYwDgNWxzwg1xanvtFGjRrNCU9zgeD8MpzJSuEPDuUS6JDjEja7ZM1dSZHoERcXLQkAFjK9ewC3qQi9hjT5",
  "key22": "2zx1XXrnNqGtWxk7WB4phxbRDrMbapavpFg2tyG5enkiLrQbH5LS6XVRRkR8wu4K5TtkrX4umwVKhtDZyge3yPkY",
  "key23": "5AdVHmbGnAi2yn2RGFpqeAcb8xY8e71AeZyez1JKTRNQWJDHPMXjLVb8U5RJB7FUgeB4vXukKLEmux3FrZZeLkvc",
  "key24": "61rEjJAjv7U59LV9DhP7do7QU1rPPuduDATzeaEqMd8HKfS1iaB23yyA5RzhFiDJrdR4fLtS5UMgEMU5QMAPpv44",
  "key25": "2GGwwmF5APR1n6CjwWmfBWFAKZSfRabFZG36a5J5zyq2ENHqdkTA28kds4XhMvhsNJR6gnFAq8gxL9neoHZmHn4c",
  "key26": "5tsPdvA4ehV6w7LvmYYLu4cwct1utvGNRG9mr2QwuXz3xJ1E88wwDSiqcuS821RH59zLLqfvzcQjhYLDzenFGJAz",
  "key27": "42TXSZjXkuew69Mni7DWKACgDNTeaAF5xbYAUBaP5yJQpxfRoCeqev59Rx8niJmjqiSgJEQYC89bpT3kouKiT2Yh",
  "key28": "4YVCntmuMShD1h4WDWmz46MnzCWMa1kwd8FwFbFkEZ4uCeZuazP1rQREMkp9QqsCsCEahovcPMmtRkkiWiPhwoEj",
  "key29": "2UuoZk7a46iZwu7NChyJHwJQsUbRFQkBYZTQhNKXVLoiw2zGNnmeMcmVerMMun7iv3dbd7UCKa6VR1sLAkk4teYM",
  "key30": "3KTzNr4LDi85RLzrpjhV2wuyozhHFcLVJgZQSuYuJesBPhkCEfnBVobcJMZhfwBF9UnAtS8aHHx78dbk5dERFSJd",
  "key31": "8KdLg1QqiUVwmgT4bvbpN2fhGmiaMATULt5JJG3RcfMLbBQuT4oK9J7k4dSv87txNLVWeLxebsTSPCn7SPZLfSi",
  "key32": "4KhUidf42Kn3dGLC5E19QWmb1gDuXLozG9tgt3W9GV515mP3L6ZwqZCxa4b6ejjSRzYtSgRRhUA9h7aDRynX8J8U",
  "key33": "3DikgFNjKudj7iGJtb52oVyRbiwFzx1yUqCHprrTRtyp71MyqndABunyBxmdWzMKdVt3zhmVtobcGc4bMvrddRQt",
  "key34": "2igJfWJrQSEWi3Wy3ZoKg2j4sv3VPVsr7xYKUJf4qtCsXjsFEufM4im6DNJD8nv4NW7eVNKH3ggiSz5QTaagcZzk",
  "key35": "PL7yejqqbc6z3HUYCS6kxvh8iZtXvEaiJTZyDtT9EfCUc1fQ2AuNWKUteqzRSEEUySTXUkEb1EwukZtewKvTMpT",
  "key36": "4neoehiP9fXoAZMNXaR9AVHHgFAHX6spFqFcpS5o8RhkgG97vYkSo7qbBjhx9cCipqy6Ljducnjb1cBoYR424jUD",
  "key37": "5m9LtRRo33qe2WVpxn4emT5Nahq4xMSrW94TgeVEiNqBkhghkBWDKRQfnwthdmeA9EeFVmXWtR1D3xqde1yjaNbh",
  "key38": "2z3XBLj1FX93zomTJ3ZYiqWcXynTJhbcdZ9aDwrwf5GBWjzX8mLNtm44Sr5qocH7aYxPPqL6mjjhDsAFMX4P72ac",
  "key39": "mQt8uPn3t4v1JDn9SwgCxzAWspxHRktTFC1TXQckMYsEhrhNjD69cLCCHkwPNs1Ad1kMoKZuuGjmYLFfSWMihsg"
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
