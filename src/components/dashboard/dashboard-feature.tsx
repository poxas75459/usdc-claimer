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
    "2vJoAdEs4DpuJvggjg7AagsY62NRexV7WFsD88dtP46jjDeUDrL8EdjhrozZznuknX8JAuuLA4pknrywSoD8PC1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ViYS1rYp4jE3wXr6ibHYtqVkqDgYHcH3wPAeocyqzYmLGLy9Rz3vyowcUYUhTeiwhRDiih16wLUFmcCnFza12o",
  "key1": "2mRxx8STnVucfaZfKpPUgq95fJUntJ1xfA8qoxNNtgwMmjwfYKN824hRWo1SKtfmfwqDPNT1PP5JjpHrqGvEvJXE",
  "key2": "5GENv5FiG83cQHiuSoiFeVXoHzcWyrB7UzNNAd3ZvKx63RKgBUeijE8aBZs7c6VpitUViaixqRK4vQp3NJ2E5o6V",
  "key3": "hvUd67m1h1EvpnuwaDKaCFTdBk5M6uJiys3zsPFd5NZX2mATMrgaJ8mVX5bpGB83t2dfNbckve8N9dwVAuUtP9B",
  "key4": "42SogqhvhupDBJMUueqNJbdHAJGiMuM26VZLeLTMnvPWgwmJaLYFKqDWhfoq8KGY878sXL21LvETSvzJAMjrTWKE",
  "key5": "2m6LwULxJ3FFiLr4jvutfqZk8JtFkYSGsGEqpWzr4EAnvMGVZKgDGfbxMxPNNCCXVLvQUJHtm9UnW4YLbbujVzsL",
  "key6": "4MLyfoJnHA5tHHdNJLYYeC2gpDmckX78uHz23GNXhtc5Gw3jF6gPvsj8BGzDMFsMzBw3tzyYeREQbUFsKGMfrFik",
  "key7": "4HGPb2Ubk7zArzgL5avDn2CmqBX25bUWowggQkYg58G1LhahbAnqKsW6s7hL2qtUWCbc8boeUBKCC4bfWK2PdBs7",
  "key8": "36pj6fwozLWtLZ3ZcHr3GCmcKt5Gb3cHHerQxAYiVeZNzboDynssZwZGRpvyW5rpYkeHcMffxmk2ouD6x8cWywbv",
  "key9": "2zLQcbqD7buJG1MyRSekUUBUryfNJkGHBWhu49R2djqVrU2gvo9EcNJRL2QHyCeyTX7HW4rWbpsWRKsN1UXYeUsU",
  "key10": "5BZMMfZfXAUn6vUKhw9k3sQtuo95DU7zCHCo4LvFfm1BH8HHz1BR8UtWNvd9qwbthQHTazVGjap9FxXP6xJ1Vf2o",
  "key11": "uxsXCXfnrTCavnWGofQUsC9ktgzjXBjg4Nyt42QPsW3pJKVmSfKLzrpdkyVPTwiEXqmMKmBH3dWihpzjcnG85Ud",
  "key12": "5DYRJEbEpgqmrmanUgdaQU6qnxcwy11pqsRSUpdsufmwNCiEy5w69Dy86qSwjWJxWakyXfE8MsyxhvS2AWJfAHqv",
  "key13": "2ysNxiqk3xpF4jEb1rCjfhoBDRgeCMHnAMGmNjxJSBiBg9V1YieqHrZ5cS13vUpoHtCLoVdabPW2HU5R27mzWV4Q",
  "key14": "2fPGfxYcNrkY4vRHqAzZGQh1J8vuw6prB8StwZrS6oEPGiy2havYLWGeNfSNAHB8MZJEE7z5WrCbmJec1gChm3Um",
  "key15": "FB84zjSFaCkekmo6fuDd8BbL9k4tkSumevrJTs9aZYgssNyA4CKFDu9eGAYdJP2cYXQaEovCh39fZp5TGD65NPu",
  "key16": "VUoQ1KFYSnBp1V8nFhtfRpFvKXxxmRpxMWC5aTjSv9Sc3YdZAV3cQ2UfwuWqMW67uXfZguDfBYYrFcrfVDJerf9",
  "key17": "5zeXKXfMeshTMrPuqqTF54zFebKnBaqM4KU1eSAva8d9UAdjAnYUMEvddfy9HsVmJdT6c9Yn59721uTKhCM1vc84",
  "key18": "65LnF1jkmARXeizQ6PZJBPwQMD5Mjn6ViK1tRPQ55jU23Wz1TM3mmJ1tHdx1581MkiZPP19b4HgjjTY2oQxaHNnE",
  "key19": "2dgNjU3JTZTzXbv3ebtQ16NDZLQPSWdkWBwJc5QDZEXib8UZVzd4MZwtYNBNdyUq2beAehh9DLEMQhjzsiowi4ps",
  "key20": "4EWDECvBKjT8uxZrSmTcthFUxuyTmtT3ffrvYkNQ3JgTvGquinJDprSmzHdJqhHoS5mN4wpmDC95WpV3A3fnzUY3",
  "key21": "5rezMLb4dymarNFNX76fLGzuhYXfReu1Q2E96PDcMHHKHErUsEQkC1fvDQuBWedXGWRcTkxfwMCiqWFGWPgjNmZh",
  "key22": "2k8JruYkCGbDHHxoBKCPNNS3GdAMw9ttpUVdbN5Tc482fbEd8xuEtg32G6GsyzHpoYcKFKvw5VfBDtsNe4xArCCW",
  "key23": "2ynpCnanrt4muJhMeTSgfX7Rw3Ypjiv6qshMeuqd42BJE5P2QA8eNibWzXGyx8GW56ic87x3qnqG4QAiu2y5qQwJ",
  "key24": "5AHbDVBTfDyhe7pomY3bxHNnbbjyTvcdCUpsDvcwQRbf71bh1FpSBGqCmarAJRF6N3Sx6gFLDiM7Bavhsqf1znUp",
  "key25": "64qSbyeW9n6ru2VxX73CPthfuwaRptngDo2H6oHwBFkSYfVivyHGnrwCtx9jg6vBoSifqjHbTpLQjLZKMLtPGgjV",
  "key26": "2N7FYn6vrKcx9jaCnrw1n3HgnP2J152UHbncwQA7H8qADduNB4Q1mjoCW2RdhKsxwQgLZfK2HuX97JmNFtyx3qoz",
  "key27": "2HCZrnHaWQsFR5xLJcM7ZoXvJU3A4mJWKEeZkhU3VBkzZRUriHnnuagPS661XG9KnEE3ocKwp2TitDFufejYx2vo",
  "key28": "5LC5t5rGZPkGHsowfCHRXTyKoqp6JGjkUbi55au5CUUra1ZjAr9oPnDMbnLnWPWNLFPpPT8bFQ2mFPnvKVjaooyq",
  "key29": "3s4zpmhNdbFhCVmKHcCuoXfBbuaBx5C4rWAmGUJWg9F4yyy75SUSkvFWTQpLBER1uALpHjBpVWptSGTJT7bH8KTS",
  "key30": "5RWydYLTuNQ7RLhC7HmDt4xqRxVBZV3o1xsS4tD1CVLccdZc3uvy3uLrRfT1Bbh15SMTLurNL2pgn7heS3SJBpow",
  "key31": "4vZyoiwgY9yasV51HEdg3mcCombkvRrRSKxtMYUt2VVwuUimsDqiGaMswwb9jZ5hChBt1iUMLqYkzhrDMQxg6C5z",
  "key32": "3Gc5d5EzNjCJtumdjGUAHbJUQdbdtsCfFv4VGRhn8ELiuL2WdVZnKwAAYaw2ZenrnU9TE4L8vj1Sk1KNnFhPP98r",
  "key33": "5auCTXnenJAaTHYJQv5gL3KcwUiavgddWZsGwJwjV8oLeShsp5W7bJ4qFuJRf2MpBENNEUvWDsQGGpWk2WRQP2Lw",
  "key34": "2b7FoARABPcdFr5qFur3WNQ8jp4Wn61vonxcdmDcLXN3ELnm7ceQhvSy1PWqxDBmSwa7XcJHZb1qkmCL3uc9XApC",
  "key35": "4r2CySFxR7xrTB2NnUoBpLgbMq2W3yH8yLjsbnnrTqKt2Z4LY4gu37MhxbHURwVSAxrsAu6feTqaR6WPMuX9qBy7",
  "key36": "Wf76xYiiTCP78Eu3KAJbvEEpuZfA6FgYzQV93gGd1kSHJLQABgCV3mGJd9Y2wMnqDHzeBtdGrFAYbcnUeupcAPh",
  "key37": "3GZGVVo1RRHioKXRsjmdFe7bt2U7vCvRUaPSn6thpbDdiM1qfPUspZeEHQATx2P7TroCQveMqhkgJRhYyjrEGe2S",
  "key38": "5R49AoNtgtLkqDEwpgK5vvA4vpMFLQGF5nrKiqczvvGWpubkkMYqG1Ko4aLwWeSa14FgTv55AYC9StQHVkpixo85",
  "key39": "5jvBNrRC17mbVMbcBqow11JY6Yc3yWbnL3kQZyZqeHowEdjLWkWC7vXbbdHbtkJ2mdZ4S6yD9pxhtFjtYbMPP9ba",
  "key40": "2cqNwwMov15kjrguCoVpr5eTUwAgVaSpQSS8rAVpK8QFyBBHpDdsZQntyLpxnbeX8JqYgz7M9gYUC2BEEGVpPMVP"
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
