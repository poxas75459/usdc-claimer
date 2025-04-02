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
    "4AXTLixUnCgPpaXorFBk6ZQC81tEcmEbBooghYThhuZLurXey8VdMnNqszFeYXz1jdn6C9HgRqEagqEnCPaXbZhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Get4i3SQzjHHCQjJXeZaGwZrWXt4r6ktvx6vtTfZrsUQ5MCvrG97WM6VZ4Uv925qtAanNBvMhd9i9wK3zEEiHxs",
  "key1": "2Xro8aq7CNR136Z61dpaUSWVDGdjT2VCTcaHsoHmknUvCmo4cTxCgfZhbDRscRB1AGz4k3nqFZZSQEHcgmwwiD7Z",
  "key2": "GFWjpxjFnb3K5Vo4LiDANetmPYmvaMdzveRSQ8YdXTGsaoC4ENsqEgmoKgPiHHzutPCdKTcssohrNR16SW6pMnZ",
  "key3": "3VRdvdocEd79RGUoGL6TapKhYTRzEvcN5z6wQggLxsBmZHvDZy8wWaHeRrjXwihs5nSKua6Q5JqKLSk3LcLgJQJ2",
  "key4": "AdmToW6VAnRukmeaC6Nk1VcYHNTNazAeYRaA9SdE3UooRLEqj7L1KCqBVQHvdoTF15cXS1uFWN3g11jpgiiKuff",
  "key5": "3KmJAQGaex6rEb6jELZKHPimXu2nR64DDhYXEEJp6FpnfJnjH7vVRjBkSBpHuLPcRukgnwrFKHPf3meCRYWFBZQL",
  "key6": "66h2vU6pCFq5emaL1jBxSECax4MbQW1QQJQNVQjecSduNXe5hAmp3TGagcDTjz61sBoHedMBrLqxxxEJiiLg7PTa",
  "key7": "4KakmD61grqACAvBwnPNj8w5q5Jmtqm8DifhfLEbGf86ahsePVwByoztRHXeJL4oFZvnEyBUp3L8pwykzb9vMvKT",
  "key8": "vVoGJdChHzZevKs1B4ArCnq6Bf7niMyXE9jrJHejukHk367bvM6VqQs9kWA83MZfQ5XhwHG2B5xKJZvQU8nP7EA",
  "key9": "FDLhPKjCC2oCtTwQ5bhw69rzjL19JRyG986MBrV3d6qM7e5HyFUupZbX4vmKXRbwdxRn5NUfkNRcRP4D9NDqjXu",
  "key10": "56Aq7qkw2fphWheTYkrbG7cUcwSoN4cwyQedGMVQKXWDcTY14ggb4j4uJHwRnas3H8gjxN5kxrTakquSbuTeSs4b",
  "key11": "3Auy1NwemYntJV3M1pUZzRHf6hDxJsnkXBBk3h4kNfRqY5iHKxbx51cKyXLBPsAbWZkgL1rUvBn176BBi63ZCpDw",
  "key12": "2xGhCJ18RoXP5coCe5u7n1HmeQJaaz58JUUdSXakUgjPmfhGZEQBrWbPtANPvzuhHbkKzNKLF49vwwAjiRJ68Pry",
  "key13": "3LDpWrJLW4rXRbMzuSWS11nQV2vJ6hJtxMj3s6qggXTiynwqdmfsSFq23nRmw36NVgwxRWFyET7wtjFmjWUeLsG6",
  "key14": "urBayRNBfXeQApTVXMEnjAfdWZwmcyEkhNjFyZVsnDjfc5p735GWBp5JewHHrYP2KPxnVSBWCQgmW9b2Wr7F16t",
  "key15": "GNR17VZKaoasGPkr7dgfXYLFxKWEnatfdWmCofWGS4mtXuxcaq6YUPUCc9BP5CsrfTfY3bxiKxzrBNCV2brn2FB",
  "key16": "4ZFWwtVDz1ov2Fyh6ZrEQoPfPPRWqH6a32c3odZgLvqnGJUU1PeKPWEjbkLreC7dixb5P4StGgviQ2C3Gab3DQ16",
  "key17": "2s2bnvbbaFLtfufS2s4uo5mnNJLfQhtKeCpRGvWgSafve7ERYNb4Edn8JLfzCSYseUTR7BJRXd21FEqPU8U74Uyt",
  "key18": "36ZPqfCKinm15CxuGmDHmttGMvmkFcaDpNZd4HGo7hQBYxDFWFC5jc4bjzjq8FXyKmWAFZjffNp7zj7Ngep6WtSx",
  "key19": "47zDmokLCaEdorvwGqqUUxigf34r29r4KdrCxQuxHEoEjqf4wDeEChvni16gCcuvpSaSNUGFBm8fnQuHdMGoi3kz",
  "key20": "2MKV775VXvEbwomQnxxb94dHRP6iKoVMMpN75xy6fhP9M6iJQavrNb62d3ejBB3QZynpnFV6fttyHEg5rdRnRCGf",
  "key21": "5PoDZintZPXGDvQ6HrV4jvJP1aGDjZzWyo8H432DVaud2g91KTbXm559k5sQ48idZygdm99w7ARP3xk3ZshMgUvj",
  "key22": "5T3jivxf6meY9s3ZVig1V57DQWw4zS4skLn8RDtuXHbsHm13Nd55uSAH2B7B7SNunkQvjzkjWeAfTQ8b47AvtJRp",
  "key23": "3uRozjeb1rEDaV9m8JEQq4bBR88q5KurNYTTMRRQBxW224ajKejQnsmUT1tRsZiM6zziTNNGoHKgWnoycrvJdzGm",
  "key24": "xotoCMPME8e9KH2Q4v3FnsMUif4NPkeXnQrvxi7eYgb9cpb2ngzzFegYQaz51va5taet3VZwSYKY4WKcJYy5Q7F"
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
