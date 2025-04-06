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
    "275q7wGPMKSVPRQL3Af4Mppkbv8bW7G7X4UpLdEMjhDYYi5hoEDjJeVeHmNGSoosHpSuH9vbvRn1w9jiJrATSUzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vW2wvDguiEy1jbCkbWHy9LLJK9RG9iqainC2xcwpeKRuRLwS9ZeZYMfSs7C4sKKDFuxDGoAKuXdEVCzZsBBqCju",
  "key1": "4KWzdzfTuxqcnvYH3rZw5zfTxZUJZhPVzhsUQC3LyAo96qaDnZMbNQFbSYZfoUhE7Sn4nHA6Atx8C7Mad2s6woue",
  "key2": "3U694urxeBQjGpUiqKzoMdL6tBoq1ZszQaLYZ8YdFfoDhAkEN2qjAEizNbSNnqPoi4ri2DiQjxRn6jTzSqHPLzcH",
  "key3": "27wtYMiEk1H62GKz1kEfnBSH7qmV79udUfXs4jvoQjo6MsFMfagG1ZnVJFs9otSewKxdA4i36SauAoEurQdw9A85",
  "key4": "4a7Lvju7vg92ym7YTvD4vvPyuBw98W18R8bTyA3mnuDqUXXFZc1mhbJGyb83UiUSe3vrtoWrkzoFhMYLmE9ggUF",
  "key5": "2vveHn8Waa7bUt1cN3eqnDme6TpwUB9JDdQrnYw42xLs69mmtNYoYQRRJpfbStckaXpdUwZpHL9urA8QzgYrH2wT",
  "key6": "2WVS9q3murtQRPdwdHNkj1mcgW1vA3uX4VTZY64wmdZroW9kgzpVhWUC5q5T5jfQydbyQXBRPhLeCrvwMCSdHSkA",
  "key7": "ydDAB7JUGQPsxuRovFdyLhUAUiDhAmopzxiywJ44M45ss6LphE2p3UiRJnhefFKAGQhysERAfraRSsUkWngizoH",
  "key8": "3VDMpNcKJJofGM4uTSB7CxeSc16QDfV23VDTEgpVrAD7zCaAg5wjqJjjtJnPLRPva7KS5KeLtHahcUgvwZHDDQc3",
  "key9": "iZAwzqiwHWeGspry1Rm5ZksAsUZkibx5E76jJ1E1n1aMZtzG5Zfu87Mbx1Yr2VGSe7cGpKjM1gFcwVmQfptrkx4",
  "key10": "u2sjnkAg3bmrP9MHEVqQmYrmmNhDX1UH1EeDJNehwjMeeqHKBTkn6tiFn8qGiKZbjf8pqsbL2cGTVH7mxccg95t",
  "key11": "457ZP22ejwFBbFjXxtRhm4Z8ie49PL9HRaUKYNjx88kaG3yvXZhJa6eqGMaL6PkgUbaCBxhyRnzvziYNpwx2RRxM",
  "key12": "LMFYd7EpwBTAsbZkZWeFPcATqu6jCyBgiF2rRn4CgkauBQpNLz4i4jpMLZD3n26EQqAsc3VQUzyKwpihXthzHBE",
  "key13": "drHWLtr4n1tMbZcHNVr7ZuT8NEgMvoS1b1bDvfijbUjhJyyxm7LYCdG7CzbVDweAFKDWdRpa1bGA258WYmGU6sj",
  "key14": "3dYLzGNKcUz93BW8ebU2snYRvaBY3p2EDQ6Kzsxz2x2WdqNGVtDPpZUqE7TXeUGXjCN2cCdnQ6TcbsyNaK3CvwaU",
  "key15": "9ExUTKhHyW1z8SdVvPBjsuWCWoWgsx9t17d5rju9obRncuzNG3JLqbU3NyDmcTEfpjZXmM5WQMohpiZgytEV7Pu",
  "key16": "2hJsFuwFjHRvQN3qcYgjZC4TSnxCPzCm5QdgMRQebijTZgepP5Jg4HB2Wku7u6QCb5VBgKRoKZaTEUemozmtKVC4",
  "key17": "29JwV1gHkSkjWvGpw4DJccJjNFiKTw2btkGuV1hRm9QaUhByh6Ej5rod8pzYbDDLZdBGzbfwAKx7nyJFXn5tZZ7A",
  "key18": "2ZrdVdaBCH7tNFAvuquNiTw3NjFqNANmaKudi588RDxoBFTHpP7pumPJEyb4GKw29x5eaAqhzqTSCwp2bjBZnHfG",
  "key19": "XMP8mrhM2t1mv69eVVfBhcCWDRP74UV44L1RfyccKjLAwqtXoAcNcQbUkpEnkf7uUr8NACiihPCC73cLNf6gcj5",
  "key20": "2r9SS1n7aN9e935aircFvcVafVD8LZ24SZHU1FFvLL1UQwzE4jFeXKR5GphJwB9W9NfzdtDW2ZvqWoVVJFGXSG2w",
  "key21": "29tiTuK3dgUSaHZtHhZsSSmLDdFvCXDWJbtJnnM76ah8Xmq8UWoeJXqiVpPzWLSrTRksm7pw6hLEFNjzHanstTBv",
  "key22": "d3LPP4WAKSh4sNnt2krZ8wJsAXVcXKv4DiHrsQ4WM8neB116iWyWZf4G4KQV3GdcjRHR5aqj4ziAoRbsKC1o8qV",
  "key23": "257tLUpE9gpuLfTWYL6VXtevZFn586Ur7bb1H7WsFtcSDjH9kdK4WgCmTesDrvTLwBxwqrermj7u6MuRQoFU5zww",
  "key24": "5FBFyJQJiqhYEU7xieSeXe3ygwEjdEac3eSMgipsNHK9Ak5qkvjNjacUfVtv65yATqZJahMsjcCDP3uvUPrmcds8",
  "key25": "8RppSqst4XJsihqv5pEaSXBHMYfJk11pQpvJqg3E1z8oPsvkSqkyVAUM21Zu221g2Xmw9etchRhHEaprakJL5sW",
  "key26": "5DijbqeyhxHxRmfMGedzpRasepGSEbVB18HTAuxabPGoH9NxtScQSyJDaLYRaUrjSWSQZujV6NZSQ7Bsx5R3pkMm",
  "key27": "xymLKS84GsojdoTwmZRL7qoAxKv3dTE6uxFzTBTW3nGaq4QWM7vSKY67UKD6E8vweEn3QSVwsptR4askx3C1aHg",
  "key28": "56odN38CvsptuHp4LCYjRSyGnN6oTGMxwK5crfpKAJ9JQWpTKdadcBk5Mf24LtgGb4igFRoCEoNSZCEVrkppvsqU",
  "key29": "2Y4a41qPF5fEEJakqxfmetqEfYMyY2p5CdU5g3cJAN82A6g436bJYsT33wocmZnuP8YHFSS7so6y6NCJ3o3cwcaE",
  "key30": "4jXMmUaJGJiTjNZr89XoK6karPVzpzrsmJSuy5FBrTph1e2nvAH2q5kc7B8a4RmJjQjiD73FtTq1qyhjwpNddZgj",
  "key31": "2XKc2UZGt4Tr4SZZsAJtGYAE6B2X6DszHHDMLoRbNThBGFkKtSLhErG3p8UaGyi51upyKnHuyt5Pi1v1sHRwoyds",
  "key32": "3WiLwKCiwSGS6RifY9CRSxTUweZYgSqQySCmtmXgEUaD19SXm32ipZFY5kUhqbs2ohQmVjpvzJBsBV2hwAAwAyhy",
  "key33": "4BN5cUNP74mQMFtVDn1EPaiC44tpitLzmSjHf6UDfr9McA24HyQL9U6z2ikW7N6GoR3qAR3xWVdNCWu4EPURsdns"
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
