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
    "2oAK4LV3JNesPoX2ynf3F43EQbeVNVQAWRRAGNFuStLp7KPohzebMDrKZtRYnMdNKV8BpnoFWKEvR5Abv7tFzCgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x7jJCpT5o6coLv9sMyy3L62DdBJ8VQAymaW8LUGDaNrQ5QcTrqQu9Vx177nMm2afgjDcWkFsJZ3TMUk3oHfFAP3",
  "key1": "59L1Y7BQXTALtZ7bYGqVd7Z4ijbTZK5PbPy8GvYEgvxrkTUMVmXCTe73QjkmcvL2qXSGL6bmmU4KyXvDCQt2h2PH",
  "key2": "3zwaZqHcy7XybqbV3xto8r74w8RtbC2KFYwDn5j4Gr8htZKifEqa8owZZxLiJXtN1KhAV9nPyPjG9kQ4esNEdqcA",
  "key3": "5viQZDA89fGQMJkAtEojpADwtDfFYHUG9oiRneZxSQWUfrpiq9PDh53UJBLsRRg1tymefpT99a5Bqcpe5Nb8JG3f",
  "key4": "4fWot4JF8LeEzd1Fh6ScUawumsA348Y5d2Nuz5eyUf7983stQEVnw8u36kmvcxHkizxrpmw35aHzw8628gQsYHJo",
  "key5": "23Qe76T8wdhYJM5G4tEQZKeKuH6gtoDqYmr9EVp2322J4PBv2icEFcsk5dXWm3WV8W7xd94BstfnMf6toq1h4vdG",
  "key6": "3Yc2BDkTeZap9BmhxCzC9N4VJ7BuHBP6HjJqi6zT1kmeJM1ye2VVspbZBXAWthJLdVoFhG5V3mbnaY14caY4PEa8",
  "key7": "3VXPTkrvmD6w8wUQzQu2bRXZHEt3LYsL2WZmhn7eLLG1E4PjcRs5PNvpZFPHBZHDamKat667ancFXoQyuNEa1mPe",
  "key8": "nKz3Gy6ikK7Bu12evSWKaq9P4vB9gknUJ66TWtcyU8epmMfUB7VR5shpn7t4ykd87SHcSovCuzXFWjNFnYUFtDU",
  "key9": "w1ENLdfP5wAM9KPouoZJNvFtMB5A4p8rDGDG2AknPoj3YWjdaAVFuNRhKPqerdekwkmNQY5JJEs21mtmwuCr6UD",
  "key10": "5bHGWiG9JxpkcoMsfHh42kyjPatcMPxycCsLRjXpmwER4xiPKosBTHX2xn4w76sqAifdskAddHkFkpQ7WtPpTwKM",
  "key11": "32HTvyoqaRLtGyuffzpAQih8YJSpZnXKqLKYyLzHd34KBp6jkW6rJcsc2V145MRcKvSxBxSvTLYbBSvYW8aMPsMh",
  "key12": "YssRP89ofQG3LqEJBy51iun1iVyXRstZXB3eN91TisdZHkq3v3Ax6EFSJLmAJR7sx68nDBpV8u24MBJBrYXqpS5",
  "key13": "2qM6ZNq5HfnNW1wpx43KWt4edMJo4Mc9u3m2MZEAGo32y39ea9jLNBntpn4bLUbbZZgLSgQAQ3PBBfhy1zpq8zos",
  "key14": "5rCsCco4NHQBj8H7TAz8AvTJK4weCZfm9pev3oa1gpxi8VJamt2ptKq7HGJpsrLuru5qAJu6JcRkq1oJ7t2ZyNeM",
  "key15": "4yP4tazabVE6qk1fBjwHiqqC54K74CAh6rwB47ugXtSWE9xAz9A6T65PF89kf7rtCaG2X9Wf1itwMUVBPsH5pQS8",
  "key16": "2ukuSNY9KzakGpU43wzzYEMCQVuAH2qCWxjVPAvBf7KWfVnquZoCGpNa5wjawh8i73Sx5gE2Wb2dUUAC6tzgDaem",
  "key17": "3zQEwRoK6qBq6AzvcS8fi9QCkp4nieZFN5ynouVFZmCUTgEK6smVVD9jxNcZ5MXZ6nxPDhatRjz3R9bDV9e2keBt",
  "key18": "2kGL18nXk2cbpdKEBUfGPCiSTPnbSxpTvW6Wrc27mdpXY89UpmxC7Q2YBgTYhupGiKcQwPgbbBKN6dCtMVvpj61W",
  "key19": "4dVYyJgHV9GnXebhDE7PdKUezMChfcUSVgqkoNukfZ4LwGjKT9qiccJzCchzvq2MVTEZK2FrCfo13zNmsWx4Nn2c",
  "key20": "22G8z5NuJSDVJLaBkXVXjccPSHAaeimpjpFZkeEqkuYxn3YpGQT8gopcim8ZTFv335PHdyCNcxdW7LLWv6i1zqzm",
  "key21": "3J6wB1j8k1ny3vSy9z16bPQcfi5t6N5sUxC7iKHahbYRSzAMXHekGjDLeDQrkvoqqFFbuTzWwuoHbW2CdUPzuQsw",
  "key22": "5Py6AtnU3FUeDizCUCKyqb9kGeQp2Jns48ueWDaTRTaYTNucSqgBDmxJ4VHSdVT47hpGdbW5RJoeuwN3ycjnsbmh",
  "key23": "2bQhhQzyp9Tgr71Lh5Aikb4jMrpZmckeMfaUBFwRCojptWiqtQRDhZukUYcrengGHxAdCxDjNfUkzxyyn7aT9UPM",
  "key24": "o48GEZYnyxLWfExXSnbD3H3aPmt9xZzpV65STCYvheJUEJK17aF4JraiQC2aP6yaUK4f7wAVNqNZDrqbMrnyfXR",
  "key25": "ktKLXs4L6N2eJHy2g2MKj8Afgh9drnexrC6oSfUrd498Ty35FiYSThk2EZjixWMr3TkLa1MRDB2owyXUUqJ3d2K",
  "key26": "EkcJWhbQyiEpJCuWsx2UqA9sCsu8NTeEFZMu7z3pr3Vdz1sBnedf8bh68FCnGygfjV5XgppGmwwxuhrRnXPAMDV",
  "key27": "4S8nG1bAZq37aRUAbgXACS7eH2J6DVTo5GwgmcwADbQ6ih5kAbVRrGt9k3WNUgLFq7T4CGq74s17T9aGGZdnytxx"
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
