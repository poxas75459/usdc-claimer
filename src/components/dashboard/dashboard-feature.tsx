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
    "58kDFVmcrW9UgQGH2rv6nMVfmvTR7hG4eFNEK192NzUD72C6L3a2AzodvNR9fHGBGBtnEpakMJLYYsm86cnpRwfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27v47CpdduDnKmfgTB5Ffg7fbkkymmng5BswKKq4cXJiVjxZva6C1jZZJxkNpbded3MfiWLNCtZBqkbx6BBB6neB",
  "key1": "5W7vvWuvtSKyowcfJLMJ7bc9kfBQYJGERFv8hgNRwd4hK6RmPVVsPujzccFaZyYZrYgrq3S9daLqzTHaJCRdveb2",
  "key2": "5gtSxrSAiCnKc8fhYkzqWPdVC4VDT6N4ViNgrXb4U8R7SYW8xXv6TkrNpHsxabAjcYW1y8EDa762mVpSU7PyJp7S",
  "key3": "MvomXjQS42XZkoV5WaXVqWjcM4Yx7yjTrB2drckrjwafkQNbvwh3UET1PPXJgU5vdM5kGfvVjXKQ7TTBWnDQNPU",
  "key4": "ch8kb7q7FEjknpkXr3nTX7C6oBFZ7E7zLJgUbRHrmFJmUp8UBUquS93sfDsBYThusd1qvXp1Z9pv6HgtkeCgGsv",
  "key5": "638159FPE7TFp4tZCPtqszG9JH9s8nZa5kkJHLG883td2gxihHoWsZT75H2uWUcQhmn1sqwWYjVDYnX7GmHc6ZvW",
  "key6": "3KgVRjy87UsaoHkFLcT7L78qTMFKLBKDrUA2r8XckXkn4Wo5y86tfrZ6WDPK4pCxSCiFjuroXQZKmbbtsgBw3fWa",
  "key7": "5aAxZV2j2PC9cb5m2JqW34LpFEFMZWGrxpHpyd8uANMArSDgGg6yR31NfhL5thp2vkRVpgzwtyA1AQenpfCL5zYa",
  "key8": "3gLykVtUZmdFiAaQrRPQ9uQsjEBvE3X6KyYQ5Q4ZPLpfLrT4JyK773TN9p3gvkVP6BE4DbbSud9hCF6FVRJaHXg",
  "key9": "3sVGSMAa8RU7PBRrYsKLaWZEroyDLyAyoQPj84EGJb95VqjVsagaxkzVYpzxmxMRfYBqtAPdztNn6oX3FziemM2J",
  "key10": "3nd1VPGe7pdnrfyH5fDUkCfshPJrq9H68Y6nBHmTXFuVP1icPwqtLUz5oU2korDVg4bqXEFfvuZbzdeFCWG6XmXg",
  "key11": "5yznKdB7vgwcn1wSdmMzP1sSyhyZTSS5NMF1oyFE6J6vZEa2NBq9sSFi1YwVw56KBCmK8fjTnfsNjB4LjCjsY5r7",
  "key12": "5nS4fAjtucw6mrsXNeucrvQtTtbPPGVmpAVWC9txFoVNyKzSyKLqTZ6fegTVC1GDEhPwMHpDBKUL8XAg5hour6LN",
  "key13": "3iTcvTPbqR3yEd6AiP7spsAfgnq6fBKAXEgBzkaUnYxK6sDAkNQZ4frMcrVidM2dfoCQ83cz7bMaAVu6RpnV4sKV",
  "key14": "4dw7VELQx1eKScthSF6nzpnB679v6R64NVEP3swsKbqzJhN8eTCPj8NjSkNuTBBnLxvWYkkkowhPPwKvycYZNFdH",
  "key15": "44QFqfAQUJcitZELSk3yb7KwHUqfqcbSaBEF4vF3EePBCNPEw8W96CbCuZXeg3YgYiEZq4BCZiNenbzNbLpAGkac",
  "key16": "5ky2gpRtWhyCaPdSA7u6veQ7riZk9jcY3QoKG3iofE5jSdgmuT2dc6PR9mbFo1qdGLTAFUpFmET9W8CNCqsQgQLW",
  "key17": "5rR4MBuYWLMrnbxvYnwZTKmLEXcCMRMvcNfiDPoqoktgPXKSso2bm8EmLWLpcZT3xGQo88Qmm2cwyKwFpU6x7jYE",
  "key18": "MF54zj1Mm7kPsde5Rgy6bsEFMQgFdfUhvTghsgZvyiYmMACQzwZcaqovGcHcGoGJ8TkmGmLGGKnMxrenFNfBnWU",
  "key19": "AKhe7eQdKkb3k57MnxpKP2USUd5wn5iJd3x3tVDpRPSPHZgtEteoHvegoJGyakQDL6ZzTKhidmYMKHzKfkPAjjM",
  "key20": "4pBRQN38XL761vKw22voMSW7fanBT3dJuKgrEfpVT2vrUupshJHkWbfoyh64Skjn1MD61PC4khRVnPv5TfhQJYLi",
  "key21": "4B1rmrdJDx3GvpZCwUhTH4mqmggETRDdeQymFAB9YtUt8sADRPAVhJaAiGrKB3Uza1P9MkeaAL6MgkDvoP7LuiKo",
  "key22": "4yKNVTZrJ47kvhMhSHKhNFb55Khm72aFxiLVtpp2s9VNT43wvwgAczS8H3mmcFSNpHJZVjLHr4AHdP1zj1SdD69j",
  "key23": "51RbC6dArgcyt9xiM5RTLXQrcAccN4rsbswd1J8EWnt3UKop7hXXjHaHGyrvtwwYbTZXKMU9UiqwqTtb1R2ppDnk",
  "key24": "2ok8t2CjoPMt4FW5qTqRD5vk8d1czgcSoEq3VFdPkkvFwYT66KGq1tehpgdTL4Mm2QuuoGSjA7LhAGUVEJe3grwG",
  "key25": "2BSP8qCaFB66ucTwUqGt4cjGoC987CcuzaLWfJeKkr6t4adXSwkS51XiBRxx3JC3tTigVZtSXswod227AHLfWovR"
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
