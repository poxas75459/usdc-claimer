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
    "2DjTqer6jFbfRzTy1s5KnFugepL8n6Ka6jxS5kybfLV59NGND8cvnUs12GM7U938ycZ4GpXVukiTPYLczZ1QYtuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oWuBygadbiKUBcBxwWTPR1xYUGzpnKzTz9icroCLEWfWRsVeKawihLwacgvzeyzyXw3RMVdCQwx6VFy6hUg4LBs",
  "key1": "62ZjdFPwcmtqCZmNH6C4jEK21AbZL7MSXHjMMAFBPt14rqL7mojv9k3danHqm9sXHT45dJ6V9yZtT9NRnuMe4rAV",
  "key2": "2Xhcwwp4rg5m8niVwRmABPRvWsbiJX1HZpte5oxfZmHdB38pnn2t92Mutt5EM3BVEno69Q6QEY88asXCV5rZWRhk",
  "key3": "5UUXeueSQ1CjzZdA4pB5N4dvwoNyTK7woYVmUiH1Yh9grvKAp8dbSJ4omxGzE5eFLHk92DnnbMkha2G4WLsZfFNt",
  "key4": "5Yr6E12DiDU4GLre2aTR9WXBReqwoQwtJZmBqeciWoTsxhUodKjvqDVYD68bRYkgRjPhFLbAvTasWXWRmk3ZFvTc",
  "key5": "4hnyWMt4gChPynTtcGGY1N5V5nPE2AjWBKWVL4pKXPUt4Ru5Uf4p7Km1N4BEzHh6VJfHXHqgHjvq2E1pffLuEj2v",
  "key6": "4nWrTC2iKyi9ny4BRtoE7WSZWGm9cBvBN6Fh98kMQ12jrVjv2swv11M8hpyUvYZyeA14NohpX1RKa85M1aomcGsE",
  "key7": "4UFi8YEZ2rFzLch4RWNtPCQByPW749EeiR9ydWbEJDWbdxzWWcmeN5KeGeFGQ3rZag3Lwiqf1qg6R9HLbY8j5MPy",
  "key8": "2zFqYMiqmrEfTL2ru4MzYcXPnUZNvtbThyWfgFtYhDQh3w7ALUSk27tENKQBrVS5pzTUUQMeMMycLHrpRkTMTUbf",
  "key9": "4QateffVDES3bV9ZwXKgYGKFTMg3eAhnaA9oRjQHPubriY6JiksXR1DYJSEmQrfe4xssdQFF3Ph3iXZigVoPJ6R9",
  "key10": "5wSuVsY1NTf5MU7Ti47Z2BZfR1Y3RFKMQuL62M8vD1pnBiL6A6xhyMRHLa8QZvQ9NYC6zWfyDAQZ31dHLp2VtYzk",
  "key11": "5YiuvnCzjoSTF3CiKr9vwHPVCnRgd7XvERyywW1FDVXHKRDcLpWFS6SmLGo54NYi17arWqTTfefMQGbFkr1J87pe",
  "key12": "4N2tg2kEB66vQ2bkrukRuvmHNCBSNPZvMXDxSoCN72jAxjmxY52M7ZLy4w827npE6s7mWpGdzk5w4Qv3m6yi3UZd",
  "key13": "2Euz1suk9GW31JMxQo9y5DBNtCXWN6pSwTjwxMd4uNyNcXECGPxwaRrEffFMauitcRrt2ExCFpyK7QzU1thwnv24",
  "key14": "3QPWDqyThRXHRTjycRJMXMYwwY7tov4WJparjw3Vfr4vRQ1QHRKvi23YhSqEbiQZwSCjxfaWZaLt9FTJq7n7hf9t",
  "key15": "2tsjrkqyPVx7JJjjBvgLYwS3N4tJWyepc7JCYyxrwtsxWPoDut4RsujUhL2umHhbtvewnDo4SPXFkkwrZhEK5egz",
  "key16": "5zhHaHDUMkop9ebc5WzgoTzpTnrHJzJodGAJi8fYm18QVkWCa8htAgvb7MWU8LczuvgG9PCSeYwFiyBkgxF2Taeb",
  "key17": "4s1yZc7JjeoC53cxnJLGFgypUD5TKQtPNDZNfyDQ7zFNnihNagQudAG6jWkSN4orAyDME8pzXkQdy4GgAzbjJGBN",
  "key18": "4DUvYs9itbrrWD2XCJ5mHT7eJrCzixTuCEULJmkxjJST8Fr6j9ZZMAvw43RMjo7wni2AwCz571TxDfzBB5Zg5cNv",
  "key19": "5JQxGsBa8YnLvF5591XuPoU7nejJuSKmYiCNTc3C9eWVp5rzCbz4W9n2LCw7NUywfAjEbsF7b4JXCbf5Usyn4UtT",
  "key20": "2CvbMGUrma1raR6YdD7tuHvofmKRZbCDsFRnKYbuNRyAsDmSKgbis4hSmkQU2bafkFivSmSztM3d2dNf13oynHJe",
  "key21": "WY14vj43ZuEpwJso5ZSc3pb24tJtqRZ46iE8z2EqabwqGS6RKMsgkcKX1TE43rotR6C22yJL73iVqDpU8UfLKzS",
  "key22": "7GZcu2aErr99X7qJkd88uwJBdd6x8KB7wcbqHVSqtvJTxpsgS1SmRZxgdseNBR3Q5PwyngZ2SbFo5WsHeQMKFRW",
  "key23": "3SKdU3kzvzhvbZUTQUk5JK9in8uWaqWejhm7zA1S1n9QSS9myqTMxAw1XEtTFRsxFXXZrPNEuGQe8MkTaQ9Rv5if",
  "key24": "KLKDaxbSfTyueLo7HStsfGjTgS61MTXLEvCxsaCqPSkaJ1EVzmVJCGZPcjGmaRPTaVTtKFPU3Sizd9sjndQQ736",
  "key25": "63yBP5juQSYXYzmCYjXdD5PmKz1Kpebk1uxzdbx6Pc9sRYN9BcVQtb8NvQ8FBV6coV5jFmcoQhXaKsPVLRZDRWCA",
  "key26": "eQTETjTo2NY3pg6fWNxfyCm5dhgmkR2uEH8sGZTx5dkchBEwNSEMHsnzdiwxviqCzFXCxLXi9dUhVBy5KUBPmEH",
  "key27": "49tYPkc2R3M2b7rX6LfZdrSnfjmygcWgTYjEtwuycpQn7RBxMUyZwfp1vTCSaqoHwkhKUV4ujjgEBW4qiYqAEBms",
  "key28": "5bqpudRHFSwZCiA6483WQuhKFogrFi9wk3trdddH3XtadL12PrntVp1qALpLnD41LoxRaTD8LunUghqfM8LDT6cs",
  "key29": "3RaWnyqJDQfUbyGqZBo5YAcN33Mo2orhATuSi9iV2ubMZbWrCEhpocDAkcVwRWP2dVaaJeykazGpW3eBsmixzamz",
  "key30": "3Wa672ciMbLWGrpdTeYJGjJFExnKARgfkch9U6KGuEQ4MWw6tqyqdQFFK7DYSL5eZQE6EpEiRV4AgT8o846ngryE",
  "key31": "2cAc3soN4iwYwzBWDWRyyDi82UyY9XmueaGnnKpmGtV9nr2daooFCL7Lp9qwc9TL8stSX6oUXi2gGC5UXJbFyaSf",
  "key32": "41EeurfaJyDCoz6ofgCSqayjhdzCfvdbpg5WWEdfbPu5Xdau5SA2YJG9VVCK3UBmUvFVDtxU11LWK9uTrhYdjugu",
  "key33": "4iDmAnMufpGBmcueTuMNuXwQZ4WdCzj9PMjezZqT1V67p6s25oqJQimwTE3gSNY2g9huRUjmRVBjBHcWqcoqEFDo",
  "key34": "5i5NHFzuhLtSsgZD548VaeRApDqjBaY7n6F8dRACQdKgEAxgjxzwiEP1jy7e3i8axZkVTfGBjaVGZqHaZdzW5wK8",
  "key35": "kejdp6KF6uj1oo6GW89nhx7wNzkY1yQ7wjPVrxaG7wRHeXqGpt2LPN2vp91kuMDPtCBrFMYTyVwAk3jo1hbhzXX",
  "key36": "3Y9gQRYddKfnud1Rmx9nYNCHm22P91RCrZgkGV6Er3Ag2Nm9UeaoPrTAyBgjV2ZAYj3qZZDouzp4kWwbyXVL9gXV",
  "key37": "3ycXVRCxRDR2ZTDRLnt445Fst7mcpGv7uRiN2qzJFeGqm1EDL5e7UyobCKjpw1bQ8wnMvLD5DXb2dFXoLsqDzxDo",
  "key38": "i19vTCmf1ATRMVzUVemrmoNXHeCC3UbXh2csymEVThRX6WqwgAqnCFDA7wn8CJqaY3oLvstEtuxUNgYb94hPP2u",
  "key39": "zsj424hu22p1TwBiSaBT83QNkadaC8jJ4hwHDzBnSkG7bzqu77viRZMYq6nPiSfecBny8FDMcVW6jJYRuHidB2H",
  "key40": "5XTuewVgLa1vNykdWfUi8LviffrztM23dTqoMrvNj2E9LdeENgUEr1Wri5yToJ85CbZCLNBoma6nSutBEbm5xpcs",
  "key41": "hb9uDBHfvYvQnqEpFTpLGhubc4f4g8mcPjSkQn3xNHZ7hRNTw3DAMGkVgHF7YetJdhooH6XtnuD4EraJ5PKweF6",
  "key42": "Q37WaEbxBNxF3sDSX3b54KZPDKcp6T7ofufgduntfdmmARYsmnSDZUepdR2E6nwqiMb6B6RtZZKxHSpG5x9ztRB",
  "key43": "3GjX3BSgzcbA3X6gUa92KqLrTiLtWY82mu2X4GRYa8n5wZEKN9SddcoFn4oaVuE1rLQtNb792sv3haWfFRwEPPDm",
  "key44": "2paFgJzutkDLa3mFDirr4L5WKmVRH7bLhbDdmx3UtypwMr4Dk5XwApdhmncP9N2jpVLQZMGugLN1GXAxtTAPsXwD",
  "key45": "QZcbJJvJr6bssbkb1AkcpFNMFAqzJ2TB6VspzoQRRHMA6ant7xXToFAUZLvVeHZjq2fFuVQLm9P4TEyVLsAyWgr",
  "key46": "5io9t9Eb5drapc9BVj4x1Sv6BBHSrLkL3EKNTa25ByxPHVMFuwtiWGmieux7DGhjKDm4cJiAx3sF2MBQDQtVHhUN",
  "key47": "3ANzjt23gBK8az8UemPjM7ynNH9CC9ocDwEMd1WQqZ3N1BqKkejoNmYTdzTnsKZHYBLL9unDLznAa4iRhRJW2gp3",
  "key48": "4pJTej6i6gvnscxBnotxJB9jnfTk2THs7aVS68UFpnVJQyPEwsHf27KAVZGAgY55dt6faswYp14JR4uSoVy2QEMg",
  "key49": "4gv6kTPnrm8LBddXStpS9jpP3o4uz2Ft4NdxYyfXkg7fTBYVCGgx5xK6qpwHWT9W7ZUjYJnUGgdSkfQkE27N7Cb1"
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
