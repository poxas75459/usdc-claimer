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
    "5ZVjApSapZLnjg2FcdtZ9djgDCRHLhHR6Vzgxd9k413p5mXAjmXTzXeZAExXZMw2KMnJRHxp3VXfceG2K168xQKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vdwNwRiSocqpvxe66GKKB62S9yVUKiVzu3jUK2NqSMRHkw5wRe9DLbVgkHNdgMaGZF1H8KYsq49YRaQXV18Vfqq",
  "key1": "3XC9awDBGuKYp56AN96jDFawgWPmkYRcNacNhnj3TyPHsmx7RQQ7TgNmkcu2rCzJvmNCCaWrXwt96BRwE7LBXAdC",
  "key2": "5cKVmLxS9ko4yypi84xCAX9QMWYs2NstHjAUED2nDBsqK8gjDzcv6vYf4T64jyRv286opKYNW3LSbrcDC7ResFyw",
  "key3": "5KqBGjhRX9oFDxPxDA1bxpQZ9BctGUmWRSRETNiDtm67umGqpbeXVXLHFc7JpX4PM5CwJA95LBsR71Wp5qHdGqXQ",
  "key4": "mhcVaAUJZvJsDU5N3WkX2BTmYPrfiRD7MbZieWuTQaLLeoQrKPnegH6CpR57cR8WTJjXkTVL1PqPNb58Ff2uiwK",
  "key5": "5yd1xL2LLzxnQHYDyW3jAnHosGCDgbYejL1Gywgp2esk7y1oJqv1mc31kac76x72iVDRv22r38bc7xr8gAbBk8ha",
  "key6": "4VE12VzgmQ9cHyVVPaW1a33CfFcosFjvWzYWRNxXNimbnej4cxKmfta1XBAh5h2gLnBocgN9s5a83Qgzvd1zExAJ",
  "key7": "4NJnvYXeSrBcZ7vnghVqP25pHiFyy3Pm7UNLbtM2kuSf6ULhu16JVgD7yPCNVRNn5Jqn86D2XYhSaAademBzJhej",
  "key8": "4XmygremgTn8KYpqyg1i3rbTXG2qXyvTHLDmi6LATy289JnpPEyi4W49gFdRVZKgWKya7kaNfvo6NyfBgGUwQp5u",
  "key9": "5JtpAZwygqWCB29yATLoCQL68CG2ajVjG2LcHRbTz8AdH5qdWzuY92tcDKtVu7NmAbZofHbfm3Wntjk1jmvBojEn",
  "key10": "3oL1A6iTu6UzEDY1S5rHEGhL2hY7DryDBMHW37LA5JKbBwA2grPcUMtrzC4wibsFEVmorQEPeMFrWksCfmfk2FGe",
  "key11": "3CumqD6KycPXP6QgfdzAVktnTGGk1VvZwVv8muWSFtwzzevg7DFuz3bnTUYUcFekhJvGzMUsK6N1S4nBPA1Ri6Pa",
  "key12": "DqYeNQEfK7GD6PHZtV5RA8vWESuYeSCJ2krY3KY5MERWAkqBkojEYsQ4GmTaZFZg7Catqp1YaANhSLbvLyrjHZs",
  "key13": "TbnmqN4kHgaAyX4Kvr7p7iyXg26nJYnHDDd8HVzdFj3wDq5AS3mE4irbTvrwQrMjKqmWkBWn5g3b5sUkS2sb2mf",
  "key14": "4K9rnhCMii6oiS8ohTtB6MfsDYanPxPTupuKb9Yhm9utFfvCVRM9AGoqkJxWW94cbYhwosP1uCa1wTebvMmefNvj",
  "key15": "qmK4CTrXGfBPDZZ2Uc76UFU7cT5CkZhBqYRz5Efoz8JrxZ4LVYh91nPJsyZcMNdDKJpe2qZwQ5t5doZ4ny8jQNq",
  "key16": "4WartTGrrMqcWPsAfuX52yjqD4dbrNWxd2yT439egVWwQtSyjDDyerSPmAZ3vDwUvvTEBPWEdf7z3FqrMNiErgHs",
  "key17": "31J3aPVuyt9wVWkwZygK12gJKhMVsikaHAniNVi4W3JzBzxHYzEobjACn7Ctzm45w43FZvV4d36haZhYLeaHLUXn",
  "key18": "3gMg2vNTCyVkkRfV6tuYKQAXV86fB8ZeFxGHyeeuXBtWJi1VqcwJSUxemm8VTy6wVr82ANed2Q9jMXUdajvqEgx1",
  "key19": "3cNzT5iPTH583yroXPdRNj4RxhRoRWnG8E2n7QP34eYaGksU4tAR7YVBttS1u4rRz61tHqMM4VFLeLYV9zxTdEv7",
  "key20": "5gdJdJZdCZHDH4A8PvEbRMHk5wA1Uc3iexdcqqBg5KzyBC1RgiNR1FZ8jZWNDhAsLeJ9qE1hyWgxqdTpHNccFMoi",
  "key21": "4SeHeLBCPdtg8MAkzJFjbT3KJBpKDvUbMcdbxQMqWVbceEQnvZkku5wWfMsuGP8kSg97HrE8YYAbLrf8YesK9BWF",
  "key22": "5gLyvJbRrpcWyC5UFRSW7mFToZT25sQDM5ogGZJn3WY3MAesrMrBq2NFphbrGxGPUqKpoSHhJji6AvZAjWdKfmYT",
  "key23": "z1nhdCZeNU95dwfb6eEDcy9Hsb2ej7wnwykvoU4T7bpZQJS4bthRNBCfF3SQ8WwZcVkrEJkKtX9qpizwCxZG2sn",
  "key24": "3L4pYcKx4VHNqDJjnR3u7WkhQTK5h8CX99rYohi1MjXht9TUCos9AZcTY7fqgFWD6iAfUtHh2SyehQedofqf4XxU",
  "key25": "4aURkdgFFr7aNqtouKT5PYjKZrN8bDTAdoCSPzWzwfjgmixv5nwhfo5w7xSbirj4m15sv9V6FmomyfBWM7RwSZoi",
  "key26": "p5bM8VFy9DCxocFn6zghJDqqdWbDzyMvhTMyQxqproEBxQWdF3MnUetd1vgaR4wK3819HxWd1TRWfW5vrEA7yMw",
  "key27": "27nDawoymgrfAfVWUQtNZJkdsGvk3PWg6Si2Cc6V44YK3qGqP5cjpyPLoJYF2YcenmGHR1AEpH5rUxc6V39byn1v",
  "key28": "5nSpuNVeUoSkSEF6iHDSDdKE6uoaqKkKhPRDvKqrqZV1xXiMoUbnYBYpECja7u6GpnBcGFhtW6btAGkEeQzc5uro",
  "key29": "7Hxx4LwDkiy4sdG4e36Zgpyq7b4YeteqPVWX1vveUA7pziZbMAYbQeoxTyCtfRzJGZMNwxju47sCWUCQCrxGsZE",
  "key30": "2qs7tfX9FcQHh6hXHJAyHFn51tZYmT5NCZsH5XhSLQG2pF3jX1BM4Gs7mD4eUfk4KGUDP1pdiZUx4ZgWhWkduZve",
  "key31": "2V2iUeSQRwbkEw9TpXCDc653ixKRJxJdPbkaniu94vyiDejWb74Y46jbhRSCPgkb6vQauGSNV3UZMDwB8bNQ1m4f",
  "key32": "4co2h7E8CnEGmf2HsSmVEuRRN1FKduhaEVuJZ7vXjPiYmujuuYGBbYbaNMpPuUDVsAyAhgPegAn1ihnCTVKLcFxn"
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
