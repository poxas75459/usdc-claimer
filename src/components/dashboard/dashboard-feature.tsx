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
    "2tfj7YBvpCCViGmSiHuPgzy8K3gULisRfDbE54vSCVgzvEC4CtPUCkDUQbXLS7cSJV3ET9bY1UXHAUw8UDMq65zJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NVV22aiW5txFdM3gjWoUBmm4iAEYqbk3S7cBs4Ant14BDKLYBaaE47YwQ43LqtnJt1vG5hwXEuKj17DbyUZtgVv",
  "key1": "3SVczjNRwBV7iFos1Lx99NjnR5WJp6NR9zL4fAEvT9bRVWm3WC1URCBPy6gKGqReeLCbWfPB8xA4CtL4eNGSBkL4",
  "key2": "5QsjV4Bf1sqnk6ZR8MYFDjVex7YrBepcWK7pcY6x51Kqut3XTLQHY74BKRCmA4zuhVx2nkZTuErqgNkCsmJGFRrn",
  "key3": "3UvTHVRGnM1Lgw9dUadcuwb1D8t6Q4DoLComVKAnGMXi5r8jjRCc5z7CLdinDK6TcXeY5arixokmFfroWQ8m2jPX",
  "key4": "2rpGMxZX5AnXHCjcDJRYP8MHg4cSpu1FmdWtZodGqfq216dQ1rW1fEBrdAygvupJsr5u8TmmgsGD1oJeUoLv8Sai",
  "key5": "3ZQ8FQrhUzbPF2ea9C2FZm4ptHhRXppp7Vc8VWQs1to6xqrFxfRkZn2E4j35mu6M15bkAuEuYAPFYtxTEY5t9wr1",
  "key6": "58cMasALhJr6DVnzq6jJCwiCxjSVXPQcPf7r3h9xNSJUx4YAHKrjoudk1Y8yVAe65GECxYiumYnFhV5xyN9PSQtW",
  "key7": "vjnnsKrc7TpVgUvHstJ7Pqy2A6gCfTMsqw8jvtZYFk67tRsfdBfTXabCbu4d8WtpnVD7SeCMLsvEhGeaPG1ptQX",
  "key8": "3E2RPpFZbMmcMwqRcZekUCT4N4kcFi9pcSdEgvRFy4w98e8qVqBts1YuquPwDJdG7GCmAe1xVQGv2ZR6rBmoxFYE",
  "key9": "64AxuUvNjYsCJ2CdGecRCyte1TpFypotHpaSH1Ns2ZoJFurmLaBDriuCV3Dcd535FN4DRpCoCQcttsXD3x4znKGp",
  "key10": "3bnGWuk8nGEJf3P2f23upcVzD982XMKV19GbLMmUWp2gJAg4zRuiDfKpd9rdJGcpwNbBAf2ZNZ1z5EqmQQWA1VVs",
  "key11": "2BUD51hC4ebXs9mMrz6zifMEWc2VDQ58os9sgyBNscwebTopdctj2UmqE2a7S482CqyEfqQLwGbvE8UAnAgR7Vdd",
  "key12": "5RaWQdj8dyJ71SgwYWEjMNikxdM2WnFyRoQKmBZ78bhQyNZv6efY8gLCjzyZZYq3x9Cij3doQaSQ4MjYy4HS6fzB",
  "key13": "2pG8u9AmNU4iv1AcCZh6XF6HKUjL6a5d8KNWWUcWWDVodFGGiicpfiP8uc2vXkq3c3frJdbakosPLUqH9AwPfmqg",
  "key14": "541Pj7reGX5SwcUHpdyhwynUwpzyjS7arrVLApLL2dQjDHwMF6TvBCT3edLNmezg2awpvwF742qQsQGTEsjq6jVo",
  "key15": "5JfbB977oW5TrRc38nZdCd3tLde36GZZcLMDDZm6gjQx7XTkdq4umoXsjz6fhbnMyMGa68zirWkcUXFP6RoqPDzC",
  "key16": "2gTAbwsh3CDKUq1hEvQjiqoGscnsmKn7AzUVTXczUT8oZFyQ927enYBejbUjmchCMpTF3Lb456CpSXPvsC2kwWgx",
  "key17": "5PJEtDtm9nEF6tSR4xdsaLvnDqHbfkeiEcAypsDknTbBiNWkHCpYsJRZfWEHLLYrgxe3oCKFXngoitMnEKJwWMUy",
  "key18": "4BX4Fi4GCWdf2PdMouJaRxZ3EVqYPy5YjDYDjhtFJuTigxbukdZkGAkEcEPkNRyG8rLKiq7pNXBwfY7gUxzcb22V",
  "key19": "e3rhWjhrwqwavxbQnC7BHPcJyxbS24bsZozL29ErEShygsmq1DvjcpDGsyZacCixayx6YdGB3VhFJPjY1ZgHUmR",
  "key20": "5UQkZ1rVGc7xiKvaH5iHRasjKTRCqcUsV121w6Vwcqh6PTB2SGovShoLho7fyTBuhRpz9BQDRGgmUXMtzsWLnqdu",
  "key21": "42CifdMU8P6nuBCivn4d4B2chyc8WFGLJQ3hkb8XDnD1Qt5bbkMKZzTfEZUauGj4B3uJHnWsNGkheW7aCGtwQ6VH",
  "key22": "32Mr342nUfm1yt8iGGAz2AkfKynguo6ja5iXMaXv3jiLiQcRRkJQ6fqLMrfih2NHGQ29a1WBWey1NNBaaovTrmy9",
  "key23": "4fA4gfDFKM1yqzABDwqEfUbnHpD3tvkyajVt4UU37eSJZkEZSVA76Bt9JeM9hQ8ZZbBEo8n4ZxYJk4UTpfKEZuRn",
  "key24": "2hkPtfruteJ8HuLQGc7KPxdd7prYq6U3m8Qof6ucHX9pTWUCcecUTXhAPTVUtwDa6UBWDK8RTsKFwnBp2MsR9SQ",
  "key25": "Fg2auYTuvpqv51XDniNgjqx9Dd3J1dAsGFEpHkCFTnn8b7ZSAgkLDZkxgW1dhQvK5YnXLfkERfvrnFsQqDUqhRF",
  "key26": "5WZExscKFxvZjGk4PsHukLfEasmtUyNquATDQfg2TSfEtnGGsQqp5kFYkQe6BTPxpvvE3L2ABzgoeHxbjmZwKVao"
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
