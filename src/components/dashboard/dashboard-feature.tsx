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
    "4UfAn4QPekZTmNWvhgazFvBKtGajiYS72fdXoNwfEY97dijDKfTWxKuQ9ztsCvPjigncNAMotzsqHKyvv7cknXiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J2DCdM97uhBS2VxRPEyib74oV5Wrt2oTgbKPhcpEp2of6qcv1BjkPrkz8FvjW5eSm6a5zpm2rRxeCtMfg8B1n7h",
  "key1": "4ACw2gjJ1crRHYrvy4pCGT3RwSTvtvJx5Mv5CYBsCibVnd23vuq1SLhewWy9Xj71USsvQ6C89czX17T9A1RMbaMo",
  "key2": "YZZop1rX5kxL5hrDjS3BNyvrCJJxcMdV1gpau64KMXRgxDVPKxRVww6vtnZQrE6UpFyn9xHUQumuEjiNHu8fmY4",
  "key3": "2t8JFcRmo4bweMv4Nh9k8pjRwvAsHFn2W1GGj9FMQ8u6kf3Pp5tkumKvoghWoJ22YV3W6YnpfLgm2sWzpLYE2Qm5",
  "key4": "4TP82NfZBUmGoge2Ra2v835smm2Fdntgvqn5hZfGhxNQ1KbPQLrrxuxoJ7rQpQgp7vSXPLDZEdsL2Sw53VXvWJ8e",
  "key5": "3zpk3F5VK5E71AXJd9tKSzzbgU8jUyvKbTYFB6YqRdg2UYiuiofnM13MP19PE2M5ejX4nY2KqemtV2BEkWKeDyhR",
  "key6": "5mT7XsidWRKPeLsfxGQnTtAZjTjmYhqJQgAuU9i1Dnnh5zHcVmnNBDGSJLaSdTzQJs6NE2wGF6DanS6HfaV5ZBKy",
  "key7": "4JDoE5wzFJdiKyAjNbg3cJoes2SvvmqkxZFb2d4isBaSkKye3D7Mu5u1akk3R3Te8sYecdELStQm7ji2ZPiycUt6",
  "key8": "3ubtQVm7Czdw1htgKikWavPiY7hEhdQpoo3iznPKzZUMH2zEfn5QZGmuyvKaR2Fo29dQc12cAseZx61NVajFyBXk",
  "key9": "3duusmD5eubWd3F8o3NeKA5r5EFGGqoHRzDneqMMs1vRAbx1iWsBbZ1gShCMq5G3LEDmDdAVg9ZtesW8EhPrqmtE",
  "key10": "5DXAEAQiwDYsWhKxFenNddoXK4rQyd37s1REboHh4TcApAyhLDRgwKk9RzQdsjpKiFqNCBSQhJLnsRg8pytsLTfr",
  "key11": "2YcgMYanwSfYVF4t3uJL1P34rqp5VBmL5Y9eYXJGhLVMmzhBcvVsgQ1p6ZtE1SNerZWKVHBNTARkR9iCYB5YL9jt",
  "key12": "3Wt6bdBdML9FjqNz1sGJGCDFhBSvGeMWjvZRpvyb4hoq67Jbf1RgtQdUNQEhSULyDdxEzXRmTehAfAnBSTMUoZUY",
  "key13": "2bMuriQnTcpipAtqxaSPpkhBQEe2LAVvmqxyNKY5Z6nsZKz7nTWdgmFYxtYzxqn7MQY9pm53rJY2tGgT2mk5n9FX",
  "key14": "35ZjNq9QaYzsFnpw9CZ2zbz7oibprK2ExRWA5Uo53HNhXj64EXCz1TpaB9xKWoXEX1Fvqg95S7GLJEFkuoh9uJM8",
  "key15": "4mwwWmWr7Tr1VE183wq6cc6Bgvogxjh8RTThAGXofowcB64Fu3BjE5ZYENpqhJzdGXbaDUSZEytmdQ2kChQ6Y7PK",
  "key16": "2Kre69eSdeWUWQzcokYZATFDVSGPtVC6uedSsnpTUwnkZyjb3xgKfugawomfXXeqtR3fXV9sApPrcCyPeaobb8DC",
  "key17": "23JHDkyePLAARU4kVvsbNpCRiwPfoRfPY2FovFsEaJXXEq1CQaZDuwXnbcNKdBtXYhtD8yiuwB5TNxT3AC5Lq9NK",
  "key18": "4b2v1T9xGMBmjxuLRRsxh6VCPKJ2ah4JMjJRKSaRrxhHuVMG7mb6GGxqKdHGCR95skbDqAqpAQCLSttL2NpLSqSW",
  "key19": "2uLHbgM1hMm2UVFkpoTz8bT3eptoMgZydPeJFXRovoXHE2izJXL8baJ5HXPNQqt5pVAbUvDY2VtiHAXzDvY8Dyvp",
  "key20": "2jRf46bMoPm6HMVyngdwniLSYgmFdBvMayBRUTuKAqXu9cPVa4MYHsYRbnbTBgKiPyUu4QNJhqVhCXukW9VsJ7nR",
  "key21": "3aQDsgsjQmiGYPH3YX8pHW7U68pKTvAfxbNJkFfpYmEuQFUyisemwKZxZvBMD9m8wSByK3ts4x1ckST5j6yasQe7",
  "key22": "5YVJzriFzWH97GyKZadhvC3Xd5UYb2F7DXE2GST1w7YffgS967LyfgHNVFXsmic4VJvwa3WQ1PKAkfStKPDZKYXF",
  "key23": "2Wu98wm6GeLMXqCdvWiK2ndKjiL7HjMSjFMaZyQH6CRpD8XieauP3A4vR7p3mdZUck8tTUB2DRqwmB1oF7UD4z9P",
  "key24": "3jjErfKVrzPHWVEFJqbk994ft3xgC9aaTX4zsZDcs4h7Qpnq8X9Axoq3CMAMxbL2eg2QfzbPFPQZTgupSNtp4Y8g",
  "key25": "XX9PKwugrnyzBFikeugRe37FxByQ8LTmPB7SWpMBzwTKiBk5Dbq3d6pybLKzmFHxeiSfeN7DkX64BaxSRgqZcrw",
  "key26": "Tu9QRUyuauz9YxNKrnVZtsmki9jZoY4xZuBCkhctxG89YELREcj2dU3DYWYhk92kUDkTxYmRZEtFndZFbmuyZwi",
  "key27": "4bi4vcejNCGVBmazamASScUWtK7Eiyd6PVRLNCeBXDu49DWaKxot9t6ixqHdCxZ3KwHe4rdMjP9MW52tTaSNEjB6",
  "key28": "3x1yqW66zSBdTKm9tVEi4TG2yLrETowwbruzEei4W9GYrfp9epxMJ89vLtwuPZgeHUR22bg6zG122H3arQvuGmhH",
  "key29": "5UnBrrMeck6xeMS5VVyzWdRbNhkzUphJTBEpMC12dJFC3AyveHbvpunF7bihyXVFZ1t3tctQvJiZCwpQXfcpyVfx",
  "key30": "2f6BR8EtcvZ7Ed9QsUPWaXKGoJ8JHoziyqPVGz8LPxr6quARgBbGBjA5WPZeqp7CYMpm1YQqRLLHq7MkWSRtMAQm",
  "key31": "65jGM52oFhbzKNZixLe6dfsHvyA63SdGWvfPas8ahHeyqCCrDRWRBTR51c8hNZAAKNQCj6fbDh6t4NgZiTCev5S3",
  "key32": "wTXwLzezXKum2frWc7R2Lx5YaABgXqwKP9LgbcBxXbWxw7XE2fFJBAT13dYFy2BmgKnRwAVqdM6G7tfKTQKZX3j",
  "key33": "ZFhfg9frztrUh5LkZGfiimow8X24tqfienc4yJFxKDnLyLjqtT5cJtcWPdxGz3NYbFiEHMM57TGc1DDH2gw1ewi",
  "key34": "2TmC6LU391xppAd3iXXVHXL8PwUf49oLbbcdoL3Fgypb9FttwQ7nxPNwCYYWYqzdzmhw6JnkyGsmeP1hWfFWLyUf",
  "key35": "3Uh82HQBkcjkHRmw6ExTN7eNi4HkQmF4cnxAUukdLchZMSnR4LLgs7pEQbK8ynz5DUcr4f3G17nYcE87eKGUqNnw",
  "key36": "5U1wFudHy8vSf5jHRQa2RSE2hic4VdApA2kpRsdbm5YtgQXjftWiZ3fxKNfEYSgakvEKFTmgQ9z2K97Q8BG3HLCf",
  "key37": "4qgeDaTcky9bPVEBfs9txtoQ1bPvXNsCVsrHzTNXFDw4Rzh2zULD5krYoq3fEbQzYUvmSAbGuLLEStX5BGXFtN7C"
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
