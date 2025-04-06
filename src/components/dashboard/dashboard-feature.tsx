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
    "qKniFnqEVNM6PszpA4MT9NutzABfoG2CUCYC39KJT6gz9dXVgM3mFQzVgVaEJBCMtqkV5SvvkynhbADcyUvkEPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bGZ7byDXvCV3YGDLWTceKxxAEGyD2PPz6mH1kP9cJELbYEUBjJ1uL8RqHsJnqTjicb4q1WGPbDRXV9bGv5ntf4R",
  "key1": "2sdEQFs177WwsBBbpD2vrSEGpTyaFVu6ujhCAjy7e32jj6jGKigNUp9WCbEqCcAz8ndiFUyG4FFXVZ3cv3JBJ8z4",
  "key2": "3RFJtiXgy4yssoPkgxpv3eKwPFWigeiLJRTFdhXSgCe86tJxKX3roSS5CAgD2W7DTQHqCdRgvs6kBkNZ2p2GsZwc",
  "key3": "5y2DCuqpW8KjyUGTgyqU7bgqGQ386XG4DJvkXAcbYX5aeZ7zYGD59qKALrieGawDmgYw6EFLfaGkjnbHvi1e99mH",
  "key4": "3VYTK42rynd5apxQ8JGEXXLxLhnxwrBE7HkBRC2NpWn3N8myP84djpLNN34baRxwo3VYn2dymRonqm1gNaAJPaHn",
  "key5": "5hdLjxTKytXMPCKMdSkTEy1BgzrzvCd3QPHUB2S4uuBhzoqtcDisoRYN5CBKNWf6boarGZzcZLTuNG32oaHBxyKx",
  "key6": "4AE74GaEkfK633T7hPUNXYcdmh7rawt3CV5VABgyu1wEHRV8QNFEuqJR1hU63DJskz6cnPAA14wDA5qaXnjGtKeE",
  "key7": "4UXhVSMeBwCzRn9qkWHoCUrcaJDh6JaJdmZmmSATSdpcWfueuniEMMm2RBTmRdjA9F6TsACmBLgDkHfZ7DWgdW39",
  "key8": "tC8GeaC31AZ2xmTcoMv1YsWsHPK4Nado1GcKcBrBaw6bLPLYfMDAzVAduYj6WLEoVuXwP63wq6ohU1mYkJvu6kg",
  "key9": "4FTvGjtEjW4r3Wbmje8e6hrFkeAJSxiEkdKe1iUkDJp6JsZyoFcHtF9Rft2QGo94FubiUjbQ3LHcik7vGuFJ5NTJ",
  "key10": "63bfPHMBfyVzq8N3DoubovzTJoPn4UH3e9KCjPWSBayLFjLtWKNRGUmtSEeiG79T2bRbjWARKC3MpU4M9fvWbKTB",
  "key11": "5Gt9wvz1XWEa64VkqaoMnUcFqohNGH2DFu5Jw2TGXGStKmsyhgwW8mRxK9WhEzKHpNom8UpbW9RUJTrhmZ7hNoud",
  "key12": "5eh3NaotyYRuSJwNsw5FqsVUm33ihXdAE79XbfTzu7sGeHrZjhqv14DPfKk4aQ1mCXit2GVxsjGCxR36TsHXsUa",
  "key13": "4RSg7HfvGkLk5qNDkTNuG1o2SorhVUHufCw4HkCkzNq5cjVtUaQwRGMDR7wP9yzDiqkEwHVpDLoTUXLE2xo4WAAE",
  "key14": "2mu7ZHsEq8MceCfS1QsMcEZWzD3vR6fwxvVMu4bqcAzGn8rwniZCopexUxemNviX5SSNs19xcT5qZp7PYQsxeD9R",
  "key15": "3mmAa2RHWSe7zvDkoXQJCSYiU362eKaG5kbEzFGo6K8u9Kf7DhYvkLXuyjKuZ91jm6E28n3FNdCVmYK3jYjX1cge",
  "key16": "5P23H9DpNfSeh1gQL9RGHB8RL7MpktxfXeyNzUKaiLDW2fjG9P1yvns5mWymxVQHSXWv2WMKM7mZckgXxDJdirHG",
  "key17": "TMg3fxgUEBfjbiLcGEhA44Ub1y47omwqTDpAVQ2tzX3rSzWBdw7q178M71cTRaUGZSBSVEwZwmu28eeFuW6K4oA",
  "key18": "2MwjNvysStEZMq18A6fDssmHcQzzNrUYxUaqkwvBWjDVqvcdFAXiYhkoFqYvpW6heh7SGqTo71HeJL6HcePzZ7nW",
  "key19": "5A8Bt6KdU43UBL6h7aNZbLoFBgSJVsPQyjPiaZCZmFnZ5qxfBhSpVTAUXYe1HN6d9YAV7vgELsztzQMF7L1GPAVo",
  "key20": "42gWtbzLNVF2KNiuNDLLofeKgb7osP7NmzVuaKHqhpViNuHBDP92mAn9fDzTgb74pFy4vssbm9RZQj7EG2wtYap8",
  "key21": "2iVkCGseyBCdujRRwAsnahzdRAmtdKKYXqRTXsLdLtHUiM14Apv6pdAQDR4JseMim5XXGJqKzsm31DnAAp37zKi2",
  "key22": "8VjcLva1HA4D7kVd5Yjf4uffNsDBADjsEMygap1S8BmWxsBPVPhgv2ZSQUQRWfwj8pRETp15gt78yqZTAyqw6RW",
  "key23": "ChUNnt4regYnxtCENnfQmuuwrchxARyG951iMkZvLyaM2eKVNcqxGa1ZqiGgETpvbzG6bTztcGxtCQLNWUm2DHN",
  "key24": "52J4FZcWwFcXo1v888YyELum2WybxFVFmNy22njobMpJ8dQWotFa41eZPDUV4q6MP92VWhtDeVwR4c7TT2b9KEVY",
  "key25": "2JpHCVrP1jwZem5Dj5hqJZ3NFuCzwNwM8mjTJtR6QaDGPEErMnpfLFeHjvvv7uJT6KJ2VjxECj2KjW4CCzWMNV6o"
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
