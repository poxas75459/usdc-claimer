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
    "4kMJ8wBHtrVA2boFsSp2HiBK7jLxbwDx2pdUaxtT4jM6gsbfMtBSvKGQVgkGWXm3rD99JS7iqdP5ZEVs3gh9sa3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xhKaC3fLGEE3KoeRTiFeyXSX9wZWdEbg4912GjayrZ2ZevtM5HzQAME6MMEfgbYDfN23HHaiVFZ3dTS3LDCUzEC",
  "key1": "3jQcCTN45ViTxK91pcMxg12nwqrrrrncYY3CtgcjkgKQURm66naxy7iniNzGMJUvNCk6bC3toRkimsJKDirSgqS2",
  "key2": "5KR5jz4natpuBiTeBj1e7FzT4tZZhSFry14yPCCACasYzvuYxqxX1aPKVs5gcs7mTtTbRsXVkpxGRnsnKjVqGSSV",
  "key3": "4n8WB9fy55FE2cqSvcZhNx5jfCs52FQJQSCaDRzBdyPpkFmipJfv7VYXuq8G3osoiUXgFhiaqdAxYD1R88NKoiew",
  "key4": "exQXM9yHb2Uw1aiaDcseZchQdsQ8CUSUJDnDZz6sWEQeRrNGkSyt46pEqvRDL9FyBiy1CGgrp5KcciGMNFCGvzd",
  "key5": "YfZ2wo7kPHTA4apDTrWR3KoLePrF6xUqRXDxnTqThTJ45u36hSNK9GCoaLSqbdhUy6sn7ajudBPPwGbwCwG42J5",
  "key6": "4jFUWVAZuwxQCsDJ5Frv2uPuhrSSy8psFGyawvUh6Qrh6ykjjLMwoeyZoTyoQj79PuYqh1TGU6x42VNdG78hJqZF",
  "key7": "5TrUiWiRi6orcB1xaiPrbnxXf3Ur23AzRUHPFfodJsuXJ9mUPzcrTwUAJFLLKcvbpXn7t2b3eGNF2ZHLVoTMNqTV",
  "key8": "2JKGG3MyfkGecjRSozhCBcEtbqHpoMVSLQ8oXiTacpZuq7HCrd93tRVpVb21oza9jHuoMu3ipD94rtCwNRJ4TUr1",
  "key9": "4GoiM829u8xNuzmiVaDbpEmXG3MchQYmio4GQuEnVQus9o5bCA6bb32BQRRkqGsyhVHFPW7BS34qMXk69yfTQ94k",
  "key10": "3RqLYG9qiADtRbvNEt57gAEPeEmosC1LRB56k23TifDsoSKrFKh3aqCKPafuSjy4NHsQrF1xuL2GAeMCLsbqVece",
  "key11": "2HRa2BiB6RwP8QWJb5pjUXY1FetzTUPM3weycxVwLxomg5b48uyuEisJqqe1Tr2oktRECckaf13yQPEBgR9egAzv",
  "key12": "62TD5pQ53FAUZRK3pJihZFhanVKEMkpUJPq7HCicoSeosajHSe5RpUzwsGwxRYs49YE3hCwQ8gjbqPLGMcRvUCTr",
  "key13": "5xiKkMQxDzarkpUMzvSrbSGQ1Uh7LMKvjqqFLc3oiTn2zMRTnfmmByqYqx3j8Ze9THsTo8frsbm8ND15ZjuHoxxd",
  "key14": "5EjKBRybXMcgvdwrh2xR8WkPsZCBsNrRT2w4F91Mr6pZHMjSaFobN1axS5vDL6oCEPnWn2EDu7advTz11mmSm9oD",
  "key15": "4dqQezvrwdVRaAPWzNoRVmBnSDTEw46kBcCUHPTKTQLmtQdHugoyp6vKtnE5vAPhbmDySYuwtMkvRh7rPdUaHF8j",
  "key16": "2LMRyqGdf5wCrUcZJg8dzgB1Uh4htsBEUayJhEAp46PVhKRhi4CY87i7vRH4JCg2cDhnVSahPKugFd6aHm1ncgrw",
  "key17": "4Uj8yJ24xshBf57Mx8aTgyfwnD2cHUoLb9na5rygugYzBW4cmGFAX7fEQCfWEMA3aBp1KEev5N4xSDo3zxc4Pgoi",
  "key18": "33a8D531R8hbV1fTHgm1jsvZ5sE7wf3j22eiktL59eVTuW3SQPG16iSs1uwZ3nv9emReKfeQiM4uPgE3kthmvNhZ",
  "key19": "BWioRcPnFYXmYrWuvrrQ6UYBMeLMmjSzUeqE3jHbibjuUzzvRyTnMgCeEuKRgF2dd7BeeBWvGBFeD8BvYJFeQFw",
  "key20": "4YHPqbivWEdNBFdG7hW2JF1szj64AiE1Jr85ZYg9wZstF4JAP6SsKVPDm7PSzHetrogeYfoXBxZxzomzuoS5y4Cr",
  "key21": "23NZji6PQPpr6wXwBZQC9Ws7vAQ76jeRLg16mnouqQCUcF5w22m91GFDniZ6C1JGGCQgs8FAueUSfHJnHZK5e3st",
  "key22": "5TZAMSTdRdz37QYFx3fmzXU5dJbiqdzTtv6LoqNqwYt2ZX9rbWCWhQrZj1UqLv864L7xxFuymXz4S2deXzkj37Yn",
  "key23": "3csEKtTVKS7gPCS11N2otvs2A1NNuvvJijM1F9HpJcra5cyzESSGJ6YffZ99r8JLh9f2DtJavUGn4PBKdb4iDtfj",
  "key24": "T6qoj8N8sHmyM8ejq44bwvPAVbbRPqqEapGn98qjyFHf3t1oreRm7da6WA89AifqrZ6UN4AJCfh1i3bmCywfWsY"
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
