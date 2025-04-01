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
    "GNKviHPB8FR7s3L25N9uLGB6izTAxFhiUeWXySxpuLmaP5XvVGTyUJU9KYBYNHUbtx39mc6a6MFc8CW54s37s7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZE1Q4kJKoawmJxa2JenxbhVjdQuM99Jp8fucpjMeXmioV4aQmJUnMg9EA6osjPimAuk86bxTD4RDTRJKTCHYfbq",
  "key1": "5r6FZp42uih3nHuzt6Fu959jtgsUy1wdgkb2pobpywXExNxr634B5szURKJcqLQsZsfYAPrJsPqLrX1m1Wiz3USE",
  "key2": "49VZsGqGP3WRFugM5cK23bnruxpAj6RpHXqJx3B7eN2mk8vBQYcdMKj48VpxSuAJhkdEAbnyZtYrcFnsBvhuHJg",
  "key3": "5qbLNfiWKgYrHUaAzoPkTuie1NU3aquE7BJR5RrGvhxk8PSMZgSXB1VN4o9TqajcRHgh15amCdihdCgfdsLyGnLh",
  "key4": "4up6eoJpk9NcFEyvsyhVZ79U2vWrrbwuEuaxDvAg7seFo8YpAzp2z8CxGFiNBCr9rZg6TQdHXz9EFjPemdxJZJiH",
  "key5": "4SKXQA3NEvzikEi8BFKZFrR9jAzH8X1JoX68zg4v7TkJzqiMPRd267abDPDZwi4aajPcrBN4itvtzKGVtgV5q6Ms",
  "key6": "5rHG9DSi5mBpbgT32N1ox7CQ6cMKYcKTRa1FB9Wk81HRWyv86frNkB8H2Wri5rcNHpHccqck7aXYcx9pnZm4EGpt",
  "key7": "2q38z1kA4uDVXP6R2QDuXWQfLMyznDe6Uiv76phL1gVKNZCYp11haN3H8s9TsBvJAxRpn11HKU2fdLPeJkyXEwfj",
  "key8": "63YSCRiVcgk8sjvdjStBhqqE4NTdvHCjVeePA313yWXcB4KwYWdWJLVpZa3viau9HRBHCpaLZpZr7xj9G7U3Fs5k",
  "key9": "2ncMkfWQn6EVcAS2as8qvtxZv6aC85ZgSyGKaWpaxpK3Fn6G1QUt3KYmRjRpgdwAh4ZscpcKwhABasQ1hWpNB7oN",
  "key10": "36toXuL7NwMBjUGyfpnaPZnahuNRP1Spuy9EzXEoTMK13JAsNwhuD6YQur6NtznCzLSHbq45kQPqopTQqHTEuxgb",
  "key11": "2f115fkKfGXd3WzhqsSqqFGJ4fLywnpi7hzqknvyTJTqjcm9kkFUoJBiqJNVpXkwAUoiy4qAdjjeRLCXMDe7cabQ",
  "key12": "3LDbGbJtbM8DQyJSNjoBp5higHmdvW9YQy4xKekzRgbFmMT7RQzv9J6cBZm1NYgUPpE6RLFEKC7owTN8XYVUjrfX",
  "key13": "4RnoMxPymjYtNKeGvqb35TFe77oYW4JcZHvgsHo6atMYbbWTA4zhATa9T6GnqM1ZkQZ5AA43UuV3AArRb2atraBv",
  "key14": "5G3cju3gA5qKVpLdkdRWLUbooJe6jg6MvZEJY52r3vAeErmqqfLKBSQSff7yxbzqGjP6FekZGRNSPJF1JpHivPvz",
  "key15": "3BT7FTJRpJu8AqEM6RDV2ddwt8yRjcbozX5PW5mftxjfLcqRvoBxtiMsEnM49NqkmoqPJyB7voMjoeiDBeEAv73u",
  "key16": "3rBXpkaeKqTHht9wBioHPLToqpJNuiBfnkfnZGsNuhLKM1P7oasfywMnyJ1ZkwR5L9X678pE5ePx47BYrVdH2Mxn",
  "key17": "4bd2LT2Y5i2kRJ1ZgkBfhbEw1s5NFu4YueF9CnEDY5eKfQuPvqNZSW48qY2BzyZsp7HXouHibXtR1d5s2XapBaLt",
  "key18": "3gjzb172FwR15xyxrSRfEGL9jaNgg3kx9DCF4mN9reQ18eWfjsYbCmGLvNFHykXcH5TwKo3PavEaPmiyDGRpARju",
  "key19": "4FJrXAhbsTKkGbxakBDPnoseeJBnwgtmx9u22PWLvYFRaKb1yjB2bmv1GnvnguT33KuBhNpJgoD3hru1gPEeRUXt",
  "key20": "2tksWJCR3SUp212LSoXhe8xMYkWjVLsTXzwuR4CaHTXcZeK3n9zX58UtBfFHZc3cjfbfcKMXbc76FkEqnXPjaLae",
  "key21": "3qSuqTW7e7jsXW3oeiohyofNkw8mYosF1DQzpyrDE56FCPGU1Y2zvoE8cjgmjNwcMnYJPrethVKsLrmr7TVm3Q8X",
  "key22": "JLEpuknie9YrPoPYeyGb3z5mtisV7NQ1qPVTue8VYhGnLtjRZKfMwnkYLDV46H9EEXfn7Avj7pFAAYRnM4DZaXD",
  "key23": "2QMjNEi7VATDjM4g3coATvVPWGb5Tt8kfVtZitUVzYdajyFM4SgqR8fRzgUUKUDn8nqRU91oNKokMU2ec6RCuajU",
  "key24": "4ePQBoNsSUcYnztNR6Pz6ypTFXN6Jt2ovYFPmYkAdvB91DB2n8bUPJEZM5NKNhTZL2e32aZeakf6gVQopFTaKd3u",
  "key25": "2cUdWuZANKb8tssFAR4wn2mPEvU68VqP3uTEtJ9ap2QsNVa9pqpjYMaMkWVuRceFNg5GTtja5AZZhPgPsnhJUPPL",
  "key26": "3M5YAnwB8Bw54SxFXr5yLZGRPMR2dxNQGHASBp4nULBs4eC2uKFrfrQz1cJNMrwc1DVU6B1j3WwLtPgkkJaxys8Z",
  "key27": "b6amgnAWEFBCpvb1i9m5HV6wnknSkQ2crsX6VGYbcpXPZy74eiSBAM5yNvBWAguevJf97kMQBEr5NsHjtu4iqhS",
  "key28": "2UxXbqGCE4UswpkqwygT2ivZmjVQwJdGvAbkDQnJLD2WBencTqvvkGzKZF9CwL94GgK3xiPKqsw6cEpncP8Burrb",
  "key29": "56i5p34gA7wQet6hac9mX2kTRB3qCYnov94oA71LCQ1CJ7eHRre4ZoHeGsews134idTSiPu6bbbEegDWHyFMGSST",
  "key30": "3gAxU9Z7wVkZ5Dt2B2xwzKUCAVAXoDqCngi3EqC4TumrHMCeGEtYAt1Gkf6R9EWHhQ4aVk4smy2WVA9YcpYrjcE1",
  "key31": "1cinPm4bwAurafFysvPWvViYK4LDCGMKWqeV7Ap4XEy5HKfhWPphCHCmQrtD2obuBCqdX7GBCJRH8LZePbkcLTW",
  "key32": "42KX99fwu2pbjt6ijDC1JwAvRNx3YANBWteecNokCijQRmLXBvLETueKhJzpsAyNygtKQBcoRKBXLDazyfnUeyS1",
  "key33": "5BAr8Ebjs2mSzyZp66LqiK5hWDRierFoueXZVeBVszEWs8i3oNnTjCzckY4pX9KVF3TPsK1Lbtdf3PQxQd26BiCw",
  "key34": "5m3B7kUMotPHaJHWz6mcDtrFQu9sRfy2J4CTSEP37YcmyYvZLuYk2bZqfWAs8cSh14Um5eF8wi3rHyjE9acZBrPv",
  "key35": "4rBqi9Qra3VEhsCpArw2kzNKjoc8uN5qxcGdo9FDp2f4dg9RjVbGzWApEXL2mwpj2Jrat2fRmrnHtaCwx1XYEgTE",
  "key36": "3pBUnAaWNtpMcTiwxRtYSBzre6UUFwcNWSDryVTTVGN3X4eybjoC8ZbuvfyyoTE5K63vUxfUFmt9maTbjGUcAckk",
  "key37": "64XYumhfTPoGYsopujMHkbyeNNa3u5g4iXKaEUJ9Z5JnxWXkHC8yw3j7JXW8vXBMm41dZuU1buqTLrV77cEwPFjN",
  "key38": "5CxorP8Kck4zMguVxta3Ud8Hq8xVfnv9ea6a7pRnVQgbf4d8eqCewQUFVZ3UHcnXL6tyTWzVtN2Ve2cj6oKSS5W6",
  "key39": "4fAAhQwSGooea3pb8A4REUhMRYoFvDXAwUJ9nQGF4tY77G4ss2n85utpxzv4SDSnHCiYy3LgLaG5pL2LEF31ZuxD",
  "key40": "5BwS2TY6EpbrWfQzQxHL19FPTyWNHRKQdFiLFefWpJ6RgFVnjQHSAGjqzGVFrsMoh5Q6oa68epts7MdmUQmyBgmm",
  "key41": "4jJA3bMcDstvBZYdXhVoUkcFKKNCgjKQj5ZNgocDeiBXySTmzYTgExy1BthARkVv7fQ82BxuduDpuSU5mqhcF9Ub",
  "key42": "4MEAHruUDcD87A1NgMeTTgQ8JJiTHS7dYBnmpbY5YErAMnZaybpA3RmgzQnSxqzCdExNaytCrwZyV9d1gGJ1me2w",
  "key43": "4W7tAkrUBdGs49eS68B1ZUsVtWM1RbJuJTEHkeRTA3co6tU61aJAXtMgS6S6sxA9qCtGeGSg2osZyoFpgZnkGnmM",
  "key44": "3ey7SyqxfCUfnPcQD3w72NTavLdHWsTwY1XcbAHJhhtdPuCyeGSm6gKGMsPd6gZ3J7RQDXyMz182aXaMyeqQw2hF",
  "key45": "4qzYHXB77Q771zWVZDDNXR9HchRUo7Zh1SzJ2amVM9JMYx3oJWnALADyNM9vRnR3JdDu2cpCtwcuNsbrLninzTZz",
  "key46": "4g162z1bjEjrwrPXqHQtYg3NEjoyAnYTwAK2HPEWgbJbgKVu9mMi4n2WFZi3kh2nSKMLYH138ZEaiz8cjcq3MayE",
  "key47": "5qFzMXknvo5c1CnhqeZQW1wDLHSwKNPLskWT3QF5kuDghGXSMLY1GZECK1cN44TDKph23EGLPWJt5rSKUSaSEW4H",
  "key48": "3JpxN1DGvZczcaWsEiremTPWnUb1nAxaCjCQies7VQfZG4VnYiMP3cESkC3p4vcKomBBwQgcGpiJEux64WUGNv4t",
  "key49": "ZYzqxE9wZg5vd9t6Jd648u6LcASx8hBxab41tgwtuAphJrybdri75stz6E65WTE91fsKH51figRobNjZzN9UhU8"
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
