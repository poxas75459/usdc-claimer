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
    "5AjujZCB7QY5T58u41avhVwB8WbSPz1LibtaVXVDayka9Zvh1kqzJTb33X2aSrL6dbi81NtJfDX72TaceDRQXQvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ghqafUXv4iFbS8RTWH2e3h3HPfQMLUp6q7eUKUq4vz2d3i9JpHXRWQNeqFbQ7BZMH7kPA8mCWUCxnw8TuWASAsL",
  "key1": "2aB75HVMPJFaiVBWJcBngR6bL3pmVvr3VkcgCxi7tSUzU5ekrg7w6bQ7VdPm3GTQK7Fid2QDJEEN5dhUNdskP2gR",
  "key2": "4tDNeyBQ5m7efHJXC23b7X7PS26R3VuZ7bBdzXKNL7i3i3ULfuSjR73EJQFFrSeEkqn3ds3DqbdwkuMKn95NRw7y",
  "key3": "4RH3C6NhNizkpX9VapDrLx6HCtrkMdRwTQXtgvN8icYgwwho9VVm13HLikrD7epUZzY8MeFY4fkrVFWe3VE1cZ59",
  "key4": "64X293mthDv1rszbTWhZsc7PLHFdhGTy4ofTZ7HwaPNyYgGVCLML7u32VLBKGakqBRsqsbgvm7mCJrDgXkuhDRCg",
  "key5": "2dhsMYwWjg1yGkPcZMBAxUMVJ7NEH3rvAoE7ofFB1uZje7dArAJXQjmEdbjQuuhMGubBKdDbW34pxx6d3sF7dJwd",
  "key6": "52kjjkTVMx9RDztCeFfFczsLTPd9B3qsMFQuDPcspC8k83ND9QHq9S1APNNzdMWpLNGqKXypCWMTFvdNimhYa7yz",
  "key7": "b71XxKWxuDV9vSnHVSCAkv19gSwTqYnqgBZCTo26ApMjd8tzuTSDwuvT1Y8wNnMSWeB7Z3FfsgzMH79C9v3w6LQ",
  "key8": "2wadDe8xva42yn7TSFeWWEGDRFKJof23Djd9DCsEWHwbxvhe3K4UvniRmHxmhToR6n4LvocMZUmJFcfmFTDqqNwQ",
  "key9": "3TLtF4N6wespLdCY4eJzmYaz6zVWi6PWsR19ZwGgee36EYvB2KVbnxujQ8bkXGgTk3oQx77FiYarEtykLTAAGnE",
  "key10": "2YXbBDGMyn31xd5vgS71qgw6iME5d66rkvvqYYPi912AnWp6eviyGFu8ka7V1F8eEmZ39QjgEsKPTEyHN7NDJNG4",
  "key11": "5LUiUm8oyCEjH1ExnJQJkEkdG5MrysGNWUGkHQXmGnRKcCpN2hNtvbv1ADkjSkEGTZvut35t44JdwiHdmiCggRqj",
  "key12": "4bohT2EkcRYfLiRAyt6YAfc9vM1x24w66kwekhUhWZ1Z55wYzMWgbcT914SrnfjtvWRQNaAYhdUBKw6uqqpSK4FW",
  "key13": "5vNGpiieX2XoM6573gAQatMJTBa7dEaqacHP3uU1Zv3WiRKJP8J1ubkWpSFsrRrpS8xQJBHZQJ89d6ZAtU3tUszx",
  "key14": "3P5JKFRXwGqAandpXEGkmzGpASG2pycnDWxAd13ybEzv7ezgx7dy1BmFZRs9j14SgsiXiC83nJzTcbZShymcj5xV",
  "key15": "587XLKYsTN4CQVxCPGQarXFZHCBY4PzBFF7JDY2NAZ6dkpCeMTnjc2675MyusWvMc1jrLKgRdKqwRBL2cR5jmekP",
  "key16": "VRgZJ51sn8q7P4aQ8HKTXzx2s2QmaRTvaSGQQwZGeHRhnoNe3GNUFCqpCX1pPJKXE8C6JbQAUfxMBzfs1pKux49",
  "key17": "4gBbUmxgVLbs5MB1KGqmhq5r7iuhHaZxgNefXuSB3hN3knLf77ZHXrMefPD9ZZemQKBTdoqQ8cKWZQ9hc4HZFn26",
  "key18": "2eoHSiujB89umfqDRvhA2Trjtadeit8UCZnRmBZLpBXtGJ3q7589H3PBdEgUFYQ2EoWGhTzs4F9xbUHUiJo52cBz",
  "key19": "QvHs3m2AR3Fe56nqKcTeGrWTxYWtWLNLBKLXQwNLCHo55oYXTCPQe8TLU4nj39gYVLwQMWwkfcenvoSFJ8XeS7v",
  "key20": "3huKDSyYBAphdttmThirDX1TiG8kHwjiSvp1W7f6ztT5bYJ93xRP2yZF3tjENTaJXE9HDYDXiB5dwcXjvvVWLKHF",
  "key21": "5iFAdgfA7yNaEUXTeBCXdyKEL5yvbuAhTSJKKFSaG8eAXPjAtcs6A3dHwcKFQ4cw3iHVyissaup2Ut1uobVXYVHs",
  "key22": "4UV3NTBYKrmSgyCFv19FGM3sE1CJQNRHvuq2vnADMUpsNKLSiV2RCcTAAb5anPQMAcGYocgcYUQqGP1WcjwUCdtb",
  "key23": "57qVprc5QkiAeTS5zgcVQa94YLFv9zB8Qdu4GL4sVBqi9jUaTwHjJsEZ7PYi3sqyVVYCy1DvAJC3DT1j1WoZcK7A",
  "key24": "wCCBaDH1L6s3uQCA6ZPNrcTNXXY7NAFVCsid8GM4v8wbnXfuwCKgS9VgpE6sKzYfTyJReNx4UcxE8ppMCM5ryEG",
  "key25": "SsmrMGozivkgxAwkMMkmthLSAmCvPRqdp5KbKgxCtbFUgmkvaj1otSPSVptv6HdjeyU9gU4FRycQT8Y9P7Y9bRg"
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
