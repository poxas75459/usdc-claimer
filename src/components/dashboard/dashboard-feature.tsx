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
    "3MTLYYXJscsTHzf15WKZEAk4JbenoYMjk4wWknJ4DW35aTwysJ5L5FQfmL1hGhDbLFUJZNMVajaesofjpx2VFJwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bGF9Gyxtmy7Mb4ASv3Kq8wWmabHVyWkLKR1Gf6zFruK9n8izbB7Eg3PuZia62G8rS3shZsnBFdDczVpJXPGg4sp",
  "key1": "3mYiytrfjvhWm1jhyUQBPCyK3TxSdjjtuGC18uzj4TxNJfNgP6roDwLM9ABwCcs1Ey7BX34KjK8b7BZc8qk8g95H",
  "key2": "eJRfSwbbXrDYunFJ4u9kSe65Pc7x24UUVnpVxp8MxiN4VrnSGv6L1PEoz3VL42qPvC4e2zSa9UxuiRefqTTSFCD",
  "key3": "5Hr5BY4dpxiTwf4Uxu2NaTQD2ZjMH6bbmgogKrxfzCpYLXRxMGqWV8w2kZeZnJwygWD6Zj7sbtP533nE9LXrSwem",
  "key4": "4onGoTbo1XXjLEB2iQqoaz2WUGiFZ6NoeSQ2C7ARPkAk71K6WHBP2z3MYQV6sKx8pEYpakpBR8A8maucU1dzXcQ6",
  "key5": "CJqPQJAzimUJcwhS67aGdouerspDy8Hpyq4dhjdNkt4Gj4cME1g7p9yVuNvUB7kEsu2UToo2FRSWBSpQqr8LJJf",
  "key6": "3edopAgNavRenvBMEijjcLfbGVLe5UqgZUW8yqY5L81xBGRbCP8TaGGaxgT1fmYoC8otyg5NTAxjJBBtmFNB7BE8",
  "key7": "2SiVfXbv5EKCPUuHr6sLK4n21UmdQ4hMYxfyLed4VRsnpkyTUZcttFwbUEnpvmuZPDZENWeTsKj4pMBFEeq2P7Kn",
  "key8": "3RyDv2pRs5y1bFMJy5rRaYHcauXSk4tMQN8vJVpXznQ3Qc3zYCBtaKKcELRfGXPZ4Jd2WFKPM3rnqw4hto7t4Hwj",
  "key9": "3rkNpSivg2Jy2ZpXVrSTbGZXYQR9ymGVgbHRjDTKuUXCWnV5vb4wqc2cX8kqWK4fGnXdpnCBQnDwaG5S4N1rtzGF",
  "key10": "3C8HDWmnGLJEMLyuD2Sjb3XbP838ch9B1E5TGRFQUuoya1mENWWpcDEXELhK9cnqFTAxxXctqGewPoeM2CFu6SQu",
  "key11": "66Z3gryGsQNLdtcdYkpbAhNfbjYku93XFDGdbmjNdDxUcnj7qFYZA27u693GpVHdKHxJ11VeXynF1QhaS6Yv7aUM",
  "key12": "2fbgW3JtkFNXkSv2n8AAbcL6DvZXz3SQa1g6AHD9FfzhpB2vzd4rpzeVef9XasEj9TbADzwsnXHGAJm923UDBQGD",
  "key13": "5pokjQ5mSRfvZmRP9B3wig8ZMPiyCgRZV264rSVjMwowg1X8ueGYkXw5sh8pwQdYyt1vjewwHTAv3Q3CCF2KVkiV",
  "key14": "3svBYzZW9rJnmakxhBji9puDyoyYKN6mSB5xXLEkDCxaYuCTLat61X89AWJDofcGzxQArzZJsgHYQE7YRrvwKK7f",
  "key15": "2g65PBrMqEu8EsprkGPgCzpwAtaf8mK3kY6V8L5S1Hie171TwUaqi81Wj2n6yuqcZT6G39k1EemagCs1gTHMhWjV",
  "key16": "4aCkozXNBu2fDcwwv9cyTwEac5ZZcxGGJgajcw9sCiqC3QfYeeUvUTmUirzhwkRkcGCdUn1ahQds5BgjeUbKgq9y",
  "key17": "5aBuom2rZwbqYUm8biQTaC4THkCsBvUeMpKoJcAQMtPUd67PEGxu9MSjMSSnXVsNPt1VFmxVd4Liukbj8xHnVaGj",
  "key18": "4JCbCXd3ERmraWGjv2ZvTQRuLbnw5tfTq5QZpqEQA1oVSgvnjmiTRLUhJhv4PvkyesrqoAuS3kLKLszvH3tX9GcD",
  "key19": "2LZPvXPf1J7t29VP6JVKeZaCBcTPYPNYaw8hUBUwtSvZoFfh4wfPGR8JadrAGon3Jr6TyTzHTH3Qyqz9yGRiRtbw",
  "key20": "5ZS6Si9VeA2AXmi3gyTjUiyYD2YLZpGNHbKomtA8sh4TEoFXR6mKqWezGyVBmTjRszERjhtb3FxYbWgoGedEy3fh",
  "key21": "3HPv4RwVgcn72UYSkPE4x7d1hiK1qZM75ZoYTVDExe97JXMCjR2exdPF1J6i5X89GqEpkC8X5Wb3Lops4Kw9ZdQj",
  "key22": "47YimxvbHMeVoUHCMV4yyRba2ss28bsn4Ftn7qXF42Y1WQTUC5WkdAVgVGvCmkBzaoTgcyeYqdKCUpwP8t5cSQbx",
  "key23": "4TqkMbCu8kLkgLo4QP8jXmtGfHM9mP7iVPq3bUdTQdGLPxWgHXE7BXNVznZBbqReXknYR4weUHX45qmnL3YffyvV",
  "key24": "4q6FP1qqqfuU8dMjsTUdryXdq19ra95MgAPJ6ZyFgXJsZii6NmVasnEBwd3ccLEtLbLP7bA9N4iBVvKQw6MzGSFp",
  "key25": "cqqhNLZ8ihnjvp56vs3e5HYSKLWjPyrwLKNRLMz1HPxRbbJFGYLQxp8xAYbgmmU8U9EfHyBW9ijkFSudnj2Edp9",
  "key26": "3VTm9CXBLVHcDrZ9ah6y2c6hs2jUWLCBCvyoSy5fTRqaheFQeHoCiakAW7TaG38szZMhrzK77oYgoE9JXSDJr1Hw",
  "key27": "3pgz6FBFLhZJgu16BTHovEVmQd1eEKGtUQZoivkVCLD7RtFhFNWeMGJcJqHAZyD3KwpLQ5CXXGAg33AfEFqUfCbL",
  "key28": "5EaPBoV8PbWqph5DR39484exZDAwk8ZUf6x73Co8eVm1zZC9FNr1RtcfDfrGLNwTgPafydUv3ppci6uGYmwoMHAY",
  "key29": "2mD1u4eN8S99ABFkkDHsTssfVmKDXQiNGwJhrFUbJYpANY1LZirZyCMt6qZdzt16MfToz4Wuznn2q6w8pu5Ggdvj",
  "key30": "4uMXmGfApgVeNopEwHYEzGKPkSvHv17pXgwcGJQVpiYRA8EbHNnD7SqjBvrvaLV26WsX6WtS2ubxMNTRFPM7WmZC",
  "key31": "Jx7oMk9Urn82pbbJ1TTFKTnyYAD6y2sj8HhaqAKUqMH1ie5rdwwMPQqxbTjuYbG9bLs4gdCDgRDHBnNGmTV7ztJ",
  "key32": "xL1MJtw6jP86Uvty7xTNMPvE5KCkGSYudanqsK4K1BNySipT7DJbmyCcArnccwcq4qqk4egiDqjxxKUrjCB5rGm",
  "key33": "5QNy3i96LUYairDy7WdbSbcqV4PBLaYZrVLceeAeDVpRcGfAodtLYKbT2HDJZSeGnj6fEJWPARPPertpgb3umiVi"
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
