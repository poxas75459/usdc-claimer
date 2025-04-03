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
    "2utdnXFN1jJ3FvdDkhDN9uqvUASwXFx71658LXAjQ6zZ1KCy6ooRZpt2W8ECvtHJXt8FN6USNb7285yZUjbGnVMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QjEPKxjvcd7H715iTvymzdpJpMp4hpL1i7mgU18kzRkfsdzvFT7SDgBxVoGCwuJksTpGxYwuB7s7Z71Bqnhn4YT",
  "key1": "3A1uPneDuC181Ninbf5qqkzuSDZhQQuNEyU1VQBg46xuNHzUN7bnq5qnUtweon5FPJH24QcJy6ZCXRcuvFt6FCEn",
  "key2": "2zPaKMSCv72jtUx7aDmdyytgbGX6zH2jLfLySQ1NgUxt25BbtBshBKP2rg4RDsvbWtweJZcJyw8WQsJTr3UdWKYG",
  "key3": "3w5EUmrGbMZYvGrxGDqYpDaWAxciqjRFw1Yz67P9y5ABWBWkAx7gbAypkFA1be5Qocc4SibU6yEKcvUnB3qoKvvX",
  "key4": "2kmGkCSTFhDF3aMw6BBkUEzVDDpMizcADQcCHjArdrRmXqy7WMFxGdSKWYdNxLQZffEyGMfjDHHq3DUaTh7DeF4p",
  "key5": "3BavvTYWrTy1qpPdk2YPWUYuBZNzU3Eew8cSPgfpdW21t1C2heGip6KXp9H7JLbr3Yjs4sDC8cuANBkWncHSv54D",
  "key6": "3KwnMoZdWeSY7cAh3RYBEHZk9DZx6EyUUtKifqMY7ED6M8CnmcThjR7Zvj26aLVVyi2hk5VitnS3AdFQn2W8167n",
  "key7": "4ije2hdgYcudVoFsyFVh8BG4ABwiBPWppnDQphT3AyhdcFED9YXtbbLWbhGtXmEVVivg8o2sT1kNeAjpkcjZsx3k",
  "key8": "59FxiPdRmGQE32muEwYwSxvqJfB4cTkEQC7cnc8prqhRJxmmbBxUMXXWCa5nKsagsdFVzAkEqq2uyMmD86w4q3SS",
  "key9": "4obXqKUGfjRQZwxfvLUBg5ZfE4CGs1JqMGxWWo9GNjmKDbt6jbAJWLEJLqhaae9h8H4sMi6TRaViAzqgBZx23XFm",
  "key10": "4etmau4VmQkGexv877SyRRdg93UQx1dmmnkDWKJfCHFDi6o2EaYFr1d8MmZsox4hVTKwmYxrhWp7K5uftTk3PEps",
  "key11": "61SN45YpQVJ6wZnrLbZZCHMkzkz9qk8bRTKjr8xZGZUYRTZFd7LsCjmMshvxyLx26zNFQZuzbU2PNqPc8iNWkW99",
  "key12": "3cp5tj9rcRNxXkv8z6VG8JxxHiZLSwoQ9gLepVo1RaZLkw5ZcKbsTwecWTfo41dfZs6X2zso4XvhDaZN2AUs4Wc1",
  "key13": "5J7wFdirdw2Hmr5sTAEjzMMUeW8obgL5A4cPcbjrDY1iXGeKhhc6iPXoYAhNM2aVoaR5sUVNM3sL7jvHjKjzCPdA",
  "key14": "29Fu8cQGrjNqSRgkXvjhmNyeBkR6hj327dH6mAbSze1CWHJjeDsC9kPBzB9jXAyBpXnQKp4eBXKr5JhetDe5MMYk",
  "key15": "4pFWjJwHxT4ZMiP6XvLagGUhqVNtQaDNPNisde7qn9YBo3zLPaNjqmAQBy5j3zYyMv5Lb5BnSiJCF8fk8kqroESL",
  "key16": "3VGRD1y1GBqU1XnHj1DegyXwKARYKH4KwUL4Q2MRAZn3EABGnVHBpqffh42YxG5ECrsngSMnveRqLtsxqMSnFn86",
  "key17": "2mQB8R87VfJZuM4xyqMmnuG4ZfrCZGMHmw4n4SkZD61JTABtdHZbMd6ghHNFMs5DabCtZNBULkxoBA99786G1FET",
  "key18": "aYw9WJtwAFXYBw17rmAnoNaejCvDB7h7F1Kt9fapmHu6eovSBbLhAkAiN7JDx3v3dj9GyiNSDoGbvxFjzfP9Z1o",
  "key19": "3JJArpx5AcMmEo6zKixzL59UnMg4uHctBXSCLWi1ghGywtnu8cZKxNZzKn61LK7XGgNfMw5D6Bm4GNjKUctCFXkj",
  "key20": "4Ts7sbr7d4oFgsHAVzbEUn5oZFQPitEoySKGE79f18PXxvnPnyd21JsmP4gbJgyz1VCgyJv5uhaeJneLJH26uj86",
  "key21": "4A3zZ2Dqc43ovstpTSQXjiqfWsXm1DjoMbWQKoiVq7x47WsaEgTdvZt73iRkrwYFNWapS7gLSWZ56eeWv7U1JMjk",
  "key22": "4wPMDQeFhDzUX5uShVAGsNZAjMrVhtW96a2gZDTLHwKhpBhbmANFC5ELEoZ26E9pYTuKKxQAjuXSqJ47fRykWdMZ",
  "key23": "4NfbaA1GopKW6EfmbnoYQrGpguWB4gvp3mNT4cRF8L3fWsh4quYEtW6rn1VuzTGvm5zVegJfNGkcguJ6tJjN86Rb",
  "key24": "4kPF4t2iTrVzgSZCbmuztnYvjfKDFH2ExonmCXDCgiTTzCcC7rVY4yMhXXSyfhSE7nMfEBhXmM3ACjNDiBTq4FmQ",
  "key25": "48t9zQBajm1nRUFEy8mH8uiCuYx39weUx2Q6txzgQcngUTS7625xMBQBBiJVM4ThxSKMLJYumYak5Z36HLRRUD8c",
  "key26": "FEmpTRVN1YbJJR91As8fnesuodMEG2jLxFSgAHQ9riGg5E7kJnouDVYtaYn6Pwk3BNn4k8jB6L7aZ9N5N859ZD8",
  "key27": "5nAKAPCGpN6bnssw1CL1kgahup4e77rxhTHGr1xHqqTaD5qNjaLZ1Y5BPXG8fvbKEnxvPUvi4kxzRddGtUpujAzy"
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
