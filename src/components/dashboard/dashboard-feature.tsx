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
    "54fRE1hJij6yNvcWCbxDczTm2Qh3W2uTwjCXugPMTNxCMoga4c3o4qzgd6iQPGYHXcdxnAEkfCcPdovXkg7q26HS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UThCdN5nn8LxqjWSgBbf9tQGX9uZVA4qfx9hMxBeKheCs5KD1JKd911CZGis79SEyX53iNgZUqEFSemdMWik9qR",
  "key1": "2oDTZiDU8p9yyVANjPXmZpTCfPE9KYecRKtdnzUMLRsHkMTfrVFoJ2rDm1P8iuZ7CYJki6asgtSuJ12xwEBaAkXV",
  "key2": "45VMLy2WawpD3QrctujZ13eZwA3E4RbYpJ4WuckA9R1wbDGgdnXmwpL5LZzu4HVytuqRSaaAMh15eoY8eh13u71R",
  "key3": "39Md3qjuhnupRrtpRNiKCMDaUke87NHx16RMDJVuyyZvpPvDEQFi4U7RAtproHxrpBnhSiHc3TqvFiM5piyp8gBV",
  "key4": "3XzFArqeEPBPpvPDbW9TfKWUrR2n9zuT3SYJdSMd8asHZh4mzgX4KJUcyAWKgBJxgrPkLwDb1uXzWhVVmKGiubYU",
  "key5": "9hW8ULn8r7UNAPBVSk4a4RBLkpHBEVo8pYfePfEtA3epoiRQPGq6XQXn2CHg9ocCMWcdfioXx8kom1mafTQ3P9w",
  "key6": "3tKU7EYaxVVKXBdWia8NcBydSPVzXkqPtG8DkP7SXQUGAyfzkjsggKXnjNNSLT4kB4rjfLqWXQQPxxiMkCaWpUUh",
  "key7": "3ZzqyEJeEuCEpBv7KopjCxnv8VaLPZb2umhJGjYs4m1DZMjELbEM7h2XXivWPZvzD5TcT7FnC5SdUuhMneYRvPTm",
  "key8": "3pKiTr8egjHTTVrxiRLhSREAWsq6tqGpGeeJtNUaW3LgcXnfXL5dJegW1eHtC2VRFGp1UvshebTctm5UJzxc8VTC",
  "key9": "4LkLivREikujU9ngmwHN99zYEbEtF6E1WaUkiS3LCgA5YWperEFciDkoAJg91FJxgkR8JdecdMBd86rSjtDT8swU",
  "key10": "44SjHUfinieK7y3sByednZL4dPLbYytnbtRFCDdbbk5KrWuNm8NxQtrzzJUnJ7ikDCqoXtG6QHj3zE4RVGsfECiY",
  "key11": "38ExsJtkFxDZrLyp2xmqEV2FepLjEyoDYKFwSkmMz52eDLuCBLdwfeRVRFVsuCVyFQcnU8ZWovu5TLK2N3rMZX5n",
  "key12": "2Rke3QeG1kHGYgRGF5fhwZot8Lbe1rsXm343o6DdtekTaPW9sM4aHZkC2gYy5CeKgouBj3MyjEsaeZPuaeKyzQFU",
  "key13": "4qvXFdb4iTDosCy64yB9y59dydsLL5Lo2mJucGRxV2B2fv23VL1XdGz4EbyzJ9AfHoQLdFC1f4v8JRe9jdw1NA67",
  "key14": "4CWfJenryE2WbFh3q3bktBe2bnwEtoSS4wD1aEXJRy6VwKkRi3GB5ALTbotyBvj418VA7X2oRp4Uk5cgdrZdDFFJ",
  "key15": "72kSQaq98KsvXyL7hidLV1G7CcvGgMeQLC64iStmEgMN96jbcqhP3vdaM8GjE1PpM88fChnZ4s7qiuZB16DmqXo",
  "key16": "2B5bRfYUfqCqxH2XKWGxi89JLSXZnwRhHowV18a91V585N3M2edptSmNJwenW8VYhJ1agnDUVPT6F8ZtHMNJa7si",
  "key17": "2J35zUrZkcRxqPsXjp3fDasgS3S8orjAR6o1Xwc4XAF98rdHHz1j2vB9Ns4XFRNadQLZeXdVBioBojCJpaUAFSvD",
  "key18": "3ADp5wuDbwSaLzAnAvC5eZKjhHxsmFMc8Wxwb5UQauSfPu7tmHzJNbaonUYKiLEMpB5o4eEYYzLfW4MiX8NeLzNT",
  "key19": "4vUk3o4YTFQ6HoyBgc3GBoPBngufP5myRvh96eHp6PpZ5hTB6K5NeP99HkkniU99u5byMVhdhyoR125E658J6ZGA",
  "key20": "3XBWqP1mjUNvZyVd2shNntXLwYgoc4BcBtcYHdzdQmPsUponUKSFTfjS8mzJfULrW2Zi4FbEsyduY1Mu5QKBnnMk",
  "key21": "hAJAQNvjP5L5wK7iCup3cyRFeezQrbRZmxErpSnMpHfY1Ljn1KREweS6XmXZbaNL9BLXZeEMLUTJn6urCpt4wDM",
  "key22": "VghJYXesVsashUi2HdYFvdYQ6rmdqCwnEeqjzEeoR9qtZcgJexeAJSPW9gjS6t2Z6Mignm83AGRQD4HFxGY89tj",
  "key23": "4iT3Afyir6AWSFRpnDBQENPnStV7iNQa5i8u36b5xjyp5fnv8ZRi1Rr9SonMaCrUGVXWfSbQR2d5Ee251brC2R3d",
  "key24": "3F312TJsGinjdmiEiPkfBv7bYhcxM6d5JdAKFPe6SrLLVCNW48iru8xsjkY5mzkNEmz5qMcmVDctumbWiAdTs9yW",
  "key25": "3o1sKaeHVMoorzYsHtwyWSRu5SpAiJhBLHTYyMVGfrGCszxPznNKDFzNWczzzR6JyqdmgJQpjuVZPJzvB4NS4EWn",
  "key26": "3rg9QdFp6WMNCusGq2vXxD56Gou7i6xuRQy2118FF5ugF9UPAbGahUqYd8Q52pS97EdgiPPikj8vGDE7u263CAK5",
  "key27": "4CsGakSQW2zgnMfVxsGiLEnPPqTdSNS8dURt3JzhiXtoUMTCFurGX5n3C4LWWo7tYrFiiEEiH17kjteStPDQscXm",
  "key28": "5if89Rd9N7f7Jkn5fAxghA1sPnj6V8ZbuAYN8FF2mrQkAQ25qPXDUdfKKLUbLZJ9F68MUxmwcPS4i93q23anptR7"
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
