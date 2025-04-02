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
    "4VyE21WxrWAoGJknLZvy6z8hgaUsCw1t737m2ArhsSztVACKgJfmb85cWi4U5mU1WYrHYGBfoPrS3z5pVDUuLNEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2recFq2Goeuc4DTNozb4YhSLXhpsAZTmGacuZyGDgToxENKcQyhGEe1fnTX2XJWkXYtUE5Qm1L6xA7VBZnv4DWjK",
  "key1": "3zXGF9wcPufab53cLzoqZjQYnEqmA91Y55XgoqnCyyDeh97GTbPAHdAJpfE1TGQ8r1XWi8sidmrozNW4DzcedoUG",
  "key2": "2rVVjgPKWsLaEK94krr8192fdM3VvTG994dvEyijZsKTwgN7mvw7AZrGBA1zjECVFKdRUgWij92FJRZpD3o8Tzmy",
  "key3": "4CfQxQCnexCxfCNufZYktBE7K8ESHHcaHFeecYa9fU6UCM23tcZsAbLYhzPHptMZ8cSY5xnvfaUQa9jnEkszdjxt",
  "key4": "4vgxMGx55Pxw8D8U7GM9Mkq2EiExnGBm1RwXU9ya1eDoxprsMZYrvGQNLJpnFx4ppi7E6qujrDKvX8hq3jLqYfBD",
  "key5": "5xkC8YqatgYFgrtBf95hPpXxCVvuEiKWZUdYovQtGQG9TgR3UL449bYgdeyMP71i1u51W27bRPEm7SpDboYhYRvR",
  "key6": "55dCXABHZhnqufvpq1ACeYQw2jpjhPmhKeFCi17tQNS1TZ9dTCddTBau6qe4GTdxZLYK9oujpECo2Pnj3gV3pwYe",
  "key7": "3ZcPMD4Fn1gUwwgbKMaqCJh7UuHwJNQCXaHsjpA4gz2N3hb3Q4VgRDArehUG1fUyS3Xx6W5rcXm5THDUq1vpDXZe",
  "key8": "2TNYb3qQpp6HkQ9912vEjs5PFZd1jjrqu1yw4hLBTMbcWqnvEjpBy6E6CrrcFFL6b4m4thUDBnibtuQZGnYYNNnF",
  "key9": "4p4b13C2jcJXbjg37r5MjpUcLcS84u3XCQAKwB5AneunaNRpSxPLf8gWcALhoiCub5RRDC28aRJBnDKH8Cjm2n8i",
  "key10": "2Y6KU8E7FQjLdKc24sBeYo89BdpnU5HdsjagWYWSKysbcWy8Wns8Etjmk9qtkuu8S4XZjFKDxndYo1TbR25xKBLo",
  "key11": "5HP3Q1W7giGfYfxYmPba26BbQGVNeUKAkac9KK96wupWXdmCCctkQBnPQsNHaMQHxoPmRaNdsjcaho5nUSt5t4Kx",
  "key12": "4fbqPhQGsYmJsyKnoq4miUYtGHK2TDD6WEzM3NhtLAy6nzD6hLUpyjQ1XNYtMQYBKvEGUC8a86zLvCZWi9WXw2xB",
  "key13": "5jnb9yh16mubvnHGiVy9u6vf6q258s8XPNjp4CtNAaAM5tJYicBYXxSfvU3zwEZGvmSPCxDCjmoyHpFm8Z1vs448",
  "key14": "PWcLJ5JhrSw2W186oRia2tHjTzzjB4Ftyma46hLvzxw4bL9RLBanrtTtHRqGFEYJzHsiAnPWZjJW7kaZgsz9oN1",
  "key15": "oKwhneMQMnjpUqWWFC2jvQ34CMazC6EC8rQQ5SoF9K7vZVqGhY63itsxkqVvUrMYa4vm6F9ZJWuTwiQxxMTowAJ",
  "key16": "2LG4AZHfnNG7Uuwi5FQiEHeEBGGTF99cUp2gJaijmWfiAsKoHR23PJRPks3HDYUmf1Kif3fQR2UiD1HP8DXy1M93",
  "key17": "4PTfnLT5irULNEqNgFv4ACbNFs37u5dkEAnASqa6LU14mE91X8H468kD7s9xuf3cfsKAMzBev8Q6oZ8D5kVSVJzU",
  "key18": "LvfMmcaZRaHSaBsjX6fB1MmXFmBApp7iiJFCWouLaivyEPmovxyNDAkJxvdgax44QTrqDnMm6rRpQvWWe3dexVE",
  "key19": "3FnSqdSn6kjeFtc3LsTb5EKtbUjUnvGLtnP8MD7Wa8GixWmFjkwrcHDm6YKp96a6nk9SH3rYHxcvAp5q3bi9m21",
  "key20": "2VJWo1WZHyRfJbQfHA4vB34vsw6i79khncfiRzs1LfL7z1g4XhafjM5yGEsYHgbGJJVD83UXAu5dUJ8QEmH7J6sJ",
  "key21": "3eeDPC5DC1p8HV1RTFfcyvKNMDiSbE2focdwHN6g9vNmqrxn2eQbw4daGAWjobU7UfrFMdGrNJ6kGApwYbZhPgRL",
  "key22": "5iZdpad4ZC9dSJSxA6GKAL7NciMKDXWUTLU5UTnjABRH2szF4XgkjSYrbNtEzTUjbhpPJ3PpDa22Rauvogm6YFq7",
  "key23": "58cC4ziYHzYCGqDHwvBjf6cmSyxBXvRhWLhL4VpMZnBAJrfjECDY9GKtcsup8UFt8WPqogURgcqVYbMc7C4BfSy6",
  "key24": "3BKnS32KEQ3SrJuJGU6DGoLr9nCueUkQjT15ydRro4rC87KEmgs1FkQJWx7EAU2FEmnjzf8N2TZU5c2K8UME3omd",
  "key25": "4dw16d2LwPLawRUnewfkf3vjcKnQzHbhZStBjDs2tuUKub6uoeKa4vj7jqGfeb3aBDcSdYS9sbfXCyE7jazemEfW",
  "key26": "2yz5MZzkikmn6JrG7Cxdm81BDVkYyVacHe6QDmWvHKzSUjHx7HWdhU8YEQ47bS1cS2P1EdiHRpprHDq5P8TwzkL5",
  "key27": "5fQU62j3cjoYPHEXKHQ59bjr1DGFq9m2QcmQ4ntdJkxEbtGuJN3tS8mAEbRc3JQs6HMkufxKru5PF65P9AUvPWbT",
  "key28": "4XVUjBqxKq5knEnTvdh6umcWrsGkGpUbxNbAhhcGG2WoRSBMsBRLDpkBj5zNDzded7kvmsB19PXq8TvLPJxY5jwZ",
  "key29": "62mZuAu5wd1q8bDqcE69ianmnafaADFN3otJjXdFrbau2DWcNB8NeNNM86qQZEsSGkMh41Stt6XNFR2qDB4TX1th",
  "key30": "4DmeUcK4sEKN3wqySEHZAr3D7nxXq4gyn9xykkp3vd4ULmiiw6LoTVqNku2m596CH8XCg36nDRt2oVewBfL2pVkW",
  "key31": "3oCratC9Lg7XKo5nAbFwYnFX2ex1CSXpowwWxkygF749PEvEFDySEwCWLbS6gAowp4Wr62SZJCAZMaakqBby7pRx",
  "key32": "4aM1PjJzEvGEZcvo3WmidEPJxKPUKrTRDQkxdL8fGwoWXR4mUKjtKa997RpB9SL2cpLav9NAugEVdwFupdgvLG9y",
  "key33": "2d8nFEuj5L5mJfr9rP9X2JjgpUHvyYuxEKpQdgN5aQai1xuGTfPikFnDcWtHV1N8JdQomNs7dvbqNnhB1mkPFsXJ",
  "key34": "3bBebeVTKJQeDnTy5uBV7iVJoMZ8q3EKJDcuqL6BGaWjjRyw2sPuQeqRuNJcfxV6NaFWZgFbuD577sqo74iwjG6Y",
  "key35": "3Cs9cDXbtrh8rwJjpwxcVVS56yt3d27BeZM1BRaLB4eXNeKoJ8yVWbcXDuGX6yRud7QLiSW1iJeghjDBeaRSMjuB",
  "key36": "3oVJLFmLUqRQM5eeNygHsww38auEfNm4d6aQaesoR38dM7P2wQYPmfBfYZFZ737JZxV1oPNZqBfDJwxuTdboeh8h",
  "key37": "TDnVDceZgX3CSq8WQieNDxPEZ1S6gKieD8DHEkd1P9sRRUqSYxjC4F9dep6BeiqUzQecPphxptbXJXQ6pgo8oYS",
  "key38": "62EFBhczcqMtswHM1grRmDYTwZhc2CjjuWtWqaFdwbPzzu5uMtSxQjjvRCngKoevLozP1y7zAb9UVkSh9HygFzEo"
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
