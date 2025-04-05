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
    "5GWqFVe3i2euoPjis62sptEMDy77eQacB58Pdipk6f3GTattYCSsX6TeBu7dc7kLmPXcyUnnmD6RsY39LVte4EL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FouyYHAC8itChtirUsZMshpUdNbREHMhESHBX321R1jmRsvuK7uT9GU9xFvNjDnaGGhN6K38Ua7GrdZnamux6p5",
  "key1": "2sGTbMQvAVqQAKCMHDDuaQghQPHPhDnX9agEZwWKoXUYRgQLuGHpNi6RzpDL8bs8Y8HsFjjw44qSce7gZafPXMqr",
  "key2": "3RD9p575sgt5x8rr6uMu4R8vxqZ9JySYmLMf2aM4RHzWdekuhgCp2HLfFcJt6EQa9eRN8qLvHe8L38G3hmksRrFi",
  "key3": "2jvDzyyzT7UwrrcwnwUDzbARZRseveLiWEP3qoSqkRVXWcZnkssVKjPGV3UtbL5s8g2AZ5nN1xLTFPzbUFRga8Jp",
  "key4": "3cDDBpepmnJ9ozZa3UAdGPEJYTqTgKQdiVoQogSUbKNuTQDVt8Fjc2m8EJZuQyQ8B1bfWjiiYqQao1VYEbgyhdSK",
  "key5": "574fauV3sotDZ5JxWhM6dCCmh9GwyUtDg1jAPL58P3LDTeK68WG4p9gPP7YMY46B9ku1e8CXtaerwabbpGbPQxFJ",
  "key6": "gcbTh8Zy8z7fNVcSAwbX24whVx5wSsG7jWWFtq3shZAK5JXTbEFTMSr3BqRFdpGJVVN9C5nseAFksE8V2aN6Lsy",
  "key7": "2f2t4sXRejxiY8JiG5pKoewAMaZMk8X3d5Spt2cV7S4LCSxbJuHnyrPNrjLGphJDtaUJxhusyvXwWTGyqKm9wMNA",
  "key8": "2PMSRqQZuS7XPLvUeBTT5nZzAuXvg54nW64sueypEEZAXGzDnEPk1EpuXEac1DnceJuiEKgkPwhZHSewDopTKK7C",
  "key9": "2QpagZhT8ULW8SywRL2SMpfc156Qm3mXZYmry5nFLcRpB7QyKGMJCpnkfRn1sRQEiBkxYNPYUbuEo8jFyCXUB6Mp",
  "key10": "2yc8UbjiCsdKXu38rZLFUakBRKFbHFpMfVvc58mZ5uDnJvkqXJib7uVnWvXtNVuhWBryAgjvax3v96zNjfyWGNYY",
  "key11": "3YC8YZpChvJR5n63CtEeSSFEAtNCeqr3zgugaoRfN4gDZz8ESNsqzSxGhbMW96TrPRdU1Bpimt2t9sEH1EuyyULz",
  "key12": "4qb3eoN37TX5o4NrydAG59TQXd5KSB4pQHWk4MA6qaADKZGfHmKCGCEwjJ3Zx1kHq73ZCESJkhF1ebFePd4vRHkm",
  "key13": "4p3Y8mQ85ZjCgBtGVy1PFyBFMPfHthMmEaPgKkZMCiMXmX9SSRH7jTeQDXqraobB7S5rqP9T7rW9SgFY3aZcAYT6",
  "key14": "3JprCJiEVR8AE47U8WTJfGdr12EHaZvEvpoZLSmgz1YScN7ahRdnNcsmnVt2zRL4f7E88ZJEabnEXKbYsuZFtNKL",
  "key15": "3o2TJiYphg5yeiohu9BnaG6MK5MERnLRP3Hr7KWDVfnVbfhfZpH3B1i4QgZH3oAS74XfdTqgBiVbqCPmY5UxzUPy",
  "key16": "5nCxGVRgieKnYMuMv313ba4dbtoXV9Gg4eYWRtGU2sqhSzmKQ48f3sJmTTXAVpw124Myoe55m7KMc9oV3XFoiVtT",
  "key17": "sbHx7MCVzbkqBFi7akiGb7WM5Thoh432dCH3F9PCCUWbNUue4e63atqb9F25PkiySUDV8pWGBmSAK2QzsP36uSz",
  "key18": "4XLZpcdd9a98y1KLDSuTEASyfkcDQHydGiQeUnhhGBdZ87DA4r38zpQDFzcutZE1WA3VtfKE23RZiZeDzZEKJX3c",
  "key19": "49wzgnPrmMfRfbUtASQ1rbWFQAwTxdcRYJXP4RdeHtPVy3syS5jvEcWv5hgPGb1MJ5jvUQberh1WjQFajYEHf7uV",
  "key20": "3kjc8hUsYjby1EDYeUbtV3o6EoWNjNB9ECm7q6FfoXAhZWhQT9Ex8Nt3sG8i2G36McKgrscSycJTd7ZJkXFkyGQm",
  "key21": "28PRS2MJiKLMQEe7bAHTRQvHWEgxS79sMiugLQzjSfcD1etDoayGtRNp5VyfDeP619cSeu3PDF1Euu5tJm2TcvC4",
  "key22": "3gYHbPVYv2mZHrVpzMGd98wAqYtCpv2XTxoAiroS1tngu77uAxoZ9KBq8Mt9SeAsNnhUiEYy2Aa3AVVRBZqbvVJr",
  "key23": "3GrfbutgpaWR67oEDwaF8yaV2SFPuC7UY2wWjNEbEHU6g67L42KrrBkmQivkheseXnAZjPpWtHy1JUtfS9XBwM74",
  "key24": "3RSp1Fu6UvujeJSWmpTvzpEb63AUTQviWfeUVm8VfBFwMtJLHeUeRvVUiWd284KnAF8V4oNSgDawTtLWryQnZv99",
  "key25": "HvxPStcLxrHBdNc1JcrcVDGNqmZYtNTV3pnKwWWxGH9wGXxn9LkbDggXYeJX74qR69J18E9Y1MgcrhxJoXGZqzF",
  "key26": "cLxK8aToHUHVz3wvFQ89oQJV6c7CZSApCk1mjKJACHbcqaVwb9Z3ZQa6EBRfroys2nUrnZ3UFQVKDcy6kiodaZs",
  "key27": "K5v6nDcupcUhBsgZeH3G4pcnHcHoH4iZzvXyhmFgtGnXBTDUAb63yr9PbNFVkJhPkonZRpWFFj32GGFAA1u1YHJ",
  "key28": "5x7yrQ7Yd62FegpXqZPFg8ZDnvuyV9sQapo2NyWLeKsUyrNGBLC78P5umPXCi5iJ2vXHrjaco7NUGwTCaNgifwxf",
  "key29": "41f8gFuyZULEAr1R9VejWmZSMXxizaAd4x18P1MTcEJG7hEwJjus7aGCbGGMwaeyNKVgtMJYS3FkzjVzFV4NnsgC",
  "key30": "2LPTnyv8AyLy3JnXyuFcjPsHKmEr9dTwdBYVQjDTeREZHG12c2oAQPw3kb3N3X5wDUBrvRF235fcHzSQJvk9xFSp",
  "key31": "3yviwwMTJgtESWJHCxrkfd4CYdiQt82ydxkPxF27PmvTT5xbboSibdHocSk19aHVX4g7GDr7qaG8VEcnr1b3db41",
  "key32": "2VW6KyQttikgBbzYWXv6pxbfEWdnFBeyZkWUaan1i16VUQB6AyNGed6c9uumbkjCeL9GGNkVYqLmWRm55FD6bUSH",
  "key33": "2M3VNTbGJBRY74D4KjUr3voC7SdSWDq4UEqZYDuPDEAV2h6ohZangS6X14c9ACs5SMxaXnywJTrr4pSyHPGSCkWT",
  "key34": "5Cz8SgBDs2nnbckopyH2s28swsmLzQ2dSBinDD6yzFX26RNZ9AmTu9VpPh5zoi9YGWThLdThQfSyE8Gz39Y28nFY",
  "key35": "27Mh6v3d384K43iZtgDjBefDiMkLn19dof9M4RpK16F3HdriyydjYiFv6HBQ9WYwpXMrvGdMF3EqhKTDiJPVT77b",
  "key36": "iRKaUUtqezQqEnd7fDATjmu6vRUiWPCB4J8E7SttRXgSLGJxhpksHhXsxPyTmKvfG3ZPCLmAzJMVQVrbbcMChvY",
  "key37": "3LwKtiagT2PH6E2kQPVWEu6uGVM6i82HvvLsRpi7Eur7mUiGgJ1XGQ5LCz6cgJ4zGwqErwhTYTKueC4oX9aL7L5k",
  "key38": "4qh5DjbszVGX7DK5emSnZSRg3TnSm6cRPBZej4vXaXQTSCycQ3QtS4zKBiVu1xs8XdYBKf1prnwPzyygpyVmdVbV",
  "key39": "5msvLkVc8E5y8otwiqcqESUphQEQ3QaNgKe52MSrirxFsJpgxf2uG1wKqtpPY8x8SSpbPiMMDqUYXxpHmZJ1gDDi",
  "key40": "CgFWrFVHkV2XhxeVB9T8hQR4aSjbV6oLZzuB681ko1KFoXJn8aVaWd9k5CtFtySdYZuFxp3k2rFKqqSiDYgmaM1",
  "key41": "486XA5H8B7VesZSgqSt2pNESf2WejgYBDk1mWwaBEnE8daPopJoPUkgVzFNJ5Yrx6iFVWkjBYLxzTaUbpahsGaaT",
  "key42": "TsnBu97kxYcLt4qwRqUiD7impwcHfJEUmsxNwzBenmvhkV7T2HpCCQdwXL8Ea7Ks45B6N6utujv89ZNBhNdAjpG",
  "key43": "2F7mXCuBWDKsarzUCYekAYw3Fo3CoPfKH7pgeyMiL7xxoHA6fQH8PxnPaQt4qwPcKHk9MjeKC764LyJBieWU2tfa"
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
