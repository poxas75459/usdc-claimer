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
    "2CBL1VAcvnTAiL8HRpHQaQUYjAyYJbj4QFPdpGLdA7SkteZdbSGTueTgRfXLA2GLBwhJJ9XJff8d1LzRCUncQ5Ji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BieYZkSaGpvan3DBnZ1vk26ux1kUCgwQuHWMvhonszHAo85U9iBab4Ms5cR4NqHWwho2hYACVNa7XcLoAcUjNzc",
  "key1": "4Ehpj9ozjoDBNjduqp1fTZezqApZ1GEaB8mPyYQu5quWgi753BFtu4DzJ5K3h3S1Rgo8aJTKFrDj6TeT4x3Jk8Ru",
  "key2": "5HD5YVUNDBHQduqCxcjrpxb8k1QGL4uDQ8dvB7z45VUXHCsjeFEDYXJgVGJSDQveSUeHm7QCA6CoLwAzE3x8VnmJ",
  "key3": "3KR9k9mZX5fxksEra4cbaeJmLjvUpCV8kdGszrCsme58GTJJCBVP4v1YRA8PZpg9ah6GaiEzRiJ5xoFrD1bNQiL7",
  "key4": "3qN4C5W81WxdS93nop1fYFKgAgXccPnCiFgh7uUGx1AxsoXhsSXaMR7rTWpSML3HNZovMZTNq3odPvRvEaJbVnDz",
  "key5": "3ZM4oKsC8N8Uv3wyGvEv3mXWCt547kTGaUvzg8uzr41C7QoDCLfqfRJPvwd4bUGkG8HxT8gkbMAbzX6MPj1wtpVS",
  "key6": "32yePvAr2DYbcVdX3dTZ7aXAKv6JuBFw7N3H8qsRPhr32q1H3RJYVYkDbZvaKXDEDNn9sfaZGeMGR7TwYcALmut2",
  "key7": "B2aCBstB1EcRq9u5NnjFXuaht3oi6t1L3sT99FpcXGJKG1L2n3mGXZrs8VtfHifiuTouYm7JxPisP3YHHk7CQrd",
  "key8": "3dbzzgvfzPGXfnBFc7kAsA1ympE5ipgU4frLVCecFxmmFe8b6JSqJvqsZYmSEnmn8wuSEr5MAvWvB4txdpo9QptN",
  "key9": "5CotD5DpYuWRiPf44QmW4U6ZdngQZR2QSNCd35eTt3SXGL1CvbtFtCbZnUK7D6LLBWHVq6FGLghUgbnRT9TnADKW",
  "key10": "4jPEdYRorHHsqYVB7g4LrTX2Uy5KTcJ3DVWkoFiEvgk9voiUBBtkGLdDBFqiqo5FKirK8tVKfRpsGhVRRz7Xid61",
  "key11": "62bMi9CDjw7zqUEJWWKiig27F3jDBp1uBVz2d89a3tUtkcYmRibJoHF6KjschNQc27kATmWuXACeCkzBq4UQ6PAz",
  "key12": "4kcyUiwgos1SUYpiqWActvVcmudZT2KDF2PY5iLi6yrDL3qK61KLfYZuHouSNWNNnpaLVT1auKJmt46a31VKpCtv",
  "key13": "54qBfcMjsDyuHQ8UwNnBt5zvgamnbNierDmYQz2zUwcbvy99BpKYdd66dCyHLkyFim1Zo91zBzQ11BBcrESanCx3",
  "key14": "4ApVPPrWs8Xwo31SfGzqx67BtnymBtTcNXBigzFw3vcYE7HDFveo2WrHL1a2gXQ8x7LsaaebgenDwpppHwUK8jm1",
  "key15": "26cjvC949fkx6MaJhyz2uyPpSBNKMk9TGUYfAyqwudCm9rzzrUKCQv3MEU7GEBfkMAM99TnPZW48DxYNrvTbExFf",
  "key16": "4Xe5fbHYCs9MaZ2DJvwViqALyViikDYGv5tJFe9M6ry8tcYL4x8a84Gi21Fag2xV2MSecJMfdeEAgFxG6bF4XNhj",
  "key17": "4HWotzmbaAD9oXrm7gEpaDbderbm43urZ2j9UEDdrC9UWzLmtMJisniLCAhWcWUbUhtXP3NyFp6vzNZHdZeMo1MA",
  "key18": "4vtQA9Aqq4XpqFnagdbXTESR4pxBWeEaFPWsz4grHfLVFi626ijiEj2nUA1dkrXavzpdHnYxTb6kqxwLBfJnZWjv",
  "key19": "2cNVmyopuThacgtvBTrTDVo9bEgTfDUGUy4eTDwCHwGy9spufjuvN2W2eqWARZSnw4V3xLJyd9xDUaTYsqapRTAS",
  "key20": "5VgWXSb8sgeUh2TP3hHf6FqLVrfHNqF5xNjACRGvjSp3sUtgDwufTo9iwjx9LBgfqqe5wbg53fZTtfT63gKzkK8u",
  "key21": "5ksecGJknRfyRA73odbKej4LDN2B3XRoup8CbdJ3paC3Eq3mvBxsV1J8jQFEdZxT67yRFsD6rWztEZaouWLHHKSw",
  "key22": "mLdDZE48q34iB6nt9wq366AmpzZ1fNeB5XPpwxgjb5sSeAaf2SJFevLzS1amBojXQ6kZSFAYck2bQEz5yXUiNpp",
  "key23": "2sxbLWSySbzcrRFx59WssyBDcfVSrbJiud7e6VTq6oYGikTbvswXVakQMasb64Qy8YNzbhntqQLuziv4bJFEqskX",
  "key24": "rXCi3YeX2eSwCTiTmTkB3P6piCshV6z5uuU5j5vXUiBjb1VL9rpezfPEHFvPH5QVxkTnPdRFNrsUv1neBen4gYT",
  "key25": "56gG2psbjwgAH4xDqy5GZtqWnbWJ8aFiVZ3F4WNf6juqNmdREezvUdVVrUGoiH7vqxYXetp4Hu3xtSYmELPwQ9KQ",
  "key26": "4ViGRPg9xpw8vJpaQHSCqGmh9ofr1xB9PDGcLtS5JrV6jMGXLUMqR4zeVtAk4QqGGv3mEujJLE6vfmFNNweYsSNp",
  "key27": "VcLLQtk37oitK3Zs1EW8pyQL1D5A7SiZs1NJDjw1MWpWKDKJizrqpLBSHUe6XG8rgFrneGswSmjk236mmpmHLNe",
  "key28": "hdC38K7AGhDzqJ4nveAUsYNyehVLptp9SY46EP6XznPE6gT2G9YNY7QLD4ZsTMurS7xYS6sN3sarHbGe4e4nrub"
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
