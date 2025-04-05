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
    "2jxLhgfQNFhwRrwNt8s3AVykxTpnZs6eFncgtMhxNoTSadoSPjiimNA5soJpRnaF5FWssj1t4FPXooUcYUuxSFDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xc2RMYGutRTLtsnJ3ubYiA7mwL7hk21hp6XBBRFhLWLtbUkpYW1oiEpLpfb4WqW4MyaG71hUuimH7TsxQz85rhL",
  "key1": "3L28GmZBFBznmGSQxuY8JWjQB7L3NqGncNb7vAwVPomPNb2zmFfSSjyxiFVjcKpbf7CWMC9j764dGGi7FbUh9Pur",
  "key2": "4AWcjtpeTaP4UpfgHZdDMdCadRJjzbbKtR1dK2ArFodggMYphx2WejzG55PWHKHwTiBRtEyp2g372SPoAzirmA1c",
  "key3": "36uJdPNosiBonVwHBG2cchMpHuWPmJbubTGsG35GaDJK568C7Rm7dxaixteNoXDTpttqLanmdXBjiQLY267CpqSf",
  "key4": "481a98LFiwtfFTcmTSPD26edg5QFdVQ8b7D5UyiZJAqZPjDMHaMfjzUkaF1u5ppPPt384oS3Bv16jizDzuWeP3y5",
  "key5": "Jce1pansUBiCHbXowQRhdzpgroE7kv8kt5V218FT7qWK8Q3CByhTjfm2ZTd2touC8bc5knyaqFVV1LSFFigtSeh",
  "key6": "2QBq7o1GDHiRZLWK3s5tsrJTSeTHKyJabDJLoBhyqYarMAieeRys27fzBoL2Ai5HToe2iKmvGxn6V3qdkCdTVvcf",
  "key7": "5VHhSxyanft6eD2uezfJznPchtKYJjb3PdEsPRUuEKEDSXFay1JfwpQ2n21xffUEWFeK54p28AnJQmkML1SUovgm",
  "key8": "mjXr2nje3yQaVnPXf4TPNje7QcJChKL7uZTazAkkT6ryVEN9naCyKceEqfpQM4HZ1i2iQPa2HBoaH8H3HbPp3dC",
  "key9": "4GPqd3sybwHa6PBFszjtkJpPEfpqZcHQ5QG3ByYyZLMYtfRYN7iRF3GBg6YXTyWPUtE9rL38z2og9q4FnE3FU381",
  "key10": "5s4xM913V6KCSskzdF98vZHyXqrtnQBJCNrS5Ms1yj9kGPwywGpmDVKpjUBzrV3AZZ79QANDwrFY8PvHqkumfPRy",
  "key11": "4mXkkZ7F8q8wnkMBqqoLPW7tfN52tZ9vPcFDHCgMfoPL6kVMix98ZTqT2m1amhneJPMWcYvLpVAnCm4KvU22J2vW",
  "key12": "gfHTEsbu5jMLU2gWNkamYAnESiAHByUcWM3TuZKCgxSVmnMHehH8zS29TcxABGpj3jmAb5v3X9LZCwJbfNeK5RF",
  "key13": "4ZbzRQbnNQv3SrZv8Lzga8UWXgBk4gc1gXWQAe1eM6Nvb187bmMdB1k98Bx424uJhaV1WyLLbrhDtUhbnhwgbhHh",
  "key14": "8HGc9tEtR2cXcGPmw7BW4h9XEsC1QK9Nr7CWoUPmY3tkoyXRVmrS3Exk2nrY4nKm1GkmiJNXSjCNA7ivVv7Goys",
  "key15": "38XPrKXgWXVAoNL3czCg4YqHDreCr8GSfZhpnCSzVSn6m31PsBo3cHGP9qhEmzLw7NMjbMFqcdDBZGoyoBSFLjyS",
  "key16": "5qwPSKT3r2VKqNh7uyk4NNrFhrTpB9boZzQY8QNjHgGnNmvkvpguXHEBYUiDwNeASUf8h9WH3MdHV7cSWpAz8V8M",
  "key17": "4w2pGaji6qujGEgstm1csAZmGVyET4bphY4as7dJcTSXZFTndLSC4TsZve79JWZYWwTafmWm93mupAmYXvA9q9hW",
  "key18": "3wxbqu2sjPWGUs3Woog37BMK5fyA6XDApYkRVHhgECUcp8JCLEUmU6w2VBnw3ShnqVnnhQm3z9kLVZcey5H3E4MP",
  "key19": "5ZkRxzdTTBoQgYdRcpa9kkGaYJqfc6rMpxp16wmBUy18mEU3GA1aGp4gPV1G5FJAnKjb8t7AdoPEZaGdPKLax4iZ",
  "key20": "ppz2rx15XECEe8hYURoqwGNm63REWgA8LQBd18ctd4E5CX3zWv8XPEkWiFG9isYBmJJPcuXqHZznwd7p3yP1bXe",
  "key21": "38Ltae2ndn2aAa7etsm2rjSuVLyb1hSHvCk3kbvrRb65sBnodjDqaDSQigzKudtP7LuaEvV9Uvcn7TX1LZvsxVXc",
  "key22": "2cGNbZnX3hX34E6oHVUpgJtfaZQHdDzvJSeKvUWsmYeDwxR2rbM3LeJgPifqetptWdqixBfwKac87tc2rM2owyGt",
  "key23": "4krRjeKWCAd4XoxnStaoP2LtjnY9H5roRunY6aAjcbRPbW7AabcWYpGnJW7J9am77QaN968znxT8UK5ZeQVFtNbZ",
  "key24": "4pg21hoQPB5o2QbPASWXRMGCDiGT6bSrxptnHdbvzikQT9JqbwGvGxRFtxFPCxNaVNG8jFxG7CNn6Xx2UKteUTBv",
  "key25": "3bXnNEReavj28w2irXNvShqjnmLcs7Wkov2UGdTrP1wGQ87CD4BxbvnjCMMPdNeW55as4dhL4GVcSyaVFumyQ6bF",
  "key26": "7oYnZ4MYykat5yBHZ3pNAxM13QZwJVuuLhFJmCzGLknJM7wyEg3jER7LEcCWnmWhQPUjVADixaP6J8yLz3rR5gB",
  "key27": "5NAGnRFkfhRMQSdP8PRWwhcqQMubQXxdKXcSqKfRDACr97An9VaNTUGVhP1NZV3hY4bzhdLKSxuaxsBJe3EkUJYC",
  "key28": "2gg43DBbJD5FMMZeHvGYJQmZDKbBCDqf4Wogj1nq4ofCi928X8UeLcHofdwdT4jjFBiLpGGN7Gsbr3GXaypi83i4",
  "key29": "f2uCKqV7akMHFBkWz7ozHSd5KC1EagY3gogN9qcnubZKXRnQN4PNofZvXzUu6qdYgbrWtotWCvz3MaTMgsrRyMF"
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
