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
    "2PeQxRUsx3fyNaZGti1x1kVbTk3Rnb4vN2fm9fyVLcuHYPX66pGRsbw14K7p3MDPyg7DeUeSDHR11goXYhKMpbjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fuwH6McbRztvGdncHqCfLmu3LGp9rCkgoZQttNQDif6ZQTdiPbp8WfFLKnGpBVbtetXubUHN82wbgXru7YEY4AR",
  "key1": "2hecAJfbgwhqtf4sRrKKWaCyoiqS2NdSoyYWhN7jRnPEDerwYiiQBpvpBLzXxyiHUzs6Gec6tdY6ra2RoGoZkCqX",
  "key2": "3Bm4eSTnm3mdoLGMBYVNE6TX5DFSHF3CkZZutuib14xa2mKHceAyVigkSYv1JbhmkvpTuQc8nXCfKUW6mpGuAu6G",
  "key3": "4kkrUChrV5DKiGatuGiox4HGDLArsSg94fBhhzZmR2arUFuNAenNiKcSnFZdUivKyp3wwuwmNbUTu6DtMJYRkrwt",
  "key4": "4wg4zKKT3QTagLbLDrjxYaFoFmKu4JWapAK2ZQVqjmPofSPuSf7snKj9SiLNJrK96PFtqDXsAPEn5S68cGrGnFZr",
  "key5": "3epWHER1uTiTTNcmoz8xHzJtTCnXdn7vytfLzEBH8xhngskj7GrjQBt5Rz8mLsHfVCFFkKAD399CXQ9ZJQf8b1dX",
  "key6": "H3B9rBKFMcg7CtZh2hAtW1WmjpuZHYHy5cfGRxQAz6KkXzzR2WCgMmgVrMCLid3jyAxWesJ4WJVEuKWydxWc8a5",
  "key7": "265i8si7ZPDviPstytKc7BCCmmnpYxfwn5zyHUtjKKaEvZejdESXuyFzsUxpPUhzGVe3wFD2dugdBe3P9khFKu5H",
  "key8": "2q5nmZxSvL5fodhAgcJ17xDYt9ukkSoijUJ8qLthnCCz55geqDxqYLtXRBQKSzAiFZGkKCjVWsPgMyn9ARBAgdTZ",
  "key9": "5k28VG4uXvL3K9dZNLvTtLPyauExFCT5UYj6G4MSQsEaBYMquHfbHLdN9tZPdAu13nc24f3rdZXgWATyUJktzknL",
  "key10": "4PNZrni7bN7ez5HGiAnE9piSjfyJ7RVhcdcsWmAtfac1eu7W61xQKG6R6BLa8HatWRokmsYdmsL43dsvjf4KghMN",
  "key11": "3tbP1TgA2MomSJX9615f9ZueyTA1e2nrNCNrRuWFsY3SC6q44bUhmLoZWnPp4u8JWGA3K57jgYqampb8GS4fnuRx",
  "key12": "5e7Bk9QYkMWHc62yWuyH1JW7PgAL5gQTEdLVX8CjharndYUsiHrBKabRiCAYnQXPRfWMhdjNamfQ8ySQfc7HSfC4",
  "key13": "5wTTg5ZJuRX8jEnpzpCgoLqmgiNLxbidEzze92wu6BPzz8KFBb3PmnHCaSgnY26F45uuTTQLy1h6Y9k7wkWcjdLf",
  "key14": "5xwaNCkHXEX1mDkdsF926GkkSphp8T9VbFpAdBUr7XVWvZrQzKfJ1Bi8i7DTx4gMB7paz77qd17u6cG8wVhyDfC6",
  "key15": "pjnTh9dt9xqUzX85jnKBF5eDRoja66KzvphRKaLFDNS96iQniEysdsEx24Wyhr2ypMMVd4odEBJKWDBS3mSgoKp",
  "key16": "4vuSeNh3HoRQsCxyQ5r2iD3Bz7zwJu5fAYkAiVWxYSLWEUceu1QxZ1kahPWYD7P84YiSSkTDN1v4e8tX2GWDtbRq",
  "key17": "2Cr6nroyGXNTiQRrhtNYDnGNtyqkXgeruzXrxLUhSAWRQ8q4zPqsRQZNxY7ErLG4V7UnhzDgZQxJkWUPDzUo1fMX",
  "key18": "v6BLuJcjcjiH2jS6qVJ5sp8xDyX2Y1F2EkVbL7vtqbGL7ASmctVFjC4GLWDbJMTcTfP3K7KNNW6d9oxw4Jnv83w",
  "key19": "3yFtJQskEdCNWzvmMrA1QNZKyQuLDHUS6REFn1zYu8npr87Uk9Do1X7455AxmNrrYp7HEnj4LtL3n5Fu55FL4ANe",
  "key20": "2hDMFgLhtQhUhfnSX2DXgWGTP6b5HSBePvVcg23ePZrc9TtTmWrRmdaWhv65doEoSvWMtvArQsPRL8vbsqKoyffq",
  "key21": "29xpdQCpmXSq4pNjZFNU4hEnwZ192GC995EAdZoi937kp2hxKWQrfGzXkC6ixRkDM3bLFo7Jbj8gy9r7sq2v7cHg",
  "key22": "3BemdLcR24zyP7YBDFGUVBgJPsk4KUYMjF3j9BKQFzzsEVhLBzXScSPQjPPU2Rk4FkXqDXwErnoNxPSPTzTVqDCz",
  "key23": "5dnLqvN2UMBUUg7GkMUKPES8wevQwz7FgQzzNL41wRC2eM2f3bbPKuqD1wmp3FToQqucz7YwBmBKBq86ugGwBjTM",
  "key24": "2ctyRCHaXvNAWp2bN3npFcZQQHWNjM5NyGBu959oNRJf14dScM7Q8dBsxSLtnVbitw9wb8taTHjqoWWyJXXMSAL3",
  "key25": "54LmbRM5mb2tJJzMRw9kYsUc2LmJ9WzEPwqxUvoW8jpSEzhNu3ox9NXJwDn5T6P1Zqprv65wj1VwWKUrmWUgvsW5",
  "key26": "2Q3iinhgWbgx13orjoPtpoRSvW5k38Rs8DWairfjxjgXJaXzZwxDgwWWu83JMNsnfaT19AFjFhwo4WDeezC1oXW7",
  "key27": "3digPBJzfRqJcC7ej3q1wewuoqiAD1Y9nztLW4MuLu4EczoZi6RuA6aFa3wSFZk9AmdrKLke9iXr8PLtXhK7HMaU",
  "key28": "eNF8iPJJcmYEjwgP49mUg4iWBgNYDcZDQjAWJCJCvZfqucrDsjvCwzxzp1oao85MHSCriHCzMnVXEuAovP16EGC",
  "key29": "66G1JomLHEwfCsnwxNRLvW6pFPcfeWTKzefm2NniUajLDzgjEzz384Sd2dP7BoikojCTtiiVjJhtp11mg4HGXivn"
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
