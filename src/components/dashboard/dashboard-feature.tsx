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
    "67ANe61uc2tbCjiwpAn4pWTkVkFsWijpbjCgaj56LPpYtNL7XRNMFzH2GCusaeRScHFT148iC2TVXh2T8FiLs87m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vCHtP8or8NHJWvF8dA697ZRUQUxfprAkS115tZqFM7Yhd7WikR9MHhPg6bgnFpL1LPtzDXTWitEUpzMNRHoWMJA",
  "key1": "58923G9NrokvNkZghZtBDFvmNmBPiwNj893MFW2L9eA2rfRNnr7gVvnR5sdUMnRPZmxYt676pumZA97bd2UHLcps",
  "key2": "4m9qJB8jodPPopXBSsy7pXUVakKmAGeBaLELHjHM4ZK8zF6C4p1gZWvw9JYVVgey2rr29v3QW3GjfqZazsD5ebAg",
  "key3": "4NDyZCLJ9hk1UsuFYPxdqNvAhtF3suXPmfctxL8xp7xzYJq67mXdB1wruz9n9nVHza1msnQWxahmy9Z7fVbz1cFJ",
  "key4": "23mNshcPiXaoqZJsTBuae2QsgtA9z4ysHDT9wy1YEF1Pb7SyzSF2kjEuBe63NWcz8E4rbhBUa9BRbKNvZS1mvJ5o",
  "key5": "3mm5Mthi124z5KEDe37wHe1J55qKK8jooNDdQgGLChtXFMwHATUjo5SXJK9NxU27tomSpZmcnJ3Zg7ZuorrydBqd",
  "key6": "5ueNizgyWCorNuDVmhhXq4QfvgnycT9NsLETWRdeXFbvLZXdeZBZRcR5NNqHAn33P8moWFju81TiWvoGyXnGg5Fu",
  "key7": "43157FBcmTPtLLeidLxbwbZVi4pmWmftBNCa3984v9MkoXBXEoPByC8RfypcstExK6Vp7UCxXAavoTPWMK24qV7y",
  "key8": "5Sd3GfbwWwAxoKj6PVzNYBtZxuaYaqtZALkQmDAkgjJmx996UkhnRYteiefKZEmfesdMcFr5WifiN2LgHTR1KyCL",
  "key9": "4w5zKg9QkpNqs8RKgtmNpB3MCpajJ1cCZp3AtgA6akbUF21bYx9eP5aeP9xVcfmBdaNNNKz1R8BSGeGzzu6V7xX9",
  "key10": "qizg4HD2qJgqKJKNQY8tL9W6BwaJa3s3MApnRDWFKZfcjUnhAfTJmbjpsBRcftKgAxPm6p71pxh3dDNAiKy2dtV",
  "key11": "2T9voGGyHuhEa5SvQQwcjKQctyV5gurryg1GouJZJvZsCtPszU2E5z7NEKKngYTzoPwme9XY8m4WZPuvKHUDsRTh",
  "key12": "5Am9WQp5X5GZBciznUgqo6D7W5bNBWhkvGcXDE3vrr3aQ3m6AS9GsknmxhA4NTay2Rup38tFHjdB4kQZx2QAMmV7",
  "key13": "27iPWmL8S5UYeV7PQzQziFZnZv3V4MwseZropKdr3hAcGG54w61Z94GHFqmrnzo8veS841so1ZLrr7cpBBPsf58L",
  "key14": "2kS5tmNeAgixFoeVAX7o5VThwGNrAfHn2yCCT8efm4RNSaYX49GAMPmxHocqYFjfpERfLYiUAzuHnXwrXBgMrAik",
  "key15": "4aN1VLRttr9nxHfRtPn1RsfymJ33euTq3EfQjCDkXivJtR8yf1ikDqy44CQxyBtVs9m5cvSPpezw8X2igZFsnq1z",
  "key16": "38jNgKjj8dHPj7tFGo7RvN6Ek5SrJVBF8cs3dkERrJaG1uELJpquNDpQ2ZGkU9GP92eaKKJExyy5ohHji9uyJC2E",
  "key17": "4EXSrf8STeuANNU8QYeqor4bnFgfisUBjQv9DY38BCtGd1jQPPjeSCcC2YVcWuAXi237kjb4rFmxyodsjexN2Pgc",
  "key18": "52VrnZqcjf4XJjADwzDWrTyBoYrAWySMAD66YGwVh1myuPyP1EzydCt69kaqB1tbfiwcQY5H1TD4TxEG3Dy4QffW",
  "key19": "38NggzfVZxx3qPjvyLSnAvCoouqMnRjKmYgXnZU9CbyYmnY4UU1sP5YpbkCfp2TQFFxdautcdn1PSpUGKYvup9Kn",
  "key20": "mre15pMfZSkgNcTQ1RbLbvXVNa87cA27Js4T2yvnyCu8LsJCCp1u6UyNWuVNJRBdMWDMCMdGEjpBm7eP77TgfFg",
  "key21": "4kmhCav4DuqRToY6Ht3JKmcWHd64hzwPCs28f4JLwiK67UMErmbzX4inLWaHSsfPbaKMT6jQGnWrFuUm21WGrJvS",
  "key22": "48z3ko9wyow3sHWmRyLH3e6Cox6QDhysSGBRbyNooUbpBDM46eJe7oLfybTugZ2RxmFkcPrCMEtSCzU36FoyWQE3",
  "key23": "4GuEtGNGR96ETJmAUzNytLWcSpHqFPn9UYdzZPJfjztZXtC3XCH1nLXnBjSFkX3rTpK2iD7Wkrp2NWdjUEoAMCvV",
  "key24": "4kDizYMiZPr9FgwvLQ1a8jNSjSPJogCG8Sj7GtacGLnKfrjJLP2zuedhAxS7kdSvrvW3J3Ha83k9rojY4TvF3P14",
  "key25": "57Qka49uccKFo9ATLLywLKeor4aeUaH3DLJE8x5PmqeKVBRiUr6kuGfNkMUbw3BaULn3JBojrEDZZteWSm7gMLKo",
  "key26": "2JeNekruss338Zap59TcdguybV9n9zPeySR8Kc1GfG68gBvYZsTCDdu3QkQQZsejfoghdcnEHPVx8wTK5LTfXbJt",
  "key27": "3mfWEqsteBf5imEPLPBnCxatkKvWSLwov2g3me7bvVZ14tshU9Z5xWvkeVtzJYSnyspSAr9c5Z2mCnM6f1q3pNU6",
  "key28": "64WsPAZ3b75QqWUvWY9eT2rcQLHp25bP3ZnBLXmmK852ZvqjgpcPWYydrkfHFxMyBMEGT93D3oacLzawkZqNbem8",
  "key29": "3UpmxGE49EtSgpsSPF7TbhicAo24wmVyntpcqzL5fxPxRwbNico3GQo6RCYC3QUdEzUBG4McDQKqXDtKHDyxdBBH",
  "key30": "5UADX4MXrDwGdEBMX5gPvWbanJ38hNy8AYJKuZ9TTwPetC5v68adXjmjmaJpP3ncvgX2EXbmQvW1QmqfCTpamb4Z",
  "key31": "9MwofABaf8MeLaCaKaUjdkhWBupydRhyDinfD5xXzxA7VBmcoQahkpnp8YFyR516NvyEgG9bvjmgiBQH9NLCMCn",
  "key32": "5RrP5danxrGTtaUeEq5HHXhTwvyUWJkJnb798mdVK2kfsnP893w1J1HCe91vCSXV6gecRrD6XZDx1VQQ9wwmRNxv"
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
