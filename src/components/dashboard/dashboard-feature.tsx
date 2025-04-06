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
    "38iJbug3ZbxkZwbHyoMaV8SPsrgv59f1Nzko4ZpyaqSQ999oaQBJbBBZHcJmb46hXccMhSH1ZjbtCY6kUjhpqegw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xW9GdoChDFySRV16chpxS1aw7PmGkfrNNcVKgPhurEg53HpqJ6z4raG9fc2KfHW2DSX4Jp6qxz9apcYK8GKyDJn",
  "key1": "at9cXh89Rsm2kCdvvRPBRSvmDe71BVMQZEnsJobiQJ26Ny6b4mBW84z3JBo4sRKrSyUCc9wou6TfZX9modSEq1p",
  "key2": "3q6gcuvBhHDtBKey9DFMCoyYYvaXATt11s3nDsV2vvA4QN69atXXd5HbttoUASPYWCAfqb1xnbyoLHUri4kxEyxT",
  "key3": "5gyMbMuQbPq5k9hPnghcQWDXXZUJ6WiG1nmWBUzfduCX8Jca7uY9B48PN7gipHomeKFH4w3QVK9pNhVfpgA9xsQd",
  "key4": "LtPq219PRdCVykCSFibQWKGCCbPsDEnSvxRzcEYHa5AVhABGaZQjzwPXAbKGwDVhWUACzYaQDXuv7hjREehnomZ",
  "key5": "2uApZdiA2CRY58Ra6yk5jDarQCmPXUTAL5pouawgwYCkVszc1brJWJsAL6UNRwnNmJzRPzYZUCLoXUUTi64iQTXT",
  "key6": "5aUCf1XkVj524wB7h57EqHnDynXJpBarTEzD7rqnrYYkQNt48Yg32kUG3pshC5TgwQhE8Dp9TtQEvk4axVPjV7GR",
  "key7": "2rH9F984UbSAWvmSxHaDd7DEEa5ewX2b4xR3eHZ5boMH7wzoyqRLGyKAvBGZKcYS2pp7VSHWM57eZToJrHFSyyAv",
  "key8": "2WguuiTeJbpejf5GgRM1ishnTKN4ypXgVdMP7rdRE3hKcTvJN82uzXWp4peNR6KpVF5viaD2NSAr5ubHHyHPmwF",
  "key9": "53E7NGbiNxX4mZk99dR8udg7gKkH4UxyzZJ7YMgYoKmjJ7YupD2QNWAwdKK8PERXGQK1RDo6r8ZXzsVh3yHzD1GT",
  "key10": "4HvS41H5T82M4xiJ4P8N8eBzPnP9U1jFRBWE1Qt1hQsrk7Fydo3BNwveT7qu7cJ8vburk4xaaMuehoTarHZkmoFT",
  "key11": "5o6ZR4CyjJwC6s9jFetkrsazrN5iRxZLTXnUiwYj1oEMzv9Yvt2FZxNCjP7YDuPRvJCsmVNwQSuvNqV1baRjuPgi",
  "key12": "5GWdG2MhBmNB2mnZJ8ri2TgvY7LJ3WsVasASrBtZUvzURYBVBeiAhoursSoWWiocyXjkxyqrKcqzN9H5Ebi9yivh",
  "key13": "2YCJDz56oDtSeFGuYJ9NyV62rjjmKkfbdJUEvaSQdxmCE8mKNwQMSwrNc348hpA9Ryij42roXmMn6NrfGwXsFPaN",
  "key14": "nMUysHjPgGKMjzGyrS1AyBr2XNciXPyL4moCZxTGgDeTpga4QqESGDNUnhXbad8sPovaJbEo8ZXqpa3s9QQck73",
  "key15": "k129yRzvPFxP5dN92gDH1Pt5hKLcrLnTfKgx7SyqqcjcojGvvFcTyzNMCnD3uTHQ7VwF7KjMCzgbMDcj1uE1KkN",
  "key16": "2n4JU9SQZiPfS8PMQ9eVoX7qhdVtyych7nzBA3aBwALUUBbDYRWhypGBGWLjSKworPEdWKQN1YDYDqhbUNa5zHsR",
  "key17": "3RYJKKB8ebZcF5tJ776vkRHmFAAYHFhQu3mnW2C18XZfdNfSEwpPdoofyf9X1WkAYo8jhXsiPEC6X8GdNcQyS6WP",
  "key18": "pvU7KGjGxVKxii98t94JyfPb5KzKtHQ8q8RP2Q1F79kzx8TPizsjPS9f5CCLMXBkhmurEBjT5G7Dyg2VdbCwACY",
  "key19": "3ha5Cvc72RpHESSTAr23HKY3SHaZB4DLZgpJwzwg8tfNdJEaaAbwpn64jQaYHkWsrHTmp8evyFTgBDSeoSiCVACD",
  "key20": "4nUv3iFUZ97DDknjQ8HdhFE3Pup4pRMb8PSQMpNhBSpeipMNqjwT1jrev5LFrFMU4HmYwVZJ5Fak1u4sE8713GKJ",
  "key21": "5fF43EMJFHtVV11cfi3ofWoqzQSsoB3HZ1ncnhb6Q8Qm4Ubnb97eQNms8aEDQk33E3fh1u7EJHDWPJqripuoAgiJ",
  "key22": "4KUeE7En9vSa3eTwHtJtu3RbiSNgobWBwfVFV5k7owVX2YKKYEBEN1rcVXXvLz2Fg8BAV3bwyQPpDuRRT75oaA2z",
  "key23": "5q6ubz8o2GhNcAxeey3PGi4vqNJzuYNifY7AXrnyuPKoXhuZ4xdGfGQbJduRdK3uspMpq1eddA3xbmvpU49e7A8x",
  "key24": "39qoq2EsknDDqSfuhRp6tETyGM7ts1iCJ9Ts5P6MqtoQ3cPCvPcitPTPJ5NSeavAdpEjvsoKpDU2NvzCRgmCcz7p",
  "key25": "4gyLf4K3TQzyGRaVFdaVZdqG2mFvr3y4PRNyMgdQSfeVmqStQ8GUhMWPGhhxKjw5BzyuKvn28hNpwVbdDruvnuSd",
  "key26": "4vUHGmEHRzMm8f5uNXSJ2Haz5B5gM6Vhp4k2J1V5KQqVbJgXCogCbxscznLsAJuA8Lvx9drgVk7ECbm1Kpa8SsdJ",
  "key27": "5yEgqaW2YXG3aEzsYNoJkfozwK5ntLayqtdhdi4Azvm2Ha8Bt5Tbj46bzJGBM5iToJ6AdyLYJik1oT6AhSwjbhQb",
  "key28": "5vjksS9apFX5rE1SLXNKrEfgy17bAdSJhjUFHad6YQq9xTXsMoKh4oW5m2L9EhjwPyWLUrUd3kGytBLfxiazpwjf",
  "key29": "2Yf2wQjvZG8BBNtCruMEEqUZsEKJSvoGHKrnvT2vDGTiBcRJ7uAfxFBkxinCKsnQVHTBUCrdMFeN8Nhq3pL2Bp4u",
  "key30": "4pYRFFNfkYFxhgUCZvpoHmGM7SpmeusBH1Fi18QQh3vdLPC6ZtdgBFFB693eWKE5QgMxmSxT9ZYd7ikuCuoKFYMr",
  "key31": "3S1bFC2YQtFkAZDEWjshMuT5s6KQrZwXg4WowARJh1pwTn1RHnMjoY1Qeeme3Dcgd5HNhiBtEipPW4y9fPJ9UdJQ",
  "key32": "3BQodu1gCCVTsLibzz1rX6Vzzx8RvCustYjxeaskXbCHoLgdyDLakvnmL15eTqtmpnwt5LMHLyy2QtMaWd47WHJ6"
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
