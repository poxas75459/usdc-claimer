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
    "2HPNnNdctPJ4JG3EdSHC5Qm9stch7VSXeWz4G4Dz7jNswZUm64XTLxvqJQvMeN8mfkHeQdCmJKSqaZVrDs2CMWfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46DuSdV9DfpqQvFkTP9wu7oGRukaUUh6VpGTVPeiFvtYL93EBjUhKyBKqCKu2uVL1pHq52npzFzKwn4HMsAEvgaL",
  "key1": "2A3YpLDcVTcY59MEgFmCaXWE7QTQj3Tp82YSwi6DJCGjeu4QFUCg6mjBtw2rrnw5HZqiEoC5EhGhzQJpxgUA5RzR",
  "key2": "2UeHuHmsG269jChbE2fafLhcMMavKyHFLW6HgRQGnkyvnNt94h3LAKdkyYnXe8rY78LjoDuKzUMnsv6YVaUFavrP",
  "key3": "4ck4bNrMXmz8DEiBqyU3M6XNjH9iEXc2bhVWttrfWvmLnzJYueJYyf9MtsfWv82hCfXwqYE8CRk6C1AioP3e3hzF",
  "key4": "2P7ZwfBx9zBAUC7zzFyo5RJGdQhju3VEfMWa246SjBmT2fJMVZNM6nvzQcm54cbqVovD3vRr1CqbpBt5kDXyoXgW",
  "key5": "5i7k32wf2M9HTPnZHRFskLBXrd9wpuavWe1DSXprE5kjzjGkFKw9BPnK1HHLchXxw7mgLnUhKrPCEtUeRBrXYnBv",
  "key6": "2skGojCk2ctDQfmBWMxVAskRFVLi6PDzrDgLhmJRWT9NNsBhsnEHRYvsgCtTg6r1bSgZwPvuAwvnhS3Wk9ZTGGLt",
  "key7": "uvMT5qC6StfM69PiFtNxxrRFFgiSVkZbKm51PA1Lyt2H1Y6DYrDXJ6Jw4HtDLFmrCiPfnefKuXLY2TyHpVtS89y",
  "key8": "4gq6NQUod3ocDLa39fC5wtiGAVDwAKEbGDzHhctXXM37TbVHZWPyRYh6wKQ5FeFvXL98MKigRy6zpqu6y52huw4i",
  "key9": "361kyPfqdYPKwsCHrgVKDp3ipYFMATM6XDYn3Kq2XcaYCyfniNxEWWyLD8jtFXi6GPoTFxeSKp6wsx4xxkrpY3q",
  "key10": "aK9wzyfzBiWhmnS9oVAz7jfqGzPeHJFKJCvfWxLgLax49RZXTJzJ5pGrzu9wJLgAM6MCHtLhTzZXJoz7pmVvDKQ",
  "key11": "3E61UYZGSUoZwGXcBtjNSfMHYEZT9aUDAdnY7tJqmWNKn4M1snZ899GprKtRpL5kUFCmY8tfZEFwCQdXuiJgD3oj",
  "key12": "5fqMnr122ibCteYKKzhjPc78gGZU7Y9Jyu1EDFZKt7C7tAnY35kejFEW6AsxmP9thbwjWxF1623iYQmdt1smh7tj",
  "key13": "3fzZkLu6jdDpWaY8ycPe3jBMAAPQixwZDxegLj6i1E4zoYxA2x8FWfsPC3PzA7HnfQzA3f2FcHDGkgXQ3Q4Wihpb",
  "key14": "2qQaaivRs1awxDu1BH5kscPMbpjPkzTrirv4TNGtBQWm344j2uqGzVN9eVFWDxoLQa5CcvJgPAKqsexBdAVtYp5i",
  "key15": "2Si23ufQ527uu8CyHMT6osinsX796fuVehsmJvLtHBf2y3v5EKoEueG4gYo5aBy58kgvr71nqCjWAP5TFbDLaebR",
  "key16": "2XDhp5n6KCqdCjUiMMuTAFh3R4rgdQh8s66piPQnQBvsjmUh8uniQMqyEYw8zmPjYo8FRhnrNQPqa75rYMq4fykg",
  "key17": "2DuXjGcyxiuSFMw2dbZVtft9y3Vbj8mrGGhLLNdYq496w5DeWUd2nmKVShFhvHnfqotLM7iwn4A7AtL1N74v98Kq",
  "key18": "5VQqUV6z2DFbq13VWbQTGz3vDnDPTmReh7WVR5JZQx4DkJgEmKoTgq74qMBC2ibq4qGCcCDtCxtFsNNUcBUXMDuk",
  "key19": "WEBLi6Q63kgjbyYqgZ6UcXAdnrmzjqtrU85h9VwXeXwkUmxW8gYmnru12dw8yUS1g6U8aFaoY2TiJMZsmrfTRMK",
  "key20": "2gmnPUUawxEpsCeeKxmsikxHxno841zjQQPQWe6JHaZQLZoBNnsUgy1WMm9mmk2ydqZpsKh6QRsCSJsjaUwnCFBS",
  "key21": "3gPYd6CRS7aXxEGXdwwa8gGTDwkNUXxcGhvoKdJ8s3KqfxYpS7PhZwqwBoMTBU66A9bDrAXS8nEEGwMVF3h2U6L",
  "key22": "4H5x5e6xGapsDA8cYvpNaXSXQNVvQnc3WP6wxZ4ZLpmLuG6KJZ8R2Vj4AEXfgD1KzCNSVjVqAtkhxgN8BxpPcBAQ",
  "key23": "26sDLcqGD2WAgQw9ZV7tKhnxZmweqqrkYQRRS6bEsrX6dgg4T1ktZq1FyXAZAHebzNEMnUDGUAT214AuugcZgMgu",
  "key24": "RuDGucTBtogkGQFrUbjgAEcErNnY7ZCMzPSWk2c86nEBPPuSeJu3kTGHyqBB7wUwcFtjQTYnL23jPqurTcfGDos",
  "key25": "4W4MbUX7mbZ9hqCuoev1isEFRnUvLMsQpjQ44MNGr22ZnDd9hrtK7CHF36kgRfNZrHddeoKWtkqEPPeggHSNgsK"
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
