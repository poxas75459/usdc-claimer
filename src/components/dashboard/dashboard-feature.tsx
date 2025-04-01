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
    "2GZxDkzgfWNWR8sJ6UwLgwVf1ZnPCXkATmKA4E9wCYjfw6DfCsZTE7qoPJWWSinLQaNUZQn5Ut7Lukf99MsQdxWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VfTwwxVVMGWcERHL3eKL3yjjSBtYpkjLAGEDmRsTtyS3UCh5VtFEHgLZ6qqh4tePHXQmczuKCkA1X4BP8fFobXJ",
  "key1": "5PjkBTNudNeyeMjgbpme1RCeSkpCKKFS6CTqifTuRiW4n8Fup92CkLcQCgZJiSfdMirDvYp9Cso5RAX9FcWoeQ79",
  "key2": "55wJRyhtvqk9WYkPdGB2tsPUfpQmKxCDa31QhzRSdmR7saifRLWBb8F2YgrBRp4LNSERabXvUCU5E2tFwj43oeXf",
  "key3": "2c6crALPZ7UN1AEDee9KhHAquA4yLYraLJydY9yKvRLsuuUBHtV1GNc2DaEBnLDnijk8sNoZGPP7VyaeJY99JPtn",
  "key4": "2Yuk7KFN2sjMPEFFtN64EoBfdvTYJSKtHT5XKCMW52EWQ4TZuz2bR7J5shja4FEQE4aYLn1RqTHKgyZa1MT8fTt7",
  "key5": "31AoXjqRtTCLPfUSopgpEphnzbBczT3BbmzZvw1i46bwBE7zaYeyWSQWSMJeg4DgxjQaPwxwGv8Vvacoi8kBNcXV",
  "key6": "vHhZivKx7g85jvvgMRcqpMB3kcZoJvw2SPdeo8BudMtmoU4eFHJyNDH2jsYQsfncTJRik2c87FfeAjKxDw7Ka4b",
  "key7": "515AC7jNyZMB9xqxcRMNWbv5BqD8MJtEsKG3QX8mFWaVDoCspqQniXRbMiRguN4VKZSYJisoxiu6jHLX9qkXurAG",
  "key8": "R1GMsViMHCr7Tm1jpgccXPtwS2bDPEgxw4JKSK5N2fX31ttmMTqo5ahhgpnFuYi4ANxhq8Ng4Vzy1K2JmfhAS5D",
  "key9": "MaTaYyHJxhjWLSBaZEgf1Tj5cFSrCVnWxgex3gjYB9vW7szx6rG71d7mzxkG5MukEZa4FxYjUCDU57BnH6SYKvg",
  "key10": "6SdYAmX1YEx9GPeH788BA8AC9k86b4pmsAdoykxwhJQMxj2SEGr5jqQyqE1JBtJKrgP9wh7n1Mt3tA2psHDKSWP",
  "key11": "37EhxiDs3DHjt86ABdXD49staPcCRRdX2ifN2dgdzJvCtG4BViSsJmics3HCn4ssp37STukbQUK4VNR7y53KLB5S",
  "key12": "BKQuY7Ypcbax7DqmA8gwHiKdRDGmWJqPyGEDEW4p7Vbp1G7YBxbmtpSfpN3M5YHYhh5RqQ97uKCamscrKtd8wty",
  "key13": "hU1T1NYL5rVTKBgWabtAMJWEH9fjF2SfiSfRte3QXv8GQrxLzRjXCy8RAUB1aBk8DnMoZv7xeTMjhZi95ZJ2bnk",
  "key14": "3HkG7Bbyyo1VZAjr35gE8LFULt6LPdFoWXgu1rsFmZ9PBS5qJmA1JJVA4mabqPzRtycmcf4G71fZNJm2AQHCRoVD",
  "key15": "CfQosvAWhgNZyRFwE9gN9Jk43ddF4HNzYpLn8hJsB6YvWdspkrL5iN9A4Wkqx935erquiRhus7duMsQsSVxm3vX",
  "key16": "5U7fsW7UK26Za71SPjRP4Sea6nMNFbS3Wc6Z4JaNBRiW82xsRGifwDij2mogkzTpYjmuPa17JyRiRiaBKTnULP7T",
  "key17": "AduijiNN6AsZVMQeafwzTKzhBRN1C5VGJ741ZbRxogruGJQBeoZMmicQRf3i5DYhF1tGSX6pKij3NbFRZWKoPg4",
  "key18": "5A2vtRWymNEpQfoJAecxcNdDRNCoYcy9dqpUh9AcS4U7DY13BgMD3B6ucq2ak84frfXxoJdyPHuYQRKUmpmSCtsJ",
  "key19": "HarhBALdFnQQsoTVmpbwLB7atngg4zGzEvddgZu14nSGNJ2nojRJh5xuHR1Sh1bjtuEM4wskwJrzw4yCn1qkYA5",
  "key20": "4LWrzfWddsWYQCPAcEABdgVcHwFn8rLwu1bD9ouS1Y3Jy1fZH8DNbWHJgVr8pwqhfg699dFWtS6sE1QngxZgGU5M",
  "key21": "2gSq8fJNHb9LVj4sxUP8HQaqEe3FZonzB2pufuPsoVsLcRcCQHdrpeaqLc6rEjipD4aWuv2GZM1bgmis8qE8TCzk",
  "key22": "WTg4opCxtgyUa3hXT513bit9DnyrJp7GbbGj18wm2fjTZuejnsvBiQ3w2yRWy4nge7Me1C22nfm6BSTVrZy9gBU",
  "key23": "25Kq8CF5Cb9gS9R8EeGovQ4byCWx1HmCuWbvR3um8et19LULMANF5BaSnW88sf7YUpykRfW6LTBAY44kEEqEpFjc",
  "key24": "2FV2NAkp4ZYgUXhja2vaafzsVqT8vyXM3nybERWQbqVPVjrZt5so6m52ouLREJwb2KirYnM3ThhfnVWnGZpaQwNr",
  "key25": "4mSkoqT7yAgwaGB4qqXiVqF4D9UKxQAB1ccxxRhCyi2Gaa51NPLt8df9YS4tLqV38KGhQmTWka7MWHsEjUFCM9jx",
  "key26": "36ZrnNTrcvKpZCRra9iLdbHvLf7FhSe5qpSQeYxVqsxvGJjefMBWXrF987KGACpp5tX12fLjVqs5oueahbE3qQpm",
  "key27": "3XepHREjb5pZmJ8q61VSULPEhfragQo34hvRmJLwD6fn58m1Xii8mjzSLPGMPhkShVYKM2mH4tWf5z4T9VD2qDL3",
  "key28": "3MgcvUEbBgoutQJuM9Tiu7ZKw4y1EZi71LDUocFsyCN2Kb4gsHaws1rRXKvahWHqMBq5Wx9UmvPydL4EJUMxpGrA",
  "key29": "57MPd7ScQMJwKR2DgAY6duvrcQZkmvj8fKcCiAmCajHGCXsusVZzKq7PBXcrML7NCcntnXXY6QGuAmjbz7xkP7oY",
  "key30": "5fYcBLUQkSHnwbBFDitk9AXuZ9tHRRiK7uDukeNCWUZNW5KDveU8dCYYBzUQ2HSVfquPEjW4Cnf2d3Q4qSQGCgac",
  "key31": "3pQUaP5BsSc1fkgoCmF7y8jVEBDBMMTVQAgWqm2fBJtPC1rdTGHz7dkFnX2Hp4MFerhamL5Yy3uJr1aErJFdcM32",
  "key32": "midBpCaPqocXinmEfpARPygZKVh4GhCvDauRLngojJDRiMWiRFX6uM1S53QzUAPRvy5i6FPhEtBJK4vEHz34Fk7",
  "key33": "2qixPJLF9Ryo4dGAGmdtVDmM4nbRtbwmchSpH7Fa9vYqjnwo4g9ipzv3WiWpiye2Z4sT89HzBndWwLeAjHYHDCSS",
  "key34": "5UZmtp4RPycmoSsmD6VQRCoW5cYQQg9u29rMot8FrakdLKfbd2sacimWhe2YAjV4V9pbAjvbNyN364G2Nk35H7gD",
  "key35": "3Jm5BwNWWXpscvimaTomeSPFiTb73TV82C5Xpr68RwSGnUQ2nmdHRMG8ksniS1BzKhAHeFhMLWF1ZG2Z2718RRVs",
  "key36": "wYX5StizVBRpdn7idx1fmYHg87zuHp6CBCHRFXGQQYks78t7P6fyJ5A7gGa4x5TCywV4S7BFGUuu37z8z392wjq",
  "key37": "5uDaYsA7uTyWedFQbZDdaZTUcHxQCFZWqjJjFe9qo2BgsyChMxJFHMi7qSjhS4B33X4s4HH3cPGsE5bbg1XPuxf6"
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
