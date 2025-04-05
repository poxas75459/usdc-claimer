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
    "3daKUB1niqAcKvLTwk4tP5Mzo4bXrMAcmbS3SvEoZfmk4crCZBt8YmfJNB9CNhfrzbuAekSyY4UNSfcBjSKepMpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XVt3pMNbUHTHWriiJKXv5CdXTLrow2XyE3C3DGikyxswg52GhgZSrud8v49zknvJRxgcqbLo7bkEAaWR7Xa3Bq1",
  "key1": "5kReHh1TsS4nD7CRh57koS8GpBHjvjsGuq9JfAEa47J2TTyi6U9UCuyvjmzvTyXgEEaB5gE79Zrar45y5ix54xbD",
  "key2": "D4RUnmyQxvVqP6bfkUa91et9xHhGcZT1PyvnxL61GULGwEzr4K7MBT5hy5ggHNs3BzSnwrNNpSnqsvBRaCFmRqi",
  "key3": "2kuCWMUcGU9QQGHqnzyQom9A64aZwCoyLy8tUuH63sksYBMn5pSqhj2895PwzatFNRSRdR3eLYBG1cP7gExrWVoL",
  "key4": "3o8AsKamyBhcqJQUyCrjUL7G6qNidTcnPioUaaNkxUAg4pY2raRRR1sSU5vFHsy7KUN88u4yc6APpiobfvZjfx4P",
  "key5": "ViQBiWYtexo6adJaHo2kmMTR5vzdLopRi6adEWzbf1witSeC5FpetB6Nc4Xzn9wFWAG7hmHuYUuw8ZKkuJJQzCE",
  "key6": "3Ri5yiRVj3RyrAECWZfsjgMpn94SNbivJTuAf6r3uzid7jiKWQjBjKtiD349W4BUHvUXZ4M2tfv3fwhyV7iKyrB7",
  "key7": "4Ubfo3UrXeQe6EnR5i7zqSyq7nBkbW743pcdz75gbnmPXAiiUKa5gXDzbmAPgjS16ehd5gtSxgq5S8uR7wjEveFg",
  "key8": "3cmPxXvVWgEoMoGpDPbEkdjC8SqUqvtkuUpPCAwdkzFPVWn9izim12f8W5oznMUEYyBEfib5QkRVfCrDqaRvrUeE",
  "key9": "2MVscWN4DXJ2bQ5k1bs3nS3Uw6RgHUxtc82kjfVrkHKx9cB3x7BtS1PMjHirryGG4F1wk6M7Tu55H8t5Vbe1DXQF",
  "key10": "2W9f1ddAm4wnszH41KeWHD6iKvaUS4zhgR6pBVX64F7ui5pGAPm2sMDo8nxRPLBVxj4xVPhoPs534a4sokpARPjq",
  "key11": "4Rv8QnUCxLYftWvuaMBq4isLzVRSeQR3zdkWR3aknBYRWzFh9zAgCGj9aWY32bFUHfF9xn9zUFpezQhn6sYNiVxk",
  "key12": "58thweypAe2AHx72tU5S4QvFAzGuy9vAPXFa2Dssn9kwWYvgmVQySf2nb22gLbJNfNverEbJfPEV94xYj4Q8guu",
  "key13": "FygD1N99sEYZLaH62V9j2rdRT6dawF8cuuTiYPuvZ6Wjim2HEJhUScPY1dCznZHzXUtZYrpmzpRSccEVXRzuJ4g",
  "key14": "2QmFfzUSekkWGf23eJFmXNT3ejbARv9JhyGJRiScmkPByVtgrNrxyoXrmo4atvY3uhkfTCfrQd5yLcQVHvE2CYdE",
  "key15": "YKs13waQPqBnY7nDnbB4CzE5CnVkuwbXQ5vEDHDhZANh7RTWJERBkZqtSaRPV6m2BS7WqyyzUFC7d29cnduJpnj",
  "key16": "4Wx92A8fmiU4bZeznGoTqusaMT9o1i6bptPWoDpxgTeHKFEMjCbjDKQSVKHhYaunwvMybdzpXEnhHjCS5vS2bech",
  "key17": "284Cp5NGPBUvir1RLmSgWTb2HoiKf1p6WTGWfUkZ4vozaAUcocCLKUsqeMxvQ6orJe5Z9bxGXWqfwrFo7isAk7W7",
  "key18": "4CBYC6z8XbC7V9AFoECMpGX75RhUuWMEpySVSx5Mvpr1T2416b62stQTHepw5UyV6R7Cpmq5rRGXRdJciP3JU4XQ",
  "key19": "2C9uYDyDUP69v7o4VP3QWsaEsF48ZKE4ZtN9u3kEP6ajY1u4ssfyPXU8ZjHKJ2jfFH5zsBVH4WNjFFfVFahYW4j6",
  "key20": "3sFtu9pxp9BoDcqvugecDGPvfRGBxV46nhtYMG2ENuHT1TXDXnojvko5DTok68ooodZgUAmxz9tnKPYEUcBfG6Eh",
  "key21": "3cuzrq1BFeJcaVYVH6TsrSXhh7Bhgdmkaiq3MPdJs5wpQ3YK347J2aULJeGE5jtq4fbz4UAXRUnUi17Jfn99JPrh",
  "key22": "2nSBE9YiRqXPTYN2QHzPXeMhnymUFCmBvQTaoZFGDuYxKZ6183GvPGAw5m1szY8yB2qE9A6557unRaY2Cq3C9Dmh",
  "key23": "5zCUnpQapE7LiznqtWdArpgrX9qh94DURYJT98QPBS1qkzb4rM6bB4TEqyaBbgr3WYiLziw4oi5PRshRnB2iZVko",
  "key24": "58n87jSi4DgBNemJLVBP9LT3maiYnhFKLPPwa6uCm22xf3hxN5Wkdtx7J816aW3pHzg8SSq4Z9Hn9EgkTzFYBSh5",
  "key25": "5jBSpWRxrEevErn1Liqi94pTwfKfFE1DoxdYwK9vQFgtVd9a3H768de8T5fDFydZjw2Qv8m9PoYkswnGdd1tAkKX",
  "key26": "3mw35aN3hHQwosp9vDAqh3zvPDJZnC9hJEu9MKUpkg4hRthaCzHPKpQHJXD3ExkHMH3JRMtyZquotyeePSZzFtrn",
  "key27": "2RwK21dxRuHwLLAkzNuL1DER3qzxRU1FLkAss1UprpYuuWTcP3R3StgBehrNDYBSZS4FURJZTBMBMmN3AgpNvGXz",
  "key28": "4aoFw8MKDisUdSsxnfzgL4GNBA8RUs7sdcLjrwxDtSCke9T8XRWpnFSAtKN1Sh6EJgiJ5cf1GzNwUS6bMj1FP1Js",
  "key29": "5ahpBBK6kFDar8zHU1Xm5FzYj7U1rSG8pYAZ1Wt3qtPpfAf5wyJtk5YbGuuJM1jvJXFTJ8fN67S4as7KKzNHCLXd",
  "key30": "37cjhVnh2eqzgGrCdo5YeeGmr3TRJAKLau1gqPJ788gdLCjwJxTSBtqNkpy39D5h8D1GVU27Sg2S1hh4b9Sna85b",
  "key31": "LxqjXFQL58GJJtyc2oieV1XwMzir6marbGTkPStwxJczeBYmTL5VHWxzttEQNeox7Fo1SF4iKyQHzYnAKF8fYHj"
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
