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
    "2QyCNb8vrvFARBHCxEz6hsuPZ7zezS5oKTpWiX7p6ZXxEtTbMfbVxVGxBkt3X5A2wZUqzj81bEsfxft3AhngNG3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N9KiubRScfHWj8JBvmQsGGMpTPNHPmeydCvEFfrqrfaQT39bLVYgeVkqKHUBxucwhaUXiMgJuFh5cB5oDRXnNhY",
  "key1": "kRaPknL3Zbp8uZsBqKKqwkZzwbqvq8cnK8x8qmXkLs6PcLBLEBwZ6fiACGMZ7aQwjsr9y7GrCrSJyW9ZzStweRt",
  "key2": "5JTadh8F5RzKP5gnqnigk9ueWk3KvJBZhqVWTe62SpQN9mVqj8BbxEBwJSqitDW4D4oSVWD5sTYJZqEjpssCa9LM",
  "key3": "28tYk8Hs7LL6eTXGwDJcCXwFXfGRErJgGDKbeDxVNxzMAJ95AtKWnYc46wLhP9CgD1HbsEf71a2U4GDXP11AENX1",
  "key4": "5QuzUPYjGVnSdvMMeb4UVVsftceMcwwHoBSSC7ZEVZ9SjmD5n5kvoPguybxc3Hm7F3dKX983ws1Zj9GnbgqD9nvh",
  "key5": "5kL4inbciR1gh2j7aysWwUfdPyyuLg5LD1JfBoy71Vd4iA65aWkzRqF82Bgwg1vTs9Lp56oWXzJAqHphzNAaskYi",
  "key6": "YfHDAKWZqwHU3kjqbW9RM5X5ApPDBXBYwTcmamjX65WRTYtVhJa1pqcttGDjS6tMYW9dNzgyAEvx9LoVBr6pygU",
  "key7": "driPUChPjyM6AW3vM2R7Fkm2VPTzhxUx7VSjgsJtisRWNJnHbeGvveKF4BhoFW3D52kx9AsuBFsXEzgUrSb2SmT",
  "key8": "44hWdjR4SwYKXSaPAhsTJAyVRzVAcGi4qsEzeQh2kS9YArKEDhrdAmj8w4c5RuZ3F2H3CNUCb89N2BcHJ3D5xWjh",
  "key9": "mR3qQL8xBti8NWpg8Q9om1xXhVfmbYEb9sGTCahq1Spr6xHDF1v2cRWzoQmMCgAqHS7RdjkyCwCiL6UknoH5jqG",
  "key10": "3QW3ZLG7KFXbEcV694mMu7ALwMe8BbvuhkX4rubXa9qpMSehQWTGKeoxAi1fPjepCfm8Zo2hNRDmmVyrK7CjHqYP",
  "key11": "44DcXs6EwmXEEpRcqyePahw6BtVFfhkYhzYitGjLwpvqeWfJcUSX1g8RBngguDqCUTSrzUyu6dDbqnuN1TXoK3DZ",
  "key12": "YAJkX23cgmWePRTfjCFwgGcMyhuQ2cvymdgGZrh5n2mFLZce1LZbu2fj7r3eGtFdebCq7M14eV94BLQrTjavaGk",
  "key13": "hTRguyYApknhGQPL8fwn9ocH2LhkQdezFc2KP2zvW2Sccbu69XFkZQDv7XSsvTtm3XSrieUNPDu4GQCWV2rnh7N",
  "key14": "4zjunDyTYoQWh6n839Hwaqdb7efKrTQ6KhunEpSZR6t6dkBWRTahT9rzAuMjd5WACLJ2q7HL8T1QJpCN8xnciNUM",
  "key15": "5J7MVAdr2rZviDBXXYKEH7AjLjbpoiqMrh9okg1qvueM5v6mnJrRQaMUWYicy5rpkZYMY5fRoDePJ7fSVkt9TPEd",
  "key16": "4QqU4zR9bo8rxGweXCEf4pRyEyLpULyhAam2FtoVGDmqmEitWdpe7ksvm6KkPnqnqYgv3esFnqWuhDh2MgNReCds",
  "key17": "4AsLi4XfcM59zcRPRdCTcLXR8b8cMruey7VLjyLT3P1qWxKpT5TsqyH1ByCcr7XQtdftR5RrfaTugRHkwqr4uRXB",
  "key18": "2wwWUGG6RrvWxCY4GJzcJEPyegmiXDDYtZsBR6BPx7cgjQs9Q7cq8dLYENYKPkj2vcwHdSHcybDFfzGGyzdkzTR1",
  "key19": "nGCJmuRAeziXUja2BiqPponfrK4n1k1imTNsmjgqxJt5ZVxorG9VPBqJGvPQMdArMXXzE9i7P7prWtuokUgG8TS",
  "key20": "4PH8vRLUGtgdCDQY4ULa8swQuf4Lhx8of4EXD76MDrsv99QLKC9qshgEcQGBtM6YRE1cNSXC1LWFc96gwweuj85P",
  "key21": "XfCmS9wvkAZkm1RSGHpjneBd7fgVTWb6mGKfrEgGPCyu5s6eTfHVKH7FUKjegoeC7wo53bJSPjHqmdME7aG4cz8",
  "key22": "2UUVkgfbqxUCqRSTXhesJSf2r68TQfEsGpoeNgRAsw3PfwGq1d6NWQsTMoHSbBGfFyFkwqFtYEfrHGCCop8NvHwW",
  "key23": "kwgv9T6U8LBS918MegEQ2JWDbSraXmb2eeFSpjoM1cEbXpxao12UyHH5tmTw8c9Js2SAWh4MtKvuM87mu9tD3Jj",
  "key24": "24fcUm9JJQohsWB96VmeRNC1Ao9WHZhSv2CyQSuZF8YmJzZvbMRu4CFr6z2CF3HVax7HKtCZSPTzRfcwS6trafvq",
  "key25": "Wy82kL6rpUeShmiRHxDXCRYVSWDuHvD7pfy31atMsm6B16tsd1F5zhE3L8fGACuWYZ1V8jqwZ82TmpwtgeByUou",
  "key26": "nS9LKcogeapfqXBAp4oq1MGVLPP2mPCr5kCoYC36GYKoUdfwBqbLnwjJTXs3xvXvytZ1gm6pAxcWnWAaxs7R52t",
  "key27": "46fu9NjWHnkkyptQJ6EQDp7GRirA4oUnY1nK33x4QdYUSxRmBycTgNHsLy7J5wmyZmpFTNA5qXr4BdGU9evkSe74",
  "key28": "3eM8eFNKWtNBmyyRP2jM7aw5RBLNMti5VjZS2sBUcNetWAnHD3mXFyrvJ4WN977gswJETbyv9MqpBPCnmJpafNkt",
  "key29": "49aWo9uSPU7mbNv1TfLieVbXCLxGTYWTTequ6PezS96ZMtmvcqM9WjGVdVSCFzPAqqdtTwN5UdoK7boJRMaXQsBP",
  "key30": "5KZ4FzcxBsfSSewU6EFPVq64EZWxPRCfqQ6R8ctNLRdjrWCLwtSDcxJ68RfLEYATh1ENFktjD6FyaGdp71TNSYft",
  "key31": "5HQvcihf7QqYHPfrh6SUCW6ZYBFsMuGqzJ5BnLNk9Q7wKZRdgZag6AdXxb4YETFc76imXuycekuqWCny7GvbBjnL",
  "key32": "26awqShMewYbf6jdvmLs4irMU2xPvmhnhmTd7JvyievLCdhdbBdPSmWUcK3QAd9WhYQihcfzhuCb4fMbV3Rou3pw",
  "key33": "4qq8wqeVzNcXRa8MedRUJKphvicHGeKFHFhquseDG1PM1DjF9yGhCY1RAzVGZqYMiTDwfiuFL9hSMR3pkVXyDMdm",
  "key34": "2b34f8Q8c7fyTcKwjeb8khqxkv4XALDf3Xz6mPWkLNvSAzNXmLfj3jBcRWJoyG9G1kvjCHsbvgPRAAcjyeE4ZMxV",
  "key35": "h1jQXJnfHEKtmAhy7B41Vr4bZUiFRvd4uDibtHYW3H6Rv4nQevv28j6BNYp8Tkxjs51AhkiFZcZeRxQavsPPvro",
  "key36": "59sQAFdfasruACM7zCWoZdzgByqixTsUMbec7W1J6PdQtRwBarbP6qZqLgEwwcdUMN6URvav8bJbbqft62tSqKMn"
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
