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
    "5CmJrZ8CuaqDUDRCGEXixFs6HaQmwXfhsmPEC5XMoF54w2BUDJ7cQQQbuMAhwGBwZPCM6mM58oSzxi9WdjqVRdw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KLFF2itn7wJF8qBtNb1ZQ8DMkB35zFJSNtp8STouUsDjpNajExfmPJG9CEARm23aPJLcsswL1pSi3mK2p4pM6FR",
  "key1": "3Q7Bs7USv2WmBHzXZnPwp9E54mRoLG5u7LCoPJxj2XLXZ6sv4L4um897HDgZp6vqwUyhkKGKvmcCKYmC56QtE9D4",
  "key2": "9ihvTk5QEJvSz6JMDHpri5nzYGVpFiQ6sfE4pa2THzmePkkFm1qoWsgSyu1H6Z7hDLVjMZ5TFqWdjFeaKDPSZXj",
  "key3": "3JSRrjoqtbeXAbv3CVutvhuBgVG4hXHvBNcRetnfwwULkqJXw4RdzUyWXQWLyoDopGu4L1sAdXemCRn1kqeVFDoc",
  "key4": "4qxCwuX2t1tzRw3okrm2tPB5kZumQodqQfgcoMDukj6iWdfZic4nbtYpZdmzBmiVD3ek6R9Ttg2gt2ZmKW5shUQ1",
  "key5": "2VDxzAyku8CPgVpkj9tZxF3ng3U5ac4wpCWk9DbLHQnq1dB7AHpQN2XasGgGssrmEnZyjxcNzwqLyZzkMneZPFKJ",
  "key6": "26biKHJR16BP7zCTeYB5DwEmcLUcHwLSRmUyfAp42yVzAS6uLPUrQgiPPz6RP17NdgvoA4TMkCa5HKa5RDAoMWET",
  "key7": "4VSVYbid84A9aBASShv797W6Vkpshysv359nJFmU4ppAwpzoBDNgQidSXT8dwiX18r9NFWboCyp4bgYNWGJFF7PQ",
  "key8": "4M8Xom85hW5pg6FPqCXkRvXgM1TZvRQDuh6st9174yiHeEHUsoo14BNCiXv5Y2iHND8g8yNWT59VKWVZFaquWZnt",
  "key9": "2xwXapvWTXGvkLpPGgXMZqQCzExH4xjEwiwDvKczmcpKVXn3SJ9sGJYk56sBcwjufi7pMg3idNycf8eL1WA16tCa",
  "key10": "4sazxop3K9hGkK6XiaahiK3SMoxBGZ5EpmfeBDPmL7JeXSnDurWMebqtWzeftD4urdsxYT7y2fTZyg4xK9ku2ddq",
  "key11": "4NEJTT15YDL1CUR4gFb97n4AanjbbMmxJeprR88Figy93k7W8ckk35nHyGyJ4S71j8a13xV1a95evUUSfYAPm2Mr",
  "key12": "44MQZtaawiSjQMauPXs7dDr4KNHCeLeDTPPkgLrUUK2BU6FNCWLKCnuyqQSExkNv7uU7rTSXwLWs1utWdAJdnHHf",
  "key13": "3ZAtsib7zPNN8ReqQtkm7abQCUm8qX8u8FdErVHLwCiqijckVSYkfuACxF6ye7B6rzUSLBpgmVLbTT6nP2TDwLnk",
  "key14": "3LENWmQ4FBKEv3kK1s7Nk94khhN2cBMPs55egJEXGtaxinMU9n5JZc5Xw8FhrEAPCXh2DDeVjpiEMiFYCcrHV8kJ",
  "key15": "37TYzyKaswGpZGavZKAD67R7Wjfz8kAbvjCWWeSbsjjaLAtnNsWvQnou66Awid2DGT5r5Tz3XmapiTfDnt6F8pPR",
  "key16": "2nEzg1yFZYz4CjeTusDmiWPyw2L5z5q5XTtRJAbApVVY14vkj7X1jWV1eUR69WzARNCLGvt59hgE8KYdeetWY8BC",
  "key17": "faof1fmxWSH7fY4vHvEXGZLbXweSYPPrZxrEJxR97KgRgCkTb51M1oduMCTGH553iqnbT7jSSeJkx1XddU3RHAm",
  "key18": "3gFpgQkvSKqzxyLiUc2AshAKFGeyDTQdRSQoyKTSu4TuM2XXYMWq2QVgGPY2TcTjNtunXEhnbi3DiyhXpMCn97N5",
  "key19": "2wUbny8w8RfewwjUZEjCnYZgf52UUJz37kQP6gqF7aWQ2zBVXGvkXz33dXozdGrKwsivjhoHS9uxHx2z6PZQjkNA",
  "key20": "4k6L2qBt1P2fBcWNmxQSjJvyEgUPM3eabB55BKj5QJatA1LyRVnEk1XqyZfuWWyUAqVQhcWZ1VTKXi13LirTRMRc",
  "key21": "Y97Rqdhx5bm3zRqb1fD6t9cGFryzdJfhAazwWBxjamzZcWY3M85dbTJtNrHQgGq2LZTVp4iXwRRPoP57E6T8pyL",
  "key22": "5nzDevtBEdnr1GNKAf1keVbB3gKzqPSQJmT3YdZAJjDaNTvGkxfGzT7CW3AtVm2JmtsyHg1ZgvEAG1KVDypdWT29",
  "key23": "48Tc1PaxwfUt2npyRBYf3g2AgrC9SjCYeK1L5y2Y4wKkcEam4HtHQf3cG8UenCTscCsZfDs74haUqgZV52Ajv82E",
  "key24": "39EgeRU31UirCxcDSaJ3UijUXZASK43F8dzQJdeMwmsZJMUAAkYth4JfhQZKzrpbPghL6MaLfAFiQYRhkW3RnYxp",
  "key25": "3s8KrsUQuGRoCSzuz1S61AENCMRen7sZFsh5SBJwrEVFNCN1nMiWyNmuYf8oRfVzgSt2GGnpvVwtKp6kkuaRBikN",
  "key26": "5ktiFTAQymHCydDKXXoExGGMmhiBitKnu3HKsx8E6AqxuwEPefv2vC7jsPQ22xkUiHGWRqAGr59cxzrxSyha8yTy"
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
