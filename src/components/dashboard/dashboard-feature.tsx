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
    "2jdLrVei3JzRhZxMUBuCoj5kFAEXLhAHu77SXNnmHp2e6TtUzwAUytQuj92t8Quf1t1N2qiAXZQp9cEQEAE5WHVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c8gWKzpFu7WdvEPbEPAtBujvwfiyYqKQBqYH6ySKTTQwKLesdaWxhBKXmGJwCbdkwbX9shGWuuRWqjjD7Ms4mW6",
  "key1": "5pSSGo4VASgFwjjyLXgwLAT3Vtrtb4VgTTqwboSfqjTDQ41tfz5FTAAcsStK4iKBnuDMdK69s2AFqDewUR4dyYUv",
  "key2": "28T89121J75Ew7F6qQGh5ZzvJySt8VKiDbNZxy6gwhhcHoBwQDnsiQBzZcWg9EjYj7cGRvsW1er3pDLijP9Spo4S",
  "key3": "3Mcm7ALnxumGTkSAoHrFMpoFCENRR4TSwCg6bsySm27dmksRczVBu5NMTLqBNNBBTPaqeLJzsjoM4yrPL9oQfW3R",
  "key4": "4PTsyGGY4oZoBv2yzUD7rvEAcHvi5vx35PVKXZmDKcCzKuSCK9tx7QKoszFvknjm2sXUE3DkasDj21fgFLsTbUxW",
  "key5": "5P4ML7h9B9MgDyb9xV8WeAr3Gtgge9QDQ1AMsrjeQViB4eHo7VjocGMPVsrwaKt3TGv2esgD5FuuDTwVfKAH2EbG",
  "key6": "2AnR9WobraEGbWexrGmT1uEBstfTYmt2AGgVuYHnKEjrME7c8Cu2PTP5DGUaKpYNba2PdA99u9Qeych8LWwcZarS",
  "key7": "5ngB9MPDeREmqKWVfabSvPR1dS1Abmy3AQU3GoibFnVr9FxQSRp2V3LW88jMAcC3kBbgS4HV2XRimavX6rp5JrwC",
  "key8": "4sHJ7TGWY7jhxxG9eLvuhUxun7SD7YtziaFp8uVjChiMiScmpaAiCJ4f9VcaDvB4YamR3YTmEUVT1pdwwjZapyXA",
  "key9": "2UxEM7d4MQPyQb7SzhRHkYUmM7q9JDKzMwpBja2nL4GwVchC5wEKiaadF5pAEMw8a7SUkk2oPAko9iP3eMBkCAix",
  "key10": "58mJ2MPKTLwvxMUXm4worEfu6irEjFGi66H3BfzKDZpmFPZSoHwzGRT4YnDznvC7Mu1PCDStNQ1R15a6wEPERbkc",
  "key11": "31noyuxRxbdVjDyX3mDjvT9nV7LZ6cDjCYPXNJbcYhCv9QTM1epdNuRBrk1NTa2AamFbBvGQA1k9dC8VmgMmNRfR",
  "key12": "6453VtHUwdxps37fbea4u9feS7w1HSeTACkzekS7RM7t5MgEkuUZYrdqHLywj8zVhPmpBmfCszXhdSQY5xb3zaRZ",
  "key13": "595bq2eW8pD6UmguwLsVpoQgedTqEdQWcMpSsXHec7SnzeBNikUQW9PLnSZmsNWgK3sJ5bC4Kft3VmiYBZV5a3jv",
  "key14": "hVuUCzg9gR47dzgukNDzU4VsCHXJ5RKNyDT8XyAATGgCni1PPWnhPnnSDCo7Tjfx5dYkngmtNfBW3TnnDcFE4Ke",
  "key15": "64jwr2ghpymXnE57tXUDTGFvoaJNtjKdKGckNpxLS3x7S9HevTSewSVydJG4nQjtqurcgwgeRsWNG3PEXVTXkerU",
  "key16": "5NWgzW7UWXtEx7eMWp5N5Qr7rEzP5MD2EjEspN9oDre71M25U5tta9QDPfMFbKRFeBkteVC6qFTZA6FycUyfyZwV",
  "key17": "JE5gnUJ53Db5GYJmc5eaCPG8SHQcoPvJeW7akmj2iaVZbgbYCakryN3QKd7YRt8BFMb1PZjv6JYx3cX5Ha8wNnn",
  "key18": "Qmwv2N8TbEZGjmWf26zfvm7SPDcr8mHWvGQufW3Wzp4HbA5pR7aTkVXoGGbSM74vJCKwRLqa3XLvM5Qs3nqBcKr",
  "key19": "3sWZdvUmK2bZ9fRqujgjZbAXBbiKZwiKxJYW1p7e4QeWtzV1tz9Euza5y1FkV6PWUQ66ECuAa724k8hNki7j7oRG",
  "key20": "5RmysS9jYPJL2PDtNyubRD2vmaugfWPjrydLcAXpzYCKQRkBiGMmXyJR75yS2NPzyHGjZnNXinJHWg6k4fuQ8vPu",
  "key21": "4hF65BnnR8JThUshSYqZJTyBEfLuKo9LF2HtCksbY1CyTgELgubWH6aNL6LfpgCoyMBF1JqWR4cNt5VuvUurtWRy",
  "key22": "2bHdPd8muPkG4kdPh12UaiXaRxMAjZq9jnYjyVZN7aerz58CwEqeSgTikCy8hw2xsxGyfBhHVn5d8FofR4VfxEDS",
  "key23": "6RPZiXo9GkWZSMVVCaRYSPgRULDSBHUnEdrQwA8VQeAgNKVgwbFufGSUN9DA3E1d9hsNkWrCsBDbLHdRhYvqd9i",
  "key24": "5W8TSVLhdVnN8oKnuNkXztbMYRDnzNong5JdWqhhtp2qnhPPd1Pk8ihWs62TZXq9tKLZZ6z1eaSwiTj1wq4FzUAp",
  "key25": "4QwhahDWp8Sb3vStvNSsCZdfRhHWj3dR5VAzpbB5oxi6sWGqCLzUmEVJ2HteKitKh9r1P9swcf8MdMfTAsaNdNGo",
  "key26": "5QTCnQbFc9i3dyUosME9rX46YfkaoKAmQuh5vswCRJUmTiv5Wpe7bicsMJ3WvZB3zevdPTpkp1qVDn8QivDCDJzC",
  "key27": "5fS9FBakPZZurULSBNi9mgCEhMTipknu8FmiWDwf1RorvTuA5CeLVpGQxQBbMfKNevwzwySxahaMXS6t74mmcQF5"
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
