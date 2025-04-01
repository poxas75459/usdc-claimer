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
    "4JtXJRaYc6BNgdv9J1D3ht5LHXy1BmsEAGvmVAF6KA7yijuLKvF32mut5zrD6EgpUBzh7nkmeKVbGfE6u8cJgUzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tq949HrG8uRUe1TTv5FhDzTVkYiR17tbSfLapqDqXBjHKGMknPngQfW6KwXZqxwLijoEALRFaXcxDZHGLSd8dZb",
  "key1": "2L33jpsg4zwW3yykCAi61Dq3VqSjv1DVrGJyvon3N9372273DoLzHqYevXxcEhgVDom3MStVuKFZsb5GkUDc7P5R",
  "key2": "4B6UeR9nYCnLUSynTY1VFeBYBzkRMSK4ExaQmMytcJqmgCQVoBybA8neftnTngYETzmAVutyc51CzbjnqHnUXYWh",
  "key3": "3tWX6ETjwrpK9wrDzgm1xHH31kTjGWvQd7Kdw4NJcFTVuyeyDmMBiaLNGReZPXwAhMBkWNYXynkKG2g8a8KbrGMv",
  "key4": "61UQiSJP3C9Si8KVVVCvomvx8WRKAyyYkYMPex4WiGybcXAkjKjYHRirTNd21UdMvbNFNR6cMejS84ahwtETy7YQ",
  "key5": "3JswcFSWiSLHujJkMgkiDLjintvLwJoouGTYJ87BR1h6hrMfQ7RKcdPCL1q2bWDDV2tDkRnUk2iyP7axopXoqQ1L",
  "key6": "5iSkGHptV5XikwtewLnh4gYKvaTAWyaShz4WvmLVmkd1zY2KCikFCXqu2VhCTFyVCm1c9BmmPiC6Qqkc2gqaM3ic",
  "key7": "3sMBWH3YT4gUpGauo2n3x7bLWeEb49fz1j6LeNv8TR7WW1wfjzumUFnBCjWUgfzpx3Pc74K5dnohVu2jdKPJwgyL",
  "key8": "2EicZjRQ645mxzHsGMRVymFDv9oAb6FiJnkUqCU7UJxgVpSh6R7aY1PghM9dwdpMNtobPy6qJ77zmnxjFxGtZdUT",
  "key9": "SLzUo6ern9Uxt1mMiMj3Qu559Nn5yUW9pxjkrHjsFLmCbfhsCWm32zN3JXPotTiqqNKX9CK754pbwiRqLhAjhaY",
  "key10": "5DF1Z8BnVDsaNwkC6WdAvWC8wVdac3sJYf9BCjSqqP63xknVgNE8iGridurmGL3YQcnWwVU9hdbLJAgBQhYMVpHR",
  "key11": "R6sx8jshb4WDWgBkWwbdLDRS9tfugGbWroyRYwTB7QUNoPiTdmMtvES7K81NSpoKSonqojTrgu6JPDTqoE45qKg",
  "key12": "2RzTkmhahtYZAwnRiKXriebdPe9962Eexwux7bEtkx7QTiFLD1HETiyAeYtReXwfp6pL9JMY25LuCUaBXu8v3Z78",
  "key13": "4jPxh4aLfwcsWbdiAVNSYdUzrXRVWsedmmv3VvpGnZpPjLRXYLLhwxVw3rk2KmRVGP17CA6deYozHcdMBWMvoDnn",
  "key14": "5o2BpJxboX55fR2GtUFdANtUNFiqKaveTAsji5mBPfwUQpjeDReFMBbs9SUjsJTraKzWk2UPY6jq2ZKiaL6BEeKe",
  "key15": "2Mznh6KiBhwNWnR2ovuvqBYtmBp3pHta78qZQMdY1WTLkE7LWJCPsXY5bD3UeSPUU4jYQTUdnZq8Tq7iW3YnfWg4",
  "key16": "JNbXecHcRuHTYS435a2ePNo7uz2Gjg4kgYr3sa8jJq5uEBU86oygLMQBQbfyVvwVAMcATYJgbqBXPT49dkpZ7yT",
  "key17": "5Y8bxSeopgQreDK3MoZC8onyxBqfjDoK2zRqiojQa779m2WWvVqAViKuwCRcMunczDYwQ4DS4m6dgS69QAcNPLPC",
  "key18": "2uemDRWS4nfGrcdGu5pxckPtkW6hFD8akmf4BUuWw6jRfLC34Hm5fkTxAC1VMWU1zdyqXz39u4CUeBT6XgTsLSpR",
  "key19": "2Dk3MBddQ6TM4CLGoDK1ttCbT2FrjSbJx2SXddoUWUQH4qPZWPPqATHQY3GBwFGzEbnpnPSMhDEN8ynDRXNyUTWQ",
  "key20": "xJEBxwtoa8agX9wCp3iPMvAcwvz7U11UscAGmswn3PN4jdMbQyWDJwkpoxXMfpRkoQ8JUW8A8ae1JU1Y2eBnifa",
  "key21": "5bh2xWUnwSXRLk2p9f7qvG3gFHi78Hx35Paxz9a9XkdhmnC58FdG2RH94U3EwWo3x3KQctCuZpXcDvhjTKUoiuEm",
  "key22": "XEXN7RteYNiRnL295g8CGM6pQMQnvF4eEUtPXeMEjbnYfeg81Ju2rQPebyedgRP3WoXqmeAuSy6vUt8wNQf47CA",
  "key23": "KXjuvZBrYLdbohiYLTiRi9a494rW497san13ppQosiBVUTR4FnMV6gTq1dyE7yRvv2WEBr39rvSTELzCZLcwHVR",
  "key24": "2gm3jqGjmoHXDWA5LDavovjuBnYkkDH78VC8uZe1pngdKenUfugM9iosqwnchFnx18S5EULQUHCDtgHJsCQu8AM9",
  "key25": "49H847jTRZc69bDZjcQPSKgTjGN8J2GJo6LHuoCj4SDVCsJU8qsKvgxhyvvcsPR6KdLcnCg9tMuREet6E3GVYF5e",
  "key26": "4KRhAjM4SayNBdkLfE2dP237NREhkybdTeTLVJKxRzQeqWbxA77iHtLstwybq6dHv6tGmFttBsEcSyK7zF1yanoL",
  "key27": "5jxGNhsrF3q4EtFAdoi4rR5xddk6sUwtTkbHzpbLSqY8torWBNswhySJF3FEfyaxLKquGFSij47R1AWFCpoSKkLy",
  "key28": "4o1npnSKmxmUzf8H1cGjShboDtC8WqC5CSdhD4Gm3ji1GtVnLJC4ZNdyitPQKAACrLX3MFPZXGFxkwo4uo9v7e92",
  "key29": "2iqGA8o8XuSknx5nB37bTVUCnMXKm4s8qNPfENYurWixDQdTWbZhm3riX81zRz5mAguojENP2QeuKWEAgmr6HKqt"
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
