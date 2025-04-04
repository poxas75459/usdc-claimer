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
    "5VAfjP5aeVo77ivHnS81U6P1WztUqtmWACF9tHmzqrF93YWK5DGyfSqv9Xqe5MRZ7LueJ4upwE5uWatfdWYZwY3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EnxCiSm84hZdFK3rVi2Qgmy6NdAhjRDCdBgFoUNk94dZwJRxinoRK7qCf3fxoKhEDTK6pbVimUE5A3Vzo4LbNGP",
  "key1": "232LC4t2ondJFXRPMjWY7Qv1YTAPrBE7MvwAKrw2Ja5rxzuqPfdFpqTZbzFQUc1uU5ikdeHXarrL2Hou52y3A1nb",
  "key2": "5SFreVWDU9L52X6RgFZygQ9vi6VejVcbxDj5b1UfCD9ra48CTSQrDu7i5N8hFSrG8FAuNcENCuyW3Mx1yYLzbNaY",
  "key3": "m8QbFGvHZFEozYk6F8dyGrHGK9j3V7qSHVDC2NpEaJ5VBTzN5fjMoQAyjz24o8p9Yjots93CofxzEQ1UTCJ2351",
  "key4": "5Y49YFUuGqTae2fXw6MHttWvZzLZ6va2GGueMW9hps5FEHQqkso9eGZYY1g4b6RoV1EnGQV8XhwcEiC5ddDBfNNu",
  "key5": "3Lm4puiQuBsmKjizHLcCfvX7resSzp3CugDCtUyfGECAJybGU7qq1i3m5F5UVKqe6Ryd6isXpdNf9RTwdTinCF3s",
  "key6": "4BUe4c32kU3fCQsS3azJQugtsUa8k7sQ8UPdkdqnjjSPiWDUuSbZvRarBwGvnsToaVYPntntEdt9PHLtVAFH1w2Y",
  "key7": "4Nhzxmxe96eRodk6T5V8PnuDxkaFaLdunri9if7zHGXsahKaPgHTo6PjDLjSSgdodkRhCtPXT8igvfiCeerSS4w",
  "key8": "2JTwibeXjYLU5JHYMhddnaTgzkuUW4T341cpKeAWQrTKaom11r7dy9GmknT3oQJ1i4rLZnCYSGaVhBbwAHeJaWYo",
  "key9": "fk2m9Rm1JRfH6HdzhCJvCBGAxagtHsL8bi45UAzf4aT42KZBi3FyWS2tY5GupCmWc81Pzarg7wfpKU64R7NiMge",
  "key10": "5w329n8y1Cmy3opE8WHwbJHCDwWwTdAvnk2g46i47qYKsdhUzKEKHobXosCg7NC7uqv7a1LjD3dB2EigTAMiRLQa",
  "key11": "2JC9QfLkfxFzKXmNx7sNmE4LQFnoCRx8L3ffkbrqkiDGcYGUA2CztJrvT5evZpmTB2W52RKAQ5Dz1AQq8CGXWovB",
  "key12": "5TWNJBjsYFD93igp1dZ4F1aE43SB3gF5mXodXJb6z99qHTVERRmuvMaWbtrq7KAjz7r9YeYCxaBRYitToxF3PAoY",
  "key13": "4MdwwfQU854vpUwuxA8S17rNDV679oEBPmeCq2qUJNqSAagCuf54t7EHgzVf3Y96CkV3BjsCLqbbD9SLHCjsFhNv",
  "key14": "3uGJVd6fca72i4287EpsqD9LgGujv6k8jQdLR1S2UHsPa5YENgZTAZobpdBRA1MD51VB2Fk3dYGjU9aDJCg2NbBr",
  "key15": "C64Anw8fQSahSc28saNRiVQ9SGYpB9SogU8krttg2QiXqm9aC7PtMT3ptk3iuF2yq71pnffZvwA4Spe7CbGzei5",
  "key16": "AFWUkTk6FKifr6onEcP5eVXj1UF7pQnG4K15tJN6XtMA7cYjqMFTiBBxPGapZTaBiyxniN7CLXFWew56NzoZnUe",
  "key17": "4XVkA7XKog3S1UMVP518kxZipuJNGPm1acADQiz83wcwWBszJvDGrJHiMaYZbj3QGRFBLXTSb59gmwg6yx38n9MX",
  "key18": "2EZoP4CSxYcmzjSECrrBt6gzvofNoSSFk2rVDJFeejeBTwK5V6FpVPygxkEdP7EBMfaCPSXr5NmPR9u9DTdbgB2z",
  "key19": "4ceZhzfVF6nKRABejJw8jt2f1ZfCZA8vZw9RkmNw8oJMSACQgRqPUVv3nJ1kN9mwP7rqK6houGSkyUYtU8JuLarp",
  "key20": "2XyHgD8VgRQb9iiNnPGQBvk6dD29Abmec2Zzevi6N2EGiD7cPux9ZffcBVWBUsLfoFC4sEczRFbDtkYWsuxyoBzj",
  "key21": "5Kn9nBUCKickBvs3UkBp5K6uZhqLbayJnFvWkDuLhJ4c7S3JeUpMnme9rv9X3LCbeTKGGL8MSYqXM7hPkPW4vSwG",
  "key22": "2E6dWJnf6UkA1U3ym1ATbp2XWYfE79uehURLdDUjKdnvZwvXijaotg8Kx43byRkhS8SUumcfRETx9fmbguWvpm32",
  "key23": "2mXrhpGmELC3eSBzwtaj4N5QoesPYUB2C3BWvQ8eeZ7P9wYvW9RMHWEwwGVFpWVvNjJjqVHh5fnmx6i2QXVZvPdt",
  "key24": "33YZ2HZmZwBZqd8q5D34RB3kVNwvxGdFHcYAVMgrv6FeQxefhYVt86evfkGNgpHNKPEciaSZhTq5dzqUWgRGtDYG",
  "key25": "2b65SXrXbqLSNeDAcnPZsdyaQvuYbAtrRvVbeY6VnxpmACSxboGPhUcSihVNKvJdUmpmX7mH7CyT1j2MFgc48Qhb",
  "key26": "3cnj1Eg2qR1u5ULiJEoo2Cskc3QY855MHT8iZhT9WS8wqtsKPJB6rQUPbrsWpMTsDxC7M1qJTBFt5UZSrwhdProz",
  "key27": "26b1hRWaCdjNfobyyUGNXF5kpp7sj8xUXvsbweErkxwKsz55RXDPofQMQTgxqhUadUm6YyR3WiEJSNMdwbzVFHZc",
  "key28": "4X1jEtc2rropiNf9mumuiy2aeYGojcoeN9xNEcfDNxcwW2ZEjJVNMc8sZvm16toLe5vMvu7h15L5sWdDwvZEv7C3",
  "key29": "4GJSWVdigSEsCdTkohFWeXmcRQF4y5rnJWbz7pHKFCun9SFpQssE29F9zjzKAqqRwKAUg7PPLJtA4HZggFXJbJXv",
  "key30": "29LRkQNgDBMxAkrF6agRbMXmYiroyyvzi3Zarfdpixx7Qt4z8oan8x4vf9nmMP2w5dkicuj46FJLR6ih6RLRFHKc",
  "key31": "51C5twF3cg3qE9aMa4zu7R6BXAxV7rLuTKsMYrcpyTz5BSRspFp2RqsaLPYFSUnSeYVEps4arH1ecdJe5wgLnmBy",
  "key32": "RwyC5yoZMcQuTACJKdoF8sQscvighuKArrgRUjqDTmi1KZxPv8tDGTCW5XfZUbGs99GAxGQZariMVCVYenTT9aB",
  "key33": "2x2ZYjFJWcUzthspGV9r7wyVy9YWHnvTKTUNjNeL22mWcqBLBWXPibrJ3fqFRKQvdkLnMETk1TC2F8yWpA77xGUn",
  "key34": "35j6Hc4dcagCB66oc4QT8tZG1i2Cm61u71Q136Ab1yWucdqQvTs45vcDExgRzznrsLpFLcbgMUGCRK2S9bzti4MA",
  "key35": "5HuJfwf265snJrToYweScnR9i8nF49KMeL1iWHEnRD4J62benkB9WWELhTsF51bnRTS1mVLr6BsCRnemuDDZqZbX",
  "key36": "5WNuG9jcvP6x7Xfc9hT1ju6zppVqQAVPEJ8JFd1SjFFrjwNLgQwP1Dbbsw2cts9tomvYujPsbWnMYFmmMVWCb8ou",
  "key37": "23DbKqMKMCUTjz4oXfaqUZtBPUAAcGpxcBJJkiLQ5ttpa41kqh8kYbz1ZrEHDR3hnTVKC8VJRqgNuKGrW2xp9uX2",
  "key38": "4MP7XAhbaGVHnUGitqeby9tywSsEVxD3evMsRzoAbNor5oWgJEoBCSBg3NEqt4LXG5g12cUZLe3mpBAVSnQz2CC6",
  "key39": "61WufxcTH1zhR6x4MmFhjKC13eLcfnQ81k6rfsR5hEzoDPiAaGPy7ctFZhz6FkzQVTfKBgocAX1816KjaKuSmMY5",
  "key40": "5voPpM97wBFgRYEtyY1DMc4Bt2BCpPWk34g8ispJjhGKP5FVXZRteWGNbjTKPXZv7aX1tJKYqGPmcCE4oFx6PAXc",
  "key41": "2FnizD7LSmEe8wfNKgnuwxYbvumNjAzCUjPJ28EDmmjpJfgWU5ppukBJ4SCorPsxdvLtx7LPVKqFEaSAhcyivbNf",
  "key42": "3FXJrB13YAcXrBFZ3xPZQnGjXx3SEhL7AzM7kZbgDKZNL7aFk4BQjcitmcUcP3py8dR6moJ2KVd3juTgrBK1jfWv",
  "key43": "3jcfsAvWJ5Nj4cmdak6f2aQ4G3Pb7V9M2bwtxzin4ZVJhVJLxTZpuPx6bbyDZmLfSzSVrXMAsHvQ4NssQ4zSu89x",
  "key44": "5zuAMSTPTieCgRrSSjT1ozWTQvVDbLcZvTwj1keWLFZS13rw761u2gMuzrRw1Jxg755YLpqbjvCBpGiaaxdCmeiJ"
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
