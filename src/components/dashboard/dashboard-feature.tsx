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
    "2cZbyLyYtJhZAaa3ZNo7WC2HQShhA33FXWfBhHjukcU8g5eywoDp2sG5ZzGhC6s9Q2neUcdrBBDV3wayLbKarnXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k8XjYoYTXJLtVe7A9XEr6Nf4Gi8dS7Jh8CKofXVwiEx17Hfdi2C5SnDpgC6hHKgxc4zZAJX73WpucquPDMEQA1m",
  "key1": "25Yn5ocaDzMNM2yN5XVxYMA2sE5Wqw1Qy8DuTcBSo2i79gCgWpGcTY89PuPMfmYZnUsmKofXxbeMAJQKDheWW4wn",
  "key2": "5yohGrsSapJUxe8osNnGogmeTXe5fymD4DLP6AADZjgiBnLGrEefzDc8nQC9G9KpmykFqfqJvj9oHtoxbGxZeVKz",
  "key3": "357qVgUodmYZqbigfqNhH8eeY1fNraeUMfhdnCGHFNAt1dB7E8sBg11mNvLfL2S1vDx1FtM7Jdooe1xEfrXPbH5n",
  "key4": "4sx6WGEDNqxXzyeBmmZK7wKoDDQvjyYpUzKqZ3dgezP6HythprSs286Z5B5FCYHdVm6t7fZxMEQiC2hGiyFXLMfb",
  "key5": "HF9BzyB619FEB2RAjm1wXUcZdD2VymkaZQuQqHVuGmxz8h549BbsRPQqo5GifhztAKqQca8U19BFmUS7GjMAXLe",
  "key6": "5TGJJUq88DxEbT6VmmUjV3pB3BPLLf9cAw9iSzSSHVkMk7L3qirMZhucGHNr1UW2eJjQAYQKihcVmVxjSViymCDy",
  "key7": "DxzmH7nHssc96uN6Tgdd9Ro2HmpUoHao38JgNfYdiScgVFSS2gndudF9uDmx8uZrpbFDs1w6oA4Yk9zg9TqvX51",
  "key8": "3rcJ5bcuqgMoMXjNvLbu7BwwY1MaWC8VEjk3z2VkP4JRdSFsYVjxafABCs3XXPfQi16nCCjaQJnKAB7dLp1XrcsV",
  "key9": "3KRxTsMjvadxNJr4LJK1z7Uvmm7zWSmjHGhktZBJn4A81erYaE9mrbjabcqzdNcexiprK4yZE5np8gQNuEWBjBiT",
  "key10": "g54dCcQKo4yFSR7i8NBLsfiUmsiGKppgTvdzcKSoqQAyFW5XY3Y7BghqEf4JaD689hPesy9gd99v9Y4p2Fk4BMr",
  "key11": "24wQooBfJqcB63kEtxej1J2zmVBxuZ2iDaMsLokq1Jgifxg94zvSwSnk8behLpoSbEsd6HBzgDSMvSgt7eH1q2Nr",
  "key12": "4TUoJa43nQFrgoHwQGw6DiSZM3JjtJ85jsYPHeefAVjf3qhFM14YAdQQDdC69G8HddYdLA69DCKh83F9txmYcYxu",
  "key13": "wmNaRrcAJeE3P1cN4SjxgMZJyoU81bPoTx9TMh91mtkSoaaxiuvWiFd5NV5fXcY6ft7db7aCRTmtVDmsxD9bxp9",
  "key14": "c4ht9gKF4taZ4SwxMrdp5MLgwo5CAgvcacUgaxuMY6qvaavpLqjZtoZBBRDizs7urukvTwvtncFQthiFVKwybAV",
  "key15": "UzWCDZRLkAV63CYST14xFX5UJ9DfSx1x5sPErdqRxf3WujGvfQfuvPzKWUtM8qv6jsebh57eC9bhttdgNXAChbK",
  "key16": "2S4o3kLpxwXaJvFzXPeDKMD55TUfQj3Z2d4zDTmbpRiBaFMEaMpscgETSd4ZWz27wXHsirpTtvvma95VJEb7fDoP",
  "key17": "2cjFUYqg1YxLYBdsa5VSd6dNF7576q6P53hgamgA1fmDFd18BpHjU5crTDT4hwoXzGAFeZhqieedFaefACtaYbfT",
  "key18": "3TPtgEKu6mBAPod6DsGU1YA5HU6R34Uevfuo9deMRmHL2zjjy3qtQmon7pZk46PMSZaNnDkMXMWoKA26Zy6NoYxi",
  "key19": "4nAuM2o1B3gDrmCkQ89Mc8MrZdh3QXVFSL72g1fDMsfGdC3CRuUwine7BtzL2XK2pLnG4gWRxduwZTVPaCqiFv7M",
  "key20": "MCiaABHJbNcEycpu3eMtiPh1KGAKPL5CZrFVsAvDVXPSnTm26vJFLaRpCfuP1CAQ5kPXysoSGbWMNdUL82PYcpG",
  "key21": "2ny6B7G7cJjRyNn6EqGHJ5XfF2xU2ieZQGXzqW7dtjx2zhPJXdhMhsrk8KH88KGLRwxVNsuS5vagWWA8RRSWwrdB",
  "key22": "Ee5hXdfGRofAAPUCw1ACDH7vzEfKZZYqvmAkPehiso8fQfgGJf1rBeDm8CNvSkthHinQN3XKYZvbvD89HkquTy7",
  "key23": "JyDdf6An2pjEfb2F6tEggnTiv2NsFg1yFrBSzkZJh3E9Y5DUUHb3wbffsHzJsic9vduoJJxVYemY4JwgWBQ4xvP",
  "key24": "4e9vt3co28K8BdE2fJLQ5vYerfoMKtLgKe8aA5j4Y7kwV5bKYiewLFcPnpNY9USaUr41XBYZ2JBKWhYwUhpfifyL",
  "key25": "2NLnfFh2uEQa91VV8RrGkjJ8SdA1E77Th6jDnVZZjxPoMJn4XxtFBr1xPjFsw99Ak5Hn6bt1takXzBcSjziFkTDA"
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
