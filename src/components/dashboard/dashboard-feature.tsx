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
    "4zgk65hkb9A961WcnEyyJtJMuu7nxkqH7cpHMAbm72TEocjJGis2avqM8ZsvfoQ2hYuTsWNikwdU8CLFvwLpcFpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gmkXYGqfnTkzR2urbLSNbD7SiraiYSXzvKbG7qd9RRm6mTF77rhSnZoeRhkVetWSkWiTJSHnYEUiN6DDiyLqiZ",
  "key1": "2L5EsUHNbbur3pK8L5cRvYv73Y7rUn98vFP9AFtuRNHmWuTjM9BDmbTic3wN2GT6do4N7aRSAnFbfKDmQFCWEFio",
  "key2": "3PxvaRWb2oVMpEWAEuyhxQ4E5YWCHkTC9e1aXPvS4kGt3wXdLxzgG7dJGvAzdyxekRDDuq551WqVnciTQgfaRidL",
  "key3": "58b27qf8PVL3EhYDWsxuALzHKMQgCo9coMHJuGrgAehj8JexAN7ziXhTEtbBNEcY5dgDwGELj8RKTWma2s9GLjR8",
  "key4": "4ZS5GEv6Mw6pZF2vtc1sbyQ1FeBW1siz5PCWJm5grDP6KjQnXLFeNT7fHCdeQo6KYtymyVk1c3H495fyGwj2cHmf",
  "key5": "5kRXHxm67hEmMTvsUtAYCmDg8w2VoVeonwSmTYEqEcm2tCJ63cUBzqzfZPHB5F2aToWRGyJewFADHB5daXsc5rqy",
  "key6": "3gzfAtH9xBShXGwtngHttdDou6kQX7roTP4viVw6ePR8Bt5pTW1caT5D7bHoTBPNCs5UcspQg23XLQZbKUgGo43V",
  "key7": "2mQ4ZFrEDuMpUjKahevaAaXhRPHt4quzJbx988sLRhkq3TMDJ6HSqZQzDZeXkTSbucQ4FAXQGGLE1GLJ5GXHKi6m",
  "key8": "4so7UPSShk1TkSer7qY3Aj3RDqcr6BGddChnz8eamt3HYK2FsoB4PtACRksuB47aT8NdQKDLnFh1ZMxuFaJC893z",
  "key9": "2iVeu5ynTqBESPnTfLkKcbFaUECczPtgXCyjpR2bLTK9cYVADYhVqkB4KXZbqJAHdKqYgHJjiGQmn68NkhpzthXB",
  "key10": "2yvcVvo29eMTyqfEYYgcWg5CjBMYdVRTgNAqJCyZWo7JbhF5zNk4j7AsjgTmTzcEqFusEH8757ec9Bis5pb3miVS",
  "key11": "2KkawsKHb2RuDzkpuC8gW73zBiHbtfxSoxaRZA3Zg4e2Lpkmjsay34MFXHwdDWe5knEetNgPW8JT87CeaewHvgUX",
  "key12": "2hYgetRdjwKfct3tmmFcH9kA5R2txNaMQsTBL2sZZg4BtZM9N5k5Ps1G5BpoEyNMjByLXnHkGHMLUSLayqrjcykM",
  "key13": "rg2SNQfgWovWqgVQE2Tx8eU3FsePZL7tj28F9jHcRFrpgibwkdEoLEDkVtJJcB1rEtYhNdTarXG1yUp8BXRjKSj",
  "key14": "fVQqBkAHCxr74YLEq1aaHFDjm2LZGtQqcj4267ArjX1biVsyc8WygFEKz9tRQEex74CPCAVECqPiYFiMhPwttM5",
  "key15": "2CU3cP5ktMWYvjQXsSPt5Att1Bn25P72RyQc6NQJUddvqyqfWR8w5sbdwUGekpiwurKaBWQFNx46L11ars9daaH9",
  "key16": "3GXbP4nXjgXUeVNn4kVmX1pDg39WMx1fhFf26AXSL6M3THVzdvrxJwHciEP5mkdmUdSP7njciv6c5dfrgRvAxfJ6",
  "key17": "pRbhjNB7dYJP18SgSyCz9NSB8uWKrdQBjpJFGgopRyNH6PVEBLC3FxtWtna1EiwuuDuzNzLnwBnwZvzHdKrGCHv",
  "key18": "3AmwuoSJ3DDsKFBgcCHcPS8db7gmuGxbPt53bk7QaeePGFJ5Rn6oGeqZVazz7kjNsRLS7yNiB8c8gzw8j2fAt5va",
  "key19": "274in3fw6iuUkH22x5Yk2vt9cEttV5yax7WrThSd1PeY29CCiSreS4d8S2t7f78924Yw6dhZwDw8NVDo3Do364bX",
  "key20": "EHx8pok1QE9pUZpgpyjGufeVorGkuRTfnGSdWXfxLtrjAypbddR4b1V3Em8U9ffz5Pj2md7G4rStN5Agd3aYAzu",
  "key21": "3DEKUZvfESmTSUX6bdxvgmCe6owf8VksZr2h68DBmosGxGgRXH28Egz2DFzY2TuzJiSGo2Ty4VKciD7BTPRdfyKf",
  "key22": "3dFeFZkA3fLt5Lw3rVnnLGgQHxw2H6Vf88GN4EYPLVoYYLoQZWMCSRcwahNKozruC8aAXW8zZGqpsbSHSWYfPd19",
  "key23": "2uc1iTZgZUxXD1Nr4EUWrTRip8oGk2GnJ9WsPHHgL53Z5FYpa1hyp5G5gAbBqPPezGQd7SDFkKTBj46SeWY4sARx",
  "key24": "qczoepVhfAkY1WFGRc56RQuoipL6L7PjgQmcf39vkVNm2viqEhAbXi5vovRrF4hdYVyLGr6EWPe4LQ1kcQ2BSmT",
  "key25": "4yf5X3LKKmgnZoeWNMW9SfsLFWypsKTjGMm8rCA8g6Gw8ZkYtAr577a4pWzywn2V1aHt8deYAcJ5P9qewDcGmDDF",
  "key26": "4P2FvLTkapyJBiM9J3jbQym8qEKnzR6zQmdA9RQrfMiCzTs3tAwrMgoW589QY9UkD74rj8FYDKm22kozYzhPCkZB",
  "key27": "5Bf9Ska64mKVFpGxodb7fW8RpS7oqQTJAvzfstuzdL9EkfP6Ct5psMLsPsjXCkrZADiMdw1zgB4iGmQZCmJfDM2k",
  "key28": "5DHCfPjooG3jAXDZDyGzR5h9Btx8DW582syH2Ygg6vyd66mt9QeE6RbCR4fUEQ3RVNuLN4fxQ4LiHpE5oZnqAtku",
  "key29": "4mPR2raRkDgkWRPiRDETa13xkmjSQ2NhT8MSWmjYmPrN6B1L2U3APfApWjNjLzCLt543EF3K4YiXFdXG6NKXCaDd",
  "key30": "4NfWsPTYSRo3PF92JKiYRrUgRix24yQUmg8s8DZWVRrhAjxFRUmuRYt343PikL9jBxXc9UzBrEYkGZBPECoVK1ZF"
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
