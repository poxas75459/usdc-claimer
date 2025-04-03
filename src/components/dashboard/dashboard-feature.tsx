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
    "jpYCQd9n89SrS4vEcH2nPV1GGvzq5555SdwVAYa3VftDpDEEDryJpbAPfJ8y7Ry4EoGnetLYe11NUL3ZLCYbxWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2im27S7eLVGuyWRX4FPmf1n6KJwQF8FTpE58ntqR2gteQUHwzD5ctHFRpL1FRbn8Lps5opMPwawp24BDS5tot5Bz",
  "key1": "51w33Qoox66pNHmZQ9CJULmzr34DHicWst86GfpJnhCi4WiHkZQftLQqfy45gY5QjFcg8WQdcuAfhXs8XD9ovJCV",
  "key2": "wqhyaw8eXXPx8qWSQMjgjGiCjTF8iFMYkKrSg5pHRpgNMnMscqe6nzU9U4zZLpsyBoP9TBhzVnZ7sVtbdHuNb7B",
  "key3": "44NuHKH7BUFH6xG3F2BHZLr88hNnyMCCjYompfDeqHnUnTkXhGnHUFrjYSxxvC2k4k4d5FaFhyGhoofzk5dDUFFA",
  "key4": "45QJzp7oh73LDehY1AY2pZAgbUsLi6vcbvWQVTgsHXTCP3ASbSaxKjRH26Du4dCF5z3LUhDPMskpiTR89McgUxGZ",
  "key5": "3tzSKgi2pUNW13nnRthnAG2ixVhUhRyn3qiHxj7pPvmkX4YtioAm56aDVzQE29AgTuFUqvGPQnSCs5EtvncfWKmG",
  "key6": "3yTiE55RkvX5EhTikhX2SPZUFfGrWjvTiyuAGdWXq87KntbSrzvSRFSEoybtJCtdsm71E3HnLDRmTRJRsbgQi4v5",
  "key7": "2e4qfU3iUhsuTVHVa3M9M1P4rSdvtkSXmg89pTWDwaC5BnVkN21V31C1kndgdwYvRgaoqSyds4D86PrewrR3gDD7",
  "key8": "3jZ2FJNoVHEEF4YLRDx6yMSpR3uZVHacuoAzaKzpJombGgwEJUXHoJgqPVdtZD5hMioCakHa2zKPNJevCJtCp9aF",
  "key9": "2YPMuEhMP2LkPMxKpU9qd3p1Hs4jPaY4BUArQKGCT1VbihgmnyBESWnuhdgw4TyyAikKdJzduGU8vyTWXDKTEvRd",
  "key10": "4wGWBzwZHN9J7KvkZbxzG27Cc2qFZ6HPpaBVUky6p9qp5W5MHk77SDCNHekwchLsnkxDwV5LSbE4t3WNudXCenYj",
  "key11": "61BXdG63iU59Caj3ZwJTWuGpPUd9oAsA5VQEqLRkPZkphWcV9ckrvucmfgrAU6abFq8kZ84AmfKbSnL2YmnyVuab",
  "key12": "5NTAcp3uLY7CW4N4DyELivUFcri3MUHRvCmq4t2b1hbtxZwTZkvoqKqDq34ZrmfEfyw2q6D48NAQBi8XZL1gop7X",
  "key13": "MrW69ddCKV9Mp5dzdEtivK1V5q3wbJnqUtoVjstuwV1Sdj5UuNoUxkKAu5Dmf76KRqkHfzTYkUvudWqBxiWiNAv",
  "key14": "4Dbegizq1gUNrBwY7FHV2ijSpoG31Wcb83xJpHno3HZjn168HR2zUU4zxgCUQX34xdSL9KbsBwFSi1SL2j2LRPLu",
  "key15": "3DbEbZe9E6fHTqRrzvrkXnJtAnYf4FL5bHP21GVABbZnHAB3WCzkBPWpcWrkZGkFNDM7K5oF3oU4dCynaqwakRiV",
  "key16": "bpbyjTPqQcj33Cy27o1vdLLd9ukvCPhk5rD8DC3oyWSziXeZBHtxECDJMfNoGiMGfeByRhbNECVQAeAzBFyeYJz",
  "key17": "527NepyuCzq6FBstXUhScr2mQZXUF4XoTej517Yr7fXt5Viue9MqxJjFZ6BwkLaxzF4NUrrGdvfJgwVdPZioYtYE",
  "key18": "2YQ4GhaUmX3TbHSnghD8w9v8KX9jmmKeF29pzzqMMobyw6io5xLPWxKiqTHasxpmWemrkyMGDjQdChjdreTdpP2R",
  "key19": "vxJFdyhEwUw3r7EmBhdezauv7MYUtBiY5CBPw3nJhUiMsBpAaT7ocbMNQtgoFv4cAwtqa56tfsTCC7jUs2prsum",
  "key20": "2GELQbK3dcuzfofzkoJJRzbkjSyYjJ4r3MeuRCR3i8dzgLkWHzLRrwmdGajTSrTcFkWQwxWhSK93MHxMyX6tbBnP",
  "key21": "2H1D5tPDbQhxtZyoXFSJdPALg9eYJ8wnTtzRvBkWV46fACUT4pJP51tsiRMZWBshSMfT2KpLsMPFuS9hmqcoH54b",
  "key22": "3NJCtcHa6gpfnQugsaPyKZGvLvXPEtVzSrQFfzy3PBwdXtGtXqBsvcxPFWsG2x1QTqp5KFhW2ooKCxjhuCxyZaY7",
  "key23": "4QhHCwrEQMuC2GiLun72avuB2rh2kYEc8JuUQwWLHwMRsmSrJ84te3jUDbYQvmJ4TGp3oTXu1dize7whr8rhfeaj",
  "key24": "2vCgZQRN2HC5cF2FNgbX17FwtrLuMLF5Cc5TvqrH7wXxE6nEMvoy78MXhXTDCBF3mpYNMc5nHb62ySfJpfjtyBvG",
  "key25": "32s9YRe4o6xjofqgzRUMLUReMUhZhhhtVbQxTXqzaJEs9CuydRG76DcbwiYegMGFLbx4Yb9WvjE8tSgsJHsgKkwF",
  "key26": "5iSGA27pV9EnPECDbQ3qbHKtsnkcLbQ5fEuMsuvQ7YzxC5Bk2gep3WtassCAwmcvsEYxPRuLYdjX2rFZWMskxchW",
  "key27": "FqhJ8qd4od2KVmNjbCeyb1tacRDxBsnWfiLnMzYZfv8QquEiEWSH1pRAp3EAD2vCUpV85zf6GR3cNZmLyXGV1yY",
  "key28": "2poxRXZ7w8KzyZLSU8LYdk9qfTMj1TbaKnX8S7omVqMUdYEzv431mdzaVxCr19MM9rHbPTkB7QmvxFuNyNzRBRv",
  "key29": "5RWNtJXhyZjuLR92xAvct7aBtDXP2rdwti1dxqHzqeSAauRpM5ywAQV6nQRWwBHDn7w7MeABVVUxNfZvCv4o1dTm",
  "key30": "48aWJchgaq2cktxxihHNx21RuobJMg8jrLYnL5LuhHxukXKmKfDDd7VZBv3utoCYD6rQLLmBinSXWUTkbzvpytRw",
  "key31": "3sYzPq2upAfQika27eEbo4yhS16QHmKQVcfxp2GDc6vKvdbke5XSu8d7gm5YJvqwa1EB553FohT826t2cDoED9VX",
  "key32": "4EZ3LJkqYJ7JptdBTsrJzW3VEngEXvtKTS3dwd8XbmK57KVMZW8fmyX84jpaki1eUkd33ASEMt3QGCawDdU6Fgat",
  "key33": "3qVRaszHCQBTAeeytAkmvESZW4b4ktZNKGMuS6aKLF6sF7uiBJJDSiTd23jrYVHVhEBqie1S28tVz779U1DSuP7q",
  "key34": "2hU1YoG1MZ5RkBkTYoApLiDgbyDziWegqo9Yf316CP89Rr6VdXffE1c4s5pYkJUaVcoAxxmBpj1qFcfqUmCJaESA",
  "key35": "2hRnTr3BMztM3fvv8N8XTVvqHWNC2T1QLyw8okdoV2YEwQUaZpvqnPPNwah7XbhgxXH2WkqmKRZ44mxkDKz44jWk",
  "key36": "xrGMnCPFn1ZBfxHhxh1fWzi5HrMC4dtjA1kP9sTjCKwxZkMpoDZ1j5LNRKaR4nBmFFty56pbDGdoMhA776RPynL",
  "key37": "5MWqWZBt349TAZN5TRmjBc7GgbmsPd7NDC6XPjEoqJ493w5J5rTxqpBCvBk3QatTKvCmexFYqxughVUacKGjFAWs",
  "key38": "KQnXgxd9Q6kgyv73Nz92uH9bY2HGMcLdMeuD7JjpWVfrqzs5zB2U3LTZQNALf4Y3BWKGPf9s9KG5R8FGtsYsxsW",
  "key39": "3cxLo1p5syQrjydTYBh1qZPPSEXK84VmKZeFvyLVkZUjVfrn8TyhXCxMDNVaHJ7R2NH9ykYvSLyFrQVVTxLfbjmW",
  "key40": "4qR6amYYr6aYJ2LBt3NCJpsds8vjAGqCZoJVu988JdPDJkzS8S2LMVMvtorwJUdkZygdCAFMrudLwLbMwttSgqfH",
  "key41": "3K9ChFcvLHamyFiquzak1LtjxQMuXuELAMhtyiKXPFEMCw8KMNyWZvRjXV4mkP4kdcBYzcDCHaz6Dw9BA4Mqcmom"
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
