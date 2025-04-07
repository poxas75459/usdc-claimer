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
    "56RQYMthHPUnQLxxrgtiknCnggPGgUtBPPQSwFrvde5swVopjmahbcRqCZkHpGGzWGVvREj5AyqRDFQSbZHHGxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CwMWwAvUA6iqaMiNMx8r7xiJ2wM4BbH7U8gqGBQnRR9k6KftuQCjZNi4JnKvzcGjay6GnJt9gZbhX2uj5qsyjdJ",
  "key1": "3afqDZ8QW3NVo9jqjTQeJ2kKR6syTUVTJDXLPxV9pwSadd5hjah8P1P2Jvu8fva2cLSMVv91ZanJPxVCc4RD2waj",
  "key2": "5EsrSHZLrhjdHPD1DjxrKsZxadAiRxt1tVDigTbhkTXXsvyGxwuusxmsVagHQP63Qr8FQS9HQmwnN3TLmgBXyUqg",
  "key3": "49TfiQrPhTY5FmhHrZpoGqeqyF4hAssBrbv7CBZnRLB4oo9pcug8s7a1epq7nJV51wqwGKszSKeTgyw61SXia5fQ",
  "key4": "4DJiXbq7zpHMu23XHSVG81CTcCfgctVhT7HyDbHxKqek9eXCJ2884pcdsb1r9n3LFUmvYbUGYCDtUZnhV4i83vuT",
  "key5": "5xGXjH3533yYcfM8se81Rti3RgyRgdG4hTiqdPv7KYZTwAvbLGYzibSvk1hgWmnEDLdtP69dwYZjRYTdcmrrnbYV",
  "key6": "5UCR7ZK39HZqnyC29Pvj3YEPtQV4MPkTG4gsbHbv9E61jdQB1mbRz527HRFQUe6C7cUTrAdT7MX5isGycqZvdoAg",
  "key7": "3ZkVsV64qHcRfAXCjpWnetQA2zM5TJ5c2pZefTmV9zgpbHN9SMmR7Lcaa6PtBdn75ZDsghxMEXufTqKUVg1LTSgg",
  "key8": "3622DYHGsRWdNtkMUXJ5iCANHMriDmY7dJwL4J9TtYoAe29LqMUrVehW7sXrtR8nCcar5fP3ZW1XAvivECm7ADXn",
  "key9": "5ipguimXaSN8AQAi2XxzoxZMFAqeTy7rC4kQ6uZxpnRjVxU1DwkpBTqGEAh8Vj2z7RMkP34zuGgpVEFbK65RctXi",
  "key10": "3AERrTqojgy94Qvw5seFRk3pEv9Ehoj5q9pn7yBYoSfzUfsuhNzE8krrJBBy3GdXsRYcadktLWw3gUbUqFC6AMzK",
  "key11": "267BJqTF4NarY5joqZZnTKJkPTSxFmsc8yRgH426A6DWSP3FwiJz26mfVUWvKUjuV4sMjgsUsfUfRNZBhgqMBfwD",
  "key12": "66o8CdLcBQxWSysBkJ3oDDeTTDnE1EzjNG4rFTn8htYnamktqQMrKDLuyifv2xUd2WW1HgRnee7UaoaC6n8Nq9mB",
  "key13": "4ctgN1Js4kyFDA8wQBRf3J45u8oztr7TMd3BsStonkfUP8QRZFht7hdJrcJrSCSHSA38P6FkEEWxRjATttH1wdNo",
  "key14": "575afczjywXx88rpQLnMPxPTy4zddfp6BPaSRKZiaChGc6KNTKHJA4wNYWAVcGLc26MxpwGtm695Cz9QCLiGkwZE",
  "key15": "2vvHT8nN24f7kuTNkyPXY7s6aAqCfUkMQ91JynS9cd8SsiggmQWsyUcyd946pUxDy4uJ2R87UmTpHEuJJY5jjjML",
  "key16": "3kbA3jg1GBXJn3fAavjUxt2UogfRv2sjyvJVz3JTxQ3K8GwnyzCTNyLMvi1hkr5kN2HupFp77JPbCeAe2Tk2DSyN",
  "key17": "4rE56TtPLf874JrepXHSBwr7knKySNoo9MbtoX1uXkfESobc3jJoVUSJucuieivTP5gocdGyGr89gStUKaCmR8Te",
  "key18": "4vyPfsiG2Zd9JhFbWVfSoWYWopVSA28De8ncrsWrEP5B58rH2cU1TVjCHTphgEsJGNTHLgWfaWvmViM2QSHZd3GR",
  "key19": "4WYUJ2DSC9hARLDJuSCaRD2e7JyxQMVKh2iVAL78cCtgArYE7tbW1k86jgar5VeigacDxuUZA1YkTQTP26qmx3Kc",
  "key20": "3RCkS7QHKG6xHVQiL9bm3u386YVDm578vPJwJ95y9NuU1Z7iNk5SwKAu8tkt2K2L59htTdywwqVCQTG8w5NmbrFL",
  "key21": "566g831fTDZJGJGzgnwq5rJJRJpxPsJDuArrdy2vZxEF9n8pQaT62Ap1N4yZE6j4Dbxe6RiYxAKkCDX7PEhFLX3s",
  "key22": "3Rgjp2nnYqdUbTWGZKM3TY6nQsvrnsCv4ep8j8YdaEMKZntjAspgLMjYtFXTKGnkUP4oK8zkm6ARBj8uC8hxj89k",
  "key23": "5vym52qjkkZKnRzAJZNCtyyr8EowpHvF7AxXoigeQSitX3d3GrUUUzpv6fr7JWteAcCp4PMcUnTdfRaCuzVb74Js",
  "key24": "5A9zY7zZjmZcd3nuJMFAGonNMMyPjfw56qEReLJJhrCJMqnRHcgZF8bD5LpNAi6x5dMY6EEBtq6kSUBJBF2VmAgn",
  "key25": "2d2RVffn5TCy4eVAYd8STkfBi9TbrBucwwgfzybodTLdGBFt2AraS8yKmR3RW6L6Zw8GTXXaAwy3BnXbd1LKTYs1",
  "key26": "2NjVMnH9XAdsgbMjtB9sJKGqVomk3pw5ctE9pfH9Bt8yXdM5BXJorQ9o7SgKJFkSV74cJJnEvkRHETRj8xfxVRSp"
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
