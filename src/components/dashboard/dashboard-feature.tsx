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
    "5kEiEexDkVwQQ2DqAcf81QapWw3NrhE3t6R3kk3BsZPiZpRaQrQpcHNkNteLR4oUTgNA4HtyGP9AiYJfPhNtWAvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D9g8FgAiusFWArGgNKCUuCktsuY9gSvUkjtDYXKzy5wGTqdW14yYGsmJPewQAPwvNkiw58pGDLueSo7HUWgQwKx",
  "key1": "25wpPjzjoTYpDJAcuonbitBb9Vdu8Pbi6BMk2Jmm6Wn17iwVwoBsUoRNWWpaQ3rUGJygmuZGS48mch9aQgC4B9WS",
  "key2": "2SQU6Wo8oYJJm4qTLmnPSHWXDQAionbbiHkK1FnhLVmXMbUgYdEBiiM7PdVbM8ichvCTSFcMAD36681xg3KpMPQo",
  "key3": "4FT3rdj4XYUPNT5jtCkSPmEswTCfidsAymV44wmnRM5RnZdUHcPjFyrhqMnUT1SDiUUjZEspzfsBeQPtJWoooTSR",
  "key4": "4rvYkWuEN9VFEhLxt7dcNyfsGSJynwwxspCKGBtg12nST5nGknfKQ8WpTFZjjy5oR5gYcds7ym9Bv6ZjpVqsfP4B",
  "key5": "33MApv5hbCrtu9ASpLsmYCrjcYt7azVEuWNgkr1mfdYfrqfEfWDVEXzVatd1GWeLr7iMpBXwepjETooPvXoWRZYo",
  "key6": "3WawmAmGUR5ZGti7mAVE73sYobAshb3La9S7bwxxkJEt3kpKxNSjZyRHfRCuVPupVi4yGsbw4xctEw82m6yAxoaN",
  "key7": "587M5UdFMDbp9rZNWgQoh8fCubHc4BJdEvK32vwRn4yqL8m85UU4wCM1iUsuic88uvgTsmf2X4BFhJBUXDfDS8A4",
  "key8": "5LRwP8FYiixE3XU8BxjZn1b734Unw6UzSg3Dy3YPWAf88JcsZHPJ1xB81nKspndGog1SFZe8UGoWJvzRb9o882Y7",
  "key9": "51Y8548reqC4LRkpPSTMtXjW3CGnLyag7vnz8rz7uETFnPhoKb2uYKNW9PW9vLAq8BaZ6mUzBiJQeNgRtJ4qx8fZ",
  "key10": "2kSniPRkvq6vwbr67EPjtcHUJay6qcHSaCAk965HCh5Kq53ZUXvbb9AWuwBGkrAintUX2PrpVpDKq273Qcbj1v52",
  "key11": "2ukFf7GY82Dn1DQzc7se9jffVkfPHnxF2QTsSwsWJqviPsaBNPW9vDhDaP5KQ2ivUU1XjuzMhBoPzLhTaXUNMxeS",
  "key12": "4BWFyfcfB3rwexH92SWUFmp7R7oPsX73YovYCCEi7ot8zWp9SEoAQAS33J4npPiyfE1m6fV7dqnimPwgXFhfAxj2",
  "key13": "2Qs3gustZSMJQ1YKTCBwPe5GSoKct5hNRQ5YcZZuw8dbxnohrcYa2HqsFTNFL2SCErBqXuqL2naAK6SiUSFNSSCg",
  "key14": "3fjdxWRGfVWdbg7byYh2iS839S7a2e7fTPkqtnK3FFG4EmPX7cpS3TUwS9uo1RBMzs4y6eY7DMaLsd8jqGyeZSS7",
  "key15": "2EhYmXBcivShNWVwvjTf18m4tXUnFbvm7j7AJPJeH8iL2PACgBw5H9xoqEEskLQvdjY5VyHJPrdFM2mNRvDPujy7",
  "key16": "5NZfnrrfQeAASNcLZ7jaeDWh8Xvq7BxHs6rQtfy9Jg4b7XyGhTw4V3oXH8VNZR3xwH28hiBhqYQjYYSNrdkkUWdu",
  "key17": "3mSwXJx8KHsXuU27W5QaJvp7edJxfeqcekYYMRhQv8czoPCZ8N9MRKjH6RWe3QwjWDYr355cFAxUmwyPWwX7RKbR",
  "key18": "3JzN3VvLpuZbcKomPG1cS9UTdTiLW1uviHZmZePnR6Hen4VnrTNnEqu7sF9cAQpcLpY8gjFAmJDkPQ45M9J9ayK7",
  "key19": "2diyTKVShGHMmf2PRikdTxTSBBPvy76i3951ADRsbeR6tARbWRUtyTsq96SgYt37afN5Y3Jfj9Er3J1BDQPvD4sN",
  "key20": "5dG6skzHJ1DKtf88ZMUxwmrPGNjsg2GNinN9UGgERYJ3rinBSe3hSZA2VpF4E5aSH1pDu6YvZkGf7fcEfzqppmnZ",
  "key21": "SeNLtzzMqLPJSdiBQVcFqnc23tMx5bZV1mt77Mszd5TpmNqppSdhK9F1ZnqjngcusakGx31J852p5pJmjGJMMUc",
  "key22": "5kUi61QBSPuiJPvXjr3HDnax3SgLB3FgrBTyu2KG2oYQ3uADiTsGxX17Xqx8bvzTUnCJpGjrALfH17VM1QLHiaBd",
  "key23": "4V3ksc2F9yxSC3b7oVBMcq7fP9tjdZdBPcfLZFC9PwtWRUR2FwbBedqurRFKkCW5HR8g1KPWuw6MthmbcgdJ3qkK",
  "key24": "4yZh7ueiESoJATsu7eVEEMo5uBLJWXdKXfGeEDKwTzqPhk5Cmp1Msts5sWKe94ioEXXHXAZNJxq2fLLiaMspaSSi"
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
