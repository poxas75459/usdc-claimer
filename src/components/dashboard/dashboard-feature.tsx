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
    "444rL4rufxokFCvz2EdKzJUSuHWAjFQ2E5trPqvcDBgfeTPqYscQwQnaoEx5HbTMW2t5zedGeThgNtfgVSqXvfYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j1LMiqDM31z6tq4F4Txz7i7X8XcLz16uKcbvfHRPSvJF4W3rMg5Pqbz3UeDzBJ1XxHJYdDxdZ3cyUNmQcsC6isT",
  "key1": "3Dwn7BZDMLsyM43pnEoMVDHU7CqjMkj9YPpYNo2ds2ijqRpmNCoNDe3fs3P58PmQHjkbQkMuKxHYGyo3hLASar4Z",
  "key2": "2yft9HcwYrRncRYSzsjE6Hd8sVVA1o86txTg2xKrSf5E3SrTvLjRoGQS8b2dangApJozQTsv7Fqbrw8PSN5rh7R8",
  "key3": "2ta6HhLYe6MyJMRe5FuEVwFTp8qwbz4WvGqC3JmGqiahKBioPaYBwNQyuvegBCbXG6XnkmtUiWTs6zacFPHXfy3W",
  "key4": "58whX527pPXrNjUVyN3MdeaSGvr66FJuWhb98YqHnZ8qR2zYqVjrWsiKQhngRwYPGSAXvLX14niGPQkwFqwazRz2",
  "key5": "2Uoy2tRSRSw3pL5XLVCMuToVqSAEW1fkjEB9HDnHZLvt4Z6LW1Yf4eeF82BG1QEXtQU4x4rtBfiJEgnQjM8jZ7m6",
  "key6": "3LgMiPG3RMvFNqE5k7ZrKF7c4fZEZDqN4Qa4k3DzzY1q1SmD74SgfAxxputrbMXPDM5CMZ7AAAwS96YmezU2taTR",
  "key7": "uoJK8Z57zQeznVaopG9DAPUU47WqHhnujpMvn1UJR7YAHmi1G8jB7dmAhcktrrLAXFqFGEYsL4RJH7SgiHnpyWz",
  "key8": "49knP53MCvcm42uQKpP9nkbEcKUDMvLYpw3zFt6iRQBEGtjPk9Dp9B7XD92R9ZsxqTbpaASafV3d1qPBHowYewha",
  "key9": "GYs3ab7ESZGS6kP1xneYwjGrhhTzJC8h2zyepUbjse4B2DfUkVJHVRXMM1BSUtanxjyPskPaNrwpLhd9Km9wutQ",
  "key10": "2pUW2zadp9Y9E2A93g6gZKGi38wudJ5FEkosKWJ52uo3jZjwG8keDovHxH6jEV6Wn7gtQWKaMWJQeQbwcAJS2LLs",
  "key11": "25DKMQwppDSL8fqY6FthdgMpRtiTsjpBhqrdyTQjQi5CuVozk74TwxU1BChF1YBXmUtFerjp4fzaPgAuaYcnVzw4",
  "key12": "21zPcUQzHsRSH4VajVRmXzniwGWH3fjL6cvZT6HBCCAyxstG5zGFyW5KTJGYUQ2qXsPxufAthtjuCxiq7XTRjUhG",
  "key13": "kMHkVehL7MedjGj379bZaSwgZKSR78mdqoVM3tFZjA2Jy3zzmb9XRBJVyNCZe9mVBkecG8KvbtM5UwejzT9g5UU",
  "key14": "4gy9LBDM85JyjzPmxnBTywouxZxDPDxXTLUmE2WxFN7KT3ApF8iZtsVDrV96Q8rCRa2xGFRa64mcfgTQNkVFVzj8",
  "key15": "2TDFbnXjVptL2GgzeEqN4XKPKm13KqNoWno2tCFM7RybonK5GtPsNSn3NCn7Dvano5VnVoJAAMx2YgNfVnrQkW22",
  "key16": "4GQfZnc6QrTLXZCm3mrupu9dmFjNCgHMsSDvCaWSnQPBmepJwXjV1zgMM2epE4r3tpuS78Vuf8yPHYnovrKWGFbM",
  "key17": "26eJtjwKACFYtsCDvhHUUyrdgg3oaxNmo6w95DMP4ipigF2ct9K4HvV2z36GUqDV36EuSfVtzCX2PCDCzgdQxbkh",
  "key18": "3rXGinGRuHnjtZPyaY5t83hp7zbodGocjQ8ZfxPhxge9Ts3VBtr9wke7BErH2FacYd2MxeHaYgQ9LNh2sKQvjZ1W",
  "key19": "1az5fEPjHT3ttnKccxwWwJj7hpP6nhES2LnyFsAiE7mgKUdYaiSDzkCE9rGszXKKmo7V2rNjb5tLRyxiT5N94hn",
  "key20": "62cDtzRt6i7jytnFuxUNYUEJzQAKzK59RiGckz8XdWiKAgkHzCbnfMhaDUcjZkHWvGQCGepSvsYUzP8HUAZnosxe",
  "key21": "3rr1frwbAUtJ2N8DWLRipw5oCjqrfPbaqdSuJzVzwKMZBwF1WAicEbhw3SbMrms9De9oqJb4WHLort9eDceHnYqb",
  "key22": "t9ZFFFdokHE3tzGHBR5W1BwDqy1LyATdeMbcm3nA1rxgAiVVM7tdNppZNgmdeRSrwbY6XXdSYkVAGQ8C9GwTK9n",
  "key23": "hUGiHnm7csy3b8SR1gPGEoyPuAYR5LHDnbmKHTf2ewqedMhPp8bayRqDoz1qs8y7vfHNEJwpDbrDwZxS53mweeF",
  "key24": "AwxBNh7k1SzDy3JPpzDf9X7qxsRMBKcBKvfBBxMMycDub8YkE23Qj5rj8DV3HjAh7tohMakLp1SV95vCpuJfEwz",
  "key25": "62dgrFJA5yk858MyCxc5pChFqiPh5LtzVaDhtNquPf6mioLjarNfLRkjP7hTqX9cJDpTCAoe9jAMT22az8codF8W",
  "key26": "5hn4uQBKmmGoZaoFKUWhtMutwGYNgiiwEDrMpR4x2qcnDpcUhRDafz6JPsrnHvRHury1UzcQRvk6Jerpr92vxr1T"
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
