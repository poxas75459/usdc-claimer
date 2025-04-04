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
    "36iL1uj2RrHgtuX5MZqvisKXsty4nYnv8gM4v1rYLRMSfXBFKiPKJM1mi7NZc8Zae98wLSUCh8ekx4r1B92pNTPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m9tt8AhQSHm7BBB8bojEYUGdS8VMshntYauaTn4BfdezEWadUWayaHGNBPz7a45u2ixT1117azZGM2UMVXGyHdQ",
  "key1": "5BPDeAFPqCgv4PTb1cfLMNvzFx6Br1ib4XKL6SJsWAueHAZWfYD7HgnvE5jNwDYjTi5Je3Ankb2Laj6dc7Wf9VHA",
  "key2": "4mWvarZ7pF7Pap4LYjp6vo2Ga8VsoxdZeg6GpGcw9R32LQc9dN4UiPGXscezGYVYv8SFuaqpudFtQ2vnNXMFdei5",
  "key3": "4C7cweB8x3pNR7QzserD5wbwMohAJwFwE8FGLDk44UP1zbqtWCd8c1eVpYYuy7RKMBrn6VMcdaYZxxXAaoSZgVEU",
  "key4": "5eaio2zdtGZsHgNr4TuL6YaoTJf3YE3MAVnVS5CckjGW4qpBpHXQYf61mjPUJxF56QsUPyofbdkWWojMWmCMDMVY",
  "key5": "4WyYHJHrZsDRNbX5ykBQj2Tw9kVnjNMUZpUcs69s8TjMav5owa4k5jtkusYf4nhtTP4z4ygabdqipMmb3BsKWHLg",
  "key6": "63DvNH6FMjKLdpUHM6sWNTs57kb4VRq4SDzmNDuSwBMfu3ojH1TAgPNaCSsit6B22e1TXpMUY3TgAVt25pczhMMB",
  "key7": "D2hPomqhDP3vedv6cYhPpwgiTsKWLeHD1sxjXVdYnWjjQyjCYbseyoqh4sZFsmab4RQvXB76ycpsMCcQZaJvZZK",
  "key8": "CLoX6XJzp5yXjJJYUmdWMrupbLWzds154YHER2hnP9QW3nrayrw2HxYUEBiXPEFWXKuj9VmB9G58XqovgCMnMSZ",
  "key9": "4FJrZTKT121Jy4tSCcW4njrNJp4ctyYhNt2dvVrqAkgwbnkgbmG9tjSCjuvVTxpb3We1ZUzQSQy9wCmgkwHgCXD4",
  "key10": "48CpKZsJeAgzTkfDSZAUHFFgwMPjQ9yRBHgiEK3Z1SSQTpYckzZaQn7YTCSmJRUnF4ZoxjCm9ef1e5QxkSmYZdxH",
  "key11": "4oZ151aJaYxtq1dMZuV7PEwFnQm8hfy3wyzW3fKhNraMqhiRX5CewTFqEoCPGyBJadEyFFhRiLtetisjBe2ReB4y",
  "key12": "LkzSynUirDeLi1A7GgL4U9YUJVr98RR9zm2eAR6kvQ9wnbyGxXqjs3cVuqvm2gHuMCNXEinrYzgK4BYVySoGQ5Q",
  "key13": "4G2b1SA96FfepFybwz7Yg22Dt7oTbfitJWjoJnsopa652qL4B4bhwKsc36U52Lsm7o4AEG9xXXZ9CJ5EoFANwk1i",
  "key14": "3GRqUWiqc41zKbCQJ1NrrUhnaasrodZ6XB6DnY3trnJ2dmGSyLN1Trb9hye2zgSAbpXuSB1KrEuaeyQBeHhajmNV",
  "key15": "5H6dScksgpCepiur22X3aNPwT7hEsGhj4iyT5qJCzxd1C9F3VmFUvjKBJ2GAQGDu4s4zYtBJsTse4T8QpQfwdKhN",
  "key16": "3muMDHqU3kak81SWQXpCJEtq4o24guhPiN4QNPbHZvnvKWYTXwVdaSQVRuoLVBaN1PVXyAgeJubU1CxybPAM2y84",
  "key17": "2pSw1krU9ENRe9CUV1PxRNp4crDJAbqdZ9puHWhZekycj22XSQ8v25hTEE2roa8xMuuAMzTHcxckhXebPdyq9Cz",
  "key18": "34UieLQm95nUfqxDvyVYiPpzm744gQwwUg1tXMw1EZiFGMhFkvDdjZPHuoqx2poKZGp6Y8MMgFProvG8CfiHRWYh",
  "key19": "5dJP12THpY8SkdqhAwTVxbb2YYnFnFTKeAFxCepCKn9ZhRmuLZR7rnARiwWNGJXSMp9XQRMGNaBzHq4QvvwkbG2F",
  "key20": "5XdFvVGfd9WLvbBURK3Ubg9w44Q4e47kZmFzLswXb74on2K3DywvorcHKw4riU7gf9PQqbA5smwWBTXUNtfpEV67",
  "key21": "2wunEG5VcREE7efutmqbQSqPYpvT9NWzmGtmzWTG7yA65wSJZaGyL9ZgWt97mgw6kGaC6AhwsKCTAxJY3bEhjA2u",
  "key22": "63fLAu3W1mF1sLvdPJ9cXMTThvWxA3FoQp4tcEWt2Xjc3aXvMYoDMAn1DZvqMk3XzxYzPq2rWcFYfGnKsFQw5sez",
  "key23": "46LpeqrrD1PrZ3jq7zoGjEpgxcxnnGgbLDVtA7syQL4qBtEGEmhbFVg2Ggi3anWBNjiyGwCvxi3YjcBzNwp3ErLG",
  "key24": "5hTKoibSaUwaqiViFDk9sDepQhytG22wwLtcsCKcwZLTKjNBvuberonPpe6M42kcThQ68TMbDjhnk2vdpY1EzR3D",
  "key25": "33dfNznML1ZVTAWD7fpgwhkfnqcwWoCxohXtwDFjQ4pw3Cx8wtsDcB6icoGronz6xV5JCnnQNLjfhnW3Mus3eyPr",
  "key26": "LAsQrmyWd197idUD877H7XeuT6URLuJ55xKVHUmqdpxzKDioWLvxPB5uzVMSExkejFMAK44Hj9FLt2eH57nVqwL",
  "key27": "5ovCxaZgLnMswuKcHoeJ2KDQW4THqNs3oGdCJqvaqTwx5j9J6p6M1qBWsLkLT1doVxWEo3waRzPPgzqWuEVHjVCA",
  "key28": "2jfhJ6W2JGqF91z6qje13Y2h54oubZBMgyq6UBWZrq3hqAkrJ459s1JYrJgdnrCfWWdDYEFvNhbjMU5wu1dXk3k",
  "key29": "5ojPUtDQv52CegFCuc9JeuGiQS3qkXiwoeVAvRcSKwVgcrSMJtk27CU5MBtWVRibHEEeAgA8m7KatuwUFJsfQEhE",
  "key30": "G3T4fZJRf3DFYKhzf2xnA9hWsLRVNxgFmcyu4Ht9cpLH5e2kSausWsHwFQVu5vbWFDP32yVTpKRkmXG9qZjBBFj",
  "key31": "5LZpQoAKXuDt3DqimyvJZTNguQuHjrSypB6JcYNRskZojg6Ejh3FALxkzhZaYAyfVUzhP6mWiH3ReRz6XyUiQMFh",
  "key32": "2pT5QTW98pvsrCsNhtke7vXruASHp9ghRt3gWTU2QnvspFBWWjZWwNx3ENbULZDPnR24ZWyKHsWQSUxwv11HyPHm",
  "key33": "2DAou7JWxbiRkuVujXTrTcvfnzWYFBnCdAMjqEQyC9AgEivLAA8PEt7zg7y4YVxqj1miJ1tDhzUrDBRmZVkgKTVg",
  "key34": "4thtD3224V5KMVgfYVrSfLiVo6GFD1BjRg3U1PxcHfJMdQpoq6Rw4765n6fvtE7VqnxBnTP6adNECPup4TH8N3s4",
  "key35": "wKdrKuKaKrTrwDMDya9FC7fVRU6dLNmuNHJDxF65NLcPp4oqxQD7RpErprYnFUPs9b9rMEz6U3J4c8hhZZA33Ve",
  "key36": "2BgEdNgLyrLr9HTHnZ63kUKiXa9PDSTX8JP6PkzchmgeESiAsJwbbi3Z77sKwR5xJgPnJp4HWoBKowJeiin5fL9y",
  "key37": "5g3DCVftTLwYf2JodQx5J6y2Rz9PCRXd4pUYWh9GVS4ftxh1h7NcTrkprku2TtELr8GeucexauEZYEzjaCFYH8Us",
  "key38": "5z9gr3VVfH5DcKjTkBA4WjAM4XEfXvEuieEHSjhWXdKGZeMaNahXoTz5JbSHySry885LsPATjd471szwNHojkw2t",
  "key39": "4VsQhZrWJXKAcgTJMPGRACpWc2ShR2kat2eq4URmv9r9DEjqPd8aXP8PvqWfeXpEd7Lnwu5ftq9SLp9czFCqxJ55",
  "key40": "3UgfW7a3nPMPXNzqd1hbb2hvJqDRXMNwpZwJRCdxDHk6g1sYyM5PWsJsstvZWoKu8Cq4idTsLgko1u2XXG2BvAAv",
  "key41": "RcMe2q4GtMCm4rWb4gxtccGr3KPGERZL1SvoSumfhJhA6yLjWC46xdHahesXfgYwNpRNNY1qVaxZJbfYUJ6vXpv"
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
