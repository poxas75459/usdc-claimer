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
    "3r69AshpNS88qzTWkk3VYcQeKKwYafE2y5gsmzYduDHdrX2EJpjLkfV3Wb85Jo77iBn9MtR8xhM9b2H8Z4oBqVND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fsockqRYBrdJfBJU92AqVTXnd5mEfz6tTbMWkQ5oXVnsc9F77wUpZ8uqsisaYd8eQj5ooHtU2eZPzYP9PJE56ZW",
  "key1": "4afRdHeBQY6ENjHtxAisfri3c5P6VEa1tgQoUHh8jv4jPoAEXf1QgEFU8n3Rm97ugUbbQSG85CEFyDBRJutZWg4L",
  "key2": "3TBfLNXxPNyzwporKLTeM5AqAo88htQLAuEqVnU5imAGLd9LPkFVy8xBLAKsuZ7TWXNQZwp3rWF57Sn3YRdewkjA",
  "key3": "3DqUeL3tCg4HnhEw2EQ51gXBdnmHKNw5g1SV4dz35S5juUAw9hcsG4wshtoL2gMt4tNJbmokk1xFTY9WwtNZvGsr",
  "key4": "4yfgCZNNXtDQTz2FhDzX3xMADcxJsKymKhBZQZtQLLcA8RNFUGxpD53G3ggwrEtmqYy6ByJizhCkyphudEXCR39P",
  "key5": "EwUdQBNLjkAgMi3yFntLja5JbwrLW5xAgqWKDdqwbp84yfEnX7urySYMcQqpDP8eQ2UX5qE8U8Yn3wE6FumL879",
  "key6": "42qRhcQ7T1Py4ecFVNBVU6j4X4P14T6eU1b4fDwRd6zxmqEeLgxmwRjgavs1H39QFac28dPdfAyyqwkn1DSP4h8a",
  "key7": "5irt8gfaerkW6FGAkaspbuvQSYeePD9kFTyWZTpCdn5P664y48jtJVSDZt2KLRsWh63qVQJkwG1z9rUpgp1X5o4c",
  "key8": "4DSVEWZfMwwdC6jYKoDLJs7Fom2mEZvodDUyUAu12nJCZ5kZFXb9tDHSsLsYPZ2dESv33fm9pHHNPS41gntGe67c",
  "key9": "34nne26rM5xf377GMzWJb5Nzi7mUZ52P4FnM25QPqRyXQHLNyVs5JQVoVANqikw1w5LqsM1k9HvwgrZk1aVNvrmd",
  "key10": "2zFnD2MnpjMNBLyM9VcBPJxmBV21Xa8ssMcVwKuK5uFDAyaccQ8SX7qN7GXaUvKJgfkebPUZPXVm7zzZ9efT5nS8",
  "key11": "2hGuKBYeSXH4NM8rqfJCFKXqvpsAxNE4EYgG6towFEXeQvqHkk3TGVHnUsCpgqewMBcRCZkGiiTeEjsXve3rJzz",
  "key12": "aeXGt1SMxWMgJZzUVhGzqYHVWK3Yw3MLQYBhQjCA6FWdj6zCjpeAyMLrm2KnyywQ8xKpj9HtD5JG7RZj5eSesok",
  "key13": "2EnguXFn1FbdXkDmyvSMBdoQWSpXR6oWAdLJzMdAyGUQyc3KZGcwBMkrCKXpu6JzvKyAKrVcBDKKARSEXYLuUJXi",
  "key14": "4SNdvvYz26PpBJwZtEg2cq2FVtcG1ZSepaMmi24VPoAbBZ5bhRCqXmgns4kgEJ7JgUKK3kU1xcYBn3y4USmAgN8i",
  "key15": "3jtdWxAsKZDpc5mko3mw4Gx8Nr4pmcRsvHfDXd8Brj4i6wHiUZJd3zP3MLVSLMTSkBXBMjQqRsYP52pWherbrabc",
  "key16": "5N9s4d83V6tq8VQfwTZDN2Tf8AnMv1YBPzLV6UtHibtsWV9vH2GG3sh76QekfAhgM3Ud2DLboi4139s1gnxUA2pv",
  "key17": "rzvUbQ1xYRVx6yETfosNGXaJRafEoDFiDsfJeLCNBEdsrU3zj5p6JYMzNps4q1XWZuoaMQHXdjBMeXMR2LV7bFG",
  "key18": "4ek4hBAqkKEJeWcZ5rn6QGYqPMhx6KSutdUvLsbWhd9ZJ7wtbXqKonotg91GervA4wxBhpZ8CA96aLGMguRSptBq",
  "key19": "4KNs5ZtgZpKz7z1w5oqhJaz2sknRrJ6z6b7C5G24gJ8xHJnQALb3tqx7bgCE4r16RiYVA652fEV7NbqgFXvjHRBn",
  "key20": "4ywTKzdhtcBCNm2Ez1J8WgroAoKMd6wX4RmSvZgDbH7EHBRB8e8zidTterxRC88QcLteA96NMmnHMUzNC61uqhUk",
  "key21": "5YRyWLhd9FgMa7fQLiFNjHFv2WNuKK4rQbi4WuUS7HYkkxbW18WM63wgVasXWe6kFq2dDmcCMgy6tbAQwhAavuXd",
  "key22": "44gz1t4BoVshj779wj8RSsgQvYvZPGSfNW67MqyYcBiBLyV7C8XiGthmqipGJo7t7D94858vGr1kwC7s47Qt7ngv",
  "key23": "5RPXiWekmH7GRweqDtbizKGrqxApg1JWeP78YBqFSSMCTwwdsYUhfQ5ngaPYQcKrDxihYJ2eojHXgkHUti25558o",
  "key24": "3TgmTjMjK6stS8J1PhWqbB83fFZD3QXfNx178wAh2DvZBjMqNoiwB4eSBJHvBnSCPv7UxJATDwtDqTrvZLt5Cozt",
  "key25": "23ebjg5Uu42RSGnt2arqPyzH1y9PCTrASWjAdcGZ4EeoFbbPdcSbZLFXKc4E9JwwZwGpyMR2wSShPwXRdrTdUviQ"
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
