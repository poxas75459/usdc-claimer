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
    "5KSUXG541dxSvckVBbUGRHKJ4gpwuBxAHMFwwcieBEsciBBjmRtnRDsTqXwZf8zys3kZmg4JBw4epNWN8qJzPLrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pH2KVXdAW4jGi9DWbeqxJ6r2Wngirz2VETQmBqzYD5ePwHCXqCxHUYsQPJhA9gm4AURMS4eG1r8a3kkgkYQtrTE",
  "key1": "dgN1DPTjn34MqtaCWeiJ5b1CrqKscGnMkGLNRoxbtxpCbYrsjAuwM1Gguj5dhctQ3S2RfPkzgHGoXgihBNKSbEa",
  "key2": "vYjQqYMEAmkHYR9vLRbuD5qU6MyGiaDPTy6Ecokr64uTDiF9jR1C4ujiDuhgmD9YSuKHxzXd8SvWS5GDfnZNkYY",
  "key3": "3PJ1XwxdJHMETrzfrj7x7upGZJtqVHNATxCh5sALCJfUHPRzwnyBScJ9wFtteA8gsBJAtBqM8q5MBiwcWwpswT1n",
  "key4": "3Md88LTWDygPEEdwEPA8XcJhdhXhvXYfFvjEYUuJpvecUpHGaBBg3rKYhKDrcJk1JzMyva1AMPqREEsNTfiVnRYW",
  "key5": "2nNPHC3UHJow247NJnE7dbdpGyjcVTjWqZVyLYn6YMjoMH5VfYwGTvwAiRtR1ur2DeF189UNC5gCfepLYqVNzVBZ",
  "key6": "3TkPzNE6JWVezNstEA5wLp98UsFpNkKUXwsuVgmoW7J4eCV8fbSh2a33Kp3crW3NvkeDbMdkfHe294B7PXFc4deW",
  "key7": "5tKLXjep1N5vZWMu9oafoXmu4Rn6N6YrHxMRHuAKZSzDAX64Bhku7iV3YYrvDfk9Sp5HmZ3D7tCbXynRubAjDavS",
  "key8": "4845h4G9GZGPHYDGW9wLybsGgWrfyRfQ98aGGtqzYVDtHtXV4uPgD9RG7U2ERdFyhk9a4wQspdS7WFWuSGPuaasv",
  "key9": "593aX37393xk7n5cDa7chQ1VxzfzEYg2FJxrneA6Mr2hDhszfAAoDdY24cNNH1uS7BHSVcibWYpUsTDDFRUgGoZ3",
  "key10": "4oTjEfNwCcxgGACreDEJS5ZTF3FT2AEQxVYJzUkLBA8iCpXueTz2rEMGhM9ou3K9PEaQxvpHLfUoqbZhhb6at9g4",
  "key11": "EwPzj98yE7ka69VqkFJ5ScDqtLcT5ktmkc6bexSgAU4t8shXuEwEWEK4Gyj8jRWi6fum2bD7eM7E567dtFmCimC",
  "key12": "DdJZRxZZQJvWVhrzVQVTZ5z3CGNfsE7K6G61VFE2ozYbmQhzbAh185mwiWwyCTTK4GnUKF2aXVrYyPiEgpVfGHq",
  "key13": "21YcMBwdvvRUq9GfYMiH3LS7ZjDkzYrwk683XsXcjmURfeajwZPLnu311bLuRKtKwJeJfJh3adyxyTZJkRee73hT",
  "key14": "42MTqpMXENJndzoRcDofreMn76AusFsUrgQezo7MLcvFkaz7xSWsSnu57WUxKuFtbNadTTRA7dVhbHdH9C1P7EaB",
  "key15": "ugM4htntCLZkypGJniSi1xMy5KiF7zvmr1vaP1RSJiWftvNos845RbwLJC8SZ3eikfh3xJPs3eKf4PiKmWEk19y",
  "key16": "cqWu6kTnkoBaR8WVBBATF81XQthkB8gzKkmLckPpQYu4GQHniuPWan3wa1LjxfB37uG88p9N2dH2seZXj7E7VZr",
  "key17": "3uNy4Dx5nZ8cb766nEErPCsJTy4iqbfMUapDcBvSquYofKru8gjn3HHYaKWZ4A5XTthnctT25jC7uFdDNgGFs2uD",
  "key18": "2UprCWrYoEubLGP3XaQEZUHegcHtP5NsRoKvSZB71wPFL4AErQU9ocAZAFSFmrTsGVmdVudMmM31M52v7yDY4jyJ",
  "key19": "5NWfXQQpbc2urqDbmWZp8pFmYtYT21ADXPkVrs6GRAm3uUkqFTEkM2jzq44LXvZcgzp6xXANwmjAb6q8KKS9kzQd",
  "key20": "32D5aaacpgTw6xVQk1dc5EaH73d5FAsDJCEL9yXHgD7SGLWUYiF7E85gzSp9U2vEpbt283PssPsGqadoK126GejX",
  "key21": "4k2X1888RXm6d25ae9UMbumFBtomRaxFUZHYLVQzFUyeCGpGHVuAmRArmtcQEbP2uk3xL5sZnVgbxQo2WZ9DVHFC",
  "key22": "WKaG1w7kyimoLN43DUVUYEiaeQuxQFDFgPYFwhueybcXHWDBJXc9mGd18bXDYuH5PfdfSDF1m9mL75Z5xcYy2De",
  "key23": "4WfbDrnfHqz9oi4y2kxZnoWsoLs37B17djwtjdYVVfmxkEu21UDYpAyeDWzdwSW1Y5cBfMRqcB3ksToo9wE6wYAJ",
  "key24": "2KWK3eFJza7K7U7vcjxGzFmj91W8L7VQXXErb5sLSxP2WmQfUcDCBwx6RLdJ1aXw4uQmreY2mDHYw5Kq4sZxS29t",
  "key25": "nJCTQuaXY21FVFuqd5VB7ubyr8TdasNGpitCBCet9yetCvf5hweQA27sh3KR1RLcp47cSRXwJoq4YUWMbo1x4Eo",
  "key26": "4FPpHgTuEBrb8YQUAwEtY8PVm7qo5k4BYy5j9UARPPooL18a5Qstg1tA8ayDxwSyijtAEFNCwpr4Rkv8yRzudcdu",
  "key27": "4dcisHHrvpg5rc5jRZcH1bwquXQRKWMYci1G4cmGfQcJYgvLfKHP2iJjdGWURFk7zasy4MSXUDRYDrCgnP7qzJmd",
  "key28": "2yaKekvVzconWU37NjVGcUXTADXcbsQAwgXXCUHKAEVAvNRjayDyHk91wocXKdoTJTHDZYbh8aFoxn57LxJoHiDY",
  "key29": "5nCkJ3oz3hWkHW9YWH2rDKGRqjf6adsF8gksoqMBSscnyBMxD6p9NirWeSw1DyRaxH2aatRUYy6PtxMRPynpzHz",
  "key30": "2zzQBaaUrn6JmE1hhhkpCw5DNJsvhE1ouqg9BDbquPNe7TDSq8zfBhob5iQwQLg2CnYWgSQHP91uTJequhgpfofP",
  "key31": "39PNeRsCoTgy6a9DUXsCFXJSEQAhhf6ERdyzSGWr19kjeqZASXtdAu7SN8Fajsc1QzgKsCVVjoaC7kc12SbkUNUk",
  "key32": "2uGaqHS1utsAA5Qo9WpoEQ1UJEX3QenBTzpcC7xZRW417DzDgvTS4fx8tDSU4a9eNc4c27iwAa9TetuUiKbKW2KU",
  "key33": "2U5K4dTKmzLQFt94NyXfxjeUHRCWht4js2ioSTGo5o2aUrVwxH2hBChUgRrn2kjiP42WC3L9uV4W6Yeh2Ddf6jkY",
  "key34": "3ZWLmFrQhBzGoKzcYfzKjD78PmujKt35ocEoMWn3CAtdLj1p9Hdt8xSr9AQ55BJ5hw6mrgvfKzJXygZFjeeLgDUi",
  "key35": "4jtf7r9REGQT4AHFoSWs1eCWA4Amg9TPkmhxmxEU3nVR3TQH7PWqonn5noAToRXzXCe3iXrEVHGqpjigZ4uWKDEq",
  "key36": "5nAcdqF91f4aXHvjdpJDr8UduyQe17nyFh5gcfbVXhzSobYtvactzJwQFduinueasSwB7W5NZuEEi1WHqdhK3iJQ",
  "key37": "5PaxNeGZnNyhXvTMtE8zFXeUcs8vECCKEML1o5ezZAJHB7v1QVwNQUJBn6kNRu7WxjFXUgj6yeJsg8uKBhtqtBz",
  "key38": "4gJmc9fiCdDexyKqHkBq7fsXwh63F4hFE92JiKjvk2SGjYcjgy9tX3RbuqSTpZ4nc8eP1fXxHUhq1hTKHMJcbDiH"
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
