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
    "37KhVB73YtPdQvEvF8a7wRCgNzVqL5VC58MvZziD3APZkcDt3zKRzpTWi2YzBih7Bv1mpNcSpQiR7Q7gujubrPw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b9Z4t1hktKjt6FB5VJmVjQQaWdAsGXjmWScQ8zmhaFawhNu88LHhuSo1uHoFXh33Lbcp4hGWwSUCxNKKTPBhfWb",
  "key1": "2KSiyRjKDzFcE8KV7q3tSkz6Fy5nrVFWHRmd68vhTBfs34h2r5riSpj9hXjizJPodBZ5eXv6FCZKHeTmjkXx9rzD",
  "key2": "3q8GFDyoTj9yzyZs2tEmtQvfJxffgbSDoQM5oGxTs5qmGxqNYhew2vVuzQvqFbeJx93yML7uyMDUysS2s57drwZr",
  "key3": "3q89mEBiC7MwYbobM2f6Q1ZMvqKZaRnv9J2kpzvyaDJQaXGV2mBvbxkdzo5WiWkbimSCSHq59BTtU8U24EDwsYN9",
  "key4": "5XhHfJ4ZAtPJjnmyQkAgKoG9RUYUDwmwWDy5hzMfw6rNUc9krWQ1Jb9bLPNKf1rvbu6jzUJDbZverQbE67Sq3anC",
  "key5": "4DL7Gn3izyAgZprDWdYzzHgNDEZN27psEQ3SoAtmnGvW7oiQyC3UQXtEiBwcnzLBnAtMr8LhKMbi6gy1XnqaN5N3",
  "key6": "4iUmQjMx2Y1WBnxw5bzGUXQsv32xKo9qjETzcMwBPPQip7kNyUSwDzfM3yqXzFKgSDzPYCc2FWSoP4U2TLrC3Gj8",
  "key7": "UdT2Xw2tWEB4BAtZ85YPEMhVti2PY9Dyn6PffeToHzNCLjK5bVaKj6i1eHN4s8kpte5W48aGZmyP2dUvZv5s41q",
  "key8": "3oANoNmUjM3ykveDmcFwaXABZXJ1DnnkHtxD8qSM4KWL1k7jg215UX5xD8j15xEuE2ARpf3HTynJk3gm2c8zohpW",
  "key9": "2P4S4fizYS9risVnBDkwJLSmCcs6rQChWXdXHNhEXZCrxMwdVo8xEGSWtP75vckz3UJrRCuEPgHERwQLW5oypuzt",
  "key10": "2yNAGNGpvD4Sn1jmAqB9DmqpUjoYVofZePkLnWGJMeijLEmc5oiywNoxMsSd5ckXzECQV4bTyd3zxEfoePu3JQbn",
  "key11": "5MWiNj4QbRpf4TC7UkYDwn2MwTxTbfpJ82zsZBUaxRHobz8xuS7TTzScr2Q9dxX8qa9vQSo1YoJ7Cg9R3UqcYjEp",
  "key12": "2yYGqLeAToKfnnunTJcktcNeesZxsvQju76ka95tJitFaN3LxSUepRoBkT7bBr521cJjg6HnJhjgnHt63ATjBwYW",
  "key13": "4gywwh7HoAUPrTZJGvcazQJtkf18K5hyuEhcTRCyNCK9pgjJquvWpefvcBeP7M7Z8J82m75koBJgv1iHeJTSjiTT",
  "key14": "kXEGmTh6gbWSto8Zp1nLEpEBtCPHTqBSUXH1MmBmpkajPXEUUetB4jex8ZWdueSvNTsto3Z26TjNHRFdRsB4AEZ",
  "key15": "9cW48Wxd5btwA346kE85WjcgieyXkcrPeXzSAH2m93b718PMQJdaFQaRZNjZt61fW9TAn3RcrzhS4PaAVrdGaY9",
  "key16": "4kGRKMGHXsCnxqNXjzqQbViqsd55gzSDqGmq5im9kkP3upEUfbcFkvmmbSeQUpHN54fB2bpcToVTd3dXaP3Eb6WB",
  "key17": "26s4LgHxg8DkhLTB1sm6of6d27FmLA5xpGiYi4ff1HLccujnviBK4tvzLsvcEiA2JXD16Sx9T48eEeUwoF4FVZUe",
  "key18": "3mmU7J4sW9bFbUeNK7wsyskeSNRcVYzZNbbmLZ8Z4Ax7ThujuASiTkMkYQd6MYV3HeyW5BxiRjDsHWMuEHhpR7y8",
  "key19": "mQRSVFwv5zKqdQRU3kK4earijcDTueawVAKF28jAqFBuy9T7Km2kwk8LvAGw5xtFCidfwRpBiV8FxNMHbD2zSsY",
  "key20": "3XXcpLbrY6eR29agBtroHW7wxbKo8VfYBUrjJbd2wDdnQB3LCJxfXWMNKmgG5tXCEaGM154ipjNiaRBn1RQRdZa7",
  "key21": "4WebjJnDKcvKaUTxPf2Rpt2v9Kw7hGQj8oc5d8qdAYBKgdoUXoELsnWNSpaQC9jHp88GzULvv74RFyd6Ki8MnWzy",
  "key22": "5stc6uiV2UoGCbTGNqb182u1C2wnB9AewxySHMPYZLwe7jtmBkfxebEdTBHw7wNddeG63EuyyVGpgfPTtMCwdRRB",
  "key23": "5Rx3eV5pGs4gjxjqUqPEb4CZjaRmx4bTpZQmBwSJtrXjCbYxzsXBAjyCTpgcKEBsZhJC5SKSZewdcsScQ2FWHByG",
  "key24": "5jMhyME38tkqPMzBfNu76DZkTH5igCF4GrUJ75jgwebtD6qHLVjDXCN7n5DiV973zaHMm97gCCkhzG8kgQFzgC4"
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
