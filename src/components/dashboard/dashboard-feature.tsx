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
    "5KH8yrM6Nm22dCbWs73cDxdW9ZPhmSry92ivU4Tc2G4BxxP9V8cAsQRtzQeuXGDzXxa18wJLuQvLxNeMJWxroF5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5paCuUvEMDH1du6ozEHsx3maMXmcsqszQr5guHamSGenb94WW9Ypes25EwN2bkxYFjkCxw6jQHXfUHfW8TQofBt9",
  "key1": "55VuZmB5RRNo2XfVPQWPRuLEggkeKtSr2eUsJyo4y9zqKWHzhEJqknYa44s3AoT3VGtHkTTmkMiMJQtkArbE3UfB",
  "key2": "5N2qN7Xuc7SQjMHnfT4uv4nkxUUeCaZLDhu2DVDcfro8dkJ3zQ2SNrsYh7PfVLS1tzHg7QjtrAYDX55F6Sd2gu33",
  "key3": "3WPuBb9T7RWqevP4moCdZW9qtm457xGFByeiB4SeHgd6t8LYxzkJt5insYbjW6N1xhR24xi2euTUK8DR3AYWBvfT",
  "key4": "5mSAQsTaAok18yS65WUt6UwHNznmLMv1oGKBQKT94bDwuHQLsj1EtkbhwndE2K926VnkthnWUxoQvZT6ScH9e9e5",
  "key5": "5DkJ8QKqnc81XQ5Fd2pvEcoc4YQBG6LkmMLzo3SKrTEfiEjB9smxcAtiGSQNWbFY9HwHG29jKM7tZhrD7nS2CeHQ",
  "key6": "45pfA5PXaYxLUWhT5hx3CWxRvnLThC2nRG6QZXncpWKyqALMKazwMpcCGjQiHQ8PGEKRnkLogb1XEwgv4RvBNbFQ",
  "key7": "2WCd19gHXCUN6wJFq6TMh3Zg4hcZChbY8WjZ9ChGzHR6Fry4Cn7hCwEzqEdhjtnb3rKS6RphXmp2aTaXWzuAGT9P",
  "key8": "4yvLozuDkwsb5G31NmCDhmvfVkFKr74GaTNZEaH6ejR6DeE1hpQj3oARX8PZ256c1BZa2mxWrf7TrPy1LJrsSryt",
  "key9": "5enLPMffxMHgqARSgLasdA86pNS2ZGA6JMXd7rWuGqL8PeW984KNEz6HsvF11eJBYmXvTAMhKGjqMkJPgeAEv2Xy",
  "key10": "HqybTKhgfsiW7HVb6QQUB3hXAumwWaR7Na6KZYAyEDtnstDYVdMxLxsmRyuiZW4Fw8621C2ndsoJCF4Y3EVT5kF",
  "key11": "4QV2y2Grmx3HESmpimySFFphVQs1fj1E1behFwr4GXQskjuFZ3kxWKhTk9W4rQDaAPaQjKhw8D4x9ug5UdRX7FNf",
  "key12": "2p15tRk9MaGp8ocE9KTAYBWRQXFwuxr352ogmXoKrYgHRnZgPSYCvMFtfETtnoqL3uBojNCiG5FxGC52LNaG7S39",
  "key13": "2wy44hxSRfjJDcMLB8rj1B4ESiRY7KJCpSQmRfeBtriuELkMdVZPffJC2kKVQ42FuFAcnDHvMuijn9LvBwZ2Q5PJ",
  "key14": "3dg3diJiJVXbct8FcPxqEQMj1R7uqj9jEBS7KtWyrshXfhLP1ZRo54qRxrdzE8f4q7tS2WAUph6zz3K1EZHHtKW2",
  "key15": "2qEX58Y3mNepMErBxTdUeWuiDe6qiHG6NdmRhKtyZC4WBRJELr6zXPUrJEBkojRjmmT2E9B1WzSs7iJD8sHnuGYT",
  "key16": "hTViUqz8x7S7gziwW1G3DS4UG3p1CgGiSfAbWymsL821eGsXxMxb4x2sMh5wV7CvCBNyquFmkwG75ZAVzs4ErL9",
  "key17": "3mHThpgCprEkHUWmNpVee6NesyfhMxcFxFajh5bTxYQMwX7zCSyEzqPELrCgDACQbiZ3NqSatDQE4aATtemj9vPx",
  "key18": "3HNir47YagjHikP2kKWptAKNWAfWCaAN3pqpkTN3YZ8JeG1jYxpQ4FyQYLWVrsXzfDDJ5PfDKC6wVzRFHcVfzurA",
  "key19": "2wcgqhyc81M5pytQxkRjcpaZfuVaFxsJQ15yyK4ordhdCPzZECrzYpkpnnFpEEUsZDkYhi3ZCTNAyQGDZUTEHrdS",
  "key20": "2CsuCpdAMpfDHfKxd2BUyiSzZJeEaWW1sA6eMqVZN4VR4qBBZA6yd8VGbCxLACkR5qe6bBPkg1U2yszwJyGTGsYr",
  "key21": "4dEjujugdPMj7CTqkeaCC2Pu4d1Q3WCWM86PoBifKkbcnCvFqJhfGc4WRML3njysHzJVxVUvS1Kjy8fBYHPbJfzd",
  "key22": "52kfUWb5mm6jWY3Nj1oFfNTUWxnvDR85P783YdvD6pgFTW2cb5gSWu8QdZrG6ctTKJo2jZhGphxaCZp2tTsEKaDw",
  "key23": "4xCopkcocHhGn32hby8bUFr4AKXNCKMWGUV8d2Yt2peV3pLmZMDDtmQAZckWZLFhozVun5ePALzbZyXnxUSFoE4h",
  "key24": "237fBTAffVR9683YeYVzYTHAn4t2ueRjCpznmrfXEfJEFzg6jXaetVxg7u1fPd29P6jx4BDXJ6A3YcenAkkMxjTF",
  "key25": "15KkApMLagUvxoJ9c9Cy4tUTtWnf2xBYjrBLSwKfbpXCewpNMaQoTXZKsqZB6zNLbehihTewT9m55W5jvCfrTQN",
  "key26": "3ZbX3P8Ae3Cy8ckGqouD8UFR6fZGw9FRqDJ6dkuTMZLZYZWpNtimnMineLpL1iHiKmMWfX6BAA8rBRJbMBDb1HWB",
  "key27": "iSiU17W2uHnSMKCXfnAot1FcoKADq3C4W5vkBf5jyAq4QtRW4opjdxG5biQWuw1oRLJoqj395gKmLnpxvzTHegm"
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
