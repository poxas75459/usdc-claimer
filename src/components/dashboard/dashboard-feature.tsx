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
    "3bPRq4KT8YJTbjh5hz5C4ds432YQ6VEtdHguy3hpaTUYh3zkmSQe4LztpXpi3Y2BfxZQGwS5yNJWkBXG2Xdy4RtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4snGGvQJ4vcZmHTqH2LsKf3WvWSVa4r9xhEPPzcqsrtmNKuab1EpTuZ2AhKkBPLheDHtpBAhog5opbGLg4AfSSap",
  "key1": "58aHHJAwsmgG1NQSKrxsBzqGLftWLpm4za7H1fiNhxatEL4An3TS17JfdTFgUA4SaERjL9asEyMkVkGgx8XpEnvF",
  "key2": "5HqEUiDBfDfg8vVCjwNG2dGaLS8RdZTTiQeeiBUQsUMH7C7Cm9GNwAVBqSSDwZGsTofTnxZoVS4iJ9xaueCwVLfg",
  "key3": "4ZXGS1yMDwTUJDYsmgPSQhFYMt8TDrRSEW2QJr6AuUY2CWLXVaTQB82oaRy3SJAWEnx2mimihm2wfLDuwCjdAAQd",
  "key4": "8VtbcyG6dqEWCDHuCSgXF5rsTvtk6KQS8v2MFG7DSwafbNn5oYtBRSqeS8JDmCMmmvAQ9noUi6mgXwxbG8dtzuV",
  "key5": "4kCnVgaJRqsWBiCMNrLsAz63TS81ZqDTQL29urYJYw3t7KcEEbQnxyma3g4nM7AQBd5FmfVjcfLYkg1nrxU5BwGL",
  "key6": "5UfRT5PtNRW2szsXMms28B3rkD2GZUvhmdZvC3s6gX1o21Z954QMH5qxK8dgVvia49zXoPYTZ9ZjuyJfndXvdYWy",
  "key7": "4S2Gqckhfwg2iU3FFTkuNvUSDD1eRhxq26gxMw3zoKBuY6w3VbqCAp4mW45k22e7xtytHRszbBEqMKL58p6dAT56",
  "key8": "3YGHPGta2p7o2V4DFyHzqBgnCNrDFizmDTD2KBVioqkXA6LKtwf9HoWMpuvgJpiCc5XHLAzLthmnQLmeEFykxbPB",
  "key9": "3C1eZTCAejVRw58CfPk2d5pLwsxmUm4XN8dM6L3uwt6B58crxc3WJNJQqfo2FozE9RUcJN2rbts947huRqLSnzGN",
  "key10": "3pZMSqfj6E4WJ3iHvEngfcieFrjRHgHWbwEMuugKWfDkCGfs1n15eKLxVUsW7cmSnkfrMaNmQ9k3dUkDfXLEipo6",
  "key11": "4Z2bzz5TX7GsQ8nqM2Ntac2SBb77AdqMpE6JobP92sijg8yQXJ916LdiQzyevbTmgmnS96kPAWAUSYij32EJZvfR",
  "key12": "4BNjUE5SCqLeStDE3Tes2N9MJXa37sEDGfuSxDuaKSgrfeDfQAUzTEn9cEXY2MwoFwqK1QoYZSiy8WAjUMs2ymsC",
  "key13": "37Gntd14163VbQvUp25age7zmmKEoTYnBBhEbF76TWUbMi9kUGGv67ExcgyMhs6nJdogYYUhwN4gCYvVQWhFKMnv",
  "key14": "JoBMWCPAS6snAcsnmUNMgETUWiaugEUQAzSPDqGm7aBUmxC38cgzcB1WRye7iTnJr9UQG2vH7Gx5cxkzpJPVPMv",
  "key15": "64BmSoxHaZuwaTgnFYZnpRWXqctj4TqvCV8A6QXxJ8uFKb9GVd5wVeJ1EKM1vqLRmimRDEK6boPRaWanLuZ94biX",
  "key16": "2RdzPK3hih3wg1Jxvod1JXMDWuk6GShWFGgN9jePH424YwhudoxP54wXxRurv4cv3pUgK9wujLbwomFCoHihwd3p",
  "key17": "r7b8B528anXBgwkHY499KStzrmvTAjk4busZSZ5e6XYHk3nprAHdw4oBPz1DntxKQdZidtbKmZvxAcEQozUfWwM",
  "key18": "6364bHrSbY6t3tzT59jwXS8MgLSM6Yq8fyc44wvz9o9iDrLXog76UGSfFUbejxyQWHB23UMJsUfeeoBMTM5QFZu2",
  "key19": "5KNjyqvhhfNVtSqakpDSrjSYG1dE4kTjKC6MVkCdy7TwLYf6dsU2F3CYwtJcsKd3fqym99dd4wG1vYSvDe7G6S9B",
  "key20": "4uy3tfzTKAgxVNygUHKiqEDhdCncYgJLJBe8JNUJ8yNyv4YvPh3JutfN1H3j5E1neS2MdCkh5coEKpzK49wv8aiD",
  "key21": "UCRJxaPQbwcBZMdnGcpqKBZrj1ryKWkgRzPUthi2ZKwWqKQZSK6ZGMyx84nBQmxmtCzQ5QCptybvyY1ziYwLiG4",
  "key22": "3G4tTrzRHQpxUoKyur8spiSNMz426tYqEtBgLYHz9LQgoEuzoCJ5UtCCQBVP1AWMT378HRkh3p5zi8dX4ifBQ52u",
  "key23": "5hzn1rSPLUKejY9gqiCGiaRJqVjyGgho22aqe6FL2xJBxUTsyzPbix4cNd8x598wSggBmsZtsXxiiKPUuatT9SNJ",
  "key24": "2hMXhpzGngfiXGN9eEDqUnW3vs4gxbYwzsBor1JTNJ32UycQPTQndLyQC6ttcKUnnC2wdXbwioYECYtosd636htA",
  "key25": "5ZC7FjpKcA4pehgxVPPAE7ULJPSmaniUbbN9k33ko39nH3Cf3uijE24uT24co8SVNAd3DpPKL6HPquCLVkTTzReq",
  "key26": "2wgKQasDwtCGFwRb1b73CWcDuvBLp8Vcqc7ubFxnaBj7nWoaJvn4G67hPn8LfDt5ePENdh8nUU58JxHb8AvoXYfx",
  "key27": "24eTjSv1MCuohzbPTKsnk1PHxaftWab1zWrqGA4QQMtznuZhZ6zcXuHrQMV6agRnR5enrwa3dzjxcNCsYPkYh7uq",
  "key28": "2DvpSyip81tJ3x92DrBn2EVRTsEkBaiD1sn4fvfSFB9sEjqD1YHDKbi6cvEsoimuvtyr1J6xUUdWgeFeAEhzTbk2",
  "key29": "2kiQ6aQB5arWyreefCjSLnQW3L8k96kNjKz3mtcHQo6RAXN4sUvXD9T4iwfmaBcJ9xtiuz6TYMVA6CD5mNDQcCrw",
  "key30": "5H1mgphX6Hktt32G59ye9LLewawg7WyTjvrbseWkNMJNq43L5gKZJYXAVKo6EJXmX2ULcDTcjatxfA8HBSUn7Ncw",
  "key31": "35pUn5fAxBdqfWrqzJYCamp3rvo1WJLMKv1kfSTK3t4oK8VJYjt4TcpjDXbxN5wh9siFFmfB9RXHBfq81e856ux7",
  "key32": "4NrWKsYTAbAQ63qRkNaXot9cUQ7DLeeURr8aZTPyVf5fvTyEit5WckDUPJ6LcD4mhGthtLQhmPQdrsNYLMY5iwvG",
  "key33": "2VLpcefUuM6c4qKAFvuoYJF6NaVf4qppqrU9uTr4DRPTM3oKUsN9kexto6vDcn6HnK2D4UANpPdRnvRzsqfJdEdd",
  "key34": "5LLSJvjv9he8p6NkVpjr333aKgVjGtYWohf5NNZKbFpyygrhBBL3995oTL3gERyyDd2uejHCnU6yAhAq4sbWnhrP",
  "key35": "4KqyQYDRadEgF6vmNxgvnmZghm9fFjkV13bNED4MLCzdE8mQQ9jEXg631dbb5mAzCmMBjdyUHDs4A7PsE8tV2xDk",
  "key36": "4Pp8xsrdRmyomyrevjHdQeYHmsse2PF8xeXzwdtRDpLSGQcw98n7nh4UKPmSzpbaFueDXBomfmCdZDTUQWt2A3ao",
  "key37": "wK4yuSSdUpjAU514pvQE1W7zEJwWwFQnfkDzQBib31e6KZFtVeukcPbF2hLgWDYVUkmHKwXVqX5z5JqrnheWC1X",
  "key38": "zCn3QDRNCZMuP1zL5nFsxW9dDqhFkR3EUJScmvBW7TfqVD3bJLNuviRyX1FnTeSnGThX68J9DWwaMJuz2K9PNQF",
  "key39": "4d441hup8Fq7KS42aJz9bcwH4UdN56vpKQuFysqZrCZ8J29J7XY7g6Gr6DfmRJmacJVZk3g68gPuFBd8xZ3Qi3dd",
  "key40": "62fh2zqgh7ZGtUoSNeWyDzAQaxaahNLJNt7bJRzjKUWx34dcjCya8eLm1zvWeKJnoEU26E3bPvaj52yJ9kr6aRxH",
  "key41": "4Sexhfx28fwTWLx5YLAwFSU4dpzBMHVoTTX88DyLLBhdsUMFzyMA85XRzQ3vG8zQHPL1Tqpi94wbLPGR32JXbEmh",
  "key42": "4dqZSoQk27kwzKN3pnxJBbzn87P5Q1gc2JAGC5gxxB8ZzgQdugRrextd2VALNvq2Km3VZuYdhrY1EC1FV3NHmFgR",
  "key43": "4haejaT26Ps5an34VTx5y8tWXyemRRkncuSuzJYJgzqr9RDWgCukBQDHcpRXgoaMzqW77hvVJsxHRCZ25BSjsiEG",
  "key44": "4dFt7rHRBZ7obeUx7dnuC7dYppLWcx8TQHaCsoAAT6iiTYnhe31f5WMvGSLiLhJmPiAkPHgaDm4Rh2b7HJ6V5Wqq"
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
