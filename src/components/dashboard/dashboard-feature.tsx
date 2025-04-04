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
    "2zpaPbsFewmW1Nu7hVdTwRqAvZY9JWVehpHhQLvVyEYF3FNtW81Xy5CBM5BsVvDmi74t6qd46H3SmGJmg1QJVrwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xcURGRU7HM2YRFLvRyqKBwQdWkLvhYx55S7PwKcR3iNEsCFFxdEzqx4UJmB6FRyssFeyJYRq19KYLePciGNQoa9",
  "key1": "57BaXQYNqLJG4Y6SD8XuRtnbHjAQ5Ao7PuSHLi3YnBgJvpVm91YMiYHEfiyb3qa1egeCPutYndfvQF8t7AZC2unU",
  "key2": "4inAUapeJpirMJ6WdaYtifcAEsTLfPyY9krF3MLADLM2YRM4XtHY9nHA3tANPq4j5bRGSb6rvmDDrtSm4LjETmse",
  "key3": "BJCQazsLgszw9gKEPkCQGdGJUr6NGHhjHQ2491pGUq8572HcpeypnrrCVEMoibR2DazHFnxcQSahBwKphYzxJJX",
  "key4": "2o3VCTWyf5t682x7Tb11J1FMxTkeUcRaURzLoNgdhzPvEP8jBDQ6whrREqY5uyQ2quGVRYhW5XbbEqZ3Muags6gR",
  "key5": "2yk8i6vHWe3DPapNnkCXqUy13cnEpu2EBCXEezTurNmJPVvKjLDS5BnYPdpER9HjLRwbvR4GxGjdr47ycqYAkrW1",
  "key6": "48wjDd72GMXAmsvCxk7tg7ygYKrYYngcqEkwEXX8p45LpFPhiD8VYH9xw1bFJzemEqVRsC5kGZGD3tET2KeAPppj",
  "key7": "5yX3DUiuyjZU6WhVMKZsn66ibu9RpeQ75wkQvH9fq4nBZwP4tk1s1GytzPyPiXRfisjTpWaDZXNdcRpvggbNJ4sX",
  "key8": "5YMxe8ce9Ap5CWSHkv7tQitAw6MzR3kzgRJsugU4opwiKw2Fiy48s7qJ5ykTZQtRWcKGYYAPT3qddbPPQQSc2WQq",
  "key9": "4afs4JSFnBiZ98mmFWQDaMF8gfqsDhCav47SwhVayoawU1m3zn9fYDXDxeBaUuJbaEfWTWNY9ygmfj7Q7kC7G6wo",
  "key10": "mRShGkqhec1mMfoSPAUUgZZmvYe6CDB4ESk43F8PpSHm9qZn6uN7rfPqVvx6TD9UGt3YAwr9wMY5YuMCz1vQU1T",
  "key11": "1jh8fkp31dCuj5FwXkuPgsfdQYBvi3mB2UDwsJrnHVfwyLyvBAyYPir8A8iBDZovjksmnPUip1SKabGv5BWKaDv",
  "key12": "2q35SS2dZwbSZnJ63bpTbfoEZoP8Kz5FxHW4gbpn2TVbsXGp6Jsxv7w8qU7BohjJ6p7RpavR3dQuthZL9w6RazxY",
  "key13": "5M5m4j9kb9QF8JUCHqD3tfqSHjpvTXhbrmku85V4WqPQeJCmSKpEJ6apyWNQoRVH5dKuaP9Bq4ZMbdjyUKd1kW61",
  "key14": "gaT7M2p8Nb2mpde4fTj6BTyZyJJ5qp1Y9BPT5h9hUczudSTQqvcyuKq43txjfwnxub4udWEV8BFeGDj1VyvGozV",
  "key15": "5A28U3a8atVrnGXzcu2YdZhK2gGYGcq3iAnQYi41c3bKwXu6hUnxBHV7d3MRhF2BkodeBynPrgHiEtPNGDBkmswD",
  "key16": "4DJ4ePWBgixshJyjbwpyCjcLFDVeMvZjRbgzfz5pT9L8auWa8LKHXYghdYekGao6s9crYrRrt9PyQw4vKfAStXDQ",
  "key17": "4UWELj4nVndTYgmfgFiK198wAtDTz7ntD4WqAWASgy4BpGbZXsSqfiVxc7pxCwKmZrF3XcmfqpXLLn76skG2Etc",
  "key18": "4Rs6dsYuGhrSQC6GuQzgNWxbHYDQVBa85GhjNoKb7wjGiqVHwRpC4tHMqWH8zxeb1TSsKSCbenFQo956fawvrdEX",
  "key19": "o68Qih4LHytiEATzdTERvNC8QJ6VAMXr7KXkH2JAsqY4dRDb3wfPMQsKaPQwdJPdDToQUrAx7ZqSB88nwLq5mu7",
  "key20": "4v89sPS92ntHe6CL43WsJu7nZnif6ZZRFZbXEt2cgP829C4GBJC2gx78VcR7c8P5NLTnDrkjuGABtsTQ5dghQTXv",
  "key21": "ySqWLnriz9M3FyU2YVj2YjJ3oaYYguZtSSHjRmdBYkN7Ai8LSJMZjtmJz38YMENfm2FLdwK6qcT3Co4Q24b3RAv",
  "key22": "3dfMj1LDs3jcB94o6NJD59zAf3XSn4RVz1cVGSLGiZe2RCLgGsFahdU3tBhxD89uouAQ7P4qo47zd6YHVkH9tvw4",
  "key23": "41GSjwyPm56eQ6UzkkizVtB7MqPFPqBPMaEBPkVe6dXQfAUshbeczyFu1kKSjdXQ6Q26ywYq3SbzpLwfvGzUQjZZ",
  "key24": "5MYLqZ6enhwf11M6eARasEuNU2dJa5SQve8unpY3t5Ka3Qx8Jq11r42EALv4Vzpo4sMsQUjFGiMvAg3akik6aFCi",
  "key25": "5Mg4SCKx43y68296uNUJyfFTP1quAZZyLS8tsZzfQiJxtrqS1RMwVx6bfUBxKhhVB1tdf6mPdHB4tTZQZFrBQmTL",
  "key26": "5etwn9KNZDwoUFpdqAScc3i3oCfAnkeNSdD9xzaP1xueEXHEqx22GAoxqjhCtoKmw9K2x2MS5jbdvpDAX9FHmfN",
  "key27": "5DoU5eXg1TYCx7ZWWpS6C2Kn84bT8j5HqEfUAUekTuCVWSf6NCwHb8JRTTwNQoyUykLTbzFdqinDbScsR42jPCpa",
  "key28": "hAjEfNYb2bFDTDu1PLsjYn2g5F1L8paRqLpbkdsXG5a4tfUvpxxLvFAX1WLN2pAYbLrb3ZFZHYgF4kGY9FAshBj",
  "key29": "3mk9u4839KQMC7Mop8QMkyp1EYJ6Y1ZRyTaqQJW8NK4uMDfAWwHY8eQtqMVeXGU6s9ne9Q9DQSNKHPsCBaPE6cWa",
  "key30": "3mCxHXZFBZaEtnCoDRCGKLoc7CcXNv9u3qwztPs2zmjRnXgJTeeH8jsGzc7UkNTYnduE8NJ8So3RFz8DKxc26vD4",
  "key31": "2DPDbEMSNawLXmjVxvbF18s5XcD13TfGfi8ZnNofxCtwEYtQ6irWczD1feGpoLBhsiS698uiv5nVAFoTH2to6VeP",
  "key32": "47FdzqANtefwTFQXBj9xHEPpwL1NCxCMABcfuEas333ZT6ujWexgiPudfZLpRR4NbxayE4EQQVA5db8n1VKPdDHp",
  "key33": "5C7WHXzYptfrPejUhTVu5DFLbpHin8R7bZfWNAX6bD4my98c1j4Hg684GjjbfFbV4juhw1nxiiLAudiuxiEG6eFk",
  "key34": "5M1gxTedNan17yt5y2JMEP5cvprU8rdsLEjzs8cxZy8oSWHYqC6CZJcUKunsJ7mKJ3cpdZvg2UfTkVM5ZRDrhpdN",
  "key35": "wmGYbvmcvGi8MfGfBoWiPJVQ7FDEJPaXosDLaRu11UggYGdLS8UaHagoQqE4xnUfqKhBLhuV3VHdsW8Rx591kra",
  "key36": "8xwHSWKE78Nk5o3BimjH7jpYWgGn8yUnbZucQAHVvUErmXxJcZ6LZQzbNXyV5Jmx2r61bXJfg7nncFXsEoZRJm1",
  "key37": "3rtgPsbKs772UXeMgZnbLnLECmU5H7xWVJn8WX2oKCiujXA2jphaJoZsdLQkJM6vd2gU9MZimaU8DqmA8RuPSqNv",
  "key38": "5zds3V6RFvhZjjSiPNWEsAGJdn8hzRSQSwq2ERM9mmHhRUmFn7v5yW8AEXGQAjRzaHXAXd4ZamVWpYmN1UBkw9sW"
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
