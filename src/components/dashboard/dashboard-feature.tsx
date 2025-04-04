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
    "66cugjgMKFgFJBMkTeAQ39MLaesgE7v6TmSZgQvtG6trVKtVWdcGtex5NAXKEbWSMZjRpv5Bg2Gr8nJMM36oSVcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MAYZDw2jwfXRcE2NubmdR8TLdVXrveT1W8h4wPLFmgCZpMXh3nj3BcFDxBCfgvzUmyWs4zKuuVQuuXfgULH6yM7",
  "key1": "2hMxi3gEoU1iy5W9xf6usp7jU7etBzXNe5qi6a3DMvFRVvYJGHW9KTM3qtM778YvSAuj8VRavp1BcYt3cQM5NGvy",
  "key2": "4W5zPiJErTv75jezRZmmGVH9TeDjjkR866EezzqWaZajcp5zCFXvsXyG3ePruuZd93Q87hkGEFCCkTmpnXpu7pw2",
  "key3": "51VXcDcP3qRtpxBYv79pye93eaGUxbGTB1tgJbCZxXWzbb8K5etWAoRoebrBBVm2B3wj9i53nYRDQ8XVPbqocAbt",
  "key4": "2kjYJDe8EsTr2fAJFxTQvrhEYVZBgu8rqfYCZw25cWuMWL62ie7wVUFsSgnskiQNYecB76YErkvoZFUrkHzkg8td",
  "key5": "4QzYCAGthPDDu5XH2qF6HtAdpmHZzSrQVJngvvrtKRAr2Za6E3UVcR4pkJmcTQ2pS7YjW68x56a9UFn22uT21Rgj",
  "key6": "5bzxSYKv2gPn8d7UhUCW5rZEe33JSqdYuQUDTZNBHTPtUp7z1JW37hkr71b6EtXjtrA8GyHKTTU2UwuFyL9ftixU",
  "key7": "61pwZueKLRqLWxKoZmo3EBiqdqSTNcgoTw48q7fptqZfoDmL9J2U5gdzLuRZPF8Dt7NuLRAm3BTmaGTDKE5kdh17",
  "key8": "4onqNUM4RjAkC3Q2AnBN54E4j4QZMBzZqrijwZQXB1RjTV8tx6LFkizjcgZbCWzofpPZbFeU4V61YH1oMsZmbY1g",
  "key9": "5jjYmWyJ8FwvQ446bWqLUCoWK4Bb6F9GHrHUxiL463ZVbuDc1F32NwVQ9aX1Pa8docm4v37zALC3dGkSYy6tZSzm",
  "key10": "pApZG6p89T5cF2aVcXPCEDMVU412jbBqgeLFCXgVVPuCGKDXxVjWoA34JsPKKoUiZvbSmMUq3TiRxG2wRQk2xgp",
  "key11": "4rbWSrgETZD2xKeFdeHfd3Q7niDA7CkVwwXx4VwzZcfuULrSLiqzjGj3X9yBDmQV1ZGSHXR6FYBuzw3YWA2kLcdA",
  "key12": "2W8Cg9CRUTtvjYx1BB66NZ4qUqNAT9Y5Z7b4YEUwZRiu1Yk2RdKiKavfEgpDPvvBScNjvnsSUW3Yw2WTShuYYab4",
  "key13": "GQNizh8HPDsehG2h1ijRSLEm1JVUYJAxFuvWxMNuRre6MXbA8Q1H2EEfey4393HLWZKfoXn5if8GWXUAae5gVQB",
  "key14": "2xgUhNPVratayj79RM7wzL4NzoepXAxxUcgrjyVrg3556sYf5WFuejTQ7ygYLRwpemJn2uoMew9oSg5bheFr9vbi",
  "key15": "D6hv3nBAUPBd6NQRJ87TbuUwbLVQaUWzbYotTJQ4T12C44x7zAP6BpQhwycuykC1qK2XyCrs95mwj1foPsrrZ5A",
  "key16": "3LeJrrkACGimjUM9gX4GQbk2u5Qp4YnWhsp9MymfTiurXtRjQat15SPCPunvmsw6ndQDKNYe8ixxAvtVCDNSA1kJ",
  "key17": "5PPmfSduaSrsvVKfmyArJ11Di7EgwFTPVfpbWHFungoXmAbBVnAKMBYQKYCzPbV4Jo9kVfwAAp3n45qrHQhALAc7",
  "key18": "5ewhVcaFACVjCvjNdbbyHpWHLoDUG6pz5xR3SGrNZ1FpkQ9aFzTkKqSir7mykwzJpPgDgCY8x2NQ9TQbc7ihxbiR",
  "key19": "5QNBz7CH6NQAquSH3ruod7Ajd2HYAyb6imsy4DZVkRthdTosT3mN4dqA8Vd7EcKV6FycY3E252A6doLBEEPToPG3",
  "key20": "2doE4aMMtjSAPwFkXYoSQi9cWy4zTn6fQa9n3ZZ4iqyyazkFQ9R4CCdcWiYKoeggmYHkYxmHJg7BbMXzVLqoZXRE",
  "key21": "3bkwtcNiQgCZ4X1eTU44NoYjdJRMthAD6t5xHVheWJEfCkATRzhtQNbRv8krK1dEdfWJQB6pGiEcyVRbn13K1RzP",
  "key22": "29Y1SQq34JMB5GwGj6dFmig7FcUE9jELEmk7iqr82oB48weTCZiew2Wq9oKbxKaDtXGh82BA1UyGSVpfK2AbX6zg",
  "key23": "5S5776PnZ5wa5CfkZY7Wc4mHuBdBDoKMdgHtb7aPk6pY5PChRK2329tw8T4rzFYvif7JKxkdMk5hLkoNbXAdSSvX",
  "key24": "4WDFNUhMF6is5h1WY2A5tt4Z9yGju7vUQctCzMiK7ouUJ8x5pyBbFdNsA3HcysUjvXsRNKLR7vJMLE7uc8Zin9Yo",
  "key25": "5mYf3nccqe94473dTy2LkKCpUnt5tDTLznH57kZ76djHSX8FR9UgPukjEx36LaJhoLWfnbVeL7rR4gsGbhuVKRpg"
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
