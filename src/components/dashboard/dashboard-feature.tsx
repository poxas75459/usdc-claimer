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
    "22WXiGvs8UFZ71TBkxCNNuEoZ7AjXJ2KcgkmSr36tVQKfEXJ6QuXsBads5VPWZG1qUYi2WuFFSN3SRAscyRX5xTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cFZz6SCZvg3yU4kTHkF5SohtcVWCsDxLb4KTPkGBzq13BDWdFjvPJ9F95hY1ByEAm8KPuwUXaxwPf6hLMdLftBW",
  "key1": "346QhgeEFaT3GwHh3TsARWrVhyjyw5fmUewLQTjz2Vzje8dcFiuqcLZ4wf52Y2MnghJ3JrsXQfVPwRF9gFtGLyjR",
  "key2": "4Xdkq8BoPbPt6fnwugFARCn4TgStAoBwu2wEMm1D4quSMEZkJLC5ZkW5zbRgJh5GfMUCwM32yhZTwE6MurQNHgz4",
  "key3": "3MQRPGdqhnLAawQyaa6fCdwG23MXwANk2suKXZ37MUzo7LrFNW3Ru3sxmWBqjuiDcxrdEUe1xcFnFrej9MGFMcsd",
  "key4": "3zjmnqWCUaAqwS5pHafDBxf6M77xMajBW3Kurep66NaPJkdtVg5Bd4J9p7jLQxiexGHyqUPUAdLeZzoEDmThYakU",
  "key5": "49ciz5mL7oNSGoTUipWFwVjSoQooVczLapo5vx6TN895hAxzLZ8pp3Rd3YcVpvbJiYbDySSvSEya8RXgnbrY7ea9",
  "key6": "2FsENwVUv56S7ga9t6GuxoTFkuHWAkniSNN3YFzweyEkvbEKKASGQYH757DKH9nn3jTXX25o37GS881QuzC2V3AB",
  "key7": "3bahhY3XyZ7SPbk52xDezaNX1ND8nqGeanVNZYdE4x6LcoHN7rWgeq7UdvtPae6gPr7tWPUAkxf4KiBe22r8FSWE",
  "key8": "aLmyPJsAUnAaru6nLaSCu4k1ZkcqXwojTjqStrftSN1ukxED1PG1yRrXcxqWvSzAnzRusV6QtNF2roTK6Jho8SL",
  "key9": "v48UPa8ehm2PkkjxrHtARPaDe8WW95G9wjJXs2GNWL6EEKojFSSSwtzzB9RpwuMPCrEyNYa1AqLMQJnVLheoSxy",
  "key10": "26ron7CmnnH6CXwnufGu3EZ1NDRwBXi3f5FGUvnEGCSum4poymft7QPco2sXWVMn9z7hdvr1dmnumprnATz2grWE",
  "key11": "4NweQg9wi1dGMqQ8WtBPhAvjnvusBjG2VVmAodFbvJmRmWmYNVk1KQfXwz59mPaePqZpRbuherJVvsfgwYXAcvnQ",
  "key12": "2bEiyhCCWh5vqYcsoNm77RBdPJqvqFpk5EEQL8zhHBZwS2ZPpbbtGYzVq8J1Cb5nozHFPiw354RKHKFkpJEHEQGX",
  "key13": "36z1DVkymWANUbSkVCyADbsaR4Ki16gujvb6aRTe998kkrqoKS3obuirvV9iRbtBHMpTERizwPfJt3QsFboRUFvr",
  "key14": "2HaPKS94Re5XAoMsjFhZCaw6x3L8dZ7o2cC2M9mNGNSFgJUijKot99aien9osifQSgeXPWTFQcmvSkVxzLzv5B9U",
  "key15": "u6cN1KFZ5T7JxscbauEcRxXiUSYYuRs5dGJHCh1bv4Wj6g7C6y4zPb252t8sJQGNracbMpo9K1bffqc1A6v7f1H",
  "key16": "2rSguq7A8QQMnjDXgsoaxEfKKPYJ7iyArCKQZdvhGkfujZVN3mWV3WwDo8CjdkW4Evdpr23Lev2DroG2aU5hB1Ai",
  "key17": "3nLjtxum4M8uo5seab9z5HHEzhXWPHX6m6gLMJJWSiHhW3i9TyCzL5pbj8Fw94Y9bedmkqv6xVfDwboZQUSjFHNe",
  "key18": "2afbcGyEroyV1mqqyyZ5YkAseoXBNZJ25PMm3keuNWC2S89WLUJfdYkjJwvXDetueD95WF9acbwsdqiTSDS92Tv3",
  "key19": "5GVVcp6nebwTGhRUhvxUKFRNJKvyBbFCqQi9Prjwt2XFTRwju4tyuZtC8q5J9CkxdH1wh598teARnrjPLJiC9Cxx",
  "key20": "4ntdzFXTQTEta8nnzaPk4zYSCrM3HVneiih6vKBnqbNQGqWK1iT4qfWMrZv6YhNiZDm3vdxcusXkxc4QaD6s4eSN",
  "key21": "2tKQbMHsRzhC8B82Ju5TVDDGeXZQSGNimtiyFKvnTy1DWfYHPLkwKLc15teYQTsPxi71hA6UjoegeAaGDQVoTQgX",
  "key22": "j4PKRaHDPefdnNn2iJhZmGXK7wpfReirWVogcXg7mKPzGNi3cfDHeimV6EpLSDQP71hLtHPt5UdRKRtDXYmViuu",
  "key23": "2WXajBeqcEWmSpMUsGmYRZth3Uaya5ZnhVtJB6MvUu6rbN9UARcAF2BQRANu4nVpZMYD7EqnvSSFQHbFx8buLVgo",
  "key24": "uY324LFZzazETnBMj2NFgpYkCF6PbGvZbhPZF3rpD5dXgfPebEX48nRi41RCxbAap6CG1kS1zS9R3kB4SB7AYRz",
  "key25": "3ZhpkUBxNgvNYdFtbVkrXrrpExJKSAYpYhV92Wzwkstntrs9R4AFq2Ec4N1YMLtRVo24cxStVfuwPDFUQ4KbxKiH",
  "key26": "HEv5Uhv8FrKcPAc7ypedsw6xEU3Ydk8RYwjGpjz4TTxuM9wxCZRyGQ5MhHeiCW9rgBd3NPV2vLbYH7g7Te4JTDr",
  "key27": "5jzz1qd55WNmnMBXP6cx8pMd4zBhWiNRhXxRCWi4wxFGzKy1fgJKaLmUt5uqoybcYmgCJAu3zYsPPHVu3NGuhtDd",
  "key28": "3wfhsUArJG5AV3rK4DbtezqowNB2M4YzHrBP3K53gCfAQ1Gwncp2WmBZwMNK9WiMCScHJAJp58jMZErsoMcJraQx",
  "key29": "2FseLxyNkru3APL9NLCov47mjuctWhRHKtGAtCLQYkfVQwXic5mbvhjKPEQXsQxjDiGDA9BQqU2K5x5Ue4JbBfeJ"
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
