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
    "4FCWLnADH2MbB5rnxhfotpQXtbfnrQVehdHzUEEooPQ3KXt7HJjuEjt1tK2ExYjCjf5P8ePtfeaYE8cw6TnzpGY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bpXPx6Wyg7n9JrTcSmydrn3rCmMYLTtCd5E3cAaKibmus1rLHTLf5esbXERpkF7EQoTbVHLWMEa3EgBDyGfKNW3",
  "key1": "2H5jbDYupjwVF3w9mJk5zi6MN9VR2HCc1opxGC4dEao9E5UcX5k8VtJK1HTTqPMyvrvQ4fX28bJtJ3RvrtXd4JUE",
  "key2": "2kaYwWre41zkhuWmzzjmKJYzTBBGmUPue3dzm9xXAhk4VRYhpBxUUX2rfUJQ9fK97698coh99UnmXbaDQuViJFHc",
  "key3": "4AvBE6n3Ldf63ziS4uRWieHK24oXRTyTjMA53vsAFvRK5XA8SpYcQouj3QzDMarLTiTsb8kexQVRiycL2SQ4UJWy",
  "key4": "5cALxJQS97gRaDE1ykPTxCVM2gXPswLwjBFpcfaHJ2KWgteTH4RxXaUhXAWqn7WWhvtsJLfjjG98jh2CJgRmNqq7",
  "key5": "49S5BZZTWvq4miSsmrPBwZvS2a9pwwRntbaJeNPzW2HLXo5e77uPDcFhSCbRHyWJkuW8F34a2ZFAUu4SWVCz5VYM",
  "key6": "gWFiUotq4ta6MwmK3mg4AADTeXoUw2pkV3Coq1yh4FfkyuyBGRzazuzeyCogWFN434Dz9SpH5qWixtSiEWKWapk",
  "key7": "5iDVn81R3Qdr14LDQYfu5oMA7WpzQWVwF17eLVYbq846xx5w3qRPM934gv7HCTJf6YP8Vvo6ZqEnnnmGmB1ju259",
  "key8": "5u36cKUpp4XxkXRYDbu5TVAJFJHpKgV5FPUEpjurNc7cFXDAeQCosf3ZmCQjpnTQNKLiUXjTThqnEFgUWqdkC2Xv",
  "key9": "3KA1U5BwsZjQoRsb4zZwt1LwgNGqBJ1at8jbAETFHvZMZGJ778zyWCNwHpV7c5V4s525LGSCiZ66U23WHgBmiyEG",
  "key10": "5uC8ZSe9g7vRURfmnPzB7TtQvk2f6cHvYLcPqxPgEPijwHezxMikGBS2vPgAYMCCvub4A4rPn45znbpnjuyp8rCc",
  "key11": "4oK7iNaSwwMvBMX6WcB749Z2tWMtNEpnYgGt8kkkxoWeSKtPQ1DqEuzZMtEikv71sAMWuW4dKABPV9qXSAVQayGX",
  "key12": "53xNCjaKU1JTJzbxvmkn38cwQYms3Kms3SFC9krCdqtQwdPVTyzu64ig24syAqSg9Jy7JJsdeBqeSouDgH8L7hkE",
  "key13": "5LD44PoTzwF4VYhccyNCZeMgXcaREe53ByncxNxNLbkHu3KrZNn61pJdSt2CiDg9oK63Jt88bqXJkYfwcZY4Ftku",
  "key14": "4UZ1aBNVRKTWshyGm3Svro7bUcB2d9B5jZ4KXdMgRNkoUsbuwvvHug8a8MuEkZcZhwzCNghKRugLtRqSNQXT1nwu",
  "key15": "4rYbWBHHFCKPUKmLfhbhFSs7LKbobFpKjcFjSfdE8dYXSQ25p52u4JYk7UMnfUnjf1QHWvGQCGmYdkiNkDGMrpjT",
  "key16": "5V13YjCFnWyTJw3z9KQ15Rjoa3voFyNUA1qc5N7JRTFwCoFjWYRvmDMXv8sz9Zdz5oxfB588fB2TCdoHhsftHW3R",
  "key17": "43Hx5vCz44GCzKkjxftzDnKuBe76dv8amo8r3D5SaFLrBCp3ogEuegBkfV5BcQAKGt17nr5cMjFNqbbvbCerMTVs",
  "key18": "3Wa396p1yYh8WaDTq7W3wYWRbwxjJsLa4PDP1peUffbutHaqM7tiE1gnYobVnc7RaB4FN3deVp6RTTj6HsYsM2ea",
  "key19": "57Nnv1PQ6wp2FmYcLzSfCvwzm6q7wemsdi3d8DiMFfeTyAJh9DLpET7ExLqKWmQ1FeUvsAkjiGA6ktXKivyobKsu",
  "key20": "5VnjpTQ7dM2LHKYL38RgzrxsJa2mZGvZN5Hq2a5K7R5Rt8tXFaiWgASSD4a7con4Zr9qZET9i2KgxKwUvfUMprF7",
  "key21": "3BiXiAAP5Yw5fVF9eB7wRqnaPtNcxDNDmTjAGt1shVNc7VdoaZ7YndSQ9VLchjKbuTkfvhfCjnAC6DgbzzEH4rqn",
  "key22": "5Dt1DvXuVmpbSiAJRV3dMQheBDFRR2PkgLyBFK4aLyhGfRGkhQMQs1qhDgcdinZ8ZsYCEhNyoNcUQ7aPEzN4CaCe",
  "key23": "3wgErsX6nyUm3pSiZr8faKprYuCUj2sqUuH31YbmFoF6MNMTpSiRcoJyLwjzxSWntdjZRZF1TSeTWFS9nhQjAmc4",
  "key24": "4EBy35cFnZoUh1P29YEy3YifpQhWRGo2Fk3mcwGQmen5mcBdZuBqPaCRfB5uz4Pd3BcYW717p5SxDiG9P1Ust3xN",
  "key25": "25D6XB7iU5YMpWn6T2its9e3ABMf5Q3Xo8niu7shz2ZFngNPjFq6Rpi8dARVAdU3qJv4Zqgzo43a6N2GZTKGAbps",
  "key26": "5XeU4n3mSfGWnNu9115dHvhY8tGuqV4so2A6JFkKm6yoP7vpRbDdGFjf6EnJksGirCQrJnm5exqZQGmbhQWAKGRX",
  "key27": "3BeXSDUd9HP2AGitMX7YRyjndWKHNRr7Rvq1cb9BRYe5sVE9wBAbJJ6V2Xi9PcpWuXdmhfPtTdudeTkpDbDcHVoq",
  "key28": "66ZhiHd4xuy4neXyRPjxuJec9sTJDwFBheo33kGATfRNR6Gr2Mxssiw49SmKK5VipPVNeT4kye1WpE7PQD9yPr6c",
  "key29": "38981JMVatoVuJB4DfHkxVzWmFJ6XKcrcMtXTpqZF9WMbRxHqs3egENnjKtzfjtHRn7ezPsk4kUXrjAWBJf1fkWh",
  "key30": "4z7jh5MvrXAWH1VrGpAwfoSeDLTmDJdPvz51iDWmm1jio9385xkqZD73HJKheTvpzV2GNf4KoYzJgKU8ZGKb3h5m",
  "key31": "4UoAijr1jf2Bd3Gh9BcXNwakGoQZidcaa2JX5fnwxH9Khad1VGwffxkPC9knCjauruRByMELKdzuBzxkXFnXBRWy",
  "key32": "26q4rsCjp5qtMvXLDHUD9KeHCQ7bVN8UMsSRzpdrCJZzAEbjzX4tLXkPW1Ex3WhfyxsyMSigDyJ1jijswsksDX8H"
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
