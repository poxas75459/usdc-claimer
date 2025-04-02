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
    "TqsVU82FKsaEfjbxX2BAETnnrEru9DpQWso1YynYvuWe1Gr2635ABLDbsSdwsM8JpV5zwyzC5xtRTjy27BoT4x7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eaBsdBRqea4YCUh7qBzuwApuFuaFH6WzkVWF7VhrbNJJ2CSqJfkZ75d6Dnx1d2JB8TceN8N9a7gqZxo9FPxivMv",
  "key1": "5kUsxXTSv2HhUN4NgCQKqn1jiomvxo4vP1fVmWoh6ycWHy9m1kMJEcyheoSHmzMwa8X1EPRhLyScoqiQFufuM2uq",
  "key2": "5xRSDkHm7awUc6X5rgsaZx97i4mFsgqRipYbnvmZBNizqogzpJzSLqsjjktKpQ6i4tD9PvKhymQhpa3cVhgtGt4w",
  "key3": "DwAYdbgu9Z2R8ti2MFUHWERenEAkGVkmzkj6VZ8NwXLwVikhrquD48bXh9NfzWw6urkh8S9XLNYjAGLPxtGydBo",
  "key4": "3aju4ADqJAGexvWDRfJxoKL8RJoKGzP6U9Tqk456g4KAWECJdm8xJqsnBKxsyuj2nyTYGH1r21bcNm7YVxyCq2hg",
  "key5": "3GFwogFxeF1oso5jN2FWWax7Z3rLEyMpLaVdfM6dFCC43h3NNe3DVtGnMNPwbCGjjquEvbXyKhshd1P5hXtaU54X",
  "key6": "4CfGFKcnVndf4HxUbxySwZ1qMJtM7m9z4f7dbyvdMyRUYBE7p8ZuDotLyc9JHEnLhfcZ9ubZ8oefRFMvCP8WZmN",
  "key7": "4J6CHnSFQ8FboJXsUpJ9BsAqY2pCptVcC8kRJ2AkoHWmMimo1DuPimTPGZPpLAVrQAJuJNdZNyJ1ooQpr8g1qudy",
  "key8": "4Cw2LHaCvHFmeawfrCjfgFXgXqqCC1jrpG1WiW25vqonQvsU5DA7rRTfwJDUrrmo8C9fJ3KVfCNLG5GSPE7tQEd1",
  "key9": "2os6iKWiCFMty1NEMH89cCSSsLNMQX7ksMrhQtXn8Vm6oBWCWQv7bUYr6iti9PVN2wt9or22nLr8oXP5onLsYPhZ",
  "key10": "tkq8Ddm1rz9uDJMSn1b7VfjdJEEJ6but6zRRw3BJPw3D4GGiFQNXHD57m2psNHdbZfmjhper2iHBTGx3iAxGSaV",
  "key11": "22ESsMBUeU4s2CWotFFoSyb7kXaJ36qmSpf9ychHYdNxAL4ae7iZJK2vUj5feZW63URhUKRxtBhJDzhmjvV8j8vG",
  "key12": "DFwvqSWCjW3VJ43AkyQyEDcMzaMgwpeRYY7UQMop6X7ezGmxpGatEbzVfYqDHQAfT3bmhvJYwhroWpNBzAbDrZa",
  "key13": "bbtEtoRiBt3QtCWmPkALQrNyPELNRajGjjKJQVThx8hLJN4wQXUzUXGk7Xb1ezV3k8euKQ6fmMguA5CvsMbKP1V",
  "key14": "5wvVRnaHHRfyavpgQrTzo2gbHCi3cxpnWFCJWowgGYDpxYtbJRjefdpJtVBvu84dy5bPDA1S2urZkKCvz63syv9G",
  "key15": "2mDd1uer555DQKYbnvGZCC1CWq6ySmbdX77Fsa16deWaTfkkNfqJT1BxuMG8ZfqL6dmW9NKFWAerqqmQsx1UbiqC",
  "key16": "3eUmH1RexR7gvk8QuXGPzKKGK6uPf793kZNsYzkFmXRP53wckac7PjsabwwoXZ2jgqErwdCEEUDXHsNJUUPs4GaH",
  "key17": "39K2KCaJWB1Acv8Bxby3SM9Jwt9in3T7ZL1ARpVtjJ5UhYadAS48TRifdakP6t1QUqNYHxCizjTB7H7qdMK9VKPR",
  "key18": "5yqpS14hFNqP8aR2kjCd6qxQgRrdBX352oQTYz4ewLBrmWGondUydq6uVLiVCxjD7oszLtb62eJmaHCv6jD6SjHn",
  "key19": "5W3HoXnk5CNgXpMMqsQZMFh1sh5eLi38gEiN1MrSE1YfHBgvuBbpSh79PgTVFQEZxcEjtgj7ebQFqA5Chj69QE5G",
  "key20": "5f8wemjMiz7D7GLJnNzQTQHi2Edh7XvR8vzPz1f5hDh8vrrNrZ2Aj31dvzDR5x4wrHE1aWoirTnMVXF1rmhwVWPn",
  "key21": "2WJhJvBFLAYefoGauLH1zsxcZFwzdMRaiXUMwymjm96ms3JiCWgr1o4tic5hZBcmukaiSzj5GjHeuag8Qzs849VR",
  "key22": "234McPV4pfPEPqVngc4d4gy5d2WktrbccSXo9cdqD4ikZVxmjnwrFmjhop5bHtvEbkF6MqkwAS3NY1hhcHsM4Yhh",
  "key23": "3PwPa6zvSW3uh5MBw877XtTn3LCaDfbrBqTzTTW21gqakHcRDfokDM951kpxmKd4hjKKUHH62LDSAQLUDQHPqew5",
  "key24": "KoeKvTC3HUdYsmJkB5Pqn1XwsmqFxXkrES9FG5KCMjrUPdxUZENDdP49k1kncUkAkftdjjLj5a2v6K7hrbka9Kt",
  "key25": "SmahZhaeVmEdvMXXpbfQy8YDsUkBWMyhVoM78ogU1bihjneJ4pFd6A4w97TxCmRovuassHmMamirdTY4BkLfRfd",
  "key26": "2F3TsdKsnzVMBs7A4snhA51iDECpFzKQUK6qcXssgoonLCpZPmtWp4K486bSPwiQVAdSth8boaSrCqH6HQMsCDrg",
  "key27": "4cvz1DDnP6Mg8vdc27zLkfedmzQrXDa9nUmihzWxTfRJNst7rNfKx1YTRtdKQYkCu53qh7fGysETUmZV8MQdK6cN",
  "key28": "2Q5ScYNfNpKWLvo668m8cysC5rmu4Xw3d9UcJZmg1uWqgfW9iQDvbG6isKzstULzwEBLTjYxDEVPhcKEPjaPf5Sw",
  "key29": "34FgDqS84U4Dxiee65texepKpQHKhXRxWjcBoUpPpTWf8g2LLhrF4EdRMdGnUMvTvWggdHS8GmpGCtWiEHGkCjMT",
  "key30": "4X6YSRQUytiu6ACjZnk1Fiw6fCMSV7q2FwoRCBmHTjicoAj6sgHgWneJxaiQVBRAjqzEJH8CC5jFifjCABZqKadF",
  "key31": "4xqEYBwYHhbx2TcJYNBRBFC9WRybtdAVA22Jd9Yp4ykDKToBwvX3kKL2s7SE22KQHSk9cLcrcdSUS961sR3K1u1F"
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
