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
    "2JtDW4BRAY1QsM7B3WAWDuDCi1P6VfXGCp2ArvkbSCpawZ5YrZuabJnme7U9BmnzYNLirAwZDSv8RyVsufH2CLwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WhhLd9ySs2HPSgzfVYBCjjvaK4MZf7ZAqghfcbFaoWRK2XWVBqMLKyxKvfHJis7Fef8ftHY8maSX2Uf7Hq58vEX",
  "key1": "2mFgpxp3THFS6y3LHprDw9y5QjzvozCRAtvbV44875a1QRE1DMxFEdam78yLEvv6nhg1a3FiDxdwA9u3zTpha1pS",
  "key2": "3eSPEPZpsbvbU24X3KjmURHDRCdnVtV3peReWFfG1qWWLuBKhTZuCUjoWTBip3VhtAqg8ZZMh2CFzLB9JmuVZg3w",
  "key3": "2ESKbSF4gGPmBih3N7EHsHDxAZxkk5p5nENy42Abm7FmhJJGmbC3evqmBq4vGEN3QtA7p2bpG4qPEknJSQ9XKoY3",
  "key4": "5qeSd1NxD9hKkTsQAaNK2SfxEPLeoFV5LWcPsE2BNihxnPd1wv4q8RvZeN98J3zeFucSQQ65L7uPK9mphh6BRyha",
  "key5": "49vkegZdgkXcnwtJESMEAke71n2j7EkEZxbVhBcnSc225Ckcfkkrn3GkMuvbx5tCDLRrCBKxeVoAXEXbVe2sBcRR",
  "key6": "4NH1Td8BBnttBHZqyRtcAcTTtCJwyNqHA2Th4VcEVfdeBjyd25Miot7EcNV6yr6xMpQwiGKsymS9X6kkrdBoA5d5",
  "key7": "3SdFMpvwxNsEK2GT6VJGhE1gn71k96jhKAaB2MzdGhvz57Ansf8HrFccUbhgF8M83DrCiz3f8bjEMxcRwkLaHiFE",
  "key8": "5LEMZz9Y3nxbyUfAN8ZuMLax4Za9KtQBT2vpEfNC38R7DTqhNFzxUcVsT2VXoBsMKRWEkomoKyToGv5ojR9oeLpa",
  "key9": "5sdy53EauiXbE8sWs7K5ngGydUFA4Tz2WUFUyrm9NZ1kPvGe8vSxqtxsyQQa3gfteoXmUwK7hiTim2YdmparCcA1",
  "key10": "2DSoWEursruUYe7u1FNXGRm32CUhhYEmJ69S6QhJBQXarr97PGEFCsYHL39EmjpJj7NJBaanzitQ2y119YFTEc5i",
  "key11": "4ZYiz2xLtYWfqm9zkPmph8N4tNBqU4HbaqJ8GpqXDe27T5YrND2R3fiSsVu2VUB99KxMHxzVQQzTD52RaBDayRkB",
  "key12": "3WKgaHNYmpLAdzXMicwBgiM1LCHXEaDjnnNALtU3QYQfesvmFuJHkuKhAG2UzrwVqfMn2zDuqg2djUXwayuthp7",
  "key13": "2oYzQAWjUSZ6n4d9NxsA434auwZAKKGz74LerDxGge235NN4ATP2g8tGG94tNLYzxikd42vfzLvccuZYxp9ApxJL",
  "key14": "2BJugaYd3f3YFvVw6X1xXmabrF65pxdiaL8KpLgoauQq19iifeW63AUsE4cf3c8QSx5c91h5wrHxTxMCX2bHvd37",
  "key15": "3CpfcPiSuRgFGWnocw3z8d4YEryJWvgEmAAihs8aN2PmFzra8iC5jYEBvBvmo2EsjByDfCpo9yfkRoSJWf4iXb6X",
  "key16": "3UEJV62ydXcvo42B4fQVJofGbQgQF3aQGpuGimCZeoh7Tp3bBbi8q17gRSVg5Q8WuZEaDrgSD1nevN2cVufjcRbL",
  "key17": "3RUMBQzsrybwBRoJTFUeGHGowEH3aqttDxwHDqWSAnLS2cQNq3kK1JjhWsM1jt8TH76Q5FvhEuZc5bDG5BmQm1ss",
  "key18": "2fUMieCHERsKqrgDSUfktGRsQFxf9QEu45D7VARjiQ1C4P1uL1wbq77NktiF4axhthgG4JH35ZuxuKbUU5UQFrZr",
  "key19": "3hKVucfBTtSGypqU5jsFqBZoVBMRKgSHibgexfaXkeTkiD2JXQzu3WZqiuiAYng8hwcCHpr61FFG7o9YFfBVcnsr",
  "key20": "3QFdcVqtu7ERMHqsumfcuWnJz1XX32wyAwAMW5em1pbRLfj7ncAEd5jJ5m4kt83SF4h3uEst4CUMrx7iLKaT95VG",
  "key21": "39TUDVpL5fv8bMGq5swUma5MuYbTbEUCDa73Y2HDonC2h77GhLRrjYX8yR6nWEDTNGZfrC6S2w6o9WPJ6vHcmZMf",
  "key22": "3zsZ9S3n5SjyVZyiYcuR1kAZBmWo4f3gYWpGHsw4KY428kU1DDkKaqUxwQVDGCnQLBApDQUkCUXo1bHMUkgXCZmo",
  "key23": "63YqmB6o1Wzuh7jmQ6qsWiZDN74MZkDAX2HxfUUHZNvmttgHtoZ6QeeCBA9G83vFGcMR8ahW5cbqkZLVHG5tvenz",
  "key24": "36x1Be9eNPtHtFvmEd9UYuoY4EmQh4VeAHzots7bRwatnXvHrAv49RzXk8Zw9CqYuxJxJY4VTKepS6Jc5N38wJZ5",
  "key25": "4cDzTSVjse8UTUNcu4yFRcZwiH6PtNGRnyEbabi64WqGUXVThfvyDpB6jAd41XhDfScDXag6kSB2a5HYXxAjhrn4",
  "key26": "5VuMvwjkN1BLhPD3XDgdTBqKaaFDPFoAw2JmcBkR7knYTmL8zunXSTmctakHaAkFTx6fw6m1AYR1XB54x1NCYuxv",
  "key27": "CLE5XZKVkEEiunMoCbMmksGUaUzifGUECtgcy5vXv7eXPAtBRx4QsK5qpKkFNy3ZRXpmJSK46BabcEkmmaoKbru",
  "key28": "pr3rB8JcVpdqmu3B3Tx5KSGJVGzenyEcfJVMmKtHHFeKyuGMoi7dBuRYzMUawptstuXgh7U4qmPS9ZN9mdhuZuS",
  "key29": "22q1n956J3J5BxWBq9rETBCBEcKPLPiMNiLDk4YUJ83KYfbjdAR6HANL8Z1xjk3pCV7zGaJBsw6QWjVRJJs9oXZh"
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
