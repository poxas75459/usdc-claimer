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
    "3b5jcrgHkakepAEZaox1stdQVbEEBnXdbQQXmepTkjo1XqbkG1Gcn73rdaji9xoLbDusjd6RfLiFceojfXgx5yKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LqwJj5QUVTbxmDgAFXMAmMGJyNvKsr74utnfyrruv5noLgdJL3vZwQxpHedzcrBDfJPzh65z4AsMs5A2bdd3Dnv",
  "key1": "3GApTQtRjYhHFGmoQA4WBrbK5KDihAQ2WixBpGpKYh6b1pd6V5Gdx22doHpDc39Q2XY42f5kpuCXJT2hiGjnA3aA",
  "key2": "2nfyjeUre2v44o25XfsGqbbNnZGcV9eKUFmWGND6rJjfudihDxftV5V3fUZLAYuYyGDRMbasjuQwYmmmjzhBAVKQ",
  "key3": "2Lz9aDj3Ryrn9TL3bk89uD5vQGYNEXQwVSGPxKBdjjwJGw1mMDn12pTcBE3q21SYAHPCyQVve9hydRfnuZ1TWAat",
  "key4": "25K1PLN2qrK2V9SdDopvQhqBqNmKttmio1eScsBzi6XU8S9jE3ggUh1CCzzbCQbB21AVM3b7w6ACpTiHUy5dErmf",
  "key5": "NwCgc3HtHLeiSbADa6faWSnDnYBsb5riBNzPaj7rDRR7oGhEFiHFhVzm3BrfXqkHZEzqXaa7GWarTp2LpvpLAGX",
  "key6": "4bXKGaTfV7skG2nhJGMFmWaAbgDuQ58ihwnT3rSXGXBZDY7XP97NMwPpPQtc5rvLA2hWKNnBBX1QiF9g5zgDQNqD",
  "key7": "3J27Qz5b5gSCLrX7Ttoo3MXJ2CyLTqMyELDqKE3RQFBJC5v3npQ2bPynoiMuTXwxfagZRbHfhy1sDGxXryM3SbnF",
  "key8": "3dPFqswng6rrasWL4vzvYYUTqGtaxWSo8R5Kc63GnPriULtFoTsu2jkpgkQuBYggUHHmGJ1cXNhmrbirSB2ahSU6",
  "key9": "3Jhojzo61im97S7EqqYyW2cRFEBrdnaFQMmDcZcHg2iqojwt4jZsYQEuFZNg6mhuQ2KnmVS5hJ9am933N3eL8t44",
  "key10": "3JjmW51y9JiPsHPQFrhGW4Wars98ZoF3bAMYj7JoEgQTqYBGb35PCnh2mokkwhu41HKYUsm2KjgZRHo8rqM7Mv3y",
  "key11": "53miG1mCLgVEVUG4ouwDRRxy4AkTcnsf7bZM8ANFRqqKpY9B6RJQXbfqD42FqmisUyL7BVwD6Qo6UV4AAaC1q5A1",
  "key12": "4zp6uwvtTnrLEdjzG5ZtMo1dWB369E3jxh92HnkjG7f2DhADuDgre1eVKqQ6zMD1cnSLneqYiKFZMAEDRJqhmbUt",
  "key13": "4pm5qJyoCywguA3813GotCF17h5YjVphc7GjunG9QW1bWQzpDcLrKnPZCBXndSAp8NKEe4ytettDun1zKseLBTQ",
  "key14": "64HjYFRLukVG97D1i8ykyjPQad7yBbvUyS11WAzUKVT9mT4og1RWrsQvubqa4HCEiUNq7LgcAW9qL5RhGrKtGEHg",
  "key15": "56hyjdjWe6hDDWyWVFHqYYRdL31cRjzQgf5Ji5xHuwLcbPrTs2gV3SvYp5rycqXeUFHgUj3vBkaGTLUUPayFzxZw",
  "key16": "TM7XCgvcqyUWhMoT7ivg6a2N3FNc2R868obwm5fXQ6rAdYWMeRk3iUMKPwABMMwSisrpawJgqAG2S8WG6qRUjaM",
  "key17": "4FVZbpzFLY6vnsFxxFzt2KUY23RTV358PfomCY637yEqm4UMYfUddgmtU3RhaB9wKT4tZHXCS8tsVCpSm69b2wxd",
  "key18": "2Z63ioXEebgN2qCgfQyb9nGfpLzWjRXG2rSmqxJnNKBkNfRkU12UFP35Fi2VS7mTy7NB2WjCFiN6ktydDKvqYoR2",
  "key19": "4TJT95rXLGFiRAgrGSM9eKLwokojSwqrf8QtkJxy1LV5vLJaexdjsRKLriTdzeav6DAceizcZ7z7FpQ5ukkt2sx1",
  "key20": "3sq1UD1NK9cabZzNCkBwowgd3WBV9nJefzagJ4vXX21cxjNr1s2VgcFZHAVcChten95NucYFTYgJ6J3mKWmxCyqi",
  "key21": "3Bb9QBiUi3aiA1xgy15bH5NCyTQsvbkkxVnYhcmBkchm7ykd33ZTtgs76wxtR4Dd2d666gJfEqM59B1T5XZK3PN3",
  "key22": "2ADAmsi24YNtxCGHdxXJ22ZxAinwbpp1PV4f1GRYGRo1yZhLjgVSoxkY8sD1tKGxGw5GytTwiYNLWGSpfSPmkyUx",
  "key23": "4uBeJeGByFbRadShK2biK9EfnBiQBusCsAKYQwHwcZgdX3hCixfoW4aoVuegrhYYqDDGhdf6uMMMVxB3g9QYZeUT",
  "key24": "4YqHWTvTBTsEyYat3S26XZcsVnZMSfQM3sGCPc8B9qSJ1g3j9281db4rwFTndcGgZGkSJpsK2jzhLR6qxdvxYFTA",
  "key25": "56HizZDSheCvTS2mxbRmXP7UtSkLLrBgCXNohF9hoPD8kBCnhq4xVrvZ8e78zWWhJqNW8YfUyh3kwptQcgZ2VDjE",
  "key26": "4wy9B8v92bK7SJ4UtH7Q5sWXWTpkdEXdNMj4YQ1fVZsW66Q6vUF9JhXHHmJ4zvfgAJGVh3312driYKCCRaWSWw8q",
  "key27": "4LUAfKjyJaVRL3KLdSkPxVc6hi6Qh61wsRFV3mEFbeNCVVxpUPt4MgXUootfNj7Gt5ysCesa2fW6XTzQG9oSszCZ",
  "key28": "3DmR9sh69GHZGwn2eV8wAn7dFdtQmRhAgWTiW74cjD4VXaRWpjCS9jUJteZPp5Na1zcKqZBiVwu5LhZswdyJEZbm",
  "key29": "aWoucaRYtYtLe2ojvVuHUb9pisvW1iH3nvRUJkmqcmmA4WQttQUkRCuJBoEjvbdMrSHRmdQpKUuyqF5Pd3goyG2",
  "key30": "4HT1LqKXFZavJXEVWE6QCRr1PEnecvXg6552QpyZSrvXQRQuJZ2deRqF3ZwPebg8zEng6ZRSvUHe5nBkSei7TKLp",
  "key31": "5gK31NFHdyUSBPqpKCZx9bBK4QpMhmxX7BgKNfMYLvENbxdaQTzHJHTQbCMvsQGnShia3V4iJyWKTYuwrW2gG4Nf",
  "key32": "3XGztzw3ixaAkUyHE8obXnQV8f3MceCczEASjvbxMCWqC1EyYGZ8YbzxjSduMV915sEVD7ph4wZtY1S9wU6sRQgZ",
  "key33": "3W3syjTdFq3uUSFdq96BSnmFcRJiRRzU1SNGe88779gsuzCfHwz6kjBTaBRTk8GYcrumpWsXag2R7AXustFyea6J",
  "key34": "63oWR5LcatuYT5bEBBH3wgNZm7mCmfi6UUDy79tQYWr82FGTGb1ajX37fyGrWNnzAj3NnrUb5YJ78F2pSPVcM583",
  "key35": "5aBAoExY2Mtjgp6LhLQXe5NtWkZZLaqc2Xzsbwfw3GL21TPmxs1wtYhoRcmjaKLgEsWNNciKC7XjhJt4BLF7124W",
  "key36": "nC3rRv6kCKnDNYZqoRRQ6YdmkZsKfoq81Fsi3RFzgEv5FSadKe3TBbFAEqgBk3UKxqTmXYp3bXasGXBzEopwjm4",
  "key37": "2Jq8rFCH3vgqzLF7rrpSrVQ5HFH1tGvUAABdC8eCeFk6EMjPRGEMzZpKWAat9Jbs8zfmYptaVzU3oMDGvvd3VcN1",
  "key38": "3wcSt6eVZUwHPsRhGLiEvtTtuWygJiXG95YQgLGVtcHL7FGuqD7rNsMsv6QANx74TrLiYaHQjbKNCLJ9WUGEazpL",
  "key39": "4ZTLmuXs4sBUn7XtGVFHFghA41uRFpMzaMw3efT92Lb8dNgTHrPm7D5pifMMNBQk6gyeWXxyAvGofie9mHpEgt4w"
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
