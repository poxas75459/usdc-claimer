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
    "4poUuJfErTFMbtyGpJG97sqKvXd5yT1uYMTAnJtHMUTPRpCqeeQyqKknhKykFs4ahYqGsXsYNZhRFwNP35iEx4Bh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V2GWHk7Y2LdALzQK4qWdBrN8QNwPjmf2mmVBUCcLQHqkUqY3gjNGSMzfrWUwiWXSDKE9Z7W2VEwZnE4PLei9Tcq",
  "key1": "4ssK63v1oyiXpfSo1vewKjKr7MaTsNtexyK9HyLJAxT77iyjZ4QCeKVA31MgR8cbrUWsy9gJzQdR5SPBFrRAbUUQ",
  "key2": "29jB65Xv52MBssW4Yb6fLPkX4cf8qJXcQii4NPNBt9NKvuL8z8st92oSCt9BwQGtinHsR34BAJ1MboTDeKgo5fjF",
  "key3": "48M2D6RTZKnhjCDgQSYs6EsZSGShEKQJaa2Xkm93WgVrenNaPqC3Tb4n5fZX2f5sWZkLnznJigjQopQgykpKrmT7",
  "key4": "3G9m5ozZhZkV6MwqJU1q9qcaaWtYAfT7dhKbVbaa7gZDk1bC6iva8YXVQQyJyrVH4Rt5kCGT8d216HbXta1DswG1",
  "key5": "4TvE6vtkDrT6R3YPzrFuzXgofKKAqisf87gRwm7KKGvtDaYySYVh1GZtpVPNt5smfkc1DoUEfU1VmW7yfEHvsnHZ",
  "key6": "5JgFvExDYpxXjDiesdPXAxxctD4PLvsNY7fCuszn3knw73W1LZkxJaR3TPwBxHuqC3rACeb6XwhgEuJTDFCDu2Ri",
  "key7": "5o1YwXzpFGShR7qxobAYLMTg9arfdADWTX6nt8Aa4hJcGcF3Ky7TWK9yfZZTGHFmm1mZ7dCwXosWwjQZbT4x5u1Y",
  "key8": "3rkm3q4MPJnJuXUGAEA1dGAh3pR1BZ2C85EZbj1beXsdFjvnDb5XESZQ4QKaKHRTyo9qbd7Cs7nFsreEmMKiHWfj",
  "key9": "5Y5iNFDa994kTzdUJXFqH3dEZPK4VVzvhgxkRoqbuVEiE341QhiW2mNMJtBjrpJt5RXQyDWFnY7LRE9QfdFChXdH",
  "key10": "4zbxUNK4xzSQ36AYJaVSTA3APqWEAfuYHnyeS55AJP62LmA3GqW9p7MAVNyx3NTmUYQkdpxqtv25yjn1nEkqsozv",
  "key11": "44b7fp8hKaWPsguEKWjxD9BWHGuv3MFf9Jn2Q7rkdt8uTJCXvGTSNET5zkfHSpSz3giVTSe86gtCuokHKT1QNmjr",
  "key12": "4VsK2FMYpsbM4y5bY34vipNiaH2uUwU4ZCRNgPsZE2h7yeU49YQjUh4hQaaqF1EmNoueL48sXr3R6FaZNvLKYTBA",
  "key13": "28FmTfSVcwwCmPxAEA1PQQpm3adTmGksDHLDa3CwQEZS7MtpS5tswfQDJBDKYK4aHZS2UWcvpbriqn85qGWcYQeV",
  "key14": "2PjJ1csXgVDth2UXe99GqptQGTsCVXjCJRWngsAyV1bdUde6ewEXNJNwXrUFreFUFLFfTUEvZdjHa62pMkwPc1qU",
  "key15": "3vBNxoyLEwtea1N5aCY6KWF3pxMgdLZ69m7VwZz6skZqEy8qg9c4XY2k62zQDJF5y4zJ9MeD2UWBZ8miAhybHcki",
  "key16": "2GVvgiZmLPAVqGEQ7kvsvidMva5fiPLocp8hVvZ2q3qXompq7nC2C7DTGVJ3SdksDKPSMMg1nEYZEQwEYNiaskLZ",
  "key17": "4E5DTTKkqcnPJ7XGL8rkNGM2kRPCcPU5Zo1Tp8kBPek6opbxEaYheUQDnEKsSS2RTHFAiXTkixwtz2CkZQtZ6SGM",
  "key18": "5R4EFjbUiKkVbPeUJn9HZNaCyoD1vHEiFTFYS2xf3v6ytLeAPYAk84ohCLfjSFdyY1ELNAqQEJXLUPGage89tnox",
  "key19": "3K53uL5ESKCrHe15B9fBobm6v8D7yx9zxR6KHj8he5hPaH925uaYoxowWb9NHKS2quikjCjF3hG8HBqzyZb5oDiY",
  "key20": "Tfzc8MuP7edxVmEhU9PgY9nFjd211ckGXiXaHZMdPmYjcb2xqGxwgh2PAtUZb6xn4bZYtrP2AeE7q3AvPkpdZkP",
  "key21": "4UVpQk8WXyhz9mgX6rFVBdceTVwa3c9m6ezwAvywbyNMMWbNcFv3zskpfC3DrsUNxrvw6BzAe2x9WLTAc8fryY1i",
  "key22": "2XT7fijYEvLqHe6zpCjQD8YVrMGHZQ33q5dAeyLhMiXbtMtxUCt6ynN3tDY4K9UTYbJVfL2xbNg4R65yCWHgzWQt",
  "key23": "2ibUu2TrbB87wfHq8zchx4WpFiBE5ymA7CZCz2hUE1PjtLDLb1RH4NuJCNitydVm2uG2BJqEGKYmyuweUQaDb9Ff",
  "key24": "2F91AzmiCp8NUEdUpnHryWF6xK9z3t7LeQ2h7gRw237P18m4qit3wQF2dNAWpVWegGPkB5CLxim6Bzuusn4iKLEs",
  "key25": "2Vmk7QZHT4gqVKQYdGt55ZyEhxBm6SMmpBT25o9PTL7uigsuWHV8XknDZsPzKMjPqGufhnzpkgoUvq27cxPybgts",
  "key26": "2nU2VbnYDoGgNY4gXsWERpTz2V8FazvdhK4MPT44YYi9M6iKhFMxdAhtSSBkRSSQ42P1sFE6vijYMVyTX2BfztqX",
  "key27": "4ZLzwSpLHMUSBqsvLEfgBD2Am72KjjRm3qS5W2qGYLKD7uWEKD6r6QqUa1g2AnZqFYCAKPyf7PDcGr3sSMaRuaE8",
  "key28": "3cFCGurV9G3Kvtsk6znzrryM6MR7izp5Twpgc19Z75xp577UsdaLNdpj4CULWJT29QP14CmgFFde3zXHJYt2dUUf",
  "key29": "2w4NhaRQgjLZhjr5aTmJ1ZX4fVsqtfduVEPFyLTCXpwGkgyMzJqoeQD6fGq1nGg8nGGqtww2YMRKuhAiJnF2nvVb",
  "key30": "36qiB3FZKU42MmYV2GqjdT3QuUJTysNqn4HvNvPtMZS7YkAU7qM3MdviYMbAMMiATj2PhizaofkVkwHUwmvDxrcr",
  "key31": "2DTb4MubQVKo88ZLziQu3CMvtqAURdoBZCDM7JhC5QD2WHe2irVdgGvCVGNSxjWTk1EpEQeVHAZ6JvXwQKUTZVpK",
  "key32": "5tAiPJytbkFS1w6RR14kHmQTThxNWLL7CvnC3KaDc1rwxNfxwdNUZFnNJpbNMjhoYt8xJedrQdWtqy7wDRekAGVw",
  "key33": "5WLjD9VL9XSZxxLqYFxd3UtvXU8QU2hoM61qGdDpvRrNrZHs3tcHjXHEMnoBeNMoGWKghmACEfPtBBZyRd53PTw3"
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
