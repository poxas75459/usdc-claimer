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
    "3vGP7zzSaCeDueoiR67azMPqZ6m1Pdw7CymJdjNkRm21GKPDXz9aMXUiF6b7GByoseGcDHpgtLfKyYgeKKQ96cvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25wsPojzhFEPeYqZ2s1aymEq9TA436KJnoG2xKkgRLso6Z4J1XxpF3eXH8WLeyzAxNif6xBAgtZ83yw6Sf3K7XuS",
  "key1": "2CuKftffhVTjPWqcHDSZ3Cn1hXdaSzZcLShT5JBrgRayi9rxxu4zxsbgyCMyiUNFB3gmPQ9v8KgLVejmfwEM9jb1",
  "key2": "3s1RdiVwu9jPS6cDv1vYgQ5ykPKhY98rsb4JS1j2hTNBUebxyyvsy1pSpfg4DG2ygFnErVMPoQcogskj399j9q98",
  "key3": "T1FtZqGMoDoE3Shp8NzEyrJtxVjPGFikhBoZ13CtnSSmsM8eUUfutQ6nhcz8jdPVudPKcrg6HipBhE67uto6gqe",
  "key4": "2aoP2MGciKsFx5KebnVURxm7MruHDBomFFdp5NK34GX6A11b3M3FsnF3pX52MLzv6rw7Pw43pLoSFuqs49GCfSRP",
  "key5": "sWJAHBK8ZMb7h13aVGiGvCPCCbNWb73V168dNaUKShRfKtnsM2TKU8e98BcgeDxQ6oqNCWSFgpAKVy19WbGkM1H",
  "key6": "2oAriaN3Mu4yrfjzyVEWSAp2D15oiUBgyp8whd5at2sT239Ctjxy99CkDuCaCKhJrD2BRPRN5mhfmjtX5PYt9NMY",
  "key7": "hmGq8gLGvJR75TfJETfmHAS3KuvmqA4pughPJKvhDUQXWdkxstHHEV5BPSdUeD9aLs4Gz5GbsepsxiwdKvs3frM",
  "key8": "5VPs7w3jsAtWBkhQJ99vEvXLXgeFGVbDZmjGo3K5YiLwV7fuxjhmXsHVgGhzeDR9URQfi7e1wqvgYcqLam8GjB6p",
  "key9": "2LWqtsNbkd9yaHzEKLQmRMqLBwGo3ujjvGitEUXxdoZNJpKntwSbQcNpwZRefMTNrqKqdNjCBzVwM6CyY3i8bxfo",
  "key10": "3Cxgb47Der3KMGbRBbdaVbaL6Uz7Wt6MsmNtzofuijHBZJayy1V9n5RzHe2YyamUUsVgQoNRuQojvnx68JfUAdsS",
  "key11": "gHxkHzYosBVnrBsrmX18QDwug4Zbv8gqH1SBNcSAdefvJyp9WMimdRWx9mHA68MqzJfYFrTwxDVXSWzYLhY24ti",
  "key12": "2DJkKQL3bqhHWkoacKhHk6wtLX1HgA7f7xUgbGCWXs4GcRUVvKUqKsWXpChpDmZvHNec4HadXDGHRijMFuAHBWvG",
  "key13": "3CudUGPh9boTRHtTgtYK4WqNGK1FZUoVqUC3UST4v3LtUSubWjEwfYsjW5RJMierqVQzcrR9amUDw4TVu7BHcAWr",
  "key14": "2VEAw2tCNGTtpwPbRyC1Kt78GecCYqZ6BpECjgXFgcbj3bVSyRn2cxWWsdx4ygGCzxkkF5ANMEjrRaLKxTZwGpo2",
  "key15": "2K8J6FF6mWukNMMigvETVAYJqxm17axRzf4FGB9cga1ePomDfgNbyFs1P22NTPEHHPeCeXmUXaZSMejSLSSF8rcB",
  "key16": "2eaZnGCapi73yLGxrk6GqtTiAV1HyTGHtHv9i2eQ2567oj7NbcNdAdZajUMgY1eubpxt481VyAoiKzaQrtpCBSyz",
  "key17": "ESgqH1aaNCm7kqyGdUrQvLdR6F8H5K1BbY5J3QWqNohuJrzBhMkbukbsgD4UsQ5qdKdWi4M9oM3WMGbJ5i5TAen",
  "key18": "4DnX2RZ6rFkHTwwyNmUiGfvCyjeZLMhmpSy4qrid2jUcanaYrH7a6TsjNqGuQdU7cgm5KifJphUKXYjH6aJDnSxB",
  "key19": "4pJC62UHjC62F5hjDpB4a4sNsHCTfcCiXQBqY3yZ8P2wSTEFyWrCnDGDtTF4aQmr8B72sTphig5eKoEq6Skapa5b",
  "key20": "ix3mjGnqxR9KFfFiaRTQmgQcHZEsje42EefvLFqXaWqRDhhiUpJCz7YtCCCoD8rEWf6Gnz5FgigR3wHLJ2TvMfv",
  "key21": "53PYbpqr9sUKBm5uuJdU6G1YcuePGSeAUskN14H5oX1Y7Ar32rAeVATwUtHkC6L6D22Vk6bXRNeUpJSob1NxKLEk",
  "key22": "4qYDC67Wx5bYNzYKtgAhfcDLKf2QaMMBzs7WVwCdfP35nSUHcFdWyFSPLHVrPVvT7DCnLcnsGUY6cmGM8CcUkqUD",
  "key23": "5zed3Q2xst4q47KLoHcAVsWzeBfFW5dpwfT7CRheqyMMp6xDrKdL3g2jFe4qQdq1qGij7CtUtD5ZxGvWpAqcrWCL",
  "key24": "3JsFmiBZebBaYSvh92qPrduh66YsxNDXoJv2amdvdgVYBKooVHhDocV8WCXtgB7aw7rbPcN5JNRaP6oMnKM6Rvqu",
  "key25": "3CaJ2wVdjq61rjYhdpx1MUDkXAAmchLphNiftGeiWSUQfuGpwFFTYaXBdnyfHni3TJT12sYsNoBGDRSq72kp39Pi"
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
