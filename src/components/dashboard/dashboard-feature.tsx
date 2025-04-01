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
    "4R487jDx7hcfs8vjw2cZyYGZd6NcgqJuFMQevDPJ9EqyRAAmjbdTAvaiteY24AAcq2nwHyqgTKgmrNUzwU1YLFSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TE363vgtm6mSoamKCf8d8RnDkspjX9gUnaX6f5Nw6mtWgevnvhUNQVAg9Ufqh7Dqi9Ez7ceFGgAu9pvd1vuB79Q",
  "key1": "3331ck7WxzD17wSabSzoL5Mu26MERzVU6H8PpVPvY3cE6XHfxc8x89WQY34DH8Qgpvvwpgz7W8rcs1a4n3LVFNLE",
  "key2": "59WFaKXWeGoj56nRAX53rH2pWspMZXK9RFYBCbGgbvcxLNkYtzRyV62ywuKDiPDTRBUvhnSZXEHuhxPz3W8K4MgF",
  "key3": "5DaQ77UsJU2oRQQssktDrge2hsqGbAkvM7XGzkMwXesDTMWzgdaPzwSpVacLXoZegLKHhCzw2gMDziV5EG3CUUNs",
  "key4": "4hqboyrptBHNGTvyrDHZn8bJdwiBT1GgHFKPXXgNDzogNWJG8oJdhzfoVhPDpkSch76AAwhApNwC15JS3KAvXE45",
  "key5": "5xaW1vQPELJBpJa2XDLuddbZKSu4KQo8YxLim3xyHmFt5i6evJ8dYYpUtPmQuAjrFTWEr5BJefWVYEMC2dTaFpyW",
  "key6": "5pnnaDDfsyTA4X4oCx1GVDhJJ2FAUbYwx6zDUCC4c5h2ZA1Su8zDhs2HRy57kDcjRU2wMApSLThetfXXhb8xG3v4",
  "key7": "3TgJtJfzXzHVruQyZg5Tgwbmqsn2giqwdUh2GQdYHB9xdVbZjvKBhAsFndVSx3XPrMaVDZGDEwXG8Gr86UFNxVNw",
  "key8": "2m9NYeg1J6QF4UZvK46FdBhHWXkL2Mf1RVCmyE2d3z8yM3uNsWeHDmhvr9fJ7wpbKYJ3Qmkh2z7bpMpgXuNVhCMY",
  "key9": "37aNokd7pgzoUAqCfiuRMSeygpcFNimrDadL1uCpLbLby1hQckizc8By9Ra5wSd4zKx3s92x8WGRWhRAhLB9WnDa",
  "key10": "536aMp8vzBAbsTUkjJLMUPvq2dpdaphAJgf1LcNdAFzWDGSuegdByyMZQZ5VzifPWgG3371hUfhaAFZDYwztvKhr",
  "key11": "5s41KqMeh73gbXKy1ZqvgJHzQ2ci9KYVxK4nDtur1LZma9zwfvsCZ2cdAAtZ2zQZ37rY8PeiWDXvxow5EHhJQoS",
  "key12": "m5dFC59LLiAiW8ojLPUeci5XMjodj55xJ2Leqvjb9PRLVNKFfiv9qFz9bVH3etYioSp5BB9fR2i4pRH168BNy8o",
  "key13": "JM1zN4LWBFiZ48herb22PkCS3dmjQoBVK4jB1TXEBiEKHATQrp5bfMvVDkMKfzQ1zMdcNtYmVht9V1tiodBD796",
  "key14": "u9UV88DxFvBcF1rCE9iSUCUtQEvbYALQuF4j4vD4enRxoEbXn6BBf4vBkP8ipN2jgCakCxmMpDNMBi5DexFFT7t",
  "key15": "3po4Xmi6JdrVJoUVEZxorZpCapBfvjaNcmjgw8AoCiw9qTxkTuqsEtMgrxLiDsUc3ybrRVaujuikEX67H9BQW7LP",
  "key16": "4PGvmjfR9pWt5wfosMQuWpDxNw8WiabBmU4Z68bArGEWm2un4LfnPXxUxwmzHs5822J2cTdFYuDKW2USoHVUBDgN",
  "key17": "5hLA5mZc7F62XwcaFcEb7uPVD7kVQavN2KDdfmJfn6GteZyqpPAAG4yQD5Au6mxc1zYYUZPeV43pL7VYJd2ZZDvk",
  "key18": "2pgHnqW3QQLrS1JaTFb8ptn9xErE4MQBgjpDZS56UX8gYG4wNQqLS5iHWDwxzgqdKiS7bLK2pMKaZ7n3QgjaPG8H",
  "key19": "4aKBv7z4aJvXZDEhugcmmyNTi8LpD37niBSuoytN6aP9S2sX5irRRNuBngUxb6igVAqVuhVL5L37A6HAPZ4dhFBG",
  "key20": "Tzdv6FuVTXvi8bUSXD3kn3VTmYM1wp46cUuQ4YumNChxUdedRgJi6EVioxu2otNfVLUFMFJ17jTALttxqPuY513",
  "key21": "7KTZ416prFkF3ntp1P1EJtU39N72YoiFajtQdZpGVANdUb96LxFXJMXAYWad9uxqhz9oYiw9vpLsuD846yHhfew",
  "key22": "2fNpCaVabNK1wJyAuzTw11v8Ktb3957HKuusWR5tKbyN3uy1Li7JYh6xvmWXR7d8eoDaXuhAdtFer6BC9CWg6SbR",
  "key23": "2MVPteZLyCSmmDDoBe2ynH5j54JiR8Yazb5SMVBKwd1JqUV3p6xs5Q8MQg3ZDHeF1kiq4xoF3ZGk5bZd8RnxpXYT",
  "key24": "3FEUiPPU3uYK47zQEZrAUGjzSihzYQcyNqFGDSXVTF8zCg8XzQr3ivjVca8fz7h87p4N77nu8XZJVp4U7Xw8TCBu",
  "key25": "2QYCHFTRiVcPmAhuBXbDPaH97StvBEya7S1Lz8GT2kkKEdygRnAJGo3bjTXHGZ7gA132zoD3WxFkiMUqG7ERqhnb",
  "key26": "ZCSiX7jWP3AQKukuPgRTr3SfLcZdvBSJqeYu3v4ciMzwoZHrjvXs6FSDxA76dWKD3Jhqj4Eog76zbUUvP6Nhz5J",
  "key27": "5Rh8xCCBiiuZikZNSUWNhwY5Uqm7r2ECB5ARRja6ShYLJKtL9FBzvRQi8ayhdhxhV6UqaU9AZa1Z1K4pVpfkPFEA",
  "key28": "5fSJgZZcNK2YWbEi6hUFhRxWeNA3gcK2GTSw3c1LJ7p6FAsru1KPZFUC4tX3irmrAVFvknYgu6WyTvH3gcJDPSWi",
  "key29": "4qFgSWsNe4rwXXEQhCuuZgv222y28Lk6UHWfxCo9bBaxSK1X9KAqXJGF5eotP6911XawDFzkaWtNahQ3rMWd1TLu",
  "key30": "4DgvyVXBkEKkEygCCRoJrwGqLnHaAEZpiU9u7h5FD3RNa8WMCXTh9Ja8a84bpRm3kWsL9KF42xX74E8b8yCJ4ASL",
  "key31": "29C1F58p7K8DHEtU2vFy9qvrxYvgbskeeoZkuA6eaScwgu8t4sWfZvDw4x1utSrV4WCUYDXJpRrMMZ7kbHxv1aU7",
  "key32": "22mH8gR97xKnSdFkjZJ8xrfJQZWdmBjFTJrbdofVLJD3jL7JLfwjKXCPHFnuuiueWfHK3qve974eMqZvG6meAMkP",
  "key33": "5d1LH572YTNhGr32KWvSSNEHnQYt31syGPkwXxnbofL4oFJuWn4kHhhnpCX8Uyzu5ABhyKFW93pTQ2nFPebmAf3o",
  "key34": "5REqNyAyVFbkZRVPfwgGL2d9iJkv5n996zBmTyTrcmJayFUYyoV1AhWpfL6V1MEC95qZowtSn9oraCiLCcgU7CUK",
  "key35": "5CS1V1Dy4tQ7ZRUGFNgaEcqFjSSuVYA8cXm6s2Be8Dtxf3pzQSjuU1Cz1xtkWvRj5fj5cXrhvHVaCb9rkDXQq5Tj",
  "key36": "58zNpohtcwaoAbQt3sU3t2KAkDYZXC6TSws6mkM5MLabQiDaS8AApNPdYPX2Wq8gungDt27ZNUUAHj2xWjPs9VEJ",
  "key37": "5KEikT9zM5bUmr47FJKchMcYoziWD7L9owprYde98Ud8X2rKzA96CHrcypqAfXCJUaj8hb6Naib6rwDfA7tcE8kh",
  "key38": "2LZRK18GUKCxLWCXWwqrtSratGUPwzczE3QPArDEXjyMnPpHRZxHBwUAe8iGqnyzFjBNZCTEpGbPbs8UjRvNxxS2",
  "key39": "3YwoYWSy7Ez81sD1f56zX3yYirmaSvcnz8Y4yJrnYRvPpEn1AzwGUGKhiJmFvbCouZYEKoC6YU6Eb5hwFECKLXBD",
  "key40": "5DUJ1xmsSoVEwWhNVTEz9kHsZ7NZrCM2uYsNcmi6p2qKrQntpt1cdCYsfcJPBjn9p7rYwBv6LqgYWmSr5k6u24hj"
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
