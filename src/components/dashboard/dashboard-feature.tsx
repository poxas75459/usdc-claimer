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
    "2YPZ47rVqgsUyiyWV3VjsHmhNKkZ6agu2cT8YzyFsBHUsp4rsG59eiC31511acSEKxtT2eTFKfz3nZ9TiHhWBRGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LTsxfhEAWETWMEuLRSMgvCxF8eSG7mNoZnRk1yzpCmDhXENqDQ1mrHku4BDsDHGPsZ7b7gK114MTiJDhp7k7WEN",
  "key1": "KFAwJnptWpb5Hvo24eLC5o62GvV8VXJcmbVrFwB7NPzt54efLW6rFfatDdgCJsMbPbn8PhazP7Y9aiM6p5QKgw4",
  "key2": "5JDY4VnfnUCRbQFuJ6YNti12MfFmDTSc8z2QVvvHvZ6fmjYFbQLWNfiSrNsoPYSFEHJzkMyovY9K8xwUrB7BMEgk",
  "key3": "2JwnF9TXwgHeyFdz2ANLQCHjJgfTcp3Wf5BhnH7iDDLT6kSc54f3BwDtzYaHbGqao86EkiQWRe3FnsFduxNpJFJY",
  "key4": "33psbDyiMje9Ntqwa64fRzL2Uf1Hm5mzd24hRFdDDoxqpUWw3KQyQz3tNTuARMYNuFKZrPRDFBV91FrCSAra67tq",
  "key5": "5iw76F1corjB4jvDjr6hhAiSpKpcVRPBJxvycq8fsEvxWMKixmFBiVuFrory1JC31J9Ybckh6Fk261Wrn5ZeJ1mp",
  "key6": "2g6Enr18VptQubiEr9GRododj9iH3hzzJ8WWMSmMx6XiDDjf6Uq1AZfus4ayZz6hukXPMgb9dMM2cxur7Li4BZSi",
  "key7": "5JVnE2dgepYJgBm8eFwART4JH316mf7YHY3cfZDb6aNGkaKnQRgybztzoH3zkcgy462fHN6z1BkKHJc6VHVXeXYV",
  "key8": "Nzehr8Ut1rbPtxGmvxvPWqBAfUfjKr7HRzKGgwtvqXXuj3KDLCVuXT9meq3Vf5UPbv6w7qymhtusc4zWxWyCoYa",
  "key9": "4d54mURs99tmPRm2STJAwM9DaZRdfXZgGkgnAx3mkJLFkcoy47ArUUkNoQYJxvHzaSV9JzrrFm6H5NPEvUj5gRXM",
  "key10": "NczheP56ChuN24s5TSUp5GZ7ZA5HzuSQBMwYWa63us4pkf2seYtw2KwkrLCKJNkvscCUMX7eqQKM4DheKwXyzxf",
  "key11": "22YwwGfjpUtTHSr2x6XggU31ttg9vhaQCELip1Z1c1DVQsBNN5uv827Ryk28SVihQ7PsTroTYf1q6W2v3vNHwqce",
  "key12": "5W6P5ppxCb1MK5dVZDf8yjHvXKdxyHjcvM1HR9xxccznrJgCDzJY3hGZ948GvcU1teJ2pAfBiWa9cHJE6pxkRG7x",
  "key13": "2Sjy4dnmEiJL3Zx3frRakKQ711zJjRUV9xMPL2v8fjLc6h9HMYZjEMZZ7XWFFgDckHnnHNynSsiTQeU6Ma9bFRGr",
  "key14": "3LcZrzWxpoVJe9Cqc6X2KPCfoQ5CYDMFYkFYGJwnHbRt2UhGkLsjdEvFSd5cSzFKGF7dBgdHyAA27g8hY8n6stre",
  "key15": "5u4ZSEUDaErzHJ5nwzYY6BCfg1pRy3fhs8DrAvhKro2VtYx1bNqW2S4NeEdEF668LafjjmdK57L9Xnt3jHFZzvnF",
  "key16": "5WTJwfR4UoHfPWX9D46UyRL1wFFfCscZkM2jjnrumJXCc2CB778NWFaoBwXAHMY6DPTT91zHNry2Q4q4x7WGA6gZ",
  "key17": "7PitNuHKmBkrTUMiSu8SmEgdAhUEMRF1MZNcFa36cqRe2Fgou3sLrieMHF4jY3DAKDV8iaEzMPA4S2vZ1ki5dgY",
  "key18": "4Pe9TZ3qxqDVjDeFNy8Jm3YgrtBTw58qdVthdwG6kK3jEi3zFn5jN6NoLPA6F4fnuQ4qu5gpmy9SC63hF6ajrPc8",
  "key19": "452ExxY6uGYj75CxcKV2nyteqLgD1rmDRcEiK1Lis8amHQQBJDPi8yFLNYFHjeuXcR7CUaqghfqvwZkqo79mFoGT",
  "key20": "4wgYV4kVY6HpL2GPoJcXLoKLfGz1TSLXrzwv4Pe1q3TGatPAJP41YEtLChuVJfg5H3YcPS6dP2crbkCwop9Jq6NC",
  "key21": "36XuLTLtchTDQbqQ5ou5Ufz4JjE46KFSupvYhJeSf3XKL1ksW1Sr53f8j4q3Tvmgn5K8HGi1QinP669CykjTs9PB",
  "key22": "4R547AWgVqaAT2SRWMLBuM5T2G8BZyqBdaewsJFJS8KjjHondJCKPB2jmrhf75cMZT15q34qWqgXkeULD7UmzHRp",
  "key23": "Xbbd16EU5c78RnHXnpuJw1hLgNVV4gS4sfBat3bs4gTJMsef62dZhm9XXTy6E4JGRwWoGKp4zpw35pfduELSAc6",
  "key24": "4pgJrwTphKTubfP8A9GGrhZnqxdU3LMLdVzURtw7wu8hWnr7HMKGCzoUuAkCgXvhVi9xQhtzMsQTcHVZZaqwUEP7",
  "key25": "zy3SMrtMFZa7Wq41LWSztqbvuqYZZPjdp7NbRfj5xQUf2Y3cTH2HUDG8uveRycHM2qHutH45eDrGwRz5FZQdFJh",
  "key26": "4hmfXdpGqGvToPhQRE6rVSD4AJNPvndTqw6uFx23tFwVNn4MSv9jHsY1Ac8h6jCeXREpidfiyPpaE6udCYCLVMq1"
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
