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
    "4ptH7wdefiWHsKW5mX7hEf1Z4UiZ7heAJRgZxTdT1fWWeni6UxbJGWQE8uYeapJ6korcqFiAFG3garY2ftM5kSvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RgmA7DeLUzxveKoa6SjWLBhpGxwCK6i21MzU4i1VHeKGZLfMibi854kzaqv69Vas7pKV1EDomP2J3zbDeaAtWrA",
  "key1": "3xgz5NxNKtJVXefTGHaskcwSimgS1TRevQmZPFM4CVB9uWqBJQwS1RFbj9Zdq16Ury7QFfvBdtn6e41E4fSbPsh4",
  "key2": "6pL1kvhZJCAwDwDjyTtjqNXtRH8XYNCJT9BWFEHeQ6UYPhA8WMKg128Tysi9bHchNP6GMK8zTX2nEsU325QSKMR",
  "key3": "5PYvmvsyQaTt2ctCCra9cuxKTr38o2tJDwNgg7STxyHqoD7DBypJiLcn8pWNFUMefoMsm1cgJbRLiZEcfaS4JaX6",
  "key4": "2C1SyPRpjBURWXY1ejCLvGNVhYSar4ypUotQ9AtHMhLb2nEzRXT4JuxDZSKPTmKF5zkxfeZzk1rD3Qaa962VNyn",
  "key5": "4rqo5vkzvBApyZBAR11Ao962iTUkgjAikZtAPcvYDJmvRpfSgLtbmRBX6qrXEh8yCR3QuoodcbNNTfJbXY8ePVga",
  "key6": "4js3gkeCtaMThaD2nQ5Kf5cAeb8BCS9Fxmf9wwrCuyrjnyBugE8jQpGPWG52y9322HyJSL6f7eFrBFuz6TnhpoA2",
  "key7": "3MAtXA4UCgAhDq5vdtyhbwcp3eEu1fhr6ubVDmWVkwgZvtJiXJkVPSyeULBc8XExHAt7w8KVwRNJpqTSfod5Dei1",
  "key8": "249w7KsPp3MUyuuF9o1f5xNupDj8A7w88281uoimNex8cNfZZSkPa1Ec5tN7Z6rbjqyx1bWY5Aw7sPEPieB4as1k",
  "key9": "46KcsLg4hJ5ge6YvcF8Y9D7oDzxFtWBXgKyyVJ3mK1xvuvx6kdnYnRteLnHDAqaMStEdADB9L7KN5Gcjnu1pGy27",
  "key10": "VRfRLmjUtcbZekYJy7UZ4QLV13e77h4boq93kYVtb7QUwzcxQnHuy4CkQ9sEphRQRzigB82MHuxrQW8gL3fn7fm",
  "key11": "55vn1C2TdTdoGfMusQQ2DtbazXnKYrKoDsFQn1yU5H1WZqjSMujh1Gff8Gj79ELdg5GuBYxyrS2QpjFVVVg7kJzj",
  "key12": "2BdXAQunpQabydvr5zwHuKn52WB2qDhPoN4aHcvxXDuRyhEURWZ5fApcZ6hoDzG1Fek1UE1Xs6Sv2Zp72V1yMbdK",
  "key13": "22JshuzpV1UREXpkyS1Yx6yZUewGQ7TY1MQ7xN8ZKrFwpcJURp5B93PuW8Bvzi2gDn3W3WnhnHVi5FKo3VbmXkMT",
  "key14": "61n6sEA2tFqMeUBm6xDbsXSJhxbqkWT3ci2jchErRv3QPuwVU5D9vooR5zVgZXs2YAxm5nztYSfbfD3fAPgMPXcA",
  "key15": "2y1zS9ckLyuMCTvMnw8o375bMh4abCm66aY7PHAXAgMzdCnvSgGVPu5w241szBfBDSpERfhTJC3XJqpk8Y8bgwAn",
  "key16": "5vbtjTMV7UYCFAd3vVPhZAPzUWqfWuMvxhwfRrowijDdX3xvFFy6XnLR87UQURvkfPVf9iHUWdSfmGNapEp2doHu",
  "key17": "daEg9r1Dw978nv6LGqEdtnbxpxDwGyPoQZHg1hhxLv9HYHpfFSU762ovEXs2xCQA9tSrSeorVX7jeteEzE1Kn6p",
  "key18": "3C7BSWKHRH2QJw3VwnvRSWmWqAKDczeEiQDMvG4PSmEX23hUMnAzw9g8UfcG9zVgVFEsZfM1LuGhHC6UC6cQAeSC",
  "key19": "3q7TuwwgWr7ps91NmZX2onGEpRzDLmybr13n6wkaAxNRtyrZtakj8cUY4YWrba27r482UR14MKhVpLdPX59eTF5f",
  "key20": "59u9ZL8dVdmHBLxmCUiM6MLwM1buzJ3rg4rnEGgGMUvZ8uCA2JK5UrsRrE3puFRHCpRDJqBhkCpjUjKtTJQ9YGaa",
  "key21": "3cQgGmFyv6zbjUA7mHGSsgdHNRonBi3p7udTJ95A6s882pwAm1YcdWC5mKRyC3vt2dpLi1x4WfnwUzYrW1wAfWqs",
  "key22": "4LodSQTNMN59ZFEr9wMYMfM453C3DFPjB28NqbDoCCrJKjaCWbqDKmiQMCGbVZcDZd6AuC97uaEaBZPxduGWCgD",
  "key23": "pBVkkgLfdFpLru5EwijTUsxq3ZC5XRkTh3mMfjSMHHELg29wQvyzuG8VFoAg2UaCF189mfeRbbwpkiKvfJLwJHJ",
  "key24": "wNuTkqwSfhM67po2p57yi4Y1n4j9HuYNMXehLcjn6GB2zsy18PkfeaiYVoPjDs3d1s758EgAu2iP452yRB6znuN",
  "key25": "4EkMh7srCucJuyP3UM2J43G8Vvc2ChDeR7q6BPsNvYbtnXdL1maxPMTawz9oteQW25TF6A43Ds25i4HoBRkUsxgp",
  "key26": "qX8dmAKFk6KNKQd2K3d7FEMNKiFrQgGTPgThd8inv4yKAC4b4vjXRcNPPfs58RmgkqdxH5LQBr9CnWb2uQSMnj7",
  "key27": "2kUDM5DFxs84pQCEbi1QVbVCC5HRbgcvVd92vSub23eRxAYV6cQDXkUPrFNU1RjE1AAWzpcBnmpav8SUShToQwEn",
  "key28": "3hvsUCkD2tBGNiKVD84Vro9owgtUEfD1ZHyCPGbu7WAttv93ojhNZ37sT7TTSpXEFnonY3McKPufQc4f7roSe4ra",
  "key29": "zkbMB2cjisxvRZT7nj5dsx3FVbsPU3a1D8nY5fnKtoxGn5dzaL6JiaGurMbSF9AUjxLEcjaKh6Bg8jKeSNcq8bb",
  "key30": "5METJYupWcSbSfkwHV8QyRqK29v9YTJDhJX9uUgS3pD8m56KHiJBkrVKe6qiiKvz8LgByAAf1NyPShi6T5Z7GwoZ",
  "key31": "381Xsqbv8vtJCGUqWc3xp7Uh6vkmEiZdfaEEafE6je4BYzLu6eCATYvDNDb6zpckRfVboiSApNc9RCeD4CqN39Mx",
  "key32": "3txQzrNEPhQoPu7EMdjHrSQ9Xp81K5Yv8ru7bkMiMkECunDuJXc5spRdj5c8UxrfxGU2DxonKYZtixoBMP6AP2dS",
  "key33": "MjeUZxdzAqwN8xSqP4k9oQ4j9Eige8UMRXtoiiRu6pQLGbivE8sjAmztz44w5iaqiKQGGgZumRENnjCHWQiKv9j",
  "key34": "27KD7xhRP7aVjCL2q5yTWVvrdbFFs8r2vMkgZkY5FJE95zkiuA2LAbGMFZ3ZS59sAUwm6Kp6fZV92W5fTW3ve4aU",
  "key35": "2bejFN8dmxi7LqsFMdTJD7fFKmZFaMRuzFRcboAzFxfz7j4iE5JARZQFwrsLiJFe9xxFraNY5thzBXgomjvgbQP9",
  "key36": "MNRpHCmJ2riCo58o3Nt9VbupzJCfUbvienpMEWa6d8yewmZqicSwZFJdszEHsJcd1zqEapqUuzmF8GujzSE1cnV",
  "key37": "27U1VYFcgLaYxW8SjrMSSGPnKAsgomPuPPMhyQqPHfbGqS3ThESJBEzwn6mWmCKLUEjRCX7P2bze16tMXyUggoWg",
  "key38": "55Bsu9sRdKPjc6Hg4kjNkV3RcoJe2VP6cL2PY9wqNcT7YHom6pTwBaDRNLVb4Bkwqye1c9D6JDBURsnd7FZP3eZ7"
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
