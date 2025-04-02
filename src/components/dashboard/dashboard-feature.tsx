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
    "285736dY8sD5BWr1KiQG2x4eFHfYeaKmPgqcARRPnfD9GMLULP18WmEnur6fEFRF31KPiQGDunvoYMmNtdZc4xwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Ls2WrFNMX1YohSRkvaxNZztYcp11TzrK9Q59Pf4zRkVvwHTn52sAVdaLKBARcFrAtncZeUY3NS8BdxQDo8TXGK",
  "key1": "54iyN3tRAzhoMf5hFz9HeavpPWMHGhDKYAgKCjny2icotfU4n39j3ttfSBxRNvFNqJyn9dtxkis2wTrFeQ3d956G",
  "key2": "2JEQsS2VrTKFUGjvbJJG2hpiGioxVf8opqkyuZ9MWiprfvcrQ3Pzbx7Jrs5ddMCpNgTKWQr131L1GB5ito9C1BV6",
  "key3": "JWxRQYmN9s547NpnVhQbZ65tanKQ9iNjJsfntJduBd6Piv2s47G9bV7E4hkPViEBuhcHo96Z5Ykz4yN7K5LCWeH",
  "key4": "2bEwskTgHPq6vsGBkzFL26qFgNzsavgrYQ4BRwMRBrK5hh7JnEhHd6Zrcm6B9jPD94SFsp1Us1qbkHxrWYPEsG46",
  "key5": "2KwHjZLtLkF6mKTT4QDhrfxTzq6MUm1fHiFaQwEHMUeBXame9RoWgrz6tpkjFuYUHw4pTbSiuUibA3HM5PHoRoxE",
  "key6": "S4fwoq6XESG5q8YvWzYyRrzhJY9dFdCwXT1PVbZ6mUaVScUabtsCZ1n3kPKoH2j84gTi8NgMHFZ1sc6RnBgPkie",
  "key7": "pUaWNuxi8MeEUqUYoa3A9ohzq47Z7LkjXPViRhrhEmMekuzojd5FKrbcMq14xgRnJvjgvp13hKxqWpGcrQN6tLb",
  "key8": "UYXw3tCtSkcAVwS74gxSNhasucG5rBvxoW3yWx7TkeoJpvjd65w4tuqZ5tP4PK9LfEmqxqry4ADdNsxjTQssEdv",
  "key9": "GiwML3SK7XqCwLru4A3KNUzhJmMmLyJRtUAgGVjZfyc9CF3bA2C4byP7EyVvaTmoGwq6wTC2ynMMHqFDcR4UtDo",
  "key10": "5Fbb16WMbej7Z8VRvNTeQ3dSUSZusPC6RK78gu4D1SzNrsS77ziGhamLyB8CzbDpg9iNDNubsqF8CEAvBJ6WEu3v",
  "key11": "e2nuGaxmqmJKadqauHPowYYKHbwVi1edibfRiXX9HhBnMjXycjst29kYz4XP37KrtH2M9UkdPYVH33hsk99idS5",
  "key12": "3aHXU181XmGfg2pVsa7nR1nwa51kTrGzw51Pk9h1bwpviRtaMrGbBDvqpksxRaxKnTDUFxXRH6zJwVe42G3SE92M",
  "key13": "38LBZPKZjVjHHbg7bCXR3xFf1ghnS1RF8JBZtxtguKfkqzrb2PfTT8jvr2n6r4wrqMwfrThi3Jkp5BQz7Dgv5mjy",
  "key14": "2YCLmEMsJUztzWNZxBuJpxeYqEHu3reuv1CWPmkzxYKEZT8bpYB6m5WrFB337G3u8LSo7REpjaHgdGJ8kWdwFLsW",
  "key15": "5DTAbgSAnqq45yJWmvbphRMLMpU91rkgy4QYxHpu4aGQj4TrxZnhfPPe5Fd6aTDNK9fzt1a6VtdQUKegtBjvauVu",
  "key16": "341KuPEYiDCMB4ghsAtCdtRUThP2QnD62Jf7SYmU8WRGXcV5f1VzE5jYGN2SKmPPv7s11KGgtGWX7gRHPyYjzwYX",
  "key17": "4QyiXocgoyrY2FotVdfw1AxvDPADPa2BWL1UJTuVq88C15ibqXKH7eHxvvLo6Vbc7n5J3vLTwkC9WchKBShLd4oQ",
  "key18": "2mRNCBjXgWgJSirnhZWFjdiqGveKi3kLxjBNa71u1vadLoXyMAzwZ6ePFKt9YActW59ekZxXxbGUD32sGx3ZA7vt",
  "key19": "4otd1FySv8WfBAoa6a9D4hJu69AdC1kwxUk4T53QEWniScGS6C6Y7TEQ7jKvqLjuQxRyZcxbkNuBScXPP38BUvGP",
  "key20": "4pvjw4BAJENPkYfiMBaoouN1GfQE6VHrgnze1EwPtvmxuQpSVxf54cKifTPyzdQhTcbq35ab7kDhsFwdoqqW6LZG",
  "key21": "2SdNg8Qf7NQ1RcmCTfftVZhDrQDV7meGM4mbS7o8h7wMPHiFDoHc5AsvC1427Rphh9fB24cMe9EVP5ERKnfKRUVu",
  "key22": "2ikYRQXuM1Rtny4fozoahakpYDbemebVE2hzNZDdDzy59sq966tRjkvaqPu5mJ7Y319nng2ymRHdRVVrKCo38pM",
  "key23": "2i9th1bEzKd7qNbBCED7PgiqV9F5joEzRQxomgQ1kdcV7cocusgiLBiRHyewU5yDphr1jexud6JYQ1NPjFmf3EYe",
  "key24": "36hmsVPLxfUVPp1ihaac37jQ3Ggr5aq7dibHzFSfMxx6XnZPKhnjsKLCnWAgebYRGjQz1ZCNZtyPbRBFdSKd1M6n",
  "key25": "2cPCZ7cG4avM31vN4a2vvjGr93UCuAt2jrdtWAJxkcMMncZN3w5VKBs6rnfTuA2czhBG5KhcGX34kFmJ69dNy2es",
  "key26": "5KnP9DUWTqhor6xccbRoj8wsiLC2ACD4yTSF2cGBEbbYwr2PeEicDqmzTM7JLGMztHiHEdQ52UffgS1HcPsgtUJq",
  "key27": "7RDfVVKjwRMAsqXvFbkyHfW2ApjbaEBMQdQgb6At51QBkRSTJpb8vxP5rpGgCfE4fPvxystLxfLrXmbRh81vG86",
  "key28": "57DNahwsotMUixbJvnKjwXAu2fWiyyj6f4G48uR9nGY1H18y5pzoSHaYsPzPVYGgEjynPnmJp3cpN2FjZbZfaiJf",
  "key29": "KUjudhauWY9qEWejPAKnFtDqFoHMypAfmZrjBqki7SYTSLAR9kpTnXioNZ4z9qTzdjTZCVehfy9hYuggMcrJ8tt",
  "key30": "4g3ZLUyiuMdkdAm3UNs27PtN9WUM1YcsTtiGeoD8e2Dt5X3muTs3SDvfGdSUNEKnn46sh4XZEfJ1pd1F5G4sRMN4",
  "key31": "65mFtM2cmfG5BHtnCx2ZNXmgYqgLiSrYybh6gFcckdcsVAhsEopC8e6fPEo9Biop66CXnZ6oqQQKqhE8iNfKxa2N",
  "key32": "4N5D1rkBk6eouvZKjoZVKjJL8Z6trt2NFc4mdXUhdRwVturFTzxEgYfWwG7bxozG8MVdaN5XREF1nYdUwg3z9H2B"
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
