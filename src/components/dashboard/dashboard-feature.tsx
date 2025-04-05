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
    "3UF4o8A2NnahWsxroLRj5kkH7G78fM6QtyKEZCaEaqJoZ8zVW1sWQWnfFpVr1J7BK8ByArZTSatYn3eEfyVfei72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mQWwNHKpZSK2AqJSuXLKiz5ajwC3sSR7HjPy1EjYbNEAazCeUc81n1BNr9HifvQYLeCcsTA3ST2FQnNKSzRB1vE",
  "key1": "3oYoRjExdnzESH4zu3d7gy3xyQ8u9yVgth8cLF5cjts99ECivBGvF1yPGhqhL51fq4D8u7p1z9CejkE6axbe8Ym2",
  "key2": "36aViWtALgT6X4HW8xZaxzAxD94QstmajEnhCsZmeN3Jo7vw2T39v89QK95HWobWWYhr2nNfHSHmGJXY9SJxZtQp",
  "key3": "4vMuyQbVpFQdTFWEXVqf2EUN9TKLgMfuamSGx6dGu4FF4VG6pJkwQArochqRjnLq7CsudcKHJLuMdTtq1Z6RvQJR",
  "key4": "2NxrKpGUobiHERgrkNmyNKFMoYVDP7Lszk7g4nGWKzr4DRzNQoKy3wLn9HpDMUiLUmBnd6BMFsc4WGjsL1Vgwj1E",
  "key5": "3iGqGKPPTBTnawG9xXuKDAFNh4hFbuYqtGDpxaXuGwJ1TRfeYeXSZCXRX3Gz9Vg5kebZXBijSb2UbvFshZ5Qm9HG",
  "key6": "3YH3oniWVGpChraw7TE35HFjmtXr4WXU8g1M1oSPnEHBStb8hkZSYdgFQHLtHNHb77zFh8CGgDLbMoTW3ZmpLxKf",
  "key7": "5hkzdeQ3YAAHAkTW94k8TEinAAyJyfZZifavWn2PC4CKNFsfyZpw1pKDXLbrjYNsL5ksuGjJNcSc1nvi36dgdPE",
  "key8": "54B6tWp9cZq1gsHQEhmyRyGDgRR9sZ2L43RoTzRJemKoascM46yeDrkyzhENaKrwavGFMC2S9vHuUWvcpqWJpUsR",
  "key9": "3i6uVRm5BBneW8iCnyur5PnRYXYsC2QhK9wvK5G9Yct58beaFaeMBTzGjSvAPWU1BHLGyMrCPFsmaVJh3dv3VCBk",
  "key10": "3cq5EZRYH66aDJoy44bhcVg94z8iS4kiMnVtrkC77wz81FaG9XbfREpprXJWU2fDFKdWisDcjBBqQYEEPrYGXEFs",
  "key11": "2ZiyXDt72CeUnUhZobtd16uBw8X4HG2aVbbcfxTF6gU8xpKGAxrHDzh4ZESwWrk5TPbJGPx67AiFTRbNuH6qX5qC",
  "key12": "3jrRuibxhEc65F8sethehYrn3XCKJmbG7JqYXW7PGhcdiFe6pkB2PWcA7ZCKdRPcrHrbWVb4FJPy9X1sUy2CsvYt",
  "key13": "4vCDAqwwQVeRNerQsJrMuWaJGcGMgskmfd64spNVkk3fxCnbCwAWKZFLTtZD6y19VY3PDvHgJa4hU3ndMZHVd8J7",
  "key14": "4N7hgcnWi7CTwhm4EbrRJk1SSHzcgq6FbiYhWDWJsZr6yeY947Kco5vn78T6P25V4JLs6a98Xr3MyV7C8gNVcZb2",
  "key15": "3ZN8Zp11CkfZm7AqpnMrnEz7QSmmuxXPVSCUHodwQfQj7yZUHNkKr621GH9Htjwu7yMtAVWkBXy9yPkNvLyQjgFK",
  "key16": "5GcGRh4xWjpaLa75yLBMbv6KjoQM92Ey2GtEwaaqz2Mx4FwpgDYbcdb8kyY9BfZ87SwPXjdj5aHKw9xDV5fPTy9n",
  "key17": "56GPJbYQxa5XMChs3zGFDktwKd6ytV2TwMhqZpipzNF2SaFR9XVZPEQuGhDSALiVoqfXVhPe6vq2GFJGjqYdXjYv",
  "key18": "422tdZus9rptcgqbb7JoetKEcuBZuWit9DiR6riFykWJ1RoTkH14LaKvruBc9bsd4DjfWatyE5DfqCKPAgnFKDMv",
  "key19": "34xN1n2KofMca4cdodDb5ExrffkFYidfEN5YqztDixadhQxBepi9yQYbvCRiwoTb28Faxm9bf45uvbzNXfScR1ha",
  "key20": "4ADtsHACkWqMuV3oRNprevot8w4xbVSC34pJ8sQrgLU5xjojKBFzCvwBiN8tJzkSADJDmsCrmQXvdswzH1gEtTKe",
  "key21": "8tLrC2wKDwH7AGLizCaXviPzwSLrQ3WiC7V6w5N5RfsNEfeeWQNsyMDsiQT6dLqRQNhnwamF3H5mL3FWTjfGTU2",
  "key22": "4HpUEzFQRcFoPp4UGyvMCWATv9qDmMhPmbzBWk2swAwSTxhK8PLKmXFeFS4q4yJomN4jyDYrkuFFrVVPDFi3TLqS",
  "key23": "38DzHRh3rxb7dDCfKwXjSqY3PP1JsN1RxZEFa2Zrpyk2Mc4cmSh69zV2GrmrpjaFvX7gB49T5T3Xe5qQbPKQ7pm9",
  "key24": "3vrwbJuTFHDF3TLPvaBLWdTMRvEcDmibBcobUzxSFRfm7Ep2TVanZMpBMsXx9p5D73omPYSxLMCh973NzZ5JjYhV",
  "key25": "5Sv8GkKiNw7v5gHK2zz5bqTyJpCGRzEaFyYLNDdSgHesjzsVPdiGKifmxqxZzFqi3xonyeV8NnNyKkv4JLCL1aJk",
  "key26": "38xBcTd1P5aHjWpHuV9J21GZDi7zqhUorZyEgXvj38eM6qBxRhfxqZm1haHqoTh1BYfeQH2xAQEzvz2A93S6f2uv",
  "key27": "46H2v5SdyH1Hs55n74VV2xDQLQSus7sGowERswcyuqc3hJEaTaTuCxZsNngjzZPLz21sQyNTvNVcfCEh1MnGaCAL",
  "key28": "65ZrQRrZzxuENKqWYbQW6R2Vx6naCQHjSB5vVEfy5M2KMZ94uAHgnZes2N5P8Q6EejSt7iwtkyaWTXJQJkWYL4bm",
  "key29": "2Gnuj7dpnTVNZEiKkNXVcjkwcKqwbzwAeHpaawdpEYTb9n4D4cCwFzUitPnoA2iLtRm8f3eszfG1jnnnzGEqYmVU"
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
