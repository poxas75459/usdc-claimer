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
    "2K6hnCPWqUvCzU1bYc3VLJg3nfJ5o25sT8WLc84BKof5z8mLz2MByyyeTSCn3nAbEsXSoX29CuNCvpebQRt3xz9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yGo7pUVFyBMvEXiJwDvrM8HoRMvE35SGxqHZ3FHsbad8eUQWoi3ohJzFtCevqkD7j2BGSKZFfeWnkhxHPb2LDhR",
  "key1": "Ujd5sWfCTXYf7G8KiynXaQmAMph3nrGHTsRwHkMei8FN7P89gM1AjUggmUvAsCNAM6qYfXmB4hnQkMqtv8UZXNt",
  "key2": "2LqKvD45WTdbgFqTDtsZSaUEdfcWdFUG73PZr75CpuKXfeSVLidbbDGwLt7wLeeJNAP6JTu7VTVRJsu53SVEc1EC",
  "key3": "4G9G8QGNH2mYjszFU4sKMu3drWzY31FFArU7PBrQFrZTwN1cyDJnrrj6jTeqD6pgviEwRcEvDu1xiK3FSfEuk9jo",
  "key4": "3f8AvkepA1RcKGUq4kZgCKb8CUoFmLahXzcysK6QeHiHF35R8izujPnBWhasCLcSzV4xkpXfYJzJbgWkYwYU1gz5",
  "key5": "3Akbk2oVLYeTrq9zzaG6YLnoGXLSnK6afudWH3rFZcUCZoFgy3NPe536NrcZrSZcLrfubsmHqEcGPYpc9ipcY9uC",
  "key6": "j3eFYFdBjGw91vCcdNXCR1zzMGydQJtMEzAvNjQg9naPHJqH7G3AUsW8NgCroMaafcbjsUT5irZFbT6xx9wXkBm",
  "key7": "3HwJYo6xWrsQ6aaB5Cw6ju4c9kF8pzPdpSYPWFUKFJRZJQzzQDbmS4kpPRP6F1unci1CNDnbHdnGxoc1gPwrrJ8h",
  "key8": "3qwu9skbej3xZGX9xgZQXFf1ujyHpXygMzAhoXi6oso8fSLMbmiARTe7ZNNTgzbnLzedniTUt2aj1NvoXLzquefG",
  "key9": "5skquhr8KH1yiSy8uC8bmWRAPkKA7fcTcuAmctn7t7QaFHVrZ1bCjjZbara8VDiw6WUJ3DckodYYqYaLzbEWyrkQ",
  "key10": "3zqCqFcYjU45HZn1YcxfdvRmLKMhoPJL6MzMcjYenbcjQwDTc4R59FEKVSyMdoUA2qmEdtmCmB6pVkFMPbq6axpr",
  "key11": "5NPyrrcaXcBUHDBrjCXVwKbETLV1CCAdEZwLUEuCxhDhH7U8hZ4SKXXj3U4yawziSQPHJneQFCRnUyxRXoQLjG8A",
  "key12": "2Z1yhgrte8KtCrPTxvrrN5BCbuJNYDGBQSDr71LiXjo6yqJv1FmACzcCtigiC3MGCsyo8pbaQVcjtWeCF38rBuxE",
  "key13": "3sX2WALUVa6Xy5sNsJNn7U9Sw7k1yPLpykjRYdE9UF2Z9Q9qB3LptRRw753UJLVy64WhGZWdSJeNK2foKo2tACpo",
  "key14": "NXvYtcfujKi7Fpvp1uUi36uq4Px5dcqj7i558D8FhTtmsWT6P8hdjhqB3Ciwqo4THXvWGj9hpTuRxx4w6yU5jGv",
  "key15": "4zZeLtrv7tQWvoe2t81jukZqw8UMM5bo3tpDGBAxk5brD6mspMQtw12Ushgsbbrvi5XCgScnY7Saw9TwNJe2Pdfe",
  "key16": "4MLFSsZsSR9rnsTWGZLx6vMjNRYhhoyxUNez2wEhGVtgGoqZWW9QxSCyGqmULZ33fpVNDE9XPvaQiBs6EZFBsCMf",
  "key17": "2EczddFC2qQVopGnzKqcnt3D6eLRQPhrCggek23CrdRadJX2EXzRbkJsixP6M2np5CMVj3j2jxEZVpB5y6eR5c2A",
  "key18": "YRVecvG5ZWP45uZiaprXGVikEBMPmm1mnfejL5UZ8N7TAx1ARoYz54QvHbUQwReMSDhs3DBd9PEZjSRGe3LFj1w",
  "key19": "3Z77iaHrNDHDFg4TfeXEYfWUJoWpQ6zYcT3M7rLksRuo2ZDw4gbKGJJww5xDdsqhsMHQdtob6M7vNp5MVrkqhVPs",
  "key20": "3V2SeScvFxqH1v6QuEaqC4WZFxLXvs89rNzuhRuXbwv6sMXLKhXQre7iUWKrmCmHeMuHJbfzZGZB3Umi6mdAWdmg",
  "key21": "22T1FpPN7nstjCvaHhcDjt61gb7HP4pkU9sddcdr9JxjPhoMVNbW79JCpkaYQ8YchzSAJ8FJcpVUks823j7HPP6D",
  "key22": "3yyfNqg6eRtgMzPpVT78eQHmBnA43P8UufDv6n4TPBTrmWw9fuwxVX72NfdYPeDvR38KjWdvvwhXzAmTekU2VdtN",
  "key23": "4KPXKjPseXCoEs7gVZVLwWojcMhB9USNVFjUS2BYJAWMPLpYiYyAomUu94buT9WmyjqFp3VrWLEEfs4eS9GGDeGb",
  "key24": "5JY51upb3RB6KFF7p2uyFXoLMXBDhLHpDVpcwjpF333VRzfmHJkSN1GqkDdST1dPNnzGhGskxJb8unTKHRy1iBaX",
  "key25": "5TJJqW7Bd1trU784H3MsfdVsPXqWKyLHkoDVRR945WAwLFW2eVbAud5bZyejoz4EVDMVknt6NTBiLTVxrRa4KdWT",
  "key26": "4MFpmqi4JbkRxjxHLeqFuSPQnehw2xfdqGENdizensYVR4jVi8gkHCMG4hV1DzCuSiGNmMDB7QHUv23UWy7HEtyQ",
  "key27": "Xyiezvp2mnNVDRUjfTXEsMPRHVYfwVqQPV19s9j6vCL3bi4xC6si7cttT9jSsefDSYKbDkSiuYdtJahtH524LgW",
  "key28": "63iDkjLXWmA45xPkuorywAH4Wizm9TL5FhgLRJxyt1ARogjZg4hTjnDMiHnU29Sfgr6MstKjStiafALM2FqrQpri",
  "key29": "5TL1ZbTQwyjm22B6G9M3jpjVMUZvwnq8Y4879E2SLJnHt3VaTsem4vDXM8XgkpujmLqNeujkFpoensB3rrkAYRNL",
  "key30": "Ythh1AvwAU5xfBpuJ2sx3KENnsJcsPYf1WjZuR8hnD9iHpwvRK6QEHi4ytDkibQM5rgvZEQUQdmGVN1PSZYUhSV",
  "key31": "4adH96e8dXe3DEfd2ykeMjtNHFZFfWixiQKpqgDZCNJJ4Xq6QrsjcLa2fsYPVJkAE8C7trkxtceMJAHQp4gfXzn2",
  "key32": "235kye4rYuHWhKFsqDwAmQ6tuJ2zcQqEw12BAd6kLxurUtv4gfq5PaKsgAnPjYobwgGXXqbWuwYP9ywpzpwtGz38",
  "key33": "5poTfgSuMjCsruZD6SCsx95MvzchG5APbkbS9EmzyBdR3c3Tiha7MDse4XCRXBJaDE6FCTM9g6nhvzcJbhfqpjDx",
  "key34": "36cJzTRMq7hZZ3gXkBL3S6LZbxdMDriXpQ68MK1qY9NFGiR2jqYcrmxUESZs3tbnw8ofrKc2UunYYR7nZgPZBH2T"
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
