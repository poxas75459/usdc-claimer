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
    "Xe2wPEvJu481g6WjuqYejBmKyWjeTSEysY5LAZWKNgRqxXuKJaWntgX2svvHGxDdwBnfxyDSsJGqiQXCB5WJLnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fsntowCusEa8PC9EYLDxrybqYtV3rnJzPrki6bztL1xxUgSae9vFsb9KL1QVK29uvYcFUJHn4z9JgnEFyuJv1GH",
  "key1": "3TMS1QbxxipcotG8ZkTbDu2xYJbVs7qwBEGL4vMcnAegsSaGqHbk6tCUPpTkxwFabtsvQiiqBLZWL47pqo4k7Nnj",
  "key2": "31LSV6tr9sU9VYCbaoP9DpEQfEY32ru4qHA27cQmHeCK1ksQijmxWnEkXpCFbS8nz19CJT4ER5pZ8vB1n3ARPcyf",
  "key3": "4PgyCwiuPKt1n7zcHnKuQjs62ZXTQiZXKsHPhZiDJf3CEQHkAWqHaWEoB8tbdjV5QSfUVWh3dkv8L79uUa6gacas",
  "key4": "61N7wA2muZQuAmimL6u6Tj5XMbXYXnUn67deCLTh1dWNqorfcuUDNdtDMubHUnrirXvW6B2sxcZzndEBXNpDvN3S",
  "key5": "5KvFxgtQagSsBnMjKPm35RQimHwdX1HjA11NGCeXjsnRh2jjEhidGVJfHWTA4ERd8pK7Qw15KshPLwSkd2WhxJUM",
  "key6": "3z7LQ7QK4pAkVkfQw88jxhoxton8qSDktWcvcUvcLnXpM2C4B7SD7ZZEGTognnoxz1LQiUFJWEoUGAVm9fBBPYLa",
  "key7": "2Ku574qnvP9epkD9Ys53CxKh8scubvsQvfEDpuUWgDpbVrJsLZ4QeTK1S36NrS22DqjUMj43RASEz62FC3euaLuo",
  "key8": "2h8RfY9jARyYb8RVjRiaPAWHupVkEyG7moPgF5aGZD2KPzeHt2Bh7e3ZERzJFR2e2upbifHrPZ7ELKMCFe4H4CyZ",
  "key9": "qE7bfNe1zCEb3r2YHwWXUf6u6GPeQ1p2PW5DVWdbqX94eauntbzKr6rr8net8w88gfV2GsuW7emPkRk8WFDjs2q",
  "key10": "2iCQeF1uBaBPnUEB7YRvkyiga7w5m7unBcNN6Aij3wCZdBLrqAZLGxHrzUmj72QpnRrtzitd8z6kHpDPb8p8qEmv",
  "key11": "42N6nHKcPjo5fgGE7aFiwzHwew7SmPb2mynvT91ThSk53UZbaSdLRVGbicN3eTHrHF8EyjTNCU9dNpmQHHcQjKjy",
  "key12": "57AWNkoiWPz6Rx1ft7BRJfDTFKznHQbkEJhd8hwjDiWgMaaDSRKLvXRDk9qBHJC4YBNDmRwAu9mWPYLHdnk7gDfc",
  "key13": "5fkGxM7HQmvTQsAzqU12opVFtoJD4jVLAQzyL9NWiKZajYHXfzDm1JWMLQqahcCFMfeLMW2aqQkFSX4B3kzfHccL",
  "key14": "2KAsJybQUKYLiB5Fazn6rbkwNWVVs33yYJq6nuRKq2eVYpn3pxnoprbqJSVwtbqJd68Yg2NC5w5UqiuTSSEJ5a7v",
  "key15": "2d44METd8v4f2v3V6TUDpFazYT9XFQhGzoSbrM5sek6exdt7RhSNKJ5F7EPYG4AXvRUFPrZQ3rU8tqtM9gTjS4WM",
  "key16": "2VH6HnspAz67kv5m2mkHaxPoBcgpPeFXoEttyVL7115DjvShoZj9SsYdv6Xkmn6usdpvxV1AjaDbeZ4KQ7Auvdci",
  "key17": "4zmDmongMr6jmhHrBrLJzfYkBcLMaaPJedLSsgjdejRf2r6JbDQafHQTc8d21opUPC58f2vQqGQwCe2v8ETeEQdZ",
  "key18": "3HQ2hxVf3X6sRXPox5T36AES77tWBuNbmb3rwiQ9Hn6WvMxebkJJkoJ3QAn1Ns4eSKTLBk3vNmfsHPr74zNEdWj5",
  "key19": "2tei8g9ZYGTqBgdgHatKtXKWeoSzsxXQas71k2yBdHcfjH6w7F8uRn3wLbZ4YRtn1iSc6UGEMdvskxPbUT1fDVp7",
  "key20": "4QRQuPFmPGuwXzBBqTrm9oJrAK8629pt7FiwmHH8te8J8A4zb2Lnjw1EFht1NjkupDQrSTjF3WgP5N2R6rsgNZqX",
  "key21": "QCpZkcWZx2uc9L9d882iwTsSdHYfocxtcPaPMbwueAcvLjisjEqHPrgbwwa251dvGNZR8phLgmkXYjTpvx1o9Gd",
  "key22": "4Jwyazn976EJyrqcHLWaAvmtWPxxBdokyz9xFGACiMd42DkuiPx5JEmezzCmDmUoxTzTke1PePxihfFG2JFi7o6a",
  "key23": "4ix2Le23ViUB8efQwR5bf2DXT945XbVohNin7ND5yyPjDKc2NLpXXyXykcTxJUS5tj5vbH6YqyV8vdfDju5g8i2G",
  "key24": "4C9NUXND1VeXo7jaY2sUDHjuvd9Njq9dZHUA1Et9a96cNRHZ6MbDseyHvFbMMGGiCoa4ssjab2UuKiN8tfvT6SwZ",
  "key25": "sKag3bjnsPraMk3dKwnN6nNyTikuDuZ5jY1F6JSHYQQ1oGnXGFz1bGgtbR4dFiZMWUYEsu63k2THGKwqHnrFFiw",
  "key26": "5GRbGtwYwFnVD2THjiaboqXoYiZYxetP93g8ZxKJq8uCJwnnSEz2uTnD7ZJSG3yGcrRexSsmoK2K5vRayhasVpCN",
  "key27": "2wv6knh38vD1e1JkEDn4e7nmrzv6pHYmM3wu4oCnhZkFad69gNf7NkMwg2rCJ5Nqg4JFbFmng6HzbFz8kePLMbv1",
  "key28": "4MWe7v9PDwMV7hYc5sXcyLvQ2pnKQjG9QBhdAG2MuVgqZ4Fu2C4R25B4eYEBBcUZs3EbT9tHsNpNTrQXqCXRKgVE",
  "key29": "Hp8W3WrFggybBy7XXfbx7BRJurpm3GUZa5cZZg8koUoxk6XJZsLHJKQ8XNK73bT7wv3kf9xAQZesnsKMGG3KYEF",
  "key30": "4AdQraa5n8F4T1M7Ukq2ZJosDKfMAasmHEvdU7ug6i4PEpUVKGfqZeAkevkquV6hNu8MWUDSgmW9qY58jmDpoqTj",
  "key31": "3u3ZqyVdR7mkwkRQegBu29F5ynCcuhEg9zu4PsvBbUdHG2g2QzHhuEH5SGyE5MLkTHs5LMCCerpriGUz5cwi2wpE",
  "key32": "3qn8tDbxcZAv9SgE3DdUufKEs6WjEtYFDdtmNbCK7p6vimQgu7bmbV2ThnVvChbGot7t8BwXoF6ufVFhMzTJXjQn",
  "key33": "2xT7KWyjbdrz6s12TthqxrVeuej4tNSpeNBJk6JmusGfPwS9V4Jg956SguR2xzeyXJCuvxDP3dVS1tM7obc3QE5G",
  "key34": "5QBkHrq9EXjQtLBRcig8qn9TbWFkDUHYd7qo7wFiJGan3DVs3DAfYDcjv73wpssyhskjmBer2aMQcPpv1NhorhN",
  "key35": "4FTYvujnq6DKkYVju8wV5dxniccTQKjTL37UaudwbaaYSG1WzTQyqLNPhdtKhkWvAXutC7bQ1Wgv7fJRQopgkAHC",
  "key36": "4tWe6DWSoVKbb8ezifWVobVUhZsKLMvFFCt4Yb22Ao6EQWik66EQEyvZfX5t8zfeuFGsiVYzNh9UpgkPVTHAk7Xk",
  "key37": "3Wm8Qrx28sNKcZkqjpc4uKHRJFj1kbnYLRe8Gj7G1FJxg8DuzkaPvoB2WebdiGQ6SkEUKDJeJeDfACzL3wUcXEYy",
  "key38": "33W84tFHFAXNtBLxGHTz2u4r2mB1EvgsnBjv8fqakdv2rvniPk3he2bzww1MR87BKmVR94wzACSCLhFvotPomcLW",
  "key39": "4KyZkTLTkxMxKQ5nZCDT5EQ4B4EzDdtqKPi9FF1c1sTVA52NbyJWv3Hyxf9hosSCM6VT1XhRNHX2mRB1Hi8iqGj4"
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
