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
    "4ZGdmXvzMbhVosuMZVSU5y3mPpfbMVq36pxVPNGhsNguCQZACtXsLuBtuKvydgtKiggDmsAnJVoRgJDi1oLP6evV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "327RzwVp1RNWkPjWV5wTM4iNqKQQa4oT4Wq7y4aCE6AJCJG386j4oSmsrinTMbnnaNstBF1TcDU7ziCmZDS4YPR5",
  "key1": "5xuLKhHXmvNiksNieuKnFQaPGLcPoTDtGRncR9aneNUmo7Yk6cYfkGLf6iKLkrjrXkNbGQwtd3RtjH1k8wWNGA7d",
  "key2": "mBvbR8Wy5uCgbL6FTg9btPH4K43d7N5h43Sks3K5WEiagwBMnRMvfjxhx1HWbjFWrD18nWjcbX2L5N6L8qbiDkF",
  "key3": "64GMGDA9amS1fXJTbBGj7MQU82p7upMSvLamEfEjVwA4vgwpeS26MuvnzeMKVVwPL5LhKDGg2tqsPevabuEk7YpZ",
  "key4": "3QWRbSgns74AszbuGYaueWZrAn9AH832dfRfe9HvKp8gdUg8JFtrj1r697BBP6BfGiHFvdpT2xkQ57YFNYdGfpDY",
  "key5": "4CZEZ9Su5H9gw99Ta6XhkTXhMv6aFNVEonEcaAUimE1WhjqUTWfmNx2iPpzPJBddgMnXkTUkBXvfTHALYTyu4gbF",
  "key6": "2QebAeQgiwbTu2U6xqGGDN4Yw5tiF5qiwNoVTKCBx2bbsUaiWGnZ4wdqRycBsJGshe7cQjd97pvGfi6bHZdiU7zb",
  "key7": "2hbrBevwCMN1gSX5i4Hqr9dN4LpN8JkL5M1D83ycb1Z2jiUMcTqGD9GUnpNLTt68oFAsTy4Ta6QMahGqQ9V3kphW",
  "key8": "4rND6tTFFgtXciaz59yNUasjSHsioNCvKWYMLm3dvVaBasWT1APZdprNc7uSfUU6XJEDMoWgUHNpwKM33qTPy5ho",
  "key9": "2RyudFhQYGHHRtQtYMKSRtqYE2rGvukWbqwhjoF9yT35MMsb5XUdbNzcHwWGQdpCUNwQ31mPRovdBJkNfBNtX64v",
  "key10": "3jzsnQTq7PpnAFu761BNv7YuhjCUhPeQntzbyx5Y5u5TPhp9HM1Y6qPxCQLs4npx2vDsxBrUrSSKFTV1yehp5VeG",
  "key11": "ysyBeg6KLr2KNtU43U9xyeJMnEEU4znKVAysbWJviggkJuGv4afTwZ6ahRAtRKzRm3QduWYtvkBkyv3QuW6SNYW",
  "key12": "3Wqs4UBcTFkPYZCtUKVo4a4uJmgJz4u8Pqe4sHPpswksvFboVHsqvc9s2kZT7eGQcp2gbDLCCqnTknp9LDhvPvKN",
  "key13": "2Sne7B74UGD6DWNDGPuEaorapxkDtaBAtWCxCDAvz6McKB8qBmD42ipaWo1AufpV98zxtNmzTcLDEMYDfW2i4DkJ",
  "key14": "5iLowCKGtwC3sm2wmuRS5ZzcCm5CZeYu3Tqp9nWhB5zwhZetvJYSRTkK7q6i73mJZNrGXijvqaTXraeUFkwe8oyR",
  "key15": "y8T9RvPkSxyrJiWKFcs2kF9u737UQDUmF5oa14MzphFSWGbcuNzg8DmQd25JJtZQzAaKPHEhSswKp9EW8GyCH73",
  "key16": "3HtazPWRET7bSjB8xGjRL3Xq8MCTwgidxC5YqK2DEVCtpazw13C6dZUYuJNQC6B7RbDFsLMwd17HBbCmzxb3qEVp",
  "key17": "3HXt1kD8kC2RmiLhNociAwpobULqLDGeQKHWLSXx35bfFhd6j1cYDULvpj3T2WsYvdnQwZriYZGUzJY55KUvdnE1",
  "key18": "4m7jXccPUhrpiL35PKPqxHP9aWAAQPP81Mk7bZ5oLNBu6Qo4nZZNiCCKaXY5TdZWJVdHjzTEv463NiPEzvLcqFas",
  "key19": "abXU2UXgpRxwWRScTSKDLtJNnd7ytsRLEvUmZjZb4jKiC95VPhcnE1xSppr32J5C3Kad4QvuxEiFmfx1j6DLSpX",
  "key20": "4ph34ESVu7pyUDeMQgz46BXVCncPCd34xzxpqnQzNjPTmAN7feHbmfTbT1arwLMJG8Mp2uPLRGoRd4ytuu6WRRqp",
  "key21": "2wU3pVhFBZuxZQJMod7W7KrG33xjX2Fs9ZCFGrCritYMczgNTxrdP7vyNayo29xv32qbv7nScqSePajsU7Zdo95q",
  "key22": "2qpWc6dCcGCpMEv5LCsTcaG6X6HbszJkBmJKJyk8EcXX5wStERdBHb4ZDKJtQov3jKSHNSQNYdknNurF6BvCJdQ5",
  "key23": "5xgPwFP4pjxd52TMZzoMBf6BSLzgrmm3rzhEpCegtu6YKUubXKCjEV24np91iYqBynrRE8xy2iJS81PnvAAjp9ua",
  "key24": "54k6mEfPduCeT8NPbm2Qq6JGnc3eB664LMaKHJJCUhp3PnxvD8bRHekffuFk7oStuTi76Gb2ngomV5YcMb16CpLZ",
  "key25": "4hoSmdoXa8YJDCEqx4G4yZgHXbScppLvxSdvEY3Q1HxA8qB91qgzyqtAdMSrXpMwbJqDRLkqjhZjEoF8vhogokBc",
  "key26": "3FTAktzzJd66Ka9hCRpo6v7bL9AaPrZ2R3wMh3GsbYWYaaYAk8caAvcDqNUq1nxa56GkBvQsRdivM4YvWbcnq5sQ"
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
