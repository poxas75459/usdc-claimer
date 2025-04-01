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
    "5p9FEgJPZfZCWYU1CKmG7YdJsmNiq7uKrCm41xQSNduN3zStqwx8QpNCWrXHAkuuxfjGs2TSsNLWZ8DV46yYBpre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zyNqSsUYAaF211MEaRFfchxSVyu46wpXqhg9iZEXkCrCLDwstbMC7kwfKKBdQHzbLqBzAmAfZaMbKwWMcyJwvDZ",
  "key1": "2JxAiWH3wZEDKsbJJLP3AYBhW2vXfXqRYZP3aUAPeXnx2GNfACUmHVFrfkrExDAvPPUqGeVPhA8y7k3jb6E2JzQz",
  "key2": "m5KeNrgn8XEDRVLRUxM2Wsu5ArMYkyhjcd5ReKEDyZtPFAebzbwFz18Ufq9wcEoxc4hp2KcjN8ssvAaNTQtJPGu",
  "key3": "5ybW1Nq2Gt3DMUbjpENtc8JbuY5FFBG6jzp3F5WqNQA6dUVjYk9G8iuABrJ9AXcs7Tg455dLyws72K3QozcWepES",
  "key4": "2STvCLiyCM1Y5XeUYm48LnNXWN71FH51nB99URE5FrqNjufF7eNadwroyPoPY44pN3bs59gDuJaeuCzjw7XqBDWT",
  "key5": "sztZ5nERXvSwEtxRbvkc71aqqY9d593zJatEF4hMRaiKBHJio1B73h6RrzgakF8s7j5g69erJ4v53dpPYVaRiF4",
  "key6": "4AKdtviC2sUHAjMv5JiszEtefyTzaWMJsQPPgcpiimPFxSCB6UP1ZBTp8rnU79q5M6CYp9fgLtJ2Uk3g9jQorvE3",
  "key7": "3tkbcuRskuts7xG4Y5R7gZwiqBty7JFz4gwA7aggyWZKYEX4Ef9hoJfQEM7fw58YpoEXuBm72vYsBXoRMi4obcVL",
  "key8": "65k2Zj3Br16Kwag9JqK4W5yGxkDHF8ZjGSd9VFN23ufJsGo1McsqNhmeHg2vG5eMY3AT6vvyQg4ZQvn4iDXEH4Fb",
  "key9": "5qjb9CXVi9Ewmv5AC16hLu26nPWwYRy19bAhzuRbnzy3jasnGoJ7QHYFKE5fpsYdWZnsNxGv9GHHXUsGFepE9WUQ",
  "key10": "SSZcETTXfXew9NNAr6LPuC36mwTAdUh2dFeaqj7GyVdkkkqFrHJHPsq8LhzU7FGZRY5ttCrXi968AxiCx4Z66BW",
  "key11": "2RTcommqEYidrJ6YP3ppHCQ9Qx4WU4LEoRqgLtwNsg56QLSHQPMggckWEBns6LzrPjfg18dJnPUGZns4QNYYPa9C",
  "key12": "1R6nH5yQSSRWfaBUKauHg3X3Toorw8xV1DKzmUWDGbB1k8nrvtwTbWVMc1KUqhi6ovdd9wWmgaKj5DfcR7aPSBF",
  "key13": "PY8B97bXiFrav5kBHouztxo3vdLL4oTsx9BfBgBsY2oYXBsDrjrg24D4wZ2UJpU6QR26Byojwv4xwpnMVbmXZKh",
  "key14": "2shAKajkSLRrqChXgeuWG72zAwoxvXhW9s7EWba3dY9MqwJP1Px26GyMdeHhvXByisRyNbAFTf37db1i7EcbydJk",
  "key15": "eUPsn8dr1T6JoBGRixRfRQsaL66vYXBNjuHevL5jWNX8MBADrnTDYL5TX3zUXaArUJNbvgvBV2pXFsCdUv4cMmY",
  "key16": "2P7uQQjtCWWZrvZyb367GVRUNS8iQP3Ea3YtyLFy2y8ADnN5eVM32sb4dtApU6wMuBcVSGQiK71EaYCuuz2xvPF7",
  "key17": "5CmNHNi3AKmuBs4ABKSzUcTXjVQUaZaosaMi9LJD11SsTeTeVTKLDxeiiL2ttnZnmUkEbfDmoLkDy8WiZzfXVH1n",
  "key18": "zQ2Te5Gb8EgLNfkXMp8TUjwoH46Pga6tPPRGJ1UmF75Sg2ju7wJKCsAdkpBpZZphdKn2KiRGn3aTX5MemUiguFQ",
  "key19": "344yKYaRHVNm1QysntKgZ618HuzXxcJQHM5SLXQeUGECqxvGzJoSbGxXVTUKaUmKT9bAcvGXTjYR9t1ud4ye9QGD",
  "key20": "2wFs8xCFViU6PNFmC4eHT4QMhk334V1J6RVAFcwKCev6HAeLgsVnD48asiXi5wVTtvx2XtrDKpKUxrCAYyyuvp8c",
  "key21": "2ukgWkFFu3TusZSurWDAmM9MAGuVrU2951ngxqZCtrcPZqFJD8Q6bK92s42kdSzyCSs64yds7xmgZWdZwiRYFTvb",
  "key22": "2jSTKipRtfZ1rPkU2WtaRENycrZpLpGARzSh4Bg4KsRwKwMqnPTUvXJriumx4N1Y9uhjnWvPv4R37xMQPFUKXg8c",
  "key23": "5Uw4wEoccSp2YVjZA8ZJNUg8b9pBHXez9sEhG4EiskrHALJEszRHzXaFv59mBXcradVCa9T8mnbFTr1GFDSse3WC",
  "key24": "5ap15XPzP6qi4qYuB9A54jdpuh6TsYQyDGD1JBJQ1EvxW3PWuavjh7HkDKL4iDXAYcDvHLhnkaS9zgzdgEGByx7u",
  "key25": "5mdkB3UkdCh8TwGRVLtwsgvzvkJcANVhmKXBFXrgybZGsWBaXmnR9inFpxJGZFzZQrBfqdyP8YSSw5rgSSKbA35g",
  "key26": "3qbiXV7XMR7oGd5usxUgmjPTAnDKoPo7iFb77bvqmUXMYo1LpC1UFWfMHLL1qZ17Yt43ZhFmbgybDD2qQSiLXSYN",
  "key27": "2XNMxac71TymA7B9iSs84tNLzvpkd9poJ2a53t9v2hd4PYm6S6GvMMzHaBUPrn322s1UfniSGaiTK1eaoR7fc78d",
  "key28": "2BVDXDSE1hhRqYsdbarqgmvYbxn5E19qSYjj6DJJoEnwdMebnxgvW32CsPkTcE7jAqr7ExxeJ6yBswkYvPD8NP89"
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
