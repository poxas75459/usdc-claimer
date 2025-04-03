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
    "4AstnVjyxojyMfYxKwtCwEXSAKTMdtCHDXhBtj3znmEJzMDnJhL7s226YLJcDe2PesXDApcZiHTAyRWJSLvGGnJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5giMZaUZbTwzp9TbL35zRonRBzvLyqiTdgm9GgMW73bJUk5AeZXD2h66BWvYwsx223Eqi57j4dFTdq2J2aVgBjuf",
  "key1": "3NySehrGkXLMpnrMi4NNXWs2cDSBMty76s6z3CTfejWmoyWY4DMTEYN8Ect5nRdge4s44dCcExWcmrxPDCkjxqxj",
  "key2": "3EVAaVXficJ5Speei6KfFJBw5KqT4u47VzpZ4hD68DcQvx6MPbsVPXbVJeerNfEwaPCiDCB9hUH1PnjgDwYGUhBK",
  "key3": "5gXm7H2ffzDSPfxJGpyQbJEF15b8iKUwGzE13U99sapZTVVRGC4kmWesuB1bW95Ke78SLDNoeHUrH1WBAN8H4JC3",
  "key4": "F9yAtSsqzNDXsqn3AvXwJ1gvMi291qn8AhCgTig1zw65qxCyj46ry816my2zcaoaKqf4vtFeQcCsRirDh8yGjwC",
  "key5": "5bpnrFWvzM4rkNGL8SZZ4vmtBAWQATtArpHTmbbrBsXWn5Dabh4LPHfqwLNa6hUsD69rtLCmjVGpSJaqCy9tCAfL",
  "key6": "31QX7LTUpCQbaqAN2vYMGkn7261HKp6RzxfQBnDcXVhc7PUvqrHZGM1VK7JdXthwGrZ9K5bERhEFpjZnBubuj8sq",
  "key7": "5QkBvjd5hUuZ5xCvT7Gu1gp8xhjvw3Aqp4LeqwAdgMC2BaxqUCKrDQjRtfzNjqbRAHwEnSx1Bn8B3XYnn1xPgYvV",
  "key8": "3t4bbBANR4vzkct6N8CHM1Z9nC5MU19aktLczLMC36vNJ8X281wy1UnPLdnKEbNCioeJfprzwE97mwKqXgPGVza8",
  "key9": "3t32Vu6orpCS5DERFx33WnW4mHgWmW6UR6aPBb6iKF5YdYGpWLWr4qXPs8tkGM9WWj428sb9FqmFs1xWM5GPKGYA",
  "key10": "xCcRyP3JeNFd6YcbJCvzuoboDUWkp9gdH1WkSsn1BogDvqoo81pE41YjA7kvvxafUFwPVcP7gszsrmGNNhUi4t6",
  "key11": "529pdukJpMuJYKWTeXjPm4N6KHL1BrEytas9tqEnJjMUaxqAgADCLqeCbALAzeSzaH3nA9SZeokuGSTQKTkfzehy",
  "key12": "5UefgUe1R8fDtus3WWv4FDoAHEWH3YhffJNFsRExKS1LDEwj7xaVVcgmTwtiTvhv6kJt8SAHZxiGRYBjLBcW5tH9",
  "key13": "4aFvBXeVyhctb9QqhMdN3QKyuhcEmmDCYqoGtWdeJLDJrU8H4etLhrJVXZyGPnSNJHWjJHzeASp7D8pbV3tjueNb",
  "key14": "5Sr5nBeEF8RgqqSzCKmUnYcawhKca8vRWQsLwY1kuBwgF6ceoiCVBfN9jWCfCgUAGjvHgHkoiubWfAEoGxnSDhHQ",
  "key15": "4BWvzhzgSKbhXCCP3fYYEh24y4UcgxPN2PAnsfME7T5QNDBxGEsknK747LQLAFez1VeapTMJCknytwer7ZQgPs2C",
  "key16": "2rjcdoTjPFd6h5oLDqwZuc89uaLHcrJPdD8iLYU1JHqD3weVG3v3NDnmNduN3fED6Ro9HhWCkQmmVu7ZXGLR3fBe",
  "key17": "4WUd2Ux5UPxtdzE4PE4MT9LjNXk62EKSbKimQXqSoyKLfdrBhWPHwCHY2kyxr5gb65Z8UqX6fyh6QafupNqNoK7W",
  "key18": "3aTpPb8X1jX2Dy5LoJZnKLLHPxtZXqRPGLnF3F3xnULQGZ3wThhSwdC3UdCt5jfjqYz126a82S6jQ88mviAYZQxr",
  "key19": "23QVceWCFtb8JbtwFHwjyA26r8973scBmqrF8z5yUupnjH7CUUQf8t7KD3PL1HDMcyZPhykFumyG7qcPwW8ekgko",
  "key20": "5HL7h3BLSH9HAWk5MdWF9tCsz3JKLgVVRtmTNbAEDon2FWrzKkb9toc3Xkp85xqqMjiXDQbDscoey8PjQmbVEAAg",
  "key21": "4ENzLtDG7SqyPf3AEgn8taccpev5nZtUPgoRXnB5a7VNe71W95PPZK75P7BdrSdYUdgnYfnhrno3zhSCALC4ZQJY",
  "key22": "4wZVvPeGdC1tLHqAT2JDdBcPXvj61H8ZEoabjDkF884fyxhj7qyGMjopYGb3aiUAuGEVPHCtFzHeBF9sYaWBAKRB",
  "key23": "2haA8KArDHD5AjC6hT2y4g2fTvUWpEhRphVQ3KVFDc7so4QK7cQBqWaddapGqn6QqjJo2t5BYx5e562YYEE5QLXX",
  "key24": "5r7ZVQ2khKWfTPTfMbSvt5fdpGFKXSfQPvWyr7zZjDoruWUPJBVgoVKrFd8DP7M9sYhTZaXc5oz5qGKhYrRkxrEH",
  "key25": "3TbkxGuaxCpsPFJoggZF3t8tPNart8TWtGCmYLh6VUirRSrkdTd8iBfcU3pcj6FAivj48BxLfyeeVdRZooMtWeeJ"
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
