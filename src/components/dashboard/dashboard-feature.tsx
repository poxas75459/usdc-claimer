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
    "3eUvSL9VqiyER82hN6duS355Q7dtcUoPQXt8qrH1vMGqPginxCx1T5xhARQsppEJeyeZybM1gutVasDpTboQ8qDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PdKmuUso1XARJtUW1N6qWBdghK3Fd2TmxonJBzBqZ9yeuxgCXXFpDQyB5HZk5Vp1zmSd6aUP8ef7KNhSJitPoFW",
  "key1": "5cazhMduVQK3SnVXMcsysMfnzmqcpcNB2bj42mc3UXJQiRohoYPWoiTPvCQjCGSJVLHkjXpidyJSpVRhZRb54vMT",
  "key2": "2QWxeYBtpe2DsiQD1Kb3vBjK8djK8qB9Nk5M7R81JoD7msJmeFjXHZSVxJNSpNv68cep7hJFDC7u8WuNZgBkpZzK",
  "key3": "5kg51JFdWzW5WAeLueaZLpwojEjVDK8uUWsc5RSFWt41UsRhVmgeiwERfhKgUpcNeaMWxGD5Z3dFfVutNgwu7u4X",
  "key4": "pTkjwgQsQuayTc7n3aDFszK9CqHzMtwDAhynFqWNrZAaunvz5FBRhoNf7FdHtoHKw8LEwK69v89PsQgQgrxR6rF",
  "key5": "5MqhTgEzrnEK65oNVy7rQWXZ9dRM1xmXLhePeRWF4abgg44H6WoEBKW47NxqmP1JfTeVF8yiozpFbT56SvyucEhP",
  "key6": "4qmk1rdGXpztEaGAz8RkVgdGdRqoFCTeXtQdu9qvwANyUWvpnHpbbJGNFgxbvoBXrXzf9Kv1MBXLyTLz8LVrcH31",
  "key7": "3xEayPuCfiU6ZSgUfxgjV1NkW8ucobEys8zspPx1rfXFmCHgYHPXDcXYeXZ7sCozjHp9yuGCvZ2rpZYMeExaagE2",
  "key8": "3mVGh959F2x4kaph5TQ7raVngqHqWqXNK8o7Lc4ahDskj5MXXtXbpxq18J8SDeYFFG6kBaVLb5xquuLou3WSXxi9",
  "key9": "4MxUCxi8y8dLagxd9Dau8y21yY4rQeofKrf7rmKPbesLMJ6uwquMMRGXvcFZtzYudUcYSVDTpMuPPoyPhmc27NdP",
  "key10": "5r82LRonsSjFqPTvxYCws6wFSuWmv8FdvZdGAmxXXaeYHg7bKMmDoebJP2ipgPafnFi6iEPreuEso8uYyrVvVhZS",
  "key11": "3EaH2G5JhjunYDETXmXubXiXKapMQQGs8aY25pSTJiSBpjc15ip4nj9iUkYtAd3NBhny1abyQJxxYGdBq28NhmzQ",
  "key12": "2DXLbxgB7UuJ9XdypYxdqZATJf7yPTYrW2E19J2Sn4ejDvdcBYXsHHkcZKLgkZ5cUqmWMQL9Ay4tYbRCjbALf2Fk",
  "key13": "3X6mfYjimViZmQ2Zvk9uEWjCbSamC3MutN7JN3SDyeFqKzpwCZfRSzs9VEYUGVRnKBt5pk2K8zTdoZ6JqduGjq3e",
  "key14": "5PAYm3B2WucsBzrRGqCzUUjBPhHzMqGmCXToNeb5PRi5gtef58M535wAxhyZXp21WhVpXiqG2ejHTZjnPsXc4mat",
  "key15": "51RjwVQ5xda73iuqHMuEq33jf9iYBQ1aEZy8Bs7Tspjjp94C9fHoQPLUkdx4GRPqLWezN2pmAeEQJCZERBZfTJiq",
  "key16": "2u8aLVCkHbawxXbNU5ze3dPZtjkQvpVbHbAhh7FYwjSTadmDiEfWsFC58AH3syMB7QJdbfDMjFPuzPfFs64KrHqN",
  "key17": "4AW3G5YWBTvEF2XSdM2RHaFRCNpi4ufMMNwsX56cx51T6iMrrb2ayFQsgcAFgzxvubXLPNkAZbaHjcLrvQqk8xUo",
  "key18": "xmtdz8PKMRW8Br2FLG6712VSns9nPKTBHkPGvEMY3LNz1nJF8huvAV5jCzrCdBwfoAtSNQgTu3faSxtrqDgTnFG",
  "key19": "31YDoJB8o3M7FFsEF2DQH752Zt2MJidMz341w6DypH4BE8eYNJrwHaPJfqy4xayxZggPTPodxPZkRXydhuWVC8ZT",
  "key20": "4g99dBfGn76MVRVCY7vJJbjCrL2Wodyssf4YYaFBgYZhsgTSTjn81NByybxZPYfpRbVmvGJMr8TKaETrZc2TDxvn",
  "key21": "3dBYawXRGVA7cCsPsQyqbuwnWqyaWNNbN7x4FFUXq37jQ3sTv8bGVEHmHASETYRHyNaf32P2BhqamS24RxryTjry",
  "key22": "66adxQnA9Mf7zF6nxDZZq6BUKfXhNKzNiq5YrsRbeFJpmHo9mnQSc3UBn5nUdm6DazXfx4epgV7Aiih5Y8eqtjSJ",
  "key23": "52dAskWJDcW2AKYmVD2uhvADFJC2y6S93hVvLQFqnXvcSSK8ZYX9Dp8TAttCjUu2pcJRUQFMKTtUDsEAmhDV1hEk",
  "key24": "4b5w5nk3d3yBkzC5keYCzPoci9WwB9YcjwtoPRQfyZSQpNqsXQeCgkh8P7byvoqgigsqcMK2zX2pDSnCod8JZPfX",
  "key25": "5xpEQnZbvn9ogR1Ldv2yNLPx1N3rKDopZMmaekxpxzBUErdsWdY9ZAAdLMwFLFAgmXA36QEwSDpN9vvDioML26bM",
  "key26": "2g6qMAYVweec6Loy1hY5SirY42Vx9c3GA5UuX12onqxRfPwBLnhsDn2wW3axVcsgLWodiPWJV3fSUb7dJpQzGD2f"
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
