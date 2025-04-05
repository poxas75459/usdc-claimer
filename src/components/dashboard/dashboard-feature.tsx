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
    "jy5iaEskcJY9za7WKs5U5Ez77EsPUwssvrdU79LFifUxpBnLPzykgw8pa1X2EnDtPvPpivhiaMt7zs31Pm5bpR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NcGP6DhsMU8GjqfUNXACKz9MS63FHAuR2SeJGmCu7GkzhSWxotJ2MgGHBxr2ApWkbi7SLXDoy4KUbUE8NivWvg2",
  "key1": "UYFbymsU11UJ1QBTY7r8x7yUYAY3M2sVXqUoA8h1VaG8p9ZjuTYb4QqDvgRr1QDmws6it3nyK8tTNJ4EBW56pio",
  "key2": "35Mfjd1C3sCvdHX4quPQAnhNtEPLLFz2719UbYd64AzYDKWd4EtbpeGkTQD3vY9pENv8DB3jXXEJhpy3rDSL7BzK",
  "key3": "5ma5rVWey4V6oPFuXnbrn93wKYxCqKw9dDeREyeD5nJyr56MUJZCxTXTht4eJE2cD7gTenb5z85B9JkwTw4XpU9K",
  "key4": "29jJ3paZYNX2v1gDMpk4fp19cmzfPXLMZALedQjGwJcHtpoKLv4QyQrCpozEZbqGyL2VvBXEatGmsrELEognqK6V",
  "key5": "4Pyfp8dDjvorcRMpzWyDU7uLNWijJaWqq9Joc9rCsMXDfnLEttQzciq5oZkvJHjC5RDSQ2gdMnGyMaHBxg87d2GW",
  "key6": "4qu2iazwnNxWBVFhkxKALry9hQ4vBbirCB8JBT4Jykc26jqKwr6adshNdDSakMu1oxtVv6BU69iPcNNjD1DEQB9X",
  "key7": "55w4pMmjq6jp8JAf16Kn4kNYC7WUeH7nqabifpNPr69L7qW6LyiD2irtjupGsbaPTenE9RQytPF28dbeWpY9miUY",
  "key8": "evs2N85JRfhWnA3wMpQyJKMSUgVatHdCYzjt77wwWeSnFZZh4LpYoYSvd8d5tT4116W7evhoNE24aCwrnPdq5Kt",
  "key9": "3abEsDmsx2Ny6ubKN6dpADkQE4n8EUTuo8a9Wu6rLbcpBUoQ5iKpkoGUap2YaRKgKNdsET8KUWd4ziecSN6fKpLY",
  "key10": "5WJrbteqLqNfDvdFHZFjpkeoss6NyWC7JmdahGKGw6NGzoRCLT3seMRKuVKiHynjjcjiRYZrKhuMLeYSermJCA7V",
  "key11": "2NUJmLeK3od311byE1ootxeq9gsV6wpGrenyQNTKHdm12KkLrgVnPA4UPkkTuP3de7KPofYXRtWA7nYUajeuxm77",
  "key12": "3MQoTtT4YxPX9ScyPWH4AmNhXXQ527xpotUzrtcfAuFysEG2E67KWgst6wyiZ4ZQzT2Ac23wiSLAFfT8estFUAnn",
  "key13": "c7h2ezdJpxkNhE918As2Xb5brJ2FJrqTNCED9ow7KjLvgYZArPgEdMMkAZkJZkZRiLpUMvcZzWbZ4EGc3UuPQaj",
  "key14": "4qmwM8nwEiSbrLSZGh9vSfkJBsAYLD6wUkjoQaCTxU4drCJ7FnTxSHgiPVhnyeyHLQ4c9hx986cf23247RotQYp",
  "key15": "3A4QCaHdxX5651mPfVFCHk3TGedzmsMr1DRW3ptuuDnsS7dBRDmL1jAQrVodHLyy4vfHxtcjwRBvZ9CScrMNWZze",
  "key16": "4rXQtJcowHQf4mZkrTNtz2i4CmjrZiTuDdGSC8MnZRYoGmhMjA5GriLXyFcL89eCR3J7Tj5fcvksZP4D4Brxk7PG",
  "key17": "3cikBaaJdchEhbL9QaJa8UeMdnSkdhZKPPE1ZbVVAqthY6UQYZBKRDHCbaCBir5BDv4uAM2VeMNnWn2vKDAW9nS1",
  "key18": "4rw8o41Mri6yLp3jsi7uPRFRAeXaziifKAMb43XN9Ewmbfvo7QM7UhwfADqYg3uQwMcUAswzgz7dRYaZB3n2YHpF",
  "key19": "sdPLkYwmnqVV38iLR66LoEEBrU2XLyb4Esga5yTKJ2RnGVBh9Rdjz8m4EeEV4riupFP9uKXVmmEkwLyi4khKTqg",
  "key20": "2eg9Q7RoEXyqoMFnNzyGwsc1RWStT88sqS86qivL992dwA295s85VL95a7SQfXq8LsWaSij8NnfVZqr666WXad7S",
  "key21": "KjHSvu1rVJ4r2bvuTYPqL5FwjLMr4ki67pQCY7949dTs5DLUAhZ1Nx7b1buBWkywqJ2yqeSCSXBSNK2u8rS5UKX",
  "key22": "39VGkrPRPnYRoEE5Rzd9q6cgceHjr5vp9d2Enok3bF1ubVYzgXHzhQho4az9CNW3R7NPS4LDTgQSZys8dtLmJeYS",
  "key23": "26QLfPnJYMvZxpkSpSUMKCUyx6U5EhMEp3bekjXdTnVxNVvVEkjNzjQzQWbrbxLC298MYEzVmmiRj3VmKGMPGfJ3",
  "key24": "41Q5y7939bPAtxh2XMo4aS8WVj9QoFqzsnbC5jNRrkv8u5wLS2yQcPCNKPfT8yjNuAwuhN8JxeBGrufCKvBMUTaw",
  "key25": "3BwJggwMts9cK7hU9xuQtQidzkKQv8T5PSyx7bQvJRDbkx7i1Qm685FHXNAXscneuxaiFrQZMoeYkjEAcFsSrupP",
  "key26": "3EPdBJd66pvDA4bd4Tvh8ancN3X8VrChNq5EAaDpDCpv6isKpTZe8vR2D6fSaeERvta7DTtsgDgR1i1B4CvQEQ6s",
  "key27": "jJHvYuwb7QHZKUrJS1wQty3gAwvNymtMdJ9o952TgGYdWFUabCfLMTYvp7VqQRNign3PmV3njtDfjG3rXN1rgNa",
  "key28": "22kY92kS2Pwyzzhc2X9PSsvRK6QnirdX2AFhWntEanjYz8JYQ7gdVpWPgan7Dy468HKaP4MNykLpFASMxD59XzeC",
  "key29": "4Fx4bdCwjqqqRwSKbSqQwhNrYsAjov5JEZyM9im7h6iWAYZat3tGBhLbd2iXAkc3nPtQnwVv2g1mB4GUnB9bQK13",
  "key30": "5pBfbTmFtBP8mEda2283AWtSQmGbyWZMUYgSaiybv5bA7swyQvnpVNyHi5eAygpJcmzDPgyxKUVHZ7q1Xb6tCRSA"
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
