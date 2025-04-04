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
    "Mxjk2MhjEhme6fuyBs6r9oEeWr7gthnCsXQHHobETUpwzucGrdkbj7C8bKvuwmfoapTZMQUCxaZjvHKrBMJXxTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "222QGF6qFYSTmVuc4n78dJscpnH4A68GxTV9zTsKi5RRxoPmfDFbPUQrFHLUNTbfyq31CNFpbYH1x44EtAUfi4uq",
  "key1": "3u4TKyEK11Xze9GiL9h4DjfG5KvvRckZNFtTVM2thCxbLoncyXM2kWnnXVbmP7eGZxSq8BAe8PRkrtZn6qPTwY9r",
  "key2": "y86hr5oAoXjsDx5s4DYPbBuStQNxAmgAGW69tx6KkKDk3pu7wCoCiUt3JRZLCCiYXpELs5qnWGLchbvfTrti9iQ",
  "key3": "5gkBTqUbEgagyzSdG4u3GN3piGXkzqQqsBTCTs8DvBi3wA37ZB5Zsh5wZ8Scx9EfKhSBiWk4k3J4VeRKwHL1FQvU",
  "key4": "2dyGhdbVUJk3h4cbjFv7VTfMxEihUBduyYWfHxMUnWja8A3emdshZjcmbxBcS4VpAAVTP8A5Mjj3wZx6RHypMXYv",
  "key5": "4R3KsWv5BXRGzD6iEWw9ewKeMdUm8bAob2yYoWWySufQmXjbpjCZWddvrKYyAnHKAg6N8g3KLCgSuVTQjNrgLZuH",
  "key6": "2HX1DpJMZE2q8CgaxENx3xZkaoQJh2njbpVXtKR8PAa3JMkj2xYMZqWoGixfj1mZJpqGUwXEya9B4pzqdhs3kWT1",
  "key7": "w6Fxkbf9qxoSU5MvZ1RgH8MCMSba4gA4TnYa71CfXHZ13tfLMzvyr9YGzXATjuAeVBs6VSxe9qqj3CEmecEWzFU",
  "key8": "ea2Zh8bGf5yFN7MxNXAeZLcgS1CiFxVL14aEBcR9JtDXvczVUZdbaGp1fPoXf7uhUXxN29fsm3eVNZxqdXdGERF",
  "key9": "4AH5mrxkNvoMskBuCsE2qJK8CkSCaDMhinrfKYji5uy4PFij1EuRgH8RsJidvRdX2ojocHcHLkGwiDNxxmvfYCCs",
  "key10": "h3SaRTaR8tjubLCAtWncv6ku5wqNiqEfBcBogGRE9gtb5wgaMTo2wKZfuh7k7MVLqoPoV6Rnr9AT5KJUcq5QRRn",
  "key11": "45NGQSEgPUKhd5rfuqVQbzsEis2ndM2WxoasRAAbqxcaoXkMgKnhAsgaGW8QQEyS7MyWzhroTtTWPC3UAGGr631j",
  "key12": "3pW43oxxJnJs6P5gfykWSVJgcZot457hZ561y1YNWbgHC4g8gMiFfRb3X9hSehQtXPwkj8nEERGWRirCMtisPBPP",
  "key13": "5zFErpysJefUb3pAgVedotsZURyvNhNCiKKAy44v6hwog7aQh91Hx7yNXfyZKxzQNhJNFjwynAjbz3xRxSvd4Mt2",
  "key14": "3sZLa5VANPJvTCmdmHTLqhTucjJMUgz8fTFBEpPMqTPqL19vuFr1nGFJGqWBjgFXyfXGcUT22d6W6HBjZ2eBQgBa",
  "key15": "4JiT6S4jiDBuRMsTyUxjEf7EQyzV8w65CwfhFTuRHfkSUcycHejhNwA8A1hCLGRRxfTyuxUPPTmANvH1wq2makac",
  "key16": "rDEuX2ZQgsSH71rBxxd7LmdANWZ3r4nCaKzCjnaCaB7izbYCmTQFs1PgAvXXH5EYuJxDfRVZijd1e57NZfmiDBV",
  "key17": "4Xto5oVuYFrhMeZEGFMbYQWAiwR1sL6GoTbew6iUBMkVbD6MrsHXuTJ16hp9NTTMk7FCeBn2ibJaoF3PJuvGbw7N",
  "key18": "2CdXEGg8cTitx8Ga9MTjRbfx1xevtV3Dq6iek4EHUBayZUzFhFigQkQF13qh94YjuX5s2qDKzB8ojcD4Nu3EMPFp",
  "key19": "cR3w6WF9WyDPgmryfGVP1YsLQuvH4ykovGQheMawF94M9RBFzQPVWp28aCTTkNR2guGwvjrggqDwkJxacuneRsb",
  "key20": "51tQwjGq2vdPBSXa4gKE7CvvbiZaJCVL3ns3d9wVw8JQzYiJLKH5inajAY4FxG4LXj97MDEn7C9urJLU19rFZhLi",
  "key21": "2ztAGiVLRKbZLEbXhsCp9f2ZgfVCrkxWbA14jHEBvKLVTL3iCrQuvGxz75exhSdPFzcs4oRdcnd5ahdbHza4a676",
  "key22": "59jbS86t1ari3RFdTmcWhthuv7wL1VEgvjAaNQMAVxuDxFHwoMbMFBQNeFApvJSJG5MLCR6Y8y1aWy7tNFCDqSdJ",
  "key23": "qRSG6E2cLfsgCub8arK6vZh2XDs5ZUTHgK1aU3d73pDLihEgxnqDeyjvMsSuyeSit8JnMVYzBBNzzyvnszPsyVD",
  "key24": "3XpPgPtZD7jJDRQzM9PeXrrHa8rCbrnjaCGSgbiHY3PwGf9saakr3wXVR7rv16QH1A8VWQw2Zwu86gHBcL8tRYGC",
  "key25": "4SKHr5Zmz3k4mnLtGxU84FdoGemWkhrtSxLYHMvcMvfAiFVochYTWJuRvQF74n7F1vaJryWpdTd14FgSJMTWyVMc",
  "key26": "2ByXnhNX3nk5iXDrQ4kUnAJibgeqPaBKq6BNjXqSKPJFAT1VHrHp237QjSTPMo9Ah9Rz8YW8y2vrqPT1hubnCZuu",
  "key27": "uU5GkvgmfM1qUZaq9U51rQ83WYKGUgQy9NS8stsA1NXGd5FfyPc7bNchZ93GLKJUpUFLYRJ3LvcoPCPRTJEkhMW"
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
