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
    "XEroHZtK6QJ86stSE9UgMm5SwVBKb511uXHSeqfM4CTSjHmTAgpcRCFEfn9exzfrStxmWnSigaGRTDanVbLmyTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WYxaYwfqBftYym8CTWjsU9FQ7UuA7HJBvBBkd1j2e5EGmBA8t2C5Lgn7Z4gaRvWV6YLzpFDkAyoNpG7Zx4e8JT6",
  "key1": "J2ViCUJwyPJr627MZfxP22kknnm69k5P6Mw9m7gkCspMsLaCSB76E7Tc1bks1TSEfH1mUXBBJZZR9k9vk2saK8a",
  "key2": "5abJqmYFttKbzKLkcjrm5fp8GoZykehdLpKRCN2nRe6wg5KGTVEdq39odjnBrrQ6EWF5rHnfDjB4NYfp3SiEREaz",
  "key3": "4vzy5QcxHaBPW2FgzsMAqo1GvEK6M1B58s1QJNnLh2r6K25FfjgNDDQUiQZzr1yxMaiPfLGUD5Evcjy8yNceMJHn",
  "key4": "5JR4fUB5VqTD2EjreBd6UEmN9xY6oTXxQzfYSUb2PVx6Tm6MZ3GGgJm6tBkETQeRj9GYYFEqYZE85tkK5jw3TJP4",
  "key5": "r6cRNfWjMCWbkDcE5qa1teeJcEFcS1xRUSue2kWryMUtiMtrnZpk54xA2aQKW2xQc1wX9pPtMZt6Up36Ndcin89",
  "key6": "jTJruesE8knvXt2T4tXa6XfzeDEqw2BY1wJcTBpCBTfNdL57b4e2FvY3MvgqdBdsQEexh3MKiSgHm5K7CbH1Xj1",
  "key7": "nkhKBkXUyYsRRy3xDkV97Nr1C14miXcGD2dG9rdwQBjnzK3vKpafakbwshiSVnKhuzYJWqtxZZQKTjGoNhQWvK6",
  "key8": "3tjhb7hMwnbqYFa9Gh3jt8gtXxbUrcguQSQFsrbZM3iR3vmNdC28asPnicAqoL9TR72LvHWVZgxu7jAr1i3JC4U7",
  "key9": "orTjqdKawH81gKuvXx6y3JuhnvxqUmjPyET7jgxFfdVfRmqckv95NiFJwFGmKP89CyGpbncUCqVzgXje2TvdHhD",
  "key10": "6tj74PBE28bJTu8DzAu4wRt9tQjFDokqSUL673wFsrpft1RRSHtjWSWCfLA26oocGQV4f9Dd7iUzhbH4pPtD7hW",
  "key11": "3guH24XmgK6ow4ETXu6DucATRLmpL9yu2eR2gTjk6sVHzhe8Xm5HWW6ja3aNZFpNZcQKskEcGEnfcAXdaJ47F48A",
  "key12": "3YoiGPnEhBaZfhYPLoJVrTmpSUCwr2dfu98F1aWvS8Ut793C6epRNnFqYn4T5pb4LQZe3WxTM2KdHW2RnQBMPkRt",
  "key13": "54sGcDPACMWp2e6W3XGQjRoXn2N12PTVNcoNHkaHj6jaWLFr8m8Xp87gPyYJVbbVKfbLS1wUoMoXiGCHqAXBCSgS",
  "key14": "3qvVLuYCNbE3JA34SKPvUXzs8N8BBFJhUXmL4dQXP5wfDqNewU93Fbn5gRiQtXRgNiYT3VMQnMTy7vSUQTo944j9",
  "key15": "4wsU98cMug9UBaRKsjKpp3zKPx9ZMnfWihdQrq99wyNJL1quKxmKYUv7WYtXS3GRVAx3bpPZ6fiP2taiZXJRCNup",
  "key16": "9uujduSHirUHYunMzf3EqWEvG62csnJdT1KqvUKhygBJ9xJJtChRnkDWKWbWUMsza1urDkqNYPWsuLerwuB3PBF",
  "key17": "5zA1QhUN9cgDP35UN7iDMf3TZyP1N4t4JTyXPsQR4Qtar6N7HaZVkscF7gh8W7FZdXcb6YpdXBZNxFkDo3iaitEa",
  "key18": "4BZqiGuJcLsHqySMYWarN6LUvwaNsSR7saViRuQvGDX3vfcJZjKRNYFhLeKT4LLnDNTwZuZ7JQHZFnjhYoTsC1m8",
  "key19": "3zFymP11bqNboi7r4R2x3NBgdPDzGLy69WtPhnJmcoJ8ffszKpm7bGnzRfbveE2M4sjReS9UdspA7yLCHXnRpA2R",
  "key20": "4j2m7zTcNSwQVkV1f6VMeLfn8w9vXpsZsVsE6rzvVy6bx1DE2hKhGeqyKFe367GTJH2eFC3b49uMbnQ8k3MPymD7",
  "key21": "4MbFJMyHmbrjmGGLv2Hsd6frW3kUwhGa8YkGT73AbNwdvXKG6uodKNiBwfGahgT8j19GNBWmzSPetvmn3Hm4A4Rd",
  "key22": "4QCsaE5dsCRGhBAcoe8jubngkSSLNjPTPtbFdx2QQC8KNBKueFfkEh5a9g2FECnNsLxMHwVfFK15hkBQbrBgjYJQ",
  "key23": "2dPzu3jmc4hUr2vrCdqsg1dMR3SsMdsbRV71CoyLAQUdkXQGT7fgeZffSmBY2maMyGvWd8sNrfkNRzR9AELrqCza",
  "key24": "27RoJByHuQjjMj4Hh45YaJRAMM7HBK2Rpk26H4jmqfHM2HJkoXNoskAd17iYCPypopDhvqrJbV8aMbX1Me1Mew9z",
  "key25": "5Dg2E4uzkrgxKsFF1QbDe8ZoBwuKwxRFAHS8xX8WGumdB5UduYDMA7C91sEqfAm1bSpjQHo9NxjAGLaCV8BDzYTT",
  "key26": "4KVYdyc7vEc8qKC9geV5L2XTxtzbGtZYMvKLBoLpBYuNohhyyRURohagpoHZW8kQwXQs7g2zp8GxdnPjwck3dYh2",
  "key27": "3ZcVYepGM1Qcot6mwZrNc11HefZYtH1PFKKf5NvChFcNnRaM1FcBrQeuGDfhHcD1s3PGDP2xPnuNxFCXFt3Uic1L",
  "key28": "2u6WhZCYWcn5RXJ5swPLufqCpgBq1gpYa6P3SuUfXqdtvB31e1C16K5YJki42ZstSiRBEJRdzjMHmkYeE4CHpn4X",
  "key29": "2e6tuhWLhAEfh82D2x4uu5HPKmtdUVFUh8kQ5WG9z3btc6dvZ9eNx4iyyDUCq31ch2Q6UApWnbR8Nb23ZhJoatXx",
  "key30": "2X1xvW29SKuFKsMuCsQ1DLz7KE9ErVNd6JGB2YQ15kC7Q1Vx3wYmHQULCzdTRkmUenaLxrhijSMzBCAQUkzvcNBH",
  "key31": "cdag1APHz4qYuaQ1XdwwFfeRb62ZyLnJCGkZ3HZx3VeZRdV1VDLGxerZ2w2Cvi86iUc5k1gN3JGN3D3gQAB2qpB",
  "key32": "3ihVJGaJ9jBxzXJuuNmwpkAj8RKCSDoyA6w6uqBfS8TUCE3sCqsT4hiMB8H5qa6mmk4GHEmPRbupy8YZ4gSQfGmn",
  "key33": "nknRXdQAykgPjTAUEN9ctiyC7tthDMYopLUGm7XeDqwBKh8yV1tYnqYkpmEH4D3nR8CHc3cJL3ZFgipmnqKKQx5",
  "key34": "3Q4i7TAEYboZLEgJ3Tctz9yam4iGz2b9PvkpCnKGPPHxzy2shf8Q9E6rD6CzhmuSi1ctHVyPjPAxt4rCK9Nm4A9S",
  "key35": "2CJtypgUo1e64QQrjidcwcMhhECm7mRC9QK4NcxYBconjYYsgEA9DK7wYeyzj1xoG26q72QbUB3xc4rkWaX2vWHM",
  "key36": "4ZMcLfQQ61bcJ7yGnYH657TFW2bduPuhgWeqZXozoRGAmHWCMVmeGkJaVRpPbaDyzqTdUCGNaqmLkvb9Z2UsNMpG",
  "key37": "2TzR2YAyprJFXDeoow4mpzNhHtBauSZKQ8kEvKYfKSthNaY6DU7x5gf7wtNeZhCCotevHWMei1quWeZfUpWiJP8e"
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
