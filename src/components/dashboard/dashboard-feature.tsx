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
    "27P45YoCM629oGWn629B9C19SnNV62iEcsVQicPEQJ5QrUFD4bK8RibvU6iAz4Ca2V8K927LHdErgrobmTp7zqBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aUZuFmqSKoTxorGxmGn8NrJ1myUipTjsj5dWrRLxefWcCLDzA3ZM5AbH8r7LanMiRTdzCy7s9hRUMpUUa1WSvMm",
  "key1": "2hzEQMnkPBVUniMDxvpxV7EdWLfSQ1iLy9DZcEbpzyNzDPZHQBE1zKMtKBhA3N2nTSseNbw3xcQeWkcx4Q7qX2VZ",
  "key2": "qgPJFYhhqA6Us8qkCr31nHbWpJqBx3tVbUBJMe8y2RS1jirUUEoSpENtDDR1Px5Pans9ZPQJ9Wvo3w68GQU5iXx",
  "key3": "2yxNHNBE896hVJrzwhK5Ujuoi7iCWiiiALrkYt8qRbiFxfgGT56dCiRVV1L7nkzu7ncnDNfy8tYKegqGNoAdJRef",
  "key4": "3PxGXCgxjov39r8aLxUptUH8WRr15N8n6kDwz35xzKFUxxFCHPib7m3UWwGz1MPKZ9LsFYFBQhYaeL71gkWmUxwm",
  "key5": "4YYLxQpdXzps8pTXGwPW4ze9eosY2PUAN8BfWyLGa5v627sfVm9hkbg7mosJQpiYJsdMr7XREQi15vUZ4ADqidCN",
  "key6": "2bVf3DKWqwMKxtkovirjc5A1STXeU6obMAhZwXBMT3f9UFu4nA8gxVdjJiv9AxNBu2PCJ6gCNrCEGjoYumWRRmKj",
  "key7": "Nq12L1yY3PDxSnmQu2wWuu2UNPm2ZWecLZyDhwNopHdjyr9UwQc9HeVSiRjBeM6MYn3Q7gySqiAwouUPA95yZ7q",
  "key8": "3W7TwXmJiaTY29HS3mBxuPBCuCfu7DNhE7s7i6xwkN1JRNzDU4MU6H1KeA4YU6A7dkWPzsFXtfYReG5Q8RHzmdVu",
  "key9": "62e2TgeD7MbiSKqSkQBwyVYG9mZriN8eYCoSAgTQ9R25JB1uzBLBsswKzsoRwfSRXtZ3RRVDmYJa3jLRZrBmaLTn",
  "key10": "4PvFyaY4pJQZUVJNNM3GS8D9jmi7jseJ53qQ7tupDM3phpQPv1eZ5ZB3eb4J5ByxfLcY1hDJ9EHY7sEQhAqbYfGB",
  "key11": "2EKZjmNwvFUCYUqbdAg3kSt9teYxCKMftbunMqpef7P3G66MiNAS1RAfiVLi7uqUzes7oUSMbWX3jJngmTKgfFwf",
  "key12": "2ebcMjJ9Pg3527jVNuLHg7XikzT2NokwrX7jj5pTQtPp6kZcxciM3cx4jYwQHQaBH99x3bi2bXywpL7HBB2HzJjq",
  "key13": "2NKYoDaGrc6mfkLnYp3BzQcx2gcp9wY1D3LrqrdpCiFMBHW94wTesQYe85MsKA61bpAo931Pr2k2Rznicc9wqvnV",
  "key14": "38EG3STyXdQxxAgR5Qd4WVUd9WA249ouhZ3FWJe7NMsQ3abJQxT3VsWwm7gFxTPCvecizjtQZLMVvS9kjZr4V9VT",
  "key15": "robsEDXoirYgdcqpTXo3ofZhmd4m3SkpRcU7QLW5YYSUhp9JWSHFNp35C8t3zswMk1xdL8XPtudwNnnEAZRSzC1",
  "key16": "VaV2nVxSL3Vhr6TANPaf4kncHfs7jNxRZxMDQNeAzBYJjWnkhwKwfgWyugnZJ9jiZEB4aYdUCWk5LFr62vxQXz5",
  "key17": "4CyN4EKANZcBPQkLRPA1pRq83cy4dh2iHgCr5AFnFzkjrnWvvamquM2vPrjD6ycy8pjWZaitj2LZKASoPfg2VsWc",
  "key18": "3et2e1UxNhRasov5tQtJaaT4SPz3wauqnN7UFS4WMMNbrM2oa7SEFtHtExPRfNqZHK8EkVPmuSjxa1Fch2vFry1Y",
  "key19": "TB2Gyngx6eRVWkRKsxZctM1mHrYLMUqvcK7cZ7jzU7cd99Qt3tCCuiZfpKFcumb3QttSd7inh2BbroZo9MHBKgm",
  "key20": "1DfNEt4YU3J4UDxymaFrVFy1CZKrCcXNPv4o4nRRzzr2pUZ1DCYEzWfFBN6CWncuPz7z87WiN8nfG1eNwm64sgz",
  "key21": "2pk4fTuadAp9k17CbsxULnp38UExFMbKHgm3p4MLpoagtaULoMCDkHWLDZmwoPCVPnzNM4PzwrYLGxm2jTK4aDWM",
  "key22": "5A1GKCoryBVV3mQanCJZ4EPDuR8WSbUUF8ftRRFHpH5j15sJ75w6pd4ZYwjRFz71kN1XoC5A68b97VebEqFdXoZL",
  "key23": "534zrFXfsLU885qKMpaMwszUFJudtDHeVPms3BhF92uvLYCVMxfMWpND8X6Kq5VqpMmtvPeFSyEi1YbDpfztHUHJ",
  "key24": "LnDmCVcfzoevX8xmZFbDvgg5dSFGJqSyQmQq15RWejqu5RBAbAiQ7V5VDcmLpNpGmSzJugeTi1ZdmQ3KmP1cH3Q",
  "key25": "61nPsDGG7c2skoeVvH6LLyhMEs1iSXbMsZSKRq2ZBdb6sFn5kdwA9wVb2NafCEuGhxkYmuRoNmBqaGWmi5y5TKsr",
  "key26": "2b8KWuxcF7Ntu4FTds3SftaG7xcY2RyWqbE8BVm6kR2cWh9niEarJMkrNDiCsGWq4FT7KcQNtL6TfekYnfwJ3qay",
  "key27": "55obWWpf8PFiSHYrbazKpaPwiQfW5fWCESMAKV1ZGqxswKu7U8dRzgLJmjvmz69nc6z6DWiNqPLogaFPrETqhM3P",
  "key28": "62u83LuXXj5sXEoNuxYVF5514ahDMDcgCmHYshQneboyXZYN9ybz3yaxQ9NMs7CR39zrN9y8sAdv7evf6zQwjqZm",
  "key29": "2kzCyCsoDm5KtLs2tpUZxA1tJVYKk78ov8rTCoBjHPFm5e7uJzPWiLM8moZVxgF22gRJbMkYWeHsA2nxCdsdXKbB",
  "key30": "wzUibyTEK1TuGajXhxioahtL2tFpp29sLynDuJV9U7aunxbPpacvvpZuytbKsQPeS5kMb92TdJNmVgu5TqSoeYj"
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
