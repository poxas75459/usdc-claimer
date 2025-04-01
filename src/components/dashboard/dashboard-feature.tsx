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
    "3gBfSwiVhs8LDkqhnLNCYRJTsUkWFCoxUoFXWo326fAbrhJ2qbVm8DRBtHKb5XZL8JrWN14wP3h936qvGfTrzpF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AraPP75ENCU34yFqpci9sT3oo1B4hWKugkoy5AmvCjApK3aCpGA1A9h6tW1rmQALG4qVerdPNQm4NBJ3z65NH9m",
  "key1": "2MtqH5UgQ6j8Tgqarxc7bjEJjsScQfN2YYjQKynswGxosaHvwMs1V2Ktsy1zULpf2xgFuaLKP9tuBJnpw3yyEbeR",
  "key2": "1mbgUPyohB5Fp2bp4tKEGJCJAFyo1R2Yg1tJRtKPLApAZdxHzCLwtoYbCmgTeUu28eJ1YZc2ZhvKNxJv6Pd9Zi6",
  "key3": "2xQxmaDYuAcwUgU9i721mpfR5VxG22LKngJHnPy66LabPhU9JPFN2P3R8Cr9nG41J1L3ZdjtxK8LVVPG8D3gwuGb",
  "key4": "5KbKkndjh4Mt8pVBRGMsxyQzZ7DPM6T6HZTYnPykfhyGxHx54NsdQVnbHbD6BkdWSXfDuTC5ng9BGH9qYQeRxCYD",
  "key5": "338KfDSgMR3nA1zMh1tgucvcT4dQXeDLHi7UAPAnh4hNLWBF2AA7kNrJdh77CfnodhVninMj8MQ4WjPJKEdfSmw",
  "key6": "UG33QzQ3MrEZkzT78A52s7y74XfxzrhGYzVNc1sSs5RFp4PxztczxDwyE6CQDcaMoi7btTzL1RMcePeGjazu8QK",
  "key7": "2hQM2mGFtD5P7Vth6DaB8Z2b7WBi6XhyMimrmJaBQyYNvF2DPRmhZ8BhToYp77PtFXqsUmv4fPfJv9WFeUyw78CG",
  "key8": "2CQ93XkCEgsVswU7YxSmUKLWZ35yjFZzBYLhHTszpwKLCuMk14oEkvS5LhSBojhx9HTxKywuH8iRaAUatjhT1uBu",
  "key9": "5YD3h9CUm3WrRcThq7pd1tYjxmwVtntEopZaP8RMCjquhzSZDuBvA9JRuLTsMB5ZSFyc5WBkyUxwfF78xWSGpiJM",
  "key10": "2N5t2M8DtZZQp6XoHRAS1tAA77ND6iG3wKhfrTBvH52hC2bDE7929UTVsm7QJhJoZpBm87BwaQmtiD71Jt6Lqj6w",
  "key11": "5u8S8jQxZTwwxkUuYoTSRG5gTKBiXAxC7T7hNQLaNSYNKGMacVDEZhyx25cbmY19DjXN1ZAQrzoBpm7USceuq9jz",
  "key12": "5PJ9CJ1ZdEZs6t2Yvcsgu7xepHjKXgCy26XyGEJMtKWMGjod4BGRPTXzLpS7Fb3F97azukz1Y97Ni7vDRFAoEsXS",
  "key13": "5PzNQKRpYRvc3C6Kce1wEByBH2jpQBDNkAkviYmLqBJeaKYTLNfbh33pPMRud7FBwvvaDJYoZk71pev1tsdwa2iJ",
  "key14": "4Hx6H1a7C1jXMgAipY7HwcMVJKUaFwoiYjh1hx2K31tS8VUyGTVVT6hLUvJ7XPqMjj3GatxMaSeaTJEy64ozUMf3",
  "key15": "5Jt4TTtxSmUPAKXNpgTYjgrb61ainxh4QLR7y6CQsi4aakp4sRKZ77air7T39JNg5wS5i4fm4op383rhngHJ5HKB",
  "key16": "3ke2xsaERVdpn6EBQjzVHgzyVEvc81e8KRktkmsjn9sKQbJ41iWGFvppfTvKNXP5hNrLNihZpUvCvArvwgcVDPqN",
  "key17": "6BJ3YjJ19RJGLSUehkcEVTwoGYU1rK7CWmyV9CMs6ssLt8DsvgoReFtHcx6Ex3aoTHr35bRLJSeoQqb6iCLnjyd",
  "key18": "3W7KEYyAEijzpXSkrcSMM6Acv1sfT5mRbDyHv48AtKqhasawmzpmpKhA8tSxYtu8KWmwUoKCE4iVrRV8NWewY3F7",
  "key19": "YoznypmPoPreHdPJwKSGLyh784EiA44cs1PwSoNNTK6pk9KeZaKgEwVJNfozbonSVQ25nAzyjjivU8rkjnsuySK",
  "key20": "2cMUmTWfjZFQi1dRMJL248m8diLz8M29NomHn94yGi5iwxrWdA9fF9aZumnhoYYqqVm9pqdgRtqkv9NcJARXWgND",
  "key21": "5M4jHnhdVXscxMNu5aFbj62yHSHMqetjW9LApJQECqrE1BR8EaTFThuR1drZAYD4v3dt4txSKDN77WNzKPGfQTSK",
  "key22": "4RxZE5HFZk1EsFoa6raAppbPS1PCn2dyEm1mKMbs92suXNZUdSjgeaqHVQrmQECPiRAjp5nvbqodGr9Db729W5Eh",
  "key23": "34bSw71pjTcqv8X9ZF4AZUWPaX7w9PEkqNrgvJNkjXKKCdot8Cif97LuMQ1kPmpdWP6K6YxNgWCYa8SpTtUb4rQP",
  "key24": "2EKfKWtTfPaTE1bReJYjUaJQXVd4DtMYwVtimnRfDPYKD4FnPjzSKU1eNQqrGwjGG3ivdMPpTVquugHgh2XK36N1",
  "key25": "4V8CpZJQ4KNrtC8uGsi1JGntjWn5kkp1h1hKqcZp3f3qQ9iWE9fPGxhKwvgEvgLBwESDam95oPmhtB4YWJDHC5NG",
  "key26": "3FXABn5KNBJr4nJ2BgG6DLQVqodewmCAFmyBtLXjR6TPDkBZAPHNCqLhJ8DwpcPU8ajwgCjrzr8dTE4H73F83Tca",
  "key27": "SpG52d36xQJSc17ru8z1nakYzFJAMEMEpjaRD2xxPQ8FKadm7mQymqC6oS1xG61B8yVzCsn3VLEBfHP5pX2zzxC",
  "key28": "2tejTbeJSeY2JGeC7vnnXsdnporupuCJ4otS2E15ELGae69oWUevWNn5CzRMajcxoo8KD1wQvi84oTXZycQo3ddP",
  "key29": "45QkkjrXjpRJEJUn45K59oUyWahnLj3RmESgPoLqMgiWbV4ZBTJQRqTgnDc1ZRicV2eoa3VZY2tnCnDpEf6uiXTp",
  "key30": "ZC3vhBAdx4kS8PsQmCzGK85UgukxMrF5dmx75Nd1JmQf1Rhv3d5BNQu3DsbmcJppS9FK3WZNope37vo8X9LGQKk",
  "key31": "oShicuP1pzULKGiGjq5nLLHgkTEKv4kmXNrXxWHBBsoZSNEfsg9dvRgiEcRchhUrYgaRFj3zBS7kvruDw7MnPHG",
  "key32": "YfNJVyhPfHHA9SZvTz8iHozL1eTPgMG3JGZdQ3fhL1unCDCVJaxtqYGzV45y3HRhvFT2R6w7fCYHEgrptHXCZL7",
  "key33": "4njbXJxZARSLaAzezLYR2SQdCko5dAUwk9NADMduvxLZvc8tBeQmRpjhmxT4ETYRWoDHKvW39sRcyxGNSr72KKzD",
  "key34": "5mRREqF9jdyerFvNpg96txmkbzpkzoMtaeuLN4wESNFdbJfE5fjdfk2ccs2SFFqQMyWrevkMrJZENHe6UoszQD2E",
  "key35": "KUeRoT92t3ib1YRAxLARHkPV7c1p63iysHUaYX1P65HVWSQpc7onNwprM9pTY1dDzMFpjxGnUDMj8p9TeMt9hGc",
  "key36": "3f5tHqS6cjzpmE3FBW6S3kgpVVdMZv1JftZ5Sw8C5zQcMxGSwmLWavhtFcKDPk1217M6CBhFR78KpY7C9Rqcvuq5",
  "key37": "7EQLDtfGhw7sNx6ofJYUfavCvWyRAe5D6N8bAESMVtzocEEtkG5nDCR53fEHzEYoRupJKh2AcjYVAiJ1CYG8weY",
  "key38": "QhmLyLiTZx2VKzdPzVKc23DW9NnwQNNvbBqDiyXWAsmuyi8LCHeiQ8VA6nKxZbx4W9Rnukn7hi1Khm2VRch5f1s",
  "key39": "3JrGJ4nhcjYRk2zJrDCHGuM4GLm34B8M1SuQSLDPQjTA7QRzAyZYQEUkbooJPxCyKrAiy8eyUodBUzkdxUsKcRkU"
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
