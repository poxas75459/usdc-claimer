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
    "4oyCqeAyCUA3LLbZawEijNqaAPwybaopfwy3nuvretzeFgR554vzrmiR2wU4RF4Kdby9S1UfYp4v3ibqVcRQSfLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5izFfHmps3fmDBxy7ZDpJCWwEqx3HMAD1wyGpXcMZL2hz6Bn2D46caiSCxhcD9hokVC6aQ4717QF1Qh7WMtgy2ZJ",
  "key1": "2Ww7jK8LCgjctsrz3htGGByaxc3gshXsthQCTN4yLzpLWLEfSscPnXCqqbMCRj1rePPXZ34orQnnPDknmSS1MfBv",
  "key2": "2HWPjRQcK9ExNc7Z6oy1MTojMMAQCH5qjGsXoGa6Ktm3CWS1aZQWzb25dZLoGC6Nc4t5L6dCg7crUx9RzfJsBW3h",
  "key3": "q8JjhNM8QBBiUkhCByT9GzBKui3Q4bmbMx8ngBqvW2MJrTsXuSoFYpbz5HXuSvK9JVPNyEvXJZdgww4ZMwo6Xvm",
  "key4": "3esiT6GLDDXtpyEgsfZK1756wZHDgDMhnpwHgeTYhXqqT6fNz1doFg2E5JCCXGnBZFRo2jTSK3Hxj7eKuz3arwxj",
  "key5": "3wxVGiAVaZKzFtrNDfSfFENcqkG7qyHh4gVViS3LsEu7CpG6rAEFtZ4F75fy8y6gyRcRshvLz39mKw5QbUdzFXCd",
  "key6": "5tgjpEUHqq9evL7M2mBtPgBG1SPKDJQFZDuSfW44BEYD3k775jxVoVg8v9tWXXuMNUgAoJSDGkh5cWbokZrdHUCS",
  "key7": "3kxuyVv73g7F8TrGSHKDaABgK3FqoqNnWG7gDPM65AaCyRf1wN4ZDTQCf248cZAJUuGt5pk53Z48Rwfe1eRMxDw3",
  "key8": "2TXFBAy96xzwteCthoPpVEm4QoMNGAY9ubNxAmL158J6H1bnKHo8w7R59aVNhnbc1mMF2FnPxJzQo54oWEqVvz32",
  "key9": "4f6WKJQWForGRMUC7Zpf6fqWdmt9DkhS95GmhgrSDstUUYAWSbveSCDa2366T4dpERvSg2Gnrg5UR8vqMpPcGy4u",
  "key10": "LopGCYojA4e6b4NmWFHaST92rheirVNzujbUhMpfU1MBpvwuoumNS98P6t3MEbDTzEUHjztJHYnBSBW9WcyDhJn",
  "key11": "5ZindoUX7dJFeiM1vKMwoLjzkKMe2aS6px6QYCcfK5utePDeLhxDTwDEFGx9mXizt3xr1hmkqn7tChFNoNf8yho9",
  "key12": "2VYJsNr46MUWzETmq5Z7hyKvjqcuUk9aVz2VgfdmaH6fxav41jvioJtY2pUEY3BXBSw4QU7nvaxw4sqK23iDQojn",
  "key13": "3Q3o4exBgdeTt2HbDRwPAkpi277SoJAzgmmSaxzcyF2FnrXWpKEABNtpK3azJYRJTeNjVAr5uuFoyoXLQZULWSuM",
  "key14": "4tXdw6WTt7FrfGVC3sjL2qhzdM7R5846nt2NQFtE2ddJ1vyLfPLqKuECFDUokSTebYEnefUhUrh61ser15vVQJtu",
  "key15": "TGE8JMm8hCwMQJ6bLwe4w4UiVDvuCuRHkDrCYSAxHvXcxaeRNKpYnu9UNfLQmK3SNkHweqeDXi5Dih2caQsWJ3f",
  "key16": "Cne18vmdLgkrgUEneVSaRUwuEGQUaBEyBRDnG2kMZQRL3A9gr348zY4H9VtwJ7E65DR3QsEKAqJbkCKnW5yQYkq",
  "key17": "31JcoMtdHCishzz7WamvQAYjniSLX6mmPjsMk7zFWMRWHNQafyhnXdsL8NRnSmrNgeuEMgjYeaCQE7zSaUqZoS26",
  "key18": "3tygjNKuzRzNJ5WvRuFFfSwTKaruEvR6NipxMtKCsxPerAf29TDZQPjZdfTmqayhZSKJNEnXkCZKC3x12G2MgSnn",
  "key19": "4jvQtbGBLuaHW1wzLL82Di588proLJZurYxYkaHd6zBg8CBUc28BBf9mFjZ8U2A3rZ2B97WdLumNimVTCb9dvQFz",
  "key20": "2k52JHcERSDsLSfUunZrXzwsDxy6PCEk4gFRFqRsJAGuFSpuMypPWw1HpaKCakmxVmX7ChQTk5ZpvG9db7SFhPUs",
  "key21": "42zvfkLxrvcDPNU49tDYT5CkcNxTTXCYXpRwQs4LvqnsGmA9Sr27gPwCdVbNhTZB62spij6N32J6NKLEBx3a7jhU",
  "key22": "4ysbztSQRhPo86WhsAVpBQkG2KVSP2ZvdrSaJPi1o6AE49o87Gy8V3Fur1diV4bigYyF9RAAs6kKQLnzKa9msuGv",
  "key23": "42GDFsL4X99zvNMRvdRpMsB2SYHxEZ4tTcbXC9fkZmfmK8m7pQUdJnnAVgDVYkg8fe64S3ehKcWy3Xq88cR4ZaKi",
  "key24": "rTBJj55NnuvXNKryiTCsxeNCA9sxE7fZKyJgTWFR1McWT4BoKnfukjdWKeGhSwSTuhYUf1StZ9zzXnrfZiWJ4vY",
  "key25": "bPofH2Pv85uzf7hEwgqYG7oHC5LYsKkpZcK6kvngfvJwow9CxuJcbh84jL8VkxpDdpAgFvgkZZRUa5sRXn6KusC",
  "key26": "5yXCF1qUPW9wKg5b1Sw2TEWZCP4ED1rJY2k2rwTr7jwC8c5QUubVyvUiWeewrm6JBBN74aw1KZqgPHsNSgJPyDFg",
  "key27": "5oZXbeQeNQP3D7a6FTnnJgcak3UgSmnBm8R2bDG3z47VgkyQjb6WcJ17LsmxWZxokxHRJXLNRVtYP2TvEjGjQLgk",
  "key28": "3bjdVsknpueRdFJxzwCJuq5tt44diUNAsSLoqsNgdtALAREc5RbhJQvKEELFsREmC1xMhhiY74FXvUeZgsxNSWhx"
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
