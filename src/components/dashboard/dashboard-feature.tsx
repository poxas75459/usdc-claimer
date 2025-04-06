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
    "L1C6PPnP21153aVgBwLbc9Bv1ASn9dTbc6dfvZxroQfb1tfdoKs2JTMTRb1Hh73Zde4wFYaZPwhhyDgCZugU7ZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D4VxwfCPg8SVa6jy9t4gS7ZyAjwQXjfh6KmYRqAR339KejRfuTzfnxP3d4A2mZq9DkwQRf1ubWXyQatToXdP5mz",
  "key1": "4yoUY6JBpTWUzRLS73AaC9YaNkANVAWpf92PaJpmnaZ149e3TCUZGYiPbyn3D5uTmMcbgZqnEz4SY23a9nVaL1xM",
  "key2": "48i6jYEbW6Mh87JGwDSQj95SDA7P3Ft1WSQdXqaJyhWRLqw5wmYVyQfHdYL4xDTG3tU8YsxAcPE925WqHeW4E1BK",
  "key3": "zUhxWJZJ7AV6wyWjCfxm9XDYVaEvmMYhtH184Md7TqRTgexkMibFSN6nCm5d6c9u7SHamWZrWHrVB6Ff4fV8DrG",
  "key4": "as2KGw3y7m3jms2C9Z2VFpaKmB63UAjEDCu8wGaQVe6gDcvtu1qEac924cCkw9zbkbECbn1whWSsU2f3rTSkfYK",
  "key5": "4T4w5ngV5vMMH5zXZdbPfhrT8aWUEz37B2qLDy1WnC3ASyqGYJ7jMjoTJ6siWWG2qo5BfknhRJmdznZDGhuzVSf6",
  "key6": "3qH5dTDVvkPHdgRvsv6v4LjNLHjgCDpuKQa3eJijfTBTzGDtVELPzXi2rAA7DajrWUNPwXmjtBX1hUTPF8F87Pib",
  "key7": "3BrozM5zgbdFJXmYUJfwfqjZjqfy776qbExR6KvPUcvwAdi2VfGgcVJPrbfoSmqn2DgRrMh9bjTpL7t1M2XAUpaf",
  "key8": "349cDyMFTQ4yU2QTdbpCSNSMNERCLyPqB4LjUYG3XC9i6wUWLZgJcrkoLY5GvMh1Yu5DSrekPJpMeb7YDaDghPkE",
  "key9": "4k3AiAbXRbjPba9yYNcvp9Um7rr6iC3wJdpPXK7tPPFkk9JstXizvAvP9EaYX46JfxNzpixTsmAm2hM3yKmHjZv1",
  "key10": "2MdMGiQQjFvATKYxKnXVG3rMDPZmW3xAHoE257SiSpiRdJXJqAJSN1SyFHy5QV4JpKwjeUirHFZdSMcytwNj5gix",
  "key11": "2j1d2osMbg19pmGfhAEYUyeuqY6JvPJuzz7pTcRE2WvMzvq8VqHGx3zbEYs99kdMYmHBnZZZR1qMBsibZcMchthP",
  "key12": "2ip3dp8rNzAvKqMDkP1Wii7yWqeCRaUFGZ2DEEErYmUrAfVW2q4moPZ69VUi4R7reLoRXhsv5E5yv4CvTM2CkaeU",
  "key13": "rCaboRiGU1Xfg1Caa4nhFXo3HuHL46jbCQ2DdN6Y3CfFkmaAFXXHPDykqKPA3DCGgPTGCFnR6hSKWNLuyn4EUZv",
  "key14": "3znwf1c3NdZZDjf5epbCzPT7AJcKTws9jVyg9eswaLBWAM4MVSLNys9SrqrFVYXmaeNpqmGeZyfY7UsgTESFdhLB",
  "key15": "3RCU1YUNnVAB9VUDE61TPNeGypAqRVmUiY6r7e57g7z3ZFKRaP1BvBJZEQFUCmfAQRmr54X1wYDauxbkVVHMJgz7",
  "key16": "167PMWrJX2zCgu7E36W79U38ueZqRTUTsMDz1Ub5LjQaZf1ixP6YnrNGrFP6S9VkaX1bMUUDaCVRkAhzX2T1KPV",
  "key17": "3GD9aiLZC85Atg1Y5BATyWUbgdaSFiWm2wpS64daEcntkZTzjZmrbrrLdaaPfGxZLFYR7G8h7MEvs2hPCGr4susE",
  "key18": "2EHinrUFYSAEza4VZ1RNcaHR8QaCzNNFrEsGXbJJpjiNNWFt6Uy76L2bTBBbJxD7cXGQGYnytTwwaKqnD6yozaP8",
  "key19": "4WJFXAd2tffvvKUCMue32bKDdGR1P5WJThkryAH7vfkTbHJnUDzCCVuLDZHiQxq5D1dHimKMX9v2URgskYpbmWy8",
  "key20": "5BWteU8y8TUWLthpHycAtcz5pMdUtTWi5aDPDeRtzgkTiM1cUqyDtwS2LdS3oZGqscvxEBj1EmKZGRjwusu5b3aL",
  "key21": "2FToThdrFkbSQceJ4zArPVgf32MHUdjwH3b6hdfWkcHjbUwf38o2SJmwjthQ6pkoEHS6Qbdq8PU23FGUF3bUrW4e",
  "key22": "2qbE7pUwkjYxvpNFM97LU8Wfpq2Lu4gNGL9uRaQ5cVTHcqjCEhLX6n5ZUacyXm22eyNtwvbJ2WT1Q8orjLp8PvbL",
  "key23": "5TDQY1LtVSv5o9ZXm4fL6C86KLv8YSkKCTwroHJAmyef3hW46vbW1wm4QBmf8jNjozgA6Q65cGRb37kcM6dJ978f",
  "key24": "4GWBoBmyMWZELojid56UoFvWhAmBd22o5jssBWhQsHSMNXRbmBEF9Hs6EFTJFroLWSmvo2Za3pZLwSTRkzaA13Qv",
  "key25": "4tGVSnDMjAqwEh1q53hDe5DUH8HCyXyF9TVUczPt9NQqrWmE9A2XymFTotzdodBxPWC7M94PDggNx5WoS5CqkgiF",
  "key26": "55wYBWKoozuaRWu27p5BQL38LpvTE36exe2frLSvhgFzgpwxPYW6y4c5ofPzC5De9s5aySU3SpWYNAwL4RKjmoBe",
  "key27": "2uPpsAPB11r91iK8jtDpszu8WoA5geDu57aKXPtoofoUahkkRVBcCWNA5ubc1CgacNrPEsWkqPP2s8M8UgGU74U6",
  "key28": "d9yg2bedKijStHzm7eRdhihdrabBB5EgUk38uk41fRTdReeePBBk4bGBkjF6yLWTP8xhZetqxBh5CEy2dbNUn2s"
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
