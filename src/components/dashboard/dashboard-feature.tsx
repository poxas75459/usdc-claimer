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
    "3TjQqyKWqReahE5juWCTizWmBnZYQFBmcgoQsmWR8Gd8WUSuiDpzV51gfYtTLaXnbGeKCXvNCNmC4SK6xZtYqJSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PDLfxjEt1E6BcbDKkor91N9Wwf1Gphk1A2LpJW2dtHCRRdPxmBM8Y8xkg6Vp9XLAX67y1iT2UeGJTgNqwVXxsXR",
  "key1": "3zrqWj3PmQWYVaM9KS1DriB886oTvKfAc8NxZkwyV7LpBtLa6AFrjuswKv1LYBkqbTPKtLUgB8EJPZ1xPN9n1h2A",
  "key2": "5snRARiGw6C74Qr9wYS4BRjfVez5JYD26Zi4g8adUEHyg4KdmWJy2koRMSnndRC57dGymY6w53PMzVn4NjG6Hghg",
  "key3": "63iQd6gWrW5MxCb1pRDRvDBNjCbHqeJVWdDHMZ2qMd5s1dTf7dfampdV8pa5wGsYvAf9AexaaMJUz5AseVdj38cc",
  "key4": "24SLxWaidLhhCdZQgDboovbvSE3PLeiWdrLHWnqfMuWXqEZGoz2cjL6ixSezowaBMfv4DS8JrgHJQbevR7819SGx",
  "key5": "2684VPCrkfXvveKzDJxvHsrEJV5buvSwviZwpdj8Tk7mBENUKPLvK24vf4XJtRWqj2DvWRsxEJZ4Jw2bP3JSNtmg",
  "key6": "581ScizuktSMRWMi3YiHAr7b27jF36WWLfr4ReXJ4Fk5ZgvPw8N5upcvarDNDoYi5vtm7jdyhVDZktdA5FuDY5Xa",
  "key7": "46i9PdaDgyewnLwi6PQ85wXXKTo7vLXcs7qFC8FP9igSPQN1A7KAk8XZHaKgr7SU8MqzNodhgj7jk35ZWN7MApmg",
  "key8": "2TLu7qz1TR7ivrq3t6opBnZp79BwaNtyjyVCkzUv91xbhf21RzzvaTVDcqYcAV6uamB3URd2GdEHDFjVwLT9HomN",
  "key9": "2S6FC45LygcKYxmQwor41mSC7nq9dULL9RvfDGqsr5B2jPDs8juH7ZTaYL3EXniwJkAxmAUY5TZcrNGZ6agzTswM",
  "key10": "3LtswJ8PkKA2Yt158beM2WgbFngEJkARLhFJqceS6VmJoZ7cVYyFSZtKYmrMzgYeZDPxHMz3Z6WcnZm2Gq6GZskW",
  "key11": "2fPLJm1ZyB1iQJdoVTrsHWJoci6SbYWUjdwVh9uvZCkt1GxzpX1ssqZYN8SPTUDZKEzz7JJ2QD83JkJmotsB9x6D",
  "key12": "2zNypZWdM6VKdkyp1oiUSGnC6BRagruSxoUJtwFoVG2YMSZsmqxhjanNeXiG5badx9tKfzKUouv1ZLdsuCHvXdJT",
  "key13": "4axoQZJFwsPTp69axvev9SHxNfNHt7MjdP3DSDkmoGERpDv9wZybJxoLXMCKt9ZYJ3wgXAmRKtRMqLot9oRSy2Gv",
  "key14": "2vtXmX6JSm25cWjiwQKu1JwZU2w1ZuBQ5mpUGntbECBHajtS9fefDXnGnZSzWz6kXP2g9X8T9r1FpHXDtZagitFr",
  "key15": "4Mg11XsjbHDSiDm7C6aXcCQ5fYQiscHan71EVSNW7fxcUxAeuDVrhPNYsrwUvzb3rZTJvVisXhZ4GpS2ahsh2Qx4",
  "key16": "3Zmhms4FGBer6DG4Uq9D3LUgAYX3TvZ3yHBbW6LVYJBsYRE9iy6EHPCrx74LhhsMLmru9r9ucTnHHtya8MZKJrGg",
  "key17": "3LQsQWv7xw1zZAFm2suNS4fhzvRv7m2wYLdCkkUhrmqjSTqv1ErYVJU15TG1ChWUtL5Dx5fcVyUBXq8sS7y9VTq6",
  "key18": "cbR5tzva4NiJCSmFffiZNmRcw8ZFTbp6kUH81X3GUDzouDE8e6Wt4exBf8mqG4G5ZYEPcMJmUvvGCDHEPsr52ji",
  "key19": "4oPt6nWgYpxzR3WSp8oYFrwQJyFhzT3eEhbQEb52oWTACUHiDs6Ncr2rXHEUk6iNnQRSQe8G5uvHVEJYmZXuw5yG",
  "key20": "24JariZoLH5SkPCkdACAEPNcC7tMTngQqfVPhmL6rDfakF9H7L3mup6VtBAYT4CegnvYgY6XpwnXue9mCt6wnJrT",
  "key21": "3bZhkGmZKdYJt38pfCiW4C3ctJ38TyudZN8orQKNuwbxBdqQ5pYkGYEd1B7h2SVdKMewaT9bXxc42jK2cBw5kr4t",
  "key22": "4tpuwJR8azUDYWfUJ6etxn3ZLFYm8i2BYPtLw2FTUueiVM7BMX5aSueYXuht2m9o2wL1AXas4cFwqHUb6UjAWU61",
  "key23": "3KCfEzbSnh75KiMaHSTDx1khpyHWRXNCsreuBw6hKd7japQchjwtQbQ2tj2xZqRPZAQhokVz5Yq4KircHTSpdZbt",
  "key24": "52fSKvJSfk4ddL9Mj8io4qp68mXCo5PnJ1Hbb2WrLaiK6aUrLF7JAKBJ32vLk3Wsk8TkrWe2VfJPFgGZ2w9vEB8q",
  "key25": "3GkC4svgrDAUa4nRjb3tXvzeoV2zWjAkJhdcBsnX92XUJ6mUCHsEDMt2xTaEYRcLNVVPn7fpEjfxquPNeZUyvT6u",
  "key26": "2rBsaywMWdWmeVcLD5TGB9DQy7CMJA7NjJ4fz5KcMwj3HFk3sqWkbhPJoDjw9H9oiZo1ubXn6fA228RnvTgaAQ16",
  "key27": "cv25NTJp4dRMJmg1uNcbxRDAmPGsnj1m3UnbzBwHrTbFXmkkiskBmXTpX5V8RY3z37Mrf4PcGngMx6SScx9hrEW",
  "key28": "4z9MsGowBwriwg9sRPkVA4rhovAcxqZfRjZZyUUzNFYLs3vdDmmjVVpeUKQGVqZpJ3gJpKhXPPDTiZnBUMSK8Cco",
  "key29": "45KZ8GgXduMoSfRPz8rQcikDCdmQvw7P7TXX6dWoGP3LubdiR6b6fY4mvE2C6RniLnFUJbgXF4Ajti8mN2vSvGQr",
  "key30": "MBjrpnS74ULS1PrrMJSvJxM7vGTx3yf995zqSC7NhuqAuohDdK2dMv8uHsej3LzDoagFbnakq44vCRmfeZdfFzb",
  "key31": "3aBdQLfXRTMAtcyJLY65wQcQZ1pfyeLxsgYhFWBBzgKh3kLpyxiMYWinA5FfipBAn7iMgtthUxwwxzgVboWdrH9g",
  "key32": "5ZC84iqRZRx1FigTf4YqnEWT7yT1YPSj1GoqgC6ACWNvXFSLWMiF7FJTyfSCY3jZ5wr7fD1cvA2T6VuWthXWM3Fm",
  "key33": "2wYwUMPqsptg9AoH1HosTUvHjpTuWpHPpL21RBp4b8fhKN1v45MLdBKgv1XFs4vGjsTvD7LfebHzbXuGJUUXBsiK",
  "key34": "2zbGWHABNmUM4bdQTeouZGqeHrHQb15HKgZK8PGsSnjKnu5b6sv1Sk37tpy9gU5sA1kYpCVSEhmJhkoSAymxcL2C",
  "key35": "63B3Hs2aK1DnC6WqYgQn4RCR1TSyUsQ12sHZSSeUW2yNAjcs4snch2oDtaGVUZvJBvVxubXjUYsoN95WCGbSg4NC",
  "key36": "2hpJQSFZEj1RcP5wPcpxiCEGnHq119nFWjfckV7noz5mNtxLDYE1HhsKXma5TH77m4R2naN5sZSZYGZVfZZ2qkLF",
  "key37": "e5ruukvaCnoqjnTwKQnCy83wQd2dGnPrwVvaoLvZR1bqNXubCeqnEud7XJw9CE9sMvRLYfH5kd6W7REmCssTKFt",
  "key38": "3jGdcWYBMfzETvPAnzdEFFtxR3D4X9QBvUhSqbhaWWBMM4xMkdP6UCi8npqbHaiVLH8VzkVbHRz3KWHBuf7kkE4g",
  "key39": "5dZSFz8GbU1gr7UK1xStmaEh37b7ZoVKkUgQChg4jaiZG82DguiSS2L129trWRxznYoXqU5VYUkjHyLCtdEWCeLf",
  "key40": "5FdnqGfzcStiUrh6wN1up5wgf9vZ4y9ePEtWE9LD8axDveewpV7AqQ5J2Z6N8BuMxLaCap8zq9rvD4JkBujLiHcM",
  "key41": "5xdzaShDmbaHQMBCxp5YJuw7uFeBJG3NWYBPnnmMRYfQZ6FGRYive2Ypajrwxm262qCtkvNhePeRwv6hvFw4gbuE",
  "key42": "49FpG9QiKRM6GYfuZ9UPVipsLzGTxyyFJex3WaG9KK5fCh9joVU9HWes9rXLpgS9SMFe5dABbLYPg1o3ReXzET9F",
  "key43": "zGjVv1G7Nu1P9siwxjNLattjoxiLZj5V2TsHkW7WQm5fLnimN14V3LCufRp74jKbzuzBX9GhfCu5ibrao3wCBX2",
  "key44": "5juh85s8Bu9Jx15QmRH7ypDCQiy2izUmpv5GdsP7WtJAtzziizNXGEPWPQFPzsPQRuSMuKP718BbFrv683JV4sYF",
  "key45": "FpyBgCx3wsC6XFpMM4W6SQuAKXF6ZdZ8LNfkiHcrhA3vp5mZFPcwoR3SGhPGTkpMfdPNdVNP4KHtpB4o78xZQHv",
  "key46": "5V4A3QzpLpSkwwLYN6vjm9pqqguTgqZpTUe2i8f5XicauDxwKt3EcHHCaCnc9jm5bkmUkgRXMMQHbXLYAWYBtG5d"
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
