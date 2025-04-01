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
    "2EKKbykwTaweKte67jvef67NS5Np1SqWCuLVwxRfuQJhwkYhzDSk9jyrcZz7684Kg33a3VcHyC5vanhMUSi8sWju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32AGs5v1RyWTXUQmEGzP52usHNNGTyJGfoTSW4Nswu8aLcProWjTCLy31KC2F9T2QPuWRbNez9kwBsRkSRYtPPPT",
  "key1": "48jd6SfcDzQAx8HuZTQSJs769HkYuodmpo3XKXTTTsaMJWoSBeuMUStXdHC92nMErxAaaeFLEtRSuo1BoRar7Ank",
  "key2": "5H8WorXNA6wFArs91uDPBdA1e831fLjKmJgWk8316Pv4NydYpuKqFCHZ4wQhGDLKHBAuwjj9oBc8DDg6ENgEcQ3m",
  "key3": "4DctGMmtKF2DTMJHyaoSxiAsWGBc6WfYkP7952EdxTvY6vjwpb28onbwP6NegnRjvMNhZo5bcuRZoWupe8GXi8fY",
  "key4": "UKcKnKQLW8eBt1y3xRUoyQGZVn3wYctLUaK9jiAR4z6TfA2UkCfgL2sDxjdfxJWQXAfPfvp6XH1A453WACXZNWp",
  "key5": "4nwWDmWYTwHFUWSgmxUnVd5fJ4ZUApv2v7aeXCFFbE9iEPYtZQrHL4ofSu7XJMzG376jRS2dhsbNg6d7XgrDe7Ea",
  "key6": "4MJTGUSNxJJUFxL8Vcb13vnDHoKHM6Wgy1Tz4fFoxSYphijZpx5JqvznxVLcSZdy3LPjf7LstoCtwdKxnjeFzEmX",
  "key7": "5u4duyQQxVtCiK5CKXZd1xRNEiNTGHxAmLxMedJbSZEncNwnDLcJtw9ocmS8TkmKkUz9h2oUexiDcsYHaB6BBcys",
  "key8": "W3fvDf1EFv5SNT7XvLWL8oKoAbiiHDHqxgZPPvvnCHVSKHu3StqtCPhC1HNbszR5n91kFbEBqjVixAZ8sNmSpQV",
  "key9": "5XDLXHNXPKc7y2nzpFGTmncwykiw2rmvMqj3N9tpiLcnjcJT6nD4ekZnfo324vXMnePYxj5kB7wy5Vf41QNi2mtw",
  "key10": "3drtkDxa3JrhWEv5ohgBn31yUzrCggVEdvsTiE84AESucZvMKFTRbrpSBYeqCUEnRqrg287eA4yK1DZCXw6jaKgJ",
  "key11": "37cYnEjarCcDofgFfR3MiFoSu1uAGkY1oxe1mhAC3nKVCTbvBfU5VinyYRX3zo1YgMmU9XTqXBThDa4End7EyDgd",
  "key12": "4bY4eNzPCbarLaHXdan1p6raX5xfzhSPGrEeWYd2A7X1WGmQE52YpjNDvXZYBidtWKwwUyYqeYEjaHxpDKvwZq61",
  "key13": "cgrYZHxok7AYcC1cMRJyeRgBCso8SRpaEDjZXu9VQ5K2C3u8dKLBzwavGLcArMMirFC6dCVv4DLbRexdgKbuWVZ",
  "key14": "2RfYbnWGiArenEbzDHjtwCw8JBxcoHnfBHbsVDpPQiAem7A4nghA5UMt4RsJABq6DqNdzKGve3K8DS33H1oqFii6",
  "key15": "25YgBkMpp3X4d5o8Ndk2FsEdXXrhHLnaATeQyqgLJUrmg7Szmq65HCw4b4f2gvbBgRK1NcWq5qrHfeMKUjhFWTqt",
  "key16": "22KJ2bWmu4eiUU46QWECdmqju9utkeSqcEmE1s7rbefEF2EepwESWVthRmzmAUvdtL82Zo3DdkPx3aivDRmGm7uy",
  "key17": "2FszBYjZ48NvMG1uuX6sh1HZynSmr2ySJFaTwGKA6JPcTAevbenQsrF2xUyc7T3FXsXmTJBrb55BLZ8YCFMEAgE",
  "key18": "5LTGt26v21qzafSw6Sw5g9PyCEtoSPFgSM1ELmHCARhS67HR2LJ7tYLikjRyVJpUYbrtG9DaLvtjdE1HPgsLC57",
  "key19": "5fJhkoWkeRxthTX3LePXbR4L5Fngy6hFJHo3p2fQTqkpaDvccaUwZzK8FmbyxkqpCroy3J8mRT6oFDLnuaLmHkcV",
  "key20": "35wKKwRdQnPwN65M6BGjMFYjbyML9geaUyLBEKqSNmcFWqiLonY1nJ87Y7aRRMtWRfjAnhkVvWuBS7PpiGsuYVFq",
  "key21": "5ZYWpfiN8YRxbCy6juHWfcRWvjWyUjUxdJXYBHvmW9pKQ5rvYUYCZWZpgRQ5hxD4muhUixjWEWSetLwefsE2piTQ",
  "key22": "3sq2nMYPUj5FacVRkQf5ksptPFmr3MH4A1gJnB3PiSeX98cCijWGpLCVBkbpxBjaD4JNByGRadbJBDPHGK8hfVeH",
  "key23": "2uGLBFFiL7QVoK6DjpSaj9gLKEskqFhnMNwBSrfPZKiwEdts12jHiPemqamTj1847ixCbeuKphb5EqNdpjkQ1Rth",
  "key24": "eFu5UkYAg1mu21DRJS9v6xDXqyZKc8sEe4uFpThoHWMvxHug95LWf3C79L2kz2VC7ffCtf16ub84QU5TD8j9xsw",
  "key25": "5JGhTLhC7zFo5tDv3DMZsp26oY9BY5aSdX4ywzi4KbyWewN2kfJA56rTVT71a7PgskNodMi4CWCusWfLhPEqHdou",
  "key26": "3k5VtLPgFL15ePYW9NWQ5h4MraKbJd3CahsAkgv3GHoFH2C6LxBgwoft7vKSy4mFD7pKo54hESQkLE3ybvbJZ7NQ",
  "key27": "4fGTAJFwaW98rVHCwT1h91aLnH9xHH7ao6JbnJ976kUkZBrRXw6G58NBsjtadzHFaXBVVPHBCYZUbSNBFKDecMHx",
  "key28": "XnpTaFjns2H2MqDh9EJC1dFLy5VupJiNUxJBAREkVXUSo3HngYGXAshhnuepQZZG2WtjEGnbsKLQ3RdQXmozL4F",
  "key29": "4ihHHetmMzXnmBdUkf7qogxJDg1DwQTeMyA1P3h98VhM6P4TXfftw2x8dnVdoWAEpECsSV7J2mCehTTeqBXKTrpf",
  "key30": "5VQYuER8pvymVYMFz2oNUodV2bEHmtN7QB2DLJkqSxUNQRCrXMqxyJ7guSa8jPWxNA4VxFWKZGGjS2LJgWt9Bwvm"
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
