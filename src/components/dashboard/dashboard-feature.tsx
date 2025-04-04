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
    "42uxMKn8fhAGJvwe3U739225zCiHqinz8Jmiy4bL5yLK5B1gtCJTpUy8YSvU8i4Qt97YLHkL9WeXfKhWzXviFzHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "USpSY3rmQjRqWFUE4fLdUHTZrSAFg9rYLgCcCegxYT55p817pT6dJB2EfGkmvXwdfjKTrHyLHh9LrD6MC7kWaF1",
  "key1": "381PTZ84K39GHZPTAeL1qYKdvH6n4Np9rWY7xJeTgsrugJaaqFkR3FSW7piyGp7pJKv3YmxaWKJXK5EK3n3pmBX7",
  "key2": "33faWWxw7fAH5c9GRyYhCuiVhj9nLEcLHiBojYUnGcu3cwc6z2kRUwtL4Uzc2g5wboNy5G4JCz5VWC6QmAYeFwdh",
  "key3": "2PnUPaLhAHAUT9ao4MnMEv6e8tZtwDVDCpccxyqSJmpbkrberv4uN11kpQkf3kEYpoTpZexLCLpLuv1vNreyDJZr",
  "key4": "SraBtH5APVkYd1dgbqpgBbmfDQgZEHPnVS77yA8ZBouMYNcG8A5hm6CFkrgedP9m1tvvuvhijy5c74pwJGGX1yo",
  "key5": "3x914yU54H2P3XipXPdnVijxSCCLfH8jZYMYWpmo5WbdANSxDy3VRPakYwpLaqU5BTwwzhMHMpF745qw1bJWEjUh",
  "key6": "2cwi4CLcQ6Ja4pyXwgq9EPRxV6JH5D17j4SQN2M2f72sUNzSoTWkkiBQDSovadRyKWUjKCNQBtTtxzRNUkwUTGjc",
  "key7": "4HzR8SHf8uRu8GuZQPA78Dk5CAqxqibLV6YjwWtNQwJWYqu8ZWGeBjPYUnDTisUmeifPSTWiJ3qpbtQxBcGvWvCf",
  "key8": "25eERPNGdRspckqSpcLiqZ7uGr91sbKya52zgkmkEtidp18kzvvhjghiNWnknUR44AbVtRjSSb3QvjBEPtYTU2iG",
  "key9": "44UwTosLdD81A6MJ3uqiRvbSrnefFHmeM2Af6GJCThoRAumgJscQE9aBC6emUzECdXudQ7Pgfefy4JzgmMgyGudF",
  "key10": "mf5p16ZGUiNgGC7bwJVjVmRxSmMwbXY6Db8Q2b6Jk3EohwYJikDaKryHneWT8YyniskoXQ56yyihc3BEVAkJbvd",
  "key11": "DBAWNV3X4M1L33bDe9vkjj1DREbDG966UZ1tFw4rWU3o7e4PP6iLxXu9Y5Fc63ek7z6Xt5rvgAzwrEibLRAbjbg",
  "key12": "5u59HWdg5eZydUpcgRcWR8BLfpkXwQzMP8P9jgMKwqgkzBcqSZihJteduFjgWQJj1iuxLM6pZYVB8Emhb8kU7oXn",
  "key13": "5VsqokhTGKtZGKUR3YEcfUqRSE2AaUMJDjzp673Aar5dJ9qYwLJpuvj4HZWzZ16UKDx6wP72F7JfD2CCzQV71vaZ",
  "key14": "4ctCqGYMLnbsxDcxoekHqsVu3rFy4PoRt1PcDbAst1MpsBU5N3XtVh1QmvkTvesfXPw21z367yXjuDBp7d6MWYVX",
  "key15": "3uZVH55KxCnF7pXMCdRCRYeWm1h32VsYGK4V4vw2uDZX3pRzZmc8E3gMbCKFz31fcatmDenymbrSNQDCrkGa2p78",
  "key16": "3r1Yy3DW5QCJxaxb1EHVQKfZ43M7baJAYh8g3gyorDxFdF76sBVQqo6ZjDLpKRVSELcHB4yZpV5YnVAb4fn8ZEYf",
  "key17": "35PRwKzVEvCCrYovkP3EpPZRJTYBVfAMVVFBqq1r1pqMQYoQpt51pWT4YscL3uGmByaB1tttTdPs5zoJ9WAvtzxa",
  "key18": "4Xeqdk31dPCu11FV5bhSYsKjUggGPA6Uf686ULQq2Z4jH9WvVUWCMVka3r9TT4YAkGwbvgy8UdoHnaMaMRjdazGs",
  "key19": "5d3XwoWdfKMkxoGPgT9T7Q7syXJFc6Dk3bpqzbfupAyBKsWMbmmPpJCDxzJTNj2G4H1boZYSeYhzqpEaN2aemEDk",
  "key20": "2rAB5FGMMyXCDp6LZdXCGmHZ4CAcCRANugPAuDE4DcHDkU3HdPhK77KbkLwLeFCMdAogYZSwmFMnYRR4bYg5cBLu",
  "key21": "5fD4d497AMAdikWFLJoRHyHkfLVbJvTityapwcb8BkUJ4rXSfyNxickxxtqNRyv837gfwvV8BbNHoGRpqtZvCcUD",
  "key22": "VYywQkPiyK1csdmxsgEFVNkJXjWyRFY4bUCVGYSfbrvruP6eQmDF8BsdHvRGssYrXo45EnbGkvA6JD1FhExyLDh",
  "key23": "5abwDe1jCQTcmd1uzyRD3LnLikWXoaaXEuinnrjnLufmN7RfvqddScFVnd617QPp9zupLm55tvTvCjAdQiPWNiYE",
  "key24": "3cstC31c3mT1Sy8ktkxUhmcH3PbpRAwy3xh7RhafPRPXotZMjVWrAZribMKJQ9ZyP7ZZkHjCK3ecXT15asNMroU2",
  "key25": "5zizn78sSLroGP6MjYepQmp9e5MLCpTw6Jr4Z3DTTVjJcuLoSZDhz5MpEq31Xypk9bBh23e7seekd3xV2fEZEte4",
  "key26": "4aaBTMoVxn4WV6CpMoP1wR7yYcmLhvhm9DnFH5PAqjonPzWfoXVh22oGa71kvAZLSENZpqpPKMkzrq5JRx7Pekbb",
  "key27": "3RgZaWVw2WoTLBPq3ETnJ2eLEGo1USUCioNcU1VD1iMYn52KX233bQnuC8AatSQaeuZ2ksiYXiYwJBH47uJVbBHY",
  "key28": "2F5BGaSNPfN3G2CHxE36ZvbNZXf2sTLhWQ6NY9bkGfYfikW3DB3vuQUZ8ZC3146aTPrgxvVnY6JGxBsVjbZrG8Nw",
  "key29": "4L5gduVqz3xsmejuYciT39cDH1MMVRj3tQgk5GfJqdKnmPZ29Fm1dZscntETcWzrQCdPGmSGh4K31WAW8GotYQj"
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
