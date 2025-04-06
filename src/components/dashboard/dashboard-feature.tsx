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
    "rt88b9XyQNmkxR7tS11WBvjTVCnVEyPtju3GRSBJZV6uiivTwArhip1FkrGUEFB68TryvQsEjMmR9qQ4XM7L26E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qzwQPNRqHNJ9BcAiA64c34j9wuMosYkbYZBczPrcFPaarzQdKE4TpuTn2jAVNUnyoQeXJ5HdjBeLUCsvJeYQpf9",
  "key1": "3RiyRjxdLAkkRqeVvuHzk1EQ8GGdfuywWog76Y7gcjWtRB11yDVFnSLEhGVtHZbm2axZdYtKqReFCSs7eLhV1enG",
  "key2": "h2tTC3VwfgkdoqmdGdkvuQvpM3Fd1ju4t3aceQRzV6qFYmoqaQQtki4dQQ2gJuFVcWc8xEoTyePyxNMCPjtkEAj",
  "key3": "2uppES19dKkoBKf6g7fSh67ugRSEZydH85u7E7pyWJkM4tddqQ6zRhDbHq5Vs53pMmLzcah2kS8TLtv93GPLy8HH",
  "key4": "3jmgoJmGnBqrWqXbu6tU7APHU3tMPw41ubpbcmFmEBCEhAuZrKg7PmR7wuZvm44Nz1yNWFcPJ7woFiX2YHRfCAhT",
  "key5": "2FvmN3r4LWRftErmYpKe9QzNZ4U9kMVZtb3i5pGyUBkRcAhnW3CCMeLBNvXEYZ8zceovgW9XTV7Lzg1x2tya7ZRH",
  "key6": "3eQ5JcyECuCjpP2mNzo8gmuxhKzieWGyP59YpQHxQ5XSf7p3AJWdr8QLaLT6S5Fbc2mA6aTEfYeubdUwmNqD94yG",
  "key7": "3FidPp9gf1Ve2Bda3zfAfiwhz5JPS5Bn3beXACzvSCmD3DQfEQAsw714EpAEm6xGS4R2UUExh6fsAgzFQUJDykGr",
  "key8": "4F9nWTPKxyraeh9cvgMkUvBVWGoqJgZAJPmgUrJc8yy3vxwhU3ENwVC6j3TMPJfU79WApbVSGhunn7dZZfBZdnZt",
  "key9": "4gVF8dJBEWHfCYrg7eevcfnzckxLkhvXavCDu6jd8KUmMANoDzjVcFebvKoKUwrp1Fk9t4jzHYVhgqG94n5dZGFj",
  "key10": "2Kb5wSRLQNaDXG2iBzeBrz5Bv6Ep8B9XegdT1iLxg5yb7yq9RaeKQyoiV5csEe3TzXWcrhjtGcjA772bGzaj3iGj",
  "key11": "2pVbXdQtFjtUEmtGWVkR9W8yaeEFPRujgNwCWAtN9zr4WwNosYCBAFWtZrAHcVsY64mE22Jzf4CN7ua6Nf9mPcC1",
  "key12": "3NPN9PSiqWVqeDXmVA3pDTPnGrrGbbRuNjk5jH57CYCC1EexVhHcwSAFdgEK786UayyZYzvUzXzq3aoooCS79sW6",
  "key13": "LyaLFixpmtVztpcv9o6G4VvhPmSdiPZEKZVpye6UbRwjMKSBKikUizor54NsYboxUgj77V19nUhv3oDG1fMrnQL",
  "key14": "4kmziTKTHDyKAGtBarUz5ihD2frYkP1bYJmZp6subkKzgaF2e2fgJzzjjPCb1RJAgNHsPa2BE6DYBW1HYnpazGzW",
  "key15": "3gZxkpc4SkrMTmZJEg3UyEAisuAgxnhkSPbu78ZF6a25v5kit6EP4vB4XTcrz18bv35N6mUKXWEfHKTHfhYEJxXB",
  "key16": "4idsPAWCSwGT7YL5KcVcKNgSA79JfaqtYu3wmE8NpYgn22whaDPx8pXsUgLEem37aBDPyECZvsvjk1ax8GdEUtyY",
  "key17": "3MvkVBk5ohp3Cd8CFBQJ1Ecg8vWkssreNGbPdgHt3d31ARVCF2oYerq9nj28LfMUc2a5weX5TfkCPSd6ajMAnB4S",
  "key18": "2hMWPFemLPUryWrXpumV6HihcN3MuCfaAKsvnuin5yU3UB77YNxa5GPi2zqA75Ybjq3mPh78J9o7SSnniAnpjVmF",
  "key19": "3NKS5qfAnaqsCPgWmdXmoyBBo84DHHdwaz8UAVHNbyUfpenj1E55SqkHnkQcszfPR2KUuhzUyydxLGvsjpen5tJM",
  "key20": "5xqamDKnMxGaoMj8T8LoUre7SFoCz9NygEUKk9YQDfeKDreMCfLcrxFCPnyYjYdHwKp9xF5tZpeMZGMFJXFJr6NJ",
  "key21": "2244DQ4gKa8PLjJrtZWFDJST7h72igjJMyuKTsAXhAqzgeDAzRkTaiWFwzxgCRRutvNwFHFAAFPHLQa1c9yPNa4g",
  "key22": "5yCV8VZsVMC61iDnxm5EyUcs6UeJBhvALEMPA2x48oZ2pJdcS7TBE1J4fPr6GuvRfuiHzct8yfGawuS3BMkTEGTv",
  "key23": "5A3RJtzEJs6rHvtpSWvrKZoGG7wUCcXStdASBbGRKStKCdcYv7GCnbbB5Uxq6cmPjyedeEHLxmA75m3VwjQau8vY",
  "key24": "2mVHzjY666FaCxgsuAdUQ9mFSGZYF6ZUWKPUMCNCQLoBrgeB7KBFgikooBy6xU4sRGfsexLBQczpr4K4U7tyVcYg",
  "key25": "4UmAZk3HpYVkxnVF9beGrWbhZrAUM5ykNptf6DT1BoreS2jNAcahXaEErdc7WcPguKPMBbvd7zcYbXt7eoFKcNeD",
  "key26": "5SuTXNcMe826zmWuGfvV2cqQdDi9JUKcEkJ3uD7tcQ29RbWf3mJMGwn88MGc1E5o3iJMgi9jyjUT8bKWEBK6JQec"
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
