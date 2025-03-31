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
    "3pScU4fgVwxdzLqW6LvbX2xafbmVVhD11PVNUmSrpDYtwZ7SyFjkCs6WMaY7Egzuy497sUZVWKRhAoQyi6PR4hKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27iKHjF13hp6M7j1BCx8eP4k3oZcd7VBZBUizNhiF4GPT2Yzd2nKSmBmPP1TRofsGfBi22JxCe9yMPNcE65CFgdX",
  "key1": "2R1DnJX3daz7Cqc3sNRMwQeQQfi1kD14oU92JKS8em5SS2pJL83QhH8KgJB5YFnfVAzNrCHQSc2Qd2eG88vJv2Pv",
  "key2": "2S5AYPHPn8xxKrzF5Jqjnt7y1y43bDiX9LN58y3ovVD7fpxRNLqRD5fRyjothmddpn4gVijoE9jyE7HxqT6f9Ubh",
  "key3": "bFJb36ykUqnoxuLU99Rut4KKaJHwgfLUugg1o2wKn1aSGJPnnr9SrjcaFQvT7q8QscotZGYiRAhqPFktsD1VBkD",
  "key4": "2a5skJye5Hzjgvh49mMhHrXdattFMzxfZLfNAvYTxqbdMh2tbcQDiGqP1WaJuEqNmjdPAX2wtCsiejKHmSP77pJC",
  "key5": "5c33kcJXybyF5oYD3Lsn2RdXobYDRJwEhBmfKbS8zV2H6yCNRUDtRuKt3MPYwyQmVuuNqueBRZ6EAzzQwjuPK89J",
  "key6": "33s2ANcDNFWNzaoPiDoSGS8gBPWcqDUmQwApk8kM4YCPY8mqJSgjGRRDSyAtaU2aCoJYjUuo7F7yLvNXgofotxUw",
  "key7": "2k2kUEMJUviMNZ7Hwv7eaybH9W1AtFTnSUE9vBW5edsGMAjuSkPgVLzq4oLikoSW35cGV5UCw1b4ZRJ95ESoVSNL",
  "key8": "2x2L2j8AQQct4RbCUHLXxjgqfWVg1EsmmZr1G9hknaEt7K4gqQf73Z5gNBX6hxfXLHawRCJTdqSL4eC7kreo8SgH",
  "key9": "4wBvVPfvKSHVYU9LXGaRUaLaTxvNYqj9kySywFydATi6yokBe5XxjFHiCqErCUngr37SLi3gseSeDwpxkXwp1T6q",
  "key10": "2K1EoKdjUB41GsUjsU69LenQrT4bLMsRmMUGvxkunJuadXMVEXDWmEPEWSbz22HuNp5QysH5gkWp3b1TMckA69hz",
  "key11": "3hMZtSpvQK8vDp61hkGVVFyPUn5QpXwps3NfdVH2cSBgNNBpEBZphcK19vEE5iGbwGwpEnVp8QvNRHNU1C2kC3By",
  "key12": "5nd1Q91g4hJKYVH46S6d7exQGdReunhDETsKcHkvxiY67vaFwGn4VycpuKaQYDgwRJ7iYBvF1JmzhRVoJSn6RTmb",
  "key13": "39mE8zXhwJx575khMBVKaafQArR62aHfTp75xQwrBfWSDEgD4uy4WYikmpC9KMPSHYVVtYjyHGZZP21if2RPqkLX",
  "key14": "3xxqfJZGcktezGLazByG4EmEJDV1PGjGAH5qMVDtk2uP69KDWcK9BtL6H9hswzhGEpRf8QzgFi2tNBQWie2GRsEF",
  "key15": "34ritGhsYymJvNoD6J6EcqTEsWu5dv9zpN86S4xTit83XWLk5jvguihcw5cQC1DPq7UcsZ8ALhzEjU8BXU6vrbw2",
  "key16": "3w3UoM5faNCSY3WwfsmxNuwJddebPJXRxMMTRzybqLhGmECQ7r5WutZdfwsuTXw8k3PHKsCkwh96sMpxinmEVqct",
  "key17": "4hHg3v74H4xsHbdEgpcnteMHWfLQC1kp8Hmzq4zvm3UpSfWoQF1dNLAFBXCSFWKMwoWDd2T2ANdcnNXz6B382WdC",
  "key18": "5UGBPoSZrskfXWnsYFGy1rd2UYN7rKHB3cBvg1hCBgMdRqQySm37wE7WgGem5Mof6SfRQaFeqPWYdHVYnEP16LYZ",
  "key19": "4gtBE7LAsGPW5tnt5nkZCG86x9SSvJSdd2RAgvv8fBpThj51qEGEGcaFB4egfhft1MAL3BMg9CeBuHDEnbCfwxLw",
  "key20": "3xNePCQwxjT74un6QwLdBqMRFRSAaRCqhwt11tHNddXKgdbBBs93D1766oz2exjBF7VUmqsg1jU2LahpJUMkehHR",
  "key21": "5FDcDocEK3jjtP2FRrTPLAotGzwYfEf8CUAKTZAUSw68kHCHrDkQjWDBcjKjrtk2eN6PURDAUk9KeZGRF9xY8ERu",
  "key22": "4JyKgghxGSwUstmCCHyQSbc7WdwQjHNk6NDLJSd6kuSh8qfwLraaqjatbqWEfxadrJw7FibQbWAMgDNwDS5uzSo4",
  "key23": "2YmH9FuqjsBy7Yn45tmqSSrkDBTm1MyYQ392MWNjxjswFPAqNXzodUPrLTTick9oqe8wdataUcGTA4B3zDMB5Uyo",
  "key24": "4GJxsWQiHd1R6oehY87ZkQTLAua2GQdm4UQFVShfyU8F2tJTQhLPpW48rPZoYUdRXer2guLUKNcKhWsRFZUagewG",
  "key25": "2mEZ3g6AdYxZ34BXsC6Nhj53AcVEapUwiHadvkySmWgS1pcY2XzaTq6aY61qKzzqResMK69Wg7PFT3MhGh2X5gp3"
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
