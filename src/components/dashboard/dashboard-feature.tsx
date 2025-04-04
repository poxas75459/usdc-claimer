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
    "L7nMoWDXcMFkv1VHDhFy1VjFEXH396V5gN6pS4X7TveU3W2Kjr4h48oSLPB5uMQwpgtr2ESbryrbZFRBLQEbfun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rf66B4vcJ6S47x4DzX6ptyGJRuLuXhv7eJMvb46ktVLFCG8vYZMruzH5HyWgnXNeidTrBLsfK8kEh4SWa9y1xnq",
  "key1": "5fwNh7d19MoXVdLTuJgjbq3xL9APMQr3JdAr8dEHvEySikAJfd1WbJxNudr15Ch4GpDmrFcDa9wtZ2ZLRPC3ZA1Q",
  "key2": "4mySohRK2tcTZwDdTRTbBLrZeeXSTUz8ymCpszhqVBXJG6Hf76w8XH1gU1eFHZLe6wgs1PWa2hkSPzHNc33joVx3",
  "key3": "3yvsJi4USFAgo2hLQicRtsEZEMbPeXESTost7QDLhe9axRUymJyJLERWHvQf5wDWrSAzbv5bFed8T6UnndrfkVE3",
  "key4": "4JFk9fyP4XKFGJ99cpM8ZicsCXu2qjnGX5FKkE5TGEbXQXAbeKN273XLNMe9Q7WxKUWiNkNKy43jGqwFJ93Huqwt",
  "key5": "44utN7aZvqZC3gm9mV4DJ6poM8E4MauBNba3r8T2AvE19Vby3PiU7fVuJGbmSFmSmMde4CQcz9kZafZUsXn1K5Sp",
  "key6": "MehqwzXPG6h4oY3cbmeWvNPNuddcuWUHfnQjr8LvcMeqi2ifSDZt3PfhtEmmMXE4LgRQtQm2ceiGTs7CcWCrYCY",
  "key7": "2S5pnLC1acv3HJYj46cQGf5eCgfeyhLphFRSby8teYXhwWKs8aQSaRFCdrJarzCYSixhLft2dAFXt8YHDD9qEx1N",
  "key8": "63NDTZCzBrS9qiZZkaaxAZLQZvYdJPhwAeNu5iJnHMxpPYVreS9a6CZqZ1nea1qhiGi7zzJtGF8tVc8VuRpAFuhD",
  "key9": "QCwM8emXGAxH5DuJaE7jQQq9mkBE9PeQa8QdhZE1NjtxBDny6JAXRJGvB9R3FBuPXaDz548PAAmriGh7xqtMSoa",
  "key10": "4CEJkSh3rKCXuV9S9yCu9hPqeENA5AVYp3LdL7La6fqVXr4WeezYmu6S2G6YLRpxBzQi5mGEeB7boEFtJco7XnG2",
  "key11": "5XgXmMQiQBTSHkbAHwWk83Zqy1MrnhYSjo1asZJ1eE3aB5QFkB7XBZDQTuq8WASWiq2YrYiAv2emU46kXwSp6kwZ",
  "key12": "6q2BvLpA9zAQEUHF2y9dX3bpivD1txZg3maLMVYAF57qNEbfQNBaXeNrutSF1e1CsLwK4ash34pCfNV49QsHeeu",
  "key13": "2qSTwxoQvHZj834igac73Jspj2ajHVApsLZy99tdWTE5YJt9v4ecQbS6RuHwwagPSsK6tPxnhvwfGRPCHxTNCEpA",
  "key14": "36fm31acNM2Cn4sgK3yWJyiDgLpDPELEzAqUgACg37nDLFur9Z5hpqr7uxDHJPqRtgHGFcqQfM1orbAjw4WfAi6Z",
  "key15": "3yK4zBNZLFq5JDThzVakPFFLbH6ncTrXVA3Wp5CtNsfjpeWkfR7vF11rQ6aMvq6wuud2F3o3Hcep49cAXdYCjZkp",
  "key16": "7MxU3gXnC4PeayXjqdchktEfYvYPw5o16ioBRNK4efNNKctvcVDUwuLgfv5J2fEhiGB4d2NaXM8wfjLf6ZSJN5J",
  "key17": "55KemoYuf8Dvb8obk24TwXgWLRY8LuJfzmiPWPpWhm3e6ZmEmDVN1HiwbJhUVTHRtVqzPZkA9udHwdSkMzWL1odS",
  "key18": "d31k55yhkB1onZxLXoeX33QatS41pYqnnhj8ti9MgY4CKtxhCyjY7TFuh8p1Dez5ZBXtvcvRRiiHE2qLp8SyrTN",
  "key19": "LGVbdmy51LWptVtSoa4KZ6jUEGgVp5wBEKyWhgVq67EgveVPVpKActrZu3jRs1CVrkmkDirZmwsRoJ1gJdSdjqs",
  "key20": "3wRNdAkTCDiwfTB6S39K5guqJfhtAcFkmHJ7adjVnx8MZEGYdYsnBWc1NSWL8ePUbhqm3mM2W37SyoqV94ocSGuQ",
  "key21": "5JUC3npRhMCduAuz8dMHMAhJcAfo2uy8SvLVKvMwr6p31p1DzxYJde12LgYjiE1LjAWokMzzVW6JXaj3krN6s6RV",
  "key22": "45jvWiLWRETzTdeEQaWS85Z7t5M9xnbah78JFsqhUGsCHM2k3poPscDt49Pk79xFkQgx1SziiKrYnri7X26rZsue",
  "key23": "3RhCGv6DdvAhRNuhZ64yoLR16Ft8Hh7Fpy9SgHunY2zcUepMNFuxiJomXt2LuKU8PSobFUN6nucMvsXtvtJVWYNf",
  "key24": "6igZUHhCrsdhSjwtWfmHykBUZUSo2ZA9YQsGnrRnj9KtNg6vHvasQobjymxwww6eNcRBT94VdLD54do5Q4ttEde",
  "key25": "5CY5e5yLSK84qo73ihnBpKKT5iL75oyHkgMscA1wV7iU2SxuBAGDpmxjhpiNjtSZva7DGeM1rWSLvsQh85wFugMZ",
  "key26": "5HHhPxU93hMBbuNjUpYaA6JP2kDhvgXf8UpEb4tvHMcViQVkXgDSmf8DDMCZnBiZqJbvLETT8y41UAf1b7ZFzCa6",
  "key27": "4yJqwy7RPyVKmJtj6XbSu2v9cwW757fmN3MFDhJDRVkVPcodykXE5u5ByEGbStUZ9rJBdAK9b5xf4Qquh3H3u6qa",
  "key28": "3vzdEuMP3ZANE1rbMMF6LYKoSaa63dz4VyjKSSNYq12mf4K187UtaAhw9siJTixWAXT96WbdYjaXPsPVrsJtSrLw",
  "key29": "2iUqQNgvMB82pRVKoLoTGTkcJPRihDLurr6ySWjD1GtZBAwNf8ZFd35gumoaxVwSMtuhKrnPKymJFvv74ufQbPnP",
  "key30": "4tGwad3kLzyibfYr8w7vR3KHag4xYDBRGFSuHRBpxe2EXF7rGbkptcNzmtw9xWatwLwLgARE3drmtBCuZoEKLTQd",
  "key31": "5is8AB2TtuKeFRHRdW7RZNfV3Vyv9K4SVXZh3ueVPg9kjFFP3vB5Qt8GdqKpezW4goA6AhJLZRxAabJLzNh1GqMH",
  "key32": "59cJQ73K6kXtfMgCttQ7mhfBv7TD8fuZz2ja36FDpmKBLYesvP5sFWLeavNBGNrf591J9wo3F5LNGK5wdS31VrDD",
  "key33": "4tCNqt47afg5sHkoX5QxBCxNvYoehp4VbJ8qwhdM5kV24rtbc8t63iQeddks7dWjHx2xCLeMpHM2tVWd62xGbtq1",
  "key34": "2Grd5neAV32voCN5zmDK4WiLeC6ugMMNJ6KGDQmipUJo6nuuiQS5J7t495Z8BT8kcQEiQC6T4MYHLVDfigL66xd2",
  "key35": "35Q3EU4BPscn21kxUbApQDW4oNPbpfTs37SaGdyfXgZyEFKd9UP5mcmZ8h7TPtHWAz9qWfgtmPjmG2f8MQYuYfnL",
  "key36": "56w3ZCQbMnaHCDeGB7PtBdK8vMDd7rWb8utqtcri3GacgmJEkxepi2dkcQLZJnCtKL1nvWEG5qmHPkPEKdfjAm2G",
  "key37": "2vW8G4VySDYmKWFnXdqv54seN1yun1d1ufMAPRzz79MBGEbihXBdJRUmrsAWj8deZDCYBg82GDrViqLGNpVjZLXf",
  "key38": "4NjYCGUPMHggN63dbsQFkLycRUESE7Ca7NXgsZZPipjTiYwwspTxrpgnbL4D82rGpzJ6F5WZvqMuhm495esGwj3F",
  "key39": "2rKQxNg5cT1wtAMo132cwZr2pZsQFWYfSbtVcfeczYeSNA6xKUGzhqTqWRcEYUjLKzN94gRLREWDpYby4XnVLDb8",
  "key40": "26DtoNq57H1wMmNKS3tPjP7UsKdnG5SjAfDhJL7eSB2MaLxFRvkxY9nmJ3cgYw3yXArYeUPnXNmzWMjWMo2fsXXp",
  "key41": "4ZctgjW9mP3MobUpwsbXqWFcnFsvrQ9veJ1W58zhGNeV5b7WpoEZ3zNZfDb1BLjAgyAfF6RCVBQn65pKZihiCvGr",
  "key42": "2ogxAdFYXysBtjP2iQ4H4N1svoQqnDjkFTz973ZpLFhtjQimaeMN1aJ1Es5PAdKRCX1jfPKq4RsfGSuMBXGupK1u",
  "key43": "2SQbjYJSrtwG2Mq1W8EDQfhLDakMgGKGd2UUM1p2Hf4UL9SiTzfGK2L6KogKS4c2DJeqktswAmuzfqjdbQmqLCS9"
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
