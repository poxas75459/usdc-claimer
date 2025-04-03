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
    "2zwQFCe4SKerkoKqLdRbBmdyTFN9cUB8igrT2XwPZhv4oopmcXSTeEoEsibiMNhjpNy9panqFyiHhnEtSbsuoKQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JjymLgp9JJBNXQHp6URLmd7zZjnYvTxgnnZxBhtjt1Fe6p21G6c85txjFtaTZz8mYTd4gdzKK5XMFU3aPTqUaDk",
  "key1": "3k4FE1HHDydH3ZaGMLrvrRNXizygdpc1hce9XWgzWDfvNt7va7PmpYa1cVGi7t87XiocpTMCd6U4Wp5AfWywxPQf",
  "key2": "5q9PwtKZ3VyNWgRtbEdTurvnMZYZiF9bCqiccTEkhHACs1jihoibeTmnSA7FG9xw27RDWP8nwV6oEh7K5nakdMqd",
  "key3": "2JZi4yX4WrY8JtLDtYAefEhrt9XbMTE3MNXj8ArumYGjSNxUKbkunaVcy4ZhKc4egFQVEGRvJqWDKKxbPycvxrJB",
  "key4": "3PbxdwmgQ7h1hctrMT8rttiY3uzmkQF3VhedAqRHggojVAuKXLzFu8c6RA27gh4gvdRWMtjzCgpcavMdmqB1js5F",
  "key5": "126wk13JnoRGQ26gVzB38fzNKbLdCfEosKPcAtn1TWDkvKYJ7b33wk6SxFPiiHsfKLFDxuEdPJ6JSj4sVoqn98Ty",
  "key6": "2XQ4zZ75U1bax96MkzMc37wa93mVuxw4RM5JDAV5eBehD8rE1MKi5cawGs5a8Mto9C6gCpoEFhzCHDXKPHHaCQS5",
  "key7": "rWKiD7KFy4DTbaot6JFaMEez8gdp2ptJJsPHqJGWVGZRu79vAXNnB6CCFrNcY8YDK5oBbZh5vXKzmoHY8w5G3zU",
  "key8": "F8rXwuTaZcniWHB3XvDNGzg3dCbKhojtwW22bafJKf6faroEfctMvUF8regjjQeKhU8zJR11CGfTdyrDjiBV5vi",
  "key9": "3LG2mzdK9U5YN5bBLTcrGnLecgkJQvvrvdv31Ypo42Vcp58bnBcfPExJriXTd2XwZa6ZdMHBeEvhwQWSzhFsqC2e",
  "key10": "24KWpTbkN58F26cU6pnsx9kcNSpYcEjgfdgxJtLckepUnvoF8JXRiggKahbTdT9BREDBfDJxEYePfD6vPnvV825P",
  "key11": "5thnrKSy9TRtJuyc8G2eTJ4KQU7gwacrEcaiLwcU9XNKobBr76YGs31a7FFzA9poWqbbYryVtubn5tcpoq3z5xCj",
  "key12": "4L58ZyP1QPUdW199V9EAmVHm8n2PYg5azmWoPAXKr76WL8Q3rT3AG1oHyNVsjzMiKxNrpDpvysVYp7kVkQYCN1CE",
  "key13": "3rJ8frxnjsSu4zMWQM6dgPowZ9SqoHSejEsMoKDot3Uu8eNDnvTyDytsMYJHhQKQQrNdBzKi2w9xjRX3npvitF8g",
  "key14": "2rrEyYzy22CZ2ueCeuxLjEq9wd6VcaYuJZQ92CiqFF2pwrNus4ReqYh1iAMvFYiSxNC3HuSudComwX1nET46T8rW",
  "key15": "4mhUGiCNZ93NCuTXiMGTddYa6ii3V29oZ55w7qCYcWrB8zrLGH3SW4RC4AMtSCZy8WNhMxJ3oLs7LggHYvfJ8LQ6",
  "key16": "2cAPcv6iBtivurrmhvRPgaAP4QvMuCeZQpPFMiMTzxU8z6qRa4kpDjHWYpDy3PAU7dFhKATjXUXaswAigRSdZ9r5",
  "key17": "rVSnC3KoQ5dQvT6TxRuVvZjcsHecR4oC4kZr9AcGpx2dPMyZBRkQ1pwdCWKJbavHj9J6hJz35TsWkjYr2qZRMNY",
  "key18": "3TegGZrdq64XdWoRswb6oWDAUuxjRYd23Qkjumeb558kUFNpgPyvZNLGpdZijy3bp2yr4cTnNJB6UsNYe5R94Sn1",
  "key19": "4NndX1NcwgDRKDWhWZq1ea1exhxbm2UQag8YGNgvS9Q4NixTAHgR76atApQnkpWofnJXNXmoojXQAJRace3F2SLh",
  "key20": "3oHptPfPdbsHNFW65FkRu8qg1tWiRhnWotNbEhTQG1Pgj5sQh9UbvBPp5gKsMK1NgJVDisBJHfwyEXfJCi8t24NK",
  "key21": "582rSKPLo7cejN8zN8FVD1FRJW6hzQL2htRp6LaHd8p6f8wmKd6jR4y7QJ6m4hXnGRDRWN4KkRRiEGWaCBDBBCzX",
  "key22": "49uhTbGp3ygMFWDNisWfguENftqSN2wikb2iVSRdz1h3Q1BzFW8d13BmDDrTi9UgPR7MiVB2gB3FwUwYX5jKU1JY",
  "key23": "LzgnpkCYtP9uieLAybJ9sjN7TaYqHpgSpNACw5jaGCwUMkFkBYVMaSSa5S6r8hkxB6RWggZRmzT2zEknmA7TTCx",
  "key24": "5FawdZUWLHVCmwNxWVKKF4rmDUJM9YofYrLAst4QV2p551GosMrHAXSHATwZXSPprJDKpzoLpGreujfuh8BGFrvA",
  "key25": "4ShSxSrz857B5mDi8gapn15DDakXBdhSebvUw8KgVN53Gewj1dv2W7bBs9FtqNS55rRTuxxJS74KjN6yHNLAH3Ar",
  "key26": "5c5gTYk6oTUjyf8xcAa9rMW1i1FozLRcrEkBkFdaSciLxkFkfbWZCKuXiZQFok1G7sVEfZbneGTsk73MdXcB5wUx",
  "key27": "izTirTnVqYfUtQ9EbNPKcWUiK722cyP8XJySNNzZbzU5tzkiUjRbXixCHet9p7KyfhynpfKoz8ttudqo4nKXwzM",
  "key28": "5iGyTwi9GyMEpmZGUVUE75z6dLHXn2awspyHD66vW6WVeD11otdrj5dRDVDQrMo5fp17pTMXz61ELkB1QMSTiCPC",
  "key29": "16yeUsVPuAq378GNGDBcMwVZRSdSBGiXUPoNy2bxBgdkDmSzkDW1qbpgXjfb72yKi6ZM6nT2SQ7KuBftML8qjHh",
  "key30": "3MNXcpoY25DS4L3cbKo8UCheuwPFuAL6JNX2mdnB7Mu3KaAV1cH35pwHXkYfrUo2jKPXuPSgKaftQvVyLEQ2YgNa",
  "key31": "2XWn82RJCwjqQyduMYiqikBeDs1Z1YaJwiPferKdSg17ZsGPnzkySwxJXEFxFXNNhvKRwttgXeGfmeoFiftYr4Py",
  "key32": "Tpw4mZ8FZf9sS4bk5WpUMSfJcdoe4oi66YQLCPrSDAWYE7S2iJieqwbnroPyfMWPmVuB4UjZ5CrbUaVFmcqJKgN",
  "key33": "32MufWRhTsBonXJziqU4HgDszH3hJtLUVYyHsx59s5woeGec9uJ4wGm9V5Xv199CECakwj1RveQy995fHWN4tJ79",
  "key34": "3pKzHtwvAzjBWMrreFYjdWHHNBVxjHcZEWnQiY8o6FqvPyDXgG6nM3SzSWhGzYCGVxxxbBZcKKw8xHtVweQdTuFp",
  "key35": "3HFBeyPUF6iatn3WuHw63ujEgN2tb2BfXbtDxnA7neTgYNfmVxCWFMaDwoHtAjmtmsW2rXLtPyVvogFYhktjxG1N",
  "key36": "3jZMpeRnkw4CZHhk6cbU9WVX6VtjAemWfFSbnMBqYcaqmmTudmNwfao2hLy9Vq7eDE8pgzn5MBvdQxw4qJ3jsj1K",
  "key37": "kBXmsjzo1qHYheDNB98AGz1inwTiADCTwfyY4jrYvDWsVBBsCcbz7mUPpHYn7PFfCUUBvDabS7EzUk6GtVfQ6YN",
  "key38": "37kHBZeHAUPTZJ91CELT1opYVZR1dTSbshRUi1gJE8EREKDsB6qzDjDVay46Njcs99U8NVcatACMTCg5TMqysrmA",
  "key39": "22nnrrgGHqTuLaDzRKd1mX23ijMJ5kF4k9AiZNmonp7g5vUsWAXtWfsf5SWWbvbudUHS6PFzWz5ZFPD39apghDi7",
  "key40": "3XxEKCeCEDSTFxsXn6YfFbqVgKEfDLLqvpnhLPVkPvKcK6TbjnJTueiXmKgaaLxDMq1XL3qVxzZKD3f6J2H3o7nk",
  "key41": "3mrL8NqterJm1kxxdwbAGkXX3gstutMc2Vo1Usp2ZiVcqkAeCWD2cbGJxaU7FQwbLpsNUguszEajxdorpdCcTdet"
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
