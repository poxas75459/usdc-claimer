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
    "23Q82ZjbfQHpNgsNPv54HgV1FxD3EnLAaBYQBjyg6e8QgQiPWuaFmC8ux9xzKgffHPnWiZF5s69vrQYEumeogjMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yiJpBiA53a2wGVEpqLRSSumNFxS4tfWwsd3PhFd8ez7tjHmjeoL68NVgWgKx4FmttP1CHtVVSU1fzR5n1D9CDop",
  "key1": "UDX3naBxFrBYtUoUgSaeCm7MXZX1rxBst3dSSgTLBf2hCRiF6vukEcLvFjmiELHVzx5ozopkjRF62NNrixvpcKi",
  "key2": "UPkvNSEpnGzLrvrA8G1N2Wy8XvXeqUS3y3DvjxK3Syh72jc7nUK5jfLrC2pb4uNUGcGUzt5Ed1DoTbFVtV5KQaR",
  "key3": "3gn7ELWdMEHsnXPeVAsRiqaCAibjLjpTcfvd6DyYU4YbFm7czdpZYAhRSStcRupKo6zSvzvwPyjjc5hJ4yhFr3Fy",
  "key4": "3ZLdrmUd2KqWmoBBcdiSSHhnifNh3xQSWLez6rAQvRmmS6HEXotLiXv4Z7SRLCa8bPu1aHPfadRYodXgo4LMcFub",
  "key5": "mWfEMS4BQuYVNYZGFQSDjydtGsDcu3Q7NL6yKe7Kt7F49u8Ybk6qBLpUS6zErxSRvvnMMcM7HtHyuysHucQmnFG",
  "key6": "66CcWZbNyVBkpPFHE4VewdhpB7Mfyrc4LWVLhdTYQpsV2MBhsYBMgnpdsgxsVPHoZuQCbqZQcQnUzAPXcagSe1vu",
  "key7": "2p5CFTQDE1bq1oXAXCF91QbdWKQiqXsLz3S9Jb7TQ8gwFE6WqP3aoi8eLRXwXhZKN6d55zVnCjKKsZnu7c6qsje3",
  "key8": "67r484Bgf5RuBzF6Ubv6tfTQLq9xoZm9nfkGiWWCgeyuedG7djT8SAtctqcRHotuwWiy544Wm9ncJooiKkqpoUo2",
  "key9": "5kVf7GJvsnLPCDmuJJu5CdLpqiELUx8CH7Ufdx5igkXGXmShKBcH3X2USiYQyGxcmZ5d327YrsRtRS9MDnvYQSoB",
  "key10": "2yXKssJT8mWAdV1r3qZBRsZ41uy5NJoiFsEHWYLKXAiLQ5wDepVJG5pqoFVdE9ri97yBAq5rB8mVGsv6CNArVYxC",
  "key11": "55R1ELiek9FbsxYYSCnJEEcjos7ZSPWDJJ1eZGr3Gwqc2c7Lqc2mHfkn63FVJxy5FG81tYvijkKi7oMUy1b1Ku5y",
  "key12": "2eybSxSjBnnpc1gSXmzP3fBgcmN8JLAc8Q6GWBcfD9UAxYg54KHATZWwXayKsrvfQvxrTo846A53k1MhA2YtakD7",
  "key13": "q7PUWKfByMRDpxVYJL2twDb7E28v4Jh3KBBZ8sKr36zQL3D6KJM7rwFXdxJp2vRX4WLNKXLZ5ZQ5ptGfZq4W6Rm",
  "key14": "473uFKqovhr7xWjWW1Ues3rLZX1Agkk6jXgs1S5n88kx86NchN1xFMKjrrzSK21BXrqDuEGqMYhG4ZrduVPogxZd",
  "key15": "2F5Nr5qddVj7iJVpwaNFkNpSNR1Y5GEDPWpRworeiPg6QyrdXcczqJMoiH6ZBwFwLJeM1e5KN69EG7DkD3FN6Aet",
  "key16": "wXQSz1ARCadPYaQfjL3ZHiGYvCbughxmm33zBZNXoqsj8KMUeSKeTpRjSSpMLQpxe99hwFnoiqPEikycZ49qhcr",
  "key17": "5LZY3zBcjheUH5FGaacv2J7NM5w9zF2VMv3Ep5ZD2DRr6w7pofvfinuqfuS72cGt94EYkw1aXukgSBSErMJb8A9d",
  "key18": "3B6B2wAKYyNL9Wq2nGjCtPX7g5r23fJaRVo1nrfT52zHUTbBp9C5syzS8xXFhRB9WRcWP4FzPo18vJDq9TXHjEzq",
  "key19": "3u3eNUHH2Qsvk6yZn3MZabRbuN4ZYT9KpaQLxi3ac3Em1o83eaGaMibSEoafKVwjM1b7oFmisL5U7cf6V3X4AprG",
  "key20": "5vqwdMkstfcCA3RZQQwheNaeX5D11AgVM6aFu9d7pU8cAfFn54d2KoSq3ZwbC4xuE5pfQKE6CCGoca5UozzXowvv",
  "key21": "3PALE6QCeAkkotF1rM1J6Rvx7rPpo3cjAQT7EQEkbaJRHYYFUj7YT3PNJP7JycCgk7wtV8qA47UWAeg9EWp1n7hJ",
  "key22": "27T3k9AtvPMQfxt8b5j3fFpBmzWNHsAVtQLQyPEof9tJyejykmznTZjotgaoXCdaEPa37gw3wyxwJjWiueq58ipW",
  "key23": "5PhdASabJWFVFXLSwxzErhQeVt84uXAnDuBhjtHP3F2P5BMjAteSHmFJnj9RnHVPNb2vnMp9xzmzKFkdj1XVryAr",
  "key24": "sCx92xXXhzK2qWhy3UygqqPduvCgBk9fQJh3n4qbLSoTYJwbJ1V71PNgPJgaPJjSymHG6qTbTxSEBssFVrNRzcP",
  "key25": "3YXhRmpenbnZDJbaZMkd4dPkmrVxQZBkHoa8rVsVBxN8sLPqhvv1g8cnPyR3GZwshxC4f2W7AwnvCc8117hsdy6N",
  "key26": "Mw21SmXSdehaRQCYecphd6Z1un8zpNvHF6a9KbdhvhvtgQPfrAY7aSNsGF22Y5iVUQpRnQXNFcNvDCrtnmnL31r",
  "key27": "4ALQg3qeLKAibNqMBDeSp3Gc1gsC6KtVzy8XKHRhRWLhrdzxVVDsHPRhQngs82X753a48WZbkke6RDfqWdcG9q8x",
  "key28": "5aAv6GEmPUh6NHveQ7JjWZ7ZMByt2yoP9Yr1nfXMGbV1khE2odDBMDHmxuQXSYPnrEfCnLN62AARe8Ndz8jTmf57"
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
