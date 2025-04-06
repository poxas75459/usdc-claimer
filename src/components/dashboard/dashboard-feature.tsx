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
    "4RKG3fSGA7Ft8LuNsYfW9VADcQdnRsWZHLq8Stooc1qAjXp8kY62iSmY14zgkZaeyAwsP91mswEDZy84e4oinzHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sCE4HYHpWa342Xz3PRXDRwjjJc3LjFnuuafgEnYWW7zoutAMJUbRfKKZQ6FxUaZ4xT4BdFyes2u4sU5dXJRe6sm",
  "key1": "2Tziv8yb7Vkvf4RvvLybQC2M7VxJxiMYEQznDKBXPAmvFXeNaZXXY4PUoyneEktzBtr8SEBm472avaLDMcMiqtgr",
  "key2": "2JsLWs9okr6AykRptQEeWns67wu852zEKTvgUcvpTiLc2W5UdutK9MdHebN5A7KHYwHuJmH5XkqvYZNNGBDpEjc7",
  "key3": "54nxBwQ4dJPxxnNbpemdvd9wM5bFtQrUdYJTVwsxLBVPS878DG4TpSGMWfViL3xfzk1Cq3wYFbQFPkVx16rYzGKJ",
  "key4": "4cHbRNpfMsJ7hpvhpS3GJJXJo31jd5M67jSWgYJp7RZb4w5w3z6Q9hKwqKrry7K3vaFjshNq4DGe6srfEd1NXJ4b",
  "key5": "55AmmySJz4ktKSNJR2P6dtEKQYQSTPLrKG7pKsnvhfS6BHKxuYb7JJyjWc5jfV9Dx9xeNnYRS2yHCCRGVu7o22qj",
  "key6": "21JQ9kZdZSXb57nWxaiWE8HqByUmQdiPRWfDtYnBi71AiaaLByZ6gT5A3H9p6dYCBWEa84AjRQ3GCWCH2p8heZ4i",
  "key7": "3jb6jutoHRtegR7PGeQ6xxqxZTceSfCfoqBfVKpapkLD9CFqdJNn2WTJFfWgrUbuQKSooyP7kaHKn6LgUZQ1wBDK",
  "key8": "21jgHv51pFH7q2mMk2aqcWa3V2dfGZspxJQUhyxJi1j2nNUnRzXU9rPX6ZtWGiSPNnZacg6QioTzZKF7nPNpU2yB",
  "key9": "2iYXKin2gw9CCtfFwwuiUxtzo64Z5NP7n8hpJXoD59Qu5cNo7Uow9LCe1bXdMNFpsjPRxmAv2B4TMyA46QVgfbQ8",
  "key10": "2Mp4botDpR1R52KD2BPFBbHRivXRKKXH2rgPmxQXBERVTcBgBANmYUJc943ZPQqEUW2QcFZ8myMKqLHasSvETLXr",
  "key11": "26PiRFtoNAEe3TXEGSmb3nmmLjfnbVCkQ6PaaYnYXKqYxTFDHBQ3n4VmVBYZUYLV3ebmCJNWrbQi4bfbW6jJaqLY",
  "key12": "3nc6JwtNERRh2Sv8MFDuzYuqW1r8MNG9rBARft1GRqrR6qpJLgMVXFoETgLvRbHYyThEDqxDJhRtVEEdEdSeWnDj",
  "key13": "2iuwU7xZGKc3xxdvf4UToQuSqJaqhPSzEKzvmhhqpqGCfFgxchWvQYLFohjVwyWeWXMmDTVBxHU6eJx5cR53uUg2",
  "key14": "584SCtx1oR3tEccxMDZc6Ka8HrxNpvq8ez9SYhz85nXrkjKNp1qehCekQvp6zTPXyisV3Ws8M5tq9agNV7XqpyN1",
  "key15": "3pHNocLta9tnhMfhxBB7GsDn8Z623463GUeSwGXXQBTAsFENNLHuKid7x5ik5YRYWrvQdhuvcVxDi8dWyqP8k2CP",
  "key16": "2QbMHCQii6K59HPsLFPTPtAYrVtmVXHj9po3BoqcufnRXNTLPiM9U74FaoFuKAVmkWxXNooH2KqN41ydFJVfHHxf",
  "key17": "2a4tPofowSidZw1MdmkydBbVqjQVTdZ7jXoozFZtTQZB23tBA4ZXQAhgFDdaGh9HEHHzJoYioHLt8rwtoYBxLtpq",
  "key18": "JVQ8XTpteZq3FEx3AN1NAScYwst2uLgYU5fuCwMSec2CMnUMvunSXTiU7JXdA83V8Nsr6kFfAgQ71WsFYvHx8sA",
  "key19": "4REKDSGFKtFi7afz62ZqxNZhdGYjUyVPQNPLQs5ub3ArmHzrSBuSKu6XwyCuTF3iE5ZGakwau4s8fDxxCrNgDYuJ",
  "key20": "59jj2e2LjapcA8nAhuuMbZiyY9aYXQFqNAuYTFyxfyUrfNEzaQ2AL7s36tJbDvTnwK8dzEpivooYbEr1MiGAGtaz",
  "key21": "3m85BoZYwKUKPcqZpjhakYCpV1Ns1t7tq5A9unCt5Xmxt5MoerYbzHxqco5aSrQJML5Z1PcmSywtNh8Hga1GwvBr",
  "key22": "hb3WzdEhp9WmqeyL3HWM4EQJ46WgMuV5ZJoj51XoeQtrvNH58hZ5ikqTtydW4KShkFKZX2U2azDwbzCw1vAnBeY",
  "key23": "4vVfeSii2YMhg57G4Uvr4UVYHXU55JHZAe1pw4zRJcUPy3vdvyoJYD8tSfhBqUxGBhDu5DUZQ5BZoQ2L8oLidLfU",
  "key24": "boJz294i845dWCr4unah7NgeboMsU6dV3iMPXvTbE2Tx9fXfnE1gHWfetwj6YdRMqMWsBt3zqcem5phhccYr82U",
  "key25": "5SurUL6oSdatvoL7hennNRpCDDK527rB2oeevrPkFQwix62UjNiRBxZNUFvjH99vvADT16nbQbDqRX6BcXuJApnj"
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
