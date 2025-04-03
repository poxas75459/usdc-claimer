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
    "4WLspH7VTjgn7759Me5bBVoRpizB8bm2JyKBZ8dn7iV7g4dZkS1imh5xmWfeTwDoMELp3rbJgDBEvgtasXbFHde1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pi1neaoCT16vA6A2sJ54iqVfYD7hYPY1dSkPnbtrxp1xjHKjriVPZ2a7JUQ5Mjy3QHPMdei6WrLdg3wrEH3hRHL",
  "key1": "5dFtKk3rc8BqL4oFNBJgYyeamjDxPoB7zuKxmC5pbsFrCgkBviAcyra6MRvHGJSVcsGt5X6bkfWnJPAjHzgNBpRo",
  "key2": "2iQcE25ewkFbRKHCDrm4x5s1qc9sjsMY3gDRjS5pjd4oxPi7fHkHhM3NUC9yTwTJbCwzcwibkSQg8iaW9kVCXoRk",
  "key3": "5uEjgGMkryqR5oNXtcYJbkKYKPBJGRhA8DXtq2GCpDKU4m8aNRN8TpZi2Zn6EEyeAMf8CrqDXockbkYryhqLDYf4",
  "key4": "4Y6vn91kne14pZtkJyHogchrHvs28qhB5Amnd31vfQRMNYHnhRSvFgwLu4QucLkdT4aunSSAYG9gqRtiw9fe2VCA",
  "key5": "3FwMZgdmANaoX5zrZegHnihEoATnMjmp4NghKRQTLuP7EUBhXZjRX8Fon8ZMRW5YVxEeGbykrhtxCx5gpyvsPbo9",
  "key6": "4joiSqjz8PXNaTzj2VTtjwmdBhffiizGAmzJq2wDEC6dVKhxNzVdV9BCjvkM1aDi1hGeVdAJD1SbMdLzpxUo761o",
  "key7": "49uGRVeVU6hpPgo2grxZqXBSXgHBTSNo88YboANFfSR1LbuNh3NAwLs42KKRACGh8ayEddameQKSvJdN1CXcHKw6",
  "key8": "5BHgKSt271c8hifAeEQTja7qToJv6WDEg2yynDNdsu7bdRZTaVMT5Ue6jJ8J5EqksfuLMnAKizgf4uckpcQeUGZK",
  "key9": "5Q59GdPHU72kyTDLoadi9VjgTewDpE4WzbJcRJaDy3oxuZP221QLPtfwAZq6NAb5iS2FUQ1E3wj9xRBWnAEHG2LA",
  "key10": "13CsrtgxCFMxj2Jn8LhV6xh5dp2i14o2dTWjKMRv1QwVv4h46hJVmWrMKuAKJVGomrsmGq8XFWMJA7kgabf1YPG",
  "key11": "5WDhC1CH6ipw6BuF3uuKcDiDM8WrK2CfrZeooyzRFQqBmFFKosDeBvcsm7MnWi9UdmiT1S3PXuC7j2EAmtJCsDbe",
  "key12": "gvLmiG1w2mmtbP4x7d1fQzFKyPW2oup8byCeMchREPh55nwst4RF8u8TLjHAWeR8J8myj1Ry7JBhwyQnB44eQcv",
  "key13": "63PhWN5PtjtuddqfHrgTtaEASFyoMMKCutLN4gfrJC7ByKgmrrC5mPzcdxY29r24LFUcRby1T5o1qv4g1kWL8AX4",
  "key14": "5WmHtsiu35kGsFZGLLDJ3pMJZtFeFkckdGCsWd62rZF2aLGEb19eMXPNFg54upQbpArDNWrNUVcn7kjc9ijTpAfH",
  "key15": "29gEoBCpnX3jHUYHhFZZe2CuXYPsiLZZ3JtUiYwpVCsG1Jz2Vxwa1yX5ra3U7nBgFaFLiLdWqx6KTRPrjAUAQKpi",
  "key16": "scSCdWbxGxjbsAwts79Qd33MtsASjZZgke6aucoohXStb4rXJMXv2DtApHSd2MXN9Si38z5qLq4hED6ok1q5k9s",
  "key17": "5GdChJ4Dt2R897CUdVMtTKSkoNzj9LfMc1qv2xBqVp7stfZXoUe3zFHfr7s1mypqD4Ef6C3ZGpGa1g13U63aYoic",
  "key18": "9zwRqAzEnbvf2CmQk29YmE4k8KjwxGX8iTwGQ6hBDNs3cdXW7JXhqX7LaRwbrJfJVBDyCng6CmVhqWiaMoMxgse",
  "key19": "hudVCzMiEsA7VKimLHpobodEfTfDsEDdEWxGmgntYLsEvnurK7uK3PvZayqhrT6v4aXrNgLKs2p75bxEvjzKeJW",
  "key20": "59YeQXdCbPxny7gFrb5B3mizfM7CFaAwEcoUuLcngRVDLLwDXEUkCZoUixYkD72BkmeJcLAQNnwpB9otLarg2Npb",
  "key21": "41c3sm5Ew8iHUgM2koPEvC6KzJ1hCGpQwqwufyfY8xS3kDphUtDKXWe8HWhG8dzKMTPRNWqk6e9JbMU9ERf2ns97",
  "key22": "4zEYW82t3iEueYakEd61id7NdXLeHBpvmYWwjdQEqzs2NjUct7nz5XqBNap6V6AsHTgUesAJ8Mjw27vHMLwLyNNL",
  "key23": "3sVtKWQQBhSpR2fHTBY5dHfBmB3JFH8KTfSV5ibZa9rCjwqqpn2JnDotts4JKR7hgCgzC2MFVyy9Qga5TDBU4qzX",
  "key24": "2gvsjn16z8MqASYPNuLmfs24FyHnNagFnYjLY7LjjFHAyCcmBjZ6HkziCnvB2o9y19C3exkJgBBEAWZcvBNaz6i1",
  "key25": "5RuTuuGvKtUxPZCMHVb8j9wrq84XAa5URpyadasuxDdSWESTp6xXCoZe1uvkk4cJwYv6rjW16ex8apiQoZcDDpCr"
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
