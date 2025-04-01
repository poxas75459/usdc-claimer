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
    "2qZTGvzVLD2o8u5jmZRRDZ4uJaTcdfxVMqiCb92HvPV3i8tnhF7bCFokVxMaFCDcUv1DGGJzfMuo2kDaNuaa9wzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xBxcKr7Br8RfVYdkyEc51UsgtYt9ga1NN1AgvL5Xg7sT5fWpPhqa8KxLo3DFdryRcw5NCyq8EXr2iD85TDQWvnZ",
  "key1": "CuvRqd51uTUzFyoLGKCSvwKZvR2azxCmWYX1Up2WakS9AGZmAvqgrEUsDNq3URbDofCttsnuBBZLNabeqHcmfWX",
  "key2": "3bHQUrUQMoxkVJnfzA99mydJ8PzJLePZTsVafaePMbshqR2Fe49e8TaHCiPFNVbanudb1TRLL3quMxrb57Nya3UG",
  "key3": "2d2X7VUkhs6tRKzdJnDs6uG5PwrHbbx6ezNBmrV5tzRwmX6dGvy12MsDYLQnGsn6kq79qDnSYoihEWsb3PokDNeu",
  "key4": "vjiXXDUnBQwU4bAdgW9qn9riFYm3xyuGVGBXEeaVwdgwbkkRTt2m7svw6LxtnbJWu2mjK8gXX79dd1deSmxFGMn",
  "key5": "3jQDcQFsh7hcUYVnY42TEy6m9zp9ibejHvMZ7ev3SchKRP49aPvbDxFwgHr7e5Fc36wCPxmyAYnrCC3Hcn8h1DS6",
  "key6": "5rbipeWKcLGB9NF65jGjUvFiyeAv8g6HmfmoTSdZRqxaPAyPhZfThquWf8MbV9qdG2Zr3GDqbmdAWsT8KNkVaGss",
  "key7": "3vUNSgpxWLPzfyx1kpiU7CEjmRhwTYwqThAdg4hixEx6q3XYptk4aK1iomnPZ5azVKZEaT9jryG3dpmusXfrExEt",
  "key8": "2YFnabkVhqcFYaoxdUHUYpayDaYEVF27J7iCjUVGXVfSp8KLpdpDSRuFGKqrx9yDviKeaLUJq4zSUjoQgtCqv3ak",
  "key9": "azNfcAUAAx3Y8JJK2TVFDviPUZj4Mmp3n6GPY6UkDQn3EdhrZpCZhx8YG1CF9wefkRrZHaZq4MYBQ9xCjpW6toM",
  "key10": "3NCD8AvUM29M4yhnqNKLkr5nzKkhysy7r5AxwspWUduQBHsfpYzqyqSriexA8CX2FB24JmDJwLXzjT5GLn2ABkgu",
  "key11": "3d6mrata5YZgFJYrq8ZMc8JXBscjKEybVNRo8LQL8dms6f8LxaaVCAh73uWxoia4SAVNdCP5KcKpbAqcNWDShyi7",
  "key12": "2HpJdkvuEUe2DDseAuGo2e6bb8zwpg2ccUJjqqrY5sptW3mY84ZB5bbpXYLY5hiw8kxZbq7LuHuiXLtLyDmKaUts",
  "key13": "28F8wG3rkdqPc1Ys2frx7mse2FoxgcRouFPR8qy9iA7YPbTJA6GufLQ8CPiA7Euh1Nd2PkiisBox1YWtet8TB6pd",
  "key14": "4QoEPxmazzoKsvF4Noabzo2cfEux19Tcdoz51HUKawvy5ctmzdZKcR3dgxnVBczVf8ADzvEm7gBB4oY78xuEQLUh",
  "key15": "3CXzi95YUydLgeKKi4v415Y3k37UHdzaLSBJBo8cBnQktsNwCy7njk645KKzSoEfeSWwBS65zwjBidpuTYsYRfEQ",
  "key16": "jG89gr5yCPBYPLzKdmHY6uQ4BDYZvfU9NTDbaDUNXL8UdhQJCJwWdCnjXELNdwbwnffccGjebbbPdJHg6Rg7e2W",
  "key17": "62Hr8jprELaky3ZMqDGspkS8RMLLcV1R3T149XcNbPdfadhkwY7dGWrSymxPJEueMt31YQ47kXgGPKwdC2jqNs8W",
  "key18": "3pFGhtopx7pMALXhqPhjpX22qwNwcMFJzMMnnVmdWPw6FbuUpn1121HjNmG83H8tzj4hKcnRFTJoZ6xK1FW2RqqR",
  "key19": "4my2iddgoAmdGdj9Mg95dVdHAgbxKqRhoHEr5Ko8aZofU6PSgoPFkopomTNQbgbd53FMdSrjEbapj4TWqNG6jyj7",
  "key20": "57o31tVy5GSkuZfenviueQj6tK7AVgMuKutWAuqBTtrGMPs9LB63cHZqa8JzrYJvJKM2QfmLbYkypR2p763YQwkB",
  "key21": "UQc6X2ui3XctUjwe6KWzT3SgvuCahZhVXu1HyqDtYXQ3sTjwZ4z4LAbv5bbSmXXNKeyL1w1yusJPmYcdci4pqte",
  "key22": "3kY55rAaCnntjpyjL14binP8xxwf2wm68z5FZL2cfHp1tPpdLv63SVFpYx72RBrhQMgbw1qSWMcMzof1dVCCWvmA",
  "key23": "2mK8fhSSK5J5ZxqsvBZcp5VN3dTWTCzAZgrsDNRzKCsb7tH92SEYvxZLj7ArKf3suJ6eSRgwBGzVyNA4ioWKixVz",
  "key24": "2BexCQ7zWjDL31977o7Fh9f5HmMMeYXWZSM5pR9DzBo1LzBgamqazkBTLMWstjkuyBFUUE2BYA1Wk3boMXnSwe5c",
  "key25": "5y7FMFvh4J2vsi1BRk2LqT2mx7Wzsrdcq1kaQfV4hSPnqLXk2aXVXt1Nu1Vvjsr2aiZ1f8VdBNhH521SypaV6iDn",
  "key26": "25QaKkZ69MNPLkUFHFRj1zkoo8BWbcXJLbAB3i2Dskg9pPJwr136z4m2JzWQEFSjtqkAzUqepbNPtsRQtdQtLk6w",
  "key27": "3LMLuTtALaELsXWDpx9MYjzEaFCL5gCoKgJVeTy5fjd5eYWQLxKHMgtpNqSzCTz21muQjWbPZSGTKzAjJiYs6KBU",
  "key28": "3s9zhvZwwa37ZZFbzW8Xp4LokUdzZz4EPfp9rECbQZ22MMNVBwgXBidFADqLLEFNEp6Q2qUHWv7iNEubLmPKYrQf",
  "key29": "5a1fvPSsye86V52QgXY4NLqnN3i6VLc3UwsMZy5Q1fThubkEnMa7MtWLLsnbYbBc5NWory9LTyvC8ktL8oJji4h8",
  "key30": "4BSU31n8kZgcy3oc2E5UftLn7y4gFTWSpa4eN6dzqYu925zdbP8tAVwrMKu13fbmMUn3uNdUGQSUPjRxaBsP3Dwn",
  "key31": "pstrS5c75ATTMAfFgxku7kq3RFP7npGL8hFwGAVouQRpLwij9KpUB8zYMZPZoJDtt654bFJT2BS2ccXUeGzeZZb",
  "key32": "5oxAuqC111AzUufnweqex6eko1WxJrTxhRoKi7HurCUEXKAA2d4Q23z1JgzBs5PHrTCN2TYA95Y7Tzt1Cw818xCK",
  "key33": "fSPLqA5Z4C6Bh6NwNXmma1R4fEMW8Dyjg3DyCuTRnG61Tptm3sLqiYHnTGELJqUpZR2Fe1viN9g7vVnFziak2Nk",
  "key34": "3iXurMgmGUWjR2o2JkGcpGxa2VC2UL1iTgjuqo4G5VSGRWYyNhmxHgfMPS1CDewU2j9HAk22FRvMUDWEAAteqMr2",
  "key35": "2P3vZTbsrvLzeWjQhBb3j2m9W7tma37MR2aupfkDfLsmeXpe6WK8MiNSaZh3z7AvmRxZCtSbRbYtJgBPvdmYkMhY",
  "key36": "4DN4pvW9APzwwAZKCFDYhN3XhMeopDPKzPBHrn5mTrsLJQ82Eqm9XELy9jQZyRWkReDETnb99GMYEY7Mb893enr6",
  "key37": "2FuKMkYYyVBSmJZLH98MuGRufxEAhuDFzdtBtvH2bcp7LFVSTQFvvs3Vs5azicJc5fgmaYnbU84VJBHcj8fg2ht4",
  "key38": "2Td6UEzk1V4oZcJnAzeKg5NCCagui6WnEmJr2D5uYrwiSep7WFwp7X5KK51fKsLgAtpiKLN4bK1ZwJAqVYkp8LTw",
  "key39": "5T4Yq7G3dYPz2mxwhdDJUGogMtNADWx7SNG4WaR4QPbVMtaidBNayjW8NFvsFNk1WkzasBtokitsq7r9sdJ1rkdP"
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
