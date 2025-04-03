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
    "5pWkzrVjzszSZsNcr5ogmDw8xqFwuBeZeHi5BL2Wq8qoBKLGzhv4muQW2M5suSKe5vP8APkGCHDCFsQfMmMFMbDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sqL3Fge4wVMT127n4QmVaCR4STfGqP88cEHPCCDADEPCn72gwNWVvpXup3m1b88cRztRTULNtDr76kShWrEXSwF",
  "key1": "57iVYuc8GP2ssxum8D5YbGeuTLg96pdmNp8NoR78tHW8hgAL9qc2H3WADHvmLB1yN32DKFTYFZCMajMhFKrRJ57w",
  "key2": "Hk5phWUvyWpxWqCa3183GbLC9BuMFjGKZVwvfdBN2D8CnTKewTfAMA7e8sqtrJtwuxMkzRgh4gmRNxXcMn3g9bU",
  "key3": "5K97TXQtAAgBnRBhh31ZgoTE46CraSNXr5zgjYiJ2P6iPocGnRoijutCxth3C67jMT8AyDMAtR7jKJP2KSVbUXAh",
  "key4": "5cUAtkgWdXZK2TixuaT6j46aq7mNuqEZSt38XQdZfxXPXewdzHaa3NPTrnyukJif2t9jSXt61Vktq5YrVPQJfAS6",
  "key5": "66iYh1weBJMjLXGV3RMixGXoewxxi82fUUL782obhKsPCpFCqVuToijTZefRRbFnE8d6zjiSF32cvxAMqTLjHKG6",
  "key6": "AwBCGunbLUCSjHKNsPdjWcfZpKpb51aoVtqz8WVrqp4g6eTs5zJHASZe71hR758tSWkXw71taXyejejnwj3XnQv",
  "key7": "57VAonE3JSgW1WV81EChtMCNu9PEXHknNvnLxfFmgHYyUMgH4fqCdCRfoog5H6ckAQPByN8JZNuV45PoctBaemei",
  "key8": "2QS2m894tB4AksNSH8CDH4taFXNDjgd8YWTV2TxsbfndKjZTciZshyCvA5R5oFuw8jZeer1awwQGVDLxq5JEqiWq",
  "key9": "2zbMh15XivjeC78iynspPvik3u2airVLpRGeDF79RozoYjAaLeNpNjdCwAXfW23GHYr7oQ6DdWv7d6SRquGs8v7E",
  "key10": "49bLVKAYY4kQqvkLrbzLiiYrVhP644XdgUX3V7K3nhwAC96L8sBriC13dUNbH44cCtp6M7yFeq6H79xHUhoGbSey",
  "key11": "QcCQYXTfvnwGFRNmeKy6HUcTTNAVFMPB1JgDL3uN1MNvfvx82PbAH1rMiPszo2X7FNJY5oaL8q5zCsyMsSNrksn",
  "key12": "5xG9wEKgYupzTUqTmDFWCet4V6izxutGYotyvYYBQjei4T4ohiQE9nxUto9TpeqaKHd3fTPk1dCmvXXMedQgckDg",
  "key13": "33ecUfsNr9hcpeFCnyNGBRedEn87Kafjy5U62A9gL8Aqe66SPdGw7vzgEh8fqSQWbaugi4fuUSBE4bGW5sNoeE6P",
  "key14": "2vTNE5NqwyVAkmMyzFziVc5REbgYwCHQFbZRJPhSMSzysaGxBWGBFvKktVzvePAjyNwkWupoWvbkDM2Lyw7MdPG",
  "key15": "oZeKcMDpyej5NQ6JPeQP9WpgPPTxVkgrGXUK86sDz3FbnPkRY93RxHbfM4pezrQwPKmu1fKfV7HcuJRsfeEqX7g",
  "key16": "22DoY5WyLJEtqF6w2xJk8UcEhu1ePjTkgtrnQtFzzHChdv4WL2KZEpNBeSjxNmETu1ZE2LA5W7u1CJaaN6bSnQCz",
  "key17": "3uw5jV1nbgfedyxZRXDCNhyZubzHqzWmgFCQUXU57CsuK1mGxDzXHXwGLjDfwRhtHjv4v8VZwDJadBxPk1s7dBq7",
  "key18": "38uWcRDY1rVRgokULw6PZQyfsscGaLUQqkQgdh2fSrGQ6XxkBWYTa9g2nPx79hdu85k381DVYqH9ZuqH7vqxtPXb",
  "key19": "2vxAzjrmHhmScacTo66tQijYQ2299oSXkbzZpfPbpfy4C99xkpaNSCzsbTK4oE6aA8yPFRCqR96JJxYraNaJTUQU",
  "key20": "BXudt18LpiBJ1Zc5B24344HuGjWYGSzFkyPMfc4onewVYJfkjUNfobCAha7KWUPWZhMu6Kf9bqRmcDK2jsP6NS6",
  "key21": "4pyrD989Lc8KtmMiUeiTq3UmKAzpSRNdxmbJFmYGCKLA7f8rJFiddaqoW8vCLDpMCjkNaVmFauX2WAZuVzp16F1p",
  "key22": "FJsyWbFX8WaTYNhzzWbwKrJuCJh7YnvsgAn7RyStVfJKMDq8ZLPnWdUfb9S9uATDuua5j33vfuwh8jzCm6qdE6Y",
  "key23": "4vMApHuC8NscV25KQv2S9Dg3iNmCQJycngSRUnAorHnj77uvNKZ4aozfVtrYXnKK3tzTJDRve2z5tacYnGt1AJZx",
  "key24": "2NyhciSFvqsHb1UHKrzzHytN8ZSt4ELFoJRsmCHWyMgm4ecx15RqUMBpp9yyJVBYBYyHbhjhqP5kFcw1M945K44b",
  "key25": "417bfBBz9fPykELXvEGaCgfT2hgNW279r9Mue6GeZzhz6cw6mcbnd8PUFfQCumKXnsHvc1axHU1c2w5xcgyh3TSC",
  "key26": "3SCGCzcx4BxRbKFKEwPE31DGEuHeyoGyJJdxCWWTkZ5ewEYVweVpng8tz7LYqcQtFFv2VwDxBuw5Hs18zKojFsqG",
  "key27": "5uBb9eJ2QSZJ9CUbN5W3PD7xzFWG7D7mCDRck7ErCYndKXUPfYkdScJv86QS61quMsUQ1V3jxVz2CqtCuWJX9kk8",
  "key28": "4xqGzUY1CqxFZaLUzwJ5bsFM3t2dMhctfXawdJrXRRg9jk93ncVdPcmKQsRYhizhyzHzXhvRxKngRrL6dWXLpmFX",
  "key29": "3e3J9fjqWUeXGyrwiAqg1TrHvtEosq5XDK64rPhwv5ETAJdM9R4vFrqdsd4KzgCwdhtkcXim668kqHRufDNeAmcj",
  "key30": "4oANoT7Re6xe1XSSvhD8DRxpamAqW12QfVphKrKE5VpqgrE6vNZAaucVAJro1GMTwmobURDc681og17cLCzPkymF",
  "key31": "b8GN5nYicT68Go7A2zwuNrkiieUxvNduaz5tCEREgvtjLDQi1gEZqCBZemmgzqh3v55J3G2vZKaB3fNo1SERv7o",
  "key32": "4DFKJyDibjdgdEE6HhDCJRk7xZqafVXyuMimDQ1gM1wXQKzuLwWU6hmy8RPLvZrMzvSPq7L3rrfZrq81SiRRYECs",
  "key33": "Rd2RSVmzCEK7anebh9R7RNLXBffKo64qrm2pucSNXuwrwhphZrJMhjumnHmZe4VSUfPus8a7sfuBcZxV8TC5bz4",
  "key34": "b3oiytBcr2PSd6xtXD5ZW7TcP6qQjG7PpFL8ExkwnSVEmGzN1dRoSsEpcJGH4wc5vFttKkNQj9i2zrti8ba7wWy",
  "key35": "2vSqhLSBjWeVFR5MxyknBJksbXGsTReDMEB2o3LNPaSQ49FpzZq7vJrBNBAmtxoZEH5ttw1FZ7BG64fFLErVZQzi",
  "key36": "2WL7Xw97B2LNzPdKMn1yjFef6Wy8Q2qj4vifLnH8XUddKacB7XLi3upwVpwoU6XySXJwpqv5zsajcYwgYjLnETwy",
  "key37": "2A81iC6zekbPQ7U3qhSNR3fbNvYu5trhFCBL3r4y6dnvb5Y59P8CDWHGdk16JHmtC6zVdXFyBcdfmDZC6XUAkwzS",
  "key38": "snmzyzzxa6aAeY1iERSGo12H9WrLGMpNivf3X1wRN3cYSm3T4ueFFU1FxxMdMu3EWVDLyr5Hpnmc2dwwN8o1jmu",
  "key39": "4D6VpRNVbXBxJweeWiAL6Pn3KFSFo9dJAvryw3LCyRAFjiFZhfWmfzqLDzfKqHHsXr8KF2K43ZNmPSGDScd6pnEB",
  "key40": "yRLUVmSZme8gcbiHiosoJpVkSoZknYZVzBTQgoZfwWCEoZzoBkj4hbaP3qzcFF3TcEY21drwrvdv3PiQrXYoVtU",
  "key41": "3ijdtovc4CkK1utgthxpV4esBus2aswQe23NQ8R2FttN3q2pAirQXfg8Knf2UY4mjvXxRov5mPhKSEkhujcdqMj8",
  "key42": "4E55d2gdCC1L3P2C7DTp6QQVLR47ZbzjPVbuKYWKzrJAdjE1ycHmfDexsyfdnXtzpRoG14dU8JDuvhdXFm6ZPwE9",
  "key43": "3KRgmk2ebNcVQn2CSzQRshziLctu6f8TM4cVcMXCeNontPCRiCKLBw2VDsKWK3KrXkc2ZxP7vhDNRkSJpvgdaUgM",
  "key44": "5NbLQusNPkgzkL4hKLHyRbg76yfM7kaZW1WeLREYHsMp3zVqUjPPvUqwEJWaWECsNDW2g56dAu4r9XXqeWjKSCK5"
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
