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
    "3ByMgiDiBKYaAYZiUX3yLhCmiKUPYxtw3WNHDALD3272ZzWHj1q7ascQRacWnkQfKZTbB1QDawp1eaQfgYMSH2Cf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W8WYCfAKg5aGN8oUrbwPjAFBeeBognSj8hr8h1LjJiaXVRVgn2RQ67CEoCLR1cZxbNMbFrXvSKELonP11JnaQNr",
  "key1": "2wcUjt33e486YH4dfcifyDFxfsR2nHFK3GJCy4wTDGaRzAoL1qyzmc8dzQ9zcEUpZ7NYUqmB6PYLseatakj3sqZj",
  "key2": "jbeeTdysxZxyG5AUZ3d4PJkUGkWANtPRuYrKckRhVy5PEfHSyD9SZPiBm7j3xtJC7umpefVJHG9NKwuHQafPJB1",
  "key3": "3XTsCiwvPwXjQULfz6jdU6kz7fGVmeNHz7x4vrh7mGBEDxRJ76DizED3vvUm5Ve2KVeBQBx8uoC8ja6Ua9gAQJJR",
  "key4": "uZWK5A4jj2rrBWtxBBUiDpyvpu1dhGXdHH9yELyRjAspbfEXR83SQBBbAzGrTKwnvGzAtaEfSBvFoCe2mx6FFaG",
  "key5": "2kT4x59TNVgRQihjmhAE3o8vBf9izvnJa2gCuCrHh6mVxbkkaNnD4xMWuaAv4DNWNp1oKra8xEfEMExGSewKEDSz",
  "key6": "4Ufk1LfQL7G8qmD397XXCngtZzEopjPCuBGmqdQydaakQExDQgVCFXSe9JK6yD8G4ccSkscs5cEJx5VHD19XPiVz",
  "key7": "5SLCWVuiPsjiSttDN4NQuFHoYz1QA9ouwxiC8mziBeVBU4o8Kbf9BQW8c9JbmUzyx1REyA86Qr7nLMFmwKeTKydZ",
  "key8": "5NcKCHsieaAeBHHLpM818d5WhXCmKgisoZUES77qp9PXDMjmqQ5KdMJ3h7Yc8EpJPTFqtqqok74g4aoUzQK91wdD",
  "key9": "2VYdH2YKbZfhLbFxdomdabMjj7Rv2j67bnHee5Zu5sdiPyEC3TGyx9Yf3M4zG6rzQqHdPMGw9LScAChCV3NhaoBW",
  "key10": "2guYvZyy9FSzdDRCcLHR2ZwnZhW4v5rdZvjc71bAcfaqV73Vw7pKMUvSXjkemuthD2Vseskjah1DNbKhp3xSKLhm",
  "key11": "5yLeeZ9U1PCWw516vUHwe9gJhiESd3Eh9seJc3sPSmvvXhxNJS4S36JUCt8wXfwVyrt86XQMbEpBkN6f7oQVerJ5",
  "key12": "5QY56pdATjve6wkf4RdYwxLoeSCjgmftNLeKkFNpijTGxY14zwL3rh36okop3kyPLKYX3DiMTLgvPMnWHpZUkFTA",
  "key13": "35Uie7pZzKTEXfmb4p97s2ZB18MRuf8xasgHRBr4eqU3T1h385ADQ9Nwe89rnNa49KPPo9n6BFc2PGoDEjffCmq3",
  "key14": "3VXEeN3LDsdkGxqUDVRuFKJWRay3RjNLYagBiDC7QiVDumNEyUVBme3TERJLebYtTVVrhQBc8wLZQssGassGmKgG",
  "key15": "228AZtehvEeCSXg1LVYGvpQMZamoDhAazLcEcc1fVwGRRz2v9Ud1245NmHVvnrWtGkQtDg5xsQu2mpYvQ1t8m8Qi",
  "key16": "2UXFHiUghLMbDXN2CGLjnKz4nATq5SLJ8kMhowyfLJQXT7U4DZfuU3CWEsEwpMetoECnzkFVBkZ8Q6k61MoxHEoW",
  "key17": "3dGGrb2ZFh34e5UE31wCZjkQ6shpqBLcEMA7rMggL4wyasxz28vL4WPDWnA92itedRLmFghi1Yx8v6cs6yF9orWG",
  "key18": "2uSd5PomHii3LRHjpGncqoE4ecnMwdTSruE6Eqe75qfF1yaxqWfQcYUPDNKgvP2AEbR75qeRK9AHz7MXANkdqe8",
  "key19": "3rreTcUiHi5py2bFvGs3ULZ3xaK1Zp3Rr8twt1n9mbg6tMPuPVSCyyTccepiiNrW39t4YLfkihfS55CVGieWBekH",
  "key20": "5sAbnTDg5b6AWUm9kooJz7wKQ8zvnrUgepeBLqQRbJ8FSXVoHSjnPEwuWTSzzznodpMRwZLYkvjpaC6LAiKQter1",
  "key21": "jjBYKMjxDeYVv5spyztqdcekDk1RtQvMmsdSXmxepm5Qd2LL1R4zTcZ5bsWnxa5W8xmBn8s9PmigtexYgrrRH5Q",
  "key22": "3xQZTjXZkj3ZRShBKj88p98LmZMbDpjRSnC85WYxC8Bw3v2PLpvPbqDYASE3dRRgeh6pdZGWyaA3zv4RW1QziFmB",
  "key23": "5KYwXAVbDQSCM8cPZqNw5zbSTcmYMgPWhbcSrF39bK3gNJxm4dxYLCHB3hox3KHzF7Y5HY9Q6gAjBSJtteY1RcMX",
  "key24": "39UiZQ2yZKpd1GpQsNCTQGUza9Cy7YEw1Qv1fvvo6a4b8P8kT3MTfJcxah48coMuVEYpuWe2WkYVLxfB1QzeA9go"
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
