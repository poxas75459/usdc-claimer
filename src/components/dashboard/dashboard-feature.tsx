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
    "aeNFVMtQw8FxnFyqAL2emfxNAcJVY1LThbZ3jCS9HFFWS58X4BBE4f8fMJdfiH4uvcPpzTqVnZJqEYpnnWQmLDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5km1LPME2Csr4eGHhh4yT61LDbd7QzjthaBKH7YSMoxRdxaQwUkpL1sEci4EqfLYoM3bjMMyWZp3iueCE6G4mf5N",
  "key1": "BxY2HLB493gzqKEHpdVLSuz1y7mYM9o5Lwtge2a79tFsKkpjqQNwEVNes7FBe6adNjy3g5cgGanWQVC3hnzUHbi",
  "key2": "2f6HbaXu9rRtxV9R7omNwE723jcQfKfYYwVbN2M4NGhp6MyN9K3pBpwVdEQqCanMjqM9Fn7fPs9B2fac3JzxzQ8Y",
  "key3": "4dVqQDXoKfk2jcoxcoPK1MgUGQnTTLRYzMPnpFR8cpQVqoJKiCPtm3uSqeXG3hHpuEfHk8RmJZHzNq4LtyJicGZZ",
  "key4": "2nHF71gs7NoHEkzHUmrgncLiwWVW3mCvKGCCCDCSfTgsh7ehkc2puGcuAVfztARkx47Z5c1nCe2hp6zJNZS7wyVp",
  "key5": "5Py7GkCVCVx1e34hFqpnGs6tvys4Swmc8qMrzWtePMqiiMnTHYpurcN1QNXMiakB1SzXfoSP7XcWEQYSAbgLiZwV",
  "key6": "3JsCANs5z4Xq3Ca98dwRZiQgSGBGWoFkyFoq8D1NGPWjVd8v1nkmmZSiDC7D5e2dEqVJTzPRpgT8nshEto6Jm3qw",
  "key7": "56jwxgR9iucmWQAqZuPPe1qW3xHLXAzD9gBofdeUTc8kmmxq8657WbMYFAv4wWUYAG8E4cw2VmErRgphff72Xeei",
  "key8": "5uPHFa3q2qJdvFiH818drsEMfq2d3rdf3dnahiugBdyxMtc2r6Agvo8q1CkQdSXSwGENY44VvPvrYMFc2X94TTvM",
  "key9": "zt6uUfSzmQdGCYgYyjxu6wzPYE5t8jdYtE1yKbco1DvhxR5LC8ZX5CbZU3EPPqEDt55QNjFEGMh6PHcasyEecgn",
  "key10": "4WWHEmf7HPYkZnucUMGfkEjRF5YX9GcLGMJWVR8SzLmSWhjUcPxucgt19LNYz9m8CKtfTVodHqT6JttQSX1ANwCQ",
  "key11": "wYsenMdA66hJiAbx5r7aSD8bTChjM7aZr7nbe1o1QwwMEPhEwfEXyrqtzP8qrJFVzpzBJUo5Hr5GgRHeutjRgjF",
  "key12": "5JKELtFWYqjSuTmZbAPMbpL4zxr4d7fWJ725AVTwUiPFqkXjF3NNtCofm7eRVFqe5gZ7Zd8t7fHfdAVdjYHZWTHM",
  "key13": "3DJGmZRrcrhU294SfWRcgTSGqDi5ZvhmvRDy4DSrBLeUu6kjauUbmM855Hg3Q8jaEzcRFe4hnXBTXNELjCDhZzJD",
  "key14": "4zWaKjiEkq4jPcqCWBoJxmdioCvWi3hHNsUK89qstp1edWuEkydvLrwZAdsfotLzx9vZhkvp8kkym8ynLAQJaWXj",
  "key15": "9XBekbZHtPo7LuehWHhz1y6hDATYVEyqAc9jJKLnokQZw8899RceRA3dHBMJNRok9sHmJiHs3iTPefbGRqPsAM7",
  "key16": "2sxcqt3ykZx6U5k8DRnXP91YaiVbe7S8BrcwJjDSYe8BEJJ9jBQJuAx6E3A626DE2d3o2SuB7XTXwtZAxaEt4Hw",
  "key17": "3rcJ2oBCcqEhb2RLidqp18Pdp7uADxRSHhxvzBK5q791gy26Tc1HcFVgzsVNQrmm6XcF4ETVeKHiHnLQtCrKoVMi",
  "key18": "21aQRgdCXrFMFaQ9mBvocsyCnt5fXM8AE8Z44aTrayvrMb4cAouhKfAMDrpzjCZNFXrqFkfmUV5vC6ZjFz716aFi",
  "key19": "Q5Dpt37KH76SRgrqWcdRCQ3VoE246kg9pYK4NAScNoE3vsQuJmFFYHSP8prbxdgRAuQhWtMBjAbtT8dvKRTztUC",
  "key20": "3bwWm3haEKEaKwonZHwD8AoxcEpW9noJHvdQr1VntZGWx7PiUYCZFQoAg9xD3pJbhsrVFozYgbMDtWi8S1jMVPSR",
  "key21": "3hJzY2BpM2YRAVEQp9Xo3rsY8GJX2P7Y1jG4RaSm66mDardegQz5QvWC4F8YJYvqJCpyYEX1UWsX3yBD4A2mCGqm",
  "key22": "5S78c6Z7wVQJVRTqH2R1ngZ4vsdXYaf5Da92prBeXBUea13vvG4p1eTVFuK5qRNmRyUqjLSrPFFhRbLKRKy2p8Ay",
  "key23": "4iCbq5psEMyFHMxGB7c2vux2hBMB4XXbLZqA7foJz5B8SSvGbJP24ur7Jewrxyyi5RGPPA4EFMhWv655wydXZXLe",
  "key24": "2uELMdfE2nUwEh2yPwHCnGoTt4J5eSsb8UqfgCaQqz8KmgN4YHd2xcsYharWJLtmG6Eu3XAhFfASv4ZQN14LNyLx",
  "key25": "5AGyje2GZRPoyLG5CJyN9x1JVpT2B8kYWsJYCcFWYAmvBaK61eWAcxMmRVWcTa2fYvV23LuWPD8JxDjTMgNaXL4p",
  "key26": "4AvbaPQgqWiuzHE8Z8qVjQBLfuqoK9xFMKj4Zbr1bctVgkChqfVkncPZCr6P3TDPVmwvDrfrxSyPpPhoDHBqZNt7",
  "key27": "D2pLWgjjyPSkoa82Bok9o6E6GHGZWfXvd58V4tFy5zGx8Zd9hNfeBuh1cXha1PRiSPp66gNdcegC3vFLQ9t69yg",
  "key28": "4RBzRjxnNmFFntk1jHAjh9mbWEaeN1pc3wUT2Vt7RmqJZtwWU6M6b3ahaj9rha7VBDZE3KprEiaqA9kkoj97XHv7",
  "key29": "HX46Wymw2RD8Aribcxnxo5ZGrMRtNuGmbfs4w2o765xTaLJSZBdQfVC61Rz7scUoSvQp9quUVNL1y9XnTBcsRdN"
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
