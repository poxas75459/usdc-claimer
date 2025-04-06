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
    "2fLz7prijsCGJUDcBygb1zUfbXEN7QGKVW8R2wtefVLKgTLdETJgXjtZcPDonqNaHhCJAQNG87RqqdQqwCMXBGh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v53hFLr3Sx1hPbSX7UEezqiXQ4EgByX4EssvkqrHGQvXHzNvPNitLqTQrX5Gihk5Q47CKseuRYkcmaRvH5TkNgZ",
  "key1": "3iBnMU8yuCTnFY3nFCQfoKanpet4SmRd8RMxQ9dVNCK5ytDcKK4fgEoTm7hPdmYLdbwpN6QeL535MftGoNhC4Tdd",
  "key2": "3fN82PGLvsj6xYqtp9QKfAePDkwLCzUg2mrBAtgWudHeiBpLcYm9hhFwMv6RqHqcGY858aoxQxWHcRtfbcc62CWT",
  "key3": "T2fTZQZHP38b2vvevYL6KadvXNgjh2HrQKRaGQZVtNiMsC3NqDNwVzBqTxMjsMUKZLePVqQai6nRCMmdpksHHHA",
  "key4": "46wxjrGfSCaUQtTKoUtuCcqYEXjsebP4zYHPkDExcpYbDabtDWUUGi4Pccr8hdpiHw9C31XBfRbp6qnEb6QRbFD1",
  "key5": "2QiHCQ9UcujnHm4FnYZbDzKvzuRjLjobzcvAyPUFa8d6ctGiSFnGBbiNHWAQZUaZrSEJxzJp7odg4kbSYxP7m9h2",
  "key6": "3MoapuuFfrXmTjm2bBQz2XXpVKoJbMMgerw5yRpaL5Wh8uxq54ZmmBVnejyeujudeJV9pvdh66TvkKXyq1w3F7Gf",
  "key7": "3ivRRCbkYF27h9RbXuAiwf4LaQVgiv3DhKpn2ooofzSo21z4sARmgQZcKbKacg4KoTp22jGQefPtpFfLDB4SGPQS",
  "key8": "2TDebEpfLbNGgSN51Bpyxem1F37kf3rxLc9AqqrvvrkBxDUrWwrjunHeLEqh6AGiC8q866kPpNZRHfYi1sTw8RkA",
  "key9": "oLUR1EGVhZgf3dsM2k1pCtt8MJx36Km2GeiygpRorQKCQgmjgpEkxSR2C6sYawsAvPdKxMM9imWyFCQGFDte4Z4",
  "key10": "4eL3C9wnA8ZfFRN4PbYNSo17XTwo6dfRzae3vS38SjPLNN8H3hrYYCyxPhCr41pmqThmeUQvBQJd4sgjr78ViZPX",
  "key11": "22dyM2JLaWRFvB4Jiht274e71FRtmFpguM8mSRMw4D6ubburySy9gUEK6xMLfbUNNp8xtkFhQkr9j714jHwunVCv",
  "key12": "5MnJWUW4pvMkNWhoFmh2o4vNKUdznVus7SrwMGnLAHvzc1uF3Jq1sZPvSy3gm7FmxoKBnXNyFd6oiaZmrVSn4RGm",
  "key13": "5VA4CzRGcLmrZcTnvDY7FdM9VPQH6mZergMiU8KAjyAbZyXfsm36mB3HpjA2tN4gzeEmCEXE7reozHJduQEiTeEM",
  "key14": "39hqNU6N8yVEKhkMnvmZJuoAJZCTCWbqCTRbVzDoxvgiWuLDB3YgNq7Ct5Tk83ak1JtW2QP1VsTDNqsbMiwdafXU",
  "key15": "2dDJ8fVL9zuZzqLcBhNmfUPwUDzeAY2M1xb4NnKotpYuy3H2hWvSwS4hmbZZ1swbXzrL9C1i6o5RdwoJbT2djWyz",
  "key16": "wu9eouEnUp7cnP8g1GRGW8eSDPwi72VdoSf92XsKiduhnq3y3FUrgRX79GQa2Mh1pDcYtpMyfGs8br7HMRtnvP5",
  "key17": "3ACn9vhY9QFhnJeStp4vgAepcUk9j4UdwxkqLWQCzPT4bwcWNg6BTZpdwsFeLrSPsqMnJE51QScmFaPVVCA6Do6A",
  "key18": "577hcHyBEh2KkxP4DxFkt5HwoyqmHtYyPBzXKyreNC95k6bze5Jba6A4i1uLNeDxRdfVF6WrfWrxCPBvF77AYBro",
  "key19": "eGDwn9Se8EUkUouzmreYAnMoTdtFbx9MGpEZxwdyF5AdZfNwqE1sqPC7kMQSHVvFUZwGdYxfx4XsRyypr6zrRX3",
  "key20": "61PCgZspJw5SDE4kdVHKPcFUuwkS9n4rNJmJa9ckiVwzQ695wbq2q8k6oLwncoTgtP84juezauFFgfpimjLgwCbG",
  "key21": "5cEKCLPjvAUyeiXab4yZvGcPJZfB1zNcKeRpz3kZyCJD3Lj5d1dfQzuuJRxrXscbDrhWQsvGfRBY7e6Z7XCFUyAA",
  "key22": "2jaaYkdrLzPvZYVmyv1Z3YExHt8if9SW1fYHox3ggPFe7yPcMJoyAcm6AwUXPfCw1aa1SPyNVsRsyiz45ULgj96L",
  "key23": "33esTYCvn4uLoAFLxVDBn8HoG3j2HV5T4Gk616nqugftWeS3SZiA4c4uSGz46K3scWXravGXRxsHVK2LPB4ii2fs",
  "key24": "5GYGrjqyqiKW5yFhpsz6rFA75tDCjYPXKQwVqeSK1e797Nu7Yhie8gfCcWz4vpZ8kqrzVPuS9MrR8KgjkwpR7V5N",
  "key25": "4eLLkVuXu8BkxMRbJmj3DHU4B5hnaErGcE4BFrKYHNSgKvGQi8UBcbhHJMDjkxMJ2Jx3yVjga7v6BnWfxH6VBNXD",
  "key26": "2hJD2CyrxMY7LAmBLvhuMacRFpXM9WEHZYkPMxSouzNgMCjezJ8EfR5c12zW9fyCWWus3aEHqCQqApU7TQBXqnSc",
  "key27": "EBvBX6AZX84aFGQYamub4n3M7yaGoMS4iV67MYEScYGhwyWW5FN5EGLGk2aSxBZJW1bwDLJRQR6WDpczZp76TjD",
  "key28": "3mu7spWHQap9LorrjYKMt7E7vw9mAEVCC79rhbqK9pt4RxhHFzY2iJjsGKaLfDMx4ziBExc2zKFZJKYHwrvEfwgQ",
  "key29": "3kNHm6hzNjqNPjk7bX6hXN6o4xBxF5HpMcwxGqrojSpmCjcohCaPGnu9YnKkKDyNVAvq21fYWMiYpcCtpeNdPrJM",
  "key30": "4r9PFdJPyV2mh3bkMyg2UkFX1da7wKtDPa63GKHScHPgymQmAZE3EnyHKtBuW1g1xaKsNoyeP9XcAwfLybmvqbMW",
  "key31": "5F6TqUMKX22rN4AN3PLwFY1KNz4EUPbcFJpkEM2bvrSz847srraart5mS38JvjDsZzLZgbfLqQ7HRNppUH4oAR4r",
  "key32": "2G5ZTeLMcRbhnSm8miwitN7kXj8aBWfDZkXuVcZrm6HoS9ugzmqMkSLLXoMHggZVE1KMfCQNAWAU1ghjtN5a3Giw",
  "key33": "kgiravfDG7zH7HduTQ8cCFDPTEDuG83NoGgJL9Q1aDwZzEev5dBCTwDStFGnzHdESBHVWQ9M9NkWFd4h53bEFez",
  "key34": "LYAGM6Dv34d2A8YxgkQi8tND5bUb1Ywd6p7NNnbDyVhPhH7t1QsoWGD4SU2p1aPTezF8VaQvrSWjQsakvCp4amo",
  "key35": "5EvtWpVRDfGd3bqkxpqb2USgEcFRXVk9xiSRnKNogEuZmhjP7vysAhFr3xxZeHaJ7UGCx7tUP8trVYXFNEZAfL8S",
  "key36": "5nby9pEGxukEdKnzchRRAQtPjzXRZCkKaK3M8Zv6GV2u1kY4njSMdKNCsSMHQ8un7RSyp86Ltt5yumea7iC67ZpZ"
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
