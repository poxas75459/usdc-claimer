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
    "4zG2Srq38bied5p5QEqRVfMuAh7osv8J7QWPfzcpc6oD5bMdxJQSBzR3bQYYNKCJmMrYpLGN7aMnojYUKtNyweoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AjjpKef3ZR1QcvHd4wEVHSUo2RK2n7RD6iodoKrfnq6SVc48rxdPjMUwi2MsKBqTp3V6Y6a6A5tFPfauRqruzUL",
  "key1": "53g6Wwc6MfKpQ3hxHJMJnF5RfhGHwaoBaEhzq1yNyk4LSUYGQNwHoDQJK4THWZB6cymTB1fyojct2fhPaA3BYZPT",
  "key2": "5JuTTbhB4jPHfEVLZvaBceXEg2JA1RnELjwFNVDHbD63q5CAtqnPLFvFn9QcSkvPuQV1spT4J4wWXzEqkuiauVvy",
  "key3": "2GZET9ZWWWsN5H8TEGJsUbeQoXoWqGTEZMeD8i621GUZoYDSMeDN9uSqmrdu2XKRj8YFwR1nsdsNGYr7EU6ypDqg",
  "key4": "2BXkneKVfxS8ztQBrBuSrUkcSy2TwEYEk8kUsYm8WBvL8EzeD8j1GaCEePsYFVB56BP7GLxyd4H2JVWChrws1RTm",
  "key5": "5K7zU3piPDNL8LBqQSLgWTWo5RterCAT1YshfuvWQ55ma18udKJht8gRJeqvyfWEBZs9GmTqETn15UNmznvgrqVZ",
  "key6": "3m71hqMPjK28uFgaxTBZcCwvyACpymjATgdXanbK6vyYcGNrg37b8ohqCCxAm1hqJU1fmok5eDkuUZm5dQ3Aoeug",
  "key7": "JaFHVb93BjdoB3sRKCUp1H5KeNqYLRdNLEEZo39xJtpzKT46Y7EafpFqcCGaqqkUGjH82ho5x8vHAubVVp8sQZN",
  "key8": "5sL5SUBfjME76JpLGwbWRNHVpkbbTHAg8FmHACCMFbFNkbLbeEib4sS2CtnJZBJC8bfHpbQwuUQZJaHXxxnH633Q",
  "key9": "256HMaWFsCsbjVtiLYypQYrPAMfsmvb8kg8op2W1HjgWHKHrjihsHzLPSPwzVC8koC7gsoKept4GUFsMBbra4bCJ",
  "key10": "62EJ7fmpdeRZS3WQBNY1GF1MYzLBxqN1979opvKcdnLoxQXAV885qBJsddnH5QuhtRFGQrvNGoWcbRjBMB7Lcbt",
  "key11": "5BWdBoNom1vcJXipPty3pTLB76vJq67RFuiSjrPyiQe4a5uTGHmN9BBMk6PL82X2TDLDq2qac8wfyirzopYuNrSJ",
  "key12": "3x93P1HqTEPRKPZankxZsEfmM1VqKjzvedm7AYzSMYYwdcxK2cQzRAv1CpEoLR6d6nkN7VcWUbYEdEPLUXNxBZDr",
  "key13": "WtP66TANbmTwtzJfn3Hc9VqKxTAXksaWNvjPjKghvWNq14z9WZ2EjdrXQa43YdmmWjUUJgkkSweWEwsmMG7QibB",
  "key14": "363gC5z278UxtTwxH69738Gz4pTMNhZ7YrrfWin5ELbGwwU76tsB8qSPLCY3GSMuGyb7fh6szvzc1cQXwh7Ny2Tu",
  "key15": "2wy3j2y4o2kkv9P356TeaBLzfdv6AtSU4N4rBVKi68Wybm5iUupazhKXBNGGodjQDEFDrFvvMKBcFX8LsgoJ9ePL",
  "key16": "3TTMV3MVzABCYHwzEQnMFuXNaadoD7dmBLuuVn19JSSyc3ZTPv4jHSFYpnyFnBVCAkUHymh9JxckHUwppLnYpajY",
  "key17": "4VsnRWmDRq6UrJCRLVB4xo7XXfoGGAAMRcgkpa96i5ybhWYcBU88h297FBcj73tjvZgy8RVCPKj7oRqFKrJ4V5Bg",
  "key18": "23ur1FM5UQB5WDxnCueALts3D7Gk8RVHZHZBpdWw48PvQj8w21coq8oSTFoKSxeXCy8ReoAWR4SUx1EDSJV33ea3",
  "key19": "4c1kLTHwbJXFcfsEcRZc3rVv21Y7iXN7x81SZDXZy6if36pCP4d2UuciPgeuzfNMYJkTkN8fH5bWRmUE9KAmjStL",
  "key20": "vKHuAnmff9ktn4hY4hTzV1Z1wqcWBAkGtQ8qcsWBre2nrv7TeFNZPYaZnMijUkUrhNyYCigxjioZD7C4qtPrbvv",
  "key21": "2wTyZnw1DNddDg2zswejpCBfE4sPmu6gwvCXfaPsfFVqtv3GoRg1diz6sgxAV14N4gfzDpUjfhqdtVxFha7zSKxW",
  "key22": "3Z3T7BwZu5EnTURSEZ62EzE5nzkPtYMDWBiuy88q6uFgvEYVENx5iekjxZ4BRShBXRf3DBfgkLfPUW9PjypyFDga",
  "key23": "552VRbYvRgTzfWR2HfmAjfJZam2GKqU8ppyNdNSkR3U2LwY2YsoTXiEPRovDcLVW6tAKPYoQ2udwik5fi8Jfn18u",
  "key24": "5Zbz7f8BTUHWMmC8NannLiE8bp74v2duRYhYf7q1FsqY1rpmEdu9FgvDNB88dAnSyYBo8WPDbWsoPCAXpMq2CaXm",
  "key25": "2h5Q14sGnSzAoP17fPZYQyvyhbaQgKZGxaoprsCsYxWYr28h6Yi798MjzGDBPq1Vpcwb8pFf1jj9HeAdwUL1anr7",
  "key26": "44t2UzWprAwzsWi5FAMFzUXyUSiQqGWpgeQxc2V2HKPBhffb27DfEX7C2RmUSn545cWP2gkoeD6qtTKQmF6pg9WL",
  "key27": "5CRSzKh7jP5CgogTCEy8YhGkN6cqsJ9eraPVBNDiN17PfX7rRkk6nGj8SQNaiuKUtk12T5ngEbcdudVbSoJQgt1M"
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
