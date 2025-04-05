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
    "2eU5vtf9o6b6XmLudeAwCAE9bKyMM1kBSVJ7CRfJcHE1PEPsXJdwmaZFqWzK22txrfv3xpuKtQuB6s6GnFznGUKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NKjjoXSK32SYYitsEMSwLsRN3DaWZfdwrs3G7xcc6ufPtuHJ7aqTsDitGfxaJP698jVinzC8ktjbKiT3b41wrt6",
  "key1": "548NRoXNorBnjESNWQFFmPxrN1RKNQpTQWGca2fZ6fDtBYgJu6SUXFGkzGzQSZLRjNcqKdMb5LmQQtrvzrQUD3MM",
  "key2": "5BK9dqKfxScM6N9WmifJYxLfJteZbzbm63QWszFqTshjCLpGcbLqSgMhyWNzWGdrZkRJiykxzDP4qDuqdNw7SCa8",
  "key3": "3XGVmRtKJ5LYjZXoHxgMJhJ23sqvzk8ijeJbgWSoJVsVnLycSaxetwRJ8mj5XNLfDSfYinLdHadXjvRD7DvV2N76",
  "key4": "3cxCPNw84wxcf8Aw8jzgoZT1Wd41AFpKBTCY9tuo1NMXAG1bbhF45KnxwgKR6HfxeW7DXZLBswxveGiX3pkoD5Yi",
  "key5": "5c8Hz8qMGpQkB9mNPw91iTpJdSKvVAnyiKg7uSFALJ91Zj41rv2Va6yRYQjFup6Vi1Qc3fQ14iiCFnYfP6fU4ckA",
  "key6": "4Q1PwE67zEsnjtpqEWam8ZEL5G2fyWLwa2thU6bMkrZF1p4eyU4TDYQaViVeSHGoJEgCj8rMbZS2gL1ENwLY6DGr",
  "key7": "4ncNvHUURQDTzznJkCLXCoPB8dox76QmyP6KSdKmmyc69BrSSGn2UL1aYffaiJfQPYeKQcELZnA5XKyvkDYzrKbt",
  "key8": "2F35JBdazKTBoLDKRk9dTwdX6zye5NHnbQXsmaszbgQJgxFDsmBpQKZzJG9XoQ3G9YpX2nFejGKgxK8pzrLDe9Qv",
  "key9": "qi4MxpGR412WD3jYLgjwZWvYiD8s12cMRLqXfKN4RdMM1PPq2M6kUek8fi5RgsvgxvEQ9rNh4dPFLbGKFbbc6qX",
  "key10": "4xmfjVC1mQXjpjGfyqq8NLjid5Sn52dpMsfoVYgZgonFCAW7FVyGMEoRmNgsvKVdi6UzY8r8GfNefJ8RLV3GUrMu",
  "key11": "NP3GMThBvW5KgWa7heXU9ZpBdudEp7h3vgcBxwpQmojnSEodFSaUhQFacVUUbqTbtBi2hh467b5gysaCdbPDYuZ",
  "key12": "22ucDFyY67SC8gNbh2TGrMjWAXLVJg3JA1ugPw7ajN9RjBitMKkec8cSe2CUSbNEXZYTeckHsX5xinVkPiBxc4gz",
  "key13": "2TVXoHwj75qK9j4gXbFR1R1jNkCXosXjVWSAbdtCmfWhHBmHtVBJLQAEydJPPp9nGMpa9bQ2dc9sMu1h6Xem65Xz",
  "key14": "2fst1XnfsVc8bc1tdRwnDbytCoHGHxKeSmqK9p5GnVT58NmmQf3RVxNLph5R9m3xzfxZn4MyASU3wTPFvoaGcVy6",
  "key15": "9SRCHWDbfbPY71BK6MBAYdx5NFjknB7KjC6H3ujKiowLGnkF7nbt7AA4dj66XLTBSYV33sjbwdBgqge2zYzEEW8",
  "key16": "4a6bCLjd33ZDZwW1E59kccKmftTitwdwSfeMWFN6MbN3HVbvsqz5DWRcUhMmJvFxojW2CFX5oQEy7qQM8JE9gk9i",
  "key17": "5E2dvGbkf5d6NjaKSaPRuU7f6CUNAb1hqFgXeypG1h5TZgg5nGLgNvAcNm8ouHgukeEPjLgk3RbHSjRY1Do2mypX",
  "key18": "2Z6DTfowzny2umKw3aivexfQaHuEiDso9nu2Z3j3po2b3c1EXrSwHC8C3GuYHNBziybaVxafEhniueFWQB5pGte1",
  "key19": "4croApY9sRm9mDsDSrZh2TY5kERSymN1YePSbeJBCn9pNNNtvX86QmiLJBTGHYJrfvw8ci6YXsJz4zPy4b9FentM",
  "key20": "5WH4FSJWHo9XdXzmXHCVYR2UnEuRndNQcH3e67BapgL6KGhUqN5EUTfdutHntB2zvNXiZhF8yLVzLKNGzabRwBp6",
  "key21": "rh234A7qUDX41gub4msNjgCSBRJaHCPoB93Huy25N6iiM1vdiTQQevgztf3koTmUSuWuG2xVP46rWYh48hLeVJN",
  "key22": "46fC8F8XdUKXKQ5jpZ7Mmv6Buzj78WJUtXbK77rM6SjbyKq4BAXA3zgMdWsuoxFirwjKh3iHxEsYaUoc5sThnXm",
  "key23": "22R21V6KT9ytjpPqnW9AjgDDusrwBdBmsy2pkytMMrnhPN8kV6DpTexiP3gecJE2Z61HXaiwer4KF7tnTRHYkxum",
  "key24": "2w8S5sm13PYYVB9HgyMscMgTzRApzhAd8W2LLWUdnk5TUgnPu7zvAovdguuQxSjWoixaFubJsyxGEwefn2LAXV1g",
  "key25": "4YgLsHQqT6sVydZ39YjEzBuT4qpJwQC4zYewQeyMY8kTrvD3kXkBYaFFpQo634Fh2xL55afP5Jeda5QesfLNTevQ",
  "key26": "5JoSxUwwujBjppRs16GRk8Zw6yfe3JRm2SEPNya1ES4etUnZnvL4cSjardaMoBSjggUNRis3DVbYHYw4JnmzLFfP",
  "key27": "3Dxg7xcYk8rtSMyKHjRtUu5vxNjdh6yDihi9aHoEcfRe9M7cF5yuVCUuSqmFYhV2SBX8ffeSCruqmRsnN3mQfwEV",
  "key28": "4SxbFHM6YpeRarhV1DpxdyDgfyJXbuKBxDrkcpQMSx5AVFzeMm26htECsXoDiQai8JdsyktK5vLnnpyjEWoz5CuB"
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
