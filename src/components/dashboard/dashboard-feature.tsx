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
    "38td3PF69rHSojCiWN7uPH9b3Kzr5uH3gf6Fbu6a6BscsUggxAakXFCzzqGMj4SAJBJystNaoeqLJne1qXKaVpqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RqirqLCW1AZZSLR7U69TjqpucMJAaRCif52MsL9JPgJuBQ8fynCkm8Ng3ZmQuqLyvA3qemdSQzqnQdYEPAjHZp4",
  "key1": "4BfsrCqBau98FueZfbjEAEzc13nYgAFEyWe8iF5CAGczT3rsiNw3guj4wpsYnNRRcfV5c6PxfXPcgPA92S33PBX3",
  "key2": "4jShrUaTQWtNXiSfoofaXxStVTGLWzpLdXPVFUJ8qXme4XpADcCiLdM8JRsZwVBBr47GirsaZx7TTJE98wW6tACB",
  "key3": "4T2s5iq3nw5EAuGwHnMWrwyzffELbMi4rzNUPr5LbMZsMEcg3v84mmF4iDx7VyxfvKVrmGYQS55mVtUL77goEkVD",
  "key4": "3woB6WTtwar4uC4ZmKkkAS8ioGWgWdr292mnEFUg5zLD3RoZemb3hCng8Snk9fJXc19sotdDWAqiuVEWsUv4KTi8",
  "key5": "5i2dw2qC1ocy9iGEo76TnVkc6A1thcggBTvDWHy4tVsghqdzu47guwtxEsmKou9usQ6L2AYnMHQHRxapEf96HWbi",
  "key6": "557SmeBHxvFu3Naq4VCqRJctQmsAmMkf9Jrq72unNwfgHnhdvx3o3XsY3ivcaKYGrqc8o2y4bekMN3CBAEDwsgu7",
  "key7": "5Go3bF3yCuzs8odzauhocHDjH4WQVPr9qBPxCcSFkrtn8WHuM33iPyeys6JRESaU9Fr76wv7xjD3aJqjxq11ZLt3",
  "key8": "9i731dPHTQgEFJkrrBuoXWcocNSkB12CU1vDoUpncPLNHqAgXU6dhJY3VfU18Jih1XYHe7MgdP2NDFpsJrKAEch",
  "key9": "67PPUadiKqEsPpHbqWLkX9DnQquKHLKgrsC7VmJcHwqHMwvUjGoTinUaS8iihtVqoJpNLGeg88R9YXt3Rjg8pcJ1",
  "key10": "4hjdedTqhdsdAFR7DVXc81UGgeNQT2HGBBb2fTTUU9Z2sJZaSrVJLTdu4EKdWW3d3WpxAGQrwr2tYQBuRr1PoXwB",
  "key11": "2oK7SQfyvFnDAUEfZ9v5wwVweYJMoqLMvAwzJ2be2pKUFV3chHMYCC8zDx5ZJpcsYHdtSHUs9M58BULa59DxFGK7",
  "key12": "5gojP6j4f9V6kUM8oeasm21hBmmGHByseVEtjGKFv9DJUMWQ997GwKo2d64tMRkZQgACHzECEiAcEWrGwTXhpiHA",
  "key13": "4VSpDcWSF1Cd95PGQ9AcneMBGDE65xwxTY1obxkdb7tQscxbjpb3Dkmf84wULNuCXPZ8pGQ3LSBD2PGZYw2eT3vv",
  "key14": "cjivniqrzaAYhoDHqWtXjKtuycMehD9awBggpS4ydxWbNdQnAesVghNR7dp8d3ufyiQ494vRpPgFA7uU9mLgdqJ",
  "key15": "4jXuF1EtUhS9WSunQCy4cSfBqBe3xUVhePynd1wmWKckd7H3grh8819ZGjEcPnXwYz1kB3XumC92vRCVozWrZTFd",
  "key16": "mH6ENgZrq2s556jhbRospWRJZsY6pDJXfTNyDuR6CSfaxWQZUK4t3nrnwpSMhVB9E7oFcNSYBmyADuSRrn4LDzy",
  "key17": "38RxUxkzFHtVAnahaQmRPPt7Yea9T1D4DyNtxVohrYSbq5QqjnTZ18fV9cc4gSnjptpQvUDmf79dsbi9AG9esL6w",
  "key18": "34cwkHfJvYsLqYv7vV36FMnt83sWphqJci53ned9iLae9vKZjHHbm3oY5qNBebEQeFv8Uh9NnBL2mqLrrkttbgcg",
  "key19": "2wrc1wHTHPJ8gsdcSzEvk2UFqioWvCqxqTYCdGD5wVA2KpBnCtZAaairjbtWCJfBuHgkiXrY82av8Ehv6izCwoLB",
  "key20": "5BRs1VnFgAGyPqMgfx7mYTAvTeCLRWAjGp9YuzGSos8HiRa2P6ijyWHFpj5Aa9x6DprCTimhaYSqUWgeLKgZVqmj",
  "key21": "4DfRqa8hX7RgyjKmCoLaazQvahNuQiY7VEoGargjB1GE3fauR9KirryAFYBcg9r8Pm68fVs25zoEHQpRPoCdNc94",
  "key22": "2zxt4WJF6LuMZeVRBjmjahgDeSsXrzMSpLXEgzwRw5Gfv5aQm6321t7wYyJgB5uvBfFJWDNoVoCXUtpCZvkcLp38",
  "key23": "3VXqHCMHETGhPqqLfrZNowQ9ZPSo6ctfRryPbrL6LHdHCRvhunX4JFXgouuKkjzz2GVtrKdMr5bQqMK6ZKfzAZxQ",
  "key24": "2rHR9JyYykNbYaFTmdQqV8NYvwD2u8kZAXYdxnGtcrDHpMKEyeFt587SMqKC6wbV1YATDy62TQqk9FZP5GFh9DbY",
  "key25": "k4crBuuNfhxxSzTJdJiCnB11jmL2vfuJpoNS1zrY1Xd2fPuJ9q5yNQLYSezRFUsZjNzgxVP1A1JQoEKeakVKRPz",
  "key26": "PH5TykWk6ddjS6HeyRcHGez8mjvyooiTqA6wW93rSLgQbf6FNJ9Ug2nsrZrHwVmPxMQKv8i8utb9RLsqFY3Hqbb",
  "key27": "45TvvXg3JyJQmnF5jZ5mL16UiP49XX5wJzrByNTm2drXtzRBY3Nqrk8isutM1ySvJycEFvaHjteqEwfwbvRHVPG4",
  "key28": "5FzwTbaTiAdFvkQMUCFaPu3W1A7wKLdsd2ScEhYKah7aSU7x1zawSCd3pcTcmDbVNPQ6ejZWW3i9YhcP5aGLYCwM",
  "key29": "U22rNRH7h7E69fAfchy7hoiZgwdqmZyAZLkdJXZfMjEBzM5HRNmC6CxT4eKagBbCxrTWz9R61GwMZVMfueyETQg",
  "key30": "3p93SH1mFcTyVUfowSkvTavRdbijdFwojBxDa5pmGpDpLYA5LP3J34PoDHmJopczYpqi2MkwdxyGcy8yvSWHmwJL",
  "key31": "31sf4yCZ57SZWhRUrk6eWtZWajrxsMtbqPusfmSGDLy3UDUMELCVRP7tCZsJeFe4wJbMbjpDjpEyQU7wrF4RCW9c",
  "key32": "2dcMSJSZec5ktRJakf3SE4SbT2Jphd3K4XTbq8pepKve8amvdqvFiLTGCNTWa8PU7vgV4q7NBjNTB9S3F4kyByK"
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
