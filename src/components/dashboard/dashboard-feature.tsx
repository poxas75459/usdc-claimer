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
    "47kb5JWhYrr4GxVPtZ5GrGvnVgvnJCM5hNcnG2jxxQXyPVXvj8Gk4XBMAkico8ozMdXXXcKbFxQ7Hghvgfozt8Yz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35N8QBLEfhXeZdB4rx7i4EURryVhKiyAbB9ZXSEpX7i7sJNXqAHUkEUkn6xqNtMsW2vorFhxFD2H2rd22ys2Aj8W",
  "key1": "3VqLsVV6BR3aauUKaWJsYeAWd5cTDMLaQmfPqQHYf4ewco4oAxTDNR2RaGHUEZHmmkwNfyMdj27zHzHJ4L8jigP8",
  "key2": "5oMCT93YdLoSpz28DQZ6Yb7naP8Kn4ufCiocHb7yqGLrPrWPFir6WfYKPQM5qKvWMhGuTGHykQzZJfHuVif8ZRhF",
  "key3": "4WQYZRnRvQt6tZBEtoNV3BFWjZb1mT7EdBJ49HX3Ufdd1YEKwYT4YoXsQPAYCMxXXS54CaPHbqj2GxGjY57samRF",
  "key4": "4H21BGT1CjCyg6UBxq3daKW1dAnrBKZrwjMikYksPpiW9vCnPewMZXhCJat4wxyVXmZFLD5YjwhFpT4NSQ3Mwje3",
  "key5": "24fzf6VgSRncSKBskS6vjhBHSV3T8WpcJL3uCwF91qjpL2gRMZao8NramNpbw1medU8pxiitx9v2evGgdknNapx9",
  "key6": "2S7M9eqaT65L8n5Rxc8KyYCJFPiYnnoQ5o3Uw4fR9mTgwfUzma9L7uxBZdcfaH6mX6RnpY3VuvUYjRP9De79bVGo",
  "key7": "mpwvQyRT6jns9hEaYr5HJ82yeUrySCgzUCqkuKkCECAbAraa8LLD9NDS7XSGz6dAXjYXqLK5NeHwtch2amHkoSm",
  "key8": "5NtQSMQ2wCEmDcCSerHvGQYQxfyo8jGa2CQzyCnBLk3fHhSUcW64hrRcHwbhf3yWHbjshb9c63paLEb5NCMUiM7J",
  "key9": "54c2TS7Bf7tZ3Tduqx1FYCApmNRcy16EqA8mEUDPVsNNzz51AoMG9kpqZUtnN1tpsuvTUxEh8MDqx7FLYu3MAWFa",
  "key10": "2Xvo3C1CTkAcvRA6HzEAbaXiULrSAjtA1TdbHJBtueFkPTW1ZyS3RyEZHAMfRus6MeC96jQio5HJ3TJp6jLu2uVd",
  "key11": "5Y8eaKtVY9B62W5hRJcRwDXwfFQ1vNJhyaUrKf4hUA7UETkSb6Ra2RMf12ohk9TD5kofsoMBCrPjqJWk5XnmYF2z",
  "key12": "4CDikbdtULtmMHeYUpeCH74jmSBt7ExjmEC4uVXwHy8XkxmtnwesdrpRSiPZ3YAuBMEDrXffASoaLvz2HWmnptTS",
  "key13": "Q1mrEstHMbNdiooBKXJRn2yc4UJmEcY3SNCbjpQzyoWi5p5Wp1gs6Wn7MnuR4PvhABbeFdJeiT1WimBT3mDhXge",
  "key14": "2dGg1vt7KudTxNeefHYmAPMpBdcR9nxrDHKHePzjt165EvvFj7vEAyjSbksPNT3ACkCZUxokUvvyqr22pXRE2gDx",
  "key15": "4oa9DA49agGochoRaM6JtTJSQcanCBXVMCK5bdCdZ1dLCNbFxcbXTuYqMf3bvrYabZ1YV6vGTENnRLH4FXyTdpEP",
  "key16": "2Ht79p5MGdWugvafMnMqoQGGrfaHqzptFAXxxQj7JgE9DAThgp1LfCs7qCSNpDvg8EFF3MFWjdezDB3nPgmS97LE",
  "key17": "NTjPQrWnh11urbXmh6QiVDQngdkwCJjKEXigSZmpsJVNTLhu4LYPZEC5j85LkT1iM3Ep2Sa4so2NNFwiDdEGAVw",
  "key18": "5g9SvMch2PusaMoSENUoWM3RXqKkhYRnhhkjrP9fv2GioLGQgSyuUmwuTUQk4n2ZALs8jhkiaYVZkm8E4nHpAtk8",
  "key19": "3uJT74gyexaUEPokwoCRWRqNsjqz8KYQgV2KAbGNSGaFyJXGgDS4B6orRuWetppL73TvtvS9Aj2STEN4qSJ7LUo3",
  "key20": "4ipFiHEBZfZCX27khc795TzMeFaQC79PgWfGhDT1KN9Fbe93NParJWbmsfSL6NjykjXSz9P5PZCAA5BGWaZnuvfL",
  "key21": "4xqXze1wf2jaemH31rJFrP1FG45262Z2cc2MniWUiMqriSw8p2qjWZmYnFWmyMRpfdckzaf8K2XRZve3n3pAKYzQ",
  "key22": "5AxaM16kEfLJgEVeXRrMhZeWugaDepEZze8GBSE4cyJiD9tZjXr672AXzZ3QVEhcJ1VB8cyZAXa2M9oaDEbahmWf",
  "key23": "4ev5kKsGPLkhVHTe3LsHaLc1eCK6qhraZvP87oAopaRDU8dUTU1yTr4NofPLY78YPnK9q6jojZjGoBUiz6fpHRpM",
  "key24": "2SUMUodoWEbL6HApk2LyWwhp7zuTTzfHvaQAhoR5vc4aaEqNzQFDMSPZW4U8C6gnfHfcNVgvLHqBV4X8kfqVY6vt"
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
