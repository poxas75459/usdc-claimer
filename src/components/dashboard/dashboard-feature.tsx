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
    "4PyaY9MbUm7TQspX9haF9dvaXYa6u8MsWsxTKkdtJ8n1tUKyYuwVr1qu1t6qWqpvxg444N9SA7XNf56VdWLrsfiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1GJhgTxjS4RmDs67FFrqDEF2xnfWLZcGezwBbHcAN7gGkquQqhWinDGbEcYqz1yVedwm5bF2hXDeoWDjodyNnxz",
  "key1": "xdCpQ5pYiEX2JasHE18BJa32CADvgwBnzCL6ksca4WNCj7SakggusinUMTWBVRBDnm5jALLy2nhU9Af8VyNXFkH",
  "key2": "2z9m232UrQrC79QwWAU6BwYN8DGmtkmrMDKNW8j4qSVsBkM5YvDjPeNZoiAJ9ELBqAsw9ghVy8vNwei9HTsVFahL",
  "key3": "2sBBRGnMRNwXZUhZDQKQnsQin9rJcGbzgh8wJ1Ssz4LauSvLfLuitnjSVHSsszpDbLwqFcctKAhbCYKhHMV3hKwg",
  "key4": "J5eBLYFvEYSmUnkJqhww7Q8y5Z7zxwpguLYVCG3oMZdZT5hPdDmDaekk3A6M9wx3tPySVrCHFT3iDUbFovYjaSk",
  "key5": "2j31GZamQQuR4GpEjtxmM42TVwtqkugvUEhjDiR226puJo4AYQHkvsvWATKpru1DMt4khWwq9qPmjnaUcALRTKwA",
  "key6": "o524vrB2dwXRWwwssXnJCicDk3D3gpWYeEtRQmXgSrwi28SNgsBsGcJ8whoF92yG4TwCFgCPL3Xhn5s7XMcfwB1",
  "key7": "U7MmbtoDwivmCi54aP7KUycvy2Xau3ZcqBUF8NT5hrzH71azV5dMTjJfG1PQUnvgDXDtApyiMkX9HqiP4GibtkP",
  "key8": "4N79hCh6Y48ST6b5deCbvRf543KvQh4zu6gPAWZeYznZtt2w7e5dHdGaGaeZChrU4uAaH7oS9EZzSYQe6dkQiHTf",
  "key9": "guA6ZwWipPotnhBxzeLqHWrpofKNv9RhrqgKezh3NvbG1NQPGwo2tnW2sJ7Ss5KWnt5abayDp7BLwC5ZJzXkKyV",
  "key10": "55JfsPwrmqXRJ6UKFRRkSETC6L3C9rVg21UF3U7hGZXCKS3YHHYgxyJBbNy8hQzhAdd3iHXzgxpt4fwSsrXwAf3D",
  "key11": "28H1ZG9QQUHdxNMyTBYi2opLovBBiwHanp8g3qr6jiqkhw7YjYjfYs2dDZiR1aqGuyrdLzVPHQk9yXSAH5igp3q4",
  "key12": "msW268hA3vVKnfpET3AWcYkJzLkCuQ1JKw5tchu9n7GXMHe4DsLm5RqgtGNye7vjtGvb8PyLWrCJZJKpBvCz5MK",
  "key13": "43w22naPJcN738yXg55cj1k68xazFFadjsoySE9PCiTiDgyiTEojxqBkcWmKT21F1xfJ2QMJqwnMm17Df9CErrYM",
  "key14": "adY61sa6Tow6wxUoq1aASHLxCzWG6eGBF73E5k5YnY796USZWk477EhuA3K1qhmzwbuuD4uMvTLk1Jsu3LR1cfX",
  "key15": "5LW8282cuZqChReeypbSRfi7JdaHVYqxEkwVeiTGWAUXTF4vVddS955CqbVnuPaaQPQ2nh7EMoKoaBbvYjZvKVw1",
  "key16": "E9morXBLyvtHwLtwYztEXUCyUsb3RbjAAVfKHv1MLWZG8EyZexmEth9GNxVL2VcssevmdJALHGmgdmut8zW6U8Z",
  "key17": "4FY1z926UQvn2nLQXhHeC8Mj4HVuyEJ9iB946dZBfdkPodrpanwUQBB9Yq3BDjwYM6RHtT3vh8LDEiFpB7kMYFdn",
  "key18": "5pzxRPpk2kKsgWLBswrzo4Av4bafTXBsjevhG4y1GQYbny2x1sR21N7BsdK6T8wavw1yquUuMewXuwpdrSoBVK9E",
  "key19": "2Za2VVaXCtHnDnHK93cWWBoHmAoJ4P9GYqLf6pc8JHQChz1dBWw65SxSaNfEAdq71rgjcqrTFntfV5VfEu6qcTNB",
  "key20": "5B5of2BPkZMWm4ans18pEuiX4Yzghz6WD6RGsnLisVMP3d8qpKtdd6JEjiG5ozMWgXxYfKZ37zomgy9d15dxtyCP",
  "key21": "2QbyQdXpg6WM8zWzD1tbdGqYLaUiPDJCwbnEVMsXXgmfrDzMuTixk97VE1D4naxoJtTGwpR5eAAhzv4KDqfasBUJ",
  "key22": "2BngCiUvKGMkNpGYu5uzqm9fM6DJXmuyg8bZ5mbU6aYD2N9BofxwMf8vDFhKEAbAwSf4Bbuv26umTkkEUbrwcQPz",
  "key23": "5zQHLfteufBV2zxtAiuzpJXcE1Ckm3JdtNaQx7ETxKRhfY9PttyKhDGMWm2UKCCmeVyqTJWhBcAfVB7mgtK1GKyu",
  "key24": "59b4ZzHyUCVykqnuCrCjHBPTYLvK5oKehc27JMybPaAsr1Cccb2BEBv41mPtcFHUJnRYdymLkz8TXLbdTfQsGMeh"
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
