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
    "3PoRhLo1tpdPyVSaHi3JSkDA7z1aNRaeTUuZ6rfBCPY5nH6z7DjX5bR2LzjcSeq3EHZDZhrmR4oAvE541Ud7M3mt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HzihBV4sgLFGYJixEUJ1e9fzqByYY7U5KW6q6pLv6WLN7E1zWaxRdAncz6gWuxDHnC7ogAY3WWgMzebxNMRDSa8",
  "key1": "4R1c2DWCrSrVyLKGRH54Hngw2xsgsAxdychYu1hd5BpN3j6XG2DPd5GittsB1b4zQx5MhQ57dURJVXAUKehACad9",
  "key2": "5T8Zs5X2tfEdhF2gXefKmHVshwXR9gTgL69S1o7mJmdXCVeykXT6RCHeJhAuTCL3nkGrFjNWbZL7pLwNCtaNnUCh",
  "key3": "4eyKFZY1c8Q5Du5rp2WwPGdNeGUHWQjag3jwdxPgrB8q9tAbCLXzuZ8jtTcv5MJs41kBHuNKW65V7wHaJiLo4J2Q",
  "key4": "5VokYmSpbxctS6eCt33NPunLbN22ZgYgWF5ynaNwWThJyQg6wh4WnboFgLsk3iBpJkfViH19RX8PhKLu6hBPz9n6",
  "key5": "4LGButrsmPPPvtAc9hWoUeATjs6W58SmLQumHt5PNsxAjL4YDxsNktfeR3FagvnvXL59fvwoCiMFrrMQoYvgBjxp",
  "key6": "3nF93fs4yhAdPev1rGTvX6XKpnkY1EE3jRA4MdEyHLZ1yJJJP1UeJw7HGzF9cwKZPgDT8VHR1oXapdReDoDBCkfm",
  "key7": "2sHS9ouAmyVmXtGNCmfBWEg4YkFRZf5i8zbEy3r78wQnq2w2bTS3X4JnvbsViDcNuGf6qN7Hi4pfz28L2kjF4jfb",
  "key8": "3gAxxd5bVoFoGxsarHVeez118bK8p16E68ia5kdJXSSYdniYcEVXizEedo1X6gEdB2j2gJyqy1a4hdqbBqkW7z6z",
  "key9": "4Mnh6pMTQx9TwRDAGtgFkrfnhjpcPcSakG3jUxxzdHyugRUZoxapDqRNHCSsNDcsDtoPmxS3b3edzgiNnQG1t2Np",
  "key10": "33odGv45yF49TEBAHxBjcvnY5JUmnBb1mz8DVhXNgCP5Bh8NBcJjEZiUYN4AAPFDXAnHjH7EgdJEonc3z4esHLca",
  "key11": "5aZEkz3vu1DHNx1xqZoGFyHJk1vgk5NN6Knw4VVSQu9BYDrf94hdBxQK7sTd6bbMzMaxtX9Kysbx5SdWpkCnHcym",
  "key12": "2DbkEHEdVE2EmnTp6Mb5AX8X6ew6bUYNRRLZAbTuMEuiTfBGiHRZPbUsaQWRCpQtoW9ZmvYxReLvGowZh9Sg2JFA",
  "key13": "3fg5AkwzkHuKPh7BAsJDYfZfcBxNhxts4BPAXYwUQuAdVw17NJBcvijWBMU4oGRzowBRFshmSxjbZv9b3qXxmqz3",
  "key14": "3z4bMAChuaqG5nRvtJaaxVkgKY7LkTStAhYh23jhQoovRTAfA6fjZHs6mRLzMVVXCTmzPGcqHwzFZNs1kMhj7SJc",
  "key15": "3Wn12xaxZgiajx8zMhXChqhZL72Ls3zJQ2r2xA27AxQY414KtW5rdXGzGuaLCDQZVxKqQRLghN6MymLTKvUaJ4hj",
  "key16": "HoNzL4dAqj8dvWVDJNRW3ZfnTsTWnyXcJgvXtxo9tbdWMgwtxkWcyXXjMt2gErGLqfzmwY6cHTyfpzKzcCek5ho",
  "key17": "27Yu4s6PamqF1giSp8vTXV56A2RAiYAzFGiAPTXgj7MnZ2ouqVMZTWPmr4xL3g59eZcH7ttfeHTJwTce5Pd16pqF",
  "key18": "2EJdS1kuqSedngWbi2LA8MCCcTBvrpP1S8vu87zG86GY3nExYKWkm8MGjf1LNaqWz8RQ3dYeGzm24HcJB2Mf3Gk6",
  "key19": "kQ6y9aVT9TUvHcMKeYCZ8jESLdai5bbHHvGyev8aa4K1CCiQQboRNxYjFhXGvEwGKmbMN9BZAfT7EvNqJmkoK28",
  "key20": "5KL6YTwjx247ABxsBYZf9LHN4Qrr6TjnMZ4reqyF3V6tGUdZSuQd5TwcMpPS3FkEfY6QiLZa32qeapL4cEetdwhM",
  "key21": "4QQPFLC6xAV84VpbXWMMJWZwqx6x8ikHA4yRKWf8cV9GN3rFWb1CTdTvaGFo8WfHXZzfrCrRWL1pmdbnqUgTuqxS",
  "key22": "38TVZJoNPS53xRkZMBWQwmCxgeRcq1nVd83VjGxfYTwyCf9TwGkEs3K2SA55MprHV42p41H8PE6WU4QbkaCby2Yw",
  "key23": "3tVmqTxJfPURd5f15MS7QWeMU312fMYvgrhnwLYfdGd1EDQvCfqMq5vWP9qLfZAcxRDHowRtK21PVf31qPALuE2b",
  "key24": "4wQhXoNrj6Mb4sq4SPojVpFKkDcgzRPVAqTEwjHjCMQWSqHPzTv3LVYDR2axTMyxsUL9U4LZqzUJsSTXxcj9pyrx",
  "key25": "4F9xwq1eHbaBuQUxSktVSWXodFXzuMWq6ud9r3M6AUjqTX8qcAbwm64UyyY6uhiAsLEb6CVBr9APhpwhDTvvFPFk",
  "key26": "2wJzxqYq5J7knvJQzn4Qzxm2yxfPRSs95NxcEpmtA65ErScvvRPyo4RqnwCNWGoW2HhpeaHJ7CMkeoD43j5rmtMg"
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
