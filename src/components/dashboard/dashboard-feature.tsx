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
    "3QLXeZMLaPNTtH1Fju6MVdE9sVQwgjif7JHN14RNhjqLXWZnPETcBGciykgb6jCrM9jCc9onsUtjetzqfudivecv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DiaaBGghUfspU6LgrJsc4PucJF8w6QaKFPwK7f4StVCZAh9szXGQ9xVXxdP7UCKj4nHNmxdPvT7gPUAQKfnLTxk",
  "key1": "5nywmJ2NZ5KeQaBhGbs8nWig1VaKMm3o8q6X5ociQ8nFARZVNdYJKFeZMWPfjYzPrgGfqkgzutqu5RQERDvCcZzC",
  "key2": "4C2B2gkCLx4RpDKzcTvPVQJEGBKDve5aGF8Rg4LvHvyojgMSkQrRawFeeg7JTvSWpVh2cxStPcGjHm9BuDkc2cX4",
  "key3": "2ntLWrnFb8Wu3fDe4SoNENyv9CZuAZaie1PrcLCVb1aKqjABc9cUYv9N5BVqTCaUxFFS51u4z652fTAKBzysRdPg",
  "key4": "4hgQSknoytzPUvhACbApxw5eXu7yUzg4cMaLDcKTzKWkcrA8mLjzD2jasrcYys183x218hrPsihnyxFynfNjAAgP",
  "key5": "2jLHZrSVKK7Y34d1ENaSQeTCF126GJH7rHGtXvEftRxRzPdxMFxhzz5ZFEBbjMrX8PgWKxBDYRVPwT7Z9s3crEM2",
  "key6": "ABgAmSjMZD6mzb9Q5pE3HjqpZPFN8Y95YcjmkaVsv68GEbxYmdHyZeEPWkSiRuh8jr6cGSoXwHx5B1bL2Y4N3d4",
  "key7": "2uJHCoaDbtaLs1h6H9GZnH63FiK3JMGvzNnJKQVg6GnkPKNaL3huWPHGiXdg1apFubbyY2bzCk1YfqgFBFWijygA",
  "key8": "4fN9PsL7YpNb9G28yTbv29dJteA5rbn6a6azo5i4otWNKCXQCNgfMaRETQj6BqC8YY5JJsN9kpNkdoW2UGE3sFpk",
  "key9": "349MfMPjvr6U7HE4thPoeBCHoH7CgRB2U24EkKn43fSgNhvTrKGNioWern9R4pT2dWdRVadMpuPx2KUa3m3vGYMT",
  "key10": "5bkCQhNyuGoFAdmgmaY425NaNWzWDZzz8tBtXjBoXwF7yv2PQ3RMHrkTVLzC68JzDVQFgW86TzPuq52a1Hzy4aju",
  "key11": "qwuG1m31JcoFK4MehiQxmH5eEzVGARs7zLh4weq8W4YaZSRERqy17TdyhMoRsiaBUsWvsDocbAUds1isoXdesuY",
  "key12": "25XbDDFVdrZBos1ZwBqAwAH351FzR6Kk7Lo6kiqSo5uFaKz2sDDDiwpwExkdE96cSsdRmJKcXf18DtqVDkhsUsNP",
  "key13": "5KRBHM93x1QJrkTYEtKZsNH5wJuuisHi9P9wgLtrYHZgGxu9AzLPvTy7fw3bAY92tL6YdHVdNSECnw4mxfPfkgT2",
  "key14": "3rQk9MsXS8iUsK4AMTmnguRJVaVQCwdTM27n1y4qbqgfqH4AhLkRHAKfx9gguNpcMMDvPsiy6WdkaX9PLnSEV2JG",
  "key15": "5HdadFp4gMDxPjhi5AqmXzMDvAj6fzGbf6hjXiVMPUrJ5zF6FFi99cPKTUZWoNR622yVkyPKhstXQuhRjD6gn6eP",
  "key16": "3G8ydP79Y7FrYURvtaRTAnwmRQ1x8e1opDxeRtoFtFL4nTbZRmGZy2oZCTbXJRkfTkEpaZHMaVrRrsbCsVTRkiDo",
  "key17": "H4r5rZ24FwwKCLAzwZD8BtEaxBdHFvbo2GFq8dTGebhru762RTf2id4otKDXKGaEHFGcbXK3FHdAuZgaUiABgfh",
  "key18": "2gLmXCoCEWhM2wtjeUmdVXxtyFbF6GLChEfRNtdthLYigDtwS53vPxDeouinLkDy9shgsx7aSrNEvnMYwFKqUMas",
  "key19": "uwRw1t7HCcP7JqA6FoTz4W2AfXNWo5H1uPS9iW23QmzkNK2mLZLtcA1Ej6YdgB1YwYMrSbdCzG4p7rd63b85fsi",
  "key20": "3ara7qw6XSS18mzSFnq6d6VH52BfReGLNUCSR4yfJ71MPGnbtt3NBEqLyPHio78Md4ApRw6wJ5FrDfJ4DnXFfQoT",
  "key21": "4V1bt22nGzcgL2Wu4Q9jR1otEr1VCwvPtMGM5qv2gPcTpFi1VWpWGFg1kMh2JQUjbrVhjpSmJQ9fiFLAb82jHUFG",
  "key22": "5uMBSWax7KbzcXVM2sPLi51KoJfXcrvwn6U19UqpHrXxi8nT48HvsgkQQqxYsdLb6gg5HUhTmnM8EtSzqhGhKArt",
  "key23": "3RWFN12DMd1HyXu55jDkQJgLNSmJWGBTEY4d8BDe6xNw6RQa4xX6y2GqcZTSnT9t8nL5aFgjCVP6fZgq35fif2Gx",
  "key24": "4Ehr6o988WrhPikUC9FaXuFSHbMSWzhQ1xmSSDkp1QHKiSJ7YPRxpurdoxgWSmgAF5m7uz9FM6fW4p8ihKFid6pG",
  "key25": "2wExCei6HZofDHzPra8sfGGmLdR8X7yC4yi3q5bgd14ujgZA82prWf3ZZ8yzBbdgwzBp9qSuJnXupckvqJ8dxpCS",
  "key26": "4PcbGix5xT2YbZeiQNdxs8ohURGCKGLKCesBVipAU8n1hd4cTetE4yoqY3ix7rK52GPv8KwGEKwnJQXvGTiXVzEG",
  "key27": "ZuTJRbpUFGy8y3Uv7DcnsYHxnPKptoKAqFKMNhFBb8Ne5QB99YtTKYdhaKvMHW4j1t5yfvxUKzG8LVoV7iHjYVw",
  "key28": "22NibkCqpXXfpk2br7gy47MqvqaQVnB88FyE3Hso6y9nZ6MZpuUgsaCnnN6bzkYPMBvdzFAdG9a2DsNY6R7ezYRK",
  "key29": "4zYtgaspicbVEWZFpkzgH2LamU2DA9eVo26H1qqrFMjnDQWDz2WWEwfUnwdpJ2HgdTm2jbRwt86WtiPXSFqk19TJ",
  "key30": "uxEFuxDsrG6BVY9sFwnZTUwAs4TV6DcWL7AKMH3YoYp2C97MvSAp4BtEX2nF8Ljw6kzdpy5yhJbXivR9NJxrARz",
  "key31": "5RtuP9mcV7EpTWkDyRtQuifvrz1C8ew2PXqeJdz2aZaJkRpqry9RMcWaDUshHWm1hPTYJ1VMkwoGBkCRDPwy5hwm",
  "key32": "2NWK3NS8VKoYtVbpx5uXAqyw9xw1WAc8mBmbEZ7VtEGNbyFFWtvJdHsETd6pgHbrWgkGuucosNjQxVa5z3AVia6r",
  "key33": "5tDfCXoA3SmgGmAQyohX1ZrXUusN5rzGDXGnLyLYJEeL72hPz2X16BKhAcMNJczYGRi4ywRi1j9zeCqUzKvf8ikj",
  "key34": "4cWwB85L1cTm2BNrgwtk3k7vhjjs1RHSGzuc89SZCXV5JXHRdvMTEMsxswR2LRHyjMPJ5yg5pYTwKF5QNEMp6z2b",
  "key35": "r25JK9BoEBcTcHVNPLJgB93Cz6JnBBBRKZ5YM6b8oDvmdwkZvvgAXrYppeoywAwXNzFbHVgA1YKThjHfLsTbSiG",
  "key36": "5PwbbZeTZTL8FRDZguZtJhzAVtARE5CPj89LxmHDHV3Ufz46g2ifH8aUJaX9HiVR3xY7rr7cqAp5ZzeUdWNofmy5",
  "key37": "4qzUXDGkVMwAGoDBnTtBrSF8wjruVr3Q2VTfYcTUv2yNnNhpNpx5Qew1fv5sZBg1dptkPAhFBaxH7iQ2aH55opmd",
  "key38": "2GvDrt9rtJoqYhWPzfxP5ny9SWq6KvXsQEwHt2MfSQGbeg9GJwpQbXds7kPLyVLBUQJtzxohw8h4iYex8Dwb3hDE",
  "key39": "4wov68S1T9dXnMx4vYD7YwXVWYkcLzXNHwurNWrxHJt9VPRhoWdJfzRp43rHuxUV2S2WjFaGdB9xoxnx2vvD7vgp",
  "key40": "5QN6cunRktDDt6se79zGzh4c7wiHZHu2j8DUn5Ji9CDZ2mDoBRJeRxaQXMkYLrRdC2HHtSY32TPnxeZxtYKMcvwH",
  "key41": "3mZm4Xj8cPbagJCEU7yxh6mcrquyXgbDfpcsGA4oCjWbJv4dc7VSCqSYzRqgDmshRq7qQbPJQ7HfPgmLsWmprfA2",
  "key42": "2vvyZS9pkMiAEZWuCVz1pb8YSg6hoaSTHDYb1YLZjdwSmLevzKhHzesWyEyoLxcc4XXMV7BVA3JuYKC1u6tQFdvk",
  "key43": "4PU3qtuwNy3dTWpLpVGNMJ8MCKVmufr5V5GBN91pAhnPwW9WLNptDWZsVqSYBpFWQiDSSxnSLBRrE1YMyEMjMPHf",
  "key44": "5cnrP9ZDG3vpXRBNKeZWuwXjgSKJCtKCTNTybeS6cXscUQNPGSrkUeF9rwacizUwgTTmvEvdQKcRgQN3mrGqcLvM"
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
