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
    "2r391bm9Bz4e9CzY2RHEK4icd6ZCkZUmrGmAtcCp5fVB1PAphP2gRW5kYp5ZBn1EYE37UDUgycVjUinyTsk9NrSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hpXk7ZmtyuLdwaCN2QW4PZ9TgSHLnmd6DRA5PZA9Ei9anKWBoNHEABFecDrnt12wFVPk89SFDuJ2DbbpYu7tdbP",
  "key1": "3bniRiH53KwUnVN2etMpemYpCD2eZNeFCWT6hwRUDV6ozgrV5C4BAKS4ahPWdYh8BKkQaqCLAYoG5UV9rEkc6c6j",
  "key2": "8xFV8URgSznREnoYqSgfx43XxoEMk47kPWtPGhLK35aLqQWNM8E1RzvBXcGZ2mrKq1GNbfqkBcLu21zZwXVUBcq",
  "key3": "51SDRgt8wMoKwncXz9Z2PK7FN2LzXDoctwEeWPXiUJEFak9oAQZnVMde9ZUo9FqsyyYWVSx3mH4QwSpUHe7BHWjK",
  "key4": "98EwViXabXEPT7AWMsXpq6mhkftBHgrgViFQS6j897Jds7j1n45F1jpTiRvcAMY4NJouBTwCmbcBhTQDiPTpJ9x",
  "key5": "u1FAX6WSnbUugann92qrbBk2bnsYuNonw3YBgCgjaCYtMNt5abvtptiWXkbGfNoU9Zinqd4axzGSGyHbpxfe5uF",
  "key6": "3fUMZvLSoGDMYR4QddaMB18B9AbSdSUvSz8uTxGbYkc1FkY4c2NFY6Jg6eDEELeQXWbcuTSCdiMkRHrBmDgQwHCp",
  "key7": "62MiqpMET1iHNNda8U4Eer8fcwtY2uSUv9P86tv7bi4raAmF95oH4Q8qCLuQr96q3vnezL6EFrTjVGRfMQGLU3m2",
  "key8": "5u6amDUcXT5LKGmLFhmpzhpmGp9MW6PfbgYk4pYKzB21D2GQQ5b3j3sfWymBnhCrrukhuS2GSksauRbnHhe1ebiW",
  "key9": "4NE1hhVHoDVvPSed9mp3VZsQFA3sgwFdvXqaAg47WeuekThSuMn5gEJ3wo2Q7YZgocv4XdBECgrkP2mFTKtCSunV",
  "key10": "28p7oLa51rXkYxvj7vsjKf98oVXZ6cSNMyPEPSyH2NBdd7kMxcFG9gkDJkQe2aqxqzx4QxS6YwZJu4v6yBJVMFzY",
  "key11": "2MfZcrN7J6QnTaHiEMJqb2JWb6bjWziTdP25WNVV7cG4bp9ENhR3iTqxenNbDQDqWHCneRAsykpNjTRYhTohdTDw",
  "key12": "eHivskxuxdHELCZ4hYtucEaGJY1oXMSynXh4f9AMz7rbHBD8jctxg8edW3xYCxTD4XoegXdpLyB4f1DPBxv8HJt",
  "key13": "SgTmjbDpPdnj3rnuK6q7YFTH3AoeiGxRE3AmWh86g4WMpjKdjcmLz4q9hf8wr9tAHhYhZcXRRq4sQLSypjcVjjm",
  "key14": "3jGjDJknnkgKRxa39Ti5yMSetL4pVUUy9mpNGP9Ej1PRcy7TmWy4B7zgapSGxDGySPxpeDee5Tog3AoJ3xHtYPeh",
  "key15": "4MsWaJSXGF4bbRwZZNw719YEusakr83HZjSLyEDJGKVq1HZriVPP9SnsY5877vjbj7sucqjbJnmbVDyo2DY56E8f",
  "key16": "5DKP2uLn1XMuC3DSmkGXrzBsbfn2EShFjFPAvRwa59D9kfnKqnGiahNA1DuvChhfJWJhvEBJfjHguGiPmiq8BqzL",
  "key17": "3a9CJTrhWsUXAHegKdsXbtkJDs5JVAMXvR7vinvHCRTM4cz4neN3niw1xAv9svEc5KW3zPtcdwQmm7awUjkrChKu",
  "key18": "249EC98zsZmPJoTv8edktQk73WU7PyLEDZijockz2Sxm1cxi2JEyhXhLBMToxbf6MBbSRhFcNQVM1FF6t1qeX4bc",
  "key19": "24GsfLoyUGvHo5ocKm7Hz6pPcaqMBTTkHqNDHmhTnThEgv24rau8p29Ur8HMLxbjMfTUzbGEiL7XyagrmJ4foxHC",
  "key20": "3DFWS9hsZsLKDdp3A68XEHuSzv9pW7ENFzEeG7eb8VHdvYY27FjhwYJBdy9PGsjYNWNNbcsgaecvC4aCDZSGypry",
  "key21": "2JGfZFJyne93QG8C3B51Nm6HG6nQE9ys1WxNkf9gsBUcMGBBcmvwXFHu6H2YpWMTzkcJU379kX1dXj1615yijoZR",
  "key22": "3kgfF78LN3kcRR9cHAJA9bfFudSGirkj5c4x6g1NaEHA22eyDDvkkUFN9q4v2TfWxuftkoiQpTc2cMngCuyAqnuN",
  "key23": "5EqLgFaxNped7Lix8gM7caC3hyAqBh1wiins25iCyu6oracCBHvnYEgqCDEh8sPVSSUqp5PeEZ9cTsPommiD6Y3X",
  "key24": "2z7HkLX4nGJ14BLo98f5TYj9XXfrTcWMrBZe46y4BSuGPr824AbKvxhUGEhizsqNzonqsG5x2DMGTV3jX1wG1kwy",
  "key25": "8c6sjdwHhbvQodmwTHbUhcJ4tUQaoaFosP7CsjLjbwuWCGqRsEwjtF2k9EoskHDd78bfZi4bmqb7r14aN4YD7Dm",
  "key26": "2Sv1UTkmPynQMxHYgHxwaa4E1p7WZvLgjuRqPYBqHSaVa5B5w2t9ZnLNdmxkXrPHwiKLwWMbNM1gVaVcbC1unj2r",
  "key27": "2Jq4epfCPj7q9ixoRrcVbsFVCDuAvm3EBdPCVtAUE7ngCcdze47eqqzpN1coUPPNMhyn1CW3niqQTULUqVDiaNih",
  "key28": "bPp14F8CjsaKzAU1ew32NT1sjXrW1HenyfFTVmrh1XmUp4HNTY6GsXa8ficWWMEyXy96bEn6rFFKXYx7YDGhVMu",
  "key29": "4s7tE1woroZcKXRJUfTdWtRGKnDHxkbVYeGcjtwnbvtVowAyJnSFGC1QwLb5KFVwog6uUGmQRao9MvSn68t1vW6G",
  "key30": "2XtPV4cjLxBaG8ddifmRSw1t3fxCfheNwyDqUXh5hmUHUeBwtSzCbPG4C3vdDMGh3TTseAdanphAoWZ6QHoLZAV7",
  "key31": "2ataCBFr9z6QAYhA147wGHqC5tPTUZ4oTjhzKp1ueJ6Ahwmk5pmWTYD143QDn8M9z5PeagPgibQcGw3tpS6QaBdk",
  "key32": "2urvfNpsqt9wvhXgdaMjTXDHSmR2sw5dpCdxM1Z8PiBcTAaRwrtTDvLFjhDtpZUJwLXggnsGUM1hFQgALXRLnETD",
  "key33": "26VsM2hVd6txrartYHn1b7AhEQrdDxYKNekaJMVwXA1uLAJTF9nNDEBH3qjtS52LGd7xsXWuCiixTHVDc9hHEFvG",
  "key34": "4hVJ4eJKRfwLTN815fk9kjjAsfkC3GqCTo32ESehBuANEK5pWEk9uV9j49zvYv8Dvxh1Vi5DzCYRXucmejZiqWPZ",
  "key35": "2DyPNqwdaEoyA78xinKhhAmyytXx2nsVzn28p7TfSWVcLua3awQjohGVA59sr1rcpEDNrJshhSG4bgeyZic1VGQg",
  "key36": "4m1GgPX8msc2qqtdyHotgaM4wDB4qUwLRcpBo1QSqeXH5D8fujQ8ZUQ6cuB7Vi3yLTtKSmtX5jHs5rNMYz7XEkp5",
  "key37": "52LyigPCJjsYpCgrNbeYdR6L8L48jCHbC2L1SQX1mhocmgvx3ccam9tgdJhApyQhU2qnfGrNFPmtS2XhS762TyFb",
  "key38": "2wKZVDdkhRyyZMWqYn4xcg2G41M89vEkqt8XMfpAp15FdBUUreVW4TDdTBND5EyAAYr7EJVW8effmxRAugD2Nfzc",
  "key39": "3k4rWzNoj8MVBQDpYMYuNayKHGAcWiupUAh372a1q42BxunHXmDx9VpVkxCptFyp8efBq79HdxTnkJn94R4GYf95",
  "key40": "5Db8MKmZ5MsL2WUtDs9vGNrbbDqDmZtxfMdH5tpeNeXaspoFgwAxzvZ4M7b5R9Bbm8ahWZKNgwJLCZ2FknDyPq93",
  "key41": "59YqwE64N1PscbeX9MAc6z3z2YfgHdZtEZjgJ7FDXvMcERrJ12VnFcm1u9Q6vP8yzBSqTwwm4JtUR9dmPSw3Lk5r"
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
