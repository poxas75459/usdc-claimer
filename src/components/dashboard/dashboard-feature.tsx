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
    "2m374NEkkD4zN79KvBWp1rkcSqZiPUFLx7odc3Xqz8hZGj9Qe4HFpabeP1WPRHh7c5hBg4SsD9Bn7tQruv4ed85U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ayGWbFP1VQFFLPdHcFajzBzEVYjgVyM2b4rdiCmompQkPtt3m1oCeHdjzcBKLQMiEAVPRULqqExgeLW7bSXtVcu",
  "key1": "3o6owWpw94W1Bh8nwU6CU21pXDjXs33btsjKz6pY4dijqVYoArfSxxcc7v4zueAsrHwempLfbgQ9CQ5fZW3mrpaa",
  "key2": "4VsiVs3VCtBA3hWuGLmSBiT7Qvd4U3pSYtvk6dwQbUrdj9EGTBCCrSgMjuFP3Dnj3B699tNxYK7KhaC3V5VEQXKH",
  "key3": "4dXQMcKahR7GwYee7TybFTS1ASQfiTPuDUGVbqMKYRC2bjGdXQQcxsduZQg277RsmaX6vK7YxxyKn6DtfLJGzG5W",
  "key4": "2ejJYLL9EdoJ33mah7XSjWSNLYy2Fzk8J2SxjC2iNrNZur2baKFk3QVTyZpnAqctyfhgo2HcoXZTbakMUuZ7Fyn1",
  "key5": "3rbSFXR2qrRKosMArAW4CsW6bmoJ8nCSgv1zGkw8Q9HLCsBBooHTvqtm3vfV8q9oJiq8H9hCUHJQhS9svt48xXF6",
  "key6": "3Jsgf7x6rS3pMdJdF4Jdiu9KFi1cLskk9BcEkoqby2y1KUHxsqfENS4KcK7StZJRVaKkXSByoM5QTMwPMdq88nVY",
  "key7": "41Rq1S3VGX7nGSbbqUypxsNxi1iFAquSV2TSgEPHraFWACowWAKnAaDkfkjArnEcn35gvMsW3avJBEMLbsj7cCNa",
  "key8": "WBHXEPLHj258ZfxzBRv9AvdG8hGWrw5tdQAu4p5NmgGFfQgrz8k4j8fFb4eYjH2eKMXKi6bKP3SsPvJsLZbBYr7",
  "key9": "4i2FiWC2zZyRLyUq5DtokwfSR16dP1XMaM65wUiea3Fb34byWuuKeC62f326zGPiBdqrngTcvxhdhSeyRDp6fUE5",
  "key10": "4KwfTynDzFZoJnmaEYDBtnQ7iaTgPD8N9irk9L5nH5bYzj7E1XXhu9ts5DQdVn17MY2msjzPqzJm7sozQpEfKwGx",
  "key11": "4b49wKD7FR5ocwQwXuf9mcVr6gUQSQGtAR4wzT4fHGQSCsPgwtye74zC4gNCbzAvos5cT5emPMqKWPRqQT5bxgBR",
  "key12": "2u2CEyzsmRyLW9sze2G7WSyWfQvNCHSzJECPRtSqqPkMnetjLkJvfAd87Yh2D1GW1UnYraw6A8eWUfgv9Xe1EJb8",
  "key13": "2i9ADNKG6Ypha6kvgCUdJqsseDanFKpEEMnmGDe3UshstAYmiaA7bFEsNUCWGdkthA1Qn22Qrr2wZLuWRRRNN2tj",
  "key14": "2t188XUeFjvpdWhqUzBXoKFC3EkJiDgor42Lhdn1zcbVDH5tp28Y7g9XQMA28f2YLB9R9v3dkJSZvWZdsLkrR1MM",
  "key15": "nUXXaBTCd4UgCgYfYRdj35c8b9W46Lrbe8Vgs8RdA1pXTK3hsoDJECtnMTdeKFiQ2JPBFuBpnosLK7pfxLDhEjy",
  "key16": "6GDPXV5ZbsBsNTjqJdWpnmutZxSCAFSQhtJw3J7Ligak2FirS2dbgbSp2foibocN67ytm7VfMAFxbacoVLgToha",
  "key17": "sh7PVdowp5huMK2JG1byNt9eviFRHXoahq5qC3Yxkp3wzSQWTce2CAUuejuJNJJ1VsNnXXspqWrHtjKZS3j6ma7",
  "key18": "3LyXq1XVVqn86weBSc46gamuCr1pHdFnKHZFAzeBEL5FkQfCsPHSwMabcexfmtEv3whU5vXchGYqiDyWYxzgWYvK",
  "key19": "3UsuN6uMJTF2Dp3okAwCnWyKHNVtotDy5EawqyYFai4M3PYEvBfuXLJ8zdd2dAc4urGNN2NHrTb2fYaQ6jWrPaCk",
  "key20": "66Qf6Ge8QPy3AbWvAwCEF1Mm2T9Dv36qKuS1tXct12nxnkmuK68Ygt2hkgoLBc9361WsWWd6vAicnrC1Wbo75wWE",
  "key21": "2GWshcsKFF691XTx6VV2MiS5TCB39y3dXWH8bh7oVpUkpRg6NUqeCfPSqqKDB9CCvymZSx2FPTza7NbNA3TWDEny",
  "key22": "nBfztuWPUXReHQ6nsLbBENtycUT5UZ5GZiH2M5oR4qgvZdG6D5BpfcfamGBPcFmc1KucGgWBwGWsPR4XCGLQSyL",
  "key23": "4GxNTWh5hJ1uYHgQFzkaqq9uSjuaQxcPKD1k48tC1Hw1MtzvfGA9Zbb8PkZNbzanLgma1X384DebmyL4SSUzKU2v",
  "key24": "yHGquECgDamL6wuFXJqBbagaijBJ5XNLuHBmfu6q4E8G9AwL6SjcxKeWhPqtMkSYWSJSwDBx78BUEN4sHmKaxnH",
  "key25": "63MvSEV6ZumYaYept2Nm54fKbaWJuX7CvSpYqoh36UCuKQEsmp9M27zQsbEGA1Q4veKKzXkrek6qfQsBbVyhWSVv",
  "key26": "5xbdkucWxKXmSbWGamrj2tzJCd7dS6C9ufeAPxqPNM8v72icCS2SHJCfwd1vRYwfDc1zH4PoBX335wjJ6DrfyXg8"
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
