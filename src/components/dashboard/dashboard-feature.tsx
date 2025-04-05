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
    "21tGAofkeNTvsLvjiSntkkhPiSU8HBXdwtvyhkiJNS7pCMcuLoWEAXpP5o8jXG8C7hX8TLNW5zggLw9LjHgGTd7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jcxWTsTdj2Q1ZpuKVFcF3MMd8gx9AL9ET2MaYT4Qswtm9k7rUv9hFoCuuPo6tL6pDsjuuj8anEhnAX4JDWnb92D",
  "key1": "5QYXLMSo3o6wZaMkRiZd6vQbKuCHtAHin7ttqiFkbYF2BoH8PpqgYMdvabVwRwWXcE8cNDQsrM1U3x9MxtzXGo6x",
  "key2": "43YHEu3GeJSxfE5saRangXikNBicnmuYuFX9H6RkzLCb7wEgu9EzszgrNxosGWK56Q1pnKJq6SPt66HQ5NhsUAwq",
  "key3": "58WfnpQEJMDYKtqv4CoT7on2paXT374nUzys42SoyyRkNd7F34L9NPihHRmTrjjuLL4mDobFBBTPdSryB4BgJS5V",
  "key4": "2WVGVjKLEAkscLM2e2QEGmbmdAjUXMRwphXN3CihN8gXdvkiUcAPB22bh1HVZAftQQkTiDrXabDJVPfZB1UffCdH",
  "key5": "4NTCDQNvRJurNt2PUPKYrd85Byyaopz6d4igEMRGVjEBKcGEgSewrJBdpGRys3vpec84HKSbNbJnTPJyDtuQW8KG",
  "key6": "Vtxd3PTfZhG1bmfmDHKimNbsmfcMG9NExqBAvSSZaYJxx2sEhAW63HbJg4JEXxm8e6z5h11aeEmQPH6ME7k9evh",
  "key7": "3DyBecBQbvG1Uy2WwguwjveyUhmgHFUTeKCbvrJAncMimXBFq4UajZ7aVgs2ncPt1vNNg9a7Ynn4ate95oLWrS4M",
  "key8": "5yA1WHLyfjY4t8kNwz68H1LHReaBzNnx7KvvVTTqhWgSp8FZ2GyULGAHN2nP4sxKcuiZ6fFx5nFeFPuV7tmDo4x3",
  "key9": "2eb5McAsZWb8as1rxKNAaqpa6RAhemMQL7BfLMDwENcnnwJEe7Ri6wMAAsw2ZYomPoqfQf12b8uUUTc91oVefkAz",
  "key10": "4sVuwZZgorGMjPkho8Wty5E3gxqTcmoTsWhgxDczxnNY8mffRFbxAnpig6CD2khAQQanghXV3Cs6kvqZqZNtJVqQ",
  "key11": "5149h6E43dGGJr3TkpWcQ83TRgD9i8nFHge9chb931ziLLEEqVeQWqseJyaxnRdhLSZZP41SxZVhF47eLLfZZFDK",
  "key12": "4qNvy5dVVttPUuHQ37ssUr6wsvxWVJxSVjD4QmcMxyeq2HZXngpTg5c5oHAwqwtu2fdWSLnReUqp2yhaQVd82aEX",
  "key13": "6hNtyw5fhLqw94ZqFZRF1xYf1mSmbB6N7okx3v6o4j4qmHvSkb82tNp6vVtcRGMANMrZsnCXYysYTRJcLJy3Ek1",
  "key14": "39WhRRKyqGTEw3AnVLHe6GcwjgXpQ6vLDKmVKq2EFCuyfs9TnhMhVj5FufXHr81SwTL74mFj96R2zY33j5GdRmqC",
  "key15": "3nU11n7AqWxdaQMQ1MUs62cptXedLHCbYYetsBWWnMoXuF5i8FxwJPJCcC7vKEvJnLoFEGKkNRXrcJNHVZqrxXg9",
  "key16": "ggHrhYS3tHWHEaEcbEQazathfcnm98cUU1BCVJMKgsaMBB5sLjDB5pw65R4WpsyjLQ9Uv8j5j2dPEVtvE5HwnDo",
  "key17": "52CTSh4r7EELBCadNfwxAf1SiUHWk2izvSQTzBoJAR1Y23AverF7LiDhPmR6kVEdssvJXgJKxtPQuXixgY12yuTb",
  "key18": "5vKJwicUD7U8SaiFVj1zjHiC3ZUeARcaycqbx9qMvaDJYHLbbFccvtskVLTG7WEwC9D3XWuMCT85Leb93ag9Uyu5",
  "key19": "62SwbrGsb6BtgvWKqhNf8v4JY4Hsh4SnmQDuKB7zHRMm7EtigSYtQmVwxTeRNWqj3Uy2z14ZgCcwdRpQRjCLN3Y4",
  "key20": "SK5xYLRRNxCNF9SwvDXxmGf2myg5QJW2ZWjHCYG5LKjvp7gu3dZj2LKuhX1Qm92u34VWTdqGVnRN85Bjx2cMHPL",
  "key21": "294DwZGg17AGYKVpvTKLKHkmyaxZ16CL6BTbhZtkfiDxHm2KFvkcWWMLnGFZukb7VBzEFtK4cgiKNwTwEH5NL7sU",
  "key22": "2mpTy6vcwHpK7dPrh8BxYKqmkeWaSr4mq4dQPd6hbebyQ3SRByxkKvQNT5shhGv73d2KkhBprSF3McMYktvUGJsY",
  "key23": "5qhzrTQECzAYLe9Jd21Fza2kDMYUy3HuMvZw2mx4a1Ut9P8g9GS9pAZMYpjfutG1ssb8gnskDuVtqgB272E2gaGi",
  "key24": "tZyLz6AcyXE2Cm7oUkmZ6jr8yyVhPKphT82m1ACJQDr2HFG6gARgYBa492De6kCsaJvFqPsPSjgEKXwUSveCJDf",
  "key25": "3qqSMgPeqGjFrvHXjk5SBmvzXeBN7ekuFcXN19e51U1Z5TuvTTAkDZwdSE9ugU4NF1YLfVwW68yAVGvNA6z6R4Lt",
  "key26": "5hy5vV73GgWqaPY5JR52TY1KxeHL3zxmUPengAw7kpHyn8owYPFwqpYuKruKLW5QB2RR6puZTRC6XzAoTZoDfTKF",
  "key27": "PpoQHy5zTAjvWws1tBUSm1683uT4p34UiMR4Zkw7NAXTocQdUkxCvNKJCVDzhT4cCemdZJC4ez191RF7i7x7i7E",
  "key28": "46CjToFno1G23jTi7gUZWLzHVowGADxZQFwfjw8EJbEgRL7CibYW3kaj6Lar7pmz7GjK9ixfkviRzMabgsc6UA6f",
  "key29": "MANBnZqGEgnACdSXMUqHjYiWL6UZjCwUHBXjveeTVr8D6AJKv6wZpgYoLdW2YpZi9bvojCtNxK8C9h2utV3L9c7",
  "key30": "27Sz5oVcAAdep46G6ckgCDACTqFhAgxM244iS9uhP3AwxLrrJEvtf294D9bxm2v9QKyfkcKYQuwT5ydGhLBUa38E",
  "key31": "4TyCfei5trWqk9vA9AmxrRkM25KrF242XkfFXgpvDRKb6PzLvgUMFDg2nSQ9kBUhbuKRn7MDR6QEFLPRv6xf1KNg",
  "key32": "3bWWEa3ak6LxbphEbQeh3jawcCoDu3JZ2Y2WRDeno3PXo82AAY8arp5dJV3iDk6fCgqRcT4Qu3kbmZfwHqAQJ9Cn",
  "key33": "4GtPFANdzpma6eAaEap24n824TcuXE1UBoFcYcw9nZCC7PNFwn6MbYLXnDQoktoWeK2ErP8VBMWQF4xFzC7xoagQ",
  "key34": "5rD5Sk3y8LDzuSHTjY4P2LobgC1SX46bFDa6VcdA7cLYAMTJEMsF12JjB5aLuAfgWyhKgkLsfsE1wSRFMYVB2EKm",
  "key35": "5TH1J5dSynDaToNEAxH9SWTrfSx4jjJfTxTtbjixEYsp2hUiAcHwQsNB2Rgd1xZzFavydbbCwy5vR8LigHWAyY7x",
  "key36": "5Bn7echiuFuX5QzDZbzUZHz5gV7GzqtDzQctWovFCSrEoTS3Wcxga8cWmivMGt2dA1BH3SpktrFUzkmZf7xJQ3za",
  "key37": "BQiudpoQVXNTFMMGyG6FvLeyEBE8RZfLRhxaZGRKhfmUbLW3pYGX2fDTtC2RQ9KTf23pU3ysAxewaN4P97Cgfgt",
  "key38": "34QpfttHusFS1moLR71x184zBhfPVfzcKnbpK4VR3iSLNEruhwsx3MSrMVp49W5KhcJSib5DLKvD4YtjyYx57dbk",
  "key39": "YkJPyu1b7qipKXyncjFYGLDVvmWrbzYMY5PmTA3nsd56zpkoH673fUMg1vXUmGe268rZAqFQ8MuVsGCH1mFqZcg"
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
