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
    "4yKawW7FB5p9GyVMZu2x7pKp2hf6umFz1Yfs4d44hijvddK4CxTPwYQ96gsdErkqYpLE9eTSYmddRFEd95tnordd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22soRo25KmPaRXmi3J1oPbQfbkEW6Hq8wrKdBPfGjXfGu1XgUXM7HPyoAnDhx7ckKA4xCPtNwZ5RonqmhX82XpcB",
  "key1": "4yRXuA1ZuxRByYBTcdZroxNZCXLoEofLYYQc7gtnHXKnK79YLLkEZHU8upHgt3cE9TH5TGDeA8ttSCvbSahs47no",
  "key2": "2JPfzDwZHc2TaWwjP1NuaPaGXrT5FfViikCBmidhJdwQB6wBdg4pnFqDmYWDKWTJVuWD7ZY7AFeecwbG5g6bVnKk",
  "key3": "4TyBfe5orTMdqFMRDb3weyKG1iGw15KhAbnAT3QKzGmHQgUizqGbXVDwi6caVoEHidJMuXJBBwQRA6MoheJNrZR7",
  "key4": "3vEbXpYTWsScAUg8H1TfXKmFhoYfEwgbfkiESbhB3yaQU9jUFFYF56CAPKDXCa6ciB7ZnzUMFEyYKNwj9LNR32K2",
  "key5": "vv7VKZYVwfr3EpiXueUx9q6WC5JFW5f9JKVkfX65yUviA8NEPdr1ZK2o1B1ZEkw4rZZHQQite4rUaa6mn6oipU9",
  "key6": "4V2hABsZ7DZzYdBFGPLvwtByna86bwS9FkMK1yKZRvz7gUE45VWCkis7358jX92xyyaZjBorSnhK1z6mHW4sftVR",
  "key7": "3skTpKSL9sFzjwuizU46v2eXXr1P19JZedgoj1VsQA1eWT5NKJdjyspvVyRAFrbDn2uS75qwr2NjURk7pXkoVSfu",
  "key8": "5ZQ9eWeAnPCm6VHffj3zb9TkDPY26gTcZ1edtgeKrgR6wPm3Toee5cuXrnUekzLBhqvZpQUBB9zdRWQAEAnUBKmB",
  "key9": "2X82HaW8wrnCjbqMZhUYYSkHJwBz9wH7vaZFeZ162dX8Ukg8xWAXCKUp3t8uM8azSXYRnAS8AzUAWD8DiYL1wPbg",
  "key10": "3T7TcG1gggeYaStYuUT54MFKtKQTsj6Fi71AkYMPtKGJzy4T4JNrHubFhS8ywPQAxfG2ANfJuK1YjGL9CZioY6gP",
  "key11": "3kaCskbuC5Xr2ShEQR2x6JDiSuXSQUsLyzAE5xFJEBLDH7CF2vT7Umu1CsKto5oXErktwL9VDAm7SsFK5sUzLpAG",
  "key12": "3xCcQu6AfbhvHsvThgmzPgpNeYrjAPjrx7cteKstTi8QCS9qwJ6s76JpPstMatz4gSAjv9Ua6ZGxFLqHCTjE6gqs",
  "key13": "gaQ4hhX6peSYrBDGV5YAi5MHUv7oBuMUgzeC1Rec7thWBZxeiGaCRChc2WMTTeC8QFsWfsgxxZnStXFofNgtvo6",
  "key14": "3RKWL6sctvg6xksBve7xXEvkBbn6cw2RBZxhiCYwe598Q5gMWwjXqYcWYMJ3dDNjHwj7DGv1Ye2C1UNGMZeitK6X",
  "key15": "5BmYyBGE4wrDT95Yu2JiyeqaLCU8GNy8CeZZ81KYbypL5c4yRadLoY1KXaxGmkMr1JuTM6Xzc1xmFjADAN3PfBzC",
  "key16": "haKsUAuwWRzHuhx55NzBTtU5Y6UrN7nHLLa2N4eJCKK2NADQsfL5cLHMzadbxBAqYaMhySjo2yB7GedShqvv634",
  "key17": "53R6t24dkT6L5yqo6TqgjPMpKXmAS261ToTbnVq7oNYgu97rcC7FTWMaNmE4HLQYvEevomZm9P2mwbfGJWX9ABkK",
  "key18": "pNBodBunKxcNFWNQShCPN7U3ZRM7AnMVWXdKAiSehP2SXc3C1mf4oqVj2hwb9BybWk1ZrGULiyiy4TGoA9rodZz",
  "key19": "4CaT1yqvWuPZmp9v74sAJ3cywiox4hMSzNjQgdPCsLZkAzGckgofRxJ744TZ2Ytm4BVCKTy147mRTkBxySM53xsG",
  "key20": "4bYMGWrvpAQcqDHrRXuFhHZmZJf7hG3JwuG1x47VUneGdzZxiMmR92vJx4zyZA2uf63665aeUFEgaHTLqUvHn7kK",
  "key21": "5zpTABYS8SHBGsCDREkHd2quPhrssF4U5AXyBGr3DRGyAXJ5fJkhCGr4samjCA2d2n5oPSou17jHEHoL99kHcYTb",
  "key22": "217FfYPUV8QED7DUqbdaUMKVCZREjHM5FVtpKVgQVJFV2Q6aRAkZrynostC1Y7EzTfAS6imun62B1vyp5DxRxDSU",
  "key23": "4ksHocw1N5oXDo8dLUmtbg5cN2NiFRGKWBra5eV2ZEX9FnFbJ73WDAD7jj5Ue92gffYehA4aGkJjc2TTf93Y2k5L",
  "key24": "2MVNh1cLDFNkvHiKis2RmohKGzMVso3JhS2sZGFRQvrGUemfcPTy5yL2C3AvntAegwS7VpoaNd3GGdVniBexhtJQ",
  "key25": "4TMx4zw8UfaoK57PPw1FH9MakGMVsV7Y2dXeLMQVFcWrrWi8B1Mhy4pBRT611bbJbAheuYUnumnJuE2qUvKmnKQC",
  "key26": "24zxJaZaaYqo7khtjfdMDLWP5Y9afQG8HHXzTKW4MGfXihotGfEshUBEapEefNPFRw51W9Nvbro1QupdpvnsqAnx"
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
