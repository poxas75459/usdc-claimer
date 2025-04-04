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
    "3ojEcV2Tdyv1peNNGuiQH56DYm6Rz2WZiyk7njYveRdyW6mhugcGsVdLbiFwdVzfyEKmp11W7kFyhGmY8fJjFAWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UfpQcjW74GxPDpwgmpNEwb1gncC4ro2GzzNgeiJzrGAYckdE4ZsoDtKVD5yVtJdv3pg9rtkztFHonNh2XHPxKh4",
  "key1": "3kRinXg2qmssChH62ZdXAKmHEHqxZ58abqsTQkZAi5Hq65V4QVMvhRYcFrn5nVMctxmdPazr1UbC1f4yLFm3uvZC",
  "key2": "3fL1fyYiqWqWYDS1eefnXDqDD6Zrvdm7vWdrhqs3tXCX7r1Z9SuezrTVpxYd4AZYcP25bGqYR23UVGKoYRUtYzDg",
  "key3": "364xY7JKcQzAE1cMQpXerqx2fcrfRABG2oK4VqrH2nwNjtnwHeRGN3b3cuBJQoC8eX2e5u8vpWLaWhTgZjdphb8H",
  "key4": "5rUkc7gERwXohpJCT4RSpJgo2XjBfUqxrRkkGMFUgnEMnjL99RzmBzoAj3dYscQv6vi2zw9wa2spfUp27f5pmpQx",
  "key5": "3ZywRFq1BooLs3v1VwEX1NfG7jqZ8o6fTjFuigFUxup9zsFMS7QJxTQmSiahb4fXQr4S734SQa1w1dSDz1g6R8RA",
  "key6": "63kT9afgnDLzRwSimTN4b1XRmfHAbQdwVJdMP97vPCT7EjwrzmounmdbDx7B2gyw94o2u84RJgPZSxdhHJ6zLD3p",
  "key7": "4XmogJgQ9JUEJYp1zzPu13y4bcQnj6cfsvE13XxD7jMGiW1uma7pRMCkU11ktY8AEWi28cFiRZ8sdYbxnn8FvRs2",
  "key8": "5Z6aU2yCndeR7dfQtc7JvHtVKkPt3NpWdq28zGixVe99nq5XyPzmVPwvUoy5Z5oPxihqz6fzuUhSsrFCB28AbjgT",
  "key9": "4D6jAJ4dj9QNeu3JBcxAM1zTTwdYwq3ih8C9mPVXvMaD3pnh1WsdA34jHUc4fEH8bvrWdgXLUz9CJECvaWrswGBR",
  "key10": "4kY3NrMLw8CGFTbTXayfw1WEhE5LPqpSrU4i3tWoAeZVvYjVhJ9539cHiXUV2ocjW2pgFzbytfFsQXNSXzRaeh6D",
  "key11": "57SaZRfjQMMfQFKyj16eMXUgHqWQnvrDB388bt8NjJpRQvU6n5ghgUGUfuvj3WnrJdFCEygTvoXsarHwCZPHe358",
  "key12": "3Kh3cd14232T9a9A723qHjULhfSTewQRj9ZPwUaMnPjXHSwpkvFdwYPetmpN1DyEnxEjshfKryrGRdcsbBALXC8k",
  "key13": "25qcady5hE7ZN5tJtCZW22g1eQ578AakkHSucHQTHDs64aXsTT5DZmR3ixqWRKTDaCuPakXE65ab5dAd1MdK79oF",
  "key14": "5ctio1ytX2xUrPcYrPmmxoQoQsepdVhT8Rp64gChSHXCvENwDXJPg4LB7KoJb4QGKMwRtZdcLbdb6FZVYQ5bPNV1",
  "key15": "2wsWTe35QgQkt5rC8japPuv15yJ98VePX3FsKL3BquBEQT62zuozeppdYi6AofCYZQ12J6Fx7RcRcSidz4sKNT2z",
  "key16": "5Vp3ALEiYnNUKjVhzW3e9icia99V7JBLrQE9rRur26utYYaP8V3hyXeTrkWT8xnDtuXRYLdMwimdzUCdwsdG1oQE",
  "key17": "3dmMaUQXpJ4NDh6zxWotJowUm7EkwJKUSbMYJfqP4BR5eU7m1LXWeVPbNuUfv2bt212e66rse7QapDkz5PVva83x",
  "key18": "JqZuYdsYTq2dTvuefGhwad3FeJ9VotZsWAc5Chok392HwSGPvwGM55s7XUQVbCAoXib1t5ZMF8rwxqmZShuXNJ7",
  "key19": "5oofdBzoSL9KtvNb4iTYeUDKZLrf2nLS5mVV9csJRacgb7QpdTX65WZm1y3UkSHAHXbsCt1927AsVQs1V7pEpmDT",
  "key20": "2mKMHRbSpkLML6kBMxxmiirmBmT7PY9zMFYmGkL6c51XFPtmR3gLqtEHLpvRuSUMFNB2inNHJjwnZpNWtWfJ52Mo",
  "key21": "2FCEyJqENV3SbiwwVXCHRmGRoLMiMgs7xG4GWdLNdvwaHzgvXwbr9t7ez9keweHhjBTATUyHpAQQGEf32mkmrQU5",
  "key22": "D8wZPi6SBPUqB9Wfy3EhdxetHkCDj1XJaCTBmkERa9aqV3KWgq5XhftzdSw4e1h3C9F7Jk8nJJ34kwN9BRWWdyY",
  "key23": "2AbEPSjsjCYhBjgQchSM3cAZeVAnPSUfSvvhkNvKpTW74jvUhb6hR1XX988ZargrPS4VfoSFU4A1XgtMDw83Xdhx",
  "key24": "5aSHvqrCjQDRvzZgCTKPRCi5Mu1GxJxyQ5edrTgfoDUvxpun4JP74LL4osdFknxqZFxB5ZzKbWKrJCKzAr9Vw14S",
  "key25": "3PAAREUWCFL3gcLJRRXq7i2EeHFHfDcCJ12w3hMg8W32mrQsbsSWYcS3RavQ8sxpgYRVNLqRumy44sV8i5uPHKh",
  "key26": "4RZ5WPZBKb82b9PZVhdtpQjn6xKnyMREETf6xP9mv1DGyWzSC99HgpxALK4RHdZFsnja5mLwAHwfPAafmF1gJzQm",
  "key27": "2ej4dHtuJsfCeBJ9hDFpi7Ui7DghpKwRdmzkEbmNnzr295HAX85TaiHu5VzefF9jxE5gmq4LD3HHerTu3oTjPnmQ",
  "key28": "3CUKc5U63MrYpHdEfEsQ1tmWHjhKKKSvmD45wG5dzJ535zXc7s1KrM3cHPDqjq3dELG2CQ6KC8fLH6QWuxxnPjeA",
  "key29": "KxcoX3uqr8Hc8Cx6nNMxaSA9B3o9eFaDDXaxQUAkeiN1SRzzvczhueqA6oaeRCcAtE21oF97S9VCnCugcCGhDMN",
  "key30": "4FNrySeJNKWdJUKEDa6Z44P9kuddxQiF8MVXVzTnSwU6jKrDMywdWNwEdgiVakTchCwsgbaiyZU1VHX26pDRpjwy",
  "key31": "3u8GVz32LoGHLBh3g2RzrhNVcrkHvMRqMXxAZYYGd7RCdF6MDog82MUxDXU2UA9rxn4Jw8JicP1wPA7ohWYyDV5P",
  "key32": "uKu63wGCTxt9MRMkicuy1k6A7GG9Xo1nEKpyaRqwMwSDPvuVvaD9jWoxYt9VwtPK4KJBNrXnisUFsHkgZAN8ARE",
  "key33": "2Htryf7hhEYQsmSAceYZWM9aALoLWg7x3vbaSbkAypEypHfFb3ucKV635J6biyRAvk86E3mCX2DsRiQ7os6v2VjH",
  "key34": "23guoP2m1UKA1grPrryiz5Mi1Tzz2h1DsNUqpDdNGmcDFfWr2kGiRBLaw71pFWnLiFCYT4SYrMx3cbxPMFsCaiVC",
  "key35": "XRn9pkRB4hg8XQ4GzZRvdEvMka5PbjNaALU9oam7xNeyy9ZQ6uLqvr3iZUZ6uQycjdgBNFNnKDYGxzzzXBj3ZT8",
  "key36": "2YJkwWKdRW3nafUcn7sDNY3auFRppGeY7owU5ogr6XTGyQZxNZLdnYr62jdvAWKq2aSFkHLg1fNJjBWZGaoeawr3",
  "key37": "mBhELGoAU69EbMJojHooChWifwk793XVAUrhMwmaK8S2B7qg7iDXVUxvwkg9ss1r89hRNQ9zVp6oLXfyWkh7G4D",
  "key38": "32jLiYWz4NAtBKE6HxEfkqZLCtCUz9u1epPX9iWLa395HfTT5TjqLJXu7evNyPn68HrxFSEzJeRk4FtVUi3sW63e",
  "key39": "DeEgXxUmWKg3PtVCWmhPTo8Z4vZgzeBNzwXuqqatDJ3hkzbuK4mTk3iS8y7W9CeauawGHQUQoNyM9ivmikwE8Up",
  "key40": "4K3PhkNqj27tqj4zPqfbiQwZzwb5D1Fs81geHYJ7WYbH8oBm9ebcriFyaZ762ape6AzFXC2xSbBoQNnvpxB89WL1",
  "key41": "3TQcD3ntgj5bAbR1ZPN2itR25EPyN5DFPmriNoRAsvnEEZ2rSfxahhA9LwUQhcveGGSxAbxWKdzyUX2pC3GMgzrQ",
  "key42": "65F9QSxegBK98Dp9ZNnTAxqxyui8kMsfjow9PUHVHrFZ4YWKsnJiG3nk2DGPy9Kfvzrm3UnS2ApdG3vvPZHrdRmP",
  "key43": "5KBU1QUTpaQnfsrxWsCYVBmQ2H7M21YidQhBbBdYW2RfPCpLkTW7hhfLDVExqcrC3b7pd6vzJmESaMJSw6AiYxjF",
  "key44": "2LYXVL4bAJ42ngL8vam5NZhhCRD6UBXdjoN5yZLM5PVdRyd7L57ZzTACF5XKj2nuL9Xt9yVE8t1MCMiotGC8S6XK",
  "key45": "4SJjupDb8SKjHECjcFUwQUCSFxU1U5yYckh2NTF4EVNvyfPgfbcEu2GVENn8vuzutarttNxuqZnfHXNVxsbdWUCM"
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
