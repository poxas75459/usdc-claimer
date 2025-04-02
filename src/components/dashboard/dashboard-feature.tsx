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
    "mqzf5TEjpBZhWQkD8LkLR3XobXo6VZY9ZpAxLJGi7ASqx2Eyi67qGnuCna5Ajxjfd2tSiYKtzSR9AV7rRW8uCen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ruWbWUEDcDJsbTmBRHFyYbMZNmnhzxeJYAYitrxCaAHRHKZcoDXh6wDFmytt8AVcS4TUhoYPgW3KAMpWCSs88QD",
  "key1": "3ka89mL4sL7GujXvevK7h5P5X1ZgYsUM2JEiTd5uaYL65BA85y18rKxRgEaQijDA3bkqSsBP7WmdPK7puMoRunC1",
  "key2": "2dnHwZc4bx8EUseP6A37WnsQCR7Yr2sCaqFrg6yCxHugeJSTKxPu8pHMdzzakaJWsk9oZz6owubBGK4h3g85QTfW",
  "key3": "2aFKuVfM9kgvAUiyXztKQ4wDWP2TrAzEH4QTVkLT2yLYnCexBmUFjcM2cXSc9tr8ZVhoBuZXfoWouRBrMjNqEWZs",
  "key4": "34wxigbWWtfT64yRDnMrnzU2PZLHgcZyKZQUPCqfs6gJpiRmHkV9pVuXuNKs5jbEC9eUJthCoU2nRg81fTtf685Y",
  "key5": "56BMMwX6JkTSPEUzERcKN3AnMPAhgkKczst6kj9GYHsWEQmc7V3ERADGhfbTrV24xRUQttMrhpDVrurg88VrdCi3",
  "key6": "2nyjdMDmBTwed75WaMU7mLFBnXTserfVGi4rnHnMFLH6phRrKa75ciTEpUuVpftkLEqvew7dXNT1jUhxvhJKnpPW",
  "key7": "4EeZWeJbkMMR9ftRA9zaFnwDfhxNpndcbo2tj2i8gsE3UDrz5dwHq8pAob8duQ8N6WeuRmFqJzqCJHFpbzrm19pL",
  "key8": "2Dv5NFawat9pdt4SEGRWc7fNUEPc1RdPaDSTpsHhXAR2CLPM8MfTUdcebzzUSyB3ACwsarPmRHFaUdV22yoxjUxy",
  "key9": "2Az6PpvSkeDdJbq1MxDNor2TJBKj5KhHzmutQZexThXVgRcYaBcUGbxKuxWp3aF9APJnGiHwoUiL2ZVSK19Utvhp",
  "key10": "4hpZuE8wKhPgUtL54bDyJZfjeP3VR4UZc4Hz71RUrqg8N6NsTUx9HTbF6Y3o9cRRXK35i5KnkZpk8aqhrehp1YF1",
  "key11": "3QhYRhP9TYXQo98ocVPFV77BwnSR8hmcUxi62H1x1knoEMJpjfUrMb9Dy1xCWPKAhVbcx4kbknGH8fb15qH4pZc1",
  "key12": "35htLPdiPAzkMpNj4CcZ4m6DPxcTn6hMYAgqTkDwzTn16r6wzKsek6rntaNUfE2pwRcuZYgGeGEJDRBWAMDm2XMQ",
  "key13": "55aaU1hEpMpq2XKUyqnMCMygKjvW1fPntSvQvqkqvANQzRmopyeupxWG93hFXsRnTHKbfsTEnMJGnKf35ndKf5Jc",
  "key14": "2jQBSFBmW3B7FpX6HyXAMoc8XVPuxAw24Qs3VbDBQcX5ermqyfjHWtJoKhPx6VvNwpEmEZaexYiGng113MsYhqe9",
  "key15": "rMu2cJ8c13oG9gEY1VKbSKZ54He6D5dhcn7dAMBzohdabnSN1prXLuxqzn2K32pHHbziipcwK7EGwFLoVxppF6B",
  "key16": "4Ba3zk1swxBCLr9VmPWSyRN5FETsGutNRW7s4i239tj3Zp4uxQFB4zSoGVqZs2W68HVESFp5AbP71pFLKJRbXCLM",
  "key17": "3Hz1SMJhLN6XFqyfxHLXW1xqiWynG1wQe2yMNk5G8d4CPDZJF6z69BENfLyndnWGb7H6tpVM1t1UbS66SkuiU9UB",
  "key18": "3GTys6zhq5d51hK56fT3ktW7D7SbFsV4AuwE4VdGJ3iG1tTP92gPKYTxiZ4bXFMZJWmZjzHrz1r7tKGGojHfM96Q",
  "key19": "4JNWYLjdciaEU6YtZ9VPX1tJ13Px91ELqXUaH41NCdHy2nfcnd3b7npx6zM7TqJ6R4eCeMiAofR138zEZrquvD7a",
  "key20": "4p5y4mPgjDcfgivkrU9zc8mbMr1AAaDYUuJM5qPbPspwpBMDbP9uTkr6uHXJVuny2m19i6gN5exsgtw1dPEPdTnb",
  "key21": "5GLMqMmYCxHqH6WRVCjgHSChAJBBMysDWvc2xdgijpVSN4S1r6nfkqpcsyKyppdGkCCGaZ9S5ucTJbTkpNPcR4ij",
  "key22": "66qUEpnjoajonMv3kKmLKhDk5wTiDCBLSUbWnYmC19TftLRzWT5NGeDvnqngxUaZDV5uaCDp6A5RWtkn4br122WZ",
  "key23": "3Y2D9stoDuNkN99oZKk5CDZAsHLR7W9iU4btsEc5tRJfzp8vZsV4rcGWz1JjwPJzKxx6CfmjmFGKwNaPQJRwNoau",
  "key24": "5qoCEXahiLaP8pgGcdXSp6YSJoTdfocyYkvaXwnEGiS9KiMb4YhsHJxrb7mBM95VmnBDJjcmMKUCkxqhQYLTqjko"
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
