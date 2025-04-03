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
    "4EZ9M23m8CoxRhiEgovx4rKVcojZmHYdQhEVuihx2VUb4GHR1DVMsrqQzFyey89UKDTZFhZb8hsjhUGABZiVJryp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yvwYWjVhXNqJ1zVdmenSab5KPmDw4ih4sAjgML3fnM2AHyDvmZkQUwwcsGGwghPsSr9e48BDe6rB91BrpcL7XwV",
  "key1": "4HNPiM6n9KVtSrCkzaZ77UwEqtRnGQymKyHeN3tCnNcMNwL1ace9J5CFsyEKVSMYJWJHbj7eJGHf5QENcXLESF54",
  "key2": "3wm4EPkg9uo7Nr1JbshnxWxJVFAYxBN98vyas4xdugwKjpSnKcTcBnhtqRawaVNS7QZHNgzXUsX4HEfxsa4nY5o6",
  "key3": "pXy3ysk6ib1qMUfxHr93jAwp94UTXgxEUz92xfGg8ySSEjrqyfuU1UfWVUscPHVQszHQirDqSWq5nNz3Pr7zx2X",
  "key4": "5jrcTny6Wgg3iBCjHkV5bYP3YtXuj5BZy1euFiL58V6STz8RGq57MrfRmWMMUsA2y5hC5djHb8AEA4dMQfj2r1xo",
  "key5": "2Tp8eSqESjA3uTjCcac9V1Lyfvo1acFuBf3LZ1TmDkgUhecBczBVFNEu1sBvL2Qgh7m9q7Z93Fmhqw4LWij29V47",
  "key6": "2evijRiNaN4a9bqgk1XyXLo6YzSSomeErGCURED1e9sDYupojuGJvXsRfGvwD8FyrfYLjKS5s131UhofUE3NwkB6",
  "key7": "5XmeEZdBwfATW5hxwvpsynoefbV7FWDbBeuYTdJnzNiBH4BLBHt6aAj8AUB53fDrVDomXmdbQt4SDDXu3MVRnUbc",
  "key8": "3GPmpSTfVcgtmXdZZxFuzx9rVsU1KnqjC4KUCo5E1noE4VHXZSt4eNz5StQKFVvgPqeoUpA8H5xSDxZ14h5sQTSQ",
  "key9": "4EGEpNkYnkn7PUz6e16Swp7rsUJMkeGXvbAVCJBLQ2iuF9WJvaaV18LHZrLWG9XSuA55v2i2XaCSpkCeJ26n24Xv",
  "key10": "35W4pUa9jwdqoFqni2Z5XdBZchP6Decjdrp1GA1iq6gqUuWQVywQX83BergrgeAjLNXJ4k3AnkiMMAxjEytRszio",
  "key11": "nebXuCBg6FtcnFBiDeyGbqq18LkWhaPiHppDeLG2KHsZsaGuwRb58ZrBoR9cEn4g6Gv9Q6GLvNYwWEnd237VHdu",
  "key12": "URqbdTFpGyhXPXH2gbr2kXQgCsyDWCS87suf3dd4koxoB4tgpfggaczmP4Wn3oY1KaHoUbrrcnpDa9MbSc98J83",
  "key13": "534Wu8MqxtfhCTk38a8GpY3Wbo1zqG68hgmzaN53ZivvreLhUzdWWdD13NYoZt6DYLsyHwUbDPm8AkupRWxNCiUR",
  "key14": "3fvrW4zfmw1uvKK2qC4wh8tkw6XYuyAVAmuoQr4TDJkDmBDQEZRqnMBhi96Z9437Hbti1KGKrdyfEhcE1U7nuDu3",
  "key15": "22a586gLdxpcwt8rJhvbnPKpurVspKNwyZDFES9qZyRTfAczNSuKhS2meFAGPWgSmyv4xNAhoURvfEwVzh4KQMPW",
  "key16": "42ezmiHuvF8pezoSRzDCvfDZyaSg1Por8wiyef3SbU44A7iwgaeL4KKNrfkgCREJxjvpKxUoPAFukF9UBHt75jqM",
  "key17": "676tgqqeALks6fSJBZstp4teWG3SfcraBFZdrPT4a74sNvtDyYQahjJmjr4AcD23rzQPJDfbbrr3MHspcrQ5CZbQ",
  "key18": "3qJTLRFiwoD49QHhHSXuNcT5bfkHFsV3bzDvxVHCBMiKrftC6psQxCs5dxxRHPS31yeuPq3K2t78W7gxgf8J9atf",
  "key19": "5TcYwUuUUajQjgh5FJQcxP4BYncLB8sn6CCdmJRtcgyWeiy7KDyyEA6sgS8KaxjPbjXe1UzhwVognwAjwQoACCZD",
  "key20": "3ofRpFayWg9nqdeZaqc4fg2eq8ERmVtYvdfJVwnQjdigrT4afZDW2T3wDgjBx89d2AnPUYfCxxEfUXUqFihtmmip",
  "key21": "2gh8bx2nYogN8ZGYu2wUeiLTQsVtwyhui1PVkTLMiSnPDeiJdggi9Y11iTX7vXHBejq9dKihHCsK2gAtX1g8G7Kx",
  "key22": "zTiwofjnhdtHtxQnNSVRR8mqBx3twLLMDoCSJ86n8feSmyvoGBs1E4wWAvg6sMUA21pQAtkaTEjkgLh1po4josx",
  "key23": "36hJm2mnX3n9gFNdZChx784r1ziKTp4kasWSLGpNCyVEFdSFGRtg6gwgJaB1LTx1WPmdBNiThxGBfK9yJ1RGT4ZD",
  "key24": "AiGTJrHvNo4wnhYtepR1rh6bnnxGzGMyhEU4zmgH5jT39aPchBrSGzdJPAa2kXTMc8Dhzv9LD5wqxzqdToCUDvM"
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
