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
    "5HD5kayJWwUq94d6Ukj6q29fxWY3xwBr3DfR8sKdBg55SbLnZgi9smBXLJ9FWBC2z5bd6yCoR1VR5AELMAo9uf72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p6hPEceZBKTPURTRhFgDxhr1ZoBrEaZXxNYDP13XVqToQMZhxv6drQVkdQwa8gAxTHTtof534Pt24nopTnoxEiu",
  "key1": "2tP4oKuAXRsERggS27rz2VrY3GHZMNMrYYWtYhVQjG6gs5nL149q97dppLDXfVuMhfqrBjktqZkgYuhr9UyfYgCm",
  "key2": "3vMyRampgcqzb51DVXGhoChjGuziTKwbVzx38yQifMYc2WpxGi6hEosXtj4mA8poPUmxHttDLEZwo1sHJeTgEgbn",
  "key3": "4Q2SsDErQenoMaqFkUSE37NaACnknWdvUoduktUSNYZ1RTEZ5ntRMVKNDndjidHSstqZcyDSjycAghwc4HNCwY3e",
  "key4": "3ek1TPqr1voiJ9fUwaMDqTe9fcTGWc9RTF4dd795tyHNaVF64HSp44VbXLWbVQBkK6fd4tFUxwy3H9sK2ESVSW2K",
  "key5": "bDyrHwKZTqhMhvDW1KPDroKjJmP1Lcx9hBLPDjHZrYFraPmK1nM8JRFVHokpMWyvb24CaSU923WzsietWaf215o",
  "key6": "2Jt7ViCbbN1WgxAUYSecRDXwqTK6JsmJgLLKQCbMibnjUME4wy2cc7NwSeCXRhKtuj9RK5TggSZqh9RHWeiJJFCK",
  "key7": "66MYUP6Y7LsbTzQLB1WWvUf1aTR2pBVp39EaXvNe8x2XZ9nu8NQjMmTpR3g7PMSCmdfjJ4pczYvgwxFSWY9ErxyD",
  "key8": "obEmXU5wuBQRA2sXz9wkvSsnh3F7AJEM5RuhorDgedqmnyk2xJXgffyFDF5MavRgdz2k477eHzyVjJ3Xy8DFFWL",
  "key9": "5hQt9ZRNoysGohJfo5qJUpNEbwebbawz6eGdbxYek5DABuCPwPTppiBiiqw6UgLT7ZPv6JjQH9pLY9XYTfvQKAAM",
  "key10": "491Wza7PtxfAxrwW6J8MZwqwzi7G2ZJKzzkSvuuRAYTxnNkjarBgq6DY5nxzFqHzRVgp14kBA7UtgMjvYE6MzeuU",
  "key11": "2gA664w53vxd1pPmbDkbzT1ER3g5FiDBmFnqbKwCmWwDJk5sBSZCpSyyHpFJDZci9JieqmMUqm8q5A7AneoTxvS1",
  "key12": "5BxCxeHP4FBEdxR5qXrBTHwdf9xnRRkbiq2XmY6PZc8iEbjTRGhxD2BqSJWUhE5grkuLhvpLequFTxeJGNxxx4cn",
  "key13": "qS7yy8P15kNej6xLLJmLc6Ni1oX7Dy2syuFQVXu2dLkP2WM9BkySEdY3iWWVUbCWXqZm9uLPsEbx1XgWgmkpjVP",
  "key14": "3YcLxos7ArpKJDJ1GcA3vS6mokADGYhy9Vsz9SKaKeCQrquAcGEZpNeBjznmzGVmyhnRGYvxdUxVL7p8HHBmukJp",
  "key15": "3Z1qZMn4yCFjg9wBUdGifrimeW7fTBrpH2ZVEcZ9NVucKd1V1j9fuBVXCHXdYqfJm6Bxf6fb77dwbjN79J4S6c1a",
  "key16": "dosdNBmBvMuJX6D7wW3iUQc9Q3MC4v9ULHMetfkYFaiYxZqmETS449UpHuf3f8N16iCjfj83q5fEreR4shtg3c9",
  "key17": "rgTyCLmQaBWM1os5TLGPFShMKA9G24BwzEEYsHWb4GAdcAgbyNqPx6TiFBSvbBSZXi94JYUtd78FxHewZVq9FsA",
  "key18": "2JkXJZh593qHCequzEj2VWPriTe8kS771X31VqrxMiai49ngkBM5Ut5TjjKEVPX161ETWuEzwYZGAjZBZDKsNrdf",
  "key19": "5xDbd7bQpo8tY2oEdgytUj5bsBwBGB45yQfaGU17F9ugmYjkzvz2MS5effeznXKvF8p3fUkbvu6pXE4pLgU46Sd6",
  "key20": "53FCbtKCoh9N5jdJpgupXfbA49LWRsZTmP494mRyzRqoGxhQuAp98RZzJFJbpdBXW9UcmzTiY1o6pvDQgJ4GWyp",
  "key21": "4cgzvNQtujRRDeoaqBozesiLCeqBPwFnhbBowHTj9zBENeiRKCNAafRdrswjVTS4zG2A9nKBfk1hk7DYPQQErcnv",
  "key22": "2k9jHwbABMNoRepoGNvQSeYjPsgMaau71icD665X2TYpLnKWsmBKWKtShMRdfmKyU6iQ9keNGeM2UmqC46wvq8w1",
  "key23": "3x5you9teLAzKJopeL7E1udHXcE11QBXzf6hgBbRiyCEiPr7zThDC4cStCbGtmjEq47o11B7rEXef8C8V2yzyQhA",
  "key24": "4TASnLhYepad92KTC4poEZU6nxqxJ6RYgrmwzxsjxpH9NpWwNnsi2oZidxg1AqMxYZq782Y1Z21SGe7s5hvDne8H",
  "key25": "3BxeFwC9C5FUXKdkniU7PDgUwUW9k3ZrjLiCVYaZBEAmo6yU3BT8chgEWyYZQYLXJxXHuLrLoUbpu4NWLpJMk5tS",
  "key26": "4afsumcJiH7mrKNyw9MnNNTty2s1r4KVTPazaZJDWLf1HV2abhvvatdqfJYSqnjJe9VzMsQ7kgTyfs6pwiGMBLRh",
  "key27": "5Wx95K56pnUPnWqQew2ZXJVsVQGBh3PoUTrS1JxcVkykkMuWU4mRDu6zFBJ9poF3nDa4iZCzX25kxh1XipPqm8jT",
  "key28": "5QE3wpnu9PCsag2rR49uCbS9hVzcw1Br9pLkPaXJQHK4sxRvjEEK6gWUYzzpyp1oUCSsryAEmWK2sBLEwBWf9mSw",
  "key29": "62LcswXPS13rRmoPF7ZybtF8b2u6Pz3nuyDBjUMFRWqNrSjSxXSzLwUY51mN1F2b4FhkUv48YFBB8r6zz3pRckyE",
  "key30": "4FSyMecapLFDuoVdBkowg55GaUV3MnkQDKiagfK1sNdiLpB9TDxna9T8nDen7eN9J7wzRHxQHwbL2m7BcbFasapu",
  "key31": "38WPDPnJWDyF6h4HaZ5KP4ZMHYqzuS5s1jdq7AaXbpUq5s22Y9Zjb2rm3rFA8YWF6Jfvdijf5PbZzktSkBhowPvK",
  "key32": "WmwYbYPCggQiqMXBbFz1okDgzGoB1X4u5wkdyfSCsKvwF2L7NcoHGWwx5mSw1nfxQHsMh2vj48Xb6uUrZY8UzPT",
  "key33": "645h4XJFa9iQazcto7fMQ36GcAmcAmAsK8iUxTQLB19D4AeRT7ECnBSyqGvbAafJ4sxZsVk5MDEC4BCqjndKJKqP",
  "key34": "4XLFiBExxNq8p9PFjwQYiktRHaXozzrkjWECBu3Vf8VfVt25f71k2DQTFP8T9qJnpqkHwY4HnGUCky247YHiSku4",
  "key35": "3fxMLSoMBPDLGcDmho8oFPjcpAMVd4tL72eUHb7sroErSyTbymp7JHw3xixhXMCRnXCe6LAmHNRyBhkxiwq3uxk6",
  "key36": "2Lkc3vT7GGqAgLAbxw4re3wYwg1kzbF2BNGTQ3ocXMFy5r5qQt1fPqB6D9pdxcpN1ywUUuc9vKSSuMF5uuVk8B8v",
  "key37": "4sibcpwjZtkfhE713RYoYrAgephEiPUEYkSvMWKmuB6gwGWmd2vtZ4PGFKv9iCDj54Pj9uHaP8J3gjZAWUBUQPWJ",
  "key38": "2NWZZThZjpHUpDkY6gz2QBn6J7WgyTQxnKpFebD6dJNeP2Fxv39yM7GHHfYb5W8MaNAmvnXEJRGVB2GgCGTnDXHW"
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
