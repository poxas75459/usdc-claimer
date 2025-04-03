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
    "3GXKaRjgZtgwJEtVQWXWub3NwpYS3N7T8jsUdpzfzuH7a7LE2vUj7Jy3a1DVnLZ8nELy6ZMovXXtPugCkPxuuipW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nWu1W7RjUp96quqm2GnJdTUtux1WwwGPTAFHCn8JwKtbGTAECGhWMjW4bfAt3VSTJscGgDWApHBMnLzjNWmYhLz",
  "key1": "SFCoPYXG4Qi4dEP1sSKuCaJYzfQ47GurkXUVm8h1f1wpWNzJqvmmKWLZUgJU8ARfXFrRJNqdn1V1uDswdquJW3f",
  "key2": "4FvQu1X56uMfNMXNo1PMDeY6SkB7D7EprnY56BMHF7CzKTbhVQUEwVKG3kYZ1PeDikCDqqtNhnYjXw8Gmcd6SZLd",
  "key3": "5T3XF9sEYkGye2vspY5wJFRnGN6FeA4dZHZRrd5voeuZQWMV7PwSWsk642ZrsSRRRghw7nAaB3dNqviN9KpvFHCv",
  "key4": "5qczXXynGLPk4ripUzeDzzZRX14xvXHQdqDpfbRaNQDPFixhdyevMC6Svp7hSgiPk5ircN6iy1AcnqSnDon6f7se",
  "key5": "2a7T6CW62WqiUYoYPBM3X3vcBFSw2tADNTYpLLXz9ztZE3aa29zFt265ftLwjhMQKzYuf23huKjAFse7jQrZwz1a",
  "key6": "4QLQWeASWW6ktHALR7inttLoMY676CnJJgniAdyZBDN8Me6v9gNLztdmWf4ZBoacSS32H9TXCZiGAFVvXGbjqsL7",
  "key7": "3R5Mn2GmaQ1JnXXP31sbmVAKQqPNozWzyxxvNqb4E1PnLaWZskspPe5hvHDH46msfJRh3qeNGayGKf9tL8ogGGU2",
  "key8": "2iGBF1kQqtSaxh6oiidZFVS1hhrBaUKyJmUfWcRzaXkG3PC8bWNkXNb6Vn7FbJ2CwpSht33Ft3ih6f74cFamwXyq",
  "key9": "3QySqXUNBna9nvfEwfHoxiMCu5Ptq6SQUBvF4AHRp3M6PLeYjz1t3aJpiMTNfNH81pSzxm7DDvqfs5xz311nVMGu",
  "key10": "uhAozhnrjUoNv8BSEqy42VGvT4vt69GzpW98GWom4PeiY3aAkgeUxCXBTxFiU7t39gun2gLrSwiuR6P7WgVqy1n",
  "key11": "4xYQw6keqzasutUQCudV67U1zPb6xMHfocwVe6fDB7TqSEHvKzULNi1EjtQJVJqcdgCt775M7GezpauT2ZWJJaVT",
  "key12": "2RYVRkeDiJ71b42FZXi6bsyeMGS8sLNe4AjFoJ32XCnb2tntE8K8nSL58KxtNFQA94QSMSB7L7MJphyqqeqbML1V",
  "key13": "EnNSSXqgSEP55irT9YXxWQa2YKp39yhCwux3rXXfQ3kuEJpofgDJGwh9ZrwbUYTsUk8meXw4JAmWgDYcMdYm31p",
  "key14": "SQ8wjJekDZDCrdRYMAR99qVr2NnzyWiY5NSr8LP7Bdv11p85jrHQ99L91u34MCK2YUfyVBLRbXuSMkTno1Jt5Yw",
  "key15": "5A6Pb5K9UBgAJbTzdGcvwxYPTGxHvKpt88t5UAnzxDHhDE2BYmqy89icyG2fwgxvGnjycTNSAMiAKKXjahFsTyfQ",
  "key16": "4X2ZG73txp5LkJQ6U3eaTHdapEgWQvPJnEjxEp3pYmqUUqsfdWFKpp4f3k3nWKQ6LmWbocUDXDWf7AQ5AVRwGAQX",
  "key17": "5yJqHpjLDsWcizeWvLyf6Qqg7ztHBhSQsAgLDHNQ4dgewz13WN9CH7qk8CmWRFoTyYeUGbifcMjXhj1YJEssK7oK",
  "key18": "3oAwXEoiMur96DimYqoxkKnipYACEQS82LMMzHBkK8tb22SQSeHWTLv48ppqS61E698y3fVRgopMSqrwKo2z8yMv",
  "key19": "36xwhCFoL2TgQemkEMqfNzomyBPVGGzcrLKMuYq3xR21rSEgnV2d36rfwsYA4YQgNJ5tiGtdCFx1R67f3vqE8tGP",
  "key20": "3cQYGtH94YLvZvraLebtk7YvJ5D2LFYbsWpDGeTZgnRQeNk4RM7CA6RyMoBzdJsXdRq6Wxie3Pz6H9Z1LH7pz4Us",
  "key21": "2MFioRSQxZuiUn13RjAdpysiUdE7p5i7XQssG8jGLzMmvo9cKU346LNCGb4cg1zjwvbbSfDgdRUPutVZheFt4g2",
  "key22": "JHgDEDTDDDzuPS4BGzTaHhnBKtmeWA1jXrvYEfhvDPzq1adtaQ98GYdiSgvD63bfHm8XzPZLRVFWQ5jFmsApwHq",
  "key23": "3UMMDz9qG4sJEgNxn5fizkFaQfT9rzhBff4Nn9RwmKv7cLCV4Y7mS5QrYnsiems9d19GsfzQ1ckesvXLpmzLkYvc",
  "key24": "2vbVaKa2onp5ohaoTVexq1JhaKZRk5sabUSXcJnTRp6aCiVmruVEr9AQh3uzosuhsSgqEE3NSBvoPStBb4CmPYfJ",
  "key25": "39orF8kmbUHxQ6DJwDpvPfzhMgdQTzzYmtSnKzydL2cdPBhnRm6qxvUWAEnZW1mnQJdifXvBRSECekSf4PNuckvo",
  "key26": "4S1mNub4NcSZoHhNrNxykHnWGVTNBc6nm1rGSmWREd62qu7E8PtdSJ3LX5dAEPWvG7iNHeTf7C8zSZaRYNfvnuwh",
  "key27": "nzTeofSz3ss9CAKF4i1rwXojTDYsDmsWtytHz8s12ktqHgrFKCSeAx7pq4469tLdkvxNMPjUCpdGJbjRL9nY9MB"
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
