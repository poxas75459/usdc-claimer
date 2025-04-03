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
    "4jP6VJrnmh6vpzqRxWGwfr1dPvJ24A8ehCGw9yCNiMoPBidDdTqDkB1V2y2c6DwmQtXpEhvvYdEjwncFAZe8zoXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BiuQuSt3uwmYjT46tks4A6urj5B6D24zrVkQj91WHeT4Ae3VtFucPX2uXd3uT7dJ8dgaCu9QTqSyDS4q5oimu9w",
  "key1": "4Yi6TCFsVPx2wCdnbUK7ocfThWgHqCxCoREADCeC2eAEK5zz12qpWXXrivt4YsZTQRoEyDMFm9yh7mnxeXoSPSkB",
  "key2": "J8CA9hQTqFiShTY7tV4mSP3B9jh7UN4J5Dj5K9yW8UD6GzTu4iYLuptR5VfoQiaydXwckHKC54avb5uugwz6iMQ",
  "key3": "xt7j3D9fWrBHGieb2LfJ3CVH5dEw7nHcadDCscgE42hKZ9cyPor1XviH2seY5WY7dWDi9uG8cTQgDCcXnBMxTTE",
  "key4": "2rPdJRNkMx5wrd12qCoTkwBbBsUW9oXppSWGcsKLt8DcKGBZr1GjN5C9FjnPrkTb9JrDduRrFTWDrHADDKpFB9S1",
  "key5": "33aZmhuvJGEBQxAHJEgAsKYhb21qZeQrNhusHvqcfPFBjAw1Xm4vAMhJdGcon3J6vKk64qhuT8nYF1kRzNvGzLVQ",
  "key6": "45QY1rSyuxPiuUXYkqjxoNJw8P6Hxztv4U519cRaxNWCdqLoTy1fxiPT2Du3VP9LAkpPxcWgw7Y2FEuE4KHcZTui",
  "key7": "29UZXktf1q7XNmP4LvTiVrsSxtURkq7gEFmedpwFkgrW8DA6DU4fV6gPPNYdjr2pnoA96z9VQPYGPJGQ7EmV4pur",
  "key8": "42PhtjHjmagzoctveqELgCFgbFpL5KT1DAVNfFM6tAmiG2AbWVi6HpqYsUUJ2mM77ZKcU2U5eL33caW57n9tgYWo",
  "key9": "4jW1TQehz58Ey75MRRkeeN3dmnv3BLhCTT2cX6xS83mbcmGZNyNhhAjgEgGQyjWyYY2gMC7QjZ3iwoFg9pUkBfTM",
  "key10": "4fCExKjuoGiSX94KK2B2Qg6UA9HiDhETJ9jwkW9iNT8MpmVXnk2E4bTnkPsMA2873whxQkqu1Vv2X5UudPwP661B",
  "key11": "qPJeCYJ8xPNGioi6acsx84NT3gvY2enM3JfmgPrksdY7sdkEW4SeAYLK7n5G4ZqTmv9QGQvnbDndns8NKqjrXrR",
  "key12": "611wtjoYMEGVZuxoBGq6YE8VY6pRw3w8BNManYyE1uuQaLN4Bv8wZQ7JnoATqdrZQSWJmmF79c4N6fuDS7VkqDxE",
  "key13": "4a2zRWu1EXfVMoPCoNgf9SDHcAYNjksKz4JoMTYs85pSsrV9xZXSVwMfhJkWR1t3AhUYcZTV9Fbu6qrxf19GMnUK",
  "key14": "25kuSWRDUpGawBcYFh64xkyyPp97i1H9AmgWP3UvqfM95MrcRGu1Ak9oPDtPC4mkEnCMXApoDu3JEtHYr72E3oL2",
  "key15": "3V3Ye1WcG4j2Vj44L99AKB6dN6HHvuyjsGva6BqBJD4SmmhELEJ8H1WXoE9EG7MoVcmF35gWaKmsadexGXmzQU4E",
  "key16": "JUmsVNbZgWuWoThYFz6xNRd9NFQkrqsQyiu41eoCEGxnyRvdBkZjG9iyzXvediNRtRkAEa6aZmxAFJ4bRRYqoqA",
  "key17": "njg6EtJ3KQzQkFvx7173hv4aSHpN4E1kgzTekQiyHfykJn9prnTMi66EWUDZja4TPTfPQWhKxBfCCubYtW5whj8",
  "key18": "668fxY8qYX7GEG2nWDGiFgHG1XU8yCjURWQnSJqjSwGUZfJdhfaVoGSGXitg5KyuA3A6Eef6zhnXhpdCmMzPupoF",
  "key19": "3szHhFpmPRwM6vKRLf2Ecnf6JK2sUYWDUy1pCbnbDXZLTjPzJLA4eBDYroammmKKF7ELnQ9nKEfaZPShs48Aoy3s",
  "key20": "5jA3Xi2LZ2j6Qvw3WZW1mooSnAYszMgBvXrQTJ7KNRTmzpUZM7UrR7HWqaeUerAeShPjJZ1kE7fmWYjEyJLFp4TK",
  "key21": "5gowowbSkfC8RVayz2Fa1joh2qrhk7DmpyYYMksnAsWWi7SYQQoxB3YAdYu8KtotZ42eteNWRmxB15CQfuoxifdN",
  "key22": "24SGq78YiuyXgBc954mpfAJKzhax5fkzvvEVCnaps4LQS9jGwG1pjfQt8vCjPWHAdq7NAdE4ctxTCXSV18sDcwQK",
  "key23": "2GdHaTUUPLdWeU73xiH6iLHeQULtC4qFqJvp2AcxWJ1SzDNKfmxHtJS16sTuB5sMzY5mKhMFKhQYLqwSR6MfqYLs",
  "key24": "5kTTMMosR42BcpnDgoam8Ce3oz71XLLjsXHFYHf6v7A56ASBWvRy7yqYMV5ofm9iGujzLBKq8QLVDm7JNJUC2LJ1",
  "key25": "cBGWe2sMA5WqMKWDgUDj5Rnj6WekgzrQjL63sjghyxLNuLNBWsqgvrgWdzuMCExkkkoLVbE36cjKy1tSetRDpmr",
  "key26": "48eaX3auTJiiuhFJ3juDEZjvZE169pgfALYLx9HWpXQPsVuwmuCunuFW9BRMBUaJUkqfTJ8paricbfvsze9UCE9f",
  "key27": "3MU3yapfqLH27E3iv97ziQJgn1dYMNRRiE8imdLhTte3VMVBxqfxWpbfqJtn89T4wujpRYGhcB1xKon32QrVcwRG",
  "key28": "4uybvnN2cqtbhBKRncaCQjNXZki5z9FG48hZHC6dmPLbLFBweU39sAbMuWBwEcyDuXfxBXCq4zdqg1mjK5Un7BJh",
  "key29": "215tiKpD6fjPMssRxVcjnL5ydu5UTKJJ2H3pt6soNU1HVHZsYZKMHVwPVrUuoaZM4ksoPqkFo45LHt4FGy7m4SB7",
  "key30": "2n1o88tAj8XLRXgMzBA541GJcUxMzZKGjmacd6VRE2VZTiLHArSDe29gBA9RaJgbjT64WQheDmQyCLFVNDkPXWsJ",
  "key31": "3PHtb6Py8JK6hrwDVa3ZyrxxBUkEs6rj4qoViFHQXhL8xKL6y7vfAoguNkb5dpitqHASRnRG3aYq9uDm23US7hw1",
  "key32": "3TVAaS7nWqBozz1TzvABHL8pijzx45aretXnhprg18BCRiGVNAuidJubern7faVWQBkSLPx8Njp7iVuspntyEYV6",
  "key33": "7DNS1MiwiLnTPWrvUsBzE7AteGw3HHeJtndbrW1H1n6V9pFAvoA99ZdxBmuD1N4g57abjTrcPEZtoWPqdJsKYCN",
  "key34": "3FJB8jGE3bUvoqAVfnJeMopeqa5D7H8aPS2f8TWTbztdhwgC88feQcfSVRojueL8zxN114Yn3advxxpjzRiEd9qu"
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
