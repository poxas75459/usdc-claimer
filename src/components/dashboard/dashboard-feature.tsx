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
    "5XLFmbGBjLY8QzLRHLyJJGvux3531V2QETptqg5LG3BeQCFbxCtCVDM7CcAUcm8Hf54eYbSVD79qvgwpkurREqpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QAxRcuWXpk4rpZn3Fow8RncDMkfDpLJULQQLNYdDsszgRqGE87MMCogYRhSPWyVX5WhdrueziK39RVUa3adzHiF",
  "key1": "rnWV166YaULHBVxrTmTWJ4eKxGkWt36eq18y4xNMFZjq1Q8Vzx4tdB6TDyFyaasAhw8yuYpKvoGov8zf1bLmCTf",
  "key2": "49PJP7Q4Qm7YVtsw2LaLZCkMggwP6S2Asr5rt4A8oh7KRCuWJPRXU3HW7jgcjDb2wEsySdh36qRcDQJ2uDscXw6b",
  "key3": "4WWF5RFPEZh7goy4E6EcfFCLvviSEVCk93UbCQzqHDQKB7FBx13K1QozT8VYu9gMDBNPRa2nGXYSS6cgnJijrFq8",
  "key4": "4X6PAozYqm54w1qeGCPLbHspRbUSW4ygDSTZTeWTmrLQq4nk6DmeMVmZziKap7NMC93gNGD6PaW6NVR5kzUJy1My",
  "key5": "mU5yDBHF3oa5iM9bZhwR1DCjVd8oBrXFk7NzDjxYu9MkSKyAj8vGWeA1B4EzrVhMH81hhfJgAaeM3Z5R9bxdai5",
  "key6": "4jv2SmyvgcfFFQy71JwL9Wxk6p9GXJbWLqfmkfFphjbxBX95o4Vi9fnagU9f2bdc6Ugat2KbzfoYq6YsvCJatqGh",
  "key7": "41yum5KRG4Nezo8AgqvufehprHv7XhyxhkfqMeSE4oextTQHfPBgntnDrXbv9rAZyy2AzDAMtsU5sXQXTjiXebRi",
  "key8": "7C9yDuwNMtBjkYwZVEjJif2QLPG9sRXCwtHWLFz7pLXetfH5nFgqc95ESXVoPrcFY4GJDoj1nz4hzzTbbrstyYY",
  "key9": "3QHthSwSbPj4HezQJiSQhX4FFt2eaoNo3memjDKtQ2wnBBAsYdJRF5PrRWgaMwT19CLw1AckniVZMXtHHHmTBihX",
  "key10": "4KfFhBEVJGQUc8jSvR8rgNZewrTTFZ9Pxr18XY22K97TDiKkKyMU3GTMqN2fCcVZZwAxAYn44fzqZefxZSPSNpEe",
  "key11": "2FzdZeWRbQbaPKLr6oNBEajrnK9XShJ3YLcJCsZ84miC29T7JZSr4sjtuchSFq8ArDXABsYke15A9G2Au6PprKKE",
  "key12": "4Da5YHjrHYR2chksPx4p57SrAeaYuerz3GHSt5WH2CtCNV7jLxBY1tRBrWTZyZiCzhnLu5jDw9ZFPSF2h6rGtYdy",
  "key13": "3PfUxvVT8i8ieggX99YaEdrcFGzKDCnJ1Ngz6ZUPiUjeyRgywhytyMKES9hDgZX8UqPGvvJv6ab2h5jwJjdt7W6m",
  "key14": "uGsAsxfxuGQyUhjrhNpZTwvKVKkrWsXo1g2pQepaYcbwgRzQdoEatLjuCEbjF3KY4SrUkMxBGPrjNcFfghwpJwX",
  "key15": "2RzgRpibkZpXQwwfcYJ7nzok9qB7TruaUMKmYwgwteZgW44LLEstSBmtYtMjbgnZn1nwzU1QPP2UqPVwQ7qm8nkG",
  "key16": "3cBbyaEy8bATxy3Z5M9sWNAbx2i24aJHLercUe9BWboSsMjvuWX6G7VR9a182YDjMuhHyyxES3s8sjmwg1734bH2",
  "key17": "2hbt1t2LfGXPcUQko17Xp1rLeBMwRmkbCS5FiyzVnjghY3ihjuMft6vH6kX1UPPogRyDy78YM9JCVCbakGNG1PFG",
  "key18": "3siBD8RdeKRTuest2dtX4xZ4U9U1gciVWv4mCUD2MPXeB7FRsuu7b3KxfENT86xKfdE5pVtr5BDRxWsU12SgoUR6",
  "key19": "4T95E7j7M8wEbC4odJ66VLvEERNWtYdxZhkQn8MNoUDdBzneUGMmmy36vjRtkhvbsUsm7KsQrHLVfcmT78chA8Lf",
  "key20": "6urtSQjujNHwPNARUTR5VGeZph3WnkMxhjG6WLK9RR5GDuqTnQx5hHV322wvNxMHanNPqCFJ4bpv5ncb4hYt72a",
  "key21": "ivVdxqiR3oJjP3PurdzbTUQEZ9VRdptxZSHmtm7dFeP1T1MfLMJXLB7foecfTfKZqSKxowqhfnRuLJkz9dUU9Yk",
  "key22": "28zL7uWDSs4vchQBu77yWFADnsswieu3X3zaD5Njr1GNnmPXc3vke8jqJ6aZMBVJ1XHdxXUWvRn2yk1BEpqKcewJ",
  "key23": "5cAmCM3ypVmjTim76NRhxGSvEMYw2fP6DQzc23ipJqhKoKZrGXMcQ9M6DMsWnvnoSa9BMUDb3pp1EFhmFvJsTdcJ",
  "key24": "83DutQGJbchGeZ8BPhiVRAsebuQkYpLmtJ6FTbRXvPV7CGrsojqhhhUWkgwCpqR46DxzQRwAebv3iQqv7Khn1Ha",
  "key25": "iqmrpvMEmKjsqVLFuCK4ft5dBN2ettRwCy1GAzTtftMVa4wnUEsohoDyLup1PKi34Cyg2WUHnM6PGohDW6bnbj7",
  "key26": "ro6h2hJWj8oX1GhzmRHoJajr7BFvnexTtkywWqY2Fu2cUP9JxosdW6bcDVgWzxdtWwyRMdoptrQPjdXaGeiSfEd",
  "key27": "5vvDBcRY9jUNGU8Hb3otyKME8gDdfB35VaYbGuL2c6x9Phf1HeSQ2Gwk2YW7uzEaGSXwGJzLjKGucrxx5zYeGPAg",
  "key28": "3bBq5P4zxnZDipTDpk5ZBE5k4obty8iPMHGw7GnReXLF2TZq3ULsjF5oW5thFt5xCH2PQ3h4Je8Uany3wv6cFPiS",
  "key29": "4ZYujx9hDk6gMCz7fzFL9GVaduNQ9eT5LqUka9aWdf9Frwvi32dSnAjNW3zV7ZFF1W1FxBMuE2QYAQyEUq6tWsy5",
  "key30": "J7krw18apfzXQMEvcXXVi4P8qSJZjxQHm6DDqDQE5RQ1Vt7V8oGXM8KqJWHeFWSJ5BSy1cRkWvfiZozHkmQh5y5",
  "key31": "2duCheQuVQgveFNCKdwaG4djAnQ4N4wSCvFVksmTBo5bEUEp5BLP5gn4SYCvqDaRdeRFeET9TRio2sQJ8nQQurPn",
  "key32": "2AAQsvmiVywkcjNzGtsMpX5hSXSP26F9F5zcyNVoXLX1mFGuyzBPdf3azNMn7duEBAMrspkqtVBromgZVHEjGHe7",
  "key33": "2dYraszg1kC2gKZXJXFkRC8T6CQcCX6Fd9UHfQCo2LBGnDwp1HpkvSqsbtw9WtCwBkmzUF9dLEHomuoZEvtAWgtc",
  "key34": "4f2QQvPBrLZf4rgTR1FrvRhUZkH2sPtMJmmhXSTkFy2Y271LdLQq9zQ1UkehEGB2NJDXSRDNWeFRRavbEYuXKUM4",
  "key35": "4iUBVJtEqv9umqTFFhMth3PdJhzRqY5BcWNM41dJMKorW93PEYXtMpVRESZ2ftjih8zUt6rL9hnz7t7uGHQ1atgU",
  "key36": "34VVJULUiLfnuHJa8RuBw6RNLvDWUTrcnWBwimcdKDmP6QCuCJ84oVki4Uv5pnmAiywkiwWBTftH41th7HNSFYbw",
  "key37": "5pMSAysULri6BaWnucLuqLMZpEykVTJ97rBsqxM1FNDSeFzAjsBiznweNb6juF4oGskiPQknbRe91aR8PDDWQKkZ",
  "key38": "2YjLezHoCVU55QULy1hQL6uXGGY26Zy6hgiMgVYpyETYqe3m91ihmA3xfbQVpESMMr8SPCC14WoqLJywncRw54Kc",
  "key39": "3WbjAhKyEm2C7Zs2pVPXaoXZ1x8MSW2dDwf62tuj1fLCMrqnx7z3hpUN2j6r3i1pWeYzxRXUugAHE1X4Dj9sM478",
  "key40": "3wYCgMLvS8yV1fWsmVnBznMEMWAZ67ZiffW34MHenTL2udefUSEJ6heTytnDk2uX2rzXfSxUscNRtxbD6WLeFmvM",
  "key41": "4DYzPFHFoR2rCYnkmZazWdjMdznt1ynWuY8i68WjoAhrEvjkqEyd3Yie2GyabKHC9YyePheqGYUYd3QSjMBTdcoW"
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
