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
    "5fmrKacvh9sCgYQ8RR2adswaxxqse3AKNmp64qZLXDfZsibgMD1zXJnU4S2xvexE4YZQWNXCL9H1B1CnPvcYueyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cMiiVQkk5yfqY3NcR9zFKBzWRxd3AYFiabT4WsDYTJrSxMUaY31isJzCqoa7M8UhzMGjW1rbKZ32g1UxTQW6vbb",
  "key1": "2DTo7R9dvgF7J3gnoSoXAztMzT2HgNeaZt986Utes7278eo6gXXGRroLrbjog9u3ncwaw97SYmyP6rdjJG41rs6C",
  "key2": "QRPEB7jW6Co4S7PbcDPhv3g4KmACDTQFc2CaEwhe5oe8EMVU4svpFgANBWunzXdPGrVAaVzKCEmpikdVAbsR9Kf",
  "key3": "4btZfi1JCzTW1vvfGbMNnGDuQDvYo52JSf2iipFGstN1ovR4egqVzGUGHaHejnnEZ8H6w76iVn8rJPuMeCEorDCJ",
  "key4": "8L2y89j9XNDgdqdH3RgjLqAiHQU4GBA58zsgwrcqqmjczvd9Db3QkNLnTfUEX7YCnJ6XNkCCV2Q7i2ckoAHLanU",
  "key5": "shqrmi4AUNYrHQZrNcfcrPSeyJ2r5D2p918MR8AyuWmxLhuGNea8mZG4eezNpbD4nVpx7yqBE1Go3NULHdho6Fn",
  "key6": "35YRgx7szSfxHidyK2Fvb1xNqr5zRuXMT4BoTWnZDN8KvJf1vD2EQC3oRSZT8RgZG3rLLYgXDcsepwuoaZhGWsrQ",
  "key7": "5WqzdZ3TvyxRw4dEL1SD31fUBzp8yog7KGBa4chjsJTGifmrwC7sD99XNBMjzTVgwALtHJAH5ymQrschcrFAHKuP",
  "key8": "2phcBdagnuxnUwsJzkBNh5ahPZGCzPTiz3EW89Jtigm7cukEk6cSKvySDAbybQvoB6PP5ujsieXXXUUVt8CEG37g",
  "key9": "3DDueVrV8ehTpWpi4fx28nHYxncLX9mJrp4NKQvwtgTYEaByK5n2L3NYW2xFXNSFRkQP8GTExaBq7nucLE7iv8L9",
  "key10": "2T2sgnURcrF9dTgBqErmd4CuN5s6qLQFtKXpRr7NLrPyVaWkHKRmpUW5ATienTo5DFfBqJT2PzjJYDFhAK6cAvg4",
  "key11": "2NDVqVAoBddLn63Zzx7vzKm7zWq9qQU9ZPa7fKwP86dQRDheb8fynapaF6Cq7qZcgCN4evK9uDVZFbjsoyZWPdB8",
  "key12": "TbdxwCcC1STDbYBvGoBmFHvit48W3Ji7fSuCUD6jUvnm2zqQTR9UyPKQVxog7n1SG6veeUXSGb4SwvpJXt8v1p7",
  "key13": "3Rgxd5VwNui7kwQVYT8iYAmGub2Nku3MQJzWomARNgrZRtcPmSMpPy8ne6dqraMZ9rthxDWa8UrQfNTmQxKye5qN",
  "key14": "5GPYfcFL7SoGfDghndAmAmRGfh4NSuEQQrzxQgLRoCuEkPKe9jPHjhdFwyYWjGbkjGLSjzV3MhHFApJUtbpa8Rog",
  "key15": "5hyZgGoUEHcUNBBfbryiVYib29kKfLFm38A56EbssE8frYCARcBHRfbiVNG3R9htcGNnTfhowrMmgVzZM6W8HzSu",
  "key16": "68HSFCSRWK4KeKEcL1pMNbsK4bZuv6M3BjY9AAxZG2YXs5QAYy9H6GhM7TAnHxmAw9xhFdfmvscSqfMW5nvqC47",
  "key17": "2eSYCkGD89gYsmcttz9PQgmZjDGioQEMpDUcGXVAPH9UPU1Ak2qaHFTXXaL7Ss5YMpCUpZVYU4NEX445DMvjsfP1",
  "key18": "YaaexitfVUkimifrG4uhzY8LZnKkXNMiShgfmosTkZ9J2V1bqNDceBWGdnaeA8ifuy2JuEGGNMeX78HJf7rqEPv",
  "key19": "2am1wHCYDdPvkLvsPXd81nN22GTBxtRG94uVPC96zcHtuojyZEKRGYZuxB9kwR5MJWQ2oUkEGXzuwUZH7zm2Dmpi",
  "key20": "3ycdFcwzdkaDzMDDiEnrv2sjxd1pBv8vD1RLq5YPS9wSgYF9N1EnxQjwthXhmRrd2NZ8spKFVNVvw5NgRjmX7HWs",
  "key21": "3TjWopCyQQzrAtML1c4tY1PU9L2tAL5VFCp9ZvtvZFdVQyT66W1kYqs8rtn5cBgwsKX1FU8CkF3NB4cLVgjtdLW1",
  "key22": "3AEvUaqG1hasr1d8Wa6GWbA6Bs5NgMSRgeJUk8rWsdjuZ7xmELgNGuUSEx3SXnxMK7axQsXv3mM8TykoVzBkbAsT",
  "key23": "2Z28g9gmCPP5btzqJDG9un52K5N1gaaYJ34dnutx72kaSx1uQALGfauRahpwiWgQjMbSPgfwekGS3UKfLb4hnLAq",
  "key24": "4PXD4Ju9k1vPAeoeoLBaffibXpuZQWta2pkgF4pMJE4agxAcNMsFV2Zu1ARFNRe7x128sGrrKzCqXGULA5FHsJR6",
  "key25": "5bp3aiE5Z6E8JzPbyt7Q7VyGnnjBQQ5M6eSJs2eUyC8BY9mPrcKw7tNf9TXCu9MaB4xn6R8MrioN7CUpyyJV6vmn",
  "key26": "4by5D5JVo8ARM8q32SyneP2mbUthZkXJo7DA1T2cG3HSg53ShEDNj5ZEsiGem2JUJiiscMqBFD4H6opbdJ8BrDUL"
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
