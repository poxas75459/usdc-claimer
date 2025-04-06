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
    "hn4epDcyb7xNvDJ9m1uSJ3WUcU7X47fv9YSD9gXTdgvfSjNzad2KFFugooEqaSB7bgvyJ6uXkEgTJQRBuVwtP76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ng9VryXQLMKyjxiC2bEb6hzUN5pDGrUMdRNuw6U7iK3ZSijhZQc25xvzdHpgXBdPrbnkTfqMo39M7UubnpU2QsB",
  "key1": "3GoA2xsR3JfMWb3xwixw1pBhUEi9GCL5TeREk1BKsRudpj7fqU7S5dAfMcCFZCK9gNtQvRadRLS4eEN3oD7nCAdT",
  "key2": "3dCoM9G2WjGQMLrqUbFXAfbhQdL3EBw8NzEqS1uwJp6xGXtxz7jx3tWsRpkjzpGGNJ63zw3UC4CGYcLC5K3V6S1c",
  "key3": "275WLmqfjxp6wU1e31Tc2rJdXSxScPu87jX9T2pKSTjzLkJKN7WsPDc7hUt7yd2PBrnBgvRMbk5S1Mp3m2WNNAtb",
  "key4": "2Pm1fSyt3ApdqLK6TT3Kxzj1G8scHh6TXxwiveNp3exVjNFhniezKMSg95Y1ykFtq6niZ2XgxeAmcC8q7wWiM9CU",
  "key5": "2wvC5hvfmjd2QQhZjh9NmLvsdc1dKLj8RTCqaCDrRLBoGjZ87r2gmx5nGs1kDCkg2BtadHECd5oRv8n2H5gD3jQC",
  "key6": "3UC3FujcRmDAszWVygcRZNYXjwV3jSotAXdSfSr9ZRbhGsdyZbAUR9X83VSxwd8RzSLd7AoaQdqcLXyWzjQHnMmt",
  "key7": "6vreU8bvDfZamR2g9mAGx1tawSzRZBjrx3emAjm6mtf2DDAY3Cpcg9oGi7XNo1ASKgDbtZNRvy12tQoFZGujRat",
  "key8": "4ZgE6KRsbZNCd7YeBj3jCKzzEXpwxyiSk2zoJtvQK6ypyNHQgbASy351TnqiUBA1Sa4Y9tuAjbGPwzZPH5JPXSU1",
  "key9": "67hx6opC4HVPhf7mXycjFuh9vKCXqcch2f6uoCJmz3wjxzr6rd1BNELHLH3wzxjRWPTX35AgQhvZLB63fkvddSTy",
  "key10": "3c8DcFAktcPfBpsTUkXserPybH2UvCGXHfd3BptV4xEfnk7QrVwPhSMckb3oPngYANN9kVMhXkyMXwe91kxq8uAP",
  "key11": "4bjaVZkjGAQP88J54p2ZpBwWqAuUSDbJoTY1YC6SjST7mPHrmFLJCHVcZTWun51B1NCt36WiJCVN4MWQERiszGwP",
  "key12": "4uHYLX6U9GAywFo1N9LZgtmf48H1CwNsqxGK3c6krLy8rCKVMh3tgg84Vvxb9xVDUUYVW8Kwzb5KUFMCDjWBjEVa",
  "key13": "2YR38J2weGpuj5z9pTR2mG8JyXmJyJTjboqVNv9ifW32PAc2b9W3iR6q7FpBM52DyzmUMe3ThutpV5RfTbcsDrUq",
  "key14": "2soRZKkBMibHFXC6TFYShLwUZNtA35gjL2RHbYRquyZSxV61XgQeRvSVLaoyGMLMN4EQMeeVjZozeqzQVC2KBMZi",
  "key15": "5nEY9UVJmX1zEZNSSxyQdJCSmNrQTAAqTZ59ssNkTvgedJ2yMv8SVxtKtSXdvsJiDdPhMqYmJmcPcrf89uouxcxY",
  "key16": "38z8QZsV8jKhdPJ1Las4zgnHeYQNzeF5E2NEfdHhxDZxsWsTKfxXVpQeMX3exGMNk9QjRkugx25Hr1km3e8jfz3T",
  "key17": "2GY4eLP481LHmEfC1KoDYSGjqLrkLho7DNaLuWYJWu8d3nbaVuQM6Lpfbktm9u81dnG5K8GnwGHEVZH64b5FQGVg",
  "key18": "HoHBphDMTL1sUad9DTAuAtrh7hkqSMxzHKgbP7aq8CGNBMJXoYy12Yku4vQ19xeEJpYyGPHWVivMuobAj9MBomr",
  "key19": "55UsiJ7DXeCVFJLPNAB6H97yvxtc2R5FXXvmNoW7daaah3iU7QJH5PNbrCk5wpfUEhdNP8CY6Yb1unv2VX8pk2r7",
  "key20": "5SRvYopoM3jJJA2hSMFfyKvEXzCo1vfqFLQdzpuxoCr1AQeLj9Sp1aiw3BCjFiHmCGKHLmEtnnKHcL1XCeVzFv1k",
  "key21": "2sQ4mvSf3z9KhyN44MMgKEu7MK4Mkzvf4ttgW1AyD31hH86ofAr7q1kqyGL4TnvwdXp1sBaJj87fyA1smywFAsWc",
  "key22": "2sohAiQq7KLKCY6hXMSNDwbGFX2i3VEj1rptsw71pXnNKWtStrtxhQoy3LU6xjKQs4PbbLGRxgZVh8VBdD1kQGvX",
  "key23": "5VVurpdsGmHu8gn1DmiCuajN8fZ3WoCLKh95bFZMwgWEoNAhJm9wu5LF6w3YiAKcoczhnfG8BqQv55M6vmMREpvM",
  "key24": "2P4RwKynJf4Pk7LaFGavHXnkLaHQCvEJFFUgijAUNfAxmXMtzHkrNCo3rEC8tSoSb3gioGNjHrJqTfTTvtPk3vfa",
  "key25": "4eE6RKtHxDbYVcupjdJJDc4c2sfgB2rYdB7DJJDS2Jzqqi7aVXASWQeRbcr5WLGyR6CT85qNra81WMpJs1xBQ37u",
  "key26": "34tiu5CBmEHVsfCrMjL66y2Dp3xv7wBHkFUDU12ZS1VcYm5SJ9aZtMPpFZ1saBjyXFrLmtQM2MecsnRw7qXCPWTi",
  "key27": "58EnTMsesokjZ518J9rZsgDUvHafmXz3v3UrdSvJMU9SjyeF3mcawyUkZRCx74tL7Di6GfacGyTmJGQVbz2kDX4h",
  "key28": "5b1ZhVX3ihN31ie3m6Rx5JaWvWprNiUECZiKC7Ji6y3C4hZFHkyubVdSMjAaG892hPmEN7eNUddhDbfQQYJvifhr",
  "key29": "wohe7VbJyeccDXpoDbZYaPq6skP9EotB7VaLvHpE6Ep7L4PtY4sFs2stF9YeETA8EhrHJ8vQyNMNSzFxfFEft2H",
  "key30": "3dfw1KD6WmRUc89Qucekesa8YiPddt8LCLVgJWJQvQDFsuebAwxJF43Z3EG8JGLKHrzDfrG387LKsEekM4Sq4VzX"
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
