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
    "2RKty2xZmJPrYjx5eXM9nJt5BLoTQjA4z1e8sqEyebJrbSod7N1qfZ8TyJdgYFY6aLvmC9bAYf21a1p9Zug4RRkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WtzPcpQead9pBJDW9nef6PjWdWKK2GkeyJWnQkNWuBfrNSy2g7BaQdroh3YoENwN8TB3WAP61GxYs3HWkBUwNBB",
  "key1": "5QeR4dZa5iiT8EnvHgcuRW5qLWPWPKo53t2ij7DcjR75iVba3YspWN7iB98iii5qNowiA69JFsPd6fqDN4tBegnG",
  "key2": "4z2vpqaT8bYenXATJiYQ3M58MV7ANnNh2JqfATkr4DMLN1XBG9ALsZuYtznS6s6QiuVVH5Yk9PTyYW5BG3DrRhuU",
  "key3": "nQnRXM4Sa4tugB1ajibjQx2Fzq6HAwsEUaXD1LsAefVNrMK6w7g42nREkhwqtjhFehDZ4DPiefs1LuJ9jL7NwRN",
  "key4": "4TW3svR5yrbdw1AjSrhFpPgc63VjwbAJcN7KR7YXobrLMDARgf1tZ78sRXanK5T64qj72g6UVuk8AMcZsjqYTKfE",
  "key5": "4xYCKtTCG9s6hDhvJf9ofye61DwjptzkSC7Fhb9ueeTc3uKXxLGtApUK2K15TgWLPsQnn6uvuJk8PNBToVyTyB3H",
  "key6": "Qe8S57PJP6AHzVeXhb1M3Fwcg32dCFqNyRD8ExbAPY1Ujmcv31Cj3R41QcvavfV77FFcCjnFbFtqef4h1kpkHH8",
  "key7": "5cuhQB4gZL2ntaoi3RnfjPX77YAe41N3oovqWMwrWkMCAWXmQC7VXenwvBZpFybU9yXKmbKyAh2khdb8zVNxmEZJ",
  "key8": "LdrMn1wKpNgoBcxKGb1rKsUDsRD9ZbmDyLrs8G2KN7UVsrvGY7rhCxjscVvWVgU1iJyHa99ArbLkG5aEzt4AWR4",
  "key9": "4xz4WE6VzW4pDkp6LHA7NvFoumEBwUJVm47ZvA3uZdiRz3vyVZG8ya4b7wzt6zVmopSMqCLHLJkkhThtq62vNxh6",
  "key10": "2qDvwPZxiu5dkFy7KGvx5mEjH3Uie3t6YszNF7gHbuDvzmfqmsh7p4hLydGjQ8KEGDoiFAxiuTqjHgQ9FatyS99R",
  "key11": "56SsR5J1aqybmsYbrsipHj8igfQ21kwKpPhDyMUkJsn14qTx5MTUWAZ3rca7D5zcRnbCtWNfSe6ABU2DEcJ4tdHS",
  "key12": "s96QZHaFvtMKHpa2mqpCJ4iibpTVPH1XH2NkAaDuhWxnp5aEUKdmqdWASHK4bEdLDpEAWrvVKoNEjiT5Su9Xfgn",
  "key13": "2C3rYpKf5SAuc5bszAGceYpA2zLZ9jCk7TeE46XHBq361bSatSZ5nRHgCyrvVoJbVXpyCFQUi1bbYxS6vi485ZwR",
  "key14": "5ec2KUDRYqeefNvQNVdu65nsDWwAeJcNFLZB3uUZSc96jgKkoNLYtgVXZQLJiui7B8DBibgEpvJH2XyevZ1pEJzM",
  "key15": "zLwnjbEiQGBMjUpEMqzt8jHUK3LERvKBTHue36TUFBhA3gPxSXCPxJeexcWqtF7hbzUhhhfVZ48xMH9KuxiLzDz",
  "key16": "5NribsM9JCSy5nA6vrxHSbhFwzarVi39KGafEGayWcGnbtD6TG1mMELisdp4d9LBrrChzDdmw6CrXTQybX5RDQk1",
  "key17": "2jG23ApqhfozTAqvrrTmrppey7txFtec6a29qZPUJTxGhf4QbCbgXdcdiaXKzdEAX9vNdz8qBWn2NyjUBaqA5Mez",
  "key18": "2BY9DrHKw9GG9He6unimBhbLKeeRinKNxEzwHax6sPK1q33bGFrMGXUR8dQ5zELjDpXMW7S6XmYZkB9sYTWrNshG",
  "key19": "Mow1TarLfYt33GzaGt3aMbDxDSmo5LX3bXKETyixpjyQEC65kxNNDBLupmRhfXfPc4EAU39rrSUkusYT2hJdmxR",
  "key20": "2soFoQ2ytH9MDaoGQVQy7nG2uDobFM3rydKCYz15k83VPXZMBd7fYqHuu3ZQaCkTt2boHEBUxWQkfUcFSiSoFx7f",
  "key21": "5mtBARxSJUQPmEjRuc2sJ6ZjBGDq9bbaVE8yhRP1HGba8trRvajF8kz7W4ehSH9Erg2NrAWqYQtH9DVcfpMndjWF",
  "key22": "4kLuztSMqwR78rznqCh2aCwb1LTW3AHxL7a1AFdPJLXQT3chHejLhTjSou6qSivdzndrfoAEJi9mdhhfZUKi4X8r",
  "key23": "5yZfg7ELLqasRN4AorYdGZjbctRReQZHa3rQRu8Uua7UyRaetY3WNcQ4zJu9EEAvAceV4My7Ferm2sQPw3R1E8cG",
  "key24": "2tkq7hdzbEZp7Z7hpVAuuG2jDNXiVZ8ZmU9zof4RPogYS844FTWM1rNoyAYcxwuqxtAq97Xfx3z9nLXW7g2f6Kbp",
  "key25": "2et1K8StQZpmRgTDsHUzNdWXAA5y4D5siLVKPMmW4mqBjhFDo8URAsNyhEA7q2XkdxiUkCC3hn9dcu68mSvtAFZd",
  "key26": "3fvwsLxjPzbqVT4mr7Mp4d1kEwmrvRjCRY4tCPx4xWh8538TGuPsTVk21oD6mR62zb13uhNBMZjHbR3HRZX6yQwM",
  "key27": "48A9hphSXBjFpTrG7HKWf6RMaZRY4m5SQ5Vg1fqprKUkbLUsy7b3xjyDNYpS6CtS4U2Ugb9jbE4DrWgjbCaYNVT4"
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
