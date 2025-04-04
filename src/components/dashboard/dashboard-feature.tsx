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
    "2Lv1xNMUyA4dgbKJ8cBHSk2aMoeQfVCZiiF37886B4wMx1zRAjPHgNooUFxwWiNazSXu76MCu7mMxbtgwT5djTRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AWBzjBD1cLeNoL6uy95kHRLArizeAXQDDLDkTph2tKZnSPPJqdooBb4xvWpzmr3txoterCF7PqcoB7aBNKgsmcW",
  "key1": "2iKNAurV1utA8zixAxWkbyJ4SSeEpvXF9kzZN8uHpsLBfCfNYrSh9ZA2ZbaD94ZBu5gUn2cR5mWQ5m8bqmMPwcGh",
  "key2": "61o9An8khUfD2CvX2wHsUbTKxMFq7dEVpW7rfprjVC7kHF77UEy8pVkDW4FfYXkgkdy9FPPhdTSftCDpDLvdvRHZ",
  "key3": "59ApymyzrU1tg8nPbRo8QK87nnCVN6r4vpLLRz4bmWCCyhEQjNHT4uMuRg6ihr5uN3TFzg8KX4QCBxq7N4xEYJfV",
  "key4": "4n7E3V7ZzqXw8kcL4duBUcNsmMpURqrdPAkmADthtNGCGKeZLer2oMXfi2q7RCVGJM5y4qLNjeUXGxNAapE4E1kG",
  "key5": "3dA29gTPW8pMDxqehPEg7a8HALto2tsEr2JJ6uHiu8qEWga3uRmv8XBq272YJNJU1YZQWuBXZVrBUJg2HXF12nEi",
  "key6": "619CNyJWvDYBoHvxC3FEk2MLnM77YmRP7cSsT7x7FooQX5iUZ35V4cRsEL5ZpR1aHcEVzi6p32EijmLsZkkSeKMT",
  "key7": "2sUk8LhiyEGuYSA8Vd7tcAWiL1ALw7YK9WxbGfqoHn6jqZDzQEtfX2bVXouCCE6Qrfd3FCFikEAXtK9JkToWEJ5F",
  "key8": "3UvAE1qDdWUVRuqt2qxsu6GGtdhKktYpEFgtBkdeykKJUMy34tuLsKodm1tyXSHXpQUHsaYRvvHRW1kpNyXYKfTN",
  "key9": "Hj6U1Qk2g4DLvGRtFaNKfkbJ7DYpyLc2LveB5FFqvSjaGqtcZmv9FqavYVfxid1S2CZf4PukRUarF9nnZzwwk1v",
  "key10": "RFkiHB72u3HFsgt91xNLZtbSMuA55uibVvybwnB6f4pWbQqxwqnNFroXYHgmy548EdbupaJ3GQ7NduKMVbKioCe",
  "key11": "5LhLVZhDyx25exy8vQDLZBPD2Lcws4GgDJkfBMDeXMm2RkSXEQFPER6H7gNBiBvF39z6LVZZCBG4K4yo14ZPgzgw",
  "key12": "5urtvTkLdh54d6F3srECp8yvvRFHKYrDLVMyF2evdYegLy1A3rXDDadJgo3qdTDjttNPFa9AV12fZ1r232BzApbH",
  "key13": "4fc6qTVb7bkphDHPXK6XmeRVQxPeqypvR71FSdmLiczwmrqdJEy183QXzVqNfj57scvohyzPaZ5Sc735tjdPnB38",
  "key14": "4Bhq7x9ag7dretev4fvPKkznNmQKWCUZDpZhc8fM9cP9knAEmRQEuoH8NSAgTT7u98r8Pm5yt9yqp1W1LcfCBzN4",
  "key15": "3bM816eUAmqf9M7qpBpKDfuTHRFfCswbNwd5u7U9XgcP9yV3JD12FYBEjiR2aapE4B6SbcBwrCsa9MKBHggWUxYg",
  "key16": "MzoKNLxnGgMEuxs1vLU29jgpK6pZ3PgSkAfGBmEUZxC64KkJJyx1QwpdoBUtrAFCUKFhwLT7vUcPQHHuDWL9FUs",
  "key17": "3nRnbnzrbNKH5u6CQV7oaRz54m5w2achAEA6oSHreby1deqqhkccHxatzJRJJm2kwgEZbjeLCZ7wnKb6nJ17YcQb",
  "key18": "2eQnTQqhacTdBVECYinsSTDyjx2wigYQiPXXugLpFPU2usaDYoA8ShtGb4cKTExzYNw2CiXZcBwrNeYFnyFPuMiX",
  "key19": "5yKDgzCCG5WwXX4AjKtRauEoCnzx8aBinxTZUErpuzrezzx57bLRB5FEoRHeZcpN5hFjmtBo5bReuhjmPnpfgvUx",
  "key20": "56m2QiVLsNaUcgyiCchpJmthH1TkUuAPCB4F2iXxJMJaBHTy4yKgnRMh4RZsCqx8dzYN6KiP7KDVgxsXfwQNdP4w",
  "key21": "4amRSmgqBoepi7asXPZdzgnwZA5k3ZbkmgiUyUzJ7K9B4Hj7aTuen98zfN29NuXYjqUZ5f9fWo65y9CuMpSEWnBH",
  "key22": "3JWpdQdGJMu5sZ3LMDEZV8rvruzsNU3kmqaPe2ku5QBWbRGHNUWWCTvQEQt9vktcqzTuYzTgfeMNWa1P2Ps3k2ox",
  "key23": "4kH73UX4fBiyGxcaPtrsa2E3uaYvssmwMW1bva3adc5D7rMkVt3KpzegYcxYtDU9awNmCotJ5rwGTV4ewixi9xJt",
  "key24": "58VrQFHDyEeCfyDJm1nC9peu91sbLADeybJQJ4QK1mRFhXtMdYpx2X8R5oEPeGAmT84KVScybDdxqB6kseiuwPDp",
  "key25": "4kPZKqjXXgVoBMTVHWkqNmLsFhc6uJfbGYk9ao1boxdEVZQqCqeJf9rVAtAHzekqG7B8YYeVDcbuHG614kJz5B4S",
  "key26": "3dWe2oeJXci5fyTkiiALqMH72jsS9WF8u1Z952o7k7b3hrrmKdsLvbWAo4VAPEACp31vFxY94Brogdbawu573xbh",
  "key27": "2VDcFst4613jsDX9A4jnpfUQCwEPv9ikru161RwLZ9z3Ce2g3dMm5ZuuGzKVgmiEoqKbqjy4KQtLdYbYNdE7yw1D",
  "key28": "3DHLPcPy2JrbP4DiZn1uX9HSdK87JuJ9FmE1DPYLD2ziPPKwMf1DB817PxzWfcPdBLw9MBNw2yQ3jkvhnEV6QvnF",
  "key29": "Za5sG5JdK6GGPrkJPWg6VmVMXch2GveXbBejW9QZR68wnh6D4DJohbcNcEUzaJhwmjAFBJTCp93ARjwLKCHM64Z",
  "key30": "5K1rPHEz52pspM1drsEp3NUygAt8cvfnz6CUXLydbUXHLMkYzUCZ6Ngs51Abky8DWkKFnvzyWfdw8UozwLpw2aFH",
  "key31": "2w4bFKoPksVaFTfbSLTWxVLmfUpfGWNHz7HupYwDTxHVLFCTkHtiJnYifBf5ytDdPsQSReojvfy4ZWN5f8EJ7VjJ",
  "key32": "27VzfLMFngFCrd6N4JNEoAUBr9ajxm826HKniW7YJR8dhU5unCk3bQr3k3Vz4EpAny35zkhnTFTfWvG3oQFv9u79",
  "key33": "2kpGXP3RaHRL7kNdLRNZFkJP27CdSUuhTDEijF4zWB26iSwj4YwdGD4JtCstU7TjeSEvVXWwUxrn1B1aoUMAVeLy"
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
