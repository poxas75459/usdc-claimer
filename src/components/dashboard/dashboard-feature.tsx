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
    "3h9dvh82fnNwVrzsm77QGX6MKPaMv4dfE8VfURKckT6Q8pJvruZHrwGUAMqCWZReVXAPXMMXkTkyVjoXQfJLho1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XQrYLkMWgf6va1z6hgps7gKBV7CGE8NXLnTJqSQXtBADdvfzjUCgKuXjsLttu88ZTHwED1sVNBea6EqhDTaA63",
  "key1": "5CsomtPFEmiWMsXs7XcbNZa2rdUVEcV5mJj2v3QcQZjJd4MRnWW98qyx6ZX8CC3rbvTkni96oSQnpXAM6aehKWRJ",
  "key2": "Txv6VutEUiFLe7NuJ4975cgRGDqMaEUo8MbzftmXZWvqi8BeFPis2X9h648wtSLL7xE74VkeHR74p52kDTyentd",
  "key3": "3vBzAJQfm4XtwKdGTbjAQXDQ2FdToCMM3uN4j3mEfdL1eA1cQ9WSjjkad7hEHbZdtWAzNSc4KwGzPnbDcfqMb4m2",
  "key4": "PT3DigcPaADfGiBrirSuLVdiMaPGE2gP9aKjEu4Lytm3JF8ses3rqd9NTHz2EZo7qQF12MfHCthBFUNuvYs1PKV",
  "key5": "5nXTMyC7qZZQDYHGQ6rRC4e3w6Xjgcg7s79ce2mrsznaMhvDhdWrAUUTG6qPM388U1wySm5y962THbpSmkAyeoqM",
  "key6": "KrHb46cn6EVh9CcbcYvbkCQyA3LeWDM3NdEpMdFH9dHvjxHTqtribSZ3zK4rUYQLZqPunoxduNZj2Q7XTscTwkC",
  "key7": "4cJuxUR9ZjywebsL3V9njRA8z84x5p1uFuBwzuUFWvc8xPTJPU482Pjo6PpMJ1TGJ8q7y3MF8m9r7qmm77JmYZ2U",
  "key8": "4GQSRdycmiZv43gjJQka8hU7pzyi4WYE39p5xLcuYo3PAFfG1Tq2pFtskP3ZrTQV7uPU4tPUAcpU34oYUTKKgJnE",
  "key9": "65Nxmtif14VGPntfv6Zc7sPm86BTJHQMYFzNKHAWiMAtep6s2yQZCNTmMrtXGY1wvtV9b6FZU5eCc4TBeAK5nPpP",
  "key10": "kPHAnp3tWomoEsGMpYx9WGsGj7sWxD5kBAFw3L8ciZQESnn197ajBQcmz84cXCBXtzrnU35MzPNmeU2F8gRdyhJ",
  "key11": "5XDKiyU4QpbLoT9kFt7zdzFACy4SVUncXu6ALRzRh5GVYUpH5PsXMWjiP4z3ezsH98RAnwnZJ9ZunTnxrx8wDQYP",
  "key12": "3cwhMzzi6yk61dd8n7h35g36VBrf7NKBCaxBm1naLQtXCtBYhQqxdJ8YHsVW5ncQVTkhz65g5s8We6TKf3VGMYzJ",
  "key13": "HGv6zuxnVW3T6S2NaDaSfxxAG4xkgcP4DQNw443VjKiU6Cd2SednMC75K9BArynySSKuUwhku8njeeYVnfonpDc",
  "key14": "4snsgCL2262CM6DPwkssYzWJw5erJsuX8UmYhAhLWWfXYBzjJ1BQm3LsErp9YkyyGbP7uf7udwKqnrNbTi3ERHSG",
  "key15": "46mQDQ6oqrRGXgPCPMWGsbe5gXRVWyeFbNQBsGzS5PmEAG8CaQfzjcV31zyKtXEnwAV2b24ubWfMtGbPhr5C5LW1",
  "key16": "YwMLJkc9BeU1gX7bcfKAKmuaeBsszTcjho9bwjRBe6dtVah22NfZK2xRT58MXL5LzyQKZbGuwTRiw6kvUjXE4Rb",
  "key17": "4cdXBhVEuthp3nVC3QwbAhRz6MPmaSz958XcftZa4Ujh1Nu49rAJ9KzxZj2T3f1pghqB6FiZo6W1cmwDBe8gPwho",
  "key18": "5feLBhvR4EB43gjarBi9UMeeTDTa4DgBjSZ2f21CvK9YEfVNdoro8mtZqMM4P6guzjrqk6cdcGddEiQepb8MM6Nu",
  "key19": "3JaikKPeMEcVWoRTpQAnxaecEZ8aZKqtxA2iohATUk8axjYQ5Vba9PpxqXqtD3iQBBGMeSJLu1SU5Bt78eYjTqMN",
  "key20": "33WcGTsHDwmXZzMSLzN8DYjXmzQdU53ZoFNdmFdeKYMCM3w2vadqZgT2hVg4ax3nNbKcdnJT4o2XT5ozEfz97DRV",
  "key21": "5AqfAvHoVt83sG8D2Nvd3JSRpmymg7Ue7J5CZMfLuaWLgEfuiVdZ1whGK53agFubPtg1CxB4YfyouRJvFEacsBi7",
  "key22": "2Vocb4rxBkyB1zWe9NhyMb9s6psNu9Fbyk8WSu2jQTeCjRfwE8bX4Er59sQPFKh1mCRDvtxcLjA79577Fi54LHti",
  "key23": "3pyiSTAtAw7rJfdhMiPKrB8zyeNqBiRTMXSwCPezuAuTdWQV7cvDpThYQcTjZKYu2DNU83ufegEauQNqKnKgXbtR",
  "key24": "4K1Pvm5jDvGJj8Yp1RsyYAefy4W6rMpsC7huM1yaP2CKFJaN8djsEnzz4WJ3NiriQ4L8Q6CmHm4nYpRPxwmohRrr",
  "key25": "2EEPf1rxwEtDbeMAUprQT4kweVQ6TAa3gcfYBk1eMbppwXXGqcQzQiGvhQfj7u2MneESDqQmsH4jU7bsoSN4jYMV",
  "key26": "2BH8nkCEc294ii3pMwq8yLmibEYuXwaFdqyFTs29QJarhYMBJSQc2zm6rEpssYXbyrNZKVzJm13WugGWKxvx5B37",
  "key27": "j8GXCuQUEjskfPMuktFuUnTduqxBPqdnpJcGM7TH3h6bCYub3m5TuQy5vgAVSDCWBBkHnLJj5ZozvjYWwkTWXLC",
  "key28": "48dhMcW6U3W16xtukSbDynD581uydSzHi58LyFRW42xChFqEnXiqqvzG77CQzqGJrKHNc84bV3ioxrxehUp21msh",
  "key29": "2HS9pPvByZTe8QGD9Vub7AKGxhcjHLuA2DV923bQP97nDuEBWH9QekbQdULdET1oarhsuTkBvozxAvD35kfhXk9b",
  "key30": "2GbMDMGwe2fyYdiZy3WUr9Ur9AZLHWYe3uj3yZorDiBpcm5Mg85J2j1HZ9cVCTmvchiNrF84GrhjkEF6TckLwouC"
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
