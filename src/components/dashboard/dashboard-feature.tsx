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
    "3SpETJTstxUqkiB7dm5xamGNVdjnRiFgzw1wHdADpADqypztnjuJAq3SbYQzz7H7GwsGBHCUCmeCZkM7v74fp1WQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5umqFCUhnSzvjruF89ani35Cid1JjhRHiWeBMrxUsEWZDkc1k3g8C2pYDVbGNfZA8W8xeGyG36n1oDVjK9N1t4tQ",
  "key1": "38XTuKvJf1pUmTbeuVc6gm1jWW5gKG2PscGpyJeaw4SMjJgZ3LS2y171Zms6aJc3WmMBp59gc9HUbm2qDTnvyH39",
  "key2": "Qf5iYu3C8CUKkkhx2qenGn2irY2o9ERauovXQ5p1WzbK1vguQxMxjyZnXjpLwgqEnJosVCuTSk7zfeCp2S7VsBm",
  "key3": "YAe8z4pEa7FJCyaKn8SUMyECS9Nyy22j4X4ErtVjdEAnenyporpPVRnN2Q8nuyPeacXDwXxtpHyYavhE5JudzeX",
  "key4": "4EP6aR4a6fHKaHvch3TTrHx4wbRJC7FPPg3ebBGGBNaoUZA19FQuQyn78t17skcNiTuxkbUHLJDpksy2xMhW6QeF",
  "key5": "3QVsAenhbAd6txrZTA9Ysf3Ju5ueHLb9DAbzFmF4VbykANPigJEaWu3HyTCAzWsDBCfiKdc4keGUvcUJMec2vC6a",
  "key6": "ND5R27NAD3g6Sfzvu83tJDDkSAFWVtPqBpkTzkCJ4HwoCbncb9fPTD88BXL9nd5CXMHA2HPEhQvjt9Fptgboa32",
  "key7": "2m1KYt2Fid4Kt4g2pNc5LKdP6vfmHvyMBPjuvEP6jvfGNkV26J8wmWrcSSsk88AM6RC5e7Fy77yooQdbvpT9LUPP",
  "key8": "59dUJSNRUJGEfoPGUN28EMxVEQ7UBSBSzLfi6JRNT8t9Fkae31xXMYDhMHnKRGV9TBN2b1Uw4sUCcv24gNiNLrm2",
  "key9": "5DnQrJki6RiUNdCjtpo71Zbr1VA5xoChZJn65fJ3yVHP8PL1meBVkBBkLii2FnkfLhYEtv4QqZLwGftq6B26MQm9",
  "key10": "82n5TVutWkFXu2ZKp1wFCiTe9skRmSaZzSSuCU2QJQgpVzwSkurxpDtGgDez7PEU4Rd3ZVkd6eSUWCJoDDzVNen",
  "key11": "2MXYzKAv915CkKHobLYN26D1ejrbTB74k4vK5Jskhp7D4pKMvdMt6Nnmzpmk66xbKG815noTZjoJU96LbPG1XNT7",
  "key12": "42wUFZgMW9qZihidwQDtzUHtd4JtDeNEui1BF8MtgXnSnZwmeaa8BbaUGBATvbcBfkivtrkT9EbuKRsb5fvpdByS",
  "key13": "2iz5dMawEpzezonkDSFAnMof87dJhwsxZMYccqhY5x7cSxo7GWa9jg8RtGQJKzyVHnNsdGNF1XaET1W6y4tPZ42Z",
  "key14": "TvY6fLAKte1c4Rsh37VB9y9WtMQZ6VL8MYNGWynmxnjmY1dAkLHMVQapQfGeBVD3hdUpTcHMX43gTNeei8JB3bL",
  "key15": "nWLd9zqUpr7aFzTHd6TCEPU7jU1eZPWMp4vTQzPXPevNMxUwcxvWpa4AFkBUH6sEPCNZpcdhSL79tdCnpMxE1pm",
  "key16": "4886hkRuTZFUaGxUeM4osTGQnEEFzvWsKwzCUUo6J8AVuEyoAcKWUxpAeaWXRueTNCbZ2QgJ2z6yokEt11aNHacW",
  "key17": "1eBWSXhnXZbcAGuhnbhLGDhQoeDwbogAA41MapfiDrqZCZzAscWX1BR96rCmVW5yRimDngBbaNJS5kz5pfCG5eK",
  "key18": "23zmsYSdAJGTMsdW3Yz38ZG86covv6dYBDMbVJmE6QExcNYmwnyh62uR3RhGsN92iSDxh3qcv2sDk1vaByjKLjJD",
  "key19": "285UR5BEga6kTjEmManVYuJKAEQMZYicP9FYBhssff74hayGdTAUhpXE6JDw62JUMoSzAWeBvzjyJXBimRDNzbLK",
  "key20": "3Soonqy3mdCyPWapU1p1iNU63ZFqZmdgxAn7ajA4XM1v4df9hGujp2SJzX6XJ4cuYyCCLAzwPUtRFpUWotLC7wJG",
  "key21": "59ED6sWg49yYryenr1KiwDQXd71Np2mF2iPfEU4BzzUWK4XJqcqvSu2qG6nC9exqNxS6Kj1L5HCaegNfRfVU8fME",
  "key22": "2HXBV1ozhjSn7ucWxJbD3YL6X4M7EDPkKzumat6zWRZupwtc7ddRpZ2MB1oLSsAfGLfTvUj3WJgLY8xFNJMRohMd",
  "key23": "2Me8fxmrb7971ywd8urmYcKZ2RTAU9CwME9CUMGJ2dPLmHvJny1bWT12u8EA1Bnj8dX38VTffDrEoLpThLNKwo1k",
  "key24": "2nNnamG6U53XZoSgj5VZaCkRmqJ2nm9kmKzWE22Vy6c1X76myjfCy8Wc4wonhRTesy4avRm7AiGMPwBEBrXtmRH7",
  "key25": "2GEH2P7PPR1w9C1pQV8pbhCge99Zsrka2snpyNgq1RfLvuRxsNpZxg2cqb5Dy31jx6U9nodyhuXnrv3NQFzdCGdL",
  "key26": "4FxDDmZG2yU4XhVFrcvbmzVhP3uUaCbKw8EoymMuXdnG24S6PFBPyQtdJRs9BoZHw4nSkCCatszFTCktKr8SrsgS",
  "key27": "3LBQQckCoRKKV7NwcE8RG1FGh8d2qpd7BBoQW1sNqApohQ5s9GMYiiWH3jzwtLrmqvcrh2PJw8ds6SajZBspV9dL",
  "key28": "5MVUEjK8MTagEWHY4JqBNsbnxCRP6Y4nEvYsMXPccfmBHyRfMcHbvgy7PPjcqQc7zwkqmSgi3vaBtnGRDxfp56pg",
  "key29": "3Lp4KStWBuDcGXY9Q1YkbddU6wZ1kktatFM7tXDDdtNC6nwWRgwS3jfuGWXEAYAEhs5kvMZHkjy3PojvYnHFQqpz"
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
