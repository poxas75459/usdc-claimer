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
    "5GRwRu2a3bmHw84QEs3QxJ5pzKj4PheYEoTZRJXetfNJyCXSU1gJxXd4uLNqK69HdRfsP6wS27KhPBP3VfScHhmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y6LpP6FQBtAYP1jBqKtfqrAU5zF5TQsQ9A6uMMJsQPvCs6HT1KqrKQZ1cmjQfkY7heRfeSt81c6vEAausegZGau",
  "key1": "2Lfcax7XoNXJZwzSxhA6K5arLoNynQUHrU2AvEbF26j1hTQio97D54bQJYvVBqpyiYGMJw3KHg1BWfuc2k5cYMYK",
  "key2": "3VHyz9ofxLbzFG5DMccLKQECD77mbf8YAkuPPhbL6aU5gCvcS9s5VKXxgnDnpBtoBYz6WVEkapw8YS6Rg22bW8TD",
  "key3": "5c5Fa7gLfxpaCRFW42o47x4NmVaXcoCBdxJbecyB6Wek58CECMFGuJzPctFM6jMC391UqeBLJf6zoGGdBs6FooLn",
  "key4": "2gb7R92zQW1UbyaLNPyhVkJ1rto4EiTuXFMnLDpTywLyYCkGXTj2WGGcjxx4wJX4gpuGmy2w9UuQm3tVt5MDMPvc",
  "key5": "3zAXuoySFjh5eKfeMCpe45i84ooa49jkYDoU1E3vv5DVyvyfeShgpZL2fmE3SjJeMNw5zLqhvUj86tmWHsi2jzhb",
  "key6": "xyrvkqPqFtJ462HLddEx6fptFZtdTTSnm7Wq8BuHWhzwNiQdDYsTiDxUyk3WaZdKKLmDCsiPM5dscH1Lf4vpNny",
  "key7": "46g1ywrqajH55Zy6zG6rt8A836Ks6YPDWkszU3UM6VKMRqnZSKYfNVrBF8YecitEYHUNQH5HafUTGivPufyzsZoW",
  "key8": "2fXCsigVpDWWJxtAo976W89Jgt7aga8xcaHHx2NU8d9H1tVzVwr7p9x96MqWvfLdVwVize1fN9t2Q4LpxYF4Nvy",
  "key9": "5XS1ncWfaejPbeTZAxveNHgU2cd69WUauj8oW8qdBmzXCsky47Mkd9dkZPL31sXGntfQfJyd7nynuPviT7R451xK",
  "key10": "5qoRGsvyTj34tkVUAG4XpmY9kw8AXAWMji2siDaN4zpfhgpX64Cepx4FPWxE31WQ2TzC56sKQgMKoWLHs2UB559M",
  "key11": "2D9jt5MUqY9vtZDtZfju5WoXHB7xEHJm9ZKK69nMFGRVhFhwL6p37Em9zMiWmAuknjMpu6WtMHicKPJNgAgVG8AP",
  "key12": "64KtoFKEqbHFGiogazF3Jr91e282oBfFPazSWJUhwGawSBpHTr1HRFXm8kKpL3pfGomLRAoncWuhTkHNEmcEL3GW",
  "key13": "5yFL9M763zDfD6saLmPWmiGrPTsXx9gpjm3aY1GKKNfbNoRVgEmtzT8Gcc1qudptVohnxqQRb1GdhR8JHSByeY4w",
  "key14": "44EyfUjPaohSrbRAANyy6i4GjyFWwMfoQZEj54FQCf9KtraP3JHKEJrEXybEv4a8kNAuzgLCoe8bKMfgjXRbBMcJ",
  "key15": "4AV31w4DBQyRqSPpK54PnoYopLpXSG3iWiLM8wFKszTV5xUfT6Zny2FtGH78wqH8B7Q3K2HzZRMfYk357cCWS21x",
  "key16": "HK3cePUGumU4Rm3ZykzHJraVxjzKtaSj4QTNwG7QunoPpTgqqwQAfRKFhE7QvVh3yDgRC8gJd63wjYePD6BieQT",
  "key17": "z7BCan2i6vjFsbDAZdXFyxTM11vSyScwHwnHWbDogjvnDGvdaGqr8Ty3tFWM1f2qpr4fFASA4iWWb6S3GkAHWFQ",
  "key18": "3MaE6c6BSwRTUtcTCKvUooYY5neYdDHXhAJYXEddNtvbDLM1xiWgnihMADqTNQrm3TNhmLRdyDCznJypJ6a4xrY5",
  "key19": "5ordYoV9acyEwdU5tpQAKpitJMr7LrsMz6ved3Hhm4YKVpWKA8jPcADyzpe2MT8PHkqKW6UxZXtqH7HcsGyqZhq2",
  "key20": "2VpagUJ8dGDdSx6wTnY7pNgZNodJiY7Xmbawf5jQsGF89eFTvTopuvpGRC4efJsJgjQWzhuhy2492i5bv5Vf7bJE",
  "key21": "4DY5VmsgYLUzdwJDkj2849772kWnQU6KTSyamgdH5DVSqGxvqAdw5UMEnHt1GwQYY5EJ4zBCDo41rT9kxNcdkFPn",
  "key22": "5vPbAZYZTxqMdhAWTsFGwiKQCrajXNygB2je9VgLE7dkoQmgYVzmAAAzDkgWekKRZ6ydLg2mCJVoQFQuF5om5v9m",
  "key23": "4xYvsYm7xAiZxcJ6uRzvyy9E33eC1tQgqhLkbzC42ciAYszDtbpra7hRd9xzewPtrc1DeNMdchu83QUvUsxXF2CV",
  "key24": "5CmJvNwmkViwk4FWjWsR8AVhDgVBw8Nqj6DHGcGpyL7MnQ4pdMpQDpoVYGbmTbQkd75YcKZPBtuytJsUdVHEhAEh",
  "key25": "zfgLVzuCPtygb32CZdNcB5oe3yuDXAyk2atesy5FK67giFBYHFfzXNRqhdz4AyQ9KHhPetby1iKUyHRvp75Dw4p",
  "key26": "5vtr5KCEDY9NMf8JYTa6syZX5ST72hT6GC3QFtj6deSGp5psNaFE8fCrTNRpzLTZB3WREGK2DRMxZLMEmPJKSaRo",
  "key27": "DHsSnDUc1rwhx9kRjDtKkFmo6WYsLTTq7bcc8jg13i3zeVJSUszPPtp31HjDn8SkGCkNCKTbH4RhVMU3DWBCUHD",
  "key28": "3uJwfhLPyPToPamh1sz1B85QGwqW2s7Y852G6zNaatiQN1dBef9RuHesmMDD5WrGbjx6F1igQpLs15nphZuyXea",
  "key29": "49gD6SQqBZAxAxW5S2tWuXLNj1JbzMMtE2Pa8qmZASUUTMwCxdK24stpcaGXB3DWsFXHFjzG42RvSHcsYxt7gFj",
  "key30": "592484gxfp83bFhdLFyoCaAoBZDDUTCY3dB7UZ4Xn3YtXYLgQ7rU8GvA5t83PGze4ffqFNAm6CYL6FwitiYV3dVC",
  "key31": "yr381HjvdQwkdqFqGhhEMHrCxTDpxy93v32kyczcjZHNV4No5FCwMhB5ZzfLmLrE3DqvWok6bRQu1igCozePtio",
  "key32": "5cebBGvFMgzhFDfv6PAEQqKnvw3FXXUoeUAgxdHvTNVkZ2UzwxqdMULWZPfApKWeErs2DBcaLfEGMJfxUJP6TTDK",
  "key33": "4Ja2qRFkjQHAoikwB1z17xznzdr5rtYYTqF3pEVigm4FqdeSuCtvMFMbBHHnv3R3uWyzx1KKukneRLwDputgjQaw",
  "key34": "5tLSNb8ht5Tz6GAKhcZfzZeo7q9nhZzdGwoqPq49XcfLZ3TGBCSJsEfHRDb4gZoWU7bbvwsDZCQ8YygmGgy1NYJe",
  "key35": "3t98MGcuFyiMs5SpBebHaiKaM6HSZ1NsUDhdSu7kaBYbMvKsa3hz3D2PjunL3ysJ9ZnRszQcYax4QXGJUwePNwpW",
  "key36": "4wfJJPXBMrqUNK2h9KQ3ikXqKGvC6r2GmonZLn8Z7cT4db77ENPWAyYAB9tw576pEbn9Vn2XCMa8d9fSQPJn4SaS",
  "key37": "3xN1R3W8YHx4xA3Meca3JuZNoHrNcNCykJMxNV2VGNB5KGN6Lk4DRjDjZ43eSrcPf8mqDX49fS6oPLDWkPrdBKBr",
  "key38": "c8zq6Xr6sbEPasT9QqKaeMW6o4zevWJvhd694T5H1wCHm2t6BdnDNusUEFcJaKWBhCZraiMUDRrhhetVqsQsVv1",
  "key39": "5tnap7EQVAMko5GxJwJPLoGrYSA8ZDLQHKNCf5xcnyqq5CB86azRZ78QdKUBkXWgu3HyxZC3J7QTXdqpP9oDCnWL",
  "key40": "pA3xd4YJ1fCA876Z5RM4Tj3A2cNXWB5YEtmvC49UW7EULwwLEDfaANyAUFWDAbGoTmSdw1bBhiTK7tgvKxU8hXZ",
  "key41": "2bNbdrYAiKMP2uJi761uEYKviQCZm4dSxK2kX3r5Je6X1GMj8r7vbdcbNnKamyXR8buKLsmUXGDdL7ZK8v9XsLfs",
  "key42": "2YUj3rXEWtb1Kavdk8MHgnVjjYFfYR4g3odpv4dcX6FzdHEPi5M1iPiX2akbKuDSUbQrcyFKbyNspmtgBrPhTi5Q",
  "key43": "3u9hNvYnugZhddjyb8wPpG8A4WjYjYzTz6YuDXKCYCCAxPcupzswxRFcxMUmN4q3599oKQXXCyBwMu8FRo7j9eEx",
  "key44": "Smc7dkNBP9Aa764FdN4Dsx3VuVmGNibTspgot1ADnWTzJVAtUJkCmT3JkZY3xLuVqZUMTWEzcp7BP8AiQv3J2Cz",
  "key45": "bWDnUxBEMp5jw8c2CUbrjEUu6eZSwR52SqSy67WwGzg2NpWurqdAqRFYg4oTLMDjHvVzpQf9JHT2CwJuhdUTjZS",
  "key46": "3ah4Rs2ye2aE6ZTwv48ztowPKG7FJ1MSTQDzFdeN5e8i97Yx4FZuWcwUPB4gJ18rnNqNDomup3XKvcYtdRoKs1Tm",
  "key47": "2HViXRT1hz2hkWzvSCjtBz4p2TpMAsJTw7VyFzNKoc4zsqhpfZVNM6p1NiPvhke85mp2nxdMhUxGqGi3gEwqA6Sa"
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
