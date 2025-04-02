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
    "3tq3d64Cn19cRZNCr2kqvg8JXskeN7HjQ43rZw5fcH1vGi6QtjKw9WnDu88yndR6y8ooHfRQWseAWDL8ZRNuPYwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iu7aSejcdpjmjjJn94uCig1mGNQrNm7apQvChVtnS5bRQhqjF4M7b8PyJrtbHYoUb2r9JDhM3uWt7R1S5b6H9rN",
  "key1": "4jmxnE8XYyXJDvELtSq7ZqxuNGdVizp2d1KnRMM2gP6kS6QfLTN2hFHGwS8imJL6kxKYoNKbw1EieQkTktu8HVAw",
  "key2": "4TRL3a8ip7LypNyxJncMU9LzdEnb5gMonirw7FA688e6qeeYCCbX5Vxtx8AzzDB37eVDgPq27XJ5QnKqYU9ePXMK",
  "key3": "5ywssVWs6tGgP19cZiiz3mKHjcPWoQwDEezwrbjeW1nwcowDvU6pFcnCVS4eLu6ozzqeZ5CeF43Ag5Sd9NnxRsqv",
  "key4": "3eHtxCd1ezfGqbXMoJB65CDpA72d39ABb5RonX8UupABToF8nRcwxDLgPDa32Psd6mb1jCMYtZqWU2yUhm86A4vh",
  "key5": "3GGMawAJh4pWnfinRi3Q6fb8Dt6NMEbQFtGhcPfGeGMpVsqdKLmQ3PxUseW1tCiF2EN6nYZAS2aVw9wLGTQeKvd9",
  "key6": "436WVAaCqG5huksXCfvXGrt4vcTA9CtP9VUjELuEVh7ER9i5JKazJhckLXHBQG92smknvFHbQTUJ6dGDLtZQuiqC",
  "key7": "27hd492euDdnbKTzCJcHAwFcfnRVZqd2SAhWyjwF6NRMBaKvCs4bpyDZykR3T6wLjYL9oNi87rCbWe1ywqQgeeB6",
  "key8": "2hBqAxftVcmrTwMn1Jt8QpaN5uWpGDxBdEhfeh9CHffFRxEdxVR16x6jWJEhxvwTnkjf9amViwtx7bN6WeRfLouf",
  "key9": "5x9Up68ChvSyq9bMXdyF75HzTfDJcQud8HLQo577PZpXR1XWFYLtzxc9F5oAuq3y4uZQrZW3P94vdQMwrhjoUzBp",
  "key10": "QHdCMhmqT8cMEKinxzpThUZJxa9b2N26TKCqVeERQRcnHsHuMYuHwU2fEHe2gLCrsZunK67voHmvuAJHu478qx7",
  "key11": "4nECDQ4ev1HPvRosbeRKKT8nfxg2Ee2ECBzNEFT4wEgvaJ5khroS4wVUuvNVcvbSXFRFv844djjpkaCyTCJW6eA7",
  "key12": "55PEcsbSbGhEKFZcEuwKYT1g4U8ELv7ianmt3HUoBWgRbtsKRRdyCeFmrPwa9jKd17NhGivVUVGpf9uaCPbeV3mj",
  "key13": "62eAsKysEKDwzTDUNpFmzC9Goheg7Xm58WGqSLc9QFJYVgJvanb4VymkBqKmcjConF7fTMfi9RGyLs8yVqHUvysx",
  "key14": "5aQPpmG8Q6s4Gk5LbEtkWFp83U6nBNmQHqSCu2UFox8Q53HtkhNZgjMXMrqLkzSYoV23cogMdH3CgUU69phYSYht",
  "key15": "2seo2iMuJqGpBBX2gzRRWhLKgRQufPvfA4LwNJowq97ZuSY3VV9iMWbS31x3K7t2XVHVRwnFMZq58MyiNTyDzLY4",
  "key16": "J7ZdQMHKgahLsuATFaNMyKR7rVMfZpFp4mvGwNvgowSBKmWv2oiBnKv1mpp6f2W9PPXnjDxgeLzGizX6n6Z3wHz",
  "key17": "2TBZ8irwT8G9iRpYTfMRCuEecDUzcvKuwGLPGDiwLka1jxdRuwbXsjn9Pa4GkzjKPATAf4rpZnqJxuxrfkEWqXbo",
  "key18": "3x11ZQgCkDdzM7ARqR5zegwa9cMYcUg8YfjGa1pu6opKghT3hpx2g3BzBXFntdF3rsUCXDPMaE76PGExmVYcao5F",
  "key19": "4zGia4SaqtL1rF3ub5QoJj88vuVQTa9rBHyU5jTJSrFAuLYNjwLw1x4DexaC4h7m3W5QY4zFAbqrG93QyQHfKgdF",
  "key20": "4WhCqd3dPofRaNc5YuvMNUqHdcrdG1PRKtr1jG4jDDzUutZWF9ECpckifrttHajDQ5YDa16k4KN1zurBytZnJAH7",
  "key21": "3nPLoBn7isNcbWqu4SNZPcYDdLEyq8f5b1q8XamDsMFWZKuGeb5yiLdg2PwLE7hHHBakbnxjQBdNeWGRmKAwqZAG",
  "key22": "5ALRJxTzjxrEuyKDqAUvJUCKm6kcWZ1DqwqNPYCA1ZdbebMazvdgs6AZJsLYepEQQ1o1xtbF2YDapBA7jzGjVPiH",
  "key23": "3ieRn7t6wivH8winSLiP3ggt7cTUCvqoeS1g4ExTaLWJNBYhwFLisDukdZvv8a9quR7bEmYaHqdQ5oDUbm1ACnYm",
  "key24": "4s16PH5NY82DnsmvFscHb53BZ7u8kK8Actb1fjRNPqHJh2uuKYph6NeCWdF1EXVx7zUfvfB4cswud63svLHdqJza",
  "key25": "23Ak4p2npCUBeGE5FAmxKhGBoBhsSYN1BWRn87A7bRanrzxTN6Nu58eCG44394QPVe5fJb5FbtSRdTYSfv7qsyAA",
  "key26": "XHVFiTfaeab2iogjGvV7gW8sYF7d8bks7fveq5mWZD8WMLKmP6NLypSnPL5AYWdaAptN1JUE8kKC9RNR1KKwCbe"
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
