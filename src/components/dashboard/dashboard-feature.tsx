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
    "2qL3qbLv6x91FKVYGWhnn9FUfBf2Kpw75gEdRdJS6VEQLqNzhX9CCc5jrji4mDoe9Ht2GGggurqca6HWJgw3kDjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FoyHCCQ8VsmJTDe3xAakPEBpHz596mAHorJmqJq9y2QN7vBtyGgnkh834SbYEezRFvEMQwLyRssUb2Z9ZbZw95M",
  "key1": "37gpx5SqCYUJQeo7tbAmNVhyw5CP3zFrhmF2TRkJLr42bc8VRzdRCjZvJiiBxc5ZYuRSDZ4yr4DjkxswkTYT2bQg",
  "key2": "5EcPFUs2x9KhhxVNX7dsmKxLia1RM5GWKdrgkjqhYfZj91axNcPDUKkuzDWb1LErT6Vh6MrYXspGe4xspoJYFtHD",
  "key3": "3o8G9WmbAMySrVRrbPK9VWXm1moZxQtFTRNaj8fLXx82nB9aM1SqCx4Yjcq1PcF9jepzUfNnRCsfidAjEGjLpguj",
  "key4": "3hGSSCjgh1NTCbm2gFbDrvnGVqZNxRSZkiNDPgYETL5dyUjahdCbHbMWeqZAqQxsotbnMavaGG4BC6AwLxAayh21",
  "key5": "2QtZ3Po7wyVytEvMQgQ9UbyTMb1RFah2hB3FVZzSRt7nhq5mKCQ3aUTfJEMpcerM2WYvb1cNjFUgCUxhR3zUk84g",
  "key6": "dDu41ojTgTpvikDJzc6Z2ocrCUnz74pCbEsB7u5JnMjyNJQSVuuQCWT4eJGTb3QHMHbCoRibJccnZEm4DL65Eg5",
  "key7": "5L8eN9Dea1MQMCZcx37cGhbf7kAcbdpAG8rCPxbPNVeYzqBX1y5Krc4wFd2uoroq2cgt7s3yxfPuQaQ7uQjZnBEu",
  "key8": "juJcnc8C9yvRpwc4YYdDhawnGuxsyzYmGQSkS5RESXto1BF4nWqCQbLBjvrWqbK4eVuJwtHAFBJnkjCJpunxBiU",
  "key9": "2GpRGQA2SuvgetEcsH7gS8b9kcd5HCrhMKzUBYYJa9vMcCD51Ns5qpzLEiSmw275pzZng2LJ2meFjyaJ2RvsGxQB",
  "key10": "5amLVzX7hbZMXd7TJtNqPdW9U4ZqNTAAFjbaSJC4uyyFk5RWoqvSfWYtRobPHtVhEDY3rGpMTJhVk45bUjfHUDFz",
  "key11": "5Pdhq3GpTKBPcV388XR5x1pTs2GwGYcVNvJtZqCm6nUV4LSGVRh68uQtF6qPmcQS8nwCDwkEG2EYJ3wAoDAB5Dno",
  "key12": "5ayw6rdkxaTQGWWiAmJMVGne1KTB4mjMSPB6XoUSvcUxMJafqdq9hKbAMzhZPEWxqgbZtu3kzfqQDe2Rc5FrSbyy",
  "key13": "5jH6PzNzcBjAETACXw4Cbi2aAyPoqicycQovyxWGFH8WoV7KNxtqudPzrNvDrdGGYSmpMdcrDs1NJAybcQSTs8TZ",
  "key14": "27MSyBJh1Rbh1fa7wmFbsHjGn7gp9GDZQfphcKtFWzyCkoue9kqCrjPnKJCzZTDZVsToS963dZrYKKma5mux3gfd",
  "key15": "3aakiDPZ8yw9Z5qaRSY9yQ5yyDknvsyV59tSFzVK4bpSGbQjA99y6e9BiJo9KfwMvxCCVhaxftJdB2yDoKdLVZ4M",
  "key16": "2G6yg7UCjXM4xnPAcdCwq5W5akqnbfinvqabhAE49cv76zniKjFSZV3SmuaaxsrsGsEBStguzBUU28JR8m9iPra3",
  "key17": "DTUBD7XQmUeb82UzaLBZvTRWFQBQX71rERy6WL4TnyYLUb2HEoaDvzCnNy9Ak7y6x3zaW61yub8RvXMEDMVmpkT",
  "key18": "2G5vJ51cGFdrrkSiMLs3d26W5ro6JeAYq5xJKxAooWuro18hRgqNYfedstyWtuDKCMWjnY1jsUdZ1T5BxntvQvYr",
  "key19": "4WTNHMmZZrhFV2id9YtuUMM5ez2cU5qjp1SHpgjqyNqTnhXysCHeGTCgcwSo1WZaSGeenUfauH3HyTwFmjSrMd23",
  "key20": "5VuMMpDHsKPduavTmwWaJ7pPfY2Mbbb7jLy2vjZRj3HAS2VwosbiMSdrmuzp1LnFcgL8GKwbDHiBCfKXhw3PwL5u",
  "key21": "3aDEM7hu2oNUk2Qw4e71bGzYc2j9dKwbXiiMqhGLDg4kaj55dF26musAa1BokDwtcZqZhbbHgTsompwSZWyZYgDa",
  "key22": "5LmyEM4ocNb9pKHKG3Whhb9kD3BSJwdqsKgHY3U2v1AoZzbfeGLQTdtipCcX89bH1dPApyFUfLVeKPAyx3gKjnaN",
  "key23": "5a61P28awsf4kRa6yw2mxdkN9ocjHZLQGuxCQwbaj3MDvqQBmCgGY3uebbwcX73qPWgK3AbxdCHTSz4giHLoWXy3",
  "key24": "givbPEGcufbn6Vo7vXD9GvdVyk2NsJUiH1M8ce6ukCxmKnEde5TCvF29wjM5KePCDrEkW86urF3riicf862R51M"
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
