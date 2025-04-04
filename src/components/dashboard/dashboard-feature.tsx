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
    "5QXDUjvy5HVXCwJPpRMHWNS2g1MaAebwkP37Vm5bSdynMvdhC9nXSpvt3xzQ9PMmjnFaTe788kUAVPeYbEYfQVNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25pUibfnoQ92W4siRtgXQAuu15XatgXo5jRtj16gFXx6LazhD2fAkMEdkMcSQ35d78ziMe6PAGGhjboUUE4ADybm",
  "key1": "wRtsidL1K2hPwjENLZu5LQmRZ5MQtNPqvckFNCfek1acafEeSRp4rQBBvp6PwTVjc9mTuLr8dRvLdsFxvKU8j9z",
  "key2": "4rEjJGKrXD6TAGGLu33ZzU3MsXRU3FhwdcRtKQKVNfLjJh7eCzDXLNcMAWgKfUp9eYjsgyVi61guvwwMTEn8w5rf",
  "key3": "3NSskFJo89ZDuRuMY21S7cPvGXDWS5nHgMAP7xYusY9HuhfU1LY1Gt9HiynPjYjcApjRVpNRJU2mfC1oXWdeNKqt",
  "key4": "5eS6SFZWziE5ZBzGBF9qphwuqwZrwaqMHTkFzp3hryxu75YQBsnnmM7jQanKTijSKp3KPectji2B9Rp9QfxjRTbi",
  "key5": "wT6FVjX7rJmLppSEx6mLjKMLEnNbq2RBfZUAoKNzNqiTFvDEovac8NtxVYwAaZ3iVoWp3er3c9nC6mcujMnXdf7",
  "key6": "4DrHG3CXYdoZCMWdjukrmTCzEyGKp4yrdsDGLv3pjVboTJFFMvJ4GiFrSUj5Zj8ByYGCZyysTJbGKCrdyTD1CUnn",
  "key7": "4eJ6xnB8rssfthkvFBTKEiN8jJHjP4kTfB45MRcKsHix786UFNGD7GTtjWr9axKT3FTxtss333WyhF91YsuQpmQV",
  "key8": "636jaXhN8tMDF4Qnbt4cpePBjG4yDYbMuEypAH2LMt95U8NDa1t4qyeziKGzVe1GKbMeFs9u5SLnTJ3UDLHjuvgq",
  "key9": "5RC2gk9e9nAwvGVb6Fd8j7db9o9RJLjmnDQpYqyruGNRpBFfjC5N8qa2JWANv4coGnXzaHfiq438AFjmZw951KFJ",
  "key10": "3CTDvEjJZ2pznwiLhW8fS75Rj6qi3nq1RMejYp7APNYw8NqjjGLfjVTCf91WquwWBPYZj3wVvFH24dA843EAsXyK",
  "key11": "p6bqzPvZWV8PcgPPz1rWxakq2mGrML5FaPDiCsJYJA81ESbGEAz677RqK3F7kubPQY1Ads8bwVKoZR5qzuLNSGn",
  "key12": "88kEpVfriKMAHPMuwJ98TeAhhwwBtXBdrjNAouMtdi5RWajPW5Y5E9ub4xnHYyR9T5vHn3aVXAiXkzHxekshv2Q",
  "key13": "4X3dq1BzCNNptP86GYWZsJfP8T6yTpQ7k4UuqA2MJWfoUrYNqEUU9b4GA9zsxxwgjDeTRCzW472TM6wjHTg1uBds",
  "key14": "32Twk9w3VC9m3hSNMtcp3pZfCiGcurguR8Br2cgcQ5jHCL9hS5aJNz7cMKJHrr7Nq7Lio7nDHgbhHFDMyTR1wCQe",
  "key15": "3Exd4aKjWWcRk9bWSBSUS6PA6wBFcNGLG3ikEfmuYNM6kyDaJBU6tbCVFYpUc9djNcu4nQXRVbVpf1gUyfLag8dr",
  "key16": "3ZGqfGiuFRqdQCafoNF9adstjTqr6azKiR2RUPBRAEk31U4xPEdsPtEHF14jYU6S3XCA53dSGeJAwo2rHRwJD4kT",
  "key17": "4Zz4NwruVGEN6xVhce3xe9otxup6jQcgNp1x8Fwe8qFF92fcPqmprtgSCPSqv9qZXMMBLuYox6UUoCbg6Lkq9pPs",
  "key18": "3p2vmh7HnjchHq5PN9MvVnbVLNzVHyAqQpNJnKMAWNPmgPFDZ4G3JGWyqeDX3Yhm82hLFGs3nEqfmJ5YbTBQ74mU",
  "key19": "62BGCRSxPrArftAAfpciDA4AjuvtiDMZBJGDwzHegLBeDfrd5MoSRNFfb8FVrVXRWJNh24ngFKAzU1JDWbyAi8Hj",
  "key20": "PUsnSk9jAPFuDDtuMKBgTHnBy9dQD5kK9tY3H9ToiCUGDUKzZ3D8AMABA1fEEJP5GZnT4f4sTkAw9LZ19S6zMKS",
  "key21": "46wTxiqytYF2cR3BLij5eUNCjX6P3EgxEyZib4kScpeAdJ2ebmEr8zQ5yP5ueFxASSrtnZd17gkd67qEfhX7wonJ",
  "key22": "4XQhGYkVJxWrED81UY722L8tq17oHTwvd39Kj8GnAEqCP9j2D7JMoHXxGJdsFVMq95nFuwGmgAL4sqSQweHosUNn",
  "key23": "gHT86bVNneom3YnQdTBfXQirtbBQCQYbjjmLoP97ogNuwJsNUpbrbjzHmTKvEHgR6wMns6BuekApbTjy8CFzgKA",
  "key24": "3AQp4PbhmmhWLxAGXqvZVm6s8NuUAfcYsEFhMv1ghxZHR1FYufodn56hQd7JiXQaffnvdEJd1THRiHFFCMXJdBgu",
  "key25": "g3cyX3Xa4BZKYaDNth1BiVNATJL7xATQbLVeYkWPuPKUXWqYpmAAM8Xn7ZEXdVFVpYQzZ7CYAR8wkz6t9BU9jDo",
  "key26": "QrLy97oNn4ny5g3vFRhuCWstxAdqzmcAG1eYMohKnpyLKj8QqXPnXVrZjg8DVhEuureGdtyzSHnXXnAjXtYWAxQ",
  "key27": "3jaNbtyrCopvjSNrvCFgtQ5mi18KAKkg4SEZPVrZyTUamJKzjkhBxCaTgX8NW4CZzLWRByMUB11hsAbhA3CNZT2W",
  "key28": "xbh8XpfgnthYviLkjZFpFX99qFQTbzF2rTbjkfRoMd9gVzMeGbbovTYn8h4xNufSeoxYsY93AiF4pP2wjZLDC8K",
  "key29": "4kP6Jgv9r9H2XVLRnxpz486FMnUXwdSoU6HKifW1FobJnxKAkTgVhpfN528osa5wGoT8MWmJDcpdThkozVGfHhHc",
  "key30": "56FWbBgxoPJA3xLsNc171ULYu3NgVJdbADf3Hkv2v87DZJSURdR24c8wdvQRm8SMahEgg5SoxXdMmijYaQuGoDUq",
  "key31": "3bSNgaKYfmYPHZUBJQKFqbuZSNYq9RppzUHZCdqQw7VfXnf5nLSK3QD3KBc86mjkCS2r8FbYv2nxgnw2dLJwEUMi",
  "key32": "39shMgtRQHVjomckRBtuKAWfsMoo4K81s8Y2ZiHdGbWtm4jRttrZ1yJfSVLiq3jv78gUzyiLBUQgUyhwWHyok3jh",
  "key33": "2nXEyt2TWkCRhd9w6QJvbyKpX75diym6Vj93YW97wWDzwnN2LKCQ9CfXSDSboX1HyDXQkRYrnKYbLJspPXjKAQ9s",
  "key34": "1bWqZyijtNc5VjdwNHzAdg47PuLVBkkcqqqdrqjLamW7syAcB2rUZenc95tgZupCaiwaR7xurDU7KmeEPpUgWbU",
  "key35": "2khFWXyp1US4ZFDME2oXnggRcwnUwu5Qa5XySToH12ssarSRtRfibqhiPLiuJDsH3ipFzXjY12UrmRpCAfbhPikp",
  "key36": "5xirrqrEbAmzMrNYB6nZ7vnCteq16ptR71Z7NatFRFztZAxGPxHuVBo6qoJo5ktUWyvCaTTS773tAm9eJGt2gvaB",
  "key37": "afhy8wAogrGzj44XcgHyy29eNHFL59AbrghddCBSB7d5Whtdths5NMWkNSLQBxBuaPQY8YX8uFGT1mHYDZDFbDx",
  "key38": "2SngrR8NBFF2CwrWJNaUJKjEKJdcfJA6bn38tNCCic5kCcgYRpY6uBgnki7fxtMGmFS5F4RVjKMsfzbYxgpaP37E",
  "key39": "4FUEwRHqVgYdR2rzWrdpdnxutCCoaCEQnGSuF7MyKZoJ2bkkSmE2dNdt3bZT2HNbqUzyV6Cvy1HbU2z2QQzwEy7o",
  "key40": "25vQtTYLPdn2a8bUCE9hfZWKyEZARxmUjrY6wG1XDmYG4TiRDx6TS1qtC9yKb3qP9oDiZZzKASXGnMWg6ArpiAG3"
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
