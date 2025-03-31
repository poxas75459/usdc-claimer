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
    "3b3k4rzFwM3PgFQofE3V3gNuNtaRJvRdf429ZY4XADNNm9Nx1sWdKqrvCxNYwihtKSXMkE3YWRGgapGrHJDLSLSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YmNUZiUqRwVNjHobaxZQrkYXmgqooW2jCZQDqhtJPY5HdAiBZESaPuYsELkbzzFZCKHD9dYsHUCjWeg6zr6e1dE",
  "key1": "5zq5NYcycbxfiqDNHkizMFnQe455qEy66PTEVimGuHHbPPgrQexJoB9oGrDyTCZZt51wmFqUwCqumivFUtVV4NcF",
  "key2": "3APJ93MpzqyYfiH3NSCqSc3WoEe6xYd8jHQd2VFRrWSo8ezYob8UZAWrEdZJ1w2DGyNSfmc1GzFps4N8R1aq72dM",
  "key3": "2zNx8yDx2ifr3fPYL8rk2474gsfRyxBmQjcHZPb4J8wEWPNDfwvxREtqSqvWMuWDJAAdGPWW7Y8L7swP2QSr6y3D",
  "key4": "56DbEhPfuYtCYYc2RHijCnKjgamyM4kXTuy4U2rTUsKdyjhvQsRFzVCrcwJPzRA7GoJBthY8prE4HMFymMPBkT44",
  "key5": "8iycPm22F3m6S8CVFxxv9GyxCSxpEzF68dtmKLFfp2zrBgEL8Znet7Yh1YKXRXgshTX46N6MEevGERgSqcDzag4",
  "key6": "4YUS27HJo2z48QFWJ3YS5HWty7TTFp5pq2iuyK5Cad1SAcUPaZHkhAcmMetKJdA3PcAwzSiW4m2XQmFkQmkje5vw",
  "key7": "5HRMkfLXDig6HFVf1p6vMiELsz8q8hZzfeBBVPCZWwmevXPrPcPGczm7XzoLKqHq57r3pDedwxaTWx7ocL9k9wN2",
  "key8": "5NWkpz5Kh21dps9DduSfygGqxjiwYgk8XJoY6PjKC9B4YekjQyiaPheZSf6jRvPReywY4Js1xezGP7uiudJavrA2",
  "key9": "2QiS4Av3AaJacmNXTLBy9d6GeSs2hDy1F1f6YR6UzToeHjiGy5boMauGn6GbzmSUfhqJGrNeztohupEkxs2ZzmRh",
  "key10": "4YFvDSy7PRt48SxtQh7g5q3hEPut97bza6aaVH7WfvM3TcyVqkRLgBegqsgHMQYN1FZZFQWcEq25vTJZfKjxfpzC",
  "key11": "pa9U5vwBm2R6YExQgB4sGq5P522uunvxQo28TnjBziAGChfmr8MZ7udRyGxUbuLDKBfU3NKL1LX2We7CqJovf3y",
  "key12": "2WSC5Mb2RrTxFHG2QicWmPSLPFEkm9bThcWhNrwXdYRgvHGkMxvrQkuCAhJuEz5MKSPGaz8BFDRaBJFVfXKTZKXP",
  "key13": "5yqZqZfcN7fXiG7HLYJAK7XpWBvWkRJbu3LXGfctMi6cZiCGk6V4GKzx3pQFvXvjQVCCDnubirH2fS9AtX9aAeoq",
  "key14": "T6iti5Ka5ifhi3bksZXVdBb9QrhPccPNdVUhg4gfNd3pidGZ2nexHRKPfYW2VC1CR89zKawimTeAoUkoRFiXiUV",
  "key15": "WLr33C2z7aD49y1Pn7Uy4q9vNbx2EPW39RoPTcU1Ux4guPPfbZKEwynaGUfcENc5JQLwY9fZFaL4ipdWVmzSXDz",
  "key16": "3ALnBAVazDL2JnxxwFt5TfN94VzKSwGJ3fqhe4EM7X3QnU3C3YtHpSeCWa7ZY6J93F55ssppLxJoEZJbh4M7isCZ",
  "key17": "Yq3PRybK5HPYNnq5146S4pRWyYBy6qoZPXTnTg8wXjNKiLhUJDpCfoNVEYqioqFjVg3fwrQHKDbzTMGf1zn6SXx",
  "key18": "5DLnGdctUyx42sE11uh47ibmkpndyB2rQZCRnMN6DMfgoX7mP9R11wUXLYCueakSt4LfEbYt9ovnnFTMeqW2JAAj",
  "key19": "H1MhVmDkuFb824NTAPVv9MJ5efHox7UmKarpcy9CZAEE2EuGgCQzZCzuuRzaWt4hqKwjjHCHdSdLGxVUsT6nzpm",
  "key20": "5KRMaviskWBbFgVzHUK51g9JFe9gY4J87y3poN7jZWkK3ks99eL9a3xyYjH7kYJrB19WGtFeotLwiYoiKgx2nDQU",
  "key21": "uvzDHVTsAroRd35dVkEuC5Dnr66quGnYVq8HPovgRWniCpn8eapripYdvcVVBG2zQNp1z4m6gFpSp1p2diGSLkx",
  "key22": "3LgpEBiH7KCLhqXXwvkpDiUd6NbFsCG4HN4kKPD4igS8Fe42pvhgj5dki1wcZmDzt5kDUDGG4UDgZDXfy6mmf9e9",
  "key23": "3Bk2MZBmg7bq9Qh8xHLKN4wDKaLZKgWzQgc2d4XbiASUm4EKi4hU6WS9ihExML6Q8STuzV2AXBF5aNhzggiazSKN",
  "key24": "5KzyhnMDCDaW5Xebec9o1gA95o9NaRRa7JYJjafTukB1nGo696XgpL2K1THkGRHLbY3rTYTnANH8VqZY4DSxAotu",
  "key25": "pdRJEadfF6BeZhqCUfWtaqH7mcwmLDy1UNrfihYjhS9SYCkMyc4wrSiYWu1Sj2RJ7xX3pDz2vpv791XWcbQovZe",
  "key26": "3rATw3QkEUVV3Zk2hrQCsgQii6ihb16wtsUrLAWFJVCbqwHhBT4rj47euAnAdUYA3EoRG9YAZ5CaxuW1fZtooNVV",
  "key27": "3AjFFojaqA8dKKmzF56jWc6SN4J7WEVB27yot1SdY5tfjmAHDrd5j2aVps5EhGnBBSwFr2TadRTmcbbeKn3jsE2N",
  "key28": "2gQTdHSNj7QM77pFEAZBhDytrvHQFM95fY4CcrYmU8XvLc12R6fomKLagtwiPRcF8X41GVTS246FsxDeSHM6snp8",
  "key29": "3iiTtqmZyUSyf4dwGbe7U6ECsRF5fGoWi41tcdgVhEfKFJmv4ngmsoCUmQ2GpdLShaFP8wtwY5yzbe7SZUL791jD",
  "key30": "2T3WPaHGGZxf5Qco5hipxG2gxBzLH6NxfdU3fy7Sw774qQH2joatHaRtBtWa6Tr8Z3oVsfqMvNismQgHPy2HsJin",
  "key31": "wJehmuTZ4ySCRiYBuQBc1eFiWUHD4hMAyknmuBpKNDdZYFT5yEKvJEg9ySFa7141NEhWgriDypV6rYkkfnvNF1W"
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
