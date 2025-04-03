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
    "KZVGzsGGDSYZU9r1LWZf34U2LjWhQGbyQ6N4e6pZqJeQFNDLq2zyMaR8o8ajk6ZQn8jgdo8SQBziWajVsF9Ceae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TvD9NeP1XsfvZsGp4gxi7jL5tW2FXWB2UfqXosy4uXhnzPNkRKBH7fMWgxjc6JhwjbXB4Bp1NtS6fyjNXn4bisd",
  "key1": "5gmcoe6164Db3E2cyksrNaq9yjFh7qZS8Wc92QEP2842K69cUQAMtrT98KUqKcN2pZ1reuMWtyjxkGQxxemCm7KE",
  "key2": "V9arhXKVAMDCspy83dC5vphp33WRuDmFFcV4KXQ4PRh5M862fmDxgeyp2VNL41mJEUtLUrLffv1SHqcvhje8BJh",
  "key3": "eaELspjkRJxwX9aBGykzosDjthiarof3jiWgrSjpuVjP3VuiTzun9ABspgmXv5khqMhYPRPPC9aSf1FmBE5FPE5",
  "key4": "27U7yMJGbvAKv9UkEHKcUTbGsNDASuCLvVDXsULC7nBNNkaapNRFh1DrPyGGj1YSCJgcGwQsWg8vRXWZzazmnAB2",
  "key5": "3v1gfbqdapyrBTwr7yhLeMrpbPrsQaxdxSirHCGPv8QEppQTKR8mFmScKoJXUrXZSt2m5EBVy3fqniAQXjn2gKmQ",
  "key6": "22F8THKMC1zDh3H1DNeXkBB1SVYFFDnPpzycEJLUmPXb7Kydad7Cd6q7w4w6XeUaDBwtBjRMZhdayrZwzysjnUsm",
  "key7": "4gx6ipZb3s1dhXMAJGBPtMRefD6udx9UmeeKqkAXtanpT1mbHppBBNa3NKs259LkbeMoj4c76VGdwese5L2ovXoQ",
  "key8": "3UHFfHYM4FN3qEfbA3ATxtKaZpDGeTaZhBvBPXSUF6r81o3YyygvgUbH45zHf64y11UbiB1RvQBfr6C3x5XXEeTu",
  "key9": "4y1HHJCiFmgWN9QMfY1Z7rWYf7b4BJtM8F35BmsNKjrBteMx16XA3J9Mqrd5iATRCZKQ4MWvhio7CAhRR5vNqgCo",
  "key10": "4Q6ARYUJqxobEn76SXL31t6XKZXzXUyiEe5rvdmMPA47G8dkUc7LXdXNEWGXa58gfsJJtypGoHcPcrVdqYwRRfuY",
  "key11": "48oqTremDsGBAyXAWtaxjFWu29XbqGTQnKRzvGU85wkVN32zUwKVvpjGEscHV2mCqcfBrTSQKxx2bqjVFdWPhTXW",
  "key12": "3fbF7GYQ6BpebgZhU6ypePUNgkCpANSa348QZgfCAdVMTrgg1dKQTp51DmC5XZL7W4yGgtYmZjfoHSJacTrt7PKM",
  "key13": "HzXbNSJwrBdbFQfddyPtzjZmxzeQ7MFrHPv8XCsSkFGhCR47Ka7H6kzMxugGcZxkNygzkAftYSfxUG2VkKbtcGk",
  "key14": "5u4bni3Ktjh6akM4obG4cxuEuoyqM3bmT6ohVQ7vCFJuivJKD1zm2WjgpAq44D2eotYeyUB1bKVSKUVWeuHhnUwU",
  "key15": "4cRXGCZrwuLKkvhayy8wcWsP4spSsqrcQzhMQiJras6gR1Bw1dTipfvfSBEwviG8BkdPqvkVrUvAutx3LYHYF9di",
  "key16": "2Z3q1eZeW2RMU962yzgti5g32akLRL8iRii2mepnYUMP8wwpD2vay2Gij6xkBCX3q611hBNxjUyRhgVrraREyTJ6",
  "key17": "ci2ozYvPDHPPZ7V9LX68mBjCmkrB73p2dxqsB7rnwsYwEquRDFLh5fbxFP5sjtndp8Z897Yxtg5u794UmsZDn4h",
  "key18": "34ukz4BgHhi6Yx9Tv8jvzWBqPcXkiLbPyAEkhAznijBDYqUhubijQDAJadBaJTRK188qmRwva9GHtrN7aQkttmgh",
  "key19": "5uVgR3uzcH4VvgkPso3VzJxdB8yP3rfugKuQVy7cqWUbbvKAo6a8FSLvfx9PDLzdiwfGhTxCA9jJtGsiwGm9Q6E8",
  "key20": "3RzwL3Kzh5s2qi6qtfx3sGiWLRRPrSf6y55XPL9Lcc6KoksfZr64gabgFjBpEBVyjUUp8tAknivVNPMmURqiPqWz",
  "key21": "5Z7cPoPu7Y6cRmkxLr8BufuxVCMdPAENvHD3YswSKUaVpZN2HuuCqPZaTSuCQMhY8dWf36wxmB9UWUHDcqcKrshi",
  "key22": "5GqLPMpURhnmdpRKHd6xcysjZWeM5mcooaYSA8HAFNqTYkEmZa5GAw5VXiutYB1SZUq6txmUDhXcEzvg92EDVamm",
  "key23": "3bS1LjsqNVpjUT1P51v8UBgVgYpf7G9vq2M2r534yvrP63rQ5fcD8mDNwviQ7EX6tm62mX1hpdF98Rbk2jmxL3y5",
  "key24": "4PS6MMAubsmYtDNou5YE2wKx3nNT72ugJJo8oLVb7tf6xraUQRiGbF8KbF2PiLCHAZYRXxJ7p26dwprWeAUSjmjK",
  "key25": "3TgwtHV117uaUtLyeLXVSSbXHnTBfBWYDVLzryi7ffPYZnTpW1sFFVFrevDSfznqRf7kNZeiVMLEBmkFj7CmKxGf",
  "key26": "3K4DdQbMRFZ9Z9FPNvnq2n8wT68GRFcu7TmbN4QQjmmFFj2RViUZWUt79RPWCdUfuJvki169rvaqmMdx6geuPetY",
  "key27": "3jeeVeXoWTxRWEMmQ2D3W6kzhqRTZcqsBgGgZMv6kgGEZdXVpMdnLFn823oN2UygT4fkBL7Rs5AHDP1xUJWsxiiT",
  "key28": "3dNrqVi5uQk9XWys6NY93wjAWvT2N6Ag567WaPeyjggCeXbC1ttKGdFZgzBjvZbjfnEn3eVgQMN4vxCL3czenNBx",
  "key29": "4PvutWAzRfz7WAiEH3Eohtdp6bqVidw1VMgikbGQxGQXhKFMawKmcd8QHJTXQakSpQWNJ6TNktRgPfHhdRNUEj5L",
  "key30": "4YxDLACxWqhTm3rp3E4CzU3YdvBCeHaJa6t6kDDjnML5h7Lmy6w8yyotzbTFXc2uVHsUp7WxD69z59TncnSbmeKM",
  "key31": "4qwzURDUbaVBgQJrYbhagvfrp4BgyizS9Nj2MNz4C19k37gHYRZ1UdLRn67K1Yr9iUsuXDBnJ7kA3YJdQGuRahef",
  "key32": "4EGss9nWR3NByAabz4Uswmt8Zt8cGtuvGWegNkTahDo8TLxo3Nkq4orTWyGvkKaMFJ8Hwr7mSf11WLyMQ2umDxv9",
  "key33": "3Y53HqULqBTewxKWEFkqycJ9hiNWhrHWPfZLCak6RnaJcyRW1gMt8aiutbC94QgNSABLh7vWyrBuk8kzpVBNQuLp",
  "key34": "5p6g8N2Z3cfLL8u9kdJ2nWdjjtRqe2STPGJUq6BsiqHWB1zv699raaeTwbdGwSVWX7fcA8AJS1YChRk3fsEqrJGY",
  "key35": "5TRu7Di95JHiaRxSPBcAnUhaaexd6qFRDFHmWkC7paSkNWr2cqR6RBK58s1Y1nuvftgvgNV1vjmDjbTDWxt9QDvR",
  "key36": "3CeFTJb2MEmz46b4RxdcxSLd9XnqeBvF4m2H67ajkBU64wMPUgkkARVZzeTRXPZsLBArjFsxZjQHXaAsxg4EjxWv",
  "key37": "2AXhMNgGNghrazyZeS6kFfmdJbWr52W9ktoQJwbPkGbfPLrwMe4beAAStSd6R9vb3YpcTTyBtmL1noWdr8YHVW1o",
  "key38": "3SYYmwwmYpj27umQ1RRyoMm3qVeTanovTUopVrELe5JtRs3HXGrgt4b8UnhhLryqMhBxuLYGUF1z2PasHnDk38Mr",
  "key39": "2maJMkN1oq8nBUNDEb2trDygVR9UC2W7B6Yb2vZntQNNJZ2hTMXEPPdTJm2FQFw3ycYzk7MaSF7L2ucGTqpqndtF",
  "key40": "3seNVrKQ2XdSa6JpxDJ1FvPxngCbDCBjANaiXNofCVHUHqdbP9ANpArenBdEke6a5JUvDQGRCZsugVfDtrabk6Ei",
  "key41": "3JDU6JbqEmz4EQ2beMeFsKRkL4U8dxYpctmaWwVGPngP8eXBaDsER6yDaWaMa3yMbMXa2LEQ9UBEfdbUTjWLwEdc",
  "key42": "21mGPZcE9VVV1TMeQrekFoMdpohC14wMhqCh8Ue9iHxKbBe2seFQ23CpN6vNWk3dv9ZFPSjLhrw2CDacerzCjHFY"
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
