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
    "3T6s5SAN7do92LpDDX57HjQr859oREDEiQEec5Q7p6nVdc2g3tyUsMtwaSjmmRkNKMFa5ZinpgdEK4FeYzadFgcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aF9fK64HzBCjQsxrEm9h9iWk53pMf1e5kV36VvH2ycGvkKmsHMjfre6pNXa84davGUueeNAMz1Cu35B2dHStPGd",
  "key1": "3LYW4APxykc3aBYD6aVa4igr5aLa5QEGvgqBpM47fPbEsQbYdUMDgWcsHxXVBwHVf8P3KsptDwiT3cYiYYDTM8EG",
  "key2": "2qZ67TDPQnTWbn134aS8gZFrRjSugXaeNEf2E7AHRcfefyVzF9juozkmdbETm5xoPWNFj2CQxTDj7xTsELjdm8f7",
  "key3": "3HM8qFaVwiYkDPCVTw7FFnppoAby9Xo6S7XstsVzmd1hCZ6U98HhjAxDbTe4kAT5FjAoc6Hp294AauZ1AEP2YatT",
  "key4": "4xgQKyAYdndAizSbW6WwSqCNq4EbD3kRnYTpEnzP1Ddi6sL33F581vm53uWuMEzyt82wWCYwbfKa7WKbyjs1PfeT",
  "key5": "2yhNdrkKZWRi5F4rFmNXy2LkDBZeXQUqpAocGTDfJvefaDbpXoAWxqevg2bCPUznmHUQD8yySGJ6mREsj9kUA7g1",
  "key6": "42uvqu2FhXGhcsmfqfo2HZVN5D56yB9bQ6jza31mpb2KGnuTHSM1ydAZLhCiaAw5DqAktmZpeuCCD6f5QqS9TA1b",
  "key7": "3ftu1aYSiLyKoNhudehwCmMxDWruExxym1Fg2Xg1hQJTn6Ls4LsMYoVz7NqUpkC98SmXGrxZ1rhvFDQxgsBowAPg",
  "key8": "5bfPM8FVNoFMi47vFDk3NN8vWWvCiyb49K6UDKp2TxrJX8YY6hW31wSiAPDRkZpQ6P5Dk7CeHs4NtxkpLpuj9y59",
  "key9": "5WHMgjDrpziTw2g2FXiWsin2qdb2R8eTZB2sahfSDoDpxxoLhcJZqwxomQBXfVY9UbaMioGv3aDaFotHS2FViyLr",
  "key10": "2vGhafiG7n2SsNv675YAkmzPB3ZJ7RPYVV3ZhdHvBjV2WAku2Eq3Wt9UJsVENXibSaywxrpF9GTSWt3Fz5yKTtBJ",
  "key11": "5PGhSquu17iMooTqnovkvkMFQdHMLc2ZeMoYqT74QkYFdETmQtp1Nre3FNVhqqa477xEVW9Qj4RCuLfubSsy211P",
  "key12": "5xbCYjABGBgJgRQAatU82fjWki6f1tPaNrZbpd3XpUDG5rmw1WvT4pTsWbsCwsWBVrB59e5YzYYPG6iWVcvveD8Q",
  "key13": "4QzwMoBfpPPxX3wBcE5SJuVS1C3TcyHBdedixgFpbEPktyxhStpj4ohkd8ubLYipDnxjsmaYxyEUHshbYopuw5aE",
  "key14": "3m8YR3C5hK8MF7PegbmtjuhTfxnJw2LW9zgZL8c8AREGaLF1a5X3sqYkj4o9JZT7SoetqdVTeid8t59f5BgnLhPc",
  "key15": "rVqeJ1FCj7SwFX5iMzxeLmjHQDuVU9urmhLhvTyLEWMozLdV8PHZGN4XsrEDrRTGCM98PWfJXcfLHuFriBvTFk9",
  "key16": "28DPmKhJNpwrX3cgtXAHFb6UpDJaRMqqD4UzufFsv4VMeUUf1jgwYWp3WNHNkcAD9Tdoie5QNywpTbgJhDqVCUPD",
  "key17": "29YDcBYnu4Xowf2LXZKAfQq9a5wUXfJHc91x7wyxjQGeeLpVcH93RdBTXSTvi8S1RSWAUeE4jfNnGvZp8EQna1sX",
  "key18": "58AD99spMof84ziVNkWUShuFF2JXZ3XDugJQ68aXh14k4usDDBW6FrGsNoAzVCJpn348hyQjUVxhVzgyiU7Lu9wN",
  "key19": "57ToPEWG5ZVWyeZTbELzmz5Y8vFRvhUfxMJU7kMaQ69odEmm3rA9xLFymzoKcGKj9ccWsqgHuGB9uJBwe4YJCGAQ",
  "key20": "5VPA9vRhHRBCgNix9a4JZNoFKGM3ZC1z8C2p7SQCaXTSey69HiTxGtewMhvYeS1w4R6KbSMxYCXWGTcCQ24VxCn4",
  "key21": "2XLA9gkZyZYP4GierWquf8WifXwrGdZvNw63JCWLdvWTkKGWC5XwGfiszoJYYnNNvtHuMgW8Gh2VT3cNEV4Tqyye",
  "key22": "2rQzbyXKzfYj2nepGNkC1kx5ax55XawBAvf9dqhyMkMeDVKyDpG2Lv9xVu6XxawZQg2ipatp9M81SDohXC7teJir",
  "key23": "3Q8UmzkwXQzB7dVdcC4yDPHrQQKf9rXKPEvFn4321ZbfWyLNhEHi8qGuGoeirSMXpJF4me8C7FzQGHvBcWGDXb24",
  "key24": "4QLWonLuYMrh4jkXHyipGw9AoWueJPxET6KZ47SmjzWCwMSdLJ5bctLDuhpEbyNT3FDyhUDnXmSK6tLckevEoQWD",
  "key25": "6311Lhim9bbNN89ezKz7T3fmZRxEjCqwGGBRTKPo1WQv6vEb3zUU8WXypDz64bm9UCeY3WJrCJtDxuNdhWHHL3Y5",
  "key26": "5c6AMGadTpXg85bjd6ehFyFnb4iPLkbAKaJwWeNCDTNRc4UpxNHFvGvSYD6jPrDWjfYiBpiAUXKaT3vM9aPp5cMn",
  "key27": "2PmE9DRKA6nZKYSHVaTeSi4zMRRfJGgzuWVV3YNrCGSpdq4dw5ivUuKedwkQYkkRQ1et5PByMZuYAj8UYgpaCUUm",
  "key28": "22z6JygcRdQJcRBcNZro1pa9bj56xDkeNrz9ydqBsa9xo4xJz8DrJMQ3rrikrsnNRdxuGmm2jS2JyCTZN7nJYzJL",
  "key29": "3oNha26K1ywGFLyqzhsqawLmxdHshwjsqbpCgsVSEVnGfaYZzPjV3pyXs7VxtxC7yBbrdrUds6aMzqGQQF2JK9zN",
  "key30": "3gcZfmphNtywmeawpbu8gwD8wrFhrH5GCjJ2KojzcMPfWnbtCsGKwzJWfxJEwAYVYUBfxmx2iXvBKUYvKUdYZ7wj",
  "key31": "nnLtEfQheDzyB9fW4NyskYQT3ynrnHUvRaWFyqyaYHsyjVbVbSnUbyNHyK9ij3qDSnqpFzck1SdyQFb134sNjTt",
  "key32": "3iZGBw45ZJne4hYn1imfzL4UQuHMhFbCQT4L3BpDfGYdw7S8if8KUishrjNqSsua9J4L81vVHzDr5qC5jJbFep3Y",
  "key33": "6684egYJAvzw3wRgyVL4a4knu4ijMJG4dhi9HznNRu5cfWpTcfcb9DVg6bD5TkLgMd7KNRy3zSc3wzFWanVz2AUw",
  "key34": "2LBuDrLAqb2egHGDdEkzHjsyWGs9tTBonbX76wrUJNmSTXUMqNyTeWWirCCwMyFLDjhwq8bT6KK618WfU8pPaGPE",
  "key35": "31K8KP2eysQnj1FCpfdijeFETbqsCDiYA9VUBnsLzFRWbjZijHWTudEZ3LADto5xCoRQvycHzi5LSCgmh7VCk6so",
  "key36": "Tjypwv7KV61sn5FZhWtnZcuTFs2dJA3RAad2ivRYvpZRMmQkNmPYEhiLbSyuptve9MHUT23yK9bBd48SgkGxFYc",
  "key37": "3fJtEXCETgW4kvMmLYBte1DNzigJ6efh3baapJXKByKXu9hZTsJwc8Uj4cvWz6sZfRFhatUjjDj5wTv89gTkJJsU",
  "key38": "4vZeBeg1EMDEdwYyN4Cky15Cp7N33d8WqPJnrxwPVxi5ipYpsMzvYqjkT8PKmemaCEYw1XCc966FhS1JWRbC5zEp",
  "key39": "2AGfQssjbJJt2zqMongaWDch7MQPLsCsdP9WREJbQLHV6P7FFERdkd9ZcchSScJdjoMZxKyLE1XScJSqYTcsNrhs",
  "key40": "4ccngo9JEQ7BYc2hPqi88j21jvcJcuuvq8ngRJHm2RmbgS5rPzBnoCSZU4j8NH8qfeiU6JGNJ32NtfDrZkNZE8c1"
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
