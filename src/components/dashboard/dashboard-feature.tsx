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
    "4u7nHXU1xBneZ8Yq2u1mEwo2YTdefBV6bou3EF6xzmTcCwJHxHNv6CveCi1KCFMPSe5Zakz1fT1kTo2byZiHYWrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sm89N38KMP1ztJp6VYetsvF3ZhdxXFxFmJY139gFHDa2hrkcf5ezCtBktxBp79ZHFsxeVaH1EPpT1pjnMJ7obvn",
  "key1": "5ow21DTkHdz6jqAoSa4A1z5JbKWuAsACbjrNcUBoPcTM4AGUBUviYGrJ7kNE53aoMJnxLXsRbhgQqLWSRHD2iMwY",
  "key2": "NqRyT8K52XqENRuizePoagaf3kMJyn72mY1VB1UPJVv6r8cUyqDHqRREQ5xKfmXsnjiH99vVaqTrPKJsPTmU7Gp",
  "key3": "4osAwzwKRNBuuRHwtR6wJneYMKjKY4S9XfkrLvWPCuak2ytab9kTU3uLSKES2vJ18wvtR52qVgDnzTqBZwgQBtAe",
  "key4": "5VmYLNzZySzZgptUqu7jt3FH9pPXqqnRcRWTSPpmjK4ZiRc2xyJeDQH4Bqt8jGGxZN5x1LHPonAPDbmr96SJUk2d",
  "key5": "2WTweavX8YLz5kitXockj5gPSHHLtrHtxvfE7QvLfZF2dwvxTpsVD6qENDDztu7nEJK1NbbngC3rNxZ1iMEpZFae",
  "key6": "3yiVhtSu97oLJcKJvJL9DF9GEWDaKjegNRDBqdZve3fACyNvAinUvT6MqVH2CPq2M7q2azAweD4QSEhkJtvaRGoc",
  "key7": "4pqNdLxTzsAkBnJZoCMayR99bgXihTKXvMkX2wkRqVjhFDcbKCSaTHRsMpmKJoQbW3i8ukymeHydwakFeygLv8Bi",
  "key8": "4uPZhqcLQpBV4jyP7UA4ADpE1iv3NkTdxcz6NB7zBqqgswyYahKLK8Vpmd5WYTjCph9mnQWNfaUUd4YP6SKuy7Zi",
  "key9": "386gjdfLWGWxWHLaRaN1FdeLzn1T5sjtLZYuW5xZ9akWbWzBGf1JL9jz7ykar263Br6A3d1XMk55u8E3PzHrExSQ",
  "key10": "3MTDDKPJ6SbcuoKqpAhG8ChY2m6Rpm5u4BUDyibXTQmw3dTm5JChryGQYSmB2YnoG96ehjfJGxEZD8GMxLXPEGG8",
  "key11": "56a2pRJiEtwNfRs6mKaKKSSew3Bt1hngP3EYq3Y3oaaqKR9LACkasPL5Rpgd28Z7V9h636a8Ts7RutWyEUGd4QBT",
  "key12": "3nKc6mUJ3BcVFFGtKxytidM96CemJKjE5MhTQNsko55yJZFmFQ5Q8sXRgJqs8wojkan3he546g8ziPhNrAJQGcuc",
  "key13": "3wyJ6aJWQGuWWzSBRdNWeXwBSWR86c7nsxsvzm5JCRNL8rrJPfSfr8KyACDtW6ZNKaD9EoFxC1vW1w2a4ukrjxFw",
  "key14": "TnVuYgUChSMuAnGrt8E6NbBacPpJGVcBn4ttczH3aPKt8oBdEGXbGusc4iySkR7icwxY7mmcgxzAcDtQEcgduXh",
  "key15": "2wtoxgiBRbWxNPcUaNp1Wm8wP9jjktGZNGAxRRxx1vK5S42v9bjSUX9GNvwpZgGckmnhMJyenCUXu7eS35fRp2cX",
  "key16": "4abTSu4fevraZoRzmJx569XfpiRCgkQUmLoPEQWGEvwV9ukS6y9ScxbBJxfs5frSAUR6fbv1AFFymTWa1iZRibVx",
  "key17": "2XXEVWBDto1keaw3iUtJuRrxkK33SaeeGebUNG7LnEQVJXkn76QyRep3C3ATH2GyDj111MisjvQdhD8nz7HjDyBQ",
  "key18": "AvdJoHPP76vxKhubyosmoLYH5nJ3KSNstex2ZHdgS6BYiJVhQnRQ9gJJ6Mw9ZYczypmAWHSvwrWuLGss4ASnmWx",
  "key19": "3HVhLdj8mBHXdFsczdD2UcQy6UnV7CaFxx5274w2ANnpJANBrQNMkBsUonmFXpb7ZVAHibAdSysaUwcLDUYfZmKm",
  "key20": "4NqbPUKmKV2RbkrUTFKqqrcmXpAP55hGQwKLEs7mrGBcNZbbomF2GeCVBnsPHvDSUavTGHRCw9TvNMhY3FbSUoTc",
  "key21": "4JAgHAM73DBDCrN94QEDQ9hgwwXueMjwJEKtnMiHsrirF4zQAQsiRTrTp8f21H8mnw5qumJ1waWiJv7MJ2AN51hN",
  "key22": "2TfX1gZcqE5oieM5Dpn3p1DXmRt6haecJCCAWPRBv8CwE4VxwhQ6gWmcyvU7hDkwYRJYh4WRDUR2Xv2jqkrkeajt",
  "key23": "5rTeXHW2NbJGW8dXS9TT1LdCsa9tx5H3YWEeK87tRDj3Pq8sMfzA1AE8ScEWZFoefZHCg1EUmw7KvaUtB8os5JaC",
  "key24": "61FMhqU4P7ohw2DhU91KdB6qBBcdGmzseDRZChwrUAGH7AtXZmFPgVN4Zw2GbWwLykFM2BxV4aFiX6rLg7tUAzY4",
  "key25": "56mXBjNcsGCQWaBMy1emfgJvwSb3PwVDykhPFN1Z6grKa3f1V53byVPpSEVVxAxKArNu1DaW1TSL1VhSUmznyV8j",
  "key26": "3cSDHFhZT3MoyNQVbcRUNsGn8YRikoxWfkpaJHJeGPs4ywQGCp3kcmmdvPfhDfw3xypGUyuCiV7XNX5Y6pnr6DTz",
  "key27": "2MT36LwWqrYEcBUMb88nDsCU6rzuGsTG3AMincgKxU6k2L3x3zeLUXcZdFo9AGyqgZNVXhcWK6HYNxsqNjGiesvN"
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
