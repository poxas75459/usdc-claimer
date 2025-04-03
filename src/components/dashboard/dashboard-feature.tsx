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
    "ZSRZuttsto7HKusM1bJ9JJauxw1fvvhxczX6yaSAtfbrj7HinpRLciS3B2iD1kLX53AfTPg2N3h7Y8ELyE9JMbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a2s88qRhF3bx3dtoE4r4dZBVxFK4vxdSExfhDjFKJrSLP1SNnAdcVtrn3ZSNT1uvrxfSi7Whpd6LPQaJcAbvGV3",
  "key1": "dTDNaUnoTDvobcb9A2WbZtuFMS8decw4CorrP1qoQs1oNtomikzSxN8ZF7voZgjmGbZfRq9uatrGGuZPCALBHAa",
  "key2": "3L7H5cjRPNkZ4gpE7DriNNYebkkHRFz2iX3kfQREKFx4v8krqx2EW3J3cHDKRjgWu8APtvjvq48jDdVSnzRQc8TZ",
  "key3": "3dME1S472P2dCaYVHhFA6uVhwvQcqa4ELDJjUX2S5Tk8KhHoGgxFkfbGztdbxxAejYJocrs9XKHTXPgxTkqj4jCF",
  "key4": "sUNwVxFDcJ48SFRTdqu6tg3rPq8MYvDGL4u77bFd5rJoGu6KuKiutScwebyPxcYDSRMuv1CrFxFPYPwjqLM6mbN",
  "key5": "4ZkitLTnwfhx2c1S3G4yM1kZA5QocYGjAYvpFz2kyxwJMAAX4abtTMcubBYRf96NLKU5yDVMPriLkqUTJzC5f6tH",
  "key6": "Q4wMMjTJFEtkcntG3eJgr32AVhVj8pskQP3yFgG4a2tKNQdpXeqwg3dBdw2S6y1yESmBbkWgUjNp9VW2SMCEsrG",
  "key7": "4dDJf5ZCXqoevzthbESrmhP35qizWfRC18WKBszCde9KYUpwN3PfJBA2jPaApRVzKjjvtYYayLCgfmUnUK8tB4oD",
  "key8": "5VSDG922wYEhbHpp8KnwgoeFhm7m3Zps9n48WLcxyXvnop5HEviX3VU6Ufz2YuRZ7e1TnrHuFHTdeU1qcmj8hgkn",
  "key9": "3jKBkP6nrbf3tX5m7kAN3Mj3yZJNSJ45zcxCi9rhf6S2uatNykDWW2TA37P3SSHK2JcnafYzYWv51EWWj4SwMSd",
  "key10": "2SY3s8U8mAmjjxPZWC43jAx9V7KyNGV6R8md57Qcs8Jsksgmb4Y9nDehfr5sco4gQd2xVKYgjUHz8M59TJ5GTCqM",
  "key11": "4nUEf4YJMBCZ298mqnKGN8qWY4VYRjTAM49CvhanvkwWXES7E3fXDzPiRspfLYkA1Aq19ziPHMWRL9zNiDmHpKUA",
  "key12": "4L52zE2DkFS2NBJi5oLaAtiz3zBKDeNELqGscXTsPaTR4ou9YRYWGZYVUZ81wGAgxh7SDDiHQX1zpVLFTVgJZrGt",
  "key13": "3P2WAtDYfrkXDKxgiEcWWYp2x4sKfTxUW6ibamuAFjtnP2PungX1EJjpwwDG8UWMG791eHR4MB5eeJAT4u8YB6BD",
  "key14": "4DuJhw8R95St8tkqB7Dtv2UALpGtzNv3a5xLSpc68zjB4iMZxiRamJLLie3Xg88cocjFYHzprRiVKjgb5DRitGRq",
  "key15": "3FidDnkACd8GPX3jdZvWhrkwrixPMxbL6Syfp8XKf3QAY7svD6tapcEvtnv65tB6jfuCuTvz9pLdnHh7tramN4DC",
  "key16": "Rp8rPqBKtW2YMZPCdkoPkbByVFhV76bj4sDkVxHW2pK577HJfJaemFcHSKCgdqnzoWur8vuLsJkc7ycZqgzgxZA",
  "key17": "675botnqFvMYfLs3zKqZ57npQBRGZUQ4fcWWsoUFXDqEZntLeE4f2YcyjZZf6H7UVq4LtYQYAfu6jXaoGF7PoRkd",
  "key18": "64dEYv37nKavMhFG8vKow1NQXyhwkr3TqmiuU7F92WKuotQJa26yV5eG7Pyztgwt8Rhwui2b6tcHbnUNN8W8XvdM",
  "key19": "3LaimNecFVxDy8YTnSfE3VM2MshaMkcFTz9iheaLxgg3CK3AbnVqcEm6HE3uiGddwfFqbziHWLJf5in8aWqa4AS4",
  "key20": "LTmXM2ydnramDwizcQEpMCUfhpDacrPV1eHUuDpJqaM4CQmcPAJU1kPqLM1V5bjRaJDUfbdToRj2NzapVPC4VdE",
  "key21": "3iHx1H6ouAkucwKtYHfvK9G5EKfV5h26DkgVpC6nJsdJAvAxfnDouEZaBdasTBVeQLhJna79qNHEFtV65i61GQAY",
  "key22": "4bReh1jntJ1pZXMrPNQkBKbsNQMFXRbkTVwfnMdL5EWbaWpWqtrSoay1oi85NHxF1nheZPkSYxRn8wjcUeLfrrN",
  "key23": "3y38NZ2Pa7zKUw5xc94dPfrRkNyywNT16PwCesLWC4XnzLmqzfmpjW75YEYJ7hHNf5GDWR1fWkL5bfiamEEbgb65",
  "key24": "3HsD1BD1mZ2wpffskvNxsctbh2qw1xEcyjKjT11QYqGPDRNRraV8AMx9hpE5km93DSPnXuCUs8drjz8HPb9XTdCu",
  "key25": "65pXTZzCi7jnB1aTT2WPkn3i6E5KvpxXjcwkq98gaRy7xF7tS4HG5DMQftJ8H3Ek9bwCQSxHsThLuG5e1QKhc8HC",
  "key26": "3nyXdYHuptwB7TTfn8FoVvSuvesiNcZQsHt5FY2Mi1Z3r45ZgJhdCHNTdfaM7BrRykvmi28bCL2i7y68U8PK4C28",
  "key27": "d8gHyxWbe1XdqYaknjofLJJdrYP1xuqdtSkkEejGCNu9j75W4FFyJjtx3k6k2p2SacSBeKtySCsmTcAwAadNEWc",
  "key28": "64rSYY9B2TvvM28dTFquZnaJPYxeAtuE4MQxCCHjnLxCUd5rg63tZLPmNQZRdoyn1NwgSGodPkqqcMGkCVkppHfr",
  "key29": "7V8fnSRrDkYAXAmAKHUQpd8gvTXaN3HgNqAZi9UMmgp1fpbQRYy8PHf35iyf5WCYSZJBAFKYzvGmM5QDpvUbjcf",
  "key30": "2WqzmTqDyAPYWS6vM8TneRBHNFfdhSMJZQYFPKnN7LECXwuDcG12HapMg274DGBkkfBvvL2XLGuTHJnYwiMMapsZ",
  "key31": "3J99de96VQnrBBHQ6WqL2G9hiYDRVwmfV5fhp3NtgvzbQLRSQeEfYyJXjFvLbwaVqAK6azN799forGzr455HpyQW",
  "key32": "XvX6D51SEr392NKUCHrVW2jBYuJwBXNwN9de27bMvWaDSt66F4JkLnM2o6QU8iZaKpFGCCfShKqRHx3R6tzLQMq",
  "key33": "bUKSdzqGp7RNwFwFVuaLJGkGvBQAhKhGQSWkJAwQc9gYaFYj7tJXZLiRjchAXtoyYmo7Xm1AkaAo683KD93GXU6"
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
