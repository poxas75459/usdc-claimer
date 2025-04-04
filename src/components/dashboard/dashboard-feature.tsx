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
    "4wYsT2XMGdRjHrreFzhqtJe5aFNDGAEbAWRKTv12iBXTvdirwoMHGJxXznafoTBDHyXLriicQR4pvsiQSaEDp13p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mCKDPt4xAFVqSWukZb22XurViBQrRTNkj9Zx48QqmTPeCsCikeFLcXUGif4ng4ic51tedg9qKi5DHM9rRGv9g4q",
  "key1": "5Pz3zxLg6cYtAiWMBSSM7aSran2heyQUfFvzemFtrZoujX8ZzkPVV5SHkaZQx4TsQL2eDsRLyf7H42qkta3nYD5P",
  "key2": "triixqW9UitCFAtvjVPjgMJWcoqh68Gbe8zq17bqgBTKVKKyc8XxxoE34Thrb7etrM6MAjyedMCEBX1QywnNjhU",
  "key3": "5JWTfii5NiBhp16rSzbUFo8JyVkQxKrzhvGhTxwvz6Xmf2iCNs89YijYuKvrT1kATPcytd8Xt5dcNCBQV2zrU5zE",
  "key4": "4JXynfVZBzMV6kskxgNnzhEJdPGMxnJmyWAEJD2PgcbjMLebqs8dkhs3BT4RFw6Z5xzkJpkb1xaU1NoRTjBbomFv",
  "key5": "49WYHWXcibxGdnaT23yaqamWuXvB5Bpw7Mv6EAUvFa9UvSgSXCYQms2hHgDRVb78QPWukaLTftfwr67Ech14Uc6x",
  "key6": "9S62SyDkfd4JN1b9j9hLwkNgJ1G3LBCNLj6o54GSAia3eHvBN7pUb4DmDxYVnNY6PqBK12Ryk6rWFVhHbPUsSpN",
  "key7": "2nMFcRsz23xwnkxzPYNLyYXuAW2TJsdJC3kxuu49iq9MYQpHipX236eC5X8aw6e2dEqLCnVFwnvtYTo6Y5QcfK1k",
  "key8": "4UeFenFxrsPAFms9pt9LjnJ42bCe5Chj5ckFaArpF1Zrgakvm7xoSKhPcdPLpbshPCNCkJpBhizrwysVutpSz1TS",
  "key9": "5geG5zXK2EcKzJgywa2EvVdnJ51DbDU4hnVz2ipr57YovfwEXsqBJQb9FfY92dVYQzqFprUdR8ef2TwYLwuVf9Mx",
  "key10": "TNFygk73TjYyGQgTxoSwzFydyrKaybktrxypcgzHK4y3osVbAn9xD4ZV6xy4HYtUdjFnh5xBeETr674W1DiEJXr",
  "key11": "57eS7AgEyL1uZ88JAA2Tq927TFT3XgCNJMd3XcvWumAaMKs8JPS6sTE3K2vW9uKH4kH9z5NtUeZauRSBwv4XvShv",
  "key12": "2FgkQWUY3NH6ZEBFWn1rbztpNzfWXjAttw8zwCu4oSurFmLhXLSSFMnghUNRqFgxBSmMjfasQFS8xmacuhPw4j7L",
  "key13": "2XXeh3wymSgCLNDPTSKYLaANCFhDoJypMeiXQaCbfH4XUPVtH1AnN3Y5t1K2LE2Vx38Qvz1gYEsDbrzva5CnXToz",
  "key14": "vuwBi1Lr5wyg3WXf8t1LS9pneVbi3PsgF6MXE6BLc6zYnQUt8iAxtieDeMDT3E8WrqYzuyqPX12ZNirVo7iN4g1",
  "key15": "KX16UvEUoMpS64tED4Yh6wZCrtRMmfkYgjjGyEjLEzqtdJX2eXGp3QBwPHJ1No2fXMzPWB6FntjYXwk2W1kmjKa",
  "key16": "3JwAb1zeFtes1ovKUbNKugd45CuV5rV33ntmowtxBa7iDLRnsQc3wYHPbR7cLE8pS7zZkEfi4f2oi9M2Zz8U5HkJ",
  "key17": "3MXX8eKarq8aR6buFPK8GodQw4bn6YjxZbbpSXPjRn8oMJiDbQ6s9EsQa1aNzVpfqP5qsDKT1yHpLu2baKXqWEPa",
  "key18": "2kiNDdJzn3T9ADKvEyP9rZNzPD9HWnjWhQhrJC9XEujtL9juxpq3C1w1CqKYEDay43QphE64EWLcyqw9emXEfAYW",
  "key19": "3rSSo4x4oWGe69gBZtBfcFtJji5tSPLvP5kMDhfzEuudJZh1jVZHvkL71rcSedbi7AAeWaXHdbMXvsq3x5RJWXD9",
  "key20": "2Ydd4Az39zj5MvjE8631VDXiKGCTwtHCPLEHSUGdQ1S4etZipBrJW85vnvBWkr61hxAPLyDFyAAK6LmLYZLb784B",
  "key21": "2ULM43w8uaRaCJ3xk4QVFhVG4nzFZkJnMMgj9zGnwdFWoQNFScRs7TfLyP7SKYxDdVMewkxKiSPTLNWFEnYYyR2L",
  "key22": "61AE4TrpA5h5p3k5hGiVriYhQGPSPcgeRe5sxXfse7TfCnj7srUZEUbfJXBkGppBapcLUvkrrisEmLnUrPRM4DJs",
  "key23": "5MYKSTLmnWPuPyrJBEHZ5hfRvcPU2iVfYWpAKNZs9ThwzQKaMu9ZU1bBD2izDMXfgxrG3T6zvtf6oiFdQiQ7uEGz",
  "key24": "5dqdZJrf1kKnEzSFJ1unyJ7oLQU8M4ahFv6KeNRPfjrKiURBukHXYQDAEoC3eFaWWMS4DzRzMqjqmGh9SUMNckYe",
  "key25": "4cCpik8Fc7hMSDi93pYpxXxN6CY266xe68sUMHSzdgUknv2DGfd5zuUUZ2zh1x4jW92n4SdBcs9Evi4P2sJGGmuH",
  "key26": "ipS8YnT19KZtZ7RPMpZLc9akZZrmhfEL4f2pcTs7x52XEGPwNvKMhfK2yHFT8ZoHFsJoWmVUwLYpy6q1U5kptt3",
  "key27": "3eYDASbh4AL8jisg2p4xr6cgK6KZFQ5yejJvq2Jbqz7zaR5SdUJnVDdwquxskVaZuSNsqFjdhvfHcny2gx7KMqLt",
  "key28": "2xXxCNMDsk8Mxd3eTnUXwrZvZQQQxrurrmvU2pU6PLuBU4oV2z49q3eQgkpNVLUnMzDC1uejQ4giZYGnsiQp8EB4",
  "key29": "EePAJEN439Cdv1zKgMXpAAJYX3k546uWNiuwnxnpmyMHHqUeFqjaAHsdq5D5x1Nupv1PPVv6auEUFexceahu4LY"
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
