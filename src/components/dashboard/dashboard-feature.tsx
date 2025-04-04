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
    "5vCRjDM2t9uN41x8vxakzEq4KsDovdRDvFhc4Jkmu5qCd488Agn7PScMyaTBvC9y5986XisA5fLNfxrHm1sFzYdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mshz54kUY9fawZe5a99PFvcN4ACsoeYoxAa7vyUcGSAtvvVAVLvKB9PNktyqqnG5A1sDffgEyUepBvUKZHKw85K",
  "key1": "2NxHNWvARCgCs4kYryjD2T2ryyJzNFeahXe63nAGSsCuNAR4sv8PZgshxshzqPHSZqQLQmCNj3Cv2eHfbBWmxymN",
  "key2": "3eMMKKcgJRuz8Tpa765D9FaJ46w6wpjpUUtiNA3BZdWukVSneLW9yzKtDzxjHLQG6GoNgAogcQ7TbAbUhmc3DNFe",
  "key3": "37yVEoqPAPaSEbHUH1hvSGgTc4E31VUi6vmKaMkYuUtuinfdQDf3FbHqRYkXhDsVh6VoAsAhVpR4YYf6EUB5Bpjf",
  "key4": "61yHkBUuUkpBtGHQNYPzkiG1NiKsHwsZDLywjJ4CKbW4APVGrWZB1qziyoZ3UjSrCXHq8ACreGcrKz6ybAUUcec9",
  "key5": "3JwnZcyEQ5QTh6ERx8q6qe8eUvue8GxY8chDtPVBMRnNpvaYUP1AokwV5nqjbDXFJZgWzfzcepPNJyiSFrtGncmi",
  "key6": "FSfG5dJpCjZmNR3xzm5mknAr16teP985ySzGjonGu45Tg5dP97xeeSUph6DJ53ySeDhkzGiBrJVyRKMXgZkxssc",
  "key7": "V3wbsqrD6uuaJcJ33pNqxE3dHuPBbKjow4LnSfT54deEZ9k3nZueAzGjbgPj4RM9kxcYpC2HtjSzdpY9pLVPd68",
  "key8": "2cmARV7V22DHp6xsyeVpaZARgFRZyJzrSTNXNVE9UuCpeKYkykasq2kVQ5U3YSpTgdow755KShFNYb9prHi7M2AD",
  "key9": "4ohejm98W7JmDRK44kaMcT5VosWmw3v7Hf233PNpDkgxNp9VDeWp7XgiEYzWj3Y31SdfsSs6yCZ8Y2bLiCpsAenb",
  "key10": "3k1HJqVgswAn89YH8f1jYMSaT8U42CCy4WecKjmPbsTHEkXNd4YbkmkUx8fY6f8aqgC5kuBqA33AySV67J5bVqX1",
  "key11": "oQy6tvgZqPpDrY9CjKdcB6PpfrxMTQRsvrhoMJcscNAhaR1Ds9UkRkHfU85jKhyrLqycwF5cCDgeS8aMFH22xvW",
  "key12": "hW1Q5Xt8ZU7CbXjbuAfdoMypf8Dc5k1TejtMdmpWRnfyf7ysWHutzxxs79U1CZ4gF5mSe16EGbECkKUomodJb8D",
  "key13": "2xMvjX4z4hgdGjaRbhpK4AvFvsGUBAr8kQjHVcrNbZSq5mpMUScwBMscAGBiTKkzxwMUZqtNEAVZE1UaA8kjmJoj",
  "key14": "3AKp4RrZiKhmUCFq86qr6SWftmiXMuPF5qpefHdqdnf1ZXtoZsrAym8SC4qBm9cun6wEnLdLNCRDPK4rGcaMa6Xb",
  "key15": "4pFTzUNJ9x4Hwfrn3eHmBui2CKuHhPhQ2offb3kdVvFhC3A3ZegW38VdMrbALMyvFst6C2Pdi9u8NjcYTuVxPKmD",
  "key16": "4kpx8xUbTn1e73Ep5fDCdDRh84QYzhSoRvJtTLL5PW6DUSG2BvBxhxm6E32jMi7p6X4BB5r9GcZX1zcXYnqhcPxk",
  "key17": "JdVLf52AN64zTpf2BMWpurBUZSCk9qUGJT8G6X9mQiHxGGE4h2eCM2ZpcuCoRhNfJRscLsEbc3KFbx8hb1Mkq3U",
  "key18": "56SbetQohLnPe3WqeKdm8PbBdKSpj2FgT97WChVY2ogQNBirzN1qjPPwdH4j44S6An2R9sTkmAZWYrAqRgaPszDp",
  "key19": "LYKFo3oxDQeCewdnp3NyDMuDwMbJfJPkHUing32fkKWb7qxpooYY3Y6FJxtm7ZhFirYHkeCAb5DfsET4BthLwEE",
  "key20": "4ioVjcapKLwYszMfmCuG48eW1uma54NscMeo5ZvxV7hYU7NtPtPMh41J49WRGXj2v5fXrvvBLY3gNkNLuzQVguwf",
  "key21": "4AAZ9vqQWqpBjpXDhAEvyGcQPZHfyvywuN6DcsVNQzwwCEWCTdgkCPhfvgmnrmX1Bfko5yvvXmWTyP3wPeJwktf4",
  "key22": "52Cwn68zbyKa6DzZ3VJLjWK5Hi6Q1QaguLe82wDrJXFae9iCpw1S9ySqNYjBYWpvvZnz74KxZbYaAA5D8CrqePTZ",
  "key23": "2uTnidvMJ6FGv7JbSA1G2Y7fisjgVzmUUL2jsx8WsAZHgdapzduj1vzJajhaDu58p1raDooSWSWcdrE1VgQXmL6A",
  "key24": "4udCvkh6bhpvWthbpQSwbRfErQvmF86i1Yr2wEoYbELboYJSiPiC9XGSe8jsRDd6YY9PrXxVAvCn8qPSdJCFuJXr",
  "key25": "4fsm5mQ2JABMHCD6YgWzttjX286ptAJXuhS64F6SxRn89xBejb3oESz1tRNHMqD3m9QzLK94DXBS9YfygmyHDKfn",
  "key26": "3gVELFEitYfR9Wd638FeZPhjcmoVNho4TyaTgkmodYbMRKdh6ZLHA97oB798xrcShCsurHHKGPBm8hCUbEqg26Pb",
  "key27": "4YwcZuPzh94phv8vYKU2WJpg4B3ndFCws9ZFu2eoJVCfXerbppXDQYcQWswTnvwPqoBoo6S9M9beqE4gq9KqZd1m",
  "key28": "2GHeHguUsRLqeN6PsKXAxrZbkZNtPKkQr59pc4sattSzDAeja7KTKY6ANmECcyWA4RhsfV5imMWyxGYNdnGHDKDE",
  "key29": "2mucQDmtXjjnN5Rwu5P9Khysx7QwaLvxK6h61GrBruMdmeJSUEjxwrfc9oWjWkVuFZ8zwwGfeNV84QhKNuX2gcmT",
  "key30": "4N9y968a2eBUdg8QDqBniwM2i7kGH5gfESycJVGRbr94vDJKYzQtYZEaWpUDPYQd3uJt7BHSgEGMAUYkuFJqDz4L",
  "key31": "zmMEaqBvKyQ4dL5Dudy2GAwU33ZshCMFi3QTJbR8189NdSmCbidj2vDGa1okeez7zYgG6WMAftJkue2HhiXwvG1",
  "key32": "3825vWf1n8PE24X3nX9cKkxXEPE6qYrnKWfrE3X9iD8aQXwmvWH7dSxsd1gakU4JKtZY2K7MyrAo2be99UPnaiWQ",
  "key33": "4oT8sxTpiNnLUsZGzSfAogn9mLpnhb74gbXZ9oXL2bLmWf2aWj8NNSDhQje5oHuPHfAHkR6qF8Y3iFY1uixyuY4e",
  "key34": "5qoqQdMnf1HuBJQmmxSEabNaDVmZ78tFS8b4BfaXCAwrdkhkt8tQTsy7BpGkUREj9mRrPstyqk4s8Wc592gTcmZP",
  "key35": "2z8RNgzPYPEpNfj6bAkXs3CtahjdoqLzi6iyt9WTsB4G7X6LazD32i583dMWThC5BkYmAwZQkiAddrRVvqumM7LV",
  "key36": "NPBe6GMMMyWN6qR4i29zGYtsrQtcvsus8pktNY1K1ui3sGtTdcE46W2kN5hogm93ZJeftmKb3QTCHFvBu3qU4T7"
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
