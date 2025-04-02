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
    "5sGpjrV8sSsQrDz1z3pjoagskMeonuWotJBVvTqM4hBnwtFgnKogUwjfoUF5vVvbQ2dNgzU8QpM3UPL9bQ5skUeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o3oqV86VNS5UcPSxfveFMro9twtQSEZzdhxHcUzAMnG2N5dSAwuHtNfQ8Afdt3AvkbmTYkZ5fs6Sxk2q7xsMbnZ",
  "key1": "KahJuXxBuSuxy5eTBynvhF41voqvVus9oMhKc4PrfpRVnMzBU6S12StvM4p4rB27C1MUewR4ExroyjyHzDs7TaB",
  "key2": "4a3fDgdME8RVRpus1kgHZKs4Y5fWUYCPFFKWsBtswhVh1vk9pYQKZ6gunn1wh9LvfQm5wdZtnaPwXEhbjLLgxVvC",
  "key3": "5WaSndsvH3tokLrw13rpdh7ZN6n4UDXt2g3o7cSFRhAfd6HXc9LQVnKExDtEWJXf9NCwwB2832fGzwaAxgrWtXFB",
  "key4": "5yYCUqEAtwL9BHEJt2BnqqfMPv1UMvWFRc7qvfh7UWyKUdgirZFzeseHtdvpinw1gNty1Mhng95tQr3jqsK2sKYH",
  "key5": "4d2NtS6HGy1MEZk8Jvs4e1dsBy6DtDPVXsRko3iJve46MahaqHrEPuCbtz4VZwQQWY6dcU1jf1XNbemB3G6qJwSH",
  "key6": "N1h9Y2pjiEo7YzngBnWkF7RLuPBUD8tBy5QD4skAPSgPMGNyUe6RKSt3H9xRdPhdwQUjwFmZVGo5psuk5qYbXbk",
  "key7": "48SFCwJzeEFTw9pNgYqBEQb1P5vFFE1znXw8nEGUDVeu7L9KbRK1DqiowTLEkwcmhJZRpDpSucm8LyQWzXHCeSgw",
  "key8": "5nZA6mUP3Lcqvsa5FWJFX3kkYUMU7YBQTQDYFZvebiqZ88otQ4o7dJyC1CS7SsuAkZhkPzqYc6mwHaH9GYNiutMq",
  "key9": "6ShrSk2xh6pKojV5eCSVvaoF6VrpBHYpzMPrHtBVzMatnbEKQH43BkRveCA9WHMyz1KqXNAkeMEPPiCfR58ioiu",
  "key10": "4NFQsLjsKF3gbJyMc8by19uALBXVY3CZKb574AJVDhxVsK4WY8Axzn9DCLvmmdoeDtzePWL6YRLTD3Fo641Tv2Hz",
  "key11": "4fpAc8yfdh9ZXiTT8XJRWrao8GoT1NbyxcCANQhtExPbJGbUieTszXfC6XdTHdRyXnbVrp994N1MMmNu4QZYNSQf",
  "key12": "3DFQpp5BWkLr7EJKR9jWR7od7QZ9ezZEgEQ1QtFtWmsr18ywhKLV5WrGQ2EdjpBM8TaR9jFS2WkT3aedtL1tGXQF",
  "key13": "wLAdkQhwdi17i5QjrDek5hQMHpbnDoAS34jRKZbC51TWje5CPVQYW7ZoePM4YvBLc7YRpZEi9wvRLhakJ1ggVHG",
  "key14": "5D6HMLW59Zz1QY1Km4YSoJH6QLjdJ4Xfk2engS8vbqkEujm1UZ4yiYKC5vtVe6xfgWKx6ZgJyGriEaaWZMnCWqwj",
  "key15": "2rFyQtDBT2qu5by6KPmWnonbixiCVGgCxMcsw19Dc2LCnuQ2aaKRGQ5vCRzKUk4czNSML3iFrMmKb4ZHxCdSuRa5",
  "key16": "4981GMavZbwyWcPzhnehL57T3FFHWVU69ktxBR4BTDYg7WDqibLiCTbG5pfbuAkYFFtt4Lzyk9BWgUrW3nb5mwEb",
  "key17": "5DsKuEZoJYddZV5pBvvcdhC6APvsJ6jTqH3PkUqv134JYfSFhnCaDcE1U3aq68eDSbtCquDLfPSZ3WWyiA8mewF2",
  "key18": "5DFeB5SS7XnB2JJtMtgEJe5u71R31PyfV4FY6VVQLHiLKmQBXmtdGwwiRtiHmeGLXPQesHwASHKWnhbN36qcLtHA",
  "key19": "4oVFKzGiVAzRs6FGsKAo5pgTaoJCuxB7VPAYaD1T2AWYh7PXJS3EcGq537Qoeq5YFWMH5UTwJWDMFMSB2bCrwvaa",
  "key20": "2zmomD53rWCxjkeKJP8UFBZCxVSiKFPzZ3jm9tUfwe2vre8PoPw1T4X6KTkSzhXNhjrEzgzg6MMup83Vw4XtPaEL",
  "key21": "skpkPQeeE8Z3MQJtrFrW37qG7DDYvp2FrirXWVRJExdk4xhJeB4Q9GZTV6HJwBp4owWh76T5zzifHRwk7NeYBbq",
  "key22": "3jNHzgSkjxpT2wh29dMNZk3Ncb3qn9VhfDiRXfGWxoaQ4nFB2sL1cPW4PsTfhK7EWpQ37VpogvmqUGtgw1sKAAmb",
  "key23": "54ByLdV17S74Hbvr4zUMfmKi3gRkE675LbukhGR582FwkeNkmVPxBFZ8P1VqV7zTcpfdNPbEq2L7P63UbhFX6aBs",
  "key24": "AMNm48cBL8ZBQ9awh4f1tX63Q38DkUwf8oc5mXKK4BUa2ugbUt2mAmoBAAGEYRY11JxjrgKBeJvcaS8T3FMMHPb",
  "key25": "5bxWBFJxGRPyciBRznPtdjWe1QV4jY71w3L4QWFxjc8uAuHbSu87ARFQWd3NpgcXe4EgyK5awpjbxkbViokX4zNH"
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
