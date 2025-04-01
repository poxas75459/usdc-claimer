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
    "d6HzCUH39rAYUEouMnWq8CUc5jkdVovcms3pU1uZsFZpPrgGmAEZg4R1GT1kyYaykiYWQ3okvZQHWaGY5KzwdCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jYCK3qCfrHF9ZjUP1HjSDnaJtggM2cLtgRp7WgsfPi8p9pfMu2v73443iBGUp3FDdJNYyLxQYuSUSKoqUujTLQb",
  "key1": "3TQSQrAYwL1eyhZCjFoN3wWU3bTgecmaxjAvtP1ZcU7L1NdZm3nepoyp7TRZm2e13Mo1fLSLtihgqM1pZxFDBw79",
  "key2": "4a4rXpdtjdx3Exxm5aqY2RuknDFMhiNvnuDejE4MDXJw49dzXW3AEELeZkgRm7iuUVE3NLq8RKtchDUjhd6WgmcP",
  "key3": "2DdKnPvNC56ahrqfPySG1hHDJrChnsCdpx1m4thF5Xs4cSf8og1Sq5x7pJnhoiVnEztS1A1dFWjce3DGeWoKpd4T",
  "key4": "64Mg7G6cs2UGjKUugHLPybugg3QGfaWHwXZ3VM2pZ6LkbvetyvnzPJEqUi26oeybZ4WVA9yW1NqYr8JicGV2Kdaq",
  "key5": "27XPShSEXjL1PWTJ7iLEUCRmyUFqSJAHWRpxNZ8bKpw5HFxLTsQujJ75q3GszBmbN6G8BeovXVFA9sjZBtkNPc9a",
  "key6": "JWkFjuCGEG6pPg1PvkrcNHPWkN8qnQ25TKFTJeF1U6dUZuTvK8UCp5pCN9pc6bkgqzEkKu8AHqEbyAuSsXrYoo6",
  "key7": "2Tp2F8ti9ADRm4AjkLiPfhSm6znP3ZdyPZ7SzUWkko7DWxESNEA8vAKNWnaXc3Bc4D8W2nNtqgehrbbJhrjt6Ja8",
  "key8": "4N47Bv6H4ttWqZ2NK4Cw58da9LJ7Xrf7t55rPGCcSJwGNAiftuwQUYjsd14p6QceUgm1CJ5PxnBqsfN19sMThxJ9",
  "key9": "3rRXJX79ycBXc6NtZHejx8dpoXgmdpzZMZwcsmbEax2yNpokyJhLi1yRFWTh6sMCfUSx87sEoemdv2TC4cYapbVs",
  "key10": "2BFhRrfX9y6RHSEyfut8maNhUJVeZGmPjQtsq1r6rifw2B7nmx4ekFAdby8bumvtb9SMQyHc4r9cpKd3Txxq3X1y",
  "key11": "3qqir8m8bKLUkVvcygxuU6d6Qt1VTgHbuZ9JcZtBW2BgvqXC7L1y1cyJ2BS67Kazma5vKzu58cuSLMeD2pXWWUPv",
  "key12": "48vsznMtbn9ZeTMU4ikaNyvRD6oXuqupYsTZiRkxGaofujpcbipX5oqekrBciEat6dxBtjoen1JZDTySiRSwS4cH",
  "key13": "3CMDsn4P929m7rjJrG8E9trbc4GLeqT7ghRau4jB4peA1pyCBzKkboV3VKDD8swk7HmeUwka38h4XozPHAWfeQcq",
  "key14": "4WUgL1tpTrdcevQVHDah8QcSp5ML2FoYBm5HVzhE8axQMRTmFx5QZxFyRzLjvdHB73oSc1o1ZPYfozsARu8XheCX",
  "key15": "Xg1DgCRScT7sYGsZwcpdTcBC8C565nQMAHBnErC2pUEiDoF9ySzncvsQ8nbCvXdj9g3rZ24sTKDftEzwnng4efz",
  "key16": "5WYGnn6jHiNJiNqdoFG36gUBtW7RYHkj7LnW5TvtdLFb8fRXKnseWJe5bqt2JNFJhQTib3GF8MF8j7YPW6n65ngd",
  "key17": "3SwkY4RztmLLbGRztxGWHE3PTFBJzSkcygiZDRFBVYC73GXyPr5D4tY45FLq5amTGbbd2CxvMuqw2XjA4UETPz3K",
  "key18": "3JgrTzxEDebHRQRWzEEm6zGWDrts6A5zaNPet2R3RjtxRQgaY6bb34LKwN8BZ58RLMXcFnJYRUVJeG79zkSs7BnQ",
  "key19": "5MHk3X7RLno9DykGDLamD9KxWARXxeZpvqinGCozJ1YDspA1b5NazU25MjNMr52f191jt8WSZgTZWR6m2DCRCAYs",
  "key20": "48qnZWtr2HctxPcxCvjwiMzkUxrmCqZgHieXHRaJocd4PbJMcCj2MuK23TCb2be6WpdRKJSMdkpc6Q3w1AQLEjAz",
  "key21": "25Epc9NJmCwJ82getf68bzmBZ8BEYDmsB6cz5DrUvAswMrZZ6WvD7oAfcPYv3cer4ucGrh9wBmYDfaD6Qb1hBydq",
  "key22": "2bRjFpqMB4Y88GT9UBFzJxqP9VjxSu2ihJhXsaD4T2yMzi6kEjvPNYu6N9DCwv3f2V3DPyh1opt3JEBEoe3fUCd3",
  "key23": "XPYQBzwTgbTS2uDwDado1e2GNhVaRCCTvTMYHCFN5nzcTrpQ6iC9KW5D8CZXf6m9SFetNqznBzD9fzoP1UXGDh9",
  "key24": "5WsBgVZwXaUHKDwpa9NVnGzCgcREgsNMo4EBhbYCYki9vc4M6VUY4j14JCWmHGxRpeF71jeudf1yg3JoVCmdUJJj",
  "key25": "5kNW59hBmJ6fCsUcDUxSgQCCJ1qjGhfiuYemxPyqu7gbmQM2qLzBWeaov4CrputULFwWSLxhhsyMEV6w88i38xpi",
  "key26": "4j9VtL5QNcnjmyWRX63roPQ7KA3XgwyfwFPF5q5EMaki3gxfjSbVyhuh23cRFzayqFQYr61JkhNmvrwiuc7JN7zg",
  "key27": "HRJc9z3Z3Lr6cxG4xQ1395abhqmirrXj3fAm7JZWTN9Ct84Y7CHmiwz2KRueZkcjdFzCb3dDhTUgufJRirSBDSw",
  "key28": "4pcYM5bPmM693WjjrUeAx5sRoRBK56MQTziE436sxLWcRH1JgLTpzZoJT7Dh2RDUz278uNAsDwFedujjEwT3J1oM"
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
