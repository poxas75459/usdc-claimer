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
    "64dTtJsLppokVvXXJJBr6EzUyKN6jSu9ZqdP9moj8JYbnNSgpJ7Jpi1jYLTtdCcbfb3veS5qpws2ob5mnx1Bbtqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ntVJvtvCsb394tTAiaxyWjRXrd6ixpmyWweuaNTNJESH4mMHtRXc1aYAmjTKFcyvsWK25TPFzMiTAT7tzib8dNa",
  "key1": "3RjonM8mVgQEjPXc6Yh4cpppyhP1STRzK5upXUgbJdGkvP9yzkKd432x81DBdwRDRqgakWYJrSiLcgCbeiDuuAuA",
  "key2": "2qGmVw3p3jV95QGh3Yin9S2SVGt8sSkkcxNQzfwNRQaVsNSpidyfZ3U44tLfK8t5cS2eUgBbMhfpmYCFpbq7Axs8",
  "key3": "4ZsK5z9oKyssgoULfuJfSuCFVchG67C7FBokESJ3TecbgvyV77EXhthXSuQQaVFU3c1b55CvRCBGhgZU6nASb84P",
  "key4": "2z3rqDXYsdcUrNCd7QFEY6Y1EB6GGe2uAFhYGAETxbeQJM8JPxcAUf8FPJQjuCDNk49FN74siNr6dgFqFu5qegY7",
  "key5": "3fM7RQ7CwBo7afmnLagXDqNmDaSRMmfujs2b234PhJ8z9mwR5gg4TzYRAqfHfj4ed69NNoZF39HezQkJsRr3Cinf",
  "key6": "tuUYdbjp5Q7eVQu9nRdYHfKcJY9h8omX7Qx9dWNHpKis6c8A8cTteSNcGachePA3f5HCXrnzmmF4nPPyfqj9bQk",
  "key7": "4FZeug7iZ7vCXUVyAS527JufkPLscR8Fvm8qAi4c78jmWWn6FXV3G3Qj6t1JuYgSHCsFxLHThpg2Ft6HDAEwhoJA",
  "key8": "hz711j2cX6GwSV4BzxG1gR6QNZBTsq3qQEU8XTvJcY5m6HS7YFT6fFqfzAhspzK4JcsNr7sATfYaggWHKw5KiA5",
  "key9": "5H1z257ZBxdGFpxYAGzYqwwyMnMKiuiHQboHZZYAGBFnJCFPEWx55ksXayXxZfzgjzCWmneY3cAuXCR7CgJmWKJ8",
  "key10": "2hjAexFFEc6XEUmV6mKmn411XBeEvcTSnsLSYZNjbEoDthuUcGqdbJFytR8743rTZ4b7wtYWSoyf9se3rRpXK6Bi",
  "key11": "2PdS7GjFAvFUsX5mc7gtZDyFRirW42AhAxeUnKFK65zwLxeUPc4JeWFh5htK82yv3kpcZDtf4w2T4Lr8iKy5a4Yq",
  "key12": "2byDVWFc72RMGqacTJ3qJHcaypDi2nnnriUeY1S4kZtZv3hxAZRxjyJQsDtsjTcdBb2a1zgNcxWxYXxMGoyxA8Bh",
  "key13": "57XL1g9jhFXXCqJdLNc6V9pzWzHjpcSaKUxXHxJRpqnY7ezH3FAdXamQHq6BRkzMWCQ7LDURCet8vFKhpPNnJcbD",
  "key14": "5GUhCZa3HEne5FTN23P5sg2AMnfPfK9FubzdDi6hymCKMDjyWcS6QSFvJzrrdv4uvw7varKDd7R74ucAK2wnaZB9",
  "key15": "48v8mvZTZt3ZPsdtxPignVz6KpMRM7s4eb8JTY6hFXAvZhHKtiGJxMUCg9bE7qSWpCf31hJWyYjUv8KTXukVmvJX",
  "key16": "RxY7xcpPS28PZ9kb5g2sFZNP6NTi6xzUvPPz396QN7nSaxkQzHBF5RNu2m25vBoMQZBuPvWc9C38HanMLL7csiz",
  "key17": "5mgnb68kMZSxQp7D2uvi8yzdjMtXVsahrCnWcsoBuHwNRWmnckyWgL1vLjiptrmUwUCnEdaQ19BbTSk7unb1uw5Y",
  "key18": "2TdVoo8PVPVExpxb4qKQhHviozH4FvepmxyW15NbdYKbWMhJwn7QptJeJ4WbZrabeM9YdvAQJt1kxBgTScE3Pho9",
  "key19": "5LHLxq1efAKUboXYMFKBBzZ5RhNqn6yShnKiPSeV25eEMo7h8cEnAEBfuUWAyddrMR45dDS1kQDKdxdGYwJ3t7zz",
  "key20": "66k1u1k2VUCWJJTMb53HzwMzUSnd2E41rwWnPDUpGyEdhJJyfTESkhsW6HaHM4DUiMQtAXhKg1usg1pg5HyVNY57",
  "key21": "4iFsbLqqid2KvTSBRyVDn6i9oWEDgGYrDKQHZxRPB1G4YwamfvJLrpmrgMh3bXMGbNn8XGnipCZXQMnx5wRPDHgP",
  "key22": "5mrRbsQdVLSDncYbY86UTa2RKMwG2HK9bQPSFLMEyr6EBtuLJRpGFLuLFhGXY3DfKcsUqPZLemeRLs1z7AXXzsdC",
  "key23": "331VQtNnK3dhkSUSQCYNUcwMY8zH2WMyWDPwQs8KyjMdPf5siPcRTLgLQ9vgvC6Nqwb7Jdn14XkUFWDnB5CJdrxM",
  "key24": "3QGuvuMGKSjpugnaMjwXqnqpTpLYFPr8iL6FGN3s1CUvXY5P8i7eHZXbPu8McJeL8WXBWZ48KqBaPG8hUX7FLKM2",
  "key25": "58jFjteLaYuozLMQDqLkDsaPJhRKp1LCoQQK4qa7LzYU8ruzgs6XuhJabn43GRxKEEGkaUaVpXz5bBvMmFYBXrY3",
  "key26": "5UMLuXYniHcdhfe5zt22YRTjvp1yDu2pYFMTeUHkz6zVzggKVdSfHd5UMsFYDcPYSYHAwzinqBKekAtZq6rnjipv",
  "key27": "4E6FaynXnmUJY2o79KHfbFRW8h7CXSMENprJZEwcLpbtCCb3sFU6NWhLj3QyhKz8qsKoXepmH61iAuDSWRDwaPr",
  "key28": "47oxar5W7JgyGGqDzsmSvmiqXXin5e9Tjry1mibqUiBxrP75NSZBvKNNCBAUGKTo4whV7BAugqjf8BAbFH3ds2aH",
  "key29": "5iTEbQMkWNh16LWrCouqUD38RdEMkC5TavbJFhwDhek1Ks1rRs5qWyFa5TWCzsDx6h4xtHPvWqFJZiKzvdKtLkfr",
  "key30": "5VXR3Un9uB69vbSu7LAmMDZe3BAL4csjHxzGePLW28yDzsxa1AntDCT4rDxNWh53KHXwAetb5r9dLWWyL2ee5E1X",
  "key31": "5nW1QnLr34vs99KCjhUa18EwYjYyqS1qvYEDNSv3zxzQY1WhLEfGefhXoFik33ZWadgqLNUdqSMp4t534cTbLwBm",
  "key32": "4fsiEkA2V2thuv5FJrPvAN8EDeAdkQ2JY9U8bwnLVw16bKTRP1RHz1FmLeTeKFN16cYpXBfTFNspJdGPdHUzeskU",
  "key33": "2nywzE4GRngiKzz2JL81wFyqm7yD32UuxYVf9SnfS3rS4AJtrhtNYzBb7gN7k2Q9s39zGw9LxwXffupaAf2EaRpb",
  "key34": "fDBQN6mMXseCRXj2319dFJE1HppwZw7bR8LPYFyiGrEY3viqKYiZvsys6sRU8xhZfib1C6JL2FMDQ5oiFRKVvZh",
  "key35": "3sb3sNNyvqiUJ1zy2mDU6k36UKVADmTkfxys3uqAMJAPKmkv4ZaUSvskwCpkpth6M1jTLZZjNtgTRRKitJBUYnDQ",
  "key36": "5uu3mEuJhq6NhHJmKp9jQc7FdvXus2GHGtTAp75KvRhyFDDyJgE2TAzt2x69KrsMu2joFNruEfqAaipQjgfNj32a",
  "key37": "64wHBb3E37ojn22VTmSFBkjUMZzm62mpmurz8KFTrKnLicH17mWtksuxunCPRwQWhV6qRyj2RhEKe97Z5R9mVc6a",
  "key38": "4z32voUHysTgBfBCfTpHw53XEf2YCtAGrMZszP3CB1ha1bTUSHJnzMCdSZo768WHU6scWXAFShkK9PYpnapbBJif"
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
