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
    "2mL5xJ5JDsHEGcEJHHS8iFcbR3j4KzBhPYjU1a3Uxq1pJ5aZdMXUTCCrNG58oeNrRXzzEzAgiikdcmCrLXEZfxgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y96jL1DN47tfc66bQHA71zPtdxaxFkBxBsb1KByz9hPvCnFp7DP33exT6fsdQdA4MC7JvCT9pshmkmJt5jFbpKU",
  "key1": "QiDSk1Jv9WNhqZTzrpWQ83JjXGr8wjAnJR6VrEBEkPKbWVid8NBk7eqgis3grxkGSeQB1civbQuuoxttF27FraV",
  "key2": "28BZKkfzEiKhcD9GPjZ7bCYVVsR1arZ78rURTAYCW6Zc59wek4CnNVtSFEQ4Drrt53DNqKGdPaCFzDdE7YCxgh7n",
  "key3": "8cVX56B1LsUZRxgbmcyX9sjxyNWgmCpZ2FfPgyqaisGKcoz6n6m3jGmHHYpi9qWDYZrUwd8pEFRNEWiVAz5JqNd",
  "key4": "3P4x3WSAJUeJG9jPcXQzr2FCFRU1b9UeKWbcwpR9Kd99LoybuxYsLFFxvHpPQ6mLrE78fk6NZBy4X27z1dhRNMPr",
  "key5": "2QY33bNmY8xdpfpeCw4yzk84Qryqp4Jp8imncPfAeCqxN5MtvwwaUzMVSLqTEgXXBW3oczZDbSRtmAPTyrLwNs38",
  "key6": "4fH1XfbWzVvboX7A5oTCu6Uhb8kgeXA3PVTd3zGsBtmZBvzhSTXVuSL9o2JeTczPiFxHkNqPLdXTphVaufsGPUb4",
  "key7": "eEL3av89DiJ2TNd3g3Q7AW3TP8SC9omTbQTMytcRGLR2YBhjP3AqoaEc5c75se4cXuK3CxWuC3peAGebKxER17D",
  "key8": "3qFYfmSSbQpnruTNMGxFaA9aVYjXLoCzdWw2pz7ExbGDDdN22z6DFgpswSThvEYVtCSdba42coeZDWS1Gc6kGy2Q",
  "key9": "4fyQfNfFs2EM1B5zPNH9QKtC7DVKee9WXJpvdD6KWTHWoLSuQAQaNzrUFxJqzcVZcPhMyKhRXZE2Sa2SXBymTt3J",
  "key10": "w3bTJvBm9s2GGgQrrsZZ666kBgjWVn3Sq9dCQhqHbsqVqztwB1P6sdJiLF93ervj6k7L6UJ39ZYEcZHF27Qm2WN",
  "key11": "2AKAx8qoZ6vbMLGaW6bSY6zzHjGMtLGk8fSDydDG78cyeEfBkmNv6it4dvLEyVbEdMLRPwc4Cw7qw9HUkdXTWYa9",
  "key12": "31X1pPnkUtLaMMbLrYXLizZULNpJDF86PapA5A8ufGYeUmLo8JG1mqbSg51BwcMYC5wHE8ajXXxW2XfFzv4hPEd7",
  "key13": "2XXpAu97PeriMALm978yZmSfXRpKVbj4PD6BCKqQz3ZPpVKKW7QBps8fNMrWNDiio1Ds7dR2dSUKZEugMC4Duxri",
  "key14": "4Ub6YDk2wtZyAT5qDdEuxWtDfuJXrPE7VehecBE5jdjgfL82kgJZkj9ayLyiWSEgxkknEaiGpPb1s2gyjpoizQG6",
  "key15": "4bj4U8Y3MpYAmtN5mC1491pHiT25LBs9PpYhRn29sZW7qYYKdEPE6NbFu7zkXLTEzQy4c1LoNFEkcw2H9MeLL7aG",
  "key16": "3o2jQ18HCdggaUdiKKBazGbGYn85WfGXu2sA5J8oEUdLMkdgm6Fnkf8aXS2QFQNHWZVCZbTV6hzoCwdNYgkZU8Xq",
  "key17": "4NNKv2dJN3nyJK19TTAMu7EqiNhakhHAnhb7vggfrgnL2jj32wKkYhNbpAdHX5jFaKZHh9Lb5Beas2pabgnPwe5u",
  "key18": "63nEoYmoLxoqEE8mBzpr9TURWUhsb6gzVuDQjaHiuVDYAxTegaREUBgG3zqJoTQPaVBTBzPt8aS1cNWczbQ7SWef",
  "key19": "54fJW1aSMFAoM3UQiok4DwWtQZLfMoz1jimgLTWFrzRkaego3KSoSotdsqTzDKrFcApEicwKzU7eBtKr4TjTQcZZ",
  "key20": "r9c6sFZjg1Cv3ksM5xkRa6TDkNBuuMq8C8NWfuuQ39U3QNkQ6BEr63bUYeJVnN4M2yyKz15WsFzv2pn7MKQa7dM",
  "key21": "3A66zM2ChFLjdpP4LUdYjai5VuND4NrRxF9raWPW5njkPTmiXf977h9Dt9s7Y9e3292VSfDNAo8ssNxHh33C9hXe",
  "key22": "5CLVKKDVPmsNvoPqkbSnLXrKxnPcAjJcJHVHcAeNcWe2Lqb4aHVMdcZsLePDMZ2fJVG1QpUS8HRv4WGWXwpEwJTb",
  "key23": "4XYXgLDGa8BafWoSJmNxobDNZLZaFER1GZFe4srpbfCtw4QfuMhSVoJoFfs4eMZ51AZ3po4yZFv2QG9B64ZeCLHr",
  "key24": "5ezvH1ERMC8ZFTWsrUWoenbC4rEC8NDFYqnMNiCxNH5WysM1odQoVzzApUjDhVLpjdijtSuSjMJLciRTaGBQLwFW",
  "key25": "5jcYmpmPdBqyz32GbFRNyJaLUjHVZpmYHn7tjJSw9xbRyawraEy1W5AncMp4NFXmQgU9wwRZ2TnZpVUqnD2h3kjq"
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
