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
    "3Ggh56e6U6vf4vnQu1saouj1QcL2S1uSq7oevGx9mqQ2JrzUhmsPKeFyK4bY4PyMfWVDCsEfBp2WmGHfJbCzqTUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jd9c66F5S8RCbvrn9Vts2jjotfEfPKcxB5tWUAQxnpKb8qY7f6AnwNyyBfVJj2sLZSpw4KGkd9YgCv65dZAokXz",
  "key1": "3rCmW4EqNpbw1EVxhL3wEGaQH9j9RW5wvETMHtiDP5WSVU5ffUG4QKX8EBe5HCCTcJUeGjUT8AYoWq1VqPwobuQJ",
  "key2": "4xWouf4nwQtLMXzP8e5Sw4pjWEaXdBqU4zXUwpz6f8vBRSeUEJHd3LZdd6weQR6D3Zxi1Y2e2M2K8L7jDj6yCqAf",
  "key3": "3sQ14CEssw4mxZjoc3Be6JuVo1dYurq6gbSpcLF9AoLb7beYeygQ59hcunAa54akrLYHQ22h5v1Grdpo59TAGz7F",
  "key4": "4WBnCXjPUrURh7Yh6D95DTLXyLzcMqk5FSWUu61SDRBwCkZRREoPYRfgQ8iF95HJo1qVxiVGPXPKhMdvsqkp3TBB",
  "key5": "5D3SzwFZHmR2iSV7LQqudwsAaFQGmBFc5m1MPkA2nEMjaDvKxRa8YLi7f63a8WcLC1NSFwQiZDPEnhWYf18HN7Ku",
  "key6": "2BL4WogVjhpuuqFgXCKyJ9RDKiGzxVkqt2JUjab8w2P8Jnuz8GH7E4gRT1FajNDaoAJ294Tr6uDTkW1134hd8h3g",
  "key7": "5H7BrHLNyNxJvRdkJYW4CSmxsLBHRCoWS2mq72uvurwiZRngY2oDctTVtssfBs3yUbVt4JjKMTAqivL1Qsyc3EVV",
  "key8": "4nMzJ3yVuvn3gFVt6Z3YfaZgyVLL3ebw3SxZJf7M5G91WZ1muHm1FCtzfNGGxNx8A6ewnXXAgPaHb39nyM9A9XH5",
  "key9": "3MWefWWVojgMTRtnRQoRSood7BynBbA4VEvR9JpivswRcZNgwya9WGL2uPDEJBcfnat8HzQatY1wBGHp7DNPufaU",
  "key10": "4YoyTTR9QzrLYm2ZcbcceaVhJPRQuErCvXgoGuJNa6cVBmoZnBxes7PVgh4LA1qJ8zpbH82SjnW5y4RGy1tH9FuW",
  "key11": "5mUq4QQWpSuC26YjJQKpZk2i1AE58QqarPmpsxzcF3um87hGPFZXLHeGFahHHKGiu4Bo8XCqKJARzjm7jd5RZb7j",
  "key12": "3Hw6fTjthJHsp5vx8djN7NhGAH9MgZWVDr6kxrT3buZKdYtkxvT8LPPqh4AseScfKKp7nZLU8iZ8DehC4NU7zfuE",
  "key13": "2vhwHQ1bWeMsrcQZwsJdD83H3Ra2hoKDgyrG9RTkvgkNy22nTdVrrghPVM6ndyTnVVn2vBvzjdMyYcL8TCqunvBc",
  "key14": "2YCsTBLznpbZ1CtZJ3DL9PD1qeF3iUJYh9AXW8CqEyfLs4jpydsjDzbAnkQ2NMY73FZhi91zDu8PvEaBtde9u3xL",
  "key15": "58WrHW4YivBwbJzCdGn4GEDqBNbfSDd726pCYuuZWJQJ1daC4WZo6Ks5WruSUNeAU6jQYFzi2MASiAMchu4TmSqW",
  "key16": "37CHeqzWQT9yRPGHmwaxhYgiAxMvC74GrbCi7GZeeFoeMFV2VEEMvKq4ZBY3HEnPC6Wg9cHSbjkopKtnccfWXKAc",
  "key17": "3degFVTHw47DFk3BAakhGdfHR95XzhNEnAafwvvWBdMzxzaNDkVZ6seywGvDBJkdSNaHCmi9bnUhczzWsisWXm32",
  "key18": "CTLcii9ShwbRxmNNLLEnxyiV8zjvEN6bq31oavMVkQA4UXeWvDHWZSWeaqxrv2BxSyDHPD8mHCbDpByXTVa4xGM",
  "key19": "29XoJC73E6xB41pjrunJ6W7UuNy3HqBQAJ2y5pF41TdfyrP1oqsH4EX2ge9K4isoFtNfDVXFaSoQUxwFAXoF5HFX",
  "key20": "2F7qBcyR2YhVz3CTath67ZySmSq7d6fG8VnvN4963BfKEq8LmsTuU9PwUVPpJZxkNS1VAnMzFbACQVTxU4GVETz",
  "key21": "3cgWop7hcMsu7CvuxgqYrg47SNxVFCSZfLp8HThCQodMTF2Jb2ZxMXHE7fC2nuX7GQTHrie4f2MkKMRGF5wjd4Xp",
  "key22": "PWpDM6orXoXYDrmzYUAidJj351GtiL1e7S5cWK86RVjcSWMD2jbw8gTv5ofuceNsZkNR7fyJYZU1zwbbWjjmeXr",
  "key23": "37DRKUeYqsnR6jJoQiUfW1oNNpJSaGqqVURuNgyydKnHokqp8xDuAJthyDMchhETaXTZcNbaeskTSGk9JTFKkz5q",
  "key24": "2qkUb6eVFRgjpnM67xdDm7zQ2koA7Ew4SSiiGYtDbPGmK4dSurs7LsySjiBigEJQmizBV9vDHAHYedVV6Vq3UHUz",
  "key25": "2wfoXeZsnTxSLEeKkgVx9rtjzoPyBQzPi1NPxWqLXFh1dRTCSGankczcD2tvhUia5cnzLDVyYj31Kh77XxKV5zoV",
  "key26": "5LfmvAiZBJ6cdTCpMnquLPZkz5pXaFKY95nCCM7nAjH7tsb8LFqSkEfH8rLW6bGNEfiE3muSVcYEQ5yofSzjiG93",
  "key27": "3E6JodfmjeUEduXVV5knqZiE7sjtsST53Ctwrm6A2Q9gBmZj5kcc5CGrc6sRB9xqncFMprmQAntQi1dGdmgnSv4x",
  "key28": "aehF12jAQ2x3Lrrz2XBWd7zULb6cqgKEFGvDXDGg23SduUvtZfLEq27oo9SKnjXoEbMNGg6Cj1nqq2Lpv7ye7ra",
  "key29": "5B9zHZXCQYrvR731ppMHf6q6pySQCeygP4X9L2vZ7qegHAffQUEckEYf7qYxX3knaW562PXDgmiKBBsutVHtCXDr",
  "key30": "3niTLiExbJa6CzfwcYss2jPV8TGTHUqEpW2GfuCo49K5gVUkQZMdLfaGcNBxJuvg3SMFEob7CqVW9zYdsWe4knHy"
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
