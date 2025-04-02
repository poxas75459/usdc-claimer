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
    "pVNi8y5hJYxjESiNwUxsdtPU6aMnFZ8MSWXnkJuJEUMaiDCygWGrRnCtJFvoJzhatCKEUfdPmtXZpeL7kD3gYny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CBBxg712ap9S7UqM4oZKyje1pvb2H9eZyNaT1PZzTt6wyfSjajoamk32BUzJj4P7vHNB91wDRPukV8DBv81oWeN",
  "key1": "3DzEREXiVKV9Q9p2W2AZ4Gvxdjd51kATzUCxLVA7ALmvzjVZA8R6M28RYie2AePL1nqgDbn6wcfGCr4B97m9o66Y",
  "key2": "3pHaAuTj9w6zLLd6W6xy6dsfn9KBpZHLWgin7PKSbXiPmyZwdheij6R7XTeNVudzSzgNaoKxUrd5PKRRXACdJnJr",
  "key3": "RFW2GrWLwTR3uUZxRJ2UnnggysGwXhJHug4Vp7Vy4LNYaPQqxTtENYFb4FmHvs3N183XuaqSoEDzxWpHczZBKyY",
  "key4": "27dPagdW6YHwmF9A9zM7oEv5JgYsdcEU9Kqdn6FH2WpVA5dBQdFTqfxXuRkE5QM8TupR4vh5MjmLJyW9dCpF1qxp",
  "key5": "2RGYu9xeA4FRDzPpoNauxfZQBcUDpgqJq1KUQUvizccdAkzFhr7doNZ6DmcXTh74bFYsCStfTh8B9E46t2yeEPei",
  "key6": "2NgbVQWpQC8Y3ib6sMK36w7iHQiar7MiPjaLapMmE3wv6GL1uKeLEtbkJXQMmR5YBrJ6B4TgqyiqQVP3YY4LHjUF",
  "key7": "hxZuBPF9fBMTQB5JN3Fz9K9QVUHeEY2vNY1nftcPMCdvNhcAa1BzGAH2EWAoZevvSCWpXKzqt1jCfd9xsbELBMK",
  "key8": "4Q4VVTseh9QsZsGqyL9PMXxLMVnsJSmHNWtH1y3eJ44pfAZsXUSppNVfygugWPDA57d5hP5R9r8bn8f2YDudt3a1",
  "key9": "5TY12Vmd76wWfpiUZNT5zEvrNQ1wvcLaGRfroyY3HbHWnqEwn9hkt2FvMavkvJcpM4aXrUzZEjNeQTbg7nZBBmJ",
  "key10": "2AQ6F3wQSpWtdZ8iJyLFAwPyCfrQWuxorFEjVhNUvZhqYJa4bFxwZajQRRxfMz4oWtY7JXtqZ92szu1itNzZo8pY",
  "key11": "69fsipksxA5Db9MEQao6YAqhA6YxbrjMn3caARtp6PnMmMWvGV2rBdY6usoanniTeRUoVAstXDQCc54L8Zd5rj8",
  "key12": "5fQA5xMwLCEPkrkRsMoU18Pry5XkHFP3Fo9Ka23vLxs2LzRdTUhm3Kevzon4SdH8WyEMYGBgd9jfuwDRZ1mm9jKM",
  "key13": "5k2oVRDZs3cKdqKdeF2UCWUx7xAAyFaYjAQw2b9ryKT6qEhgResYXF6uxLxgY2a1NSNim7HwaX1UsKu9d3PQMVyD",
  "key14": "2he54DURsWVDPkPF59hWUXAy5k3GpE37YjeWx2TNiqpfY2MGCNCjEVaCLGX7XrA3Hq6tLHruKTYSa1mUHH8stN6t",
  "key15": "9mtAuHgzCBQ1gUyBg2onUPJBkAmrsuW3b9kxNZw6KzhsEd9VKvxu5tbthVeGXmjuAATpeQ9S7akMcH9WVioH8GN",
  "key16": "2TeJGfk2riu5XoVNLZCSqFbNhF9QRqkKc3vxXRMfsSZ5ru2i5gzuy45PSmaTn2en2tamj114S7oftJkMkKFyQ9ex",
  "key17": "YUtpcsGzaaWwLnswmqY2jMpCzdEbWkicbRzB6C5qm2P67BDiU9bYHwCXGgcCcfLNqjAcG6M83g1LNRnd8cLBkYm",
  "key18": "3uUS2P55RpqrHH5JWQsVujN37BN3BeRkdPG2EmnV9SotMPgvxPc7vktSrc6hAKuCRhWKcwxuEcZs3cXNszGqx6Ur",
  "key19": "27z4c8K7rbSkJYYjivPDbap91TsQGitpx2XbJZbPD1DeXERp912hmci2XJoB1Mf9ZDrgAYSGC7FthxfcHXgfoK16",
  "key20": "gAkGJF7gczFQjJUgqEqU4K5PeAmJsLdNBqpH377wJWP1sq6p8Q9q7K6V4ftczGdtJdGPXPY78Y68g5Zt1vZAtSN",
  "key21": "5LUH2UfAU7wW6iCdUujhkrMgDbsExQ5vxB6t3yJdejqtCb5p2dqDXmxDytiN85vmYU2bcuz3UxMdr5qyVb6zF6mb",
  "key22": "49f2LMWBZf27atCqRMSYMWnndeaZz6QATtY2KHajCCjHKpzPjgtKBx7mUQkU9Pm2azhQsrWJm9YiM9Y81pwwr3BJ",
  "key23": "4id7E93Mzo3VHDYwF5kzYQdbUW3xVkSKt2wUKmwwVLNC243uAsb5L32sPp1mPuuRKJ3xwm8Ld6LUif3AyM8mETSa",
  "key24": "43dXCnU9gh2vU7u44Eoquisc8J7BtkRy8TgDwemRhkGQJh6NiTGhkmm89v7NWvbF4JoLTTQFLTgc7Eku4X8tFipc",
  "key25": "Xmy1VXd3efv34ZiRUaEFhuadUVJsLoZdxhunBGS5HLw5xefdDAgpLtY1qXs9NkwdXWwecBTDoGVExAvY2jchX5p",
  "key26": "2JksP5R98amYftHvaUAju31g23xnSHA4k4xi2CKtrPKASVv3NrpbFYovGXsXKjJVdM6jzfdoWUp68BWrHL3biHyz",
  "key27": "4VzNVQrorqYLQyB2EwnfpGiwRihRTmgxzG6jmskCw5FA32BAZoCcmXyCafLZcAMN86t3P4epywfCUNi6wug3HSV5",
  "key28": "3jzmNLo27RHJjbeJYy971pmD22MCA3tJPGWxBKUAfmsDVoLow9zKPUB5ijmEfSgfGkRVrxo2oSTQXWCor76JpKqp",
  "key29": "41R6B9upo9MFBQwXvcic2PS2kiSsrYCCSYtzXcsbG3f8LeMt2oRefYqcNWjxzPxMpcqgnJiceGvUcc4e98Y4Y6sF",
  "key30": "3hxEdT4SKsm8ZtbLRoKoU1T9sBcd8SeULikxvwcHpifvc3WNdnJttQcDiFf96fiGFB52Kn53KNhw3ghcyeL5ubKQ",
  "key31": "2fwTEkqcp9aaJZ2wDuWSzMskh5yvnxxKWzdoKTPWiNv4VSMdAmBBveFmQJaupkzBuLqm9AU5mxi1duRPomCyjzjG",
  "key32": "3TnxBqS8CpMB7prKwYaPkBS6gdMP4hBdrVV8pTAVgnwRdrV8SBBr98tyLZ3ugmxo8GWu1MJarbBJVFvz7k62nQPu",
  "key33": "3zQBaurBRyB1ZaX8YekhFuvsJVJgGgBHcy4Xg9frRQt4K7H8MamaUoZXZsk1ypG29oMcqQWaHMpQndfDw5Ttp3TB",
  "key34": "3YyjZ9kW6KMVoPpCiA8fJHUN6NoNoYES53oQmm3pUYgodexZhVJKBcAWFJLgG4oY7CZUWRyG41ASkCjT7CQNbGTP",
  "key35": "ZEfJmjN3G1r9yTwq9ZtUdWhjDGFo7UMGSi3MoshZjEoVxSyiVbFhA7hjQzBjJ4K3Q13Wyb5jFiWrPhnhr7oM9xy",
  "key36": "3bsavGZUwQiZ1skbpU6cVGhzmfSTfC8RoKamddHdWasqDGrsTnQs4L7nYwF9zoWN4XmrdkJeejM19h9udZQLbBak",
  "key37": "2igk8EsAfqL5pbG54uwoX1VfYv2q6vo9mag2CGrnhcFTZMRZorVkxnczv1ZyYNzTTqqoQFWQkR2qw9KPSY9FU7J2"
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
