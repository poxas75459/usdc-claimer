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
    "B86xzs8RAs4qXtqaVkWWvrYWntP213NcqdoGsbhbbc81vrcppwbEbcuiDws8nQhjUjcBUEAsnb7RXwVZaPve4Z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a6p6iRaf4xfdBa7WTfwcQaM8HDYfYbmP7ndTMxa94kCnZVupcWSVAHdQ6QLybn2sKYFMD9w9TMSPzjTCJWd4A7N",
  "key1": "zLTRgcu35gACPD3gGYLvzuaEhv2mv2VFoe7CoSWgz6czc9fVD6FBCG7bzALtBHoqbxPSnPREomtMyY2kJiHRAnj",
  "key2": "37HWkaXKZ9X8hY5uVShYTF79e24BXufYxc5EfWG9BCErqVVKjhVeV7L3qQfd1KRsgK1NaP9uk2TV8CcB8zoBj21",
  "key3": "2JMGjaFEdYzBXm2rDRYM4qxw8aYcaaQpRcbT9yu5uJhcsvf2Dh49bdwrd6vAVCo3AYvZCAud1cMTaMywmWp4o8EX",
  "key4": "3pwEaSPiLf2ErrTsdq61byfy5HFpCGhymSHhmtedGf1a1xQ3mgX6pyZ1dra3Rk2rJjhua1WSj2FxUu3xF1LdShjX",
  "key5": "8k16RfFfuxHr9dZ1jYax1xpoSscUXWD7iRLUypZVU3VCCn1sCQGccg1wT2ZfJq23CBrBKvAn61WZ7pqNWpz8hge",
  "key6": "2fLdaScBHQMuYzbT5aA81LEty1YJ9JVunoMAgbyN3LH4Bz9Nj8yrq3qYcDbxkvM86EyawXL62jF4iqiBv9HVCCPf",
  "key7": "3Crs69pxM9auYDjyi6PSfauyM3BiH5G3uYVhV6zo9wLxgs2csdp6UtGH21z6HNyQwq3KaLadBEgEey2BxpT4N9Gd",
  "key8": "qKCTe6wqWNiUYAn8HYXpSmwLMABSsmQsxReVSpqK1peCWCetekdhFcFhT9kK1GizXzAwPNaZRQoT11EhkzmeF3Z",
  "key9": "5Q6sb9EjUYbaLCDbXyLUyBm3UtS1fHEswJQU5XpTM2PuZRcXn7gJFRJLrntQKsWQm1ugt4E5hnsAokJtfiBpe9wT",
  "key10": "9Zy3QyQpvy4JgQ6ZWc6hYF67Gj7j5SDSFctrFK7AfQDEMgFZPAKk66eVacTkxDjkD2eEqigWdUsVtFwXFUauKZM",
  "key11": "617HAWEjPqAFjH8i3McKR95k68ywjjp9kzydq61KcHStfFKT39kGbNZ9SXjZKiNVESm7Eq4Gi52KPXcjPhyBLu6K",
  "key12": "2VRGCnJJzJmR7UvfHaoVhzE68ZhF5H6xD34Z8kCJTvL7zpajDxEnTLgekkei5GDPB4e3mD5Bvj5eUj7B9RprbTCc",
  "key13": "4Tw77BgqDoKgAw3Xd7pDKR2mDmEmBUoD1CnS5DJZSnLEsciYd1B4fh5YefeQmotjMtxvUwCghGCRXA3K8jaWdbZG",
  "key14": "SoVFHYWVEWQ3idbU5k3zq5gL9kkP7jtARNRmWJssgBTkMqD3uMo47raA4yJ7GWJ11zhvb4rjvGX4qBekHCB2UL3",
  "key15": "22zArTAwdtg1KXmB7gNEJ7CM6yQHoeprA38isBeQvaXfhqE9TyhZqzkzkyDJ69a8m6JBBQDas14xixutUhBfq5Zz",
  "key16": "4osB8CDBvqDwDV8TrqCwZZhPADHbf1dL6o34AzQXN13Wu7x3hgTD9Nvfxt66jWuf9DL8Qdkt66MsRRNdepZwcAEP",
  "key17": "5PNoZ5VMExPLMJK2KJVmBs8k26ZGh7RBx7W6gqJ9PTJGF7WBAaWzL6rSGs1XjTTwnn2xS1DDwCmySNaUfjjkdY91",
  "key18": "nQhHYsCn9cosyJ1LnV1JPtBERtjPsRYezD94ttxSHXdi8GHbzKbNA2fu5Fdsw6YJvugHqn5sbo3Rsf4nr9o6fKX",
  "key19": "2UMtu4gywq83yj47Azpeyj7jRpYcxQB3JNT41KV9TuXrT8TV75tc27iCQNSuVKi4XAE4NpF9eR1rzRNUfp3eaa8M",
  "key20": "4KLTX4VkCQuPVb6DTrr2eDH9qJpEtj7qKkbcYZnBfYf7qd6EsZFbvj8yJd61Wzz4T3EXfLw8rMc9HKXHtTeAfLKn",
  "key21": "4AtRH7bQ8yvfaLzNXYjUXd7HSQ76pPKyA8hzTuo2cP81TwaC47PrHqQooczBERSuKUDT2jYvgkkboBoYkNDHWSEh",
  "key22": "2cug5AhiuXqDif87XhFsAqi4zRrUNrRnUZR7Djmt6SSrMGemSfSoi4xFAV8Wh1E5mg2hW6zrtdM9jYcWXgiSC4Su",
  "key23": "vLWoeCKjFDkcyCtSpVqPkJL5fsVAQqNVDNBvr4XVv1QYMHKQ23CoE9JSdmTMQnCLtyVvzH1aHzxxczYwkS8baJ8",
  "key24": "niu6g6G7XDuxYX5bCrH8HdtHERLw8Wxr1jpYA1g8GwjyFovM7jLmmx73CjtzcmvBP92QQbcT9swwBNDUU6KGdqG",
  "key25": "2rTAqbghwqQ8xyeGph4XcBvxfB2SjBy1W73FEKpDZwm8Y6NzC6DMUackKr19WuV28x3k9v7vVHewEcHAvbZiz1tq",
  "key26": "5NQCcVruZgNFtcg5ZMG95iQ36u9zGZWDKs5q64Lgr9FFy7fsZdkiS64YLUudAooNFLprjeBovFYTX2csfsDjZAqo",
  "key27": "uWvcCyQ57mcSr3VmoRuwi6xRGiuZVQLtoYFDCt8eZr6fwX9BvPXLLAfgNzUyGRQw7bMHp9toQqQHXYotxkPAysg",
  "key28": "5142rjt7GSPWp7872fbGRuFAyQMsRx4DfLNaT5oPKq3RrmjRQc6Yyji78pz9Uwop154FgXXYiSHVFiNiYCVZ4j2c",
  "key29": "4c1G8U8aouCkz6YZpuiWZycG5N4Y2utsqM7USQ9bpfv6sHvNbg5vFnVX3vmoPBqJem1Pt7gTyKVnizXiv9ABijwz",
  "key30": "5GbL8g87FUJPzoa5XKUYCJX6xCbs7KWSgYQX2rn15MYtceg2qoJiLmjYLTxSdo6GCreXgevHVvPAZ9WPJLnzoD6Y",
  "key31": "4f13qudWYNhyAynqEaJ5Sz2KfCYrJiFXybceQdUgWwYRgcHzg1oYZv7ovCMWtgmw7FRJpJLi6Tr19QTP1e2rD8fN",
  "key32": "qJFkgk8iUieMYN6PurCC6N9BEHzfHcidsP8ZMrupcU4Ym61UQU9Q2Cq3RYXFmis5MnQQPcLPRwmJJ5rFSCWZEE9",
  "key33": "HfMVBZbzFqQ62e4DZZ7s7DyJLijKfv8qMPtaCakkz5QMiRUmbKtvtPEVB2QxN2rLZcSBpgnGFeAA4wHy6kmiiLx",
  "key34": "66PPuJpaPqAsHuiR2oNGTuu18r1Mh6P8UJDB2gUkc8pCEpHU3LY2ZAjMGjMVPE8sSSkdThj6EBHyuAShwzSdqJBE",
  "key35": "4x495hCK8kKNRf2yuRjThxVC1HR5TcniC2HGawaJVeCmVx7rYi99dTz3nU6yw67Kt1V7Txj1kCkZ5PnS53fgPThm",
  "key36": "51U81o7tdRWdYbt2pBb5DjN2d6hf2ekbovmJJB5bGEysEpsSpSebEzBF9KKGz4jhdp54fEni3NxfLmpdVd38mH93",
  "key37": "54jWeiqvoKp2wFTsZk14VVxTbBhmCsSXWGBNaQdnW1Tq2SccqRh3f2bxeYup6xBFYEwYEV6QNBJ7S84k9pHQgtPv"
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
