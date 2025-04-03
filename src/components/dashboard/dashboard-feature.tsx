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
    "5MJwLaYhcwNu9rGDVRKkzkhodr4jtG82Zi5i1ckrtVc7wBk9CJNchSfTuYnHYYnaVFD6P3QA7iveNzkReN4kvL2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wPYbS1QnzVr3LmJLQeJZfMHvAxTYJxLpU6onJfMSYcCVoNA23Pj48WEiuXQzpqz8NeT6ZP5PWtGfHyxVUGeKxqT",
  "key1": "3a6twvcUbM7MMBoca74mW94aS8W83HzKd2AAgzVtGnTpBbfdxg1eWdnsQpBGqECRE2uxhF4pam4VmivSua1FehLy",
  "key2": "2MaKvg776SJeb8vSdRa79MeDnuHksuv8vnNbZqi71tLihxZ78f9gruDH5vUeEd6SnST9g4ybMn1eywjQQR8m1tgA",
  "key3": "V6YR1QcbByAPojQJE3UWnuiWu2tcK38UX7KmgS59YpCMeNkdFD4F9XcaopP8hFsXqEHwsodJ4K4MCXGpYjuAye2",
  "key4": "5ohVfk8jcadGdSFfVwcakyocccVL4LZeCLfRL3QfbuBJkMPchqBZjibA7RJ8MKRTrU4NfexctNCzft6XvZtoTBPF",
  "key5": "5yKFvXCweZHEyf4pC1PMVwdzPk2bNLKBBdxva1otGK1LnnzvnrZPu4zVg4QVNVZwsQTEUB8yVhaVFrmyhjJmLxhm",
  "key6": "5oK2ZtndLnkPEGhdbrFtkxSECG7yGmLXXryFaLW8sDKce2eTBSGoAydnZ6XojM8BKfFjuXs9Y5TLP8gXgM2R94Lw",
  "key7": "2cW7hfA1crzLeCf15YP6F5Uq2qJKMEU5yz9MpysUYm2uit6GMTuXsQXxp7aMBsMp1twr46cMAeYSZbWT133innS5",
  "key8": "5X5BRCsN3pBtgBsGg7VQuh5MShyuPtoWWxFhgRwHos2ZtBgtpL4mAwQr4sR4Y9E8reVBarhmK1CDPskGUJ6PkLXx",
  "key9": "5jPyvJa2pBEjstLfqMJRfURccqFfLTRHWgBTFN3KiEvDcUCmmxeehvbYUFcaCusHvdciFKoXygcFRWFDq3zJ5y3s",
  "key10": "2cQShbCBs4ykacR2GGm5JxSBxwnEn8fZzDj2xxf3ep2M4gJRnEkg18vtg1MfTssR6sQfTxvGHCnVNRxEkQomWhF8",
  "key11": "5o1QUUNxnSiSb2pW9wtJDt4FWEky4zCMXj6DN5ZF7HCVrqVSMkfd5Gmj9NGz6bsFjCHq8GbmsB2ozo6QVeT8Fatt",
  "key12": "45vhhmi6TYxNzSCDJ9UttHYn6iQkd9ct2uaZA6iwNaKGdWEKGCqgpX3xPh7TtayFSsG1pYPMimi9WmPZGC56pmQ8",
  "key13": "2RMVy6k2KYhQChPMdfp5QGQWQ8cMrKhK97FxnaixSaVa5XYu2VYJ737LLGSybVy81SMhQ5kYuP5oXNzAsmHfzb6P",
  "key14": "uXiUJR2ykuVHt7e1CaLiAWV4v6pBVmW8U1SRwt99ebpzs5W7kyk9bjvSzfwd5mHYzHVqCqn2ojbobxnjwLbh3WE",
  "key15": "3ZjLjCMvGBszG5jiJwznijY57SWToV8feXFwgyxDGJoEPLeHTPQ2n2hpCcmYvaw1coQqfyqzvfTqumuW2XTdisSN",
  "key16": "4DgeFN3C9CDCnmzKVpwvNkN6hZPmP9sRkVCMLh1Xww7xFnZW31cDj8bmxYrYPKJVZsTX6dk62R3WqombqaxQZdWR",
  "key17": "3UrEwZqUCXCpj1d7YB1x5X52EH5eCf9UpKeF39UF52NWywXDywUHmJqFYmmyarAVRPG9QeXV3NSSSEH6VEfs3RLv",
  "key18": "2xFQXuFMbjYPqjz25yWhGdt4TbPcUpnY42fZrBwsVUuaybPYQX9NrCU1twL4YgVW5H8vkTrBjJTsQTAqcVfygdzW",
  "key19": "2n8jadHvKA3gM4VG6Xf9PdhoXrkUgWfgwihc67ou65B3BfE9Z7bqMFunJYhpKoHA83iYUk7pgQyExNfXCccgVr5o",
  "key20": "3o58NqLQdx3VAzWvsSXqsSRzodwcXoJHihSce2aYiDnoCpN9fHk6brn4CiUCCqsnA9xkDGMfHpVKKqAXTn9tEShJ",
  "key21": "2MB3J4X1jUD8mH7tqKxoxQzfsDRuQHKeNnjp5eUxCgwUDrN9yYrxn9cEpH9RhuAoWxWV5hyUzJzpqBpBxGL5VdoJ",
  "key22": "3LSevVSgNuWXbktRfSKCboJrfeSpDopqYWgQ1AHYmXJCdXjWYgPTSoh4YeuYsqyL9twE6M83yjvXeKyUTyqXTb2g",
  "key23": "5dX2f5qKx7VqBM8GCfrvP1TGL2WbWyNC7QfkKfkHntx1gGyC4eDjEwcP7749n3wB3WUH5UPxGgLbvrbwijoQBfK4",
  "key24": "4f2fSok3FtAYkn5RYEPSWarRDXAcmATmRyYADAVZt6Ana5tWir6HPPJg4qXv7caQThfQyRrGwSWWujjQPyT8A2bd",
  "key25": "52dRccmFW12JEhEmApRAHE8gaUCgP3g7E97pSgah6RU55tSs1YdcgvvFPDPgQKe7DMmW1XeCgHk6t2iSjhoYRczz",
  "key26": "4b8RNsVWjXucsPcT1CapXFEn4Z67R6k8SdxZmAV56afrdpSXmFbUnbMQscoPTUeuvsoqzP7jnUPfPWJXFxFTs7Gx"
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
