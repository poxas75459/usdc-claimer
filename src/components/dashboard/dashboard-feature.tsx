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
    "3fMJA7igSfihHaUFtauWLZbbzyVbkRs3LibPGA7pNg3hXvUgz34rXBUsnAf8vqX1Ez6XpsnsstrGFnWkUygwwmni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qbA43F8cUu89TxmmBFfk6aqeQ6RZuN6jKsdgqczRBmEZq6arufTvMAWndDpBj8PyhSH12xyT8PpHvTWYFKC2Jg",
  "key1": "2TZ2MwYKfYD1EF36qLFKf8994BLbWW3L5cMNA8G6wxAVsTwRq94k7DxpWkWFUSPpcJVLaVX4xiPP8MBMGRv2xgJP",
  "key2": "5278E2k5qJR1LMi9CLzRTdjD1Bm6ceY26xMAWTgytWvKUwfQuwnib1V5eJAYdqTxVc53s8xZAaiXiZt7fyYKFScY",
  "key3": "3vYc4gWC9HCdGgBd6W1YbAdkeXHdcsU3maQU7j9wPKmnFebgSJdJZmZ7aurbKh8rVvoeQZsvPxFNMo4A5HbJWrYK",
  "key4": "xLmau9yZtxjCD3aux1VGyDSEQTmKvi4SGH5L8FfcfVYHi4wsDrUDqi58uhHBpXpfvpKhkibEMh2BYFVKnb6w9Uk",
  "key5": "4LxBVu1Nj5RiMxfYZRoYirEQ9RAPz7BfxX5Xgb6m47KW5PcgXG3dRJRhQf67Xuc5waNbDh397M4XynYnorckyjax",
  "key6": "469FFaxnCPVogsa8aUTmGXSbZA2By3TxFxfURiTKeBwjgxFGzANpsVWbfP8r4PvbNiBNmYpRXbQmuDvWvKziSyhs",
  "key7": "4CbjRnw4XW3wq7FkU9MjqFcVTj9MpPP2tfbBsc2BrSUGiBa3bXdnFj74BdK1bRCuBYYH5V9cf7ZfvkEDQuc74Q75",
  "key8": "5wJTvDcAxVEg8MnjtSDrHtz7EUJxxLzzrb2N4G3cYdh1jWkmJDvx2cnAYrYYiJpovUXYayRaAG5Uw6s7heRCtpYc",
  "key9": "5j2fzdKsZK9Gp24WpZugnZCNC9uxQrDH4DNcerkmVEAnomuh6ynQGUe4drd5we7HCHoY1ZKUqjAsL8tjTLA9xYB5",
  "key10": "4i6aJyGrBtRdktEpJvnABxSropmdAq6ADmZcQo3GBpFc4nDG59xW5neAmTW23T1dkPbG1rxMvieDpjQv6qKsAPkJ",
  "key11": "4da3nL7crKoNvPHJarCqgr4pwqrGJnevHqwBZy4qpVhTaJsrArbeuJr5VDG5xTessG1SzhYAhMe7Dvyf377U8eVE",
  "key12": "4TMU4vARDEuUTt1Ctt3LcyfhRstN8KDj21yQPgKtyBQ1SHFTsC86zBkG3MJyitBmVkG78UFD4g9WCSNdWad8RPq",
  "key13": "3tCtAqJrMsFLrTApjaN2yKtiU5Hrb13ft6NkkQTK3RxGEoCcFRwTsP63NLwXYweSCnshx7odz8AdatE2iTwsCGn5",
  "key14": "4S6EryNUAcPHvp5bj7WNNp5eBYUm1RXDc9RVSM1RCyFUeDRaXmGD5GX5Yw6jQXx79Ymkzr7guFYyVQf8LnfSDTwG",
  "key15": "5JwgU7CRfosHbsuAWJQpkgkEXvp28wwskBZi1yhKsxHvnCa6hgVPen3HpH8bumB3qiAmHr3faGpKPwjQsoSMqqL5",
  "key16": "2juN6SLg7Cea1t7AB3EisSmNc7X4eRBJTA6Z61Dq3yaP9DbEopgMywoMmVHXtN79oMmehC5LrEZLxtzjEdaER2gE",
  "key17": "m4mrty2Sr2EQbV4nKWT4qDRocPR3ru9m5nkZJh7agERKLg38zVQe9XmY5CnYzAwjH8HNyAfLimFX9QKu1gA2TCb",
  "key18": "3mdXwKYCd5QmHPVHCSE3FiGhqwgxfPVvRz3PTyktaPqRYBEppcQY2Bp1ZKWx4eJFZH8M6KCqPTpyA6m7qunP2xAD",
  "key19": "2ZUPVjhVv1qzAX5QY7jZu3UksEmWRWzwwEnYC5hBus4r96QjsRGt2eJPAU4RBiEU4nxywuopJiqREtkXXZNS2SAz",
  "key20": "2JjNaXjWZq5VvumTvEVmm3btMMYshUsTMfic62Y94smJZdkcS8C4cYPWCcesCF4tD5CmY9SQX8PQ6Xcr9nUVGpuW",
  "key21": "2QsXq63SPuHbA74dm3peR9FTgNyFB7b1MiYchda6MJSGxES7XXbXsr84ppmzZvuQXJVfs6eRP7xQxitp15te3p3g",
  "key22": "akB1T4zv1RLixq3P3HbnbBHeEomF3TT6jmQyk4mS5Cd8z8hXFkQ9KWqZ4WB3jG79Y9gPiT4aUDnPWSmr97mQ3cH",
  "key23": "2zJgXomAbi8xZUhvWfbbT2Djk6ZZPx9PCbuzxfzu8gFbJwBNSA67yFXzA1Tdjs2JF3moUqxWR7NRTKgaPc8iW1mr",
  "key24": "5Ttsc7wqSSygLCuDwFmq9m85c8F5sz7qvQc3qTVgCpjUH3eqKeW36nbXsrYitbgv2GypVjU9GYcVsb8cdv2QhuLL",
  "key25": "2zXXjzuCC1K5qjXcCy1QFKBUPsYScKG9CvrouzQs4MNDCHYsyJMLM9Q1i6Qkp773mg8NiER9MKxELTYXreTL9wu4",
  "key26": "4dJtsdT2wbgcsQ7Jjk31BPySiwoPHxFTb1DRdzbox1qcW2E5nXvaYNzATQWjiWNBKxoQkUwFZKjSPtR5BYy7Crzr"
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
