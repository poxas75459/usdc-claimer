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
    "3S6Ts2PtaQM3Q6bcEk5W5d8rbWBkFB2evrre5XUUSnaM8iusMggsZ9W5L7b4QqC3bQa99KCdqmxbqNdrh34e2kCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64VSeKU94TmPekLd1NcyVUGop7q93qCZpdYR6R8Fk8ssAvxtHKqE6Gtf71tGfnLcQ7iX67ZhJKtAUJCSDZUaUEPY",
  "key1": "2WouTQLJzz65yhgnXEgXA3uHjYdkgVuDGmaSCfDnstX48BLmNcNCqD46xqVwrsxgQPiggpJJz4iHbcTTWmcHWbnw",
  "key2": "J4KPKJPWBhLadDiFGPbLfYNQFcF2975MfU2eFbbjS5K1KXfdguDqtqUg361hJz6MYZmz6jMDaqQHVYzoQt4zuTR",
  "key3": "41W7umVkooHypBSGcEHNKG3zABfNcXeX5Vh5hhRUMi8a2pp4jTw3owJKySEa5dZqnvEZaXNQWDwdPjcQBPn918iE",
  "key4": "4rMzGk4js7ck1m9FLXftyF7vmmfX94MsXgkTL121jSVkBWqyCFS97pMMbC6iMvry56ETTJ7dPXCiq2Y8MTKBPZYL",
  "key5": "4tSiKwSMabVdtsNfKwj2G4ZWwppDaA5tEKa9qoZbkW9roqgdcM1tNAopjz3CrbgUKyPqWn5XoTsAM5nXbnNqNyFG",
  "key6": "2xS4Pczv37MNUVae1pupsarcKReBkmA77D2a1F1gUMuLBgrgsHxxeDnmu9MjzUdYksWqFRZtesRpT3hJ5aF4phgp",
  "key7": "2ZPRCKCX3MhVTnrXhJGJb6VvXYqoZ1An97ppti4iEpDFFZPwseyoMD8dX5V4MD7hvYQxeKotwQPMwGaQsp4ssYUA",
  "key8": "5Y6GgfBo3f6XxP6UkeejdxAhZfS5Q5etWeMsHamPNhLeuPvrNVzumTfYQFpokvhMeok8YUjim6Kk4HbapQ9aLnbt",
  "key9": "29wEqBgyGWeMPAoDhy4X1P6UyX8t95n2GxeoC3DNu6ey9ZyexQqArGBvpq2aN9mRUN47bPNqgmSGS9YntYNbHFWC",
  "key10": "47mUPEYAgovb8KX6xgpCqt7ww67e3wJQk8fuNW46EqWzq4bE35iPRUmnnPPy8W5g2gF6Qpvx6Mbxv7sP346rpHA9",
  "key11": "4Xeid5SYj28uFE9AMzVLVmKAnLmUGgqy5ebmfa53vyir1AnDPb8HC79ZBDmtdReAjL6MpmPaLEBLxJXQqjEgLjJD",
  "key12": "5S7wngcETxUQuVeKYPN5SnUtJ814ggnt5zGtBPb27U9RUxjGuA39z1U9W4Fp14bx2sRgNw9FbTuR7GWeJg35UvQ6",
  "key13": "38ciw3id2x5seKQihLovbpYqkwp8s4eScruFwWiSSxyp8SsYUCz9zEUAq89DScF5DWquejbXv4cHqcBDxFjp51Ws",
  "key14": "25ijhTDsYUzLCnMS24R9kg44y8xVPUhUg6DEZCQsqVJRLtqa16dDdvLWUwy7TKDJ1crfH3aT6a8H2MyjRivdoCDW",
  "key15": "2j4WbkrR1M8H6PgUwx8h1oNCn53BNwH2C2TP62bRwMtfJd44wx3LdoRcHehNW3LtvSCfz7HevfdN34oBVmvSr4DU",
  "key16": "gW19rACURvLBihWKciPU21iQSVhjBVE9d5cHfe4LAzdAJAnWaHfgkUHmmKLvVUGvYQaE6hf6ozi9jiZFaSsM9gC",
  "key17": "5fYR5H5YUAJ7nG9mUPZbkxswJwAMqB7qcTia2HKsv6238Q2BuQUoHh2QjATeMN3gSkEmZoUmFzC9nkLUj9U8pRm8",
  "key18": "3zxdTFRusHPF4YzZVGrGuJe8QqxeY6L3CdnL99g3hQTmZ38NBkif98bXV1NEEuoGvKhLs3pjXarZjg61umbxvdz1",
  "key19": "3un2Eo4pLtsccegHYBLJAnxyebvGpgv1zHm2G4q9C3rgT8ratrHUzWFXSyFBK4yFRU7r3QU5BdKJ5ZDsgUbKrZDd",
  "key20": "4SvtiK9icfZ4rAT9dX99kbQHT2Exw7gBMJonsGhopDaxz3X23qyzMhahfZxSBVn4qnoKVfGZ7Ak4n34oeTyw92B9",
  "key21": "3D8HEAuWDrXDwLLuaPC947DzuS7XP2ijsZ1tWFbZnFSijizQ65H2ttY52CkD1w94gnx6hNXbKMmcMdQy8WYsgfKA",
  "key22": "5ZFxiwKPRna6ExwEqi5yNCq7ooKZvJaonofyKrVHjuCicaK6kLSdMSK9CiVYmHpJ5LHSrxBXEJztPxwcboRtHPHg",
  "key23": "2eN6sRhryvs69EsCHoCntrNXoqrZ7FEy1t1YXwWCvctDG5Dc2WY9Yq26uWUtMNnuR2ZKBT53XrsJS9PabUYLVReg",
  "key24": "4NfmhtSDEZgVKuAyvv7R97YCt2dhtcpS8rAhTawjdZwh4bMZ9toDZfUswjhEyjGWF37YWroCgJFWyNH9riCgZ8PU",
  "key25": "2iTFTxUUWc58XSgSbTVpo7BAJzAqakVz7iTFADpVobSj2SRW6gWrZVZBMKsCqPrwBnmUkxCs3tu9u6kYiHsWckyq",
  "key26": "pc5vpmr5m6kpUDy7vr84mKYePZpLmcEoQ6zs7f51z7vXBPoGmneQJSHqiKXSm7pqsUqFpmJZ45ZT6umhZapCasf",
  "key27": "xKAe7RgjoQdZcNPbCarDtkXsi8EWnpA6TpaTBA5azWLxRhrkuGj34FpfYn2xShDMK2gwVpbFMCUFwzAmvH5MbFs",
  "key28": "49kvFhXXi1Da6s9AtkvJaY5hrGADSNtZLwthZ7iADWM98mPBaTff8NXNt8X7KXnDEF4q9dnunW1f877cVHdrS5nG",
  "key29": "F5kHKZm5dj9USxDCcmzUns7wYf7AUVoEDcqviRGQzSLPub3KysANKpfmPsiCKovEx74rKmoW2qCrpHnT9JH7b47",
  "key30": "2vGtRPy153Yg9H79SrSip4rtqoPs5vjrdqsGiV5BgsbwcLFFNmpCuLcxQ8JLfpvJmNFB6eDcvZaqPhXB3yrhwZG7",
  "key31": "5aZLjfkQX7bmRifrwwfjHrG7GaojEjoPF5WEUipMiNbW5xGnUGFreShiyk8u4oGNJJiP8UC1gD2ajxQysfKu22vA",
  "key32": "4mREFRViDvXh4eBbJ5EKBQfgNz2GBWS2ReCfJXAekK5zDELb6YYkCtV7Yae4TyY7rhXuKRBMec2gXw9eXYuoPrHR",
  "key33": "ZUU52pqsyNX82trxoJuHn25MBgiT8dYFPeFP4ndZBWtLpSc2HZA1GWuTKvdWkPL3W4MEEGNbrc6mKPDZ2iaUAuA",
  "key34": "4LFPNJMPiBYSMpXYGdLrLCqfHHHQX4NA1FsEfoGaUb4JLGQ56YNkFKkAFfEgrKrU82Dhk1M1JuMcKuPy1c74kTXY",
  "key35": "VSYoVQToR1HYXQdSr97iuQeCnjzfjb8Wz7oCdaMoRr8uUC5bKP9tbD2ugiEazU6QZdTTyFdoN4vkvnRy2uZCai8",
  "key36": "2M16FE6Q9LqsCxvAB9XMzxGdG4PBBL2kCnXJMc8CJWJ9MQLjsVr4DEKTFodo2hV47GLHcVaza94vYTeaRZFT44Vi",
  "key37": "5HLU5Ad54pVrFab7nY7HUZWxD4viYxtpwZQUWZbqscwKYEA9pJRYHPQYEp945u9rQB3imY5MdDfwBdsWNy9qK7U",
  "key38": "4a9FauT5Sji3sNwW1BweuqvEYYzwbcaY7fHFWsKY1pR2ZvFnt9bqmccqP8mS1hjQQfETaezLL18zPctekhoMi3tN",
  "key39": "RZ5dM62hu3t1W2fi9t7BkGHz2WuK3hSA9v72S9tXj1kUXPLuwDNhzFuyx1YFxnGad7QWnrAmx4VBVYEdxrsx6Lz",
  "key40": "3muaujbYb75CMmZuBRwQoh786GNp9xsx4dLHRKcMScyThxy88qT7JvHmyAahBmR4KZLi1pHmhPZTna36ZGqNGZBe"
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
