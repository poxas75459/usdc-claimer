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
    "36M96K4EUjRAREA6pEGXwWjfSW43Tjy4fno8Epihoj5nE9GcQth9RAjjavpsntkpmQEQQArQoohx83ErcJx1cP4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HkXjZY1DxXao5Y3rXdrd2yh9ipax9V8PXFJCU4QnVvSmRYuGbFS3oKnGdXVJE4ZrLEVrFcPCCQeBf6L9HSZACjM",
  "key1": "3xbKF51LRBWD3RUgELUQ33zFdNfmzfut2Jc221Fx65uVRggXQHr5M2dNn2D5FEde67G1kZ5fXimjAdro6huLF7yb",
  "key2": "5weeNPUHPT1nj6FYuBMQ33DXAoJaYe33icAN4W49xLwHrCPi4ygLtiYC3ZHqv5m4SntjPG9eYGoiksYzTqwEP2SX",
  "key3": "4DFYtQmcszzV5oMHAshs4QFF2xKH857FuViCNgVPm25YowvjpzuJeh3eBqy88KAy3qxEJ6PxUBLN2JrhoGiSMQtv",
  "key4": "4QupLQcBjUJEYXp4EbntTfaUFpRYWJDTTUjb6J5JXAAN5WtyTRb3btBQtzV8eVaiWmYtGrLv4KbBm2mK9sZtJ87J",
  "key5": "4nHAo3yoiRbpavTde8PLS7oe4uFfTNk8vjcPX9EBmk2f8JcHsYtkD8wF3twTfA3CM8GHMRTjhxnzx7xHdBVTVSZk",
  "key6": "4ykYbVhZMtwppVNfAMr5qa45fK6owiaizNRYRHqrQeU2PDBdwZyK9qMsLxfccqZu9o4mW6kU28Prnemym1PGZkCS",
  "key7": "4xjfpaHaCafJnFGNj67q5i2RANMMAUy9dARJnJi8jJh1fGFsuGhwyzmDjoFULK2eArQ61kiDuUx566YGwi371UWM",
  "key8": "RbtCAY6FjBYcG3wD3fvhtp2wxVsDkdDDiBd64ZwNomBPHRgxYhx8YVbKP9hchDpKYGPRqiFEqTkGqMDf2Lu1arn",
  "key9": "4ZiWhTMA2wuJnPU3A1UrFaS5cG6A9opQ7ve6UCxHzGyx8xWY2TCWb5XA1nkcytgJ9Lhp7CgWC7jxyonfGLVUXYQ7",
  "key10": "58o3HR9nq7tCwGmowGugVYDJiWGaSmU9eHV6RwkewqwfbDZFmBMYVHiPGaYCCSELftSUDM3JAncZF4TDS4qfR1Cm",
  "key11": "jg2qhxJgm6KjLwdU1xCfZDLoW1C7aEz9G2UYEbkYqRNmaAy5BWGWmq6KWCsSGc5dynFvRPaP9PJU7awcVtrrMRu",
  "key12": "3nqbeexmHeorsiesqqxChh1z1VQbxqAUxzqS1rTP5ARu1PXcc1XPYRVHpHreaeb2jYqnvs1CU8VuJnJNGJP2BeTa",
  "key13": "4W5bhRkXHDF1JoSk9jZxfPBtsFz9B4vZ89YpVsCNopnUp9fk2iDTa5u8rFw7TfRRHsrRaeCQtmo3wvuWZYTUJzQP",
  "key14": "2MupVUZnyJzm6TwiTcMkayT6DTCDKXQCZkusi3MWLUF2tcgAurLd5ssLEg6v5gcu5S8NLfhuz5oKgnQNvwbvF9N5",
  "key15": "2c9ggzXmzXYBzDHxWTTWRv7CV8Yiv6gbSjnPg2L6VEQZe7tXzGQboSm8Tz67q3PgD7SPezXuJEzYUvRS9nDM8UiY",
  "key16": "67i3gWYWNDLbLcsnhFW3WSc4gCKkJUNH7UWTdpJmdsNcZePViXugQjsL7ogUntXjZDgknYHHBJbn7pteeFoN5ZrX",
  "key17": "5KRKNAPdMU4x736gvEtr3ccrQPxYKd1PJsYmVr954owxc9PNniNebWgp7KetQbQVB3pyckczRNyxMtLL4bKvsebh",
  "key18": "4fSM7P4qpj3SqTgcDgTNBR5NV3xb7cfKBL4QKxitZvm9SeCrHRsG4jGxVghbcc43wRAswmXaXMccnGMkm3qxDfSa",
  "key19": "5b5up3MJbZFegjMzK28Xew5kHzzHqz64ns44piszTLfbGfQ2WSFaeSQxZzPVqP6t32uLnK1fbJSa3K4QbB4k6Lvs",
  "key20": "3s7FvxKBRuTWUcpwTdPZ3np8ZbQyAg9QfpPgtvMGHE4yK9LTETNLfQipwrUiGajmi7mBFk9fn5vEw1RF28fHRCJj",
  "key21": "5Rcf7bCKQjtfpLSefgSFATEoco1Raw46ERpZ4hijPek94ZgZVdF3Xrr6dyDvXP97zVKSKY4VNwaGHZNDD8BnjqaL",
  "key22": "3gVtsrLj5qn4yXrdp1ugBdhFNuB98qjRridLC4PnhZyUtnRX6gJenvZpHcpWLDBKkMutCer4Uw2MQqcJitQM69xv",
  "key23": "4v4V37Cs1jQUShvpbQzuNjiYQTQBSPt734TSuGsjzuzDx6pKftmp1esx9jf3UWW2LoyrAmV79VX8yBpp8tG4Cg2u",
  "key24": "5GKnck4VFjhYUZmGRpSj5ee9ysjjiy67Jf39zqsaHfmHmBLCVVtYaWnFjyCC1MtHZbxDi9HPnt27mFLg3tDkw4w2",
  "key25": "62TvwtLFZ5944NMM9imXsyWLnFyNLSyhahHV8N8u19AUEjPVDXQqPNSzTbkUw4rKSG4p5pb1fGV5FVuN3wfGdYKL",
  "key26": "3P9Ppx93uKYB7DxH489k24dEtc59LYxfdy2SH6Zqj2DMhUot4JFGp9oEUzp762CMPThmCfqGkuJ6zXbzGf2UonBM",
  "key27": "4amq7HNDLTB14zePaKkNKVnHWLsKyHoR17MzSHaStZ9YVQ6NghPbVSzoQjWj9g5jqU77czuz8vfn5ALfPd7zAxpw",
  "key28": "2oB5ukAqE2SptZTVLgbtzAGC23gKUnLybWvm2Hxe3MHMSgeq4bXaVEYTXzwFygJsPEfBQfBckCTMJDVq7nTvyUXz",
  "key29": "3hX4pLnSvqeTCJWTWnvvardpsjEa4er1q2oeFcwAKCWBGBQSWDqqjo44w2Mhd5uituLhv1ftt2e4DSstgRQh62YG",
  "key30": "5RHkE9xxjUPawjWKzcfRVL3LPUySK8EgABy5aUiDRJ6DgxWwqMctmBV73NmUBYqaiXbvmevevXBkpWSKkZsXb3z6",
  "key31": "fu2TgWuBWb1btgMt2VxuohbuukTFDH5yHx95nUbNhTSJuvAt467bhcgTy6iZTGeBdmm9r4hZ3KtAYNX9Dxewg3T",
  "key32": "4gLRrA25bvEujCKbNyJTYzeEmxMWDW2Mv1un3L1gYDNSFa2NCgmH8KpcAfkY84DZoRsTeXsd6kiFhmRjxAUsSa9i",
  "key33": "51ickJ7N2H8LdiyzwNxVXxQ435D1kmPraMWmhoyLHu7QnPGTVmAFkpZzq1M1x6Cv9RK3LAQRrKmb7npHjCVY2AyM",
  "key34": "2BpWK31EmR3my26FFoxwFc3munKiQKkgeoGmJH9URH4qErpbSUS1TpyFT81anFz7wFoCZ8EwcpcNMCMEvi7mLNJH",
  "key35": "5u6DQyWia9s4euBRRsW3gToB9Y6UrSsU2bewvy8BHurS6pTah1fKoszptZYGsnN1R4cBYvQsXhBDTDtKU9WfgdjR",
  "key36": "59txWtTRMiDcXvAuRAy4MENuXAZ2j5gxit1KXZCJqYwAwta8oWvNqtMXxs9QCnjyUChaJ6cc6HFZsXQcdrfshrFT",
  "key37": "W4wbVHVTiKHLji9pKzZMsjZ9V6f7Y16JGDHzrKfaTEPzuoAk2bQxYEdWeVawFBvbfP9YP861pKdCd8HHF4Gdhd9",
  "key38": "4ZXtGm9irw6sP8NPMdhpix1hrC7dCWVoEYvvXjUiv6e4MHgWHaR3xuikHkLGz2dvrBu5utNdJbk3uBA55WEnXgYn",
  "key39": "3QcFuhcwpUAGiY84ct3VPkzS7rRNZJ1LL4n8dcSLSsv1tiLGBTgsTaCkEVk2ePsZ6TXzTj6BQswdadwAiGnZaSqS",
  "key40": "2sdk2Cz6uiz96HrRNjYcddNNd78AiBK2SvUQwcwYLT3LVNZshppq3RU9HwcoySudzbBUWYKDtLSF5QGT22fGMgEU",
  "key41": "4BX4fa8LYTX5YiqUCbpwwwiqELW4LHBVqYS9gndKNMmPuFVasuqzmNMt52Jc93HCREy6J7doVb8y7X3S6gtia9S2"
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
