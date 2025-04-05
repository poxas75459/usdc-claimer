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
    "4Jhw2kCAxYsX75aX435aD91GDogq4QeKvo4oNdd4hoyv3GHJ9g7vmLB1GWh8vexGH1D69sfktGZqLUVVpSfDArDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "476ahRMKQyoDeeGezdJgFnrDD5ejAAnGuu6svK4ixcjZL9iY6qXmNSkDt6puc1EAAoQ141nzfmMHPkFQGDw1AJ6K",
  "key1": "32Lb5uNM6gDd5H8EGkgsCX8jPF4sym9JMPVo8YZnUK4iDJcFNZ16gVR2xgHXkSurt1PfxQXyuGp3RGEAFxxdupXB",
  "key2": "3nidqt5NHTVK2dqSvvU5DdfiMQNoS4ZdvS5Uz2rpTPCUnDYZPbb5DNaCmes41CoMk3iwiAgs2uQ194KxTDzb63Vs",
  "key3": "2sneqeRKfU3i8Y2iFcJC5LRupEmZX2NheiCcsXpZEDgq1WHc1Ho5CrYRjjiBBAmGXRasR2RzstXAuMoBKAmmmDCH",
  "key4": "52m3uoE2BfAcqq9wsxRJaS4BFtYwfSL7DcyTWacVz4yDX5z3bHF3St1mBeYcBJ5viyYMGmu1QYa6uy2CdvUYhUPu",
  "key5": "4btt4taVU1v9PdDGMDrBPmtcQBeqHVMQmxH78uhKmEocZKeZy59F3uWyF8BJ7NKhNGDoWLmpZG27endSzP6bGdoh",
  "key6": "3Lebp6sPqRS5eJZFh7EHLmy2phoME3A2Hk2j9Ng5KfFyRHRukDDK2nxUmrBD31FRrZHn6mvQdMsJMw2DxfandMWP",
  "key7": "5TexEV646ckMn63aPF5FnCaFAkAMjynsTpVTT2URT9HdzPuEbnhyw3auiP9TnfFYrQrF3T6smH62PV6mWVddAHdU",
  "key8": "2hE5P5u2j66vbGvyR75MarXUXXqn7dSm1vFKFxpYNs4bPTaR7rKFtAsy661e9vmRUt5eJeMkbtjeD1UBkP7UcTjj",
  "key9": "2fXucmnah8VQ4sbvWYNUKcESQX55CqxqQydxqBXVwVy5A9zNmRYxnU2BUkcXw5ufEgbHDh5wFVvbcMJt896F5U5s",
  "key10": "2irv45FRvuBLzBR2QDDhjpW6nBJwqB7sJR4QBMYeCwURn6KEKNsSkkRES7MMMZ65uZQoGV6kTouyFLVfCm617GXk",
  "key11": "3SoVQUznEXdQcJdmzt3WC8up8L6BtVARhesPkb7EW3U14K8aYBSMAC35AkSYRxRot6kRx86uW9ti7NbxDVY2jNhf",
  "key12": "61Z2w8QegeXNHjVdTzWV6sJej9EYPVbwWyPd2R566FQWCycg9B3xx3tqtqiGQ1UgPRN1nu8xsqzc57NKEUMZzygK",
  "key13": "NbZNT4kjf2GFWaELso2seXAqGEVsa3awh5i1SYnRw8XARwaPPzqNVN6nnXWAXBwmZX56AcUGqhdBaPGERKBSkLP",
  "key14": "4UMpHVyXWiSe5upRHzWyxmaFSrzf3TMmaR1VvKKVf9Sq32mfH9tLe3tvzDeSGkJ5n25twyRLkWKMEWavT44r6ruK",
  "key15": "56qWX4XhdhVbhLq4QowaU8no1goDNfimaUTZDP5icLtkhZGfPTTv4UTxkR15VtcTQL6AsgvVejL8ttQu7x7AFmCB",
  "key16": "5RfiMQBZJaGz7nXozb3BAAwcyBm16hsAoVJT3vwnqzY7qVjwQXaHyaTvFWy8r1Co7EfNbxNsHWSQwB4G1GDV1Bij",
  "key17": "qb293ybkmFgQqWQm1tfBMmMHLawgnsZnd7wnfe4pJPPs57Fv65kMKHwKHhKosgdiYFcJVDR5sgcr4WMKzCwnBFm",
  "key18": "2vNtcJ4L6efYLk9ZAL3Ldmcz2bXLfkbe3DSVguS3Hv3Qg3S5fp6GCqB7gcyRR5gCVm5wFCwXALXax4H3hrtxMouB",
  "key19": "31Zie7YKKRcaghmjdkwp2SguFv5uiwPpSEbjetRwXdDJUV7XeViUqYpjwgioVGYTXvaLcAXd7cjSpDWBz3ZFYkaP",
  "key20": "21eNN4qUzprPsJTgNULcsjsKmjASrGyCsjbCLECACDdtpH971hXnNVpY8VaDkejtGYD13vAviAjocnxfofuFqhKd",
  "key21": "25csFvkm6ePuutjc686VfJAzXJk9ncrUpBYQG35sjqQ44zb7fY21hNsYEQqrkZjxmtLcQGQPco1p9QZ1fwxLuFQL",
  "key22": "2WhzGc9QnQ7ECRepnewWh2fDJL6mVGLbbWSwmjYZ9uohngmY1dTca1uny9fsAN7vw4Rdt2xzA3xcQywzx6rfmGds",
  "key23": "4Uk1bmV3sWGtmmaroGd7b7o6Zr5nWd883KXz9wov8P1XCmuK9EyDRFiGjLRJsgQ5ouNWeEb2ZFfDE56k9hteT7P3",
  "key24": "3dcFHLQRZeWXfoCGaoAkCTu5T2XAUJXTFBMALEH94FPsh8eE1BSVtou8ijSGowA58FvgEkmMvzyAuQppvttj8pf6"
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
