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
    "5wE4Ch5bPUQ61QuDcLVxDZA4ojD9h5AwGc6qzgE8qV3UrwaUpLc2kPB8R3PAt6b7yeiUvP3QrD69JzaqZAXjGDab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YA1egBE86ZDCT9BSeTXbBuUXd5GNwvtZozucpJKWU62N2bEMstpCQFkyJJvYrNsAgHdGNXRzEBLEr5upxYuMUju",
  "key1": "2SwCGhraP5YstcMfPRAZgMGKh9eQpcrikjbJb5R4xCdUqppazBcjmaB6VBqwF9TCugppADCt5sJdJGrqHpKQvAkj",
  "key2": "iY5UcdX2bDsVzZhCmdCsr61XEGLcstxVWG71K4A4ZdJFY6fZGmVzBRjxGArocXKGX2v6sABhm9Yc4JiNduuKuW2",
  "key3": "3TFYwuj5mQKMoaaeW8e3727F9dtQd4PARNzczMPqs67FFeztz6yUvfwTAdvawvDHBkVuxGTGvvoPgiF7kA7XQWhY",
  "key4": "ixRVzoyZ1rS5rEmXD7UBr5ZpP3TYpk9oozouQAX7Uv9Gwgbsfb8LGjZwCcjXnDYa6cscm2jdwiK1XKLk3Vp8Pk8",
  "key5": "mXyoEL26hw3oZwcmsRKQ1cMWJFSt8GAMtTjANu1MCbVZDF9BTfkvCAKVGHwCa5wr2sjFei1SLooYhS4a4Zg7xqv",
  "key6": "3uiZ68ghC8T8pyQwHMSVHcSNPMGLwmuRVg1SammkHzvWd6pfNXxfmUyiQLenu5hCNJLMLxnbWZxfQgrSk2auu5fK",
  "key7": "2xriu9nVjmJWbBhsLLnChVzCrkCEdMXN4EA1QPgJBSMH3eNhgiJ8wW6cSZW6YiKPj5YEtMqZFbigTpEppLZVxGHF",
  "key8": "2Wnw5YPDPVqAPg2gY8LfKYhcXt79kTmk3UBcb3vbbXjqnc7JywfXrhW7ebmj2bsFL2rACjG5C1mYEBR6tdnPp4s4",
  "key9": "2DX34oNTVVKKWa9BGEMpJBoSRFCgj6eV6UPqmEy3cCRNzw2c3esGB3ioWWi2Xm4BJKLCdD9Hkq6kdXv39anfnWSe",
  "key10": "4z9LZdQKHnkQ3Wxynh7YXCymEQkhGt7RJxAaKLebAetLP29R9XPVtR5JLHiiGx1xdembRv2dbwh4QFDHE9jsoufB",
  "key11": "5YFJksePqtK5e2EcmPBMnFVDbPQDypnnMYEuUTWeTaGssW8aNPpshxgS1uqy9djep2YqogyK1RgvhcQKHuRWH1We",
  "key12": "fgyC99imC3wCkP35UEaW2GkkEywiZ6tiWPqEaA3PEgW1h5mWyvYkMYAdHbKGwLnPg7ZTV855q7sL2iuZ3JYgRCC",
  "key13": "gUp1Jx4SMcoq8zDCA8m34ztqbjhUJqkiQNN1VcrDyg64X5jYTLDEm778Z7PGzbRaDi9XHZWYJHc8Ponbs2w3ojZ",
  "key14": "pTmCUxWW8TAbxbtACpsVxeWtY3zMCzMjw4YfuDQHNsPBfAxq1DUXc8vqAmDGUsEyjur51m4D3SQp2zMFPUmrNne",
  "key15": "2dxafN5QdVgeXQytV8fNrSNpA7WE3wiE16BDAmSEc7Dq6uJbnyWj3haLa3eWMdUeJ2fpewjK3hYch2ZZrecct1es",
  "key16": "2dmBehG1sAX5TXGdEZmLhk47ZHXPRNKsMfPrNiumQr8t3XbcLfdSi9M9PWF6K5rxZkgGGKCP4VsJoi1KWRtMkVNR",
  "key17": "5kbL7ch6Yurte79sXQJzUkcHm5s7DiK5ygetuKP5RvYd1VgQeRHZSZK82JnhwAuTqCDif7kmxheBX7LBNYgSBeAB",
  "key18": "3GaxxNrKwA86gDpT1G47NXtZ17E8ncYwchjc8YAqgJ2oxsQECvQ5pUZmr2S6AmZdJ8eZWQaWpiMjNFHN9pUb2dBE",
  "key19": "32h34qrer4FDD3iFEXyzbdJhJrQPKaDtG6nYEsnZXGwWCo3Mx3hnCrJL15yLcniThswcajrGWBgmzQojvzbKAhsh",
  "key20": "4huU1TzwmCafApZHht2NMwqxyi6Fj45SZNqKUiYN8cPaWvFEBvhiwWHEhdBy7LGXF1Zhjk68kSXA5tZGFkToH1Db",
  "key21": "4s5LGz1KZPdgrb6jo2dvaYyF9hkeq2sTziiR4V3fqrbS7tKaEqUXJi7AMt2LpsAkBsUXnKg4STxXGoUwjCTUmQM8",
  "key22": "4CZgTuMF81jPeRLyuWKXKZAyZZk27tg7XkdxWnTuHsRnjTQQkEJ5FvWisxkMPLxoNJNiPnJUCseqMXQYaPQSUVes",
  "key23": "9dgV2d6ADhUVeXj6BJVkY1JGKYh2xup3EdaZaCrovhocHUP1LC1KvJHj8QsCvXCWCRKBqHTDjuDkJMy4HKe57BK",
  "key24": "3yHNDbgFWgffWPxpDewEEwxedsApH2jc3KFmgUH2eQ8HXZGvEwrwpVZLUjd8BPGewkDTC16wD8dJv397ufNtetM3",
  "key25": "31GzRg9MNVis666thVYgLLmcXp2Fdp3FRwc2vrAGyfvQrKQBvNUeqi3ZUdWzNfeGwmUj5RhRm24qgC9LcfvSA8Ga"
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
