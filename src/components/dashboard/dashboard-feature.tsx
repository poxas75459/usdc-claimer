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
    "4MgqwE7vC3Wit7EXXr8EUHfGVBsieP74zmzoNKXj8XDwKPPeEy3WaErNHGU3BfApTZ1rc1SjKUKX177GdepZY7V2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YPuxQ5S73gV6RXdBJSvmvWNJJwEWRfQS2sGgJuiVDzoZzpcJmDs2ZUHKd7F32eVoRvitjfsGfZAfeP2TbV5D7Uy",
  "key1": "3kdisDPQ1CVYBretF64DaR1pVtMGjmkJuJ1bMuR1rUgGsZgBh7NjboDEK8sNuPuKtBVMbjeb2coNWR1mU3uy3wnA",
  "key2": "3AxWSvYD5HTRWVuZg6cEapXiNvs9oCxxxLEkPucvBxSxPXMbQYbM87rnfGhbXKJRwbmRb8kiVMnaPTk28u1ZnT9U",
  "key3": "58ibwwhxz8WEbKTHqtfwA8uRsteShspCtp93swKL1Zf29MA3qjjTFjSPPeL2ueAyBvxF1kjja7z5b7vaDrxTKyYS",
  "key4": "4sFsux7NV9vF2hLcvTroByWusJz2X1wZJjJReao2KMa8B3orrYGJeeqs2jx2GtGYPCF1gKucNYRuF7biFDKY8k3t",
  "key5": "49tZPmK1zyJcPuipUL9JD941kzxR9L7WBDP7BKycPtHnPAoGsNGVCHzmPehCyJozK83WSqvg5c42wMx8oHNkxfpj",
  "key6": "3tmJVFHB2zvycGxtJ92pbP3PSBKu17eR3z1nGhEXx3i6SnPRsXx6SQgSzsfwYMHr3CyyJJid9RYTz5veH6suTRH8",
  "key7": "5H8U36ppiSQ6pA1QxUbksLyh1iUu6KhU8uCnqNZZarNKMxYjfeEy1TG66RMwBa1ssHgJbVuGgwcyRdwmaWUVbEo1",
  "key8": "24pfZVVKpt4XYE8KWX84gbwtVv6aYDZx1YFvFfPBfycKPrw68oNp3oJ5pL1AJQrMGEt3xPcTAtHdjHSfWBCRcMX6",
  "key9": "3xQzsVwjstphs53QMQCUp6pDKauK3bW4aFaKbPAubpo8eMVjUdDDXS1H62epFc4wQisaPJXoGrp43APzgmBQcNZd",
  "key10": "4wuFqxnXtkbfoHyfrspYtX9Q9M7y6wMj2ubQkXLK4EgUJqq7v9iJiRtXGWji9oWfXs3zhKkZHtQMiWkRYjwk1N3y",
  "key11": "2y7kuoLwV4cWfHqcnbk4bDd72Kn6v2vQNtEqoRbUtr1zqsz1kUUiNa8vVv8FMXuGT1iAH7TMZTfPiAtVfYze25xy",
  "key12": "29JpxcgpqAma3ymBB9rm7oq5MUDSY93taq5Eeijmj75VL18C6U7xTzYhGvh7QBM1sXEbG3v1ZccmXBL3NvMLYVBi",
  "key13": "4jhcAQXu9a9UsxRYorFwVumj8AbNCw9FKAyVHGHqZAtCGvxM2YAD2ggHjPp1Sb5VSEGNPxJJcfBYVMfgU9htdbWu",
  "key14": "3kuVTKEq65x9DnAC4z1omyhu4uXX8zU9UH1BdhHNqHowNYWMGCpmi9UiEuFm8XHXLEM8WRFhceQkbQVMU1iP2MVp",
  "key15": "4JuCAQnVvJ6PpLZTAibDd6TZXi4792q2oMDerSkz7q3iYgrvN9tjSb1iww6FQgbok4BQLVxLzz46L8AVrQmGR7E2",
  "key16": "25iffQgB2YiyWJwN2zGgBKtmEaERKkAWMn7ZwXqtgHWitWx2zcrd6UpmakdWBF1jvXQJRZPaaZYh27sZezVEDvDF",
  "key17": "5Yw57BLcoqykv5CeezzYEZp8LNBRC3mmWXFcbEXcMG1ZEkL3nCg41TgLUoTcZs4WfMx2WHDfVgEwfEVcXbSWJx4r",
  "key18": "3vA6PcqrbXxaZh2xM7EYzpur5er4svxaRZWqvzpuHicm9WfZ1KXgfFn4oiZVdHtzWyGitWMUvFNVnQfPZ2uU3MF1",
  "key19": "5ETogCMzDCZsiegbXqt4TJDXjr3GQhVKctQ3rnzqPhKwiHhF5pECkcVFjKxqCPj9h1tHYfPht7nHcRH9aaULJxMU",
  "key20": "3n8aadXYXhLrxgVq1b1kWFSFhDCierCXTC4CHXc2EFkFu3aHdn5g9dB8QJepBYmnANNyJskfkovWGS77DxybiPwt",
  "key21": "vDuegzocbqB4Dd2E7Ajgm2M8D7WNFLd5aug1wKEH6bFdHXECgiYoSsTrSvqrovhUWoKd2eAQiPHoVVGcbQZKE2N",
  "key22": "2UcqtU9bFKd8j6mvZuEfDmWdoRfrrGSxVSvMS5N24HY6eHzDPuiLJgJveqfQcMQTi3JnyFWUXJjFe7FjSgK3n3bc",
  "key23": "d27gPp7AYB8a55pDU2v1ufBM6gx3YSjs3nmXo743WAAuwqaf4CfAY1LnA7nqKs433RGG11oPoEgckx6Cf29N8B3",
  "key24": "2TpgBMz224HmsYm2cbBdmY6K7tLG2N54EwiXAjoESZ7EJCVa5KUi8LRjjpSBtcdNfPG2zF12hnoYtAz56ApeWsjT",
  "key25": "KGVP9r5URhmjbNqrwbNMYU7FF39NoQPn8rjvR9t4Htj2tThFSnvnH8ZkTjQjGBkkyyDDmmTDr5SoUKKvMmuFPpe"
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
