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
    "3tPp3icLVFxvNrCx4AR8vS74YcgHAGg183CrfnVcM1Zqwy8bwGNUxt6gYF5tdCHYRszSTuX7D95d51XJGwwggmyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TGfNbzN1BZrd5iVkKyviLtRbgG2HddBb2ePxaV1HLsuSEMcYBe6DjE6yDJeGQwNLygeNLAbgBsB1DejbFPAkoeB",
  "key1": "3NTeLxGM5mwJgQ7CjNrptcmd9hMboPB5rYKvzCJkP7Jo9usVzChZQaJievLi3et5DPA9X67wBN5QjiJ4TXJVJH1e",
  "key2": "58rSg41tX5wY5T69JsgzXBf19objHgr8Kcqs7JhGtPPuiADdf8PmihuyeJFmoUtaRFHW1My29boVNVkTojgZjN6Z",
  "key3": "YAsNc3BcaP7vMWhjUHEmvyMDw2KCpGJ9MKj7ZzfPP2PVao4ttYpXoUjK7ddCVSFAtkNhbCWj9dAWKjLvGjByCsm",
  "key4": "3SPqbZjqhMsHCoDCiJokvUQF3KSbtYMsFgGVXB4u4ECW1jD59gEidm5S6nWSsUVvQ1ckFEi1kT4Af1bKwDX3TLN4",
  "key5": "4JJ6s1qGqKJe1Lo9uZsVZbRGzStmsFtizHwADqZYgYfdaUjbAJ8TFGi42aHhut8fDpe27NKTT8AXcejJrjTbVV6D",
  "key6": "5Lgsbr43GWe8zeNocuTZ2K1zuVzJ9G4o3kSADscHCN1HCMUZiQWAxbBPrmSqCTD5jad9PNgYzAyfjdiWQ8WWFDjY",
  "key7": "3RWEUfqgcHUi2fwS3W9ngqz6du5pasviSgkNxf9XguxPSze23v9DjbM6Rb4oiqz13ciKyXgHBqp9RX9krcqnUcUY",
  "key8": "5Je6U9daWkzmqHqjChLtzjabbHm5eYrKYQQqSoV6K6JgcF9ekkPYpQi71K1FbcAsBYpBrv1xSKmy4rVZfKEQw2Xh",
  "key9": "rSa2osodEMTVSTpmbvZ6awr6tVKBbS3v6GnG2Mye1nEXM29XRWVamTLU7vY5yvqMkSdQXtbq4176D8Q8PBpNWUc",
  "key10": "27oTrYir2TsSJUnsrR7UPJnrfXfz6P6jg1rktfnKvRnKsaYgS5RTBz4AwqQJCVS5MdDvtjThJ1GFoJYmmeQAxsot",
  "key11": "iWNQBMTmk68rSbgmbwm4cJc3u5jBs4ioGFVYN3qSBimTNGgkpuuZwXLZv1kFwAoUnjyCo8mFAojfxSjjT192Qe9",
  "key12": "4zt5wQd6YxpCE31phvv9jhbsRyzNnSNymGkN5umHRcKqU6b68MYP3Cc3RqsH8KGYMm94MnyCwbkpCzBHLkhUbpGE",
  "key13": "5NhxmUnf3hKbWD1bhK9KwrpU9QZGBzYQJrY6TibuKjELVsBqp4AttsinTL2uicaHAWQiSzF4cUxAma5v13W84ujx",
  "key14": "5x9AUdudtaWwcYC2qJFo5iANWVvjLK6w9iaCY7MRRr97Q1J893DCof4QdAX3NbL7xsKp1DsNzCpc5pXKYNfXrNQt",
  "key15": "4s5HCffeHN5SqjDHz39sNV9KmhaStHfvojvrJiQL6yuN8d6aw7kd2KKFQnpJiPvLB5Rzs3EMh4LKgtvUAHUVyaRW",
  "key16": "2S7B7LWrMmqBFBdwwUfs6igLq1HRCwrKp96yjqEpZFNB8XhBvYNwjaRTr37iKAMsHSpL87LyAubync3SXignbpNc",
  "key17": "3sZ9wPG4qBY6oCdqtup5qYUnoSqSubVgBqv3rVMt2rQVHHzzqyQ23eo4hoRGGAAVwDipWFPn55o2W86LksRpgeLw",
  "key18": "VHnAVgo679Grpm5y9Bbbv8cdyNtebdiSNStC43xw3YxfQ2jw844BPA9njNU5f5TNrBprvMwcXfTpdV9LQdydKDu",
  "key19": "2cmErxBoMQKrMQPgTY5Qi2xreNEJX2VX4qvM55EsNWBLGoeawdXFkzQ4esZRBKtV6WHfuixdUoEv8XeDSKsyKb2D",
  "key20": "3qiEkSYWerxVZMVS3hd1Uz9gtNwHEpdMupxFw8V8CiJauXgA4Ys7ugWJMaTt8wUYizWTeGhsYEPytS1GJseYhs4h",
  "key21": "5tqBvD1zjmdcAqjhNtK3cYMr76nC1MoqirG4EeqB14d7BUdU6VDNyyMBenfeRmf6WdQh82NauZ2EZfoWpqVCbCSp",
  "key22": "4KCapJiKPNDX7jgM2uBdAe7893BzGtkWpNADgVj7iSj3WMjtP2PwPNb22dWSqfGSuHZrcG6U5YwxNeFrmSMv5UYx",
  "key23": "4aeAtKuu6Q7YzFDMgFDcTG72eQqoDWstSN2GnompXwrJkwMKoRt7r7nowEtXQHWcA65dUkhuLXRkm8u7aKexvMUf",
  "key24": "aMVSk9sN4eVx49RA7cKohDno1gKfFKMoAGPrhjvZK22iKWLRu2hZErwYXkC8eMiLn9GJvfbsvi2a9BFyPjLVrbu",
  "key25": "4X3dwEXfhsXBopBtSfPkcTSSUFUtNwqFRWXGjdMABbjFrHcZjJNHRiTxghWVC2emHjJb5r4kwHd1PwjLcMWubywJ"
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
