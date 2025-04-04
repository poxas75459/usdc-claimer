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
    "3kqQZP4sDnKwEF7rTDAvZDRNt6RZZH7TKUUhRgCWDfa7ZqSJKo8qqXLqZqAVpdzYiZLkQ12nAVRPTUrJLWqCWnNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PkrT4W6bKv5Cyc9mYCLMHpdq6aYVkfHr4rfHHTmUWCramBX9eq7d7TE2jkNP7V66CxraMQPWrASofvji58AuABU",
  "key1": "2HnWnkfDZ3ut9vGy1jYcpWqj4JoYLDXtuBr4n45tdnrk1hURF8YHcMkRfF9hJW2VJuZPUqCF4qUbRopN9MKVf9ot",
  "key2": "5AbkyiQdLeVRS1ZFTzqxrAs7kmr1N1rix1T8ksUL8D52oGirKtJ7URpi9vWfmmSQrp9g5vQtYDAoQuB6psBkWpSH",
  "key3": "4YpAUAUSoEiHj8kNqNWUXS3r5xAo1ewumWiRiwtiLc3xrX9TmY4YfyMRihnRA9wfJgVtUVBXX2dxQ7hAcXuLRtRE",
  "key4": "wn21E9d9Jq2fD9AM4wfqrkxunrYFpKeaS2MjPiSR1EZUTmXdpGYDi86QreFiRivyNAYrmAkC7aFjLdZQWUDnrra",
  "key5": "5jWSbLUxMkeCLn6mZBZvL39LttHzT614ZinBAAQ2oczfiqnva8dVjDg9NmffPaFijuG5AewfCCwVDbi4bBcrL2p3",
  "key6": "2DdcxvKv2b2agKtCcj3Exm9GsVwChVKkDWGusipEGyqSWfoaqRkUNzG5Kmn9DnuJbjPUzYQNGZCDCwDbPa5te9Zm",
  "key7": "DucdsSyTitwD6eNFaKXxbu6M8Z1x2hy4k7sAmkhgzJSGEEc3Z2uiajMDDaYypXghfyMdg75wtrzmfnoTVHsA5b5",
  "key8": "vppHooaS8db1NY2QqYGUXHa5AXF8QwHwccot6QHdYPSBG7jXFm43mo9LTBdqSDbYWp1n7nQ1q5Hj9fbGTN7c2dy",
  "key9": "5zwz5FBRLpqbBPZXGTYeUf47gE5zF2CKXd52q7CD16oEwHpvLakE43hw9GDsXvyDmZhQrDeRiqge66KpFpNw95e6",
  "key10": "4mfBubn1Rp3DHzBZiPirV6SQ6M4XuTksYHxcqZDF43Nvr3kesrPRgJiVUdqJzEgqhZUjrYYwKzakJ4HdRjeD9xSz",
  "key11": "5K2Ukegy4FALKwRLa1XjcyULHnBSGMaU57gBcf2XeKNgSr78qP2ZAypiViUNV92B7jUun4SujT2ZJuvyDmGaeagL",
  "key12": "2QFeez2BGMWvp2p7xpZNA4DM651UTYSe55LEyjKYtJrj5W2ofmakLtzHKJtTCCCto1x2kwDUkPns4vsixkWCXpyW",
  "key13": "DyvPDqHQ4VhynLbvyrrUZYjiSHa2bnt2JJZxatj4t4Brn6Q8RjT4M2H7hzkMFPVzvE9tHTskofLZbcCcdpT4GvJ",
  "key14": "4yAZuJWcHGhLczvtrxDPdQZVv2SsJQmrTshvo44LmKxkyKzgUA4RwbDKCpTnttVFyYRDCyDcXik9jN1aDg7azdnM",
  "key15": "52UvoFgFK6ryhHqiyhxng3Y3tW8kuFyHS6UWCf63Zzo8Ss63VqVLcvw9HCNSZkD5f6enZq2SZTTzJRM934agcrwb",
  "key16": "4Tf7VEp4m1Z92VzveWoykuXEbuoAFtBLevzE5jnkLpYEUqPRtXv2bt6uuEBzornxLis6CqTnb17f4CXdnWwsstLC",
  "key17": "YDPu98LFDUQFkrsbsG9BB2g1K9FxLF1JM5h5SEc7egkNFtVyB16NM4zkG93bB7yuJasNZyFHGJni4v9PiKfRt8L",
  "key18": "4PcTcy1HrKD5kqSywRLhY4x51dgraybsutPw5mz5i1NQ526gZmbw3aK1E76TPncvAHu3hDmyo1RkSJSKoEHBJvZG",
  "key19": "3sAgTXS1tctLzYpQwCXcJja39fekFkMPk5kgabgNr63em1PTUtY5f26ziHXNZ2e4wRiF3dhMdBz3jcCp44rAQXks",
  "key20": "3Rrua4EXEK6pEQPUjc9KqmLJdM8MsMLj3YPU9yJGCutiaM4g6X7PrtQiqZWux8KzrxsKfbQMicvpvBxXp4kgE2xB",
  "key21": "5c5MYj8pXubnTfpW6SuUX581rh9ecdUznGYp6xwMVNSZdbdThuEhfFquq36BebRvSz1JW6MESG2AFaXkd3ubdtnd",
  "key22": "3QRPtcQ7CNwoyzgYaT67TgBBnKzLmUyqNwBC3R7pSUieeLiLMd2XbRiiVroSTjZmw5knn1hNj4ayviebgiNv3rRA",
  "key23": "3GB3YnK3XGd9aiFiyWNFqHGk2Psyx6NcPdXXtEfQVRAben5iUDYtapZ4WrgFdC2m9RnxoFVBNi8nx9Xm5Mvw6dTM",
  "key24": "vgtnzF4UG8ohuPadFedjEwx6SgaS6HVSuzpk6UqW9Rur57nKYuMycSafkWTw4M5eYTYHxwbvtmvq2eKjrktrZir",
  "key25": "27dy4V6rD4mmeLaffTZqjWtFoKL82w9Hvo2nUPp1BjchwK3SY3n2BvEpkosXTo9JdZ4NXPbvh1wUU8mGzwRFCi7J",
  "key26": "39rHPYDYEfxJogEr61gEkSXodZ5R4ruBaJNLwx3fZreCAytiLkBoeEE86tyKwKnPQkmgPa4LhYgtjQhbba2c2XJR",
  "key27": "5RVHtbyEnJ1Am4RjDrJnJiheRYeQhJTt5hTPN9kkunPnaKKwZxbYbitgVBBCsnZ8RJMn6V6JXdmdEEhwgqx3kqJu",
  "key28": "2nd8dT8BFvMMefFpGNtRJU9UtiCn7AykNv8iUEYzaV9Lt6ixY8iyPdhWb5abR5hUJSuSoVtY2fHX8gkBjPvHdatp",
  "key29": "3z288wRBLZDEYC9fmS7375cepUy5mpKnSoaCEVS2HE9oEuWTXaHZxbVtBjraGQgfbwNH9ugEErywPfxt2TNMcZBk",
  "key30": "4fFpLJJo96feLvdiX8J7BAM1TwZxbEJYfXuCnrP4pYVnHLiiizPY3TjE7CoUQJRD7hP34VBNyArjChpVMWnpkdJ5",
  "key31": "3PqEyTumUxkrGKTsL78Ch1XuacU8c7aR847fDBdRDGJwJx5UmPUfRye5dupgznTMYcBXoSrQ6hL5viwTY6wB56V2",
  "key32": "5fkJ8Gu2jxd5rQGTbSypmJ5dUmCyKsFAYgcK6ZyUvwRNJWDRsFADYkrFPP6HYrGtN4tcZoVGy3GHNaqrKSLkE5FH",
  "key33": "3h85z7rTPAN1SFzUC1THpLtq7oe1KwkTQWxSAZVEsb7YG36K5xwszE9GSKxXU3kTardcRaBzYibvncCuLMp9hXLc",
  "key34": "2YQMUCG9fALk6DHPA1rzKQkUpN8WYqxMEbVv9aP97Qx7LCWobqb2PbtUWNUmZ15X6hUcLRqtt2cE4aPSFgXG5R5k",
  "key35": "LjLzvm5Y5G4UntNFMNZsUqsdazCJJTVGSrNtx5bA8R2xXPe4WV6xKZ8Eh4vzqvkxdByGGSo47MUu1VnyKrupnLW",
  "key36": "2PHp5Vn7qEe7FFjSdrHKkLrmqQ4DNQmmoN5X53vcmcBqFGuDrGVJbu7kEigx4CbmYBhsEHvoGT21dxaqW4TJAmze",
  "key37": "DfFkHypcy1Kq1fv69Uya9npw3jrbFuMj8b7YRsYAPqC9HaV54EnfwFuTZ7417VTjzrHVYSxu6STUjWv8hZJXeXg",
  "key38": "4pxyCs9xfcmyr5CDT31MQ5ou8fmFs2irS98zqXZF8gLt74ACxKdgAPsqjmSrigxB6Ao1xHLqHqnj73RjEzjzF7v8",
  "key39": "5qZacoSuvCeRVGvWSotPZPJoS3F6nqvncodPjXc6Z3aUyy2vvdTKCmC4HXJXNP1ohufivpEPWYXwFFLrrkSmci1y",
  "key40": "X3cLaehErJ6esb5qm1q2Jvn452MT95ZnYRSu6uBkew7uhg9Gs1ynepW9iHui6htR8RUgXo1GswV2Tk1Yr4TdtUm",
  "key41": "eSxZchr8F8LBknnGHd2A8bfWLeoDnBRqjkLHuAwe3NTSogzyZgXFsnCm7ScAHp7iH5Pv63kj4diS2cbL65A8Xvs",
  "key42": "5RpNxgi5KuWTgBvydSHB8NFMYdrnZdBwCjsY813yDANxtgmdmpNdj5XaoTFpiWWVHUdvc295AoJd7KgdejbMy1w8"
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
