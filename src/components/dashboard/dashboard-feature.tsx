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
    "21RzRSsK3eKq3P7eYLREupfvqXicwnpYa7FsU8MeGFwtGp3YuiW2NqGfx6kyubhaXDioR2YZcpV8ZGzTZRDpYrLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X9MBzhwBPcSfdz77yBbEndXn5b8pbY5NqMGLLP27T86vLm4vCReSma1tSegT2Dew8hPXgVKXPhHTY6GUKRw7vpZ",
  "key1": "4iD7o7Ue8VBo18m8XLiCwMFP9gAEPtdh9swqUxniFzEPSUCt1sYyR9KjM2udCTNrkWaXjtN43KEMRciwYRAfya55",
  "key2": "3s7as7fAq54Twaow7i9CM9t8XGiyE4aapoQYUjx7zLtjM2DLZxGfoKcKzDkcym3JNNvT6Py6LT88FnzKnyqEZP5m",
  "key3": "55QZWUpCuRRLyVpQp2pUDHv73ddbHVM4jtU9XzPMB6c2PtmVxaQpRF6iShsW33zpCPZ2chTgdRNG1b6s2MhVrsK3",
  "key4": "2LqSTUwWRrpCeoyUKPWxebcEnWhvoMTwFbsagUhuQF1aZMYnqUWCfy5FAgLvhBTBPjGzPmRoG6RtB7VktC8f7QS8",
  "key5": "mQRsxBDgbKAswxZNzGuUdpcE87eWWRdo524Qx1V9Ps4u1u5BFSPGzPBWsLsR9hfS6PzBfT64B5H3F72TPZVtfBd",
  "key6": "4ma5WYWbpyy8ZALmJ89ob3dkRPQJ1pv4Xdi7DFrscjFpayUsZZparQF1vFCV6rdyvhq7mDNuuwtWtMu3UUbkNF5y",
  "key7": "3aiGpGS61XxEEk2CC2utxRQ1iwnsLyXKQj27GaZ6Vz5iXF89Lkf3oNypRXmPXtT7u5ZRBSxtDvosiLemtNeCheXk",
  "key8": "2avsfL85KMehyg7ML6qkeU1ZBnxCNNNzTAbUMCzTBpbJkkfe6dx8TmC3sP7PShpJkJ4dNZnKdpShzEvXcx5oeCzL",
  "key9": "5mRpUZyACyWubAFtZ5kFEb3EoF1qzmkUmd8UkTtyLxprRw5PG3Q8sLFJSoWDnqRhi9oRAvE5zDeTAFuHZYfXJ958",
  "key10": "5VY5DFh13PSaYkHbfkVF3LG59Zo9EWFWmycGZFXxifTCePz3kXG4qjikaVnnJp1PRvTx8JTWqUJr1BMxFmheKkfN",
  "key11": "3uuQN4y4FXbkQ9ELKbDL2P6FWpNgWo9khfa69k7UXQQPeebefJJE9q5CFn8kdRUyH3t1C81YeWWEXsqRopmNr41q",
  "key12": "31ouBkEy7SD1JQNJ1NBTExSt4cJniVzVCKDR2BWJYEb5bauvRUEb9Kn8wdBRB9utoDEembP8sUWAZ5Y9fXUCGU3e",
  "key13": "3A2oe2JuQfLtyJrZ79awgPaxgnczrhmNBNLhJ7CWajjF6DfCakmHzJVXhm6bjUgoLnZ2XQpTAyuuLJTohYBbFUSF",
  "key14": "1vGnSRpZT7AW2Ms2yzyojTUABhy4LVAn2xVAWEf5E8DX8HQtLrxfSgP2ViAJKHmE4DG8FyTLHSdpJMs2FjSMGGE",
  "key15": "48ea5GKNYCm2eJV1AeNxJbo4vQqnbbqy3jYMAz7ozMeEVQnXmLx4WzRSaCrDRS9uVZFcSZigtWFtLBsM1ErDy1Wn",
  "key16": "5wzLxYk7jNpiz2eDE9jrofG9PyogpvDThV4cvNSu8CVVkgN2xEqB8oxjDtM7ZfHrf2tixdjZvc7DvvGtrQL5AYKA",
  "key17": "3eBhQ5DmoLajpaXsPXYCFqxWFiZTpC9rY352zHenGAHjXGUvxuytxFCdjn4yhsBQK78s6TQssrC9UihjUyqmaCtx",
  "key18": "KRmibX6BpNzQX5FSVWCLBKsGLGTw2XVuUtse8iMG6weg55iKaiKmsuvhKxnZaAXut5cumEumxEC7ts1SMp51eZn",
  "key19": "4CUD16aYHQjZT3TezqeVy3RWnRdN8QiTskQfEY9mVXV6q8NkScxsVQNTEo5CD5c7rtzp6UV6236cHf5s5ydGFVur",
  "key20": "2yVAufKsyUhjQTTuy5sBJmbj26HxWhVhgUZT7iwKFbUJdhjBUd7GwvY9eJbedvL7tE65oxSch7QEkgwJ7J8dqcNx",
  "key21": "4R5R1oDuM9iQmPiWoo1Nb3f7EhQLwvSNiri8X9BP1A6Db22GtD8f64i1ikye7ytJr1Mx9gNw7oBjysf7mpwp3Kv3",
  "key22": "3GJz4WHQ98i2T8kGzyT6fEEUCKHNEUEmCoBtBZPtPYeUBPVqZDcuKzQhHyFkBWqkxGVC51UvysSz3huVF5EuNM8T",
  "key23": "3oNjmUWjRKyMP6z1mGhtbVjfK9abvr85QitTbeKPH7H9A6ALo5WpcobFnDnLnkR1jbGe6uzMZZ7NPxGeprqF9uoX",
  "key24": "BjHCEVAw3L1NJH1X4JqwGnSJVbSaihJmHZZbp4FJVCfhXEaf3b5yu2q858a7HKaVc5nQTbAyEL2VVv66M8KT8zU",
  "key25": "3jkm7dcK9fCeF4b2mgweEsVc9HJTeEG6U2711NBEr3oWhor78i37SuXtKa4jp8dmnEEVgKtB3yoNbnT96ZpnrUe5",
  "key26": "5er5d8uQoSrGVwKqvZ4uEbN7Jr4uxZ3hiiwmReqBjHwZLguUhHvbTwofQAXcQa5QSE52UstCvaFB8kQTAXnYzAcb",
  "key27": "5hAX9dont6JdPewui8WkmNiJ3nTpH3TBC9Q7Q2J8BZ3TQ8ULv9fhMnmeaM4EzFJ9PEtYF3NYVKRvUepGgit6h3MP",
  "key28": "4Vhd4YeyMkT9zB92VBRR9QoopCKa9MeWZ6okFDmLpnrDEwP9i5gtnZL8VjHVgQ3oDbzWMiMihP9GVzpYeQ9TKxzD",
  "key29": "41ra7mKBD6jhcPxJx42J3SgbkqmPiGRVizbvcAa9KfQoz2GAAitfLjiT6oEqUem7AW2ekxqPy45i16RaNEUzQMZJ",
  "key30": "3tz3t3ehMF1VJqH3FpT6A7rcuPxRdYCeMqm4VUrcUL2PKTx9UysEjwGbDAkqHDF4yGPUBoZ328MNxACKBnq2SR8X",
  "key31": "4T21BeJQzxQEY32Y7m5P2yxmQLyWZJSEy4ci7mgtDErAh1n9Fn1zMZFPkxxnFiTyv2CScUJ3k2a5GdhauispnNdm",
  "key32": "g5bmdpm7ufqP2EyGmvfCu2sn5EyKP8sAPs8NRGa8oGpJKJB3Gco6HE2zg1gfnRP2tvF9tpPd3QsEa7fpTLwFhXH",
  "key33": "vf9G9zAKrmbieRnJnU6WkF4ZSMSMi6xEyAE6z76qZvwoP1kNKXpJdcsf84cJYZgTNFY2ZW7nwKxHzZJj95QN2NW",
  "key34": "cxkQ8XDF711KbyXMhZG3Uhq6znWCioPfN9y1xdLnrZBSpGtQhFCw9EgvLipREr4pMMtHiB1C2cURaGeEihuToQ6",
  "key35": "2zr421ERKnurc4BSEodHVxK3HCFnC6iBd988T4Q9eW55X66F31S9HppHiHPkr6fp7Qj3sRjf2B6jzsTfMxfs3wmP",
  "key36": "49ut8v41hJAghxHZstZo6JD8mgW7yifSy7FCePGRRZj2fHDjRHh5H1fCb8vaxpS6ZgwrcCwv18BqxvQE8uCSrmxP"
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
