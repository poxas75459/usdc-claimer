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
    "3g4tLNmLu5dTzj5vaoYsFrrE3FcCC4Toq7rXr9XJ14e86fUjLAk8Hn3VBASoKojMT8S6tGBJXZnKiwsaVjqSrYhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bGsyVGqsgpdSvyNHRtGiV8P8ndv5XX47Ns4aLYHr32WGfHyRGRmgHuH39URJXuHML6iCdZkGdn4qWv7zAjd7Bht",
  "key1": "3exGyxiDrWtEexPs69ou6VU1Mi6vMsUV3GbkoZwb2q6yGXz17cydqPCNMLevpVChsC2R5g8APWz4RtH7z5hQobxj",
  "key2": "4Zuj1jNX5aUzaJZGwy5PDVtetC6VVRjh5AijVfviDA7BZw3BF7mEX6iBnGZ6HLtXLxqToe1nLtmh9RMxVzxSFvRY",
  "key3": "36obCXsrhuiHMcrFGRDJUBCQDeNr3kjrRipD1sNT1apJLosRZE5ucoFWyx5HYcrj9o7rtNBjDVpU8Vr4s1Zr7s8y",
  "key4": "Z66vH2bETU8T5aStB3QAxkH6WhKukGEYKTEvVS1NP2p5Lmd5xPLMYcswNFsFDYJmKV9YNvX4Gtx5QPKEc98NqZ3",
  "key5": "3ZvyN3Bp3bG1m8on7BvVA3wzXcpnFNgtS2GHg3Bo7HLiYdYRA8fRXUonirdhditqmfLQNBWKwfXQwpDHCupe25xk",
  "key6": "Bvyku44XCFF9g8x7ozeEXi8f1wHgLsgYYpg4M8MR6oeuRbCFr68mapL8JtvFsgSGfPFd6Vzcquk3WWp7KyhDubv",
  "key7": "Wha29nN1ZqHXQnmzu2ybeQWAesparuHMETi1ZHDrt52HNF81wU3L4bL6masYvSC8egXd6vrVUGvojtNK5b1XMbF",
  "key8": "2xquwygH8qfC4Qkkb6tgCWnCvka1agMdtPtuDYA8x1ZueAQVtdrY3oGE9pL5zaVtgR2sBRpKwPG9YUPbGE8cjeKf",
  "key9": "2dRkvA1HRsTgawmJECeV7cawfbsPT6g3x35RpvA7QjMxFcdZV84sEqFZRjoKHbyoWuBSJ31dQd5jrSZcr3MR5bXi",
  "key10": "3wCoovdG8nRBYaieWRMJLWn2kQr3RFndYv3estdHXtXVKD6BBBQ2YS9YiCBPu5GGeMAeUGyuhRBVLGTe4tGxWENb",
  "key11": "46rwTV9ejVKg1773ewzrGv7ouypKcGUmw88xfPS1Uyg86MTdvx9gNq5urkindbeg7wBFJmmKyNynzRj9Aq3AuDnJ",
  "key12": "2yiu8u6iqF7MVkamJi2Yyh2wbziGxDiYbkwyNLKGYT12A2Q3bkSr1fFAneNaF798GP3TBthwTMJu3Qsyfxfy9RcW",
  "key13": "Csw71GHUS4HCW7sy6mCoRKALPYaPa39yQ7Cv8v38fcP7HdMQ7L8MGQqKQNhYqCZUTWLkKbphhWY1G8AiPWkP8FT",
  "key14": "4BpTeYaqyjKBnFTvErQWyQ9fYLkBu8LVd91BCsdagosfPp9kJoVN7qCArEHkDE5hjdjtNfp4KnyptZukgS3M5JqZ",
  "key15": "3sdJUryWHqongNEi9CUsju8FTgH35TP2D1PZppchW5rHv6DQhqJx7oqf9YgVmeVusUSgUYyLzQHjbL5RR6wBmakh",
  "key16": "4Km4Qxkn6Bon2n8KzCg1i1AFUroaz2VTNidjDaAYnBVcRoSBFixGe7G3dkrZmZt3mBYK69knavFKQqzTvp6WTze8",
  "key17": "FPfBW8DxMFprbGsdw6jPjDxgzG4j5PMT4CPK9LJE1F5bhvgZusd95CjqEUbhwSneCgxTn4TELWTU9NfDRg1BJa3",
  "key18": "39JPSF3yfWfPkL5ozPcRJhNRMFneEkEBNtNEDnQ4wXAoui4waDDgs5PMfJmzM3rxsH94NLuTLPsWSfZ4X4ycvci5",
  "key19": "3o3j2dmBDZyLKrHirZuAjrCVmY6A4ee22EMXJc3qpqjcXDTDEokTrod2LaQwuUiCQsYSHobcHmLTxmhPqYmLo3yx",
  "key20": "53MQPr595hkuHX5tRmdYcY9xwm3YNKx67z1NYB2tqcWorjHR7sUaLHhztGQfn3gbecQ9JeinXvxLwz2SSQ84mGzu",
  "key21": "2zDmQwH5ERUcKxVnLs7K53hdYJVYCMdMea8zA67MUWhMVxbfiAn6EztgAa1YPPYcrLwK64MzykKbuY8NiDYifEkH",
  "key22": "5GTiGK5LQqbw7CEWw1psoiJWXFRNfvBfgnLUpEKF3MgHRpxiamrgrpVLtxckzMUz77spckj5KZHJ7uCbVcFpioGi",
  "key23": "4AdPFFZZzWdP52Pu2Esv9Wuk7npTE3d5AF77u1GjNqtFiJ5XjmVWwkFQ4u9AF8KvEazoa8R1T8UM6HT2ZkF3iyju",
  "key24": "5UrSvjdJcfoBewPCMJP9vHDc3H6Goot77wjPMgWDyTTfhigaUfKZjrDqCmeyeHFaqJi3f2SD8Rf9XPLnmp8Bx7qd",
  "key25": "5XGUcPj4Y92Yntoe8Sxzv4uJzErPWX6jiwW9wy4iKw5dxpwd1P5p4cUG9ACDoMM41RB3hZP1MgW1Ry8a21RgwgbU",
  "key26": "4nkD4i47Wj4kbZvV5XuVcyP9oMTbXHFbxbnxSPpxqp2nCYbbVgnbiwDvgcb97yxpqeSaFqZ9xra5M1Vs2WRLuUXc",
  "key27": "3BRfHooo5tF7oU5LH6bYXG5es2LwxrfXTBsHU1e6rKCbMdzgxnvXJjb7gh2bfjzxRT4GFqmBSv3paVSq7yJTsn7v",
  "key28": "27LyCrnRkgPB5h8BQfJnRKB5EMxCGK336PbPFDiXNzixrHpgo8SG5uyYwHtz5pAsPuMUWK5hY1DGneuJNXkHMx9z",
  "key29": "5WUs2ffjCb99pqDVTJq3i97ucJNmm2MFDKfNbNFuB8ExMNV7q8Lt8LuiKBe6rJZzTeWvtDRFPoBEVEerfvTxV73X",
  "key30": "3wbVJnzBVSG7uuprMke2gGbZ7gzHUQh9QcXjitt66C2Z1pzpC7AB1sguNYarb8KLsuFUGK82ANH7WDwAXpzQ5tri",
  "key31": "Mb3ixgmV13D3mSgYQkdqeWU2t4poxVyLHwk78nRXPM3yEVujfgvLDwGWSuFQ8mE35zarUP4TRNXddFm7spKwUsW",
  "key32": "5Hbmuzxjo6qdqhUbbU2hj22CbCgPBRfzKyExkfMAHfUTNN2d3dZtiu6gFBbJFUy8tdUytC11jcphRxYSm4DwqWp8",
  "key33": "4gwNfGWtujVPRcDEWRtUrBKXE7vVQS4YUx3KWH73EzkKDkUoNP9sVrhWG6VVSmWPXXW29zEKqoAxdrXP5gbYSFSz"
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
