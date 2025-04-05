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
    "2RhQeKfU6L4gn3MLdQbLwp5opvGgt5eYJsrgbn4FtgACxT84Pd8rth25g32r1i6GUuLAMtfVocjGDwTBmMUZrsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N3tYMVaS8hJQZ95MhZU2DTbigARo7CAaKS6yF7JqzjThFqfmyH5YHWDqKdAL8F35PCuetqmhJvt1uj3dS57y7xp",
  "key1": "5bJGgzmxmFNJ9YM3GQDcLFDRPsGkA2vK1DkXHYS5FjXSQ53XhWtFpZ9aSAwswJGXF1zKV27tXGJYEtfdYWyaS2h9",
  "key2": "3MLgEWwK1CieQsUoftukpHHVNZKQbFqdDT1shu7sRq5mmSUkbSuWQ47cainCsjzz51gkqmvUzKDXYPAiDtRKxGdo",
  "key3": "2hQWArp1wgQnv94Bx9K3fyqLWXzaAAQiBCGUB5Fv3mTaJxf178Nzsw8TbPpq7EuuKpx7QKZiTvEzPZaUCxsrDqyi",
  "key4": "5mbz9j3UPHzsuk6AMWsAk7hnrDuQBPVoAzvddHGMSj1kAjsrMdRcykFK8ZvVM1eWScR4rTLzr4EpwPfEtNNAz5UZ",
  "key5": "4Gwj36ebxNwyoxey33Hnafr2GYUonxoua6693893wXDfqkZHX45SzwXo6hFSti7yL8M23nWQcAs2QDCUJHQq4hjW",
  "key6": "3YDnQuE9q4P27Qc9XmnxE6qaoJK26sbb8LpH4mSM2GhEK4UxLJUBKgtVzGpsoeCYiJ5AShmvxatXrn36mfnRjBEX",
  "key7": "2FwRTQCytiRRcfymH5ei3YXnp9vfWapP6LfK7BeRycPemtmsRp61Dt1aVMBdbkXqFXUjZcp9BNeUYxmDkG5bawDX",
  "key8": "4f5LBxXjm92uJ7Zdi4Z9gYUrqeLU4j4wyZSMB6XTz2s3QjkK2ikzaYTqZ4BW8cosYhNfmgzNDB6qfkV6UTNcHH7L",
  "key9": "2x2AJQqor1RnFCxYmr5impQHRpEuRnqaAEfoGqqAKdZwSJBNnfyR5WcJnLiHVu4ptWzhv77CfWF5hx1ZW9m28eSB",
  "key10": "5YuyKnp3eJTSrkMRBZSLqQNzESovCsxcD4HFyJviRbYkpd9iZQgEKybAScbBMpCX4ZeXjbi6QbuxyWw57vfeyq8H",
  "key11": "kR6DXZhxDU33oprRcHptnn6Kc3jjzEZ39TSdJvCYXLHuTe9ge3PaNkVXPu6CYNd848NZGvTfQTsVkG1Hh9MYB67",
  "key12": "3jpsAGAtbPA34ATfrr962LvYKjCvxwe9uvh22We2VBuNsuECsXc8Q5YtHR3WjxL9QCG57BwbM74pupxrvgZUNzD9",
  "key13": "5pVBDqdWJCBsxgndAuobEibh7D6JS1DPyhe7btGNqeoTg1a7LHbifdyx8voinbZANtJ2rqdWGMev8LFci5ZUhCHM",
  "key14": "uZDPWyy2tqeVqnhHbs47JvWzr76cuPnPedhYR5mBdxtC2obXm8ckKs1nuHYPztdThvzKBMaiCFr7vpF1Lzh54WZ",
  "key15": "zzXwse7NEHLXPCjNAqSWSu5gYALek16jsEicpkgD6BiGsQLej9hj6SJmTfq9uEvAR78TAwMsJHZN3Bwe9uhSDq2",
  "key16": "468zihaQUp2gxResNPur4ncYa2SFPFaNut4GHwkLweNYdCMM2NietpcT8SM8imCF9q5Vg7DnqQBv9KmYT8ewHN4K",
  "key17": "2SPCReaiYGsBEp7tfrVBE6CTXY9cw92Bfcb8mnqD1B1KaJjViVC4BEq5AsDG23nXvunNnX1gZSY2SbHmppgFJXwC",
  "key18": "4MaukoZyBSZdGVkyryHAUzYDm8RUf4meUeBpn9PMPgYq1gTnMRiBfRc8TegNT88XoHQihezsBfmQbirMcBFtgFBK",
  "key19": "2YoCMgJd2Ko6gobCnc5WV21WRHEBdWkRbX9krMtyRBiUkTdkppGEfcyRFs4wmc7mDUy1rrgGHxjZTyKJNdJTtwom",
  "key20": "47rMvXYUiw6GUhQApPH8cKntBmAfcmxREaoiwWQB8ijPd9t1oafr94ZsySekPADHWpbPTjk5c7HLM516DPb4LNhb",
  "key21": "4MLtegqQqygD1TBMQCS3GkgSeKjjbMxyoWiXs2Djzkctgy3dwDc62CsDBP9S4HeQ8Ji2PYwjJ8KPqxRoptQ42Ciy",
  "key22": "4z5zz2oL8QX91dLemNsKaGRKTAiWBwKAxpeZPFrwhXpEgZ9sguNVFx3AjRYPCp4MF2GwdKi3n3dBccd5gqv7ZTiM",
  "key23": "3NAMxqtqDU4RLt9yapqojxLYQpeS1yrbUh3uoronCyhKi97bzBDBFn74cg4VdWvB3atcgv9qVngt48Tut14zNyMg",
  "key24": "44aAFErqpad8jWXVPutLk8TtBEKK3iwfTgA1HKtS5mDqCmZKjNt5Lmucdy7DcXnsjZmd8UZjbzj1th1Nb8Xfafju",
  "key25": "2rwovQ1f1psENgQGc6heVW2X7RE3KbQAEtQkENaRJDWUDF3HADHqbgu61SRWV7jWYEo8HFSvPvBHwjjou95xUjV1",
  "key26": "67Ac4FZ97iv6Z7PyoJpo59s6sZ5M6qiga59XHNRcDPmevWLokmNeDY3fgGyaP4goNgZH8rwDC99dG2yVsWNC4JdR",
  "key27": "2DEGcsSFJW5hRT41GSbANnjEppNcNMicP8Fra4Jm6m2gvKrTN4XbV66QnKVFMoNT1XouKkVeMo48q6rcEZbXG6qo",
  "key28": "4KiVNqtrqCWJ7FJdZJjUYpFrn9Wny8ZZJj2d1eW8NVMmAsePTctQqVTuo3deLS76BqDvUZfDatTW9DXZWeACBe9U",
  "key29": "3LDdpJpPT6zD6dDXtYpVa4Lh23b6ePfPFVt1d9eg3XKnMmWYGemnHevjhGfWeZgdxTwtYLEv97RuExoGjzGyvtxm",
  "key30": "nvQPtPwU5x9HvrohPZtL8MTkAPfxGm4v2Ye3DMRpxs2t87frHxrvXccqCZwu63B99uDVuairjoBrR7NE6xnPggz",
  "key31": "2TiibM5tM2yXhGoEBRdjuYCWo5agCY5mG63mmC3dE5osEBxHCwxbJKgA48vStcDjfNfvRZKYEwreeK4VeUkUmWgT",
  "key32": "33miM8tPo43cqkugEQYnazduaw8FosLKHefPmaw7zVLwy1J7JGiPD6t4iXCP3XcDeSLo7Ph8ngWN22Bqn5pQD71Y",
  "key33": "2Nne6GSZ4HSshG8w4gbmUKy8EVTCt2Ervup2hnbKAUWE1yib3G4zZ1aEebr81Gc3JLuNKy9192n5zD4fPGzQUDor",
  "key34": "4kETVMPAq2CxY2qj5RyEJYKULVKazabw5QZtqc2vvexP7Le5wABXSMjbfdfr8YjWFJjVXbE4umktFv8iRFxj6mKX",
  "key35": "3fKpqhhmWMcQny8tbv9bQRPB4fxrzjXe1EDnEKEn2uCryJL5VkWQnTiwcZrKr9QbxaNVEvJCJbeZFN8K6m2CgpXt",
  "key36": "3Eezicn5rCTfw1Ah7eqK4C4VfNckPzL7vRVKG6rafQji81QHvYt8TVJsMCdYRS9GGrYy1dYmShc91dh8Qq8bKmqb",
  "key37": "2mFdncDcN3MLaFHdJSSfGP5wFPztVpBRCt1rSNeEiUN1hK6TP3uqCZw2EwVrki5SALyaNpSwwAseSJEWdCqMH8P7",
  "key38": "5qKM7VawbmHzQ7wnFKihW7R2QTvbs2j2o64UuV7vb2bAsB5TfQ3ex33GKf2XrNx9eh7FfMTPVxyDtgMdngoPQtP6",
  "key39": "5QHiaEEEZ43Sibv4JX3cyZwZjTGCiFkgqKxGZpA8hFiFitK6FVTGgSuC7tnrEsJv3EnZNjbbgt5Au84kTMyer6Lo",
  "key40": "4oDRjsGbzjdwzEEZ11pNfdxEDSa3BY6nCyAyXQtFiijfmCBJEDXNMJ9RoSZ6BbUmGypxSvhZfzT2zgYgTieoGKQC",
  "key41": "23o1qq99ktBiuEp2HpGzPS6WcMfGUggJ6PvRmDLs3SEcErs4vBUnzN77ugza6QT2Sz137vsY7YcpjbkasUK6zcWh",
  "key42": "2M51xnqEKsaBDvMwqDQXtBt2iHaC8sdZoeZtz5NM6XenZn19VnarRj6fUBhGp1qXwdoWTWn7bdgmtcguugdozd3q",
  "key43": "3tbBB9vgf1ndPksBvw5ZA88XeDz6rqbp3wKkTgsQyMMkeP6R4G7EtESjGQpXicyB6UbyDufjCZDRPaFgL1VpyrVx"
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
