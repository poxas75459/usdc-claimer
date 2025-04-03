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
    "61k19e5rJz2t1EycXSPGbcxjKXtKCZgjGMVY7qLiWxWstSztap5C9nhy2tZeLko1ePyuJXpGGHZBFFK7C7C6v6Ls"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qCidp2MLdFmamZJnjcf2tNRxHcDacarTowAp8PRVoAwnyJq5W383qvxE1KbXSS8mcWkaMZXmR1iVErcDVnv58Pi",
  "key1": "2YPV4hPwUuWbVfPNKf2V9LFZ6wf7YEr2dbhLYnKNVMsqpYFx3xfwtSzCDyDBPC9V1rhoyrHxNarXQyhtNUf9g9Mj",
  "key2": "2CCNbSQANx8vSKZh1wFqCWr3ctrfhVPjMLqWVKombedqfkr2DMMRfjB4Rx1CiQ13oV6QkP5i6ofnipNNp8TUCXWY",
  "key3": "4f167uwLooEZi3CJBxUvkPKdQEZGUGfVAuxr2ynYDyq5BrWoMCqwrmK2dhL1TmuKWS61e75WkujzZ7hbZKotV3RD",
  "key4": "5CKRhg9KQg126aCX2XxcuJfu91BJ1daShJWHjRidssrTGXXtEnnieL6zwvHdMCLA9GQVd8MoTfiC5vqJAEUADGJE",
  "key5": "3fXwYrKE95uSqNtomhN6bgw4mgsNqUQTagprWa4KKweLKbjgk5Z6rHrsmd3jQHr9qA9hi6bULneajhSuWB9FSpkC",
  "key6": "5FY8SQHF4o2wwRk45BF4H2sii4PD8U4GAFNX4e6VwCB5m8jfdxGLicbkViDceKKM7hRgJQiCHM6tUBY1YpkMAPan",
  "key7": "2yjoXpvwjos9NmNZmCa4kTZ1wahG9fUFCzE3wyChAFeg9Jk31581LtkqaAa9ob5WYUDBP4KVLwzzqJGErNoGqxHx",
  "key8": "2hUzmMXNoFx9VjDzPTZMbfXty8yDwi1y6bnopYrtKaUVPZ7jrMzZnE9r6zt2wNr4bT1oaXc4Cg5QnvhcLddAPEnE",
  "key9": "3KGaihZ3DNBJa6ptTbYwsHhnG7wp4FTmbyrbsUANzHEqbUSJaMAkGmqPigFpaR6dx1RcZXXsatADtVyGodw2No6R",
  "key10": "4hstCgNuGac4ExGEHmV2bXvFMHaZLbfStGpmPjZU3mSzsMfxewiSDDHh8sJxboz5imSdDMgKYFooEC9Ry48JKpyG",
  "key11": "54bVD6G3bUBZBjmchBQFK1738kaKSXQsr5js5ctYwvwu7rMEjiBkuqF6kBFuG2C9jLhMGzN4yhgsUckfkmHU9TBq",
  "key12": "tE3imNvS88V9rf5Tz6JGtS89gT9n7Vii3iykzVneabMreK9p8KbVVVxoqnPuq8fDVG1aZbnzd8Y6p8Di6ZtfmDJ",
  "key13": "2tUo69mzzDjbuFVLpyUYdjZUjodTLF92CgfbXNz3Y85HKQifnJXo8nzhkqCDTK3i4j3Xgd5ysgXSvGPoEpjEfkCu",
  "key14": "28XpAnt47FBnEf1nABX2Q9bT6JmTuYjbAeEFavUrDpGFbhCw1x8SU1VJ7uxnjLdRJDjDmn8WuJ2n9mygiiLbytZP",
  "key15": "C4ADCgfr9guoNxFSXJw3o2JVfuEFAX3qZ1963eSxYV7sYppKHUN75ztGTdZpWLpK7RUP3LSk47nNSibejYwE4zE",
  "key16": "38S7kzHraGQKRh2jSrt7c515GU8nw8TpJDpBcKuxqpmGTRih3L53nyY5hH9JSWFehXWSXuWqYaUfDfXzYMXArx6U",
  "key17": "CpZwtMkb7GHBdeMiHKnL9THsRj67vNW8RbycMhi21vcZhbBs8YonDYZNdwyuAXS7jGsk9uz2TZQTd7MncmJT1eu",
  "key18": "4noimKqVBcYaVoPCc3X4nMfwPV6R88zagri7qx5jpw6ZqYNqGNAW9gB8vLDNWDUK4rsvZ53uGSFfn4NkNa4Quc3W",
  "key19": "4Yf7HXVx88a1ThhDCRRKFYKYjLEFABrWUovdkse9YcVVNJALHvyaiLFbecSsinGFoHqMJKcGag665ezFQTxKXKUp",
  "key20": "5hrCchiLfAVaQhHv9ewTDr6HH5qZaMx4pzJeciotFHo8c8XdJaviydS4cyytcwY6jYSPsvD1YrWP2E5Mx3DDfVzA",
  "key21": "4Mmqh4Q44G1bU6rG9MRZ5RPFwTiAnf4GUhpHTxM7pnX8yGvn24mNLjdXFE9mK95NjnDiCWNMZNfEX1ZY5eViap15",
  "key22": "616StaDjuMGmQcs5962pbhZXFZWtFzR7bwoNMtUfNbkhneXxTQpPDaQm13JRietb1FnSDoB59yYGJsYjLs14kQvR",
  "key23": "61j8kkQr2rEMkVZf6pe6ryZ9xgwpat1YoiF3gtg4J29huRCmuaJW9b3c8PFBiBeb3vUMewgw3gPj4j7Fk5qbKpsG",
  "key24": "nnhG6zPtFWVECV8f8NgJXD4umK2gYrY8tcqTbs5fMAr1NRu1Sc4FMu3EzUYtBxEf8BUS693nLDiPYnT3jbMYnWq",
  "key25": "358JwjRpYJ7F1rKwVhzJwirXsZLYRJM5cr4BE3FeGTWCEwXAUYsVzd3svoQAJBc2AuYUrE4Lp99L4LA8N7tSuT28",
  "key26": "5eSjyx9gfKSRGnh1UYwaTudAtuMGMXnB2XBYkPKrCKyeuThu3MZfYgRGSkxrws1EkV8sfAcWKce8i9teYkL4sEyY",
  "key27": "3ZgqMaBJYJtdbHPq6gMZbYsnnD3j4yE6RbtqwTmatApicQcoQHSxrcf2gAm7KPuifxysbTjkHuscpfxqTGpYAg6d",
  "key28": "2i39iRDQ7P3peKjp2qZeSYnoHrQcMoUu1tTvWixN16ZoR3gq3Job8dRXRDUMmbViQsrw1Wb97zSW4yhueRQsgsqf",
  "key29": "4PW76rcbFtD5YyscDZqBU2npj1vnEX6pSSwtenEYaiZZgvsKH2852tjgrVW4uPAM46UNYJsqrKvgVCw7ZY4cZ5T9",
  "key30": "5FVq6izNGAfuXu9wwtnkLUEdxYdjz1ycKwwpTfmew8wiBGb2suF75f6iSDA3Yxro8scMb1cD8Eob1yD3h8VL5cz8",
  "key31": "5DJHkriQMRxkkxD9srDW2Nj7w7nVtekWWuQvsWQuRgCEgQhNHU1jcLC5VwRwA8bv8JK9ChiTVUoC6NY1kq57wqVm",
  "key32": "48ffXvdpC1daoYrFyjb9GejnVC5SYwjTSCQ1VUDUfGsS1bEgpYwhcjVeXgv8yxEbE57gZeVfox4WtS9k3NG59vJQ",
  "key33": "5DYBWDqCqSzXWtZukxw9zsr2Za68DWSG2ARmafpxKAQrCviNWdc1kBpeu35jDeqVixF9qZDnLk1bTnuSNDgF4bEA",
  "key34": "5qtLsJSgWJ1oshsQg5huWGiFFE3s2XBcrggq5JpeWGsWGUshEVN6DrFSLHyeNLATriK7U49v81t1Cb3vbg8JypXG",
  "key35": "jsDtkYxiBDTcrDYfAAQCEBut6jqP7EV5s7jLRFH6Y9UyL7cYNspPrJPh6JKievxByUAshdYKgJtuiYC95WM7Qta",
  "key36": "AUVa4HXjQmJFWTTaEDqeZLA5P94u88MbVvqKLPrdknDENtTcbqTdgumvtM1pKoJFCzMmRBwdyDTYHqy2i8upNUy"
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
