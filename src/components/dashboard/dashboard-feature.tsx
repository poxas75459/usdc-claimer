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
    "5kcb9f9EJBep2953UDY4E2Ro9S9mjrMSfZHbPxeXBnuJ2yRf2awxEA9ni1R1XAL9nydZkWLjPTFrhbgHx9oe9Vqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ay38mWfCpVMJFRJ8eGgtGpdyFHF2a7f9xbmWBdvUd4pDuwZjXLP4RZ3g2gefpeHpLVK2BegnLjriuYzrjYr8D9X",
  "key1": "5K5Y2Cs5x4Qg5GZB9M4Wj6XppHciJaGg8TTTTZp5vRAyvgDnMe3WbGRGpz68vaLFsUTxtRzuKi4C9XoAgAaqE2YK",
  "key2": "6sNtppN69R9Gm4f1k3YhmQ48LZaVeXAQiNmYH3hHXDNeBdXCUfS53GC5me9S65vuiDhY8tJxFBcFqdHY51kEqSU",
  "key3": "4EtGxjdUJ6FyNR81uuTwNskJUob71X7JGUh6fCwhiHE4Vr5vGYoRkkjbkZU8wNAvoSm3eErnkcDCUC8uEaaQjvin",
  "key4": "U4TH4Qe5HKPZK6sBZT8vVx9vMPNCQWnrvgsyaNFYTmPSpyUiVHD4gaCgk67pvtZFbqKMBNTq6nRczz4eEDX9Z55",
  "key5": "4TzfcJq774MA4ptdER58VMAuoTgeUMkRa6BytCHvoQEkPLc5gKGpxNXv5VWYK2C2oUkwsVXV3xVGL5X2tLap2L6z",
  "key6": "JshMchpxsVXsKT2TM5HjbagDRvHpbjgQvTzjfSNSUdRZn7QjmzebYTM9huCSVwoa74N9FSzPXk8yAfgGbyYbpXG",
  "key7": "5n3pZHPKa1jT2rSTa2uGutLRHuBepMgWxCVP3rP4iv6SfdAsV7Y7idv8UyycAEZKMRLDwZQdRe6ukyDRmzPSKbWt",
  "key8": "5VYdoFmMFTfR9BUDZL5nhf379edvi7Pv2hKSSSJffVqiWi2trxUDwoBvVW2Q8z3RUXvm7B5vBduowfznBJjGdNQi",
  "key9": "58qpiKS1rzgg9ZkqQpGMjyc6Z3vnRioRAydJQx1kA2TzTGNYkqgdBWD8HeeewHjQUWt2vopfU8FuTx2Rda133iSf",
  "key10": "3FvT7nkqz4seU78252VRAJLBYVZHWe6VhsvrWNcxhEJ9AM7MbgUYonJnpuCYjgni6sPG8JPU6fJSjMRqR2YtP9Se",
  "key11": "3fSYAGiTNbf311VZZYKxWXFUQVaZn2jtuaAwhgLm4YDsJ1wXi6HcVAJ6jgRQJF1Ub3RDW2dsq1eUqLsrD2EwsPFT",
  "key12": "qEoMJvcVMtQJsGHzfSjps8xpYjzkwhE2tTqhD97fw8JWFwXom9Ln1iH2Ghtk5iNSXNgjh7D1PCBm4ssGXAUuGCj",
  "key13": "5gbR83WhUAjNCKC5CLJfCgH11XCov4NidCMCvuNsSiZdcrtM2YbPNbtFf53ca5UHWoev34yC7nyL12xguWteBkV4",
  "key14": "4ohBp1P8E1egYHoe9AZR4BoKekSGsRziQ8uPPQ7dyTqeK8uFiDWNQnFkNvECQYHnKTYmvphXZ2QeQoFe4byDNWdN",
  "key15": "3Lo1GtiFJAnRey8PXJx5m7sgjJ37ijPogKo2jLv6H6zyWNszSnAzQd6Y5CFWhn1kTGFy1bQQp4wBvFP8rWGeyo7U",
  "key16": "4oktAKzSP6oAdyTTDzx7Qb47DQuskirTjxLRtqTNRbsoLGHAzhUmmCzhj8BRCToSjwNqNh2WPVJWFXugcLM2nSVW",
  "key17": "2oUWfKKkqU7AvHMkwhdpDSGvnMEynt2Xdnc5BjVsQtnminfJtcMXoXQuyAj4ud7zDbpaab2hotaAfbYGcCxZsacz",
  "key18": "gCkXGCp5h4CejNNQiTQaWa1c5WTXtDod3n6EDonBms7c2wFZTJGQCgzGVNLMQKfGMPSsaMCwuhLh4Rs1J4QSBbw",
  "key19": "5RC2pAcX24XhzMAo9QKZPSiqrURn5bWpCVGSgjoEuwyBh5Qj8fQtGmW73MYZmgdRsvaRGxCZQAdE5VNog6hrkZ3n",
  "key20": "2MmMviBMRdye7ovBW1A3NLFFLkxZCwmv63pmLuApPm25KSigUmpFGCTxcBPzrjrnKtB1qznnu4rgR2GYL45hb7Mo",
  "key21": "YsfirrbcM7Q9sFJvyKncpyL84gvghqfBopoFZFDXg6oPJ8A3EMQjZDdpen3SiyLB9dFBrH1nL6nGXcPhkRWhgSY",
  "key22": "22nhryai2ki4d2uiSyyzz74KRifaomF77rFtkubunnzViGowbviH7YfLQSvLEpC6LresWS1r7dU87yzMSfZU5zhE",
  "key23": "3wCQjeWomiAPyreBgVr4s6KPRXgvP1U1Bq33dFuLcRNQTX2ocCNQiMXoGQwg8YCe1x7nj2SeXh6mhT8DysRAw3C8",
  "key24": "359FpaP8F6sonSQ7JJCvtqfqFHrV4oWc1TxHc22WRtnd319kBeVEXxBSEUnAzijokBEVi2d34PTPF2Jt4yKa9AgX",
  "key25": "5VfCVj4ueuNDifAmw9grrZZ1pShVZ2gaaHVoVZK5JFzghEpZAx6vVdumZjXxQk1UsGnjPBG2WXQX4MQQzvT2Jipf",
  "key26": "2Nyc1t9gTEwM8EDPKYn4q4rXAoRKTjZxeXYackrxkYSRBTfjdZCo7PCCPQgr5cwFvDMVvXgsK4uA1LuQLzxjVgpx",
  "key27": "qGQfaNo6WBCzyUV3NU23g3rzYhxAfoaqw5iNekA2pZkhRin4zcCyFTjrDERi7PNaDXn4vRq6Vn2QxpBZXhsyzXZ",
  "key28": "63mSyW2cRwLArGkFtif3ZDCELS8hNrJ9NqLCYDgFV6ZZJ6LBVmeDicbnWborJo3iQ1wiPVsAAbdbXdsSocoXQJTH",
  "key29": "kG9MffPQcfGawvKJuNgndRqS3cVFfqUiJ9TQK1SfEWBWhHBsdiK3c2XPwbiw9yrZU7A2Y8FkQC3GTrYWwwimtK9",
  "key30": "4tmuBjesNH7JN5fdGBwR8htiTy2wYSMVgUoZgBv7dLZ5rXM82cj8A1CE5mBPGfU5bgGF4US98QNzF8g3tdgMzun1",
  "key31": "tr1cDgLfyUtfg3h1QhMHQg6rm1HzjJX7XtWc28UAASp37vrcZHkeiRthU7uA4SSpUX2xwiKrW4DbuNhqar28mn2",
  "key32": "4TSb247RPp9byK4rCtEc1QvFNgoPXfTzguSgGzXZG127KEXx5fUjcdASXaW6w69gqix4PPdywZuZibifmvDxfeEe",
  "key33": "48zXgAurXSkF63Db7WTNnthnsVRSnFeQf15VeS1gTDg7kgbewZRna49eZQnJhcqk79ma12W4uv2At9M6tCMcVYTk",
  "key34": "2QR8jVNMrsZ5ceVYtUFfdB9iACXHtZDXRruK3foj9tX4LTmhhnmvkKuF8B9ih18KrNtazJNP8AmNPhdn2kHy1HwR",
  "key35": "2b8RtCgxLUBBnk8xV4Ki1MY4YM9FrCs4wfMyMb2BCtcA6C2zecNHkRrqWxW8nixcGK49Y2kTePp4Te1V4TvA6kAb",
  "key36": "ggb3v6mf2k5wbDA18neWp37hkTe4K2zcCA6wjcR86db61THn5o4pStRs8k6Zx9PAWD7MhkmrMcQoympdUpqfYFo",
  "key37": "5sV9AJqwpvDgFMQf2kABKmiDUNku9gdyU9JjxVhqRtgddur61qPWGivvYm4r71fkNt6Zc7WZDiyP4s2U1BiCZ95J",
  "key38": "PfVVV5NFkXenkj95aoWTBcij4oJ7x2AczAgqYGzF2hbat7JCvkRFVjGafD6P7yNBXSUz3spQxCMije7Hu8nDwjc",
  "key39": "5gHqJQeTBoPgoDjUpfr5yw2Wb5LTnhB1Dw1WutaDgHEpDkp6JnVaASfGuhiRZw1UFAMKntVXGu216sMJnW7yt9kS"
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
