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
    "9u2UCSK4fxnHpXrcb5iXBqAi4DZGJgbCV3QiasWmoQdyTyXVudYbFrESiBv8cUB17M2kee8XjNkGvaWuFT4NPEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Du8sVjxesGSqnm2fVHLLY2evRbeVieHCTwiN9rA2ELQV5LK8GFSDZKSgyDmTEBCJKMRkuqKsmZzczuk2AKgnTy6",
  "key1": "32bTCLQJvzjzhsZvUnKZbKz6BddzfaZhAuGkA1K6ynonmGJKnNL82NKFrymKFbNPt5qC1fb91jyy2bHyo2DvEux5",
  "key2": "5MSnB22ZuE6j881nPfBwp5vjWw3oLZct5gYmN8JkesWFnkza1yc9Tfn7hY6RhUMmnk4iFhJC8SSSN4jQbn73Ea31",
  "key3": "5Nz46uCucFa2YBVr5gwrbeRy8JKXRE3GJpvZs6YoTAideSepB1qyx7Pp7pexG6vGAhuiDtAHT7ZbYNRXt1gG4deA",
  "key4": "uYjcU4sDdqbyTcZtUirFFxQqYmKuNJzPq4xbHzWvJSpQQn8s2LuBpddmaNjxmevzMBm4UuDTxMNigi31VM349t2",
  "key5": "3vaR1VYA7co4KkGXw4np6vLmiE2sjz79H3qgXU8XDNxHhKhwyAzzSDbzuaNrMCgNVpJg4QLV22PkB6zURJPojB1r",
  "key6": "2wp6BqBEx7HTVCUKsG5xjz2qG2STs5Gh8Vn5YND8nX9PbCiR8JFB7F3A8MKTDqojbFuR13sn6yRYxuaTCAzRyAgh",
  "key7": "3xfLgqpQEMs1NTaEkm1iY1RSMD9UZxuY7SdQRQckXbxRr9K6LvC7FKk1ViJg46kUKXNybweaQau1f6JyMySJt16U",
  "key8": "2cENXnJF4PeznTBR1Zj8c4AGwYPCjBTCaqt9YwJbAxFv5hNg3mHRzcwSKHvhgYDwn7k8ygyxEPue5KhHFpPvF5mA",
  "key9": "r3zt5P5t9vYeS2odjCXyMBbhYgaSca8aXtqEhL3qx6txb9SxXneqrELqNLUWbUT9LmGzdMGc7tsGqqDGEaMi5EF",
  "key10": "4GVf8i2VNvLMbZciv72oxgLbW2rtEzth71YBD1etEtQZbhDPAtvNTwqahe6WQMEFUkqi3QgvbdpnnoLpJuXgPuoo",
  "key11": "3J6b8B2oLc2Zpb6EXL3ang7uVTUPw3KDGKeJPhL4593bgHnsbSTr2WvMUji878BMR2hgJ2sYDDgEgmWApVah7Vvp",
  "key12": "21D6R7CoEjKdFFMMoChJUCX4Z8br4LXbsdMY1fYmQSJDqwrV3XjunysyHrbnmQ6P9riTvyPg46zhRBK5mTmSFbqp",
  "key13": "3NxPC3EzfkMEzJdgkcVmrnbTCAMDjb3hG7gxmVoaTsrpascjF7Hnz78rV4dkKbL5mVSV5HdU7sTWXrhtig7mdASe",
  "key14": "3Fk2eL568nrzoS1guzbrgqydo6Sivq1nRttSxksDQPVN4WG8xwxcGFqhiJQqAqVD6HjuUHxaVSYouQrdNKdbW7hY",
  "key15": "3eHammRG95XmGhnkMnq7kJSoVGJc1PBveeHbV51LE9wRb49pcCtut6V4rug1rNXNEf3QXQqdyNJFVMGBZsr7iGfW",
  "key16": "3viMqyhr5cU4MZMweMzCLr8wk3WoLaPCTWaM3SkrL16YZymLvDvgYXWDhKnStRjvr6Kd6ayRZF6nVez4N1Xn84vx",
  "key17": "4CdiRGde3cTtSLVCCwm9ckAV8ZbYuivDRdr7vchcu2tStyQ54iQvE9w7dYtrc8NGEmwX8btZVTY8t1Pvagdgt57Y",
  "key18": "5phebM1CbWTgUDazgaD1q4oHCpuTcHpJwMUpLeY3DbY1hhn1zFA4gYvuYsvpgReaoA9faqJSThTA92irXmi81tpV",
  "key19": "33tAEsjDS2TiadVYKYDRdqe6Xr6QSPqRj3HV4eq1VA9pViTofBsqJozC4q3pde2AHRAw1v1A9vcdZy7Pr7HcT6RJ",
  "key20": "HzotDaPkm7kduicP8wVxXRHNyfw8YEferZjfLiBTnjx96wBNgiQdjTS9qGUTeYfHhxnXyvw3rPLZVUCBDbpaxhx",
  "key21": "5EhPZqQrqbu1A7n2Cdr6HD4rzx87y9CXLvrWTEunwL65edfKK92ipNgCRAJ81nhf4GWvpzwk2rzrX7tn58ztxJgD",
  "key22": "5PFTHQsiK3RHizqEGvF9Q3MUdpc36mJipziHcEPixF5jG1inqd35NGHXecUPdSvL5vX4oZZxnq88HYb5N9hgsgdy",
  "key23": "3rDJYNXwbdzqcH5jedihPXFjnu73GftvVWZ1k6P9AYwfb8Hz8qFS2a9HjWqaB986mik6pGXzshNFKgzXEjDChLxm",
  "key24": "3FB5hBxdeUbufpP9XujqA68yz4AMSC5Az11ZpemHeSNacr4pUw4TGVTEUc6XaBwxYsHqwFVaMCdGaZC675mgcLu5",
  "key25": "2rJw2MAEQZUyNBnH6FoxonkoQtzUJ6hQzSqVUZVWo95DgrT3wH96t3rqM2QBvyXosVmVrXw6MoiPvzGAx1L8YMbw",
  "key26": "2H6LcKeSPo6ZZrBRkckQTbZMC3GBpVKYCYL5hcsjAHAbkcUpTqYjuYuGrDGnfum37UkncYh4HJhSjHc7AfuWWLmj",
  "key27": "5Nxs3BS8s5RLGAJo9oG7jYroC6EPusazQLQ6evXNQG8cLUob1vuYfR3mbrsYoo2DnfpgLHVrtSA8ff4xweLjGcdu",
  "key28": "1noCJNPkCfi91niTW46nYQhGq4eSxb6aQE1TFGkxgYwqUU2rkNf7S5cVo3Cg8Lg6wqyiBYHaVeZ1eNeMXJQZsmm",
  "key29": "2HGWTFsnBAzNE9QJZFLvCV1McKNeYr26TCVHqc8GpkRRruArExhDbqEM8xSE6hhur8Ch9aFhyposizJ34iA2sB51",
  "key30": "5gYHazg4DhkbMmXmFiCTu7E3MYPGDwNikqSvcaXsmUEDvtCZ23enE5fBcFZFUVpSqbVvnyaE5oKvfdMcsnn7eGt2",
  "key31": "3QgJBp3DqKju82PF2Pn3x5J9Y642mzYFREfZR6rukBrM9S8FVnSJfypmZHsimL37tT5CwCihY3sZhasiy2wgKQ2d",
  "key32": "3UYV1fBG9MZJQbx3CkGqfGvfD8EyR1nzDAMN5dBU9J6mKFzk18MExyJDMYZurkVZaPw6QEe8yKB5huZfQ1jJQjGX",
  "key33": "44S7XMEcvjPQaDAwvKXNDX6HLRxuTpYsoYMR7PaXCeKmkvaKAhJR6ggNDmizWSvdTDjQeUJ5Z51xFGV6FGdt1Hrp",
  "key34": "33K7M9MvYi4qHM1KQmZXSNLgtAZ4APJA9u4XR98kUNukcyxSUGgBjdQKbigePiU4N1A6Q9yey6V3rWFrg6U3yh1z",
  "key35": "1bC1EG7w1yGCxKNr7uXE39vEFQxQGm8XtPz3LfqjxaCExNoxLpArp3yAdwnbyZWf6dy4oBVQPz3wV6jVeck2eTk",
  "key36": "GvrevtDZTrxfPaTeVBszFe1eLrpAVQ1ptDyguPuMazmtNbzEoagfWGmHrPvgJkpefxRyeZB4RH2RDPQ7E7AapxG"
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
