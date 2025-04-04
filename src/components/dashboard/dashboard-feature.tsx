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
    "4e6NohSPWWgKSWrv7ZuqEWL8r1S36ieG96SwkXcvcoHjtyhdK7LkFyipEQe1SNEab7yLrACi1NbV2mzp7PsWNqK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EdyuhpmAk1kkJT2SWmBxWCEYsassD4xYjkJwTURAo3XvKFp179G3ufdGprYv6GR5Xn4PFyUffQX2wfc43NeaBWM",
  "key1": "5Ge6LVnpDJC6SDXKH9kgx2cXLAjEqtWriLmqDbD8wx9mBw7vpJVfF4hunZJFExPxM2GFukRArRoiNi1C73u1Tcxd",
  "key2": "gXhUeAXxJGZeofhnGnygUoABDAs5hWg6RUn2AhrGC3JUEscPxmnvRticQy48XANdUctUMsVRMJiHwARaj86uvFT",
  "key3": "5AQaEFXB7AeoEWmmoq2Xs6ec3dCNzAUJwSbtkybMKsGfiLhAdEHSRtMqZ2nvypMPGNmbN2MPLDVpZaFsS79BgQJY",
  "key4": "4Y23PQcE8wHMtAMgeXLGmB4exrvNU4EgAUu1Z8DvfdtRm67A9EMHmUXUSXm6FXfELhAGmsgFX9jHo4p9fJfM9UEj",
  "key5": "6zqfG86V99WDYRK4qe2EKEFceSExA7cBGPqqBhnSENPi9hvcLHFdT3Q3eGqfuX43oFubyJfqPx1ZmQfVHWJy1C3",
  "key6": "5u337mZSn7ngRfhTTfbi5dSgh1CDByez1FGkWqS4B46Kd4ftQLh3hFTxsv2x2YLUHtabkqd1SwdbwUnv2Ygcrion",
  "key7": "5pjgXkthV6DGKWC7ixThQxM9zfLgxs9BDdpPtgg99qrkMoxmm3kGj1iVLyPRbcTgGkFW5nHJauNeDu3iDCbweh5b",
  "key8": "vgjLBRpkJi5XesiCZ8yaAK9wvwd8xeMjVB96TzoZqy2DFA2X6mxwwMKPqnjH5SZPzSMxYQJtTxnYD8KiUwNaC77",
  "key9": "8nh7gzktPt1Vd8GqneYkzz3q8GT4MK6sihQhsiKo3SV1Fu9fQ7Xr2ZyzZrB4j7bNtnbHAYRy7B96LGs2uzW15do",
  "key10": "Xvk5ge34Hng8nHBfHCAwtddWQPRAMurenrP6LV9XqRs1Kt17GSRRk9JeDutFaBcUrHF4BKgR6KZPyyA5CP63cxq",
  "key11": "3pUHYxzsQnwt9eyV28Tb1TTqz2T1vmDQ8ANohbdHEVssJhVJ6toPagRY7nk4dyaighH1xtFbeo75vgNtVMRnX9my",
  "key12": "3hW9Dxak5ZipRF3EtHaXdRA5GN7NoLcbtMZgLafnSsVTNs3FWGGAQeQ1uNkdxnqchkL1rrAmE9DKuwKHbrEkiwDY",
  "key13": "4pAqxYSYsJoqpj5NdLEsXd31eh5H4MMs4ur9VhwZGFEyQppmkeNUbrrBHCfHFR7jSjCrGmp8M95Nj573GEDcsoyP",
  "key14": "2Bo8RkZ6xKesrz3qnSZmjVwwotHB5BDd1sZoBSsFaBkrTNekHgRNXWpiMfxMuDRoJnGMRbxSsTR47PMdb78GbAQF",
  "key15": "2Esf5sdxZ8EVLFNwcW5fF5zB4EhkA5noJbwAbhsi4nm8WCrrvXzUH92beLHjoseapv2gRSE9BzFKc6Cow9eWy6xP",
  "key16": "Wq8N5zPCWV38sAkG3CvooATdjBivUMzfuZuTiTM8fvLjvY1kZ1jzf9CGMQQrzbezSsiDaTq8aTTjZkWXrD9JfGj",
  "key17": "5xB1dsTtDv26tWSBMkk6HDZf8w9nD4v6KESfsYB3svPJfHschsKNz4uJssPzjQ69SHf4yBnBrLJkpr3sdMZbqnoS",
  "key18": "4JUp8FNeenb9Mrm2agUMAiEUdeo5rYxWczg4HHXgWeqmgQtRtNAyGPDYbQ9JyvjwRuVoyU6yf41Sdqnq7ACyFrQb",
  "key19": "3vBCV2FrkFdftsQdeK7FtzxdhHdWhL9WBrLPHk6J2SuEVkNMo47hBFbiLtV8vSdMN3miEpQhYPWZXM1yZ2NdYqGF",
  "key20": "2SKG3mLgNJZxmC9jXDrMGbWmcGYKoYFEwBwzPqdEFRqrA4YQXSQU9vmfCdMqNVfRiyzPw81nmtLEbmp9suoGjp9F",
  "key21": "5Za2NYM35DjEUNdB9b7c2kGCJcBDGNPedSwpcz2K5ZwxTtY3UiuMDDu1WrA8xd9hHEYj6iJUseenVhqJhvtJey3H",
  "key22": "4bHSBaCXzEfei9DHhd56ZxsZcXzkcxARLiVREBXdtguXjn62nqDaJNjQV2zzox1NnWmPBhVSK5JKsCn4YDmV7ap1",
  "key23": "5bTQDKt5YVyQbSwJDGPoZnTTgibaromrZHrReZJbngNZWsaq77XEgxUZYJF4gDuMLf25EUcvRxxnJ3rMr8fuTmTV",
  "key24": "3TeouyK2LPk8EhXjwJxjPHzjLTaaX9BoYiQqWcnjzCmaebu3gb69TJ61ziANsDGXNvLE5DvDL1FFCZajEhSkiUd3",
  "key25": "5kPFRFW6DWbeQjgNTmRRKsmfeia8eksVogSsjAFbZvT1eB3Bs2aHdsSJvKMJsLakMSC2ZbvCGhtBHhYRnyJcPuy1",
  "key26": "4qef5Rzkh28mWt93hvDjnk5oXf67rRzQv3fX9z9X4hT1eZpmGEYPn4QXUy5ZUNS7ZjycVesijCa2SVii49wcELJh",
  "key27": "5qDyvXRo9s861239RuSbkaHwtN9LniqmqLssAD3LBDXBpx1HJuJSPsP4hzxiN9jCCM8Zqf5W5qzCTrpTjCHqkYMa",
  "key28": "3Z5nCkKw9yATo18pqxsEVqTvWbDMDkGNd1ridikzyTtsd7sk4sjHJbLz5XQ8RKHERHk6ViRAigdQMo3d1vBftoi9",
  "key29": "dJx4NLwWkqzGCtKQL8EpJeJVU4hvjZvoiBMbZGM1sB6vRLUFaQHqWGbKhUPid69vHdMfYvh7LbpQyNKMDoG4CDS",
  "key30": "4gxdpBEGBR4ccUHeZ1tQwMbYaEyHXQ26CNrP5XCEs6X4kKc8Jn137rfnYFxFPCtrZcz3SYE68PAgQg6oM2zATB81",
  "key31": "5ekYBKRLDwRB4gQ6mt58GBL3iJfrn1PS2De9LNfkZ9J1EJ4NiTRtMFxQZ8gF1rwxjvA77y5ipqFQ8T4sVozZbPMK"
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
