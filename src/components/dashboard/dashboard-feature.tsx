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
    "2XaqeY27RNU43NPkCXvnxwdDeDoDcH3MvAer8fFqtBArkyZhGNfJJh4DKPpAeucxCEDkpXs8ESTCjmw3puQEjXVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21kf7eYqi2WKFwqfh4kYLRhoJywFrKDywUi63zPG9N8bm3RTmJJXjfM8nCiA9v4aiX6yfthSojvEMk3zRgCjag1G",
  "key1": "4PbMJFhGPmgTo3ow17JLRbBwY69stxv8uTsHU9uEY9GYqTupMJsNv4JdnT9Hef7muVjiAMzNYrpETGjVWuxaipgy",
  "key2": "3ztMVHHT6MM2BEP7p5QVFbGCTdwnEjxFwEvjndMb3roaPAv5Pog3gaxBSGQMqp7PnuwKtXRhqnM3us9ZGN2csoxP",
  "key3": "4hrmwReCJqWFcNSjyKvAJC8rPpjScVvmfNFWyxgYqfFjYGKPk8YYUwLzL3Xedw63BWk983dgWvkfnAYFwjb7fGXE",
  "key4": "2T8xHL3BkRo64hzAwQX77Qp5uU96pTD2Bitoe6MZ7h3WABZ8vMYoN5pMgTisnxFhHFtsRAj1rZbEqszVzuhEcPM2",
  "key5": "5sAxuTzpfkBEnNaH1RdSc9erRPH98STa4gBp8NCQQgZLCmkZ7QW14mJtTUXR7TtHdmQddfBHPKKVGff5iFMWj5Jk",
  "key6": "4qzB4fWzxEsq9Rs4TUEqs8bEuntRkdNcvi92D8QuWCca2yFBfpPH6XmP6Uc8kbs2VCc7BBYEfasw6TPpEtZEjCGK",
  "key7": "3Hj81C1YrRYywZGEHb9cRxZSSrT8nFzNgzCdJWSzLthbbxSznDHATBmJMWe6ce8dtrXM7s5pKDWpUtr9qgqXoN3g",
  "key8": "sUhjRKJcs8VsZVSypLh3uXuT5X7qmaRk1nhJjS3tEXXeZCpY6hTuR8WbHYza1ZTt3isPpFiiZv3Vy53Fdv9tBN2",
  "key9": "37BfPWPvWhLtVMo1v7NrsR47LdUQRLMoFq9ga48G9eP332T1jvjfEDaE9a5Ki2rsa1xME1rwX6T9GYs9FGMCcFLv",
  "key10": "5gAodF7s3rqvw2sPR7W4LTeWoZBkcq91DkyRfjD4hsa6wdzDHeMDbv6LmgJUwg2puRNqqmWkerCZQroYmX6Ty3oY",
  "key11": "3GDXgGwCUDvXZh33y5vw96GSvfpEVS53HAGNkejDs295rRQW2RW1vaMAJ2nbhBXzpVBAgL25wJjnnvsnBoz9AhJX",
  "key12": "9HanC2hssDccBExdDaZyEyEXkEpJmrnCKAaLP9NZsERRdysXpFcmtSVCRSBtwf4X5m1hJehUefA1cBpjKiitUEe",
  "key13": "2cJsWe5WcXw9uzZyqAmvaE1YgBeeKuJ3jCN4ajPJfeo8S76oD1DpadnaJ4BEiTdMoZGuZK7Vmhk5Tf8mYvU9Bs9J",
  "key14": "5C4vVxzG2tS1cRP7appzZErs8K5Wemjm2TrCetUnZNktCFxDKcvanYbnVDoP4pcvpiKHNvLBRjoZeMEdgUCLGSyD",
  "key15": "3gymmXKVxUgNtuVa5V7YGXq7cvHG5MsKjKeJ6ECUvcRqz92j2aduFvUW4ne2v5dxpBK2hVJPwoeLXXyUiLCXDDJz",
  "key16": "3XGe9Qg9fp3venLeMEdiTL3bEwX4tk822Hzw4xbYaeCnz2FMtkXjxhDEhgSHznHS5qwC2ugAoZwwCWozFEqhsop7",
  "key17": "aczQT1BFe833KpW8DKtoHjiLhC1NE2KAZn1uR8uzs2X1VMibE5KinUBivoumRv9746oRpuTEFgnxtSRJjQpzRtL",
  "key18": "5mfCqLTwi98BGyGxiEk1DCCMXVUUyH61YA88FqyCmt8RpVvj8P6dZaF8HfSbnHrbzJGXKhE4pBH5ZEtaeVtDHjf4",
  "key19": "4nkLs6kA51g8xk8tubm1XqVgFRZUo2oFHeet9F4ffZ8jYSzsRWpLafCs2EkfeRh11CWLB8ZxofBomq8xYtyfdUsS",
  "key20": "tLp9qRNEVP7fNrd3ReGisW687eV4fT8s254DmBB1binAXqNM5LS1uuNuBtkQypUCsTJm1P8YHLHgk78XMFNdnji",
  "key21": "2i2jZbNYwtbBmtCUKx4hkphT1VRnxF7m37T8BdnNfxrRRfQzNupum69FP1yTuECpy9tGVXv1Fs4sGsvFiZk5DDad",
  "key22": "5dTDZTpHFcMbQh9JNzzvX7xckCWZm7MEcM46sb32tJpK6V5xyMFmTfA5j31WCznZ8j2eHrhDWVuZQtaRHAfgxYvg",
  "key23": "3bNec476Dy69XCzmj1cpBh5Phd1cxqLsYeW6PnmC2GVAYH8z9R98oNK6YvsByiboVuLdRzhtsjSeMhYr36M4bczS",
  "key24": "KFGE8i6sib7LDueN3VRxyhsbNSp58s6wpVEdrz4T3Po4nL9DGDmikYRE2ureAy2s3MeKH5CM5VNvS6JRa3ZeJmX",
  "key25": "4k4jC6wFjvZjWUTsKFBysfqyqULTn5YRDvf8xzy4MKkJ3ZrCFky7BDkoRzH5LZN8e6hgGbEV5mQ7iScT25wjhLN3",
  "key26": "4dBxzQX1fabBwMvXQ12TqoMebGX2a189PJUhnP2CQgU9MmeRUMNLesxSaAgVsDuRDZgPLEmbsuRe4CiKxmCg1tUT",
  "key27": "3nMTDVwLpRfYXWxCPQLvwL98izrBPv9zJE51TQqt5dw5urNghgUM5j9U2H27kV4LWvwjzBHpScjM9BfpXeQ46mrP",
  "key28": "4R7rwdryWJ6vf5uzCQX3LE2yBcWE69YWNcPhX9zSFqbM1HHFjRig8EvM5nf7cfKUUDSLkmTEzHjZVJP7TwqkXAcu",
  "key29": "45kTFG7hog7SopAHKqmLnu1wuP31JTQSjDoPc1zAgveF1YuGLfGsTJY5JPFBE2MaxTiydMFJGHjpSvY7K3ywi4oe",
  "key30": "497PN95Dwc6pcnm3x9KzLJXseqn6ecKf8Lrc3kqVX5cnqVbZtH1kLkqp4PYaSCVKsiRtjsxMwvXdLDBcEdZb6qZ7",
  "key31": "2Mbs8FgPerduA38pHPUeCZPzPGnLyeKtT4D697sqZGx4X3SoTfD7C3Hgr9T5enz1DTqMneH5QF45DWt3zkD13ECW",
  "key32": "5KztDYmKycVoyVXBJDjaoW9oNgPgtC6n7aiQefb2EJA55kYmEiieMcLPDnSqut2BCJyVHV11UTrnhDhLD77CZxDe",
  "key33": "2KLjVTgs4yYe3w2wni1bd7ghssrPMmrApB12oofrp18dxY4DbCbP9sytQBpyNmexQ7k9nh5DyJAkxuvdLRyaB1tQ",
  "key34": "3DSRNTkpvqiNNbQYzvZpg3fw5kVUm1GUH4JnSN81NkmhYKfYsp8xyQmwYgsetT2dXqbaLUa5bgbzsqctSJg7kJyR",
  "key35": "65z1rbB5DVFSeZ8upwyhnCytCgU2a7u37vYrDC4Xh7tyJEEH2qeQwmaN6uhK1yCdD5hxzjeFkfXFHimqdvutW5AR"
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
