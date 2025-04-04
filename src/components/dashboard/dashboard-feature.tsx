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
    "4v8ogWTdCDNfNapYyeuDBRqpHV6VmgCex2uqEk6YQYKHM7gNkWngFkke6qWFFD3DnbDeGaCgbc1p8mawmg5A2bFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pjbXdEhJCaQw13Kv8mFhyu8WC5b8F56pXvUaqaSWq8MRBkVf3kNE5Ypgy7f14Zc38RUtfygNP3jqYJwnMV9Dfqk",
  "key1": "3wzvaRJPjJq7WxFr35MyaoaFR7f9MpxpbQqTarnntAcKbPB7CCQRMupAmVTwFysYbBF8WYQJDPPbmDiBujkZ7HQD",
  "key2": "4T9oZ5CBJ4TDUrJo2Yg5EnAeKqJSe9pFyRKJ2LJUtRiNzC5jtBXcfk5aMDuhWWR1CM6au66UKpCsb2yCfAbK1bHe",
  "key3": "3F3LP453DFzFWk16gCmiqjZTppiwCyP6cMAzMbdyy6APSXmYo77Z9zBV3QN2vzMPTeMT8MjrUi1NBjpP1r8eU3sx",
  "key4": "Dv3CDjkEwy5FwUmaG8MwUUjauq4bcnqF5gAc2t6eDd3Wdwsv6ZqBK6FNz13ehxmfgJsKfM6YibY7oWiBjLc8vZD",
  "key5": "3y7N7tBQJbfeY3AJnBvmKcpNuZfCtXyjAC3CY1craG5LEXrUrVsWtdt5hdUGwjX9qBKDkoiBfyRfpEPZ4HChoiFS",
  "key6": "38s5m73HGtXLkssyYtzPL8xMJmmxw6uamxpZpW6okHcndHKSEzkRQ5ugk7pJzhhcgibeVUXhBS7rJmX9fmdUHsK7",
  "key7": "4fP3B5MrradLLC8GUsKDobmYz3Qo6CWDqCfxV7rtzQ4NFoWKiyEUTVBScan8PRSxdiwX4TMfwzz2gLpaUCSJTnhL",
  "key8": "QV5e3xZCj27K6FbdwQtiAaVWLeo6NGtAHu9mHfGof3uspwTmHDveCJqWT16mKxcs5HvPSV3SVknsm41Q9sQjxcS",
  "key9": "5EBZbGtWD2mJmJoxt1sFGUQuafbkSyqzEKn6PNctsZfiVUEntmMX6iJw9PSa39jXrhoboiESkTQ3uJ7LnvEBaSZp",
  "key10": "4K2AZfSTRPWipbHuc4KdrfVvXpEAcB2FZiejbzv7ki7idsT8V5zzqarF3tWTFCQdyVfz3DNqxp9jpDsR73eP5CZ9",
  "key11": "4ok7wnDpkqBCfVintMvDpiLXNL9frjNtnqjjGj8fQFS9KxCvMGiN6nRAyiZPDsJE8RXhCaeUrfDXxfg1EWMxFEEj",
  "key12": "2EuxCnUVXnk6qFNtYwEjWZQcTjUMK5DqUbgFtVbV5NguJgr79A3mDBqorQ8pWhiH7RYM5QHYe2b48Yr1vUaFqaN6",
  "key13": "3m7pCNsS4zom3PjcZvNGhWWdgUVtHKmn8GunZvK11qqM2wy66QvMocEtdHtw1ua5suUQ42Di8NW6f3J6YCecaawY",
  "key14": "42Bdbz2yox2ZyQ9YnnMHCGPMSf9gpnNbVB2D5AVxPQQMgbpFf4twbxAUVFGfjVb7o5qb9DaT1j17JM9Yc8Ps5r2Y",
  "key15": "2gzg2a79k1jV3c9rLR5rW2d8yZ2uXeDvJnB8fXEYsRyY9ivfD79HmS7chqcyxuCWkw93q4sfibrNK3hoB1Uf8LAf",
  "key16": "4cc7NVrx45RtzzWf5mkqriHdWZMnZRWhC7E35xc4uA6jbsxcdL1Hap2QbhBx8a2xz7bLgsnniKhU88nok5FqJQUM",
  "key17": "5MbvYfhVp8hTzc1dqdefiHS2opi2ah4STe9SZY2AospfjLNMmGtBnpbcKRCCpbsuhk9gznXG8NANFB9U4A2drTQn",
  "key18": "3AFLuwd2WJ5GeNvEDhmWutGqMocXrt84ssZ5R27Z5iZdtVSLYYZ1RZWMXd1in2RZ61J5kgzNncXneyReBxk3Xwin",
  "key19": "47rq1Rek2BPaa3Mz8XwZuKormivSTdrf2tKM8pFX5nzQ1Ec8zNAZbCjV2ZBB7XGfipbVcncsymAmRCcd9kXht9v3",
  "key20": "2PaGimaAy8842JqQ5WJ8udT5vuVAejF5EgXNJ5sToQ6PTT9pghrPDnmYjZwFUMjbwHFKCACWZ9fu7HLbXTm4LyeG",
  "key21": "45a6WxCYqwkuwoCL5tKYz1v4WrThQoKtWfg9zuCCET4GnfhKaxHKTGKxPxmSYvLNhhGuWZMD3zU1qWts5pD9nFKP",
  "key22": "2e47ivZDMM78FoA1uoTegCBumLeXBwdhikavHfHWdmL2a7ZKTvn1YSYwXQc4TRTtKqcT4i1niCYnd1RRLu8eWqDS",
  "key23": "5uZ76mfu1vpunRWgQXXPoFwYFVXhn7w1XvjpGM7HWCRszgFFLGyUvRQbjf5zKDvZgQdaE9jUB8hDATF6WaBAowWu",
  "key24": "2pusQcN7qkjdYBd3SiU7tDnefWeUR2LMv3Ngk3Y1PByhW3NkF95GcgDaVJrGvSAenYyVVKZyrvXPMnPuThL8GJFh",
  "key25": "QA1ykp7wUzo5UbBcv8bPRnMuSkdCa7REQLyBMsCj76XwjY5KCA5LUiFuYwZFxU9e2VxLgQQTKu2FiEZKT131r2g",
  "key26": "4fJggiTBWQ4XnUr1XPNqyi8Y6HL93SNzDxBTs5oZZbWd4D4tBGzJrBSq2ZCj9cohied5ogoC5gwUAYEssxsRxDmA",
  "key27": "26fwzuG24oYehqLrqzYpUQ8W6NpV22Ht6w5dSdmp2g16Yh1tDB15sqYdABfc5SL7xKsepwhdgxcEBkEffbi8L67C"
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
