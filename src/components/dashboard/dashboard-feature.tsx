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
    "rx1Tinvy1R5ANbYSmnzV6Ye67pdaDa87SXRzh94V2yrqF2XVdgPqcaNu4xdTJUz3zKLFEtPYitBVSW1dVoTRiQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58gake1HgCGv6gxVEag6ry8ETVDLP5kpqcELiX9PF2ypB9X27AJLtfjy4i3uqdveodbvBdpRoqj6QSMJvkNW9sge",
  "key1": "4SSqjMXpSRTzC7aPx4Pqcy6SW7W9Be8MR1NfqfvVypmuSd6K83mV6ci9UkJm9QdhK7s4Ws1f3XaQtUeCrWTShNtt",
  "key2": "5WhbKxKR9CWxLLLKLsdHmdSPQ6p7EFPbGQNUCbX73o6Nayd84ygAGc8vbHw2SY55zej3vjbs5oFUPFLhzTfcsbHc",
  "key3": "3UWkqwKUGVFWguhTLxnYWzJeRrinxFfEfhPjnaEz9xdzqwxkALYkyRCtfckPCFCf1sroxCtPKG8PJUM5WF8apXDG",
  "key4": "ky9nEPD9phv1RTpRStMccoWiEi6ShX4tLAXh1PFFVvkbGWvj7CpgS8Q284LMhXshpYD4fFNsbSfZY6Ra1d1LQGv",
  "key5": "83muoQk4vJ2JiVKggUgqkL6r7dHxVmU1SbKH2neNDKfxDZRzUAExJMCU2KqNwJ7AdfBiYtajVkPNnjLPukhcPvM",
  "key6": "2hgkYZPe4nNJSy47ibu1JH827hUGLJxivi2HxZzPmit4vqiaMkgGm5iMH77tnTvmk9X9pSZESpjCJecSUWk39xaP",
  "key7": "BR9UbEBFAUqjkMhn2Fs6WTqavj68GG3YQcvPHxiZVXKXRwpcSh7jowcKew48QQgmdxbB7FNt92nJCntdCpnfKB1",
  "key8": "5CPprwHhr9K6DZtmpt4qMvAoqBcTGSceUpxr7qPM2rHVwV9o2UX95xbV3SswEESYzBwFvbUzT58MBcTUWg9FLNAS",
  "key9": "3pwLDogAxxA3uuSwK6yY9cNrGbdL7aK9deciKeRourJqsZt2rgMXJmyZDWaee1QzKqHUxab4bqQRthwAiL7riLWB",
  "key10": "nnBWGCvU5boJ3RJSQmL5PAohY5os783WdRncabDk9hNuXraPqjhUupB4RYHMAsLfEMD5E2Gg81eZng7kmrbRHSk",
  "key11": "4cRTyPqDyxScD4rGBo2uD3STmVZPcAyNsLMs6stBbVHo5vwmUFAHFGj9mcfbCsC1CBfAmfcfLBNQLVXgtc4HuNsF",
  "key12": "4XREifboEE8ubhGNzkjyLAH627dTaQHRX2ci6tu1SQrMqzSi9RE2cDAqnRQJBA36nGexaKNTGCm36HiWTpVNPtXj",
  "key13": "4oyM9MJZEC1Ff3NxxErEhq1sMG7iVGyYiG2zffGEKZTsP1Spb2PNiztFVEs1Sj9mGMunMDbxvDqrVXGCsV38eMLX",
  "key14": "4pFxR6dsr7ZdeYS3ZsVaoZQtxoPY6Pj68UR8ZVoeznA7gDJ88kstZFEdbJ1SNTYASKqRakMHwXXAbMR9E4LhfDUN",
  "key15": "3VdUmjxLNuNuJ1ngLbBnmALBU65EaXmmHsMkn71y7KMis8nt9hedcNC9hrCwUicx5jofJBTF5bjUb8Kh87nEAVaa",
  "key16": "5VuLnArQpQ4XBmM6Z4xsJNZPCV6dDnubqUZs7FBYeAYjhjGWAv1F5eLu9iR8PYiPoeWF6SrWEPVrr9GXxwLEWAwf",
  "key17": "5HGHQaCP2tHUtgxsT3KHwGpmWKkCrHEZwg82m95gEA8S7Mpq8CLA7AiapR9XDH9N9JsrC4QeiGYFLLqQV3gPa6uo",
  "key18": "2Ay3L7bpVc8g9da1WxVaQaqoBrTywQrczVPXwfNZFHw1J7mQh2KFgm7eAi1qoo5HnkGCpzP7CtYg3FJ4kKKhF21h",
  "key19": "54ZJ7LqrcH2aPQyw2XDNGySVLD77Ba14nPPA4LPggWHVGJvRKJKAsoLoNbD5Xxqf28hmQK4ADx5hfKX9YDKc9KJ3",
  "key20": "3aJqCCrEpcnWFNvo9BY1QXkgcedTBaS3ab7EG9YbwFtM6sZonqQ2HXKsBcJ6S2mGgANUW9T9SV2KaKw1XVoHXKTo",
  "key21": "3tcho1H86JbmpLrSxzQ4XYoYooU4oGHPsKp8CeykX1bXobJwoRBsGfm8td59UH2vsPyMjtcFUcRzqFRLxmz5DGPH",
  "key22": "o2NX2dsM7SKt6Fd5E4rVut3NJtE6YKd2xadDxxUrnqBsgqhv9yjAnhrYxrFxUaBcqTV5xnu613TqfNYu3oW5e3Z",
  "key23": "24Md3sCUruC4xTHobHWdwTRBV5PPzVRPFYiydLd3v5fk4Bj5Ggumi4NwKAH6mDWcyQb5cEA16DiWJL2z1pTCRi47",
  "key24": "4audBu2Pd1q1zRzfUSBYt69vGFjz2nFZ7y9j66xDSFbYU3GPoQ1FQh8nBxbZEKFxgt19ud2YEfQBDe7fmqCVuBJ2",
  "key25": "HqRU7pLporAyHXZ3KXaL4gb5jcixcovRSzDqAac6Fvja2YEGQAQ9YNjiSVfjY6SkXacaZfhab3Ni4MaBXy1E5iD",
  "key26": "23ruof6TJNrvQAUxLn51w5FXwnoRF9R39wzf97DJx1YoQKq5duhFFz56nmq9XVXL57ZvU9661mJNPT2Bd6hohptm",
  "key27": "4jgPbFjBz6f79FyxGRfszNXaGpKT2bDJH8CFhhEkd2rKBwWrH9GhWHpwiNw3tQFtBGYFGvGFdaz4biMC57c9s2Ty",
  "key28": "5LTjR7z1xzaG5KQPFfdE7SZUDqhgdyqsMk8dnrUyd5gbDHXjtGCdAhw158xFX2pY4cFJVH54HBK7i8udgEy4zoYz",
  "key29": "4MSG1t6MHAULbwnXK12sHLfBqFRRxYSkxYLiRg7YLo5T9bzGRB2aihHb2UxvW8Kxkp5woBAjgci41WUygdf6gaYY",
  "key30": "5L7Bz4HXtDiwdA4QWBDsUbfgvUKRtX4kY2g3jC6v9uBgQbDqCQmpLZG8HG7RaQrphbtot5yJvfifpDRCFsL2BVJR",
  "key31": "2E5shCU966Qqy429dC2AejhVS1opryC8JFxsA2LMMrNeBWxmGQXRmF2mSFrdw8SwV5g9Qcb21i6DshhSqnRDZ887",
  "key32": "675R3oycstufXymGYQWQ7s2nbMMsPv439KNKCCV4R87S1z1VLMdk6ibc8MT6MZUi81beu21sE1P1N6BNLMLDtxpD",
  "key33": "4RiDuXhBemP62BGqZBPem6mdPB14f7ybQfieQ6dfJN4UCcHNQKkQ78tiwf9TzeHYebWBaufE74ZvoSpLP76isJM1",
  "key34": "5PwWoozVdW6aiBMjXaSNvvPioxNWjZBDHHQNgHehQnCsqqkWg2cgWjiNZ3CuMAu7ftKEqgLb2Jh5SantFr9kZTvM",
  "key35": "2pp58u9m8vYoHaFzyuQFAuuWDYkeazvRFDadKirg2CahAjShXffva9eRSHd6V7TY9YxWkYZQjyQJmas1pdRd8Fok",
  "key36": "2e1yT7N7ZjM5AhSfnrjZPA3n39i5hCpCCLuXHyZ8JW6wh5o9hWzxBki69ibWzNCT25WBVLUsLShQN2FWLuuXxFnf",
  "key37": "5kxYQVW4wsN7hbkFWV5KVmQpg1VGLQviXVeVSRFXc89cdr9weLMpFviL1WSuFW1aFWukcJ9cUGVCvZmQk1do3mRi",
  "key38": "5fPMzctfRvAVrjrCC4r2t7ttihnnTMVxjWZRfjiuMzoNmmXgXoDjm2uv5B4wLNhTSAjqNHc98yKP3q46Cwxt4Ty3",
  "key39": "3DZdsX9DTdKWDkXnT4AcrywBxoyLx2EvGxUEdzbFMi1YfGi2JH5JQQU76sLstZw9wwcbzpggGsN7XrS1gnn2Vuvd",
  "key40": "BYFedAYeSUq3GanHWaPx2Vy8yyNdWT1Pnecy5uQW9DLSJ27EXecxnCYWZv7oqKQXVZ4uWPDNUeQGoPx6YcAc9Cb",
  "key41": "47Dk1djcPDKJ8aVUaahrLGpKqkufrkvWNwPzGvt4ioGWd39DhLsJvjE45Avr4bGs2yZXwbAq9CjGThmVDA8ANsAa",
  "key42": "2ipf98ZFHNgQCdQkuzFKEXzf8tXJwMSFPTQZazjD5btsAfJg7vMVAERh3HaXtYnpU6WhuRj8wCbSdnU9uEd2DYQM",
  "key43": "3yTGJxD82qcsMcsVaP8ydCBx7UJ99pgYFMCvHMEbEBzapXVtWE6iLfHMezs9RbyJ3bbgfamVbsqtU8uL1js6h4YY",
  "key44": "44PCjfEKyp5YvGvMcuNCWsDw9egEDU6iN9E833EgUhpM7qwBPp9arzLtEzsHdrqKzA778UiQB2FMu2AQN8o8h23H",
  "key45": "4kXQGWMe1M3jvptVKpMXkccNB9DrMVAvYvRDMqpjabr7WarcLyMw2qToUSYYQeCaTy48PN1RXjcfHdEoDKFqAUt9",
  "key46": "2Tou7Anb6Y2FrN2QjJjW1FgpcVcXnZhcDjMWr7TfFnoGWohUS4imV9MkMGGkYhM2PLKmGuwQtBvjiZm1yHQB5LgW"
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
