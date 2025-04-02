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
    "3xsCvrdCcdmTLcz75TzqYmpcDQW6G4jnKTQP1gZ7xDwpRedLD4VqMEU5tcsw5Vx5aEjvVmBWP2FxtkbhRGoyVSS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qS8o9Y114Trueu2cgsJf1FJstEVM84o2wsP1bdEhLroJjsX1BJoBt8ZiYdxxHQjMbMZMQYtjqrZPD4ccQj8EAB9",
  "key1": "2D6hdYbFvsdR37RGPs8jWViHLApYFTckFT3Gdg1J2TBH53eoXB9UN9iAoyRnKBstcx31UqoEcar7kzJ2JCPuRtm1",
  "key2": "5quSfaAqnVU1iJi3g7vBESZXxwfi4Uys4Qw4ngr6h9tEQjYzWfm5Gc3pE9khK7a2ZQ2fem5RtwvJsTYyNY3WJk9H",
  "key3": "5zjDjcaWdgdGuKqWqacu9GAeCzhTC6zbQcGoXkk9xrHBRGyAYULr5VJYEze7eh5kFTauSpvkrf7gMJ31KjTMTm1c",
  "key4": "4DbRZmQL5UqBJs6fK9dCcKuguW3M2Cp2rcj11rYFBXWrVePdqSwnpKfwf2fS4JRZjU9pejvwhRjjaxeg4VFXhQXj",
  "key5": "nrTi7tAhmTwzPTPidq5Zfhfwbmfdd56KXFCpJwrUm4uyQCiLDmqPAsfxxs9W81dwyhz2yAdxeVknDn9F4kME6Rg",
  "key6": "2xjenf358YkngoJ3scmuaocWvujWYYxg2KEu7cmWnHQWUcnH6yqTh4GsjLdrbnBeKv91hm9eNbcRe8QapCvNmzvR",
  "key7": "Sc4TA1yDuiBvEKJUu3rTvWpqXPqTu4DZHFRLq3PDWQSY4cWuJYTpoPSJEk5PDuM9fZhqnTubBDy3VzUBxk3CN7s",
  "key8": "4Y4eXEmUj8rVFA6WgbJeBMb8eHAKpqwhwTFXGEv93xegcDt2PV5Ce6FrPsqN7as6myiPbYzyqfPFHix7HmRFnhHa",
  "key9": "532AhfudhjXSKo3HxmMbBzv71GxGE4EAnbYwfuxtTKPWogUpMcrdwsyLhmZYK953iJYkK82LFJaDJJUfC64k7ufQ",
  "key10": "RwAMaYn5UCqLQXAQELRYzkERehRXgtKVBPqUar4aBzBHCLJXzMc3JGZ8U1dtD3iy3yUgkk6dSdKJm6fB73VWYyE",
  "key11": "5AGMt4bs212SZ4mbkzjamkjL1uweRQS9x8UTskamv8A5T7XGn1fz9x7PfMTMEd7HawLqsPKtrbbnBfAsgK9MNcEw",
  "key12": "5NoModUcT7DsPsa6cVMSCiL5kLYrQE63xPcwCGsXNTJoq1w2TDWuY56AxLrVSbZKGPUexsgBvM5GGeERpkZZtMvP",
  "key13": "4KxQeAgH6o2PrtWCDPJM1JhJphKbgZrZW6rz9h8TKe11QsDJtN3LK7rNMHDCjAg3FrWnKx2zYYqK2CjMmeJpoGRh",
  "key14": "5c2RtY8FUwW2YA1GebkgTbVNFaRQ4rJeodLCEZFWXmn59AXnxsrAPDK6EpSdy77Y4EFxJHqc2KUR4ekPiA1tKKT4",
  "key15": "5u9Yh1gYtLupuh4Y66fyNojzaVbBShwi8Z8FBbFm1Bbf7wuP3PLtPDfLfj7YwT6LpcpVVd2UFyqpKdzrA6WRQFQo",
  "key16": "2t9AAGaYi3rqNxEsNxRi6pxb6mwhgueM9V2tzL2uqrNc9RGttW9RRmD3SbNAVuy8LbW4hkjhBrDj6L3KqFnomka2",
  "key17": "3TfmrWAA46VmnEmuGxUcjrykD6a6G8FxVmFoRKDNg5R9Ew9MUNvjj4hk5myZAZSk9u6pNABzzXou2qVTim74HiD4",
  "key18": "5xNApEVV2FVbkjvNrSRu55uv5eh4JeXZMuzpEFPdiMXGNU4e9buUR3EJHvBThNhEXb2w8nyjxrZQ2xERL5hkgMx6",
  "key19": "2E96suNpwrzgqQF3Z1QnLs9ShFWLSoV77a9MRkj8X1cRZUgs6yBjybQ1rNwKYD3rxB7VNo6MxTDt2Yb4HhfYqkst",
  "key20": "2daDoopsF3New9XzrCcEo4Pp9FEGAHPyjqFS6yiXTxJqp14STREB7EHmKsNgyjC4bcHoPKKWUzqdS8yJ5ShLhVXe",
  "key21": "2PFjKQxSJcfHPgEbjrbhHC3LttpfheNWJsTuvixf8SW6g39KFeE3tq7giunGnu19NLpVdtL3bjrtrFDgNMsXR261",
  "key22": "4qgza2qY5pEgtDSvK8cH7odfSJ5R9cmTSf6MM3p3scDxTfpiLQ1WQEti4w8yhFT4neRsBehQvbbzXpgW6NVE4Suk",
  "key23": "4Vv4bH7DpgksksTBd8DyjdbCZRzZ8ZA3hN5KSvDY9X8z5iUDiJR77TvH4edbNE6xXWyXZ5UWFMfmVVrPUDJUunDi",
  "key24": "5f6n7J7hQuYpPbLN4wM4AJAv4FBvAAreHWM2EQrezjNkyJQKCurEFpfjWC2WB2AKDKMmimPH9yAy5SjTpcKiR6JQ",
  "key25": "2bheANWwrGBjawQxw1iX1NN8iNPqcxx3sBXrJ228DcASTBoCWyhcz3fdTc9tZTi6GDivqUVMT162u7avDn4Ei3dH",
  "key26": "2mRndw2dpEddDDgVSa2adC8MAvStyN2drUYi3gZTLrsEmrwwWHfqRznxrsQz5gFLziSmuC6UttWo4roLnMGfB4uf",
  "key27": "3ASPgV4MhLB6ctoSeeuPQmhW38M3XLtVeArLFZeLkufLEA8ngXGwjT3b3uC3YaUjuJJQt1bCkE4ghaXC22TSDXiW",
  "key28": "2opTfYkT2mnnzS9nyanoW2txFWEbQX3gs4t7VfTuTJTJt729HYXfAe2U1HKVTr8oaphkDWgSUpTurJdkobCLYUvh",
  "key29": "5RDDPG1VUnKyXzM6vHy2JMcTg5w1jUtN5CHWoLjR7FnweU3SDVmVViqcNT8b1GDT3ua15KVAQftvP6vsJUV2MZ5"
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
