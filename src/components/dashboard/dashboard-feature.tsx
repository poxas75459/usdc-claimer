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
    "3R3EavYfgHH9LU9TkwbT19yMUACJmPi9svH3pwAGCwM98zTgPMCz8sJUMKMJFQoBTr1cDYdtocCMMXwNYenAzfke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4srovGty9fTYgUx4RKav5N4Hbw7x5H6U9MjLJfunLNtcy2qpVPxh5C4Ug2tSVBxg6bkU8siqjzBxhCDAhRoeqpTg",
  "key1": "21oZwiha2jEtEBRPREoVvvWG85kV7L4WJWqCR1QU7rJC2uXMhteEwhLQf92Xe58pvGm1ybo1W7QCu8Cn5YH7U41x",
  "key2": "2Q3s9tVxcU1MF3qVEPp6Jm8RqYazgYEta6BCjVuv1tbUHiRdLWSGp9pnPprRNmAXNcVsN2ugxaBGeNzbmdC1HLJV",
  "key3": "3HTyaxx1Uj81vRtpsto7igPQWdWo1HZFpCoBFB6KuMo3Y5zy6Ys9cFwtW2v4d38p6r2LEp3nX2DLtFe1UhG27hdS",
  "key4": "1P9x3RnnYYKzsLKp7wvKNwJW4SRY9KswLxPD8Y4g9hDuhfuwRVW4HjgqSAMerYpTUWfJUG1YFEsNbaT9755SsXv",
  "key5": "jd8VuE29tUL3PKtSpF3myKhdMErwU32o5AEivk3XDYMuLU7ZM12zwntQMiWRxd1E8D5Zwy9bFUdCTAAeFXDqCp3",
  "key6": "668Q2CS8gqbciqbFDKr3ttArXoG1h4cyw7oBzNSMcUtxq7Co2UjHDnk7ay2cgiXg7YArEzDuoPB2b2FNy31unxdT",
  "key7": "3CFkgqu3mVwR6iNbiHLdkzTRyTEXu7BNmjJ59KNmNTjC6Ehv3uPrbUv6D6iXNQSdKKeUpBtf1q2b6tm8uN3wcPKo",
  "key8": "4wKyMNebogJr8pXdGyjkcSGdFrg14fFFgjMK2KozFkfiq9QShB7b5uZpoQpREEcYj42j8ay5i9CWbjM5fJjpt79m",
  "key9": "2FTpgEUujGeeceAU2GxbUZ6qe8MsioGae6U3Ku8rKbnyQ2TFqZFsVeoo9baPBdWQBp7rwnJpXbziTSohWYW4GMKB",
  "key10": "2CXSmDc9wWXUwcZSTvvoKnRpoDjNvaVvb5wN41H7enNFbDcb9WLDknL82DfdJi2mXdAzLakkQfGTzshsmE2JmA71",
  "key11": "7Bz7pMuAieaLSJAeR6dMUDUEjAQWLiimS1ugXHgpGvJejrbrKTnkSbWCmfoxeQBTW9hchHA6NpkKLjDJq1eqHYG",
  "key12": "3q58rGCeMgZWBJfWbuZQFvCWEBnZFpL1YJCEQ6dQPv9h1Po6CEoLB77BLx3v8WnBmdkWzQG9AVZKdjiESWS7y4ZX",
  "key13": "wvy2mf24rNgXoq8ZEzH7A5M1W6GuF2DT4qjSL6iQPktkbPA3EhXUBJYToAkmw2tSDUUHuXN4Dvin4UBQJtv11mV",
  "key14": "Z76ydsXnGuipcY3HyhGBEnPZ17bcuZ9ScJzrov3hu1kraVbq6jTo5s6r6TsZamstiRwwSfphpLWm8jQ3P6kX6Cn",
  "key15": "31qJM8BZxiArvZefu4MWaHQXRc79ngb4c3VG6RGGStm3SMDKZYpJ9tT17ihAydWc8usQxbcTs185Zy5WdpmMMo58",
  "key16": "3Jh5ac1QTdf7iEuHz2cqobBxsmf8pbvSEJepDtPqeaiitTm5xJwstgTNiwczsfGCS4iQF2E3x6mWxva2wHUHFnWS",
  "key17": "2gjPL3yhQy82gngc1zkQxU26GreyerYrJ3J9o4LwPZV2sxMM9AWVY9oEEiVDXwNPdYa1SR47b4kCvxXyRe46WwPG",
  "key18": "3JFTVqC4anpKNDBPqzcp8LT2UqNX1oNLoXGiBq1zyXMcBxtmgnVrMDmQFS9qZM9B9MekFTRTDb7p3pJvkgaab2Bg",
  "key19": "2Eoxsn85puLPnZNfZaWb4Y11Km58QWVkFj36MfzexxXXpnunw88PojLUEokGEb5QFaxEMm2K4kNYW9H64UrCDQLr",
  "key20": "671yJPPz9jx1EyNpEQZAcXQFkUnDCe6G6DMS1PKchvUaEyKVkBbsb5cWRVnB11XSXu4pEAuPcGcswVF3SgRDGxZN",
  "key21": "3ib1nMNGGMF8moswNur8iVr2hrp1SH4eNwfUgZdufEuFBTG2o4bZUPhdN1oCg6F9tnHWWHLs42HcanBDJEfybMiu",
  "key22": "2yXLv9SYwPPGnoBYnBVxFt7gg1jmTQMCsriggKkXJ7Feupz4XAZtwEdEqpsWRBQWfA2BwTVsPt8kC7C38UKskJG4",
  "key23": "CWLeKZ8VZfPsckLRhshV6Z6hwWDpxGijsvWzmwBGGGC5u1HewzRoEue5Ec1b7dvaVYgcWQCviQ1iMnZo6JwAheC",
  "key24": "4sjY7BU3MuvFuxFQJYwCvZzzzVciBQaUUFfXeoL7tKAtY6cnrcCcdavuUADqWjgKE34TvnYm7gm1hpkYxM9c3u6Q",
  "key25": "4m7M82n4umAGuvLmxfSiSpsHMKvZJvLkQzYMF4K1ShEk4LA4pwFumHr14kqqBAYwX6Eq5zaB38u7MqJQkfVeSHGW"
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
