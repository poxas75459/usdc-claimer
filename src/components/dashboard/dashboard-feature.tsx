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
    "3zGqSDMmMz2t6aNf7X6ybMsSHED6yPjQ594YJ2fbKegKc99kpTfgLnCHsGPg9Z8PvpH83FEisLrNd1QGCFf9szz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PcA15uBh6AwS6CxLvbvjhiZXgHqPnaWdPaXpz5wHwiHvmPRap7MkRXCYXnrnkkQzm3jyJKBB9RwhjQwBSpsnbmS",
  "key1": "5B3mdYx1zBi6tbQChiHRxUnPzGEhi4XSJBkm7dbDUL2MLAG62JJXRvYkcj3uAoHAGUhULJho1vHhdrgZaUNbMTk6",
  "key2": "5erhowWXAV7YsFFvxfHYkVucTxpX65u16VsNRGjEbMRi24un9ZQJP8d2i6YzwP8VcZT4RBoJy6aGMV7ZjydiSPcM",
  "key3": "4zuxApzbXTAo33MLk2qXShWnwaD4DdgonNexTWVfTNEc5k3DTjdrVVphytZgJZLgWAh3Ve8NVqVLVTkt2X3z1kHx",
  "key4": "48PBQYwkdMpYqXZzaemLsskGh5iDDnJifqecGwDGfaxjyUkASerVovwvtoZ5B3GKfZYVdGT5tkRW3uKNJm8aH8mh",
  "key5": "2UFmAyf58rvdB7Er4CHu2gPS325heaVnQKdWnG2WJKY2uW1NcKuhEmx9uJMMzmXdLZ4FW5WJAVdZAL1wWokczh6d",
  "key6": "2TvSoTUJB1E6wRtLD6i891bXJQP8Uy6AbZt2hFdx4EtATpShrWE4mNheWkotpozyysguecP9Qs6qB1L1VjPQ4WJs",
  "key7": "4fXDuhWj7d6XfkaHTGj5HTGCGPVZwHL9PmDqQiwwb2HNPPbMCFixhtzKKexsYUJuuGmw8fmtKpyS7vL5eXhiuone",
  "key8": "Mrc5Tiuj3rLqEH65zrYz7PJrqbND7oG8i54J8Gn52jkfoyRcH3aRMT7Rc7bEv5x2nAJvMfKRSs8gYGtSuDyS2jh",
  "key9": "22SBwijFk6vK8in7KqybG8CSrHVuN5TXXqQgQ4q5G3gir9RMsvxwqgEVE3ok51hgRJrxUzCCxMX4C1LqKGYRmLvs",
  "key10": "4A2KpWba2FTsLcGQjNxtr7uN7QBU7AGAxvL6ieF18y9oVtpdnauJpQg9xnnQ1nQBYkrb5kftUPJ45SY9MeZY2mrb",
  "key11": "KtdRWQNarKbB2D7p1CPxvb6t9euyYNor7qFQjko5URwV25cG5muBV4AfKU59xCcC7QPrKYCrVbMJR3CF3S39mKU",
  "key12": "5g5hVpSmQ4c6EL53M9beDyry6hNH4SW9DRXnxuiuq5QvSGNhqqiCXJCZx3EGisWF3ruoGAj9YmUfVunQ22RrtDK6",
  "key13": "4eHAtnEeqAdNVR1Nek1CU5sAiLADUzBWoRzqFtZ8miPkSPg65hEvJL6RCJNW5gSbgcBFasesWpQ5NNeRFqPh5cRc",
  "key14": "xE6XZR2jLkRyJNFsZxubMp1jam1KefNwBU23fw4LH7N91Wq6KnTTL7gVimvgJsTFjpWcuKe5trVdjm3pC1Z4Mz1",
  "key15": "2ZVBVt3iSryfRB5YU5bVLtaMaF8BpjG8BDBpS5C6mHTvAoPjxcYDc7TSuE3y6PwK91fjGxD3o9gZaWYHRiisz8mx",
  "key16": "PgMAZTn46VzgbRhrz7EfdqP8hydQkn1dBTv9d67mHMotYMUMCkKKGYp2N4URgCCvhapr5ndaK3SZUf7yaGeJTh2",
  "key17": "GTHEMUzX35GtL47AbEHLhcyvTreXUPfR2CEouVjgjhKX12dbk4uDJBWJtia1Ms7Q1RGFdToxh24unAvARzh3Hm8",
  "key18": "5xpfPKK3CnGZeYQbwyyDotabQSJdp2hukmtQF2PbtyLFHTJSNS1rm5o9uXimXrha6ugvq7JYJMAhzsL4LPsLWoxA",
  "key19": "Mx7AwYQ22R32fWZU9tfT95fhdzqZszvf538rMVN3XZok8uoxBHkahDb1SmGqPwHP47H4PTmj3ZHM16196c1oF8p",
  "key20": "fdHuiSdzY3dKN1nDEBFjcgKTPuKmqSuQoPMMzpb4UgSpVsCiD654DwjMSifCxo4fNDFhTN3racNwGtrjw3gv8CR",
  "key21": "34bujC3Bc6BkpoEnWG4rQAp3xiTvfcsreNjCZ9TttGXVmPnSaMcAxWpywZFR7C5Xe6Ce3VhvF4MC9roeVV13Jp6b",
  "key22": "22MQ2K7LuZGmRE65aJn6uB7dgjNyUSgTDhF5zFgQ4xFWdNxDHdFhTd1XGxkCDjXMSx13CcMKJQouXe9om4tnU3JR",
  "key23": "4pbXawGCATFt2u5rN23wr4PdHW2HCMiAq5RGzMME3GC5SxMjeXk6axkZfTDPbkZJZ3WLtwBv9b9MMqXA7iDY4j4T",
  "key24": "3nsQ9knWtkaWbsY2eYSdMAA7cgnZxvowHp7Kj9oXop7Y1xySrdzBKh7uH32W3WjsVG3edgJcrBc8kzzGDCGuqtQp",
  "key25": "8BKCHDtEoGySJ1M6oju6qpv7ZiHjAggXgsw8wmUHuEjRP98NY4bbY6Lhpn5FQY5jwALXs8g5hivd2HvvWuLWNH7",
  "key26": "2BRSu5tquM5QMWB3VQtTgwLJgpdb7ZNMRTvCP22SyVZJWE7Jovd5cgAJBjzXdc7S2jL3WDavJKgY4i4BUdEWp1Ze",
  "key27": "2ghsPmEnyceNjoGdbbj1PHhRAmo6tZ8pm7zoZASKnYRtr7avY7MgBHVoj5ryXM4Ux9NftjKLprZ8nPrQes5QBJ3z",
  "key28": "qbC35SXrsp5PRTbmGEPGYnk7CcDaqNmYFtDmHdahWAo3KsYEDYMAXNUDfBnd6bFHk8QTCUfPBddWK5kJgvxuHY2"
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
